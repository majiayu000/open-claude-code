/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.140Z
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 47/53
 * Lines: 361843 - 363341 (1499 lines)
 * Original file: cli.js
 */

                switch (typeof D.lookahead) {
                    case "undefined":
                        if (MA = G.charCodeAt(I++), J) {
                            if (J = !1, MA === 10) {
                                I++;
                                continue
                            }
                        }
                        switch (MA) {
                            case 13:
                                if (I < Z) {
                                    if (G.charCodeAt(I) === 10) I++
                                } else J = !0;
                                D(10);
                                break;
                            case 65535:
                                if (Y && I === Z) {
                                    D(q31);
                                    break
                                }
                            default:
                                D(MA);
                                break
                        }
                        break;
                    case "number":
                        MA = G.charCodeAt(I);
                        var iQ = D.lookahead,
                            O2 = !0;
                        if (iQ < 0) O2 = !1, iQ = -iQ;
                        if (iQ < Z - I) H1 = O2 ? G.substring(I, I + iQ) : null, z0 = !1;
                        else if (Y) {
                            if (H1 = O2 ? G.substring(I, Z) : null, z0 = !0, MA === 65535 && I === Z - 1) MA = q31
                        } else return !0;
                        D(MA, H1, z0);
                        break;
                    case "string":
                        MA = G.charCodeAt(I), X0 = D.lookahead;
                        var n9 = G.indexOf(X0, I);
                        if (n9 !== -1) H1 = G.substring(I, n9 + X0.length), z0 = !1;
                        else {
                            if (!Y) return !0;
                            if (H1 = G.substring(I, Z), MA === 65535 && I === Z - 1) MA = q31;
                            z0 = !0
                        }
                        D(MA, H1, z0);
                        break
                }
            }
            return !1
        }

        function $A(CA, MA) {
            for (var H1 = 0; H1 < x.length; H1++)
                if (x[H1][0] === CA) return;
            if (MA !== void 0) x.push([CA, MA]);
            else x.push([CA])
        }

function LA() {
            ng2.lastIndex = I - 1;
            var CA = ng2.exec(G);
            if (!CA) throw Error("should never happen");
            var MA = CA[1];
            if (!MA) return !1;
            var H1 = CA[2],
                X0 = H1.length;
            switch (H1[0]) {
                case '"':
                case "'":
                    H1 = H1.substring(1, X0 - 1), I += CA[0].length - 1, D = l1;
                    break;
                default:
                    D = jA, I += CA[0].length - 1, H1 = H1.substring(0, X0 - 1);
                    break
            }
            for (var z0 = 0; z0 < x.length; z0++)
                if (x[z0][0] === MA) return !0;
            return x.push([MA, H1]), !0
        }

function TA() {
            p = !1, E = "", x.length = 0
        }

function eA() {
            p = !0, E = "", x.length = 0
        }

function aA() {
            w.length = 0
        }

function I1() {
            N = ""
        }

function w1() {
            q = ""
        }

function PA() {
            R.length = 0
        }

function B1() {
            P.length = 0, y = null, v = null
        }

function Q0() {
            y = []
        }

function b1() {
            v = []
        }

function Y0() {
            SA = !0
        }

function x0() {
            return k.top && k.top.namespaceURI !== "http://www.w3.org/1999/xhtml"
        }

function u0(CA) {
            return z === CA
        }

function k1() {
            if (qA.length > 0) {
                var CA = VC(qA);
                if (qA.length = 0, yA) {
                    if (yA = !1, CA[0] === `
`) CA = CA.substring(1);
                    if (CA.length === 0) return
                }
                p0(bWA, CA), DA = !1
            }
            yA = !1
        }

function T0(CA) {
            CA.lastIndex = I - 1;
            var MA = CA.exec(G);
            if (MA && MA.index === I - 1) {
                if (MA = MA[0], I += MA.length - 1, Y && I === Z) MA = MA.slice(0, -1), I--;
                return MA
            } else throw Error("should never happen")
        }

function fQ(CA) {
            CA.lastIndex = I - 1;
            var MA = CA.exec(G)[0];
            if (!MA) return !1;
            return F1(MA), I += MA.length - 1, !0
        }

function F1(CA) {
            if (qA.length > 0) k1();
            if (yA) {
                if (yA = !1, CA[0] === `
`) CA = CA.substring(1);
                if (CA.length === 0) return
            }
            p0(bWA, CA)
        }

