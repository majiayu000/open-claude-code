/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: telemetry_014.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (14次) = lazyLoader(fn) - Lazy module loader
 *   GA       (4次) = esmImport(module) - ESM import helper
 *   R5       (1次) = EDIT_TOOL_NAME = "Edit"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 14/14
 * Lines: 340919 - 342417 (1499 lines)
 * Original file: cli.js
 */


function U_2(A) {
    return A.code === "invalid_type"
}

function $_2(A) {
    return A.code === "invalid_literal"
}

function w_2(A) {
    return A.code === "invalid_enum_value"
}

function Gh5(A) {
    return A.code === "unrecognized_keys"
}

function q_2(A) {
    return A.code === "too_small"
}

function B50(A, Q) {
    return A.issues.map((B) => {
        let G = B.path.join("."),
            Z = B.message,
            I, Y, J, W;
        if (w_2(B)) Y = B.options.map((F) => String(F)), W = B.received;
        else if ($_2(B)) J = String(B.expected), W = B.received;
        else if (U_2(B)) J = B.expected, W = B.received;
        else if (q_2(B)) J = String(B.minimum);
        else if (B.code === "custom" && "params" in B) W = B.params.received;
        let X = vS2({
            path: G,
            code: B.code,
            expected: J,
            received: W,
            enumValues: Y,
            message: B.message,
            value: W
        });
        if ($_2(B)) I = `"${B.expected}"`, Z = `"${B.received}" is not valid. Expected: ${I}`;
        else if (w_2(B)) I = Y?.map((F) => `"${F}"`).join(", "), Z = `"${B.received}" is not valid. Expected one of: ${I}`;
        else if (U_2(B))
            if (B.expected === "object" && B.received === "null" && G === "") Z = "Invalid or malformed JSON";
            else Z = `Expected ${B.expected}, but received ${B.received}`;
        else if (Gh5(B)) {
            let F = B.keys.join(", ");
            Z = `Unrecognized field${B.keys.length>1?"s":""}: ${F}`
        } else if (q_2(B)) Z = `Number must be greater than or equal to ${B.minimum}`, I = String(B.minimum);
        return {
            file: Q,
            path: G,
            message: Z,
            expected: I,
            invalidValue: W,
            suggestion: X?.suggestion,
            docLink: X?.docLink
        }
    })
}

function G50(A) {
    try {
        let Q = JSON.parse(A),
            B = D0A.strict().safeParse(Q);
        if (B.success) return {
            isValid: !0
        };
        return {
            isValid: !1,
            error: `Settings validation failed:
` + B50(B.error, "settings").map((I) => `- ${I.path}: ${I.message}`).join(`
`),
            fullSchema: Q50()
        }
    } catch (Q) {
        return {
            isValid: !1,
            error: `Invalid JSON: ${Q instanceof Error?Q.message:"Unknown parsing error"}`,
            fullSchema: Q50()
        }
    }
}
var Z50 = L(() => {
    E3A();
    bS2();
    z_2()
});

function N_2(A, Q, B) {
    if (!I50(A)) return null;
    if (!G50(Q).isValid) return null;
    let Z = B(),
        I = G50(Z);
    if (!I.isValid) return {
        result: !1,
        message: `Claude Code settings.json validation failed after edit:
${I.error}

Full schema:
${I.fullSchema}
IMPORTANT: Do not update the env unless explicitly instructed to do so.`,
        errorCode: 10
    };
    return null
}
var L_2 = L(() => {
    Z50();
    _Y()
});
import {
    relative as Zh5
} from "path";

function M_2({
    file_path: A,
    operation: Q,
    patch: B,
    style: G,
    verbose: Z
}) {
    let {
        columns: I
    } = YB(), Y = gF.createElement(j, {
        flexDirection: "row"
    }, gF.createElement($, {
        color: "error"
    }, "User rejected ", Q, " to "), gF.createElement($, {
        bold: !0,
        color: "error"
    }, Z ? A : Zh5(H0(), A)));
    if (G === "condensed" && !Z) return Y;
    return gF.createElement(y0, null, gF.createElement(j, {
        flexDirection: "column"
    }, Y, fF(B.map((J) => gF.createElement(j, {
        flexDirection: "column",
        key: J.newStart
    }, gF.createElement(Z$, {
        patch: J,
        dim: !0,
        width: I - 12,
        filePath: A
    }))), (J) => gF.createElement(j, {
        key: `ellipsis-${J}`
    }, gF.createElement($, {
        dimColor: !0
    }, "...")))))
}
var gF;
var O_2 = L(() => {
    hA();
    R2();
    Zn();
    m8();
    u8();
    gF = GA(VA(), 1)
});

function R_2(A) {
    if (!A) return "Update";
    if (A.file_path?.startsWith(vU())) return "Updated plan";
    if (A.old_string === "") return "Create";
    return "Update"
}

function T_2(A) {
    if (!A?.file_path) return null;
    return Q5(A.file_path)
}

function P_2({
    file_path: A
}, {
    verbose: Q
}) {
    if (!A) return null;
    if (A.startsWith(vU())) return "";
    return Q ? A : Q5(A)
}

function j_2() {
    return null
}

