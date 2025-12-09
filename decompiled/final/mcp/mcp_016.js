/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_016.js
 * 处理时间: 2025-12-09T03:41:37.925Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       (  8x) esmImport(module) - ESM import
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 16/29
 * Lines: 369334 - 370832 (1499 lines)
 * Original file: cli.js
 */

        renderToolUseProgressMessage() {
            return null
        },
        renderToolResultMessage({
            answers: A
        }, Q) {
            return oY.createElement(ts5, {
                answers: A
            })
        },
        renderToolUseRejectedMessage() {
            return oY.createElement(j, {
                flexDirection: "row",
                marginTop: 1
            }, oY.createElement($, {
                color: sj("default")
            }, pD, " "), oY.createElement($, null, "User declined to answer questions"))
        },
        renderToolUseErrorMessage() {
            return null
        },
        async call({
            questions: A,
            answers: Q = {}
        }, B) {
            return {
                data: {
                    questions: A,
                    answers: Q
                }
            }
        },
        mapToolResultToToolResultBlockParam({
            answers: A
        }, Q) {
            return {
                type: "tool_result",
                content: `User has answered your questions: ${Object.entries(A).map(([G,Z])=>`"${G}"="${Z}"`).join(", ")}. You can now continue with the user's answers in mind.`,
                tool_use_id: Q
            }
        }
    }
});

function es5(A, Q) {
    switch (Q.type) {
        case "next-question":
            return {
                ...A, currentQuestionIndex: A.currentQuestionIndex + 1, isInTextInput: !1
            };
        case "prev-question":
            return {
                ...A, currentQuestionIndex: Math.max(0, A.currentQuestionIndex - 1), isInTextInput: !1
            };
        case "update-question-state": {
            let B = A.questionStates[Q.questionText],
                G = {
                    selectedValue: Q.updates.selectedValue ?? B?.selectedValue ?? (Q.isMultiSelect ? [] : void 0),
                    textInputValue: Q.updates.textInputValue ?? B?.textInputValue ?? ""
                };
            return {
                ...A,
                questionStates: {
                    ...A.questionStates,
                    [Q.questionText]: G
                }
            }
        }
        case "set-answer": {
            let B = {
                ...A,
                answers: {
                    ...A.answers,
                    [Q.questionText]: Q.answer
                }
            };
            if (Q.shouldAdvance) return {
                ...B,
                currentQuestionIndex: B.currentQuestionIndex + 1,
                isInTextInput: !1
            };
            return B
        }
        case "set-text-input-mode":
            return {
                ...A, isInTextInput: Q.isInInput
            }
    }
}

function fm2() {
    let [A, Q] = hn.useReducer(es5, Ar5), B = hn.useCallback(() => {
        Q({
            type: "next-question"
        })
    }, []), G = hn.useCallback(() => {
        Q({
            type: "prev-question"
        })
    }, []), Z = hn.useCallback((J, W, X) => {
        Q({
            type: "update-question-state",
            questionText: J,
            updates: W,
            isMultiSelect: X
        })
    }, []), I = hn.useCallback((J, W, X = !0) => {
        Q({
            type: "set-answer",
            questionText: J,
            answer: W,
            shouldAdvance: X
        })
    }, []), Y = hn.useCallback((J) => {
        Q({
            type: "set-text-input-mode",
            isInInput: J
        })
    }, []);
    return {
        currentQuestionIndex: A.currentQuestionIndex,
        answers: A.answers,
        questionStates: A.questionStates,
        isInTextInput: A.isInTextInput,
        nextQuestion: B,
        prevQuestion: G,
        updateQuestionState: Z,
        setAnswer: I,
        setTextInputMode: Y
    }
}
var hn, Ar5;
var hm2 = L(() => {
    hn = GA(VA(), 1);
    Ar5 = {
        currentQuestionIndex: 0,
        answers: {},
        questionStates: {},
        isInTextInput: !1
    }
});

function r31({
    questions: A,
    currentQuestionIndex: Q,
    answers: B,
    hideSubmitTab: G = !1
}) {
    let {
        columns: Z
    } = YB(), I = wO.useMemo(() => {
        let X = G ? "" : ` ${V1.tick} Submit `,
            F = 2,
            V = 2,
            K = zD("← ") + zD(" →") + zD(X),
            D = Z - K;
        if (D <= 0) return A.map((v, x) => {
            let p = v?.header || `Q${x+1}`;
            return x === Q ? p.slice(0, 3) : ""
        });
        let H = A.map((v, x) => v?.header || `Q${x+1}`);
        if (H.map((v) => 4 + zD(v)).reduce((v, x) => v + x, 0) <= D) return H;
        let z = H[Q] || "",
            w = 4 + zD(z),
            N = 6,
            q = Math.min(w, D / 2),
            R = D - q,
            P = A.length - 1,
            y = Math.max(N, Math.floor(R / Math.max(P, 1)));
        return H.map((v, x) => {
            if (x === Q) {
                let p = q - 2 - 2;
                if (zD(v) <= p) return v;
                let u = v;
                while (zD(u + "…") > p && u.length > 1) u = u.slice(0, -1);
                return u + "…"
            } else {
                let p = y - 2 - 2;
                if (zD(v) <= p) return v;
                let u = v;
                while (zD(u + "…") > p && u.length > 1) u = u.slice(0, -1);
                return u.length > 0 ? u + "…" : v[0] + "…"
            }
        })
    }, [A, Q, Z, G]), Y = A.length === 1 && G;
    return wO.default.createElement(j, {
        flexDirection: "row",
        marginBottom: 1
    }, !Y && wO.default.createElement($, {
        color: Q === 0 ? "inactive" : void 0
    }, "←", " "), A.map((J, W) => {
        let X = W === Q,
            V = J?.question && !!B[J.question] ? V1.checkboxOn : V1.checkboxOff,
            K = I[W] || J?.header || `Q${W+1}`;
        return wO.default.createElement(j, {
            key: J?.question || `question-${W}`
        }, X ? wO.default.createElement($, {
            backgroundColor: "permission",
            color: "inverseText"
        }, " ", V, " ", K, " ") : wO.default.createElement($, null, " ", V, " ", K, " "))
    }), !G && wO.default.createElement(j, {
        key: "submit"
    }, Q === A.length ? wO.default.createElement($, {
        backgroundColor: "permission",
        color: "inverseText"
    }, " ", V1.tick, " Submit", " ") : wO.default.createElement($, null, " ", V1.tick, " Submit ")), !Y && wO.default.createElement($, {
        color: Q === A.length ? "inactive" : void 0
    }, " ", "→"))
}
var wO;
var PG0 = L(() => {
    n2();
    hA();
    m8();
    MUA();
    wO = GA(VA(), 1)
});