function R1() {
            if (p) p0(Z5, E);
            else {
                var CA = E;
                E = "", z = CA, p0(FC, CA, x)
            }
        }

function N1() {
            if (I === Z) return !1;
            ig2.lastIndex = I;
            var CA = ig2.exec(G);
            if (!CA) throw Error("should never happen");
            var MA = CA[2];
            if (!MA) return !1;
            var H1 = CA[1];
            if (H1) I += MA.length + 2, p0(Z5, MA);
            else I += MA.length + 1, z = MA, p0(FC, MA, Ea5);
            return !0
        }

function Z0() {
            if (p) p0(Z5, E, null, !0);
            else p0(FC, E, x, !0)
        }

function J0() {
            p0(Ca5, VC(P), y ? VC(y) : void 0, v ? VC(v) : void 0)
        }

function s1() {
            k1(), u(q31), K1.modclock = 1
        }
        var p0 = rA.insertToken = function(MA, H1, X0, z0) {
            k1();
            var iQ = k.top;
            if (!iQ || iQ.namespaceURI === h9.HTML) u(MA, H1, X0, z0);
            else if (MA !== FC && MA !== bWA) WN(MA, H1, X0, z0);
            else if (ag2(iQ) && (MA === bWA || MA === FC && H1 !== "mglyph" && H1 !== "malignmark") || MA === FC && H1 === "svg" && iQ.namespaceURI === h9.MATHML && iQ.localName === "annotation-xml" || sg2(iQ)) NA = !0, u(MA, H1, X0, z0), NA = !1;
            else WN(MA, H1, X0, z0)
        };

function HQ(CA) {
            var MA = k.top;
            if (PB && c7(MA, fWA)) uG(function(H1) {
                return H1.createComment(CA)
            });
            else {
                if (MA instanceof d7.HTMLTemplateElement) MA = MA.content;
                MA._appendChild(MA.ownerDocument.createComment(CA))
            }
        }

function ZB(CA) {
            var MA = k.top;
            if (PB && c7(MA, fWA)) uG(function(X0) {
                return X0.createTextNode(CA)
            });
            else {
                if (MA instanceof d7.HTMLTemplateElement) MA = MA.content;
                var H1 = MA.lastChild;
                if (H1 && H1.nodeType === GG0.TEXT_NODE) H1.appendData(CA);
                else MA._appendChild(MA.ownerDocument.createTextNode(CA))
            }
        }

function rQ(CA, MA, H1) {
            var X0 = eg2.createElement(CA, MA, null);
            if (H1)
                for (var z0 = 0, iQ = H1.length; z0 < iQ; z0++) X0._setAttribute(H1[z0][0], H1[z0][1]);
            return X0
        }
        var PB = !1;

function IQ(CA, MA) {
            var H1 = l9(function(X0) {
                return rQ(X0, CA, MA)
            });
            if (c7(H1, Gu2)) H1._form = HA;
            return H1
        }

function l9(CA) {
            var MA;
            if (PB && c7(k.top, fWA)) MA = uG(CA);
            else if (k.top instanceof d7.HTMLTemplateElement) MA = CA(k.top.content.ownerDocument), k.top.content._appendChild(MA);
            else MA = CA(k.top.ownerDocument), k.top._appendChild(MA);
            return k.push(MA), MA
        }

function h4(CA, MA, H1) {
            return l9(function(X0) {
                var z0 = X0._createElementNS(CA, H1, null);
                if (MA)
                    for (var iQ = 0, O2 = MA.length; iQ < O2; iQ++) {
                        var n9 = MA[iQ];
                        if (n9.length === 2) z0._setAttribute(n9[0], n9[1]);
                        else z0._setAttributeNS(n9[2], n9[0], n9[1])
                    }
                return z0
            })
        }

function p5(CA) {
            for (var MA = k.elements.length - 1; MA >= 0; MA--)
                if (k.elements[MA] instanceof CA) return MA;
            return -1
        }