function S_2({
    filePath: A,
    structuredPatch: Q
}, B, {
    style: G,
    verbose: Z
}) {
    if (!Z && A.startsWith(vU())) {
        let I = Q5(A);
        return sY.createElement(y0, null, sY.createElement($, {
            dimColor: !0
        }, "/plan to preview · ", I))
    }
    return sY.createElement(y61, {
        filePath: A,
        structuredPatch: Q,
        style: G,
        verbose: Z
    })
}

function __2({
    file_path: A,
    old_string: Q,
    new_string: B,
    replace_all: G = !1
}, Z) {
    let {
        style: I,
        verbose: Y
    } = Z;
    try {
        let J = OA().existsSync(A) ? OA().readFileSync(A, {
                encoding: "utf8"
            }) : "",
            W = E1A(J, Q) || Q,
            {
                patch: X
            } = h21({
                filePath: A,
                fileContents: J,
                oldString: W,
                newString: B,
                replaceAll: G
            });
        return sY.createElement(M_2, {
            file_path: A,
            operation: Q === "" ? "write" : "update",
            patch: X,
            style: I,
            verbose: Y
        })
    } catch (J) {
        return e(J), sY.createElement(y0, {
            height: 1
        }, sY.createElement($, null, "(No changes)"))
    }
}

