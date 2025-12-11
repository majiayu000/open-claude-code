/**
 * Claude Code v2.0.62 - API 客户端
 *
 * 原始位置: 行 300001 - 320000
 * 模块: api/client
 */

    for (let G of this._def.checks)
      if (G.kind === "int") {
        if (!D6.isInteger(A.data))
          ((Q = this._getOrReturnCtx(A, Q)),
            d2(Q, { code: sA.invalid_type, expected: "integer", received: "float", message: G.message }),
            Z.dirty());
      } else if (G.kind === "min") {
        if (G.inclusive ? A.data < G.value : A.data <= G.value)
          ((Q = this._getOrReturnCtx(A, Q)),
            d2(Q, {
              code: sA.too_small,
              minimum: G.value,
              type: "number",
              inclusive: G.inclusive,
              exact: !1,
              message: G.message,
            }),
            Z.dirty());
      } else if (G.kind === "max") {
        if (G.inclusive ? A.data > G.value : A.data >= G.value)
          ((Q = this._getOrReturnCtx(A, Q)),
            d2(Q, {
              code: sA.too_big,
              maximum: G.value,
              type: "number",
              inclusive: G.inclusive,
              exact: !1,
              message: G.message,
            }),
            Z.dirty());
      } else if (G.kind === "multipleOf") {
        if (m$9(A.data, G.value) !== 0)
          ((Q = this._getOrReturnCtx(A, Q)),
            d2(Q, { code: sA.not_multiple_of, multipleOf: G.value, message: G.message }),
            Z.dirty());
      } else if (G.kind === "finite") {
        if (!Number.isFinite(A.data))
          ((Q = this._getOrReturnCtx(A, Q)), d2(Q, { code: sA.not_finite, message: G.message }), Z.dirty());
      } else D6.assertNever(G);
    return { status: Z.value, value: A.data };
  }
  gte(A, B) {
    return this.setLimit("min", A, !0, JQ.toString(B));
  }
  gt(A, B) {
    return this.setLimit("min", A, !1, JQ.toString(B));
  }
  lte(A, B) {
    return this.setLimit("max", A, !0, JQ.toString(B));
  }
  lt(A, B) {
    return this.setLimit("max", A, !1, JQ.toString(B));
  }
  setLimit(A, B, Q, Z) {
    return new rk({
      ...this._def,
      checks: [...this._def.checks, { kind: A, value: B, inclusive: Q, message: JQ.toString(Z) }],
    });
  }
  _addCheck(A) {
    return new rk({ ...this._def, checks: [...this._def.checks, A] });
  }
  int(A) {
    return this._addCheck({ kind: "int", message: JQ.toString(A) });
  }
  positive(A) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: JQ.toString(A) });
  }
  negative(A) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: JQ.toString(A) });
  }
  nonpositive(A) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: JQ.toString(A) });
  }
  nonnegative(A) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: JQ.toString(A) });
  }
  multipleOf(A, B) {
    return this._addCheck({ kind: "multipleOf", value: A, message: JQ.toString(B) });
  }
  finite(A) {
    return this._addCheck({ kind: "finite", message: JQ.toString(A) });
  }
  safe(A) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: JQ.toString(A),
    })._addCheck({ kind: "max", inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: JQ.toString(A) });
  }
  get minValue() {
    let A = null;
    for (let B of this._def.checks)
      if (B.kind === "min") {
        if (A === null || B.value > A) A = B.value;
      }
    return A;
  }
  get maxValue() {
    let A = null;
    for (let B of this._def.checks)
      if (B.kind === "max") {
        if (A === null || B.value < A) A = B.value;
      }
    return A;
  }
  get isInt() {
    return !!this._def.checks.find((A) => A.kind === "int" || (A.kind === "multipleOf" && D6.isInteger(A.value)));
  }
  get isFinite() {
    let A = null,
      B = null;
    for (let Q of this._def.checks)
      if (Q.kind === "finite" || Q.kind === "int" || Q.kind === "multipleOf") return !0;
      else if (Q.kind === "min") {
        if (B === null || Q.value > B) B = Q.value;
      } else if (Q.kind === "max") {
        if (A === null || Q.value < A) A = Q.value;
      }
    return Number.isFinite(B) && Number.isFinite(A);
  }
}
rk.create = (A) => {
  return new rk({ checks: [], typeName: Q2.ZodNumber, coerce: A?.coerce || !1, ...U4(A) });
};
class ok extends d4 {
  constructor() {
    super(...arguments);
    ((this.min = this.gte), (this.max = this.lte));
  }
  _parse(A) {
    if (this._def.coerce)
      try {
        A.data = BigInt(A.data);
      } catch {
        return this._getInvalidInput(A);
      }
    if (this._getType(A) !== w2.bigint) return this._getInvalidInput(A);
    let Q = void 0,
      Z = new sJ();
    for (let G of this._def.checks)
      if (G.kind === "min") {
        if (G.inclusive ? A.data < G.value : A.data <= G.value)
          ((Q = this._getOrReturnCtx(A, Q)),
            d2(Q, { code: sA.too_small, type: "bigint", minimum: G.value, inclusive: G.inclusive, message: G.message }),
            Z.dirty());
      } else if (G.kind === "max") {
        if (G.inclusive ? A.data > G.value : A.data >= G.value)
          ((Q = this._getOrReturnCtx(A, Q)),
            d2(Q, { code: sA.too_big, type: "bigint", maximum: G.value, inclusive: G.inclusive, message: G.message }),
            Z.dirty());
      } else if (G.kind === "multipleOf") {
        if (A.data % G.value !== BigInt(0))
          ((Q = this._getOrReturnCtx(A, Q)),
            d2(Q, { code: sA.not_multiple_of, multipleOf: G.value, message: G.message }),
            Z.dirty());
      } else D6.assertNever(G);
    return { status: Z.value, value: A.data };
  }
  _getInvalidInput(A) {
    let B = this._getOrReturnCtx(A);
    return (d2(B, { code: sA.invalid_type, expected: w2.bigint, received: B.parsedType }), Z9);
  }
  gte(A, B) {
    return this.setLimit("min", A, !0, JQ.toString(B));
  }
  gt(A, B) {
    return this.setLimit("min", A, !1, JQ.toString(B));
  }
  lte(A, B) {
    return this.setLimit("max", A, !0, JQ.toString(B));
  }
  lt(A, B) {
    return this.setLimit("max", A, !1, JQ.toString(B));
  }
  setLimit(A, B, Q, Z) {
    return new ok({
      ...this._def,
      checks: [...this._def.checks, { kind: A, value: B, inclusive: Q, message: JQ.toString(Z) }],
    });
  }
  _addCheck(A) {
    return new ok({ ...this._def, checks: [...this._def.checks, A] });
  }
  positive(A) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: JQ.toString(A) });
  }
  negative(A) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: JQ.toString(A) });
  }
  nonpositive(A) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: JQ.toString(A) });
  }
  nonnegative(A) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: JQ.toString(A) });
  }
  multipleOf(A, B) {
    return this._addCheck({ kind: "multipleOf", value: A, message: JQ.toString(B) });
  }
  get minValue() {
    let A = null;
    for (let B of this._def.checks)
      if (B.kind === "min") {
        if (A === null || B.value > A) A = B.value;
      }
    return A;
  }
  get maxValue() {
    let A = null;
    for (let B of this._def.checks)
      if (B.kind === "max") {
        if (A === null || B.value < A) A = B.value;
      }
    return A;
  }
}
ok.create = (A) => {
  return new ok({ checks: [], typeName: Q2.ZodBigInt, coerce: A?.coerce ?? !1, ...U4(A) });
};
class Ca extends d4 {
  _parse(A) {
    if (this._def.coerce) A.data = Boolean(A.data);
    if (this._getType(A) !== w2.boolean) {
      let Q = this._getOrReturnCtx(A);
      return (d2(Q, { code: sA.invalid_type, expected: w2.boolean, received: Q.parsedType }), Z9);
    }
    return KF(A.data);
  }
}
Ca.create = (A) => {
  return new Ca({ typeName: Q2.ZodBoolean, coerce: A?.coerce || !1, ...U4(A) });
};
class gg extends d4 {
  _parse(A) {
    if (this._def.coerce) A.data = new Date(A.data);
    if (this._getType(A) !== w2.date) {
      let G = this._getOrReturnCtx(A);
      return (d2(G, { code: sA.invalid_type, expected: w2.date, received: G.parsedType }), Z9);
    }
    if (Number.isNaN(A.data.getTime())) {
      let G = this._getOrReturnCtx(A);
      return (d2(G, { code: sA.invalid_date }), Z9);
    }
    let Q = new sJ(),
      Z = void 0;
    for (let G of this._def.checks)
      if (G.kind === "min") {
        if (A.data.getTime() < G.value)
          ((Z = this._getOrReturnCtx(A, Z)),
            d2(Z, { code: sA.too_small, message: G.message, inclusive: !0, exact: !1, minimum: G.value, type: "date" }),
            Q.dirty());
      } else if (G.kind === "max") {
        if (A.data.getTime() > G.value)
          ((Z = this._getOrReturnCtx(A, Z)),
            d2(Z, { code: sA.too_big, message: G.message, inclusive: !0, exact: !1, maximum: G.value, type: "date" }),
            Q.dirty());
      } else D6.assertNever(G);
    return { status: Q.value, value: new Date(A.data.getTime()) };
  }
  _addCheck(A) {
    return new gg({ ...this._def, checks: [...this._def.checks, A] });
  }
  min(A, B) {
    return this._addCheck({ kind: "min", value: A.getTime(), message: JQ.toString(B) });
  }
  max(A, B) {
    return this._addCheck({ kind: "max", value: A.getTime(), message: JQ.toString(B) });
  }
  get minDate() {
    let A = null;
    for (let B of this._def.checks)
      if (B.kind === "min") {
        if (A === null || B.value > A) A = B.value;
      }
    return A != null ? new Date(A) : null;
  }
  get maxDate() {
    let A = null;
    for (let B of this._def.checks)
      if (B.kind === "max") {
        if (A === null || B.value < A) A = B.value;
      }
    return A != null ? new Date(A) : null;
  }
}
gg.create = (A) => {
  return new gg({ checks: [], coerce: A?.coerce || !1, typeName: Q2.ZodDate, ...U4(A) });
};
class g41 extends d4 {
  _parse(A) {
    if (this._getType(A) !== w2.symbol) {
      let Q = this._getOrReturnCtx(A);
      return (d2(Q, { code: sA.invalid_type, expected: w2.symbol, received: Q.parsedType }), Z9);
    }
    return KF(A.data);
  }
}
g41.create = (A) => {
  return new g41({ typeName: Q2.ZodSymbol, ...U4(A) });
};
class Ua extends d4 {
  _parse(A) {
    if (this._getType(A) !== w2.undefined) {
      let Q = this._getOrReturnCtx(A);
      return (d2(Q, { code: sA.invalid_type, expected: w2.undefined, received: Q.parsedType }), Z9);
    }
    return KF(A.data);
  }
}
Ua.create = (A) => {
  return new Ua({ typeName: Q2.ZodUndefined, ...U4(A) });
};
class $a extends d4 {
  _parse(A) {
    if (this._getType(A) !== w2.null) {
      let Q = this._getOrReturnCtx(A);
      return (d2(Q, { code: sA.invalid_type, expected: w2.null, received: Q.parsedType }), Z9);
    }
    return KF(A.data);
  }
}
$a.create = (A) => {
  return new $a({ typeName: Q2.ZodNull, ...U4(A) });
};
class ug extends d4 {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse(A) {
    return KF(A.data);
  }
}
ug.create = (A) => {
  return new ug({ typeName: Q2.ZodAny, ...U4(A) });
};
class sk extends d4 {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse(A) {
    return KF(A.data);
  }
}
sk.create = (A) => {
  return new sk({ typeName: Q2.ZodUnknown, ...U4(A) });
};
class QL extends d4 {
  _parse(A) {
    let B = this._getOrReturnCtx(A);
    return (d2(B, { code: sA.invalid_type, expected: w2.never, received: B.parsedType }), Z9);
  }
}
QL.create = (A) => {
  return new QL({ typeName: Q2.ZodNever, ...U4(A) });
};
class u41 extends d4 {
  _parse(A) {
    if (this._getType(A) !== w2.undefined) {
      let Q = this._getOrReturnCtx(A);
      return (d2(Q, { code: sA.invalid_type, expected: w2.void, received: Q.parsedType }), Z9);
    }
    return KF(A.data);
  }
}
u41.create = (A) => {
  return new u41({ typeName: Q2.ZodVoid, ...U4(A) });
};
class tw extends d4 {
  _parse(A) {
    let { ctx: B, status: Q } = this._processInputParams(A),
      Z = this._def;
    if (B.parsedType !== w2.array)
      return (d2(B, { code: sA.invalid_type, expected: w2.array, received: B.parsedType }), Z9);
    if (Z.exactLength !== null) {
      let Y = B.data.length > Z.exactLength.value,
        I = B.data.length < Z.exactLength.value;
      if (Y || I)
        (d2(B, {
          code: Y ? sA.too_big : sA.too_small,
          minimum: I ? Z.exactLength.value : void 0,
          maximum: Y ? Z.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: Z.exactLength.message,
        }),
          Q.dirty());
    }
    if (Z.minLength !== null) {
      if (B.data.length < Z.minLength.value)
        (d2(B, {
          code: sA.too_small,
          minimum: Z.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: Z.minLength.message,
        }),
          Q.dirty());
    }
    if (Z.maxLength !== null) {
      if (B.data.length > Z.maxLength.value)
        (d2(B, {
          code: sA.too_big,
          maximum: Z.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: Z.maxLength.message,
        }),
          Q.dirty());
    }
    if (B.common.async)
      return Promise.all(
        [...B.data].map((Y, I) => {
          return Z.type._parseAsync(new ew(B, Y, B.path, I));
        }),
      ).then((Y) => {
        return sJ.mergeArray(Q, Y);
      });
    let G = [...B.data].map((Y, I) => {
      return Z.type._parseSync(new ew(B, Y, B.path, I));
    });
    return sJ.mergeArray(Q, G);
  }
  get element() {
    return this._def.type;
  }
  min(A, B) {
    return new tw({ ...this._def, minLength: { value: A, message: JQ.toString(B) } });
  }
  max(A, B) {
    return new tw({ ...this._def, maxLength: { value: A, message: JQ.toString(B) } });
  }
  length(A, B) {
    return new tw({ ...this._def, exactLength: { value: A, message: JQ.toString(B) } });
  }
  nonempty(A) {
    return this.min(1, A);
  }
}
tw.create = (A, B) => {
  return new tw({ type: A, minLength: null, maxLength: null, exactLength: null, typeName: Q2.ZodArray, ...U4(B) });
};
function za(A) {
  if (A instanceof BG) {
    let B = {};
    for (let Q in A.shape) {
      let Z = A.shape[Q];
      B[Q] = kz.create(za(Z));
    }
    return new BG({ ...A._def, shape: () => B });
  } else if (A instanceof tw) return new tw({ ...A._def, type: za(A.element) });
  else if (A instanceof kz) return kz.create(za(A.unwrap()));
  else if (A instanceof fT) return fT.create(za(A.unwrap()));
  else if (A instanceof ZL) return ZL.create(A.items.map((B) => za(B)));
  else return A;
}
class BG extends d4 {
  constructor() {
    super(...arguments);
    ((this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let A = this._def.shape(),
      B = D6.objectKeys(A);
    return ((this._cached = { shape: A, keys: B }), this._cached);
  }
  _parse(A) {
    if (this._getType(A) !== w2.object) {
      let J = this._getOrReturnCtx(A);
      return (d2(J, { code: sA.invalid_type, expected: w2.object, received: J.parsedType }), Z9);
    }
    let { status: Q, ctx: Z } = this._processInputParams(A),
      { shape: G, keys: Y } = this._getCached(),
      I = [];
    if (!(this._def.catchall instanceof QL && this._def.unknownKeys === "strip")) {
      for (let J in Z.data) if (!Y.includes(J)) I.push(J);
    }
    let W = [];
    for (let J of Y) {
      let X = G[J],
        F = Z.data[J];
      W.push({ key: { status: "valid", value: J }, value: X._parse(new ew(Z, F, Z.path, J)), alwaysSet: J in Z.data });
    }
    if (this._def.catchall instanceof QL) {
      let J = this._def.unknownKeys;
      if (J === "passthrough")
        for (let X of I) W.push({ key: { status: "valid", value: X }, value: { status: "valid", value: Z.data[X] } });
      else if (J === "strict") {
        if (I.length > 0) (d2(Z, { code: sA.unrecognized_keys, keys: I }), Q.dirty());
      } else if (J === "strip");
      else throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let J = this._def.catchall;
      for (let X of I) {
        let F = Z.data[X];
        W.push({
          key: { status: "valid", value: X },
          value: J._parse(new ew(Z, F, Z.path, X)),
          alwaysSet: X in Z.data,
        });
      }
    }
    if (Z.common.async)
      return Promise.resolve()
        .then(async () => {
          let J = [];
          for (let X of W) {
            let F = await X.key,
              V = await X.value;
            J.push({ key: F, value: V, alwaysSet: X.alwaysSet });
          }
          return J;
        })
        .then((J) => {
          return sJ.mergeObjectSync(Q, J);
        });
    else return sJ.mergeObjectSync(Q, W);
  }
  get shape() {
    return this._def.shape();
  }
  strict(A) {
    return (
      JQ.errToObj,
      new BG({
        ...this._def,
        unknownKeys: "strict",
        ...(A !== void 0
          ? {
              errorMap: (B, Q) => {
                let Z = this._def.errorMap?.(B, Q).message ?? Q.defaultError;
                if (B.code === "unrecognized_keys") return { message: JQ.errToObj(A).message ?? Z };
                return { message: Z };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new BG({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new BG({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(A) {
    return new BG({ ...this._def, shape: () => ({ ...this._def.shape(), ...A }) });
  }
  merge(A) {
    return new BG({
      unknownKeys: A._def.unknownKeys,
      catchall: A._def.catchall,
      shape: () => ({ ...this._def.shape(), ...A._def.shape() }),
      typeName: Q2.ZodObject,
    });
  }
  setKey(A, B) {
    return this.augment({ [A]: B });
  }
  catchall(A) {
    return new BG({ ...this._def, catchall: A });
  }
  pick(A) {
    let B = {};
    for (let Q of D6.objectKeys(A)) if (A[Q] && this.shape[Q]) B[Q] = this.shape[Q];
    return new BG({ ...this._def, shape: () => B });
  }
  omit(A) {
    let B = {};
    for (let Q of D6.objectKeys(this.shape)) if (!A[Q]) B[Q] = this.shape[Q];
    return new BG({ ...this._def, shape: () => B });
  }
  deepPartial() {
    return za(this);
  }
  partial(A) {
    let B = {};
    for (let Q of D6.objectKeys(this.shape)) {
      let Z = this.shape[Q];
      if (A && !A[Q]) B[Q] = Z;
      else B[Q] = Z.optional();
    }
    return new BG({ ...this._def, shape: () => B });
  }
  required(A) {
    let B = {};
    for (let Q of D6.objectKeys(this.shape))
      if (A && !A[Q]) B[Q] = this.shape[Q];
      else {
        let G = this.shape[Q];
        while (G instanceof kz) G = G._def.innerType;
        B[Q] = G;
      }
    return new BG({ ...this._def, shape: () => B });
  }
  keyof() {
    return Q$A(D6.objectKeys(this.shape));
  }
}
BG.create = (A, B) => {
  return new BG({ shape: () => A, unknownKeys: "strip", catchall: QL.create(), typeName: Q2.ZodObject, ...U4(B) });
};
BG.strictCreate = (A, B) => {
  return new BG({ shape: () => A, unknownKeys: "strict", catchall: QL.create(), typeName: Q2.ZodObject, ...U4(B) });
};
BG.lazycreate = (A, B) => {
  return new BG({ shape: A, unknownKeys: "strip", catchall: QL.create(), typeName: Q2.ZodObject, ...U4(B) });
};
class wa extends d4 {
  _parse(A) {
    let { ctx: B } = this._processInputParams(A),
      Q = this._def.options;
    function Z(G) {
      for (let I of G) if (I.result.status === "valid") return I.result;
      for (let I of G) if (I.result.status === "dirty") return (B.common.issues.push(...I.ctx.common.issues), I.result);
      let Y = G.map((I) => new ZH(I.ctx.common.issues));
      return (d2(B, { code: sA.invalid_union, unionErrors: Y }), Z9);
    }
    if (B.common.async)
      return Promise.all(
        Q.map(async (G) => {
          let Y = { ...B, common: { ...B.common, issues: [] }, parent: null };
          return { result: await G._parseAsync({ data: B.data, path: B.path, parent: Y }), ctx: Y };
        }),
      ).then(Z);
    else {
      let G = void 0,
        Y = [];
      for (let W of Q) {
        let J = { ...B, common: { ...B.common, issues: [] }, parent: null },
          X = W._parseSync({ data: B.data, path: B.path, parent: J });
        if (X.status === "valid") return X;
        else if (X.status === "dirty" && !G) G = { result: X, ctx: J };
        if (J.common.issues.length) Y.push(J.common.issues);
      }
      if (G) return (B.common.issues.push(...G.ctx.common.issues), G.result);
      let I = Y.map((W) => new ZH(W));
      return (d2(B, { code: sA.invalid_union, unionErrors: I }), Z9);
    }
  }
  get options() {
    return this._def.options;
  }
}
wa.create = (A, B) => {
  return new wa({ options: A, typeName: Q2.ZodUnion, ...U4(B) });
};
var bT = (A) => {
  if (A instanceof Ea) return bT(A.schema);
  else if (A instanceof Aq) return bT(A.innerType());
  else if (A instanceof Na) return [A.value];
  else if (A instanceof tk) return A.options;
  else if (A instanceof La) return D6.objectValues(A.enum);
  else if (A instanceof Ma) return bT(A._def.innerType);
  else if (A instanceof Ua) return [void 0];
  else if (A instanceof $a) return [null];
  else if (A instanceof kz) return [void 0, ...bT(A.unwrap())];
  else if (A instanceof fT) return [null, ...bT(A.unwrap())];
  else if (A instanceof oC1) return bT(A.unwrap());
  else if (A instanceof Ra) return bT(A.unwrap());
  else if (A instanceof Oa) return bT(A._def.innerType);
  else return [];
};
class rC1 extends d4 {
  _parse(A) {
    let { ctx: B } = this._processInputParams(A);
    if (B.parsedType !== w2.object)
      return (d2(B, { code: sA.invalid_type, expected: w2.object, received: B.parsedType }), Z9);
    let Q = this.discriminator,
      Z = B.data[Q],
      G = this.optionsMap.get(Z);
    if (!G)
      return (
        d2(B, { code: sA.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [Q] }),
        Z9
      );
    if (B.common.async) return G._parseAsync({ data: B.data, path: B.path, parent: B });
    else return G._parseSync({ data: B.data, path: B.path, parent: B });
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(A, B, Q) {
    let Z = new Map();
    for (let G of B) {
      let Y = bT(G.shape[A]);
      if (!Y.length)
        throw new Error(`A discriminator value for key \`${A}\` could not be extracted from all schema options`);
      for (let I of Y) {
        if (Z.has(I)) throw new Error(`Discriminator property ${String(A)} has duplicate value ${String(I)}`);
        Z.set(I, G);
      }
    }
    return new rC1({ typeName: Q2.ZodDiscriminatedUnion, discriminator: A, options: B, optionsMap: Z, ...U4(Q) });
  }
}
function D10(A, B) {
  let Q = BL(A),
    Z = BL(B);
  if (A === B) return { valid: !0, data: A };
  else if (Q === w2.object && Z === w2.object) {
    let G = D6.objectKeys(B),
      Y = D6.objectKeys(A).filter((W) => G.indexOf(W) !== -1),
      I = { ...A, ...B };
    for (let W of Y) {
      let J = D10(A[W], B[W]);
      if (!J.valid) return { valid: !1 };
      I[W] = J.data;
    }
    return { valid: !0, data: I };
  } else if (Q === w2.array && Z === w2.array) {
    if (A.length !== B.length) return { valid: !1 };
    let G = [];
    for (let Y = 0; Y < A.length; Y++) {
      let I = A[Y],
        W = B[Y],
        J = D10(I, W);
      if (!J.valid) return { valid: !1 };
      G.push(J.data);
    }
    return { valid: !0, data: G };
  } else if (Q === w2.date && Z === w2.date && +A === +B) return { valid: !0, data: A };
  else return { valid: !1 };
}
class qa extends d4 {
  _parse(A) {
    let { status: B, ctx: Q } = this._processInputParams(A),
      Z = (G, Y) => {
        if (aC1(G) || aC1(Y)) return Z9;
        let I = D10(G.value, Y.value);
        if (!I.valid) return (d2(Q, { code: sA.invalid_intersection_types }), Z9);
        if (sC1(G) || sC1(Y)) B.dirty();
        return { status: B.value, value: I.data };
      };
    if (Q.common.async)
      return Promise.all([
        this._def.left._parseAsync({ data: Q.data, path: Q.path, parent: Q }),
        this._def.right._parseAsync({ data: Q.data, path: Q.path, parent: Q }),
      ]).then(([G, Y]) => Z(G, Y));
    else
      return Z(
        this._def.left._parseSync({ data: Q.data, path: Q.path, parent: Q }),
        this._def.right._parseSync({ data: Q.data, path: Q.path, parent: Q }),
      );
  }
}
qa.create = (A, B, Q) => {
  return new qa({ left: A, right: B, typeName: Q2.ZodIntersection, ...U4(Q) });
};
class ZL extends d4 {
  _parse(A) {
    let { status: B, ctx: Q } = this._processInputParams(A);
    if (Q.parsedType !== w2.array)
      return (d2(Q, { code: sA.invalid_type, expected: w2.array, received: Q.parsedType }), Z9);
    if (Q.data.length < this._def.items.length)
      return (
        d2(Q, { code: sA.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
        Z9
      );
    if (!this._def.rest && Q.data.length > this._def.items.length)
      (d2(Q, { code: sA.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
        B.dirty());
    let G = [...Q.data]
      .map((Y, I) => {
        let W = this._def.items[I] || this._def.rest;
        if (!W) return null;
        return W._parse(new ew(Q, Y, Q.path, I));
      })
      .filter((Y) => !!Y);
    if (Q.common.async)
      return Promise.all(G).then((Y) => {
        return sJ.mergeArray(B, Y);
      });
    else return sJ.mergeArray(B, G);
  }
  get items() {
    return this._def.items;
  }
  rest(A) {
    return new ZL({ ...this._def, rest: A });
  }
}
ZL.create = (A, B) => {
  if (!Array.isArray(A)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZL({ items: A, typeName: Q2.ZodTuple, rest: null, ...U4(B) });
};
class m41 extends d4 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(A) {
    let { status: B, ctx: Q } = this._processInputParams(A);
    if (Q.parsedType !== w2.object)
      return (d2(Q, { code: sA.invalid_type, expected: w2.object, received: Q.parsedType }), Z9);
    let Z = [],
      G = this._def.keyType,
      Y = this._def.valueType;
    for (let I in Q.data)
      Z.push({
        key: G._parse(new ew(Q, I, Q.path, I)),
        value: Y._parse(new ew(Q, Q.data[I], Q.path, I)),
        alwaysSet: I in Q.data,
      });
    if (Q.common.async) return sJ.mergeObjectAsync(B, Z);
    else return sJ.mergeObjectSync(B, Z);
  }
  get element() {
    return this._def.valueType;
  }
  static create(A, B, Q) {
    if (B instanceof d4) return new m41({ keyType: A, valueType: B, typeName: Q2.ZodRecord, ...U4(Q) });
    return new m41({ keyType: ow.create(), valueType: A, typeName: Q2.ZodRecord, ...U4(B) });
  }
}
class d41 extends d4 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(A) {
    let { status: B, ctx: Q } = this._processInputParams(A);
    if (Q.parsedType !== w2.map)
      return (d2(Q, { code: sA.invalid_type, expected: w2.map, received: Q.parsedType }), Z9);
    let Z = this._def.keyType,
      G = this._def.valueType,
      Y = [...Q.data.entries()].map(([I, W], J) => {
        return { key: Z._parse(new ew(Q, I, Q.path, [J, "key"])), value: G._parse(new ew(Q, W, Q.path, [J, "value"])) };
      });
    if (Q.common.async) {
      let I = new Map();
      return Promise.resolve().then(async () => {
        for (let W of Y) {
          let J = await W.key,
            X = await W.value;
          if (J.status === "aborted" || X.status === "aborted") return Z9;
          if (J.status === "dirty" || X.status === "dirty") B.dirty();
          I.set(J.value, X.value);
        }
        return { status: B.value, value: I };
      });
    } else {
      let I = new Map();
      for (let W of Y) {
        let { key: J, value: X } = W;
        if (J.status === "aborted" || X.status === "aborted") return Z9;
        if (J.status === "dirty" || X.status === "dirty") B.dirty();
        I.set(J.value, X.value);
      }
      return { status: B.value, value: I };
    }
  }
}
d41.create = (A, B, Q) => {
  return new d41({ valueType: B, keyType: A, typeName: Q2.ZodMap, ...U4(Q) });
};
class mg extends d4 {
  _parse(A) {
    let { status: B, ctx: Q } = this._processInputParams(A);
    if (Q.parsedType !== w2.set)
      return (d2(Q, { code: sA.invalid_type, expected: w2.set, received: Q.parsedType }), Z9);
    let Z = this._def;
    if (Z.minSize !== null) {
      if (Q.data.size < Z.minSize.value)
        (d2(Q, {
          code: sA.too_small,
          minimum: Z.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Z.minSize.message,
        }),
          B.dirty());
    }
    if (Z.maxSize !== null) {
      if (Q.data.size > Z.maxSize.value)
        (d2(Q, {
          code: sA.too_big,
          maximum: Z.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Z.maxSize.message,
        }),
          B.dirty());
    }
    let G = this._def.valueType;
    function Y(W) {
      let J = new Set();
      for (let X of W) {
        if (X.status === "aborted") return Z9;
        if (X.status === "dirty") B.dirty();
        J.add(X.value);
      }
      return { status: B.value, value: J };
    }
    let I = [...Q.data.values()].map((W, J) => G._parse(new ew(Q, W, Q.path, J)));
    if (Q.common.async) return Promise.all(I).then((W) => Y(W));
    else return Y(I);
  }
  min(A, B) {
    return new mg({ ...this._def, minSize: { value: A, message: JQ.toString(B) } });
  }
  max(A, B) {
    return new mg({ ...this._def, maxSize: { value: A, message: JQ.toString(B) } });
  }
  size(A, B) {
    return this.min(A, B).max(A, B);
  }
  nonempty(A) {
    return this.min(1, A);
  }
}
mg.create = (A, B) => {
  return new mg({ valueType: A, minSize: null, maxSize: null, typeName: Q2.ZodSet, ...U4(B) });
};
class Da extends d4 {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(A) {
    let { ctx: B } = this._processInputParams(A);
    if (B.parsedType !== w2.function)
      return (d2(B, { code: sA.invalid_type, expected: w2.function, received: B.parsedType }), Z9);
    function Q(I, W) {
      return h41({
        data: I,
        path: B.path,
        errorMaps: [B.common.contextualErrorMap, B.schemaErrorMap, Ka(), vT].filter((J) => !!J),
        issueData: { code: sA.invalid_arguments, argumentsError: W },
      });
    }
    function Z(I, W) {
      return h41({
        data: I,
        path: B.path,
        errorMaps: [B.common.contextualErrorMap, B.schemaErrorMap, Ka(), vT].filter((J) => !!J),
        issueData: { code: sA.invalid_return_type, returnTypeError: W },
      });
    }
    let G = { errorMap: B.common.contextualErrorMap },
      Y = B.data;
    if (this._def.returns instanceof dg) {
      let I = this;
      return KF(async function (...W) {
        let J = new ZH([]),
          X = await I._def.args.parseAsync(W, G).catch((K) => {
            throw (J.addIssue(Q(W, K)), J);
          }),
          F = await Reflect.apply(Y, this, X);
        return await I._def.returns._def.type.parseAsync(F, G).catch((K) => {
          throw (J.addIssue(Z(F, K)), J);
        });
      });
    } else {
      let I = this;
      return KF(function (...W) {
        let J = I._def.args.safeParse(W, G);
        if (!J.success) throw new ZH([Q(W, J.error)]);
        let X = Reflect.apply(Y, this, J.data),
          F = I._def.returns.safeParse(X, G);
        if (!F.success) throw new ZH([Z(X, F.error)]);
        return F.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...A) {
    return new Da({ ...this._def, args: ZL.create(A).rest(sk.create()) });
  }
  returns(A) {
    return new Da({ ...this._def, returns: A });
  }
  implement(A) {
    return this.parse(A);
  }
  strictImplement(A) {
    return this.parse(A);
  }
  static create(A, B, Q) {
    return new Da({
      args: A ? A : ZL.create([]).rest(sk.create()),
      returns: B || sk.create(),
      typeName: Q2.ZodFunction,
      ...U4(Q),
    });
  }
}
class Ea extends d4 {
  get schema() {
    return this._def.getter();
  }
  _parse(A) {
    let { ctx: B } = this._processInputParams(A);
    return this._def.getter()._parse({ data: B.data, path: B.path, parent: B });
  }
}
Ea.create = (A, B) => {
  return new Ea({ getter: A, typeName: Q2.ZodLazy, ...U4(B) });
};
class Na extends d4 {
  _parse(A) {
    if (A.data !== this._def.value) {
      let B = this._getOrReturnCtx(A);
      return (d2(B, { received: B.data, code: sA.invalid_literal, expected: this._def.value }), Z9);
    }
    return { status: "valid", value: A.data };
  }
  get value() {
    return this._def.value;
  }
}
Na.create = (A, B) => {
  return new Na({ value: A, typeName: Q2.ZodLiteral, ...U4(B) });
};
function Q$A(A, B) {
  return new tk({ values: A, typeName: Q2.ZodEnum, ...U4(B) });
}
class tk extends d4 {
  _parse(A) {
    if (typeof A.data !== "string") {
      let B = this._getOrReturnCtx(A),
        Q = this._def.values;
      return (d2(B, { expected: D6.joinValues(Q), received: B.parsedType, code: sA.invalid_type }), Z9);
    }
    if (!this._cache) this._cache = new Set(this._def.values);
    if (!this._cache.has(A.data)) {
      let B = this._getOrReturnCtx(A),
        Q = this._def.values;
      return (d2(B, { received: B.data, code: sA.invalid_enum_value, options: Q }), Z9);
    }
    return KF(A.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let A = {};
    for (let B of this._def.values) A[B] = B;
    return A;
  }
  get Values() {
    let A = {};
    for (let B of this._def.values) A[B] = B;
    return A;
  }
  get Enum() {
    let A = {};
    for (let B of this._def.values) A[B] = B;
    return A;
  }
  extract(A, B = this._def) {
    return tk.create(A, { ...this._def, ...B });
  }
  exclude(A, B = this._def) {
    return tk.create(
      this.options.filter((Q) => !A.includes(Q)),
      { ...this._def, ...B },
    );
  }
}
tk.create = Q$A;
class La extends d4 {
  _parse(A) {
    let B = D6.getValidEnumValues(this._def.values),
      Q = this._getOrReturnCtx(A);
    if (Q.parsedType !== w2.string && Q.parsedType !== w2.number) {
      let Z = D6.objectValues(B);
      return (d2(Q, { expected: D6.joinValues(Z), received: Q.parsedType, code: sA.invalid_type }), Z9);
    }
    if (!this._cache) this._cache = new Set(D6.getValidEnumValues(this._def.values));
    if (!this._cache.has(A.data)) {
      let Z = D6.objectValues(B);
      return (d2(Q, { received: Q.data, code: sA.invalid_enum_value, options: Z }), Z9);
    }
    return KF(A.data);
  }
  get enum() {
    return this._def.values;
  }
}
La.create = (A, B) => {
  return new La({ values: A, typeName: Q2.ZodNativeEnum, ...U4(B) });
};
class dg extends d4 {
  unwrap() {
    return this._def.type;
  }
  _parse(A) {
    let { ctx: B } = this._processInputParams(A);
    if (B.parsedType !== w2.promise && B.common.async === !1)
      return (d2(B, { code: sA.invalid_type, expected: w2.promise, received: B.parsedType }), Z9);
    let Q = B.parsedType === w2.promise ? B.data : Promise.resolve(B.data);
    return KF(
      Q.then((Z) => {
        return this._def.type.parseAsync(Z, { path: B.path, errorMap: B.common.contextualErrorMap });
      }),
    );
  }
}
dg.create = (A, B) => {
  return new dg({ type: A, typeName: Q2.ZodPromise, ...U4(B) });
};
class Aq extends d4 {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Q2.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(A) {
    let { status: B, ctx: Q } = this._processInputParams(A),
      Z = this._def.effect || null,
      G = {
        addIssue: (Y) => {
          if ((d2(Q, Y), Y.fatal)) B.abort();
          else B.dirty();
        },
        get path() {
          return Q.path;
        },
      };
    if (((G.addIssue = G.addIssue.bind(G)), Z.type === "preprocess")) {
      let Y = Z.transform(Q.data, G);
      if (Q.common.async)
        return Promise.resolve(Y).then(async (I) => {
          if (B.value === "aborted") return Z9;
          let W = await this._def.schema._parseAsync({ data: I, path: Q.path, parent: Q });
          if (W.status === "aborted") return Z9;
          if (W.status === "dirty") return hg(W.value);
          if (B.value === "dirty") return hg(W.value);
          return W;
        });
      else {
        if (B.value === "aborted") return Z9;
        let I = this._def.schema._parseSync({ data: Y, path: Q.path, parent: Q });
        if (I.status === "aborted") return Z9;
        if (I.status === "dirty") return hg(I.value);
        if (B.value === "dirty") return hg(I.value);
        return I;
      }
    }
    if (Z.type === "refinement") {
      let Y = (I) => {
        let W = Z.refinement(I, G);
        if (Q.common.async) return Promise.resolve(W);
        if (W instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return I;
      };
      if (Q.common.async === !1) {
        let I = this._def.schema._parseSync({ data: Q.data, path: Q.path, parent: Q });
        if (I.status === "aborted") return Z9;
        if (I.status === "dirty") B.dirty();
        return (Y(I.value), { status: B.value, value: I.value });
      } else
        return this._def.schema._parseAsync({ data: Q.data, path: Q.path, parent: Q }).then((I) => {
          if (I.status === "aborted") return Z9;
          if (I.status === "dirty") B.dirty();
          return Y(I.value).then(() => {
            return { status: B.value, value: I.value };
          });
        });
    }
    if (Z.type === "transform")
      if (Q.common.async === !1) {
        let Y = this._def.schema._parseSync({ data: Q.data, path: Q.path, parent: Q });
        if (!ak(Y)) return Z9;
        let I = Z.transform(Y.value, G);
        if (I instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: B.value, value: I };
      } else
        return this._def.schema._parseAsync({ data: Q.data, path: Q.path, parent: Q }).then((Y) => {
          if (!ak(Y)) return Z9;
          return Promise.resolve(Z.transform(Y.value, G)).then((I) => ({ status: B.value, value: I }));
        });
    D6.assertNever(Z);
  }
}
Aq.create = (A, B, Q) => {
  return new Aq({ schema: A, typeName: Q2.ZodEffects, effect: B, ...U4(Q) });
};
Aq.createWithPreprocess = (A, B, Q) => {
  return new Aq({ schema: B, effect: { type: "preprocess", transform: A }, typeName: Q2.ZodEffects, ...U4(Q) });
};
class kz extends d4 {
  _parse(A) {
    if (this._getType(A) === w2.undefined) return KF(void 0);
    return this._def.innerType._parse(A);
  }
  unwrap() {
    return this._def.innerType;
  }
}
kz.create = (A, B) => {
  return new kz({ innerType: A, typeName: Q2.ZodOptional, ...U4(B) });
};
class fT extends d4 {
  _parse(A) {
    if (this._getType(A) === w2.null) return KF(null);
    return this._def.innerType._parse(A);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fT.create = (A, B) => {
  return new fT({ innerType: A, typeName: Q2.ZodNullable, ...U4(B) });
};
class Ma extends d4 {
  _parse(A) {
    let { ctx: B } = this._processInputParams(A),
      Q = B.data;
    if (B.parsedType === w2.undefined) Q = this._def.defaultValue();
    return this._def.innerType._parse({ data: Q, path: B.path, parent: B });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ma.create = (A, B) => {
  return new Ma({
    innerType: A,
    typeName: Q2.ZodDefault,
    defaultValue: typeof B.default === "function" ? B.default : () => B.default,
    ...U4(B),
  });
};
class Oa extends d4 {
  _parse(A) {
    let { ctx: B } = this._processInputParams(A),
      Q = { ...B, common: { ...B.common, issues: [] } },
      Z = this._def.innerType._parse({ data: Q.data, path: Q.path, parent: { ...Q } });
    if (Ha(Z))
      return Z.then((G) => {
        return {
          status: "valid",
          value:
            G.status === "valid"
              ? G.value
              : this._def.catchValue({
                  get error() {
                    return new ZH(Q.common.issues);
                  },
                  input: Q.data,
                }),
        };
      });
    else
      return {
        status: "valid",
        value:
          Z.status === "valid"
            ? Z.value
            : this._def.catchValue({
                get error() {
                  return new ZH(Q.common.issues);
                },
                input: Q.data,
              }),
      };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Oa.create = (A, B) => {
  return new Oa({
    innerType: A,
    typeName: Q2.ZodCatch,
    catchValue: typeof B.catch === "function" ? B.catch : () => B.catch,
    ...U4(B),
  });
};
class c41 extends d4 {
  _parse(A) {
    if (this._getType(A) !== w2.nan) {
      let Q = this._getOrReturnCtx(A);
      return (d2(Q, { code: sA.invalid_type, expected: w2.nan, received: Q.parsedType }), Z9);
    }
    return { status: "valid", value: A.data };
  }
}
c41.create = (A) => {
  return new c41({ typeName: Q2.ZodNaN, ...U4(A) });
};
var d$9 = Symbol("zod_brand");
class oC1 extends d4 {
  _parse(A) {
    let { ctx: B } = this._processInputParams(A),
      Q = B.data;
    return this._def.type._parse({ data: Q, path: B.path, parent: B });
  }
  unwrap() {
    return this._def.type;
  }
}
class l41 extends d4 {
  _parse(A) {
    let { status: B, ctx: Q } = this._processInputParams(A);
    if (Q.common.async)
      return (async () => {
        let G = await this._def.in._parseAsync({ data: Q.data, path: Q.path, parent: Q });
        if (G.status === "aborted") return Z9;
        if (G.status === "dirty") return (B.dirty(), hg(G.value));
        else return this._def.out._parseAsync({ data: G.value, path: Q.path, parent: Q });
      })();
    else {
      let Z = this._def.in._parseSync({ data: Q.data, path: Q.path, parent: Q });
      if (Z.status === "aborted") return Z9;
      if (Z.status === "dirty") return (B.dirty(), { status: "dirty", value: Z.value });
      else return this._def.out._parseSync({ data: Z.value, path: Q.path, parent: Q });
    }
  }
  static create(A, B) {
    return new l41({ in: A, out: B, typeName: Q2.ZodPipeline });
  }
}
class Ra extends d4 {
  _parse(A) {
    let B = this._def.innerType._parse(A),
      Q = (Z) => {
        if (ak(Z)) Z.value = Object.freeze(Z.value);
        return Z;
      };
    return Ha(B) ? B.then((Z) => Q(Z)) : Q(B);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ra.create = (A, B) => {
  return new Ra({ innerType: A, typeName: Q2.ZodReadonly, ...U4(B) });
};
function tUA(A, B) {
  let Q = typeof A === "function" ? A(B) : typeof A === "string" ? { message: A } : A;
  return typeof Q === "string" ? { message: Q } : Q;
}
function Z$A(A, B = {}, Q) {
  if (A)
    return ug.create().superRefine((Z, G) => {
      let Y = A(Z);
      if (Y instanceof Promise)
        return Y.then((I) => {
          if (!I) {
            let W = tUA(B, Z),
              J = W.fatal ?? Q ?? !0;
            G.addIssue({ code: "custom", ...W, fatal: J });
          }
        });
      if (!Y) {
        let I = tUA(B, Z),
          W = I.fatal ?? Q ?? !0;
        G.addIssue({ code: "custom", ...I, fatal: W });
      }
      return;
    });
  return ug.create();
}
var c$9 = { object: BG.lazycreate },
  Q2;
(function (A) {
  ((A.ZodString = "ZodString"),
    (A.ZodNumber = "ZodNumber"),
    (A.ZodNaN = "ZodNaN"),
    (A.ZodBigInt = "ZodBigInt"),
    (A.ZodBoolean = "ZodBoolean"),
    (A.ZodDate = "ZodDate"),
    (A.ZodSymbol = "ZodSymbol"),
    (A.ZodUndefined = "ZodUndefined"),
    (A.ZodNull = "ZodNull"),
    (A.ZodAny = "ZodAny"),
    (A.ZodUnknown = "ZodUnknown"),
    (A.ZodNever = "ZodNever"),
    (A.ZodVoid = "ZodVoid"),
    (A.ZodArray = "ZodArray"),
    (A.ZodObject = "ZodObject"),
    (A.ZodUnion = "ZodUnion"),
    (A.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (A.ZodIntersection = "ZodIntersection"),
    (A.ZodTuple = "ZodTuple"),
    (A.ZodRecord = "ZodRecord"),
    (A.ZodMap = "ZodMap"),
    (A.ZodSet = "ZodSet"),
    (A.ZodFunction = "ZodFunction"),
    (A.ZodLazy = "ZodLazy"),
    (A.ZodLiteral = "ZodLiteral"),
    (A.ZodEnum = "ZodEnum"),
    (A.ZodEffects = "ZodEffects"),
    (A.ZodNativeEnum = "ZodNativeEnum"),
    (A.ZodOptional = "ZodOptional"),
    (A.ZodNullable = "ZodNullable"),
    (A.ZodDefault = "ZodDefault"),
    (A.ZodCatch = "ZodCatch"),
    (A.ZodPromise = "ZodPromise"),
    (A.ZodBranded = "ZodBranded"),
    (A.ZodPipeline = "ZodPipeline"),
    (A.ZodReadonly = "ZodReadonly"));
})(Q2 || (Q2 = {}));
var l$9 = (A, B = { message: `Input not instance of ${A.name}` }) => Z$A((Q) => Q instanceof A, B),
  V9 = ow.create,
  cg = rk.create,
  p$9 = c41.create,
  i$9 = ok.create,
  GL = Ca.create,
  n$9 = gg.create,
  a$9 = g41.create,
  s$9 = Ua.create,
  r$9 = $a.create,
  o$9 = ug.create,
  t$9 = sk.create,
  e$9 = QL.create,
  Aw9 = u41.create,
  Bq = tw.create,
  _z = BG.create,
  Bw9 = BG.strictCreate,
  tC1 = wa.create,
  Qw9 = rC1.create,
  Zw9 = qa.create,
  Gw9 = ZL.create,
  Ta = m41.create,
  Yw9 = d41.create,
  Iw9 = mg.create,
  Ww9 = Da.create,
  Jw9 = Ea.create,
  Xw9 = Na.create,
  Pa = tk.create,
  Fw9 = La.create,
  Vw9 = dg.create,
  Kw9 = Aq.create,
  Hw9 = kz.create,
  zw9 = fT.create,
  Dw9 = Aq.createWithPreprocess,
  Cw9 = l41.create,
  Uw9 = () => V9().optional(),
  $w9 = () => cg().optional(),
  ww9 = () => GL().optional(),
  qw9 = {
    string: (A) => ow.create({ ...A, coerce: !0 }),
    number: (A) => rk.create({ ...A, coerce: !0 }),
    boolean: (A) => Ca.create({ ...A, coerce: !0 }),
    bigint: (A) => ok.create({ ...A, coerce: !0 }),
    date: (A) => gg.create({ ...A, coerce: !0 }),
  };
var Ew9 = Z9;
var pB = f;
var C10 = [
  "PreToolUse",
  "PostToolUse",
  "Notification",
  "UserPromptSubmit",
  "SessionStart",
  "SessionEnd",
  "Stop",
  "SubagentStop",
  "PreCompact",
];
var p41 = ["acceptEdits", "bypassPermissions", "default", "plan"],
  G$A = pB.enum(p41);
function Y$A(A) {
  switch (A) {
    case "bypassPermissions":
      return "bypassPermissions";
    case "acceptEdits":
      return "acceptEdits";
    case "plan":
      return "plan";
    case "default":
      return "default";
    default:
      return "default";
  }
}
function lg(A) {
  switch (A) {
    case "default":
      return "Default";
    case "plan":
      return "Plan Mode";
    case "acceptEdits":
      return "Accept Edits";
    case "bypassPermissions":
      return "Bypass Permissions";
  }
}
function I$A(A) {
  return A === "default" || A === void 0;
}
function W$A(A) {
  switch (A) {
    case "default":
      return "";
    case "plan":
      return "⏸";
    case "acceptEdits":
      return "⏵⏵";
    case "bypassPermissions":
      return "⏵⏵";
  }
}
function eC1(A) {
  switch (A) {
    case "default":
      return "text";
    case "plan":
      return "planMode";
    case "acceptEdits":
      return "autoAccept";
    case "bypassPermissions":
      return "error";
  }
}
var hM8 = pB.enum(["allow", "deny", "ask"]),
  AU1 = pB.object({ toolName: pB.string(), ruleContent: pB.string().optional() });
function h7() {
  return process.env.CLAUDE_CODE_USE_BEDROCK ? "bedrock" : process.env.CLAUDE_CODE_USE_VERTEX ? "vertex" : "firstParty";
}
function YL() {
  return h7();
}
var Lw9 = new Set(["pdf"]),
  J$A = 33554432;
function ja() {
  return h7() === "firstParty";
}
function BU1(A) {
  let B = A.startsWith(".") ? A.slice(1) : A;
  return Lw9.has(B.toLowerCase());
}
async function X$A(A) {
  let B = w1(),
    Z = B.statSync(A).size;
  if (Z === 0) throw new Error(`PDF file is empty: ${A}`);
  if (Z > J$A)
    throw new Error(
      `PDF file size (${dW(Z)}) exceeds maximum allowed size (${dW(J$A)}). PDF files must be less than 32MB.`,
    );
  let Y = B.readFileBytesSync(A).toString("base64");
  return { type: "pdf", file: { filePath: A, base64: Y, originalSize: Z } };
}
var BASH_TOOL_NAME = "Bash";
var READ_TOOL_NAME = "Read",
  i41 = 2000,
  Mw9 = 2000,
  F$A = "Read a file from the local filesystem.",
  V$A = `Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${i41} lines starting from the beginning of the file
- You can optionally specify a line offset and limit (especially handy for long files), but it's recommended to read the whole file by not providing these parameters
- Any lines longer than ${Mw9} characters will be truncated
- Results are returned using cat -n format, with line numbers starting at 1
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${
    ja()
      ? `
- This tool can read PDF files (.pdf). PDFs are processed page by page, extracting both text and visual content for analysis.`
      : ""
  }
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To read a directory, use an ls command via the ${BASH_TOOL_NAME} tool.
- You have the capability to call multiple tools in a single response. It is always better to speculatively read multiple files as a batch that are potentially useful. 
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths like /var/folders/123/abc/T/TemporaryItems/NSIRD_screencaptureui_ZfB1tD/Screenshot.png
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.`;
var Ow9 = ["allow", "deny", "ask"];
function Rw9(A, B) {
  if (!A || !A.permissions) return [];
  let { permissions: Q } = A,
    Z = [];
  for (let G of Ow9) {
    let Y = Q[G];
    if (Y) for (let I of Y) Z.push({ source: B, ruleBehavior: G, ruleValue: xz(I) });
  }
  return Z;
}
function Tw9(A, B) {
  if (!A.allowedTools || A.allowedTools.length < 1) return [];
  let Q = new Set();
  for (let G of B) if (G.ruleBehavior === "allow" && G.source === "localSettings") Q.add(n6(G.ruleValue));
  let Z = new Set();
  for (let G of A.allowedTools) if (!Q.has(G)) Z.add(G);
  return Array.from(Z);
}
function Pw9(A, B) {
  if (!A.ignorePatterns || A.ignorePatterns.length < 1) return [];
  let Q = new Set();
  for (let G of B)
    if (
      G.ruleBehavior === "deny" &&
      G.source === "localSettings" &&
      G.ruleValue.toolName === READ_TOOL_NAME &&
      G.ruleValue.ruleContent !== void 0
    )
      Q.add(G.ruleValue.ruleContent);
  let Z = new Set();
  for (let G of A.ignorePatterns) if (!Q.has(G)) Z.add(G);
  return Array.from(Z).map((G) => ({ toolName: READ_TOOL_NAME, ruleContent: G }));
}
function K$A() {
  let A = w9();
  if (!A.allowedTools && !A.ignorePatterns) return;
  let B = { ...A },
    Q = Tw9(A, Sa("localSettings"));
  if (Q.length > 0) QU1({ ruleValues: Q.map(xz), ruleBehavior: "allow" }, "localSettings");
  B.allowedTools = [];
  let Z = Pw9(A, Sa("localSettings"));
  if (Z.length > 0) QU1({ ruleValues: Z, ruleBehavior: "deny" }, "localSettings");
  (delete B.ignorePatterns, i8(B));
}
function ZU1() {
  let A = [],
    B = w9();
  for (let Q of B.allowedTools) A.push({ source: "projectSettings", ruleBehavior: "allow", ruleValue: xz(Q) });
  for (let Q of rw) A.push(...Sa(Q));
  return A;
}
function Sa(A) {
  let B = D8(A);
  return Rw9(B, A);
}
function H$A(A) {
  let B = n6(A.ruleValue),
    Q = D8(A.source);
  if (!Q || !Q.permissions) return !1;
  let Z = Q.permissions[A.ruleBehavior];
  if (!Z || !Z.includes(B)) return !1;
  try {
    let G = { ...Q, permissions: { ...Q.permissions, [A.ruleBehavior]: Z.filter((I) => I !== B) } },
      { error: Y } = W4(A.source, G);
    if (Y) return !1;
    return !0;
  } catch (G) {
    return (U1(G instanceof Error ? G : new Error(String(G)), fk), !1);
  }
}
function jw9() {
  return { permissions: { allow: [], deny: [], ask: [] } };
}
function QU1({ ruleValues: A, ruleBehavior: B }, Q) {
  if (A.length < 1) return !0;
  let Z = A.map(n6),
    G = D8(Q) || jw9();
  try {
    let Y = G.permissions || {},
      I = Y[B] || [],
      W = new Set(I),
      J = Z.filter((V) => !W.has(V));
    if (J.length === 0) return !0;
    let X = { ...G, permissions: { ...Y, [B]: [...I, ...J] } },
      F = W4(Q, X);
    if (F.error) throw F.error;
    return !0;
  } catch (Y) {
    return (U1(Y instanceof Error ? Y : new Error(String(Y)), fk), !1);
  }
}
import { isAbsolute as Sw9 } from "path";
var ya = pB.enum(["userSettings", "projectSettings", "localSettings", "session", "cliArg"]),
  z$A = pB.discriminatedUnion("type", [
    pB.object({
      type: pB.literal("addRules"),
      rules: pB.array(AU1),
      behavior: pB.enum(["allow", "deny", "ask"]),
      destination: ya,
    }),
    pB.object({
      type: pB.literal("replaceRules"),
      rules: pB.array(AU1),
      behavior: pB.enum(["allow", "deny", "ask"]),
      destination: ya,
    }),
    pB.object({
      type: pB.literal("removeRules"),
      rules: pB.array(AU1),
      behavior: pB.enum(["allow", "deny", "ask"]),
      destination: ya,
    }),
    pB.object({ type: pB.literal("setMode"), mode: G$A, destination: ya }),
    pB.object({ type: pB.literal("addDirectories"), directories: pB.array(pB.string()), destination: ya }),
    pB.object({ type: pB.literal("removeDirectories"), directories: pB.array(pB.string()), destination: ya }),
  ]);
function ka(A) {
  if (!A) return [];
  return A.flatMap((B) => {
    switch (B.type) {
      case "addRules":
        return B.rules;
      default:
        return [];
    }
  });
}
function HF(A, B) {
  switch (B.type) {
    case "setMode":
      return (F1(`Applying permission update: Setting mode to '${B.mode}'`), { ...A, mode: B.mode });
    case "addRules": {
      let Q = B.rules.map((G) => n6(G));
      F1(
        `Applying permission update: Adding ${B.rules.length} ${B.behavior} rule(s) to destination '${B.destination}': ${JSON.stringify(Q)}`,
      );
      let Z =
        B.behavior === "allow" ? "alwaysAllowRules" : B.behavior === "deny" ? "alwaysDenyRules" : "alwaysAskRules";
      return { ...A, [Z]: { ...A[Z], [B.destination]: [...(A[Z][B.destination] || []), ...Q] } };
    }
    case "replaceRules": {
      let Q = B.rules.map((G) => n6(G));
      F1(
        `Replacing all ${B.behavior} rules for destination '${B.destination}' with ${B.rules.length} rule(s): ${JSON.stringify(Q)}`,
      );
      let Z =
        B.behavior === "allow" ? "alwaysAllowRules" : B.behavior === "deny" ? "alwaysDenyRules" : "alwaysAskRules";
      return { ...A, [Z]: { ...A[Z], [B.destination]: Q } };
    }
    case "addDirectories": {
      F1(
        `Applying permission update: Adding ${B.directories.length} director${B.directories.length === 1 ? "y" : "ies"} with destination '${B.destination}': ${JSON.stringify(B.directories)}`,
      );
      let Q = new Map(A.additionalWorkingDirectories);
      for (let Z of B.directories) Q.set(Z, { path: Z, source: B.destination });
      return { ...A, additionalWorkingDirectories: Q };
    }
    case "removeRules": {
      let Q = B.rules.map((W) => n6(W));
      F1(
        `Applying permission update: Removing ${B.rules.length} ${B.behavior} rule(s) from source '${B.destination}': ${JSON.stringify(Q)}`,
      );
      let Z =
          B.behavior === "allow" ? "alwaysAllowRules" : B.behavior === "deny" ? "alwaysDenyRules" : "alwaysAskRules",
        G = A[Z][B.destination] || [],
        Y = new Set(Q),
        I = G.filter((W) => !Y.has(W));
      return { ...A, [Z]: { ...A[Z], [B.destination]: I } };
    }
    case "removeDirectories": {
      F1(
        `Applying permission update: Removing ${B.directories.length} director${B.directories.length === 1 ? "y" : "ies"}: ${JSON.stringify(B.directories)}`,
      );
      let Q = new Map(A.additionalWorkingDirectories);
      for (let Z of B.directories) Q.delete(Z);
      return { ...A, additionalWorkingDirectories: Q };
    }
    default:
      return A;
  }
}
function pg(A, B) {
  let Q = A;
  for (let Z of B) Q = HF(Q, Z);
  return Q;
}
function U10(A) {
  return A === "localSettings" || A === "userSettings" || A === "projectSettings";
}
function ig(A) {
  if (!U10(A.destination)) return;
  switch ((F1(`Persisting permission update: ${A.type} to source '${A.destination}'`), A.type)) {
    case "addRules": {
      (F1(`Persisting ${A.rules.length} ${A.behavior} rule(s) to ${A.destination}`),
        QU1({ ruleValues: A.rules, ruleBehavior: A.behavior }, A.destination));
      break;
    }
    case "addDirectories": {
      F1(`Persisting ${A.directories.length} director${A.directories.length === 1 ? "y" : "ies"} to ${A.destination}`);
      let Q = D8(A.destination)?.permissions?.additionalDirectories || [],
        Z = A.directories.filter((G) => !Q.includes(G));
      if (Z.length > 0) {
        let G = [...Q, ...Z];
        W4(A.destination, { permissions: { additionalDirectories: G } });
      }
      break;
    }
    case "removeRules": {
      F1(`Removing ${A.rules.length} ${A.behavior} rule(s) from ${A.destination}`);
      let Z = (D8(A.destination)?.permissions || {})[A.behavior] || [],
        G = new Set(A.rules.map(n6)),
        Y = Z.filter((I) => !G.has(I));
      W4(A.destination, { permissions: { [A.behavior]: Y } });
      break;
    }
    case "removeDirectories": {
      F1(`Removing ${A.directories.length} director${A.directories.length === 1 ? "y" : "ies"} from ${A.destination}`);
      let Q = D8(A.destination)?.permissions?.additionalDirectories || [],
        Z = new Set(A.directories),
        G = Q.filter((Y) => !Z.has(Y));
      W4(A.destination, { permissions: { additionalDirectories: G } });
      break;
    }
    case "setMode": {
      (F1(`Persisting mode '${A.mode}' to ${A.destination}`),
        W4(A.destination, { permissions: { defaultMode: A.mode } }));
      break;
    }
    case "replaceRules": {
      F1(`Replacing all ${A.behavior} rules in ${A.destination} with ${A.rules.length} rule(s)`);
      let B = A.rules.map(n6);
      W4(A.destination, { permissions: { [A.behavior]: B } });
      break;
    }
  }
}
function GU1(A) {
  for (let B of A) ig(B);
}
function YU1(A) {
  try {
    if (w1().statSync(A).isDirectory()) {
      let Q = D$A(A);
      return {
        type: "addRules",
        rules: [{ toolName: "Read", ruleContent: Sw9(Q) ? `/${Q}/**` : `${Q}/**` }],
        behavior: "allow",
        destination: "localSettings",
      };
    }
  } catch {}
  return;
}
var $10 = f.enum(["local", "user", "project", "dynamic", "enterprise"]),
  DO8 = f.enum(["stdio", "sse", "sse-ide", "http", "sdk"]),
  w10 = f.object({
    type: f.literal("stdio").optional(),
    command: f.string().min(1, "Command cannot be empty"),
    args: f.array(f.string()).default([]),
    env: f.record(f.string()).optional(),
  }),
  yw9 = f.object({ type: f.literal("sse"), url: f.string(), headers: f.record(f.string()).optional() }),
  kw9 = f.object({
    type: f.literal("sse-ide"),
    url: f.string(),
    ideName: f.string(),
    ideRunningInWindows: f.boolean().optional(),
  }),
  _w9 = f.object({
    type: f.literal("ws-ide"),
    url: f.string(),
    ideName: f.string(),
    authToken: f.string().optional(),
    ideRunningInWindows: f.boolean().optional(),
  }),
  xw9 = f.object({ type: f.literal("http"), url: f.string(), headers: f.record(f.string()).optional() }),
  vw9 = f.object({ type: f.literal("sdk"), name: f.string() }),
  q10 = f.union([w10, yw9, kw9, _w9, xw9, vw9]);
var C$A = f.object({ mcpServers: f.record(f.string(), q10) });
import { join as fw9 } from "path";
import { join as E10 } from "path";
function WU1() {
  return E10(hT(), "managed-mcp.json");
}
function IU1(A, B) {
  if (!A) return {};
  let Q = {};
  for (let [Z, G] of Object.entries(A)) Q[Z] = { ...G, scope: B };
  return Q;
}
function U$A(A) {
  let B = E10(AA(), ".mcp.json");
  WL(B, JSON.stringify(A, null, 2), { encoding: "utf8" });
}
function bw9(A) {
  let B = [];
  function Q(G) {
    return G.replace(/\$\{([^}]+)\}/g, (Y, I) => {
      let [W, J] = I.split(":-"),
        X = process.env[W];
      if (X !== void 0) return X;
      if (J !== void 0) return J;
      return (B.push(W), Y);
    });
  }
  let Z;
  switch (A.type) {
    case void 0:
    case "stdio": {
      let G = A;
      Z = { ...G, command: Q(G.command), args: G.args.map(Q), env: G.env ? ny(G.env, Q) : void 0 };
      break;
    }
    case "sse":
    case "http": {
      let G = A;
      Z = { ...G, url: Q(G.url), headers: G.headers ? ny(G.headers, Q) : void 0 };
      break;
    }
    case "sse-ide":
    case "ws-ide":
      Z = A;
      break;
    case "sdk":
      Z = A;
      break;
  }
  return { expanded: Z, missingVars: [...new Set(B)] };
}
function ng(A, B, Q) {
  if (A.match(/[^a-zA-Z0-9_-]/))
    throw new Error(`Invalid name ${A}. Names can only contain letters, numbers, hyphens, and underscores.`);
  let Z = q10.safeParse(B);
  if (!Z.success) {
    let Y = Z.error.errors.map((I) => `${I.path.join(".")}: ${I.message}`).join(", ");
    throw new Error(`Invalid configuration: ${Y}`);
  }
  switch (Q) {
    case "project": {
      let { servers: Y } = QG("project");
      if (Y[A]) throw new Error(`MCP server ${A} already exists in .mcp.json`);
      break;
    }
    case "user": {
      if (H0().mcpServers?.[A]) throw new Error(`MCP server ${A} already exists in user config`);
      break;
    }
    case "local": {
      if (w9().mcpServers?.[A]) throw new Error(`MCP server ${A} already exists in local config`);
      break;
    }
    case "dynamic":
      throw new Error("Cannot add MCP server to scope: dynamic");
    case "enterprise":
      throw new Error("Cannot add MCP server to scope: enterprise");
  }
  let G = Z.data;
  switch (Q) {
    case "project": {
      let { servers: Y } = QG("project"),
        I = {};
      for (let [J, X] of Object.entries(Y)) {
        let { scope: F, ...V } = X;
        I[J] = V;
      }
      I[A] = G;
      let W = { mcpServers: I };
      try {
        U$A(W);
      } catch (J) {
        throw new Error(`Failed to write to mcp.json: ${J}`);
      }
      break;
    }
    case "user": {
      let Y = H0();
      if (!Y.mcpServers) Y.mcpServers = {};
      ((Y.mcpServers[A] = G), TA(Y));
      break;
    }
    case "local": {
      let Y = w9();
      if (!Y.mcpServers) Y.mcpServers = {};
      ((Y.mcpServers[A] = G), i8(Y));
      break;
    }
    default:
      throw new Error(`Cannot add MCP server to scope: ${Q}`);
  }
}
function N10(A, B) {
  switch (B) {
    case "project": {
      let { servers: Q } = QG("project");
      if (!Q[A]) throw new Error(`No MCP server found with name: ${A} in .mcp.json`);
      let Z = {};
      for (let [Y, I] of Object.entries(Q))
        if (Y !== A) {
          let { scope: W, ...J } = I;
          Z[Y] = J;
        }
      let G = { mcpServers: Z };
      try {
        U$A(G);
      } catch (Y) {
        throw new Error(`Failed to remove from .mcp.json: ${Y}`);
      }
      break;
    }
    case "user": {
      let Q = H0();
      if (!Q.mcpServers?.[A]) throw new Error(`No user-scoped MCP server found with name: ${A}`);
      (delete Q.mcpServers[A], TA(Q));
      break;
    }
    case "local": {
      let Q = w9();
      if (!Q.mcpServers?.[A]) throw new Error(`No project-local MCP server found with name: ${A}`);
      (delete Q.mcpServers[A], i8(Q));
      break;
    }
    default:
      throw new Error(`Cannot remove MCP server from scope: ${B}`);
  }
}
function QG(A) {
  switch (A) {
    case "project": {
      let B = E10(AA(), ".mcp.json");
      if (!w1().existsSync(B)) return { servers: {}, errors: [] };
      let { config: Z, errors: G } = a41({ filePath: B, expandVars: !0, scope: "project" });
      return { servers: IU1(Z?.mcpServers, A), errors: G };
    }
    case "user": {
      let B = H0().mcpServers;
      if (!B) return { servers: {}, errors: [] };
      let { config: Q, errors: Z } = n41({ configObject: { mcpServers: B }, expandVars: !0, scope: "user" });
      return { servers: IU1(Q?.mcpServers, A), errors: Z };
    }
    case "local": {
      let B = w9().mcpServers;
      if (!B) return { servers: {}, errors: [] };
      let { config: Q, errors: Z } = n41({ configObject: { mcpServers: B }, expandVars: !0, scope: "local" });
      return { servers: IU1(Q?.mcpServers, A), errors: Z };
    }
    case "enterprise": {
      let B = WU1();
      if (!w1().existsSync(B)) return { servers: {}, errors: [] };
      let { config: Z, errors: G } = a41({ filePath: B, expandVars: !0, scope: "enterprise" });
      return { servers: IU1(Z?.mcpServers, A), errors: G };
    }
  }
}
function _a(A) {
  let { servers: B } = QG("enterprise"),
    { servers: Q } = QG("user"),
    { servers: Z } = QG("project"),
    { servers: G } = QG("local");
  if (B[A]) return B[A];
  if (G[A]) return G[A];
  if (Z[A]) return Z[A];
  if (Q[A]) return Q[A];
  return null;
}
function IL() {
  let { servers: A } = QG("enterprise");
  if (L10()) return (Y1("tengu_mcp_servers", { enterprise: Object.keys(A).length, global: 0, project: 0, user: 0 }), A);
  let { servers: B } = QG("user"),
    { servers: Q } = QG("project"),
    { servers: Z } = QG("local"),
    G = {};
  for (let [I, W] of Object.entries(Q)) if (JU1(I) === "approved") G[I] = W;
  let Y = Object.assign({}, B, G, Z);
  return (
    Y1("tengu_mcp_servers", {
      enterprise: 0,
      global: Object.keys(B).length,
      project: Object.keys(G).length,
      user: Object.keys(Z).length,
    }),
    Y
  );
}
function n41(A) {
  let { configObject: B, expandVars: Q, scope: Z, filePath: G } = A,
    Y = C$A.safeParse(B);
  if (!Y.success)
    return {
      config: null,
      errors: Y.error.issues.map((J) => ({
        ...(G && { file: G }),
        path: J.path.join("."),
        message: "Does not adhere to MCP server configuration schema",
        mcpErrorMetadata: { scope: Z, severity: "fatal" },
      })),
    };
  let I = [],
    W = {};
  for (let [J, X] of Object.entries(Y.data.mcpServers)) {
    let F = X;
    if (Q) {
      let { expanded: V, missingVars: K } = bw9(X);
      if (K.length > 0)
        I.push({
          ...(G && { file: G }),
          path: `mcpServers.${J}`,
          message: `Missing environment variables: ${K.join(", ")}`,
          suggestion: `Set the following environment variables: ${K.join(", ")}`,
          mcpErrorMetadata: { scope: Z, serverName: J, severity: "warning" },
        });
      F = V;
    }
    if (
      HB() === "windows" &&
      (!F.type || F.type === "stdio") &&
      (F.command === "npx" || F.command.endsWith("\\npx") || F.command.endsWith("/npx"))
    )
      I.push({
        ...(G && { file: G }),
        path: `mcpServers.${J}`,
        message: "Windows requires 'cmd /c' wrapper to execute npx",
        suggestion:
          'Change command to "cmd" with args ["/c", "npx", ...]. See: https://docs.anthropic.com/en/docs/claude-code/mcp#configure-mcp-servers',
        mcpErrorMetadata: { scope: Z, serverName: J, severity: "warning" },
      });
    W[J] = F;
  }
  return { config: { mcpServers: W }, errors: I };
}
function a41(A) {
  let { filePath: B, expandVars: Q, scope: Z } = A,
    G = w1();
  if (!G.existsSync(B))
    return {
      config: null,
      errors: [
        {
          file: B,
          path: "",
          message: `MCP config file not found: ${B}`,
          suggestion: "Check that the file path is correct",
          mcpErrorMetadata: { scope: Z, severity: "fatal" },
        },
      ],
    };
  let Y;
  try {
    Y = G.readFileSync(B, { encoding: "utf8" });
  } catch (W) {
    return {
      config: null,
      errors: [
        {
          file: B,
          path: "",
          message: `Failed to read file: ${W}`,
          suggestion: "Check file permissions and ensure the file exists",
          mcpErrorMetadata: { scope: Z, severity: "fatal" },
        },
      ],
    };
  }
  let I = d3(Y);
  if (!I)
    return {
      config: null,
      errors: [
        {
          file: B,
          path: "",
          message: "MCP config is not a valid JSON",
          suggestion: "Fix the JSON syntax errors in the file",
          mcpErrorMetadata: { scope: Z, severity: "fatal" },
        },
      ],
    };
  return n41({ configObject: I, expandVars: Q, scope: Z, filePath: B });
}
function L10() {
  let { config: A } = a41({ filePath: WU1(), expandVars: !0, scope: "enterprise" });
  return A !== null;
}
function vz(A) {
  return A.replace(/[^a-zA-Z0-9_-]/g, "_");
}
function s41(A, B) {
  let Q = `mcp__${vz(B)}__`;
  return A.filter((Z) => Z.name?.startsWith(Q));
}
function XU1(A, B) {
  let Q = `mcp__${vz(B)}__`;
  return A.filter((Z) => Z.name?.startsWith(Q));
}
function $$A(A, B) {
  let Q = `mcp__${vz(B)}__`;
  return A.filter((Z) => !Z.name?.startsWith(Q));
}
function w$A(A, B) {
  let Q = `mcp__${vz(B)}__`;
  return A.filter((Z) => !Z.name?.startsWith(Q));
}
function q$A(A, B) {
  let Q = { ...A };
  return (delete Q[B], Q);
}
function E$A(A) {
  return `mcp__${vz(A)}__`;
}
function M10(A) {
  return A.name?.startsWith("mcp__") || A.isMcp === !0;
}
function ek(A) {
  let B = A.split("__"),
    [Q, Z, ...G] = B;
  if (Q !== "mcp" || !Z) return null;
  let Y = G.length > 0 ? G.join("__") : void 0;
  return { serverName: Z, toolName: Y };
}
function FU1(A, B) {
  let Q = `mcp__${vz(B)}__`;
  return A.replace(Q, "");
}
function VU1(A) {
  let B = A.replace(/\s*\(MCP\)\s*$/, "");
  B = B.trim();
  let Q = B.indexOf(" - ");
  if (Q !== -1) return B.substring(Q + 3).trim();
  return B;
}
function bz(A) {
  let B = w1();
  switch (A) {
    case "user": {
      let Q = lJ(),
        Z = B.existsSync(Q);
      return `${Q}${Z ? "" : " (file does not exist)"}`;
    }
    case "project": {
      let Q = fw9(AA(), ".mcp.json"),
        Z = B.existsSync(Q);
      return `${Q}${Z ? "" : " (file does not exist)"}`;
    }
    case "local":
      return `${lJ()} [project: ${AA()}]`;
    case "dynamic":
      return "Dynamically configured";
    case "enterprise": {
      let Q = WU1(),
        Z = B.existsSync(Q);
      return `${Q}${Z ? "" : " (file does not exist)"}`;
    }
    default:
      return A;
  }
}
function ag(A) {
  switch (A) {
    case "local":
      return "Local config (private to you in this project)";
    case "project":
      return "Project config (shared via .mcp.json)";
    case "user":
      return "User config (available in all your projects)";
    case "dynamic":
      return "Dynamic config (from command line)";
    case "enterprise":
      return "Enterprise config (managed by your organization)";
    default:
      return A;
  }
}
function r41(A) {
  if (!A) return "local";
  if (!$10.options.includes(A)) throw new Error(`Invalid scope: ${A}. Must be one of: ${$10.options.join(", ")}`);
  return A;
}
function N$A(A) {
  if (!A) return "stdio";
  if (A !== "stdio" && A !== "sse" && A !== "http")
    throw new Error(`Invalid transport type: ${A}. Must be one of: stdio, sse, http`);
  return A;
}
function O10(A) {
  let B = {};
  for (let Q of A) {
    let Z = Q.indexOf(":");
    if (Z === -1) throw new Error(`Invalid header format: "${Q}". Expected format: "Header-Name: value"`);
    let G = Q.substring(0, Z).trim(),
      Y = Q.substring(Z + 1).trim();
    if (!G) throw new Error(`Invalid header: "${Q}". Header name cannot be empty.`);
    B[G] = Y;
  }
  return B;
}
function JU1(A) {
  let B = E2(),
    Q = vz(A);
  if (B?.disabledMcpjsonServers?.some((Z) => vz(Z) === Q)) return "rejected";
  if (B?.enabledMcpjsonServers?.some((Z) => vz(Z) === Q) || B?.enableAllProjectMcpServers) return "approved";
  return "pending";
}
var R10 = [...rw, "cliArg", "command", "session"];
function T10(A) {
  switch (A) {
    case "cliArg":
      return "CLI argument";
    case "command":
      return "command configuration";
    case "session":
      return "current session";
    case "localSettings":
      return "project local settings";
    case "projectSettings":
      return "project settings";
    case "policySettings":
      return "policy settings";
    case "userSettings":
      return "user settings";
    case "flagSettings":
      return "flag settings";
  }
}
function xz(A) {
  let B = A.match(/^([^(]+)\(([^)]+)\)$/);
  if (!B) return { toolName: A };
  let Q = B[1],
    Z = B[2];
  if (!Q || !Z) return { toolName: A };
  return { toolName: Q, ruleContent: Z };
}
function n6(A) {
  return A.ruleContent ? `${A.toolName}(${A.ruleContent})` : A.toolName;
}
function sg(A) {
  return R10.flatMap((B) =>
    (A.alwaysAllowRules[B] || []).map((Q) => ({ source: B, ruleBehavior: "allow", ruleValue: xz(Q) })),
  );
}
function hw9(A, B) {
  return sg(A)
    .filter((G) => G.ruleValue.toolName === B)
    .map((G) => {
      if (G.ruleValue.ruleContent) return G.ruleValue.ruleContent;
      return B;
    });
}
function zF(A, B, Q) {
  if (Q)
    switch (Q.type) {
      case "hook":
        return Q.reason
          ? `Hook '${Q.hookName}' blocked this action: ${Q.reason}`
          : `Hook '${Q.hookName}' requires approval for this ${B} command`;
      case "rule": {
        let Y = n6(Q.rule.ruleValue),
          I = T10(Q.rule.source);
        return `Permission rule '${Y}' from ${I} requires approval for this ${B} command`;
      }
      case "subcommandResults": {
        let Y = [];
        for (let [I, W] of Q.reasons) if (W.behavior === "ask" || W.behavior === "passthrough") Y.push(I);
        if (Y.length > 0)
          return `This ${B} command contains multiple operations. The following part${Y.length > 1 ? "s" : ""} require${Y.length > 1 ? "" : "s"} approval: ${Y.join(", ")}`;
        return `This ${B} command contains multiple operations that require approval`;
      }
      case "permissionPromptTool":
        return `Tool '${Q.permissionPromptToolName}' requires approval for this ${B} command`;
      case "other":
        return Q.reason;
      case "mode":
        return `Current permission mode (${lg(Q.mode)}) requires approval for this ${B} command`;
    }
  let Z = `Claude requested permissions to use ${B}, but you haven't granted it yet.`,
    G = hw9(A, B);
  if (G.length > 0)
    Z += `

As a reminder, Claude can use these ${B} commands without approval: ${G.join(", ")}`;
  return Z;
}
function xa(A) {
  return R10.flatMap((B) =>
    (A.alwaysDenyRules[B] || []).map((Q) => ({ source: B, ruleBehavior: "deny", ruleValue: xz(Q) })),
  );
}
function KU1(A) {
  return R10.flatMap((B) =>
    (A.alwaysAskRules[B] || []).map((Q) => ({ source: B, ruleBehavior: "ask", ruleValue: xz(Q) })),
  );
}
function P10(A, B) {
  if (B.ruleValue.ruleContent !== void 0) return !1;
  if (B.ruleValue.toolName === A.name) return !0;
  let Q = ek(B.ruleValue.toolName),
    Z = ek(A.name);
  return Q !== null && Z !== null && Q.toolName === void 0 && Q.serverName === Z.serverName;
}
function gw9(A, B) {
  return sg(A).find((Q) => P10(B, Q)) || null;
}
function uw9(A, B) {
  return xa(A).find((Q) => P10(B, Q)) || null;
}
function mw9(A, B) {
  return KU1(A).find((Q) => P10(B, Q)) || null;
}
function Qq(A, B, Q) {
  return j10(A, B.name, Q);
}
function j10(A, B, Q) {
  let Z = new Map(),
    G = [];
  switch (Q) {
    case "allow":
      G = sg(A);
      break;
    case "deny":
      G = xa(A);
      break;
    case "ask":
      G = KU1(A);
      break;
  }
  for (let Y of G)
    if (Y.ruleValue.toolName === B && Y.ruleValue.ruleContent !== void 0 && Y.ruleBehavior === Q)
      Z.set(Y.ruleValue.ruleContent, Y);
  return Z;
}
var Zq = async (A, B, Q) => {
  if (Q.abortController.signal.aborted) throw new QH();
  let Z = await Q.getAppState(),
    G = uw9(Z.toolPermissionContext, A);
  if (G)
    return {
      behavior: "deny",
      decisionReason: { type: "rule", rule: G },
      message: `Permission to use ${A.name} has been denied.`,
    };
  let Y = mw9(Z.toolPermissionContext, A);
  if (Y)
    return { behavior: "ask", decisionReason: { type: "rule", rule: Y }, message: zF(Z.toolPermissionContext, A.name) };
  let I = { behavior: "passthrough", message: zF(Z.toolPermissionContext, A.name) };
  try {
    let X = A.inputSchema.parse(B);
    I = await A.checkPermissions(X, Q);
  } catch (X) {
    U1(X, TD1);
  }
  if (I?.behavior === "deny") return I;
  if (((Z = await Q.getAppState()), Z.toolPermissionContext.mode === "bypassPermissions"))
    return { behavior: "allow", updatedInput: B, decisionReason: { type: "mode", mode: Z.toolPermissionContext.mode } };
  let W = gw9(Z.toolPermissionContext, A);
  if (W) return { behavior: "allow", updatedInput: B, decisionReason: { type: "rule", rule: W } };
  let J =
    I.behavior === "passthrough"
      ? { ...I, behavior: "ask", message: zF(Z.toolPermissionContext, A.name, I.decisionReason) }
      : I;
  if (J.behavior === "ask" && J.suggestions)
    F1(`Permission suggestions for ${A.name}: ${JSON.stringify(J.suggestions, null, 2)}`);
  return J;
};
async function L$A({ rule: A, initialContext: B, setToolPermissionContext: Q }) {
  if (A.source === "policySettings") throw new Error("Cannot delete permission rules from managed settings");
  let Z = HF(B, { type: "removeRules", rules: [A.ruleValue], behavior: A.ruleBehavior, destination: A.source });
  switch (A.source) {
    case "localSettings":
    case "userSettings":
    case "projectSettings": {
      H$A(A);
      break;
    }
    case "cliArg":
    case "command":
    case "flagSettings":
      break;
    case "session":
      break;
  }
  Q(Z);
}
function M$A(A, B) {
  let Q = new Map();
  for (let G of A) {
    let Y = `${G.source}:${G.ruleBehavior}`;
    if (!Q.has(Y)) Q.set(Y, []);
    Q.get(Y).push(G.ruleValue);
  }
  let Z = [];
  for (let [G, Y] of Q) {
    let [I, W] = G.split(":");
    Z.push({ type: B, rules: Y, behavior: W, destination: I });
  }
  return Z;
}
function O$A(A, B) {
  let Q = M$A(B, "addRules");
  return pg(A, Q);
}
function R$A(A, B) {
  let Q = M$A(B, "replaceRules");
  return pg(A, Q);
}
var S10 = {
  filePatternTools: ["Read", "Write", "Edit", "Glob", "MultiEdit", "NotebookRead", "NotebookEdit"],
  bashPrefixTools: ["Bash"],
  customValidation: {
    WebSearch: (A) => {
      if (A.includes("*") || A.includes("?"))
        return {
          valid: !1,
          error: "WebSearch does not support wildcards",
          suggestion: "Use exact search terms without * or ?",
          examples: ["WebSearch(claude ai)", "WebSearch(typescript tutorial)"],
        };
      return { valid: !0 };
    },
    WebFetch: (A) => {
      if (A.includes("://") || A.startsWith("http"))
        return {
          valid: !1,
          error: "WebFetch permissions use domain format, not URLs",
          suggestion: 'Use "domain:hostname" format',
          examples: ["WebFetch(domain:example.com)", "WebFetch(domain:github.com)"],
        };
      if (!A.startsWith("domain:"))
        return {
          valid: !1,
          error: 'WebFetch permissions must use "domain:" prefix',
          suggestion: 'Use "domain:hostname" format',
          examples: ["WebFetch(domain:example.com)", "WebFetch(domain:*.google.com)"],
        };
      return { valid: !0 };
    },
  },
};
function T$A(A) {
  return S10.filePatternTools.includes(A);
}
function P$A(A) {
  return S10.bashPrefixTools.includes(A);
}
function j$A(A) {
  return S10.customValidation[A];
}
function dw9(A) {
  if (!A || A.trim() === "") return { valid: !1, error: "Permission rule cannot be empty" };
  let B = (A.match(/\(/g) || []).length,
    Q = (A.match(/\)/g) || []).length;
  if (B !== Q)
    return {
      valid: !1,
      error: "Mismatched parentheses",
      suggestion: "Ensure all opening parentheses have matching closing parentheses",
    };
  if (A.includes("()")) {
    let I = A.substring(0, A.indexOf("("));
    if (!I)
      return {
        valid: !1,
        error: "Empty parentheses with no tool name",
        suggestion: "Specify a tool name before the parentheses",
      };
    return {
      valid: !1,
      error: "Empty parentheses",
      suggestion: `Either specify a pattern or use just "${I}" without parentheses`,
      examples: [`${I}`, `${I}(some-pattern)`],
    };
  }
  let Z = xz(A),
    G = ek(Z.toolName);
  if (G) {
    if (Z.ruleContent !== void 0)
      return {
        valid: !1,
        error: "MCP rules do not support patterns",
        suggestion: `Use "${Z.toolName}" without parentheses`,
        examples: [`mcp__${G.serverName}`, G.toolName ? `mcp__${G.serverName}__${G.toolName}` : void 0].filter(Boolean),
      };
    return { valid: !0 };
  }
  if (!Z.toolName || Z.toolName.length === 0) return { valid: !1, error: "Tool name cannot be empty" };
  if (Z.toolName[0] !== Z.toolName[0]?.toUpperCase())
    return {
      valid: !1,
      error: "Tool names must start with uppercase",
      suggestion: `Use "${String(Z.toolName).charAt(0).toUpperCase() + String(Z.toolName).slice(1)}"`,
    };
  let Y = j$A(Z.toolName);
  if (Y && Z.ruleContent !== void 0) {
    let I = Y(Z.ruleContent);
    if (!I.valid) return I;
  }
  if (P$A(Z.toolName) && Z.ruleContent !== void 0) {
    let I = Z.ruleContent;
    if (I.includes(":*") && !I.endsWith(":*"))
      return {
        valid: !1,
        error: "The :* pattern must be at the end",
        suggestion: "Move :* to the end for prefix matching",
        examples: ["Bash(npm run:*)", "Bash(git commit:*)"],
      };
    if (I.includes(" * ") && !I.endsWith(":*"))
      return {
        valid: !1,
        error: "Wildcards in the middle of commands are not supported",
        suggestion: 'Use prefix matching with ":*" or specify exact commands',
        examples: [
          "Bash(npm run:*) - allows any npm run command",
          "Bash(npm install express) - allows exact command",
          "Bash - allows all commands",
        ],
      };
    if (I === ":*")
      return {
        valid: !1,
        error: "Prefix cannot be empty before :*",
        suggestion: "Specify a command prefix before :*",
        examples: ["Bash(npm:*)", "Bash(git:*)"],
      };
    let W = ['"', "'"];
    for (let X of W)
      if ((I.match(new RegExp(X, "g")) || []).length % 2 !== 0)
        return {
          valid: !1,
          error: `Unmatched ${X} in Bash pattern`,
          suggestion: "Ensure all quotes are properly paired",
        };
    if (I === "*")
      return {
        valid: !1,
        error: 'Use "Bash" without parentheses to allow all commands',
        suggestion: "Remove the parentheses or specify a command pattern",
        examples: ["Bash", "Bash(npm:*)", "Bash(npm install)"],
      };
    let J = I.indexOf("*");
    if (J !== -1 && !I.includes("/")) {
      if (!I.substring(0, J).endsWith(":"))
        return {
          valid: !1,
          error: 'Use ":*" for prefix matching, not just "*"',
          suggestion: `Change to "Bash(${String(I).replace(/\*/g, ":*")})" for prefix matching`,
          examples: ["Bash(npm run:*)", "Bash(git:*)"],
        };
    }
  }
  if (T$A(Z.toolName) && Z.ruleContent !== void 0) {
    let I = Z.ruleContent;
    if (I.includes(":*"))
      return {
        valid: !1,
        error: 'The ":*" syntax is only for Bash prefix rules',
        suggestion: 'Use glob patterns like "*" or "**" for file matching',
        examples: [
          `${Z.toolName}(*.ts) - matches .ts files`,
          `${Z.toolName}(src/**) - matches all files in src`,
          `${Z.toolName}(**/*.test.ts) - matches test files`,
        ],
      };
    if (I.includes("*") && !I.match(/^\*|\*$|\*\*|\/\*|\*\.|\*\)/) && !I.includes("**"))
      return {
        valid: !1,
        error: "Wildcard placement might be incorrect",
        suggestion: "Wildcards are typically used at path boundaries",
        examples: [
          `${Z.toolName}(*.js) - all .js files`,
          `${Z.toolName}(src/*) - all files directly in src`,
          `${Z.toolName}(src/**) - all files recursively in src`,
        ],
      };
  }
  return { valid: !0 };
}
var HU1 = f.string().superRefine((A, B) => {
  let Q = dw9(A);
  if (!Q.valid) {
    let Z = Q.error;
    if (Q.suggestion) Z += `. ${Q.suggestion}`;
    if (Q.examples && Q.examples.length > 0) Z += `. Examples: ${Q.examples.join(", ")}`;
    B.addIssue({ code: f.ZodIssueCode.custom, message: Z, params: { received: A } });
  }
});
import { isIP as va } from "node:net";
var y10 = f.union([
    f.object({ allowAllExcept: f.array(f.string()) }),
    f.object({
      denyAllExcept: f.array(f.string()),
      includeRecommendedDefaults: f
        .boolean()
        .default(!0)
        .describe("Include essential system paths when using denyAllExcept mode (recommended)"),
    }),
  ]),
  k10 = f.union([
    f.object({ allowAllExcept: f.array(f.string()) }),
    f.object({
      denyAllExcept: f.array(f.string()),
      includeRecommendedDefaults: f
        .boolean()
        .default(!0)
        .describe("Include essential write paths when using denyAllExcept mode (recommended)"),
    }),
  ]),
  cw9 = f.object({ allow: o41("allowed"), deny: o41("denied") }).optional(),
  QR8 = f.object({ network: cw9, filesystem: f.object({ read: y10.optional(), write: k10.optional() }).optional() });
function o41(A) {
  return f
    .array(f.string())
    .optional()
    .describe(`List of automatically ${A} network hosts (e.g., ["github.com:443", "api.example.com"])`)
    .transform((B) => {
      if (!B) return;
      return B.map((Q) => {
        let Z = rw9(Q);
        if (Z instanceof Error) throw new Error(`Invalid network host pattern: ${Z.message}`);
        return Z;
      });
    });
}
var _10 = f
    .string()
    .regex(/^\d+$/)
    .transform((A) => parseInt(A, 10))
    .refine((A) => A >= 1 && A <= 65535, "Port must be between 1 and 65535"),
  lw9 = f
    .string()
    .refine((A) => va(A) === 6 && !A.includes("[") && !A.includes("]"))
    .transform((A) => ({ host: A, port: void 0 })),
  pw9 = f
    .string()
    .regex(/^\[([^\]]+)\]:(\d+)$/)
    .transform((A) => {
      let B = A.match(/^\[([^\]]+)\]:(\d+)$/),
        Q = B[1],
        Z = B[2];
      if (va(Q) !== 6) throw new Error("Invalid IPv6 address in bracket notation");
      let G = _10.safeParse(Z);
      if (!G.success) throw new Error("Invalid port number");
      let Y = G.data;
      return { host: Q, port: Y };
    }),
  iw9 = f
    .string()
    .refine((A) => va(A) === 4)
    .transform((A) => ({ host: A, port: void 0 })),
  nw9 = f
    .string()
    .regex(/^(\d+\.\d+\.\d+\.\d+):(\d+)$/)
    .transform((A) => {
      let B = A.match(/^(\d+\.\d+\.\d+\.\d+):(\d+)$/),
        Q = B[1],
        Z = B[2];
      if (va(Q) !== 4) throw new Error("Invalid IPv4 address format");
      let G = _10.safeParse(Z);
      if (!G.success) throw new Error("Invalid port number");
      let Y = G.data;
      return { host: Q, port: Y };
    }),
  S$A = f.string().refine((A) => {
    if (A.length === 0 || A.includes(":") || A.includes("/") || A.includes("?") || A.includes("#") || va(A)) return !1;
    if (A === "localhost") return !0;
    if (A.startsWith("*.")) {
      let B = A.slice(2);
      return B.includes(".") && !B.startsWith(".") && !B.endsWith(".");
    }
    return A.includes(".") && !A.startsWith(".") && !A.endsWith(".");
  }),
  aw9 = S$A.transform((A) => ({ host: A, port: void 0 })),
  sw9 = f
    .string()
    .regex(/^([^:]+):(\d+)$/)
    .transform((A) => {
      let B = A.match(/^([^:]+):(\d+)$/),
        Q = B[1],
        Z = B[2];
      if (!S$A.safeParse(Q).success) throw new Error("Invalid domain name");
      let Y = _10.safeParse(Z);
      if (!Y.success) throw new Error("Invalid port number");
      let I = Y.data;
      return { host: Q, port: I };
    }),
  y$A = f.union([pw9, lw9, nw9, iw9, sw9, aw9]);
function rw9(A) {
  let B = y$A.safeParse(A);
  if (!B.success) {
    if (A.startsWith("http://") || A.startsWith("https://"))
      return Error(`Invalid network restriction: "${A}" - remove the protocol (http:// or https://)`);
    if (A.includes("/")) return Error(`Invalid network restriction: "${A}" - paths are not allowed, only hosts`);
    if (A === "") return Error("Invalid network restriction: empty string - please provide a host");
    if (A.endsWith(":")) return Error(`Invalid network restriction: "${A}" - incomplete port specification`);
    return Error(`Invalid network restriction: "${A}"`);
  }
  return B.data;
}
function x10(A, B) {
  let Q = y$A.safeParse(A);
  if (!Q.success) return !1;
  let Z = Q.data;
  if (B.port !== void 0 && B.port !== Z.port) return !1;
  if (B.host === "localhost")
    return Z.host === "localhost" || Z.host === "127.0.0.1" || Z.host === "::1" || Z.host.endsWith(".localhost");
  if (va(B.host)) return Z.host === B.host;
  if (B.host.includes("*")) {
    let I = B.host.replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*");
    try {
      return new RegExp(`^${I}$`, "i").test(Z.host);
    } catch {
      return Z.host === B.host;
    }
  }
  let G = Z.host.toLowerCase(),
    Y = B.host.toLowerCase();
  return G === Y;
}
var ow9 = f.record(f.coerce.string()),
  tw9 = f
    .object({
      allow: f.array(HU1).optional().describe("List of permission rules for allowed operations"),
      deny: f.array(HU1).optional().describe("List of permission rules for denied operations"),
      ask: f.array(HU1).optional().describe("List of permission rules that should always prompt for confirmation"),
      defaultMode: f.enum(p41).optional().describe("Default permission mode when Claude Code needs access"),
      disableBypassPermissionsMode: f
        .enum(["disable"])
        .optional()
        .describe("Disable the ability to bypass permission prompts"),
      additionalDirectories: f
        .array(f.string())
        .optional()
        .describe("Additional directories to include in the permission scope"),
    })
    .passthrough(),
  ew9 = f.object({
    type: f.literal("command").describe('Hook type (currently only "command" is supported)'),
    command: f.string().describe("Shell command to execute"),
    timeout: f.number().positive().optional().describe("Timeout in seconds for this specific command"),
  }),
  Aq9 = f.object({
    matcher: f.string().optional().describe('String pattern to match (e.g. tool names like "Write")'),
    hooks: f.array(ew9).describe("List of hooks to execute when the matcher matches"),
  }),
  v10 = f.record(f.enum(C10), f.array(Aq9)),
  ba = f
    .object({
      $schema: f.literal(SETTINGS_SCHEMA_URL).optional().describe("JSON Schema reference for Claude Code settings"),
      apiKeyHelper: f.string().optional().describe("Path to a script that outputs authentication values"),
      awsCredentialExport: f.string().optional().describe("Path to a script that exports AWS credentials"),
      awsAuthRefresh: f.string().optional().describe("Path to a script that refreshes AWS authentication"),
      cleanupPeriodDays: f
        .number()
        .nonnegative()
        .int()
        .optional()
        .describe("Number of days to retain chat transcripts (0 to disable cleanup)"),
      env: ow9.optional().describe("Environment variables to set for Claude Code sessions"),
      includeCoAuthoredBy: f
        .boolean()
        .optional()
        .describe("Whether to include Claude's co-authored by attribution in commits and PRs (defaults to true)"),
      permissions: tw9.optional().describe("Tool usage permissions configuration"),
      model: f.string().optional().describe("Override the default model used by Claude Code"),
      enableAllProjectMcpServers: f
        .boolean()
        .optional()
        .describe("Whether to automatically approve all MCP servers in the project"),
      enabledMcpjsonServers: f.array(f.string()).optional().describe("List of approved MCP servers from .mcp.json"),
      disabledMcpjsonServers: f.array(f.string()).optional().describe("List of rejected MCP servers from .mcp.json"),
      hooks: v10.optional().describe("Custom commands to run before/after tool executions"),
      disableAllHooks: f.boolean().optional().describe("Disable all hooks and statusLine execution"),
      statusLine: f
        .object({ type: f.literal("command"), command: f.string(), padding: f.number().optional() })
        .optional()
        .describe("Custom status line display configuration"),
      enabledPlugins: f
        .record(f.union([f.array(f.string()), f.boolean()]))
        .optional()
        .describe(
          'Enabled plugins by repository. Keys are repository names, values are arrays of enabled plugin names. For npm packages, use "npm:@package/name": true',
        ),
      forceLoginMethod: f
        .enum(["claudeai", "console"])
        .optional()
        .describe('Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing'),
      forceLoginOrgUUID: f.string().optional().describe("Organization UUID to use for OAuth login"),
      otelHeadersHelper: f.string().optional().describe("Path to a script that outputs OpenTelemetry headers"),
      outputStyle: f.string().optional().describe("Controls the output style for assistant responses"),
      skipWebFetchPreflight: f
        .boolean()
        .optional()
        .describe("Skip the WebFetch blocklist check for enterprise environments with restrictive security policies"),
      sandbox: f
        .object({
          network: f
            .object({ allow: o41("allowed").optional(), deny: o41("denied").optional() })
            .optional()
            .describe("Network access restrictions"),
          filesystem: f
            .object({ read: y10.optional(), write: k10.optional() })
            .optional()
            .describe("Filesystem access restrictions - read and write can use different modes"),
        })
        .optional()
        .describe("Sandbox configuration for network and filesystem restrictions"),
      spinnerTipsEnabled: f.boolean().optional().describe("Whether to show tips in the spinner"),
    })
    .passthrough();
import { join as b$A } from "path";
import { homedir as f$A } from "os";
var JL = YA(async () => {
    let { code: A } = await B2("git", ["rev-parse", "--is-inside-work-tree"]);
    return A === 0;
  }),
  k$A = async (A) => {
    let { code: B } = await z7("git", ["rev-parse", "--is-inside-work-tree"], { preserveOutputOnError: !1, cwd: A });
    return B === 0;
  };
var b10 = async () => {
    let { stdout: A } = await B2("git", ["rev-parse", "HEAD"]);
    return A.trim();
  },
  zU1 = async () => {
    let { stdout: A } = await B2("git", ["rev-parse", "--abbrev-ref", "HEAD"], { preserveOutputOnError: !1 });
    return A.trim();
  },
  _$A = async () => {
    let { stdout: A, code: B } = await B2("git", ["symbolic-ref", "refs/remotes/origin/HEAD"], {
      preserveOutputOnError: !1,
    });
    if (B === 0) {
      let G = A.trim().match(/refs\/remotes\/origin\/(.+)/);
      if (G && G[1]) return G[1];
    }
    let { stdout: Q, code: Z } = await B2("git", ["branch", "-r"], { preserveOutputOnError: !1 });
    if (Z === 0) {
      let G = Q.trim()
        .split(
          `
`,
        )
        .map((Y) => Y.trim());
      for (let Y of ["main", "master"]) if (G.some((I) => I.includes(`origin/${Y}`))) return Y;
    }
    return "main";
  },
  t41 = async () => {
    let { stdout: A, code: B } = await B2("git", ["remote", "get-url", "origin"], { preserveOutputOnError: !1 });
    return B === 0 ? A.trim() : null;
  },
  Bq9 = async () => {
    let { code: A } = await B2("git", ["rev-parse", "@{u}"], { preserveOutputOnError: !1 });
    return A === 0;
  },
  e41 = async () => {
    let { stdout: A } = await B2("git", ["status", "--porcelain"], { preserveOutputOnError: !1 });
    return A.trim().length === 0;
  };
var f10 = async () => {
    let { stdout: A } = await B2("git", ["status", "--porcelain"], { preserveOutputOnError: !1 }),
      B = [],
      Q = [];
    return (
      A.trim()
        .split(
          `
`,
        )
        .filter((Z) => Z.length > 0)
        .forEach((Z) => {
          let G = Z.substring(0, 2),
            Y = Z.substring(2).trim();
          if (G === "??") Q.push(Y);
          else if (Y) B.push(Y);
        }),
      { tracked: B, untracked: Q }
    );
  },
  A61 = async () => {
    try {
      let { stdout: A, code: B } = await B2("git", ["worktree", "list"], { preserveOutputOnError: !1 });
      if (B !== 0) return 0;
      return A.trim().split(`
`).length;
    } catch (A) {
      return 0;
    }
  },
  x$A = async (A) => {
    try {
      let B = A || `Claude Code auto-stash - ${new Date().toISOString()}`,
        { untracked: Q } = await f10();
      if (Q.length > 0) {
        let { code: G } = await B2("git", ["add", ...Q], { preserveOutputOnError: !1 });
        if (G !== 0) return !1;
      }
      let { code: Z } = await B2("git", ["stash", "push", "--message", B], { preserveOutputOnError: !1 });
      return Z === 0;
    } catch (B) {
      return !1;
    }
  };
async function v$A() {
  try {
    let [A, B, Q, Z, G, Y] = await Promise.all([b10(), zU1(), t41(), Bq9(), e41(), A61()]);
    return { commitHash: A, branchName: B, remoteUrl: Q, isHeadOnRemote: Z, isClean: G, worktreeCount: Y };
  } catch (A) {
    return null;
  }
}
async function Qq9(A, B) {
  let { code: Q } = await z7("git", ["check-ignore", A], { preserveOutputOnError: !1, cwd: B });
  return Q === 0;
}
function Zq9() {
  return b$A(f$A(), ".config", "git", "ignore");
}
async function B61(A, B = AA()) {
  try {
    if (!(await k$A(B))) return;
    let Q = `**/${A}`;
    if (await Qq9(A, B)) return;
    let Z = Zq9(),
      G = w1(),
      Y = b$A(f$A(), ".config", "git");
    if (!G.existsSync(Y)) G.mkdirSync(Y);
    if (G.existsSync(Z))
      G.appendFileSync(
        Z,
        `
${Q}
`,
      );
    else
      G.appendFileSync(
        Z,
        `${Q}
`,
      );
  } catch (Q) {
    U1(Q instanceof Error ? Q : new Error(String(Q)), STYLE_CODE_124);
  }
}
var Gq9 = [
    {
      matches: (A) => A.path === "permissions.defaultMode" && A.code === "invalid_enum_value",
      tip: {
        suggestion:
          'Valid modes: "acceptEdits" (ask before file changes), "plan" (analysis only), "bypassPermissions" (auto-accept all), or "default" (standard behavior)',
        docLink: "https://docs.anthropic.com/en/docs/claude-code/iam#permission-modes",
      },
    },
    {
      matches: (A) => A.path === "apiKeyHelper" && A.code === "invalid_type",
      tip: {
        suggestion:
          'Provide a shell command that outputs your API key to stdout. The script should output only the API key. Example: "/bin/generate_temp_api_key.sh"',
      },
    },
    {
      matches: (A) => A.path === "cleanupPeriodDays" && A.code === "too_small" && A.expected === "0",
      tip: {
        suggestion:
          "Must be 0 or greater. Use 0 to disable automatic cleanup and keep chat transcripts forever, or set a positive number for days to retain (default is 30 days)",
      },
    },
    {
      matches: (A) => A.path.startsWith("env.") && A.code === "invalid_type",
      tip: {
        suggestion:
          'Environment variables must be strings. Wrap numbers and booleans in quotes. Example: "DEBUG": "true", "PORT": "3000"',
        docLink: "https://docs.anthropic.com/en/docs/claude-code/settings#environment-variables",
      },
    },
    {
      matches: (A) =>
        (A.path === "permissions.allow" || A.path === "permissions.deny") &&
        A.code === "invalid_type" &&
        A.expected === "array",
      tip: {
        suggestion:
          'Permission rules must be in an array. Format: ["Tool(specifier)"]. Examples: ["Bash(npm run build)", "Edit(docs/**)", "Read(~/.zshrc)"]. Use * for wildcards.',
      },
    },
    {
      matches: (A) => A.path.includes("hooks") && A.code === "invalid_type",
      tip: {
        suggestion:
          'Hooks use a new format with matchers. Example: {"PostToolUse": [{"matcher": {"tools": ["BashTool"]}, "hooks": [{"type": "command", "command": "echo Done"}]}]}',
      },
    },
    {
      matches: (A) => A.code === "invalid_type" && A.expected === "boolean",
      tip: { suggestion: 'Use true or false without quotes. Example: "includeCoAuthoredBy": true' },
    },
    {
      matches: (A) => A.code === "unrecognized_keys",
      tip: {
        suggestion: "Check for typos or refer to the documentation for valid fields",
        docLink: "https://docs.anthropic.com/en/docs/claude-code/settings",
      },
    },
    { matches: (A) => A.code === "invalid_enum_value" && A.enumValues !== void 0, tip: { suggestion: void 0 } },
    {
      matches: (A) => A.code === "invalid_type" && A.expected === "object" && A.received === null && A.path === "",
      tip: {
        suggestion:
          "Check for missing commas, unmatched brackets, or trailing commas. Use a JSON validator to identify the exact syntax error.",
      },
    },
    {
      matches: (A) => A.path === "permissions.additionalDirectories" && A.code === "invalid_type",
      tip: {
        suggestion:
          'Must be an array of directory paths. Example: ["~/projects", "/tmp/workspace"]. You can also use --add-dir flag or /add-dir command',
        docLink: "https://docs.anthropic.com/en/docs/claude-code/iam#working-directories",
      },
    },
  ],
  Yq9 = {
    permissions: "https://docs.anthropic.com/en/docs/claude-code/iam#configuring-permissions",
    env: "https://docs.anthropic.com/en/docs/claude-code/settings#environment-variables",
    hooks: "https://docs.anthropic.com/en/docs/claude-code/hooks",
  };
function h$A(A) {
  let B = Gq9.find((Z) => Z.matches(A));
  if (!B) return null;
  let Q = { ...B.tip };
  if (A.code === "invalid_enum_value" && A.enumValues && !Q.suggestion)
    Q.suggestion = `Valid values: ${A.enumValues.map((Z) => `"${Z}"`).join(", ")}`;
  if (!Q.docLink && A.path) {
    let Z = A.path.split(".")[0];
    if (Z) Q.docLink = Yq9[Z];
  }
  return Q;
}
var u$A = Symbol("Let zodToJsonSchema decide on which parser to use");
var g$A = {
    name: void 0,
    $refStrategy: "root",
    basePath: ["#"],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: !0,
    rejectedAdditionalProperties: !1,
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: !1,
    definitions: {},
    errorMessages: !1,
    markdownDescription: !1,
    patternStrategy: "escape",
    applyRegexFlags: !1,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
  },
  m$A = (A) => (typeof A === "string" ? { ...g$A, name: A } : { ...g$A, ...A });
var d$A = (A) => {
  let B = m$A(A),
    Q = B.name !== void 0 ? [...B.basePath, B.definitionPath, B.name] : B.basePath;
  return {
    ...B,
    currentPath: Q,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(B.definitions).map(([Z, G]) => [
        G._def,
        { def: G._def, path: [...B.basePath, B.definitionPath, Z], jsonSchema: void 0 },
      ]),
    ),
  };
};
function h10(A, B, Q, Z) {
  if (!Z?.errorMessages) return;
  if (Q) A.errorMessage = { ...A.errorMessage, [B]: Q };
}
function a6(A, B, Q, Z, G) {
  ((A[B] = Q), h10(A, B, Z, G));
}
function c$A() {
  return {};
}
function l$A(A, B) {
  let Q = { type: "array" };
  if (A.type?._def && A.type?._def?.typeName !== Q2.ZodAny)
    Q.items = q9(A.type._def, { ...B, currentPath: [...B.currentPath, "items"] });
  if (A.minLength) a6(Q, "minItems", A.minLength.value, A.minLength.message, B);
  if (A.maxLength) a6(Q, "maxItems", A.maxLength.value, A.maxLength.message, B);
  if (A.exactLength)
    (a6(Q, "minItems", A.exactLength.value, A.exactLength.message, B),
      a6(Q, "maxItems", A.exactLength.value, A.exactLength.message, B));
  return Q;
}
function p$A(A, B) {
  let Q = { type: "integer", format: "int64" };
  if (!A.checks) return Q;
  for (let Z of A.checks)
    switch (Z.kind) {
      case "min":
        if (B.target === "jsonSchema7")
          if (Z.inclusive) a6(Q, "minimum", Z.value, Z.message, B);
          else a6(Q, "exclusiveMinimum", Z.value, Z.message, B);
        else {
          if (!Z.inclusive) Q.exclusiveMinimum = !0;
          a6(Q, "minimum", Z.value, Z.message, B);
        }
        break;
      case "max":
        if (B.target === "jsonSchema7")
          if (Z.inclusive) a6(Q, "maximum", Z.value, Z.message, B);
          else a6(Q, "exclusiveMaximum", Z.value, Z.message, B);
        else {
          if (!Z.inclusive) Q.exclusiveMaximum = !0;
          a6(Q, "maximum", Z.value, Z.message, B);
        }
        break;
      case "multipleOf":
        a6(Q, "multipleOf", Z.value, Z.message, B);
        break;
    }
  return Q;
}
function i$A() {
  return { type: "boolean" };
}
function DU1(A, B) {
  return q9(A.type._def, B);
}
var n$A = (A, B) => {
  return q9(A.innerType._def, B);
};
function g10(A, B, Q) {
  let Z = Q ?? B.dateStrategy;
  if (Array.isArray(Z)) return { anyOf: Z.map((G, Y) => g10(A, B, G)) };
  switch (Z) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return Iq9(A, B);
  }
}
var Iq9 = (A, B) => {
  let Q = { type: "integer", format: "unix-time" };
  if (B.target === "openApi3") return Q;
  for (let Z of A.checks)
    switch (Z.kind) {
      case "min":
        a6(Q, "minimum", Z.value, Z.message, B);
        break;
      case "max":
        a6(Q, "maximum", Z.value, Z.message, B);
        break;
    }
  return Q;
};
function a$A(A, B) {
  return { ...q9(A.innerType._def, B), default: A.defaultValue() };
}
function s$A(A, B) {
  return B.effectStrategy === "input" ? q9(A.schema._def, B) : {};
}
function r$A(A) {
  return { type: "string", enum: Array.from(A.values) };
}
var Wq9 = (A) => {
  if ("type" in A && A.type === "string") return !1;
  return "allOf" in A;
};
function o$A(A, B) {
  let Q = [
      q9(A.left._def, { ...B, currentPath: [...B.currentPath, "allOf", "0"] }),
      q9(A.right._def, { ...B, currentPath: [...B.currentPath, "allOf", "1"] }),
    ].filter((Y) => !!Y),
    Z = B.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0,
    G = [];
  return (
    Q.forEach((Y) => {
      if (Wq9(Y)) {
        if ((G.push(...Y.allOf), Y.unevaluatedProperties === void 0)) Z = void 0;
      } else {
        let I = Y;
        if ("additionalProperties" in Y && Y.additionalProperties === !1) {
          let { additionalProperties: W, ...J } = Y;
          I = J;
        } else Z = void 0;
        G.push(I);
      }
    }),
    G.length ? { allOf: G, ...Z } : void 0
  );
}
function t$A(A, B) {
  let Q = typeof A.value;
  if (Q !== "bigint" && Q !== "number" && Q !== "boolean" && Q !== "string")
    return { type: Array.isArray(A.value) ? "array" : "object" };
  if (B.target === "openApi3") return { type: Q === "bigint" ? "integer" : Q, enum: [A.value] };
  return { type: Q === "bigint" ? "integer" : Q, const: A.value };
}
var u10 = void 0,
  Gq = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    emoji: () => {
      if (u10 === void 0) u10 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
      return u10;
    },
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr:
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr:
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  };
function CU1(A, B) {
  let Q = { type: "string" };
  if (A.checks)
    for (let Z of A.checks)
      switch (Z.kind) {
        case "min":
          a6(Q, "minLength", typeof Q.minLength === "number" ? Math.max(Q.minLength, Z.value) : Z.value, Z.message, B);
          break;
        case "max":
          a6(Q, "maxLength", typeof Q.maxLength === "number" ? Math.min(Q.maxLength, Z.value) : Z.value, Z.message, B);
          break;
        case "email":
          switch (B.emailStrategy) {
            case "format:email":
              Yq(Q, "email", Z.message, B);
              break;
            case "format:idn-email":
              Yq(Q, "idn-email", Z.message, B);
              break;
            case "pattern:zod":
              wV(Q, Gq.email, Z.message, B);
              break;
          }
          break;
        case "url":
          Yq(Q, "uri", Z.message, B);
          break;
        case "uuid":
          Yq(Q, "uuid", Z.message, B);
          break;
        case "regex":
          wV(Q, Z.regex, Z.message, B);
          break;
        case "cuid":
          wV(Q, Gq.cuid, Z.message, B);
          break;
        case "cuid2":
          wV(Q, Gq.cuid2, Z.message, B);
          break;
        case "startsWith":
          wV(Q, RegExp(`^${m10(Z.value, B)}`), Z.message, B);
          break;
        case "endsWith":
          wV(Q, RegExp(`${m10(Z.value, B)}$`), Z.message, B);
          break;
        case "datetime":
          Yq(Q, "date-time", Z.message, B);
          break;
        case "date":
          Yq(Q, "date", Z.message, B);
          break;
        case "time":
          Yq(Q, "time", Z.message, B);
          break;
        case "duration":
          Yq(Q, "duration", Z.message, B);
          break;
        case "length":
          (a6(Q, "minLength", typeof Q.minLength === "number" ? Math.max(Q.minLength, Z.value) : Z.value, Z.message, B),
            a6(
              Q,
              "maxLength",
              typeof Q.maxLength === "number" ? Math.min(Q.maxLength, Z.value) : Z.value,
              Z.message,
              B,
            ));
          break;
        case "includes": {
          wV(Q, RegExp(m10(Z.value, B)), Z.message, B);
          break;
        }
        case "ip": {
          if (Z.version !== "v6") Yq(Q, "ipv4", Z.message, B);
          if (Z.version !== "v4") Yq(Q, "ipv6", Z.message, B);
          break;
        }
        case "base64url":
          wV(Q, Gq.base64url, Z.message, B);
          break;
        case "jwt":
          wV(Q, Gq.jwt, Z.message, B);
          break;
        case "cidr": {
          if (Z.version !== "v6") wV(Q, Gq.ipv4Cidr, Z.message, B);
          if (Z.version !== "v4") wV(Q, Gq.ipv6Cidr, Z.message, B);
          break;
        }
        case "emoji":
          wV(Q, Gq.emoji(), Z.message, B);
          break;
        case "ulid": {
          wV(Q, Gq.ulid, Z.message, B);
          break;
        }
        case "base64": {
          switch (B.base64Strategy) {
            case "format:binary": {
              Yq(Q, "binary", Z.message, B);
              break;
            }
            case "contentEncoding:base64": {
              a6(Q, "contentEncoding", "base64", Z.message, B);
              break;
            }
            case "pattern:zod": {
              wV(Q, Gq.base64, Z.message, B);
              break;
            }
          }
          break;
        }
        case "nanoid":
          wV(Q, Gq.nanoid, Z.message, B);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
          ((G) => {})(Z);
      }
  return Q;
}
function m10(A, B) {
  return B.patternStrategy === "escape" ? Xq9(A) : A;
}
var Jq9 = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Xq9(A) {
  let B = "";
  for (let Q = 0; Q < A.length; Q++) {
    if (!Jq9.has(A[Q])) B += "\\";
    B += A[Q];
  }
  return B;
}
function Yq(A, B, Q, Z) {
  if (A.format || A.anyOf?.some((G) => G.format)) {
    if (!A.anyOf) A.anyOf = [];
    if (A.format) {
      if (
        (A.anyOf.push({
          format: A.format,
          ...(A.errorMessage && Z.errorMessages && { errorMessage: { format: A.errorMessage.format } }),
        }),
        delete A.format,
        A.errorMessage)
      ) {
        if ((delete A.errorMessage.format, Object.keys(A.errorMessage).length === 0)) delete A.errorMessage;
      }
    }
    A.anyOf.push({ format: B, ...(Q && Z.errorMessages && { errorMessage: { format: Q } }) });
  } else a6(A, "format", B, Q, Z);
}
function wV(A, B, Q, Z) {
  if (A.pattern || A.allOf?.some((G) => G.pattern)) {
    if (!A.allOf) A.allOf = [];
    if (A.pattern) {
      if (
        (A.allOf.push({
          pattern: A.pattern,
          ...(A.errorMessage && Z.errorMessages && { errorMessage: { pattern: A.errorMessage.pattern } }),
        }),
        delete A.pattern,
        A.errorMessage)
      ) {
        if ((delete A.errorMessage.pattern, Object.keys(A.errorMessage).length === 0)) delete A.errorMessage;
      }
    }
    A.allOf.push({ pattern: e$A(B, Z), ...(Q && Z.errorMessages && { errorMessage: { pattern: Q } }) });
  } else a6(A, "pattern", e$A(B, Z), Q, Z);
}
function e$A(A, B) {
  if (!B.applyRegexFlags || !A.flags) return A.source;
  let Q = { i: A.flags.includes("i"), m: A.flags.includes("m"), s: A.flags.includes("s") },
    Z = Q.i ? A.source.toLowerCase() : A.source,
    G = "",
    Y = !1,
    I = !1,
    W = !1;
  for (let J = 0; J < Z.length; J++) {
    if (Y) {
      ((G += Z[J]), (Y = !1));
      continue;
    }
    if (Q.i) {
      if (I) {
        if (Z[J].match(/[a-z]/)) {
          if (W) ((G += Z[J]), (G += `${Z[J - 2]}-${Z[J]}`.toUpperCase()), (W = !1));
          else if (Z[J + 1] === "-" && Z[J + 2]?.match(/[a-z]/)) ((G += Z[J]), (W = !0));
          else G += `${Z[J]}${Z[J].toUpperCase()}`;
          continue;
        }
      } else if (Z[J].match(/[a-z]/)) {
        G += `[${Z[J]}${Z[J].toUpperCase()}]`;
        continue;
      }
    }
    if (Q.m) {
      if (Z[J] === "^") {
        G += `(^|(?<=[\r
]))`;
        continue;
      } else if (Z[J] === "$") {
        G += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (Q.s && Z[J] === ".") {
      G += I
        ? `${Z[J]}\r
`
        : `[${Z[J]}\r
]`;
      continue;
    }
    if (((G += Z[J]), Z[J] === "\\")) Y = !0;
    else if (I && Z[J] === "]") I = !1;
    else if (!I && Z[J] === "[") I = !0;
  }
  try {
    new RegExp(G);
  } catch {
    return (
      console.warn(
        `Could not convert regex pattern at ${B.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`,
      ),
      A.source
    );
  }
  return G;
}
function UU1(A, B) {
  if (B.target === "openAi")
    console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
  if (B.target === "openApi3" && A.keyType?._def.typeName === Q2.ZodEnum)
    return {
      type: "object",
      required: A.keyType._def.values,
      properties: A.keyType._def.values.reduce(
        (Z, G) => ({
          ...Z,
          [G]: q9(A.valueType._def, { ...B, currentPath: [...B.currentPath, "properties", G] }) ?? {},
        }),
        {},
      ),
      additionalProperties: B.rejectedAdditionalProperties,
    };
  let Q = {
    type: "object",
    additionalProperties:
      q9(A.valueType._def, { ...B, currentPath: [...B.currentPath, "additionalProperties"] }) ??
      B.allowedAdditionalProperties,
  };
  if (B.target === "openApi3") return Q;
  if (A.keyType?._def.typeName === Q2.ZodString && A.keyType._def.checks?.length) {
    let { type: Z, ...G } = CU1(A.keyType._def, B);
    return { ...Q, propertyNames: G };
  } else if (A.keyType?._def.typeName === Q2.ZodEnum) return { ...Q, propertyNames: { enum: A.keyType._def.values } };
  else if (
    A.keyType?._def.typeName === Q2.ZodBranded &&
    A.keyType._def.type._def.typeName === Q2.ZodString &&
    A.keyType._def.type._def.checks?.length
  ) {
    let { type: Z, ...G } = DU1(A.keyType._def, B);
    return { ...Q, propertyNames: G };
  }
  return Q;
}
function AwA(A, B) {
  if (B.mapStrategy === "record") return UU1(A, B);
  let Q = q9(A.keyType._def, { ...B, currentPath: [...B.currentPath, "items", "items", "0"] }) || {},
    Z = q9(A.valueType._def, { ...B, currentPath: [...B.currentPath, "items", "items", "1"] }) || {};
  return { type: "array", maxItems: 125, items: { type: "array", items: [Q, Z], minItems: 2, maxItems: 2 } };
}
function BwA(A) {
  let B = A.values,
    Z = Object.keys(A.values)
      .filter((Y) => {
        return typeof B[B[Y]] !== "number";
      })
      .map((Y) => B[Y]),
    G = Array.from(new Set(Z.map((Y) => typeof Y)));
  return { type: G.length === 1 ? (G[0] === "string" ? "string" : "number") : ["string", "number"], enum: Z };
}
function QwA() {
  return { not: {} };
}
function ZwA(A) {
  return A.target === "openApi3" ? { enum: ["null"], nullable: !0 } : { type: "null" };
}
var Q61 = { ZodString: "string", ZodNumber: "number", ZodBigInt: "integer", ZodBoolean: "boolean", ZodNull: "null" };
function YwA(A, B) {
  if (B.target === "openApi3") return GwA(A, B);
  let Q = A.options instanceof Map ? Array.from(A.options.values()) : A.options;
  if (Q.every((Z) => Z._def.typeName in Q61 && (!Z._def.checks || !Z._def.checks.length))) {
    let Z = Q.reduce((G, Y) => {
      let I = Q61[Y._def.typeName];
      return I && !G.includes(I) ? [...G, I] : G;
    }, []);
    return { type: Z.length > 1 ? Z : Z[0] };
  } else if (Q.every((Z) => Z._def.typeName === "ZodLiteral" && !Z.description)) {
    let Z = Q.reduce((G, Y) => {
      let I = typeof Y._def.value;
      switch (I) {
        case "string":
        case "number":
        case "boolean":
          return [...G, I];
        case "bigint":
          return [...G, "integer"];
        case "object":
          if (Y._def.value === null) return [...G, "null"];
        case "symbol":
        case "undefined":
        case "function":
        default:
          return G;
      }
    }, []);
    if (Z.length === Q.length) {
      let G = Z.filter((Y, I, W) => W.indexOf(Y) === I);
      return {
        type: G.length > 1 ? G : G[0],
        enum: Q.reduce((Y, I) => {
          return Y.includes(I._def.value) ? Y : [...Y, I._def.value];
        }, []),
      };
    }
  } else if (Q.every((Z) => Z._def.typeName === "ZodEnum"))
    return { type: "string", enum: Q.reduce((Z, G) => [...Z, ...G._def.values.filter((Y) => !Z.includes(Y))], []) };
  return GwA(A, B);
}
var GwA = (A, B) => {
  let Q = (A.options instanceof Map ? Array.from(A.options.values()) : A.options)
    .map((Z, G) => q9(Z._def, { ...B, currentPath: [...B.currentPath, "anyOf", `${G}`] }))
    .filter((Z) => !!Z && (!B.strictUnions || (typeof Z === "object" && Object.keys(Z).length > 0)));
  return Q.length ? { anyOf: Q } : void 0;
};
function IwA(A, B) {
  if (
    ["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(A.innerType._def.typeName) &&
    (!A.innerType._def.checks || !A.innerType._def.checks.length)
  ) {
    if (B.target === "openApi3") return { type: Q61[A.innerType._def.typeName], nullable: !0 };
    return { type: [Q61[A.innerType._def.typeName], "null"] };
  }
  if (B.target === "openApi3") {
    let Z = q9(A.innerType._def, { ...B, currentPath: [...B.currentPath] });
    if (Z && "$ref" in Z) return { allOf: [Z], nullable: !0 };
    return Z && { ...Z, nullable: !0 };
  }
  let Q = q9(A.innerType._def, { ...B, currentPath: [...B.currentPath, "anyOf", "0"] });
  return Q && { anyOf: [Q, { type: "null" }] };
}
function WwA(A, B) {
  let Q = { type: "number" };
  if (!A.checks) return Q;
  for (let Z of A.checks)
    switch (Z.kind) {
      case "int":
        ((Q.type = "integer"), h10(Q, "type", Z.message, B));
        break;
      case "min":
        if (B.target === "jsonSchema7")
          if (Z.inclusive) a6(Q, "minimum", Z.value, Z.message, B);
          else a6(Q, "exclusiveMinimum", Z.value, Z.message, B);
        else {
          if (!Z.inclusive) Q.exclusiveMinimum = !0;
          a6(Q, "minimum", Z.value, Z.message, B);
        }
        break;
      case "max":
        if (B.target === "jsonSchema7")
          if (Z.inclusive) a6(Q, "maximum", Z.value, Z.message, B);
          else a6(Q, "exclusiveMaximum", Z.value, Z.message, B);
        else {
          if (!Z.inclusive) Q.exclusiveMaximum = !0;
          a6(Q, "maximum", Z.value, Z.message, B);
        }
        break;
      case "multipleOf":
        a6(Q, "multipleOf", Z.value, Z.message, B);
        break;
    }
  return Q;
}
function JwA(A, B) {
  let Q = B.target === "openAi",
    Z = { type: "object", properties: {} },
    G = [],
    Y = A.shape();
  for (let W in Y) {
    let J = Y[W];
    if (J === void 0 || J._def === void 0) continue;
    let X = Vq9(J);
    if (X && Q) {
      if (J instanceof kz) J = J._def.innerType;
      if (!J.isNullable()) J = J.nullable();
      X = !1;
    }
    let F = q9(J._def, {
      ...B,
      currentPath: [...B.currentPath, "properties", W],
      propertyPath: [...B.currentPath, "properties", W],
    });
    if (F === void 0) continue;
    if (((Z.properties[W] = F), !X)) G.push(W);
  }
  if (G.length) Z.required = G;
  let I = Fq9(A, B);
  if (I !== void 0) Z.additionalProperties = I;
  return Z;
}
function Fq9(A, B) {
  if (A.catchall._def.typeName !== "ZodNever")
    return q9(A.catchall._def, { ...B, currentPath: [...B.currentPath, "additionalProperties"] });
  switch (A.unknownKeys) {
    case "passthrough":
      return B.allowedAdditionalProperties;
    case "strict":
      return B.rejectedAdditionalProperties;
    case "strip":
      return B.removeAdditionalStrategy === "strict" ? B.allowedAdditionalProperties : B.rejectedAdditionalProperties;
  }
}
function Vq9(A) {
  try {
    return A.isOptional();
  } catch {
    return !0;
  }
}
var XwA = (A, B) => {
  if (B.currentPath.toString() === B.propertyPath?.toString()) return q9(A.innerType._def, B);
  let Q = q9(A.innerType._def, { ...B, currentPath: [...B.currentPath, "anyOf", "1"] });
  return Q ? { anyOf: [{ not: {} }, Q] } : {};
};
var FwA = (A, B) => {
  if (B.pipeStrategy === "input") return q9(A.in._def, B);
  else if (B.pipeStrategy === "output") return q9(A.out._def, B);
  let Q = q9(A.in._def, { ...B, currentPath: [...B.currentPath, "allOf", "0"] }),
    Z = q9(A.out._def, { ...B, currentPath: [...B.currentPath, "allOf", Q ? "1" : "0"] });
  return { allOf: [Q, Z].filter((G) => G !== void 0) };
};
function VwA(A, B) {
  return q9(A.type._def, B);
}
function KwA(A, B) {
  let Z = {
    type: "array",
    uniqueItems: !0,
    items: q9(A.valueType._def, { ...B, currentPath: [...B.currentPath, "items"] }),
  };
  if (A.minSize) a6(Z, "minItems", A.minSize.value, A.minSize.message, B);
  if (A.maxSize) a6(Z, "maxItems", A.maxSize.value, A.maxSize.message, B);
  return Z;
}
function HwA(A, B) {
  if (A.rest)
    return {
      type: "array",
      minItems: A.items.length,
      items: A.items
        .map((Q, Z) => q9(Q._def, { ...B, currentPath: [...B.currentPath, "items", `${Z}`] }))
        .reduce((Q, Z) => (Z === void 0 ? Q : [...Q, Z]), []),
      additionalItems: q9(A.rest._def, { ...B, currentPath: [...B.currentPath, "additionalItems"] }),
    };
  else
    return {
      type: "array",
      minItems: A.items.length,
      maxItems: A.items.length,
      items: A.items
        .map((Q, Z) => q9(Q._def, { ...B, currentPath: [...B.currentPath, "items", `${Z}`] }))
        .reduce((Q, Z) => (Z === void 0 ? Q : [...Q, Z]), []),
    };
}
function zwA() {
  return { not: {} };
}
function DwA() {
  return {};
}
var CwA = (A, B) => {
  return q9(A.innerType._def, B);
};
var UwA = (A, B, Q) => {
  switch (B) {
    case Q2.ZodString:
      return CU1(A, Q);
    case Q2.ZodNumber:
      return WwA(A, Q);
    case Q2.ZodObject:
      return JwA(A, Q);
    case Q2.ZodBigInt:
      return p$A(A, Q);
    case Q2.ZodBoolean:
      return i$A();
    case Q2.ZodDate:
      return g10(A, Q);
    case Q2.ZodUndefined:
      return zwA();
    case Q2.ZodNull:
      return ZwA(Q);
    case Q2.ZodArray:
      return l$A(A, Q);
    case Q2.ZodUnion:
    case Q2.ZodDiscriminatedUnion:
      return YwA(A, Q);
    case Q2.ZodIntersection:
      return o$A(A, Q);
    case Q2.ZodTuple:
      return HwA(A, Q);
    case Q2.ZodRecord:
      return UU1(A, Q);
    case Q2.ZodLiteral:
      return t$A(A, Q);
    case Q2.ZodEnum:
      return r$A(A);
    case Q2.ZodNativeEnum:
      return BwA(A);
    case Q2.ZodNullable:
      return IwA(A, Q);
    case Q2.ZodOptional:
      return XwA(A, Q);
    case Q2.ZodMap:
      return AwA(A, Q);
    case Q2.ZodSet:
      return KwA(A, Q);
    case Q2.ZodLazy:
      return () => A.getter()._def;
    case Q2.ZodPromise:
      return VwA(A, Q);
    case Q2.ZodNaN:
    case Q2.ZodNever:
      return QwA();
    case Q2.ZodEffects:
      return s$A(A, Q);
    case Q2.ZodAny:
      return c$A();
    case Q2.ZodUnknown:
      return DwA();
    case Q2.ZodDefault:
      return a$A(A, Q);
    case Q2.ZodBranded:
      return DU1(A, Q);
    case Q2.ZodReadonly:
      return CwA(A, Q);
    case Q2.ZodCatch:
      return n$A(A, Q);
    case Q2.ZodPipeline:
      return FwA(A, Q);
    case Q2.ZodFunction:
    case Q2.ZodVoid:
    case Q2.ZodSymbol:
      return;
    default:
      return ((Z) => {
        return;
      })(B);
  }
};
function q9(A, B, Q = !1) {
  let Z = B.seen.get(A);
  if (B.override) {
    let W = B.override?.(A, B, Z, Q);
    if (W !== u$A) return W;
  }
  if (Z && !Q) {
    let W = Kq9(Z, B);
    if (W !== void 0) return W;
  }
  let G = { def: A, path: B.currentPath, jsonSchema: void 0 };
  B.seen.set(A, G);
  let Y = UwA(A, A.typeName, B),
    I = typeof Y === "function" ? q9(Y(), B) : Y;
  if (I) zq9(A, B, I);
  if (B.postProcess) {
    let W = B.postProcess(I, A, B);
    return ((G.jsonSchema = I), W);
  }
  return ((G.jsonSchema = I), I);
}
var Kq9 = (A, B) => {
    switch (B.$refStrategy) {
      case "root":
        return { $ref: A.path.join("/") };
      case "relative":
        return { $ref: Hq9(B.currentPath, A.path) };
      case "none":
      case "seen": {
        if (A.path.length < B.currentPath.length && A.path.every((Q, Z) => B.currentPath[Z] === Q))
          return (console.warn(`Recursive reference detected at ${B.currentPath.join("/")}! Defaulting to any`), {});
        return B.$refStrategy === "seen" ? {} : void 0;
      }
    }
  },
  Hq9 = (A, B) => {
    let Q = 0;
    for (; Q < A.length && Q < B.length; Q++) if (A[Q] !== B[Q]) break;
    return [(A.length - Q).toString(), ...B.slice(Q)].join("/");
  },
  zq9 = (A, B, Q) => {
    if (A.description) {
      if (((Q.description = A.description), B.markdownDescription)) Q.markdownDescription = A.description;
    }
    return Q;
  };
var rg = (A, B) => {
  let Q = d$A(B),
    Z =
      typeof B === "object" && B.definitions
        ? Object.entries(B.definitions).reduce(
            (J, [X, F]) => ({
              ...J,
              [X]: q9(F._def, { ...Q, currentPath: [...Q.basePath, Q.definitionPath, X] }, !0) ?? {},
            }),
            {},
          )
        : void 0,
    G = typeof B === "string" ? B : B?.nameStrategy === "title" ? void 0 : B?.name,
    Y = q9(A._def, G === void 0 ? Q : { ...Q, currentPath: [...Q.basePath, Q.definitionPath, G] }, !1) ?? {},
    I = typeof B === "object" && B.name !== void 0 && B.nameStrategy === "title" ? B.name : void 0;
  if (I !== void 0) Y.title = I;
  let W =
    G === void 0
      ? Z
        ? { ...Y, [Q.definitionPath]: Z }
        : Y
      : {
          $ref: [...(Q.$refStrategy === "relative" ? [] : Q.basePath), Q.definitionPath, G].join("/"),
          [Q.definitionPath]: { ...Z, [G]: Y },
        };
  if (Q.target === "jsonSchema7") W.$schema = "http://json-schema.org/draft-07/schema#";
  else if (Q.target === "jsonSchema2019-09" || Q.target === "openAi")
    W.$schema = "https://json-schema.org/draft/2019-09/schema#";
  if (Q.target === "openAi" && ("anyOf" in W || "oneOf" in W || "allOf" in W || ("type" in W && Array.isArray(W.type))))
    console.warn(
      "Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.",
    );
  return W;
};
function d10() {
  let A = rg(ba, { name: "ClaudeCodeSettings", $refStrategy: "none" });
  return JSON.stringify(A, null, 2);
}
function $wA(A) {
  return A.code === "invalid_type";
}
function wwA(A) {
  return A.code === "invalid_literal";
}
function qwA(A) {
  return A.code === "invalid_enum_value";
}
function Dq9(A) {
  return A.code === "unrecognized_keys";
}
function EwA(A) {
  return A.code === "too_small";
}
function c10(A, B) {
  return A.issues.map((Q) => {
    let Z = Q.path.join("."),
      G = Q.message,
      Y,
      I,
      W,
      J;
    if (qwA(Q)) ((I = Q.options.map((F) => String(F))), (J = Q.received));
    else if (wwA(Q)) ((W = String(Q.expected)), (J = Q.received));
    else if ($wA(Q)) ((W = Q.expected), (J = Q.received));
    else if (EwA(Q)) W = String(Q.minimum);
    else if (Q.code === "custom" && "params" in Q) J = Q.params.received;
    let X = h$A({ path: Z, code: Q.code, expected: W, received: J, enumValues: I, message: Q.message, value: J });
    if (wwA(Q)) ((Y = `"${Q.expected}"`), (G = `"${Q.received}" is not valid. Expected: ${Y}`));
    else if (qwA(Q))
      ((Y = I?.map((F) => `"${F}"`).join(", ")), (G = `"${Q.received}" is not valid. Expected one of: ${Y}`));
    else if ($wA(Q))
      if (Q.expected === "object" && Q.received === "null" && Z === "") G = "Invalid or malformed JSON";
      else G = `Expected ${Q.expected}, but received ${Q.received}`;
    else if (Dq9(Q)) {
      let F = Q.keys.join(", ");
      G = `Unrecognized field${Q.keys.length > 1 ? "s" : ""}: ${F}`;
    } else if (EwA(Q)) ((G = `Number must be greater than or equal to ${Q.minimum}`), (Y = String(Q.minimum)));
    return {
      file: B,
      path: Z,
      message: G,
      expected: Y,
      invalidValue: J,
      suggestion: X?.suggestion,
      docLink: X?.docLink,
    };
  });
}
function l10(A) {
  try {
    let B = JSON.parse(A),
      Q = ba.strict().safeParse(B);
    if (Q.success) return { isValid: !0 };
    return {
      isValid: !1,
      error:
        `Settings validation failed:
` +
        c10(Q.error, "settings").map((Y) => `- ${Y.path}: ${Y.message}`).join(`
`),
      fullSchema: d10(),
    };
  } catch (B) {
    return {
      isValid: !1,
      error: `Invalid JSON: ${B instanceof Error ? B.message : "Unknown parsing error"}`,
      fullSchema: d10(),
    };
  }
}
import { stat as pq9 } from "fs";
import { stat as iq9, readdir as nq9 } from "fs/promises";
import { EventEmitter as aq9 } from "events";
import * as C6 from "path";
import { stat as Cq9, lstat as NwA, readdir as Uq9, realpath as $q9 } from "node:fs/promises";
import { Readable as wq9 } from "node:stream";
import { resolve as LwA, relative as qq9, join as Eq9, sep as Nq9 } from "node:path";
var fz = { FILE_TYPE: "files", DIR_TYPE: "directories", FILE_DIR_TYPE: "files_directories", EVERYTHING_TYPE: "all" },
  p10 = {
    root: ".",
    fileFilter: (A) => !0,
    directoryFilter: (A) => !0,
    type: fz.FILE_TYPE,
    lstat: !1,
    depth: 2147483648,
    alwaysStat: !1,
    highWaterMark: 4096,
  };
Object.freeze(p10);
var READDIRP_RECURSIVE_ERROR = "READDIRP_RECURSIVE_ERROR",
  Lq9 = new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", READDIRP_RECURSIVE_ERROR]),
  MwA = [fz.DIR_TYPE, fz.EVERYTHING_TYPE, fz.FILE_DIR_TYPE, fz.FILE_TYPE],
  Mq9 = new Set([fz.DIR_TYPE, fz.EVERYTHING_TYPE, fz.FILE_DIR_TYPE]),
  Oq9 = new Set([fz.EVERYTHING_TYPE, fz.FILE_DIR_TYPE, fz.FILE_TYPE]),
  Rq9 = (A) => Lq9.has(A.code),
  Tq9 = process.platform === "win32",
  OwA = (A) => !0,
  RwA = (A) => {
    if (A === void 0) return OwA;
    if (typeof A === "function") return A;
    if (typeof A === "string") {
      let B = A.trim();
      return (Q) => Q.basename === B;
    }
    if (Array.isArray(A)) {
      let B = A.map((Q) => Q.trim());
      return (Q) => B.some((Z) => Q.basename === Z);
    }
    return OwA;
  };
class PwA extends wq9 {
  constructor(A = {}) {
    super({ objectMode: !0, autoDestroy: !0, highWaterMark: A.highWaterMark });
    let B = { ...p10, ...A },
      { root: Q, type: Z } = B;
    ((this._fileFilter = RwA(B.fileFilter)), (this._directoryFilter = RwA(B.directoryFilter)));
    let G = B.lstat ? NwA : Cq9;
    if (Tq9) this._stat = (Y) => G(Y, { bigint: !0 });
    else this._stat = G;
    ((this._maxDepth = B.depth ?? p10.depth),
      (this._wantsDir = Z ? Mq9.has(Z) : !1),
      (this._wantsFile = Z ? Oq9.has(Z) : !1),
      (this._wantsEverything = Z === fz.EVERYTHING_TYPE),
      (this._root = LwA(Q)),
      (this._isDirent = !B.alwaysStat),
      (this._statsProp = this._isDirent ? "dirent" : "stats"),
      (this._rdOptions = { encoding: "utf8", withFileTypes: this._isDirent }),
      (this.parents = [this._exploreDir(Q, 1)]),
      (this.reading = !1),
      (this.parent = void 0));
  }
  async _read(A) {
    if (this.reading) return;
    this.reading = !0;
    try {
      while (!this.destroyed && A > 0) {
        let B = this.parent,
          Q = B && B.files;
        if (Q && Q.length > 0) {
          let { path: Z, depth: G } = B,
            Y = Q.splice(0, A).map((W) => this._formatEntry(W, Z)),
            I = await Promise.all(Y);
          for (let W of I) {
            if (!W) continue;
            if (this.destroyed) return;
            let J = await this._getEntryType(W);
            if (J === "directory" && this._directoryFilter(W)) {
              if (G <= this._maxDepth) this.parents.push(this._exploreDir(W.fullPath, G + 1));
              if (this._wantsDir) (this.push(W), A--);
            } else if ((J === "file" || this._includeAsFile(W)) && this._fileFilter(W)) {
              if (this._wantsFile) (this.push(W), A--);
            }
          }
        } else {
          let Z = this.parents.pop();
          if (!Z) {
            this.push(null);
            break;
          }
          if (((this.parent = await Z), this.destroyed)) return;
        }
      }
    } catch (B) {
      this.destroy(B);
    } finally {
      this.reading = !1;
    }
  }
  async _exploreDir(A, B) {
    let Q;
    try {
      Q = await Uq9(A, this._rdOptions);
    } catch (Z) {
      this._onError(Z);
    }
    return { files: Q, depth: B, path: A };
  }
  async _formatEntry(A, B) {
    let Q,
      Z = this._isDirent ? A.name : A;
    try {
      let G = LwA(Eq9(B, Z));
      ((Q = { path: qq9(this._root, G), fullPath: G, basename: Z }),
        (Q[this._statsProp] = this._isDirent ? A : await this._stat(G)));
    } catch (G) {
      this._onError(G);
      return;
    }
    return Q;
  }
  _onError(A) {
    if (Rq9(A) && !this.destroyed) this.emit("warn", A);
    else this.destroy(A);
  }
  async _getEntryType(A) {
    if (!A && this._statsProp in A) return "";
    let B = A[this._statsProp];
    if (B.isFile()) return "file";
    if (B.isDirectory()) return "directory";
    if (B && B.isSymbolicLink()) {
      let Q = A.fullPath;
      try {
        let Z = await $q9(Q),
          G = await NwA(Z);
        if (G.isFile()) return "file";
        if (G.isDirectory()) {
          let Y = Z.length;
          if (Q.startsWith(Z) && Q.substr(Y, 1) === Nq9) {
            let I = new Error(`Circular symlink detected: "${Q}" points to "${Z}"`);
            return ((I.code = READDIRP_RECURSIVE_ERROR), this._onError(I));
          }
          return "directory";
        }
      } catch (Z) {
        return (this._onError(Z), "");
      }
    }
  }
  _includeAsFile(A) {
    let B = A && A[this._statsProp];
    return B && this._wantsEverything && !B.isDirectory();
  }
}
function jwA(A, B = {}) {
  let Q = B.entryType || B.type;
  if (Q === "both") Q = fz.FILE_DIR_TYPE;
  if (Q) B.type = Q;
  if (!A) throw new Error("readdirp: root argument is required. Usage: readdirp(root, options)");
  else if (typeof A !== "string")
    throw new TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
  else if (Q && !MwA.includes(Q)) throw new Error(`readdirp: Invalid type passed. Use one of ${MwA.join(", ")}`);
  return ((B.root = A), new PwA(B));
}
import { watchFile as Pq9, unwatchFile as SwA, watch as jq9 } from "fs";
import { open as Sq9, stat as kwA, lstat as yq9, realpath as i10 } from "fs/promises";
import * as CZ from "path";
import { type as kq9 } from "os";
var DATA_TYPE = "data",
  s10 = "end",
  _wA = "close",
  EU1 = () => {};
var NU1 = process.platform,
  r10 = NU1 === "win32",
  xq9 = NU1 === "darwin",
  vq9 = NU1 === "linux",
  bq9 = NU1 === "freebsd",
  xwA = kq9() === "OS400",
  c3 = {
    ALL: "all",
    READY: "ready",
    ADD: "add",
    CHANGE: "change",
    ADD_DIR: "addDir",
    UNLINK: "unlink",
    UNLINK_DIR: "unlinkDir",
    RAW: "raw",
    ERROR: "error",
  },
  Iq = c3,
  fq9 = "watch",
  hq9 = { lstat: yq9, stat: kwA },
  og = "listeners",
  $U1 = "errHandlers",
  fa = "rawEmitters",
  gq9 = [og, $U1, fa],
  uq9 = new Set([
    "3dm",
    "3ds",
    "3g2",
    "3gp",
    "7z",
    "a",
    "aac",
    "adp",
    "afdesign",
    "afphoto",
    "afpub",
    "ai",
    "aif",
    "aiff",
    "alz",
    "ape",
    "apk",
    "appimage",
    "ar",
    "arj",
    "asf",
    "au",
    "avi",
    "bak",
    "baml",
    "bh",
    "bin",
    "bk",
    "bmp",
    "btif",
    "bz2",
    "bzip2",
    "cab",
    "caf",
    "cgm",
    "class",
    "cmx",
    "cpio",
    "cr2",
    "cur",
    "dat",
    "dcm",
    "deb",
    "dex",
    "djvu",
    "dll",
    "dmg",
    "dng",
    "doc",
    "docm",
    "docx",
    "dot",
    "dotm",
    "dra",
    "DS_Store",
    "dsk",
    "dts",
    "dtshd",
    "dvb",
    "dwg",
    "dxf",
    "ecelp4800",
    "ecelp7470",
    "ecelp9600",
    "egg",
    "eol",
    "eot",
    "epub",
    "exe",
    "f4v",
    "fbs",
    "fh",
    "fla",
    "flac",
    "flatpak",
    "fli",
    "flv",
    "fpx",
    "fst",
    "fvt",
    "g3",
    "VERSION_STRING",
    "gif",
    "graffle",
    "gz",
    "gzip",
    "h261",
    "h263",
    "h264",
    "icns",
    "ico",
    "ief",
    "img",
    "ipa",
    "iso",
    "jar",
    "jpeg",
    "jpg",
    "jpgv",
    "jpm",
    "jxr",
    "key",
    "ktx",
    "lha",
    "lib",
    "lvp",
    "lz",
    "lzh",
    "lzma",
    "lzo",
    "m3u",
    "m4a",
    "m4v",
    "mar",
    "mdi",
    "mht",
    "mid",
    "midi",
    "mj2",
    "mka",
    "mkv",
    "mmr",
    "mng",
    "mobi",
    "mov",
    "movie",
    "mp3",
    "mp4",
    "mp4a",
    "mpeg",
    "mpg",
    "mpga",
    "mxu",
    "nef",
    "npx",
    "numbers",
    "nupkg",
    "o",
    "odp",
    "ods",
    "odt",
    "oga",
    "ogg",
    "ogv",
    "otf",
    "ott",
    "pages",
    "pbm",
    "pcx",
    "pdb",
    "pdf",
    "pea",
    "pgm",
    "pic",
    "png",
    "pnm",
    "pot",
    "potm",
    "potx",
    "ppa",
    "ppam",
    "ppm",
    "pps",
    "ppsm",
    "ppsx",
    "ppt",
    "pptm",
    "pptx",
    "psd",
    "pya",
    "pyc",
    "pyo",
    "pyv",
    "qt",
    "rar",
    "ras",
    "raw",
    "resources",
    "rgb",
    "rip",
    "rlc",
    "rmf",
    "rmvb",
    "rpm",
    "rtf",
    "rz",
    "s3m",
    "s7z",
    "scpt",
    "sgi",
    "shar",
    "snap",
    "sil",
    "sketch",
    "slk",
    "smv",
    "snk",
    "so",
    "stl",
    "suo",
    "sub",
    "swf",
    "tar",
    "tbz",
    "tbz2",
    "tga",
    "tgz",
    "thmx",
    "tif",
    "tiff",
    "tlz",
    "ttc",
    "ttf",
    "txz",
    "udf",
    "uvh",
    "uvi",
    "uvm",
    "uvp",
    "uvs",
    "uvu",
    "viv",
    "vob",
    "war",
    "wav",
    "wax",
    "wbmp",
    "wdp",
    "weba",
    "webm",
    "webp",
    "whl",
    "wim",
    "wm",
    "wma",
    "wmv",
    "wmx",
    "woff",
    "woff2",
    "wrm",
    "wvx",
    "xbm",
    "xif",
    "xla",
    "xlam",
    "xls",
    "xlsb",
    "xlsm",
    "xlsx",
    "xlt",
    "xltm",
    "xltx",
    "xm",
    "xmind",
    "xpi",
    "xpm",
    "xwd",
    "xz",
    "z",
    "zip",
    "zipx",
  ]),
  mq9 = (A) => uq9.has(CZ.extname(A).slice(1).toLowerCase()),
  a10 = (A, B) => {
    if (A instanceof Set) A.forEach(B);
    else B(A);
  },
  Z61 = (A, B, Q) => {
    let Z = A[B];
    if (!(Z instanceof Set)) A[B] = Z = new Set([Z]);
    Z.add(Q);
  },
  dq9 = (A) => (B) => {
    let Q = A[B];
    if (Q instanceof Set) Q.clear();
    else delete A[B];
  },
  G61 = (A, B, Q) => {
    let Z = A[B];
    if (Z instanceof Set) Z.delete(Q);
    else if (Z === Q) delete A[B];
  },
  vwA = (A) => (A instanceof Set ? A.size === 0 : !A),
  wU1 = new Map();
function ywA(A, B, Q, Z, G) {
  let Y = (I, W) => {
    if ((Q(A), G(I, W, { watchedPath: A }), W && A !== W)) qU1(CZ.resolve(A, W), og, CZ.join(A, W));
  };
  try {
    return jq9(A, { persistent: B.persistent }, Y);
  } catch (I) {
    Z(I);
    return;
  }
}
var qU1 = (A, B, Q, Z, G) => {
    let Y = wU1.get(A);
    if (!Y) return;
    a10(Y[B], (I) => {
      I(Q, Z, G);
    });
  },
  cq9 = (A, B, Q, Z) => {
    let { listener: G, errHandler: Y, rawEmitter: I } = Z,
      W = wU1.get(B),
      J;
    if (!Q.persistent) {
      if (((J = ywA(A, Q, G, Y, I)), !J)) return;
      return J.close.bind(J);
    }
    if (W) (Z61(W, og, G), Z61(W, $U1, Y), Z61(W, fa, I));
    else {
      if (((J = ywA(A, Q, qU1.bind(null, B, og), Y, qU1.bind(null, B, fa))), !J)) return;
      (J.on(Iq.ERROR, async (X) => {
        let F = qU1.bind(null, B, $U1);
        if (W) W.watcherUnusable = !0;
        if (r10 && X.code === "EPERM")
          try {
            (await (await Sq9(A, "r")).close(), F(X));
          } catch (V) {}
        else F(X);
      }),
        (W = { listeners: G, errHandlers: Y, rawEmitters: I, watcher: J }),
        wU1.set(B, W));
    }
    return () => {
      if ((G61(W, og, G), G61(W, $U1, Y), G61(W, fa, I), vwA(W.listeners)))
        (W.watcher.close(), wU1.delete(B), gq9.forEach(dq9(W)), (W.watcher = void 0), Object.freeze(W));
    };
  },
  n10 = new Map(),
  lq9 = (A, B, Q, Z) => {
    let { listener: G, rawEmitter: Y } = Z,
      I = n10.get(B),
      W = I && I.options;
    if (W && (W.persistent < Q.persistent || W.interval > Q.interval)) (SwA(B), (I = void 0));
    if (I) (Z61(I, og, G), Z61(I, fa, Y));
    else
      ((I = {
        listeners: G,
        rawEmitters: Y,
        options: Q,
        watcher: Pq9(B, Q, (J, X) => {
          a10(I.rawEmitters, (V) => {
            V(Iq.CHANGE, B, { curr: J, prev: X });
          });
          let F = J.mtimeMs;
          if (J.size !== X.size || F > X.mtimeMs || F === 0) a10(I.listeners, (V) => V(A, J));
        }),
      }),
        n10.set(B, I));
    return () => {
      if ((G61(I, og, G), G61(I, fa, Y), vwA(I.listeners)))
        (n10.delete(B), SwA(B), (I.options = I.watcher = void 0), Object.freeze(I));
    };
  };
class o10 {
  constructor(A) {
    ((this.fsw = A), (this._boundHandleError = (B) => A._handleError(B)));
  }
  _watchWithNodeFs(A, B) {
    let Q = this.fsw.options,
      Z = CZ.dirname(A),
      G = CZ.basename(A);
    this.fsw._getWatchedDir(Z).add(G);
    let I = CZ.resolve(A),
      W = { persistent: Q.persistent };
    if (!B) B = EU1;
    let J;
    if (Q.usePolling) {
      let X = Q.interval !== Q.binaryInterval;
      ((W.interval = X && mq9(G) ? Q.binaryInterval : Q.interval),
        (J = lq9(A, I, W, { listener: B, rawEmitter: this.fsw._emitRaw })));
    } else J = cq9(A, I, W, { listener: B, errHandler: this._boundHandleError, rawEmitter: this.fsw._emitRaw });
    return J;
  }
  _handleFile(A, B, Q) {
    if (this.fsw.closed) return;
    let Z = CZ.dirname(A),
      G = CZ.basename(A),
      Y = this.fsw._getWatchedDir(Z),
      I = B;
    if (Y.has(G)) return;
    let W = async (X, F) => {
        if (!this.fsw._throttle(fq9, A, 5)) return;
        if (!F || F.mtimeMs === 0)
          try {
            let V = await kwA(A);
            if (this.fsw.closed) return;
            let { atimeMs: K, mtimeMs: H } = V;
            if (!K || K <= H || H !== I.mtimeMs) this.fsw._emit(Iq.CHANGE, A, V);
            if ((xq9 || vq9 || bq9) && I.ino !== V.ino) {
              (this.fsw._closeFile(X), (I = V));
              let z = this._watchWithNodeFs(A, W);
              if (z) this.fsw._addPathCloser(X, z);
            } else I = V;
          } catch (V) {
            this.fsw._remove(Z, G);
          }
        else if (Y.has(G)) {
          let { atimeMs: V, mtimeMs: K } = F;
          if (!V || V <= K || K !== I.mtimeMs) this.fsw._emit(Iq.CHANGE, A, F);
          I = F;
        }
      },
      J = this._watchWithNodeFs(A, W);
    if (!(Q && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(A)) {
      if (!this.fsw._throttle(Iq.ADD, A, 0)) return;
      this.fsw._emit(Iq.ADD, A, B);
    }
    return J;
  }
  async _handleSymlink(A, B, Q, Z) {
    if (this.fsw.closed) return;
    let G = A.fullPath,
      Y = this.fsw._getWatchedDir(B);
    if (!this.fsw.options.followSymlinks) {
      this.fsw._incrReadyCount();
      let I;
      try {
        I = await i10(Q);
      } catch (W) {
        return (this.fsw._emitReady(), !0);
      }
      if (this.fsw.closed) return;
      if (Y.has(Z)) {
        if (this.fsw._symlinkPaths.get(G) !== I)
          (this.fsw._symlinkPaths.set(G, I), this.fsw._emit(Iq.CHANGE, Q, A.stats));
      } else (Y.add(Z), this.fsw._symlinkPaths.set(G, I), this.fsw._emit(Iq.ADD, Q, A.stats));
      return (this.fsw._emitReady(), !0);
    }
    if (this.fsw._symlinkPaths.has(G)) return !0;
    this.fsw._symlinkPaths.set(G, !0);
  }
  _handleRead(A, B, Q, Z, G, Y, I) {
    if (((A = CZ.join(A, "")), (I = this.fsw._throttle("readdir", A, 1000)), !I)) return;
    let W = this.fsw._getWatchedDir(Q.path),
      J = new Set(),
      X = this.fsw._readdirp(A, { fileFilter: (F) => Q.filterPath(F), directoryFilter: (F) => Q.filterDir(F) });
    if (!X) return;
    return (
      X.on(DATA_TYPE, async (F) => {
        if (this.fsw.closed) {
          X = void 0;
          return;
        }
        let V = F.path,
          K = CZ.join(A, V);
        if ((J.add(V), F.stats.isSymbolicLink() && (await this._handleSymlink(F, A, K, V)))) return;
        if (this.fsw.closed) {
          X = void 0;
          return;
        }
        if (V === Z || (!Z && !W.has(V)))
          (this.fsw._incrReadyCount(), (K = CZ.join(G, CZ.relative(G, K))), this._addToNodeFs(K, B, Q, Y + 1));
      }).on(Iq.ERROR, this._boundHandleError),
      new Promise((F, V) => {
        if (!X) return V();
        X.once(s10, () => {
          if (this.fsw.closed) {
            X = void 0;
            return;
          }
          let K = I ? I.clear() : !1;
          if (
            (F(void 0),
            W.getChildren()
              .filter((H) => {
                return H !== A && !J.has(H);
              })
              .forEach((H) => {
                this.fsw._remove(A, H);
              }),
            (X = void 0),
            K)
          )
            this._handleRead(A, !1, Q, Z, G, Y, I);
        });
      })
    );
  }
  async _handleDir(A, B, Q, Z, G, Y, I) {
    let W = this.fsw._getWatchedDir(CZ.dirname(A)),
      J = W.has(CZ.basename(A));
    if (!(Q && this.fsw.options.ignoreInitial) && !G && !J) this.fsw._emit(Iq.ADD_DIR, A, B);
    (W.add(CZ.basename(A)), this.fsw._getWatchedDir(A));
    let X,
      F,
      V = this.fsw.options.depth;
    if ((V == null || Z <= V) && !this.fsw._symlinkPaths.has(I)) {
      if (!G) {
        if ((await this._handleRead(A, Q, Y, G, A, Z, X), this.fsw.closed)) return;
      }
      F = this._watchWithNodeFs(A, (K, H) => {
        if (H && H.mtimeMs === 0) return;
        this._handleRead(K, !1, Y, G, A, Z, X);
      });
    }
    return F;
  }
  async _addToNodeFs(A, B, Q, Z, G) {
    let Y = this.fsw._emitReady;
    if (this.fsw._isIgnored(A) || this.fsw.closed) return (Y(), !1);
    let I = this.fsw._getWatchHelpers(A);
    if (Q) ((I.filterPath = (W) => Q.filterPath(W)), (I.filterDir = (W) => Q.filterDir(W)));
    try {
      let W = await hq9[I.statMethod](I.watchPath);
      if (this.fsw.closed) return;
      if (this.fsw._isIgnored(I.watchPath, W)) return (Y(), !1);
      let J = this.fsw.options.followSymlinks,
        X;
      if (W.isDirectory()) {
        let F = CZ.resolve(A),
          V = J ? await i10(A) : A;
        if (this.fsw.closed) return;
        if (((X = await this._handleDir(I.watchPath, W, B, Z, G, I, V)), this.fsw.closed)) return;
        if (F !== V && V !== void 0) this.fsw._symlinkPaths.set(F, V);
      } else if (W.isSymbolicLink()) {
        let F = J ? await i10(A) : A;
        if (this.fsw.closed) return;
        let V = CZ.dirname(I.watchPath);
        if (
          (this.fsw._getWatchedDir(V).add(I.watchPath),
          this.fsw._emit(Iq.ADD, I.watchPath, W),
          (X = await this._handleDir(V, W, B, Z, A, I, F)),
          this.fsw.closed)
        )
          return;
        if (F !== void 0) this.fsw._symlinkPaths.set(CZ.resolve(A), F);
      } else X = this._handleFile(I.watchPath, W, B);
      if ((Y(), X)) this.fsw._addPathCloser(A, X);
      return !1;
    } catch (W) {
      if (this.fsw._handleError(W)) return (Y(), A);
    }
  }
}
/*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */ var t10 = "/",
  sq9 = "//",
  mwA = ".",
  rq9 = "..",
  oq9 = "string",
  tq9 = /\\/g,
  bwA = /\/\//,
  eq9 = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/,
  AE9 = /^\.[/\\]/;
function LU1(A) {
  return Array.isArray(A) ? A : [A];
}
var e10 = (A) => typeof A === "object" && A !== null && !(A instanceof RegExp);
function BE9(A) {
  if (typeof A === "function") return A;
  if (typeof A === "string") return (B) => A === B;
  if (A instanceof RegExp) return (B) => A.test(B);
  if (typeof A === "object" && A !== null)
    return (B) => {
      if (A.path === B) return !0;
      if (A.recursive) {
        let Q = C6.relative(A.path, B);
        if (!Q) return !1;
        return !Q.startsWith("..") && !C6.isAbsolute(Q);
      }
      return !1;
    };
  return () => !1;
}
function QE9(A) {
  if (typeof A !== "string") throw new Error("string expected");
  ((A = C6.normalize(A)), (A = A.replace(/\\/g, "/")));
  let B = !1;
  if (A.startsWith("//")) B = !0;
  let Q = /\/\//;
  while (A.match(Q)) A = A.replace(Q, "/");
  if (B) A = "/" + A;
  return A;
}
function fwA(A, B, Q) {
  let Z = QE9(B);
  for (let G = 0; G < A.length; G++) {
    let Y = A[G];
    if (Y(Z, Q)) return !0;
  }
  return !1;
}
function ZE9(A, B) {
  if (A == null) throw new TypeError("anymatch: specify first argument");
  let Z = LU1(A).map((G) => BE9(G));
  if (B == null)
    return (G, Y) => {
      return fwA(Z, G, Y);
    };
  return fwA(Z, B);
}
var hwA = (A) => {
    let B = LU1(A).flat();
    if (!B.every((Q) => typeof Q === oq9)) throw new TypeError(`Non-string provided as watch path: ${B}`);
    return B.map(dwA);
  },
  gwA = (A) => {
    let B = A.replace(tq9, t10),
      Q = !1;
    if (B.startsWith(sq9)) Q = !0;
    while (B.match(bwA)) B = B.replace(bwA, t10);
    if (Q) B = t10 + B;
    return B;
  },
  dwA = (A) => gwA(C6.normalize(gwA(A))),
  uwA =
    (A = "") =>
    (B) => {
      if (typeof B === "string") return dwA(C6.isAbsolute(B) ? B : C6.join(A, B));
      else return B;
    },
  GE9 = (A, B) => {
    if (C6.isAbsolute(A)) return A;
    return C6.join(B, A);
  },
  YE9 = Object.freeze(new Set());
class cwA {
  constructor(A, B) {
    ((this.path = A), (this._removeWatcher = B), (this.items = new Set()));
  }
  add(A) {
    let { items: B } = this;
    if (!B) return;
    if (A !== mwA && A !== rq9) B.add(A);
  }
  async remove(A) {
    let { items: B } = this;
    if (!B) return;
    if ((B.delete(A), B.size > 0)) return;
    let Q = this.path;
    try {
      await nq9(Q);
    } catch (Z) {
      if (this._removeWatcher) this._removeWatcher(C6.dirname(Q), C6.basename(Q));
    }
  }
  has(A) {
    let { items: B } = this;
    if (!B) return;
    return B.has(A);
  }
  getChildren() {
    let { items: A } = this;
    if (!A) return [];
    return [...A.values()];
  }
  dispose() {
    (this.items.clear(), (this.path = ""), (this._removeWatcher = EU1), (this.items = YE9), Object.freeze(this));
  }
}
var STAT_TYPE = "stat",
  WE9 = "lstat";
class lwA {
  constructor(A, B, Q) {
    this.fsw = Q;
    let Z = A;
    ((this.path = A = A.replace(AE9, "")),
      (this.watchPath = Z),
      (this.fullWatchPath = C6.resolve(Z)),
      (this.dirParts = []),
      this.dirParts.forEach((G) => {
        if (G.length > 1) G.pop();
      }),
      (this.followSymlinks = B),
      (this.statMethod = B ? STAT_TYPE : WE9));
  }
  entryPath(A) {
    return C6.join(this.watchPath, C6.relative(this.watchPath, A.fullPath));
  }
  filterPath(A) {
    let { stats: B } = A;
    if (B && B.isSymbolicLink()) return this.filterDir(A);
    let Q = this.entryPath(A);
    return this.fsw._isntIgnored(Q, B) && this.fsw._hasReadPermissions(B);
  }
  filterDir(A) {
    return this.fsw._isntIgnored(this.entryPath(A), A.stats);
  }
}
class A00 extends aq9 {
  constructor(A = {}) {
    super();
    ((this.closed = !1),
      (this._closers = new Map()),
      (this._ignoredPaths = new Set()),
      (this._throttled = new Map()),
      (this._streams = new Set()),
      (this._symlinkPaths = new Map()),
      (this._watched = new Map()),
      (this._pendingWrites = new Map()),
      (this._pendingUnlinks = new Map()),
      (this._readyCount = 0),
      (this._readyEmitted = !1));
    let B = A.awaitWriteFinish,
      Q = { stabilityThreshold: 2000, pollInterval: 100 },
      Z = {
        persistent: !0,
        ignoreInitial: !1,
        ignorePermissionErrors: !1,
        interval: 100,
        binaryInterval: 300,
        followSymlinks: !0,
        usePolling: !1,
        atomic: !0,
        ...A,
        ignored: A.ignored ? LU1(A.ignored) : LU1([]),
        awaitWriteFinish: B === !0 ? Q : typeof B === "object" ? { ...Q, ...B } : !1,
      };
    if (xwA) Z.usePolling = !0;
    if (Z.atomic === void 0) Z.atomic = !Z.usePolling;
    let G = process.env.CHOKIDAR_USEPOLLING;
    if (G !== void 0) {
      let W = G.toLowerCase();
      if (W === "false" || W === "0") Z.usePolling = !1;
      else if (W === "true" || W === "1") Z.usePolling = !0;
      else Z.usePolling = !!W;
    }
    let Y = process.env.CHOKIDAR_INTERVAL;
    if (Y) Z.interval = Number.parseInt(Y, 10);
    let I = 0;
    ((this._emitReady = () => {
      if ((I++, I >= this._readyCount))
        ((this._emitReady = EU1), (this._readyEmitted = !0), process.nextTick(() => this.emit(c3.READY)));
    }),
      (this._emitRaw = (...W) => this.emit(c3.RAW, ...W)),
      (this._boundRemove = this._remove.bind(this)),
      (this.options = Z),
      (this._nodeFsHandler = new o10(this)),
      Object.freeze(Z));
  }
  _addIgnoredPath(A) {
    if (e10(A)) {
      for (let B of this._ignoredPaths) if (e10(B) && B.path === A.path && B.recursive === A.recursive) return;
    }
    this._ignoredPaths.add(A);
  }
  _removeIgnoredPath(A) {
    if ((this._ignoredPaths.delete(A), typeof A === "string")) {
      for (let B of this._ignoredPaths) if (e10(B) && B.path === A) this._ignoredPaths.delete(B);
    }
  }
  add(A, B, Q) {
    let { cwd: Z } = this.options;
    ((this.closed = !1), (this._closePromise = void 0));
    let G = hwA(A);
    if (Z)
      G = G.map((Y) => {
        return GE9(Y, Z);
      });
    if (
      (G.forEach((Y) => {
        this._removeIgnoredPath(Y);
      }),
      (this._userIgnored = void 0),
      !this._readyCount)
    )
      this._readyCount = 0;
    return (
      (this._readyCount += G.length),
      Promise.all(
        G.map(async (Y) => {
          let I = await this._nodeFsHandler._addToNodeFs(Y, !Q, void 0, 0, B);
          if (I) this._emitReady();
          return I;
        }),
      ).then((Y) => {
        if (this.closed) return;
        Y.forEach((I) => {
          if (I) this.add(C6.dirname(I), C6.basename(B || I));
        });
      }),
      this
    );
  }
  unwatch(A) {
    if (this.closed) return this;
    let B = hwA(A),
      { cwd: Q } = this.options;
    return (
      B.forEach((Z) => {
        if (!C6.isAbsolute(Z) && !this._closers.has(Z)) {
          if (Q) Z = C6.join(Q, Z);
          Z = C6.resolve(Z);
        }
        if ((this._closePath(Z), this._addIgnoredPath(Z), this._watched.has(Z)))
          this._addIgnoredPath({ path: Z, recursive: !0 });
        this._userIgnored = void 0;
      }),
      this
    );
  }
  close() {
    if (this._closePromise) return this._closePromise;
    ((this.closed = !0), this.removeAllListeners());
    let A = [];
    return (
      this._closers.forEach((B) =>
        B.forEach((Q) => {
          let Z = Q();
          if (Z instanceof Promise) A.push(Z);
        }),
      ),
      this._streams.forEach((B) => B.destroy()),
      (this._userIgnored = void 0),
      (this._readyCount = 0),
      (this._readyEmitted = !1),
      this._watched.forEach((B) => B.dispose()),
      this._closers.clear(),
      this._watched.clear(),
      this._streams.clear(),
      this._symlinkPaths.clear(),
      this._throttled.clear(),
      (this._closePromise = A.length
        ? Promise.all(A).then(() => {
            return;
          })
        : Promise.resolve()),
      this._closePromise
    );
  }
  getWatched() {
    let A = {};
    return (
      this._watched.forEach((B, Q) => {
        let G = (this.options.cwd ? C6.relative(this.options.cwd, Q) : Q) || mwA;
        A[G] = B.getChildren().sort();
      }),
      A
    );
  }
  emitWithAll(A, B) {
    if ((this.emit(A, ...B), A !== c3.ERROR)) this.emit(c3.ALL, A, ...B);
  }
  async _emit(A, B, Q) {
    if (this.closed) return;
    let Z = this.options;
    if (r10) B = C6.normalize(B);
    if (Z.cwd) B = C6.relative(Z.cwd, B);
    let G = [B];
    if (Q != null) G.push(Q);
    let Y = Z.awaitWriteFinish,
      I;
    if (Y && (I = this._pendingWrites.get(B))) return ((I.lastChange = new Date()), this);
    if (Z.atomic) {
      if (A === c3.UNLINK)
        return (
          this._pendingUnlinks.set(B, [A, ...G]),
          setTimeout(
            () => {
              this._pendingUnlinks.forEach((W, J) => {
                (this.emit(...W), this.emit(c3.ALL, ...W), this._pendingUnlinks.delete(J));
              });
            },
            typeof Z.atomic === "number" ? Z.atomic : 100,
          ),
          this
        );
      if (A === c3.ADD && this._pendingUnlinks.has(B)) ((A = c3.CHANGE), this._pendingUnlinks.delete(B));
    }
    if (Y && (A === c3.ADD || A === c3.CHANGE) && this._readyEmitted) {
      let W = (J, X) => {
        if (J) ((A = c3.ERROR), (G[0] = J), this.emitWithAll(A, G));
        else if (X) {
          if (G.length > 1) G[1] = X;
          else G.push(X);
          this.emitWithAll(A, G);
        }
      };
      return (this._awaitWriteFinish(B, Y.stabilityThreshold, A, W), this);
    }
    if (A === c3.CHANGE) {
      if (!this._throttle(c3.CHANGE, B, 50)) return this;
    }
    if (Z.alwaysStat && Q === void 0 && (A === c3.ADD || A === c3.ADD_DIR || A === c3.CHANGE)) {
      let W = Z.cwd ? C6.join(Z.cwd, B) : B,
        J;
      try {
        J = await iq9(W);
      } catch (X) {}
      if (!J || this.closed) return;
      G.push(J);
    }
    return (this.emitWithAll(A, G), this);
  }
  _handleError(A) {
    let B = A && A.code;
    if (
      A &&
      B !== "ENOENT" &&
      B !== "ENOTDIR" &&
      (!this.options.ignorePermissionErrors || (B !== "EPERM" && B !== "EACCES"))
    )
      this.emit(c3.ERROR, A);
    return A || this.closed;
  }
  _throttle(A, B, Q) {
    if (!this._throttled.has(A)) this._throttled.set(A, new Map());
    let Z = this._throttled.get(A);
    if (!Z) throw new Error("invalid throttle");
    let G = Z.get(B);
    if (G) return (G.count++, !1);
    let Y,
      I = () => {
        let J = Z.get(B),
          X = J ? J.count : 0;
        if ((Z.delete(B), clearTimeout(Y), J)) clearTimeout(J.timeoutObject);
        return X;
      };
    Y = setTimeout(I, Q);
    let W = { timeoutObject: Y, clear: I, count: 0 };
    return (Z.set(B, W), W);
  }
  _incrReadyCount() {
    return this._readyCount++;
  }
  _awaitWriteFinish(A, B, Q, Z) {
    let G = this.options.awaitWriteFinish;
    if (typeof G !== "object") return;
    let Y = G.pollInterval,
      I,
      W = A;
    if (this.options.cwd && !C6.isAbsolute(A)) W = C6.join(this.options.cwd, A);
    let J = new Date(),
      X = this._pendingWrites;
    function F(V) {
      pq9(W, (K, H) => {
        if (K || !X.has(A)) {
          if (K && K.code !== "ENOENT") Z(K);
          return;
        }
        let z = Number(new Date());
        if (V && H.size !== V.size) X.get(A).lastChange = z;
        let D = X.get(A);
        if (z - D.lastChange >= B) (X.delete(A), Z(void 0, H));
        else I = setTimeout(F, Y, H);
      });
    }
    if (!X.has(A))
      (X.set(A, {
        lastChange: J,
        cancelWait: () => {
          return (X.delete(A), clearTimeout(I), Q);
        },
      }),
        (I = setTimeout(F, Y)));
  }
  _isIgnored(A, B) {
    if (this.options.atomic && eq9.test(A)) return !0;
    if (!this._userIgnored) {
      let { cwd: Q } = this.options,
        G = (this.options.ignored || []).map(uwA(Q)),
        I = [...[...this._ignoredPaths].map(uwA(Q)), ...G];
      this._userIgnored = ZE9(I, void 0);
    }
    return this._userIgnored(A, B);
  }
  _isntIgnored(A, B) {
    return !this._isIgnored(A, B);
  }
  _getWatchHelpers(A) {
    return new lwA(A, this.options.followSymlinks, this);
  }
  _getWatchedDir(A) {
    let B = C6.resolve(A);
    if (!this._watched.has(B)) this._watched.set(B, new cwA(B, this._boundRemove));
    return this._watched.get(B);
  }
  _hasReadPermissions(A) {
    if (this.options.ignorePermissionErrors) return !0;
    return Boolean(Number(A.mode) & 256);
  }
  _remove(A, B, Q) {
    let Z = C6.join(A, B),
      G = C6.resolve(Z);
    if (((Q = Q != null ? Q : this._watched.has(Z) || this._watched.has(G)), !this._throttle("remove", Z, 100))) return;
    if (!Q && this._watched.size === 1) this.add(A, B, !0);
    this._getWatchedDir(Z)
      .getChildren()
      .forEach((V) => this._remove(Z, V));
    let W = this._getWatchedDir(A),
      J = W.has(B);
    if ((W.remove(B), this._symlinkPaths.has(G))) this._symlinkPaths.delete(G);
    let X = Z;
    if (this.options.cwd) X = C6.relative(this.options.cwd, Z);
    if (this.options.awaitWriteFinish && this._pendingWrites.has(X)) {
      if (this._pendingWrites.get(X).cancelWait() === c3.ADD) return;
    }
    (this._watched.delete(Z), this._watched.delete(G));
    let F = Q ? c3.UNLINK_DIR : c3.UNLINK;
    if (J && !this._isIgnored(Z)) this._emit(F, Z);
    this._closePath(Z);
  }
  _closePath(A) {
    this._closeFile(A);
    let B = C6.dirname(A);
    this._getWatchedDir(B).remove(C6.basename(A));
  }
  _closeFile(A) {
    let B = this._closers.get(A);
    if (!B) return;
    (B.forEach((Q) => Q()), this._closers.delete(A));
  }
  _addPathCloser(A, B) {
    if (!B) return;
    let Q = this._closers.get(A);
    if (!Q) ((Q = []), this._closers.set(A, Q));
    Q.push(B);
  }
  _readdirp(A, B) {
    if (this.closed) return;
    let Q = { type: c3.ALL, alwaysStat: !0, lstat: !0, ...B, depth: 0 },
      Z = jwA(A, Q);
    return (
      this._streams.add(Z),
      Z.once(_wA, () => {
        Z = void 0;
      }),
      Z.once(s10, () => {
        if (Z) (this._streams.delete(Z), (Z = void 0));
      }),
      Z
    );
  }
}
function JE9(A, B = {}) {
  let Q = new A00(B);
  return (Q.add(A), Q);
}
var pwA = { watch: JE9, FSWatcher: A00 };
import * as nwA from "path";
var XE9 = 1000,
  FE9 = 500,
  VE9 = 5000,
  ha = null,
  iwA = !1,
  awA = !1,
  MU1 = new Map(),
  Y61 = new Set();
function KE9() {
  if (iwA || awA) return;
  iwA = !0;
  let A = CE9();
  if (A.length === 0) return;
  (F1(`Watching for changes in setting files ${A.join(", ")}...`),
    (ha = pwA.watch(A, {
      persistent: !0,
      ignoreInitial: !0,
      awaitWriteFinish: { stabilityThreshold: XE9, pollInterval: FE9 },
      ignored: (B) => B.split(nwA.sep).some((Q) => Q === ".git"),
      ignorePermissionErrors: !0,
      usePolling: !1,
      atomic: !0,
    })),
    ha.on("change", UE9),
    ha.on("unlink", $E9));
}
function HE9() {
  if (((awA = !0), ha)) (ha.close(), (ha = null));
  (MU1.clear(), Y61.clear());
}
function zE9(A) {
  return (
    Y61.add(A),
    () => {
      Y61.delete(A);
    }
  );
}
function DE9(A) {
  let B = gT(A);
  if (B) MU1.set(B, Date.now());
}
function CE9() {
  let A = w1();
  return rw
    .map((B) => {
      let Q = gT(B);
      if (!Q) return;
      try {
        if (!A.statSync(Q).isFile()) return;
      } catch {
        return;
      }
      return Q;
    })
    .filter((B) => B !== void 0);
}
function UE9(A) {
  let B = swA(A);
  if (!B) return;
  let Q = MU1.get(A);
  if (Q && Date.now() - Q < VE9) {
    MU1.delete(A);
    return;
  }
  (F1(`Detected change to ${A}`), Y61.forEach((Z) => Z(B)));
}
function $E9(A) {
  let B = swA(A);
  if (!B) return;
  (F1(`Detected deletion of ${A}`), Y61.forEach((Q) => Q(B)));
}
function swA(A) {
  return rw.find((B) => gT(B) === A);
}
var ga = { initialize: KE9, dispose: HE9, subscribe: zE9, markInternalWrite: DE9 };
var W61 = null;
function hT() {
  switch (HB()) {
    case "macos":
      return "/Library/Application Support/ClaudeCode";
    case "windows":
      return "C:\\ProgramData\\ClaudeCode";
    default:
      return "/etc/claude-code";
  }
}
function wE9() {
  return J61(hT(), "managed-settings.json");
}
function qE9(A, B) {
  if (typeof A === "object" && A && "code" in A && A.code === "ENOENT")
    F1(`Broken symlink or missing file encountered for settings.json at path: ${B}`);
  else U1(A instanceof Error ? A : new Error(String(A)), fk);
}
function owA(A) {
  let B = w1();
  if (!B.existsSync(A)) return { settings: null, errors: [] };
  try {
    let { resolvedPath: Q } = cJ(B, A),
      Z = qV(Q);
    if (Z.trim() === "") return { settings: {}, errors: [] };
    let G = d3(Z, !1),
      Y = ba.safeParse(G);
    if (!Y.success) return { settings: null, errors: c10(Y.error, A) };
    return { settings: Y.data, errors: [] };
  } catch (Q) {
    return (qE9(Q, A), { settings: null, errors: [] });
  }
}
function OU1(A) {
  switch (A) {
    case "userSettings":
      return I61(IQ());
    case "policySettings":
    case "projectSettings":
    case "localSettings":
      return I61(WQ());
    case "flagSettings": {
      let B = co1();
      return B ? rwA(I61(B)) : I61(WQ());
    }
  }
}
function gT(A) {
  switch (A) {
    case "userSettings":
      return J61(OU1(A), "settings.json");
    case "projectSettings":
    case "localSettings":
      return J61(OU1(A), X61(A));
    case "policySettings":
      return wE9();
    case "flagSettings":
      return co1();
  }
}
function X61(A) {
  switch (A) {
    case "projectSettings":
      return J61(".claude", "settings.json");
    case "localSettings":
      return J61(".claude", "settings.local.json");
  }
}
function D8(A) {
  let B = gT(A);
  if (!B) return null;
  let { settings: Q } = owA(B);
  return Q;
}
function W4(A, B) {
  if (A === "policySettings" || A === "flagSettings") return { error: null };
  let Q = gT(A);
  if (!Q) return { error: null };
  try {
    let Z = rwA(Q);
    if (!w1().existsSync(Z)) w1().mkdirSync(Z);
    let G = D8(A);
    if (!G && w1().existsSync(Q)) {
      let I = qV(Q),
        W = d3(I);
      if (W === null) return { error: new Error(`Invalid JSON syntax in settings file at ${Q}`) };
      if (W && typeof W === "object") ((G = W), F1(`Using raw settings from ${Q} due to validation failure`));
    }
    let Y = MV1(G || {}, B, (I, W, J, X) => {
      if (W === void 0 && X && typeof J === "string") {
        delete X[J];
        return;
      }
      if (Array.isArray(W)) return W;
      return;
    });
    if ((ga.markInternalWrite(A), WL(Q, JSON.stringify(Y, null, 2)), F61(), A === "localSettings"))
      B61(X61("localSettings"), WQ());
  } catch (Z) {
    let G = new Error(`Failed to read raw settings from ${Q}: ${Z}`);
    return (U1(G, fk), { error: G });
  }
  return { error: null };
}
function EE9(A, B) {
  let Q = [...A, ...B];
  return Array.from(new Set(Q));
}
function F61() {
  W61 = null;
}
function NE9() {
  let A = {},
    B = [],
    Q = new Set(),
    Z = new Set();
  for (let Y of rw) {
    let I = gT(Y);
    if (!I) continue;
    let W = I61(I);
    if (Z.has(W)) continue;
    Z.add(W);
    let { settings: J, errors: X } = owA(I);
    for (let F of X) {
      let V = `${F.file}:${F.path}:${F.message}`;
      if (!Q.has(V)) (Q.add(V), B.push(F));
    }
    if (J)
      A = MV1(A, J, (F, V) => {
        if (Array.isArray(F) && Array.isArray(V)) return EE9(F, V);
        return;
      });
  }
  let G = ["user", "project", "local"];
  return (B.push(...G.flatMap((Y) => QG(Y).errors)), { settings: A, errors: B });
}
function E2() {
  let { settings: A } = A_();
  return A || {};
}
function A_() {
  if (W61 !== null) return W61;
  return ((W61 = NE9()), W61);
}
import { basename as dk9 } from "path";
function B_(A) {
  let B = /^---\s*\n([\s\S]*?)---\s*\n?/,
    Q = A.match(B);
  if (!Q) return { frontmatter: {}, content: A };
  let Z = Q[1] || "",
    G = A.slice(Q[0].length),
    Y = {},
    I = Z.split(`
`);
  for (let W of I) {
    let J = W.indexOf(":");
    if (J > 0) {
      let X = W.slice(0, J).trim(),
        F = W.slice(J + 1).trim();
      if (X) {
        let V = F.replace(/^["']|["']$/g, "");
        Y[X] = V;
      }
    }
  }
  return { frontmatter: Y, content: G };
}
import { dirname as fk9 } from "path";
var eT = A1(V1(), 1);
import { Stream as EO9 } from "node:stream";
var $LA = A1(V1(), 1);
function twA(A, B, { signal: Q, edges: Z } = {}) {
  let G = void 0,
    Y = null,
    I = Z != null && Z.includes("leading"),
    W = Z == null || Z.includes("trailing"),
    J = () => {
      if (Y !== null) (A.apply(G, Y), (G = void 0), (Y = null));
    },
    X = () => {
      if (W) J();
      H();
    },
    F = null,
    V = () => {
      if (F != null) clearTimeout(F);
      F = setTimeout(() => {
        ((F = null), X());
      }, B);
    },
    K = () => {
      if (F !== null) (clearTimeout(F), (F = null));
    },
    H = () => {
      (K(), (G = void 0), (Y = null));
    },
    z = () => {
      (K(), J());
    },
    D = function (...C) {
      if (Q?.aborted) return;
      ((G = this), (Y = C));
      let w = F == null;
      if ((V(), I && w)) J();
    };
  return ((D.schedule = V), (D.cancel = H), (D.flush = z), Q?.addEventListener("abort", H, { once: !0 }), D);
}
function ewA(A, B = 0, Q = {}) {
  if (typeof Q !== "object") Q = {};
  let { signal: Z, leading: G = !1, trailing: Y = !0, maxWait: I } = Q,
    W = Array(2);
  if (G) W[0] = "leading";
  if (Y) W[1] = "trailing";
  let J = void 0,
    X = null,
    F = twA(
      function (...H) {
        ((J = A.apply(this, H)), (X = null));
      },
      B,
      { signal: Z, edges: W },
    ),
    V = function (...H) {
      if (I != null) {
        if (X === null) X = Date.now();
        else if (Date.now() - X >= I) return ((J = A.apply(this, H)), (X = Date.now()), F.cancel(), F.schedule(), J);
      }
      return (F.apply(this, H), J);
    },
    K = () => {
      return (F.flush(), J);
    };
  return ((V.cancel = F.cancel), (V.flush = K), V);
}
function RU1(A, B = 0, Q = {}) {
  if (typeof Q !== "object") Q = {};
  let { leading: Z = !0, trailing: G = !0, signal: Y } = Q;
  return ewA(A, B, { leading: Z, trailing: G, signal: Y, maxWait: B });
}
var LE9 = (A) => {
  let B = new Set();
  do for (let Q of Reflect.ownKeys(A)) B.add([A, Q]);
  while ((A = Reflect.getPrototypeOf(A)) && A !== Object.prototype);
  return B;
};
function B00(A, { include: B, exclude: Q } = {}) {
  let Z = (G) => {
    let Y = (I) => (typeof I === "string" ? G === I : I.test(G));
    if (B) return B.some(Y);
    if (Q) return !Q.some(Y);
    return !0;
  };
  for (let [G, Y] of LE9(A.constructor.prototype)) {
    if (Y === "constructor" || !Z(Y)) continue;
    let I = Reflect.getOwnPropertyDescriptor(G, Y);
    if (I && typeof I.value === "function") A[Y] = A[Y].bind(A);
  }
  return A;
}
import { PassThrough as AqA } from "node:stream";
var BqA = [
    "assert",
    "count",
    "countReset",
    "debug",
    "dir",
    "dirxml",
    "error",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "table",
    "time",
    "timeEnd",
    "timeLog",
    "trace",
    "warn",
  ],
  Q00 = {},
  ME9 = (A) => {
    let B = new AqA(),
      Q = new AqA();
    ((B.write = (G) => {
      A("stdout", G);
    }),
      (Q.write = (G) => {
        A("stderr", G);
      }));
    let Z = new console.Console(B, Q);
    for (let G of BqA) ((Q00[G] = console[G]), (console[G] = Z[G]));
    return () => {
      for (let G of BqA) console[G] = Q00[G];
      Q00 = {};
    };
  },
  QqA = ME9;
var ENA = A1(VqA(), 1);
var z00 = 16;
var n2 = {},
  xU1 = (n2.ALIGN_AUTO = 0),
  z61 = (n2.ALIGN_FLEX_START = 1),
  D61 = (n2.ALIGN_CENTER = 2),
  C61 = (n2.ALIGN_FLEX_END = 3),
  vU1 = (n2.ALIGN_STRETCH = 4),
  KqA = (n2.ALIGN_BASELINE = 5),
  HqA = (n2.ALIGN_SPACE_BETWEEN = 6),
  zqA = (n2.ALIGN_SPACE_AROUND = 7),
  DqA = (n2.DIMENSION_WIDTH = 0),
  CqA = (n2.DIMENSION_HEIGHT = 1),
  UqA = (n2.DIRECTION_INHERIT = 0),
  $qA = (n2.DIRECTION_LTR = 1),
  wqA = (n2.DIRECTION_RTL = 2),
  ma = (n2.DISPLAY_FLEX = 0),
  Z_ = (n2.DISPLAY_NONE = 1),
  FL = (n2.EDGE_LEFT = 0),
  G_ = (n2.EDGE_TOP = 1),
  VL = (n2.EDGE_RIGHT = 2),
  Y_ = (n2.EDGE_BOTTOM = 3),
  bU1 = (n2.EDGE_START = 4),
  fU1 = (n2.EDGE_END = 5),
  U61 = (n2.EDGE_HORIZONTAL = 6),
  $61 = (n2.EDGE_VERTICAL = 7),
  w61 = (n2.EDGE_ALL = 8),
  qqA = (n2.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS = 0),
  EqA = (n2.EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE = 1),
  NqA = (n2.EXPERIMENTAL_FEATURE_FIX_ABSOLUTE_TRAILING_COLUMN_MARGIN = 2),
  hU1 = (n2.FLEX_DIRECTION_COLUMN = 0),
  gU1 = (n2.FLEX_DIRECTION_COLUMN_REVERSE = 1),
  uU1 = (n2.FLEX_DIRECTION_ROW = 2),
  mU1 = (n2.FLEX_DIRECTION_ROW_REVERSE = 3),
  dU1 = (n2.GUTTER_COLUMN = 0),
  cU1 = (n2.GUTTER_ROW = 1),
  lU1 = (n2.GUTTER_ALL = 2),
  pU1 = (n2.JUSTIFY_FLEX_START = 0),
  iU1 = (n2.JUSTIFY_CENTER = 1),
  nU1 = (n2.JUSTIFY_FLEX_END = 2),
  aU1 = (n2.JUSTIFY_SPACE_BETWEEN = 3),
  sU1 = (n2.JUSTIFY_SPACE_AROUND = 4),
  rU1 = (n2.JUSTIFY_SPACE_EVENLY = 5),
  LqA = (n2.LOG_LEVEL_ERROR = 0),
  MqA = (n2.LOG_LEVEL_WARN = 1),
  OqA = (n2.LOG_LEVEL_INFO = 2),
  RqA = (n2.LOG_LEVEL_DEBUG = 3),
  TqA = (n2.LOG_LEVEL_VERBOSE = 4),
  PqA = (n2.LOG_LEVEL_FATAL = 5),
  jqA = (n2.MEASURE_MODE_UNDEFINED = 0),
  SqA = (n2.MEASURE_MODE_EXACTLY = 1),
  yqA = (n2.MEASURE_MODE_AT_MOST = 2),
  kqA = (n2.NODE_TYPE_DEFAULT = 0),
  _qA = (n2.NODE_TYPE_TEXT = 1),
  xqA = (n2.OVERFLOW_VISIBLE = 0),
  vqA = (n2.OVERFLOW_HIDDEN = 1),
  bqA = (n2.OVERFLOW_SCROLL = 2),
  fqA = (n2.POSITION_TYPE_STATIC = 0),
  oU1 = (n2.POSITION_TYPE_RELATIVE = 1),
  tU1 = (n2.POSITION_TYPE_ABSOLUTE = 2),
  hqA = (n2.PRINT_OPTIONS_LAYOUT = 1),
  gqA = (n2.PRINT_OPTIONS_STYLE = 2),
  uqA = (n2.PRINT_OPTIONS_CHILDREN = 4),
  mqA = (n2.UNIT_UNDEFINED = 0),
  dqA = (n2.UNIT_POINT = 1),
  cqA = (n2.UNIT_PERCENT = 2),
  lqA = (n2.UNIT_AUTO = 3),
  eU1 = (n2.WRAP_NO_WRAP = 0),
  A$1 = (n2.WRAP_WRAP = 1),
  B$1 = (n2.WRAP_WRAP_REVERSE = 2);
var pqA = (A) => {
  function B(G, Y, I) {
    let W = G[Y];
    G[Y] = function (...J) {
      return I.call(this, W, ...J);
    };
  }
  for (let G of [
    "setPosition",
    "setMargin",
    "setFlexBasis",
    "setWidth",
    "setHeight",
    "setMinWidth",
    "setMinHeight",
    "setMaxWidth",
    "setMaxHeight",
    "setPadding",
  ]) {
    let Y = {
      [n2.UNIT_POINT]: A.Node.prototype[G],
      [n2.UNIT_PERCENT]: A.Node.prototype[`${G}Percent`],
      [n2.UNIT_AUTO]: A.Node.prototype[`${G}Auto`],
    };
    B(A.Node.prototype, G, function (I, ...W) {
      let J,
        X,
        F = W.pop();
      if (F === "auto") ((J = n2.UNIT_AUTO), (X = void 0));
      else if (typeof F == "object") ((J = F.unit), (X = F.valueOf()));
      else if (
        ((J = typeof F == "string" && F.endsWith("%") ? n2.UNIT_PERCENT : n2.UNIT_POINT),
        (X = parseFloat(F)),
        !Number.isNaN(F) && Number.isNaN(X))
      )
        throw Error(`Invalid value ${F} for ${G}`);
      if (!Y[J]) throw Error(`Failed to execute "${G}": Unsupported unit '${F}'`);
      return X !== void 0 ? Y[J].call(this, ...W, X) : Y[J].call(this, ...W);
    });
  }
  function Q(G) {
    return A.MeasureCallback.implement({
      measure: (...Y) => {
        let { width: I, height: W } = G(...Y);
        return { width: I ?? NaN, height: W ?? NaN };
      },
    });
  }
  function Z(G) {
    return A.DirtiedCallback.implement({ dirtied: G });
  }
  return (
    B(A.Node.prototype, "setMeasureFunc", function (G, Y) {
      return Y ? G.call(this, Q(Y)) : this.unsetMeasureFunc();
    }),
    B(A.Node.prototype, "setDirtiedFunc", function (G, Y) {
      G.call(this, Z(Y));
    }),
    B(A.Config.prototype, "free", function () {
      A.Config.destroy(this);
    }),
    B(A.Node, "create", (G, Y) => (Y ? A.Node.createWithConfig(Y) : A.Node.createDefault())),
    B(A.Node.prototype, "free", function () {
      A.Node.destroy(this);
    }),
    B(A.Node.prototype, "freeRecursive", function () {
      for (let G = 0, Y = this.getChildCount(); G < Y; ++G) this.getChild(0).freeRecursive();
      this.free();
    }),
    B(A.Node.prototype, "calculateLayout", function (G, Y = NaN, I = NaN, W = n2.DIRECTION_LTR) {
      return G.call(this, Y, I, W);
    }),
    { Config: A.Config, Node: A.Node, ...n2 }
  );
};
var pE9 = (() => {
  var A = typeof document != "undefined" && document.currentScript ? document.currentScript.src : void 0;
  return function (B = {}) {
    (J || (J = B !== void 0 ? B : {}),
      (J.ready = new Promise(function (y1, b1) {
        ((X = y1), (F = b1));
      })));
    var Q,
      Z,
      G = Object.assign({}, J),
      Y = "";
    (typeof document != "undefined" && document.currentScript && (Y = document.currentScript.src),
      A && (Y = A),
      (Y = Y.indexOf("blob:") !== 0 ? Y.substr(0, Y.replace(/[?#].*/, "").lastIndexOf("/") + 1) : ""));
    var I = console.log.bind(console),
      W = console.warn.bind(console);
    (Object.assign(J, G), (G = null), typeof WebAssembly != "object" && m("no native wasm support detected"));
    var J,
      X,
      F,
      V,
      K = !1;
    function H(y1, b1, L0) {
      L0 = b1 + L0;
      for (var g0 = ""; !(b1 >= L0); ) {
        var C0 = y1[b1++];
        if (!C0) break;
        if (128 & C0) {
          var v0 = 63 & y1[b1++];
          if ((224 & C0) == 192) g0 += String.fromCharCode(((31 & C0) << 6) | v0);
          else {
            var HA = 63 & y1[b1++];
            65536 >
            (C0 =
              (240 & C0) == 224
                ? ((15 & C0) << 12) | (v0 << 6) | HA
                : ((7 & C0) << 18) | (v0 << 12) | (HA << 6) | (63 & y1[b1++]))
              ? (g0 += String.fromCharCode(C0))
              : ((C0 -= 65536), (g0 += String.fromCharCode(55296 | (C0 >> 10), 56320 | (1023 & C0))));
          }
        } else g0 += String.fromCharCode(C0);
      }
      return g0;
    }
    function z() {
      var y1 = V.buffer;
      ((J.HEAP8 = D = new Int8Array(y1)),
        (J.HEAP16 = w = new Int16Array(y1)),
        (J.HEAP32 = L = new Int32Array(y1)),
        (J.HEAPU8 = C = new Uint8Array(y1)),
        (J.HEAPU16 = E = new Uint16Array(y1)),
        (J.HEAPU32 = O = new Uint32Array(y1)),
        (J.HEAPF32 = R = new Float32Array(y1)),
        (J.HEAPF64 = P = new Float64Array(y1)));
    }
    var D,
      C,
      w,
      E,
      L,
      O,
      R,
      P,
      _,
      b = [],
      S = [],
      d = [],
      u = 0,
      o = null;
    function m(y1) {
      throw (
        W((y1 = "Aborted(" + y1 + ")")),
        (K = !0),
        F((y1 = new WebAssembly.RuntimeError(y1 + ". Build with -sASSERTIONS for more info."))),
        y1
      );
    }
    function j() {
      return Q.startsWith("data:application/octet-stream;base64,");
    }
    function r() {
      try {
        throw "both async and sync fetching of the wasm failed";
      } catch (y1) {
        m(y1);
      }
    }
    function Q1(y1) {
      for (; 0 < y1.length; ) y1.shift()(J);
    }
    function J1(y1) {
      if (y1 === void 0) return "_unknown";
      var b1 = (y1 = y1.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return 48 <= b1 && 57 >= b1 ? "_" + y1 : y1;
    }
    function R1(y1, b1) {
      return (
        (y1 = J1(y1)),
        function () {
          return b1.apply(this, arguments);
        }
      );
    }
    ((Q = "yoga.wasm"), j() || (Q = Y + Q));
    var s1 = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }],
      Z0 = [];
    function _0(y1) {
      var b1 = Error,
        L0 = R1(y1, function (g0) {
          ((this.name = y1),
            (this.message = g0),
            (g0 = Error(g0).stack) !== void 0 &&
              (this.stack =
                this.toString() +
                `
` +
                g0.replace(/^Error(:[^\n]*)?\n/, "")));
        });
      return (
        (L0.prototype = Object.create(b1.prototype)),
        (L0.prototype.constructor = L0),
        (L0.prototype.toString = function () {
          return this.message === void 0 ? this.name : this.name + ": " + this.message;
        }),
        L0
      );
    }
    var D0 = void 0;
    function C1(y1) {
      throw new D0(y1);
    }
    var g1 = (y1) => (y1 || C1("Cannot use deleted val. handle = " + y1), s1[y1].value),
      v1 = (y1) => {
        switch (y1) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            var b1 = Z0.length ? Z0.pop() : s1.length;
            return ((s1[b1] = { fa: 1, value: y1 }), b1);
        }
      },
      o1 = void 0,
      K0 = void 0;
    function U0(y1) {
      for (var b1 = ""; C[y1]; ) b1 += K0[C[y1++]];
      return b1;
    }
    var B1 = [];
    function I1() {
      for (; B1.length; ) {
        var y1 = B1.pop();
        ((y1.L.Z = !1), y1.delete());
      }
    }
    var H1 = void 0,
      h1 = {};
    function x1(y1, b1) {
      for (b1 === void 0 && C1("ptr should not be undefined"); y1.P; ) ((b1 = y1.aa(b1)), (y1 = y1.P));
      return b1;
    }
    var _1 = {};
    function p1(y1) {
      var b1 = U0((y1 = E4(y1)));
      return (tB(y1), b1);
    }
    function r1(y1, b1) {
      var L0 = _1[y1];
      return (L0 === void 0 && C1(b1 + " has unknown type " + p1(y1)), L0);
    }
    function J0() {}
    var W0 = !1;
    function z1(y1) {
      (--y1.count.value, y1.count.value === 0 && (y1.S ? y1.T.V(y1.S) : y1.O.M.V(y1.N)));
    }
    var l1 = {},
      j0 = void 0;
    function q0(y1) {
      throw new j0(y1);
    }
    function ZA(y1, b1) {
      return (
        (b1.O && b1.N) || q0("makeClassHandle requires ptr and ptrType"),
        !!b1.T != !!b1.S && q0("Both smartPtrType and smartPtr must be specified"),
        (b1.count = { value: 1 }),
        IA(Object.create(y1, { L: { value: b1 } }))
      );
    }
    function IA(y1) {
      return typeof FinalizationRegistry == "undefined"
        ? ((IA = (b1) => b1), y1)
        : ((W0 = new FinalizationRegistry((b1) => {
            z1(b1.L);
          })),
          (IA = (b1) => {
            var L0 = b1.L;
            return (L0.S && W0.register(b1, { L: L0 }, b1), b1);
          }),
          (J0 = (b1) => {
            W0.unregister(b1);
          }),
          IA(y1));
    }
    var qA = {};
    function SA(y1) {
      for (; y1.length; ) {
        var b1 = y1.pop();
        y1.pop()(b1);
      }
    }
    function dA(y1) {
      return this.fromWireType(L[y1 >> 2]);
    }
    var T2 = {},
      W6 = {};
    function CA(y1, b1, L0) {
      function g0(e0) {
        (e0 = L0(e0)).length !== y1.length && q0("Mismatched type converter count");
        for (var KA = 0; KA < y1.length; ++KA) V2(y1[KA], e0[KA]);
      }
      y1.forEach(function (e0) {
        W6[e0] = b1;
      });
      var C0 = Array(b1.length),
        v0 = [],
        HA = 0;
      (b1.forEach((e0, KA) => {
        _1.hasOwnProperty(e0)
          ? (C0[KA] = _1[e0])
          : (v0.push(e0),
            T2.hasOwnProperty(e0) || (T2[e0] = []),
            T2[e0].push(() => {
              ((C0[KA] = _1[e0]), ++HA === v0.length && g0(C0));
            }));
      }),
        v0.length === 0 && g0(C0));
    }
    function rA(y1) {
      switch (y1) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw TypeError("Unknown type size: " + y1);
      }
    }
    function V2(y1, b1, L0 = {}) {
      if (!("argPackAdvance" in b1)) throw TypeError("registerType registeredInstance requires argPackAdvance");
      var g0 = b1.name;
      if ((y1 || C1('type "' + g0 + '" must have a positive integer typeid pointer'), _1.hasOwnProperty(y1))) {
        if (L0.ta) return;
        C1("Cannot register type '" + g0 + "' twice");
      }
      ((_1[y1] = b1), delete W6[y1], T2.hasOwnProperty(y1) && ((b1 = T2[y1]), delete T2[y1], b1.forEach((C0) => C0())));
    }
    function W2(y1) {
      C1(y1.L.O.M.name + " instance already deleted");
    }
    function iA() {}
    function $B(y1, b1, L0) {
      if (y1[b1].R === void 0) {
        var g0 = y1[b1];
        ((y1[b1] = function () {
          return (
            y1[b1].R.hasOwnProperty(arguments.length) ||
              C1(
                "Function '" +
                  L0 +
                  "' called with an invalid number of arguments (" +
                  arguments.length +
                  ") - expects one of (" +
                  y1[b1].R +
                  ")!",
              ),
            y1[b1].R[arguments.length].apply(this, arguments)
          );
        }),
          (y1[b1].R = []),
          (y1[b1].R[g0.Y] = g0));
      }
    }
    function TB(y1, b1, L0, g0, C0, v0, HA, e0) {
      ((this.name = y1),
        (this.constructor = b1),
        (this.W = L0),
        (this.V = g0),
        (this.P = C0),
        (this.oa = v0),
        (this.aa = HA),
        (this.ma = e0),
        (this.ia = []));
    }
    function K4(y1, b1, L0) {
      for (; b1 !== L0; )
        (b1.aa || C1("Expected null or instance of " + L0.name + ", got an instance of " + b1.name),
          (y1 = b1.aa(y1)),
          (b1 = b1.P));
      return y1;
    }
    function E5(y1, b1) {
      return b1 === null
        ? (this.da && C1("null is not a valid " + this.name), 0)
        : (b1.L || C1('Cannot pass "' + Y7(b1) + '" as a ' + this.name),
          b1.L.N || C1("Cannot pass deleted object as a pointer of type " + this.name),
          K4(b1.L.N, b1.L.O.M, this.M));
    }
    function h4(y1, b1) {
      if (b1 === null) {
        if ((this.da && C1("null is not a valid " + this.name), this.ca)) {
          var L0 = this.ea();
          return (y1 !== null && y1.push(this.V, L0), L0);
        }
        return 0;
      }
      if (
        (b1.L || C1('Cannot pass "' + Y7(b1) + '" as a ' + this.name),
        b1.L.N || C1("Cannot pass deleted object as a pointer of type " + this.name),
        !this.ba &&
          b1.L.O.ba &&
          C1(
            "Cannot convert argument of type " +
              (b1.L.T ? b1.L.T.name : b1.L.O.name) +
              " to parameter type " +
              this.name,
          ),
        (L0 = K4(b1.L.N, b1.L.O.M, this.M)),
        this.ca)
      )
        switch ((b1.L.S === void 0 && C1("Passing raw pointer to smart pointer is illegal"), this.Aa)) {
          case 0:
            b1.L.T === this
              ? (L0 = b1.L.S)
              : C1(
                  "Cannot convert argument of type " +
                    (b1.L.T ? b1.L.T.name : b1.L.O.name) +
                    " to parameter type " +
                    this.name,
                );
            break;
          case 1:
            L0 = b1.L.S;
            break;
          case 2:
            if (b1.L.T === this) L0 = b1.L.S;
            else {
              var g0 = b1.clone();
              ((L0 = this.wa(
                L0,
                v1(function () {
                  g0.delete();
                }),
              )),
                y1 !== null && y1.push(this.V, L0));
            }
            break;
          default:
            C1("Unsupporting sharing policy");
        }
      return L0;
    }
    function WB(y1, b1) {
      return b1 === null
        ? (this.da && C1("null is not a valid " + this.name), 0)
        : (b1.L || C1('Cannot pass "' + Y7(b1) + '" as a ' + this.name),
          b1.L.N || C1("Cannot pass deleted object as a pointer of type " + this.name),
          b1.L.O.ba && C1("Cannot convert argument of type " + b1.L.O.name + " to parameter type " + this.name),
          K4(b1.L.N, b1.L.O.M, this.M));
    }
    function _4(y1, b1, L0, g0) {
      ((this.name = y1),
        (this.M = b1),
        (this.da = L0),
        (this.ba = g0),
        (this.ca = !1),
        (this.V = this.wa = this.ea = this.ja = this.Aa = this.va = void 0),
        b1.P !== void 0 ? (this.toWireType = h4) : ((this.toWireType = g0 ? E5 : WB), (this.U = null)));
    }
    var j3 = [];
    function G7(y1) {
      var b1 = j3[y1];
      return (b1 || (y1 >= j3.length && (j3.length = y1 + 1), (j3[y1] = b1 = _.get(y1))), b1);
    }
    function g4(y1, b1) {
      var L0,
        g0,
        C0 = (y1 = U0(y1)).includes("j")
          ? ((L0 = y1),
            (g0 = []),
            function () {
              if (((g0.length = 0), Object.assign(g0, arguments), L0.includes("j"))) {
                var v0 = J["dynCall_" + L0];
                v0 = g0 && g0.length ? v0.apply(null, [b1].concat(g0)) : v0.call(null, b1);
              } else v0 = G7(b1).apply(null, g0);
              return v0;
            })
          : G7(b1);
      return (typeof C0 != "function" && C1("unknown function pointer with signature " + y1 + ": " + b1), C0);
    }
    var m5 = void 0;
    function A3(y1, b1) {
      var L0 = [],
        g0 = {};
      throw (
        b1.forEach(function C0(v0) {
          g0[v0] || _1[v0] || (W6[v0] ? W6[v0].forEach(C0) : (L0.push(v0), (g0[v0] = !0)));
        }),
        new m5(y1 + ": " + L0.map(p1).join([", "]))
      );
    }
    function P8(y1, b1, L0, g0, C0) {
      var v0 = b1.length;
      2 > v0 && C1("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var HA = b1[1] !== null && L0 !== null,
        e0 = !1;
      for (L0 = 1; L0 < b1.length; ++L0)
        if (b1[L0] !== null && b1[L0].U === void 0) {
          e0 = !0;
          break;
        }
      var KA = b1[0].name !== "void",
        BA = v0 - 2,
        UA = Array(BA),
        t2 = [],
        P2 = [];
      return function () {
        if (
          (arguments.length !== BA &&
            C1("function " + y1 + " called with " + arguments.length + " arguments, expected " + BA + " args!"),
          (P2.length = 0),
          (t2.length = HA ? 2 : 1),
          (t2[0] = C0),
          HA)
        ) {
          var y2 = b1[1].toWireType(P2, this);
          t2[1] = y2;
        }
        for (var q1 = 0; q1 < BA; ++q1) ((UA[q1] = b1[q1 + 2].toWireType(P2, arguments[q1])), t2.push(UA[q1]));
        if (((q1 = g0.apply(null, t2)), e0)) SA(P2);
        else
          for (var A0 = HA ? 1 : 2; A0 < b1.length; A0++) {
            var u1 = A0 === 1 ? y2 : UA[A0 - 2];
            b1[A0].U !== null && b1[A0].U(u1);
          }
        return KA ? b1[0].fromWireType(q1) : void 0;
      };
    }
    function YZ(y1, b1) {
      for (var L0 = [], g0 = 0; g0 < y1; g0++) L0.push(O[(b1 + 4 * g0) >> 2]);
      return L0;
    }
    function H4(y1) {
      4 < y1 && --s1[y1].fa == 0 && ((s1[y1] = void 0), Z0.push(y1));
    }
    function Y7(y1) {
      if (y1 === null) return "null";
      var b1 = typeof y1;
      return b1 === "object" || b1 === "array" || b1 === "function" ? y1.toString() : "" + y1;
    }
    function j8(y1, b1) {
      for (var L0 = "", g0 = 0; !(g0 >= b1 / 2); ++g0) {
        var C0 = w[(y1 + 2 * g0) >> 1];
        if (C0 == 0) break;
        L0 += String.fromCharCode(C0);
      }
      return L0;
    }
    function IZ(y1, b1, L0) {
      if ((L0 === void 0 && (L0 = 2147483647), 2 > L0)) return 0;
      L0 -= 2;
      var g0 = b1;
      L0 = L0 < 2 * y1.length ? L0 / 2 : y1.length;
      for (var C0 = 0; C0 < L0; ++C0) ((w[b1 >> 1] = y1.charCodeAt(C0)), (b1 += 2));
      return ((w[b1 >> 1] = 0), b1 - g0);
    }
    function X0(y1) {
      return 2 * y1.length;
    }
    function k1(y1, b1) {
      for (var L0 = 0, g0 = ""; !(L0 >= b1 / 4); ) {
        var C0 = L[(y1 + 4 * L0) >> 2];
        if (C0 == 0) break;
        (++L0,
          65536 <= C0
            ? ((C0 -= 65536), (g0 += String.fromCharCode(55296 | (C0 >> 10), 56320 | (1023 & C0))))
            : (g0 += String.fromCharCode(C0)));
      }
      return g0;
    }
    function Y0(y1, b1, L0) {
      if ((L0 === void 0 && (L0 = 2147483647), 4 > L0)) return 0;
      var g0 = b1;
      L0 = g0 + L0 - 4;
      for (var C0 = 0; C0 < y1.length; ++C0) {
        var v0 = y1.charCodeAt(C0);
        if (
          (55296 <= v0 && 57343 >= v0 && (v0 = (65536 + ((1023 & v0) << 10)) | (1023 & y1.charCodeAt(++C0))),
          (L[b1 >> 2] = v0),
          (b1 += 4) + 4 > L0)
        )
          break;
      }
      return ((L[b1 >> 2] = 0), b1 - g0);
    }
    function F0(y1) {
      for (var b1 = 0, L0 = 0; L0 < y1.length; ++L0) {
        var g0 = y1.charCodeAt(L0);
        (55296 <= g0 && 57343 >= g0 && ++L0, (b1 += 4));
      }
      return b1;
    }
    var R0 = {};
    function XA(y1) {
      var b1 = R0[y1];
      return b1 === void 0 ? U0(y1) : b1;
    }
    var N2 = [],
      s2 = [],
      UQ = [null, [], []];
    ((D0 = J.BindingError = _0("BindingError")),
      (J.count_emval_handles = function () {
        for (var y1 = 0, b1 = 5; b1 < s1.length; ++b1) s1[b1] !== void 0 && ++y1;
        return y1;
      }),
      (J.get_first_emval = function () {
        for (var y1 = 5; y1 < s1.length; ++y1) if (s1[y1] !== void 0) return s1[y1];
        return null;
      }),
      (o1 = J.PureVirtualError = _0("PureVirtualError")));
    for (var u9 = Array(256), MQ = 0; 256 > MQ; ++MQ) u9[MQ] = String.fromCharCode(MQ);
    ((K0 = u9),
      (J.getInheritedInstanceCount = function () {
        return Object.keys(h1).length;
      }),
      (J.getLiveInheritedInstances = function () {
        var y1,
          b1 = [];
        for (y1 in h1) h1.hasOwnProperty(y1) && b1.push(h1[y1]);
        return b1;
      }),
      (J.flushPendingDeletes = I1),
      (J.setDelayFunction = function (y1) {
        ((H1 = y1), B1.length && H1 && H1(I1));
      }),
      (j0 = J.InternalError = _0("InternalError")),
      (iA.prototype.isAliasOf = function (y1) {
        if (!(this instanceof iA && y1 instanceof iA)) return !1;
        var b1 = this.L.O.M,
          L0 = this.L.N,
          g0 = y1.L.O.M;
        for (y1 = y1.L.N; b1.P; ) ((L0 = b1.aa(L0)), (b1 = b1.P));
        for (; g0.P; ) ((y1 = g0.aa(y1)), (g0 = g0.P));
        return b1 === g0 && L0 === y1;
      }),
      (iA.prototype.clone = function () {
        if ((this.L.N || W2(this), this.L.$)) return ((this.L.count.value += 1), this);
        var y1 = IA,
          b1 = Object,
          L0 = b1.create,
          g0 = Object.getPrototypeOf(this),
          C0 = this.L;
        return (
          (y1 = y1(
            L0.call(b1, g0, {
              L: { value: { count: C0.count, Z: C0.Z, $: C0.$, N: C0.N, O: C0.O, S: C0.S, T: C0.T } },
            }),
          )),
          (y1.L.count.value += 1),
          (y1.L.Z = !1),
          y1
        );
      }),
      (iA.prototype.delete = function () {
        (this.L.N || W2(this),
          this.L.Z && !this.L.$ && C1("Object already scheduled for deletion"),
          J0(this),
          z1(this.L),
          this.L.$ || ((this.L.S = void 0), (this.L.N = void 0)));
      }),
      (iA.prototype.isDeleted = function () {
        return !this.L.N;
      }),
      (iA.prototype.deleteLater = function () {
        return (
          this.L.N || W2(this),
          this.L.Z && !this.L.$ && C1("Object already scheduled for deletion"),
          B1.push(this),
          B1.length === 1 && H1 && H1(I1),
          (this.L.Z = !0),
          this
        );
      }),
      (_4.prototype.pa = function (y1) {
        return (this.ja && (y1 = this.ja(y1)), y1);
      }),
      (_4.prototype.ga = function (y1) {
        this.V && this.V(y1);
      }),
      (_4.prototype.argPackAdvance = 8),
      (_4.prototype.readValueFromPointer = dA),
      (_4.prototype.deleteObject = function (y1) {
        y1 !== null && y1.delete();
      }),
      (_4.prototype.fromWireType = function (y1) {
        function b1() {
          return this.ca ? ZA(this.M.W, { O: this.va, N: g0, T: this, S: y1 }) : ZA(this.M.W, { O: this, N: y1 });
        }
        var L0,
          g0 = this.pa(y1);
        if (!g0) return (this.ga(y1), null);
        var C0 = h1[x1(this.M, g0)];
        if (C0 !== void 0)
          return C0.L.count.value === 0
            ? ((C0.L.N = g0), (C0.L.S = y1), C0.clone())
            : ((C0 = C0.clone()), this.ga(y1), C0);
        if (!(C0 = l1[(C0 = this.M.oa(g0))])) return b1.call(this);
        C0 = this.ba ? C0.ka : C0.pointerType;
        var v0 = (function HA(e0, KA, BA) {
          return KA === BA ? e0 : BA.P === void 0 ? null : (e0 = HA(e0, KA, BA.P)) === null ? null : BA.ma(e0);
        })(g0, this.M, C0.M);
        return v0 === null
          ? b1.call(this)
          : this.ca
            ? ZA(C0.M.W, { O: C0, N: v0, T: this, S: y1 })
            : ZA(C0.M.W, { O: C0, N: v0 });
      }),
      (m5 = J.UnboundTypeError = _0("UnboundTypeError")));
    var Z4 = {
      q: function (y1, b1, L0) {
        ((y1 = U0(y1)), (b1 = r1(b1, "wrapper")), (L0 = g1(L0)));
        var g0 = [].slice,
          C0 = b1.M,
          v0 = C0.W,
          HA = C0.P.W,
          e0 = C0.P.constructor;
        for (var KA in ((y1 = R1(y1, function () {
          (C0.P.ia.forEach(
            function (BA) {
              if (this[BA] === HA[BA])
                throw new o1("Pure virtual function " + BA + " must be implemented in JavaScript");
            }.bind(this),
          ),
            Object.defineProperty(this, "__parent", { value: v0 }),
            this.__construct.apply(this, g0.call(arguments)));
        })),
        (v0.__construct = function () {
          this === v0 && C1("Pass correct 'this' to __construct");
          var BA = e0.implement.apply(void 0, [this].concat(g0.call(arguments)));
          J0(BA);
          var UA = BA.L;
          (BA.notifyOnDestruction(),
            (UA.$ = !0),
            Object.defineProperties(this, { L: { value: UA } }),
            IA(this),
            (BA = x1(C0, (BA = UA.N))),
            h1.hasOwnProperty(BA) ? C1("Tried to register registered instance: " + BA) : (h1[BA] = this));
        }),
        (v0.__destruct = function () {
          (this === v0 && C1("Pass correct 'this' to __destruct"), J0(this));
          var BA = this.L.N;
          ((BA = x1(C0, BA)),
            h1.hasOwnProperty(BA) ? delete h1[BA] : C1("Tried to unregister unregistered instance: " + BA));
        }),
        (y1.prototype = Object.create(v0)),
        L0))
          y1.prototype[KA] = L0[KA];
        return v1(y1);
      },
      l: function (y1) {
        var b1 = qA[y1];
        delete qA[y1];
        var { ea: L0, V: g0, ha: C0 } = b1;
        CA([y1], C0.map((v0) => v0.sa).concat(C0.map((v0) => v0.ya)), (v0) => {
          var HA = {};
          return (
            C0.forEach((e0, KA) => {
              var BA = v0[KA],
                UA = e0.qa,
                t2 = e0.ra,
                P2 = v0[KA + C0.length],
                y2 = e0.xa,
                q1 = e0.za;
              HA[e0.na] = {
                read: (A0) => BA.fromWireType(UA(t2, A0)),
                write: (A0, u1) => {
                  var w0 = [];
                  (y2(q1, A0, P2.toWireType(w0, u1)), SA(w0));
                },
              };
            }),
            [
              {
                name: b1.name,
                fromWireType: function (e0) {
                  var KA,
                    BA = {};
                  for (KA in HA) BA[KA] = HA[KA].read(e0);
                  return (g0(e0), BA);
                },
                toWireType: function (e0, KA) {
                  for (var BA in HA) if (!(BA in KA)) throw TypeError('Missing field:  "' + BA + '"');
                  var UA = L0();
                  for (BA in HA) HA[BA].write(UA, KA[BA]);
                  return (e0 !== null && e0.push(g0, UA), UA);
                },
                argPackAdvance: 8,
                readValueFromPointer: dA,
                U: g0,
              },
            ]
          );
        });
      },
      v: function () {},
      B: function (y1, b1, L0, g0, C0) {
        var v0 = rA(L0);
        V2(y1, {
          name: (b1 = U0(b1)),
          fromWireType: function (HA) {
            return !!HA;
          },
          toWireType: function (HA, e0) {
            return e0 ? g0 : C0;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (HA) {
            if (L0 === 1) var e0 = D;
            else if (L0 === 2) e0 = w;
            else if (L0 === 4) e0 = L;
            else throw TypeError("Unknown boolean type size: " + b1);
            return this.fromWireType(e0[HA >> v0]);
          },
          U: null,
        });
      },
      h: function (y1, b1, L0, g0, C0, v0, HA, e0, KA, BA, UA, t2, P2) {
        ((UA = U0(UA)), (v0 = g4(C0, v0)), e0 && (e0 = g4(HA, e0)), BA && (BA = g4(KA, BA)), (P2 = g4(t2, P2)));
        var y2,
          q1 = J1(UA);
        ((y2 = function () {
          A3("Cannot construct " + UA + " due to unbound types", [g0]);
        }),
          J.hasOwnProperty(q1)
            ? (C1("Cannot register public name '" + q1 + "' twice"),
              $B(J, q1, q1),
              J.hasOwnProperty(void 0) &&
                C1("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),
              (J[q1].R[void 0] = y2))
            : (J[q1] = y2),
          CA([y1, b1, L0], g0 ? [g0] : [], function (A0) {
            if (((A0 = A0[0]), g0))
              var u1,
                w0 = A0.M,
                T0 = w0.W;
            else T0 = iA.prototype;
            A0 = R1(q1, function () {
              if (Object.getPrototypeOf(this) !== M0) throw new D0("Use 'new' to construct " + UA);
              if (GA.X === void 0) throw new D0(UA + " has no accessible constructor");
              var FA = GA.X[arguments.length];
              if (FA === void 0)
                throw new D0(
                  "Tried to invoke ctor of " +
                    UA +
                    " with invalid number of parameters (" +
                    arguments.length +
                    ") - expected (" +
                    Object.keys(GA.X).toString() +
                    ") parameters instead!",
                );
              return FA.apply(this, arguments);
            });
            var M0 = Object.create(T0, { constructor: { value: A0 } });
            A0.prototype = M0;
            var GA = new TB(UA, A0, M0, P2, w0, v0, e0, BA);
            ((w0 = new _4(UA, GA, !0, !1)), (T0 = new _4(UA + "*", GA, !1, !1)));
            var EA = new _4(UA + " const*", GA, !1, !0);
            return (
              (l1[y1] = { pointerType: T0, ka: EA }),
              (u1 = A0),
              J.hasOwnProperty(q1) || q0("Replacing nonexistant public symbol"),
              (J[q1] = u1),
              (J[q1].Y = void 0),
              [w0, T0, EA]
            );
          }));
      },
      d: function (y1, b1, L0, g0, C0, v0, HA) {
        var e0 = YZ(L0, g0);
        ((b1 = U0(b1)),
          (v0 = g4(C0, v0)),
          CA([], [y1], function (KA) {
            function BA() {
              A3("Cannot call " + UA + " due to unbound types", e0);
            }
            var UA = (KA = KA[0]).name + "." + b1;
            b1.startsWith("@@") && (b1 = Symbol[b1.substring(2)]);
            var t2 = KA.M.constructor;
            return (
              t2[b1] === void 0 ? ((BA.Y = L0 - 1), (t2[b1] = BA)) : ($B(t2, b1, UA), (t2[b1].R[L0 - 1] = BA)),
              CA([], e0, function (P2) {
                return (
                  (P2 = P8(UA, [P2[0], null].concat(P2.slice(1)), null, v0, HA)),
                  t2[b1].R === void 0 ? ((P2.Y = L0 - 1), (t2[b1] = P2)) : (t2[b1].R[L0 - 1] = P2),
                  []
                );
              }),
              []
            );
          }));
      },
      p: function (y1, b1, L0, g0, C0, v0) {
        0 < b1 || m();
        var HA = YZ(b1, L0);
        ((C0 = g4(g0, C0)),
          CA([], [y1], function (e0) {
            var KA = "constructor " + (e0 = e0[0]).name;
            if ((e0.M.X === void 0 && (e0.M.X = []), e0.M.X[b1 - 1] !== void 0))
              throw new D0(
                "Cannot register multiple constructors with identical number of parameters (" +
                  (b1 - 1) +
                  ") for class '" +
                  e0.name +
                  "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
              );
            return (
              (e0.M.X[b1 - 1] = () => {
                A3("Cannot construct " + e0.name + " due to unbound types", HA);
              }),
              CA([], HA, function (BA) {
                return (BA.splice(1, 0, null), (e0.M.X[b1 - 1] = P8(KA, BA, null, C0, v0)), []);
              }),
              []
            );
          }));
      },
      a: function (y1, b1, L0, g0, C0, v0, HA, e0) {
        var KA = YZ(L0, g0);
        ((b1 = U0(b1)),
          (v0 = g4(C0, v0)),
          CA([], [y1], function (BA) {
            function UA() {
              A3("Cannot call " + t2 + " due to unbound types", KA);
            }
            var t2 = (BA = BA[0]).name + "." + b1;
            (b1.startsWith("@@") && (b1 = Symbol[b1.substring(2)]), e0 && BA.M.ia.push(b1));
            var P2 = BA.M.W,
              y2 = P2[b1];
            return (
              y2 === void 0 || (y2.R === void 0 && y2.className !== BA.name && y2.Y === L0 - 2)
                ? ((UA.Y = L0 - 2), (UA.className = BA.name), (P2[b1] = UA))
                : ($B(P2, b1, t2), (P2[b1].R[L0 - 2] = UA)),
              CA([], KA, function (q1) {
                return (
                  (q1 = P8(t2, q1, BA, v0, HA)),
                  P2[b1].R === void 0 ? ((q1.Y = L0 - 2), (P2[b1] = q1)) : (P2[b1].R[L0 - 2] = q1),
                  []
                );
              }),
              []
            );
          }));
      },
      A: function (y1, b1) {
        V2(y1, {
          name: (b1 = U0(b1)),
          fromWireType: function (L0) {
            var g0 = g1(L0);
            return (H4(L0), g0);
          },
          toWireType: function (L0, g0) {
            return v1(g0);
          },
          argPackAdvance: 8,
          readValueFromPointer: dA,
          U: null,
        });
      },
      n: function (y1, b1, L0) {
        ((L0 = rA(L0)),
          V2(y1, {
            name: (b1 = U0(b1)),
            fromWireType: function (g0) {
              return g0;
            },
            toWireType: function (g0, C0) {
              return C0;
            },
            argPackAdvance: 8,
            readValueFromPointer: (function (g0, C0) {
              switch (C0) {
                case 2:
                  return function (v0) {
                    return this.fromWireType(R[v0 >> 2]);
                  };
                case 3:
                  return function (v0) {
                    return this.fromWireType(P[v0 >> 3]);
                  };
                default:
                  throw TypeError("Unknown float type: " + g0);
              }
            })(b1, L0),
            U: null,
          }));
      },
      e: function (y1, b1, L0, g0, C0) {
        ((b1 = U0(b1)), C0 === -1 && (C0 = 4294967295), (C0 = rA(L0)));
        var v0 = (e0) => e0;
        if (g0 === 0) {
          var HA = 32 - 8 * L0;
          v0 = (e0) => (e0 << HA) >>> HA;
        }
        ((L0 = b1.includes("unsigned")
          ? function (e0, KA) {
              return KA >>> 0;
            }
          : function (e0, KA) {
              return KA;
            }),
          V2(y1, {
            name: b1,
            fromWireType: v0,
            toWireType: L0,
            argPackAdvance: 8,
            readValueFromPointer: (function (e0, KA, BA) {
              switch (KA) {
                case 0:
                  return BA
                    ? function (UA) {
                        return D[UA];
                      }
                    : function (UA) {
                        return C[UA];
                      };
                case 1:
                  return BA
                    ? function (UA) {
                        return w[UA >> 1];
                      }
                    : function (UA) {
                        return E[UA >> 1];
                      };
                case 2:
                  return BA
                    ? function (UA) {
                        return L[UA >> 2];
                      }
                    : function (UA) {
                        return O[UA >> 2];
                      };
                default:
                  throw TypeError("Unknown integer type: " + e0);
              }
            })(b1, C0, g0 !== 0),
            U: null,
          }));
      },
      b: function (y1, b1, L0) {
        function g0(v0) {
          v0 >>= 2;
          var HA = O;
          return new C0(HA.buffer, HA[v0 + 1], HA[v0]);
        }
        var C0 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][
          b1
        ];
        V2(y1, { name: (L0 = U0(L0)), fromWireType: g0, argPackAdvance: 8, readValueFromPointer: g0 }, { ta: !0 });
      },
      o: function (y1, b1) {
        var L0 = (b1 = U0(b1)) === "std::string";
        V2(y1, {
          name: b1,
          fromWireType: function (g0) {
            var C0 = O[g0 >> 2],
              v0 = g0 + 4;
            if (L0)
              for (var HA = v0, e0 = 0; e0 <= C0; ++e0) {
                var KA = v0 + e0;
                if (e0 == C0 || C[KA] == 0) {
                  if (((HA = HA ? H(C, HA, KA - HA) : ""), BA === void 0)) var BA = HA;
                  else BA += "\x00" + HA;
                  HA = KA + 1;
                }
              }
            else {
              for (e0 = 0, BA = Array(C0); e0 < C0; ++e0) BA[e0] = String.fromCharCode(C[v0 + e0]);
              BA = BA.join("");
            }
            return (tB(g0), BA);
          },
          toWireType: function (g0, C0) {
            C0 instanceof ArrayBuffer && (C0 = new Uint8Array(C0));
            var v0,
              HA = typeof C0 == "string";
            if (
              (HA ||
                C0 instanceof Uint8Array ||
                C0 instanceof Uint8ClampedArray ||
                C0 instanceof Int8Array ||
                C1("Cannot pass non-string to std::string"),
              L0 && HA)
            ) {
              var e0 = 0;
              for (v0 = 0; v0 < C0.length; ++v0) {
                var KA = C0.charCodeAt(v0);
                127 >= KA ? e0++ : 2047 >= KA ? (e0 += 2) : 55296 <= KA && 57343 >= KA ? ((e0 += 4), ++v0) : (e0 += 3);
              }
              v0 = e0;
            } else v0 = C0.length;
            if (((KA = (e0 = j9(4 + v0 + 1)) + 4), (O[e0 >> 2] = v0), L0 && HA)) {
              if (((HA = KA), (KA = v0 + 1), (v0 = C), 0 < KA)) {
                KA = HA + KA - 1;
                for (var BA = 0; BA < C0.length; ++BA) {
                  var UA = C0.charCodeAt(BA);
                  if (
                    (55296 <= UA && 57343 >= UA && (UA = (65536 + ((1023 & UA) << 10)) | (1023 & C0.charCodeAt(++BA))),
                    127 >= UA)
                  ) {
                    if (HA >= KA) break;
                    v0[HA++] = UA;
                  } else {
                    if (2047 >= UA) {
                      if (HA + 1 >= KA) break;
                      v0[HA++] = 192 | (UA >> 6);
                    } else {
                      if (65535 >= UA) {
                        if (HA + 2 >= KA) break;
                        v0[HA++] = 224 | (UA >> 12);
                      } else {
                        if (HA + 3 >= KA) break;
                        ((v0[HA++] = 240 | (UA >> 18)), (v0[HA++] = 128 | ((UA >> 12) & 63)));
                      }
                      v0[HA++] = 128 | ((UA >> 6) & 63);
                    }
                    v0[HA++] = 128 | (63 & UA);
                  }
                }
                v0[HA] = 0;
              }
            } else if (HA)
              for (HA = 0; HA < v0; ++HA)
                (255 < (BA = C0.charCodeAt(HA)) &&
                  (tB(KA), C1("String has UTF-16 code units that do not fit in 8 bits")),
                  (C[KA + HA] = BA));
            else for (HA = 0; HA < v0; ++HA) C[KA + HA] = C0[HA];
            return (g0 !== null && g0.push(tB, e0), e0);
          },
          argPackAdvance: 8,
          readValueFromPointer: dA,
          U: function (g0) {
            tB(g0);
          },
        });
      },
      k: function (y1, b1, L0) {
        if (((L0 = U0(L0)), b1 === 2))
          var g0 = j8,
            C0 = IZ,
            v0 = X0,
            HA = () => E,
            e0 = 1;
        else b1 === 4 && ((g0 = k1), (C0 = Y0), (v0 = F0), (HA = () => O), (e0 = 2));
        V2(y1, {
          name: L0,
          fromWireType: function (KA) {
            for (var BA, UA = O[KA >> 2], t2 = HA(), P2 = KA + 4, y2 = 0; y2 <= UA; ++y2) {
              var q1 = KA + 4 + y2 * b1;
              (y2 == UA || t2[q1 >> e0] == 0) &&
                ((P2 = g0(P2, q1 - P2)), BA === void 0 ? (BA = P2) : (BA += "\x00" + P2), (P2 = q1 + b1));
            }
            return (tB(KA), BA);
          },
          toWireType: function (KA, BA) {
            typeof BA != "string" && C1("Cannot pass non-string to C++ string type " + L0);
            var UA = v0(BA),
              t2 = j9(4 + UA + b1);
            return ((O[t2 >> 2] = UA >> e0), C0(BA, t2 + 4, UA + b1), KA !== null && KA.push(tB, t2), t2);
          },
          argPackAdvance: 8,
          readValueFromPointer: dA,
          U: function (KA) {
            tB(KA);
          },
        });
      },
      m: function (y1, b1, L0, g0, C0, v0) {
        qA[y1] = { name: U0(b1), ea: g4(L0, g0), V: g4(C0, v0), ha: [] };
      },
      c: function (y1, b1, L0, g0, C0, v0, HA, e0, KA, BA) {
        qA[y1].ha.push({ na: U0(b1), sa: L0, qa: g4(g0, C0), ra: v0, ya: HA, xa: g4(e0, KA), za: BA });
      },
      C: function (y1, b1) {
        V2(y1, {
          ua: !0,
          name: (b1 = U0(b1)),
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function () {},
        });
      },
      t: function (y1, b1, L0, g0, C0) {
        ((y1 = N2[y1]), (b1 = g1(b1)), (L0 = XA(L0)));
        var v0 = [];
        return ((O[g0 >> 2] = v1(v0)), y1(b1, L0, v0, C0));
      },
      j: function (y1, b1, L0, g0) {
        ((y1 = N2[y1]), y1((b1 = g1(b1)), (L0 = XA(L0)), null, g0));
      },
      f: H4,
      g: function (y1, b1) {
        var L0,
          g0,
          C0 = (function (KA, BA) {
            for (var UA = Array(KA), t2 = 0; t2 < KA; ++t2) UA[t2] = r1(O[(BA + 4 * t2) >> 2], "parameter " + t2);
            return UA;
          })(y1, b1),
          v0 = C0[0],
          HA =
            s2[
              (b1 =
                v0.name +
                "_$" +
                C0.slice(1)
                  .map(function (KA) {
                    return KA.name;
                  })
                  .join("_") +
                "$")
            ];
        if (HA !== void 0) return HA;
        var e0 = Array(y1 - 1);
        return (
          (L0 = (KA, BA, UA, t2) => {
            for (var P2 = 0, y2 = 0; y2 < y1 - 1; ++y2)
              ((e0[y2] = C0[y2 + 1].readValueFromPointer(t2 + P2)), (P2 += C0[y2 + 1].argPackAdvance));
            for (y2 = 0, KA = KA[BA].apply(KA, e0); y2 < y1 - 1; ++y2) C0[y2 + 1].la && C0[y2 + 1].la(e0[y2]);
            if (!v0.ua) return v0.toWireType(UA, KA);
          }),
          (g0 = N2.length),
          N2.push(L0),
          (HA = g0),
          (s2[b1] = HA)
        );
      },
      r: function (y1) {
        4 < y1 && (s1[y1].fa += 1);
      },
      s: function (y1) {
        (SA(g1(y1)), H4(y1));
      },
      i: function () {
        m("");
      },
      x: function (y1, b1, L0) {
        C.copyWithin(y1, b1, b1 + L0);
      },
      w: function (y1) {
        var b1 = C.length;
        if (2147483648 < (y1 >>>= 0)) return !1;
        for (var L0 = 1; 4 >= L0; L0 *= 2) {
          var g0 = b1 * (1 + 0.2 / L0);
          g0 = Math.min(g0, y1 + 100663296);
          var C0 = Math,
            v0 = C0.min;
          ((g0 = Math.max(y1, g0)), (g0 += (65536 - (g0 % 65536)) % 65536));
          A: {
            var HA = V.buffer;
            try {
              (V.grow((v0.call(C0, 2147483648, g0) - HA.byteLength + 65535) >>> 16), z());
              var e0 = 1;
              break A;
            } catch (KA) {}
            e0 = void 0;
          }
          if (e0) return !0;
        }
        return !1;
      },
      z: function () {
        return 52;
      },
      u: function () {
        return 70;
      },
      y: function (y1, b1, L0, g0) {
        for (var C0 = 0, v0 = 0; v0 < L0; v0++) {
          var HA = O[b1 >> 2],
            e0 = O[(b1 + 4) >> 2];
          b1 += 8;
          for (var KA = 0; KA < e0; KA++) {
            var BA = C[HA + KA],
              UA = UQ[y1];
            BA === 0 || BA === 10 ? ((y1 === 1 ? I : W)(H(UA, 0)), (UA.length = 0)) : UA.push(BA);
          }
          C0 += e0;
        }
        return ((O[g0 >> 2] = C0), 0);
      },
    };
    (function () {
      function y1(C0) {
        ((J.asm = C0.exports),
          (V = J.asm.D),
          z(),
          (_ = J.asm.I),
          S.unshift(J.asm.E),
          --u == 0 && o && ((C0 = o), (o = null), C0()));
      }
      function b1(C0) {
        y1(C0.instance);
      }
      function L0(C0) {
        return (
          typeof fetch == "function"
            ? fetch(Q, { credentials: "same-origin" })
                .then(function (v0) {
                  if (!v0.ok) throw "failed to load wasm binary file at '" + Q + "'";
                  return v0.arrayBuffer();
                })
                .catch(function () {
                  return r();
                })
            : Promise.resolve().then(function () {
                return r();
              })
        )
          .then(function (v0) {
            return WebAssembly.instantiate(v0, g0);
          })
          .then(function (v0) {
            return v0;
          })
          .then(C0, function (v0) {
            (W("failed to asynchronously prepare wasm: " + v0), m(v0));
          });
      }
      var g0 = { a: Z4 };
      if ((u++, J.instantiateWasm))
        try {
          return J.instantiateWasm(g0, y1);
        } catch (C0) {
          (W("Module.instantiateWasm callback failed with error: " + C0), F(C0));
        }
      (typeof WebAssembly.instantiateStreaming != "function" || j() || typeof fetch != "function"
        ? L0(b1)
        : fetch(Q, { credentials: "same-origin" }).then(function (C0) {
            return WebAssembly.instantiateStreaming(C0, g0).then(b1, function (v0) {
              return (
                W("wasm streaming compile failed: " + v0),
                W("falling back to ArrayBuffer instantiation"),
                L0(b1)
              );
            });
          })
      ).catch(F);
    })();
    var E4 = (J.___getTypeName = function () {
      return (E4 = J.___getTypeName = J.asm.F).apply(null, arguments);
    });
    function j9() {
      return (j9 = J.asm.H).apply(null, arguments);
    }
    function tB() {
      return (tB = J.asm.J).apply(null, arguments);
    }
    function G4() {
      0 < u || (Q1(b), 0 < u || Z || ((Z = !0), (J.calledRun = !0), K || (Q1(S), X(J), Q1(d))));
    }
    return (
      (J.__embind_initialize_bindings = function () {
        return (J.__embind_initialize_bindings = J.asm.G).apply(null, arguments);
      }),
      (J.dynCall_jiji = function () {
        return (J.dynCall_jiji = J.asm.K).apply(null, arguments);
      }),
      (o = function y1() {
        (Z || G4(), Z || (o = y1));
      }),
      G4(),
      B.ready
    );
  };
})();
async function iqA(A) {
  let B = await pE9({
    instantiateWasm(Q, Z) {
      WebAssembly.instantiate(A, Q).then((G) => {
        G instanceof WebAssembly.Instance ? Z(G) : Z(G.instance);
      });
    },
  });
  return pqA(B);
}
import { readFile as iE9 } from "node:fs/promises";
import { createRequire as nE9 } from "node:module";
var Z$1 = await iqA(await iE9(nE9(import.meta.url).resolve("./yoga.wasm")));
function D00({ onlyFirst: A = !1 } = {}) {
  let Q = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))",
  ].join("|");
  return new RegExp(Q, A ? void 0 : "g");
}
var aE9 = D00();
function eI(A) {
  if (typeof A !== "string") throw new TypeError(`Expected a \`string\`, got \`${typeof A}\``);
  return A.replace(aE9, "");
}
function nqA(A) {
  return (
    A === 161 ||
    A === 164 ||
    A === 167 ||
    A === 168 ||
    A === 170 ||
    A === 173 ||
    A === 174 ||
    (A >= 176 && A <= 180) ||
    (A >= 182 && A <= 186) ||
    (A >= 188 && A <= 191) ||
    A === 198 ||
    A === 208 ||
    A === 215 ||
    A === 216 ||
    (A >= 222 && A <= 225) ||
    A === 230 ||
    (A >= 232 && A <= 234) ||
    A === 236 ||
    A === 237 ||
    A === 240 ||
    A === 242 ||
    A === 243 ||
    (A >= 247 && A <= 250) ||
    A === 252 ||
    A === 254 ||
    A === 257 ||
    A === 273 ||
    A === 275 ||
    A === 283 ||
    A === 294 ||
    A === 295 ||
    A === 299 ||
    (A >= 305 && A <= 307) ||
    A === 312 ||
    (A >= 319 && A <= 322) ||
    A === 324 ||
    (A >= 328 && A <= 331) ||
    A === 333 ||
    A === 338 ||
    A === 339 ||
    A === 358 ||
    A === 359 ||
    A === 363 ||
    A === 462 ||
    A === 464 ||
    A === 466 ||
    A === 468 ||
    A === 470 ||
    A === 472 ||
    A === 474 ||
    A === 476 ||
    A === 593 ||
    A === 609 ||
    A === 708 ||
    A === 711 ||
    (A >= 713 && A <= 715) ||
    A === 717 ||
    A === 720 ||
    (A >= 728 && A <= 731) ||
    A === 733 ||
    A === 735 ||
    (A >= 768 && A <= 879) ||
    (A >= 913 && A <= 929) ||
    (A >= 931 && A <= 937) ||
    (A >= 945 && A <= 961) ||
    (A >= 963 && A <= 969) ||
    A === 1025 ||
    (A >= 1040 && A <= 1103) ||
    A === 1105 ||
    A === 8208 ||
    (A >= 8211 && A <= 8214) ||
    A === 8216 ||
    A === 8217 ||
    A === 8220 ||
    A === 8221 ||
    (A >= 8224 && A <= 8226) ||
    (A >= 8228 && A <= 8231) ||
    A === 8240 ||
    A === 8242 ||
    A === 8243 ||
    A === 8245 ||
    A === 8251 ||
    A === 8254 ||
    A === 8308 ||
    A === 8319 ||
    (A >= 8321 && A <= 8324) ||
    A === 8364 ||
    A === 8451 ||
    A === 8453 ||
    A === 8457 ||
    A === 8467 ||
    A === 8470 ||
    A === 8481 ||
    A === 8482 ||
    A === 8486 ||
    A === 8491 ||
    A === 8531 ||
    A === 8532 ||
    (A >= 8539 && A <= 8542) ||
    (A >= 8544 && A <= 8555) ||
    (A >= 8560 && A <= 8569) ||
    A === 8585 ||
    (A >= 8592 && A <= 8601) ||
    A === 8632 ||
    A === 8633 ||
    A === 8658 ||
    A === 8660 ||
    A === 8679 ||
    A === 8704 ||
    A === 8706 ||
    A === 8707 ||
    A === 8711 ||
    A === 8712 ||
    A === 8715 ||
    A === 8719 ||
    A === 8721 ||
    A === 8725 ||
    A === 8730 ||
    (A >= 8733 && A <= 8736) ||
    A === 8739 ||
    A === 8741 ||
    (A >= 8743 && A <= 8748) ||
    A === 8750 ||
    (A >= 8756 && A <= 8759) ||
    A === 8764 ||
    A === 8765 ||
    A === 8776 ||
    A === 8780 ||
    A === 8786 ||
    A === 8800 ||
    A === 8801 ||
    (A >= 8804 && A <= 8807) ||
    A === 8810 ||
    A === 8811 ||
    A === 8814 ||
    A === 8815 ||
    A === 8834 ||
    A === 8835 ||
    A === 8838 ||
    A === 8839 ||
    A === 8853 ||
    A === 8857 ||
    A === 8869 ||
    A === 8895 ||
    A === 8978 ||
    (A >= 9312 && A <= 9449) ||
    (A >= 9451 && A <= 9547) ||
    (A >= 9552 && A <= 9587) ||
    (A >= 9600 && A <= 9615) ||
    (A >= 9618 && A <= 9621) ||
    A === 9632 ||
    A === 9633 ||
    (A >= 9635 && A <= 9641) ||
    A === 9650 ||
    A === 9651 ||
    A === 9654 ||
    A === 9655 ||
    A === 9660 ||
    A === 9661 ||
    A === 9664 ||
    A === 9665 ||
    (A >= 9670 && A <= 9672) ||
    A === 9675 ||
    (A >= 9678 && A <= 9681) ||
    (A >= 9698 && A <= 9701) ||
    A === 9711 ||
    A === 9733 ||
    A === 9734 ||
    A === 9737 ||
    A === 9742 ||
    A === 9743 ||
    A === 9756 ||
    A === 9758 ||
    A === 9792 ||
    A === 9794 ||
    A === 9824 ||
    A === 9825 ||
    (A >= 9827 && A <= 9829) ||
    (A >= 9831 && A <= 9834) ||
    A === 9836 ||
    A === 9837 ||
    A === 9839 ||
    A === 9886 ||
    A === 9887 ||
    A === 9919 ||
    (A >= 9926 && A <= 9933) ||
    (A >= 9935 && A <= 9939) ||
    (A >= 9941 && A <= 9953) ||
    A === 9955 ||
    A === 9960 ||
    A === 9961 ||
    (A >= 9963 && A <= 9969) ||
    A === 9972 ||
    (A >= 9974 && A <= 9977) ||
    A === 9979 ||
    A === 9980 ||
    A === 9982 ||
    A === 9983 ||
    A === 10045 ||
    (A >= 10102 && A <= 10111) ||
    (A >= 11094 && A <= 11097) ||
    (A >= 12872 && A <= 12879) ||
    (A >= 57344 && A <= 63743) ||
    (A >= 65024 && A <= 65039) ||
    A === 65533 ||
    (A >= 127232 && A <= 127242) ||
    (A >= 127248 && A <= 127277) ||
    (A >= 127280 && A <= 127337) ||
    (A >= 127344 && A <= 127373) ||
    A === 127375 ||
    A === 127376 ||
    (A >= 127387 && A <= 127404) ||
    (A >= 917760 && A <= 917999) ||
    (A >= 983040 && A <= 1048573) ||
    (A >= 1048576 && A <= 1114109)
  );
}
function aqA(A) {
  return A === 12288 || (A >= 65281 && A <= 65376) || (A >= 65504 && A <= 65510);
}
function sqA(A) {
  return (
    (A >= 4352 && A <= 4447) ||
    A === 8986 ||
    A === 8987 ||
    A === 9001 ||
    A === 9002 ||
    (A >= 9193 && A <= 9196) ||
    A === 9200 ||
    A === 9203 ||
    A === 9725 ||
    A === 9726 ||
    A === 9748 ||
    A === 9749 ||
    (A >= 9776 && A <= 9783) ||
    (A >= 9800 && A <= 9811) ||
    A === 9855 ||
    (A >= 9866 && A <= 9871) ||
    A === 9875 ||
    A === 9889 ||
    A === 9898 ||
    A === 9899 ||
    A === 9917 ||
    A === 9918 ||
    A === 9924 ||
    A === 9925 ||
    A === 9934 ||
    A === 9940 ||
    A === 9962 ||
    A === 9970 ||
    A === 9971 ||
    A === 9973 ||
    A === 9978 ||
    A === 9981 ||
    A === 9989 ||
    A === 9994 ||
    A === 9995 ||
    A === 10024 ||
    A === 10060 ||
    A === 10062 ||
    (A >= 10067 && A <= 10069) ||
    A === 10071 ||
    (A >= 10133 && A <= 10135) ||
    A === 10160 ||
    A === 10175 ||
    A === 11035 ||
    A === 11036 ||
    A === 11088 ||
    A === 11093 ||
    (A >= 11904 && A <= 11929) ||
    (A >= 11931 && A <= 12019) ||
    (A >= 12032 && A <= 12245) ||
    (A >= 12272 && A <= 12287) ||
    (A >= 12289 && A <= 12350) ||
    (A >= 12353 && A <= 12438) ||
    (A >= 12441 && A <= 12543) ||
    (A >= 12549 && A <= 12591) ||
    (A >= 12593 && A <= 12686) ||
    (A >= 12688 && A <= 12773) ||
    (A >= 12783 && A <= 12830) ||
    (A >= 12832 && A <= 12871) ||
    (A >= 12880 && A <= 42124) ||
    (A >= 42128 && A <= 42182) ||
    (A >= 43360 && A <= 43388) ||
    (A >= 44032 && A <= 55203) ||
    (A >= 63744 && A <= 64255) ||
    (A >= 65040 && A <= 65049) ||
    (A >= 65072 && A <= 65106) ||
    (A >= 65108 && A <= 65126) ||
    (A >= 65128 && A <= 65131) ||
    (A >= 94176 && A <= 94180) ||
    A === 94192 ||
    A === 94193 ||
    (A >= 94208 && A <= 100343) ||
    (A >= 100352 && A <= 101589) ||
    (A >= 101631 && A <= 101640) ||
    (A >= 110576 && A <= 110579) ||
    (A >= 110581 && A <= 110587) ||
    A === 110589 ||
    A === 110590 ||
    (A >= 110592 && A <= 110882) ||
    A === 110898 ||
    (A >= 110928 && A <= 110930) ||
    A === 110933 ||
    (A >= 110948 && A <= 110951) ||
    (A >= 110960 && A <= 111355) ||
    (A >= 119552 && A <= 119638) ||
    (A >= 119648 && A <= 119670) ||
    A === 126980 ||
    A === 127183 ||
    A === 127374 ||
    (A >= 127377 && A <= 127386) ||
    (A >= 127488 && A <= 127490) ||
    (A >= 127504 && A <= 127547) ||
    (A >= 127552 && A <= 127560) ||
    A === 127568 ||
    A === 127569 ||
    (A >= 127584 && A <= 127589) ||
    (A >= 127744 && A <= 127776) ||
    (A >= 127789 && A <= 127797) ||
    (A >= 127799 && A <= 127868) ||
    (A >= 127870 && A <= 127891) ||
    (A >= 127904 && A <= 127946) ||
    (A >= 127951 && A <= 127955) ||
    (A >= 127968 && A <= 127984) ||
    A === 127988 ||
    (A >= 127992 && A <= 128062) ||
    A === 128064 ||
    (A >= 128066 && A <= 128252) ||
    (A >= 128255 && A <= 128317) ||
    (A >= 128331 && A <= 128334) ||
    (A >= 128336 && A <= 128359) ||
    A === 128378 ||
    A === 128405 ||
    A === 128406 ||
    A === 128420 ||
    (A >= 128507 && A <= 128591) ||
    (A >= 128640 && A <= 128709) ||
    A === 128716 ||
    (A >= 128720 && A <= 128722) ||
    (A >= 128725 && A <= 128727) ||
    (A >= 128732 && A <= 128735) ||
    A === 128747 ||
    A === 128748 ||
    (A >= 128756 && A <= 128764) ||
    (A >= 128992 && A <= 129003) ||
    A === 129008 ||
    (A >= 129292 && A <= 129338) ||
    (A >= 129340 && A <= 129349) ||
    (A >= 129351 && A <= 129535) ||
    (A >= 129648 && A <= 129660) ||
    (A >= 129664 && A <= 129673) ||
    (A >= 129679 && A <= 129734) ||
    (A >= 129742 && A <= 129756) ||
    (A >= 129759 && A <= 129769) ||
    (A >= 129776 && A <= 129784) ||
    (A >= 131072 && A <= 196605) ||
    (A >= 196608 && A <= 262141)
  );
}
function sE9(A) {
  if (!Number.isSafeInteger(A)) throw new TypeError(`Expected a code point, got \`${typeof A}\`.`);
}
function G$1(A, { ambiguousAsWide: B = !1 } = {}) {
  if ((sE9(A), aqA(A) || sqA(A) || (B && nqA(A)))) return 2;
  return 1;
}
var tqA = A1(oqA(), 1),
  rE9 = new Intl.Segmenter(),
  oE9 = /^\p{Default_Ignorable_Code_Point}$/u;
function J3(A, B = {}) {
  if (typeof A !== "string" || A.length === 0) return 0;
  let { ambiguousIsNarrow: Q = !0, countAnsiEscapeCodes: Z = !1 } = B;
  if (!Z) A = eI(A);
  if (A.length === 0) return 0;
  let G = 0,
    Y = { ambiguousAsWide: !Q };
  for (let { segment: I } of rE9.segment(A)) {
    let W = I.codePointAt(0);
    if (W <= 31 || (W >= 127 && W <= 159)) continue;
    if ((W >= 8203 && W <= 8207) || W === 65279) continue;
    if (
      (W >= 768 && W <= 879) ||
      (W >= 6832 && W <= 6911) ||
      (W >= 7616 && W <= 7679) ||
      (W >= 8400 && W <= 8447) ||
      (W >= 65056 && W <= 65071)
    )
      continue;
    if (W >= 55296 && W <= 57343) continue;
    if (W >= 65024 && W <= 65039) continue;
    if (oE9.test(I)) continue;
    if (tqA.default().test(I)) {
      G += 2;
      continue;
    }
    G += G$1(W, Y);
  }
  return G;
}
function da(A) {
  let B = 0;
  for (let Q of A.split(`
`))
    B = Math.max(B, J3(Q));
  return B;
}
var eqA = {},
  tE9 = (A) => {
    if (A.length === 0) return { width: 0, height: 0 };
    let B = eqA[A];
    if (B) return B;
    let Q = da(A),
      Z = A.split(`
`).length;
    return ((eqA[A] = { width: Q, height: Z }), { width: Q, height: Z });
  },
  C00 = tE9;
var AEA =
    (A = 0) =>
    (B) =>
      `\x1B[${B + A}m`,
  BEA =
    (A = 0) =>
    (B) =>
      `\x1B[${38 + A};5;${B}m`,
  QEA =
    (A = 0) =>
    (B, Q, Z) =>
      `\x1B[${38 + A};2;${B};${Q};${Z}m`,
  UZ = {
    modifier: {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      blackBright: [90, 39],
      gray: [90, 39],
      grey: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39],
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgBlackBright: [100, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49],
    },
  },
  xS8 = Object.keys(UZ.modifier),
  eE9 = Object.keys(UZ.color),
  AN9 = Object.keys(UZ.bgColor),
  vS8 = [...eE9, ...AN9];
function BN9() {
  let A = new Map();
  for (let [B, Q] of Object.entries(UZ)) {
    for (let [Z, G] of Object.entries(Q))
      ((UZ[Z] = { open: `\x1B[${G[0]}m`, close: `\x1B[${G[1]}m` }), (Q[Z] = UZ[Z]), A.set(G[0], G[1]));
    Object.defineProperty(UZ, B, { value: Q, enumerable: !1 });
  }
  return (
    Object.defineProperty(UZ, "codes", { value: A, enumerable: !1 }),
    (UZ.color.close = "\x1B[39m"),
    (UZ.bgColor.close = "\x1B[49m"),
    (UZ.color.ansi = AEA()),
    (UZ.color.ansi256 = BEA()),
    (UZ.color.ansi16m = QEA()),
    (UZ.bgColor.ansi = AEA(10)),
    (UZ.bgColor.ansi256 = BEA(10)),
    (UZ.bgColor.ansi16m = QEA(10)),
    Object.defineProperties(UZ, {
      rgbToAnsi256: {
        value: (B, Q, Z) => {
          if (B === Q && Q === Z) {
            if (B < 8) return 16;
            if (B > 248) return 231;
            return Math.round(((B - 8) / 247) * 24) + 232;
          }
          return 16 + 36 * Math.round((B / 255) * 5) + 6 * Math.round((Q / 255) * 5) + Math.round((Z / 255) * 5);
        },
        enumerable: !1,
      },
      hexToRgb: {
        value: (B) => {
          let Q = /[a-f\d]{6}|[a-f\d]{3}/i.exec(B.toString(16));
          if (!Q) return [0, 0, 0];
          let [Z] = Q;
          if (Z.length === 3) Z = [...Z].map((Y) => Y + Y).join("");
          let G = Number.parseInt(Z, 16);
          return [(G >> 16) & 255, (G >> 8) & 255, G & 255];
        },
        enumerable: !1,
      },
      hexToAnsi256: { value: (B) => UZ.rgbToAnsi256(...UZ.hexToRgb(B)), enumerable: !1 },
      ansi256ToAnsi: {
        value: (B) => {
          if (B < 8) return 30 + B;
          if (B < 16) return 90 + (B - 8);
          let Q, Z, G;
          if (B >= 232) ((Q = ((B - 232) * 10 + 8) / 255), (Z = Q), (G = Q));
          else {
            B -= 16;
            let W = B % 36;
            ((Q = Math.floor(B / 36) / 5), (Z = Math.floor(W / 6) / 5), (G = (W % 6) / 5));
          }
          let Y = Math.max(Q, Z, G) * 2;
          if (Y === 0) return 30;
          let I = 30 + ((Math.round(G) << 2) | (Math.round(Z) << 1) | Math.round(Q));
          if (Y === 2) I += 60;
          return I;
        },
        enumerable: !1,
      },
      rgbToAnsi: { value: (B, Q, Z) => UZ.ansi256ToAnsi(UZ.rgbToAnsi256(B, Q, Z)), enumerable: !1 },
      hexToAnsi: { value: (B) => UZ.ansi256ToAnsi(UZ.hexToAnsi256(B)), enumerable: !1 },
    }),
    UZ
  );
}
var QN9 = BN9(),
  $Z = QN9;
var I$1 = new Set(["\x1B", ""]),
  ZN9 = 39,
  $00 = "\x07",
  YEA = "[",
  GN9 = "]",
  IEA = "m",
  Y$1 = `${GN9}8;;`,
  ZEA = (A) => `${I$1.values().next().value}${YEA}${A}${IEA}`,
  GEA = (A) => `${I$1.values().next().value}${Y$1}${A}${$00}`,
  YN9 = (A) => A.split(" ").map((B) => J3(B)),
  U00 = (A, B, Q) => {
    let Z = [...B],
      G = !1,
      Y = !1,
      I = J3(eI(A.at(-1)));
    for (let [W, J] of Z.entries()) {
      let X = J3(J);
      if (I + X <= Q) A[A.length - 1] += J;
      else (A.push(J), (I = 0));
      if (I$1.has(J)) ((G = !0), (Y = Z.slice(W + 1, W + 1 + Y$1.length).join("") === Y$1));
      if (G) {
        if (Y) {
          if (J === $00) ((G = !1), (Y = !1));
        } else if (J === IEA) G = !1;
        continue;
      }
      if (((I += X), I === Q && W < Z.length - 1)) (A.push(""), (I = 0));
    }
    if (!I && A.at(-1).length > 0 && A.length > 1) A[A.length - 2] += A.pop();
  },
  IN9 = (A) => {
    let B = A.split(" "),
      Q = B.length;
    while (Q > 0) {
      if (J3(B[Q - 1]) > 0) break;
      Q--;
    }
    if (Q === B.length) return A;
    return B.slice(0, Q).join(" ") + B.slice(Q).join("");
  },
  WN9 = (A, B, Q = {}) => {
    if (Q.trim !== !1 && A.trim() === "") return "";
    let Z = "",
      G,
      Y,
      I = YN9(A),
      W = [""];
    for (let [V, K] of A.split(" ").entries()) {
      if (Q.trim !== !1) W[W.length - 1] = W.at(-1).trimStart();
      let H = J3(W.at(-1));
      if (V !== 0) {
        if (H >= B && (Q.wordWrap === !1 || Q.trim === !1)) (W.push(""), (H = 0));
        if (H > 0 || Q.trim === !1) ((W[W.length - 1] += " "), H++);
      }
      if (Q.hard && I[V] > B) {
        let z = B - H,
          D = 1 + Math.floor((I[V] - z - 1) / B);
        if (Math.floor((I[V] - 1) / B) < D) W.push("");
        U00(W, K, B);
        continue;
      }
      if (H + I[V] > B && H > 0 && I[V] > 0) {
        if (Q.wordWrap === !1 && H < B) {
          U00(W, K, B);
          continue;
        }
        W.push("");
      }
      if (H + I[V] > B && Q.wordWrap === !1) {
        U00(W, K, B);
        continue;
      }
      W[W.length - 1] += K;
    }
    if (Q.trim !== !1) W = W.map((V) => IN9(V));
    let J = W.join(`
`),
      X = [...J],
      F = 0;
    for (let [V, K] of X.entries()) {
      if (((Z += K), I$1.has(K))) {
        let { groups: z } = new RegExp(`(?:\\${YEA}(?<code>\\d+)m|\\${Y$1}(?<uri>.*)${$00})`).exec(J.slice(F)) || {
          groups: {},
        };
        if (z.code !== void 0) {
          let D = Number.parseFloat(z.code);
          G = D === ZN9 ? void 0 : D;
        } else if (z.uri !== void 0) Y = z.uri.length === 0 ? void 0 : z.uri;
      }
      let H = $Z.codes.get(Number(G));
      if (
        X[V + 1] ===
        `
`
      ) {
        if (Y) Z += GEA("");
        if (G && H) Z += ZEA(H);
      } else if (
        K ===
        `
`
      ) {
        if (G && H) Z += ZEA(G);
        if (Y) Z += GEA(Y);
      }
      F += K.length;
    }
    return Z;
  };
function ca(A, B, Q) {
  return String(A)
    .normalize()
    .replaceAll(
      `\r
`,
      `
`,
    )
    .split(
      `
`,
    )
    .map((Z) => WN9(Z, B, Q)).join(`
`);
}
function q61(A) {
  if (!Number.isInteger(A)) return !1;
  return (
    A >= 4352 &&
    (A <= 4447 ||
      A === 9001 ||
      A === 9002 ||
      (11904 <= A && A <= 12871 && A !== 12351) ||
      (12880 <= A && A <= 19903) ||
      (19968 <= A && A <= 42182) ||
      (43360 <= A && A <= 43388) ||
      (44032 <= A && A <= 55203) ||
      (63744 <= A && A <= 64255) ||
      (65040 <= A && A <= 65049) ||
      (65072 <= A && A <= 65131) ||
      (65281 <= A && A <= 65376) ||
      (65504 <= A && A <= 65510) ||
      (110592 <= A && A <= 110593) ||
      (127488 <= A && A <= 127569) ||
      (131072 <= A && A <= 262141))
  );
}
var JN9 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]$/,
  JEA = ["\x1B", ""],
  W$1 = (A) => `${JEA[0]}[${A}m`,
  WEA = (A, B, Q) => {
    let Z = [];
    A = [...A];
    for (let G of A) {
      let Y = G;
      if (G.includes(";")) G = G.split(";")[0][0] + "0";
      let I = $Z.codes.get(Number.parseInt(G, 10));
      if (I) {
        let W = A.indexOf(I.toString());
        if (W === -1) Z.push(W$1(B ? I : Y));
        else A.splice(W, 1);
      } else if (B) {
        Z.push(W$1(0));
        break;
      } else Z.push(W$1(Y));
    }
    if (B) {
      if (((Z = Z.filter((G, Y) => Z.indexOf(G) === Y)), Q !== void 0)) {
        let G = W$1($Z.codes.get(Number.parseInt(Q, 10)));
        Z = Z.reduce((Y, I) => (I === G ? [I, ...Y] : [...Y, I]), []);
      }
    }
    return Z.join("");
  };
function KL(A, B, Q) {
  let Z = [...A],
    G = [],
    Y = typeof Q === "number" ? Q : Z.length,
    I = !1,
    W,
    J = 0,
    X = "";
  for (let [F, V] of Z.entries()) {
    let K = !1;
    if (JEA.includes(V)) {
      let H = /\d[^m]*/.exec(A.slice(F, F + 18));
      if (((W = H && H.length > 0 ? H[0] : void 0), J < Y)) {
        if (((I = !0), W !== void 0)) G.push(W);
      }
    } else if (I && V === "m") ((I = !1), (K = !0));
    if (!I && !K) J++;
    if (!JN9.test(V) && q61(V.codePointAt())) {
      if ((J++, typeof Q !== "number")) Y++;
    }
    if (J > B && J <= Y) X += V;
    else if (J === B && !I && W !== void 0) X = WEA(G);
    else if (J >= Y) {
      X += WEA(G, !0, W);
      break;
    }
  }
  return X;
}
function J$1(A, B, Q) {
  if (A.charAt(B) === " ") return B;
  let Z = Q ? 1 : -1;
  for (let G = 0; G <= 3; G++) {
    let Y = B + G * Z;
    if (A.charAt(Y) === " ") return Y;
  }
  return B;
}
function w00(A, B, Q = {}) {
  let { position: Z = "end", space: G = !1, preferTruncationOnSpace: Y = !1 } = Q,
    { truncationCharacter: I = "…" } = Q;
  if (typeof A !== "string") throw new TypeError(`Expected \`input\` to be a string, got ${typeof A}`);
  if (typeof B !== "number") throw new TypeError(`Expected \`columns\` to be a number, got ${typeof B}`);
  if (B < 1) return "";
  if (B === 1) return I;
  let W = J3(A);
  if (W <= B) return A;
  if (Z === "start") {
    if (Y) {
      let J = J$1(A, W - B + 1, !0);
      return I + KL(A, J, W).trim();
    }
    if (G === !0) I += " ";
    return I + KL(A, W - B + J3(I), W);
  }
  if (Z === "middle") {
    if (G === !0) I = ` ${I} `;
    let J = Math.floor(B / 2);
    if (Y) {
      let X = J$1(A, J),
        F = J$1(A, W - (B - J) + 1, !0);
      return KL(A, 0, X) + I + KL(A, F, W).trim();
    }
    return KL(A, 0, J) + I + KL(A, W - (B - J) + J3(I), W);
  }
  if (Z === "end") {
    if (Y) {
      let J = J$1(A, B - 1);
      return KL(A, 0, J) + I;
    }
    if (G === !0) I = ` ${I}`;
    return KL(A, 0, B - J3(I)) + I;
  }
  throw new Error(`Expected \`options.position\` to be either \`start\`, \`middle\` or \`end\`, got ${Z}`);
}
var XEA = {},
  XN9 = (A, B, Q) => {
    let Z = A + String(B) + String(Q),
      G = XEA[Z];
    if (G) return G;
    let Y = A;
    if (Q === "wrap") Y = ca(A, B, { trim: !1, hard: !0 });
    else if (Q === "wrap-trim") Y = ca(A, B, { trim: !0, hard: !0 });
    if (Q.startsWith("truncate")) {
      let I = "end";
      if (Q === "truncate-middle") I = "middle";
      if (Q === "truncate-start") I = "start";
      Y = w00(A, B, { position: I });
    }
    return ((XEA[Z] = Y), Y);
  },
  I_ = XN9;
var FEA = (A) => {
    let B = "";
    for (let Q = 0; Q < A.childNodes.length; Q++) {
      let Z = A.childNodes[Q];
      if (Z === void 0) continue;
      let G = "";
      if (Z.nodeName === "#text") G = Z.nodeValue;
      else {
        if (Z.nodeName === "ink-text" || Z.nodeName === "ink-virtual-text") G = FEA(Z);
        if (G.length > 0 && typeof Z.internal_transform === "function") G = Z.internal_transform(G, Q);
      }
      B += G;
    }
    return B;
  },
  X$1 = FEA;
var F$1 = (A) => {
    let B = {
      nodeName: A,
      style: {},
      attributes: {},
      childNodes: [],
      parentNode: void 0,
      yogaNode: A === "ink-virtual-text" ? void 0 : Z$1.Node.create(),
    };
    if (A === "ink-text") B.yogaNode?.setMeasureFunc(FN9.bind(null, B));
    return B;
  },
  V$1 = (A, B) => {
    if (B.parentNode) E61(B.parentNode, B);
    if (((B.parentNode = A), A.childNodes.push(B), B.yogaNode))
      A.yogaNode?.insertChild(B.yogaNode, A.yogaNode.getChildCount());
    if (A.nodeName === "ink-text" || A.nodeName === "ink-virtual-text") K$1(A);
  },
  q00 = (A, B, Q) => {
    if (B.parentNode) E61(B.parentNode, B);
    B.parentNode = A;
    let Z = A.childNodes.indexOf(Q);
    if (Z >= 0) {
      if ((A.childNodes.splice(Z, 0, B), B.yogaNode)) A.yogaNode?.insertChild(B.yogaNode, Z);
      return;
    }
    if ((A.childNodes.push(B), B.yogaNode)) A.yogaNode?.insertChild(B.yogaNode, A.yogaNode.getChildCount());
    if (A.nodeName === "ink-text" || A.nodeName === "ink-virtual-text") K$1(A);
  },
  E61 = (A, B) => {
    if (B.yogaNode) B.parentNode?.yogaNode?.removeChild(B.yogaNode);
    B.parentNode = void 0;
    let Q = A.childNodes.indexOf(B);
    if (Q >= 0) A.childNodes.splice(Q, 1);
    if (A.nodeName === "ink-text" || A.nodeName === "ink-virtual-text") K$1(A);
  },
  E00 = (A, B, Q) => {
    A.attributes[B] = Q;
  },
  N00 = (A, B) => {
    A.style = B;
  },
  VEA = (A) => {
    let B = { nodeName: "#text", nodeValue: A, yogaNode: void 0, parentNode: void 0, style: {} };
    return (N61(B, A), B);
  },
  FN9 = function (A, B) {
    let Q = A.nodeName === "#text" ? A.nodeValue : X$1(A),
      Z = C00(Q);
    if (Z.width <= B) return Z;
    if (Z.width >= 1 && B > 0 && B < 1) return Z;
    let G = A.style?.textWrap ?? "wrap",
      Y = I_(Q, B, G);
    return C00(Y);
  },
  KEA = (A) => {
    if (!A?.parentNode) return;
    return A.yogaNode ?? KEA(A.parentNode);
  },
  K$1 = (A) => {
    KEA(A)?.markDirty();
  },
  N61 = (A, B) => {
    if (typeof B !== "string") B = String(B);
    ((A.nodeValue = B), K$1(A));
  };
var KN9 = (A, B) => {
    if ("position" in B) A.setPositionType(B.position === "absolute" ? tU1 : oU1);
  },
  HN9 = (A, B) => {
    if ("margin" in B) A.setMargin(w61, B.margin ?? 0);
    if ("marginX" in B) A.setMargin(U61, B.marginX ?? 0);
    if ("marginY" in B) A.setMargin($61, B.marginY ?? 0);
    if ("marginLeft" in B) A.setMargin(bU1, B.marginLeft || 0);
    if ("marginRight" in B) A.setMargin(fU1, B.marginRight || 0);
    if ("marginTop" in B) A.setMargin(G_, B.marginTop || 0);
    if ("marginBottom" in B) A.setMargin(Y_, B.marginBottom || 0);
  },
  zN9 = (A, B) => {
    if ("padding" in B) A.setPadding(w61, B.padding ?? 0);
    if ("paddingX" in B) A.setPadding(U61, B.paddingX ?? 0);
    if ("paddingY" in B) A.setPadding($61, B.paddingY ?? 0);
    if ("paddingLeft" in B) A.setPadding(FL, B.paddingLeft || 0);
    if ("paddingRight" in B) A.setPadding(VL, B.paddingRight || 0);
    if ("paddingTop" in B) A.setPadding(G_, B.paddingTop || 0);
    if ("paddingBottom" in B) A.setPadding(Y_, B.paddingBottom || 0);
  },
  DN9 = (A, B) => {
    if ("flexGrow" in B) A.setFlexGrow(B.flexGrow ?? 0);
    if ("flexShrink" in B) A.setFlexShrink(typeof B.flexShrink === "number" ? B.flexShrink : 1);
    if ("flexWrap" in B) {
      if (B.flexWrap === "nowrap") A.setFlexWrap(eU1);
      if (B.flexWrap === "wrap") A.setFlexWrap(A$1);
      if (B.flexWrap === "wrap-reverse") A.setFlexWrap(B$1);
    }
    if ("flexDirection" in B) {
      if (B.flexDirection === "row") A.setFlexDirection(uU1);
      if (B.flexDirection === "row-reverse") A.setFlexDirection(mU1);
      if (B.flexDirection === "column") A.setFlexDirection(hU1);
      if (B.flexDirection === "column-reverse") A.setFlexDirection(gU1);
    }
    if ("flexBasis" in B)
      if (typeof B.flexBasis === "number") A.setFlexBasis(B.flexBasis);
      else if (typeof B.flexBasis === "string") A.setFlexBasisPercent(Number.parseInt(B.flexBasis, 10));
      else A.setFlexBasis(Number.NaN);
    if ("alignItems" in B) {
      if (B.alignItems === "stretch" || !B.alignItems) A.setAlignItems(vU1);
      if (B.alignItems === "flex-start") A.setAlignItems(z61);
      if (B.alignItems === "center") A.setAlignItems(D61);
      if (B.alignItems === "flex-end") A.setAlignItems(C61);
    }
    if ("alignSelf" in B) {
      if (B.alignSelf === "auto" || !B.alignSelf) A.setAlignSelf(xU1);
      if (B.alignSelf === "flex-start") A.setAlignSelf(z61);
      if (B.alignSelf === "center") A.setAlignSelf(D61);
      if (B.alignSelf === "flex-end") A.setAlignSelf(C61);
    }
    if ("justifyContent" in B) {
      if (B.justifyContent === "flex-start" || !B.justifyContent) A.setJustifyContent(pU1);
      if (B.justifyContent === "center") A.setJustifyContent(iU1);
      if (B.justifyContent === "flex-end") A.setJustifyContent(nU1);
      if (B.justifyContent === "space-between") A.setJustifyContent(aU1);
      if (B.justifyContent === "space-around") A.setJustifyContent(sU1);
      if (B.justifyContent === "space-evenly") A.setJustifyContent(rU1);
    }
  },
  CN9 = (A, B) => {
    if ("width" in B)
      if (typeof B.width === "number") A.setWidth(B.width);
      else if (typeof B.width === "string") A.setWidthPercent(Number.parseInt(B.width, 10));
      else A.setWidthAuto();
    if ("height" in B)
      if (typeof B.height === "number") A.setHeight(B.height);
      else if (typeof B.height === "string") A.setHeightPercent(Number.parseInt(B.height, 10));
      else A.setHeightAuto();
    if ("minWidth" in B)
      if (typeof B.minWidth === "string") A.setMinWidthPercent(Number.parseInt(B.minWidth, 10));
      else A.setMinWidth(B.minWidth ?? 0);
    if ("minHeight" in B)
      if (typeof B.minHeight === "string") A.setMinHeightPercent(Number.parseInt(B.minHeight, 10));
      else A.setMinHeight(B.minHeight ?? 0);
  },
  UN9 = (A, B) => {
    if ("display" in B) A.setDisplay(B.display === "flex" ? ma : Z_);
  },
  $N9 = (A, B) => {
    if ("borderStyle" in B) {
      let Q = B.borderStyle ? 1 : 0;
      if (B.borderTop !== !1) A.setBorder(G_, Q);
      if (B.borderBottom !== !1) A.setBorder(Y_, Q);
      if (B.borderLeft !== !1) A.setBorder(FL, Q);
      if (B.borderRight !== !1) A.setBorder(VL, Q);
    }
  },
  wN9 = (A, B) => {
    if ("gap" in B) A.setGap(lU1, B.gap ?? 0);
    if ("columnGap" in B) A.setGap(dU1, B.columnGap ?? 0);
    if ("rowGap" in B) A.setGap(cU1, B.rowGap ?? 0);
  },
  qN9 = (A, B = {}) => {
    (KN9(A, B), HN9(A, B), zN9(A, B), DN9(A, B), CN9(A, B), UN9(A, B), $N9(A, B), wN9(A, B));
  },
  L00 = qN9;
if (process.env.DEV === "true")
  try {
    Promise.resolve().then(() => $NA());
  } catch (A) {
    if (A.code === "ERR_MODULE_NOT_FOUND")
      console.warn(
        `
The environment variable DEV is set to true, so Ink tried to import \`react-devtools-core\`,
but this failed as it was not installed. Debugging with React Devtools requires it.

To install use this command:

$ npm install --save-dev react-devtools-core
				`.trim() +
          `
`,
      );
    else throw A;
  }
var wNA = (A, B) => {
    if (A === B) return;
    if (!A) return B;
    let Q = {},
      Z = !1;
    for (let G of Object.keys(A)) if (B ? !Object.hasOwn(B, G) : !0) ((Q[G] = void 0), (Z = !0));
    if (B) {
      for (let G of Object.keys(B)) if (B[G] !== A[G]) ((Q[G] = B[G]), (Z = !0));
    }
    return Z ? Q : void 0;
  },
  qNA = (A) => {
    (A?.unsetMeasureFunc(), A?.freeRecursive());
  },
  Zu = ENA.default({
    getRootHostContext: () => ({ isInsideText: !1 }),
    prepareForCommit: () => null,
    preparePortalMount: () => null,
    clearContainer: () => !1,
    resetAfterCommit(A) {
      if (typeof A.onComputeLayout === "function") A.onComputeLayout();
      if (A.isStaticDirty) {
        if (((A.isStaticDirty = !1), typeof A.onImmediateRender === "function")) A.onImmediateRender();
        return;
      }
      if (typeof A.onRender === "function") A.onRender();
    },
    getChildHostContext(A, B) {
      let Q = A.isInsideText,
        Z = B === "ink-text" || B === "ink-virtual-text";
      if (Q === Z) return A;
      return { isInsideText: Z };
    },
    shouldSetTextContent: () => !1,
    createInstance(A, B, Q, Z) {
      if (Z.isInsideText && A === "ink-box") throw new Error("<Box> can’t be nested inside <Text> component");
      let G = A === "ink-text" && Z.isInsideText ? "ink-virtual-text" : A,
        Y = F$1(G);
      for (let [I, W] of Object.entries(B)) {
        if (I === "children") continue;
        if (I === "style") {
          if ((N00(Y, W), Y.yogaNode)) L00(Y.yogaNode, W);
          continue;
        }
        if (I === "internal_transform") {
          Y.internal_transform = W;
          continue;
        }
        if (I === "internal_static") {
          Y.internal_static = !0;
          continue;
        }
        E00(Y, I, W);
      }
      return Y;
    },
    createTextInstance(A, B, Q) {
      if (!Q.isInsideText) throw new Error(`Text string "${A}" must be rendered inside <Text> component`);
      return VEA(A);
    },
    resetTextContent() {},
    hideTextInstance(A) {
      N61(A, "");
    },
    unhideTextInstance(A, B) {
      N61(A, B);
    },
    getPublicInstance: (A) => A,
    hideInstance(A) {
      A.yogaNode?.setDisplay(Z_);
    },
    unhideInstance(A) {
      A.yogaNode?.setDisplay(ma);
    },
    appendInitialChild: V$1,
    appendChild: V$1,
    insertBefore: q00,
    finalizeInitialChildren(A, B, Q, Z) {
      if (A.internal_static) ((Z.isStaticDirty = !0), (Z.staticNode = A));
      return !1;
    },
    isPrimaryRenderer: !0,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    getCurrentEventPriority: () => z00,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    getInstanceFromNode: () => null,
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    appendChildToContainer: V$1,
    insertInContainerBefore: q00,
    removeChildFromContainer(A, B) {
      (E61(A, B), qNA(B.yogaNode));
    },
    prepareUpdate(A, B, Q, Z, G) {
      if (A.internal_static) G.isStaticDirty = !0;
      let Y = wNA(Q, Z),
        I = wNA(Q.style, Z.style);
      if (!Y && !I) return null;
      return { props: Y, style: I };
    },
    commitUpdate(A, B) {
      let { props: Q, style: Z } = B;
      if (Q)
        for (let [G, Y] of Object.entries(Q)) {
          if (G === "style") {
            N00(A, Y);
            continue;
          }
          if (G === "internal_transform") {
            A.internal_transform = Y;
            continue;
          }
          if (G === "internal_static") {
            A.internal_static = !0;
            continue;
          }
          E00(A, G, Y);
        }
      if (Z && A.yogaNode) L00(A.yogaNode, Z);
    },
    commitTextUpdate(A, B, Q) {
      N61(A, Q);
    },
    removeChild(A, B) {
      (E61(A, B), qNA(B.yogaNode));
    },
  });
function g00(A, B = 1, Q = {}) {
  let { indent: Z = " ", includeEmptyLines: G = !1 } = Q;
  if (typeof A !== "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof A}\``);
  if (typeof B !== "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof B}\``);
  if (B < 0) throw new RangeError(`Expected \`count\` to be at least 0, got \`${B}\``);
  if (typeof Z !== "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof Z}\``);
  if (B === 0) return A;
  let Y = G ? /^/gm : /^(?!\s*$)/gm;
  return A.replace(Y, Z.repeat(B));
}
var cL9 = (A) => {
    return (
      A.getComputedWidth() -
      A.getComputedPadding(FL) -
      A.getComputedPadding(VL) -
      A.getComputedBorder(FL) -
      A.getComputedBorder(VL)
    );
  },
  NNA = cL9;
var TNA = A1(ONA(), 1);
var pL9 = {
    autoAccept: "rgb(135,0,255)",
    bashBorder: "rgb(255,0,135)",
    claude: "rgb(215,119,87)",
    claudeShimmer: "rgb(245,149,117)",
    claudeBlue_FOR_SYSTEM_SPINNER: "rgb(87,105,247)",
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(117,135,255)",
    permission: "rgb(87,105,247)",
    permissionShimmer: "rgb(137,155,255)",
    planMode: "rgb(0,102,102)",
    ide: "rgb(71,130,200)",
    promptBorder: "rgb(153,153,153)",
    promptBorderShimmer: "rgb(183,183,183)",
    text: "rgb(0,0,0)",
    inverseText: "rgb(255,255,255)",
    inactive: "rgb(102,102,102)",
    suggestion: "rgb(87,105,247)",
    remember: "rgb(0,0,255)",
    background: "rgb(0,153,153)",
    success: "rgb(44,122,57)",
    error: "rgb(171,43,63)",
    warning: "rgb(150,108,30)",
    warningShimmer: "rgb(200,158,80)",
    diffAdded: "rgb(105,219,124)",
    diffRemoved: "rgb(255,168,180)",
    diffAddedDimmed: "rgb(199,225,203)",
    diffRemovedDimmed: "rgb(253,210,216)",
    diffAddedWord: "rgb(47,157,68)",
    diffRemovedWord: "rgb(209,69,75)",
    diffAddedWordDimmed: "rgb(144,194,156)",
    diffRemovedWordDimmed: "rgb(232,165,173)",
    red_FOR_SUBAGENTS_ONLY: "rgb(220,38,38)",
    blue_FOR_SUBAGENTS_ONLY: "rgb(37,99,235)",
    green_FOR_SUBAGENTS_ONLY: "rgb(22,163,74)",
    yellow_FOR_SUBAGENTS_ONLY: "rgb(202,138,4)",
    purple_FOR_SUBAGENTS_ONLY: "rgb(147,51,234)",
    orange_FOR_SUBAGENTS_ONLY: "rgb(234,88,12)",
    pink_FOR_SUBAGENTS_ONLY: "rgb(219,39,119)",
    cyan_FOR_SUBAGENTS_ONLY: "rgb(8,145,178)",
    professionalBlue: "rgb(106,155,204)",
    rainbow_red: "rgb(235,95,87)",
    rainbow_orange: "rgb(245,139,87)",
    rainbow_yellow: "rgb(250,195,95)",
    rainbow_green: "rgb(145,200,130)",
    rainbow_blue: "rgb(130,170,220)",
    rainbow_indigo: "rgb(155,130,200)",
    rainbow_violet: "rgb(200,130,180)",
    rainbow_red_shimmer: "rgb(250,155,147)",
    rainbow_orange_shimmer: "rgb(255,185,137)",
    rainbow_yellow_shimmer: "rgb(255,225,155)",
    rainbow_green_shimmer: "rgb(185,230,180)",
    rainbow_blue_shimmer: "rgb(180,205,240)",
    rainbow_indigo_shimmer: "rgb(195,180,230)",
    rainbow_violet_shimmer: "rgb(230,180,210)",
  },
  iL9 = {
    autoAccept: "#cd00cd",
    bashBorder: "#cd00cd",
    claude: "#cdcd00",
    claudeShimmer: "#ffff00",
    claudeBlue_FOR_SYSTEM_SPINNER: "#0000ee",
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: "#5c5cff",
    permission: "#0000ee",
    permissionShimmer: "#5c5cff",
    planMode: "#00cdcd",
    ide: "#4782C8",
    promptBorder: "#e5e5e5",
    promptBorderShimmer: "#ffffff",
    text: "#000000",
    inverseText: "#ffffff",
    inactive: "#7f7f7f",
    suggestion: "#0000ee",
    remember: "#0000ee",
    background: "#00cdcd",
    success: "#00cd00",
    error: "#cd0000",
    warning: "#cdcd00",
    warningShimmer: "#ffff00",
    diffAdded: "#00cd00",
    diffRemoved: "#cd0000",
    diffAddedDimmed: "#00cd00",
    diffRemovedDimmed: "#cd0000",
    diffAddedWord: "#00ff00",
    diffRemovedWord: "#ff0000",
    diffAddedWordDimmed: "#00cd00",
    diffRemovedWordDimmed: "#cd0000",
    red_FOR_SUBAGENTS_ONLY: "#cd0000",
    blue_FOR_SUBAGENTS_ONLY: "#0000cd",
    green_FOR_SUBAGENTS_ONLY: "#00cd00",
    yellow_FOR_SUBAGENTS_ONLY: "#cdcd00",
    purple_FOR_SUBAGENTS_ONLY: "#cd00cd",
    orange_FOR_SUBAGENTS_ONLY: "#cd8500",
    pink_FOR_SUBAGENTS_ONLY: "#ff1493",
    cyan_FOR_SUBAGENTS_ONLY: "#00cdcd",
    professionalBlue: "rgb(106,155,204)",
    rainbow_red: "rgb(235,95,87)",
    rainbow_orange: "rgb(245,139,87)",
    rainbow_yellow: "rgb(250,195,95)",
    rainbow_green: "rgb(145,200,130)",
    rainbow_blue: "rgb(130,170,220)",
    rainbow_indigo: "rgb(155,130,200)",
    rainbow_violet: "rgb(200,130,180)",
    rainbow_red_shimmer: "rgb(250,155,147)",
    rainbow_orange_shimmer: "rgb(255,185,137)",
    rainbow_yellow_shimmer: "rgb(255,225,155)",
    rainbow_green_shimmer: "rgb(185,230,180)",
    rainbow_blue_shimmer: "rgb(180,205,240)",
    rainbow_indigo_shimmer: "rgb(195,180,230)",
    rainbow_violet_shimmer: "rgb(230,180,210)",
  },
  nL9 = {
    autoAccept: "#ff00ff",
    bashBorder: "#ff00ff",
    claude: "#cdcd00",
    claudeShimmer: "#ffff00",
    claudeBlue_FOR_SYSTEM_SPINNER: "#5c5cff",
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: "#8c8cff",
    permission: "#5c5cff",
    permissionShimmer: "#8c8cff",
    planMode: "#00ffff",
    ide: "#4782c8",
    promptBorder: "#e5e5e5",
    promptBorderShimmer: "#ffffff",
    text: "#ffffff",
    inverseText: "#000000",
    inactive: "#e5e5e5",
    suggestion: "#5c5cff",
    remember: "#5c5cff",
    background: "#00ffff",
    success: "#00ff00",
    error: "#ff0000",
    warning: "#ffff00",
    warningShimmer: "#ffff7f",
    diffAdded: "#00cd00",
    diffRemoved: "#cd0000",
    diffAddedDimmed: "#00cd00",
    diffRemovedDimmed: "#cd0000",
    diffAddedWord: "#00ff00",
    diffRemovedWord: "#ff0000",
    diffAddedWordDimmed: "#00cd00",
    diffRemovedWordDimmed: "#cd0000",
    red_FOR_SUBAGENTS_ONLY: "#ff0000",
    blue_FOR_SUBAGENTS_ONLY: "#0000ff",
    green_FOR_SUBAGENTS_ONLY: "#00ff00",
    yellow_FOR_SUBAGENTS_ONLY: "#ffff00",
    purple_FOR_SUBAGENTS_ONLY: "#ff00ff",
    orange_FOR_SUBAGENTS_ONLY: "#ff8700",
    pink_FOR_SUBAGENTS_ONLY: "#ff69b4",
    cyan_FOR_SUBAGENTS_ONLY: "#00ffff",
    professionalBlue: "rgb(106,155,204)",
    rainbow_red: "rgb(235,95,87)",
    rainbow_orange: "rgb(245,139,87)",
    rainbow_yellow: "rgb(250,195,95)",
    rainbow_green: "rgb(145,200,130)",
    rainbow_blue: "rgb(130,170,220)",
    rainbow_indigo: "rgb(155,130,200)",
    rainbow_violet: "rgb(200,130,180)",
    rainbow_red_shimmer: "rgb(250,155,147)",
    rainbow_orange_shimmer: "rgb(255,185,137)",
    rainbow_yellow_shimmer: "rgb(255,225,155)",
    rainbow_green_shimmer: "rgb(185,230,180)",
    rainbow_blue_shimmer: "rgb(180,205,240)",
    rainbow_indigo_shimmer: "rgb(195,180,230)",
    rainbow_violet_shimmer: "rgb(230,180,210)",
  },
  aL9 = {
    autoAccept: "rgb(135,0,255)",
    bashBorder: "rgb(0,102,204)",
    claude: "rgb(255,153,51)",
    claudeShimmer: "rgb(255,183,101)",
    claudeBlue_FOR_SYSTEM_SPINNER: "rgb(51,102,255)",
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(101,152,255)",
    permission: "rgb(51,102,255)",
    permissionShimmer: "rgb(101,152,255)",
    planMode: "rgb(51,102,102)",
    ide: "rgb(71,130,200)",
    promptBorder: "rgb(153,153,153)",
    promptBorderShimmer: "rgb(183,183,183)",
    text: "rgb(0,0,0)",
    inverseText: "rgb(255,255,255)",
    inactive: "rgb(102,102,102)",
    suggestion: "rgb(51,102,255)",
    remember: "rgb(51,102,255)",
    background: "rgb(0,153,153)",
    success: "rgb(0,102,153)",
    error: "rgb(204,0,0)",
    warning: "rgb(255,153,0)",
    warningShimmer: "rgb(255,183,50)",
    diffAdded: "rgb(153,204,255)",
    diffRemoved: "rgb(255,204,204)",
    diffAddedDimmed: "rgb(209,231,253)",
    diffRemovedDimmed: "rgb(255,233,233)",
    diffAddedWord: "rgb(51,102,204)",
    diffRemovedWord: "rgb(153,51,51)",
    diffAddedWordDimmed: "rgb(102,153,204)",
    diffRemovedWordDimmed: "rgb(204,153,153)",
    red_FOR_SUBAGENTS_ONLY: "rgb(204,0,0)",
    blue_FOR_SUBAGENTS_ONLY: "rgb(0,102,204)",
    green_FOR_SUBAGENTS_ONLY: "rgb(0,204,0)",
    yellow_FOR_SUBAGENTS_ONLY: "rgb(255,204,0)",
    purple_FOR_SUBAGENTS_ONLY: "rgb(128,0,128)",
    orange_FOR_SUBAGENTS_ONLY: "rgb(255,128,0)",
    pink_FOR_SUBAGENTS_ONLY: "rgb(255,102,178)",
    cyan_FOR_SUBAGENTS_ONLY: "rgb(0,178,178)",
    professionalBlue: "rgb(106,155,204)",
    rainbow_red: "rgb(235,95,87)",
    rainbow_orange: "rgb(245,139,87)",
    rainbow_yellow: "rgb(250,195,95)",
    rainbow_green: "rgb(145,200,130)",
    rainbow_blue: "rgb(130,170,220)",
    rainbow_indigo: "rgb(155,130,200)",
    rainbow_violet: "rgb(200,130,180)",
    rainbow_red_shimmer: "rgb(250,155,147)",
    rainbow_orange_shimmer: "rgb(255,185,137)",
    rainbow_yellow_shimmer: "rgb(255,225,155)",
    rainbow_green_shimmer: "rgb(185,230,180)",
    rainbow_blue_shimmer: "rgb(180,205,240)",
    rainbow_indigo_shimmer: "rgb(195,180,230)",
    rainbow_violet_shimmer: "rgb(230,180,210)",
  },
  sL9 = {
    autoAccept: "rgb(175,135,255)",
    bashBorder: "rgb(253,93,177)",
    claude: "rgb(215,119,87)",
    claudeShimmer: "rgb(235,159,127)",
    claudeBlue_FOR_SYSTEM_SPINNER: "rgb(147,165,255)",
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(177,195,255)",
    permission: "rgb(177,185,249)",
    permissionShimmer: "rgb(207,215,255)",
    planMode: "rgb(72,150,140)",
    ide: "rgb(71,130,200)",
    promptBorder: "rgb(136,136,136)",
    promptBorderShimmer: "rgb(166,166,166)",
    text: "rgb(255,255,255)",
    inverseText: "rgb(0,0,0)",
    inactive: "rgb(153,153,153)",
    suggestion: "rgb(177,185,249)",
    remember: "rgb(177,185,249)",
    background: "rgb(0,204,204)",
    success: "rgb(78,186,101)",
    error: "rgb(255,107,128)",
    warning: "rgb(255,193,7)",
    warningShimmer: "rgb(255,223,57)",
    diffAdded: "rgb(34,92,43)",
    diffRemoved: "rgb(122,41,54)",
    diffAddedDimmed: "rgb(71,88,74)",
    diffRemovedDimmed: "rgb(105,72,77)",
    diffAddedWord: "rgb(56,166,96)",
    diffRemovedWord: "rgb(179,89,107)",
    diffAddedWordDimmed: "rgb(46,107,58)",
    diffRemovedWordDimmed: "rgb(139,57,69)",
    red_FOR_SUBAGENTS_ONLY: "rgb(220,38,38)",
    blue_FOR_SUBAGENTS_ONLY: "rgb(37,99,235)",
    green_FOR_SUBAGENTS_ONLY: "rgb(22,163,74)",
    yellow_FOR_SUBAGENTS_ONLY: "rgb(202,138,4)",
    purple_FOR_SUBAGENTS_ONLY: "rgb(147,51,234)",
    orange_FOR_SUBAGENTS_ONLY: "rgb(234,88,12)",
    pink_FOR_SUBAGENTS_ONLY: "rgb(219,39,119)",
    cyan_FOR_SUBAGENTS_ONLY: "rgb(8,145,178)",
    professionalBlue: "rgb(106,155,204)",
    rainbow_red: "rgb(235,95,87)",
    rainbow_orange: "rgb(245,139,87)",
    rainbow_yellow: "rgb(250,195,95)",
    rainbow_green: "rgb(145,200,130)",
    rainbow_blue: "rgb(130,170,220)",
    rainbow_indigo: "rgb(155,130,200)",
    rainbow_violet: "rgb(200,130,180)",
    rainbow_red_shimmer: "rgb(250,155,147)",
    rainbow_orange_shimmer: "rgb(255,185,137)",
    rainbow_yellow_shimmer: "rgb(255,225,155)",
    rainbow_green_shimmer: "rgb(185,230,180)",
    rainbow_blue_shimmer: "rgb(180,205,240)",
    rainbow_indigo_shimmer: "rgb(195,180,230)",
    rainbow_violet_shimmer: "rgb(230,180,210)",
  },
  rL9 = {
    autoAccept: "rgb(175,135,255)",
    bashBorder: "rgb(51,153,255)",
    claude: "rgb(255,153,51)",
    claudeShimmer: "rgb(255,183,101)",
    claudeBlue_FOR_SYSTEM_SPINNER: "rgb(153,204,255)",
    claudeBlueShimmer_FOR_SYSTEM_SPINNER: "rgb(183,224,255)",
    permission: "rgb(153,204,255)",
    permissionShimmer: "rgb(183,224,255)",
    planMode: "rgb(102,153,153)",
    ide: "rgb(71,130,200)",
    promptBorder: "rgb(136,136,136)",
    promptBorderShimmer: "rgb(166,166,166)",
    text: "rgb(255,255,255)",
    inverseText: "rgb(0,0,0)",
    inactive: "rgb(153,153,153)",
    suggestion: "rgb(153,204,255)",
    remember: "rgb(153,204,255)",
    background: "rgb(0,204,204)",
    success: "rgb(51,153,255)",
    error: "rgb(255,102,102)",
    warning: "rgb(255,204,0)",
    warningShimmer: "rgb(255,234,50)",
    diffAdded: "rgb(0,68,102)",
    diffRemoved: "rgb(102,0,0)",
    diffAddedDimmed: "rgb(62,81,91)",
    diffRemovedDimmed: "rgb(62,44,44)",
    diffAddedWord: "rgb(0,119,179)",
    diffRemovedWord: "rgb(179,0,0)",
    diffAddedWordDimmed: "rgb(26,99,128)",
    diffRemovedWordDimmed: "rgb(128,21,21)",
    red_FOR_SUBAGENTS_ONLY: "rgb(255,102,102)",
    blue_FOR_SUBAGENTS_ONLY: "rgb(102,178,255)",
    green_FOR_SUBAGENTS_ONLY: "rgb(102,255,102)",
    yellow_FOR_SUBAGENTS_ONLY: "rgb(255,255,102)",
    purple_FOR_SUBAGENTS_ONLY: "rgb(178,102,255)",
    orange_FOR_SUBAGENTS_ONLY: "rgb(255,178,102)",
    pink_FOR_SUBAGENTS_ONLY: "rgb(255,153,204)",
    cyan_FOR_SUBAGENTS_ONLY: "rgb(102,204,204)",
    professionalBlue: "rgb(106,155,204)",
    rainbow_red: "rgb(235,95,87)",
    rainbow_orange: "rgb(245,139,87)",
    rainbow_yellow: "rgb(250,195,95)",
    rainbow_green: "rgb(145,200,130)",
    rainbow_blue: "rgb(130,170,220)",
    rainbow_indigo: "rgb(155,130,200)",
    rainbow_violet: "rgb(200,130,180)",
    rainbow_red_shimmer: "rgb(250,155,147)",
    rainbow_orange_shimmer: "rgb(255,185,137)",
    rainbow_yellow_shimmer: "rgb(255,225,155)",
    rainbow_green_shimmer: "rgb(185,230,180)",
    rainbow_blue_shimmer: "rgb(180,205,240)",
    rainbow_indigo_shimmer: "rgb(195,180,230)",
    rainbow_violet_shimmer: "rgb(230,180,210)",
  };
function RNA(A) {
  switch (A) {
    case "light":
      return pL9;
    case "light-ansi":
      return iL9;
    case "dark-ansi":
      return nL9;
    case "light-daltonized":
      return aL9;
    case "dark-daltonized":
      return rL9;
    default:
      return sL9;
  }
}
var oL9 = /^rgb\(\s?(\d+),\s?(\d+),\s?(\d+)\s?\)$/,
  tL9 = /^ansi256\(\s?(\d+)\s?\)$/,
  eL9 = (A, B, Q) => {
    if (!B) return A;
    if (B.startsWith("#")) return Q === "foreground" ? n1.hex(B)(A) : n1.bgHex(B)(A);
    if (B.startsWith("ansi256")) {
      let Z = tL9.exec(B);
      if (!Z) return A;
      let G = Number(Z[1]);
      return Q === "foreground" ? n1.ansi256(G)(A) : n1.bgAnsi256(G)(A);
    }
    if (B.startsWith("rgb")) {
      let Z = oL9.exec(B);
      if (!Z) return A;
      let G = Number(Z[1]),
        Y = Number(Z[2]),
        I = Number(Z[3]);
      return Q === "foreground" ? n1.rgb(G, Y, I)(A) : n1.bgRgb(G, Y, I)(A);
    }
    return A;
  };
function iB(A, B, Q = "foreground") {
  return (Z) => eL9(Z, A ? RNA(B)[A] : void 0, Q);
}
var AM9 = {
    dashed: {
      top: "╌",
      left: "╎",
      right: "╎",
      bottom: "╌",
      topLeft: " ",
      topRight: " ",
      bottomLeft: " ",
      bottomRight: " ",
    },
  },
  BM9 = (A, B, Q, Z, G) => {
    if (Q.style.borderStyle) {
      let Y = Q.yogaNode.getComputedWidth(),
        I = Q.yogaNode.getComputedHeight(),
        W =
          typeof Q.style.borderStyle === "string"
            ? (AM9[Q.style.borderStyle] ?? TNA.default[Q.style.borderStyle])
            : Q.style.borderStyle,
        J = Q.style.borderTopColor ?? Q.style.borderColor,
        X = Q.style.borderBottomColor ?? Q.style.borderColor,
        F = Q.style.borderLeftColor ?? Q.style.borderColor,
        V = Q.style.borderRightColor ?? Q.style.borderColor,
        K = Q.style.borderTopDimColor ?? Q.style.borderDimColor,
        H = Q.style.borderBottomDimColor ?? Q.style.borderDimColor,
        z = Q.style.borderLeftDimColor ?? Q.style.borderDimColor,
        D = Q.style.borderRightDimColor ?? Q.style.borderDimColor,
        C = Q.style.borderTop !== !1,
        w = Q.style.borderBottom !== !1,
        E = Q.style.borderLeft !== !1,
        L = Q.style.borderRight !== !1,
        O = Y - (E ? 1 : 0) - (L ? 1 : 0),
        R = C ? iB(J, G)((E ? W.topLeft : "") + W.top.repeat(O) + (L ? W.topRight : "")) : void 0;
      if (C && K) R = n1.dim(R);
      let P = I;
      if (C) P -= 1;
      if (w) P -= 1;
      let _ = (
        iB(F, G)(W.left) +
        `
`
      ).repeat(P);
      if (z) _ = n1.dim(_);
      let b = (
        iB(V, G)(W.right) +
        `
`
      ).repeat(P);
      if (D) b = n1.dim(b);
      let S = w ? iB(X, G)((E ? W.bottomLeft : "") + W.bottom.repeat(O) + (L ? W.bottomRight : "")) : void 0;
      if (w && H) S = n1.dim(S);
      let d = C ? 1 : 0;
      if (R) Z.write(A, B, R, { transformers: [] });
      if (E) Z.write(A, B + d, _, { transformers: [] });
      if (L) Z.write(A + Y - 1, B + d, b, { transformers: [] });
      if (S) Z.write(A, B + I - 1, S, { transformers: [] });
    }
  },
  PNA = BM9;
var QM9 = (A, B) => {
    let Q = A.childNodes[0]?.yogaNode;
    if (Q) {
      let Z = Q.getComputedLeft(),
        G = Q.getComputedTop();
      B =
        `
`.repeat(G) + g00(B, Z);
    }
    return B;
  },
  jNA = (A, B, { offsetX: Q = 0, offsetY: Z = 0, transformers: G = [], skipStaticElements: Y, theme: I }) => {
    if (Y && A.internal_static) return;
    let { yogaNode: W } = A;
    if (W) {
      if (W.getDisplay() === Z_) return;
      let J = Q + W.getComputedLeft(),
        X = Z + W.getComputedTop(),
        F = G;
      if (typeof A.internal_transform === "function") F = [A.internal_transform, ...G];
      if (A.nodeName === "ink-text") {
        let K = X$1(A);
        if (K.length > 0) {
          let H = da(K),
            z = NNA(W);
          if (H > z) {
            let D = A.style.textWrap ?? "wrap";
            K = I_(K, z, D);
          }
          ((K = QM9(A, K)), B.write(J, X, K, { transformers: F }));
        }
        return;
      }
      let V = !1;
      if (A.nodeName === "ink-box") {
        PNA(J, X, A, B, I);
        let K = A.style.overflowX === "hidden" || A.style.overflow === "hidden",
          H = A.style.overflowY === "hidden" || A.style.overflow === "hidden";
        if (K || H) {
          let z = K ? J + W.getComputedBorder(FL) : void 0,
            D = K ? J + W.getComputedWidth() - W.getComputedBorder(VL) : void 0,
            C = H ? X + W.getComputedBorder(G_) : void 0,
            w = H ? X + W.getComputedHeight() - W.getComputedBorder(Y_) : void 0;
          (B.clip({ x1: z, x2: D, y1: C, y2: w }), (V = !0));
        }
      }
      if (A.nodeName === "ink-root" || A.nodeName === "ink-box") {
        for (let K of A.childNodes)
          jNA(K, B, { offsetX: J, offsetY: X, transformers: F, skipStaticElements: Y, theme: I });
        if (V) B.unclip();
      }
    }
  },
  m00 = jNA;
function d00(A) {
  if (!Number.isInteger(A)) return !1;
  return G$1(A) === 2;
}
var ZM9 = new Set([27, 155]),
  GM9 = "0".codePointAt(0),
  YM9 = "9".codePointAt(0),
  l00 = new Set(),
  c00 = new Map();
for (let [A, B] of $Z.codes) (l00.add($Z.color.ansi(B)), c00.set($Z.color.ansi(A), $Z.color.ansi(B)));
function IM9(A) {
  if (l00.has(A)) return A;
  if (c00.has(A)) return c00.get(A);
  if (((A = A.slice(2)), A.includes(";"))) A = A[0] + "0";
  let B = $Z.codes.get(Number.parseInt(A, 10));
  if (B) return $Z.color.ansi(B);
  return $Z.reset.open;
}
function WM9(A) {
  for (let B = 0; B < A.length; B++) {
    let Q = A.codePointAt(B);
    if (Q >= GM9 && Q <= YM9) return B;
  }
  return -1;
}
function JM9(A, B) {
  A = A.slice(B, B + 19);
  let Q = WM9(A);
  if (Q !== -1) {
    let Z = A.indexOf("m", Q);
    if (Z === -1) Z = A.length;
    return A.slice(0, Z + 1);
  }
}
function XM9(A, B = Number.POSITIVE_INFINITY) {
  let Q = [],
    Z = 0,
    G = 0;
  while (Z < A.length) {
    let Y = A.codePointAt(Z);
    if (ZM9.has(Y)) {
      let J = JM9(A, Z);
      if (J) {
        (Q.push({ type: "ansi", code: J, endCode: IM9(J) }), (Z += J.length));
        continue;
      }
    }
    let I = d00(Y),
      W = String.fromCodePoint(Y);
    if ((Q.push({ type: "character", value: W, isFullWidth: I }), (Z += W.length), (G += I ? 2 : W.length), G >= B))
      break;
  }
  return Q;
}
function SNA(A) {
  let B = [];
  for (let Q of A)
    if (Q.code === $Z.reset.open) B = [];
    else if (l00.has(Q.code)) B = B.filter((Z) => Z.endCode !== Q.code);
    else ((B = B.filter((Z) => Z.endCode !== Q.endCode)), B.push(Q));
  return B;
}
function FM9(A) {
  return SNA(A)
    .map(({ endCode: Z }) => Z)
    .reverse()
    .join("");
}
function p00(A, B, Q) {
  let Z = XM9(A, Q),
    G = [],
    Y = 0,
    I = "",
    W = !1;
  for (let J of Z) {
    if (Q !== void 0 && Y >= Q) break;
    if (J.type === "ansi") {
      if ((G.push(J), W)) I += J.code;
    } else {
      if (!W && Y >= B) ((W = !0), (G = SNA(G)), (I = G.map(({ code: X }) => X).join("")));
      if (W) I += J.value;
      Y += J.isFullWidth ? 2 : J.value.length;
    }
  }
  return ((I += FM9(G)), I);
}
var yNA = new Set([27, 155]),
  P$1 = new Set(),
  i00 = new Map();
for (let [A, B] of $Z.codes) (P$1.add($Z.color.ansi(B)), i00.set($Z.color.ansi(A), $Z.color.ansi(B)));
var HYPERLINK_START = "\x1B]8;;",
  n00 = HYPERLINK_START.split("").map((A) => A.charCodeAt(0)),
  kNA = "\x07",
  ty8 = kNA.charCodeAt(0),
  VM9 = `\x1B]8;;${kNA}`;
function _NA(A) {
  if (P$1.has(A)) return A;
  if (i00.has(A)) return i00.get(A);
  if (A.startsWith(HYPERLINK_START)) return VM9;
  if (((A = A.slice(2)), A.includes(";"))) A = A[0] + "0";
  let B = $Z.codes.get(parseInt(A, 10));
  if (B) return $Z.color.ansi(B);
  else return $Z.reset.open;
}
function k61(A) {
  return A.map((B) => B.code).join("");
}
function a00(A) {
  return S$1([], A);
}
function S$1(A, B) {
  let Q = [...A];
  for (let Z of B)
    if (Z.code === $Z.reset.open) Q = [];
    else if (P$1.has(Z.code)) Q = Q.filter((G) => G.endCode !== Z.code);
    else ((Q = Q.filter((G) => G.endCode !== Z.endCode)), Q.push(Z));
  return Q;
}
function s00(A) {
  return a00(A)
    .reverse()
    .map((B) => ({ ...B, code: B.endCode }));
}
function y$1(A, B) {
  let Q = new Set(B.map((G) => G.endCode)),
    Z = new Set(A.map((G) => G.code));
  return [...s00(A.filter((G) => !Q.has(G.endCode))), ...B.filter((G) => !Z.has(G.code))];
}
function xNA(A) {
  let B = [],
    Q = [];
  for (let Z of A)
    if (Z.type === "ansi") B = S$1(B, [Z]);
    else if (Z.type === "char") Q.push({ ...Z, styles: [...B] });
  return Q;
}
function vNA(A) {
  let B = "";
  for (let Q = 0; Q < A.length; Q++) {
    let Z = A[Q];
    if (Q === 0) B += k61(Z.styles);
    else B += k61(y$1(A[Q - 1].styles, Z.styles));
    if (((B += Z.value), Q === A.length - 1)) B += k61(y$1(Z.styles, []));
  }
  return B;
}
function KM9(A) {
  for (let B = 0; B < A.length; B++) {
    let Q = A.charCodeAt(B);
    if (Q >= 48 && Q <= 57) return B;
  }
  return -1;
}
function HM9(A, B) {
  A = A.slice(B);
  for (let Z = 1; Z < n00.length; Z++) if (A.charCodeAt(Z) !== n00[Z]) return;
  let Q = A.indexOf("\x07", HYPERLINK_START.length);
  if (Q === -1) return;
  return A.slice(0, Q + 1);
}
function zM9(A, B) {
  A = A.slice(B, B + 19);
  let Q = KM9(A);
  if (Q !== -1) {
    let Z = A.indexOf("m", Q);
    if (Z === -1) Z = A.length;
    return A.slice(0, Z + 1);
  }
}
function bNA(A, B = Number.POSITIVE_INFINITY) {
  let Q = [],
    Z = 0,
    G = 0;
  while (Z < A.length) {
    let Y = A.codePointAt(Z);
    if (yNA.has(Y)) {
      let J = HM9(A, Z) || zM9(A, Z);
      if (J) {
        (Q.push({ type: "ansi", code: J, endCode: _NA(J) }), (Z += J.length));
        continue;
      }
    }
    let I = q61(Y),
      W = String.fromCodePoint(Y);
    if ((Q.push({ type: "char", value: W, fullWidth: I }), (Z += W.length), (G += I ? 2 : W.length), G >= B)) break;
  }
  return Q;
}
class _61 {
  width;
  height;
  operations = [];
  charCache = {};
  styledCharsToStringCache = {};
  constructor(A) {
    let { width: B, height: Q } = A;
    ((this.width = B), (this.height = Q));
  }
  write(A, B, Q, Z) {
    let { transformers: G } = Z;
    if (!Q) return;
    this.operations.push({ type: "write", x: A, y: B, text: Q, transformers: G });
  }
  clip(A) {
    this.operations.push({ type: "clip", clip: A });
  }
  unclip() {
    this.operations.push({ type: "unclip" });
  }
  get() {
    let A = [];
    for (let Z = 0; Z < this.height; Z++) {
      let G = [];
      for (let Y = 0; Y < this.width; Y++) G.push({ type: "char", value: " ", fullWidth: !1, styles: [] });
      A.push(G);
    }
    let B = [];
    for (let Z of this.operations) {
      if (Z.type === "clip") B.push(Z.clip);
      if (Z.type === "unclip") B.pop();
      if (Z.type === "write") {
        let { text: G, transformers: Y } = Z,
          { x: I, y: W } = Z,
          J = G.split(`
`),
          X = B.at(-1);
        if (X) {
          let V = typeof X?.x1 === "number" && typeof X?.x2 === "number",
            K = typeof X?.y1 === "number" && typeof X?.y2 === "number";
          if (V) {
            let H = da(G);
            if (I + H < X.x1 || I > X.x2) continue;
          }
          if (K) {
            let H = J.length;
            if (W + H < X.y1 || W > X.y2) continue;
          }
          if (V) {
            if (
              ((J = J.map((H) => {
                let z = I < X.x1 ? X.x1 - I : 0,
                  D = J3(H),
                  C = I + D > X.x2 ? X.x2 - I : D;
                return p00(H, z, C);
              })),
              I < X.x1)
            )
              I = X.x1;
          }
          if (K) {
            let H = W < X.y1 ? X.y1 - W : 0,
              z = J.length,
              D = W + z > X.y2 ? X.y2 - W : z;
            if (((J = J.slice(H, D)), W < X.y1)) W = X.y1;
          }
        }
        let F = 0;
        for (let [V, K] of J.entries()) {
          let H = A[W + F];
          if (!H) continue;
          for (let C of Y) K = C(K, V);
          if (!Object.prototype.hasOwnProperty.call(this.charCache, K)) this.charCache[K] = xNA(bNA(K));
          let z = this.charCache[K],
            D = I;
          for (let C of z) {
            H[D] = C;
            let w = C.fullWidth || C.value.length > 1;
            if (w) H[D + 1] = { type: "char", value: "", fullWidth: !1, styles: C.styles };
            D += w ? 2 : 1;
          }
          F++;
        }
      }
    }
    return {
      output: A.map((Z) => {
        let G = Z.filter((I) => I !== void 0),
          Y = JSON.stringify(G);
        if (!Object.prototype.hasOwnProperty.call(this.styledCharsToStringCache, Y)) {
          let I = vNA(G).trimEnd();
          this.styledCharsToStringCache[Y] = I;
        }
        return this.styledCharsToStringCache[Y];
      }).join(`
`),
      height: A.length,
    };
  }
}
var DM9 = (A, B) => {
    if (A.yogaNode) {
      let Q = new _61({ width: A.yogaNode.getComputedWidth(), height: A.yogaNode.getComputedHeight() });
      m00(A, Q, { skipStaticElements: !0, theme: B });
      let Z;
      if (A.staticNode?.yogaNode)
        ((Z = new _61({
          width: A.staticNode.yogaNode.getComputedWidth(),
          height: A.staticNode.yogaNode.getComputedHeight(),
        })),
          m00(A.staticNode, Z, { skipStaticElements: !1, theme: B }));
      let { output: G, height: Y } = Q.get();
      return {
        output: G,
        outputHeight: Y,
        staticOutput: Z
          ? `${Z.get().output}
`
          : "",
      };
    }
    return { output: "", outputHeight: 0, staticOutput: "" };
  },
  fNA = DM9;
var lC = {};
Oh(lC, {
  scrollUp: () => xM9,
  scrollDown: () => vM9,
  link: () => mM9,
  image: () => dM9,
  iTerm: () => cM9,
  exitAlternativeScreen: () => gM9,
  eraseUp: () => _M9,
  eraseStartLine: () => yM9,
  eraseScreen: () => r00,
  eraseLines: () => jM9,
  eraseLine: () => mNA,
  eraseEndLine: () => SM9,
  eraseDown: () => kM9,
  enterAlternativeScreen: () => hM9,
  cursorUp: () => gNA,
  cursorTo: () => $M9,
  cursorShow: () => t00,
  cursorSavePosition: () => LM9,
  cursorRestorePosition: () => MM9,
  cursorPrevLine: () => TM9,
  cursorNextLine: () => RM9,
  cursorMove: () => wM9,
  cursorLeft: () => uNA,
  cursorHide: () => PM9,
  cursorGetPosition: () => OM9,
  cursorForward: () => EM9,
  cursorDown: () => qM9,
  cursorBackward: () => NM9,
  clearTerminal: () => fM9,
  clearScreen: () => bM9,
  beep: () => uM9,
});
import o00 from "node:process";
var k$1 = globalThis.window?.document !== void 0,
  jk8 = globalThis.process?.versions?.node !== void 0,
  Sk8 = globalThis.process?.versions?.bun !== void 0,
  yk8 = globalThis.Deno?.version?.deno !== void 0,
  kk8 = globalThis.process?.versions?.electron !== void 0,
  _k8 = globalThis.navigator?.userAgent?.includes("jsdom") === !0,
  xk8 = typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope,
  vk8 = typeof DedicatedWorkerGlobalScope !== "undefined" && globalThis instanceof DedicatedWorkerGlobalScope,
  bk8 = typeof SharedWorkerGlobalScope !== "undefined" && globalThis instanceof SharedWorkerGlobalScope,
  fk8 = typeof ServiceWorkerGlobalScope !== "undefined" && globalThis instanceof ServiceWorkerGlobalScope,
  x61 = globalThis.navigator?.userAgentData?.platform,
  hk8 =
    x61 === "macOS" ||
    globalThis.navigator?.platform === "MacIntel" ||
    globalThis.navigator?.userAgent?.includes(" Mac ") === !0 ||
    globalThis.process?.platform === "darwin",
  gk8 = x61 === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32",
  uk8 =
    x61 === "Linux" ||
    globalThis.navigator?.platform?.startsWith("Linux") === !0 ||
    globalThis.navigator?.userAgent?.includes(" Linux ") === !0 ||
    globalThis.process?.platform === "linux",
  mk8 =
    x61 === "iOS" ||
    (globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1) ||
    /iPad|iPhone|iPod/.test(globalThis.navigator?.platform),
  dk8 =
    x61 === "Android" ||
    globalThis.navigator?.platform === "Android" ||
    globalThis.navigator?.userAgent?.includes(" Android ") === !0 ||
    globalThis.process?.platform === "android";
var ANSI_ESCAPE = "\x1B[",
  b61 = "\x1B]",
  oa = "\x07",
  v61 = ";",
  hNA = !k$1 && o00.env.TERM_PROGRAM === "Apple_Terminal",
  CM9 = !k$1 && o00.platform === "win32",
  UM9 = k$1
    ? () => {
        throw new Error("`process.cwd()` only works in Node.js, not the browser.");
      }
    : o00.cwd,
  $M9 = (A, B) => {
    if (typeof A !== "number") throw new TypeError("The `x` argument is required");
    if (typeof B !== "number") return ANSI_ESCAPE + (A + 1) + "G";
    return ANSI_ESCAPE + (B + 1) + v61 + (A + 1) + "H";
  },
  wM9 = (A, B) => {
    if (typeof A !== "number") throw new TypeError("The `x` argument is required");
    let Q = "";
    if (A < 0) Q += ANSI_ESCAPE + -A + "D";
    else if (A > 0) Q += ANSI_ESCAPE + A + "C";
    if (B < 0) Q += ANSI_ESCAPE + -B + "A";
    else if (B > 0) Q += ANSI_ESCAPE + B + "B";
    return Q;
  },
  gNA = (A = 1) => ANSI_ESCAPE + A + "A",
  qM9 = (A = 1) => ANSI_ESCAPE + A + "B",
  EM9 = (A = 1) => ANSI_ESCAPE + A + "C",
  NM9 = (A = 1) => ANSI_ESCAPE + A + "D",
  uNA = ANSI_ESCAPE + "G",
  LM9 = hNA ? "\x1B7" : ANSI_ESCAPE + "s",
  MM9 = hNA ? "\x1B8" : ANSI_ESCAPE + "u",
  OM9 = ANSI_ESCAPE + "6n",
  RM9 = ANSI_ESCAPE + "E",
  TM9 = ANSI_ESCAPE + "F",
  PM9 = ANSI_ESCAPE + "?25l",
  t00 = ANSI_ESCAPE + "?25h",
  jM9 = (A) => {
    let B = "";
    for (let Q = 0; Q < A; Q++) B += mNA + (Q < A - 1 ? gNA() : "");
    if (A) B += uNA;
    return B;
  },
  SM9 = ANSI_ESCAPE + "K",
  yM9 = ANSI_ESCAPE + "1K",
  mNA = ANSI_ESCAPE + "2K",
  kM9 = ANSI_ESCAPE + "J",
  _M9 = ANSI_ESCAPE + "1J",
  r00 = ANSI_ESCAPE + "2J",
  xM9 = ANSI_ESCAPE + "S",
  vM9 = ANSI_ESCAPE + "T",
  bM9 = "\x1Bc",
  fM9 = CM9 ? `${r00}${ANSI_ESCAPE}0f` : `${r00}${ANSI_ESCAPE}3J${ANSI_ESCAPE}H`,
  hM9 = ANSI_ESCAPE + "?1049h",
  gM9 = ANSI_ESCAPE + "?1049l",
  uM9 = oa,
  mM9 = (A, B) => [b61, "8", v61, v61, B, oa, A, b61, "8", v61, v61, oa].join(""),
  dM9 = (A, B = {}) => {
    let Q = `${b61}1337;File=inline=1`;
    if (B.width) Q += `;width=${B.width}`;
    if (B.height) Q += `;height=${B.height}`;
    if (B.preserveAspectRatio === !1) Q += ";preserveAspectRatio=0";
    return Q + ":" + Buffer.from(A).toString("base64") + oa;
  },
  cM9 = {
    setCwd: (A = UM9()) => `${b61}50;CurrentDir=${A}${oa}`,
    annotation(A, B = {}) {
      let Q = `${b61}1337;`,
        Z = B.x !== void 0,
        G = B.y !== void 0;
      if ((Z || G) && !(Z && G && B.length !== void 0))
        throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      if (((A = A.replaceAll("|", "")), (Q += B.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation="), B.length > 0))
        Q += (Z ? [A, B.length, B.x, B.y] : [B.length, A]).join("|");
      else Q += A;
      return Q + oa;
    },
  };
var lM9 = (A) => {
    let B = 0,
      Q = "",
      Z = !1,
      G = "\x1B[?2026h",
      Y = "\x1B[?2026l",
      I = ({ output: W }) => {
        if (!Z && A.isTTY) (A.write(lC.cursorHide), (Z = !0));
        let J =
          W +
          `
`;
        if (J === Q) return;
        ((Q = J),
          A.write(G + lC.eraseLines(B) + J + Y),
          (B = J.split(`
`).length));
      };
    return (
      (I.clear = () => {
        (A.write(G + lC.eraseLines(B) + Y), (Q = ""), (B = 0));
      }),
      (I.updateLineCount = (W) => {
        B = W.split(`
`).length;
      }),
      (I.resetLineCount = () => {
        B = 0;
      }),
      (I.done = () => {
        if (((Q = ""), (B = 0), A.isTTY)) (A.write(lC.cursorShow), (Z = !1));
      }),
      I
    );
  },
  pM9 = { create: lM9 },
  dNA = pM9;
var iM9 = new Map(),
  cT = iM9;
var DL = A1(V1(), 1);
import { EventEmitter as HO9 } from "node:events";
var cNA = A1(V1(), 1),
  lNA = cNA.createContext({ exit() {} });
lNA.displayName = "InternalAppContext";
var e00 = lNA;
var pNA = A1(V1(), 1);
import { EventEmitter as nM9 } from "node:events";
var iNA = pNA.createContext({
  stdin: process.stdin,
  internal_eventEmitter: new nM9(),
  setRawMode() {},
  isRawModeSupported: !1,
  internal_exitOnCtrlC: !0,
});
iNA.displayName = "InternalStdinContext";
var _$1 = iNA;
var nNA = A1(V1(), 1),
  aNA = nNA.createContext({ stdout: process.stdout, write() {} });
aNA.displayName = "InternalStdoutContext";
var AA0 = aNA;
var sNA = A1(V1(), 1),
  rNA = sNA.createContext({ stderr: process.stderr, write() {} });
rNA.displayName = "InternalStderrContext";
var BA0 = rNA;
var oNA = A1(V1(), 1),
  tNA = oNA.createContext({
    activeId: void 0,
    add() {},
    remove() {},
    activate() {},
    deactivate() {},
    enableFocus() {},
    disableFocus() {},
    focusNext() {},
    focusPrevious() {},
    focus() {},
  });
tNA.displayName = "InternalFocusContext";
var x$1 = tNA;
var II = A1(V1(), 1),
  JA0 = A1(GLA(), 1);
import * as f$1 from "node:fs";
import { cwd as FLA } from "node:process";
var AO9 = (A, B = 2) => {
    return A.replace(/^\t+/gm, (Q) => " ".repeat(Q.length * B));
  },
  YLA = AO9;
var BO9 = (A, B) => {
    let Q = [],
      Z = A - B,
      G = A + B;
    for (let Y = Z; Y <= G; Y++) Q.push(Y);
    return Q;
  },
  QO9 = (A, B, Q = {}) => {
    var Z;
    if (typeof A !== "string") throw new TypeError("Source code is missing.");
    if (!B || B < 1) throw new TypeError("Line number must start from `1`.");
    let G = YLA(A).split(/\r?\n/);
    if (B > G.length) return;
    return BO9(B, (Z = Q.around) !== null && Z !== void 0 ? Z : 3)
      .filter((Y) => G[Y - 1] !== void 0)
      .map((Y) => ({ line: Y, value: G[Y - 1] }));
  },
  ILA = QO9;
var v$1 = A1(V1(), 1),
  ZA0 = v$1.forwardRef(({ children: A, ...B }, Q) => {
    return v$1.default.createElement(
      "ink-box",
      {
        ref: Q,
        style: {
          ...B,
          overflowX: B.overflowX ?? B.overflow ?? "visible",
          overflowY: B.overflowY ?? B.overflow ?? "visible",
        },
      },
      A,
    );
  });
ZA0.displayName = "Box";
ZA0.defaultProps = { flexWrap: "nowrap", flexDirection: "row", flexGrow: 0, flexShrink: 1 };
var y = ZA0;
var WLA = A1(V1(), 1);
var b$1 = A1(V1(), 1),
  V_ = A1(V1(), 1);
var YA0 = V_.createContext({
  theme: null,
  setTheme: (A) => A,
  setPreviewTheme: (A) => A,
  savePreview: () => {},
  currentTheme: null,
});
function IA0({ children: A, initialState: B }) {
  let [Q, Z] = V_.useState(B),
    [G, Y] = V_.useState(null),
    I = b$1.useMemo(
      () => ({
        theme: Q,
        setTheme: (W) => {
          (TA({ ...H0(), theme: W }), Z(W), GA0(W), Y(null));
        },
        setPreviewTheme: (W) => {
          (Y(W), GA0(W));
        },
        savePreview: () => {
          if (G !== null) (TA({ ...H0(), theme: G }), Z(G), Y(null));
        },
        currentTheme: G ?? Q,
      }),
      [Q, G],
    );
  return b$1.default.createElement(YA0.Provider, { value: I }, A);
}
function sB() {
  let { currentTheme: A, setTheme: B } = V_.useContext(YA0);
  return [A, B];
}
function WA0() {
  let { setPreviewTheme: A, savePreview: B } = V_.useContext(YA0);
  return { setPreviewTheme: A, savePreview: B };
}
function M({
  color: A,
  backgroundColor: B,
  dimColor: Q = !1,
  bold: Z = !1,
  italic: G = !1,
  underline: Y = !1,
  strikethrough: I = !1,
  inverse: W = !1,
  wrap: J = "wrap",
  children: X,
}) {
  let [F] = sB();
  if (X === void 0 || X === null) return null;
  return WLA.default.createElement(
    "ink-text",
    {
      style: { flexGrow: 0, flexShrink: 1, flexDirection: "row", textWrap: J },
      internal_transform: (K) => {
        if (Q) K = n1.dim(K);
        if (A) K = iB(A, F)(K);
        if (B) K = iB(B, F, "background")(K);
        if (Z) K = n1.bold(K);
        if (G) K = n1.italic(K);
        if (Y) K = n1.underline(K);
        if (I) K = n1.strikethrough(K);
        if (W) K = n1.inverse(K);
        return K;
      },
    },
    X,
  );
}
var JLA = (A) => {
    return A?.replace(`file://${FLA()}/`, "");
  },
  XLA = new JA0.default({ cwd: FLA(), internals: JA0.default.nodeInternals() });
function XA0({ error: A }) {
  let B = A.stack
      ? A.stack
          .split(
            `
`,
          )
          .slice(1)
      : void 0,
    Q = B ? XLA.parseLine(B[0]) : void 0,
    Z = JLA(Q?.file),
    G,
    Y = 0;
  if (Z && Q?.line && f$1.existsSync(Z)) {
    let I = f$1.readFileSync(Z, "utf8");
    if (((G = ILA(I, Q.line)), G)) for (let { line: W } of G) Y = Math.max(Y, String(W).length);
  }
  return II.default.createElement(
    y,
    { flexDirection: "column", padding: 1 },
    II.default.createElement(
      y,
      null,
      II.default.createElement(M, { backgroundColor: "error", color: "text" }, " ", "ERROR", " "),
      II.default.createElement(M, null, " ", A.message),
    ),
    Q &&
      Z &&
      II.default.createElement(
        y,
        { marginTop: 1 },
        II.default.createElement(M, { dimColor: !0 }, Z, ":", Q.line, ":", Q.column),
      ),
    Q &&
      G &&
      II.default.createElement(
        y,
        { marginTop: 1, flexDirection: "column" },
        G.map(({ line: I, value: W }) =>
          II.default.createElement(
            y,
            { key: I },
            II.default.createElement(
              y,
              { width: Y + 1 },
              II.default.createElement(
                M,
                {
                  dimColor: I !== Q.line,
                  backgroundColor: I === Q.line ? "error" : void 0,
                  color: I === Q.line ? "text" : void 0,
                },
                String(I).padStart(Y, " "),
                ":",
              ),
            ),
            II.default.createElement(
              M,
              { key: I, backgroundColor: I === Q.line ? "error" : void 0, color: I === Q.line ? "text" : void 0 },
              " " + W,
            ),
          ),
        ),
      ),
    A.stack &&
      II.default.createElement(
        y,
        { marginTop: 1, flexDirection: "column" },
        A.stack
          .split(
            `
`,
          )
          .slice(1)
          .map((I) => {
            let W = XLA.parseLine(I);
            if (!W)
              return II.default.createElement(
                y,
                { key: I },
                II.default.createElement(M, { dimColor: !0 }, "- "),
                II.default.createElement(M, { dimColor: !0, bold: !0 }, I),
              );
            return II.default.createElement(
              y,
              { key: I },
              II.default.createElement(M, { dimColor: !0 }, "- "),
              II.default.createElement(M, { dimColor: !0, bold: !0 }, W.function),
              II.default.createElement(
                M,
                { dimColor: !0 },
                " ",
                "(",
                JLA(W.file) ?? "",
                ":",
                W.line,
                ":",
                W.column,
                ")",
              ),
            );
          }),
      ),
  );
}
import { Buffer as ZO9 } from "node:buffer";
var GO9 = /^(?:\x1b)([a-zA-Z0-9])$/,
  YO9 = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/,
  IO9 = "\x1B[200~",
  h$1 = "\x1B[201~";
function WO9(A) {
  return { name: "", fn: !1, ctrl: !1, meta: !1, shift: !1, option: !1, sequence: A, raw: A, isPasted: !0 };
}
var JO9 = new RegExp(
    "^(.*?)(" +
      [
        "\\x1b\\][0-9]*(?:;[^\\x07\\x1b]*)*(?:\\x07|\\x1b\\\\)",
        "\\x1bP[^\\x1b]*\\x1b\\\\",
        "\\x1b\\[[0-9]*(?:;[0-9]*)*[A-Za-z~]",
        "\\x1bO[A-Za-z]",
        "\\x1b[\\x00-\\x7F]",
        "\\x1b\\x1b",
        "$",
      ]
        .map((A) => `(?:${A})`)
        .join("|") +
      ")",
    "s",
  ),
  XO9 = new RegExp(
    "(.*?)(" +
      [
        "\\x1b\\][0-9]*(?:;[^\\x07\\x1b]*)*$",
        "\\x1bP[^\\x1b]*$",
        "\\x1b\\[[0-9]*(?:;[0-9]*)*$",
        "\\x1bO$",
        "\\x1b$",
        "$",
      ]
        .map((A) => `(?:${A})`)
        .join("|") +
      ")",
    "s",
  ),
  KLA = { mode: "NORMAL", incomplete: "" };
function FO9(A) {
  if (ZO9.isBuffer(A))
    if (A[0] > 127 && A[1] === void 0) return ((A[0] -= 128), "\x1B" + String(A));
    else return String(A);
  else if (A !== void 0 && typeof A !== "string") return String(A);
  else if (!A) return "";
  else return A;
}
function HLA(A, B = "") {
  let Q = B === null,
    Z = Q ? "" : FO9(B);
  if (A.mode === "IN_PASTE") {
    if ((A.incomplete.slice(-h$1.length + 1) + Z).indexOf(h$1) === -1)
      return [[], { ...A, incomplete: A.incomplete + Z }];
  }
  let G = A.incomplete + Z,
    Y = { ...A, incomplete: "" },
    I = [],
    W = {
      NORMAL: () => {
        let J = JO9.exec(G);
        G = G.substring(J[0].length);
        let X = J[1];
        if (!J[2] && !Q) {
          let F = XO9.exec(X);
          ((Y.incomplete = F[2]), (X = F[1]));
        }
        if (X) I.push(VLA(X));
        if (J[2] === IO9) Y.mode = "IN_PASTE";
        else if (J[2]) I.push(VLA(J[2]));
      },
      IN_PASTE: () => {
        let J = G.indexOf(h$1);
        if (J === -1) {
          if (!Q) {
            ((Y.incomplete = G), (G = ""));
            return;
          }
          J = G.length;
        }
        let X = G.substring(0, J);
        if (X) I.push(WO9(X));
        ((G = G.substring(J + h$1.length)), (Y.mode = "NORMAL"));
      },
    };
  while (G) W[Y.mode]();
  return [I, Y];
}
var zLA = {
    OP: "f1",
    OQ: "f2",
    OR: "f3",
    OS: "f4",
    "[11~": "f1",
    "[12~": "f2",
    "[13~": "f3",
    "[14~": "f4",
    "[[A": "f1",
    "[[B": "f2",
    "[[C": "f3",
    "[[D": "f4",
    "[[E": "f5",
    "[15~": "f5",
    "[17~": "f6",
    "[18~": "f7",
    "[19~": "f8",
    "[20~": "f9",
    "[21~": "f10",
    "[23~": "f11",
    "[24~": "f12",
    "[A": "up",
    "[B": "down",
    "[C": "right",
    "[D": "left",
    "[E": "clear",
    "[F": "end",
    "[H": "home",
    OA: "up",
    OB: "down",
    OC: "right",
    OD: "left",
    OE: "clear",
    OF: "end",
    OH: "home",
    "[1~": "home",
    "[2~": "insert",
    "[3~": "delete",
    "[4~": "end",
    "[5~": "pageup",
    "[6~": "pagedown",
    "[[5~": "pageup",
    "[[6~": "pagedown",
    "[7~": "home",
    "[8~": "end",
    "[a": "up",
    "[b": "down",
    "[c": "right",
    "[d": "left",
    "[e": "clear",
    "[2$": "insert",
    "[3$": "delete",
    "[5$": "pageup",
    "[6$": "pagedown",
    "[7$": "home",
    "[8$": "end",
    Oa: "up",
    Ob: "down",
    Oc: "right",
    Od: "left",
    Oe: "clear",
    "[2^": "insert",
    "[3^": "delete",
    "[5^": "pageup",
    "[6^": "pagedown",
    "[7^": "home",
    "[8^": "end",
    "[Z": "tab",
  },
  DLA = [...Object.values(zLA), "backspace"],
  VO9 = (A) => {
    return ["[a", "[b", "[c", "[d", "[e", "[2$", "[3$", "[5$", "[6$", "[7$", "[8$", "[Z"].includes(A);
  },
  KO9 = (A) => {
    return ["Oa", "Ob", "Oc", "Od", "Oe", "[2^", "[3^", "[5^", "[6^", "[7^", "[8^"].includes(A);
  },
  VLA = (A = "") => {
    let B,
      Q = { name: "", fn: !1, ctrl: !1, meta: !1, shift: !1, option: !1, sequence: A, raw: A, isPasted: !1 };
    if (((Q.sequence = Q.sequence || A || Q.name), A === "\r")) ((Q.raw = void 0), (Q.name = "return"));
    else if (
      A ===
      `
`
    )
      Q.name = "enter";
    else if (A === "\t") Q.name = "tab";
    else if (A === "\b" || A === "\x1B\b") ((Q.name = "backspace"), (Q.meta = A.charAt(0) === "\x1B"));
    else if (A === "" || A === "\x1B") ((Q.name = "backspace"), (Q.meta = A.charAt(0) === "\x1B"));
    else if (A === "\x1B" || A === "\x1B\x1B") ((Q.name = "escape"), (Q.meta = A.length === 2));
    else if (A === " " || A === "\x1B ") ((Q.name = "space"), (Q.meta = A.length === 2));
    else if (A === "\x1F") ((Q.name = "_"), (Q.ctrl = !0));
    else if (A <= "\x1A" && A.length === 1) ((Q.name = String.fromCharCode(A.charCodeAt(0) + 97 - 1)), (Q.ctrl = !0));
    else if (A.length === 1 && A >= "0" && A <= "9") Q.name = "number";
    else if (A.length === 1 && A >= "a" && A <= "z") Q.name = A;
    else if (A.length === 1 && A >= "A" && A <= "Z") ((Q.name = A.toLowerCase()), (Q.shift = !0));
    else if ((B = GO9.exec(A))) ((Q.meta = !0), (Q.shift = /^[A-Z]$/.test(B[1])));
    else if ((B = YO9.exec(A))) {
      let Z = [...A];
      if (Z[0] === "\x1B" && Z[1] === "\x1B") Q.option = !0;
      let G = [B[1], B[2], B[4], B[6]].filter(Boolean).join(""),
        Y = (B[3] || B[5] || 1) - 1;
      ((Q.ctrl = !!(Y & 4)),
        (Q.meta = !!(Y & 10)),
        (Q.shift = !!(Y & 1)),
        (Q.code = G),
        (Q.name = zLA[G]),
        (Q.shift = VO9(G) || Q.shift),
        (Q.ctrl = KO9(G) || Q.ctrl));
    }
    if (Q.raw === "\x1Bb") ((Q.meta = !0), (Q.name = "left"));
    else if (Q.raw === "\x1Bf") ((Q.meta = !0), (Q.name = "right"));
    switch (A) {
      case "\x1B[1~":
        return { name: "home", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1 };
      case "\x1B[4~":
        return { name: "end", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1 };
      case "\x1B[5~":
        return { name: "pageup", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1 };
      case "\x1B[6~":
        return {
          name: "pagedown",
          ctrl: !1,
          meta: !1,
          shift: !1,
          option: !1,
          fn: !1,
          sequence: A,
          raw: A,
          isPasted: !1,
        };
      case "\x1B[1;5D":
        return { name: "left", ctrl: !0, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1 };
      case "\x1B[1;5C":
        return { name: "right", ctrl: !0, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1 };
      case "\x1B[1~":
        return { name: "left", ctrl: !0, fn: !0, meta: !1, shift: !1, option: !1, sequence: A, raw: A, isPasted: !1 };
      case "\x1B[4~":
        return { name: "right", ctrl: !0, fn: !0, meta: !1, shift: !1, option: !1, sequence: A, raw: A, isPasted: !1 };
    }
    return Q;
  };
var TAB_CHAR = "\t",
  DO9 = "\x1B[Z",
  CO9 = "\x1B",
  UO9 = process.platform !== "win32";
class g$1 extends DL.PureComponent {
  static displayName = "InternalApp";
  static getDerivedStateFromError(A) {
    return { error: A };
  }
  state = { isFocusEnabled: !0, activeFocusId: void 0, focusables: [], error: void 0 };
  rawModeEnabledCount = 0;
  internal_eventEmitter = new HO9();
  keyParseState = KLA;
  incompleteEscapeTimer = null;
  NORMAL_TIMEOUT = 50;
  PASTE_TIMEOUT = 500;
  isRawModeSupported() {
    return this.props.stdin.isTTY;
  }
  render() {
    return DL.default.createElement(
      e00.Provider,
      { value: { exit: this.handleExit } },
      DL.default.createElement(
        IA0,
        { initialState: this.props.initialTheme },
        DL.default.createElement(
          _$1.Provider,
          {
            value: {
              stdin: this.props.stdin,
              setRawMode: this.handleSetRawMode,
              isRawModeSupported: this.isRawModeSupported(),
              internal_exitOnCtrlC: this.props.exitOnCtrlC,
              internal_eventEmitter: this.internal_eventEmitter,
            },
          },
          DL.default.createElement(
            AA0.Provider,
            { value: { stdout: this.props.stdout, write: this.props.writeToStdout } },
            DL.default.createElement(
              BA0.Provider,
              { value: { stderr: this.props.stderr, write: this.props.writeToStderr } },
              DL.default.createElement(
                x$1.Provider,
                {
                  value: {
                    activeId: this.state.activeFocusId,
                    add: this.addFocusable,
                    remove: this.removeFocusable,
                    activate: this.activateFocusable,
                    deactivate: this.deactivateFocusable,
                    enableFocus: this.enableFocus,
                    disableFocus: this.disableFocus,
                    focusNext: this.focusNext,
                    focusPrevious: this.focusPrevious,
                    focus: this.focus,
                  },
                },
                this.state.error ? DL.default.createElement(XA0, { error: this.state.error }) : this.props.children,
              ),
            ),
          ),
        ),
      ),
    );
  }
  componentDidMount() {
    if (this.props.stdout.isTTY) this.props.stdout.write(lC.cursorHide);
  }
  componentWillUnmount() {
    if (this.props.stdout.isTTY) this.props.stdout.write(lC.cursorShow);
    if (this.incompleteEscapeTimer) (clearTimeout(this.incompleteEscapeTimer), (this.incompleteEscapeTimer = null));
    if (this.isRawModeSupported()) this.handleSetRawMode(!1);
  }
  componentDidCatch(A) {
    this.handleExit(A);
  }
  handleSetRawMode = (A) => {
    let { stdin: B } = this.props;
    if (!this.isRawModeSupported())
      if (B === process.stdin)
        throw new Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
      else
        throw new Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
    if ((B.setEncoding("utf8"), A)) {
      if (this.rawModeEnabledCount === 0)
        (B.ref(),
          B.setRawMode(!0),
          B.addListener("readable", this.handleReadable),
          this.props.stdout.write("\x1B[?2004h"));
      this.rawModeEnabledCount++;
      return;
    }
    if (--this.rawModeEnabledCount === 0)
      (this.props.stdout.write("\x1B[?2004l"),
        B.setRawMode(!1),
        B.removeListener("readable", this.handleReadable),
        B.unref());
  };
  flushIncomplete = () => {
    if (((this.incompleteEscapeTimer = null), !this.keyParseState.incomplete)) return;
    this.processInput(null);
  };
  processInput = (A) => {
    let [B, Q] = HLA(this.keyParseState, A);
    this.keyParseState = Q;
    for (let Z of B) (this.handleInput(Z.sequence), this.internal_eventEmitter.emit("input", Z));
    if (this.keyParseState.incomplete) {
      if (this.incompleteEscapeTimer) clearTimeout(this.incompleteEscapeTimer);
      this.incompleteEscapeTimer = setTimeout(
        this.flushIncomplete,
        this.keyParseState.mode === "IN_PASTE" ? this.PASTE_TIMEOUT : this.NORMAL_TIMEOUT,
      );
    }
  };
  handleReadable = () => {
    let A;
    while ((A = this.props.stdin.read()) !== null) this.processInput(A);
  };
  handleInput = (A) => {
    if (A === "\x03" && this.props.exitOnCtrlC) this.handleExit();
    if (A === "\x1A" && UO9) this.handleSuspend();
    if (A === CO9 && this.state.activeFocusId) this.setState({ activeFocusId: void 0 });
    if (this.state.isFocusEnabled && this.state.focusables.length > 0) {
      if (A === TAB_CHAR) this.focusNext();
      if (A === DO9) this.focusPrevious();
    }
  };
  handleExit = (A) => {
    if (this.isRawModeSupported()) this.handleSetRawMode(!1);
    this.props.onExit(A);
  };
  handleSuspend = () => {
    if (!this.isRawModeSupported()) return;
    let A = this.rawModeEnabledCount;
    while (this.rawModeEnabledCount > 0) this.handleSetRawMode(!1);
    if (this.props.stdout.isTTY) this.props.stdout.write(lC.cursorShow);
    this.internal_eventEmitter.emit("suspend");
    let B = () => {
      for (let Q = 0; Q < A; Q++) if (this.isRawModeSupported()) this.handleSetRawMode(!0);
      if (this.props.stdout.isTTY) this.props.stdout.write(lC.cursorHide);
      (this.internal_eventEmitter.emit("resume"), process.removeListener("SIGCONT", B));
    };
    (process.on("SIGCONT", B), process.kill(process.pid, "SIGSTOP"));
  };
  enableFocus = () => {
    this.setState({ isFocusEnabled: !0 });
  };
  disableFocus = () => {
    this.setState({ isFocusEnabled: !1 });
  };
  focus = (A) => {
    this.setState((B) => {
      if (!B.focusables.some((Z) => Z?.id === A)) return B;
      return { activeFocusId: A };
    });
  };
  focusNext = () => {
    this.setState((A) => {
      let B = A.focusables.find((Z) => Z.isActive)?.id;
      return { activeFocusId: this.findNextFocusable(A) ?? B };
    });
  };
  focusPrevious = () => {
    this.setState((A) => {
      let B = A.focusables.findLast((Z) => Z.isActive)?.id;
      return { activeFocusId: this.findPreviousFocusable(A) ?? B };
    });
  };
  addFocusable = (A, { autoFocus: B }) => {
    this.setState((Q) => {
      let Z = Q.activeFocusId;
      if (!Z && B) Z = A;
      return { activeFocusId: Z, focusables: [...Q.focusables, { id: A, isActive: !0 }] };
    });
  };
  removeFocusable = (A) => {
    this.setState((B) => ({
      activeFocusId: B.activeFocusId === A ? void 0 : B.activeFocusId,
      focusables: B.focusables.filter((Q) => {
        return Q.id !== A;
      }),
    }));
  };
  activateFocusable = (A) => {
    this.setState((B) => ({
      focusables: B.focusables.map((Q) => {
        if (Q.id !== A) return Q;
        return { id: A, isActive: !0 };
      }),
    }));
  };
  deactivateFocusable = (A) => {
    this.setState((B) => ({
      activeFocusId: B.activeFocusId === A ? void 0 : B.activeFocusId,
      focusables: B.focusables.map((Q) => {
        if (Q.id !== A) return Q;
        return { id: A, isActive: !1 };
      }),
    }));
  };
  findNextFocusable = (A) => {
    let B = A.focusables.findIndex((Q) => {
      return Q.id === A.activeFocusId;
    });
    for (let Q = B + 1; Q < A.focusables.length; Q++) {
      let Z = A.focusables[Q];
      if (Z?.isActive) return Z.id;
    }
    return;
  };
  findPreviousFocusable = (A) => {
    let B = A.focusables.findIndex((Q) => {
      return Q.id === A.activeFocusId;
    });
    for (let Q = B - 1; Q >= 0; Q--) {
      let Z = A.focusables[Q];
      if (Z?.isActive) return Z.id;
    }
    return;
  };
}
function $O9() {
  return process.platform === "win32" && !!process.env.WT_SESSION;
}
function wO9() {
  if ($O9()) return !0;
  if (process.platform === "win32" && process.env.TERM_PROGRAM === "vscode" && process.env.TERM_PROGRAM_VERSION)
    return !0;
  return !1;
}
function qO9() {
  if (process.platform === "win32")
    if (wO9()) return "\x1B[2J\x1B[3J\x1B[H";
    else return "\x1B[2J\x1B[0f";
  else return "\x1B[2J\x1B[3J\x1B[H";
}
var CLA = qO9();
var ULA = () => {};
class u$1 {
  options;
  log;
  throttledLog;
  isUnmounted;
  container;
  rootNode = null;
  fullStaticOutput;
  exitPromise;
  restoreConsole;
  unsubscribeTTYHandlers;
  prevFrame = { output: "", outputHeight: 0, staticOutput: "" };
  beginSynchronizedUpdate = "\x1B[?2026h";
  endSynchronizedUpdate = "\x1B[?2026l";
  constructor(A) {
    this.options = A;
    if (
      (B00(this),
      (this.log = dNA.create(A.stdout)),
      (this.throttledLog = A.debug ? this.log : RU1(this.log, void 0, { leading: !0, trailing: !0 })),
      (this.isUnmounted = !1),
      (this.fullStaticOutput = ""),
      (this.unsubscribeExit = DC1(this.unmount, { alwaysLast: !1 })),
      A.patchConsole)
    )
      this.patchConsole();
    if (A.stdout.isTTY)
      (A.stdout.on("resize", this.resized),
        process.on("SIGCONT", this.handleResume),
        (this.unsubscribeTTYHandlers = () => {
          (A.stdout.off("resize", this.resized), process.off("SIGCONT", this.handleResume));
        }));
    if (
      ((this.rootNode = F$1("ink-root")),
      (this.rootNode.onComputeLayout = this.calculateLayout),
      (this.rootNode.onRender = A.debug ? this.onRender : RU1(this.onRender, 32, { leading: !0, trailing: !0 })),
      (this.rootNode.onImmediateRender = this.onRender),
      (this.container = Zu.createContainer(this.rootNode, 0, null, !1, null, "id", () => {}, null)),
      process.env.DEV === "true")
    )
      Zu.injectIntoDevTools({ bundleType: 0, version: "16.13.1", rendererPackageName: "ink" });
  }
  resized = () => {
    (this.calculateLayout(), this.onRender(!0));
  };
  handleResume = () => {
    if (!this.options.stdout.isTTY) return;
    this.log.resetLineCount();
  };
  resolveExitPromise = () => {};
  rejectExitPromise = () => {};
  unsubscribeExit = () => {};
  calculateLayout = () => {
    let A = this.options.stdout.columns || 80;
    if (!this.rootNode) return;
    (this.rootNode.yogaNode.setWidth(A), this.rootNode.yogaNode.calculateLayout(void 0, void 0, Z$1.DIRECTION_LTR));
  };
  setTheme(A) {
    this.options.theme = A;
  }
  onRender(A = !1) {
    if (this.isUnmounted) return;
    if (!this.rootNode) return;
    let B = fNA(this.rootNode, this.options.theme),
      Q =
        B.staticOutput &&
        B.staticOutput !==
          `
`;
    if (this.options.debug) {
      if (Q) this.fullStaticOutput += B.staticOutput;
      (this.options.stdout.write(this.fullStaticOutput + B.output), (this.prevFrame = B));
      return;
    }
    if (!this.options.stdout.isTTY) {
      if (Q) this.options.stdout.write(B.staticOutput);
      this.prevFrame = B;
      return;
    }
    if (Q) this.fullStaticOutput += B.staticOutput;
    if (A || B.outputHeight >= this.options.stdout.rows || this.prevFrame.outputHeight >= this.options.stdout.rows) {
      if (this.options.onFlicker) this.options.onFlicker(B.outputHeight, this.options.stdout.rows);
      (this.options.stdout.write(
        this.beginSynchronizedUpdate +
          CLA +
          this.fullStaticOutput +
          B.output +
          `
` +
          this.endSynchronizedUpdate,
      ),
        this.log.updateLineCount(
          B.output +
            `
`,
        ),
        (this.prevFrame = B));
      return;
    }
    if (Q) (this.log.clear(), this.options.stdout.write(B.staticOutput), this.throttledLog(B));
    if (!Q && B.output !== this.prevFrame.output) this.throttledLog(B);
    this.prevFrame = B;
  }
  render(A) {
    let B = $LA.default.createElement(
      g$1,
      {
        initialTheme: this.options.theme,
        stdin: this.options.stdin,
        stdout: this.options.stdout,
        stderr: this.options.stderr,
        writeToStdout: this.writeToStdout,
        writeToStderr: this.writeToStderr,
        exitOnCtrlC: this.options.exitOnCtrlC,
        onExit: this.unmount,
      },
      A,
    );
    Zu.updateContainer(B, this.container, null, ULA);
  }
  writeToStdout(A) {
    if (this.isUnmounted) return;
    if (this.options.debug) {
      this.options.stdout.write(A + this.fullStaticOutput + this.prevFrame.output);
      return;
    }
    if (!this.options.stdout.isTTY) {
      this.options.stdout.write(A);
      return;
    }
    (this.log.clear(), this.options.stdout.write(A), this.log(this.prevFrame));
  }
  writeToStderr(A) {
    if (this.isUnmounted) return;
    if (this.options.debug) {
      (this.options.stderr.write(A), this.options.stdout.write(this.fullStaticOutput + this.prevFrame.output));
      return;
    }
    if (!this.options.stdout.isTTY) {
      this.options.stderr.write(A);
      return;
    }
    (this.log.clear(), this.options.stderr.write(A), this.log(this.prevFrame));
  }
  unmount(A) {
    if (this.isUnmounted) return;
    if ((this.calculateLayout(), this.onRender(), this.unsubscribeExit(), typeof this.restoreConsole === "function"))
      this.restoreConsole();
    if ((this.unsubscribeTTYHandlers?.(), !this.options.stdout.isTTY))
      this.options.stdout.write(
        this.prevFrame.output +
          `
`,
      );
    else if (!this.options.debug) this.log.done();
    if (
      ((this.isUnmounted = !0),
      Zu.updateContainer(null, this.container, null, ULA),
      cT.delete(this.options.stdout),
      A instanceof Error)
    )
      this.rejectExitPromise(A);
    else this.resolveExitPromise();
  }
  async waitUntilExit() {
    return (
      (this.exitPromise ||= new Promise((A, B) => {
        ((this.resolveExitPromise = A), (this.rejectExitPromise = B));
      })),
      this.exitPromise
    );
  }
  resetLineCount() {
    if (this.options.stdout.isTTY && !this.options.debug) this.log.resetLineCount();
  }
  patchConsole() {
    if (this.options.debug) return;
    this.restoreConsole = QqA((A, B) => {
      if (A === "stdout") this.writeToStdout(B);
      if (A === "stderr") {
        if (!B.startsWith("The above error occurred")) this.writeToStderr(B);
      }
    });
  }
}
function GA0(A) {
  cT.forEach((B) => {
    B.setTheme(A);
  });
}
var NO9 = (A, B) => {
    let Q = LO9(B),
      Z = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        debug: !1,
        exitOnCtrlC: !0,
        patchConsole: !0,
        theme: Q.theme ?? H0().theme,
        ...Q,
      },
      G = MO9(Z.stdout, () => new u$1(Z));
    return (
      G.render(A),
      {
        rerender: G.render,
        unmount() {
          G.unmount();
        },
        waitUntilExit: G.waitUntilExit,
        cleanup: () => cT.delete(Z.stdout),
      }
    );
  },
  s6 = NO9,
  LO9 = (A = {}) => {
    if (A instanceof EO9) return { stdout: A, stdin: process.stdin };
    return A;
  },
  MO9 = (A, B) => {
    let Q = cT.get(A);
    if (!Q) ((Q = B()), cT.set(A, Q));
    return Q;
  };
var lT = A1(V1(), 1);
var FA0 = A1(V1(), 1),
  wLA = A1(V1(), 1),
  qLA = FA0.default.createContext(!1);
function ELA({ children: A }) {
  return FA0.default.createElement(qLA.Provider, { value: !0 }, A);
}
function m$1() {
  return wLA.useContext(qLA);
}
function d$1(A) {
  let { items: B, children: Q } = A,
    [Z, G] = lT.useState(0),
    Y = lT.useMemo(() => {
      return B.slice(Z);
    }, [B, Z]);
  lT.useLayoutEffect(() => {
    G(B.length);
  }, [B.length]);
  let I = Y.map((W, J) => {
    return Q(W, Z + J);
  });
  return lT.default.createElement(
    ELA,
    null,
    lT.default.createElement(
      "ink-box",
      { internal_static: !0, style: { position: "absolute", flexDirection: "column" } },
      I,
    ),
  );
}
var NLA = A1(V1(), 1);
function Xq({ children: A, transform: B }) {
  if (A === void 0 || A === null) return null;
  return NLA.default.createElement(
    "ink-text",
    { style: { flexGrow: 0, flexShrink: 1, flexDirection: "row" }, internal_transform: B },
    A,
  );
}
var LLA = A1(V1(), 1);
function l3({ count: A = 1 }) {
  return LLA.default.createElement(
    "ink-text",
    null,
    `
`.repeat(A),
  );
}
var OO9 = A1(V1(), 1);
var VA0 = A1(V1(), 1);
var MLA = A1(V1(), 1);
var RO9 = () => MLA.useContext(_$1),
  K_ = RO9;
var TO9 = (A, B = {}) => {
    let { stdin: Q, setRawMode: Z, internal_exitOnCtrlC: G, internal_eventEmitter: Y } = K_();
    (VA0.useEffect(() => {
      if (B.isActive === !1) return;
      return (
        Z(!0),
        () => {
          Z(!1);
        }
      );
    }, [B.isActive, Z]),
      VA0.useEffect(() => {
        if (B.isActive === !1) return;
        let I = (W) => {
          let J = {
              upArrow: W.name === "up",
              downArrow: W.name === "down",
              leftArrow: W.name === "left",
              rightArrow: W.name === "right",
              pageDown: W.name === "pagedown",
              pageUp: W.name === "pageup",
              home: W.name === "home",
              end: W.name === "end",
              return: W.name === "return",
              escape: W.name === "escape",
              fn: W.fn,
              ctrl: W.ctrl,
              shift: W.shift,
              tab: W.name === "tab",
              backspace: W.name === "backspace",
              delete: W.name === "delete",
              meta: W.meta || W.name === "escape" || W.option,
            },
            X = W.ctrl ? W.name : W.sequence;
          if (X === void 0) return;
          if (W.name && DLA.includes(W.name)) X = "";
          if (X.startsWith("\x1B")) X = X.slice(1);
          if (X.length === 1 && typeof X[0] === "string" && X[0].toUpperCase() === X[0]) J.shift = !0;
          if (!(X === "c" && J.ctrl) || !G)
            Zu.batchedUpdates(() => {
              A(X, J);
            });
        };
        return (
          Y?.on("input", I),
          () => {
            Y?.removeListener("input", I);
          }
        );
      }, [B.isActive, Q, G, A]));
  },
  s0 = TO9;
var PO9 = A1(V1(), 1);
var jO9 = A1(V1(), 1);
var SO9 = A1(V1(), 1);
var KA0 = A1(V1(), 1);
var yO9 = A1(V1(), 1);
var kO9 = (A) => ({ width: A.yogaNode?.getComputedWidth() ?? 0, height: A.yogaNode?.getComputedHeight() ?? 0 }),
  HA0 = kO9;
var f9 = A1(V1(), 1);
var tT = A1(V1(), 1);
var zA0 = A1(V1(), 1),
  OLA = 800;
function pT(A, B, Q) {
  let Z = zA0.useRef(0),
    G = zA0.useRef();
  return () => {
    let Y = Date.now();
    if (Y - Z.current <= OLA && G.current) {
      if (G.current) (clearTimeout(G.current), (G.current = void 0));
      (B(), A(!1));
    } else (Q?.(), A(!0), (G.current = setTimeout(() => A(!1), OLA)));
    Z.current = Y;
  };
}
var WMA = A1(V1(), 1);
import { spawn as fO9 } from "node:child_process";
import { PassThrough as xO9 } from "stream";
function pC(A, B, Q = !1) {
  let Z = A;
  if (Q) {
    let G = A.indexOf(`
`);
    if (G !== -1) {
      if (((Z = A.substring(0, G)), Z.length + 1 > B)) return `${Z.substring(0, B - 1)}…`;
      return `${Z}…`;
    }
  }
  if (Z.length <= B) return Z;
  return `${Z.substring(0, B - 1)}…`;
}
function Gu(A) {
  if (A < 60000) {
    let G = (A / 1000).toFixed(1);
    return `${G.endsWith(".0") ? G.slice(0, -2) : G}s`;
  }
  let B = Math.floor(A / 3600000),
    Q = Math.floor((A % 3600000) / 60000),
    Z = ((A % 60000) / 1000).toFixed(1);
  if (B > 0) return `${B}h ${Q}m ${Z}s`;
  if (Q > 0) return `${Q}m ${Z}s`;
  return `${Z}s`;
}
function ZG(A) {
  let B = A >= 1000;
  return new Intl.NumberFormat("en", {
    notation: "compact",
    minimumFractionDigits: B ? 1 : 0,
    maximumFractionDigits: 1,
  })
    .format(A)
    .toLowerCase();
}
function c$1(A, B = {}) {
  let { style: Q = "narrow", numeric: Z = "always", now: G = new Date() } = B,
    Y = A.getTime() - G.getTime(),
    I = Math.trunc(Y / 1000),
    W = [
      { unit: "year", seconds: 31536000, shortUnit: "y" },
      { unit: "month", seconds: 2592000, shortUnit: "mo" },
      { unit: "week", seconds: 604800, shortUnit: "w" },
      { unit: "day", seconds: 86400, shortUnit: "d" },
      { unit: "hour", seconds: 3600, shortUnit: "h" },
      { unit: "minute", seconds: 60, shortUnit: "m" },
      { unit: "second", seconds: 1, shortUnit: "s" },
    ];
  for (let { unit: X, seconds: F, shortUnit: V } of W)
    if (Math.abs(I) >= F) {
      let K = Math.trunc(I / F);
      if (Q === "narrow" && F < 86400) return I < 0 ? `${Math.abs(K)}${V} ago` : `in ${K}${V}`;
      return new Intl.RelativeTimeFormat("en", { style: "long", numeric: Z }).format(K, X);
    }
  if (Q === "narrow") return I <= 0 ? "0s ago" : "in 0s";
  return new Intl.RelativeTimeFormat("en", { style: Q, numeric: Z }).format(0, "second");
}
function Yu(A, B = {}) {
  let { now: Q = new Date(), ...Z } = B;
  if (A > Q) return c$1(A, { ...Z, now: Q });
  return c$1(A, { ...Z, numeric: "always", now: Q });
}
function iC(A, B = !1) {
  if (!A) return;
  let Q = new Date(A * 1000),
    Z = new Date(),
    G = Q.getMinutes();
  if ((Q.getTime() - Z.getTime()) / 3600000 > 24) {
    let J = { month: "short", day: "numeric", hour: "numeric", minute: G === 0 ? void 0 : "2-digit", hour12: !0 };
    if (Q.getFullYear() !== Z.getFullYear()) J.year = "numeric";
    return (
      Q.toLocaleString("en-US", J).replace(/ ([AP]M)/i, (F, V) => V.toLowerCase()) +
      (B ? ` (${Intl.DateTimeFormat().resolvedOptions().timeZone})` : "")
    );
  }
  let I = Q.toLocaleTimeString("en-US", { hour: "numeric", minute: G === 0 ? void 0 : "2-digit", hour12: !0 }),
    W = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return I.replace(/ ([AP]M)/i, (J, X) => X.toLowerCase()) + (B ? ` (${W})` : "");
}
var vLA = A1(yLA(), 1);
class f61 {
  capacity;
  buffer;
  head = 0;
  size = 0;
  constructor(A) {
    this.capacity = A;
    this.buffer = new Array(A);
  }
  add(A) {
    if (((this.buffer[this.head] = A), (this.head = (this.head + 1) % this.capacity), this.size < this.capacity))
      this.size++;
  }
  addAll(A) {
    for (let B of A) this.add(B);
  }
  getRecent(A) {
    let B = [],
      Q = this.size < this.capacity ? 0 : this.head,
      Z = Math.min(A, this.size);
    for (let G = 0; G < Z; G++) {
      let Y = (Q + this.size - Z + G) % this.capacity;
      B.push(this.buffer[Y]);
    }
    return B;
  }
  toArray() {
    if (this.size === 0) return [];
    let A = [],
      B = this.size < this.capacity ? 0 : this.head;
    for (let Q = 0; Q < this.size; Q++) {
      let Z = (B + Q) % this.capacity;
      A.push(this.buffer[Z]);
    }
    return A;
  }
  clear() {
    ((this.head = 0), (this.size = 0));
  }
  length() {
    return this.size;
  }
}
function CA0(A, B = ",", Q = 67108736) {
  let G = "";
  for (let Y of A) {
    let I = G ? B : "",
      W = I + Y;
    if (G.length + W.length <= Q) G += W;
    else {
      let J = Q - G.length - I.length - 14;
      if (J > 0) G += I + Y.slice(0, J) + "...[truncated]";
      else G += "...[truncated]";
      return G;
    }
  }
  return G;
}
class ta {
  maxSize;
  content = "";
  isTruncated = !1;
  totalBytesReceived = 0;
  constructor(A = 67108736) {
    this.maxSize = A;
  }
  append(A) {
    let B = typeof A === "string" ? A : A.toString();
    if (((this.totalBytesReceived += B.length), this.isTruncated && this.content.length >= this.maxSize)) return;
    if (this.content.length + B.length > this.maxSize) {
      let Q = this.maxSize - this.content.length;
      if (Q > 0) this.content += B.slice(0, Q);
      this.isTruncated = !0;
    } else this.content += B;
  }
  toString() {
    if (!this.isTruncated) return this.content;
    let A = this.totalBytesReceived - this.maxSize,
      B = Math.round(A / 1024);
    return (
      this.content +
      `
... [output truncated - ${B}KB removed]`
    );
  }
  clear() {
    ((this.content = ""), (this.isTruncated = !1), (this.totalBytesReceived = 0));
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}
var kLA = 137,
  _LA = 143;
function xLA(A) {
  let B = null,
    Q = new ta();
  A.on("data", (G) => {
    if (B) B.write(G);
    else Q.append(G);
  });
  let Z = () => Q.toString();
  return {
    get: Z,
    asStream() {
      return ((B = new xO9({ highWaterMark: 10485760 })), B.write(Z()), Q.clear(), B);
    },
  };
}
function l$1(A, B, Q, Z) {
  let G = "running",
    Y,
    I = xLA(A.stdout),
    W = xLA(A.stderr);
  if (Z) {
    let K = new f61(1000),
      H = 0,
      z = (D) => {
        let w = D.toString()
          .split(
            `
`,
          )
          .filter((L) => L.trim());
        (K.addAll(w), (H += w.length));
        let E = K.getRecent(5);
        if (E.length > 0)
          Z(
            CA0(
              E,
              `
`,
            ),
            CA0(
              K.getRecent(100),
              `
`,
            ),
            H,
          );
      };
    (A.stdout.on("data", z), A.stderr.on("data", z));
  }
  let J = (K) => {
      if (((G = "killed"), A.pid)) vLA.default(A.pid, "SIGKILL");
    },
    X = null,
    F,
    V = new Promise((K) => {
      let H = () => J();
      ((F = () => {
        if (X) (clearTimeout(X), (X = null));
        B.removeEventListener("abort", H);
      }),
        B.addEventListener("abort", H, { once: !0 }),
        new Promise((z) => {
          let D = J;
          ((J = (C) => {
            (D(), z(C || kLA));
          }),
            (X = setTimeout(() => {
              J(_LA);
            }, Q)),
            A.on("close", (C, w) => {
              z(C !== null && C !== void 0 ? C : w === "SIGTERM" ? 144 : 1);
            }),
            A.on("error", () => z(1)));
        }).then((z) => {
          if ((F(), G === "running")) G = "completed";
          let D = { code: z, stdout: I.get(), stderr: W.get(), interrupted: z === kLA, backgroundTaskId: Y };
          if (z === _LA) D.stderr = [`Command timed out after ${Gu(Q)}`, D.stderr].filter(Boolean).join(" ");
          K(D);
        }));
    });
  return {
    status: G,
    background: (K) => {
      if (G === "running")
        return ((Y = K), (G = "backgrounded"), F(), { stdoutStream: I.asStream(), stderrStream: W.asStream() });
      else return null;
    },
    kill: () => J(),
    result: V,
  };
}
function bLA(A) {
  return {
    status: "killed",
    background: () => null,
    kill: () => {},
    result: Promise.resolve({
      code: 145,
      stdout: "",
      stderr: "Command aborted before execution",
      interrupted: !0,
      backgroundTaskId: A,
    }),
  };
}
import { randomUUID as u61 } from "crypto";
function p$1(A, B) {
  let Q = A.lastIndexOf(" -");
  if (Q > 0) {
    let Z = A.substring(0, Q),
      G = A.substring(Q + 1);
    return `${k8([Z])} ${G} ${k8([B])}`;
  } else return `${k8([A])} ${k8([B])}`;
}
var H_ = null,
  fLA = null;
function UA0(A) {
  if (!A) return null;
  let B = {},
    Q = Object.keys(A).sort();
  for (let Z of Q) {
    let G = A[Z];
    if (!G) continue;
    let Y = [...G].sort((I, W) => {
      let J = I.matcher || "",
        X = W.matcher || "";
      return J.localeCompare(X);
    });
    B[Z] = Y.map((I) => ({
      matcher: I.matcher,
      hooks: [...I.hooks].sort((W, J) => W.command.localeCompare(J.command)),
    }));
  }
  return B;
}
function $A0() {
  let A = E2() || {};
  H_ = UA0(A.hooks);
}
function h61() {
  let A = E2() || {};
  H_ = UA0(A.hooks);
}
function i$1(A) {
  fLA = A;
}
function n$1() {
  return fLA;
}
function hLA() {
  if (H_ === null) return null;
  let A = E2() || {},
    B = UA0(A.hooks),
    Q = JSON.stringify(H_),
    Z = JSON.stringify(B);
  if (Q === Z) return null;
  let G = [],
    Y = new Set(Object.keys(H_ || {})),
    I = new Set(Object.keys(B || {}));
  for (let W of I) if (!Y.has(W)) G.push(`Added hooks for event: ${W}`);
  for (let W of Y) if (!I.has(W)) G.push(`Removed all hooks for event: ${W}`);
  for (let W of Y)
    if (I.has(W)) {
      let J = H_?.[W] || [],
        X = B?.[W] || [];
      if (JSON.stringify(J) !== JSON.stringify(X)) {
        let F = [],
          V = new Map(J.map((H) => [H.matcher || "", H])),
          K = new Map(X.map((H) => [H.matcher || "", H]));
        for (let [H] of K) if (!V.has(H)) F.push(`  - Added matcher: ${H || "(no matcher)"}`);
        for (let [H] of V) if (!K.has(H)) F.push(`  - Removed matcher: ${H || "(no matcher)"}`);
        for (let [H, z] of K)
          if (V.has(H)) {
            let D = V.get(H);
            if (JSON.stringify(D.hooks) !== JSON.stringify(z.hooks))
              F.push(`  - Modified hooks for matcher: ${H || "(no matcher)"}`);
          }
        if (F.length > 0) (G.push(`Modified hooks for event: ${W}`), G.push(...F));
        else G.push(`Modified hooks for event: ${W}`);
      }
    }
  return G.length > 0
    ? G.join(`
`)
    : "Hooks configuration has been modified";
}
function gLA() {
  if (H_ === null) $A0();
  return H_;
}
var vO9 = f.object({ async: f.literal(!0), asyncTimeout: f.number().optional() }),
  bO9 = f.object({
    continue: f.boolean().optional(),
    suppressOutput: f.boolean().optional(),
    stopReason: f.string().optional(),
    decision: f.enum(["approve", "block"]).optional(),
    reason: f.string().optional(),
    systemMessage: f.string().optional(),
    hookSpecificOutput: f
      .union([
        f.object({
          hookEventName: f.literal("PreToolUse"),
          permissionDecision: f.enum(["allow", "deny", "ask"]).optional(),
          permissionDecisionReason: f.string().optional(),
        }),
        f.object({ hookEventName: f.literal("UserPromptSubmit"), additionalContext: f.string().optional() }),
        f.object({ hookEventName: f.literal("SessionStart"), additionalContext: f.string().optional() }),
        f.object({ hookEventName: f.literal("PostToolUse"), additionalContext: f.string().optional() }),
      ])
      .optional(),
  }),
  a$1 = f.union([vO9, bO9]);
function uLA(A) {
  return !("async" in A && A.async === !0);
}
function g61(A) {
  return "async" in A && A.async === !0;
}
var Iu = new Map();
function mLA(A, B, Q, Z, G, Y, I) {
  let W = B.asyncTimeout || 15000;
  (F1(`Hooks: Registering async hook ${A} (${Q}) with timeout ${W}ms`),
    Iu.set(A, {
      processId: A,
      hookName: Q,
      hookEvent: Z,
      toolName: I,
      command: G,
      startTime: Date.now(),
      timeout: W,
      stdout: "",
      responseAttachmentSent: !1,
      shellCommand: Y,
    }));
}
function dLA(A, B) {
  let Q = Iu.get(A);
  if (Q) (F1(`Hooks: Adding output to ${A}: ${B.substring(0, 50)}...`), (Q.stdout += B));
  else F1(`Hooks: Attempted to add output to unknown process ${A}`);
}
function cLA() {
  F1("Hooks: checkForNewResponses called");
  let A = [],
    B = Iu.size;
  F1(`Hooks: Found ${B} total hooks in registry`);
  let Q = [];
  for (let Z of Iu.values()) {
    if (
      (F1(
        `Hooks: Checking hook ${Z.processId} (${Z.hookName}) - attachmentSent: ${Z.responseAttachmentSent}, stdout length: ${Z.stdout.length}`,
      ),
      !Z.shellCommand)
    ) {
      (F1(`Hooks: Hook ${Z.processId} has no shell command, removing from registry`), Q.push(Z.processId));
      continue;
    }
    if (Z.shellCommand.status === "killed" || Z.shellCommand.status === "completed") {
      (F1(`Hooks: Hook ${Z.processId} is ${Z.shellCommand.status}, removing from registry`), Q.push(Z.processId));
      continue;
    }
    if (Z.responseAttachmentSent || !Z.stdout.trim()) {
      F1(`Hooks: Skipping hook ${Z.processId} - already delivered/sent or no stdout`);
      continue;
    }
    let G = Z.stdout.split(`
`);
    F1(`Hooks: Processing ${G.length} lines of stdout for ${Z.processId}`);
    for (let Y of G)
      if (Y.trim().startsWith("{")) {
        F1(`Hooks: Found JSON line: ${Y.trim().substring(0, 100)}...`);
        try {
          let I = JSON.parse(Y.trim());
          if (!("async" in I)) {
            (F1(`Hooks: Found sync response from ${Z.processId}: ${JSON.stringify(I)}`),
              A.push({
                processId: Z.processId,
                response: I,
                hookName: Z.hookName,
                hookEvent: Z.hookEvent,
                toolName: Z.toolName,
              }),
              (Z.responseAttachmentSent = !0));
            break;
          } else F1(`Hooks: Skipping async response from ${Z.processId}`);
        } catch {
          F1(`Hooks: Failed to parse JSON from ${Z.processId}: ${Y.trim()}`);
        }
      }
  }
  for (let Z of Q) Iu.delete(Z);
  return (F1(`Hooks: checkForNewResponses returning ${A.length} responses`), A);
}
function lLA(A) {
  for (let B of A) {
    let Q = Iu.get(B);
    if (Q && Q.responseAttachmentSent) (F1(`Hooks: Removing delivered hook ${B}`), Iu.delete(B));
  }
}
var CL = 60000;
function UL(A) {
  return { session_id: U2(), transcript_path: r$1(), cwd: AA(), permission_mode: A };
}
function pLA(A) {
  let B = A.trim();
  if (!B.startsWith("{")) return (F1("Hook output does not start with {, treating as plain text"), { plainText: A });
  try {
    let Q = JSON.parse(B),
      Z = a$1.safeParse(Q);
    if (Z.success) return (F1("Successfully parsed and validated hook JSON output"), { json: Z.data });
    else {
      let Y = `Hook JSON output validation failed:
${Z.error.errors.map((I) => `  - ${I.path.join(".")}: ${I.message}`).join(`
`)}

Expected schema:
${JSON.stringify({ continue: "boolean (optional)", suppressOutput: "boolean (optional)", stopReason: "string (optional)", decision: '"approve" | "block" (optional)', reason: "string (optional)", systemMessage: "string (optional)", permissionDecision: '"allow" | "deny" | "ask" (optional)', hookSpecificOutput: { "for PreToolUse": { hookEventName: '"PreToolUse"', permissionDecision: '"allow" | "deny" | "ask" (optional)', permissionDecisionReason: "string (optional)" }, "for UserPromptSubmit": { hookEventName: '"UserPromptSubmit"', additionalContext: "string (required)" } } }, null, 2)}`;
      return (F1(Y), { plainText: A, validationError: Y });
    }
  } catch (Q) {
    return (F1(`Failed to parse hook output as JSON: ${Q}`), { plainText: A });
  }
}
function iLA(A, B, Q) {
  let Z = {};
  if (g61(A)) return Z;
  let G = A;
  if (G.continue === !1) {
    if (((Z.preventContinuation = !0), G.stopReason)) Z.stopReason = G.stopReason;
  }
  if (A.decision)
    switch (A.decision) {
      case "approve":
        Z.permissionBehavior = "allow";
        break;
      case "block":
        ((Z.permissionBehavior = "deny"),
          (Z.blockingError = { blockingError: A.reason || "Blocked by hook", command: B }));
        break;
      default:
        throw new Error(`Unknown hook decision type: ${A.decision}. Valid types are: approve, block`);
    }
  if (A.systemMessage) Z.systemMessage = X3(A.systemMessage, "warning");
  if (A.hookSpecificOutput?.hookEventName === "PreToolUse" && A.hookSpecificOutput.permissionDecision)
    switch (A.hookSpecificOutput.permissionDecision) {
      case "allow":
        Z.permissionBehavior = "allow";
        break;
      case "deny":
        ((Z.permissionBehavior = "deny"),
          (Z.blockingError = { blockingError: A.reason || "Blocked by hook", command: B }));
        break;
      case "ask":
        Z.permissionBehavior = "ask";
        break;
      default:
        throw new Error(
          `Unknown hook permissionDecision type: ${A.hookSpecificOutput.permissionDecision}. Valid types are: allow, deny, ask`,
        );
    }
  if (Z.permissionBehavior !== void 0 && A.reason !== void 0) Z.hookPermissionDecisionReason = A.reason;
  if (A.hookSpecificOutput) {
    if (Q && A.hookSpecificOutput.hookEventName !== Q)
      throw new Error(
        `Hook returned incorrect event name: expected '${Q}' but got '${A.hookSpecificOutput.hookEventName}'`,
      );
    switch (A.hookSpecificOutput.hookEventName) {
      case "PreToolUse":
        if (A.hookSpecificOutput.permissionDecision)
          switch (A.hookSpecificOutput.permissionDecision) {
            case "allow":
              Z.permissionBehavior = "allow";
              break;
            case "deny":
              ((Z.permissionBehavior = "deny"),
                (Z.blockingError = {
                  blockingError: A.hookSpecificOutput.permissionDecisionReason || A.reason || "Blocked by hook",
                  command: B,
                }));
              break;
            case "ask":
              Z.permissionBehavior = "ask";
              break;
          }
        Z.hookPermissionDecisionReason = A.hookSpecificOutput.permissionDecisionReason;
        break;
      case "UserPromptSubmit":
        Z.additionalContext = A.hookSpecificOutput.additionalContext;
        break;
      case "SessionStart":
        Z.additionalContext = A.hookSpecificOutput.additionalContext;
        break;
      case "PostToolUse":
        Z.additionalContext = A.hookSpecificOutput.additionalContext;
        break;
    }
  }
  return Z;
}
async function qA0(A, B, Q, Z) {
  if (Z.aborted) return { stdout: "", stderr: "Operation cancelled", status: 1, aborted: !0 };
  let G = WQ(),
    Y = process.env.CLAUDE_CODE_SHELL_PREFIX ? p$1(process.env.CLAUDE_CODE_SHELL_PREFIX, A.command) : A.command,
    I = A.timeout ? A.timeout * 1000 : 60000,
    W = fO9(Y, [], { env: { ...process.env, CLAUDE_PROJECT_DIR: G }, cwd: AA(), shell: !0 }),
    J = l$1(W, Z, I),
    X = "",
    F = "";
  (W.stdout.setEncoding("utf8"), W.stderr.setEncoding("utf8"));
  let V = !1,
    K = null,
    H = new Promise((w) => {
      K = w;
    });
  (W.stdout.on("data", (w) => {
    if (((X += w), !V && X.trim().includes("}"))) {
      ((V = !0), F1(`Hooks: Checking initial response for async: ${X.trim()}`));
      try {
        let E = JSON.parse(X.trim());
        if ((F1(`Hooks: Parsed initial response: ${JSON.stringify(E)}`), g61(E))) {
          let L = `async_hook_${W.pid}`;
          F1(`Hooks: Detected async hook, backgrounding process ${L}`);
          let O = J.background(L);
          if (O)
            (mLA(L, E, A.command, B, A.command, J),
              O.stdoutStream.on("data", (R) => {
                dLA(L, R.toString());
              }),
              K?.({ stdout: X, stderr: F, status: 0 }));
        } else F1("Hooks: Initial response is not async, continuing normal processing");
      } catch (E) {
        F1(`Hooks: Failed to parse initial response as JSON: ${E}`);
      }
    }
  }),
    W.stderr.on("data", (w) => {
      F += w;
    }));
  let z = new Promise((w, E) => {
      (W.stdin.on("error", E), W.stdin.write(Q, "utf8"), W.stdin.end(), w());
    }),
    D = new Promise((w, E) => {
      W.on("error", E);
    }),
    C = new Promise((w) => {
      W.on("close", (E) => {
        w({ stdout: X, stderr: F, status: E ?? 1, aborted: Z.aborted });
      });
    });
  try {
    return (await Promise.race([z, D]), await Promise.race([H, C, D]));
  } catch (w) {
    let E = w;
    if (E.code === "EPIPE")
      return (
        F1("EPIPE error while writing to hook stdin (hook command likely closed early)"),
        { stdout: "", stderr: "Hook command closed stdin before hook input was fully written (EPIPE)", status: 1 }
      );
    else if (E.code === "ABORT_ERR") return { stdout: "", stderr: "Hook cancelled", status: 1, aborted: !0 };
    else
      return {
        stdout: "",
        stderr: `Error occurred while executing hook command: ${w instanceof Error ? w.message : String(w)}`,
        status: 1,
      };
  }
}
function hO9(A, B) {
  if (!B || B === "*") return !0;
  if (/^[a-zA-Z0-9_|]+$/.test(B)) {
    if (B.includes("|"))
      return B.split("|")
        .map((Z) => Z.trim())
        .includes(A);
    return A === B;
  }
  try {
    return new RegExp(B).test(A);
  } catch {
    return (F1(`Invalid regex pattern in hook matcher: ${B}`), !1);
  }
}
function gO9() {
  let A = {},
    B = gLA();
  if (B) for (let [Z, G] of Object.entries(B)) A[Z] = G.map((Y) => ({ matcher: Y.matcher, hooks: Y.hooks }));
  let Q = n$1();
  if (Q)
    for (let [Z, G] of Object.entries(Q)) {
      if (!A[Z]) A[Z] = [];
      for (let Y of G) A[Z].push({ matcher: Y.matcher, hooks: Y.hooks });
    }
  return A;
}
function nLA(A, B) {
  try {
    let Z = gO9()?.[A] ?? [],
      G = void 0;
    switch (B.hook_event_name) {
      case "PreToolUse":
      case "PostToolUse":
        G = B.tool_name;
        break;
      case "SessionStart":
        G = B.source;
        break;
      case "PreCompact":
        G = B.trigger;
        break;
      default:
        break;
    }
    (F1(`Getting matching hook commands for ${A} with query: ${G}`), F1(`Found ${Z.length} hook matchers in settings`));
    let Y;
    if (!G) Y = Z.flatMap((X) => X.hooks);
    else Y = Z.filter((X) => !X.matcher || hO9(G, X.matcher)).flatMap((X) => X.hooks);
    let I = Array.from(new Map(Y.filter((X) => X.type === "command").map((X) => [X.command, X])).values()),
      W = Y.filter((X) => X.type === "callback"),
      J = [...I, ...W];
    return (
      F1(`Matched ${J.length} unique hooks for query "${G || "no match query"}" (${Y.length} before deduplication)`),
      J
    );
  } catch {
    return [];
  }
}
function aLA(A, B) {
  let Q = B.map((Z) => `- ${Z.blockingError}`).join(`
`);
  return `${A} operation blocked by hook:
${Q}`;
}
function sLA(A, B) {
  let Q = B.map((Z) => `- ${Z.blockingError}`).join(`
`);
  return `${A} operation feedback:
${Q}`;
}
function rLA(A) {
  return `Stop hook feedback:
${A.map((Q) => `- ${Q.blockingError}`).join(`
`)}`;
}
function oLA(A) {
  return `UserPromptSubmit operation blocked by hook:
${A.map((Q) => `- ${Q.blockingError}`).join(`
`)}`;
}
function wA0(A, B) {
  let Q = C4(),
    Z = () => {
      Q.abort();
    };
  (A.addEventListener("abort", Z), B.addEventListener("abort", Z));
  let G = () => {
    (A.removeEventListener("abort", Z), B.removeEventListener("abort", Z));
  };
  return { signal: Q.signal, cleanup: G };
}
async function* m61(A, B, Q, Z, G = CL, Y = !1) {
  let I = A.hook_event_name,
    W = Q ? `${I}:${Q}` : I;
  if (E2().disableAllHooks) {
    F1(`Skipping hooks for ${W} due to 'disableAllHooks' setting`);
    return;
  }
  F1(`Executing hooks for ${W}`);
  let J = nLA(I, A).filter((L) => L.type === "command" || L.type === "callback");
  if ((F1(`Found ${J.length} hook commands to execute`), J.length === 0)) return;
  if (Z?.aborted) return;
  let X;
  try {
    X = JSON.stringify(A);
  } catch (L) {
    (U1(Error(`Failed to stringify hook ${W} input`, { cause: L }), uZA),
      yield {
        message: X3(`Failed to prepare hook input: ${L instanceof Error ? L.message : String(L)}`, "warning", B),
      });
    return;
  }
  Y1("tengu_run_hook", { hookName: W, numCommands: J.length });
  let F = [];
  for (let L of J)
    yield {
      message: {
        type: "progress",
        data: { type: "running_hook", hookName: W, command: L.type === "command" ? L.command : "callback" },
        parentToolUseID: B,
        toolUseID: `hook-${u61()}`,
        timestamp: new Date().toISOString(),
        uuid: u61(),
      },
    };
  let V = J.map(async (L) => {
      if (L.type === "callback") {
        let _, b;
        if (Z) {
          let S = wA0(Z, AbortSignal.timeout(G));
          ((_ = S.signal), (b = S.cleanup));
        } else _ = AbortSignal.timeout(G);
        return uO9(B, L, A, _).finally(b);
      }
      let O = L.timeout ? L.timeout * 1000 : G,
        R,
        P;
      if (Z) {
        let _ = wA0(Z, AbortSignal.timeout(O));
        ((R = _.signal), (P = _.cleanup));
      } else R = AbortSignal.timeout(O);
      try {
        F1(`Executing hook command: ${L.command} with timeout ${O}ms`);
        let _ = await qA0(L, W, X, R);
        if ((P?.(), F1(`Hook command completed with status ${_.status}: ${L.command}`), _.stdout))
          F1(`Hook stdout: ${_.stdout.substring(0, 200)}...`);
        if (_.stderr) F1(`Hook stderr: ${_.stderr}`);
        if (_.aborted)
          return {
            message: X3(`${n1.bold(W)} [${L.command}] ${n1.yellow("cancelled")}`, "info", B),
            outcome: "cancelled",
          };
        let { json: b, plainText: S, validationError: d } = pLA(_.stdout);
        if (d)
          return {
            message: X3(
              `${n1.bold(W)} [${L.command}] ${n1.yellow("JSON validation failed")}:
${d}`,
              "warning",
              B,
            ),
            outcome: "non_blocking_error",
          };
        if (b) {
          F1(`Parsed JSON output from hook: ${JSON.stringify(b)}`);
          let u = iLA(b, L.command, I);
          if ((F1(`Processed hook result: ${JSON.stringify(u)}`), g61(b))) return { ...u, outcome: "success" };
          else if (uLA(b) && !b.suppressOutput && S && _.status === 0) {
            let o = `${n1.bold(W)} completed`;
            return { ...u, message: u.message || X3(o, "info", B), outcome: "success" };
          }
          return { ...u, outcome: "success" };
        }
        if (_.status === 0) {
          let u = `${n1.bold(W)} [${L.command}] completed successfully`;
          if (_.stdout.trim()) u += `: ${_.stdout.trim()}`;
          return {
            message: X3(u, "info", B),
            outcome: "success",
            ...(Y && _.stdout ? { additionalContext: _.stdout.trim() } : {}),
          };
        }
        if (_.status === 2)
          return {
            blockingError: { blockingError: `[${L.command}]: ${_.stderr || "No stderr output"}`, command: L.command },
            outcome: "blocking",
          };
        return {
          message: X3(
            `${n1.bold(W)} [${L.command}] failed with non-blocking status code ${_.status}: ${_.stderr || "No stderr output"}`,
            "warning",
            B,
          ),
          outcome: "non_blocking_error",
        };
      } catch (_) {
        P?.();
        let b = _ instanceof Error ? _.message : String(_);
        return {
          message: X3(`${n1.bold(W)} [${L.command}] failed to run: ${b}`, "warning", B),
          outcome: "non_blocking_error",
        };
      }
    }),
    K = await Promise.all(V),
    H = { success: 0, blocking: 0, non_blocking_error: 0, cancelled: 0 },
    z = !1,
    D,
    C,
    w,
    E = [];
  for (let L of K) {
    if (!L) continue;
    if (L.outcome) H[L.outcome]++;
    if (L.preventContinuation) {
      if (((z = !0), L.stopReason)) D = L.stopReason;
    }
    if (L.blockingError) F.push(L.blockingError);
    if (L.message) yield { message: L.message };
    if (L.systemMessage) yield { message: L.systemMessage };
    if (L.additionalContext) E.push(L.additionalContext);
    if (L.permissionBehavior)
      switch (L.permissionBehavior) {
        case "deny":
          w = "deny";
          break;
        case "ask":
          if (w !== "deny") w = "ask";
          break;
        case "allow":
          if (!w) w = "allow";
          break;
        case "passthrough":
          break;
      }
    if (L.hookPermissionDecisionReason) C = L.hookPermissionDecisionReason;
  }
  if (
    (Y1("tengu_repl_hook_finished", {
      hookName: W,
      numCommands: J.length,
      numSuccess: H.success,
      numBlocking: H.blocking,
      numNonBlockingError: H.non_blocking_error,
      numCancelled: H.cancelled,
    }),
    yield { blockingErrors: F },
    w !== void 0)
  )
    yield { permissionBehavior: w, hookPermissionDecisionReason: C };
  if (E.length > 0) yield { additionalContexts: E };
  if (z) yield { preventContinuation: !0, stopReason: D };
}
async function EA0(A, B, Q, Z = CL) {
  let G = A.hook_event_name,
    Y = B ? `${G}:${B}` : G;
  if (E2().disableAllHooks) return (F1(`Skipping hooks for ${Y} due to 'disableAllHooks' setting`), []);
  let I = nLA(G, A).filter((F) => F.type === "command");
  if (I.length === 0) return [];
  if (Q?.aborted) return [];
  Y1("tengu_run_hook", { hookName: Y, numCommands: I.length });
  let W;
  try {
    W = JSON.stringify(A);
  } catch (F) {
    return (U1(F instanceof Error ? F : new Error(String(F)), mZA), []);
  }
  let J = I.map(async (F) => {
    let V,
      K,
      H = F.timeout ? F.timeout * 1000 : Z;
    if (Q) {
      let z = wA0(Q, AbortSignal.timeout(H));
      ((V = z.signal), (K = z.cleanup));
    } else V = AbortSignal.timeout(H);
    try {
      let z = await qA0(F, Y, W, V);
      if ((K?.(), z.aborted))
        return (F1(`${Y} [${F.command}] cancelled`), { command: F.command, succeeded: !1, output: "Hook cancelled" });
      F1(`${Y} [${F.command}] completed with status ${z.status}`);
      let { json: D, validationError: C } = pLA(z.stdout);
      if (C)
        throw (jT(`${n1.bold(Y)} [${F.command}] ${n1.yellow("Hook JSON output validation failed")}`), new Error(C));
      if (D && !g61(D)) {
        if ((F1(`Parsed JSON output from hook: ${JSON.stringify(D)}`), D.systemMessage)) eZ(D.systemMessage);
      }
      let w = z.status === 0 ? z.stdout || "" : z.stderr || "";
      return { command: F.command, succeeded: z.status === 0, output: w };
    } catch (z) {
      K?.();
      let D = z instanceof Error ? z.message : String(z);
      return (d0(`${Y} [${F.command}] failed to run: ${D}`), { command: F.command, succeeded: !1, output: D });
    }
  });
  return await Promise.all(J);
}
async function* tLA(A, B, Q, Z, G, Y = CL) {
  F1(`executePreToolHooks called for tool: ${A}`);
  let I = { ...UL(Z), hook_event_name: "PreToolUse", tool_name: A, tool_input: Q };
  yield* m61(I, B, A, G, Y);
}
async function* eLA(A, B, Q, Z, G, Y, I = CL) {
  let W = { ...UL(G), hook_event_name: "PostToolUse", tool_name: A, tool_input: Q, tool_response: Z },
    J = m61(W, B, A, Y, I, !1),
    X = !1;
  for await (let F of J) {
    let V = F.message;
    if (V === void 0 || V.type !== "progress") {
      yield F;
      continue;
    }
    if (V.data.type === "running_hook" && !X)
      (yield { message: X3(`Running ${n1.bold(V.data.hookName)}...`, "info", B) }, (X = !0));
  }
}
async function AMA(A, B = CL) {
  let Q = { ...UL(void 0), hook_event_name: "Notification", message: A.message, title: A.title };
  await EA0(Q, void 0, void 0, B);
}
async function* BMA(A, B, Q = CL, Z = !1, G = !1) {
  let Y = { ...UL(A), hook_event_name: G ? "SubagentStop" : "Stop", stop_hook_active: Z };
  yield* m61(Y, u61(), void 0, B, Q);
}
async function* QMA(A, B, Q, Z = CL) {
  let G = { ...UL(B), hook_event_name: "UserPromptSubmit", prompt: A };
  yield* m61(G, u61(), void 0, Q, Z, !0);
}
async function* ZMA(A, B, Q = CL) {
  let Z = { ...UL(void 0), hook_event_name: "SessionStart", source: A };
  yield* m61(Z, u61(), A, B, Q, !0);
}
async function GMA(A, B, Q = CL) {
  let Z = {
      ...UL(void 0),
      hook_event_name: "PreCompact",
      trigger: A.trigger,
      custom_instructions: A.customInstructions,
    },
    G = await EA0(Z, A.trigger, B, Q);
  if (G.length === 0) return {};
  let Y = G.filter((W) => W.succeeded && W.output.trim().length > 0).map((W) => W.output.trim()),
    I = [];
  for (let W of G)
    if (W.succeeded)
      if (W.output.trim()) I.push(`PreCompact [${W.command}] completed successfully: ${W.output.trim()}`);
      else I.push(`PreCompact [${W.command}] completed successfully`);
    else if (W.output.trim()) I.push(`PreCompact [${W.command}] failed: ${W.output.trim()}`);
    else I.push(`PreCompact [${W.command}] failed`);
  return {
    newCustomInstructions:
      Y.length > 0
        ? Y.join(`

`)
        : void 0,
    userDisplayMessage:
      I.length > 0
        ? I.join(`
`)
        : void 0,
  };
}
async function s$1(A, B, Q = CL) {
  let Z = { ...UL(void 0), hook_event_name: "SessionEnd", reason: A };
  await EA0(Z, A, B, Q);
}
async function YMA(A, B, Q = 5000) {
  let Z = E2(),
    G = Z?.statusLine;
  if (Z?.disableAllHooks === !0) return;
  if (!G || G.type !== "command") return;
  let Y = B || AbortSignal.timeout(Q);
  try {
    let I = JSON.stringify(A),
      W = await qA0(G, "statusLine", I, Y);
    if (W.aborted) return;
    if (W.status === 0) {
      let J = W.stdout
        .trim()
        .split(
          `
`,
        )
        .flatMap((X) => X.trim() || []).join(`
`);
      if (J) return J;
    }
    return;
  } catch (I) {
    d0(`Status hook failed: ${I}`);
    return;
  }
}
async function uO9(A, B, Q, Z) {
  let G = await B.callback(Q, A, Z);
  return { ...iLA(G, "callback"), outcome: "success" };
}
function mO9() {
  try {
    if (process.stdin.isTTY && typeof process.stdin.setRawMode === "function")
      (process.stdin.setRawMode(!1), process.stdin.unref());
  } catch {}
}
var NA0 = new Set();
function Fq(A) {
  return (NA0.add(A), () => NA0.delete(A));
}
var IMA = YA(() => {
  (process.on("SIGINT", () => {
    Z5(0);
  }),
    process.on("SIGTERM", () => {
      Z5(143);
    }));
});
function G5(A = 0, B = "other") {
  Z5(A, B).catch((Q) => {
    (d0(`Graceful shutdown failed: ${Q}`), process.exit(A));
  });
}
async function Z5(A = 0, B = "other") {
  ((process.exitCode = A), mO9());
  try {
    await s$1(B);
  } catch {}
  try {
    let Q = (async () => {
      try {
        await Promise.all(Array.from(NA0).map((Z) => Z()));
      } catch {}
    })();
    (await Promise.race([Q, new Promise((Z, G) => setTimeout(() => G(new Error("Cleanup timeout")), 2000))]),
      process.exit(A));
  } catch {
    process.exit(A);
  }
}
function Z2(A) {
  let [B, Q] = WMA.useState({ pending: !1, keyName: null }),
    Z = pT(
      (Y) => Q({ pending: Y, keyName: "Ctrl-C" }),
      A
        ? A
        : async () => {
            await Z5(0);
          },
    ),
    G = pT(
      (Y) => Q({ pending: Y, keyName: "Ctrl-D" }),
      A
        ? A
        : async () => {
            await Z5(0);
          },
    );
  return (
    s0((Y, I) => {
      if (I.ctrl && Y === "c") Z();
      if (I.ctrl && Y === "d") G();
    }),
    B
  );
}
var DPA = A1(V1(), 1);
var ZPA = A1(V1(), 1);
var LA0 = new Intl.Segmenter(void 0, { granularity: "grapheme" });
class O5 {
  measuredText;
  selection;
  offset;
  constructor(A, B = 0, Q = 0) {
    this.measuredText = A;
    this.selection = Q;
    this.offset = Math.max(0, Math.min(this.text.length, B));
  }
  static fromText(A, B, Q = 0, Z = 0) {
    return new O5(new JMA(A, B - 1), Q, Z);
  }
  render(A, B, Q) {
    let { line: Z, column: G } = this.getPosition();
    return this.measuredText.getWrappedText().map((Y, I, W) => {
      let J = Y;
      if (B && I === W.length - 1) {
        let z = Math.max(0, Y.length - 6);
        J = B.repeat(z) + Y.slice(z);
      }
      if (Z !== I) return J.trimEnd();
      let X = this.measuredText.displayWidthToStringIndex(J, G),
        F = Array.from(LA0.segment(J)).map(({ segment: z, index: D }) => ({ segment: z, index: D })),
        V = "",
        K = A,
        H = "";
      for (let { segment: z, index: D } of F) {
        let C = D + z.length;
        if (C <= X) V += z;
        else if (D < X && C > X) K = z;
        else if (D === X) K = z;
        else H += z;
      }
      return V + Q(K) + H.trimEnd();
    }).join(`
`);
  }
  left() {
    if (this.offset === 0) return this;
    let A = this.measuredText.prevOffset(this.offset);
    return new O5(this.measuredText, A);
  }
  right() {
    if (this.offset >= this.text.length) return this;
    let A = this.measuredText.nextOffset(this.offset);
    return new O5(this.measuredText, Math.min(A, this.text.length));
  }
  up() {
    let { line: A, column: B } = this.getPosition();
    if (A === 0) return this;
    let Q = this.measuredText.getWrappedText()[A - 1];
    if (!Q) return this;
    let Z = J3(Q);
    if (B > Z) {
      let Y = this.getOffset({ line: A - 1, column: Z });
      return new O5(this.measuredText, Y, 0);
    }
    let G = this.getOffset({ line: A - 1, column: B });
    return new O5(this.measuredText, G, 0);
  }
  down() {
    let { line: A, column: B } = this.getPosition();
    if (A >= this.measuredText.lineCount - 1) return this;
    let Q = this.measuredText.getWrappedText()[A + 1];
    if (!Q) return this;
    let Z = J3(Q);
    if (B > Z) {
      let Y = this.getOffset({ line: A + 1, column: Z });
      return new O5(this.measuredText, Y, 0);
    }
    let G = this.getOffset({ line: A + 1, column: B });
    return new O5(this.measuredText, G, 0);
  }
  startOfLine() {
    let { line: A } = this.getPosition();
    return new O5(this.measuredText, this.getOffset({ line: A, column: 0 }), 0);
  }
  firstNonBlankInLine() {
    let { line: A } = this.getPosition(),
      Q = (this.measuredText.getWrappedText()[A] || "").match(/^\s*\S/),
      Z = Q?.index ? Q.index + Q[0].length - 1 : 0,
      G = this.getOffset({ line: A, column: Z });
    return new O5(this.measuredText, G, 0);
  }
  endOfLine() {
    let { line: A } = this.getPosition(),
      B = this.measuredText.getLineLength(A),
      Q = this.getOffset({ line: A, column: B });
    return new O5(this.measuredText, Q, 0);
  }
  findLogicalLineStart(A = this.offset) {
    let B = this.text.lastIndexOf(
      `
`,
      A - 1,
    );
    return B === -1 ? 0 : B + 1;
  }
  findLogicalLineEnd(A = this.offset) {
    let B = this.text.indexOf(
      `
`,
      A,
    );
    return B === -1 ? this.text.length : B;
  }
  getLogicalLineBounds() {
    return { start: this.findLogicalLineStart(), end: this.findLogicalLineEnd() };
  }
  createCursorWithColumn(A, B, Q) {
    let Z = B - A,
      G = Math.min(Q, Z);
    return new O5(this.measuredText, A + G, 0);
  }
  endOfLogicalLine() {
    return new O5(this.measuredText, this.findLogicalLineEnd(), 0);
  }
  startOfLogicalLine() {
    return new O5(this.measuredText, this.findLogicalLineStart(), 0);
  }
  firstNonBlankInLogicalLine() {
    let { start: A, end: B } = this.getLogicalLineBounds(),
      Z = this.text.slice(A, B).match(/\S/),
      G = A + (Z?.index ?? 0);
    return new O5(this.measuredText, G, 0);
  }
  upLogicalLine() {
    let { start: A } = this.getLogicalLineBounds();
    if (A === 0) return new O5(this.measuredText, 0, 0);
    let B = this.offset - A,
      Q = A - 1,
      Z = this.findLogicalLineStart(Q);
    return this.createCursorWithColumn(Z, Q, B);
  }
  downLogicalLine() {
    let { start: A, end: B } = this.getLogicalLineBounds();
    if (B >= this.text.length) return new O5(this.measuredText, this.text.length, 0);
    let Q = this.offset - A,
      Z = B + 1,
      G = this.findLogicalLineEnd(Z);
    return this.createCursorWithColumn(Z, G, Q);
  }
  nextWord() {
    let A = this;
    while (A.isOverWordChar() && !A.isAtEnd()) A = A.right();
    while (!A.isOverWordChar() && !A.isAtEnd()) A = A.right();
    return A;
  }
  endOfWord() {
    let A = this;
    if (A.isOverWordChar() && (!A.right().isOverWordChar() || A.right().isAtEnd()))
      return ((A = A.right()), A.endOfWord());
    if (!A.isOverWordChar()) A = A.nextWord();
    while (A.right().isOverWordChar() && !A.isAtEnd()) A = A.right();
    return A;
  }
  prevWord() {
    let A = this;
    if (!A.left().isOverWordChar()) A = A.left();
    while (!A.isOverWordChar() && !A.isAtStart()) A = A.left();
    if (A.isOverWordChar()) while (A.left().isOverWordChar() && !A.isAtStart()) A = A.left();
    return A;
  }
  nextWORD() {
    let A = this;
    while (!A.isOverWhitespace() && !A.isAtEnd()) A = A.right();
    while (A.isOverWhitespace() && !A.isAtEnd()) A = A.right();
    return A;
  }
  endOfWORD() {
    let A = this;
    if (!A.isOverWhitespace() && (A.right().isOverWhitespace() || A.right().isAtEnd()))
      return ((A = A.right()), A.endOfWORD());
    if (A.isOverWhitespace()) A = A.nextWORD();
    while (!A.right().isOverWhitespace() && !A.isAtEnd()) A = A.right();
    return A;
  }
  prevWORD() {
    let A = this;
    if (A.left().isOverWhitespace()) A = A.left();
    while (A.isOverWhitespace() && !A.isAtStart()) A = A.left();
    if (!A.isOverWhitespace()) while (!A.left().isOverWhitespace() && !A.isAtStart()) A = A.left();
    return A;
  }
  modifyText(A, B = "") {
    let Q = this.offset,
      Z = A.offset,
      G = this.text.slice(0, Q) + B + this.text.slice(Z);
    return O5.fromText(G, this.columns, Q + B.normalize("NFC").length);
  }
  insert(A) {
    return this.modifyText(this, A);
  }
  del() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.right());
  }
  backspace() {
    if (this.isAtStart()) return this;
    return this.left().modifyText(this);
  }
  deleteToLineStart() {
    return this.startOfLine().modifyText(this);
  }
  deleteToLineEnd() {
    if (
      this.text[this.offset] ===
      `
`
    )
      return this.modifyText(this.right());
    return this.modifyText(this.endOfLine());
  }
  deleteToLogicalLineEnd() {
    if (
      this.text[this.offset] ===
      `
`
    )
      return this.modifyText(this.right());
    return this.modifyText(this.endOfLogicalLine());
  }
  deleteWordBefore() {
    if (this.isAtStart()) return this;
    return this.prevWord().modifyText(this);
  }
  deleteWordAfter() {
    if (this.isAtEnd()) return this;
    return this.modifyText(this.nextWord());
  }
  isOverWordChar() {
    let A = this.text[this.offset] ?? "";
    return /\w/.test(A);
  }
  isOverWhitespace() {
    let A = this.text[this.offset] ?? "";
    return /\s/.test(A);
  }
  equals(A) {
    return this.offset === A.offset && this.measuredText === A.measuredText;
  }
  isAtStart() {
    return this.offset === 0;
  }
  isAtEnd() {
    return this.offset >= this.text.length;
  }
  startOfFirstLine() {
    return new O5(this.measuredText, 0, 0);
  }
  startOfLastLine() {
    let A = this.text.lastIndexOf(`
`);
    if (A === -1) return this.startOfLine();
    return new O5(this.measuredText, A + 1, 0);
  }
  get text() {
    return this.measuredText.text;
  }
  get columns() {
    return this.measuredText.columns + 1;
  }
  getPosition() {
    return this.measuredText.getPositionFromOffset(this.offset);
  }
  getOffset(A) {
    return this.measuredText.getOffsetFromPosition(A);
  }
}
class o$1 {
  text;
  startOffset;
  isPrecededByNewline;
  endsWithNewline;
  constructor(A, B, Q, Z = !1) {
    this.text = A;
    this.startOffset = B;
    this.isPrecededByNewline = Q;
    this.endsWithNewline = Z;
  }
  equals(A) {
    return this.text === A.text && this.startOffset === A.startOffset;
  }
  get length() {
    return this.text.length + (this.endsWithNewline ? 1 : 0);
  }
}
class JMA {
  columns;
  wrappedLines;
  text;
  graphemes;
  constructor(A, B) {
    this.columns = B;
    ((this.text = A.normalize("NFC")),
      (this.graphemes = Array.from(LA0.segment(this.text)).map(({ segment: Q, index: Z }) => ({
        grapheme: Q,
        start: Z,
        end: Z + Q.length,
        width: J3(Q),
      }))),
      (this.wrappedLines = this.measureWrappedText()));
  }
  stringIndexToDisplayWidth(A, B) {
    if (B <= 0) return 0;
    if (B >= A.length) return J3(A);
    return J3(A.substring(0, B));
  }
  displayWidthToStringIndex(A, B) {
    if (B <= 0) return 0;
    if (!A) return 0;
    if (A === this.text) return this.offsetAtDisplayWidth(B);
    let Q = 0,
      Z = 0;
    for (let { segment: G, index: Y } of LA0.segment(A)) {
      let I = J3(G);
      if (Q + I > B) break;
      ((Q += I), (Z = Y + G.length));
    }
    return Z;
  }
  offsetAtDisplayWidth(A) {
    if (A <= 0) return 0;
    let B = 0;
    for (let Q of this.graphemes) {
      if (B + Q.width > A) return Q.start;
      B += Q.width;
    }
    return this.text.length;
  }
  measureWrappedText() {
    let A = ca(this.text, this.columns, { hard: !0, trim: !1 }),
      B = [],
      Q = 0,
      Z = -1,
      G = A.split(`
`);
    for (let Y = 0; Y < G.length; Y++) {
      let I = G[Y],
        W = (J) =>
          Y === 0 ||
          (J > 0 &&
            this.text[J - 1] ===
              `
`);
      if (I.length === 0)
        if (
          ((Z = this.text.indexOf(
            `
`,
            Z + 1,
          )),
          Z !== -1)
        ) {
          let J = Z,
            X = !0;
          B.push(new o$1(I, J, W(J), !0));
        } else {
          let J = this.text.length;
          B.push(new o$1(I, J, W(J), !1));
        }
      else {
        let J = this.text.indexOf(I, Q);
        if (J === -1) throw new Error("Failed to find wrapped line in text");
        Q = J + I.length;
        let X = J + I.length,
          F =
            X < this.text.length &&
            this.text[X] ===
              `
`;
        if (F) Z = X;
        B.push(new o$1(I, J, W(J), F));
      }
    }
    return B;
  }
  getWrappedText() {
    return this.wrappedLines.map((A) => (A.isPrecededByNewline ? A.text : A.text.trimStart()));
  }
  getWrappedLines() {
    return this.wrappedLines;
  }
  getLine(A) {
    return this.wrappedLines[Math.max(0, Math.min(A, this.wrappedLines.length - 1))];
  }
  getOffsetFromPosition(A) {
    let B = this.getLine(A.line);
    if (B.text.length === 0 && B.endsWithNewline) return B.startOffset;
    let Q = B.isPrecededByNewline ? 0 : B.text.length - B.text.trimStart().length,
      Z = A.column + Q,
      G = this.displayWidthToStringIndex(B.text, Z),
      Y = B.startOffset + G,
      I = B.startOffset + B.text.length,
      W = I,
      J = J3(B.text);
    if (B.endsWithNewline && A.column > J) W = I + 1;
    return Math.min(Y, W);
  }
  getLineLength(A) {
    let B = this.getLine(A);
    return J3(B.text);
  }
  getPositionFromOffset(A) {
    let B = this.wrappedLines;
    for (let G = 0; G < B.length; G++) {
      let Y = B[G],
        I = B[G + 1];
      if (A >= Y.startOffset && (!I || A < I.startOffset)) {
        let W = A - Y.startOffset,
          J;
        if (Y.isPrecededByNewline) J = this.stringIndexToDisplayWidth(Y.text, W);
        else {
          let X = Y.text.length - Y.text.trimStart().length;
          if (W < X) J = 0;
          else {
            let F = Y.text.trimStart(),
              V = W - X;
            J = this.stringIndexToDisplayWidth(F, V);
          }
        }
        return { line: G, column: Math.max(0, J) };
      }
    }
    let Q = B.length - 1,
      Z = this.wrappedLines[Q];
    return { line: Q, column: J3(Z.text) };
  }
  get lineCount() {
    return this.wrappedLines.length;
  }
  nextOffset(A) {
    let B = this.graphemes.find((Q) => A >= Q.start && A < Q.end);
    if (B) return B.end;
    for (let Q of this.graphemes) if (Q.start > A) return Q.start;
    return this.text.length;
  }
  prevOffset(A) {
    let B = 0;
    for (let Q of this.graphemes) {
      if (Q.start >= A) return B;
      B = Q.start;
    }
    return B;
  }
}
import { execSync as Nw1 } from "child_process";
import { basename as ij9, extname as nj9, isAbsolute as aj9 } from "path";
var rA0 = 3932160,
  qw1 = 2000,
  Ew1 = 2000;
async function Xs(A, B, Q) {
  try {
    let Z = await Promise.resolve().then(() => A1(ww1(), 1)),
      Y = (Z.default || Z)(A),
      I = await Y.metadata();
    if (!I.width || !I.height) {
      if (B > rA0) return { buffer: await Y.jpeg({ quality: 80 }).toBuffer(), mediaType: "jpeg" };
    }
    let W = I.width || 0,
      J = I.height || 0,
      X = I.format ?? Q,
      F = X === "jpg" ? "jpeg" : X;
    if (B <= rA0 && W <= qw1 && J <= Ew1) return { buffer: A, mediaType: F };
    if (W > qw1) ((J = Math.round((J * qw1) / W)), (W = qw1));
    if (J > Ew1) ((W = Math.round((W * Ew1) / J)), (J = Ew1));
    let V = await Y.resize(W, J, { fit: "inside", withoutEnlargement: !0 }).toBuffer();
    if (V.length > rA0) return { buffer: await Y.jpeg({ quality: 80 }).toBuffer(), mediaType: "jpeg" };
    return { buffer: V, mediaType: F };
  } catch (Z) {
    return (U1(Z, nZA), { buffer: A, mediaType: Q === "jpg" ? "jpeg" : Q });
  }
}
async function LRA(A) {
  if (A.source.type !== "base64") return A;
  let B = Buffer.from(A.source.data, "base64"),
    Q = B.length,
    G = A.source.media_type?.split("/")[1] || "png",
    Y = await Xs(B, Q, G);
  return {
    type: "image",
    source: { type: "base64", media_type: `image/${Y.mediaType}`, data: Y.buffer.toString("base64") },
  };
}
function sj9() {
  let A = process.platform,
    B = {
      darwin: "No image found in clipboard. Use Cmd + Ctrl + Shift + 4 to copy a screenshot to clipboard.",
      win32: "No image found in clipboard. Use Print Screen to copy a screenshot to clipboard.",
      linux: "No image found in clipboard. Use appropriate screenshot tool to copy a screenshot to clipboard.",
    };
  return B[A] || B.linux;
}
var ab8 = sj9();
var Lw1 = 800;
function MRA() {
  let A = process.platform,
    B = {
      darwin: "/tmp/claude_cli_latest_screenshot.png",
      linux: "/tmp/claude_cli_latest_screenshot.png",
      win32: process.env.TEMP
        ? `${process.env.TEMP}\\claude_cli_latest_screenshot.png`
        : "C:\\Temp\\claude_cli_latest_screenshot.png",
    },
    Q = B[A] || B.linux,
    Z = {
      darwin: {
        checkImage: "osascript -e 'the clipboard as «class PNGf»'",
        saveImage: `osascript -e 'set png_data to (the clipboard as «class PNGf»)' -e 'set fp to open for access POSIX file "${Q}" with write permission' -e 'write png_data to fp' -e 'close access fp'`,
        getPath: "osascript -e 'get POSIX path of (the clipboard as «class furl»)'",
        deleteFile: `rm -f "${Q}"`,
      },
      linux: {
        checkImage: 'xclip -selection clipboard -t TARGETS -o | grep -E "image/(png|jpeg|jpg|gif|webp)"',
        saveImage: `xclip -selection clipboard -t image/png -o > "${Q}" || wl-paste --type image/png > "${Q}"`,
        getPath: "xclip -selection clipboard -t text/plain -o",
        deleteFile: `rm -f "${Q}"`,
      },
      win32: {
        checkImage: 'powershell -NoProfile -Command "(Get-Clipboard -Format Image) -ne $null"',
        saveImage: `powershell -NoProfile -Command "$img = Get-Clipboard -Format Image; if ($img) { $img.Save('${Q.replace(/\\/g, "\\\\")}', [System.Drawing.Imaging.ImageFormat]::Png) }"`,
        getPath: 'powershell -NoProfile -Command "Get-Clipboard"',
        deleteFile: `del /f "${Q}"`,
      },
    };
  return { commands: Z[A] || Z.linux, screenshotPath: Q };
}
async function Mw1() {
  let { commands: A, screenshotPath: B } = MRA();
  try {
    (Nw1(A.checkImage, { stdio: "ignore" }), Nw1(A.saveImage, { stdio: "ignore" }));
    let Q = w1().readFileBytesSync(B),
      { buffer: Z } = await Xs(Q, Q.length, "png"),
      G = Z.toString("base64"),
      Y = RRA(G);
    return (Nw1(A.deleteFile, { stdio: "ignore" }), { base64: G, mediaType: Y });
  } catch {
    return null;
  }
}
function rj9() {
  let { commands: A } = MRA();
  try {
    return Nw1(A.getPath, { encoding: "utf-8" }).trim();
  } catch (B) {
    return (U1(B, pZA), null);
  }
}
var ORA = /\.(png|jpe?g|gif|webp)$/i;
function RRA(A) {
  try {
    let B = Buffer.from(A, "base64");
    if (B.length < 4) return "image/png";
    if (B[0] === 137 && B[1] === 80 && B[2] === 78 && B[3] === 71) return "image/png";
    if (B[0] === 255 && B[1] === 216 && B[2] === 255) return "image/jpeg";
    if (B[0] === 71 && B[1] === 73 && B[2] === 70) return "image/gif";
    if (B[0] === 82 && B[1] === 73 && B[2] === 70 && B[3] === 70) {
      if (B.length >= 12 && B[8] === 87 && B[9] === 69 && B[10] === 66 && B[11] === 80) return "image/webp";
    }
    return "image/png";
  } catch {
    return "image/png";
  }
}
function TRA(A) {
  if ((A.startsWith('"') && A.endsWith('"')) || (A.startsWith("'") && A.endsWith("'"))) return A.slice(1, -1);
  return A;
}
function PRA(A) {
  if (process.platform === "win32") return A;
  let Q = "__DOUBLE_BACKSLASH__";
  return A.replace(/\\\\/g, Q).replace(/\\(.)/g, "$1").replace(new RegExp(Q, "g"), "\\");
}
function oA0(A) {
  let B = TRA(A.trim()),
    Q = PRA(B);
  return ORA.test(Q);
}
function oj9(A) {
  let B = TRA(A.trim()),
    Q = PRA(B);
  if (ORA.test(Q)) return Q;
  return null;
}
async function jRA(A) {
  let B = oj9(A);
  if (!B) return null;
  let Q = B,
    Z;
  try {
    if (aj9(Q)) Z = w1().readFileBytesSync(Q);
    else {
      let J = rj9();
      if (J && Q === ij9(J)) Z = w1().readFileBytesSync(J);
    }
  } catch (J) {
    return (U1(J, iZA), null);
  }
  if (!Z) return null;
  let G = nj9(Q).slice(1).toLowerCase() || "png",
    { buffer: Y } = await Xs(Z, Z.length, G),
    I = Y.toString("base64"),
    W = RRA(I);
  return { path: Q, base64: I, mediaType: W };
}
import { randomBytes as A20 } from "crypto";
import { EOL as x8, homedir as Sw1, platform as yw1 } from "os";
import { dirname as FS9, join as aT } from "path";
var n8 = A1(V1(), 1);
var YH = A1(V1(), 1);
var w_ = A1(V1(), 1),
  tj9 = w_.createContext({ marker: "" });
function Ow1({ children: A }) {
  let { marker: B } = w_.useContext(tj9);
  return w_.default.createElement(
    y,
    { gap: 1 },
    w_.default.createElement(M, { dimColor: !0 }, B),
    w_.default.createElement(y, { flexDirection: "column" }, A),
  );
}
var SRA = YH.createContext({ marker: "" }),
  ej9 = YH.createContext({ marker: "" });
function yRA({ children: A }) {
  let { marker: B } = YH.useContext(SRA),
    Q = 0;
  for (let G of YH.default.Children.toArray(A)) {
    if (!YH.isValidElement(G) || G.type !== Ow1) continue;
    Q++;
  }
  let Z = String(Q).length;
  return YH.default.createElement(
    y,
    { flexDirection: "column" },
    YH.default.Children.map(A, (G, Y) => {
      if (!YH.isValidElement(G) || G.type !== Ow1) return G;
      let I = `${String(Y + 1).padStart(Z)}.`,
        W = `${B}${I}`;
      return YH.default.createElement(
        SRA.Provider,
        { value: { marker: W } },
        YH.default.createElement(ej9.Provider, { value: { marker: W } }, G),
      );
    }),
  );
}
yRA.Item = Ow1;
var Fu = yRA;
import { join as AS9 } from "path";
import { homedir as BS9 } from "os";
var Tw1 = A1(V1(), 1);
function kRA() {
  return _RA()
    .filter(({ isCompletable: A, isEnabled: B }) => A && B)
    .every(({ isComplete: A }) => A);
}
function Fs() {
  let A = w9();
  if (kRA() && !A.hasCompletedProjectOnboarding) i8({ ...A, hasCompletedProjectOnboarding: !0 });
}
function _RA() {
  let A = w1().existsSync(AS9(AA(), "CLAUDE.md")),
    B = xRA(AA()),
    Q = mz("cc_onboarding_hide_workspace", "hide_workspace_tip", !1),
    Z = mz("cc_onboarding_hide_claudemd", "hide_claudemd_tip", !1),
    G = mz("cc_onboarding_hide_terminal", "hide_terminal_tip", !1),
    Y = mz("cc_onboarding_hide_questions_changes", "hide_questions_changes_tips", !1),
    I = mz("cc_onboarding_github", "show_github_integration_step", !1);
  return [
    {
      key: "workspace",
      text: n8.createElement(M, { dimColor: !0 }, "Ask Claude to create a new app or clone a repository"),
      isComplete: !1,
      isCompletable: !0,
      isEnabled: B && !Q,
    },
    {
      key: "claudemd",
      text: n8.createElement(M, { dimColor: !0 }, "Run /init to create a CLAUDE.md file with instructions for Claude"),
      isComplete: A,
      isCompletable: !0,
      isEnabled: !B && !Z,
    },
    {
      key: "terminal",
      text: n8.createElement(M, { dimColor: !0 }, "Run /terminal-setup to set up terminal integration"),
      isComplete: Boolean(H0().shiftEnterKeyBindingInstalled || H0().optionAsMetaKeyInstalled),
      isCompletable: !0,
      isEnabled: Vu() && !G,
    },
    {
      key: "github",
      text: n8.createElement(
        M,
        { dimColor: !0 },
        "Run /install-github-app to tag @claude right from your Github issues and PRs",
      ),
      isComplete: Boolean(H0().githubActionSetupCount),
      isCompletable: !0,
      isEnabled: I,
    },
    {
      key: "questions",
      text: n8.createElement(
        M,
        { dimColor: !0 },
        "Use Claude to help with file analysis, editing, bash commands and git",
      ),
      isComplete: !1,
      isCompletable: !1,
      isEnabled: !Y,
    },
    {
      key: "changes",
      text: n8.createElement(
        M,
        { dimColor: !0 },
        "Be as specific as you would with another engineer for the best results",
      ),
      isComplete: !1,
      isCompletable: !1,
      isEnabled: !Y,
    },
  ];
}
var Rw1 = YA(() => {
  if (kRA() || w9().projectOnboardingSeenCount >= 4 || process.env.IS_DEMO) return !1;
  return !0;
});
function tA0() {
  let A = Tw1.useMemo(_RA, []);
  if (
    (Tw1.useEffect(() => {
      if (!Rw1()) return;
      let B = w9();
      i8({ ...B, projectOnboardingSeenCount: B.projectOnboardingSeenCount + 1 });
    }, []),
    !Rw1())
  )
    return null;
  return n8.createElement(
    y,
    { flexDirection: "column", gap: 1, paddingX: 1 },
    n8.createElement(M, { dimColor: !0 }, "Tips for getting started:"),
    n8.createElement(
      Fu,
      null,
      A.filter(({ isEnabled: B }) => B)
        .sort((B, Q) => Number(B.isComplete) - Number(Q.isComplete))
        .map(({ key: B, text: Q, isComplete: Z }) =>
          n8.createElement(
            Fu.Item,
            { key: B },
            n8.createElement(M, null, Z ? n8.createElement(M, { color: "success" }, t0.tick, " ") : "", Q),
          ),
        ),
    ),
    AA() === BS9() &&
      n8.createElement(
        M,
        { color: "warning" },
        "Note: You have launched ",
        n8.createElement(M, { bold: !0 }, "claude"),
        " in your home directory. For the best experience, launch it in a project directory instead.",
      ),
  );
}
import { homedir as QS9 } from "os";
import { join as ZS9 } from "path";
function GS9(A) {
  let B = H0();
  ((B.appleTerminalSetupInProgress = !0), (B.appleTerminalBackupPath = A), TA(B));
}
function A51() {
  let A = H0();
  ((A.appleTerminalSetupInProgress = !1), TA(A));
}
function YS9() {
  let A = H0();
  return { inProgress: A.appleTerminalSetupInProgress ?? !1, backupPath: A.appleTerminalBackupPath || null };
}
function Vs() {
  return ZS9(QS9(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function vRA() {
  let A = Vs(),
    B = `${A}.bak`;
  try {
    let { code: Q } = await B2("defaults", ["export", "com.apple.Terminal", A]);
    if (Q !== 0) return null;
    if (w1().existsSync(A)) return (await B2("defaults", ["export", "com.apple.Terminal", B]), GS9(B), B);
    return null;
  } catch (Q) {
    return (U1(Q instanceof Error ? Q : new Error(String(Q)), M3A), null);
  }
}
async function Pw1() {
  let { inProgress: A, backupPath: B } = YS9();
  if (!A) return { status: "no_backup" };
  if (!B || !w1().existsSync(B)) return (A51(), { status: "no_backup" });
  try {
    let { code: Q } = await B2("defaults", ["import", "com.apple.Terminal", B]);
    if (Q !== 0) return { status: "failed", backupPath: B };
    return (await B2("killall", ["cfprefsd"]), A51(), { status: "restored" });
  } catch (Q) {
    return (
      U1(new Error(`Failed to restore Terminal.app settings with: ${Q}`), O3A),
      A51(),
      { status: "failed", backupPath: B }
    );
  }
}
import { homedir as IS9 } from "os";
import { join as WS9 } from "path";
function JS9(A) {
  let B = H0();
  ((B.iterm2SetupInProgress = !0), (B.iterm2BackupPath = A), TA(B));
}
function Ks() {
  let A = H0();
  ((A.iterm2SetupInProgress = !1), TA(A));
}
function XS9() {
  let A = H0();
  return { inProgress: A.iterm2SetupInProgress ?? !1, backupPath: A.iterm2BackupPath || null };
}
function jw1() {
  return WS9(IS9(), "Library", "Preferences", "com.googlecode.iterm2.plist");
}
async function bRA() {
  let A = jw1(),
    B = `${A}.bak`;
  try {
    if ((await B2("defaults", ["export", "com.googlecode.iterm2", A]), w1().existsSync(A)))
      return (w1().copyFileSync(A, B), JS9(B), B);
    return null;
  } catch (Q) {
    return (U1(Q instanceof Error ? Q : new Error(String(Q)), aZA), null);
  }
}
function fRA() {
  let { inProgress: A, backupPath: B } = XS9();
  if (!A) return { status: "no_backup" };
  if (!B || !w1().existsSync(B)) return (Ks(), { status: "no_backup" });
  try {
    return (w1().copyFileSync(B, jw1()), Ks(), { status: "restored" });
  } catch (Q) {
    return (
      U1(new Error(`Failed to restore iTerm2 settings with: ${Q}`), sZA),
      Ks(),
      { status: "failed", backupPath: B }
    );
  }
}
var VS9 = {
  type: "local-jsx",
  name: "terminal-setup",
  userFacingName() {
    return "terminal-setup";
  },
  description:
    tA.terminal === "Apple_Terminal"
      ? "Enable Option+Enter key binding for newlines and visual bell"
      : "Install Shift+Enter key binding for newlines",
  isEnabled: () => !0,
  isHidden: !1,
  async call(A, B) {
    if (!Vu()) {
      let G = `Terminal setup cannot be run from ${tA.terminal || "your current terminal"}.

This is a one-time configuration for better terminal integration.

To configure:
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
   • macOS: iTerm2, Apple Terminal
   • IDE: VSCode, Cursor, Windsurf
   • Other: Ghostty
3. Return to tmux/screen - settings will persist`;
      return (A(G), null);
    }
    let Q = await B20(B.options.theme);
    return (A(Q), null);
  },
};
function Vu() {
  return (
    (yw1() === "darwin" && (tA.terminal === "iTerm.app" || tA.terminal === "Apple_Terminal")) ||
    tA.terminal === "vscode" ||
    tA.terminal === "cursor" ||
    tA.terminal === "windsurf" ||
    tA.terminal === "ghostty" ||
    tA.terminal === "WezTerm"
  );
}
async function B20(A) {
  let B = "";
  switch (tA.terminal) {
    case "iTerm.app":
      B = await zS9(A);
      break;
    case "Apple_Terminal":
      B = await DS9(A);
      break;
    case "vscode":
      B = eA0("VSCode", A);
      break;
    case "cursor":
      B = eA0("Cursor", A);
      break;
    case "windsurf":
      B = eA0("Windsurf", A);
      break;
    case "ghostty":
      B = await HS9(A);
      break;
    case "WezTerm":
      B = await KS9(A);
      break;
    case null:
      break;
  }
  let Q = H0();
  if (["iTerm.app", "vscode", "cursor", "windsurf", "ghostty", "WezTerm"].includes(tA.terminal ?? ""))
    Q.shiftEnterKeyBindingInstalled = !0;
  else if (tA.terminal === "Apple_Terminal") Q.optionAsMetaKeyInstalled = !0;
  return (TA(Q), Fs(), B);
}
function uRA() {
  return H0().shiftEnterKeyBindingInstalled === !0;
}
function mRA() {
  return H0().optionAsMetaKeyInstalled === !0;
}
function dRA() {
  return H0().hasUsedBackslashReturn === !0;
}
function cRA() {
  let A = H0();
  if (!A.hasUsedBackslashReturn) TA({ ...A, hasUsedBackslashReturn: !0 });
}
async function KS9(A) {
  let Q = aT(Sw1(), ".wezterm.lua");
  try {
    let Z = "",
      G = !1;
    if (w1().existsSync(Q)) {
      if (
        ((G = !0),
        (Z = w1().readFileSync(Q, { encoding: "utf-8" })),
        Z.includes('mods="SHIFT"') && Z.includes('key="Enter"'))
      )
        return `${iB("warning", A)("Found existing WezTerm Shift+Enter key binding. Remove it to continue.")}${x8}${n1.dim(`See ${Q}`)}${x8}`;
      let Y = A20(4).toString("hex"),
        I = `${Q}.${Y}.bak`;
      try {
        w1().copyFileSync(Q, I);
      } catch (W) {
        return (
          U1(W instanceof Error ? W : new Error(String(W)), COLOR_MODE_14),
          `${iB("warning", A)("Error backing up existing WezTerm config. Bailing out.")}${x8}${n1.dim(`See ${Q}`)}${x8}${n1.dim(`Backup path: ${I}`)}${x8}`
        );
      }
    }
    if (!G)
      Z = `local wezterm = require 'wezterm'
local config = wezterm.config_builder()

config.keys = {
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
}

return config
`;
    else {
      let Y = Z.match(/config\.keys\s*=\s*\{([^}]*)\}/s);
      if (Y) {
        let I = Y[1] ?? "",
          W = I.trim()
            ? `${I.trim()},
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},`
            : `
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
`;
        Z = Z.replace(/config\.keys\s*=\s*\{[^}]*\}/s, `config.keys = {${W}}`);
      } else if (Z.match(/return\s+config/s))
        Z = Z.replace(
          /return\s+config/s,
          `config.keys = {
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
}

return config`,
        );
      else
        Z += `
config.keys = {
  {key="Enter", mods="SHIFT", action=wezterm.action{SendString="\\x1b\\r"}},
}
`;
    }
    return (
      w1().writeFileSync(Q, Z, { encoding: "utf-8", flush: !1 }),
      `${iB("success", A)("Installed WezTerm Shift+Enter key binding")}${x8}${iB("success", A)("You may need to restart WezTerm for changes to take effect")}${x8}${n1.dim(`See ${Q}`)}${x8}`
    );
  } catch (Z) {
    throw (
      U1(Z instanceof Error ? Z : new Error(String(Z)), r7A),
      new Error("Failed to install WezTerm Shift+Enter key binding")
    );
  }
}
async function HS9(A) {
  let Q = [],
    Z = process.env.XDG_CONFIG_HOME;
  if (Z) Q.push(aT(Z, "ghostty", "config"));
  else Q.push(aT(Sw1(), ".config", "ghostty", "config"));
  if (yw1() === "darwin") Q.push(aT(Sw1(), "Library", "Application Support", "com.mitchellh.ghostty", "config"));
  let G = null,
    Y = !1;
  for (let I of Q)
    if (w1().existsSync(I)) {
      ((G = I), (Y = !0));
      break;
    }
  if (!G) ((G = Q[0] ?? null), (Y = !1));
  if (!G) throw new Error("No valid config path found for Ghostty");
  try {
    let I = "";
    if (Y) {
      if (((I = w1().readFileSync(G, { encoding: "utf-8" })), I.includes("shift+enter")))
        return `${iB("warning", A)}(
          'Found existing Ghostty Shift+Enter key binding. Remove it to continue.',
        )}${x8}${n1.dim(`See ${G}`)}${x8}`;
      let J = A20(4).toString("hex"),
        X = `${G}.${J}.bak`;
      try {
        w1().copyFileSync(G, X);
      } catch {
        return `${iB("warning", A)("Error backing up existing Ghostty config. Bailing out.")}${x8}${n1.dim(`See ${G}`)}${x8}${n1.dim(`Backup path: ${X}`)}${x8}`;
      }
    } else {
      let J = FS9(G);
      if (!w1().existsSync(J)) w1().mkdirSync(J);
    }
    let W = I;
    if (
      I &&
      !I.endsWith(`
`)
    )
      W += `
`;
    return (
      (W += `keybind = shift+enter=text:\\x1b\\r
`),
      w1().writeFileSync(G, W, { encoding: "utf-8", flush: !1 }),
      `${iB("success", A)("Installed Ghostty Shift+Enter key binding")}${x8}${iB("success", A)("You may need to restart Ghostty for changes to take effect")}${x8}${n1.dim(`See ${G}`)}${x8}`
    );
  } catch (I) {
    throw (
      U1(I instanceof Error ? I : new Error(String(I)), o7A),
      new Error("Failed to install Ghostty Shift+Enter key binding")
    );
  }
}
async function zS9(A) {
  let B = jw1();
  try {
    if (!(await bRA())) throw new Error("Failed to create backup of iTerm2 preferences, bailing out");
    let { code: Z } = await B2("defaults", [
      "write",
      "com.googlecode.iterm2",
      "GlobalKeyMap",
      "-dict-add",
      "0xd-0x20000-0x24",
      `<dict>
        <key>Text</key>
        <string>\\n</string>
        <key>Action</key>
        <integer>12</integer>
        <key>Version</key>
        <integer>1</integer>
        <key>Keycode</key>
        <integer>13</integer>
        <key>Modifiers</key>
        <integer>131072</integer>
      </dict>`,
    ]);
    if (Z !== 0) throw new Error("Failed to install iTerm2 Shift+Enter key binding");
    return (
      await B2("defaults", ["export", "com.googlecode.iterm2", B]),
      Ks(),
      `${iB("success", A)("Installed iTerm2 Shift+Enter key binding")}${x8}${n1.dim("See iTerm2 → Preferences → Keys")}${x8}`
    );
  } catch (Q) {
    U1(Q instanceof Error ? Q : new Error(String(Q)), t7A);
    let Z = H0().iterm2BackupPath,
      G = !1;
    if (Z && w1().existsSync(Z))
      try {
        (await B2("defaults", ["import", "com.googlecode.iterm2", Z]), (G = !0), Ks());
      } catch (Y) {
        U1(new Error(`Failed to restore from backup: ${String(Y)}`), e7A);
      }
    throw new Error(
      `Failed to install iTerm2 Shift+Enter key binding. ${G ? "Your settings have been restored from backup." : Z && w1().existsSync(Z) ? `Restoring from backup failed, try manually with: defaults import com.googlecode.iterm2 ${Z}` : "No backup was available to restore from."}`,
    );
  }
}
function eA0(A = "VSCode", B) {
  let Q = A === "VSCode" ? "Code" : A,
    Z = aT(
      Sw1(),
      yw1() === "win32"
        ? aT("AppData", "Roaming", Q, "User")
        : yw1() === "darwin"
          ? aT("Library", "Application Support", Q, "User")
          : aT(".config", Q, "User"),
    ),
    G = aT(Z, "keybindings.json");
  try {
    let Y = "[]",
      I = [];
    if (!w1().existsSync(Z)) w1().mkdirSync(Z);
    if (w1().existsSync(G)) {
      ((Y = w1().readFileSync(G, { encoding: "utf-8" })), (I = lYA(Y) ?? []));
      let F = A20(4).toString("hex"),
        V = `${G}.${F}.bak`;
      try {
        w1().copyFileSync(G, V);
      } catch {
        return `${iB("warning", B)(`Error backing up existing ${A} terminal keybindings. Bailing out.`)}${x8}${n1.dim(`See ${G}`)}${x8}${n1.dim(`Backup path: ${V}`)}${x8}`;
      }
    }
    if (
      I.find(
        (F) =>
          F.key === "shift+enter" &&
          F.command === "workbench.action.terminal.sendSequence" &&
          F.when === "terminalFocus",
      )
    )
      return `${iB("warning", B)(`Found existing ${A} terminal Shift+Enter key binding. Remove it to continue.`)}${x8}${n1.dim(`See ${G}`)}${x8}`;
    let X = pYA(Y, {
      key: "shift+enter",
      command: "workbench.action.terminal.sendSequence",
      args: {
        text: `\\\r
`,
      },
      when: "terminalFocus",
    });
    return (
      w1().writeFileSync(G, X, { encoding: "utf-8", flush: !1 }),
      `${iB("success", B)(`Installed ${A} terminal Shift+Enter key binding`)}${x8}${n1.dim(`See ${G}`)}${x8}`
    );
  } catch (Y) {
    throw (
      U1(Y instanceof Error ? Y : new Error(String(Y)), A3A),
      new Error(`Failed to install ${A} terminal Shift+Enter key binding`)
    );
  }
}
async function hRA(A) {
  let { code: B } = await B2("/usr/libexec/PlistBuddy", [
    "-c",
    `Add :'Window Settings':'${A}':useOptionAsMetaKey bool true`,
    Vs(),
  ]);
  if (B !== 0) {
    let { code: Q } = await B2("/usr/libexec/PlistBuddy", [
      "-c",
      `Set :'Window Settings':'${A}':useOptionAsMetaKey true`,
      Vs(),
    ]);
    if (Q !== 0) return (U1(new Error(`Failed to enable Option as Meta key for Terminal.app profile: ${A}`), B3A), !1);
  }
  return !0;
}
async function gRA(A) {
  let { code: B } = await B2("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'${A}':Bell bool false`, Vs()]);
  if (B !== 0) {
    let { code: Q } = await B2("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'${A}':Bell false`, Vs()]);
    if (Q !== 0) return (U1(new Error(`Failed to disable audio bell for Terminal.app profile: ${A}`), Q3A), !1);
  }
  return !0;
}
async function DS9(A) {
  try {
    if (!(await vRA())) throw new Error("Failed to create backup of Terminal.app preferences, bailing out");
    let { stdout: Q, code: Z } = await B2("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
    if (Z !== 0 || !Q.trim()) throw new Error("Failed to read default Terminal.app profile");
    let { stdout: G, code: Y } = await B2("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
    if (Y !== 0 || !G.trim()) throw new Error("Failed to read startup Terminal.app profile");
    let I = !1,
      W = Q.trim(),
      J = await hRA(W),
      X = await gRA(W);
    if (J || X) I = !0;
    let F = G.trim();
    if (F !== W) {
      let V = await hRA(F),
        K = await gRA(F);
      if (V || K) I = !0;
    }
    if (!I) throw new Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
    return (
      await B2("killall", ["cfprefsd"]),
      A51(),
      `${iB("success", A)("Configured Terminal.app settings:")}${x8}${iB("success", A)('- Enabled "Use Option as Meta key"')}${x8}${iB("success", A)("- Switched to visual bell")}${x8}${n1.dim("Option+Enter will now enter a newline.")}${x8}${n1.dim("You must restart Terminal.app for changes to take effect.", A)}${x8}`
    );
  } catch (B) {
    U1(B instanceof Error ? B : new Error(String(B)), Z3A);
    let Q = await Pw1(),
      Z = "Failed to enable Option as Meta key for Terminal.app.";
    if (Q.status === "restored") throw new Error(`${Z} Your settings have been restored from backup.`);
    else if (Q.status === "failed")
      throw new Error(
        `${Z} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${Q.backupPath}`,
      );
    else throw new Error(`${Z} No backup was available to restore from.`);
  }
}
var q_ = VS9;
var CS9 = 100;
function B51(A) {
  return (A.match(/\r\n|\r|\n/g) || []).length;
}
function Z20(A, B) {
  if (B === 0) return `[Pasted text #${A}]`;
  return `[Pasted text #${A} +${B} lines]`;
}
function lRA(A) {
  return `[Image #${A}]`;
}
function pRA(A) {
  let B = /\[(Pasted text|Image|\.\.\.Truncated text) #(\d+)(?: \+\d+ lines)?(\.)*\]/g;
  return [...A.matchAll(B)].map((Z) => ({ id: parseInt(Z[2] || "0"), match: Z[0] })).filter((Z) => Z.id > 0);
}
function Q20(A) {
  return typeof A !== "string";
}
function US9() {
  return w9().history ?? [];
}
function kw1() {
  let A = [];
  for (let B of US9()) {
    if (!Q20(B)) {
      A.push({ display: B, pastedContents: {} });
      continue;
    }
    if (B.pastedText) {
      let Z = B51(B.pastedText),
        G = /\[Pasted text \+([0-9]+) lines\]/g,
        Y,
        I = !1;
      while ((Y = G.exec(B.display)) !== null)
        if (Number(Y[1]) === Z) {
          let J = B.display.replace(Y[0], Z20(1, Z));
          (A.push({ display: J, pastedContents: { [1]: { id: 1, type: "text", content: B.pastedText } } }), (I = !0));
          break;
        }
      if (!I) A.push({ display: B.display, pastedContents: {} });
      continue;
    }
    let Q = {};
    if (B.pastedContents)
      Q = Object.fromEntries(
        Object.entries(B.pastedContents)
          .map(([Z, G]) => [Number(Z), G])
          .filter(([Z]) => Z !== void 0 && Number(Z) > 0),
      );
    A.push({ display: B.display, pastedContents: Q });
  }
  return A;
}
function $S9(A, B) {
  if (!A || !B) return !A && !B;
  let Q = Object.keys(A).map(Number),
    Z = Object.keys(B).map(Number);
  if (Q.length !== Z.length) return !1;
  for (let G of Q) {
    let Y = A[G],
      I = B[G];
    if (!Y || !I || Y.content !== I.content) return !1;
  }
  return !0;
}
function wS9(A, B) {
  if (Q20(A) && Q20(B)) return A.display === B.display && $S9(A.pastedContents, B.pastedContents);
  return A === B;
}
function sT(A) {
  let B = w9(),
    Q = kw1(),
    Z = typeof A === "string" ? { display: A, pastedContents: {} } : A;
  if (Q[0] && wS9(Q[0], Z)) return;
  (Q.unshift(Z), i8({ ...B, history: Q.slice(0, CS9) }));
}
var eTA = A1(E_(), 1);
var Qk9 =
    HB() !== "windows" || (!Ng() && eTA.default.satisfies(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0")),
  rJ = !Qk9
    ? { displayText: "alt+m", check: (A, B) => B.meta && (A === "m" || A === "M") }
    : { displayText: "shift+tab", check: (A, B) => B.tab && B.shift },
  Ku =
    HB() === "windows"
      ? { displayText: "alt+v", check: (A, B) => B.meta && (A === "v" || A === "V") }
      : { displayText: "ctrl+v", check: (A, B) => B.ctrl && (A === "v" || A === "V") };
function APA(A, B) {
  switch (B) {
    case "bash":
      return `!${A}`;
    case "memorySelect":
      return `#${A}`;
    case "background":
      return `&${A}`;
    default:
      return A;
  }
}
function rT(A) {
  if (A.startsWith("!")) return "bash";
  if (A.startsWith("#")) return "memory";
  return (A.startsWith("&"), "prompt");
}
function Hs(A) {
  if (rT(A) === "prompt") return A;
  return A.slice(1);
}
function BPA(A) {
  return A === "!" || A === "#" || !1;
}
function QPA(A) {
  return function (B) {
    return (new Map(A).get(B) ?? (() => {}))(B);
  };
}
function vw1({
  value: A,
  onChange: B,
  onSubmit: Q,
  onExit: Z,
  onExitMessage: G,
  onMessage: Y,
  onHistoryUp: I,
  onHistoryDown: W,
  onHistoryReset: J,
  mask: X = "",
  multiline: F = !1,
  cursorChar: V,
  invert: K,
  columns: H,
  onImagePaste: z,
  disableCursorMovementForUpDownKeys: D = !1,
  externalOffset: C,
  onOffsetChange: w,
  inputFilter: E,
}) {
  let L = C,
    O = w,
    R = O5.fromText(A, H, L),
    [P, _] = ZPA.useState(null);
  function b() {
    if (!P) return;
    (clearTimeout(P), _(null), Y?.(!1));
  }
  let S = pT(
      (D0) => {
        (b(), G?.(D0, "Ctrl-C"));
      },
      () => Z?.(),
      () => {
        if (A) (B(""), O(0), J?.());
      },
    ),
    d = pT(
      (D0) => {
        (b(), Y?.(!!A && D0, "Press Escape again to clear"));
      },
      () => {
        if (A) {
          if (A.trim() !== "") sT(A);
          (B(""), O(0), J?.());
        }
      },
    );
  function u() {
    if (A.trim() !== "") (sT(A), J?.());
    return O5.fromText("", H, 0);
  }
  let o = pT(
    (D0) => {
      if (A !== "") return;
      G?.(D0, "Ctrl-D");
    },
    () => {
      if (A !== "") return;
      Z?.();
    },
  );
  function m() {
    if ((b(), R.text === "")) return (o(), R);
    return R.del();
  }
  function j() {
    if (!z) return;
    Mw1().then((D0) => {
      if (D0) z(D0.base64, D0.mediaType);
      else {
        let C1 = `No image found in clipboard. Use ${Ku.displayText} to paste images.`;
        (Y?.(!0, C1),
          b(),
          _(
            setTimeout(() => {
              Y?.(!1);
            }, 4000),
          ));
      }
    });
  }
  let r = QPA([
      ["a", () => R.startOfLine()],
      ["b", () => R.left()],
      ["c", S],
      ["d", m],
      ["e", () => R.endOfLine()],
      ["f", () => R.right()],
      ["h", () => R.backspace()],
      ["k", () => R.deleteToLineEnd()],
      ["l", () => u()],
      ["n", () => s1()],
      ["p", () => R1()],
      ["u", () => R.deleteToLineStart()],
      ["w", () => R.deleteWordBefore()],
    ]),
    Q1 = QPA([
      ["b", () => R.prevWord()],
      ["f", () => R.nextWord()],
      ["d", () => R.deleteWordAfter()],
    ]);
  function J1(D0) {
    if (F && R.offset > 0 && R.text[R.offset - 1] === "\\")
      return (
        cRA(),
        R.backspace().insert(`
`)
      );
    if (D0.meta)
      return R.insert(`
`);
    Q?.(A);
  }
  function R1() {
    if (D) return (I?.(), R);
    let D0 = R.up();
    if (!D0.equals(R)) return D0;
    if (F) {
      let C1 = R.upLogicalLine();
      if (!C1.equals(R)) return C1;
    }
    return (I?.(), R);
  }
  function s1() {
    if (D) return (W?.(), R);
    let D0 = R.down();
    if (!D0.equals(R)) return D0;
    if (F) {
      let C1 = R.downLogicalLine();
      if (!C1.equals(R)) return C1;
    }
    return (W?.(), R);
  }
  function Z0(D0) {
    switch (!0) {
      case D0.escape:
        return () => {
          return (d(), R);
        };
      case D0.leftArrow && (D0.ctrl || D0.meta || D0.fn):
        return () => R.prevWord();
      case D0.rightArrow && (D0.ctrl || D0.meta || D0.fn):
        return () => R.nextWord();
      case D0.backspace:
        return D0.meta ? () => R.deleteWordBefore() : () => R.backspace();
      case D0.delete:
        return D0.meta ? () => R.deleteToLineEnd() : () => R.del();
      case D0.ctrl:
        return r;
      case D0.home:
        return () => R.startOfLine();
      case D0.end:
        return () => R.endOfLine();
      case D0.pageDown:
        return () => R.endOfLine();
      case D0.pageUp:
        return () => R.startOfLine();
      case D0.meta:
        return Q1;
      case D0.return:
        return () => J1(D0);
      case D0.tab:
        return () => R;
      case D0.upArrow:
        return R1;
      case D0.downArrow:
        return s1;
      case D0.leftArrow:
        return () => R.left();
      case D0.rightArrow:
        return () => R.right();
      default:
        return function (C1) {
          switch (!0) {
            case C1 === "\x1B[H" || C1 === "\x1B[1~":
              return R.startOfLine();
            case C1 === "\x1B[F" || C1 === "\x1B[4~":
              return R.endOfLine();
            default:
              if (R.isAtStart() && BPA(C1))
                return R.insert(
                  eI(C1).replace(
                    /\r/g,
                    `
`,
                  ),
                ).left();
              return R.insert(
                eI(C1).replace(
                  /\r/g,
                  `
`,
                ),
              );
          }
        };
    }
  }
  function _0(D0, C1) {
    if (Ku.check(D0, C1) && z) {
      j();
      return;
    }
    let g1 = E ? E(D0, C1) : D0;
    if (g1 === "" && D0 !== "") return;
    if (!C1.backspace && !C1.delete && D0.includes("")) {
      let o1 = (D0.match(/\x7f/g) || []).length,
        K0 = R;
      for (let U0 = 0; U0 < o1; U0++) K0 = K0.backspace();
      if (!R.equals(K0)) {
        if (R.text !== K0.text) B(K0.text);
        O(K0.offset);
      }
      return;
    }
    let v1 = Z0(C1)(g1);
    if (v1) {
      if (!R.equals(v1)) {
        if (R.text !== v1.text) B(v1.text);
        O(v1.offset);
      }
    }
  }
  return { onInput: _0, renderedValue: R.render(V, X, K), offset: L, setOffset: O };
}
var Us = A1(V1(), 1);
var Kq = A1(V1(), 1);
var MV = A1(V1(), 1),
  V20 = A1(WPA(), 1);
var qk9 = typeof window !== "undefined" ? MV.useLayoutEffect : MV.useEffect;
function pW(A, B) {
  let Q = MV.useRef(A);
  (qk9(() => {
    Q.current = A;
  }, [A]),
    MV.useEffect(() => {
      if (B === null) return;
      let Z = setInterval(() => {
        Q.current();
      }, B);
      return () => {
        clearInterval(Z);
      };
    }, [B]));
}
function Ek9(A) {
  let B = MV.useRef(A);
  ((B.current = A),
    MV.useEffect(
      () => () => {
        B.current();
      },
      [],
    ));
}
function zs(A, B = 500, Q) {
  let Z = MV.useRef();
  Ek9(() => {
    if (Z.current) Z.current.cancel();
  });
  let G = MV.useMemo(() => {
    let Y = V20.default(A, B, Q),
      I = (...W) => {
        return Y(...W);
      };
    return (
      (I.cancel = () => {
        Y.cancel();
      }),
      (I.isPending = () => {
        return !!Z.current;
      }),
      (I.flush = () => {
        return Y.flush();
      }),
      I
    );
  }, [A, B, Q]);
  return (
    MV.useEffect(() => {
      Z.current = V20.default(A, B, Q);
    }, [A, B, Q]),
    G
  );
}
var Nk9 = 50,
  Lk9 = 100;
function JPA({ onPaste: A, onInput: B, onImagePaste: Q }) {
  let [Z, G] = Kq.default.useState({ chunks: [], timeoutId: null }),
    [Y, I] = Kq.default.useState(!1),
    W = Kq.default.useRef(!1),
    J = Kq.default.useRef(!1),
    X = Kq.default.useRef(!0),
    F = Kq.default.useMemo(() => HB() === "macos", []);
  Kq.default.useEffect(() => {
    return () => {
      X.current = !1;
    };
  }, []);
  let V = Kq.default.useCallback(() => {
      if (!Q || !X.current) return;
      Mw1()
        .then((C) => {
          if (C && X.current) Q(C.base64, C.mediaType);
        })
        .catch((C) => {
          if (X.current) d0(`Failed to check clipboard for image: ${C}`);
        })
        .finally(() => {
          if (X.current) I(!1);
        });
    }, [Q]),
    K = zs(V, Nk9),
    H = Kq.default.useCallback(
      (C) => {
        if (C) clearTimeout(C);
        return setTimeout(() => {
          G(({ chunks: w }) => {
            let E = w.join("").replace(/\[I$/, "").replace(/\[O$/, "");
            if (Q && oA0(E)) {
              let L = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(E);
              return (
                jRA(E).then((O) => {
                  if (O) Q(O.base64, O.mediaType);
                  else if (L && F) K();
                  else {
                    if (A) A(E);
                    I(!1);
                  }
                }),
                { chunks: [], timeoutId: null }
              );
            }
            if (F && Q && E.length === 0) return (K(), { chunks: [], timeoutId: null });
            if (A) A(E);
            return (I(!1), { chunks: [], timeoutId: null });
          });
        }, Lk9);
      },
      [K, F, Q, A],
    ),
    { stdin: z } = K_();
  return (
    Kq.default.useEffect(() => {
      if (!z) return;
      let C = (w) => {
        let E = w.toString();
        if (E.includes("\x1B[200~")) (I(!0), (W.current = !0), (J.current = !1));
        if (E.includes("\x1B[201~")) {
          if ((I(!1), F && W.current && !J.current && Q)) K();
          ((W.current = !1), (J.current = !1), G({ chunks: [], timeoutId: null }));
        }
      };
      return (
        z.on("data", C),
        () => {
          (z.off("data", C), I(!1));
        }
      );
    }, [z, Q, K, F]),
    {
      wrappedOnInput: (C, w) => {
        if (Y) J.current = !0;
        let E = oA0(C);
        if (A && (C.length > Lw1 || Z.timeoutId || E || Y)) {
          G(({ chunks: O, timeoutId: R }) => {
            return { chunks: [...O, C], timeoutId: H(R) };
          });
          return;
        }
        if ((B(C, w), C.length > 10)) I(!1);
      },
      pasteState: Z,
      isPasting: Y,
    }
  );
}
function XPA({ placeholder: A, value: B, showCursor: Q, focus: Z, terminalFocus: G = !0 }) {
  let Y = void 0;
  if (A) {
    if (((Y = n1.dim(A)), Q && Z && G)) Y = A.length > 0 ? n1.inverse(A[0]) + n1.dim(A.slice(1)) : n1.inverse(" ");
  }
  let I = B.length === 0 && Boolean(A);
  return { renderedPlaceholder: Y, showPlaceholder: I };
}
var LL = A1(V1(), 1);
var K20 = A1(V1(), 1);
function Z51({ char: A, index: B, glimmerIndex: Q, messageColor: Z, shimmerColor: G }) {
  let Y = B === Q,
    I = Math.abs(B - Q) === 1;
  return K20.createElement(M, { color: Y || I ? G : Z }, A);
}
var Ds = A1(V1(), 1);
function G51(A, B, Q, Z) {
  let G = Ds.useRef(Date.now()),
    [Y, I] = Ds.useState(A === "requesting" ? -1 : 10),
    W = Ds.useMemo(() => {
      if (A === "requesting") return 50;
      return 200;
    }, [A]);
  return (
    pW(() => {
      if (Q === !1 || Z) return;
      let J = Date.now() - G.current,
        X = Math.floor(J / W),
        F = B.length,
        V = F + 20;
      if (A === "requesting") {
        let K = (X % V) - 10;
        I(K);
      } else {
        let K = F + 10 - (X % V);
        I(K);
      }
    }, W),
    Y
  );
}
var Cs = { none: "promptBorder", low: "permission", medium: "warning", high: "claude" },
  FPA = { none: "promptBorderShimmer", low: "permissionShimmer", medium: "warningShimmer", high: "claudeShimmer" },
  Mk9 = [
    "rainbow_red",
    "rainbow_orange",
    "rainbow_yellow",
    "rainbow_green",
    "rainbow_blue",
    "rainbow_indigo",
    "rainbow_violet",
  ],
  Ok9 = [
    "rainbow_red_shimmer",
    "rainbow_orange_shimmer",
    "rainbow_yellow_shimmer",
    "rainbow_green_shimmer",
    "rainbow_blue_shimmer",
    "rainbow_indigo_shimmer",
    "rainbow_violet_shimmer",
  ];
function bw1(A) {
  return A.toLowerCase() === "ultrathink";
}
function Y51(A, B = !1) {
  let Q = B ? Ok9 : Mk9;
  return Q[A % Q.length];
}
function fw1(A, B) {
  let Q = [],
    Z = 0;
  for (let G of B) {
    if (G.start > Z) Q.push({ text: A.slice(Z, G.start), isTrigger: !1, start: Z });
    (Q.push({ text: A.slice(G.start, G.end), isTrigger: !0, start: G.start }), (Z = G.end));
  }
  if (Z < A.length) Q.push({ text: A.slice(Z), isTrigger: !1, start: Z });
  return Q;
}
var Hu = { HIGHEST: 31999, MIDDLE: 1e4, BASIC: 4000, NONE: 0 },
  Rk9 = {
    english: {
      HIGHEST: [
        { pattern: "think harder", needsWordBoundary: !0 },
        { pattern: "think intensely", needsWordBoundary: !0 },
        { pattern: "think longer", needsWordBoundary: !0 },
        { pattern: "think really hard", needsWordBoundary: !0 },
        { pattern: "think super hard", needsWordBoundary: !0 },
        { pattern: "think very hard", needsWordBoundary: !0 },
        { pattern: "ultrathink", needsWordBoundary: !0 },
      ],
      MIDDLE: [
        { pattern: "think about it", needsWordBoundary: !0 },
        { pattern: "think a lot", needsWordBoundary: !0 },
        { pattern: "think deeply", needsWordBoundary: !0 },
        { pattern: "think hard", needsWordBoundary: !0 },
        { pattern: "think carefully", needsWordBoundary: !0 },
        { pattern: "think more", needsWordBoundary: !0 },
        { pattern: "megathink", needsWordBoundary: !0 },
      ],
      BASIC: [{ pattern: "think", needsWordBoundary: !0 }],
      NONE: [],
    },
    japanese: {
      HIGHEST: [{ pattern: "熟考" }, { pattern: "深く考えて" }, { pattern: "しっかり考えて" }],
      MIDDLE: [
        { pattern: "もっと考えて" },
        { pattern: "たくさん考えて" },
        { pattern: "よく考えて" },
        { pattern: "長考" },
      ],
      BASIC: [{ pattern: "考えて" }],
      NONE: [],
    },
    chinese: {
      HIGHEST: [{ pattern: "多想一会" }, { pattern: "深思" }, { pattern: "仔细思考" }],
      MIDDLE: [{ pattern: "多想想" }, { pattern: "好好想" }],
      BASIC: [{ pattern: "想" }, { pattern: "思考" }],
      NONE: [],
    },
    spanish: {
      HIGHEST: [
        { pattern: "piensa más", needsWordBoundary: !0 },
        { pattern: "piensa mucho", needsWordBoundary: !0 },
        { pattern: "piensa profundamente", needsWordBoundary: !0 },
      ],
      MIDDLE: [{ pattern: "piensa", needsWordBoundary: !0 }],
      BASIC: [
        { pattern: "pienso", needsWordBoundary: !0 },
        { pattern: "pensando", needsWordBoundary: !0 },
      ],
      NONE: [],
    },
    french: {
      HIGHEST: [
        { pattern: "réfléchis plus", needsWordBoundary: !0 },
        { pattern: "réfléchis beaucoup", needsWordBoundary: !0 },
        { pattern: "réfléchis profondément", needsWordBoundary: !0 },
      ],
      MIDDLE: [{ pattern: "réfléchis", needsWordBoundary: !0 }],
      BASIC: [
        { pattern: "pense", needsWordBoundary: !0 },
        { pattern: "réfléchir", needsWordBoundary: !0 },
      ],
      NONE: [],
    },
    german: {
      HIGHEST: [
        { pattern: "denk mehr", needsWordBoundary: !0 },
        { pattern: "denk gründlich", needsWordBoundary: !0 },
        { pattern: "denk tief", needsWordBoundary: !0 },
      ],
      MIDDLE: [
        { pattern: "denk nach", needsWordBoundary: !0 },
        { pattern: "denk", needsWordBoundary: !0 },
      ],
      BASIC: [
        { pattern: "denke", needsWordBoundary: !0 },
        { pattern: "nachdenken", needsWordBoundary: !0 },
      ],
      NONE: [],
    },
    korean: {
      HIGHEST: [
        { pattern: "더 오래 생각" },
        { pattern: "깊이 생각" },
        { pattern: "심사숙고" },
        { pattern: "곰곰이 생각" },
      ],
      MIDDLE: [{ pattern: "많이 생각" }, { pattern: "더 생각" }, { pattern: "잘 생각" }],
      BASIC: [{ pattern: "생각" }],
      NONE: [],
    },
    italian: {
      HIGHEST: [
        { pattern: "pensa di più", needsWordBoundary: !0 },
        { pattern: "pensa a lungo", needsWordBoundary: !0 },
        { pattern: "pensa profondamente", needsWordBoundary: !0 },
        { pattern: "rifletti a fondo", needsWordBoundary: !0 },
      ],
      MIDDLE: [
        { pattern: "pensa", needsWordBoundary: !0 },
        { pattern: "pensa molto", needsWordBoundary: !0 },
        { pattern: "rifletti", needsWordBoundary: !0 },
      ],
      BASIC: [
        { pattern: "penso", needsWordBoundary: !0 },
        { pattern: "pensare", needsWordBoundary: !0 },
        { pattern: "pensando", needsWordBoundary: !0 },
        { pattern: "riflettere", needsWordBoundary: !0 },
      ],
      NONE: [],
    },
  };
function Hq(A, B) {
  if (process.env.MAX_THINKING_TOKENS) {
    let Q = parseInt(process.env.MAX_THINKING_TOKENS, 10);
    if (Q > 0) Y1("tengu_thinking", { provider: YL(), tokenCount: Q });
    return Q;
  }
  return Math.max(...A.filter((Q) => Q.type === "user" && !Q.isMeta).map(Tk9), B ?? 0);
}
function Tk9(A) {
  if (A.isMeta) return 0;
  let B = Pk9(A),
    { tokens: Q } = H20(B);
  if (Q > 0) Y1("tengu_thinking", { provider: YL(), tokenCount: Q });
  return Q;
}
function Pk9(A) {
  if (typeof A.message.content === "string") return A.message.content;
  return A.message.content.map((B) => (B.type === "text" ? B.text : "")).join("");
}
function jk9(A) {
  let B = [
    ["HIGHEST", Hu.HIGHEST],
    ["MIDDLE", Hu.MIDDLE],
    ["BASIC", Hu.BASIC],
  ];
  for (let [Q, Z] of B) if (Sk9(A, Q)) return Z;
  return Hu.NONE;
}
function VPA(A, B) {
  let Q = [],
    Z = A.toLowerCase();
  for (let G of Object.values(Rk9)) {
    let Y = G[B];
    for (let { pattern: I, needsWordBoundary: W } of Y) {
      if (typeof I !== "string") continue;
      let J = W ? new RegExp(`\\b${I}\\b`, "gi") : new RegExp(I, "gi"),
        X;
      while ((X = J.exec(Z)) !== null)
        Q.push({ word: A.slice(X.index, X.index + X[0].length), start: X.index, end: X.index + X[0].length });
    }
  }
  return Q;
}
function Sk9(A, B) {
  return VPA(A, B).length > 0;
}
function H20(A) {
  let B = A.toLowerCase().replaceAll("i think", "").replaceAll("we think", ""),
    Q = jk9(B),
    Z = "none";
  if (Q === Hu.HIGHEST) Z = "high";
  else if (Q === Hu.MIDDLE) Z = "medium";
  else if (Q === Hu.BASIC) Z = "low";
  return { tokens: Q, level: Z };
}
function hw1(A) {
  let B = [],
    Q = ["HIGHEST", "MIDDLE", "BASIC"];
  for (let Y of Q) {
    let I = VPA(A, Y);
    B.push(...I);
  }
  let Z = [],
    G = [];
  for (let Y of B)
    if (!Z.some((W) => (Y.start >= W.start && Y.start < W.end) || (Y.end > W.start && Y.end <= W.end)))
      (G.push(Y), Z.push({ start: Y.start, end: Y.end }));
  return G.sort((Y, I) => Y.start - I.start);
}
function KPA({ text: A, level: B }) {
  let Q = hw1(A),
    Z = fw1(A, Q),
    G = G51("requesting", A, !0, !1),
    Y = Cs[B],
    I = FPA[B];
  return LL.createElement(
    LL.Fragment,
    null,
    Z.map((W, J) => {
      if (W.isTrigger) {
        let X = bw1(W.text);
        return W.text.split("").map((F, V) => {
          let K = W.start + V,
            H = X ? Y51(V, !1) : Y,
            z = X ? Y51(V, !0) : I;
          return LL.createElement(Z51, {
            key: `${J}-${V}`,
            char: F,
            index: K,
            glimmerIndex: G,
            messageColor: H,
            shimmerColor: z,
          });
        });
      }
      return LL.createElement(M, { key: J }, W.text);
    }),
  );
}
function gw1({ inputState: A, children: B, terminalFocus: Q, ...Z }) {
  let { onInput: G, renderedValue: Y } = A,
    { wrappedOnInput: I, isPasting: W } = JPA({
      onPaste: Z.onPaste,
      onInput: (z, D) => {
        if (W && D.return) return;
        G(z, D);
      },
      onImagePaste: Z.onImagePaste,
    }),
    { onIsPastingChange: J } = Z;
  Us.default.useEffect(() => {
    if (J) J(W);
  }, [W, J]);
  let { showPlaceholder: X, renderedPlaceholder: F } = XPA({
    placeholder: Z.placeholder,
    value: Z.value,
    showCursor: Z.showCursor,
    focus: Z.focus,
    terminalFocus: Q,
  });
  s0(I, { isActive: Z.focus });
  let V = (Z.value && Z.value.trim().indexOf(" ") === -1) || (Z.value && Z.value.endsWith(" ")),
    K = Boolean(Z.argumentHint && Z.value && V && Z.value.startsWith("/")),
    H = Z.shimmerLevel && Z.shimmerLevel !== "none";
  return Us.default.createElement(
    y,
    null,
    Us.default.createElement(
      M,
      { wrap: "truncate-end" },
      X ? F : H && Z.shimmerLevel ? Us.default.createElement(KPA, { text: Y, level: Z.shimmerLevel }) : Y,
      K && Us.default.createElement(M, { dimColor: !0 }, Z.value?.endsWith(" ") ? "" : " ", Z.argumentHint),
      B,
    ),
  );
}
var oT = A1(V1(), 1);
var z20 = !0,
  zu = new Set();
function D20(A) {
  let B = A.toString();
  if (B.includes("\x1B[I")) ((z20 = !0), zu.forEach((Q) => Q(!0)));
  if (B.includes("\x1B[O")) ((z20 = !1), zu.forEach((Q) => Q(!1)));
}
function HPA() {
  let A = () => {
    if (zu.size === 0) return;
    (process.stdin.off("data", D20), process.stdout.write("\x1B[?1004l"));
  };
  process.on("exit", A);
}
function zPA() {
  let [A, B] = oT.useState(z20),
    [Q, Z] = oT.useState(!1),
    G = oT.useCallback((I) => {
      (B(I), Z(!1));
    }, []);
  (oT.useEffect(() => {
    if (!process.stdout.isTTY) return;
    if ((zu.add(G), zu.size === 1)) (process.stdout.write("\x1B[?1004h"), process.stdin.on("data", D20));
    return () => {
      if ((zu.delete(G), zu.size === 0)) (process.stdin.off("data", D20), process.stdout.write("\x1B[?1004l"));
    };
  }, [G]),
    oT.useEffect(() => {
      if (!A && Q) Y1("tengu_typing_without_terminal_focus", {});
    }, [A, Q]));
  let Y = oT.useCallback(
    (I, W) => {
      if (I === "\x1B[I" || I === "\x1B[O" || I === "[I" || I === "[O") return "";
      if ((I || W) && !A) Z(!0);
      return I;
    },
    [A],
  );
  return { isFocused: A || Q, filterFocusSequences: Y };
}
function s4(A) {
  let [B] = sB(),
    { isFocused: Q, filterFocusSequences: Z } = zPA(),
    G = vw1({
      value: A.value,
      onChange: A.onChange,
      onSubmit: A.onSubmit,
      onExit: A.onExit,
      onExitMessage: A.onExitMessage,
      onMessage: A.onMessage,
      onHistoryReset: A.onHistoryReset,
      onHistoryUp: A.onHistoryUp,
      onHistoryDown: A.onHistoryDown,
      focus: A.focus,
      mask: A.mask,
      multiline: A.multiline,
      cursorChar: A.showCursor ? " " : "",
      highlightPastedText: A.highlightPastedText,
      invert: Q ? n1.inverse : (Y) => Y,
      themeText: iB("text", B),
      columns: A.columns,
      onImagePaste: A.onImagePaste,
      disableCursorMovementForUpDownKeys: A.disableCursorMovementForUpDownKeys,
      externalOffset: A.cursorOffset,
      onOffsetChange: A.onChangeCursorOffset,
      inputFilter: Z,
    });
  return DPA.default.createElement(gw1, { inputState: G, terminalFocus: Q, shimmerLevel: A.shimmerLevel, ...A });
}
var ML = A1(V1(), 1);
var Du = A1(V1(), 1);
function CPA({ isFocused: A, isSelected: B, children: Q, shouldShowDownArrow: Z, shouldShowUpArrow: G }) {
  return Du.default.createElement(
    y,
    { flexDirection: "row", gap: 1 },
    A
      ? Du.default.createElement(M, { color: "suggestion" }, t0.pointer)
      : Z
        ? Du.default.createElement(M, { dimColor: !0 }, t0.arrowDown)
        : G
          ? Du.default.createElement(M, { dimColor: !0 }, t0.arrowUp)
          : Du.default.createElement(M, null, " "),
    Q,
    B && Du.default.createElement(M, { color: "success" }, t0.tick),
  );
}
var dz = A1(V1(), 1);
import { isDeepStrictEqual as yk9 } from "node:util";
class uw1 extends Map {
  first;
  constructor(A) {
    let B = [],
      Q,
      Z,
      G = 0;
    for (let Y of A) {
      let I = { ...Y, previous: Z, next: void 0, index: G };
      if (Z) Z.next = I;
      ((Q ||= I), B.push([Y.value, I]), G++, (Z = I));
    }
    super(B);
    this.first = Q;
  }
}
var kk9 = (A, B) => {
    switch (B.type) {
      case "focus-next-option": {
        if (!A.focusedValue) return A;
        let Q = A.optionMap.get(A.focusedValue);
        if (!Q) return A;
        let Z = Q.next;
        if (!Z) return A;
        if (!(Z.index >= A.visibleToIndex)) return { ...A, focusedValue: Z.value };
        let Y = Math.min(A.optionMap.size, A.visibleToIndex + 1),
          I = Y - A.visibleOptionCount;
        return { ...A, focusedValue: Z.value, visibleFromIndex: I, visibleToIndex: Y };
      }
      case "focus-previous-option": {
        if (!A.focusedValue) return A;
        let Q = A.optionMap.get(A.focusedValue);
        if (!Q) return A;
        let Z = Q.previous;
        if (!Z) return A;
        if (!(Z.index <= A.visibleFromIndex)) return { ...A, focusedValue: Z.value };
        let Y = Math.max(0, A.visibleFromIndex - 1),
          I = Y + A.visibleOptionCount;
        return { ...A, focusedValue: Z.value, visibleFromIndex: Y, visibleToIndex: I };
      }
      case "select-focused-option":
        return { ...A, value: A.focusedValue };
      case "reset":
        return B.state;
      case "set-focus":
        return { ...A, focusedValue: B.value };
    }
  },
  UPA = ({ visibleOptionCount: A, defaultValue: B, options: Q, initialFocusValue: Z }) => {
    let G = typeof A === "number" ? Math.min(A, Q.length) : Q.length,
      Y = new uw1(Q);
    return {
      optionMap: Y,
      visibleOptionCount: G,
      focusedValue: Z || Y.first?.value,
      visibleFromIndex: 0,
      visibleToIndex: G,
      value: B,
    };
  },
  $PA = ({
    visibleOptionCount: A = 5,
    options: B,
    defaultValue: Q,
    onChange: Z,
    onCancel: G,
    onFocus: Y,
    focusValue: I,
  }) => {
    let [W, J] = dz.useReducer(kk9, { visibleOptionCount: A, defaultValue: Q, options: B, initialFocusValue: I }, UPA),
      [X, F] = dz.useState(B);
    if (B !== X && !yk9(B, X))
      (J({
        type: "reset",
        state: UPA({
          visibleOptionCount: A,
          defaultValue: W.value || Q,
          options: B,
          initialFocusValue: W.focusedValue || I,
        }),
      }),
        F(B));
    let V = dz.useCallback(() => {
        J({ type: "focus-next-option" });
      }, []),
      K = dz.useCallback(() => {
        J({ type: "focus-previous-option" });
      }, []),
      H = dz.useCallback(() => {
        J({ type: "select-focused-option" });
      }, []),
      z = dz.useMemo(() => {
        return B.map((D, C) => ({ ...D, index: C })).slice(W.visibleFromIndex, W.visibleToIndex);
      }, [B, W.visibleFromIndex, W.visibleToIndex]);
    return (
      dz.useEffect(() => {
        if (W.focusedValue) Y?.(W.focusedValue);
      }, [W.focusedValue, Y]),
      dz.useEffect(() => {
        if (I) J({ type: "set-focus", value: I });
      }, [I]),
      {
        focusedValue: W.focusedValue,
        visibleFromIndex: W.visibleFromIndex,
        visibleToIndex: W.visibleToIndex,
        value: W.value,
        visibleOptions: z,
        focusNextOption: V,
        focusPreviousOption: K,
        selectFocusedOption: H,
        onChange: Z,
        onCancel: G,
        options: B,
      }
    );
  };
var wPA = ({ isDisabled: A = !1, state: B }) => {
  s0(
    (Q, Z) => {
      if (Z.downArrow || (Z.ctrl && Q === "n") || (!Z.ctrl && !Z.shift && Q === "j")) B.focusNextOption();
      if (Z.upArrow || (Z.ctrl && Q === "p") || (!Z.ctrl && !Z.shift && Q === "k")) B.focusPreviousOption();
      if (Z.return && B.focusedValue) (B.selectFocusedOption?.(), B.onChange?.(B.focusedValue));
      if (/^[0-9]+$/.test(Q)) {
        let G = parseInt(Q) - 1;
        if (G >= 0 && G < B.options.length) {
          B.onChange?.(B.options[G].value);
          return;
        }
      }
      if (Z.escape) B.onCancel?.();
    },
    { isActive: !A },
  );
};
function xA({
  isDisabled: A = !1,
  visibleOptionCount: B = 5,
  highlightText: Q,
  options: Z,
  defaultValue: G,
  onCancel: Y,
  onChange: I,
  onFocus: W,
  focusValue: J,
}) {
  let X = $PA({
    visibleOptionCount: B,
    options: Z,
    defaultValue: G,
    onChange: I,
    onCancel: Y,
    onFocus: W,
    focusValue: J,
  });
  wPA({ isDisabled: A, state: X });
  let F = { container: () => ({ flexDirection: "column" }), highlightedText: () => ({ bold: !0 }) },
    V = X.options.length.toString().length,
    K = Math.max(...X.options.map((D) => D.label.length)),
    H = 2,
    z = V + K + H;
  return ML.default.createElement(
    y,
    { ...F.container() },
    X.visibleOptions.map((D, C) => {
      let w = D.label,
        E = w;
      if (Q && w.includes(Q)) {
        let d = w.indexOf(Q);
        E = ML.default.createElement(
          ML.default.Fragment,
          null,
          w.slice(0, d),
          ML.default.createElement(M, { ...F.highlightedText() }, Q),
          w.slice(d + Q.length),
        );
      }
      let L = D.index === X.visibleFromIndex,
        O = D.index === X.visibleToIndex - 1,
        R = X.visibleToIndex < Z.length,
        P = X.visibleFromIndex > 0,
        _ = X.visibleFromIndex + C + 1,
        b = !A && X.focusedValue === D.value,
        S = X.value === D.value;
      return ML.default.createElement(
        CPA,
        { key: D.value, isFocused: b, isSelected: S, shouldShowDownArrow: R && O, shouldShowUpArrow: P && L },
        ML.default.createElement(
          y,
          { flexDirection: "row", flexShrink: 0, width: D.description ? z : void 0 },
          ML.default.createElement(
            M,
            { color: S ? "success" : b ? "suggestion" : void 0 },
            n1.dim(`${_}.`.padEnd(V + 1)),
            " ",
            E,
          ),
        ),
        D.description &&
          ML.default.createElement(
            y,
            { flexShrink: 99, marginLeft: 2 },
            ML.default.createElement(
              M,
              {
                wrap: "wrap-trim",
                dimColor: D.dimDescription !== !1,
                color: S ? "success" : b ? "suggestion" : void 0,
              },
              D.description,
            ),
          ),
      );
    }),
  );
}
var _k9 = [
  { value: "yes-session", label: "Yes, for this session" },
  { value: "yes-remember", label: "Yes, and remember this directory" },
  { value: "no", label: "No" },
];
function qPA() {
  return f9.createElement(
    M,
    { dimColor: !0 },
    "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on.",
  );
}
function xk9({ path: A }) {
  return f9.createElement(
    y,
    { flexDirection: "column", paddingX: 2, gap: 1 },
    f9.createElement(M, { color: "permission" }, A),
    f9.createElement(qPA, null),
  );
}
function vk9({ value: A, onChange: B, onSubmit: Q, error: Z }) {
  return f9.createElement(
    y,
    { flexDirection: "column" },
    f9.createElement(M, null, "Enter the path to the directory:"),
    f9.createElement(
      y,
      { borderDimColor: !0, borderStyle: "round", marginY: 1, paddingLeft: 1 },
      f9.createElement(s4, {
        showCursor: !0,
        placeholder: `Directory path${t0.ellipsis}`,
        value: A,
        onChange: B,
        onSubmit: Q,
        columns: 80,
        cursorOffset: A.length,
        onChangeCursorOffset: () => {},
      }),
    ),
    Z && f9.createElement(M, { color: "error" }, Z),
  );
}
function mw1({ onAddDirectory: A, onCancel: B, permissionContext: Q, directoryPath: Z }) {
  let [G, Y] = tT.useState(""),
    [I, W] = tT.useState(null),
    J = Z2(),
    X = tT.useMemo(() => _k9, []);
  s0(
    tT.useCallback(
      (K, H) => {
        if (H.escape || (H.ctrl && K === "c")) B();
      },
      [B],
    ),
  );
  let F = tT.useCallback(
      (K) => {
        let H = I51(K, Q);
        if (H.resultType === "success") A(H.absolutePath, !1);
        else W(W51(H));
      },
      [Q, A],
    ),
    V = tT.useCallback(
      (K) => {
        if (!Z) return;
        switch (K) {
          case "yes-session":
            A(Z, !1);
            break;
          case "yes-remember":
            A(Z, !0);
            break;
          case "no":
            B();
            break;
        }
      },
      [Z, A, B],
    );
  return f9.createElement(
    f9.Fragment,
    null,
    f9.createElement(
      y,
      {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        gap: 1,
        borderColor: "permission",
      },
      f9.createElement(M, { bold: !0, color: "permission" }, "Add directory to workspace"),
      Z
        ? f9.createElement(
            y,
            { flexDirection: "column", gap: 1 },
            f9.createElement(xk9, { path: Z }),
            f9.createElement(xA, { options: X, onChange: V, onCancel: () => V("no") }),
          )
        : f9.createElement(
            y,
            { flexDirection: "column", gap: 1, marginX: 2 },
            f9.createElement(qPA, null),
            f9.createElement(vk9, { value: G, onChange: Y, onSubmit: F, error: I }),
          ),
    ),
    !Z &&
      f9.createElement(
        y,
        { marginLeft: 3 },
        J.pending
          ? f9.createElement(M, { dimColor: !0 }, "Press ", J.keyName, " again to exit")
          : f9.createElement(M, { dimColor: !0 }, "Enter to add · Esc to cancel"),
      ),
  );
}
var zq = A1(V1(), 1),
  EPA = A1(V1(), 1);
function NA({ children: A, height: B }) {
  if (EPA.useContext(NPA)) return A;
  return zq.createElement(
    bk9,
    null,
    zq.createElement(
      y,
      { flexDirection: "row", height: B, overflowY: "hidden" },
      zq.createElement(M, null, "  ", "⎿  "),
      A,
    ),
  );
}
var NPA = zq.createContext(!1);
function bk9({ children: A }) {
  return zq.createElement(NPA.Provider, { value: !0 }, A);
}
function hk9({ message: A, args: B, onDone: Q }) {
  return (
    eT.useEffect(() => {
      let Z = setTimeout(Q, 0);
      return () => clearTimeout(Z);
    }, [Q]),
    eT.default.createElement(
      y,
      { flexDirection: "column" },
      eT.default.createElement(M, { dimColor: !0 }, "> /add-dir ", B),
      eT.default.createElement(NA, null, eT.default.createElement(M, null, A)),
    )
  );
}
function I51(A, B) {
  if (!A) return { resultType: "emptyPath" };
  let Q = i9(A),
    Z = w1();
  if (!Z.existsSync(Q)) return { resultType: "pathNotFound", directoryPath: A, absolutePath: Q };
  if (!Z.statSync(Q).isDirectory()) return { resultType: "notADirectory", directoryPath: A, absolutePath: Q };
  let G = $s(B);
  for (let Y of G) if (Cu(Q, Y)) return { resultType: "alreadyInWorkingDirectory", directoryPath: A, workingDir: Y };
  return { resultType: "success", absolutePath: Q };
}
function W51(A) {
  switch (A.resultType) {
    case "emptyPath":
      return "Please provide a directory path.";
    case "pathNotFound":
      return `Path ${n1.bold(A.absolutePath)} was not found.`;
    case "notADirectory": {
      let B = fk9(A.absolutePath);
      return `${n1.bold(A.directoryPath)} is not a directory. Did you mean to add the parent directory ${n1.bold(B)}?`;
    }
    case "alreadyInWorkingDirectory":
      return `${n1.bold(A.directoryPath)} is already accessible within the existing working directory ${n1.bold(A.workingDir)}.`;
    case "success":
      return `Added ${n1.bold(A.absolutePath)} as a working directory.`;
  }
}
var gk9 = {
    type: "local-jsx",
    name: "add-dir",
    description: "Add a new working directory",
    argumentHint: "<path>",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, B, Q) {
      let Z = Q.trim(),
        G = await B.getAppState(),
        Y = I51(Z, G.toolPermissionContext);
      if (Y.resultType !== "success") {
        let I = W51(Y);
        return eT.default.createElement(hk9, { message: I, args: Q, onDone: () => A(I) });
      }
      return eT.default.createElement(mw1, {
        directoryPath: Y.absolutePath,
        permissionContext: G.toolPermissionContext,
        onAddDirectory: async (I, W) => {
          let X = { type: "addDirectories", directories: [I], destination: W ? "localSettings" : "session" },
            F = await B.getAppState(),
            V = HF(F.toolPermissionContext, X);
          B.setAppState((z) => ({ ...z, toolPermissionContext: V }));
          let K;
          if (W)
            try {
              (ig(X), (K = `Added ${n1.bold(I)} as a working directory and saved to local settings`));
            } catch (z) {
              K = `Added ${n1.bold(I)} as a working directory. Failed to save to local settings: ${z instanceof Error ? z.message : "Unknown error"}`;
            }
          else K = `Added ${n1.bold(I)} as a working directory for this session`;
          let H = `${K} ${n1.dim("· /permissions to manage")}`;
          A(H);
        },
        onCancel: () => {
          A(`Did not add ${n1.bold(Y.absolutePath)} as a working directory.`);
        },
      });
    },
    userFacingName() {
      return "add-dir";
    },
  },
  LPA = gk9;
import { resolve as uk9 } from "path";
function mk9({ processPwd: A, originalCwd: B }) {
  let { resolvedPath: Q, isSymlink: Z } = cJ(w1(), A);
  return Z ? Q === uk9(B) : !1;
}
function MPA({ permissionModeCli: A, dangerouslySkipPermissions: B }) {
  let Q = E2() || {},
    Z = Dq("tengu_disable_bypass_permissions_mode"),
    G = Q.permissions?.disableBypassPermissionsMode === "disable",
    Y = Z || G,
    I = [];
  if (B) I.push("bypassPermissions");
  if (A) I.push(Y$A(A));
  if (Q.permissions?.defaultMode) I.push(Q.permissions.defaultMode);
  for (let W of I)
    if (W === "bypassPermissions" && Y) {
      if (Z) d0("bypassPermissions mode is disabled by Statsig gate");
      else d0("bypassPermissions mode is disabled by settings");
      continue;
    } else return W;
  return "default";
}
function ws(A) {
  if (A.length === 0) return [];
  let B = [];
  for (let Q of A) {
    if (!Q) continue;
    let Z = "",
      G = !1;
    for (let Y of Q)
      switch (Y) {
        case "(":
          ((G = !0), (Z += Y));
          break;
        case ")":
          ((G = !1), (Z += Y));
          break;
        case ",":
          if (G) Z += Y;
          else {
            if (Z.trim()) B.push(Z.trim());
            Z = "";
          }
          break;
        case " ":
          if (G) Z += Y;
          else if (Z.trim()) (B.push(Z.trim()), (Z = ""));
          break;
        default:
          Z += Y;
      }
    if (Z.trim()) B.push(Z.trim());
  }
  return B;
}
function OPA({ allowedToolsCli: A, disallowedToolsCli: B, permissionMode: Q, addDirs: Z }) {
  let G = ws(A),
    Y = ws(B),
    I = [],
    W = new Map(),
    J = process.env.PWD;
  if (J && J !== WQ() && mk9({ originalCwd: WQ(), processPwd: J })) W.set(J, { path: J, source: "session" });
  let X = Dq("tengu_disable_bypass_permissions_mode"),
    F = E2() || {},
    V = F.permissions?.disableBypassPermissionsMode === "disable",
    H = O$A(
      {
        mode: Q,
        additionalWorkingDirectories: W,
        alwaysAllowRules: { cliArg: G },
        alwaysDenyRules: { cliArg: Y },
        alwaysAskRules: {},
        isBypassPermissionsModeAvailable: Q === "bypassPermissions" && !X && !V,
      },
      ZU1(),
    ),
    z = [...(F.permissions?.additionalDirectories || []), ...Z];
  for (let D of z) {
    let C = I51(D, H);
    if (C.resultType === "success")
      H = HF(H, { type: "addDirectories", directories: [C.absolutePath], destination: "cliArg" });
    else if (C.resultType !== "alreadyInWorkingDirectory") I.push(W51(C));
  }
  return { toolPermissionContext: H, warnings: I };
}
async function C20() {
  return TPA("tengu_disable_bypass_permissions_mode");
}
function U20(A) {
  let B = A;
  if (A.mode === "bypassPermissions") B = HF(A, { type: "setMode", mode: "default", destination: "session" });
  return { ...B, isBypassPermissionsModeAvailable: !1 };
}
async function RPA(A) {
  if (A.mode !== "bypassPermissions") return null;
  if (!(await C20())) return null;
  return (d0("bypassPermissions mode is being disabled by Statsig gate (async check)"), U20(A));
}
import { join as $20 } from "path";
var PPA = ["commands", "agents", "output-styles"];
function qs(A, B = "Custom item") {
  let Q = A.split(`
`);
  for (let Z of Q) {
    let G = Z.trim();
    if (G) {
      let I = G.match(/^#+\s+(.+)$/)?.[1] ?? G;
      return I.length > 100 ? I.substring(0, 97) + "..." : I;
    }
  }
  return B;
}
function jPA(A) {
  if (A === void 0 || A === null) return null;
  if (!A) return [];
  let B = [];
  if (typeof A === "string") B = [A];
  else if (Array.isArray(A)) B = A.filter((Z) => typeof Z === "string");
  if (B.length === 0) return [];
  let Q = ws(B);
  if (Q.includes("*")) return ["*"];
  return Q;
}
function dw1(A) {
  let B = jPA(A);
  if (B === null) return A === void 0 ? ["*"] : [];
  return B;
}
function Es(A) {
  let B = jPA(A);
  if (B === null) return [];
  return B;
}
var OL = YA(async function (A) {
  let B = Date.now(),
    Q = $20(IQ(), A),
    Z = $20(AA(), ".claude", A),
    G = $20(hT(), ".claude", A),
    [Y, I, W] = await Promise.all([
      w20(G).then((J) => J.map((X) => ({ ...X, baseDir: G, source: "policySettings" }))),
      w20(Q).then((J) => J.map((X) => ({ ...X, baseDir: Q, source: "userSettings" }))),
      w20(Z).then((J) => J.map((X) => ({ ...X, baseDir: Z, source: "projectSettings" }))),
    ]);
  return (
    Y1("tengu_dir_search", {
      durationMs: Date.now() - B,
      managedFilesFound: Y.length,
      userFilesFound: I.length,
      projectFilesFound: W.length,
      subdir: A,
    }),
    [...Y, ...I, ...W]
  );
});
async function w20(A) {
  let B = C4(),
    Q = setTimeout(() => B.abort(), 3000);
  try {
    return (w1().existsSync(A) ? await pk(["--files", "--hidden", "--follow", "--glob", "*.md"], A, B.signal) : [])
      .map((G) => {
        try {
          let Y = w1().readFileSync(G, { encoding: "utf-8" }),
            { frontmatter: I, content: W } = B_(Y);
          return { filePath: G, frontmatter: I, content: W };
        } catch (Y) {
          let I = Y instanceof Error ? Y.message : String(Y);
          return (
            F1(`Failed to read/parse markdown file:  ${G}: ${I}`),
            U1(
              Y instanceof Error
                ? new Error(`Markdown read error: ${Y.message}`)
                : new Error(`Markdown read error: ${String(Y)}`),
              YGA,
            ),
            null
          );
        }
      })
      .filter((G) => G !== null);
  } finally {
    clearTimeout(Q);
  }
}
var q20 = YA(async () => {
  try {
    return (await OL("output-styles"))
      .map(({ filePath: Q, frontmatter: Z, content: G, source: Y }) => {
        try {
          let W = dk9(Q).replace(/\.md$/, ""),
            J = Z.name || W,
            X = Z.description || qs(G, `Custom ${W} output style`);
          return { name: J, description: X, prompt: G.trim(), source: Y };
        } catch (I) {
          return (U1(I instanceof Error ? I : new Error(String(I)), jGA), null);
        }
      })
      .filter((Q) => Q !== null);
  } catch (A) {
    return (U1(A instanceof Error ? A : new Error(String(A)), PGA), []);
  }
});
function SPA() {
  (q20.cache?.clear?.(), OL.cache?.clear?.());
}
var yPA = `
## Insights
In order to encourage learning, before and after writing code, always provide brief educational explanations about implementation choices using (with backticks):
"\`${t0.star} Insight ─────────────────────────────────────\`
[2-3 key educational points]
\`─────────────────────────────────────────────────\`"

These insights should be included in the conversation, not in the codebase. You should generally focus on interesting insights that are specific to the codebase or the code you just wrote, rather than general programming concepts.`,
  iW = "default",
  Uu = {
    [iW]: null,
    Explanatory: {
      name: "Explanatory",
      source: "built-in",
      description: "Claude explains its implementation choices and codebase patterns",
      isCodingRelated: !0,
      prompt: `You are an interactive CLI tool that helps users with software engineering tasks. In addition to software engineering tasks, you should provide educational insights about the codebase along the way.

You should be clear and educational, providing helpful explanations while remaining focused on the task. Balance educational content with task completion. When providing insights, you may exceed typical length constraints, but remain focused and relevant.

# Explanatory Style Active
${yPA}`,
    },
    Learning: {
      name: "Learning",
      source: "built-in",
      description: "Claude pauses and asks you to write small pieces of code for hands-on practice",
      isCodingRelated: !0,
      prompt: `You are an interactive CLI tool that helps users with software engineering tasks. In addition to software engineering tasks, you should help users learn more about the codebase through hands-on practice and educational insights.

You should be collaborative and encouraging. Balance task completion with learning by requesting user input for meaningful design decisions while handling routine implementation yourself.   

# Learning Style Active
## Requesting Human Contributions
In order to encourage learning, ask the human to contribute 2-10 line code pieces when generating 20+ lines involving:
- Design decisions (error handling, data structures)
- Business logic with multiple valid approaches  
- Key algorithms or interface definitions

**TodoList Integration**: If using a TodoList for the overall task, include a specific todo item like "Request human input on [specific decision]" when planning to request human input. This ensures proper task tracking. Note: TodoList is not required for all tasks.

Example TodoList flow:
   ✓ "Set up component structure with placeholder for logic"
   ✓ "Request human collaboration on decision logic implementation"
   ✓ "Integrate contribution and complete feature"

### Request Format
\`\`\`
${t0.bullet} **Learn by Doing**
**Context:** [what's built and why this decision matters]
**Your Task:** [specific function/section in file, mention file and TODO(human) but do not include line numbers]
**Guidance:** [trade-offs and constraints to consider]
\`\`\`

### Key Guidelines
- Frame contributions as valuable design decisions, not busy work
- You must first add a TODO(human) section into the codebase with your editing tools before making the Learn by Doing request      
- Make sure there is one and only one TODO(human) section in the code
- Don't take any action or output anything after the Learn by Doing request. Wait for human implementation before proceeding.

### Example Requests

**Whole Function Example:**
\`\`\`
${t0.bullet} **Learn by Doing**

**Context:** I've set up the hint feature UI with a button that triggers the hint system. The infrastructure is ready: when clicked, it calls selectHintCell() to determine which cell to hint, then highlights that cell with a yellow background and shows possible values. The hint system needs to decide which empty cell would be most helpful to reveal to the user.

**Your Task:** In sudoku.js, implement the selectHintCell(board) function. Look for TODO(human). This function should analyze the board and return {row, col} for the best cell to hint, or null if the puzzle is complete.

**Guidance:** Consider multiple strategies: prioritize cells with only one possible value (naked singles), or cells that appear in rows/columns/boxes with many filled cells. You could also consider a balanced approach that helps without making it too easy. The board parameter is a 9x9 array where 0 represents empty cells.
\`\`\`

**Partial Function Example:**
\`\`\`
${t0.bullet} **Learn by Doing**

**Context:** I've built a file upload component that validates files before accepting them. The main validation logic is complete, but it needs specific handling for different file type categories in the switch statement.

**Your Task:** In upload.js, inside the validateFile() function's switch statement, implement the 'case "document":' branch. Look for TODO(human). This should validate document files (pdf, doc, docx).

**Guidance:** Consider checking file size limits (maybe 10MB for documents?), validating the file extension matches the MIME type, and returning {valid: boolean, error?: string}. The file object has properties: name, size, type.
\`\`\`

**Debugging Example:**
\`\`\`
${t0.bullet} **Learn by Doing**

**Context:** The user reported that number inputs aren't working correctly in the calculator. I've identified the handleInput() function as the likely source, but need to understand what values are being processed.

**Your Task:** In calculator.js, inside the handleInput() function, add 2-3 console.log statements after the TODO(human) comment to help debug why number inputs fail.

**Guidance:** Consider logging: the raw input value, the parsed result, and any validation state. This will help us understand where the conversion breaks.
\`\`\`

### After Contributions
Share one insight connecting their code to broader patterns or system effects. Avoid praise or repetition.

## Insights
${yPA}`,
    },
  };
async function $u() {
  let A = await q20(),
    B = { ...Uu },
    Q = A.filter((I) => I.source === "policySettings"),
    Z = A.filter((I) => I.source === "userSettings"),
    G = A.filter((I) => I.source === "projectSettings"),
    Y = [Z, G, Q];
  for (let I of Y)
    for (let W of I) B[W.name] = { name: W.name, description: W.description, prompt: W.prompt, source: W.source };
  return B;
}
async function kPA() {
  let B = E2()?.outputStyle || iW;
  return (await $u())[B] ?? null;
}
function G9(A, B, Q, Z, G) {
  if (Z === "m") throw new TypeError("Private method is not writable");
  if (Z === "a" && !G) throw new TypeError("Private accessor was defined without a setter");
  if (typeof B === "function" ? A !== B || !G : !B.has(A))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (Z === "a" ? G.call(A, Q) : G ? (G.value = Q) : B.set(A, Q), Q);
}
function vA(A, B, Q, Z) {
  if (Q === "a" && !Z) throw new TypeError("Private accessor was defined without a getter");
  if (typeof B === "function" ? A !== B || !Z : !B.has(A))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return Q === "m" ? Z : Q === "a" ? Z.call(A) : Z ? Z.value : B.get(A);
}
var E20 = function () {
  let { crypto: A } = globalThis;
  if (A?.randomUUID) return ((E20 = A.randomUUID.bind(A)), A.randomUUID());
  let B = new Uint8Array(1),
    Q = A ? () => A.getRandomValues(B)[0] : () => (Math.random() * 255) & 255;
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (Z) => (+Z ^ (Q() & (15 >> (+Z / 4)))).toString(16));
};
function AP(A) {
  return (
    typeof A === "object" &&
    A !== null &&
    (("name" in A && A.name === "AbortError") ||
      ("message" in A && String(A.message).includes("FetchRequestCanceledException")))
  );
}
var J51 = (A) => {
  if (A instanceof Error) return A;
  if (typeof A === "object" && A !== null) {
    try {
      if (Object.prototype.toString.call(A) === "[object Error]") {
        let B = new Error(A.message, A.cause ? { cause: A.cause } : {});
        if (A.stack) B.stack = A.stack;
        if (A.cause && !B.cause) B.cause = A.cause;
        if (A.name) B.name = A.name;
        return B;
      }
    } catch {}
    try {
      return new Error(JSON.stringify(A));
    } catch {}
  }
  return new Error(A);
};
class jQ extends Error {}
class n9 extends jQ {
  constructor(A, B, Q, Z) {
    super(`${n9.makeMessage(A, B, Q)}`);
    ((this.status = A), (this.headers = Z), (this.requestID = Z?.get("request-id")), (this.error = B));
  }
  static makeMessage(A, B, Q) {
    let Z = B?.message
      ? typeof B.message === "string"
        ? B.message
        : JSON.stringify(B.message)
      : B
        ? JSON.stringify(B)
        : Q;
    if (A && Z) return `${A} ${Z}`;
    if (A) return `${A} status code (no body)`;
    if (Z) return Z;
    return "(no status code or body)";
  }
  static generate(A, B, Q, Z) {
    if (!A || !Z) return new cz({ message: Q, cause: J51(B) });
    let G = B;
    if (A === 400) return new X51(A, G, Q, Z);
    if (A === 401) return new wu(A, G, Q, Z);
    if (A === 403) return new F51(A, G, Q, Z);
    if (A === 404) return new qu(A, G, Q, Z);
    if (A === 409) return new V51(A, G, Q, Z);
    if (A === 422) return new K51(A, G, Q, Z);
    if (A === 429) return new H51(A, G, Q, Z);
    if (A >= 500) return new z51(A, G, Q, Z);
    return new n9(A, G, Q, Z);
  }
}
class BW extends n9 {
  constructor({ message: A } = {}) {
    super(void 0, void 0, A || "Request was aborted.", void 0);
  }
}
class cz extends n9 {
  constructor({ message: A, cause: B }) {
    super(void 0, void 0, A || "Connection error.", void 0);
    if (B) this.cause = B;
  }
}
class BP extends cz {
  constructor({ message: A } = {}) {
    super({ message: A ?? "Request timed out." });
  }
}
class X51 extends n9 {}
class wu extends n9 {}
class F51 extends n9 {}
class qu extends n9 {}
class V51 extends n9 {}
class K51 extends n9 {}
class H51 extends n9 {}
class z51 extends n9 {}
var lk9 = /^[a-z][a-z0-9+.-]*:/i,
  _PA = (A) => {
    return lk9.test(A);
  },
  N20 = (A) => ((N20 = Array.isArray), N20(A)),
  L20 = N20;
function M20(A) {
  if (typeof A !== "object") return {};
  return A ?? {};
}
function xPA(A) {
  if (!A) return !0;
  for (let B in A) return !1;
  return !0;
}
function vPA(A, B) {
  return Object.prototype.hasOwnProperty.call(A, B);
}
var bPA = (A, B) => {
  if (typeof B !== "number" || !Number.isInteger(B)) throw new jQ(`${A} must be an integer`);
  if (B < 0) throw new jQ(`${A} must be a positive integer`);
  return B;
};
var cw1 = (A) => {
  try {
    return JSON.parse(A);
  } catch (B) {
    return;
  }
};
var fPA = (A) => new Promise((B) => setTimeout(B, A));
var INK_VERSION = "0.60.0";
var mPA = () => {
  return typeof window !== "undefined" && typeof window.document !== "undefined" && typeof navigator !== "undefined";
};
function pk9() {
  if (typeof Deno !== "undefined" && Deno.build != null) return "deno";
  if (typeof EdgeRuntime !== "undefined") return "edge";
  if (
    Object.prototype.toString.call(typeof globalThis.process !== "undefined" ? globalThis.process : 0) ===
    "[object process]"
  )
    return "node";
  return "unknown";
}
var ik9 = () => {
  let A = pk9();
  if (A === "deno")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": INK_VERSION,
      "X-Stainless-OS": gPA(Deno.build.os),
      "X-Stainless-Arch": hPA(Deno.build.arch),
      "X-Stainless-Runtime": "deno",
      "X-Stainless-Runtime-Version":
        typeof Deno.version === "string" ? Deno.version : (Deno.version?.deno ?? "unknown"),
    };
  if (typeof EdgeRuntime !== "undefined")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": INK_VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": `other:${EdgeRuntime}`,
      "X-Stainless-Runtime": "edge",
      "X-Stainless-Runtime-Version": globalThis.process.version,
    };
  if (A === "node")
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": INK_VERSION,
      "X-Stainless-OS": gPA(globalThis.process.platform ?? "unknown"),
      "X-Stainless-Arch": hPA(globalThis.process.arch ?? "unknown"),
      "X-Stainless-Runtime": "node",
      "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown",
    };
  let B = nk9();
  if (B)
    return {
      "X-Stainless-Lang": "js",
      "X-Stainless-Package-Version": INK_VERSION,
      "X-Stainless-OS": "Unknown",
      "X-Stainless-Arch": "unknown",
      "X-Stainless-Runtime": `browser:${B.browser}`,
      "X-Stainless-Runtime-Version": B.version,
    };
  return {
    "X-Stainless-Lang": "js",
    "X-Stainless-Package-Version": INK_VERSION,
    "X-Stainless-OS": "Unknown",
    "X-Stainless-Arch": "unknown",
    "X-Stainless-Runtime": "unknown",
    "X-Stainless-Runtime-Version": "unknown",
  };
};
function nk9() {
  if (typeof navigator === "undefined" || !navigator) return null;
  let A = [
    { key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "ie", pattern: /Trident(?:.*API_VERSION_DATE\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
    { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ },
  ];
  for (let { key: B, pattern: Q } of A) {
    let Z = Q.exec(navigator.userAgent);
    if (Z) {
      let G = Z[1] || 0,
        Y = Z[2] || 0,
        I = Z[3] || 0;
      return { browser: B, version: `${G}.${Y}.${I}` };
    }
  }
  return null;
}
var hPA = (A) => {
    if (A === "x32") return "x32";
    if (A === "x86_64" || A === "x64") return "x64";
    if (A === "arm") return "arm";
    if (A === "aarch64" || A === "arm64") return "arm64";
    if (A) return `other:${A}`;
    return "unknown";
  },
  gPA = (A) => {
    if (((A = A.toLowerCase()), A.includes("ios"))) return "iOS";
    if (A === "android") return "Android";
    if (A === "darwin") return "MacOS";
    if (A === "win32") return "Windows";
    if (A === "freebsd") return "FreeBSD";
    if (A === "openbsd") return "OpenBSD";
    if (A === "linux") return "Linux";
    if (A) return `Other:${A}`;
    return "Unknown";
  },
  uPA,
  dPA = () => {
    return uPA ?? (uPA = ik9());
  };
function cPA() {
  if (typeof fetch !== "undefined") return fetch;
  throw new Error(
    "`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`",
  );
}
function O20(...A) {
  let B = globalThis.ReadableStream;
  if (typeof B === "undefined")
    throw new Error(
      "`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`",
    );
  return new B(...A);
}
function lw1(A) {
  let B = Symbol.asyncIterator in A ? A[Symbol.asyncIterator]() : A[Symbol.iterator]();
  return O20({
    start() {},
    async pull(Q) {
      let { done: Z, value: G } = await B.next();
      if (Z) Q.close();
      else Q.enqueue(G);
    },
    async cancel() {
      await B.return?.();
    },
  });
}
function D51(A) {
  if (A[Symbol.asyncIterator]) return A;
  let B = A.getReader();
  return {
    async next() {
      try {
        let Q = await B.read();
        if (Q?.done) B.releaseLock();
        return Q;
      } catch (Q) {
        throw (B.releaseLock(), Q);
      }
    },
    async return() {
      let Q = B.cancel();
      return (B.releaseLock(), await Q, { done: !0, value: void 0 });
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
async function lPA(A) {
  if (A === null || typeof A !== "object") return;
  if (A[Symbol.asyncIterator]) {
    await A[Symbol.asyncIterator]().return?.();
    return;
  }
  let B = A.getReader(),
    Q = B.cancel();
  (B.releaseLock(), await Q);
}
var pPA = ({ headers: A, body: B }) => {
  return { bodyHeaders: { "content-type": "application/json" }, body: JSON.stringify(B) };
};
function aPA(A) {
  let B = 0;
  for (let G of A) B += G.length;
  let Q = new Uint8Array(B),
    Z = 0;
  for (let G of A) (Q.set(G, Z), (Z += G.length));
  return Q;
}
var iPA;
function C51(A) {
  let B;
  return (iPA ?? ((B = new globalThis.TextEncoder()), (iPA = B.encode.bind(B))))(A);
}
var nPA;
function R20(A) {
  let B;
  return (nPA ?? ((B = new globalThis.TextDecoder()), (nPA = B.decode.bind(B))))(A);
}
var lz, pz;
class L_ {
  constructor() {
    (lz.set(this, void 0), pz.set(this, void 0), G9(this, lz, new Uint8Array(), "f"), G9(this, pz, null, "f"));
  }
  decode(A) {
    if (A == null) return [];
    let B = A instanceof ArrayBuffer ? new Uint8Array(A) : typeof A === "string" ? C51(A) : A;
    G9(this, lz, aPA([vA(this, lz, "f"), B]), "f");
    let Q = [],
      Z;
    while ((Z = rk9(vA(this, lz, "f"), vA(this, pz, "f"))) != null) {
      if (Z.carriage && vA(this, pz, "f") == null) {
        G9(this, pz, Z.index, "f");
        continue;
      }
      if (vA(this, pz, "f") != null && (Z.index !== vA(this, pz, "f") + 1 || Z.carriage)) {
        (Q.push(R20(vA(this, lz, "f").subarray(0, vA(this, pz, "f") - 1))),
          G9(this, lz, vA(this, lz, "f").subarray(vA(this, pz, "f")), "f"),
          G9(this, pz, null, "f"));
        continue;
      }
      let G = vA(this, pz, "f") !== null ? Z.preceding - 1 : Z.preceding,
        Y = R20(vA(this, lz, "f").subarray(0, G));
      (Q.push(Y), G9(this, lz, vA(this, lz, "f").subarray(Z.index), "f"), G9(this, pz, null, "f"));
    }
    return Q;
  }
  flush() {
    if (!vA(this, lz, "f").length) return [];
    return this.decode(`
`);
  }
}
((lz = new WeakMap()), (pz = new WeakMap()));
L_.NEWLINE_CHARS = new Set([
  `
`,
  "\r",
]);
L_.NEWLINE_REGEXP = /\r\n|[\n\r]/g;
function rk9(A, B) {
  for (let G = B ?? 0; G < A.length; G++) {
    if (A[G] === 10) return { preceding: G, index: G + 1, carriage: !1 };
    if (A[G] === 13) return { preceding: G, index: G + 1, carriage: !0 };
  }
  return null;
}
function sPA(A) {
  for (let Z = 0; Z < A.length - 1; Z++) {
    if (A[Z] === 10 && A[Z + 1] === 10) return Z + 2;
    if (A[Z] === 13 && A[Z + 1] === 13) return Z + 2;
    if (A[Z] === 13 && A[Z + 1] === 10 && Z + 3 < A.length && A[Z + 2] === 13 && A[Z + 3] === 10) return Z + 4;
  }
  return -1;
}
var iw1 = { off: 0, error: 200, warn: 300, info: 400, debug: 500 },
  T20 = (A, B, Q) => {
    if (!A) return;
    if (vPA(iw1, A)) return A;
    nW(Q).warn(`${B} was set to ${JSON.stringify(A)}, expected one of ${JSON.stringify(Object.keys(iw1))}`);
    return;
  };
function U51() {}
function pw1(A, B, Q) {
  if (!B || iw1[A] > iw1[Q]) return U51;
  else return B[A].bind(B);
}
var ok9 = { error: U51, warn: U51, info: U51, debug: U51 },
  rPA = new WeakMap();
function nW(A) {
  let B = A.logger,
    Q = A.logLevel ?? "off";
  if (!B) return ok9;
  let Z = rPA.get(B);
  if (Z && Z[0] === Q) return Z[1];
  let G = { error: pw1("error", B, Q), warn: pw1("warn", B, Q), info: pw1("info", B, Q), debug: pw1("debug", B, Q) };
  return (rPA.set(B, [Q, G]), G);
}
var QP = (A) => {
  if (A.options) ((A.options = { ...A.options }), delete A.options.headers);
  if (A.headers)
    A.headers = Object.fromEntries(
      (A.headers instanceof Headers ? [...A.headers] : Object.entries(A.headers)).map(([B, Q]) => [
        B,
        B.toLowerCase() === "x-api-key" ||
        B.toLowerCase() === "authorization" ||
        B.toLowerCase() === "cookie" ||
        B.toLowerCase() === "set-cookie"
          ? "***"
          : Q,
      ]),
    );
  if ("retryOfRequestLogID" in A) {
    if (A.retryOfRequestLogID) A.retryOf = A.retryOfRequestLogID;
    delete A.retryOfRequestLogID;
  }
  return A;
};
var $51;
class OV {
  constructor(A, B, Q) {
    ((this.iterator = A), $51.set(this, void 0), (this.controller = B), G9(this, $51, Q, "f"));
  }
  static fromSSEResponse(A, B, Q) {
    let Z = !1,
      G = Q ? nW(Q) : console;
    async function* Y() {
      if (Z) throw new jQ("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      Z = !0;
      let I = !1;
      try {
        for await (let W of tk9(A, B)) {
          if (W.event === "completion")
            try {
              yield JSON.parse(W.data);
            } catch (J) {
              throw (G.error("Could not parse message into JSON:", W.data), G.error("From chunk:", W.raw), J);
            }
          if (
            W.event === "message_start" ||
            W.event === "message_delta" ||
            W.event === "message_stop" ||
            W.event === "content_block_start" ||
            W.event === "content_block_delta" ||
            W.event === "content_block_stop"
          )
            try {
              yield JSON.parse(W.data);
            } catch (J) {
              throw (G.error("Could not parse message into JSON:", W.data), G.error("From chunk:", W.raw), J);
            }
          if (W.event === "ping") continue;
          if (W.event === "error") throw new n9(void 0, cw1(W.data) ?? W.data, void 0, A.headers);
        }
        I = !0;
      } catch (W) {
        if (AP(W)) return;
        throw W;
      } finally {
        if (!I) B.abort();
      }
    }
    return new OV(Y, B, Q);
  }
  static fromReadableStream(A, B, Q) {
    let Z = !1;
    async function* G() {
      let I = new L_(),
        W = D51(A);
      for await (let J of W) for (let X of I.decode(J)) yield X;
      for (let J of I.flush()) yield J;
    }
    async function* Y() {
      if (Z) throw new jQ("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      Z = !0;
      let I = !1;
      try {
        for await (let W of G()) {
          if (I) continue;
          if (W) yield JSON.parse(W);
        }
        I = !0;
      } catch (W) {
        if (AP(W)) return;
        throw W;
      } finally {
        if (!I) B.abort();
      }
    }
    return new OV(Y, B, Q);
  }
  [(($51 = new WeakMap()), Symbol.asyncIterator)]() {
    return this.iterator();
  }
  tee() {
    let A = [],
      B = [],
      Q = this.iterator(),
      Z = (G) => {
        return {
          next: () => {
            if (G.length === 0) {
              let Y = Q.next();
              (A.push(Y), B.push(Y));
            }
            return G.shift();
          },
        };
      };
    return [
      new OV(() => Z(A), this.controller, vA(this, $51, "f")),
      new OV(() => Z(B), this.controller, vA(this, $51, "f")),
    ];
  }
  toReadableStream() {
    let A = this,
      B;
    return O20({
      async start() {
        B = A[Symbol.asyncIterator]();
      },
      async pull(Q) {
        try {
          let { value: Z, done: G } = await B.next();
          if (G) return Q.close();
          let Y = C51(
            JSON.stringify(Z) +
              `
`,
          );
          Q.enqueue(Y);
        } catch (Z) {
          Q.error(Z);
        }
      },
      async cancel() {
        await B.return?.();
      },
    });
  }
}
async function* tk9(A, B) {
  if (!A.body) {
    if ((B.abort(), typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative"))
      throw new jQ(
        "The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api",
      );
    throw new jQ("Attempted to iterate over a response with no body");
  }
  let Q = new oPA(),
    Z = new L_(),
    G = D51(A.body);
  for await (let Y of ek9(G))
    for (let I of Z.decode(Y)) {
      let W = Q.decode(I);
      if (W) yield W;
    }
  for (let Y of Z.flush()) {
    let I = Q.decode(Y);
    if (I) yield I;
  }
}
async function* ek9(A) {
  let B = new Uint8Array();
  for await (let Q of A) {
    if (Q == null) continue;
    let Z = Q instanceof ArrayBuffer ? new Uint8Array(Q) : typeof Q === "string" ? C51(Q) : Q,
      G = new Uint8Array(B.length + Z.length);
    (G.set(B), G.set(Z, B.length), (B = G));
    let Y;
    while ((Y = sPA(B)) !== -1) (yield B.slice(0, Y), (B = B.slice(Y)));
  }
  if (B.length > 0) yield B;
}
class oPA {
  constructor() {
    ((this.event = null), (this.data = []), (this.chunks = []));
  }
  decode(A) {
    if (A.endsWith("\r")) A = A.substring(0, A.length - 1);
    if (!A) {
      if (!this.event && !this.data.length) return null;
      let G = {
        event: this.event,
        data: this.data.join(`
`),
        raw: this.chunks,
      };
      return ((this.event = null), (this.data = []), (this.chunks = []), G);
    }
    if ((this.chunks.push(A), A.startsWith(":"))) return null;
    let [B, Q, Z] = A_9(A, ":");
    if (Z.startsWith(" ")) Z = Z.substring(1);
    if (B === "event") this.event = Z;
    else if (B === "data") this.data.push(Z);
    return null;
  }
}
function A_9(A, B) {
  let Q = A.indexOf(B);
  if (Q !== -1) return [A.substring(0, Q), B, A.substring(Q + B.length)];
  return [A, "", ""];
}
async function nw1(A, B) {
  let { response: Q, requestLogID: Z, retryOfRequestLogID: G, startTime: Y } = B,
    I = await (async () => {
      if (B.options.stream) {
        if ((nW(A).debug("response", Q.status, Q.url, Q.headers, Q.body), B.options.__streamClass))
          return B.options.__streamClass.fromSSEResponse(Q, B.controller);
        return OV.fromSSEResponse(Q, B.controller);
      }
      if (Q.status === 204) return null;
      if (B.options.__binaryResponse) return Q;
      let J = Q.headers.get("content-type")?.split(";")[0]?.trim();
      if (J?.includes("application/json") || J?.endsWith("+json")) {
        let V = await Q.json();
        return P20(V, Q);
      }
      return await Q.text();
    })();
  return (
    nW(A).debug(
      `[${Z}] response parsed`,
      QP({ retryOfRequestLogID: G, url: Q.url, status: Q.status, body: I, durationMs: Date.now() - Y }),
    ),
    I
  );
}
function P20(A, B) {
  if (!A || typeof A !== "object" || Array.isArray(A)) return A;
  return Object.defineProperty(A, "_request_id", { value: B.headers.get("request-id"), enumerable: !1 });
}
var w51;
class Eu extends Promise {
  constructor(A, B, Q = nw1) {
    super((Z) => {
      Z(null);
    });
    ((this.responsePromise = B), (this.parseResponse = Q), w51.set(this, void 0), G9(this, w51, A, "f"));
  }
  _thenUnwrap(A) {
    return new Eu(vA(this, w51, "f"), this.responsePromise, async (B, Q) =>
      P20(A(await this.parseResponse(B, Q), Q), Q.response),
    );
  }
  asResponse() {
    return this.responsePromise.then((A) => A.response);
  }
  async withResponse() {
    let [A, B] = await Promise.all([this.parse(), this.asResponse()]);
    return { data: A, response: B, request_id: B.headers.get("request-id") };
  }
  parse() {
    if (!this.parsedPromise)
      this.parsedPromise = this.responsePromise.then((A) => this.parseResponse(vA(this, w51, "f"), A));
    return this.parsedPromise;
  }
  then(A, B) {
    return this.parse().then(A, B);
  }
  catch(A) {
    return this.parse().catch(A);
  }
  finally(A) {
    return this.parse().finally(A);
  }
}
w51 = new WeakMap();
var aw1;
class tPA {
  constructor(A, B, Q, Z) {
    (aw1.set(this, void 0), G9(this, aw1, A, "f"), (this.options = Z), (this.response = B), (this.body = Q));
  }
  hasNextPage() {
    if (!this.getPaginatedItems().length) return !1;
    return this.nextPageRequestOptions() != null;
  }
  async getNextPage() {
    let A = this.nextPageRequestOptions();
    if (!A) throw new jQ("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
    return await vA(this, aw1, "f").requestAPIList(this.constructor, A);
  }
  async *iterPages() {
    let A = this;
    yield A;
    while (A.hasNextPage()) ((A = await A.getNextPage()), yield A);
  }
  async *[((aw1 = new WeakMap()), Symbol.asyncIterator)]() {
    for await (let A of this.iterPages()) for (let B of A.getPaginatedItems()) yield B;
  }
}
class sw1 extends Eu {
  constructor(A, B, Q) {
    super(A, B, async (Z, G) => new Q(Z, G.response, await nw1(Z, G), G.options));
  }
  async *[Symbol.asyncIterator]() {
    let A = await this;
    for await (let B of A) yield B;
  }
}
class Cq extends tPA {
  constructor(A, B, Q, Z) {
    super(A, B, Q, Z);
    ((this.data = Q.data || []),
      (this.has_more = Q.has_more || !1),
      (this.first_id = Q.first_id || null),
      (this.last_id = Q.last_id || null));
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    if (this.has_more === !1) return !1;
    return super.hasNextPage();
  }
  nextPageRequestOptions() {
    if (this.options.query?.before_id) {
      let B = this.first_id;
      if (!B) return null;
      return { ...this.options, query: { ...M20(this.options.query), before_id: B } };
    }
    let A = this.last_id;
    if (!A) return null;
    return { ...this.options, query: { ...M20(this.options.query), after_id: A } };
  }
}
var S20 = () => {
  if (typeof File === "undefined") {
    let { process: A } = globalThis,
      B = typeof A?.versions?.node === "string" && parseInt(A.versions.node.split(".")) < 20;
    throw new Error(
      "`File` is not defined as a global, which is required for file uploads." +
        (B ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""),
    );
  }
};
function Nu(A, B, Q) {
  return (S20(), new File(A, B ?? "unknown_file", Q));
}
function q51(A) {
  return (
    (
      (typeof A === "object" &&
        A !== null &&
        (("name" in A && A.name && String(A.name)) ||
          ("url" in A && A.url && String(A.url)) ||
          ("filename" in A && A.filename && String(A.filename)) ||
          ("path" in A && A.path && String(A.path)))) ||
      ""
    )
      .split(/[\\/]/)
      .pop() || void 0
  );
}
var y20 = (A) => A != null && typeof A === "object" && typeof A[Symbol.asyncIterator] === "function";
var AjA = async (A, B) => {
    return { ...A, body: await Z_9(A.body, B) };
  },
  ePA = new WeakMap();
function Q_9(A) {
  let B = typeof A === "function" ? A : A.fetch,
    Q = ePA.get(B);
  if (Q) return Q;
  let Z = (async () => {
    try {
      let G = "Response" in B ? B.Response : (await B("data:,")).constructor,
        Y = new FormData();
      if (Y.toString() === (await new G(Y).text())) return !1;
      return !0;
    } catch {
      return !0;
    }
  })();
  return (ePA.set(B, Z), Z);
}
var Z_9 = async (A, B) => {
    if (!(await Q_9(B)))
      throw new TypeError(
        "The provided fetch function does not support file uploads with the current global FormData class.",
      );
    let Q = new FormData();
    return (await Promise.all(Object.entries(A || {}).map(([Z, G]) => j20(Q, Z, G))), Q);
  },
  G_9 = (A) => A instanceof Blob && "name" in A;
var j20 = async (A, B, Q) => {
  if (Q === void 0) return;
  if (Q == null)
    throw new TypeError(`Received null for "${B}"; to pass null in FormData, you must use the string 'null'`);
  if (typeof Q === "string" || typeof Q === "number" || typeof Q === "boolean") A.append(B, String(Q));
  else if (Q instanceof Response) {
    let Z = {},
      G = Q.headers.get("Content-Type");
    if (G) Z = { type: G };
    A.append(B, Nu([await Q.blob()], q51(Q), Z));
  } else if (y20(Q)) A.append(B, Nu([await new Response(lw1(Q)).blob()], q51(Q)));
  else if (G_9(Q)) A.append(B, Nu([Q], q51(Q), { type: Q.type }));
  else if (Array.isArray(Q)) await Promise.all(Q.map((Z) => j20(A, B + "[]", Z)));
  else if (typeof Q === "object") await Promise.all(Object.entries(Q).map(([Z, G]) => j20(A, `${B}[${Z}]`, G)));
  else
    throw new TypeError(
      `Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${Q} instead`,
    );
};
var BjA = (A) =>
    A != null &&
    typeof A === "object" &&
    typeof A.size === "number" &&
    typeof A.type === "string" &&
    typeof A.text === "function" &&
    typeof A.slice === "function" &&
    typeof A.arrayBuffer === "function",
  Y_9 = (A) =>
    A != null && typeof A === "object" && typeof A.name === "string" && typeof A.lastModified === "number" && BjA(A),
  I_9 = (A) => A != null && typeof A === "object" && typeof A.url === "string" && typeof A.blob === "function";
async function rw1(A, B, Q) {
  if ((S20(), (A = await A), B || (B = q51(A)), Y_9(A))) {
    if (A instanceof File && B == null && Q == null) return A;
    return Nu([await A.arrayBuffer()], B ?? A.name, { type: A.type, lastModified: A.lastModified, ...Q });
  }
  if (I_9(A)) {
    let G = await A.blob();
    return (B || (B = new URL(A.url).pathname.split(/[\\/]/).pop()), Nu(await k20(G), B, Q));
  }
  let Z = await k20(A);
  if (!Q?.type) {
    let G = Z.find((Y) => typeof Y === "object" && "type" in Y && Y.type);
    if (typeof G === "string") Q = { ...Q, type: G };
  }
  return Nu(Z, B, Q);
}
async function k20(A) {
  let B = [];
  if (typeof A === "string" || ArrayBuffer.isView(A) || A instanceof ArrayBuffer) B.push(A);
  else if (BjA(A)) B.push(A instanceof Blob ? A : await A.arrayBuffer());
  else if (y20(A)) for await (let Q of A) B.push(...(await k20(Q)));
  else {
    let Q = A?.constructor?.name;
    throw new Error(`Unexpected data type: ${typeof A}${Q ? `; constructor: ${Q}` : ""}${W_9(A)}`);
  }
  return B;
}
function W_9(A) {
  if (typeof A !== "object" || A === null) return "";
  return `; props: [${Object.getOwnPropertyNames(A)
    .map((Q) => `"${Q}"`)
    .join(", ")}]`;
}
class QW {
  constructor(A) {
    this._client = A;
  }
}
var QjA = Symbol.for("brand.privateNullableHeaders");
function* X_9(A) {
  if (!A) return;
  if (QjA in A) {
    let { values: Z, nulls: G } = A;
    yield* Z.entries();
    for (let Y of G) yield [Y, null];
    return;
  }
  let B = !1,
    Q;
  if (A instanceof Headers) Q = A.entries();
  else if (L20(A)) Q = A;
  else ((B = !0), (Q = Object.entries(A ?? {})));
  for (let Z of Q) {
    let G = Z[0];
    if (typeof G !== "string") throw new TypeError("expected header name to be a string");
    let Y = L20(Z[1]) ? Z[1] : [Z[1]],
      I = !1;
    for (let W of Y) {
      if (W === void 0) continue;
      if (B && !I) ((I = !0), yield [G, null]);
      yield [G, W];
    }
  }
}
var s5 = (A) => {
  let B = new Headers(),
    Q = new Set();
  for (let Z of A) {
    let G = new Set();
    for (let [Y, I] of X_9(Z)) {
      let W = Y.toLowerCase();
      if (!G.has(W)) (B.delete(Y), G.add(W));
      if (I === null) (B.delete(Y), Q.add(W));
      else (B.append(Y, I), Q.delete(W));
    }
  }
  return { [QjA]: !0, values: B, nulls: Q };
};
function GjA(A) {
  return A.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var ZjA = Object.freeze(Object.create(null)),
  F_9 = (A = GjA) =>
    function B(Q, ...Z) {
      if (Q.length === 1) return Q[0];
      let G = !1,
        Y = [],
        I = Q.reduce((F, V, K) => {
          if (/[?#]/.test(V)) G = !0;
          let H = Z[K],
            z = (G ? encodeURIComponent : A)("" + H);
          if (
            K !== Z.length &&
            (H == null ||
              (typeof H === "object" &&
                H.toString === Object.getPrototypeOf(Object.getPrototypeOf(H.hasOwnProperty ?? ZjA) ?? ZjA)?.toString))
          )
            ((z = H + ""),
              Y.push({
                start: F.length + V.length,
                length: z.length,
                error: `Value of type ${Object.prototype.toString.call(H).slice(8, -1)} is not a valid path parameter`,
              }));
          return F + V + (K === Z.length ? "" : z);
        }, ""),
        W = I.split(/[?#]/, 1)[0],
        J = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
        X;
      while ((X = J.exec(W)) !== null)
        Y.push({
          start: X.index,
          length: X[0].length,
          error: `Value "${X[0]}" can't be safely passed as a path parameter`,
        });
      if ((Y.sort((F, V) => F.start - V.start), Y.length > 0)) {
        let F = 0,
          V = Y.reduce((K, H) => {
            let z = " ".repeat(H.start - F),
              D = "^".repeat(H.length);
            return ((F = H.start + H.length), K + z + D);
          }, "");
        throw new jQ(`Path parameters result in path with invalid segments:
${Y.map((K) => K.error).join(`
`)}
${I}
${V}`);
      }
      return I;
    },
  UF = F_9(GjA);
class E51 extends QW {
  list(A = {}, B) {
    let { betas: Q, ...Z } = A ?? {};
    return this._client.getAPIList("/v1/files", Cq, {
      query: Z,
      ...B,
      headers: s5([{ "anthropic-beta": [...(Q ?? []), "files-api-2025-04-14"].toString() }, B?.headers]),
    });
  }
  delete(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.delete(UF`/v1/files/${A}`, {
      ...Q,
      headers: s5([{ "anthropic-beta": [...(Z ?? []), "files-api-2025-04-14"].toString() }, Q?.headers]),
    });
  }
  download(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.get(UF`/v1/files/${A}/content`, {
      ...Q,
      headers: s5([
        { "anthropic-beta": [...(Z ?? []), "files-api-2025-04-14"].toString(), Accept: "application/binary" },
        Q?.headers,
      ]),
      __binaryResponse: !0,
    });
  }
  retrieveMetadata(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.get(UF`/v1/files/${A}`, {
      ...Q,
      headers: s5([{ "anthropic-beta": [...(Z ?? []), "files-api-2025-04-14"].toString() }, Q?.headers]),
    });
  }
  upload(A, B) {
    let { betas: Q, ...Z } = A;
    return this._client.post(
      "/v1/files",
      AjA(
        {
          body: Z,
          ...B,
          headers: s5([{ "anthropic-beta": [...(Q ?? []), "files-api-2025-04-14"].toString() }, B?.headers]),
        },
        this._client,
      ),
    );
  }
}
class N51 extends QW {
  retrieve(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.get(UF`/v1/models/${A}?beta=true`, {
      ...Q,
      headers: s5([{ ...(Z?.toString() != null ? { "anthropic-beta": Z?.toString() } : void 0) }, Q?.headers]),
    });
  }
  list(A = {}, B) {
    let { betas: Q, ...Z } = A ?? {};
    return this._client.getAPIList("/v1/models?beta=true", Cq, {
      query: Z,
      ...B,
      headers: s5([{ ...(Q?.toString() != null ? { "anthropic-beta": Q?.toString() } : void 0) }, B?.headers]),
    });
  }
}
class Ns {
  constructor(A, B) {
    ((this.iterator = A), (this.controller = B));
  }
  async *decoder() {
    let A = new L_();
    for await (let B of this.iterator) for (let Q of A.decode(B)) yield JSON.parse(Q);
    for (let B of A.flush()) yield JSON.parse(B);
  }
  [Symbol.asyncIterator]() {
    return this.decoder();
  }
  static fromResponse(A, B) {
    if (!A.body) {
      if ((B.abort(), typeof globalThis.navigator !== "undefined" && globalThis.navigator.product === "ReactNative"))
        throw new jQ(
          "The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api",
        );
      throw new jQ("Attempted to iterate over a response with no body");
    }
    return new Ns(D51(A.body), B);
  }
}
class L51 extends QW {
  create(A, B) {
    let { betas: Q, ...Z } = A;
    return this._client.post("/v1/messages/batches?beta=true", {
      body: Z,
      ...B,
      headers: s5([{ "anthropic-beta": [...(Q ?? []), "message-batches-2024-09-24"].toString() }, B?.headers]),
    });
  }
  retrieve(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.get(UF`/v1/messages/batches/${A}?beta=true`, {
      ...Q,
      headers: s5([{ "anthropic-beta": [...(Z ?? []), "message-batches-2024-09-24"].toString() }, Q?.headers]),
    });
  }
  list(A = {}, B) {
    let { betas: Q, ...Z } = A ?? {};
    return this._client.getAPIList("/v1/messages/batches?beta=true", Cq, {
      query: Z,
      ...B,
      headers: s5([{ "anthropic-beta": [...(Q ?? []), "message-batches-2024-09-24"].toString() }, B?.headers]),
    });
  }
  delete(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.delete(UF`/v1/messages/batches/${A}?beta=true`, {
      ...Q,
      headers: s5([{ "anthropic-beta": [...(Z ?? []), "message-batches-2024-09-24"].toString() }, Q?.headers]),
    });
  }
  cancel(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.post(UF`/v1/messages/batches/${A}/cancel?beta=true`, {
      ...Q,
      headers: s5([{ "anthropic-beta": [...(Z ?? []), "message-batches-2024-09-24"].toString() }, Q?.headers]),
    });
  }
  async results(A, B = {}, Q) {
    let Z = await this.retrieve(A);
    if (!Z.results_url)
      throw new jQ(`No batch \`results_url\`; Has it finished processing? ${Z.processing_status} - ${Z.id}`);
    let { betas: G } = B ?? {};
    return this._client
      .get(Z.results_url, {
        ...Q,
        headers: s5([
          { "anthropic-beta": [...(G ?? []), "message-batches-2024-09-24"].toString(), Accept: "application/binary" },
          Q?.headers,
        ]),
        stream: !0,
        __binaryResponse: !0,
      })
      ._thenUnwrap((Y, I) => Ns.fromResponse(I.response, I.controller));
  }
}
var z_9 = (A) => {
    let B = 0,
      Q = [];
    while (B < A.length) {
      let Z = A[B];
      if (Z === "\\") {
        B++;
        continue;
      }
      if (Z === "{") {
        (Q.push({ type: "brace", value: "{" }), B++);
        continue;
      }
      if (Z === "}") {
        (Q.push({ type: "brace", value: "}" }), B++);
        continue;
      }
      if (Z === "[") {
        (Q.push({ type: "paren", value: "[" }), B++);
        continue;
      }
      if (Z === "]") {
        (Q.push({ type: "paren", value: "]" }), B++);
        continue;
      }
      if (Z === ":") {
        (Q.push({ type: "separator", value: ":" }), B++);
        continue;
      }
      if (Z === ",") {
        (Q.push({ type: "delimiter", value: "," }), B++);
        continue;
      }
      if (Z === '"') {
        let W = "",
          J = !1;
        Z = A[++B];
        while (Z !== '"') {
          if (B === A.length) {
            J = !0;
            break;
          }
          if (Z === "\\") {
            if ((B++, B === A.length)) {
              J = !0;
              break;
            }
            ((W += Z + A[B]), (Z = A[++B]));
          } else ((W += Z), (Z = A[++B]));
        }
        if (((Z = A[++B]), !J)) Q.push({ type: "string", value: W });
        continue;
      }
      if (Z && /\s/.test(Z)) {
        B++;
        continue;
      }
      let Y = /[0-9]/;
      if ((Z && Y.test(Z)) || Z === "-" || Z === ".") {
        let W = "";
        if (Z === "-") ((W += Z), (Z = A[++B]));
        while ((Z && Y.test(Z)) || Z === ".") ((W += Z), (Z = A[++B]));
        Q.push({ type: "number", value: W });
        continue;
      }
      let I = /[a-z]/i;
      if (Z && I.test(Z)) {
        let W = "";
        while (Z && I.test(Z)) {
          if (B === A.length) break;
          ((W += Z), (Z = A[++B]));
        }
        if (W == "true" || W == "false" || W === "null") Q.push({ type: "name", value: W });
        else {
          B++;
          continue;
        }
        continue;
      }
      B++;
    }
    return Q;
  },
  Ls = (A) => {
    if (A.length === 0) return A;
    let B = A[A.length - 1];
    switch (B.type) {
      case "separator":
        return ((A = A.slice(0, A.length - 1)), Ls(A));
        break;
      case "number":
        let Q = B.value[B.value.length - 1];
        if (Q === "." || Q === "-") return ((A = A.slice(0, A.length - 1)), Ls(A));
      case "string":
        let Z = A[A.length - 2];
        if (Z?.type === "delimiter") return ((A = A.slice(0, A.length - 1)), Ls(A));
        else if (Z?.type === "brace" && Z.value === "{") return ((A = A.slice(0, A.length - 1)), Ls(A));
        break;
      case "delimiter":
        return ((A = A.slice(0, A.length - 1)), Ls(A));
        break;
    }
    return A;
  },
  D_9 = (A) => {
    let B = [];
    if (
      (A.map((Q) => {
        if (Q.type === "brace")
          if (Q.value === "{") B.push("}");
          else B.splice(B.lastIndexOf("}"), 1);
        if (Q.type === "paren")
          if (Q.value === "[") B.push("]");
          else B.splice(B.lastIndexOf("]"), 1);
      }),
      B.length > 0)
    )
      B.reverse().map((Q) => {
        if (Q === "}") A.push({ type: "brace", value: "}" });
        else if (Q === "]") A.push({ type: "paren", value: "]" });
      });
    return A;
  },
  C_9 = (A) => {
    let B = "";
    return (
      A.map((Q) => {
        switch (Q.type) {
          case "string":
            B += '"' + Q.value + '"';
            break;
          default:
            B += Q.value;
            break;
        }
      }),
      B
    );
  },
  ow1 = (A) => JSON.parse(C_9(D_9(Ls(z_9(A)))));
var rC,
  M_,
  M51,
  tw1,
  O51,
  R51,
  ew1,
  T51,
  ZP,
  P51,
  Aq1,
  Bq1,
  Ms,
  Qq1,
  Zq1,
  _20,
  YjA,
  Gq1,
  x20,
  v20,
  b20,
  IjA,
  WjA = "__json_buf";
function JjA(A) {
  return A.type === "tool_use" || A.type === "server_tool_use" || A.type === "mcp_tool_use";
}
class j51 {
  constructor() {
    (rC.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      M_.set(this, void 0),
      (this.controller = new AbortController()),
      M51.set(this, void 0),
      tw1.set(this, () => {}),
      O51.set(this, () => {}),
      R51.set(this, void 0),
      ew1.set(this, () => {}),
      T51.set(this, () => {}),
      ZP.set(this, {}),
      P51.set(this, !1),
      Aq1.set(this, !1),
      Bq1.set(this, !1),
      Ms.set(this, !1),
      Qq1.set(this, void 0),
      Zq1.set(this, void 0),
      Gq1.set(this, (A) => {
        if ((G9(this, Aq1, !0, "f"), AP(A))) A = new BW();
        if (A instanceof BW) return (G9(this, Bq1, !0, "f"), this._emit("abort", A));
        if (A instanceof jQ) return this._emit("error", A);
        if (A instanceof Error) {
          let B = new jQ(A.message);
          return ((B.cause = A), this._emit("error", B));
        }
        return this._emit("error", new jQ(String(A)));
      }),
      G9(
        this,
        M51,
        new Promise((A, B) => {
          (G9(this, tw1, A, "f"), G9(this, O51, B, "f"));
        }),
        "f",
      ),
      G9(
        this,
        R51,
        new Promise((A, B) => {
          (G9(this, ew1, A, "f"), G9(this, T51, B, "f"));
        }),
        "f",
      ),
      vA(this, M51, "f").catch(() => {}),
      vA(this, R51, "f").catch(() => {}));
  }
  get response() {
    return vA(this, Qq1, "f");
  }
  get request_id() {
    return vA(this, Zq1, "f");
  }
  async withResponse() {
    let A = await vA(this, M51, "f");
    if (!A) throw new Error("Could not resolve a `Response` object");
    return { data: this, response: A, request_id: A.headers.get("request-id") };
  }
  static fromReadableStream(A) {
    let B = new j51();
    return (B._run(() => B._fromReadableStream(A)), B);
  }
  static createMessage(A, B, Q) {
    let Z = new j51();
    for (let G of B.messages) Z._addMessageParam(G);
    return (
      Z._run(() =>
        Z._createMessage(
          A,
          { ...B, stream: !0 },
          { ...Q, headers: { ...Q?.headers, "X-Stainless-Helper-Method": "stream" } },
        ),
      ),
      Z
    );
  }
  _run(A) {
    A().then(
      () => {
        (this._emitFinal(), this._emit("end"));
      },
      vA(this, Gq1, "f"),
    );
  }
  _addMessageParam(A) {
    this.messages.push(A);
  }
  _addMessage(A, B = !0) {
    if ((this.receivedMessages.push(A), B)) this._emit("message", A);
  }
  async _createMessage(A, B, Q) {
    let Z = Q?.signal,
      G;
    if (Z) {
      if (Z.aborted) this.controller.abort();
      ((G = this.controller.abort.bind(this.controller)), Z.addEventListener("abort", G));
    }
    try {
      vA(this, rC, "m", x20).call(this);
      let { response: Y, data: I } = await A.create(
        { ...B, stream: !0 },
        { ...Q, signal: this.controller.signal },
      ).withResponse();
      this._connected(Y);
      for await (let W of I) vA(this, rC, "m", v20).call(this, W);
      if (I.controller.signal?.aborted) throw new BW();
      vA(this, rC, "m", b20).call(this);
    } finally {
      if (Z && G) Z.removeEventListener("abort", G);
    }
  }
  _connected(A) {
    if (this.ended) return;
    (G9(this, Qq1, A, "f"),
      G9(this, Zq1, A?.headers.get("request-id"), "f"),
      vA(this, tw1, "f").call(this, A),
      this._emit("connect"));
  }
  get ended() {
    return vA(this, P51, "f");
  }
  get errored() {
    return vA(this, Aq1, "f");
  }
  get aborted() {
    return vA(this, Bq1, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(A, B) {
    return ((vA(this, ZP, "f")[A] || (vA(this, ZP, "f")[A] = [])).push({ listener: B }), this);
  }
  off(A, B) {
    let Q = vA(this, ZP, "f")[A];
    if (!Q) return this;
    let Z = Q.findIndex((G) => G.listener === B);
    if (Z >= 0) Q.splice(Z, 1);
    return this;
  }
  once(A, B) {
    return ((vA(this, ZP, "f")[A] || (vA(this, ZP, "f")[A] = [])).push({ listener: B, once: !0 }), this);
  }
  emitted(A) {
    return new Promise((B, Q) => {
      if ((G9(this, Ms, !0, "f"), A !== "error")) this.once("error", Q);
      this.once(A, B);
    });
  }
  async done() {
    (G9(this, Ms, !0, "f"), await vA(this, R51, "f"));
  }
  get currentMessage() {
    return vA(this, M_, "f");
  }
  async finalMessage() {
    return (await this.done(), vA(this, rC, "m", _20).call(this));
  }
  async finalText() {
    return (await this.done(), vA(this, rC, "m", YjA).call(this));
  }
  _emit(A, ...B) {
    if (vA(this, P51, "f")) return;
    if (A === "end") (G9(this, P51, !0, "f"), vA(this, ew1, "f").call(this));
    let Q = vA(this, ZP, "f")[A];
    if (Q) ((vA(this, ZP, "f")[A] = Q.filter((Z) => !Z.once)), Q.forEach(({ listener: Z }) => Z(...B)));
    if (A === "abort") {
      let Z = B[0];
      if (!vA(this, Ms, "f") && !Q?.length) Promise.reject(Z);
      (vA(this, O51, "f").call(this, Z), vA(this, T51, "f").call(this, Z), this._emit("end"));
      return;
    }
    if (A === "error") {
      let Z = B[0];
      if (!vA(this, Ms, "f") && !Q?.length) Promise.reject(Z);
      (vA(this, O51, "f").call(this, Z), vA(this, T51, "f").call(this, Z), this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1)) this._emit("finalMessage", vA(this, rC, "m", _20).call(this));
  }
  async _fromReadableStream(A, B) {
    let Q = B?.signal,
      Z;
    if (Q) {
      if (Q.aborted) this.controller.abort();
      ((Z = this.controller.abort.bind(this.controller)), Q.addEventListener("abort", Z));
    }
    try {
      (vA(this, rC, "m", x20).call(this), this._connected(null));
      let G = OV.fromReadableStream(A, this.controller);
      for await (let Y of G) vA(this, rC, "m", v20).call(this, Y);
      if (G.controller.signal?.aborted) throw new BW();
      vA(this, rC, "m", b20).call(this);
    } finally {
      if (Q && Z) Q.removeEventListener("abort", Z);
    }
  }
  [((M_ = new WeakMap()),
  (M51 = new WeakMap()),
  (tw1 = new WeakMap()),
  (O51 = new WeakMap()),
  (R51 = new WeakMap()),
  (ew1 = new WeakMap()),
  (T51 = new WeakMap()),
  (ZP = new WeakMap()),
  (P51 = new WeakMap()),
  (Aq1 = new WeakMap()),
  (Bq1 = new WeakMap()),
  (Ms = new WeakMap()),
  (Qq1 = new WeakMap()),
  (Zq1 = new WeakMap()),
  (Gq1 = new WeakMap()),
  (rC = new WeakSet()),
  (_20 = function A() {
    if (this.receivedMessages.length === 0)
      throw new jQ("stream ended without producing a Message with role=assistant");
    return this.receivedMessages.at(-1);
  }),
  (YjA = function A() {
    if (this.receivedMessages.length === 0)
      throw new jQ("stream ended without producing a Message with role=assistant");
    let B = this.receivedMessages
      .at(-1)
      .content.filter((Q) => Q.type === "text")
      .map((Q) => Q.text);
    if (B.length === 0) throw new jQ("stream ended without producing a content block with type=text");
    return B.join(" ");
  }),
  (x20 = function A() {
    if (this.ended) return;
    G9(this, M_, void 0, "f");
  }),
  (v20 = function A(B) {
    if (this.ended) return;
    let Q = vA(this, rC, "m", IjA).call(this, B);
    switch ((this._emit("streamEvent", B, Q), B.type)) {
      case "content_block_delta": {
        let Z = Q.content.at(-1);
        switch (B.delta.type) {
          case "text_delta": {
            if (Z.type === "text") this._emit("text", B.delta.text, Z.text || "");
            break;
          }
          case "citations_delta": {
            if (Z.type === "text") this._emit("citation", B.delta.citation, Z.citations ?? []);
            break;
          }
          case "input_json_delta": {
            if (JjA(Z) && Z.input) this._emit("inputJson", B.delta.partial_json, Z.input);
            break;
          }
          case "thinking_delta": {
            if (Z.type === "thinking") this._emit("thinking", B.delta.thinking, Z.thinking);
            break;
          }
          case "signature_delta": {
            if (Z.type === "thinking") this._emit("signature", Z.signature);
            break;
          }
          default:
            XjA(B.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(Q), this._addMessage(Q, !0));
        break;
      }
      case "content_block_stop": {
        this._emit("contentBlock", Q.content.at(-1));
        break;
      }
      case "message_start": {
        G9(this, M_, Q, "f");
        break;
      }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }),
  (b20 = function A() {
    if (this.ended) throw new jQ("stream has ended, this shouldn't happen");
    let B = vA(this, M_, "f");
    if (!B) throw new jQ("request ended without sending any chunks");
    return (G9(this, M_, void 0, "f"), B);
  }),
  (IjA = function A(B) {
    let Q = vA(this, M_, "f");
    if (B.type === "message_start") {
      if (Q) throw new jQ(`Unexpected event order, got ${B.type} before receiving "message_stop"`);
      return B.message;
    }
    if (!Q) throw new jQ(`Unexpected event order, got ${B.type} before "message_start"`);
    switch (B.type) {
      case "message_stop":
        return Q;
      case "message_delta":
        if (
          ((Q.container = B.delta.container),
          (Q.stop_reason = B.delta.stop_reason),
          (Q.stop_sequence = B.delta.stop_sequence),
          (Q.usage.output_tokens = B.usage.output_tokens),
          B.usage.input_tokens != null)
        )
          Q.usage.input_tokens = B.usage.input_tokens;
        if (B.usage.cache_creation_input_tokens != null)
          Q.usage.cache_creation_input_tokens = B.usage.cache_creation_input_tokens;
        if (B.usage.cache_read_input_tokens != null) Q.usage.cache_read_input_tokens = B.usage.cache_read_input_tokens;
        if (B.usage.server_tool_use != null) Q.usage.server_tool_use = B.usage.server_tool_use;
        return Q;
      case "content_block_start":
        return (Q.content.push(B.content_block), Q);
      case "content_block_delta": {
        let Z = Q.content.at(B.index);
        switch (B.delta.type) {
          case "text_delta": {
            if (Z?.type === "text") Q.content[B.index] = { ...Z, text: (Z.text || "") + B.delta.text };
            break;
          }
          case "citations_delta": {
            if (Z?.type === "text")
              Q.content[B.index] = { ...Z, citations: [...(Z.citations ?? []), B.delta.citation] };
            break;
          }
          case "input_json_delta": {
            if (Z && JjA(Z)) {
              let G = Z[WjA] || "";
              G += B.delta.partial_json;
              let Y = { ...Z };
              if ((Object.defineProperty(Y, WjA, { value: G, enumerable: !1, writable: !0 }), G))
                try {
                  Y.input = ow1(G);
                } catch (I) {
                  let W = new jQ(
                    `Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${I}. JSON: ${G}`,
                  );
                  vA(this, Gq1, "f").call(this, W);
                }
              Q.content[B.index] = Y;
            }
            break;
          }
          case "thinking_delta": {
            if (Z?.type === "thinking") Q.content[B.index] = { ...Z, thinking: Z.thinking + B.delta.thinking };
            break;
          }
          case "signature_delta": {
            if (Z?.type === "thinking") Q.content[B.index] = { ...Z, signature: B.delta.signature };
            break;
          }
          default:
            XjA(B.delta);
        }
        return Q;
      }
      case "content_block_stop":
        return Q;
    }
  }),
  Symbol.asyncIterator)]() {
    let A = [],
      B = [],
      Q = !1;
    return (
      this.on("streamEvent", (Z) => {
        let G = B.shift();
        if (G) G.resolve(Z);
        else A.push(Z);
      }),
      this.on("end", () => {
        Q = !0;
        for (let Z of B) Z.resolve(void 0);
        B.length = 0;
      }),
      this.on("abort", (Z) => {
        Q = !0;
        for (let G of B) G.reject(Z);
        B.length = 0;
      }),
      this.on("error", (Z) => {
        Q = !0;
        for (let G of B) G.reject(Z);
        B.length = 0;
      }),
      {
        next: async () => {
          if (!A.length) {
            if (Q) return { value: void 0, done: !0 };
            return new Promise((G, Y) => B.push({ resolve: G, reject: Y })).then((G) =>
              G ? { value: G, done: !1 } : { value: void 0, done: !0 },
            );
          }
          return { value: A.shift(), done: !1 };
        },
        return: async () => {
          return (this.abort(), { value: void 0, done: !0 });
        },
      }
    );
  }
  toReadableStream() {
    return new OV(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
}
function XjA(A) {}
var Yq1 = {
  "claude-opus-4-20250514": 8192,
  "claude-opus-4-0": 8192,
  "claude-4-opus-20250514": 8192,
  "anthropic.claude-opus-4-20250514-v1:0": 8192,
  "claude-opus-4@20250514": 8192,
  "claude-opus-4-1-20250805": 8192,
  "anthropic.claude-opus-4-1-20250805-v1:0": 8192,
  "claude-opus-4-1@20250805": 8192,
};
var FjA = {
  "claude-1.3": "November 6th, 2024",
  "claude-1.3-100k": "November 6th, 2024",
  "claude-instant-1.1": "November 6th, 2024",
  "claude-instant-1.1-100k": "November 6th, 2024",
  "claude-instant-1.2": "November 6th, 2024",
  "claude-3-sonnet-20240229": "July 21st, 2025",
  "claude-3-opus-20240229": "January 5th, 2026",
  "claude-2.1": "July 21st, 2025",
  "claude-2.0": "July 21st, 2025",
  "claude-3-5-sonnet-20241022": "October 22, 2025",
  "claude-3-5-sonnet-20240620": "October 22, 2025",
};
class Os extends QW {
  constructor() {
    super(...arguments);
    this.batches = new L51(this._client);
  }
  create(A, B) {
    let { betas: Q, ...Z } = A;
    if (Z.model in FjA)
      console.warn(`The model '${Z.model}' is deprecated and will reach end-of-life on ${FjA[Z.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    let G = this._client._options.timeout;
    if (!Z.stream && G == null) {
      let Y = Yq1[Z.model] ?? void 0;
      G = this._client.calculateNonstreamingTimeout(Z.max_tokens, Y);
    }
    return this._client.post("/v1/messages?beta=true", {
      body: Z,
      timeout: G ?? 600000,
      ...B,
      headers: s5([{ ...(Q?.toString() != null ? { "anthropic-beta": Q?.toString() } : void 0) }, B?.headers]),
      stream: A.stream ?? !1,
    });
  }
  stream(A, B) {
    return j51.createMessage(this, A, B);
  }
  countTokens(A, B) {
    let { betas: Q, ...Z } = A;
    return this._client.post("/v1/messages/count_tokens?beta=true", {
      body: Z,
      ...B,
      headers: s5([{ "anthropic-beta": [...(Q ?? []), "token-counting-2024-11-01"].toString() }, B?.headers]),
    });
  }
}
Os.Batches = L51;
class iz extends QW {
  constructor() {
    super(...arguments);
    ((this.models = new N51(this._client)),
      (this.messages = new Os(this._client)),
      (this.files = new E51(this._client)));
  }
}
iz.Models = N51;
iz.Messages = Os;
iz.Files = E51;
class O_ extends QW {
  create(A, B) {
    let { betas: Q, ...Z } = A;
    return this._client.post("/v1/complete", {
      body: Z,
      timeout: this._client._options.timeout ?? 600000,
      ...B,
      headers: s5([{ ...(Q?.toString() != null ? { "anthropic-beta": Q?.toString() } : void 0) }, B?.headers]),
      stream: A.stream ?? !1,
    });
  }
}
var oC,
  R_,
  S51,
  Iq1,
  y51,
  k51,
  Wq1,
  _51,
  GP,
  x51,
  Jq1,
  Xq1,
  Rs,
  Fq1,
  Vq1,
  f20,
  VjA,
  h20,
  g20,
  u20,
  m20,
  KjA,
  HjA = "__json_buf";
function zjA(A) {
  return A.type === "tool_use" || A.type === "server_tool_use";
}
class v51 {
  constructor() {
    (oC.add(this),
      (this.messages = []),
      (this.receivedMessages = []),
      R_.set(this, void 0),
      (this.controller = new AbortController()),
      S51.set(this, void 0),
      Iq1.set(this, () => {}),
      y51.set(this, () => {}),
      k51.set(this, void 0),
      Wq1.set(this, () => {}),
      _51.set(this, () => {}),
      GP.set(this, {}),
      x51.set(this, !1),
      Jq1.set(this, !1),
      Xq1.set(this, !1),
      Rs.set(this, !1),
      Fq1.set(this, void 0),
      Vq1.set(this, void 0),
      h20.set(this, (A) => {
        if ((G9(this, Jq1, !0, "f"), AP(A))) A = new BW();
        if (A instanceof BW) return (G9(this, Xq1, !0, "f"), this._emit("abort", A));
        if (A instanceof jQ) return this._emit("error", A);
        if (A instanceof Error) {
          let B = new jQ(A.message);
          return ((B.cause = A), this._emit("error", B));
        }
        return this._emit("error", new jQ(String(A)));
      }),
      G9(
        this,
        S51,
        new Promise((A, B) => {
          (G9(this, Iq1, A, "f"), G9(this, y51, B, "f"));
        }),
        "f",
      ),
      G9(
        this,
        k51,
        new Promise((A, B) => {
          (G9(this, Wq1, A, "f"), G9(this, _51, B, "f"));
        }),
        "f",
      ),
      vA(this, S51, "f").catch(() => {}),
      vA(this, k51, "f").catch(() => {}));
  }
  get response() {
    return vA(this, Fq1, "f");
  }
  get request_id() {
    return vA(this, Vq1, "f");
  }
  async withResponse() {
    let A = await vA(this, S51, "f");
    if (!A) throw new Error("Could not resolve a `Response` object");
    return { data: this, response: A, request_id: A.headers.get("request-id") };
  }
  static fromReadableStream(A) {
    let B = new v51();
    return (B._run(() => B._fromReadableStream(A)), B);
  }
  static createMessage(A, B, Q) {
    let Z = new v51();
    for (let G of B.messages) Z._addMessageParam(G);
    return (
      Z._run(() =>
        Z._createMessage(
          A,
          { ...B, stream: !0 },
          { ...Q, headers: { ...Q?.headers, "X-Stainless-Helper-Method": "stream" } },
        ),
      ),
      Z
    );
  }
  _run(A) {
    A().then(
      () => {
        (this._emitFinal(), this._emit("end"));
      },
      vA(this, h20, "f"),
    );
  }
  _addMessageParam(A) {
    this.messages.push(A);
  }
  _addMessage(A, B = !0) {
    if ((this.receivedMessages.push(A), B)) this._emit("message", A);
  }
  async _createMessage(A, B, Q) {
    let Z = Q?.signal,
      G;
    if (Z) {
      if (Z.aborted) this.controller.abort();
      ((G = this.controller.abort.bind(this.controller)), Z.addEventListener("abort", G));
    }
    try {
      vA(this, oC, "m", g20).call(this);
      let { response: Y, data: I } = await A.create(
        { ...B, stream: !0 },
        { ...Q, signal: this.controller.signal },
      ).withResponse();
      this._connected(Y);
      for await (let W of I) vA(this, oC, "m", u20).call(this, W);
      if (I.controller.signal?.aborted) throw new BW();
      vA(this, oC, "m", m20).call(this);
    } finally {
      if (Z && G) Z.removeEventListener("abort", G);
    }
  }
  _connected(A) {
    if (this.ended) return;
    (G9(this, Fq1, A, "f"),
      G9(this, Vq1, A?.headers.get("request-id"), "f"),
      vA(this, Iq1, "f").call(this, A),
      this._emit("connect"));
  }
  get ended() {
    return vA(this, x51, "f");
  }
  get errored() {
    return vA(this, Jq1, "f");
  }
  get aborted() {
    return vA(this, Xq1, "f");
  }
  abort() {
    this.controller.abort();
  }
  on(A, B) {
    return ((vA(this, GP, "f")[A] || (vA(this, GP, "f")[A] = [])).push({ listener: B }), this);
  }
  off(A, B) {
    let Q = vA(this, GP, "f")[A];
    if (!Q) return this;
    let Z = Q.findIndex((G) => G.listener === B);
    if (Z >= 0) Q.splice(Z, 1);
    return this;
  }
  once(A, B) {
    return ((vA(this, GP, "f")[A] || (vA(this, GP, "f")[A] = [])).push({ listener: B, once: !0 }), this);
  }
  emitted(A) {
    return new Promise((B, Q) => {
      if ((G9(this, Rs, !0, "f"), A !== "error")) this.once("error", Q);
      this.once(A, B);
    });
  }
  async done() {
    (G9(this, Rs, !0, "f"), await vA(this, k51, "f"));
  }
  get currentMessage() {
    return vA(this, R_, "f");
  }
  async finalMessage() {
    return (await this.done(), vA(this, oC, "m", f20).call(this));
  }
  async finalText() {
    return (await this.done(), vA(this, oC, "m", VjA).call(this));
  }
  _emit(A, ...B) {
    if (vA(this, x51, "f")) return;
    if (A === "end") (G9(this, x51, !0, "f"), vA(this, Wq1, "f").call(this));
    let Q = vA(this, GP, "f")[A];
    if (Q) ((vA(this, GP, "f")[A] = Q.filter((Z) => !Z.once)), Q.forEach(({ listener: Z }) => Z(...B)));
    if (A === "abort") {
      let Z = B[0];
      if (!vA(this, Rs, "f") && !Q?.length) Promise.reject(Z);
      (vA(this, y51, "f").call(this, Z), vA(this, _51, "f").call(this, Z), this._emit("end"));
      return;
    }
    if (A === "error") {
      let Z = B[0];
      if (!vA(this, Rs, "f") && !Q?.length) Promise.reject(Z);
      (vA(this, y51, "f").call(this, Z), vA(this, _51, "f").call(this, Z), this._emit("end"));
    }
  }
  _emitFinal() {
    if (this.receivedMessages.at(-1)) this._emit("finalMessage", vA(this, oC, "m", f20).call(this));
  }
  async _fromReadableStream(A, B) {
    let Q = B?.signal,
      Z;
    if (Q) {
      if (Q.aborted) this.controller.abort();
      ((Z = this.controller.abort.bind(this.controller)), Q.addEventListener("abort", Z));
    }
    try {
      (vA(this, oC, "m", g20).call(this), this._connected(null));
      let G = OV.fromReadableStream(A, this.controller);
      for await (let Y of G) vA(this, oC, "m", u20).call(this, Y);
      if (G.controller.signal?.aborted) throw new BW();
      vA(this, oC, "m", m20).call(this);
    } finally {
      if (Q && Z) Q.removeEventListener("abort", Z);
    }
  }
  [((R_ = new WeakMap()),
  (S51 = new WeakMap()),
  (Iq1 = new WeakMap()),
  (y51 = new WeakMap()),
  (k51 = new WeakMap()),
  (Wq1 = new WeakMap()),
  (_51 = new WeakMap()),
  (GP = new WeakMap()),
  (x51 = new WeakMap()),
  (Jq1 = new WeakMap()),
  (Xq1 = new WeakMap()),
  (Rs = new WeakMap()),
  (Fq1 = new WeakMap()),
  (Vq1 = new WeakMap()),
  (h20 = new WeakMap()),
  (oC = new WeakSet()),
  (f20 = function A() {
    if (this.receivedMessages.length === 0)
      throw new jQ("stream ended without producing a Message with role=assistant");
    return this.receivedMessages.at(-1);
  }),
  (VjA = function A() {
    if (this.receivedMessages.length === 0)
      throw new jQ("stream ended without producing a Message with role=assistant");
    let B = this.receivedMessages
      .at(-1)
      .content.filter((Q) => Q.type === "text")
      .map((Q) => Q.text);
    if (B.length === 0) throw new jQ("stream ended without producing a content block with type=text");
    return B.join(" ");
  }),
  (g20 = function A() {
    if (this.ended) return;
    G9(this, R_, void 0, "f");
  }),
  (u20 = function A(B) {
    if (this.ended) return;
    let Q = vA(this, oC, "m", KjA).call(this, B);
    switch ((this._emit("streamEvent", B, Q), B.type)) {
      case "content_block_delta": {
        let Z = Q.content.at(-1);
        switch (B.delta.type) {
          case "text_delta": {
            if (Z.type === "text") this._emit("text", B.delta.text, Z.text || "");
            break;
          }
          case "citations_delta": {
            if (Z.type === "text") this._emit("citation", B.delta.citation, Z.citations ?? []);
            break;
          }
          case "input_json_delta": {
            if (zjA(Z) && Z.input) this._emit("inputJson", B.delta.partial_json, Z.input);
            break;
          }
          case "thinking_delta": {
            if (Z.type === "thinking") this._emit("thinking", B.delta.thinking, Z.thinking);
            break;
          }
          case "signature_delta": {
            if (Z.type === "thinking") this._emit("signature", Z.signature);
            break;
          }
          default:
            DjA(B.delta);
        }
        break;
      }
      case "message_stop": {
        (this._addMessageParam(Q), this._addMessage(Q, !0));
        break;
      }
      case "content_block_stop": {
        this._emit("contentBlock", Q.content.at(-1));
        break;
      }
      case "message_start": {
        G9(this, R_, Q, "f");
        break;
      }
      case "content_block_start":
      case "message_delta":
        break;
    }
  }),
  (m20 = function A() {
    if (this.ended) throw new jQ("stream has ended, this shouldn't happen");
    let B = vA(this, R_, "f");
    if (!B) throw new jQ("request ended without sending any chunks");
    return (G9(this, R_, void 0, "f"), B);
  }),
  (KjA = function A(B) {
    let Q = vA(this, R_, "f");
    if (B.type === "message_start") {
      if (Q) throw new jQ(`Unexpected event order, got ${B.type} before receiving "message_stop"`);
      return B.message;
    }
    if (!Q) throw new jQ(`Unexpected event order, got ${B.type} before "message_start"`);
    switch (B.type) {
      case "message_stop":
        return Q;
      case "message_delta":
        if (
          ((Q.stop_reason = B.delta.stop_reason),
          (Q.stop_sequence = B.delta.stop_sequence),
          (Q.usage.output_tokens = B.usage.output_tokens),
          B.usage.input_tokens != null)
        )
          Q.usage.input_tokens = B.usage.input_tokens;
        if (B.usage.cache_creation_input_tokens != null)
          Q.usage.cache_creation_input_tokens = B.usage.cache_creation_input_tokens;
        if (B.usage.cache_read_input_tokens != null) Q.usage.cache_read_input_tokens = B.usage.cache_read_input_tokens;
        if (B.usage.server_tool_use != null) Q.usage.server_tool_use = B.usage.server_tool_use;
        return Q;
      case "content_block_start":
        return (Q.content.push({ ...B.content_block }), Q);
      case "content_block_delta": {
        let Z = Q.content.at(B.index);
        switch (B.delta.type) {
          case "text_delta": {
            if (Z?.type === "text") Q.content[B.index] = { ...Z, text: (Z.text || "") + B.delta.text };
            break;
          }
          case "citations_delta": {
            if (Z?.type === "text")
              Q.content[B.index] = { ...Z, citations: [...(Z.citations ?? []), B.delta.citation] };
            break;
          }
          case "input_json_delta": {
            if (Z && zjA(Z)) {
              let G = Z[HjA] || "";
              G += B.delta.partial_json;
              let Y = { ...Z };
              if ((Object.defineProperty(Y, HjA, { value: G, enumerable: !1, writable: !0 }), G)) Y.input = ow1(G);
              Q.content[B.index] = Y;
            }
            break;
          }
          case "thinking_delta": {
            if (Z?.type === "thinking") Q.content[B.index] = { ...Z, thinking: Z.thinking + B.delta.thinking };
            break;
          }
          case "signature_delta": {
            if (Z?.type === "thinking") Q.content[B.index] = { ...Z, signature: B.delta.signature };
            break;
          }
          default:
            DjA(B.delta);
        }
        return Q;
      }
      case "content_block_stop":
        return Q;
    }
  }),
  Symbol.asyncIterator)]() {
    let A = [],
      B = [],
      Q = !1;
    return (
      this.on("streamEvent", (Z) => {
        let G = B.shift();
        if (G) G.resolve(Z);
        else A.push(Z);
      }),
      this.on("end", () => {
        Q = !0;
        for (let Z of B) Z.resolve(void 0);
        B.length = 0;
      }),
      this.on("abort", (Z) => {
        Q = !0;
        for (let G of B) G.reject(Z);
        B.length = 0;
      }),
      this.on("error", (Z) => {
        Q = !0;
        for (let G of B) G.reject(Z);
        B.length = 0;
      }),
      {
        next: async () => {
          if (!A.length) {
            if (Q) return { value: void 0, done: !0 };
            return new Promise((G, Y) => B.push({ resolve: G, reject: Y })).then((G) =>
              G ? { value: G, done: !1 } : { value: void 0, done: !0 },
            );
          }
          return { value: A.shift(), done: !1 };
        },
        return: async () => {
          return (this.abort(), { value: void 0, done: !0 });
        },
      }
    );
  }
  toReadableStream() {
    return new OV(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream();
  }
}
function DjA(A) {}
class b51 extends QW {
  create(A, B) {
    return this._client.post("/v1/messages/batches", { body: A, ...B });
  }
  retrieve(A, B) {
    return this._client.get(UF`/v1/messages/batches/${A}`, B);
  }
  list(A = {}, B) {
    return this._client.getAPIList("/v1/messages/batches", Cq, { query: A, ...B });
  }
  delete(A, B) {
    return this._client.delete(UF`/v1/messages/batches/${A}`, B);
  }
  cancel(A, B) {
    return this._client.post(UF`/v1/messages/batches/${A}/cancel`, B);
  }
  async results(A, B) {
    let Q = await this.retrieve(A);
    if (!Q.results_url)
      throw new jQ(`No batch \`results_url\`; Has it finished processing? ${Q.processing_status} - ${Q.id}`);
    return this._client
      .get(Q.results_url, {
        ...B,
        headers: s5([{ Accept: "application/binary" }, B?.headers]),
        stream: !0,
        __binaryResponse: !0,
      })
      ._thenUnwrap((Z, G) => Ns.fromResponse(G.response, G.controller));
  }
}
class Uq extends QW {
  constructor() {
    super(...arguments);
    this.batches = new b51(this._client);
  }
  create(A, B) {
    if (A.model in CjA)
      console.warn(`The model '${A.model}' is deprecated and will reach end-of-life on ${CjA[A.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
    let Q = this._client._options.timeout;
    if (!A.stream && Q == null) {
      let Z = Yq1[A.model] ?? void 0;
      Q = this._client.calculateNonstreamingTimeout(A.max_tokens, Z);
    }
    return this._client.post("/v1/messages", { body: A, timeout: Q ?? 600000, ...B, stream: A.stream ?? !1 });
  }
  stream(A, B) {
    return v51.createMessage(this, A, B);
  }
  countTokens(A, B) {
    return this._client.post("/v1/messages/count_tokens", { body: A, ...B });
  }
}
var CjA = {
  "claude-1.3": "November 6th, 2024",
  "claude-1.3-100k": "November 6th, 2024",
  "claude-instant-1.1": "November 6th, 2024",
  "claude-instant-1.1-100k": "November 6th, 2024",
  "claude-instant-1.2": "November 6th, 2024",
  "claude-3-sonnet-20240229": "July 21st, 2025",
  "claude-3-opus-20240229": "January 5th, 2026",
  "claude-2.1": "July 21st, 2025",
  "claude-2.0": "July 21st, 2025",
  "claude-3-5-sonnet-20241022": "October 22, 2025",
  "claude-3-5-sonnet-20240620": "October 22, 2025",
};
Uq.Batches = b51;
class Ts extends QW {
  retrieve(A, B = {}, Q) {
    let { betas: Z } = B ?? {};
    return this._client.get(UF`/v1/models/${A}`, {
      ...Q,
      headers: s5([{ ...(Z?.toString() != null ? { "anthropic-beta": Z?.toString() } : void 0) }, Q?.headers]),
    });
  }
  list(A = {}, B) {
    let { betas: Q, ...Z } = A ?? {};
    return this._client.getAPIList("/v1/models", Cq, {
      query: Z,
      ...B,
      headers: s5([{ ...(Q?.toString() != null ? { "anthropic-beta": Q?.toString() } : void 0) }, B?.headers]),
    });
  }
}
var f51 = (A) => {
  if (typeof globalThis.process !== "undefined") return globalThis.process.env?.[A]?.trim() ?? void 0;
  if (typeof globalThis.Deno !== "undefined") return globalThis.Deno.env?.get?.(A)?.trim();
  return;
};
var c20, l20, Kq1, UjA;
class C7 {
  constructor({
    baseURL: A = f51("ANTHROPIC_BASE_URL"),
    apiKey: B = f51("ANTHROPIC_API_KEY") ?? null,
    authToken: Q = f51("ANTHROPIC_AUTH_TOKEN") ?? null,
    ...Z
  } = {}) {
    (c20.add(this), Kq1.set(this, void 0));
    let G = { apiKey: B, authToken: Q, ...Z, baseURL: A || "https://api.anthropic.com" };
    if (!G.dangerouslyAllowBrowser && mPA())
      throw new jQ(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
    ((this.baseURL = G.baseURL),
      (this.timeout = G.timeout ?? l20.DEFAULT_TIMEOUT),
      (this.logger = G.logger ?? console));
    let Y = "warn";
    ((this.logLevel = Y),
      (this.logLevel =
        T20(G.logLevel, "ClientOptions.logLevel", this) ??
        T20(f51("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ??
        Y),
      (this.fetchOptions = G.fetchOptions),
      (this.maxRetries = G.maxRetries ?? 2),
      (this.fetch = G.fetch ?? cPA()),
      G9(this, Kq1, pPA, "f"),
      (this._options = G),
      (this.apiKey = B),
      (this.authToken = Q));
  }
  withOptions(A) {
    return new this.constructor({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      authToken: this.authToken,
      ...A,
    });
  }
  defaultQuery() {
    return this._options.defaultQuery;
  }
  validateHeaders({ values: A, nulls: B }) {
    if (this.apiKey && A.get("x-api-key")) return;
    if (B.has("x-api-key")) return;
    if (this.authToken && A.get("authorization")) return;
    if (B.has("authorization")) return;
    throw new Error(
      'Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted',
    );
  }
  async authHeaders(A) {
    return s5([await this.apiKeyAuth(A), await this.bearerAuth(A)]);
  }
  async apiKeyAuth(A) {
    if (this.apiKey == null) return;
    return s5([{ "X-Api-Key": this.apiKey }]);
  }
  async bearerAuth(A) {
    if (this.authToken == null) return;
    return s5([{ Authorization: `Bearer ${this.authToken}` }]);
  }
  stringifyQuery(A) {
    return Object.entries(A)
      .filter(([B, Q]) => typeof Q !== "undefined")
      .map(([B, Q]) => {
        if (typeof Q === "string" || typeof Q === "number" || typeof Q === "boolean")
          return `${encodeURIComponent(B)}=${encodeURIComponent(Q)}`;
        if (Q === null) return `${encodeURIComponent(B)}=`;
        throw new jQ(
          `Cannot stringify type ${typeof Q}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join("&");
  }
  getUserAgent() {
    return `${this.constructor.name}/JS ${INK_VERSION}`;
  }
  defaultIdempotencyKey() {
    return `stainless-node-retry-${E20()}`;
  }
  makeStatusError(A, B, Q, Z) {
    return n9.generate(A, B, Q, Z);
  }
  buildURL(A, B, Q) {
    let Z = (!vA(this, c20, "m", UjA).call(this) && Q) || this.baseURL,
      G = _PA(A) ? new URL(A) : new URL(Z + (Z.endsWith("/") && A.startsWith("/") ? A.slice(1) : A)),
      Y = this.defaultQuery();
    if (!xPA(Y)) B = { ...Y, ...B };
    if (typeof B === "object" && B && !Array.isArray(B)) G.search = this.stringifyQuery(B);
    return G.toString();
  }
  _calculateNonstreamingTimeout(A) {
    if ((3600 * A) / 128000 > 600)
      throw new jQ(
        "Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details",
      );
    return 600000;
  }
  async prepareOptions(A) {}
  async prepareRequest(A, { url: B, options: Q }) {}
  get(A, B) {
    return this.methodRequest("get", A, B);
  }
  post(A, B) {
    return this.methodRequest("post", A, B);
  }
  patch(A, B) {
    return this.methodRequest("patch", A, B);
  }
  put(A, B) {
    return this.methodRequest("put", A, B);
  }
  delete(A, B) {
    return this.methodRequest("delete", A, B);
  }
  methodRequest(A, B, Q) {
    return this.request(
      Promise.resolve(Q).then((Z) => {
        return { method: A, path: B, ...Z };
      }),
    );
  }
  request(A, B = null) {
    return new Eu(this, this.makeRequest(A, B, void 0));
  }
  async makeRequest(A, B, Q) {
    let Z = await A,
      G = Z.maxRetries ?? this.maxRetries;
    if (B == null) B = G;
    await this.prepareOptions(Z);
    let { req: Y, url: I, timeout: W } = await this.buildRequest(Z, { retryCount: G - B });
    await this.prepareRequest(Y, { url: I, options: Z });
    let J = "log_" + ((Math.random() * 16777216) | 0).toString(16).padStart(6, "0"),
      X = Q === void 0 ? "" : `, retryOf: ${Q}`,
      F = Date.now();
    if (
      (nW(this).debug(
        `[${J}] sending request`,
        QP({ retryOfRequestLogID: Q, method: Z.method, url: I, options: Z, headers: Y.headers }),
      ),
      Z.signal?.aborted)
    )
      throw new BW();
    let V = new AbortController(),
      K = await this.fetchWithTimeout(I, Y, W, V).catch(J51),
      H = Date.now();
    if (K instanceof Error) {
      let C = `retrying, ${B} attempts remaining`;
      if (Z.signal?.aborted) throw new BW();
      let w = AP(K) || /timed? ?out/i.test(String(K) + ("cause" in K ? String(K.cause) : ""));
      if (B)
        return (
          nW(this).info(`[${J}] connection ${w ? "timed out" : "failed"} - ${C}`),
          nW(this).debug(
            `[${J}] connection ${w ? "timed out" : "failed"} (${C})`,
            QP({ retryOfRequestLogID: Q, url: I, durationMs: H - F, message: K.message }),
          ),
          this.retryRequest(Z, B, Q ?? J)
        );
      if (
        (nW(this).info(`[${J}] connection ${w ? "timed out" : "failed"} - error; no more retries left`),
        nW(this).debug(
          `[${J}] connection ${w ? "timed out" : "failed"} (error; no more retries left)`,
          QP({ retryOfRequestLogID: Q, url: I, durationMs: H - F, message: K.message }),
        ),
        w)
      )
        throw new BP();
      throw new cz({ cause: K });
    }
    let z = [...K.headers.entries()]
        .filter(([C]) => C === "request-id")
        .map(([C, w]) => ", " + C + ": " + JSON.stringify(w))
        .join(""),
      D = `[${J}${X}${z}] ${Y.method} ${I} ${K.ok ? "succeeded" : "failed"} with status ${K.status} in ${H - F}ms`;
    if (!K.ok) {
      let C = await this.shouldRetry(K);
      if (B && C) {
        let P = `retrying, ${B} attempts remaining`;
        return (
          await lPA(K.body),
          nW(this).info(`${D} - ${P}`),
          nW(this).debug(
            `[${J}] response error (${P})`,
            QP({ retryOfRequestLogID: Q, url: K.url, status: K.status, headers: K.headers, durationMs: H - F }),
          ),
          this.retryRequest(Z, B, Q ?? J, K.headers)
        );
      }
      let w = C ? "error; no more retries left" : "error; not retryable";
      nW(this).info(`${D} - ${w}`);
      let E = await K.text().catch((P) => J51(P).message),
        L = cw1(E),
        O = L ? void 0 : E;
      throw (
        nW(this).debug(
          `[${J}] response error (${w})`,
          QP({
            retryOfRequestLogID: Q,
            url: K.url,
            status: K.status,
            headers: K.headers,
            message: O,
            durationMs: Date.now() - F,
          }),
        ),
        this.makeStatusError(K.status, L, O, K.headers)
      );
    }
    return (
      nW(this).info(D),
      nW(this).debug(
        `[${J}] response start`,
        QP({ retryOfRequestLogID: Q, url: K.url, status: K.status, headers: K.headers, durationMs: H - F }),
      ),
      { response: K, options: Z, controller: V, requestLogID: J, retryOfRequestLogID: Q, startTime: F }
    );
  }
  getAPIList(A, B, Q) {
    return this.requestAPIList(B, { method: "get", path: A, ...Q });
  }
  requestAPIList(A, B) {
    let Q = this.makeRequest(B, null, void 0);
    return new sw1(this, Q, A);
  }
  async fetchWithTimeout(A, B, Q, Z) {
    let { signal: G, method: Y, ...I } = B || {};
    if (G) G.addEventListener("abort", () => Z.abort());
    let W = setTimeout(() => Z.abort(), Q),
      J =
        (globalThis.ReadableStream && I.body instanceof globalThis.ReadableStream) ||
        (typeof I.body === "object" && I.body !== null && Symbol.asyncIterator in I.body),
      X = { signal: Z.signal, ...(J ? { duplex: "half" } : {}), method: "GET", ...I };
    if (Y) X.method = Y.toUpperCase();
    try {
      return await this.fetch.call(void 0, A, X);
    } finally {
      clearTimeout(W);
    }
  }
  async shouldRetry(A) {
    let B = A.headers.get("x-should-retry");
    if (B === "true") return !0;
    if (B === "false") return !1;
    if (A.status === 408) return !0;
    if (A.status === 409) return !0;
    if (A.status === 429) return !0;
    if (A.status >= 500) return !0;
    return !1;
  }
  async retryRequest(A, B, Q, Z) {
    let G,
      Y = Z?.get("retry-after-ms");
    if (Y) {
      let W = parseFloat(Y);
      if (!Number.isNaN(W)) G = W;
    }
    let I = Z?.get("retry-after");
    if (I && !G) {
      let W = parseFloat(I);
      if (!Number.isNaN(W)) G = W * 1000;
      else G = Date.parse(I) - Date.now();
    }
    if (!(G && 0 <= G && G < 60000)) {
      let W = A.maxRetries ?? this.maxRetries;
      G = this.calculateDefaultRetryTimeoutMillis(B, W);
    }
    return (await fPA(G), this.makeRequest(A, B - 1, Q));
  }
  calculateDefaultRetryTimeoutMillis(A, B) {
    let G = B - A,
      Y = Math.min(0.5 * Math.pow(2, G), 8),
      I = 1 - Math.random() * 0.25;
    return Y * I * 1000;
  }
  calculateNonstreamingTimeout(A, B) {
    if ((3600000 * A) / 128000 > 600000 || (B != null && A > B))
      throw new jQ(
        "Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details",
      );
    return 600000;
  }
  async buildRequest(A, { retryCount: B = 0 } = {}) {
    let Q = { ...A },
      { method: Z, path: G, query: Y, defaultBaseURL: I } = Q,
      W = this.buildURL(G, Y, I);
    if ("timeout" in Q) bPA("timeout", Q.timeout);
    Q.timeout = Q.timeout ?? this.timeout;
    let { bodyHeaders: J, body: X } = this.buildBody({ options: Q }),
      F = await this.buildHeaders({ options: A, method: Z, bodyHeaders: J, retryCount: B });
    return {
      req: {
        method: Z,
        headers: F,
        ...(Q.signal && { signal: Q.signal }),
        ...(globalThis.ReadableStream && X instanceof globalThis.ReadableStream && { duplex: "half" }),
        ...(X && { body: X }),
        ...(this.fetchOptions ?? {}),
        ...(Q.fetchOptions ?? {}),
      },
      url: W,
      timeout: Q.timeout,
    };
  }
  async buildHeaders({ options: A, method: B, bodyHeaders: Q, retryCount: Z }) {
    let G = {};
    if (this.idempotencyHeader && B !== "get") {
      if (!A.idempotencyKey) A.idempotencyKey = this.defaultIdempotencyKey();
      G[this.idempotencyHeader] = A.idempotencyKey;
    }
    let Y = s5([
      G,
      {
        Accept: "application/json",
        "User-Agent": this.getUserAgent(),
        "X-Stainless-Retry-Count": String(Z),
        ...(A.timeout ? { "X-Stainless-Timeout": String(Math.trunc(A.timeout / 1000)) } : {}),
        ...dPA(),
        ...(this._options.dangerouslyAllowBrowser ? { "anthropic-dangerous-direct-browser-access": "true" } : void 0),
        "anthropic-version": "2023-06-01",
      },
      await this.authHeaders(A),
      this._options.defaultHeaders,
      Q,
      A.headers,
    ]);
    return (this.validateHeaders(Y), Y.values);
  }
  buildBody({ options: { body: A, headers: B } }) {
    if (!A) return { bodyHeaders: void 0, body: void 0 };
    let Q = s5([B]);
    if (
      ArrayBuffer.isView(A) ||
      A instanceof ArrayBuffer ||
      A instanceof DataView ||
      (typeof A === "string" && Q.values.has("content-type")) ||
      A instanceof Blob ||
      A instanceof FormData ||
      A instanceof URLSearchParams ||
      (globalThis.ReadableStream && A instanceof globalThis.ReadableStream)
    )
      return { bodyHeaders: void 0, body: A };
    else if (
      typeof A === "object" &&
      (Symbol.asyncIterator in A || (Symbol.iterator in A && "next" in A && typeof A.next === "function"))
    )
      return { bodyHeaders: void 0, body: lw1(A) };
    else return vA(this, Kq1, "f").call(this, { body: A, headers: Q });
  }
}
((l20 = C7),
  (Kq1 = new WeakMap()),
  (c20 = new WeakSet()),
  (UjA = function A() {
    return this.baseURL !== "https://api.anthropic.com";
  }));
C7.Anthropic = l20;
C7.HUMAN_PROMPT = `

Human:`;
C7.AI_PROMPT = `

Assistant:`;
C7.DEFAULT_TIMEOUT = 600000;
C7.AnthropicError = jQ;
C7.APIError = n9;
C7.APIConnectionError = cz;
C7.APIConnectionTimeoutError = BP;
C7.APIUserAbortError = BW;
C7.NotFoundError = qu;
C7.ConflictError = V51;
C7.RateLimitError = H51;
C7.BadRequestError = X51;
C7.AuthenticationError = wu;
C7.InternalServerError = z51;
C7.PermissionDeniedError = F51;
C7.UnprocessableEntityError = K51;
C7.toFile = rw1;
class YP extends C7 {
  constructor() {
    super(...arguments);
    ((this.completions = new O_(this)),
      (this.messages = new Uq(this)),
      (this.models = new Ts(this)),
      (this.beta = new iz(this)));
  }
}
YP.Completions = O_;
YP.Messages = Uq;
YP.Models = Ts;
YP.Beta = iz;
function p20(A, B = 300000) {
  let Q = new Map(),
    Z = (...G) => {
      let Y = JSON.stringify(G),
        I = Q.get(Y),
        W = Date.now();
      if (!I) Q.set(Y, { value: A(...G), timestamp: W, refreshing: !1 });
      if (I && W - I.timestamp > B && !I.refreshing)
        return (
          (I.refreshing = !0),
          Promise.resolve()
            .then(() => {
              let J = A(...G);
              Q.set(Y, { value: J, timestamp: Date.now(), refreshing: !1 });
            })
            .catch((J) => {
              U1(J instanceof Error ? J : new Error(String(J)), XGA);
              let X = Q.get(Y);
              if (X) X.refreshing = !1;
            }),
          I.value
        );
      return Q.get(Y).value;
    };
  return ((Z.cache = { clear: () => Q.clear() }), Z);
}
function Hq1(A, B = 300000) {
  let Q = new Map(),
    Z = async (...G) => {
      let Y = JSON.stringify(G),
        I = Q.get(Y),
        W = Date.now();
      if (!I) {
        let J = await A(...G);
        return (Q.set(Y, { value: J, timestamp: W, refreshing: !1 }), J);
      }
      if (I && W - I.timestamp > B && !I.refreshing)
        return (
          (I.refreshing = !0),
          A(...G)
            .then((J) => {
              Q.set(Y, { value: J, timestamp: Date.now(), refreshing: !1 });
            })
            .catch((J) => {
              U1(J instanceof Error ? J : new Error(String(J)), JGA);
              let X = Q.get(Y);
              if (X) X.refreshing = !1;
            }),
          I.value
        );
      return Q.get(Y).value;
    };
  return ((Z.cache = { clear: () => Q.clear() }), Z);
}
function zq1(A, B) {
  let Q = new nw({ max: 1000 }),
    Z = (...G) => {
      let Y = B(...G),
        I = Q.get(Y);
      if (I !== void 0) return I;
      let W = A(...G);
      return (Q.set(Y, W), W);
    };
  return ((Z.cache = { clear: () => Q.clear(), size: () => Q.size }), Z);
}
import { createHash as N_9 } from "crypto";
var USER_INFERENCE_KEY = "user:inference",
  w_9 = "org:create_api_key",
  Ps = "oauth-2025-04-20",
  wjA = { SCOPES: [w_9, "user:profile", USER_INFERENCE_KEY] },
  $jA = {
    ...wjA,
    BASE_API_URL: "https://api.anthropic.com",
    CONSOLE_AUTHORIZE_URL: "https://console.anthropic.com/oauth/authorize",
    CLAUDE_AI_AUTHORIZE_URL: "https://claude.ai/oauth/authorize",
    TOKEN_URL: "https://console.anthropic.com/v1/oauth/token",
    API_KEY_URL: "https://api.anthropic.com/api/oauth/claude_cli/create_api_key",
    ROLES_URL: "https://api.anthropic.com/api/oauth/claude_cli/roles",
    CONSOLE_SUCCESS_URL: "https://console.anthropic.com/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
    CLAUDEAI_SUCCESS_URL: "https://console.anthropic.com/oauth/code/success?app=claude-code",
    MANUAL_REDIRECT_URL: "https://console.anthropic.com/oauth/code/callback",
    CLIENT_ID: "9d1c250a-e61b-44d9-88ed-5944d1962f5e",
    OAUTH_FILE_SUFFIX: "",
  };
function q_9() {
  return;
}
var E_9 = {
  ...wjA,
  BASE_API_URL: "http://localhost:3000",
  CONSOLE_AUTHORIZE_URL: "http://localhost:3000/oauth/authorize",
  CLAUDE_AI_AUTHORIZE_URL: "http://localhost:4000/oauth/authorize",
  TOKEN_URL: "http://localhost:3000/v1/oauth/token",
  API_KEY_URL: "http://localhost:3000/api/oauth/claude_cli/create_api_key",
  ROLES_URL: "http://localhost:3000/api/oauth/claude_cli/roles",
  CONSOLE_SUCCESS_URL: "http://localhost:3000/buy_credits?returnUrl=/oauth/code/success%3Fapp%3Dclaude-code",
  CLAUDEAI_SUCCESS_URL: "http://localhost:3000/oauth/code/success?app=claude-code",
  MANUAL_REDIRECT_URL: "https://console.staging.ant.dev/oauth/code/callback",
  CLIENT_ID: "22422756-60c9-4084-8eb7-27705fd5cf9a",
  OAUTH_FILE_SUFFIX: "-local-oauth",
};
function $4() {
  switch (xo1()) {
    case "local":
      return E_9;
    case "staging":
      return q_9() ?? $jA;
    case "prod":
      return $jA;
  }
}
function h51(A = "") {
  let B = IQ(),
    Z = !process.env.CLAUDE_CONFIG_DIR ? "" : `-${N_9("sha256").update(B).digest("hex").substring(0, 8)}`;
  return `Claude Code${$4().OAUTH_FILE_SUFFIX}${A}${Z}`;
}
function qjA() {
  let A = h51("-credentials");
  return {
    name: "keychain",
    read() {
      try {
        let B = W3(`security find-generic-password -a $USER -w -s "${A}"`);
        if (B) return JSON.parse(B);
      } catch (B) {
        return null;
      }
      return null;
    },
    update(B) {
      try {
        let Z = JSON.stringify(B).replace(/"/g, '\\"'),
          G = `security add-generic-password -U -a $USER -s "${A}" -w "${Z}"`;
        return (W3(G), { success: !0 });
      } catch (Q) {
        return { success: !1 };
      }
    },
    delete() {
      try {
        return (W3(`security delete-generic-password -a $USER -s "${A}"`), !0);
      } catch (B) {
        return !1;
      }
    },
  };
}
import { join as L_9 } from "path";
function i20() {
  let A = IQ(),
    B = ".credentials.json",
    Q = L_9(A, ".credentials.json");
  return {
    name: "plaintext",
    read() {
      if (w1().existsSync(Q))
        try {
          let Z = w1().readFileSync(Q, { encoding: "utf8" });
          return JSON.parse(Z);
        } catch (Z) {
          return null;
        }
      return null;
    },
    update(Z) {
      try {
        if (!w1().existsSync(A)) w1().mkdirSync(A);
        return (
          w1().writeFileSync(Q, JSON.stringify(Z), { encoding: "utf8", flush: !1 }),
          w1().chmodSync(Q, 384),
          { success: !0, warning: "Warning: Storing credentials in plaintext." }
        );
      } catch (G) {
        return { success: !1 };
      }
    },
    delete() {
      if (w1().existsSync(Q))
        try {
          return (w1().unlinkSync(Q), !0);
        } catch (Z) {
          return !1;
        }
      return !0;
    },
  };
}
function M_9(A, B) {
  return {
    name: `${A.name}-with-${B.name}-fallback`,
    read() {
      let Q = A.read();
      if (Q !== null && Q !== void 0) return Q;
      return B.read() || {};
    },
    update(Q) {
      let Z = A.read(),
        G = A.update(Q);
      if (G.success) {
        if (Z === null) B.delete();
        return G;
      }
      let Y = B.update(Q);
      if (Y.success) return { success: !0, warning: Y.warning };
      return { success: !1 };
    },
    delete() {
      let Q = A.delete(),
        Z = B.delete();
      return Q || Z;
    },
  };
}
function IH() {
  if (process.platform === "darwin") {
    let A = qjA(),
      B = i20();
    return M_9(A, B);
  }
  return i20();
}
function n20() {
  let A = _7A();
  if (A !== void 0) return A;
  let B = process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR;
  if (!B) return (bn(null), null);
  let Q = parseInt(B, 10);
  if (Number.isNaN(Q))
    return (
      d0(`CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR must be a valid file descriptor number, got: ${B}`),
      bn(null),
      null
    );
  try {
    let Z = w1(),
      G = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${Q}` : `/proc/self/fd/${Q}`,
      Y = Z.readFileSync(G, { encoding: "utf8" }).trim();
    if (!Y) return (d0("File descriptor contained empty OAuth token"), bn(null), null);
    return (F1(`Successfully read OAuth token from file descriptor ${Q}`), bn(Y), Y);
  } catch (Z) {
    return (
      d0(`Failed to read OAuth token from file descriptor ${Q}: ${Z instanceof Error ? Z.message : String(Z)}`),
      bn(null),
      null
    );
  }
}
function a20() {
  let A = x7A();
  if (A !== void 0) return A;
  let B = process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR;
  if (!B) return (fn(null), null);
  let Q = parseInt(B, 10);
  if (Number.isNaN(Q))
    return (
      d0(`CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR must be a valid file descriptor number, got: ${B}`),
      fn(null),
      null
    );
  try {
    let Z = w1(),
      G = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${Q}` : `/proc/self/fd/${Q}`,
      Y = Z.readFileSync(G, { encoding: "utf8" }).trim();
    if (!Y) return (d0("File descriptor contained empty API key"), fn(null), null);
    return (F1(`Successfully read API key from file descriptor ${Q}`), fn(Y), Y);
  } catch (Z) {
    return (
      d0(`Failed to read API key from file descriptor ${Q}: ${Z instanceof Error ? Z.message : String(Z)}`),
      fn(null),
      null
    );
  }
}
async function Cq1(A) {
  let Q = H0().oauthAccount?.accountUuid,
    Z = oJ(A);
  if (!Q || !Z) return;
  let G = `${$4().BASE_API_URL}/api/claude_cli_profile`;
  try {
    return (await $2.get(G, { headers: { "x-api-key": Z, "anthropic-beta": Ps }, params: { account_uuid: Q } })).data;
  } catch (Y) {
    U1(Y, RGA);
  }
}
async function g51(A) {
  let B = `${$4().BASE_API_URL}/api/oauth/profile`;
  try {
    return (await $2.get(B, { headers: { Authorization: `Bearer ${A}`, "Content-Type": "application/json" } })).data;
  } catch (Q) {
    U1(Q, TGA);
  }
}
function IP(A) {
  return Boolean(A?.includes(USER_INFERENCE_KEY));
}
function Uq1(A) {
  return A?.split(" ").filter(Boolean) ?? [];
}
function s20({ codeChallenge: A, state: B, port: Q, isManual: Z, loginWithClaudeAi: G, inferenceOnly: Y, orgUUID: I }) {
  let W = G ? $4().CLAUDE_AI_AUTHORIZE_URL : $4().CONSOLE_AUTHORIZE_URL,
    J = new URL(W);
  (J.searchParams.append("code", "true"),
    J.searchParams.append("client_id", $4().CLIENT_ID),
    J.searchParams.append("response_type", "code"),
    J.searchParams.append("redirect_uri", Z ? $4().MANUAL_REDIRECT_URL : `http://localhost:${Q}/callback`));
  let X = Y ? [USER_INFERENCE_KEY] : $4().SCOPES;
  if (
    (J.searchParams.append("scope", X.join(" ")),
    J.searchParams.append("code_challenge", A),
    J.searchParams.append("code_challenge_method", "S256"),
    J.searchParams.append("state", B),
    I)
  )
    J.searchParams.append("orgUUID", I);
  return J.toString();
}
async function EjA(A, B, Q, Z, G = !1, Y) {
  let I = {
    grant_type: "authorization_code",
    code: A,
    redirect_uri: G ? $4().MANUAL_REDIRECT_URL : `http://localhost:${Z}/callback`,
    client_id: $4().CLIENT_ID,
    code_verifier: Q,
    state: B,
  };
  if (Y !== void 0) I.expires_in = Y;
  let W = await $2.post($4().TOKEN_URL, I, { headers: { "Content-Type": "application/json" } });
  if (W.status !== 200)
    throw new Error(
      W.status === 401
        ? "Authentication failed: Invalid authorization code"
        : `Token exchange failed (${W.status}): ${W.statusText}`,
    );
  return W.data;
}
async function NjA(A) {
  let B = { grant_type: "refresh_token", refresh_token: A, client_id: $4().CLIENT_ID };
  try {
    let Q = await $2.post($4().TOKEN_URL, B, { headers: { "Content-Type": "application/json" } });
    if (Q.status !== 200) throw new Error(`Token refresh failed: ${Q.statusText}`);
    let Z = Q.data,
      { access_token: G, refresh_token: Y = A, expires_in: I } = Z,
      W = Date.now() + I * 1000,
      J = Uq1(Z.scope);
    Y1("tengu_oauth_token_refresh_success", {});
    let X = await r20(G);
    return { accessToken: G, refreshToken: Y, expiresAt: W, scopes: J, subscriptionType: X };
  } catch (Q) {
    throw (Y1("tengu_oauth_token_refresh_failure", {}), Q);
  }
}
async function LjA(A) {
  let B = await $2.get($4().ROLES_URL, { headers: { Authorization: `Bearer ${A}` } });
  if (B.status !== 200) throw new Error(`Failed to fetch user roles: ${B.statusText}`);
  let Q = B.data,
    Z = H0();
  if (!Z.oauthAccount) throw new Error("OAuth account information not found in config");
  ((Z.oauthAccount.organizationRole = Q.organization_role),
    (Z.oauthAccount.workspaceRole = Q.workspace_role),
    (Z.oauthAccount.organizationName = Q.organization_name),
    TA(Z),
    Y1("tengu_oauth_roles_stored", { org_role: Q.organization_role }));
}
async function MjA(A) {
  try {
    let B = await $2.post($4().API_KEY_URL, null, { headers: { Authorization: `Bearer ${A}` } }),
      Q = B.data?.raw_key;
    if (Q) return (OjA(Q), Y1("tengu_oauth_api_key", { status: "success", statusCode: B.status }), Q);
    return null;
  } catch (B) {
    throw (Y1("tengu_oauth_api_key", { status: "failure", error: B instanceof Error ? B.message : String(B) }), B);
  }
}
function $q1(A) {
  if (A === null) return !1;
  let B = 300000;
  return Date.now() + B >= A;
}
async function r20(A) {
  switch ((await g51(A))?.organization?.organization_type) {
    case "claude_max":
      return "max";
    case "claude_pro":
      return "pro";
    case "claude_enterprise":
      return "enterprise";
    case "claude_team":
      return "team";
    default:
      return null;
  }
}
async function js() {
  let B = H0().oauthAccount?.organizationUuid;
  if (B) return B;
  let Q = F3()?.accessToken;
  if (Q === void 0) return null;
  let G = (await g51(Q))?.organization?.uuid;
  if (!G) return null;
  return G;
}
var Lu = {
    firstParty: "claude-3-7-sonnet-20250219",
    bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
    vertex: "claude-3-7-sonnet@20250219",
  },
  Mu = {
    firstParty: "claude-3-5-sonnet-20241022",
    bedrock: "anthropic.claude-3-5-sonnet-20241022-v2:0",
    vertex: "claude-3-5-sonnet-v2@20241022",
  },
  u51 = {
    firstParty: "claude-3-5-haiku-20241022",
    bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
    vertex: "claude-3-5-haiku@20241022",
  },
  WP = {
    firstParty: "claude-sonnet-4-20250514",
    bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
    vertex: "claude-sonnet-4@20250514",
  };
var Ou = {
    firstParty: "claude-opus-4-20250514",
    bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
    vertex: "claude-opus-4@20250514",
  },
  Ru = {
    firstParty: "claude-opus-4-1-20250805",
    bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
    vertex: "claude-opus-4-1@20250805",
  };
function RjA(A) {
  let B = A.toLowerCase();
  if (B.includes("claude-sonnet-4") && B.includes("[1m]")) return "Sonnet 4 (with 1M token context)";
  if (B.includes("claude-sonnet-4")) return "Sonnet 4";
  if (B.includes("claude-opus-4-1")) return "Opus 4.1";
  if (B.includes("claude-opus-4")) return "Opus 4";
  if (B.includes("claude-3-7-sonnet")) return "Claude 3.7 Sonnet";
  if (B.includes("claude-3-5-sonnet")) return "Claude 3.5 Sonnet";
  if (B.includes("claude-3-5-haiku")) return "Claude 3.5 Haiku";
  return;
}
var eo = A1(OoA(), 1);
var gX2 = A1(j70(), 1),
  uX2 = A1(m7(), 1);
var MR1 = A1(y70(), 1);
var x17 = g71(),
  Yv4 = $71(),
  v17 = To(),
  b17 = UG2(),
  Iv4 = Po(),
  f17 = n30(),
  Wv4 = fG2(),
  h17 = lG2(),
  Jv4 = q8(),
  NR1 = t4(),
  { InvalidArgumentError: ER1 } = Jv4,
  to = fY2(),
  g17 = q71(),
  u17 = $Z0(),
  m17 = NI2(),
  d17 = qZ0(),
  c17 = WZ0(),
  l17 = yO1(),
  { getGlobalDispatcher: Xv4, setGlobalDispatcher: Fv4 } = uO1(),
  p17 = mO1(),
  i17 = EO1(),
  n17 = NO1();
Object.assign(Yv4.prototype, to);
var AG0 = Iv4;
var BG0 = Wv4;
var Hv4 = { redirect: jI2(), retry: yI2(), dump: xI2(), dns: gI2() };
var zv4 = { parseHeaders: NR1.parseHeaders, headerNameToString: NR1.headerNameToString };
function $31(A) {
  return (B, Q, Z) => {
    if (typeof Q === "function") ((Z = Q), (Q = null));
    if (!B || (typeof B !== "string" && typeof B !== "object" && !(B instanceof URL))) throw new ER1("invalid url");
    if (Q != null && typeof Q !== "object") throw new ER1("invalid opts");
    if (Q && Q.path != null) {
      if (typeof Q.path !== "string") throw new ER1("invalid opts.path");
      let I = Q.path;
      if (!Q.path.startsWith("/")) I = `/${I}`;
      B = new URL(NR1.parseOrigin(B).origin + I);
    } else {
      if (!Q) Q = typeof B === "object" ? B : {};
      B = NR1.parseURL(B);
    }
    let { agent: G, dispatcher: Y = Xv4() } = Q;
    if (G) throw new ER1("unsupported opts.agent. Did you mean opts.client?");
    return A.call(
      Y,
      {
        ...Q,
        origin: B.origin,
        path: B.search ? `${B.pathname}${B.search}` : B.pathname,
        method: Q.method || (Q.body ? "PUT" : "GET"),
      },
      Z,
    );
  };
}
var LR1 = Fv4;
var a17 = Z31().fetch;
var Dv4 = Km().Headers,
  Cv4 = B31().Response,
  Uv4 = go().Request,
  $v4 = R71().FormData,
  wv4 = globalThis.File ?? X1("node:buffer").File,
  qv4 = BJ2().FileReader;
var { setGlobalOrigin: s17, getGlobalOrigin: r17 } = G30();
var { CacheStorage: Vv4 } = FJ2(),
  { kConstruct: Kv4 } = WR1();
var Ev4 = new Vv4(Kv4);
var { deleteCookie: o17, getCookies: t17, getSetCookies: e17, setCookie: A07 } = NJ2();
var { parseMIMEType: B07, serializeAMimeType: Q07 } = CH();
var { CloseEvent: Z07, ErrorEvent: G07, MessageEvent: Y07 } = io();
var Nv4 = qX2().WebSocket;
var Lv4 = $31(to.request),
  Mv4 = $31(to.stream),
  Ov4 = $31(to.pipeline),
  Rv4 = $31(to.connect),
  Tv4 = $31(to.upgrade);
var { EventSource: I07 } = xX2();
import { Agent as Pv4 } from "https";
var gP = YA(() => {
    let A = {};
    if (process.env.CLAUDE_CODE_CLIENT_CERT)
      try {
        ((A.cert = w1().readFileSync(process.env.CLAUDE_CODE_CLIENT_CERT, { encoding: "utf8" })),
          F1("mTLS: Loaded client certificate from CLAUDE_CODE_CLIENT_CERT"));
      } catch (B) {
        d0(`mTLS: Failed to load client certificate: ${B}`);
      }
    if (process.env.CLAUDE_CODE_CLIENT_KEY)
      try {
        ((A.key = w1().readFileSync(process.env.CLAUDE_CODE_CLIENT_KEY, { encoding: "utf8" })),
          F1("mTLS: Loaded client key from CLAUDE_CODE_CLIENT_KEY"));
      } catch (B) {
        d0(`mTLS: Failed to load client key: ${B}`);
      }
    if (process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE)
      ((A.passphrase = process.env.CLAUDE_CODE_CLIENT_KEY_PASSPHRASE), F1("mTLS: Using client key passphrase"));
    if (Object.keys(A).length === 0) return;
    return A;
  }),
  bX2 = YA(() => {
    let A = gP();
    if (!A) return;
    let B = { ...A, keepAlive: !0 };
    return (F1("mTLS: Creating HTTPS agent with custom certificates"), new Pv4(B));
  });
function fX2() {
  let A = gP();
  if (!A) return;
  return { cert: A.cert, key: A.key, passphrase: A.passphrase };
}
function wm() {
  let A = gP();
  if (!A) return {};
  let B = { cert: A.cert, key: A.key, passphrase: A.passphrase },
    Q = new AG0({ connect: B, pipelining: 1 });
  return (F1("mTLS: Created undici agent with custom certificates"), { dispatcher: Q });
}
function hX2() {
  if (!gP()) return;
  if (process.env.NODE_EXTRA_CA_CERTS)
    F1("NODE_EXTRA_CA_CERTS detected - Node.js will automatically append to built-in CAs");
}
function w31() {
  return process.env.https_proxy || process.env.HTTPS_PROXY || process.env.http_proxy || process.env.HTTP_PROXY;
}
function jv4() {
  return process.env.no_proxy || process.env.NO_PROXY;
}
function Sv4(A) {
  let B = jv4();
  if (!B) return !1;
  if (B === "*") return !0;
  try {
    let Q = new URL(A),
      Z = Q.hostname.toLowerCase(),
      G = Q.port || (Q.protocol === "https:" ? "443" : "80"),
      Y = `${Z}:${G}`;
    return B.split(/[,\s]+/)
      .filter(Boolean)
      .some((W) => {
        if (((W = W.toLowerCase().trim()), W.includes(":"))) return Y === W;
        if (W.startsWith(".")) {
          let J = W;
          return Z === W.substring(1) || Z.endsWith(J);
        }
        return Z === W;
      });
  } catch {
    return !1;
  }
}
var mX2 = YA((A) => {
  let B = gP(),
    Q = { httpProxy: A, httpsProxy: A, noProxy: process.env.NO_PROXY || process.env.no_proxy };
  if (B) Q.connect = { cert: B.cert, key: B.key, passphrase: B.passphrase };
  return new BG0(Q);
});
function dX2() {
  let A = w31(),
    B = wm();
  if (A) return { dispatcher: mX2(A) };
  return B;
}
function cX2() {
  let A = w31(),
    B = bX2(),
    Q = gP();
  if (A) {
    $2.defaults.proxy = !1;
    let Z;
    if (Q) Z = new MR1.HttpsProxyAgent(A, { cert: Q.cert, key: Q.key, passphrase: Q.passphrase });
    else Z = new MR1.HttpsProxyAgent(A);
    ($2.interceptors.request.use((G) => {
      if (G.url && Sv4(G.url))
        if (B) ((G.httpsAgent = B), (G.httpAgent = B));
        else (delete G.httpsAgent, delete G.httpAgent);
      else ((G.httpsAgent = Z), (G.httpAgent = Z));
      return G;
    }),
      LR1(mX2(A)));
  } else if (B) {
    $2.defaults.httpsAgent = B;
    let Z = wm();
    if (Z.dispatcher) LR1(Z.dispatcher);
  }
}
function lX2() {
  let A = w31();
  if (!A) return {};
  let B = new MR1.HttpsProxyAgent(A),
    Q = new uX2.NodeHttpHandler({ httpAgent: B, httpsAgent: B });
  return { requestHandler: Q, credentials: gX2.defaultProvider({ clientConfig: { requestHandler: Q } }) };
}
var pX2 = YA(async function () {
  let A = await iX2(),
    B = [],
    Q;
  try {
    do {
      let Z = new eo.ListInferenceProfilesCommand({ ...(Q && { nextToken: Q }), typeEquals: "SYSTEM_DEFINED" }),
        G = await A.send(Z);
      if (G.inferenceProfileSummaries) B.push(...G.inferenceProfileSummaries);
      Q = G.nextToken;
    } while (Q);
    return B.filter((Z) => Z.inferenceProfileId?.includes("anthropic"))
      .map((Z) => Z.inferenceProfileId)
      .filter(Boolean);
  } catch (Z) {
    throw (U1(Z, a91), Z);
  }
});
function qm(A, B) {
  return A.find((Q) => Q.includes(B)) ?? null;
}
async function iX2() {
  let A = Pn(),
    B = await E31(),
    Q = { region: A, ...lX2() };
  if (B)
    Q.credentials = { accessKeyId: B.accessKeyId, secretAccessKey: B.secretAccessKey, sessionToken: B.sessionToken };
  return new eo.BedrockClient(Q);
}
var q31 = YA(async function (A) {
  try {
    let B = await iX2(),
      Q = new eo.GetInferenceProfileCommand({ inferenceProfileIdentifier: A }),
      Z = await B.send(Q);
    if (!Z.models || Z.models.length === 0) return null;
    let G = Z.models[0];
    if (!G?.modelArn) return null;
    let Y = G.modelArn.lastIndexOf("/");
    return Y >= 0 ? G.modelArn.substring(Y + 1) : G.modelArn;
  } catch (B) {
    return (U1(B, a91), null);
  }
});
function At(A) {
  let B = [],
    Q = !1;
  async function Z() {
    if (Q) return;
    if (B.length === 0) return;
    Q = !0;
    while (B.length > 0) {
      let { args: G, resolve: Y, reject: I, context: W } = B.shift();
      try {
        let J = await A.apply(W, G);
        Y(J);
      } catch (J) {
        I(J);
      }
    }
    if (((Q = !1), B.length > 0)) Z();
  }
  return function (...G) {
    return new Promise((Y, I) => {
      (B.push({ args: G, resolve: Y, reject: I, context: this }), Z());
    });
  };
}
function OR1(A) {
  return { haiku35: u51[A], sonnet35: Mu[A], sonnet37: Lu[A], sonnet40: WP[A], opus40: Ou[A], opus41: Ru[A] };
}
async function yv4() {
  let A;
  try {
    A = await pX2();
  } catch (W) {
    return (U1(W, a91), OR1("bedrock"));
  }
  if (!A?.length) return OR1("bedrock");
  let B = qm(A, "claude-3-5-haiku-20241022"),
    Q = qm(A, "claude-3-5-sonnet-20241022"),
    Z = qm(A, "claude-3-7-sonnet-20250219"),
    G = qm(A, "claude-sonnet-4-20250514"),
    Y = qm(A, "claude-opus-4-20250514"),
    I = qm(A, "claude-opus-4-1-20250805");
  return {
    haiku35: B || u51.bedrock,
    sonnet35: Q || Mu.bedrock,
    sonnet37: Z || Lu.bedrock,
    sonnet40: G || WP.bedrock,
    opus40: Y || Ou.bedrock,
    opus41: I || Ru.bedrock,
  };
}
var kv4 = At(async () => {
  if (wD1() !== null) return;
  try {
    let A = await yv4();
    go1(A);
  } catch (A) {
    U1(A, Mg);
  }
});
function _v4() {
  if (wD1() !== null) return;
  if (h7() !== "bedrock") {
    go1(OR1(h7()));
    return;
  }
  kv4();
}
function SV() {
  let A = wD1();
  if (A === null) return (_v4(), OR1(h7()));
  return A;
}
function FM() {
  return `claude-cli/${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION} (external, ${process.env.CLAUDE_CODE_ENTRYPOINT})`;
}
function Bt() {
  return `claude-code/${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION}`;
}
function RU() {
  return `claude-code/${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION}`;
}
function yV(A) {
  if (b2()) {
    let Q = F3();
    if (!Q?.accessToken) return { headers: {}, error: "No OAuth token available" };
    return { headers: { Authorization: `Bearer ${Q.accessToken}`, "anthropic-beta": Ps } };
  }
  let B = oJ(A);
  if (!B) return { headers: {}, error: "No API key available" };
  return { headers: { "x-api-key": B } };
}
var xv4 = 3600000;
async function vv4() {
  let A = TZ()?.organizationUuid;
  if (!A) throw new Error("No organization ID available");
  let B = yV(FF());
  if (B.error) throw new Error(`Auth error: ${B.error}`);
  let Q = { "Content-Type": "application/json", "User-Agent": RU(), ...B.headers };
  try {
    let Z = `https://api.anthropic.com/api/organization/${A}/claude_code_sonnet_1m_access`,
      G = await $2.get(Z, { headers: Q, timeout: 5000 });
    return { hasAccess: G.data.has_access, hasAccessNotAsDefault: G.data.has_access_not_as_default, hasError: !1 };
  } catch (Z) {
    return (U1(Z, JYA), { hasAccess: !1, hasError: !0 });
  }
}
var bv4 = Hq1(vv4, xv4);
async function fv4() {
  try {
    return await bv4();
  } catch (A) {
    return (F1("Sonnet-1M access check failed, defaulting to no access"), { hasAccess: !1, hasError: !0 });
  }
}
var hv4 = 3600000;
function Qt() {
  let A = TZ()?.organizationUuid;
  if (!A) return { hasAccess: !1, wasPartOfDefaultRollout: !1, needsRefresh: !1 };
  let B = H0(),
    Q = (b2() ? B.s1mAccessCache : B.s1mNonSubscriberAccessCache)?.[A],
    Z = Date.now();
  if (!Q) return { hasAccess: !1, wasPartOfDefaultRollout: !1, needsRefresh: !0 };
  let { hasAccess: G, hasAccessNotAsDefault: Y, timestamp: I } = Q,
    W = Z - I > hv4;
  return { hasAccess: G || (Y ?? !1), wasPartOfDefaultRollout: G, needsRefresh: W };
}
async function nX2() {
  let { needsRefresh: A } = Qt();
  if (A) gv4();
}
async function gv4() {
  let A = TZ()?.organizationUuid;
  if (!A) return;
  if (!b2()) {
    let B = await Cq1(FF());
    if (!B) return;
    let { uuid: Q, rate_limit_tier: Z } = B.organization,
      G = H0(),
      Y = {
        ...G.s1mNonSubscriberAccessCache,
        [Q]: { hasAccess: Z === "auto_prepaid_tier_3" || Z === "manual_tier_3", timestamp: Date.now() },
      };
    TA({ ...G, s1mNonSubscriberAccessCache: Y });
    return;
  }
  try {
    let { hasAccess: B, hasAccessNotAsDefault: Q } = await fv4(),
      Z = H0(),
      G = { ...Z.s1mAccessCache, [A]: { hasAccess: B, hasAccessNotAsDefault: Q, timestamp: Date.now() } };
    TA({ ...Z, s1mAccessCache: G });
  } catch (B) {
    (F1("Failed to fetch and cache Sonnet-1M access"), U1(B, XYA));
  }
}
var Yt = ["sonnet", "opus", "haiku", "sonnet[1m]", "opusplan"],
  uv4 = WP,
  aX2 = uv4.firstParty,
  L31 = [...Yt, "inherit"],
  ZG0 = "sonnet";
function TU() {
  return process.env.ANTHROPIC_SMALL_FAST_MODEL || sX2();
}
function It(A) {
  return A === SV().opus40 || A === SV().opus41;
}
function Wt() {
  let A,
    B = i91();
  if (B !== void 0) A = B;
  else {
    let Q = E2() || {};
    A = process.env.ANTHROPIC_MODEL || Q.model || void 0;
  }
  if (b2() && !kV() && A?.includes("opus")) return;
  return A;
}
function Jt(A = {}) {
  let B = Wt();
  if (B !== null && B !== void 0) return B;
  let { forDisplay: Q = !1 } = A;
  return rX2(Q);
}
function uG() {
  let A = Jt();
  if (A !== void 0 && A !== null) return VM(A);
  return Nm();
}
function Gt() {
  if (process.env.ANTHROPIC_DEFAULT_SONNET_MODEL) return process.env.ANTHROPIC_DEFAULT_SONNET_MODEL;
  return SV().sonnet40;
}
function RR1() {
  if (process.env.ANTHROPIC_DEFAULT_OPUS_MODEL) return process.env.ANTHROPIC_DEFAULT_OPUS_MODEL;
  return SV().opus41;
}
function sX2() {
  if (process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL) return process.env.ANTHROPIC_DEFAULT_HAIKU_MODEL;
  return SV().haiku35;
}
function Xt(A) {
  let { permissionMode: B, mainLoopModel: Q, exceeds200kTokens: Z = !1 } = A;
  if (Jt() === "opusplan") {
    if (B !== "plan" || Z) return Px();
  }
  return Q;
}
var VA7 = YA(() => {
  return null;
});
function M31() {
  return mz("max_user_opusplan", "tengu_opusplan_default", "");
}
function mv4() {
  let A =
    mz("new_max_user_default_model", "tengu_external_model_override", null) ??
    QF2("tengu_external_model_override", null);
  if (A === null) return null;
  if (M31() === "active") return { name: "opusplan" };
  if (A.earliestFirstToken === void 0) return A;
  let Z = H0().claudeCodeFirstTokenDate;
  if (!Z) return null;
  let G = new Date(Z).getTime(),
    Y = new Date(A.earliestFirstToken).getTime();
  if (isNaN(Y))
    return (
      U1(
        new Error(
          `Invalid earliestRequiredTime in Statsig config tengu_default_model_override: ${A.earliestFirstToken}`,
        ),
        Mg,
      ),
      null
    );
  if (isNaN(G) || G < Y) return null;
  return A;
}
function rX2(A) {
  let B = mv4();
  if (B !== null && B.name) return A ? (B.displayName ?? B.name) : B.name;
  return;
}
function TR1(A = {}) {
  return GG0(_n(), A);
}
function GG0(A, B = {}) {
  let { forDisplay: Q = !1 } = B,
    Z = rX2(Q);
  if (Z !== void 0) return Z;
  if (A) return Px();
  if (b2() && kV()) return RR1();
  return Gt();
}
function Nm(A = {}) {
  return VM(TR1(A));
}
function Px() {
  return Gt();
}
function fq(A) {
  if (A.includes("claude-opus-4-1")) return "claude-opus-4-1";
  if (A.includes("claude-opus-4")) return "claude-opus-4";
  let B = A.match(/(claude-(\d+-\d+-)?\w+)/);
  if (B && B[1]) return B[1];
  return A;
}
async function oX2() {
  try {
    let A = H0();
    if (A.claudeCodeFirstTokenDate !== void 0) return;
    let B = yV(!1);
    if (B.error) {
      U1(new Error(`Failed to get auth headers: ${B.error}`), Mg);
      return;
    }
    let Z = `${$4().BASE_API_URL}/api/organization/claude_code_first_token_date`,
      Y = (await $2.get(Z, { headers: { ...B.headers, "User-Agent": RU() } })).data?.first_token_date ?? null;
    if (Y !== null) {
      let I = new Date(Y).getTime();
      if (isNaN(I)) {
        U1(new Error(`Received invalid first_token_date from API: ${Y}`), Mg);
        return;
      }
    }
    TA({ ...A, claudeCodeFirstTokenDate: Y });
  } catch (A) {
    U1(A instanceof Error ? A : new Error(String(A)), Mg);
  }
}
function PR1() {
  if (b2() && !kV()) return Em.description;
  switch (TR1()) {
    case N31.value:
      return N31.description;
    case Em.value:
      return Em.description;
    case QG0.value:
      return QG0.description;
  }
  let B = H0().fallbackAvailableWarningThreshold;
  if (B === void 0) return "Use Opus 4.1 or Sonnet 4 based on Max usage limits";
  return `Opus 4.1 for up to ${(B * 100).toFixed(0)}% of usage limits, then use Sonnet 4`;
}
function dv4(A) {
  if (A === "opusplan") return "Opus 4.1 in plan mode, else Sonnet 4";
  return uP(VM(A));
}
function uP(A) {
  if (A === SV().opus41) return "Opus 4.1";
  if (A === SV().opus40) return "Opus 4";
  if (A === SV().sonnet40) return "Sonnet 4";
  if (A === SV().sonnet40 + "[1m]") return "Sonnet 4 (with 1M token context)";
  if (A === SV().sonnet37) return "Sonnet 3.7";
  if (A === SV().sonnet35) return "Sonnet 3.5";
  if (A === SV().haiku35) return "Haiku 3.5";
  return A;
}
function Zt() {
  if (b2()) {
    if (!kV()) return { value: null, label: "Sonnet", description: Em.description };
    return { value: null, label: "Default (recommended)", description: PR1() };
  }
  return {
    value: null,
    label: "Default (recommended)",
    description: `Use the default model (currently ${dv4(TR1({ forDisplay: !0 }))}) · $3/$15 per Mtok`,
  };
}
var cv4 = { value: "sonnet", label: "Sonnet", description: "Sonnet 4 for daily use · $3/$15 per Mtok" },
  jR1 = {
    value: "sonnet[1m]",
    label: "Sonnet (1M context)",
    description: "Sonnet 4 for long sessions · $6/$22.50 per Mtok",
  },
  N31 = { value: "opusplan", label: "Opus Plan Mode", description: "Use Opus 4.1 in plan mode, Sonnet 4 otherwise" },
  tX2 = { value: "opus", label: "Opus", description: "Opus 4.1 for complex tasks · $15/$75 per Mtok" },
  lv4 = { value: "opus", label: "Opus", description: "Opus 4.1 for complex tasks · Reaches usage limits faster" },
  Em = { value: "sonnet", label: "Sonnet", description: "Sonnet 4 for daily use" },
  QG0 = {
    value: "sonnet[1m]",
    label: "Sonnet (1M context)",
    description: "Sonnet 4 with 1M context · Uses rate limits faster",
  };
function pv4() {
  if (b2()) {
    if (!kV()) return [Zt()];
    let B = [Zt(), lv4],
      Q = TR1();
    if (Q !== Em.value) B.push(Em);
    if (Qt().hasAccess) B.push(QG0);
    if (Q !== N31.value) B.push(N31);
    return B;
  }
  let A = [Zt(), tX2];
  if (Qt().hasAccess) A.push(jR1);
  return (A.push(N31), A);
}
function SR1() {
  let A = pv4(),
    B = null,
    Q = Wt(),
    Z = $D1();
  if (Q !== void 0 && Q !== null) B = Q;
  else if (Z !== null) B = Z;
  if (B === null || A.some((G) => G.value === B)) return A;
  if (!b2() && eX2(B)) A.push(B === "sonnet" ? cv4 : B === "sonnet[1m]" ? jR1 : tX2);
  else A.push({ value: B, label: B, description: "Custom model" });
  return A;
}
function eX2(A) {
  return Yt.includes(A);
}
function VM(A) {
  let B = A.toLowerCase().trim();
  if (eX2(B))
    switch (B) {
      case "sonnet[1m]":
        return Gt() + "[1m]";
      case "sonnet":
        return Gt();
      case "opusplan":
      case "opus":
        return RR1();
      case "haiku":
        return sX2();
    }
  return B;
}
function Lm(A) {
  if (A === null) {
    if (b2() && !kV()) return `Sonnet (${Em.description})`;
    else if (b2()) return `Default (${PR1()})`;
    return `Default (${Nm({ forDisplay: !0 })})`;
  }
  let B = VM(A);
  return A === B ? B : `${A} (${B})`;
}
function AF2(A) {
  return A;
}
function yR1(A, B) {
  if (process.env.CLAUDE_CODE_SUBAGENT_MODEL) return process.env.CLAUDE_CODE_SUBAGENT_MODEL;
  if (!A) return VM(ZG0);
  return A === "inherit" ? B : VM(A);
}
function kR1(A) {
  if (!A) return "Sonnet (default)";
  if (A === "inherit") return "Inherit from parent";
  return A.charAt(0).toUpperCase() + A.slice(1);
}
function BF2() {
  let A = [{ value: "sonnet", label: "Sonnet", description: "Balanced performance - best for most agents" }];
  if (kV()) A.push({ value: "opus", label: "Opus", description: "Most capable for complex reasoning tasks" });
  return (
    A.push(
      { value: "haiku", label: "Haiku", description: "Fast and efficient for simple tasks" },
      { value: "inherit", label: "Inherit from parent", description: "Use the same model as the main conversation" },
    ),
    A
  );
}
function jx(A) {
  return A.replace(/\[1m\]/gi, "");
}
function O31() {
  let A = Wt(),
    B = A === void 0 || A === null;
  return _R1() && B;
}
var USAGE_LIMIT_MESSAGE = "Claude AI usage limit reached",
  nv4 = [
    "Spending cap reached",
    "Limit reached –",
    "Weekly limit reached",
    "Weekly limit resets",
    "5-hour limit reached",
    "5-hour limit resets",
    "Opus weekly limit reached",
    "Opus limit resets",
    "Usage limit reached",
  ];
function ZF2(A) {
  return nv4.some((B) => A.startsWith(B));
}
function GF2(A) {
  let B = A.resetsAt,
    Q = B ? iC(B) : void 0,
    Z = A.overageResetsAt ? iC(A.overageResetsAt) : void 0;
  if (A.isUsingOverage) {
    if (A.overageStatus === "allowed_warning") return { message: "Approaching spending cap", severity: "warning" };
    if (A.overageStatus === "allowed") return null;
  }
  if (A.status === "rejected") {
    if (A.overageStatus === "rejected") {
      let G = "";
      if (B && A.overageResetsAt)
        if (B < A.overageResetsAt) G = ` ∙ resets ${Q}`;
        else G = ` ∙ resets ${Z}`;
      else if (Q) G = ` resets ${Q}`;
      else if (Z) G = ` resets ${Z}`;
      let Y = PZ();
      return {
        message:
          Y === "team" || Y === "enterprise"
            ? "Limit reached – contact an admin to keep working"
            : `Spending cap reached${G}`,
        severity: "error",
      };
    }
    if (A.rateLimitType === "seven_day_opus") {
      if (O31()) return null;
      let G = PZ(),
        Y = G === "team" || G === "enterprise",
        I = B ? iC(B, !0) : void 0;
      return {
        message: Y
          ? `Opus limit ${I ? `resets ${I}` : "reached"} ∙ contact an admin to keep working`
          : `Opus weekly limit reached${Q ? ` ∙ resets ${Q}` : ""}`,
        severity: "error",
      };
    }
    if (A.rateLimitType === "seven_day") {
      let G = PZ(),
        Y = G === "team" || G === "enterprise",
        I = B ? iC(B, !0) : void 0;
      return {
        message: Y
          ? `Weekly limit ${I ? `resets ${I}` : "reached"} ∙ contact an admin to keep working`
          : `Weekly limit reached${Q ? ` ∙ resets ${Q}` : ""}`,
        severity: "error",
      };
    }
    if (A.rateLimitType === "five_hour") {
      let G = PZ(),
        Y = G === "team" || G === "enterprise",
        I = B ? iC(B, !0) : void 0;
      return {
        message: Y
          ? `5-hour limit ${I ? `resets ${I}` : "reached"} ∙ contact an admin to keep working`
          : `5-hour limit reached${Q ? ` ∙ resets ${Q}` : ""}`,
        severity: "error",
        legacyFormat: B ? `${USAGE_LIMIT_MESSAGE}|${B}` : void 0,
      };
    }
    return { message: `Usage limit reached${Q ? ` ∙ resets ${Q}` : ""}`, severity: "error" };
  }
  if (A.status === "allowed_warning") {
    if (A.rateLimitType === "seven_day_opus") {
      if (O31()) return null;
      return { message: "Approaching Opus weekly limit", severity: "warning" };
    }
    if (A.rateLimitType === "seven_day") return { message: "Approaching weekly limit", severity: "warning" };
    if (A.rateLimitType === "five_hour") return { message: "Approaching 5-hour limit", severity: "warning" };
    return { message: "Approaching usage limit", severity: "warning" };
  }
  return null;
}
function YG0(A) {
  let B = GF2(A);
  if (B && B.severity === "error") return B.message;
  return null;
}
function IG0(A) {
  let B = GF2(A);
  if (B && B.severity === "warning") return B.message;
  return null;
}
var av4 = {},
  xR1 = !1,
  YF2 = null,
  sv4 = "max";
function WG0() {
  return null;
}
function IF2(A) {
  let B = WG0();
  if (!B) return A;
  let Q = new globalThis.Headers(A);
  return (
    Object.entries(B).forEach(([Z, G]) => {
      if (G !== void 0) Q.set(Z, G);
    }),
    Q
  );
}
function Sx() {
  return xR1 && !1;
}
function WF2() {
  return null;
}
function JF2() {
  return xR1 && YF2 !== null && !1;
}
var SERVICE_VERSION = "claude-code-20250219",
  FF2 = "interleaved-thinking-2025-05-14",
  VF2 = "fine-grained-tool-streaming-2025-05-14",
  KF2 = "context-1m-2025-08-07",
  HF2 = "context-management-2025-06-27",
  JG0 = new Set(["interleaved-thinking-2025-05-14", "context-1m-2025-08-07"]);
function rv4(A) {
  if (h7() === "firstParty") return !A.includes("claude-3-");
  else return A.includes("claude-opus-4") || A.includes("claude-sonnet-4");
}
var XG0 = YA((A) => {
    let B = [],
      Q = A.includes("haiku");
    if (!Q) B.push(SERVICE_VERSION);
    if (b2()) B.push(Ps);
    if (A.includes("[1m]")) B.push(KF2);
    if (!EQ(process.env.DISABLE_INTERLEAVED_THINKING) && rv4(A)) B.push(FF2);
    if (h7() === "firstParty" && !EQ(process.env.CLAUDE_CODE_DISABLE_FINE_GRAINED_TOOL_STREAMING)) B.push(VF2);
    if ((EQ(process.env.USE_API_CONTEXT_MANAGEMENT), process.env.ANTHROPIC_BETAS && !Q))
      B.push(
        ...process.env.ANTHROPIC_BETAS.split(",")
          .map((G) => G.trim())
          .filter(Boolean),
      );
    return B;
  }),
  NH = YA((A) => {
    let B = XG0(A);
    if (h7() === "bedrock") return B.filter((Q) => !JG0.has(Q));
    return B;
  }),
  FG0 = YA((A) => {
    return XG0(A).filter((Q) => JG0.has(Q));
  });
function vR1() {
  (XG0.cache?.clear?.(), NH.cache?.clear?.(), FG0.cache?.clear?.());
}
var ig2 = A1(mD1(), 1);
var BS1 = A1(Mq2(), 1),
  dg2 = A1(SV0(), 1);
function cg2(A) {
  return A?.name === "CredentialsProviderError";
}
function lg2(A) {
  if (!A || typeof A !== "object") return !1;
  let B = A;
  if (!B.Credentials || typeof B.Credentials !== "object") return !1;
  let Q = B.Credentials;
  return (
    typeof Q.AccessKeyId === "string" &&
    typeof Q.SecretAccessKey === "string" &&
    typeof Q.SessionToken === "string" &&
    Q.AccessKeyId.length > 0 &&
    Q.SecretAccessKey.length > 0 &&
    Q.SessionToken.length > 0
  );
}
var yV0 = async () => {
  await new BS1.STSClient().send(new BS1.GetCallerIdentityCommand({}));
};
async function pg2() {
  try {
    (F1("Clearing AWS credential provider cache"),
      await dg2.fromIni({ ignoreCache: !0 })(),
      F1("AWS credential provider cache refreshed"));
  } catch (A) {
    F1("Failed to clear AWS credential cache (this is expected if no credentials are configured)");
  }
}
import { exec as EF6 } from "child_process";
var NF6 = 300000;
function ED() {
  let A = EQ(process.env.CLAUDE_CODE_USE_BEDROCK) || EQ(process.env.CLAUDE_CODE_USE_VERTEX),
    Q = (E2() || {}).apiKeyHelper,
    Z = process.env.ANTHROPIC_AUTH_TOKEN || Q || process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR,
    { source: G } = xF(FF(), { skipRetrievingKeyFromApiKeyHelper: !0 });
  return !(A || Z || G === "ANTHROPIC_API_KEY" || G === "apiKeyHelper");
}
function Mj() {
  if (process.env.ANTHROPIC_AUTH_TOKEN) return { source: "ANTHROPIC_AUTH_TOKEN", hasToken: !0 };
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN) return { source: "CLAUDE_CODE_OAUTH_TOKEN", hasToken: !0 };
  if (n20()) return { source: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR", hasToken: !0 };
  if (ce()) return { source: "apiKeyHelper", hasToken: !0 };
  let Q = F3();
  if (IP(Q?.scopes) && Q?.accessToken) return { source: "claude.ai", hasToken: !0 };
  return { source: "none", hasToken: !1 };
}
function oJ(A) {
  let { key: B } = xF(A);
  return B;
}
function ng2(A) {
  let { key: B, source: Q } = xF(A, { skipRetrievingKeyFromApiKeyHelper: !0 });
  return B !== null && Q !== "none";
}
function xF(A, B = {}) {
  if (A && process.env.ANTHROPIC_API_KEY) return { key: process.env.ANTHROPIC_API_KEY, source: "ANTHROPIC_API_KEY" };
  if (EQ(!1)) {
    let G = a20();
    if (G) return { key: G, source: "ANTHROPIC_API_KEY" };
    if (
      !process.env.ANTHROPIC_API_KEY &&
      !process.env.CLAUDE_CODE_OAUTH_TOKEN &&
      !process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR
    )
      throw new Error("ANTHROPIC_API_KEY or CLAUDE_CODE_OAUTH_TOKEN env var is required");
    if (process.env.ANTHROPIC_API_KEY) return { key: process.env.ANTHROPIC_API_KEY, source: "ANTHROPIC_API_KEY" };
    return { key: null, source: "none" };
  }
  if (
    process.env.ANTHROPIC_API_KEY &&
    H0().customApiKeyResponses?.approved?.includes(ND(process.env.ANTHROPIC_API_KEY))
  )
    return { key: process.env.ANTHROPIC_API_KEY, source: "ANTHROPIC_API_KEY" };
  let Q = a20();
  if (Q) return { key: Q, source: "ANTHROPIC_API_KEY" };
  if (B.skipRetrievingKeyFromApiKeyHelper) {
    if (QS1()) return { key: null, source: "apiKeyHelper" };
  } else {
    let G = ce();
    if (G) return { key: G, source: "apiKeyHelper" };
  }
  let Z = uZ1();
  if (Z) return Z;
  return { key: null, source: "none" };
}
function QS1() {
  return (E2() || {}).apiKeyHelper;
}
function ag2() {
  let A = QS1();
  if (!A) return !1;
  let B = D8("projectSettings"),
    Q = D8("localSettings");
  return B?.apiKeyHelper === A || Q?.apiKeyHelper === A;
}
function LF6() {
  let A = process.env.CLAUDE_CODE_API_KEY_HELPER_TTL_MS;
  if (A) {
    let B = parseInt(A, 10);
    if (!Number.isNaN(B) && B >= 0) return B;
    d0(`Found CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var, but it was not a valid number. Got ${A}`);
  }
  return NF6;
}
var ce = p20(() => {
  let A = QS1();
  if (!A) return null;
  if (ag2()) {
    if (!kM(!0)) {
      let Q = new Error(
        "Security: apiKeyHelper executed before workspace trust is confirmed. If you see this message, post in #claude-code-feedback.",
      );
      (mk("apiKeyHelper invoked before trust check", Q), Y1("tengu_apiKeyHelper_missing_trust", {}));
    }
  }
  try {
    let B = W3(A)?.toString().trim();
    if (!B) throw new Error("apiKeyHelper did not return a valid value");
    return B;
  } catch (B) {
    let Q = n1.red("Error getting API key from apiKeyHelper (in settings or ~/.claude.json):");
    if (B instanceof Error && "stderr" in B) console.error(Q, String(B.stderr));
    else if (B instanceof Error) console.error(Q, B.message);
    else console.error(Q, B);
    return " ";
  }
}, LF6());
function sg2() {
  ce.cache.clear();
}
function rg2() {
  if (QS1()) {
    if (ag2()) {
      if (!kM(!0)) return;
    }
  }
  ce();
}
var MF6 = 3600000;
async function OF6() {
  let A = E2()?.awsAuthRefresh;
  if (!A) return !1;
  try {
    return (
      F1("Fetching AWS caller identity for AWS auth refresh command"),
      await yV0(),
      F1("Fetched AWS caller identity, skipping AWS auth refresh command"),
      !1
    );
  } catch {
    return (
      F1("Running AWS auth refresh command"),
      new Promise((B) => {
        let Q = EF6(A);
        (Q.stdout.on("data", (Z) => {
          console.log(Z);
        }),
          Q.stderr.on("data", (Z) => {
            console.error(Z);
          }),
          Q.on("close", (Z) => {
            if (Z === 0) (F1("AWS auth refresh completed successfully"), B(!0));
            else {
              let G = n1.red("Error running awsAuthRefresh (in settings or ~/.claude.json):");
              (console.error(G), B(!1));
            }
          }));
      })
    );
  }
}
async function RF6() {
  let A = E2()?.awsCredentialExport;
  if (!A) return null;
  try {
    return (
      F1("Fetching AWS caller identity for credential export command"),
      await yV0(),
      F1("Fetched AWS caller identity, skipping AWS credential export command"),
      null
    );
  } catch {
    try {
      F1("Running AWS credential export command");
      let B = W3(A)?.toString().trim();
      if (!B) throw new Error("awsCredentialExport did not return a valid value");
      let Q = JSON.parse(B);
      if (!lg2(Q)) throw new Error("awsCredentialExport did not return valid AWS STS output structure");
      return (
        F1("AWS credentials retrieved from awsCredentialExport"),
        {
          accessKeyId: Q.Credentials.AccessKeyId,
          secretAccessKey: Q.Credentials.SecretAccessKey,
          sessionToken: Q.Credentials.SessionToken,
        }
      );
    } catch (B) {
      let Q = n1.red("Error getting AWS credentials from awsCredentialExport (in settings or ~/.claude.json):");
      if (B instanceof Error && "stderr" in B) console.error(Q, String(B.stderr));
      else if (B instanceof Error) console.error(Q, B.message);
      else console.error(Q, B);
      return null;
    }
  }
}
var E31 = p20(async () => {
  let A = await OF6(),
    B = await RF6();
  if (A || B) await pg2();
  return B;
}, MF6);
function og2() {
  E31.cache.clear();
}
function ND(A) {
  return A.slice(-20);
}
var uZ1 = YA(() => {
  if (process.platform === "darwin") {
    let B = h51();
    try {
      let Q = W3(`security find-generic-password -a $USER -w -s "${B}"`);
      if (Q) return { key: Q, source: "/login managed key" };
    } catch (Q) {
      U1(Q, k3A);
    }
  }
  let A = H0();
  if (!A.primaryApiKey) return null;
  return { key: A.primaryApiKey, source: "/login managed key" };
});
function TF6(A) {
  return /^[a-zA-Z0-9-_]+$/.test(A);
}
function OjA(A) {
  if (!TF6(A))
    throw new Error(
      "Invalid API key format. API key must contain only alphanumeric characters, dashes, and underscores.",
    );
  let B = H0();
  if ((Au2(), process.platform === "darwin"))
    try {
      let Z = h51();
      W3(`security add-generic-password -a $USER -s "${Z}" -w ${A}`);
    } catch (Z) {
      (U1(Z, y3A), (B.primaryApiKey = A));
    }
  else B.primaryApiKey = A;
  if (!B.customApiKeyResponses) B.customApiKeyResponses = { approved: [], rejected: [] };
  if (!B.customApiKeyResponses.approved) B.customApiKeyResponses.approved = [];
  let Q = ND(A);
  if (!B.customApiKeyResponses.approved.includes(Q)) B.customApiKeyResponses.approved.push(Q);
  (TA(B), uZ1.cache.clear?.());
}
function tg2(A) {
  let B = H0(),
    Q = ND(A);
  return B.customApiKeyResponses?.approved?.includes(Q) ?? !1;
}
function eg2() {
  Au2();
  let A = H0();
  ((A.primaryApiKey = void 0), TA(A), uZ1.cache.clear?.());
}
function Au2() {
  if (process.platform === "darwin")
    try {
      let A = h51();
      W3(`security delete-generic-password -a $USER -s "${A}"`);
    } catch (A) {
      U1(A, S3A);
    }
}
function mZ1(A) {
  if (!IP(A.scopes)) return { success: !0 };
  if (!A.refreshToken || !A.expiresAt) return { success: !0 };
  try {
    let B = IH(),
      Q = B.read() || {};
    Q.claudeAiOauth = {
      accessToken: A.accessToken,
      refreshToken: A.refreshToken,
      expiresAt: A.expiresAt,
      scopes: A.scopes,
      subscriptionType: A.subscriptionType,
    };
    let Z = B.update(Q);
    return (F3.cache?.clear?.(), vR1(), Z);
  } catch (B) {
    return (U1(B, b3A), { success: !1, warning: "Failed to save OAuth tokens" });
  }
}
var F3 = YA(() => {
  if (process.env.CLAUDE_CODE_OAUTH_TOKEN)
    return {
      accessToken: process.env.CLAUDE_CODE_OAUTH_TOKEN,
      refreshToken: null,
      expiresAt: null,
      scopes: ["user:inference"],
      subscriptionType: null,
    };
  let A = n20();
  if (A)
    return { accessToken: A, refreshToken: null, expiresAt: null, scopes: ["user:inference"], subscriptionType: null };
  try {
    let Z = IH().read()?.claudeAiOauth;
    if (!Z?.accessToken) return null;
    return Z;
  } catch (B) {
    return (U1(B, v3A), null);
  }
});
async function Yv(A = 0) {
  let Q = F3();
  if (!Q?.refreshToken || !$q1(Q.expiresAt)) return !1;
  if ((F3.cache?.clear?.(), (Q = F3()), !Q?.refreshToken || !$q1(Q.expiresAt))) return !1;
  let Z = IQ();
  w1().mkdirSync(Z);
  let Y;
  try {
    Y = await ig2.lock(Z);
  } catch (I) {
    if (I.code === "ELOCKED") {
      if (A < 5) return (await new Promise((W) => setTimeout(W, 1000 + Math.random() * 1000)), Yv(A + 1));
      return !1;
    }
    return (U1(I, x3A), !1);
  }
  try {
    if ((F3.cache?.clear?.(), (Q = F3()), !Q?.refreshToken || !$q1(Q.expiresAt))) return !1;
    let I = await NjA(Q.refreshToken);
    return (mZ1({ ...I, scopes: Q.scopes }), F3.cache?.clear?.(), !0);
  } catch (I) {
    return (U1(I instanceof Error ? I : new Error(String(I)), _3A), !1);
  } finally {
    await Y();
  }
}
function b2() {
  if (!ED()) return !1;
  return IP(F3()?.scopes);
}
function Bu2() {
  if (EQ(process.env.CLAUDE_CODE_USE_BEDROCK) || EQ(process.env.CLAUDE_CODE_USE_VERTEX)) return !1;
  if (b2()) return !1;
  return !0;
}
function TZ() {
  return ED() ? H0().oauthAccount : void 0;
}
function kV() {
  let A = PZ();
  return A === "max" || A === "enterprise" || A === "team" || A === null;
}
function _R1() {
  return b2() && kV();
}
function PZ() {
  if (JF2()) return WF2();
  if (!ED()) return null;
  let A = F3();
  if (!A) return null;
  return A.subscriptionType ?? null;
}
function ZS1() {
  switch (PZ()) {
    case "enterprise":
      return "Claude Enterprise";
    case "team":
      return "Claude Team";
    case "max":
      return "Claude Max";
    case "pro":
      return "Claude Pro";
    default:
      return "Claude API";
  }
}
function le() {
  return !!(process.env.CLAUDE_CODE_USE_BEDROCK || process.env.CLAUDE_CODE_USE_VERTEX);
}
function Qu2() {
  return (E2() || {}).otelHeadersHelper;
}
function dZ1() {
  let A = Qu2();
  if (!A) return !1;
  let B = D8("projectSettings"),
    Q = D8("localSettings");
  return B?.otelHeadersHelper === A || Q?.otelHeadersHelper === A;
}
function Zu2() {
  let A = Qu2();
  if (!A) return {};
  if (dZ1()) {
    if (!kM(!0)) return {};
  }
  try {
    let B = W3(A)?.toString().trim();
    if (!B) throw new Error("otelHeadersHelper did not return a valid value");
    let Q = JSON.parse(B);
    if (typeof Q !== "object" || Q === null || Array.isArray(Q))
      throw new Error("otelHeadersHelper must return a JSON object with string key-value pairs");
    for (let [Z, G] of Object.entries(Q))
      if (typeof G !== "string")
        throw new Error(`otelHeadersHelper returned non-string value for key "${Z}": ${typeof G}`);
    return Q;
  } catch (B) {
    throw (
      U1(
        new Error(
          `Error getting OpenTelemetry headers from otelHeadersHelper (in settings): ${B instanceof Error ? B.message : String(B)}`,
        ),
        f3A,
      ),
      B
    );
  }
}
function PF6(A) {
  return A === "max" || A === "pro";
}
function GS1() {
  let A = PZ();
  return b2() && A !== null && PF6(A);
}
var Jc2 = A1(Qm2(), 1),
  Xc2 = A1(cV0(), 1),
  Fc2 = A1(pV0(), 1),
  Vc2 = A1(Wc2(), 1);
import zz6 from "assert";
var Dz6 = () =>
    Promise.resolve()
      .then(() => A1(SV0(), 1))
      .then(({ fromNodeProviderChain: A }) =>
        A({
          clientConfig: {
            requestHandler: new Xc2.FetchHttpHandler({
              requestInit: (B) => {
                return { ...B };
              },
            }),
          },
        }),
      )
      .catch((A) => {
        throw new Error(
          `Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${A.message}`,
        );
      }),
  Kc2 = async (A, B) => {
    zz6(A.method, "Expected request method property to be set");
    let Q = await (B.providerChainResolver ? B.providerChainResolver() : Dz6()),
      Z = await Cz6(
        () => {
          if (B.awsAccessKey) process.env.AWS_ACCESS_KEY_ID = B.awsAccessKey;
          if (B.awsSecretKey) process.env.AWS_SECRET_ACCESS_KEY = B.awsSecretKey;
          if (B.awsSessionToken) process.env.AWS_SESSION_TOKEN = B.awsSessionToken;
        },
        () => Q(),
      ),
      G = new Vc2.SignatureV4({ service: "bedrock", region: B.regionName, credentials: Z, sha256: Jc2.Sha256 }),
      Y = new URL(B.url),
      I = !A.headers
        ? {}
        : Symbol.iterator in A.headers
          ? Object.fromEntries(Array.from(A.headers).map((X) => [...X]))
          : { ...A.headers };
    (delete I.connection, (I.host = Y.hostname));
    let W = new Fc2.HttpRequest({
      method: A.method.toUpperCase(),
      protocol: Y.protocol,
      path: Y.pathname,
      headers: I,
      body: A.body,
    });
    return (await G.sign(W)).headers;
  },
  Cz6 = async (A, B) => {
    let Q = { ...process.env };
    try {
      return (A(), await B());
    } finally {
      process.env = Q;
    }
  };
var eo2 = A1(Sl2(), 1),
  Gk1 = A1(DK0(), 1),
  At2 = A1(cV0(), 1);
var U3 = A1(wi2(), 1),
  zv = A1(po2(), 1),
  fR6 = async (A, B) => {
    let Q = U3.map({}),
      Z = A.body,
      G = U3.take(Z, { message: U3.expectString });
    Object.assign(Q, G);
    let Y = new zv.InternalServerException({ $metadata: Bk1(A), ...Q });
    return U3.decorateServiceException(Y, A.body);
  },
  hR6 = async (A, B) => {
    let Q = U3.map({}),
      Z = A.body,
      G = U3.take(Z, {
        message: U3.expectString,
        originalMessage: U3.expectString,
        originalStatusCode: U3.expectInt32,
      });
    Object.assign(Q, G);
    let Y = new zv.ModelStreamErrorException({ $metadata: Bk1(A), ...Q });
    return U3.decorateServiceException(Y, A.body);
  },
  gR6 = async (A, B) => {
    let Q = U3.map({}),
      Z = A.body,
      G = U3.take(Z, { message: U3.expectString });
    Object.assign(Q, G);
    let Y = new zv.ThrottlingException({ $metadata: Bk1(A), ...Q });
    return U3.decorateServiceException(Y, A.body);
  },
  uR6 = async (A, B) => {
    let Q = U3.map({}),
      Z = A.body,
      G = U3.take(Z, { message: U3.expectString });
    Object.assign(Q, G);
    let Y = new zv.ValidationException({ $metadata: Bk1(A), ...Q });
    return U3.decorateServiceException(Y, A.body);
  },
  io2 = (A, B) => {
    return B.eventStreamMarshaller.deserialize(A, async (Q) => {
      if (Q.chunk != null) return { chunk: await cR6(Q.chunk, B) };
      if (Q.internalServerException != null)
        return { internalServerException: await mR6(Q.internalServerException, B) };
      if (Q.modelStreamErrorException != null)
        return { modelStreamErrorException: await dR6(Q.modelStreamErrorException, B) };
      if (Q.validationException != null) return { validationException: await pR6(Q.validationException, B) };
      if (Q.throttlingException != null) return { throttlingException: await lR6(Q.throttlingException, B) };
      return { $unknown: A };
    });
  },
  mR6 = async (A, B) => {
    let Q = { ...A, body: await JG1(A.body, B) };
    return fR6(Q, B);
  },
  dR6 = async (A, B) => {
    let Q = { ...A, body: await JG1(A.body, B) };
    return hR6(Q, B);
  },
  cR6 = async (A, B) => {
    let Q = {},
      Z = await JG1(A.body, B);
    return (Object.assign(Q, iR6(Z, B)), Q);
  },
  lR6 = async (A, B) => {
    let Q = { ...A, body: await JG1(A.body, B) };
    return gR6(Q, B);
  },
  pR6 = async (A, B) => {
    let Q = { ...A, body: await JG1(A.body, B) };
    return uR6(Q, B);
  },
  iR6 = (A, B) => {
    return U3.take(A, { bytes: B.base64Decoder });
  },
  Bk1 = (A) => ({
    httpStatusCode: A.statusCode,
    requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"] ?? "",
    extendedRequestId: A.headers["x-amz-id-2"] ?? "",
    cfId: A.headers["x-amz-cf-id"] ?? "",
  }),
  nR6 = (A, B) => U3.collectBody(A, B).then((Q) => B.utf8Encoder(Q)),
  JG1 = (A, B) =>
    nR6(A, B).then((Q) => {
      if (Q.length) return JSON.parse(Q);
      return {};
    });
function no2(A) {
  if (A[Symbol.asyncIterator]) return A;
  let B = A.getReader();
  return {
    async next() {
      try {
        let Q = await B.read();
        if (Q?.done) B.releaseLock();
        return Q;
      } catch (Q) {
        throw (B.releaseLock(), Q);
      }
    },
    async return() {
      let Q = B.cancel();
      return (B.releaseLock(), await Q, { done: !0, value: void 0 });
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
var hH0 = (A) => ((hH0 = Array.isArray), hH0(A)),
  gH0 = hH0;
function Qk1(A) {
  return A != null && typeof A === "object" && !Array.isArray(A);
}
var ao2 = (A) => {
  try {
    return JSON.parse(A);
  } catch (B) {
    return;
  }
};
var so2 = { off: 0, error: 200, warn: 300, info: 400, debug: 500 };
function XG1() {}
function Zk1(A, B, Q) {
  if (!B || so2[A] > so2[Q]) return XG1;
  else return B[A].bind(B);
}
var aR6 = { error: XG1, warn: XG1, info: XG1, debug: XG1 },
  ro2 = new WeakMap();
function oo2(A) {
  let B = A.logger,
    Q = A.logLevel ?? "off";
  if (!B) return aR6;
  let Z = ro2.get(B);
  if (Z && Z[0] === Q) return Z[1];
  let G = { error: Zk1("error", B, Q), warn: Zk1("warn", B, Q), info: Zk1("info", B, Q), debug: Zk1("debug", B, Q) };
  return (ro2.set(B, [Q, G]), G);
}
var uH0 = (A) => new TextDecoder("utf-8").decode(A),
  to2 = (A) => new TextEncoder().encode(A),
  sR6 = () => {
    let A = new eo2.EventStreamMarshaller({ utf8Encoder: uH0, utf8Decoder: to2 });
    return {
      base64Decoder: Gk1.fromBase64,
      base64Encoder: Gk1.toBase64,
      utf8Decoder: to2,
      utf8Encoder: uH0,
      eventStreamMarshaller: A,
      streamCollector: At2.streamCollector,
    };
  };
class Yk1 extends OV {
  static fromSSEResponse(A, B, Q) {
    let Z = !1,
      G = Q ? oo2(Q) : console;
    async function* Y() {
      if (!A.body) throw (B.abort(), new jQ("Attempted to iterate over a response with no body"));
      let W = no2(A.body),
        J = io2(W, sR6());
      for await (let X of J)
        if (X.chunk && X.chunk.bytes) yield { event: "chunk", data: uH0(X.chunk.bytes), raw: [] };
        else if (X.internalServerException) yield { event: "error", data: "InternalServerException", raw: [] };
        else if (X.modelStreamErrorException) yield { event: "error", data: "ModelStreamErrorException", raw: [] };
        else if (X.validationException) yield { event: "error", data: "ValidationException", raw: [] };
        else if (X.throttlingException) yield { event: "error", data: "ThrottlingException", raw: [] };
    }
    async function* I() {
      if (Z) throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
      Z = !0;
      let W = !1;
      try {
        for await (let J of Y()) {
          if (J.event === "chunk")
            try {
              yield JSON.parse(J.data);
            } catch (X) {
              throw (G.error("Could not parse message into JSON:", J.data), G.error("From chunk:", J.raw), X);
            }
          if (J.event === "error") {
            let X = J.data,
              F = ao2(X),
              V = F ? void 0 : X;
            throw n9.generate(void 0, F, V, A.headers);
          }
        }
        W = !0;
      } catch (J) {
        if (rR6(J)) return;
        throw J;
      } finally {
        if (!W) B.abort();
      }
    }
    return new Yk1(I, B);
  }
}
function rR6(A) {
  return (
    typeof A === "object" &&
    A !== null &&
    (("name" in A && A.name === "AbortError") ||
      ("message" in A && String(A.message).includes("FetchRequestCanceledException")))
  );
}
var mH0 = (A) => {
  if (typeof globalThis.process !== "undefined") return globalThis.process.env?.[A]?.trim() ?? void 0;
  if (typeof globalThis.Deno !== "undefined") return globalThis.Deno.env?.get?.(A)?.trim();
  return;
};
var Bt2 = Symbol.for("brand.privateNullableHeaders");
function* oR6(A) {
  if (!A) return;
  if (Bt2 in A) {
    let { values: Z, nulls: G } = A;
    yield* Z.entries();
    for (let Y of G) yield [Y, null];
    return;
  }
  let B = !1,
    Q;
  if (A instanceof Headers) Q = A.entries();
  else if (gH0(A)) Q = A;
  else ((B = !0), (Q = Object.entries(A ?? {})));
  for (let Z of Q) {
    let G = Z[0];
    if (typeof G !== "string") throw new TypeError("expected header name to be a string");
    let Y = gH0(Z[1]) ? Z[1] : [Z[1]],
      I = !1;
    for (let W of Y) {
      if (W === void 0) continue;
      if (B && !I) ((I = !0), yield [G, null]);
      yield [G, W];
    }
  }
}
var dH0 = (A) => {
  let B = new Headers(),
    Q = new Set();
  for (let Z of A) {
    let G = new Set();
    for (let [Y, I] of oR6(Z)) {
      let W = Y.toLowerCase();
      if (!G.has(W)) (B.delete(Y), G.add(W));
      if (I === null) (B.delete(Y), Q.add(W));
      else (B.append(Y, I), Q.delete(W));
    }
  }
  return { [Bt2]: !0, values: B, nulls: Q };
};
function Zt2(A) {
  return A.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent);
}
var Qt2 = Object.freeze(Object.create(null)),
  tR6 = (A = Zt2) =>
    function B(Q, ...Z) {
      if (Q.length === 1) return Q[0];
      let G = !1,
        Y = [],
        I = Q.reduce((F, V, K) => {
          if (/[?#]/.test(V)) G = !0;
          let H = Z[K],
            z = (G ? encodeURIComponent : A)("" + H);
          if (
            K !== Z.length &&
            (H == null ||
              (typeof H === "object" &&
                H.toString === Object.getPrototypeOf(Object.getPrototypeOf(H.hasOwnProperty ?? Qt2) ?? Qt2)?.toString))
          )
            ((z = H + ""),
              Y.push({
                start: F.length + V.length,
                length: z.length,
                error: `Value of type ${Object.prototype.toString.call(H).slice(8, -1)} is not a valid path parameter`,
              }));
          return F + V + (K === Z.length ? "" : z);
        }, ""),
        W = I.split(/[?#]/, 1)[0],
        J = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
        X;
      while ((X = J.exec(W)) !== null)
        Y.push({
          start: X.index,
          length: X[0].length,
          error: `Value "${X[0]}" can't be safely passed as a path parameter`,
        });
      if ((Y.sort((F, V) => F.start - V.start), Y.length > 0)) {
        let F = 0,
          V = Y.reduce((K, H) => {
            let z = " ".repeat(H.start - F),
              D = "^".repeat(H.length);
            return ((F = H.start + H.length), K + z + D);
          }, "");
        throw new jQ(`Path parameters result in path with invalid segments:
${Y.map((K) => K.error).join(`
`)}
${I}
${V}`);
      }
      return I;
    },
  cH0 = tR6(Zt2);
var BEDROCK_VERSION = "bedrock-2023-05-31",
  AT6 = new Set(["/v1/complete", "/v1/messages", "/v1/messages?beta=true"]);
class Ik1 extends C7 {
  constructor({
    awsRegion: A = mH0("AWS_REGION") ?? "us-east-1",
    baseURL: B = mH0("ANTHROPIC_BEDROCK_BASE_URL") ?? `https://bedrock-runtime.${A}.amazonaws.com`,
    awsSecretKey: Q = null,
    awsAccessKey: Z = null,
    awsSessionToken: G = null,
    providerChainResolver: Y = null,
    ...I
  } = {}) {
    super({ baseURL: B, ...I });
    ((this.skipAuth = !1),
      (this.messages = BT6(this)),
      (this.completions = new O_(this)),
      (this.beta = QT6(this)),
      (this.awsSecretKey = Q),
      (this.awsAccessKey = Z),
      (this.awsRegion = A),
      (this.awsSessionToken = G),
      (this.skipAuth = I.skipAuth ?? !1),
      (this.providerChainResolver = Y));
  }
  validateHeaders() {}
  async prepareRequest(A, { url: B, options: Q }) {
    if (this.skipAuth) return;
    let Z = this.awsRegion;
    if (!Z)
      throw new Error(
        "Expected `awsRegion` option to be passed to the client or the `AWS_REGION` environment variable to be present",
      );
    let G = await Kc2(A, {
      url: B,
      regionName: Z,
      awsAccessKey: this.awsAccessKey,
      awsSecretKey: this.awsSecretKey,
      awsSessionToken: this.awsSessionToken,
      fetchOptions: this.fetchOptions,
      providerChainResolver: this.providerChainResolver,
    });
    A.headers = dH0([G, A.headers]).values;
  }
  async buildRequest(A) {
    if (((A.__streamClass = Yk1), Qk1(A.body))) A.body = { ...A.body };
    if (Qk1(A.body)) {
      if (!A.body.anthropic_version) A.body.anthropic_version = BEDROCK_VERSION;
      if (A.headers && !A.body.anthropic_beta) {
        let B = dH0([A.headers]).values.get("anthropic-beta");
        if (B != null) A.body.anthropic_beta = B.split(",");
      }
    }
    if (AT6.has(A.path) && A.method === "post") {
      if (!Qk1(A.body)) throw new Error("Expected request body to be an object for post /v1/messages");
      let B = A.body.model;
      A.body.model = void 0;
      let Q = A.body.stream;
      if (((A.body.stream = void 0), Q)) A.path = cH0`/model/${B}/invoke-with-response-stream`;
      else A.path = cH0`/model/${B}/invoke`;
    }
    return super.buildRequest(A);
  }
}
function BT6(A) {
  let B = new Uq(A);
  return (delete B.batches, delete B.countTokens, B);
}
function QT6(A) {
  let B = new iz(A);
  return (delete B.promptCaching, delete B.messages.batches, delete B.messages.countTokens, B);
}
var XBB = A1(sD0(), 1);
var sk1 = (A) => {
  if (typeof globalThis.process !== "undefined") return globalThis.process.env?.[A]?.trim() ?? void 0;
  if (typeof globalThis.Deno !== "undefined") return globalThis.Deno.env?.get?.(A)?.trim();
  return;
};
var rD0 = (A) => ((rD0 = Array.isArray), rD0(A)),
  oD0 = rD0;
function rk1(A) {
  return A != null && typeof A === "object" && !Array.isArray(A);
}
var WBB = Symbol.for("brand.privateNullableHeaders");
function* lv6(A) {
  if (!A) return;
  if (WBB in A) {
    let { values: Z, nulls: G } = A;
    yield* Z.entries();
    for (let Y of G) yield [Y, null];
    return;
  }
  let B = !1,
    Q;
  if (A instanceof Headers) Q = A.entries();
  else if (oD0(A)) Q = A;
  else ((B = !0), (Q = Object.entries(A ?? {})));
  for (let Z of Q) {
    let G = Z[0];
    if (typeof G !== "string") throw new TypeError("expected header name to be a string");
    let Y = oD0(Z[1]) ? Z[1] : [Z[1]],
      I = !1;
    for (let W of Y) {
      if (W === void 0) continue;
      if (B && !I) ((I = !0), yield [G, null]);
      yield [G, W];
    }
  }
}
var JBB = (A) => {
  let B = new Headers(),
    Q = new Set();
  for (let Z of A) {
    let G = new Set();
    for (let [Y, I] of lv6(Z)) {
      let W = Y.toLowerCase();
      if (!G.has(W)) (B.delete(Y), G.add(W));
      if (I === null) (B.delete(Y), Q.add(W));
      else (B.append(Y, I), Q.delete(W));
    }
  }
  return { [WBB]: !0, values: B, nulls: Q };
};
var VERTEX_VERSION = "vertex-2023-10-16",
  iv6 = new Set(["/v1/messages", "/v1/messages?beta=true"]);
class ok1 extends C7 {
  constructor({
    baseURL: A = sk1("ANTHROPIC_VERTEX_BASE_URL"),
    region: B = sk1("CLOUD_ML_REGION") ?? null,
    projectId: Q = sk1("ANTHROPIC_VERTEX_PROJECT_ID") ?? null,
    ...Z
  } = {}) {
    if (!B)
      throw new Error(
        "No region was given. The client should be instantiated with the `region` option or the `CLOUD_ML_REGION` environment variable should be set.",
      );
    super({
      baseURL:
        A || (B === "global" ? "https://aiplatform.googleapis.com/v1" : `https://${B}-aiplatform.googleapis.com/v1`),
      ...Z,
    });
    if (
      ((this.messages = nv6(this)),
      (this.beta = av6(this)),
      (this.region = B),
      (this.projectId = Q),
      (this.accessToken = Z.accessToken ?? null),
      Z.authClient && Z.googleAuth)
    )
      throw new Error("You cannot provide both `authClient` and `googleAuth`. Please provide only one of them.");
    else if (Z.authClient) this._authClientPromise = Promise.resolve(Z.authClient);
    else
      ((this._auth = Z.googleAuth ?? new XBB.GoogleAuth({ scopes: "https://www.googleapis.com/auth/cloud-platform" })),
        (this._authClientPromise = this._auth.getClient()));
  }
  validateHeaders() {}
  async prepareOptions(A) {
    let B = await this._authClientPromise,
      Q = await B.getRequestHeaders(),
      Z = B.projectId ?? Q["x-goog-user-project"];
    if (!this.projectId && Z) this.projectId = Z;
    A.headers = JBB([Q, A.headers]);
  }
  async buildRequest(A) {
    if (rk1(A.body)) A.body = { ...A.body };
    if (rk1(A.body)) {
      if (!A.body.anthropic_version) A.body.anthropic_version = VERTEX_VERSION;
    }
    if (iv6.has(A.path) && A.method === "post") {
      if (!this.projectId)
        throw new Error(
          "No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.",
        );
      if (!rk1(A.body)) throw new Error("Expected request body to be an object for post /v1/messages");
      let B = A.body.model;
      A.body.model = void 0;
      let Z = (A.body.stream ?? !1) ? "streamRawPredict" : "rawPredict";
      A.path = `/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/${B}:${Z}`;
    }
    if (
      A.path === "/v1/messages/count_tokens" ||
      (A.path == "/v1/messages/count_tokens?beta=true" && A.method === "post")
    ) {
      if (!this.projectId)
        throw new Error(
          "No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.",
        );
      A.path = `/projects/${this.projectId}/locations/${this.region}/publishers/anthropic/models/count-tokens:rawPredict`;
    }
    return super.buildRequest(A);
  }
}
function nv6(A) {
  let B = new Uq(A);
  return (delete B.batches, B);
}
function av6(A) {
  let B = new iz(A);
  return (delete B.messages.batches, B);
}
var FBB = A1(sD0(), 1);
import { join as tk1 } from "path";
function tD0() {
  return {
    error: (A, ...B) => console.error("[Anthropic SDK ERROR]", A, ...B),
    warn: (A, ...B) => console.error("[Anthropic SDK WARN]", A, ...B),
    info: (A, ...B) => console.error("[Anthropic SDK INFO]", A, ...B),
    debug: (A, ...B) => console.error("[Anthropic SDK DEBUG]", A, ...B),
  };
}
function sv6() {
  return async (A, B) => {
    let Q = globalThis.fetch,
      Z;
    if (B?.method === "POST" && B.body)
      try {
        let Y = JSON.parse(B.body),
          I = {};
        if (
          (Object.keys(Y).forEach((W) => {
            if (!["tools", "system", "messages"].includes(W)) I[W] = Y[W];
          }),
          "tools" in Y)
        )
          I.tools = Y.tools;
        if ("system" in Y) I.system = Y.system;
        if ("messages" in Y) I.messages = Y.messages;
        ((Z = new Date().toISOString()),
          w1().mkdirSync(tk1(IQ(), "dump-prompts", U2())),
          w1().writeFileSync(tk1(IQ(), "dump-prompts", U2(), `${Z}.json`), JSON.stringify(I, null, 2), {
            encoding: "utf-8",
            flush: !0,
          }));
      } catch (Y) {}
    let G = await Q(A, B);
    if (Z && G.ok)
      try {
        let Y = G.clone();
        if (Y.headers.get("content-type")?.includes("text/event-stream") && Y.body) {
          let J = Y.body.getReader(),
            X = new TextDecoder(),
            F = "";
          try {
            while (!0) {
              let { done: H, value: z } = await J.read();
              if (H) break;
              F += X.decode(z, { stream: !0 });
            }
          } finally {
            J.releaseLock();
          }
          let V = F.split(
              `

`,
            ).filter(Boolean),
            K = [];
          for (let H of V) {
            let z = H.split(`
`);
            for (let D of z)
              if (D.startsWith("data: ")) {
                let C = D.slice(6);
                if (C !== "[DONE]")
                  try {
                    K.push(JSON.parse(C));
                  } catch {}
              }
          }
          w1().writeFileSync(
            tk1(IQ(), "dump-prompts", U2(), `${Z}-response.json`),
            JSON.stringify({ stream: !0, chunks: K }, null, 2),
            { encoding: "utf-8", flush: !0 },
          );
        } else {
          let J = await Y.json();
          w1().writeFileSync(tk1(IQ(), "dump-prompts", U2(), `${Z}-response.json`), JSON.stringify(J, null, 2), {
            encoding: "utf-8",
            flush: !0,
          });
        }
      } catch (Y) {}
    return G;
  };
}
async function fF({ apiKey: A, maxRetries: B = 0, model: Q, isNonInteractiveSession: Z, isSmallFastModel: G = !1 }) {
  let Y = { "x-app": "cli", "User-Agent": FM(), ...ov6() };
  if ((await Yv(), !b2())) rv6(Y);
  let I = !1,
    W = {
      defaultHeaders: Y,
      maxRetries: B,
      timeout: parseInt(process.env.API_TIMEOUT_MS || String(600000), 10),
      dangerouslyAllowBrowser: !0,
      fetchOptions: dX2(),
      ...(I && { fetch: sv6() }),
    };
  if (process.env.CLAUDE_CODE_USE_BEDROCK) {
    let X =
        G && process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION
          ? process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION
          : Pn(),
      F = {
        ...W,
        awsRegion: X,
        ...(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH && { skipAuth: !0 }),
        ...(yg() && { logger: tD0() }),
      };
    if (process.env.AWS_BEARER_TOKEN_BEDROCK)
      ((F.skipAuth = !0),
        (F.defaultHeaders = { ...F.defaultHeaders, Authorization: `Bearer ${process.env.AWS_BEARER_TOKEN_BEDROCK}` }));
    else {
      let V = await E31();
      if (V)
        ((F.awsAccessKey = V.accessKeyId), (F.awsSecretKey = V.secretAccessKey), (F.awsSessionToken = V.sessionToken));
    }
    return new Ik1(F);
  }
  if (process.env.CLAUDE_CODE_USE_VERTEX) {
    let X =
        process.env.GCLOUD_PROJECT ||
        process.env.GOOGLE_CLOUD_PROJECT ||
        process.env.gcloud_project ||
        process.env.google_cloud_project,
      F = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials,
      V = process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH
        ? { getClient: () => ({ getRequestHeaders: () => ({}) }) }
        : new FBB.GoogleAuth({
            scopes: ["https://www.googleapis.com/auth/cloud-platform"],
            ...(X || F ? {} : { projectId: process.env.ANTHROPIC_VERTEX_PROJECT_ID }),
          }),
      K = { ...W, region: t8A(Q), googleAuth: V, ...(yg() && { logger: tD0() }) };
    return new ok1(K);
  }
  let J = {
    apiKey: b2() ? null : A || oJ(Z),
    authToken: b2() ? F3()?.accessToken : void 0,
    ...{},
    ...W,
    ...(yg() && { logger: tD0() }),
  };
  return new YP(J);
}
function rv6(A) {
  let B = process.env.ANTHROPIC_AUTH_TOKEN || ce();
  if (B) A.Authorization = `Bearer ${B}`;
}
function ov6() {
  let A = {},
    B = process.env.ANTHROPIC_CUSTOM_HEADERS;
  if (!B) return A;
  let Q = B.split(/\n|\r\n/);
  for (let Z of Q) {
    if (!Z.trim()) continue;
    let G = Z.match(/^\s*(.*?)\s*:\s*(.*?)\s*$/);
    if (G) {
      let [, Y, I] = G;
      if (Y && I !== void 0) A[Y] = I;
    }
  }
  return A;
}
var Hb1 = A1(V1(), 1);
var GLOB_TOOL_NAME = "Glob",
  GLOB_TOOL_DESCRIPTION = `- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the Agent tool instead
- You have the capability to call multiple tools in a single response. It is always better to speculatively perform multiple searches as a batch that are potentially useful.`;
var TASK_TOOL_NAME = "Task";
var GREP_TOOL_NAME = "Grep";
function getGrepToolDescription() {
  return `A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${GREP_TOOL_NAME} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${BASH_TOOL_NAME} command. The ${GREP_TOOL_NAME} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
  - Use ${TASK_TOOL_NAME} tool for open-ended searches requiring multiple rounds
  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`;
}
var EDIT_TOOL_NAME = "Edit";
var NOTEBOOK_EDIT_TOOL_NAME = "NotebookEdit";
var MULTI_EDIT_TOOL_NAME = "MultiEdit",
  MULTI_EDIT_TOOL_DESCRIPTION = `This is a tool for making multiple edits to a single file in one operation. It is built on top of the ${EDIT_TOOL_NAME} tool and allows you to perform multiple find-and-replace operations efficiently. Prefer this tool over the ${EDIT_TOOL_NAME} tool when you need to make multiple edits to the same file.

Before using this tool:

1. Use the ${READ_TOOL_NAME} tool to understand the file's contents and context
2. Verify the directory path is correct

To make multiple file edits, provide the following:
1. file_path: The absolute path to the file to modify (must be absolute, not relative)
2. edits: An array of edit operations to perform, where each edit contains:
   - old_string: The text to replace (must match the file contents exactly, including all whitespace and indentation)
   - new_string: The edited text to replace the old_string
   - replace_all: Replace all occurences of old_string. This parameter is optional and defaults to false.

IMPORTANT:
- All edits are applied in sequence, in the order they are provided
- Each edit operates on the result of the previous edit
- All edits must be valid for the operation to succeed - if any edit fails, none will be applied
- This tool is ideal when you need to make several changes to different parts of the same file
- For Jupyter notebooks (.ipynb files), use the ${NOTEBOOK_EDIT_TOOL_NAME} instead

CRITICAL REQUIREMENTS:
1. All edits follow the same requirements as the single Edit tool
2. The edits are atomic - either all succeed or none are applied
3. Plan your edits carefully to avoid conflicts between sequential operations

WARNING:
- The tool will fail if edits.old_string doesn't match the file contents exactly (including whitespace)
- The tool will fail if edits.old_string and edits.new_string are the same
- Since edits are applied in sequence, ensure that earlier edits don't affect the text that later edits are trying to find

When making edits:
- Ensure all edits result in idiomatic, correct code
- Do not leave the code in a broken state
- Always use absolute file paths (starting with /)
- Only use emojis if the user explicitly requests it. Avoid adding emojis to files unless asked.
- Use replace_all for replacing and renaming strings across the file. This parameter is useful if you want to rename a variable for instance.

If you want to create a new file, use:
- A new file path, including dir name if needed
- First edit: empty old_string and the new file's contents as new_string
- Subsequent edits: normal edit operations on the created content`;
var WRITE_TOOL_NAME = "Write";
var WRITE_TOOL_DESCRIPTION = `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.
- If this is an existing file, you MUST use the ${READ_TOOL_NAME} tool first to read the file's contents. This tool will fail if you did not read the file first.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked.`;
var WEB_FETCH_TOOL_NAME = "WebFetch",
  HBB = `
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
function zBB(A, B) {
  return `
Web page content:
---
${A}
---

${B}

Provide a concise response based only on the content above. In your response:
 - Enforce a strict 125-character maximum for quotes from any source document. Open Source Software is ok as long as we respect the license.
 - Use quotation marks for exact language from articles; any language outside of the quotation should never be word-for-word the same.
 - You are not a lawyer and never comment on the legality of your own prompts and responses.
 - Never produce or reproduce exact song lyrics.
`;
}
var WEB_SEARCH_TOOL_NAME = "WebSearch",
  DBB = `
- Allows Claude to search the web and use the results to inform responses
- Provides up-to-date information for current events and recent data
- Returns search result information formatted as search result blocks
- Use this tool for accessing information beyond Claude's knowledge cutoff
- Searches are performed automatically within a single API call

Usage notes:
  - Domain filtering is supported to include or block specific websites
  - Web search is only available in the US
  - Account for "Today's date" in <env>. For example, if <env> says "Today's date: 2025-07-01", and the user wants the latest docs, do not use 2024 in the search query. Use 2025.
`;
var MAX_INPUT_TOKENS = 180000,
  TARGET_INPUT_TOKENS = 40000,
  READONLY_TOOLS = [BASH_TOOL_NAME, GLOB_TOOL_NAME, GREP_TOOL_NAME, READ_TOOL_NAME, WEB_FETCH_TOOL_NAME, WEB_SEARCH_TOOL_NAME],
  EDIT_TOOLS = [EDIT_TOOL_NAME, MULTI_EDIT_TOOL_NAME, WRITE_TOOL_NAME, NOTEBOOK_EDIT_TOOL_NAME];
function noOpFunction() {
  return;
}
import { randomUUID as randomUUID } from "crypto";
function getSystemPromptHeader() {
  return "You are Claude Code, Anthropic's official CLI for Claude.";
}
import { createHash as createHash } from "crypto";
import { EOL as EOL } from "os";
import { isAbsolute as isAbsolute, resolve as resolve } from "path";
import { createHash as createHash2 } from "crypto";
import { join as joinPath } from "path";
var CLAUDE_AI_CODE_URL = "https://claude.ai/code";
var TODO_WRITE_TOOL_DESCRIPTION = `Use this tool to create and manage a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.
It also helps the user understand the progress of the task and overall progress of their requests.

## When to Use This Tool
Use this tool proactively in these scenarios:

1. Complex multi-step tasks - When a task requires 3 or more distinct steps or actions
2. Non-trivial and complex tasks - Tasks that require careful planning or multiple operations
3. User explicitly requests todo list - When the user directly asks you to use the todo list
4. User provides multiple tasks - When users provide a list of things to be done (numbered or comma-separated)
5. After receiving new instructions - Immediately capture user requirements as todos
6. When you start working on a task - Mark it as in_progress BEFORE beginning work. Ideally you should only have one todo as in_progress at a time
7. After completing a task - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use This Tool

Skip using this tool when:
1. There is only a single, straightforward task
2. The task is trivial and tracking it provides no organizational benefit
3. The task can be completed in less than 3 trivial steps
4. The task is purely conversational or informational

NOTE that you should not use this tool if there is only one trivial task to do. In this case you are better off just doing the task directly.

## Examples of When to Use the Todo List

<example>
User: I want to add a dark mode toggle to the application settings. Make sure you run the tests and build when you're done!
Assistant: I'll help add a dark mode toggle to your application settings. Let me create a todo list to track this implementation.
*Creates todo list with the following items:*
1. Creating dark mode toggle component in Settings page
2. Adding dark mode state management (context/store)
3. Implementing CSS-in-JS styles for dark theme
4. Updating existing components to support theme switching
5. Running tests and build process, addressing any failures or errors that occur
*Begins working on the first task*

<reasoning>
The assistant used the todo list because:
1. Adding dark mode is a multi-step feature requiring UI, state management, and styling changes
2. The user explicitly requested tests and build be run afterward
3. The assistant inferred that tests and build need to pass by adding "Ensure tests and build succeed" as the final task
</reasoning>
</example>

<example>
User: Help me rename the function getCwd to getCurrentWorkingDirectory across my project
Assistant: Let me first search through your codebase to find all occurrences of 'getCwd'.
*Uses grep or search tools to locate all instances of getCwd in the codebase*
Assistant: I've found 15 instances of 'getCwd' across 8 different files. Let me create a todo list to track these changes.
*Creates todo list with specific items for each file that needs updating*

<reasoning>
The assistant used the todo list because:
1. First, the assistant searched to understand the scope of the task
2. Upon finding multiple occurrences across different files, it determined this was a complex task with multiple steps
3. The todo list helps ensure every instance is tracked and updated systematically
4. This approach prevents missing any occurrences and maintains code consistency
</reasoning>
</example>


<example>
User: I need to implement these features for my e-commerce site: user registration, product catalog, shopping cart, and checkout flow.
Assistant: I'll help implement these features. First, let's add all the features to the todo list.
*Creates a todo list breaking down each feature into specific tasks based on the project architecture*
Assistant: Let's start with user registration. This will involve creating database models, API endpoints, and frontend forms that integrate with your existing authentication system.

<reasoning>
The assistant used the todo list because:
1. The user provided multiple complex features to implement in a comma separated list
2. The todo list helps organize these large features into manageable tasks
3. This approach allows for tracking progress across the entire implementation
</reasoning>
</example>

<example>
User: Can you help optimize my React application? It's rendering slowly and has performance issues.</user>
Assistant: I'll help optimize your React application. First, let me examine your codebase to identify potential performance bottlenecks.
*Reviews component structure, render patterns, state management, and data fetching*
Assistant: After analyzing your codebase, I've identified several performance issues. Let me create a todo list to track our optimization efforts.
*Creates todo list with items like: 1) Implementing memoization for expensive calculations in ProductList, 2) Adding virtualization for long lists in Dashboard, 3) Optimizing image loading in Gallery component, 4) Fixing state update loops in ShoppingCart, 5) Reviewing bundle size and implementing code splitting*
Let's start by implementing memoization for the expensive calculations in your ProductList component.</assistant>

<reasoning>
The assistant used the todo list because:
1. First, the assistant examined the codebase to identify specific performance issues
2. Based on this analysis, it identified multiple optimization opportunities
3. Performance optimization is a non-trivial task requiring multiple steps
4. The todo list helps methodically track improvements across different components
5. This systematic approach ensures all performance bottlenecks are addressed
</reasoning>
</example>

## Examples of When NOT to Use the Todo List

<example>
User: How do I print 'Hello World' in Python?
Assistant: In Python, you can print "Hello World" with this simple code:

python
print("Hello World")

This will output the text "Hello World" to the console when executed.</assistant>

<reasoning>
The assistant did not use the todo list because this is a single, trivial task that can be completed in one step. There's no need to track multiple tasks or steps for such a straightforward request.
</reasoning>
</example>

<example>
User: What does the git status command do?
Assistant: The git status command shows the current state of your working directory and staging area. It displays which changes have been staged, which haven't, and which files aren't being tracked by Git. This is a fundamental command for understanding the current state of your repository before making commits.

<reasoning>
The assistant did not use the todo list because this is an informational request with no actual coding task to complete. The user is simply asking for an explanation, not for the assistant to perform multiple steps or tasks.
</reasoning>
</example>

<example>
User: Can you add a comment to the calculateTotal function to explain what it does?
Assistant: Sure, let me add a comment to the calculateTotal function to explain what it does.
* Uses the ${EDIT_TOOL_NAME} tool to add a comment to the calculateTotal function *

<reasoning>
The assistant did not use the todo list because this is a single, straightforward task confined to one location in the code. Adding a comment doesn't require tracking multiple steps or systematic organization.
</reasoning>
</example>

<example>
User: Run npm install for me and tell me what happens.
Assistant: I'll run the npm install command for you.

*Executes: npm install*

The command completed successfully. Here's the output:
[Output of npm install command]

All dependencies have been installed according to your package.json file.

<reasoning>
The assistant did not use the todo list because this is a single command execution with immediate results. There are no multiple steps to track or organize, making the todo list unnecessary for this straightforward task.
</reasoning>
</example>

## Task States and Management

1. **Task States**: Use these states to track progress:
   - pending: Task not yet started
   - in_progress: Currently working on (limit to ONE task at a time)
   - completed: Task finished successfully

   **IMPORTANT**: Task descriptions must have two forms:
   - content: The imperative form describing what needs to be done (e.g., "Run tests", "Build the project")
   - activeForm: The present continuous form shown during execution (e.g., "Running tests", "Building the project")

2. **Task Management**:
   - Update task status in real-time as you work
   - Mark tasks complete IMMEDIATELY after finishing (don't batch completions)
   - Exactly ONE task must be in_progress at any time (not less, not more)
   - Complete current tasks before starting new ones
   - Remove tasks that are no longer relevant from the list entirely

3. **Task Completion Requirements**:
   - ONLY mark a task as completed when you have FULLY accomplished it
   - If you encounter errors, blockers, or cannot finish, keep the task as in_progress
   - When blocked, create a new task describing what needs to be resolved
   - Never mark a task as completed if:
     - Tests are failing
     - Implementation is partial
     - You encountered unresolved errors
     - You couldn't find necessary files or dependencies

4. **Task Breakdown**:
   - Create specific, actionable items
   - Break complex tasks into smaller, manageable steps
   - Use clear, descriptive task names
   - Always provide both forms:
     - content: "Fix authentication bug"
     - activeForm: "Fixing authentication bug"

When in doubt, use this tool. Being proactive with task management demonstrates attentiveness and ensures you complete all requirements successfully.
`,
  EBB =
    "Update the todo list for the current session. To be used proactively and often to track progress and pending tasks. Make sure that at least one task is in_progress at all times. Always provide both content (imperative) and activeForm (present continuous) for each task.";
var Ab6 = f.enum(["pending", "in_progress", "completed"]),
  Bb6 = f.object({
    content: f.string().min(1, "Content cannot be empty"),
    status: Ab6,
    activeForm: f.string().min(1, "Active form cannot be empty"),
  }),
  g11 = f.array(Bb6);
function NBB() {
  return null;
}
function LBB() {
  return null;
}
function MBB() {
  return null;
}
function OBB() {
  return null;
}
function RBB() {
  return null;
}
var Qb6 = f.strictObject({ todos: g11.describe("The updated todo list") }),
  LI7 = f.object({
    oldTodos: g11.describe("The todo list before the update"),
    newTodos: g11.describe("The todo list after the update"),
  }),
  FG = {
    name: "TodoWrite",
    async description() {
      return EBB;
    },
    async prompt() {
      return TODO_WRITE_TOOL_DESCRIPTION;
    },
    inputSchema: Qb6,
    userFacingName() {
      return "";
    },
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    async checkPermissions(A) {
      return { behavior: "allow", updatedInput: A };
    },
    renderToolUseMessage: NBB,
    renderToolUseProgressMessage: LBB,
    renderToolUseRejectedMessage: MBB,
    renderToolUseErrorMessage: OBB,
    renderToolResultMessage: RBB,
    async *call({ todos: A }, B) {
      let Z = (await B.getAppState()).todos[B.agentId] ?? [],
        G = A.every((Y) => Y.status === "completed") ? [] : A;
      (B.setAppState((Y) => ({ ...Y, todos: { ...Y.todos, [B.agentId]: G } })),
        yield { type: "result", data: { oldTodos: Z, newTodos: A } });
    },
    mapToolResultToToolResultBlockParam(A, B) {
      return {
        tool_use_id: B,
        type: "tool_result",
        content:
          "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable",
      };
    },
  };
function A_1() {
  let A = process.env.BASH_DEFAULT_TIMEOUT_MS;
  if (A) {
    let B = parseInt(A, 10);
    if (!isNaN(B) && B > 0) return B;
  }
  return 120000;
}
function TBB() {
  let A = process.env.BASH_MAX_TIMEOUT_MS;
  if (A) {
    let B = parseInt(A, 10);
    if (!isNaN(B) && B > 0) return Math.max(B, A_1());
  }
  return Math.max(600000, A_1());
}
function kG1() {
  let A = DD1.validate(process.env.BASH_MAX_OUTPUT_LENGTH);
  if (A.status === "capped") F1(`BASH_MAX_OUTPUT_LENGTH ${A.message}`);
  return A.effective;
}
function u11() {
  return A_1();
}
function B_1() {
  return TBB();
}
function Zb6() {
  if (!((E2() || {}).includeCoAuthoredBy ?? !0)) return { commit: "", pr: "" };
  let Q = `\uD83E\uDD16 Generated with [Claude Code](${CLAUDE_AI_CODE_URL})`;
  return {
    commit: `${Q}

   Co-Authored-By: Claude <noreply@anthropic.com>`,
    pr: Q,
  };
}
function PBB() {
  return `Executes a given bash command in a persistent shell session with optional timeout, ensuring proper handling and security measures.

Before executing the command, please follow these steps:

1. Directory Verification:
   - If the command will create new directories or files, first use \`ls\` to verify the parent directory exists and is the correct location
   - For example, before running "mkdir foo/bar", first use \`ls foo\` to check that "foo" exists and is the intended parent directory

2. Command Execution:
   - Always quote file paths that contain spaces with double quotes (e.g., cd "path with spaces/file.txt")
   - Examples of proper quoting:
     - cd "/Users/name/My Documents" (correct)
     - cd /Users/name/My Documents (incorrect - will fail)
     - python "/path/with spaces/script.py" (correct)
     - python /path/with spaces/script.py (incorrect - will fail)
   - After ensuring proper quoting, execute the command.
   - Capture the output of the command.

Usage notes:
  - The command argument is required.
  - You can specify an optional timeout in milliseconds (up to ${B_1()}ms / ${B_1() / 60000} minutes). If not specified, commands will timeout after ${u11()}ms (${u11() / 60000} minutes).
  - It is very helpful if you write a clear, concise description of what this command does in 5-10 words.
  - If the output exceeds ${kG1()} characters, output will be truncated before being returned to you.
  - You can use the \`run_in_background\` parameter to run the command in the background, which allows you to continue working while the command runs. You can monitor the output using the ${BASH_TOOL_NAME} tool as it becomes available. Never use \`run_in_background\` to run 'sleep' as it will return immediately. You do not need to use '&' at the end of the command when using this parameter.
  - VERY IMPORTANT: You MUST avoid using search commands like \`find\` and \`grep\`. Instead use ${GREP_TOOL_NAME}, ${GLOB_TOOL_NAME}, or ${TASK_TOOL_NAME} to search. ${`You MUST avoid read tools like \`cat\`, \`head\`, and \`tail\`, and use ${READ_TOOL_NAME} to read files.`}
 - If you _still_ need to run \`grep\`, STOP. ALWAYS USE ripgrep at \`rg\` first, which all Claude Code users have pre-installed.
  - When issuing multiple commands, use the ';' or '&&' operator to separate them. DO NOT use newlines (newlines are ok in quoted strings).
  - Try to maintain your current working directory throughout the session by using absolute paths and avoiding usage of \`cd\`. You may use \`cd\` if the User explicitly requests it.
    <good-example>
    pytest /foo/bar/tests
    </good-example>
    <bad-example>
    cd /foo/bar && pytest tests
    </bad-example>

${Gb6()}`;
}
function Gb6() {
  let { commit: B, pr: Q } = Zb6();
  return `# Committing changes with git

When the user asks you to create a new git commit, follow these steps carefully:

1. You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following bash commands in parallel, each using the ${BASH_TOOL_NAME} tool:
  - Run a git status command to see all untracked files.
  - Run a git diff command to see both staged and unstaged changes that will be committed.
  - Run a git log command to see recent commit messages, so that you can follow this repository's commit message style.
2. Analyze all staged changes (both previously staged and newly added) and draft a commit message:
  - Summarize the nature of the changes (eg. new feature, enhancement to an existing feature, bug fix, refactoring, test, docs, etc.). Ensure the message accurately reflects the changes and their purpose (i.e. "add" means a wholly new feature, "update" means an enhancement to an existing feature, "fix" means a bug fix, etc.).
  - Check for any sensitive information that shouldn't be committed
  - Draft a concise (1-2 sentences) commit message that focuses on the "why" rather than the "what"
  - Ensure it accurately reflects the changes and their purpose
3. You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following commands in parallel:
   - Add relevant untracked files to the staging area.
   - Create the commit with a message${
     B
       ? ` ending with:
   ${B}`
       : "."
   }
   - Run git status to make sure the commit succeeded.
4. If the commit fails due to pre-commit hook changes, retry the commit ONCE to include these automated changes. If it fails again, it usually means a pre-commit hook is preventing the commit. If the commit succeeds but you notice that files were modified by the pre-commit hook, you MUST amend your commit to include them.

Important notes:
- NEVER update the git config
- NEVER run additional commands to read or explore code, besides git bash commands
- NEVER use the ${FG.name} or ${TASK_TOOL_NAME} tools
- DO NOT push to the remote repository unless the user explicitly asks you to do so
- IMPORTANT: Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported.
- If there are no changes to commit (i.e., no untracked files and no modifications), do not create an empty commit
- In order to ensure good formatting, ALWAYS pass the commit message via a HEREDOC, a la this example:
<example>
git commit -m "$(cat <<'EOF'
   Commit message here.${
     B
       ? `

   ${B}`
       : ""
   }
   EOF
   )"
</example>

# Creating pull requests
Use the VERSION_STRING command via the Bash tool for ALL GitHub-related tasks including working with issues, pull requests, checks, and releases. If given a Github URL use the VERSION_STRING command to get the information needed.

IMPORTANT: When the user asks you to create a pull request, follow these steps carefully:

1. You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following bash commands in parallel using the ${BASH_TOOL_NAME} tool, in order to understand the current state of the branch since it diverged from the main branch:
   - Run a git status command to see all untracked files
   - Run a git diff command to see both staged and unstaged changes that will be committed
   - Check if the current branch tracks a remote branch and is up to date with the remote, so you know if you need to push to the remote
   - Run a git log command and \`git diff [base-branch]...HEAD\` to understand the full commit history for the current branch (from the time it diverged from the base branch)
2. Analyze all changes that will be included in the pull request, making sure to look at all relevant commits (NOT just the latest commit, but ALL commits that will be included in the pull request!!!), and draft a pull request summary
3. You have the capability to call multiple tools in a single response. When multiple independent pieces of information are requested, batch your tool calls together for optimal performance. ALWAYS run the following commands in parallel:
   - Create new branch if needed
   - Push to remote with -u flag if needed
   - Create PR using VERSION_STRING pr create with the format below. Use a HEREDOC to pass the body to ensure correct formatting.
<example>
VERSION_STRING pr create --title "the pr title" --body "$(cat <<'EOF'
## Summary
<1-3 bullet points>

## Test plan
[Checklist of TODOs for testing the pull request...]${
    Q
      ? `

${Q}`
      : ""
  }