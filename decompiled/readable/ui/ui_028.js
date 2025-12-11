/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_028.js
 * 处理时间: 2025-12-09T03:41:39.298Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 28/53
 * Lines: 186694 - 188192 (1499 lines)
 * Original file: cli.js
 */

    return A.slice(0, B + 1)
}

function H96(A) {
    for (let Q = 2; Q < A.length; Q++) {
        let B = A.charCodeAt(Q);
        if (B === D96) return Q;
        if (B === K96) continue;
        if (B >= F96 && B <= V96) continue;
        break
    }
    return -1
}

function C96(A, Q) {
    A = A.slice(Q);
    let B = H96(A);
    if (B === -1) return;
    return A.slice(0, B + 1)
}

function E96(A) {
    if (!A.includes(";")) return [A];
    let Q = A.slice(2, -1).split(";"),
        B = [];
    for (let G = 0; G < Q.length; G++) {
        let Z = Q[G];
        if (Z === "38" || Z === "48") {
            if (G + 2 < Q.length && Q[G + 1] === "5") {
                B.push(Q.slice(G, G + 3).join(";")), G += 2;
                continue
            } else if (G + 4 < Q.length && Q[G + 1] === "2") {
                B.push(Q.slice(G, G + 5).join(";")), G += 4;
                continue
            }
        }
        B.push(Z)
    }
    return B.map((G) => `\x1B[TextComponent{G}m`)
}

function qYB(A, Q = Number.POSITIVE_INFINITY) {
    let B = [],
        G = 0,
        Z = 0;
    while (G < A.length) {
        let I = A.codePointAt(G);
        if (DYB.has(I)) {
            let W, X = A.codePointAt(G + 1);
            if (X === CYB) {
                if (W = X96(A, G), W) B.push({
                    type: "ansi",
                    code: W,
                    endCode: Th1(W)
                })
            } else if (X === HYB) {
                if (W = C96(A, G), W) {
                    let F = E96(W);
                    for (let V of F) B.push({
                        type: "ansi",
                        code: V,
                        endCode: Th1(V)
                    })
                }
            }
            if (W) {
                G += W.length;
                continue
            }
        }
        let Y = kh1(I),
            J = String.fromCodePoint(I);
        if (B.push({
                type: "char",
                value: J,
                fullWidth: Y
            }), G += J.length, Z += Y ? 2 : J.length, Z >= Q) break
    }
    return B
}
var F96 = 48,
    V96 = 57,
    K96 = 59,
    D96 = 109;
var NYB = lazyLoader(() => {
    wYB();
    dUA()
});
var zaA = lazyLoader(() => {
    dUA();
    _h1();
    EaA();
    Sh1();
    $YB();
    NYB()
});

function UaA(A, Q) {
    return Q.x < A.width && Q.y < A.height
}

function NW(A, Q) {
    if (A === void 0) return;
    if (Number.isInteger(A)) return;
    g(`TextComponent{Q} should be an integer, got TextComponent{A}`, {
        level: "warn"
    })
}
var yh1 = lazyLoader(() => {
    D0()
});
var MYB = "\x1B[?2026h",
    OYB = "\x1B[?2026l",
    RYB = "\x1B",
    xh1 = "\x1B]",
    q7A = "\x07",
    N7A = ";";

function jYB(A) {
    return A === PYB
}

function U96(A, Q) {
    if (A.char !== Q.char || A.width !== Q.width) return !1;
    if (A.hyperlink !== Q.hyperlink) return !1;
    if (A.styles.length !== Q.styles.length) return !1;
    for (let B = 0; B < A.styles.length; B++)
        if (A.styles[B].code !== Q.styles[B].code) return !1;
    return !0
}

function L7A(A, Q) {
    if (NW(A, "createScreen width"), NW(Q, "createScreen height"), !Number.isInteger(A) || A < 0) A = Math.max(0, Math.floor(A) || 0);
    if (!Number.isInteger(Q) || Q < 0) Q = Math.max(0, Math.floor(Q) || 0);
    let B = Array(A * Q).fill(PYB);
    return {
        width: A,
        height: Q,
        cells: B
    }
}

function $aA(A, Q) {
    if (!UaA(A, Q)) return;
    let B = Q.y * A.width + Q.x;
    return A.cells[B]
}

function TYB(A, Q) {
    let {
        x: B,
        y: G
    } = Q, Z = A.width;
    return G * Z + B
}

function vh1(A, Q, B) {
    if (!UaA(A, Q)) return;
    let G = TYB(A, Q);
    if (A.cells[G] = B, B.width === 1) {
        let Z = {
            x: Q.x + 1,
            y: Q.y
        };
        if (UaA(A, Z)) {
            let I = TYB(A, Z);
            A.cells[I] = z96
        }
    }
}

function _YB(A) {
    for (let Q of A) {
        let B = Q.code.match(SYB);
        if (B) return B[1] || null
    }
    return null
}

function kYB(A) {
    return A.filter((Q) => !SYB.test(Q.code))
}

