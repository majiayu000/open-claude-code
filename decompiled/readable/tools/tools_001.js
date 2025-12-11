/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_001.js
 * 处理时间: 2025-12-09T03:41:38.502Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 1/25
 * Lines: 32938 - 34435 (1498 lines)
 * Original file: cli.js
 */

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

    function ZQ4(A) {
        let Q = {
                keyword: "boolean byte word String",
                built_in: "KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD ",
                _: "setup loop runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
                literal: "DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW"
            },
            B = GQ4(A),
            G = B.keywords;
        return G.keyword += " " + Q.keyword, G.literal += " " + Q.literal, G.built_in += " " + Q.built_in, G._ += " " + Q._, B.name = "Arduino", B.aliases = ["ino"], B.supersetOf = "cpp", B
    }
    Kb0.exports = ZQ4
});
var Cb0 = moduleWrapper((x27, Hb0) => {
    function IQ4(A) {
        let Q = {
            variants: [A.COMMENT("^[ \\t]*(?=#)", "TextComponent", {
                relevance: 0,
                excludeBegin: !0
            }), A.COMMENT("[;@]", "TextComponent", {
                relevance: 0
            }), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
        };
        return {
            name: "ARM Assembly",
            case_insensitive: !0,
            aliases: ["arm"],
            keywords: {
                $pattern: "\\.?" + A.IDENT_RE,
                meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS keys SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
                built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 TASK_TOOL_NAME a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 TASK_TOOL_NAME s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 DATA_TYPE d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @"
            },
            contains: [{
                className: "keyword",
                begin: "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(WEB_FETCH_TOOL_NAME|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?(?=\\s)"
            }, Q, A.QUOTE_STRING_MODE, {
                className: "string",
                begin: "'",
                end: "[^\\\\]'",
                relevance: 0
            }, {
                className: "title",
                begin: "\\|",
                end: "\\|",
                illegal: "\\n",
                relevance: 0
            }, {
                className: "number",
                variants: [{
                    begin: "[#TextComponent=]?0x[0-9a-f]+"
                }, {
                    begin: "[#TextComponent=]?0b[01]+"
                }, {
                    begin: "[#TextComponent=]\\d+"
                }, {
                    begin: "\\b\\d+"
                }],
                relevance: 0
            }, {
                className: "symbol",
                variants: [{
                    begin: "^[ \\t]*[a-z_\\.\\TextComponent][a-z0-9_\\.\\TextComponent]+:"
                }, {
                    begin: "^[a-z_\\.\\TextComponent][a-z0-9_\\.\\TextComponent]+"
                }, {
                    begin: "[=#]\\w+"
                }],
                relevance: 0
            }]
        }
    }
    Hb0.exports = IQ4
});
var $b0 = moduleWrapper((v27, Ub0) => {
    function zb0(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function Eb0(A) {
        return ls("(?=", A, ")")
    }

    function YQ4(A) {
        return ls("(", A, ")?")
    }

    function ls(...A) {
        return A.map((B) => zb0(B)).join("")
    }

    function JQ4(...A) {
        return "(" + A.map((B) => zb0(B)).join("|") + ")"
    }

    function WQ4(A) {
        let Q = ls(/[A-Z_]/, YQ4(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/),
            B = /[A-Za-z0-9._:-]+/,
            G = {
                className: "symbol",
                begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
            },
            Z = {
                begin: /\s/,
                contains: [{
                    className: "meta-keyword",
                    begin: /#?[a-z_][a-z1-9_-]+/,
                    illegal: /\n/
                }]
            },
            I = A.inherit(Z, {
                begin: /\(/,
                end: /\)/
            }),
            Y = A.inherit(A.APOS_STRING_MODE, {
                className: "meta-string"
            }),
            J = A.inherit(A.QUOTE_STRING_MODE, {
                className: "meta-string"
            }),
            W = {
                endsWithParent: !0,
                illegal: /</,
                relevance: 0,
                contains: [{
                    className: "attr",
                    begin: B,
                    relevance: 0
                }, {
                    begin: /=\s*/,
                    relevance: 0,
                    contains: [{
                        className: "string",
                        endsParent: !0,
                        variants: [{
                            begin: /"/,
                            end: /"/,
                            contains: [G]
                        }, {
                            begin: /'/,
                            end: /'/,
                            contains: [G]
                        }, {
                            begin: /[^\s"'=<>`]+/
                        }]
                    }]
                }]
            };
        return {
            name: "HTML, XML",
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
            case_insensitive: !0,
            contains: [{
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                relevance: 10,
                contains: [Z, J, Y, I, {
                    begin: /\[/,
                    end: /\]/,
                    contains: [{
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        contains: [Z, I, J, Y]
                    }]
                }]
            }, A.COMMENT(/<!--/, /-->/, {
                relevance: 10
            }), {
                begin: /<!\[CDATA\[/,
                end: /\]\]>/,
                relevance: 10
            }, G, {
                className: "meta",
                begin: /<\?xml/,
                end: /\?>/,
                relevance: 10
            }, {
                className: "tag",
                begin: /<style(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "style"
                },
                contains: [W],
                starts: {
                    end: /<\/style>/,
                    returnEnd: !0,
                    subLanguage: ["css", "xml"]
                }
            }, {
                className: "tag",
                begin: /<script(?=\s|>)/,
                end: />/,
                keywords: {
                    name: "script"
                },
                contains: [W],
                starts: {
                    end: /<\/script>/,
                    returnEnd: !0,
                    subLanguage: ["javascript", "handlebars", "xml"]
                }
            }, {
                className: "tag",
                begin: /<>|<\/>/
            }, {
                className: "tag",
                begin: ls(/</, Eb0(ls(Q, JQ4(/\/>/, />/, /\s/)))),
                end: /\/?>/,
                contains: [{
                    className: "name",
                    begin: Q,
                    relevance: 0,
                    starts: W
                }]
            }, {
                className: "tag",
                begin: ls(/<\//, Eb0(ls(Q, />/))),
                contains: [{
                    className: "name",
                    begin: Q,
                    relevance: 0
                }, {
                    begin: />/,
                    relevance: 0,
                    endsParent: !0
                }]
            }]
        }
    }
    Ub0.exports = WQ4
});
var Nb0 = moduleWrapper((b27, qb0) => {
    function XQ4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function wb0(...A) {
        return A.map((B) => XQ4(B)).join("")
    }

    function FQ4(A) {
        let Q = {
                begin: "^'{3,}[ \\t]*TextComponent",
                relevance: 10
            },
            B = [{
                begin: /\\[*_`]/
            }, {
                begin: /\\\\\*{2}[^\n]*?\*{2}/
            }, {
                begin: /\\\\_{2}[^\n]*_{2}/
            }, {
                begin: /\\\\`{2}[^\n]*`{2}/
            }, {
                begin: /[:;}][*_`](?![*_`])/
            }],
            G = [{
                className: "strong",
                begin: /\*{2}([^\n]+?)\*{2}/
            }, {
                className: "strong",
                begin: wb0(/\*\*/, /((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/, /(\*(?!\*)|\\[^\n]|[^*\n\\])*/, /\*\*/),
                relevance: 0
            }, {
                className: "strong",
                begin: /\B\*(\S|\S[^\n]*?\S)\*(?!\w)/
            }, {
                className: "strong",
                begin: /\*[^\s]([^\n]+\n)+([^\n]+)\*/
            }],
            Z = [{
                className: "emphasis",
                begin: /_{2}([^\n]+?)_{2}/
            }, {
                className: "emphasis",
                begin: wb0(/__/, /((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/, /(_(?!_)|\\[^\n]|[^_\n\\])*/, /__/),
                relevance: 0
            }, {
                className: "emphasis",
                begin: /\b_(\S|\S[^\n]*?\S)_(?!\w)/
            }, {
                className: "emphasis",
                begin: /_[^\s]([^\n]+\n)+([^\n]+)_/
            }, {
                className: "emphasis",
                begin: "\\B'(?!['\\s])",
                end: "(\\n{2}|')",
                contains: [{
                    begin: "\\\\'\\w",
                    relevance: 0
                }],
                relevance: 0
            }],
            I = {
                className: "symbol",
                begin: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
                relevance: 10
            },
            Y = {
                className: "bullet",
                begin: "^(\\*+|-+|\\.+|[^\\n]+?::)\\s+"
            };
        return {
            name: "AsciiDoc",
            aliases: ["adoc"],
            contains: [A.COMMENT("^/{4,}\\n", "\\n/{4,}TextComponent", {
                relevance: 10
            }), A.COMMENT("^//", "TextComponent", {
                relevance: 0
            }), {
                className: "title",
                begin: "^\\.\\w.*TextComponent"
            }, {
                begin: "^[=\\*]{4,}\\n",
                end: "\\n^[=\\*]{4,}TextComponent",
                relevance: 10
            }, {
                className: "section",
                relevance: 10,
                variants: [{
                    begin: "^(={1,6})[ \t].+?([ \t]\\1)?TextComponent"
                }, {
                    begin: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}TextComponent"
                }]
            }, {
                className: "meta",
                begin: "^:.+?:",
                end: "\\s",
                excludeEnd: !0,
                relevance: 10
            }, {
                className: "meta",
                begin: "^\\[.+?\\]TextComponent",
                relevance: 0
            }, {
                className: "quote",
                begin: "^_{4,}\\n",
                end: "\\n_{4,}TextComponent",
                relevance: 10
            }, {
                className: "code",
                begin: "^[\\-\\.]{4,}\\n",
                end: "\\n[\\-\\.]{4,}TextComponent",
                relevance: 10
            }, {
                begin: "^\\+{4,}\\n",
                end: "\\n\\+{4,}TextComponent",
                contains: [{
                    begin: "<",
                    end: ">",
                    subLanguage: "xml",
                    relevance: 0
                }],
                relevance: 10
            }, Y, I, ...B, ...G, ...Z, {
                className: "string",
                variants: [{
                    begin: "``.+?''"
                }, {
                    begin: "`.+?'"
                }]
            }, {
                className: "code",
                begin: /`{2}/,
                end: /(\n{2}|`{2})/
            }, {
                className: "code",
                begin: "(`.+?`|\\+.+?\\+)",
                relevance: 0
            }, {
                className: "code",
                begin: "^[ \\t]",
                end: "TextComponent",
                relevance: 0
            }, Q, {
                begin: "(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]",
                returnBegin: !0,
                contains: [{
                    begin: "(link|image:?):",
                    relevance: 0
                }, {
                    className: "link",
                    begin: "\\w",
                    end: "[^\\[]+",
                    relevance: 0
                }, {
                    className: "string",
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0
                }],
                relevance: 10
            }]
        }
    }
    qb0.exports = FQ4
});
var Mb0 = moduleWrapper((f27, Lb0) => {
    function VQ4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function vH1(...A) {
        return A.map((B) => VQ4(B)).join("")
    }

    function KQ4(A) {
        let Q = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance",
            B = "get set args call";
        return {
            name: "AspectJ",
            keywords: Q,
            illegal: /<\/|#/,
            contains: [A.COMMENT(/\/\*\*/, /\*\//, {
                relevance: 0,
                contains: [{
                    begin: /\w+@/,
                    relevance: 0
                }, {
                    className: "doctag",
                    begin: /@[A-Za-z]+/
                }]
            }), A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, {
                className: "class",
                beginKeywords: "aspect",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:;"\[\]]/,
                contains: [{
                    beginKeywords: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
                }, A.UNDERSCORE_TITLE_MODE, {
                    begin: /\([^\)]*/,
                    end: /[)]+/,
                    keywords: Q + " get set args call",
                    excludeEnd: !1
                }]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: /[{;=]/,
                excludeEnd: !0,
                relevance: 0,
                keywords: "class interface",
                illegal: /[:"\[\]]/,
                contains: [{
                    beginKeywords: "extends implements"
                }, A.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "pointcut after before around throwing returning",
                end: /[)]/,
                excludeEnd: !1,
                illegal: /["\[\]]/,
                contains: [{
                    begin: vH1(A.UNDERSCORE_IDENT_RE, /\s*\(/),
                    returnBegin: !0,
                    contains: [A.UNDERSCORE_TITLE_MODE]
                }]
            }, {
                begin: /[:]/,
                returnBegin: !0,
                end: /[{;]/,
                relevance: 0,
                excludeEnd: !1,
                keywords: Q,
                illegal: /["\[\]]/,
                contains: [{
                    begin: vH1(A.UNDERSCORE_IDENT_RE, /\s*\(/),
                    keywords: Q + " get set args call",
                    relevance: 0
                }, A.QUOTE_STRING_MODE]
            }, {
                beginKeywords: "new throw",
                relevance: 0
            }, {
                className: "function",
                begin: /\w+ +\w+(\.\w+)?\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
                returnBegin: !0,
                end: /[{;=]/,
                keywords: Q,
                excludeEnd: !0,
                contains: [{
                    begin: vH1(A.UNDERSCORE_IDENT_RE, /\s*\(/),
                    returnBegin: !0,
                    relevance: 0,
                    contains: [A.UNDERSCORE_TITLE_MODE]
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    relevance: 0,
                    keywords: Q,
                    contains: [A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, A.C_BLOCK_COMMENT_MODE]
                }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE]
            }, A.C_NUMBER_MODE, {
                className: "meta",
                begin: /@[A-Za-z]+/
            }]
        }
    }
    Lb0.exports = KQ4
});
var Rb0 = moduleWrapper((h27, Ob0) => {
    function DQ4(A) {
        let Q = {
            begin: "`[\\s\\S]"
        };
        return {
            name: "AutoHotkey",
            case_insensitive: !0,
            aliases: ["ahk"],
            keywords: {
                keyword: "Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
                literal: "true false NOT AND OR",
                built_in: "ComSpec Clipboard ClipboardAll ErrorLevel"
            },
            contains: [Q, A.inherit(A.QUOTE_STRING_MODE, {
                contains: [Q]
            }), A.COMMENT(";", "TextComponent", {
                relevance: 0
            }), A.C_BLOCK_COMMENT_MODE, {
                className: "number",
                begin: A.NUMBER_RE,
                relevance: 0
            }, {
                className: "variable",
                begin: "%[a-zA-Z0-9#_$@]+%"
            }, {
                className: "built_in",
                begin: "^\\s*\\w+\\s*(,|%)"
            }, {
                className: "title",
                variants: [{
                    begin: '^[^\\n";]+::(?!=)'
                }, {
                    begin: '^[^\\n";]+:(?!=)',
                    relevance: 0
                }]
            }, {
                className: "meta",
                begin: "^\\s*#\\w+",
                end: "TextComponent",
                relevance: 0
            }, {
                className: "built_in",
                begin: "A_[a-zA-Z0-9]+"
            }, {
                begin: ",\\s*,"
            }]
        }
    }
    Ob0.exports = DQ4
});
var Pb0 = moduleWrapper((g27, Tb0) => {
    function HQ4(A) {
        let Q = "ByRef Case Const ContinueCase ContinueLoop Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With",
            B = ["EndRegion", "forcedef", "forceref", "ignorefunc", "include", "include-once", "NoTrayIcon", "OnAutoItStartRegister", "pragma", "Region", "RequireAdmin", "Tidy_Off", "Tidy_On", "Tidy_Parameters"],
            G = "True False And Null Not Or Default",
            Z = "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait WinWaitActive WinWaitClose WinWaitNotActive",
            I = {
                variants: [A.COMMENT(";", "TextComponent", {
                    relevance: 0
                }), A.COMMENT("#cs", "#ce"), A.COMMENT("#comments-start", "#comments-end")]
            },
            Y = {
                begin: "\\TextComponent[A-z0-9_]+"
            },
            J = {
                className: "string",
                variants: [{
                    begin: /"/,
                    end: /"/,
                    contains: [{
                        begin: /""/,
                        relevance: 0
                    }]
                }, {
                    begin: /'/,
                    end: /'/,
                    contains: [{
                        begin: /''/,
                        relevance: 0
                    }]
                }]
            },
            W = {
                variants: [A.BINARY_NUMBER_MODE, A.C_NUMBER_MODE]
            },
            X = {
                className: "meta",
                begin: "#",
                end: "TextComponent",
                keywords: {
                    "meta-keyword": B
                },
                contains: [{
                    begin: /\\\n/,
                    relevance: 0
                }, {
                    beginKeywords: "include",
                    keywords: {
                        "meta-keyword": "include"
                    },
                    end: "TextComponent",
                    contains: [J, {
                        className: "meta-string",
                        variants: [{
                            begin: "<",
                            end: ">"
                        }, {
                            begin: /"/,
                            end: /"/,
                            contains: [{
                                begin: /""/,
                                relevance: 0
                            }]
                        }, {
                            begin: /'/,
                            end: /'/,
                            contains: [{
                                begin: /''/,
                                relevance: 0
                            }]
                        }]
                    }]
                }, J, I]
            },
            F = {
                className: "symbol",
                begin: "@[A-z0-9_]+"
            },
            V = {
                className: "function",
                beginKeywords: "Func",
                end: "TextComponent",
                illegal: "\\TextComponent|\\[|%",
                contains: [A.UNDERSCORE_TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: [Y, J, W]
                }]
            };
        return {
            name: "AutoIt",
            case_insensitive: !0,
            illegal: /\/\*/,
            keywords: {
                keyword: Q,
                built_in: "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait WinWaitActive WinWaitClose WinWaitNotActive",
                literal: "True False And Null Not Or Default"
            },
            contains: [I, Y, J, W, X, F, V]
        }
    }
    Tb0.exports = HQ4
});
var Sb0 = moduleWrapper((u27, jb0) => {
    function CQ4(A) {
        return {
            name: "AVR Assembly",
            case_insensitive: !0,
            keywords: {
                $pattern: "\\.?" + A.IDENT_RE,
                keyword: "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
                built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
                meta: ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
            },
            contains: [A.C_BLOCK_COMMENT_MODE, A.COMMENT(";", "TextComponent", {
                relevance: 0
            }), A.C_NUMBER_MODE, A.BINARY_NUMBER_MODE, {
                className: "number",
                begin: "\\b(\\TextComponent[a-zA-Z0-9]+|0o[0-7]+)"
            }, A.QUOTE_STRING_MODE, {
                className: "string",
                begin: "'",
                end: "[^\\\\]'",
                illegal: "[^\\\\][^']"
            }, {
                className: "symbol",
                begin: "^[A-Za-z0-9_.TextComponent]+:"
            }, {
                className: "meta",
                begin: "#",
                end: "TextComponent"
            }, {
                className: "subst",
                begin: "@[0-9]+"
            }]
        }
    }
    jb0.exports = CQ4
});
var kb0 = moduleWrapper((m27, _b0) => {
    function EQ4(A) {
        let Q = {
                className: "variable",
                variants: [{
                    begin: /\TextComponent[\w\d#@][\w\d_]*/
                }, {
                    begin: /\TextComponent\{(.*?)\}/
                }]
            },
            B = "BEGIN END if else while do for in break continue delete next nextfile function func exit|10",
            G = {
                className: "string",
                contains: [A.BACKSLASH_ESCAPE],
                variants: [{
                    begin: /(u|b)?r?'''/,
                    end: /'''/,
                    relevance: 10
                }, {
                    begin: /(u|b)?r?"""/,
                    end: /"""/,
                    relevance: 10
                }, {
                    begin: /(u|r|ur)'/,
                    end: /'/,
                    relevance: 10
                }, {
                    begin: /(u|r|ur)"/,
                    end: /"/,
                    relevance: 10
                }, {
                    begin: /(b|br)'/,
                    end: /'/
                }, {
                    begin: /(b|br)"/,
                    end: /"/
                }, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
            };
        return {
            name: "Awk",
            keywords: {
                keyword: "BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
            },
            contains: [Q, G, A.REGEXP_MODE, A.HASH_COMMENT_MODE, A.NUMBER_MODE]
        }
    }
    _b0.exports = EQ4
});
var xb0 = moduleWrapper((d27, yb0) => {
    function zQ4(A) {
        return {
            name: "X++",
            aliases: ["x++"],
            keywords: {
                keyword: ["abstract", "as", "asc", "avg", "break", "breakpoint", "by", "byref", "case", "catch", "changecompany", "class", "client", "client", "common", "const", "continue", "count", "crosscompany", "delegate", "delete_from", "desc", "display", "div", "do", "edit", "else", "eventhandler", "exists", "extends", "final", "finally", "firstfast", "firstonly", "firstonly1", "firstonly10", "firstonly100", "firstonly1000", "flush", "for", "forceliterals", "forcenestedloop", "forceplaceholders", "forceselectorder", "forupdate", "from", "generateonly", "group", "hint", "if", "implements", "in", "index", "insert_recordset", "interface", "internal", "is", "join", "like", "maxof", "minof", "mod", "namespace", "new", "next", "nofetch", "notexists", "optimisticlock", "order", "outer", "pessimisticlock", "print", "private", "protected", "public", "readonly", "repeatableread", "retry", "return", "reverse", "select", "server", "setting", "static", "sum", "super", "switch", "this", "throw", "try", "ttsabort", "ttsbegin", "ttscommit", "unchecked", "update_recordset", "using", "validtimestate", "void", "where", "while"],
                built_in: ["anytype", "boolean", "byte", "char", "container", "date", "double", "enum", "guid", "int", "int64", "long", "real", "short", "str", "utcdatetime", "var"],
                literal: ["default", "false", "null", "true"]
            },
            contains: [A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE, A.C_NUMBER_MODE, {
                className: "meta",
                begin: "#",
                end: "TextComponent"
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: /\{/,
                excludeEnd: !0,
                illegal: ":",
                contains: [{
                    beginKeywords: "extends implements"
                }, A.UNDERSCORE_TITLE_MODE]
            }]
        }
    }
    yb0.exports = zQ4
});
var bb0 = moduleWrapper((c27, vb0) => {
    function UQ4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function $Q4(...A) {
        return A.map((B) => UQ4(B)).join("")
    }

    function wQ4(A) {
        let Q = {},
            B = {
                begin: /\TextComponent\{/,
                end: /\}/,
                contains: ["self", {
                    begin: /:-/,
                    contains: [Q]
                }]
            };
        Object.assign(Q, {
            className: "variable",
            variants: [{
                begin: $Q4(/\TextComponent[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![TextComponent])")
            }, B]
        });
        let G = {
                className: "subst",
                begin: /\TextComponent\(/,
                end: /\)/,
                contains: [A.BACKSLASH_ESCAPE]
            },
            Z = {
                begin: /<<-?\s*(?=\w+)/,
                starts: {
                    contains: [A.END_SAME_AS_BEGIN({
                        begin: /(\w+)/,
                        end: /(\w+)/,
                        className: "string"
                    })]
                }
            },
            I = {
                className: "string",
                begin: /"/,
                end: /"/,
                contains: [A.BACKSLASH_ESCAPE, Q, G]
            };
        G.contains.push(I);
        let Y = {
                className: "",
                begin: /\\"/
            },
            J = {
                className: "string",
                begin: /'/,
                end: /'/
            },
            W = {
                begin: /\TextComponent\(\(/,
                end: /\)\)/,
                contains: [{
                    begin: /\d+#[0-9a-f]+/,
                    className: "number"
                }, A.NUMBER_MODE, Q]
            },
            X = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
            F = A.SHEBANG({
                binary: `(TextComponent{X.join("|")})`,
                relevance: 10
            }),
            V = {
                className: "function",
                begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                returnBegin: !0,
                contains: [A.inherit(A.TITLE_MODE, {
                    begin: /\w[\w\d_]*/
                })],
                relevance: 0
            };
        return {
            name: "Bash",
            aliases: ["sh", "zsh"],
            keywords: {
                $pattern: /\b[a-z._-]+\b/,
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
            },
            contains: [F, A.SHEBANG(), V, W, A.HASH_COMMENT_MODE, Z, I, Y, J, Q]
        }
    }
    vb0.exports = wQ4
});
var hb0 = moduleWrapper((p27, fb0) => {
    function qQ4(A) {
        return {
            name: "BASIC",
            case_insensitive: !0,
            illegal: "^.",
            keywords: {
                $pattern: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
                keyword: "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"
            },
            contains: [A.QUOTE_STRING_MODE, A.COMMENT("REM", "TextComponent", {
                relevance: 10
            }), A.COMMENT("'", "TextComponent", {
                relevance: 0
            }), {
                className: "symbol",
                begin: "^[0-9]+ ",
                relevance: 10
            }, {
                className: "number",
                begin: "\\b\\d+(\\.\\d+)?([edED]\\d+)?[#!]?",
                relevance: 0
            }, {
                className: "number",
                begin: "(&[hH][0-9a-fA-F]{1,4})"
            }, {
                className: "number",
                begin: "(&[oO][0-7]{1,6})"
            }]
        }
    }
    fb0.exports = qQ4
});
var ub0 = moduleWrapper((l27, gb0) => {
    function NQ4(A) {
        return {
            name: "Backus–Naur Form",
            contains: [{
                className: "attribute",
                begin: /</,
                end: />/
            }, {
                begin: /::=/,
                end: /TextComponent/,
                contains: [{
                    begin: /</,
                    end: />/
                }, A.C_LINE_COMMENT_MODE, A.C_BLOCK_COMMENT_MODE, A.APOS_STRING_MODE, A.QUOTE_STRING_MODE]
            }]
        }
    }
    gb0.exports = NQ4
});
var db0 = moduleWrapper((i27, mb0) => {
    function LQ4(A) {
        let Q = {
            className: "literal",
            begin: /[+-]/,
            relevance: 0
        };
        return {
            name: "Brainfuck",
            aliases: ["bf"],
            contains: [A.COMMENT(`[^\\[\\]\\.,\\+\\-<> \r
]`, `[\\[\\]\\.,\\+\\-<> \r
]`, {
                returnEnd: !0,
                relevance: 0
            }), {
                className: "title",
                begin: "[\\[\\]]",
                relevance: 0
            }, {
                className: "string",
                begin: "[\\.,]",
                relevance: 0
            }, {
                begin: /(?:\+\+|--)/,
                contains: [Q]
            }, Q]
        }
    }
    mb0.exports = LQ4
});
var pb0 = moduleWrapper((n27, cb0) => {
    function MQ4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function OQ4(A) {
        return bH1("(?=", A, ")")
    }

    function MxA(A) {
        return bH1("(", A, ")?")
    }

    function bH1(...A) {
        return A.map((B) => MQ4(B)).join("")
    }

    function RQ4(A) {
        let Q = A.COMMENT("//", "TextComponent", {
                contains: [{
                    begin: /\\\n/
                }]
            }),
            B = "decltype\\(auto\\)",
            G = "[a-zA-Z_]\\w*::",
            Z = "<[^<>]+>",
            I = "(decltype\\(auto\\)|" + MxA("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + MxA("<[^<>]+>") + ")",
            Y = {
                className: "keyword",
                begin: "\\b[a-z\\d_]*_t\\b"
            },
            J = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
            W = {
                className: "string",
                variants: [{
                    begin: '(u8?|moduleWrapper|lazyLoader)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [A.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|moduleWrapper|lazyLoader)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: "."
                }, A.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|moduleWrapper|lazyLoader)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/
                })]
            },
            X = {
                className: "number",
                variants: [{
                    begin: "\\b(0b[01']+)"
                }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|lazyLoader)(u|moduleWrapper)?|(u|moduleWrapper)(ll|LL|l|lazyLoader)?|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                relevance: 0
            },
            F = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /TextComponent/,
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
                begin: MxA("[a-zA-Z_]\\w*::") + A.IDENT_RE,
                relevance: 0
            },
            K = MxA("[a-zA-Z_]\\w*::") + A.IDENT_RE + "\\s*\\(",
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
                begin: bH1(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!while)/, A.IDENT_RE, OQ4(/\s*\(/))
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

    function TQ4(A) {
        let Q = RQ4(A),
            B = ["c", "h"],
            G = ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"];
        if (Q.disableAutodetect = !0, Q.aliases = [], !A.getLanguage("c")) Q.aliases.push(...B);
        if (!A.getLanguage("cpp")) Q.aliases.push(...G);
        return Q
    }
    cb0.exports = TQ4
});
var ib0 = moduleWrapper((a27, lb0) => {
    function PQ4(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function OxA(A) {
        return jQ4("(", A, ")?")
    }

    function jQ4(...A) {
        return A.map((B) => PQ4(B)).join("")
    }

    function SQ4(A) {
        let Q = A.COMMENT("//", "TextComponent", {
                contains: [{
                    begin: /\\\n/
                }]
            }),
            B = "decltype\\(auto\\)",
            G = "[a-zA-Z_]\\w*::",
            Z = "<[^<>]+>",
            I = "(decltype\\(auto\\)|" + OxA("[a-zA-Z_]\\w*::") + "[a-zA-Z_]\\w*" + OxA("<[^<>]+>") + ")",
            Y = {
                className: "keyword",
                begin: "\\b[a-z\\d_]*_t\\b"
            },
            J = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
            W = {
                className: "string",
                variants: [{
                    begin: '(u8?|moduleWrapper|lazyLoader)?"',
                    end: '"',
                    illegal: "\\n",
                    contains: [A.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|moduleWrapper|lazyLoader)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'",
                    illegal: "."
                }, A.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|moduleWrapper|lazyLoader)?R"([^()\\ ]{0,16})\(/,
                    end: /\)([^()\\ ]{0,16})"/
                })]
            },
            X = {
                className: "number",
                variants: [{
                    begin: "\\b(0b[01']+)"
                }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|lazyLoader)(u|moduleWrapper)?|(u|moduleWrapper)(ll|LL|l|lazyLoader)?|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],
                relevance: 0
            },
            F = {
                className: "meta",
                begin: /#\s*[a-z]+\b/,
                end: /TextComponent/,
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
                begin: OxA("[a-zA-Z_]\\w*::") + A.IDENT_RE,
                relevance: 0
            },
            K = OxA("[a-zA-Z_]\\w*::") + A.IDENT_RE + "\\s*\\(",
            D = {
                keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
                built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
                literal: "true false nullptr NULL"
            },
            H = [F, Y, Q, A.C_BLOCK_COMMENT_MODE, X, W],
            C = {
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
                keywords: D,
                contains: H.concat([{
                    begin: /\(/,
                    end: /\)/,
                    keywords: D,
                    contains: H.concat(["self"]),
                    relevance: 0
                }]),
                relevance: 0
            },
            E = {
                className: "function",
                begin: "(" + I + "[\\*&\\s]+)+" + K,
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: D,
                illegal: /[^\w\s\*&:<>.]/,
                contains: [{
                    begin: "decltype\\(auto\\)",
                    keywords: D,
                    relevance: 0
                }, {
                    begin: K,
                    returnBegin: !0,
                    contains: [V],
                    relevance: 0
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: D,
                    relevance: 0,
                    contains: [Q, A.C_BLOCK_COMMENT_MODE, W, X, Y, {
                        begin: /\(/,
                        end: /\)/,
                        keywords: D,
                        relevance: 0,
                        contains: ["self", Q, A.C_BLOCK_COMMENT_MODE, W, X, Y]
                    }]
                }, Y, Q, A.C_BLOCK_COMMENT_MODE, F]
            };
        return {
            name: "C",
            aliases: ["h"],
            keywords: D,
            disableAutodetect: !0,
            illegal: "</",
            contains: [].concat(C, E, H, [F, {
                begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                end: ">",
                keywords: D,
                contains: ["self", Y]
            }, {
                begin: A.IDENT_RE + "::",
                keywords: D
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
                keywords: D
            }
        }
    }
    lb0.exports = SQ4
});
var ab0 = moduleWrapper((s27, nb0) => {
    function _Q4(A) {
        let Q = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",
            B = "false true",
            G = [A.C_LINE_COMMENT_MODE, A.COMMENT(/\{/, /\}/, {
                relevance: 0
            }), A.COMMENT(/\(\*/, /\*\)/, {
                relevance: 10
            })],
            Z = {
                className: "string",
                begin: /'/,
                end: /'/,
                contains: [{
                    begin: /''/
                }]
            },
            I = {
                className: "string",
                begin: /(#\d+)+/
            },
            Y = {
                className: "number",
                begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
                relevance: 0
            },
            J = {
                className: "string",
                begin: '"',
                end: '"'
            },
            W = {
                className: "function",
                beginKeywords: "procedure",
                end: /[:;]/,
                keywords: "procedure|10",
                contains: [A.TITLE_MODE, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: Q,
                    contains: [Z, I]
                }].concat(G)
            },
            X = {
                className: "class",
                begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
                returnBegin: !0,
                contains: [A.TITLE_MODE, W]
            };
        return {
            name: "C/AL",
            case_insensitive: !0,
            keywords: {
                keyword: Q,
                literal: "false true"
            },
            illegal: /\/\*/,
            contains: [Z, I, Y, J, A.NUMBER_MODE, X, W]
        }
    }
    nb0.exports = _Q4
});
var rb0 = moduleWrapper((r27, sb0) => {
    function kQ4(A) {
        return {
            name: "Cap’n Proto",
            aliases: ["capnp"],
            keywords: {
                keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
                built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
                literal: "true false"
            },
            contains: [A.QUOTE_STRING_MODE, A.NUMBER_MODE, A.HASH_COMMENT_MODE, {
                className: "meta",
                begin: /@0x[\w\d]{16};/,
                illegal: /\n/
            }, {
                className: "symbol",
                begin: /@\d+\b/
            }, {
                className: "class",
                beginKeywords: "struct enum",
                end: /\{/,
                illegal: /\n/,
                contains: [A.inherit(A.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0
                    }
                })]
            }, {
                className: "class",
                beginKeywords: "interface",
                end: /\{/,
                illegal: /\n/,
                contains: [A.inherit(A.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0
                    }