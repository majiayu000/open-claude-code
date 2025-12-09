/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_049.js
 * 处理时间: 2025-12-09T03:41:39.540Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 49/53
 * Lines: 364840 - 366335 (1496 lines)
 * Original file: cli.js
 */

                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "script":
                        case "style":
                        case "template":
                        case "title":
                            k.push(IA), F5(FC, MA, H1), k.removeElement(IA);
                            return;
                        case "head":
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "template":
                            return F5(CA, MA, H1, X0);
                        case "body":
                        case "html":
                        case "br":
                            break;
                        default:
                            return
                    }
                    break
            }
            aZ(FC, "body", null), KA = !0, u(CA, MA, H1, X0)
        }

        function d2(CA, MA, H1, X0) {
            var z0, iQ, O2, n9;
            switch (CA) {
                case 1:
                    if (DA) {
                        if (MA = MA.replace(L31, ""), MA.length === 0) return
                    }
                    if (KA && N31.test(MA)) KA = !1;
                    e8(), ZB(MA);
                    return;
                case 5:
                    return;
                case 4:
                    HQ(MA);
                    return;
                case -1:
                    if (l.length) return RK(CA);
                    U1();
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            if (k.contains("template")) return;
                            tg2(H1, k.elements[0]);
                            return;
                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "script":
                        case "style":
                        case "template":
                        case "title":
                            F5(FC, MA, H1);
                            return;
                        case "body":
                            if (z0 = k.elements[1], !z0 || !(z0 instanceof d7.HTMLBodyElement) || k.contains("template")) return;
                            KA = !1, tg2(H1, z0);
                            return;
                        case "frameset":
                            if (!KA) return;
                            if (z0 = k.elements[1], !z0 || !(z0 instanceof d7.HTMLBodyElement)) return;
                            if (z0.parentNode) z0.parentNode.removeChild(z0);
                            while (!(k.top instanceof d7.HTMLHtmlElement)) k.pop();
                            IQ(MA, H1), u = jC;
                            return;
                        case "address":
                        case "article":
                        case "aside":
                        case "blockquote":
                        case "center":
                        case "details":
                        case "dialog":
                        case "dir":
                        case "div":
                        case "dl":
                        case "fieldset":
                        case "figcaption":
                        case "figure":
                        case "footer":
                        case "header":
                        case "hgroup":
                        case "main":
                        case "nav":
                        case "ol":
                        case "p":
                        case "section":
                        case "summary":
                        case "ul":
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            IQ(MA, H1);
                            return;
                        case "menu":
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            if (c7(k.top, "menuitem")) k.pop();
                            IQ(MA, H1);
                            return;
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            if (k.top instanceof d7.HTMLHeadingElement) k.pop();
                            IQ(MA, H1);
                            return;
                        case "pre":
                        case "listing":
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            IQ(MA, H1), yA = !0, KA = !1;
                            return;
                        case "form":
                            if (HA && !k.contains("template")) return;
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            if (n9 = IQ(MA, H1), !k.contains("template")) HA = n9;
                            return;
                        case "li":
                            KA = !1;
                            for (iQ = k.elements.length - 1; iQ >= 0; iQ--) {
                                if (O2 = k.elements[iQ], O2 instanceof d7.HTMLLIElement) {
                                    d2(Z5, "li");
                                    break
                                }
                                if (c7(O2, _0A) && !c7(O2, YG0)) break
                            }
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            IQ(MA, H1);
                            return;
                        case "dd":
                        case "dt":
                            KA = !1;
                            for (iQ = k.elements.length - 1; iQ >= 0; iQ--) {
                                if (O2 = k.elements[iQ], c7(O2, Au2)) {
                                    d2(Z5, O2.localName);
                                    break
                                }
                                if (c7(O2, _0A) && !c7(O2, YG0)) break
                            }
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            IQ(MA, H1);
                            return;
                        case "plaintext":
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            IQ(MA, H1), D = oQ;
                            return;
                        case "button":
                            if (k.inScope("button")) d2(Z5, "button"), u(CA, MA, H1, X0);
                            else e8(), IQ(MA, H1), KA = !1;
                            return;
                        case "a":
                            var f6 = d.findElementByTag("a");
                            if (f6) d2(Z5, MA), d.remove(f6), k.removeElement(f6);
                        case "b":
                        case "big":
                        case "code":
                        case "em":
                        case "font":
                        case "i":
                        case "s":
                        case "small":
                        case "strike":
                        case "strong":
                        case "tt":
                        case "u":
                            e8(), d.push(IQ(MA, H1), H1);
                            return;
                        case "nobr":
                            if (e8(), k.inScope(MA)) d2(Z5, MA), e8();
                            d.push(IQ(MA, H1), H1);
                            return;
                        case "applet":
                        case "marquee":
                        case "object":
                            e8(), IQ(MA, H1), d.insertMarker(), KA = !1;
                            return;
                        case "table":
                            if (!K1._quirks && k.inButtonScope("p")) d2(Z5, "p");
                            IQ(MA, H1), KA = !1, u = r7;
                            return;
                        case "area":
                        case "br":
                        case "embed":
                        case "img":
                        case "keygen":
                        case "wbr":
                            e8(), IQ(MA, H1), k.pop(), KA = !1;
                            return;
                        case "input":
                            e8(), n9 = IQ(MA, H1), k.pop();
                            var EZ = n9.getAttribute("type");
                            if (!EZ || EZ.toLowerCase() !== "hidden") KA = !1;
                            return;
                        case "param":
                        case "source":
                        case "track":
                            IQ(MA, H1), k.pop();
                            return;
                        case "hr":
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            if (c7(k.top, "menuitem")) k.pop();
                            IQ(MA, H1), k.pop(), KA = !1;
                            return;
                        case "image":
                            d2(FC, "img", H1, X0);
                            return;
                        case "textarea":
                            IQ(MA, H1), yA = !0, KA = !1, D = O1, o = u, u = b6;
                            return;
                        case "xmp":
                            if (k.inButtonScope("p")) d2(Z5, "p");
                            e8(), KA = !1, C3(MA, H1);
                            return;
                        case "iframe":
                            KA = !1, C3(MA, H1);
                            return;
                        case "noembed":
                            C3(MA, H1);
                            return;
                        case "select":
                            if (e8(), IQ(MA, H1), KA = !1, u === r7 || u === tW || u === OK || u === y5 || u === qY) u = Aj;
                            else u = ZV;
                            return;
                        case "optgroup":
                        case "option":
                            if (k.top instanceof d7.HTMLOptionElement) d2(Z5, "option");
                            e8(), IQ(MA, H1);
                            return;
                        case "menuitem":
                            if (c7(k.top, "menuitem")) k.pop();
                            e8(), IQ(MA, H1);
                            return;
                        case "rb":
                        case "rtc":
                            if (k.inScope("ruby")) k.generateImpliedEndTags();
                            IQ(MA, H1);
                            return;
                        case "rp":
                        case "rt":
                            if (k.inScope("ruby")) k.generateImpliedEndTags("rtc");
                            IQ(MA, H1);
                            return;
                        case "math":
                            if (e8(), og2(H1), IG0(H1), h4(MA, H1, h9.MATHML), X0) k.pop();
                            return;
                        case "svg":
                            if (e8(), rg2(H1), IG0(H1), h4(MA, H1, h9.SVG), X0) k.pop();
                            return;
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "frame":
                        case "head":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            return
                    }
                    e8(), IQ(MA, H1);
                    return;
                case 3:
                    switch (MA) {
                        case "template":
                            F5(Z5, MA, H1);
                            return;
                        case "body":
                            if (!k.inScope("body")) return;
                            u = tD;
                            return;
                        case "html":
                            if (!k.inScope("body")) return;
                            u = tD, u(CA, MA, H1);
                            return;
                        case "address":
                        case "article":
                        case "aside":
                        case "blockquote":
                        case "button":
                        case "center":
                        case "details":
                        case "dialog":
                        case "dir":
                        case "div":
                        case "dl":
                        case "fieldset":
                        case "figcaption":
                        case "figure":
                        case "footer":
                        case "header":
                        case "hgroup":
                        case "listing":
                        case "main":
                        case "menu":
                        case "nav":
                        case "ol":
                        case "pre":
                        case "section":
                        case "summary":
                        case "ul":
                            if (!k.inScope(MA)) return;
                            k.generateImpliedEndTags(), k.popTag(MA);
                            return;
                        case "form":
                            if (!k.contains("template")) {
                                var sZ = HA;
                                if (HA = null, !sZ || !k.elementInScope(sZ)) return;
                                k.generateImpliedEndTags(), k.removeElement(sZ)
                            } else {
                                if (!k.inScope("form")) return;
                                k.generateImpliedEndTags(), k.popTag("form")
                            }
                            return;
                        case "p":
                            if (!k.inButtonScope(MA)) d2(FC, MA, null), u(CA, MA, H1, X0);
                            else k.generateImpliedEndTags(MA), k.popTag(MA);
                            return;
                        case "li":
                            if (!k.inListItemScope(MA)) return;
                            k.generateImpliedEndTags(MA), k.popTag(MA);
                            return;
                        case "dd":
                        case "dt":
                            if (!k.inScope(MA)) return;
                            k.generateImpliedEndTags(MA), k.popTag(MA);
                            return;
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                            if (!k.elementTypeInScope(d7.HTMLHeadingElement)) return;
                            k.generateImpliedEndTags(), k.popElementType(d7.HTMLHeadingElement);
                            return;
                        case "sarcasm":
                            break;
                        case "a":
                        case "b":
                        case "big":
                        case "code":
                        case "em":
                        case "font":
                        case "i":
                        case "nobr":
                        case "s":
                        case "small":
                        case "strike":
                        case "strong":
                        case "tt":
                        case "u":
                            var l8 = mG(MA);
                            if (l8) return;
                            break;
                        case "applet":
                        case "marquee":
                        case "object":
                            if (!k.inScope(MA)) return;
                            k.generateImpliedEndTags(), k.popTag(MA), d.clearToMarker();
                            return;
                        case "br":
                            d2(FC, MA, null);
                            return
                    }
                    for (iQ = k.elements.length - 1; iQ >= 0; iQ--)
                        if (O2 = k.elements[iQ], c7(O2, MA)) {
                            k.generateImpliedEndTags(MA), k.popElement(O2);
                            break
                        } else if (c7(O2, _0A)) return;
                    return
            }
        }

        function b6(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    ZB(MA);
                    return;
                case -1:
                    if (k.top instanceof d7.HTMLScriptElement) k.top._already_started = !0;
                    k.pop(), u = o, u(CA);
                    return;
                case 3:
                    if (MA === "script") dG();
                    else k.pop(), u = o;
                    return;
                default:
                    return
            }
        }

        function r7(CA, MA, H1, X0) {
            function z0(O2) {
                for (var n9 = 0, f6 = O2.length; n9 < f6; n9++)
                    if (O2[n9][0] === "type") return O2[n9][1].toLowerCase();
                return null
            }
            switch (CA) {
                case 1:
                    if (NA) {
                        d2(CA, MA, H1, X0);
                        return
                    } else if (c7(k.top, fWA)) {
                        sA = [], o = u, u = g3, u(CA, MA, H1, X0);
                        return
                    }
                    break;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case 2:
                    switch (MA) {
                        case "caption":
                            k.clearToContext(M31), d.insertMarker(), IQ(MA, H1), u = tW;
                            return;
                        case "colgroup":
                            k.clearToContext(M31), IQ(MA, H1), u = wY;
                            return;
                        case "col":
                            r7(FC, "colgroup", null), u(CA, MA, H1, X0);
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            k.clearToContext(M31), IQ(MA, H1), u = OK;
                            return;
                        case "td":
                        case "th":
                        case "tr":
                            r7(FC, "tbody", null), u(CA, MA, H1, X0);
                            return;
                        case "table":
                            if (!k.inTableScope(MA)) return;
                            r7(Z5, MA), u(CA, MA, H1, X0);
                            return;
                        case "style":
                        case "script":
                        case "template":
                            F5(CA, MA, H1, X0);
                            return;
                        case "input":
                            var iQ = z0(H1);
                            if (iQ !== "hidden") break;
                            IQ(MA, H1), k.pop();
                            return;
                        case "form":
                            if (HA || k.contains("template")) return;
                            HA = IQ(MA, H1), k.popElement(HA);
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "table":
                            if (!k.inTableScope(MA)) return;
                            k.popTag(MA), DG();
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            return;
                        case "template":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break;
                case -1:
                    d2(CA, MA, H1, X0);
                    return
            }
            PB = !0, d2(CA, MA, H1, X0), PB = !1
        }

        function g3(CA, MA, H1, X0) {
            if (CA === bWA) {
                if (DA) {
                    if (MA = MA.replace(L31, ""), MA.length === 0) return
                }
                sA.push(MA)
            } else {
                var z0 = sA.join("");
                if (sA.length = 0, N31.test(z0)) PB = !0, d2(bWA, z0), PB = !1;
                else ZB(z0);
                u = o, u(CA, MA, H1, X0)
            }
        }

        function tW(CA, MA, H1, X0) {
            function z0() {
                if (!k.inTableScope("caption")) return !1;
                return k.generateImpliedEndTags(), k.popTag("caption"), d.clearToMarker(), u = r7, !0
            }
            switch (CA) {
                case 2:
                    switch (MA) {
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            if (z0()) u(CA, MA, H1, X0);
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "caption":
                            z0();
                            return;
                        case "table":
                            if (z0()) u(CA, MA, H1, X0);
                            return;
                        case "body":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            return
                    }
                    break
            }
            d2(CA, MA, H1, X0)
        }

        function wY(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    var z0 = MA.match(S0A);
                    if (z0) ZB(z0[0]), MA = MA.substring(z0[0].length);
                    if (MA.length === 0) return;
                    break;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "col":
                            IQ(MA, H1), k.pop();
                            return;
                        case "template":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "colgroup":
                            if (!c7(k.top, "colgroup")) return;
                            k.pop(), u = r7;
                            return;
                        case "col":
                            return;
                        case "template":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break;
                case -1:
                    d2(CA, MA, H1, X0);
                    return
            }
            if (!c7(k.top, "colgroup")) return;
            wY(Z5, "colgroup"), u(CA, MA, H1, X0)
        }

        function OK(CA, MA, H1, X0) {
            function z0() {
                if (!k.inTableScope("tbody") && !k.inTableScope("thead") && !k.inTableScope("tfoot")) return;
                k.clearToContext(O31), OK(Z5, k.top.localName, null), u(CA, MA, H1, X0)
            }
            switch (CA) {
                case 2:
                    switch (MA) {
                        case "tr":
                            k.clearToContext(O31), IQ(MA, H1), u = y5;
                            return;
                        case "th":
                        case "td":
                            OK(FC, "tr", null), u(CA, MA, H1, X0);
                            return;
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            z0();
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "table":
                            z0();
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            if (k.inTableScope(MA)) k.clearToContext(O31), k.pop(), u = r7;
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "td":
                        case "th":
                        case "tr":
                            return
                    }
                    break
            }
            r7(CA, MA, H1, X0)
        }

        function y5(CA, MA, H1, X0) {
            function z0() {
                if (!k.inTableScope("tr")) return !1;
                return k.clearToContext(JG0), k.pop(), u = OK, !0
            }
            switch (CA) {
                case 2:
                    switch (MA) {
                        case "th":
                        case "td":
                            k.clearToContext(JG0), IQ(MA, H1), u = qY, d.insertMarker();
                            return;
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                        case "tr":
                            if (z0()) u(CA, MA, H1, X0);
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "tr":
                            z0();
                            return;
                        case "table":
                            if (z0()) u(CA, MA, H1, X0);
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            if (k.inTableScope(MA)) {
                                if (z0()) u(CA, MA, H1, X0)
                            }
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                        case "td":
                        case "th":
                            return
                    }
                    break
            }
            r7(CA, MA, H1, X0)
        }

        function qY(CA, MA, H1, X0) {
            switch (CA) {
                case 2:
                    switch (MA) {
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "tbody":
                        case "td":
                        case "tfoot":
                        case "th":
                        case "thead":
                        case "tr":
                            if (k.inTableScope("td")) qY(Z5, "td"), u(CA, MA, H1, X0);
                            else if (k.inTableScope("th")) qY(Z5, "th"), u(CA, MA, H1, X0);
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "td":
                        case "th":
                            if (!k.inTableScope(MA)) return;
                            k.generateImpliedEndTags(), k.popTag(MA), d.clearToMarker(), u = y5;
                            return;
                        case "body":
                        case "caption":
                        case "col":
                        case "colgroup":
                        case "html":
                            return;
                        case "table":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                        case "tr":
                            if (!k.inTableScope(MA)) return;
                            qY(Z5, k.inTableScope("td") ? "td" : "th"), u(CA, MA, H1, X0);
                            return
                    }
                    break
            }
            d2(CA, MA, H1, X0)
        }

        function ZV(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (DA) {
                        if (MA = MA.replace(L31, ""), MA.length === 0) return
                    }
                    ZB(MA);
                    return;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case -1:
                    d2(CA, MA, H1, X0);
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "option":
                            if (k.top instanceof d7.HTMLOptionElement) ZV(Z5, MA);
                            IQ(MA, H1);
                            return;
                        case "optgroup":
                            if (k.top instanceof d7.HTMLOptionElement) ZV(Z5, "option");
                            if (k.top instanceof d7.HTMLOptGroupElement) ZV(Z5, MA);
                            IQ(MA, H1);
                            return;
                        case "select":
                            ZV(Z5, MA);
                            return;
                        case "input":
                        case "keygen":
                        case "textarea":
                            if (!k.inSelectScope("select")) return;
                            ZV(Z5, "select"), u(CA, MA, H1, X0);
                            return;
                        case "script":
                        case "template":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break;
                case 3:
                    switch (MA) {
                        case "optgroup":
                            if (k.top instanceof d7.HTMLOptionElement && k.elements[k.elements.length - 2] instanceof d7.HTMLOptGroupElement) ZV(Z5, "option");
                            if (k.top instanceof d7.HTMLOptGroupElement) k.pop();
                            return;
                        case "option":
                            if (k.top instanceof d7.HTMLOptionElement) k.pop();
                            return;
                        case "select":
                            if (!k.inSelectScope(MA)) return;
                            k.popTag(MA), DG();
                            return;
                        case "template":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break
            }
        }

        function Aj(CA, MA, H1, X0) {
            switch (MA) {
                case "caption":
                case "table":
                case "tbody":
                case "tfoot":
                case "thead":
                case "tr":
                case "td":
                case "th":
                    switch (CA) {
                        case 2:
                            Aj(Z5, "select"), u(CA, MA, H1, X0);
                            return;
                        case 3:
                            if (k.inTableScope(MA)) Aj(Z5, "select"), u(CA, MA, H1, X0);
                            return
                    }
            }
            ZV(CA, MA, H1, X0)
        }

        function RK(CA, MA, H1, X0) {
            function z0(iQ) {
                u = iQ, l[l.length - 1] = u, u(CA, MA, H1, X0)
            }
            switch (CA) {
                case 1:
                case 4:
                case 5:
                    d2(CA, MA, H1, X0);
                    return;
                case -1:
                    if (!k.contains("template")) U1();
                    else k.popTag("template"), d.clearToMarker(), l.pop(), DG(), u(CA, MA, H1, X0);
                    return;
                case 2:
                    switch (MA) {
                        case "base":
                        case "basefont":
                        case "bgsound":
                        case "link":
                        case "meta":
                        case "noframes":
                        case "script":
                        case "style":
                        case "template":
                        case "title":
                            F5(CA, MA, H1, X0);
                            return;
                        case "caption":
                        case "colgroup":
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            z0(r7);
                            return;
                        case "col":
                            z0(wY);
                            return;
                        case "tr":
                            z0(OK);
                            return;
                        case "td":
                        case "th":
                            z0(y5);
                            return
                    }
                    z0(d2);
                    return;
                case 3:
                    switch (MA) {
                        case "template":
                            F5(CA, MA, H1, X0);
                            return;
                        default:
                            return
                    }
            }
        }

        function tD(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (N31.test(MA)) break;
                    d2(CA, MA);
                    return;
                case 4:
                    k.elements[0]._appendChild(K1.createComment(MA));
                    return;
                case 5:
                    return;
                case -1:
                    U1();
                    return;
                case 2:
                    if (MA === "html") {
                        d2(CA, MA, H1, X0);
                        return
                    }
                    break;
                case 3:
                    if (MA === "html") {
                        if (QA) return;
                        u = Oa;
                        return
                    }
                    break
            }
            u = d2, u(CA, MA, H1, X0)
        }

        function jC(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (MA = MA.replace(ZG0, ""), MA.length > 0) ZB(MA);
                    return;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case -1:
                    U1();
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "frameset":
                            IQ(MA, H1);
                            return;
                        case "frame":
                            IQ(MA, H1), k.pop();
                            return;
                        case "noframes":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break;
                case 3:
                    if (MA === "frameset") {
                        if (QA && k.top instanceof d7.HTMLHtmlElement) return;
                        if (k.pop(), !QA && !(k.top instanceof d7.HTMLFrameSetElement)) u = ag;
                        return
                    }
                    break
            }
        }

        function ag(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (MA = MA.replace(ZG0, ""), MA.length > 0) ZB(MA);
                    return;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case -1:
                    U1();
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "noframes":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break;
                case 3:
                    if (MA === "html") {
                        u = JN;
                        return
                    }
                    break
            }
        }

        function Oa(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (N31.test(MA)) break;
                    d2(CA, MA, H1, X0);
                    return;
                case 4:
                    K1._appendChild(K1.createComment(MA));
                    return;
                case 5:
                    d2(CA, MA, H1, X0);
                    return;
                case -1:
                    U1();
                    return;
                case 2:
                    if (MA === "html") {
                        d2(CA, MA, H1, X0);
                        return
                    }
                    break
            }
            u = d2, u(CA, MA, H1, X0)
        }

        function JN(CA, MA, H1, X0) {
            switch (CA) {
                case 1:
                    if (MA = MA.replace(ZG0, ""), MA.length > 0) d2(CA, MA, H1, X0);
                    return;
                case 4:
                    K1._appendChild(K1.createComment(MA));
                    return;
                case 5:
                    d2(CA, MA, H1, X0);
                    return;
                case -1:
                    U1();
                    return;
                case 2:
                    switch (MA) {
                        case "html":
                            d2(CA, MA, H1, X0);
                            return;
                        case "noframes":
                            F5(CA, MA, H1, X0);
                            return
                    }
                    break
            }
        }

        function WN(CA, MA, H1, X0) {
            function z0(f6) {
                for (var EZ = 0, sZ = f6.length; EZ < sZ; EZ++) switch (f6[EZ][0]) {
                    case "color":
                    case "face":
                    case "size":
                        return !0
                }
                return !1
            }
            var iQ;
            switch (CA) {
                case 1:
                    if (KA && _a5.test(MA)) KA = !1;
                    if (DA) MA = MA.replace(L31, "�");
                    ZB(MA);
                    return;
                case 4:
                    HQ(MA);
                    return;
                case 5:
                    return;
                case 2:
                    switch (MA) {
                        case "font":
                            if (!z0(H1)) break;
                        case "b":
                        case "big":
                        case "blockquote":
                        case "body":
                        case "br":
                        case "center":
                        case "code":
                        case "dd":
                        case "div":
                        case "dl":
                        case "dt":
                        case "em":
                        case "embed":
                        case "h1":
                        case "h2":
                        case "h3":
                        case "h4":
                        case "h5":
                        case "h6":
                        case "head":
                        case "hr":
                        case "i":
                        case "img":
                        case "li":
                        case "listing":
                        case "menu":
                        case "meta":
                        case "nobr":
                        case "ol":
                        case "p":
                        case "pre":
                        case "ruby":
                        case "s":
                        case "small":
                        case "span":
                        case "strong":
                        case "strike":
                        case "sub":
                        case "sup":
                        case "table":
                        case "tt":
                        case "u":
                        case "ul":
                        case "var":
                            if (QA) break;
                            do k.pop(), iQ = k.top; while (iQ.namespaceURI !== h9.HTML && !ag2(iQ) && !sg2(iQ));
                            p0(CA, MA, H1, X0);
                            return
                    }
                    if (iQ = k.elements.length === 1 && QA ? Q : k.top, iQ.namespaceURI === h9.MATHML) og2(H1);
                    else if (iQ.namespaceURI === h9.SVG) MA = ya5(MA), rg2(H1);
                    if (IG0(H1), h4(MA, H1, iQ.namespaceURI), X0) {
                        if (MA === "script" && iQ.namespaceURI === h9.SVG);
                        k.pop()
                    }
                    return;
                case 3:
                    if (iQ = k.top, MA === "script" && iQ.namespaceURI === h9.SVG && iQ.localName === "script") k.pop();
                    else {
                        var O2 = k.elements.length - 1,
                            n9 = k.elements[O2];
                        for (;;) {
                            if (n9.localName.toLowerCase() === MA) {
                                k.popElement(n9);
                                break
                            }
                            if (n9 = k.elements[--O2], n9.namespaceURI !== h9.HTML) continue;
                            u(CA, MA, H1, X0);
                            break
                        }
                    }
                    return
            }
        }
        return rA.testTokenizer = function(CA, MA, H1, X0) {
            var z0 = [];
            switch (MA) {
                case "PCDATA state":
                    D = C1;
                    break;
                case "RCDATA state":
                    D = O1;
                    break;
                case "RAWTEXT state":
                    D = y1;
                    break;
                case "PLAINTEXT state":
                    D = oQ;
                    break
            }
            if (H1) z = H1;
            if (p0 = function(O2, n9, f6, EZ) {
                    switch (k1(), O2) {
                        case 1:
                            if (z0.length > 0 && z0[z0.length - 1][0] === "Character") z0[z0.length - 1][1] += n9;
                            else z0.push(["Character", n9]);
                            break;
                        case 4:
                            z0.push(["Comment", n9]);
                            break;
                        case 5:
                            z0.push(["DOCTYPE", n9, f6 === void 0 ? null : f6, EZ === void 0 ? null : EZ, !SA]);
                            break;
                        case 2:
                            var sZ = Object.create(null);
                            for (var l8 = 0; l8 < f6.length; l8++) {
                                var u4 = f6[l8];
                                if (u4.length === 1) sZ[u4[0]] = "";
                                else sZ[u4[0]] = u4[1]
                            }
                            var eW = ["StartTag", n9, sZ];
                            if (EZ) eW.push(!0);
                            z0.push(eW);
                            break;
                        case 3:
                            z0.push(["EndTag", n9]);
                            break;
                        case -1:
                            break
                    }
                }, !X0) this.parse(CA, !0);
            else {
                for (var iQ = 0; iQ < CA.length; iQ++) this.parse(CA[iQ]);
                this.parse("", !0)
            }
            return z0
        }, rA
    }
});
var NTA = U((XYZ, Vu2) => {
    Vu2.exports = Fu2;
    var Wu2 = U31(),
        Xu2 = w31(),
        xa5 = T31(),
        P31 = uJ(),
        va5 = G31();

    function Fu2(A) {
        this.contextObject = A
    }
    var ba5 = {
        xml: {
            "": !0,
            "1.0": !0,
            "2.0": !0
        },
        core: {
            "": !0,
            "2.0": !0
        },
        html: {
            "": !0,
            "1.0": !0,
            "2.0": !0
        },
        xhtml: {
            "": !0,
            "1.0": !0,
            "2.0": !0
        }
    };
    Fu2.prototype = {
        hasFeature: function(Q, B) {
            var G = ba5[(Q || "").toLowerCase()];
            return G && G[B || ""] || !1
        },
        createDocumentType: function(Q, B, G) {
            if (!va5.isValidQName(Q)) P31.InvalidCharacterError();
            return new Xu2(this.contextObject, Q, B, G)
        },
        createDocument: function(Q, B, G) {
            var Z = new Wu2(!1, null),
                I;
            if (B) I = Z.createElementNS(Q, B);
            else I = null;
            if (G) Z.appendChild(G);
            if (I) Z.appendChild(I);
            if (Q === P31.NAMESPACE.HTML) Z._contentType = "application/xhtml+xml";
            else if (Q === P31.NAMESPACE.SVG) Z._contentType = "image/svg+xml";
            else Z._contentType = "application/xml";
            return Z
        },
        createHTMLDocument: function(Q) {
            var B = new Wu2(!0, null);
            B.appendChild(new Xu2(B, "html"));
            var G = B.createElement("html");
            B.appendChild(G);
            var Z = B.createElement("head");
            if (G.appendChild(Z), Q !== void 0) {
                var I = B.createElement("title");
                Z.appendChild(I), I.appendChild(B.createTextNode(Q))
            }
            return G.appendChild(B.createElement("body")), B.modclock = 1, B
        },
        mozSetOutputMutationHandler: function(A, Q) {
            A.mutationHandler = Q
        },
        mozGetInputMutationHandler: function(A) {
            P31.nyi()
        },
        mozHTMLParser: xa5
    }
});
var Du2 = U((FYZ, Ku2) => {
    var fa5 = D31(),
        ha5 = s70();
    Ku2.exports = XG0;

    function XG0(A, Q) {
        this._window = A, this._href = Q
    }
    XG0.prototype = Object.create(ha5.prototype, {
        constructor: {
            value: XG0
        },
        href: {
            get: function() {
                return this._href
            },
            set: function(A) {
                this.assign(A)
            }
        },
        assign: {
            value: function(A) {
                var Q = new fa5(this._href),
                    B = Q.resolve(A);
                this._href = B
            }
        },
        replace: {
            value: function(A) {
                this.assign(A)
            }
        },
        reload: {
            value: function() {
                this.assign(this.href)
            }
        },
        toString: {
            value: function() {
                return this.href
            }
        }
    })
});
var Cu2 = U((VYZ, Hu2) => {
    var ga5 = Object.create(null, {
        appCodeName: {
            value: "Mozilla"
        },
        appName: {
            value: "Netscape"
        },
        appVersion: {
            value: "4.0"
        },
        platform: {
            value: ""
        },
        product: {
            value: "Gecko"
        },
        productSub: {
            value: "20100101"
        },
        userAgent: {
            value: ""
        },
        vendor: {
            value: ""
        },
        vendorSub: {
            value: ""
        },
        taintEnabled: {
            value: function() {
                return !1
            }
        }
    });
    Hu2.exports = ga5
});
var zu2 = U((KYZ, Eu2) => {
    var ua5 = {
        setTimeout,
        clearTimeout,
        setInterval,
        clearInterval
    };
    Eu2.exports = ua5
});
var VG0 = U((LTA, Uu2) => {
    var FG0 = uJ();
    LTA = Uu2.exports = {
        CSSStyleDeclaration: H31(),
        CharacterData: DTA(),
        Comment: v70(),
        DOMException: t51(),
        DOMImplementation: NTA(),
        DOMTokenList: U70(),
        Document: U31(),
        DocumentFragment: f70(),
        DocumentType: w31(),
        Element: SWA(),
        HTMLParser: T31(),
        NamedNodeMap: M70(),
        Node: mD(),
        NodeList: T0A(),
        NodeFilter: zTA(),
        ProcessingInstruction: g70(),
        Text: y70(),
        Window: KG0()
    };
    FG0.merge(LTA, a70());
    FG0.merge(LTA, E31().elements);
    FG0.merge(LTA, AG0().elements)
});
var KG0 = U((DYZ, $u2) => {
    var ma5 = NTA(),
        da5 = B70(),
        ca5 = Du2(),
        MTA = uJ();
    $u2.exports = j31;

    function j31(A) {
        this.document = A || new ma5(null).createHTMLDocument(""), this.document._scripting_enabled = !0, this.document.defaultView = this, this.location = new ca5(this, this.document._address || "about:blank")
    }
    j31.prototype = Object.create(da5.prototype, {
        console: {
            value: console
        },
        history: {
            value: {
                back: MTA.nyi,
                forward: MTA.nyi,
                go: MTA.nyi
            }
        },
        navigator: {
            value: Cu2()
        },
        window: {
            get: function() {
                return this
            }
        },
        self: {
            get: function() {
                return this
            }
        },
        frames: {
            get: function() {
                return this
            }
        },
        parent: {
            get: function() {
                return this
            }
        },
        top: {
            get: function() {
                return this
            }
        },
        length: {
            value: 0
        },
        frameElement: {
            value: null
        },
        opener: {
            value: null
        },
        onload: {
            get: function() {
                return this._getEventHandler("load")
            },
            set: function(A) {
                this._setEventHandler("load", A)
            }
        },
        getComputedStyle: {
            value: function(Q) {
                return Q.style
            }
        }
    });
    MTA.expose(zu2(), j31);
    MTA.expose(VG0(), j31)
});
var Mu2 = U((pa5) => {
    var wu2 = NTA(),
        qu2 = T31(),
        HYZ = KG0(),
        Nu2 = VG0();
    pa5.createDOMImplementation = function() {
        return new wu2(null)
    };
    pa5.createDocument = function(A, Q) {
        if (A || Q) {
            var B = new qu2;
            return B.parse(A || "", !0), B.document()
        }
        return new wu2(null).createHTMLDocument("")
    };
    pa5.createIncrementalHTMLParser = function() {
        var A = new qu2;
        return {
            write: function(Q) {
                if (Q.length > 0) A.parse(Q, !1, function() {
                    return !0
                })
            },