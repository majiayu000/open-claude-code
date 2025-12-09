/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: config_004.js
 * 处理时间: 2025-12-09T03:41:37.193Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: config
 * File: 4/9
 * Lines: 309461 - 310960 (1500 lines)
 * Original file: cli.js
 */

    function SN5(A, Q, B) {
        var G = -1,
            Z = A.length;
        if (Q < 0) Q = -Q > Z ? 0 : Z + Q;
        if (B = B > Z ? Z : B, B < 0) B += Z;
        Z = Q > B ? 0 : B - Q >>> 0, Q >>>= 0;
        var I = Array(Z);
        while (++G < Z) I[G] = A[G + Q];
        return I
    }

    function _N5(A) {
        if (typeof A == "string") return A;
        if (bN5(A)) return gH2 ? gH2.call(A) : "";
        var Q = A + "";
        return Q == "0" && 1 / A == -aq5 ? "-0" : Q
    }

    function kN5(A, Q, B) {
        var G = A.length;
        return B = B === void 0 ? G : B, !Q && B >= G ? A : SN5(A, Q, B)
    }

    function yN5(A) {
        return function(Q) {
            Q = X41(Q);
            var B = QC2(Q) ? ON5(Q) : void 0,
                G = B ? B[0] : Q.charAt(0),
                Z = B ? kN5(B, 1).join("") : Q.slice(1);
            return G[A]() + Z
        }
    }

    function xN5(A) {
        return function(Q) {
            return $N5(mN5(gN5(Q).replace(XN5, "")), A, "")
        }
    }

    function vN5(A) {
        return !!A && typeof A == "object"
    }

    function bN5(A) {
        return typeof A == "symbol" || vN5(A) && jN5.call(A) == sq5
    }

    function X41(A) {
        return A == null ? "" : _N5(A)
    }
    var fN5 = xN5(function(A, Q, B) {
        return Q = Q.toLowerCase(), A + (B ? hN5(Q) : Q)
    });

    function hN5(A) {
        return uN5(X41(A).toLowerCase())
    }

    function gN5(A) {
        return A = X41(A), A && A.replace(oq5, LN5).replace(FN5, "")
    }
    var uN5 = yN5("toUpperCase");

    function mN5(A, Q, B) {
        if (A = X41(A), Q = B ? void 0 : Q, Q === void 0) return MN5(A) ? TN5(A) : qN5(A);
        return A.match(Q) || []
    }
    BC2.exports = fN5
});
var IC2 = U((HuG, ZC2) => {
    ZC2.exports = pB0;

    function pB0(A, Q) {
        if (typeof A === "string") Q = A, A = void 0;
        var B = [];

        function G(I) {
            if (typeof I !== "string") {
                var Y = Z();
                if (pB0.verbose) console.log("codegen: " + Y);
                if (Y = "return " + Y, I) {
                    var J = Object.keys(I),
                        W = Array(J.length + 1),
                        X = Array(J.length),
                        F = 0;
                    while (F < J.length) W[F] = J[F], X[F] = I[J[F++]];
                    return W[F] = Y, Function.apply(null, W).apply(null, X)
                }
                return Function(Y)()
            }
            var V = Array(arguments.length - 1),
                K = 0;
            while (K < V.length) V[K] = arguments[++K];
            if (K = 0, I = I.replace(/%([%dfijs])/g, function(H, C) {
                    var E = V[K++];
                    switch (C) {
                        case "d":
                        case "f":
                            return String(Number(E));
                        case "i":
                            return String(Math.floor(E));
                        case "j":
                            return JSON.stringify(E);
                        case "s":
                            return String(E)
                    }
                    return "%"
                }), K !== V.length) throw Error("parameter count mismatch");
            return B.push(I), G
        }

        function Z(I) {
            return "function " + (I || Q || "") + "(" + (A && A.join(",") || "") + `){
  ` + B.join(`
  `) + `
}`
        }
        return G.toString = Z, G
    }
    pB0.verbose = !1
});
var JC2 = U((CuG, YC2) => {
    YC2.exports = IOA;
    var dN5 = OQ0(),
        cN5 = TQ0(),
        lB0 = cN5("fs");

    function IOA(A, Q, B) {
        if (typeof Q === "function") B = Q, Q = {};
        else if (!Q) Q = {};
        if (!B) return dN5(IOA, this, A, Q);
        if (!Q.xhr && lB0 && lB0.readFile) return lB0.readFile(A, function(Z, I) {
            return Z && typeof XMLHttpRequest < "u" ? IOA.xhr(A, Q, B) : Z ? B(Z) : B(null, Q.binary ? I : I.toString("utf8"))
        });
        return IOA.xhr(A, Q, B)
    }
    IOA.xhr = function(Q, B, G) {
        var Z = new XMLHttpRequest;
        if (Z.onreadystatechange = function() {
                if (Z.readyState !== 4) return;
                if (Z.status !== 0 && Z.status !== 200) return G(Error("status " + Z.status));
                if (B.binary) {
                    var Y = Z.response;
                    if (!Y) {
                        Y = [];
                        for (var J = 0; J < Z.responseText.length; ++J) Y.push(Z.responseText.charCodeAt(J) & 255)
                    }
                    return G(null, typeof Uint8Array < "u" ? new Uint8Array(Y) : Y)
                }
                return G(null, Z.responseText)
            }, B.binary) {
            if ("overrideMimeType" in Z) Z.overrideMimeType("text/plain; charset=x-user-defined");
            Z.responseType = "arraybuffer"
        }
        Z.open("GET", Q), Z.send()
    }
});
var FC2 = U((XC2) => {
    var nB0 = XC2,
        WC2 = nB0.isAbsolute = function(Q) {
            return /^(?:\/|\w+:)/.test(Q)
        },
        iB0 = nB0.normalize = function(Q) {
            Q = Q.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
            var B = Q.split("/"),
                G = WC2(Q),
                Z = "";
            if (G) Z = B.shift() + "/";
            for (var I = 0; I < B.length;)
                if (B[I] === "..")
                    if (I > 0 && B[I - 1] !== "..") B.splice(--I, 2);
                    else if (G) B.splice(I, 1);
            else ++I;
            else if (B[I] === ".") B.splice(I, 1);
            else ++I;
            return Z + B.join("/")
        };
    nB0.resolve = function(Q, B, G) {
        if (!G) B = iB0(B);
        if (WC2(B)) return B;
        if (!G) Q = iB0(Q);
        return (Q = Q.replace(/(?:\/|^)[^/]+$/, "")).length ? iB0(Q + "/" + B) : B
    }
});
var nYA = U((zuG, DC2) => {
    DC2.exports = W3;
    var F41 = fi();
    ((W3.prototype = Object.create(F41.prototype)).constructor = W3).className = "Namespace";
    var aB0 = bi(),
        V41 = GK(),
        pN5 = c1A(),
        m1A, iYA, d1A;
    W3.fromJSON = function(Q, B) {
        return new W3(Q, B.options).addJSON(B.nested)
    };

    function VC2(A, Q) {
        if (!(A && A.length)) return;
        var B = {};
        for (var G = 0; G < A.length; ++G) B[A[G].name] = A[G].toJSON(Q);
        return B
    }
    W3.arrayToJSON = VC2;
    W3.isReservedId = function(Q, B) {
        if (Q) {
            for (var G = 0; G < Q.length; ++G)
                if (typeof Q[G] !== "string" && Q[G][0] <= B && Q[G][1] > B) return !0
        }
        return !1
    };
    W3.isReservedName = function(Q, B) {
        if (Q) {
            for (var G = 0; G < Q.length; ++G)
                if (Q[G] === B) return !0
        }
        return !1
    };

    function W3(A, Q) {
        F41.call(this, A, Q), this.nested = void 0, this._nestedArray = null, this._lookupCache = {}, this._needsRecursiveFeatureResolution = !0, this._needsRecursiveResolve = !0
    }

    function KC2(A) {
        A._nestedArray = null, A._lookupCache = {};
        var Q = A;
        while (Q = Q.parent) Q._lookupCache = {};
        return A
    }
    Object.defineProperty(W3.prototype, "nestedArray", {
        get: function() {
            return this._nestedArray || (this._nestedArray = V41.toArray(this.nested))
        }
    });
    W3.prototype.toJSON = function(Q) {
        return V41.toObject(["options", this.options, "nested", VC2(this.nestedArray, Q)])
    };
    W3.prototype.addJSON = function(Q) {
        var B = this;
        if (Q)
            for (var G = Object.keys(Q), Z = 0, I; Z < G.length; ++Z) I = Q[G[Z]], B.add((I.fields !== void 0 ? m1A.fromJSON : I.values !== void 0 ? d1A.fromJSON : I.methods !== void 0 ? iYA.fromJSON : I.id !== void 0 ? aB0.fromJSON : W3.fromJSON)(G[Z], I));
        return this
    };
    W3.prototype.get = function(Q) {
        return this.nested && this.nested[Q] || null
    };
    W3.prototype.getEnum = function(Q) {
        if (this.nested && this.nested[Q] instanceof d1A) return this.nested[Q].values;
        throw Error("no such enum: " + Q)
    };
    W3.prototype.add = function(Q) {
        if (!(Q instanceof aB0 && Q.extend !== void 0 || Q instanceof m1A || Q instanceof pN5 || Q instanceof d1A || Q instanceof iYA || Q instanceof W3)) throw TypeError("object must be a valid nested object");
        if (!this.nested) this.nested = {};
        else {
            var B = this.get(Q.name);
            if (B)
                if (B instanceof W3 && Q instanceof W3 && !(B instanceof m1A || B instanceof iYA)) {
                    var G = B.nestedArray;
                    for (var Z = 0; Z < G.length; ++Z) Q.add(G[Z]);
                    if (this.remove(B), !this.nested) this.nested = {};
                    Q.setOptions(B.options, !0)
                } else throw Error("duplicate name '" + Q.name + "' in " + this)
        }
        if (this.nested[Q.name] = Q, !(this instanceof m1A || this instanceof iYA || this instanceof d1A || this instanceof aB0)) {
            if (!Q._edition) Q._edition = Q._defaultEdition
        }
        this._needsRecursiveFeatureResolution = !0, this._needsRecursiveResolve = !0;
        var I = this;
        while (I = I.parent) I._needsRecursiveFeatureResolution = !0, I._needsRecursiveResolve = !0;
        return Q.onAdd(this), KC2(this)
    };
    W3.prototype.remove = function(Q) {
        if (!(Q instanceof F41)) throw TypeError("object must be a ReflectionObject");
        if (Q.parent !== this) throw Error(Q + " is not a member of " + this);
        if (delete this.nested[Q.name], !Object.keys(this.nested).length) this.nested = void 0;
        return Q.onRemove(this), KC2(this)
    };
    W3.prototype.define = function(Q, B) {
        if (V41.isString(Q)) Q = Q.split(".");
        else if (!Array.isArray(Q)) throw TypeError("illegal path");
        if (Q && Q.length && Q[0] === "") throw Error("path must be relative");
        var G = this;
        while (Q.length > 0) {
            var Z = Q.shift();
            if (G.nested && G.nested[Z]) {
                if (G = G.nested[Z], !(G instanceof W3)) throw Error("path conflicts with non-namespace objects")
            } else G.add(G = new W3(Z))
        }
        if (B) G.addJSON(B);
        return G
    };
    W3.prototype.resolveAll = function() {
        if (!this._needsRecursiveResolve) return this;
        this._resolveFeaturesRecursive(this._edition);
        var Q = this.nestedArray,
            B = 0;
        this.resolve();
        while (B < Q.length)
            if (Q[B] instanceof W3) Q[B++].resolveAll();
            else Q[B++].resolve();
        return this._needsRecursiveResolve = !1, this
    };
    W3.prototype._resolveFeaturesRecursive = function(Q) {
        if (!this._needsRecursiveFeatureResolution) return this;
        return this._needsRecursiveFeatureResolution = !1, Q = this._edition || Q, F41.prototype._resolveFeaturesRecursive.call(this, Q), this.nestedArray.forEach((B) => {
            B._resolveFeaturesRecursive(Q)
        }), this
    };
    W3.prototype.lookup = function(Q, B, G) {
        if (typeof B === "boolean") G = B, B = void 0;
        else if (B && !Array.isArray(B)) B = [B];
        if (V41.isString(Q) && Q.length) {
            if (Q === ".") return this.root;
            Q = Q.split(".")
        } else if (!Q.length) return this;
        var Z = Q.join(".");
        if (Q[0] === "") return this.root.lookup(Q.slice(1), B);
        var I = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + Z];
        if (I && (!B || B.indexOf(I.constructor) > -1)) return I;
        if (I = this._lookupImpl(Q, Z), I && (!B || B.indexOf(I.constructor) > -1)) return I;
        if (G) return null;
        var Y = this;
        while (Y.parent) {
            if (I = Y.parent._lookupImpl(Q, Z), I && (!B || B.indexOf(I.constructor) > -1)) return I;
            Y = Y.parent
        }
        return null
    };
    W3.prototype._lookupImpl = function(Q, B) {
        if (Object.prototype.hasOwnProperty.call(this._lookupCache, B)) return this._lookupCache[B];
        var G = this.get(Q[0]),
            Z = null;
        if (G) {
            if (Q.length === 1) Z = G;
            else if (G instanceof W3) Q = Q.slice(1), Z = G._lookupImpl(Q, Q.join("."))
        } else
            for (var I = 0; I < this.nestedArray.length; ++I)
                if (this._nestedArray[I] instanceof W3 && (G = this._nestedArray[I]._lookupImpl(Q, B))) Z = G;
        return this._lookupCache[B] = Z, Z
    };
    W3.prototype.lookupType = function(Q) {
        var B = this.lookup(Q, [m1A]);
        if (!B) throw Error("no such type: " + Q);
        return B
    };
    W3.prototype.lookupEnum = function(Q) {
        var B = this.lookup(Q, [d1A]);
        if (!B) throw Error("no such Enum '" + Q + "' in " + this);
        return B
    };
    W3.prototype.lookupTypeOrEnum = function(Q) {
        var B = this.lookup(Q, [m1A, d1A]);
        if (!B) throw Error("no such Type or Enum '" + Q + "' in " + this);
        return B
    };
    W3.prototype.lookupService = function(Q) {
        var B = this.lookup(Q, [iYA]);
        if (!B) throw Error("no such Service '" + Q + "' in " + this);
        return B
    };
    W3._configure = function(A, Q, B) {
        m1A = A, iYA = Q, d1A = B
    }
});
var K41 = U((UuG, HC2) => {
    HC2.exports = Nh;
    var sB0 = bi();
    ((Nh.prototype = Object.create(sB0.prototype)).constructor = Nh).className = "MapField";
    var lN5 = p1A(),
        YOA = GK();

    function Nh(A, Q, B, G, Z, I) {
        if (sB0.call(this, A, Q, G, void 0, void 0, Z, I), !YOA.isString(B)) throw TypeError("keyType must be a string");
        this.keyType = B, this.resolvedKeyType = null, this.map = !0
    }
    Nh.fromJSON = function(Q, B) {
        return new Nh(Q, B.id, B.keyType, B.type, B.options, B.comment)
    };
    Nh.prototype.toJSON = function(Q) {
        var B = Q ? Boolean(Q.keepComments) : !1;
        return YOA.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", B ? this.comment : void 0])
    };
    Nh.prototype.resolve = function() {
        if (this.resolved) return this;
        if (lN5.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
        return sB0.prototype.resolve.call(this)
    };
    Nh.d = function(Q, B, G) {
        if (typeof G === "function") G = YOA.decorateType(G).name;
        else if (G && typeof G === "object") G = YOA.decorateEnum(G).name;
        return function(I, Y) {
            YOA.decorateType(I.constructor).add(new Nh(Y, Q, B, G))
        }
    }
});
var D41 = U(($uG, CC2) => {
    CC2.exports = l1A;
    var rB0 = fi();
    ((l1A.prototype = Object.create(rB0.prototype)).constructor = l1A).className = "Method";
    var aYA = GK();

    function l1A(A, Q, B, G, Z, I, Y, J, W) {
        if (aYA.isObject(Z)) Y = Z, Z = I = void 0;
        else if (aYA.isObject(I)) Y = I, I = void 0;
        if (!(Q === void 0 || aYA.isString(Q))) throw TypeError("type must be a string");
        if (!aYA.isString(B)) throw TypeError("requestType must be a string");
        if (!aYA.isString(G)) throw TypeError("responseType must be a string");
        rB0.call(this, A, Y), this.type = Q || "rpc", this.requestType = B, this.requestStream = Z ? !0 : void 0, this.responseType = G, this.responseStream = I ? !0 : void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = J, this.parsedOptions = W
    }
    l1A.fromJSON = function(Q, B) {
        return new l1A(Q, B.type, B.requestType, B.responseType, B.requestStream, B.responseStream, B.options, B.comment, B.parsedOptions)
    };
    l1A.prototype.toJSON = function(Q) {
        var B = Q ? Boolean(Q.keepComments) : !1;
        return aYA.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", B ? this.comment : void 0, "parsedOptions", this.parsedOptions])
    };
    l1A.prototype.resolve = function() {
        if (this.resolved) return this;
        return this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), rB0.prototype.resolve.call(this)
    }
});
var H41 = U((wuG, zC2) => {
    zC2.exports = Uq;
    var Lh = nYA();
    ((Uq.prototype = Object.create(Lh.prototype)).constructor = Uq).className = "Service";
    var oB0 = D41(),
        JOA = GK(),
        iN5 = gQ0();

    function Uq(A, Q) {
        Lh.call(this, A, Q), this.methods = {}, this._methodsArray = null
    }
    Uq.fromJSON = function(Q, B) {
        var G = new Uq(Q, B.options);
        if (B.methods)
            for (var Z = Object.keys(B.methods), I = 0; I < Z.length; ++I) G.add(oB0.fromJSON(Z[I], B.methods[Z[I]]));
        if (B.nested) G.addJSON(B.nested);
        if (B.edition) G._edition = B.edition;
        return G.comment = B.comment, G._defaultEdition = "proto3", G
    };
    Uq.prototype.toJSON = function(Q) {
        var B = Lh.prototype.toJSON.call(this, Q),
            G = Q ? Boolean(Q.keepComments) : !1;
        return JOA.toObject(["edition", this._editionToJSON(), "options", B && B.options || void 0, "methods", Lh.arrayToJSON(this.methodsArray, Q) || {}, "nested", B && B.nested || void 0, "comment", G ? this.comment : void 0])
    };
    Object.defineProperty(Uq.prototype, "methodsArray", {
        get: function() {
            return this._methodsArray || (this._methodsArray = JOA.toArray(this.methods))
        }
    });

    function EC2(A) {
        return A._methodsArray = null, A
    }
    Uq.prototype.get = function(Q) {
        return this.methods[Q] || Lh.prototype.get.call(this, Q)
    };
    Uq.prototype.resolveAll = function() {
        if (!this._needsRecursiveResolve) return this;
        Lh.prototype.resolve.call(this);
        var Q = this.methodsArray;
        for (var B = 0; B < Q.length; ++B) Q[B].resolve();
        return this
    };
    Uq.prototype._resolveFeaturesRecursive = function(Q) {
        if (!this._needsRecursiveFeatureResolution) return this;
        return Q = this._edition || Q, Lh.prototype._resolveFeaturesRecursive.call(this, Q), this.methodsArray.forEach((B) => {
            B._resolveFeaturesRecursive(Q)
        }), this
    };
    Uq.prototype.add = function(Q) {
        if (this.get(Q.name)) throw Error("duplicate name '" + Q.name + "' in " + this);
        if (Q instanceof oB0) return this.methods[Q.name] = Q, Q.parent = this, EC2(this);
        return Lh.prototype.add.call(this, Q)
    };
    Uq.prototype.remove = function(Q) {
        if (Q instanceof oB0) {
            if (this.methods[Q.name] !== Q) throw Error(Q + " is not a member of " + this);
            return delete this.methods[Q.name], Q.parent = null, EC2(this)
        }
        return Lh.prototype.remove.call(this, Q)
    };
    Uq.prototype.create = function(Q, B, G) {
        var Z = new iN5.Service(Q, B, G);
        for (var I = 0, Y; I < this.methodsArray.length; ++I) {
            var J = JOA.lcFirst((Y = this._methodsArray[I]).resolve().name).replace(/[^$\w_]/g, "");
            Z[J] = JOA.codegen(["r", "c"], JOA.isReserved(J) ? J + "_" : J)("return this.rpcCall(m,q,s,r,c)")({
                m: Y,
                q: Y.resolvedRequestType.ctor,
                s: Y.resolvedResponseType.ctor
            })
        }
        return Z
    }
});
var C41 = U((quG, UC2) => {
    UC2.exports = ik;
    var nN5 = dk();

    function ik(A) {
        if (A)
            for (var Q = Object.keys(A), B = 0; B < Q.length; ++B) this[Q[B]] = A[Q[B]]
    }
    ik.create = function(Q) {
        return this.$type.create(Q)
    };
    ik.encode = function(Q, B) {
        return this.$type.encode(Q, B)
    };
    ik.encodeDelimited = function(Q, B) {
        return this.$type.encodeDelimited(Q, B)
    };
    ik.decode = function(Q) {
        return this.$type.decode(Q)
    };
    ik.decodeDelimited = function(Q) {
        return this.$type.decodeDelimited(Q)
    };
    ik.verify = function(Q) {
        return this.$type.verify(Q)
    };
    ik.fromObject = function(Q) {
        return this.$type.fromObject(Q)
    };
    ik.toObject = function(Q, B) {
        return this.$type.toObject(Q, B)
    };
    ik.prototype.toJSON = function() {
        return this.$type.toObject(this, nN5.toJSONOptions)
    }
});
var tB0 = U((NuG, wC2) => {
    wC2.exports = rN5;
    var aN5 = FP(),
        Mh = p1A(),
        $C2 = GK();

    function sN5(A) {
        return "missing required '" + A.name + "'"
    }

    function rN5(A) {
        var Q = $C2.codegen(["r", "l", "e"], A.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (A.fieldsArray.filter(function(J) {
                return J.map
            }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){"),
            B = 0;
        for (; B < A.fieldsArray.length; ++B) {
            var G = A._fieldsArray[B].resolve(),
                Z = G.resolvedType instanceof aN5 ? "int32" : G.type,
                I = "m" + $C2.safeProp(G.name);
            if (Q("case %i: {", G.id), G.map) {
                if (Q("if(%s===util.emptyObject)", I)("%s={}", I)("var c2 = r.uint32()+r.pos"), Mh.defaults[G.keyType] !== void 0) Q("k=%j", Mh.defaults[G.keyType]);
                else Q("k=null");
                if (Mh.defaults[Z] !== void 0) Q("value=%j", Mh.defaults[Z]);
                else Q("value=null");
                if (Q("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", G.keyType)("case 2:"), Mh.basic[Z] === void 0) Q("value=types[%i].decode(r,r.uint32())", B);
                else Q("value=r.%s()", Z);
                if (Q("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), Mh.long[G.keyType] !== void 0) Q('%s[typeof k==="object"?util.longToHash(k):k]=value', I);
                else Q("%s[k]=value", I)
            } else if (G.repeated) {
                if (Q("if(!(%s&&%s.length))", I, I)("%s=[]", I), Mh.packed[Z] !== void 0) Q("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", I, Z)("}else");
                if (Mh.basic[Z] === void 0) Q(G.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4)))" : "%s.push(types[%i].decode(r,r.uint32()))", I, B);
                else Q("%s.push(r.%s())", I, Z)
            } else if (Mh.basic[Z] === void 0) Q(G.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4))" : "%s=types[%i].decode(r,r.uint32())", I, B);
            else Q("%s=r.%s()", I, Z);
            Q("break")("}")
        }
        Q("default:")("r.skipType(t&7)")("break")("}")("}");
        for (B = 0; B < A._fieldsArray.length; ++B) {
            var Y = A._fieldsArray[B];
            if (Y.required) Q("if(!m.hasOwnProperty(%j))", Y.name)("throw util.ProtocolError(%j,{instance:m})", sN5(Y))
        }
        return Q("return m")
    }
});
var Q20 = U((LuG, qC2) => {
    qC2.exports = eN5;
    var oN5 = FP(),
        eB0 = GK();

    function GO(A, Q) {
        return A.name + ": " + Q + (A.repeated && Q !== "array" ? "[]" : A.map && Q !== "object" ? "{k:" + A.keyType + "}" : "") + " expected"
    }

    function A20(A, Q, B, G) {
        if (Q.resolvedType)
            if (Q.resolvedType instanceof oN5) {
                A("switch(%s){", G)("default:")("return%j", GO(Q, "enum value"));
                for (var Z = Object.keys(Q.resolvedType.values), I = 0; I < Z.length; ++I) A("case %i:", Q.resolvedType.values[Z[I]]);
                A("break")("}")
            } else A("{")("var e=types[%i].verify(%s);", B, G)("if(e)")("return%j+e", Q.name + ".")("}");
        else switch (Q.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                A("if(!util.isInteger(%s))", G)("return%j", GO(Q, "integer"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                A("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", G, G, G, G)("return%j", GO(Q, "integer|Long"));
                break;
            case "float":
            case "double":
                A('if(typeof %s!=="number")', G)("return%j", GO(Q, "number"));
                break;
            case "bool":
                A('if(typeof %s!=="boolean")', G)("return%j", GO(Q, "boolean"));
                break;
            case "string":
                A("if(!util.isString(%s))", G)("return%j", GO(Q, "string"));
                break;
            case "bytes":
                A('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', G, G, G)("return%j", GO(Q, "buffer"));
                break
        }
        return A
    }

    function tN5(A, Q, B) {
        switch (Q.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
                A("if(!util.key32Re.test(%s))", B)("return%j", GO(Q, "integer key"));
                break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
                A("if(!util.key64Re.test(%s))", B)("return%j", GO(Q, "integer|Long key"));
                break;
            case "bool":
                A("if(!util.key2Re.test(%s))", B)("return%j", GO(Q, "boolean key"));
                break
        }
        return A
    }

    function eN5(A) {
        var Q = eB0.codegen(["m"], A.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
            B = A.oneofsArray,
            G = {};
        if (B.length) Q("var p={}");
        for (var Z = 0; Z < A.fieldsArray.length; ++Z) {
            var I = A._fieldsArray[Z].resolve(),
                Y = "m" + eB0.safeProp(I.name);
            if (I.optional) Q("if(%s!=null&&m.hasOwnProperty(%j)){", Y, I.name);
            if (I.map) Q("if(!util.isObject(%s))", Y)("return%j", GO(I, "object"))("var k=Object.keys(%s)", Y)("for(var i=0;i<k.length;++i){"), tN5(Q, I, "k[i]"), A20(Q, I, Z, Y + "[k[i]]")("}");
            else if (I.repeated) Q("if(!Array.isArray(%s))", Y)("return%j", GO(I, "array"))("for(var i=0;i<%s.length;++i){", Y), A20(Q, I, Z, Y + "[i]")("}");
            else {
                if (I.partOf) {
                    var J = eB0.safeProp(I.partOf.name);
                    if (G[I.partOf.name] === 1) Q("if(p%s===1)", J)("return%j", I.partOf.name + ": multiple values");
                    G[I.partOf.name] = 1, Q("p%s=1", J)
                }
                A20(Q, I, Z, Y)
            }
            if (I.optional) Q("}")
        }
        return Q("return null")
    }
});
var Z20 = U((LC2) => {
    var NC2 = LC2,
        WOA = FP(),
        nk = GK();

    function B20(A, Q, B, G) {
        var Z = !1;
        if (Q.resolvedType)
            if (Q.resolvedType instanceof WOA) {
                A("switch(d%s){", G);
                for (var I = Q.resolvedType.values, Y = Object.keys(I), J = 0; J < Y.length; ++J) {
                    if (I[Y[J]] === Q.typeDefault && !Z) {
                        if (A("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', G, G, G), !Q.repeated) A("break");
                        Z = !0
                    }
                    A("case%j:", Y[J])("case %i:", I[Y[J]])("m%s=%j", G, I[Y[J]])("break")
                }
                A("}")
            } else A('if(typeof d%s!=="object")', G)("throw TypeError(%j)", Q.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", G, B, G);
        else {
            var W = !1;
            switch (Q.type) {
                case "double":
                case "float":
                    A("m%s=Number(d%s)", G, G);
                    break;
                case "uint32":
                case "fixed32":
                    A("m%s=d%s>>>0", G, G);
                    break;
                case "int32":
                case "sint32":
                case "sfixed32":
                    A("m%s=d%s|0", G, G);
                    break;
                case "uint64":
                    W = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    A("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", G, G, W)('else if(typeof d%s==="string")', G)("m%s=parseInt(d%s,10)", G, G)('else if(typeof d%s==="number")', G)("m%s=d%s", G, G)('else if(typeof d%s==="object")', G)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", G, G, G, W ? "true" : "");
                    break;
                case "bytes":
                    A('if(typeof d%s==="string")', G)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", G, G, G)("else if(d%s.length >= 0)", G)("m%s=d%s", G, G);
                    break;
                case "string":
                    A("m%s=String(d%s)", G, G);
                    break;
                case "bool":
                    A("m%s=Boolean(d%s)", G, G);
                    break
            }
        }
        return A
    }
    NC2.fromObject = function(Q) {
        var B = Q.fieldsArray,
            G = nk.codegen(["d"], Q.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
        if (!B.length) return G("return new this.ctor");
        G("var m=new this.ctor");
        for (var Z = 0; Z < B.length; ++Z) {
            var I = B[Z].resolve(),
                Y = nk.safeProp(I.name);
            if (I.map) G("if(d%s){", Y)('if(typeof d%s!=="object")', Y)("throw TypeError(%j)", I.fullName + ": object expected")("m%s={}", Y)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", Y), B20(G, I, Z, Y + "[ks[i]]")("}")("}");
            else if (I.repeated) G("if(d%s){", Y)("if(!Array.isArray(d%s))", Y)("throw TypeError(%j)", I.fullName + ": array expected")("m%s=[]", Y)("for(var i=0;i<d%s.length;++i){", Y), B20(G, I, Z, Y + "[i]")("}")("}");
            else {
                if (!(I.resolvedType instanceof WOA)) G("if(d%s!=null){", Y);
                if (B20(G, I, Z, Y), !(I.resolvedType instanceof WOA)) G("}")
            }
        }
        return G("return m")
    };

    function G20(A, Q, B, G) {
        if (Q.resolvedType)
            if (Q.resolvedType instanceof WOA) A("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", G, B, G, G, B, G, G);
            else A("d%s=types[%i].toObject(m%s,o)", G, B, G);
        else {
            var Z = !1;
            switch (Q.type) {
                case "double":
                case "float":
                    A("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", G, G, G, G);
                    break;
                case "uint64":
                    Z = !0;
                case "int64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                    A('if(typeof m%s==="number")', G)("d%s=o.longs===String?String(m%s):m%s", G, G, G)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", G, G, G, G, Z ? "true" : "", G);
                    break;
                case "bytes":
                    A("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", G, G, G, G, G);
                    break;
                default:
                    A("d%s=m%s", G, G);
                    break
            }
        }
        return A
    }
    NC2.toObject = function(Q) {
        var B = Q.fieldsArray.slice().sort(nk.compareFieldsById);
        if (!B.length) return nk.codegen()("return {}");
        var G = nk.codegen(["m", "o"], Q.name + "$toObject")("if(!o)")("o={}")("var d={}"),
            Z = [],
            I = [],
            Y = [],
            J = 0;
        for (; J < B.length; ++J)
            if (!B[J].partOf)(B[J].resolve().repeated ? Z : B[J].map ? I : Y).push(B[J]);
        if (Z.length) {
            G("if(o.arrays||o.defaults){");
            for (J = 0; J < Z.length; ++J) G("d%s=[]", nk.safeProp(Z[J].name));
            G("}")
        }
        if (I.length) {
            G("if(o.objects||o.defaults){");
            for (J = 0; J < I.length; ++J) G("d%s={}", nk.safeProp(I[J].name));
            G("}")
        }
        if (Y.length) {
            G("if(o.defaults){");
            for (J = 0; J < Y.length; ++J) {
                var W = Y[J],
                    X = nk.safeProp(W.name);
                if (W.resolvedType instanceof WOA) G("d%s=o.enums===String?%j:%j", X, W.resolvedType.valuesById[W.typeDefault], W.typeDefault);
                else if (W.long) G("if(util.Long){")("var n=new util.Long(%i,%i,%j)", W.typeDefault.low, W.typeDefault.high, W.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", X)("}else")("d%s=o.longs===String?%j:%i", X, W.typeDefault.toString(), W.typeDefault.toNumber());
                else if (W.bytes) {
                    var F = "[" + Array.prototype.slice.call(W.typeDefault).join(",") + "]";
                    G("if(o.bytes===String)d%s=%j", X, String.fromCharCode.apply(String, W.typeDefault))("else{")("d%s=%s", X, F)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", X, X)("}")
                } else G("d%s=%j", X, W.typeDefault)
            }
            G("}")
        }
        var V = !1;
        for (J = 0; J < B.length; ++J) {
            var W = B[J],
                K = Q._fieldsArray.indexOf(W),
                X = nk.safeProp(W.name);
            if (W.map) {
                if (!V) V = !0, G("var ks2");
                G("if(m%s&&(ks2=Object.keys(m%s)).length){", X, X)("d%s={}", X)("for(var j=0;j<ks2.length;++j){"), G20(G, W, K, X + "[ks2[j]]")("}")
            } else if (W.repeated) G("if(m%s&&m%s.length){", X, X)("d%s=[]", X)("for(var j=0;j<m%s.length;++j){", X), G20(G, W, K, X + "[j]")("}");
            else if (G("if(m%s!=null&&m.hasOwnProperty(%j)){", X, W.name), G20(G, W, K, X), W.partOf) G("if(o.oneofs)")("d%s=%j", nk.safeProp(W.partOf.name), W.name);
            G("}")
        }
        return G("return d")
    }
});
var I20 = U((MC2) => {
    var AL5 = MC2,
        QL5 = C41();
    AL5[".google.protobuf.Any"] = {
        fromObject: function(A) {
            if (A && A["@type"]) {
                var Q = A["@type"].substring(A["@type"].lastIndexOf("/") + 1),
                    B = this.lookup(Q);
                if (B) {
                    var G = A["@type"].charAt(0) === "." ? A["@type"].slice(1) : A["@type"];
                    if (G.indexOf("/") === -1) G = "/" + G;
                    return this.create({
                        type_url: G,
                        value: B.encode(B.fromObject(A)).finish()
                    })
                }
            }
            return this.fromObject(A)
        },
        toObject: function(A, Q) {
            var B = "type.googleapis.com/",
                G = "",
                Z = "";
            if (Q && Q.json && A.type_url && A.value) {
                Z = A.type_url.substring(A.type_url.lastIndexOf("/") + 1), G = A.type_url.substring(0, A.type_url.lastIndexOf("/") + 1);
                var I = this.lookup(Z);
                if (I) A = I.decode(A.value)
            }
            if (!(A instanceof this.ctor) && A instanceof QL5) {
                var Y = A.$type.toObject(A, Q),
                    J = A.$type.fullName[0] === "." ? A.$type.fullName.slice(1) : A.$type.fullName;
                if (G === "") G = B;
                return Z = G + J, Y["@type"] = Z, Y
            }
            return this.toObject(A, Q)
        }
    }
});
var U41 = U((RuG, RC2) => {
    RC2.exports = FZ;
    var ZO = nYA();
    ((FZ.prototype = Object.create(ZO.prototype)).constructor = FZ).className = "Type";
    var BL5 = FP(),
        W20 = c1A(),
        E41 = bi(),
        GL5 = K41(),
        ZL5 = H41(),
        Y20 = C41(),
        J20 = f91(),
        IL5 = v91(),
        eH = GK(),
        YL5 = X20(),
        JL5 = tB0(),
        WL5 = Q20(),
        OC2 = Z20(),
        XL5 = I20();

    function FZ(A, Q) {
        ZO.call(this, A, Q), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null
    }
    Object.defineProperties(FZ.prototype, {
        fieldsById: {
            get: function() {
                if (this._fieldsById) return this._fieldsById;
                this._fieldsById = {};
                for (var A = Object.keys(this.fields), Q = 0; Q < A.length; ++Q) {
                    var B = this.fields[A[Q]],
                        G = B.id;
                    if (this._fieldsById[G]) throw Error("duplicate id " + G + " in " + this);
                    this._fieldsById[G] = B
                }
                return this._fieldsById
            }
        },
        fieldsArray: {
            get: function() {
                return this._fieldsArray || (this._fieldsArray = eH.toArray(this.fields))
            }
        },
        oneofsArray: {
            get: function() {
                return this._oneofsArray || (this._oneofsArray = eH.toArray(this.oneofs))
            }
        },
        ctor: {
            get: function() {
                return this._ctor || (this.ctor = FZ.generateConstructor(this)())
            },
            set: function(A) {
                var Q = A.prototype;
                if (!(Q instanceof Y20))(A.prototype = new Y20).constructor = A, eH.merge(A.prototype, Q);
                A.$type = A.prototype.$type = this, eH.merge(A, Y20, !0), this._ctor = A;
                var B = 0;
                for (; B < this.fieldsArray.length; ++B) this._fieldsArray[B].resolve();
                var G = {};
                for (B = 0; B < this.oneofsArray.length; ++B) G[this._oneofsArray[B].resolve().name] = {
                    get: eH.oneOfGetter(this._oneofsArray[B].oneof),
                    set: eH.oneOfSetter(this._oneofsArray[B].oneof)
                };
                if (B) Object.defineProperties(A.prototype, G)
            }
        }
    });
    FZ.generateConstructor = function(Q) {
        var B = eH.codegen(["p"], Q.name);
        for (var G = 0, Z; G < Q.fieldsArray.length; ++G)
            if ((Z = Q._fieldsArray[G]).map) B("this%s={}", eH.safeProp(Z.name));
            else if (Z.repeated) B("this%s=[]", eH.safeProp(Z.name));
        return B("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
    };

    function z41(A) {
        return A._fieldsById = A._fieldsArray = A._oneofsArray = null, delete A.encode, delete A.decode, delete A.verify, A
    }
    FZ.fromJSON = function(Q, B) {
        var G = new FZ(Q, B.options);
        G.extensions = B.extensions, G.reserved = B.reserved;
        var Z = Object.keys(B.fields),
            I = 0;
        for (; I < Z.length; ++I) G.add((typeof B.fields[Z[I]].keyType < "u" ? GL5.fromJSON : E41.fromJSON)(Z[I], B.fields[Z[I]]));
        if (B.oneofs)
            for (Z = Object.keys(B.oneofs), I = 0; I < Z.length; ++I) G.add(W20.fromJSON(Z[I], B.oneofs[Z[I]]));
        if (B.nested)
            for (Z = Object.keys(B.nested), I = 0; I < Z.length; ++I) {
                var Y = B.nested[Z[I]];
                G.add((Y.id !== void 0 ? E41.fromJSON : Y.fields !== void 0 ? FZ.fromJSON : Y.values !== void 0 ? BL5.fromJSON : Y.methods !== void 0 ? ZL5.fromJSON : ZO.fromJSON)(Z[I], Y))
            }
        if (B.extensions && B.extensions.length) G.extensions = B.extensions;
        if (B.reserved && B.reserved.length) G.reserved = B.reserved;
        if (B.group) G.group = !0;
        if (B.comment) G.comment = B.comment;
        if (B.edition) G._edition = B.edition;
        return G._defaultEdition = "proto3", G
    };
    FZ.prototype.toJSON = function(Q) {
        var B = ZO.prototype.toJSON.call(this, Q),
            G = Q ? Boolean(Q.keepComments) : !1;
        return eH.toObject(["edition", this._editionToJSON(), "options", B && B.options || void 0, "oneofs", ZO.arrayToJSON(this.oneofsArray, Q), "fields", ZO.arrayToJSON(this.fieldsArray.filter(function(Z) {
            return !Z.declaringField
        }), Q) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", B && B.nested || void 0, "comment", G ? this.comment : void 0])
    };
    FZ.prototype.resolveAll = function() {
        if (!this._needsRecursiveResolve) return this;
        ZO.prototype.resolveAll.call(this);
        var Q = this.oneofsArray;
        G = 0;
        while (G < Q.length) Q[G++].resolve();
        var B = this.fieldsArray,
            G = 0;
        while (G < B.length) B[G++].resolve();
        return this
    };
    FZ.prototype._resolveFeaturesRecursive = function(Q) {
        if (!this._needsRecursiveFeatureResolution) return this;
        return Q = this._edition || Q, ZO.prototype._resolveFeaturesRecursive.call(this, Q), this.oneofsArray.forEach((B) => {
            B._resolveFeatures(Q)
        }), this.fieldsArray.forEach((B) => {
            B._resolveFeatures(Q)
        }), this
    };
    FZ.prototype.get = function(Q) {
        return this.fields[Q] || this.oneofs && this.oneofs[Q] || this.nested && this.nested[Q] || null
    };
    FZ.prototype.add = function(Q) {
        if (this.get(Q.name)) throw Error("duplicate name '" + Q.name + "' in " + this);
        if (Q instanceof E41 && Q.extend === void 0) {
            if (this._fieldsById ? this._fieldsById[Q.id] : this.fieldsById[Q.id]) throw Error("duplicate id " + Q.id + " in " + this);
            if (this.isReservedId(Q.id)) throw Error("id " + Q.id + " is reserved in " + this);
            if (this.isReservedName(Q.name)) throw Error("name '" + Q.name + "' is reserved in " + this);
            if (Q.parent) Q.parent.remove(Q);
            return this.fields[Q.name] = Q, Q.message = this, Q.onAdd(this), z41(this)
        }
        if (Q instanceof W20) {
            if (!this.oneofs) this.oneofs = {};
            return this.oneofs[Q.name] = Q, Q.onAdd(this), z41(this)
        }
        return ZO.prototype.add.call(this, Q)
    };
    FZ.prototype.remove = function(Q) {
        if (Q instanceof E41 && Q.extend === void 0) {
            if (!this.fields || this.fields[Q.name] !== Q) throw Error(Q + " is not a member of " + this);
            return delete this.fields[Q.name], Q.parent = null, Q.onRemove(this), z41(this)
        }
        if (Q instanceof W20) {
            if (!this.oneofs || this.oneofs[Q.name] !== Q) throw Error(Q + " is not a member of " + this);
            return delete this.oneofs[Q.name], Q.parent = null, Q.onRemove(this), z41(this)
        }
        return ZO.prototype.remove.call(this, Q)
    };
    FZ.prototype.isReservedId = function(Q) {
        return ZO.isReservedId(this.reserved, Q)
    };
    FZ.prototype.isReservedName = function(Q) {
        return ZO.isReservedName(this.reserved, Q)
    };
    FZ.prototype.create = function(Q) {
        return new this.ctor(Q)
    };
    FZ.prototype.setup = function() {
        var Q = this.fullName,
            B = [];
        for (var G = 0; G < this.fieldsArray.length; ++G) B.push(this._fieldsArray[G].resolve().resolvedType);
        this.encode = YL5(this)({
            Writer: IL5,
            types: B,
            util: eH
        }), this.decode = JL5(this)({
            Reader: J20,
            types: B,
            util: eH
        }), this.verify = WL5(this)({
            types: B,
            util: eH
        }), this.fromObject = OC2.fromObject(this)({
            types: B,
            util: eH
        }), this.toObject = OC2.toObject(this)({
            types: B,
            util: eH
        });
        var Z = XL5[Q];
        if (Z) {
            var I = Object.create(this);
            I.fromObject = this.fromObject, this.fromObject = Z.fromObject.bind(I), I.toObject = this.toObject, this.toObject = Z.toObject.bind(I)
        }
        return this
    };
    FZ.prototype.encode = function(Q, B) {
        return this.setup().encode(Q, B)
    };
    FZ.prototype.encodeDelimited = function(Q, B) {
        return this.encode(Q, B && B.len ? B.fork() : B).ldelim()
    };
    FZ.prototype.decode = function(Q, B) {
        return this.setup().decode(Q, B)
    };
    FZ.prototype.decodeDelimited = function(Q) {
        if (!(Q instanceof J20)) Q = J20.create(Q);
        return this.decode(Q, Q.uint32())
    };
    FZ.prototype.verify = function(Q) {
        return this.setup().verify(Q)
    };
    FZ.prototype.fromObject = function(Q) {
        return this.setup().fromObject(Q)
    };
    FZ.prototype.toObject = function(Q, B) {
        return this.setup().toObject(Q, B)
    };
    FZ.d = function(Q) {
        return function(G) {
            eH.decorateType(G, Q)
        }
    }
});
var N41 = U((TuG, jC2) => {
    jC2.exports = $q;
    var q41 = nYA();
    (($q.prototype = Object.create(q41.prototype)).constructor = $q).className = "Root";
    var $41 = bi(),
        F20 = FP(),
        FL5 = c1A(),
        hi = GK(),
        V20, K20, XOA;

    function $q(A) {
        q41.call(this, "", A), this.deferred = [], this.files = [], this._edition = "proto2", this._fullyQualifiedObjects = {}
    }
    $q.fromJSON = function(Q, B) {
        if (!B) B = new $q;
        if (Q.options) B.setOptions(Q.options);
        return B.addJSON(Q.nested).resolveAll()
    };
    $q.prototype.resolvePath = hi.path.resolve;
    $q.prototype.fetch = hi.fetch;

    function PC2() {}
    $q.prototype.load = function A(Q, B, G) {
        if (typeof B === "function") G = B, B = void 0;
        var Z = this;
        if (!G) return hi.asPromise(A, Z, Q, B);
        var I = G === PC2;

        function Y(D, H) {
            if (!G) return;
            if (I) throw D;
            if (H) H.resolveAll();
            var C = G;
            G = null, C(D, H)
        }

        function J(D) {
            var H = D.lastIndexOf("google/protobuf/");
            if (H > -1) {
                var C = D.substring(H);
                if (C in XOA) return C
            }
            return null
        }

        function W(D, H) {
            try {
                if (hi.isString(H) && H.charAt(0) === "{") H = JSON.parse(H);
                if (!hi.isString(H)) Z.setOptions(H.options).addJSON(H.nested);
                else {
                    K20.filename = D;
                    var C = K20(H, Z, B),
                        E, z = 0;
                    if (C.imports) {
                        for (; z < C.imports.length; ++z)
                            if (E = J(C.imports[z]) || Z.resolvePath(D, C.imports[z])) X(E)
                    }
                    if (C.weakImports) {
                        for (z = 0; z < C.weakImports.length; ++z)
                            if (E = J(C.weakImports[z]) || Z.resolvePath(D, C.weakImports[z])) X(E, !0)
                    }
                }
            } catch (w) {
                Y(w)
            }
            if (!I && !F) Y(null, Z)
        }

        function X(D, H) {
            if (D = J(D) || D, Z.files.indexOf(D) > -1) return;
            if (Z.files.push(D), D in XOA) {
                if (I) W(D, XOA[D]);
                else ++F, setTimeout(function() {
                    --F, W(D, XOA[D])
                });
                return
            }
            if (I) {
                var C;
                try {
                    C = hi.fs.readFileSync(D).toString("utf8")
                } catch (E) {
                    if (!H) Y(E);
                    return
                }
                W(D, C)
            } else ++F, Z.fetch(D, function(E, z) {
                if (--F, !G) return;
                if (E) {
                    if (!H) Y(E);
                    else if (!F) Y(null, Z);
                    return
                }
                W(D, z)
            })
        }
        var F = 0;
        if (hi.isString(Q)) Q = [Q];
        for (var V = 0, K; V < Q.length; ++V)
            if (K = Z.resolvePath("", Q[V])) X(K);
        if (I) return Z.resolveAll(), Z;
        if (!F) Y(null, Z);
        return Z
    };
    $q.prototype.loadSync = function(Q, B) {
        if (!hi.isNode) throw Error("not supported");
        return this.load(Q, B, PC2)
    };
    $q.prototype.resolveAll = function() {
        if (!this._needsRecursiveResolve) return this;
        if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(Q) {
            return "'extend " + Q.extend + "' in " + Q.parent.fullName
        }).join(", "));
        return q41.prototype.resolveAll.call(this)
    };
    var w41 = /^[A-Z]/;

    function TC2(A, Q) {
        var B = Q.parent.lookup(Q.extend);
        if (B) {
            var G = new $41(Q.fullName, Q.id, Q.type, Q.rule, void 0, Q.options);
            if (B.get(G.name)) return !0;
            return G.declaringField = Q, Q.extensionField = G, B.add(G), !0
        }
        return !1
    }
    $q.prototype._handleAdd = function(Q) {
        if (Q instanceof $41) {
            if (Q.extend !== void 0 && !Q.extensionField) {
                if (!TC2(this, Q)) this.deferred.push(Q)
            }
        } else if (Q instanceof F20) {
            if (w41.test(Q.name)) Q.parent[Q.name] = Q.values
        } else if (!(Q instanceof FL5)) {
            if (Q instanceof V20)
                for (var B = 0; B < this.deferred.length;)
                    if (TC2(this, this.deferred[B])) this.deferred.splice(B, 1);
                    else ++B;
            for (var G = 0; G < Q.nestedArray.length; ++G) this._handleAdd(Q._nestedArray[G]);
            if (w41.test(Q.name)) Q.parent[Q.name] = Q
        }
        if (Q instanceof V20 || Q instanceof F20 || Q instanceof $41) this._fullyQualifiedObjects[Q.fullName] = Q
    };
    $q.prototype._handleRemove = function(Q) {
        if (Q instanceof $41) {
            if (Q.extend !== void 0)
                if (Q.extensionField) Q.extensionField.parent.remove(Q.extensionField), Q.extensionField = null;
                else {
                    var B = this.deferred.indexOf(Q);
                    if (B > -1) this.deferred.splice(B, 1)
                }
        } else if (Q instanceof F20) {
            if (w41.test(Q.name)) delete Q.parent[Q.name]
        } else if (Q instanceof q41) {
            for (var G = 0; G < Q.nestedArray.length; ++G) this._handleRemove(Q._nestedArray[G]);
            if (w41.test(Q.name)) delete Q.parent[Q.name]
        }
        delete this._fullyQualifiedObjects[Q.fullName]
    };
    $q._configure = function(A, Q, B) {
        V20 = A, K20 = Q, XOA = B
    }
});
var GK = U((PuG, _C2) => {
    var kW = _C2.exports = dk(),
        SC2 = uQ0(),
        D20, H20;
    kW.codegen = IC2();
    kW.fetch = JC2();
    kW.path = FC2();
    kW.fs = kW.inquire("fs");
    kW.toArray = function(Q) {
        if (Q) {
            var B = Object.keys(Q),
                G = Array(B.length),
                Z = 0;
            while (Z < B.length) G[Z] = Q[B[Z++]];
            return G
        }
        return []
    };
    kW.toObject = function(Q) {
        var B = {},
            G = 0;
        while (G < Q.length) {
            var Z = Q[G++],
                I = Q[G++];
            if (I !== void 0) B[Z] = I
        }
        return B
    };
    var VL5 = /\\/g,
        KL5 = /"/g;
    kW.isReserved = function(Q) {
        return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(Q)
    };
    kW.safeProp = function(Q) {
        if (!/^[$\w_]+$/.test(Q) || kW.isReserved(Q)) return '["' + Q.replace(VL5, "\\\\").replace(KL5, "\\\"") + '"]';
        return "." + Q
    };
    kW.ucFirst = function(Q) {
        return Q.charAt(0).toUpperCase() + Q.substring(1)
    };
    var DL5 = /_([a-z])/g;
    kW.camelCase = function(Q) {
        return Q.substring(0, 1) + Q.substring(1).replace(DL5, function(B, G) {
            return G.toUpperCase()
        })
    };
    kW.compareFieldsById = function(Q, B) {
        return Q.id - B.id
    };
    kW.decorateType = function(Q, B) {
        if (Q.$type) {
            if (B && Q.$type.name !== B) kW.decorateRoot.remove(Q.$type), Q.$type.name = B, kW.decorateRoot.add(Q.$type);
            return Q.$type
        }
        if (!D20) D20 = U41();
        var G = new D20(B || Q.name);
        return kW.decorateRoot.add(G), G.ctor = Q, Object.defineProperty(Q, "$type", {
            value: G,
            enumerable: !1
        }), Object.defineProperty(Q.prototype, "$type", {
            value: G,
            enumerable: !1
        }), G
    };
    var HL5 = 0;
    kW.decorateEnum = function(Q) {
        if (Q.$type) return Q.$type;
        if (!H20) H20 = FP();
        var B = new H20("Enum" + HL5++, Q);
        return kW.decorateRoot.add(B), Object.defineProperty(Q, "$type", {
            value: B,
            enumerable: !1
        }), B
    };
    kW.setProperty = function(Q, B, G, Z) {
        function I(Y, J, W) {
            var X = J.shift();
            if (X === "__proto__" || X === "prototype") return Y;
            if (J.length > 0) Y[X] = I(Y[X] || {}, J, W);
            else {
                var F = Y[X];
                if (F && Z) return Y;
                if (F) W = [].concat(F).concat(W);
                Y[X] = W
            }
            return Y
        }
        if (typeof Q !== "object") throw TypeError("dst must be an object");
        if (!B) throw TypeError("path must be specified");
        return B = B.split("."), I(Q, B, G)
    };
    Object.defineProperty(kW, "decorateRoot", {
        get: function() {
            return SC2.decorated || (SC2.decorated = new(N41()))
        }
    })
});
var p1A = U((kC2) => {
    var FOA = kC2,
        CL5 = GK(),
        EL5 = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

    function VOA(A, Q) {
        var B = 0,
            G = {};
        Q |= 0;
        while (B < A.length) G[EL5[B + Q]] = A[B++];
        return G
    }
    FOA.basic = VOA([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
    FOA.defaults = VOA([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", CL5.emptyArray, null]);
    FOA.long = VOA([0, 0, 0, 1, 1], 7);
    FOA.mapKey = VOA([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
    FOA.packed = VOA([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
});
var bi = U((SuG, xC2) => {
    xC2.exports = ZK;
    var DOA = fi();
    ((ZK.prototype = Object.create(DOA.prototype)).constructor = ZK).className = "Field";
    var yC2 = FP(),
        C20 = p1A(),
        aX = GK(),
        KOA, zL5 = /^required|optional|repeated$/;
    ZK.fromJSON = function(Q, B) {
        var G = new ZK(Q, B.id, B.type, B.rule, B.extend, B.options, B.comment);
        if (B.edition) G._edition = B.edition;
        return G._defaultEdition = "proto3", G
    };

    function ZK(A, Q, B, G, Z, I, Y) {
        if (aX.isObject(G)) Y = Z, I = G, G = Z = void 0;
        else if (aX.isObject(Z)) Y = I, I = Z, Z = void 0;
        if (DOA.call(this, A, I), !aX.isInteger(Q) || Q < 0) throw TypeError("id must be a non-negative integer");
        if (!aX.isString(B)) throw TypeError("type must be a string");
        if (G !== void 0 && !zL5.test(G = G.toString().toLowerCase())) throw TypeError("rule must be a string rule");
        if (Z !== void 0 && !aX.isString(Z)) throw TypeError("extend must be a string");
        if (G === "proto3_optional") G = "optional";
        this.rule = G && G !== "optional" ? G : void 0, this.type = B, this.id = Q, this.extend = Z || void 0, this.repeated = G === "repeated", this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = aX.Long ? C20.long[B] !== void 0 : !1, this.bytes = B === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.comment = Y
    }
    Object.defineProperty(ZK.prototype, "required", {
        get: function() {
            return this._features.field_presence === "LEGACY_REQUIRED"
        }
    });
    Object.defineProperty(ZK.prototype, "optional", {
        get: function() {
            return !this.required
        }
    });
    Object.defineProperty(ZK.prototype, "delimited", {
        get: function() {
            return this.resolvedType instanceof KOA && this._features.message_encoding === "DELIMITED"
        }
    });
    Object.defineProperty(ZK.prototype, "packed", {
        get: function() {
            return this._features.repeated_field_encoding === "PACKED"
        }
    });
    Object.defineProperty(ZK.prototype, "hasPresence", {
        get: function() {
            if (this.repeated || this.map) return !1;
            return this.partOf || this.declaringField || this.extensionField || this._features.field_presence !== "IMPLICIT"
        }
    });
    ZK.prototype.setOption = function(Q, B, G) {
        return DOA.prototype.setOption.call(this, Q, B, G)
    };
    ZK.prototype.toJSON = function(Q) {
        var B = Q ? Boolean(Q.keepComments) : !1;
        return aX.toObject(["edition", this._editionToJSON(), "rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", B ? this.comment : void 0])
    };
    ZK.prototype.resolve = function() {
        if (this.resolved) return this;
        if ((this.typeDefault = C20.defaults[this.type]) === void 0)
            if (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof KOA) this.typeDefault = null;
            else this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
        else if (this.options && this.options.proto3_optional) this.typeDefault = null;
        if (this.options && this.options.default != null) {
            if (this.typeDefault = this.options.default, this.resolvedType instanceof yC2 && typeof this.typeDefault === "string") this.typeDefault = this.resolvedType.values[this.typeDefault]
        }
        if (this.options) {
            if (this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof yC2)) delete this.options.packed;
            if (!Object.keys(this.options).length) this.options = void 0
        }
        if (this.long) {
            if (this.typeDefault = aX.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze) Object.freeze(this.typeDefault)
        } else if (this.bytes && typeof this.typeDefault === "string") {
            var Q;
            if (aX.base64.test(this.typeDefault)) aX.base64.decode(this.typeDefault, Q = aX.newBuffer(aX.base64.length(this.typeDefault)), 0);
            else aX.utf8.write(this.typeDefault, Q = aX.newBuffer(aX.utf8.length(this.typeDefault)), 0);
            this.typeDefault = Q
        }
        if (this.map) this.defaultValue = aX.emptyObject;
        else if (this.repeated) this.defaultValue = aX.emptyArray;
        else this.defaultValue = this.typeDefault;
        if (this.parent instanceof KOA) this.parent.ctor.prototype[this.name] = this.defaultValue;
        return DOA.prototype.resolve.call(this)
    };
    ZK.prototype._inferLegacyProtoFeatures = function(Q) {
        if (Q !== "proto2" && Q !== "proto3") return {};
        var B = {};
        if (this.rule === "required") B.field_presence = "LEGACY_REQUIRED";
        if (this.parent && C20.defaults[this.type] === void 0) {
            var G = this.parent.get(this.type.split(".").pop());
            if (G && G instanceof KOA && G.group) B.message_encoding = "DELIMITED"
        }
        if (this.getOption("packed") === !0) B.repeated_field_encoding = "PACKED";
        else if (this.getOption("packed") === !1) B.repeated_field_encoding = "EXPANDED";
        return B
    };
    ZK.prototype._resolveFeatures = function(Q) {
        return DOA.prototype._resolveFeatures.call(this, this._edition || Q)
    };
    ZK.d = function(Q, B, G, Z) {
        if (typeof B === "function") B = aX.decorateType(B).name;
        else if (B && typeof B === "object") B = aX.decorateEnum(B).name;
        return function(Y, J) {
            aX.decorateType(Y.constructor).add(new ZK(J, Q, B, G, {
                default: Z
            }))
        }
    };
    ZK._configure = function(Q) {
        KOA = Q
    }
});
var c1A = U((_uG, fC2) => {
    fC2.exports = wq;
    var M41 = fi();
    ((wq.prototype = Object.create(M41.prototype)).constructor = wq).className = "OneOf";
    var vC2 = bi(),
        L41 = GK();

    function wq(A, Q, B, G) {
        if (!Array.isArray(Q)) B = Q, Q = void 0;
        if (M41.call(this, A, B), !(Q === void 0 || Array.isArray(Q))) throw TypeError("fieldNames must be an Array");
        this.oneof = Q || [], this.fieldsArray = [], this.comment = G
    }
    wq.fromJSON = function(Q, B) {
        return new wq(Q, B.oneof, B.options, B.comment)
    };
    wq.prototype.toJSON = function(Q) {
        var B = Q ? Boolean(Q.keepComments) : !1;
        return L41.toObject(["options", this.options, "oneof", this.oneof, "comment", B ? this.comment : void 0])
    };

    function bC2(A) {
        if (A.parent) {
            for (var Q = 0; Q < A.fieldsArray.length; ++Q)
                if (!A.fieldsArray[Q].parent) A.parent.add(A.fieldsArray[Q])
        }
    }
    wq.prototype.add = function(Q) {
        if (!(Q instanceof vC2)) throw TypeError("field must be a Field");
        if (Q.parent && Q.parent !== this.parent) Q.parent.remove(Q);
        return this.oneof.push(Q.name), this.fieldsArray.push(Q), Q.partOf = this, bC2(this), this
    };
    wq.prototype.remove = function(Q) {
        if (!(Q instanceof vC2)) throw TypeError("field must be a Field");
        var B = this.fieldsArray.indexOf(Q);