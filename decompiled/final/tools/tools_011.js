/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_011.js
 * 处理时间: 2025-12-09T03:41:38.675Z
 * 变量映射: 11 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       ( 10x) esmImport(module) - ESM import
 * s8       (  5x) TASK_TOOL = "Task"
 * Q5       (  5x) formatFilePath(path)
 * Kf1      (  2x) GLOB_TOOL_DESCRIPTION - Glob tool help text
 * Df1      (  2x) getGrepDescription() - Returns Grep tool description
 * CD       (  1x) GLOB_TOOL = "Glob"
 * uY       (  1x) GREP_TOOL = "Grep"
 * bX       (  1x) WRITE_TOOL = "Write"
 * CGB      (  1x) WRITE_TOOL_DESCRIPTION - Write tool help text
 * XT       (  1x) noOpFunction() - Empty function
 * pG       (  1x) esmExport(obj, key) - ESM export
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 11/25
 * Lines: 337921 - 339418 (1498 lines)
 * Original file: cli.js
 */

                Q.push(...Z.filter(Boolean)), Q.push(...Y.filter(Boolean)), B = I
            } else Q.push(G), B++
        } else Q.push(G), B++
    }
    return Q
}

function Vf5(A, Q) {
    return VZ2(A, Q, {
        ignoreCase: !1
    })
}

function Kf5(A, Q, B, G, Z) {
    let {
        type: I,
        i: Y,
        wordDiff: J,
        matchedLine: W,
        originalCode: X
    } = A;
    if (!J || !W) return null;
    let F = I === "remove" ? X : W.originalCode,
        V = I === "remove" ? W.originalCode : X,
        K = Vf5(F, V),
        D = F.length + V.length;
    if (K.filter((y) => y.added || y.removed).reduce((y, v) => y + v.value.length, 0) / D > Wf5 || G) return null;
    let E = I === "add" ? "+" : "-",
        z = "  ",
        w = E.length + z.length,
        N = Q - B - 1 - w,
        q = [],
        R = [],
        P = 0;
    if (K.forEach((y, v) => {
            let x = !1,
                p;
            if (I === "add") {
                if (y.added) x = !0, p = "diffAddedWord";
                else if (!y.removed) x = !0
            } else if (I === "remove") {
                if (y.removed) x = !0, p = "diffRemovedWord";
                else if (!y.added) x = !0
            }
            if (!x) return;
            cb(y.value, N, "wrap").split(`
`).forEach((l, k) => {
                if (!l) return;
                if (k > 0 || P + l.length > N) {
                    if (R.length > 0) q.push([...R]), R = [], P = 0
                }
                R.push(D6.createElement($, {
                    key: `part-${v}-${k}`,
                    backgroundColor: p,
                    color: Z ? "text" : void 0,
                    dimColor: G
                }, l)), P += l.length
            })
        }), R.length > 0) q.push(R);
    return q.map((y, v) => {
        let x = `${I}-${Y}-${v}`;
        return D6.createElement($, {
            key: x
        }, D6.createElement(_61, {
            i: v === 0 ? Y : void 0,
            width: B
        }), D6.createElement($, {
            backgroundColor: I === "add" ? G ? "diffAddedDimmed" : "diffAdded" : G ? "diffRemovedDimmed" : "diffRemoved"
        }, D6.createElement($, {
            dimColor: G
        }, E, z), y))
    })
}

function Df5(A, Q, B, G, Z) {
    let I = Xf5(A),
        Y = Ff5(I),
        J = Hf5(Y, Q),
        W = Math.max(...J.map(({
            i: F
        }) => F), 0),
        X = Math.max(W.toString().length + 2, 0);
    return J.flatMap((F) => {
        let {
            type: V,
            code: K,
            i: D,
            wordDiff: H,
            matchedLine: C
        } = F;
        if (H && C) {
            let q = Kf5(F, B, X, G, Z);
            if (q !== null) return q
        }
        let E = 2,
            z = B - X - 1 - E;
        return cb(K, z, "wrap").split(`
`).map((q, R) => {
            let P = `${V}-${D}-${R}`;
            switch (V) {
                case "add":
                    return D6.createElement($, {
                        key: P
                    }, D6.createElement(_61, {
                        i: R === 0 ? D : void 0,
                        width: X
                    }), D6.createElement($, {
                        color: Z ? "text" : void 0,
                        backgroundColor: G ? "diffAddedDimmed" : "diffAdded",
                        dimColor: G
                    }, D6.createElement($, {
                        dimColor: G
                    }, "+ "), q));
                case "remove":
                    return D6.createElement($, {
                        key: P
                    }, D6.createElement(_61, {
                        i: R === 0 ? D : void 0,
                        width: X
                    }), D6.createElement($, {
                        color: Z ? "text" : void 0,
                        backgroundColor: G ? "diffRemovedDimmed" : "diffRemoved",
                        dimColor: G
                    }, D6.createElement($, {
                        dimColor: G
                    }, "- "), q));
                case "nochange":
                    return D6.createElement($, {
                        key: P
                    }, D6.createElement(_61, {
                        i: R === 0 ? D : void 0,
                        width: X
                    }), D6.createElement($, {
                        color: Z ? "text" : void 0,
                        dimColor: G
                    }, "  ", q))
            }
        })
    })
}

function _61({
    i: A,
    width: Q,
    hidden: B
}) {
    if (B) return null;
    return D6.createElement($, {
        dimColor: !0
    }, A !== void 0 ? A.toString().padStart(Q) : " ".repeat(Q), " ")
}