function uG(CA) {
            var MA, H1, X0 = -1,
                z0 = -1,
                iQ;
            if (X0 = p5(d7.HTMLTableElement), z0 = p5(d7.HTMLTemplateElement), z0 >= 0 && (X0 < 0 || z0 > X0)) MA = k.elements[z0];
            else if (X0 >= 0)
                if (MA = k.elements[X0].parentNode, MA) H1 = k.elements[X0];
                else MA = k.elements[X0 - 1];
            if (!MA) MA = k.elements[0];
            if (MA instanceof d7.HTMLTemplateElement) MA = MA.content;
            if (iQ = CA(MA.ownerDocument), iQ.nodeType === GG0.TEXT_NODE) {
                var O2;
                if (H1) O2 = H1.previousSibling;
                else O2 = MA.lastChild;
                if (O2 && O2.nodeType === GG0.TEXT_NODE) return O2.appendData(iQ.data), iQ
            }
            if (H1) MA.insertBefore(iQ, H1);
            else MA._appendChild(iQ);
            return iQ
        }

function DG() {
            var CA = !1;
            for (var MA = k.elements.length - 1; MA >= 0; MA--) {
                var H1 = k.elements[MA];
                if (MA === 0) {
                    if (CA = !0, QA) H1 = Q
                }
                if (H1.namespaceURI === h9.HTML) {
                    var X0 = H1.localName;
                    switch (X0) {
                        case "select":
                            for (var z0 = MA; z0 > 0;) {
                                var iQ = k.elements[--z0];
                                if (iQ instanceof d7.HTMLTemplateElement) break;
                                else if (iQ instanceof d7.HTMLTableElement) {
                                    u = Aj;
                                    return
                                }
                            }
                            u = ZV;
                            return;
                        case "tr":
                            u = y5;
                            return;
                        case "tbody":
                        case "tfoot":
                        case "thead":
                            u = OK;
                            return;
                        case "caption":
                            u = tW;
                            return;
                        case "colgroup":
                            u = wY;
                            return;
                        case "table":
                            u = r7;
                            return;
                        case "template":
                            u = l[l.length - 1];
                            return;
                        case "body":
                            u = d2;
                            return;
                        case "frameset":
                            u = jC;
                            return;
                        case "html":
                            if (IA === null) u = oW;
                            else u = aZ;
                            return;
                        default:
                            if (!CA) {
                                if (X0 === "head") {
                                    u = F5;
                                    return
                                }
                                if (X0 === "td" || X0 === "th") {
                                    u = qY;
                                    return
                                }
                            }
                    }
                }
                if (CA) {
                    u = d2;
                    return
                }
            }
        }

function C3(CA, MA) {
            IQ(CA, MA), D = y1, o = u, u = b6
        }

function CZ(CA, MA) {
            IQ(CA, MA), D = O1, o = u, u = b6
        }

function LI(CA, MA) {
            return {
                elt: rQ(CA, d.list[MA].localName, d.attrs[MA]),
                attrs: d.attrs[MA]
            }
        }

function e8() {
            if (d.list.length === 0) return;
            var CA = d.list[d.list.length - 1];
            if (CA === d.MARKER) return;
            if (k.elements.lastIndexOf(CA) !== -1) return;
            for (var MA = d.list.length - 2; MA >= 0; MA--) {
                if (CA = d.list[MA], CA === d.MARKER) break;
                if (k.elements.lastIndexOf(CA) !== -1) break
            }
            for (MA = MA + 1; MA < d.list.length; MA++) {
                var H1 = l9(function(X0) {
                    return LI(X0, MA).elt
                });
                d.list[MA] = H1
            }
        }

var _5 = {
            localName: "BM"
        };