function gm2({
    question: A,
    questions: Q,
    currentQuestionIndex: B,
    answers: G,
    questionStates: Z,
    hideSubmitTab: I = !1,
    onUpdateQuestionState: Y,
    onAnswer: J,
    onTextInputFocus: W,
    onCancel: X,
    onSubmit: F
}) {
    let V = bq.useCallback((z) => {
            W(z === "__other__")
        }, [W]),
        K = A.options.map((z) => ({
            type: "text",
            value: z.label,
            label: z.label,
            description: z.description
        })),
        D = A.question,
        H = Z[D],
        C = {
            type: "input",
            value: "__other__",
            label: "Other",
            placeholder: A.multiSelect ? "Type something" : "Type something.",
            initialValue: H?.textInputValue ?? "",
            onChange: (z) => {
                Y(D, {
                    textInputValue: z
                }, A.multiSelect ?? !1)
            }
        },
        E = [...K, C];
    return bq.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, bq.default.createElement(J3, {
        dividerColor: "inactive"
    }), bq.default.createElement(j, {
        flexDirection: "column",
        paddingTop: 0
    }, bq.default.createElement(r31, {
        questions: Q,
        currentQuestionIndex: B,
        answers: G,
        hideSubmitTab: I
    }), bq.default.createElement(qWA, {
        title: A.question,
        color: "text"
    }), bq.default.createElement(j, {
        marginTop: 1
    }, A.multiSelect ? bq.default.createElement(p00, {
        key: A.question,
        options: E,
        defaultValue: Z[A.question]?.selectedValue,
        onChange: (z) => {
            Y(D, {
                selectedValue: z
            }, !0);
            let w = z.includes("__other__") ? Z[D]?.textInputValue : void 0,
                N = z.filter((q) => q !== "__other__").concat(w ? [w] : []);
            J(D, N, void 0, !1)
        },
        onFocus: V,
        onCancel: X,
        submitButtonText: B === Q.length - 1 ? "Submit" : "Next",
        onSubmit: F
    }) : bq.default.createElement(M0, {
        key: A.question,
        options: E,
        defaultValue: Z[A.question]?.selectedValue,
        onChange: (z) => {
            Y(D, {
                selectedValue: z
            }, !1);
            let w = z === "__other__" ? Z[D]?.textInputValue : void 0;
            J(D, z, w)
        },
        onFocus: V,
        onCancel: X,
        layout: "compact-vertical"
    })), bq.default.createElement(j, {
        marginTop: 1
    }, bq.default.createElement($, {
        color: "inactive",
        dimColor: !0
    }, "Enter to select · Tab/Arrow keys to navigate · Esc to cancel"))))
}
var bq;
var um2 = L(() => {
    hA();
    T6();
    u51();
    PG0();
    eV();
    bq = GA(VA(), 1)
});

function mm2({
    questions: A,
    currentQuestionIndex: Q,
    answers: B,
    allQuestionsAnswered: G,
    permissionResult: Z,
    onFinalResponse: I
}) {
    return KK.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, KK.default.createElement(J3, {
        dividerColor: "inactive"
    }), KK.default.createElement(j, {
        flexDirection: "column",
        borderTop: !0,
        borderColor: "inactive",
        paddingTop: 0
    }, KK.default.createElement(r31, {
        questions: A,
        currentQuestionIndex: Q,
        answers: B
    }), KK.default.createElement(qWA, {
        title: "Review your answers",
        color: "text"
    }), KK.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, !G && KK.default.createElement(j, {
        marginBottom: 1
    }, KK.default.createElement($, {
        color: "warning"
    }, V1.warning, " You have not answered all questions")), Object.keys(B).length > 0 && KK.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, A.filter((Y) => Y?.question && B[Y.question]).map((Y) => {
        let J = B[Y?.question];
        return KK.default.createElement(j, {
            key: Y?.question || "answer",
            flexDirection: "column",
            marginLeft: 1
        }, KK.default.createElement($, null, V1.bullet, " ", Y?.question || "Question"), KK.default.createElement(j, {
            marginLeft: 2
        }, KK.default.createElement($, {
            color: "success"
        }, V1.arrowRight, " ", J)))
    })), KK.default.createElement(WC, {
        permissionResult: Z,
        toolType: "tool"
    }), KK.default.createElement($, {
        color: "inactive"
    }, "Ready to submit your answers?"), KK.default.createElement(j, {
        marginTop: 1
    }, KK.default.createElement(M0, {
        options: [{
            type: "text",
            label: "Submit answers",
            value: "submit"
        }, {
            type: "text",
            label: "Cancel",
            value: "cancel"
        }],
        onChange: (Y) => I(Y),
        onCancel: () => I("cancel")
    })))))
}
var KK;
var dm2 = L(() => {
    n2();
    hA();
    T6();
    u51();
    ih();
    PG0();
    eV();
    KK = GA(VA(), 1)
});

