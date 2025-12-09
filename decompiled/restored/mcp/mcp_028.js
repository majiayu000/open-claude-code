/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: mcp_028.js
 * 处理时间: 2025-12-09T03:37:25.177Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  6x) = require(moduleName) - Node.js require
 * GA         (  1x) = esmImport(module) - ESM import helper
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 28/29
 * Lines: 439687 - 441178 (1492 lines)
 * Original file: cli.js
 */

    if (B === 0) return;
    let G = B !== null ? {
        ...Q,
        sample_rate: B
    } : Q;
    if (VC9(A, G), zC9()) QW0(A, G);
    if (UC9()) FK0(A, G);
    om1(A, G)
}
async function wa(A, Q) {
    let B = am1(A);
    if (B === 0) return;
    let G = B !== null ? {
            ...Q,
            sample_rate: B
        } : Q,
        Z = [WK0(A, G)];
    if (zC9()) Z.push(QW0(A, G));
    if (UC9()) Z.push(FK0(A, G));
    om1(A, G), await Promise.all(Z)
}
var CC9 = "tengu_log_segment_events",
    EC9 = "tengu_log_datadog_events",
    VK0 = void 0,
    KK0 = void 0;
var w0 = L(() => {
    O9();
    BW0();
    HC9();
    jQ();
    _$A()
});
import {
    join as cx3,
    dirname as px3
} from "path";

function CK0() {
    if (!DK0) DK0 = UA("perf_hooks").performance;
    return DK0
}

function v4(A) {
    if (!LC9) return;
    if (CK0().mark(A), GJ1) MC9.set(A, process.memoryUsage())
}

function HK0(A) {
    return A.toFixed(3)
}

function wC9(A) {
    return (A / 1024 / 1024).toFixed(2)
}

function qC9() {
    if (!GJ1) return "Startup profiling not enabled";
    let Q = CK0().getEntriesByType("mark");
    if (Q.length === 0) return "No profiling checkpoints recorded";
    let B = [];
    B.push("=".repeat(80)), B.push("STARTUP PROFILING REPORT"), B.push("=".repeat(80)), B.push("");
    let G = 0;
    for (let Y of Q) {
        let J = HK0(Y.startTime),
            W = HK0(Y.startTime - G),
            X = MC9.get(Y.name),
            F = X ? ` | RSS: ${wC9(X.rss)}MB, Heap: ${wC9(X.heapUsed)}MB` : "";
        B.push(`[+${J.padStart(8)}ms] (+${W.padStart(7)}ms) ${Y.name}${F}`), G = Y.startTime
    }
    let Z = Q[Q.length - 1],
        I = HK0(Z?.startTime ?? 0);
    return B.push(""), B.push(`Total startup time: ${I}ms`), B.push("=".repeat(80)), B.join(`
`)
}

function OC9() {
    if (ax3(), GJ1) {
        let A = nx3(),
            Q = px3(A),
            B = OA();
        if (!B.existsSync(Q)) B.mkdirSync(Q);
        B.writeFileSync(A, qC9(), {
            encoding: "utf8",
            flush: !0
        }), g("Startup profiling report:"), g(qC9())
    }
}

function nx3() {
    return cx3(PQ(), "startup-perf", `${G0()}.txt`)
}

function ax3() {
    if (!NC9) return;
    let Q = CK0().getEntriesByType("mark");
    if (Q.length === 0) return;
    let B = new Map;
    for (let Z of Q) B.set(Z.name, Z.startTime);
    let G = {};
    for (let [Z, [I, Y]] of Object.entries(ix3)) {
        let J = B.get(I),
            W = B.get(Y);
        if (J !== void 0 && W !== void 0) G[`${Z}_ms`] = Math.round(W - J)
    }
    G.checkpoint_count = Q.length, BA("tengu_startup_perf", G)
}
var GJ1, lx3 = 0.001,
    NC9, LC9, MC9, DK0 = null,
    ix3;
