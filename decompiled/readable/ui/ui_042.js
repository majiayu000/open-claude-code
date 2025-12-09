/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.135Z
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 42/53
 * Lines: 354416 - 355915 (1500 lines)
 * Original file: cli.js
 */

        },
        setNamedItem: {
            value: PWA.nyi
        },
        setNamedItemNS: {
            value: PWA.nyi
        },
        removeNamedItem: {
            value: function(Q) {
                var B = this.element.getAttributeNode(Q);
                if (B) return this.element.removeAttribute(Q), B;
                PWA.NotFoundError()
            }
        },
        removeNamedItemNS: {
            value: function(Q, B) {
                var G = this.element.getAttributeNodeNS(Q, B);
                if (G) return this.element.removeAttributeNS(Q, B), G;
                PWA.NotFoundError()
            }
        }
    })
});
var SWA = U((vIZ, wh2) => {
    wh2.exports = _n;
    var O70 = G31(),
        rY = uJ(),
        Ry = rY.NAMESPACE,
        F31 = E70(),
        PP = mD(),
        R70 = T0A(),
        Fn5 = Z70(),
        X31 = Qh2(),
        jWA = t51(),
        Vn5 = U70(),
        T70 = J31(),
        zh2 = B31(),
        Kn5 = W31(),
        Dn5 = L70(),
        Uh2 = M70(),
        Eh2 = Object.create(null);

function _n(A, Q, B, G) {
        zh2.call(this), this.nodeType = PP.ELEMENT_NODE, this.ownerDocument = A, this.localName = Q, this.namespaceURI = B, this.prefix = G, this._tagName = void 0, this._attrsByQName = Object.create(null), this._attrsByLName = Object.create(null), this._attrKeys = []
    }

function P70(A, Q) {
        if (A.nodeType === PP.TEXT_NODE) Q.push(A._data);
        else
            for (var B = 0, G = A.childNodes.length; B < G; B++) P70(A.childNodes[B], Q)
    }
    _n.prototype = Object.create(zh2.prototype, {
        isHTML: {
            get: function() {
                return this.namespaceURI === Ry.HTML && this.ownerDocument.isHTML
            }
        },
        tagName: {
            get: function() {
                if (this._tagName === void 0) {
                    var Q;
                    if (this.prefix === null) Q = this.localName;
                    else Q = this.prefix + ":" + this.localName;
                    if (this.isHTML) {
                        var B = Eh2[Q];
                        if (!B) Eh2[Q] = B = rY.toASCIIUpperCase(Q);
                        Q = B
                    }
                    this._tagName = Q
                }
                return this._tagName
            }
        },
        nodeName: {
            get: function() {
                return this.tagName
            }
        },
        nodeValue: {
            get: function() {
                return null
            },
            set: function() {}
        },
        textContent: {
            get: function() {
                var A = [];
                return P70(this, A), A.join("")
            },
            set: function(A) {
                if (this.removeChildren(), A !== null && A !== void 0 && A !== "") this._appendChild(this.ownerDocument.createTextNode(A))
            }
        },
        innerText: {
            get: function() {
                var A = [];
                return P70(this, A), A.join("").replace(/[ \t\n\f\r]+/g, " ").trim()
            },
            set: function(A) {
                if (this.removeChildren(), A !== null && A !== void 0 && A !== "") this._appendChild(this.ownerDocument.createTextNode(A))
            }
        },
        innerHTML: {
            get: function() {
                return this.serialize()
            },
            set: rY.nyi
        },
        outerHTML: {
            get: function() {
                return Fn5.serializeOne(this, {
                    nodeType: 0
                })
            },
            set: function(A) {
                var Q = this.ownerDocument,
                    B = this.parentNode;
                if (B === null) return;
                if (B.nodeType === PP.DOCUMENT_NODE) rY.NoModificationAllowedError();
                if (B.nodeType === PP.DOCUMENT_FRAGMENT_NODE) B = B.ownerDocument.createElement("body");
                var G = Q.implementation.mozHTMLParser(Q._address, B);
                G.parse(A === null ? "" : String(A), !0), this.replaceWith(G._asDocumentFragment())
            }
        },
        _insertAdjacent: {
            value: function(Q, B) {
                var G = !1;
                switch (Q) {
                    case "beforebegin":
                        G = !0;
                    case "afterend":
                        var Z = this.parentNode;
                        if (Z === null) return null;
                        return Z.insertBefore(B, G ? this : this.nextSibling);
                    case "afterbegin":
                        G = !0;
                    case "beforeend":
                        return this.insertBefore(B, G ? this.firstChild : null);
                    default:
                        return rY.SyntaxError()
                }
            }
        },
        insertAdjacentElement: {
            value: function(Q, B) {
                if (B.nodeType !== PP.ELEMENT_NODE) throw TypeError("not an element");
                return Q = rY.toASCIILowerCase(String(Q)), this._insertAdjacent(Q, B)
            }
        },
        insertAdjacentText: {
            value: function(Q, B) {
                var G = this.ownerDocument.createTextNode(B);
                Q = rY.toASCIILowerCase(String(Q)), this._insertAdjacent(Q, G)
            }
        },
        insertAdjacentHTML: {
            value: function(Q, B) {
                Q = rY.toASCIILowerCase(String(Q)), B = String(B);
                var G;
                switch (Q) {
                    case "beforebegin":
                    case "afterend":
                        if (G = this.parentNode, G === null || G.nodeType === PP.DOCUMENT_NODE) rY.NoModificationAllowedError();
                        break;
                    case "afterbegin":
                    case "beforeend":
                        G = this;
                        break;
                    default:
                        rY.SyntaxError()
                }
                if (!(G instanceof _n) || G.ownerDocument.isHTML && G.localName === "html" && G.namespaceURI === Ry.HTML) G = G.ownerDocument.createElementNS(Ry.HTML, "body");
                var Z = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, G);
                Z.parse(B, !0), this._insertAdjacent(Q, Z._asDocumentFragment())
            }
        },
        children: {
            get: function() {
                if (!this._children) this._children = new $h2(this);
                return this._children
            }
        },
        attributes: {
            get: function() {
                if (!this._attributes) this._attributes = new S70(this);
                return this._attributes
            }
        },
        firstElementChild: {
            get: function() {
                for (var A = this.firstChild; A !== null; A = A.nextSibling)
                    if (A.nodeType === PP.ELEMENT_NODE) return A;
                return null
            }
        },
        lastElementChild: {
            get: function() {
                for (var A = this.lastChild; A !== null; A = A.previousSibling)
                    if (A.nodeType === PP.ELEMENT_NODE) return A;
                return null
            }
        },
        childElementCount: {
            get: function() {
                return this.children.length
            }
        },
        nextElement: {
            value: function(A) {
                if (!A) A = this.ownerDocument.documentElement;
                var Q = this.firstElementChild;
                if (!Q) {
                    if (this === A) return null;
                    Q = this.nextElementSibling
                }
                if (Q) return Q;
                for (var B = this.parentElement; B && B !== A; B = B.parentElement)
                    if (Q = B.nextElementSibling, Q) return Q;
                return null
            }
        },
        getElementsByTagName: {
            value: function(Q) {
                var B;
                if (!Q) return new R70;
                if (Q === "*") B = function() {
                    return !0
                };
                else if (this.isHTML) B = Hn5(Q);
                else B = j70(Q);
                return new X31(this, B)
            }
        },
        getElementsByTagNameNS: {
            value: function(Q, B) {
                var G;
                if (Q === "*" && B === "*") G = function() {
                    return !0
                };
                else if (Q === "*") G = j70(B);
                else if (B === "*") G = Cn5(Q);
                else G = En5(Q, B);
                return new X31(this, G)
            }
        },
        getElementsByClassName: {
            value: function(Q) {
                if (Q = String(Q).trim(), Q === "") {
                    var B = new R70;
                    return B
                }
                return Q = Q.split(/[ \t\r\n\f]+/), new X31(this, zn5(Q))
            }
        },
        getElementsByName: {
            value: function(Q) {
                return new X31(this, Un5(String(Q)))
            }
        },
        clone: {
            value: function() {
                var Q;
                if (this.namespaceURI !== Ry.HTML || this.prefix || !this.ownerDocument.isHTML) Q = this.ownerDocument.createElementNS(this.namespaceURI, this.prefix !== null ? this.prefix + ":" + this.localName : this.localName);
                else Q = this.ownerDocument.createElement(this.localName);
                for (var B = 0, G = this._attrKeys.length; B < G; B++) {
                    var Z = this._attrKeys[B],
                        I = this._attrsByLName[Z],
                        Y = I.cloneNode();
                    Y._setOwnerElement(Q), Q._attrsByLName[Z] = Y, Q._addQName(Y)
                }
                return Q._attrKeys = this._attrKeys.concat(), Q
            }
        },
        isEqual: {
            value: function(Q) {
                if (this.localName !== Q.localName || this.namespaceURI !== Q.namespaceURI || this.prefix !== Q.prefix || this._numattrs !== Q._numattrs) return !1;
                for (var B = 0, G = this._numattrs; B < G; B++) {
                    var Z = this._attr(B);
                    if (!Q.hasAttributeNS(Z.namespaceURI, Z.localName)) return !1;
                    if (Q.getAttributeNS(Z.namespaceURI, Z.localName) !== Z.value) return !1
                }
                return !0
            }
        },
        _lookupNamespacePrefix: {
            value: function(Q, B) {
                if (this.namespaceURI && this.namespaceURI === Q && this.prefix !== null && B.lookupNamespaceURI(this.prefix) === Q) return this.prefix;
                for (var G = 0, Z = this._numattrs; G < Z; G++) {
                    var I = this._attr(G);
                    if (I.prefix === "xmlns" && I.value === Q && B.lookupNamespaceURI(I.localName) === Q) return I.localName
                }
                var Y = this.parentElement;
                return Y ? Y._lookupNamespacePrefix(Q, B) : null
            }
        },
        lookupNamespaceURI: {
            value: function(Q) {
                if (Q === "" || Q === void 0) Q = null;
                if (this.namespaceURI !== null && this.prefix === Q) return this.namespaceURI;
                for (var B = 0, G = this._numattrs; B < G; B++) {
                    var Z = this._attr(B);
                    if (Z.namespaceURI === Ry.XMLNS) {
                        if (Z.prefix === "xmlns" && Z.localName === Q || Q === null && Z.prefix === null && Z.localName === "xmlns") return Z.value || null
                    }
                }
                var I = this.parentElement;
                return I ? I.lookupNamespaceURI(Q) : null
            }
        },
        getAttribute: {
            value: function(Q) {
                var B = this.getAttributeNode(Q);
                return B ? B.value : null
            }
        },
        getAttributeNS: {
            value: function(Q, B) {
                var G = this.getAttributeNodeNS(Q, B);
                return G ? G.value : null
            }
        },
        getAttributeNode: {
            value: function(Q) {
                if (Q = String(Q), /[A-Z]/.test(Q) && this.isHTML) Q = rY.toASCIILowerCase(Q);
                var B = this._attrsByQName[Q];
                if (!B) return null;
                if (Array.isArray(B)) B = B[0];
                return B
            }
        },
        getAttributeNodeNS: {
            value: function(Q, B) {
                Q = Q === void 0 || Q === null ? "" : String(Q), B = String(B);
                var G = this._attrsByLName[Q + "|" + B];
                return G ? G : null
            }
        },
        hasAttribute: {
            value: function(Q) {
                if (Q = String(Q), /[A-Z]/.test(Q) && this.isHTML) Q = rY.toASCIILowerCase(Q);
                return this._attrsByQName[Q] !== void 0
            }
        },
        hasAttributeNS: {
            value: function(Q, B) {
                Q = Q === void 0 || Q === null ? "" : String(Q), B = String(B);
                var G = Q + "|" + B;
                return this._attrsByLName[G] !== void 0
            }
        },
        hasAttributes: {
            value: function() {
                return this._numattrs > 0
            }
        },
        toggleAttribute: {
            value: function(Q, B) {
                if (Q = String(Q), !O70.isValidName(Q)) rY.InvalidCharacterError();
                if (/[A-Z]/.test(Q) && this.isHTML) Q = rY.toASCIILowerCase(Q);
                var G = this._attrsByQName[Q];
                if (G === void 0) {
                    if (B === void 0 || B === !0) return this._setAttribute(Q, ""), !0;
                    return !1
                } else {
                    if (B === void 0 || B === !1) return this.removeAttribute(Q), !1;
                    return !0
                }
            }
        },
        _setAttribute: {
            value: function(Q, B) {
                var G = this._attrsByQName[Q],
                    Z;
                if (!G) G = this._newattr(Q), Z = !0;
                else if (Array.isArray(G)) G = G[0];
                if (G.value = B, this._attributes) this._attributes[Q] = G;
                if (Z && this._newattrhook) this._newattrhook(Q, B)
            }
        },
        setAttribute: {
            value: function(Q, B) {
                if (Q = String(Q), !O70.isValidName(Q)) rY.InvalidCharacterError();
                if (/[A-Z]/.test(Q) && this.isHTML) Q = rY.toASCIILowerCase(Q);
                this._setAttribute(Q, String(B))
            }
        },
        _setAttributeNS: {
            value: function(Q, B, G) {
                var Z = B.indexOf(":"),
                    I, Y;
                if (Z < 0) I = null, Y = B;
                else I = B.substring(0, Z), Y = B.substring(Z + 1);
                if (Q === "" || Q === void 0) Q = null;
                var J = (Q === null ? "" : Q) + "|" + Y,
                    W = this._attrsByLName[J],
                    X;
                if (!W) {
                    if (W = new KTA(this, Y, I, Q), X = !0, this._attrsByLName[J] = W, this._attributes) this._attributes[this._attrKeys.length] = W;
                    this._attrKeys.push(J), this._addQName(W)
                }
                if (W.value = G, X && this._newattrhook) this._newattrhook(B, G)
            }
        },
        setAttributeNS: {
            value: function(Q, B, G) {
                if (Q = Q === null || Q === void 0 || Q === "" ? null : String(Q), B = String(B), !O70.isValidQName(B)) rY.InvalidCharacterError();
                var Z = B.indexOf(":"),
                    I = Z < 0 ? null : B.substring(0, Z);
                if (I !== null && Q === null || I === "xml" && Q !== Ry.XML || (B === "xmlns" || I === "xmlns") && Q !== Ry.XMLNS || Q === Ry.XMLNS && !(B === "xmlns" || I === "xmlns")) rY.NamespaceError();
                this._setAttributeNS(Q, B, String(G))
            }
        },
        setAttributeNode: {
            value: function(Q) {
                if (Q.ownerElement !== null && Q.ownerElement !== this) throw new jWA(jWA.INUSE_ATTRIBUTE_ERR);
                var B = null,
                    G = this._attrsByQName[Q.name];
                if (G) {
                    if (!Array.isArray(G)) G = [G];
                    if (G.some(function(Z) {
                            return Z === Q
                        })) return Q;
                    else if (Q.ownerElement !== null) throw new jWA(jWA.INUSE_ATTRIBUTE_ERR);
                    G.forEach(function(Z) {
                        this.removeAttributeNode(Z)
                    }, this), B = G[0]
                }
                return this.setAttributeNodeNS(Q), B
            }
        },
        setAttributeNodeNS: {
            value: function(Q) {
                if (Q.ownerElement !== null) throw new jWA(jWA.INUSE_ATTRIBUTE_ERR);
                var B = Q.namespaceURI,
                    G = (B === null ? "" : B) + "|" + Q.localName,
                    Z = this._attrsByLName[G];
                if (Z) this.removeAttributeNode(Z);
                if (Q._setOwnerElement(this), this._attrsByLName[G] = Q, this._attributes) this._attributes[this._attrKeys.length] = Q;
                if (this._attrKeys.push(G), this._addQName(Q), this._newattrhook) this._newattrhook(Q.name, Q.value);
                return Z || null
            }
        },
        removeAttribute: {
            value: function(Q) {
                if (Q = String(Q), /[A-Z]/.test(Q) && this.isHTML) Q = rY.toASCIILowerCase(Q);
                var B = this._attrsByQName[Q];
                if (!B) return;
                if (Array.isArray(B))
                    if (B.length > 2) B = B.shift();
                    else this._attrsByQName[Q] = B[1], B = B[0];
                else this._attrsByQName[Q] = void 0;
                var G = B.namespaceURI,
                    Z = (G === null ? "" : G) + "|" + B.localName;
                this._attrsByLName[Z] = void 0;
                var I = this._attrKeys.indexOf(Z);
                if (this._attributes) Array.prototype.splice.call(this._attributes, I, 1), this._attributes[Q] = void 0;
                this._attrKeys.splice(I, 1);
                var Y = B.onchange;
                if (B._setOwnerElement(null), Y) Y.call(B, this, B.localName, B.value, null);
                if (this.rooted) this.ownerDocument.mutateRemoveAttr(B)
            }
        },
        removeAttributeNS: {
            value: function(Q, B) {
                Q = Q === void 0 || Q === null ? "" : String(Q), B = String(B);
                var G = Q + "|" + B,
                    Z = this._attrsByLName[G];
                if (!Z) return;
                this._attrsByLName[G] = void 0;
                var I = this._attrKeys.indexOf(G);
                if (this._attributes) Array.prototype.splice.call(this._attributes, I, 1);
                this._attrKeys.splice(I, 1), this._removeQName(Z);
                var Y = Z.onchange;
                if (Z._setOwnerElement(null), Y) Y.call(Z, this, Z.localName, Z.value, null);
                if (this.rooted) this.ownerDocument.mutateRemoveAttr(Z)
            }
        },
        removeAttributeNode: {
            value: function(Q) {
                var B = Q.namespaceURI,
                    G = (B === null ? "" : B) + "|" + Q.localName;
                if (this._attrsByLName[G] !== Q) rY.NotFoundError();
                return this.removeAttributeNS(B, Q.localName), Q
            }
        },
        getAttributeNames: {
            value: function() {
                var Q = this;
                return this._attrKeys.map(function(B) {
                    return Q._attrsByLName[B].name
                })
            }
        },
        _getattr: {
            value: function(Q) {
                var B = this._attrsByQName[Q];
                return B ? B.value : null
            }
        },
        _setattr: {
            value: function(Q, B) {
                var G = this._attrsByQName[Q],
                    Z;
                if (!G) G = this._newattr(Q), Z = !0;
                if (G.value = String(B), this._attributes) this._attributes[Q] = G;
                if (Z && this._newattrhook) this._newattrhook(Q, B)
            }
        },
        _newattr: {
            value: function(Q) {
                var B = new KTA(this, Q, null, null),
                    G = "|" + Q;
                if (this._attrsByQName[Q] = B, this._attrsByLName[G] = B, this._attributes) this._attributes[this._attrKeys.length] = B;
                return this._attrKeys.push(G), B
            }
        },
        _addQName: {
            value: function(A) {
                var Q = A.name,
                    B = this._attrsByQName[Q];
                if (!B) this._attrsByQName[Q] = A;
                else if (Array.isArray(B)) B.push(A);
                else this._attrsByQName[Q] = [B, A];
                if (this._attributes) this._attributes[Q] = A
            }
        },
        _removeQName: {
            value: function(A) {
                var Q = A.name,
                    B = this._attrsByQName[Q];
                if (Array.isArray(B)) {
                    var G = B.indexOf(A);
                    if (rY.assert(G !== -1), B.length === 2) {
                        if (this._attrsByQName[Q] = B[1 - G], this._attributes) this._attributes[Q] = this._attrsByQName[Q]
                    } else if (B.splice(G, 1), this._attributes && this._attributes[Q] === A) this._attributes[Q] = B[0]
                } else if (rY.assert(B === A), this._attrsByQName[Q] = void 0, this._attributes) this._attributes[Q] = void 0
            }
        },
        _numattrs: {
            get: function() {
                return this._attrKeys.length
            }
        },
        _attr: {
            value: function(A) {
                return this._attrsByLName[this._attrKeys[A]]
            }
        },
        id: F31.property({
            name: "id"
        }),
        className: F31.property({
            name: "class"
        }),
        classList: {
            get: function() {
                var A = this;
                if (this._classList) return this._classList;
                var Q = new Vn5(function() {
                    return A.className || ""
                }, function(B) {
                    A.className = B
                });
                return this._classList = Q, Q
            },
            set: function(A) {
                this.className = A
            }
        },
        matches: {
            value: function(A) {
                return T70.matches(this, A)
            }
        },
        closest: {
            value: function(A) {
                var Q = this;
                do {
                    if (Q.matches && Q.matches(A)) return Q;
                    Q = Q.parentElement || Q.parentNode
                } while (Q !== null && Q.nodeType === PP.ELEMENT_NODE);
                return null
            }
        },
        querySelector: {
            value: function(A) {
                return T70(A, this)[0]
            }
        },
        querySelectorAll: {
            value: function(A) {
                var Q = T70(A, this);
                return Q.item ? Q : new R70(Q)
            }
        }
    });
    Object.defineProperties(_n.prototype, Kn5);
    Object.defineProperties(_n.prototype, Dn5);
    F31.registerChangeHandler(_n, "id", function(A, Q, B, G) {
        if (A.rooted) {
            if (B) A.ownerDocument.delId(B, A);
            if (G) A.ownerDocument.addId(G, A)
        }
    });
    F31.registerChangeHandler(_n, "class", function(A, Q, B, G) {
        if (A._classList) A._classList._update()
    });

function KTA(A, Q, B, G, Z) {
        this.localName = Q, this.prefix = B === null || B === "" ? null : "" + B, this.namespaceURI = G === null || G === "" ? null : "" + G, this.data = Z, this._setOwnerElement(A)
    }
    KTA.prototype = Object.create(Object.prototype, {
        ownerElement: {
            get: function() {
                return this._ownerElement
            }
        },
        _setOwnerElement: {
            value: function(Q) {
                if (this._ownerElement = Q, this.prefix === null && this.namespaceURI === null && Q) this.onchange = Q._attributeChangeHandlers[this.localName];
                else this.onchange = null
            }
        },
        name: {
            get: function() {
                return this.prefix ? this.prefix + ":" + this.localName : this.localName
            }
        },
        specified: {
            get: function() {
                return !0
            }
        },
        value: {
            get: function() {
                return this.data
            },
            set: function(A) {
                var Q = this.data;
                if (A = A === void 0 ? "" : A + "", A === Q) return;
                if (this.data = A, this.ownerElement) {
                    if (this.onchange) this.onchange(this.ownerElement, this.localName, Q, A);
                    if (this.ownerElement.rooted) this.ownerElement.ownerDocument.mutateAttr(this, Q)
                }
            }
        },
        cloneNode: {
            value: function(Q) {
                return new KTA(null, this.localName, this.prefix, this.namespaceURI, this.data)
            }
        },
        nodeType: {
            get: function() {
                return PP.ATTRIBUTE_NODE
            }
        },
        nodeName: {
            get: function() {
                return this.name
            }
        },
        nodeValue: {
            get: function() {
                return this.value
            },
            set: function(A) {
                this.value = A
            }
        },
        textContent: {
            get: function() {
                return this.value
            },
            set: function(A) {
                if (A === null || A === void 0) A = "";
                this.value = A
            }
        },
        innerText: {
            get: function() {
                return this.value
            },
            set: function(A) {
                if (A === null || A === void 0) A = "";
                this.value = A
            }
        }
    });
    _n._Attr = KTA;

function S70(A) {
        Uh2.call(this, A);
        for (var Q in A._attrsByQName) this[Q] = A._attrsByQName[Q];
        for (var B = 0; B < A._attrKeys.length; B++) this[B] = A._attrsByLName[A._attrKeys[B]]
    }
    S70.prototype = Object.create(Uh2.prototype, {
        length: {
            get: function() {
                return this.element._attrKeys.length
            },
            set: function() {}
        },
        item: {
            value: function(A) {
                if (A = A >>> 0, A >= this.length) return null;
                return this.element._attrsByLName[this.element._attrKeys[A]]
            }
        }
    });
    if (globalThis.Symbol?.iterator) S70.prototype[globalThis.Symbol.iterator] = function() {
        var A = 0,
            Q = this.length,
            B = this;
        return {
            next: function() {
                if (A < Q) return {
                    value: B.item(A++)
                };
                return {
                    done: !0
                }
            }
        }
    };

    function $h2(A) {
        this.element = A, this.updateCache()
    }
    $h2.prototype = Object.create(Object.prototype, {
        length: {
            get: function() {
                return this.updateCache(), this.childrenByNumber.length
            }
        },
        item: {
            value: function(Q) {
                return this.updateCache(), this.childrenByNumber[Q] || null
            }
        },
        namedItem: {
            value: function(Q) {
                return this.updateCache(), this.childrenByName[Q] || null
            }
        },
        namedItems: {
            get: function() {
                return this.updateCache(), this.childrenByName
            }
        },
        updateCache: {
            value: function() {
                var Q = /^(a|applet|area|embed|form|frame|frameset|iframe|img|object)$/;
                if (this.lastModTime !== this.element.lastModTime) {
                    this.lastModTime = this.element.lastModTime;
                    var B = this.childrenByNumber && this.childrenByNumber.length || 0;
                    for (var G = 0; G < B; G++) this[G] = void 0;
                    this.childrenByNumber = [], this.childrenByName = Object.create(null);
                    for (var Z = this.element.firstChild; Z !== null; Z = Z.nextSibling)
                        if (Z.nodeType === PP.ELEMENT_NODE) {
                            this[this.childrenByNumber.length] = Z, this.childrenByNumber.push(Z);
                            var I = Z.getAttribute("id");
                            if (I && !this.childrenByName[I]) this.childrenByName[I] = Z;
                            var Y = Z.getAttribute("name");
                            if (Y && this.element.namespaceURI === Ry.HTML && Q.test(this.element.localName) && !this.childrenByName[Y]) this.childrenByName[I] = Z
                        }
                }
            }
        }
    });

function j70(A) {
        return function(Q) {
            return Q.localName === A
        }
    }

function Hn5(A) {
        var Q = rY.toASCIILowerCase(A);
        if (Q === A) return j70(A);
        return function(B) {
            return B.isHTML ? B.localName === Q : B.localName === A
        }
    }

function Cn5(A) {
        return function(Q) {
            return Q.namespaceURI === A
        }
    }

function En5(A, Q) {
        return function(B) {
            return B.namespaceURI === A && B.localName === Q
        }
    }

function zn5(A) {
        return function(Q) {
            return A.every(function(B) {
                return Q.classList.contains(B)
            })
        }
    }

function Un5(A) {
        return function(Q) {
            if (Q.namespaceURI !== Ry.HTML) return !1;
            return Q.getAttribute("name") === A
        }
    }
});
var _70 = U((bIZ, Oh2) => {
    Oh2.exports = Mh2;
    var Nh2 = mD(),
        $n5 = T0A(),
        Lh2 = uJ(),
        qh2 = Lh2.HierarchyRequestError,
        wn5 = Lh2.NotFoundError;

function Mh2() {
        Nh2.call(this)
    }
    Mh2.prototype = Object.create(Nh2.prototype, {
        hasChildNodes: {
            value: function() {
                return !1
            }
        },
        firstChild: {
            value: null
        },
        lastChild: {
            value: null
        },
        insertBefore: {
            value: function(A, Q) {
                if (!A.nodeType) throw TypeError("not a node");
                qh2()
            }
        },
        replaceChild: {
            value: function(A, Q) {
                if (!A.nodeType) throw TypeError("not a node");
                qh2()
            }
        },
        removeChild: {
            value: function(A) {
                if (!A.nodeType) throw TypeError("not a node");
                wn5()
            }
        },
        removeChildren: {
            value: function() {}
        },
        childNodes: {
            get: function() {
                if (!this._childNodes) this._childNodes = new $n5;
                return this._childNodes
            }
        }
    })
});
var DTA = U((fIZ, Ph2) => {
    Ph2.exports = V31;
    var Th2 = _70(),
        Rh2 = uJ(),
        qn5 = W31(),
        Nn5 = L70();

function V31() {
        Th2.call(this)
    }
    V31.prototype = Object.create(Th2.prototype, {
        substringData: {
            value: function(Q, B) {
                if (arguments.length < 2) throw TypeError("Not enough arguments");
                if (Q = Q >>> 0, B = B >>> 0, Q > this.data.length || Q < 0 || B < 0) Rh2.IndexSizeError();
                return this.data.substring(Q, Q + B)
            }
        },
        appendData: {
            value: function(Q) {
                if (arguments.length < 1) throw TypeError("Not enough arguments");
                this.data += String(Q)
            }
        },
        insertData: {
            value: function(Q, B) {
                return this.replaceData(Q, 0, B)
            }
        },
        deleteData: {
            value: function(Q, B) {
                return this.replaceData(Q, B, "")
            }
        },
        replaceData: {
            value: function(Q, B, G) {
                var Z = this.data,
                    I = Z.length;
                if (Q = Q >>> 0, B = B >>> 0, G = String(G), Q > I || Q < 0) Rh2.IndexSizeError();
                if (Q + B > I) B = I - Q;
                var Y = Z.substring(0, Q),
                    J = Z.substring(Q + B);
                this.data = Y + G + J
            }
        },
        isEqual: {
            value: function(Q) {
                return this._data === Q._data
            }
        },
        length: {
            get: function() {
                return this.data.length
            }
        }
    });
    Object.defineProperties(V31.prototype, qn5);
    Object.defineProperties(V31.prototype, Nn5)
});
var y70 = U((hIZ, kh2) => {
    kh2.exports = k70;
    var jh2 = uJ(),
        Sh2 = mD(),
        _h2 = DTA();

function k70(A, Q) {
        _h2.call(this), this.nodeType = Sh2.TEXT_NODE, this.ownerDocument = A, this._data = Q, this._index = void 0
    }

var HTA = {
        get: function() {
            return this._data
        },
        set: function(A) {
            if (A === null || A === void 0) A = "";
            else A = String(A);
            if (A === this._data) return;
            if (this._data = A, this.rooted) this.ownerDocument.mutateValue(this);
            if (this.parentNode && this.parentNode._textchangehook) this.parentNode._textchangehook(this)
        }
    };
    k70.prototype = Object.create(_h2.prototype, {
        nodeName: {
            value: "#text"
        },
        nodeValue: HTA,
        textContent: HTA,
        innerText: HTA,
        data: {
            get: HTA.get,
            set: function(A) {
                HTA.set.call(this, A === null ? "" : String(A))
            }
        },
        splitText: {
            value: function(Q) {
                if (Q > this._data.length || Q < 0) jh2.IndexSizeError();
                var B = this._data.substring(Q),
                    G = this.ownerDocument.createTextNode(B);
                this.data = this.data.substring(0, Q);
                var Z = this.parentNode;
                if (Z !== null) Z.insertBefore(G, this.nextSibling);
                return G
            }
        },
        wholeText: {
            get: function() {
                var Q = this.textContent;
                for (var B = this.nextSibling; B; B = B.nextSibling) {
                    if (B.nodeType !== Sh2.TEXT_NODE) break;
                    Q += B.textContent
                }
                return Q
            }
        },
        replaceWholeText: {
            value: jh2.nyi
        },
        clone: {
            value: function() {
                return new k70(this.ownerDocument, this._data)
            }
        }
    })
});
var v70 = U((gIZ, xh2) => {
    xh2.exports = x70;
    var Ln5 = mD(),
        yh2 = DTA();

function x70(A, Q) {
        yh2.call(this), this.nodeType = Ln5.COMMENT_NODE, this.ownerDocument = A, this._data = Q
    }

var CTA = {
        get: function() {
            return this._data
        },
        set: function(A) {
            if (A === null || A === void 0) A = "";
            else A = String(A);
            if (this._data = A, this.rooted) this.ownerDocument.mutateValue(this)
        }
    };
    x70.prototype = Object.create(yh2.prototype, {
        nodeName: {
            value: "#comment"
        },
        nodeValue: CTA,
        textContent: CTA,
        innerText: CTA,
        data: {
            get: CTA.get,
            set: function(A) {
                CTA.set.call(this, A === null ? "" : String(A))
            }
        },
        clone: {
            value: function() {
                return new x70(this.ownerDocument, this._data)
            }
        }
    })
});
var f70 = U((uIZ, fh2) => {
    fh2.exports = b70;
    var Mn5 = mD(),
        On5 = T0A(),
        bh2 = B31(),
        K31 = SWA(),
        Rn5 = J31(),
        vh2 = uJ();

function b70(A) {
        bh2.call(this), this.nodeType = Mn5.DOCUMENT_FRAGMENT_NODE, this.ownerDocument = A
    }
    b70.prototype = Object.create(bh2.prototype, {
        nodeName: {
            value: "#document-fragment"
        },
        nodeValue: {
            get: function() {
                return null
            },
            set: function() {}
        },
        textContent: Object.getOwnPropertyDescriptor(K31.prototype, "textContent"),
        innerText: Object.getOwnPropertyDescriptor(K31.prototype, "innerText"),
        querySelector: {
            value: function(A) {
                var Q = this.querySelectorAll(A);
                return Q.length ? Q[0] : null
            }
        },
        querySelectorAll: {
            value: function(A) {
                var Q = Object.create(this);
                Q.isHTML = !0, Q.getElementsByTagName = K31.prototype.getElementsByTagName, Q.nextElement = Object.getOwnPropertyDescriptor(K31.prototype, "firstElementChild").get;
                var B = Rn5(A, Q);
                return B.item ? B : new On5(B)
            }
        },
        clone: {
            value: function() {
                return new b70(this.ownerDocument)
            }
        },
        isEqual: {
            value: function(Q) {
                return !0
            }
        },
        innerHTML: {
            get: function() {
                return this.serialize()
            },
            set: vh2.nyi
        },
        outerHTML: {
            get: function() {
                return this.serialize()
            },
            set: vh2.nyi
        }
    })
});
var g70 = U((mIZ, gh2) => {
    gh2.exports = h70;
    var Tn5 = mD(),
        hh2 = DTA();

function h70(A, Q, B) {
        hh2.call(this), this.nodeType = Tn5.PROCESSING_INSTRUCTION_NODE, this.ownerDocument = A, this.target = Q, this._data = B
    }

var ETA = {
        get: function() {
            return this._data
        },
        set: function(A) {
            if (A === null || A === void 0) A = "";
            else A = String(A);
            if (this._data = A, this.rooted) this.ownerDocument.mutateValue(this)
        }
    };
    h70.prototype = Object.create(hh2.prototype, {
        nodeName: {
            get: function() {
                return this.target
            }
        },
        nodeValue: ETA,
        textContent: ETA,
        innerText: ETA,
        data: {
            get: ETA.get,
            set: function(A) {
                ETA.set.call(this, A === null ? "" : String(A))
            }
        },
        clone: {
            value: function() {
                return new h70(this.ownerDocument, this.target, this._data)
            }
        },
        isEqual: {
            value: function(Q) {
                return this.target === Q.target && this._data === Q._data
            }
        }
    })
});
var zTA = U((dIZ, uh2) => {
    var u70 = {
        FILTER_ACCEPT: 1,
        FILTER_REJECT: 2,
        FILTER_SKIP: 3,
        SHOW_ALL: 4294967295,
        SHOW_ELEMENT: 1,
        SHOW_ATTRIBUTE: 2,
        SHOW_TEXT: 4,
        SHOW_CDATA_SECTION: 8,
        SHOW_ENTITY_REFERENCE: 16,
        SHOW_ENTITY: 32,
        SHOW_PROCESSING_INSTRUCTION: 64,
        SHOW_COMMENT: 128,
        SHOW_DOCUMENT: 256,
        SHOW_DOCUMENT_TYPE: 512,
        SHOW_DOCUMENT_FRAGMENT: 1024,
        SHOW_NOTATION: 2048
    };
    uh2.exports = u70.constructor = u70.prototype = u70
});
var d70 = U((pIZ, dh2) => {
    var cIZ = dh2.exports = {
        nextSkippingChildren: Pn5,
        nextAncestorSibling: m70,
        next: jn5,
        previous: Sn5,
        deepLastChild: mh2
    };

function Pn5(A, Q) {
        if (A === Q) return null;
        if (A.nextSibling !== null) return A.nextSibling;
        return m70(A, Q)
    }

function m70(A, Q) {
        for (A = A.parentNode; A !== null; A = A.parentNode) {
            if (A === Q) return null;
            if (A.nextSibling !== null) return A.nextSibling
        }
        return null
    }

function jn5(A, Q) {
        var B = A.firstChild;
        if (B !== null) return B;
        if (A === Q) return null;
        if (B = A.nextSibling, B !== null) return B;
        return m70(A, Q)
    }

function mh2(A) {
        while (A.lastChild) A = A.lastChild;
        return A
    }

function Sn5(A, Q) {
        var B = A.previousSibling;
        if (B !== null) return mh2(B);
        if (B = A.parentNode, B === Q) return null;
        return B
    }
});
var sh2 = U((lIZ, ah2) => {
    ah2.exports = nh2;
    var _n5 = mD(),
        dD = zTA(),
        ch2 = d70(),
        ih2 = uJ(),
        c70 = {
            first: "firstChild",
            last: "lastChild",
            next: "firstChild",
            previous: "lastChild"
        },
        p70 = {
            first: "nextSibling",
            last: "previousSibling",
            next: "nextSibling",
            previous: "previousSibling"
        };

function ph2(A, Q) {
        var B, G, Z, I, Y;
        G = A._currentNode[c70[Q]];
        while (G !== null) {
            if (I = A._internalFilter(G), I === dD.FILTER_ACCEPT) return A._currentNode = G, G;
            if (I === dD.FILTER_SKIP) {
                if (B = G[c70[Q]], B !== null) {
                    G = B;
                    continue
                }
            }
            while (G !== null) {
                if (Y = G[p70[Q]], Y !== null) {
                    G = Y;
                    break
                }
                if (Z = G.parentNode, Z === null || Z === A.root || Z === A._currentNode) return null;
                else G = Z
            }
        }
        return null
    }

function lh2(A, Q) {
        var B, G, Z;
        if (B = A._currentNode, B === A.root) return null;
        while (!0) {
            Z = B[p70[Q]];
            while (Z !== null) {
                if (B = Z, G = A._internalFilter(B), G === dD.FILTER_ACCEPT) return A._currentNode = B, B;
                if (Z = B[c70[Q]], G === dD.FILTER_REJECT || Z === null) Z = B[p70[Q]]
            }
            if (B = B.parentNode, B === null || B === A.root) return null;
            if (A._internalFilter(B) === dD.FILTER_ACCEPT) return null
        }
    }

function nh2(A, Q, B) {
        if (!A || !A.nodeType) ih2.NotSupportedError();
        this._root = A, this._whatToShow = Number(Q) || 0, this._filter = B || null, this._active = !1, this._currentNode = A
    }
    Object.defineProperties(nh2.prototype, {
        root: {
            get: function() {
                return this._root
            }
        },
        whatToShow: {
            get: function() {
                return this._whatToShow
            }
        },
        filter: {
            get: function() {
                return this._filter
            }
        },
        currentNode: {
            get: function() {
                return this._currentNode
            },
            set: function(Q) {
                if (!(Q instanceof _n5)) throw TypeError("Not a Node");
                this._currentNode = Q
            }
        },
        _internalFilter: {
            value: function(Q) {
                var B, G;
                if (this._active) ih2.InvalidStateError();
                if (!(1 << Q.nodeType - 1 & this._whatToShow)) return dD.FILTER_SKIP;
                if (G = this._filter, G === null) B = dD.FILTER_ACCEPT;
                else {
                    this._active = !0;
                    try {
                        if (typeof G === "function") B = G(Q);
                        else B = G.acceptNode(Q)
                    } finally {
                        this._active = !1
                    }
                }
                return +B
            }
        },
        parentNode: {
            value: function() {
                var Q = this._currentNode;
                while (Q !== this.root) {
                    if (Q = Q.parentNode, Q === null) return null;
                    if (this._internalFilter(Q) === dD.FILTER_ACCEPT) return this._currentNode = Q, Q
                }
                return null
            }
        },
        firstChild: {
            value: function() {
                return ph2(this, "first")
            }
        },
        lastChild: {
            value: function() {
                return ph2(this, "last")
            }
        },
        previousSibling: {
            value: function() {
                return lh2(this, "previous")
            }
        },
        nextSibling: {
            value: function() {
                return lh2(this, "next")
            }
        },
        previousNode: {
            value: function() {
                var Q, B, G, Z;
                Q = this._currentNode;
                while (Q !== this._root) {
                    for (G = Q.previousSibling; G; G = Q.previousSibling) {
                        if (Q = G, B = this._internalFilter(Q), B === dD.FILTER_REJECT) continue;
                        for (Z = Q.lastChild; Z; Z = Q.lastChild)
                            if (Q = Z, B = this._internalFilter(Q), B === dD.FILTER_REJECT) break;
                        if (B === dD.FILTER_ACCEPT) return this._currentNode = Q, Q
                    }
                    if (Q === this.root || Q.parentNode === null) return null;
                    if (Q = Q.parentNode, this._internalFilter(Q) === dD.FILTER_ACCEPT) return this._currentNode = Q, Q
                }
                return null
            }
        },
        nextNode: {
            value: function() {
                var Q, B, G, Z;
                Q = this._currentNode, B = dD.FILTER_ACCEPT;
                A: while (!0) {
                    for (G = Q.firstChild; G; G = Q.firstChild)
                        if (Q = G, B = this._internalFilter(Q), B === dD.FILTER_ACCEPT) return this._currentNode = Q, Q;
                        else if (B === dD.FILTER_REJECT) break;
                    for (Z = ch2.nextSkippingChildren(Q, this.root); Z; Z = ch2.nextSkippingChildren(Q, this.root))
                        if (Q = Z, B = this._internalFilter(Q), B === dD.FILTER_ACCEPT) return this._currentNode = Q, Q;
                        else if (B === dD.FILTER_SKIP) continue A;
                    return null
                }
            }
        },
        toString: {
            value: function() {
                return "[object TreeWalker]"
            }
        }
    })
});
var Qg2 = U((iIZ, Ag2) => {
    Ag2.exports = eh2;
    var l70 = zTA(),
        i70 = d70(),
        th2 = uJ();

function kn5(A, Q, B) {
        if (B) return i70.next(A, Q);
        else {
            if (A === Q) return null;
            return i70.previous(A, null)
        }
    }

function rh2(A, Q) {
        for (; Q; Q = Q.parentNode)
            if (A === Q) return !0;
        return !1
    }

function oh2(A, Q) {
        var B, G;
        B = A._referenceNode, G = A._pointerBeforeReferenceNode;
        while (!0) {
            if (G === Q) G = !G;
            else if (B = kn5(B, A._root, Q), B === null) return null;
            var Z = A._internalFilter(B);
            if (Z === l70.FILTER_ACCEPT) break
        }
        return A._referenceNode = B, A._pointerBeforeReferenceNode = G, B
    }

function eh2(A, Q, B) {
        if (!A || !A.nodeType) th2.NotSupportedError();
        this._root = A, this._referenceNode = A, this._pointerBeforeReferenceNode = !0, this._whatToShow = Number(Q) || 0, this._filter = B || null, this._active = !1, A.doc._attachNodeIterator(this)
    }
    Object.defineProperties(eh2.prototype, {
        root: {
            get: function() {
                return this._root
            }
        },
        referenceNode: {
            get: function() {
                return this._referenceNode
            }
        },
        pointerBeforeReferenceNode: {
            get: function() {
                return this._pointerBeforeReferenceNode
            }
        },
        whatToShow: {
            get: function() {
                return this._whatToShow
            }
        },
        filter: {
            get: function() {
                return this._filter
            }
        },
        _internalFilter: {
            value: function(Q) {
                var B, G;
                if (this._active) th2.InvalidStateError();
                if (!(1 << Q.nodeType - 1 & this._whatToShow)) return l70.FILTER_SKIP;
                if (G = this._filter, G === null) B = l70.FILTER_ACCEPT;
                else {
                    this._active = !0;
                    try {
                        if (typeof G === "function") B = G(Q);
                        else B = G.acceptNode(Q)
                    } finally {
                        this._active = !1
                    }
                }
                return +B
            }
        },
        _preremove: {
            value: function(Q) {
                if (rh2(Q, this._root)) return;
                if (!rh2(Q, this._referenceNode)) return;
                if (this._pointerBeforeReferenceNode) {
                    var B = Q;
                    while (B.lastChild) B = B.lastChild;
                    if (B = i70.next(B, this.root), B) {
                        this._referenceNode = B;
                        return
                    }
                    this._pointerBeforeReferenceNode = !1
                }
                if (Q.previousSibling === null) this._referenceNode = Q.parentNode;
                else {
                    this._referenceNode = Q.previousSibling;
                    var G;
                    for (G = this._referenceNode.lastChild; G; G = this._referenceNode.lastChild) this._referenceNode = G
                }
            }
        },
        nextNode: {
            value: function() {
                return oh2(this, !0)
            }
        },
        previousNode: {
            value: function() {
                return oh2(this, !1)
            }
        },
        detach: {
            value: function() {}
        },
        toString: {
            value: function() {
                return "[object NodeIterator]"
            }
        }
    })
});
var D31 = U((nIZ, Bg2) => {
    Bg2.exports = cD;

function cD(A) {
        if (!A) return Object.create(cD.prototype);
        this.url = A.replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, "");
        var Q = cD.pattern.exec(this.url);
        if (Q) {
            if (Q[2]) this.scheme = Q[2];
            if (Q[4]) {
                var B = Q[4].match(cD.userinfoPattern);