function Hf5(A, Q) {
    let B = Q,
        G = [],
        Z = [...A];
    while (Z.length > 0) {
        let I = Z.shift(),
            {
                code: Y,
                type: J,
                originalCode: W,
                wordDiff: X,
                matchedLine: F
            } = I,
            V = {
                code: Y,
                type: J,
                i: B,
                originalCode: W,
                wordDiff: X,
                matchedLine: F
            };
        switch (J) {
            case "nochange":
                B++, G.push(V);
                break;
            case "add":
                B++, G.push(V);
                break;
            case "remove": {
                G.push(V);
                let K = 0;
                while (Z[0]?.type === "remove") {
                    B++;
                    let D = Z.shift(),
                        {
                            code: H,
                            type: C,
                            originalCode: E,
                            wordDiff: z,
                            matchedLine: w
                        } = D,
                        N = {
                            code: H,
                            type: C,
                            i: B,
                            originalCode: E,
                            wordDiff: z,
                            matchedLine: w
                        };
                    G.push(N), K++
                }
                B -= K;
                break
            }
        }
    }
    return G
}
var D6, dj2, Wf5 = 0.4;
var pj2 = L(() => {
    hA();
    zMA();
    D6 = GA(VA(), 1), dj2 = GA(VA(), 1)
});
var V60 = {};
pG(V60, {
    default: () => Ef5,
    ColorDiff: () => Cf5
});
var k61, Cf5, Ef5;
var K60 = L(() => {
    try {
        k61 = (() => {
            throw new Error("Cannot require module " + "../../color-diff.node");
        })()
    } catch (A) {
        k61 = null
    }
    Cf5 = k61?.ColorDiff, Ef5 = k61?.ColorDiff
});
async function ij2() {
    if (!lj2) {
        return lj2 = !0, null;
        if (Nj(process.env.CLAUDE_CODE_SYNTAX_HIGHLIGHT)) return null;
        if (m0.terminal === "Apple_Terminal") return null;
        if (HJ()) try {
            D60 = (await Promise.resolve().then(() => (K60(), V60))).ColorDiff
        } catch (A) {
            g(`[ColorDiff] Rust module unavailable, falling back to JS: ${A instanceof Error?A.message:String(A)}`)
        } else g("[ColorDiff] Not in bundled mode, using JS fallback")
    }
    return D60
}

function nj2() {
    return D60
}
var D60 = null,
    lj2 = !1;
var H60 = L(() => {
    D0();
    hQ();
    f5()
});

function Z$({
    patch: A,
    dim: Q,
    filePath: B,
    width: G,
    skipHighlighting: Z = !1
}) {
    let I = hh.useRef(null),
        [Y, J] = hh.useState(G || zf5),
        [W] = $B(),
        X = hh.useMemo(() => {
            if (Z) return null;
            let V = nj2();
            if (V === null) return null;
            return new V(A, B)
        }, [Z, A, B]);
    hh.useEffect(() => {
        if (!G && I.current) {
            let {
                width: V
            } = kg1(I.current);
            if (V > 0) J(V - 2)
        }
    }, [G]);
    let F = hh.useMemo(() => {
        if (X === null) return null;
        return X.render(W, Y, Q)
    }, [W, Y, Q]);
    return fh.createElement(j, {
        ref: I
    }, F ? fh.createElement(j, {
        flexDirection: "column"
    }, F.map((V, K) => fh.createElement($, {
        key: K
    }, V))) : fh.createElement(cj2, {
        patch: A,
        dim: Q,
        width: Y
    }))
}
var fh, hh, zf5 = 80;
var Zn = L(() => {
    hA();
    pj2();
    H60();
    fh = GA(VA(), 1), hh = GA(VA(), 1)
});
import {
    relative as Uf5,
    resolve as $f5
} from "path";

function y61({
    filePath: A,
    structuredPatch: Q,
    style: B,
    verbose: G
}) {
    let {
        columns: Z
    } = YB(), I = Q.reduce((V, K) => V + K.lines.filter((D) => D.startsWith("+")).length, 0), Y = Q.reduce((V, K) => V + K.lines.filter((D) => D.startsWith("-")).length, 0), J = b9(A), W = $f5(pQ(), "CLAUDE.md"), X = J === W, F = o8.createElement($, null, "Updated", " ", o8.createElement($, {
        bold: !0
    }, G ? A : Uf5(H0(), A)), I > 0 || Y > 0 ? " with " : "", I > 0 ? o8.createElement(o8.Fragment, null, o8.createElement($, {
        bold: !0
    }, I), " ", I > 1 ? "additions" : "addition") : null, I > 0 && Y > 0 ? " and " : null, Y > 0 ? o8.createElement(o8.Fragment, null, o8.createElement($, {
        bold: !0
    }, Y), " ", Y > 1 ? "removals" : "removal") : null);
    if (B === "condensed" && !G) return F;
    return o8.createElement(y0, null, o8.createElement(j, {
        flexDirection: "column"
    }, o8.createElement($, null, F), fF(Q.map((V) => o8.createElement(j, {
        flexDirection: "column",
        key: V.newStart
    }, o8.createElement(Z$, {
        patch: V,
        dim: !1,
        width: Z - 12,
        filePath: A
    }))), (V) => o8.createElement(j, {
        key: `ellipsis-${V}`
    }, o8.createElement($, {
        dimColor: !0
    }, "..."))), X && o8.createElement(j, {
        marginTop: 1
    }, o8.createElement($, null, o8.createElement($, {
        bold: !0
    }, "Tip:"), " Use", " ", o8.createElement($, {
        color: "remember"
    }, "# to memorize"), " shortcut to quickly add to CLAUDE.md"))))
}
var o8;
var C60 = L(() => {
    hA();
    Zn();
    R2();
    m8();
    S0();
    jI();
    u8();
    o8 = GA(VA(), 1)
});