function cm2({
    toolUseConfirm: A,
    onDone: Q,
    onReject: B
}) {
    let G = TG0.safeParse(A.input),
        Z = G.success ? G.data.questions || [] : [],
        I = fm2(),
        {
            currentQuestionIndex: Y,
            answers: J,
            questionStates: W,
            isInTextInput: X,
            nextQuestion: F,
            prevQuestion: V,
            updateQuestionState: K,
            setAnswer: D,
            setTextInputMode: H
        } = I,
        C = Y < (Z?.length || 0) ? Z?.[Y] : null,
        E = Y === (Z?.length || 0),
        z = Z?.every((y) => y?.question && !!J[y.question]) ?? !1,
        w = Z.length === 1 && !Z[0]?.multiSelect,
        N = k0A.useCallback(() => {
            Q(), B(), A.onReject()
        }, [Q, B, A]),
        q = k0A.useCallback((y) => {
            let v = {
                ...A.input,
                answers: y
            };
            Q(), A.onAllow(v, [])
        }, [A, Q]),
        R = k0A.useCallback((y, v, x, p = !0) => {
            let u, o = Array.isArray(v);
            if (o) u = v.join(", ");
            else u = x || v;
            let l = Z.length === 1;
            if (!o && l && p) {
                let k = {
                    ...J,
                    [y]: u
                };
                q(k);
                return
            }
            D(y, u, p)
        }, [D, Z.length, J, q]);

    function P(y) {
        if (y === "cancel") {
            N();
            return
        }
        if (y === "submit") q(J)
    }
    if (h1((y, v) => {
            if (X && !E) return;
            if (v.return) return;
            if ((v.leftArrow || v.shift && v.tab) && Y > 0) V();
            let x = w ? (Z?.length || 1) - 1 : Z?.length || 0;
            if ((v.rightArrow || v.tab && !v.shift) && Y < x) F()
        }), C) return k0A.default.createElement(gm2, {
        question: C,
        questions: Z,
        currentQuestionIndex: Y,
        answers: J,
        questionStates: W,
        hideSubmitTab: w,
        onUpdateQuestionState: K,
        onAnswer: R,
        onTextInputFocus: H,
        onCancel: N,
        onSubmit: F
    });
    if (E) return k0A.default.createElement(mm2, {
        questions: Z,
        currentQuestionIndex: Y,
        answers: J,
        allQuestionsAnswered: z,
        permissionResult: A.permissionResult,
        onFinalResponse: P
    });
    return null
}
var k0A;
var pm2 = L(() => {
    hA();
    s31();
    hm2();
    um2();
    dm2();
    k0A = GA(VA(), 1)
});

function Qr5(A) {
    switch (A) {
        case gD:
            return tb2;
        case oX:
            return Df2;
        case X9:
            return Wf2;
        case cF:
            return eu2;
        case LP:
            return Gm2;
        case xq:
            return zm2;
        case TTA:
            return Tm2;
        case bn:
            return km2;
        case fn:
            return xm2;
        case a31:
            return cm2;
        case FO:
        case Hy:
        case d8:
            return Cf2;
        default:
            return n51
    }
}

function Br5(A) {
    let Q = A.tool.userFacingName(A.input);
    if (A.tool === xq) return "Claude Code needs your approval for the plan";
    if (A.tool === TTA) return "Claude Code wants to enter plan mode";
    if (!Q || Q.trim() === "") return "Claude Code needs your attention";
    return `Claude needs your permission to use ${Q}`
}

function lm2({
    toolUseConfirm: A,
    toolUseContext: Q,
    onDone: B,
    onReject: G,
    verbose: Z
}) {
    h1((J, W) => {
        if (W.ctrl && J === "c") B(), G(), A.onReject()
    });
    let I = Br5(A);
    a51(I, "permission_prompt");
    let Y = Qr5(A.tool);
    return jG0.createElement(Y, {
        toolUseContext: Q,
        toolUseConfirm: A,
        onDone: B,
        onReject: G,
        verbose: Z
    })
}
var jG0;
var im2 = L(() => {
    hA();
    Wn();
    gh();
    nV();
    eb2();
    Xf2();
    s30();
    o30();
    Hf2();
    Ef2();
    eJA();
    RRA();
    MRA();
    Kq();
    hWA();
    Am2();
    Zm2();
    RTA();
    Um2();
    OG0();
    Pm2();
    p31();
    n31();
    ym2();
    vm2();
    s31();
    pm2();
    jG0 = GA(VA(), 1)
});

function Zr5(A) {
    if (STA(A)) return _.enum(A.enum);
    if (A.type === "string") {
        let Q = _.string();
        if (A.minLength !== void 0) Q = Q.min(A.minLength, {
            message: `Must be at least ${A.minLength} character${A.minLength===1?"":"s"}`
        });
        if (A.maxLength !== void 0) Q = Q.max(A.maxLength, {
            message: `Must be at most ${A.maxLength} character${A.maxLength===1?"":"s"}`
        });
        switch (A.format) {
            case "email":
                Q = Q.email({
                    message: "Please enter a valid email address"
                });
                break;
            case "uri":
                Q = Q.url({
                    message: "Please enter a valid URI"
                });
                break;
            case "date":
                Q = Q.date("Please enter a valid date (YYYY-MM-DD)");
                break;
            case "date-time":
                Q = Q.datetime({
                    offset: !0,
                    message: "Please enter a valid date-time (YYYY-MM-DDTHH:MM:SSZ)"
                });
                break;
            default:
                break
        }
        return Q
    }
    if (A.type === "number" || A.type === "integer") {
        let Q = _.coerce.number();
        if (A.type === "integer") Q = Q.int();
        if (A.minimum !== void 0) Q = Q.min(A.minimum, {
            message: `Must be at least ${A.minimum}`
        });
        if (A.maximum !== void 0) Q = Q.max(A.maximum, {
            message: `Must be at most ${A.maximum}`
        });
        return Q
    }
    if (A.type === "boolean") return _.coerce.boolean();
    throw Error(`Unsupported schema: ${JSON.stringify(A)}`)
}

