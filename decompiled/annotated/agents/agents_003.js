/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: agents_003.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (17次) = lazyLoader(fn) - Lazy module loader
 *   GA       (11次) = esmImport(module) - ESM import helper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 3/13
 * Lines: 403777 - 405276 (1500 lines)
 * Original file: cli.js
 */

async function wW0(A) {
    let {
        input: Q,
        memoryPath: B,
        helpers: G,
        isLoading: Z,
        mode: I,
        commands: Y,
        onInputChange: J,
        onModeChange: W,
        setPastedContents: X,
        onSubmitCountChange: F,
        setIDESelection: V,
        setIsLoading: K,
        setToolJSX: D,
        getToolUseContext: H,
        messages: C,
        mainLoopModel: E,
        pastedContents: z,
        ideSelection: w,
        setUserInputOnProcessing: N,
        setAbortController: q,
        onQuery: R,
        resetLoadingState: P,
        thinkingTokens: y,
        thinkingEnabled: v,
        getAppState: x,
        setAppState: p,
        onBeforeQuery: u
    } = A, {
        setCursorOffset: o,
        clearBuffer: l,
        resetHistory: k
    } = G;
    if (Q.trim() === "") return;
    if (["exit", "quit", ":q", ":q!", ":wq", ":wq!"].includes(Q.trim())) {
        if (Y.find((wA) => wA.name === "exit")) wW0({
            ...A,
            input: "/exit"
        });
        else mR3();
        return
    }
    let d = Q,
        QA = ajB(Q),
        IA = 0;
    for (let HA of QA) {
        let wA = z[HA.id];
        if (wA && wA.type === "text") d = d.replace(HA.match, wA.content), IA++
    }
    if (BA("tengu_paste_text", {
            pastedTextCount: IA
        }), I === "memory") {
        W("memorySelect");
        return
    }
    if (Z) {
        if (I !== "prompt" && I !== "memorySelect") return;
        if (I === "memorySelect" && B) {
            let HA = s9(),
                wA = H(C, [], HA, [], void 0, E);
            pP({
                input: d,
                mode: "memorySelect",
                setIsLoading: K,
                setToolJSX: D,
                context: wA,
                memoryPath: B,
                messages: C
            }), W("prompt")
        }
        ev2({
            value: d,
            mode: "prompt"
        }, p), J(""), o(0), X({}), k(), l();
        return
    }
    J(""), o(0), W("prompt"), X({}), V(void 0), F((HA) => HA + 1), l(), N89(), await O89({
        input: d,
        mode: I,
        messages: C,
        mainLoopModel: E,
        pastedContents: z,
        ideSelection: w,
        memoryPath: B,
        thinkingTokens: y,
        thinkingEnabled: v,
        querySource: A.querySource,
        getAppState: x,
        commands: Y,
        isLoading: Z,
        setIsLoading: K,
        setToolJSX: D,
        getToolUseContext: H,
        setUserInputOnProcessing: N,
        setAbortController: q,
        onQuery: R,
        resetLoadingState: P,
        setAppState: p,
        onBeforeQuery: u,
        resetHistory: k
    })
}
async function O89(A) {
    let {
        input: Q,
        mode: B,
        messages: G,
        mainLoopModel: Z,
        pastedContents: I,
        ideSelection: Y,
        memoryPath: J,
        thinkingTokens: W,
        thinkingEnabled: X,
        querySource: F,
        getAppState: V,
        isLoading: K,
        setIsLoading: D,
        setToolJSX: H,
        getToolUseContext: C,
        setUserInputOnProcessing: E,
        setAbortController: z,
        onQuery: w,
        setAppState: N,
        onBeforeQuery: q,
        resetHistory: R
    } = A, P = !K, y = s9();
    if (P) z(y);
    try {
        let v = dR3(B, W, Q, X);
        p7("query_process_user_input_start");
        let {
            messages: x,
            shouldQuery: p,
            allowedTools: u,
            skipHistory: o,
            maxThinkingTokens: l,
            model: k
        } = await pP({
            input: Q,
            mode: B,
            setIsLoading: D,
            setToolJSX: H,
            context: C(G, [], y, [], void 0, Z),
            pastedContents: I,
            ideSelection: Y,
            memoryPath: J,
            messages: G,
            setUserInputOnProcessing: E,
            isAlreadyProcessing: K,
            thinkingMetadata: v,
            querySource: F
        });
        if (p7("query_process_user_input_end"), JG()) p7("query_file_history_snapshot_start"), x.filter(Ln).forEach((d) => {
            UYA((QA) => {
                N((IA) => ({
                    ...IA,
                    fileHistory: QA(IA.fileHistory)
                }))
            }, d.uuid)
        }), p7("query_file_history_snapshot_end");
        if (H(null), x.length) {
            for (let IA of x)
                if (IA.type === "user") Jf({
                    display: ojB(Q, B),
                    pastedContents: I
                }), R();
            if ((await w(x, y, p, u ?? [], k ?? Z, l, B === "prompt" ? q : void 0, Q)).status === "completed") {
                let IA = await Qb2(V, N);
                if (IA.length > 0) await O89({
                    ...A,
                    input: IA.map((HA) => HA.value).join(`
`),
                    mode: "prompt"
                })
            }
        } else {
            if (!o) Jf({
                display: Q,
                pastedContents: I
            });
            if (R(), !K) z(null)
        }
    } finally {
        D(!1)
    }
}

