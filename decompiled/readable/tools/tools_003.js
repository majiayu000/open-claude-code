/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_003.js
 * 处理时间: 2025-12-09T03:41:38.587Z
 * 变量映射: 14 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 3/25
 * Lines: 52311 - 53809 (1499 lines)
 * Original file: cli.js
 */

    e$.create = (A, Q) => {
        return new e$({
            innerType: A,
            typeName: OQ.ZodOptional,
            ...O8(Q)
        })
    };
    Zv = class Zv extends Y6 {
        _parse(A) {
            if (this._getType(A) === aQ.null) return HH(null);
            return this._def.innerType._parse(A)
        }
        unwrap() {
            return this._def.innerType
        }
    };
    Zv.create = (A, Q) => {
        return new Zv({
            innerType: A,
            typeName: OQ.ZodNullable,
            ...O8(Q)
        })
    };
    l9A = class l9A extends Y6 {
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A), B = Q.data;
            if (Q.parsedType === aQ.undefined) B = this._def.defaultValue();
            return this._def.innerType._parse({
                data: B,
                path: Q.path,
                parent: Q
            })
        }
        removeDefault() {
            return this._def.innerType
        }
    };
    l9A.create = (A, Q) => {
        return new l9A({
            innerType: A,
            typeName: OQ.ZodDefault,
            defaultValue: typeof Q.default === "function" ? Q.default : () => Q.default,
            ...O8(Q)
        })
    };
    i9A = class i9A extends Y6 {
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A), B = {
                ...Q,
                common: {
                    ...Q.common,
                    issues: []
                }
            }, G = this._def.innerType._parse({
                data: B.data,
                path: B.path,
                parent: {
                    ...B
                }
            });
            if (x9A(G)) return G.then((Z) => {
                return {
                    status: "valid",
                    value: Z.status === "valid" ? Z.value : this._def.catchValue({
                        get error() {
                            return new gz(B.common.issues)
                        },
                        input: B.data
                    })
                }
            });
            else return {
                status: "valid",
                value: G.status === "valid" ? G.value : this._def.catchValue({
                    get error() {
                        return new gz(B.common.issues)
                    },
                    input: B.data
                })
            }
        }
        removeCatch() {
            return this._def.innerType
        }
    };
    i9A.create = (A, Q) => {
        return new i9A({
            innerType: A,
            typeName: OQ.ZodCatch,
            catchValue: typeof Q.catch === "function" ? Q.catch : () => Q.catch,
            ...O8(Q)
        })
    };
    TKA = class TKA extends Y6 {
        _parse(A) {
            if (this._getType(A) !== aQ.nan) {
                let B = this._getOrReturnCtx(A);
                return UB(B, {
                    code: wQ.invalid_type,
                    expected: aQ.nan,
                    received: B.parsedType
                }), r9
            }
            return {
                status: "valid",
                value: A.data
            }
        }
    };
    TKA.create = (A) => {
        return new TKA({
            typeName: OQ.ZodNaN,
            ...O8(A)
        })
    };
    L54 = Symbol("zod_brand");
    GvA = class GvA extends Y6 {
        _parse(A) {
            let {
                ctx: Q
            } = this._processInputParams(A), B = Q.data;
            return this._def.type._parse({
                data: B,
                path: Q.path,
                parent: Q
            })
        }
        unwrap() {
            return this._def.type
        }
    };
    PKA = class PKA extends Y6 {
        _parse(A) {
            let {
                status: Q,
                ctx: B
            } = this._processInputParams(A);
            if (B.common.async) return (async () => {
                let Z = await this._def.in._parseAsync({
                    data: B.data,
                    path: B.path,
                    parent: B
                });
                if (Z.status === "aborted") return r9;
                if (Z.status === "dirty") return Q.dirty(), os(Z.value);
                else return this._def.out._parseAsync({
                    data: Z.value,
                    path: B.path,
                    parent: B
                })
            })();
            else {
                let G = this._def.in._parseSync({
                    data: B.data,
                    path: B.path,
                    parent: B
                });
                if (G.status === "aborted") return r9;
                if (G.status === "dirty") return Q.dirty(), {
                    status: "dirty",
                    value: G.value
                };
                else return this._def.out._parseSync({
                    data: G.value,
                    path: B.path,
                    parent: B
                })
            }
        }
        static create(A, Q) {
            return new PKA({
                in: A,
                out: Q,
                typeName: OQ.ZodPipeline
            })
        }
    };
    n9A = class n9A extends Y6 {
        _parse(A) {
            let Q = this._def.innerType._parse(A),
                B = (G) => {
                    if (qm(G)) G.value = Object.freeze(G.value);
                    return G
                };
            return x9A(Q) ? Q.then((G) => B(G)) : B(Q)
        }
        unwrap() {
            return this._def.innerType
        }
    };
    n9A.create = (A, Q) => {
        return new n9A({
            innerType: A,
            typeName: OQ.ZodReadonly,
            ...O8(Q)
        })
    };
    M54 = {
        object: SY.lazycreate
    };
    (function(A) {
        A.ZodString = "ZodString", A.ZodNumber = "ZodNumber", A.ZodNaN = "ZodNaN", A.ZodBigInt = "ZodBigInt", A.ZodBoolean = "ZodBoolean", A.ZodDate = "ZodDate", A.ZodSymbol = "ZodSymbol", A.ZodUndefined = "ZodUndefined", A.ZodNull = "ZodNull", A.ZodAny = "ZodAny", A.ZodUnknown = "ZodUnknown", A.ZodNever = "ZodNever", A.ZodVoid = "ZodVoid", A.ZodArray = "ZodArray", A.ZodObject = "ZodObject", A.ZodUnion = "ZodUnion", A.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", A.ZodIntersection = "ZodIntersection", A.ZodTuple = "ZodTuple", A.ZodRecord = "ZodRecord", A.ZodMap = "ZodMap", A.ZodSet = "ZodSet", A.ZodFunction = "ZodFunction", A.ZodLazy = "ZodLazy", A.ZodLiteral = "ZodLiteral", A.ZodEnum = "ZodEnum", A.ZodEffects = "ZodEffects", A.ZodNativeEnum = "ZodNativeEnum", A.ZodOptional = "ZodOptional", A.ZodNullable = "ZodNullable", A.ZodDefault = "ZodDefault", A.ZodCatch = "ZodCatch", A.ZodPromise = "ZodPromise", A.ZodBranded = "ZodBranded", A.ZodPipeline = "ZodPipeline", A.ZodReadonly = "ZodReadonly"
    })(OQ || (OQ = {}));
    EQ = $R.create, uN = Lm.create, R54 = TKA.create, T54 = Mm.create, UV = f9A.create, P54 = ts.create, j54 = LKA.create, S54 = h9A.create, _54 = g9A.create, k54 = es.create, y54 = Nm.create, x54 = nj.create, v54 = MKA.create, CJ = wR.create, Aw = SY.create, Qw = SY.strictCreate, Br = u9A.create, b54 = BvA.create, f54 = m9A.create, h54 = aj.create, LR = OKA.create, g54 = RKA.create, u54 = Ar.create, m54 = b9A.create, d54 = d9A.create, c54 = c9A.create, MR = Om.create, p54 = p9A.create, l54 = Qr.create, i54 = NR.create, n54 = e$.create, a54 = Zv.create, s54 = NR.createWithPreprocess, r54 = PKA.create, A34 = {
        string: (A) => $R.create({
            ...A,
            coerce: !0
        }),
        number: (A) => Lm.create({
            ...A,
            coerce: !0
        }),
        boolean: (A) => f9A.create({
            ...A,
            coerce: !0
        }),
        bigint: (A) => Mm.create({
            ...A,
            coerce: !0
        }),
        date: (A) => ts.create({
            ...A,
            coerce: !0
        })
    }, Q34 = r9
});
var _ = {};
esmExport(_, {
    void: () => v54,
    util: () => d6,
    unknown: () => y54,
    union: () => Br,
    undefined: () => S54,
    tuple: () => h54,
    transformer: () => i54,
    symbol: () => j54,
    string: () => EQ,
    strictObject: () => Qw,
    setErrorMap: () => A54,
    set: () => u54,
    record: () => LR,
    quotelessJson: () => t64,
    promise: () => l54,
    preprocess: () => s54,
    pipeline: () => r54,
    ostring: () => o54,
    optional: () => n54,
    onumber: () => t54,
    oboolean: () => e54,
    objectUtil: () => NC1,
    object: () => Aw,
    number: () => uN,
    nullable: () => a54,
    null: () => _54,
    never: () => x54,
    nativeEnum: () => p54,
    nan: () => R54,
    map: () => g54,
    makeIssue: () => NKA,
    literal: () => c54,
    lazy: () => d54,
    late: () => M54,
    isValid: () => qm,
    isDirty: () => QvA,
    isAsync: () => x9A,
    isAborted: () => AvA,
    intersection: () => f54,
    instanceof: () => O54,
    getParsedType: () => ij,
    getErrorMap: () => y9A,
    function: () => m54,
    enum: () => MR,
    effect: () => i54,
    discriminatedUnion: () => b54,
    defaultErrorMap: () => Bv,
    datetimeRegex: () => Il0,
    date: () => P54,
    custom: () => Jl0,
    coerce: () => A34,
    boolean: () => UV,
    bigint: () => T54,
    array: () => CJ,
    any: () => k54,
    addIssueToContext: () => UB,
    ZodVoid: () => MKA,
    ZodUnknown: () => Nm,
    ZodUnion: () => u9A,
    ZodUndefined: () => h9A,
    ZodType: () => Y6,
    ZodTuple: () => aj,
    ZodTransformer: () => NR,
    ZodSymbol: () => LKA,
    ZodString: () => $R,
    ZodSet: () => Ar,
    ZodSchema: () => Y6,
    ZodRecord: () => OKA,
    ZodReadonly: () => n9A,
    ZodPromise: () => Qr,
    ZodPipeline: () => PKA,
    ZodParsedType: () => aQ,
    ZodOptional: () => e$,
    ZodObject: () => SY,
    ZodNumber: () => Lm,
    ZodNullable: () => Zv,
    ZodNull: () => g9A,
    ZodNever: () => nj,
    ZodNativeEnum: () => p9A,
    ZodNaN: () => TKA,
    ZodMap: () => RKA,
    ZodLiteral: () => c9A,
    ZodLazy: () => d9A,
    ZodIssueCode: () => wQ,
    ZodIntersection: () => m9A,
    ZodFunction: () => b9A,
    ZodFirstPartyTypeKind: () => OQ,
    ZodError: () => gz,
    ZodEnum: () => Om,
    ZodEffects: () => NR,
    ZodDiscriminatedUnion: () => BvA,
    ZodDefault: () => l9A,
    ZodDate: () => ts,
    ZodCatch: () => i9A,
    ZodBranded: () => GvA,
    ZodBoolean: () => f9A,
    ZodBigInt: () => Mm,
    ZodArray: () => wR,
    ZodAny: () => es,
    Schema: () => Y6,
    ParseStatus: () => fK,
    OK: () => HH,
    NEVER: () => Q34,
    INVALID: () => r9,
    EMPTY_PATH: () => Q54,
    DIRTY: () => os,
    BRAND: () => L54
});
var TC1 = lazyLoader(() => {
    exA();
    MC1();
    ep0();
    qKA();
    Wl0();
    txA()
});
var I2;
var h2 = lazyLoader(() => {
    TC1();
    TC1();
    I2 = _
});
var jKA;
var ZvA = lazyLoader(() => {
    jKA = ["PreToolUse", "PostToolUse", "PostToolUseFailure", "Notification", "UserPromptSubmit", "SessionStart", "SessionEnd", "Stop", "SubagentStart", "SubagentStop", "PreCompact", "PermissionRequest"]
});

