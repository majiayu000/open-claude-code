/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: ui_050.js
 * 处理时间: 2025-12-09T03:37:26.248Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 50/53
 * Lines: 372333 - 373832 (1500 lines)
 * Original file: cli.js
 */

    nd2.SentryError = id2
});
var NO = U((Ac2) => {
    Object.defineProperty(Ac2, "__esModule", {
        value: !0
    });
    var Jt5 = lG0(),
        Wt5 = xy(),
        pWA = qO(),
        Xt5 = vP(),
        ad2 = vTA();

    function Ft5(A, Q, B) {
        if (!(Q in A)) return;
        let G = A[Q],
            Z = B(G);
        if (typeof Z === "function") td2(Z, G);
        A[Q] = Z
    }

    function od2(A, Q, B) {
        try {
            Object.defineProperty(A, Q, {
                value: B,
                writable: !0,
                configurable: !0
            })
        } catch (G) {
            Wt5.DEBUG_BUILD && Xt5.logger.log(`Failed to add non-enumerable property "${Q}" to object`, A)
        }
    }

    function td2(A, Q) {
        try {
            let B = Q.prototype || {};
            A.prototype = Q.prototype = B, od2(A, "__sentry_original__", Q)
        } catch (B) {}
    }

    function Vt5(A) {
        return A.__sentry_original__
    }

    function Kt5(A) {
        return Object.keys(A).map((Q) => `${encodeURIComponent(Q)}=${encodeURIComponent(A[Q])}`).join("&")
    }

    function ed2(A) {
        if (pWA.isError(A)) return {
            message: A.message,
            name: A.name,
            stack: A.stack,
            ...rd2(A)
        };
        else if (pWA.isEvent(A)) {
            let Q = {
                type: A.type,
                target: sd2(A.target),
                currentTarget: sd2(A.currentTarget),
                ...rd2(A)
            };
            if (typeof CustomEvent < "u" && pWA.isInstanceOf(A, CustomEvent)) Q.detail = A.detail;
            return Q
        } else return A
    }

    function sd2(A) {
        try {
            return pWA.isElement(A) ? Jt5.htmlTreeAsString(A) : Object.prototype.toString.call(A)
        } catch (Q) {
            return "<unknown>"
        }
    }

    function rd2(A) {
        if (typeof A === "object" && A !== null) {
            let Q = {};
            for (let B in A)
                if (Object.prototype.hasOwnProperty.call(A, B)) Q[B] = A[B];
            return Q
        } else return {}
    }

    function Dt5(A, Q = 40) {
        let B = Object.keys(ed2(A));
        if (B.sort(), !B.length) return "[object has no keys]";
        if (B[0].length >= Q) return ad2.truncate(B[0], Q);
        for (let G = B.length; G > 0; G--) {
            let Z = B.slice(0, G).join(", ");
            if (Z.length > Q) continue;
            if (G === B.length) return Z;
            return ad2.truncate(Z, Q)
        }
        return ""
    }

    function Ht5(A) {
        return oG0(A, new Map)
    }

    function oG0(A, Q) {
        if (Ct5(A)) {
            let B = Q.get(A);
            if (B !== void 0) return B;
            let G = {};
            Q.set(A, G);
            for (let Z of Object.keys(A))
                if (typeof A[Z] < "u") G[Z] = oG0(A[Z], Q);
            return G
        }
        if (Array.isArray(A)) {
            let B = Q.get(A);
            if (B !== void 0) return B;
            let G = [];
            return Q.set(A, G), A.forEach((Z) => {
                G.push(oG0(Z, Q))
            }), G
        }
        return A
    }

    function Ct5(A) {
        if (!pWA.isPlainObject(A)) return !1;
        try {
            let Q = Object.getPrototypeOf(A).constructor.name;
            return !Q || Q === "Object"
        } catch (Q) {
            return !0
        }
    }

    function Et5(A) {
        let Q;
        switch (!0) {
            case (A === void 0 || A === null):
                Q = new String(A);
                break;
            case (typeof A === "symbol" || typeof A === "bigint"):
                Q = Object(A);
                break;
            case pWA.isPrimitive(A):
                Q = new A.constructor(A);
                break;
            default:
                Q = A;
                break
        }
        return Q
    }
    Ac2.addNonEnumerableProperty = od2;
    Ac2.convertToPlainObject = ed2;
    Ac2.dropUndefinedKeys = Ht5;
    Ac2.extractExceptionKeysForMessage = Dt5;
    Ac2.fill = Ft5;
    Ac2.getOriginalFunction = Vt5;
    Ac2.markFunctionWrapped = td2;
    Ac2.objectify = Et5;
    Ac2.urlEncode = Kt5
});
var V71 = U((Bc2) => {
    Object.defineProperty(Bc2, "__esModule", {
        value: !0
    });

    function Qc2(A, Q = !1) {
        return !(Q || A && !A.startsWith("/") && !A.match(/^[A-Z]:/) && !A.startsWith(".") && !A.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//)) && A !== void 0 && !A.includes("node_modules/")
    }

    function Rt5(A) {
        let Q = /^\s*[-]{4,}$/,
            B = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
        return (G) => {
            let Z = G.match(B);
            if (Z) {
                let I, Y, J, W, X;
                if (Z[1]) {
                    J = Z[1];
                    let K = J.lastIndexOf(".");
                    if (J[K - 1] === ".") K--;
                    if (K > 0) {
                        I = J.slice(0, K), Y = J.slice(K + 1);
                        let D = I.indexOf(".Module");
                        if (D > 0) J = J.slice(D + 1), I = I.slice(0, D)
                    }
                    W = void 0
                }
                if (Y) W = I, X = Y;
                if (Y === "<anonymous>") X = void 0, J = void 0;
                if (J === void 0) X = X || "<anonymous>", J = W ? `${W}.${X}` : X;
                let F = Z[2] && Z[2].startsWith("file://") ? Z[2].slice(7) : Z[2],
                    V = Z[5] === "native";
                if (F && F.match(/\/[A-Z]:/)) F = F.slice(1);
                if (!F && Z[5] && !V) F = Z[5];
                return {
                    filename: F,
                    module: A ? A(F) : void 0,
                    function: J,
                    lineno: parseInt(Z[3], 10) || void 0,
                    colno: parseInt(Z[4], 10) || void 0,
                    in_app: Qc2(F, V)
                }
            }
            if (G.match(Q)) return {
                filename: G
            };
            return
        }
    }
    Bc2.filenameIsInApp = Qc2;
    Bc2.node = Rt5
});
var K71 = U((Xc2) => {
    Object.defineProperty(Xc2, "__esModule", {
        value: !0
    });
    var Ic2 = V71(),
        Yc2 = 50,
        Gc2 = /\(error: (.*)\)/,
        Zc2 = /captureMessage|captureException/;

    function Jc2(...A) {
        let Q = A.sort((B, G) => B[0] - G[0]).map((B) => B[1]);
        return (B, G = 0) => {
            let Z = [],
                I = B.split(`
`);
            for (let Y = G; Y < I.length; Y++) {
                let J = I[Y];
                if (J.length > 1024) continue;
                let W = Gc2.test(J) ? J.replace(Gc2, "$1") : J;
                if (W.match(/\S*Error: /)) continue;
                for (let X of Q) {
                    let F = X(W);
                    if (F) {
                        Z.push(F);
                        break
                    }
                }
                if (Z.length >= Yc2) break
            }
            return Wc2(Z)
        }
    }

    function jt5(A) {
        if (Array.isArray(A)) return Jc2(...A);
        return A
    }

    function Wc2(A) {
        if (!A.length) return [];
        let Q = Array.from(A);
        if (/sentryWrapped/.test(Q[Q.length - 1].function || "")) Q.pop();
        if (Q.reverse(), Zc2.test(Q[Q.length - 1].function || "")) {
            if (Q.pop(), Zc2.test(Q[Q.length - 1].function || "")) Q.pop()
        }
        return Q.slice(0, Yc2).map((B) => ({
            ...B,
            filename: B.filename || Q[Q.length - 1].filename,
            function: B.function || "?"
        }))
    }
    var tG0 = "<anonymous>";

    function St5(A) {
        try {
            if (!A || typeof A !== "function") return tG0;
            return A.name || tG0
        } catch (Q) {
            return tG0
        }
    }

    function _t5(A) {
        return [90, Ic2.node(A)]
    }
    Xc2.filenameIsInApp = Ic2.filenameIsInApp;
    Xc2.createStackParser = Jc2;
    Xc2.getFunctionName = St5;
    Xc2.nodeStackLineParser = _t5;
    Xc2.stackParserFromStackParserOptions = jt5;
    Xc2.stripSentryFramesAndReverse = Wc2
});
var Ag = U((Vc2) => {
    Object.defineProperty(Vc2, "__esModule", {
        value: !0
    });
    var ht5 = xy(),
        gt5 = vP(),
        ut5 = K71(),
        lWA = {},
        Fc2 = {};

    function mt5(A, Q) {
        lWA[A] = lWA[A] || [], lWA[A].push(Q)
    }

    function dt5() {
        Object.keys(lWA).forEach((A) => {
            lWA[A] = void 0
        })
    }

    function ct5(A, Q) {
        if (!Fc2[A]) Q(), Fc2[A] = !0
    }

    function pt5(A, Q) {
        let B = A && lWA[A];
        if (!B) return;
        for (let G of B) try {
            G(Q)
        } catch (Z) {
            ht5.DEBUG_BUILD && gt5.logger.error(`Error while triggering instrumentation handler.
Type: ${A}
Name: ${ut5.getFunctionName(G)}
Error:`, Z)
        }
    }
    Vc2.addHandler = mt5;
    Vc2.maybeInstrument = ct5;
    Vc2.resetInstrumentationHandlers = dt5;
    Vc2.triggerHandlers = pt5
});
var QZ0 = U((Kc2) => {
    Object.defineProperty(Kc2, "__esModule", {
        value: !0
    });
    var eG0 = vP(),
        st5 = NO(),
        D71 = HC(),
        AZ0 = Ag();

    function rt5(A) {
        AZ0.addHandler("console", A), AZ0.maybeInstrument("console", ot5)
    }

    function ot5() {
        if (!("console" in D71.GLOBAL_OBJ)) return;
        eG0.CONSOLE_LEVELS.forEach(function(A) {
            if (!(A in D71.GLOBAL_OBJ.console)) return;
            st5.fill(D71.GLOBAL_OBJ.console, A, function(Q) {
                return eG0.originalConsoleMethods[A] = Q,
                    function(...B) {
                        let G = {
                            args: B,
                            level: A
                        };
                        AZ0.triggerHandlers("console", G);
                        let Z = eG0.originalConsoleMethods[A];
                        Z && Z.apply(D71.GLOBAL_OBJ.console, B)
                    }
            })
        })
    }
    Kc2.addConsoleInstrumentationHandler = rt5
});
var fTA = U((Hc2) => {
    Object.defineProperty(Hc2, "__esModule", {
        value: !0
    });
    var et5 = NO(),
        BZ0 = vTA(),
        Ae5 = HC();

    function Qe5() {
        let A = Ae5.GLOBAL_OBJ,
            Q = A.crypto || A.msCrypto,
            B = () => Math.random() * 16;
        try {
            if (Q && Q.randomUUID) return Q.randomUUID().replace(/-/g, "");
            if (Q && Q.getRandomValues) B = () => {
                let G = new Uint8Array(1);
                return Q.getRandomValues(G), G[0]
            }
        } catch (G) {}
        return ([1e7] + 1000 + 4000 + 8000 + 100000000000).replace(/[018]/g, (G) => (G ^ (B() & 15) >> G / 4).toString(16))
    }

    function Dc2(A) {
        return A.exception && A.exception.values ? A.exception.values[0] : void 0
    }

    function Be5(A) {
        let {
            message: Q,
            event_id: B
        } = A;
        if (Q) return Q;
        let G = Dc2(A);
        if (G) {
            if (G.type && G.value) return `${G.type}: ${G.value}`;
            return G.type || G.value || B || "<unknown>"
        }
        return B || "<unknown>"
    }

    function Ge5(A, Q, B) {
        let G = A.exception = A.exception || {},
            Z = G.values = G.values || [],
            I = Z[0] = Z[0] || {};
        if (!I.value) I.value = Q || "";
        if (!I.type) I.type = B || "Error"
    }

    function Ze5(A, Q) {
        let B = Dc2(A);
        if (!B) return;
        let G = {
                type: "generic",
                handled: !0
            },
            Z = B.mechanism;
        if (B.mechanism = {
                ...G,
                ...Z,
                ...Q
            }, Q && "data" in Q) {
            let I = {
                ...Z && Z.data,
                ...Q.data
            };
            B.mechanism.data = I
        }
    }
    var Ie5 = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

    function Ye5(A) {
        let Q = A.match(Ie5) || [],
            B = parseInt(Q[1], 10),
            G = parseInt(Q[2], 10),
            Z = parseInt(Q[3], 10);
        return {
            buildmetadata: Q[5],
            major: isNaN(B) ? void 0 : B,
            minor: isNaN(G) ? void 0 : G,
            patch: isNaN(Z) ? void 0 : Z,
            prerelease: Q[4]
        }
    }

    function Je5(A, Q, B = 5) {
        if (Q.lineno === void 0) return;
        let G = A.length,
            Z = Math.max(Math.min(G - 1, Q.lineno - 1), 0);
        Q.pre_context = A.slice(Math.max(0, Z - B), Z).map((I) => BZ0.snipLine(I, 0)), Q.context_line = BZ0.snipLine(A[Math.min(G - 1, Z)], Q.colno || 0), Q.post_context = A.slice(Math.min(Z + 1, G), Z + 1 + B).map((I) => BZ0.snipLine(I, 0))
    }

    function We5(A) {
        if (A && A.__sentry_captured__) return !0;
        try {
            et5.addNonEnumerableProperty(A, "__sentry_captured__", !0)
        } catch (Q) {}
        return !1
    }

    function Xe5(A) {
        return Array.isArray(A) ? A : [A]
    }
    Hc2.addContextToFrame = Je5;
    Hc2.addExceptionMechanism = Ze5;
    Hc2.addExceptionTypeValue = Ge5;
    Hc2.arrayify = Xe5;
    Hc2.checkOrSetAlreadyCaught = We5;
    Hc2.getEventDescription = Be5;
    Hc2.parseSemver = Ye5;
    Hc2.uuid4 = Qe5
});
var YZ0 = U((Uc2) => {
    Object.defineProperty(Uc2, "__esModule", {
        value: !0
    });
    var Ue5 = fTA(),
        H71 = NO(),
        $e5 = HC(),
        GZ0 = Ag(),
        iWA = $e5.GLOBAL_OBJ,
        we5 = 1000,
        Cc2, ZZ0, IZ0;

    function qe5(A) {
        GZ0.addHandler("dom", A), GZ0.maybeInstrument("dom", zc2)
    }

    function zc2() {
        if (!iWA.document) return;
        let A = GZ0.triggerHandlers.bind(null, "dom"),
            Q = Ec2(A, !0);
        iWA.document.addEventListener("click", Q, !1), iWA.document.addEventListener("keypress", Q, !1), ["EventTarget", "Node"].forEach((B) => {
            let G = iWA[B] && iWA[B].prototype;
            if (!G || !G.hasOwnProperty || !G.hasOwnProperty("addEventListener")) return;
            H71.fill(G, "addEventListener", function(Z) {
                return function(I, Y, J) {
                    if (I === "click" || I == "keypress") try {
                        let W = this,
                            X = W.__sentry_instrumentation_handlers__ = W.__sentry_instrumentation_handlers__ || {},
                            F = X[I] = X[I] || {
                                refCount: 0
                            };
                        if (!F.handler) {
                            let V = Ec2(A);
                            F.handler = V, Z.call(this, I, V, J)
                        }
                        F.refCount++
                    } catch (W) {}
                    return Z.call(this, I, Y, J)
                }
            }), H71.fill(G, "removeEventListener", function(Z) {
                return function(I, Y, J) {
                    if (I === "click" || I == "keypress") try {
                        let W = this,
                            X = W.__sentry_instrumentation_handlers__ || {},
                            F = X[I];
                        if (F) {
                            if (F.refCount--, F.refCount <= 0) Z.call(this, I, F.handler, J), F.handler = void 0, delete X[I];
                            if (Object.keys(X).length === 0) delete W.__sentry_instrumentation_handlers__
                        }
                    } catch (W) {}
                    return Z.call(this, I, Y, J)
                }
            })
        })
    }

    function Ne5(A) {
        if (A.type !== ZZ0) return !1;
        try {
            if (!A.target || A.target._sentryId !== IZ0) return !1
        } catch (Q) {}
        return !0
    }

    function Le5(A, Q) {
        if (A !== "keypress") return !1;
        if (!Q || !Q.tagName) return !0;
        if (Q.tagName === "INPUT" || Q.tagName === "TEXTAREA" || Q.isContentEditable) return !1;
        return !0
    }

    function Ec2(A, Q = !1) {
        return (B) => {
            if (!B || B._sentryCaptured) return;
            let G = Me5(B);
            if (Le5(B.type, G)) return;
            if (H71.addNonEnumerableProperty(B, "_sentryCaptured", !0), G && !G._sentryId) H71.addNonEnumerableProperty(G, "_sentryId", Ue5.uuid4());
            let Z = B.type === "keypress" ? "input" : B.type;
            if (!Ne5(B)) A({
                event: B,
                name: Z,
                global: Q
            }), ZZ0 = B.type, IZ0 = G ? G._sentryId : void 0;
            clearTimeout(Cc2), Cc2 = iWA.setTimeout(() => {
                IZ0 = void 0, ZZ0 = void 0
            }, we5)
        }
    }

    function Me5(A) {
        try {
            return A.target
        } catch (Q) {
            return null
        }
    }
    Uc2.addClickKeypressInstrumentationHandler = qe5;
    Uc2.instrumentDOM = zc2
});
var XZ0 = U(($c2) => {
    Object.defineProperty($c2, "__esModule", {
        value: !0
    });
    var Te5 = xy(),
        Pe5 = vP(),
        je5 = HC(),
        C71 = je5.getGlobalObject();

    function Se5() {
        try {
            return new ErrorEvent(""), !0
        } catch (A) {
            return !1
        }
    }

    function _e5() {
        try {
            return new DOMError(""), !0
        } catch (A) {
            return !1
        }
    }

    function ke5() {
        try {
            return new DOMException(""), !0
        } catch (A) {
            return !1
        }
    }

    function WZ0() {
        if (!("fetch" in C71)) return !1;
        try {
            return new Request("http://www.example.com"), !0
        } catch (A) {
            return !1
        }
    }

    function JZ0(A) {
        return A && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(A.toString())
    }

    function ye5() {
        if (typeof EdgeRuntime === "string") return !0;
        if (!WZ0()) return !1;
        if (JZ0(C71.fetch)) return !0;
        let A = !1,
            Q = C71.document;
        if (Q && typeof Q.createElement === "function") try {
            let B = Q.createElement("iframe");
            if (B.hidden = !0, Q.head.appendChild(B), B.contentWindow && B.contentWindow.fetch) A = JZ0(B.contentWindow.fetch);
            Q.head.removeChild(B)
        } catch (B) {
            Te5.DEBUG_BUILD && Pe5.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", B)
        }
        return A
    }

    function xe5() {
        return "ReportingObserver" in C71
    }

    function ve5() {
        if (!WZ0()) return !1;
        try {
            return new Request("_", {
                referrerPolicy: "origin"
            }), !0
        } catch (A) {
            return !1
        }
    }
    $c2.isNativeFetch = JZ0;
    $c2.supportsDOMError = _e5;
    $c2.supportsDOMException = ke5;
    $c2.supportsErrorEvent = Se5;
    $c2.supportsFetch = WZ0;
    $c2.supportsNativeFetch = ye5;
    $c2.supportsReferrerPolicy = ve5;
    $c2.supportsReportingObserver = xe5
});
var VZ0 = U((Lc2) => {
    Object.defineProperty(Lc2, "__esModule", {
        value: !0
    });
    var pe5 = NO(),
        le5 = XZ0(),
        wc2 = HC(),
        hTA = Ag();

    function ie5(A) {
        hTA.addHandler("fetch", A), hTA.maybeInstrument("fetch", ne5)
    }

    function ne5() {
        if (!le5.supportsNativeFetch()) return;
        pe5.fill(wc2.GLOBAL_OBJ, "fetch", function(A) {
            return function(...Q) {
                let {
                    method: B,
                    url: G
                } = Nc2(Q), Z = {
                    args: Q,
                    fetchData: {
                        method: B,
                        url: G
                    },
                    startTimestamp: Date.now()
                };
                return hTA.triggerHandlers("fetch", {
                    ...Z
                }), A.apply(wc2.GLOBAL_OBJ, Q).then((I) => {
                    let Y = {
                        ...Z,
                        endTimestamp: Date.now(),
                        response: I
                    };
                    return hTA.triggerHandlers("fetch", Y), I
                }, (I) => {
                    let Y = {
                        ...Z,
                        endTimestamp: Date.now(),
                        error: I
                    };
                    throw hTA.triggerHandlers("fetch", Y), I
                })
            }
        })
    }

    function FZ0(A, Q) {
        return !!A && typeof A === "object" && !!A[Q]
    }

    function qc2(A) {
        if (typeof A === "string") return A;
        if (!A) return "";
        if (FZ0(A, "url")) return A.url;
        if (A.toString) return A.toString();
        return ""
    }

    function Nc2(A) {
        if (A.length === 0) return {
            method: "GET",
            url: ""
        };
        if (A.length === 2) {
            let [B, G] = A;
            return {
                url: qc2(B),
                method: FZ0(G, "method") ? String(G.method).toUpperCase() : "GET"
            }
        }
        let Q = A[0];
        return {
            url: qc2(Q),
            method: FZ0(Q, "method") ? String(Q.method).toUpperCase() : "GET"
        }
    }
    Lc2.addFetchInstrumentationHandler = ie5;
    Lc2.parseFetchArgs = Nc2
});
var HZ0 = U((Mc2) => {
    Object.defineProperty(Mc2, "__esModule", {
        value: !0
    });
    var KZ0 = HC(),
        DZ0 = Ag(),
        E71 = null;

    function re5(A) {
        DZ0.addHandler("error", A), DZ0.maybeInstrument("error", oe5)
    }

    function oe5() {
        E71 = KZ0.GLOBAL_OBJ.onerror, KZ0.GLOBAL_OBJ.onerror = function(A, Q, B, G, Z) {
            let I = {
                column: G,
                error: Z,
                line: B,
                msg: A,
                url: Q
            };
            if (DZ0.triggerHandlers("error", I), E71 && !E71.__SENTRY_LOADER__) return E71.apply(this, arguments);
            return !1
        }, KZ0.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0
    }
    Mc2.addGlobalErrorInstrumentationHandler = re5
});
var zZ0 = U((Oc2) => {
    Object.defineProperty(Oc2, "__esModule", {
        value: !0
    });
    var CZ0 = HC(),
        EZ0 = Ag(),
        z71 = null;

    function ee5(A) {
        EZ0.addHandler("unhandledrejection", A), EZ0.maybeInstrument("unhandledrejection", AA3)
    }

    function AA3() {
        z71 = CZ0.GLOBAL_OBJ.onunhandledrejection, CZ0.GLOBAL_OBJ.onunhandledrejection = function(A) {
            let Q = A;
            if (EZ0.triggerHandlers("unhandledrejection", Q), z71 && !z71.__SENTRY_LOADER__) return z71.apply(this, arguments);
            return !0
        }, CZ0.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
    }
    Oc2.addGlobalUnhandledRejectionInstrumentationHandler = ee5
});
var UZ0 = U((Rc2) => {
    Object.defineProperty(Rc2, "__esModule", {
        value: !0
    });
    var BA3 = HC(),
        U71 = BA3.getGlobalObject();

    function GA3() {
        let A = U71.chrome,
            Q = A && A.app && A.app.runtime,
            B = "history" in U71 && !!U71.history.pushState && !!U71.history.replaceState;
        return !Q && B
    }
    Rc2.supportsHistory = GA3
});
var $Z0 = U((Pc2) => {
    Object.defineProperty(Pc2, "__esModule", {
        value: !0
    });
    var Tc2 = NO();
    xy();
    vP();
    var IA3 = HC(),
        YA3 = UZ0(),
        w71 = Ag(),
        gTA = IA3.GLOBAL_OBJ,
        $71;

    function JA3(A) {
        w71.addHandler("history", A), w71.maybeInstrument("history", WA3)
    }

    function WA3() {
        if (!YA3.supportsHistory()) return;
        let A = gTA.onpopstate;
        gTA.onpopstate = function(...B) {
            let G = gTA.location.href,
                Z = $71;
            $71 = G;
            let I = {
                from: Z,
                to: G
            };
            if (w71.triggerHandlers("history", I), A) try {
                return A.apply(this, B)
            } catch (Y) {}
        };

        function Q(B) {
            return function(...G) {
                let Z = G.length > 2 ? G[2] : void 0;
                if (Z) {
                    let I = $71,
                        Y = String(Z);
                    $71 = Y;
                    let J = {
                        from: I,
                        to: Y
                    };
                    w71.triggerHandlers("history", J)
                }
                return B.apply(this, G)
            }
        }
        Tc2.fill(gTA.history, "pushState", Q), Tc2.fill(gTA.history, "replaceState", Q)
    }
    Pc2.addHistoryInstrumentationHandler = JA3
});
var wZ0 = U((Sc2) => {
    Object.defineProperty(Sc2, "__esModule", {
        value: !0
    });
    var N71 = qO(),
        q71 = NO(),
        FA3 = HC(),
        L71 = Ag(),
        VA3 = FA3.GLOBAL_OBJ,
        uTA = "__sentry_xhr_v3__";

    function KA3(A) {
        L71.addHandler("xhr", A), L71.maybeInstrument("xhr", jc2)
    }

    function jc2() {
        if (!VA3.XMLHttpRequest) return;
        let A = XMLHttpRequest.prototype;
        q71.fill(A, "open", function(Q) {
            return function(...B) {
                let G = Date.now(),
                    Z = N71.isString(B[0]) ? B[0].toUpperCase() : void 0,
                    I = DA3(B[1]);
                if (!Z || !I) return Q.apply(this, B);
                if (this[uTA] = {
                        method: Z,
                        url: I,
                        request_headers: {}
                    }, Z === "POST" && I.match(/sentry_key/)) this.__sentry_own_request__ = !0;
                let Y = () => {
                    let J = this[uTA];
                    if (!J) return;
                    if (this.readyState === 4) {
                        try {
                            J.status_code = this.status
                        } catch (X) {}
                        let W = {
                            args: [Z, I],
                            endTimestamp: Date.now(),
                            startTimestamp: G,
                            xhr: this
                        };
                        L71.triggerHandlers("xhr", W)
                    }
                };
                if ("onreadystatechange" in this && typeof this.onreadystatechange === "function") q71.fill(this, "onreadystatechange", function(J) {
                    return function(...W) {
                        return Y(), J.apply(this, W)
                    }
                });
                else this.addEventListener("readystatechange", Y);
                return q71.fill(this, "setRequestHeader", function(J) {
                    return function(...W) {
                        let [X, F] = W, V = this[uTA];
                        if (V && N71.isString(X) && N71.isString(F)) V.request_headers[X.toLowerCase()] = F;
                        return J.apply(this, W)
                    }
                }), Q.apply(this, B)
            }
        }), q71.fill(A, "send", function(Q) {
            return function(...B) {
                let G = this[uTA];
                if (!G) return Q.apply(this, B);
                if (B[0] !== void 0) G.body = B[0];
                let Z = {
                    args: [G.method, G.url],
                    startTimestamp: Date.now(),
                    xhr: this
                };
                return L71.triggerHandlers("xhr", Z), Q.apply(this, B)
            }
        })
    }

    function DA3(A) {
        if (N71.isString(A)) return A;
        try {
            return A.toString()
        } catch (Q) {}
        return
    }
    Sc2.SENTRY_XHR_DATA_KEY = uTA;
    Sc2.addXhrInstrumentationHandler = KA3;
    Sc2.instrumentXHR = jc2
});
var hc2 = U((fc2) => {
    Object.defineProperty(fc2, "__esModule", {
        value: !0
    });
    var zA3 = xy(),
        UA3 = vP(),
        _c2 = QZ0(),
        kc2 = YZ0(),
        yc2 = VZ0(),
        xc2 = HZ0(),
        vc2 = zZ0(),
        bc2 = $Z0(),
        qZ0 = wZ0();

    function $A3(A, Q) {
        switch (A) {
            case "console":
                return _c2.addConsoleInstrumentationHandler(Q);
            case "dom":
                return kc2.addClickKeypressInstrumentationHandler(Q);
            case "xhr":
                return qZ0.addXhrInstrumentationHandler(Q);
            case "fetch":
                return yc2.addFetchInstrumentationHandler(Q);
            case "history":
                return bc2.addHistoryInstrumentationHandler(Q);
            case "error":
                return xc2.addGlobalErrorInstrumentationHandler(Q);
            case "unhandledrejection":
                return vc2.addGlobalUnhandledRejectionInstrumentationHandler(Q);
            default:
                zA3.DEBUG_BUILD && UA3.logger.warn("unknown instrumentation type:", A)
        }
    }
    fc2.addConsoleInstrumentationHandler = _c2.addConsoleInstrumentationHandler;
    fc2.addClickKeypressInstrumentationHandler = kc2.addClickKeypressInstrumentationHandler;
    fc2.addFetchInstrumentationHandler = yc2.addFetchInstrumentationHandler;
    fc2.addGlobalErrorInstrumentationHandler = xc2.addGlobalErrorInstrumentationHandler;
    fc2.addGlobalUnhandledRejectionInstrumentationHandler = vc2.addGlobalUnhandledRejectionInstrumentationHandler;
    fc2.addHistoryInstrumentationHandler = bc2.addHistoryInstrumentationHandler;
    fc2.SENTRY_XHR_DATA_KEY = qZ0.SENTRY_XHR_DATA_KEY;
    fc2.addXhrInstrumentationHandler = qZ0.addXhrInstrumentationHandler;
    fc2.addInstrumentationHandler = $A3
});
var NZ0 = U((gc2) => {
    Object.defineProperty(gc2, "__esModule", {
        value: !0
    });

    function jA3() {
        return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__
    }

    function SA3() {
        return "npm"
    }
    gc2.getSDKSource = SA3;
    gc2.isBrowserBundle = jA3
});
var LZ0 = U((uc2, O71) => {
    Object.defineProperty(uc2, "__esModule", {
        value: !0
    });
    var yA3 = NZ0();

    function xA3() {
        return !yA3.isBrowserBundle() && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]"
    }

    function M71(A, Q) {
        return A.require(Q)
    }

    function vA3(A) {
        let Q;
        try {
            Q = M71(O71, A)
        } catch (B) {}
        try {
            let {
                cwd: B
            } = M71(O71, "process");
            Q = M71(O71, `${B()}/node_modules/${A}`)
        } catch (B) {}
        return Q
    }
    uc2.dynamicRequire = M71;
    uc2.isNodeEnv = xA3;
    uc2.loadModule = vA3
});
var cc2 = U((dc2) => {
    Object.defineProperty(dc2, "__esModule", {
        value: !0
    });
    var gA3 = LZ0(),
        mc2 = HC();

    function uA3() {
        return typeof window < "u" && (!gA3.isNodeEnv() || mA3())
    }

    function mA3() {
        return mc2.GLOBAL_OBJ.process !== void 0 && mc2.GLOBAL_OBJ.process.type === "renderer"
    }
    dc2.isBrowser = uA3
});
var MZ0 = U((pc2) => {
    Object.defineProperty(pc2, "__esModule", {
        value: !0
    });

    function cA3() {
        let A = typeof WeakSet === "function",
            Q = A ? new WeakSet : [];

        function B(Z) {
            if (A) {
                if (Q.has(Z)) return !0;
                return Q.add(Z), !1
            }
            for (let I = 0; I < Q.length; I++)
                if (Q[I] === Z) return !0;
            return Q.push(Z), !1
        }

        function G(Z) {
            if (A) Q.delete(Z);
            else
                for (let I = 0; I < Q.length; I++)
                    if (Q[I] === Z) {
                        Q.splice(I, 1);
                        break
                    }
        }
        return [B, G]
    }
    pc2.memoBuilder = cA3
});
var mTA = U((nc2) => {
    Object.defineProperty(nc2, "__esModule", {
        value: !0
    });
    var OZ0 = qO(),
        lA3 = MZ0(),
        iA3 = NO(),
        nA3 = K71();

    function lc2(A, Q = 100, B = 1 / 0) {
        try {
            return R71("", A, Q, B)
        } catch (G) {
            return {
                ERROR: `**non-serializable** (${G})`
            }
        }
    }

    function ic2(A, Q = 3, B = 102400) {
        let G = lc2(A, Q);
        if (oA3(G) > B) return ic2(A, Q - 1, B);
        return G
    }

    function R71(A, Q, B = 1 / 0, G = 1 / 0, Z = lA3.memoBuilder()) {
        let [I, Y] = Z;
        if (Q == null || ["number", "boolean", "string"].includes(typeof Q) && !OZ0.isNaN(Q)) return Q;
        let J = aA3(A, Q);
        if (!J.startsWith("[object ")) return J;
        if (Q.__sentry_skip_normalization__) return Q;
        let W = typeof Q.__sentry_override_normalization_depth__ === "number" ? Q.__sentry_override_normalization_depth__ : B;
        if (W === 0) return J.replace("object ", "");
        if (I(Q)) return "[Circular ~]";
        let X = Q;
        if (X && typeof X.toJSON === "function") try {
            let D = X.toJSON();
            return R71("", D, W - 1, G, Z)
        } catch (D) {}
        let F = Array.isArray(Q) ? [] : {},
            V = 0,
            K = iA3.convertToPlainObject(Q);
        for (let D in K) {
            if (!Object.prototype.hasOwnProperty.call(K, D)) continue;
            if (V >= G) {
                F[D] = "[MaxProperties ~]";
                break
            }
            let H = K[D];
            F[D] = R71(D, H, W - 1, G, Z), V++
        }
        return Y(Q), F
    }

    function aA3(A, Q) {
        try {
            if (A === "domain" && Q && typeof Q === "object" && Q._events) return "[Domain]";
            if (A === "domainEmitter") return "[DomainEmitter]";
            if (typeof global < "u" && Q === global) return "[Global]";
            if (typeof window < "u" && Q === window) return "[Window]";
            if (typeof document < "u" && Q === document) return "[Document]";
            if (OZ0.isVueViewModel(Q)) return "[VueViewModel]";
            if (OZ0.isSyntheticEvent(Q)) return "[SyntheticEvent]";
            if (typeof Q === "number" && Q !== Q) return "[NaN]";
            if (typeof Q === "function") return `[Function: ${nA3.getFunctionName(Q)}]`;
            if (typeof Q === "symbol") return `[${String(Q)}]`;
            if (typeof Q === "bigint") return `[BigInt: ${String(Q)}]`;
            let B = sA3(Q);
            if (/^HTML(\w*)Element$/.test(B)) return `[HTMLElement: ${B}]`;
            return `[object ${B}]`
        } catch (B) {
            return `**non-serializable** (${B})`
        }
    }

    function sA3(A) {
        let Q = Object.getPrototypeOf(A);
        return Q ? Q.constructor.name : "null prototype"
    }

    function rA3(A) {
        return ~-encodeURI(A).split(/%..|./).length
    }

    function oA3(A) {
        return rA3(JSON.stringify(A))
    }

    function tA3(A, Q) {
        let B = Q.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&"),
            G = A;
        try {
            G = decodeURI(A)
        } catch (Z) {}
        return G.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(new RegExp(`(file://)?/*${B}/*`, "ig"), "app:///")
    }
    nc2.normalize = lc2;
    nc2.normalizeToSize = ic2;
    nc2.normalizeUrlToBase = tA3;
    nc2.walk = R71
});
var Ap2 = U((ec2) => {
    Object.defineProperty(ec2, "__esModule", {
        value: !0
    });

    function sc2(A, Q) {
        let B = 0;
        for (let G = A.length - 1; G >= 0; G--) {
            let Z = A[G];
            if (Z === ".") A.splice(G, 1);
            else if (Z === "..") A.splice(G, 1), B++;
            else if (B) A.splice(G, 1), B--
        }
        if (Q)
            for (; B--; B) A.unshift("..");
        return A
    }
    var G13 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

    function rc2(A) {
        let Q = A.length > 1024 ? `<truncated>${A.slice(-1024)}` : A,
            B = G13.exec(Q);
        return B ? B.slice(1) : []
    }

    function RZ0(...A) {
        let Q = "",
            B = !1;
        for (let G = A.length - 1; G >= -1 && !B; G--) {
            let Z = G >= 0 ? A[G] : "/";
            if (!Z) continue;
            Q = `${Z}/${Q}`, B = Z.charAt(0) === "/"
        }
        return Q = sc2(Q.split("/").filter((G) => !!G), !B).join("/"), (B ? "/" : "") + Q || "."
    }

    function ac2(A) {
        let Q = 0;
        for (; Q < A.length; Q++)
            if (A[Q] !== "") break;
        let B = A.length - 1;
        for (; B >= 0; B--)
            if (A[B] !== "") break;
        if (Q > B) return [];
        return A.slice(Q, B - Q + 1)
    }

    function Z13(A, Q) {
        A = RZ0(A).slice(1), Q = RZ0(Q).slice(1);
        let B = ac2(A.split("/")),
            G = ac2(Q.split("/")),
            Z = Math.min(B.length, G.length),
            I = Z;
        for (let J = 0; J < Z; J++)
            if (B[J] !== G[J]) {
                I = J;
                break
            } let Y = [];
        for (let J = I; J < B.length; J++) Y.push("..");
        return Y = Y.concat(G.slice(I)), Y.join("/")
    }

    function oc2(A) {
        let Q = tc2(A),
            B = A.slice(-1) === "/",
            G = sc2(A.split("/").filter((Z) => !!Z), !Q).join("/");
        if (!G && !Q) G = ".";
        if (G && B) G += "/";
        return (Q ? "/" : "") + G
    }

    function tc2(A) {
        return A.charAt(0) === "/"
    }

    function I13(...A) {
        return oc2(A.join("/"))
    }

    function Y13(A) {
        let Q = rc2(A),
            B = Q[0],
            G = Q[1];
        if (!B && !G) return ".";
        if (G) G = G.slice(0, G.length - 1);
        return B + G
    }

    function J13(A, Q) {
        let B = rc2(A)[2];
        if (Q && B.slice(Q.length * -1) === Q) B = B.slice(0, B.length - Q.length);
        return B
    }
    ec2.basename = J13;
    ec2.dirname = Y13;
    ec2.isAbsolute = tc2;
    ec2.join = I13;
    ec2.normalizePath = oc2;
    ec2.relative = Z13;
    ec2.resolve = RZ0
});
var TZ0 = U((Qp2) => {
    Object.defineProperty(Qp2, "__esModule", {
        value: !0
    });
    var C13 = qO(),
        Qg;
    (function(A) {
        A[A.PENDING = 0] = "PENDING";
        let B = 1;
        A[A.RESOLVED = B] = "RESOLVED";
        let G = 2;
        A[A.REJECTED = G] = "REJECTED"
    })(Qg || (Qg = {}));

    function E13(A) {
        return new vy((Q) => {
            Q(A)
        })
    }

    function z13(A) {
        return new vy((Q, B) => {
            B(A)
        })
    }
    class vy {
        constructor(A) {
            vy.prototype.__init.call(this), vy.prototype.__init2.call(this), vy.prototype.__init3.call(this), vy.prototype.__init4.call(this), this._state = Qg.PENDING, this._handlers = [];
            try {
                A(this._resolve, this._reject)
            } catch (Q) {
                this._reject(Q)
            }
        }
        then(A, Q) {
            return new vy((B, G) => {
                this._handlers.push([!1, (Z) => {
                    if (!A) B(Z);
                    else try {
                        B(A(Z))
                    } catch (I) {
                        G(I)
                    }
                }, (Z) => {
                    if (!Q) G(Z);
                    else try {
                        B(Q(Z))
                    } catch (I) {
                        G(I)
                    }
                }]), this._executeHandlers()
            })
        } catch (A) {
            return this.then((Q) => Q, A)
        } finally(A) {
            return new vy((Q, B) => {
                let G, Z;
                return this.then((I) => {
                    if (Z = !1, G = I, A) A()
                }, (I) => {
                    if (Z = !0, G = I, A) A()
                }).then(() => {
                    if (Z) {
                        B(G);
                        return
                    }
                    Q(G)
                })
            })
        }
        __init() {
            this._resolve = (A) => {
                this._setResult(Qg.RESOLVED, A)
            }
        }
        __init2() {
            this._reject = (A) => {
                this._setResult(Qg.REJECTED, A)
            }
        }
        __init3() {
            this._setResult = (A, Q) => {
                if (this._state !== Qg.PENDING) return;
                if (C13.isThenable(Q)) {
                    Q.then(this._resolve, this._reject);
                    return
                }
                this._state = A, this._value = Q, this._executeHandlers()
            }
        }
        __init4() {
            this._executeHandlers = () => {
                if (this._state === Qg.PENDING) return;
                let A = this._handlers.slice();
                this._handlers = [], A.forEach((Q) => {
                    if (Q[0]) return;
                    if (this._state === Qg.RESOLVED) Q[1](this._value);
                    if (this._state === Qg.REJECTED) Q[2](this._value);
                    Q[0] = !0
                })
            }
        }
    }
    Qp2.SyncPromise = vy;
    Qp2.rejectedSyncPromise = z13;
    Qp2.resolvedSyncPromise = E13
});
var Gp2 = U((Bp2) => {
    Object.defineProperty(Bp2, "__esModule", {
        value: !0
    });
    var q13 = rG0(),
        PZ0 = TZ0();

    function N13(A) {
        let Q = [];

        function B() {
            return A === void 0 || Q.length < A
        }

        function G(Y) {
            return Q.splice(Q.indexOf(Y), 1)[0]
        }

        function Z(Y) {
            if (!B()) return PZ0.rejectedSyncPromise(new q13.SentryError("Not adding Promise because buffer limit was reached."));
            let J = Y();
            if (Q.indexOf(J) === -1) Q.push(J);
            return J.then(() => G(J)).then(null, () => G(J).then(null, () => {})), J
        }

        function I(Y) {
            return new PZ0.SyncPromise((J, W) => {
                let X = Q.length;
                if (!X) return J(!0);
                let F = setTimeout(() => {
                    if (Y && Y > 0) J(!1)
                }, Y);
                Q.forEach((V) => {
                    PZ0.resolvedSyncPromise(V).then(() => {
                        if (!--X) clearTimeout(F), J(!0)
                    }, W)
                })
            })
        }
        return {
            $: Q,
            add: Z,
            drain: I
        }
    }
    Bp2.makePromiseBuffer = N13
});
var Ip2 = U((Zp2) => {
    Object.defineProperty(Zp2, "__esModule", {
        value: !0
    });

    function M13(A) {
        let Q = {},
            B = 0;
        while (B < A.length) {
            let G = A.indexOf("=", B);
            if (G === -1) break;
            let Z = A.indexOf(";", B);
            if (Z === -1) Z = A.length;
            else if (Z < G) {
                B = A.lastIndexOf(";", G - 1) + 1;
                continue
            }
            let I = A.slice(B, G).trim();
            if (Q[I] === void 0) {
                let Y = A.slice(G + 1, Z).trim();
                if (Y.charCodeAt(0) === 34) Y = Y.slice(1, -1);
                try {
                    Q[I] = Y.indexOf("%") !== -1 ? decodeURIComponent(Y) : Y
                } catch (J) {
                    Q[I] = Y
                }
            }
            B = Z + 1
        }
        return Q
    }
    Zp2.parseCookie = M13
});
var jZ0 = U((Yp2) => {
    Object.defineProperty(Yp2, "__esModule", {
        value: !0
    });

    function R13(A) {
        if (!A) return {};
        let Q = A.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
        if (!Q) return {};
        let B = Q[6] || "",
            G = Q[8] || "";
        return {
            host: Q[4],
            path: Q[5],
            protocol: Q[2],
            search: B,
            hash: G,
            relative: Q[5] + B + G
        }
    }

    function T13(A) {
        return A.split(/[\?#]/, 1)[0]
    }

    function P13(A) {
        return A.split(/\\?\//).filter((Q) => Q.length > 0 && Q !== ",").length
    }

    function j13(A) {
        let {
            protocol: Q,
            host: B,
            path: G
        } = A, Z = B && B.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "") || "";
        return `${Q?`${Q}://`:""}${Z}${G}`
    }
    Yp2.getNumberOfUrlSegments = P13;