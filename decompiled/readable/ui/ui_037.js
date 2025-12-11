/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_037.js
 * 处理时间: 2025-12-09T03:41:39.419Z
 * 变量映射: 4 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 37/53
 * Lines: 286986 - 288484 (1499 lines)
 * Original file: cli.js
 */

        if (B === FA.HTML) lU(A, Q);
        else if (B === FA.NOFRAMES) rV(A, Q)
    }

    function GW5(A, Q) {
        Q.chars = TY5.REPLACEMENT_CHARACTER, A._insertCharacters(Q)
    }

    function ZW5(A, Q) {
        A._insertCharacters(Q), A.framesetOk = !1
    }

    function IW5(A, Q) {
        if (Sk.causesExit(Q) && !A.fragmentContext) {
            while (A.treeAdapter.getNamespaceURI(A.openElements.current) !== U2.HTML && !A._isIntegrationPoint(A.openElements.current)) A.openElements.pop();
            A._processToken(Q)
        } else {
            let B = A._getAdjustedCurrentElement(),
                G = A.treeAdapter.getNamespaceURI(B);
            if (G === U2.MATHML) Sk.adjustTokenMathMLAttrs(Q);
            else if (G === U2.SVG) Sk.adjustTokenSVGTagName(Q), Sk.adjustTokenSVGAttrs(Q);
            if (Sk.adjustTokenXMLAttrs(Q), Q.selfClosing) A._appendElement(Q, G);
            else A._insertElement(Q, G);
            Q.ackSelfClosing = !0
        }
    }

    function YW5(A, Q) {
        for (let B = A.openElements.stackTop; B > 0; B--) {
            let G = A.openElements.items[B];
            if (A.treeAdapter.getNamespaceURI(G) === U2.HTML) {
                A._processToken(Q);
                break
            }
            if (A.treeAdapter.getTagName(G).toLowerCase() === Q.tagName) {
                A.openElements.popUntilElementPopped(G);
                break
            }
        }
    }
});
var R72 = moduleWrapper((UjG, O72) => {
    var JW5 = z10(),
        WW5 = U10(),
        XW5 = $10(),
        M72 = Ji(),
        WZ = M72.TAG_NAMES,
        X21 = M72.NAMESPACES,
        FW5 = {
            treeAdapter: JW5
        },
        VW5 = /&/g,
        KW5 = /\u00a0/g,
        DW5 = /"/g,
        HW5 = /</g,
        CW5 = />/g;
    class YMA {
        constructor(A, Q) {
            this.options = WW5(FW5, Q), this.treeAdapter = this.options.treeAdapter, this.html = "", this.startNode = A
        }
        serialize() {
            return this._serializeChildNodes(this.startNode), this.html
        }
        _serializeChildNodes(A) {
            let Q = this.treeAdapter.getChildNodes(A);
            if (Q)
                for (let B = 0, G = Q.length; B < G; B++) {
                    let Z = Q[B];
                    if (this.treeAdapter.isElementNode(Z)) this._serializeElement(Z);
                    else if (this.treeAdapter.isTextNode(Z)) this._serializeTextNode(Z);
                    else if (this.treeAdapter.isCommentNode(Z)) this._serializeCommentNode(Z);
                    else if (this.treeAdapter.isDocumentTypeNode(Z)) this._serializeDocumentTypeNode(Z)
                }
        }
        _serializeElement(A) {
            let Q = this.treeAdapter.getTagName(A),
                B = this.treeAdapter.getNamespaceURI(A);
            if (this.html += "<" + Q, this._serializeAttributes(A), this.html += ">", Q !== WZ.AREA && Q !== WZ.BASE && Q !== WZ.BASEFONT && Q !== WZ.BGSOUND && Q !== WZ.BR && Q !== WZ.COL && Q !== WZ.EMBED && Q !== WZ.FRAME && Q !== WZ.HR && Q !== WZ.IMG && Q !== WZ.INPUT && Q !== WZ.KEYGEN && Q !== WZ.LINK && Q !== WZ.META && Q !== WZ.PARAM && Q !== WZ.SOURCE && Q !== WZ.TRACK && Q !== WZ.WBR) {
                let G = Q === WZ.TEMPLATE && B === X21.HTML ? this.treeAdapter.getTemplateContent(A) : A;
                this._serializeChildNodes(G), this.html += "</" + Q + ">"
            }
        }
        _serializeAttributes(A) {
            let Q = this.treeAdapter.getAttrList(A);
            for (let B = 0, G = Q.length; B < G; B++) {
                let Z = Q[B],
                    I = YMA.escapeString(Z.value, !0);
                if (this.html += " ", !Z.namespace) this.html += Z.name;
                else if (Z.namespace === X21.XML) this.html += "xml:" + Z.name;
                else if (Z.namespace === X21.XMLNS) {
                    if (Z.name !== "xmlns") this.html += "xmlns:";
                    this.html += Z.name
                } else if (Z.namespace === X21.XLINK) this.html += "xlink:" + Z.name;
                else this.html += Z.prefix + ":" + Z.name;
                this.html += '="' + I + '"'
            }
        }
        _serializeTextNode(A) {
            let Q = this.treeAdapter.getTextNodeContent(A),
                B = this.treeAdapter.getParentNode(A),
                G = void 0;
            if (B && this.treeAdapter.isElementNode(B)) G = this.treeAdapter.getTagName(B);
            if (G === WZ.STYLE || G === WZ.SCRIPT || G === WZ.XMP || G === WZ.IFRAME || G === WZ.NOEMBED || G === WZ.NOFRAMES || G === WZ.PLAINTEXT || G === WZ.NOSCRIPT) this.html += Q;
            else this.html += YMA.escapeString(Q, !1)
        }
        _serializeCommentNode(A) {
            this.html += "<!--" + this.treeAdapter.getCommentNodeContent(A) + "-->"
        }
        _serializeDocumentTypeNode(A) {
            let Q = this.treeAdapter.getDocumentTypeNodeName(A);
            this.html += "<" + XW5.serializeContent(Q, null, null) + ">"
        }
    }
    YMA.escapeString = function(A, Q) {
        if (A = A.replace(VW5, "&amp;").replace(KW5, "&nbsp;"), Q) A = A.replace(DW5, "&quot;");
        else A = A.replace(HW5, "&lt;").replace(CW5, "&gt;");
        return A
    };
    O72.exports = YMA
});
var P72 = moduleWrapper((zW5) => {
    var T72 = L72(),
        EW5 = R72();
    zW5.parse = function(Q, B) {
        return new T72(B).parse(Q)
    };
    zW5.parseFragment = function(Q, B, G) {
        if (typeof Q === "string") G = B, B = Q, Q = null;
        return new T72(G).parseFragment(B, Q)
    };
    zW5.serialize = function(A, Q) {
        return new EW5(A, Q).serialize()
    }
});
var R10 = moduleWrapper((qW5) => {
    var O10 = qW5.NAMESPACES = {
        HTML: "http://www.w3.org/1999/xhtml",
        MATHML: "http://www.w3.org/1998/Math/MathML",
        SVG: "http://www.w3.org/2000/svg",
        XLINK: "http://www.w3.org/1999/xlink",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/"
    };
    qW5.ATTRS = {
        TYPE: "type",
        ACTION: "action",
        ENCODING: "encoding",
        PROMPT: "prompt",
        NAME: "name",
        COLOR: "color",
        FACE: "face",
        SIZE: "size"
    };
    qW5.DOCUMENT_MODE = {
        NO_QUIRKS: "no-quirks",
        QUIRKS: "quirks",
        LIMITED_QUIRKS: "limited-quirks"
    };
    var bQ = qW5.TAG_NAMES = {
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
        getProviderIdentifier: "tr",
        TRACK: "track",
        TT: "tt",
        moduleWrapper: "u",
        UL: "ul",
        SVG: "svg",
        VAR: "var",
        WBR: "wbr",
        XMP: "xmp"
    };
    qW5.SPECIAL_ELEMENTS = {
        [O10.HTML]: {
            [bQ.ADDRESS]: !0,
            [bQ.APPLET]: !0,
            [bQ.AREA]: !0,
            [bQ.ARTICLE]: !0,
            [bQ.ASIDE]: !0,
            [bQ.BASE]: !0,
            [bQ.BASEFONT]: !0,
            [bQ.BGSOUND]: !0,
            [bQ.BLOCKQUOTE]: !0,
            [bQ.BODY]: !0,
            [bQ.BR]: !0,
            [bQ.BUTTON]: !0,
            [bQ.CAPTION]: !0,
            [bQ.CENTER]: !0,
            [bQ.COL]: !0,
            [bQ.COLGROUP]: !0,
            [bQ.DD]: !0,
            [bQ.DETAILS]: !0,
            [bQ.DIR]: !0,
            [bQ.DIV]: !0,
            [bQ.DL]: !0,
            [bQ.DT]: !0,
            [bQ.EMBED]: !0,
            [bQ.FIELDSET]: !0,
            [bQ.FIGCAPTION]: !0,
            [bQ.FIGURE]: !0,
            [bQ.FOOTER]: !0,
            [bQ.FORM]: !0,
            [bQ.FRAME]: !0,
            [bQ.FRAMESET]: !0,
            [bQ.H1]: !0,
            [bQ.H2]: !0,
            [bQ.H3]: !0,
            [bQ.H4]: !0,
            [bQ.H5]: !0,
            [bQ.H6]: !0,
            [bQ.HEAD]: !0,
            [bQ.HEADER]: !0,
            [bQ.HGROUP]: !0,
            [bQ.HR]: !0,
            [bQ.HTML]: !0,
            [bQ.IFRAME]: !0,
            [bQ.IMG]: !0,
            [bQ.INPUT]: !0,
            [bQ.LI]: !0,
            [bQ.LINK]: !0,
            [bQ.LISTING]: !0,
            [bQ.MAIN]: !0,
            [bQ.MARQUEE]: !0,
            [bQ.MENU]: !0,
            [bQ.META]: !0,
            [bQ.NAV]: !0,
            [bQ.NOEMBED]: !0,
            [bQ.NOFRAMES]: !0,
            [bQ.NOSCRIPT]: !0,
            [bQ.OBJECT]: !0,
            [bQ.OL]: !0,
            [bQ.P]: !0,
            [bQ.PARAM]: !0,
            [bQ.PLAINTEXT]: !0,
            [bQ.PRE]: !0,
            [bQ.SCRIPT]: !0,
            [bQ.SECTION]: !0,
            [bQ.SELECT]: !0,
            [bQ.SOURCE]: !0,
            [bQ.STYLE]: !0,
            [bQ.SUMMARY]: !0,
            [bQ.TABLE]: !0,
            [bQ.TBODY]: !0,
            [bQ.TD]: !0,
            [bQ.TEMPLATE]: !0,
            [bQ.TEXTAREA]: !0,
            [bQ.TFOOT]: !0,
            [bQ.TH]: !0,
            [bQ.THEAD]: !0,
            [bQ.TITLE]: !0,
            [bQ.getProviderIdentifier]: !0,
            [bQ.TRACK]: !0,
            [bQ.UL]: !0,
            [bQ.WBR]: !0,
            [bQ.XMP]: !0
        },
        [O10.MATHML]: {
            [bQ.MI]: !0,
            [bQ.MO]: !0,
            [bQ.MN]: !0,
            [bQ.MS]: !0,
            [bQ.MTEXT]: !0,
            [bQ.ANNOTATION_XML]: !0
        },
        [O10.SVG]: {
            [bQ.TITLE]: !0,
            [bQ.FOREIGN_OBJECT]: !0,
            [bQ.DESC]: !0
        }
    }
});
var y72 = moduleWrapper((PW5) => {
    var {
        DOCUMENT_MODE: aIA
    } = R10(), _72 = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"], OW5 = _72.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]), RW5 = ["-//w3o//dtd w3 html strict 3.0//AGENT_OUTPUT_TOOL_NAME//", "-/w3c/dtd html 4.0 transitional/AGENT_OUTPUT_TOOL_NAME", "html"], k72 = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], TW5 = k72.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);

    function j72(A) {
        let Q = A.indexOf('"') !== -1 ? "'" : '"';
        return Q + A + Q
    }

    function S72(A, Q) {
        for (let B = 0; B < Q.length; B++)
            if (A.indexOf(Q[B]) === 0) return !0;
        return !1
    }
    PW5.isConforming = function(A) {
        return A.name === "html" && A.publicId === null && (A.systemId === null || A.systemId === "about:legacy-compat")
    };
    PW5.getDocumentMode = function(A) {
        if (A.name !== "html") return aIA.QUIRKS;
        let Q = A.systemId;
        if (Q && Q.toLowerCase() === "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd") return aIA.QUIRKS;
        let B = A.publicId;
        if (B !== null) {
            if (B = B.toLowerCase(), RW5.indexOf(B) > -1) return aIA.QUIRKS;
            let G = Q === null ? OW5 : _72;
            if (S72(B, G)) return aIA.QUIRKS;
            if (G = Q === null ? k72 : TW5, S72(B, G)) return aIA.LIMITED_QUIRKS
        }
        return aIA.NO_QUIRKS
    };
    PW5.serializeContent = function(A, Q, B) {
        let G = "!DOCTYPE ";
        if (A) G += A;
        if (Q) G += " PUBLIC " + j72(Q);
        else if (B) G += " SYSTEM";
        if (B !== null) G += " " + j72(B);
        return G
    }
});
var f72 = moduleWrapper((vW5) => {
    var kW5 = y72(),
        {
            DOCUMENT_MODE: yW5
        } = R10(),
        x72 = {
            element: 1,
            text: 3,
            cdata: 4,
            comment: 8
        },
        v72 = {
            tagName: "name",
            childNodes: "children",
            parentNode: "parent",
            previousSibling: "prev",
            nextSibling: "next",
            nodeValue: "data"
        };
    class Fi {
        constructor(A) {
            for (let Q of Object.keys(A)) this[Q] = A[Q]
        }
        get firstChild() {
            let A = this.children;
            return A && A[0] || null
        }
        get lastChild() {
            let A = this.children;
            return A && A[A.length - 1] || null
        }
        get nodeType() {
            return x72[this.type] || x72.element
        }
    }
    Object.keys(v72).forEach((A) => {
        let Q = v72[A];
        Object.defineProperty(Fi.prototype, A, {
            get: function() {
                return this[Q] || null
            },
            set: function(B) {
                return this[Q] = B, B
            }
        })
    });
    vW5.createDocument = function() {
        return new Fi({
            type: "root",
            name: "root",
            parent: null,
            prev: null,
            next: null,
            children: [],
            "x-mode": yW5.NO_QUIRKS
        })
    };
    vW5.createDocumentFragment = function() {
        return new Fi({
            type: "root",
            name: "root",
            parent: null,
            prev: null,
            next: null,
            children: []
        })
    };
    vW5.createElement = function(A, Q, B) {
        let G = Object.create(null),
            Z = Object.create(null),
            I = Object.create(null);
        for (let Y = 0; Y < B.length; Y++) {
            let J = B[Y].name;
            G[J] = B[Y].value, Z[J] = B[Y].namespace, I[J] = B[Y].prefix
        }
        return new Fi({
            type: A === "script" || A === "style" ? A : "tag",
            name: A,
            namespace: Q,
            attribs: G,
            "x-attribsNamespace": Z,
            "x-attribsPrefix": I,
            children: [],
            parent: null,
            prev: null,
            next: null
        })
    };
    vW5.createCommentNode = function(A) {
        return new Fi({
            type: "comment",
            data: A,
            parent: null,
            prev: null,
            next: null
        })
    };
    var b72 = function(A) {
            return new Fi({
                type: "text",
                data: A,
                parent: null,
                prev: null,
                next: null
            })
        },
        T10 = vW5.appendChild = function(A, Q) {
            let B = A.children[A.children.length - 1];
            if (B) B.next = Q, Q.prev = B;
            A.children.push(Q), Q.parent = A
        },
        xW5 = vW5.insertBefore = function(A, Q, B) {
            let G = A.children.indexOf(B),
                Z = B.prev;
            if (Z) Z.next = Q, Q.prev = Z;
            B.prev = Q, Q.next = B, A.children.splice(G, 0, Q), Q.parent = A
        };
    vW5.setTemplateContent = function(A, Q) {
        T10(A, Q)
    };
    vW5.getTemplateContent = function(A) {
        return A.children[0]
    };
    vW5.setDocumentType = function(A, Q, B, G) {
        let Z = kW5.serializeContent(Q, B, G),
            I = null;
        for (let Y = 0; Y < A.children.length; Y++)
            if (A.children[Y].type === "directive" && A.children[Y].name === "!doctype") {
                I = A.children[Y];
                break
            } if (I) I.data = Z, I["x-name"] = Q, I["x-publicId"] = B, I["x-systemId"] = G;
        else T10(A, new Fi({
            type: "directive",
            name: "!doctype",
            data: Z,
            "x-name": Q,
            "x-publicId": B,
            "x-systemId": G
        }))
    };
    vW5.setDocumentMode = function(A, Q) {
        A["x-mode"] = Q
    };
    vW5.getDocumentMode = function(A) {
        return A["x-mode"]
    };
    vW5.detachNode = function(A) {
        if (A.parent) {
            let Q = A.parent.children.indexOf(A),
                B = A.prev,
                G = A.next;
            if (A.prev = null, A.next = null, B) B.next = G;
            if (G) G.prev = B;
            A.parent.children.splice(Q, 1), A.parent = null
        }
    };
    vW5.insertText = function(A, Q) {
        let B = A.children[A.children.length - 1];
        if (B && B.type === "text") B.data += Q;
        else T10(A, b72(Q))
    };
    vW5.insertTextBefore = function(A, Q, B) {
        let G = A.children[A.children.indexOf(B) - 1];
        if (G && G.type === "text") G.data += Q;
        else xW5(A, b72(Q), B)
    };
    vW5.adoptAttributes = function(A, Q) {
        for (let B = 0; B < Q.length; B++) {
            let G = Q[B].name;
            if (typeof A.attribs[G] > "u") A.attribs[G] = Q[B].value, A["x-attribsNamespace"][G] = Q[B].namespace, A["x-attribsPrefix"][G] = Q[B].prefix
        }
    };
    vW5.getFirstChild = function(A) {
        return A.children[0]
    };
    vW5.getChildNodes = function(A) {
        return A.children
    };
    vW5.getParentNode = function(A) {
        return A.parent
    };
    vW5.getAttrList = function(A) {
        let Q = [];
        for (let B in A.attribs) Q.push({
            name: B,
            value: A.attribs[B],
            namespace: A["x-attribsNamespace"][B],
            prefix: A["x-attribsPrefix"][B]
        });
        return Q
    };
    vW5.getTagName = function(A) {
        return A.name
    };
    vW5.getNamespaceURI = function(A) {
        return A.namespace
    };
    vW5.getTextNodeContent = function(A) {
        return A.data
    };
    vW5.getCommentNodeContent = function(A) {
        return A.data
    };
    vW5.getDocumentTypeNodeName = function(A) {
        return A["x-name"]
    };
    vW5.getDocumentTypeNodePublicId = function(A) {
        return A["x-publicId"]
    };
    vW5.getDocumentTypeNodeSystemId = function(A) {
        return A["x-systemId"]
    };
    vW5.isTextNode = function(A) {
        return A.type === "text"
    };
    vW5.isCommentNode = function(A) {
        return A.type === "comment"
    };
    vW5.isDocumentTypeNode = function(A) {
        return A.type === "directive" && A.name === "!doctype"
    };
    vW5.isElementNode = function(A) {
        return !!A.attribs
    };
    vW5.setNodeSourceCodeLocation = function(A, Q) {
        A.sourceCodeLocation = Q
    };
    vW5.getNodeSourceCodeLocation = function(A) {
        return A.sourceCodeLocation
    };
    vW5.updateNodeSourceCodeLocation = function(A, Q) {
        A.sourceCodeLocation = Object.assign(A.sourceCodeLocation, Q)
    }
});
var c72 = moduleWrapper((TjG, d72) => {
    var h72 = (A, Q) => (...B) => {
            return `\x1B[TextComponent{A(...B)+Q}m`
        },
        g72 = (A, Q) => (...B) => {
            let G = A(...B);
            return `\x1B[TextComponent{38+Q};5;TextComponent{G}m`
        },
        u72 = (A, Q) => (...B) => {
            let G = A(...B);
            return `\x1B[TextComponent{38+Q};2;TextComponent{G[0]};TextComponent{G[1]};TextComponent{G[2]}m`
        },
        F21 = (A) => A,
        m72 = (A, Q, B) => [A, Q, B],
        sIA = (A, Q, B) => {
            Object.defineProperty(A, Q, {
                get: () => {
                    let G = B();
                    return Object.defineProperty(A, Q, {
                        value: G,
                        enumerable: !0,
                        configurable: !0
                    }), G
                },
                enumerable: !0,
                configurable: !0
            })
        },
        P10, rIA = (A, Q, B, G) => {
            if (P10 === void 0) P10 = Cd1();
            let Z = G ? 10 : 0,
                I = {};
            for (let [Y, J] of Object.entries(P10)) {
                let W = Y === "ansi16" ? "ansi" : Y;
                if (Y === Q) I[W] = A(B, Z);
                else if (typeof J === "object") I[W] = A(J[Q], Z)
            }
            return I
        };

    function DX5() {
        let A = new Map,
            Q = {
                modifier: {
                    reset: [0, 0],
                    bold: [1, 22],
                    dim: [2, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    hidden: [8, 28],
                    strikethrough: [9, 29]
                },
                color: {
                    black: [30, 39],
                    red: [31, 39],
                    green: [32, 39],
                    yellow: [33, 39],
                    blue: [34, 39],
                    magenta: [35, 39],
                    cyan: [36, 39],
                    white: [37, 39],
                    blackBright: [90, 39],
                    redBright: [91, 39],
                    greenBright: [92, 39],
                    yellowBright: [93, 39],
                    blueBright: [94, 39],
                    magentaBright: [95, 39],
                    cyanBright: [96, 39],
                    whiteBright: [97, 39]
                },
                bgColor: {
                    bgBlack: [40, 49],
                    bgRed: [41, 49],
                    bgGreen: [42, 49],
                    bgYellow: [43, 49],
                    bgBlue: [44, 49],
                    bgMagenta: [45, 49],
                    bgCyan: [46, 49],
                    bgWhite: [47, 49],
                    bgBlackBright: [100, 49],
                    bgRedBright: [101, 49],
                    bgGreenBright: [102, 49],
                    bgYellowBright: [103, 49],
                    bgBlueBright: [104, 49],
                    bgMagentaBright: [105, 49],
                    bgCyanBright: [106, 49],
                    bgWhiteBright: [107, 49]
                }
            };
        Q.color.gray = Q.color.blackBright, Q.bgColor.bgGray = Q.bgColor.bgBlackBright, Q.color.grey = Q.color.blackBright, Q.bgColor.bgGrey = Q.bgColor.bgBlackBright;
        for (let [B, G] of Object.entries(Q)) {
            for (let [Z, I] of Object.entries(G)) Q[Z] = {
                open: `\x1B[TextComponent{I[0]}m`,
                close: `\x1B[TextComponent{I[1]}m`
            }, G[Z] = Q[Z], A.set(I[0], I[1]);
            Object.defineProperty(Q, B, {
                value: G,
                enumerable: !1
            })
        }
        return Object.defineProperty(Q, "codes", {
            value: A,
            enumerable: !1
        }), Q.color.close = "\x1B[39m", Q.bgColor.close = "\x1B[49m", sIA(Q.color, "ansi", () => rIA(h72, "ansi16", F21, !1)), sIA(Q.color, "ansi256", () => rIA(g72, "ansi256", F21, !1)), sIA(Q.color, "ansi16m", () => rIA(u72, "rgb", m72, !1)), sIA(Q.bgColor, "ansi", () => rIA(h72, "ansi16", F21, !0)), sIA(Q.bgColor, "ansi256", () => rIA(g72, "ansi256", F21, !0)), sIA(Q.bgColor, "ansi16m", () => rIA(u72, "rgb", m72, !0)), Q
    }
    Object.defineProperty(d72, "exports", {
        enumerable: !0,
        get: DX5
    })
});
var i72 = moduleWrapper((PjG, l72) => {
    var HX5 = nodeRequire("os"),
        p72 = nodeRequire("tty"),
        rM = NVA(),
        {
            env: oV
        } = process,
        Vi;
    if (rM("no-color") || rM("no-colors") || rM("color=false") || rM("color=never")) Vi = 0;
    else if (rM("color") || rM("colors") || rM("color=true") || rM("color=always")) Vi = 1;
    if ("FORCE_COLOR" in oV)
        if (oV.FORCE_COLOR === "true") Vi = 1;
        else if (oV.FORCE_COLOR === "false") Vi = 0;
    else Vi = oV.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(oV.FORCE_COLOR, 10), 3);

    function j10(A) {
        if (A === 0) return !1;
        return {
            level: A,
            hasBasic: !0,
            has256: A >= 2,
            has16m: A >= 3
        }
    }

    function S10(A, Q) {
        if (Vi === 0) return 0;
        if (rM("color=16m") || rM("color=full") || rM("color=truecolor")) return 3;
        if (rM("color=256")) return 2;
        if (A && !Q && Vi === void 0) return 0;
        let B = Vi || 0;
        if (oV.TERM === "dumb") return B;
        if (process.platform === "win32") {
            let G = HX5.release().split(".");
            if (Number(G[0]) >= 10 && Number(G[2]) >= 10586) return Number(G[2]) >= 14931 ? 3 : 2;
            return 1
        }
        if ("CI" in oV) {
            if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((G) => (G in oV)) || oV.CI_NAME === "codeship") return 1;
            return B
        }
        if ("TEAMCITY_VERSION" in oV) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(oV.TEAMCITY_VERSION) ? 1 : 0;
        if (oV.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in oV) {
            let G = parseInt((oV.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (oV.TERM_PROGRAM) {
                case "iTerm.app":
                    return G >= 3 ? 3 : 2;
                case "Apple_Terminal":
                    return 2
            }
        }
        if (/-256(color)?TextComponent/i.test(oV.TERM)) return 2;
        if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(oV.TERM)) return 1;
        if ("COLORTERM" in oV) return 1;
        return B
    }

    function CX5(A) {
        let Q = S10(A, A && A.isTTY);
        return j10(Q)
    }
    l72.exports = {
        supportsColor: CX5,
        stdout: j10(S10(!0, p72.isatty(1))),
        stderr: j10(S10(!0, p72.isatty(2)))
    }
});
var a72 = moduleWrapper((jjG, n72) => {
    var EX5 = (A, Q, B) => {
            let G = A.indexOf(Q);
            if (G === -1) return A;
            let Z = Q.length,
                I = 0,
                Y = "";
            do Y += A.substr(I, G - I) + Q + B, I = G + Z, G = A.indexOf(Q, I); while (G !== -1);
            return Y += A.substr(I), Y
        },
        zX5 = (A, Q, B, G) => {
            let Z = 0,
                I = "";
            do {
                let Y = A[G - 1] === "\r";
                I += A.substr(Z, (Y ? G - 1 : G) - Z) + Q + (Y ? `\r
` : `
`) + B, Z = G + 1, G = A.indexOf(`
`, Z)
            } while (G !== -1);
            return I += A.substr(Z), I
        };
    n72.exports = {
        stringReplaceAll: EX5,
        stringEncaseCRLFWithFirstIndex: zX5
    }
});
var e72 = moduleWrapper((SjG, t72) => {
    var UX5 = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
        s72 = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
        $X5 = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
        wX5 = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
        qX5 = new Map([
            ["n", `
`],
            ["r", "\r"],
            ["t", "\t"],
            ["b", "\b"],
            ["f", "\f"],
            ["v", "\v"],
            ["0", "\x00"],
            ["\\", "\\"],
            ["e", "\x1B"],
            ["a", "\x07"]
        ]);

    function o72(A) {
        let Q = A[0] === "u",
            B = A[1] === "{";
        if (Q && !B && A.length === 5 || A[0] === "x" && A.length === 3) return String.fromCharCode(parseInt(A.slice(1), 16));
        if (Q && B) return String.fromCodePoint(parseInt(A.slice(2, -1), 16));
        return qX5.get(A) || A
    }

    function NX5(A, Q) {
        let B = [],
            G = Q.trim().split(/\s*,\s*/g),
            Z;
        for (let I of G) {
            let Y = Number(I);
            if (!Number.isNaN(Y)) B.push(Y);
            else if (Z = I.match($X5)) B.push(Z[2].replace(wX5, (J, W, X) => W ? o72(W) : X));
            else throw Error(`Invalid Chalk template style argument: TextComponent{I} (in style 'TextComponent{A}')`)
        }
        return B
    }

    function LX5(A) {
        s72.lastIndex = 0;
        let Q = [],
            B;
        while ((B = s72.exec(A)) !== null) {
            let G = B[1];
            if (B[2]) {
                let Z = NX5(G, B[2]);
                Q.push([G].concat(Z))
            } else Q.push([G])
        }
        return Q
    }

    function r72(A, Q) {
        let B = {};
        for (let Z of Q)
            for (let I of Z.styles) B[I[0]] = Z.inverse ? null : I.slice(1);
        let G = A;
        for (let [Z, I] of Object.entries(B)) {
            if (!Array.isArray(I)) continue;
            if (!(Z in G)) throw Error(`Unknown Chalk style: TextComponent{Z}`);
            G = I.length > 0 ? G[Z](...I) : G[Z]
        }
        return G
    }
    t72.exports = (A, Q) => {
        let B = [],
            G = [],
            Z = [];
        if (Q.replace(UX5, (I, Y, J, W, X, F) => {
                if (Y) Z.push(o72(Y));
                else if (W) {
                    let V = Z.join("");
                    Z = [], G.push(B.length === 0 ? V : r72(A, B)(V)), B.push({
                        inverse: J,
                        styles: LX5(W)
                    })
                } else if (X) {
                    if (B.length === 0) throw Error("Found extraneous } in Chalk template literal");
                    G.push(r72(A, B)(Z.join(""))), Z = [], B.pop()
                } else Z.push(F)
            }), G.push(Z.join("")), B.length > 0) {
            let I = `Chalk template literal is missing TextComponent{B.length} closing bracket${B.length===1?"":"s"} (\`}\`)`;
            throw Error(I)
        }
        return G.join("")
    }
});
var JG2 = moduleWrapper((_jG, YG2) => {
    var JMA = c72(),
        {
            stdout: k10,
            stderr: y10
        } = i72(),
        {
            stringReplaceAll: MX5,
            stringEncaseCRLFWithFirstIndex: OX5
        } = a72(),
        {
            isArray: V21
        } = Array,
        QG2 = ["ansi", "ansi", "ansi256", "ansi16m"],
        oIA = Object.create(null),
        RX5 = (A, Q = {}) => {
            if (Q.level && !(Number.isInteger(Q.level) && Q.level >= 0 && Q.level <= 3)) throw Error("The `level` option should be an integer from 0 to 3");
            let B = k10 ? k10.level : 0;
            A.level = Q.level === void 0 ? B : Q.level
        };
    class BG2 {
        constructor(A) {
            return GG2(A)
        }
    }
    var GG2 = (A) => {
        let Q = {};
        return RX5(Q, A), Q.template = (...B) => IG2(Q.template, ...B), Object.setPrototypeOf(Q, K21.prototype), Object.setPrototypeOf(Q.template, Q), Q.template.constructor = () => {
            throw Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")
        }, Q.template.Instance = BG2, Q.template
    };

    function K21(A) {
        return GG2(A)
    }
    for (let [A, Q] of Object.entries(JMA)) oIA[A] = {
        get() {
            let B = D21(this, x10(Q.open, Q.close, this._styler), this._isEmpty);
            return Object.defineProperty(this, A, {
                value: B
            }), B
        }
    };
    oIA.visible = {
        get() {
            let A = D21(this, this._styler, !0);
            return Object.defineProperty(this, "visible", {
                value: A
            }), A
        }
    };
    var ZG2 = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (let A of ZG2) oIA[A] = {
        get() {
            let {
                level: Q
            } = this;
            return function(...B) {
                let G = x10(JMA.color[QG2[Q]][A](...B), JMA.color.close, this._styler);
                return D21(this, G, this._isEmpty)
            }
        }
    };
    for (let A of ZG2) {
        let Q = "bg" + A[0].toUpperCase() + A.slice(1);
        oIA[Q] = {
            get() {
                let {
                    level: B
                } = this;
                return function(...G) {
                    let Z = x10(JMA.bgColor[QG2[B]][A](...G), JMA.bgColor.close, this._styler);
                    return D21(this, Z, this._isEmpty)
                }
            }
        }
    }
    var TX5 = Object.defineProperties(() => {}, {
            ...oIA,
            level: {
                enumerable: !0,
                get() {
                    return this._generator.level
                },
                set(A) {
                    this._generator.level = A
                }
            }
        }),
        x10 = (A, Q, B) => {
            let G, Z;
            if (B === void 0) G = A, Z = Q;
            else G = B.openAll + A, Z = Q + B.closeAll;
            return {
                open: A,
                close: Q,
                openAll: G,
                closeAll: Z,
                parent: B
            }
        },
        D21 = (A, Q, B) => {
            let G = (...Z) => {
                if (V21(Z[0]) && V21(Z[0].raw)) return AG2(G, IG2(G, ...Z));
                return AG2(G, Z.length === 1 ? "" + Z[0] : Z.join(" "))
            };
            return Object.setPrototypeOf(G, TX5), G._generator = A, G._styler = Q, G._isEmpty = B, G
        },
        AG2 = (A, Q) => {
            if (A.level <= 0 || !Q) return A._isEmpty ? "" : Q;
            let B = A._styler;
            if (B === void 0) return Q;
            let {
                openAll: G,
                closeAll: Z
            } = B;
            if (Q.indexOf("\x1B") !== -1)
                while (B !== void 0) Q = MX5(Q, B.close, B.open), B = B.parent;
            let I = Q.indexOf(`
`);
            if (I !== -1) Q = OX5(Q, Z, G, I);
            return G + Q + Z
        },
        _10, IG2 = (A, ...Q) => {
            let [B] = Q;
            if (!V21(B) || !V21(B.raw)) return Q.join(" ");
            let G = Q.slice(1),
                Z = [B.raw[0]];
            for (let I = 1; I < B.length; I++) Z.push(String(G[I - 1]).replace(/[{}\\]/g, "\\TextComponent&"), String(B.raw[I]));
            if (_10 === void 0) _10 = e72();
            return _10(A, Z.join(""))
        };
    Object.defineProperties(K21.prototype, oIA);
    var H21 = K21();
    H21.supportsColor = k10;
    H21.stderr = K21({
        level: y10 ? y10.level : 0
    });
    H21.stderr.supportsColor = y10;
    YG2.exports = H21
});
var v10 = moduleWrapper((V6) => {
    var PX5 = V6 && V6.__importDefault || function(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    };
    Object.defineProperty(V6, "__esModule", {
        value: !0
    });
    V6.parse = V6.stringify = V6.toJson = V6.fromJson = V6.DEFAULT_THEME = V6.plain = void 0;
    var vJ = PX5(JG2()),
        jX5 = function(A) {
            return A
        };
    V6.plain = jX5;
    V6.DEFAULT_THEME = {
        keyword: vJ.default.blue,
        built_in: vJ.default.cyan,
        type: vJ.default.cyan.dim,
        literal: vJ.default.blue,
        number: vJ.default.green,
        regexp: vJ.default.red,
        string: vJ.default.red,
        subst: V6.plain,
        symbol: V6.plain,
        class: vJ.default.blue,
        function: vJ.default.yellow,
        title: V6.plain,
        params: V6.plain,
        comment: vJ.default.green,
        doctag: vJ.default.green,
        meta: vJ.default.grey,
        "meta-keyword": V6.plain,
        "meta-string": V6.plain,
        section: V6.plain,
        tag: vJ.default.grey,
        name: vJ.default.blue,
        "builtin-name": V6.plain,
        attr: vJ.default.cyan,
        attribute: V6.plain,
        variable: V6.plain,
        bullet: V6.plain,
        code: V6.plain,
        emphasis: vJ.default.italic,
        strong: vJ.default.bold,
        formula: V6.plain,
        link: vJ.default.underline,
        quote: V6.plain,
        "selector-tag": V6.plain,
        "selector-id": V6.plain,
        "selector-class": V6.plain,
        "selector-attr": V6.plain,
        "selector-pseudo": V6.plain,
        "template-tag": V6.plain,
        "template-variable": V6.plain,
        addition: vJ.default.green,
        deletion: vJ.default.red,
        default: V6.plain
    };

    function WG2(A) {
        var Q = {};
        for (var B = 0, G = Object.keys(A); B < G.length; B++) {
            var Z = G[B],
                I = A[Z];
            if (Array.isArray(I)) Q[Z] = I.reduce(function(Y, J) {
                return J === "plain" ? V6.plain : Y[J]
            }, vJ.default);
            else Q[Z] = vJ.default[I]
        }
        return Q
    }
    V6.fromJson = WG2;

    function XG2(A) {
        var Q = {};
        for (var B = 0, G = Object.keys(Q); B < G.length; B++) {
            var Z = G[B],
                I = Q[Z];
            Q[Z] = I._styles
        }
        return Q
    }
    V6.toJson = XG2;

    function SX5(A) {
        return JSON.stringify(XG2(A))
    }
    V6.stringify = SX5;

    function _X5(A) {
        return WG2(JSON.parse(A))
    }
    V6.parse = _X5
});
var z21 = moduleWrapper((iX) => {
    var FG2 = iX && iX.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        kX5 = iX && iX.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        VG2 = iX && iX.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) FG2(Q, A, B)
            }
            return kX5(Q, A), Q
        },
        yX5 = iX && iX.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) FG2(Q, A, B)
        },
        xX5 = iX && iX.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        };
    Object.defineProperty(iX, "__esModule", {
        value: !0
    });
    iX.supportsLanguage = iX.listLanguages = iX.highlight = void 0;
    var E21 = VG2(tH1()),
        vX5 = VG2(P72()),
        bX5 = xX5(f72()),
        C21 = v10();

    function b10(A, Q, B) {
        if (Q === void 0) Q = {};
        switch (A.type) {
            case "text": {
                var G = A.data;
                if (B === void 0) return (Q.default || C21.DEFAULT_THEME.default || C21.plain)(G);
                return G
            }
            case "tag": {
                var Z = /hljs-(\w+)/.exec(A.attribs.class);
                if (Z) {
                    var I = Z[1],
                        Y = A.childNodes.map(function(J) {
                            return b10(J, Q, I)
                        }).join("");
                    return (Q[I] || C21.DEFAULT_THEME[I] || C21.plain)(Y)
                }
                return A.childNodes.map(function(J) {
                    return b10(J, Q)
                }).join("")
            }
        }
        throw Error("Invalid node type " + A.type)
    }

    function fX5(A, Q) {
        if (Q === void 0) Q = {};
        var B = vX5.parseFragment(A, {
            treeAdapter: bX5.default
        });
        return B.childNodes.map(function(G) {
            return b10(G, Q)
        }).join("")
    }

    function KG2(A, Q) {
        if (Q === void 0) Q = {};
        var B;
        if (Q.language) B = E21.highlight(A, {
            language: Q.language,
            ignoreIllegals: Q.ignoreIllegals
        }).value;
        else B = E21.highlightAuto(A, Q.languageSubset).value;
        return fX5(B, Q.theme)
    }
    iX.highlight = KG2;

    function hX5() {
        return E21.listLanguages()
    }
    iX.listLanguages = hX5;

    function gX5(A) {
        return !!E21.getLanguage(A)
    }
    iX.supportsLanguage = gX5;
    iX.default = KG2;
    yX5(v10(), iX)
});