function dR3(A, Q, B, G) {
    if (A !== "prompt") return;
    let Z = Q > 0,
        I = Z ? ZoA(B) : [],
        Y = !G && !Z;
    return {
        level: Y ? "none" : "high",
        disabled: Y,
        triggers: I.map((W) => ({
            start: W.start,
            end: W.end,
            text: B.slice(W.start, W.end)
        }))
    }
}
var R89 = L(() => {
    DWA();
    Pp();
    HGA();
    w0();
    UZ();
    zU();
    vXA();
    iU();
    QTA();
    Bh();
    _J();
    JjA()
});

function P89(A, Q) {
    return T89.useMemo(() => {
        if (A && Q && Q.length > 0) return i3A([...A, ...Q], "name");
        return A || []
    }, [A, Q])
}
var T89;
var j89 = L(() => {
    tiA();
    T89 = GA(VA(), 1)
});

function S89(A, Q) {
    if (Q) return A ? `agent:builtin:${A}` : "agent:default";
    else return "agent:custom"
}

function WjA() {
    let Q = c0()?.outputStyle ?? EK;
    if (Q === EK) return "repl_main_thread";
    return Q in zQA ? `repl_main_thread:outputStyle:${Q}` : "repl_main_thread:outputStyle:custom"
}
var qW0 = L(() => {
    RB();
    ry()
});

function BI1(A, Q) {
    return _89.useMemo(() => {
        if (RJ()) return A;
        return i3A([...A, ...Q], "name")
    }, [A, Q])
}
var _89;
var NW0 = L(() => {
    tiA();
    EE();
    _89 = GA(VA(), 1)
});

function LW0(A, Q) {
    return k89.useMemo(() => {
        if (Q.length > 0) return i3A([...A, ...Q], "name");
        return A
    }, [A, Q])
}
var k89;
var y89 = L(() => {
    tiA();
    k89 = GA(VA(), 1)
});
async function Ba(A, Q, B) {
    let G = A;
    return await Promise.all([...A.matchAll(cR3), ...A.matchAll(pR3)].map(async (Z) => {
        let I = Z[1]?.trim();
        if (I) try {
            let Y = await L$(X9, {
                command: I
            }, Q, xD({
                content: []
            }), "");
            if (Y.behavior !== "allow") throw g(`Bash command permission check failed for command in ${B}: ${I}. Error: ${Y.message}`), new rj(`Bash command permission check failed for pattern "${Z[0]}": ${Y.message||"Permission denied"}`);
            let {
                data: J
            } = await X9.call({
                command: I
            }, Q), W = x89(J.stdout, J.stderr);
            G = G.replace(Z[0], W)
        } catch (Y) {
            if (Y instanceof rj) throw Y;
            lR3(Y, Z[0])
        }
    })), G
}

function x89(A, Q, B = !1) {
    let G = [];
    if (A.trim()) G.push(A.trim());
    if (Q.trim())
        if (B) G.push(`[stderr: ${Q.trim()}]`);
        else G.push(`[stderr]
${Q.trim()}`);
    return G.join(B ? " " : `
`)
}

function lR3(A, Q, B = !1) {
    if (A instanceof oj) {
        if (A.interrupted) throw new rj(`Bash command interrupted for pattern "${Q}": [Command interrupted]`);
        let I = x89(A.stdout, A.stderr, B);
        throw new rj(`Bash command failed for pattern "${Q}": ${I}`)
    }
    let G = A instanceof Error ? A.message : String(A),
        Z = B ? `[Error: ${G}]` : `[Error]
${G}`;
    throw new rj(Z)
}
var cR3, pR3;
var XjA = L(() => {
    nV();
    $Z();
    D0();
    aG();
    nQ();
    cR3 = /```!\s*\n?([\s\S]*?)\n?```/g, pR3 = /(?<!\w|\$)!`([^`]+)`/g
});
import {
    join as bXA,
    basename as fXA,
    dirname as Ga
} from "path";

function GI1(A) {
    return /^skill\.md$/i.test(fXA(A))
}

function aR3(A, Q, B) {
    if (GI1(A)) {
        let Z = Ga(A),
            I = Ga(Z),
            Y = fXA(Z),
            J = I.startsWith(Q) ? I.slice(Q.length).replace(/^\//, "") : "",
            W = J ? J.split("/").join(":") : "";
        return W ? `${B}:${W}:${Y}` : `${B}:${Y}`
    } else {
        let Z = Ga(A),
            I = fXA(A).replace(/\.md$/, ""),
            Y = Z.startsWith(Q) ? Z.slice(Q.length).replace(/^\//, "") : "",
            J = Y ? Y.split("/").join(":") : "";
        return J ? `${B}:${J}:${I}` : `${B}:${I}`
    }
}

function sR3(A, Q) {
    let B = [],
        G = OA();

    function Z(I) {
        try {
            let Y = G.readdirSync(I);
            if (Y.some((W) => W.isFile() && GI1(W.name))) {
                for (let W of Y)
                    if (W.isFile() && W.name.toLowerCase().endsWith(".md")) {
                        let X = bXA(I, W.name),
                            F = G.readFileSync(X, {
                                encoding: "utf-8"
                            }),
                            {
                                frontmatter: V,
                                content: K
                            } = yF(F);
                        B.push({
                            filePath: X,
                            baseDir: Q,
                            frontmatter: V,
                            content: K
                        })
                    } return
            }
            for (let W of Y) {
                let X = bXA(I, W.name);
                if (W.isDirectory()) Z(X);
                else if (W.isFile() && W.name.toLowerCase().endsWith(".md")) {
                    let F = G.readFileSync(X, {
                            encoding: "utf-8"
                        }),
                        {
                            frontmatter: V,
                            content: K
                        } = yF(F);
                    B.push({
                        filePath: X,
                        baseDir: Q,
                        frontmatter: V,
                        content: K
                    })
                }
            }
        } catch (Y) {
            g(`Failed to scan directory ${I}: ${Y}`, {
                level: "error"
            })
        }
    }
    return Z(A), B
}

function rR3(A) {
    let Q = new Map;
    for (let G of A) {
        let Z = Ga(G.filePath),
            I = Q.get(Z) ?? [];
        I.push(G), Q.set(Z, I)
    }
    let B = [];
    for (let [G, Z] of Q) {
        let I = Z.filter((Y) => GI1(Y.filePath));
        if (I.length > 0) {
            let Y = I[0];
            if (I.length > 1) g(`Multiple skill files found in ${G}, using ${fXA(Y.filePath)}`);
            B.push(Y)
        } else B.push(...Z)
    }
    return B
}
async function v89(A, Q, B, G, Z, I = {
    isSkillMode: !1
}) {
    let Y = sR3(A, A),
        J = rR3(Y),
        W = [];
    for (let X of J) {
        let F = aR3(X.filePath, X.baseDir, Q),
            V = FjA(F, X, B, G, Z, GI1(X.filePath), I);
        if (V) W.push(V)
    }
    return W
}

function FjA(A, Q, B, G, Z, I, Y = {
    isSkillMode: !1
}) {
    try {
        let {
            frontmatter: J,
            content: W
        } = Q, X = J.description ?? qy(W, I ? "Plugin skill" : "Plugin command"), F = HO(J["allowed-tools"]), V = J["argument-hint"], K = J.when_to_use, D = J.version, H = J.name, C = J.model === "inherit" ? void 0 : J.model, E = J["disable-model-invocation"], z;
        if (Y.isSkillMode) z = E === void 0 ? !1 : V0(E);
        else z = V0(E);
        let w = Y.isSkillMode ? nR3 : iR3,
            N = `${X} (${w}:${B})`,
            q = Y.isSkillMode ? !0 : !1;
        return {
            type: "prompt",
            name: A,
            description: N,
            hasUserSpecifiedDescription: !!J.description,
            allowedTools: F,
            argumentHint: V,
            whenToUse: K,
            version: D,
            model: C,
            isSkill: I || Y.isSkillMode,
            disableModelInvocation: z,
            source: "plugin",
            pluginInfo: {
                pluginManifest: G,
                repository: B
            },
            isEnabled: () => !0,
            isHidden: q,
            progressMessage: I || Y.isSkillMode ? "loading" : "running",
            userFacingName() {
                return H || A
            },
            async getPromptForCommand(R, P) {
                let y = Y.isSkillMode ? `Base directory for this skill: ${Ga(Q.filePath)}