var Qe = L(() => {
    D0();
    w0();
    hQ();
    S0();
    o0();
    GJ1 = process.env.CLAUDE_CODE_PROFILE_STARTUP === "1", NC9 = Math.random() < lx3, LC9 = GJ1 || NC9, MC9 = new Map;
    ix3 = {
        import_time: ["cli_entry", "main_tsx_imports_loaded"],
        init_time: ["init_function_start", "init_function_end"],
        settings_time: ["eagerLoadSettings_start", "eagerLoadSettings_end"],
        total_time: ["cli_entry", "main_after_run"]
    };
    if (LC9) v4("profiler_initialized")
});
var USA = U((sx3) => {
    class EK0 extends Error {
        constructor(A, Q, B) {
            super(B);
            Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name, this.code = Q, this.exitCode = A, this.nestedError = void 0
        }
    }
    class RC9 extends EK0 {
        constructor(A) {
            super(1, "commander.invalidArgument", A);
            Error.captureStackTrace(this, this.constructor), this.name = this.constructor.name
        }
    }
    sx3.CommanderError = EK0;
    sx3.InvalidArgumentError = RC9
});
var ZJ1 = U((Av3) => {
    var {
        InvalidArgumentError: tx3
    } = USA();
    class TC9 {
        constructor(A, Q) {
            switch (this.description = Q || "", this.variadic = !1, this.parseArg = void 0, this.defaultValue = void 0, this.defaultValueDescription = void 0, this.argChoices = void 0, A[0]) {
                case "<":
                    this.required = !0, this._name = A.slice(1, -1);
                    break;
                case "[":
                    this.required = !1, this._name = A.slice(1, -1);
                    break;
                default:
                    this.required = !0, this._name = A;
                    break
            }
            if (this._name.length > 3 && this._name.slice(-3) === "...") this.variadic = !0, this._name = this._name.slice(0, -3)
        }
        name() {
            return this._name
        }
        _concatValue(A, Q) {
            if (Q === this.defaultValue || !Array.isArray(Q)) return [A];
            return Q.concat(A)
        }
        default (A, Q) {
            return this.defaultValue = A, this.defaultValueDescription = Q, this
        }
        argParser(A) {
            return this.parseArg = A, this
        }
        choices(A) {
            return this.argChoices = A.slice(), this.parseArg = (Q, B) => {
                if (!this.argChoices.includes(Q)) throw new tx3(`Allowed choices are ${this.argChoices.join(", ")}.`);
                if (this.variadic) return this._concatValue(Q, B);
                return Q
            }, this
        }
        argRequired() {
            return this.required = !0, this
        }
        argOptional() {
            return this.required = !1, this
        }
    }

    function ex3(A) {
        let Q = A.name() + (A.variadic === !0 ? "..." : "");
        return A.required ? "<" + Q + ">" : "[" + Q + "]"
    }
    Av3.Argument = TC9;
    Av3.humanReadableArgName = ex3
});
var zK0 = U((Zv3) => {
    var {
        humanReadableArgName: Gv3
    } = ZJ1();
    class PC9 {
        constructor() {
            this.helpWidth = void 0, this.sortSubcommands = !1, this.sortOptions = !1, this.showGlobalOptions = !1
        }
        visibleCommands(A) {
            let Q = A.commands.filter((G) => !G._hidden),
                B = A._getHelpCommand();
            if (B && !B._hidden) Q.push(B);
            if (this.sortSubcommands) Q.sort((G, Z) => {
                return G.name().localeCompare(Z.name())
            });
            return Q
        }
        compareOptions(A, Q) {
            let B = (G) => {
                return G.short ? G.short.replace(/^-/, "") : G.long.replace(/^--/, "")
            };
            return B(A).localeCompare(B(Q))
        }
        visibleOptions(A) {
            let Q = A.options.filter((G) => !G.hidden),
                B = A._getHelpOption();
            if (B && !B.hidden) {
                let G = B.short && A._findOption(B.short),
                    Z = B.long && A._findOption(B.long);
                if (!G && !Z) Q.push(B);
                else if (B.long && !Z) Q.push(A.createOption(B.long, B.description));
                else if (B.short && !G) Q.push(A.createOption(B.short, B.description))
            }
            if (this.sortOptions) Q.sort(this.compareOptions);
            return Q
        }
        visibleGlobalOptions(A) {
            if (!this.showGlobalOptions) return [];
            let Q = [];
            for (let B = A.parent; B; B = B.parent) {
                let G = B.options.filter((Z) => !Z.hidden);
                Q.push(...G)
            }
            if (this.sortOptions) Q.sort(this.compareOptions);
            return Q
        }
        visibleArguments(A) {
            if (A._argsDescription) A.registeredArguments.forEach((Q) => {
                Q.description = Q.description || A._argsDescription[Q.name()] || ""
            });
            if (A.registeredArguments.find((Q) => Q.description)) return A.registeredArguments;
            return []
        }
        subcommandTerm(A) {
            let Q = A.registeredArguments.map((B) => Gv3(B)).join(" ");
            return A._name + (A._aliases[0] ? "|" + A._aliases[0] : "") + (A.options.length ? " [options]" : "") + (Q ? " " + Q : "")
        }
        optionTerm(A) {
            return A.flags
        }
        argumentTerm(A) {
            return A.name()
        }
        longestSubcommandTermLength(A, Q) {
            return Q.visibleCommands(A).reduce((B, G) => {
                return Math.max(B, Q.subcommandTerm(G).length)
            }, 0)
        }
        longestOptionTermLength(A, Q) {
            return Q.visibleOptions(A).reduce((B, G) => {
                return Math.max(B, Q.optionTerm(G).length)
            }, 0)
        }
        longestGlobalOptionTermLength(A, Q) {
            return Q.visibleGlobalOptions(A).reduce((B, G) => {
                return Math.max(B, Q.optionTerm(G).length)
            }, 0)
        }
        longestArgumentTermLength(A, Q) {
            return Q.visibleArguments(A).reduce((B, G) => {
                return Math.max(B, Q.argumentTerm(G).length)
            }, 0)
        }
        commandUsage(A) {
            let Q = A._name;
            if (A._aliases[0]) Q = Q + "|" + A._aliases[0];
            let B = "";
            for (let G = A.parent; G; G = G.parent) B = G.name() + " " + B;
            return B + Q + " " + A.usage()
        }
        commandDescription(A) {
            return A.description()
        }
        subcommandDescription(A) {
            return A.summary() || A.description()
        }
        optionDescription(A) {
            let Q = [];
            if (A.argChoices) Q.push(`choices: ${A.argChoices.map((B)=>JSON.stringify(B)).join(", ")}`);
            if (A.defaultValue !== void 0) {
                if (A.required || A.optional || A.isBoolean() && typeof A.defaultValue === "boolean") Q.push(`default: ${A.defaultValueDescription||JSON.stringify(A.defaultValue)}`)
            }
            if (A.presetArg !== void 0 && A.optional) Q.push(`preset: ${JSON.stringify(A.presetArg)}`);
            if (A.envVar !== void 0) Q.push(`env: ${A.envVar}`);
            if (Q.length > 0) return `${A.description} (${Q.join(", ")})`;
            return A.description
        }
        argumentDescription(A) {
            let Q = [];
            if (A.argChoices) Q.push(`choices: ${A.argChoices.map((B)=>JSON.stringify(B)).join(", ")}`);
            if (A.defaultValue !== void 0) Q.push(`default: ${A.defaultValueDescription||JSON.stringify(A.defaultValue)}`);
            if (Q.length > 0) {
                let B = `(${Q.join(", ")})`;
                if (A.description) return `${A.description} ${B}`;
                return B
            }
            return A.description
        }
        formatHelp(A, Q) {
            let B = Q.padWidth(A, Q),
                G = Q.helpWidth || 80,
                Z = 2,
                I = 2;

            function Y(D, H) {
                if (H) {
                    let C = `${D.padEnd(B+2)}${H}`;
                    return Q.wrap(C, G - 2, B + 2)
                }
                return D
            }

            function J(D) {
                return D.join(`
`).replace(/^/gm, " ".repeat(2))
            }
            let W = [`Usage: ${Q.commandUsage(A)}`, ""],
                X = Q.commandDescription(A);
            if (X.length > 0) W = W.concat([Q.wrap(X, G, 0), ""]);
            let F = Q.visibleArguments(A).map((D) => {
                return Y(Q.argumentTerm(D), Q.argumentDescription(D))
            });
            if (F.length > 0) W = W.concat(["Arguments:", J(F), ""]);
            let V = Q.visibleOptions(A).map((D) => {
                return Y(Q.optionTerm(D), Q.optionDescription(D))
            });
            if (V.length > 0) W = W.concat(["Options:", J(V), ""]);
            if (this.showGlobalOptions) {
                let D = Q.visibleGlobalOptions(A).map((H) => {
                    return Y(Q.optionTerm(H), Q.optionDescription(H))
                });
                if (D.length > 0) W = W.concat(["Global Options:", J(D), ""])
            }
            let K = Q.visibleCommands(A).map((D) => {
                return Y(Q.subcommandTerm(D), Q.subcommandDescription(D))
            });
            if (K.length > 0) W = W.concat(["Commands:", J(K), ""]);
            return W.join(`
`)
        }
        padWidth(A, Q) {
            return Math.max(Q.longestOptionTermLength(A, Q), Q.longestGlobalOptionTermLength(A, Q), Q.longestSubcommandTermLength(A, Q), Q.longestArgumentTermLength(A, Q))
        }
        wrap(A, Q, B, G = 40) {
            let I = new RegExp(`[\\n][${" \\f\\t\\v   -   　\uFEFF"}]+`);
            if (A.match(I)) return A;
            let Y = Q - B;
            if (Y < G) return A;
            let J = A.slice(0, B),
                W = A.slice(B).replace(`\r
`, `
`),
                X = " ".repeat(B),
                V = `\\s${"​"}`,
                K = new RegExp(`
|.{1,${Y-1}}([${V}]|$)|[^${V}]+?([${V}]|$)`, "g"),
                D = W.match(K) || [];
            return J + D.map((H, C) => {
                if (H === `
`) return "";
                return (C > 0 ? X : "") + H.trimEnd()
            }).join(`
`)
        }
    }
    Zv3.Help = PC9
});
var UK0 = U((Xv3) => {
    var {
        InvalidArgumentError: Yv3
    } = USA();
    class jC9 {
        constructor(A, Q) {
            this.flags = A, this.description = Q || "", this.required = A.includes("<"), this.optional = A.includes("["), this.variadic = /\w\.\.\.[>\]]$/.test(A), this.mandatory = !1;
            let B = Wv3(A);
            if (this.short = B.shortFlag, this.long = B.longFlag, this.negate = !1, this.long) this.negate = this.long.startsWith("--no-");
            this.defaultValue = void 0, this.defaultValueDescription = void 0, this.presetArg = void 0, this.envVar = void 0, this.parseArg = void 0, this.hidden = !1, this.argChoices = void 0, this.conflictsWith = [], this.implied = void 0
        }
        default (A, Q) {
            return this.defaultValue = A, this.defaultValueDescription = Q, this
        }
        preset(A) {
            return this.presetArg = A, this
        }
        conflicts(A) {
            return this.conflictsWith = this.conflictsWith.concat(A), this
        }
        implies(A) {
            let Q = A;
            if (typeof A === "string") Q = {
                [A]: !0
            };
            return this.implied = Object.assign(this.implied || {}, Q), this
        }
        env(A) {
            return this.envVar = A, this
        }
        argParser(A) {
            return this.parseArg = A, this
        }
        makeOptionMandatory(A = !0) {
            return this.mandatory = !!A, this
        }
        hideHelp(A = !0) {
            return this.hidden = !!A, this
        }
        _concatValue(A, Q) {
            if (Q === this.defaultValue || !Array.isArray(Q)) return [A];
            return Q.concat(A)
        }
        choices(A) {
            return this.argChoices = A.slice(), this.parseArg = (Q, B) => {
                if (!this.argChoices.includes(Q)) throw new Yv3(`Allowed choices are ${this.argChoices.join(", ")}.`);
                if (this.variadic) return this._concatValue(Q, B);
                return Q
            }, this
        }
        name() {
            if (this.long) return this.long.replace(/^--/, "");
            return this.short.replace(/^-/, "")
        }
        attributeName() {
            return Jv3(this.name().replace(/^no-/, ""))
        }
        is(A) {
            return this.short === A || this.long === A
        }
        isBoolean() {
            return !this.required && !this.optional && !this.negate
        }
    }
    class SC9 {
        constructor(A) {
            this.positiveOptions = new Map, this.negativeOptions = new Map, this.dualOptions = new Set, A.forEach((Q) => {
                if (Q.negate) this.negativeOptions.set(Q.attributeName(), Q);
                else this.positiveOptions.set(Q.attributeName(), Q)
            }), this.negativeOptions.forEach((Q, B) => {
                if (this.positiveOptions.has(B)) this.dualOptions.add(B)
            })
        }
        valueFromOption(A, Q) {
            let B = Q.attributeName();
            if (!this.dualOptions.has(B)) return !0;
            let G = this.negativeOptions.get(B).presetArg,
                Z = G !== void 0 ? G : !1;
            return Q.negate === (Z === A)
        }
    }

    function Jv3(A) {
        return A.split("-").reduce((Q, B) => {
            return Q + B[0].toUpperCase() + B.slice(1)
        })
    }

    function Wv3(A) {
        let Q, B, G = A.split(/[ |,]+/);
        if (G.length > 1 && !/^[[<]/.test(G[1])) Q = G.shift();
        if (B = G.shift(), !Q && /^-[^-]$/.test(B)) Q = B, B = void 0;
        return {
            shortFlag: Q,
            longFlag: B
        }
    }
    Xv3.Option = jC9;
    Xv3.DualOptions = SC9
});
var _C9 = U((Hv3) => {
    function Kv3(A, Q) {
        if (Math.abs(A.length - Q.length) > 3) return Math.max(A.length, Q.length);
        let B = [];
        for (let G = 0; G <= A.length; G++) B[G] = [G];
        for (let G = 0; G <= Q.length; G++) B[0][G] = G;
        for (let G = 1; G <= Q.length; G++)
            for (let Z = 1; Z <= A.length; Z++) {
                let I = 1;
                if (A[Z - 1] === Q[G - 1]) I = 0;
                else I = 1;
                if (B[Z][G] = Math.min(B[Z - 1][G] + 1, B[Z][G - 1] + 1, B[Z - 1][G - 1] + I), Z > 1 && G > 1 && A[Z - 1] === Q[G - 2] && A[Z - 2] === Q[G - 1]) B[Z][G] = Math.min(B[Z][G], B[Z - 2][G - 2] + 1)
            }
        return B[A.length][Q.length]
    }

    function Dv3(A, Q) {
        if (!Q || Q.length === 0) return "";
        Q = Array.from(new Set(Q));
        let B = A.startsWith("--");
        if (B) A = A.slice(2), Q = Q.map((Y) => Y.slice(2));
        let G = [],
            Z = 3,
            I = 0.4;
        if (Q.forEach((Y) => {
                if (Y.length <= 1) return;
                let J = Kv3(A, Y),
                    W = Math.max(A.length, Y.length);
                if ((W - J) / W > I) {
                    if (J < Z) Z = J, G = [Y];
                    else if (J === Z) G.push(Y)
                }
            }), G.sort((Y, J) => Y.localeCompare(J)), B) G = G.map((Y) => `--${Y}`);
        if (G.length > 1) return `
(Did you mean one of ${G.join(", ")}?)`;
        if (G.length === 1) return `
(Did you mean ${G[0]}?)`;
        return ""
    }
    Hv3.suggestSimilar = Dv3
});
var vC9 = U((qv3) => {
    var Ev3 = UA("node:events").EventEmitter,
        $K0 = UA("node:child_process"),
        ig = UA("node:path"),
        wK0 = UA("node:fs"),
        oJ = UA("node:process"),
        {
            Argument: zv3,
            humanReadableArgName: Uv3
        } = ZJ1(),
        {
            CommanderError: qK0
        } = USA(),
        {
            Help: $v3
        } = zK0(),
        {
            Option: kC9,
            DualOptions: wv3
        } = UK0(),
        {
            suggestSimilar: yC9
        } = _C9();
    class NK0 extends Ev3 {
        constructor(A) {
            super();
            this.commands = [], this.options = [], this.parent = null, this._allowUnknownOption = !1, this._allowExcessArguments = !0, this.registeredArguments = [], this._args = this.registeredArguments, this.args = [], this.rawArgs = [], this.processedArgs = [], this._scriptPath = null, this._name = A || "", this._optionValues = {}, this._optionValueSources = {}, this._storeOptionsAsProperties = !1, this._actionHandler = null, this._executableHandler = !1, this._executableFile = null, this._executableDir = null, this._defaultCommandName = null, this._exitCallback = null, this._aliases = [], this._combineFlagAndOptionalValue = !0, this._description = "", this._summary = "", this._argsDescription = void 0, this._enablePositionalOptions = !1, this._passThroughOptions = !1, this._lifeCycleHooks = {}, this._showHelpAfterError = !1, this._showSuggestionAfterError = !0, this._outputConfiguration = {
                writeOut: (Q) => oJ.stdout.write(Q),
                writeErr: (Q) => oJ.stderr.write(Q),
                getOutHelpWidth: () => oJ.stdout.isTTY ? oJ.stdout.columns : void 0,
                getErrHelpWidth: () => oJ.stderr.isTTY ? oJ.stderr.columns : void 0,
                outputError: (Q, B) => B(Q)
            }, this._hidden = !1, this._helpOption = void 0, this._addImplicitHelpCommand = void 0, this._helpCommand = void 0, this._helpConfiguration = {}
        }
        copyInheritedSettings(A) {
            return this._outputConfiguration = A._outputConfiguration, this._helpOption = A._helpOption, this._helpCommand = A._helpCommand, this._helpConfiguration = A._helpConfiguration, this._exitCallback = A._exitCallback, this._storeOptionsAsProperties = A._storeOptionsAsProperties, this._combineFlagAndOptionalValue = A._combineFlagAndOptionalValue, this._allowExcessArguments = A._allowExcessArguments, this._enablePositionalOptions = A._enablePositionalOptions, this._showHelpAfterError = A._showHelpAfterError, this._showSuggestionAfterError = A._showSuggestionAfterError, this
        }
        _getCommandAndAncestors() {
            let A = [];
            for (let Q = this; Q; Q = Q.parent) A.push(Q);
            return A
        }
        command(A, Q, B) {
            let G = Q,
                Z = B;
            if (typeof G === "object" && G !== null) Z = G, G = null;
            Z = Z || {};
            let [, I, Y] = A.match(/([^ ]+) *(.*)/), J = this.createCommand(I);
            if (G) J.description(G), J._executableHandler = !0;
            if (Z.isDefault) this._defaultCommandName = J._name;
            if (J._hidden = !!(Z.noHelp || Z.hidden), J._executableFile = Z.executableFile || null, Y) J.arguments(Y);
            if (this._registerCommand(J), J.parent = this, J.copyInheritedSettings(this), G) return this;
            return J
        }
        createCommand(A) {
            return new NK0(A)
        }
        createHelp() {
            return Object.assign(new $v3, this.configureHelp())
        }
        configureHelp(A) {
            if (A === void 0) return this._helpConfiguration;
            return this._helpConfiguration = A, this
        }
        configureOutput(A) {
            if (A === void 0) return this._outputConfiguration;
            return Object.assign(this._outputConfiguration, A), this
        }
        showHelpAfterError(A = !0) {
            if (typeof A !== "string") A = !!A;
            return this._showHelpAfterError = A, this
        }
        showSuggestionAfterError(A = !0) {
            return this._showSuggestionAfterError = !!A, this
        }
        addCommand(A, Q) {
            if (!A._name) throw Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
            if (Q = Q || {}, Q.isDefault) this._defaultCommandName = A._name;
            if (Q.noHelp || Q.hidden) A._hidden = !0;
            return this._registerCommand(A), A.parent = this, A._checkForBrokenPassThrough(), this
        }
        createArgument(A, Q) {
            return new zv3(A, Q)
        }
        argument(A, Q, B, G) {
            let Z = this.createArgument(A, Q);
            if (typeof B === "function") Z.default(G).argParser(B);
            else Z.default(B);
            return this.addArgument(Z), this
        }
        arguments(A) {
            return A.trim().split(/ +/).forEach((Q) => {
                this.argument(Q)
            }), this
        }
        addArgument(A) {
            let Q = this.registeredArguments.slice(-1)[0];
            if (Q && Q.variadic) throw Error(`only the last argument can be variadic '${Q.name()}'`);
            if (A.required && A.defaultValue !== void 0 && A.parseArg === void 0) throw Error(`a default value for a required argument is never used: '${A.name()}'`);
            return this.registeredArguments.push(A), this
        }
        helpCommand(A, Q) {
            if (typeof A === "boolean") return this._addImplicitHelpCommand = A, this;
            A = A ?? "help [command]";
            let [, B, G] = A.match(/([^ ]+) *(.*)/), Z = Q ?? "display help for command", I = this.createCommand(B);
            if (I.helpOption(!1), G) I.arguments(G);
            if (Z) I.description(Z);
            return this._addImplicitHelpCommand = !0, this._helpCommand = I, this
        }
        addHelpCommand(A, Q) {
            if (typeof A !== "object") return this.helpCommand(A, Q), this;
            return this._addImplicitHelpCommand = !0, this._helpCommand = A, this
        }
        _getHelpCommand() {
            if (this._addImplicitHelpCommand ?? (this.commands.length && !this._actionHandler && !this._findCommand("help"))) {
                if (this._helpCommand === void 0) this.helpCommand(void 0, void 0);
                return this._helpCommand
            }
            return null
        }
        hook(A, Q) {
            let B = ["preSubcommand", "preAction", "postAction"];
            if (!B.includes(A)) throw Error(`Unexpected value for event passed to hook : '${A}'.
Expecting one of '${B.join("', '")}'`);
            if (this._lifeCycleHooks[A]) this._lifeCycleHooks[A].push(Q);
            else this._lifeCycleHooks[A] = [Q];
            return this
        }
        exitOverride(A) {
            if (A) this._exitCallback = A;
            else this._exitCallback = (Q) => {
                if (Q.code !== "commander.executeSubCommandAsync") throw Q
            };
            return this
        }
        _exit(A, Q, B) {
            if (this._exitCallback) this._exitCallback(new qK0(A, Q, B));
            oJ.exit(A)
        }
        action(A) {
            let Q = (B) => {
                let G = this.registeredArguments.length,
                    Z = B.slice(0, G);
                if (this._storeOptionsAsProperties) Z[G] = this;
                else Z[G] = this.opts();
                return Z.push(this), A.apply(this, Z)
            };
            return this._actionHandler = Q, this
        }
        createOption(A, Q) {
            return new kC9(A, Q)
        }
        _callParseArg(A, Q, B, G) {
            try {
                return A.parseArg(Q, B)
            } catch (Z) {
                if (Z.code === "commander.invalidArgument") {
                    let I = `${G} ${Z.message}`;
                    this.error(I, {
                        exitCode: Z.exitCode,
                        code: Z.code
                    })
                }
                throw Z
            }
        }
        _registerOption(A) {
            let Q = A.short && this._findOption(A.short) || A.long && this._findOption(A.long);
            if (Q) {
                let B = A.long && this._findOption(A.long) ? A.long : A.short;
                throw Error(`Cannot add option '${A.flags}'${this._name&&` to command '${this._name}'`} due to conflicting flag '${B}'
-  already used by option '${Q.flags}'`)
            }
            this.options.push(A)
        }
        _registerCommand(A) {
            let Q = (G) => {
                    return [G.name()].concat(G.aliases())
                },
                B = Q(A).find((G) => this._findCommand(G));
            if (B) {
                let G = Q(this._findCommand(B)).join("|"),
                    Z = Q(A).join("|");
                throw Error(`cannot add command '${Z}' as already have command '${G}'`)
            }
            this.commands.push(A)
        }
        addOption(A) {
            this._registerOption(A);
            let Q = A.name(),
                B = A.attributeName();
            if (A.negate) {
                let Z = A.long.replace(/^--no-/, "--");
                if (!this._findOption(Z)) this.setOptionValueWithSource(B, A.defaultValue === void 0 ? !0 : A.defaultValue, "default")
            } else if (A.defaultValue !== void 0) this.setOptionValueWithSource(B, A.defaultValue, "default");
            let G = (Z, I, Y) => {
                if (Z == null && A.presetArg !== void 0) Z = A.presetArg;
                let J = this.getOptionValue(B);
                if (Z !== null && A.parseArg) Z = this._callParseArg(A, Z, J, I);
                else if (Z !== null && A.variadic) Z = A._concatValue(Z, J);
                if (Z == null)
                    if (A.negate) Z = !1;
                    else if (A.isBoolean() || A.optional) Z = !0;
                else Z = "";
                this.setOptionValueWithSource(B, Z, Y)
            };
            if (this.on("option:" + Q, (Z) => {
                    let I = `error: option '${A.flags}' argument '${Z}' is invalid.`;
                    G(Z, I, "cli")
                }), A.envVar) this.on("optionEnv:" + Q, (Z) => {
                let I = `error: option '${A.flags}' value '${Z}' from env '${A.envVar}' is invalid.`;
                G(Z, I, "env")
            });
            return this
        }
        _optionEx(A, Q, B, G, Z) {
            if (typeof Q === "object" && Q instanceof kC9) throw Error("To add an Option object use addOption() instead of option() or requiredOption()");
            let I = this.createOption(Q, B);
            if (I.makeOptionMandatory(!!A.mandatory), typeof G === "function") I.default(Z).argParser(G);
            else if (G instanceof RegExp) {
                let Y = G;
                G = (J, W) => {
                    let X = Y.exec(J);
                    return X ? X[0] : W
                }, I.default(Z).argParser(G)
            } else I.default(G);
            return this.addOption(I)
        }
        option(A, Q, B, G) {
            return this._optionEx({}, A, Q, B, G)
        }
        requiredOption(A, Q, B, G) {
            return this._optionEx({
                mandatory: !0
            }, A, Q, B, G)
        }
        combineFlagAndOptionalValue(A = !0) {
            return this._combineFlagAndOptionalValue = !!A, this
        }
        allowUnknownOption(A = !0) {
            return this._allowUnknownOption = !!A, this
        }
        allowExcessArguments(A = !0) {
            return this._allowExcessArguments = !!A, this
        }
        enablePositionalOptions(A = !0) {
            return this._enablePositionalOptions = !!A, this
        }
        passThroughOptions(A = !0) {
            return this._passThroughOptions = !!A, this._checkForBrokenPassThrough(), this
        }
        _checkForBrokenPassThrough() {
            if (this.parent && this._passThroughOptions && !this.parent._enablePositionalOptions) throw Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`)
        }
        storeOptionsAsProperties(A = !0) {
            if (this.options.length) throw Error("call .storeOptionsAsProperties() before adding options");
            if (Object.keys(this._optionValues).length) throw Error("call .storeOptionsAsProperties() before setting option values");
            return this._storeOptionsAsProperties = !!A, this
        }
        getOptionValue(A) {
            if (this._storeOptionsAsProperties) return this[A];
            return this._optionValues[A]
        }
        setOptionValue(A, Q) {
            return this.setOptionValueWithSource(A, Q, void 0)
        }
        setOptionValueWithSource(A, Q, B) {
            if (this._storeOptionsAsProperties) this[A] = Q;
            else this._optionValues[A] = Q;
            return this._optionValueSources[A] = B, this
        }
        getOptionValueSource(A) {
            return this._optionValueSources[A]
        }
        getOptionValueSourceWithGlobals(A) {
            let Q;
            return this._getCommandAndAncestors().forEach((B) => {
                if (B.getOptionValueSource(A) !== void 0) Q = B.getOptionValueSource(A)
            }), Q
        }
        _prepareUserArgs(A, Q) {
            if (A !== void 0 && !Array.isArray(A)) throw Error("first parameter to parse must be array or undefined");
            if (Q = Q || {}, A === void 0 && Q.from === void 0) {
                if (oJ.versions?.electron) Q.from = "electron";
                let G = oJ.execArgv ?? [];
                if (G.includes("-e") || G.includes("--eval") || G.includes("-p") || G.includes("--print")) Q.from = "eval"
            }
            if (A === void 0) A = oJ.argv;
            this.rawArgs = A.slice();
            let B;
            switch (Q.from) {
                case void 0:
                case "node":
                    this._scriptPath = A[1], B = A.slice(2);
                    break;
                case "electron":
                    if (oJ.defaultApp) this._scriptPath = A[1], B = A.slice(2);
                    else B = A.slice(1);
                    break;
                case "user":
                    B = A.slice(0);
                    break;
                case "eval":
                    B = A.slice(1);
                    break;
                default:
                    throw Error(`unexpected parse option { from: '${Q.from}' }`)
            }
            if (!this._name && this._scriptPath) this.nameFromFilename(this._scriptPath);
            return this._name = this._name || "program", B
        }
        parse(A, Q) {
            let B = this._prepareUserArgs(A, Q);
            return this._parseCommand([], B), this
        }
        async parseAsync(A, Q) {
            let B = this._prepareUserArgs(A, Q);
            return await this._parseCommand([], B), this
        }
        _executeSubCommand(A, Q) {
            Q = Q.slice();
            let B = !1,
                G = [".js", ".ts", ".tsx", ".mjs", ".cjs"];

            function Z(X, F) {
                let V = ig.resolve(X, F);
                if (wK0.existsSync(V)) return V;
                if (G.includes(ig.extname(F))) return;
                let K = G.find((D) => wK0.existsSync(`${V}${D}`));
                if (K) return `${V}${K}`;
                return
            }
            this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions();
            let I = A._executableFile || `${this._name}-${A._name}`,
                Y = this._executableDir || "";
            if (this._scriptPath) {
                let X;
                try {
                    X = wK0.realpathSync(this._scriptPath)
                } catch (F) {
                    X = this._scriptPath
                }
                Y = ig.resolve(ig.dirname(X), Y)
            }
            if (Y) {
                let X = Z(Y, I);
                if (!X && !A._executableFile && this._scriptPath) {
                    let F = ig.basename(this._scriptPath, ig.extname(this._scriptPath));
                    if (F !== this._name) X = Z(Y, `${F}-${A._name}`)
                }
                I = X || I
            }
            B = G.includes(ig.extname(I));
            let J;
            if (oJ.platform !== "win32")
                if (B) Q.unshift(I), Q = xC9(oJ.execArgv).concat(Q), J = $K0.spawn(oJ.argv[0], Q, {
                    stdio: "inherit"
                });
                else J = $K0.spawn(I, Q, {
                    stdio: "inherit"
                });
            else Q.unshift(I), Q = xC9(oJ.execArgv).concat(Q), J = $K0.spawn(oJ.execPath, Q, {
                stdio: "inherit"
            });
            if (!J.killed)["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"].forEach((F) => {
                oJ.on(F, () => {
                    if (J.killed === !1 && J.exitCode === null) J.kill(F)
                })
            });
            let W = this._exitCallback;
            J.on("close", (X) => {
                if (X = X ?? 1, !W) oJ.exit(X);
                else W(new qK0(X, "commander.executeSubCommandAsync", "(close)"))
            }), J.on("error", (X) => {
                if (X.code === "ENOENT") {
                    let F = Y ? `searched for local subcommand relative to directory '${Y}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory",
                        V = `'${I}' does not exist
 - if '${A._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${F}`;
                    throw Error(V)
                } else if (X.code === "EACCES") throw Error(`'${I}' not executable`);
                if (!W) oJ.exit(1);
                else {
                    let F = new qK0(1, "commander.executeSubCommandAsync", "(error)");
                    F.nestedError = X, W(F)
                }
            }), this.runningCommand = J
        }
        _dispatchSubcommand(A, Q, B) {
            let G = this._findCommand(A);
            if (!G) this.help({
                error: !0
            });
            let Z;
            return Z = this._chainOrCallSubCommandHook(Z, G, "preSubcommand"), Z = this._chainOrCall(Z, () => {
                if (G._executableHandler) this._executeSubCommand(G, Q.concat(B));
                else return G._parseCommand(Q, B)
            }), Z
        }
        _dispatchHelpCommand(A) {
            if (!A) this.help();
            let Q = this._findCommand(A);
            if (Q && !Q._executableHandler) Q.help();
            return this._dispatchSubcommand(A, [], [this._getHelpOption()?.long ?? this._getHelpOption()?.short ?? "--help"])
        }
        _checkNumberOfArguments() {
            if (this.registeredArguments.forEach((A, Q) => {
                    if (A.required && this.args[Q] == null) this.missingArgument(A.name())
                }), this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) return;
            if (this.args.length > this.registeredArguments.length) this._excessArguments(this.args)
        }
        _processArguments() {
            let A = (B, G, Z) => {
                let I = G;
                if (G !== null && B.parseArg) {
                    let Y = `error: command-argument value '${G}' is invalid for argument '${B.name()}'.`;
                    I = this._callParseArg(B, G, Z, Y)
                }
                return I
            };
            this._checkNumberOfArguments();
            let Q = [];
            this.registeredArguments.forEach((B, G) => {
                let Z = B.defaultValue;
                if (B.variadic) {
                    if (G < this.args.length) {
                        if (Z = this.args.slice(G), B.parseArg) Z = Z.reduce((I, Y) => {
                            return A(B, Y, I)
                        }, B.defaultValue)
                    } else if (Z === void 0) Z = []
                } else if (G < this.args.length) {
                    if (Z = this.args[G], B.parseArg) Z = A(B, Z, B.defaultValue)
                }
                Q[G] = Z
            }), this.processedArgs = Q
        }
        _chainOrCall(A, Q) {
            if (A && A.then && typeof A.then === "function") return A.then(() => Q());
            return Q()
        }
        _chainOrCallHooks(A, Q) {
            let B = A,
                G = [];
            if (this._getCommandAndAncestors().reverse().filter((Z) => Z._lifeCycleHooks[Q] !== void 0).forEach((Z) => {
                    Z._lifeCycleHooks[Q].forEach((I) => {
                        G.push({
                            hookedCommand: Z,
                            callback: I
                        })
                    })
                }), Q === "postAction") G.reverse();
            return G.forEach((Z) => {
                B = this._chainOrCall(B, () => {
                    return Z.callback(Z.hookedCommand, this)
                })
            }), B
        }
        _chainOrCallSubCommandHook(A, Q, B) {
            let G = A;
            if (this._lifeCycleHooks[B] !== void 0) this._lifeCycleHooks[B].forEach((Z) => {
                G = this._chainOrCall(G, () => {
                    return Z(this, Q)
                })
            });
            return G
        }
        _parseCommand(A, Q) {
            let B = this.parseOptions(Q);
            if (this._parseOptionsEnv(), this._parseOptionsImplied(), A = A.concat(B.operands), Q = B.unknown, this.args = A.concat(Q), A && this._findCommand(A[0])) return this._dispatchSubcommand(A[0], A.slice(1), Q);
            if (this._getHelpCommand() && A[0] === this._getHelpCommand().name()) return this._dispatchHelpCommand(A[1]);
            if (this._defaultCommandName) return this._outputHelpIfRequested(Q), this._dispatchSubcommand(this._defaultCommandName, A, Q);
            if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) this.help({
                error: !0
            });
            this._outputHelpIfRequested(B.unknown), this._checkForMissingMandatoryOptions(), this._checkForConflictingOptions();
            let G = () => {
                    if (B.unknown.length > 0) this.unknownOption(B.unknown[0])
                },
                Z = `command:${this.name()}`;
            if (this._actionHandler) {
                G(), this._processArguments();
                let I;
                if (I = this._chainOrCallHooks(I, "preAction"), I = this._chainOrCall(I, () => this._actionHandler(this.processedArgs)), this.parent) I = this._chainOrCall(I, () => {
                    this.parent.emit(Z, A, Q)
                });
                return I = this._chainOrCallHooks(I, "postAction"), I
            }
            if (this.parent && this.parent.listenerCount(Z)) G(), this._processArguments(), this.parent.emit(Z, A, Q);
            else if (A.length) {
                if (this._findCommand("*")) return this._dispatchSubcommand("*", A, Q);
                if (this.listenerCount("command:*")) this.emit("command:*", A, Q);
                else if (this.commands.length) this.unknownCommand();
                else G(), this._processArguments()
            } else if (this.commands.length) G(), this.help({
                error: !0
            });
            else G(), this._processArguments()
        }
        _findCommand(A) {
            if (!A) return;
            return this.commands.find((Q) => Q._name === A || Q._aliases.includes(A))
        }
        _findOption(A) {
            return this.options.find((Q) => Q.is(A))
        }
        _checkForMissingMandatoryOptions() {
            this._getCommandAndAncestors().forEach((A) => {
                A.options.forEach((Q) => {
                    if (Q.mandatory && A.getOptionValue(Q.attributeName()) === void 0) A.missingMandatoryOptionValue(Q)
                })
            })
        }
        _checkForConflictingLocalOptions() {
            let A = this.options.filter((B) => {
                let G = B.attributeName();
                if (this.getOptionValue(G) === void 0) return !1;
                return this.getOptionValueSource(G) !== "default"
            });
            A.filter((B) => B.conflictsWith.length > 0).forEach((B) => {
                let G = A.find((Z) => B.conflictsWith.includes(Z.attributeName()));
                if (G) this._conflictingOption(B, G)
            })
        }
        _checkForConflictingOptions() {
            this._getCommandAndAncestors().forEach((A) => {
                A._checkForConflictingLocalOptions()
            })
        }
        parseOptions(A) {
            let Q = [],
                B = [],
                G = Q,
                Z = A.slice();

            function I(J) {
                return J.length > 1 && J[0] === "-"
            }
            let Y = null;
            while (Z.length) {
                let J = Z.shift();
                if (J === "--") {
                    if (G === B) G.push(J);
                    G.push(...Z);
                    break
                }
                if (Y && !I(J)) {
                    this.emit(`option:${Y.name()}`, J);
                    continue
                }
                if (Y = null, I(J)) {
                    let W = this._findOption(J);
                    if (W) {
                        if (W.required) {
                            let X = Z.shift();
                            if (X === void 0) this.optionMissingArgument(W);
                            this.emit(`option:${W.name()}`, X)
                        } else if (W.optional) {
                            let X = null;
                            if (Z.length > 0 && !I(Z[0])) X = Z.shift();
                            this.emit(`option:${W.name()}`, X)
                        } else this.emit(`option:${W.name()}`);
                        Y = W.variadic ? W : null;
                        continue
                    }
                }
                if (J.length > 2 && J[0] === "-" && J[1] !== "-") {
                    let W = this._findOption(`-${J[1]}`);
                    if (W) {
                        if (W.required || W.optional && this._combineFlagAndOptionalValue) this.emit(`option:${W.name()}`, J.slice(2));
                        else this.emit(`option:${W.name()}`), Z.unshift(`-${J.slice(2)}`);
                        continue
                    }
                }
                if (/^--[^=]+=/.test(J)) {
                    let W = J.indexOf("="),
                        X = this._findOption(J.slice(0, W));
                    if (X && (X.required || X.optional)) {
                        this.emit(`option:${X.name()}`, J.slice(W + 1));
                        continue
                    }
                }
                if (I(J)) G = B;
                if ((this._enablePositionalOptions || this._passThroughOptions) && Q.length === 0 && B.length === 0) {
                    if (this._findCommand(J)) {
                        if (Q.push(J), Z.length > 0) B.push(...Z);
                        break
                    } else if (this._getHelpCommand() && J === this._getHelpCommand().name()) {
                        if (Q.push(J), Z.length > 0) Q.push(...Z);
                        break
                    } else if (this._defaultCommandName) {
                        if (B.push(J), Z.length > 0) B.push(...Z);
                        break
                    }
                }
                if (this._passThroughOptions) {
                    if (G.push(J), Z.length > 0) G.push(...Z);
                    break
                }
                G.push(J)
            }
            return {
                operands: Q,
                unknown: B
            }
        }
        opts() {
            if (this._storeOptionsAsProperties) {
                let A = {},
                    Q = this.options.length;
                for (let B = 0; B < Q; B++) {
                    let G = this.options[B].attributeName();
                    A[G] = G === this._versionOptionName ? this._version : this[G]
                }
                return A
            }
            return this._optionValues
        }
        optsWithGlobals() {
            return this._getCommandAndAncestors().reduce((A, Q) => Object.assign(A, Q.opts()), {})
        }
        error(A, Q) {
            if (this._outputConfiguration.outputError(`${A}
`, this._outputConfiguration.writeErr), typeof this._showHelpAfterError === "string") this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
            else if (this._showHelpAfterError) this._outputConfiguration.writeErr(`
`), this.outputHelp({
                error: !0
            });
            let B = Q || {},
                G = B.exitCode || 1,
                Z = B.code || "commander.error";
            this._exit(G, Z, A)
        }
        _parseOptionsEnv() {
            this.options.forEach((A) => {
                if (A.envVar && A.envVar in oJ.env) {
                    let Q = A.attributeName();
                    if (this.getOptionValue(Q) === void 0 || ["default", "config", "env"].includes(this.getOptionValueSource(Q)))
                        if (A.required || A.optional) this.emit(`optionEnv:${A.name()}`, oJ.env[A.envVar]);
                        else this.emit(`optionEnv:${A.name()}`)
                }
            })
        }
        _parseOptionsImplied() {
            let A = new wv3(this.options),
                Q = (B) => {
                    return this.getOptionValue(B) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(B))
                };
            this.options.filter((B) => B.implied !== void 0 && Q(B.attributeName()) && A.valueFromOption(this.getOptionValue(B.attributeName()), B)).forEach((B) => {
                Object.keys(B.implied).filter((G) => !Q(G)).forEach((G) => {
                    this.setOptionValueWithSource(G, B.implied[G], "implied")
                })
            })
        }
        missingArgument(A) {
            let Q = `error: missing required argument '${A}'`;
            this.error(Q, {
                code: "commander.missingArgument"
            })
        }
        optionMissingArgument(A) {
            let Q = `error: option '${A.flags}' argument missing`;
            this.error(Q, {
                code: "commander.optionMissingArgument"
            })
        }
        missingMandatoryOptionValue(A) {
            let Q = `error: required option '${A.flags}' not specified`;
            this.error(Q, {
                code: "commander.missingMandatoryOptionValue"
            })
        }
        _conflictingOption(A, Q) {
            let B = (I) => {
                    let Y = I.attributeName(),
                        J = this.getOptionValue(Y),
                        W = this.options.find((F) => F.negate && Y === F.attributeName()),
                        X = this.options.find((F) => !F.negate && Y === F.attributeName());
                    if (W && (W.presetArg === void 0 && J === !1 || W.presetArg !== void 0 && J === W.presetArg)) return W;
                    return X || I
                },
                G = (I) => {
                    let Y = B(I),
                        J = Y.attributeName();
                    if (this.getOptionValueSource(J) === "env") return `environment variable '${Y.envVar}'`;
                    return `option '${Y.flags}'`
                },
                Z = `error: ${G(A)} cannot be used with ${G(Q)}`;
            this.error(Z, {
                code: "commander.conflictingOption"
            })
        }
        unknownOption(A) {
            if (this._allowUnknownOption) return;
            let Q = "";
            if (A.startsWith("--") && this._showSuggestionAfterError) {
                let G = [],
                    Z = this;
                do {
                    let I = Z.createHelp().visibleOptions(Z).filter((Y) => Y.long).map((Y) => Y.long);
                    G = G.concat(I), Z = Z.parent
                } while (Z && !Z._enablePositionalOptions);
                Q = yC9(A, G)
            }
            let B = `error: unknown option '${A}'${Q}`;
            this.error(B, {
                code: "commander.unknownOption"
            })
        }
        _excessArguments(A) {
            if (this._allowExcessArguments) return;
            let Q = this.registeredArguments.length,
                B = Q === 1 ? "" : "s",
                Z = `error: too many arguments${this.parent?` for '${this.name()}'`:""}. Expected ${Q} argument${B} but got ${A.length}.`;
            this.error(Z, {
                code: "commander.excessArguments"
            })
        }
        unknownCommand() {
            let A = this.args[0],
                Q = "";
            if (this._showSuggestionAfterError) {
                let G = [];
                this.createHelp().visibleCommands(this).forEach((Z) => {
                    if (G.push(Z.name()), Z.alias()) G.push(Z.alias())
                }), Q = yC9(A, G)
            }
            let B = `error: unknown command '${A}'${Q}`;
            this.error(B, {
                code: "commander.unknownCommand"
            })
        }
        version(A, Q, B) {
            if (A === void 0) return this._version;
            this._version = A, Q = Q || "-V, --version", B = B || "output the version number";
            let G = this.createOption(Q, B);
            return this._versionOptionName = G.attributeName(), this._registerOption(G), this.on("option:" + G.name(), () => {
                this._outputConfiguration.writeOut(`${A}
`), this._exit(0, "commander.version", A)
            }), this
        }
        description(A, Q) {
            if (A === void 0 && Q === void 0) return this._description;
            if (this._description = A, Q) this._argsDescription = Q;
            return this
        }
        summary(A) {
            if (A === void 0) return this._summary;
            return this._summary = A, this
        }
        alias(A) {
            if (A === void 0) return this._aliases[0];
            let Q = this;
            if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) Q = this.commands[this.commands.length - 1];
            if (A === Q._name) throw Error("Command alias can't be the same as its name");
            let B = this.parent?._findCommand(A);
            if (B) {
                let G = [B.name()].concat(B.aliases()).join("|");
                throw Error(`cannot add alias '${A}' to command '${this.name()}' as already have command '${G}'`)
            }
            return Q._aliases.push(A), this
        }
        aliases(A) {
            if (A === void 0) return this._aliases;
            return A.forEach((Q) => this.alias(Q)), this
        }
        usage(A) {
            if (A === void 0) {
                if (this._usage) return this._usage;
                let Q = this.registeredArguments.map((B) => {
                    return Uv3(B)
                });
                return [].concat(this.options.length || this._helpOption !== null ? "[options]" : [], this.commands.length ? "[command]" : [], this.registeredArguments.length ? Q : []).join(" ")
            }
            return this._usage = A, this
        }
        name(A) {
            if (A === void 0) return this._name;
            return this._name = A, this
        }
        nameFromFilename(A) {
            return this._name = ig.basename(A, ig.extname(A)), this
        }
        executableDir(A) {
            if (A === void 0) return this._executableDir;
            return this._executableDir = A, this
        }
        helpInformation(A) {
            let Q = this.createHelp();
            if (Q.helpWidth === void 0) Q.helpWidth = A && A.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
            return Q.formatHelp(this, Q)
        }
        _getHelpContext(A) {
            A = A || {};
            let Q = {
                    error: !!A.error
                },
                B;
            if (Q.error) B = (G) => this._outputConfiguration.writeErr(G);
            else B = (G) => this._outputConfiguration.writeOut(G);
            return Q.write = A.write || B, Q.command = this, Q
        }
        outputHelp(A) {
            let Q;
            if (typeof A === "function") Q = A, A = void 0;
            let B = this._getHelpContext(A);
            this._getCommandAndAncestors().reverse().forEach((Z) => Z.emit("beforeAllHelp", B)), this.emit("beforeHelp", B);
            let G = this.helpInformation(B);
            if (Q) {
                if (G = Q(G), typeof G !== "string" && !Buffer.isBuffer(G)) throw Error("outputHelp callback must return a string or a Buffer")
            }
            if (B.write(G), this._getHelpOption()?.long) this.emit(this._getHelpOption().long);
            this.emit("afterHelp", B), this._getCommandAndAncestors().forEach((Z) => Z.emit("afterAllHelp", B))
        }
        helpOption(A, Q) {
            if (typeof A === "boolean") {
                if (A) this._helpOption = this._helpOption ?? void 0;
                else this._helpOption = null;
                return this
            }
            return A = A ?? "-h, --help", Q = Q ?? "display help for command", this._helpOption = this.createOption(A, Q), this
        }
        _getHelpOption() {
            if (this._helpOption === void 0) this.helpOption(void 0, void 0);
            return this._helpOption
        }
        addHelpOption(A) {
            return this._helpOption = A, this
        }
        help(A) {
            this.outputHelp(A);
            let Q = oJ.exitCode || 0;
            if (Q === 0 && A && typeof A !== "function" && A.error) Q = 1;
            this._exit(Q, "commander.help", "(outputHelp)")
        }
        addHelpText(A, Q) {
            let B = ["beforeAll", "before", "after", "afterAll"];
            if (!B.includes(A)) throw Error(`Unexpected value for position to addHelpText.
Expecting one of '${B.join("', '")}'`);
            let G = `${A}Help`;
            return this.on(G, (Z) => {
                let I;
                if (typeof Q === "function") I = Q({
                    error: Z.error,
                    command: Z.command
                });
                else I = Q;
                if (I) Z.write(`${I}
`)
            }), this
        }
        _outputHelpIfRequested(A) {
            let Q = this._getHelpOption();
            if (Q && A.find((G) => Q.is(G))) this.outputHelp(), this._exit(0, "commander.helpDisplayed", "(outputHelp)")
        }
    }

    function xC9(A) {
        return A.map((Q) => {
            if (!Q.startsWith("--inspect")) return Q;
            let B, G = "127.0.0.1",
                Z = "9229",
                I;
            if ((I = Q.match(/^(--inspect(-brk)?)$/)) !== null) B = I[1];
            else if ((I = Q.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null)
                if (B = I[1], /^\d+$/.test(I[3])) Z = I[3];
                else G = I[3];
            else if ((I = Q.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) B = I[1], G = I[3], Z = I[4];
            if (B && Z !== "0") return `${B}=${G}:${parseInt(Z)+1}`;
            return Q
        })
    }
    qv3.Command = NK0
});
var gC9 = U((Ov3) => {
    var {
        Argument: bC9
    } = ZJ1(), {
        Command: LK0
    } = vC9(), {
        CommanderError: Lv3,
        InvalidArgumentError: fC9
    } = USA(), {
        Help: Mv3
    } = zK0(), {
        Option: hC9
    } = UK0();
    Ov3.program = new LK0;
    Ov3.createCommand = (A) => new LK0(A);
    Ov3.createOption = (A, Q) => new hC9(A, Q);
    Ov3.createArgument = (A, Q) => new bC9(A, Q);
    Ov3.Command = LK0;
    Ov3.Option = hC9;
    Ov3.Argument = bC9;
    Ov3.Help = Mv3;
    Ov3.CommanderError = Lv3;
    Ov3.InvalidArgumentError = fC9;
    Ov3.InvalidOptionArgumentError = fC9
});
var mC9 = U((GN, uC9) => {
    var tP = gC9();
    GN = uC9.exports = {};
    GN.program = new tP.Command;
    GN.Argument = tP.Argument;
    GN.Command = tP.Command;
    GN.CommanderError = tP.CommanderError;
    GN.Help = tP.Help;
    GN.InvalidArgumentError = tP.InvalidArgumentError;
    GN.InvalidOptionArgumentError = tP.InvalidArgumentError;
    GN.Option = tP.Option;
    GN.createCommand = (A) => new tP.Command(A);
    GN.createOption = (A, Q) => new tP.Option(A, Q);
    GN.createArgument = (A, Q) => new tP.Argument(A, Q)
});
var dC9, _wI, kwI, ywI, xwI, vwI, bwI, fwI, IJ1, hwI, eF, gwI;
var MK0 = L(() => {
    dC9 = GA(mC9(), 1), {
        program: _wI,
        createCommand: kwI,
        createArgument: ywI,
        createOption: xwI,
        CommanderError: vwI,
        InvalidArgumentError: bwI,
        InvalidOptionArgumentError: fwI,
        Command: IJ1,
        Argument: hwI,
        Option: eF,
        Help: gwI
    } = dC9.default
});

