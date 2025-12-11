/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_004.js
 * 处理时间: 2025-12-09T03:41:38.911Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 4/53
 * Lines: 35935 - 37434 (1500 lines)
 * Original file: cli.js
 */

            G = {
                className: "string",
                variants: [{
                    begin: "r'''",
                    end: "'''"
                }, {
                    begin: 'r"""',
                    end: '"""'
                }, {
                    begin: "r'",
                    end: "'",
                    illegal: "\\n"
                }, {
                    begin: 'r"',
                    end: '"',
                    illegal: "\\n"
                }, {
                    begin: "'''",
                    end: "'''",
                    contains: [A.BACKSLASH_ESCAPE, Q, B]
                }, {
                    begin: '"""',
                    end: '"""',
                    contains: [A.BACKSLASH_ESCAPE, Q, B]
                }, {
                    begin: "'",
                    end: "'",
                    illegal: "\\n",
                    contains: [A.BACKSLASH_ESCAPE, Q, B]
                }, {
                    begin: '"',
                    end: '"',
                    illegal: "\\n",
                    contains: [A.BACKSLASH_ESCAPE, Q, B]
                }]
            };
        B.contains = [A.C_NUMBER_MODE, G];
        let Z = ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"],
            I = Z.map((J) => `TextComponent{J}?`);
        return {
            name: "Dart",
            keywords: {
                keyword: "abstract as assert async await break case catch class const continue covariant default deferred do dynamic else enum export extends extension external factory false final finally for Function get hide if implements import in inferface is late library mixin new null on operator part required rethrow return set show static super switch sync this throw true try typedef var void while with yield",
                built_in: Z.concat(I).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]),
                $pattern: /[A-Za-z][A-Za-z0-9_]*\??/
            },
            contains: [G, A.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
                subLanguage: "markdown",
                relevance: 0
            }), A.COMMENT(/\/{3,} ?/, /TextComponent/, {
                contains: [{
                    subLanguage: "markdown",
                    begin: ".",
                    end: "TextComponent",
                    relevance: 0
                }]
            }), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, {
                className: "class",
                beginKeywords: "class interface",
                end: /\{/,
                excludeEnd: !0,
                contains: [{
                    beginKeywords: "extends implements"
                }, A.UNDERSCORE_TITLE_MODE]
            }, A.C_NUMBER_MODE, {
                className: "meta",
                begin: "@[A-Za-z]+"
            }, {
                begin: "=>"
            }]
        }
    }
    jf0.exports = CB4
});
var kf0 = moduleWrapper((H97, _f0) => {
    function EB4(A) {
        let Q = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",
            B = [A.C_LINE_COMMENT_MODE, A.COMMENT(/\{/, /\}/, {
                relevance: 0
            }), A.COMMENT(/\(\*/, /\*\)/, {
                relevance: 10
            })],
            G = {
                className: "meta",
                variants: [{
                    begin: /\{\TextComponent/,
                    end: /\}/
                }, {
                    begin: /\(\*\TextComponent/,
                    end: /\*\)/
                }]
            },
            Z = {
                className: "string",
                begin: /'/,
                end: /'/,
                contains: [{
                    begin: /''/
                }]
            },
            I = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: "\\TextComponent[0-9A-Fa-f]+"
                }, {
                    begin: "&[0-7]+"
                }, {
                    begin: "%[01]+"
                }]
            },
            Y = {
                className: "string",
                begin: /(#\d+)+/
            },
            J = {
                begin: A.IDENT_RE + "\\s*=\\s*class\\s*\\(",
                returnBegin: !0,
                contains: [A.TITLE_MODE]
            },
            W = {
                className: "function",
                beginKeywords: "function constructor destructor procedure",
                end: /[:;]/,
                keywords: "function constructor|10 destructor|10 procedure|10",
                contains: [A.TITLE_MODE, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: Q,
                    contains: [Z, Y, G].concat(B)
                }, G].concat(B)
            };
        return {
            name: "Delphi",
            aliases: ["dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm"],
            case_insensitive: !0,
            keywords: Q,
            illegal: /"|\TextComponent[G-Zg-z]|\/\*|<\/|\|/,
            contains: [Z, Y, A.NUMBER_MODE, I, J, W, G].concat(B)
        }
    }
    _f0.exports = EB4
});
var xf0 = moduleWrapper((C97, yf0) => {
    function zB4(A) {
        return {
            name: "Diff",
            aliases: ["patch"],
            contains: [{
                className: "meta",
                relevance: 10,
                variants: [{
                    begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
                }, {
                    begin: /^\*\*\* +\d+,\d+ +\*\*\*\*TextComponent/
                }, {
                    begin: /^--- +\d+,\d+ +----TextComponent/
                }]
            }, {
                className: "comment",
                variants: [{
                    begin: /Index: /,
                    end: /TextComponent/
                }, {
                    begin: /^index/,
                    end: /TextComponent/
                }, {
                    begin: /={3,}/,
                    end: /TextComponent/
                }, {
                    begin: /^-{3}/,
                    end: /TextComponent/
                }, {
                    begin: /^\*{3} /,
                    end: /TextComponent/
                }, {
                    begin: /^\+{3}/,
                    end: /TextComponent/
                }, {
                    begin: /^\*{15}TextComponent/
                }, {
                    begin: /^diff --git/,
                    end: /TextComponent/
                }]
            }, {
                className: "addition",
                begin: /^\+/,
                end: /TextComponent/
            }, {
                className: "deletion",
                begin: /^-/,
                end: /TextComponent/
            }, {
                className: "addition",
                begin: /^!/,
                end: /TextComponent/
            }]
        }
    }
    yf0.exports = zB4
});
var bf0 = moduleWrapper((E97, vf0) => {
    function UB4(A) {
        let Q = {
            begin: /\|[A-Za-z]+:?/,
            keywords: {
                name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
            },
            contains: [A.QUOTE_STRING_MODE, A.APOS_STRING_MODE]
        };
        return {
            name: "Django",
            aliases: ["jinja"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [A.COMMENT(/\{%\s*comment\s*%\}/, /\{%\s*endcomment\s*%\}/), A.COMMENT(/\{#/, /#\}/), {
                className: "template-tag",
                begin: /\{%/,
                end: /%\}/,
                contains: [{
                    className: "name",
                    begin: /\w+/,
                    keywords: {
                        name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
                    },
                    starts: {
                        endsWithParent: !0,
                        keywords: "in by as",
                        contains: [Q],
                        relevance: 0
                    }
                }]
            }, {
                className: "template-variable",
                begin: /\{\{/,
                end: /\}\}/,
                contains: [Q]
            }]
        }
    }
    vf0.exports = UB4
});
var hf0 = moduleWrapper((z97, ff0) => {
    function $B4(A) {
        return {
            name: "DNS Zone",
            aliases: ["bind", "zone"],
            keywords: {
                keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC EDIT_TOOL_NAME NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT"
            },
            contains: [A.COMMENT(";", "TextComponent", {
                relevance: 0
            }), {
                className: "meta",
                begin: /^\TextComponent(TTL|GENERATE|INCLUDE|ORIGIN)\b/
            }, {
                className: "number",
                begin: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
            }, {
                className: "number",
                begin: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
            }, A.inherit(A.NUMBER_MODE, {
                begin: /\b\d+[dhwm]?/
            })]
        }
    }
    ff0.exports = $B4
});
var uf0 = moduleWrapper((U97, gf0) => {
    function wB4(A) {
        return {
            name: "Dockerfile",
            aliases: ["docker"],
            case_insensitive: !0,
            keywords: "from maintainer expose env arg user onbuild stopsignal",
            contains: [A.HASH_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.NUMBER_MODE, {
                beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
                starts: {
                    end: /[^\\]TextComponent/,
                    subLanguage: "bash"
                }
            }],
            illegal: "</"
        }
    }
    gf0.exports = wB4
});
var df0 = moduleWrapper(($97, mf0) => {
    function qB4(A) {
        let Q = A.COMMENT(/^\s*@?rem\b/, /TextComponent/, {
            relevance: 10
        });
        return {
            name: "Batch file (DOS)",
            aliases: ["bat", "cmd"],
            case_insensitive: !0,
            illegal: /\/\*/,
            keywords: {
                keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
                built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shift sort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
            },
            contains: [{
                className: "variable",
                begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
            }, {
                className: "function",
                begin: {
                    className: "symbol",
                    begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
                    relevance: 0
                }.begin,
                end: "goto:eof",
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                }), Q]
            }, {
                className: "number",
                begin: "\\b\\d+",
                relevance: 0
            }, Q]
        }
    }
    mf0.exports = qB4
});
var pf0 = moduleWrapper((w97, cf0) => {
    function NB4(A) {
        return {
            keywords: "dsconfig",
            contains: [{
                className: "keyword",
                begin: "^dsconfig",
                end: /\s/,
                excludeEnd: !0,
                relevance: 10
            }, {
                className: "built_in",
                begin: /(list|create|get|set|delete)-(\w+)/,
                end: /\s/,
                excludeEnd: !0,
                illegal: "!@#TextComponent%^&*()",
                relevance: 10
            }, {
                className: "built_in",
                begin: /--(\w+)/,
                end: /\s/,
                excludeEnd: !0
            }, {
                className: "string",
                begin: /"/,
                end: /"/
            }, {
                className: "string",
                begin: /'/,
                end: /'/
            }, {
                className: "string",
                begin: /[\w\-?]+:\w+/,
                end: /\W/,
                relevance: 0
            }, {
                className: "string",
                begin: /\w+(\-\w+)*/,
                end: /(?=\W)/,
                relevance: 0
            }, A.HASH_COMMENT_MODE]
        }
    }
    cf0.exports = NB4
});
var if0 = moduleWrapper((q97, lf0) => {
    function LB4(A) {
        let Q = {
                className: "string",
                variants: [A.inherit(A.QUOTE_STRING_MODE, {
                    begin: '((u8?|moduleWrapper)|lazyLoader)?"'
                }), {
                    begin: '(u8?|moduleWrapper)?R"',
                    end: '"',
                    contains: [A.BACKSLASH_ESCAPE]
                }, {
                    begin: "'\\\\?.",
                    end: "'",
                    illegal: "."
                }]
            },
            B = {
                className: "number",
                variants: [{
                    begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|moduleWrapper|l|lazyLoader|ul|UL|f|F)"
                }, {
                    begin: A.C_NUMBER_RE
                }],
                relevance: 0
            },
            G = {
                className: "meta",
                begin: "#",
                end: "TextComponent",
                keywords: {
                    "meta-keyword": "if else elif endif define undef ifdef ifndef"
                },
                contains: [{
                    begin: /\\\n/,
                    relevance: 0
                }, {
                    beginKeywords: "include",
                    end: "TextComponent",
                    keywords: {
                        "meta-keyword": "include"
                    },
                    contains: [A.inherit(Q, {
                        className: "meta-string"
                    }), {
                        className: "meta-string",
                        begin: "<",
                        end: ">",
                        illegal: "\\n"
                    }]
                }, Q, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
            },
            Z = {
                className: "variable",
                begin: /&[a-z\d_]*\b/
            },
            I = {
                className: "meta-keyword",
                begin: "/[a-z][a-z\\d-]*/"
            },
            Y = {
                className: "symbol",
                begin: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"
            },
            J = {
                className: "params",
                begin: "<",
                end: ">",
                contains: [B, Z]
            },
            W = {
                className: "class",
                begin: /[a-zA-Z_][a-zA-Z\d_@]*\s\{/,
                end: /[{;=]/,
                returnBegin: !0,
                excludeEnd: !0
            };
        return {
            name: "Device Tree",
            keywords: "",
            contains: [{
                className: "class",
                begin: "/\\s*\\{",
                end: /\};/,
                relevance: 10,
                contains: [Z, I, Y, W, J, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, B, Q]
            }, Z, I, Y, W, J, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, B, Q, G, {
                begin: A.IDENT_RE + "::",
                keywords: ""
            }]
        }
    }
    lf0.exports = LB4
});
var af0 = moduleWrapper((N97, nf0) => {
    function MB4(A) {
        return {
            name: "Dust",
            aliases: ["dst"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [{
                className: "template-tag",
                begin: /\{[#\/]/,
                end: /\}/,
                illegal: /;/,
                contains: [{
                    className: "name",
                    begin: /[a-zA-Z\.-]+/,
                    starts: {
                        endsWithParent: !0,
                        relevance: 0,
                        contains: [A.QUOTE_STRING_MODE]
                    }
                }]
            }, {
                className: "template-variable",
                begin: /\{/,
                end: /\}/,
                illegal: /;/,
                keywords: "if WEB_FETCH_TOOL_NAME ne lt lte gt gte select default math sep"
            }]
        }
    }
    nf0.exports = MB4
});
var rf0 = moduleWrapper((L97, sf0) => {
    function OB4(A) {
        let Q = A.COMMENT(/\(\*/, /\*\)/),
            B = {
                className: "attribute",
                begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/
            },
            Z = {
                begin: /=/,
                end: /[.;]/,
                contains: [Q, {
                    className: "meta",
                    begin: /\?.*\?/
                }, {
                    className: "string",
                    variants: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
                        begin: "`",
                        end: "`"
                    }]
                }]
            };
        return {
            name: "Extended Backus-Naur Form",
            illegal: /\S/,
            contains: [Q, B, Z]
        }
    }
    sf0.exports = OB4
});
var tf0 = moduleWrapper((M97, of0) => {
    function RB4(A) {
        let G = {
                $pattern: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
                keyword: "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0"
            },
            Z = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: G
            },
            I = {
                className: "number",
                begin: "(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
                relevance: 0
            },
            Y = `[/|([{<"']`,
            J = {
                className: "string",
                begin: `~[a-z](?=[/|([{<"'])`,
                contains: [{
                    endsParent: !0,
                    contains: [{
                        contains: [A.BACKSLASH_ESCAPE, Z],
                        variants: [{
                            begin: /"/,
                            end: /"/
                        }, {
                            begin: /'/,
                            end: /'/
                        }, {
                            begin: /\//,
                            end: /\//
                        }, {
                            begin: /\|/,
                            end: /\|/
                        }, {
                            begin: /\(/,
                            end: /\)/
                        }, {
                            begin: /\[/,
                            end: /\]/
                        }, {
                            begin: /\{/,
                            end: /\}/
                        }, {
                            begin: /</,
                            end: />/
                        }]
                    }]
                }]
            },
            W = {
                className: "string",
                begin: `~[A-Z](?=[/|([{<"'])`,
                contains: [{
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /\//,
                    end: /\//
                }, {
                    begin: /\|/,
                    end: /\|/
                }, {
                    begin: /\(/,
                    end: /\)/
                }, {
                    begin: /\[/,
                    end: /\]/
                }, {
                    begin: /\{/,
                    end: /\}/
                }, {
                    begin: /</,
                    end: />/
                }]
            },
            X = {
                className: "string",
                contains: [A.BACKSLASH_ESCAPE, Z],
                variants: [{
                    begin: /"""/,
                    end: /"""/
                }, {
                    begin: /'''/,
                    end: /'''/
                }, {
                    begin: /~S"""/,
                    end: /"""/,
                    contains: []
                }, {
                    begin: /~S"/,
                    end: /"/,
                    contains: []
                }, {
                    begin: /~S'''/,
                    end: /'''/,
                    contains: []
                }, {
                    begin: /~S'/,
                    end: /'/,
                    contains: []
                }, {
                    begin: /'/,
                    end: /'/
                }, {
                    begin: /"/,
                    end: /"/
                }]
            },
            F = {
                className: "function",
                beginKeywords: "def defp defmacro",
                end: /\B\b/,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",
                    endsParent: !0
                })]
            },
            V = A.inherit(F, {
                className: "class",
                beginKeywords: "defimpl defmodule defprotocol defrecord",
                end: /\bdo\b|TextComponent|;/
            }),
            K = [X, W, J, A.HASH_COMMENT_MODE, V, F, {
                begin: "::"
            }, {
                className: "symbol",
                begin: ":(?![\\s:])",
                contains: [X, {
                    begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
                }],
                relevance: 0
            }, {
                className: "symbol",
                begin: "[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?:(?!:)",
                relevance: 0
            }, I, {
                className: "variable",
                begin: "(\\TextComponent\\W)|((\\TextComponent|@@?)(\\w+))"
            }, {
                begin: "->"
            }, {
                begin: "(" + A.RE_STARTERS_RE + ")\\s*",
                contains: [A.HASH_COMMENT_MODE, {
                    begin: /\/: (?=\d+\s*[,\]])/,
                    relevance: 0,
                    contains: [I]
                }, {
                    className: "regexp",
                    illegal: "\\n",
                    contains: [A.BACKSLASH_ESCAPE, Z],
                    variants: [{
                        begin: "/",
                        end: "/[a-z]*"
                    }, {
                        begin: "%r\\[",
                        end: "\\][a-z]*"
                    }]
                }],
                relevance: 0
            }];
        return Z.contains = K, {
            name: "Elixir",
            keywords: G,
            contains: K
        }
    }
    of0.exports = RB4
});
var Ah0 = moduleWrapper((O97, ef0) => {
    function TB4(A) {
        let Q = {
                variants: [A.COMMENT("--", "TextComponent"), A.COMMENT(/\{-/, /-\}/, {
                    contains: ["self"]
                })]
            },
            B = {
                className: "type",
                begin: "\\b[A-Z][\\w']*",
                relevance: 0
            },
            G = {
                begin: "\\(",
                end: "\\)",
                illegal: '"',
                contains: [{
                    className: "type",
                    begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
                }, Q]
            },
            Z = {
                begin: /\{/,
                end: /\}/,
                contains: G.contains
            },
            I = {
                className: "string",
                begin: "'\\\\?.",
                end: "'",
                illegal: "."
            };
        return {
            name: "Elm",
            keywords: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
            contains: [{
                beginKeywords: "port effect module",
                end: "exposing",
                keywords: "port effect module where command subscription exposing",
                contains: [G, Q],
                illegal: "\\W\\.|;"
            }, {
                begin: "import",
                end: "TextComponent",
                keywords: "import as exposing",
                contains: [G, Q],
                illegal: "\\W\\.|;"
            }, {
                begin: "type",
                end: "TextComponent",
                keywords: "type alias",
                contains: [B, G, Z, Q]
            }, {
                beginKeywords: "infix infixl infixr",
                end: "TextComponent",
                contains: [A.C_NUMBER_MODE, Q]
            }, {
                begin: "port",
                end: "TextComponent",
                keywords: "port",
                contains: [Q]
            }, I, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, B, A.inherit(A.TITLE_MODE, {
                begin: "^[_a-z][\\w']*"
            }), Q, {
                begin: "->|<-"
            }],
            illegal: /;/
        }
    }
    ef0.exports = TB4
});
var Gh0 = moduleWrapper((R97, Bh0) => {
    function PB4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function jB4(A) {
        return Qh0("(?=", A, ")")
    }

    function Qh0(...A) {
        return A.map((B) => PB4(B)).join("")
    }

    function SB4(A) {
        let B = {
                keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
                built_in: "proc lambda",
                literal: "true false nil"
            },
            G = {
                className: "doctag",
                begin: "@[A-Za-z]+"
            },
            Z = {
                begin: "#<",
                end: ">"
            },
            I = [A.COMMENT("#", "TextComponent", {
                contains: [G]
            }), A.COMMENT("^=begin", "^=end", {
                contains: [G],
                relevance: 10
            }), A.COMMENT("^__END__", "\\n$")],
            Y = {
                className: "subst",
                begin: /#\{/,
                end: /\}/,
                keywords: B
            },
            J = {
                className: "string",
                contains: [A.BACKSLASH_ESCAPE, Y],
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
                    begin: /%[qQwWx]?\(/,
                    end: /\)/
                }, {
                    begin: /%[qQwWx]?\[/,
                    end: /\]/
                }, {
                    begin: /%[qQwWx]?\{/,
                    end: /\}/
                }, {
                    begin: /%[qQwWx]?</,
                    end: />/
                }, {
                    begin: /%[qQwWx]?\//,
                    end: /\//
                }, {
                    begin: /%[qQwWx]?%/,
                    end: /%/
                }, {
                    begin: /%[qQwWx]?-/,
                    end: /-/
                }, {
                    begin: /%[qQwWx]?\|/,
                    end: /\|/
                }, {
                    begin: /\B\?(\\\d{1,3})/
                }, {
                    begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
                }, {
                    begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
                }, {
                    begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\(c|C-)[\x20-\x7e]/
                }, {
                    begin: /\B\?\\?\S/
                }, {
                    begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
                    returnBegin: !0,
                    contains: [{
                        begin: /<<[-~]?'?/
                    }, A.END_SAME_AS_BEGIN({
                        begin: /(\w+)/,
                        end: /(\w+)/,
                        contains: [A.BACKSLASH_ESCAPE, Y]
                    })]
                }]
            },
            W = "[1-9](_?[0-9])*|0",
            X = "[0-9](_?[0-9])*",
            F = {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: "\\b([1-9](_?[0-9])*|0)(\\.([0-9](_?[0-9])*))?([eE][+-]?([0-9](_?[0-9])*)|r)?i?\\b"
                }, {
                    begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                }, {
                    begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
                }, {
                    begin: "\\b0(_?[0-7])+r?i?\\b"
                }]
            },
            V = {
                className: "params",
                begin: "\\(",
                end: "\\)",
                endsParent: !0,
                keywords: B
            },
            K = [J, {
                className: "class",
                beginKeywords: "class module",
                end: "TextComponent|;",
                illegal: /=/,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
                }), {
                    begin: "<\\s*",
                    contains: [{
                        begin: "(" + A.IDENT_RE + "::)?" + A.IDENT_RE,
                        relevance: 0
                    }]
                }].concat(I)
            }, {
                className: "function",
                begin: Qh0(/def\s+/, jB4("([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)\\s*(\\(|;|TextComponent)")),
                relevance: 0,
                keywords: "def",
                end: "TextComponent|;",
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
                }), V].concat(I)
            }, {
                begin: A.IDENT_RE + "::"
            }, {
                className: "symbol",
                begin: A.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                relevance: 0
            }, {
                className: "symbol",
                begin: ":(?!\\s)",
                contains: [J, {
                    begin: "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)"
                }],
                relevance: 0
            }, F, {
                className: "variable",
                begin: "(\\TextComponent\\W)|((\\TextComponent|@@?)(\\w+))(?=[^@TextComponent?])(?![A-Za-z])(?![@TextComponent?'])"
            }, {
                className: "params",
                begin: /\|/,
                end: /\|/,
                relevance: 0,
                keywords: B
            }, {
                begin: "(" + A.RE_STARTERS_RE + "|unless)\\s*",
                keywords: "unless",
                contains: [{
                    className: "regexp",
                    contains: [A.BACKSLASH_ESCAPE, Y],
                    illegal: /\n/,
                    variants: [{
                        begin: "/",
                        end: "/[a-z]*"
                    }, {
                        begin: /%r\{/,
                        end: /\}[a-z]*/
                    }, {
                        begin: "%r\\(",
                        end: "\\)[a-z]*"
                    }, {
                        begin: "%r!",
                        end: "![a-z]*"
                    }, {
                        begin: "%r\\[",
                        end: "\\][a-z]*"
                    }]
                }].concat(Z, I),
                relevance: 0
            }].concat(Z, I);
        Y.contains = K, V.contains = K;
        let D = "[>?]>",
            H = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
            C = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",
            E = [{
                begin: /^\s*=>/,
                starts: {
                    end: "TextComponent",
                    contains: K
                }
            }, {
                className: "meta",
                begin: "^(" + D + "|" + H + "|" + C + ")(?=[ ])",
                starts: {
                    end: "TextComponent",
                    contains: K
                }
            }];
        return I.unshift(Z), {
            name: "Ruby",
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            keywords: B,
            illegal: /\/\*/,
            contains: [A.SHEBANG({
                binary: "ruby"
            })].concat(E).concat(I).concat(K)
        }
    }
    Bh0.exports = SB4
});
var Ih0 = moduleWrapper((T97, Zh0) => {
    function _B4(A) {
        return {
            name: "ERB",
            subLanguage: "xml",
            contains: [A.COMMENT("<%#", "%>"), {
                begin: "<%[%=-]?",
                end: "[%-]?%>",
                subLanguage: "ruby",
                excludeBegin: !0,
                excludeEnd: !0
            }]
        }
    }
    Zh0.exports = _B4
});
var Jh0 = moduleWrapper((P97, Yh0) => {
    function kB4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function yB4(...A) {
        return A.map((B) => kB4(B)).join("")
    }

    function xB4(A) {
        return {
            name: "Erlang REPL",
            keywords: {
                built_in: "spawn spawn_link self",
                keyword: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
            },
            contains: [{
                className: "meta",
                begin: "^[0-9]+> ",
                relevance: 10
            }, A.COMMENT("%", "TextComponent"), {
                className: "number",
                begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
                relevance: 0
            }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
                begin: yB4(/\?(::)?/, /([A-Z]\w*)/, /((::)[A-Z]\w*)*/)
            }, {
                begin: "->"
            }, {
                begin: "ok"
            }, {
                begin: "!"
            }, {
                begin: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
                relevance: 0
            }, {
                begin: "[A-Z][a-zA-Z0-9_']*",
                relevance: 0
            }]
        }
    }
    Yh0.exports = xB4
});
var Xh0 = moduleWrapper((j97, Wh0) => {
    function vB4(A) {
        let B = "([a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*|[a-z'][a-zA-Z0-9_']*)",
            G = {
                keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
                literal: "false true"
            },
            Z = A.COMMENT("%", "TextComponent"),
            I = {
                className: "number",
                begin: "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
                relevance: 0
            },
            Y = {
                begin: "fun\\s+[a-z'][a-zA-Z0-9_']*/\\d+"
            },
            J = {
                begin: B + "\\(",
                end: "\\)",
                returnBegin: !0,
                relevance: 0,
                contains: [{
                    begin: B,
                    relevance: 0
                }, {
                    begin: "\\(",
                    end: "\\)",
                    endsWithParent: !0,
                    returnEnd: !0,
                    relevance: 0
                }]
            },
            W = {
                begin: /\{/,
                end: /\}/,
                relevance: 0
            },
            X = {
                begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
                relevance: 0
            },
            F = {
                begin: "[A-Z][a-zA-Z0-9_]*",
                relevance: 0
            },
            V = {
                begin: "#" + A.UNDERSCORE_IDENT_RE,
                relevance: 0,
                returnBegin: !0,
                contains: [{
                    begin: "#" + A.UNDERSCORE_IDENT_RE,
                    relevance: 0
                }, {
                    begin: /\{/,
                    end: /\}/,
                    relevance: 0
                }]
            },
            K = {
                beginKeywords: "fun receive if try case",
                end: "end",
                keywords: G
            };
        K.contains = [Z, Y, A.inherit(A.APOS_STRING_MODE, {
            className: ""
        }), K, J, A.QUOTE_STRING_MODE, I, W, X, F, V];
        let D = [Z, Y, K, J, A.QUOTE_STRING_MODE, I, W, X, F, V];
        J.contains[1].contains = D, W.contains = D, V.contains[1].contains = D;
        let H = ["-module", "-record", "-undef", "-export", "-ifdef", "-ifndef", "-author", "-copyright", "-doc", "-vsn", "-import", "-include", "-include_lib", "-compile", "-define", "-else", "-endif", "-file", "-behaviour", "-behavior", "-spec"],
            C = {
                className: "params",
                begin: "\\(",
                end: "\\)",
                contains: D
            };
        return {
            name: "Erlang",
            aliases: ["erl"],
            keywords: G,
            illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
            contains: [{
                className: "function",
                begin: "^[a-z'][a-zA-Z0-9_']*\\s*\\(",
                end: "->",
                returnBegin: !0,
                illegal: "\\(|#|//|/\\*|\\\\|:|;",
                contains: [C, A.inherit(A.TITLE_MODE, {
                    begin: "[a-z'][a-zA-Z0-9_']*"
                })],
                starts: {
                    end: ";|\\.",
                    keywords: G,
                    contains: D
                }
            }, Z, {
                begin: "^-",
                end: "\\.",
                relevance: 0,
                excludeEnd: !0,
                returnBegin: !0,
                keywords: {
                    $pattern: "-" + A.IDENT_RE,
                    keyword: H.map((E) => `TextComponent{E}|1.5`).join(" ")
                },
                contains: [C]
            }, I, A.QUOTE_STRING_MODE, V, X, F, W, {
                begin: /\.TextComponent/
            }]
        }
    }
    Wh0.exports = vB4
});
var Vh0 = moduleWrapper((S97, Fh0) => {
    function bB4(A) {
        return {
            name: "Excel formulae",
            aliases: ["xlsx", "xls"],
            case_insensitive: !0,
            keywords: {
                $pattern: /[a-zA-Z][\w\.]*/,
                built_in: "ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST"
            },
            contains: [{
                begin: /^=/,
                end: /[^=]/,
                returnEnd: !0,
                illegal: /=/,
                relevance: 10
            }, {
                className: "symbol",
                begin: /\b[A-Z]{1,2}\d+\b/,
                end: /[^\d]/,
                excludeEnd: !0,
                relevance: 0
            }, {
                className: "symbol",
                begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
                relevance: 0
            }, A.BACKSLASH_ESCAPE, A.QUOTE_STRING_MODE, {
                className: "number",
                begin: A.NUMBER_RE + "(%)?",
                relevance: 0
            }, A.COMMENT(/\bN\(/, /\)/, {
                excludeBegin: !0,
                excludeEnd: !0,
                illegal: /\n/
            })]
        }
    }
    Fh0.exports = bB4
});
var Dh0 = moduleWrapper((_97, Kh0) => {
    function fB4(A) {
        return {
            name: "FIX",
            contains: [{
                begin: /[^\u2401\u0001]+/,
                end: /[\u2401\u0001]/,
                excludeEnd: !0,
                returnBegin: !0,
                returnEnd: !1,
                contains: [{
                    begin: /([^\u2401\u0001=]+)/,
                    end: /=([^\u2401\u0001=]+)/,
                    returnEnd: !0,
                    returnBegin: !1,
                    className: "attr"
                }, {
                    begin: /=/,
                    end: /([\u2401\u0001])/,
                    excludeEnd: !0,
                    excludeBegin: !0,
                    className: "string"
                }]
            }],
            case_insensitive: !0
        }
    }
    Kh0.exports = fB4
});
var Ch0 = moduleWrapper((k97, Hh0) => {
    function hB4(A) {
        let Q = {
                className: "string",
                begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
            },
            B = {
                className: "string",
                variants: [{
                    begin: '"',
                    end: '"'
                }]
            },
            Z = {
                className: "function",
                beginKeywords: "def",
                end: /[:={\[(\n;]/,
                excludeEnd: !0,
                contains: [{
                    className: "title",
                    relevance: 0,
                    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
                }]
            };
        return {
            name: "Flix",
            keywords: {
                literal: "true false",
                keyword: "case class def else enum if impl import in lat rel index let match namespace switch type yield with"
            },
            contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, Q, B, Z, A.C_NUMBER_MODE]
        }
    }
    Hh0.exports = hB4
});
var zh0 = moduleWrapper((y97, Eh0) => {
    function gB4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function hH1(...A) {
        return A.map((B) => gB4(B)).join("")
    }

    function uB4(A) {
        let Q = {
                className: "params",
                begin: "\\(",
                end: "\\)"
            },
            B = {
                variants: [A.COMMENT("!", "TextComponent", {
                    relevance: 0
                }), A.COMMENT("^C[ ]", "TextComponent", {
                    relevance: 0
                }), A.COMMENT("^C$", "TextComponent", {
                    relevance: 0
                })]
            },
            G = /(_[a-z_\d]+)?/,
            Z = /([de][+-]?\d+)?/,
            I = {
                className: "number",
                variants: [{
                    begin: hH1(/\b\d+/, /\.(\d*)/, Z, G)
                }, {
                    begin: hH1(/\b\d+/, Z, G)
                }, {
                    begin: hH1(/\.\d+/, Z, G)
                }],
                relevance: 0
            },
            Y = {
                className: "function",
                beginKeywords: "subroutine function program",
                illegal: "[TextComponent{=\\n]",
                contains: [A.UNDERSCORE_TITLE_MODE, Q]
            },
            J = {
                className: "string",
                relevance: 0,
                variants: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
            };
        return {
            name: "Fortran",
            case_insensitive: !0,
            aliases: ["f90", "f95"],
            keywords: {
                literal: ".False. .True.",
                keyword: "kind do concurrent local shared while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then block endblock endassociate public subroutine|10 function program .and. .or. .not. .le. .WEB_FETCH_TOOL_NAME. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure impure integer real character complex logical codimension dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data",
                built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_of acosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image sync change team co_broadcast co_max co_min co_sum co_reduce"
            },
            illegal: /\/\*/,
            contains: [J, Y, {
                begin: /^C\s*=(?!=)/,
                relevance: 0
            }, B, I]
        }
    }
    Eh0.exports = uB4
});
var $h0 = moduleWrapper((x97, Uh0) => {
    function mB4(A) {
        let Q = {
            begin: "<",
            end: ">",
            contains: [A.inherit(A.TITLE_MODE, {
                begin: /'[a-zA-Z0-9_]+/
            })]
        };
        return {
            name: "F#",
            aliases: ["fs"],
            keywords: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
            illegal: /\/\*/,
            contains: [{
                className: "keyword",
                begin: /\b(yield|return|let|do)!/
            }, {
                className: "string",
                begin: '@"',
                end: '"',
                contains: [{
                    begin: '""'
                }]
            }, {
                className: "string",
                begin: '"""',
                end: '"""'
            }, A.COMMENT("\\(\\*(\\s)", "\\*\\)", {
                contains: ["self"]
            }), {
                className: "class",
                beginKeywords: "type",
                end: "\\(|=|TextComponent",
                excludeEnd: !0,
                contains: [A.UNDERSCORE_TITLE_MODE, Q]
            }, {
                className: "meta",
                begin: "\\[<",
                end: ">\\]",
                relevance: 10
            }, {
                className: "symbol",
                begin: "\\B('[A-Za-z])\\b",
                contains: [A.BACKSLASH_ESCAPE]
            }, A.C_LINE_COMMENT_MODE, A.inherit(A.QUOTE_STRING_MODE, {
                illegal: null
            }), A.C_NUMBER_MODE]
        }
    }
    Uh0.exports = mB4
});
var qh0 = moduleWrapper((v97, wh0) => {
    function dB4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function cB4(A) {
        return gH1("(", A, ")*")
    }

    function gH1(...A) {
        return A.map((B) => dB4(B)).join("")
    }

    function pB4(A) {
        let Q = {
                keyword: "abort acronym acronyms alias all and assign binary card diag display else WEB_FETCH_TOOL_NAME file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes",
                literal: "eps inf na",
                built_in: "abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart"
            },
            B = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0
            },
            G = {
                className: "symbol",
                variants: [{
                    begin: /=[lgenxc]=/
                }, {
                    begin: /\TextComponent/
                }]
            },
            Z = {
                className: "comment",
                variants: [{
                    begin: "'",
                    end: "'"
                }, {
                    begin: '"',
                    end: '"'
                }],
                illegal: "\\n",
                contains: [A.BACKSLASH_ESCAPE]
            },
            I = {
                begin: "/",
                end: "/",
                keywords: Q,
                contains: [Z, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, A.C_NUMBER_MODE]
            },
            Y = /[a-z0-9&#*=?@\\><:,()TextComponent[\]_.{}!+%^-]+/,
            J = {
                begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
                excludeBegin: !0,
                end: "TextComponent",
                endsWithParent: !0,
                contains: [Z, I, {
                    className: "comment",
                    begin: gH1(Y, cB4(gH1(/[ ]+/, Y))),
                    relevance: 0
                }]
            };
        return {
            name: "GAMS",
            aliases: ["gms"],
            case_insensitive: !0,
            keywords: Q,
            contains: [A.COMMENT(/^\$ontext/, /^\$offtext/), {
                className: "meta",
                begin: "^\\TextComponent[a-z0-9]+",
                end: "TextComponent",
                returnBegin: !0,
                contains: [{
                    className: "meta-keyword",
                    begin: "^\\TextComponent[a-z0-9]+"
                }]
            }, A.COMMENT("^\\*", "TextComponent"), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, {
                beginKeywords: "set sets parameter parameters variable variables scalar scalars equation equations",
                end: ";",
                contains: [A.COMMENT("^\\*", "TextComponent"), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, I, J]
            }, {
                beginKeywords: "table",
                end: ";",
                returnBegin: !0,
                contains: [{
                    beginKeywords: "table",
                    end: "TextComponent",
                    contains: [J]
                }, A.COMMENT("^\\*", "TextComponent"), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.QUOTE_STRING_MODE, A.APOS_STRING_MODE, A.C_NUMBER_MODE]
            }, {
                className: "function",
                begin: /^[a-z][a-z0-9_,\-+' ()TextComponent]+\.{2}/,
                returnBegin: !0,
                contains: [{
                    className: "title",
                    begin: /^[a-z0-9_]+/
                }, B, G]
            }, A.C_NUMBER_MODE, G]
        }
    }
    wh0.exports = pB4
});