function k_2(A, Q) {
    let {
        verbose: B
    } = Q;
    if (!B && typeof A === "string" && e2(A, "tool_use_error")) {
        if (e2(A, "tool_use_error")?.includes("File has not been read yet")) return sY.createElement(y0, null, sY.createElement($, {
            dimColor: !0
        }, "File must be read first"));
        return sY.createElement(y0, null, sY.createElement($, {
            color: "error"
        }, "Error editing file"))
    }
    return sY.createElement(A5, {
        result: A,
        verbose: B
    })
}
var sY;
var y_2 = L(() => {
    hA();
    C60();
    lX();
    O_2();
    u8();
    M9();
    nQ();
    z1A();
    o0();
    u1();
    _E();
    sY = GA(VA(), 1)
});
import {
    dirname as Ih5,
    isAbsolute as i61,
    resolve as Yh5,
    sep as Jh5
} from "path";
var gD;
var Wn = L(() => {
    w0();
    O9();
    r01();
    M9();
    R2();
    S0();
    fk();
    xS2();
    z1A();
    _Y();
    jI();
    o0();
    C1A();
    LRA();
    NMA();
    u1();
    D0();
    F60();
    L_2();
    iU();
    y_2();
    gD = {
        name: R5,
        strict: !0,
        async description() {
            return "A tool for editing files"
        },
        async prompt() {
            return yS2
        },
        userFacingName: R_2,
        getToolUseSummary: T_2,
        isEnabled() {
            return !0
        },
        inputSchema: uj2,
        outputSchema: mj2,
        isConcurrencySafe() {
            return !1
        },
        isReadOnly() {
            return !1
        },
        getPath(A) {
            return A.file_path
        },
        async checkPermissions(A, Q) {
            let B = await Q.getAppState();
            return V0A(gD, A, B.toolPermissionContext)
        },
        renderToolUseMessage: P_2,
        renderToolUseProgressMessage: j_2,
        renderToolResultMessage: S_2,
        renderToolUseRejectedMessage: __2,
        renderToolUseErrorMessage: k_2,
        async validateInput({
            file_path: A,
            old_string: Q,
            new_string: B,
            replace_all: G = !1
        }, Z) {
            if (Q === B) return {
                result: !1,
                behavior: "ask",
                message: "No changes to make: old_string and new_string are exactly the same.",
                errorCode: 1
            };
            let I = i61(A) ? A : Yh5(H0(), A),
                Y = await Z.getAppState();
            if (TD(I, Y.toolPermissionContext, "edit", "deny") !== null) return {
                result: !1,
                behavior: "ask",
                message: "File is in a directory that is denied by your permission settings.",
                errorCode: 2
            };
            let W = OA();
            if (W.existsSync(I) && Q === "") {
                if (W.readFileSync(I, {
                        encoding: VH(I)
                    }).replaceAll(`\r
`, `
`).trim() !== "") return {
                    result: !1,
                    behavior: "ask",
                    message: "Cannot create new file - file already exists.",
                    errorCode: 3
                };
                return {
                    result: !0
                }
            }
            if (!W.existsSync(I) && Q === "") return {
                result: !0
            };
            if (!W.existsSync(I)) {
                let H = AQ1(I),
                    C = "File does not exist.",
                    E = H0(),
                    z = pQ();
                if (E !== z) C += ` Current working directory: ${E}`;
                if (H) C += ` Did you mean ${H}?`;
                return {
                    result: !1,
                    behavior: "ask",
                    message: C,
                    errorCode: 4
                }
            }
            if (I.endsWith(".ipynb")) return {
                result: !1,
                behavior: "ask",
                message: `File is a Jupyter Notebook. Use the ${M_} to edit this file.`,
                errorCode: 5
            };
            let X = Z.readFileState.get(I);
            if (!X) return {
                result: !1,
                behavior: "ask",
                message: "File has not been read yet. Read it first before writing to it.",
                meta: {
                    isFilePathAbsolute: String(i61(A))
                },
                errorCode: 6
            };
            if (X) {
                if (RD(I) > X.timestamp) return {
                    result: !1,
                    behavior: "ask",
                    message: "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
                    errorCode: 7
                }
            }
            let F = W.readFileSync(I, {
                    encoding: VH(I)
                }).replaceAll(`\r
`, `
`),
                V = E1A(F, Q);
            if (!V) return {
                result: !1,
                behavior: "ask",
                message: `String to replace not found in file.
String: ${Q}`,
                meta: {
                    isFilePathAbsolute: String(i61(A))
                },
                errorCode: 8
            };
            let K = F.split(V).length - 1;
            if (K > 1 && !G) return {
                result: !1,
                behavior: "ask",
                message: `Found ${K} matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.
String: ${Q}`,
                meta: {
                    isFilePathAbsolute: String(i61(A)),
                    actualOldString: V
                },
                errorCode: 9
            };
            let D = N_2(I, F, () => {
                return G ? F.replaceAll(V, B) : F.replace(V, B)
            });
            if (D !== null) return D;
            return {
                result: !0,
                meta: {
                    actualOldString: V
                }
            }
        },
        inputsEquivalent(A, Q) {
            return qZ2({
                file_path: A.file_path,
                edits: [{
                    old_string: A.old_string,
                    new_string: A.new_string,
                    replace_all: A.replace_all ?? !1
                }]
            }, {
                file_path: Q.file_path,
                edits: [{
                    old_string: Q.old_string,
                    new_string: Q.new_string,
                    replace_all: Q.replace_all ?? !1
                }]
            })
        },
        async call({
            file_path: A,
            old_string: Q,
            new_string: B,
            replace_all: G = !1
        }, {
            readFileState: Z,
            userModified: I,
            updateFileHistoryState: Y
        }, J, W) {
            let X = OA(),
                F = b9(A);
            await Uh.beforeFileEdited(F);
            let V = X.existsSync(F) ? Tq(F) : "";
            if (X.existsSync(F)) {
                let q = RD(F),
                    R = Z.get(F);
                if (!R || q > R.timestamp) throw Error("File has been unexpectedly modified. Read it again before attempting to write it.")
            }
            if (JG()) await zYA(Y, F, W.uuid);
            let K = E1A(V, Q) || Q,
                {
                    patch: D,
                    updatedFile: H
                } = h21({
                    filePath: F,
                    fileContents: V,
                    oldString: K,
                    newString: B,
                    replaceAll: G
                }),
                C = Ih5(F);
            X.mkdirSync(C);
            let E = X.existsSync(F) ? K0A(F) : "LF",
                z = X.existsSync(F) ? VH(F) : "utf8";
            nJA(F, H, z, E);
            let w = pJA();
            if (w) u21(`file://${F}`), w.changeFile(F, H).catch((q) => {
                g(`LSP: Failed to notify server of file change for ${F}: ${q.message}`), e(q)
            }), w.saveFile(F).catch((q) => {
                g(`LSP: Failed to notify server of file save for ${F}: ${q.message}`), e(q)
            });
            if (Z.set(F, {
                    content: H,
                    timestamp: RD(F),
                    offset: void 0,
                    limit: void 0
                }), F.endsWith(`${Jh5}CLAUDE.md`)) BA("tengu_write_claudemd", {});
            return $MA(D), $k({
                operation: "edit",
                tool: "FileEditTool",
                filePath: F
            }), {
                data: {
                    filePath: A,
                    oldString: K,
                    newString: B,
                    originalFile: V,
                    structuredPatch: D,
                    userModified: I ?? !1,
                    replaceAll: G
                }
            }
        },
        mapToolResultToToolResultBlockParam({
            filePath: A,
            originalFile: Q,
            oldString: B,
            newString: G,
            userModified: Z,
            replaceAll: I
        }, Y) {
            let J = Z ? ".  The user modified your proposed changes before accepting them. " : "";
            if (I) return {
                tool_use_id: Y,
                type: "tool_result",
                content: `The file ${A} has been updated${J}. All occurrences of '${B}' were successfully replaced with '${G}'.`
            };
            if (ZI("tengu_file_edit_optimization", "enabled", !1)) return {
                tool_use_id: Y,
                type: "tool_result",
                content: `The file ${A} has been updated successfully${J}.`
            };
            let {
                snippet: X,
                startLine: F
            } = UZ2(Q || "", B, G);
            return {
                tool_use_id: Y,
                type: "tool_result",
                content: `The file ${A} has been updated${J}. Here's the result of running \`cat -n\` on a snippet of the edited file:
${ml({content:X,startLine:F})}`
            }
        }
    }
});
var x_2 = "Replace the contents of a specific cell in a Jupyter notebook.",
    v_2 = "Completely replaces the contents of a specific cell in a Jupyter notebook (.ipynb file) with new source. Jupyter notebooks are interactive documents that combine code, text, and visualizations, commonly used for data analysis and scientific computing. The notebook_path parameter must be an absolute path, not a relative path. The cell_number is 0-indexed. Use edit_mode=insert to add a new cell at the index specified by cell_number. Use edit_mode=delete to delete the cell at the index specified by cell_number.";
import {
    relative as Wh5
} from "path";

