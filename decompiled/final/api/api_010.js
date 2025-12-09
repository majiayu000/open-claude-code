/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_010.js
 * 处理时间: 2025-12-09T03:41:36.092Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       ( 18x) esmImport(module) - ESM import
 * V0       (  4x) parseBoolean(value) - Parse bool env
 * UA       (  2x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 10/30
 * Lines: 189691 - 191189 (1499 lines)
 * Original file: cli.js
 */

            return A.forEach((Y) => {
                if (I.test(Y)) {
                    if (!G || Z.compare(Y) === -1) G = Y, Z = new I66(G, B)
                }
            }), G
        };
    gWB.exports = J66
});
var dWB = U((uu7, mWB) => {
    var W66 = vH(),
        X66 = VM(),
        F66 = (A, Q, B) => {
            let G = null,
                Z = null,
                I = null;
            try {
                I = new X66(Q, B)
            } catch (Y) {
                return null
            }
            return A.forEach((Y) => {
                if (I.test(Y)) {
                    if (!G || Z.compare(Y) === 1) G = Y, Z = new W66(G, B)
                }
            }), G
        };
    mWB.exports = F66
});
var lWB = U((mu7, pWB) => {
    var Eg1 = vH(),
        V66 = VM(),
        cWB = A$A(),
        K66 = (A, Q) => {
            A = new V66(A, Q);
            let B = new Eg1("0.0.0");
            if (A.test(B)) return B;
            if (B = new Eg1("0.0.0-0"), A.test(B)) return B;
            B = null;
            for (let G = 0; G < A.set.length; ++G) {
                let Z = A.set[G],
                    I = null;
                if (Z.forEach((Y) => {
                        let J = new Eg1(Y.semver.version);
                        switch (Y.operator) {
                            case ">":
                                if (J.prerelease.length === 0) J.patch++;
                                else J.prerelease.push(0);
                                J.raw = J.format();
                            case "":
                            case ">=":
                                if (!I || cWB(J, I)) I = J;
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw Error(`Unexpected operation: ${Y.operator}`)
                        }
                    }), I && (!B || cWB(B, I))) B = I
            }
            if (B && A.test(B)) return B;
            return null
        };
    pWB.exports = K66
});
var nWB = U((du7, iWB) => {
    var D66 = VM(),
        H66 = (A, Q) => {
            try {
                return new D66(A, Q).range || "*"
            } catch (B) {
                return null
            }
        };
    iWB.exports = H66
});
var naA = U((cu7, oWB) => {
    var C66 = vH(),
        rWB = G$A(),
        {
            ANY: E66
        } = rWB,
        z66 = VM(),
        U66 = P7A(),
        aWB = A$A(),
        sWB = daA(),
        $66 = caA(),
        w66 = Q$A(),
        q66 = (A, Q, B, G) => {
            A = new C66(A, G), Q = new z66(Q, G);
            let Z, I, Y, J, W;
            switch (B) {
                case ">":
                    Z = aWB, I = $66, Y = sWB, J = ">", W = ">=";
                    break;
                case "<":
                    Z = sWB, I = w66, Y = aWB, J = "<", W = "<=";
                    break;
                default:
                    throw TypeError('Must provide a hilo val of "<" or ">"')
            }
            if (U66(A, Q, G)) return !1;
            for (let X = 0; X < Q.set.length; ++X) {
                let F = Q.set[X],
                    V = null,
                    K = null;
                if (F.forEach((D) => {
                        if (D.semver === E66) D = new rWB(">=0.0.0");
                        if (V = V || D, K = K || D, Z(D.semver, V.semver, G)) V = D;
                        else if (Y(D.semver, K.semver, G)) K = D
                    }), V.operator === J || V.operator === W) return !1;
                if ((!K.operator || K.operator === J) && I(A, K.semver)) return !1;
                else if (K.operator === W && Y(A, K.semver)) return !1
            }
            return !0
        };
    oWB.exports = q66
});
var eWB = U((pu7, tWB) => {
    var N66 = naA(),
        L66 = (A, Q, B) => N66(A, Q, ">", B);
    tWB.exports = L66
});
var QXB = U((lu7, AXB) => {
    var M66 = naA(),
        O66 = (A, Q, B) => M66(A, Q, "<", B);
    AXB.exports = O66
});
var ZXB = U((iu7, GXB) => {
    var BXB = VM(),
        R66 = (A, Q, B) => {
            return A = new BXB(A, B), Q = new BXB(Q, B), A.intersects(Q, B)
        };
    GXB.exports = R66
});
var YXB = U((nu7, IXB) => {
    var T66 = P7A(),
        P66 = FM();
    IXB.exports = (A, Q, B) => {
        let G = [],
            Z = null,
            I = null,
            Y = A.sort((F, V) => P66(F, V, B));
        for (let F of Y)
            if (T66(F, Q, B)) {
                if (I = F, !Z) Z = F
            } else {
                if (I) G.push([Z, I]);
                I = null, Z = null
            } if (Z) G.push([Z, null]);
        let J = [];
        for (let [F, V] of G)
            if (F === V) J.push(F);
            else if (!V && F === Y[0]) J.push("*");
        else if (!V) J.push(`>=${F}`);
        else if (F === Y[0]) J.push(`<=${V}`);
        else J.push(`${F} - ${V}`);
        let W = J.join(" || "),
            X = typeof Q.raw === "string" ? Q.raw : String(Q);
        return W.length < X.length ? W : Q
    }
});
var KXB = U((au7, VXB) => {
    var JXB = VM(),
        Ug1 = G$A(),
        {
            ANY: zg1
        } = Ug1,
        I$A = P7A(),
        $g1 = FM(),
        j66 = (A, Q, B = {}) => {
            if (A === Q) return !0;
            A = new JXB(A, B), Q = new JXB(Q, B);
            let G = !1;
            A: for (let Z of A.set) {
                for (let I of Q.set) {
                    let Y = _66(Z, I, B);
                    if (G = G || Y !== null, Y) continue A
                }
                if (G) return !1
            }
            return !0
        },
        S66 = [new Ug1(">=0.0.0-0")],
        WXB = [new Ug1(">=0.0.0")],
        _66 = (A, Q, B) => {
            if (A === Q) return !0;
            if (A.length === 1 && A[0].semver === zg1)
                if (Q.length === 1 && Q[0].semver === zg1) return !0;
                else if (B.includePrerelease) A = S66;
            else A = WXB;
            if (Q.length === 1 && Q[0].semver === zg1)
                if (B.includePrerelease) return !0;
                else Q = WXB;
            let G = new Set,
                Z, I;
            for (let D of A)
                if (D.operator === ">" || D.operator === ">=") Z = XXB(Z, D, B);
                else if (D.operator === "<" || D.operator === "<=") I = FXB(I, D, B);
            else G.add(D.semver);
            if (G.size > 1) return null;
            let Y;
            if (Z && I) {
                if (Y = $g1(Z.semver, I.semver, B), Y > 0) return null;
                else if (Y === 0 && (Z.operator !== ">=" || I.operator !== "<=")) return null
            }
            for (let D of G) {
                if (Z && !I$A(D, String(Z), B)) return null;
                if (I && !I$A(D, String(I), B)) return null;
                for (let H of Q)
                    if (!I$A(D, String(H), B)) return !1;
                return !0
            }
            let J, W, X, F, V = I && !B.includePrerelease && I.semver.prerelease.length ? I.semver : !1,
                K = Z && !B.includePrerelease && Z.semver.prerelease.length ? Z.semver : !1;
            if (V && V.prerelease.length === 1 && I.operator === "<" && V.prerelease[0] === 0) V = !1;
            for (let D of Q) {
                if (F = F || D.operator === ">" || D.operator === ">=", X = X || D.operator === "<" || D.operator === "<=", Z) {
                    if (K) {
                        if (D.semver.prerelease && D.semver.prerelease.length && D.semver.major === K.major && D.semver.minor === K.minor && D.semver.patch === K.patch) K = !1
                    }
                    if (D.operator === ">" || D.operator === ">=") {
                        if (J = XXB(Z, D, B), J === D && J !== Z) return !1
                    } else if (Z.operator === ">=" && !I$A(Z.semver, String(D), B)) return !1
                }
                if (I) {
                    if (V) {
                        if (D.semver.prerelease && D.semver.prerelease.length && D.semver.major === V.major && D.semver.minor === V.minor && D.semver.patch === V.patch) V = !1
                    }
                    if (D.operator === "<" || D.operator === "<=") {
                        if (W = FXB(I, D, B), W === D && W !== I) return !1
                    } else if (I.operator === "<=" && !I$A(I.semver, String(D), B)) return !1
                }
                if (!D.operator && (I || Z) && Y !== 0) return !1
            }
            if (Z && X && !I && Y !== 0) return !1;
            if (I && F && !Z && Y !== 0) return !1;
            if (K || V) return !1;
            return !0
        },
        XXB = (A, Q, B) => {
            if (!A) return Q;
            let G = $g1(A.semver, Q.semver, B);
            return G > 0 ? A : G < 0 ? Q : Q.operator === ">" && A.operator === ">=" ? Q : A
        },
        FXB = (A, Q, B) => {
            if (!A) return Q;
            let G = $g1(A.semver, Q.semver, B);
            return G < 0 ? A : G > 0 ? Q : Q.operator === "<" && A.operator === "<=" ? Q : A
        };
    VXB.exports = j66
});
var WE = U((su7, CXB) => {
    var wg1 = R7A(),
        DXB = tUA(),
        k66 = vH(),
        HXB = Wg1(),
        y66 = Pt(),
        x66 = uJB(),
        v66 = dJB(),
        b66 = lJB(),
        f66 = aJB(),
        h66 = rJB(),
        g66 = tJB(),
        u66 = AWB(),
        m66 = BWB(),
        d66 = FM(),
        c66 = YWB(),
        p66 = WWB(),
        l66 = maA(),
        i66 = KWB(),
        n66 = HWB(),
        a66 = A$A(),
        s66 = daA(),
        r66 = Xg1(),
        o66 = Fg1(),
        t66 = Q$A(),
        e66 = caA(),
        A56 = Vg1(),
        Q56 = Kg1(),
        B56 = G$A(),
        G56 = VM(),
        Z56 = P7A(),
        I56 = hWB(),
        Y56 = uWB(),
        J56 = dWB(),
        W56 = lWB(),
        X56 = nWB(),
        F56 = naA(),
        V56 = eWB(),
        K56 = QXB(),
        D56 = ZXB(),
        H56 = YXB(),
        C56 = KXB();
    CXB.exports = {
        parse: y66,
        valid: x66,
        clean: v66,
        inc: b66,
        diff: f66,
        major: h66,
        minor: g66,
        patch: u66,
        prerelease: m66,
        compare: d66,
        rcompare: c66,
        compareLoose: p66,
        compareBuild: l66,
        sort: i66,
        rsort: n66,
        gt: a66,
        lt: s66,
        eq: r66,
        neq: o66,
        gte: t66,
        lte: e66,
        cmp: A56,
        coerce: Q56,
        Comparator: B56,
        Range: G56,
        satisfies: Z56,
        toComparators: I56,
        maxSatisfying: Y56,
        minSatisfying: J56,
        minVersion: W56,
        validRange: X56,
        outside: F56,
        gtr: V56,
        ltr: K56,
        intersects: D56,
        simplifyRange: H56,
        subset: C56,
        SemVer: k66,
        re: wg1.re,
        src: wg1.src,
        tokens: wg1.t,
        SEMVER_SPEC_VERSION: DXB.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: DXB.RELEASE_TYPES,
        compareIdentifiers: HXB.compareIdentifiers,
        rcompareIdentifiers: HXB.rcompareIdentifiers
    }
});