function SG0(A, Q) {
    let G = Zr5(Q).safeParse(A);
    if (G.success) return {
        value: G.data,
        isValid: !0
    };
    return {
        isValid: !1,
        error: G.error.errors.map((Z) => Z.message).join("; ")
    }
}

function nm2(A) {
    if (A.type === "string") {
        if (!Ir5(A)) return;
        let {
            description: Q,
            example: B
        } = Gr5[A.format] || {};
        return `${Q}, e.g. ${B}`
    }
    if (A.type === "number" || A.type === "integer") {
        let Q = A.type === "integer",
            B = (G) => Number.isInteger(G) && !Q ? `${G}.0` : String(G);
        if (A.minimum !== void 0 && A.maximum !== void 0) return `(${A.type} between ${B(A.minimum)} and ${B(A.maximum)})`;
        else if (A.minimum !== void 0) return `(${A.type} >= ${B(A.minimum)})`;
        else if (A.maximum !== void 0) return `(${A.type} <= ${B(A.maximum)})`;
        else {
            let G = A.type === "integer" ? "42" : "3.14";
            return `(${A.type}, e.g. ${G})`
        }
    }
    return
}
var Gr5, STA = (A) => {
        return A.type === "string" && "enum" in A
    },
    Ir5 = (A) => {
        return A.type === "string" && "format" in A && typeof A.format === "string"
    };
var am2 = L(() => {
    h2();
    Gr5 = {
        email: {
            description: "email address",
            example: "user@example.com"
        },
        uri: {
            description: "URI",
            example: "https://example.com"
        },
        date: {
            description: "date",
            example: "2024-03-15"
        },
        "date-time": {
            description: "date-time",
            example: "2024-03-15T14:30:00Z"
        }
    }
});

function o31() {
    return Q9.default.createElement($, {
        italic: !0,
        dimColor: !0
    }, "<unset>")
}

