/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_022.js
 * 处理时间: 2025-12-09T03:41:37.981Z
 * 变量映射: 9 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 22/29
 * Lines: 412772 - 414270 (1499 lines)
 * Original file: cli.js
 */

    if (B.length > 0) g(`formatFindReferencesResult: Filtering out TextComponent{B.length} invalid location(s) - this should have been caught earlier`, {
        level: "warn"
    });
    let G = A.filter((Y) => Y && Y.uri);
    if (G.length === 0) return "No references found";
    if (G.length === 1) return `Found 1 reference:
  TextComponent{nI1(G[0],Q)}`;
    let Z = aY9(G, Q),
        I = [`Found TextComponent{G.length} references across TextComponent{Z.size} files:`];
    for (let [Y, J] of Z) {
        I.push(`
TextComponent{Y}:`);
        for (let W of J) {
            let X = W.range.start.line + 1,
                F = W.range.start.character + 1;
            I.push(`  Line TextComponent{X}:TextComponent{F}`)
        }
    }
    return I.join(`
`)
}

function wj3(A) {
    if (Array.isArray(A)) return A.map((Q) => {
        if (typeof Q === "string") return Q;
        return Q.value
    }).join(`

`);
    if (typeof A === "string") return A;
    if ("kind" in A) return A.value;
    return A.value
}

function oY9(A, Q) {
    if (!A) return "No hover information available";
    let B = wj3(A.contents);
    if (A.range) {
        let G = A.range.start.line + 1,
            Z = A.range.start.character + 1;
        return `Hover info at TextComponent{G}:TextComponent{Z}:

TextComponent{B}`
    }
    return B
}

function tY9(A) {
    return {
        [1]: "File",
        [2]: "Module",
        [3]: "Namespace",
        [4]: "Package",
        [5]: "Class",
        [6]: "Method",
        [7]: "Property",
        [8]: "Field",
        [9]: "Constructor",
        [10]: "Enum",
        [11]: "Interface",
        [12]: "Function",
        [13]: "Variable",
        [14]: "Constant",
        [15]: "String",
        [16]: "Number",
        [17]: "Boolean",
        [18]: "Array",
        [19]: "Object",
        [20]: "Key",
        [21]: "Null",
        [22]: "EnumMember",
        [23]: "Struct",
        [24]: "Event",
        [25]: "Operator",
        [26]: "TypeParameter"
    } [A] || "Unknown"
}

function eY9(A, Q = 0) {
    let B = [],
        G = "  ".repeat(Q),
        Z = tY9(A.kind),
        I = `TextComponent{G}TextComponent{A.name} (TextComponent{Z})`;
    if (A.detail) I += ` TextComponent{A.detail}`;
    let Y = A.range.start.line + 1;
    if (I += ` - Line TextComponent{Y}`, B.push(I), A.children && A.children.length > 0)
        for (let J of A.children) B.push(...eY9(J, Q + 1));
    return B
}

function AJ9(A, Q) {
    if (!A || A.length === 0) return "No symbols found in document";
    let B = ["Document symbols:"];
    for (let G of A) B.push(...eY9(G));
    return B.join(`
`)
}

function QJ9(A, Q) {
    if (!A || A.length === 0) return "No symbols found in workspace";
    let B = A.filter((Y) => !Y || !Y.location || !Y.location.uri);
    if (B.length > 0) g(`formatWorkspaceSymbolResult: Filtering out TextComponent{B.length} invalid symbol(s) - this should have been caught earlier`, {
        level: "warn"
    });
    let G = A.filter((Y) => Y && Y.location && Y.location.uri);
    if (G.length === 0) return "No symbols found in workspace";
    let Z = [`Found TextComponent{G.length} symbol${G.length===1?"":"s"} in workspace:`],
        I = aY9(G, Q);
    for (let [Y, J] of I) {
        Z.push(`
TextComponent{Y}:`);
        for (let W of J) {
            let X = tY9(W.kind),
                F = W.location.range.start.line + 1,
                V = `  TextComponent{W.name} (TextComponent{X}) - Line TextComponent{F}`;
            if (W.containerName) V += ` in TextComponent{W.containerName}`;
            Z.push(V)
        }
    }
    return Z.join(`
`)
}
var BJ9 = lazyLoader(() => {
    D0()
});
var GJ9 = "LSP",
    yX0 = `Interact with Language Server Protocol (LSP) servers to get code intelligence features.

Supported operations:
- goToDefinition: Find where a symbol is defined
- findReferences: Find all references to a symbol
- hover: Get hover information (documentation, type info) for a symbol
- documentSymbol: Get all symbols (functions, classes, variables) in a document
- workspaceSymbol: Search for symbols across the entire workspace

All operations require:
- filePath: The file to operate on
- line: The line number (0-indexed)
- character: The character offset (0-indexed) on the line

Note: LSP servers must be configured for the file type. If no server is available, an error will be returned.`;

