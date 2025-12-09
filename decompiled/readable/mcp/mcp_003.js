/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.002Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 3/29
 * Lines: 31461 - 32937 (1477 lines)
 * Original file: cli.js
 */

        return A.classNameAliases = zm(A.classNameAliases || {}), Y(A)
    }

function mv0(A) {
        if (!A) return !1;
        return A.endsWithParent || mv0(A.starts)
    }

function k04(A) {
        if (A.variants && !A.cachedVariants) A.cachedVariants = A.variants.map(function(Q) {
            return zm(A, {
                variants: null
            }, Q)
        });
        if (A.cachedVariants) return A.cachedVariants;
        if (mv0(A)) return zm(A, {
            starts: A.starts ? zm(A.starts) : null
        });
        if (Object.isFrozen(A)) return zm(A);
        return A
    }
    var y04 = "10.7.3";

function x04(A) {
        return Boolean(A || A === "")
    }

function v04(A) {
        let Q = {
            props: ["language", "code", "autodetect"],
            data: function() {
                return {
                    detectedLanguage: "",
                    unknownLanguage: !1
                }
            },
            computed: {
                className() {
                    if (this.unknownLanguage) return "";
                    return "hljs " + this.detectedLanguage
                },
                highlighted() {
                    if (!this.autoDetect && !A.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, E9A(this.code);
                    let G = {};
                    if (this.autoDetect) G = A.highlightAuto(this.code), this.detectedLanguage = G.language;
                    else G = A.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language;
                    return G.value
                },
                autoDetect() {
                    return !this.language || x04(this.autodetect)
                },
                ignoreIllegals() {
                    return !0
                }
            },
            render(G) {
                return G("pre", {}, [G("code", {
                    class: this.className,
                    domProps: {
                        innerHTML: this.highlighted
                    }
                })])
            }
        };
        return {
            Component: Q,
            VuePlugin: {
                install(G) {
                    G.component("highlightjs", Q)
                }
            }
        }
    }

var b04 = {
        "after:highlightElement": ({
            el: A,
            result: Q,
            text: B
        }) => {
            let G = Pv0(A);
            if (!G.length) return;
            let Z = document.createElement("div");
            Z.innerHTML = Q.value, Q.value = f04(G, Pv0(Z), B)
        }
    };

function jH1(A) {
        return A.nodeName.toLowerCase()
    }

function Pv0(A) {
        let Q = [];
        return function B(G, Z) {
            for (let I = G.firstChild; I; I = I.nextSibling)
                if (I.nodeType === 3) Z += I.nodeValue.length;
                else if (I.nodeType === 1) {
                if (Q.push({
                        event: "start",
                        offset: Z,
                        node: I
                    }), Z = B(I, Z), !jH1(I).match(/br|hr|img|input/)) Q.push({
                    event: "stop",
                    offset: Z,
                    node: I
                })
            }
            return Z
        }(A, 0), Q
    }

function f04(A, Q, B) {
        let G = 0,
            Z = "",
            I = [];

function Y() {
            if (!A.length || !Q.length) return A.length ? A : Q;
            if (A[0].offset !== Q[0].offset) return A[0].offset < Q[0].offset ? A : Q;
            return Q[0].event === "start" ? A : Q
        }

function J(F) {
            function V(K) {
                return " " + K.nodeName + '="' + E9A(K.value) + '"'
            }
            Z += "<" + jH1(F) + [].map.call(F.attributes, V).join("") + ">"
        }

function W(F) {
            Z += "</" + jH1(F) + ">"
        }

function X(F) {
            (F.event === "start" ? J : W)(F.node)
        }
        while (A.length || Q.length) {
            let F = Y();
            if (Z += E9A(B.substring(G, F[0].offset)), G = F[0].offset, F === A) {
                I.reverse().forEach(W);
                do X(F.splice(0, 1)[0]), F = Y(); while (F === A && F.length && F[0].offset === G);
                I.reverse().forEach(J)
            } else {
                if (F[0].event === "start") I.push(F[0].node);
                else I.pop();
                X(F.splice(0, 1)[0])
            }
        }
        return Z + E9A(B.substr(G))
    }

var jv0 = {},
        RH1 = (A) => {
            console.error(A)
        },
        Sv0 = (A, ...Q) => {
            console.log(`WARN: ${A}`, ...Q)
        },
        fN = (A, Q) => {
            if (jv0[`${A}/${Q}`]) return;
            console.log(`Deprecated as of ${A}. ${Q}`), jv0[`${A}/${Q}`] = !0
        },
        TH1 = E9A,
        _v0 = zm,
        kv0 = Symbol("nomatch"),
        h04 = function(A) {
            let Q = Object.create(null),
                B = Object.create(null),
                G = [],
                Z = !0,
                I = /(^(<[^>]+>|\t|)+|\n)/gm,
                Y = "Could not find the language '{}', did you forget to load/include a language module?",
                J = {
                    disableAutodetect: !0,
                    name: "Plain text",
                    contains: []
                },
                W = {
                    noHighlightRe: /^(no-?highlight)$/i,
                    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                    classPrefix: "hljs-",
                    tabReplace: null,
                    useBR: !1,
                    languages: null,
                    __emitter: vv0
                };

function X(NA) {
                return W.noHighlightRe.test(NA)
            }

function F(NA) {
                let qA = NA.className + " ";
                qA += NA.parentNode ? NA.parentNode.className : "";
                let DA = W.languageDetectRe.exec(qA);
                if (DA) {
                    let yA = d(DA[1]);
                    if (!yA) Sv0(Y.replace("{}", DA[1])), Sv0("Falling back to no-highlight mode for this block.", NA);
                    return yA ? DA[1] : "no-highlight"
                }
                return qA.split(/\s+/).find((yA) => X(yA) || d(yA))
            }

function V(NA, qA, DA, yA) {
                let rA = "",
                    K1 = "";
                if (typeof qA === "object") rA = NA, DA = qA.ignoreIllegals, K1 = qA.language, yA = void 0;
                else fN("10.7.0", "highlight(lang, code, ...args) has been deprecated."), fN("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), K1 = NA, rA = qA;
                let WA = {
                    code: rA,
                    language: K1
                };
                KA("before:highlight", WA);
                let XA = WA.result ? WA.result : K(WA.language, WA.code, DA, yA);
                return XA.code = WA.code, KA("after:highlight", XA), XA
            }

function K(NA, qA, DA, yA) {
                function rA(R1, N1) {
                    let Z0 = PA.case_insensitive ? N1[0].toLowerCase() : N1[0];
                    return Object.prototype.hasOwnProperty.call(R1.keywords, Z0) && R1.keywords[Z0]
                }

function K1() {
                    if (!b1.keywords) {
                        x0.addText(u0);
                        return
                    }
                    let R1 = 0;
                    b1.keywordPatternRe.lastIndex = 0;
                    let N1 = b1.keywordPatternRe.exec(u0),
                        Z0 = "";
                    while (N1) {
                        Z0 += u0.substring(R1, N1.index);
                        let J0 = rA(b1, N1);
                        if (J0) {
                            let [s1, p0] = J0;
                            if (x0.addText(Z0), Z0 = "", k1 += p0, s1.startsWith("_")) Z0 += N1[0];
                            else {
                                let HQ = PA.classNameAliases[s1] || s1;
                                x0.addKeyword(N1[0], HQ)
                            }
                        } else Z0 += N1[0];
                        R1 = b1.keywordPatternRe.lastIndex, N1 = b1.keywordPatternRe.exec(u0)
                    }
                    Z0 += u0.substr(R1), x0.addText(Z0)
                }

function WA() {
                    if (u0 === "") return;
                    let R1 = null;
                    if (typeof b1.subLanguage === "string") {
                        if (!Q[b1.subLanguage]) {
                            x0.addText(u0);
                            return
                        }
                        R1 = K(b1.subLanguage, u0, !0, Y0[b1.subLanguage]), Y0[b1.subLanguage] = R1.top
                    } else R1 = H(u0, b1.subLanguage.length ? b1.subLanguage : null);
                    if (b1.relevance > 0) k1 += R1.relevance;
                    x0.addSublanguage(R1.emitter, R1.language)
                }

function XA() {
                    if (b1.subLanguage != null) WA();
                    else K1();
                    u0 = ""
                }

function zA(R1) {
                    if (R1.className) x0.openNode(PA.classNameAliases[R1.className] || R1.className);
                    return b1 = Object.create(R1, {
                        parent: {
                            value: b1
                        }
                    }), b1
                }

                function $A(R1, N1, Z0) {
                    let J0 = B04(R1.endRe, Z0);
                    if (J0) {
                        if (R1["on:end"]) {
                            let s1 = new PH1(R1);
                            if (R1["on:end"](N1, s1), s1.isMatchIgnored) J0 = !1
                        }
                        if (J0) {
                            while (R1.endsParent && R1.parent) R1 = R1.parent;
                            return R1
                        }
                    }
                    if (R1.endsWithParent) return $A(R1.parent, N1, Z0)
                }

function LA(R1) {
                    if (b1.matcher.regexIndex === 0) return u0 += R1[0], 1;
                    else return F1 = !0, 0
                }

function TA(R1) {
                    let N1 = R1[0],
                        Z0 = R1.rule,
                        J0 = new PH1(Z0),
                        s1 = [Z0.__beforeBegin, Z0["on:begin"]];
                    for (let p0 of s1) {
                        if (!p0) continue;
                        if (p0(R1, J0), J0.isMatchIgnored) return LA(N1)
                    }
                    if (Z0 && Z0.endSameAsBegin) Z0.endRe = t14(N1);
                    if (Z0.skip) u0 += N1;
                    else {
                        if (Z0.excludeBegin) u0 += N1;
                        if (XA(), !Z0.returnBegin && !Z0.excludeBegin) u0 = N1
                    }
                    return zA(Z0), Z0.returnBegin ? 0 : N1.length
                }

function eA(R1) {
                    let N1 = R1[0],
                        Z0 = qA.substr(R1.index),
                        J0 = $A(b1, R1, Z0);
                    if (!J0) return kv0;
                    let s1 = b1;
                    if (s1.skip) u0 += N1;
                    else {
                        if (!(s1.returnEnd || s1.excludeEnd)) u0 += N1;
                        if (XA(), s1.excludeEnd) u0 = N1
                    }
                    do {
                        if (b1.className) x0.closeNode();
                        if (!b1.skip && !b1.subLanguage) k1 += b1.relevance;
                        b1 = b1.parent
                    } while (b1 !== J0.parent);
                    if (J0.starts) {
                        if (J0.endSameAsBegin) J0.starts.endRe = J0.endRe;
                        zA(J0.starts)
                    }
                    return s1.returnEnd ? 0 : N1.length
                }

function aA() {
                    let R1 = [];
                    for (let N1 = b1; N1 !== PA; N1 = N1.parent)
                        if (N1.className) R1.unshift(N1.className);
                    R1.forEach((N1) => x0.openNode(N1))
                }
                let I1 = {};

function w1(R1, N1) {
                    let Z0 = N1 && N1[0];
                    if (u0 += R1, Z0 == null) return XA(), 0;
                    if (I1.type === "begin" && N1.type === "end" && I1.index === N1.index && Z0 === "") {
                        if (u0 += qA.slice(N1.index, N1.index + 1), !Z) {
                            let J0 = Error("0 width match regex");
                            throw J0.languageName = NA, J0.badRule = I1.rule, J0
                        }
                        return 1
                    }
                    if (I1 = N1, N1.type === "begin") return TA(N1);
                    else if (N1.type === "illegal" && !DA) {
                        let J0 = Error('Illegal lexeme "' + Z0 + '" for mode "' + (b1.className || "<unnamed>") + '"');
                        throw J0.mode = b1, J0
                    } else if (N1.type === "end") {
                        let J0 = eA(N1);
                        if (J0 !== kv0) return J0
                    }
                    if (N1.type === "illegal" && Z0 === "") return 1;
                    if (fQ > 1e5 && fQ > N1.index * 3) throw Error("potential infinite loop, way more iterations than matches");
                    return u0 += Z0, Z0.length
                }
                let PA = d(NA);
                if (!PA) throw RH1(Y.replace("{}", NA)), Error('Unknown language: "' + NA + '"');
                let B1 = _04(PA, {
                        plugins: G
                    }),
                    Q0 = "",
                    b1 = yA || B1,
                    Y0 = {},
                    x0 = new W.__emitter(W);
                aA();
                let u0 = "",
                    k1 = 0,
                    T0 = 0,
                    fQ = 0,
                    F1 = !1;
                try {
                    b1.matcher.considerAll();
                    for (;;) {
                        if (fQ++, F1) F1 = !1;
                        else b1.matcher.considerAll();
                        b1.matcher.lastIndex = T0;
                        let R1 = b1.matcher.exec(qA);
                        if (!R1) break;
                        let N1 = qA.substring(T0, R1.index),
                            Z0 = w1(N1, R1);
                        T0 = R1.index + Z0
                    }
                    return w1(qA.substr(T0)), x0.closeAllNodes(), x0.finalize(), Q0 = x0.toHTML(), {
                        relevance: Math.floor(k1),
                        value: Q0,
                        language: NA,
                        illegal: !1,
                        emitter: x0,
                        top: b1
                    }
                } catch (R1) {
                    if (R1.message && R1.message.includes("Illegal")) return {
                        illegal: !0,
                        illegalBy: {
                            msg: R1.message,
                            context: qA.slice(T0 - 100, T0 + 100),
                            mode: R1.mode
                        },
                        sofar: Q0,
                        relevance: 0,
                        value: TH1(qA),
                        emitter: x0
                    };
                    else if (Z) return {
                        illegal: !1,
                        relevance: 0,
                        value: TH1(qA),
                        emitter: x0,
                        language: NA,
                        top: b1,
                        errorRaised: R1
                    };
                    else throw R1
                }
            }

function D(NA) {
                let qA = {
                    relevance: 0,
                    emitter: new W.__emitter(W),
                    value: TH1(NA),
                    illegal: !1,
                    top: J
                };
                return qA.emitter.addText(NA), qA
            }

function H(NA, qA) {
                qA = qA || W.languages || Object.keys(Q);
                let DA = D(NA),
                    yA = qA.filter(d).filter(IA).map((zA) => K(zA, NA, !1));
                yA.unshift(DA);
                let rA = yA.sort((zA, $A) => {
                        if (zA.relevance !== $A.relevance) return $A.relevance - zA.relevance;
                        if (zA.language && $A.language) {
                            if (d(zA.language).supersetOf === $A.language) return 1;
                            else if (d($A.language).supersetOf === zA.language) return -1
                        }
                        return 0
                    }),
                    [K1, WA] = rA,
                    XA = K1;
                return XA.second_best = WA, XA
            }

function C(NA) {
                if (!(W.tabReplace || W.useBR)) return NA;
                return NA.replace(I, (qA) => {
                    if (qA === `
`) return W.useBR ? "<br>" : qA;
                    else if (W.tabReplace) return qA.replace(/\t/g, W.tabReplace);
                    return qA
                })
            }

function E(NA, qA, DA) {
                let yA = qA ? B[qA] : DA;
                if (NA.classList.add("hljs"), yA) NA.classList.add(yA)
            }
            let z = {
                    "before:highlightElement": ({
                        el: NA
                    }) => {
                        if (W.useBR) NA.innerHTML = NA.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, `
`)
                    },
                    "after:highlightElement": ({
                        result: NA
                    }) => {
                        if (W.useBR) NA.value = NA.value.replace(/\n/g, "<br>")
                    }
                },
                w = /^(<[^>]+>|\t)+/gm,
                N = {
                    "after:highlightElement": ({
                        result: NA
                    }) => {
                        if (W.tabReplace) NA.value = NA.value.replace(w, (qA) => qA.replace(/\t/g, W.tabReplace))
                    }
                };

function q(NA) {
                let qA = null,
                    DA = F(NA);
                if (X(DA)) return;
                KA("before:highlightElement", {
                    el: NA,
                    language: DA
                }), qA = NA;
                let yA = qA.textContent,
                    rA = DA ? V(yA, {
                        language: DA,
                        ignoreIllegals: !0
                    }) : H(yA);
                if (KA("after:highlightElement", {
                        el: NA,
                        result: rA,
                        text: yA
                    }), NA.innerHTML = rA.value, E(NA, DA, rA.language), NA.result = {
                        language: rA.language,
                        re: rA.relevance,
                        relavance: rA.relevance
                    }, rA.second_best) NA.second_best = {
                    language: rA.second_best.language,
                    re: rA.second_best.relevance,
                    relavance: rA.second_best.relevance
                }
            }

function R(NA) {
                if (NA.useBR) fN("10.3.0", "'useBR' will be removed entirely in v11.0"), fN("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559");
                W = _v0(W, NA)
            }
            let P = () => {
                if (P.called) return;
                P.called = !0, fN("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead."), document.querySelectorAll("pre code").forEach(q)
            };

function y() {
                fN("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), v = !0
            }
            let v = !1;

function x() {
                if (document.readyState === "loading") {
                    v = !0;
                    return
                }
                document.querySelectorAll("pre code").forEach(q)
            }

function p() {
                if (v) x()
            }
            if (typeof window < "u" && window.addEventListener) window.addEventListener("DOMContentLoaded", p, !1);

function u(NA, qA) {
                let DA = null;
                try {
                    DA = qA(A)
                } catch (yA) {
                    if (RH1("Language definition for '{}' could not be registered.".replace("{}", NA)), !Z) throw yA;
                    else RH1(yA);
                    DA = J
                }
                if (!DA.name) DA.name = NA;
                if (Q[NA] = DA, DA.rawDefinition = qA.bind(null, A), DA.aliases) QA(DA.aliases, {
                    languageName: NA
                })
            }

function o(NA) {
                delete Q[NA];
                for (let qA of Object.keys(B))
                    if (B[qA] === NA) delete B[qA]
            }

function l() {
                return Object.keys(Q)
            }

function k(NA) {
                fN("10.4.0", "requireLanguage will be removed entirely in v11."), fN("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
                let qA = d(NA);
                if (qA) return qA;
                throw Error("The '{}' language is required, but not loaded.".replace("{}", NA))
            }

function d(NA) {
                return NA = (NA || "").toLowerCase(), Q[NA] || Q[B[NA]]
            }

function QA(NA, {
                languageName: qA
            }) {
                if (typeof NA === "string") NA = [NA];
                NA.forEach((DA) => {
                    B[DA.toLowerCase()] = qA
                })
            }

function IA(NA) {
                let qA = d(NA);
                return qA && !qA.disableAutodetect
            }

function HA(NA) {
                if (NA["before:highlightBlock"] && !NA["before:highlightElement"]) NA["before:highlightElement"] = (qA) => {
                    NA["before:highlightBlock"](Object.assign({
                        block: qA.el
                    }, qA))
                };
                if (NA["after:highlightBlock"] && !NA["after:highlightElement"]) NA["after:highlightElement"] = (qA) => {
                    NA["after:highlightBlock"](Object.assign({
                        block: qA.el
                    }, qA))
                }
            }

function wA(NA) {
                HA(NA), G.push(NA)
            }

function KA(NA, qA) {
                let DA = NA;
                G.forEach(function(yA) {
                    if (yA[DA]) yA[DA](qA)
                })
            }

function SA(NA) {
                return fN("10.2.0", "fixMarkup will be removed entirely in v11.0"), fN("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), C(NA)
            }

function sA(NA) {
                return fN("10.7.0", "highlightBlock will be removed entirely in v12.0"), fN("10.7.0", "Please use highlightElement now."), q(NA)
            }
            Object.assign(A, {
                highlight: V,
                highlightAuto: H,
                highlightAll: x,
                fixMarkup: SA,
                highlightElement: q,
                highlightBlock: sA,
                configure: R,
                initHighlighting: P,
                initHighlightingOnLoad: y,
                registerLanguage: u,
                unregisterLanguage: o,
                listLanguages: l,
                getLanguage: d,
                registerAliases: QA,
                requireLanguage: k,
                autoDetection: IA,
                inherit: _v0,
                addPlugin: wA,
                vuePlugin: v04(A).VuePlugin
            }), A.debugMode = function() {
                Z = !1
            }, A.safeMode = function() {
                Z = !0
            }, A.versionString = y04;
            for (let NA in qxA)
                if (typeof qxA[NA] === "object") yv0(qxA[NA]);
            return Object.assign(A, qxA), A.addPlugin(z), A.addPlugin(b04), A.addPlugin(N), A
        },
        g04 = h04({});
    dv0.exports = g04
});
var lv0 = U((M27, pv0) => {
    function u04(A) {
        var Q = "[A-Za-zА-Яа-яёЁ_][A-Za-zА-Яа-яёЁ_0-9]+",
            B = "далее ",
            G = "возврат вызватьисключение выполнить для если и из или иначе иначеесли исключение каждого конецесли " + "конецпопытки конеццикла не новый перейти перем по пока попытка прервать продолжить тогда цикл экспорт ",
            Z = B + G,
            I = "загрузитьизфайла ",
            Y = "вебклиент вместо внешнеесоединение клиент конецобласти мобильноеприложениеклиент мобильноеприложениесервер " + "наклиенте наклиентенасервере наклиентенасерверебезконтекста насервере насерверебезконтекста область перед " + "после сервер толстыйклиентобычноеприложение толстыйклиентуправляемоеприложение тонкийклиент ",
            J = I + Y,
            W = "разделительстраниц разделительстрок символтабуляции ",
            X = "ansitooem oemtoansi ввестивидсубконто ввестиперечисление ввестипериод ввестиплансчетов выбранныйплансчетов " + "датагод датамесяц датачисло заголовоксистемы значениевстроку значениеизстроки каталогиб каталогпользователя " + "кодсимв конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца " + "коннедели лог лог10 максимальноеколичествосубконто названиеинтерфейса названиенабораправ назначитьвид " + "назначитьсчет найтиссылки началопериодаби началостандартногоинтервала начгода начквартала начмесяца " + "начнедели номерднягода номерднянедели номернеделигода обработкаожидания основнойжурналрасчетов " + "основнойплансчетов основнойязык очиститьокносообщений периодстр получитьвремята получитьдатута " + "получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта " + "префиксавтонумерации пропись пустоезначение разм разобратьпозициюдокумента рассчитатьрегистрына " + "рассчитатьрегистрыпо симв создатьобъект статусвозврата стрколичествострок сформироватьпозициюдокумента " + "счетпокоду текущеевремя типзначения типзначениястр установитьтана установитьтапо фиксшаблон шаблон ",
            F = "acos asin atan base64значение base64строка cos exp log log10 pow sin sqrt tan xmlзначение xmlстрока " + "xmlтип xmlтипзнч активноеокно безопасныйрежим безопасныйрежимразделенияданных булево ввестидату ввестизначение " + "ввестистроку ввестичисло возможностьчтенияxml вопрос восстановитьзначение врег выгрузитьжурналрегистрации " + "выполнитьобработкуоповещения выполнитьпроверкуправдоступа вычислить год данныеформывзначение дата день деньгода " + "деньнедели добавитьмесяц заблокироватьданныедляредактирования заблокироватьработупользователя завершитьработусистемы " + "загрузитьвнешнююкомпоненту закрытьсправку записатьjson записатьxml записатьдатуjson записьжурналарегистрации " + "заполнитьзначениясвойств запроситьразрешениепользователя запуститьприложение запуститьсистему зафиксироватьтранзакцию " + "значениевданныеформы значениевстрокувнутр значениевфайл значениезаполнено значениеизстрокивнутр значениеизфайла " + "изxmlтипа импортмоделиxdto имякомпьютера имяпользователя инициализироватьпредопределенныеданные информацияобошибке " + "каталогбиблиотекимобильногоустройства каталогвременныхфайлов каталогдокументов каталогпрограммы кодироватьстроку " + "кодлокализацииинформационнойбазы кодсимвола командасистемы конецгода конецдня конецквартала конецмесяца конецминуты " + "конецнедели конецчаса конфигурациябазыданныхизмененадинамически конфигурацияизменена копироватьданныеформы " + "копироватьфайл краткоепредставлениеошибки лев макс местноевремя месяц мин минута монопольныйрежим найти " + "найтинедопустимыесимволыxml найтиокнопонавигационнойссылке найтипомеченныенаудаление найтипоссылкам найтифайлы " + "началогода началодня началоквартала началомесяца началоминуты началонедели началочаса начатьзапросразрешенияпользователя " + "начатьзапускприложения начатькопированиефайла начатьперемещениефайла начатьподключениевнешнейкомпоненты " + "начатьподключениерасширенияработыскриптографией начатьподключениерасширенияработысфайлами начатьпоискфайлов " + "начатьполучениекаталогавременныхфайлов начатьполучениекаталогадокументов начатьполучениерабочегокаталогаданныхпользователя " + "начатьполучениефайлов начатьпомещениефайла начатьпомещениефайлов начатьсозданиедвоичныхданныхизфайла начатьсозданиекаталога " + "начатьтранзакцию начатьудалениефайлов начатьустановкувнешнейкомпоненты начатьустановкурасширенияработыскриптографией " + "начатьустановкурасширенияработысфайлами неделягода необходимостьзавершениясоединения номерсеансаинформационнойбазы " + "номерсоединенияинформационнойбазы нрег нстр обновитьинтерфейс обновитьнумерациюобъектов обновитьповторноиспользуемыезначения " + "обработкапрерыванияпользователя объединитьфайлы окр описаниеошибки оповестить оповеститьобизменении " + "отключитьобработчикзапросанастроекклиенталицензирования отключитьобработчикожидания отключитьобработчикоповещения " + "открытьзначение открытьиндекссправки открытьсодержаниесправки открытьсправку открытьформу открытьформумодально " + "отменитьтранзакцию очиститьжурналрегистрации очиститьнастройкипользователя очиститьсообщения параметрыдоступа " + "перейтипонавигационнойссылке переместитьфайл подключитьвнешнююкомпоненту " + "подключитьобработчикзапросанастроекклиенталицензирования подключитьобработчикожидания подключитьобработчикоповещения " + "подключитьрасширениеработыскриптографией подключитьрасширениеработысфайлами подробноепредставлениеошибки " + "показатьвводдаты показатьвводзначения показатьвводстроки показатьвводчисла показатьвопрос показатьзначение " + "показатьинформациюобошибке показатьнакарте показатьоповещениепользователя показатьпредупреждение полноеимяпользователя " + "получитьcomобъект получитьxmlтип получитьадреспоместоположению получитьблокировкусеансов получитьвремязавершенияспящегосеанса " + "получитьвремязасыпанияпассивногосеанса получитьвремяожиданияблокировкиданных получитьданныевыбора " + "получитьдополнительныйпараметрклиенталицензирования получитьдопустимыекодылокализации получитьдопустимыечасовыепояса " + "получитьзаголовокклиентскогоприложения получитьзаголовоксистемы получитьзначенияотборажурналарегистрации " + "получитьидентификаторконфигурации получитьизвременногохранилища получитьимявременногофайла " + "получитьимяклиенталицензирования получитьинформациюэкрановклиента получитьиспользованиежурналарегистрации " + "получитьиспользованиесобытияжурналарегистрации получитькраткийзаголовокприложения получитьмакетоформления " + "получитьмаскувсефайлы получитьмаскувсефайлыклиента получитьмаскувсефайлысервера получитьместоположениепоадресу " + "получитьминимальнуюдлинупаролейпользователей получитьнавигационнуюссылку получитьнавигационнуюссылкуинформационнойбазы " + "получитьобновлениеконфигурациибазыданных получитьобновлениепредопределенныхданныхинформационнойбазы получитьобщиймакет " + "получитьобщуюформу получитьокна получитьоперативнуюотметкувремени получитьотключениебезопасногорежима " + "получитьпараметрыфункциональныхопцийинтерфейса получитьполноеимяпредопределенногозначения " + "получитьпредставлениянавигационныхссылок получитьпроверкусложностипаролейпользователей получитьразделительпути " + "получитьразделительпутиклиента получитьразделительпутисервера получитьсеансыинформационнойбазы " + "получитьскоростьклиентскогосоединения получитьсоединенияинформационнойбазы получитьсообщенияпользователю " + "получитьсоответствиеобъектаиформы получитьсоставстандартногоинтерфейсаodata получитьструктурухранениябазыданных " + "получитьтекущийсеансинформационнойбазы получитьфайл получитьфайлы получитьформу получитьфункциональнуюопцию " + "получитьфункциональнуюопциюинтерфейса получитьчасовойпоясинформационнойбазы пользователиос поместитьвовременноехранилище " + "поместитьфайл поместитьфайлы прав праводоступа предопределенноезначение представлениекодалокализации представлениепериода " + "представлениеправа представлениеприложения представлениесобытияжурналарегистрации представлениечасовогопояса предупреждение " + "прекратитьработусистемы привилегированныйрежим продолжитьвызов прочитатьjson прочитатьxml прочитатьдатуjson пустаястрока " + "рабочийкаталогданныхпользователя разблокироватьданныедляредактирования разделитьфайл разорватьсоединениесвнешнимисточникомданных " + "раскодироватьстроку рольдоступна секунда сигнал символ скопироватьжурналрегистрации смещениелетнеговремени " + "смещениестандартноговремени соединитьбуферыдвоичныхданных создатькаталог создатьфабрикуxdto сокрл сокрлп сокрп сообщить " + "состояние сохранитьзначение сохранитьнастройкипользователя сред стрдлина стрзаканчиваетсяна стрзаменить стрнайти стрначинаетсяс " + "строка строкасоединенияинформационнойбазы стрполучитьстроку стрразделить стрсоединить стрсравнить стрчисловхождений " + "стрчислострок стршаблон текущаядата текущаядатасеанса текущаяуниверсальнаядата текущаяуниверсальнаядатавмиллисекундах " + "текущийвариантинтерфейсаклиентскогоприложения текущийвариантосновногошрифтаклиентскогоприложения текущийкодлокализации " + "текущийрежимзапуска текущийязык текущийязыксистемы тип типзнч транзакцияактивна трег удалитьданныеинформационнойбазы " + "удалитьизвременногохранилища удалитьобъекты удалитьфайлы универсальноевремя установитьбезопасныйрежим " + "установитьбезопасныйрежимразделенияданных установитьблокировкусеансов установитьвнешнююкомпоненту " + "установитьвремязавершенияспящегосеанса установитьвремязасыпанияпассивногосеанса установитьвремяожиданияблокировкиданных " + "установитьзаголовокклиентскогоприложения установитьзаголовоксистемы установитьиспользованиежурналарегистрации " + "установитьиспользованиесобытияжурналарегистрации установитькраткийзаголовокприложения " + "установитьминимальнуюдлинупаролейпользователей установитьмонопольныйрежим установитьнастройкиклиенталицензирования " + "установитьобновлениепредопределенныхданныхинформационнойбазы установитьотключениебезопасногорежима " + "установитьпараметрыфункциональныхопцийинтерфейса установитьпривилегированныйрежим " + "установитьпроверкусложностипаролейпользователей установитьрасширениеработыскриптографией " + "установитьрасширениеработысфайлами установитьсоединениесвнешнимисточникомданных установитьсоответствиеобъектаиформы " + "установитьсоставстандартногоинтерфейсаodata установитьчасовойпоясинформационнойбазы установитьчасовойпояссеанса " + "формат цел час часовойпояс часовойпояссеанса число числопрописью этоадресвременногохранилища ",
            V = "wsссылки библиотекакартинок библиотекамакетовоформлениякомпоновкиданных библиотекастилей бизнеспроцессы " + "внешниеисточникиданных внешниеобработки внешниеотчеты встроенныепокупки главныйинтерфейс главныйстиль " + "документы доставляемыеуведомления журналыдокументов задачи информацияобинтернетсоединении использованиерабочейдаты " + "историяработыпользователя константы критерииотбора метаданные обработки отображениерекламы отправкадоставляемыхуведомлений " + "отчеты панельзадачос параметрзапуска параметрысеанса перечисления планывидоврасчета планывидовхарактеристик " + "планыобмена планысчетов полнотекстовыйпоиск пользователиинформационнойбазы последовательности проверкавстроенныхпокупок " + "рабочаядата расширенияконфигурации регистрыбухгалтерии регистрынакопления регистрырасчета регистрысведений " + "регламентныезадания сериализаторxdto справочники средствагеопозиционирования средствакриптографии средствамультимедиа " + "средстваотображениярекламы средствапочты средствателефонии фабрикаxdto файловыепотоки фоновыезадания хранилищанастроек " + "хранилищевариантовотчетов хранилищенастроекданныхформ хранилищеобщихнастроек хранилищепользовательскихнастроекдинамическихсписков " + "хранилищепользовательскихнастроекотчетов хранилищесистемныхнастроек ",
            K = W + X + F + V,
            D = "webцвета windowsцвета windowsшрифты библиотекакартинок рамкистиля символы цветастиля шрифтыстиля ",
            H = "автоматическоесохранениеданныхформывнастройках автонумерациявформе автораздвижениесерий " + "анимациядиаграммы вариантвыравниванияэлементовизаголовков вариантуправлениявысотойтаблицы " + "вертикальнаяпрокруткаформы вертикальноеположение вертикальноеположениеэлемента видгруппыформы " + "виддекорацииформы виддополненияэлементаформы видизмененияданных видкнопкиформы видпереключателя " + "видподписейкдиаграмме видполяформы видфлажка влияниеразмеранапузырекдиаграммы горизонтальноеположение " + "горизонтальноеположениеэлемента группировкаколонок группировкаподчиненныхэлементовформы " + "группыиэлементы действиеперетаскивания дополнительныйрежимотображения допустимыедействияперетаскивания " + "интервалмеждуэлементамиформы использованиевывода использованиеполосыпрокрутки " + "используемоезначениеточкибиржевойдиаграммы историявыборапривводе источникзначенийоситочекдиаграммы " + "источникзначенияразмерапузырькадиаграммы категориягруппыкоманд максимумсерий начальноеотображениедерева " + "начальноеотображениесписка обновлениетекстаредактирования ориентациядендрограммы ориентациядиаграммы " + "ориентацияметокдиаграммы ориентацияметоксводнойдиаграммы ориентацияэлементаформы отображениевдиаграмме " + "отображениевлегендедиаграммы отображениегруппыкнопок отображениезаголовкашкалыдиаграммы " + "отображениезначенийсводнойдиаграммы отображениезначенияизмерительнойдиаграммы " + "отображениеинтерваладиаграммыганта отображениекнопки отображениекнопкивыбора отображениеобсужденийформы " + "отображениеобычнойгруппы отображениеотрицательныхзначенийпузырьковойдиаграммы отображениепанелипоиска " + "отображениеподсказки отображениепредупрежденияприредактировании отображениеразметкиполосырегулирования " + "отображениестраницформы отображениетаблицы отображениетекстазначениядиаграммыганта " + "отображениеуправленияобычнойгруппы отображениефигурыкнопки палитрацветовдиаграммы поведениеобычнойгруппы " + "поддержкамасштабадендрограммы поддержкамасштабадиаграммыганта поддержкамасштабасводнойдиаграммы " + "поисквтаблицепривводе положениезаголовкаэлементаформы положениекартинкикнопкиформы " + "положениекартинкиэлементаграфическойсхемы положениекоманднойпанелиформы положениекоманднойпанелиэлементаформы " + "положениеопорнойточкиотрисовки положениеподписейкдиаграмме положениеподписейшкалызначенийизмерительнойдиаграммы " + "положениесостоянияпросмотра положениестрокипоиска положениетекстасоединительнойлинии положениеуправленияпоиском " + "положениешкалывремени порядокотображенияточекгоризонтальнойгистограммы порядоксерийвлегендедиаграммы " + "размеркартинки расположениезаголовкашкалыдиаграммы растягиваниеповертикалидиаграммыганта " + "режимавтоотображениясостояния режимвводастроктаблицы режимвыборанезаполненного режимвыделениядаты " + "режимвыделениястрокитаблицы режимвыделениятаблицы режимизмененияразмера режимизменениясвязанногозначения " + "режимиспользованиядиалогапечати режимиспользованияпараметракоманды режиммасштабированияпросмотра " + "режимосновногоокнаклиентскогоприложения режимоткрытияокнаформы режимотображениявыделения " + "режимотображениягеографическойсхемы режимотображениязначенийсерии режимотрисовкисеткиграфическойсхемы " + "режимполупрозрачностидиаграммы режимпробеловдиаграммы режимразмещениянастранице режимредактированияколонки " + "режимсглаживаниядиаграммы режимсглаживанияиндикатора режимсписказадач сквозноевыравнивание " + "сохранениеданныхформывнастройках способзаполнениятекстазаголовкашкалыдиаграммы " + "способопределенияограничивающегозначениядиаграммы стандартнаягруппакоманд стандартноеоформление " + "статусоповещенияпользователя стильстрелки типаппроксимациилиниитрендадиаграммы типдиаграммы " + "типединицышкалывремени типимпортасерийслоягеографическойсхемы типлиниигеографическойсхемы типлиниидиаграммы " + "типмаркерагеографическойсхемы типмаркерадиаграммы типобластиоформления " + "типорганизацииисточникаданныхгеографическойсхемы типотображениясериислоягеографическойсхемы " + "типотображенияточечногообъектагеографическойсхемы типотображенияшкалыэлементалегендыгеографическойсхемы " + "типпоискаобъектовгеографическойсхемы типпроекциигеографическойсхемы типразмещенияизмерений " + "типразмещенияреквизитовизмерений типрамкиэлементауправления типсводнойдиаграммы " + "типсвязидиаграммыганта типсоединениязначенийпосериямдиаграммы типсоединенияточекдиаграммы " + "типсоединительнойлинии типстороныэлементаграфическойсхемы типформыотчета типшкалырадарнойдиаграммы " + "факторлиниитрендадиаграммы фигуракнопки фигурыграфическойсхемы фиксациявтаблице форматдняшкалывремени " + "форматкартинки ширинаподчиненныхэлементовформы ",
            C = "виддвижениябухгалтерии виддвижениянакопления видпериодарегистрарасчета видсчета видточкимаршрутабизнеспроцесса " + "использованиеагрегатарегистранакопления использованиегруппиэлементов использованиережимапроведения " + "использованиесреза периодичностьагрегатарегистранакопления режимавтовремя режимзаписидокумента режимпроведениядокумента ",
            E = "авторегистрацияизменений допустимыйномерсообщения отправкаэлементаданных получениеэлементаданных ",
            z = "использованиерасшифровкитабличногодокумента ориентациястраницы положениеитоговколоноксводнойтаблицы " + "положениеитоговстроксводнойтаблицы положениетекстаотносительнокартинки расположениезаголовкагруппировкитабличногодокумента " + "способчтениязначенийтабличногодокумента типдвустороннейпечати типзаполненияобластитабличногодокумента " + "типкурсоровтабличногодокумента типлиниирисункатабличногодокумента типлинииячейкитабличногодокумента " + "типнаправленияпереходатабличногодокумента типотображениявыделениятабличногодокумента типотображениялинийсводнойтаблицы " + "типразмещениятекстатабличногодокумента типрисункатабличногодокумента типсмещениятабличногодокумента " + "типузоратабличногодокумента типфайлатабличногодокумента точностьпечати чередованиерасположениястраниц ",
            w = "отображениевремениэлементовпланировщика ",
            N = "типфайлаформатированногодокумента ",
            q = "обходрезультатазапроса типзаписизапроса ",
            R = "видзаполнениярасшифровкипостроителяотчета типдобавленияпредставлений типизмеренияпостроителяотчета типразмещенияитогов ",
            P = "доступкфайлу режимдиалогавыборафайла режимоткрытияфайла ",
            y = "типизмеренияпостроителязапроса ",
            v = "видданныханализа методкластеризации типединицыинтервалавременианализаданных типзаполнениятаблицырезультатаанализаданных " + "типиспользованиячисловыхзначенийанализаданных типисточникаданныхпоискаассоциаций типколонкианализаданныхдереворешений " + "типколонкианализаданныхкластеризация типколонкианализаданныхобщаястатистика типколонкианализаданныхпоискассоциаций " + "типколонкианализаданныхпоискпоследовательностей типколонкимоделипрогноза типмерырасстоянияанализаданных " + "типотсеченияправилассоциации типполяанализаданных типстандартизациианализаданных типупорядочиванияправилассоциациианализаданных " + "типупорядочиванияшаблоновпоследовательностейанализаданных типупрощениядереварешений ",
            x = "wsнаправлениепараметра вариантxpathxs вариантзаписидатыjson вариантпростоготипаxs видгруппымоделиxs видфасетаxdto " + "действиепостроителяdom завершенностьпростоготипаxs завершенностьсоставноготипаxs завершенностьсхемыxs запрещенныеподстановкиxs " + "исключениягруппподстановкиxs категорияиспользованияатрибутаxs категорияограниченияидентичностиxs категорияограниченияпространствименxs " + "методнаследованияxs модельсодержимогоxs назначениетипаxml недопустимыеподстановкиxs обработкапробельныхсимволовxs обработкасодержимогоxs " + "ограничениезначенияxs параметрыотбораузловdom переносстрокjson позициявдокументеdom пробельныесимволыxml типатрибутаxml типзначенияjson " + "типканоническогоxml типкомпонентыxs типпроверкиxml типрезультатаdomxpath типузлаdom типузлаxml формаxml формапредставленияxs " + "форматдатыjson экранированиесимволовjson ",
            p = "видсравнениякомпоновкиданных действиеобработкирасшифровкикомпоновкиданных направлениесортировкикомпоновкиданных " + "расположениевложенныхэлементоврезультатакомпоновкиданных расположениеитоговкомпоновкиданных расположениегруппировкикомпоновкиданных " + "расположениеполейгруппировкикомпоновкиданных расположениеполякомпоновкиданных расположениереквизитовкомпоновкиданных " + "расположениересурсовкомпоновкиданных типбухгалтерскогоостаткакомпоновкиданных типвыводатекстакомпоновкиданных " + "типгруппировкикомпоновкиданных типгруппыэлементовотборакомпоновкиданных типдополненияпериодакомпоновкиданных " + "типзаголовкаполейкомпоновкиданных типмакетагруппировкикомпоновкиданных типмакетаобластикомпоновкиданных типостаткакомпоновкиданных " + "типпериодакомпоновкиданных типразмещениятекстакомпоновкиданных типсвязинаборовданныхкомпоновкиданных типэлементарезультатакомпоновкиданных " + "расположениелегендыдиаграммыкомпоновкиданных типпримененияотборакомпоновкиданных режимотображенияэлементанастройкикомпоновкиданных " + "режимотображениянастроеккомпоновкиданных состояниеэлементанастройкикомпоновкиданных способвосстановлениянастроеккомпоновкиданных " + "режимкомпоновкирезультата использованиепараметракомпоновкиданных автопозицияресурсовкомпоновкиданных " + "вариантиспользованиягруппировкикомпоновкиданных расположениересурсоввдиаграммекомпоновкиданных фиксациякомпоновкиданных " + "использованиеусловногооформлениякомпоновкиданных ",
            u = "важностьинтернетпочтовогосообщения обработкатекстаинтернетпочтовогосообщения способкодированияинтернетпочтовоговложения " + "способкодированиянеasciiсимволовинтернетпочтовогосообщения типтекстапочтовогосообщения протоколинтернетпочты " + "статусразборапочтовогосообщения ",
            o = "режимтранзакциизаписижурналарегистрации статустранзакциизаписижурналарегистрации уровеньжурналарегистрации ",
            l = "расположениехранилищасертификатовкриптографии режимвключениясертификатовкриптографии режимпроверкисертификатакриптографии " + "типхранилищасертификатовкриптографии ",
            k = "кодировкаименфайловвzipфайле методсжатияzip методшифрованияzip режимвосстановленияпутейфайловzip режимобработкиподкаталоговzip " + "режимсохраненияпутейzip уровеньсжатияzip ",
            d = "звуковоеоповещение направлениепереходакстроке позициявпотоке порядокбайтов режимблокировкиданных режимуправленияблокировкойданных " + "сервисвстроенныхпокупок состояниефоновогозадания типподписчикадоставляемыхуведомлений уровеньиспользованиязащищенногосоединенияftp ",
            QA = "направлениепорядкасхемызапроса типдополненияпериодамисхемызапроса типконтрольнойточкисхемызапроса типобъединениясхемызапроса " + "типпараметрадоступнойтаблицысхемызапроса типсоединениясхемызапроса ",
            IA = "httpметод автоиспользованиеобщегореквизита автопрефиксномеразадачи вариантвстроенногоязыка видиерархии видрегистранакопления " + "видтаблицывнешнегоисточникаданных записьдвиженийприпроведении заполнениепоследовательностей индексирование " + "использованиебазыпланавидоврасчета использованиебыстроговыбора использованиеобщегореквизита использованиеподчинения " + "использованиеполнотекстовогопоиска использованиеразделяемыхданныхобщегореквизита использованиереквизита " + "назначениеиспользованияприложения назначениерасширенияконфигурации направлениепередачи обновлениепредопределенныхданных " + "оперативноепроведение основноепредставлениевидарасчета основноепредставлениевидахарактеристики основноепредставлениезадачи " + "основноепредставлениепланаобмена основноепредставлениесправочника основноепредставлениесчета перемещениеграницыприпроведении " + "периодичностьномерабизнеспроцесса периодичностьномерадокумента периодичностьрегистрарасчета периодичностьрегистрасведений " + "повторноеиспользованиевозвращаемыхзначений полнотекстовыйпоискпривводепостроке принадлежностьобъекта проведение " + "разделениеаутентификацииобщегореквизита разделениеданныхобщегореквизита разделениерасширенийконфигурацииобщегореквизита " + "режимавтонумерацииобъектов режимзаписирегистра режимиспользованиямодальности " + "режимиспользованиясинхронныхвызововрасширенийплатформыивнешнихкомпонент режимповторногоиспользованиясеансов " + "режимполученияданныхвыборапривводепостроке режимсовместимости режимсовместимостиинтерфейса " + "режимуправленияблокировкойданныхпоумолчанию сериикодовпланавидовхарактеристик сериикодовпланасчетов " + "сериикодовсправочника созданиепривводе способвыбора способпоискастрокипривводепостроке способредактирования " + "типданныхтаблицывнешнегоисточникаданных типкодапланавидоврасчета типкодасправочника типмакета типномерабизнеспроцесса " + "типномерадокумента типномеразадачи типформы удалениедвижений ",
            HA = "важностьпроблемыприменениярасширенияконфигурации вариантинтерфейсаклиентскогоприложения вариантмасштабаформклиентскогоприложения " + "вариантосновногошрифтаклиентскогоприложения вариантстандартногопериода вариантстандартнойдатыначала видграницы видкартинки " + "видотображенияполнотекстовогопоиска видрамки видсравнения видцвета видчисловогозначения видшрифта допустимаядлина допустимыйзнак " + "использованиеbyteordermark использованиеметаданныхполнотекстовогопоиска источникрасширенийконфигурации клавиша кодвозвратадиалога " + "кодировкаxbase кодировкатекста направлениепоиска направлениесортировки обновлениепредопределенныхданных обновлениеприизмененииданных " + "отображениепанелиразделов проверказаполнения режимдиалогавопрос режимзапускаклиентскогоприложения режимокругления режимоткрытияформприложения " + "режимполнотекстовогопоиска скоростьклиентскогосоединения состояниевнешнегоисточникаданных состояниеобновленияконфигурациибазыданных " + "способвыборасертификатаwindows способкодированиястроки статуссообщения типвнешнейкомпоненты типплатформы типповеденияклавишиenter " + "типэлементаинформацииовыполненииобновленияконфигурациибазыданных уровеньизоляциитранзакций хешфункция частидаты",
            wA = D + H + C + E + z + w + N + q + R + P + y + v + x + p + u + o + l + k + d + QA + IA + HA,
            KA = "comобъект ftpсоединение httpзапрос httpсервисответ httpсоединение wsопределения wsпрокси xbase анализданных аннотацияxs " + "блокировкаданных буфердвоичныхданных включениеxs выражениекомпоновкиданных генераторслучайныхчисел географическаясхема " + "географическиекоординаты графическаясхема группамоделиxs данныерасшифровкикомпоновкиданных двоичныеданные дендрограмма " + "диаграмма диаграммаганта диалогвыборафайла диалогвыборацвета диалогвыборашрифта диалограсписаниярегламентногозадания " + "диалогредактированиястандартногопериода диапазон документdom документhtml документацияxs доставляемоеуведомление " + "записьdom записьfastinfoset записьhtml записьjson записьxml записьzipфайла записьданных записьтекста записьузловdom " + "запрос защищенноесоединениеopenssl значенияполейрасшифровкикомпоновкиданных извлечениетекста импортxs интернетпочта " + "интернетпочтовоесообщение интернетпочтовыйпрофиль интернетпрокси интернетсоединение информациядляприложенияxs " + "использованиеатрибутаxs использованиесобытияжурналарегистрации источникдоступныхнастроеккомпоновкиданных " + "итераторузловdom картинка квалификаторыдаты квалификаторыдвоичныхданных квалификаторыстроки квалификаторычисла " + "компоновщикмакетакомпоновкиданных компоновщикнастроеккомпоновкиданных конструктормакетаоформлениякомпоновкиданных " + "конструкторнастроеккомпоновкиданных конструкторформатнойстроки линия макеткомпоновкиданных макетобластикомпоновкиданных " + "макетоформлениякомпоновкиданных маскаxs менеджеркриптографии наборсхемxml настройкикомпоновкиданных настройкисериализацииjson " + "обработкакартинок обработкарасшифровкикомпоновкиданных обходдереваdom объявлениеатрибутаxs объявлениенотацииxs " + "объявлениеэлементаxs описаниеиспользованиясобытиядоступжурналарегистрации " + "описаниеиспользованиясобытияотказвдоступежурналарегистрации описаниеобработкирасшифровкикомпоновкиданных " + "описаниепередаваемогофайла описаниетипов определениегруппыатрибутовxs определениегруппымоделиxs " + "определениеограниченияидентичностиxs определениепростоготипаxs определениесоставноготипаxs определениетипадокументаdom " + "определенияxpathxs отборкомпоновкиданных пакетотображаемыхдокументов параметрвыбора параметркомпоновкиданных " + "параметрызаписиjson параметрызаписиxml параметрычтенияxml переопределениеxs планировщик полеанализаданных " + "полекомпоновкиданных построительdom построительзапроса построительотчета построительотчетаанализаданных " + "построительсхемxml поток потоквпамяти почта почтовоесообщение преобразованиеxsl преобразованиекканоническомуxml " + "процессорвыводарезультатакомпоновкиданныхвколлекциюзначений процессорвыводарезультатакомпоновкиданныхвтабличныйдокумент " + "процессоркомпоновкиданных разыменовательпространствименdom рамка расписаниерегламентногозадания расширенноеимяxml " + "результатчтенияданных своднаядиаграмма связьпараметравыбора связьпотипу связьпотипукомпоновкиданных сериализаторxdto " + "сертификатклиентаwindows сертификатклиентафайл сертификаткриптографии сертификатыудостоверяющихцентровwindows " + "сертификатыудостоверяющихцентровфайл сжатиеданных системнаяинформация сообщениепользователю сочетаниеклавиш " + "сравнениезначений стандартнаядатаначала стандартныйпериод схемаxml схемакомпоновкиданных табличныйдокумент " + "текстовыйдокумент тестируемоеприложение типданныхxml уникальныйидентификатор фабрикаxdto файл файловыйпоток " + "фасетдлиныxs фасетколичестваразрядовдробнойчастиxs фасетмаксимальноговключающегозначенияxs " + "фасетмаксимальногоисключающегозначенияxs фасетмаксимальнойдлиныxs фасетминимальноговключающегозначенияxs " + "фасетминимальногоисключающегозначенияxs фасетминимальнойдлиныxs фасетобразцаxs фасетобщегоколичестваразрядовxs " + "фасетперечисленияxs фасетпробельныхсимволовxs фильтрузловdom форматированнаястрока форматированныйдокумент " + "фрагментxs хешированиеданных хранилищезначения цвет чтениеfastinfoset чтениеhtml чтениеjson чтениеxml чтениеzipфайла " + "чтениеданных чтениетекста чтениеузловdom шрифт элементрезультатакомпоновкиданных ",
            SA = "comsafearray деревозначений массив соответствие списокзначений структура таблицазначений фиксированнаяструктура " + "фиксированноесоответствие фиксированныймассив ",
            sA = KA + SA,
            NA = "null истина ложь неопределено",
            qA = A.inherit(A.NUMBER_MODE),
            DA = {
                className: "string",
                begin: '"|\\|',
                end: '"|$',
                contains: [{
                    begin: '""'
                }]
            },
            yA = {
                begin: "'",
                end: "'",
                excludeBegin: !0,
                excludeEnd: !0,
                contains: [{
                    className: "number",
                    begin: "\\d{4}([\\.\\\\/:-]?\\d{2}){0,5}"
                }]
            },
            rA = A.inherit(A.C_LINE_COMMENT_MODE),
            K1 = {
                className: "meta",
                begin: "#|&",
                end: "$",
                keywords: {
                    $pattern: Q,
                    "meta-keyword": Z + J
                },
                contains: [rA]
            },
            WA = {
                className: "symbol",
                begin: "~",
                end: ";|:",
                excludeEnd: !0
            },
            XA = {
                className: "function",
                variants: [{
                    begin: "процедура|функция",
                    end: "\\)",
                    keywords: "процедура функция"
                }, {
                    begin: "конецпроцедуры|конецфункции",
                    keywords: "конецпроцедуры конецфункции"
                }],
                contains: [{
                    begin: "\\(",
                    end: "\\)",
                    endsParent: !0,
                    contains: [{
                        className: "params",
                        begin: Q,
                        end: ",",
                        excludeEnd: !0,
                        endsWithParent: !0,
                        keywords: {
                            $pattern: Q,
                            keyword: "знач",
                            literal: NA
                        },
                        contains: [qA, DA, yA]
                    }, rA]
                }, A.inherit(A.TITLE_MODE, {
                    begin: Q
                })]
            };
        return {
            name: "1C:Enterprise",
            case_insensitive: !0,
            keywords: {
                $pattern: Q,
                keyword: Z,
                built_in: K,
                class: wA,
                type: sA,
                literal: NA
            },
            contains: [K1, XA, rA, WA, qA, DA, yA]
        }
    }
    pv0.exports = u04
});
var nv0 = U((O27, iv0) => {
    function m04(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function d04(...A) {
        return A.map((B) => m04(B)).join("")
    }

function c04(A) {
        let Q = {
                ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,
                unexpectedChars: /[!@#$^&',?+~`|:]/
            },
            B = ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"],
            G = A.COMMENT(/;/, /$/),
            Z = {
                className: "symbol",
                begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
            },
            I = {
                className: "symbol",
                begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
            },
            Y = {
                className: "symbol",
                begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
            },
            J = {
                className: "symbol",
                begin: /%[si]/
            },
            W = {
                className: "attribute",
                begin: d04(Q.ruleDeclaration, /(?=\s*=)/)
            };
        return {
            name: "Augmented Backus-Naur Form",
            illegal: Q.unexpectedChars,
            keywords: B,
            contains: [W, G, Z, I, Y, J, A.QUOTE_STRING_MODE, A.NUMBER_MODE]
        }
    }
    iv0.exports = c04
});
var rv0 = U((R27, sv0) => {
    function av0(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function p04(...A) {
        return A.map((B) => av0(B)).join("")
    }

function l04(...A) {
        return "(" + A.map((B) => av0(B)).join("|") + ")"
    }

function i04(A) {
        let Q = ["GET", "POST", "HEAD", "PUT", "DELETE", "CONNECT", "OPTIONS", "PATCH", "TRACE"];
        return {
            name: "Apache Access Log",
            contains: [{
                className: "number",
                begin: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,
                relevance: 5
            }, {
                className: "number",
                begin: /\b\d+\b/,
                relevance: 0
            }, {
                className: "string",
                begin: p04(/"/, l04(...Q)),
                end: /"/,
                keywords: Q,
                illegal: /\n/,
                relevance: 5,
                contains: [{
                    begin: /HTTP\/[12]\.\d'/,
                    relevance: 5
                }]
            }, {
                className: "string",
                begin: /\[\d[^\]\n]{8,}\]/,
                illegal: /\n/,
                relevance: 1
            }, {
                className: "string",
                begin: /\[/,
                end: /\]/,
                illegal: /\n/,
                relevance: 0
            }, {
                className: "string",
                begin: /"Mozilla\/\d\.\d \(/,
                end: /"/,
                illegal: /\n/,
                relevance: 3
            }, {
                className: "string",
                begin: /"/,
                end: /"/,
                illegal: /\n/,
                relevance: 0
            }]
        }
    }
    sv0.exports = i04
});
var tv0 = U((T27, ov0) => {
    function n04(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function a04(...A) {
        return A.map((B) => n04(B)).join("")
    }

function s04(A) {
        let Q = /[a-zA-Z_$][a-zA-Z0-9_$]*/,
            B = /([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/,
            G = {
                className: "rest_arg",
                begin: /[.]{3}/,
                end: Q,
                relevance: 10
            };
        return {
            name: "ActionScript",
            aliases: ["as"],
            keywords: {
                keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
                literal: "true false null undefined"
            },
            contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.C_NUMBER_MODE, {
                className: "class",
                beginKeywords: "package",
                end: /\{/,
                contains: [A.TITLE_MODE]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: /\{/,
                excludeEnd: !0,
                contains: [{
                    beginKeywords: "extends implements"
                }, A.TITLE_MODE]
            }, {
                className: "meta",
                beginKeywords: "import include",
                end: /;/,
                keywords: {
                    "meta-keyword": "import include"
                }
            }, {
                className: "function",
                beginKeywords: "function",
                end: /[{;]/,
                excludeEnd: !0,
                illegal: /\S/,
                contains: [A.TITLE_MODE, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, G]
                }, {
                    begin: a04(/:\s*/, B)
                }]
            }, A.METHOD_GUARD],
            illegal: /#/
        }
    }
    ov0.exports = s04
});
var Ab0 = U((P27, ev0) => {
    function r04(A) {
        let B = "[eE][-+]?\\d(_|\\d)*",
            G = "\\d(_|\\d)*(\\.\\d(_|\\d)*)?(" + B + ")?",
            Z = "\\w+",
            Y = "\\b(" + ("\\d(_|\\d)*#\\w+(\\.\\w+)?#(" + B + ")?") + "|" + G + ")",
            J = "[A-Za-z](_?[A-Za-z0-9.])*",
            W = `[]\\{\\}%#'"`,
            X = A.COMMENT("--", "$"),
            F = {
                begin: "\\s+:\\s+",
                end: "\\s*(:=|;|\\)|=>|$)",
                illegal: `[]\\{\\}%#'"`,
                contains: [{
                    beginKeywords: "loop for declare others",
                    endsParent: !0
                }, {
                    className: "keyword",
                    beginKeywords: "not null constant access function procedure in out aliased exception"
                }, {
                    className: "type",
                    begin: "[A-Za-z](_?[A-Za-z0-9.])*",
                    endsParent: !0,
                    relevance: 0
                }]
            };
        return {
            name: "Ada",
            case_insensitive: !0,
            keywords: {
                keyword: "abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",
                literal: "True False"
            },
            contains: [X, {
                className: "string",
                begin: /"/,
                end: /"/,
                contains: [{
                    begin: /""/,
                    relevance: 0
                }]
            }, {
                className: "string",
                begin: /'.'/
            }, {
                className: "number",
                begin: Y,
                relevance: 0
            }, {
                className: "symbol",
                begin: "'[A-Za-z](_?[A-Za-z0-9.])*"
            }, {
                className: "title",
                begin: "(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
                end: "(is|$)",
                keywords: "package body",
                excludeBegin: !0,
                excludeEnd: !0,
                illegal: `[]\\{\\}%#'"`
            }, {
                begin: "(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
                end: "(\\bis|\\bwith|\\brenames|\\)\\s*;)",
                keywords: "overriding function procedure with is renames return",
                returnBegin: !0,
                contains: [X, {
                    className: "title",
                    begin: "(\\bwith\\s+)?\\b(function|procedure)\\s+",
                    end: "(\\(|\\s+|$)",
                    excludeBegin: !0,
                    excludeEnd: !0,
                    illegal: `[]\\{\\}%#'"`
                }, F, {
                    className: "type",
                    begin: "\\breturn\\s+",
                    end: "(\\s+|;|$)",
                    keywords: "return",
                    excludeBegin: !0,
                    excludeEnd: !0,
                    endsParent: !0,
                    illegal: `[]\\{\\}%#'"`
                }]
            }, {
                className: "type",
                begin: "\\b(sub)?type\\s+",
                end: "\\s+",
                keywords: "type",
                excludeBegin: !0,
                illegal: `[]\\{\\}%#'"`
            }, F]
        }
    }
    ev0.exports = r04
});
var Bb0 = U((j27, Qb0) => {
    function o04(A) {
        var Q = {
                className: "built_in",
                begin: "\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)"
            },
            B = {
                className: "symbol",
                begin: "[a-zA-Z0-9_]+@"
            },
            G = {
                className: "keyword",
                begin: "<",
                end: ">",
                contains: [Q, B]
            };
        return Q.contains = [G], B.contains = [G], {
            name: "AngelScript",
            aliases: ["asc"],
            keywords: "for in|0 break continue while do|0 return if else case switch namespace is cast or and xor not get|0 in inout|10 out override set|0 private public const default|0 final shared external mixin|10 enum typedef funcdef this super import from interface abstract|0 try catch protected explicit property",
            illegal: "(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\\s*[^\\(])",
            contains: [{
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [A.BACKSLASH_ESCAPE],
                relevance: 0
            }, {
                className: "string",
                begin: '"""',
                end: '"""'
            }, {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [A.BACKSLASH_ESCAPE],
                relevance: 0
            }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
                className: "string",
                begin: "^\\s*\\[",
                end: "\\]"
            }, {
                beginKeywords: "interface namespace",
                end: /\{/,
                illegal: "[;.\\-]",
                contains: [{
                    className: "symbol",
                    begin: "[a-zA-Z0-9_]+"
                }]
            }, {
                beginKeywords: "class",
                end: /\{/,
                illegal: "[;.\\-]",
                contains: [{
                    className: "symbol",
                    begin: "[a-zA-Z0-9_]+",
                    contains: [{
                        begin: "[:,]\\s*",
                        contains: [{
                            className: "symbol",
                            begin: "[a-zA-Z0-9_]+"
                        }]
                    }]
                }]
            }, Q, B, {
                className: "literal",
                begin: "\\b(null|true|false)"
            }, {
                className: "number",
                relevance: 0,
                begin: "(-?)(\\b0[xXbBoOdD][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)"
            }]
        }
    }
    Qb0.exports = o04
});
var Zb0 = U((S27, Gb0) => {
    function t04(A) {
        let Q = {
                className: "number",
                begin: /[$%]\d+/
            },
            B = {
                className: "number",
                begin: /\d+/
            },
            G = {
                className: "number",
                begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
            },
            Z = {
                className: "number",
                begin: /:\d{1,5}/
            };
        return {
            name: "Apache config",
            aliases: ["apacheconf"],
            case_insensitive: !0,
            contains: [A.HASH_COMMENT_MODE, {
                className: "section",
                begin: /<\/?/,
                end: />/,
                contains: [G, Z, A.inherit(A.QUOTE_STRING_MODE, {
                    relevance: 0
                })]
            }, {
                className: "attribute",
                begin: /\w+/,
                relevance: 0,
                keywords: {
                    nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                },
                starts: {
                    end: /$/,
                    relevance: 0,
                    keywords: {
                        literal: "on off all deny allow"
                    },
                    contains: [{
                        className: "meta",
                        begin: /\s\[/,
                        end: /\]$/
                    }, {
                        className: "variable",
                        begin: /[\$%]\{/,
                        end: /\}/,
                        contains: ["self", Q]
                    }, G, B, A.QUOTE_STRING_MODE]
                }
            }],
            illegal: /\S/
        }
    }
    Gb0.exports = t04
});
var Xb0 = U((_27, Wb0) => {
    function Jb0(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function Ib0(...A) {
        return A.map((B) => Jb0(B)).join("")
    }

function Yb0(...A) {
        return "(" + A.map((B) => Jb0(B)).join("|") + ")"
    }

function e04(A) {
        let Q = A.inherit(A.QUOTE_STRING_MODE, {
                illegal: null
            }),
            B = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                contains: ["self", A.C_NUMBER_MODE, Q]
            },
            G = A.COMMENT(/--/, /$/),
            Z = A.COMMENT(/\(\*/, /\*\)/, {
                contains: ["self", G]
            }),
            I = [G, Z, A.HASH_COMMENT_MODE],
            Y = [/apart from/, /aside from/, /instead of/, /out of/, /greater than/, /isn't|(doesn't|does not) (equal|come before|come after|contain)/, /(greater|less) than( or equal)?/, /(starts?|ends|begins?) with/, /contained by/, /comes (before|after)/, /a (ref|reference)/, /POSIX (file|path)/, /(date|time) string/, /quoted form/],
            J = [/clipboard info/, /the clipboard/, /info for/, /list (disks|folder)/, /mount volume/, /path to/, /(close|open for) access/, /(get|set) eof/, /current date/, /do shell script/, /get volume settings/, /random number/, /set volume/, /system attribute/, /system info/, /time to GMT/, /(load|run|store) script/, /scripting components/, /ASCII (character|number)/, /localized string/, /choose (application|color|file|file name|folder|from list|remote application|URL)/, /display (alert|dialog)/];
        return {
            name: "AppleScript",
            aliases: ["osascript"],
            keywords: {
                keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
                literal: "AppleScript false linefeed return pi quote result space tab true",
                built_in: "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
            },
            contains: [Q, A.C_NUMBER_MODE, {
                className: "built_in",
                begin: Ib0(/\b/, Yb0(...J), /\b/)
            }, {
                className: "built_in",
                begin: /^\s*return\b/
            }, {
                className: "literal",
                begin: /\b(text item delimiters|current application|missing value)\b/
            }, {
                className: "keyword",
                begin: Ib0(/\b/, Yb0(...Y), /\b/)
            }, {
                beginKeywords: "on",
                illegal: /[${=;\n]/,
                contains: [A.UNDERSCORE_TITLE_MODE, B]
            }, ...I],
            illegal: /\/\/|->|=>|\[\[/
        }
    }
    Wb0.exports = e04
});
var Vb0 = U((k27, Fb0) => {
    function AQ4(A) {
        let B = {
                keyword: "if for while var new function do return void else break",
                literal: "BackSlash DoubleQuote false ForwardSlash Infinity NaN NewLine null PI SingleQuote Tab TextFormatting true undefined",
                built_in: "Abs Acos Angle Attachments Area AreaGeodetic Asin Atan Atan2 Average Bearing Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance DistanceGeodetic Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetByAssociation FeatureSetById FeatureSetByPortalItem FeatureSetByRelationshipName FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry GroupBy Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty IsNan IsSelfIntersecting Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Portal Pow Random Relate Reverse RingIsClockWise Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TrackCurrentTime TrackGeometryWindow TrackIndex TrackStartTime TrackWindow TypeOf Union UrlEncode Variance Weekday When Within Year "
            },
            G = {
                className: "symbol",
                begin: "\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+"
            },
            Z = {
                className: "number",
                variants: [{
                    begin: "\\b(0[bB][01]+)"
                }, {
                    begin: "\\b(0[oO][0-7]+)"
                }, {
                    begin: A.C_NUMBER_RE
                }],
                relevance: 0
            },
            I = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: B,
                contains: []
            },
            Y = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [A.BACKSLASH_ESCAPE, I]
            };
        I.contains = [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, Y, Z, A.REGEXP_MODE];
        let J = I.contains.concat([A.C_BLOCK_COMMENT_MODE, A.C_LINE_COMMENT_MODE]);
        return {
            name: "ArcGIS Arcade",
            keywords: B,
            contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, Y, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, G, Z, {
                begin: /[{,]\s*/,
                relevance: 0,
                contains: [{
                    begin: "[A-Za-z_][0-9A-Za-z_]*\\s*:",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{
                        className: "attr",
                        begin: "[A-Za-z_][0-9A-Za-z_]*",
                        relevance: 0
                    }]
                }]
            }, {
                begin: "(" + A.RE_STARTERS_RE + "|\\b(return)\\b)\\s*",
                keywords: "return",
                contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\(.*?\\)|[A-Za-z_][0-9A-Za-z_]*)\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{
                            begin: "[A-Za-z_][0-9A-Za-z_]*"
                        }, {
                            begin: /\(\s*\)/
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: B,
                            contains: J
                        }]
                    }]
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "function",
                end: /\{/,
                excludeEnd: !0,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z_][0-9A-Za-z_]*"
                }), {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: J
                }],
                illegal: /\[|%/
            }, {
                begin: /\$[(.]/
            }],
            illegal: /#(?!!)/
        }
    }
    Fb0.exports = AQ4
});
var Db0 = U((y27, Kb0) => {
    function QQ4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function BQ4(A) {
        return xH1("(?=", A, ")")
    }

function LxA(A) {
        return xH1("(", A, ")?")
    }

function xH1(...A) {
        return A.map((B) => QQ4(B)).join("")
    }

function GQ4(A) {
        let Q = A.COMMENT("//", "$", {
                contains: [{
                    begin: /\\\n/
                }]
            }),
            B = "decltype\\(auto\\)",
            G = "[a-zA-Z_]\\w*::",
            Z = "<[^<>]+>",
            I = "(decltype\\(auto\\)|" + LxA("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + LxA("<[^<>]+>") + ")",
            Y = {
                className: "keyword",
                begin: "\\b[a-z\\d_]*_t\\b"
            },
            J = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
            W = {
                className: "string",
                variants: [{
                    begin: '(u8?|U|L)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [A.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: "."
                }, A.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/
                })]
            },
            X = {
                className: "number",
                variants: [{
                    begin: "\\b(0b[01']+)"
                }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                relevance: 0
            },
            F = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                },
                contains: [{
                    begin: /\\\n/,
                    relevance: 0
                }, A.inherit(W, {
                    className: "meta-string"
                }), {
                    className: "meta-string",
                    begin: /<.*?>/
                }, Q, A.C_BLOCK_COMMENT_MODE]
            },
            V = {
                className: "title",
                begin: LxA("[a-zA-Z_]\\w*::") + A.IDENT_RE,
                relevance: 0
            },
            K = LxA("[a-zA-Z_]\\w*::") + A.IDENT_RE + "\\s*\\(",
            H = {
                keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
                built_in: "_Bool _Complex _Imaginary",
                _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
                literal: "true false nullptr NULL"
            },
            C = {
                className: "function.dispatch",
                relevance: 0,
                keywords: H,
                begin: xH1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, A.IDENT_RE, BQ4(/\s*\(/))
            },
            E = [C, F, Y, Q, A.C_BLOCK_COMMENT_MODE, X, W],
            z = {
                variants: [{
                    begin: /=/,
                    end: /;/
                }, {
                    begin: /\(/,
                    end: /\)/
                }, {
                    beginKeywords: "new throw return else",
                    end: /;/
                }],
                keywords: H,
                contains: E.concat([{
                    begin: /\(/,
                    end: /\)/,
                    keywords: H,
                    contains: E.concat(["self"]),
                    relevance: 0
                }]),
                relevance: 0
            },