function IvA(A) {
    switch (A) {
        case "bypassPermissions":
            return "bypassPermissions";
        case "acceptEdits":
            return "acceptEdits";
        case "plan":
            return "plan";
        case "dontAsk":
            return "dontAsk";
        case "default":
            return "default";
        default:
            return "default"
    }
}

function Iv(A) {
    switch (A) {
        case "default":
            return "Default";
        case "plan":
            return "Plan Mode";
        case "acceptEdits":
            return "Accept edits";
        case "bypassPermissions":
            return "Bypass Permissions";
        case "dontAsk":
            return "Don't Ask"
    }
}

function Vl0(A) {
    return A === "default" || A === void 0
}

function Kl0(A) {
    switch (A) {
        case "default":
            return "";
        case "plan":
            return "⏸";
        case "acceptEdits":
            return "⏵⏵";
        case "bypassPermissions":
            return "⏵⏵";
        case "dontAsk":
            return "⏵⏵"
    }
}

function sj(A) {
    switch (A) {
        case "default":
            return "text";
        case "plan":
            return "planMode";
        case "acceptEdits":
            return "autoAccept";
        case "bypassPermissions":
            return "error";
        case "dontAsk":
            return "error"
    }
}
var OR, Fl0;
var Bw = lazyLoader(() => {
    h2();
    OR = ["acceptEdits", "bypassPermissions", "default", "dontAsk", "plan"], Fl0 = I2.enum(OR)
});