function XO({
    code: A,
    language: Q
}) {
    let B = x61.useMemo(() => {
        let G = YYA(A);
        try {
            if (lJA.supportsLanguage(Q)) return lJA.highlight(G, {
                language: Q
            });
            else return g(`Language not supported while highlighting code, falling back to markdown: ${Q}`), lJA.highlight(G, {
                language: "markdown"
            })
        } catch (Z) {
            if (Z instanceof Error && Z.message.includes("Unknown language")) return g(`Language not supported while highlighting code, falling back to markdown: ${Z}`), lJA.highlight(G, {
                language: "markdown"
            })
        }
    }, [A, Q]);
    return x61.default.createElement($, null, B)
}
var lJA, x61;
var iJA = L(() => {
    hA();
    D0();
    M9();
    lJA = GA(z21(), 1), x61 = GA(VA(), 1)
});
import {
    EOL as wf5
} from "os";
import {
    extname as qf5,
    isAbsolute as Nf5,
    relative as sj2,
    resolve as Lf5
} from "path";

function rj2(A) {
    if (A?.file_path?.startsWith(vU())) return "Updated plan";
    return "Write"
}

function oj2(A) {
    if (!A?.file_path) return null;
    return Q5(A.file_path)
}

function tj2(A, {
    verbose: Q
}) {
    if (!A.file_path) return null;
    if (A.file_path.startsWith(vU())) return "";
    return Q ? A.file_path : Q5(A.file_path)
}

function ej2({
    file_path: A,
    content: Q
}, {
    columns: B,
    style: G,
    verbose: Z
}) {
    try {
        let I = OA(),
            Y = Nf5(A) ? A : Lf5(H0(), A),
            J = I.existsSync(Y),
            W = J ? VH(Y) : "utf-8",
            X = J ? I.readFileSync(Y, {
                encoding: W
            }) : null,
            F = X ? "update" : "create",
            V = Cq({
                filePath: A,
                fileContents: X ?? "",
                edits: [{
                    old_string: X ?? "",
                    new_string: Q,
                    replace_all: !1
                }]
            }),
            K = f9.createElement(j, {
                flexDirection: "row"
            }, f9.createElement($, {
                color: "error"
            }, "User rejected ", F === "update" ? "update" : "write", " to", " "), f9.createElement($, {
                bold: !0,
                color: "error"
            }, Z ? A : sj2(H0(), A)));
        if (G === "condensed" && !Z) return K;
        return f9.createElement(y0, null, f9.createElement(j, {
            flexDirection: "column"
        }, K, fF(V.map((D) => f9.createElement(j, {
            flexDirection: "column",
            key: D.newStart
        }, f9.createElement(Z$, {
            patch: D,
            dim: !0,
            width: B - 12,
            filePath: A
        }))), (D) => f9.createElement(j, {
            key: `ellipsis-${D}`
        }, f9.createElement($, {
            dimColor: !0
        }, "...")))))
    } catch (I) {
        return e(I), f9.createElement(j, {
            flexDirection: "column"
        }, f9.createElement($, null, "  ", "⎿ (No changes)"))
    }
}