function b_2({
    notebook_path: A,
    cell_id: Q,
    new_source: B,
    cell_type: G,
    edit_mode: Z = "replace",
    verbose: I
}) {
    let Y = Z === "delete" ? "delete" : `${Z} cell in`;
    return uF.createElement(y0, null, uF.createElement(j, {
        flexDirection: "column"
    }, uF.createElement(j, {
        flexDirection: "row"
    }, uF.createElement($, {
        color: "error"
    }, "User rejected ", Y, " "), uF.createElement($, {
        bold: !0,
        color: "error"
    }, I ? A : Wh5(H0(), A)), uF.createElement($, {
        color: "error"
    }, " at cell ", Q)), Z !== "delete" && uF.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, uF.createElement($, {
        dimColor: !0
    }, uF.createElement(XO, {
        code: B,
        language: G === "markdown" ? "markdown" : "python"
    })))))
}
var uF;
var f_2 = L(() => {
    hA();
    R2();
    u8();
    iJA();
    uF = GA(VA(), 1)
});

function h_2(A) {
    if (!A?.notebook_path) return null;
    return Q5(A.notebook_path)
}

function g_2({
    notebook_path: A,
    cell_id: Q,
    new_source: B,
    cell_type: G,
    edit_mode: Z
}, {
    verbose: I
}) {
    if (!A || !B || !G) return null;
    if (I) return `${A}@${Q}, content: ${B.slice(0,30)}…, cell_type: ${G}, edit_mode: ${Z??"replace"}`;
    return `${Q5(A)}@${Q}`
}

function u_2(A, {
    verbose: Q
}) {
    return UI.createElement(b_2, {
        notebook_path: A.notebook_path,
        cell_id: A.cell_id,
        new_source: A.new_source,
        cell_type: A.cell_type,
        edit_mode: A.edit_mode,
        verbose: Q
    })
}