function E56() {
    return process.platform === "win32" && !!process.env.WT_SESSION
}

function z56() {
    if (E56()) return !0;
    if (process.platform === "win32" && process.env.TERM_PROGRAM === "vscode" && process.env.TERM_PROGRAM_VERSION) return !0;
    return !1
}

function qg1() {
    if (process.platform === "win32")
        if (z56()) return "\x1B[2J\x1B[3J\x1B[H";
        else return "\x1B[2J\x1B[0f";
    else return "\x1B[2J\x1B[3J\x1B[H"
}
var ru7;
var EXB = L(() => {
    ru7 = qg1()
});

function U56() {
    if (!process.stdout.isTTY) return !1;
    if (process.env.WT_SESSION) return !1;
    if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask) return !0;
    let A = Y$A.coerce(process.env.TERM_PROGRAM_VERSION);
    if (!A) return !1;
    if (process.env.TERM_PROGRAM === "ghostty") return Y$A.gte(A, "1.2.0");
    if (process.env.TERM_PROGRAM === "iTerm.app") return Y$A.gte(A, "3.6.6");
    return !1
}

function $56(A) {
    return `${xh1}8${N7A}${N7A}${A}${q7A}`
}

function Ng1(A, Q) {
    if (Q.length === 0) return;
    let B = MYB;
    for (let G of Q) switch (G.type) {
        case "stdout":
            B += G.content;
            break;
        case "clear":
            if (G.count > 0) B += XM.eraseLines(G.count);
            break;
        case "clearTerminal":
            B += qg1();
            break;
        case "cursorHide":
            B += XM.cursorHide;
            break;
        case "cursorShow":
            B += XM.cursorShow;
            break;
        case "cursorMove":
            B += XM.cursorMove(G.x, G.y);
            break;
        case "carriageReturn":
            B += "\r";
            break;
        case "resolvePendingWrap":
            B += " \b";
            break;
        case "hyperlink":
            B += $56(G.uri);
            break;
        case "style":
            B += Rt(G.codes);
            break;
        case "progress":
            if (U56()) B += w56(G.state);
            break
    }
    B += OYB, A.stdout.write(B)
}