function AS2(A, {
    verbose: Q
}) {
    if (!Q && typeof A === "string" && e2(A, "tool_use_error")) return f9.createElement(y0, null, f9.createElement($, {
        color: "error"
    }, "Error writing file"));
    return f9.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function QS2() {
    return null
}

function BS2({
    filePath: A,
    content: Q,
    structuredPatch: B,
    type: G
}, Z, {
    style: I,
    verbose: Y
}) {
    if (!Y && A.startsWith(vU())) {
        let J = Q5(A);
        return f9.createElement(y0, null, f9.createElement($, {
            dimColor: !0
        }, "/plan to preview · ", J))
    }
    switch (G) {
        case "create": {
            let J = Q || "(No content)",
                W = Q.split(wf5).length,
                X = W - aj2,
                F = f9.createElement($, null, "Wrote ", f9.createElement($, {
                    bold: !0
                }, W), " lines to", " ", f9.createElement($, {
                    bold: !0
                }, Y ? A : sj2(H0(), A)));
            if (I === "condensed" && !Y) return F;
            return f9.createElement(y0, null, f9.createElement(j, {
                flexDirection: "column"
            }, F, f9.createElement(j, {
                flexDirection: "column"
            }, f9.createElement(XO, {
                code: Y ? J : J.split(`
`).slice(0, aj2).filter((V) => V.trim() !== "").join(`
`),
                language: qf5(A).slice(1)
            }), !Y && X > 0 && f9.createElement($, {
                dimColor: !0
            }, "… +", X, " ", X === 1 ? "line" : "lines", " ", W > 0 && f9.createElement(hl, null)))))
        }
        case "update":
            return f9.createElement(y61, {
                filePath: A,
                structuredPatch: B,
                verbose: Y
            })
    }
}
var f9, aj2 = 10;
var GS2 = L(() => {
    hA();
    C60();
    iJA();
    Zn();
    u8();
    lX();
    $IA();
    M9();
    M9();
    R2();
    fk();
    o0();
    u1();
    nQ();
    _E();
    f9 = GA(VA(), 1)
});
import {
    dirname as Mf5,
    sep as Of5
} from "path";
var ZS2 = 16000,
    Rf5 = "<response clipped><NOTE>To save on context only part of this file has been shown to you. You should retry this tool after you have searched inside the file with Grep in order to find the line numbers of what you are looking for.</NOTE>",
    Tf5, Pf5, oX;
var gh = L(() => {
    h2();
    w0();
    r01();
    M9();
    L_();
    fk();
    _Y();
    jI();
    o0();
    C1A();
    LRA();
    NMA();
    u1();
    D0();
    F60();
    iU();
    GS2();
    Tf5 = _.strictObject({
        file_path: _.string().describe("The absolute path to the file to write (must be absolute, not relative)"),
        content: _.string().describe("The content to write to the file")
    }), Pf5 = _.object({
        type: _.enum(["create", "update"]).describe("Whether a new file was created or an existing file was updated"),
        filePath: _.string().describe("The path to the file that was written"),
        content: _.string().describe("The content that was written to the file"),
        structuredPatch: _.array(X60).describe("Diff patch showing the changes"),
        originalFile: _.string().nullable().describe("The original file content before the write (null for new files)")
    }), oX = {
        name: bX,
        strict: !0,
        input_examples: [{
            file_path: "/Users/username/project/src/newFile.ts",
            content: `export function hello() {
  console.log("Hello, World!");
}`
        }],
        async description() {
            return "Write a file to the local filesystem."
        },
        userFacingName: rj2,
        getToolUseSummary: oj2,
        async prompt() {
            return CGB
        },
        isEnabled() {
            return !0
        },
        renderToolUseMessage: tj2,
        inputSchema: Tf5,
        outputSchema: Pf5,
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
            return V0A(oX, A, B.toolPermissionContext)
        },
        renderToolUseRejectedMessage: ej2,
        renderToolUseErrorMessage: AS2,
        renderToolUseProgressMessage: QS2,
        renderToolResultMessage: BS2,
        async validateInput({
            file_path: A
        }, Q) {
            let B = b9(A),
                G = await Q.getAppState();
            if (TD(B, G.toolPermissionContext, "edit", "deny") !== null) return {
                result: !1,
                message: "File is in a directory that is denied by your permission settings.",
                errorCode: 1
            };
            if (!OA().existsSync(B)) return {
                result: !0
            };
            let Y = Q.readFileState.get(B);
            if (!Y) return {
                result: !1,
                message: "File has not been read yet. Read it first before writing to it.",
                errorCode: 2
            };
            if (Y) {
                if (RD(B) > Y.timestamp) return {
                    result: !1,
                    message: "File has been modified since read, either by the user or by a linter. Read it again before attempting to write it.",
                    errorCode: 3
                }
            }
            return {
                result: !0
            }
        },
        async call({
            file_path: A,
            content: Q
        }, {
            readFileState: B,
            updateFileHistoryState: G
        }, Z, I) {
            let Y = b9(A),
                J = Mf5(Y),
                W = OA();
            await Uh.beforeFileEdited(Y);
            let X = W.existsSync(Y);
            if (X) {
                let C = RD(Y),
                    E = B.get(Y);
                if (!E || C > E.timestamp) throw Error("File has been unexpectedly modified. Read it again before attempting to write it.")
            }
            let F = X ? VH(Y) : "utf-8",
                V = X ? W.readFileSync(Y, {
                    encoding: F
                }) : null;
            if (JG()) await zYA(G, Y, I.uuid);
            let K = X ? K0A(Y) : await IS2();
            W.mkdirSync(J), nJA(Y, Q, F, K);
            let D = pJA();
            if (D) u21(`file://${Y}`), D.changeFile(Y, Q).catch((C) => {
                g(`LSP: Failed to notify server of file change for ${Y}: ${C.message}`), e(C)
            }), D.saveFile(Y).catch((C) => {
                g(`LSP: Failed to notify server of file save for ${Y}: ${C.message}`), e(C)
            });
            if (B.set(Y, {
                    content: Q,
                    timestamp: RD(Y),
                    offset: void 0,
                    limit: void 0
                }), Y.endsWith(`${Of5}CLAUDE.md`)) BA("tengu_write_claudemd", {});
            if (V) {
                let C = Cq({
                        filePath: A,
                        fileContents: V,
                        edits: [{
                            old_string: V,
                            new_string: Q,
                            replace_all: !1
                        }]
                    }),
                    E = {
                        type: "update",
                        filePath: A,
                        content: Q,
                        structuredPatch: C,
                        originalFile: V
                    };
                return $MA(C), $k({
                    operation: "write",
                    tool: "FileWriteTool",
                    filePath: Y,
                    type: "update"
                }), {
                    data: E
                }
            }
            let H = {
                type: "create",
                filePath: A,
                content: Q,
                structuredPatch: [],
                originalFile: null
            };
            return $MA([], Q), $k({
                operation: "write",
                tool: "FileWriteTool",
                filePath: Y,
                type: "create"
            }), {
                data: H
            }
        },
        mapToolResultToToolResultBlockParam({
            filePath: A,
            content: Q,
            type: B
        }, G) {
            switch (B) {
                case "create":
                    return {
                        tool_use_id: G, type: "tool_result", content: `File created successfully at: ${A}`
                    };
                case "update":
                    return {
                        tool_use_id: G, type: "tool_result", content: `The file ${A} has been updated. Here's the result of running \`cat -n\` on a snippet of the edited file:
${ml({content:Q.split(/\r?\n/).length>ZS2?Q.split(/\r?\n/).slice(0,ZS2).join(`
`)+Rf5:Q,startLine:1})}`
                    }
            }
        }
    }
});