function m_2(A, {
    verbose: Q
}) {
    if (!Q && typeof A === "string" && e2(A, "tool_use_error")) return UI.createElement(y0, null, UI.createElement($, {
        color: "error"
    }, "Error editing notebook"));
    return UI.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function d_2() {
    return null
}

function c_2({
    cell_id: A,
    new_source: Q,
    language: B,
    error: G
}) {
    if (G) return UI.createElement(y0, null, UI.createElement($, {
        color: "error"
    }, G));
    return UI.createElement(y0, null, UI.createElement(j, {
        flexDirection: "column"
    }, UI.createElement($, null, "Updated cell ", UI.createElement($, {
        bold: !0
    }, A), ":"), UI.createElement(j, {
        marginLeft: 2
    }, UI.createElement(XO, {
        code: Q,
        language: B
    }))))
}
var UI;
var p_2 = L(() => {
    hA();
    iJA();
    f_2();
    u8();
    lX();
    nQ();
    M9();
    UI = GA(VA(), 1)
});
import {
    extname as Xh5,
    isAbsolute as l_2,
    resolve as i_2
} from "path";
var Fh5, Vh5, LP;
var eJA = L(() => {
    h2();
    UoA();
    M9();
    zV();
    R2();
    _Y();
    o0();
    iU();
    p_2();
    Fh5 = _.strictObject({
        notebook_path: _.string().describe("The absolute path to the Jupyter notebook file to edit (must be absolute, not relative)"),
        cell_id: _.string().optional().describe("The ID of the cell to edit. When inserting a new cell, the new cell will be inserted after the cell with this ID, or at the beginning if not specified."),
        new_source: _.string().describe("The new source for the cell"),
        cell_type: _.enum(["code", "markdown"]).optional().describe("The type of the cell (code or markdown). If not specified, it defaults to the current cell type. If using edit_mode=insert, this is required."),
        edit_mode: _.enum(["replace", "insert", "delete"]).optional().describe("The type of edit to make (replace, insert, delete). Defaults to replace.")
    }), Vh5 = _.object({
        new_source: _.string().describe("The new source code that was written to the cell"),
        cell_id: _.string().optional().describe("The ID of the cell that was edited"),
        cell_type: _.enum(["code", "markdown"]).describe("The type of the cell"),
        language: _.string().describe("The programming language of the notebook"),
        edit_mode: _.string().describe("The edit mode that was used"),
        error: _.string().optional().describe("Error message if the operation failed")
    }), LP = {
        name: M_,
        async description() {
            return x_2
        },
        async prompt() {
            return v_2
        },
        userFacingName() {
            return "Edit Notebook"
        },
        getToolUseSummary: h_2,
        isEnabled() {
            return !0
        },
        inputSchema: Fh5,
        outputSchema: Vh5,
        isConcurrencySafe() {
            return !1
        },
        isReadOnly() {
            return !1
        },
        getPath(A) {
            return A.notebook_path
        },
        async checkPermissions(A, Q) {
            let B = await Q.getAppState();
            return V0A(LP, A, B.toolPermissionContext)
        },
        mapToolResultToToolResultBlockParam({
            cell_id: A,
            edit_mode: Q,
            new_source: B,
            error: G
        }, Z) {
            if (G) return {
                tool_use_id: Z,
                type: "tool_result",
                content: G,
                is_error: !0
            };
            switch (Q) {
                case "replace":
                    return {
                        tool_use_id: Z, type: "tool_result", content: `Updated cell ${A} with ${B}`
                    };
                case "insert":
                    return {
                        tool_use_id: Z, type: "tool_result", content: `Inserted cell ${A} with ${B}`
                    };
                case "delete":
                    return {
                        tool_use_id: Z, type: "tool_result", content: `Deleted cell ${A}`
                    };
                default:
                    return {
                        tool_use_id: Z, type: "tool_result", content: "Unknown edit mode"
                    }
            }
        },
        renderToolUseMessage: g_2,
        renderToolUseRejectedMessage: u_2,
        renderToolUseErrorMessage: m_2,
        renderToolUseProgressMessage: d_2,
        renderToolResultMessage: c_2,
        async validateInput({
            notebook_path: A,
            cell_type: Q,
            cell_id: B,
            edit_mode: G = "replace"
        }) {
            let Z = l_2(A) ? A : i_2(H0(), A),
                I = OA();
            if (!I.existsSync(Z)) return {
                result: !1,
                message: "Notebook file does not exist.",
                errorCode: 1
            };
            if (Xh5(Z) !== ".ipynb") return {
                result: !1,
                message: "File must be a Jupyter notebook (.ipynb file). For editing other file types, use the FileEdit tool.",
                errorCode: 2
            };
            if (G !== "replace" && G !== "insert" && G !== "delete") return {
                result: !1,
                message: "Edit mode must be replace, insert, or delete.",
                errorCode: 4
            };
            if (G === "insert" && !Q) return {
                result: !1,
                message: "Cell type is required when using edit_mode=insert.",
                errorCode: 5
            };
            let Y = VH(Z),
                J = I.readFileSync(Z, {
                    encoding: Y
                }),
                W = S7(J);
            if (!W) return {
                result: !1,
                message: "Notebook is not valid JSON.",
                errorCode: 6
            };
            if (!B) {
                if (G !== "insert") return {
                    result: !1,
                    message: "Cell ID must be specified when not inserting a new cell.",
                    errorCode: 7
                }
            } else if (W.cells.findIndex((F) => F.id === B) === -1) {
                let F = ZwA(B);
                if (F !== void 0) {
                    if (!W.cells[F]) return {
                        result: !1,
                        message: `Cell with index ${F} does not exist in notebook.`,
                        errorCode: 7
                    }
                } else return {
                    result: !1,
                    message: `Cell with ID "${B}" not found in notebook.`,
                    errorCode: 8
                }
            }
            return {
                result: !0
            }
        },
        async call({
            notebook_path: A,
            new_source: Q,
            cell_id: B,
            cell_type: G,
            edit_mode: Z
        }, {
            updateFileHistoryState: I
        }, Y, J) {
            let W = l_2(A) ? A : i_2(H0(), A);
            if (JG()) await zYA(I, W, J.uuid);
            try {
                let X = VH(W),
                    F = OA().readFileSync(W, {
                        encoding: X
                    }),
                    V = JSON.parse(F),
                    K;
                if (!B) K = 0;
                else {
                    if (K = V.cells.findIndex((w) => w.id === B), K === -1) {
                        let w = ZwA(B);
                        if (w !== void 0) K = w
                    }
                    if (Z === "insert") K += 1
                }
                let D = Z;
                if (D === "replace" && K === V.cells.length) {
                    if (D = "insert", !G) G = "code"
                }
                let H = V.metadata.language_info?.name ?? "python",
                    C = void 0;
                if (V.nbformat > 4 || V.nbformat === 4 && V.nbformat_minor >= 5) {
                    if (D === "insert") C = Math.random().toString(36).substring(2, 15);
                    else if (B !== null) C = B
                }
                if (D === "delete") V.cells.splice(K, 1);
                else if (D === "insert") {
                    let w;
                    if (G === "markdown") w = {
                        cell_type: "markdown",
                        id: C,
                        source: Q,
                        metadata: {}
                    };
                    else w = {
                        cell_type: "code",
                        id: C,
                        source: Q,
                        metadata: {},
                        execution_count: null,
                        outputs: []
                    };
                    V.cells.splice(K, 0, w)
                } else {
                    let w = V.cells[K];
                    if (w.source = Q, w.cell_type === "code") w.execution_count = null, w.outputs = [];
                    if (G && G !== w.cell_type) w.cell_type = G
                }
                let E = K0A(W);
                return nJA(W, JSON.stringify(V, null, 1), X, E), {
                    data: {
                        new_source: Q,
                        cell_type: G ?? "code",
                        language: H,
                        edit_mode: D ?? "replace",
                        cell_id: C || void 0,
                        error: ""
                    }
                }
            } catch (X) {
                if (X instanceof Error) return {
                    data: {
                        new_source: Q,
                        cell_type: G ?? "code",
                        language: "python",
                        edit_mode: "replace",
                        error: X.message,
                        cell_id: B
                    }
                };
                return {
                    data: {
                        new_source: Q,
                        cell_type: G ?? "code",
                        language: "python",
                        edit_mode: "replace",
                        error: "Unknown error occurred while editing notebook",
                        cell_id: B
                    }
                }
            }
        }
    }
});

function AWA(A, Q, B) {
    function G(J, W) {
        var X;
        Object.defineProperty(J, "_zod", {
            value: J._zod ?? {},
            enumerable: !1
        }), (X = J._zod).traits ?? (X.traits = new Set), J._zod.traits.add(A), Q(J, W);
        for (let F in Y.prototype)
            if (!(F in J)) Object.defineProperty(J, F, {
                value: Y.prototype[F].bind(J)
            });
        J._zod.constr = Y, J._zod.def = W
    }
    let Z = B?.Parent ?? Object;
    class I extends Z {}
    Object.defineProperty(I, "name", {
        value: A
    });

    function Y(J) {
        var W;
        let X = B?.Parent ? new I : this;
        G(X, J), (W = X._zod).deferred ?? (W.deferred = []);
        for (let F of X._zod.deferred) F();
        return X
    }
    return Object.defineProperty(Y, "init", {
        value: G
    }), Object.defineProperty(Y, Symbol.hasInstance, {
        value: (J) => {
            if (B?.Parent && J instanceof B.Parent) return !0;
            return J?._zod?.traits?.has(A)
        }
    }), Object.defineProperty(Y, "name", {
        value: A
    }), Y
}

function Y50(A) {
    if (A) Object.assign(n_2, A);
    return n_2
}
var Kh5, Dh5, n_2;
var J50 = L(() => {
    Kh5 = Object.freeze({
        status: "aborted"
    });
    Dh5 = Symbol("zod_brand"), n_2 = {}
});

function a_2(A) {
    let Q = Object.values(A).filter((G) => typeof G === "number");
    return Object.entries(A).filter(([G, Z]) => Q.indexOf(+G) === -1).map(([G, Z]) => Z)
}

function W50(A, Q = "|") {
    return A.map((B) => X50(B)).join(Q)
}

function s_2(A, Q) {
    if (typeof Q === "bigint") return Q.toString();
    return Q
}

function Hh5(A) {
    return {
        get value() {
            {
                let B = A();
                return Object.defineProperty(this, "value", {
                    value: B
                }), B
            }
            throw Error("cached value already set")
        }
    }
}

function X50(A) {
    if (typeof A === "bigint") return A.toString() + "n";
    if (typeof A === "string") return `"${A}"`;
    return `${A}`
}
var mBZ, dBZ, cBZ;
var SRA = L(() => {
    mBZ = Error.captureStackTrace ? Error.captureStackTrace : (...A) => {}, dBZ = Hh5(() => {
        if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
        try {
            return new Function(""), !0
        } catch (A) {
            return !1
        }
    });
    cBZ = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
    }
});