function yYB(A, Q) {
    let B = [],
        G = Math.max(A.height, Q.height),
        Z = Math.max(A.width, Q.width);
    for (let I = 0; I < G; I += 1)
        for (let Y = 0; Y < Z; Y += 1) {
            let J = {
                    x: Y,
                    y: I
                },
                W = $aA(A, J),
                X = $aA(Q, J);
            if (W && X && U96(W, X)) continue;
            B.push([J, W, X])
        }
    return B
}
var PYB, z96, SYB;
var cUA = lazyLoader(() => {
    yh1();
    PYB = Object.freeze({
        char: " ",
        styles: [],
        width: 0,
        hyperlink: void 0
    });
    z96 = Object.freeze({
        char: "",
        styles: [],
        width: 2,
        hyperlink: void 0
    });
    SYB = new RegExp(`^TextComponent{RYB}\\]8${N7A}TextComponent{N7A}([^TextComponent{q7A}]*)TextComponent{q7A}TextComponent`)
});
class pUA {
    width;
    height;
    ink2;
    operations = [];
    charCache;
    styledCharsToStringCache = {};
    constructor(A) {
        let {
            width: Q,
            height: B,
            ink2: G = !1,
            charCache: Z = new Map
        } = A;
        this.width = Q, this.height = B, this.ink2 = G, this.charCache = Z
    }
    write(A, Q, B) {
        if (!B) return;
        this.operations.push({
            type: "write",
            x: A,
            y: Q,
            text: B
        })
    }
    clip(A) {
        this.operations.push({
            type: "clip",
            clip: A
        })
    }
    unclip() {
        this.operations.push({
            type: "unclip"
        })
    }
    get() {
        let A = Array(this.height);
        for (let Z = 0; Z < this.height; Z++) A[Z] = Array(this.width).fill(xYB);
        let Q = L7A(this.width, this.height),
            B = [];
        for (let Z of this.operations) {
            if (Z.type === "clip") B.push(Z.clip);
            if (Z.type === "unclip") B.pop();
            if (Z.type === "write") {
                let {
                    text: I
                } = Z, {
                    x: Y,
                    y: J
                } = Z, W = I.split(`
`), X = B.at(-1);
                if (X) {
                    let V = typeof X?.x1 === "number" && typeof X?.x2 === "number",
                        K = typeof X?.y1 === "number" && typeof X?.y2 === "number";
                    if (V) {
                        let D = X7A(I);
                        if (Y + D < X.x1 || Y > X.x2) continue
                    }
                    if (K) {
                        let D = W.length;
                        if (J + D < X.y1 || J > X.y2) continue
                    }
                    if (V) {
                        if (W = W.map((D) => {
                                let H = Y < X.x1 ? X.x1 - Y : 0,
                                    C = SZ(D),
                                    E = Y + C > X.x2 ? X.x2 - Y : C;
                                return Ot(D, H, E)
                            }), Y < X.x1) Y = X.x1
                    }
                    if (K) {
                        let D = J < X.y1 ? X.y1 - J : 0,
                            H = W.length,
                            C = J + H > X.y2 ? X.y2 - J : H;
                        if (W = W.slice(D, C), J < X.y1) J = X.y1
                    }
                }
                let F = 0;
                for (let V of W) {
                    let K = A[J + F];
                    if (!K) continue;
                    let D = this.charCache.get(V);
                    if (!D) {
                        let C = zYB(qYB(V));
                        D = this.ink2 ? q96(C) : C, this.charCache.set(V, D)
                    }
                    let H = Y;
                    for (let C = 0; C < D.length; C++) {
                        let E = D[C];
                        if (this.ink2) {
                            let w = E.value.codePointAt(0);
                            if (w === 8203 || w === 8204 || w === 8205 || w === 65279 || w === 8288) continue;
                            if (w !== void 0 && w <= 31) {
                                if (w === 9) {
                                    let q = 8 - H % 8;
                                    for (let R = 0; R < q && H < this.width; R++) K[H] = xYB, vh1(Q, {
                                        x: H,
                                        y: J + F
                                    }, {
                                        char: " ",
                                        styles: [],
                                        width: 0,
                                        hyperlink: void 0
                                    }), H++
                                } else if (w === 27) {
                                    let N = D[C + 1]?.value,
                                        q = N?.codePointAt(0);
                                    if (N === "(" || N === ")" || N === "*" || N === "+") C += 2;
                                    else if (N === "[") {
                                        C++;
                                        while (C < D.length - 1) {
                                            C++;
                                            let R = D[C]?.value.codePointAt(0);
                                            if (R !== void 0 && R >= 64 && R <= 126) break
                                        }
                                    } else if (N === "]" || N === "P" || N === "_" || N === "^" || N === "X") {
                                        C++;
                                        while (C < D.length - 1) {
                                            C++;
                                            let R = D[C]?.value;
                                            if (R === "\x07") break;
                                            if (R === "\x1B") {
                                                if (D[C + 1]?.value === "\\") {
                                                    C++;
                                                    break
                                                }
                                            }
                                        }
                                    } else if (q !== void 0 && q >= 48 && q <= 126) C++
                                }
                                continue
                            }
                        }
                        K[H] = E;
                        let z = E.fullWidth || E.value.length > 1;
                        if (this.ink2) {
                            let w = {
                                    x: H,
                                    y: J + F
                                },
                                N = _YB(E.styles),
                                q = N ? kYB(E.styles) : E.styles;
                            vh1(Q, w, {
                                char: E.value,
                                styles: q,
                                width: z ? 1 : 0,
                                hyperlink: N ?? void 0
                            })
                        }
                        if (z) K[H + 1] = {
                            type: "char",
                            value: "",
                            fullWidth: !1,
                            styles: E.styles
                        };
                        H += z ? 2 : 1
                    }
                    F++
                }
            }
        }
        return {
            output: this.ink2 ? "" : A.map((Z) => {
                let I = Z.filter((J) => J !== void 0),
                    Y = JSON.stringify(I);
                if (!Object.prototype.hasOwnProperty.call(this.styledCharsToStringCache, Y)) {
                    let J = UYB(I).trimEnd();
                    this.styledCharsToStringCache[Y] = J
                }
                return this.styledCharsToStringCache[Y]
            }).join(`
`),
            height: A.length,
            screen: Q
        }
    }
}

