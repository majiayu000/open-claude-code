/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.004Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 4/29
 * Lines: 34436 - 35934 (1499 lines)
 * Original file: cli.js
 */

                })]
            }]
        }
    }
    sb0.exports = kQ4
});
var tb0 = U((o27, ob0) => {
    function yQ4(A) {
        let Q = "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty",
            B = "shared abstract formal default actual variable late native deprecated final sealed annotation suppressWarnings small",
            G = "doc by license see throws tagged",
            Z = {
                className: "subst",
                excludeBegin: !0,
                excludeEnd: !0,
                begin: /``/,
                end: /``/,
                keywords: Q,
                relevance: 10
            },
            I = [{
                className: "string",
                begin: '"""',
                end: '"""',
                relevance: 10
            }, {
                className: "string",
                begin: '"',
                end: '"',
                contains: [Z]
            }, {
                className: "string",
                begin: "'",
                end: "'"
            }, {
                className: "number",
                begin: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
                relevance: 0
            }];
        return Z.contains = I, {
            name: "Ceylon",
            keywords: {
                keyword: Q + " " + B,
                meta: "doc by license see throws tagged"
            },
            illegal: "\\$[^01]|#[^0-9a-fA-F]",
            contains: [A.C_LINE_COMMENT_MODE, A.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            }), {
                className: "meta",
                begin: '@[a-z]\\w*(?::"[^"]*")?'
            }].concat(I)
        }
    }
    ob0.exports = yQ4
});
var Af0 = U((t27, eb0) => {
    function xQ4(A) {
        return {
            name: "Clean",
            aliases: ["icl", "dcl"],
            keywords: {
                keyword: "if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
                built_in: "Int Real Char Bool",
                literal: "True False"
            },
            contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, {
                begin: "->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>"
            }]
        }
    }
    eb0.exports = xQ4
});
var Bf0 = U((e27, Qf0) => {
    function vQ4(A) {
        let B = "[a-zA-Z_\\-!.?+*=<>&#'][a-zA-Z_\\-!.?+*=<>&#'0-9/;:]*",
            G = "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",
            Z = {
                $pattern: B,
                "builtin-name": "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
            },
            I = "[-+]?\\d+(\\.\\d+)?",
            Y = {
                begin: B,
                relevance: 0
            },
            J = {
                className: "number",
                begin: "[-+]?\\d+(\\.\\d+)?",
                relevance: 0
            },
            W = A.inherit(A.QUOTE_STRING_MODE, {
                illegal: null
            }),
            X = A.COMMENT(";", "$", {
                relevance: 0
            }),
            F = {
                className: "literal",
                begin: /\b(true|false|nil)\b/
            },
            V = {
                begin: "[\\[\\{]",
                end: "[\\]\\}]"
            },
            K = {
                className: "comment",
                begin: "\\^" + B
            },
            D = A.COMMENT("\\^\\{", "\\}"),
            H = {
                className: "symbol",
                begin: "[:]{1,2}" + B
            },
            C = {
                begin: "\\(",
                end: "\\)"
            },
            E = {
                endsWithParent: !0,
                relevance: 0
            },
            z = {
                keywords: Z,
                className: "name",
                begin: B,
                relevance: 0,
                starts: E
            },
            w = [C, W, K, D, X, H, V, J, F, Y],
            N = {
                beginKeywords: "def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",
                lexemes: B,
                end: '(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',
                contains: [{
                    className: "title",
                    begin: B,
                    relevance: 0,
                    excludeEnd: !0,
                    endsParent: !0
                }].concat(w)
            };
        return C.contains = [A.COMMENT("comment", ""), N, z, E], E.contains = w, V.contains = w, D.contains = [V], {
            name: "Clojure",
            aliases: ["clj"],
            illegal: /\S/,
            contains: [C, W, K, D, X, H, V, J, F]
        }
    }
    Qf0.exports = vQ4
});
var Zf0 = U((A97, Gf0) => {
    function bQ4(A) {
        return {
            name: "Clojure REPL",
            contains: [{
                className: "meta",
                begin: /^([\w.-]+|\s*#_)?=>/,
                starts: {
                    end: /$/,
                    subLanguage: "clojure"
                }
            }]
        }
    }
    Gf0.exports = bQ4
});
var Yf0 = U((Q97, If0) => {
    function fQ4(A) {
        return {
            name: "CMake",
            aliases: ["cmake.in"],
            case_insensitive: !0,
            keywords: {
                keyword: "break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined"
            },
            contains: [{
                className: "variable",
                begin: /\$\{/,
                end: /\}/
            }, A.HASH_COMMENT_MODE, A.QUOTE_STRING_MODE, A.NUMBER_MODE]
        }
    }
    If0.exports = fQ4
});
var Wf0 = U((B97, Jf0) => {
    var hQ4 = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
        gQ4 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
        uQ4 = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer", "BigInt64Array", "BigUint64Array", "BigInt"],
        mQ4 = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
        dQ4 = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
        cQ4 = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
        pQ4 = [].concat(dQ4, cQ4, uQ4, mQ4);

function lQ4(A) {
        let Q = ["npm", "print"],
            B = ["yes", "no", "on", "off"],
            G = ["then", "unless", "until", "loop", "by", "when", "and", "or", "is", "isnt", "not"],
            Z = ["var", "const", "let", "function", "static"],
            I = (D) => (H) => !D.includes(H),
            Y = {
                keyword: hQ4.concat(G).filter(I(Z)),
                literal: gQ4.concat(B),
                built_in: pQ4.concat(Q)
            },
            J = "[A-Za-z$_][0-9A-Za-z$_]*",
            W = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: Y
            },
            X = [A.BINARY_NUMBER_MODE, A.inherit(A.C_NUMBER_MODE, {
                starts: {
                    end: "(\\s*/)?",
                    relevance: 0
                }
            }), {
                className: "string",
                variants: [{
                    begin: /'''/,
                    end: /'''/,
                    contains: [A.BACKSLASH_ESCAPE]
                }, {
                    begin: /'/,
                    end: /'/,
                    contains: [A.BACKSLASH_ESCAPE]
                }, {
                    begin: /"""/,
                    end: /"""/,
                    contains: [A.BACKSLASH_ESCAPE, W]
                }, {
                    begin: /"/,
                    end: /"/,
                    contains: [A.BACKSLASH_ESCAPE, W]
                }]
            }, {
                className: "regexp",
                variants: [{
                    begin: "///",
                    end: "///",
                    contains: [W, A.HASH_COMMENT_MODE]
                }, {
                    begin: "//[gim]{0,3}(?=\\W)",
                    relevance: 0
                }, {
                    begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
                }]
            }, {
                begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
            }, {
                subLanguage: "javascript",
                excludeBegin: !0,
                excludeEnd: !0,
                variants: [{
                    begin: "```",
                    end: "```"
                }, {
                    begin: "`",
                    end: "`"
                }]
            }];
        W.contains = X;
        let F = A.inherit(A.TITLE_MODE, {
                begin: "[A-Za-z$_][0-9A-Za-z$_]*"
            }),
            V = "(\\(.*\\)\\s*)?\\B[-=]>",
            K = {
                className: "params",
                begin: "\\([^\\(]",
                returnBegin: !0,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    keywords: Y,
                    contains: ["self"].concat(X)
                }]
            };
        return {
            name: "CoffeeScript",
            aliases: ["coffee", "cson", "iced"],
            keywords: Y,
            illegal: /\/\*/,
            contains: X.concat([A.COMMENT("###", "###"), A.HASH_COMMENT_MODE, {
                className: "function",
                begin: "^\\s*[A-Za-z$_][0-9A-Za-z$_]*\\s*=\\s*" + V,
                end: "[-=]>",
                returnBegin: !0,
                contains: [F, K]
            }, {
                begin: /[:\(,=]\s*/,
                relevance: 0,
                contains: [{
                    className: "function",
                    begin: V,
                    end: "[-=]>",
                    returnBegin: !0,
                    contains: [K]
                }]
            }, {
                className: "class",
                beginKeywords: "class",
                end: "$",
                illegal: /[:="\[\]]/,
                contains: [{
                    beginKeywords: "extends",
                    endsWithParent: !0,
                    illegal: /[:="\[\]]/,
                    contains: [F]
                }, F]
            }, {
                begin: "[A-Za-z$_][0-9A-Za-z$_]*:",
                end: ":",
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }])
        }
    }
    Jf0.exports = lQ4
});
var Ff0 = U((G97, Xf0) => {
    function iQ4(A) {
        return {
            name: "Coq",
            keywords: {
                keyword: "_|0 as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies Dependent Derive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",
                built_in: "abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with"
            },
            contains: [A.QUOTE_STRING_MODE, A.COMMENT("\\(\\*", "\\*\\)"), A.C_NUMBER_MODE, {
                className: "type",
                excludeBegin: !0,
                begin: "\\|\\s*",
                end: "\\w+"
            }, {
                begin: /[-=]>/
            }]
        }
    }
    Xf0.exports = iQ4
});
var Kf0 = U((Z97, Vf0) => {
    function nQ4(A) {
        return {
            name: "Caché Object Script",
            case_insensitive: !0,
            aliases: ["cls"],
            keywords: "property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii",
            contains: [{
                className: "number",
                begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
                relevance: 0
            }, {
                className: "string",
                variants: [{
                    begin: '"',
                    end: '"',
                    contains: [{
                        begin: '""',
                        relevance: 0
                    }]
                }]
            }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
                className: "comment",
                begin: /;/,
                end: "$",
                relevance: 0
            }, {
                className: "built_in",
                begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
            }, {
                className: "built_in",
                begin: /\$\$\$[a-zA-Z]+/
            }, {
                className: "built_in",
                begin: /%[a-z]+(?:\.[a-z]+)*/
            }, {
                className: "symbol",
                begin: /\^%?[a-zA-Z][\w]*/
            }, {
                className: "keyword",
                begin: /##class|##super|#define|#dim/
            }, {
                begin: /&sql\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                subLanguage: "sql"
            }, {
                begin: /&(js|jscript|javascript)</,
                end: />/,
                excludeBegin: !0,
                excludeEnd: !0,
                subLanguage: "javascript"
            }, {
                begin: /&html<\s*</,
                end: />\s*>/,
                subLanguage: "xml"
            }]
        }
    }
    Vf0.exports = nQ4
});
var Hf0 = U((I97, Df0) => {
    function aQ4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function sQ4(A) {
        return fH1("(?=", A, ")")
    }

function RxA(A) {
        return fH1("(", A, ")?")
    }

function fH1(...A) {
        return A.map((B) => aQ4(B)).join("")
    }

function rQ4(A) {
        let Q = A.COMMENT("//", "$", {
                contains: [{
                    begin: /\\\n/
                }]
            }),
            B = "decltype\\(auto\\)",
            G = "[a-zA-Z_]\\w*::",
            Z = "<[^<>]+>",
            I = "(decltype\\(auto\\)|" + RxA("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + RxA("<[^<>]+>") + ")",
            Y = {
                className: "keyword",
                begin: "\\b[a-z\\d_]*_t\\b"
            },
            J = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
            W = {
                className: "string",
                variants: [{
                    begin: '(u8?|U|L)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [A.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: "."
                }, A.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/
                })]
            },
            X = {
                className: "number",
                variants: [{
                    begin: "\\b(0b[01']+)"
                }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                relevance: 0
            },
            F = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /$/,
                keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                },
                contains: [{
                    begin: /\\\n/,
                    relevance: 0
                }, A.inherit(W, {
                    className: "meta-string"
                }), {
                    className: "meta-string",
                    begin: /<.*?>/
                }, Q, A.C_BLOCK_COMMENT_MODE]
            },
            V = {
                className: "title",
                begin: RxA("[a-zA-Z_]\\w*::") + A.IDENT_RE,
                relevance: 0
            },
            K = RxA("[a-zA-Z_]\\w*::") + A.IDENT_RE + "\\s*\\(",
            H = {
                keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
                built_in: "_Bool _Complex _Imaginary",
                _relevance_hints: ["asin", "atan2", "atan", "calloc", "ceil", "cosh", "cos", "exit", "exp", "fabs", "floor", "fmod", "fprintf", "fputs", "free", "frexp", "auto_ptr", "deque", "list", "queue", "stack", "vector", "map", "set", "pair", "bitset", "multiset", "multimap", "unordered_set", "fscanf", "future", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "tolower", "toupper", "labs", "ldexp", "log10", "log", "malloc", "realloc", "memchr", "memcmp", "memcpy", "memset", "modf", "pow", "printf", "putchar", "puts", "scanf", "sinh", "sin", "snprintf", "sprintf", "sqrt", "sscanf", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "tanh", "tan", "unordered_map", "unordered_multiset", "unordered_multimap", "priority_queue", "make_pair", "array", "shared_ptr", "abort", "terminate", "abs", "acos", "vfprintf", "vprintf", "vsprintf", "endl", "initializer_list", "unique_ptr", "complex", "imaginary", "std", "string", "wstring", "cin", "cout", "cerr", "clog", "stdin", "stdout", "stderr", "stringstream", "istringstream", "ostringstream"],
                literal: "true false nullptr NULL"
            },
            C = {
                className: "function.dispatch",
                relevance: 0,
                keywords: H,
                begin: fH1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, A.IDENT_RE, sQ4(/\s*\(/))
            },
            E = [C, F, Y, Q, A.C_BLOCK_COMMENT_MODE, X, W],
            z = {
                variants: [{
                    begin: /=/,
                    end: /;/
                }, {
                    begin: /\(/,
                    end: /\)/
                }, {
                    beginKeywords: "new throw return else",
                    end: /;/
                }],
                keywords: H,
                contains: E.concat([{
                    begin: /\(/,
                    end: /\)/,
                    keywords: H,
                    contains: E.concat(["self"]),
                    relevance: 0
                }]),
                relevance: 0
            },
            w = {
                className: "function",
                begin: "(" + I + "[\\*&\\s]+)+" + K,
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: H,
                illegal: /[^\w\s\*&:<>.]/,
                contains: [{
                    begin: "decltype\\(auto\\)",
                    keywords: H,
                    relevance: 0
                }, {
                    begin: K,
                    returnBegin: !0,
                    contains: [V],
                    relevance: 0
                }, {
                    begin: /::/,
                    relevance: 0
                }, {
                    begin: /:/,
                    endsWithParent: !0,
                    contains: [W, X]
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: H,
                    relevance: 0,
                    contains: [Q, A.C_BLOCK_COMMENT_MODE, W, X, Y, {
                        begin: /\(/,
                        end: /\)/,
                        keywords: H,
                        relevance: 0,
                        contains: ["self", Q, A.C_BLOCK_COMMENT_MODE, W, X, Y]
                    }]
                }, Y, Q, A.C_BLOCK_COMMENT_MODE, F]
            };
        return {
            name: "C++",
            aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
            keywords: H,
            illegal: "</",
            classNameAliases: {
                "function.dispatch": "built_in"
            },
            contains: [].concat(z, w, C, E, [F, {
                begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                end: ">",
                keywords: H,
                contains: ["self", Y]
            }, {
                begin: A.IDENT_RE + "::",
                keywords: H
            }, {
                className: "class",
                beginKeywords: "enum class struct union",
                end: /[{;:<>=]/,
                contains: [{
                    beginKeywords: "final class struct"
                }, A.TITLE_MODE]
            }]),
            exports: {
                preprocessor: F,
                strings: W,
                keywords: H
            }
        }
    }
    Df0.exports = rQ4
});
var Ef0 = U((Y97, Cf0) => {
    function oQ4(A) {
        let B = "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml",
            G = "property rsc_defaults op_defaults",
            Z = "params meta operations op rule attributes utilization",
            I = "read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\",
            Y = "number string",
            J = "Master Started Slave Stopped start promote demote stop monitor true false";
        return {
            name: "crmsh",
            aliases: ["crm", "pcmk"],
            case_insensitive: !0,
            keywords: {
                keyword: "params meta operations op rule attributes utilization " + I + " number string",
                literal: "Master Started Slave Stopped start promote demote stop monitor true false"
            },
            contains: [A.HASH_COMMENT_MODE, {
                beginKeywords: "node",
                starts: {
                    end: "\\s*([\\w_-]+:)?",
                    starts: {
                        className: "title",
                        end: "\\s*[\\$\\w_][\\w_-]*"
                    }
                }
            }, {
                beginKeywords: "primitive rsc_template",
                starts: {
                    className: "title",
                    end: "\\s*[\\$\\w_][\\w_-]*",
                    starts: {
                        end: "\\s*@?[\\w_][\\w_\\.:-]*"
                    }
                }
            }, {
                begin: "\\b(" + B.split(" ").join("|") + ")\\s+",
                keywords: B,
                starts: {
                    className: "title",
                    end: "[\\$\\w_][\\w_-]*"
                }
            }, {
                beginKeywords: "property rsc_defaults op_defaults",
                starts: {
                    className: "title",
                    end: "\\s*([\\w_-]+:)?"
                }
            }, A.QUOTE_STRING_MODE, {
                className: "meta",
                begin: "(ocf|systemd|service|lsb):[\\w_:-]+",
                relevance: 0
            }, {
                className: "number",
                begin: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?",
                relevance: 0
            }, {
                className: "literal",
                begin: "[-]?(infinity|inf)",
                relevance: 0
            }, {
                className: "attr",
                begin: /([A-Za-z$_#][\w_-]+)=/,
                relevance: 0
            }, {
                className: "tag",
                begin: "</?",
                end: "/?>",
                relevance: 0
            }]
        }
    }
    Cf0.exports = oQ4
});
var Uf0 = U((J97, zf0) => {
    function tQ4(A) {
        let Y = {
                $pattern: "[a-zA-Z_]\\w*[!?=]?",
                keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
                literal: "false nil true"
            },
            J = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: Y
            },
            W = {
                className: "template-variable",
                variants: [{
                    begin: "\\{\\{",
                    end: "\\}\\}"
                }, {
                    begin: "\\{%",
                    end: "%\\}"
                }],
                keywords: Y
            };

function X(E, z) {
            let w = [{
                begin: E,
                end: z
            }];
            return w[0].contains = w, w
        }
        let F = {
                className: "string",
                contains: [A.BACKSLASH_ESCAPE, J],
                variants: [{
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /`/,
                    end: /`/
                }, {
                    begin: "%[Qwi]?\\(",
                    end: "\\)",
                    contains: X("\\(", "\\)")
                }, {
                    begin: "%[Qwi]?\\[",
                    end: "\\]",
                    contains: X("\\[", "\\]")
                }, {
                    begin: "%[Qwi]?\\{",
                    end: /\}/,
                    contains: X(/\{/, /\}/)
                }, {
                    begin: "%[Qwi]?<",
                    end: ">",
                    contains: X("<", ">")
                }, {
                    begin: "%[Qwi]?\\|",
                    end: "\\|"
                }, {
                    begin: /<<-\w+$/,
                    end: /^\s*\w+$/
                }],
                relevance: 0
            },
            V = {
                className: "string",
                variants: [{
                    begin: "%q\\(",
                    end: "\\)",
                    contains: X("\\(", "\\)")
                }, {
                    begin: "%q\\[",
                    end: "\\]",
                    contains: X("\\[", "\\]")
                }, {
                    begin: "%q\\{",
                    end: /\}/,
                    contains: X(/\{/, /\}/)
                }, {
                    begin: "%q<",
                    end: ">",
                    contains: X("<", ">")
                }, {
                    begin: "%q\\|",
                    end: "\\|"
                }, {
                    begin: /<<-'\w+'$/,
                    end: /^\s*\w+$/
                }],
                relevance: 0
            },
            K = {
                begin: "(?!%\\})(" + A.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
                keywords: "case if select unless until when while",
                contains: [{
                    className: "regexp",
                    contains: [A.BACKSLASH_ESCAPE, J],
                    variants: [{
                        begin: "//[a-z]*",
                        relevance: 0
                    }, {
                        begin: "/(?!\\/)",
                        end: "/[a-z]*"
                    }]
                }],
                relevance: 0
            },
            D = {
                className: "regexp",
                contains: [A.BACKSLASH_ESCAPE, J],
                variants: [{
                    begin: "%r\\(",
                    end: "\\)",
                    contains: X("\\(", "\\)")
                }, {
                    begin: "%r\\[",
                    end: "\\]",
                    contains: X("\\[", "\\]")
                }, {
                    begin: "%r\\{",
                    end: /\}/,
                    contains: X(/\{/, /\}/)
                }, {
                    begin: "%r<",
                    end: ">",
                    contains: X("<", ">")
                }, {
                    begin: "%r\\|",
                    end: "\\|"
                }],
                relevance: 0
            },
            H = {
                className: "meta",
                begin: "@\\[",
                end: "\\]",
                contains: [A.inherit(A.QUOTE_STRING_MODE, {
                    className: "meta-string"
                })]
            },
            C = [W, F, V, D, K, H, A.HASH_COMMENT_MODE, {
                className: "class",
                beginKeywords: "class module struct",
                end: "$|;",
                illegal: /=/,
                contains: [A.HASH_COMMENT_MODE, A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
                }), {
                    begin: "<"
                }]
            }, {
                className: "class",
                beginKeywords: "lib enum union",
                end: "$|;",
                illegal: /=/,
                contains: [A.HASH_COMMENT_MODE, A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
                })]
            }, {
                beginKeywords: "annotation",
                end: "$|;",
                illegal: /=/,
                contains: [A.HASH_COMMENT_MODE, A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
                })],
                relevance: 2
            }, {
                className: "function",
                beginKeywords: "def",
                end: /\B\b/,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
                    endsParent: !0
                })]
            }, {
                className: "function",
                beginKeywords: "fun macro",
                end: /\B\b/,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",
                    endsParent: !0
                })],
                relevance: 2
            }, {
                className: "symbol",
                begin: A.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                relevance: 0
            }, {
                className: "symbol",
                begin: ":",
                contains: [F, {
                    begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?"
                }],
                relevance: 0
            }, {
                className: "number",
                variants: [{
                    begin: "\\b0b([01_]+)(_?[ui](8|16|32|64|128))?"
                }, {
                    begin: "\\b0o([0-7_]+)(_?[ui](8|16|32|64|128))?"
                }, {
                    begin: "\\b0x([A-Fa-f0-9_]+)(_?[ui](8|16|32|64|128))?"
                }, {
                    begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)"
                }, {
                    begin: "\\b([1-9][0-9_]*|0)(_?[ui](8|16|32|64|128))?"
                }],
                relevance: 0
            }];
        return J.contains = C, W.contains = C.slice(1), {
            name: "Crystal",
            aliases: ["cr"],
            keywords: Y,
            contains: C
        }
    }
    zf0.exports = tQ4
});
var wf0 = U((W97, $f0) => {
    function eQ4(A) {
        let Q = ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
            B = ["public", "private", "protected", "static", "internal", "protected", "abstract", "async", "extern", "override", "unsafe", "virtual", "new", "sealed", "partial"],
            G = ["default", "false", "null", "true"],
            Z = ["abstract", "as", "base", "break", "case", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"],
            I = ["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"],
            Y = {
                keyword: Z.concat(I),
                built_in: Q,
                literal: G
            },
            J = A.inherit(A.TITLE_MODE, {
                begin: "[a-zA-Z](\\.?\\w)*"
            }),
            W = {
                className: "number",
                variants: [{
                    begin: "\\b(0b[01']+)"
                }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                relevance: 0
            },
            X = {
                className: "string",
                begin: '@"',
                end: '"',
                contains: [{
                    begin: '""'
                }]
            },
            F = A.inherit(X, {
                illegal: /\n/
            }),
            V = {
                className: "subst",
                begin: /\{/,
                end: /\}/,
                keywords: Y
            },
            K = A.inherit(V, {
                illegal: /\n/
            }),
            D = {
                className: "string",
                begin: /\$"/,
                end: '"',
                illegal: /\n/,
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, A.BACKSLASH_ESCAPE, K]
            },
            H = {
                className: "string",
                begin: /\$@"/,
                end: '"',
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, {
                    begin: '""'
                }, V]
            },
            C = A.inherit(H, {
                illegal: /\n/,
                contains: [{
                    begin: /\{\{/
                }, {
                    begin: /\}\}/
                }, {
                    begin: '""'
                }, K]
            });
        V.contains = [H, D, X, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, W, A.C_BLOCK_COMMENT_MODE], K.contains = [C, D, F, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, W, A.inherit(A.C_BLOCK_COMMENT_MODE, {
            illegal: /\n/
        })];
        let E = {
                variants: [H, D, X, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
            },
            z = {
                begin: "<",
                end: ">",
                contains: [{
                    beginKeywords: "in out"
                }, J]
            },
            w = A.IDENT_RE + "(<" + A.IDENT_RE + "(\\s*,\\s*" + A.IDENT_RE + ")*>)?(\\[\\])?",
            N = {
                begin: "@" + A.IDENT_RE,
                relevance: 0
            };
        return {
            name: "C#",
            aliases: ["cs", "c#"],
            keywords: Y,
            illegal: /::/,
            contains: [A.COMMENT("///", "$", {
                returnBegin: !0,
                contains: [{
                    className: "doctag",
                    variants: [{
                        begin: "///",
                        relevance: 0
                    }, {
                        begin: "<!--|-->"
                    }, {
                        begin: "</?",
                        end: ">"
                    }]
                }]
            }), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                }
            }, E, W, {
                beginKeywords: "class interface",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:,]/,
                contains: [{
                    beginKeywords: "where class"
                }, J, z, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
            }, {
                beginKeywords: "namespace",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [J, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
            }, {
                beginKeywords: "record",
                relevance: 0,
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [J, z, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
            }, {
                className: "meta",
                begin: "^\\s*\\[",
                excludeBegin: !0,
                end: "\\]",
                excludeEnd: !0,
                contains: [{
                    className: "meta-string",
                    begin: /"/,
                    end: /"/
                }]
            }, {
                beginKeywords: "new return throw await else",
                relevance: 0
            }, {
                className: "function",
                begin: "(" + w + "\\s+)+" + A.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
                returnBegin: !0,
                end: /\s*[{;=]/,
                excludeEnd: !0,
                keywords: Y,
                contains: [{
                    beginKeywords: B.join(" "),
                    relevance: 0
                }, {
                    begin: A.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
                    returnBegin: !0,
                    contains: [A.TITLE_MODE, z],
                    relevance: 0
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: Y,
                    relevance: 0,
                    contains: [E, W, A.C_BLOCK_COMMENT_MODE]
                }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
            }, N]
        }
    }
    $f0.exports = eQ4
});
var Nf0 = U((X97, qf0) => {
    function AB4(A) {
        return {
            name: "CSP",
            case_insensitive: !1,
            keywords: {
                $pattern: "[a-zA-Z][a-zA-Z0-9_-]*",
                keyword: "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src"
            },
            contains: [{
                className: "string",
                begin: "'",
                end: "'"
            }, {
                className: "attribute",
                begin: "^Content",
                end: ":",
                excludeEnd: !0
            }]
        }
    }
    qf0.exports = AB4
});
var Mf0 = U((F97, Lf0) => {
    var QB4 = (A) => {
            return {
                IMPORTANT: {
                    className: "meta",
                    begin: "!important"
                },
                HEXCOLOR: {
                    className: "number",
                    begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
                },
                ATTRIBUTE_SELECTOR_MODE: {
                    className: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
                }
            }
        },
        BB4 = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
        GB4 = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
        ZB4 = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
        IB4 = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
        YB4 = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-variation-settings", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "src", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"].reverse();

function JB4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function WB4(A) {
        return XB4("(?=", A, ")")
    }

function XB4(...A) {
        return A.map((B) => JB4(B)).join("")
    }

function FB4(A) {
        let Q = QB4(A),
            B = {
                className: "built_in",
                begin: /[\w-]+(?=\()/
            },
            G = {
                begin: /-(webkit|moz|ms|o)-(?=[a-z])/
            },
            Z = "and or not only",
            I = /@-?\w[\w]*(-\w+)*/,
            Y = "[a-zA-Z-][a-zA-Z0-9_-]*",
            J = [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE];
        return {
            name: "CSS",
            case_insensitive: !0,
            illegal: /[=|'\$]/,
            keywords: {
                keyframePosition: "from to"
            },
            classNameAliases: {
                keyframePosition: "selector-tag"
            },
            contains: [A.C_BLOCK_COMMENT_MODE, G, A.CSS_NUMBER_MODE, {
                className: "selector-id",
                begin: /#[A-Za-z0-9_-]+/,
                relevance: 0
            }, {
                className: "selector-class",
                begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                relevance: 0
            }, Q.ATTRIBUTE_SELECTOR_MODE, {
                className: "selector-pseudo",
                variants: [{
                    begin: ":(" + ZB4.join("|") + ")"
                }, {
                    begin: "::(" + IB4.join("|") + ")"
                }]
            }, {
                className: "attribute",
                begin: "\\b(" + YB4.join("|") + ")\\b"
            }, {
                begin: ":",
                end: "[;}]",
                contains: [Q.HEXCOLOR, Q.IMPORTANT, A.CSS_NUMBER_MODE, ...J, {
                    begin: /(url|data-uri)\(/,
                    end: /\)/,
                    relevance: 0,
                    keywords: {
                        built_in: "url data-uri"
                    },
                    contains: [{
                        className: "string",
                        begin: /[^)]/,
                        endsWithParent: !0,
                        excludeEnd: !0
                    }]
                }, B]
            }, {
                begin: WB4(/@/),
                end: "[{;]",
                relevance: 0,
                illegal: /:/,
                contains: [{
                    className: "keyword",
                    begin: I
                }, {
                    begin: /\s/,
                    endsWithParent: !0,
                    excludeEnd: !0,
                    relevance: 0,
                    keywords: {
                        $pattern: /[a-z-]+/,
                        keyword: "and or not only",
                        attribute: GB4.join(" ")
                    },
                    contains: [{
                        begin: /[a-z-]+(?=:)/,
                        className: "attribute"
                    }, ...J, A.CSS_NUMBER_MODE]
                }]
            }, {
                className: "selector-tag",
                begin: "\\b(" + BB4.join("|") + ")\\b"
            }]
        }
    }
    Lf0.exports = FB4
});
var Rf0 = U((V97, Of0) => {
    function VB4(A) {
        let Q = {
                $pattern: A.UNDERSCORE_IDENT_RE,
                keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
                built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
                literal: "false null true"
            },
            B = "(0|[1-9][\\d_]*)",
            G = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
            Z = "0[bB][01_]+",
            I = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
            Y = "0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
            J = "([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
            W = "((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|" + J + ")|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)" + J + "?)",
            X = "(0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))",
            F = "((0|[1-9][\\d_]*)|0[bB][01_]+|" + Y + ")",
            V = "(" + X + "|" + W + ")",
            K = `\\\\(['"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};`,
            D = {
                className: "number",
                begin: "\\b" + F + "(L|u|U|Lu|LU|uL|UL)?",
                relevance: 0
            },
            H = {
                className: "number",
                begin: "\\b(" + V + "([fF]|L|i|[fF]i|Li)?|" + F + "(i|[fF]i|Li))",
                relevance: 0
            },
            C = {
                className: "string",
                begin: "'(" + K + "|.)",
                end: "'",
                illegal: "."
            },
            z = {
                className: "string",
                begin: '"',
                contains: [{
                    begin: K,
                    relevance: 0
                }],
                end: '"[cwd]?'
            },
            w = {
                className: "string",
                begin: '[rq]"',
                end: '"[cwd]?',
                relevance: 5
            },
            N = {
                className: "string",
                begin: "`",
                end: "`[cwd]?"
            },
            q = {
                className: "string",
                begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
                relevance: 10
            },
            R = {
                className: "string",
                begin: 'q"\\{',
                end: '\\}"'
            },
            P = {
                className: "meta",
                begin: "^#!",
                end: "$",
                relevance: 5
            },
            y = {
                className: "meta",
                begin: "#(line)",
                end: "$",
                relevance: 5
            },
            v = {
                className: "keyword",
                begin: "@[a-zA-Z_][a-zA-Z_\\d]*"
            },
            x = A.COMMENT("\\/\\+", "\\+\\/", {
                contains: ["self"],
                relevance: 10
            });
        return {
            name: "D",
            keywords: Q,
            contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, x, q, z, w, N, R, H, D, C, P, y, v]
        }
    }
    Of0.exports = VB4
});
var Pf0 = U((K97, Tf0) => {
    function KB4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

function DB4(...A) {
        return A.map((B) => KB4(B)).join("")
    }

function HB4(A) {
        let Q = {
                begin: /<\/?[A-Za-z_]/,
                end: ">",
                subLanguage: "xml",
                relevance: 0
            },
            B = {
                begin: "^[-\\*]{3,}",
                end: "$"
            },
            G = {
                className: "code",
                variants: [{
                    begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
                }, {
                    begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                }, {
                    begin: "```",
                    end: "```+[ ]*$"
                }, {
                    begin: "~~~",
                    end: "~~~+[ ]*$"
                }, {
                    begin: "`.+?`"
                }, {
                    begin: "(?=^( {4}|\\t))",
                    contains: [{
                        begin: "^( {4}|\\t)",
                        end: "(\\n)$"
                    }],
                    relevance: 0
                }]
            },
            Z = {
                className: "bullet",
                begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                end: "\\s+",
                excludeEnd: !0
            },
            I = {
                begin: /^\[[^\n]+\]:/,
                returnBegin: !0,
                contains: [{
                    className: "symbol",
                    begin: /\[/,
                    end: /\]/,
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "link",
                    begin: /:\s*/,
                    end: /$/,
                    excludeBegin: !0
                }]
            },
            J = {
                variants: [{
                    begin: /\[.+?\]\[.*?\]/,
                    relevance: 0
                }, {
                    begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                    relevance: 2
                }, {
                    begin: DB4(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                    relevance: 2
                }, {
                    begin: /\[.+?\]\([./?&#].*?\)/,
                    relevance: 1
                }, {
                    begin: /\[.+?\]\(.*?\)/,
                    relevance: 0
                }],
                returnBegin: !0,
                contains: [{
                    className: "string",
                    relevance: 0,
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    returnEnd: !0
                }, {
                    className: "link",
                    relevance: 0,
                    begin: "\\]\\(",
                    end: "\\)",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "symbol",
                    relevance: 0,
                    begin: "\\]\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    excludeEnd: !0
                }]
            },
            W = {
                className: "strong",
                contains: [],
                variants: [{
                    begin: /_{2}/,
                    end: /_{2}/
                }, {
                    begin: /\*{2}/,
                    end: /\*{2}/
                }]
            },
            X = {
                className: "emphasis",
                contains: [],
                variants: [{
                    begin: /\*(?!\*)/,
                    end: /\*/
                }, {
                    begin: /_(?!_)/,
                    end: /_/,
                    relevance: 0
                }]
            };
        W.contains.push(X), X.contains.push(W);
        let F = [Q, J];
        return W.contains = W.contains.concat(F), X.contains = X.contains.concat(F), F = F.concat(W, X), {
            name: "Markdown",
            aliases: ["md", "mkdown", "mkd"],
            contains: [{
                className: "section",
                variants: [{
                    begin: "^#{1,6}",
                    end: "$",
                    contains: F
                }, {
                    begin: "(?=^.+?\\n[=-]{2,}$)",
                    contains: [{
                        begin: "^[=-]*$"
                    }, {
                        begin: "^",
                        end: "\\n",
                        contains: F
                    }]
                }]
            }, Q, Z, W, X, {
                className: "quote",
                begin: "^>\\s+",
                contains: F,
                end: "$"
            }, G, B, J, I]
        }
    }
    Tf0.exports = HB4
});
var Sf0 = U((D97, jf0) => {
    function CB4(A) {
        let Q = {
                className: "subst",
                variants: [{
                    begin: "\\$[A-Za-z0-9_]+"
                }]
            },
            B = {
                className: "subst",
                variants: [{
                    begin: /\$\{/,
                    end: /\}/
                }],
                keywords: "true false null this is new super"
            },