function V50(A, Q = (B) => B.message) {
    let B = {},
        G = [];
    for (let Z of A.issues)
        if (Z.path.length > 0) B[Z.path[0]] = B[Z.path[0]] || [], B[Z.path[0]].push(Q(Z));
        else G.push(Q(Z));
    return {
        formErrors: G,
        fieldErrors: B
    }
}

function K50(A, Q) {
    let B = Q || function(I) {
            return I.message
        },
        G = {
            _errors: []
        },
        Z = (I) => {
            for (let Y of I.issues)
                if (Y.code === "invalid_union" && Y.errors.length) Y.errors.map((J) => Z({
                    issues: J
                }));
                else if (Y.code === "invalid_key") Z({
                issues: Y.issues
            });
            else if (Y.code === "invalid_element") Z({
                issues: Y.issues
            });
            else if (Y.path.length === 0) G._errors.push(B(Y));
            else {
                let J = G,
                    W = 0;
                while (W < Y.path.length) {
                    let X = Y.path[W];
                    if (W !== Y.path.length - 1) J[X] = J[X] || {
                        _errors: []
                    };
                    else J[X] = J[X] || {
                        _errors: []
                    }, J[X]._errors.push(B(Y));
                    J = J[X], W++
                }
            }
        };
    return Z(A), G
}
var r_2 = (A, Q) => {
        A.name = "$ZodError", Object.defineProperty(A, "_zod", {
            value: A._zod,
            enumerable: !1
        }), Object.defineProperty(A, "issues", {
            value: Q,
            enumerable: !1
        }), Object.defineProperty(A, "message", {
            get() {
                return JSON.stringify(Q, s_2, 2)
            },
            enumerable: !0
        })
    },
    o_2, lBZ;
var t_2 = L(() => {
    J50();
    SRA();
    o_2 = AWA("$ZodError", r_2), lBZ = AWA("$ZodError", r_2, {
        Parent: Error
    })
});
var e_2 = () => {};
var Ch5 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
    aBZ;
var Qk2 = L(() => {
    aBZ = new RegExp(`^${Ch5}$`)
});
var Bk2 = () => {};
var Gk2 = () => {};
var Zk2 = () => {};