function w96(A, Q) {
    if (A === Q) return !0;
    let B = A.length;
    if (B !== Q.length) return !1;
    if (B === 0) return !0;
    for (let G = 0; G < B; G++)
        if (A[G].code !== Q[G].code) return !1;
    return !0
}

function q96(A) {
    let Q = A.length;
    if (Q === 0) return [];
    let B = [],
        G = [],
        Z = A[0].styles;
    for (let I = 0; I < Q; I++) {
        let Y = A[I],
            J = Y.styles;
        if (G.length > 0 && !w96(J, Z)) {
            let W = G.join("");
            for (let {
                    segment: X
                }
                of vYB.segment(W)) B.push({
                type: "char",
                value: X,
                fullWidth: zD(X) === 2,
                styles: Z
            });
            G.length = 0
        }
        G.push(Y.value), Z = J
    }
    if (G.length > 0) {
        let I = G.join("");
        for (let {
                segment: Y
            }
            of vYB.segment(I)) B.push({
            type: "char",
            value: Y,
            fullWidth: zD(Y) === 2,
            styles: Z
        })
    }
    return B
}
var xYB, vYB;
var bYB = lazyLoader(() => {
    Mh1();
    mnA();
    zaA();
    F7A();
    cUA();
    MUA();
    xYB = Object.freeze({
        type: "char",
        value: " ",
        fullWidth: !1,
        styles: []
    });
    vYB = new Intl.Segmenter
});

function bh1(A) {
    let Q = new Map;
    return (B) => {
        let {
            terminalWidth: G,
            terminalRows: Z,
            isTTY: I,
            ink2: Y
        } = B, J = A.yogaNode?.getComputedHeight(), W = A.yogaNode?.getComputedWidth(), X = J === void 0 || !Number.isFinite(J) || J < 0, F = W === void 0 || !Number.isFinite(W) || W < 0;
        if (!A.yogaNode || X || F) {
            if (A.yogaNode && (X || F)) g(`Invalid yoga dimensions: width=TextComponent{W}, height=TextComponent{J}, childNodes=TextComponent{A.childNodes.length}, terminalWidth=TextComponent{G}, terminalRows=TextComponent{Z}`);
            return {
                output: "",
                outputHeight: 0,
                staticOutput: "",
                rows: Z,
                columns: G,
                cursorVisible: !0,
                screen: L7A(G, 0),
                viewport: {
                    width: G,
                    height: 0
                },
                cursor: {
                    x: 0,
                    y: 0,
                    visible: !0
                }
            }
        }
        let V = new pUA({
            width: Math.floor(A.yogaNode.getComputedWidth()),
            height: Math.floor(A.yogaNode.getComputedHeight()),
            ink2: Y,
            charCache: Y ? Q : new Map
        });
        wh1(A, V, {
            skipStaticElements: !0
        });
        let K, D = A.staticNode,
            H = D?.yogaNode?.getComputedHeight(),
            C = D?.yogaNode?.getComputedWidth(),
            E = H !== void 0 && Number.isFinite(H) && H >= 0 && C !== void 0 && Number.isFinite(C) && C >= 0;
        if (!Y && D && D.yogaNode && E) K = new pUA({
            width: Math.floor(C),
            height: Math.floor(H),
            ink2: !1
        }), wh1(D, K, {
            skipStaticElements: !1
        });
        let {
            output: z,
            height: w,
            screen: N
        } = V.get();
        return {
            output: z,
            outputHeight: w,
            staticOutput: K ? `TextComponent{K.get().output}
` : "",
            rows: Z,
            columns: G,
            cursorVisible: !I || z === "",
            screen: N,
            viewport: {
                width: G,
                height: Z
            },
            cursor: {
                x: 0,
                y: N.height,
                visible: !0
            },
            progress: fYB(A)
        }
    }
}

function fYB(A) {
    if (A.nodeName === "ink-progress") {
        let Q = A.attributes.state;
        if (Q) return {
            state: Q,
            percentage: A.attributes.percentage
        }
    }
    for (let Q of A.childNodes)
        if ("nodeName" in Q && Q.nodeName !== "#text") {
            let B = fYB(Q);
            if (B) return B
        } return
}
var hYB = lazyLoader(() => {
    FYB();
    bYB();
    cUA();
    D0()
});

function waA(A, Q) {
    return {
        output: "",
        outputHeight: 0,
        staticOutput: "",
        rows: A,
        columns: Q,
        cursorVisible: !0,
        screen: L7A(0, 0),
        viewport: {
            width: 0,
            height: 0
        },
        cursor: {
            x: 0,
            y: 0,
            visible: !0
        }
    }
}