function rm2({
    serverName: A,
    request: Q,
    onResponse: B,
    signal: G
}) {
    let {
        message: Z,
        requestedSchema: I
    } = Q, [Y, J] = Q9.useState(null), [W, X] = Q9.useState(() => {
        let wA = {};
        if (I.properties) {
            for (let [KA, SA] of Object.entries(I.properties))
                if (typeof SA === "object" && SA !== null) {
                    if (SA.default !== void 0) wA[KA] = SA.default
                }
        }
        return wA
    }), [F, V] = Q9.useState(() => {
        let wA = {};
        for (let [KA, SA] of Object.entries(I.properties))
            if (sm2(SA) && SA?.default !== void 0) {
                let sA = SG0(String(SA.default), SA);
                if (!sA.isValid && sA.error) wA[KA] = sA.error
            } return wA
    });
    Q9.useEffect(() => {
        if (!G) return;
        let wA = () => {
            B("cancel")
        };
        if (G.aborted) {
            wA();
            return
        }
        return G.addEventListener("abort", wA), () => {
            G.removeEventListener("abort", wA)
        }
    }, [G, B]);
    let K = Q9.useMemo(() => {
            let wA = I.required ?? [];
            return Object.entries(I.properties).map(([KA, SA]) => ({
                name: KA,
                schema: SA,
                isRequired: wA.includes(KA)
            }))
        }, [I]),
        [D, H] = Q9.useState(0),
        [C, E] = Q9.useState(),
        [z, w] = Q9.useState(""),
        [N, q] = Q9.useState(0),
        {
            columns: R
        } = YB(),
        P = D !== void 0 ? K[D] : void 0,
        y = P && sm2(P.schema);
    DQ(), a51("Claude Code needs your input", "elicitation_dialog");

    function v(wA) {
        let KA = K.length + 2,
            SA = D ?? (Y === "accept" ? K.length : Y === "decline" ? K.length + 1 : void 0),
            sA = SA !== void 0 ? (SA + (wA === "up" ? KA - 1 : 1)) % KA : 0;
        if (sA < K.length) H(sA), J(null);
        else H(void 0), J(sA === K.length ? "accept" : "decline")
    }

    function x(wA, KA) {
        X((SA) => {
            let sA = {
                ...SA
            };
            if (KA === void 0) delete sA[wA];
            else sA[wA] = KA;
            return sA
        })
    }

    function p(wA, KA) {
        V((SA) => {
            let sA = {
                ...SA
            };
            if (KA) sA[wA] = KA;
            else delete sA[wA];
            return sA
        })
    }

    function u(wA) {
        if (!wA) return;
        x(wA, void 0), p(wA), E(void 0), w(""), q(0)
    }

    function o(wA) {
        if (!P) return;
        if (wA.trim() === "" && (P.schema.type !== "string" || ("format" in P.schema) && P.schema.format !== void 0)) {
            u(P.name), v("down");
            return
        }
        let SA = SG0(wA, P.schema);
        x(P.name, SA.isValid ? SA.value : wA), p(P.name, SA.isValid ? void 0 : SA.error), E(void 0), w(""), q(0), v("down")
    }

    function l() {
        if (!P) return;
        E(void 0), w(""), q(0)
    }
    h1((wA, KA) => {
        if (P && C === P.name) {
            if (STA(P?.schema)) return;
            if (y) {
                if (KA.escape && z === "") {
                    l();
                    return
                }
            }
        } else {
            if (KA.escape) {
                B("cancel");
                return
            }
            if (KA.return && Y === "accept") {
                if (k() && Object.keys(F).length === 0) B("accept", W);
                return
            }
            if (KA.return && Y === "decline") {
                B("decline");
                return
            }
            if (KA.upArrow || KA.downArrow) {
                v(KA.upArrow ? "up" : "down");
                return
            }
            if (P) {
                let {
                    schema: SA,
                    name: sA,
                    isRequired: NA
                } = P, qA = W[sA];
                if (KA.backspace && !NA) {
                    u(P.name);
                    return
                }
                if (KA.return) {
                    if (SA.type === "boolean") {
                        x(sA, !(qA ?? !1)), v("down");
                        return
                    }
                    if (E(sA), y) {
                        let DA = qA !== void 0 ? String(qA) : "";
                        w(DA), q(DA.length)
                    }
                }
            }
        }
    }, {
        isActive: !0
    });
    let k = () => {
            let wA = I.required || [];
            for (let KA of wA) {
                let SA = W[KA];
                if (SA === void 0 || SA === null || SA === "") return !1
            }
            return !0
        },
        d = () => {
            if (!K.length) return null;
            return Q9.default.createElement(j, {
                flexDirection: "column",
                gap: 1
            }, K.map((wA, KA) => {
                let {
                    name: SA,
                    schema: sA,
                    isRequired: NA
                } = wA, qA = KA === D && !Y, DA = W[SA], yA = (() => {
                    if (!qA || C !== void 0) return null;
                    let K1 = sA.type === "boolean" ? "toggle" : STA(sA) ? "select" : "edit",
                        WA = DA === void 0 || NA ? `(Press Enter to ${K1})` : `(Press Enter to ${K1}, Backspace to unset)`;
                    return Q9.default.createElement($, {
                        dimColor: !0
                    }, " ", WA)
                })(), rA = (K1, WA) => {
                    return Q9.default.createElement(j, {
                        key: SA,
                        flexDirection: "column"
                    }, Q9.default.createElement(j, {
                        gap: 1,
                        paddingLeft: qA ? 0 : 2
                    }, qA && Q9.default.createElement($, {
                        color: "success"
                    }, V1.pointer), Q9.default.createElement(j, {
                        flexGrow: 1,
                        flexDirection: "column"
                    }, K1, sA.description && Q9.default.createElement(j, {
                        marginLeft: 2
                    }, Q9.default.createElement($, {
                        dimColor: !0
                    }, sA.description)), WA && Q9.default.createElement(j, {
                        marginLeft: 2
                    }, Q9.default.createElement($, {
                        color: "error",
                        bold: !0
                    }, V1.warning, " ", WA)))))
                };
                if (STA(sA)) {
                    let K1 = sA.enum.map((WA, XA) => ({
                        label: sA.enumNames?.[XA] ?? WA,
                        value: WA
                    }));
                    if (qA && C === SA) return Q9.default.createElement(j, {
                        key: SA,
                        flexDirection: "column"
                    }, Q9.default.createElement($, {
                        color: "success"
                    }, sA.title || SA, NA && Q9.default.createElement($, {
                        color: "error"
                    }, "*"), sA.description && Q9.default.createElement($, {
                        dimColor: !0
                    }, " - ", sA.description)), Q9.default.createElement(M0, {
                        options: K1,
                        defaultValue: DA !== void 0 ? DA : sA.default ?? sA.enum[0],
                        onChange: (WA) => {
                            x(SA, WA), E(void 0), v("down")
                        },
                        onCancel: () => {
                            E(void 0)
                        }
                    }));
                    else {
                        let WA = sA.enum.findIndex((zA) => zA === DA),
                            XA = DA !== void 0 ? WA >= 0 && sA.enumNames?.[WA] ? sA.enumNames[WA] : DA : Q9.default.createElement(o31, null);
                        return rA(Q9.default.createElement($, {
                            color: qA ? "success" : void 0
                        }, sA.title || SA, NA && Q9.default.createElement($, {
                            color: "error"
                        }, "*"), ": ", XA, yA))
                    }
                } else if (sA.type === "boolean") return rA(Q9.default.createElement($, {
                    color: qA ? "success" : void 0
                }, sA.title || SA, NA && Q9.default.createElement($, {
                    color: "error"
                }, "*"), ":", " ", DA !== void 0 ? DA ? `${V1.tick} Yes` : `${V1.cross} No` : Q9.default.createElement(o31, null), yA));
                else if (y) {
                    let K1 = F[SA],
                        WA = nm2(sA);
                    if (qA && C === SA) return rA(Q9.default.createElement(j, {
                        flexDirection: "column"
                    }, Q9.default.createElement($, {
                        color: "success"
                    }, sA.title || SA, NA && Q9.default.createElement($, {
                        color: "error"
                    }, "*"), ":", WA && Q9.default.createElement($, {
                        dimColor: !0
                    }, ` ${WA}`)), Q9.default.createElement(j, {
                        marginLeft: 2
                    }, Q9.default.createElement(s4, {
                        value: z,
                        onChange: w,
                        onSubmit: o,
                        onExit: l,
                        placeholder: `Enter ${sA.type}…`,
                        columns: Math.min(R - 6, 80),
                        cursorOffset: N,
                        onChangeCursorOffset: q,
                        focus: !0,
                        showCursor: !0,
                        multiline: sA.type === "string"
                    }))));
                    return rA(Q9.default.createElement($, {
                        color: qA ? "success" : void 0
                    }, sA.title || SA, NA && Q9.default.createElement($, {
                        color: "error"
                    }, "*"), ":", " ", DA === void 0 ? Q9.default.createElement(o31, null) : String(DA), yA), K1)
                } else return rA(Q9.default.createElement($, {
                    color: qA ? "success" : void 0
                }, sA.title || SA, NA && Q9.default.createElement($, {
                    color: "error"
                }, "*"), ":", " ", DA === void 0 ? Q9.default.createElement(o31, null) : String(DA), yA))
            }))
        },
        QA = (wA) => {
            return I.properties[wA]?.title ?? wA
        },
        IA = Object.keys(F),
        HA = (I.required || []).filter((wA) => W[wA] === void 0);
    return Q9.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "permission"
    }, Q9.default.createElement($, {
        bold: !0
    }, V1.info, " MCP Server “", A, "” requests your input"), Q9.default.createElement(j, {
        padding: 1
    }, Q9.default.createElement($, null, Z)), d(), K.length > 0 && Q9.default.createElement(Q9.default.Fragment, null, HA.length > 0 && Q9.default.createElement($, {
        color: "error"
    }, V1.warning, " Missing required fields:", " ", HA.map(QA).join(", ")), IA.length > 0 && Q9.default.createElement($, {
        color: "error"
    }, V1.warning, " Validation errors in:", " ", IA.map(QA).join(", ")), Q9.default.createElement($, {
        bold: !0,
        color: Y === "accept" ? "success" : void 0,
        inverse: Y === "accept"
    }, "Accept"), Q9.default.createElement($, {
        bold: !0,
        color: Y === "decline" ? "error" : void 0,
        inverse: Y === "decline"
    }, "Decline"), Q9.default.createElement($, {
        dimColor: !0
    }, "Press ↑↓ to navigate · Enter to edit · Esc to cancel / go back")))
}
var Q9, sm2 = (A) => ["string", "number", "integer"].includes(A.type);
var om2 = L(() => {
    hA();
    n2();
    c9();
    o30();
    T5();
    am2();
    QY();
    m8();
    Q9 = GA(VA(), 1)
});