function E60({
    count: A,
    countLabel: Q,
    secondaryCount: B,
    secondaryLabel: G,
    content: Z,
    verbose: I
}) {
    let Y = fJ.default.createElement(fJ.default.Fragment, null, "Found ", fJ.default.createElement($, {
            bold: !0
        }, A, " "), A === 0 || A > 1 ? Q : Q.slice(0, -1)),
        J = B !== void 0 && G ? fJ.default.createElement(fJ.default.Fragment, null, " ", "across ", fJ.default.createElement($, {
            bold: !0
        }, B, " "), B === 0 || B > 1 ? G : G.slice(0, -1)) : null;
    if (I) return fJ.default.createElement(j, {
        flexDirection: "column"
    }, fJ.default.createElement(j, {
        flexDirection: "row"
    }, fJ.default.createElement($, null, "  ⎿  ", Y, J)), fJ.default.createElement(j, {
        marginLeft: 5
    }, fJ.default.createElement($, null, Z)));
    return fJ.default.createElement(y0, {
        height: 1
    }, fJ.default.createElement($, null, Y, J, " ", A > 0 && fJ.default.createElement(hl, null)))
}

function YS2({
    pattern: A,
    path: Q,
    glob: B,
    type: G,
    output_mode: Z = "files_with_matches",
    head_limit: I
}, {
    verbose: Y
}) {
    if (!A) return null;
    let J = [`pattern: "${A}"`];
    if (Q) J.push(`path: "${Y?Q:Q5(Q)}"`);
    if (B) J.push(`glob: "${B}"`);
    if (G) J.push(`type: "${G}"`);
    if (Z !== "files_with_matches") J.push(`output_mode: "${Z}"`);
    if (I !== void 0) J.push(`head_limit: ${I}`);
    return J.join(", ")
}

function JS2() {
    return fJ.default.createElement(k3, null)
}

