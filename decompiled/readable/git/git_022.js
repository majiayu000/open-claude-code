/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_022.js
 * 处理时间: 2025-12-09T03:41:37.520Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 22/34
 * Lines: 272028 - 273525 (1498 lines)
 * Original file: cli.js
 */

            return U1 === nA
        }

        function k1(U1, nA) {
            return U1 && U1.toString().replace(!nA || !nA.iri ? W.ESCAPE : X.ESCAPE, yA)
        }

        function T0(U1, nA) {
            return U1 && U1.toString().replace(!nA || !nA.iri ? W.PCT_ENCODED : X.PCT_ENCODED, rA)
        }
        var fQ = {
                scheme: "http",
                domainHost: !0,
                parse: function(nA, C1) {
                    if (!nA.host) nA.error = nA.error || "HTTP URIs must have a host.";
                    return nA
                },
                serialize: function(nA, C1) {
                    var O1 = String(nA.scheme).toLowerCase() === "https";
                    if (nA.port === (O1 ? 443 : 80) || nA.port === "") nA.port = void 0;
                    if (!nA.path) nA.path = "/";
                    return nA
                }
            },
            F1 = {
                scheme: "https",
                domainHost: fQ.domainHost,
                parse: fQ.parse,
                serialize: fQ.serialize
            };

        function R1(U1) {
            return typeof U1.secure === "boolean" ? U1.secure : String(U1.scheme).toLowerCase() === "wss"
        }
        var N1 = {
                scheme: "ws",
                domainHost: !0,
                parse: function(nA, C1) {
                    var O1 = nA;
                    return O1.secure = R1(O1), O1.resourceName = (O1.path || "/") + (O1.query ? "?" + O1.query : ""), O1.path = void 0, O1.query = void 0, O1
                },
                serialize: function(nA, C1) {
                    if (nA.port === (R1(nA) ? 443 : 80) || nA.port === "") nA.port = void 0;
                    if (typeof nA.secure === "boolean") nA.scheme = nA.secure ? "wss" : "ws", nA.secure = void 0;
                    if (nA.resourceName) {
                        var O1 = nA.resourceName.split("?"),
                            y1 = F(O1, 2),
                            O0 = y1[0],
                            oQ = y1[1];
                        nA.path = O0 && O0 !== "/" ? O0 : void 0, nA.query = oQ, nA.resourceName = void 0
                    }
                    return nA.fragment = void 0, nA
                }
            },
            Z0 = {
                scheme: "wss",
                domainHost: N1.domainHost,
                parse: N1.parse,
                serialize: N1.serialize
            },
            J0 = {},
            s1 = !0,
            p0 = "[A-Za-z0-9\\-\\.\\_\\~" + (s1 ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]",
            HQ = "[0-9A-Fa-f]",
            ZB = B(B("%[EFef]" + HQ + "%" + HQ + HQ + "%" + HQ + HQ) + "|" + B("%[89A-Fa-f]" + HQ + "%" + HQ + HQ) + "|" + B("%" + HQ + HQ)),
            rQ = "[A-Za-z0-9\\!\\TextComponent\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",
            PB = "[\\!\\TextComponent\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",
            IQ = Q(PB, "[\\\"\\\\]"),
            l9 = "[\\!\\TextComponent\\'\\(\\)\\*\\+\\,\\;\\:\\@]",
            h4 = new RegExp(p0, "g"),
            p5 = new RegExp(ZB, "g"),
            uG = new RegExp(Q("[^]", rQ, "[\\.]", "[\\\"]", IQ), "g"),
            DG = new RegExp(Q("[^]", p0, l9), "g"),
            C3 = DG;

        function CZ(U1) {
            var nA = rA(U1);
            return !nA.match(h4) ? U1 : nA
        }
        var LI = {
                scheme: "mailto",
                parse: function(nA, C1) {
                    var O1 = nA,
                        y1 = O1.to = O1.path ? O1.path.split(",") : [];
                    if (O1.path = void 0, O1.query) {
                        var O0 = !1,
                            oQ = {},
                            lB = O1.query.split("&");
                        for (var k9 = 0, C6 = lB.length; k9 < C6; ++k9) {
                            var y9 = lB[k9].split("=");
                            switch (y9[0]) {
                                case "to":
                                    var A6 = y9[1].split(",");
                                    for (var v6 = 0, w8 = A6.length; v6 < w8; ++v6) y1.push(A6[v6]);
                                    break;
                                case "subject":
                                    O1.subject = T0(y9[1], C1);
                                    break;
                                case "body":
                                    O1.body = T0(y9[1], C1);
                                    break;
                                default:
                                    O0 = !0, oQ[T0(y9[0], C1)] = T0(y9[1], C1);
                                    break
                            }
                        }
                        if (O0) O1.headers = oQ
                    }
                    O1.query = void 0;
                    for (var i9 = 0, Q6 = y1.length; i9 < Q6; ++i9) {
                        var $4 = y1[i9].split("@");
                        if ($4[0] = T0($4[0]), !C1.unicodeSupport) try {
                            $4[1] = qA.toASCII(T0($4[1], C1).toLowerCase())
                        } catch (n7) {
                            O1.error = O1.error || "Email address's domain name can not be converted to ASCII via punycode: " + n7
                        } else $4[1] = T0($4[1], C1).toLowerCase();
                        y1[i9] = $4.join("@")
                    }
                    return O1
                },
                serialize: function(nA, C1) {
                    var O1 = nA,
                        y1 = I(nA.to);
                    if (y1) {
                        for (var O0 = 0, oQ = y1.length; O0 < oQ; ++O0) {
                            var lB = String(y1[O0]),
                                k9 = lB.lastIndexOf("@"),
                                C6 = lB.slice(0, k9).replace(p5, CZ).replace(p5, Z).replace(uG, yA),
                                y9 = lB.slice(k9 + 1);
                            try {
                                y9 = !C1.iri ? qA.toASCII(T0(y9, C1).toLowerCase()) : qA.toUnicode(y9)
                            } catch (i9) {
                                O1.error = O1.error || "Email address's domain name can not be converted to " + (!C1.iri ? "ASCII" : "Unicode") + " via punycode: " + i9
                            }
                            y1[O0] = C6 + "@" + y9
                        }
                        O1.path = y1.join(",")
                    }
                    var A6 = nA.headers = nA.headers || {};
                    if (nA.subject) A6.subject = nA.subject;
                    if (nA.body) A6.body = nA.body;
                    var v6 = [];
                    for (var w8 in A6)
                        if (A6[w8] !== J0[w8]) v6.push(w8.replace(p5, CZ).replace(p5, Z).replace(DG, yA) + "=" + A6[w8].replace(p5, CZ).replace(p5, Z).replace(C3, yA));
                    if (v6.length) O1.query = v6.join("&");
                    return O1
                }
            },
            e8 = /^([^\:]+)\:(.*)/,
            _5 = {
                scheme: "urn",
                parse: function(nA, C1) {
                    var O1 = nA.path && nA.path.match(e8),
                        y1 = nA;
                    if (O1) {
                        var O0 = C1.scheme || y1.scheme || "urn",
                            oQ = O1[1].toLowerCase(),
                            lB = O1[2],
                            k9 = O0 + ":" + (C1.nid || oQ),
                            C6 = DA[k9];
                        if (y1.nid = oQ, y1.nss = lB, y1.path = void 0, C6) y1 = C6.parse(y1, C1)
                    } else y1.error = y1.error || "URN can not be parsed.";
                    return y1
                },
                serialize: function(nA, C1) {
                    var O1 = C1.scheme || nA.scheme || "urn",
                        y1 = nA.nid,
                        O0 = O1 + ":" + (C1.nid || y1),
                        oQ = DA[O0];
                    if (oQ) nA = oQ.serialize(nA, C1);
                    var lB = nA,
                        k9 = nA.nss;
                    return lB.path = (y1 || C1.nid) + ":" + k9, lB
                }
            },
            mG = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}TextComponent/,
            dG = {
                scheme: "urn:uuid",
                parse: function(nA, C1) {
                    var O1 = nA;
                    if (O1.uuid = O1.nss, O1.nss = void 0, !C1.tolerant && (!O1.uuid || !O1.uuid.match(mG))) O1.error = O1.error || "UUID is not valid.";
                    return O1
                },
                serialize: function(nA, C1) {
                    var O1 = nA;
                    return O1.nss = (nA.uuid || "").toLowerCase(), O1
                }
            };
        DA[fQ.scheme] = fQ, DA[F1.scheme] = F1, DA[N1.scheme] = N1, DA[Z0.scheme] = Z0, DA[LI.scheme] = LI, DA[_5.scheme] = _5, DA[dG.scheme] = dG, A.SCHEMES = DA, A.pctEncChar = yA, A.pctDecChars = rA, A.parse = TA, A.removeDotSegments = B1, A.serialize = Q0, A.resolveComponents = b1, A.resolve = Y0, A.normalize = x0, A.equal = u0, A.escapeComponent = k1, A.unescapeComponent = T0, Object.defineProperty(A, "__esModule", {
            value: !0
        })
    })
});
var _Q1 = moduleWrapper((HMG, S92) => {
    S92.exports = function A(Q, B) {
        if (Q === B) return !0;
        if (Q && B && typeof Q == "object" && typeof B == "object") {
            if (Q.constructor !== B.constructor) return !1;
            var G, Z, I;
            if (Array.isArray(Q)) {
                if (G = Q.length, G != B.length) return !1;
                for (Z = G; Z-- !== 0;)
                    if (!A(Q[Z], B[Z])) return !1;
                return !0
            }
            if (Q.constructor === RegExp) return Q.source === B.source && Q.flags === B.flags;
            if (Q.valueOf !== Object.prototype.valueOf) return Q.valueOf() === B.valueOf();
            if (Q.toString !== Object.prototype.toString) return Q.toString() === B.toString();
            if (I = Object.keys(Q), G = I.length, G !== Object.keys(B).length) return !1;
            for (Z = G; Z-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(B, I[Z])) return !1;
            for (Z = G; Z-- !== 0;) {
                var Y = I[Z];
                if (!A(Q[Y], B[Y])) return !1
            }
            return !0
        }
        return Q !== Q && B !== B
    }
});
var k92 = moduleWrapper((CMG, _92) => {
    _92.exports = function(Q) {
        var B = 0,
            G = Q.length,
            Z = 0,
            I;
        while (Z < G)
            if (B++, I = Q.charCodeAt(Z++), I >= 55296 && I <= 56319 && Z < G) {
                if (I = Q.charCodeAt(Z), (I & 64512) == 56320) Z++
            } return B
    }
});
var sAA = moduleWrapper((EMG, v92) => {
    v92.exports = {
        copy: x65,
        checkDataType: xe1,
        checkDataTypes: v65,
        coerceToTypes: b65,
        toHash: be1,
        getProperty: fe1,
        escapeQuotes: he1,
        equal: _Q1(),
        ucs2length: k92(),
        varOccurences: g65,
        varReplace: u65,
        schemaHasRules: m65,
        schemaHasRulesExcept: d65,
        schemaUnknownRules: c65,
        toQuotedString: ve1,
        getPathExpr: p65,
        getPath: l65,
        getData: a65,
        unescapeFragment: s65,
        unescapeJsonPointer: ue1,
        escapeFragment: r65,
        escapeJsonPointer: ge1
    };

    function x65(A, Q) {
        Q = Q || {};
        for (var B in A) Q[B] = A[B];
        return Q
    }

    function xe1(A, Q, B, G) {
        var Z = G ? " !== " : " === ",
            I = G ? " || " : " && ",
            Y = G ? "!" : "",
            J = G ? "" : "!";
        switch (A) {
            case "null":
                return Q + Z + "null";
            case "array":
                return Y + "Array.isArray(" + Q + ")";
            case "object":
                return "(" + Y + Q + I + "typeof " + Q + Z + '"object"' + I + J + "Array.isArray(" + Q + "))";
            case "integer":
                return "(typeof " + Q + Z + '"number"' + I + J + "(" + Q + " % 1)" + I + Q + Z + Q + (B ? I + Y + "isFinite(" + Q + ")" : "") + ")";
            case "number":
                return "(typeof " + Q + Z + '"' + A + '"' + (B ? I + Y + "isFinite(" + Q + ")" : "") + ")";
            default:
                return "typeof " + Q + Z + '"' + A + '"'
        }
    }

    function v65(A, Q, B) {
        switch (A.length) {
            case 1:
                return xe1(A[0], Q, B, !0);
            default:
                var G = "",
                    Z = be1(A);
                if (Z.array && Z.object) G = Z.null ? "(" : "(!" + Q + " || ", G += "typeof " + Q + ' !== "object")', delete Z.null, delete Z.array, delete Z.object;
                if (Z.number) delete Z.integer;
                for (var I in Z) G += (G ? " && " : "") + xe1(I, Q, B, !0);
                return G
        }
    }
    var y92 = be1(["string", "number", "integer", "boolean", "null"]);

    function b65(A, Q) {
        if (Array.isArray(Q)) {
            var B = [];
            for (var G = 0; G < Q.length; G++) {
                var Z = Q[G];
                if (y92[Z]) B[B.length] = Z;
                else if (A === "array" && Z === "array") B[B.length] = Z
            }
            if (B.length) return B
        } else if (y92[Q]) return [Q];
        else if (A === "array" && Q === "array") return ["array"]
    }

    function be1(A) {
        var Q = {};
        for (var B = 0; B < A.length; B++) Q[A[B]] = !0;
        return Q
    }
    var f65 = /^[a-z$_][a-z$_0-9]*TextComponent/i,
        h65 = /'|\\/g;

    function fe1(A) {
        return typeof A == "number" ? "[" + A + "]" : f65.test(A) ? "." + A : "['" + he1(A) + "']"
    }

    function he1(A) {
        return A.replace(h65, "\\TextComponent&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t")
    }

    function g65(A, Q) {
        Q += "[^0-9]";
        var B = A.match(new RegExp(Q, "g"));
        return B ? B.length : 0
    }

    function u65(A, Q, B) {
        return Q += "([^0-9])", B = B.replace(/\TextComponent/g, "$$$$"), A.replace(new RegExp(Q, "g"), B + "$1")
    }

    function m65(A, Q) {
        if (typeof A == "boolean") return !A;
        for (var B in A)
            if (Q[B]) return !0
    }

    function d65(A, Q, B) {
        if (typeof A == "boolean") return !A && B != "not";
        for (var G in A)
            if (G != B && Q[G]) return !0
    }

    function c65(A, Q) {
        if (typeof A == "boolean") return;
        for (var B in A)
            if (!Q[B]) return B
    }

    function ve1(A) {
        return "'" + he1(A) + "'"
    }

    function p65(A, Q, B, G) {
        var Z = B ? "'/' + " + Q + (G ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : G ? "'[' + " + Q + " + ']'" : "'[\\'' + " + Q + " + '\\']'";
        return x92(A, Z)
    }

    function l65(A, Q, B) {
        var G = B ? ve1("/" + ge1(Q)) : ve1(fe1(Q));
        return x92(A, G)
    }
    var i65 = /^\/(?:[^~]|~0|~1)*TextComponent/,
        n65 = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?TextComponent/;

    function a65(A, Q, B) {
        var G, Z, I, Y;
        if (A === "") return "rootData";
        if (A[0] == "/") {
            if (!i65.test(A)) throw Error("Invalid JSON-pointer: " + A);
            Z = A, I = "rootData"
        } else {
            if (Y = A.match(n65), !Y) throw Error("Invalid JSON-pointer: " + A);
            if (G = +Y[1], Z = Y[2], Z == "#") {
                if (G >= Q) throw Error("Cannot access property/index " + G + " levels up, current level is " + Q);
                return B[Q - G]
            }
            if (G > Q) throw Error("Cannot access data " + G + " levels up, current level is " + Q);
            if (I = "data" + (Q - G || ""), !Z) return I
        }
        var J = I,
            W = Z.split("/");
        for (var X = 0; X < W.length; X++) {
            var F = W[X];
            if (F) I += fe1(ue1(F)), J += " && " + I
        }
        return J
    }

    function x92(A, Q) {
        if (A == '""') return Q;
        return (A + " + " + Q).replace(/([^\\])' \+ '/g, "$1")
    }

    function s65(A) {
        return ue1(decodeURIComponent(A))
    }

    function r65(A) {
        return encodeURIComponent(ge1(A))
    }

    function ge1(A) {
        return A.replace(/~/g, "~0").replace(/\//g, "~1")
    }

    function ue1(A) {
        return A.replace(/~1/g, "/").replace(/~0/g, "~")
    }
});
var me1 = moduleWrapper((zMG, b92) => {
    var o65 = sAA();
    b92.exports = t65;

    function t65(A) {
        o65.copy(A, this)
    }
});
var h92 = moduleWrapper((UMG, f92) => {
    var el = f92.exports = function(A, Q, B) {
        if (typeof Q == "function") B = Q, Q = {};
        B = Q.cb || B;
        var G = typeof B == "function" ? B : B.pre || function() {},
            Z = B.post || function() {};
        kQ1(Q, G, Z, A, "", A)
    };
    el.keywords = {
        additionalItems: !0,
        items: !0,
        contains: !0,
        additionalProperties: !0,
        propertyNames: !0,
        not: !0
    };
    el.arrayKeywords = {
        items: !0,
        allOf: !0,
        anyOf: !0,
        oneOf: !0
    };
    el.propsKeywords = {
        definitions: !0,
        properties: !0,
        patternProperties: !0,
        dependencies: !0
    };
    el.skipKeywords = {
        default: !0,
        enum: !0,
        const: !0,
        required: !0,
        maximum: !0,
        minimum: !0,
        exclusiveMaximum: !0,
        exclusiveMinimum: !0,
        multipleOf: !0,
        maxLength: !0,
        minLength: !0,
        pattern: !0,
        format: !0,
        maxItems: !0,
        minItems: !0,
        uniqueItems: !0,
        maxProperties: !0,
        minProperties: !0
    };

    function kQ1(A, Q, B, G, Z, I, Y, J, W, X) {
        if (G && typeof G == "object" && !Array.isArray(G)) {
            Q(G, Z, I, Y, J, W, X);
            for (var F in G) {
                var V = G[F];
                if (Array.isArray(V)) {
                    if (F in el.arrayKeywords)
                        for (var K = 0; K < V.length; K++) kQ1(A, Q, B, V[K], Z + "/" + F + "/" + K, I, Z, F, G, K)
                } else if (F in el.propsKeywords) {
                    if (V && typeof V == "object")
                        for (var D in V) kQ1(A, Q, B, V[D], Z + "/" + F + "/" + e65(D), I, Z, F, G, D)
                } else if (F in el.keywords || A.allKeys && !(F in el.skipKeywords)) kQ1(A, Q, B, V, Z + "/" + F, I, Z, F, G)
            }
            B(G, Z, I, Y, J, W, X)
        }
    }

    function e65(A) {
        return A.replace(/~/g, "~0").replace(/\//g, "~1")
    }
});
var hQ1 = moduleWrapper(($MG, d92) => {
    var jLA = j92(),
        g92 = _Q1(),
        bQ1 = sAA(),
        yQ1 = me1(),
        A55 = h92();
    d92.exports = Qi;
    Qi.normalizeId = Ai;
    Qi.fullPath = xQ1;
    Qi.url = vQ1;
    Qi.ids = I55;
    Qi.inlineRef = de1;
    Qi.schema = fQ1;

    function Qi(A, Q, B) {
        var G = this._refs[B];
        if (typeof G == "string")
            if (this._refs[G]) G = this._refs[G];
            else return Qi.call(this, A, Q, G);
        if (G = G || this._schemas[B], G instanceof yQ1) return de1(G.schema, this._opts.inlineRefs) ? G.schema : G.validate || this._compile(G);
        var Z = fQ1.call(this, Q, B),
            I, Y, J;
        if (Z) I = Z.schema, Q = Z.root, J = Z.baseId;
        if (I instanceof yQ1) Y = I.validate || A.call(this, I.schema, Q, void 0, J);
        else if (I !== void 0) Y = de1(I, this._opts.inlineRefs) ? I : A.call(this, I, Q, void 0, J);
        return Y
    }

    function fQ1(A, Q) {
        var B = jLA.parse(Q),
            G = m92(B),
            Z = xQ1(this._getId(A.schema));
        if (Object.keys(A.schema).length === 0 || G !== Z) {
            var I = Ai(G),
                Y = this._refs[I];
            if (typeof Y == "string") return Q55.call(this, A, Y, B);
            else if (Y instanceof yQ1) {
                if (!Y.validate) this._compile(Y);
                A = Y
            } else if (Y = this._schemas[I], Y instanceof yQ1) {
                if (!Y.validate) this._compile(Y);
                if (I == Ai(Q)) return {
                    schema: Y,
                    root: A,
                    baseId: Z
                };
                A = Y
            } else return;
            if (!A.schema) return;
            Z = xQ1(this._getId(A.schema))
        }
        return u92.call(this, B, Z, A.schema, A)
    }

    function Q55(A, Q, B) {
        var G = fQ1.call(this, A, Q);
        if (G) {
            var {
                schema: Z,
                baseId: I
            } = G;
            A = G.root;
            var Y = this._getId(Z);
            if (Y) I = vQ1(I, Y);
            return u92.call(this, B, I, Z, A)
        }
    }
    var B55 = bQ1.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);

    function u92(A, Q, B, G) {
        if (A.fragment = A.fragment || "", A.fragment.slice(0, 1) != "/") return;
        var Z = A.fragment.split("/");
        for (var I = 1; I < Z.length; I++) {
            var Y = Z[I];
            if (Y) {
                if (Y = bQ1.unescapeFragment(Y), B = B[Y], B === void 0) break;
                var J;
                if (!B55[Y]) {
                    if (J = this._getId(B), J) Q = vQ1(Q, J);
                    if (B.$ref) {
                        var W = vQ1(Q, B.$ref),
                            X = fQ1.call(this, G, W);
                        if (X) B = X.schema, G = X.root, Q = X.baseId
                    }
                }
            }
        }
        if (B !== void 0 && B !== G.schema) return {
            schema: B,
            root: G,
            baseId: Q
        }
    }
    var G55 = bQ1.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);

    function de1(A, Q) {
        if (Q === !1) return !1;
        if (Q === void 0 || Q === !0) return ce1(A);
        else if (Q) return pe1(A) <= Q
    }

    function ce1(A) {
        var Q;
        if (Array.isArray(A)) {
            for (var B = 0; B < A.length; B++)
                if (Q = A[B], typeof Q == "object" && !ce1(Q)) return !1
        } else
            for (var G in A) {
                if (G == "$ref") return !1;
                if (Q = A[G], typeof Q == "object" && !ce1(Q)) return !1
            }
        return !0
    }

    function pe1(A) {
        var Q = 0,
            B;
        if (Array.isArray(A))
            for (var G = 0; G < A.length; G++) {
                if (B = A[G], typeof B == "object") Q += pe1(B);
                if (Q == 1 / 0) return 1 / 0
            } else
                for (var Z in A) {
                    if (Z == "$ref") return 1 / 0;
                    if (G55[Z]) Q++;
                    else {
                        if (B = A[Z], typeof B == "object") Q += pe1(B) + 1;
                        if (Q == 1 / 0) return 1 / 0
                    }
                }
        return Q
    }

    function xQ1(A, Q) {
        if (Q !== !1) A = Ai(A);
        var B = jLA.parse(A);
        return m92(B)
    }

    function m92(A) {
        return jLA.serialize(A).split("#")[0] + "#"
    }
    var Z55 = /#\/?TextComponent/;

    function Ai(A) {
        return A ? A.replace(Z55, "") : ""
    }

    function vQ1(A, Q) {
        return Q = Ai(Q), jLA.resolve(A, Q)
    }

    function I55(A) {
        var Q = Ai(this._getId(A)),
            B = {
                "": Q
            },
            G = {
                "": xQ1(Q, !1)
            },
            Z = {},
            I = this;
        return A55(A, {
            allKeys: !0
        }, function(Y, J, W, X, F, V, K) {
            if (J === "") return;
            var D = I._getId(Y),
                H = B[X],
                C = G[X] + "/" + F;
            if (K !== void 0) C += "/" + (typeof K == "number" ? K : bQ1.escapeFragment(K));
            if (typeof D == "string") {
                D = H = Ai(H ? jLA.resolve(H, D) : D);
                var E = I._refs[D];
                if (typeof E == "string") E = I._refs[E];
                if (E && E.schema) {
                    if (!g92(Y, E.schema)) throw Error('id "' + D + '" resolves to more than one schema')
                } else if (D != Ai(C))
                    if (D[0] == "#") {
                        if (Z[D] && !g92(Y, Z[D])) throw Error('id "' + D + '" resolves to more than one schema');
                        Z[D] = Y
                    } else I._refs[D] = C
            }
            B[J] = H, G[J] = C
        }), Z
    }
});
var gQ1 = moduleWrapper((wMG, p92) => {
    var le1 = hQ1();
    p92.exports = {
        Validation: c92(Y55),
        MissingRef: c92(ie1)
    };

    function Y55(A) {
        this.message = "validation failed", this.errors = A, this.ajv = this.validation = !0
    }
    ie1.message = function(A, Q) {
        return "can't resolve reference " + Q + " from id " + A
    };

    function ie1(A, Q, B) {
        this.message = B || ie1.message(A, Q), this.missingRef = le1.url(A, Q), this.missingSchema = le1.normalizeId(le1.fullPath(this.missingRef))
    }

    function c92(A) {
        return A.prototype = Object.create(Error.prototype), A.prototype.constructor = A, A
    }
});
var ne1 = moduleWrapper((qMG, l92) => {
    l92.exports = function(A, Q) {
        if (!Q) Q = {};
        if (typeof Q === "function") Q = {
            cmp: Q
        };
        var B = typeof Q.cycles === "boolean" ? Q.cycles : !1,
            G = Q.cmp && function(I) {
                return function(Y) {
                    return function(J, W) {
                        var X = {
                                key: J,
                                value: Y[J]
                            },
                            F = {
                                key: W,
                                value: Y[W]
                            };
                        return I(X, F)
                    }
                }
            }(Q.cmp),
            Z = [];
        return function I(Y) {
            if (Y && Y.toJSON && typeof Y.toJSON === "function") Y = Y.toJSON();
            if (Y === void 0) return;
            if (typeof Y == "number") return isFinite(Y) ? "" + Y : "null";
            if (typeof Y !== "object") return JSON.stringify(Y);
            var J, W;
            if (Array.isArray(Y)) {
                W = "[";
                for (J = 0; J < Y.length; J++) {
                    if (J) W += ",";
                    W += I(Y[J]) || "null"
                }
                return W + "]"
            }
            if (Y === null) return "null";
            if (Z.indexOf(Y) !== -1) {
                if (B) return JSON.stringify("__cycle__");
                throw TypeError("Converting circular structure to JSON")
            }
            var X = Z.push(Y) - 1,
                F = Object.keys(Y).sort(G && G(Y));
            W = "";
            for (J = 0; J < F.length; J++) {
                var V = F[J],
                    K = I(Y[V]);
                if (!K) continue;
                if (W) W += ",";
                W += JSON.stringify(V) + ":" + K
            }
            return Z.splice(X, 1), "{" + W + "}"
        }(A)
    }
});
var ae1 = moduleWrapper((NMG, i92) => {
    i92.exports = function(Q, B, G) {
        var Z = "",
            I = Q.schema.$async === !0,
            Y = Q.util.schemaHasRulesExcept(Q.schema, Q.RULES.all, "$ref"),
            J = Q.self._getId(Q.schema);
        if (Q.opts.strictKeywords) {
            var W = Q.util.schemaUnknownRules(Q.schema, Q.RULES.keywords);
            if (W) {
                var X = "unknown keyword: " + W;
                if (Q.opts.strictKeywords === "log") Q.logger.warn(X);
                else throw Error(X)
            }
        }
        if (Q.isTop) {
            if (Z += " var validate = ", I) Q.async = !0, Z += "async ";
            if (Z += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", J && (Q.opts.sourceCode || Q.opts.processCode)) Z += " " + ("/*# sourceURL=" + J + " */") + " "
        }
        if (typeof Q.schema == "boolean" || !(Y || Q.schema.$ref)) {
            var B = "false schema",
                F = Q.level,
                V = Q.dataLevel,
                K = Q.schema[B],
                D = Q.schemaPath + Q.util.getProperty(B),
                H = Q.errSchemaPath + "/" + B,
                R = !Q.opts.allErrors,
                v, C = "data" + (V || ""),
                q = "valid" + F;
            if (Q.schema === !1) {
                if (Q.isTop) R = !0;
                else Z += " var " + q + " = false; ";
                var E = E || [];
                if (E.push(Z), Z = "", Q.createErrors !== !1) {
                    if (Z += " { keyword: '" + (v || "false schema") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(H) + " , params: {} ", Q.opts.messages !== !1) Z += " , message: 'boolean schema is false' ";
                    if (Q.opts.verbose) Z += " , schema: false , parentSchema: validate.schema" + Q.schemaPath + " , data: " + C + " ";
                    Z += " } "
                } else Z += " {} ";
                var z = Z;
                if (Z = E.pop(), !Q.compositeRule && R)
                    if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
                    else Z += " validate.errors = [" + z + "]; return false; ";
                else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
            } else if (Q.isTop)
                if (I) Z += " return data; ";
                else Z += " validate.errors = null; return true; ";
            else Z += " var " + q + " = true; ";
            if (Q.isTop) Z += " }; return validate; ";
            return Z
        }
        if (Q.isTop) {
            var w = Q.isTop,
                F = Q.level = 0,
                V = Q.dataLevel = 0,
                C = "data";
            if (Q.rootId = Q.resolve.fullPath(Q.self._getId(Q.root.schema)), Q.baseId = Q.baseId || Q.rootId, delete Q.isTop, Q.dataPathArr = [""], Q.schema.default !== void 0 && Q.opts.useDefaults && Q.opts.strictDefaults) {
                var N = "default is ignored in the schema root";
                if (Q.opts.strictDefaults === "log") Q.logger.warn(N);
                else throw Error(N)
            }
            Z += " var vErrors = null; ", Z += " var errors = 0;     ", Z += " if (rootData === undefined) rootData = data; "
        } else {
            var {
                level: F,
                dataLevel: V
            } = Q, C = "data" + (V || "");
            if (J) Q.baseId = Q.resolve.url(Q.baseId, J);
            if (I && !Q.async) throw Error("async schema in sync schema");
            Z += " var errs_" + F + " = errors;"
        }
        var q = "valid" + F,
            R = !Q.opts.allErrors,
            P = "",
            y = "",
            v, x = Q.schema.type,
            p = Array.isArray(x);
        if (x && Q.opts.nullable && Q.schema.nullable === !0) {
            if (p) {
                if (x.indexOf("null") == -1) x = x.concat("null")
            } else if (x != "null") x = [x, "null"], p = !0
        }
        if (p && x.length == 1) x = x[0], p = !1;
        if (Q.schema.$ref && Y) {
            if (Q.opts.extendRefs == "fail") throw Error('$ref: validation keywords used in schema at path "' + Q.errSchemaPath + '" (see option extendRefs)');
            else if (Q.opts.extendRefs !== !0) Y = !1, Q.logger.warn('$ref: keywords ignored in schema at path "' + Q.errSchemaPath + '"')
        }
        if (Q.schema.$comment && Q.opts.$comment) Z += " " + Q.RULES.all.$comment.code(Q, "$comment");
        if (x) {
            if (Q.opts.coerceTypes) var u = Q.util.coerceToTypes(Q.opts.coerceTypes, x);
            var o = Q.RULES.types[x];
            if (u || p || o === !0 || o && !PA(o)) {
                var D = Q.schemaPath + ".type",
                    H = Q.errSchemaPath + "/type",
                    D = Q.schemaPath + ".type",
                    H = Q.errSchemaPath + "/type",
                    l = p ? "checkDataTypes" : "checkDataType";
                if (Z += " if (" + Q.util[l](x, C, Q.opts.strictNumbers, !0) + ") { ", u) {
                    var k = "dataType" + F,
                        d = "coerced" + F;
                    if (Z += " var " + k + " = typeof " + C + "; var " + d + " = undefined; ", Q.opts.coerceTypes == "array") Z += " if (" + k + " == 'object' && Array.isArray(" + C + ") && " + C + ".length == 1) { " + C + " = " + C + "[0]; " + k + " = typeof " + C + "; if (" + Q.util.checkDataType(Q.schema.type, C, Q.opts.strictNumbers) + ") " + d + " = " + C + "; } ";
                    Z += " if (" + d + " !== undefined) ; ";
                    var QA = u;
                    if (QA) {
                        var IA, HA = -1,
                            wA = QA.length - 1;
                        while (HA < wA)
                            if (IA = QA[HA += 1], IA == "string") Z += " else if (" + k + " == 'number' || " + k + " == 'boolean') " + d + " = '' + " + C + "; else if (" + C + " === null) " + d + " = ''; ";
                            else if (IA == "number" || IA == "integer") {
                            if (Z += " else if (" + k + " == 'boolean' || " + C + " === null || (" + k + " == 'string' && " + C + " && " + C + " == +" + C + " ", IA == "integer") Z += " && !(" + C + " % 1)";
                            Z += ")) " + d + " = +" + C + "; "
                        } else if (IA == "boolean") Z += " else if (" + C + " === 'false' || " + C + " === 0 || " + C + " === null) " + d + " = false; else if (" + C + " === 'true' || " + C + " === 1) " + d + " = true; ";
                        else if (IA == "null") Z += " else if (" + C + " === '' || " + C + " === 0 || " + C + " === false) " + d + " = null; ";
                        else if (Q.opts.coerceTypes == "array" && IA == "array") Z += " else if (" + k + " == 'string' || " + k + " == 'number' || " + k + " == 'boolean' || " + C + " == null) " + d + " = [" + C + "]; "
                    }
                    Z += " else {   ";
                    var E = E || [];
                    if (E.push(Z), Z = "", Q.createErrors !== !1) {
                        if (Z += " { keyword: '" + (v || "type") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(H) + " , params: { type: '", p) Z += "" + x.join(",");
                        else Z += "" + x;
                        if (Z += "' } ", Q.opts.messages !== !1) {
                            if (Z += " , message: 'should be ", p) Z += "" + x.join(",");
                            else Z += "" + x;
                            Z += "' "
                        }
                        if (Q.opts.verbose) Z += " , schema: validate.schema" + D + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + C + " ";
                        Z += " } "
                    } else Z += " {} ";
                    var z = Z;
                    if (Z = E.pop(), !Q.compositeRule && R)
                        if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
                        else Z += " validate.errors = [" + z + "]; return false; ";
                    else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                    Z += " } if (" + d + " !== undefined) {  ";
                    var KA = V ? "data" + (V - 1 || "") : "parentData",
                        SA = V ? Q.dataPathArr[V] : "parentDataProperty";
                    if (Z += " " + C + " = " + d + "; ", !V) Z += "if (" + KA + " !== undefined)";
                    Z += " " + KA + "[" + SA + "] = " + d + "; } "
                } else {
                    var E = E || [];
                    if (E.push(Z), Z = "", Q.createErrors !== !1) {
                        if (Z += " { keyword: '" + (v || "type") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(H) + " , params: { type: '", p) Z += "" + x.join(",");
                        else Z += "" + x;
                        if (Z += "' } ", Q.opts.messages !== !1) {
                            if (Z += " , message: 'should be ", p) Z += "" + x.join(",");
                            else Z += "" + x;
                            Z += "' "
                        }
                        if (Q.opts.verbose) Z += " , schema: validate.schema" + D + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + C + " ";
                        Z += " } "
                    } else Z += " {} ";
                    var z = Z;
                    if (Z = E.pop(), !Q.compositeRule && R)
                        if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
                        else Z += " validate.errors = [" + z + "]; return false; ";
                    else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
                }
                Z += " } "
            }
        }
        if (Q.schema.$ref && !Y) {
            if (Z += " " + Q.RULES.all.$ref.code(Q, "$ref") + " ", R) {
                if (Z += " } if (errors === ", w) Z += "0";
                else Z += "errs_" + F;
                Z += ") { ", y += "}"
            }
        } else {
            var sA = Q.RULES;
            if (sA) {
                var o, NA = -1,
                    qA = sA.length - 1;
                while (NA < qA)
                    if (o = sA[NA += 1], PA(o)) {
                        if (o.type) Z += " if (" + Q.util.checkDataType(o.type, C, Q.opts.strictNumbers) + ") { ";
                        if (Q.opts.useDefaults) {
                            if (o.type == "object" && Q.schema.properties) {
                                var K = Q.schema.properties,
                                    DA = Object.keys(K),
                                    yA = DA;
                                if (yA) {
                                    var rA, K1 = -1,
                                        WA = yA.length - 1;
                                    while (K1 < WA) {
                                        rA = yA[K1 += 1];
                                        var XA = K[rA];
                                        if (XA.default !== void 0) {
                                            var zA = C + Q.util.getProperty(rA);
                                            if (Q.compositeRule) {
                                                if (Q.opts.strictDefaults) {
                                                    var N = "default is ignored for: " + zA;
                                                    if (Q.opts.strictDefaults === "log") Q.logger.warn(N);
                                                    else throw Error(N)
                                                }
                                            } else {
                                                if (Z += " if (" + zA + " === undefined ", Q.opts.useDefaults == "empty") Z += " || " + zA + " === null || " + zA + " === '' ";
                                                if (Z += " ) " + zA + " = ", Q.opts.useDefaults == "shared") Z += " " + Q.useDefault(XA.default) + " ";
                                                else Z += " " + JSON.stringify(XA.default) + " ";
                                                Z += "; "
                                            }
                                        }
                                    }
                                }
                            } else if (o.type == "array" && Array.isArray(Q.schema.items)) {
                                var $A = Q.schema.items;
                                if ($A) {
                                    var XA, HA = -1,
                                        LA = $A.length - 1;
                                    while (HA < LA)
                                        if (XA = $A[HA += 1], XA.default !== void 0) {
                                            var zA = C + "[" + HA + "]";
                                            if (Q.compositeRule) {
                                                if (Q.opts.strictDefaults) {
                                                    var N = "default is ignored for: " + zA;
                                                    if (Q.opts.strictDefaults === "log") Q.logger.warn(N);
                                                    else throw Error(N)
                                                }
                                            } else {
                                                if (Z += " if (" + zA + " === undefined ", Q.opts.useDefaults == "empty") Z += " || " + zA + " === null || " + zA + " === '' ";
                                                if (Z += " ) " + zA + " = ", Q.opts.useDefaults == "shared") Z += " " + Q.useDefault(XA.default) + " ";
                                                else Z += " " + JSON.stringify(XA.default) + " ";
                                                Z += "; "
                                            }
                                        }
                                }
                            }
                        }
                        var TA = o.rules;
                        if (TA) {
                            var eA, BASE64_CHARS = -1,
                                I1 = TA.length - 1;
                            while (BASE64_CHARS < I1)
                                if (eA = TA[BASE64_CHARS += 1], B1(eA)) {
                                    var w1 = eA.code(Q, eA.keyword, o.type);
                                    if (w1) {
                                        if (Z += " " + w1 + " ", R) P += "}"
                                    }
                                }
                        }
                        if (R) Z += " " + P + " ", P = "";
                        if (o.type) {
                            if (Z += " } ", x && x === o.type && !u) {
                                Z += " else { ";
                                var D = Q.schemaPath + ".type",
                                    H = Q.errSchemaPath + "/type",
                                    E = E || [];
                                if (E.push(Z), Z = "", Q.createErrors !== !1) {
                                    if (Z += " { keyword: '" + (v || "type") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(H) + " , params: { type: '", p) Z += "" + x.join(",");
                                    else Z += "" + x;
                                    if (Z += "' } ", Q.opts.messages !== !1) {
                                        if (Z += " , message: 'should be ", p) Z += "" + x.join(",");
                                        else Z += "" + x;
                                        Z += "' "
                                    }
                                    if (Q.opts.verbose) Z += " , schema: validate.schema" + D + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + C + " ";
                                    Z += " } "
                                } else Z += " {} ";
                                var z = Z;
                                if (Z = E.pop(), !Q.compositeRule && R)
                                    if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
                                    else Z += " validate.errors = [" + z + "]; return false; ";
                                else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                                Z += " } "
                            }
                        }
                        if (R) {
                            if (Z += " if (errors === ", w) Z += "0";
                            else Z += "errs_" + F;
                            Z += ") { ", y += "}"
                        }
                    }
            }
        }
        if (R) Z += " " + y + " ";
        if (w) {
            if (I) Z += " if (errors === 0) return data;           ", Z += " else throw new ValidationError(vErrors); ";
            else Z += " validate.errors = vErrors; ", Z += " return errors === 0;       ";
            Z += " }; return validate;"
        } else Z += " var " + q + " = errors === errs_" + F + ";";

        function PA(b1) {
            var Y0 = b1.rules;
            for (var x0 = 0; x0 < Y0.length; x0++)
                if (B1(Y0[x0])) return !0
        }

        function B1(b1) {
            return Q.schema[b1.keyword] !== void 0 || b1.implements && Q0(b1)
        }

        function Q0(b1) {
            var Y0 = b1.implements;
            for (var x0 = 0; x0 < Y0.length; x0++)
                if (Q.schema[Y0[x0]] !== void 0) return !0
        }
        return Z
    }
});
var o92 = moduleWrapper((LMG, r92) => {
    var uQ1 = hQ1(),
        dQ1 = sAA(),
        a92 = gQ1(),
        J55 = ne1(),
        n92 = ae1(),
        W55 = dQ1.ucs2length,
        X55 = _Q1(),
        F55 = a92.Validation;
    r92.exports = se1;

    function se1(A, Q, B, G) {
        var Z = this,
            I = this._opts,
            Y = [void 0],
            J = {},
            W = [],
            X = {},
            F = [],
            V = {},
            K = [];
        Q = Q || {
            schema: A,
            refVal: Y,
            refs: J
        };
        var D = V55.call(this, A, Q, G),
            H = this._compilations[D.index];
        if (D.compiling) return H.callValidate = N;
        var C = this._formats,
            E = this.RULES;
        try {
            var z = q(A, Q, B, G);
            H.validate = z;
            var w = H.callValidate;
            if (w) {
                if (w.schema = z.schema, w.errors = null, w.refs = z.refs, w.refVal = z.refVal, w.root = z.root, w.$async = z.$async, I.sourceCode) w.source = z.source
            }
            return z
        } finally {
            K55.call(this, A, Q, G)
        }

        function N() {
            var l = H.validate,
                k = l.apply(this, arguments);
            return N.errors = l.errors, k
        }

        function q(l, k, d, QA) {
            var IA = !k || k && k.schema == l;
            if (k.schema != Q.schema) return se1.call(Z, l, k, d, QA);
            var HA = l.$async === !0,
                wA = n92({
                    isTop: !0,
                    schema: l,
                    isRoot: IA,
                    baseId: QA,
                    root: k,
                    schemaPath: "",
                    errSchemaPath: "#",
                    errorPath: '""',
                    MissingRefError: a92.MissingRef,
                    RULES: E,
                    validate: n92,
                    util: dQ1,
                    resolve: uQ1,
                    resolveRef: R,
                    usePattern: p,
                    useDefault: u,
                    useCustomRule: o,
                    opts: I,
                    formats: C,
                    logger: Z.logger,
                    self: Z
                });
            if (wA = mQ1(Y, C55) + mQ1(W, D55) + mQ1(F, H55) + mQ1(K, E55) + wA, I.processCode) wA = I.processCode(wA, l);
            var KA;
            try {
                var SA = Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", wA);
                KA = SA(Z, E, C, Q, Y, F, K, X55, W55, F55), Y[0] = KA
            } catch (sA) {
                throw Z.logger.error("Error compiling schema, function code:", wA), sA
            }
            if (KA.schema = l, KA.errors = null, KA.refs = J, KA.refVal = Y, KA.root = IA ? KA : k, HA) KA.$async = !0;
            if (I.sourceCode === !0) KA.source = {
                code: wA,
                patterns: W,
                defaults: F
            };
            return KA
        }

        function R(l, k, d) {
            k = uQ1.url(l, k);
            var QA = J[k],
                IA, HA;
            if (QA !== void 0) return IA = Y[QA], HA = "refVal[" + QA + "]", x(IA, HA);
            if (!d && Q.refs) {
                var wA = Q.refs[k];
                if (wA !== void 0) return IA = Q.refVal[wA], HA = P(k, IA), x(IA, HA)
            }
            HA = P(k);
            var KA = uQ1.call(Z, q, Q, k);
            if (KA === void 0) {
                var SA = B && B[k];
                if (SA) KA = uQ1.inlineRef(SA, I.inlineRefs) ? SA : se1.call(Z, SA, Q, B, l)
            }
            if (KA === void 0) y(k);
            else return v(k, KA), x(KA, HA)
        }

        function P(l, k) {
            var d = Y.length;
            return Y[d] = k, J[l] = d, "refVal" + d
        }

        function y(l) {
            delete J[l]
        }

        function v(l, k) {
            var d = J[l];
            Y[d] = k
        }

        function x(l, k) {
            return typeof l == "object" || typeof l == "boolean" ? {
                code: k,
                schema: l,
                inline: !0
            } : {
                code: k,
                $async: l && !!l.$async
            }
        }

        function p(l) {
            var k = X[l];
            if (k === void 0) k = X[l] = W.length, W[k] = l;
            return "pattern" + k
        }

        function u(l) {
            switch (typeof l) {
                case "boolean":
                case "number":
                    return "" + l;
                case "string":
                    return dQ1.toQuotedString(l);
                case "object":
                    if (l === null) return "null";
                    var k = J55(l),
                        d = V[k];
                    if (d === void 0) d = V[k] = F.length, F[d] = l;
                    return "default" + d
            }
        }

        function o(l, k, d, QA) {
            if (Z._opts.validateSchema !== !1) {
                var IA = l.definition.dependencies;
                if (IA && !IA.every(function(yA) {
                        return Object.prototype.hasOwnProperty.call(d, yA)
                    })) throw Error("parent schema must have all required keywords: " + IA.join(","));
                var HA = l.definition.validateSchema;
                if (HA) {
                    var wA = HA(k);
                    if (!wA) {
                        var KA = "keyword schema is invalid: " + Z.errorsText(HA.errors);
                        if (Z._opts.validateSchema == "log") Z.logger.error(KA);
                        else throw Error(KA)
                    }
                }
            }
            var SA = l.definition.compile,
                sA = l.definition.inline,
                NA = l.definition.macro,
                qA;
            if (SA) qA = SA.call(Z, k, d, QA);
            else if (NA) {
                if (qA = NA.call(Z, k, d, QA), I.validateSchema !== !1) Z.validateSchema(qA, !0)
            } else if (sA) qA = sA.call(Z, QA, l.keyword, k, d);
            else if (qA = l.definition.validate, !qA) return;
            if (qA === void 0) throw Error('custom keyword "' + l.keyword + '"failed to compile');
            var DA = K.length;
            return K[DA] = qA, {
                code: "customRule" + DA,
                validate: qA
            }
        }
    }

    function V55(A, Q, B) {
        var G = s92.call(this, A, Q, B);
        if (G >= 0) return {
            index: G,
            compiling: !0
        };
        return G = this._compilations.length, this._compilations[G] = {
            schema: A,
            root: Q,
            baseId: B
        }, {
            index: G,
            compiling: !1
        }
    }

    function K55(A, Q, B) {
        var G = s92.call(this, A, Q, B);
        if (G >= 0) this._compilations.splice(G, 1)
    }

    function s92(A, Q, B) {
        for (var G = 0; G < this._compilations.length; G++) {
            var Z = this._compilations[G];
            if (Z.schema == A && Z.root == Q && Z.baseId == B) return G
        }
        return -1
    }

    function D55(A, Q) {
        return "var pattern" + A + " = new RegExp(" + dQ1.toQuotedString(Q[A]) + ");"
    }

    function H55(A) {
        return "var default" + A + " = defaults[" + A + "];"
    }

    function C55(A, Q) {
        return Q[A] === void 0 ? "" : "var refVal" + A + " = refVal[" + A + "];"
    }

    function E55(A) {
        return "var customRule" + A + " = customRules[" + A + "];"
    }

    function mQ1(A, Q) {
        if (!A.length) return "";
        var B = "";
        for (var G = 0; G < A.length; G++) B += Q(G, A);
        return B
    }
});
var e92 = moduleWrapper((MMG, t92) => {
    var cQ1 = t92.exports = function() {
        this._cache = {}
    };
    cQ1.prototype.put = function(Q, B) {
        this._cache[Q] = B
    };
    cQ1.prototype.get = function(Q) {
        return this._cache[Q]
    };
    cQ1.prototype.del = function(Q) {
        delete this._cache[Q]
    };
    cQ1.prototype.clear = function() {
        this._cache = {}
    }
});
var V42 = moduleWrapper((OMG, F42) => {
    var z55 = sAA(),
        U55 = /^(\d\d\d\d)-(\d\d)-(\d\d)TextComponent/,
        $55 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        w55 = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?TextComponent/i,
        A42 = /^(?=.{1,253}\.?TextComponent)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?TextComponent/i,
        q55 = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!TextComponent&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!TextComponent&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!TextComponent&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!TextComponent&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!TextComponent&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!TextComponent&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!TextComponent&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!TextComponent&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!TextComponent&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!TextComponent&'()*+,;=:@/?]|%[0-9a-f]{2})*)?TextComponent/i,
        N55 = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!TextComponent&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!TextComponent&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!TextComponent&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!TextComponent&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!TextComponent&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!TextComponent&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!TextComponent&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!TextComponent&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!TextComponent&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!TextComponent&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?TextComponent/i,
        Q42 = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*TextComponent/i,
        B42 = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?TextComponent/i,
        G42 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}TextComponent/i,
        Z42 = /^(?:\/(?:[^~/]|~0|~1)*)*TextComponent/,
        I42 = /^#(?:\/(?:[a-z0-9_\-.!TextComponent&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*TextComponent/i,
        Y42 = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)TextComponent/;
    F42.exports = pQ1;

    function pQ1(A) {
        return A = A == "full" ? "full" : "fast", z55.copy(pQ1[A])
    }
    pQ1.fast = {
        date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
        time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?TextComponent/i,
        "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)TextComponent/i,
        uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*TextComponent/i,
        "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?TextComponent/i,
        "uri-template": Q42,
        url: B42,
        email: /^[a-z0-9.!#TextComponent%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*TextComponent/i,
        hostname: A42,
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)TextComponent/,
        ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*TextComponent/i,
        regex: X42,
        uuid: G42,
        "json-pointer": Z42,
        "json-pointer-uri-fragment": I42,
        "relative-json-pointer": Y42
    };
    pQ1.full = {
        date: J42,
        time: W42,
        "date-time": O55,
        uri: T55,
        "uri-reference": N55,
        "uri-template": Q42,
        url: B42,
        email: /^[a-z0-9!#TextComponent%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#TextComponent%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?TextComponent/i,
        hostname: A42,
        ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)TextComponent/,
        ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*TextComponent/i,
        regex: X42,
        uuid: G42,
        "json-pointer": Z42,
        "json-pointer-uri-fragment": I42,
        "relative-json-pointer": Y42
    };

    function L55(A) {
        return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
    }

    function J42(A) {
        var Q = A.match(U55);
        if (!Q) return !1;
        var B = +Q[1],
            G = +Q[2],
            Z = +Q[3];
        return G >= 1 && G <= 12 && Z >= 1 && Z <= (G == 2 && L55(B) ? 29 : $55[G])
    }

    function W42(A, Q) {
        var B = A.match(w55);
        if (!B) return !1;
        var G = B[1],
            Z = B[2],
            I = B[3],
            Y = B[5];
        return (G <= 23 && Z <= 59 && I <= 59 || G == 23 && Z == 59 && I == 60) && (!Q || Y)
    }
    var M55 = /t|\s/i;

    function O55(A) {
        var Q = A.split(M55);
        return Q.length == 2 && J42(Q[0]) && W42(Q[1], !0)
    }
    var R55 = /\/|:/;

    function T55(A) {
        return R55.test(A) && q55.test(A)
    }
    var P55 = /[^\\]\\Z/;

    function X42(A) {
        if (P55.test(A)) return !1;
        try {
            return new RegExp(A), !0
        } catch (Q) {
            return !1
        }
    }
});
var D42 = moduleWrapper((RMG, K42) => {
    K42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.errSchemaPath + "/" + B,
            X = !Q.opts.allErrors,
            F = "data" + (Y || ""),
            V = "valid" + I,
            K, D;
        if (J == "#" || J == "#/")
            if (Q.isRoot) K = Q.async, D = "validate";
            else K = Q.root.schema.$async === !0, D = "root.refVal[0]";
        else {
            var H = Q.resolveRef(Q.baseId, J, Q.isRoot);
            if (H === void 0) {
                var C = Q.MissingRefError.message(Q.baseId, J);
                if (Q.opts.missingRefs == "fail") {
                    Q.logger.error(C);
                    var E = E || [];
                    if (E.push(Z), Z = "", Q.createErrors !== !1) {
                        if (Z += " { keyword: '$ref' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(W) + " , params: { ref: '" + Q.util.escapeQuotes(J) + "' } ", Q.opts.messages !== !1) Z += " , message: 'can\\'t resolve reference " + Q.util.escapeQuotes(J) + "' ";
                        if (Q.opts.verbose) Z += " , schema: " + Q.util.toQuotedString(J) + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + F + " ";
                        Z += " } "
                    } else Z += " {} ";
                    var z = Z;
                    if (Z = E.pop(), !Q.compositeRule && X)
                        if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
                        else Z += " validate.errors = [" + z + "]; return false; ";
                    else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                    if (X) Z += " if (false) { "
                } else if (Q.opts.missingRefs == "ignore") {
                    if (Q.logger.warn(C), X) Z += " if (true) { "
                } else throw new Q.MissingRefError(Q.baseId, J, C)
            } else if (H.inline) {
                var w = Q.util.copy(Q);
                w.level++;
                var N = "valid" + w.level;
                w.schema = H.schema, w.schemaPath = "", w.errSchemaPath = J;
                var q = Q.validate(w).replace(/validate\.schema/g, H.code);
                if (Z += " " + q + " ", X) Z += " if (" + N + ") { "
            } else K = H.$async === !0 || Q.async && H.$async !== !1, D = H.code
        }
        if (D) {
            var E = E || [];
            if (E.push(Z), Z = "", Q.opts.passContext) Z += " " + D + ".call(this, ";
            else Z += " " + D + "( ";
            if (Z += " " + F + ", (dataPath || '')", Q.errorPath != '""') Z += " + " + Q.errorPath;
            var R = Y ? "data" + (Y - 1 || "") : "parentData",
                P = Y ? Q.dataPathArr[Y] : "parentDataProperty";
            Z += " , " + R + " , " + P + ", rootData)  ";
            var y = Z;
            if (Z = E.pop(), K) {
                if (!Q.async) throw Error("async schema referenced by sync schema");
                if (X) Z += " var " + V + "; ";
                if (Z += " try { await " + y + "; ", X) Z += " " + V + " = true; ";
                if (Z += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", X) Z += " " + V + " = false; ";
                if (Z += " } ", X) Z += " if (" + V + ") { "
            } else if (Z += " if (!" + y + ") { if (vErrors === null) vErrors = " + D + ".errors; else vErrors = vErrors.concat(" + D + ".errors); errors = vErrors.length; } ", X) Z += " else { "
        }
        return Z
    }
});
var C42 = moduleWrapper((TMG, H42) => {
    H42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.schema[B],
            Y = Q.schemaPath + Q.util.getProperty(B),
            J = Q.errSchemaPath + "/" + B,
            W = !Q.opts.allErrors,
            X = Q.util.copy(Q),
            F = "";
        X.level++;
        var V = "valid" + X.level,
            K = X.baseId,
            D = !0,
            H = I;
        if (H) {
            var C, E = -1,
                z = H.length - 1;