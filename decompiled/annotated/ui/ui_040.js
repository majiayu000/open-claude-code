/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_040.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (15次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 40/53
 * Lines: 330423 - 331922 (1500 lines)
 * Original file: cli.js
 */

            return Object.defineProperty(G.prototype, "publicId", {
                get: function() {
                    return this.pubID
                }
            }), Object.defineProperty(G.prototype, "systemId", {
                get: function() {
                    return this.sysID
                }
            }), G
        }.call(this)
    }).call(ZR2)
});
var G61 = U((YR2, JR2) => {
    (function() {
        var A, Q, B, G, Z, I, Y, J, W;
        ({
            isObject: W
        } = Fy()), J = Mq(), A = bW(), Q = e81(), G = A61(), B = Q61(), Z = B61(), Y = a81(), JR2.exports = I = function() {
            class X extends J {
                constructor(F, V, K) {
                    var D, H, C, E;
                    super(F);
                    if (this.type = A.DocType, F.children) {
                        E = F.children;
                        for (H = 0, C = E.length; H < C; H++)
                            if (D = E[H], D.type === A.Element) {
                                this.name = D.name;
                                break
                            }
                    }
                    if (this.documentObject = F, W(V))({
                        pubID: V,
                        sysID: K
                    } = V);
                    if (K == null)[K, V] = [V, K];
                    if (V != null) this.pubID = this.stringify.dtdPubID(V);
                    if (K != null) this.sysID = this.stringify.dtdSysID(K)
                }
                element(F, V) {
                    var K = new B(this, F, V);
                    return this.children.push(K), this
                }
                attList(F, V, K, D, H) {
                    var C = new Q(this, F, V, K, D, H);
                    return this.children.push(C), this
                }
                entity(F, V) {
                    var K = new G(this, !1, F, V);
                    return this.children.push(K), this
                }
                pEntity(F, V) {
                    var K = new G(this, !0, F, V);
                    return this.children.push(K), this
                }
                notation(F, V) {
                    var K = new Z(this, F, V);
                    return this.children.push(K), this
                }
                toString(F) {
                    return this.options.writer.docType(this, this.options.writer.filterOptions(F))
                }
                ele(F, V) {
                    return this.element(F, V)
                }
                att(F, V, K, D, H) {
                    return this.attList(F, V, K, D, H)
                }
                ent(F, V) {
                    return this.entity(F, V)
                }
                pent(F, V) {
                    return this.pEntity(F, V)
                }
                not(F, V) {
                    return this.notation(F, V)
                }
                up() {
                    return this.root() || this.documentObject
                }
                isEqualNode(F) {
                    if (!super.isEqualNode(F)) return !1;
                    if (F.name !== this.name) return !1;
                    if (F.publicId !== this.publicId) return !1;
                    if (F.systemId !== this.systemId) return !1;
                    return !0
                }
            }
            return Object.defineProperty(X.prototype, "entities", {
                get: function() {
                    var F, V, K, D, H;
                    D = {}, H = this.children;
                    for (V = 0, K = H.length; V < K; V++)
                        if (F = H[V], F.type === A.EntityDeclaration && !F.pe) D[F.name] = F;
                    return new Y(D)
                }
            }), Object.defineProperty(X.prototype, "notations", {
                get: function() {
                    var F, V, K, D, H;
                    D = {}, H = this.children;
                    for (V = 0, K = H.length; V < K; V++)
                        if (F = H[V], F.type === A.NotationDeclaration) D[F.name] = F;
                    return new Y(D)
                }
            }), Object.defineProperty(X.prototype, "publicId", {
                get: function() {
                    return this.pubID
                }
            }), Object.defineProperty(X.prototype, "systemId", {
                get: function() {
                    return this.sysID
                }
            }), Object.defineProperty(X.prototype, "internalSubset", {
                get: function() {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
            }), X
        }.call(this)
    }).call(YR2)
});
var Z61 = U((WR2, XR2) => {
    (function() {
        var A, Q, B;
        A = bW(), Q = Mq(), XR2.exports = B = class extends Q {
            constructor(Z, I) {
                super(Z);
                if (I == null) throw Error("Missing raw text. " + this.debugInfo());
                this.type = A.Raw, this.value = this.stringify.raw(I)
            }
            clone() {
                return Object.create(this)
            }
            toString(Z) {
                return this.options.writer.raw(this, this.options.writer.filterOptions(Z))
            }
        }
    }).call(WR2)
});
var I61 = U((FR2, VR2) => {
    (function() {
        var A, Q, B;
        A = bW(), Q = FRA(), VR2.exports = B = function() {
            class G extends Q {
                constructor(Z, I) {
                    super(Z);
                    if (I == null) throw Error("Missing element text. " + this.debugInfo());
                    this.name = "#text", this.type = A.Text, this.value = this.stringify.text(I)
                }
                clone() {
                    return Object.create(this)
                }
                toString(Z) {
                    return this.options.writer.text(this, this.options.writer.filterOptions(Z))
                }
                splitText(Z) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                replaceWholeText(Z) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
            }
            return Object.defineProperty(G.prototype, "isElementContentWhitespace", {
                get: function() {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
            }), Object.defineProperty(G.prototype, "wholeText", {
                get: function() {
                    var Z, I, Y;
                    Y = "", I = this.previousSibling;
                    while (I) Y = I.data + Y, I = I.previousSibling;
                    Y += this.data, Z = this.nextSibling;
                    while (Z) Y = Y + Z.data, Z = Z.nextSibling;
                    return Y
                }
            }), G
        }.call(this)
    }).call(FR2)
});
var Y61 = U((KR2, DR2) => {
    (function() {
        var A, Q, B;
        A = bW(), Q = FRA(), DR2.exports = B = class extends Q {
            constructor(Z, I, Y) {
                super(Z);
                if (I == null) throw Error("Missing instruction target. " + this.debugInfo());
                if (this.type = A.ProcessingInstruction, this.target = this.stringify.insTarget(I), this.name = this.target, Y) this.value = this.stringify.insValue(Y)
            }
            clone() {
                return Object.create(this)
            }
            toString(Z) {
                return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(Z))
            }
            isEqualNode(Z) {
                if (!super.isEqualNode(Z)) return !1;
                if (Z.target !== this.target) return !1;
                return !0
            }
        }
    }).call(KR2)
});
var F80 = U((HR2, CR2) => {
    (function() {
        var A, Q, B;
        B = Mq(), A = bW(), CR2.exports = Q = class extends B {
            constructor(Z) {
                super(Z);
                this.type = A.Dummy
            }
            clone() {
                return Object.create(this)
            }
            toString(Z) {
                return ""
            }
        }
    }).call(HR2)
});
var UR2 = U((ER2, zR2) => {
    (function() {
        var A;
        zR2.exports = A = function() {
            class Q {
                constructor(B) {
                    this.nodes = B
                }
                clone() {
                    return this.nodes = null
                }
                item(B) {
                    return this.nodes[B] || null
                }
            }
            return Object.defineProperty(Q.prototype, "length", {
                get: function() {
                    return this.nodes.length || 0
                }
            }), Q
        }.call(this)
    }).call(ER2)
});
var qR2 = U(($R2, wR2) => {
    (function() {
        wR2.exports = {
            Disconnected: 1,
            Preceding: 2,
            Following: 4,
            Contains: 8,
            ContainedBy: 16,
            ImplementationSpecific: 32
        }
    }).call($R2)
});
var Mq = U((NR2, LR2) => {
    (function() {
        var A, Q, B, G, Z, I, Y, J, W, X, F, V, K, D, H, C, E, z, w = {}.hasOwnProperty,
            N = [].splice;
        ({
            isObject: z,
            isFunction: E,
            isEmpty: C,
            getValue: H
        } = Fy()), J = null, B = null, G = null, Z = null, I = null, K = null, D = null, V = null, Y = null, Q = null, F = null, W = null, A = null, LR2.exports = X = function() {
            class q {
                constructor(R) {
                    if (this.parent = R, this.parent) this.options = this.parent.options, this.stringify = this.parent.stringify;
                    if (this.value = null, this.children = [], this.baseURI = null, !J) J = s81(), B = r81(), G = o81(), Z = t81(), I = G61(), K = Z61(), D = I61(), V = Y61(), Y = F80(), Q = bW(), F = UR2(), W = a81(), A = qR2()
                }
                setParent(R) {
                    var P, y, v, x, p;
                    if (this.parent = R, R) this.options = R.options, this.stringify = R.stringify;
                    x = this.children, p = [];
                    for (y = 0, v = x.length; y < v; y++) P = x[y], p.push(P.setParent(this));
                    return p
                }
                element(R, P, y) {
                    var v, x, p, u, o, l, k, d, QA;
                    if (l = null, P === null && y == null)[P, y] = [{}, null];
                    if (P == null) P = {};
                    if (P = H(P), !z(P))[y, P] = [P, y];
                    if (R != null) R = H(R);
                    if (Array.isArray(R))
                        for (p = 0, k = R.length; p < k; p++) x = R[p], l = this.element(x);
                    else if (E(R)) l = this.element(R.apply());
                    else if (z(R))
                        for (o in R) {
                            if (!w.call(R, o)) continue;
                            if (QA = R[o], E(QA)) QA = QA.apply();
                            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && o.indexOf(this.stringify.convertAttKey) === 0) l = this.attribute(o.substr(this.stringify.convertAttKey.length), QA);
                            else if (!this.options.separateArrayItems && Array.isArray(QA) && C(QA)) l = this.dummy();
                            else if (z(QA) && C(QA)) l = this.element(o);
                            else if (!this.options.keepNullNodes && QA == null) l = this.dummy();
                            else if (!this.options.separateArrayItems && Array.isArray(QA))
                                for (u = 0, d = QA.length; u < d; u++) x = QA[u], v = {}, v[o] = x, l = this.element(v);
                            else if (z(QA))
                                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && o.indexOf(this.stringify.convertTextKey) === 0) l = this.element(QA);
                                else l = this.element(o), l.element(QA);
                            else l = this.element(o, QA)
                        } else if (!this.options.keepNullNodes && y === null) l = this.dummy();
                        else if (!this.options.ignoreDecorators && this.stringify.convertTextKey && R.indexOf(this.stringify.convertTextKey) === 0) l = this.text(y);
                    else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && R.indexOf(this.stringify.convertCDataKey) === 0) l = this.cdata(y);
                    else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && R.indexOf(this.stringify.convertCommentKey) === 0) l = this.comment(y);
                    else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && R.indexOf(this.stringify.convertRawKey) === 0) l = this.raw(y);
                    else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && R.indexOf(this.stringify.convertPIKey) === 0) l = this.instruction(R.substr(this.stringify.convertPIKey.length), y);
                    else l = this.node(R, P, y);
                    if (l == null) throw Error("Could not create any elements with: " + R + ". " + this.debugInfo());
                    return l
                }
                insertBefore(R, P, y) {
                    var v, x, p, u, o;
                    if (R != null ? R.type : void 0) {
                        if (p = R, u = P, p.setParent(this), u) x = children.indexOf(u), o = children.splice(x), children.push(p), Array.prototype.push.apply(children, o);
                        else children.push(p);
                        return p
                    } else {
                        if (this.isRoot) throw Error("Cannot insert elements at root level. " + this.debugInfo(R));
                        return x = this.parent.children.indexOf(this), o = this.parent.children.splice(x), v = this.parent.element(R, P, y), Array.prototype.push.apply(this.parent.children, o), v
                    }
                }
                insertAfter(R, P, y) {
                    var v, x, p;
                    if (this.isRoot) throw Error("Cannot insert elements at root level. " + this.debugInfo(R));
                    return x = this.parent.children.indexOf(this), p = this.parent.children.splice(x + 1), v = this.parent.element(R, P, y), Array.prototype.push.apply(this.parent.children, p), v
                }
                remove() {
                    var R, P;
                    if (this.isRoot) throw Error("Cannot remove the root element. " + this.debugInfo());
                    return R = this.parent.children.indexOf(this), N.apply(this.parent.children, [R, R - R + 1].concat(P = [])), this.parent
                }
                node(R, P, y) {
                    var v;
                    if (R != null) R = H(R);
                    if (P || (P = {}), P = H(P), !z(P))[y, P] = [P, y];
                    if (v = new J(this, R, P), y != null) v.text(y);
                    return this.children.push(v), v
                }
                text(R) {
                    var P;
                    if (z(R)) this.element(R);
                    return P = new D(this, R), this.children.push(P), this
                }
                cdata(R) {
                    var P = new B(this, R);
                    return this.children.push(P), this
                }
                comment(R) {
                    var P = new G(this, R);
                    return this.children.push(P), this
                }
                commentBefore(R) {
                    var P, y, v;
                    return y = this.parent.children.indexOf(this), v = this.parent.children.splice(y), P = this.parent.comment(R), Array.prototype.push.apply(this.parent.children, v), this
                }
                commentAfter(R) {
                    var P, y, v;
                    return y = this.parent.children.indexOf(this), v = this.parent.children.splice(y + 1), P = this.parent.comment(R), Array.prototype.push.apply(this.parent.children, v), this
                }
                raw(R) {
                    var P = new K(this, R);
                    return this.children.push(P), this
                }
                dummy() {
                    var R = new Y(this);
                    return R
                }
                instruction(R, P) {
                    var y, v, x, p, u;
                    if (R != null) R = H(R);
                    if (P != null) P = H(P);
                    if (Array.isArray(R))
                        for (p = 0, u = R.length; p < u; p++) y = R[p], this.instruction(y);
                    else if (z(R))
                        for (y in R) {
                            if (!w.call(R, y)) continue;
                            v = R[y], this.instruction(y, v)
                        } else {
                            if (E(P)) P = P.apply();
                            x = new V(this, R, P), this.children.push(x)
                        }
                    return this
                }
                instructionBefore(R, P) {
                    var y, v, x;
                    return v = this.parent.children.indexOf(this), x = this.parent.children.splice(v), y = this.parent.instruction(R, P), Array.prototype.push.apply(this.parent.children, x), this
                }
                instructionAfter(R, P) {
                    var y, v, x;
                    return v = this.parent.children.indexOf(this), x = this.parent.children.splice(v + 1), y = this.parent.instruction(R, P), Array.prototype.push.apply(this.parent.children, x), this
                }
                declaration(R, P, y) {
                    var v, x;
                    if (v = this.document(), x = new Z(v, R, P, y), v.children.length === 0) v.children.unshift(x);
                    else if (v.children[0].type === Q.Declaration) v.children[0] = x;
                    else v.children.unshift(x);
                    return v.root() || v
                }
                dtd(R, P) {
                    var y, v, x, p, u, o, l, k, d, QA;
                    v = this.document(), x = new I(v, R, P), d = v.children;
                    for (p = u = 0, l = d.length; u < l; p = ++u)
                        if (y = d[p], y.type === Q.DocType) return v.children[p] = x, x;
                    QA = v.children;
                    for (p = o = 0, k = QA.length; o < k; p = ++o)
                        if (y = QA[p], y.isRoot) return v.children.splice(p, 0, x), x;
                    return v.children.push(x), x
                }
                up() {
                    if (this.isRoot) throw Error("The root node has no parent. Use doc() if you need to get the document object.");
                    return this.parent
                }
                root() {
                    var R = this;
                    while (R)
                        if (R.type === Q.Document) return R.rootObject;
                        else if (R.isRoot) return R;
                    else R = R.parent
                }
                document() {
                    var R = this;
                    while (R)
                        if (R.type === Q.Document) return R;
                        else R = R.parent
                }
                end(R) {
                    return this.document().end(R)
                }
                prev() {
                    var R = this.parent.children.indexOf(this);
                    if (R < 1) throw Error("Already at the first node. " + this.debugInfo());
                    return this.parent.children[R - 1]
                }
                next() {
                    var R = this.parent.children.indexOf(this);
                    if (R === -1 || R === this.parent.children.length - 1) throw Error("Already at the last node. " + this.debugInfo());
                    return this.parent.children[R + 1]
                }
                importDocument(R) {
                    var P, y, v, x, p;
                    if (y = R.root().clone(), y.parent = this, y.isRoot = !1, this.children.push(y), this.type === Q.Document) {
                        if (y.isRoot = !0, y.documentObject = this, this.rootObject = y, this.children) {
                            p = this.children;
                            for (v = 0, x = p.length; v < x; v++)
                                if (P = p[v], P.type === Q.DocType) {
                                    P.name = y.name;
                                    break
                                }
                        }
                    }
                    return this
                }
                debugInfo(R) {
                    var P, y;
                    if (R = R || this.name, R == null && !((P = this.parent) != null ? P.name : void 0)) return "";
                    else if (R == null) return "parent: <" + this.parent.name + ">";
                    else if (!((y = this.parent) != null ? y.name : void 0)) return "node: <" + R + ">";
                    else return "node: <" + R + ">, parent: <" + this.parent.name + ">"
                }
                ele(R, P, y) {
                    return this.element(R, P, y)
                }
                nod(R, P, y) {
                    return this.node(R, P, y)
                }
                txt(R) {
                    return this.text(R)
                }
                dat(R) {
                    return this.cdata(R)
                }
                com(R) {
                    return this.comment(R)
                }
                ins(R, P) {
                    return this.instruction(R, P)
                }
                doc() {
                    return this.document()
                }
                dec(R, P, y) {
                    return this.declaration(R, P, y)
                }
                e(R, P, y) {
                    return this.element(R, P, y)
                }
                n(R, P, y) {
                    return this.node(R, P, y)
                }
                t(R) {
                    return this.text(R)
                }
                d(R) {
                    return this.cdata(R)
                }
                c(R) {
                    return this.comment(R)
                }
                r(R) {
                    return this.raw(R)
                }
                i(R, P) {
                    return this.instruction(R, P)
                }
                u() {
                    return this.up()
                }
                importXMLBuilder(R) {
                    return this.importDocument(R)
                }
                attribute(R, P) {
                    throw Error("attribute() applies to element nodes only.")
                }
                att(R, P) {
                    return this.attribute(R, P)
                }
                a(R, P) {
                    return this.attribute(R, P)
                }
                removeAttribute(R) {
                    throw Error("attribute() applies to element nodes only.")
                }
                replaceChild(R, P) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                removeChild(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                appendChild(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                hasChildNodes() {
                    return this.children.length !== 0
                }
                cloneNode(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                normalize() {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                isSupported(R, P) {
                    return !0
                }
                hasAttributes() {
                    return this.attribs.length !== 0
                }
                compareDocumentPosition(R) {
                    var P, y;
                    if (P = this, P === R) return 0;
                    else if (this.document() !== R.document()) {
                        if (y = A.Disconnected | A.ImplementationSpecific, Math.random() < 0.5) y |= A.Preceding;
                        else y |= A.Following;
                        return y
                    } else if (P.isAncestor(R)) return A.Contains | A.Preceding;
                    else if (P.isDescendant(R)) return A.Contains | A.Following;
                    else if (P.isPreceding(R)) return A.Preceding;
                    else return A.Following
                }
                isSameNode(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                lookupPrefix(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                isDefaultNamespace(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                lookupNamespaceURI(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                isEqualNode(R) {
                    var P, y, v;
                    if (R.nodeType !== this.nodeType) return !1;
                    if (R.children.length !== this.children.length) return !1;
                    for (P = y = 0, v = this.children.length - 1; 0 <= v ? y <= v : y >= v; P = 0 <= v ? ++y : --y)
                        if (!this.children[P].isEqualNode(R.children[P])) return !1;
                    return !0
                }
                getFeature(R, P) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                setUserData(R, P, y) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                getUserData(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                contains(R) {
                    if (!R) return !1;
                    return R === this || this.isDescendant(R)
                }
                isDescendant(R) {
                    var P, y, v, x, p;
                    p = this.children;
                    for (v = 0, x = p.length; v < x; v++) {
                        if (P = p[v], R === P) return !0;
                        if (y = P.isDescendant(R), y) return !0
                    }
                    return !1
                }
                isAncestor(R) {
                    return R.isDescendant(this)
                }
                isPreceding(R) {
                    var P, y;
                    if (P = this.treePosition(R), y = this.treePosition(this), P === -1 || y === -1) return !1;
                    else return P < y
                }
                isFollowing(R) {
                    var P, y;
                    if (P = this.treePosition(R), y = this.treePosition(this), P === -1 || y === -1) return !1;
                    else return P > y
                }
                treePosition(R) {
                    var P, y;
                    if (y = 0, P = !1, this.foreachTreeNode(this.document(), function(v) {
                            if (y++, !P && v === R) return P = !0
                        }), P) return y;
                    else return -1
                }
                foreachTreeNode(R, P) {
                    var y, v, x, p, u;
                    R || (R = this.document()), p = R.children;
                    for (v = 0, x = p.length; v < x; v++)
                        if (y = p[v], u = P(y)) return u;
                        else if (u = this.foreachTreeNode(y, P), u) return u
                }
            }
            return Object.defineProperty(q.prototype, "nodeName", {
                get: function() {
                    return this.name
                }
            }), Object.defineProperty(q.prototype, "nodeType", {
                get: function() {
                    return this.type
                }
            }), Object.defineProperty(q.prototype, "nodeValue", {
                get: function() {
                    return this.value
                }
            }), Object.defineProperty(q.prototype, "parentNode", {
                get: function() {
                    return this.parent
                }
            }), Object.defineProperty(q.prototype, "childNodes", {
                get: function() {
                    if (!this.childNodeList || !this.childNodeList.nodes) this.childNodeList = new F(this.children);
                    return this.childNodeList
                }
            }), Object.defineProperty(q.prototype, "firstChild", {
                get: function() {
                    return this.children[0] || null
                }
            }), Object.defineProperty(q.prototype, "lastChild", {
                get: function() {
                    return this.children[this.children.length - 1] || null
                }
            }), Object.defineProperty(q.prototype, "previousSibling", {
                get: function() {
                    var R = this.parent.children.indexOf(this);
                    return this.parent.children[R - 1] || null
                }
            }), Object.defineProperty(q.prototype, "nextSibling", {
                get: function() {
                    var R = this.parent.children.indexOf(this);
                    return this.parent.children[R + 1] || null
                }
            }), Object.defineProperty(q.prototype, "ownerDocument", {
                get: function() {
                    return this.document() || null
                }
            }), Object.defineProperty(q.prototype, "textContent", {
                get: function() {
                    var R, P, y, v, x;
                    if (this.nodeType === Q.Element || this.nodeType === Q.DocumentFragment) {
                        x = "", v = this.children;
                        for (P = 0, y = v.length; P < y; P++)
                            if (R = v[P], R.textContent) x += R.textContent;
                        return x
                    } else return null
                },
                set: function(R) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
            }), q
        }.call(this)
    }).call(NR2)
});
var V80 = U((MR2, OR2) => {
    (function() {
        var A, Q = {}.hasOwnProperty;
        OR2.exports = A = function() {
            class B {
                constructor(G) {
                    var Z, I, Y;
                    if (this.assertLegalChar = this.assertLegalChar.bind(this), this.assertLegalName = this.assertLegalName.bind(this), G || (G = {}), this.options = G, !this.options.version) this.options.version = "1.0";
                    I = G.stringify || {};
                    for (Z in I) {
                        if (!Q.call(I, Z)) continue;
                        Y = I[Z], this[Z] = Y
                    }
                }
                name(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalName("" + G || "")
                }
                text(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar(this.textEscape("" + G || ""))
                }
                cdata(G) {
                    if (this.options.noValidation) return G;
                    return G = "" + G || "", G = G.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(G)
                }
                comment(G) {
                    if (this.options.noValidation) return G;
                    if (G = "" + G || "", G.match(/--/)) throw Error("Comment text cannot contain double-hypen: " + G);
                    return this.assertLegalChar(G)
                }
                raw(G) {
                    if (this.options.noValidation) return G;
                    return "" + G || ""
                }
                attValue(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar(this.attEscape(G = "" + G || ""))
                }
                insTarget(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                insValue(G) {
                    if (this.options.noValidation) return G;
                    if (G = "" + G || "", G.match(/\?>/)) throw Error("Invalid processing instruction value: " + G);
                    return this.assertLegalChar(G)
                }
                xmlVersion(G) {
                    if (this.options.noValidation) return G;
                    if (G = "" + G || "", !G.match(/1\.[0-9]+/)) throw Error("Invalid version number: " + G);
                    return G
                }
                xmlEncoding(G) {
                    if (this.options.noValidation) return G;
                    if (G = "" + G || "", !G.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw Error("Invalid encoding: " + G);
                    return this.assertLegalChar(G)
                }
                xmlStandalone(G) {
                    if (this.options.noValidation) return G;
                    if (G) return "yes";
                    else return "no"
                }
                dtdPubID(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                dtdSysID(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                dtdElementValue(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                dtdAttType(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                dtdAttDefault(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                dtdEntityValue(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                dtdNData(G) {
                    if (this.options.noValidation) return G;
                    return this.assertLegalChar("" + G || "")
                }
                assertLegalChar(G) {
                    var Z, I;
                    if (this.options.noValidation) return G;
                    if (this.options.version === "1.0") {
                        if (Z = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, this.options.invalidCharReplacement !== void 0) G = G.replace(Z, this.options.invalidCharReplacement);
                        else if (I = G.match(Z)) throw Error(`Invalid character in string: ${G} at index ${I.index}`)
                    } else if (this.options.version === "1.1") {
                        if (Z = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, this.options.invalidCharReplacement !== void 0) G = G.replace(Z, this.options.invalidCharReplacement);
                        else if (I = G.match(Z)) throw Error(`Invalid character in string: ${G} at index ${I.index}`)
                    }
                    return G
                }
                assertLegalName(G) {
                    var Z;
                    if (this.options.noValidation) return G;
                    if (G = this.assertLegalChar(G), Z = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/, !G.match(Z)) throw Error(`Invalid character in name: ${G}`);
                    return G
                }
                textEscape(G) {
                    var Z;
                    if (this.options.noValidation) return G;
                    return Z = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g, G.replace(Z, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;")
                }
                attEscape(G) {
                    var Z;
                    if (this.options.noValidation) return G;
                    return Z = this.options.noDoubleEncoding ? /(?!&(lt|gt|amp|apos|quot);)&/g : /&/g, G.replace(Z, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;")
                }
            }
            return B.prototype.convertAttKey = "@", B.prototype.convertPIKey = "?", B.prototype.convertTextKey = "#text", B.prototype.convertCDataKey = "#cdata", B.prototype.convertCommentKey = "#comment", B.prototype.convertRawKey = "#raw", B
        }.call(this)
    }).call(MR2)
});
var VRA = U((RR2, TR2) => {
    (function() {
        TR2.exports = {
            None: 0,
            OpenTag: 1,
            InsideTag: 2,
            CloseTag: 3
        }
    }).call(RR2)
});
var K80 = U((PR2, jR2) => {
    (function() {
        var A, Q, B, G, Z, I, Y, J, W, X, F, V, K, D, H, C, E, z = {}.hasOwnProperty;
        ({
            assign: E
        } = Fy()), A = bW(), W = t81(), X = G61(), B = r81(), G = o81(), V = s81(), D = Z61(), H = I61(), K = Y61(), F = F80(), Z = e81(), I = Q61(), Y = A61(), J = B61(), Q = VRA(), jR2.exports = C = class {
            constructor(N) {
                var q, R, P;
                N || (N = {}), this.options = N, R = N.writer || {};
                for (q in R) {
                    if (!z.call(R, q)) continue;
                    P = R[q], this["_" + q] = this[q], this[q] = P
                }
            }
            filterOptions(N) {
                var q, R, P, y, v, x, p, u, o;
                if (N || (N = {}), N = E({}, this.options, N), q = {
                        writer: this
                    }, q.pretty = N.pretty || !1, q.allowEmpty = N.allowEmpty || !1, q.indent = (R = N.indent) != null ? R : "  ", q.newline = (P = N.newline) != null ? P : `
`, q.offset = (y = N.offset) != null ? y : 0, q.width = (v = N.width) != null ? v : 0, q.dontPrettyTextNodes = (x = (p = N.dontPrettyTextNodes) != null ? p : N.dontprettytextnodes) != null ? x : 0, q.spaceBeforeSlash = (u = (o = N.spaceBeforeSlash) != null ? o : N.spacebeforeslash) != null ? u : "", q.spaceBeforeSlash === !0) q.spaceBeforeSlash = " ";
                return q.suppressPrettyCount = 0, q.user = {}, q.state = Q.None, q
            }
            indent(N, q, R) {
                var P;
                if (!q.pretty || q.suppressPrettyCount) return "";
                else if (q.pretty) {
                    if (P = (R || 0) + q.offset + 1, P > 0) return Array(P).join(q.indent)
                }
                return ""
            }
            endline(N, q, R) {
                if (!q.pretty || q.suppressPrettyCount) return "";
                else return q.newline
            }
            attribute(N, q, R) {
                var P;
                if (this.openAttribute(N, q, R), q.pretty && q.width > 0) P = N.name + '="' + N.value + '"';
                else P = " " + N.name + '="' + N.value + '"';
                return this.closeAttribute(N, q, R), P
            }
            cdata(N, q, R) {
                var P;
                return this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<![CDATA[", q.state = Q.InsideTag, P += N.value, q.state = Q.CloseTag, P += "]]>" + this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            comment(N, q, R) {
                var P;
                return this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<!-- ", q.state = Q.InsideTag, P += N.value, q.state = Q.CloseTag, P += " -->" + this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            declaration(N, q, R) {
                var P;
                if (this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<?xml", q.state = Q.InsideTag, P += ' version="' + N.version + '"', N.encoding != null) P += ' encoding="' + N.encoding + '"';
                if (N.standalone != null) P += ' standalone="' + N.standalone + '"';
                return q.state = Q.CloseTag, P += q.spaceBeforeSlash + "?>", P += this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            docType(N, q, R) {
                var P, y, v, x, p;
                if (R || (R = 0), this.openNode(N, q, R), q.state = Q.OpenTag, x = this.indent(N, q, R), x += "<!DOCTYPE " + N.root().name, N.pubID && N.sysID) x += ' PUBLIC "' + N.pubID + '" "' + N.sysID + '"';
                else if (N.sysID) x += ' SYSTEM "' + N.sysID + '"';
                if (N.children.length > 0) {
                    x += " [", x += this.endline(N, q, R), q.state = Q.InsideTag, p = N.children;
                    for (y = 0, v = p.length; y < v; y++) P = p[y], x += this.writeChildNode(P, q, R + 1);
                    q.state = Q.CloseTag, x += "]"
                }
                return q.state = Q.CloseTag, x += q.spaceBeforeSlash + ">", x += this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), x
            }
            element(N, q, R) {
                var P, y, v, x, p, u, o, l, k, d, QA, IA, HA, wA, KA, SA, sA, NA, qA;
                if (R || (R = 0), IA = !1, this.openNode(N, q, R), q.state = Q.OpenTag, HA = this.indent(N, q, R) + "<" + N.name, q.pretty && q.width > 0) {
                    l = HA.length, KA = N.attribs;
                    for (QA in KA) {
                        if (!z.call(KA, QA)) continue;
                        if (P = KA[QA], wA = this.attribute(P, q, R), y = wA.length, l + y > q.width) qA = this.indent(N, q, R + 1) + wA, HA += this.endline(N, q, R) + qA, l = qA.length;
                        else qA = " " + wA, HA += qA, l += qA.length
                    }
                } else {
                    SA = N.attribs;
                    for (QA in SA) {
                        if (!z.call(SA, QA)) continue;
                        P = SA[QA], HA += this.attribute(P, q, R)
                    }
                }
                if (x = N.children.length, p = x === 0 ? null : N.children[0], x === 0 || N.children.every(function(DA) {
                        return (DA.type === A.Text || DA.type === A.Raw || DA.type === A.CData) && DA.value === ""
                    }))
                    if (q.allowEmpty) HA += ">", q.state = Q.CloseTag, HA += "</" + N.name + ">" + this.endline(N, q, R);
                    else q.state = Q.CloseTag, HA += q.spaceBeforeSlash + "/>" + this.endline(N, q, R);
                else if (q.pretty && x === 1 && (p.type === A.Text || p.type === A.Raw || p.type === A.CData) && p.value != null) HA += ">", q.state = Q.InsideTag, q.suppressPrettyCount++, IA = !0, HA += this.writeChildNode(p, q, R + 1), q.suppressPrettyCount--, IA = !1, q.state = Q.CloseTag, HA += "</" + N.name + ">" + this.endline(N, q, R);
                else {
                    if (q.dontPrettyTextNodes) {
                        sA = N.children;
                        for (u = 0, k = sA.length; u < k; u++)
                            if (v = sA[u], (v.type === A.Text || v.type === A.Raw || v.type === A.CData) && v.value != null) {
                                q.suppressPrettyCount++, IA = !0;
                                break
                            }
                    }
                    HA += ">" + this.endline(N, q, R), q.state = Q.InsideTag, NA = N.children;
                    for (o = 0, d = NA.length; o < d; o++) v = NA[o], HA += this.writeChildNode(v, q, R + 1);
                    if (q.state = Q.CloseTag, HA += this.indent(N, q, R) + "</" + N.name + ">", IA) q.suppressPrettyCount--;
                    HA += this.endline(N, q, R), q.state = Q.None
                }
                return this.closeNode(N, q, R), HA
            }
            writeChildNode(N, q, R) {
                switch (N.type) {
                    case A.CData:
                        return this.cdata(N, q, R);
                    case A.Comment:
                        return this.comment(N, q, R);
                    case A.Element:
                        return this.element(N, q, R);
                    case A.Raw:
                        return this.raw(N, q, R);
                    case A.Text:
                        return this.text(N, q, R);
                    case A.ProcessingInstruction:
                        return this.processingInstruction(N, q, R);
                    case A.Dummy:
                        return "";
                    case A.Declaration:
                        return this.declaration(N, q, R);
                    case A.DocType:
                        return this.docType(N, q, R);
                    case A.AttributeDeclaration:
                        return this.dtdAttList(N, q, R);
                    case A.ElementDeclaration:
                        return this.dtdElement(N, q, R);
                    case A.EntityDeclaration:
                        return this.dtdEntity(N, q, R);
                    case A.NotationDeclaration:
                        return this.dtdNotation(N, q, R);
                    default:
                        throw Error("Unknown XML node type: " + N.constructor.name)
                }
            }
            processingInstruction(N, q, R) {
                var P;
                if (this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<?", q.state = Q.InsideTag, P += N.target, N.value) P += " " + N.value;
                return q.state = Q.CloseTag, P += q.spaceBeforeSlash + "?>", P += this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            raw(N, q, R) {
                var P;
                return this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R), q.state = Q.InsideTag, P += N.value, q.state = Q.CloseTag, P += this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            text(N, q, R) {
                var P;
                return this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R), q.state = Q.InsideTag, P += N.value, q.state = Q.CloseTag, P += this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            dtdAttList(N, q, R) {
                var P;
                if (this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<!ATTLIST", q.state = Q.InsideTag, P += " " + N.elementName + " " + N.attributeName + " " + N.attributeType, N.defaultValueType !== "#DEFAULT") P += " " + N.defaultValueType;
                if (N.defaultValue) P += ' "' + N.defaultValue + '"';
                return q.state = Q.CloseTag, P += q.spaceBeforeSlash + ">" + this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            dtdElement(N, q, R) {
                var P;
                return this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<!ELEMENT", q.state = Q.InsideTag, P += " " + N.name + " " + N.value, q.state = Q.CloseTag, P += q.spaceBeforeSlash + ">" + this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            dtdEntity(N, q, R) {
                var P;
                if (this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<!ENTITY", q.state = Q.InsideTag, N.pe) P += " %";
                if (P += " " + N.name, N.value) P += ' "' + N.value + '"';
                else {
                    if (N.pubID && N.sysID) P += ' PUBLIC "' + N.pubID + '" "' + N.sysID + '"';
                    else if (N.sysID) P += ' SYSTEM "' + N.sysID + '"';
                    if (N.nData) P += " NDATA " + N.nData
                }
                return q.state = Q.CloseTag, P += q.spaceBeforeSlash + ">" + this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            dtdNotation(N, q, R) {
                var P;
                if (this.openNode(N, q, R), q.state = Q.OpenTag, P = this.indent(N, q, R) + "<!NOTATION", q.state = Q.InsideTag, P += " " + N.name, N.pubID && N.sysID) P += ' PUBLIC "' + N.pubID + '" "' + N.sysID + '"';
                else if (N.pubID) P += ' PUBLIC "' + N.pubID + '"';
                else if (N.sysID) P += ' SYSTEM "' + N.sysID + '"';
                return q.state = Q.CloseTag, P += q.spaceBeforeSlash + ">" + this.endline(N, q, R), q.state = Q.None, this.closeNode(N, q, R), P
            }
            openNode(N, q, R) {}
            closeNode(N, q, R) {}
            openAttribute(N, q, R) {}
            closeAttribute(N, q, R) {}
        }
    }).call(PR2)
});
var J61 = U((SR2, _R2) => {
    (function() {
        var A, Q;
        Q = K80(), _R2.exports = A = class extends Q {
            constructor(G) {
                super(G)
            }
            document(G, Z) {
                var I, Y, J, W, X;
                Z = this.filterOptions(Z), W = "", X = G.children;
                for (Y = 0, J = X.length; Y < J; Y++) I = X[Y], W += this.writeChildNode(I, Z, 0);
                if (Z.pretty && W.slice(-Z.newline.length) === Z.newline) W = W.slice(0, -Z.newline.length);
                return W
            }
        }
    }).call(SR2)
});
var D80 = U((kR2, yR2) => {
    (function() {
        var A, Q, B, G, Z, I, Y, J;
        ({
            isPlainObject: J
        } = Fy()), B = W80(), Q = vO2(), Z = Mq(), A = bW(), Y = V80(), I = J61(), yR2.exports = G = function() {
            class W extends Z {
                constructor(X) {
                    super(null);
                    if (this.name = "#document", this.type = A.Document, this.documentURI = null, this.domConfig = new Q, X || (X = {}), !X.writer) X.writer = new I;
                    this.options = X, this.stringify = new Y(X)
                }
                end(X) {
                    var F = {};
                    if (!X) X = this.options.writer;
                    else if (J(X)) F = X, X = this.options.writer;
                    return X.document(this, X.filterOptions(F))
                }
                toString(X) {
                    return this.options.writer.document(this, this.options.writer.filterOptions(X))
                }
                createElement(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createDocumentFragment() {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createTextNode(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createComment(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createCDATASection(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createProcessingInstruction(X, F) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createAttribute(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createEntityReference(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                getElementsByTagName(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                importNode(X, F) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createElementNS(X, F) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createAttributeNS(X, F) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                getElementsByTagNameNS(X, F) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                getElementById(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                adoptNode(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                normalizeDocument() {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                renameNode(X, F, V) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                getElementsByClassName(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createEvent(X) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createRange() {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createNodeIterator(X, F, V) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
                createTreeWalker(X, F, V) {
                    throw Error("This DOM method is not implemented." + this.debugInfo())
                }
            }
            return Object.defineProperty(W.prototype, "implementation", {
                value: new B
            }), Object.defineProperty(W.prototype, "doctype", {
                get: function() {
                    var X, F, V, K;
                    K = this.children;
                    for (F = 0, V = K.length; F < V; F++)
                        if (X = K[F], X.type === A.DocType) return X;
                    return null
                }
            }), Object.defineProperty(W.prototype, "documentElement", {
                get: function() {
                    return this.rootObject || null
                }
            }), Object.defineProperty(W.prototype, "inputEncoding", {
                get: function() {
                    return null
                }
            }), Object.defineProperty(W.prototype, "strictErrorChecking", {
                get: function() {
                    return !1
                }
            }), Object.defineProperty(W.prototype, "xmlEncoding", {
                get: function() {
                    if (this.children.length !== 0 && this.children[0].type === A.Declaration) return this.children[0].encoding;
                    else return null
                }
            }), Object.defineProperty(W.prototype, "xmlStandalone", {
                get: function() {
                    if (this.children.length !== 0 && this.children[0].type === A.Declaration) return this.children[0].standalone === "yes";
                    else return !1
                }
            }), Object.defineProperty(W.prototype, "xmlVersion", {
                get: function() {
                    if (this.children.length !== 0 && this.children[0].type === A.Declaration) return this.children[0].version;
                    else return "1.0"
                }
            }), Object.defineProperty(W.prototype, "URL", {
                get: function() {
                    return this.documentURI
                }
            }), Object.defineProperty(W.prototype, "origin", {
                get: function() {
                    return null
                }
            }), Object.defineProperty(W.prototype, "compatMode", {
                get: function() {
                    return null
                }
            }), Object.defineProperty(W.prototype, "characterSet", {
                get: function() {
                    return null
                }
            }), Object.defineProperty(W.prototype, "contentType", {
                get: function() {
                    return null
                }
            }), W
        }.call(this)
    }).call(kR2)
});
var bR2 = U((xR2, vR2) => {
    (function() {
        var A, Q, B, G, Z, I, Y, J, W, X, F, V, K, D, H, C, E, z, w, N, q, R, P, y = {}.hasOwnProperty;
        ({
            isObject: R,
            isFunction: q,
            isPlainObject: P,
            getValue: N
        } = Fy()), A = bW(), V = D80(), D = s81(), G = r81(), Z = o81(), C = Z61(), w = I61(), H = Y61(), X = t81(), F = G61(), I = e81(), J = A61(), Y = Q61(), W = B61(), B = X80(), z = V80(), E = J61(), Q = VRA(), vR2.exports = K = class {
            constructor(x, p, u) {
                var o;
                if (this.name = "?xml", this.type = A.Document, x || (x = {}), o = {}, !x.writer) x.writer = new E;
                else if (P(x.writer)) o = x.writer, x.writer = new E;
                this.options = x, this.writer = x.writer, this.writerOptions = this.writer.filterOptions(o), this.stringify = new z(x), this.onDataCallback = p || function() {}, this.onEndCallback = u || function() {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null
            }
            createChildNode(x) {
                var p, u, o, l, k, d, QA, IA;
                switch (x.type) {
                    case A.CData:
                        this.cdata(x.value);
                        break;
                    case A.Comment:
                        this.comment(x.value);
                        break;
                    case A.Element:
                        o = {}, QA = x.attribs;
                        for (u in QA) {
                            if (!y.call(QA, u)) continue;
                            p = QA[u], o[u] = p.value
                        }
                        this.node(x.name, o);
                        break;
                    case A.Dummy:
                        this.dummy();
                        break;
                    case A.Raw:
                        this.raw(x.value);
                        break;
                    case A.Text:
                        this.text(x.value);
                        break;
                    case A.ProcessingInstruction:
                        this.instruction(x.target, x.value);
                        break;
                    default:
                        throw Error("This XML node type is not supported in a JS object: " + x.constructor.name)
                }
                IA = x.children;
                for (k = 0, d = IA.length; k < d; k++)
                    if (l = IA[k], this.createChildNode(l), l.type === A.Element) this.up();
                return this
            }
            dummy() {
                return this
            }
            node(x, p, u) {
                if (x == null) throw Error("Missing node name.");
                if (this.root && this.currentLevel === -1) throw Error("Document can only have one root node. " + this.debugInfo(x));
                if (this.openCurrent(), x = N(x), p == null) p = {};
                if (p = N(p), !R(p))[u, p] = [p, u];
                if (this.currentNode = new D(this, x, p), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, u != null) this.text(u);
                return this
            }
            element(x, p, u) {
                var o, l, k, d, QA, IA;
                if (this.currentNode && this.currentNode.type === A.DocType) this.dtdElement(...arguments);
                else if (Array.isArray(x) || R(x) || q(x)) {
                    d = this.options.noValidation, this.options.noValidation = !0, IA = new V(this.options).element("TEMP_ROOT"), IA.element(x), this.options.noValidation = d, QA = IA.children;
                    for (l = 0, k = QA.length; l < k; l++)
                        if (o = QA[l], this.createChildNode(o), o.type === A.Element) this.up()
                } else this.node(x, p, u);
                return this
            }
            attribute(x, p) {
                var u, o;
                if (!this.currentNode || this.currentNode.children) throw Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(x));
                if (x != null) x = N(x);
                if (R(x))
                    for (u in x) {
                        if (!y.call(x, u)) continue;
                        o = x[u], this.attribute(u, o)
                    } else {
                        if (q(p)) p = p.apply();
                        if (this.options.keepNullAttributes && p == null) this.currentNode.attribs[x] = new B(this, x, "");
                        else if (p != null) this.currentNode.attribs[x] = new B(this, x, p)
                    }
                return this
            }
            text(x) {
                var p;
                return this.openCurrent(), p = new w(this, x), this.onData(this.writer.text(p, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            cdata(x) {
                var p;
                return this.openCurrent(), p = new G(this, x), this.onData(this.writer.cdata(p, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            comment(x) {
                var p;
                return this.openCurrent(), p = new Z(this, x), this.onData(this.writer.comment(p, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            raw(x) {
                var p;
                return this.openCurrent(), p = new C(this, x), this.onData(this.writer.raw(p, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            instruction(x, p) {
                var u, o, l, k, d;
                if (this.openCurrent(), x != null) x = N(x);
                if (p != null) p = N(p);
                if (Array.isArray(x))
                    for (u = 0, k = x.length; u < k; u++) o = x[u], this.instruction(o);
                else if (R(x))
                    for (o in x) {
                        if (!y.call(x, o)) continue;
                        l = x[o], this.instruction(o, l)
                    } else {
                        if (q(p)) p = p.apply();
                        d = new H(this, x, p), this.onData(this.writer.processingInstruction(d, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1)
                    }
                return this
            }
            declaration(x, p, u) {
                var o;
                if (this.openCurrent(), this.documentStarted) throw Error("declaration() must be the first node.");
                return o = new X(this, x, p, u), this.onData(this.writer.declaration(o, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            doctype(x, p, u) {
                if (this.openCurrent(), x == null) throw Error("Missing root node name.");
                if (this.root) throw Error("dtd() must come before the root node.");
                return this.currentNode = new F(this, p, u), this.currentNode.rootNodeName = x, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this
            }
            dtdElement(x, p) {
                var u;
                return this.openCurrent(), u = new Y(this, x, p), this.onData(this.writer.dtdElement(u, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            attList(x, p, u, o, l) {
                var k;
                return this.openCurrent(), k = new I(this, x, p, u, o, l), this.onData(this.writer.dtdAttList(k, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            entity(x, p) {
                var u;
                return this.openCurrent(), u = new J(this, !1, x, p), this.onData(this.writer.dtdEntity(u, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            pEntity(x, p) {
                var u;
                return this.openCurrent(), u = new J(this, !0, x, p), this.onData(this.writer.dtdEntity(u, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            notation(x, p) {
                var u;
                return this.openCurrent(), u = new W(this, x, p), this.onData(this.writer.dtdNotation(u, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
            }
            up() {
                if (this.currentLevel < 0) throw Error("The document node has no parent.");
                if (this.currentNode) {
                    if (this.currentNode.children) this.closeNode(this.currentNode);
                    else this.openNode(this.currentNode);
                    this.currentNode = null
                } else this.closeNode(this.openTags[this.currentLevel]);
                return delete this.openTags[this.currentLevel], this.currentLevel--, this
            }
            end() {
                while (this.currentLevel >= 0) this.up();
                return this.onEnd()
            }
            openCurrent() {
                if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode)
            }
            openNode(x) {
                var p, u, o, l;
                if (!x.isOpen) {
                    if (!this.root && this.currentLevel === 0 && x.type === A.Element) this.root = x;
                    if (u = "", x.type === A.Element) {
                        this.writerOptions.state = Q.OpenTag, u = this.writer.indent(x, this.writerOptions, this.currentLevel) + "<" + x.name, l = x.attribs;
                        for (o in l) {
                            if (!y.call(l, o)) continue;
                            p = l[o], u += this.writer.attribute(p, this.writerOptions, this.currentLevel)
                        }
                        u += (x.children ? ">" : "/>") + this.writer.endline(x, this.writerOptions, this.currentLevel), this.writerOptions.state = Q.InsideTag
                    } else {
                        if (this.writerOptions.state = Q.OpenTag, u = this.writer.indent(x, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + x.rootNodeName, x.pubID && x.sysID) u += ' PUBLIC "' + x.pubID + '" "' + x.sysID + '"';
                        else if (x.sysID) u += ' SYSTEM "' + x.sysID + '"';
                        if (x.children) u += " [", this.writerOptions.state = Q.InsideTag;
                        else this.writerOptions.state = Q.CloseTag, u += ">";
                        u += this.writer.endline(x, this.writerOptions, this.currentLevel)
                    }
                    return this.onData(u, this.currentLevel), x.isOpen = !0
                }
            }
            closeNode(x) {
                var p;
                if (!x.isClosed) {
                    if (p = "", this.writerOptions.state = Q.CloseTag, x.type === A.Element) p = this.writer.indent(x, this.writerOptions, this.currentLevel) + "</" + x.name + ">" + this.writer.endline(x, this.writerOptions, this.currentLevel);
                    else p = this.writer.indent(x, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(x, this.writerOptions, this.currentLevel);
                    return this.writerOptions.state = Q.None, this.onData(p, this.currentLevel), x.isClosed = !0
                }
            }
            onData(x, p) {
                return this.documentStarted = !0, this.onDataCallback(x, p + 1)
            }
            onEnd() {
                return this.documentCompleted = !0, this.onEndCallback()
            }
            debugInfo(x) {
                if (x == null) return "";
                else return "node: <" + x + ">"
            }
            ele() {
                return this.element(...arguments)
            }
            nod(x, p, u) {
                return this.node(x, p, u)
            }
            txt(x) {
                return this.text(x)
            }
            dat(x) {
                return this.cdata(x)
            }
            com(x) {
                return this.comment(x)
            }
            ins(x, p) {
                return this.instruction(x, p)
            }
            dec(x, p, u) {
                return this.declaration(x, p, u)
            }
            dtd(x, p, u) {
                return this.doctype(x, p, u)
            }
            e(x, p, u) {
                return this.element(x, p, u)
            }
            n(x, p, u) {
                return this.node(x, p, u)
            }
            t(x) {
                return this.text(x)
            }
            d(x) {
                return this.cdata(x)
            }
            c(x) {
                return this.comment(x)
            }
            r(x) {
                return this.raw(x)
            }
            i(x, p) {
                return this.instruction(x, p)
            }
            att() {
                if (this.currentNode && this.currentNode.type === A.DocType) return this.attList(...arguments);
                else return this.attribute(...arguments)
            }
            a() {
                if (this.currentNode && this.currentNode.type === A.DocType) return this.attList(...arguments);
                else return this.attribute(...arguments)
            }
            ent(x, p) {
                return this.entity(x, p)
            }
            pent(x, p) {
                return this.pEntity(x, p)
            }
            not(x, p) {
                return this.notation(x, p)
            }
        }
    }).call(xR2)
});
var gR2 = U((fR2, hR2) => {
    (function() {
        var A, Q, B, G, Z = {}.hasOwnProperty;
        A = bW(), G = K80(), Q = VRA(), hR2.exports = B = class extends G {
            constructor(Y, J) {
                super(J);
                this.stream = Y
            }
            endline(Y, J, W) {
                if (Y.isLastRootNode && J.state === Q.CloseTag) return "";
                else return super.endline(Y, J, W)
            }
            document(Y, J) {
                var W, X, F, V, K, D, H, C, E;
                H = Y.children;
                for (X = F = 0, K = H.length; F < K; X = ++F) W = H[X], W.isLastRootNode = X === Y.children.length - 1;
                J = this.filterOptions(J), C = Y.children, E = [];
                for (V = 0, D = C.length; V < D; V++) W = C[V], E.push(this.writeChildNode(W, J, 0));
                return E
            }
            cdata(Y, J, W) {
                return this.stream.write(super.cdata(Y, J, W))
            }
            comment(Y, J, W) {
                return this.stream.write(super.comment(Y, J, W))
            }
            declaration(Y, J, W) {
                return this.stream.write(super.declaration(Y, J, W))
            }
            docType(Y, J, W) {
                var X, F, V, K;
                if (W || (W = 0), this.openNode(Y, J, W), J.state = Q.OpenTag, this.stream.write(this.indent(Y, J, W)), this.stream.write("<!DOCTYPE " + Y.root().name), Y.pubID && Y.sysID) this.stream.write(' PUBLIC "' + Y.pubID + '" "' + Y.sysID + '"');
                else if (Y.sysID) this.stream.write(' SYSTEM "' + Y.sysID + '"');
                if (Y.children.length > 0) {
                    this.stream.write(" ["), this.stream.write(this.endline(Y, J, W)), J.state = Q.InsideTag, K = Y.children;
                    for (F = 0, V = K.length; F < V; F++) X = K[F], this.writeChildNode(X, J, W + 1);
                    J.state = Q.CloseTag, this.stream.write("]")
                }
                return J.state = Q.CloseTag, this.stream.write(J.spaceBeforeSlash + ">"), this.stream.write(this.endline(Y, J, W)), J.state = Q.None, this.closeNode(Y, J, W)
            }
            element(Y, J, W) {
                var X, F, V, K, D, H, C, E, z, w, N, q, R, P, y, v;
                if (W || (W = 0), this.openNode(Y, J, W), J.state = Q.OpenTag, N = this.indent(Y, J, W) + "<" + Y.name, J.pretty && J.width > 0) {
                    C = N.length, R = Y.attribs;
                    for (z in R) {
                        if (!Z.call(R, z)) continue;
                        if (X = R[z], q = this.attribute(X, J, W), F = q.length, C + F > J.width) v = this.indent(Y, J, W + 1) + q, N += this.endline(Y, J, W) + v, C = v.length;
                        else v = " " + q, N += v, C += v.length
                    }
                } else {
                    P = Y.attribs;
                    for (z in P) {
                        if (!Z.call(P, z)) continue;
                        X = P[z], N += this.attribute(X, J, W)
                    }
                }
                if (this.stream.write(N), K = Y.children.length, D = K === 0 ? null : Y.children[0], K === 0 || Y.children.every(function(x) {
                        return (x.type === A.Text || x.type === A.Raw || x.type === A.CData) && x.value === ""
                    }))
                    if (J.allowEmpty) this.stream.write(">"), J.state = Q.CloseTag, this.stream.write("</" + Y.name + ">");
                    else J.state = Q.CloseTag, this.stream.write(J.spaceBeforeSlash + "/>");
                else if (J.pretty && K === 1 && (D.type === A.Text || D.type === A.Raw || D.type === A.CData) && D.value != null) this.stream.write(">"), J.state = Q.InsideTag, J.suppressPrettyCount++, w = !0, this.writeChildNode(D, J, W + 1), J.suppressPrettyCount--, w = !1, J.state = Q.CloseTag, this.stream.write("</" + Y.name + ">");