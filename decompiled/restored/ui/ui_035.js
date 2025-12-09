/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: ui_035.js
 * 处理时间: 2025-12-09T03:37:26.132Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * TR         (  4x) = getProviderIdentifier() - Returns API provider ID
 * en         (  2x) = AGENT_OUTPUT_TOOL = "AgentOutputTool"
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 35/53
 * Lines: 284000 - 285485 (1486 lines)
 * Original file: cli.js
 */

            else this._emitChars("]"), this._reconsumeInState("CDATA_SECTION_STATE")
        } ["CDATA_SECTION_END_STATE"](A) {
            if (A === M1.GREATER_THAN_SIGN) this.state = "DATA_STATE";
            else if (A === M1.RIGHT_SQUARE_BRACKET) this._emitChars("]");
            else this._emitChars("]]"), this._reconsumeInState("CDATA_SECTION_STATE")
        } ["CHARACTER_REFERENCE_STATE"](A) {
            if (this.tempBuff = [M1.AMPERSAND], A === M1.NUMBER_SIGN) this.tempBuff.push(A), this.state = "NUMERIC_CHARACTER_REFERENCE_STATE";
            else if (X10(A)) this._reconsumeInState("NAMED_CHARACTER_REFERENCE_STATE");
            else this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
        } ["NAMED_CHARACTER_REFERENCE_STATE"](A) {
            let Q = this._matchNamedCharacterReference(A);
            if (this._ensureHibernation()) this.tempBuff = [M1.AMPERSAND];
            else if (Q) {
                let B = this.tempBuff[this.tempBuff.length - 1] === M1.SEMICOLON;
                if (!this._isCharacterReferenceAttributeQuirk(B)) {
                    if (!B) this._errOnNextCodePoint(s0.missingSemicolonAfterCharacterReference);
                    this.tempBuff = Q
                }
                this._flushCodePointsConsumedAsCharacterReference(), this.state = this.returnState
            } else this._flushCodePointsConsumedAsCharacterReference(), this.state = "AMBIGUOS_AMPERSAND_STATE"
        } ["AMBIGUOS_AMPERSAND_STATE"](A) {
            if (X10(A))
                if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += xJ(A);
                else this._emitCodePoint(A);
            else {
                if (A === M1.SEMICOLON) this._err(s0.unknownNamedCharacterReference);
                this._reconsumeInState(this.returnState)
            }
        } ["NUMERIC_CHARACTER_REFERENCE_STATE"](A) {
            if (this.charRefCode = 0, A === M1.LATIN_SMALL_X || A === M1.LATIN_CAPITAL_X) this.tempBuff.push(A), this.state = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE";
            else this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_START_STATE")
        } ["HEXADEMICAL_CHARACTER_REFERENCE_START_STATE"](A) {
            if (QI5(A)) this._reconsumeInState("HEXADEMICAL_CHARACTER_REFERENCE_STATE");
            else this._err(s0.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
        } ["DECIMAL_CHARACTER_REFERENCE_START_STATE"](A) {
            if (rLA(A)) this._reconsumeInState("DECIMAL_CHARACTER_REFERENCE_STATE");
            else this._err(s0.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
        } ["HEXADEMICAL_CHARACTER_REFERENCE_STATE"](A) {
            if (C32(A)) this.charRefCode = this.charRefCode * 16 + A - 55;
            else if (E32(A)) this.charRefCode = this.charRefCode * 16 + A - 87;
            else if (rLA(A)) this.charRefCode = this.charRefCode * 16 + A - 48;
            else if (A === M1.SEMICOLON) this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
            else this._err(s0.missingSemicolonAfterCharacterReference), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE")
        } ["DECIMAL_CHARACTER_REFERENCE_STATE"](A) {
            if (rLA(A)) this.charRefCode = this.charRefCode * 10 + A - 48;
            else if (A === M1.SEMICOLON) this.state = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
            else this._err(s0.missingSemicolonAfterCharacterReference), this._reconsumeInState("NUMERIC_CHARACTER_REFERENCE_END_STATE")
        } ["NUMERIC_CHARACTER_REFERENCE_END_STATE"]() {
            if (this.charRefCode === M1.NULL) this._err(s0.nullCharacterReference), this.charRefCode = M1.REPLACEMENT_CHARACTER;
            else if (this.charRefCode > 1114111) this._err(s0.characterReferenceOutsideUnicodeRange), this.charRefCode = M1.REPLACEMENT_CHARACTER;
            else if (_G.isSurrogate(this.charRefCode)) this._err(s0.surrogateCharacterReference), this.charRefCode = M1.REPLACEMENT_CHARACTER;
            else if (_G.isUndefinedCodePoint(this.charRefCode)) this._err(s0.noncharacterCharacterReference);
            else if (_G.isControlCodePoint(this.charRefCode) || this.charRefCode === M1.CARRIAGE_RETURN) {
                this._err(s0.controlCharacterReference);
                let A = AI5[this.charRefCode];
                if (A) this.charRefCode = A
            }
            this.tempBuff = [this.charRefCode], this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
        }
    }
    uZ.CHARACTER_TOKEN = "CHARACTER_TOKEN";
    uZ.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
    uZ.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
    uZ.START_TAG_TOKEN = "START_TAG_TOKEN";
    uZ.END_TAG_TOKEN = "END_TAG_TOKEN";
    uZ.COMMENT_TOKEN = "COMMENT_TOKEN";
    uZ.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
    uZ.EOF_TOKEN = "EOF_TOKEN";
    uZ.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
    uZ.MODE = {
        DATA: "DATA_STATE",
        RCDATA: "RCDATA_STATE",
        RAWTEXT: "RAWTEXT_STATE",
        SCRIPT_DATA: "SCRIPT_DATA_STATE",
        PLAINTEXT: "PLAINTEXT_STATE"
    };
    uZ.getTokenAttr = function(A, Q) {
        for (let B = A.attrs.length - 1; B >= 0; B--)
            if (A.attrs[B].name === Q) return A.attrs[B].value;
        return null
    };
    z32.exports = uZ
});
var Ji = U((BI5) => {
    var F10 = BI5.NAMESPACES = {
        HTML: "http://www.w3.org/1999/xhtml",
        MATHML: "http://www.w3.org/1998/Math/MathML",
        SVG: "http://www.w3.org/2000/svg",
        XLINK: "http://www.w3.org/1999/xlink",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/"
    };
    BI5.ATTRS = {
        TYPE: "type",
        ACTION: "action",
        ENCODING: "encoding",
        PROMPT: "prompt",
        NAME: "name",
        COLOR: "color",
        FACE: "face",
        SIZE: "size"
    };
    BI5.DOCUMENT_MODE = {
        NO_QUIRKS: "no-quirks",
        QUIRKS: "quirks",
        LIMITED_QUIRKS: "limited-quirks"
    };
    var vQ = BI5.TAG_NAMES = {
        A: "a",
        ADDRESS: "address",
        ANNOTATION_XML: "annotation-xml",
        APPLET: "applet",
        AREA: "area",
        ARTICLE: "article",
        ASIDE: "aside",
        B: "b",
        BASE: "base",
        BASEFONT: "basefont",
        BGSOUND: "bgsound",
        BIG: "big",
        BLOCKQUOTE: "blockquote",
        BODY: "body",
        BR: "br",
        BUTTON: "button",
        CAPTION: "caption",
        CENTER: "center",
        CODE: "code",
        COL: "col",
        COLGROUP: "colgroup",
        DD: "dd",
        DESC: "desc",
        DETAILS: "details",
        DIALOG: "dialog",
        DIR: "dir",
        DIV: "div",
        DL: "dl",
        DT: "dt",
        EM: "em",
        EMBED: "embed",
        FIELDSET: "fieldset",
        FIGCAPTION: "figcaption",
        FIGURE: "figure",
        FONT: "font",
        FOOTER: "footer",
        FOREIGN_OBJECT: "foreignObject",
        FORM: "form",
        FRAME: "frame",
        FRAMESET: "frameset",
        H1: "h1",
        H2: "h2",
        H3: "h3",
        H4: "h4",
        H5: "h5",
        H6: "h6",
        HEAD: "head",
        HEADER: "header",
        HGROUP: "hgroup",
        HR: "hr",
        HTML: "html",
        I: "i",
        IMG: "img",
        IMAGE: "image",
        INPUT: "input",
        IFRAME: "iframe",
        KEYGEN: "keygen",
        LABEL: "label",
        LI: "li",
        LINK: "link",
        LISTING: "listing",
        MAIN: "main",
        MALIGNMARK: "malignmark",
        MARQUEE: "marquee",
        MATH: "math",
        MENU: "menu",
        META: "meta",
        MGLYPH: "mglyph",
        MI: "mi",
        MO: "mo",
        MN: "mn",
        MS: "ms",
        MTEXT: "mtext",
        NAV: "nav",
        NOBR: "nobr",
        NOFRAMES: "noframes",
        NOEMBED: "noembed",
        NOSCRIPT: "noscript",
        OBJECT: "object",
        OL: "ol",
        OPTGROUP: "optgroup",
        OPTION: "option",
        P: "p",
        PARAM: "param",
        PLAINTEXT: "plaintext",
        PRE: "pre",
        RB: "rb",
        RP: "rp",
        RT: "rt",
        RTC: "rtc",
        RUBY: "ruby",
        S: "s",
        SCRIPT: "script",
        SECTION: "section",
        SELECT: "select",
        SOURCE: "source",
        SMALL: "small",
        SPAN: "span",
        STRIKE: "strike",
        STRONG: "strong",
        STYLE: "style",
        SUB: "sub",
        SUMMARY: "summary",
        SUP: "sup",
        TABLE: "table",
        TBODY: "tbody",
        TEMPLATE: "template",
        TEXTAREA: "textarea",
        TFOOT: "tfoot",
        TD: "td",
        TH: "th",
        THEAD: "thead",
        TITLE: "title",
        TR: "tr",
        TRACK: "track",
        TT: "tt",
        U: "u",
        UL: "ul",
        SVG: "svg",
        VAR: "var",
        WBR: "wbr",
        XMP: "xmp"
    };
    BI5.SPECIAL_ELEMENTS = {
        [F10.HTML]: {
            [vQ.ADDRESS]: !0,
            [vQ.APPLET]: !0,
            [vQ.AREA]: !0,
            [vQ.ARTICLE]: !0,
            [vQ.ASIDE]: !0,
            [vQ.BASE]: !0,
            [vQ.BASEFONT]: !0,
            [vQ.BGSOUND]: !0,
            [vQ.BLOCKQUOTE]: !0,
            [vQ.BODY]: !0,
            [vQ.BR]: !0,
            [vQ.BUTTON]: !0,
            [vQ.CAPTION]: !0,
            [vQ.CENTER]: !0,
            [vQ.COL]: !0,
            [vQ.COLGROUP]: !0,
            [vQ.DD]: !0,
            [vQ.DETAILS]: !0,
            [vQ.DIR]: !0,
            [vQ.DIV]: !0,
            [vQ.DL]: !0,
            [vQ.DT]: !0,
            [vQ.EMBED]: !0,
            [vQ.FIELDSET]: !0,
            [vQ.FIGCAPTION]: !0,
            [vQ.FIGURE]: !0,
            [vQ.FOOTER]: !0,
            [vQ.FORM]: !0,
            [vQ.FRAME]: !0,
            [vQ.FRAMESET]: !0,
            [vQ.H1]: !0,
            [vQ.H2]: !0,
            [vQ.H3]: !0,
            [vQ.H4]: !0,
            [vQ.H5]: !0,
            [vQ.H6]: !0,
            [vQ.HEAD]: !0,
            [vQ.HEADER]: !0,
            [vQ.HGROUP]: !0,
            [vQ.HR]: !0,
            [vQ.HTML]: !0,
            [vQ.IFRAME]: !0,
            [vQ.IMG]: !0,
            [vQ.INPUT]: !0,
            [vQ.LI]: !0,
            [vQ.LINK]: !0,
            [vQ.LISTING]: !0,
            [vQ.MAIN]: !0,
            [vQ.MARQUEE]: !0,
            [vQ.MENU]: !0,
            [vQ.META]: !0,
            [vQ.NAV]: !0,
            [vQ.NOEMBED]: !0,
            [vQ.NOFRAMES]: !0,
            [vQ.NOSCRIPT]: !0,
            [vQ.OBJECT]: !0,
            [vQ.OL]: !0,
            [vQ.P]: !0,
            [vQ.PARAM]: !0,
            [vQ.PLAINTEXT]: !0,
            [vQ.PRE]: !0,
            [vQ.SCRIPT]: !0,
            [vQ.SECTION]: !0,
            [vQ.SELECT]: !0,
            [vQ.SOURCE]: !0,
            [vQ.STYLE]: !0,
            [vQ.SUMMARY]: !0,
            [vQ.TABLE]: !0,
            [vQ.TBODY]: !0,
            [vQ.TD]: !0,
            [vQ.TEMPLATE]: !0,
            [vQ.TEXTAREA]: !0,
            [vQ.TFOOT]: !0,
            [vQ.TH]: !0,
            [vQ.THEAD]: !0,
            [vQ.TITLE]: !0,
            [vQ.TR]: !0,
            [vQ.TRACK]: !0,
            [vQ.UL]: !0,
            [vQ.WBR]: !0,
            [vQ.XMP]: !0
        },
        [F10.MATHML]: {
            [vQ.MI]: !0,
            [vQ.MO]: !0,
            [vQ.MN]: !0,
            [vQ.MS]: !0,
            [vQ.MTEXT]: !0,
            [vQ.ANNOTATION_XML]: !0
        },
        [F10.SVG]: {
            [vQ.TITLE]: !0,
            [vQ.FOREIGN_OBJECT]: !0,
            [vQ.DESC]: !0
        }
    }
});
var N32 = U((ePG, q32) => {
    var $32 = Ji(),
        cQ = $32.TAG_NAMES,
        kG = $32.NAMESPACES;

    function U32(A) {
        switch (A.length) {
            case 1:
                return A === cQ.P;
            case 2:
                return A === cQ.RB || A === cQ.RP || A === cQ.RT || A === cQ.DD || A === cQ.DT || A === cQ.LI;
            case 3:
                return A === cQ.RTC;
            case 6:
                return A === cQ.OPTION;
            case 8:
                return A === cQ.OPTGROUP
        }
        return !1
    }

    function YI5(A) {
        switch (A.length) {
            case 1:
                return A === cQ.P;
            case 2:
                return A === cQ.RB || A === cQ.RP || A === cQ.RT || A === cQ.DD || A === cQ.DT || A === cQ.LI || A === cQ.TD || A === cQ.TH || A === cQ.TR;
            case 3:
                return A === cQ.RTC;
            case 5:
                return A === cQ.TBODY || A === cQ.TFOOT || A === cQ.THEAD;
            case 6:
                return A === cQ.OPTION;
            case 7:
                return A === cQ.CAPTION;
            case 8:
                return A === cQ.OPTGROUP || A === cQ.COLGROUP
        }
        return !1
    }

    function Q21(A, Q) {
        switch (A.length) {
            case 2:
                if (A === cQ.TD || A === cQ.TH) return Q === kG.HTML;
                else if (A === cQ.MI || A === cQ.MO || A === cQ.MN || A === cQ.MS) return Q === kG.MATHML;
                break;
            case 4:
                if (A === cQ.HTML) return Q === kG.HTML;
                else if (A === cQ.DESC) return Q === kG.SVG;
                break;
            case 5:
                if (A === cQ.TABLE) return Q === kG.HTML;
                else if (A === cQ.MTEXT) return Q === kG.MATHML;
                else if (A === cQ.TITLE) return Q === kG.SVG;
                break;
            case 6:
                return (A === cQ.APPLET || A === cQ.OBJECT) && Q === kG.HTML;
            case 7:
                return (A === cQ.CAPTION || A === cQ.MARQUEE) && Q === kG.HTML;
            case 8:
                return A === cQ.TEMPLATE && Q === kG.HTML;
            case 13:
                return A === cQ.FOREIGN_OBJECT && Q === kG.SVG;
            case 14:
                return A === cQ.ANNOTATION_XML && Q === kG.MATHML
        }
        return !1
    }
    class w32 {
        constructor(A, Q) {
            this.stackTop = -1, this.items = [], this.current = A, this.currentTagName = null, this.currentTmplContent = null, this.tmplCount = 0, this.treeAdapter = Q
        }
        _indexOf(A) {
            let Q = -1;
            for (let B = this.stackTop; B >= 0; B--)
                if (this.items[B] === A) {
                    Q = B;
                    break
                } return Q
        }
        _isInTemplate() {
            return this.currentTagName === cQ.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === kG.HTML
        }
        _updateCurrentElement() {
            this.current = this.items[this.stackTop], this.currentTagName = this.current && this.treeAdapter.getTagName(this.current), this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null
        }
        push(A) {
            if (this.items[++this.stackTop] = A, this._updateCurrentElement(), this._isInTemplate()) this.tmplCount++
        }
        pop() {
            if (this.stackTop--, this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;
            this._updateCurrentElement()
        }
        replace(A, Q) {
            let B = this._indexOf(A);
            if (this.items[B] = Q, B === this.stackTop) this._updateCurrentElement()
        }
        insertAfter(A, Q) {
            let B = this._indexOf(A) + 1;
            if (this.items.splice(B, 0, Q), B === ++this.stackTop) this._updateCurrentElement()
        }
        popUntilTagNamePopped(A) {
            while (this.stackTop > -1) {
                let Q = this.currentTagName,
                    B = this.treeAdapter.getNamespaceURI(this.current);
                if (this.pop(), Q === A && B === kG.HTML) break
            }
        }
        popUntilElementPopped(A) {
            while (this.stackTop > -1) {
                let Q = this.current;
                if (this.pop(), Q === A) break
            }
        }
        popUntilNumberedHeaderPopped() {
            while (this.stackTop > -1) {
                let A = this.currentTagName,
                    Q = this.treeAdapter.getNamespaceURI(this.current);
                if (this.pop(), A === cQ.H1 || A === cQ.H2 || A === cQ.H3 || A === cQ.H4 || A === cQ.H5 || A === cQ.H6 && Q === kG.HTML) break
            }
        }
        popUntilTableCellPopped() {
            while (this.stackTop > -1) {
                let A = this.currentTagName,
                    Q = this.treeAdapter.getNamespaceURI(this.current);
                if (this.pop(), A === cQ.TD || A === cQ.TH && Q === kG.HTML) break
            }
        }
        popAllUpToHtmlElement() {
            this.stackTop = 0, this._updateCurrentElement()
        }
        clearBackToTableContext() {
            while (this.currentTagName !== cQ.TABLE && this.currentTagName !== cQ.TEMPLATE && this.currentTagName !== cQ.HTML || this.treeAdapter.getNamespaceURI(this.current) !== kG.HTML) this.pop()
        }
        clearBackToTableBodyContext() {
            while (this.currentTagName !== cQ.TBODY && this.currentTagName !== cQ.TFOOT && this.currentTagName !== cQ.THEAD && this.currentTagName !== cQ.TEMPLATE && this.currentTagName !== cQ.HTML || this.treeAdapter.getNamespaceURI(this.current) !== kG.HTML) this.pop()
        }
        clearBackToTableRowContext() {
            while (this.currentTagName !== cQ.TR && this.currentTagName !== cQ.TEMPLATE && this.currentTagName !== cQ.HTML || this.treeAdapter.getNamespaceURI(this.current) !== kG.HTML) this.pop()
        }
        remove(A) {
            for (let Q = this.stackTop; Q >= 0; Q--)
                if (this.items[Q] === A) {
                    this.items.splice(Q, 1), this.stackTop--, this._updateCurrentElement();
                    break
                }
        }
        tryPeekProperlyNestedBodyElement() {
            let A = this.items[1];
            return A && this.treeAdapter.getTagName(A) === cQ.BODY ? A : null
        }
        contains(A) {
            return this._indexOf(A) > -1
        }
        getCommonAncestor(A) {
            let Q = this._indexOf(A);
            return --Q >= 0 ? this.items[Q] : null
        }
        isRootHtmlElementCurrent() {
            return this.stackTop === 0 && this.currentTagName === cQ.HTML
        }
        hasInScope(A) {
            for (let Q = this.stackTop; Q >= 0; Q--) {
                let B = this.treeAdapter.getTagName(this.items[Q]),
                    G = this.treeAdapter.getNamespaceURI(this.items[Q]);
                if (B === A && G === kG.HTML) return !0;
                if (Q21(B, G)) return !1
            }
            return !0
        }
        hasNumberedHeaderInScope() {
            for (let A = this.stackTop; A >= 0; A--) {
                let Q = this.treeAdapter.getTagName(this.items[A]),
                    B = this.treeAdapter.getNamespaceURI(this.items[A]);
                if ((Q === cQ.H1 || Q === cQ.H2 || Q === cQ.H3 || Q === cQ.H4 || Q === cQ.H5 || Q === cQ.H6) && B === kG.HTML) return !0;
                if (Q21(Q, B)) return !1
            }
            return !0
        }
        hasInListItemScope(A) {
            for (let Q = this.stackTop; Q >= 0; Q--) {
                let B = this.treeAdapter.getTagName(this.items[Q]),
                    G = this.treeAdapter.getNamespaceURI(this.items[Q]);
                if (B === A && G === kG.HTML) return !0;
                if ((B === cQ.UL || B === cQ.OL) && G === kG.HTML || Q21(B, G)) return !1
            }
            return !0
        }
        hasInButtonScope(A) {
            for (let Q = this.stackTop; Q >= 0; Q--) {
                let B = this.treeAdapter.getTagName(this.items[Q]),
                    G = this.treeAdapter.getNamespaceURI(this.items[Q]);
                if (B === A && G === kG.HTML) return !0;
                if (B === cQ.BUTTON && G === kG.HTML || Q21(B, G)) return !1
            }
            return !0
        }
        hasInTableScope(A) {
            for (let Q = this.stackTop; Q >= 0; Q--) {
                let B = this.treeAdapter.getTagName(this.items[Q]);
                if (this.treeAdapter.getNamespaceURI(this.items[Q]) !== kG.HTML) continue;
                if (B === A) return !0;
                if (B === cQ.TABLE || B === cQ.TEMPLATE || B === cQ.HTML) return !1
            }
            return !0
        }
        hasTableBodyContextInTableScope() {
            for (let A = this.stackTop; A >= 0; A--) {
                let Q = this.treeAdapter.getTagName(this.items[A]);
                if (this.treeAdapter.getNamespaceURI(this.items[A]) !== kG.HTML) continue;
                if (Q === cQ.TBODY || Q === cQ.THEAD || Q === cQ.TFOOT) return !0;
                if (Q === cQ.TABLE || Q === cQ.HTML) return !1
            }
            return !0
        }
        hasInSelectScope(A) {
            for (let Q = this.stackTop; Q >= 0; Q--) {
                let B = this.treeAdapter.getTagName(this.items[Q]);
                if (this.treeAdapter.getNamespaceURI(this.items[Q]) !== kG.HTML) continue;
                if (B === A) return !0;
                if (B !== cQ.OPTION && B !== cQ.OPTGROUP) return !1
            }
            return !0
        }
        generateImpliedEndTags() {
            while (U32(this.currentTagName)) this.pop()
        }
        generateImpliedEndTagsThoroughly() {
            while (YI5(this.currentTagName)) this.pop()
        }
        generateImpliedEndTagsWithExclusion(A) {
            while (U32(this.currentTagName) && this.currentTagName !== A) this.pop()
        }
    }
    q32.exports = w32
});
var M32 = U((AjG, L32) => {
    class eT {
        constructor(A) {
            this.length = 0, this.entries = [], this.treeAdapter = A, this.bookmark = null
        }
        _getNoahArkConditionCandidates(A) {
            let Q = [];
            if (this.length >= 3) {
                let B = this.treeAdapter.getAttrList(A).length,
                    G = this.treeAdapter.getTagName(A),
                    Z = this.treeAdapter.getNamespaceURI(A);
                for (let I = this.length - 1; I >= 0; I--) {
                    let Y = this.entries[I];
                    if (Y.type === eT.MARKER_ENTRY) break;
                    let J = Y.element,
                        W = this.treeAdapter.getAttrList(J);
                    if (this.treeAdapter.getTagName(J) === G && this.treeAdapter.getNamespaceURI(J) === Z && W.length === B) Q.push({
                        idx: I,
                        attrs: W
                    })
                }
            }
            return Q.length < 3 ? [] : Q
        }
        _ensureNoahArkCondition(A) {
            let Q = this._getNoahArkConditionCandidates(A),
                B = Q.length;
            if (B) {
                let G = this.treeAdapter.getAttrList(A),
                    Z = G.length,
                    I = Object.create(null);
                for (let Y = 0; Y < Z; Y++) {
                    let J = G[Y];
                    I[J.name] = J.value
                }
                for (let Y = 0; Y < Z; Y++)
                    for (let J = 0; J < B; J++) {
                        let W = Q[J].attrs[Y];
                        if (I[W.name] !== W.value) Q.splice(J, 1), B--;
                        if (Q.length < 3) return
                    }
                for (let Y = B - 1; Y >= 2; Y--) this.entries.splice(Q[Y].idx, 1), this.length--
            }
        }
        insertMarker() {
            this.entries.push({
                type: eT.MARKER_ENTRY
            }), this.length++
        }
        pushElement(A, Q) {
            this._ensureNoahArkCondition(A), this.entries.push({
                type: eT.ELEMENT_ENTRY,
                element: A,
                token: Q
            }), this.length++
        }
        insertElementAfterBookmark(A, Q) {
            let B = this.length - 1;
            for (; B >= 0; B--)
                if (this.entries[B] === this.bookmark) break;
            this.entries.splice(B + 1, 0, {
                type: eT.ELEMENT_ENTRY,
                element: A,
                token: Q
            }), this.length++
        }
        removeEntry(A) {
            for (let Q = this.length - 1; Q >= 0; Q--)
                if (this.entries[Q] === A) {
                    this.entries.splice(Q, 1), this.length--;
                    break
                }
        }
        clearToLastMarker() {
            while (this.length) {
                let A = this.entries.pop();
                if (this.length--, A.type === eT.MARKER_ENTRY) break
            }
        }
        getElementEntryInScopeWithTagName(A) {
            for (let Q = this.length - 1; Q >= 0; Q--) {
                let B = this.entries[Q];
                if (B.type === eT.MARKER_ENTRY) return null;
                if (this.treeAdapter.getTagName(B.element) === A) return B
            }
            return null
        }
        getElementEntry(A) {
            for (let Q = this.length - 1; Q >= 0; Q--) {
                let B = this.entries[Q];
                if (B.type === eT.ELEMENT_ENTRY && B.element === A) return B
            }
            return null
        }
    }
    eT.MARKER_ENTRY = "MARKER_ENTRY";
    eT.ELEMENT_ENTRY = "ELEMENT_ENTRY";
    L32.exports = eT
});
var jk = U((QjG, O32) => {
    class V10 {
        constructor(A) {
            let Q = {},
                B = this._getOverriddenMethods(this, Q);
            for (let G of Object.keys(B))
                if (typeof B[G] === "function") Q[G] = A[G], A[G] = B[G]
        }
        _getOverriddenMethods() {
            throw Error("Not implemented")
        }
    }
    V10.install = function(A, Q, B) {
        if (!A.__mixins) A.__mixins = [];
        for (let Z = 0; Z < A.__mixins.length; Z++)
            if (A.__mixins[Z].constructor === Q) return A.__mixins[Z];
        let G = new Q(A, B);
        return A.__mixins.push(G), G
    };
    O32.exports = V10
});
var K10 = U((BjG, T32) => {
    var JI5 = jk();
    class R32 extends JI5 {
        constructor(A) {
            super(A);
            this.preprocessor = A, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.offset = 0, this.col = 0, this.line = 1
        }
        _getOverriddenMethods(A, Q) {
            return {
                advance() {
                    let B = this.pos + 1,
                        G = this.html[B];
                    if (A.isEol) A.isEol = !1, A.line++, A.lineStartPos = B;
                    if (G === `
` || G === "\r" && this.html[B + 1] !== `
`) A.isEol = !0;
                    return A.col = B - A.lineStartPos + 1, A.offset = A.droppedBufferSize + B, Q.advance.call(this)
                },
                retreat() {
                    Q.retreat.call(this), A.isEol = !1, A.col = this.pos - A.lineStartPos + 1
                },
                dropParsedChunk() {
                    let B = this.pos;
                    Q.dropParsedChunk.call(this);
                    let G = B - this.pos;
                    A.lineStartPos -= G, A.droppedBufferSize += G, A.offset = A.droppedBufferSize + this.pos
                }
            }
        }
    }
    T32.exports = R32
});
var H10 = U((GjG, S32) => {
    var P32 = jk(),
        D10 = oLA(),
        WI5 = K10();
    class j32 extends P32 {
        constructor(A) {
            super(A);
            this.tokenizer = A, this.posTracker = P32.install(A.preprocessor, WI5), this.currentAttrLocation = null, this.ctLoc = null
        }
        _getCurrentLocation() {
            return {
                startLine: this.posTracker.line,
                startCol: this.posTracker.col,
                startOffset: this.posTracker.offset,
                endLine: -1,
                endCol: -1,
                endOffset: -1
            }
        }
        _attachCurrentAttrLocationInfo() {
            this.currentAttrLocation.endLine = this.posTracker.line, this.currentAttrLocation.endCol = this.posTracker.col, this.currentAttrLocation.endOffset = this.posTracker.offset;
            let A = this.tokenizer.currentToken,
                Q = this.tokenizer.currentAttr;
            if (!A.location.attrs) A.location.attrs = Object.create(null);
            A.location.attrs[Q.name] = this.currentAttrLocation
        }
        _getOverriddenMethods(A, Q) {
            let B = {
                _createStartTagToken() {
                    Q._createStartTagToken.call(this), this.currentToken.location = A.ctLoc
                },
                _createEndTagToken() {
                    Q._createEndTagToken.call(this), this.currentToken.location = A.ctLoc
                },
                _createCommentToken() {
                    Q._createCommentToken.call(this), this.currentToken.location = A.ctLoc
                },
                _createDoctypeToken(G) {
                    Q._createDoctypeToken.call(this, G), this.currentToken.location = A.ctLoc
                },
                _createCharacterToken(G, Z) {
                    Q._createCharacterToken.call(this, G, Z), this.currentCharacterToken.location = A.ctLoc
                },
                _createEOFToken() {
                    Q._createEOFToken.call(this), this.currentToken.location = A._getCurrentLocation()
                },
                _createAttr(G) {
                    Q._createAttr.call(this, G), A.currentAttrLocation = A._getCurrentLocation()
                },
                _leaveAttrName(G) {
                    Q._leaveAttrName.call(this, G), A._attachCurrentAttrLocationInfo()
                },
                _leaveAttrValue(G) {
                    Q._leaveAttrValue.call(this, G), A._attachCurrentAttrLocationInfo()
                },
                _emitCurrentToken() {
                    let G = this.currentToken.location;
                    if (this.currentCharacterToken) this.currentCharacterToken.location.endLine = G.startLine, this.currentCharacterToken.location.endCol = G.startCol, this.currentCharacterToken.location.endOffset = G.startOffset;
                    if (this.currentToken.type === D10.EOF_TOKEN) G.endLine = G.startLine, G.endCol = G.startCol, G.endOffset = G.startOffset;
                    else G.endLine = A.posTracker.line, G.endCol = A.posTracker.col + 1, G.endOffset = A.posTracker.offset + 1;
                    Q._emitCurrentToken.call(this)
                },
                _emitCurrentCharacterToken() {
                    let G = this.currentCharacterToken && this.currentCharacterToken.location;
                    if (G && G.endOffset === -1) G.endLine = A.posTracker.line, G.endCol = A.posTracker.col, G.endOffset = A.posTracker.offset;
                    Q._emitCurrentCharacterToken.call(this)
                }
            };
            return Object.keys(D10.MODE).forEach((G) => {
                let Z = D10.MODE[G];
                B[Z] = function(I) {
                    A.ctLoc = A._getCurrentLocation(), Q[Z].call(this, I)
                }
            }), B
        }
    }
    S32.exports = j32
});
var y32 = U((ZjG, k32) => {
    var XI5 = jk();
    class _32 extends XI5 {
        constructor(A, Q) {
            super(A);
            this.onItemPop = Q.onItemPop
        }
        _getOverriddenMethods(A, Q) {
            return {
                pop() {
                    A.onItemPop(this.current), Q.pop.call(this)
                },
                popAllUpToHtmlElement() {
                    for (let B = this.stackTop; B > 0; B--) A.onItemPop(this.items[B]);
                    Q.popAllUpToHtmlElement.call(this)
                },
                remove(B) {
                    A.onItemPop(this.current), Q.remove.call(this, B)
                }
            }
        }
    }
    k32.exports = _32
});
var f32 = U((IjG, b32) => {
    var C10 = jk(),
        x32 = oLA(),
        FI5 = H10(),
        VI5 = y32(),
        KI5 = Ji(),
        E10 = KI5.TAG_NAMES;
    class v32 extends C10 {
        constructor(A) {
            super(A);
            this.parser = A, this.treeAdapter = this.parser.treeAdapter, this.posTracker = null, this.lastStartTagToken = null, this.lastFosterParentingLocation = null, this.currentToken = null
        }
        _setStartLocation(A) {
            let Q = null;
            if (this.lastStartTagToken) Q = Object.assign({}, this.lastStartTagToken.location), Q.startTag = this.lastStartTagToken.location;
            this.treeAdapter.setNodeSourceCodeLocation(A, Q)
        }
        _setEndLocation(A, Q) {
            let B = this.treeAdapter.getNodeSourceCodeLocation(A);
            if (B) {
                if (Q.location) {
                    let G = Q.location,
                        Z = this.treeAdapter.getTagName(A);
                    if (Q.type === x32.END_TAG_TOKEN && Z === Q.tagName) B.endTag = Object.assign({}, G), B.endLine = G.endLine, B.endCol = G.endCol, B.endOffset = G.endOffset;
                    else B.endLine = G.startLine, B.endCol = G.startCol, B.endOffset = G.startOffset
                }
            }
        }
        _getOverriddenMethods(A, Q) {
            return {
                _bootstrap(B, G) {
                    Q._bootstrap.call(this, B, G), A.lastStartTagToken = null, A.lastFosterParentingLocation = null, A.currentToken = null;
                    let Z = C10.install(this.tokenizer, FI5);
                    A.posTracker = Z.posTracker, C10.install(this.openElements, VI5, {
                        onItemPop: function(I) {
                            A._setEndLocation(I, A.currentToken)
                        }
                    })
                },
                _runParsingLoop(B) {
                    Q._runParsingLoop.call(this, B);
                    for (let G = this.openElements.stackTop; G >= 0; G--) A._setEndLocation(this.openElements.items[G], A.currentToken)
                },
                _processTokenInForeignContent(B) {
                    A.currentToken = B, Q._processTokenInForeignContent.call(this, B)
                },
                _processToken(B) {
                    if (A.currentToken = B, Q._processToken.call(this, B), B.type === x32.END_TAG_TOKEN && (B.tagName === E10.HTML || B.tagName === E10.BODY && this.openElements.hasInScope(E10.BODY)))
                        for (let Z = this.openElements.stackTop; Z >= 0; Z--) {
                            let I = this.openElements.items[Z];
                            if (this.treeAdapter.getTagName(I) === B.tagName) {
                                A._setEndLocation(I, B);
                                break
                            }
                        }
                },
                _setDocumentType(B) {
                    Q._setDocumentType.call(this, B);
                    let G = this.treeAdapter.getChildNodes(this.document),
                        Z = G.length;
                    for (let I = 0; I < Z; I++) {
                        let Y = G[I];
                        if (this.treeAdapter.isDocumentTypeNode(Y)) {
                            this.treeAdapter.setNodeSourceCodeLocation(Y, B.location);
                            break
                        }
                    }
                },
                _attachElementToTree(B) {
                    A._setStartLocation(B), A.lastStartTagToken = null, Q._attachElementToTree.call(this, B)
                },
                _appendElement(B, G) {
                    A.lastStartTagToken = B, Q._appendElement.call(this, B, G)
                },
                _insertElement(B, G) {
                    A.lastStartTagToken = B, Q._insertElement.call(this, B, G)
                },
                _insertTemplate(B) {
                    A.lastStartTagToken = B, Q._insertTemplate.call(this, B);
                    let G = this.treeAdapter.getTemplateContent(this.openElements.current);
                    this.treeAdapter.setNodeSourceCodeLocation(G, null)
                },
                _insertFakeRootElement() {
                    Q._insertFakeRootElement.call(this), this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null)
                },
                _appendCommentNode(B, G) {
                    Q._appendCommentNode.call(this, B, G);
                    let Z = this.treeAdapter.getChildNodes(G),
                        I = Z[Z.length - 1];
                    this.treeAdapter.setNodeSourceCodeLocation(I, B.location)
                },
                _findFosterParentingLocation() {
                    return A.lastFosterParentingLocation = Q._findFosterParentingLocation.call(this), A.lastFosterParentingLocation
                },
                _insertCharacters(B) {
                    Q._insertCharacters.call(this, B);
                    let G = this._shouldFosterParentOnInsertion(),
                        Z = G && A.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current,
                        I = this.treeAdapter.getChildNodes(Z),
                        Y = G && A.lastFosterParentingLocation.beforeElement ? I.indexOf(A.lastFosterParentingLocation.beforeElement) - 1 : I.length - 1,
                        J = I[Y],
                        W = this.treeAdapter.getNodeSourceCodeLocation(J);
                    if (W) W.endLine = B.location.endLine, W.endCol = B.location.endCol, W.endOffset = B.location.endOffset;
                    else this.treeAdapter.setNodeSourceCodeLocation(J, B.location)
                }
            }
        }
    }
    b32.exports = v32
});
var B21 = U((YjG, g32) => {
    var DI5 = jk();
    class h32 extends DI5 {
        constructor(A, Q) {
            super(A);
            this.posTracker = null, this.onParseError = Q.onParseError
        }
        _setErrorLocation(A) {
            A.startLine = A.endLine = this.posTracker.line, A.startCol = A.endCol = this.posTracker.col, A.startOffset = A.endOffset = this.posTracker.offset
        }
        _reportError(A) {
            let Q = {
                code: A,
                startLine: -1,
                startCol: -1,
                startOffset: -1,
                endLine: -1,
                endCol: -1,
                endOffset: -1
            };
            this._setErrorLocation(Q), this.onParseError(Q)
        }
        _getOverriddenMethods(A) {
            return {
                _err(Q) {
                    A._reportError(Q)
                }
            }
        }
    }
    g32.exports = h32
});
var d32 = U((JjG, m32) => {
    var HI5 = B21(),
        CI5 = K10(),
        EI5 = jk();
    class u32 extends HI5 {
        constructor(A, Q) {
            super(A, Q);
            this.posTracker = EI5.install(A, CI5), this.lastErrOffset = -1
        }
        _reportError(A) {
            if (this.lastErrOffset !== this.posTracker.offset) this.lastErrOffset = this.posTracker.offset, super._reportError(A)
        }
    }
    m32.exports = u32
});
var l32 = U((WjG, p32) => {
    var zI5 = B21(),
        UI5 = d32(),
        $I5 = jk();
    class c32 extends zI5 {
        constructor(A, Q) {
            super(A, Q);
            let B = $I5.install(A.preprocessor, UI5, Q);
            this.posTracker = B.posTracker
        }
    }
    p32.exports = c32
});
var s32 = U((XjG, a32) => {
    var wI5 = B21(),
        qI5 = l32(),
        NI5 = H10(),
        i32 = jk();
    class n32 extends wI5 {
        constructor(A, Q) {
            super(A, Q);
            this.opts = Q, this.ctLoc = null, this.locBeforeToken = !1
        }
        _setErrorLocation(A) {
            if (this.ctLoc) A.startLine = this.ctLoc.startLine, A.startCol = this.ctLoc.startCol, A.startOffset = this.ctLoc.startOffset, A.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine, A.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol, A.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset
        }
        _getOverriddenMethods(A, Q) {
            return {
                _bootstrap(B, G) {
                    Q._bootstrap.call(this, B, G), i32.install(this.tokenizer, qI5, A.opts), i32.install(this.tokenizer, NI5)
                },
                _processInputToken(B) {
                    A.ctLoc = B.location, Q._processInputToken.call(this, B)
                },
                _err(B, G) {
                    A.locBeforeToken = G && G.beforeToken, A._reportError(B)
                }
            }
        }
    }
    a32.exports = n32
});
var z10 = U((OI5) => {
    var {
        DOCUMENT_MODE: LI5
    } = Ji();
    OI5.createDocument = function() {
        return {
            nodeName: "#document",
            mode: LI5.NO_QUIRKS,
            childNodes: []
        }
    };
    OI5.createDocumentFragment = function() {
        return {
            nodeName: "#document-fragment",
            childNodes: []
        }
    };
    OI5.createElement = function(A, Q, B) {
        return {
            nodeName: A,
            tagName: A,
            attrs: B,
            namespaceURI: Q,
            childNodes: [],
            parentNode: null
        }
    };
    OI5.createCommentNode = function(A) {
        return {
            nodeName: "#comment",
            data: A,
            parentNode: null
        }
    };
    var r32 = function(A) {
            return {
                nodeName: "#text",
                value: A,
                parentNode: null
            }
        },
        o32 = OI5.appendChild = function(A, Q) {
            A.childNodes.push(Q), Q.parentNode = A
        },
        MI5 = OI5.insertBefore = function(A, Q, B) {
            let G = A.childNodes.indexOf(B);
            A.childNodes.splice(G, 0, Q), Q.parentNode = A
        };
    OI5.setTemplateContent = function(A, Q) {
        A.content = Q
    };
    OI5.getTemplateContent = function(A) {
        return A.content
    };
    OI5.setDocumentType = function(A, Q, B, G) {
        let Z = null;
        for (let I = 0; I < A.childNodes.length; I++)
            if (A.childNodes[I].nodeName === "#documentType") {
                Z = A.childNodes[I];
                break
            } if (Z) Z.name = Q, Z.publicId = B, Z.systemId = G;
        else o32(A, {
            nodeName: "#documentType",
            name: Q,
            publicId: B,
            systemId: G
        })
    };
    OI5.setDocumentMode = function(A, Q) {
        A.mode = Q
    };
    OI5.getDocumentMode = function(A) {
        return A.mode
    };
    OI5.detachNode = function(A) {
        if (A.parentNode) {
            let Q = A.parentNode.childNodes.indexOf(A);
            A.parentNode.childNodes.splice(Q, 1), A.parentNode = null
        }
    };
    OI5.insertText = function(A, Q) {
        if (A.childNodes.length) {
            let B = A.childNodes[A.childNodes.length - 1];
            if (B.nodeName === "#text") {
                B.value += Q;
                return
            }
        }
        o32(A, r32(Q))
    };
    OI5.insertTextBefore = function(A, Q, B) {
        let G = A.childNodes[A.childNodes.indexOf(B) - 1];
        if (G && G.nodeName === "#text") G.value += Q;
        else MI5(A, r32(Q), B)
    };
    OI5.adoptAttributes = function(A, Q) {
        let B = [];
        for (let G = 0; G < A.attrs.length; G++) B.push(A.attrs[G].name);
        for (let G = 0; G < Q.length; G++)
            if (B.indexOf(Q[G].name) === -1) A.attrs.push(Q[G])
    };
    OI5.getFirstChild = function(A) {
        return A.childNodes[0]
    };
    OI5.getChildNodes = function(A) {
        return A.childNodes
    };
    OI5.getParentNode = function(A) {
        return A.parentNode
    };
    OI5.getAttrList = function(A) {
        return A.attrs
    };
    OI5.getTagName = function(A) {
        return A.tagName
    };
    OI5.getNamespaceURI = function(A) {
        return A.namespaceURI
    };
    OI5.getTextNodeContent = function(A) {
        return A.value
    };
    OI5.getCommentNodeContent = function(A) {
        return A.data
    };
    OI5.getDocumentTypeNodeName = function(A) {
        return A.name
    };
    OI5.getDocumentTypeNodePublicId = function(A) {
        return A.publicId
    };
    OI5.getDocumentTypeNodeSystemId = function(A) {
        return A.systemId
    };
    OI5.isTextNode = function(A) {
        return A.nodeName === "#text"
    };
    OI5.isCommentNode = function(A) {
        return A.nodeName === "#comment"
    };
    OI5.isDocumentTypeNode = function(A) {
        return A.nodeName === "#documentType"
    };
    OI5.isElementNode = function(A) {
        return !!A.tagName
    };
    OI5.setNodeSourceCodeLocation = function(A, Q) {
        A.sourceCodeLocation = Q
    };
    OI5.getNodeSourceCodeLocation = function(A) {
        return A.sourceCodeLocation
    }
});
var U10 = U((DjG, t32) => {
    t32.exports = function(Q, B) {
        return B = B || Object.create(null), [Q, B].reduce((G, Z) => {
            return Object.keys(Z).forEach((I) => {
                G[I] = Z[I]
            }), G
        }, Object.create(null))
    }
});
var $10 = U((IY5) => {
    var {
        DOCUMENT_MODE: lIA
    } = Ji(), Q72 = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"], BY5 = Q72.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]), GY5 = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"], B72 = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], ZY5 = B72.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);

    function e32(A) {
        let Q = A.indexOf('"') !== -1 ? "'" : '"';
        return Q + A + Q
    }

    function A72(A, Q) {
        for (let B = 0; B < Q.length; B++)
            if (A.indexOf(Q[B]) === 0) return !0;
        return !1
    }
    IY5.isConforming = function(A) {
        return A.name === "html" && A.publicId === null && (A.systemId === null || A.systemId === "about:legacy-compat")
    };
    IY5.getDocumentMode = function(A) {
        if (A.name !== "html") return lIA.QUIRKS;
        let Q = A.systemId;
        if (Q && Q.toLowerCase() === "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd") return lIA.QUIRKS;
        let B = A.publicId;
        if (B !== null) {
            if (B = B.toLowerCase(), GY5.indexOf(B) > -1) return lIA.QUIRKS;
            let G = Q === null ? BY5 : Q72;
            if (A72(B, G)) return lIA.QUIRKS;
            if (G = Q === null ? B72 : ZY5, A72(B, G)) return lIA.LIMITED_QUIRKS
        }
        return lIA.NO_QUIRKS
    };
    IY5.serializeContent = function(A, Q, B) {
        let G = "!DOCTYPE ";
        if (A) G += A;
        if (Q) G += " PUBLIC " + e32(Q);
        else if (B) G += " SYSTEM";
        if (B !== null) G += " " + e32(B);
        return G
    }
});
var Z72 = U((CY5) => {
    var w10 = oLA(),
        q10 = Ji(),
        j9 = q10.TAG_NAMES,
        jD = q10.NAMESPACES,
        G21 = q10.ATTRS,
        G72 = {
            TEXT_HTML: "text/html",
            APPLICATION_XML: "application/xhtml+xml"
        },
        XY5 = {
            attributename: "attributeName",
            attributetype: "attributeType",
            basefrequency: "baseFrequency",
            baseprofile: "baseProfile",
            calcmode: "calcMode",
            clippathunits: "clipPathUnits",
            diffuseconstant: "diffuseConstant",
            edgemode: "edgeMode",
            filterunits: "filterUnits",
            glyphref: "glyphRef",
            gradienttransform: "gradientTransform",
            gradientunits: "gradientUnits",
            kernelmatrix: "kernelMatrix",
            kernelunitlength: "kernelUnitLength",
            keypoints: "keyPoints",
            keysplines: "keySplines",
            keytimes: "keyTimes",
            lengthadjust: "lengthAdjust",
            limitingconeangle: "limitingConeAngle",
            markerheight: "markerHeight",
            markerunits: "markerUnits",
            markerwidth: "markerWidth",
            maskcontentunits: "maskContentUnits",
            maskunits: "maskUnits",
            numoctaves: "numOctaves",
            pathlength: "pathLength",
            patterncontentunits: "patternContentUnits",
            patterntransform: "patternTransform",
            patternunits: "patternUnits",
            pointsatx: "pointsAtX",
            pointsaty: "pointsAtY",
            pointsatz: "pointsAtZ",
            preservealpha: "preserveAlpha",
            preserveaspectratio: "preserveAspectRatio",
            primitiveunits: "primitiveUnits",
            refx: "refX",
            refy: "refY",
            repeatcount: "repeatCount",
            repeatdur: "repeatDur",
            requiredextensions: "requiredExtensions",
            requiredfeatures: "requiredFeatures",
            specularconstant: "specularConstant",
            specularexponent: "specularExponent",
            spreadmethod: "spreadMethod",
            startoffset: "startOffset",
            stddeviation: "stdDeviation",
            stitchtiles: "stitchTiles",
            surfacescale: "surfaceScale",
            systemlanguage: "systemLanguage",
            tablevalues: "tableValues",
            targetx: "targetX",
            targety: "targetY",
            textlength: "textLength",
            viewbox: "viewBox",
            viewtarget: "viewTarget",
            xchannelselector: "xChannelSelector",
            ychannelselector: "yChannelSelector",
            zoomandpan: "zoomAndPan"
        },
        FY5 = {
            "xlink:actuate": {
                prefix: "xlink",
                name: "actuate",
                namespace: jD.XLINK
            },
            "xlink:arcrole": {
                prefix: "xlink",
                name: "arcrole",
                namespace: jD.XLINK
            },
            "xlink:href": {
                prefix: "xlink",
                name: "href",
                namespace: jD.XLINK
            },
            "xlink:role": {
                prefix: "xlink",
                name: "role",
                namespace: jD.XLINK
            },
            "xlink:show": {
                prefix: "xlink",
                name: "show",
                namespace: jD.XLINK
            },
            "xlink:title": {
                prefix: "xlink",
                name: "title",
                namespace: jD.XLINK
            },
            "xlink:type": {
                prefix: "xlink",
                name: "type",
                namespace: jD.XLINK
            },
            "xml:base": {
                prefix: "xml",
                name: "base",
                namespace: jD.XML
            },
            "xml:lang": {
                prefix: "xml",
                name: "lang",
                namespace: jD.XML
            },
            "xml:space": {
                prefix: "xml",
                name: "space",
                namespace: jD.XML
            },
            xmlns: {
                prefix: "",
                name: "xmlns",
                namespace: jD.XMLNS
            },
            "xmlns:xlink": {
                prefix: "xmlns",
                name: "xlink",
                namespace: jD.XMLNS
            }
        },
        VY5 = CY5.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
            altglyph: "altGlyph",
            altglyphdef: "altGlyphDef",
            altglyphitem: "altGlyphItem",
            animatecolor: "animateColor",
            animatemotion: "animateMotion",
            animatetransform: "animateTransform",
            clippath: "clipPath",
            feblend: "feBlend",
            fecolormatrix: "feColorMatrix",
            fecomponenttransfer: "feComponentTransfer",
            fecomposite: "feComposite",
            feconvolvematrix: "feConvolveMatrix",
            fediffuselighting: "feDiffuseLighting",
            fedisplacementmap: "feDisplacementMap",
            fedistantlight: "feDistantLight",
            feflood: "feFlood",
            fefunca: "feFuncA",
            fefuncb: "feFuncB",
            fefuncg: "feFuncG",
            fefuncr: "feFuncR",
            fegaussianblur: "feGaussianBlur",
            feimage: "feImage",
            femerge: "feMerge",
            femergenode: "feMergeNode",
            femorphology: "feMorphology",
            feoffset: "feOffset",
            fepointlight: "fePointLight",
            fespecularlighting: "feSpecularLighting",
            fespotlight: "feSpotLight",
            fetile: "feTile",
            feturbulence: "feTurbulence",
            foreignobject: "foreignObject",
            glyphref: "glyphRef",
            lineargradient: "linearGradient",
            radialgradient: "radialGradient",
            textpath: "textPath"
        },
        KY5 = {
            [j9.B]: !0,
            [j9.BIG]: !0,
            [j9.BLOCKQUOTE]: !0,
            [j9.BODY]: !0,
            [j9.BR]: !0,
            [j9.CENTER]: !0,
            [j9.CODE]: !0,
            [j9.DD]: !0,
            [j9.DIV]: !0,
            [j9.DL]: !0,
            [j9.DT]: !0,
            [j9.EM]: !0,
            [j9.EMBED]: !0,
            [j9.H1]: !0,
            [j9.H2]: !0,
            [j9.H3]: !0,
            [j9.H4]: !0,
            [j9.H5]: !0,
            [j9.H6]: !0,
            [j9.HEAD]: !0,
            [j9.HR]: !0,
            [j9.I]: !0,
            [j9.IMG]: !0,
            [j9.LI]: !0,
            [j9.LISTING]: !0,
            [j9.MENU]: !0,
            [j9.META]: !0,
            [j9.NOBR]: !0,
            [j9.OL]: !0,
            [j9.P]: !0,
            [j9.PRE]: !0,
            [j9.RUBY]: !0,
            [j9.S]: !0,
            [j9.SMALL]: !0,
            [j9.SPAN]: !0,
            [j9.STRONG]: !0,
            [j9.STRIKE]: !0,
            [j9.SUB]: !0,
            [j9.SUP]: !0,
            [j9.TABLE]: !0,
            [j9.TT]: !0,
            [j9.U]: !0,
            [j9.UL]: !0,
            [j9.VAR]: !0
        };
    CY5.causesExit = function(A) {
        let Q = A.tagName;
        return Q === j9.FONT && (w10.getTokenAttr(A, G21.COLOR) !== null || w10.getTokenAttr(A, G21.SIZE) !== null || w10.getTokenAttr(A, G21.FACE) !== null) ? !0 : KY5[Q]
    };
    CY5.adjustTokenMathMLAttrs = function(A) {
        for (let Q = 0; Q < A.attrs.length; Q++)
            if (A.attrs[Q].name === "definitionurl") {
                A.attrs[Q].name = "definitionURL";
                break
            }
    };
    CY5.adjustTokenSVGAttrs = function(A) {
        for (let Q = 0; Q < A.attrs.length; Q++) {
            let B = XY5[A.attrs[Q].name];
            if (B) A.attrs[Q].name = B
        }
    };
    CY5.adjustTokenXMLAttrs = function(A) {
        for (let Q = 0; Q < A.attrs.length; Q++) {
            let B = FY5[A.attrs[Q].name];
            if (B) A.attrs[Q].prefix = B.prefix, A.attrs[Q].name = B.name, A.attrs[Q].namespace = B.namespace
        }
    };
    CY5.adjustTokenSVGTagName = function(A) {
        let Q = VY5[A.tagName];
        if (Q) A.tagName = Q
    };

    function DY5(A, Q) {
        return Q === jD.MATHML && (A === j9.MI || A === j9.MO || A === j9.MN || A === j9.MS || A === j9.MTEXT)
    }

    function HY5(A, Q, B) {
        if (Q === jD.MATHML && A === j9.ANNOTATION_XML) {
            for (let G = 0; G < B.length; G++)
                if (B[G].name === G21.ENCODING) {
                    let Z = B[G].value.toLowerCase();
                    return Z === G72.TEXT_HTML || Z === G72.APPLICATION_XML
                }
        }
        return Q === jD.SVG && (A === j9.FOREIGN_OBJECT || A === j9.DESC || A === j9.TITLE)
    }
    CY5.isIntegrationPoint = function(A, Q, B, G) {
        if ((!G || G === jD.HTML) && HY5(A, Q, B)) return !0;
        if ((!G || G === jD.MATHML) && DY5(A, Q)) return !0;
        return !1
    }
});