function w56(A) {
    let Q = q56(A.state),
        B = A.percentage ?? 0,
        G = Math.max(0, Math.min(100, Math.round(B)));
    return `${xh1}9;4;${Q};${G}${q7A}`
}

function q56(A) {
    switch (A) {
        case "completed":
            return 0;
        case "error":
            return 2;
        case "indeterminate":
            return 3;
        case "running":
            return 1
    }
}
var Y$A;
var zXB = L(() => {
    zaA();
    yaA();
    EXB();
    Y$A = GA(WE(), 1)
});
class aaA {
    options;
    log;
    terminal;
    scheduleRender;
    isUnmounted = !1;
    isPaused = !1;
    container;
    rootNode;
    renderer;
    exitPromise;
    restoreConsole;
    unsubscribeTTYHandlers;
    terminalColumns;
    terminalRows;
    currentNode = null;
    constructor(A) {
        this.options = A;
        if (Nf1(this), this.options.patchConsole) this.restoreConsole = this.patchConsole();
        if (this.terminal = {
                stdout: A.stdout,
                stderr: A.stderr
            }, this.terminalColumns = A.stdout.columns || 80, this.terminalRows = A.stdout.rows || 24, this.log = new mh1({
                debug: A.debug,
                isTTY: A.stdout.isTTY || !1,
                onFlicker: A.onFlicker,
                ink2: A.ink2
            }, waA(this.terminalRows, this.terminalColumns)), this.scheduleRender = A.debug ? this.onRender : qf1(this.onRender, 32, {
                leading: !0,
                trailing: !0
            }), this.isUnmounted = !1, this.unsubscribeExit = XxA(this.unmount, {
                alwaysLast: !1
            }), A.stdout.isTTY) A.stdout.on("resize", this.handleResize), process.on("SIGCONT", this.handleResume), this.unsubscribeTTYHandlers = () => {
            A.stdout.off("resize", this.handleResize), process.off("SIGCONT", this.handleResume)
        };
        if (this.rootNode = anA("ink-root"), this.renderer = bh1(this.rootNode), this.rootNode.onRender = this.scheduleRender, this.rootNode.onImmediateRender = this.onRender, this.rootNode.onComputeLayout = () => {
                if (this.isUnmounted) return;
                if (this.rootNode.yogaNode) this.rootNode.yogaNode.setWidth(this.terminalColumns), this.rootNode.yogaNode.calculateLayout(void 0, void 0, Et.LTR)
            }, this.container = sc.createContainer(this.rootNode, 0, null, !1, null, "id", () => {}, null), process.env.DEV === "true") sc.injectIntoDevTools({
            bundleType: 0,
            version: "16.13.1",
            rendererPackageName: "ink"
        })
    }
    handleResume = () => {
        if (!this.options.stdout.isTTY) return;
        this.log.reset()
    };
    handleResize = () => {
        if (this.terminalColumns = this.options.stdout.columns || 80, this.terminalRows = this.options.stdout.rows || 24, this.currentNode !== null) this.render(this.currentNode);
        this.scheduleRender()
    };
    resolveExitPromise = () => {};
    rejectExitPromise = () => {};
    unsubscribeExit = () => {};
    setTheme(A) {
        this.options.theme = A
    }
    onRender() {
        if (this.isUnmounted || this.isPaused) return;
        let A = this.options.stdout.rows || 24,
            Q = this.options.stdout.columns || 80,
            B = this.renderer({
                terminalWidth: Q,
                terminalRows: A,
                isTTY: this.options.stdout.isTTY,
                ink2: this.options.ink2
            }),
            G = this.log.render(B);
        for (let Z of G)
            if (Z.type === "clearTerminal") this.options.onFlicker?.(B.outputHeight, B.rows, this.options.ink2, Z.reason);
        Ng1(this.terminal, G)
    }
    pause() {
        sc.flushSync(), this.onRender(), this.isPaused = !0
    }
    resume() {
        this.isPaused = !1, this.onRender()
    }
    stdinListeners = [];
    wasRawMode = !1;
    suspendStdin() {
        let A = this.options.stdin;
        if (!A.isTTY) return;
        A.listeners("readable").forEach((G) => {
            this.stdinListeners.push({
                event: "readable",
                listener: G
            }), A.removeListener("readable", G)
        });
        let B = A;
        if (B.isRaw && B.setRawMode) B.setRawMode(!1), this.wasRawMode = !0
    }
    resumeStdin() {
        let A = this.options.stdin;
        if (!A.isTTY) return;
        if (this.stdinListeners.forEach(({
                event: Q,
                listener: B
            }) => {
                A.addListener(Q, B)
            }), this.stdinListeners = [], this.wasRawMode) {
            let Q = A;
            if (Q.setRawMode) Q.setRawMode(!0);
            this.wasRawMode = !1
        }
    }
    render(A) {
        this.currentNode = A;
        let Q = UXB.default.createElement(baA, {
            initialTheme: this.options.theme,
            stdin: this.options.stdin,
            stdout: this.options.stdout,
            stderr: this.options.stderr,
            exitOnCtrlC: this.options.exitOnCtrlC,
            onExit: this.unmount,
            ink2: this.options.ink2,
            terminalColumns: this.terminalColumns,
            terminalRows: this.terminalRows
        }, A);
        sc.updateContainer(Q, this.container, null, czA)
    }
    unmount(A) {
        if (this.isUnmounted) return;
        if (this.onRender(), this.unsubscribeExit(), typeof this.restoreConsole === "function") this.restoreConsole();
        this.unsubscribeTTYHandlers?.();
        let Q = this.log.renderPreviousOutput_DEPRECATED();
        if (Ng1(this.terminal, Q), this.isUnmounted = !0, this.scheduleRender.cancel?.(), sc.updateContainer(null, this.container, null, czA), nb.delete(this.options.stdout), A instanceof Error) this.rejectExitPromise(A);
        else this.resolveExitPromise()
    }
    async waitUntilExit() {
        return this.exitPromise ||= new Promise((A, Q) => {
            this.resolveExitPromise = A, this.rejectExitPromise = Q
        }), this.exitPromise
    }
    resetLineCount() {
        if (this.options.stdout.isTTY && !this.options.debug) this.log.reset()
    }
    patchConsole() {
        if (this.options.debug) return;
        return aGB((A, Q) => {
            if (A === "stdout") g(`console.log: ${Q}`);
            if (A === "stderr") e(Error(`console.error: ${Q}`))
        })
    }
}