function CG2(A) {
    if (!raA()) return A;
    let Q = oA.blue(A);
    return `TextComponent{DG2}TextComponent{A}TextComponent{HG2}TextComponent{Q}TextComponent{DG2}TextComponent{HG2}`
}
var DG2 = "\x1B]8;;",
    HG2 = "\x07";
var EG2 = lazyLoader(() => {
    J9();
    Pg1()
});
import {
    EOL as sH
} from "os";

function _D(A, Q) {
    return m7.lexer(XMA(A)).map((B) => fE(B, Q)).join("").trim()
}

function fE(A, Q, B = 0, G = null, Z = null) {
    switch (A.type) {
        case "blockquote":
            return oA.dim.italic((A.tokens ?? []).map((I) => fE(I, Q)).join(""));
        case "code":
            if (A.lang && WMA.supportsLanguage(A.lang)) return WMA.highlight(A.text, {
                language: A.lang
            }) + sH;
            else return g(`Language not supported while highlighting code, falling back to markdown: TextComponent{A.lang}`), WMA.highlight(A.text, {
                language: "markdown"
            }) + sH;
        case "codespan":
            return tQ("permission", Q)(A.text);
        case "em":
            return oA.italic((A.tokens ?? []).map((I) => fE(I, Q)).join(""));
        case "strong":
            return oA.bold((A.tokens ?? []).map((I) => fE(I, Q)).join(""));
        case "del":
            return oA.strikethrough((A.tokens ?? []).map((I) => fE(I, Q)).join(""));
        case "heading":
            switch (A.depth) {
                case 1:
                    return oA.bold.italic.underline((A.tokens ?? []).map((I) => fE(I, Q)).join("")) + sH + sH;
                case 2:
                    return oA.bold((A.tokens ?? []).map((I) => fE(I, Q)).join("")) + sH + sH;
                default:
                    return oA.bold.dim((A.tokens ?? []).map((I) => fE(I, Q)).join("")) + sH + sH
            }
        case "hr":
            return "---";
        case "image":
            return A.href;
        case "link": {
            if (A.href.startsWith("mailto:")) return A.href.replace(/^mailto:/, "");
            return CG2(A.href)
        }
        case "list":
            return A.items.map((I, Y) => fE(I, Q, B, A.ordered ? A.start + Y : null, A)).join("");
        case "list_item":
            return (A.tokens ?? []).map((I) => `TextComponent{"  ".repeat(B)}TextComponent{fE(I,Q,B+1,G,A)}`).join("");
        case "paragraph":
            return (A.tokens ?? []).map((I) => fE(I, Q)).join("") + sH;
        case "space":
            return sH;
        case "br":
            return sH;
        case "text":
            if (Z?.type === "list_item") return `TextComponent{G===null?"-":dX5(B,G)+"."} TextComponent{A.tokens?A.tokens.map((I)=>fE(I,Q,B,G,A)).join(""):A.text}TextComponent{sH}`;
            else return A.text;
        case "table": {
            let Y = function(X) {
                    return mY(X?.map((F) => fE(F, Q)).join("") ?? "")
                },
                I = A,
                J = I.header.map((X, F) => {
                    let V = Y(X.tokens).length;
                    for (let K of I.rows) {
                        let D = Y(K[F]?.tokens).length;
                        V = Math.max(V, D)
                    }
                    return Math.max(V, 3)
                }),
                W = "| ";
            return I.header.forEach((X, F) => {
                let V = X.tokens?.map((E) => fE(E, Q)).join("") ?? "",
                    K = Y(X.tokens),
                    D = J[F],
                    H = I.align?.[F],
                    C;
                if (H === "center") {
                    let E = D - K.length,
                        z = Math.floor(E / 2),
                        w = E - z;
                    C = " ".repeat(z) + V + " ".repeat(w)
                } else if (H === "right") {
                    let E = D - K.length;
                    C = " ".repeat(E) + V
                } else C = V + " ".repeat(D - K.length);
                W += C + " | "
            }), W = W.trimEnd() + sH, W += "|", J.forEach((X) => {
                let F = "-".repeat(X + 2);
                W += F + "|"
            }), W += sH, I.rows.forEach((X) => {
                W += "| ", X.forEach((F, V) => {
                    let K = F.tokens?.map((z) => fE(z, Q)).join("") ?? "",
                        D = Y(F.tokens),
                        H = J[V],
                        C = I.align?.[V],
                        E;
                    if (C === "center") {
                        let z = H - D.length,
                            w = Math.floor(z / 2),
                            N = z - w;
                        E = " ".repeat(w) + K + " ".repeat(N)
                    } else if (C === "right") {
                        let z = H - D.length;
                        E = " ".repeat(z) + K
                    } else E = K + " ".repeat(H - D.length);
                    W += E + " | "
                }), W = W.trimEnd() + sH
            }), W + sH
        }
    }
    return ""
}