function G34(A, Q) {
    if (!A || !A.permissions) return [];
    let {
        permissions: B
    } = A, G = [];
    for (let Z of B34) {
        let I = B[Z];
        if (I)
            for (let Y of I) G.push({
                source: Q,
                ruleBehavior: Z,
                ruleValue: mN(Y)
            })
    }
    return G
}

function YvA() {
    let A = [];
    for (let Q of rs()) A.push(...JvA(Q));
    return A
}

function JvA(A) {
    let Q = LB(A);
    return G34(Q, A)
}

function Dl0(A) {
    let Q = r5(A.ruleValue),
        B = LB(A.source);
    if (!B || !B.permissions) return !1;
    let G = B.permissions[A.ruleBehavior];
    if (!G || !G.includes(Q)) return !1;
    try {
        let Z = {
                ...B,
                permissions: {
                    ...B.permissions,
                    [A.ruleBehavior]: G.filter((Y) => Y !== Q)
                }
            },
            {
                error: I
            } = cB(A.source, Z);
        if (I) return !1;
        return !0
    } catch (Z) {
        return e(Z instanceof Error ? Z : Error(String(Z))), !1
    }
}

function Z34() {
    return {
        permissions: {
            allow: [],
            deny: [],
            ask: []
        }
    }
}

function WvA({
    ruleValues: A,
    ruleBehavior: Q
}, B) {
    if (A.length < 1) return !0;
    let G = A.map(r5),
        Z = LB(B) || Z34();
    try {
        let I = Z.permissions || {},
            Y = I[Q] || [],
            J = new Set(Y),
            W = G.filter((V) => !J.has(V));
        if (W.length === 0) return !0;
        let X = {
                ...Z,
                permissions: {
                    ...I,
                    [Q]: [...Y, ...W]
                }
            },
            F = cB(B, X);
        if (F.error) throw F.error;
        return !0
    } catch (I) {
        return e(I instanceof Error ? I : Error(String(I))), !1
    }
}
var B34;
var Gr = lazyLoader(() => {
    u1();
    aG();
    UF();
    RB();
    B34 = ["allow", "deny", "ask"]
});
import {
    posix as I34
} from "path";

function a9A(A) {
    if (!A) return [];
    return A.flatMap((Q) => {
        switch (Q.type) {
            case "addRules":
                return Q.rules;
            default:
                return []
        }
    })
}

function $V(A, Q) {
    switch (Q.type) {
        case "setMode":
            return g(`Applying permission update: Setting mode to 'TextComponent{Q.mode}'`), {
                ...A,
                mode: Q.mode
            };
        case "addRules": {
            let B = Q.rules.map((Z) => r5(Z));
            g(`Applying permission update: Adding TextComponent{Q.rules.length} TextComponent{Q.behavior} rule(s) to destination 'TextComponent{Q.destination}': TextComponent{JSON.stringify(B)}`);
            let G = Q.behavior === "allow" ? "alwaysAllowRules" : Q.behavior === "deny" ? "alwaysDenyRules" : "alwaysAskRules";
            return {
                ...A,
                [G]: {
                    ...A[G],
                    [Q.destination]: [...A[G][Q.destination] || [], ...B]
                }
            }
        }
        case "replaceRules": {
            let B = Q.rules.map((Z) => r5(Z));
            g(`Replacing all TextComponent{Q.behavior} rules for destination 'TextComponent{Q.destination}' with TextComponent{Q.rules.length} rule(s): TextComponent{JSON.stringify(B)}`);
            let G = Q.behavior === "allow" ? "alwaysAllowRules" : Q.behavior === "deny" ? "alwaysDenyRules" : "alwaysAskRules";
            return {
                ...A,
                [G]: {
                    ...A[G],
                    [Q.destination]: B
                }
            }
        }
        case "addDirectories": {
            g(`Applying permission update: Adding TextComponent{Q.directories.length} director${Q.directories.length===1?"y":"ies"} with destination 'TextComponent{Q.destination}': TextComponent{JSON.stringify(Q.directories)}`);
            let B = new Map(A.additionalWorkingDirectories);
            for (let G of Q.directories) B.set(G, {
                path: G,
                source: Q.destination
            });
            return {
                ...A,
                additionalWorkingDirectories: B
            }
        }
        case "removeRules": {
            let B = Q.rules.map((J) => r5(J));
            g(`Applying permission update: Removing TextComponent{Q.rules.length} TextComponent{Q.behavior} rule(s) from source 'TextComponent{Q.destination}': TextComponent{JSON.stringify(B)}`);
            let G = Q.behavior === "allow" ? "alwaysAllowRules" : Q.behavior === "deny" ? "alwaysDenyRules" : "alwaysAskRules",
                Z = A[G][Q.destination] || [],
                I = new Set(B),
                Y = Z.filter((J) => !I.has(J));
            return {
                ...A,
                [G]: {
                    ...A[G],
                    [Q.destination]: Y
                }
            }
        }
        case "removeDirectories": {
            g(`Applying permission update: Removing TextComponent{Q.directories.length} director${Q.directories.length===1?"y":"ies"}: TextComponent{JSON.stringify(Q.directories)}`);
            let B = new Map(A.additionalWorkingDirectories);
            for (let G of Q.directories) B.delete(G);
            return {
                ...A,
                additionalWorkingDirectories: B
            }
        }
        default:
            return A
    }
}

