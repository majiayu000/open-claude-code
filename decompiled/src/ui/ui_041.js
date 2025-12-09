/**
 * Claude Code Decompiled
 * Category: ui
 * File: 41/53
 * Lines: 352916 - 354415 (1500 lines)
 * Original file: cli.js
 */

                                if (I = Z._countChildrenOfType(V$), G) {
                                    if (I > 0) R7.HierarchyRequestError()
                                } else if (I > 1 || I === 1 && B.nodeType !== V$) R7.HierarchyRequestError();
                                break;
                            default:
                                R7.HierarchyRequestError()
                        }
                        break;
                    case V$:
                        if (B !== null) {
                            if (G && B.nodeType === zO) R7.HierarchyRequestError();
                            for (Y = B.nextSibling; Y !== null; Y = Y.nextSibling)
                                if (Y.nodeType === zO) R7.HierarchyRequestError()
                        }
                        if (I = Z._countChildrenOfType(V$), G) {
                            if (I > 0) R7.HierarchyRequestError()
                        } else if (I > 1 || I === 1 && B.nodeType !== V$) R7.HierarchyRequestError();
                        break;
                    case zO:
                        if (B === null) {
                            if (Z._countChildrenOfType(V$)) R7.HierarchyRequestError()
                        } else
                            for (Y = Z.firstChild; Y !== null; Y = Y.nextSibling) {
                                if (Y === B) break;
                                if (Y.nodeType === V$) R7.HierarchyRequestError()
                            }
                        if (I = Z._countChildrenOfType(zO), G) {
                            if (I > 0) R7.HierarchyRequestError()
                        } else if (I > 1 || I === 1 && B.nodeType !== zO) R7.HierarchyRequestError();
                        break
                } else if (Q.nodeType === zO) R7.HierarchyRequestError()
            }
        },
        insertBefore: {
            value: function(Q, B) {
                var G = this;
                G._ensureInsertValid(Q, B, !0);
                var Z = B;
                if (Z === Q) Z = Q.nextSibling;
                return G.doc.adoptNode(Q), Q._insertOrReplace(G, Z, !1), Q
            }
        },
        appendChild: {
            value: function(A) {
                return this.insertBefore(A, null)
            }
        },
        _appendChild: {
            value: function(A) {
                A._insertOrReplace(this, null, !1)
            }
        },
        removeChild: {
            value: function(Q) {
                var B = this;
                if (!Q.nodeType) throw TypeError("not a node");
                if (Q.parentNode !== B) R7.NotFoundError();
                return Q.remove(), Q
            }
        },
        replaceChild: {
            value: function(Q, B) {
                var G = this;
                if (G._ensureInsertValid(Q, B, !1), Q.doc !== G.doc) G.doc.adoptNode(Q);
                return Q._insertOrReplace(G, B, !0), B
            }
        },
        contains: {
            value: function(Q) {
                if (Q === null) return !1;
                if (this === Q) return !0;
                return (this.compareDocumentPosition(Q) & V70) !== 0
            }
        },
        compareDocumentPosition: {
            value: function(Q) {
                if (this === Q) return 0;
                if (this.doc !== Q.doc || this.rooted !== Q.rooted) return W70 + K70;
                var B = [],
                    G = [];
                for (var Z = this; Z !== null; Z = Z.parentNode) B.push(Z);
                for (Z = Q; Z !== null; Z = Z.parentNode) G.push(Z);
                if (B.reverse(), G.reverse(), B[0] !== G[0]) return W70 + K70;
                Z = Math.min(B.length, G.length);
                for (var I = 1; I < Z; I++)
                    if (B[I] !== G[I])
                        if (B[I].index < G[I].index) return F70;
                        else return X70;
                if (B.length < G.length) return F70 + V70;
                else return X70 + hf2
            }
        },
        isSameNode: {
            value: function(Q) {
                return this === Q
            }
        },
        isEqualNode: {
            value: function(Q) {
                if (!Q) return !1;
                if (Q.nodeType !== this.nodeType) return !1;
                if (!this.isEqual(Q)) return !1;
                for (var B = this.firstChild, G = Q.firstChild; B && G; B = B.nextSibling, G = G.nextSibling)
                    if (!B.isEqualNode(G)) return !1;
                return B === null && G === null
            }
        },
        cloneNode: {
            value: function(A) {
                var Q = this.clone();
                if (A)
                    for (var B = this.firstChild; B !== null; B = B.nextSibling) Q._appendChild(B.cloneNode(!0));
                return Q
            }
        },
        lookupPrefix: {
            value: function(Q) {
                var B;
                if (Q === "" || Q === null || Q === void 0) return null;
                switch (this.nodeType) {
                    case V$:
                        return this._lookupNamespacePrefix(Q, this);
                    case YTA:
                        return B = this.documentElement, B ? B.lookupPrefix(Q) : null;
                    case Y70:
                    case J70:
                    case jn:
                    case zO:
                        return null;
                    case I70:
                        return B = this.ownerElement, B ? B.lookupPrefix(Q) : null;
                    default:
                        return B = this.parentElement, B ? B.lookupPrefix(Q) : null
                }
            }
        },
        lookupNamespaceURI: {
            value: function(Q) {
                if (Q === "" || Q === void 0) Q = null;
                var B;
                switch (this.nodeType) {
                    case V$:
                        return R7.shouldOverride();
                    case YTA:
                        return B = this.documentElement, B ? B.lookupNamespaceURI(Q) : null;
                    case Y70:
                    case J70:
                    case zO:
                    case jn:
                        return null;
                    case I70:
                        return B = this.ownerElement, B ? B.lookupNamespaceURI(Q) : null;
                    default:
                        return B = this.parentElement, B ? B.lookupNamespaceURI(Q) : null
                }
            }
        },
        isDefaultNamespace: {
            value: function(Q) {
                if (Q === "" || Q === void 0) Q = null;
                var B = this.lookupNamespaceURI(null);
                return B === Q
            }
        },
        index: {
            get: function() {
                var A = this.parentNode;
                if (this === A.firstChild) return 0;
                var Q = A.childNodes;
                if (this._index === void 0 || Q[this._index] !== this) {
                    for (var B = 0; B < Q.length; B++) Q[B]._index = B;
                    R7.assert(Q[this._index] === this)
                }
                return this._index
            }
        },
        isAncestor: {
            value: function(A) {
                if (this.doc !== A.doc) return !1;
                if (this.rooted !== A.rooted) return !1;
                for (var Q = A; Q; Q = Q.parentNode)
                    if (Q === this) return !0;
                return !1
            }
        },
        ensureSameDoc: {
            value: function(A) {
                if (A.ownerDocument === null) A.ownerDocument = this.doc;
                else if (A.ownerDocument !== this.doc) R7.WrongDocumentError()
            }
        },
        removeChildren: {
            value: R7.shouldOverride
        },
        _insertOrReplace: {
            value: function(Q, B, G) {
                var Z = this,
                    I, Y;
                if (Z.nodeType === jn && Z.rooted) R7.HierarchyRequestError();
                if (Q._childNodes) {
                    if (I = B === null ? Q._childNodes.length : B.index, Z.parentNode === Q) {
                        var J = Z.index;
                        if (J < I) I--
                    }
                }
                if (G) {
                    if (B.rooted) B.doc.mutateRemove(B);
                    B.parentNode = null
                }
                var W = B;
                if (W === null) W = Q.firstChild;
                var X = Z.rooted && Q.rooted;
                if (Z.nodeType === jn) {
                    var F = [0, G ? 1 : 0],
                        V;
                    for (var K = Z.firstChild; K !== null; K = V) V = K.nextSibling, F.push(K), K.parentNode = Q;
                    var D = F.length;
                    if (G) A31.replace(W, D > 2 ? F[2] : null);
                    else if (D > 2 && W !== null) A31.insertBefore(F[2], W);
                    if (Q._childNodes) {
                        F[0] = B === null ? Q._childNodes.length : B._index, Q._childNodes.splice.apply(Q._childNodes, F);
                        for (Y = 2; Y < D; Y++) F[Y]._index = F[0] + (Y - 2)
                    } else if (Q._firstChild === B) {
                        if (D > 2) Q._firstChild = F[2];
                        else if (G) Q._firstChild = null
                    }
                    if (Z._childNodes) Z._childNodes.length = 0;
                    else Z._firstChild = null;
                    if (Q.rooted) {
                        Q.modify();
                        for (Y = 2; Y < D; Y++) Q.doc.mutateInsert(F[Y])
                    }
                } else {
                    if (B === Z) return;
                    if (X) Z._remove();
                    else if (Z.parentNode) Z.remove();
                    if (Z.parentNode = Q, G) {
                        if (A31.replace(W, Z), Q._childNodes) Z._index = I, Q._childNodes[I] = Z;
                        else if (Q._firstChild === B) Q._firstChild = Z
                    } else {
                        if (W !== null) A31.insertBefore(Z, W);
                        if (Q._childNodes) Z._index = I, Q._childNodes.splice(I, 0, Z);
                        else if (Q._firstChild === B) Q._firstChild = Z
                    }
                    if (X) Q.modify(), Q.doc.mutateMove(Z);
                    else if (Q.rooted) Q.modify(), Q.doc.mutateInsert(Z)
                }
            }
        },
        lastModTime: {
            get: function() {
                if (!this._lastModTime) this._lastModTime = this.doc.modclock;
                return this._lastModTime
            }
        },
        modify: {
            value: function() {
                if (this.doc.modclock) {
                    var A = ++this.doc.modclock;
                    for (var Q = this; Q; Q = Q.parentElement)
                        if (Q._lastModTime) Q._lastModTime = A
                }
            }
        },
        doc: {
            get: function() {
                return this.ownerDocument || this
            }
        },
        rooted: {
            get: function() {
                return !!this._nid
            }
        },
        normalize: {
            value: function() {
                var A;
                for (var Q = this.firstChild; Q !== null; Q = A) {
                    if (A = Q.nextSibling, Q.normalize) Q.normalize();
                    if (Q.nodeType !== VY.TEXT_NODE) continue;
                    if (Q.nodeValue === "") {
                        this.removeChild(Q);
                        continue
                    }
                    var B = Q.previousSibling;
                    if (B === null) continue;
                    else if (B.nodeType === VY.TEXT_NODE) B.appendData(Q.nodeValue), this.removeChild(Q)
                }
            }
        },
        serialize: {
            value: function() {
                if (this._innerHTML) return this._innerHTML;
                var A = "";
                for (var Q = this.firstChild; Q !== null; Q = Q.nextSibling) A += vf2.serializeOne(Q, this);
                return A
            }
        },
        outerHTML: {
            get: function() {
                return vf2.serializeOne(this, {
                    nodeType: 0
                })
            },
            set: R7.nyi
        },
        ELEMENT_NODE: {
            value: V$
        },
        ATTRIBUTE_NODE: {
            value: I70
        },
        TEXT_NODE: {
            value: Q31
        },
        CDATA_SECTION_NODE: {
            value: Si5
        },
        ENTITY_REFERENCE_NODE: {
            value: _i5
        },
        ENTITY_NODE: {
            value: Y70
        },
        PROCESSING_INSTRUCTION_NODE: {
            value: bf2
        },
        COMMENT_NODE: {
            value: ff2
        },
        DOCUMENT_NODE: {
            value: YTA
        },
        DOCUMENT_TYPE_NODE: {
            value: zO
        },
        DOCUMENT_FRAGMENT_NODE: {
            value: jn
        },
        NOTATION_NODE: {
            value: J70
        },
        DOCUMENT_POSITION_DISCONNECTED: {
            value: W70
        },
        DOCUMENT_POSITION_PRECEDING: {
            value: X70
        },
        DOCUMENT_POSITION_FOLLOWING: {
            value: F70
        },
        DOCUMENT_POSITION_CONTAINS: {
            value: hf2
        },
        DOCUMENT_POSITION_CONTAINED_BY: {
            value: V70
        },
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
            value: K70
        }
    })
});
var df2 = U((MIZ, mf2) => {
    mf2.exports = class extends Array {
        constructor(Q) {
            super(Q && Q.length || 0);
            if (Q)
                for (var B in Q) this[B] = Q[B]
        }
        item(Q) {
            return this[Q] || null
        }
    }
});
var pf2 = U((OIZ, cf2) => {
    function ki5(A) {
        return this[A] || null
    }

    function yi5(A) {
        if (!A) A = [];
        return A.item = ki5, A
    }
    cf2.exports = yi5
});
var T0A = U((RIZ, lf2) => {
    var D70;
    try {
        D70 = df2()
    } catch (A) {
        D70 = pf2()
    }
    lf2.exports = D70
});
var B31 = U((TIZ, af2) => {
    af2.exports = nf2;
    var if2 = mD(),
        xi5 = T0A();

    function nf2() {
        if2.call(this), this._firstChild = this._childNodes = null
    }
    nf2.prototype = Object.create(if2.prototype, {
        hasChildNodes: {
            value: function() {
                if (this._childNodes) return this._childNodes.length > 0;
                return this._firstChild !== null
            }
        },
        childNodes: {
            get: function() {
                return this._ensureChildNodes(), this._childNodes
            }
        },
        firstChild: {
            get: function() {
                if (this._childNodes) return this._childNodes.length === 0 ? null : this._childNodes[0];
                return this._firstChild
            }
        },
        lastChild: {
            get: function() {
                var A = this._childNodes,
                    Q;
                if (A) return A.length === 0 ? null : A[A.length - 1];
                if (Q = this._firstChild, Q === null) return null;
                return Q._previousSibling
            }
        },
        _ensureChildNodes: {
            value: function() {
                if (this._childNodes) return;
                var A = this._firstChild,
                    Q = A,
                    B = this._childNodes = new xi5;
                if (A)
                    do B.push(Q), Q = Q._nextSibling; while (Q !== A);
                this._firstChild = null
            }
        },
        removeChildren: {
            value: function() {
                var Q = this.rooted ? this.ownerDocument : null,
                    B = this.firstChild,
                    G;
                while (B !== null) {
                    if (G = B, B = G.nextSibling, Q) Q.mutateRemove(G);
                    G.parentNode = null
                }
                if (this._childNodes) this._childNodes.length = 0;
                else this._firstChild = null;
                this.modify()
            }
        }
    })
});
var G31 = U((ci5) => {
    ci5.isValidName = mi5;
    ci5.isValidQName = di5;
    var vi5 = /^[_:A-Za-z][-.:\w]+$/,
        bi5 = /^([_A-Za-z][-.\w]+|[_A-Za-z][-.\w]+:[_A-Za-z][-.\w]+)$/,
        JTA = "_A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",
        WTA = "-._A-Za-z0-9·À-ÖØ-öø-˿̀-ͽͿ-῿‌‍‿⁀⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",
        P0A = "[" + JTA + "][" + WTA + "]*",
        H70 = JTA + ":",
        C70 = WTA + ":",
        fi5 = new RegExp("^[" + H70 + "][" + C70 + "]*$"),
        hi5 = new RegExp("^(" + P0A + "|" + P0A + ":" + P0A + ")$"),
        sf2 = /[\uD800-\uDB7F\uDC00-\uDFFF]/,
        rf2 = /[\uD800-\uDB7F\uDC00-\uDFFF]/g,
        of2 = /[\uD800-\uDB7F][\uDC00-\uDFFF]/g;
    JTA += "\uD800-\uDB7F\uDC00-\uDFFF";
    WTA += "\uD800-\uDB7F\uDC00-\uDFFF";
    P0A = "[" + JTA + "][" + WTA + "]*";
    H70 = JTA + ":";
    C70 = WTA + ":";
    var gi5 = new RegExp("^[" + H70 + "][" + C70 + "]*$"),
        ui5 = new RegExp("^(" + P0A + "|" + P0A + ":" + P0A + ")$");

    function mi5(A) {
        if (vi5.test(A)) return !0;
        if (fi5.test(A)) return !0;
        if (!sf2.test(A)) return !1;
        if (!gi5.test(A)) return !1;
        var Q = A.match(rf2),
            B = A.match(of2);
        return B !== null && 2 * B.length === Q.length
    }

    function di5(A) {
        if (bi5.test(A)) return !0;
        if (hi5.test(A)) return !0;
        if (!sf2.test(A)) return !1;
        if (!ui5.test(A)) return !1;
        var Q = A.match(rf2),
            B = A.match(of2);
        return B !== null && 2 * B.length === Q.length
    }
});
var E70 = U((ni5) => {
    var tf2 = uJ();
    ni5.property = function(A) {
        if (Array.isArray(A.type)) {
            var Q = Object.create(null);
            A.type.forEach(function(Z) {
                Q[Z.value || Z] = Z.alias || Z
            });
            var B = A.missing;
            if (B === void 0) B = null;
            var G = A.invalid;
            if (G === void 0) G = B;
            return {
                get: function() {
                    var Z = this._getattr(A.name);
                    if (Z === null) return B;
                    if (Z = Q[Z.toLowerCase()], Z !== void 0) return Z;
                    if (G !== null) return G;
                    return Z
                },
                set: function(Z) {
                    this._setattr(A.name, Z)
                }
            }
        } else if (A.type === Boolean) return {
            get: function() {
                return this.hasAttribute(A.name)
            },
            set: function(Z) {
                if (Z) this._setattr(A.name, "");
                else this.removeAttribute(A.name)
            }
        };
        else if (A.type === Number || A.type === "long" || A.type === "unsigned long" || A.type === "limited unsigned long with fallback") return ii5(A);
        else if (!A.type || A.type === String) return {
            get: function() {
                return this._getattr(A.name) || ""
            },
            set: function(Z) {
                if (A.treatNullAsEmptyString && Z === null) Z = "";
                this._setattr(A.name, Z)
            }
        };
        else if (typeof A.type === "function") return A.type(A.name, A);
        throw Error("Invalid attribute definition")
    };

    function ii5(A) {
        var Q;
        if (typeof A.default === "function") Q = A.default;
        else if (typeof A.default === "number") Q = function() {
            return A.default
        };
        else Q = function() {
            tf2.assert(!1, typeof A.default)
        };
        var B = A.type === "unsigned long",
            G = A.type === "long",
            Z = A.type === "limited unsigned long with fallback",
            I = A.min,
            Y = A.max,
            J = A.setmin;
        if (I === void 0) {
            if (B) I = 0;
            if (G) I = -2147483648;
            if (Z) I = 1
        }
        if (Y === void 0) {
            if (B || G || Z) Y = 2147483647
        }
        return {
            get: function() {
                var W = this._getattr(A.name),
                    X = A.float ? parseFloat(W) : parseInt(W, 10);
                if (W === null || !isFinite(X) || I !== void 0 && X < I || Y !== void 0 && X > Y) return Q.call(this);
                if (B || G || Z) {
                    if (!/^[ \t\n\f\r]*[-+]?[0-9]/.test(W)) return Q.call(this);
                    X = X | 0
                }
                return X
            },
            set: function(W) {
                if (!A.float) W = Math.floor(W);
                if (J !== void 0 && W < J) tf2.IndexSizeError(A.name + " set to " + W);
                if (B) W = W < 0 || W > 2147483647 ? Q.call(this) : W | 0;
                else if (Z) W = W < 1 || W > 2147483647 ? Q.call(this) : W | 0;
                else if (G) W = W < -2147483648 || W > 2147483647 ? Q.call(this) : W | 0;
                this._setattr(A.name, String(W))
            }
        }
    }
    ni5.registerChangeHandler = function(A, Q, B) {
        var G = A.prototype;
        if (!Object.prototype.hasOwnProperty.call(G, "_attributeChangeHandlers")) G._attributeChangeHandlers = Object.create(G._attributeChangeHandlers || null);
        G._attributeChangeHandlers[Q] = B
    }
});
var Qh2 = U((SIZ, Ah2) => {
    Ah2.exports = ef2;
    var ri5 = mD();

    function ef2(A, Q) {
        this.root = A, this.filter = Q, this.lastModTime = A.lastModTime, this.done = !1, this.cache = [], this.traverse()
    }
    ef2.prototype = Object.create(Object.prototype, {
        length: {
            get: function() {
                if (this.checkcache(), !this.done) this.traverse();
                return this.cache.length
            }
        },
        item: {
            value: function(A) {
                if (this.checkcache(), !this.done && A >= this.cache.length) this.traverse();
                return this.cache[A]
            }
        },
        checkcache: {
            value: function() {
                if (this.lastModTime !== this.root.lastModTime) {
                    for (var A = this.cache.length - 1; A >= 0; A--) this[A] = void 0;
                    this.cache.length = 0, this.done = !1, this.lastModTime = this.root.lastModTime
                }
            }
        },
        traverse: {
            value: function(A) {
                if (A !== void 0) A++;
                var Q;
                while ((Q = this.next()) !== null)
                    if (this[this.cache.length] = Q, this.cache.push(Q), A && this.cache.length === A) return;
                this.done = !0
            }
        },
        next: {
            value: function() {
                var A = this.cache.length === 0 ? this.root : this.cache[this.cache.length - 1],
                    Q;
                if (A.nodeType === ri5.DOCUMENT_NODE) Q = A.documentElement;
                else Q = A.nextElement(this.root);
                while (Q) {
                    if (this.filter(Q)) return Q;
                    Q = Q.nextElement(this.root)
                }
                return null
            }
        }
    })
});
var U70 = U((_IZ, Zh2) => {
    var z70 = uJ();
    Zh2.exports = Gh2;

    function Gh2(A, Q) {
        this._getString = A, this._setString = Q, this._length = 0, this._lastStringValue = "", this._update()
    }
    Object.defineProperties(Gh2.prototype, {
        length: {
            get: function() {
                return this._length
            }
        },
        item: {
            value: function(A) {
                var Q = MWA(this);
                if (A < 0 || A >= Q.length) return null;
                return Q[A]
            }
        },
        contains: {
            value: function(A) {
                A = String(A);
                var Q = MWA(this);
                return Q.indexOf(A) > -1
            }
        },
        add: {
            value: function() {
                var A = MWA(this);
                for (var Q = 0, B = arguments.length; Q < B; Q++) {
                    var G = XTA(arguments[Q]);
                    if (A.indexOf(G) < 0) A.push(G)
                }
                this._update(A)
            }
        },
        remove: {
            value: function() {
                var A = MWA(this);
                for (var Q = 0, B = arguments.length; Q < B; Q++) {
                    var G = XTA(arguments[Q]),
                        Z = A.indexOf(G);
                    if (Z > -1) A.splice(Z, 1)
                }
                this._update(A)
            }
        },
        toggle: {
            value: function(Q, B) {
                if (Q = XTA(Q), this.contains(Q)) {
                    if (B === void 0 || B === !1) return this.remove(Q), !1;
                    return !0
                } else {
                    if (B === void 0 || B === !0) return this.add(Q), !0;
                    return !1
                }
            }
        },
        replace: {
            value: function(Q, B) {
                if (String(B) === "") z70.SyntaxError();
                Q = XTA(Q), B = XTA(B);
                var G = MWA(this),
                    Z = G.indexOf(Q);
                if (Z < 0) return !1;
                var I = G.indexOf(B);
                if (I < 0) G[Z] = B;
                else if (Z < I) G[Z] = B, G.splice(I, 1);
                else G.splice(Z, 1);
                return this._update(G), !0
            }
        },
        toString: {
            value: function() {
                return this._getString()
            }
        },
        value: {
            get: function() {
                return this._getString()
            },
            set: function(A) {
                this._setString(A), this._update()
            }
        },
        _update: {
            value: function(A) {
                if (A) Bh2(this, A), this._setString(A.join(" ").trim());
                else Bh2(this, MWA(this));
                this._lastStringValue = this._getString()
            }
        }
    });

    function Bh2(A, Q) {
        var B = A._length,
            G;
        A._length = Q.length;
        for (G = 0; G < Q.length; G++) A[G] = Q[G];
        for (; G < B; G++) A[G] = void 0
    }

    function XTA(A) {
        if (A = String(A), A === "") z70.SyntaxError();
        if (/[ \t\r\n\f]/.test(A)) z70.InvalidCharacterError();
        return A
    }

    function oi5(A) {
        var Q = A._length,
            B = Array(Q);
        for (var G = 0; G < Q; G++) B[G] = A[G];
        return B
    }

    function MWA(A) {
        var Q = A._getString();
        if (Q === A._lastStringValue) return oi5(A);
        var B = Q.replace(/(^[ \t\r\n\f]+)|([ \t\r\n\f]+$)/g, "");
        if (B === "") return [];
        else {
            var G = Object.create(null);
            return B.split(/[ \t\r\n\f]+/g).filter(function(Z) {
                var I = "$" + Z;
                if (G[I]) return !1;
                return G[I] = !0, !0
            })
        }
    }
});
var J31 = U((TWA, Fh2) => {
    var Z31 = Object.create(null, {
            location: {
                get: function() {
                    throw Error("window.location is not supported.")
                }
            }
        }),
        ti5 = function(A, Q) {
            return A.compareDocumentPosition(Q)
        },
        ei5 = function(A, Q) {
            return ti5(A, Q) & 2 ? 1 : -1
        },
        Y31 = function(A) {
            while ((A = A.nextSibling) && A.nodeType !== 1);
            return A
        },
        RWA = function(A) {
            while ((A = A.previousSibling) && A.nodeType !== 1);
            return A
        },
        An5 = function(A) {
            if (A = A.firstChild)
                while (A.nodeType !== 1 && (A = A.nextSibling));
            return A
        },
        Qn5 = function(A) {
            if (A = A.lastChild)
                while (A.nodeType !== 1 && (A = A.previousSibling));
            return A
        },
        OWA = function(A) {
            if (!A.parentNode) return !1;
            var Q = A.parentNode.nodeType;
            return Q === 1 || Q === 9
        },
        Ih2 = function(A) {
            if (!A) return A;
            var Q = A[0];
            if (Q === '"' || Q === "'") {
                if (A[A.length - 1] === Q) A = A.slice(1, -1);
                else A = A.slice(1);
                return A.replace(E4.str_escape, function(B) {
                    var G = /^\\(?:([0-9A-Fa-f]+)|([\r\n\f]+))/.exec(B);
                    if (!G) return B.slice(1);
                    if (G[2]) return "";
                    var Z = parseInt(G[1], 16);
                    return String.fromCodePoint ? String.fromCodePoint(Z) : String.fromCharCode(Z)
                })
            } else if (E4.ident.test(A)) return Sn(A);
            else return A
        },
        Sn = function(A) {
            return A.replace(E4.escape, function(Q) {
                var B = /^\\([0-9A-Fa-f]+)/.exec(Q);
                if (!B) return Q[1];
                var G = parseInt(B[1], 16);
                return String.fromCodePoint ? String.fromCodePoint(G) : String.fromCharCode(G)
            })
        },
        Bn5 = function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf;
            return function(A, Q) {
                var B = this.length;
                while (B--)
                    if (this[B] === Q) return B;
                return -1
            }
        }(),
        Jh2 = function(A, Q) {
            var B = E4.inside.source.replace(/</g, A).replace(/>/g, Q);
            return new RegExp(B)
        },
        K$ = function(A, Q, B) {
            return A = A.source, A = A.replace(Q, B.source || B), new RegExp(A)
        },
        Yh2 = function(A, Q) {
            return A.replace(/^(?:\w+:\/\/|\/+)/, "").replace(/(?:\/+|\/*#.*?)$/, "").split("/", Q).join("/")
        },
        Gn5 = function(A, Q) {
            var B = A.replace(/\s+/g, ""),
                G;
            if (B === "even") B = "2n+0";
            else if (B === "odd") B = "2n+1";
            else if (B.indexOf("n") === -1) B = "0n" + B;
            return G = /^([+-])?(\d+)?n([+-])?(\d+)?$/.exec(B), {
                group: G[1] === "-" ? -(G[2] || 1) : +(G[2] || 1),
                offset: G[4] ? G[3] === "-" ? -G[4] : +G[4] : 0
            }
        },
        $70 = function(A, Q, B) {
            var G = Gn5(A),
                Z = G.group,
                I = G.offset,
                Y = !B ? An5 : Qn5,
                J = !B ? Y31 : RWA;
            return function(W) {
                if (!OWA(W)) return;
                var X = Y(W.parentNode),
                    F = 0;
                while (X) {
                    if (Q(X, W)) F++;
                    if (X === W) return F -= I, Z && F ? F % Z === 0 && F < 0 === Z < 0 : !F;
                    X = J(X)
                }
            }
        },
        FK = {
            "*": function() {
                return function() {
                    return !0
                }
            }(),
            type: function(A) {
                return A = A.toLowerCase(),
                    function(Q) {
                        return Q.nodeName.toLowerCase() === A
                    }
            },
            attr: function(A, Q, B, G) {
                return Q = Wh2[Q],
                    function(Z) {
                        var I;
                        switch (A) {
                            case "for":
                                I = Z.htmlFor;
                                break;
                            case "class":
                                if (I = Z.className, I === "" && Z.getAttribute("class") == null) I = null;
                                break;
                            case "href":
                            case "src":
                                I = Z.getAttribute(A, 2);
                                break;
                            case "title":
                                I = Z.getAttribute("title") || null;
                                break;
                            case "id":
                            case "lang":
                            case "dir":
                            case "accessKey":
                            case "hidden":
                            case "tabIndex":
                            case "style":
                                if (Z.getAttribute) {
                                    I = Z.getAttribute(A);
                                    break
                                }
                            default:
                                if (Z.hasAttribute && !Z.hasAttribute(A)) break;
                                I = Z[A] != null ? Z[A] : Z.getAttribute && Z.getAttribute(A);
                                break
                        }
                        if (I == null) return;
                        if (I = I + "", G) I = I.toLowerCase(), B = B.toLowerCase();
                        return Q(I, B)
                    }
            },
            ":first-child": function(A) {
                return !RWA(A) && OWA(A)
            },
            ":last-child": function(A) {
                return !Y31(A) && OWA(A)
            },
            ":only-child": function(A) {
                return !RWA(A) && !Y31(A) && OWA(A)
            },
            ":nth-child": function(A, Q) {
                return $70(A, function() {
                    return !0
                }, Q)
            },
            ":nth-last-child": function(A) {
                return FK[":nth-child"](A, !0)
            },
            ":root": function(A) {
                return A.ownerDocument.documentElement === A
            },
            ":empty": function(A) {
                return !A.firstChild
            },
            ":not": function(A) {
                var Q = q70(A);
                return function(B) {
                    return !Q(B)
                }
            },
            ":first-of-type": function(A) {
                if (!OWA(A)) return;
                var Q = A.nodeName;
                while (A = RWA(A))
                    if (A.nodeName === Q) return;
                return !0
            },
            ":last-of-type": function(A) {
                if (!OWA(A)) return;
                var Q = A.nodeName;
                while (A = Y31(A))
                    if (A.nodeName === Q) return;
                return !0
            },
            ":only-of-type": function(A) {
                return FK[":first-of-type"](A) && FK[":last-of-type"](A)
            },
            ":nth-of-type": function(A, Q) {
                return $70(A, function(B, G) {
                    return B.nodeName === G.nodeName
                }, Q)
            },
            ":nth-last-of-type": function(A) {
                return FK[":nth-of-type"](A, !0)
            },
            ":checked": function(A) {
                return !!(A.checked || A.selected)
            },
            ":indeterminate": function(A) {
                return !FK[":checked"](A)
            },
            ":enabled": function(A) {
                return !A.disabled && A.type !== "hidden"
            },
            ":disabled": function(A) {
                return !!A.disabled
            },
            ":target": function(A) {
                return A.id === Z31.location.hash.substring(1)
            },
            ":focus": function(A) {
                return A === A.ownerDocument.activeElement
            },
            ":is": function(A) {
                return q70(A)
            },
            ":matches": function(A) {
                return FK[":is"](A)
            },
            ":nth-match": function(A, Q) {
                var B = A.split(/\s*,\s*/),
                    G = B.shift(),
                    Z = q70(B.join(","));
                return $70(G, Z, Q)
            },
            ":nth-last-match": function(A) {
                return FK[":nth-match"](A, !0)
            },
            ":links-here": function(A) {
                return A + "" === Z31.location + ""
            },
            ":lang": function(A) {
                return function(Q) {
                    while (Q) {
                        if (Q.lang) return Q.lang.indexOf(A) === 0;
                        Q = Q.parentNode
                    }
                }
            },
            ":dir": function(A) {
                return function(Q) {
                    while (Q) {
                        if (Q.dir) return Q.dir === A;
                        Q = Q.parentNode
                    }
                }
            },
            ":scope": function(A, Q) {
                var B = Q || A.ownerDocument;
                if (B.nodeType === 9) return A === B.documentElement;
                return A === B
            },
            ":any-link": function(A) {
                return typeof A.href === "string"
            },
            ":local-link": function(A) {
                if (A.nodeName) return A.href && A.host === Z31.location.host;
                var Q = +A + 1;
                return function(B) {
                    if (!B.href) return;
                    var G = Z31.location + "",
                        Z = B + "";
                    return Yh2(G, Q) === Yh2(Z, Q)
                }
            },
            ":default": function(A) {
                return !!A.defaultSelected
            },
            ":valid": function(A) {
                return A.willValidate || A.validity && A.validity.valid
            },
            ":invalid": function(A) {
                return !FK[":valid"](A)
            },
            ":in-range": function(A) {
                return A.value > A.min && A.value <= A.max
            },
            ":out-of-range": function(A) {
                return !FK[":in-range"](A)
            },
            ":required": function(A) {
                return !!A.required
            },
            ":optional": function(A) {
                return !A.required
            },
            ":read-only": function(A) {
                if (A.readOnly) return !0;
                var Q = A.getAttribute("contenteditable"),
                    B = A.contentEditable,
                    G = A.nodeName.toLowerCase();
                return G = G !== "input" && G !== "textarea", (G || A.disabled) && Q == null && B !== "true"
            },
            ":read-write": function(A) {
                return !FK[":read-only"](A)
            },
            ":hover": function() {
                throw Error(":hover is not supported.")
            },
            ":active": function() {
                throw Error(":active is not supported.")
            },
            ":link": function() {
                throw Error(":link is not supported.")
            },
            ":visited": function() {
                throw Error(":visited is not supported.")
            },
            ":column": function() {
                throw Error(":column is not supported.")
            },
            ":nth-column": function() {
                throw Error(":nth-column is not supported.")
            },
            ":nth-last-column": function() {
                throw Error(":nth-last-column is not supported.")
            },
            ":current": function() {
                throw Error(":current is not supported.")
            },
            ":past": function() {
                throw Error(":past is not supported.")
            },
            ":future": function() {
                throw Error(":future is not supported.")
            },
            ":contains": function(A) {
                return function(Q) {
                    var B = Q.innerText || Q.textContent || Q.value || "";
                    return B.indexOf(A) !== -1
                }
            },
            ":has": function(A) {
                return function(Q) {
                    return Xh2(A, Q).length > 0
                }
            }
        },
        Wh2 = {
            "-": function() {
                return !0
            },
            "=": function(A, Q) {
                return A === Q
            },
            "*=": function(A, Q) {
                return A.indexOf(Q) !== -1
            },
            "~=": function(A, Q) {
                var B, G, Z, I;
                for (G = 0;; G = B + 1) {
                    if (B = A.indexOf(Q, G), B === -1) return !1;
                    if (Z = A[B - 1], I = A[B + Q.length], (!Z || Z === " ") && (!I || I === " ")) return !0
                }
            },
            "|=": function(A, Q) {
                var B = A.indexOf(Q),
                    G;
                if (B !== 0) return;
                return G = A[B + Q.length], G === "-" || !G
            },
            "^=": function(A, Q) {
                return A.indexOf(Q) === 0
            },
            "$=": function(A, Q) {
                var B = A.lastIndexOf(Q);
                return B !== -1 && B + Q.length === A.length
            },
            "!=": function(A, Q) {
                return A !== Q
            }
        },
        FTA = {
            " ": function(A) {
                return function(Q) {
                    while (Q = Q.parentNode)
                        if (A(Q)) return Q
                }
            },
            ">": function(A) {
                return function(Q) {
                    if (Q = Q.parentNode) return A(Q) && Q
                }
            },
            "+": function(A) {
                return function(Q) {
                    if (Q = RWA(Q)) return A(Q) && Q
                }
            },
            "~": function(A) {
                return function(Q) {
                    while (Q = RWA(Q))
                        if (A(Q)) return Q
                }
            },
            noop: function(A) {
                return function(Q) {
                    return A(Q) && Q
                }
            },
            ref: function(A, Q) {
                var B;

                function G(Z) {
                    var I = Z.ownerDocument,
                        Y = I.getElementsByTagName("*"),
                        J = Y.length;
                    while (J--)
                        if (B = Y[J], G.test(Z)) return B = null, !0;
                    B = null
                }
                return G.combinator = function(Z) {
                    if (!B || !B.getAttribute) return;
                    var I = B.getAttribute(Q) || "";
                    if (I[0] === "#") I = I.substring(1);
                    if (I === Z.id && A(B)) return B
                }, G
            }
        },
        E4 = {
            escape: /\\(?:[^0-9A-Fa-f\r\n]|[0-9A-Fa-f]{1,6}[\r\n\t ]?)/g,
            str_escape: /(escape)|\\(\n|\r\n?|\f)/g,
            nonascii: /[\u00A0-\uFFFF]/,
            cssid: /(?:(?!-?[0-9])(?:escape|nonascii|[-_a-zA-Z0-9])+)/,
            qname: /^ *(cssid|\*)/,
            simple: /^(?:([.#]cssid)|pseudo|attr)/,
            ref: /^ *\/(cssid)\/ */,
            combinator: /^(?: +([^ \w*.#\\]) +|( )+|([^ \w*.#\\]))(?! *$)/,
            attr: /^\[(cssid)(?:([^\w]?=)(inside))?\]/,
            pseudo: /^(:cssid)(?:\((inside)\))?/,
            inside: /(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|<[^"'>]*>|\\["'>]|[^"'>])*/,
            ident: /^(cssid)$/
        };
    E4.cssid = K$(E4.cssid, "nonascii", E4.nonascii);
    E4.cssid = K$(E4.cssid, "escape", E4.escape);
    E4.qname = K$(E4.qname, "cssid", E4.cssid);
    E4.simple = K$(E4.simple, "cssid", E4.cssid);
    E4.ref = K$(E4.ref, "cssid", E4.cssid);
    E4.attr = K$(E4.attr, "cssid", E4.cssid);
    E4.pseudo = K$(E4.pseudo, "cssid", E4.cssid);
    E4.inside = K$(E4.inside, `[^"'>]*`, E4.inside);
    E4.attr = K$(E4.attr, "inside", Jh2("\\[", "\\]"));
    E4.pseudo = K$(E4.pseudo, "inside", Jh2("\\(", "\\)"));
    E4.simple = K$(E4.simple, "pseudo", E4.pseudo);
    E4.simple = K$(E4.simple, "attr", E4.attr);
    E4.ident = K$(E4.ident, "cssid", E4.cssid);
    E4.str_escape = K$(E4.str_escape, "escape", E4.escape);
    var VTA = function(A) {
            var Q = A.replace(/^\s+|\s+$/g, ""),
                B, G = [],
                Z = [],
                I, Y, J, W, X;
            while (Q) {
                if (J = E4.qname.exec(Q)) Q = Q.substring(J[0].length), Y = Sn(J[1]), Z.push(I31(Y, !0));
                else if (J = E4.simple.exec(Q)) Q = Q.substring(J[0].length), Y = "*", Z.push(I31(Y, !0)), Z.push(I31(J));
                else throw SyntaxError("Invalid selector.");
                while (J = E4.simple.exec(Q)) Q = Q.substring(J[0].length), Z.push(I31(J));
                if (Q[0] === "!") Q = Q.substring(1), I = In5(), I.qname = Y, Z.push(I.simple);
                if (J = E4.ref.exec(Q)) {
                    Q = Q.substring(J[0].length), X = FTA.ref(w70(Z), Sn(J[1])), G.push(X.combinator), Z = [];
                    continue
                }
                if (J = E4.combinator.exec(Q)) {
                    if (Q = Q.substring(J[0].length), W = J[1] || J[2] || J[3], W === ",") {
                        G.push(FTA.noop(w70(Z)));
                        break
                    }
                } else W = "noop";
                if (!FTA[W]) throw SyntaxError("Bad combinator.");
                G.push(FTA[W](w70(Z))), Z = []
            }
            if (B = Zn5(G), B.qname = Y, B.sel = Q, I) I.lname = B.qname, I.test = B, I.qname = I.qname, I.sel = B.sel, B = I;
            if (X) X.test = B, X.qname = B.qname, X.sel = B.sel, B = X;
            return B
        },
        I31 = function(A, Q) {
            if (Q) return A === "*" ? FK["*"] : FK.type(A);
            if (A[1]) return A[1][0] === "." ? FK.attr("class", "~=", Sn(A[1].substring(1)), !1) : FK.attr("id", "=", Sn(A[1].substring(1)), !1);
            if (A[2]) return A[3] ? FK[Sn(A[2])](Ih2(A[3])) : FK[Sn(A[2])];
            if (A[4]) {
                var B = A[6],
                    G = /["'\s]\s*I$/i.test(B);
                if (G) B = B.replace(/\s*I$/i, "");
                return FK.attr(Sn(A[4]), A[5] || "-", Ih2(B), G)
            }
            throw SyntaxError("Unknown Selector.")
        },
        w70 = function(A) {
            var Q = A.length,
                B;
            if (Q < 2) return A[0];
            return function(G) {
                if (!G) return;
                for (B = 0; B < Q; B++)
                    if (!A[B](G)) return;
                return !0
            }
        },
        Zn5 = function(A) {
            if (A.length < 2) return function(Q) {
                return !!A[0](Q)
            };
            return function(Q) {
                var B = A.length;
                while (B--)
                    if (!(Q = A[B](Q))) return;
                return !0
            }
        },
        In5 = function() {
            var A;

            function Q(B) {
                var G = B.ownerDocument,
                    Z = G.getElementsByTagName(Q.lname),
                    I = Z.length;
                while (I--)
                    if (Q.test(Z[I]) && A === B) return A = null, !0;
                A = null
            }
            return Q.simple = function(B) {
                return A = B, !0
            }, Q
        },
        q70 = function(A) {
            var Q = VTA(A),
                B = [Q];
            while (Q.sel) Q = VTA(Q.sel), B.push(Q);
            if (B.length < 2) return Q;
            return function(G) {
                var Z = B.length,
                    I = 0;
                for (; I < Z; I++)
                    if (B[I](G)) return !0
            }
        },
        Xh2 = function(A, Q) {
            var B = [],
                G = VTA(A),
                Z = Q.getElementsByTagName(G.qname),
                I = 0,
                Y;
            while (Y = Z[I++])
                if (G(Y)) B.push(Y);
            if (G.sel) {
                while (G.sel) {
                    G = VTA(G.sel), Z = Q.getElementsByTagName(G.qname), I = 0;
                    while (Y = Z[I++])
                        if (G(Y) && Bn5.call(B, Y) === -1) B.push(Y)
                }
                B.sort(ei5)
            }
            return B
        };
    Fh2.exports = TWA = function(A, Q) {
        var B, G;
        if (Q.nodeType !== 11 && A.indexOf(" ") === -1) {
            if (A[0] === "#" && Q.rooted && /^#[A-Z_][-A-Z0-9_]*$/i.test(A)) {
                if (Q.doc._hasMultipleElementsWithId) {
                    if (B = A.substring(1), !Q.doc._hasMultipleElementsWithId(B)) return G = Q.doc.getElementById(B), G ? [G] : []
                }
            }
            if (A[0] === "." && /^\.\w+$/.test(A)) return Q.getElementsByClassName(A.substring(1));
            if (/^\w+$/.test(A)) return Q.getElementsByTagName(A)
        }
        return Xh2(A, Q)
    };
    TWA.selectors = FK;
    TWA.operators = Wh2;
    TWA.combinators = FTA;
    TWA.matches = function(A, Q) {
        var B = {
            sel: Q
        };
        do
            if (B = VTA(B.sel), B(A)) return !0; while (B.sel);
        return !1
    }
});
var W31 = U((kIZ, Vh2) => {
    var Yn5 = mD(),
        Jn5 = G70(),
        N70 = function(A, Q) {
            var B = A.createDocumentFragment();
            for (var G = 0; G < Q.length; G++) {
                var Z = Q[G],
                    I = Z instanceof Yn5;
                B.appendChild(I ? Z : A.createTextNode(String(Z)))
            }
            return B
        },
        Wn5 = {
            after: {
                value: function() {
                    var Q = Array.prototype.slice.call(arguments),
                        B = this.parentNode,
                        G = this.nextSibling;
                    if (B === null) return;
                    while (G && Q.some(function(I) {
                            return I === G
                        })) G = G.nextSibling;
                    var Z = N70(this.doc, Q);
                    B.insertBefore(Z, G)
                }
            },
            before: {
                value: function() {
                    var Q = Array.prototype.slice.call(arguments),
                        B = this.parentNode,
                        G = this.previousSibling;
                    if (B === null) return;
                    while (G && Q.some(function(Y) {
                            return Y === G
                        })) G = G.previousSibling;
                    var Z = N70(this.doc, Q),
                        I = G ? G.nextSibling : B.firstChild;
                    B.insertBefore(Z, I)
                }
            },
            remove: {
                value: function() {
                    if (this.parentNode === null) return;
                    if (this.doc) {
                        if (this.doc._preremoveNodeIterators(this), this.rooted) this.doc.mutateRemove(this)
                    }
                    this._remove(), this.parentNode = null
                }
            },
            _remove: {
                value: function() {
                    var Q = this.parentNode;
                    if (Q === null) return;
                    if (Q._childNodes) Q._childNodes.splice(this.index, 1);
                    else if (Q._firstChild === this)
                        if (this._nextSibling === this) Q._firstChild = null;
                        else Q._firstChild = this._nextSibling;
                    Jn5.remove(this), Q.modify()
                }
            },
            replaceWith: {
                value: function() {
                    var Q = Array.prototype.slice.call(arguments),
                        B = this.parentNode,
                        G = this.nextSibling;
                    if (B === null) return;
                    while (G && Q.some(function(I) {
                            return I === G
                        })) G = G.nextSibling;
                    var Z = N70(this.doc, Q);
                    if (this.parentNode === B) B.replaceChild(Z, this);
                    else B.insertBefore(Z, G)
                }
            }
        };
    Vh2.exports = Wn5
});
var L70 = U((yIZ, Dh2) => {
    var Kh2 = mD(),
        Xn5 = {
            nextElementSibling: {
                get: function() {
                    if (this.parentNode) {
                        for (var A = this.nextSibling; A !== null; A = A.nextSibling)
                            if (A.nodeType === Kh2.ELEMENT_NODE) return A
                    }
                    return null
                }
            },
            previousElementSibling: {
                get: function() {
                    if (this.parentNode) {
                        for (var A = this.previousSibling; A !== null; A = A.previousSibling)
                            if (A.nodeType === Kh2.ELEMENT_NODE) return A
                    }
                    return null
                }
            }
        };
    Dh2.exports = Xn5
});
var M70 = U((xIZ, Ch2) => {
    Ch2.exports = Hh2;
    var PWA = uJ();

    function Hh2(A) {
        this.element = A
    }
    Object.defineProperties(Hh2.prototype, {
        length: {
            get: PWA.shouldOverride
        },
        item: {
            value: PWA.shouldOverride
        },
        getNamedItem: {
            value: function(Q) {
                return this.element.getAttributeNode(Q)
            }
        },
        getNamedItemNS: {
            value: function(Q, B) {
                return this.element.getAttributeNodeNS(Q, B)
            }