function e31(A) {
    let [Q, B] = t31.useState(!1);
    return t31.useEffect(() => {
        B(!1);
        let G = setTimeout(() => {
            B(!0)
        }, A);
        return () => clearTimeout(G)
    }, [A]), Q
}
var t31;
var _G0 = L(() => {
    t31 = GA(VA(), 1)
});
import {
    homedir as A71
} from "os";
import {
    join as Q71
} from "path";

function tm2() {
    return process.env.XDG_STATE_HOME ?? Q71(A71(), ".local", "state")
}

function em2() {
    return process.env.XDG_CACHE_HOME ?? Q71(A71(), ".cache")
}

function Ad2() {
    return process.env.XDG_DATA_HOME ?? Q71(A71(), ".local", "share")
}

function Qd2() {
    return Q71(A71(), ".local", "bin")
}
var Bd2 = () => {};
import {
    join as kG0
} from "node:path";
import {
    createHash as Yr5
} from "node:crypto";
import {
    tmpdir as Jr5
} from "node:os";
import {
    chmodSync as Wr5,
    unlinkSync as Xr5,
    mkdtempSync as Fr5,
    rmdirSync as Vr5
} from "fs";
async function Kr5(A = "stable", Q, B) {
    let G = Date.now(),
        Z = Q === B71;
    try {
        let I = await GQ.get(`${Q}/${A}`, {
                timeout: 30000,
                responseType: "text",
                ...B
            }),
            Y = Date.now() - G;
        return BA("tengu_version_check_success", {
            latency_ms: Y,
            source_gcs: Z
        }), I.data.trim()
    } catch (I) {
        let Y = Date.now() - G,
            J = I instanceof Error ? I.message : String(I),
            W;
        if (GQ.isAxiosError(I) && I.response) W = I.response.status;
        throw BA("tengu_version_check_failure", {
            latency_ms: Y,
            http_status: W,
            source_gcs: Z,
            is_timeout: J.includes("timeout")
        }), e(Error(`Failed to fetch version from ${Q}/${A}: ${J}`)), Error(`Failed to fetch version from ${A}: ${I}`)
    }
}
async function yG0(A) {
    if (A && /^v?\d+\.\d+\.\d+(-\S+)?$/.test(A)) return A.startsWith("v") ? A.slice(1) : A;
    let Q = A || "stable";
    if (Q !== "stable" && Q !== "latest") throw Error(`Invalid channel: ${A}. Use 'stable' or 'latest'`);
    return Kr5(Q, B71)
}
async function Dr5(A, Q, B, G = {}) {
    let Z = await GQ.get(A, {
            timeout: 300000,
            responseType: "arraybuffer",
            ...G
        }),
        I = Yr5("sha256");
    I.update(Z.data);
    let Y = I.digest("hex");
    if (Y !== Q) throw Error(`Checksum mismatch: expected ${Q}, got ${Y}`);
    (await import("fs")).writeFileSync(B, Buffer.from(Z.data)), Wr5(B, 493)
}
async function Hr5(A) {
    let Q = Date.now(),
        B;
    try {
        B = Fr5(kG0(Jr5(), "claude-cdn-dark-read-")), await Zd2(A, B, Gd2);
        let G = Date.now() - Q;
        BA("tengu_native_cdn_dark_read_success", {
            latency_ms: G
        }), g(`CDN dark read succeeded for ${A}`)
    } catch (G) {
        let Z = Date.now() - Q,
            I = G instanceof Error ? G.message : String(G),
            Y;
        if (GQ.isAxiosError(G) && G.response) Y = G.response.status;
        BA("tengu_native_cdn_dark_read_failure", {
            latency_ms: Z,
            http_status: Y,
            is_timeout: I.includes("timeout"),
            is_checksum_mismatch: I.includes("Checksum mismatch")
        }), e(Error(`CDN dark read failed for ${A}: ${I}`))
    } finally {
        if (B) try {
            let G = _TA(Sy());
            Xr5(kG0(B, G)), Vr5(B)
        } catch {}
    }
}
async function Zd2(A, Q, B, G) {
    let Z = OA(),
        I = B === Gd2,
        Y = B === B71;
    if (Z.existsSync(Q)) Z.rmSync(Q, {
        recursive: !0,
        force: !0
    });
    let J = Sy(),
        W = Date.now();
    BA("tengu_binary_download_attempt", {
        is_cdn: I,
        is_gcs: Y
    });
    let X;
    try {
        X = (await GQ.get(`${B}/${A}/manifest.json`, {
            timeout: 1e4,
            responseType: "json",
            ...G
        })).data
    } catch (C) {
        let E = Date.now() - W,
            z = C instanceof Error ? C.message : String(C),
            w;
        if (GQ.isAxiosError(C) && C.response) w = C.response.status;
        throw BA("tengu_binary_manifest_fetch_failure", {
            latency_ms: E,
            http_status: w,
            is_cdn: I,
            is_gcs: Y,
            is_timeout: z.includes("timeout")
        }), e(Error(`Failed to fetch manifest from ${B}/${A}/manifest.json: ${z}`)), C
    }
    let F = X.platforms[J];
    if (!F) throw BA("tengu_binary_platform_not_found", {
        is_cdn: I,
        is_gcs: Y
    }), Error(`Platform ${J} not found in manifest for version ${A}`);
    let V = F.checksum,
        K = _TA(J),
        D = `${B}/${A}/${J}/${K}`;
    Z.mkdirSync(Q);
    let H = kG0(Q, K);
    try {
        await Dr5(D, V, H, G || {});
        let C = Date.now() - W;
        BA("tengu_binary_download_success", {
            latency_ms: C,
            is_cdn: I,
            is_gcs: Y
        })
    } catch (C) {
        let E = Date.now() - W,
            z = C instanceof Error ? C.message : String(C),
            w;
        if (GQ.isAxiosError(C) && C.response) w = C.response.status;
        throw BA("tengu_binary_download_failure", {
            latency_ms: E,
            http_status: w,
            is_cdn: I,
            is_gcs: Y,
            is_timeout: z.includes("timeout"),
            is_checksum_mismatch: z.includes("Checksum mismatch")
        }), e(Error(`Failed to download binary from ${D}: ${z}`)), C
    }
}
async function Id2(A, Q) {
    return Hr5(A), await Zd2(A, Q, B71), "binary"
}
var Gd2 = "https://downloads.claude.ai/claude-code-releases",
    B71 = "https://storage.googleapis.com/claude-code-dist-86c565f3-f756-42ad-8dfa-d59b1c096819/claude-code-releases";