function Rm(A, Q) {
    let B = A;
    for (let G of Q) B = $V(B, G);
    return B
}

function XvA(A) {
    return A === "localSettings" || A === "userSettings" || A === "projectSettings"
}

function Yv(A) {
    if (!XvA(A.destination)) return;
    switch (g(`Persisting permission update: TextComponent{A.type} to source 'TextComponent{A.destination}'`), A.type) {
        case "addRules": {
            g(`Persisting TextComponent{A.rules.length} TextComponent{A.behavior} rule(s) to TextComponent{A.destination}`), WvA({
                ruleValues: A.rules,
                ruleBehavior: A.behavior
            }, A.destination);
            break
        }
        case "addDirectories": {
            g(`Persisting TextComponent{A.directories.length} director${A.directories.length===1?"y":"ies"} to TextComponent{A.destination}`);
            let B = LB(A.destination)?.permissions?.additionalDirectories || [],
                G = A.directories.filter((Z) => !B.includes(Z));
            if (G.length > 0) {
                let Z = [...B, ...G];
                cB(A.destination, {
                    permissions: {
                        additionalDirectories: Z
                    }
                })
            }
            break
        }
        case "removeRules": {
            g(`Removing TextComponent{A.rules.length} TextComponent{A.behavior} rule(s) from TextComponent{A.destination}`);
            let G = (LB(A.destination)?.permissions || {})[A.behavior] || [],
                Z = new Set(A.rules.map(r5)),
                I = G.filter((Y) => !Z.has(Y));
            cB(A.destination, {
                permissions: {
                    [A.behavior]: I
                }
            });
            break
        }
        case "removeDirectories": {
            g(`Removing TextComponent{A.directories.length} director${A.directories.length===1?"y":"ies"} from TextComponent{A.destination}`);
            let B = LB(A.destination)?.permissions?.additionalDirectories || [],
                G = new Set(A.directories),
                Z = B.filter((I) => !G.has(I));
            cB(A.destination, {
                permissions: {
                    additionalDirectories: Z
                }
            });
            break
        }
        case "setMode": {
            g(`Persisting mode 'TextComponent{A.mode}' to TextComponent{A.destination}`), cB(A.destination, {
                permissions: {
                    defaultMode: A.mode
                }
            });
            break
        }
        case "replaceRules": {
            g(`Replacing all TextComponent{A.behavior} rules in TextComponent{A.destination} with TextComponent{A.rules.length} rule(s)`);
            let Q = A.rules.map(r5);
            cB(A.destination, {
                permissions: {
                    [A.behavior]: Q
                }
            });
            break
        }
    }
}

function SKA(A) {
    for (let Q of A) Yv(Q)
}

function FvA(A, Q = "session") {
    try {
        if (OA().statSync(A).isDirectory()) {
            let G = VvA(A);
            if (G === "/") return;
            return {
                type: "addRules",
                rules: [{
                    toolName: "Read",
                    ruleContent: I34.isAbsolute(G) ? `/TextComponent{G}/**` : `TextComponent{G}/**`
                }],
                behavior: "allow",
                destination: Q
            }
        }
    } catch {}
    return
}
var hK = lazyLoader(() => {
    aG();
    D0();
    RB();
    Gr();
    o0();
    _Y()
});

function kKA(A, Q) {
    return A instanceof Error && A.message === Q
}
var _KA, rj, YW, uz, oj, GI;
var $Z = lazyLoader(() => {
    _KA = class _KA extends Error {
        constructor(A) {
            super(A);
            this.name = this.constructor.name
        }
    };
    rj = class rj extends Error {};
    YW = class YW extends Error {
        constructor(A) {
            super(A);
            this.name = "AbortError"
        }
    };
    uz = class uz extends Error {
        filePath;
        defaultConfig;
        constructor(A, Q, B) {
            super(A);
            this.name = "ConfigParseError", this.filePath = Q, this.defaultConfig = B
        }
    };
    oj = class oj extends Error {
        stdout;
        stderr;
        code;
        interrupted;
        constructor(A, Q, B, G) {
            super("Shell command failed");
            this.stdout = A;
            this.stderr = Q;
            this.code = B;
            this.interrupted = G;
            this.name = "ShellError"
        }
    };
    GI = class GI extends Error {
        formattedMessage;
        constructor(A, Q) {
            super(A);
            this.formattedMessage = Q;
            this.name = "TeleportOperationError"
        }
    }
});
var PC1, S77, jC1, Y34, J34, W34, X34, F34, V34, Tm, Hl0;
var s9A = lazyLoader(() => {
    h2();
    PC1 = _.enum(["local", "user", "project", "dynamic", "enterprise"]), S77 = _.enum(["stdio", "sse", "sse-ide", "http", "ws", "sdk"]), jC1 = _.object({
        type: _.literal("stdio").optional(),
        command: _.string().min(1, "Command cannot be empty"),
        args: _.array(_.string()).default([]),
        env: _.record(_.string()).optional()
    }), Y34 = _.object({
        type: _.literal("sse"),
        url: _.string(),
        headers: _.record(_.string()).optional(),
        headersHelper: _.string().optional()
    }), J34 = _.object({
        type: _.literal("sse-ide"),
        url: _.string(),
        ideName: _.string(),
        ideRunningInWindows: _.boolean().optional()
    }), W34 = _.object({
        type: _.literal("ws-ide"),
        url: _.string(),
        ideName: _.string(),
        authToken: _.string().optional(),
        ideRunningInWindows: _.boolean().optional()
    }), X34 = _.object({
        type: _.literal("http"),
        url: _.string(),
        headers: _.record(_.string()).optional(),
        headersHelper: _.string().optional()
    }), F34 = _.object({
        type: _.literal("ws"),
        url: _.string(),
        headers: _.record(_.string()).optional(),
        headersHelper: _.string().optional()
    }), V34 = _.object({
        type: _.literal("sdk"),
        name: _.string()
    }), Tm = _.union([jC1, Y34, J34, W34, X34, F34, V34]), Hl0 = _.object({
        mcpServers: _.record(_.string(), Tm)
    })
});