function mG(CA) {
            if (c7(k.top, CA) && d.indexOf(k.top) === -1) return k.pop(), !0;
            var MA = 0;
            while (MA < 8) {
                MA++;
                var H1 = d.findElementByTag(CA);
                if (!H1) return !1;
                var X0 = k.elements.lastIndexOf(H1);
                if (X0 === -1) return d.remove(H1), !0;
                if (!k.elementInScope(H1)) return !0;
                var z0 = null,
                    iQ;
                for (var O2 = X0 + 1; O2 < k.elements.length; O2++)
                    if (c7(k.elements[O2], _0A)) {
                        z0 = k.elements[O2], iQ = O2;
                        break
                    } if (!z0) return k.popElement(H1), d.remove(H1), !0;
                else {
                    var n9 = k.elements[X0 - 1];
                    d.insertAfter(H1, _5);
                    var f6 = z0,
                        EZ = z0,
                        sZ = iQ,
                        l8, u4 = 0;
                    while (!0) {
                        if (u4++, f6 = k.elements[--sZ], f6 === H1) break;
                        if (l8 = d.indexOf(f6), u4 > 3 && l8 !== -1) d.remove(f6), l8 = -1;
                        if (l8 === -1) {
                            k.removeElement(f6);
                            continue
                        }
                        var eW = LI(n9.ownerDocument, l8);
                        if (d.replace(f6, eW.elt, eW.attrs), k.elements[sZ] = eW.elt, f6 = eW.elt, EZ === z0) d.remove(_5), d.insertAfter(eW.elt, _5);
                        f6._appendChild(EZ), EZ = f6
                    }
                    if (PB && c7(n9, fWA)) uG(function() {
                        return EZ
                    });
                    else if (n9 instanceof d7.HTMLTemplateElement) n9.content._appendChild(EZ);
                    else n9._appendChild(EZ);
                    var IV = LI(z0.ownerDocument, d.indexOf(H1));
                    while (z0.hasChildNodes()) IV.elt._appendChild(z0.firstChild);
                    z0._appendChild(IV.elt), d.remove(H1), d.replace(_5, IV.elt, IV.attrs), k.removeElement(H1);
                    var XF = k.elements.lastIndexOf(z0);
                    k.elements.splice(XF + 1, 0, IV.elt)
                }
            }
            return !0
        }

function dG() {
            k.pop(), u = o;
            return
        }

function U1() {
            if (delete K1._parser, k.elements.length = 0, K1.defaultView) K1.defaultView.dispatchEvent(new d7.Event("load", {}))
        }

function nA(CA, MA) {
            D = MA, I--
        }

function C1(CA) {
            switch (CA) {
                case 38:
                    H = C1, D = a7;
                    break;
                case 60:
                    if (N1()) break;
                    D = lB;
                    break;
                case 0:
                    qA.push(CA), DA = !0;
                    break;
                case -1:
                    s1();
                    break;
                default:
                    fQ(ja5) || qA.push(CA);
                    break
            }
        }

function O1(CA) {
            switch (CA) {
                case 38:
                    H = O1, D = a7;
                    break;
                case 60:
                    D = y9;
                    break;
                case 0:
                    qA.push(65533), DA = !0;
                    break;
                case -1:
                    s1();
                    break;
                default:
                    qA.push(CA);
                    break
            }
        }

function y1(CA) {
            switch (CA) {
                case 60:
                    D = w8;
                    break;
                case 0:
                    qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    fQ(lg2) || qA.push(CA);
                    break
            }
        }

function O0(CA) {
            switch (CA) {
                case 60:
                    D = $4;
                    break;
                case 0:
                    qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    fQ(lg2) || qA.push(CA);
                    break
            }
        }

function oQ(CA) {
            switch (CA) {
                case 0:
                    qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    fQ(Sa5) || qA.push(CA);
                    break
            }
        }

function lB(CA) {
            switch (CA) {
                case 33:
                    D = dQ;
                    break;
                case 47:
                    D = k9;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    TA(), nA(CA, C6);
                    break;
                case 63:
                    nA(CA, e0);
                    break;
                default:
                    qA.push(60), nA(CA, C1);
                    break
            }
        }

function k9(CA) {
            switch (CA) {
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    eA(), nA(CA, C6);
                    break;
                case 62:
                    D = C1;
                    break;
                case -1:
                    qA.push(60), qA.push(47), s1();
                    break;
                default:
                    nA(CA, e0);
                    break
            }
        }

function C6(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    D = jA;
                    break;
                case 47:
                    D = I0;
                    break;
                case 62:
                    D = C1, R1();
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    E += String.fromCharCode(CA + 32);
                    break;
                case 0:
                    E += String.fromCharCode(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    E += T0(Ra5);
                    break
            }
        }

function y9(CA) {
            if (CA === 47) aA(), D = A6;
            else qA.push(60), nA(CA, O1)
        }

function A6(CA) {
            switch (CA) {
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    eA(), nA(CA, v6);
                    break;
                default:
                    qA.push(60), qA.push(47), nA(CA, O1);
                    break
            }
        }

function v6(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    if (u0(E)) {
                        D = jA;
                        return
                    }
                    break;
                case 47:
                    if (u0(E)) {
                        D = I0;
                        return
                    }
                    break;
                case 62:
                    if (u0(E)) {
                        D = C1, R1();
                        return
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    E += String.fromCharCode(CA + 32), w.push(CA);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    E += String.fromCharCode(CA), w.push(CA);
                    return;
                default:
                    break
            }
            qA.push(60), qA.push(47), j0A(qA, w), nA(CA, O1)
        }

