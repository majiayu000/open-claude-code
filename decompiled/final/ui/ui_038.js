/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_038.js
 * 处理时间: 2025-12-09T03:41:39.429Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       (  2x) esmImport(module) - ESM import
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 38/53
 * Lines: 325928 - 327426 (1499 lines)
 * Original file: cli.js
 */

    LM2();
    uB = GA(VA(), 1), zP = GA(VA(), 1), MM2 = tOA(), OM2 = [...MM2, ...[...MM2].reverse()], Py5 = {
        words: ["Accomplishing", "Actioning", "Actualizing", "Baking", "Booping", "Brewing", "Calculating", "Cerebrating", "Channelling", "Churning", "Clauding", "Coalescing", "Cogitating", "Computing", "Combobulating", "Concocting", "Considering", "Contemplating", "Cooking", "Crafting", "Creating", "Crunching", "Deciphering", "Deliberating", "Determining", "Discombobulating", "Doing", "Effecting", "Elucidating", "Enchanting", "Envisioning", "Finagling", "Flibbertigibbeting", "Forging", "Forming", "Frolicking", "Generating", "Germinating", "Hatching", "Herding", "Honking", "Ideating", "Imagining", "Incubating", "Inferring", "Manifesting", "Marinating", "Meandering", "Moseying", "Mulling", "Mustering", "Musing", "Noodling", "Percolating", "Perusing", "Philosophising", "Pontificating", "Pondering", "Processing", "Puttering", "Puzzling", "Reticulating", "Ruminating", "Scheming", "Schlepping", "Shimmying", "Simmering", "Smooshing", "Spelunking", "Spinning", "Stewing", "Sussing", "Synthesizing", "Thinking", "Tinkering", "Transmuting", "Unfurling", "Unravelling", "Vibing", "Wandering", "Whirring", "Wibbling", "Working", "Wrangling"]
    }
});
var eOA = U((xy5) => {
    function ky5(A, Q, B) {
        if (B === void 0) B = Array.prototype;
        if (A && typeof B.find === "function") return B.find.call(A, Q);
        for (var G = 0; G < A.length; G++)
            if (Object.prototype.hasOwnProperty.call(A, G)) {
                var Z = A[G];
                if (Q.call(void 0, Z, G, A)) return Z
            }
    }

    function n40(A, Q) {
        if (Q === void 0) Q = Object;
        return Q && typeof Q.freeze === "function" ? Q.freeze(A) : A
    }

    function yy5(A, Q) {
        if (A === null || typeof A !== "object") throw TypeError("target is not an object");
        for (var B in Q)
            if (Object.prototype.hasOwnProperty.call(Q, B)) A[B] = Q[B];
        return A
    }
    var TM2 = n40({
            HTML: "text/html",
            isHTML: function(A) {
                return A === TM2.HTML
            },
            XML_APPLICATION: "application/xml",
            XML_TEXT: "text/xml",
            XML_XHTML_APPLICATION: "application/xhtml+xml",
            XML_SVG_IMAGE: "image/svg+xml"
        }),
        PM2 = n40({
            HTML: "http://www.w3.org/1999/xhtml",
            isHTML: function(A) {
                return A === PM2.HTML
            },
            SVG: "http://www.w3.org/2000/svg",
            XML: "http://www.w3.org/XML/1998/namespace",
            XMLNS: "http://www.w3.org/2000/xmlns/"
        });
    xy5.assign = yy5;
    xy5.find = ky5;
    xy5.freeze = n40;
    xy5.MIME_TYPE = TM2;
    xy5.NAMESPACE = PM2
});
var Z80 = U((ey5) => {
    var bM2 = eOA(),
        Wy = bM2.find,
        ARA = bM2.NAMESPACE;

    function uy5(A) {
        return A !== ""
    }

    function my5(A) {
        return A ? A.split(/[\t\n\f\r ]+/).filter(uy5) : []
    }

    function dy5(A, Q) {
        if (!A.hasOwnProperty(Q)) A[Q] = !0;
        return A
    }

    function jM2(A) {
        if (!A) return [];
        var Q = my5(A);
        return Object.keys(Q.reduce(dy5, {}))
    }

    function cy5(A) {
        return function(Q) {
            return A && A.indexOf(Q) !== -1
        }
    }

    function BRA(A, Q) {
        for (var B in A)
            if (Object.prototype.hasOwnProperty.call(A, B)) Q[B] = A[B]
    }

    function Q$(A, Q) {
        var B = A.prototype;
        if (!(B instanceof Q)) {
            let Z = function() {};
            var G = Z;
            Z.prototype = Q.prototype, Z = new Z, BRA(B, Z), A.prototype = B = Z
        }
        if (B.constructor != A) {
            if (typeof A != "function") console.error("unknown Class:" + A);
            B.constructor = A
        }
    }
    var B$ = {},
        UP = B$.ELEMENT_NODE = 1,
        MJA = B$.ATTRIBUTE_NODE = 2,
        g81 = B$.TEXT_NODE = 3,
        fM2 = B$.CDATA_SECTION_NODE = 4,
        hM2 = B$.ENTITY_REFERENCE_NODE = 5,
        py5 = B$.ENTITY_NODE = 6,
        gM2 = B$.PROCESSING_INSTRUCTION_NODE = 7,
        uM2 = B$.COMMENT_NODE = 8,
        mM2 = B$.DOCUMENT_NODE = 9,
        dM2 = B$.DOCUMENT_TYPE_NODE = 10,
        _h = B$.DOCUMENT_FRAGMENT_NODE = 11,
        ly5 = B$.NOTATION_NODE = 12,
        QC = {},
        WK = {},
        WiG = QC.INDEX_SIZE_ERR = (WK[1] = "Index size error", 1),
        XiG = QC.DOMSTRING_SIZE_ERR = (WK[2] = "DOMString size error", 2),
        A$ = QC.HIERARCHY_REQUEST_ERR = (WK[3] = "Hierarchy request error", 3),
        FiG = QC.WRONG_DOCUMENT_ERR = (WK[4] = "Wrong document", 4),
        ViG = QC.INVALID_CHARACTER_ERR = (WK[5] = "Invalid character", 5),
        KiG = QC.NO_DATA_ALLOWED_ERR = (WK[6] = "No data allowed", 6),
        DiG = QC.NO_MODIFICATION_ALLOWED_ERR = (WK[7] = "No modification allowed", 7),
        cM2 = QC.NOT_FOUND_ERR = (WK[8] = "Not found", 8),
        HiG = QC.NOT_SUPPORTED_ERR = (WK[9] = "Not supported", 9),
        SM2 = QC.INUSE_ATTRIBUTE_ERR = (WK[10] = "Attribute in use", 10),
        CiG = QC.INVALID_STATE_ERR = (WK[11] = "Invalid state", 11),
        EiG = QC.SYNTAX_ERR = (WK[12] = "Syntax error", 12),
        ziG = QC.INVALID_MODIFICATION_ERR = (WK[13] = "Invalid modification", 13),
        UiG = QC.NAMESPACE_ERR = (WK[14] = "Invalid namespace", 14),
        $iG = QC.INVALID_ACCESS_ERR = (WK[15] = "Invalid access", 15);

    function vW(A, Q) {
        if (Q instanceof Error) var B = Q;
        else if (B = this, Error.call(this, WK[A]), this.message = WK[A], Error.captureStackTrace) Error.captureStackTrace(this, vW);
        if (B.code = A, Q) this.message = this.message + ": " + Q;
        return B
    }
    vW.prototype = Error.prototype;
    BRA(QC, vW);

    function Sh() {}
    Sh.prototype = {
        length: 0,
        item: function(A) {
            return A >= 0 && A < this.length ? this[A] : null
        },
        toString: function(A, Q) {
            for (var B = [], G = 0; G < this.length; G++) LJA(this[G], B, A, Q);
            return B.join("")
        },
        filter: function(A) {
            return Array.prototype.filter.call(this, A)
        },
        indexOf: function(A) {
            return Array.prototype.indexOf.call(this, A)
        }
    };

    function OJA(A, Q) {
        this._node = A, this._refresh = Q, r40(this)
    }

    function r40(A) {
        var Q = A._node._inc || A._node.ownerDocument._inc;
        if (A._inc !== Q) {
            var B = A._refresh(A._node);
            if (QO2(A, "length", B.length), !A.$$length || B.length < A.$$length) {
                for (var G = B.length; G in A; G++)
                    if (Object.prototype.hasOwnProperty.call(A, G)) delete A[G]
            }
            BRA(B, A), A._inc = Q
        }
    }
    OJA.prototype.item = function(A) {
        return r40(this), this[A] || null
    };
    Q$(OJA, Sh);

    function u81() {}

    function pM2(A, Q) {
        var B = A.length;
        while (B--)
            if (A[B] === Q) return B
    }

    function _M2(A, Q, B, G) {
        if (G) Q[pM2(Q, G)] = B;
        else Q[Q.length++] = B;
        if (A) {
            B.ownerElement = A;
            var Z = A.ownerDocument;
            if (Z) G && nM2(Z, A, G), iy5(Z, A, B)
        }
    }

    function kM2(A, Q, B) {
        var G = pM2(Q, B);
        if (G >= 0) {
            var Z = Q.length - 1;
            while (G < Z) Q[G] = Q[++G];
            if (Q.length = Z, A) {
                var I = A.ownerDocument;
                if (I) nM2(I, A, B), B.ownerElement = null
            }
        } else throw new vW(cM2, Error(A.tagName + "@" + B))
    }
    u81.prototype = {
        length: 0,
        item: Sh.prototype.item,
        getNamedItem: function(A) {
            var Q = this.length;
            while (Q--) {
                var B = this[Q];
                if (B.nodeName == A) return B
            }
        },
        setNamedItem: function(A) {
            var Q = A.ownerElement;
            if (Q && Q != this._ownerElement) throw new vW(SM2);
            var B = this.getNamedItem(A.nodeName);
            return _M2(this._ownerElement, this, A, B), B
        },
        setNamedItemNS: function(A) {
            var Q = A.ownerElement,
                B;
            if (Q && Q != this._ownerElement) throw new vW(SM2);
            return B = this.getNamedItemNS(A.namespaceURI, A.localName), _M2(this._ownerElement, this, A, B), B
        },
        removeNamedItem: function(A) {
            var Q = this.getNamedItem(A);
            return kM2(this._ownerElement, this, Q), Q
        },
        removeNamedItemNS: function(A, Q) {
            var B = this.getNamedItemNS(A, Q);
            return kM2(this._ownerElement, this, B), B
        },
        getNamedItemNS: function(A, Q) {
            var B = this.length;
            while (B--) {
                var G = this[B];
                if (G.localName == Q && G.namespaceURI == A) return G
            }
            return null
        }
    };

    function lM2() {}
    lM2.prototype = {
        hasFeature: function(A, Q) {
            return !0
        },
        createDocument: function(A, Q, B) {
            var G = new GRA;
            if (G.implementation = this, G.childNodes = new Sh, G.doctype = B || null, B) G.appendChild(B);
            if (Q) {
                var Z = G.createElementNS(A, Q);
                G.appendChild(Z)
            }
            return G
        },
        createDocumentType: function(A, Q, B) {
            var G = new c81;
            return G.name = A, G.nodeName = A, G.publicId = Q || "", G.systemId = B || "", G
        }
    };

    function XG() {}
    XG.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function(A, Q) {
            return m81(this, A, Q)
        },
        replaceChild: function(A, Q) {
            if (m81(this, A, Q, sM2), Q) this.removeChild(Q)
        },
        removeChild: function(A) {
            return aM2(this, A)
        },
        appendChild: function(A) {
            return this.insertBefore(A, null)
        },
        hasChildNodes: function() {
            return this.firstChild != null
        },
        cloneNode: function(A) {
            return s40(this.ownerDocument || this, this, A)
        },
        normalize: function() {
            var A = this.firstChild;
            while (A) {
                var Q = A.nextSibling;
                if (Q && Q.nodeType == g81 && A.nodeType == g81) this.removeChild(Q), A.appendData(Q.data);
                else A.normalize(), A = Q
            }
        },
        isSupported: function(A, Q) {
            return this.ownerDocument.implementation.hasFeature(A, Q)
        },
        hasAttributes: function() {
            return this.attributes.length > 0
        },
        lookupPrefix: function(A) {
            var Q = this;
            while (Q) {
                var B = Q._nsMap;
                if (B) {
                    for (var G in B)
                        if (Object.prototype.hasOwnProperty.call(B, G) && B[G] === A) return G
                }
                Q = Q.nodeType == MJA ? Q.ownerDocument : Q.parentNode
            }
            return null
        },
        lookupNamespaceURI: function(A) {
            var Q = this;
            while (Q) {
                var B = Q._nsMap;
                if (B) {
                    if (Object.prototype.hasOwnProperty.call(B, A)) return B[A]
                }
                Q = Q.nodeType == MJA ? Q.ownerDocument : Q.parentNode
            }
            return null
        },
        isDefaultNamespace: function(A) {
            var Q = this.lookupPrefix(A);
            return Q == null
        }
    };

    function iM2(A) {
        return A == "<" && "&lt;" || A == ">" && "&gt;" || A == "&" && "&amp;" || A == '"' && "&quot;" || "&#" + A.charCodeAt() + ";"
    }
    BRA(B$, XG);
    BRA(B$, XG.prototype);

    function QRA(A, Q) {
        if (Q(A)) return !0;
        if (A = A.firstChild)
            do
                if (QRA(A, Q)) return !0; while (A = A.nextSibling)
    }

    function GRA() {
        this.ownerDocument = this
    }

    function iy5(A, Q, B) {
        A && A._inc++;
        var G = B.namespaceURI;
        if (G === ARA.XMLNS) Q._nsMap[B.prefix ? B.localName : ""] = B.value
    }

    function nM2(A, Q, B, G) {
        A && A._inc++;
        var Z = B.namespaceURI;
        if (Z === ARA.XMLNS) delete Q._nsMap[B.prefix ? B.localName : ""]
    }

    function o40(A, Q, B) {
        if (A && A._inc) {
            A._inc++;
            var G = Q.childNodes;
            if (B) G[G.length++] = B;
            else {
                var Z = Q.firstChild,
                    I = 0;
                while (Z) G[I++] = Z, Z = Z.nextSibling;
                G.length = I, delete G[G.length]
            }
        }
    }

    function aM2(A, Q) {
        var {
            previousSibling: B,
            nextSibling: G
        } = Q;
        if (B) B.nextSibling = G;
        else A.firstChild = G;
        if (G) G.previousSibling = B;
        else A.lastChild = B;
        return Q.parentNode = null, Q.previousSibling = null, Q.nextSibling = null, o40(A.ownerDocument, A), Q
    }

    function ny5(A) {
        return A && (A.nodeType === XG.DOCUMENT_NODE || A.nodeType === XG.DOCUMENT_FRAGMENT_NODE || A.nodeType === XG.ELEMENT_NODE)
    }

    function ay5(A) {
        return A && (Xy(A) || t40(A) || kh(A) || A.nodeType === XG.DOCUMENT_FRAGMENT_NODE || A.nodeType === XG.COMMENT_NODE || A.nodeType === XG.PROCESSING_INSTRUCTION_NODE)
    }

    function kh(A) {
        return A && A.nodeType === XG.DOCUMENT_TYPE_NODE
    }

    function Xy(A) {
        return A && A.nodeType === XG.ELEMENT_NODE
    }

    function t40(A) {
        return A && A.nodeType === XG.TEXT_NODE
    }

    function yM2(A, Q) {
        var B = A.childNodes || [];
        if (Wy(B, Xy) || kh(Q)) return !1;
        var G = Wy(B, kh);
        return !(Q && G && B.indexOf(G) > B.indexOf(Q))
    }

    function xM2(A, Q) {
        var B = A.childNodes || [];

        function G(I) {
            return Xy(I) && I !== Q
        }
        if (Wy(B, G)) return !1;
        var Z = Wy(B, kh);
        return !(Q && Z && B.indexOf(Z) > B.indexOf(Q))
    }

    function sy5(A, Q, B) {
        if (!ny5(A)) throw new vW(A$, "Unexpected parent node type " + A.nodeType);
        if (B && B.parentNode !== A) throw new vW(cM2, "child not in parent");
        if (!ay5(Q) || kh(Q) && A.nodeType !== XG.DOCUMENT_NODE) throw new vW(A$, "Unexpected node type " + Q.nodeType + " for parent node type " + A.nodeType)
    }

    function ry5(A, Q, B) {
        var G = A.childNodes || [],
            Z = Q.childNodes || [];
        if (Q.nodeType === XG.DOCUMENT_FRAGMENT_NODE) {
            var I = Z.filter(Xy);
            if (I.length > 1 || Wy(Z, t40)) throw new vW(A$, "More than one element or text in fragment");
            if (I.length === 1 && !yM2(A, B)) throw new vW(A$, "Element in fragment can not be inserted before doctype")
        }
        if (Xy(Q)) {
            if (!yM2(A, B)) throw new vW(A$, "Only one element can be added and only after doctype")
        }
        if (kh(Q)) {
            if (Wy(G, kh)) throw new vW(A$, "Only one doctype is allowed");
            var Y = Wy(G, Xy);
            if (B && G.indexOf(Y) < G.indexOf(B)) throw new vW(A$, "Doctype can only be inserted before an element");
            if (!B && Y) throw new vW(A$, "Doctype can not be appended since element is present")
        }
    }

    function sM2(A, Q, B) {
        var G = A.childNodes || [],
            Z = Q.childNodes || [];
        if (Q.nodeType === XG.DOCUMENT_FRAGMENT_NODE) {
            var I = Z.filter(Xy);
            if (I.length > 1 || Wy(Z, t40)) throw new vW(A$, "More than one element or text in fragment");
            if (I.length === 1 && !xM2(A, B)) throw new vW(A$, "Element in fragment can not be inserted before doctype")
        }
        if (Xy(Q)) {
            if (!xM2(A, B)) throw new vW(A$, "Only one element can be added and only after doctype")
        }
        if (kh(Q)) {
            let W = function(X) {
                return kh(X) && X !== B
            };
            var J = W;
            if (Wy(G, W)) throw new vW(A$, "Only one doctype is allowed");
            var Y = Wy(G, Xy);
            if (B && G.indexOf(Y) < G.indexOf(B)) throw new vW(A$, "Doctype can only be inserted before an element")
        }
    }

    function m81(A, Q, B, G) {
        if (sy5(A, Q, B), A.nodeType === XG.DOCUMENT_NODE)(G || ry5)(A, Q, B);
        var Z = Q.parentNode;
        if (Z) Z.removeChild(Q);
        if (Q.nodeType === _h) {
            var I = Q.firstChild;
            if (I == null) return Q;
            var Y = Q.lastChild
        } else I = Y = Q;
        var J = B ? B.previousSibling : A.lastChild;
        if (I.previousSibling = J, Y.nextSibling = B, J) J.nextSibling = I;
        else A.firstChild = I;
        if (B == null) A.lastChild = Y;
        else B.previousSibling = Y;
        do I.parentNode = A; while (I !== Y && (I = I.nextSibling));
        if (o40(A.ownerDocument || A, A), Q.nodeType == _h) Q.firstChild = Q.lastChild = null;
        return Q
    }

    function oy5(A, Q) {
        if (Q.parentNode) Q.parentNode.removeChild(Q);
        if (Q.parentNode = A, Q.previousSibling = A.lastChild, Q.nextSibling = null, Q.previousSibling) Q.previousSibling.nextSibling = Q;
        else A.firstChild = Q;
        return A.lastChild = Q, o40(A.ownerDocument, A, Q), Q
    }
    GRA.prototype = {
        nodeName: "#document",
        nodeType: mM2,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function(A, Q) {
            if (A.nodeType == _h) {
                var B = A.firstChild;
                while (B) {
                    var G = B.nextSibling;
                    this.insertBefore(B, Q), B = G
                }
                return A
            }
            if (m81(this, A, Q), A.ownerDocument = this, this.documentElement === null && A.nodeType === UP) this.documentElement = A;
            return A
        },
        removeChild: function(A) {
            if (this.documentElement == A) this.documentElement = null;
            return aM2(this, A)
        },
        replaceChild: function(A, Q) {
            if (m81(this, A, Q, sM2), A.ownerDocument = this, Q) this.removeChild(Q);
            if (Xy(A)) this.documentElement = A
        },
        importNode: function(A, Q) {
            return AO2(this, A, Q)
        },
        getElementById: function(A) {
            var Q = null;
            return QRA(this.documentElement, function(B) {
                if (B.nodeType == UP) {
                    if (B.getAttribute("id") == A) return Q = B, !0
                }
            }), Q
        },
        getElementsByClassName: function(A) {
            var Q = jM2(A);
            return new OJA(this, function(B) {
                var G = [];
                if (Q.length > 0) QRA(B.documentElement, function(Z) {
                    if (Z !== B && Z.nodeType === UP) {
                        var I = Z.getAttribute("class");
                        if (I) {
                            var Y = A === I;
                            if (!Y) {
                                var J = jM2(I);
                                Y = Q.every(cy5(J))
                            }
                            if (Y) G.push(Z)
                        }
                    }
                });
                return G
            })
        },
        createElement: function(A) {
            var Q = new G0A;
            Q.ownerDocument = this, Q.nodeName = A, Q.tagName = A, Q.localName = A, Q.childNodes = new Sh;
            var B = Q.attributes = new u81;
            return B._ownerElement = Q, Q
        },
        createDocumentFragment: function() {
            var A = new p81;
            return A.ownerDocument = this, A.childNodes = new Sh, A
        },
        createTextNode: function(A) {
            var Q = new e40;
            return Q.ownerDocument = this, Q.appendData(A), Q
        },
        createComment: function(A) {
            var Q = new A80;
            return Q.ownerDocument = this, Q.appendData(A), Q
        },
        createCDATASection: function(A) {
            var Q = new Q80;
            return Q.ownerDocument = this, Q.appendData(A), Q
        },
        createProcessingInstruction: function(A, Q) {
            var B = new G80;
            return B.ownerDocument = this, B.tagName = B.nodeName = B.target = A, B.nodeValue = B.data = Q, B
        },
        createAttribute: function(A) {
            var Q = new d81;
            return Q.ownerDocument = this, Q.name = A, Q.nodeName = A, Q.localName = A, Q.specified = !0, Q
        },
        createEntityReference: function(A) {
            var Q = new B80;
            return Q.ownerDocument = this, Q.nodeName = A, Q
        },
        createElementNS: function(A, Q) {
            var B = new G0A,
                G = Q.split(":"),
                Z = B.attributes = new u81;
            if (B.childNodes = new Sh, B.ownerDocument = this, B.nodeName = Q, B.tagName = Q, B.namespaceURI = A, G.length == 2) B.prefix = G[0], B.localName = G[1];
            else B.localName = Q;
            return Z._ownerElement = B, B
        },
        createAttributeNS: function(A, Q) {
            var B = new d81,
                G = Q.split(":");
            if (B.ownerDocument = this, B.nodeName = Q, B.name = Q, B.namespaceURI = A, B.specified = !0, G.length == 2) B.prefix = G[0], B.localName = G[1];
            else B.localName = Q;
            return B
        }
    };
    Q$(GRA, XG);

    function G0A() {
        this._nsMap = {}
    }
    G0A.prototype = {
        nodeType: UP,
        hasAttribute: function(A) {
            return this.getAttributeNode(A) != null
        },
        getAttribute: function(A) {
            var Q = this.getAttributeNode(A);
            return Q && Q.value || ""
        },
        getAttributeNode: function(A) {
            return this.attributes.getNamedItem(A)
        },
        setAttribute: function(A, Q) {
            var B = this.ownerDocument.createAttribute(A);
            B.value = B.nodeValue = "" + Q, this.setAttributeNode(B)
        },
        removeAttribute: function(A) {
            var Q = this.getAttributeNode(A);
            Q && this.removeAttributeNode(Q)
        },
        appendChild: function(A) {
            if (A.nodeType === _h) return this.insertBefore(A, null);
            else return oy5(this, A)
        },
        setAttributeNode: function(A) {
            return this.attributes.setNamedItem(A)
        },
        setAttributeNodeNS: function(A) {
            return this.attributes.setNamedItemNS(A)
        },
        removeAttributeNode: function(A) {
            return this.attributes.removeNamedItem(A.nodeName)
        },
        removeAttributeNS: function(A, Q) {
            var B = this.getAttributeNodeNS(A, Q);
            B && this.removeAttributeNode(B)
        },
        hasAttributeNS: function(A, Q) {
            return this.getAttributeNodeNS(A, Q) != null
        },
        getAttributeNS: function(A, Q) {
            var B = this.getAttributeNodeNS(A, Q);
            return B && B.value || ""
        },
        setAttributeNS: function(A, Q, B) {
            var G = this.ownerDocument.createAttributeNS(A, Q);
            G.value = G.nodeValue = "" + B, this.setAttributeNode(G)
        },
        getAttributeNodeNS: function(A, Q) {
            return this.attributes.getNamedItemNS(A, Q)
        },
        getElementsByTagName: function(A) {
            return new OJA(this, function(Q) {
                var B = [];
                return QRA(Q, function(G) {
                    if (G !== Q && G.nodeType == UP && (A === "*" || G.tagName == A)) B.push(G)
                }), B
            })
        },
        getElementsByTagNameNS: function(A, Q) {
            return new OJA(this, function(B) {
                var G = [];
                return QRA(B, function(Z) {
                    if (Z !== B && Z.nodeType === UP && (A === "*" || Z.namespaceURI === A) && (Q === "*" || Z.localName == Q)) G.push(Z)
                }), G
            })
        }
    };
    GRA.prototype.getElementsByTagName = G0A.prototype.getElementsByTagName;
    GRA.prototype.getElementsByTagNameNS = G0A.prototype.getElementsByTagNameNS;
    Q$(G0A, XG);

    function d81() {}
    d81.prototype.nodeType = MJA;
    Q$(d81, XG);

    function ZRA() {}
    ZRA.prototype = {
        data: "",
        substringData: function(A, Q) {
            return this.data.substring(A, A + Q)
        },
        appendData: function(A) {
            A = this.data + A, this.nodeValue = this.data = A, this.length = A.length
        },
        insertData: function(A, Q) {
            this.replaceData(A, 0, Q)
        },
        appendChild: function(A) {
            throw Error(WK[A$])
        },
        deleteData: function(A, Q) {
            this.replaceData(A, Q, "")
        },
        replaceData: function(A, Q, B) {
            var G = this.data.substring(0, A),
                Z = this.data.substring(A + Q);
            B = G + B + Z, this.nodeValue = this.data = B, this.length = B.length
        }
    };
    Q$(ZRA, XG);

    function e40() {}
    e40.prototype = {
        nodeName: "#text",
        nodeType: g81,
        splitText: function(A) {
            var Q = this.data,
                B = Q.substring(A);
            Q = Q.substring(0, A), this.data = this.nodeValue = Q, this.length = Q.length;
            var G = this.ownerDocument.createTextNode(B);
            if (this.parentNode) this.parentNode.insertBefore(G, this.nextSibling);
            return G
        }
    };
    Q$(e40, ZRA);

    function A80() {}
    A80.prototype = {
        nodeName: "#comment",
        nodeType: uM2
    };
    Q$(A80, ZRA);

    function Q80() {}
    Q80.prototype = {
        nodeName: "#cdata-section",
        nodeType: fM2
    };
    Q$(Q80, ZRA);

    function c81() {}
    c81.prototype.nodeType = dM2;
    Q$(c81, XG);

    function rM2() {}
    rM2.prototype.nodeType = ly5;
    Q$(rM2, XG);

    function oM2() {}
    oM2.prototype.nodeType = py5;
    Q$(oM2, XG);

    function B80() {}
    B80.prototype.nodeType = hM2;
    Q$(B80, XG);

    function p81() {}
    p81.prototype.nodeName = "#document-fragment";
    p81.prototype.nodeType = _h;
    Q$(p81, XG);

    function G80() {}
    G80.prototype.nodeType = gM2;
    Q$(G80, XG);

    function tM2() {}
    tM2.prototype.serializeToString = function(A, Q, B) {
        return eM2.call(A, Q, B)
    };
    XG.prototype.toString = eM2;

    function eM2(A, Q) {
        var B = [],
            G = this.nodeType == 9 && this.documentElement || this,
            Z = G.prefix,
            I = G.namespaceURI;
        if (I && Z == null) {
            var Z = G.lookupPrefix(I);
            if (Z == null) var Y = [{
                namespace: I,
                prefix: null
            }]
        }
        return LJA(this, B, A, Q, Y), B.join("")
    }

    function vM2(A, Q, B) {
        var G = A.prefix || "",
            Z = A.namespaceURI;
        if (!Z) return !1;
        if (G === "xml" && Z === ARA.XML || Z === ARA.XMLNS) return !1;
        var I = B.length;
        while (I--) {
            var Y = B[I];
            if (Y.prefix === G) return Y.namespace !== Z
        }
        return !0
    }

    function a40(A, Q, B) {
        A.push(" ", Q, '="', B.replace(/[<>&"\t\n\r]/g, iM2), '"')
    }

    function LJA(A, Q, B, G, Z) {
        if (!Z) Z = [];
        if (G)
            if (A = G(A), A) {
                if (typeof A == "string") {
                    Q.push(A);
                    return
                }
            } else return;
        switch (A.nodeType) {
            case UP:
                var I = A.attributes,
                    Y = I.length,
                    z = A.firstChild,
                    J = A.tagName;
                B = ARA.isHTML(A.namespaceURI) || B;
                var W = J;
                if (!B && !A.prefix && A.namespaceURI) {
                    var X;
                    for (var F = 0; F < I.length; F++)
                        if (I.item(F).name === "xmlns") {
                            X = I.item(F).value;
                            break
                        } if (!X)
                        for (var V = Z.length - 1; V >= 0; V--) {
                            var K = Z[V];
                            if (K.prefix === "" && K.namespace === A.namespaceURI) {
                                X = K.namespace;
                                break
                            }
                        }
                    if (X !== A.namespaceURI)
                        for (var V = Z.length - 1; V >= 0; V--) {
                            var K = Z[V];
                            if (K.namespace === A.namespaceURI) {
                                if (K.prefix) W = K.prefix + ":" + J;
                                break
                            }
                        }
                }
                Q.push("<", W);
                for (var D = 0; D < Y; D++) {
                    var H = I.item(D);
                    if (H.prefix == "xmlns") Z.push({
                        prefix: H.localName,
                        namespace: H.value
                    });
                    else if (H.nodeName == "xmlns") Z.push({
                        prefix: "",
                        namespace: H.value
                    })
                }
                for (var D = 0; D < Y; D++) {
                    var H = I.item(D);
                    if (vM2(H, B, Z)) {
                        var C = H.prefix || "",
                            E = H.namespaceURI;
                        a40(Q, C ? "xmlns:" + C : "xmlns", E), Z.push({
                            prefix: C,
                            namespace: E
                        })
                    }
                    LJA(H, Q, B, G, Z)
                }
                if (J === W && vM2(A, B, Z)) {
                    var C = A.prefix || "",
                        E = A.namespaceURI;
                    a40(Q, C ? "xmlns:" + C : "xmlns", E), Z.push({
                        prefix: C,
                        namespace: E
                    })
                }
                if (z || B && !/^(?:meta|link|img|br|hr|input)$/i.test(J)) {
                    if (Q.push(">"), B && /^script$/i.test(J))
                        while (z) {
                            if (z.data) Q.push(z.data);
                            else LJA(z, Q, B, G, Z.slice());
                            z = z.nextSibling
                        } else
                            while (z) LJA(z, Q, B, G, Z.slice()), z = z.nextSibling;
                    Q.push("</", W, ">")
                } else Q.push("/>");
                return;
            case mM2:
            case _h:
                var z = A.firstChild;
                while (z) LJA(z, Q, B, G, Z.slice()), z = z.nextSibling;
                return;
            case MJA:
                return a40(Q, A.name, A.value);
            case g81:
                return Q.push(A.data.replace(/[<&>]/g, iM2));
            case fM2:
                return Q.push("<![CDATA[", A.data, "]]>");
            case uM2:
                return Q.push("<!--", A.data, "-->");
            case dM2:
                var {
                    publicId: w, systemId: N
                } = A;
                if (Q.push("<!DOCTYPE ", A.name), w) {
                    if (Q.push(" PUBLIC ", w), N && N != ".") Q.push(" ", N);
                    Q.push(">")
                } else if (N && N != ".") Q.push(" SYSTEM ", N, ">");
                else {
                    var q = A.internalSubset;
                    if (q) Q.push(" [", q, "]");
                    Q.push(">")
                }
                return;
            case gM2:
                return Q.push("<?", A.target, " ", A.data, "?>");
            case hM2:
                return Q.push("&", A.nodeName, ";");
            default:
                Q.push("??", A.nodeName)
        }
    }

    function AO2(A, Q, B) {
        var G;
        switch (Q.nodeType) {
            case UP:
                G = Q.cloneNode(!1), G.ownerDocument = A;
            case _h:
                break;
            case MJA:
                B = !0;
                break
        }
        if (!G) G = Q.cloneNode(!1);
        if (G.ownerDocument = A, G.parentNode = null, B) {
            var Z = Q.firstChild;
            while (Z) G.appendChild(AO2(A, Z, B)), Z = Z.nextSibling
        }
        return G
    }

    function s40(A, Q, B) {
        var G = new Q.constructor;
        for (var Z in Q)
            if (Object.prototype.hasOwnProperty.call(Q, Z)) {
                var I = Q[Z];
                if (typeof I != "object") {
                    if (I != G[Z]) G[Z] = I
                }
            } if (Q.childNodes) G.childNodes = new Sh;
        switch (G.ownerDocument = A, G.nodeType) {
            case UP:
                var Y = Q.attributes,
                    J = G.attributes = new u81,
                    W = Y.length;
                J._ownerElement = G;
                for (var X = 0; X < W; X++) G.setAttributeNode(s40(A, Y.item(X), !0));
                break;
            case MJA:
                B = !0
        }
        if (B) {
            var F = Q.firstChild;
            while (F) G.appendChild(s40(A, F, B)), F = F.nextSibling
        }
        return G
    }

    function QO2(A, Q, B) {
        A[Q] = B
    }
    try {
        if (Object.defineProperty) {
            let A = function(Q) {
                switch (Q.nodeType) {
                    case UP:
                    case _h:
                        var B = [];
                        Q = Q.firstChild;
                        while (Q) {
                            if (Q.nodeType !== 7 && Q.nodeType !== 8) B.push(A(Q));
                            Q = Q.nextSibling
                        }
                        return B.join("");
                    default:
                        return Q.nodeValue
                }
            };
            ty5 = A, Object.defineProperty(OJA.prototype, "length", {
                get: function() {
                    return r40(this), this.$$length
                }
            }), Object.defineProperty(XG.prototype, "textContent", {
                get: function() {
                    return A(this)
                },
                set: function(Q) {
                    switch (this.nodeType) {
                        case UP:
                        case _h:
                            while (this.firstChild) this.removeChild(this.firstChild);
                            if (Q || String(Q)) this.appendChild(this.ownerDocument.createTextNode(Q));
                            break;
                        default:
                            this.data = Q, this.value = Q, this.nodeValue = Q
                    }
                }
            }), QO2 = function(Q, B, G) {
                Q["$$" + B] = G
            }
        }
    } catch (A) {}
    var ty5;
    ey5.DocumentType = c81;
    ey5.DOMException = vW;
    ey5.DOMImplementation = lM2;
    ey5.Element = G0A;
    ey5.Node = XG;
    ey5.NodeList = Sh;
    ey5.XMLSerializer = tM2
});
var ZO2 = U((Jx5) => {
    var BO2 = eOA().freeze;
    Jx5.XML_ENTITIES = BO2({
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
    });
    Jx5.HTML_ENTITIES = BO2({
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "\uD835\uDD04",
        afr: "\uD835\uDD1E",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        AMP: "&",
        amp: "&",
        And: "⩓",
        and: "∧",
        andand: "⩕",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsd: "∡",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "\uD835\uDD38",
        aopf: "\uD835\uDD52",
        ap: "≈",
        apacir: "⩯",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "\uD835\uDC9C",
        ascr: "\uD835\uDCB6",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        Barwed: "⌆",
        barwed: "⌅",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        Because: "∵",
        because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "\uD835\uDD05",
        bfr: "\uD835\uDD1F",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "\uD835\uDD39",
        bopf: "\uD835\uDD53",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxDL: "╗",
        boxDl: "╖",
        boxdL: "╕",
        boxdl: "┐",
        boxDR: "╔",
        boxDr: "╓",
        boxdR: "╒",
        boxdr: "┌",
        boxH: "═",
        boxh: "─",
        boxHD: "╦",
        boxHd: "╤",
        boxhD: "╥",
        boxhd: "┬",
        boxHU: "╩",
        boxHu: "╧",
        boxhU: "╨",
        boxhu: "┴",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxUL: "╝",
        boxUl: "╜",
        boxuL: "╛",
        boxul: "┘",
        boxUR: "╚",
        boxUr: "╙",
        boxuR: "╘",
        boxur: "└",
        boxV: "║",
        boxv: "│",
        boxVH: "╬",
        boxVh: "╫",
        boxvH: "╪",
        boxvh: "┼",
        boxVL: "╣",
        boxVl: "╢",
        boxvL: "╡",
        boxvl: "┤",
        boxVR: "╠",
        boxVr: "╟",
        boxvR: "╞",
        boxvr: "├",
        bprime: "‵",
        Breve: "˘",
        breve: "˘",
        brvbar: "¦",
        Bscr: "ℬ",
        bscr: "\uD835\uDCB7",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsol: "\\",
        bsolb: "⧅",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        Cap: "⋒",
        cap: "∩",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        CenterDot: "·",
        centerdot: "·",
        Cfr: "ℭ",
        cfr: "\uD835\uDD20",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        cir: "○",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        Colon: "∷",
        colon: ":",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        Conint: "∯",
        conint: "∮",
        ContourIntegral: "∮",
        Copf: "ℂ",
        copf: "\uD835\uDD54",
        coprod: "∐",
        Coproduct: "∐",
        COPY: "©",
        copy: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        Cross: "⨯",
        cross: "✗",
        Cscr: "\uD835\uDC9E",
        cscr: "\uD835\uDCB8",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        Cup: "⋓",
        cup: "∪",
        cupbrcap: "⩈",
        CupCap: "≍",
        cupcap: "⩆",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        Dagger: "‡",
        dagger: "†",
        daleth: "ℸ",
        Darr: "↡",
        dArr: "⇓",
        darr: "↓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        DD: "ⅅ",
        dd: "ⅆ",
        ddagger: "‡",
        ddarr: "⇊",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "\uD835\uDD07",
        dfr: "\uD835\uDD21",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        Diamond: "⋄",
        diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "\uD835\uDD3B",
        dopf: "\uD835\uDD55",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrow: "↓",
        Downarrow: "⇓",
        downarrow: "↓",
        DownArrowBar: "⤓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVector: "↽",
        DownLeftVectorBar: "⥖",
        DownRightTeeVector: "⥟",
        DownRightVector: "⇁",
        DownRightVectorBar: "⥗",
        DownTee: "⊤",
        DownTeeArrow: "↧",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "\uD835\uDC9F",
        dscr: "\uD835\uDCB9",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        ecir: "≖",
        Ecirc: "Ê",