function El0() {
    return "prod"
}

function zl0() {
    switch (El0()) {
        case "local":
            return "-local-oauth";
        case "staging":
            return "-staging-oauth";
        case "prod":
            return ""
    }
}

function H34() {
    return
}

/* getConfig = getConfig() - Returns config with BASE_API_URL, OAuth endpoints */
/* Signature: () => ConfigObject */
function getConfig() {
    switch (El0()) {
        case "local":
            return C34;
        case "staging":
            return H34() ?? Cl0;
        case "prod":
            return Cl0
    }
}
/* USER_INFERENCE_KEY = USER_INFERENCE_KEY = "user:inference" */
var USER_INFERENCE_KEY = "user:inference",
    K34 = "org:create_api_key",
    r9A = "oauth-2025-04-20",
    D34, SC1, Ul0, Cl0, C34;
var EX = lazyLoader(() => {
    hQ();
    D34 = [K34, "user:profile"], SC1 = ["user:profile", USER_INFERENCE_KEY, "user:sessions:claude_code"], Ul0 = Array.from(new Set([...D34, ...SC1])), Cl0 = {
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
        OAUTH_FILE_SUFFIX: ""
    };
    C34 = {
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
        OAUTH_FILE_SUFFIX: "-local-oauth"
    }
});
import {
    accessSync as E34
} from "fs";
import {
    join as _C1
} from "path";
import {
    homedir as z34
} from "os";
import {
    constants as $l0
} from "fs";

function gK() {
    if (OA().existsSync(_C1(PQ(), ".config.json"))) return _C1(PQ(), ".config.json");
    let A = `.claude${zl0()}.json`;
    return _C1(process.env.CLAUDE_CONFIG_DIR || z34(), A)
}
async function o9A(A) {
    try {
        let {
            cmd: Q
        } = kC1.findActualExecutable(A, []);
        try {
            return E34(Q, $l0.F_OK | $l0.X_OK), !0
        } catch {
            return !1
        }
    } catch {
        return !1
    }
}

function M34() {
    if (process.env.CURSOR_TRACE_ID) return "cursor";
    if (process.env.VSCODE_GIT_ASKPASS_MAIN?.includes("/.cursor-server/")) return "cursor";
    if (process.env.VSCODE_GIT_ASKPASS_MAIN?.includes("/.windsurf-server/")) return "windsurf";
    let A = process.env.__CFBundleIdentifier?.toLowerCase();
    if (A?.includes("vscodium")) return "codium";
    if (A?.includes("windsurf")) return "windsurf";
    if (A?.includes("com.google.android.studio")) return "androidstudio";
    if (A) {
        for (let Q of L34)
            if (A.includes(Q)) return Q
    }
    if (process.env.VisualStudioVersion) return "visualstudio";
    if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
        if (process.platform === "darwin") return "pycharm";
        return "pycharm"
    }
    if (process.env.TERM === "xterm-ghostty") return "ghostty";
    if (process.env.TERM?.includes("kitty")) return "kitty";
    if (process.env.TERM_PROGRAM) return process.env.TERM_PROGRAM;
    if (process.env.STY) return "screen";
    if (process.env.KONSOLE_VERSION) return "konsole";
    if (process.env.GNOME_TERMINAL_SERVICE) return "gnome-terminal";
    if (process.env.XTERM_VERSION) return "xterm";
    if (process.env.VTE_VERSION) return "vte-based";
    if (process.env.TERMINATOR_UUID) return "terminator";
    if (process.env.KITTY_WINDOW_ID) return "kitty";
    if (process.env.ALACRITTY_LOG) return "alacritty";
    if (process.env.TILIX_ID) return "tilix";
    if (process.env.WT_SESSION) return "windows-terminal";
    if (process.env.SESSIONNAME && process.env.TERM === "cygwin") return "cygwin";
    if (process.env.MSYSTEM) return process.env.MSYSTEM.toLowerCase();
    if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask) return "conemu";
    if (process.env.WSL_DISTRO_NAME) return `wsl-TextComponent{process.env.WSL_DISTRO_NAME}`;
    if (process.env.SSH_CONNECTION || process.env.SSH_CLIENT || process.env.SSH_TTY) return "ssh-session";
    if (process.env.TERM) {
        let Q = process.env.TERM;
        if (Q.includes("alacritty")) return "alacritty";
        if (Q.includes("rxvt")) return "rxvt";
        if (Q.includes("termite")) return "termite";
        return process.env.TERM
    }
    if (!process.stdout.isTTY) return "non-interactive";
    return null
}
var kC1, U34, $34, w34, wl0, q34, N34 = () => {
        return process.env.__CFBundleIdentifier === "com.conductor.app"
    },
    L34, O34, m0;