function gYB(A, Q) {
    let B = Q.rows !== A.rows || Q.columns !== A.columns,
        G = Q.outputHeight >= Q.rows,
        Z = A.outputHeight >= A.rows;
    return B || G || Z
}
var fh1 = lazyLoader(() => {
    cUA()
});
class mh1 {
    options;
    state;
    constructor(A, Q) {
        this.options = A;
        this.state = {
            fullStaticOutput: "",
            previousOutput: "",
            prevFrame: Q
        }
    }
    render(A) {
        let Q = this.options.ink2 ? this.render_v2(this.state.prevFrame, A) : this.render_v1(this.state.prevFrame, A);
        return this.state.prevFrame = A, Q
    }
    render_v1(A, Q) {
        if (this.options.debug) return this.getRenderOpsDebug_DEPRECATED(Q);
        if (!this.options.isTTY) return [{
            type: "stdout",
            content: Q.staticOutput
        }];
        if (gYB(A, Q)) return this.getRenderOpsForAllOutput_CAUSES_FLICKER(Q, "resize");
        if (!(Q.staticOutput && Q.staticOutput !== `
`) && Q.output === A.output) return hh1([], A, Q);
        let G = [...this.getRenderOpsForClearAndRenderStaticOutput(A, Q), ...this.renderEfficiently(A, Q)];
        return hh1(G, A, Q)
    }
    renderPreviousOutput_DEPRECATED() {
        if (!this.options.isTTY) return [{
            type: "stdout",
            content: this.state.prevFrame.output
        }, {
            type: "stdout",
            content: `
`
        }];
        else if (!this.options.debug) return this.getRenderOpsForDone(this.state.prevFrame);
        return []
    }
    reset() {
        this.state.prevFrame = waA(this.state.prevFrame.rows, this.state.prevFrame.columns), this.state.previousOutput = ""
    }
    renderEfficiently(A, Q) {
        let B = Q.output + `
`;
        if (B === this.state.previousOutput) return [];
        let G = this.state.previousOutput ? OUA(this.state.previousOutput, A.columns) : 0;
        this.state.previousOutput = B;
        let Z = [];
        if (!Q.cursorVisible && A.cursorVisible) Z.push({
            type: "cursorHide"
        });
        else if (Q.cursorVisible && !A.cursorVisible) Z.push({
            type: "cursorShow"
        });
        if (G > 0) Z.push({
            type: "clear",
            count: G
        });
        return Z.push({
            type: "stdout",
            content: Q.output
        }), Z.push({
            type: "stdout",
            content: `
`
        }), Z
    }
    getRenderOpsDebug_DEPRECATED(A) {
        if (A.staticOutput && A.staticOutput !== `
`) this.state.fullStaticOutput += A.staticOutput;
        return [{
            type: "stdout",
            content: this.state.fullStaticOutput
        }, {
            type: "stdout",
            content: A.output
        }]
    }
    getRenderOpsForAllOutput_CAUSES_FLICKER(A, Q) {
        if (A.staticOutput && A.staticOutput !== `
`) this.state.fullStaticOutput += A.staticOutput;
        this.state.previousOutput = A.output + `
`;
        let G = [];
        return G.push({
            type: "clearTerminal",
            reason: Q
        }), G.push({
            type: "stdout",
            content: this.state.fullStaticOutput
        }), G.push({
            type: "stdout",
            content: A.output
        }), G.push({
            type: "stdout",
            content: `
`
        }), G
    }
    getRenderOpsForClearAndRenderStaticOutput(A, Q) {
        if (!(Q.staticOutput && Q.staticOutput !== `
`)) return [];
        this.state.fullStaticOutput += Q.staticOutput;
        let G = this.state.previousOutput ? OUA(this.state.previousOutput, A.columns) : 0;
        this.state.previousOutput = "";
        let Z = [];
        if (G > 0) Z.push({
            type: "clear",
            count: G
        });
        return Z.push({
            type: "stdout",
            content: Q.staticOutput
        }), Z
    }
    getRenderOpsForDone(A) {
        if (this.state.previousOutput = "", !A.cursorVisible) return [{
            type: "cursorShow"
        }];
        return []
    }
    render_v2(A, Q) {
        if (Q.screen.height === 0 || Q.screen.width === 0) return [];
        if (Q.viewport.height < A.viewport.height || A.viewport.width !== 0 && Q.viewport.width !== A.viewport.width) return gh1(Q, "resize");
        let B = new dh1(A.cursor, Q.viewport.width),
            G = Math.max(Q.screen.height, 1) - Math.max(A.screen.height, 1),
            Z = G < 0,
            I = G > 0;
        if (Z) {
            let X = A.screen.height - Q.screen.height;
            if (X > A.viewport.height) return gh1(Q, "offscreen");
            B.txn((F) => [
                [{
                    type: "clear",
                    count: X
                }, {
                    type: "cursorMove",
                    x: 0,
                    y: -1
                }], {
                    dx: -F.x,
                    dy: -X
                }
            ])
        }
        let Y = Math.max(A.screen.height, Q.screen.height) - Q.viewport.height,
            J = [],
            W = void 0;
        for (let [X, F, V] of yYB(A.screen, Q.screen)) {
            if (I && X.y >= A.screen.height) continue;
            if (V && (V.width === 2 || V.width === 3)) continue;
            if (F && (F.width === 2 || F.width === 3) && !V) continue;
            if (V && jYB(V) && !F) continue;
            if (X.y < Y) return gh1(Q, "offscreen");
            if (uh1(B, X), V) {
                let K = V.hyperlink;
                W = uYB(B.diff, W, K), J = dYB(B, V, J)
            } else if (F) B.txn(() => [
                [{
                    type: "stdout",
                    content: " "
                }], {
                    dx: 1,
                    dy: 0
                }
            ])
        }
        if (J.length > 0) {
            let X = rc(J, []);
            if (X.length > 0) B.diff.push({
                type: "style",
                codes: X
            });
            J = []
        }
        if (W !== void 0) B.diff.push({
            type: "hyperlink",
            uri: ""
        }), W = void 0;
        if (I) mYB(B, Q, A.screen.height, Q.screen.height);
        if (Q.cursor.y >= Q.screen.height) B.txn((X) => {
            let F = Q.cursor.y - X.y;
            if (F > 0) {
                let K = [{
                    type: "carriageReturn"
                }];
                for (let D = 0; D < F; D++) K.push({
                    type: "stdout",
                    content: `
`
                });
                return [K, {
                    dx: -X.x,
                    dy: F
                }]
            }
            let V = Q.cursor.y - X.y;
            if (V !== 0 || X.x !== Q.cursor.x) return [
                [{
                    type: "carriageReturn"
                }, {
                    type: "cursorMove",
                    x: Q.cursor.x,
                    y: V
                }], {
                    dx: Q.cursor.x - X.x,
                    dy: V
                }
            ];
            return [
                [], {
                    dx: 0,
                    dy: 0
                }
            ]
        });
        else uh1(B, Q.cursor);
        return hh1(B.diff, A, Q)
    }
}