function ih1(A) {
    nb.forEach((Q) => {
        Q.setTheme(A)
    })
}
var UXB;
var rh1 = L(() => {
    lGB();
    BH1();
    sGB();
    Eh1();
    hYB();
    onA();
    cYB();
    qaA();
    OJB();
    u1();
    D0();
    Vb1();
    zXB();
    fh1();
    $t();
    UXB = GA(VA(), 1)
});

function bH() {
    if (Nj(void 0)) return !1;
    return V0(void 0) || !1
}
var jt = L(() => {
    hQ();
    O9()
});
import {
    Stream as N56
} from "node:stream";
var L56 = (A, Q) => {
        let B = O56(Q),
            G = {
                stdout: process.stdout,
                stdin: process.stdin,
                stderr: process.stderr,
                debug: !1,
                exitOnCtrlC: !0,
                patchConsole: !0,
                ...B,
                theme: B.theme ?? L1().theme,
                ink2: B.ink2 ?? bH()
            },
            Z = R56(G.stdout, () => new aaA(G));
        return Z.render(A), {
            rerender: Z.render,
            unmount() {
                Z.unmount()
            },
            waitUntilExit: Z.waitUntilExit,
            cleanup: () => nb.delete(G.stdout)
        }
    },
    M56 = async (A, Q) => {
        return await hZB(), L56(A, Q)
    }, Z3, O56 = (A = {}) => {
        if (A instanceof N56) return {
            stdout: A,
            stdin: process.stdin
        };
        return A
    }, R56 = (A, Q) => {
        let B = nb.get(A);
        if (!B) B = Q(), nb.set(A, B);
        return B
    };
var $XB = L(() => {
    rh1();
    onA();
    qaA();
    jQ();
    jt();
    Z3 = M56
});

function J$A(A, Q) {
    if (!A) return;
    if (A.startsWith("rgb(") || A.startsWith("#") || A.startsWith("ansi256(") || A.startsWith("ansi:")) return A;
    return Q[A]
}
var saA, wXB, j;
var qXB = L(() => {
    KaA();
    iUA();
    lUA();
    saA = GA(VA(), 1);
    wXB = saA.forwardRef(({
        borderColor: A,
        borderTopColor: Q,
        borderBottomColor: B,
        borderLeftColor: G,
        borderRightColor: Z,
        children: I,
        ...Y
    }, J) => {
        let [W] = $B(), X = w7A(W), F = J$A(A, X), V = J$A(Q, X), K = J$A(B, X), D = J$A(G, X), H = J$A(Z, X);
        return saA.default.createElement(VU, {
            ref: J,
            borderColor: F,
            borderTopColor: V,
            borderBottomColor: K,
            borderLeftColor: D,
            borderRightColor: H,
            ...Y
        }, I)
    });
    wXB.displayName = "ThemedBox";
    j = wXB
});

function NXB({
    children: A
}) {
    return Lg1.default.createElement(P56.Provider, {
        value: !0
    }, A)
}
var Lg1, T56, P56;
var Mg1 = L(() => {
    Lg1 = GA(VA(), 1), T56 = GA(VA(), 1), P56 = Lg1.default.createContext(!1)
});

