/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_024.js
 * 处理时间: 2025-12-09T03:41:36.266Z
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
 * Category: api
 * File: 24/30
 * Lines: 275026 - 276525 (1500 lines)
 * Original file: cli.js
 */


                function K() {
                    delete G._loadingSchemas[F]
                }

                function D(H) {
                    return G._refs[H] || G._schemas[H]
                }
            }
        }
    }
});
var K82 = U((eMG, V82) => {
    V82.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V, K = "data" + (Y || ""),
            D = "valid" + I,
            H = "errs__" + I,
            C = Q.opts.$data && J && J.$data,
            E;
        if (C) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", E = "schema" + I;
        else E = J;
        var z = this,
            w = "definition" + I,
            N = z.definition,
            q = "",
            R, P, y, v, x;
        if (C && N.$data) {
            x = "keywordValidate" + I;
            var p = N.validateSchema;
            Z += " var " + w + " = RULES.custom['" + B + "'].definition; var " + x + " = " + w + ".validate;"
        } else {
            if (v = Q.useCustomRule(z, J, Q.schema, Q), !v) return;
            E = "validate.schema" + W, x = v.code, R = N.compile, P = N.inline, y = N.macro
        }
        var u = x + ".errors",
            o = "i" + I,
            l = "ruleErr" + I,
            k = N.async;
        if (k && !Q.async) throw Error("async keyword in sync schema");
        if (!(P || y)) Z += "" + u + " = null;";
        if (Z += "var " + H + " = errors;var " + D + ";", C && N.$data) {
            if (q += "}", Z += " if (" + E + " === undefined) { " + D + " = true; } else { ", p) q += "}", Z += " " + D + " = " + w + ".validateSchema(" + E + "); if (" + D + ") { "
        }
        if (P)
            if (N.statements) Z += " " + v.validate + " ";
            else Z += " " + D + " = " + v.validate + "; ";
        else if (y) {
            var d = Q.util.copy(Q),
                q = "";
            d.level++;
            var QA = "valid" + d.level;
            d.schema = v.validate, d.schemaPath = "";
            var IA = Q.compositeRule;
            Q.compositeRule = d.compositeRule = !0;
            var HA = Q.validate(d).replace(/validate\.schema/g, x);
            Q.compositeRule = d.compositeRule = IA, Z += " " + HA
        } else {
            var wA = wA || [];
            if (wA.push(Z), Z = "", Z += "  " + x + ".call( ", Q.opts.passContext) Z += "this";
            else Z += "self";
            if (R || N.schema === !1) Z += " , " + K + " ";
            else Z += " , " + E + " , " + K + " , validate.schema" + Q.schemaPath + " ";
            if (Z += " , (dataPath || '')", Q.errorPath != '""') Z += " + " + Q.errorPath;
            var KA = Y ? "data" + (Y - 1 || "") : "parentData",
                SA = Y ? Q.dataPathArr[Y] : "parentDataProperty";
            Z += " , " + KA + " , " + SA + " , rootData )  ";
            var sA = Z;
            if (Z = wA.pop(), N.errors === !1) {
                if (Z += " " + D + " = ", k) Z += "await ";
                Z += "" + sA + "; "
            } else if (k) u = "customErrors" + I, Z += " var " + u + " = null; try { " + D + " = await " + sA + "; } catch (e) { " + D + " = false; if (e instanceof ValidationError) " + u + " = e.errors; else throw e; } ";
            else Z += " " + u + " = null; " + D + " = " + sA + "; "
        }
        if (N.modifying) Z += " if (" + KA + ") " + K + " = " + KA + "[" + SA + "];";
        if (Z += "" + q, N.valid) {
            if (F) Z += " if (true) { "
        } else {
            if (Z += " if ( ", N.valid === void 0)
                if (Z += " !", y) Z += "" + QA;
                else Z += "" + D;
            else Z += " " + !N.valid + " ";
            Z += ") { ", V = z.keyword;
            var wA = wA || [];
            wA.push(Z), Z = "";
            var wA = wA || [];
            if (wA.push(Z), Z = "", Q.createErrors !== !1) {
                if (Z += " { keyword: '" + (V || "custom") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { keyword: '" + z.keyword + "' } ", Q.opts.messages !== !1) Z += ` , message: 'should pass "` + z.keyword + `" keyword validation' `;
                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + K + " ";
                Z += " } "
            } else Z += " {} ";
            var NA = Z;
            if (Z = wA.pop(), !Q.compositeRule && F)
                if (Q.async) Z += " throw new ValidationError([" + NA + "]); ";
                else Z += " validate.errors = [" + NA + "]; return false; ";
            else Z += " var err = " + NA + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            var qA = Z;
            if (Z = wA.pop(), P)
                if (N.errors) {
                    if (N.errors != "full") {
                        if (Z += "  for (var " + o + "=" + H + "; " + o + "<errors; " + o + "++) { var " + l + " = vErrors[" + o + "]; if (" + l + ".dataPath === undefined) " + l + ".dataPath = (dataPath || '') + " + Q.errorPath + "; if (" + l + ".schemaPath === undefined) { " + l + '.schemaPath = "' + X + '"; } ', Q.opts.verbose) Z += " " + l + ".schema = " + E + "; " + l + ".data = " + K + "; ";
                        Z += " } "
                    }
                } else if (N.errors === !1) Z += " " + qA + " ";
            else {
                if (Z += " if (" + H + " == errors) { " + qA + " } else {  for (var " + o + "=" + H + "; " + o + "<errors; " + o + "++) { var " + l + " = vErrors[" + o + "]; if (" + l + ".dataPath === undefined) " + l + ".dataPath = (dataPath || '') + " + Q.errorPath + "; if (" + l + ".schemaPath === undefined) { " + l + '.schemaPath = "' + X + '"; } ', Q.opts.verbose) Z += " " + l + ".schema = " + E + "; " + l + ".data = " + K + "; ";
                Z += " } } "
            } else if (y) {
                if (Z += "   var err =   ", Q.createErrors !== !1) {
                    if (Z += " { keyword: '" + (V || "custom") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { keyword: '" + z.keyword + "' } ", Q.opts.messages !== !1) Z += ` , message: 'should pass "` + z.keyword + `" keyword validation' `;
                    if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + K + " ";
                    Z += " } "
                } else Z += " {} ";
                if (Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !Q.compositeRule && F)
                    if (Q.async) Z += " throw new ValidationError(vErrors); ";
                    else Z += " validate.errors = vErrors; return false; "
            } else if (N.errors === !1) Z += " " + qA + " ";
            else {
                if (Z += " if (Array.isArray(" + u + ")) { if (vErrors === null) vErrors = " + u + "; else vErrors = vErrors.concat(" + u + "); errors = vErrors.length;  for (var " + o + "=" + H + "; " + o + "<errors; " + o + "++) { var " + l + " = vErrors[" + o + "]; if (" + l + ".dataPath === undefined) " + l + ".dataPath = (dataPath || '') + " + Q.errorPath + ";  " + l + '.schemaPath = "' + X + '";  ', Q.opts.verbose) Z += " " + l + ".schema = " + E + "; " + l + ".data = " + K + "; ";
                Z += " } } else { " + qA + " } "
            }
            if (Z += " } ", F) Z += " else { "
        }
        return Z
    }
});
var QA0 = U((AOG, S55) => {
    S55.exports = {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: "http://json-schema.org/draft-07/schema#",
        title: "Core schema meta-schema",
        definitions: {
            schemaArray: {
                type: "array",
                minItems: 1,
                items: {
                    $ref: "#"
                }
            },
            nonNegativeInteger: {
                type: "integer",
                minimum: 0
            },
            nonNegativeIntegerDefault0: {
                allOf: [{
                    $ref: "#/definitions/nonNegativeInteger"
                }, {
                    default: 0
                }]
            },
            simpleTypes: {
                enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
            },
            stringArray: {
                type: "array",
                items: {
                    type: "string"
                },
                uniqueItems: !0,
                default: []
            }
        },
        type: ["object", "boolean"],
        properties: {
            $id: {
                type: "string",
                format: "uri-reference"
            },
            $schema: {
                type: "string",
                format: "uri"
            },
            $ref: {
                type: "string",
                format: "uri-reference"
            },
            $comment: {
                type: "string"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            default: !0,
            readOnly: {
                type: "boolean",
                default: !1
            },
            examples: {
                type: "array",
                items: !0
            },
            multipleOf: {
                type: "number",
                exclusiveMinimum: 0
            },
            maximum: {
                type: "number"
            },
            exclusiveMaximum: {
                type: "number"
            },
            minimum: {
                type: "number"
            },
            exclusiveMinimum: {
                type: "number"
            },
            maxLength: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minLength: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            pattern: {
                type: "string",
                format: "regex"
            },
            additionalItems: {
                $ref: "#"
            },
            items: {
                anyOf: [{
                    $ref: "#"
                }, {
                    $ref: "#/definitions/schemaArray"
                }],
                default: !0
            },
            maxItems: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minItems: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            uniqueItems: {
                type: "boolean",
                default: !1
            },
            contains: {
                $ref: "#"
            },
            maxProperties: {
                $ref: "#/definitions/nonNegativeInteger"
            },
            minProperties: {
                $ref: "#/definitions/nonNegativeIntegerDefault0"
            },
            required: {
                $ref: "#/definitions/stringArray"
            },
            additionalProperties: {
                $ref: "#"
            },
            definitions: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            properties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                default: {}
            },
            patternProperties: {
                type: "object",
                additionalProperties: {
                    $ref: "#"
                },
                propertyNames: {
                    format: "regex"
                },
                default: {}
            },
            dependencies: {
                type: "object",
                additionalProperties: {
                    anyOf: [{
                        $ref: "#"
                    }, {
                        $ref: "#/definitions/stringArray"
                    }]
                }
            },
            propertyNames: {
                $ref: "#"
            },
            const: !0,
            enum: {
                type: "array",
                items: !0,
                minItems: 1,
                uniqueItems: !0
            },
            type: {
                anyOf: [{
                    $ref: "#/definitions/simpleTypes"
                }, {
                    type: "array",
                    items: {
                        $ref: "#/definitions/simpleTypes"
                    },
                    minItems: 1,
                    uniqueItems: !0
                }]
            },
            format: {
                type: "string"
            },
            contentMediaType: {
                type: "string"
            },
            contentEncoding: {
                type: "string"
            },
            if: {
                $ref: "#"
            },
            then: {
                $ref: "#"
            },
            else: {
                $ref: "#"
            },
            allOf: {
                $ref: "#/definitions/schemaArray"
            },
            anyOf: {
                $ref: "#/definitions/schemaArray"
            },
            oneOf: {
                $ref: "#/definitions/schemaArray"
            },
            not: {
                $ref: "#"
            }
        },
        default: !0
    }
});
var C82 = U((QOG, H82) => {
    var D82 = QA0();
    H82.exports = {
        $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
        definitions: {
            simpleTypes: D82.definitions.simpleTypes
        },
        type: "object",
        dependencies: {
            schema: ["validate"],
            $data: ["validate"],
            statements: ["inline"],
            valid: {
                not: {
                    required: ["macro"]
                }
            }
        },
        properties: {
            type: D82.properties.type,
            schema: {
                type: "boolean"
            },
            statements: {
                type: "boolean"
            },
            dependencies: {
                type: "array",
                items: {
                    type: "string"
                }
            },
            metaSchema: {
                type: "object"
            },
            modifying: {
                type: "boolean"
            },
            valid: {
                type: "boolean"
            },
            $data: {
                type: "boolean"
            },
            async: {
                type: "boolean"
            },
            errors: {
                anyOf: [{
                    type: "boolean"
                }, {
                    const: "full"
                }]
            }
        }
    }
});
var z82 = U((BOG, E82) => {
    var _55 = /^[a-z_$][a-z0-9_$-]*$/i,
        k55 = K82(),
        y55 = C82();
    E82.exports = {
        add: x55,
        get: v55,
        remove: b55,
        validate: BA0
    };

    function x55(A, Q) {
        var B = this.RULES;
        if (B.keywords[A]) throw Error("Keyword " + A + " is already defined");
        if (!_55.test(A)) throw Error("Keyword " + A + " is not a valid identifier");
        if (Q) {
            this.validateKeyword(Q, !0);
            var G = Q.type;
            if (Array.isArray(G))
                for (var Z = 0; Z < G.length; Z++) Y(A, G[Z], Q);
            else Y(A, G, Q);
            var I = Q.metaSchema;
            if (I) {
                if (Q.$data && this._opts.$data) I = {
                    anyOf: [I, {
                        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
                    }]
                };
                Q.validateSchema = this.compile(I, !0)
            }
        }
        B.keywords[A] = B.all[A] = !0;

        function Y(J, W, X) {
            var F;
            for (var V = 0; V < B.length; V++) {
                var K = B[V];
                if (K.type == W) {
                    F = K;
                    break
                }
            }
            if (!F) F = {
                type: W,
                rules: []
            }, B.push(F);
            var D = {
                keyword: J,
                definition: X,
                custom: !0,
                code: k55,
                implements: X.implements
            };
            F.rules.push(D), B.custom[J] = D
        }
        return this
    }

    function v55(A) {
        var Q = this.RULES.custom[A];
        return Q ? Q.definition : this.RULES.keywords[A] || !1
    }

    function b55(A) {
        var Q = this.RULES;
        delete Q.keywords[A], delete Q.all[A], delete Q.custom[A];
        for (var B = 0; B < Q.length; B++) {
            var G = Q[B].rules;
            for (var Z = 0; Z < G.length; Z++)
                if (G[Z].keyword == A) {
                    G.splice(Z, 1);
                    break
                }
        }
        return this
    }

    function BA0(A, Q) {
        BA0.errors = null;
        var B = this._validateKeyword = this._validateKeyword || this.compile(y55, !0);
        if (B(A)) return !0;
        if (BA0.errors = B.errors, Q) throw Error("custom keyword definition is invalid: " + this.errorsText(B.errors));
        else return !1
    }
});
var U82 = U((GOG, f55) => {
    f55.exports = {
        $schema: "http://json-schema.org/draft-07/schema#",
        $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
        description: "Meta-schema for $data reference (JSON Schema extension proposal)",
        type: "object",
        required: ["$data"],
        properties: {
            $data: {
                type: "string",
                anyOf: [{
                    format: "relative-json-pointer"
                }, {
                    format: "json-pointer"
                }]
            }
        },
        additionalProperties: !1
    }
});
var aQ1 = U((ZOG, T82) => {
    var w82 = o92(),
        rAA = hQ1(),
        h55 = e92(),
        q82 = me1(),
        g55 = ne1(),
        u55 = V42(),
        m55 = Z82(),
        N82 = J82(),
        L82 = sAA();
    T82.exports = kJ;
    kJ.prototype.validate = c55;
    kJ.prototype.compile = p55;
    kJ.prototype.addSchema = l55;
    kJ.prototype.addMetaSchema = i55;
    kJ.prototype.validateSchema = n55;
    kJ.prototype.getSchema = s55;
    kJ.prototype.removeSchema = o55;
    kJ.prototype.addFormat = I35;
    kJ.prototype.errorsText = Z35;
    kJ.prototype._addSchema = t55;
    kJ.prototype._compile = e55;
    kJ.prototype.compileAsync = F82();
    var nQ1 = z82();
    kJ.prototype.addKeyword = nQ1.add;
    kJ.prototype.getKeyword = nQ1.get;
    kJ.prototype.removeKeyword = nQ1.remove;
    kJ.prototype.validateKeyword = nQ1.validate;
    var M82 = gQ1();
    kJ.ValidationError = M82.Validation;
    kJ.MissingRefError = M82.MissingRef;
    kJ.$dataMetaSchema = N82;
    var iQ1 = "http://json-schema.org/draft-07/schema",
        $82 = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"],
        d55 = ["/properties"];

    function kJ(A) {
        if (!(this instanceof kJ)) return new kJ(A);
        if (A = this._opts = L82.copy(A) || {}, V35(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = u55(A.format), this._cache = A.cache || new h55, this._loadingSchemas = {}, this._compilations = [], this.RULES = m55(), this._getId = A35(A), A.loopRequired = A.loopRequired || 1 / 0, A.errorDataPath == "property") A._errorDataPathProperty = !0;
        if (A.serialize === void 0) A.serialize = g55;
        if (this._metaOpts = F35(this), A.formats) W35(this);
        if (A.keywords) X35(this);
        if (Y35(this), typeof A.meta == "object") this.addMetaSchema(A.meta);
        if (A.nullable) this.addKeyword("nullable", {
            metaSchema: {
                type: "boolean"
            }
        });
        J35(this)
    }

    function c55(A, Q) {
        var B;
        if (typeof A == "string") {
            if (B = this.getSchema(A), !B) throw Error('no schema with key or ref "' + A + '"')
        } else {
            var G = this._addSchema(A);
            B = G.validate || this._compile(G)
        }
        var Z = B(Q);
        if (B.$async !== !0) this.errors = B.errors;
        return Z
    }

    function p55(A, Q) {
        var B = this._addSchema(A, void 0, Q);
        return B.validate || this._compile(B)
    }

    function l55(A, Q, B, G) {
        if (Array.isArray(A)) {
            for (var Z = 0; Z < A.length; Z++) this.addSchema(A[Z], void 0, B, G);
            return this
        }
        var I = this._getId(A);
        if (I !== void 0 && typeof I != "string") throw Error("schema id must be string");
        return Q = rAA.normalizeId(Q || I), R82(this, Q), this._schemas[Q] = this._addSchema(A, B, G, !0), this
    }

    function i55(A, Q, B) {
        return this.addSchema(A, Q, B, !0), this
    }

    function n55(A, Q) {
        var B = A.$schema;
        if (B !== void 0 && typeof B != "string") throw Error("$schema must be a string");
        if (B = B || this._opts.defaultMeta || a55(this), !B) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        var G = this.validate(B, A);
        if (!G && Q) {
            var Z = "schema is invalid: " + this.errorsText();
            if (this._opts.validateSchema == "log") this.logger.error(Z);
            else throw Error(Z)
        }
        return G
    }

    function a55(A) {
        var Q = A._opts.meta;
        return A._opts.defaultMeta = typeof Q == "object" ? A._getId(Q) || Q : A.getSchema(iQ1) ? iQ1 : void 0, A._opts.defaultMeta
    }

    function s55(A) {
        var Q = O82(this, A);
        switch (typeof Q) {
            case "object":
                return Q.validate || this._compile(Q);
            case "string":
                return this.getSchema(Q);
            case "undefined":
                return r55(this, A)
        }
    }

    function r55(A, Q) {
        var B = rAA.schema.call(A, {
            schema: {}
        }, Q);
        if (B) {
            var {
                schema: G,
                root: Z,
                baseId: I
            } = B, Y = w82.call(A, G, Z, void 0, I);
            return A._fragments[Q] = new q82({
                ref: Q,
                fragment: !0,
                schema: G,
                root: Z,
                baseId: I,
                validate: Y
            }), Y
        }
    }

    function O82(A, Q) {
        return Q = rAA.normalizeId(Q), A._schemas[Q] || A._refs[Q] || A._fragments[Q]
    }

    function o55(A) {
        if (A instanceof RegExp) return lQ1(this, this._schemas, A), lQ1(this, this._refs, A), this;
        switch (typeof A) {
            case "undefined":
                return lQ1(this, this._schemas), lQ1(this, this._refs), this._cache.clear(), this;
            case "string":
                var Q = O82(this, A);
                if (Q) this._cache.del(Q.cacheKey);
                return delete this._schemas[A], delete this._refs[A], this;
            case "object":
                var B = this._opts.serialize,
                    G = B ? B(A) : A;
                this._cache.del(G);
                var Z = this._getId(A);
                if (Z) Z = rAA.normalizeId(Z), delete this._schemas[Z], delete this._refs[Z]
        }
        return this
    }

    function lQ1(A, Q, B) {
        for (var G in Q) {
            var Z = Q[G];
            if (!Z.meta && (!B || B.test(G))) A._cache.del(Z.cacheKey), delete Q[G]
        }
    }

    function t55(A, Q, B, G) {
        if (typeof A != "object" && typeof A != "boolean") throw Error("schema should be object or boolean");
        var Z = this._opts.serialize,
            I = Z ? Z(A) : A,
            Y = this._cache.get(I);
        if (Y) return Y;
        G = G || this._opts.addUsedSchema !== !1;
        var J = rAA.normalizeId(this._getId(A));
        if (J && G) R82(this, J);
        var W = this._opts.validateSchema !== !1 && !Q,
            X;
        if (W && !(X = J && J == rAA.normalizeId(A.$schema))) this.validateSchema(A, !0);
        var F = rAA.ids.call(this, A),
            V = new q82({
                id: J,
                schema: A,
                localRefs: F,
                cacheKey: I,
                meta: B
            });
        if (J[0] != "#" && G) this._refs[J] = V;
        if (this._cache.put(I, V), W && X) this.validateSchema(A, !0);
        return V
    }

    function e55(A, Q) {
        if (A.compiling) {
            if (A.validate = Z, Z.schema = A.schema, Z.errors = null, Z.root = Q ? Q : Z, A.schema.$async === !0) Z.$async = !0;
            return Z
        }
        A.compiling = !0;
        var B;
        if (A.meta) B = this._opts, this._opts = this._metaOpts;
        var G;
        try {
            G = w82.call(this, A.schema, Q, A.localRefs)
        } catch (I) {
            throw delete A.validate, I
        } finally {
            if (A.compiling = !1, A.meta) this._opts = B
        }
        return A.validate = G, A.refs = G.refs, A.refVal = G.refVal, A.root = G.root, G;

        function Z() {
            var I = A.validate,
                Y = I.apply(this, arguments);
            return Z.errors = I.errors, Y
        }
    }

    function A35(A) {
        switch (A.schemaId) {
            case "auto":
                return G35;
            case "id":
                return Q35;
            default:
                return B35
        }
    }

    function Q35(A) {
        if (A.$id) this.logger.warn("schema $id ignored", A.$id);
        return A.id
    }

    function B35(A) {
        if (A.id) this.logger.warn("schema id ignored", A.id);
        return A.$id
    }

    function G35(A) {
        if (A.$id && A.id && A.$id != A.id) throw Error("schema $id is different from id");
        return A.$id || A.id
    }

    function Z35(A, Q) {
        if (A = A || this.errors, !A) return "No errors";
        Q = Q || {};
        var B = Q.separator === void 0 ? ", " : Q.separator,
            G = Q.dataVar === void 0 ? "data" : Q.dataVar,
            Z = "";
        for (var I = 0; I < A.length; I++) {
            var Y = A[I];
            if (Y) Z += G + Y.dataPath + " " + Y.message + B
        }
        return Z.slice(0, -B.length)
    }

    function I35(A, Q) {
        if (typeof Q == "string") Q = new RegExp(Q);
        return this._formats[A] = Q, this
    }

    function Y35(A) {
        var Q;
        if (A._opts.$data) Q = U82(), A.addMetaSchema(Q, Q.$id, !0);
        if (A._opts.meta === !1) return;
        var B = QA0();
        if (A._opts.$data) B = N82(B, d55);
        A.addMetaSchema(B, iQ1, !0), A._refs["http://json-schema.org/schema"] = iQ1
    }

    function J35(A) {
        var Q = A._opts.schemas;
        if (!Q) return;
        if (Array.isArray(Q)) A.addSchema(Q);
        else
            for (var B in Q) A.addSchema(Q[B], B)
    }

    function W35(A) {
        for (var Q in A._opts.formats) {
            var B = A._opts.formats[Q];
            A.addFormat(Q, B)
        }
    }

    function X35(A) {
        for (var Q in A._opts.keywords) {
            var B = A._opts.keywords[Q];
            A.addKeyword(Q, B)
        }
    }

    function R82(A, Q) {
        if (A._schemas[Q] || A._refs[Q]) throw Error('schema with key or id "' + Q + '" already exists')
    }

    function F35(A) {
        var Q = L82.copy(A._opts);
        for (var B = 0; B < $82.length; B++) delete Q[$82[B]];
        return Q
    }

    function V35(A) {
        var Q = A._opts.logger;
        if (Q === !1) A.logger = {
            log: GA0,
            warn: GA0,
            error: GA0
        };
        else {
            if (Q === void 0) Q = console;
            if (!(typeof Q == "object" && Q.log && Q.warn && Q.error)) throw Error("logger must implement log, warn and error methods");
            A.logger = Q
        }
    }

    function GA0() {}
});
var P82, sQ1;
var j82 = L(() => {
    ye1();
    PD();
    P82 = GA(aQ1(), 1);
    sQ1 = class sQ1 extends PLA {
        constructor(A, Q) {
            var B;
            super(Q);
            this._clientInfo = A, this._cachedToolOutputValidators = new Map, this._capabilities = (B = Q === null || Q === void 0 ? void 0 : Q.capabilities) !== null && B !== void 0 ? B : {}, this._ajv = new P82.default
        }
        registerCapabilities(A) {
            if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
            this._capabilities = jQ1(this._capabilities, A)
        }
        assertCapability(A, Q) {
            var B;
            if (!((B = this._serverCapabilities) === null || B === void 0 ? void 0 : B[A])) throw Error(`Server does not support ${A} (required for ${Q})`)
        }
        async connect(A, Q) {
            if (await super.connect(A), A.sessionId !== void 0) return;
            try {
                let B = await this.request({
                    method: "initialize",
                    params: {
                        protocolVersion: ol,
                        capabilities: this._capabilities,
                        clientInfo: this._clientInfo
                    }
                }, $e1, Q);
                if (B === void 0) throw Error(`Server sent invalid initialize result: ${B}`);
                if (!$Q1.includes(B.protocolVersion)) throw Error(`Server's protocol version is not supported: ${B.protocolVersion}`);
                if (this._serverCapabilities = B.capabilities, this._serverVersion = B.serverInfo, A.setProtocolVersion) A.setProtocolVersion(B.protocolVersion);
                this._instructions = B.instructions, await this.notification({
                    method: "notifications/initialized"
                })
            } catch (B) {
                throw this.close(), B
            }
        }
        getServerCapabilities() {
            return this._serverCapabilities
        }
        getServerVersion() {
            return this._serverVersion
        }
        getInstructions() {
            return this._instructions
        }
        assertCapabilityForMethod(A) {
            var Q, B, G, Z, I;
            switch (A) {
                case "logging/setLevel":
                    if (!((Q = this._serverCapabilities) === null || Q === void 0 ? void 0 : Q.logging)) throw Error(`Server does not support logging (required for ${A})`);
                    break;
                case "prompts/get":
                case "prompts/list":
                    if (!((B = this._serverCapabilities) === null || B === void 0 ? void 0 : B.prompts)) throw Error(`Server does not support prompts (required for ${A})`);
                    break;
                case "resources/list":
                case "resources/templates/list":
                case "resources/read":
                case "resources/subscribe":
                case "resources/unsubscribe":
                    if (!((G = this._serverCapabilities) === null || G === void 0 ? void 0 : G.resources)) throw Error(`Server does not support resources (required for ${A})`);
                    if (A === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) throw Error(`Server does not support resource subscriptions (required for ${A})`);
                    break;
                case "tools/call":
                case "tools/list":
                    if (!((Z = this._serverCapabilities) === null || Z === void 0 ? void 0 : Z.tools)) throw Error(`Server does not support tools (required for ${A})`);
                    break;
                case "completion/complete":
                    if (!((I = this._serverCapabilities) === null || I === void 0 ? void 0 : I.completions)) throw Error(`Server does not support completions (required for ${A})`);
                    break;
                case "initialize":
                    break;
                case "ping":
                    break
            }
        }
        assertNotificationCapability(A) {
            var Q;
            switch (A) {
                case "notifications/roots/list_changed":
                    if (!((Q = this._capabilities.roots) === null || Q === void 0 ? void 0 : Q.listChanged)) throw Error(`Client does not support roots list changed notifications (required for ${A})`);
                    break;
                case "notifications/initialized":
                    break;
                case "notifications/cancelled":
                    break;
                case "notifications/progress":
                    break
            }
        }
        assertRequestHandlerCapability(A) {
            switch (A) {
                case "sampling/createMessage":
                    if (!this._capabilities.sampling) throw Error(`Client does not support sampling capability (required for ${A})`);
                    break;
                case "elicitation/create":
                    if (!this._capabilities.elicitation) throw Error(`Client does not support elicitation capability (required for ${A})`);
                    break;
                case "roots/list":
                    if (!this._capabilities.roots) throw Error(`Client does not support roots capability (required for ${A})`);
                    break;
                case "ping":
                    break
            }
        }
        async ping(A) {
            return this.request({
                method: "ping"
            }, Yh, A)
        }
        async complete(A, Q) {
            return this.request({
                method: "completion/complete",
                params: A
            }, Se1, Q)
        }
        async setLoggingLevel(A, Q) {
            return this.request({
                method: "logging/setLevel",
                params: {
                    level: A
                }
            }, Yh, Q)
        }
        async getPrompt(A, Q) {
            return this.request({
                method: "prompts/get",
                params: A
            }, Oe1, Q)
        }
        async listPrompts(A, Q) {
            return this.request({
                method: "prompts/list",
                params: A
            }, RLA, Q)
        }
        async listResources(A, Q) {
            return this.request({
                method: "resources/list",
                params: A
            }, aAA, Q)
        }
        async listResourceTemplates(A, Q) {
            return this.request({
                method: "resources/templates/list",
                params: A
            }, qe1, Q)
        }
        async readResource(A, Q) {
            return this.request({
                method: "resources/read",
                params: A
            }, tl, Q)
        }
        async subscribeResource(A, Q) {
            return this.request({
                method: "resources/subscribe",
                params: A
            }, Yh, Q)
        }
        async unsubscribeResource(A, Q) {
            return this.request({
                method: "resources/unsubscribe",
                params: A
            }, Yh, Q)
        }
        async callTool(A, Q = sT, B) {
            let G = await this.request({
                    method: "tools/call",
                    params: A
                }, Q, B),
                Z = this.getToolOutputValidator(A.name);
            if (Z) {
                if (!G.structuredContent && !G.isError) throw new yE(kE.InvalidRequest, `Tool ${A.name} has an output schema but did not return structured content`);
                if (G.structuredContent) try {
                    if (!Z(G.structuredContent)) throw new yE(kE.InvalidParams, `Structured content does not match the tool's output schema: ${this._ajv.errorsText(Z.errors)}`)
                } catch (I) {
                    if (I instanceof yE) throw I;
                    throw new yE(kE.InvalidParams, `Failed to validate structured content: ${I instanceof Error?I.message:String(I)}`)
                }
            }
            return G
        }
        cacheToolOutputSchemas(A) {
            this._cachedToolOutputValidators.clear();
            for (let Q of A)
                if (Q.outputSchema) try {
                    let B = this._ajv.compile(Q.outputSchema);
                    this._cachedToolOutputValidators.set(Q.name, B)
                } catch (B) {}
        }
        getToolOutputValidator(A) {
            return this._cachedToolOutputValidators.get(A)
        }
        async listTools(A, Q) {
            let B = await this.request({
                method: "tools/list",
                params: A
            }, TLA, Q);
            return this.cacheToolOutputSchemas(B.tools), B
        }
        async sendRootsListChanged() {
            return this.notification({
                method: "notifications/roots/list_changed"
            })
        }
    }
});
class SLA {
    append(A) {
        this._buffer = this._buffer ? Buffer.concat([this._buffer, A]) : A
    }
    readMessage() {
        if (!this._buffer) return null;
        let A = this._buffer.indexOf(`
`);
        if (A === -1) return null;
        let Q = this._buffer.toString("utf8", 0, A).replace(/\r$/, "");
        return this._buffer = this._buffer.subarray(A + 1), K35(Q)
    }
    clear() {
        this._buffer = void 0
    }
}

function K35(A) {
    return Rk.parse(JSON.parse(A))
}

function rQ1(A) {
    return JSON.stringify(A) + `
`
}
var ZA0 = L(() => {
    PD()
});
import oQ1 from "node:process";
import {
    PassThrough as D35
} from "node:stream";

function C35() {
    let A = {};
    for (let Q of H35) {
        let B = oQ1.env[Q];
        if (B === void 0) continue;
        if (B.startsWith("()")) continue;
        A[Q] = B
    }
    return A
}
class IA0 {
    constructor(A) {
        if (this._abortController = new AbortController, this._readBuffer = new SLA, this._stderrStream = null, this._serverParams = A, A.stderr === "pipe" || A.stderr === "overlapped") this._stderrStream = new D35
    }
    async start() {
        if (this._process) throw Error("StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        return new Promise((A, Q) => {
            var B, G, Z, I, Y;
            if (this._process = S82.default(this._serverParams.command, (B = this._serverParams.args) !== null && B !== void 0 ? B : [], {
                    env: {
                        ...C35(),
                        ...this._serverParams.env
                    },
                    stdio: ["pipe", "pipe", (G = this._serverParams.stderr) !== null && G !== void 0 ? G : "inherit"],
                    shell: !1,
                    signal: this._abortController.signal,
                    windowsHide: oQ1.platform === "win32" && E35(),
                    cwd: this._serverParams.cwd
                }), this._process.on("error", (J) => {
                    var W, X;
                    if (J.name === "AbortError") {
                        (W = this.onclose) === null || W === void 0 || W.call(this);
                        return
                    }
                    Q(J), (X = this.onerror) === null || X === void 0 || X.call(this, J)
                }), this._process.on("spawn", () => {
                    A()
                }), this._process.on("close", (J) => {
                    var W;
                    this._process = void 0, (W = this.onclose) === null || W === void 0 || W.call(this)
                }), (Z = this._process.stdin) === null || Z === void 0 || Z.on("error", (J) => {
                    var W;
                    (W = this.onerror) === null || W === void 0 || W.call(this, J)
                }), (I = this._process.stdout) === null || I === void 0 || I.on("data", (J) => {
                    this._readBuffer.append(J), this.processReadBuffer()
                }), (Y = this._process.stdout) === null || Y === void 0 || Y.on("error", (J) => {
                    var W;
                    (W = this.onerror) === null || W === void 0 || W.call(this, J)
                }), this._stderrStream && this._process.stderr) this._process.stderr.pipe(this._stderrStream)
        })
    }
    get stderr() {
        var A, Q;
        if (this._stderrStream) return this._stderrStream;
        return (Q = (A = this._process) === null || A === void 0 ? void 0 : A.stderr) !== null && Q !== void 0 ? Q : null
    }
    get pid() {
        var A, Q;
        return (Q = (A = this._process) === null || A === void 0 ? void 0 : A.pid) !== null && Q !== void 0 ? Q : null
    }
    processReadBuffer() {
        var A, Q;
        while (!0) try {
            let B = this._readBuffer.readMessage();
            if (B === null) break;
            (A = this.onmessage) === null || A === void 0 || A.call(this, B)
        } catch (B) {
            (Q = this.onerror) === null || Q === void 0 || Q.call(this, B)
        }
    }
    async close() {
        this._abortController.abort(), this._process = void 0, this._readBuffer.clear()
    }
    send(A) {
        return new Promise((Q) => {
            var B;
            if (!((B = this._process) === null || B === void 0 ? void 0 : B.stdin)) throw Error("Not connected");
            let G = rQ1(A);
            if (this._process.stdin.write(G)) Q();
            else this._process.stdin.once("drain", Q)
        })
    }
}

function E35() {
    return "type" in oQ1
}
var S82, H35;
var _82 = L(() => {
    ZA0();
    S82 = GA(nD1(), 1), H35 = oQ1.platform === "win32" ? ["APPDATA", "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA", "PATH", "PROCESSOR_ARCHITECTURE", "SYSTEMDRIVE", "SYSTEMROOT", "TEMP", "USERNAME", "USERPROFILE", "PROGRAMFILES"] : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"]
});

function YA0(A) {}

function tQ1(A) {
    if (typeof A == "function") throw TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    let {
        onEvent: Q = YA0,
        onError: B = YA0,
        onRetry: G = YA0,
        onComment: Z
    } = A, I = "", Y = !0, J, W = "", X = "";

    function F(C) {
        let E = Y ? C.replace(/^\xEF\xBB\xBF/, "") : C,
            [z, w] = z35(`${I}${E}`);
        for (let N of z) V(N);
        I = w, Y = !1
    }

    function V(C) {
        if (C === "") {
            D();
            return
        }
        if (C.startsWith(":")) {
            Z && Z(C.slice(C.startsWith(": ") ? 2 : 1));
            return
        }
        let E = C.indexOf(":");
        if (E !== -1) {
            let z = C.slice(0, E),
                w = C[E + 1] === " " ? 2 : 1,
                N = C.slice(E + w);
            K(z, N, C);
            return
        }
        K(C, "", C)
    }

    function K(C, E, z) {
        switch (C) {
            case "event":
                X = E;
                break;
            case "data":
                W = `${W}${E}
`;
                break;
            case "id":
                J = E.includes("\x00") ? void 0 : E;
                break;
            case "retry":
                /^\d+$/.test(E) ? G(parseInt(E, 10)) : B(new JA0(`Invalid \`retry\` value: "${E}"`, {
                    type: "invalid-retry",
                    value: E,
                    line: z
                }));
                break;
            default:
                B(new JA0(`Unknown field "${C.length>20?`${C.slice(0,20)}…`:C}"`, {
                    type: "unknown-field",
                    field: C,
                    value: E,
                    line: z
                }));
                break
        }
    }

    function D() {
        W.length > 0 && Q({
            id: J,
            event: X || void 0,
            data: W.endsWith(`
`) ? W.slice(0, -1) : W
        }), J = void 0, W = "", X = ""
    }

    function H(C = {}) {
        I && C.consume && V(I), Y = !0, J = void 0, W = "", X = "", I = ""
    }
    return {
        feed: F,
        reset: H
    }
}

function z35(A) {
    let Q = [],
        B = "",
        G = 0;
    for (; G < A.length;) {
        let Z = A.indexOf("\r", G),
            I = A.indexOf(`
`, G),
            Y = -1;
        if (Z !== -1 && I !== -1 ? Y = Math.min(Z, I) : Z !== -1 ? Y = Z : I !== -1 && (Y = I), Y === -1) {
            B = A.slice(G);
            break
        } else {
            let J = A.slice(G, Y);
            Q.push(J), G = Y + 1, A[G - 1] === "\r" && A[G] === `
` && G++
        }
    }
    return [Q, B]
}
var JA0;
var WA0 = L(() => {
    JA0 = class JA0 extends Error {
        constructor(A, Q) {
            super(A), this.name = "ParseError", this.type = Q.type, this.field = Q.field, this.value = Q.value, this.line = Q.line
        }
    }
});

function U35(A) {
    let Q = globalThis.DOMException;
    return typeof Q == "function" ? new Q(A, "SyntaxError") : SyntaxError(A)
}

function FA0(A) {
    return A instanceof Error ? "errors" in A && Array.isArray(A.errors) ? A.errors.map(FA0).join(", ") : ("cause" in A) && A.cause instanceof Error ? `${A}: ${FA0(A.cause)}` : A.message : `${A}`
}

function k82(A) {
    return {
        type: A.type,
        message: A.message,
        code: A.code,
        defaultPrevented: A.defaultPrevented,
        cancelable: A.cancelable,
        timeStamp: A.timeStamp
    }
}

function $35() {
    let A = "document" in globalThis ? globalThis.document : void 0;
    return A && typeof A == "object" && "baseURI" in A && typeof A.baseURI == "string" ? A.baseURI : void 0
}
var XA0, x82 = (A) => {
        throw TypeError(A)
    },
    UA0 = (A, Q, B) => Q.has(A) || x82("Cannot " + B),
    B5 = (A, Q, B) => (UA0(A, Q, "read from private field"), B ? B.call(A) : Q.get(A)),
    jF = (A, Q, B) => Q.has(A) ? x82("Cannot add the same private member more than once") : Q instanceof WeakSet ? Q.add(A) : Q.set(A, B),
    JY = (A, Q, B, G) => (UA0(A, Q, "write to private field"), Q.set(A, B), B),
    Jh = (A, Q, B) => (UA0(A, Q, "access private method"), B),
    dU, oAA, PIA, eQ1, AB1, yLA, _IA, xLA, Bi, jIA, kIA, SIA, _LA, rT, VA0, KA0, DA0, y82, HA0, CA0, kLA, EA0, zA0, yIA;
var v82 = L(() => {
    WA0();
    XA0 = class XA0 extends Event {
        constructor(A, Q) {
            var B, G;
            super(A), this.code = (B = Q == null ? void 0 : Q.code) != null ? B : void 0, this.message = (G = Q == null ? void 0 : Q.message) != null ? G : void 0
        } [Symbol.for("nodejs.util.inspect.custom")](A, Q, B) {
            return B(k82(this), Q)
        } [Symbol.for("Deno.customInspect")](A, Q) {
            return A(k82(this), Q)
        }
    };
    yIA = class yIA extends EventTarget {
        constructor(A, Q) {
            var B, G;
            super(), jF(this, rT), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, jF(this, dU), jF(this, oAA), jF(this, PIA), jF(this, eQ1), jF(this, AB1), jF(this, yLA), jF(this, _IA), jF(this, xLA, null), jF(this, Bi), jF(this, jIA), jF(this, kIA, null), jF(this, SIA, null), jF(this, _LA, null), jF(this, KA0, async (Z) => {
                var I;
                B5(this, jIA).reset();
                let {
                    body: Y,
                    redirected: J,
                    status: W,
                    headers: X
                } = Z;
                if (W === 204) {
                    Jh(this, rT, kLA).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
                    return
                }
                if (J ? JY(this, PIA, new URL(Z.url)) : JY(this, PIA, void 0), W !== 200) {
                    Jh(this, rT, kLA).call(this, `Non-200 status code (${W})`, W);
                    return
                }
                if (!(X.get("content-type") || "").startsWith("text/event-stream")) {
                    Jh(this, rT, kLA).call(this, 'Invalid content type, expected "text/event-stream"', W);
                    return
                }
                if (B5(this, dU) === this.CLOSED) return;
                JY(this, dU, this.OPEN);
                let F = new Event("open");
                if ((I = B5(this, _LA)) == null || I.call(this, F), this.dispatchEvent(F), typeof Y != "object" || !Y || !("getReader" in Y)) {
                    Jh(this, rT, kLA).call(this, "Invalid response body, expected a web ReadableStream", W), this.close();
                    return
                }
                let V = new TextDecoder,
                    K = Y.getReader(),
                    D = !0;
                do {
                    let {
                        done: H,
                        value: C
                    } = await K.read();
                    C && B5(this, jIA).feed(V.decode(C, {
                        stream: !H
                    })), H && (D = !1, B5(this, jIA).reset(), Jh(this, rT, EA0).call(this))
                } while (D)
            }), jF(this, DA0, (Z) => {
                JY(this, Bi, void 0), !(Z.name === "AbortError" || Z.type === "aborted") && Jh(this, rT, EA0).call(this, FA0(Z))
            }), jF(this, HA0, (Z) => {
                typeof Z.id == "string" && JY(this, xLA, Z.id);
                let I = new MessageEvent(Z.event || "message", {
                    data: Z.data,
                    origin: B5(this, PIA) ? B5(this, PIA).origin : B5(this, oAA).origin,
                    lastEventId: Z.id || ""
                });
                B5(this, SIA) && (!Z.event || Z.event === "message") && B5(this, SIA).call(this, I), this.dispatchEvent(I)
            }), jF(this, CA0, (Z) => {
                JY(this, yLA, Z)
            }), jF(this, zA0, () => {
                JY(this, _IA, void 0), B5(this, dU) === this.CONNECTING && Jh(this, rT, VA0).call(this)
            });
            try {
                if (A instanceof URL) JY(this, oAA, A);
                else if (typeof A == "string") JY(this, oAA, new URL(A, $35()));
                else throw Error("Invalid URL")
            } catch {
                throw U35("An invalid or illegal string was specified")
            }
            JY(this, jIA, tQ1({
                onEvent: B5(this, HA0),
                onRetry: B5(this, CA0)
            })), JY(this, dU, this.CONNECTING), JY(this, yLA, 3000), JY(this, AB1, (B = Q == null ? void 0 : Q.fetch) != null ? B : globalThis.fetch), JY(this, eQ1, (G = Q == null ? void 0 : Q.withCredentials) != null ? G : !1), Jh(this, rT, VA0).call(this)
        }
        get readyState() {
            return B5(this, dU)
        }
        get url() {
            return B5(this, oAA).href
        }
        get withCredentials() {
            return B5(this, eQ1)
        }
        get onerror() {
            return B5(this, kIA)
        }
        set onerror(A) {
            JY(this, kIA, A)
        }
        get onmessage() {
            return B5(this, SIA)
        }
        set onmessage(A) {
            JY(this, SIA, A)
        }
        get onopen() {
            return B5(this, _LA)
        }
        set onopen(A) {
            JY(this, _LA, A)
        }
        addEventListener(A, Q, B) {
            let G = Q;
            super.addEventListener(A, G, B)
        }
        removeEventListener(A, Q, B) {
            let G = Q;
            super.removeEventListener(A, G, B)
        }
        close() {
            B5(this, _IA) && clearTimeout(B5(this, _IA)), B5(this, dU) !== this.CLOSED && (B5(this, Bi) && B5(this, Bi).abort(), JY(this, dU, this.CLOSED), JY(this, Bi, void 0))
        }
    };
    dU = new WeakMap, oAA = new WeakMap, PIA = new WeakMap, eQ1 = new WeakMap, AB1 = new WeakMap, yLA = new WeakMap, _IA = new WeakMap, xLA = new WeakMap, Bi = new WeakMap, jIA = new WeakMap, kIA = new WeakMap, SIA = new WeakMap, _LA = new WeakMap, rT = new WeakSet, VA0 = function() {
        JY(this, dU, this.CONNECTING), JY(this, Bi, new AbortController), B5(this, AB1)(B5(this, oAA), Jh(this, rT, y82).call(this)).then(B5(this, KA0)).catch(B5(this, DA0))
    }, KA0 = new WeakMap, DA0 = new WeakMap, y82 = function() {
        var A;
        let Q = {
            mode: "cors",
            redirect: "follow",
            headers: {
                Accept: "text/event-stream",
                ...B5(this, xLA) ? {
                    "Last-Event-ID": B5(this, xLA)
                } : void 0
            },
            cache: "no-store",
            signal: (A = B5(this, Bi)) == null ? void 0 : A.signal
        };
        return "window" in globalThis && (Q.credentials = this.withCredentials ? "include" : "same-origin"), Q
    }, HA0 = new WeakMap, CA0 = new WeakMap, kLA = function(A, Q) {
        var B;
        B5(this, dU) !== this.CLOSED && JY(this, dU, this.CLOSED);
        let G = new XA0("error", {
            code: Q,
            message: A
        });
        (B = B5(this, kIA)) == null || B.call(this, G), this.dispatchEvent(G)
    }, EA0 = function(A, Q) {
        var B;
        if (B5(this, dU) === this.CLOSED) return;
        JY(this, dU, this.CONNECTING);
        let G = new XA0("error", {
            code: Q,
            message: A
        });
        (B = B5(this, kIA)) == null || B.call(this, G), this.dispatchEvent(G), JY(this, _IA, setTimeout(B5(this, zA0), B5(this, yLA)))
    }, zA0 = new WeakMap, yIA.CONNECTING = 0, yIA.OPEN = 1, yIA.CLOSED = 2
});
async function w35(A) {
    return (await $A0).getRandomValues(new Uint8Array(A))
}
async function q35(A) {
    let B = "",
        G = await w35(A);
    for (let Z = 0; Z < A; Z++) {
        let I = G[Z] % 66;
        B += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~" [I]
    }
    return B
}
async function N35(A) {
    return await q35(A)
}
async function L35(A) {
    let Q = await (await $A0).subtle.digest("SHA-256", new TextEncoder().encode(A));
    return btoa(String.fromCharCode(...new Uint8Array(Q))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "")
}
async function wA0(A) {
    if (!A) A = 43;
    if (A < 43 || A > 128) throw `Expected a length between 43 and 128. Received ${A}.`;
    let Q = await N35(A),
        B = await L35(Q);
    return {
        code_verifier: Q,
        code_challenge: B
    }