function hh1(A, Q, B) {
    let G = Q.progress,
        Z = B.progress;
    if (!(G?.state !== Z?.state || G?.percentage !== Z?.percentage)) return A;
    if (Z) return [...A, {
        type: "progress",
        state: Z
    }];
    else if (G) return [...A, {
        type: "progress",
        state: {
            state: "completed",
            percentage: 0
        }
    }];
    return A
}

function uYB(A, Q, B) {
    if (Q !== B) return A.push({
        type: "hyperlink",
        uri: B ?? ""
    }), B;
    return Q
}

function gh1(A, Q) {
    let B = new dh1({
        x: 0,
        y: 0
    }, A.viewport.width);
    return N96(B, A), [{
        type: "clearTerminal",
        reason: Q
    }, ...B.diff]
}

function N96(A, Q) {
    mYB(A, Q, 0, Q.screen.height)
}

function mYB(A, Q, B, G) {
    let Z = [],
        I = void 0;
    for (let Y = B; Y < G; Y += 1) {
        for (let J = 0; J < Q.screen.width; J += 1) {
            let W = {
                    x: J,
                    y: Y
                },
                X = $aA(Q.screen, W);
            if (!X) continue;
            if (X.width === 2 || X.width === 3) continue;
            uh1(A, W);
            let F = X.hyperlink;
            I = uYB(A.diff, I, F), Z = dYB(A, X, Z)
        }
        A.txn((J) => [
            [{
                type: "stdout",
                content: `
`
            }], {
                dx: -J.x,
                dy: 1
            }
        ])
    }
    if (I !== void 0) A.diff.push({
        type: "hyperlink",
        uri: ""
    });
    if (Z.length > 0) {
        let Y = rc(Z, []);
        if (Y.length > 0) A.diff.push({
            type: "style",
            codes: Y
        })
    }
    return A
}

function dYB(A, Q, B) {
    let G = rc(B, Q.styles);
    return A.txn((Z) => {
        let I = Q.width === 1 ? 2 : 1,
            Y = Z.x >= A.viewportWidth ? I - Z.x : I,
            J = Z.x >= A.viewportWidth ? 1 : 0;
        return [G.length > 0 ? [{
            type: "style",
            codes: G
        }, {
            type: "stdout",
            content: Q.char
        }] : [{
            type: "stdout",
            content: Q.char
        }], {
            dx: Y,
            dy: J
        }]
    }), Q.styles
}