function Ap(A) {
    let {
        items: Q,
        children: B
    } = A, G = KM.useContext(ec), [Z, I] = KM.useState(0), Y = KM.useMemo(() => {
        return Q.slice(Z)
    }, [Q, Z]);
    if (KM.useLayoutEffect(() => {
            I(Q.length)
        }, [Q.length]), G) {
        let W = Q.map((X, F) => B(X, F));
        return KM.default.createElement("ink-box", {
            style: {
                flexDirection: "column"
            }
        }, W)
    }
    let J = Y.map((W, X) => {
        return B(W, Z + X)
    });
    return KM.default.createElement(NXB, null, KM.default.createElement("ink-box", {
        internal_static: !0,
        style: {
            position: "absolute",
            flexDirection: "column"
        }
    }, J))
}
var KM;
var LXB = L(() => {
    Mg1();
    rUA();
    KM = GA(VA(), 1)
});
var RXB = U((gm7, OXB) => {
    var j56 = UA("os"),
        MXB = UA("tty"),
        DM = NVA(),
        {
            env: hV
        } = process,
        Qp;
    if (DM("no-color") || DM("no-colors") || DM("color=false") || DM("color=never")) Qp = 0;
    else if (DM("color") || DM("colors") || DM("color=true") || DM("color=always")) Qp = 1;
    if ("FORCE_COLOR" in hV)
        if (hV.FORCE_COLOR === "true") Qp = 1;
        else if (hV.FORCE_COLOR === "false") Qp = 0;
    else Qp = hV.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(hV.FORCE_COLOR, 10), 3);

    function Og1(A) {
        if (A === 0) return !1;
        return {
            level: A,
            hasBasic: !0,
            has256: A >= 2,
            has16m: A >= 3
        }
    }

    function Rg1(A, Q) {
        if (Qp === 0) return 0;
        if (DM("color=16m") || DM("color=full") || DM("color=truecolor")) return 3;
        if (DM("color=256")) return 2;
        if (A && !Q && Qp === void 0) return 0;
        let B = Qp || 0;
        if (hV.TERM === "dumb") return B;
        if (process.platform === "win32") {
            let G = j56.release().split(".");
            if (Number(G[0]) >= 10 && Number(G[2]) >= 10586) return Number(G[2]) >= 14931 ? 3 : 2;
            return 1
        }
        if ("CI" in hV) {
            if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((G) => (G in hV)) || hV.CI_NAME === "codeship") return 1;
            return B
        }
        if ("TEAMCITY_VERSION" in hV) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(hV.TEAMCITY_VERSION) ? 1 : 0;
        if (hV.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in hV) {
            let G = parseInt((hV.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (hV.TERM_PROGRAM) {
                case "iTerm.app":
                    return G >= 3 ? 3 : 2;
                case "Apple_Terminal":
                    return 2
            }
        }
        if (/-256(color)?$/i.test(hV.TERM)) return 2;
        if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(hV.TERM)) return 1;
        if ("COLORTERM" in hV) return 1;
        return B
    }

    function S56(A) {
        let Q = Rg1(A, A && A.isTTY);
        return Og1(Q)
    }
    OXB.exports = {
        supportsColor: S56,
        stdout: Og1(Rg1(!0, MXB.isatty(1))),
        stderr: Og1(Rg1(!0, MXB.isatty(2)))
    }
});
var jXB = U((um7, PXB) => {
    var _56 = RXB(),
        j7A = NVA();

    function TXB(A) {
        if (/^\d{3,4}$/.test(A)) {
            let B = /(\d{1,2})(\d{2})/.exec(A);
            return {
                major: 0,
                minor: parseInt(B[1], 10),
                patch: parseInt(B[2], 10)
            }
        }
        let Q = (A || "").split(".").map((B) => parseInt(B, 10));
        return {
            major: Q[0],
            minor: Q[1],
            patch: Q[2]
        }
    }

    function Tg1(A) {
        let {
            env: Q
        } = process;
        if ("FORCE_HYPERLINK" in Q) return !(Q.FORCE_HYPERLINK.length > 0 && parseInt(Q.FORCE_HYPERLINK, 10) === 0);
        if (j7A("no-hyperlink") || j7A("no-hyperlinks") || j7A("hyperlink=false") || j7A("hyperlink=never")) return !1;
        if (j7A("hyperlink=true") || j7A("hyperlink=always")) return !0;
        if ("NETLIFY" in Q) return !0;
        if (!_56.supportsColor(A)) return !1;
        if (A && !A.isTTY) return !1;
        if (process.platform === "win32") return !1;
        if ("CI" in Q) return !1;
        if ("TEAMCITY_VERSION" in Q) return !1;
        if ("TERM_PROGRAM" in Q) {
            let B = TXB(Q.TERM_PROGRAM_VERSION);
            switch (Q.TERM_PROGRAM) {
                case "iTerm.app":
                    if (B.major === 3) return B.minor >= 1;
                    return B.major > 3;
                case "WezTerm":
                    return B.major >= 20200620;
                case "vscode":
                    return B.major > 1 || B.major === 1 && B.minor >= 72
            }
        }
        if ("VTE_VERSION" in Q) {
            if (Q.VTE_VERSION === "0.50.0") return !1;
            let B = TXB(Q.VTE_VERSION);
            return B.major > 0 || B.minor >= 50
        }
        return !1
    }
    PXB.exports = {
        supportsHyperlink: Tg1,
        stdout: Tg1(process.stdout),
        stderr: Tg1(process.stderr)
    }
});

function raA() {
    if (SXB.default.stdout) return !0;
    let A = process.env.TERM_PROGRAM;
    if (A && k56.includes(A)) return !0;
    if (process.env.TERM?.includes("kitty")) return !0;
    return !1
}
var SXB, k56;
var Pg1 = L(() => {
    SXB = GA(jXB(), 1), k56 = ["ghostty", "Hyper", "kitty", "alacritty"]
});

function a4({
    children: A,
    url: Q,
    fallback: B
}) {
    let G = A ?? Q;
    if (raA()) return oaA.default.createElement(Tt, null, oaA.default.createElement("ink-link", {
        href: Q
    }, G));
    return oaA.default.createElement(Tt, null, B ?? G)
}
var oaA;
var _XB = L(() => {
    Pg1();
    jaA();
    oaA = GA(VA(), 1)
});