function YJ1(A) {
    return A.map((Q) => ({
        name: v7(Q.name),
        type: Q.type,
        hasTools: Q.type === "connected" && Q.capabilities?.tools !== void 0,
        hasResources: Q.type === "connected" && Q.capabilities?.resources !== void 0,
        hasPrompts: Q.type === "connected" && Q.capabilities?.prompts !== void 0,
        serverInfo: Q.type === "connected" && "serverInfo" in Q ? Q.serverInfo : void 0
    }))
}
var OK0 = () => {};

function JJ1(A, Q) {
    let B = Q?.server,
        G = B ? v7(B) : void 0,
        Z = G ? `mcp__${G}__` : "mcp__";
    return A.filter((Y) => Y.name.startsWith(Z)).map((Y) => {
        let J = FU(Y.name);
        return {
            server: J?.serverName || "unknown",
            name: J?.toolName || Y.name,
            description: typeof Y.description === "function" ? void 0 : Y.description || "",
            fullName: Y.name
        }
    })
}
var RK0 = L(() => {
    xX()
});
async function WJ1(A, {
    server: Q,
    toolName: B
}) {
    let G = A.find((I) => I.name === `mcp__${Q}__${B}`);
    if (!G) return null;
    let Z = "";
    if (typeof G.description === "string") Z = G.description;