function uh1(A, Q) {
    A.txn((B) => {
        let G = Q.x - B.x,
            Z = Q.y - B.y;
        if (B.x >= A.viewportWidth && Z <= 0) {
            let Y = Z - 1;
            return [
                [{
                    type: "resolvePendingWrap"
                }, {
                    type: "carriageReturn"
                }, {
                    type: "cursorMove",
                    x: Q.x,
                    y: Y
                }], {
                    dx: G,
                    dy: Z
                }
            ]
        }
        if (Z !== 0) return [
            [{
                type: "carriageReturn"
            }, {
                type: "cursorMove",
                x: Q.x,
                y: Z
            }], {
                dx: G,
                dy: Z
            }
        ];
        return [
            [{
                type: "cursorMove",
                x: G,
                y: Z
            }], {
                dx: G,
                dy: Z
            }
        ]
    })
}
class dh1 {
    viewportWidth;
    cursor;
    diff = [];
    constructor(A, Q) {
        this.viewportWidth = Q;
        this.cursor = {
            ...A
        }
    }
    txn(A) {
        let [Q, B] = A(this.cursor);
        for (let G of Q) this.diff.push(G);
        this.cursor = {
            x: this.cursor.x + B.dx,
            y: this.cursor.y + B.dy
        }
    }
}
var cYB = lazyLoader(() => {
    mf1();
    fh1();
    cUA();
    zaA()
});
var L96, nb;
var qaA = lazyLoader(() => {
    L96 = new Map, nb = L96
});
class M7A {
    _didStopImmediatePropagation = !1;
    didStopImmediatePropagation() {
        return this._didStopImmediatePropagation
    }
    stopImmediatePropagation() {
        this._didStopImmediatePropagation = !0
    }
}
import {
    EventEmitter as M96
} from "events";
var oc;
var NaA = lazyLoader(() => {
    oc = class oc extends M96 {
        emit(A, ...Q) {
            if (A === "error") return super.emit(A, ...Q);
            let B = this.rawListeners(A);
            if (B.length === 0) return !1;
            let G = Q[0] instanceof M7A ? Q[0] : null;
            for (let Z of B)
                if (Z.apply(this, Q), G?.didStopImmediatePropagation()) break;
            return !0
        }
    }
});
var pYB, lYB, LaA;
var ch1 = lazyLoader(() => {
    pYB = esmImport(VA(), 1), lYB = pYB.createContext({
        exit() {}
    });
    lYB.displayName = "InternalAppContext";
    LaA = lYB
});
var iYB, nYB, MaA;
var ph1 = lazyLoader(() => {
    NaA();
    iYB = esmImport(VA(), 1), nYB = iYB.createContext({
        stdin: process.stdin,
        internal_eventEmitter: new oc,
        setRawMode() {},
        isRawModeSupported: !1,
        internal_exitOnCtrlC: !0
    });
    nYB.displayName = "InternalStdinContext";
    MaA = nYB
});
var aYB, sYB, OaA;
var RaA = lazyLoader(() => {
    aYB = esmImport(VA(), 1), sYB = aYB.createContext({
        activeId: void 0,
        add() {},
        remove() {},
        activate() {},
        deactivate() {},
        enableFocus() {},
        disableFocus() {},
        focusNext() {},
        focusPrevious() {},
        focus() {}
    });
    sYB.displayName = "InternalFocusContext";
    OaA = sYB
});
var oYB = moduleWrapper((Bg7, rYB) => {
    var O96 = /[|\\{}()[\]^TextComponent+*?.-]/g;
    rYB.exports = (A) => {
        if (typeof A !== "string") throw TypeError("Expected a string");
        return A.replace(O96, "\\TextComponent&")
    }
});
var QJB = moduleWrapper((Gg7, AJB) => {
    var R96 = oYB(),
        T96 = typeof process === "object" && process && typeof process.cwd === "function" ? process.cwd() : ".",
        eYB = [].concat(nodeRequire("module").builtinModules, "bootstrap_node", "node").map((A) => new RegExp(`(?:\\((?:node:)?TextComponent{A}(?:\\.js)?:\\d+:\\d+\\)TextComponent|^\\s*at (?:node:)?TextComponent{A}(?:\\.js)?:\\d+:\\d+TextComponent)`));
    eYB.push(/\((?:node:)?internal\/[^:]+:\d+:\d+\)TextComponent/, /\s*at (?:node:)?internal\/[^:]+:\d+:\d+TextComponent/, /\/\.node-spawn-wrap-\w+-\w+\/node:\d+:\d+\)?TextComponent/);
    class lh1 {
        constructor(A) {
            if (A = {
                    ignoredPackages: [],
                    ...A
                }, "internals" in A === !1) A.internals = lh1.nodeInternals();
            if ("cwd" in A === !1) A.cwd = T96;
            this._cwd = A.cwd.replace(/\\/g, "/"), this._internals = [].concat(A.internals, P96(A.ignoredPackages)), this._wrapCallSite = A.wrapCallSite || !1
        }
        static nodeInternals() {
            return [...eYB]
        }
        clean(A, Q = 0) {
            if (Q = " ".repeat(Q), !Array.isArray(A)) A = A.split(`
`);
            if (!/^\s*at /.test(A[0]) && /^\s*at /.test(A[1])) A = A.slice(1);
            let B = !1,
                G = null,
                Z = [];
            return A.forEach((I) => {
                if (I = I.replace(/\\/g, "/"), this._internals.some((J) => J.test(I))) return;
                let Y = /^\s*at /.test(I);
                if (B) I = I.trimEnd().replace(/^(\s+)at /, "$1");
                else if (I = I.trim(), Y) I = I.slice(3);
                if (I = I.replace(`TextComponent{this._cwd}/`, ""), I)
                    if (Y) {
                        if (G) Z.push(G), G = null;
                        Z.push(I)
                    } else B = !0, G = I
            }), Z.map((I) => `TextComponent{Q}TextComponent{I}
`).join("")
        }
        captureString(A, Q = this.captureString) {
            if (typeof A === "function") Q = A, A = 1 / 0;
            let {
                stackTraceLimit: B
            } = Error;
            if (A) Error.stackTraceLimit = A;
            let G = {};
            Error.captureStackTrace(G, Q);
            let {
                stack: Z
            } = G;
            return Error.stackTraceLimit = B, this.clean(Z)
        }
        capture(A, Q = this.capture) {
            if (typeof A === "function") Q = A, A = 1 / 0;
            let {
                prepareStackTrace: B,
                stackTraceLimit: G
            } = Error;
            if (Error.prepareStackTrace = (Y, J) => {
                    if (this._wrapCallSite) return J.map(this._wrapCallSite);
                    return J
                }, A) Error.stackTraceLimit = A;
            let Z = {};
            Error.captureStackTrace(Z, Q);
            let {
                stack: I
            } = Z;
            return Object.assign(Error, {
                prepareStackTrace: B,
                stackTraceLimit: G
            }), I
        }
        at(A = this.at) {
            let [Q] = this.capture(1, A);
            if (!Q) return {};
            let B = {
                line: Q.getLineNumber(),
                column: Q.getColumnNumber()
            };
            if (tYB(B, Q.getFileName(), this._cwd), Q.isConstructor()) Object.defineProperty(B, "constructor", {
                value: !0,
                configurable: !0
            });
            if (Q.isEval()) B.evalOrigin = Q.getEvalOrigin();
            if (Q.isNative()) B.native = !0;
            let G;
            try {
                G = Q.getTypeName()
            } catch (Y) {}
            if (G && G !== "Object" && G !== "[object Object]") B.type = G;
            let Z = Q.getFunctionName();
            if (Z) B.function = Z;
            let I = Q.getMethodName();
            if (I && Z !== I) B.method = I;
            return B
        }
        parseLine(A) {
            let Q = A && A.match(j96);
            if (!Q) return null;
            let B = Q[1] === "new",
                G = Q[2],
                Z = Q[3],
                I = Q[4],
                Y = Number(Q[5]),
                J = Number(Q[6]),
                W = Q[7],
                X = Q[8],
                F = Q[9],
                V = Q[10] === "native",
                K = Q[11] === ")",
                D, H = {};
            if (X) H.line = Number(X);
            if (F) H.column = Number(F);
            if (K && W) {
                let C = 0;
                for (let E = W.length - 1; E > 0; E--)
                    if (W.charAt(E) === ")") C++;
                    else if (W.charAt(E) === "(" && W.charAt(E - 1) === " ") {
                    if (C--, C === -1 && W.charAt(E - 1) === " ") {
                        let z = W.slice(0, E - 1);
                        W = W.slice(E + 1), G += ` (TextComponent{z}`;
                        break
                    }
                }
            }
            if (G) {
                let C = G.match(S96);
                if (C) G = C[1], D = C[2]
            }
            if (tYB(H, W, this._cwd), B) Object.defineProperty(H, "constructor", {
                value: !0,
                configurable: !0
            });
            if (Z) H.evalOrigin = Z, H.evalLine = Y, H.evalColumn = J, H.evalFile = I && I.replace(/\\/g, "/");
            if (V) H.native = !0;
            if (G) H.function = G;
            if (D && G !== D) H.method = D;
            return H
        }
    }

    function tYB(A, Q, B) {
        if (Q) {
            if (Q = Q.replace(/\\/g, "/"), Q.startsWith(`TextComponent{B}/`)) Q = Q.slice(B.length + 1);
            A.file = Q
        }
    }

    function P96(A) {
        if (A.length === 0) return [];
        let Q = A.map((B) => R96(B));
        return new RegExp(`[/\\\\]node_modules[/\\\\](?:TextComponent{Q.join("|")})[/\\\\][^:]+:\\d+:\\d+`)
    }
    var j96 = new RegExp("^(?:\\s*at )?(?:(new) )?(?:(.*?) \\()?(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?(?:(.+?):(\\d+):(\\d+)|(native))(\\)?)TextComponent"),
        S96 = /^(.*?) \[as (.*?)\]TextComponent/;
    AJB.exports = lh1
});
var _96 = (A, Q = 2) => {
        return A.replace(/^\t+/gm, (B) => " ".repeat(B.length * Q))
    },
    BJB;