function dX5(A, Q) {
    switch (A) {
        case 0:
        case 1:
            return Q.toString();
        case 2:
            return uX5[Q - 1];
        case 3:
            return mX5[Q - 1];
        default:
            return Q.toString()
    }
}
var WMA, uX5, mX5;
var Hh = lazyLoader(() => {
    J10();
    nQ();
    J9();
    D0();
    HT();
    hA();
    EG2();
    WMA = esmImport(z21(), 1);
    uX5 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az"], mX5 = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv", "xvi", "xvii", "xviii", "xix", "xx", "xxi", "xxii", "xxiii", "xxiv", "xxv", "xxvi", "xxvii", "xxviii", "xxix", "xxx", "xxxi", "xxxii", "xxxiii", "xxxiv", "xxxv", "xxxvi", "xxxvii", "xxxviii", "xxxix", "xl"]
});

function cX5(A) {
    if (!A.match(/<sandbox_violations>([\s\S]*?)<\/sandbox_violations>/)) return {
        cleanedStderr: A
    };
    return {
        cleanedStderr: a01(A).trim()
    }
}

function V1A({
    content: {
        stdout: A,
        stderr: Q,
        summary: B,
        isImage: G,
        returnCodeInterpretation: Z,
        backgroundTaskId: I
    },
    verbose: Y
}) {
    let [J] = $B(), {
        cleanedStderr: W
    } = cX5(Q);
    if (G) return rH.default.createElement(y0, {
        height: 1
    }, rH.default.createElement(TextComponent, {
        dimColor: !0
    }, "[Image data detected and sent to Claude]"));
    if (B) {
        if (!Y) return rH.default.createElement(j, {
            flexDirection: "column"
        }, rH.default.createElement(xU, {
            content: _D(B, J),
            verbose: !1
        }));
        return rH.default.createElement(j, {
            flexDirection: "column"
        }, rH.default.createElement(xU, {
            content: B,
            verbose: Y
        }), (A !== "" || W !== "") && rH.default.createElement(j, {
            flexDirection: "column",
            marginTop: 1
        }, rH.default.createElement(TextComponent, {
            bold: !0
        }, "=== Original Output ==="), A !== "" ? rH.default.createElement(xU, {
            content: A,
            verbose: Y
        }) : null, W !== "" ? rH.default.createElement(xU, {
            content: W,
            verbose: Y,
            isError: !0
        }) : null))
    }