var f5 = lazyLoader(() => {
    o2();
    w3();
    o0();
    UZ();
    hQ();
    EX();
    kC1 = esmImport(fD1(), 1);
    U34 = t1(async () => {
        try {
            let A = s9(),
                Q = setTimeout(() => A.abort(), 1000);
            return await GQ.head("http://1.1.1.1", {
                signal: A.signal
            }), clearTimeout(Q), !0
        } catch {
            return !1
        }
    });
    $34 = t1(async () => {
        let A = [];
        if (await o9A("npm")) A.push("npm");
        if (await o9A("yarn")) A.push("yarn");
        if (await o9A("pnpm")) A.push("pnpm");
        return A
    }), w34 = t1(async () => {
        let A = [];
        if (await o9A("bun")) A.push("bun");
        if (await o9A("deno")) A.push("deno");
        if (await o9A("node")) A.push("node");
        return A
    }), wl0 = t1(() => {
        try {
            return OA().existsSync("/proc/sys/fs/binfmt_misc/WSLInterop")
        } catch (A) {
            return !1
        }
    }), q34 = t1(() => {
        try {
            if (!wl0()) return !1;
            let {
                cmd: A
            } = kC1.findActualExecutable("npm", []);
            return A.startsWith("/mnt/c/")
        } catch (A) {
            return !1
        }
    }), L34 = ["pycharm", "intellij", "webstorm", "phpstorm", "rubymine", "clion", "goland", "rider", "datagrip", "appcode", "dataspell", "aqua", "gateway", "fleet", "jetbrains", "androidstudio"];
    O34 = t1(() => {
        if (process.env.CODESPACES === "true") return "codespaces";
        if (process.env.GITPOD_WORKSPACE_ID) return "gitpod";
        if (process.env.REPL_ID || process.env.REPL_SLUG) return "replit";
        if (process.env.PROJECT_DOMAIN) return "glitch";
        if (process.env.VERCEL === "1") return "vercel";
        if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_SERVICE_NAME) return "railway";
        if (process.env.RENDER === "true") return "render";
        if (process.env.NETLIFY === "true") return "netlify";
        if (process.env.DYNO) return "heroku";
        if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID) return "fly.io";
        if (process.env.CF_PAGES === "1") return "cloudflare-pages";
        if (process.env.DENO_DEPLOYMENT_ID) return "deno-deploy";
        if (process.env.AWS_LAMBDA_FUNCTION_NAME) return "aws-lambda";
        if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE") return "aws-fargate";
        if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2") return "aws-ecs";
        try {
            if (OA().existsSync("/sys/hypervisor/uuid")) {
                if (OA().readFileSync("/sys/hypervisor/uuid", {
                        encoding: "utf8"
                    }).trim().toLowerCase().startsWith("ec2")) return "aws-ec2"
            }
        } catch {}
        if (process.env.K_SERVICE) return "gcp-cloud-run";
        if (process.env.GOOGLE_CLOUD_PROJECT) return "gcp";
        if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU) return "azure-app-service";
        if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) return "azure-functions";
        if (process.env.APP_URL?.includes("ondigitalocean.app")) return "digitalocean-app-platform";
        if (process.env.SPACE_CREATOR_USER_ID) return "huggingface-spaces";
        if (process.env.GITHUB_ACTIONS === "true") return "github-actions";
        if (process.env.GITLAB_CI === "true") return "gitlab-ci";
        if (process.env.CIRCLECI) return "circleci";
        if (process.env.BUILDKITE) return "buildkite";
        if (parseBoolean(!1)) return "ci";
        if (process.env.KUBERNETES_SERVICE_HOST) return "kubernetes";
        try {
            if (OA().existsSync("/.dockerenv")) return "docker"
        } catch {}
        if (m0.platform === "darwin") return "unknown-darwin";
        if (m0.platform === "linux") return "unknown-linux";
        if (m0.platform === "win32") return "unknown-win32";
        return "unknown"
    }), m0 = {
        hasInternetAccess: U34,
        isCI: parseBoolean(!1),
        platform: ["win32", "darwin"].includes(process.platform) ? process.platform : "linux",
        arch: process.arch,
        nodeVersion: process.version,
        terminal: M34(),
        getPackageManagers: $34,
        getRuntimes: w34,
        isRunningWithBun: t1(cs),
        isWslEnvironment: wl0,
        isNpmFromWindowsPath: q34,
        isConductor: N34,
        detectDeploymentEnvironment: O34
    }
});

function R34(A, Q) {
    var B = -1,
        G = A == null ? 0 : A.length;
    while (++B < G)
        if (Q(A[B], B, A) === !1) break;
    return A
}
var ql0;
var Nl0 = lazyLoader(() => {
    ql0 = R34
});

function T34(A, Q) {
    return A && copyObject(Q, keys(Q), A)
}
var Ll0;
var Ml0 = lazyLoader(() => {
    ns();
    Hs();
    Ll0 = T34
});

function P34(A, Q) {
    return A && copyObject(Q, lj(Q), A)
}
var Ol0;
var Rl0 = lazyLoader(() => {
    ns();
    S9A();
    Ol0 = P34
});

function j34(A, Q) {
    return copyObject(A, SBA(A), Q)
}
var Tl0;
var Pl0 = lazyLoader(() => {
    ns();
    L_A();
    Tl0 = j34
});
var S34, _34, DvA;
var yC1 = lazyLoader(() => {
    $_A();
    pxA();
    L_A();
    vW1();
    S34 = Object.getOwnPropertySymbols, _34 = !S34 ? N_A : function(A) {
        var Q = [];
        while (A) arrayPush(Q, SBA(A)), A = P9A(A);
        return Q
    }, DvA = _34
});

function k34(A, Q) {
    return copyObject(A, DvA(A), Q)
}
var jl0;
var Sl0 = lazyLoader(() => {
    ns();
    yC1();
    jl0 = k34
});

function y34(A) {
    return w_A(A, lj, DvA)
}
var getAllKeysIn;
var xC1 = lazyLoader(() => {
    yW1();
    yC1();
    S9A();
    getAllKeysIn = y34
});