function gV({
    count: A = 1
}) {
    return kXB.default.createElement("ink-text", null, `
`.repeat(A))
}
var kXB;
var yXB = L(() => {
    kXB = GA(VA(), 1)
});
var y56;
var xXB = L(() => {
    lUA();
    y56 = GA(VA(), 1)
});

function taA({
    state: A,
    percentage: Q
}) {
    return vXB.default.createElement("ink-progress", {
        state: A,
        percentage: Q
    })
}
var vXB;
var bXB = L(() => {
    vXB = GA(VA(), 1)
});
var fXB, x56 = () => fXB.useContext(MaA),
    Bp;
var eaA = L(() => {
    ph1();
    fXB = GA(VA(), 1), Bp = x56
});
var jg1, v56 = (A, Q = {}) => {
        let {
            stdin: B,
            setRawMode: G,
            internal_exitOnCtrlC: Z,
            internal_eventEmitter: I
        } = Bp();
        jg1.useEffect(() => {
            if (Q.isActive === !1) return;
            return G(!0), () => {
                G(!1)
            }
        }, [Q.isActive, G]), jg1.useEffect(() => {
            if (Q.isActive === !1) return;
            let Y = (J) => {
                let {
                    input: W,
                    key: X
                } = J;
                if (!(W === "c" && X.ctrl) || !Z) sc.batchedUpdates(() => {
                    A(W, X, J)
                })
            };
            return I?.on("input", Y), () => {
                I?.removeListener("input", Y)
            }
        }, [Q.isActive, B, Z, A])
    },
    h1;
var hXB = L(() => {
    Eh1();
    eaA();
    jg1 = GA(VA(), 1), h1 = v56
});
var gXB, b56 = () => gXB.useContext(LaA),
    Sg1;
var uXB = L(() => {
    ch1();
    gXB = GA(VA(), 1), Sg1 = b56
});
var _g1;
var mXB = L(() => {
    RaA();
    eaA();
    _g1 = GA(VA(), 1)
});
var f56;
var dXB = L(() => {
    RaA();
    f56 = GA(VA(), 1)
});
var h56 = (A) => ({
        width: A.yogaNode?.getComputedWidth() ?? 0,
        height: A.yogaNode?.getComputedHeight() ?? 0
    }),
    kg1;
var cXB = L(() => {
    kg1 = h56
});
var S7A;
var pXB = L(() => {
    vaA();
    S7A = GA(VA(), 1)
});
var hA = L(() => {
    $XB();
    lUA();
    qXB();
    jaA();
    oh1();
    LXB();
    _XB();
    yXB();
    xXB();
    bXB();
    hXB();
    uXB();
    eaA();
    mXB();
    dXB();
    cXB();
    Mg1();
    iUA();
    mUA();
    inA();
    Ig1();
    NaA();
    pXB()
});

function ab(A, Q, B) {
    let G = Gp.useRef(0),
        Z = Gp.useRef(void 0),
        I = Gp.useCallback(() => {
            if (Z.current) clearTimeout(Z.current), Z.current = void 0
        }, []);
    return Gp.useEffect(() => {
        return () => {
            I()
        }
    }, [I]), Gp.useCallback(() => {
        let Y = Date.now();
        if (Y - G.current <= lXB && Z.current !== void 0) I(), A(!1), Q();
        else B?.(), A(!0), I(), Z.current = setTimeout(() => {
            A(!1), Z.current = void 0
        }, lXB);
        G.current = Y
    }, [A, Q, B, I])
}
var Gp, lXB = 800;
var AsA = L(() => {
    Gp = GA(VA(), 1)
});