${W}` : W;
                if (R)
                    if (y.includes("$ARGUMENTS")) y = y.replaceAll("$ARGUMENTS", R);
                    else y = y + `

ARGUMENTS: ${R}`;
                return y = Qb1(y, Z), y = await Ba(y, {
                    ...P,
                    async getAppState() {
                        let v = await P.getAppState();
                        return {
                            ...v,
                            toolPermissionContext: {
                                ...v.toolPermissionContext,
                                alwaysAllowRules: {
                                    ...v.toolPermissionContext.alwaysAllowRules,
                                    command: F
                                }
                            }
                        }
                    }
                }, `/${A}`), [{
                    type: "text",
                    text: y
                }]
            }
        }
    } catch (J) {
        return g(`Failed to create command from ${Q.filePath}: ${J}`, {
            level: "error"
        }), null
    }
}

function ZI1() {
    UQA.cache?.clear?.()
}
async function b89(A, Q, B, G, Z) {
    let I = OA(),
        Y = [];
    try {
        if (!I.existsSync(A)) return [];
        let J = bXA(A, "SKILL.md");
        if (I.existsSync(J)) {
            try {
                let X = I.readFileSync(J, {
                        encoding: "utf-8"
                    }),
                    {
                        frontmatter: F,
                        content: V
                    } = yF(X),
                    K = `${Q}:${fXA(A)}`,
                    D = {
                        filePath: J,
                        baseDir: Ga(J),
                        frontmatter: F,
                        content: V
                    },
                    H = FjA(K, D, B, G, Z, !0, {
                        isSkillMode: !0
                    });
                if (H) Y.push(H)
            } catch (X) {
                g(`Failed to load skill from ${J}: ${X}`, {
                    level: "error"
                })
            }
            return Y
        }
        let W = I.readdirSync(A);
        for (let X of W) {
            if (!X.isDirectory() && !X.isSymbolicLink()) continue;
            let F = bXA(A, X.name),
                V = bXA(F, "SKILL.md");
            if (I.existsSync(V)) try {
                let K = I.readFileSync(V, {
                        encoding: "utf-8"
                    }),
                    {
                        frontmatter: D,
                        content: H
                    } = yF(K),
                    C = `${Q}:${X.name}`,
                    E = {
                        filePath: V,
                        baseDir: Ga(V),
                        frontmatter: D,
                        content: H
                    },
                    z = FjA(C, E, B, G, Z, !0, {
                        isSkillMode: !0
                    });
                if (z) Y.push(z)
            } catch (K) {
                g(`Failed to load skill from ${V}: ${K}`, {
                    level: "error"
                })
            }
        }
    } catch (J) {
        g(`Failed to load skills from directory ${A}: ${J}`, {
            level: "error"
        })
    }
    return Y
}

function f89() {
    MW0.cache?.clear?.()
}
var iR3 = "plugin",
    nR3 = "plugin",
    UQA, MW0;
var VjA = L(() => {
    o2();
    o0();
    NF();
    D0();
    XjA();
    Ny();
    hQ();
    Bb1();
    UQA = t1(async () => {
        let {
            enabled: A,
            errors: Q
        } = await y7(), B = [];
        if (Q.length > 0) g(`Plugin loading errors: ${Q.map((G)=>BM(G)).join(", ")}`);
        for (let G of A) {
            if (G.commandsPath) try {
                let Z = await v89(G.commandsPath, G.name, G.source, G.manifest, G.path);
                if (B.push(...Z), Z.length > 0) g(`Loaded ${Z.length} commands from plugin ${G.name} default directory`)
            } catch (Z) {
                g(`Failed to load commands from plugin ${G.name} default directory: ${Z}`, {
                    level: "error"
                })
            }
            if (G.commandsPaths) {
                g(`Plugin ${G.name} has commandsPaths: ${G.commandsPaths.join(", ")}`);
                for (let Z of G.commandsPaths) try {
                    let I = OA(),
                        Y = I.statSync(Z);
                    if (g(`Checking commandPath ${Z} - isDirectory: ${Y.isDirectory()}, isFile: ${Y.isFile()}`), Y.isDirectory()) {
                        let J = await v89(Z, G.name, G.source, G.manifest, G.path);
                        if (B.push(...J), J.length > 0) g(`Loaded ${J.length} commands from plugin ${G.name} custom path: ${Z}`);
                        else g(`Warning: No commands found in plugin ${G.name} custom directory: ${Z}. Expected .md files or SKILL.md in subdirectories.`, {
                            level: "warn"
                        })
                    } else if (Y.isFile() && Z.endsWith(".md")) {
                        let J = I.readFileSync(Z, {
                                encoding: "utf-8"
                            }),
                            {
                                frontmatter: W,
                                content: X
                            } = yF(J),
                            F, V;
                        if (G.commandsMetadata) {
                            for (let [C, E] of Object.entries(G.commandsMetadata))
                                if (E.source) {
                                    let z = bXA(G.path, E.source);
                                    if (Z === z) {
                                        F = `${G.name}:${C}`, V = E;
                                        break
                                    }
                                }
                        }
                        if (!F) F = `${G.name}:${fXA(Z).replace(/\.md$/,"")}`;
                        let K = V ? {
                                ...W,
                                ...V.description && {
                                    description: V.description
                                },
                                ...V.argumentHint && {
                                    "argument-hint": V.argumentHint
                                },
                                ...V.model && {
                                    model: V.model
                                },
                                ...V.allowedTools && {
                                    "allowed-tools": V.allowedTools.join(",")
                                }
                            } : W,
                            D = {
                                filePath: Z,
                                baseDir: Ga(Z),
                                frontmatter: K,
                                content: X
                            },
                            H = FjA(F, D, G.source, G.manifest, G.path, !1);
                        if (H) B.push(H), g(`Loaded command from plugin ${G.name} custom file: ${Z}${V?" (with metadata override)":""}`)
                    }
                } catch (I) {
                    g(`Failed to load commands from plugin ${G.name} custom path ${Z}: ${I}`, {
                        level: "error"
                    })
                }
            }
            if (G.commandsMetadata) {
                for (let [Z, I] of Object.entries(G.commandsMetadata))
                    if (I.content && !I.source) try {
                        let {
                            frontmatter: Y,
                            content: J
                        } = yF(I.content), W = {
                            ...Y,
                            ...I.description && {
                                description: I.description
                            },
                            ...I.argumentHint && {
                                "argument-hint": I.argumentHint
                            },
                            ...I.model && {
                                model: I.model
                            },
                            ...I.allowedTools && {
                                "allowed-tools": I.allowedTools.join(",")
                            }
                        }, X = `${G.name}:${Z}`, F = {
                            filePath: `<inline:${X}>`,
                            baseDir: G.path,
                            frontmatter: W,
                            content: J
                        }, V = FjA(X, F, G.source, G.manifest, G.path, !1);
                        if (V) B.push(V), g(`Loaded inline content command from plugin ${G.name}: ${X}`)
                    } catch (Y) {
                        g(`Failed to load inline content command ${Z} from plugin ${G.name}: ${Y}`, {
                            level: "error"
                        })
                    }
            }
        }
        return g(`Total plugin commands loaded: ${B.length}`), B
    });
    MW0 = t1(async () => {
        g(">>>>> getPluginSkills CALLED <<<<<");
        let {
            enabled: A,
            errors: Q
        } = await y7(), B = [];
        if (Q.length > 0) g(`Plugin loading errors: ${Q.map((G)=>BM(G)).join(", ")}`);
        g(`getPluginSkills: Processing ${A.length} enabled plugins`);
        for (let G of A) {
            if (g(`Checking plugin ${G.name}: skillsPath=${G.skillsPath?"exists":"none"}, skillsPaths=${G.skillsPaths?G.skillsPaths.length:0} paths`), G.skillsPath) {
                g(`Attempting to load skills from plugin ${G.name} default skillsPath: ${G.skillsPath}`);
                try {
                    let Z = await b89(G.skillsPath, G.name, G.source, G.manifest, G.path);
                    B.push(...Z), g(`Loaded ${Z.length} skills from plugin ${G.name} default directory`)
                } catch (Z) {
                    g(`Failed to load skills from plugin ${G.name} default directory: ${Z}`, {
                        level: "error"
                    })
                }
            }
            if (G.skillsPaths) {
                g(`Attempting to load skills from plugin ${G.name} skillsPaths: ${G.skillsPaths.join(", ")}`);
                for (let Z of G.skillsPaths) try {
                    g(`Loading from skillPath: ${Z} for plugin ${G.name}`);
                    let I = await b89(Z, G.name, G.source, G.manifest, G.path);
                    B.push(...I), g(`Loaded ${I.length} skills from plugin ${G.name} custom path: ${Z}`)
                } catch (I) {
                    g(`Failed to load skills from plugin ${G.name} custom path ${Z}: ${I}`, {
                        level: "error"
                    })
                }
            }
        }
        return g(`Total plugin skills loaded: ${B.length}`), B
    })
});

function YI1() {
    let [, A] = _Q(), Q = II1.useCallback(async () => {
        try {
            let {
                enabled: B,
                disabled: G,
                errors: Z
            } = await y7(), I = [], Y = [];
            try {
                I = await UQA()
            } catch (J) {
                let W = J instanceof Error ? J.message : String(J);
                Z.push({
                    type: "generic-error",
                    source: "plugin-commands",
                    error: `Failed to load plugin commands: ${W}`
                })
            }
            try {
                Y = await q0A()
            } catch (J) {
                let W = J instanceof Error ? J.message : String(J);
                Z.push({
                    type: "generic-error",
                    source: "plugin-agents",
                    error: `Failed to load plugin agents: ${W}`
                })
            }
            try {
                await w1A()
            } catch (J) {
                let W = J instanceof Error ? J.message : String(J);
                Z.push({
                    type: "generic-error",
                    source: "plugin-hooks",
                    error: `Failed to load plugin hooks: ${W}`
                })
            }
            A((J) => ({
                ...J,
                plugins: {
                    ...J.plugins,
                    enabled: B,
                    disabled: G,
                    commands: I,
                    agents: Y,
                    errors: Z
                }
            })), g(`Loaded plugins - Enabled: ${B.length}, Disabled: ${G.length}, Commands: ${I.length}, Agents: ${Y.length}, Errors: ${Z.length}`)
        } catch (B) {
            let G = B instanceof Error ? B : Error(String(B));
            e(G), g(`Error loading plugins: ${B}`), A((Z) => ({
                ...Z,
                plugins: {
                    ...Z.plugins,
                    enabled: [],
                    disabled: [],
                    commands: [],
                    agents: [],
                    errors: [{
                        type: "generic-error",
                        source: "plugin-system",
                        error: G.message
                    }]
                }
            }))
        }
    }, [A]);
    return II1.useEffect(() => {
        Q()
    }, [Q]), {
        refreshPlugins: Q
    }
}
var II1;
var OW0 = L(() => {
    H9();
    NF();
    VjA();
    ATA();
    MMA();
    D0();
    u1();
    II1 = GA(VA(), 1)
});

function KjA({
    state: A,
    percentage: Q
}) {
    if (!L1().terminalProgressBarEnabled) return null;
    return RW0.createElement(taA, {
        state: A,
        percentage: Q
    })
}
var RW0;
var h89 = L(() => {
    hA();
    jQ();
    RW0 = GA(VA(), 1)
});

function TW0(A) {
    if (A.type === "assistant" && A.message.content[0]?.type === "tool_use") {
        let Q = A.message.content[0];
        return {
            messageId: A.message.id,
            toolUseId: Q.id,
            toolName: Q.name
        }
    }
    return null
}

function g89(A, Q, B = !1) {
    if (B) return {
        messages: A
    };
    let G = new Set(Q.filter((F) => F.renderGroupedToolUse).map((F) => F.name)),
        Z = new Map;
    for (let F of A) {
        let V = TW0(F);
        if (V && G.has(V.toolName)) {
            let K = `${V.messageId}:${V.toolName}`,
                D = Z.get(K) ?? [];
            D.push(F), Z.set(K, D)
        }
    }
    let I = new Map,
        Y = new Set;
    for (let [F, V] of Z)
        if (V.length >= 2) {
            I.set(F, V);
            for (let K of V) {
                let D = TW0(K);
                if (D) Y.add(D.toolUseId)
            }
        } let J = new Map;
    for (let F of A)
        if (F.type === "user") {
            for (let V of F.message.content)
                if (V.type === "tool_result" && Y.has(V.tool_use_id)) J.set(V.tool_use_id, F)
        } let W = [],
        X = new Set;
    for (let F of A) {
        let V = TW0(F);
        if (V) {
            let K = `${V.messageId}:${V.toolName}`,
                D = I.get(K);
            if (D) {
                if (!X.has(K)) {
                    X.add(K);
                    let H = D[0],
                        C = [];
                    for (let z of D) {
                        let w = z.message.content[0].id,
                            N = J.get(w);
                        if (N) C.push(N)
                    }
                    let E = {
                        type: "grouped_tool_use",
                        toolName: V.toolName,
                        messages: D,
                        results: C,
                        displayMessage: H,
                        uuid: `grouped-${H.uuid}`,
                        timestamp: H.timestamp,
                        messageId: V.messageId
                    };
                    W.push(E)
                }
                continue
            }
        }
        if (F.type === "user") {
            let K = F.message.content.filter((D) => D.type === "tool_result");
            if (K.length > 0) {
                if (K.every((H) => Y.has(H.tool_use_id))) continue
            }
        }
        W.push(F)
    }
    return {
        messages: W
    }
}

function DjA(A) {
    if (!A) return 0;
    return A.activeAgents.filter((Q) => Q.source !== "built-in").reduce((Q, B) => {
        let G = `${B.agentType}: ${B.whenToUse}`;
        return Q + SG(G)
    }, 0)
}
var $QA = 15000;
var PW0 = L(() => {
    gM()
});
import {
    relative as oR3
} from "path";

function u89(A) {
    return YT3.filter((Q) => Q.isActive(A))
}
var xB, tR3, eR3, AT3, QT3, BT3, GT3, ZT3, IT3, YT3;
var m89 = L(() => {
    hA();
    uE();
    n2();
    R2();
    hB();
    dK();
    S0();
    PW0();
    xB = GA(VA(), 1), tR3 = {
        id: "large-memory-files",
        type: "warning",
        isActive: () => {
            return D1A().length > 0
        },
        render: () => {
            let A = D1A();
            return xB.createElement(xB.Fragment, null, A.map((Q) => {
                let B = Q.path.startsWith(H0()) ? oR3(H0(), Q.path) : Q.path;
                return xB.createElement(j, {
                    key: Q.path,
                    flexDirection: "row"
                }, xB.createElement($, {
                    color: "warning"
                }, V1.warning), xB.createElement($, {
                    color: "warning"
                }, "Large ", xB.createElement($, {
                    bold: !0
                }, B), " will impact performance (", QZ(Q.content.length), " chars >", " ", QZ(zh), ")", xB.createElement($, {
                    dimColor: !0
                }, " • /memory to edit")))
            }))
        }
    }, eR3 = {
        id: "ultra-claude-md",
        type: "warning",
        isActive: () => {
            let A = H1A();
            return A !== null && A.content.length > IYA
        },
        render: () => {
            let A = H1A();
            if (!A) return null;
            let Q = A.content.length;
            return xB.createElement(j, {
                flexDirection: "row",
                gap: 1
            }, xB.createElement($, {
                color: "warning"
            }, V1.warning), xB.createElement($, {
                color: "warning"
            }, "CLAUDE.md entries marked as IMPORTANT exceed", " ", IYA, " chars (", Q, " chars)", xB.createElement($, {
                dimColor: !0
            }, " • /memory to edit")))
        }
    }, AT3 = {
        id: "claude-ai-external-token",
        type: "warning",
        isActive: () => {
            let A = Kc();
            return AB() && (A.source === "ANTHROPIC_AUTH_TOKEN" || A.source === "apiKeyHelper")
        },
        render: () => {
            let A = Kc();
            return xB.createElement(j, {
                flexDirection: "row",
                marginTop: 1
            }, xB.createElement($, {
                color: "warning"
            }, V1.warning), xB.createElement($, {
                color: "warning"
            }, "Auth conflict: Using ", A.source, " instead of Claude account subscription token. Either unset ", A.source, ", or run `claude /logout`."))
        }
    }, QT3 = {
        id: "api-key-conflict",
        type: "warning",
        isActive: () => {
            let {
                source: A
            } = vw({
                skipRetrievingKeyFromApiKeyHelper: H5()
            });
            return !!rEA() && (A === "ANTHROPIC_API_KEY" || A === "apiKeyHelper")
        },
        render: () => {
            let {
                source: A
            } = vw({
                skipRetrievingKeyFromApiKeyHelper: H5()
            });
            return xB.createElement(j, {
                flexDirection: "row",
                marginTop: 1
            }, xB.createElement($, {
                color: "warning"
            }, V1.warning), xB.createElement($, {
                color: "warning"
            }, "Auth conflict: Using ", A, " instead of Anthropic Console key. Either unset ", A, ", or run `claude /logout`."))
        }
    }, BT3 = {
        id: "both-auth-methods",
        type: "warning",
        isActive: () => {
            let {
                source: A
            } = vw({
                skipRetrievingKeyFromApiKeyHelper: H5()
            }), Q = Kc();
            return A !== "none" && Q.source !== "none" && !(A === "apiKeyHelper" && Q.source === "apiKeyHelper")
        },
        render: () => {
            let {
                source: A
            } = vw({
                skipRetrievingKeyFromApiKeyHelper: H5()
            }), Q = Kc();
            return xB.createElement(j, {
                flexDirection: "column",
                marginTop: 1
            }, xB.createElement(j, {
                flexDirection: "row"
            }, xB.createElement($, {
                color: "warning"
            }, V1.warning), xB.createElement($, {
                color: "warning"
            }, "Auth conflict: Both a token (", Q.source, ") and an API key (", A, ") are set. This may lead to unexpected behavior.")), xB.createElement(j, {
                flexDirection: "column",
                marginLeft: 3
            }, xB.createElement($, {
                color: "warning"
            }, "• Trying to use", " ", Q.source === "claude.ai" ? "claude.ai" : Q.source, "?", " ", A === "ANTHROPIC_API_KEY" ? 'Unset the ANTHROPIC_API_KEY environment variable, or claude /logout then say "No" to the API key approval before login.' : A === "apiKeyHelper" ? "Unset the apiKeyHelper setting." : "claude /logout"), xB.createElement($, {
                color: "warning"
            }, "• Trying to use ", A, "?", " ", Q.source === "claude.ai" ? "claude /logout to sign out of claude.ai." : `Unset the ${Q.source} environment variable.`)))
        }
    }, GT3 = {
        id: "sonnet-1m-welcome",
        type: "info",
        isActive: (A) => A.showSonnet1MNotice === !0,
        render: () => {
            return xB.createElement(j, {
                flexDirection: "column",
                marginTop: 1
            }, xB.createElement($, {
                bold: !0
            }, "You now have access to Sonnet 4 with 1M context (uses more rate limits than Sonnet on long requests) • Update in /model"))
        }
    }, ZT3 = {
        id: "opus-4.5-available",
        type: "info",
        isActive: (A) => A.showOpus45Notice === !0,
        render: () => {
            let Q = J6() !== "firstParty",
                B = x4(),
                G = B === "max",
                Z = B === "team",
                I = B === "pro",
                Y;
            if (G || Z) Y = xB.createElement($, {
                dimColor: !0
            }, "Welcome to Opus 4.5");
            else if (I) Y = xB.createElement($, {
                dimColor: !0
            }, "/upgrade or /extra-usage for Opus 4.5");
            else if (Q) Y = xB.createElement($, {
                dimColor: !0
            }, "/model to try Opus 4.5. Note: you may need to request access from your cloud provider");
            else Y = xB.createElement($, {
                dimColor: !0
            }, "/model to try Opus 4.5");
            return xB.createElement(j, {
                marginLeft: 1
            }, Y)
        }
    }, IT3 = {
        id: "large-agent-descriptions",
        type: "warning",
        isActive: (A) => {
            return DjA(A.agentDefinitions) > $QA
        },
        render: (A) => {
            let Q = DjA(A.agentDefinitions);
            return xB.createElement(j, {
                flexDirection: "row"
            }, xB.createElement($, {
                color: "warning"
            }, V1.warning), xB.createElement($, {
                color: "warning"
            }, "Large cumulative agent descriptions will impact performance (~", QZ(Q), " tokens >", " ", QZ($QA), ")", xB.createElement($, {
                dimColor: !0
            }, " • /agents to manage")))
        }
    }, YT3 = [tR3, eR3, IT3, AT3, QT3, BT3, GT3, ZT3]
});

function d89({
    agentDefinitions: A
} = {}) {
    let Q = L1(),
        B = i6()?.organizationUuid,
        Z = (B ? Q.s1mAccessCache?.[B] : void 0)?.hasAccessNotAsDefault,
        I = B && Q.hasShownS1MWelcomeV2?.[B],
        Y = AB() && Z && !I,
        W = !(B && Q.hasShownOpus45Notice?.[B]),
        X = {
            config: Q,
            showSonnet1MNotice: Y,
            showOpus45Notice: W,
            agentDefinitions: A
        },
        F = u89(X);
    if (Og.useEffect(() => {
            if (!B) return;
            let V = F.some((D) => D.id === "sonnet-1m-welcome"),
                K = F.some((D) => D.id === "opus-4.5-available");
            if (V) BA("tengu_sonnet_1m_notice_shown", {});
            if (K) BA("tengu_opus_45_notice_shown", {});
            if (V || K) d0({
                ...Q,
                ...V && {
                    hasShownS1MWelcomeV2: {
                        ...Q.hasShownS1MWelcomeV2,
                        [B]: !0
                    }
                },
                ...K && {
                    hasShownOpus45Notice: {
                        ...Q.hasShownOpus45Notice,
                        [B]: !0
                    }
                }
            })
        }, [F, Q, B]), F.length === 0) return null;
    return Og.createElement(j, {
        flexDirection: "column",
        paddingLeft: 1
    }, F.map((V) => Og.createElement(Og.Fragment, {
        key: V.id
    }, V.render(X))))
}
var Og;
var c89 = L(() => {
    hA();
    jQ();
    m89();
    w0();
    hB();
    Og = GA(VA(), 1)
});

function p89(A, Q) {
    let B = new Set;
    for (let G of A)
        if (!Q.has(G)) B.add(G);
    return B
}

function l89(A, Q) {
    for (let B of A)
        if (!Q.has(B)) return !1;
    return !0
}

function i89({
    message: A,
    isTranscriptMode: Q
}) {
    if (!(Q && A.timestamp && A.type === "assistant" && A.message.content.some((Z) => Z.type === "text"))) return null;
    let G = new Date(A.timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: !0
    });
    return jW0.default.createElement(j, {
        marginTop: 1,
        minWidth: G.length
    }, jW0.default.createElement($, {
        dimColor: !0
    }, G))
}
var jW0;
var n89 = L(() => {
    hA();
    jW0 = GA(VA(), 1)
});

function a89({
    message: A,
    isTranscriptMode: Q
}) {
    if (!(Q && A.type === "assistant" && A.message.model && A.message.content.some((G) => G.type === "text"))) return null;
    return SW0.default.createElement(j, {
        marginTop: 1,
        marginLeft: 1,
        minWidth: A.message.model.length + 8
    }, SW0.default.createElement($, {
        dimColor: !0
    }, A.message.model))
}
var SW0;
var s89 = L(() => {
    hA();
    SW0 = GA(VA(), 1)
});

function r89(A) {
    let [Q, B] = hXA.useState(1), [G, Z] = hXA.useState(-1);
    return h1((I, Y) => {
        if (Y.escape && G === -1) Z(0)
    }, {
        isActive: A
    }), hXA.useEffect(() => {
        if (!A) {
            Z(-1), B(0);
            return
        }
    }, [A]), hXA.useEffect(() => {
        if (G === -1) return;
        let I = [1, 0, 1, 2, 2, 1, 0, 0, 0, 1, 2, 2, 1];
        if (G >= I.length) {
            Z(-1), B(1);
            return
        }
        B(I[G]);
        let Y = setTimeout(() => {
            Z((J) => J + 1)
        }, 60);
        return () => clearTimeout(Y)
    }, [G]), Q
}
var hXA;
var o89 = L(() => {
    hA();
    hXA = GA(VA(), 1)
});
async function _W0() {
    if (H5()) return;
    if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) return;
    let A = await GQ.get(WT3);
    if (A.status === 200) {
        let Q = L1();
        d0({
            ...Q,
            cachedChangelog: A.data,
            changelogLastFetched: Date.now()
        })
    }
}

function wQA() {
    return L1().cachedChangelog ?? ""
}

function JI1(A) {
    try {
        if (!A) return {};
        let Q = {},
            B = A.split(/^## /gm).slice(1);
        for (let G of B) {
            let Z = G.trim().split(`