function b34(A) {
    var Q = A.length,
        B = new A.constructor(Q);
    if (Q && typeof A[0] == "string" && v34.call(A, "index")) B.index = A.index, B.input = A.input;
    return B
}
var x34, v34, _l0;
var kl0 = lazyLoader(() => {
    x34 = Object.prototype, v34 = x34.hasOwnProperty;
    _l0 = b34
});

function f34(A, Q) {
    var B = Q ? T9A(A.buffer) : A.buffer;
    return new A.constructor(B, A.byteOffset, A.byteLength)
}
var yl0;
var xl0 = lazyLoader(() => {
    mxA();
    yl0 = f34
});

function g34(A) {
    var Q = new A.constructor(A.source, h34.exec(A));
    return Q.lastIndex = A.lastIndex, Q
}
var h34, vl0;
var bl0 = lazyLoader(() => {
    h34 = /\w*TextComponent/;
    vl0 = g34
});

function u34(A) {
    return hl0 ? Object(hl0.call(A)) : {}
}
var fl0, hl0, gl0;
var ul0 = lazyLoader(() => {
    Fs();
    fl0 = Symbol ? Symbol.prototype : void 0, hl0 = fl0 ? fl0.valueOf : void 0;
    gl0 = u34
});

function Y74(A, Q, B) {
    var G = A.constructor;
    switch (Q) {
        case s34:
            return T9A(A);
        case m34:
        case d34:
            return new G(+A);
        case r34:
            return yl0(A, B);
        case o34:
        case t34:
        case e34:
        case A74:
        case Q74:
        case B74:
        case G74:
        case Z74:
        case I74:
            return dxA(A, B);
        case c34:
            return new G;
        case p34:
        case n34:
            return new G(A);
        case l34:
            return vl0(A);
        case i34:
            return new G;
        case a34:
            return gl0(A)
    }
}
var m34 = "[object Boolean]",
    d34 = "[object Date]",
    c34 = "[object Map]",
    p34 = "[object Number]",
    l34 = "[object RegExp]",
    i34 = "[object Set]",
    n34 = "[object String]",
    a34 = "[object Symbol]",
    s34 = "[object ArrayBuffer]",
    r34 = "[object DataView]",
    o34 = "[object Float32Array]",
    t34 = "[object Float64Array]",
    e34 = "[object Int8Array]",
    A74 = "[object Int16Array]",
    Q74 = "[object Int32Array]",
    B74 = "[object Uint8Array]",
    G74 = "[object Uint8ClampedArray]",
    Z74 = "[object Uint16Array]",
    I74 = "[object Uint32Array]",
    ml0;
var dl0 = lazyLoader(() => {
    mxA();
    xl0();
    bl0();
    ul0();
    JC1();
    ml0 = Y74
});

function W74(A) {
    return zF(A) && lx(A) == J74
}
var J74 = "[object Map]",
    cl0;
var pl0 = lazyLoader(() => {
    BVA();
    Mj();
    cl0 = W74
});
var ll0, X74, il0;
var nl0 = lazyLoader(() => {
    pl0();
    T_A();
    S_A();
    ll0 = Rj && Rj.isMap, X74 = ll0 ? kBA(ll0) : cl0, il0 = X74
});

function V74(A) {
    return zF(A) && lx(A) == F74
}
var F74 = "[object Set]",
    al0;
var sl0 = lazyLoader(() => {
    BVA();
    Mj();
    al0 = V74
});
var rl0, K74, ol0;
var tl0 = lazyLoader(() => {
    sl0();
    T_A();
    S_A();
    rl0 = Rj && Rj.isSet, K74 = rl0 ? kBA(rl0) : al0, ol0 = K74
});

function CvA(A, Q, B, G, Z, I) {
    var Y, J = Q & D74,
        W = Q & H74,
        X = Q & C74;
    if (B) Y = Z ? B(A, G, Z, I) : B(A);
    if (Y !== void 0) return Y;
    if (!isObject(A)) return A;
    var F = isArray(A);
    if (F) {
        if (Y = _l0(A), !J) return cxA(A, Y)
    } else {
        var V = lx(A),
            K = V == Ai0 || V == w74;
        if (Oj(A)) return HKA(A, J);
        if (V == Qi0 || V == el0 || K && !Z) {
            if (Y = W || K ? {} : lxA(A), !J) return W ? jl0(A, Ol0(Y, A)) : Tl0(A, Ll0(Y, A))
        } else {
            if (!wZ[V]) return Z ? A : {};
            Y = ml0(A, V, J)
        }
    }
    I || (I = new Lj);
    var D = I.get(A);
    if (D) return D;
    if (I.set(A, Y), ol0(A)) A.forEach(function(E) {
        Y.add(CvA(E, Q, B, E, A, I))
    });
    else if (il0(A)) A.forEach(function(E, z) {
        Y.set(z, CvA(E, Q, B, z, A, I))
    });
    var H = X ? W ? getAllKeysIn : QVA : W ? lj : keys,
        C = F ? void 0 : H(A);
    return ql0(C || A, function(E, z) {
        if (C) z = E, E = A[z];
        assignValue(Y, z, CvA(E, Q, B, z, A, I))
    }), Y
}
var D74 = 1,
    H74 = 2,
    C74 = 4,
    el0 = "[object Arguments]",
    E74 = "[object Array]",
    z74 = "[object Boolean]",
    U74 = "[object Date]",
    $74 = "[object Error]",
    Ai0 = "[object Function]",
    w74 = "[object GeneratorFunction]",
    q74 = "[object Map]",
    N74 = "[object Number]",
    Qi0 = "[object Object]",
    L74 = "[object RegExp]",
    M74 = "[object Set]",
    O74 = "[object String]",
    R74 = "[object Symbol]",
    T74 = "[object WeakMap]",
    P74 = "[object ArrayBuffer]",
    j74 = "[object DataView]",
    S74 = "[object Float32Array]",
    _74 = "[object Float64Array]",
    k74 = "[object Int8Array]",
    y74 = "[object Int16Array]",
    x74 = "[object Int32Array]",
    v74 = "[object Uint8Array]",
    b74 = "[object Uint8ClampedArray]",
    f74 = "[object Uint16Array]",
    h74 = "[object Uint32Array]",
    wZ, baseClone;
