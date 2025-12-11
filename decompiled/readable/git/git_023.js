/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_023.js
 * 处理时间: 2025-12-09T03:41:37.536Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 23/34
 * Lines: 273526 - 275025 (1500 lines)
 * Original file: cli.js
 */

            while (E < z)
                if (C = H[E += 1], Q.opts.strictKeywords ? typeof C == "object" && Object.keys(C).length > 0 || C === !1 : Q.util.schemaHasRules(C, Q.RULES.all)) {
                    if (D = !1, X.schema = C, X.schemaPath = Y + "[" + E + "]", X.errSchemaPath = J + "/" + E, Z += "  " + Q.validate(X) + " ", X.baseId = K, W) Z += " if (" + V + ") { ", F += "}"
                }
        }
        if (W)
            if (D) Z += " if (true) { ";
            else Z += " " + F.slice(0, -1) + " ";
        return Z
    }
});
var z42 = moduleWrapper((PMG, E42) => {
    E42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = "errs__" + I,
            H = Q.util.copy(Q),
            C = "";
        H.level++;
        var E = "valid" + H.level,
            z = J.every(function(v) {
                return Q.opts.strictKeywords ? typeof v == "object" && Object.keys(v).length > 0 || v === !1 : Q.util.schemaHasRules(v, Q.RULES.all)
            });
        if (z) {
            var w = H.baseId;
            Z += " var " + D + " = errors; var " + K + " = false;  ";
            var N = Q.compositeRule;
            Q.compositeRule = H.compositeRule = !0;
            var q = J;
            if (q) {
                var R, P = -1,
                    y = q.length - 1;
                while (P < y) R = q[P += 1], H.schema = R, H.schemaPath = W + "[" + P + "]", H.errSchemaPath = X + "/" + P, Z += "  " + Q.validate(H) + " ", H.baseId = w, Z += " " + K + " = " + K + " || " + E + "; if (!" + K + ") { ", C += "}"
            }
            if (Q.compositeRule = H.compositeRule = N, Z += " " + C + " if (!" + K + ") {   var err =   ", Q.createErrors !== !1) {
                if (Z += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: {} ", Q.opts.messages !== !1) Z += " , message: 'should match some schema in anyOf' ";
                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                Z += " } "
            } else Z += " {} ";
            if (Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !Q.compositeRule && F)
                if (Q.async) Z += " throw new ValidationError(vErrors); ";
                else Z += " validate.errors = vErrors; return false; ";
            if (Z += " } else {  errors = " + D + "; if (vErrors !== null) { if (" + D + ") vErrors.length = " + D + "; else vErrors = null; } ", Q.opts.allErrors) Z += " } "
        } else if (F) Z += " if (true) { ";
        return Z
    }
});
var $42 = moduleWrapper((jMG, U42) => {
    U42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.schema[B],
            Y = Q.errSchemaPath + "/" + B,
            J = !Q.opts.allErrors,
            W = Q.util.toQuotedString(I);
        if (Q.opts.$comment === !0) Z += " console.log(" + W + ");";
        else if (typeof Q.opts.$comment == "function") Z += " self._opts.$comment(" + W + ", " + Q.util.toQuotedString(Y) + ", validate.root.schema);";
        return Z
    }
});
var q42 = moduleWrapper((SMG, w42) => {
    w42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = Q.opts.$data && J && J.$data,
            H;
        if (D) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", H = "schema" + I;
        else H = J;
        if (!D) Z += " var schema" + I + " = validate.schema" + W + ";";
        Z += "var " + K + " = equal(" + V + ", schema" + I + "); if (!" + K + ") {   ";
        var C = C || [];
        if (C.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: 'const' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { allowedValue: schema" + I + " } ", Q.opts.messages !== !1) Z += " , message: 'should be equal to constant' ";
            if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
            Z += " } "
        } else Z += " {} ";
        var E = Z;
        if (Z = C.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + E + "]); ";
            else Z += " validate.errors = [" + E + "]; return false; ";
        else Z += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += " }", F) Z += " else { ";
        return Z
    }
});
var L42 = moduleWrapper((_MG, N42) => {
    N42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = "errs__" + I,
            H = Q.util.copy(Q),
            C = "";
        H.level++;
        var E = "valid" + H.level,
            z = "i" + I,
            w = H.dataLevel = Q.dataLevel + 1,
            N = "data" + w,
            q = Q.baseId,
            R = Q.opts.strictKeywords ? typeof J == "object" && Object.keys(J).length > 0 || J === !1 : Q.util.schemaHasRules(J, Q.RULES.all);
        if (Z += "var " + D + " = errors;var " + K + ";", R) {
            var P = Q.compositeRule;
            Q.compositeRule = H.compositeRule = !0, H.schema = J, H.schemaPath = W, H.errSchemaPath = X, Z += " var " + E + " = false; for (var " + z + " = 0; " + z + " < " + V + ".length; " + z + "++) { ", H.errorPath = Q.util.getPathExpr(Q.errorPath, z, Q.opts.jsonPointers, !0);
            var y = V + "[" + z + "]";
            H.dataPathArr[w] = z;
            var v = Q.validate(H);
            if (H.baseId = q, Q.util.varOccurences(v, N) < 2) Z += " " + Q.util.varReplace(v, N, y) + " ";
            else Z += " var " + N + " = " + y + "; " + v + " ";
            Z += " if (" + E + ") break; }  ", Q.compositeRule = H.compositeRule = P, Z += " " + C + " if (!" + E + ") {"
        } else Z += " if (" + V + ".length == 0) {";
        var x = x || [];
        if (x.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: 'contains' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: {} ", Q.opts.messages !== !1) Z += " , message: 'should contain a valid item' ";
            if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
            Z += " } "
        } else Z += " {} ";
        var p = Z;
        if (Z = x.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + p + "]); ";
            else Z += " validate.errors = [" + p + "]; return false; ";
        else Z += " var err = " + p + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += " } else { ", R) Z += "  errors = " + D + "; if (vErrors !== null) { if (" + D + ") vErrors.length = " + D + "; else vErrors = null; } ";
        if (Q.opts.allErrors) Z += " } ";
        return Z
    }
});
var O42 = moduleWrapper((kMG, M42) => {
    M42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "errs__" + I,
            D = Q.util.copy(Q),
            H = "";
        D.level++;
        var C = "valid" + D.level,
            E = {},
            z = {},
            w = Q.opts.ownProperties;
        for (P in J) {
            if (P == "__proto__") continue;
            var N = J[P],
                q = Array.isArray(N) ? z : E;
            q[P] = N
        }
        Z += "var " + K + " = errors;";
        var R = Q.errorPath;
        Z += "var missing" + I + ";";
        for (var P in z)
            if (q = z[P], q.length) {
                if (Z += " if ( " + V + Q.util.getProperty(P) + " !== undefined ", w) Z += " && Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(P) + "') ";
                if (F) {
                    Z += " && ( ";
                    var y = q;
                    if (y) {
                        var v, x = -1,
                            p = y.length - 1;
                        while (x < p) {
                            if (v = y[x += 1], x) Z += " || ";
                            var u = Q.util.getProperty(v),
                                o = V + u;
                            if (Z += " ( ( " + o + " === undefined ", w) Z += " || ! Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(v) + "') ";
                            Z += ") && (missing" + I + " = " + Q.util.toQuotedString(Q.opts.jsonPointers ? v : u) + ") ) "
                        }
                    }
                    Z += ")) {  ";
                    var l = "missing" + I,
                        k = "' + " + l + " + '";
                    if (Q.opts._errorDataPathProperty) Q.errorPath = Q.opts.jsonPointers ? Q.util.getPathExpr(R, l, !0) : R + " + " + l;
                    var d = d || [];
                    if (d.push(Z), Z = "", Q.createErrors !== !1) {
                        if (Z += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { property: '" + Q.util.escapeQuotes(P) + "', missingProperty: '" + k + "', depsCount: " + q.length + ", deps: '" + Q.util.escapeQuotes(q.length == 1 ? q[0] : q.join(", ")) + "' } ", Q.opts.messages !== !1) {
                            if (Z += " , message: 'should have ", q.length == 1) Z += "property " + Q.util.escapeQuotes(q[0]);
                            else Z += "properties " + Q.util.escapeQuotes(q.join(", "));
                            Z += " when property " + Q.util.escapeQuotes(P) + " is present' "
                        }
                        if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                        Z += " } "
                    } else Z += " {} ";
                    var QA = Z;
                    if (Z = d.pop(), !Q.compositeRule && F)
                        if (Q.async) Z += " throw new ValidationError([" + QA + "]); ";
                        else Z += " validate.errors = [" + QA + "]; return false; ";
                    else Z += " var err = " + QA + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
                } else {
                    Z += " ) { ";
                    var IA = q;
                    if (IA) {
                        var v, HA = -1,
                            wA = IA.length - 1;
                        while (HA < wA) {
                            v = IA[HA += 1];
                            var u = Q.util.getProperty(v),
                                k = Q.util.escapeQuotes(v),
                                o = V + u;
                            if (Q.opts._errorDataPathProperty) Q.errorPath = Q.util.getPath(R, v, Q.opts.jsonPointers);
                            if (Z += " if ( " + o + " === undefined ", w) Z += " || ! Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(v) + "') ";
                            if (Z += ") {  var err =   ", Q.createErrors !== !1) {
                                if (Z += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { property: '" + Q.util.escapeQuotes(P) + "', missingProperty: '" + k + "', depsCount: " + q.length + ", deps: '" + Q.util.escapeQuotes(q.length == 1 ? q[0] : q.join(", ")) + "' } ", Q.opts.messages !== !1) {
                                    if (Z += " , message: 'should have ", q.length == 1) Z += "property " + Q.util.escapeQuotes(q[0]);
                                    else Z += "properties " + Q.util.escapeQuotes(q.join(", "));
                                    Z += " when property " + Q.util.escapeQuotes(P) + " is present' "
                                }
                                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                                Z += " } "
                            } else Z += " {} ";
                            Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                        }
                    }
                }
                if (Z += " }   ", F) H += "}", Z += " else { "
            } Q.errorPath = R;
        var KA = D.baseId;
        for (var P in E) {
            var N = E[P];
            if (Q.opts.strictKeywords ? typeof N == "object" && Object.keys(N).length > 0 || N === !1 : Q.util.schemaHasRules(N, Q.RULES.all)) {
                if (Z += " " + C + " = true; if ( " + V + Q.util.getProperty(P) + " !== undefined ", w) Z += " && Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(P) + "') ";
                if (Z += ") { ", D.schema = N, D.schemaPath = W + Q.util.getProperty(P), D.errSchemaPath = X + "/" + Q.util.escapeFragment(P), Z += "  " + Q.validate(D) + " ", D.baseId = KA, Z += " }  ", F) Z += " if (" + C + ") { ", H += "}"
            }
        }
        if (F) Z += "   " + H + " if (" + K + " == errors) {";
        return Z
    }
});
var T42 = moduleWrapper((yMG, R42) => {
    R42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = Q.opts.$data && J && J.$data,
            H;
        if (D) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", H = "schema" + I;
        else H = J;
        var C = "i" + I,
            E = "schema" + I;
        if (!D) Z += " var " + E + " = validate.schema" + W + ";";
        if (Z += "var " + K + ";", D) Z += " if (schema" + I + " === undefined) " + K + " = true; else if (!Array.isArray(schema" + I + ")) " + K + " = false; else {";
        if (Z += "" + K + " = false;for (var " + C + "=0; " + C + "<" + E + ".length; " + C + "++) if (equal(" + V + ", " + E + "[" + C + "])) { " + K + " = true; break; }", D) Z += "  }  ";
        Z += " if (!" + K + ") {   ";
        var z = z || [];
        if (z.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: 'enum' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { allowedValues: schema" + I + " } ", Q.opts.messages !== !1) Z += " , message: 'should be equal to one of the allowed values' ";
            if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
            Z += " } "
        } else Z += " {} ";
        var w = Z;
        if (Z = z.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + w + "]); ";
            else Z += " validate.errors = [" + w + "]; return false; ";
        else Z += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += " }", F) Z += " else { ";
        return Z
    }
});
var j42 = moduleWrapper((xMG, P42) => {
    P42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || "");
        if (Q.opts.format === !1) {
            if (F) Z += " if (true) { ";
            return Z
        }
        var K = Q.opts.$data && J && J.$data,
            D;
        if (K) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", D = "schema" + I;
        else D = J;
        var H = Q.opts.unknownFormats,
            C = Array.isArray(H);
        if (K) {
            var E = "format" + I,
                z = "isObject" + I,
                w = "formatType" + I;
            if (Z += " var " + E + " = formats[" + D + "]; var " + z + " = typeof " + E + " == 'object' && !(" + E + " instanceof RegExp) && " + E + ".validate; var " + w + " = " + z + " && " + E + ".type || 'string'; if (" + z + ") { ", Q.async) Z += " var async" + I + " = " + E + ".async; ";
            if (Z += " " + E + " = " + E + ".validate; } if (  ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'string') || ";
            if (Z += " (", H != "ignore") {
                if (Z += " (" + D + " && !" + E + " ", C) Z += " && self._opts.unknownFormats.indexOf(" + D + ") == -1 ";
                Z += ") || "
            }
            if (Z += " (" + E + " && " + w + " == '" + G + "' && !(typeof " + E + " == 'function' ? ", Q.async) Z += " (async" + I + " ? await " + E + "(" + V + ") : " + E + "(" + V + ")) ";
            else Z += " " + E + "(" + V + ") ";
            Z += " : " + E + ".test(" + V + "))))) {"
        } else {
            var E = Q.formats[J];
            if (!E)
                if (H == "ignore") {
                    if (Q.logger.warn('unknown format "' + J + '" ignored in schema at path "' + Q.errSchemaPath + '"'), F) Z += " if (true) { ";
                    return Z
                } else if (C && H.indexOf(J) >= 0) {
                if (F) Z += " if (true) { ";
                return Z
            } else throw Error('unknown format "' + J + '" is used in schema at path "' + Q.errSchemaPath + '"');
            var z = typeof E == "object" && !(E instanceof RegExp) && E.validate,
                w = z && E.type || "string";
            if (z) {
                var N = E.async === !0;
                E = E.validate
            }
            if (w != G) {
                if (F) Z += " if (true) { ";
                return Z
            }
            if (N) {
                if (!Q.async) throw Error("async format in sync schema");
                var q = "formats" + Q.util.getProperty(J) + ".validate";
                Z += " if (!(await " + q + "(" + V + "))) { "
            } else {
                Z += " if (! ";
                var q = "formats" + Q.util.getProperty(J);
                if (z) q += ".validate";
                if (typeof E == "function") Z += " " + q + "(" + V + ") ";
                else Z += " " + q + ".test(" + V + ") ";
                Z += ") { "
            }
        }
        var R = R || [];
        if (R.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: 'format' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { format:  ", K) Z += "" + D;
            else Z += "" + Q.util.toQuotedString(J);
            if (Z += "  } ", Q.opts.messages !== !1) {
                if (Z += ` , message: 'should match format "`, K) Z += "' + " + D + " + '";
                else Z += "" + Q.util.escapeQuotes(J);
                Z += `"' `
            }
            if (Q.opts.verbose) {
                if (Z += " , schema:  ", K) Z += "validate.schema" + W;
                else Z += "" + Q.util.toQuotedString(J);
                Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
            }
            Z += " } "
        } else Z += " {} ";
        var P = Z;
        if (Z = R.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + P + "]); ";
            else Z += " validate.errors = [" + P + "]; return false; ";
        else Z += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += " } ", F) Z += " else { ";
        return Z
    }
});
var _42 = moduleWrapper((vMG, S42) => {
    S42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = "errs__" + I,
            H = Q.util.copy(Q);
        H.level++;
        var C = "valid" + H.level,
            E = Q.schema.then,
            z = Q.schema.else,
            w = E !== void 0 && (Q.opts.strictKeywords ? typeof E == "object" && Object.keys(E).length > 0 || E === !1 : Q.util.schemaHasRules(E, Q.RULES.all)),
            N = z !== void 0 && (Q.opts.strictKeywords ? typeof z == "object" && Object.keys(z).length > 0 || z === !1 : Q.util.schemaHasRules(z, Q.RULES.all)),
            q = H.baseId;
        if (w || N) {
            var R;
            H.createErrors = !1, H.schema = J, H.schemaPath = W, H.errSchemaPath = X, Z += " var " + D + " = errors; var " + K + " = true;  ";
            var P = Q.compositeRule;
            if (Q.compositeRule = H.compositeRule = !0, Z += "  " + Q.validate(H) + " ", H.baseId = q, H.createErrors = !0, Z += "  errors = " + D + "; if (vErrors !== null) { if (" + D + ") vErrors.length = " + D + "; else vErrors = null; }  ", Q.compositeRule = H.compositeRule = P, w) {
                if (Z += " if (" + C + ") {  ", H.schema = Q.schema.then, H.schemaPath = Q.schemaPath + ".then", H.errSchemaPath = Q.errSchemaPath + "/then", Z += "  " + Q.validate(H) + " ", H.baseId = q, Z += " " + K + " = " + C + "; ", w && N) R = "ifClause" + I, Z += " var " + R + " = 'then'; ";
                else R = "'then'";
                if (Z += " } ", N) Z += " else { "
            } else Z += " if (!" + C + ") { ";
            if (N) {
                if (H.schema = Q.schema.else, H.schemaPath = Q.schemaPath + ".else", H.errSchemaPath = Q.errSchemaPath + "/else", Z += "  " + Q.validate(H) + " ", H.baseId = q, Z += " " + K + " = " + C + "; ", w && N) R = "ifClause" + I, Z += " var " + R + " = 'else'; ";
                else R = "'else'";
                Z += " } "
            }
            if (Z += " if (!" + K + ") {   var err =   ", Q.createErrors !== !1) {
                if (Z += " { keyword: 'if' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { failingKeyword: " + R + " } ", Q.opts.messages !== !1) Z += ` , message: 'should match "' + ` + R + ` + '" schema' `;
                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                Z += " } "
            } else Z += " {} ";
            if (Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !Q.compositeRule && F)
                if (Q.async) Z += " throw new ValidationError(vErrors); ";
                else Z += " validate.errors = vErrors; return false; ";
            if (Z += " }   ", F) Z += " else { "
        } else if (F) Z += " if (true) { ";
        return Z
    }
});
var y42 = moduleWrapper((bMG, k42) => {
    k42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = "errs__" + I,
            H = Q.util.copy(Q),
            C = "";
        H.level++;
        var E = "valid" + H.level,
            z = "i" + I,
            w = H.dataLevel = Q.dataLevel + 1,
            N = "data" + w,
            q = Q.baseId;
        if (Z += "var " + D + " = errors;var " + K + ";", Array.isArray(J)) {
            var R = Q.schema.additionalItems;
            if (R === !1) {
                Z += " " + K + " = " + V + ".length <= " + J.length + "; ";
                var P = X;
                X = Q.errSchemaPath + "/additionalItems", Z += "  if (!" + K + ") {   ";
                var y = y || [];
                if (y.push(Z), Z = "", Q.createErrors !== !1) {
                    if (Z += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { limit: " + J.length + " } ", Q.opts.messages !== !1) Z += " , message: 'should NOT have more than " + J.length + " items' ";
                    if (Q.opts.verbose) Z += " , schema: false , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                    Z += " } "
                } else Z += " {} ";
                var v = Z;
                if (Z = y.pop(), !Q.compositeRule && F)
                    if (Q.async) Z += " throw new ValidationError([" + v + "]); ";
                    else Z += " validate.errors = [" + v + "]; return false; ";
                else Z += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                if (Z += " } ", X = P, F) C += "}", Z += " else { "
            }
            var x = J;
            if (x) {
                var p, u = -1,
                    o = x.length - 1;
                while (u < o)
                    if (p = x[u += 1], Q.opts.strictKeywords ? typeof p == "object" && Object.keys(p).length > 0 || p === !1 : Q.util.schemaHasRules(p, Q.RULES.all)) {
                        Z += " " + E + " = true; if (" + V + ".length > " + u + ") { ";
                        var l = V + "[" + u + "]";
                        H.schema = p, H.schemaPath = W + "[" + u + "]", H.errSchemaPath = X + "/" + u, H.errorPath = Q.util.getPathExpr(Q.errorPath, u, Q.opts.jsonPointers, !0), H.dataPathArr[w] = u;
                        var k = Q.validate(H);
                        if (H.baseId = q, Q.util.varOccurences(k, N) < 2) Z += " " + Q.util.varReplace(k, N, l) + " ";
                        else Z += " var " + N + " = " + l + "; " + k + " ";
                        if (Z += " }  ", F) Z += " if (" + E + ") { ", C += "}"
                    }
            }
            if (typeof R == "object" && (Q.opts.strictKeywords ? typeof R == "object" && Object.keys(R).length > 0 || R === !1 : Q.util.schemaHasRules(R, Q.RULES.all))) {
                H.schema = R, H.schemaPath = Q.schemaPath + ".additionalItems", H.errSchemaPath = Q.errSchemaPath + "/additionalItems", Z += " " + E + " = true; if (" + V + ".length > " + J.length + ") {  for (var " + z + " = " + J.length + "; " + z + " < " + V + ".length; " + z + "++) { ", H.errorPath = Q.util.getPathExpr(Q.errorPath, z, Q.opts.jsonPointers, !0);
                var l = V + "[" + z + "]";
                H.dataPathArr[w] = z;
                var k = Q.validate(H);
                if (H.baseId = q, Q.util.varOccurences(k, N) < 2) Z += " " + Q.util.varReplace(k, N, l) + " ";
                else Z += " var " + N + " = " + l + "; " + k + " ";
                if (F) Z += " if (!" + E + ") break; ";
                if (Z += " } }  ", F) Z += " if (" + E + ") { ", C += "}"
            }
        } else if (Q.opts.strictKeywords ? typeof J == "object" && Object.keys(J).length > 0 || J === !1 : Q.util.schemaHasRules(J, Q.RULES.all)) {
            H.schema = J, H.schemaPath = W, H.errSchemaPath = X, Z += "  for (var " + z + " = 0; " + z + " < " + V + ".length; " + z + "++) { ", H.errorPath = Q.util.getPathExpr(Q.errorPath, z, Q.opts.jsonPointers, !0);
            var l = V + "[" + z + "]";
            H.dataPathArr[w] = z;
            var k = Q.validate(H);
            if (H.baseId = q, Q.util.varOccurences(k, N) < 2) Z += " " + Q.util.varReplace(k, N, l) + " ";
            else Z += " var " + N + " = " + l + "; " + k + " ";
            if (F) Z += " if (!" + E + ") break; ";
            Z += " }"
        }
        if (F) Z += " " + C + " if (" + D + " == errors) {";
        return Z
    }
});
var re1 = moduleWrapper((fMG, x42) => {
    x42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            q, V = "data" + (Y || ""),
            K = Q.opts.$data && J && J.$data,
            D;
        if (K) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", D = "schema" + I;
        else D = J;
        var H = B == "maximum",
            C = H ? "exclusiveMaximum" : "exclusiveMinimum",
            E = Q.schema[C],
            z = Q.opts.$data && E && E.$data,
            w = H ? "<" : ">",
            N = H ? ">" : "<",
            q = void 0;
        if (!(K || typeof J == "number" || J === void 0)) throw Error(B + " must be number");
        if (!(z || E === void 0 || typeof E == "number" || typeof E == "boolean")) throw Error(C + " must be number or boolean");
        if (z) {
            var R = Q.util.getData(E.$data, Y, Q.dataPathArr),
                P = "exclusive" + I,
                y = "exclType" + I,
                v = "exclIsNumber" + I,
                x = "op" + I,
                p = "' + " + x + " + '";
            Z += " var schemaExcl" + I + " = " + R + "; ", R = "schemaExcl" + I, Z += " var " + P + "; var " + y + " = typeof " + R + "; if (" + y + " != 'boolean' && " + y + " != 'undefined' && " + y + " != 'number') { ";
            var q = C,
                u = u || [];
            if (u.push(Z), Z = "", Q.createErrors !== !1) {
                if (Z += " { keyword: '" + (q || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: {} ", Q.opts.messages !== !1) Z += " , message: '" + C + " should be boolean' ";
                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                Z += " } "
            } else Z += " {} ";
            var o = Z;
            if (Z = u.pop(), !Q.compositeRule && F)
                if (Q.async) Z += " throw new ValidationError([" + o + "]); ";
                else Z += " validate.errors = [" + o + "]; return false; ";
            else Z += " var err = " + o + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            if (Z += " } else if ( ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'number') || ";
            if (Z += " " + y + " == 'number' ? ( (" + P + " = " + D + " === undefined || " + R + " " + w + "= " + D + ") ? " + V + " " + N + "= " + R + " : " + V + " " + N + " " + D + " ) : ( (" + P + " = " + R + " === true) ? " + V + " " + N + "= " + D + " : " + V + " " + N + " " + D + " ) || " + V + " !== " + V + ") { var op" + I + " = " + P + " ? '" + w + "' : '" + w + "='; ", J === void 0) q = C, X = Q.errSchemaPath + "/" + C, D = R, K = z
        } else {
            var v = typeof E == "number",
                p = w;
            if (v && K) {
                var x = "'" + p + "'";
                if (Z += " if ( ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'number') || ";
                Z += " ( " + D + " === undefined || " + E + " " + w + "= " + D + " ? " + V + " " + N + "= " + E + " : " + V + " " + N + " " + D + " ) || " + V + " !== " + V + ") { "
            } else {
                if (v && J === void 0) P = !0, q = C, X = Q.errSchemaPath + "/" + C, D = E, N += "=";
                else {
                    if (v) D = Math[H ? "min" : "max"](E, J);
                    if (E === (v ? D : !0)) P = !0, q = C, X = Q.errSchemaPath + "/" + C, N += "=";
                    else P = !1, p += "="
                }
                var x = "'" + p + "'";
                if (Z += " if ( ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'number') || ";
                Z += " " + V + " " + N + " " + D + " || " + V + " !== " + V + ") { "
            }
        }
        q = q || B;
        var u = u || [];
        if (u.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: '" + (q || "_limit") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { comparison: " + x + ", limit: " + D + ", exclusive: " + P + " } ", Q.opts.messages !== !1)
                if (Z += " , message: 'should be " + p + " ", K) Z += "' + " + D;
                else Z += "" + D + "'";
            if (Q.opts.verbose) {
                if (Z += " , schema:  ", K) Z += "validate.schema" + W;
                else Z += "" + J;
                Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
            }
            Z += " } "
        } else Z += " {} ";
        var o = Z;
        if (Z = u.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + o + "]); ";
            else Z += " validate.errors = [" + o + "]; return false; ";
        else Z += " var err = " + o + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += " } ", F) Z += " else { ";
        return Z
    }
});
var oe1 = moduleWrapper((hMG, v42) => {
    v42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            C, V = "data" + (Y || ""),
            K = Q.opts.$data && J && J.$data,
            D;
        if (K) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", D = "schema" + I;
        else D = J;
        if (!(K || typeof J == "number")) throw Error(B + " must be number");
        var H = B == "maxItems" ? ">" : "<";
        if (Z += "if ( ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'number') || ";
        Z += " " + V + ".length " + H + " " + D + ") { ";
        var C = B,
            E = E || [];
        if (E.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: '" + (C || "_limitItems") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { limit: " + D + " } ", Q.opts.messages !== !1) {
                if (Z += " , message: 'should NOT have ", B == "maxItems") Z += "more";
                else Z += "fewer";
                if (Z += " than ", K) Z += "' + " + D + " + '";
                else Z += "" + J;
                Z += " items' "
            }
            if (Q.opts.verbose) {
                if (Z += " , schema:  ", K) Z += "validate.schema" + W;
                else Z += "" + J;
                Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
            }
            Z += " } "
        } else Z += " {} ";
        var z = Z;
        if (Z = E.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
            else Z += " validate.errors = [" + z + "]; return false; ";
        else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += "} ", F) Z += " else { ";
        return Z
    }
});
var te1 = moduleWrapper((gMG, b42) => {
    b42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            C, V = "data" + (Y || ""),
            K = Q.opts.$data && J && J.$data,
            D;
        if (K) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", D = "schema" + I;
        else D = J;
        if (!(K || typeof J == "number")) throw Error(B + " must be number");
        var H = B == "maxLength" ? ">" : "<";
        if (Z += "if ( ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'number') || ";
        if (Q.opts.unicode === !1) Z += " " + V + ".length ";
        else Z += " ucs2length(" + V + ") ";
        Z += " " + H + " " + D + ") { ";
        var C = B,
            E = E || [];
        if (E.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: '" + (C || "_limitLength") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { limit: " + D + " } ", Q.opts.messages !== !1) {
                if (Z += " , message: 'should NOT be ", B == "maxLength") Z += "longer";
                else Z += "shorter";
                if (Z += " than ", K) Z += "' + " + D + " + '";
                else Z += "" + J;
                Z += " characters' "
            }
            if (Q.opts.verbose) {
                if (Z += " , schema:  ", K) Z += "validate.schema" + W;
                else Z += "" + J;
                Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
            }
            Z += " } "
        } else Z += " {} ";
        var z = Z;
        if (Z = E.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
            else Z += " validate.errors = [" + z + "]; return false; ";
        else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += "} ", F) Z += " else { ";
        return Z
    }
});
var ee1 = moduleWrapper((uMG, f42) => {
    f42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            C, V = "data" + (Y || ""),
            K = Q.opts.$data && J && J.$data,
            D;
        if (K) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", D = "schema" + I;
        else D = J;
        if (!(K || typeof J == "number")) throw Error(B + " must be number");
        var H = B == "maxProperties" ? ">" : "<";
        if (Z += "if ( ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'number') || ";
        Z += " Object.keys(" + V + ").length " + H + " " + D + ") { ";
        var C = B,
            E = E || [];
        if (E.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: '" + (C || "_limitProperties") + "' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { limit: " + D + " } ", Q.opts.messages !== !1) {
                if (Z += " , message: 'should NOT have ", B == "maxProperties") Z += "more";
                else Z += "fewer";
                if (Z += " than ", K) Z += "' + " + D + " + '";
                else Z += "" + J;
                Z += " properties' "
            }
            if (Q.opts.verbose) {
                if (Z += " , schema:  ", K) Z += "validate.schema" + W;
                else Z += "" + J;
                Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
            }
            Z += " } "
        } else Z += " {} ";
        var z = Z;
        if (Z = E.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + z + "]); ";
            else Z += " validate.errors = [" + z + "]; return false; ";
        else Z += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += "} ", F) Z += " else { ";
        return Z
    }
});
var g42 = moduleWrapper((mMG, h42) => {
    h42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = Q.opts.$data && J && J.$data,
            D;
        if (K) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", D = "schema" + I;
        else D = J;
        if (!(K || typeof J == "number")) throw Error(B + " must be number");
        if (Z += "var division" + I + ";if (", K) Z += " " + D + " !== undefined && ( typeof " + D + " != 'number' || ";
        if (Z += " (division" + I + " = " + V + " / " + D + ", ", Q.opts.multipleOfPrecision) Z += " Math.abs(Math.round(division" + I + ") - division" + I + ") > 1e-" + Q.opts.multipleOfPrecision + " ";
        else Z += " division" + I + " !== parseInt(division" + I + ") ";
        if (Z += " ) ", K) Z += "  )  ";
        Z += " ) {   ";
        var H = H || [];
        if (H.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { multipleOf: " + D + " } ", Q.opts.messages !== !1)
                if (Z += " , message: 'should be multiple of ", K) Z += "' + " + D;
                else Z += "" + D + "'";
            if (Q.opts.verbose) {
                if (Z += " , schema:  ", K) Z += "validate.schema" + W;
                else Z += "" + J;
                Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
            }
            Z += " } "
        } else Z += " {} ";
        var C = Z;
        if (Z = H.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + C + "]); ";
            else Z += " validate.errors = [" + C + "]; return false; ";
        else Z += " var err = " + C + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += "} ", F) Z += " else { ";
        return Z
    }
});
var m42 = moduleWrapper((dMG, u42) => {
    u42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "errs__" + I,
            D = Q.util.copy(Q);
        D.level++;
        var H = "valid" + D.level;
        if (Q.opts.strictKeywords ? typeof J == "object" && Object.keys(J).length > 0 || J === !1 : Q.util.schemaHasRules(J, Q.RULES.all)) {
            D.schema = J, D.schemaPath = W, D.errSchemaPath = X, Z += " var " + K + " = errors;  ";
            var C = Q.compositeRule;
            Q.compositeRule = D.compositeRule = !0, D.createErrors = !1;
            var E;
            if (D.opts.allErrors) E = D.opts.allErrors, D.opts.allErrors = !1;
            if (Z += " " + Q.validate(D) + " ", D.createErrors = !0, E) D.opts.allErrors = E;
            Q.compositeRule = D.compositeRule = C, Z += " if (" + H + ") {   ";
            var z = z || [];
            if (z.push(Z), Z = "", Q.createErrors !== !1) {
                if (Z += " { keyword: 'not' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: {} ", Q.opts.messages !== !1) Z += " , message: 'should NOT be valid' ";
                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                Z += " } "
            } else Z += " {} ";
            var w = Z;
            if (Z = z.pop(), !Q.compositeRule && F)
                if (Q.async) Z += " throw new ValidationError([" + w + "]); ";
                else Z += " validate.errors = [" + w + "]; return false; ";
            else Z += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            if (Z += " } else {  errors = " + K + "; if (vErrors !== null) { if (" + K + ") vErrors.length = " + K + "; else vErrors = null; } ", Q.opts.allErrors) Z += " } "
        } else {
            if (Z += "  var err =   ", Q.createErrors !== !1) {
                if (Z += " { keyword: 'not' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: {} ", Q.opts.messages !== !1) Z += " , message: 'should NOT be valid' ";
                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                Z += " } "
            } else Z += " {} ";
            if (Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", F) Z += " if (false) { "
        }
        return Z
    }
});
var c42 = moduleWrapper((cMG, d42) => {
    d42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = "errs__" + I,
            H = Q.util.copy(Q),
            C = "";
        H.level++;
        var E = "valid" + H.level,
            z = H.baseId,
            w = "prevValid" + I,
            N = "passingSchemas" + I;
        Z += "var " + D + " = errors , " + w + " = false , " + K + " = false , " + N + " = null; ";
        var q = Q.compositeRule;
        Q.compositeRule = H.compositeRule = !0;
        var R = J;
        if (R) {
            var P, y = -1,
                v = R.length - 1;
            while (y < v) {
                if (P = R[y += 1], Q.opts.strictKeywords ? typeof P == "object" && Object.keys(P).length > 0 || P === !1 : Q.util.schemaHasRules(P, Q.RULES.all)) H.schema = P, H.schemaPath = W + "[" + y + "]", H.errSchemaPath = X + "/" + y, Z += "  " + Q.validate(H) + " ", H.baseId = z;
                else Z += " var " + E + " = true; ";
                if (y) Z += " if (" + E + " && " + w + ") { " + K + " = false; " + N + " = [" + N + ", " + y + "]; } else { ", C += "}";
                Z += " if (" + E + ") { " + K + " = " + w + " = true; " + N + " = " + y + "; }"
            }
        }
        if (Q.compositeRule = H.compositeRule = q, Z += "" + C + "if (!" + K + ") {   var err =   ", Q.createErrors !== !1) {
            if (Z += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { passingSchemas: " + N + " } ", Q.opts.messages !== !1) Z += " , message: 'should match exactly one schema in oneOf' ";
            if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
            Z += " } "
        } else Z += " {} ";
        if (Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError(vErrors); ";
            else Z += " validate.errors = vErrors; return false; ";
        if (Z += "} else {  errors = " + D + "; if (vErrors !== null) { if (" + D + ") vErrors.length = " + D + "; else vErrors = null; }", Q.opts.allErrors) Z += " } ";
        return Z
    }
});
var l42 = moduleWrapper((pMG, p42) => {
    p42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = Q.opts.$data && J && J.$data,
            D;
        if (K) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", D = "schema" + I;
        else D = J;
        var H = K ? "(new RegExp(" + D + "))" : Q.usePattern(J);
        if (Z += "if ( ", K) Z += " (" + D + " !== undefined && typeof " + D + " != 'string') || ";
        Z += " !" + H + ".test(" + V + ") ) {   ";
        var C = C || [];
        if (C.push(Z), Z = "", Q.createErrors !== !1) {
            if (Z += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { pattern:  ", K) Z += "" + D;
            else Z += "" + Q.util.toQuotedString(J);
            if (Z += "  } ", Q.opts.messages !== !1) {
                if (Z += ` , message: 'should match pattern "`, K) Z += "' + " + D + " + '";
                else Z += "" + Q.util.escapeQuotes(J);
                Z += `"' `
            }
            if (Q.opts.verbose) {
                if (Z += " , schema:  ", K) Z += "validate.schema" + W;
                else Z += "" + Q.util.toQuotedString(J);
                Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
            }
            Z += " } "
        } else Z += " {} ";
        var E = Z;
        if (Z = C.pop(), !Q.compositeRule && F)
            if (Q.async) Z += " throw new ValidationError([" + E + "]); ";
            else Z += " validate.errors = [" + E + "]; return false; ";
        else Z += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
        if (Z += "} ", F) Z += " else { ";
        return Z
    }
});
var n42 = moduleWrapper((lMG, i42) => {
    i42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "errs__" + I,
            D = Q.util.copy(Q),
            H = "";
        D.level++;
        var C = "valid" + D.level,
            E = "key" + I,
            z = "idx" + I,
            w = D.dataLevel = Q.dataLevel + 1,
            N = "data" + w,
            q = "dataProperties" + I,
            R = Object.keys(J || {}).filter(HA),
            P = Q.schema.patternProperties || {},
            y = Object.keys(P).filter(HA),
            v = Q.schema.additionalProperties,
            x = R.length || y.length,
            p = v === !1,
            u = typeof v == "object" && Object.keys(v).length,
            o = Q.opts.removeAdditional,
            l = p || u || o,
            k = Q.opts.ownProperties,
            d = Q.baseId,
            QA = Q.schema.required;
        if (QA && !(Q.opts.$data && QA.$data) && QA.length < Q.opts.loopRequired) var IA = Q.util.toHash(QA);

        function HA(T0) {
            return T0 !== "__proto__"
        }
        if (Z += "var " + K + " = errors;var " + C + " = true;", k) Z += " var " + q + " = undefined;";
        if (l) {
            if (k) Z += " " + q + " = " + q + " || Object.keys(" + V + "); for (var " + z + "=0; " + z + "<" + q + ".length; " + z + "++) { var " + E + " = " + q + "[" + z + "]; ";
            else Z += " for (var " + E + " in " + V + ") { ";
            if (x) {
                if (Z += " var isAdditional" + I + " = !(false ", R.length)
                    if (R.length > 8) Z += " || validate.schema" + W + ".hasOwnProperty(" + E + ") ";
                    else {
                        var wA = R;
                        if (wA) {
                            var KA, SA = -1,
                                sA = wA.length - 1;
                            while (SA < sA) KA = wA[SA += 1], Z += " || " + E + " == " + Q.util.toQuotedString(KA) + " "
                        }
                    } if (y.length) {
                    var NA = y;
                    if (NA) {
                        var qA, DA = -1,
                            yA = NA.length - 1;
                        while (DA < yA) qA = NA[DA += 1], Z += " || " + Q.usePattern(qA) + ".test(" + E + ") "
                    }
                }
                Z += " ); if (isAdditional" + I + ") { "
            }
            if (o == "all") Z += " delete " + V + "[" + E + "]; ";
            else {
                var rA = Q.errorPath,
                    K1 = "' + " + E + " + '";
                if (Q.opts._errorDataPathProperty) Q.errorPath = Q.util.getPathExpr(Q.errorPath, E, Q.opts.jsonPointers);
                if (p)
                    if (o) Z += " delete " + V + "[" + E + "]; ";
                    else {
                        Z += " " + C + " = false; ";
                        var WA = X;
                        X = Q.errSchemaPath + "/additionalProperties";
                        var XA = XA || [];
                        if (XA.push(Z), Z = "", Q.createErrors !== !1) {
                            if (Z += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { additionalProperty: '" + K1 + "' } ", Q.opts.messages !== !1) {
                                if (Z += " , message: '", Q.opts._errorDataPathProperty) Z += "is an invalid additional property";
                                else Z += "should NOT have additional properties";
                                Z += "' "
                            }
                            if (Q.opts.verbose) Z += " , schema: false , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                            Z += " } "
                        } else Z += " {} ";
                        var zA = Z;
                        if (Z = XA.pop(), !Q.compositeRule && F)
                            if (Q.async) Z += " throw new ValidationError([" + zA + "]); ";
                            else Z += " validate.errors = [" + zA + "]; return false; ";
                        else Z += " var err = " + zA + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                        if (X = WA, F) Z += " break; "
                    }
                else if (u)
                    if (o == "failing") {
                        Z += " var " + K + " = errors;  ";
                        var $A = Q.compositeRule;
                        Q.compositeRule = D.compositeRule = !0, D.schema = v, D.schemaPath = Q.schemaPath + ".additionalProperties", D.errSchemaPath = Q.errSchemaPath + "/additionalProperties", D.errorPath = Q.opts._errorDataPathProperty ? Q.errorPath : Q.util.getPathExpr(Q.errorPath, E, Q.opts.jsonPointers);
                        var LA = V + "[" + E + "]";
                        D.dataPathArr[w] = E;
                        var TA = Q.validate(D);
                        if (D.baseId = d, Q.util.varOccurences(TA, N) < 2) Z += " " + Q.util.varReplace(TA, N, LA) + " ";
                        else Z += " var " + N + " = " + LA + "; " + TA + " ";
                        Z += " if (!" + C + ") { errors = " + K + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + V + "[" + E + "]; }  ", Q.compositeRule = D.compositeRule = $A
                    } else {
                        D.schema = v, D.schemaPath = Q.schemaPath + ".additionalProperties", D.errSchemaPath = Q.errSchemaPath + "/additionalProperties", D.errorPath = Q.opts._errorDataPathProperty ? Q.errorPath : Q.util.getPathExpr(Q.errorPath, E, Q.opts.jsonPointers);
                        var LA = V + "[" + E + "]";
                        D.dataPathArr[w] = E;
                        var TA = Q.validate(D);
                        if (D.baseId = d, Q.util.varOccurences(TA, N) < 2) Z += " " + Q.util.varReplace(TA, N, LA) + " ";
                        else Z += " var " + N + " = " + LA + "; " + TA + " ";
                        if (F) Z += " if (!" + C + ") break; "
                    } Q.errorPath = rA
            }
            if (x) Z += " } ";
            if (Z += " }  ", F) Z += " if (" + C + ") { ", H += "}"
        }
        var eA = Q.opts.useDefaults && !Q.compositeRule;
        if (R.length) {
            /* BASE64_CHARS = BASE64_CHARS = "ABCDEF...+/" */
var BASE64_CHARS = R;
            if (BASE64_CHARS) {
                var KA, I1 = -1,
                    w1 = BASE64_CHARS.length - 1;
                while (I1 < w1) {
                    KA = BASE64_CHARS[I1 += 1];
                    var PA = J[KA];
                    if (Q.opts.strictKeywords ? typeof PA == "object" && Object.keys(PA).length > 0 || PA === !1 : Q.util.schemaHasRules(PA, Q.RULES.all)) {
                        var B1 = Q.util.getProperty(KA),
                            LA = V + B1,
                            Q0 = eA && PA.default !== void 0;
                        D.schema = PA, D.schemaPath = W + B1, D.errSchemaPath = X + "/" + Q.util.escapeFragment(KA), D.errorPath = Q.util.getPath(Q.errorPath, KA, Q.opts.jsonPointers), D.dataPathArr[w] = Q.util.toQuotedString(KA);
                        var TA = Q.validate(D);
                        if (D.baseId = d, Q.util.varOccurences(TA, N) < 2) {
                            TA = Q.util.varReplace(TA, N, LA);
                            var b1 = LA
                        } else {
                            var b1 = N;
                            Z += " var " + N + " = " + LA + "; "
                        }
                        if (Q0) Z += " " + TA + " ";
                        else {
                            if (IA && IA[KA]) {
                                if (Z += " if ( " + b1 + " === undefined ", k) Z += " || ! Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(KA) + "') ";
                                Z += ") { " + C + " = false; ";
                                var rA = Q.errorPath,
                                    WA = X,
                                    Y0 = Q.util.escapeQuotes(KA);
                                if (Q.opts._errorDataPathProperty) Q.errorPath = Q.util.getPath(rA, KA, Q.opts.jsonPointers);
                                X = Q.errSchemaPath + "/required";
                                var XA = XA || [];
                                if (XA.push(Z), Z = "", Q.createErrors !== !1) {
                                    if (Z += " { keyword: 'required' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { missingProperty: '" + Y0 + "' } ", Q.opts.messages !== !1) {
                                        if (Z += " , message: '", Q.opts._errorDataPathProperty) Z += "is a required property";
                                        else Z += "should have required property \\'" + Y0 + "\\'";
                                        Z += "' "
                                    }
                                    if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                                    Z += " } "
                                } else Z += " {} ";
                                var zA = Z;
                                if (Z = XA.pop(), !Q.compositeRule && F)
                                    if (Q.async) Z += " throw new ValidationError([" + zA + "]); ";
                                    else Z += " validate.errors = [" + zA + "]; return false; ";
                                else Z += " var err = " + zA + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                                X = WA, Q.errorPath = rA, Z += " } else { "
                            } else if (F) {
                                if (Z += " if ( " + b1 + " === undefined ", k) Z += " || ! Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(KA) + "') ";
                                Z += ") { " + C + " = true; } else { "
                            } else {
                                if (Z += " if (" + b1 + " !== undefined ", k) Z += " &&   Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(KA) + "') ";
                                Z += " ) { "
                            }
                            Z += " " + TA + " } "
                        }
                    }
                    if (F) Z += " if (" + C + ") { ", H += "}"
                }
            }
        }
        if (y.length) {
            var x0 = y;
            if (x0) {
                var qA, u0 = -1,
                    k1 = x0.length - 1;
                while (u0 < k1) {
                    qA = x0[u0 += 1];
                    var PA = P[qA];
                    if (Q.opts.strictKeywords ? typeof PA == "object" && Object.keys(PA).length > 0 || PA === !1 : Q.util.schemaHasRules(PA, Q.RULES.all)) {
                        if (D.schema = PA, D.schemaPath = Q.schemaPath + ".patternProperties" + Q.util.getProperty(qA), D.errSchemaPath = Q.errSchemaPath + "/patternProperties/" + Q.util.escapeFragment(qA), k) Z += " " + q + " = " + q + " || Object.keys(" + V + "); for (var " + z + "=0; " + z + "<" + q + ".length; " + z + "++) { var " + E + " = " + q + "[" + z + "]; ";
                        else Z += " for (var " + E + " in " + V + ") { ";
                        Z += " if (" + Q.usePattern(qA) + ".test(" + E + ")) { ", D.errorPath = Q.util.getPathExpr(Q.errorPath, E, Q.opts.jsonPointers);
                        var LA = V + "[" + E + "]";
                        D.dataPathArr[w] = E;
                        var TA = Q.validate(D);
                        if (D.baseId = d, Q.util.varOccurences(TA, N) < 2) Z += " " + Q.util.varReplace(TA, N, LA) + " ";
                        else Z += " var " + N + " = " + LA + "; " + TA + " ";
                        if (F) Z += " if (!" + C + ") break; ";
                        if (Z += " } ", F) Z += " else " + C + " = true; ";
                        if (Z += " }  ", F) Z += " if (" + C + ") { ", H += "}"
                    }
                }
            }
        }
        if (F) Z += " " + H + " if (" + K + " == errors) {";
        return Z
    }
});
var s42 = moduleWrapper((iMG, a42) => {
    a42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "errs__" + I,
            D = Q.util.copy(Q),
            H = "";
        D.level++;
        var C = "valid" + D.level;
        if (Z += "var " + K + " = errors;", Q.opts.strictKeywords ? typeof J == "object" && Object.keys(J).length > 0 || J === !1 : Q.util.schemaHasRules(J, Q.RULES.all)) {
            D.schema = J, D.schemaPath = W, D.errSchemaPath = X;
            var E = "key" + I,
                z = "idx" + I,
                w = "i" + I,
                N = "' + " + E + " + '",
                q = D.dataLevel = Q.dataLevel + 1,
                R = "data" + q,
                P = "dataProperties" + I,
                y = Q.opts.ownProperties,
                v = Q.baseId;
            if (y) Z += " var " + P + " = undefined; ";
            if (y) Z += " " + P + " = " + P + " || Object.keys(" + V + "); for (var " + z + "=0; " + z + "<" + P + ".length; " + z + "++) { var " + E + " = " + P + "[" + z + "]; ";
            else Z += " for (var " + E + " in " + V + ") { ";
            Z += " var startErrs" + I + " = errors; ";
            var x = E,
                p = Q.compositeRule;
            Q.compositeRule = D.compositeRule = !0;
            var u = Q.validate(D);
            if (D.baseId = v, Q.util.varOccurences(u, R) < 2) Z += " " + Q.util.varReplace(u, R, x) + " ";
            else Z += " var " + R + " = " + x + "; " + u + " ";
            if (Q.compositeRule = D.compositeRule = p, Z += " if (!" + C + ") { for (var " + w + "=startErrs" + I + "; " + w + "<errors; " + w + "++) { vErrors[" + w + "].propertyName = " + E + "; }   var err =   ", Q.createErrors !== !1) {
                if (Z += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { propertyName: '" + N + "' } ", Q.opts.messages !== !1) Z += " , message: 'property name \\'" + N + "\\' is invalid' ";
                if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                Z += " } "
            } else Z += " {} ";
            if (Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !Q.compositeRule && F)
                if (Q.async) Z += " throw new ValidationError(vErrors); ";
                else Z += " validate.errors = vErrors; return false; ";
            if (F) Z += " break; ";
            Z += " } }"
        }
        if (F) Z += " " + H + " if (" + K + " == errors) {";
        return Z
    }
});
var o42 = moduleWrapper((nMG, r42) => {
    r42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = Q.opts.$data && J && J.$data,
            H;
        if (D) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", H = "schema" + I;
        else H = J;
        var C = "schema" + I;
        if (!D)
            if (J.length < Q.opts.loopRequired && Q.schema.properties && Object.keys(Q.schema.properties).length) {
                var E = [],
                    z = J;
                if (z) {
                    var w, N = -1,
                        q = z.length - 1;
                    while (N < q) {
                        w = z[N += 1];
                        var R = Q.schema.properties[w];
                        if (!(R && (Q.opts.strictKeywords ? typeof R == "object" && Object.keys(R).length > 0 || R === !1 : Q.util.schemaHasRules(R, Q.RULES.all)))) E[E.length] = w
                    }
                }
            } else var E = J;
        if (D || E.length) {
            var P = Q.errorPath,
                y = D || E.length >= Q.opts.loopRequired,
                v = Q.opts.ownProperties;
            if (F)
                if (Z += " var missing" + I + "; ", y) {
                    if (!D) Z += " var " + C + " = validate.schema" + W + "; ";
                    var x = "i" + I,
                        p = "schema" + I + "[" + x + "]",
                        u = "' + " + p + " + '";
                    if (Q.opts._errorDataPathProperty) Q.errorPath = Q.util.getPathExpr(P, p, Q.opts.jsonPointers);
                    if (Z += " var " + K + " = true; ", D) Z += " if (schema" + I + " === undefined) " + K + " = true; else if (!Array.isArray(schema" + I + ")) " + K + " = false; else {";
                    if (Z += " for (var " + x + " = 0; " + x + " < " + C + ".length; " + x + "++) { " + K + " = " + V + "[" + C + "[" + x + "]] !== undefined ", v) Z += " &&   Object.prototype.hasOwnProperty.call(" + V + ", " + C + "[" + x + "]) ";
                    if (Z += "; if (!" + K + ") break; } ", D) Z += "  }  ";
                    Z += "  if (!" + K + ") {   ";
                    var o = o || [];
                    if (o.push(Z), Z = "", Q.createErrors !== !1) {
                        if (Z += " { keyword: 'required' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { missingProperty: '" + u + "' } ", Q.opts.messages !== !1) {
                            if (Z += " , message: '", Q.opts._errorDataPathProperty) Z += "is a required property";
                            else Z += "should have required property \\'" + u + "\\'";
                            Z += "' "
                        }
                        if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                        Z += " } "
                    } else Z += " {} ";
                    var l = Z;
                    if (Z = o.pop(), !Q.compositeRule && F)
                        if (Q.async) Z += " throw new ValidationError([" + l + "]); ";
                        else Z += " validate.errors = [" + l + "]; return false; ";
                    else Z += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                    Z += " } else { "
                } else {
                    Z += " if ( ";
                    var k = E;
                    if (k) {
                        var d, x = -1,
                            QA = k.length - 1;
                        while (x < QA) {
                            if (d = k[x += 1], x) Z += " || ";
                            var IA = Q.util.getProperty(d),
                                HA = V + IA;
                            if (Z += " ( ( " + HA + " === undefined ", v) Z += " || ! Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(d) + "') ";
                            Z += ") && (missing" + I + " = " + Q.util.toQuotedString(Q.opts.jsonPointers ? d : IA) + ") ) "
                        }
                    }
                    Z += ") {  ";
                    var p = "missing" + I,
                        u = "' + " + p + " + '";
                    if (Q.opts._errorDataPathProperty) Q.errorPath = Q.opts.jsonPointers ? Q.util.getPathExpr(P, p, !0) : P + " + " + p;
                    var o = o || [];
                    if (o.push(Z), Z = "", Q.createErrors !== !1) {
                        if (Z += " { keyword: 'required' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { missingProperty: '" + u + "' } ", Q.opts.messages !== !1) {
                            if (Z += " , message: '", Q.opts._errorDataPathProperty) Z += "is a required property";
                            else Z += "should have required property \\'" + u + "\\'";
                            Z += "' "
                        }
                        if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                        Z += " } "
                    } else Z += " {} ";
                    var l = Z;
                    if (Z = o.pop(), !Q.compositeRule && F)
                        if (Q.async) Z += " throw new ValidationError([" + l + "]); ";
                        else Z += " validate.errors = [" + l + "]; return false; ";
                    else Z += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                    Z += " } else { "
                }
            else if (y) {
                if (!D) Z += " var " + C + " = validate.schema" + W + "; ";
                var x = "i" + I,
                    p = "schema" + I + "[" + x + "]",
                    u = "' + " + p + " + '";
                if (Q.opts._errorDataPathProperty) Q.errorPath = Q.util.getPathExpr(P, p, Q.opts.jsonPointers);
                if (D) {
                    if (Z += " if (" + C + " && !Array.isArray(" + C + ")) {  var err =   ", Q.createErrors !== !1) {
                        if (Z += " { keyword: 'required' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { missingProperty: '" + u + "' } ", Q.opts.messages !== !1) {
                            if (Z += " , message: '", Q.opts._errorDataPathProperty) Z += "is a required property";
                            else Z += "should have required property \\'" + u + "\\'";
                            Z += "' "
                        }
                        if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                        Z += " } "
                    } else Z += " {} ";
                    Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + C + " !== undefined) { "
                }
                if (Z += " for (var " + x + " = 0; " + x + " < " + C + ".length; " + x + "++) { if (" + V + "[" + C + "[" + x + "]] === undefined ", v) Z += " || ! Object.prototype.hasOwnProperty.call(" + V + ", " + C + "[" + x + "]) ";
                if (Z += ") {  var err =   ", Q.createErrors !== !1) {
                    if (Z += " { keyword: 'required' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { missingProperty: '" + u + "' } ", Q.opts.messages !== !1) {
                        if (Z += " , message: '", Q.opts._errorDataPathProperty) Z += "is a required property";
                        else Z += "should have required property \\'" + u + "\\'";
                        Z += "' "
                    }
                    if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                    Z += " } "
                } else Z += " {} ";
                if (Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", D) Z += "  }  "
            } else {
                var wA = E;
                if (wA) {
                    var d, KA = -1,
                        SA = wA.length - 1;
                    while (KA < SA) {
                        d = wA[KA += 1];
                        var IA = Q.util.getProperty(d),
                            u = Q.util.escapeQuotes(d),
                            HA = V + IA;
                        if (Q.opts._errorDataPathProperty) Q.errorPath = Q.util.getPath(P, d, Q.opts.jsonPointers);
                        if (Z += " if ( " + HA + " === undefined ", v) Z += " || ! Object.prototype.hasOwnProperty.call(" + V + ", '" + Q.util.escapeQuotes(d) + "') ";
                        if (Z += ") {  var err =   ", Q.createErrors !== !1) {
                            if (Z += " { keyword: 'required' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { missingProperty: '" + u + "' } ", Q.opts.messages !== !1) {
                                if (Z += " , message: '", Q.opts._errorDataPathProperty) Z += "is a required property";
                                else Z += "should have required property \\'" + u + "\\'";
                                Z += "' "
                            }
                            if (Q.opts.verbose) Z += " , schema: validate.schema" + W + " , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " ";
                            Z += " } "
                        } else Z += " {} ";
                        Z += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                    }
                }
            }
            Q.errorPath = P
        } else if (F) Z += " if (true) {";
        return Z
    }
});
var e42 = moduleWrapper((aMG, t42) => {
    t42.exports = function(Q, B, G) {
        var Z = " ",
            I = Q.level,
            Y = Q.dataLevel,
            J = Q.schema[B],
            W = Q.schemaPath + Q.util.getProperty(B),
            X = Q.errSchemaPath + "/" + B,
            F = !Q.opts.allErrors,
            V = "data" + (Y || ""),
            K = "valid" + I,
            D = Q.opts.$data && J && J.$data,
            H;
        if (D) Z += " var schema" + I + " = " + Q.util.getData(J.$data, Y, Q.dataPathArr) + "; ", H = "schema" + I;
        else H = J;
        if ((J || D) && Q.opts.uniqueItems !== !1) {
            if (D) Z += " var " + K + "; if (" + H + " === false || " + H + " === undefined) " + K + " = true; else if (typeof " + H + " != 'boolean') " + K + " = false; else { ";
            Z += " var i = " + V + ".length , " + K + " = true , j; if (i > 1) { ";
            var C = Q.schema.items && Q.schema.items.type,
                E = Array.isArray(C);
            if (!C || C == "object" || C == "array" || E && (C.indexOf("object") >= 0 || C.indexOf("array") >= 0)) Z += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + V + "[i], " + V + "[j])) { " + K + " = false; break outer; } } } ";
            else {
                Z += " var itemIndices = {}, item; for (;i--;) { var item = " + V + "[i]; ";
                var z = "checkDataType" + (E ? "s" : "");
                if (Z += " if (" + Q.util[z](C, "item", Q.opts.strictNumbers, !0) + ") continue; ", E) Z += ` if (typeof item == 'string') item = '"' + item; `;
                Z += " if (typeof itemIndices[item] == 'number') { " + K + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
            }
            if (Z += " } ", D) Z += "  }  ";
            Z += " if (!" + K + ") {   ";
            var w = w || [];
            if (w.push(Z), Z = "", Q.createErrors !== !1) {
                if (Z += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + Q.errorPath + " , schemaPath: " + Q.util.toQuotedString(X) + " , params: { i: i, j: j } ", Q.opts.messages !== !1) Z += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' ";
                if (Q.opts.verbose) {
                    if (Z += " , schema:  ", D) Z += "validate.schema" + W;
                    else Z += "" + J;
                    Z += "         , parentSchema: validate.schema" + Q.schemaPath + " , data: " + V + " "
                }
                Z += " } "
            } else Z += " {} ";
            var N = Z;
            if (Z = w.pop(), !Q.compositeRule && F)
                if (Q.async) Z += " throw new ValidationError([" + N + "]); ";
                else Z += " validate.errors = [" + N + "]; return false; ";
            else Z += " var err = " + N + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
            if (Z += " } ", F) Z += " else { "
        } else if (F) Z += " if (true) { ";
        return Z
    }
});
var Q82 = moduleWrapper((sMG, A82) => {
    A82.exports = {
        $ref: D42(),
        allOf: C42(),
        anyOf: z42(),
        $comment: $42(),
        const: q42(),
        contains: L42(),
        dependencies: O42(),
        enum: T42(),
        format: j42(),
        if: _42(),
        items: y42(),
        maximum: re1(),
        minimum: re1(),
        maxItems: oe1(),
        minItems: oe1(),
        maxLength: te1(),
        minLength: te1(),
        maxProperties: ee1(),
        minProperties: ee1(),
        multipleOf: g42(),
        not: m42(),
        oneOf: c42(),
        pattern: l42(),
        properties: n42(),
        propertyNames: s42(),
        required: o42(),
        uniqueItems: e42(),
        validate: ae1()
    }
});
var Z82 = moduleWrapper((rMG, G82) => {
    var B82 = Q82(),
        AA0 = sAA().toHash;
    G82.exports = function() {
        var Q = [{
                type: "number",
                rules: [{
                    maximum: ["exclusiveMaximum"]
                }, {
                    minimum: ["exclusiveMinimum"]
                }, "multipleOf", "format"]
            }, {
                type: "string",
                rules: ["maxLength", "minLength", "pattern", "format"]
            }, {
                type: "array",
                rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
            }, {
                type: "object",
                rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
                    properties: ["additionalProperties", "patternProperties"]
                }]
            }, {
                rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]
            }],
            B = ["type", "$comment"],
            G = ["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"],
            Z = ["number", "integer", "string", "array", "object", "boolean", "null"];
        return Q.all = AA0(B), Q.types = AA0(Z), Q.forEach(function(I) {
            if (I.rules = I.rules.map(function(Y) {
                    var J;
                    if (typeof Y == "object") {
                        var W = Object.keys(Y)[0];
                        J = Y[W], Y = W, J.forEach(function(F) {
                            B.push(F), Q.all[F] = !0
                        })
                    }
                    B.push(Y);
                    var X = Q.all[Y] = {
                        keyword: Y,
                        code: B82[Y],
                        implements: J
                    };
                    return X
                }), Q.all.$comment = {
                    keyword: "$comment",
                    code: B82.$comment
                }, I.type) Q.types[I.type] = I
        }), Q.keywords = AA0(B.concat(G)), Q.custom = {}, Q
    }
});
var J82 = moduleWrapper((oMG, Y82) => {
    var I82 = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];
    Y82.exports = function(A, Q) {
        for (var B = 0; B < Q.length; B++) {
            A = JSON.parse(JSON.stringify(A));
            var G = Q[B].split("/"),
                Z = A,
                I;
            for (I = 1; I < G.length; I++) Z = Z[G[I]];
            for (I = 0; I < I82.length; I++) {
                var Y = I82[I],
                    J = Z[Y];
                if (J) Z[Y] = {
                    anyOf: [J, {
                        $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
                    }]
                }
            }
        }
        return A
    }
});
var F82 = moduleWrapper((tMG, X82) => {
    var j55 = gQ1().MissingRef;
    X82.exports = W82;

    function W82(A, Q, B) {
        var G = this;
        if (typeof this._opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
        if (typeof Q == "function") B = Q, Q = void 0;
        var Z = I(A).then(function() {
            var J = G._addSchema(A, void 0, Q);
            return J.validate || Y(J)
        });
        if (B) Z.then(function(J) {
            B(null, J)
        }, B);
        return Z;

        function I(J) {
            var W = J.$schema;
            return W && !G.getSchema(W) ? W82.call(G, {
                $ref: W
            }, !0) : Promise.resolve()
        }

        function Y(J) {
            try {
                return G._compile(J)
            } catch (X) {
                if (X instanceof j55) return W(X);
                throw X
            }

            function W(X) {
                var F = X.missingSchema;
                if (D(F)) throw Error("Schema " + F + " is loaded but " + X.missingRef + " cannot be resolved");
                var V = G._loadingSchemas[F];
                if (!V) V = G._loadingSchemas[F] = G._opts.loadSchema(F), V.then(K, K);
                return V.then(function(H) {
                    if (!D(F)) return I(H).then(function() {
                        if (!D(F)) G.addSchema(H, F, void 0, Q)
                    })
                }).then(function() {
                    return Y(J)
                });