function w8(CA) {
            if (CA === 47) aA(), D = i9;
            else qA.push(60), nA(CA, y1)
        }

function i9(CA) {
            switch (CA) {
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    eA(), nA(CA, Q6);
                    break;
                default:
                    qA.push(60), qA.push(47), nA(CA, y1);
                    break
            }
        }

function Q6(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    if (u0(E)) {
                        D = jA;
                        return
                    }
                    break;
                case 47:
                    if (u0(E)) {
                        D = I0;
                        return
                    }
                    break;
                case 62:
                    if (u0(E)) {
                        D = C1, R1();
                        return
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    E += String.fromCharCode(CA + 32), w.push(CA);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    E += String.fromCharCode(CA), w.push(CA);
                    return;
                default:
                    break
            }
            qA.push(60), qA.push(47), j0A(qA, w), nA(CA, y1)
        }

        function $4(CA) {
            switch (CA) {
                case 47:
                    aA(), D = n7;
                    break;
                case 33:
                    D = k5, qA.push(60), qA.push(33);
                    break;
                default:
                    qA.push(60), nA(CA, O0);
                    break
            }
        }

function n7(CA) {
            switch (CA) {
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    eA(), nA(CA, B6);
                    break;
                default:
                    qA.push(60), qA.push(47), nA(CA, O0);
                    break
            }
        }

function B6(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    if (u0(E)) {
                        D = jA;
                        return
                    }
                    break;
                case 47:
                    if (u0(E)) {
                        D = I0;
                        return
                    }
                    break;
                case 62:
                    if (u0(E)) {
                        D = C1, R1();
                        return
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    E += String.fromCharCode(CA + 32), w.push(CA);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    E += String.fromCharCode(CA), w.push(CA);
                    return;
                default:
                    break
            }
            qA.push(60), qA.push(47), j0A(qA, w), nA(CA, O0)
        }

function k5(CA) {
            if (CA === 45) D = g9, qA.push(45);
            else nA(CA, O0)
        }

function g9(CA) {
            if (CA === 45) D = B8, qA.push(45);
            else nA(CA, O0)
        }

function g4(CA) {
            switch (CA) {
                case 45:
                    D = q8, qA.push(45);
                    break;
                case 60:
                    D = W5;
                    break;
                case 0:
                    qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    qA.push(CA);
                    break
            }
        }

function q8(CA) {
            switch (CA) {
                case 45:
                    D = B8, qA.push(45);
                    break;
                case 60:
                    D = W5;
                    break;
                case 0:
                    D = g4, qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    D = g4, qA.push(CA);
                    break
            }
        }

function B8(CA) {
            switch (CA) {
                case 45:
                    qA.push(45);
                    break;
                case 60:
                    D = W5;
                    break;
                case 62:
                    D = O0, qA.push(62);
                    break;
                case 0:
                    D = g4, qA.push(65533);
                    break;
                case -1:
                    s1();
                    break;
                default:
                    D = g4, qA.push(CA);
                    break
            }
        }

function W5(CA) {
            switch (CA) {
                case 47:
                    aA(), D = u9;
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    aA(), qA.push(60), nA(CA, E3);
                    break;
                default:
                    qA.push(60), nA(CA, g4);
                    break
            }
        }

function u9(CA) {
            switch (CA) {
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    eA(), nA(CA, w4);
                    break;
                default:
                    qA.push(60), qA.push(47), nA(CA, g4);
                    break
            }
        }

function w4(CA) {
            switch (CA) {
                case 9:
                case 10:
                case 12:
                case 32:
                    if (u0(E)) {
                        D = jA;
                        return
                    }
                    break;
                case 47:
                    if (u0(E)) {
                        D = I0;
                        return
                    }
                    break;
                case 62:
                    if (u0(E)) {
                        D = C1, R1();
                        return
                    }
                    break;
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 70:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                case 90:
                    E += String.fromCharCode(CA + 32), w.push(CA);
                    return;
                case 97:
                case 98:
                case 99:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                case 122:
                    E += String.fromCharCode(CA), w.push(CA);
                    return;
                default:
                    break
            }
            qA.push(60), qA.push(47), j0A(qA, w), nA(CA, g4)
        }