var GJB = lazyLoader(() => {
    BJB = _96
});
var k96 = (A, Q) => {
        let B = [],
            G = A - Q,
            Z = A + Q;
        for (let I = G; I <= Z; I++) B.push(I);
        return B
    },
    y96 = (A, Q, B = {}) => {
        var G;
        if (typeof A !== "string") throw TypeError("Source code is missing.");
        if (!Q || Q < 1) throw TypeError("Line number must start from `1`.");
        let Z = BJB(A).split(/\r?\n/);
        if (Q > Z.length) return;
        return k96(Q, (G = B.around) !== null && G !== void 0 ? G : 3).filter((I) => Z[I - 1] !== void 0).map((I) => ({
            line: I,
            value: Z[I - 1]
        }))
    },
    ZJB;
var IJB = lazyLoader(() => {
    GJB();
    ZJB = y96
});
var TaA, YJB, VU;
var lUA = lazyLoader(() => {
    yh1();
    TaA = esmImport(VA(), 1), YJB = TaA.forwardRef(({
        children: A,
        flexWrap: Q = "nowrap",
        flexDirection: B = "row",
        flexGrow: G = 0,
        flexShrink: Z = 1,
        ...I
    }, Y) => {
        return NW(I.margin, "margin"), NW(I.marginX, "marginX"), NW(I.marginY, "marginY"), NW(I.marginTop, "marginTop"), NW(I.marginBottom, "marginBottom"), NW(I.marginLeft, "marginLeft"), NW(I.marginRight, "marginRight"), NW(I.padding, "padding"), NW(I.paddingX, "paddingX"), NW(I.paddingY, "paddingY"), NW(I.paddingTop, "paddingTop"), NW(I.paddingBottom, "paddingBottom"), NW(I.paddingLeft, "paddingLeft"), NW(I.paddingRight, "paddingRight"), NW(I.gap, "gap"), NW(I.columnGap, "columnGap"), NW(I.rowGap, "rowGap"), TaA.default.createElement("ink-box", {
            ref: Y,
            style: {
                flexWrap: Q,
                flexDirection: B,
                flexGrow: G,
                flexShrink: Z,
                ...I,
                overflowX: I.overflowX ?? I.overflow ?? "visible",
                overflowY: I.overflowY ?? I.overflow ?? "visible"
            }
        }, A)
    });
    YJB.displayName = "Box";
    VU = YJB
});

function ah1({
    children: A,
    initialState: Q
}) {
    let [B, G] = tc.useState(Q), [Z, I] = tc.useState(null), Y = PaA.useMemo(() => ({
        theme: B,
        setTheme: (J) => {
            d0({
                ...L1(),
                theme: J
            }), G(J), ih1(J), I(null)
        },
        setPreviewTheme: (J) => {
            I(J), ih1(J)
        },
        savePreview: () => {
            if (Z !== null) d0({
                ...L1(),
                theme: Z
            }), G(Z), I(null)
        },
        currentTheme: Z ?? B
    }), [B, Z]);
    return PaA.default.createElement(nh1.Provider, {
        value: Y
    }, A)
}

