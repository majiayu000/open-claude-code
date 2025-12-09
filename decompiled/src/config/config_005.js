/**
 * Claude Code Decompiled
 * Category: config
 * File: 5/9
 * Lines: 310961 - 312459 (1499 lines)
 * Original file: cli.js
 */

        if (B < 0) throw Error(Q + " is not a member of " + this);
        if (this.fieldsArray.splice(B, 1), B = this.oneof.indexOf(Q.name), B > -1) this.oneof.splice(B, 1);
        return Q.partOf = null, this
    };
    wq.prototype.onAdd = function(Q) {
        M41.prototype.onAdd.call(this, Q);
        var B = this;
        for (var G = 0; G < this.oneof.length; ++G) {
            var Z = Q.get(this.oneof[G]);
            if (Z && !Z.partOf) Z.partOf = B, B.fieldsArray.push(Z)
        }
        bC2(this)
    };
    wq.prototype.onRemove = function(Q) {
        for (var B = 0, G; B < this.fieldsArray.length; ++B)
            if ((G = this.fieldsArray[B]).parent) G.parent.remove(G);
        M41.prototype.onRemove.call(this, Q)
    };
    Object.defineProperty(wq.prototype, "isProto3Optional", {
        get: function() {
            if (this.fieldsArray == null || this.fieldsArray.length !== 1) return !1;
            var A = this.fieldsArray[0];
            return A.options != null && A.options.proto3_optional === !0
        }
    });
    wq.d = function() {
        var Q = Array(arguments.length),
            B = 0;
        while (B < arguments.length) Q[B] = arguments[B++];
        return function(Z, I) {
            L41.decorateType(Z.constructor).add(new wq(I, Q)), Object.defineProperty(Z, I, {
                get: L41.oneOfGetter(Q),
                set: L41.oneOfSetter(Q)
            })
        }
    }
});
var fi = U((kuG, hC2) => {
    hC2.exports = vD;
    vD.className = "ReflectionObject";
    var UL5 = c1A(),
        HOA = GK(),
        O41, $L5 = {
            enum_type: "OPEN",
            field_presence: "EXPLICIT",
            json_format: "ALLOW",
            message_encoding: "LENGTH_PREFIXED",
            repeated_field_encoding: "PACKED",
            utf8_validation: "VERIFY"
        },
        wL5 = {
            enum_type: "CLOSED",
            field_presence: "EXPLICIT",
            json_format: "LEGACY_BEST_EFFORT",
            message_encoding: "LENGTH_PREFIXED",
            repeated_field_encoding: "EXPANDED",
            utf8_validation: "NONE"
        },
        qL5 = {
            enum_type: "OPEN",
            field_presence: "IMPLICIT",
            json_format: "ALLOW",
            message_encoding: "LENGTH_PREFIXED",
            repeated_field_encoding: "PACKED",
            utf8_validation: "VERIFY"
        };

    function vD(A, Q) {
        if (!HOA.isString(A)) throw TypeError("name must be a string");
        if (Q && !HOA.isObject(Q)) throw TypeError("options must be an object");
        this.options = Q, this.parsedOptions = null, this.name = A, this._edition = null, this._defaultEdition = "proto2", this._features = {}, this._featuresResolved = !1, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
    }
    Object.defineProperties(vD.prototype, {
        root: {
            get: function() {
                var A = this;
                while (A.parent !== null) A = A.parent;
                return A
            }
        },
        fullName: {
            get: function() {
                var A = [this.name],
                    Q = this.parent;
                while (Q) A.unshift(Q.name), Q = Q.parent;
                return A.join(".")
            }
        }
    });
    vD.prototype.toJSON = function() {
        throw Error()
    };
    vD.prototype.onAdd = function(Q) {
        if (this.parent && this.parent !== Q) this.parent.remove(this);
        this.parent = Q, this.resolved = !1;
        var B = Q.root;
        if (B instanceof O41) B._handleAdd(this)
    };
    vD.prototype.onRemove = function(Q) {
        var B = Q.root;
        if (B instanceof O41) B._handleRemove(this);
        this.parent = null, this.resolved = !1
    };
    vD.prototype.resolve = function() {
        if (this.resolved) return this;
        if (this.root instanceof O41) this.resolved = !0;
        return this
    };
    vD.prototype._resolveFeaturesRecursive = function(Q) {
        return this._resolveFeatures(this._edition || Q)
    };
    vD.prototype._resolveFeatures = function(Q) {
        if (this._featuresResolved) return;
        var B = {};
        if (!Q) throw Error("Unknown edition for " + this.fullName);
        var G = Object.assign(this.options ? Object.assign({}, this.options.features) : {}, this._inferLegacyProtoFeatures(Q));
        if (this._edition) {
            if (Q === "proto2") B = Object.assign({}, wL5);
            else if (Q === "proto3") B = Object.assign({}, qL5);
            else if (Q === "2023") B = Object.assign({}, $L5);
            else throw Error("Unknown edition: " + Q);
            this._features = Object.assign(B, G || {}), this._featuresResolved = !0;
            return
        }
        if (this.partOf instanceof UL5) {
            var Z = Object.assign({}, this.partOf._features);
            this._features = Object.assign(Z, G || {})
        } else if (this.declaringField);
        else if (this.parent) {
            var I = Object.assign({}, this.parent._features);
            this._features = Object.assign(I, G || {})
        } else throw Error("Unable to find a parent for " + this.fullName);
        if (this.extensionField) this.extensionField._features = this._features;
        this._featuresResolved = !0
    };
    vD.prototype._inferLegacyProtoFeatures = function() {
        return {}
    };
    vD.prototype.getOption = function(Q) {
        if (this.options) return this.options[Q];
        return
    };
    vD.prototype.setOption = function(Q, B, G) {
        if (!this.options) this.options = {};
        if (/^features\./.test(Q)) HOA.setProperty(this.options, Q, B, G);
        else if (!G || this.options[Q] === void 0) {
            if (this.getOption(Q) !== B) this.resolved = !1;
            this.options[Q] = B
        }
        return this
    };
    vD.prototype.setParsedOption = function(Q, B, G) {
        if (!this.parsedOptions) this.parsedOptions = [];
        var Z = this.parsedOptions;
        if (G) {
            var I = Z.find(function(W) {
                return Object.prototype.hasOwnProperty.call(W, Q)
            });
            if (I) {
                var Y = I[Q];
                HOA.setProperty(Y, G, B)
            } else I = {}, I[Q] = HOA.setProperty({}, G, B), Z.push(I)
        } else {
            var J = {};
            J[Q] = B, Z.push(J)
        }
        return this
    };
    vD.prototype.setOptions = function(Q, B) {
        if (Q)
            for (var G = Object.keys(Q), Z = 0; Z < G.length; ++Z) this.setOption(G[Z], Q[G[Z]], B);
        return this
    };
    vD.prototype.toString = function() {
        var Q = this.constructor.className,
            B = this.fullName;
        if (B.length) return Q + " " + B;
        return Q
    };
    vD.prototype._editionToJSON = function() {
        if (!this._edition || this._edition === "proto3") return;
        return this._edition
    };
    vD._configure = function(A) {
        O41 = A
    }
});
var FP = U((yuG, uC2) => {
    uC2.exports = VP;
    var E20 = fi();
    ((VP.prototype = Object.create(E20.prototype)).constructor = VP).className = "Enum";
    var gC2 = nYA(),
        R41 = GK();

    function VP(A, Q, B, G, Z, I) {
        if (E20.call(this, A, B), Q && typeof Q !== "object") throw TypeError("values must be an object");
        if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = G, this.comments = Z || {}, this.valuesOptions = I, this._valuesFeatures = {}, this.reserved = void 0, Q) {
            for (var Y = Object.keys(Q), J = 0; J < Y.length; ++J)
                if (typeof Q[Y[J]] === "number") this.valuesById[this.values[Y[J]] = Q[Y[J]]] = Y[J]
        }
    }
    VP.prototype._resolveFeatures = function(Q) {
        return Q = this._edition || Q, E20.prototype._resolveFeatures.call(this, Q), Object.keys(this.values).forEach((B) => {
            var G = Object.assign({}, this._features);
            this._valuesFeatures[B] = Object.assign(G, this.valuesOptions && this.valuesOptions[B] && this.valuesOptions[B].features)
        }), this
    };
    VP.fromJSON = function(Q, B) {
        var G = new VP(Q, B.values, B.options, B.comment, B.comments);
        if (G.reserved = B.reserved, B.edition) G._edition = B.edition;
        return G._defaultEdition = "proto3", G
    };
    VP.prototype.toJSON = function(Q) {
        var B = Q ? Boolean(Q.keepComments) : !1;
        return R41.toObject(["edition", this._editionToJSON(), "options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", B ? this.comment : void 0, "comments", B ? this.comments : void 0])
    };
    VP.prototype.add = function(Q, B, G, Z) {
        if (!R41.isString(Q)) throw TypeError("name must be a string");
        if (!R41.isInteger(B)) throw TypeError("id must be an integer");
        if (this.values[Q] !== void 0) throw Error("duplicate name '" + Q + "' in " + this);
        if (this.isReservedId(B)) throw Error("id " + B + " is reserved in " + this);
        if (this.isReservedName(Q)) throw Error("name '" + Q + "' is reserved in " + this);
        if (this.valuesById[B] !== void 0) {
            if (!(this.options && this.options.allow_alias)) throw Error("duplicate id " + B + " in " + this);
            this.values[Q] = B
        } else this.valuesById[this.values[Q] = B] = Q;
        if (Z) {
            if (this.valuesOptions === void 0) this.valuesOptions = {};
            this.valuesOptions[Q] = Z || null
        }
        return this.comments[Q] = G || null, this
    };
    VP.prototype.remove = function(Q) {
        if (!R41.isString(Q)) throw TypeError("name must be a string");
        var B = this.values[Q];
        if (B == null) throw Error("name '" + Q + "' does not exist in " + this);
        if (delete this.valuesById[B], delete this.values[Q], delete this.comments[Q], this.valuesOptions) delete this.valuesOptions[Q];
        return this
    };
    VP.prototype.isReservedId = function(Q) {
        return gC2.isReservedId(this.reserved, Q)
    };
    VP.prototype.isReservedName = function(Q) {
        return gC2.isReservedName(this.reserved, Q)
    }
});
var X20 = U((xuG, dC2) => {
    dC2.exports = LL5;
    var NL5 = FP(),
        z20 = p1A(),
        U20 = GK();

    function mC2(A, Q, B, G) {
        return Q.delimited ? A("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", B, G, (Q.id << 3 | 3) >>> 0, (Q.id << 3 | 4) >>> 0) : A("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", B, G, (Q.id << 3 | 2) >>> 0)
    }

    function LL5(A) {
        var Q = U20.codegen(["m", "w"], A.name + "$encode")("if(!w)")("w=Writer.create()"),
            B, G, Z = A.fieldsArray.slice().sort(U20.compareFieldsById);
        for (var B = 0; B < Z.length; ++B) {
            var I = Z[B].resolve(),
                Y = A._fieldsArray.indexOf(I),
                J = I.resolvedType instanceof NL5 ? "int32" : I.type,
                W = z20.basic[J];
            if (G = "m" + U20.safeProp(I.name), I.map) {
                if (Q("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", G, I.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", G)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (I.id << 3 | 2) >>> 0, 8 | z20.mapKey[I.keyType], I.keyType), W === void 0) Q("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", Y, G);
                else Q(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | W, J, G);
                Q("}")("}")
            } else if (I.repeated) {
                if (Q("if(%s!=null&&%s.length){", G, G), I.packed && z20.packed[J] !== void 0) Q("w.uint32(%i).fork()", (I.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", G)("w.%s(%s[i])", J, G)("w.ldelim()");
                else if (Q("for(var i=0;i<%s.length;++i)", G), W === void 0) mC2(Q, I, Y, G + "[i]");
                else Q("w.uint32(%i).%s(%s[i])", (I.id << 3 | W) >>> 0, J, G);
                Q("}")
            } else {
                if (I.optional) Q("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", G, I.name);
                if (W === void 0) mC2(Q, I, Y, G);
                else Q("w.uint32(%i).%s(%s)", (I.id << 3 | W) >>> 0, J, G)
            }
        }
        return Q("return w")
    }
});
var pC2 = U((vuG, cC2) => {
    var X3 = cC2.exports = mQ0();
    X3.build = "light";

    function ML5(A, Q, B) {
        if (typeof Q === "function") B = Q, Q = new X3.Root;
        else if (!Q) Q = new X3.Root;
        return Q.load(A, B)
    }
    X3.load = ML5;

    function OL5(A, Q) {
        if (!Q) Q = new X3.Root;
        return Q.loadSync(A)
    }
    X3.loadSync = OL5;
    X3.encoder = X20();
    X3.decoder = tB0();
    X3.verifier = Q20();
    X3.converter = Z20();
    X3.ReflectionObject = fi();
    X3.Namespace = nYA();
    X3.Root = N41();
    X3.Enum = FP();
    X3.Type = U41();
    X3.Field = bi();
    X3.OneOf = c1A();
    X3.MapField = K41();
    X3.Service = H41();
    X3.Method = D41();
    X3.Message = C41();
    X3.wrappers = I20();
    X3.types = p1A();
    X3.util = GK();
    X3.ReflectionObject._configure(X3.Root);
    X3.Namespace._configure(X3.Type, X3.Service, X3.Enum);
    X3.Root._configure(X3.Type);
    X3.Field._configure(X3.Type)
});
var w20 = U((buG, nC2) => {
    nC2.exports = iC2;
    var $20 = /[\s{}=;:[\],'"()<>]/g,
        RL5 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
        TL5 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
        PL5 = /^ *[*/]+ */,
        jL5 = /^\s*\*?\/*/,
        SL5 = /\n/g,
        _L5 = /\s/,
        kL5 = /\\(.?)/g,
        yL5 = {
            "0": "\x00",
            r: "\r",
            n: `
`,
            t: "\t"
        };

    function lC2(A) {
        return A.replace(kL5, function(Q, B) {
            switch (B) {
                case "\\":
                case "":
                    return B;
                default:
                    return yL5[B] || ""
            }
        })
    }
    iC2.unescape = lC2;

    function iC2(A, Q) {
        A = A.toString();
        var B = 0,
            G = A.length,
            Z = 1,
            I = 0,
            Y = {},
            J = [],
            W = null;

        function X(q) {
            return Error("illegal " + q + " (line " + Z + ")")
        }

        function F() {
            var q = W === "'" ? TL5 : RL5;
            q.lastIndex = B - 1;
            var R = q.exec(A);
            if (!R) throw X("string");
            return B = q.lastIndex, E(W), W = null, lC2(R[1])
        }

        function V(q) {
            return A.charAt(q)
        }

        function K(q, R, P) {
            var y = {
                    type: A.charAt(q++),
                    lineEmpty: !1,
                    leading: P
                },
                v;
            if (Q) v = 2;
            else v = 3;
            var x = q - v,
                p;
            do
                if (--x < 0 || (p = A.charAt(x)) === `
`) {
                    y.lineEmpty = !0;
                    break
                } while (p === " " || p === "\t");
            var u = A.substring(q, R).split(SL5);
            for (var o = 0; o < u.length; ++o) u[o] = u[o].replace(Q ? jL5 : PL5, "").trim();
            y.text = u.join(`
`).trim(), Y[Z] = y, I = Z
        }

        function D(q) {
            var R = H(q),
                P = A.substring(q, R),
                y = /^\s*\/\//.test(P);
            return y
        }

        function H(q) {
            var R = q;
            while (R < G && V(R) !== `
`) R++;
            return R
        }

        function C() {
            if (J.length > 0) return J.shift();
            if (W) return F();
            var q, R, P, y, v, x = B === 0;
            do {
                if (B === G) return null;
                q = !1;
                while (_L5.test(P = V(B))) {
                    if (P === `
`) x = !0, ++Z;
                    if (++B === G) return null
                }
                if (V(B) === "/") {
                    if (++B === G) throw X("comment");
                    if (V(B) === "/")
                        if (!Q) {
                            v = V(y = B + 1) === "/";
                            while (V(++B) !== `
`)
                                if (B === G) return null;
                            if (++B, v) K(y, B - 1, x), x = !0;
                            ++Z, q = !0
                        } else {
                            if (y = B, v = !1, D(B - 1)) {
                                v = !0;
                                do {
                                    if (B = H(B), B === G) break;
                                    if (B++, !x) break
                                } while (D(B))
                            } else B = Math.min(G, H(B) + 1);
                            if (v) K(y, B, x), x = !0;
                            Z++, q = !0
                        }
                    else if ((P = V(B)) === "*") {
                        y = B + 1, v = Q || V(y) === "*";
                        do {
                            if (P === `
`) ++Z;
                            if (++B === G) throw X("comment");
                            R = P, P = V(B)
                        } while (R !== "*" || P !== "/");
                        if (++B, v) K(y, B - 2, x), x = !0;
                        q = !0
                    } else return "/"
                }
            } while (q);
            var p = B;
            $20.lastIndex = 0;
            var u = $20.test(V(p++));
            if (!u)
                while (p < G && !$20.test(V(p))) ++p;
            var o = A.substring(B, B = p);
            if (o === '"' || o === "'") W = o;
            return o
        }

        function E(q) {
            J.push(q)
        }

        function z() {
            if (!J.length) {
                var q = C();
                if (q === null) return null;
                E(q)
            }
            return J[0]
        }

        function w(q, R) {
            var P = z(),
                y = P === q;
            if (y) return C(), !0;
            if (!R) throw X("token '" + P + "', '" + q + "' expected");
            return !1
        }

        function N(q) {
            var R = null,
                P;
            if (q === void 0) {
                if (P = Y[Z - 1], delete Y[Z - 1], P && (Q || P.type === "*" || P.lineEmpty)) R = P.leading ? P.text : null
            } else {
                if (I < q) z();
                if (P = Y[q], delete Y[q], P && !P.lineEmpty && (Q || P.type === "/")) R = P.leading ? null : P.text
            }
            return R
        }
        return Object.defineProperty({
            next: C,
            peek: z,
            push: E,
            skip: w,
            cmnt: N
        }, "line", {
            get: function() {
                return Z
            }
        })
    }
});
var eC2 = U((fuG, tC2) => {
    tC2.exports = Oh;
    Oh.filename = null;
    Oh.defaults = {
        keepCase: !1
    };
    var xL5 = w20(),
        aC2 = N41(),
        sC2 = U41(),
        rC2 = bi(),
        vL5 = K41(),
        oC2 = c1A(),
        bL5 = FP(),
        fL5 = H41(),
        hL5 = D41(),
        gL5 = fi(),
        uL5 = p1A(),
        q20 = GK(),
        mL5 = /^[1-9][0-9]*$/,
        dL5 = /^-?[1-9][0-9]*$/,
        cL5 = /^0[x][0-9a-fA-F]+$/,
        pL5 = /^-?0[x][0-9a-fA-F]+$/,
        lL5 = /^0[0-7]+$/,
        iL5 = /^-?0[0-7]+$/,
        nL5 = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
        ak = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
        sk = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;

    function Oh(A, Q, B) {
        if (!(Q instanceof aC2)) B = Q, Q = new aC2;
        if (!B) B = Oh.defaults;
        var G = B.preferTrailingComment || !1,
            Z = xL5(A, B.alternateCommentMode || !1),
            I = Z.next,
            Y = Z.push,
            J = Z.peek,
            W = Z.skip,
            X = Z.cmnt,
            F = !0,
            V, K, D, H = "proto2",
            C = Q,
            E = [],
            z = {},
            w = B.keepCase ? function($A) {
                return $A
            } : q20.camelCase;

        function N() {
            E.forEach(($A) => {
                $A._edition = H, Object.keys(z).forEach((LA) => {
                    if ($A.getOption(LA) !== void 0) return;
                    $A.setOption(LA, z[LA], !0)
                })
            })
        }

        function q($A, LA, TA) {
            var eA = Oh.filename;
            if (!TA) Oh.filename = null;
            return Error("illegal " + (LA || "token") + " '" + $A + "' (" + (eA ? eA + ", " : "") + "line " + Z.line + ")")
        }

        function R() {
            var $A = [],
                LA;
            do {
                if ((LA = I()) !== '"' && LA !== "'") throw q(LA);
                $A.push(I()), W(LA), LA = J()
            } while (LA === '"' || LA === "'");
            return $A.join("")
        }

        function P($A) {
            var LA = I();
            switch (LA) {
                case "'":
                case '"':
                    return Y(LA), R();
                case "true":
                case "TRUE":
                    return !0;
                case "false":
                case "FALSE":
                    return !1
            }
            try {
                return v(LA, !0)
            } catch (TA) {
                if ($A && sk.test(LA)) return LA;
                throw q(LA, "value")
            }
        }

        function y($A, LA) {
            var TA, eA;
            do
                if (LA && ((TA = J()) === '"' || TA === "'")) {
                    var aA = R();
                    if ($A.push(aA), H >= 2023) throw q(aA, "id")
                } else try {
                    $A.push([eA = x(I()), W("to", !0) ? x(I()) : eA])
                } catch (w1) {
                    if (LA && sk.test(TA) && H >= 2023) $A.push(TA);
                    else throw w1
                }
            while (W(",", !0));
            var I1 = {
                options: void 0
            };
            I1.setOption = function(w1, PA) {
                if (this.options === void 0) this.options = {};
                this.options[w1] = PA
            }, d(I1, function(PA) {
                if (PA === "option") NA(I1, PA), W(";");
                else throw q(PA)
            }, function() {
                rA(I1)
            })
        }

        function v($A, LA) {
            var TA = 1;
            if ($A.charAt(0) === "-") TA = -1, $A = $A.substring(1);
            switch ($A) {
                case "inf":
                case "INF":
                case "Inf":
                    return TA * (1 / 0);
                case "nan":
                case "NAN":
                case "Nan":
                case "NaN":
                    return NaN;
                case "0":
                    return 0
            }
            if (mL5.test($A)) return TA * parseInt($A, 10);
            if (cL5.test($A)) return TA * parseInt($A, 16);
            if (lL5.test($A)) return TA * parseInt($A, 8);
            if (nL5.test($A)) return TA * parseFloat($A);
            throw q($A, "number", LA)
        }

        function x($A, LA) {
            switch ($A) {
                case "max":
                case "MAX":
                case "Max":
                    return 536870911;
                case "0":
                    return 0
            }
            if (!LA && $A.charAt(0) === "-") throw q($A, "id");
            if (dL5.test($A)) return parseInt($A, 10);
            if (pL5.test($A)) return parseInt($A, 16);
            if (iL5.test($A)) return parseInt($A, 8);
            throw q($A, "id")
        }

        function p() {
            if (V !== void 0) throw q("package");
            if (V = I(), !sk.test(V)) throw q(V, "name");
            C = C.define(V), W(";")
        }

        function u() {
            var $A = J(),
                LA;
            switch ($A) {
                case "weak":
                    LA = D || (D = []), I();
                    break;
                case "public":
                    I();
                default:
                    LA = K || (K = []);
                    break
            }
            $A = R(), W(";"), LA.push($A)
        }

        function o() {
            if (W("="), H = R(), H < 2023) throw q(H, "syntax");
            W(";")
        }

        function l() {
            if (W("="), H = R(), !["2023"].includes(H)) throw q(H, "edition");
            W(";")
        }

        function k($A, LA) {
            switch (LA) {
                case "option":
                    return NA($A, LA), W(";"), !0;
                case "message":
                    return QA($A, LA), !0;
                case "enum":
                    return SA($A, LA), !0;
                case "service":
                    return K1($A, LA), !0;
                case "extend":
                    return XA($A, LA), !0
            }
            return !1
        }

        function d($A, LA, TA) {
            var eA = Z.line;
            if ($A) {
                if (typeof $A.comment !== "string") $A.comment = X();
                $A.filename = Oh.filename
            }
            if (W("{", !0)) {
                var aA;
                while ((aA = I()) !== "}") LA(aA);
                W(";", !0)
            } else {
                if (TA) TA();
                if (W(";"), $A && (typeof $A.comment !== "string" || G)) $A.comment = X(eA) || $A.comment
            }
        }

        function QA($A, LA) {
            if (!ak.test(LA = I())) throw q(LA, "type name");
            var TA = new sC2(LA);
            if (d(TA, function(aA) {
                    if (k(TA, aA)) return;
                    switch (aA) {
                        case "map":
                            wA(TA, aA);
                            break;
                        case "required":
                            if (H !== "proto2") throw q(aA);
                        case "repeated":
                            IA(TA, aA);
                            break;
                        case "optional":
                            if (H === "proto3") IA(TA, "proto3_optional");
                            else if (H !== "proto2") throw q(aA);
                            else IA(TA, "optional");
                            break;
                        case "oneof":
                            KA(TA, aA);
                            break;
                        case "extensions":
                            y(TA.extensions || (TA.extensions = []));
                            break;
                        case "reserved":
                            y(TA.reserved || (TA.reserved = []), !0);
                            break;
                        default:
                            if (H === "proto2" || !sk.test(aA)) throw q(aA);
                            Y(aA), IA(TA, "optional");
                            break
                    }
                }), $A.add(TA), $A === C) E.push(TA)
        }

        function IA($A, LA, TA) {
            var eA = I();
            if (eA === "group") {
                HA($A, LA);
                return
            }
            while (eA.endsWith(".") || J().startsWith(".")) eA += I();
            if (!sk.test(eA)) throw q(eA, "type");
            var aA = I();
            if (!ak.test(aA)) throw q(aA, "name");
            aA = w(aA), W("=");
            var I1 = new rC2(aA, x(I()), eA, LA, TA);
            if (d(I1, function(B1) {
                    if (B1 === "option") NA(I1, B1), W(";");
                    else throw q(B1)
                }, function() {
                    rA(I1)
                }), LA === "proto3_optional") {
                var w1 = new oC2("_" + aA);
                I1.setOption("proto3_optional", !0), w1.add(I1), $A.add(w1)
            } else $A.add(I1);
            if ($A === C) E.push(I1)
        }

        function HA($A, LA) {
            if (H >= 2023) throw q("group");
            var TA = I();
            if (!ak.test(TA)) throw q(TA, "name");
            var eA = q20.lcFirst(TA);
            if (TA === eA) TA = q20.ucFirst(TA);
            W("=");
            var aA = x(I()),
                I1 = new sC2(TA);
            I1.group = !0;
            var w1 = new rC2(eA, aA, TA, LA);
            w1.filename = Oh.filename, d(I1, function(B1) {
                switch (B1) {
                    case "option":
                        NA(I1, B1), W(";");
                        break;
                    case "required":
                    case "repeated":
                        IA(I1, B1);
                        break;
                    case "optional":
                        if (H === "proto3") IA(I1, "proto3_optional");
                        else IA(I1, "optional");
                        break;
                    case "message":
                        QA(I1, B1);
                        break;
                    case "enum":
                        SA(I1, B1);
                        break;
                    case "reserved":
                        y(I1.reserved || (I1.reserved = []), !0);
                        break;
                    default:
                        throw q(B1)
                }
            }), $A.add(I1).add(w1)
        }

        function wA($A) {
            W("<");
            var LA = I();
            if (uL5.mapKey[LA] === void 0) throw q(LA, "type");
            W(",");
            var TA = I();
            if (!sk.test(TA)) throw q(TA, "type");
            W(">");
            var eA = I();
            if (!ak.test(eA)) throw q(eA, "name");
            W("=");
            var aA = new vL5(w(eA), x(I()), LA, TA);
            d(aA, function(w1) {
                if (w1 === "option") NA(aA, w1), W(";");
                else throw q(w1)
            }, function() {
                rA(aA)
            }), $A.add(aA)
        }

        function KA($A, LA) {
            if (!ak.test(LA = I())) throw q(LA, "name");
            var TA = new oC2(w(LA));
            d(TA, function(aA) {
                if (aA === "option") NA(TA, aA), W(";");
                else Y(aA), IA(TA, "optional")
            }), $A.add(TA)
        }

        function SA($A, LA) {
            if (!ak.test(LA = I())) throw q(LA, "name");
            var TA = new bL5(LA);
            if (d(TA, function(aA) {
                    switch (aA) {
                        case "option":
                            NA(TA, aA), W(";");
                            break;
                        case "reserved":
                            if (y(TA.reserved || (TA.reserved = []), !0), TA.reserved === void 0) TA.reserved = [];
                            break;
                        default:
                            sA(TA, aA)
                    }
                }), $A.add(TA), $A === C) E.push(TA)
        }

        function sA($A, LA) {
            if (!ak.test(LA)) throw q(LA, "name");
            W("=");
            var TA = x(I(), !0),
                eA = {
                    options: void 0
                };
            eA.getOption = function(aA) {
                return this.options[aA]
            }, eA.setOption = function(aA, I1) {
                gL5.prototype.setOption.call(eA, aA, I1)
            }, eA.setParsedOption = function() {
                return
            }, d(eA, function(I1) {
                if (I1 === "option") NA(eA, I1), W(";");
                else throw q(I1)
            }, function() {
                rA(eA)
            }), $A.add(LA, TA, eA.comment, eA.parsedOptions || eA.options)
        }

        function NA($A, LA) {
            var TA, eA, aA = !0;
            if (LA === "option") LA = I();
            while (LA !== "=") {
                if (LA === "(") {
                    var I1 = I();
                    W(")"), LA = "(" + I1 + ")"
                }
                if (aA) {
                    if (aA = !1, LA.includes(".") && !LA.includes("(")) {
                        var w1 = LA.split(".");
                        TA = w1[0] + ".", LA = w1[1];
                        continue
                    }
                    TA = LA
                } else eA = eA ? eA += LA : LA;
                LA = I()
            }
            var PA = eA ? TA.concat(eA) : TA,
                B1 = qA($A, PA);
            eA = eA && eA[0] === "." ? eA.slice(1) : eA, TA = TA && TA[TA.length - 1] === "." ? TA.slice(0, -1) : TA, yA($A, TA, B1, eA)
        }

        function qA($A, LA) {
            if (W("{", !0)) {
                var TA = {};
                while (!W("}", !0)) {
                    if (!ak.test(zA = I())) throw q(zA, "name");
                    if (zA === null) throw q(zA, "end of input");
                    var eA, aA = zA;
                    if (W(":", !0), J() === "{") eA = qA($A, LA + "." + zA);
                    else if (J() === "[") {
                        eA = [];
                        var I1;
                        if (W("[", !0)) {
                            do I1 = P(!0), eA.push(I1); while (W(",", !0));
                            if (W("]"), typeof I1 < "u") DA($A, LA + "." + zA, I1)
                        }
                    } else eA = P(!0), DA($A, LA + "." + zA, eA);
                    var w1 = TA[aA];
                    if (w1) eA = [].concat(w1).concat(eA);
                    TA[aA] = eA, W(",", !0), W(";", !0)
                }
                return TA
            }
            var PA = P(!0);
            return DA($A, LA, PA), PA
        }

        function DA($A, LA, TA) {
            if (C === $A && /^features\./.test(LA)) {
                z[LA] = TA;
                return
            }
            if ($A.setOption) $A.setOption(LA, TA)
        }

        function yA($A, LA, TA, eA) {
            if ($A.setParsedOption) $A.setParsedOption(LA, TA, eA)
        }

        function rA($A) {
            if (W("[", !0)) {
                do NA($A, "option"); while (W(",", !0));
                W("]")
            }
            return $A
        }

        function K1($A, LA) {
            if (!ak.test(LA = I())) throw q(LA, "service name");
            var TA = new fL5(LA);
            if (d(TA, function(aA) {
                    if (k(TA, aA)) return;
                    if (aA === "rpc") WA(TA, aA);
                    else throw q(aA)
                }), $A.add(TA), $A === C) E.push(TA)
        }

        function WA($A, LA) {
            var TA = X(),
                eA = LA;
            if (!ak.test(LA = I())) throw q(LA, "name");
            var aA = LA,
                I1, w1, PA, B1;
            if (W("("), W("stream", !0)) w1 = !0;
            if (!sk.test(LA = I())) throw q(LA);
            if (I1 = LA, W(")"), W("returns"), W("("), W("stream", !0)) B1 = !0;
            if (!sk.test(LA = I())) throw q(LA);
            PA = LA, W(")");
            var Q0 = new hL5(aA, eA, I1, PA, w1, B1);
            Q0.comment = TA, d(Q0, function(Y0) {
                if (Y0 === "option") NA(Q0, Y0), W(";");
                else throw q(Y0)
            }), $A.add(Q0)
        }

        function XA($A, LA) {
            if (!sk.test(LA = I())) throw q(LA, "reference");
            var TA = LA;
            d(null, function(aA) {
                switch (aA) {
                    case "required":
                    case "repeated":
                        IA($A, aA, TA);
                        break;
                    case "optional":
                        if (H === "proto3") IA($A, "proto3_optional", TA);
                        else IA($A, "optional", TA);
                        break;
                    default:
                        if (H === "proto2" || !sk.test(aA)) throw q(aA);
                        Y(aA), IA($A, "optional", TA);
                        break
                }
            })
        }
        var zA;
        while ((zA = I()) !== null) switch (zA) {
            case "package":
                if (!F) throw q(zA);
                p();
                break;
            case "import":
                if (!F) throw q(zA);
                u();
                break;
            case "syntax":
                if (!F) throw q(zA);
                o();
                break;
            case "edition":
                if (!F) throw q(zA);
                l();
                break;
            case "option":
                NA(C, zA), W(";", !0);
                break;
            default:
                if (k(C, zA)) {
                    F = !1;
                    continue
                }
                throw q(zA)
        }
        return N(), Oh.filename = null, {
            package: V,
            imports: K,
            weakImports: D,
            root: Q
        }
    }
});
var BE2 = U((huG, QE2) => {
    QE2.exports = KP;
    var aL5 = /\/|\./;

    function KP(A, Q) {
        if (!aL5.test(A)) A = "google/protobuf/" + A + ".proto", Q = {
            nested: {
                google: {
                    nested: {
                        protobuf: {
                            nested: Q
                        }
                    }
                }
            }
        };
        KP[A] = Q
    }
    KP("any", {
        Any: {
            fields: {
                type_url: {
                    type: "string",
                    id: 1
                },
                value: {
                    type: "bytes",
                    id: 2
                }
            }
        }
    });
    var AE2;
    KP("duration", {
        Duration: AE2 = {
            fields: {
                seconds: {
                    type: "int64",
                    id: 1
                },
                nanos: {
                    type: "int32",
                    id: 2
                }
            }
        }
    });
    KP("timestamp", {
        Timestamp: AE2
    });
    KP("empty", {
        Empty: {
            fields: {}
        }
    });
    KP("struct", {
        Struct: {
            fields: {
                fields: {
                    keyType: "string",
                    type: "Value",
                    id: 1
                }
            }
        },
        Value: {
            oneofs: {
                kind: {
                    oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
                }
            },
            fields: {
                nullValue: {
                    type: "NullValue",
                    id: 1
                },
                numberValue: {
                    type: "double",
                    id: 2
                },
                stringValue: {
                    type: "string",
                    id: 3
                },
                boolValue: {
                    type: "bool",
                    id: 4
                },
                structValue: {
                    type: "Struct",
                    id: 5
                },
                listValue: {
                    type: "ListValue",
                    id: 6
                }
            }
        },
        NullValue: {
            values: {
                NULL_VALUE: 0
            }
        },
        ListValue: {
            fields: {
                values: {
                    rule: "repeated",
                    type: "Value",
                    id: 1
                }
            }
        }
    });
    KP("wrappers", {
        DoubleValue: {
            fields: {
                value: {
                    type: "double",
                    id: 1
                }
            }
        },
        FloatValue: {
            fields: {
                value: {
                    type: "float",
                    id: 1
                }
            }
        },
        Int64Value: {
            fields: {
                value: {
                    type: "int64",
                    id: 1
                }
            }
        },
        UInt64Value: {
            fields: {
                value: {
                    type: "uint64",
                    id: 1
                }
            }
        },
        Int32Value: {
            fields: {
                value: {
                    type: "int32",
                    id: 1
                }
            }
        },
        UInt32Value: {
            fields: {
                value: {
                    type: "uint32",
                    id: 1
                }
            }
        },
        BoolValue: {
            fields: {
                value: {
                    type: "bool",
                    id: 1
                }
            }
        },
        StringValue: {
            fields: {
                value: {
                    type: "string",
                    id: 1
                }
            }
        },
        BytesValue: {
            fields: {
                value: {
                    type: "bytes",
                    id: 1
                }
            }
        }
    });
    KP("field_mask", {
        FieldMask: {
            fields: {
                paths: {
                    rule: "repeated",
                    type: "string",
                    id: 1
                }
            }
        }
    });
    KP.get = function(Q) {
        return KP[Q] || null
    }
});
var T41 = U((guG, GE2) => {
    var gi = GE2.exports = pC2();
    gi.build = "full";
    gi.tokenize = w20();
    gi.parse = eC2();
    gi.common = BE2();
    gi.Root._configure(gi.Type, gi.parse, gi.common)
});
var N20 = U((uuG, sL5) => {
    sL5.exports = {
        nested: {
            google: {
                nested: {
                    protobuf: {
                        options: {
                            go_package: "google.golang.org/protobuf/types/descriptorpb",
                            java_package: "com.google.protobuf",
                            java_outer_classname: "DescriptorProtos",
                            csharp_namespace: "Google.Protobuf.Reflection",
                            objc_class_prefix: "GPB",
                            cc_enable_arenas: !0,
                            optimize_for: "SPEED"
                        },
                        nested: {
                            FileDescriptorSet: {
                                edition: "proto2",
                                fields: {
                                    file: {
                                        rule: "repeated",
                                        type: "FileDescriptorProto",
                                        id: 1
                                    }
                                },
                                extensions: [
                                    [536000000, 536000000]
                                ]
                            },
                            Edition: {
                                edition: "proto2",
                                values: {
                                    EDITION_UNKNOWN: 0,
                                    EDITION_LEGACY: 900,
                                    EDITION_PROTO2: 998,
                                    EDITION_PROTO3: 999,
                                    EDITION_2023: 1000,
                                    EDITION_2024: 1001,
                                    EDITION_1_TEST_ONLY: 1,
                                    EDITION_2_TEST_ONLY: 2,
                                    EDITION_99997_TEST_ONLY: 99997,
                                    EDITION_99998_TEST_ONLY: 99998,
                                    EDITION_99999_TEST_ONLY: 99999,
                                    EDITION_MAX: 2147483647
                                }
                            },
                            FileDescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    package: {
                                        type: "string",
                                        id: 2
                                    },
                                    dependency: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 3
                                    },
                                    publicDependency: {
                                        rule: "repeated",
                                        type: "int32",
                                        id: 10
                                    },
                                    weakDependency: {
                                        rule: "repeated",
                                        type: "int32",
                                        id: 11
                                    },
                                    optionDependency: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 15
                                    },
                                    messageType: {
                                        rule: "repeated",
                                        type: "DescriptorProto",
                                        id: 4
                                    },
                                    enumType: {
                                        rule: "repeated",
                                        type: "EnumDescriptorProto",
                                        id: 5
                                    },
                                    service: {
                                        rule: "repeated",
                                        type: "ServiceDescriptorProto",
                                        id: 6
                                    },
                                    extension: {
                                        rule: "repeated",
                                        type: "FieldDescriptorProto",
                                        id: 7
                                    },
                                    options: {
                                        type: "FileOptions",
                                        id: 8
                                    },
                                    sourceCodeInfo: {
                                        type: "SourceCodeInfo",
                                        id: 9
                                    },
                                    syntax: {
                                        type: "string",
                                        id: 12
                                    },
                                    edition: {
                                        type: "Edition",
                                        id: 14
                                    }
                                }
                            },
                            DescriptorProto: {
                                edition: "proto2",
                                fields: {
                                    name: {
                                        type: "string",
                                        id: 1
                                    },
                                    field: {
                                        rule: "repeated",
                                        type: "FieldDescriptorProto",
                                        id: 2
                                    },
                                    extension: {
                                        rule: "repeated",
                                        type: "FieldDescriptorProto",
                                        id: 6
                                    },
                                    nestedType: {
                                        rule: "repeated",
                                        type: "DescriptorProto",
                                        id: 3
                                    },
                                    enumType: {
                                        rule: "repeated",
                                        type: "EnumDescriptorProto",
                                        id: 4
                                    },
                                    extensionRange: {
                                        rule: "repeated",
                                        type: "ExtensionRange",
                                        id: 5
                                    },
                                    oneofDecl: {
                                        rule: "repeated",
                                        type: "OneofDescriptorProto",
                                        id: 8
                                    },
                                    options: {
                                        type: "MessageOptions",
                                        id: 7
                                    },
                                    reservedRange: {
                                        rule: "repeated",
                                        type: "ReservedRange",
                                        id: 9
                                    },
                                    reservedName: {
                                        rule: "repeated",
                                        type: "string",
                                        id: 10
                                    },
                                    visibility: {
                                        type: "SymbolVisibility",
                                        id: 11
                                    }
                                },
                                nested: {
                                    ExtensionRange: {
                                        fields: {
                                            start: {
                                                type: "int32",
                                                id: 1
                                            },
                                            end: {
                                                type: "int32",
                                                id: 2
                                            },
                                            options: {
                                                type: "ExtensionRangeOptions",
                                                id: 3
                                            }
                                        }
                                    },
                                    ReservedRange: {
                                        fields: {
                                            start: {
                                                type: "int32",
                                                id: 1
                                            },
                                            end: {
                                                type: "int32",
                                                id: 2
                                            }
                                        }
                                    }
                                }
                            },
                            ExtensionRangeOptions: {
                                edition: "proto2",
                                fields: {
                                    uninterpretedOption: {
                                        rule: "repeated",
                                        type: "UninterpretedOption",
                                        id: 999
                                    },
                                    declaration: {
                                        rule: "repeated",
                                        type: "Declaration",
                                        id: 2,
                                        options: {
                                            retention: "RETENTION_SOURCE"
                                        }
                                    },
                                    features: {
                                        type: "FeatureSet",
                                        id: 50
                                    },
                                    verification: {
                                        type: "VerificationState",
                                        id: 3,
                                        options: {
                                            default: "UNVERIFIED",
                                            retention: "RETENTION_SOURCE"
                                        }
                                    }
                                },