var Yd2 = L(() => {
    w3();
    o0();
    I6();
    D0();
    w0();
    xG0();
    u1()
});
import {
    join as uW,
    dirname as _y,
    resolve as ky,
    delimiter as Cr5,
    basename as Er5
} from "node:path";
import {
    homedir as Wd2
} from "node:os";
import {
    accessSync as zr5,
    chmodSync as Ur5,
    constants as $r5,
    existsSync as wr5,
    lstatSync as qr5,
    realpathSync as Nr5,
    unlinkSync as Lr5
} from "fs";

function Sy() {
    let A = m0.platform,
        Q = process.arch === "x64" ? "x64" : process.arch === "arm64" ? "arm64" : null;
    if (!Q) {
        let B = Error(`Unsupported architecture: ${process.arch}`);
        throw g(`Native installer does not support architecture: ${process.arch}`, {
            level: "error"
        }), B
    }
    if (A === "linux" && DU.isMuslEnvironment()) return `linux-${Q}-musl`;
    return `${A}-${Q}`
}

function _TA(A) {
    return A.startsWith("win32") ? "claude.exe" : "claude"
}

function y0A() {
    let A = Sy(),
        Q = _TA(A);
    return {
        versions: uW(Ad2(), "claude", "versions"),
        staging: uW(em2(), "claude", "staging"),
        locks: uW(tm2(), "claude", "locks"),
        executable: uW(Qd2(), Q)
    }
}

function uWA(A) {
    let Q = OA();
    if (!Q.existsSync(A)) return !1;
    let B = Q.statSync(A);
    if (!B.isFile() || B.size === 0) return !1;
    try {
        return zr5(A, $r5.X_OK), !0
    } catch {
        return !1
    }
}

