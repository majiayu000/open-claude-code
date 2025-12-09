/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_010.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (7次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 10/53
 * Lines: 65798 - 67297 (1500 lines)
 * Original file: cli.js
 */

    function XE4(A) {
        if (this.options.removeNSPrefix) {
            let Q = A.split(":"),
                B = A.charAt(0) === "/" ? "/" : "";
            if (Q[0] === "xmlns") return "";
            if (Q.length === 2) A = B + Q[1]
        }
        return A
    }
    var FE4 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");

    function VE4(A, Q, B) {
        if (!this.options.ignoreAttributes && typeof A === "string") {
            let G = Q1Q.getAllMatches(A, FE4),
                Z = G.length,
                I = {};
            for (let Y = 0; Y < Z; Y++) {
                let J = this.resolveNameSpace(G[Y][1]),
                    W = G[Y][4],
                    X = this.options.attributeNamePrefix + J;
                if (J.length) {
                    if (this.options.transformAttributeName) X = this.options.transformAttributeName(X);
                    if (X === "__proto__") X = "#__proto__";
                    if (W !== void 0) {
                        if (this.options.trimValues) W = W.trim();
                        W = this.replaceEntitiesValue(W);
                        let F = this.options.attributeValueProcessor(J, W, Q);
                        if (F === null || F === void 0) I[X] = W;
                        else if (typeof F !== typeof W || F !== W) I[X] = F;
                        else I[X] = cz1(W, this.options.parseAttributeValue, this.options.numberParseOptions)
                    } else if (this.options.allowBooleanAttributes) I[X] = !0
                }
            }
            if (!Object.keys(I).length) return;
            if (this.options.attributesGroupName) {
                let Y = {};
                return Y[this.options.attributesGroupName] = I, Y
            }
            return I
        }
    }
    var KE4 = function(A) {
        A = A.replace(/\r\n?/g, `
`);
        let Q = new JDA("!xml"),
            B = Q,
            G = "",
            Z = "";
        for (let I = 0; I < A.length; I++)
            if (A[I] === "<")
                if (A[I + 1] === "/") {
                    let J = Cr(A, ">", I, "Closing Tag is not closed."),
                        W = A.substring(I + 2, J).trim();
                    if (this.options.removeNSPrefix) {
                        let V = W.indexOf(":");
                        if (V !== -1) W = W.substr(V + 1)
                    }
                    if (this.options.transformTagName) W = this.options.transformTagName(W);
                    if (B) G = this.saveTextToParentTag(G, B, Z);
                    let X = Z.substring(Z.lastIndexOf(".") + 1);
                    if (W && this.options.unpairedTags.indexOf(W) !== -1) throw Error(`Unpaired tag can not be used as closing tag: </${W}>`);
                    let F = 0;
                    if (X && this.options.unpairedTags.indexOf(X) !== -1) F = Z.lastIndexOf(".", Z.lastIndexOf(".") - 1), this.tagsNodeStack.pop();
                    else F = Z.lastIndexOf(".");
                    Z = Z.substring(0, F), B = this.tagsNodeStack.pop(), G = "", I = J
                } else if (A[I + 1] === "?") {
            let J = dz1(A, I, !1, "?>");
            if (!J) throw Error("Pi Tag is not closed.");
            if (G = this.saveTextToParentTag(G, B, Z), this.options.ignoreDeclaration && J.tagName === "?xml" || this.options.ignorePiTags);
            else {
                let W = new JDA(J.tagName);
                if (W.add(this.options.textNodeName, ""), J.tagName !== J.tagExp && J.attrExpPresent) W[":@"] = this.buildAttributesMap(J.tagExp, Z, J.tagName);
                this.addChild(B, W, Z)
            }
            I = J.closeIndex + 1
        } else if (A.substr(I + 1, 3) === "!--") {
            let J = Cr(A, "-->", I + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
                let W = A.substring(I + 4, J - 2);
                G = this.saveTextToParentTag(G, B, Z), B.add(this.options.commentPropName, [{
                    [this.options.textNodeName]: W
                }])
            }
            I = J
        } else if (A.substr(I + 1, 2) === "!D") {
            let J = IE4(A, I);
            this.docTypeEntities = J.entities, I = J.i
        } else if (A.substr(I + 1, 2) === "![") {
            let J = Cr(A, "]]>", I, "CDATA is not closed.") - 2,
                W = A.substring(I + 9, J);
            G = this.saveTextToParentTag(G, B, Z);
            let X = this.parseTextData(W, B.tagname, Z, !0, !1, !0, !0);
            if (X == null) X = "";
            if (this.options.cdataPropName) B.add(this.options.cdataPropName, [{
                [this.options.textNodeName]: W
            }]);
            else B.add(this.options.textNodeName, X);
            I = J + 2
        } else {
            let J = dz1(A, I, this.options.removeNSPrefix),
                W = J.tagName,
                X = J.rawTagName,
                F = J.tagExp,
                V = J.attrExpPresent,
                K = J.closeIndex;
            if (this.options.transformTagName) W = this.options.transformTagName(W);
            if (B && G) {
                if (B.tagname !== "!xml") G = this.saveTextToParentTag(G, B, Z, !1)
            }
            let D = B;
            if (D && this.options.unpairedTags.indexOf(D.tagname) !== -1) B = this.tagsNodeStack.pop(), Z = Z.substring(0, Z.lastIndexOf("."));
            if (W !== Q.tagname) Z += Z ? "." + W : W;
            if (this.isItStopNode(this.options.stopNodes, Z, W)) {
                let H = "";
                if (F.length > 0 && F.lastIndexOf("/") === F.length - 1) {
                    if (W[W.length - 1] === "/") W = W.substr(0, W.length - 1), Z = Z.substr(0, Z.length - 1), F = W;
                    else F = F.substr(0, F.length - 1);
                    I = J.closeIndex
                } else if (this.options.unpairedTags.indexOf(W) !== -1) I = J.closeIndex;
                else {
                    let E = this.readStopNodeData(A, X, K + 1);
                    if (!E) throw Error(`Unexpected end of ${X}`);
                    I = E.i, H = E.tagContent
                }
                let C = new JDA(W);
                if (W !== F && V) C[":@"] = this.buildAttributesMap(F, Z, W);
                if (H) H = this.parseTextData(H, W, Z, !0, V, !0, !0);
                Z = Z.substr(0, Z.lastIndexOf(".")), C.add(this.options.textNodeName, H), this.addChild(B, C, Z)
            } else {
                if (F.length > 0 && F.lastIndexOf("/") === F.length - 1) {
                    if (W[W.length - 1] === "/") W = W.substr(0, W.length - 1), Z = Z.substr(0, Z.length - 1), F = W;
                    else F = F.substr(0, F.length - 1);
                    if (this.options.transformTagName) W = this.options.transformTagName(W);
                    let H = new JDA(W);
                    if (W !== F && V) H[":@"] = this.buildAttributesMap(F, Z, W);
                    this.addChild(B, H, Z), Z = Z.substr(0, Z.lastIndexOf("."))
                } else {
                    let H = new JDA(W);
                    if (this.tagsNodeStack.push(B), W !== F && V) H[":@"] = this.buildAttributesMap(F, Z, W);
                    this.addChild(B, H, Z), B = H
                }
                G = "", I = K
            }
        } else G += A[I];
        return Q.child
    };

    function DE4(A, Q, B) {
        let G = this.options.updateTag(Q.tagname, B, Q[":@"]);
        if (G === !1);
        else if (typeof G === "string") Q.tagname = G, A.addChild(Q);
        else A.addChild(Q)
    }
    var HE4 = function(A) {
        if (this.options.processEntities) {
            for (let Q in this.docTypeEntities) {
                let B = this.docTypeEntities[Q];
                A = A.replace(B.regx, B.val)
            }
            for (let Q in this.lastEntities) {
                let B = this.lastEntities[Q];
                A = A.replace(B.regex, B.val)
            }
            if (this.options.htmlEntities)
                for (let Q in this.htmlEntities) {
                    let B = this.htmlEntities[Q];
                    A = A.replace(B.regex, B.val)
                }
            A = A.replace(this.ampEntity.regex, this.ampEntity.val)
        }
        return A
    };

    function CE4(A, Q, B, G) {
        if (A) {
            if (G === void 0) G = Object.keys(Q.child).length === 0;
            if (A = this.parseTextData(A, Q.tagname, B, !1, Q[":@"] ? Object.keys(Q[":@"]).length !== 0 : !1, G), A !== void 0 && A !== "") Q.add(this.options.textNodeName, A);
            A = ""
        }
        return A
    }

    function EE4(A, Q, B) {
        let G = "*." + B;
        for (let Z in A) {
            let I = A[Z];
            if (G === I || Q === I) return !0
        }
        return !1
    }

    function zE4(A, Q, B = ">") {
        let G, Z = "";
        for (let I = Q; I < A.length; I++) {
            let Y = A[I];
            if (G) {
                if (Y === G) G = ""
            } else if (Y === '"' || Y === "'") G = Y;
            else if (Y === B[0])
                if (B[1]) {
                    if (A[I + 1] === B[1]) return {
                        data: Z,
                        index: I
                    }
                } else return {
                    data: Z,
                    index: I
                };
            else if (Y === "\t") Y = " ";
            Z += Y
        }
    }

    function Cr(A, Q, B, G) {
        let Z = A.indexOf(Q, B);
        if (Z === -1) throw Error(G);
        else return Z + Q.length - 1
    }

    function dz1(A, Q, B, G = ">") {
        let Z = zE4(A, Q + 1, G);
        if (!Z) return;
        let {
            data: I,
            index: Y
        } = Z, J = I.search(/\s/), W = I, X = !0;
        if (J !== -1) W = I.substring(0, J), I = I.substring(J + 1).trimStart();
        let F = W;
        if (B) {
            let V = W.indexOf(":");
            if (V !== -1) W = W.substr(V + 1), X = W !== Z.data.substr(V + 1)
        }
        return {
            tagName: W,
            tagExp: I,
            closeIndex: Y,
            attrExpPresent: X,
            rawTagName: F
        }
    }

    function UE4(A, Q, B) {
        let G = B,
            Z = 1;
        for (; B < A.length; B++)
            if (A[B] === "<")
                if (A[B + 1] === "/") {
                    let I = Cr(A, ">", B, `${Q} is not closed`);
                    if (A.substring(B + 2, I).trim() === Q) {
                        if (Z--, Z === 0) return {
                            tagContent: A.substring(G, B),
                            i: I
                        }
                    }
                    B = I
                } else if (A[B + 1] === "?") B = Cr(A, "?>", B + 1, "StopNode is not closed.");
        else if (A.substr(B + 1, 3) === "!--") B = Cr(A, "-->", B + 3, "StopNode is not closed.");
        else if (A.substr(B + 1, 2) === "![") B = Cr(A, "]]>", B, "StopNode is not closed.") - 2;
        else {
            let I = dz1(A, B, ">");
            if (I) {
                if ((I && I.tagName) === Q && I.tagExp[I.tagExp.length - 1] !== "/") Z++;
                B = I.closeIndex
            }
        }
    }

    function cz1(A, Q, B) {
        if (Q && typeof A === "string") {
            let G = A.trim();
            if (G === "true") return !0;
            else if (G === "false") return !1;
            else return YE4(A, B)
        } else if (Q1Q.isExist(A)) return A;
        else return ""
    }
    G1Q.exports = B1Q
});
var Y1Q = U((LE4) => {
    function $E4(A, Q) {
        return I1Q(A, Q)
    }

    function I1Q(A, Q, B) {
        let G, Z = {};
        for (let I = 0; I < A.length; I++) {
            let Y = A[I],
                J = wE4(Y),
                W = "";
            if (B === void 0) W = J;
            else W = B + "." + J;
            if (J === Q.textNodeName)
                if (G === void 0) G = Y[J];
                else G += "" + Y[J];
            else if (J === void 0) continue;
            else if (Y[J]) {
                let X = I1Q(Y[J], Q, W),
                    F = NE4(X, Q);
                if (Y[":@"]) qE4(X, Y[":@"], W, Q);
                else if (Object.keys(X).length === 1 && X[Q.textNodeName] !== void 0 && !Q.alwaysCreateTextNode) X = X[Q.textNodeName];
                else if (Object.keys(X).length === 0)
                    if (Q.alwaysCreateTextNode) X[Q.textNodeName] = "";
                    else X = "";
                if (Z[J] !== void 0 && Z.hasOwnProperty(J)) {
                    if (!Array.isArray(Z[J])) Z[J] = [Z[J]];
                    Z[J].push(X)
                } else if (Q.isArray(J, W, F)) Z[J] = [X];
                else Z[J] = X
            }
        }
        if (typeof G === "string") {
            if (G.length > 0) Z[Q.textNodeName] = G
        } else if (G !== void 0) Z[Q.textNodeName] = G;
        return Z
    }

    function wE4(A) {
        let Q = Object.keys(A);
        for (let B = 0; B < Q.length; B++) {
            let G = Q[B];
            if (G !== ":@") return G
        }
    }

    function qE4(A, Q, B, G) {
        if (Q) {
            let Z = Object.keys(Q),
                I = Z.length;
            for (let Y = 0; Y < I; Y++) {
                let J = Z[Y];
                if (G.isArray(J, B + "." + J, !0, !0)) A[J] = [Q[J]];
                else A[J] = Q[J]
            }
        }
    }

    function NE4(A, Q) {
        let {
            textNodeName: B
        } = Q, G = Object.keys(A).length;
        if (G === 0) return !0;
        if (G === 1 && (A[B] || typeof A[B] === "boolean" || A[B] === 0)) return !0;
        return !1
    }
    LE4.prettify = $E4
});
var X1Q = U((sJ7, W1Q) => {
    var {
        buildOptions: OE4
    } = nAQ(), RE4 = Z1Q(), {
        prettify: TE4
    } = Y1Q(), PE4 = mz1();
    class J1Q {
        constructor(A) {
            this.externalEntities = {}, this.options = OE4(A)
        }
        parse(A, Q) {
            if (typeof A === "string");
            else if (A.toString) A = A.toString();
            else throw Error("XML data is accepted in String or Bytes[] form.");
            if (Q) {
                if (Q === !0) Q = {};
                let Z = PE4.validate(A, Q);
                if (Z !== !0) throw Error(`${Z.err.msg}:${Z.err.line}:${Z.err.col}`)
            }
            let B = new RE4(this.options);
            B.addExternalEntities(this.externalEntities);
            let G = B.parseXml(A);
            if (this.options.preserveOrder || G === void 0) return G;
            else return TE4(G, this.options)
        }
        addEntity(A, Q) {
            if (Q.indexOf("&") !== -1) throw Error("Entity value can't have '&'");
            else if (A.indexOf("&") !== -1 || A.indexOf(";") !== -1) throw Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
            else if (Q === "&") throw Error("An entity with value '&' is not permitted");
            else this.externalEntities[A] = Q
        }
    }
    W1Q.exports = J1Q
});
var H1Q = U((rJ7, D1Q) => {
    function jE4(A, Q) {
        let B = "";
        if (Q.format && Q.indentBy.length > 0) B = `
`;
        return V1Q(A, Q, "", B)
    }

    function V1Q(A, Q, B, G) {
        let Z = "",
            I = !1;
        for (let Y = 0; Y < A.length; Y++) {
            let J = A[Y],
                W = SE4(J);
            if (W === void 0) continue;
            let X = "";
            if (B.length === 0) X = W;
            else X = `${B}.${W}`;
            if (W === Q.textNodeName) {
                let H = J[W];
                if (!_E4(X, Q)) H = Q.tagValueProcessor(W, H), H = K1Q(H, Q);
                if (I) Z += G;
                Z += H, I = !1;
                continue
            } else if (W === Q.cdataPropName) {
                if (I) Z += G;
                Z += `<![CDATA[${J[W][0][Q.textNodeName]}]]>`, I = !1;
                continue
            } else if (W === Q.commentPropName) {
                Z += G + `<!--${J[W][0][Q.textNodeName]}-->`, I = !0;
                continue
            } else if (W[0] === "?") {
                let H = F1Q(J[":@"], Q),
                    C = W === "?xml" ? "" : G,
                    E = J[W][0][Q.textNodeName];
                E = E.length !== 0 ? " " + E : "", Z += C + `<${W}${E}${H}?>`, I = !0;
                continue
            }
            let F = G;
            if (F !== "") F += Q.indentBy;
            let V = F1Q(J[":@"], Q),
                K = G + `<${W}${V}`,
                D = V1Q(J[W], Q, X, F);
            if (Q.unpairedTags.indexOf(W) !== -1)
                if (Q.suppressUnpairedNode) Z += K + ">";
                else Z += K + "/>";
            else if ((!D || D.length === 0) && Q.suppressEmptyNode) Z += K + "/>";
            else if (D && D.endsWith(">")) Z += K + `>${D}${G}</${W}>`;
            else {
                if (Z += K + ">", D && G !== "" && (D.includes("/>") || D.includes("</"))) Z += G + Q.indentBy + D + G;
                else Z += D;
                Z += `</${W}>`
            }
            I = !0
        }
        return Z
    }

    function SE4(A) {
        let Q = Object.keys(A);
        for (let B = 0; B < Q.length; B++) {
            let G = Q[B];
            if (!A.hasOwnProperty(G)) continue;
            if (G !== ":@") return G
        }
    }

    function F1Q(A, Q) {
        let B = "";
        if (A && !Q.ignoreAttributes)
            for (let G in A) {
                if (!A.hasOwnProperty(G)) continue;
                let Z = Q.attributeValueProcessor(G, A[G]);
                if (Z = K1Q(Z, Q), Z === !0 && Q.suppressBooleanAttributes) B += ` ${G.substr(Q.attributeNamePrefix.length)}`;
                else B += ` ${G.substr(Q.attributeNamePrefix.length)}="${Z}"`
            }
        return B
    }

    function _E4(A, Q) {
        A = A.substr(0, A.length - Q.textNodeName.length - 1);
        let B = A.substr(A.lastIndexOf(".") + 1);
        for (let G in Q.stopNodes)
            if (Q.stopNodes[G] === A || Q.stopNodes[G] === "*." + B) return !0;
        return !1
    }

    function K1Q(A, Q) {
        if (A && A.length > 0 && Q.processEntities)
            for (let B = 0; B < Q.entities.length; B++) {
                let G = Q.entities[B];
                A = A.replace(G.regex, G.val)
            }
        return A
    }
    D1Q.exports = jE4
});
var E1Q = U((oJ7, C1Q) => {
    var kE4 = H1Q(),
        yE4 = {
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            cdataPropName: !1,
            format: !1,
            indentBy: "  ",
            suppressEmptyNode: !1,
            suppressUnpairedNode: !0,
            suppressBooleanAttributes: !0,
            tagValueProcessor: function(A, Q) {
                return Q
            },
            attributeValueProcessor: function(A, Q) {
                return Q
            },
            preserveOrder: !1,
            commentPropName: !1,
            unpairedTags: [],
            entities: [{
                regex: new RegExp("&", "g"),
                val: "&amp;"
            }, {
                regex: new RegExp(">", "g"),
                val: "&gt;"
            }, {
                regex: new RegExp("<", "g"),
                val: "&lt;"
            }, {
                regex: new RegExp("'", "g"),
                val: "&apos;"
            }, {
                regex: new RegExp('"', "g"),
                val: "&quot;"
            }],
            processEntities: !0,
            stopNodes: [],
            oneListGroup: !1
        };

    function nm(A) {
        if (this.options = Object.assign({}, yE4, A), this.options.ignoreAttributes || this.options.attributesGroupName) this.isAttribute = function() {
            return !1
        };
        else this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = bE4;
        if (this.processTextOrObjNode = xE4, this.options.format) this.indentate = vE4, this.tagEndChar = `>
`, this.newLine = `
`;
        else this.indentate = function() {
            return ""
        }, this.tagEndChar = ">", this.newLine = ""
    }
    nm.prototype.build = function(A) {
        if (this.options.preserveOrder) return kE4(A, this.options);
        else {
            if (Array.isArray(A) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) A = {
                [this.options.arrayNodeName]: A
            };
            return this.j2x(A, 0).val
        }
    };
    nm.prototype.j2x = function(A, Q) {
        let B = "",
            G = "";
        for (let Z in A) {
            if (!Object.prototype.hasOwnProperty.call(A, Z)) continue;
            if (typeof A[Z] > "u") {
                if (this.isAttribute(Z)) G += ""
            } else if (A[Z] === null)
                if (this.isAttribute(Z)) G += "";
                else if (Z[0] === "?") G += this.indentate(Q) + "<" + Z + "?" + this.tagEndChar;
            else G += this.indentate(Q) + "<" + Z + "/" + this.tagEndChar;
            else if (A[Z] instanceof Date) G += this.buildTextValNode(A[Z], Z, "", Q);
            else if (typeof A[Z] !== "object") {
                let I = this.isAttribute(Z);
                if (I) B += this.buildAttrPairStr(I, "" + A[Z]);
                else if (Z === this.options.textNodeName) {
                    let Y = this.options.tagValueProcessor(Z, "" + A[Z]);
                    G += this.replaceEntitiesValue(Y)
                } else G += this.buildTextValNode(A[Z], Z, "", Q)
            } else if (Array.isArray(A[Z])) {
                let I = A[Z].length,
                    Y = "",
                    J = "";
                for (let W = 0; W < I; W++) {
                    let X = A[Z][W];
                    if (typeof X > "u");
                    else if (X === null)
                        if (Z[0] === "?") G += this.indentate(Q) + "<" + Z + "?" + this.tagEndChar;
                        else G += this.indentate(Q) + "<" + Z + "/" + this.tagEndChar;
                    else if (typeof X === "object")
                        if (this.options.oneListGroup) {
                            let F = this.j2x(X, Q + 1);
                            if (Y += F.val, this.options.attributesGroupName && X.hasOwnProperty(this.options.attributesGroupName)) J += F.attrStr
                        } else Y += this.processTextOrObjNode(X, Z, Q);
                    else if (this.options.oneListGroup) {
                        let F = this.options.tagValueProcessor(Z, X);
                        F = this.replaceEntitiesValue(F), Y += F
                    } else Y += this.buildTextValNode(X, Z, "", Q)
                }
                if (this.options.oneListGroup) Y = this.buildObjectNode(Y, Z, J, Q);
                G += Y
            } else if (this.options.attributesGroupName && Z === this.options.attributesGroupName) {
                let I = Object.keys(A[Z]),
                    Y = I.length;
                for (let J = 0; J < Y; J++) B += this.buildAttrPairStr(I[J], "" + A[Z][I[J]])
            } else G += this.processTextOrObjNode(A[Z], Z, Q)
        }
        return {
            attrStr: B,
            val: G
        }
    };
    nm.prototype.buildAttrPairStr = function(A, Q) {
        if (Q = this.options.attributeValueProcessor(A, "" + Q), Q = this.replaceEntitiesValue(Q), this.options.suppressBooleanAttributes && Q === "true") return " " + A;
        else return " " + A + '="' + Q + '"'
    };

    function xE4(A, Q, B) {
        let G = this.j2x(A, B + 1);
        if (A[this.options.textNodeName] !== void 0 && Object.keys(A).length === 1) return this.buildTextValNode(A[this.options.textNodeName], Q, G.attrStr, B);
        else return this.buildObjectNode(G.val, Q, G.attrStr, B)
    }
    nm.prototype.buildObjectNode = function(A, Q, B, G) {
        if (A === "")
            if (Q[0] === "?") return this.indentate(G) + "<" + Q + B + "?" + this.tagEndChar;
            else return this.indentate(G) + "<" + Q + B + this.closeTag(Q) + this.tagEndChar;
        else {
            let Z = "</" + Q + this.tagEndChar,
                I = "";
            if (Q[0] === "?") I = "?", Z = "";
            if ((B || B === "") && A.indexOf("<") === -1) return this.indentate(G) + "<" + Q + B + I + ">" + A + Z;
            else if (this.options.commentPropName !== !1 && Q === this.options.commentPropName && I.length === 0) return this.indentate(G) + `<!--${A}-->` + this.newLine;
            else return this.indentate(G) + "<" + Q + B + I + this.tagEndChar + A + this.indentate(G) + Z
        }
    };
    nm.prototype.closeTag = function(A) {
        let Q = "";
        if (this.options.unpairedTags.indexOf(A) !== -1) {
            if (!this.options.suppressUnpairedNode) Q = "/"
        } else if (this.options.suppressEmptyNode) Q = "/";
        else Q = `></${A}`;
        return Q
    };
    nm.prototype.buildTextValNode = function(A, Q, B, G) {
        if (this.options.cdataPropName !== !1 && Q === this.options.cdataPropName) return this.indentate(G) + `<![CDATA[${A}]]>` + this.newLine;
        else if (this.options.commentPropName !== !1 && Q === this.options.commentPropName) return this.indentate(G) + `<!--${A}-->` + this.newLine;
        else if (Q[0] === "?") return this.indentate(G) + "<" + Q + B + "?" + this.tagEndChar;
        else {
            let Z = this.options.tagValueProcessor(Q, A);
            if (Z = this.replaceEntitiesValue(Z), Z === "") return this.indentate(G) + "<" + Q + B + this.closeTag(Q) + this.tagEndChar;
            else return this.indentate(G) + "<" + Q + B + ">" + Z + "</" + Q + this.tagEndChar
        }
    };
    nm.prototype.replaceEntitiesValue = function(A) {
        if (A && A.length > 0 && this.options.processEntities)
            for (let Q = 0; Q < this.options.entities.length; Q++) {
                let B = this.options.entities[Q];
                A = A.replace(B.regex, B.val)
            }
        return A
    };

    function vE4(A) {
        return this.options.indentBy.repeat(A)
    }

    function bE4(A) {
        if (A.startsWith(this.options.attributeNamePrefix) && A !== this.options.textNodeName) return A.substr(this.attrPrefixLen);
        else return !1
    }
    C1Q.exports = nm
});
var ZS = U((tJ7, z1Q) => {
    var fE4 = mz1(),
        hE4 = X1Q(),
        gE4 = E1Q();
    z1Q.exports = {
        XMLParser: hE4,
        XMLValidator: fE4,
        XMLBuilder: gE4
    }
});
var WDA = U((eJ7, N1Q) => {
    var {
        defineProperty: XfA,
        getOwnPropertyDescriptor: uE4,
        getOwnPropertyNames: mE4
    } = Object, dE4 = Object.prototype.hasOwnProperty, FfA = (A, Q) => XfA(A, "name", {
        value: Q,
        configurable: !0
    }), cE4 = (A, Q) => {
        for (var B in Q) XfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pE4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of mE4(Q))
                if (!dE4.call(A, Z) && Z !== B) XfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = uE4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lE4 = (A) => pE4(XfA({}, "__esModule", {
        value: !0
    }), A), U1Q = {};
    cE4(U1Q, {
        XmlNode: () => iE4,
        XmlText: () => q1Q
    });
    N1Q.exports = lE4(U1Q);

    function $1Q(A) {
        return A.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
    FfA($1Q, "escapeAttribute");

    function w1Q(A) {
        return A.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#x0D;").replace(/\n/g, "&#x0A;").replace(/\u0085/g, "&#x85;").replace(/\u2028/, "&#x2028;")
    }
    FfA(w1Q, "escapeElement");
    var q1Q = class {
            constructor(A) {
                this.value = A
            }
            static {
                FfA(this, "XmlText")
            }
            toString() {
                return w1Q("" + this.value)
            }
        },
        iE4 = class A {
            constructor(Q, B = []) {
                this.name = Q, this.children = B
            }
            static {
                FfA(this, "XmlNode")
            }
            attributes = {};
            static of (Q, B, G) {
                let Z = new A(Q);
                if (B !== void 0) Z.addChildNode(new q1Q(B));
                if (G !== void 0) Z.withName(G);
                return Z
            }
            withName(Q) {
                return this.name = Q, this
            }
            addAttribute(Q, B) {
                return this.attributes[Q] = B, this
            }
            addChildNode(Q) {
                return this.children.push(Q), this
            }
            removeAttribute(Q) {
                return delete this.attributes[Q], this
            }
            n(Q) {
                return this.name = Q, this
            }
            c(Q) {
                return this.children.push(Q), this
            }
            a(Q, B) {
                if (B != null) this.attributes[Q] = B;
                return this
            }
            cc(Q, B, G = B) {
                if (Q[B] != null) {
                    let Z = A.of(B, Q[B]).withName(G);
                    this.c(Z)
                }
            }
            l(Q, B, G, Z) {
                if (Q[B] != null) Z().map((Y) => {
                    Y.withName(G), this.c(Y)
                })
            }
            lc(Q, B, G, Z) {
                if (Q[B] != null) {
                    let I = Z(),
                        Y = new A(G);
                    I.map((J) => {
                        Y.c(J)
                    }), this.c(Y)
                }
            }
            toString() {
                let Q = Boolean(this.children.length),
                    B = `<${this.name}`,
                    G = this.attributes;
                for (let Z of Object.keys(G)) {
                    let I = G[Z];
                    if (I != null) B += ` ${Z}="${$1Q(""+I)}"`
                }
                return B += !Q ? "/>" : `>${this.children.map((Z)=>Z.toString()).join("")}</${this.name}>`
            }
        }
});
var h1Q = U((QW7, f1Q) => {
    var {
        defineProperty: KfA,
        getOwnPropertyDescriptor: nE4,
        getOwnPropertyNames: aE4
    } = Object, sE4 = Object.prototype.hasOwnProperty, o5 = (A, Q) => KfA(A, "name", {
        value: Q,
        configurable: !0
    }), rE4 = (A, Q) => {
        for (var B in Q) KfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, oE4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of aE4(Q))
                if (!sE4.call(A, Z) && Z !== B) KfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = nE4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, tE4 = (A) => oE4(KfA({}, "__esModule", {
        value: !0
    }), A), T1Q = {};
    rE4(T1Q, {
        AwsEc2QueryProtocol: () => Tz4,
        AwsJson1_0Protocol: () => Kz4,
        AwsJson1_1Protocol: () => Dz4,
        AwsJsonRpcProtocol: () => oz1,
        AwsQueryProtocol: () => k1Q,
        AwsRestJsonProtocol: () => Cz4,
        AwsRestXmlProtocol: () => yz4,
        JsonCodec: () => rz1,
        JsonShapeDeserializer: () => S1Q,
        JsonShapeSerializer: () => _1Q,
        XmlCodec: () => b1Q,
        XmlShapeDeserializer: () => tz1,
        XmlShapeSerializer: () => v1Q,
        _toBool: () => Az4,
        _toNum: () => Qz4,
        _toStr: () => eE4,
        awsExpectUnion: () => zz4,
        loadRestJsonErrorCode: () => sz1,
        loadRestXmlErrorCode: () => x1Q,
        parseJsonBody: () => az1,
        parseJsonErrorBody: () => Jz4,
        parseXmlBody: () => y1Q,
        parseXmlErrorBody: () => _z4
    });
    f1Q.exports = tE4(T1Q);
    var eE4 = o5((A) => {
            if (A == null) return A;
            if (typeof A === "number" || typeof A === "bigint") {
                let Q = Error(`Received number ${A} where a string was expected.`);
                return Q.name = "Warning", console.warn(Q), String(A)
            }
            if (typeof A === "boolean") {
                let Q = Error(`Received boolean ${A} where a string was expected.`);
                return Q.name = "Warning", console.warn(Q), String(A)
            }
            return A
        }, "_toStr"),
        Az4 = o5((A) => {
            if (A == null) return A;
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (A !== "" && Q !== "false" && Q !== "true") {
                    let B = Error(`Received string "${A}" where a boolean was expected.`);
                    B.name = "Warning", console.warn(B)
                }
                return A !== "" && Q !== "false"
            }
            return A
        }, "_toBool"),
        Qz4 = o5((A) => {
            if (A == null) return A;
            if (typeof A === "string") {
                let Q = Number(A);
                if (Q.toString() !== A) {
                    let B = Error(`Received string "${A}" where a number was expected.`);
                    return B.name = "Warning", console.warn(B), A
                }
                return Q
            }
            return A
        }, "_toNum"),
        Bz4 = C5(),
        q4A = y4(),
        Gz4 = pK(),
        zr = class {
            static {
                o5(this, "SerdeContextConfig")
            }
            serdeContext;
            setSerdeContext(A) {
                this.serdeContext = A
            }
        },
        XDA = y4(),
        N4A = c6(),
        Zz4 = lm(),
        Iz4 = c6();

    function P1Q(A, Q, B) {
        if (B?.source) {
            let G = B.source;
            if (typeof Q === "number") {
                if (Q > Number.MAX_SAFE_INTEGER || Q < Number.MIN_SAFE_INTEGER || G !== String(Q))
                    if (G.includes(".")) return new Iz4.NumericValue(G, "bigDecimal");
                    else return BigInt(G)
            }
        }
        return Q
    }
    o5(P1Q, "jsonReviver");
    var Yz4 = W6(),
        j1Q = o5((A, Q) => (0, Yz4.collectBody)(A, Q).then((B) => Q.utf8Encoder(B)), "collectBodyString"),
        az1 = o5((A, Q) => j1Q(A, Q).then((B) => {
            if (B.length) try {
                return JSON.parse(B)
            } catch (G) {
                if (G?.name === "SyntaxError") Object.defineProperty(G, "$responseBodyText", {
                    value: B
                });
                throw G
            }
            return {}
        }), "parseJsonBody"),
        Jz4 = o5(async (A, Q) => {
            let B = await az1(A, Q);
            return B.message = B.message ?? B.Message, B
        }, "parseJsonErrorBody"),
        sz1 = o5((A, Q) => {
            let B = o5((I, Y) => Object.keys(I).find((J) => J.toLowerCase() === Y.toLowerCase()), "findKey"),
                G = o5((I) => {
                    let Y = I;
                    if (typeof Y === "number") Y = Y.toString();
                    if (Y.indexOf(",") >= 0) Y = Y.split(",")[0];
                    if (Y.indexOf(":") >= 0) Y = Y.split(":")[0];
                    if (Y.indexOf("#") >= 0) Y = Y.split("#")[1];
                    return Y
                }, "sanitizeErrorCode"),
                Z = B(A.headers, "x-amzn-errortype");
            if (Z !== void 0) return G(A.headers[Z]);
            if (Q && typeof Q === "object") {
                let I = B(Q, "code");
                if (I && Q[I] !== void 0) return G(Q[I]);
                if (Q.__type !== void 0) return G(Q.__type)
            }
        }, "loadRestJsonErrorCode"),
        S1Q = class extends zr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                o5(this, "JsonShapeDeserializer")
            }
            async read(A, Q) {
                return this._read(A, typeof Q === "string" ? JSON.parse(Q, P1Q) : await az1(Q, this.serdeContext))
            }
            readObject(A, Q) {
                return this._read(A, Q)
            }
            _read(A, Q) {
                let B = Q !== null && typeof Q === "object",
                    G = XDA.NormalizedSchema.of(A);
                if (G.isListSchema() && Array.isArray(Q)) {
                    let I = G.getValueSchema(),
                        Y = [],
                        J = !!G.getMergedTraits().sparse;
                    for (let W of Q)
                        if (J || W != null) Y.push(this._read(I, W));
                    return Y
                } else if (G.isMapSchema() && B) {
                    let I = G.getValueSchema(),
                        Y = {},
                        J = !!G.getMergedTraits().sparse;
                    for (let [W, X] of Object.entries(Q))
                        if (J || X != null) Y[W] = this._read(I, X);
                    return Y
                } else if (G.isStructSchema() && B) {
                    let I = {};
                    for (let [Y, J] of G.structIterator()) {
                        let W = this.settings.jsonName ? J.getMergedTraits().jsonName ?? Y : Y,
                            X = this._read(J, Q[W]);
                        if (X != null) I[Y] = X
                    }
                    return I
                }
                if (G.isBlobSchema() && typeof Q === "string") return (0, Zz4.fromBase64)(Q);
                let Z = G.getMergedTraits().mediaType;
                if (G.isStringSchema() && typeof Q === "string" && Z) {
                    if (Z === "application/json" || Z.endsWith("+json")) return N4A.LazyJsonString.from(Q)
                }
                if (G.isTimestampSchema()) {
                    let I = this.settings.timestampFormat;
                    switch (I.useTrait ? G.getSchema() === XDA.SCHEMA.TIMESTAMP_DEFAULT ? I.default : G.getSchema() ?? I.default : I.default) {
                        case XDA.SCHEMA.TIMESTAMP_DATE_TIME:
                            return (0, N4A.parseRfc3339DateTimeWithOffset)(Q);
                        case XDA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, N4A.parseRfc7231DateTime)(Q);
                        case XDA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            return (0, N4A.parseEpochTimestamp)(Q);
                        default:
                            return console.warn("Missing timestamp format, parsing value with Date constructor:", Q), new Date(Q)
                    }
                }
                if (G.isBigIntegerSchema() && (typeof Q === "number" || typeof Q === "string")) return BigInt(Q);
                if (G.isBigDecimalSchema() && Q != null) {
                    if (Q instanceof N4A.NumericValue) return Q;
                    return new N4A.NumericValue(String(Q), "bigDecimal")
                }
                if (G.isNumericSchema() && typeof Q === "string") switch (Q) {
                    case "Infinity":
                        return 1 / 0;
                    case "-Infinity":
                        return -1 / 0;
                    case "NaN":
                        return NaN
                }
                return Q
            }
        },
        L4A = y4(),
        Wz4 = c6(),
        Xz4 = c6(),
        Fz4 = c6(),
        L1Q = String.fromCharCode(925),
        Vz4 = class {
            static {
                o5(this, "JsonReplacer")
            }
            values = new Map;
            counter = 0;
            stage = 0;
            createReplacer() {
                if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
                if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
                return this.stage = 1, (A, Q) => {
                    if (Q instanceof Fz4.NumericValue) {
                        let B = `${L1Q+NaN+this.counter++}_` + Q.string;
                        return this.values.set(`"${B}"`, Q.string), B
                    }
                    if (typeof Q === "bigint") {
                        let B = Q.toString(),
                            G = `${L1Q+"b"+this.counter++}_` + B;
                        return this.values.set(`"${G}"`, B), G
                    }
                    return Q
                }
            }
            replaceInJson(A) {
                if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
                if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
                if (this.stage = 2, this.counter === 0) return A;
                for (let [Q, B] of this.values) A = A.replace(Q, B);
                return A
            }
        },
        _1Q = class extends zr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                o5(this, "JsonShapeSerializer")
            }
            buffer;
            rootSchema;
            write(A, Q) {
                this.rootSchema = L4A.NormalizedSchema.of(A), this.buffer = this._write(this.rootSchema, Q)
            }
            flush() {
                if (this.rootSchema?.isStructSchema() || this.rootSchema?.isDocumentSchema()) {
                    let A = new Vz4;
                    return A.replaceInJson(JSON.stringify(this.buffer, A.createReplacer(), 0))
                }
                return this.buffer
            }
            _write(A, Q, B) {
                let G = Q !== null && typeof Q === "object",
                    Z = L4A.NormalizedSchema.of(A);
                if (Z.isListSchema() && Array.isArray(Q)) {
                    let Y = Z.getValueSchema(),
                        J = [],
                        W = !!Z.getMergedTraits().sparse;
                    for (let X of Q)
                        if (W || X != null) J.push(this._write(Y, X));
                    return J
                } else if (Z.isMapSchema() && G) {
                    let Y = Z.getValueSchema(),
                        J = {},
                        W = !!Z.getMergedTraits().sparse;
                    for (let [X, F] of Object.entries(Q))
                        if (W || F != null) J[X] = this._write(Y, F);
                    return J
                } else if (Z.isStructSchema() && G) {
                    let Y = {};
                    for (let [J, W] of Z.structIterator()) {
                        let X = this.settings.jsonName ? W.getMergedTraits().jsonName ?? J : J,
                            F = this._write(W, Q[J], Z);
                        if (F !== void 0) Y[X] = F
                    }
                    return Y
                }
                if (Q === null && B?.isStructSchema()) return;
                if (Z.isBlobSchema() && (Q instanceof Uint8Array || typeof Q === "string")) {
                    if (Z === this.rootSchema) return Q;
                    if (!this.serdeContext?.base64Encoder) throw Error("Missing base64Encoder in serdeContext");
                    return this.serdeContext?.base64Encoder(Q)
                }
                if (Z.isTimestampSchema() && Q instanceof Date) {
                    let Y = this.settings.timestampFormat;
                    switch (Y.useTrait ? Z.getSchema() === L4A.SCHEMA.TIMESTAMP_DEFAULT ? Y.default : Z.getSchema() ?? Y.default : Y.default) {
                        case L4A.SCHEMA.TIMESTAMP_DATE_TIME:
                            return Q.toISOString().replace(".000Z", "Z");
                        case L4A.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, Wz4.dateToUtcString)(Q);
                        case L4A.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            return Q.getTime() / 1000;
                        default:
                            return console.warn("Missing timestamp format, using epoch seconds", Q), Q.getTime() / 1000
                    }
                }
                if (Z.isNumericSchema() && typeof Q === "number") {
                    if (Math.abs(Q) === 1 / 0 || isNaN(Q)) return String(Q)
                }
                let I = Z.getMergedTraits().mediaType;
                if (Z.isStringSchema() && typeof Q === "string" && I) {
                    if (I === "application/json" || I.endsWith("+json")) return Xz4.LazyJsonString.from(Q)
                }
                return Q
            }
        },
        rz1 = class extends zr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                o5(this, "JsonCodec")
            }
            createSerializer() {
                let A = new _1Q(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new S1Q(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        oz1 = class extends Bz4.RpcProtocol {
            static {
                o5(this, "AwsJsonRpcProtocol")
            }
            serializer;
            deserializer;
            codec;
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                });
                this.codec = new rz1({
                    timestampFormat: {
                        useTrait: !0,
                        default: q4A.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    jsonName: !1
                }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer()
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B);
                if (!G.path.endsWith("/")) G.path += "/";
                if (Object.assign(G.headers, {
                        "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
                        "x-amz-target": (this.getJsonRpcVersion() === "1.0" ? "JsonRpc10." : "JsonProtocol.") + q4A.NormalizedSchema.of(A).getName()
                    }), (0, q4A.deref)(A.input) === "unit" || !G.body) G.body = "{}";
                try {
                    G.headers["content-length"] = String((0, Gz4.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            getPayloadCodec() {
                return this.codec
            }
            async handleError(A, Q, B, G, Z) {
                let I = sz1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = q4A.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = q4A.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = q4A.NormalizedSchema.of(X),
                    V = G.message ?? G.Message ?? "Unknown",
                    K = new X.ctor(V);
                await this.deserializeHttpMessage(X, Q, B, G);
                let D = {};
                for (let [H, C] of F.structIterator()) {
                    let E = C.getMergedTraits().jsonName ?? H;
                    D[H] = this.codec.createDeserializer().readObject(C, G[E])
                }
                throw Object.assign(K, {
                    $metadata: Z,
                    $response: B,
                    $fault: F.getMergedTraits().error,
                    message: V,
                    ...D
                }), K
            }
        },
        Kz4 = class extends oz1 {
            static {
                o5(this, "AwsJson1_0Protocol")
            }
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                })
            }
            getShapeId() {
                return "aws.protocols#awsJson1_0"
            }
            getJsonRpcVersion() {
                return "1.0"
            }
        },
        Dz4 = class extends oz1 {
            static {
                o5(this, "AwsJson1_1Protocol")
            }
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                })
            }
            getShapeId() {
                return "aws.protocols#awsJson1_1"
            }
            getJsonRpcVersion() {
                return "1.1"
            }
        },
        pz1 = C5(),
        FDA = y4(),
        Hz4 = pK(),
        Cz4 = class extends pz1.HttpBindingProtocol {
            static {
                o5(this, "AwsRestJsonProtocol")
            }
            serializer;
            deserializer;
            codec;
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                });
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: FDA.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    httpBindings: !0,
                    jsonName: !0
                };
                this.codec = new rz1(Q), this.serializer = new pz1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new pz1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
            }
            getShapeId() {
                return "aws.protocols#restJson1"
            }
            getPayloadCodec() {
                return this.codec
            }
            setSerdeContext(A) {
                this.codec.setSerdeContext(A), super.setSerdeContext(A)
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B),
                    Z = FDA.NormalizedSchema.of(A.input),
                    I = Z.getMemberSchemas();
                if (!G.headers["content-type"]) {
                    let Y = Object.values(I).find((J) => {
                        return !!J.getMergedTraits().httpPayload
                    });
                    if (Y) {
                        let J = Y.getMergedTraits().mediaType;
                        if (J) G.headers["content-type"] = J;
                        else if (Y.isStringSchema()) G.headers["content-type"] = "text/plain";
                        else if (Y.isBlobSchema()) G.headers["content-type"] = "application/octet-stream";
                        else G.headers["content-type"] = "application/json"
                    } else if (!Z.isUnitSchema()) {
                        if (Object.values(I).find((W) => {
                                let {
                                    httpQuery: X,
                                    httpQueryParams: F,
                                    httpHeader: V,
                                    httpLabel: K,
                                    httpPrefixHeaders: D
                                } = W.getMergedTraits();
                                return !X && !F && !V && !K && D === void 0
                            })) G.headers["content-type"] = "application/json"
                    }
                }
                if (G.headers["content-type"] && !G.body) G.body = "{}";
                if (G.body) try {
                    G.headers["content-length"] = String((0, Hz4.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async handleError(A, Q, B, G, Z) {
                let I = sz1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = FDA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = FDA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = FDA.NormalizedSchema.of(X),
                    V = G.message ?? G.Message ?? "Unknown",
                    K = new X.ctor(V);
                await this.deserializeHttpMessage(X, Q, B, G);
                let D = {};
                for (let [H, C] of F.structIterator()) {
                    let E = C.getMergedTraits().jsonName ?? H;
                    D[H] = this.codec.createDeserializer().readObject(C, G[E])
                }
                throw Object.assign(K, {
                    $metadata: Z,
                    $response: B,
                    $fault: F.getMergedTraits().error,
                    message: V,
                    ...D
                }), K
            }
        },
        Ez4 = W6(),
        zz4 = o5((A) => {
            if (A == null) return;
            if (typeof A === "object" && "__type" in A) delete A.__type;
            return (0, Ez4.expectUnion)(A)
        }, "awsExpectUnion"),
        lz1 = C5(),
        am = y4(),
        Uz4 = pK(),
        $z4 = C5(),
        M1Q = y4(),
        wz4 = W6(),
        qz4 = L2(),
        Nz4 = ZS(),
        tz1 = class extends zr {
            constructor(A) {
                super();
                this.settings = A, this.stringDeserializer = new $z4.FromStringShapeDeserializer(A)
            }
            static {
                o5(this, "XmlShapeDeserializer")
            }
            stringDeserializer;
            setSerdeContext(A) {
                this.serdeContext = A, this.stringDeserializer.setSerdeContext(A)
            }
            read(A, Q, B) {
                let G = M1Q.NormalizedSchema.of(A),
                    Z = G.getMemberSchemas();
                if (G.isStructSchema() && G.isMemberSchema() && !!Object.values(Z).find((W) => {
                        return !!W.getMemberTraits().eventPayload
                    })) {
                    let W = {},
                        X = Object.keys(Z)[0];
                    if (Z[X].isBlobSchema()) W[X] = Q;
                    else W[X] = this.read(Z[X], Q);
                    return W
                }
                let Y = (this.serdeContext?.utf8Encoder ?? qz4.toUtf8)(Q),
                    J = this.parseXml(Y);
                return this.readSchema(A, B ? J[B] : J)
            }
            readSchema(A, Q) {
                let B = M1Q.NormalizedSchema.of(A),
                    G = B.getMergedTraits(),
                    Z = B.getSchema();
                if (B.isListSchema() && !Array.isArray(Q)) return this.readSchema(Z, [Q]);
                if (Q == null) return Q;
                if (typeof Q === "object") {
                    let I = !!G.sparse,
                        Y = !!G.xmlFlattened;
                    if (B.isListSchema()) {
                        let W = B.getValueSchema(),
                            X = [],
                            F = W.getMergedTraits().xmlName ?? "member",
                            V = Y ? Q : (Q[0] ?? Q)[F],
                            K = Array.isArray(V) ? V : [V];
                        for (let D of K)
                            if (D != null || I) X.push(this.readSchema(W, D));
                        return X
                    }
                    let J = {};
                    if (B.isMapSchema()) {
                        let W = B.getKeySchema(),
                            X = B.getValueSchema(),
                            F;
                        if (Y) F = Array.isArray(Q) ? Q : [Q];
                        else F = Array.isArray(Q.entry) ? Q.entry : [Q.entry];
                        let V = W.getMergedTraits().xmlName ?? "key",
                            K = X.getMergedTraits().xmlName ?? "value";
                        for (let D of F) {
                            let H = D[V],
                                C = D[K];
                            if (C != null || I) J[H] = this.readSchema(X, C)
                        }
                        return J
                    }
                    if (B.isStructSchema()) {
                        for (let [W, X] of B.structIterator()) {
                            let F = X.getMergedTraits(),
                                V = !F.httpPayload ? X.getMemberTraits().xmlName ?? W : F.xmlName ?? X.getName();
                            if (Q[V] != null) J[W] = this.readSchema(X, Q[V])
                        }
                        return J
                    }
                    if (B.isDocumentSchema()) return Q;
                    throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${B.getName(!0)}`)
                } else {
                    if (B.isListSchema()) return [];
                    else if (B.isMapSchema() || B.isStructSchema()) return {};
                    return this.stringDeserializer.read(B, Q)
                }
            }
            parseXml(A) {
                if (A.length) {
                    let Q = new Nz4.XMLParser({
                        attributeNamePrefix: "",
                        htmlEntities: !0,
                        ignoreAttributes: !1,
                        ignoreDeclaration: !0,
                        parseTagValue: !1,
                        trimValues: !1,
                        tagValueProcessor: o5((Y, J) => J.trim() === "" && J.includes(`
`) ? "" : void 0, "tagValueProcessor")
                    });
                    Q.addEntity("#xD", "\r"), Q.addEntity("#10", `
`);
                    let B;
                    try {
                        B = Q.parse(A, !0)
                    } catch (Y) {
                        if (Y && typeof Y === "object") Object.defineProperty(Y, "$responseBodyText", {
                            value: A
                        });
                        throw Y
                    }
                    let G = "#text",
                        Z = Object.keys(B)[0],
                        I = B[Z];
                    if (I[G]) I[Z] = I[G], delete I[G];
                    return (0, wz4.getValueFromTextNode)(I)
                }
                return {}
            }
        },
        iz1 = C5(),
        VfA = y4(),
        Lz4 = c6(),
        Mz4 = W6(),
        Oz4 = lm(),
        Rz4 = class extends zr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                o5(this, "QueryShapeSerializer")
            }
            buffer;
            write(A, Q, B = "") {
                if (this.buffer === void 0) this.buffer = "";
                let G = VfA.NormalizedSchema.of(A);
                if (B && !B.endsWith(".")) B += ".";
                if (G.isBlobSchema()) {
                    if (typeof Q === "string" || Q instanceof Uint8Array) this.writeKey(B), this.writeValue((this.serdeContext?.base64Encoder ?? Oz4.toBase64)(Q))
                } else if (G.isBooleanSchema() || G.isNumericSchema() || G.isStringSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigIntegerSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigDecimalSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(Q instanceof Lz4.NumericValue ? Q.string : String(Q))
                } else if (G.isTimestampSchema()) {
                    if (Q instanceof Date) switch (this.writeKey(B), (0, iz1.determineTimestampFormat)(G, this.settings)) {
                        case VfA.SCHEMA.TIMESTAMP_DATE_TIME:
                            this.writeValue(Q.toISOString().replace(".000Z", "Z"));