function WS2(A, {
    verbose: Q
}) {
    if (!Q && typeof A === "string" && e2(A, "tool_use_error")) return fJ.default.createElement(y0, null, fJ.default.createElement($, {
        color: "error"
    }, "Error searching files"));
    return fJ.default.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function XS2() {
    return null
}

function FS2({
    mode: A = "files_with_matches",
    filenames: Q,
    numFiles: B,
    content: G,
    numLines: Z,
    numMatches: I
}, Y, {
    verbose: J
}) {
    if (A === "content") return fJ.default.createElement(E60, {
        count: Z ?? 0,
        countLabel: "lines",
        content: G,
        verbose: J
    });
    if (A === "count") return fJ.default.createElement(E60, {
        count: I ?? 0,
        countLabel: "matches",
        secondaryCount: B,
        secondaryLabel: "files",
        content: G,
        verbose: J
    });
    let W = Q.map((X) => X).join(`
`);
    return fJ.default.createElement(E60, {
        count: B,
        countLabel: "files",
        content: W,
        verbose: J
    })
}

function VS2(A) {
    if (!A?.pattern) return null;
    return B7(A.pattern, wk)
}
var fJ;
var KS2 = L(() => {
    hA();
    lV();
    lX();
    u8();
    $IA();
    M9();
    nQ();
    fJ = GA(VA(), 1)
});
import {
    relative as jf5
} from "path";

function U60(A) {
    if (A.length <= z60) return A;
    let Q = A.slice(0, z60),
        G = A.slice(z60).split(`
`).length;
    return `${Q}

... [${G} lines truncated] ...`
}

function $60(A, Q, B = 0) {
    if (Q === void 0) return A.slice(B);
    return A.slice(B, B + Q)
}

function w60(A) {
    let Q = H0(),
        B = jf5(Q, A);
    return B.startsWith("..") ? A : B
}

function q60(A, Q) {
    if (!A && !Q) return "";
    return `limit: ${A}, offset: ${Q??0}`
}
var Sf5, z60 = 20000,
    _f5, kf5, Hy;
var MRA = L(() => {
    h2();
    R2();
    jI();
    cj();
    XT();
    O9();
    _Y();
    o0();
    KS2();
    Sf5 = _.strictObject({
        pattern: _.string().describe("The regular expression pattern to search for in file contents"),
        path: _.string().optional().describe("File or directory to search in (rg PATH). Defaults to current working directory."),
        glob: _.string().optional().describe('Glob pattern to filter files (e.g. "*.js", "*.{ts,tsx}") - maps to rg --glob'),
        output_mode: _.enum(["content", "files_with_matches", "count"]).optional().describe('Output mode: "content" shows matching lines (supports -A/-B/-C context, -n line numbers, head_limit), "files_with_matches" shows file paths (supports head_limit), "count" shows match counts (supports head_limit). Defaults to "files_with_matches".'),
        "-B": _.number().optional().describe('Number of lines to show before each match (rg -B). Requires output_mode: "content", ignored otherwise.'),
        "-A": _.number().optional().describe('Number of lines to show after each match (rg -A). Requires output_mode: "content", ignored otherwise.'),
        "-C": _.number().optional().describe('Number of lines to show before and after each match (rg -C). Requires output_mode: "content", ignored otherwise.'),
        "-n": _.boolean().optional().describe('Show line numbers in output (rg -n). Requires output_mode: "content", ignored otherwise. Defaults to true.'),
        "-i": _.boolean().optional().describe("Case insensitive search (rg -i)"),
        type: _.string().optional().describe("File type to search (rg --type). Common types: js, py, rust, go, java, etc. More efficient than include for standard file types."),
        head_limit: _.number().optional().describe('Limit output to first N lines/entries, equivalent to "| head -N". Works across all output modes: content (limits output lines), files_with_matches (limits file paths), count (limits count entries). Defaults based on "cap" experiment value: 0 (unlimited), 20, or 100.'),
        offset: _.number().optional().describe('Skip first N lines/entries before applying head_limit, equivalent to "| tail -n +N | head -N". Works across all output modes. Defaults to 0.'),
        multiline: _.boolean().optional().describe("Enable multiline mode where . matches newlines and patterns can span lines (rg -U --multiline-dotall). Default: false.")
    }), _f5 = [".git", ".svn", ".hg", ".bzr"];
    kf5 = _.object({
        mode: _.enum(["content", "files_with_matches", "count"]).optional(),
        numFiles: _.number(),
        filenames: _.array(_.string()),
        content: _.string().optional(),
        numLines: _.number().optional(),
        numMatches: _.number().optional(),
        appliedLimit: _.number().optional(),
        appliedOffset: _.number().optional()
    }), Hy = {
        name: uY,
        strict: !0,
        input_examples: [{
            pattern: "TODO",
            output_mode: "files_with_matches"
        }, {
            pattern: "function.*export",
            glob: "*.ts",
            output_mode: "content",
            "-n": !0
        }, {
            pattern: "error",
            "-i": !0,
            type: "js"
        }],
        async description() {
            return Df1()
        },
        userFacingName() {
            return "Search"
        },
        getToolUseSummary: VS2,
        isEnabled() {
            return !0
        },
        inputSchema: Sf5,
        outputSchema: kf5,
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        getPath({
            path: A
        }) {
            return A || H0()
        },
        async validateInput({
            path: A
        }) {
            if (A) {
                let Q = OA(),
                    B = b9(A);
                if (!Q.existsSync(B)) return {
                    result: !1,
                    message: `Path does not exist: ${A}`,
                    errorCode: 1
                }
            }
            return {
                result: !0
            }
        },
        async checkPermissions(A, Q) {
            let B = await Q.getAppState();
            return ul(Hy, A, B.toolPermissionContext)
        },
        async prompt() {
            return Df1()
        },
        renderToolUseMessage: YS2,
        renderToolUseRejectedMessage: JS2,
        renderToolUseErrorMessage: WS2,
        renderToolUseProgressMessage: XS2,
        renderToolResultMessage: FS2,
        mapToolResultToToolResultBlockParam({
            mode: A = "files_with_matches",
            numFiles: Q,
            filenames: B,
            content: G,
            numLines: Z,
            numMatches: I,
            appliedLimit: Y,
            appliedOffset: J
        }, W) {
            if (A === "content") {
                let K = q60(Y, J),
                    D = U60(G || "No matches found"),
                    H = K ? `${D}

[Showing results with pagination = ${K}]` : D;
                return {
                    tool_use_id: W,
                    type: "tool_result",
                    content: H
                }
            }
            if (A === "count") {
                let K = q60(Y, J),
                    H = U60(G || "No matches found"),
                    C = I ?? 0,
                    E = Q ?? 0,
                    z = `

Found ${C} total ${C===1?"occurrence":"occurrences"} across ${E} ${E===1?"file":"files"}.${K?` with pagination = ${K}`:""}`;
                return {
                    tool_use_id: W,
                    type: "tool_result",
                    content: H + z
                }
            }
            let X = q60(Y, J);
            if (Q === 0) return {
                tool_use_id: W,
                type: "tool_result",
                content: "No files found"
            };
            let F = `Found ${Q} file${Q===1?"":"s"}${X?` ${X}`:""}
${B.join(`
`)}`,
                V = U60(F);
            return {
                tool_use_id: W,
                type: "tool_result",
                content: V
            }
        },
        async call({
            pattern: A,
            path: Q,
            glob: B,
            type: G,
            output_mode: Z = "files_with_matches",
            "-B": I,
            "-A": Y,
            "-C": J,
            "-n": W = !0,
            "-i": X = !1,
            head_limit: F,
            offset: V = 0,
            multiline: K = !1
        }, {
            abortController: D,
            getAppState: H
        }) {
            let {
                cap: C
            } = await N60("tengu_cap_grep_results", {
                cap: 0
            }), E = F !== void 0 ? F : C > 0 ? C : void 0, z = Q ? b9(Q) : H0(), w = ["--hidden"];
            for (let u of _f5) w.push("--glob", `!${u}`);
            if (w.push("--max-columns", "500"), K) w.push("-U", "--multiline-dotall");
            if (X) w.push("-i");
            if (Z === "files_with_matches") w.push("-l");
            else if (Z === "count") w.push("-c");
            if (W && Z === "content") w.push("-n");
            if (J !== void 0 && Z === "content") w.push("-C", J.toString());
            else if (Z === "content") {
                if (I !== void 0) w.push("-B", I.toString());
                if (Y !== void 0) w.push("-A", Y.toString())
            }
            if (A.startsWith("-")) w.push("-e", A);
            else w.push(A);
            if (G) w.push("--type", G);
            if (B) {
                let u = [],
                    o = B.split(/\s+/);
                for (let l of o)
                    if (l.includes("{") && l.includes("}")) u.push(l);
                    else u.push(...l.split(",").filter(Boolean));
                for (let l of u.filter(Boolean)) w.push("--glob", l)
            }
            let N = await H(),
                q = aJA(sJA(N.toolPermissionContext), H0());
            for (let u of q) {
                let o = u.startsWith("/") ? `!${u}` : `!**/${u}`;
                w.push("--glob", o)
            }
            let R = await dj(w, z, D.signal);
            if (Z === "content") {
                let u = R.map((k) => {
                        let d = k.indexOf(":");
                        if (d > 0) {
                            let QA = k.substring(0, d),
                                IA = k.substring(d);
                            return w60(QA) + IA
                        }
                        return k
                    }),
                    o = $60(u, E, V);
                return {
                    data: {
                        mode: "content",
                        numFiles: 0,
                        filenames: [],
                        content: o.join(`
`),
                        numLines: o.length,
                        ...E !== void 0 && {
                            appliedLimit: E
                        },
                        ...V > 0 && {
                            appliedOffset: V
                        }
                    }
                }
            }
            if (Z === "count") {
                let u = R.map((QA) => {
                        let IA = QA.lastIndexOf(":");
                        if (IA > 0) {
                            let HA = QA.substring(0, IA),
                                wA = QA.substring(IA);
                            return w60(HA) + wA
                        }
                        return QA
                    }),
                    o = $60(u, E, V),
                    l = 0,
                    k = 0;
                for (let QA of o) {
                    let IA = QA.lastIndexOf(":");
                    if (IA > 0) {
                        let HA = QA.substring(IA + 1),
                            wA = parseInt(HA, 10);
                        if (!isNaN(wA)) l += wA, k += 1
                    }
                }
                return {
                    data: {
                        mode: "count",
                        numFiles: k,
                        filenames: [],
                        content: o.join(`
`),
                        numMatches: l,
                        ...E !== void 0 && {
                            appliedLimit: E
                        },
                        ...V > 0 && {
                            appliedOffset: V
                        }
                    }
                }
            }
            let P = await Promise.all(R.map((u) => OA().stat(u))),
                y = R.map((u, o) => [u, P[o]]).sort((u, o) => {
                    let l = (o[1].mtimeMs ?? 0) - (u[1].mtimeMs ?? 0);
                    if (l === 0) return u[0].localeCompare(o[0]);
                    return l
                }).map((u) => u[0]),
                x = $60(y, E, V).map(w60);
            return {
                data: {
                    mode: "files_with_matches",
                    filenames: x,
                    numFiles: x.length,
                    ...E !== void 0 && {
                        appliedLimit: E
                    },
                    ...V > 0 && {
                        appliedOffset: V
                    }
                }
            }
        }
    }
});

function DS2() {
    return "Search"
}

function HS2({
    pattern: A,
    path: Q
}, {
    verbose: B
}) {
    if (!A) return null;
    if (!Q) return `pattern: "${A}"`;
    return `pattern: "${A}", path: "${B?Q:Q5(Q)}"`
}

function CS2() {
    return ORA.default.createElement(k3, null)
}

function ES2(A, {
    verbose: Q
}) {
    if (!Q && typeof A === "string" && e2(A, "tool_use_error")) return ORA.default.createElement(y0, null, ORA.default.createElement($, {
        color: "error"
    }, "Error searching files"));
    return ORA.default.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function zS2() {
    return null
}

function $S2(A) {
    if (!A?.pattern) return null;
    return B7(A.pattern, wk)
}
var ORA, US2;
var wS2 = L(() => {
    hA();
    lV();
    lX();
    u8();
    nQ();
    M9();
    MRA();
    ORA = GA(VA(), 1);
    US2 = Hy.renderToolResultMessage
});
var yf5, xf5, FO;
var RRA = L(() => {
    h2();
    R2();
    M9();
    _Y();
    jI();
    o0();
    wS2();
    yf5 = _.strictObject({
        pattern: _.string().describe("The glob pattern to match files against"),
        path: _.string().optional().describe('The directory to search in. If not specified, the current working directory will be used. IMPORTANT: Omit this field to use the default directory. DO NOT enter "undefined" or "null" - simply omit it for the default behavior. Must be a valid directory path if provided.')
    }), xf5 = _.object({
        durationMs: _.number().describe("Time taken to execute the search in milliseconds"),
        numFiles: _.number().describe("Total number of files found"),
        filenames: _.array(_.string()).describe("Array of file paths that match the pattern"),
        truncated: _.boolean().describe("Whether results were truncated (limited to 100 files)")
    }), FO = {
        name: CD,
        async description() {
            return Kf1
        },
        userFacingName: DS2,
        getToolUseSummary: $S2,
        isEnabled() {
            return !0
        },
        inputSchema: yf5,
        outputSchema: xf5,
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        getPath({
            path: A
        }) {
            return A ? b9(A) : H0()
        },
        async validateInput({
            path: A
        }) {
            if (A) {
                let Q = OA(),
                    B = b9(A);
                if (!Q.existsSync(B)) return {
                    result: !1,
                    message: `Directory does not exist: ${A}`,
                    errorCode: 1
                };
                if (!Q.statSync(B).isDirectory()) return {
                    result: !1,
                    message: `Path is not a directory: ${A}`,
                    errorCode: 2
                }
            }
            return {
                result: !0
            }
        },
        async checkPermissions(A, Q) {
            let B = await Q.getAppState();
            return ul(FO, A, B.toolPermissionContext)
        },
        async prompt() {
            return Kf1
        },
        renderToolUseMessage: HS2,
        renderToolUseRejectedMessage: CS2,
        renderToolUseErrorMessage: ES2,
        renderToolUseProgressMessage: zS2,
        renderToolResultMessage: US2,
        async call(A, {
            abortController: Q,
            getAppState: B
        }) {
            let G = Date.now(),
                Z = await B(),
                {
                    files: I,
                    truncated: Y
                } = await qS2(A.pattern, FO.getPath(A), {
                    limit: 100,
                    offset: 0
                }, Q.signal, Z.toolPermissionContext);
            return {
                data: {
                    filenames: I,
                    durationMs: Date.now() - G,
                    numFiles: I.length,
                    truncated: Y
                }
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            if (A.filenames.length === 0) return {
                tool_use_id: Q,
                type: "tool_result",
                content: "No files found"
            };
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: [...A.filenames, ...A.truncated ? ["(Results are truncated. Consider using a more specific path or pattern.)"] : []].join(`
`)
            }
        }
    }
});
async function NS2(A) {
    let Q = A.map((B) => {
        let G = "";
        if (B?.forkContext) G = "Properties: " + (B?.forkContext ? "access to current context; " : "");
        let Z = B.tools ? B.tools.join(", ") : "All tools";
        return `- ${B.agentType}: ${B.whenToUse} (${G}Tools: ${Z})`
    }).join(`
`);
    return `Launch a new agent to handle complex, multi-step tasks autonomously. 

The ${s8} tool launches specialized agents (subprocesses) that autonomously handle complex tasks. Each agent type has specific capabilities and tools available to it.

Available agent types and the tools they have access to:
${Q}

When using the ${s8} tool, you must specify a subagent_type parameter to select which agent type to use.

When NOT to use the ${s8} tool:
- If you want to read a specific file path, use the ${d8.name} or ${FO.name} tool instead of the ${s8} tool, to find the match more quickly
- If you are searching for a specific class definition like "class Foo", use the ${FO.name} tool instead, to find the match more quickly
- If you are searching for code within a specific file or set of 2-3 files, use the ${d8.name} tool instead of the ${s8} tool, to find the match more quickly
- Other tasks that are not related to the agent descriptions above


Usage notes:
- Launch multiple agents concurrently whenever possible, to maximize performance; to do that, use a single message with multiple tool uses
- When the agent is done, it will return a single message back to you. The result returned by the agent is not visible to the user. To show the user the result, you should send a text message back to the user with a concise summary of the result.
- Each agent invocation is stateless. You will not be able to send additional messages to the agent, nor will the agent be able to communicate with you outside of its final report. Therefore, your prompt should contain a highly detailed task description for the agent to perform autonomously and you should specify exactly what information the agent should return back to you in its final and only message to you.
- Agents with "access to current context" can see the full conversation history before the tool call. When using these agents, you can write concise prompts that reference earlier context (e.g., "investigate the error discussed above") instead of repeating information. The agent will receive all prior messages and understand the context.
- The agent's outputs should generally be trusted
- Clearly tell the agent whether you expect it to write code or just to do research (search, file reads, web fetches, etc.), since it is not aware of the user's intent
- If the agent description mentions that it should be used proactively, then you should try your best to use it without the user having to ask for it first. Use your judgement.
- If the user specifies that they want you to run agents "in parallel", you MUST send a single message with multiple ${In.name} tool use content blocks. For example, if you need to launch both a code-reviewer agent and a test-runner agent in parallel, send a single message with both tool calls.

Example usage:

<example_agent_descriptions>
"code-reviewer": use this agent after you are done writing a signficant piece of code
"greeting-responder": use this agent when to respond to user greetings with a friendly joke
</example_agent_description>

<example>
user: "Please write a function that checks if a number is prime"
assistant: Sure let me write a function that checks if a number is prime
assistant: First let me use the ${oX.name} tool to write a function that checks if a number is prime
assistant: I'm going to use the ${oX.name} tool to write the following code:
<code>
function isPrime(n) {
  if (n <= 1) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}
</code>
<commentary>
Since a signficant piece of code was written and the task was completed, now use the code-reviewer agent to review the code
</commentary>
assistant: Now let me use the code-reviewer agent to review the code
assistant: Uses the ${In.name} tool to launch the code-reviewer agent 
</example>

<example>
user: "Hello"
<commentary>
Since the user is greeting, use the greeting-responder agent to respond with a friendly joke
</commentary>
assistant: "I'm going to use the ${In.name} tool to launch the greeting-responder agent"
</example>
`
}
var LS2 = L(() => {
    Kq();
    gh();
    RRA();
    TRA()
});

function oJA(A) {
    if (A === "general-purpose") return;
    let B = AX1().get(A);
    if (B && rJA.includes(B)) return v61[B];
    return
}

function tJA(A, Q) {
    let B = AX1();
    if (!Q) {
        B.delete(A);
        return
    }
    if (rJA.includes(Q)) B.set(A, Q)
}
var rJA, v61;
var Yn = L(() => {
    S0();
    rJA = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"], v61 = {
        red: "red_FOR_SUBAGENTS_ONLY",
        blue: "blue_FOR_SUBAGENTS_ONLY",
        green: "green_FOR_SUBAGENTS_ONLY",
        yellow: "yellow_FOR_SUBAGENTS_ONLY",
        purple: "purple_FOR_SUBAGENTS_ONLY",
        orange: "orange_FOR_SUBAGENTS_ONLY",
        pink: "pink_FOR_SUBAGENTS_ONLY",
        cyan: "cyan_FOR_SUBAGENTS_ONLY"
    }
});

function MS2(A) {
    switch (A) {
        case "allow":
            return "allowed";
        case "deny":
            return "denied";
        default:
            return "asked for confirmation for"
    }
}

function vf5(A) {
    let Q = A.message;
    if (!Q) return "";
    if (Q.includes("<!DOCTYPE html") || Q.includes("<html")) {
        let B = Q.match(/<title>([^<]+)<\/title>/);
        if (B && B[1]) return B[1].trim();
        return ""
    }
    return A.message
}

function OS2(A) {
    if (A.cause instanceof Error && "code" in A.cause && A.cause?.code === "ETIMEDOUT" || A.cause instanceof Error && A.cause?.cause instanceof Error && "code" in A.cause.cause && A.cause.cause.code === "ETIMEDOUT") return "Request timed out. Check your internet connection and proxy settings";
    if (A.message === "Connection error.") return "Unable to connect to API due to poor internet connection";
    let Q = vf5(A);
    return Q !== A.message && Q.length > 0 ? Q : A.message
}
async function RS2(A, Q) {
    await new Promise((B, G) => {
        let Z = setTimeout(B, A);