function fG0(A) {
    let Q = y0A(),
        B = OA();
    [Q.versions, Q.staging, Q.locks].forEach((Y) => {
        if (!B.existsSync(Y)) B.mkdirSync(Y)
    });
    let Z = _y(Q.executable);
    if (!B.existsSync(Z)) B.mkdirSync(Z);
    let I = uW(Q.versions, A);
    if (!B.existsSync(I)) B.writeFileSync(I, "", {
        flush: !0,
        encoding: "utf8"
    });
    return {
        stagingPath: uW(Q.staging, A),
        installPath: I
    }
}
async function vG0(A, Q, B = 0) {
    let G = y0A(),
        Z = OA(),
        I = Fd2(G, A);
    if (!Z.existsSync(G.locks)) Z.mkdirSync(G.locks);
    let Y = null;
    try {
        try {
            Y = await bG0.default.lock(A, {
                stale: 60000,
                retries: {
                    retries: B,
                    minTimeout: B > 0 ? 1000 : 100,
                    maxTimeout: B > 0 ? 5000 : 500
                },
                lockfilePath: I,
                onCompromised: (J) => {
                    g(`NON-FATAL: Version lock was compromised during operation: ${J.message}`, {
                        level: "info"
                    })
                }
            })
        } catch (J) {
            return Vd2(A, J), !1
        }
        try {
            return await Q(), !0
        } catch (J) {
            throw e(J instanceof Error ? J : Error(String(J))), J
        }
    } finally {
        if (Y) await Y()
    }
}

function Xd2(A, Q) {
    let B = OA();
    if (!B.existsSync(_y(Q))) B.mkdirSync(_y(Q));
    let G = `${Q}.tmp.${process.pid}.${Date.now()}`;
    try {
        B.copyFileSync(A, G), Ur5(G, 493), B.renameSync(G, Q)
    } catch (Z) {
        try {
            if (B.existsSync(G)) B.unlinkSync(G)
        } catch {}
        throw Z
    }
}

function Or5(A, Q) {
    let B = OA();
    try {
        let G = uW(A, "node_modules", "@anthropic-ai"),
            I = B.readdirStringSync(G).find((J) => J.startsWith("claude-cli-native-"));
        if (!I) throw BA("tengu_native_install_package_failure", {
            stage_find_package: !0,
            error_package_not_found: !0
        }), Error("Could not find platform-specific native package");
        let Y = uW(G, I, "cli");
        if (!B.existsSync(Y)) throw BA("tengu_native_install_package_failure", {
            stage_binary_exists: !0,
            error_binary_not_found: !0
        }), Error(`Native binary not found at ${Y}`);
        Xd2(Y, Q), B.rmSync(A, {
            recursive: !0,
            force: !0
        }), BA("tengu_native_install_package_success", {})
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G);
        if (!Z.includes("Could not find platform-specific") && !Z.includes("Native binary not found")) BA("tengu_native_install_package_failure", {
            stage_atomic_move: !0,
            error_move_failed: !0
        });
        throw e(G instanceof Error ? G : Error(Z)), G
    }
}

function Rr5(A, Q) {
    let B = OA();
    try {
        let G = Sy(),
            Z = _TA(G),
            I = uW(A, Z);
        if (!B.existsSync(I)) throw BA("tengu_native_install_binary_failure", {
            stage_binary_exists: !0,
            error_binary_not_found: !0
        }), Error(`Staged binary not found at ${I}`);
        Xd2(I, Q), B.rmSync(A, {
            recursive: !0,
            force: !0
        }), BA("tengu_native_install_binary_success", {})
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G);
        if (!Z.includes("Staged binary not found")) BA("tengu_native_install_binary_failure", {
            stage_atomic_move: !0,
            error_move_failed: !0
        });
        throw e(G instanceof Error ? G : Error(Z)), G
    }
}

function Tr5(A, Q) {
    let {
        stagingPath: B,
        installPath: G
    } = fG0(A);
    if (Q === "npm") Or5(B, G);
    else Rr5(B, G)
}

function Pr5(A) {
    let {
        installPath: Q
    } = fG0(A);
    return uWA(Q)
}
async function jr5(A, Q = !1) {
    let B = Date.now(),
        G = await yG0(A),
        {
            installPath: Z,
            stagingPath: I
        } = fG0(G);
    g(`Checking for native installer update to version ${G}`);
    let Y = !1,
        J = await vG0(Z, async () => {
            if (!Pr5(G) || Q) {
                Y = !0, g(Q ? `Force reinstalling native installer version ${G}` : `Downloading native installer version ${G}`);
                let F = await Id2(G, I);
                Tr5(G, F)
            } else g(`Version ${G} already installed, updating symlink`);
            let X = y0A();
            Sr5(X.executable), _r5(X.executable, Z)
        }, 3),
        W = Date.now() - B;
    if (!J) return BA("tengu_native_update_lock_failed", {
        latency_ms: W
    }), !1;
    return BA("tengu_native_update_complete", {
        latency_ms: W,
        was_new_install: Y,
        was_force_reinstall: Q
    }), g(`Successfully updated to version ${G}`), !0
}

function Sr5(A) {
    let Q = OA();
    try {
        if (Q.existsSync(A)) {
            if (Q.statSync(A).isDirectory()) {
                if (Q.readdirStringSync(A).length === 0) Q.rmdirSync(A), g(`Removed empty directory at ${A}`)
            }
        }
    } catch (B) {
        g(`Could not remove empty directory at ${A}: ${B}`)
    }
}

function _r5(A, Q) {
    let B = OA();
    if (Sy().startsWith("win32")) try {
        let J = _y(A);
        if (!B.existsSync(J)) B.mkdirSync(J);
        if (B.existsSync(A)) {
            try {
                let X = B.statSync(A),
                    F = B.statSync(Q);
                if (X.size === F.size) return !1
            } catch {}
            let W = `${A}.old.${Date.now()}`;
            B.renameSync(A, W);
            try {
                B.copyFileSync(Q, A);
                try {
                    B.unlinkSync(W)
                } catch {}
            } catch (X) {
                try {
                    B.renameSync(W, A)
                } catch (F) {
                    let V = Error(`Failed to restore old executable: ${F}`, {
                        cause: X
                    });
                    throw e(V), V
                }