var vC1 = lazyLoader(() => {
    rFA();
    Nl0();
    EKA();
    Ml0();
    Rl0();
    YC1();
    WC1();
    Pl0();
    Sl0();
    uW1();
    xC1();
    BVA();
    kl0();
    dl0();
    XC1();
    gC();
    tFA();
    nl0();
    jN();
    tl0();
    Hs();
    S9A();
    wZ = {};
    wZ[el0] = wZ[E74] = wZ[P74] = wZ[j74] = wZ[z74] = wZ[U74] = wZ[S74] = wZ[_74] = wZ[k74] = wZ[y74] = wZ[x74] = wZ[q74] = wZ[N74] = wZ[Qi0] = wZ[L74] = wZ[M74] = wZ[O74] = wZ[R74] = wZ[v74] = wZ[b74] = wZ[f74] = wZ[h74] = !0;
    wZ[$74] = wZ[Ai0] = wZ[T74] = !1;
    baseClone = CvA
});

function m74(A) {
    return baseClone(A, g74 | u74)
}
var g74 = 1,
    u74 = 4,
    Jv;
var zvA = lazyLoader(() => {
    vC1();
    Jv = m74
});
var Gi0 = moduleWrapper((KZ7, Bi0) => {
    var Pm = nodeRequire("constants"),
        d74 = process.cwd,
        UvA = null,
        c74 = process.env.GRACEFUL_FS_PLATFORM || process.platform;
    process.cwd = function() {
        if (!UvA) UvA = d74.call(process);
        return UvA
    };
    try {
        process.cwd()
    } catch (A) {}
    if (typeof process.chdir === "function") {
        if ($vA = process.chdir, process.chdir = function(A) {
                UvA = null, $vA.call(process, A)
            }, Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, $vA)
    }
    var $vA;
    Bi0.exports = p74;

    function p74(A) {
        if (Pm.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) Q(A);
        if (!A.lutimes) B(A);
        if (A.chown = I(A.chown), A.fchown = I(A.fchown), A.lchown = I(A.lchown), A.chmod = G(A.chmod), A.fchmod = G(A.fchmod), A.lchmod = G(A.lchmod), A.chownSync = Y(A.chownSync), A.fchownSync = Y(A.fchownSync), A.lchownSync = Y(A.lchownSync), A.chmodSync = Z(A.chmodSync), A.fchmodSync = Z(A.fchmodSync), A.lchmodSync = Z(A.lchmodSync), A.stat = J(A.stat), A.fstat = J(A.fstat), A.lstat = J(A.lstat), A.statSync = W(A.statSync), A.fstatSync = W(A.fstatSync), A.lstatSync = W(A.lstatSync), A.chmod && !A.lchmod) A.lchmod = function(F, V, K) {
            if (K) process.nextTick(K)
        }, A.lchmodSync = function() {};
        if (A.chown && !A.lchown) A.lchown = function(F, V, K, D) {
            if (D) process.nextTick(D)
        }, A.lchownSync = function() {};
        if (c74 === "win32") A.rename = typeof A.rename !== "function" ? A.rename : function(F) {
            function V(K, D, H) {
                var C = Date.now(),
                    E = 0;
                F(K, D, function z(w) {
                    if (w && (w.code === "EACCES" || w.code === "EPERM" || w.code === "EBUSY") && Date.now() - C < 60000) {
                        if (setTimeout(function() {
                                A.stat(D, function(N, q) {
                                    if (N && N.code === "ENOENT") F(K, D, z);
                                    else H(w)
                                })
                            }, E), E < 100) E += 10;
                        return
                    }
                    if (H) H(w)
                })
            }
            if (Object.setPrototypeOf) Object.setPrototypeOf(V, F);
            return V
        }(A.rename);
        A.read = typeof A.read !== "function" ? A.read : function(F) {
            function V(K, D, H, C, E, z) {
                var w;
                if (z && typeof z === "function") {
                    var N = 0;
                    w = function(q, R, P) {
                        if (q && q.code === "EAGAIN" && N < 10) return N++, F.call(A, K, D, H, C, E, w);
                        z.apply(this, arguments)
                    }
                }
                return F.call(A, K, D, H, C, E, w)
            }
            if (Object.setPrototypeOf) Object.setPrototypeOf(V, F);
            return V
        }(A.read), A.readSync = typeof A.readSync !== "function" ? A.readSync : function(F) {
            return function(V, K, D, H, C) {
                var E = 0;
                while (!0) try {
                    return F.call(A, V, K, D, H, C)
                } catch (z) {
                    if (z.code === "EAGAIN" && E < 10) {
                        E++;
                        continue
                    }
                    throw z
                }
            }
        }(A.readSync);

        function Q(F) {
            F.lchmod = function(V, K, D) {
                F.open(V, Pm.O_WRONLY | Pm.O_SYMLINK, K, function(H, C) {
                    if (H) {
                        if (D) D(H);
                        return
                    }
                    F.fchmod(C, K, function(E) {
                        F.close(C, function(z) {
                            if (D) D(E || z)
                        })
                    })
                })
            }, F.lchmodSync = function(V, K) {
                var D = F.openSync(V, Pm.O_WRONLY | Pm.O_SYMLINK, K),
                    H = !0,
                    C;
                try {
                    C = F.fchmodSync(D, K), H = !1
                } finally {
                    if (H) try {
                        F.closeSync(D)
                    } catch (E) {} else F.closeSync(D)
                }
                return C
            }
        }

        function B(F) {
            if (Pm.hasOwnProperty("O_SYMLINK") && F.futimes) F.lutimes = function(V, K, D, H) {
                F.open(V, Pm.O_SYMLINK, function(C, E) {
                    if (C) {
                        if (H) H(C);