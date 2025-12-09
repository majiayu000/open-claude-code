/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_029.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (35次) = moduleWrapper(fn) - CommonJS module wrapper
 *   L        (9次) = lazyLoader(fn) - Lazy module loader
 *   GA       (5次) = esmImport(module) - ESM import helper
 *   pG       (1次) = esmExport(obj, key) - ESM export binding
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 29/53
 * Lines: 188193 - 189690 (1498 lines)
 * Original file: cli.js
 */

var fX, th1, XJB = (A) => {
        return A?.replace(`file://${VJB()}/`, "")
    },
    FJB;
var KJB = L(() => {
    IJB();
    lUA();
    oh1();
    fX = GA(VA(), 1), th1 = GA(QJB(), 1), FJB = new th1.default({
        cwd: VJB(),
        internals: th1.default.nodeInternals()
    })
});
import {
    Buffer as v96
} from "node:buffer";

function g96(A) {
    return {
        name: "",
        fn: !1,
        ctrl: !1,
        meta: !1,
        shift: !1,
        option: !1,
        sequence: A,
        raw: A,
        isPasted: !0
    }
}

function d96(A) {
    if (v96.isBuffer(A))
        if (A[0] > 127 && A[1] === void 0) return A[0] -= 128, "\x1B" + String(A);
        else return String(A);
    else if (A !== void 0 && typeof A !== "string") return String(A);
    else if (!A) return "";
    else return A
}

function CJB(A, Q = "") {
    let B = Q === null,
        G = B ? "" : d96(Q);
    if (A.mode === "IN_PASTE") {
        if ((A.incomplete.slice(-_aA.length + 1) + G).indexOf(_aA) === -1) return [
            [], {
                ...A,
                incomplete: A.incomplete + G
            }
        ]
    }
    let Z = A.incomplete + G,
        I = {
            ...A,
            incomplete: ""
        },
        Y = [],
        J = {
            NORMAL: () => {
                let W = u96.exec(Z);
                Z = Z.substring(W[0].length);
                let X = W[1];
                if (!W[2] && !B) {
                    let F = m96.exec(X);
                    I.incomplete = F[2], X = F[1]
                }
                if (X) Y.push(DJB(X));
                if (W[2] === h96) I.mode = "IN_PASTE";
                else if (W[2]) Y.push(DJB(W[2]))
            },
            IN_PASTE: () => {
                let W = Z.indexOf(_aA);
                if (W === -1) {
                    if (!B) {
                        I.incomplete = Z, Z = "";
                        return
                    }
                    W = Z.length
                }
                let X = Z.substring(0, W);
                if (X) Y.push(g96(X));
                Z = Z.substring(W + _aA.length), I.mode = "NORMAL"
            }
        };
    while (Z) J[I.mode]();
    return [Y, I]
}
var b96, f96, h96 = "\x1B[200~",
    _aA = "\x1B[201~",
    u96, m96, HJB, EJB, zJB, c96 = (A) => {
        return ["[a", "[b", "[c", "[d", "[e", "[2$", "[3$", "[5$", "[6$", "[7$", "[8$", "[Z"].includes(A)
    },
    p96 = (A) => {
        return ["Oa", "Ob", "Oc", "Od", "Oe", "[2^", "[3^", "[5^", "[6^", "[7^", "[8^"].includes(A)
    },
    DJB = (A = "") => {
        let Q, B = {
            name: "",
            fn: !1,
            ctrl: !1,
            meta: !1,
            shift: !1,
            option: !1,
            sequence: A,
            raw: A,
            isPasted: !1
        };
        if (B.sequence = B.sequence || A || B.name, A === "\r") B.raw = void 0, B.name = "return";
        else if (A === `
`) B.name = "enter";
        else if (A === "\t") B.name = "tab";
        else if (A === "\b" || A === "\x1B\b") B.name = "backspace", B.meta = A.charAt(0) === "\x1B";
        else if (A === "" || A === "\x1B") B.name = "backspace", B.meta = A.charAt(0) === "\x1B";
        else if (A === "\x1B" || A === "\x1B\x1B") B.name = "escape", B.meta = A.length === 2;
        else if (A === " " || A === "\x1B ") B.name = "space", B.meta = A.length === 2;
        else if (A === "\x1F") B.name = "_", B.ctrl = !0;
        else if (A <= "\x1A" && A.length === 1) B.name = String.fromCharCode(A.charCodeAt(0) + 97 - 1), B.ctrl = !0;
        else if (A.length === 1 && A >= "0" && A <= "9") B.name = "number";
        else if (A.length === 1 && A >= "a" && A <= "z") B.name = A;
        else if (A.length === 1 && A >= "A" && A <= "Z") B.name = A.toLowerCase(), B.shift = !0;
        else if (Q = b96.exec(A)) B.meta = !0, B.shift = /^[A-Z]$/.test(Q[1]);
        else if (Q = f96.exec(A)) {
            let G = [...A];
            if (G[0] === "\x1B" && G[1] === "\x1B") B.option = !0;
            let Z = [Q[1], Q[2], Q[4], Q[6]].filter(Boolean).join(""),
                I = (Q[3] || Q[5] || 1) - 1;
            B.ctrl = !!(I & 4), B.meta = !!(I & 10), B.shift = !!(I & 1), B.code = Z, B.name = EJB[Z], B.shift = c96(Z) || B.shift, B.ctrl = p96(Z) || B.ctrl
        }
        if (B.raw === "\x1Bb") B.meta = !0, B.name = "left";
        else if (B.raw === "\x1Bf") B.meta = !0, B.name = "right";
        switch (A) {
            case "\x1B[1~":
                return {
                    name: "home", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1
                };
            case "\x1B[4~":
                return {
                    name: "end", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1
                };
            case "\x1B[5~":
                return {
                    name: "pageup", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1
                };
            case "\x1B[6~":
                return {
                    name: "pagedown", ctrl: !1, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1
                };
            case "\x1B[1;5D":
                return {
                    name: "left", ctrl: !0, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1
                };
            case "\x1B[1;5C":
                return {
                    name: "right", ctrl: !0, meta: !1, shift: !1, option: !1, fn: !1, sequence: A, raw: A, isPasted: !1
                };
            case "\x1B[1~":
                return {
                    name: "left", ctrl: !0, fn: !0, meta: !1, shift: !1, option: !1, sequence: A, raw: A, isPasted: !1
                };
            case "\x1B[4~":
                return {
                    name: "right", ctrl: !0, fn: !0, meta: !1, shift: !1, option: !1, sequence: A, raw: A, isPasted: !1
                }
        }
        return B
    };