function D50() {
    return {
        localeError: zh5()
    }
}
var Eh5 = (A) => {
        let Q = typeof A;
        switch (Q) {
            case "number":
                return Number.isNaN(A) ? "NaN" : "number";
            case "object": {
                if (Array.isArray(A)) return "array";
                if (A === null) return "null";
                if (Object.getPrototypeOf(A) !== Object.prototype && A.constructor) return A.constructor.name
            }
        }
        return Q
    },
    zh5 = () => {
        let A = {
            string: {
                unit: "characters",
                verb: "to have"
            },
            file: {
                unit: "bytes",
                verb: "to have"
            },
            array: {
                unit: "items",
                verb: "to have"
            },
            set: {
                unit: "items",
                verb: "to have"
            }
        };

        function Q(G) {
            return A[G] ?? null
        }
        let B = {
            regex: "input",
            email: "email address",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datetime",
            date: "ISO date",
            time: "ISO time",
            duration: "ISO duration",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input"
        };
        return (G) => {
            switch (G.code) {
                case "invalid_type":
                    return `Invalid input: expected ${G.expected}, received ${Eh5(G.input)}`;
                case "invalid_value":
                    if (G.values.length === 1) return `Invalid input: expected ${X50(G.values[0])}`;
                    return `Invalid option: expected one of ${W50(G.values,"|")}`;
                case "too_big": {
                    let Z = G.inclusive ? "<=" : "<",
                        I = Q(G.origin);
                    if (I) return `Too big: expected ${G.origin??"value"} to have ${Z}${G.maximum.toString()} ${I.unit??"elements"}`;
                    return `Too big: expected ${G.origin??"value"} to be ${Z}${G.maximum.toString()}`
                }
                case "too_small": {
                    let Z = G.inclusive ? ">=" : ">",
                        I = Q(G.origin);
                    if (I) return `Too small: expected ${G.origin} to have ${Z}${G.minimum.toString()} ${I.unit}`;
                    return `Too small: expected ${G.origin} to be ${Z}${G.minimum.toString()}`
                }
                case "invalid_format": {
                    let Z = G;
                    if (Z.format === "starts_with") return `Invalid string: must start with "${Z.prefix}"`;
                    if (Z.format === "ends_with") return `Invalid string: must end with "${Z.suffix}"`;
                    if (Z.format === "includes") return `Invalid string: must include "${Z.includes}"`;
                    if (Z.format === "regex") return `Invalid string: must match pattern ${Z.pattern}`;
                    return `Invalid ${B[Z.format]??G.format}`
                }
                case "not_multiple_of":
                    return `Invalid number: must be a multiple of ${G.divisor}`;
                case "unrecognized_keys":
                    return `Unrecognized key${G.keys.length>1?"s":""}: ${W50(G.keys,", ")}`;
                case "invalid_key":
                    return `Invalid key in ${G.origin}`;
                case "invalid_union":
                    return "Invalid input";
                case "invalid_element":
                    return `Invalid value in ${G.origin}`;
                default:
                    return "Invalid input"
            }
        }
    };
var Ik2 = L(() => {
    SRA()
});
var H50 = () => {};
class n61 {
    constructor() {
        this._map = new WeakMap, this._idmap = new Map
    }
    add(A, ...Q) {
        let B = Q[0];
        if (this._map.set(A, B), B && typeof B === "object" && "id" in B) {
            if (this._idmap.has(B.id)) throw Error(`ID ${B.id} already exists in the registry`);
            this._idmap.set(B.id, A)
        }
        return this
    }
    remove(A) {
        return this._map.delete(A), this
    }
    get(A) {
        let Q = A._zod.parent;
        if (Q) {
            let B = {
                ...this.get(Q) ?? {}
            };
            return delete B.id, {
                ...B,
                ...this._map.get(A)
            }
        }
        return this._map.get(A)
    }
    has(A) {
        return this._map.has(A)
    }
}