`);
            if (Z.length === 0) continue;
            let I = Z[0];
            if (!I) continue;
            let Y = I.split(" - ")[0]?.trim() || "";
            if (!Y) continue;
            let J = Z.slice(1).filter((W) => W.trim().startsWith("- ")).map((W) => W.trim().substring(2).trim()).filter(Boolean);
            if (J.length > 0) Q[Y] = J
        }
        return Q
    } catch (Q) {
        return e(Q instanceof Error ? Q : Error("Failed to parse changelog")), {}
    }
}

function XT3(A, Q, B = wQA()) {
    try {
        let G = JI1(B),
            Z = Za.coerce(A),
            I = Q ? Za.coerce(Q) : null;
        if (!I || Z && Za.gt(Z, I, {
                loose: !0
            })) return Object.entries(G).filter(([Y]) => !I || Za.gt(Y, I, {
            loose: !0
        })).sort(([Y], [J]) => Za.gt(Y, J, {
            loose: !0
        }) ? -1 : 1).flatMap(([Y, J]) => J).filter(Boolean).slice(0, JT3)
    } catch (G) {
        return e(G instanceof Error ? G : Error("Failed to get release notes")), []
    }
    return []
}

function kW0(A = wQA()) {
    try {
        let Q = JI1(A);
        return Object.keys(Q).sort((G, Z) => Za.gt(G, Z, {
            loose: !0
        }) ? 1 : -1).map((G) => {
            let Z = Q[G];
            if (!Z || Z.length === 0) return null;
            let I = Z.filter(Boolean);
            if (I.length === 0) return null;
            return [G, I]
        }).filter((G) => G !== null)
    } catch (Q) {
        return e(Q instanceof Error ? Q : Error("Failed to get release notes")), []
    }
}

function HjA(A, Q = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.claude.com/s/claude-code",
    VERSION: "2.0.57",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
}.VERSION) {
    if (A !== Q || !wQA()) _W0().catch((Z) => e(Z instanceof Error ? Z : Error("Failed to fetch changelog")));
    let B = XT3(Q, A);
    return {
        hasReleaseNotes: B.length > 0,
        releaseNotes: B
    }
}
var Za, JT3 = 5,
    t89 = "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
    WT3 = "https://raw.githubusercontent.com/anthropics/claude-code/refs/heads/main/CHANGELOG.md";
var gXA = L(() => {
    u1();
    w3();
    jQ();
    S0();
    Za = GA(WE(), 1)
});

function Q69(A) {
    if (A >= 70) return "horizontal";
    return "compact"
}

function B69(A, Q, B) {
    if (Q === "horizontal") {
        let Z = B,
            I = yW0 + XI1 + WI1 + Z,
            Y = A - I,
            J = Math.max(30, Y),
            W = Math.min(Z + J + WI1 + XI1, A - yW0);
        if (W < Z + J + WI1 + XI1) J = W - Z - WI1 - XI1;
        return {
            leftWidth: Z,
            rightWidth: J,
            totalWidth: W
        }
    }
    let G = Math.min(A - yW0, A69 + 20);
    return {
        leftWidth: G,
        rightWidth: G,
        totalWidth: G
    }
}

function G69(A, Q, B) {
    let G = Math.max(A.length, Q.length, B.length, 20);
    return Math.min(G + 4, A69)
}

function VI1(A) {
    if (!A || A.length > FT3) return "Welcome back!";
    return `Welcome back ${A}!`
}

function EjA(A, Q) {
    if (A.length <= Q) return A;
    let B = "/",
        G = "…",
        Z = A.split(B),
        I = Z[0] || "",
        Y = Z[Z.length - 1] || "";
    if (Z.length === 1) return A.substring(0, Q - G.length) + G;
    if (I === "" && G.length + B.length + Y.length >= Q) return `${B}${Y.substring(0,Q-G.length-B.length)}${G}`;
    if (I !== "" && G.length * 2 + B.length + Y.length >= Q) return `${G}${B}${Y.substring(0,Q-G.length*2-B.length)}${G}`;
    if (Z.length === 2) return `${I.substring(0,Q-G.length-B.length-Y.length)}${G}${B}${Y}`;
    let J = Q - I.length - Y.length - G.length - 2 * B.length;
    if (J <= 0) return `${I.substring(0,Math.max(0,Q-Y.length-G.length-2*B.length))}${B}${G}${B}${Y}`;
    let W = [];
    for (let X = Z.length - 2; X > 0; X--) {
        let F = Z[X];
        if (F && F.length + B.length <= J) W.unshift(F), J -= F.length + B.length;
        else break
    }
    if (W.length === 0) return `${I}${B}${G}${B}${Y}`;
    return `${I}${B}${G}${B}${W.join(B)}${B}${Y}`
}
async function Z69() {
    if (FI1) return FI1;
    let A = G0();
    return FI1 = Qx(10).then((Q) => {
        return CjA = Q.filter((B) => {
            if (B.isSidechain) return !1;
            if (B.leafUuid === A) return !1;
            if (B.summary?.includes("I apologize")) return !1;
            let G = B.summary && B.summary !== "No prompt",
                Z = B.firstPrompt && B.firstPrompt !== "No prompt";
            return G || Z
        }).slice(0, 3), CjA
    }).catch(() => {
        return CjA = [], CjA
    }), FI1
}

function I69() {
    return CjA
}

function KI1() {
    let A = {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION,
        Q = Q5(H0()),
        B = S3(),
        G = aRB(B),
        Z = AB() ? oy1() : "API Usage Billing";
    return {
        version: A,
        cwd: Q,
        modelDisplayName: G,
        billingType: Z
    }
}

function Y69(A, Q, B) {
    if (A.length + 3 + Q.length > B) return {
        shouldSplit: !0,
        truncatedModel: B7(A, B),
        truncatedBilling: B7(Q, B)
    };
    return {
        shouldSplit: !1,
        truncatedModel: B7(A, Math.max(B - Q.length - 3, 10)),
        truncatedBilling: Q
    }