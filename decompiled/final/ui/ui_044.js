/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_044.js
 * 处理时间: 2025-12-09T03:41:39.498Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * SQ       (  1x) sandboxDebug(msg, opts) - Sandbox debug logging
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 44/53
 * Lines: 357413 - 358846 (1434 lines)
 * Original file: cli.js
 */

        attributes: {
            width: {
                type: "long",
                default: 0
            }
        }
    });
    kB({
        tag: "progress",
        name: "HTMLProgressElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP,
        attributes: {
            max: {
                type: Number,
                float: !0,
                default: 1,
                min: 0
            }
        }
    });
    kB({
        tags: ["q", "blockquote"],
        name: "HTMLQuoteElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            cite: mJ
        }
    });
    kB({
        tag: "script",
        name: "HTMLScriptElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            text: {
                get: function() {
                    var A = "";
                    for (var Q = 0, B = this.childNodes.length; Q < B; Q++) {
                        var G = this.childNodes[Q];
                        if (G.nodeType === o70.TEXT_NODE) A += G._data
                    }
                    return A
                },
                set: function(A) {
                    if (this.removeChildren(), A !== null && A !== "") this.appendChild(this.ownerDocument.createTextNode(A))
                }
            }
        },
        attributes: {
            src: mJ,
            type: String,
            charset: String,
            referrerPolicy: kWA,
            defer: Boolean,
            async: Boolean,
            nomodule: Boolean,
            crossOrigin: C31,
            nonce: String,
            integrity: String
        }
    });
    kB({
        tag: "select",
        name: "HTMLSelectElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: {
            form: SP.form,
            options: {
                get: function() {
                    return this.getElementsByTagName("option")
                }
            }
        },
        attributes: {
            autocomplete: String,
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            multiple: Boolean,
            required: Boolean,
            size: {
                type: "unsigned long",
                default: 0
            }
        }
    });
    kB({
        tag: "span",
        name: "HTMLSpanElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        }
    });
    kB({
        tag: "style",
        name: "HTMLStyleElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            media: String,
            type: String,
            scoped: Boolean
        }
    });
    kB({
        tag: "caption",
        name: "HTMLTableCaptionElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            align: String
        }
    });
    kB({
        name: "HTMLTableCellElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            colSpan: {
                type: "unsigned long",
                default: 1
            },
            rowSpan: {
                type: "unsigned long",
                default: 1
            },
            scope: {
                type: ["row", "col", "rowgroup", "colgroup"],
                missing: ""
            },
            abbr: String,
            align: String,
            axis: String,
            height: String,
            width: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            noWrap: Boolean,
            vAlign: String,
            bgColor: {
                type: String,
                treatNullAsEmptyString: !0
            }
        }
    });
    kB({
        tags: ["col", "colgroup"],
        name: "HTMLTableColElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            span: {
                type: "limited unsigned long with fallback",
                default: 1,
                min: 1
            },
            align: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            vAlign: String,
            width: String
        }
    });
    kB({
        tag: "table",
        name: "HTMLTableElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            rows: {
                get: function() {
                    return this.getElementsByTagName("tr")
                }
            }
        },
        attributes: {
            align: String,
            border: String,
            frame: String,
            rules: String,
            summary: String,
            width: String,
            bgColor: {
                type: String,
                treatNullAsEmptyString: !0
            },
            cellPadding: {
                type: String,
                treatNullAsEmptyString: !0
            },
            cellSpacing: {
                type: String,
                treatNullAsEmptyString: !0
            }
        }
    });
    kB({
        tag: "template",
        name: "HTMLTemplateElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G), this._contentFragment = Q._templateDoc.createDocumentFragment()
        },
        props: {
            content: {
                get: function() {
                    return this._contentFragment
                }
            },
            serialize: {
                value: function() {
                    return this.content.serialize()
                }
            }
        }
    });
    kB({
        tag: "tr",
        name: "HTMLTableRowElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            cells: {
                get: function() {
                    return this.querySelectorAll("td,th")
                }
            }
        },
        attributes: {
            align: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            vAlign: String,
            bgColor: {
                type: String,
                treatNullAsEmptyString: !0
            }
        }
    });
    kB({
        tags: ["thead", "tfoot", "tbody"],
        name: "HTMLTableSectionElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            rows: {
                get: function() {
                    return this.getElementsByTagName("tr")
                }
            }
        },
        attributes: {
            align: String,
            ch: {
                name: "char",
                type: String
            },
            chOff: {
                name: "charoff",
                type: String
            },
            vAlign: String
        }
    });
    kB({
        tag: "textarea",
        name: "HTMLTextAreaElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: {
            form: SP.form,
            type: {
                get: function() {
                    return "textarea"
                }
            },
            defaultValue: {
                get: function() {
                    return this.textContent
                },
                set: function(A) {
                    this.textContent = A
                }
            },
            value: {
                get: function() {
                    return this.defaultValue
                },
                set: function(A) {
                    this.defaultValue = A
                }
            },
            textLength: {
                get: function() {
                    return this.value.length
                }
            }
        },
        attributes: {
            autocomplete: String,
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            placeholder: String,
            wrap: String,
            dirName: String,
            required: Boolean,
            readOnly: Boolean,
            rows: {
                type: "limited unsigned long with fallback",
                default: 2
            },
            cols: {
                type: "limited unsigned long with fallback",
                default: 20
            },
            maxLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            minLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            inputMode: {
                type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"],
                missing: ""
            }
        }
    });
    kB({
        tag: "time",
        name: "HTMLTimeElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            dateTime: String,
            pubDate: Boolean
        }
    });
    kB({
        tag: "title",
        name: "HTMLTitleElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            text: {
                get: function() {
                    return this.textContent
                }
            }
        }
    });
    kB({
        tag: "ul",
        name: "HTMLUListElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            type: String,
            compact: Boolean
        }
    });
    kB({
        name: "HTMLMediaElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            src: mJ,
            crossOrigin: C31,
            preload: {
                type: ["metadata", "none", "auto", {
                    value: "",
                    alias: "auto"
                }],
                missing: "auto"
            },
            loop: Boolean,
            autoplay: Boolean,
            mediaGroup: String,
            controls: Boolean,
            defaultMuted: {
                name: "muted",
                type: Boolean
            }
        }
    });
    kB({
        name: "HTMLAudioElement",
        tag: "audio",
        superclass: ah.HTMLMediaElement,
        ctor: function(Q, B, G) {
            ah.HTMLMediaElement.call(this, Q, B, G)
        }
    });
    kB({
        name: "HTMLVideoElement",
        tag: "video",
        superclass: ah.HTMLMediaElement,
        ctor: function(Q, B, G) {
            ah.HTMLMediaElement.call(this, Q, B, G)
        },
        attributes: {
            poster: mJ,
            width: {
                type: "unsigned long",
                min: 0,
                default: 0
            },
            height: {
                type: "unsigned long",
                min: 0,
                default: 0
            }
        }
    });
    kB({
        tag: "td",
        name: "HTMLTableDataCellElement",
        superclass: ah.HTMLTableCellElement,
        ctor: function(Q, B, G) {
            ah.HTMLTableCellElement.call(this, Q, B, G)
        }
    });
    kB({
        tag: "th",
        name: "HTMLTableHeaderCellElement",
        superclass: ah.HTMLTableCellElement,
        ctor: function(Q, B, G) {
            ah.HTMLTableCellElement.call(this, Q, B, G)
        }
    });
    kB({
        tag: "frameset",
        name: "HTMLFrameSetElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        }
    });
    kB({
        tag: "frame",
        name: "HTMLFrameElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        }
    });
    kB({
        tag: "canvas",
        name: "HTMLCanvasElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            getContext: {
                value: yq.nyi
            },
            probablySupportsContext: {
                value: yq.nyi
            },
            setContext: {
                value: yq.nyi
            },
            transferControlToProxy: {
                value: yq.nyi
            },
            toDataURL: {
                value: yq.nyi
            },
            toBlob: {
                value: yq.nyi
            }
        },
        attributes: {
            width: {
                type: "unsigned long",
                default: 300
            },
            height: {
                type: "unsigned long",
                default: 150
            }
        }
    });
    kB({
        tag: "dialog",
        name: "HTMLDialogElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            show: {
                value: yq.nyi
            },
            showModal: {
                value: yq.nyi
            },
            close: {
                value: yq.nyi
            }
        },
        attributes: {
            open: Boolean,
            returnValue: String
        }
    });
    kB({
        tag: "menuitem",
        name: "HTMLMenuItemElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            _label: {
                get: function() {
                    var A = this._getattr("label");
                    if (A !== null && A !== "") return A;
                    return A = this.textContent, A.replace(/[ \t\n\f\r]+/g, " ").trim()
                }
            },
            label: {
                get: function() {
                    var A = this._getattr("label");
                    if (A !== null) return A;
                    return this._label
                },
                set: function(A) {
                    this._setattr("label", A)
                }
            }
        },
        attributes: {
            type: {
                type: ["command", "checkbox", "radio"],
                missing: "command"
            },
            icon: mJ,
            disabled: Boolean,
            checked: Boolean,
            radiogroup: String,
            default: Boolean
        }
    });
    kB({
        tag: "source",
        name: "HTMLSourceElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            srcset: String,
            sizes: String,
            media: String,
            src: mJ,
            type: String,
            width: String,
            height: String
        }
    });
    kB({
        tag: "track",
        name: "HTMLTrackElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            src: mJ,
            srclang: String,
            label: String,
            default: Boolean,
            kind: {
                type: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
                missing: "subtitles",
                invalid: "metadata"
            }
        },
        props: {
            NONE: {
                get: function() {
                    return 0
                }
            },
            LOADING: {
                get: function() {
                    return 1
                }
            },
            LOADED: {
                get: function() {
                    return 2
                }
            },
            ERROR: {
                get: function() {
                    return 3
                }
            },
            readyState: {
                get: yq.nyi
            },
            track: {
                get: yq.nyi
            }
        }
    });
    kB({
        tag: "font",
        name: "HTMLFontElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            color: {
                type: String,
                treatNullAsEmptyString: !0
            },
            face: {
                type: String
            },
            size: {
                type: String
            }
        }
    });
    kB({
        tag: "dir",
        name: "HTMLDirectoryElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            compact: Boolean
        }
    });
    kB({
        tags: ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "content", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr", "acronym", "basefont", "big", "center", "nobr", "noembed", "noframes", "plaintext", "strike", "tt"]
    })
});
var AG0 = U((sn5) => {
    var Ng2 = SWA(),
        ln5 = r70(),
        in5 = uJ(),
        nn5 = H31(),
        an5 = sn5.elements = {},
        Lg2 = Object.create(null);
    sn5.createElement = function(A, Q, B) {
        var G = Lg2[Q] || e70;
        return new G(A, Q, B)
    };

    function t70(A) {
        return ln5(A, e70, an5, Lg2)
    }
    var e70 = t70({
        superclass: Ng2,
        name: "SVGElement",
        ctor: function(Q, B, G) {
            Ng2.call(this, Q, B, in5.NAMESPACE.SVG, G)
        },
        props: {
            style: {
                get: function() {
                    if (!this._style) this._style = new nn5(this);
                    return this._style
                }
            }
        }
    });
    t70({
        name: "SVGSVGElement",
        ctor: function(Q, B, G) {
            e70.call(this, Q, B, G)
        },
        tag: "svg",
        props: {
            createSVGRect: {
                value: function() {
                    return sn5.createElement(this.ownerDocument, "rect", null)
                }
            }
        }
    });
    t70({
        tags: ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"]
    })
});
var Rg2 = U((IYZ, Og2) => {
    Og2.exports = {
        VALUE: 1,
        ATTR: 2,
        REMOVE_ATTR: 3,
        REMOVE: 4,
        MOVE: 5,
        INSERT: 6
    }
});
var U31 = U((YYZ, bg2) => {
    bg2.exports = qTA;
    var XC = mD(),
        rn5 = T0A(),
        kg2 = B31(),
        kn = SWA(),
        on5 = y70(),
        tn5 = v70(),
        wTA = LWA(),
        en5 = f70(),
        Aa5 = g70(),
        Qa5 = NTA(),
        Ba5 = sh2(),
        Ga5 = Qg2(),
        Tg2 = zTA(),
        Pg2 = D31(),
        jg2 = J31(),
        Za5 = a70(),
        z31 = G31(),
        QG0 = E31(),
        Ia5 = AG0(),
        Z7 = uJ(),
        yWA = Rg2(),
        vWA = Z7.NAMESPACE,
        BG0 = e51().isApiWritable;

    function qTA(A, Q) {
        kg2.call(this), this.nodeType = XC.DOCUMENT_NODE, this.isHTML = A, this._address = Q || "about:blank", this.readyState = "loading", this.implementation = new Qa5(this), this.ownerDocument = null, this._contentType = A ? "text/html" : "application/xml", this.doctype = null, this.documentElement = null, this._templateDocCache = null, this._nodeIterators = null, this._nid = 1, this._nextnid = 2, this._nodes = [null, this], this.byId = Object.create(null), this.modclock = 0
    }
    var Ya5 = {
            event: "Event",
            customevent: "CustomEvent",
            uievent: "UIEvent",
            mouseevent: "MouseEvent"
        },
        Ja5 = {
            events: "event",
            htmlevents: "event",
            mouseevents: "mouseevent",
            mutationevents: "mutationevent",
            uievents: "uievent"
        },
        xWA = function(A, Q, B) {
            return {
                get: function() {
                    var G = A.call(this);
                    if (G) return G[Q];
                    return B
                },
                set: function(G) {
                    var Z = A.call(this);
                    if (Z) Z[Q] = G
                }
            }
        };

    function Sg2(A, Q) {
        var B, G, Z;
        if (A === "") A = null;
        if (!z31.isValidQName(Q)) Z7.InvalidCharacterError();
        if (B = null, G = Q, Z = Q.indexOf(":"), Z >= 0) B = Q.substring(0, Z), G = Q.substring(Z + 1);
        if (B !== null && A === null) Z7.NamespaceError();
        if (B === "xml" && A !== vWA.XML) Z7.NamespaceError();
        if ((B === "xmlns" || Q === "xmlns") && A !== vWA.XMLNS) Z7.NamespaceError();
        if (A === vWA.XMLNS && !(B === "xmlns" || Q === "xmlns")) Z7.NamespaceError();
        return {
            namespace: A,
            prefix: B,
            localName: G
        }
    }
    qTA.prototype = Object.create(kg2.prototype, {
        _setMutationHandler: {
            value: function(A) {
                this.mutationHandler = A
            }
        },
        _dispatchRendererEvent: {
            value: function(A, Q, B) {
                var G = this._nodes[A];
                if (!G) return;
                G._dispatchEvent(new wTA(Q, B), !0)
            }
        },
        nodeName: {
            value: "#document"
        },
        nodeValue: {
            get: function() {
                return null
            },
            set: function() {}
        },
        documentURI: {
            get: function() {
                return this._address
            },
            set: Z7.nyi
        },
        compatMode: {
            get: function() {
                return this._quirks ? "BackCompat" : "CSS1Compat"
            }
        },
        createTextNode: {
            value: function(A) {
                return new on5(this, String(A))
            }
        },
        createComment: {
            value: function(A) {
                return new tn5(this, A)
            }
        },
        createDocumentFragment: {
            value: function() {
                return new en5(this)
            }
        },
        createProcessingInstruction: {
            value: function(A, Q) {
                if (!z31.isValidName(A) || Q.indexOf("?>") !== -1) Z7.InvalidCharacterError();
                return new Aa5(this, A, Q)
            }
        },
        createAttribute: {
            value: function(A) {
                if (A = String(A), !z31.isValidName(A)) Z7.InvalidCharacterError();
                if (this.isHTML) A = Z7.toASCIILowerCase(A);
                return new kn._Attr(null, A, null, null, "")
            }
        },
        createAttributeNS: {
            value: function(A, Q) {
                A = A === null || A === void 0 || A === "" ? null : String(A), Q = String(Q);
                var B = Sg2(A, Q);
                return new kn._Attr(null, B.localName, B.prefix, B.namespace, "")
            }
        },
        createElement: {
            value: function(A) {
                if (A = String(A), !z31.isValidName(A)) Z7.InvalidCharacterError();
                if (this.isHTML) {
                    if (/[A-Z]/.test(A)) A = Z7.toASCIILowerCase(A);
                    return QG0.createElement(this, A, null)
                } else if (this.contentType === "application/xhtml+xml") return QG0.createElement(this, A, null);
                else return new kn(this, A, null, null)
            },
            writable: BG0
        },
        createElementNS: {
            value: function(A, Q) {
                A = A === null || A === void 0 || A === "" ? null : String(A), Q = String(Q);
                var B = Sg2(A, Q);
                return this._createElementNS(B.localName, B.namespace, B.prefix)
            },
            writable: BG0
        },
        _createElementNS: {
            value: function(A, Q, B) {
                if (Q === vWA.HTML) return QG0.createElement(this, A, B);
                else if (Q === vWA.SVG) return Ia5.createElement(this, A, B);
                return new kn(this, A, Q, B)
            }
        },
        createEvent: {
            value: function(Q) {
                Q = Q.toLowerCase();
                var B = Ja5[Q] || Q,
                    G = Za5[Ya5[B]];
                if (G) {
                    var Z = new G;
                    return Z._initialized = !1, Z
                } else Z7.NotSupportedError()
            }
        },
        createTreeWalker: {
            value: function(A, Q, B) {
                if (!A) throw TypeError("root argument is required");
                if (!(A instanceof XC)) throw TypeError("root not a node");
                return Q = Q === void 0 ? Tg2.SHOW_ALL : +Q, B = B === void 0 ? null : B, new Ba5(A, Q, B)
            }
        },
        createNodeIterator: {
            value: function(A, Q, B) {
                if (!A) throw TypeError("root argument is required");
                if (!(A instanceof XC)) throw TypeError("root not a node");
                return Q = Q === void 0 ? Tg2.SHOW_ALL : +Q, B = B === void 0 ? null : B, new Ga5(A, Q, B)
            }
        },
        _attachNodeIterator: {
            value: function(A) {
                if (!this._nodeIterators) this._nodeIterators = [];
                this._nodeIterators.push(A)
            }
        },
        _detachNodeIterator: {
            value: function(A) {
                var Q = this._nodeIterators.indexOf(A);
                this._nodeIterators.splice(Q, 1)
            }
        },
        _preremoveNodeIterators: {
            value: function(A) {
                if (this._nodeIterators) this._nodeIterators.forEach(function(Q) {
                    Q._preremove(A)
                })
            }
        },
        _updateDocTypeElement: {
            value: function() {
                this.doctype = this.documentElement = null;
                for (var Q = this.firstChild; Q !== null; Q = Q.nextSibling)
                    if (Q.nodeType === XC.DOCUMENT_TYPE_NODE) this.doctype = Q;
                    else if (Q.nodeType === XC.ELEMENT_NODE) this.documentElement = Q
            }
        },
        insertBefore: {
            value: function(Q, B) {
                return XC.prototype.insertBefore.call(this, Q, B), this._updateDocTypeElement(), Q
            }
        },
        replaceChild: {
            value: function(Q, B) {
                return XC.prototype.replaceChild.call(this, Q, B), this._updateDocTypeElement(), B
            }
        },
        removeChild: {
            value: function(Q) {
                return XC.prototype.removeChild.call(this, Q), this._updateDocTypeElement(), Q
            }
        },
        getElementById: {
            value: function(A) {
                var Q = this.byId[A];
                if (!Q) return null;
                if (Q instanceof sh) return Q.getFirst();
                return Q
            }
        },
        _hasMultipleElementsWithId: {
            value: function(A) {
                return this.byId[A] instanceof sh
            }
        },
        getElementsByName: {
            value: kn.prototype.getElementsByName
        },
        getElementsByTagName: {
            value: kn.prototype.getElementsByTagName
        },
        getElementsByTagNameNS: {
            value: kn.prototype.getElementsByTagNameNS
        },
        getElementsByClassName: {
            value: kn.prototype.getElementsByClassName
        },
        adoptNode: {
            value: function(Q) {
                if (Q.nodeType === XC.DOCUMENT_NODE) Z7.NotSupportedError();
                if (Q.nodeType === XC.ATTRIBUTE_NODE) return Q;
                if (Q.parentNode) Q.parentNode.removeChild(Q);
                if (Q.ownerDocument !== this) vg2(Q, this);
                return Q
            }
        },
        importNode: {
            value: function(Q, B) {
                return this.adoptNode(Q.cloneNode(B))
            },
            writable: BG0
        },
        origin: {
            get: function() {
                return null
            }
        },
        characterSet: {
            get: function() {
                return "UTF-8"
            }
        },
        contentType: {
            get: function() {
                return this._contentType
            }
        },
        URL: {
            get: function() {
                return this._address
            }
        },
        domain: {
            get: Z7.nyi,
            set: Z7.nyi
        },
        referrer: {
            get: Z7.nyi
        },
        cookie: {
            get: Z7.nyi,
            set: Z7.nyi
        },
        lastModified: {
            get: Z7.nyi
        },
        location: {
            get: function() {
                return this.defaultView ? this.defaultView.location : null
            },
            set: Z7.nyi
        },
        _titleElement: {
            get: function() {
                return this.getElementsByTagName("title").item(0) || null
            }
        },
        title: {
            get: function() {
                var A = this._titleElement,
                    Q = A ? A.textContent : "";
                return Q.replace(/[ \t\n\r\f]+/g, " ").replace(/(^ )|( $)/g, "")
            },
            set: function(A) {
                var Q = this._titleElement,
                    B = this.head;
                if (!Q && !B) return;
                if (!Q) Q = this.createElement("title"), B.appendChild(Q);
                Q.textContent = A
            }
        },
        dir: xWA(function() {
            var A = this.documentElement;
            if (A && A.tagName === "HTML") return A
        }, "dir", ""),
        fgColor: xWA(function() {
            return this.body
        }, "text", ""),
        linkColor: xWA(function() {
            return this.body
        }, "link", ""),
        vlinkColor: xWA(function() {
            return this.body
        }, "vLink", ""),
        alinkColor: xWA(function() {
            return this.body
        }, "aLink", ""),
        bgColor: xWA(function() {
            return this.body
        }, "bgColor", ""),
        charset: {
            get: function() {
                return this.characterSet
            }
        },
        inputEncoding: {
            get: function() {
                return this.characterSet
            }
        },
        scrollingElement: {
            get: function() {
                return this._quirks ? this.body : this.documentElement
            }
        },
        body: {
            get: function() {
                return _g2(this.documentElement, "body")
            },
            set: Z7.nyi
        },
        head: {
            get: function() {
                return _g2(this.documentElement, "head")
            }
        },
        images: {
            get: Z7.nyi
        },
        embeds: {
            get: Z7.nyi
        },
        plugins: {
            get: Z7.nyi
        },
        links: {
            get: Z7.nyi
        },
        forms: {
            get: Z7.nyi
        },
        scripts: {
            get: Z7.nyi
        },
        applets: {
            get: function() {
                return []
            }
        },
        activeElement: {
            get: function() {
                return null
            }
        },
        innerHTML: {
            get: function() {
                return this.serialize()
            },
            set: Z7.nyi
        },
        outerHTML: {
            get: function() {
                return this.serialize()
            },
            set: Z7.nyi
        },
        write: {
            value: function(A) {
                if (!this.isHTML) Z7.InvalidStateError();
                if (!this._parser) return;
                if (!this._parser);
                var Q = arguments.join("");
                this._parser.parse(Q)
            }
        },
        writeln: {
            value: function(Q) {
                this.write(Array.prototype.join.call(arguments, "") + `
`)
            }
        },
        open: {
            value: function() {
                this.documentElement = null
            }
        },
        close: {
            value: function() {
                if (this.readyState = "interactive", this._dispatchEvent(new wTA("readystatechange"), !0), this._dispatchEvent(new wTA("DOMContentLoaded"), !0), this.readyState = "complete", this._dispatchEvent(new wTA("readystatechange"), !0), this.defaultView) this.defaultView._dispatchEvent(new wTA("load"), !0)
            }
        },
        clone: {
            value: function() {
                var Q = new qTA(this.isHTML, this._address);
                return Q._quirks = this._quirks, Q._contentType = this._contentType, Q
            }
        },
        cloneNode: {
            value: function(Q) {
                var B = XC.prototype.cloneNode.call(this, !1);
                if (Q)
                    for (var G = this.firstChild; G !== null; G = G.nextSibling) B._appendChild(B.importNode(G, !0));
                return B._updateDocTypeElement(), B
            }
        },
        isEqual: {
            value: function(Q) {
                return !0
            }
        },
        mutateValue: {
            value: function(A) {
                if (this.mutationHandler) this.mutationHandler({
                    type: yWA.VALUE,
                    target: A,
                    data: A.data
                })
            }
        },
        mutateAttr: {
            value: function(A, Q) {
                if (this.mutationHandler) this.mutationHandler({
                    type: yWA.ATTR,
                    target: A.ownerElement,
                    attr: A
                })
            }
        },
        mutateRemoveAttr: {
            value: function(A) {
                if (this.mutationHandler) this.mutationHandler({
                    type: yWA.REMOVE_ATTR,
                    target: A.ownerElement,
                    attr: A
                })
            }
        },
        mutateRemove: {
            value: function(A) {
                if (this.mutationHandler) this.mutationHandler({
                    type: yWA.REMOVE,
                    target: A.parentNode,
                    node: A
                });
                xg2(A)
            }
        },
        mutateInsert: {
            value: function(A) {
                if (yg2(A), this.mutationHandler) this.mutationHandler({
                    type: yWA.INSERT,
                    target: A.parentNode,
                    node: A
                })
            }
        },
        mutateMove: {
            value: function(A) {
                if (this.mutationHandler) this.mutationHandler({
                    type: yWA.MOVE,
                    target: A
                })
            }
        },
        addId: {
            value: function(Q, B) {
                var G = this.byId[Q];
                if (!G) this.byId[Q] = B;
                else {
                    if (!(G instanceof sh)) G = new sh(G), this.byId[Q] = G;
                    G.add(B)
                }
            }
        },
        delId: {
            value: function(Q, B) {
                var G = this.byId[Q];
                if (Z7.assert(G), G instanceof sh) {
                    if (G.del(B), G.length === 1) this.byId[Q] = G.downgrade()
                } else this.byId[Q] = void 0
            }
        },
        _resolve: {
            value: function(A) {
                return new Pg2(this._documentBaseURL).resolve(A)
            }
        },
        _documentBaseURL: {
            get: function() {
                var A = this._address;
                if (A === "about:blank") A = "/";
                var Q = this.querySelector("base[href]");
                if (Q) return new Pg2(A).resolve(Q.getAttribute("href"));
                return A
            }
        },
        _templateDoc: {
            get: function() {
                if (!this._templateDocCache) {
                    var A = new qTA(this.isHTML, this._address);
                    this._templateDocCache = A._templateDocCache = A
                }
                return this._templateDocCache
            }
        },
        querySelector: {
            value: function(A) {
                return jg2(A, this)[0]
            }
        },
        querySelectorAll: {
            value: function(A) {
                var Q = jg2(A, this);
                return Q.item ? Q : new rn5(Q)
            }
        }
    });
    var Wa5 = ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"];
    Wa5.forEach(function(A) {
        Object.defineProperty(qTA.prototype, "on" + A, {
            get: function() {
                return this._getEventHandler(A)
            },
            set: function(Q) {
                this._setEventHandler(A, Q)
            }
        })
    });

    function _g2(A, Q) {
        if (A && A.isHTML) {
            for (var B = A.firstChild; B !== null; B = B.nextSibling)
                if (B.nodeType === XC.ELEMENT_NODE && B.localName === Q && B.namespaceURI === vWA.HTML) return B
        }
        return null
    }

    function Xa5(A) {
        if (A._nid = A.ownerDocument._nextnid++, A.ownerDocument._nodes[A._nid] = A, A.nodeType === XC.ELEMENT_NODE) {
            var Q = A.getAttribute("id");
            if (Q) A.ownerDocument.addId(Q, A);
            if (A._roothook) A._roothook()
        }
    }

    function Fa5(A) {
        if (A.nodeType === XC.ELEMENT_NODE) {
            var Q = A.getAttribute("id");
            if (Q) A.ownerDocument.delId(Q, A)
        }
        A.ownerDocument._nodes[A._nid] = void 0, A._nid = void 0
    }

    function yg2(A) {
        if (Xa5(A), A.nodeType === XC.ELEMENT_NODE)
            for (var Q = A.firstChild; Q !== null; Q = Q.nextSibling) yg2(Q)
    }

    function xg2(A) {
        Fa5(A);
        for (var Q = A.firstChild; Q !== null; Q = Q.nextSibling) xg2(Q)
    }

    function vg2(A, Q) {
        if (A.ownerDocument = Q, A._lastModTime = void 0, Object.prototype.hasOwnProperty.call(A, "_tagName")) A._tagName = void 0;
        for (var B = A.firstChild; B !== null; B = B.nextSibling) vg2(B, Q)
    }

    function sh(A) {
        this.nodes = Object.create(null), this.nodes[A._nid] = A, this.length = 1, this.firstNode = void 0
    }
    sh.prototype.add = function(A) {
        if (!this.nodes[A._nid]) this.nodes[A._nid] = A, this.length++, this.firstNode = void 0
    };
    sh.prototype.del = function(A) {
        if (this.nodes[A._nid]) delete this.nodes[A._nid], this.length--, this.firstNode = void 0
    };
    sh.prototype.getFirst = function() {
        if (!this.firstNode) {
            var A;
            for (A in this.nodes)
                if (this.firstNode === void 0 || this.firstNode.compareDocumentPosition(this.nodes[A]) & XC.DOCUMENT_POSITION_PRECEDING) this.firstNode = this.nodes[A]
        }
        return this.firstNode
    };
    sh.prototype.downgrade = function() {
        if (this.length === 1) {
            var A;
            for (A in this.nodes) return this.nodes[A]
        }
        return this
    }
});
var w31 = U((JYZ, hg2) => {
    hg2.exports = $31;
    var Va5 = mD(),
        fg2 = _70(),
        Ka5 = W31();

    function $31(A, Q, B, G) {
        fg2.call(this), this.nodeType = Va5.DOCUMENT_TYPE_NODE, this.ownerDocument = A || null, this.name = Q, this.publicId = B || "", this.systemId = G || ""
    }
    $31.prototype = Object.create(fg2.prototype, {
        nodeName: {
            get: function() {
                return this.name
            }
        },
        nodeValue: {
            get: function() {
                return null
            },
            set: function() {}
        },
        clone: {
            value: function() {
                return new $31(this.ownerDocument, this.name, this.publicId, this.systemId)
            }
        },
        isEqual: {
            value: function(Q) {
                return this.name === Q.name && this.publicId === Q.publicId && this.systemId === Q.systemId
            }
        }
    });
    Object.defineProperties($31.prototype, Ka5)
});
var T31 = U((WYZ, Ju2) => {
    Ju2.exports = x3;
    var Da5 = U31(),
        Ha5 = w31(),
        GG0 = mD(),
        h9 = uJ().NAMESPACE,
        eg2 = E31(),
        d7 = eg2.elements,
        j0A = Function.prototype.apply.bind(Array.prototype.push),
        q31 = -1,
        bWA = 1,
        FC = 2,
        Z5 = 3,
        Ty = 4,
        Ca5 = 5,
        Ea5 = [],
        za5 = /^HTML$|^-\/\/W3O\/\/DTD W3 HTML Strict 3\.0\/\/EN\/\/$|^-\/W3C\/DTD HTML 4\.0 Transitional\/EN$|^\+\/\/Silmaril\/\/dtd html Pro v0r11 19970101\/\/|^-\/\/AdvaSoft Ltd\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/AS\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict\/\/|^-\/\/IETF\/\/DTD HTML 2\.0\/\/|^-\/\/IETF\/\/DTD HTML 2\.1E\/\/|^-\/\/IETF\/\/DTD HTML 3\.0\/\/|^-\/\/IETF\/\/DTD HTML 3\.2 Final\/\/|^-\/\/IETF\/\/DTD HTML 3\.2\/\/|^-\/\/IETF\/\/DTD HTML 3\/\/|^-\/\/IETF\/\/DTD HTML Level 0\/\/|^-\/\/IETF\/\/DTD HTML Level 1\/\/|^-\/\/IETF\/\/DTD HTML Level 2\/\/|^-\/\/IETF\/\/DTD HTML Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 0\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict\/\/|^-\/\/IETF\/\/DTD HTML\/\/|^-\/\/Metrius\/\/DTD Metrius Presentational\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 Tables\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 Tables\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD HTML\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD Strict HTML\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML 2\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended 1\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended Relaxed 1\.0\/\/|^-\/\/SoftQuad Software\/\/DTD HoTMetaL PRO 6\.0::19990601::extensions to HTML 4\.0\/\/|^-\/\/SoftQuad\/\/DTD HoTMetaL PRO 4\.0::19971010::extensions to HTML 4\.0\/\/|^-\/\/Spyglass\/\/DTD HTML 2\.0 Extended\/\/|^-\/\/SQ\/\/DTD HTML 2\.0 HoTMetaL \+ extensions\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava HTML\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava Strict HTML\/\/|^-\/\/W3C\/\/DTD HTML 3 1995-03-24\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Draft\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Final\/\/|^-\/\/W3C\/\/DTD HTML 3\.2\/\/|^-\/\/W3C\/\/DTD HTML 3\.2S Draft\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Transitional\/\/|^-\/\/W3C\/\/DTD HTML Experimental 19960712\/\/|^-\/\/W3C\/\/DTD HTML Experimental 970421\/\/|^-\/\/W3C\/\/DTD W3 HTML\/\/|^-\/\/W3O\/\/DTD W3 HTML 3\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML 2\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML\/\//i,
        Ua5 = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
        gg2 = /^-\/\/W3C\/\/DTD HTML 4\.01 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.01 Transitional\/\//i,
        $a5 = /^-\/\/W3C\/\/DTD XHTML 1\.0 Frameset\/\/|^-\/\/W3C\/\/DTD XHTML 1\.0 Transitional\/\//i,
        _0A = Object.create(null);