function Jk2() {
    return new n61
}
var Uh5, $h5, C50;
var E50 = L(() => {
    Uh5 = Symbol("ZodOutput"), $h5 = Symbol("ZodInput");
    C50 = Jk2()
});
var Wk2 = () => {};
var Xk2 = () => {};
class z50 {
    constructor(A) {
        this.counter = 0, this.metadataRegistry = A?.metadata ?? C50, this.target = A?.target ?? "draft-2020-12", this.unrepresentable = A?.unrepresentable ?? "throw", this.override = A?.override ?? (() => {}), this.io = A?.io ?? "output", this.seen = new Map
    }
    process(A, Q = {
        path: [],
        schemaPath: []
    }) {
        var B;
        let G = A._zod.def,
            Z = {
                guid: "uuid",
                url: "uri",
                datetime: "date-time",
                json_string: "json-string",
                regex: ""
            },
            I = this.seen.get(A);
        if (I) {
            if (I.count++, Q.schemaPath.includes(A)) I.cycle = Q.path;
            return I.schema
        }
        let Y = {
            schema: {},
            count: 1,
            cycle: void 0,
            path: Q.path
        };
        this.seen.set(A, Y);
        let J = A._zod.toJSONSchema?.();
        if (J) Y.schema = J;
        else {
            let F = {
                    ...Q,
                    schemaPath: [...Q.schemaPath, A],
                    path: Q.path
                },
                V = A._zod.parent;
            if (V) Y.ref = V, this.process(V, F), this.seen.get(V).isParent = !0;
            else {
                let K = Y.schema;
                switch (G.type) {
                    case "string": {
                        let D = K;
                        D.type = "string";
                        let {
                            minimum: H,
                            maximum: C,
                            format: E,
                            patterns: z,
                            contentEncoding: w
                        } = A._zod.bag;
                        if (typeof H === "number") D.minLength = H;
                        if (typeof C === "number") D.maxLength = C;
                        if (E) {
                            if (D.format = Z[E] ?? E, D.format === "") delete D.format
                        }
                        if (w) D.contentEncoding = w;
                        if (z && z.size > 0) {
                            let N = [...z];
                            if (N.length === 1) D.pattern = N[0].source;
                            else if (N.length > 1) Y.schema.allOf = [...N.map((q) => ({
                                ...this.target === "draft-7" ? {
                                    type: "string"
                                } : {},
                                pattern: q.source
                            }))]
                        }
                        break
                    }
                    case "number": {
                        let D = K,
                            {
                                minimum: H,
                                maximum: C,
                                format: E,
                                multipleOf: z,
                                exclusiveMaximum: w,
                                exclusiveMinimum: N
                            } = A._zod.bag;
                        if (typeof E === "string" && E.includes("int")) D.type = "integer";
                        else D.type = "number";
                        if (typeof N === "number") D.exclusiveMinimum = N;
                        if (typeof H === "number") {
                            if (D.minimum = H, typeof N === "number")
                                if (N >= H) delete D.minimum;
                                else delete D.exclusiveMinimum
                        }
                        if (typeof w === "number") D.exclusiveMaximum = w;
                        if (typeof C === "number") {
                            if (D.maximum = C, typeof w === "number")
                                if (w <= C) delete D.maximum;
                                else delete D.exclusiveMaximum
                        }
                        if (typeof z === "number") D.multipleOf = z;
                        break
                    }
                    case "boolean": {
                        let D = K;
                        D.type = "boolean";
                        break
                    }
                    case "bigint": {
                        if (this.unrepresentable === "throw") throw Error("BigInt cannot be represented in JSON Schema");
                        break
                    }
                    case "symbol": {
                        if (this.unrepresentable === "throw") throw Error("Symbols cannot be represented in JSON Schema");
                        break
                    }
                    case "null": {
                        K.type = "null";
                        break
                    }
                    case "any":
                        break;
                    case "unknown":
                        break;
                    case "undefined":
                    case "never": {
                        K.not = {};
                        break
                    }
                    case "void": {
                        if (this.unrepresentable === "throw") throw Error("Void cannot be represented in JSON Schema");
                        break
                    }
                    case "date": {
                        if (this.unrepresentable === "throw") throw Error("Date cannot be represented in JSON Schema");
                        break
                    }
                    case "array": {
                        let D = K,
                            {
                                minimum: H,
                                maximum: C
                            } = A._zod.bag;
                        if (typeof H === "number") D.minItems = H;
                        if (typeof C === "number") D.maxItems = C;
                        D.type = "array", D.items = this.process(G.element, {
                            ...F,
                            path: [...F.path, "items"]
                        });
                        break
                    }
                    case "object": {
                        let D = K;
                        D.type = "object", D.properties = {};
                        let H = G.shape;
                        for (let z in H) D.properties[z] = this.process(H[z], {
                            ...F,
                            path: [...F.path, "properties", z]
                        });
                        let C = new Set(Object.keys(H)),
                            E = new Set([...C].filter((z) => {
                                let w = G.shape[z]._zod;
                                if (this.io === "input") return w.optin === void 0;
                                else return w.optout === void 0
                            }));
                        if (E.size > 0) D.required = Array.from(E);
                        if (G.catchall?._zod.def.type === "never") D.additionalProperties = !1;
                        else if (!G.catchall) {
                            if (this.io === "output") D.additionalProperties = !1
                        } else if (G.catchall) D.additionalProperties = this.process(G.catchall, {
                            ...F,
                            path: [...F.path, "additionalProperties"]
                        });
                        break
                    }
                    case "union": {
                        let D = K;
                        D.anyOf = G.options.map((H, C) => this.process(H, {
                            ...F,
                            path: [...F.path, "anyOf", C]
                        }));
                        break
                    }
                    case "intersection": {
                        let D = K,
                            H = this.process(G.left, {
                                ...F,
                                path: [...F.path, "allOf", 0]
                            }),
                            C = this.process(G.right, {
                                ...F,
                                path: [...F.path, "allOf", 1]
                            }),
                            E = (w) => ("allOf" in w) && Object.keys(w).length === 1,
                            z = [...E(H) ? H.allOf : [H], ...E(C) ? C.allOf : [C]];
                        D.allOf = z;
                        break
                    }
                    case "tuple": {
                        let D = K;
                        D.type = "array";
                        let H = G.items.map((z, w) => this.process(z, {
                            ...F,
                            path: [...F.path, "prefixItems", w]
                        }));
                        if (this.target === "draft-2020-12") D.prefixItems = H;
                        else D.items = H;
                        if (G.rest) {
                            let z = this.process(G.rest, {
                                ...F,
                                path: [...F.path, "items"]
                            });
                            if (this.target === "draft-2020-12") D.items = z;
                            else D.additionalItems = z
                        }
                        if (G.rest) D.items = this.process(G.rest, {
                            ...F,
                            path: [...F.path, "items"]
                        });