function ZJ9(A, Q, B) {
    try {
        let G = OA(),
            Z = b9(A);
        if (!G.existsSync(Z)) return null;
        let Y = G.readFileSync(Z, {
            encoding: "utf-8"
        }).split(`
`);
        if (Q < 0 || Q >= Y.length) return null;
        let J = Y[Q];
        if (!J || B < 0 || B >= J.length) return null;
        let W = /[\w$'!]+|[+\-*/%&|^~<>=]+/g,
            X;
        while ((X = W.exec(J)) !== null) {
            let F = X.index,
                V = F + X[0].length;
            if (B >= F && B < V) {
                let K = X[0];
                return K.length > 30 ? K.slice(0, 27) + "..." : K
            }
        }
        return null
    } catch (G) {
        if (G instanceof Error) g(`Symbol extraction failed for TextComponent{A}:TextComponent{Q}:TextComponent{B}: TextComponent{G.message}`, {
            level: "warn"
        });
        return null
    }
}
var IJ9 = lazyLoader(() => {
    o0();
    jI();
    D0()
});

function Nj3({
    operation: A,
    resultCount: Q,
    fileCount: B,
    content: G,
    verbose: Z
}) {
    let I = qj3[A] || {
            singular: "result",
            plural: "results"
        },
        Y = Q === 1 ? I.singular : I.plural,
        J = A === "hover" && Q > 0 && I.special ? KY.default.createElement(KY.default.Fragment, null, "Hover info ", I.special) : KY.default.createElement(KY.default.Fragment, null, "Found ", KY.default.createElement(TextComponent, {
            bold: !0
        }, Q, " "), Y),
        W = B > 1 ? KY.default.createElement(KY.default.Fragment, null, " ", "across ", KY.default.createElement(TextComponent, {
            bold: !0
        }, B, " "), "files") : null;
    if (Z) return KY.default.createElement(j, {
        flexDirection: "column"
    }, KY.default.createElement(j, {
        flexDirection: "row"
    }, KY.default.createElement(TextComponent, null, "  ⎿  ", J, W)), KY.default.createElement(j, {
        marginLeft: 5
    }, KY.default.createElement(TextComponent, null, G)));
    return KY.default.createElement(y0, {
        height: 1
    }, KY.default.createElement(TextComponent, null, J, W, " ", Q > 0 && KY.default.createElement(hl, null)))
}

function YJ9() {
    return "LSP"
}

function JJ9(A, {
    verbose: Q
}) {
    if (!A.operation) return null;
    let B = [];
    if ((A.operation === "goToDefinition" || A.operation === "findReferences" || A.operation === "hover") && A.filePath && A.line !== void 0 && A.character !== void 0) {
        let G = ZJ9(A.filePath, A.line, A.character),
            Z = Q ? A.filePath : formatFilePath(A.filePath);
        if (G) B.push(`operation: "TextComponent{A.operation}"`), B.push(`symbol: "TextComponent{G}"`), B.push(`in: "TextComponent{Z}"`);
        else B.push(`operation: "TextComponent{A.operation}"`), B.push(`file: "TextComponent{Z}"`), B.push(`position: TextComponent{A.line}:TextComponent{A.character}`);
        return B.join(", ")
    }
    if (B.push(`operation: "TextComponent{A.operation}"`), A.filePath) {
        let G = Q ? A.filePath : formatFilePath(A.filePath);
        B.push(`file: "TextComponent{G}"`)
    }
    return B.join(", ")
}

function WJ9() {
    return KY.default.createElement(k3, null)
}

function XJ9(A, {
    verbose: Q
}) {
    if (!Q && typeof A === "string" && e2(A, "tool_use_error")) return KY.default.createElement(y0, null, KY.default.createElement(TextComponent, {
        color: "error"
    }, "LSP operation failed"));
    return KY.default.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function FJ9() {
    return null
}

function VJ9(A, Q, {
    verbose: B
}) {
    if (A.resultCount !== void 0 && A.fileCount !== void 0) return KY.default.createElement(Nj3, {
        operation: A.operation,
        resultCount: A.resultCount,
        fileCount: A.fileCount,
        content: A.result,
        verbose: B
    });
    return KY.default.createElement(y0, null, KY.default.createElement(TextComponent, null, A.result))
}
var KY, qj3;
var KJ9 = lazyLoader(() => {
    hA();
    lV();
    lX();
    u8();
    $IA();
    nQ();
    M9();
    IJ9();
    KY = esmImport(VA(), 1), qj3 = {
        goToDefinition: {
            singular: "definition",
            plural: "definitions"
        },
        findReferences: {
            singular: "reference",
            plural: "references"
        },
        documentSymbol: {
            singular: "symbol",
            plural: "symbols"
        },
        workspaceSymbol: {
            singular: "symbol",
            plural: "symbols"
        },
        hover: {
            singular: "hover info",
            plural: "hover info",
            special: "available"
        }
    }
});
import {
    pathToFileURL as Lj3
} from "url";
import * as vX0 from "path";

function Rj3(A, Q) {
    let B = Lj3(Q).href,
        G = {
            line: A.line,
            character: A.character
        };
    switch (A.operation) {
        case "goToDefinition":
            return {
                method: "textDocument/definition", params: {
                    textDocument: {
                        uri: B
                    },
                    position: G
                }
            };
        case "findReferences":
            return {
                method: "textDocument/references", params: {
                    textDocument: {
                        uri: B
                    },
                    position: G,
                    context: {
                        includeDeclaration: !0
                    }
                }
            };
        case "hover":
            return {
                method: "textDocument/hover", params: {
                    textDocument: {
                        uri: B
                    },
                    position: G
                }
            };
        case "documentSymbol":
            return {
                method: "textDocument/documentSymbol", params: {
                    textDocument: {
                        uri: B
                    }
                }
            };
        case "workspaceSymbol":
            return {
                method: "workspace/symbol", params: {
                    query: ""
                }
            }
    }
}

function DJ9(A) {
    let Q = A.length;
    for (let B of A)
        if (B.children && B.children.length > 0) Q += DJ9(B.children);
    return Q
}

function xX0(A) {
    return new Set(A.map((Q) => Q.uri)).size
}

function Tj3(A) {
    return "targetUri" in A
}

function Pj3(A) {
    if (Tj3(A)) return {
        uri: A.targetUri,
        range: A.targetSelectionRange || A.targetRange
    };
    return A
}

function jj3(A, Q, B) {
    switch (A) {
        case "goToDefinition": {
            let Z = (Array.isArray(Q) ? Q : Q ? [Q] : []).map(Pj3),
                I = Z.filter((J) => !J || !J.uri);
            if (I.length > 0) e(Error(`LSP server returned TextComponent{I.length} location(s) with undefined URI for goToDefinition on TextComponent{B}. This indicates malformed data from the LSP server.`));
            let Y = Z.filter((J) => J && J.uri);
            return {
                formatted: sY9(Q, B),
                resultCount: Y.length,
                fileCount: xX0(Y)
            }
        }
        case "findReferences": {
            let G = Q || [],
                Z = G.filter((Y) => !Y || !Y.uri);
            if (Z.length > 0) e(Error(`LSP server returned TextComponent{Z.length} location(s) with undefined URI for findReferences on TextComponent{B}. This indicates malformed data from the LSP server.`));
            let I = G.filter((Y) => Y && Y.uri);
            return {
                formatted: rY9(Q, B),
                resultCount: I.length,
                fileCount: xX0(I)
            }
        }
        case "hover":
            return {
                formatted: oY9(Q, B), resultCount: Q ? 1 : 0, fileCount: Q ? 1 : 0
            };
        case "documentSymbol": {
            let G = Q || [],
                Z = G.length > 0 ? DJ9(G) : 0;
            return {
                formatted: AJ9(Q, B),
                resultCount: Z,
                fileCount: G.length > 0 ? 1 : 0
            }
        }
        case "workspaceSymbol": {
            let G = Q || [],
                Z = G.filter((J) => !J || !J.location || !J.location.uri);
            if (Z.length > 0) e(Error(`LSP server returned TextComponent{Z.length} symbol(s) with undefined location URI for workspaceSymbol on TextComponent{B}. This indicates malformed data from the LSP server.`));
            let I = G.filter((J) => J && J.location && J.location.uri),
                Y = I.map((J) => J.location);
            return {
                formatted: QJ9(Q, B),
                resultCount: I.length,
                fileCount: xX0(Y)
            }
        }
    }
}
var Mj3, Oj3, bX0;
var HJ9 = lazyLoader(() => {
    h2();
    pY9();
    BJ9();
    LRA();
    jI();
    R2();
    o0();
    _Y();
    u1();
    D0();
    KJ9();
    Mj3 = _.strictObject({
        operation: _.enum(["goToDefinition", "findReferences", "hover", "documentSymbol", "workspaceSymbol"]).describe("The LSP operation to perform"),
        filePath: _.string().describe("The absolute or relative path to the file"),
        line: _.number().int().nonnegative().describe("The line number (0-indexed) in the file"),
        character: _.number().int().nonnegative().describe("The character offset (0-indexed) on the line")
    }), Oj3 = _.object({
        operation: _.enum(["goToDefinition", "findReferences", "hover", "documentSymbol", "workspaceSymbol"]).describe("The LSP operation that was performed"),
        result: _.string().describe("The formatted result of the LSP operation"),
        filePath: _.string().describe("The file path the operation was performed on"),
        resultCount: _.number().int().nonnegative().optional().describe("Number of results (definitions, references, symbols)"),
        fileCount: _.number().int().nonnegative().optional().describe("Number of files containing results")
    }), bX0 = {
        name: GJ9,
        async description() {
            return yX0
        },
        userFacingName: YJ9,
        isEnabled() {
            return !0
        },
        inputSchema: Mj3,
        outputSchema: Oj3,
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        getPath({
            filePath: A
        }) {
            return b9(A)
        },
        async validateInput(A) {
            let Q = cY9.safeParse(A);
            if (!Q.success) return {
                result: !1,
                message: `Invalid input: TextComponent{Q.error.message}`,
                errorCode: 3
            };
            let B = OA(),
                G = b9(A.filePath);
            if (!B.existsSync(G)) return {
                result: !1,
                message: `File does not exist: TextComponent{A.filePath}`,
                errorCode: 1
            };
            try {
                if (!B.statSync(G).isFile()) return {
                    result: !1,
                    message: `Path is not a file: TextComponent{A.filePath}`,
                    errorCode: 2
                }
            } catch (Z) {
                let I = Z instanceof Error ? Z : Error(String(Z));
                return e(Error(`Failed to access file stats for LSP operation on TextComponent{A.filePath}: TextComponent{I.message}`)), {
                    result: !1,
                    message: `Cannot access file: TextComponent{A.filePath}. TextComponent{I.message}`,
                    errorCode: 4
                }
            }
            return {
                result: !0
            }
        },
        async checkPermissions(A, Q) {
            let B = await Q.getAppState();
            return ul(bX0, A, B.toolPermissionContext)
        },
        async prompt() {
            return yX0
        },
        renderToolUseMessage: JJ9,
        renderToolUseRejectedMessage: WJ9,
        renderToolUseErrorMessage: XJ9,
        renderToolUseProgressMessage: FJ9,
        renderToolResultMessage: VJ9,
        async call(A, Q) {
            let B = b9(A.filePath),
                G = H0(),
                Z = pJA();
            if (!Z) return e(Error("LSP server manager not initialized when tool was called")), {
                data: {
                    operation: A.operation,
                    result: "LSP server manager not initialized. This may indicate a startup issue.",
                    filePath: A.filePath
                }
            };
            let {
                method: I,
                params: Y
            } = Rj3(A, B);
            try {
                let J = await Z.sendRequest(B, I, Y);
                if (J === void 0) return g(`No LSP server available for file type TextComponent{vX0.extname(B)} for operation TextComponent{A.operation} on file TextComponent{A.filePath}`), {
                    data: {
                        operation: A.operation,
                        result: `No LSP server available for file type: TextComponent{vX0.extname(B)}`,
                        filePath: A.filePath
                    }
                };
                let {
                    formatted: W,
                    resultCount: X,
                    fileCount: F
                } = jj3(A.operation, J, G);
                return {
                    data: {
                        operation: A.operation,
                        result: W,
                        filePath: A.filePath,
                        resultCount: X,
                        fileCount: F
                    }
                }
            } catch (J) {
                let X = (J instanceof Error ? J : Error(String(J))).message;
                return e(Error(`LSP tool request failed for TextComponent{A.operation} on TextComponent{A.filePath}: TextComponent{X}`)), {
                    data: {
                        operation: A.operation,
                        result: `Error performing TextComponent{A.operation}: TextComponent{X}`,
                        filePath: A.filePath
                    }
                }
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: A.result
            }
        }
    }
});
var Sj3;
var CJ9 = lazyLoader(() => {
    hA();
    lV();
    lX();
    Sj3 = esmImport(VA(), 1)
});
var YoZ, JoZ;
var EJ9 = lazyLoader(() => {
    h2();
    CJ9();
    QTA();
    nQ();
    iU();
    w0();
    YoZ = _.strictObject({
        message_prefix: _.string().describe("The prefix of the user message to rewind to (searches backwards for first match)"),
        course_correction: _.string().describe("The new instructions to inject after rewinding, explaining what to do differently"),
        restore_code: _.boolean().default(!0).describe("Whether to restore code changes using file history (default: true)")
    }), JoZ = _.object({
        target_message_preview: _.string().describe("Preview of the message that was rewound to"),
        course_correction: _.string().describe("The course correction that was injected"),
        code_restored: _.boolean().describe("Whether code was restored")
    })
});

function UJ9(A) {
    return A.isNonInteractiveSession
}

function aI1(A) {
    try {
        let Q = new zJ9.default({
            allErrors: !0
        });
        if (!Q.validateSchema(A)) throw Error(`Invalid JSON Schema: TextComponent{Q.errorsText(Q.errors)}`);
        let G = Q.compile(A);
        return {
            ...fX0,
            inputJSONSchema: A,
            async call(Z) {
                if (!G(Z)) {
                    let Y = G.errors?.map((J) => `TextComponent{J.dataPath||"root"}: TextComponent{J.message}`).join(", ");
                    throw Error(`Output does not match required schema: TextComponent{Y}`)
                }
                return {
                    data: "Structured output provided successfully",
                    structured_output: Z
                }
            }
        }
    } catch {
        return null
    }
}
var zJ9, _j3, kj3, Az = "StructuredOutput",
    fX0;
var oXA = lazyLoader(() => {
    h2();
    zJ9 = esmImport(aQ1(), 1), _j3 = _.object({}).passthrough(), kj3 = _.string().describe("Structured output tool result");
    fX0 = {
        isMcp: !1,
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        isDestructive() {
            return !1
        },
        isOpenWorld() {
            return !1
        },
        name: Az,
        async description() {
            return "Return structured output in the requested format"
        },
        async prompt() {
            return "Use this tool to return your final response in the requested structured format. You MUST call this tool exactly once at the end of your response to provide the structured output."
        },
        inputSchema: _j3,
        outputSchema: kj3,
        async call(A) {
            return {
                data: "Structured output provided successfully",
                structured_output: A
            }
        },
        async checkPermissions(A) {
            return {
                behavior: "allow",
                updatedInput: A
            }
        },
        renderToolUseMessage(A) {
            let Q = Object.keys(A);
            if (Q.length === 0) return null;
            if (Q.length <= 3) return Q.map((B) => `TextComponent{B}: TextComponent{JSON.stringify(A[B])}`).join(", ");
            return `TextComponent{Q.length} fields: TextComponent{Q.slice(0,3).join(", ")}…`
        },
        userFacingName: () => Az,
        renderToolUseRejectedMessage() {
            return "Structured output rejected"
        },
        renderToolUseErrorMessage() {
            return "Structured output error"
        },
        renderToolUseProgressMessage() {
            return null
        },
        renderToolResultMessage(A) {
            return A
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: A
            }
        }
    }
});
var yj3, DoZ, HoZ;
var $J9 = lazyLoader(() => {
    hA();
    h2();
    yj3 = esmImport(VA(), 1), DoZ = _.strictObject({
        sizeKB: _.number().min(1).max(1e4).describe("Size of output to generate in kilobytes")
    }), HoZ = _.object({
        generatedSizeBytes: _.number().describe("Actual size of generated content"),
        message: _.string().describe("Status message")
    })
});

function wJ9(A) {
    let Q = A.toLowerCase();
    if (!xj3.includes(Q)) return null;
    return Q
}

function hX0() {
    let A = gX0(),
        Q = A.map((B) => B.isEnabled());
    return A.filter((B, G) => Q[G]).map((B) => B.name)
}

function gX0() {
    return [In, X9, FO, Hy, xq, d8, gD, oX, LP, cF, TODO_READ_TOOL, hjA, iI1, lI1, a31, bn, fn, TTA, ...[], ...[], ...[], ...[], ...process.env.ENABLE_LSP_TOOL ? [bX0] : [], ...[], Xh, Fh]
}
var xj3, eRA, Vb2, Kb2, JC = (A) => {
    let Q = new Set([Xh.name, Fh.name, Az]),
        B = gX0().filter((Y) => !Q.has(Y.name)),
        G = tXA(A),
        Z = B.filter((Y) => {
            return !G.some((J) => J.ruleValue.toolName === Y.name && J.ruleValue.ruleContent === void 0)
        }),
        I = Z.map((Y) => Y.isEnabled());
    return Z.filter((Y, J) => I[J])
};
var jq = lazyLoader(() => {
    TRA();
    p31();
    n31();
    nV();
    Wn();
    Kq();
    gh();
    RRA();
    eJA();
    hWA();
    jX0();
    _X0();
    PX0();
    kX0();
    Ht();
    RTA();
    dY9();
    MRA();
    s31();
    HJ9();
    EJ9();
    jB1();
    SB1();
    OG0();
    oXA();
    $J9();
    aG();
    xj3 = ["default"];
    eRA = new Set([xq.name, ENTER_PLAN_MODE_TOOL_NAME, TASK_TOOL_NAME, ASK_USER_QUESTION_TOOL_NAME, KILL_SHELL_TOOL_NAME, ...[]]), Vb2 = new Set([...eRA]), Kb2 = new Set([d8.name, hjA.name, TODO_READ_TOOL.name, Hy.name, cF.name, FO.name, BASH_TOOL_NAME, gD.name, oX.name, LP.name])
});
import {
    resolve as vj3
} from "path";

function bj3(A) {
    let Q = A.join(" ").trim();
    if (wJ9(Q)) return hX0();
    return w0A(A)
}

function fj3({
    processPwd: A,
    originalCwd: Q
}) {
    let {
        resolvedPath: B,
        isSymlink: G
    } = kK(OA(), A);
    return G ? B === vj3(Q) : !1
}

function qJ9({
    permissionModeCli: A,
    dangerouslySkipPermissions: Q
}) {
    let B = c0() || {},
        G = j8("tengu_disable_bypass_permissions_mode"),
        Z = B.permissions?.disableBypassPermissionsMode === "disable",
        I = G || Z,
        Y = [];
    if (Q) Y.push("bypassPermissions");
    if (A) Y.push(IvA(A));
    if (B.permissions?.defaultMode) Y.push(B.permissions.defaultMode);
    let J;
    for (let W of Y)
        if (W === "bypassPermissions" && I) {
            if (G) g("bypassPermissions mode is disabled by Statsig gate", {
                level: "warn"
            }), J = "Bypass permissions mode was disabled by your organization policy";
            else g("bypassPermissions mode is disabled by settings", {
                level: "warn"
            }), J = "Bypass permissions mode was disabled by settings";
            continue
        } else return {
            mode: W,
            notification: J
        };
    return {
        mode: "default",
        notification: J
    }
}

function w0A(A) {
    if (A.length === 0) return [];
    let Q = [];
    for (let B of A) {
        if (!B) continue;
        let G = "",
            Z = !1;
        for (let I of B) switch (I) {
            case "(":
                Z = !0, G += I;
                break;
            case ")":
                Z = !1, G += I;
                break;
            case ",":
                if (Z) G += I;
                else {
                    if (G.trim()) Q.push(G.trim());
                    G = ""
                }
                break;
            case " ":
                if (Z) G += I;
                else if (G.trim()) Q.push(G.trim()), G = "";
                break;
            default:
                G += I
        }
        if (G.trim()) Q.push(G.trim())
    }
    return Q
}

function NJ9({
    allowedToolsCli: A,
    disallowedToolsCli: Q,
    baseToolsCli: B,
    permissionMode: G,
    allowDangerouslySkipPermissions: Z,
    addDirs: I
}) {
    let Y = w0A(A),
        J = w0A(Q);
    if (B && B.length > 0) {
        let z = bj3(B),
            w = new Set(z),
            q = hX0().filter((R) => !w.has(R));
        J = [...J, ...q]
    }
    let W = [],
        X = new Map,
        F = process.env.PWD;
    if (F && F !== pQ() && fj3({
            originalCwd: pQ(),
            processPwd: F
        })) X.set(F, {
        path: F,
        source: "session"
    });
    let V = j8("tengu_disable_bypass_permissions_mode"),
        K = c0() || {},
        D = K.permissions?.disableBypassPermissionsMode === "disable",
        C = OJ9({
            mode: G,
            additionalWorkingDirectories: X,
            alwaysAllowRules: {
                cliArg: Y
            },
            alwaysDenyRules: {
                cliArg: J
            },
            alwaysAskRules: {},
            isBypassPermissionsModeAvailable: (G === "bypassPermissions" || Z) && !V && !D
        }, YvA()),
        E = [...K.permissions?.additionalDirectories || [], ...I];
    for (let z of E) {
        let w = gjA(z, C);
        if (w.resultType === "success") C = $V(C, {
            type: "addDirectories",
            directories: [w.absolutePath],
            destination: "cliArg"
        });
        else if (w.resultType !== "alreadyInWorkingDirectory") W.push(ujA(w))
    }
    return {
        toolPermissionContext: C,
        warnings: W
    }
}
async function aW0() {
    return RJ9("tengu_disable_bypass_permissions_mode")
}

function LJ9() {
    let A = j8("tengu_disable_bypass_permissions_mode"),
        B = (c0() || {}).permissions?.disableBypassPermissionsMode === "disable";
    return A || B
}

function R59(A) {
    let Q = A;
    if (A.mode === "bypassPermissions") Q = $V(A, {
        type: "setMode",
        mode: "default",
        destination: "session"
    });
    return {
        ...Q,
        isBypassPermissionsModeAvailable: !1
    }
}
async function MJ9(A) {
    if (!A.isBypassPermissionsModeAvailable) return;
    if (!await aW0()) return;
    g("bypassPermissions mode is being disabled by Statsig gate (async check)", {
        level: "warn"
    }), S6(1, "bypass_permissions_disabled")
}
var zWA = lazyLoader(() => {
    aG();
    Gr();
    Bw();
    S0();
    RB();
    sI1();
    hK();
    o0();
    O9();
    D0();
    _J();
    jq()
});

function hj3(A) {
    return !/[^a-zA-Z0-9:\-_]/.test(A)
}
async function TJ9(A, Q, B, G, Z, I, Y, J, W) {
    let X = vJA(A);
    if (!X) return BA("tengu_input_slash_missing", {}), {
        messages: [hF(), ...G, j0({
            content: G$({
                inputString: "Commands are in the form `/command [args]`",
                precedingInputBlocks: Q
            })
        })],
        shouldQuery: !1
    };
    let {
        commandName: F,
        args: V,
        isMcp: K
    } = X, D = K ? "mcp" : !jy().has(F) ? "custom" : F;
    if (!oh(F, Z.options.commands)) {
        let y = OA().existsSync(`/TextComponent{F}`);
        if (hj3(F) && !y) return BA("tengu_input_slash_invalid", {
            input: F
        }), {
            messages: [hF(), ...G, j0({
                content: G$({
                    inputString: `Unknown slash command: TextComponent{F}`,
                    precedingInputBlocks: Q
                })
            })],
            shouldQuery: !1
        };
        return BA("tengu_input_prompt", {}), WO("user_prompt", {
            prompt_length: String(A.length),
            prompt: z61(A)
        }), {
            messages: [j0({
                content: G$({
                    inputString: A,
                    precedingInputBlocks: Q
                }),
                uuid: J
            }), ...G],
            shouldQuery: !0
        }
    }
    I(!0);
    let {
        messages: H,
        shouldQuery: C,
        allowedTools: E,
        skipHistory: z,
        maxThinkingTokens: w,
        model: N,
        command: q
    } = await gj3(F, V, Y, Z, Q, B, W);
    if (H.length === 0) {
        let y = {
            input: D
        };
        if (q.type === "prompt" && q.pluginInfo) {
            let {
                pluginManifest: v,
                repository: x
            } = q.pluginInfo;
            if (y.plugin_repository = x, y.plugin_name = v.name, v.version) y.plugin_version = v.version
        }
        return BA("tengu_input_command", y), {
            messages: [],
            shouldQuery: !1,
            skipHistory: z,
            maxThinkingTokens: w,
            model: N
        }
    }
    if (H.length === 2 && H[1].type === "user" && typeof H[1].message.content === "string" && H[1].message.content.startsWith("Unknown command:")) {
        if (!(A.startsWith("/var") || A.startsWith("/tmp") || A.startsWith("/private"))) BA("tengu_input_slash_invalid", {
            input: F
        });
        return {
            messages: [hF(), ...H],
            shouldQuery: C,
            allowedTools: E,
            maxThinkingTokens: w,
            model: N
        }
    }
    let R = {
        input: D
    };
    if (q.type === "prompt" && q.pluginInfo) {
        let {
            pluginManifest: y,
            repository: v
        } = q.pluginInfo;
        if (R.plugin_repository = v, R.plugin_name = y.name, y.version) R.plugin_version = y.version
    }
    BA("tengu_input_command", R);
    let P = H.length > 0 && H[0] && TQA(H[0]);
    return {
        messages: C || H.every(jJ9) || P ? H : [hF(), ...H],
        shouldQuery: C,
        allowedTools: E,
        maxThinkingTokens: w,
        model: N
    }
}
async function gj3(A, Q, B, G, Z, I, Y) {
    let J = vq(A, G.options.commands);
    try {
        switch (J.type) {
            case "local-jsx":
                return new Promise((W) => {
                    J.call((X, F) => {
                        if (B(null), F?.display === "skip") {
                            W({
                                messages: [],
                                shouldQuery: !1,
                                skipHistory: !0,
                                command: J
                            });
                            return
                        }
                        W({
                            messages: F?.display === "system" ? [uX0(rI1(J, Q)), uX0(`<local-command-stdout>TextComponent{X}</local-command-stdout>`)] : [j0({
                                content: G$({
                                    inputString: rI1(J, Q),
                                    precedingInputBlocks: Z
                                })
                            }), X ? j0({
                                content: `<local-command-stdout>TextComponent{X}</local-command-stdout>`
                            }) : j0({
                                content: `<local-command-stdout>TextComponent{Eq}</local-command-stdout>`
                            })],
                            shouldQuery: !1,
                            command: J
                        })
                    }, G, Q).then((X) => {
                        if (G.options.isNonInteractiveSession) {
                            W({
                                messages: [],
                                shouldQuery: !1,
                                skipHistory: !0,
                                command: J
                            });
                            return
                        }
                        B({
                            jsx: X,
                            shouldHidePromptInput: !0,
                            showSpinner: !1,
                            isLocalJSXCommand: !1
                        })
                    })
                });
            case "local": {
                let W = j0({
                    content: G$({
                        inputString: rI1(J, Q),
                        precedingInputBlocks: Z
                    })
                });
                try {
                    let X = hF(),
                        F = await J.call(Q, G);
                    if (F.type === "skip") return {
                        messages: [],
                        shouldQuery: !1,
                        skipHistory: !0,
                        command: J
                    };
                    if (!G.options.isNonInteractiveSession) process.stdout.write("\x1B[?25l");
                    if (F.type === "compact") {
                        let {
                            boundaryMarker: V,
                            summaryMessages: K,
                            attachments: D,
                            hookResults: H
                        } = F.compactionResult;
                        return {
                            messages: [V, ...K, X, W, ...F.displayText ? [j0({
                                content: `<local-command-stdout>TextComponent{F.displayText}</local-command-stdout>`,
                                timestamp: new Date(Date.now() + 100).toISOString()
                            })] : [], ...D, ...H],
                            shouldQuery: !1,
                            command: J
                        }
                    }
                    return {
                        messages: [W, j0({
                            content: `<local-command-stdout>TextComponent{F.value}</local-command-stdout>`
                        })],
                        shouldQuery: !1,
                        command: J
                    }
                } catch (X) {
                    return e(X), {
                        messages: [W, j0({
                            content: `<local-command-stderr>TextComponent{String(X)}</local-command-stderr>`
                        })],
                        shouldQuery: !1,
                        command: J
                    }
                }
            }
            case "prompt":
                try {
                    return await PJ9(J, Q, G, Z, I)
                } catch (W) {
                    return {
                        messages: [j0({
                            content: G$({
                                inputString: rI1(J, Q),
                                precedingInputBlocks: Z
                            })
                        }), j0({
                            content: `<local-command-stderr>TextComponent{String(W)}</local-command-stderr>`
                        })],
                        shouldQuery: !1,
                        command: J
                    }
                }
        }
    } catch (W) {
        if (W instanceof rj) return {
            messages: [j0({
                content: G$({
                    inputString: W.message,
                    precedingInputBlocks: Z
                })
            })],
            shouldQuery: !1,
            command: J
        };
        throw W
    }
}

function rI1(A, Q) {
    return `<command-name>/TextComponent{A.userFacingName()}</command-name>
            <command-message>TextComponent{A.userFacingName()}</command-message>
            <command-args>TextComponent{Q}</command-args>`
}

function wX0(A, Q = "loading") {
    return `<command-message>TextComponent{`The "TextComponent{A}" skill is TextComponent{Q}`}</command-message>
<command-name>TextComponent{A}</command-name>`
}

function uj3(A, Q, B) {
    return [`<command-message>TextComponent{`TextComponent{A} is TextComponent{Q}…`}</command-message>`, `<command-name>/TextComponent{A}</command-name>`, B ? `<command-args>TextComponent{B}</command-args>` : null].filter(Boolean).join(`
`)
}

function mj3(A, Q) {
    if (A.isSkill) return wX0(A.userFacingName(), A.progressMessage);
    return uj3(A.userFacingName(), A.progressMessage, Q)
}
async function l31(A, Q, B, G, Z = []) {
    if (!oh(A, B)) throw new rj(`Unknown command: TextComponent{A}`);
    let I = vq(A, B);
    if (I.type !== "prompt") throw Error(`Unexpected TextComponent{I.type} command. Expected 'prompt' command. Use /TextComponent{A} directly in the main conversation.`);
    return PJ9(I, Q, G, [], Z)
}
async function PJ9(A, Q, B, G = [], Z = []) {
    let I = await A.getPromptForCommand(Q, B),
        Y = mj3(A, Q);
    g(`Metadata string for TextComponent{A.userFacingName()}:`), g(`  TextComponent{Y.substring(0,200)}`);
    let J = (Y.match(/<command-message>/g) || []).length;
    g(`  command-message tags in metadata: TextComponent{J}`);
    let W = w0A(A.allowedTools ?? []),
        X = Z.length > 0 || G.length > 0 ? [...Z, ...G, ...I] : I,
        F = Xf([j0({
            content: X
        })], void 0),
        V = await V91(HYA(I.filter((D) => D.type === "text").map((D) => D.text).join(" "), B, null, [], B.messages, "repl_main_thread")),
        K = [j0({
            content: Y
        }), j0({
            content: X,
            isMeta: !0
        }), ...V, ...W.length || A.model ? [p9({
            type: "command_permissions",
            allowedTools: W,
            model: A.useSmallFastModel ? getSmallFastModel() : A.model
        })] : []];
    return g(`processPromptSlashCommand creating TextComponent{K.length} messages for TextComponent{A.userFacingName()}`), K.forEach((D, H) => {
        if (D.type === "user" && "message" in D) {
            let C = typeof D.message.content === "string" ? D.message.content : JSON.stringify(D.message.content),
                E = "isMeta" in D && D.isMeta ? " [META]" : "",
                z = C.substring(0, 200);
            g(`  Message TextComponent{H+1}TextComponent{E}: TextComponent{z}`)
        } else if (D.type === "attachment") g(`  Message TextComponent{H+1}: [ATTACHMENT]`)
    }), {
        messages: K,
        shouldQuery: !0,
        allowedTools: W,
        maxThinkingTokens: F > 0 ? F : void 0,
        model: A.useSmallFastModel ? getSmallFastModel() : A.model,
        command: A
    }
}
var jTA = lazyLoader(() => {
    w0();
    nQ();
    nE();
    o0();
    bJA();
    tM();
    u1();
    D0();
    $Z();
    zWA();
    wi();
    eM();
    zU();
    s2()
});
import {
    homedir as dj3
} from "os";
import {
    relative as cj3
} from "path";

function dX0(A) {
    let Q = dj3(),
        B = H0(),
        G = A.startsWith(Q) ? "~" + A.slice(Q.length) : null,
        Z = A.startsWith(B) ? "./" + cj3(B, A) : null;
    if (G && Z) return G.length <= Z.length ? G : Z;
    return G || Z || A
}

function SJ9({
    memoryPath: A
}) {
    let Q = dX0(A);
    return mX0.default.createElement(j, {
        flexDirection: "column",
        flexGrow: 1
    }, mX0.default.createElement(TextComponent, {
        color: "text"
    }, "Memory updated in ", Q, " · /memory to edit"))
}
var mX0;
var cX0 = lazyLoader(() => {
    hA();
    R2();
    mX0 = esmImport(VA(), 1)
});
import {
    dirname as _J9
} from "path";

function pj3(A) {
    let Q = A.trim();
    if (!Q) return "";
    if (Q.startsWith("- ")) return Q;
    if (Q.startsWith("-")) return `- TextComponent{Q.slice(1).trim()}`;
    return `- TextComponent{Q}`
}

function lj3() {
    let A = L1(),
        Q = (A.memoryUsageCount || 0) + 1;
    d0({
        ...A,
        memoryUsageCount: Q
    })
}
var pX0, kJ9;
var yJ9 = lazyLoader(() => {
    cX0();
    w0();
    jQ();
    wJ0();
    o0();
    M9();
    u1();
    pX0 = esmImport(VA(), 1);
    kJ9 = I_(async function(A, Q, B) {
        BA("tengu_add_memory_start", {}), lj3();
        let G = M09(B);
        if (!OA().existsSync(_J9(B))) try {
            OA().mkdirSync(_J9(B))
        } catch (Z) {
            e(Z instanceof Error ? Z : Error(String(Z)))
        }
        try {
            let Z = pj3(A),
                I = G.replace(/\n+TextComponent/, ""),
                Y = I ? `TextComponent{I}
TextComponent{Z}` : Z;
            OA().writeFileSync(B, Y, {
                encoding: "utf8",
                flush: !0
            }), Q.readFileState.set(B, {
                content: Y,
                timestamp: RD(B),
                offset: void 0,
                limit: void 0
            }), BA("tengu_add_memory_success", {}), Q.addNotification?.({
                key: "memory-update-success",
                priority: "immediate",
                jsx: pX0.createElement(SJ9, {
                    memoryPath: B
                })
            })
        } catch (Z) {
            e(Z), BA("tengu_add_memory_failure", {}), Q.addNotification?.({
                key: "memory-update-error",
                priority: "high",
                text: "Failed to save memory",
                color: "error"
            })
        }
    })
});

function xJ9(A, Q, B, G, Z) {
    BA("tengu_input_memory", {});
    let I = j0({
        content: G$({
            inputString: `<user-memory-input>TextComponent{A}</user-memory-input>`,
            precedingInputBlocks: Q
        })
    });
    return kJ9(A, G, Z), {
        messages: [hF(), ...B, I],
        shouldQuery: !1
    }
}
var vJ9 = lazyLoader(() => {
    w0();
    nQ();
    yJ9()
});

function bJ9(A, Q, B, G, Z, I, Y, J) {
    G(!0);
    let W = typeof A === "string" ? A : A.find((K) => K.type === "text")?.text || "";
    nL2(W);
    let X = {};
    if (typeof A === "string") {
        let K = hv2(A),
            D = gv2(A);
        X = {
            is_negative: K,
            is_keep_going: D
        }, WO("user_prompt", {
            prompt_length: String(A.length),
            prompt: z61(A)
        })
    }
    if (BA("tengu_input_prompt", X), Q.length > 0) {
        let K = j0({
                content: [...Q, ...typeof A === "string" ? [{
                    type: "text",
                    text: A
                }] : A],
                uuid: Z,
                thinkingMetadata: I,
                todos: J
            }),
            D = Xf([K], Y ?? void 0);
        return {
            messages: [K, ...B],
            shouldQuery: !0,
            maxThinkingTokens: D > 0 ? D : void 0
        }
    }
    let F = j0({
            content: A,
            uuid: Z,
            thinkingMetadata: I,
            todos: J
        }),
        V = Xf([F], Y ?? void 0);
    return {
        messages: [F, ...B],
        shouldQuery: !0,
        maxThinkingTokens: V > 0 ? V : void 0
    }
}
var fJ9 = lazyLoader(() => {
    w0();
    bJA();
    A0A();
    nQ();
    zU()
});
import {
    randomUUID as ij3
} from "node:crypto";
async function pP({
    input: A,
    mode: Q,
    setIsLoading: B,
    setToolJSX: G,
    context: Z,
    pastedContents: I,
    ideSelection: Y,
    memoryPath: J,
    messages: W,
    setUserInputOnProcessing: X,
    uuid: F,
    isAlreadyProcessing: V,
    thinkingMetadata: K,
    manualThinkingTokens: D,
    querySource: H
}) {
    let C = typeof A === "string" ? A : null;
    if (Q === "prompt" && C !== null) X?.(C);
    try {
        p7("query_process_user_input_base_start");
        let E = await Z.getAppState(),
            z = await nj3(A, Q, B, G, Z, I, Y, J, W, F, V, K, D, H, E.todos[Z.agentId]);
        if (p7("query_process_user_input_base_end"), !z.shouldQuery) return z;
        p7("query_hooks_start");
        let w = yXA(A) || "";
        for await (let N of nX0(w, E.toolPermissionContext.mode, Z)) {
            if (N.message?.type === "progress") continue;
            if (N.blockingError) {
                let q = iX0(N.blockingError);
                return {
                    messages: [Vy(`TextComponent{q}

Original prompt: TextComponent{A}`, "warning")],
                    shouldQuery: !1,
                    allowedTools: z.allowedTools,
                    skipHistory: z.skipHistory,
                    maxThinkingTokens: z.maxThinkingTokens
                }
            }
            if (N.preventContinuation) {
                let q = N.stopReason ? `Operation stopped by hook: TextComponent{N.stopReason}` : "Operation stopped by hook";
                return z.messages.push(j0({
                    content: q
                })), z.shouldQuery = !1, z
            }