function $B() {
    let {
        currentTheme: A,
        setTheme: Q
    } = tc.useContext(nh1);
    return [A, Q]
}

function sh1() {
    let {
        setPreviewTheme: A,
        savePreview: Q
    } = tc.useContext(nh1);
    return {
        setPreviewTheme: A,
        savePreview: Q
    }
}
var PaA, tc, nh1;
var iUA = lazyLoader(() => {
    jQ();
    rh1();
    PaA = esmImport(VA(), 1), tc = esmImport(VA(), 1), nh1 = tc.createContext({
        theme: null,
        setTheme: (A) => A,
        setPreviewTheme: (A) => A,
        savePreview: () => {},
        currentTheme: null
    })
});

function Tt({
    color: A,
    backgroundColor: Q,
    dim: B = !1,
    bold: G = !1,
    italic: Z = !1,
    underline: I = !1,
    strikethrough: Y = !1,
    inverse: J = !1,
    wrap: W = "wrap",
    children: X
}) {
    if (X === void 0 || X === null) return null;
    let F = {
        ...A && {
            color: A
        },
        ...Q && {
            backgroundColor: Q
        },
        ...B && {
            dim: B
        },
        ...G && {
            bold: G
        },
        ...Z && {
            italic: Z
        },
        ...I && {
            underline: I
        },
        ...Y && {
            strikethrough: Y
        },
        ...J && {
            inverse: J
        }
    };
    return JJB.default.createElement("ink-text", {
        style: {
            flexGrow: 0,
            flexShrink: 1,
            flexDirection: "row",
            textWrap: W
        },
        textStyles: F
    }, X)
}
var JJB;
var jaA = lazyLoader(() => {
    JJB = esmImport(VA(), 1)
});

function x96(A, Q) {
    if (!A) return;
    if (A.startsWith("rgb(") || A.startsWith("#") || A.startsWith("ansi256(") || A.startsWith("ansi:")) return A;
    return Q[A]
}

function TextComponent({
    color: A,
    backgroundColor: Q,
    dimColor: B = !1,
    bold: G = !1,
    italic: Z = !1,
    underline: I = !1,
    strikethrough: Y = !1,
    inverse: J = !1,
    wrap: W = "wrap",
    children: X
}) {
    let [F] = $B(), V = w7A(F), K = B ? V.inactive : x96(A, V), D = Q ? V[Q] : void 0;
    return WJB.default.createElement(Tt, {
        color: K,
        backgroundColor: D,
        bold: G,
        italic: Z,
        underline: I,
        strikethrough: Y,
        inverse: J,
        wrap: W
    }, X)
}
var WJB;
var oh1 = lazyLoader(() => {
    KaA();
    iUA();
    jaA();
    WJB = esmImport(VA(), 1)
});
import * as SaA from "node:fs";
import {
    cwd as VJB
} from "node:process";

function eh1({
    error: A
}) {
    let Q = A.stack ? A.stack.split(`
`).slice(1) : void 0,
        B = Q ? FJB.parseLine(Q[0]) : void 0,
        G = XJB(B?.file),
        Z, I = 0;
    if (G && B?.line && SaA.existsSync(G)) {
        let Y = SaA.readFileSync(G, "utf8");
        if (Z = ZJB(Y, B.line), Z)
            for (let {
                    line: J
                }
                of Z) I = Math.max(I, String(J).length)
    }
    return fX.default.createElement(VU, {
        flexDirection: "column",
        padding: 1
    }, fX.default.createElement(VU, null, fX.default.createElement(TextComponent, {
        backgroundColor: "error",
        color: "text"
    }, " ", "ERROR", " "), fX.default.createElement(TextComponent, null, " ", A.message)), B && G && fX.default.createElement(VU, {
        marginTop: 1
    }, fX.default.createElement(TextComponent, {
        dimColor: !0
    }, G, ":", B.line, ":", B.column)), B && Z && fX.default.createElement(VU, {
        marginTop: 1,
        flexDirection: "column"
    }, Z.map(({
        line: Y,
        value: J
    }) => fX.default.createElement(VU, {
        key: Y
    }, fX.default.createElement(VU, {
        width: I + 1
    }, fX.default.createElement(TextComponent, {
        dimColor: Y !== B.line,
        backgroundColor: Y === B.line ? "error" : void 0,
        color: Y === B.line ? "text" : void 0
    }, String(Y).padStart(I, " "), ":")), fX.default.createElement(TextComponent, {
        key: Y,
        backgroundColor: Y === B.line ? "error" : void 0,
        color: Y === B.line ? "text" : void 0
    }, " " + J)))), A.stack && fX.default.createElement(VU, {
        marginTop: 1,
        flexDirection: "column"
    }, A.stack.split(`
`).slice(1).map((Y) => {
        let J = FJB.parseLine(Y);
        if (!J) return fX.default.createElement(VU, {
            key: Y
        }, fX.default.createElement(TextComponent, {
            dimColor: !0
        }, "- "), fX.default.createElement(TextComponent, {
            dimColor: !0,
            bold: !0
        }, Y));
        return fX.default.createElement(VU, {
            key: Y
        }, fX.default.createElement(TextComponent, {
            dimColor: !0
        }, "- "), fX.default.createElement(TextComponent, {
            dimColor: !0,
            bold: !0
        }, J.function), fX.default.createElement(TextComponent, {
            dimColor: !0
        }, " ", "(", XJB(J.file) ?? "", ":", J.line, ":", J.column, ")"))
    })))
}