function hX() {
    return V0(process.env.CLAUDE_CODE_USE_BEDROCK) || V0(process.env.CLAUDE_CODE_USE_VERTEX) || V0(process.env.CLAUDE_CODE_USE_FOUNDRY) || !!process.env.DISABLE_TELEMETRY || !!process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC
}
var St = L(() => {
    hQ()
});
var aXB = U((iXB) => {
    Object.defineProperty(iXB, "__esModule", {
        value: !0
    });
    iXB._globalThis = void 0;
    iXB._globalThis = typeof globalThis === "object" ? globalThis : global
});
var sXB = U((_t) => {
    var g56 = _t && _t.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            Object.defineProperty(A, G, {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            })
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        u56 = _t && _t.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) g56(Q, A, B)
        };
    Object.defineProperty(_t, "__esModule", {
        value: !0
    });
    u56(aXB(), _t)
});
var rXB = U((kt) => {
    var m56 = kt && kt.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            Object.defineProperty(A, G, {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            })
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        d56 = kt && kt.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) m56(Q, A, B)
        };
    Object.defineProperty(kt, "__esModule", {
        value: !0
    });
    d56(sXB(), kt)
});
var yg1 = U((oXB) => {
    Object.defineProperty(oXB, "__esModule", {
        value: !0
    });
    oXB.VERSION = void 0;
    oXB.VERSION = "1.9.0"
});
var GFB = U((QFB) => {
    Object.defineProperty(QFB, "__esModule", {
        value: !0
    });
    QFB.isCompatible = QFB._makeCompatibilityCheck = void 0;
    var c56 = yg1(),
        eXB = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;

    function AFB(A) {
        let Q = new Set([A]),
            B = new Set,
            G = A.match(eXB);
        if (!G) return () => !1;
        let Z = {
            major: +G[1],
            minor: +G[2],
            patch: +G[3],
            prerelease: G[4]
        };
        if (Z.prerelease != null) return function(W) {
            return W === A
        };

        function I(J) {
            return B.add(J), !1
        }

        function Y(J) {
            return Q.add(J), !0
        }
        return function(W) {
            if (Q.has(W)) return !0;
            if (B.has(W)) return !1;
            let X = W.match(eXB);
            if (!X) return I(W);
            let F = {
                major: +X[1],
                minor: +X[2],
                patch: +X[3],
                prerelease: X[4]
            };
            if (F.prerelease != null) return I(W);
            if (Z.major !== F.major) return I(W);
            if (Z.major === 0) {
                if (Z.minor === F.minor && Z.patch <= F.patch) return Y(W);
                return I(W)
            }
            if (Z.minor <= F.minor) return Y(W);
            return I(W)
        }
    }
    QFB._makeCompatibilityCheck = AFB;
    QFB.isCompatible = AFB(c56.VERSION)
});
var yt = U((ZFB) => {
    Object.defineProperty(ZFB, "__esModule", {
        value: !0
    });
    ZFB.unregisterGlobal = ZFB.getGlobal = ZFB.registerGlobal = void 0;
    var l56 = rXB(),
        _7A = yg1(),
        i56 = GFB(),
        n56 = _7A.VERSION.split(".")[0],
        W$A = Symbol.for(`opentelemetry.js.api.${n56}`),
        X$A = l56._globalThis;

    function a56(A, Q, B, G = !1) {
        var Z;
        let I = X$A[W$A] = (Z = X$A[W$A]) !== null && Z !== void 0 ? Z : {
            version: _7A.VERSION
        };
        if (!G && I[A]) {
            let Y = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${A}`);
            return B.error(Y.stack || Y.message), !1
        }
        if (I.version !== _7A.VERSION) {
            let Y = Error(`@opentelemetry/api: Registration of version v${I.version} for ${A} does not match previously registered API v${_7A.VERSION}`);
            return B.error(Y.stack || Y.message), !1
        }
        return I[A] = Q, B.debug(`@opentelemetry/api: Registered a global for ${A} v${_7A.VERSION}.`), !0
    }
    ZFB.registerGlobal = a56;

    function s56(A) {
        var Q, B;
        let G = (Q = X$A[W$A]) === null || Q === void 0 ? void 0 : Q.version;
        if (!G || !(0, i56.isCompatible)(G)) return;
        return (B = X$A[W$A]) === null || B === void 0 ? void 0 : B[A]
    }
    ZFB.getGlobal = s56;

    function r56(A, Q) {
        Q.debug(`@opentelemetry/api: Unregistering a global for ${A} v${_7A.VERSION}.`);
        let B = X$A[W$A];
        if (B) delete B[A]
    }
    ZFB.unregisterGlobal = r56
});
var XFB = U((JFB) => {
    Object.defineProperty(JFB, "__esModule", {
        value: !0
    });
    JFB.DiagComponentLogger = void 0;
    var e56 = yt();
    class YFB {
        constructor(A) {
            this._namespace = A.namespace || "DiagComponentLogger"
        }
        debug(...A) {
            return F$A("debug", this._namespace, A)
        }
        error(...A) {
            return F$A("error", this._namespace, A)
        }
        info(...A) {
            return F$A("info", this._namespace, A)
        }
        warn(...A) {
            return F$A("warn", this._namespace, A)
        }
        verbose(...A) {
            return F$A("verbose", this._namespace, A)
        }
    }
    JFB.DiagComponentLogger = YFB;

    function F$A(A, Q, B) {
        let G = (0, e56.getGlobal)("diag");
        if (!G) return;
        return B.unshift(Q), G[A](...B)
    }
});
var QsA = U((FFB) => {
    Object.defineProperty(FFB, "__esModule", {
        value: !0
    });
    FFB.DiagLogLevel = void 0;
    var A36;
    (function(A) {
        A[A.NONE = 0] = "NONE", A[A.ERROR = 30] = "ERROR", A[A.WARN = 50] = "WARN", A[A.INFO = 60] = "INFO", A[A.DEBUG = 70] = "DEBUG", A[A.VERBOSE = 80] = "VERBOSE", A[A.ALL = 9999] = "ALL"
    })(A36 = FFB.DiagLogLevel || (FFB.DiagLogLevel = {}))
});
var DFB = U((VFB) => {
    Object.defineProperty(VFB, "__esModule", {
        value: !0
    });
    VFB.createLogLevelDiagLogger = void 0;
    var sb = QsA();

    function Q36(A, Q) {
        if (A < sb.DiagLogLevel.NONE) A = sb.DiagLogLevel.NONE;
        else if (A > sb.DiagLogLevel.ALL) A = sb.DiagLogLevel.ALL;
        Q = Q || {};

        function B(G, Z) {
            let I = Q[G];
            if (typeof I === "function" && A >= Z) return I.bind(Q);
            return function() {}
        }
        return {
            error: B("error", sb.DiagLogLevel.ERROR),
            warn: B("warn", sb.DiagLogLevel.WARN),
            info: B("info", sb.DiagLogLevel.INFO),
            debug: B("debug", sb.DiagLogLevel.DEBUG),
            verbose: B("verbose", sb.DiagLogLevel.VERBOSE)
        }
    }
    VFB.createLogLevelDiagLogger = Q36
});
var xt = U((CFB) => {
    Object.defineProperty(CFB, "__esModule", {
        value: !0
    });
    CFB.DiagAPI = void 0;
    var B36 = XFB(),
        G36 = DFB(),
        HFB = QsA(),
        BsA = yt(),
        Z36 = "diag";
    class vg1 {
        constructor() {
            function A(G) {
                return function(...Z) {
                    let I = (0, BsA.getGlobal)("diag");
                    if (!I) return;
                    return I[G](...Z)
                }
            }
            let Q = this,
                B = (G, Z = {
                    logLevel: HFB.DiagLogLevel.INFO
                }) => {
                    var I, Y, J;
                    if (G === Q) {
                        let F = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                        return Q.error((I = F.stack) !== null && I !== void 0 ? I : F.message), !1
                    }
                    if (typeof Z === "number") Z = {
                        logLevel: Z
                    };
                    let W = (0, BsA.getGlobal)("diag"),
                        X = (0, G36.createLogLevelDiagLogger)((Y = Z.logLevel) !== null && Y !== void 0 ? Y : HFB.DiagLogLevel.INFO, G);
                    if (W && !Z.suppressOverrideMessage) {
                        let F = (J = Error().stack) !== null && J !== void 0 ? J : "<failed to generate stacktrace>";
                        W.warn(`Current logger will be overwritten from ${F}`), X.warn(`Current logger will overwrite one already registered from ${F}`)
                    }
                    return (0, BsA.registerGlobal)("diag", X, Q, !0)
                };
            Q.setLogger = B, Q.disable = () => {
                (0, BsA.unregisterGlobal)(Z36, Q)
            }, Q.createComponentLogger = (G) => {
                return new B36.DiagComponentLogger(G)
            }, Q.verbose = A("verbose"), Q.debug = A("debug"), Q.info = A("info"), Q.warn = A("warn"), Q.error = A("error")
        }
        static instance() {
            if (!this._instance) this._instance = new vg1;
            return this._instance
        }
    }
    CFB.DiagAPI = vg1
});
var $FB = U((zFB) => {
    Object.defineProperty(zFB, "__esModule", {
        value: !0
    });
    zFB.BaggageImpl = void 0;
    class k7A {
        constructor(A) {
            this._entries = A ? new Map(A) : new Map
        }
        getEntry(A) {
            let Q = this._entries.get(A);
            if (!Q) return;
            return Object.assign({}, Q)
        }
        getAllEntries() {
            return Array.from(this._entries.entries()).map(([A, Q]) => [A, Q])
        }
        setEntry(A, Q) {
            let B = new k7A(this._entries);
            return B._entries.set(A, Q), B
        }
        removeEntry(A) {
            let Q = new k7A(this._entries);
            return Q._entries.delete(A), Q
        }
        removeEntries(...A) {
            let Q = new k7A(this._entries);
            for (let B of A) Q._entries.delete(B);
            return Q
        }
        clear() {
            return new k7A
        }
    }
    zFB.BaggageImpl = k7A
});
var NFB = U((wFB) => {
    Object.defineProperty(wFB, "__esModule", {
        value: !0
    });
    wFB.baggageEntryMetadataSymbol = void 0;
    wFB.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata")
});
var bg1 = U((LFB) => {
    Object.defineProperty(LFB, "__esModule", {
        value: !0
    });
    LFB.baggageEntryMetadataFromString = LFB.createBaggage = void 0;
    var I36 = xt(),
        Y36 = $FB(),
        J36 = NFB(),
        W36 = I36.DiagAPI.instance();

    function X36(A = {}) {
        return new Y36.BaggageImpl(new Map(Object.entries(A)))
    }
    LFB.createBaggage = X36;

    function F36(A) {
        if (typeof A !== "string") W36.error(`Cannot create baggage metadata from unknown type: ${typeof A}`), A = "";
        return {
            __TYPE__: J36.baggageEntryMetadataSymbol,
            toString() {
                return A
            }
        }
    }
    LFB.baggageEntryMetadataFromString = F36
});
var V$A = U((OFB) => {
    Object.defineProperty(OFB, "__esModule", {
        value: !0
    });
    OFB.ROOT_CONTEXT = OFB.createContextKey = void 0;

    function K36(A) {
        return Symbol.for(A)
    }
    OFB.createContextKey = K36;
    class GsA {
        constructor(A) {
            let Q = this;
            Q._currentContext = A ? new Map(A) : new Map, Q.getValue = (B) => Q._currentContext.get(B), Q.setValue = (B, G) => {
                let Z = new GsA(Q._currentContext);
                return Z._currentContext.set(B, G), Z
            }, Q.deleteValue = (B) => {
                let G = new GsA(Q._currentContext);
                return G._currentContext.delete(B), G
            }
        }
    }
    OFB.ROOT_CONTEXT = new GsA
});
var SFB = U((PFB) => {
    Object.defineProperty(PFB, "__esModule", {
        value: !0
    });
    PFB.DiagConsoleLogger = void 0;
    var fg1 = [{
        n: "error",
        c: "error"
    }, {
        n: "warn",
        c: "warn"
    }, {
        n: "info",
        c: "info"
    }, {
        n: "debug",
        c: "debug"
    }, {
        n: "verbose",
        c: "trace"
    }];
    class TFB {
        constructor() {
            function A(Q) {
                return function(...B) {
                    if (console) {
                        let G = console[Q];
                        if (typeof G !== "function") G = console.log;
                        if (typeof G === "function") return G.apply(console, B)
                    }
                }
            }
            for (let Q = 0; Q < fg1.length; Q++) this[fg1[Q].n] = A(fg1[Q].c)
        }
    }
    PFB.DiagConsoleLogger = TFB
});
var ig1 = U((_FB) => {
    Object.defineProperty(_FB, "__esModule", {
        value: !0
    });
    _FB.createNoopMeter = _FB.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = _FB.NOOP_OBSERVABLE_GAUGE_METRIC = _FB.NOOP_OBSERVABLE_COUNTER_METRIC = _FB.NOOP_UP_DOWN_COUNTER_METRIC = _FB.NOOP_HISTOGRAM_METRIC = _FB.NOOP_GAUGE_METRIC = _FB.NOOP_COUNTER_METRIC = _FB.NOOP_METER = _FB.NoopObservableUpDownCounterMetric = _FB.NoopObservableGaugeMetric = _FB.NoopObservableCounterMetric = _FB.NoopObservableMetric = _FB.NoopHistogramMetric = _FB.NoopGaugeMetric = _FB.NoopUpDownCounterMetric = _FB.NoopCounterMetric = _FB.NoopMetric = _FB.NoopMeter = void 0;
    class hg1 {
        constructor() {}
        createGauge(A, Q) {
            return _FB.NOOP_GAUGE_METRIC
        }
        createHistogram(A, Q) {
            return _FB.NOOP_HISTOGRAM_METRIC
        }
        createCounter(A, Q) {
            return _FB.NOOP_COUNTER_METRIC
        }
        createUpDownCounter(A, Q) {
            return _FB.NOOP_UP_DOWN_COUNTER_METRIC
        }
        createObservableGauge(A, Q) {
            return _FB.NOOP_OBSERVABLE_GAUGE_METRIC
        }