var Ag1 = L(() => {
    b96 = /^(?:\x1b)([a-zA-Z0-9])$/, f96 = /^(?:\x1b+)(O|N|\[|\[\[)(?:(\d+)(?:;(\d+))?([~^$])|(?:1;)?(\d+)?([a-zA-Z]))/;
    u96 = new RegExp("^(.*?)(" + ["\\x1b\\][0-9]*(?:;[^\\x07\\x1b]*)*(?:\\x07|\\x1b\\\\)", "\\x1bP[^\\x1b]*\\x1b\\\\", "\\x1b\\[[0-9]*(?:;[0-9]*)*[A-Za-z~]", "\\x1bO[A-Za-z]", "\\x1b[\\x00-\\x7F]", "\\x1b\\x1b", "$"].map((A) => `(?:${A})`).join("|") + ")", "s"), m96 = new RegExp("(.*?)(" + ["\\x1b\\][0-9]*(?:;[^\\x07\\x1b]*)*$", "\\x1bP[^\\x1b]*$", "\\x1b\\[[0-9]*(?:;[0-9]*)*$", "\\x1bO$", "\\x1b$", "$"].map((A) => `(?:${A})`).join("|") + ")", "s"), HJB = {
        mode: "NORMAL",
        incomplete: ""
    };
    EJB = {
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
        "[Z": "tab"
    }, zJB = [...Object.values(EJB), "backspace"]
});
var kaA, Mg7, Og7, Rg7, Tg7, Pg7, jg7, Sg7, _g7, kg7, nUA, yg7, xg7, vg7, bg7, fg7;
var UJB = L(() => {
    kaA = globalThis.window?.document !== void 0, Mg7 = globalThis.process?.versions?.node !== void 0, Og7 = globalThis.process?.versions?.bun !== void 0, Rg7 = globalThis.Deno?.version?.deno !== void 0, Tg7 = globalThis.process?.versions?.electron !== void 0, Pg7 = globalThis.navigator?.userAgent?.includes("jsdom") === !0, jg7 = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, Sg7 = typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope, _g7 = typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope, kg7 = typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope, nUA = globalThis.navigator?.userAgentData?.platform, yg7 = nUA === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === !0 || globalThis.process?.platform === "darwin", xg7 = nUA === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform === "win32", vg7 = nUA === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === !0 || globalThis.navigator?.userAgent?.includes(" Linux ") === !0 || globalThis.process?.platform === "linux", bg7 = nUA === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform), fg7 = nUA === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === !0 || globalThis.process?.platform === "android"
});
var XM = {};
pG(XM, {
    scrollUp: () => X46,
    scrollDown: () => F46,
    link: () => E46,
    image: () => z46,
    iTerm: () => U46,
    exitAlternativeScreen: () => H46,
    eraseUp: () => W46,
    eraseStartLine: () => Y46,
    eraseScreen: () => Qg1,
    eraseLines: () => Z46,
    eraseLine: () => NJB,
    eraseEndLine: () => I46,
    eraseDown: () => J46,
    enterAlternativeScreen: () => D46,
    cursorUp: () => wJB,
    cursorTo: () => n96,
    cursorShow: () => Gg1,
    cursorSavePosition: () => t96,
    cursorRestorePosition: () => e96,
    cursorPrevLine: () => B46,
    cursorNextLine: () => Q46,
    cursorMove: () => a96,
    cursorLeft: () => qJB,
    cursorHide: () => G46,
    cursorGetPosition: () => A46,
    cursorForward: () => r96,
    cursorDown: () => s96,
    cursorBackward: () => o96,
    clearTerminal: () => K46,
    clearScreen: () => V46,
    beep: () => C46
});
import Bg1 from "node:process";
var w7 = "\x1B[",
    sUA = "\x1B]",
    O7A = "\x07",
    aUA = ";",
    $JB, l96, i96, n96 = (A, Q) => {
        if (typeof A !== "number") throw TypeError("The `x` argument is required");
        if (typeof Q !== "number") return w7 + (A + 1) + "G";
        return w7 + (Q + 1) + aUA + (A + 1) + "H"
    },
    a96 = (A, Q) => {
        if (typeof A !== "number") throw TypeError("The `x` argument is required");
        let B = "";
        if (A < 0) B += w7 + -A + "D";
        else if (A > 0) B += w7 + A + "C";
        if (Q < 0) B += w7 + -Q + "A";
        else if (Q > 0) B += w7 + Q + "B";
        return B
    },
    wJB = (A = 1) => w7 + A + "A",
    s96 = (A = 1) => w7 + A + "B",
    r96 = (A = 1) => w7 + A + "C",
    o96 = (A = 1) => w7 + A + "D",
    qJB, t96, e96, A46, Q46, B46, G46, Gg1, Z46 = (A) => {
        let Q = "";
        for (let B = 0; B < A; B++) Q += NJB + (B < A - 1 ? wJB() : "");
        if (A) Q += qJB;
        return Q
    },
    I46, Y46, NJB, J46, W46, Qg1, X46, F46, V46 = "\x1Bc",
    K46, D46, H46, C46, E46 = (A, Q) => [sUA, "8", aUA, aUA, Q, O7A, A, sUA, "8", aUA, aUA, O7A].join(""),
    z46 = (A, Q = {}) => {
        let B = `${sUA}1337;File=inline=1`;
        if (Q.width) B += `;width=${Q.width}`;
        if (Q.height) B += `;height=${Q.height}`;
        if (Q.preserveAspectRatio === !1) B += ";preserveAspectRatio=0";
        return B + ":" + Buffer.from(A).toString("base64") + O7A
    },
    U46;
var Zg1 = L(() => {
    UJB();
    $JB = !kaA && Bg1.env.TERM_PROGRAM === "Apple_Terminal", l96 = !kaA && Bg1.platform === "win32", i96 = kaA ? () => {
        throw Error("`process.cwd()` only works in Node.js, not the browser.")
    } : Bg1.cwd, qJB = w7 + "G", t96 = $JB ? "\x1B7" : w7 + "s", e96 = $JB ? "\x1B8" : w7 + "u", A46 = w7 + "6n", Q46 = w7 + "E", B46 = w7 + "F", G46 = w7 + "?25l", Gg1 = w7 + "?25h", I46 = w7 + "K", Y46 = w7 + "1K", NJB = w7 + "2K", J46 = w7 + "J", W46 = w7 + "1J", Qg1 = w7 + "2J", X46 = w7 + "S", F46 = w7 + "T", K46 = l96 ? `${Qg1}${w7}0f` : `${Qg1}${w7}3J${w7}H`, D46 = w7 + "?1049h", H46 = w7 + "?1049l", C46 = O7A, U46 = {
        setCwd: (A = i96()) => `${sUA}50;CurrentDir=${A}${O7A}`,
        annotation(A, Q = {}) {
            let B = `${sUA}1337;`,
                G = Q.x !== void 0,
                Z = Q.y !== void 0;
            if ((G || Z) && !(G && Z && Q.length !== void 0)) throw Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
            if (A = A.replaceAll("|", ""), B += Q.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", Q.length > 0) B += (G ? [A, Q.length, Q.x, Q.y] : [Q.length, A]).join("|");
            else B += A;
            return B + O7A
        }
    }
});
var yaA = L(() => {
    Zg1();
    Zg1()
});

function $46(A) {
    let Q = {
            upArrow: A.name === "up",
            downArrow: A.name === "down",
            leftArrow: A.name === "left",
            rightArrow: A.name === "right",
            pageDown: A.name === "pagedown",
            pageUp: A.name === "pageup",
            home: A.name === "home",
            end: A.name === "end",
            return: A.name === "return",
            escape: A.name === "escape",
            fn: A.fn,
            ctrl: A.ctrl,
            shift: A.shift,
            tab: A.name === "tab",
            backspace: A.name === "backspace",
            delete: A.name === "delete",
            meta: A.meta || A.name === "escape" || A.option
        },
        B = A.ctrl ? A.name : A.sequence;
    if (B === void 0) B = "";
    if (A.name && zJB.includes(A.name)) B = "";
    if (B.startsWith("\x1B")) B = B.slice(1);
    if (B.length === 1 && typeof B[0] === "string" && B[0].toUpperCase() === B[0]) Q.shift = !0;
    return [Q, B]
}
var xaA;
var Ig1 = L(() => {
    Ag1();
    xaA = class xaA extends M7A {
        keypress;
        key;
        input;
        constructor(A) {
            super();
            let [Q, B] = $46(A);
            this.keypress = A, this.key = Q, this.input = B
        }
    }
});
var LJB, ec;
var rUA = L(() => {
    LJB = GA(VA(), 1), ec = LJB.createContext(!1)
});
var MJB, oUA;
var vaA = L(() => {
    MJB = GA(VA(), 1), oUA = MJB.createContext(null)
});
var S_, w46 = "\t",
    q46 = "\x1B[Z",
    N46 = "\x1B",
    L46, baA;
var OJB = L(() => {
    NaA();
    ch1();
    ph1();
    RaA();
    KJB();
    Ag1();
    iUA();
    yaA();
    Ig1();
    rUA();
    vaA();
    S_ = GA(VA(), 1), L46 = process.platform !== "win32";
    baA = class baA extends S_.PureComponent {
        static displayName = "InternalApp";
        static getDerivedStateFromError(A) {
            return {
                error: A
            }
        }
        state = {
            isFocusEnabled: !0,
            activeFocusId: void 0,
            focusables: [],
            error: void 0
        };
        rawModeEnabledCount = 0;
        internal_eventEmitter = new oc;
        keyParseState = HJB;
        incompleteEscapeTimer = null;
        NORMAL_TIMEOUT = 50;
        PASTE_TIMEOUT = 500;
        isRawModeSupported() {
            return this.props.stdin.isTTY
        }
        render() {
            return S_.default.createElement(oUA.Provider, {
                value: {
                    columns: this.props.terminalColumns,
                    rows: this.props.terminalRows
                }
            }, S_.default.createElement(ec.Provider, {
                value: this.props.ink2
            }, S_.default.createElement(LaA.Provider, {
                value: {
                    exit: this.handleExit
                }
            }, S_.default.createElement(ah1, {
                initialState: this.props.initialTheme
            }, S_.default.createElement(MaA.Provider, {
                value: {
                    stdin: this.props.stdin,
                    setRawMode: this.handleSetRawMode,
                    isRawModeSupported: this.isRawModeSupported(),
                    internal_exitOnCtrlC: this.props.exitOnCtrlC,
                    internal_eventEmitter: this.internal_eventEmitter
                }
            }, S_.default.createElement(OaA.Provider, {
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
                    focus: this.focus
                }
            }, this.state.error ? S_.default.createElement(eh1, {
                error: this.state.error
            }) : this.props.children))))))
        }
        componentDidMount() {
            if (this.props.stdout.isTTY) this.props.stdout.write(XM.cursorHide)
        }
        componentWillUnmount() {
            if (this.props.stdout.isTTY) this.props.stdout.write(XM.cursorShow);
            if (this.incompleteEscapeTimer) clearTimeout(this.incompleteEscapeTimer), this.incompleteEscapeTimer = null;
            if (this.isRawModeSupported()) this.handleSetRawMode(!1)
        }
        componentDidCatch(A) {
            this.handleExit(A)
        }
        handleSetRawMode = (A) => {
            let {
                stdin: Q
            } = this.props;
            if (!this.isRawModeSupported())
                if (Q === process.stdin) throw Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
                else throw Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
            if (Q.setEncoding("utf8"), A) {
                if (this.rawModeEnabledCount === 0) Q.ref(), Q.setRawMode(!0), Q.addListener("readable", this.handleReadable), this.props.stdout.write("\x1B[?2004h");
                this.rawModeEnabledCount++;
                return
            }
            if (--this.rawModeEnabledCount === 0) this.props.stdout.write("\x1B[?2004l"), Q.setRawMode(!1), Q.removeListener("readable", this.handleReadable), Q.unref()
        };
        flushIncomplete = () => {
            if (this.incompleteEscapeTimer = null, !this.keyParseState.incomplete) return;
            this.processInput(null)
        };
        processInput = (A) => {
            let [Q, B] = CJB(this.keyParseState, A);
            this.keyParseState = B;
            for (let G of Q) {
                this.handleInput(G.sequence);
                let Z = new xaA(G);
                this.internal_eventEmitter.emit("input", Z)
            }
            if (this.keyParseState.incomplete) {
                if (this.incompleteEscapeTimer) clearTimeout(this.incompleteEscapeTimer);
                this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, this.keyParseState.mode === "IN_PASTE" ? this.PASTE_TIMEOUT : this.NORMAL_TIMEOUT)
            }
        };
        handleReadable = () => {
            let A;
            while ((A = this.props.stdin.read()) !== null) this.processInput(A)
        };
        handleInput = (A) => {
            if (A === "\x03" && this.props.exitOnCtrlC) this.handleExit();
            if (A === "\x1A" && L46) this.handleSuspend();
            if (A === N46 && this.state.activeFocusId) this.setState({
                activeFocusId: void 0
            });
            if (this.state.isFocusEnabled && this.state.focusables.length > 0) {
                if (A === w46) this.focusNext();
                if (A === q46) this.focusPrevious()
            }
        };
        handleExit = (A) => {
            if (this.isRawModeSupported()) this.handleSetRawMode(!1);
            this.props.onExit(A)
        };
        handleSuspend = () => {
            if (!this.isRawModeSupported()) return;
            let A = this.rawModeEnabledCount;
            while (this.rawModeEnabledCount > 0) this.handleSetRawMode(!1);
            if (this.props.stdout.isTTY) this.props.stdout.write(XM.cursorShow), this.props.stdout.write("\x1B[?1004l");
            this.internal_eventEmitter.emit("suspend");
            let Q = () => {
                for (let B = 0; B < A; B++)
                    if (this.isRawModeSupported()) this.handleSetRawMode(!0);
                if (this.props.stdout.isTTY) this.props.stdout.write(XM.cursorHide), this.props.stdout.write("\x1B[?1004h");
                this.internal_eventEmitter.emit("resume"), process.removeListener("SIGCONT", Q)
            };
            process.on("SIGCONT", Q), process.kill(process.pid, "SIGSTOP")
        };
        enableFocus = () => {
            this.setState({
                isFocusEnabled: !0
            })
        };
        disableFocus = () => {
            this.setState({
                isFocusEnabled: !1
            })
        };
        focus = (A) => {
            this.setState((Q) => {
                if (!Q.focusables.some((G) => G?.id === A)) return Q;
                return {
                    activeFocusId: A
                }
            })
        };
        focusNext = () => {
            this.setState((A) => {
                let Q = A.focusables.find((G) => G.isActive)?.id;
                return {
                    activeFocusId: this.findNextFocusable(A) ?? Q
                }
            })
        };
        focusPrevious = () => {
            this.setState((A) => {
                let Q = A.focusables.findLast((G) => G.isActive)?.id;
                return {
                    activeFocusId: this.findPreviousFocusable(A) ?? Q
                }
            })
        };
        addFocusable = (A, {
            autoFocus: Q
        }) => {
            this.setState((B) => {
                let G = B.activeFocusId;
                if (!G && Q) G = A;
                return {
                    activeFocusId: G,
                    focusables: [...B.focusables, {
                        id: A,
                        isActive: !0
                    }]
                }
            })
        };
        removeFocusable = (A) => {
            this.setState((Q) => ({
                activeFocusId: Q.activeFocusId === A ? void 0 : Q.activeFocusId,
                focusables: Q.focusables.filter((B) => {
                    return B.id !== A
                })
            }))
        };
        activateFocusable = (A) => {
            this.setState((Q) => ({
                focusables: Q.focusables.map((B) => {
                    if (B.id !== A) return B;
                    return {
                        id: A,
                        isActive: !0
                    }
                })
            }))
        };
        deactivateFocusable = (A) => {
            this.setState((Q) => ({
                activeFocusId: Q.activeFocusId === A ? void 0 : Q.activeFocusId,
                focusables: Q.focusables.map((B) => {
                    if (B.id !== A) return B;
                    return {
                        id: A,
                        isActive: !1
                    }
                })
            }))
        };
        findNextFocusable = (A) => {
            let Q = A.focusables.findIndex((B) => {
                return B.id === A.activeFocusId
            });
            for (let B = Q + 1; B < A.focusables.length; B++) {
                let G = A.focusables[B];
                if (G?.isActive) return G.id
            }
            return
        };
        findPreviousFocusable = (A) => {
            let Q = A.focusables.findIndex((B) => {
                return B.id === A.activeFocusId
            });
            for (let B = Q - 1; B >= 0; B--) {
                let G = A.focusables[B];
                if (G?.isActive) return G.id
            }
            return
        }
    }
});
var tUA = U((Yu7, RJB) => {
    var M46 = Number.MAX_SAFE_INTEGER || 9007199254740991,
        O46 = ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"];
    RJB.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: 16,
        MAX_SAFE_BUILD_LENGTH: 250,
        MAX_SAFE_INTEGER: M46,
        RELEASE_TYPES: O46,
        SEMVER_SPEC_VERSION: "2.0.0",
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
    }
});
var eUA = U((Ju7, TJB) => {
    var R46 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...A) => console.error("SEMVER", ...A) : () => {};
    TJB.exports = R46
});
var R7A = U((__, PJB) => {
    var {
        MAX_SAFE_COMPONENT_LENGTH: Yg1,
        MAX_SAFE_BUILD_LENGTH: T46,
        MAX_LENGTH: P46
    } = tUA(), j46 = eUA();
    __ = PJB.exports = {};
    var S46 = __.re = [],
        _46 = __.safeRe = [],
        aB = __.src = [],
        k46 = __.safeSrc = [],
        sB = __.t = {},
        y46 = 0,
        Jg1 = "[a-zA-Z0-9-]",
        x46 = [
            ["\\s", 1],
            ["\\d", P46],
            [Jg1, T46]
        ],
        v46 = (A) => {
            for (let [Q, B] of x46) A = A.split(`${Q}*`).join(`${Q}{0,${B}}`).split(`${Q}+`).join(`${Q}{1,${B}}`);
            return A
        },
        K8 = (A, Q, B) => {
            let G = v46(Q),
                Z = y46++;
            j46(A, Z, Q), sB[A] = Z, aB[Z] = Q, k46[Z] = G, S46[Z] = new RegExp(Q, B ? "g" : void 0), _46[Z] = new RegExp(G, B ? "g" : void 0)
        };
    K8("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    K8("NUMERICIDENTIFIERLOOSE", "\\d+");
    K8("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${Jg1}*`);
    K8("MAINVERSION", `(${aB[sB.NUMERICIDENTIFIER]})\\.(${aB[sB.NUMERICIDENTIFIER]})\\.(${aB[sB.NUMERICIDENTIFIER]})`);
    K8("MAINVERSIONLOOSE", `(${aB[sB.NUMERICIDENTIFIERLOOSE]})\\.(${aB[sB.NUMERICIDENTIFIERLOOSE]})\\.(${aB[sB.NUMERICIDENTIFIERLOOSE]})`);
    K8("PRERELEASEIDENTIFIER", `(?:${aB[sB.NUMERICIDENTIFIER]}|${aB[sB.NONNUMERICIDENTIFIER]})`);
    K8("PRERELEASEIDENTIFIERLOOSE", `(?:${aB[sB.NUMERICIDENTIFIERLOOSE]}|${aB[sB.NONNUMERICIDENTIFIER]})`);
    K8("PRERELEASE", `(?:-(${aB[sB.PRERELEASEIDENTIFIER]}(?:\\.${aB[sB.PRERELEASEIDENTIFIER]})*))`);
    K8("PRERELEASELOOSE", `(?:-?(${aB[sB.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${aB[sB.PRERELEASEIDENTIFIERLOOSE]})*))`);
    K8("BUILDIDENTIFIER", `${Jg1}+`);
    K8("BUILD", `(?:\\+(${aB[sB.BUILDIDENTIFIER]}(?:\\.${aB[sB.BUILDIDENTIFIER]})*))`);
    K8("FULLPLAIN", `v?${aB[sB.MAINVERSION]}${aB[sB.PRERELEASE]}?${aB[sB.BUILD]}?`);
    K8("FULL", `^${aB[sB.FULLPLAIN]}$`);
    K8("LOOSEPLAIN", `[v=\\s]*${aB[sB.MAINVERSIONLOOSE]}${aB[sB.PRERELEASELOOSE]}?${aB[sB.BUILD]}?`);
    K8("LOOSE", `^${aB[sB.LOOSEPLAIN]}$`);
    K8("GTLT", "((?:<|>)?=?)");
    K8("XRANGEIDENTIFIERLOOSE", `${aB[sB.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    K8("XRANGEIDENTIFIER", `${aB[sB.NUMERICIDENTIFIER]}|x|X|\\*`);
    K8("XRANGEPLAIN", `[v=\\s]*(${aB[sB.XRANGEIDENTIFIER]})(?:\\.(${aB[sB.XRANGEIDENTIFIER]})(?:\\.(${aB[sB.XRANGEIDENTIFIER]})(?:${aB[sB.PRERELEASE]})?${aB[sB.BUILD]}?)?)?`);
    K8("XRANGEPLAINLOOSE", `[v=\\s]*(${aB[sB.XRANGEIDENTIFIERLOOSE]})(?:\\.(${aB[sB.XRANGEIDENTIFIERLOOSE]})(?:\\.(${aB[sB.XRANGEIDENTIFIERLOOSE]})(?:${aB[sB.PRERELEASELOOSE]})?${aB[sB.BUILD]}?)?)?`);
    K8("XRANGE", `^${aB[sB.GTLT]}\\s*${aB[sB.XRANGEPLAIN]}$`);
    K8("XRANGELOOSE", `^${aB[sB.GTLT]}\\s*${aB[sB.XRANGEPLAINLOOSE]}$`);
    K8("COERCEPLAIN", `(^|[^\\d])(\\d{1,${Yg1}})(?:\\.(\\d{1,${Yg1}}))?(?:\\.(\\d{1,${Yg1}}))?`);
    K8("COERCE", `${aB[sB.COERCEPLAIN]}(?:$|[^\\d])`);
    K8("COERCEFULL", aB[sB.COERCEPLAIN] + `(?:${aB[sB.PRERELEASE]})?(?:${aB[sB.BUILD]})?(?:$|[^\\d])`);
    K8("COERCERTL", aB[sB.COERCE], !0);
    K8("COERCERTLFULL", aB[sB.COERCEFULL], !0);
    K8("LONETILDE", "(?:~>?)");
    K8("TILDETRIM", `(\\s*)${aB[sB.LONETILDE]}\\s+`, !0);
    __.tildeTrimReplace = "$1~";
    K8("TILDE", `^${aB[sB.LONETILDE]}${aB[sB.XRANGEPLAIN]}$`);
    K8("TILDELOOSE", `^${aB[sB.LONETILDE]}${aB[sB.XRANGEPLAINLOOSE]}$`);
    K8("LONECARET", "(?:\\^)");
    K8("CARETTRIM", `(\\s*)${aB[sB.LONECARET]}\\s+`, !0);
    __.caretTrimReplace = "$1^";
    K8("CARET", `^${aB[sB.LONECARET]}${aB[sB.XRANGEPLAIN]}$`);
    K8("CARETLOOSE", `^${aB[sB.LONECARET]}${aB[sB.XRANGEPLAINLOOSE]}$`);
    K8("COMPARATORLOOSE", `^${aB[sB.GTLT]}\\s*(${aB[sB.LOOSEPLAIN]})$|^$`);
    K8("COMPARATOR", `^${aB[sB.GTLT]}\\s*(${aB[sB.FULLPLAIN]})$|^$`);
    K8("COMPARATORTRIM", `(\\s*)${aB[sB.GTLT]}\\s*(${aB[sB.LOOSEPLAIN]}|${aB[sB.XRANGEPLAIN]})`, !0);
    __.comparatorTrimReplace = "$1$2$3";
    K8("HYPHENRANGE", `^\\s*(${aB[sB.XRANGEPLAIN]})\\s+-\\s+(${aB[sB.XRANGEPLAIN]})\\s*$`);
    K8("HYPHENRANGELOOSE", `^\\s*(${aB[sB.XRANGEPLAINLOOSE]})\\s+-\\s+(${aB[sB.XRANGEPLAINLOOSE]})\\s*$`);
    K8("STAR", "(<|>)?=?\\s*\\*");
    K8("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    K8("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
});
var faA = U((Wu7, jJB) => {
    var b46 = Object.freeze({
            loose: !0
        }),
        f46 = Object.freeze({}),
        h46 = (A) => {
            if (!A) return f46;
            if (typeof A !== "object") return b46;
            return A
        };
    jJB.exports = h46
});
var Wg1 = U((Xu7, kJB) => {
    var SJB = /^[0-9]+$/,
        _JB = (A, Q) => {
            let B = SJB.test(A),
                G = SJB.test(Q);
            if (B && G) A = +A, Q = +Q;
            return A === Q ? 0 : B && !G ? -1 : G && !B ? 1 : A < Q ? -1 : 1
        },
        g46 = (A, Q) => _JB(Q, A);
    kJB.exports = {
        compareIdentifiers: _JB,
        rcompareIdentifiers: g46
    }
});
var vH = U((Fu7, bJB) => {
    var haA = eUA(),
        {
            MAX_LENGTH: yJB,
            MAX_SAFE_INTEGER: gaA
        } = tUA(),
        {
            safeRe: xJB,
            safeSrc: vJB,
            t: uaA
        } = R7A(),
        u46 = faA(),
        {
            compareIdentifiers: T7A
        } = Wg1();
    class ET {
        constructor(A, Q) {
            if (Q = u46(Q), A instanceof ET)
                if (A.loose === !!Q.loose && A.includePrerelease === !!Q.includePrerelease) return A;
                else A = A.version;
            else if (typeof A !== "string") throw TypeError(`Invalid version. Must be a string. Got type "${typeof A}".`);
            if (A.length > yJB) throw TypeError(`version is longer than ${yJB} characters`);
            haA("SemVer", A, Q), this.options = Q, this.loose = !!Q.loose, this.includePrerelease = !!Q.includePrerelease;
            let B = A.trim().match(Q.loose ? xJB[uaA.LOOSE] : xJB[uaA.FULL]);
            if (!B) throw TypeError(`Invalid Version: ${A}`);
            if (this.raw = A, this.major = +B[1], this.minor = +B[2], this.patch = +B[3], this.major > gaA || this.major < 0) throw TypeError("Invalid major version");
            if (this.minor > gaA || this.minor < 0) throw TypeError("Invalid minor version");
            if (this.patch > gaA || this.patch < 0) throw TypeError("Invalid patch version");
            if (!B[4]) this.prerelease = [];
            else this.prerelease = B[4].split(".").map((G) => {
                if (/^[0-9]+$/.test(G)) {
                    let Z = +G;
                    if (Z >= 0 && Z < gaA) return Z
                }
                return G
            });
            this.build = B[5] ? B[5].split(".") : [], this.format()
        }
        format() {
            if (this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
            return this.version
        }
        toString() {
            return this.version
        }
        compare(A) {
            if (haA("SemVer.compare", this.version, this.options, A), !(A instanceof ET)) {
                if (typeof A === "string" && A === this.version) return 0;
                A = new ET(A, this.options)
            }
            if (A.version === this.version) return 0;
            return this.compareMain(A) || this.comparePre(A)
        }
        compareMain(A) {
            if (!(A instanceof ET)) A = new ET(A, this.options);
            return T7A(this.major, A.major) || T7A(this.minor, A.minor) || T7A(this.patch, A.patch)
        }
        comparePre(A) {
            if (!(A instanceof ET)) A = new ET(A, this.options);
            if (this.prerelease.length && !A.prerelease.length) return -1;
            else if (!this.prerelease.length && A.prerelease.length) return 1;
            else if (!this.prerelease.length && !A.prerelease.length) return 0;
            let Q = 0;
            do {
                let B = this.prerelease[Q],
                    G = A.prerelease[Q];
                if (haA("prerelease compare", Q, B, G), B === void 0 && G === void 0) return 0;
                else if (G === void 0) return 1;
                else if (B === void 0) return -1;
                else if (B === G) continue;
                else return T7A(B, G)
            } while (++Q)
        }
        compareBuild(A) {
            if (!(A instanceof ET)) A = new ET(A, this.options);
            let Q = 0;
            do {
                let B = this.build[Q],
                    G = A.build[Q];
                if (haA("build compare", Q, B, G), B === void 0 && G === void 0) return 0;
                else if (G === void 0) return 1;
                else if (B === void 0) return -1;
                else if (B === G) continue;
                else return T7A(B, G)
            } while (++Q)
        }
        inc(A, Q, B) {
            if (A.startsWith("pre")) {
                if (!Q && B === !1) throw Error("invalid increment argument: identifier is empty");
                if (Q) {
                    let G = new RegExp(`^${this.options.loose?vJB[uaA.PRERELEASELOOSE]:vJB[uaA.PRERELEASE]}$`),
                        Z = `-${Q}`.match(G);
                    if (!Z || Z[1] !== Q) throw Error(`invalid identifier: ${Q}`)
                }
            }
            switch (A) {
                case "premajor":
                    this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", Q, B);
                    break;
                case "preminor":
                    this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", Q, B);
                    break;
                case "prepatch":
                    this.prerelease.length = 0, this.inc("patch", Q, B), this.inc("pre", Q, B);
                    break;
                case "prerelease":
                    if (this.prerelease.length === 0) this.inc("patch", Q, B);
                    this.inc("pre", Q, B);
                    break;
                case "release":
                    if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
                    this.prerelease.length = 0;
                    break;
                case "major":
                    if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
                    this.minor = 0, this.patch = 0, this.prerelease = [];
                    break;
                case "minor":
                    if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
                    this.patch = 0, this.prerelease = [];
                    break;
                case "patch":
                    if (this.prerelease.length === 0) this.patch++;
                    this.prerelease = [];
                    break;
                case "pre": {
                    let G = Number(B) ? 1 : 0;
                    if (this.prerelease.length === 0) this.prerelease = [G];
                    else {
                        let Z = this.prerelease.length;
                        while (--Z >= 0)
                            if (typeof this.prerelease[Z] === "number") this.prerelease[Z]++, Z = -2;
                        if (Z === -1) {
                            if (Q === this.prerelease.join(".") && B === !1) throw Error("invalid increment argument: identifier already exists");
                            this.prerelease.push(G)
                        }
                    }
                    if (Q) {
                        let Z = [Q, G];
                        if (B === !1) Z = [Q];
                        if (T7A(this.prerelease[0], Q) === 0) {
                            if (isNaN(this.prerelease[1])) this.prerelease = Z
                        } else this.prerelease = Z
                    }
                    break
                }
                default:
                    throw Error(`invalid increment argument: ${A}`)
            }
            if (this.raw = this.format(), this.build.length) this.raw += `+${this.build.join(".")}`;
            return this
        }
    }
    bJB.exports = ET
});
var Pt = U((Vu7, hJB) => {
    var fJB = vH(),
        m46 = (A, Q, B = !1) => {
            if (A instanceof fJB) return A;
            try {
                return new fJB(A, Q)
            } catch (G) {
                if (!B) return null;
                throw G
            }
        };
    hJB.exports = m46
});
var uJB = U((Ku7, gJB) => {
    var d46 = Pt(),
        c46 = (A, Q) => {
            let B = d46(A, Q);
            return B ? B.version : null
        };
    gJB.exports = c46
});
var dJB = U((Du7, mJB) => {
    var p46 = Pt(),
        l46 = (A, Q) => {
            let B = p46(A.trim().replace(/^[=v]+/, ""), Q);
            return B ? B.version : null
        };
    mJB.exports = l46
});
var lJB = U((Hu7, pJB) => {
    var cJB = vH(),
        i46 = (A, Q, B, G, Z) => {
            if (typeof B === "string") Z = G, G = B, B = void 0;
            try {
                return new cJB(A instanceof cJB ? A.version : A, B).inc(Q, G, Z).version
            } catch (I) {
                return null
            }
        };
    pJB.exports = i46
});
var aJB = U((Cu7, nJB) => {
    var iJB = Pt(),
        n46 = (A, Q) => {
            let B = iJB(A, null, !0),
                G = iJB(Q, null, !0),
                Z = B.compare(G);
            if (Z === 0) return null;
            let I = Z > 0,
                Y = I ? B : G,
                J = I ? G : B,
                W = !!Y.prerelease.length;
            if (!!J.prerelease.length && !W) {
                if (!J.patch && !J.minor) return "major";
                if (J.compareMain(Y) === 0) {
                    if (J.minor && !J.patch) return "minor";
                    return "patch"
                }
            }
            let F = W ? "pre" : "";
            if (B.major !== G.major) return F + "major";
            if (B.minor !== G.minor) return F + "minor";
            if (B.patch !== G.patch) return F + "patch";
            return "prerelease"
        };
    nJB.exports = n46
});
var rJB = U((Eu7, sJB) => {
    var a46 = vH(),
        s46 = (A, Q) => new a46(A, Q).major;
    sJB.exports = s46
});
var tJB = U((zu7, oJB) => {
    var r46 = vH(),
        o46 = (A, Q) => new r46(A, Q).minor;
    oJB.exports = o46
});
var AWB = U((Uu7, eJB) => {
    var t46 = vH(),
        e46 = (A, Q) => new t46(A, Q).patch;
    eJB.exports = e46
});
var BWB = U(($u7, QWB) => {
    var A86 = Pt(),
        Q86 = (A, Q) => {
            let B = A86(A, Q);
            return B && B.prerelease.length ? B.prerelease : null
        };
    QWB.exports = Q86
});
var FM = U((wu7, ZWB) => {
    var GWB = vH(),
        B86 = (A, Q, B) => new GWB(A, B).compare(new GWB(Q, B));
    ZWB.exports = B86
});
var YWB = U((qu7, IWB) => {
    var G86 = FM(),
        Z86 = (A, Q, B) => G86(Q, A, B);
    IWB.exports = Z86
});
var WWB = U((Nu7, JWB) => {
    var I86 = FM(),
        Y86 = (A, Q) => I86(A, Q, !0);
    JWB.exports = Y86
});
var maA = U((Lu7, FWB) => {
    var XWB = vH(),
        J86 = (A, Q, B) => {
            let G = new XWB(A, B),
                Z = new XWB(Q, B);
            return G.compare(Z) || G.compareBuild(Z)
        };
    FWB.exports = J86
});
var KWB = U((Mu7, VWB) => {
    var W86 = maA(),
        X86 = (A, Q) => A.sort((B, G) => W86(B, G, Q));
    VWB.exports = X86
});
var HWB = U((Ou7, DWB) => {
    var F86 = maA(),
        V86 = (A, Q) => A.sort((B, G) => F86(G, B, Q));
    DWB.exports = V86
});
var A$A = U((Ru7, CWB) => {
    var K86 = FM(),
        D86 = (A, Q, B) => K86(A, Q, B) > 0;
    CWB.exports = D86
});
var daA = U((Tu7, EWB) => {
    var H86 = FM(),
        C86 = (A, Q, B) => H86(A, Q, B) < 0;
    EWB.exports = C86
});
var Xg1 = U((Pu7, zWB) => {
    var E86 = FM(),
        z86 = (A, Q, B) => E86(A, Q, B) === 0;
    zWB.exports = z86
});
var Fg1 = U((ju7, UWB) => {
    var U86 = FM(),
        $86 = (A, Q, B) => U86(A, Q, B) !== 0;
    UWB.exports = $86
});
var Q$A = U((Su7, $WB) => {
    var w86 = FM(),
        q86 = (A, Q, B) => w86(A, Q, B) >= 0;
    $WB.exports = q86
});
var caA = U((_u7, wWB) => {
    var N86 = FM(),
        L86 = (A, Q, B) => N86(A, Q, B) <= 0;
    wWB.exports = L86
});
var Vg1 = U((ku7, qWB) => {
    var M86 = Xg1(),
        O86 = Fg1(),
        R86 = A$A(),
        T86 = Q$A(),
        P86 = daA(),
        j86 = caA(),
        S86 = (A, Q, B, G) => {
            switch (Q) {
                case "===":
                    if (typeof A === "object") A = A.version;
                    if (typeof B === "object") B = B.version;
                    return A === B;
                case "!==":
                    if (typeof A === "object") A = A.version;
                    if (typeof B === "object") B = B.version;
                    return A !== B;
                case "":
                case "=":
                case "==":
                    return M86(A, B, G);
                case "!=":
                    return O86(A, B, G);
                case ">":
                    return R86(A, B, G);
                case ">=":
                    return T86(A, B, G);
                case "<":
                    return P86(A, B, G);
                case "<=":
                    return j86(A, B, G);
                default:
                    throw TypeError(`Invalid operator: ${Q}`)
            }
        };
    qWB.exports = S86
});
var Kg1 = U((yu7, NWB) => {
    var _86 = vH(),
        k86 = Pt(),
        {
            safeRe: paA,
            t: laA
        } = R7A(),
        y86 = (A, Q) => {
            if (A instanceof _86) return A;
            if (typeof A === "number") A = String(A);
            if (typeof A !== "string") return null;
            Q = Q || {};
            let B = null;
            if (!Q.rtl) B = A.match(Q.includePrerelease ? paA[laA.COERCEFULL] : paA[laA.COERCE]);
            else {
                let W = Q.includePrerelease ? paA[laA.COERCERTLFULL] : paA[laA.COERCERTL],
                    X;
                while ((X = W.exec(A)) && (!B || B.index + B[0].length !== A.length)) {
                    if (!B || X.index + X[0].length !== B.index + B[0].length) B = X;
                    W.lastIndex = X.index + X[1].length + X[2].length
                }
                W.lastIndex = -1
            }
            if (B === null) return null;
            let G = B[2],
                Z = B[3] || "0",
                I = B[4] || "0",
                Y = Q.includePrerelease && B[5] ? `-${B[5]}` : "",
                J = Q.includePrerelease && B[6] ? `+${B[6]}` : "";
            return k86(`${G}.${Z}.${I}${Y}${J}`, Q)
        };
    NWB.exports = y86
});
var OWB = U((xu7, MWB) => {
    class LWB {
        constructor() {
            this.max = 1000, this.map = new Map
        }
        get(A) {
            let Q = this.map.get(A);
            if (Q === void 0) return;
            else return this.map.delete(A), this.map.set(A, Q), Q
        }
        delete(A) {
            return this.map.delete(A)
        }
        set(A, Q) {
            if (!this.delete(A) && Q !== void 0) {
                if (this.map.size >= this.max) {
                    let G = this.map.keys().next().value;
                    this.delete(G)
                }
                this.map.set(A, Q)
            }
            return this
        }
    }
    MWB.exports = LWB
});
var VM = U((vu7, jWB) => {
    var x86 = /\s+/g;
    class B$A {
        constructor(A, Q) {
            if (Q = b86(Q), A instanceof B$A)
                if (A.loose === !!Q.loose && A.includePrerelease === !!Q.includePrerelease) return A;
                else return new B$A(A.raw, Q);
            if (A instanceof Dg1) return this.raw = A.value, this.set = [
                [A]
            ], this.formatted = void 0, this;
            if (this.options = Q, this.loose = !!Q.loose, this.includePrerelease = !!Q.includePrerelease, this.raw = A.trim().replace(x86, " "), this.set = this.raw.split("||").map((B) => this.parseRange(B.trim())).filter((B) => B.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
            if (this.set.length > 1) {
                let B = this.set[0];
                if (this.set = this.set.filter((G) => !TWB(G[0])), this.set.length === 0) this.set = [B];
                else if (this.set.length > 1) {
                    for (let G of this.set)
                        if (G.length === 1 && c86(G[0])) {
                            this.set = [G];
                            break
                        }
                }
            }
            this.formatted = void 0
        }
        get range() {
            if (this.formatted === void 0) {
                this.formatted = "";
                for (let A = 0; A < this.set.length; A++) {
                    if (A > 0) this.formatted += "||";
                    let Q = this.set[A];
                    for (let B = 0; B < Q.length; B++) {
                        if (B > 0) this.formatted += " ";
                        this.formatted += Q[B].toString().trim()
                    }
                }
            }
            return this.formatted
        }
        format() {
            return this.range
        }
        toString() {
            return this.range
        }
        parseRange(A) {
            let B = ((this.options.includePrerelease && m86) | (this.options.loose && d86)) + ":" + A,
                G = RWB.get(B);
            if (G) return G;
            let Z = this.options.loose,
                I = Z ? KU[YE.HYPHENRANGELOOSE] : KU[YE.HYPHENRANGE];
            A = A.replace(I, e86(this.options.includePrerelease)), FI("hyphen replace", A), A = A.replace(KU[YE.COMPARATORTRIM], h86), FI("comparator trim", A), A = A.replace(KU[YE.TILDETRIM], g86), FI("tilde trim", A), A = A.replace(KU[YE.CARETTRIM], u86), FI("caret trim", A);
            let Y = A.split(" ").map((F) => p86(F, this.options)).join(" ").split(/\s+/).map((F) => t86(F, this.options));
            if (Z) Y = Y.filter((F) => {
                return FI("loose invalid filter", F, this.options), !!F.match(KU[YE.COMPARATORLOOSE])
            });
            FI("range list", Y);
            let J = new Map,
                W = Y.map((F) => new Dg1(F, this.options));
            for (let F of W) {
                if (TWB(F)) return [F];
                J.set(F.value, F)
            }
            if (J.size > 1 && J.has("")) J.delete("");
            let X = [...J.values()];
            return RWB.set(B, X), X
        }
        intersects(A, Q) {
            if (!(A instanceof B$A)) throw TypeError("a Range is required");
            return this.set.some((B) => {
                return PWB(B, Q) && A.set.some((G) => {
                    return PWB(G, Q) && B.every((Z) => {
                        return G.every((I) => {
                            return Z.intersects(I, Q)
                        })
                    })
                })
            })
        }
        test(A) {
            if (!A) return !1;
            if (typeof A === "string") try {
                A = new f86(A, this.options)
            } catch (Q) {
                return !1
            }
            for (let Q = 0; Q < this.set.length; Q++)
                if (A66(this.set[Q], A, this.options)) return !0;
            return !1
        }
    }
    jWB.exports = B$A;
    var v86 = OWB(),
        RWB = new v86,
        b86 = faA(),
        Dg1 = G$A(),
        FI = eUA(),
        f86 = vH(),
        {
            safeRe: KU,
            t: YE,
            comparatorTrimReplace: h86,
            tildeTrimReplace: g86,
            caretTrimReplace: u86
        } = R7A(),
        {
            FLAG_INCLUDE_PRERELEASE: m86,
            FLAG_LOOSE: d86
        } = tUA(),
        TWB = (A) => A.value === "<0.0.0-0",
        c86 = (A) => A.value === "",
        PWB = (A, Q) => {
            let B = !0,
                G = A.slice(),
                Z = G.pop();
            while (B && G.length) B = G.every((I) => {
                return Z.intersects(I, Q)
            }), Z = G.pop();
            return B
        },
        p86 = (A, Q) => {
            return FI("comp", A, Q), A = n86(A, Q), FI("caret", A), A = l86(A, Q), FI("tildes", A), A = s86(A, Q), FI("xrange", A), A = o86(A, Q), FI("stars", A), A
        },
        JE = (A) => !A || A.toLowerCase() === "x" || A === "*",
        l86 = (A, Q) => {
            return A.trim().split(/\s+/).map((B) => i86(B, Q)).join(" ")
        },
        i86 = (A, Q) => {
            let B = Q.loose ? KU[YE.TILDELOOSE] : KU[YE.TILDE];
            return A.replace(B, (G, Z, I, Y, J) => {
                FI("tilde", A, G, Z, I, Y, J);
                let W;
                if (JE(Z)) W = "";
                else if (JE(I)) W = `>=${Z}.0.0 <${+Z+1}.0.0-0`;
                else if (JE(Y)) W = `>=${Z}.${I}.0 <${Z}.${+I+1}.0-0`;
                else if (J) FI("replaceTilde pr", J), W = `>=${Z}.${I}.${Y}-${J} <${Z}.${+I+1}.0-0`;
                else W = `>=${Z}.${I}.${Y} <${Z}.${+I+1}.0-0`;
                return FI("tilde return", W), W
            })
        },
        n86 = (A, Q) => {
            return A.trim().split(/\s+/).map((B) => a86(B, Q)).join(" ")
        },
        a86 = (A, Q) => {
            FI("caret", A, Q);
            let B = Q.loose ? KU[YE.CARETLOOSE] : KU[YE.CARET],
                G = Q.includePrerelease ? "-0" : "";
            return A.replace(B, (Z, I, Y, J, W) => {
                FI("caret", A, Z, I, Y, J, W);
                let X;
                if (JE(I)) X = "";
                else if (JE(Y)) X = `>=${I}.0.0${G} <${+I+1}.0.0-0`;
                else if (JE(J))
                    if (I === "0") X = `>=${I}.${Y}.0${G} <${I}.${+Y+1}.0-0`;
                    else X = `>=${I}.${Y}.0${G} <${+I+1}.0.0-0`;
                else if (W)
                    if (FI("replaceCaret pr", W), I === "0")
                        if (Y === "0") X = `>=${I}.${Y}.${J}-${W} <${I}.${Y}.${+J+1}-0`;
                        else X = `>=${I}.${Y}.${J}-${W} <${I}.${+Y+1}.0-0`;
                else X = `>=${I}.${Y}.${J}-${W} <${+I+1}.0.0-0`;
                else if (FI("no pr"), I === "0")
                    if (Y === "0") X = `>=${I}.${Y}.${J}${G} <${I}.${Y}.${+J+1}-0`;
                    else X = `>=${I}.${Y}.${J}${G} <${I}.${+Y+1}.0-0`;
                else X = `>=${I}.${Y}.${J} <${+I+1}.0.0-0`;
                return FI("caret return", X), X
            })
        },
        s86 = (A, Q) => {
            return FI("replaceXRanges", A, Q), A.split(/\s+/).map((B) => r86(B, Q)).join(" ")
        },
        r86 = (A, Q) => {
            A = A.trim();
            let B = Q.loose ? KU[YE.XRANGELOOSE] : KU[YE.XRANGE];
            return A.replace(B, (G, Z, I, Y, J, W) => {
                FI("xRange", A, G, Z, I, Y, J, W);
                let X = JE(I),
                    F = X || JE(Y),
                    V = F || JE(J),
                    K = V;
                if (Z === "=" && K) Z = "";
                if (W = Q.includePrerelease ? "-0" : "", X)
                    if (Z === ">" || Z === "<") G = "<0.0.0-0";
                    else G = "*";
                else if (Z && K) {
                    if (F) Y = 0;
                    if (J = 0, Z === ">")
                        if (Z = ">=", F) I = +I + 1, Y = 0, J = 0;
                        else Y = +Y + 1, J = 0;
                    else if (Z === "<=")
                        if (Z = "<", F) I = +I + 1;
                        else Y = +Y + 1;
                    if (Z === "<") W = "-0";
                    G = `${Z+I}.${Y}.${J}${W}`
                } else if (F) G = `>=${I}.0.0${W} <${+I+1}.0.0-0`;
                else if (V) G = `>=${I}.${Y}.0${W} <${I}.${+Y+1}.0-0`;
                return FI("xRange return", G), G
            })
        },
        o86 = (A, Q) => {
            return FI("replaceStars", A, Q), A.trim().replace(KU[YE.STAR], "")
        },
        t86 = (A, Q) => {
            return FI("replaceGTE0", A, Q), A.trim().replace(KU[Q.includePrerelease ? YE.GTE0PRE : YE.GTE0], "")
        },
        e86 = (A) => (Q, B, G, Z, I, Y, J, W, X, F, V, K) => {
            if (JE(G)) B = "";
            else if (JE(Z)) B = `>=${G}.0.0${A?"-0":""}`;
            else if (JE(I)) B = `>=${G}.${Z}.0${A?"-0":""}`;
            else if (Y) B = `>=${B}`;
            else B = `>=${B}${A?"-0":""}`;
            if (JE(X)) W = "";
            else if (JE(F)) W = `<${+X+1}.0.0-0`;
            else if (JE(V)) W = `<${X}.${+F+1}.0-0`;
            else if (K) W = `<=${X}.${F}.${V}-${K}`;
            else if (A) W = `<${X}.${F}.${+V+1}-0`;
            else W = `<=${W}`;
            return `${B} ${W}`.trim()
        },
        A66 = (A, Q, B) => {
            for (let G = 0; G < A.length; G++)
                if (!A[G].test(Q)) return !1;
            if (Q.prerelease.length && !B.includePrerelease) {
                for (let G = 0; G < A.length; G++) {
                    if (FI(A[G].semver), A[G].semver === Dg1.ANY) continue;
                    if (A[G].semver.prerelease.length > 0) {
                        let Z = A[G].semver;
                        if (Z.major === Q.major && Z.minor === Q.minor && Z.patch === Q.patch) return !0
                    }
                }
                return !1
            }
            return !0
        }
});
var G$A = U((bu7, vWB) => {
    var Z$A = Symbol("SemVer ANY");
    class iaA {
        static get ANY() {
            return Z$A
        }
        constructor(A, Q) {
            if (Q = SWB(Q), A instanceof iaA)
                if (A.loose === !!Q.loose) return A;
                else A = A.value;
            if (A = A.trim().split(/\s+/).join(" "), Cg1("comparator", A, Q), this.options = Q, this.loose = !!Q.loose, this.parse(A), this.semver === Z$A) this.value = "";
            else this.value = this.operator + this.semver.version;
            Cg1("comp", this)
        }
        parse(A) {
            let Q = this.options.loose ? _WB[kWB.COMPARATORLOOSE] : _WB[kWB.COMPARATOR],
                B = A.match(Q);
            if (!B) throw TypeError(`Invalid comparator: ${A}`);
            if (this.operator = B[1] !== void 0 ? B[1] : "", this.operator === "=") this.operator = "";
            if (!B[2]) this.semver = Z$A;
            else this.semver = new yWB(B[2], this.options.loose)
        }
        toString() {
            return this.value
        }
        test(A) {
            if (Cg1("Comparator.test", A, this.options.loose), this.semver === Z$A || A === Z$A) return !0;
            if (typeof A === "string") try {
                A = new yWB(A, this.options)
            } catch (Q) {
                return !1
            }
            return Hg1(A, this.operator, this.semver, this.options)
        }
        intersects(A, Q) {
            if (!(A instanceof iaA)) throw TypeError("a Comparator is required");
            if (this.operator === "") {
                if (this.value === "") return !0;
                return new xWB(A.value, Q).test(this.value)
            } else if (A.operator === "") {
                if (A.value === "") return !0;
                return new xWB(this.value, Q).test(A.semver)
            }
            if (Q = SWB(Q), Q.includePrerelease && (this.value === "<0.0.0-0" || A.value === "<0.0.0-0")) return !1;
            if (!Q.includePrerelease && (this.value.startsWith("<0.0.0") || A.value.startsWith("<0.0.0"))) return !1;
            if (this.operator.startsWith(">") && A.operator.startsWith(">")) return !0;
            if (this.operator.startsWith("<") && A.operator.startsWith("<")) return !0;
            if (this.semver.version === A.semver.version && this.operator.includes("=") && A.operator.includes("=")) return !0;
            if (Hg1(this.semver, "<", A.semver, Q) && this.operator.startsWith(">") && A.operator.startsWith("<")) return !0;
            if (Hg1(this.semver, ">", A.semver, Q) && this.operator.startsWith("<") && A.operator.startsWith(">")) return !0;
            return !1
        }
    }
    vWB.exports = iaA;
    var SWB = faA(),
        {
            safeRe: _WB,
            t: kWB
        } = R7A(),
        Hg1 = Vg1(),
        Cg1 = eUA(),
        yWB = vH(),
        xWB = VM()
});
var P7A = U((fu7, bWB) => {
    var Q66 = VM(),
        B66 = (A, Q, B) => {
            try {
                Q = new Q66(Q, B)
            } catch (G) {
                return !1
            }
            return Q.test(A)
        };
    bWB.exports = B66
});
var hWB = U((hu7, fWB) => {
    var G66 = VM(),
        Z66 = (A, Q) => new G66(A, Q).set.map((B) => B.map((G) => G.value).join(" ").trim().split(" "));
    fWB.exports = Z66
});
var uWB = U((gu7, gWB) => {
    var I66 = vH(),
        Y66 = VM(),
        J66 = (A, Q, B) => {
            let G = null,
                Z = null,
                I = null;
            try {
                I = new Y66(Q, B)
            } catch (Y) {
                return null
            }