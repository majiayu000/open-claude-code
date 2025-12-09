/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: tools_016.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (11次) = lazyLoader(fn) - Lazy module loader
 *   GA       (8次) = esmImport(module) - ESM import helper
 *   vX       (1次) = WEB_FETCH_TOOL_NAME = "WebFetch"
 *   U        (1次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 16/25
 * Lines: 366336 - 367835 (1500 lines)
 * Original file: cli.js
 */

            end: function(Q) {
                A.parse(Q || "", !0, function() {
                    return !0
                })
            },
            process: function(Q) {
                return A.parse("", !1, Q)
            },
            document: function() {
                return A.document()
            }
        }
    };
    pa5.createWindow = function(A, Q) {
        var B = pa5.createDocument(A);
        if (Q !== void 0) B._address = Q;
        return new Nu2.Window(B)
    };
    pa5.impl = Nu2
});
var bu2 = U((EYZ, vu2) => {
    function sa5(A) {
        for (var Q = 1; Q < arguments.length; Q++) {
            var B = arguments[Q];
            for (var G in B)
                if (B.hasOwnProperty(G)) A[G] = B[G]
        }
        return A
    }

    function EG0(A, Q) {
        return Array(Q + 1).join(A)
    }

    function ra5(A) {
        return A.replace(/^\n*/, "")
    }

    function oa5(A) {
        var Q = A.length;
        while (Q > 0 && A[Q - 1] === `
`) Q--;
        return A.substring(0, Q)
    }
    var ta5 = ["ADDRESS", "ARTICLE", "ASIDE", "AUDIO", "BLOCKQUOTE", "BODY", "CANVAS", "CENTER", "DD", "DIR", "DIV", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "FRAMESET", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "HTML", "ISINDEX", "LI", "MAIN", "MENU", "NAV", "NOFRAMES", "NOSCRIPT", "OL", "OUTPUT", "P", "PRE", "SECTION", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"];

    function zG0(A) {
        return UG0(A, ta5)
    }
    var Tu2 = ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"];

    function Pu2(A) {
        return UG0(A, Tu2)
    }

    function ea5(A) {
        return Su2(A, Tu2)
    }
    var ju2 = ["A", "TABLE", "THEAD", "TBODY", "TFOOT", "TH", "TD", "IFRAME", "SCRIPT", "AUDIO", "VIDEO"];

    function As5(A) {
        return UG0(A, ju2)
    }

    function Qs5(A) {
        return Su2(A, ju2)
    }

    function UG0(A, Q) {
        return Q.indexOf(A.nodeName) >= 0
    }

    function Su2(A, Q) {
        return A.getElementsByTagName && Q.some(function(B) {
            return A.getElementsByTagName(B).length
        })
    }
    var KC = {};
    KC.paragraph = {
        filter: "p",
        replacement: function(A) {
            return `

` + A + `

`
        }
    };
    KC.lineBreak = {
        filter: "br",
        replacement: function(A, Q, B) {
            return B.br + `
`
        }
    };
    KC.heading = {
        filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
        replacement: function(A, Q, B) {
            var G = Number(Q.nodeName.charAt(1));
            if (B.headingStyle === "setext" && G < 3) {
                var Z = EG0(G === 1 ? "=" : "-", A.length);
                return `

` + A + `
` + Z + `

`
            } else return `

` + EG0("#", G) + " " + A + `

`
        }
    };
    KC.blockquote = {
        filter: "blockquote",
        replacement: function(A) {
            return A = A.replace(/^\n+|\n+$/g, ""), A = A.replace(/^/gm, "> "), `

` + A + `

`
        }
    };
    KC.list = {
        filter: ["ul", "ol"],
        replacement: function(A, Q) {
            var B = Q.parentNode;
            if (B.nodeName === "LI" && B.lastElementChild === Q) return `
` + A;
            else return `

` + A + `

`
        }
    };
    KC.listItem = {
        filter: "li",
        replacement: function(A, Q, B) {
            A = A.replace(/^\n+/, "").replace(/\n+$/, `
`).replace(/\n/gm, `
    `);
            var G = B.bulletListMarker + "   ",
                Z = Q.parentNode;
            if (Z.nodeName === "OL") {
                var I = Z.getAttribute("start"),
                    Y = Array.prototype.indexOf.call(Z.children, Q);
                G = (I ? Number(I) + Y : Y + 1) + ".  "
            }
            return G + A + (Q.nextSibling && !/\n$/.test(A) ? `
` : "")
        }
    };
    KC.indentedCodeBlock = {
        filter: function(A, Q) {
            return Q.codeBlockStyle === "indented" && A.nodeName === "PRE" && A.firstChild && A.firstChild.nodeName === "CODE"
        },
        replacement: function(A, Q, B) {
            return `

    ` + Q.firstChild.textContent.replace(/\n/g, `
    `) + `

`
        }
    };
    KC.fencedCodeBlock = {
        filter: function(A, Q) {
            return Q.codeBlockStyle === "fenced" && A.nodeName === "PRE" && A.firstChild && A.firstChild.nodeName === "CODE"
        },
        replacement: function(A, Q, B) {
            var G = Q.firstChild.getAttribute("class") || "",
                Z = (G.match(/language-(\S+)/) || [null, ""])[1],
                I = Q.firstChild.textContent,
                Y = B.fence.charAt(0),
                J = 3,
                W = new RegExp("^" + Y + "{3,}", "gm"),
                X;
            while (X = W.exec(I))
                if (X[0].length >= J) J = X[0].length + 1;
            var F = EG0(Y, J);
            return `

` + F + Z + `
` + I.replace(/\n$/, "") + `
` + F + `

`
        }
    };
    KC.horizontalRule = {
        filter: "hr",
        replacement: function(A, Q, B) {
            return `

` + B.hr + `

`
        }
    };
    KC.inlineLink = {
        filter: function(A, Q) {
            return Q.linkStyle === "inlined" && A.nodeName === "A" && A.getAttribute("href")
        },
        replacement: function(A, Q) {
            var B = Q.getAttribute("href");
            if (B) B = B.replace(/([()])/g, "\\$1");
            var G = S31(Q.getAttribute("title"));
            if (G) G = ' "' + G.replace(/"/g, "\\\"") + '"';
            return "[" + A + "](" + B + G + ")"
        }
    };
    KC.referenceLink = {
        filter: function(A, Q) {
            return Q.linkStyle === "referenced" && A.nodeName === "A" && A.getAttribute("href")
        },
        replacement: function(A, Q, B) {
            var G = Q.getAttribute("href"),
                Z = S31(Q.getAttribute("title"));
            if (Z) Z = ' "' + Z + '"';
            var I, Y;
            switch (B.linkReferenceStyle) {
                case "collapsed":
                    I = "[" + A + "][]", Y = "[" + A + "]: " + G + Z;
                    break;
                case "shortcut":
                    I = "[" + A + "]", Y = "[" + A + "]: " + G + Z;
                    break;
                default:
                    var J = this.references.length + 1;
                    I = "[" + A + "][" + J + "]", Y = "[" + J + "]: " + G + Z
            }
            return this.references.push(Y), I
        },
        references: [],
        append: function(A) {
            var Q = "";
            if (this.references.length) Q = `

` + this.references.join(`
`) + `

`, this.references = [];
            return Q
        }
    };
    KC.emphasis = {
        filter: ["em", "i"],
        replacement: function(A, Q, B) {
            if (!A.trim()) return "";
            return B.emDelimiter + A + B.emDelimiter
        }
    };
    KC.strong = {
        filter: ["strong", "b"],
        replacement: function(A, Q, B) {
            if (!A.trim()) return "";
            return B.strongDelimiter + A + B.strongDelimiter
        }
    };
    KC.code = {
        filter: function(A) {
            var Q = A.previousSibling || A.nextSibling,
                B = A.parentNode.nodeName === "PRE" && !Q;
            return A.nodeName === "CODE" && !B
        },
        replacement: function(A) {
            if (!A) return "";
            A = A.replace(/\r?\n|\r/g, " ");
            var Q = /^`|^ .*?[^ ].* $|`$/.test(A) ? " " : "",
                B = "`",
                G = A.match(/`+/gm) || [];
            while (G.indexOf(B) !== -1) B = B + "`";
            return B + Q + A + Q + B
        }
    };
    KC.image = {
        filter: "img",
        replacement: function(A, Q) {
            var B = S31(Q.getAttribute("alt")),
                G = Q.getAttribute("src") || "",
                Z = S31(Q.getAttribute("title")),
                I = Z ? ' "' + Z + '"' : "";
            return G ? "![" + B + "](" + G + I + ")" : ""
        }
    };

    function S31(A) {
        return A ? A.replace(/(\n+\s*)+/g, `
`) : ""
    }

    function _u2(A) {
        this.options = A, this._keep = [], this._remove = [], this.blankRule = {
            replacement: A.blankReplacement
        }, this.keepReplacement = A.keepReplacement, this.defaultRule = {
            replacement: A.defaultReplacement
        }, this.array = [];
        for (var Q in A.rules) this.array.push(A.rules[Q])
    }
    _u2.prototype = {
        add: function(A, Q) {
            this.array.unshift(Q)
        },
        keep: function(A) {
            this._keep.unshift({
                filter: A,
                replacement: this.keepReplacement
            })
        },
        remove: function(A) {
            this._remove.unshift({
                filter: A,
                replacement: function() {
                    return ""
                }
            })
        },
        forNode: function(A) {
            if (A.isBlank) return this.blankRule;
            var Q;
            if (Q = DG0(this.array, A, this.options)) return Q;
            if (Q = DG0(this._keep, A, this.options)) return Q;
            if (Q = DG0(this._remove, A, this.options)) return Q;
            return this.defaultRule
        },
        forEach: function(A) {
            for (var Q = 0; Q < this.array.length; Q++) A(this.array[Q], Q)
        }
    };

    function DG0(A, Q, B) {
        for (var G = 0; G < A.length; G++) {
            var Z = A[G];
            if (Bs5(Z, Q, B)) return Z
        }
        return
    }

    function Bs5(A, Q, B) {
        var G = A.filter;
        if (typeof G === "string") {
            if (G === Q.nodeName.toLowerCase()) return !0
        } else if (Array.isArray(G)) {
            if (G.indexOf(Q.nodeName.toLowerCase()) > -1) return !0
        } else if (typeof G === "function") {
            if (G.call(A, Q, B)) return !0
        } else throw TypeError("`filter` needs to be a string, array, or function")
    }

    function Gs5(A) {
        var {
            element: Q,
            isBlock: B,
            isVoid: G
        } = A, Z = A.isPre || function(V) {
            return V.nodeName === "PRE"
        };
        if (!Q.firstChild || Z(Q)) return;
        var I = null,
            Y = !1,
            J = null,
            W = Ou2(J, Q, Z);
        while (W !== Q) {
            if (W.nodeType === 3 || W.nodeType === 4) {
                var X = W.data.replace(/[ \r\n\t]+/g, " ");
                if ((!I || / $/.test(I.data)) && !Y && X[0] === " ") X = X.substr(1);
                if (!X) {
                    W = HG0(W);
                    continue
                }
                W.data = X, I = W
            } else if (W.nodeType === 1) {
                if (B(W) || W.nodeName === "BR") {
                    if (I) I.data = I.data.replace(/ $/, "");
                    I = null, Y = !1
                } else if (G(W) || Z(W)) I = null, Y = !0;
                else if (I) Y = !1
            } else {
                W = HG0(W);
                continue
            }
            var F = Ou2(J, W, Z);
            J = W, W = F
        }
        if (I) {
            if (I.data = I.data.replace(/ $/, ""), !I.data) HG0(I)
        }
    }

    function HG0(A) {
        var Q = A.nextSibling || A.parentNode;
        return A.parentNode.removeChild(A), Q
    }

    function Ou2(A, Q, B) {
        if (A && A.parentNode === Q || B(Q)) return Q.nextSibling || Q.parentNode;
        return Q.firstChild || Q.nextSibling || Q.parentNode
    }
    var ku2 = typeof window < "u" ? window : {};

    function Zs5() {
        var A = ku2.DOMParser,
            Q = !1;
        try {
            if (new A().parseFromString("", "text/html")) Q = !0
        } catch (B) {}
        return Q
    }

    function Is5() {
        var A = function() {};
        {
            var Q = Mu2();
            A.prototype.parseFromString = function(B) {
                return Q.createDocument(B)
            }
        }
        return A
    }
    var Ys5 = Zs5() ? ku2.DOMParser : Is5();

    function Js5(A, Q) {
        var B;
        if (typeof A === "string") {
            var G = Ws5().parseFromString('<x-turndown id="turndown-root">' + A + "</x-turndown>", "text/html");
            B = G.getElementById("turndown-root")
        } else B = A.cloneNode(!0);
        return Gs5({
            element: B,
            isBlock: zG0,
            isVoid: Pu2,
            isPre: Q.preformattedCode ? Xs5 : null
        }), B
    }
    var CG0;

    function Ws5() {
        return CG0 = CG0 || new Ys5, CG0
    }

    function Xs5(A) {
        return A.nodeName === "PRE" || A.nodeName === "CODE"
    }

    function Fs5(A, Q) {
        return A.isBlock = zG0(A), A.isCode = A.nodeName === "CODE" || A.parentNode.isCode, A.isBlank = Vs5(A), A.flankingWhitespace = Ks5(A, Q), A
    }

    function Vs5(A) {
        return !Pu2(A) && !As5(A) && /^\s*$/i.test(A.textContent) && !ea5(A) && !Qs5(A)
    }

    function Ks5(A, Q) {
        if (A.isBlock || Q.preformattedCode && A.isCode) return {
            leading: "",
            trailing: ""
        };
        var B = Ds5(A.textContent);
        if (B.leadingAscii && Ru2("left", A, Q)) B.leading = B.leadingNonAscii;
        if (B.trailingAscii && Ru2("right", A, Q)) B.trailing = B.trailingNonAscii;
        return {
            leading: B.leading,
            trailing: B.trailing
        }
    }

    function Ds5(A) {
        var Q = A.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
        return {
            leading: Q[1],
            leadingAscii: Q[2],
            leadingNonAscii: Q[3],
            trailing: Q[4],
            trailingNonAscii: Q[5],
            trailingAscii: Q[6]
        }
    }

    function Ru2(A, Q, B) {
        var G, Z, I;
        if (A === "left") G = Q.previousSibling, Z = / $/;
        else G = Q.nextSibling, Z = /^ /;
        if (G) {
            if (G.nodeType === 3) I = Z.test(G.nodeValue);
            else if (B.preformattedCode && G.nodeName === "CODE") I = !1;
            else if (G.nodeType === 1 && !zG0(G)) I = Z.test(G.textContent)
        }
        return I
    }
    var Hs5 = Array.prototype.reduce,
        Cs5 = [
            [/\\/g, "\\\\"],
            [/\*/g, "\\*"],
            [/^-/g, "\\-"],
            [/^\+ /g, "\\+ "],
            [/^(=+)/g, "\\$1"],
            [/^(#{1,6}) /g, "\\$1 "],
            [/`/g, "\\`"],
            [/^~~~/g, "\\~~~"],
            [/\[/g, "\\["],
            [/\]/g, "\\]"],
            [/^>/g, "\\>"],
            [/_/g, "\\_"],
            [/^(\d+)\. /g, "$1\\. "]
        ];

    function _31(A) {
        if (!(this instanceof _31)) return new _31(A);
        var Q = {
            rules: KC,
            headingStyle: "setext",
            hr: "* * *",
            bulletListMarker: "*",
            codeBlockStyle: "indented",
            fence: "```",
            emDelimiter: "_",
            strongDelimiter: "**",
            linkStyle: "inlined",
            linkReferenceStyle: "full",
            br: "  ",
            preformattedCode: !1,
            blankReplacement: function(B, G) {
                return G.isBlock ? `

` : ""
            },
            keepReplacement: function(B, G) {
                return G.isBlock ? `

` + G.outerHTML + `

` : G.outerHTML
            },
            defaultReplacement: function(B, G) {
                return G.isBlock ? `

` + B + `

` : B
            }
        };
        this.options = sa5({}, Q, A), this.rules = new _u2(this.options)
    }
    _31.prototype = {
        turndown: function(A) {
            if (!Us5(A)) throw TypeError(A + " is not a string, or an element/document/fragment node.");
            if (A === "") return "";
            var Q = yu2.call(this, new Js5(A, this.options));
            return Es5.call(this, Q)
        },
        use: function(A) {
            if (Array.isArray(A))
                for (var Q = 0; Q < A.length; Q++) this.use(A[Q]);
            else if (typeof A === "function") A(this);
            else throw TypeError("plugin must be a Function or an Array of Functions");
            return this
        },
        addRule: function(A, Q) {
            return this.rules.add(A, Q), this
        },
        keep: function(A) {
            return this.rules.keep(A), this
        },
        remove: function(A) {
            return this.rules.remove(A), this
        },
        escape: function(A) {
            return Cs5.reduce(function(Q, B) {
                return Q.replace(B[0], B[1])
            }, A)
        }
    };

    function yu2(A) {
        var Q = this;
        return Hs5.call(A.childNodes, function(B, G) {
            G = new Fs5(G, Q.options);
            var Z = "";
            if (G.nodeType === 3) Z = G.isCode ? G.nodeValue : Q.escape(G.nodeValue);
            else if (G.nodeType === 1) Z = zs5.call(Q, G);
            return xu2(B, Z)
        }, "")
    }

    function Es5(A) {
        var Q = this;
        return this.rules.forEach(function(B) {
            if (typeof B.append === "function") A = xu2(A, B.append(Q.options))
        }), A.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "")
    }

    function zs5(A) {
        var Q = this.rules.forNode(A),
            B = yu2.call(this, A),
            G = A.flankingWhitespace;
        if (G.leading || G.trailing) B = B.trim();
        return G.leading + Q.replacement(B, A, this.options) + G.trailing
    }

    function xu2(A, Q) {
        var B = oa5(A),
            G = ra5(Q),
            Z = Math.max(A.length - B.length, Q.length - G.length),
            I = `

`.substring(0, Z);
        return B + I + G
    }

    function Us5(A) {
        return A != null && (typeof A === "string" || A.nodeType && (A.nodeType === 1 || A.nodeType === 9 || A.nodeType === 11))
    }
    vu2.exports = _31
});

function $s5() {
    let A = Date.now();
    for (let [Q, B] of k31.entries())
        if (A - B.timestamp > gu2) k31.delete(Q)
}

function Ns5(A) {
    if (A.length > ws5) return !1;
    let Q;
    try {
        Q = new URL(A)
    } catch {
        return !1
    }
    if (Q.username || Q.password) return !1;
    if (Q.hostname.split(".").length < 2) return !1;
    return !0
}
async function Ls5(A) {
    try {
        let Q = await GQ.get(`https://claude.ai/api/web/domain_info?domain=${encodeURIComponent(A)}`);
        if (Q.status === 200) return Q.data.can_fetch === !0 ? {
            status: "allowed"
        } : {
            status: "blocked"
        };
        return {
            status: "check_failed",
            error: Error(`Domain check returned status ${Q.status}`)
        }
    } catch (Q) {
        return e(Q), {
            status: "check_failed",
            error: Q
        }
    }
}

function Ms5(A, Q) {
    try {
        let B = new URL(A),
            G = new URL(Q);
        if (G.protocol !== B.protocol) return !1;
        if (G.port !== B.port) return !1;
        if (G.username || G.password) return !1;
        let Z = (J) => J.replace(/^www\./, ""),
            I = Z(B.hostname),
            Y = Z(G.hostname);
        return I === Y
    } catch (B) {
        return !1
    }
}
async function uu2(A, Q, B) {
    try {
        return await GQ.get(A, {
            signal: Q,
            maxRedirects: 0,
            responseType: "arraybuffer",
            maxContentLength: qs5,
            headers: {
                Accept: "text/markdown, text/html, */*"
            }
        })
    } catch (G) {
        if (GQ.isAxiosError(G) && G.response && [301, 302, 307, 308].includes(G.response.status)) {
            let Z = G.response.headers.location;
            if (!Z) throw Error("Redirect missing Location header");
            let I = new URL(Z, A).toString();
            if (B(A, I)) return uu2(I, Q, B);
            else return {
                type: "redirect",
                originalUrl: A,
                redirectUrl: I,
                statusCode: G.response.status
            }
        }
        throw G
    }
}

function Os5(A) {
    return "type" in A && A.type === "redirect"
}
async function mu2(A, Q) {
    if (!Ns5(A)) throw Error("Invalid URL");
    $s5();
    let B = Date.now(),
        G = k31.get(A);
    if (G && B - G.timestamp < gu2) return {
        bytes: G.bytes,
        code: G.code,
        codeText: G.codeText,
        content: G.content
    };
    let Z, I = A;
    try {
        if (Z = new URL(A), Z.protocol === "http:") Z.protocol = "https:", I = Z.toString();
        let V = Z.hostname;
        if (!c0().skipWebFetchPreflight) switch ((await Ls5(V)).status) {
            case "allowed":
                break;
            case "blocked":
                throw new $G0(V);
            case "check_failed":
                throw new wG0(V)
        }
    } catch (V) {
        if (e(V), V instanceof $G0 || V instanceof wG0) throw V
    }
    let Y = await uu2(I, Q.signal, Ms5);
    if (Os5(Y)) return Y;
    let J = Buffer.from(Y.data).toString("utf-8"),
        W = Y.headers["content-type"] ?? "",
        X = Buffer.byteLength(J),
        F;
    if (W.includes("text/html")) F = new hu2.default().turndown(J);
    else F = J;
    if (F.length > fu2) F = F.substring(0, fu2) + "...[content truncated]";
    return k31.set(A, {
        bytes: X,
        code: Y.status,
        codeText: Y.statusText,
        content: F,
        timestamp: B
    }), {
        code: Y.status,
        codeText: Y.statusText,
        content: F,
        bytes: X
    }
}
async function du2(A, Q, B, G) {
    let Z = d7B(Q, A),
        I = await gX({
            systemPrompt: [],
            userPrompt: Z,
            signal: B,
            options: {
                querySource: "web_fetch_apply",
                agents: [],
                isNonInteractiveSession: G,
                hasAppendSystemPrompt: !1,
                mcpTools: [],
                agentIdOrSessionId: G0()
            }
        });
    if (B.aborted) throw new YW;
    let {
        content: Y
    } = I.message;
    if (Y.length > 0) {
        let J = Y[0];
        if ("text" in J) return J.text
    }
    return "No response from model"
}
var hu2, $G0, wG0, k31, gu2 = 900000,
    ws5 = 2000,
    qs5 = 10485760,
    fu2 = 1e5;
var cu2 = L(() => {
    w3();
    kZ();
    w0();
    $Z();
    u1();
    RB();
    S0();
    hu2 = GA(bu2(), 1);
    $G0 = class $G0 extends Error {
        constructor(A) {
            super(`Claude Code is unable to fetch from ${A}`);
            this.name = "DomainBlockedError"
        }
    };
    wG0 = class wG0 extends Error {
        constructor(A) {
            super(`Unable to verify if domain ${A} is safe to fetch. This may be due to network restrictions or enterprise security policies blocking claude.ai.`);
            this.name = "DomainCheckFailedError"
        }
    };
    k31 = new Map
});
var pu2;
var lu2 = L(() => {
    pu2 = new Set(["docs.anthropic.com", "docs.claude.com", "code.claude.com", "modelcontextprotocol.io", "docs.python.org", "en.cppreference.com", "docs.oracle.com", "learn.microsoft.com", "developer.mozilla.org", "go.dev", "www.php.net", "docs.swift.org", "kotlinlang.org", "ruby-doc.org", "doc.rust-lang.org", "www.typescriptlang.org", "react.dev", "angular.io", "vuejs.org", "nextjs.org", "expressjs.com", "nodejs.org", "jquery.com", "getbootstrap.com", "tailwindcss.com", "d3js.org", "threejs.org", "redux.js.org", "webpack.js.org", "jestjs.io", "reactrouter.com", "docs.djangoproject.com", "flask.palletsprojects.com", "fastapi.tiangolo.com", "pandas.pydata.org", "numpy.org", "www.tensorflow.org", "pytorch.org", "scikit-learn.org", "matplotlib.org", "requests.readthedocs.io", "jupyter.org", "laravel.com", "symfony.com", "wordpress.org", "docs.spring.io", "hibernate.org", "tomcat.apache.org", "gradle.org", "maven.apache.org", "asp.net", "dotnet.microsoft.com", "nuget.org", "blazor.net", "reactnative.dev", "docs.flutter.dev", "developer.apple.com", "developer.android.com", "keras.io", "spark.apache.org", "huggingface.co", "www.kaggle.com", "www.mongodb.com", "redis.io", "www.postgresql.org", "dev.mysql.com", "www.sqlite.org", "graphql.org", "prisma.io", "docs.aws.amazon.com", "cloud.google.com", "learn.microsoft.com", "kubernetes.io", "www.docker.com", "www.terraform.io", "www.ansible.com", "vercel.com/docs", "docs.netlify.com", "devcenter.heroku.com/", "cypress.io", "selenium.dev", "docs.unity.com", "docs.unrealengine.com", "git-scm.com", "nginx.org", "httpd.apache.org"])
});

function iu2({
    url: A,
    prompt: Q
}, {
    verbose: B
}) {
    if (!A) return null;
    if (B) return `url: "${A}"${B&&Q?`, prompt: "${Q}"`:""}`;
    return A
}

function nu2() {
    return D$.default.createElement(k3, null)
}

function au2(A, {
    verbose: Q
}) {
    return D$.default.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function su2() {
    return D$.default.createElement(y0, {
        height: 1
    }, D$.default.createElement($, {
        dimColor: !0
    }, "Fetching…"))
}

function ru2({
    bytes: A,
    code: Q,
    codeText: B,
    result: G
}, Z, {
    verbose: I
}) {
    let Y = LJ(A);
    if (I) return D$.default.createElement(j, {
        flexDirection: "column"
    }, D$.default.createElement(y0, {
        height: 1
    }, D$.default.createElement($, null, "Received ", D$.default.createElement($, {
        bold: !0
    }, Y), " (", Q, " ", B, ")")), D$.default.createElement(j, {
        flexDirection: "column"
    }, D$.default.createElement($, null, G)));
    return D$.default.createElement(y0, {
        height: 1
    }, D$.default.createElement($, null, "Received ", D$.default.createElement($, {
        bold: !0
    }, Y), " (", Q, " ", B, ")"))
}

function ou2(A) {
    if (!A?.url) return null;
    return B7(A.url, wk)
}
var D$;
var tu2 = L(() => {
    hA();
    u8();
    lV();
    lX();
    M9();
    D$ = GA(VA(), 1)
});

function Ps5(A) {
    try {
        let Q = cF.inputSchema.safeParse(A);
        if (!Q.success) return `input:${A.toString()}`;
        let {
            url: B
        } = Q.data;
        return `domain:${new URL(B).hostname}`
    } catch {
        return `input:${A.toString()}`
    }
}
var Rs5, Ts5, cF;
var hWA = L(() => {
    h2();
    cu2();
    aG();
    lu2();
    tu2();
    Rs5 = _.strictObject({
        url: _.string().url().describe("The URL to fetch content from"),
        prompt: _.string().describe("The prompt to run on the fetched content")
    }), Ts5 = _.object({
        bytes: _.number().describe("Size of the fetched content in bytes"),
        code: _.number().describe("HTTP response code"),
        codeText: _.string().describe("HTTP response code text"),
        result: _.string().describe("Processed result from applying the prompt to the content"),
        durationMs: _.number().describe("Time taken to fetch and process the content"),
        url: _.string().describe("The URL that was fetched")
    });
    cF = {
        name: vX,
        async description(A) {
            let {
                url: Q
            } = A;
            try {
                return `Claude wants to fetch content from ${new URL(Q).hostname}`
            } catch {
                return "Claude wants to fetch content from this URL"
            }
        },
        userFacingName() {
            return "Fetch"
        },
        getToolUseSummary: ou2,
        isEnabled() {
            return !0
        },
        inputSchema: Rs5,
        outputSchema: Ts5,
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        async checkPermissions(A, Q) {
            let G = (await Q.getAppState()).toolPermissionContext;
            try {
                let {
                    url: W
                } = A, X = new URL(W), F = X.hostname, V = X.pathname;
                for (let K of pu2)
                    if (K.includes("/")) {
                        let [D, ...H] = K.split("/"), C = "/" + H.join("/");
                        if (F === D && V.startsWith(C)) return {
                            behavior: "allow",
                            updatedInput: A,
                            decisionReason: {
                                type: "other",
                                reason: "Preapproved host and path"
                            }
                        }
                    } else if (F === K) return {
                    behavior: "allow",
                    updatedInput: A,
                    decisionReason: {
                        type: "other",
                        reason: "Preapproved host"
                    }
                }
            } catch {}
            let Z = Ps5(A),
                I = uU(G, cF, "deny").get(Z);
            if (I) return {
                behavior: "deny",
                message: `${cF.name} denied access to ${Z}.`,
                decisionReason: {
                    type: "rule",
                    rule: I
                }
            };
            let Y = uU(G, cF, "ask").get(Z);
            if (Y) return {
                behavior: "ask",
                message: `Claude requested permissions to use ${cF.name}, but you haven't granted it yet.`,
                decisionReason: {
                    type: "rule",
                    rule: Y
                }
            };
            let J = uU(G, cF, "allow").get(Z);
            if (J) return {
                behavior: "allow",
                updatedInput: A,
                decisionReason: {
                    type: "rule",
                    rule: J
                }
            };
            return {
                behavior: "ask",
                message: `Claude requested permissions to use ${cF.name}, but you haven't granted it yet.`
            }
        },
        async prompt() {
            return m7B
        },
        async validateInput(A) {
            let {
                url: Q
            } = A;
            try {
                new URL(Q)
            } catch {
                return {
                    result: !1,
                    message: `Error: Invalid URL "${Q}". The URL provided could not be parsed.`,
                    meta: {
                        reason: "invalid_url"
                    },
                    errorCode: 1
                }
            }
            return {
                result: !0
            }
        },
        renderToolUseMessage: iu2,
        renderToolUseRejectedMessage: nu2,
        renderToolUseErrorMessage: au2,
        renderToolUseProgressMessage: su2,
        renderToolResultMessage: ru2,
        async call({
            url: A,
            prompt: Q
        }, {
            abortController: B,
            options: {
                isNonInteractiveSession: G
            }
        }) {
            let Z = Date.now(),
                I = await mu2(A, B);
            if ("type" in I && I.type === "redirect") {
                let K = I.statusCode === 301 ? "Moved Permanently" : I.statusCode === 308 ? "Permanent Redirect" : I.statusCode === 307 ? "Temporary Redirect" : "Found",
                    D = `REDIRECT DETECTED: The URL redirects to a different host.

Original URL: ${I.originalUrl}
Redirect URL: ${I.redirectUrl}
Status: ${I.statusCode} ${K}

To complete your request, I need to fetch content from the redirected URL. Please use WebFetch again with these parameters:
- url: "${I.redirectUrl}"
- prompt: "${Q}"`;
                return {
                    data: {
                        bytes: Buffer.byteLength(D),
                        code: I.statusCode,
                        codeText: K,
                        result: D,
                        durationMs: Date.now() - Z,
                        url: A
                    }
                }
            }
            let {
                content: Y,
                bytes: J,
                code: W,
                codeText: X
            } = I, F = await du2(Q, Y, B.signal, G);
            return {
                data: {
                    bytes: J,
                    code: W,
                    codeText: X,
                    result: F,
                    durationMs: Date.now() - Z,
                    url: A
                }
            }
        },
        mapToolResultToToolResultBlockParam({
            result: A
        }, Q) {
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: A
            }
        }
    }
});

function js5(A) {
    try {
        let Q = cF.inputSchema.safeParse(A);
        if (!Q.success) return `input:${A.toString()}`;
        let {
            url: B
        } = Q.data;
        return `domain:${new URL(B).hostname}`
    } catch {
        return `input:${A.toString()}`
    }
}

function eu2({
    toolUseConfirm: A,
    onDone: Q,
    onReject: B,
    verbose: G
}) {
    let [Z] = $B(), {
        url: I
    } = A.input, Y = new URL(I).hostname, J = _P.useMemo(() => ({
        completion_type: "tool_use_single",
        language_name: "none"
    }), []);
    X$(A, J);
    let W = [{
        label: "Yes",
        value: "yes"
    }, {
        label: `Yes, and don't ask again for ${oA.bold(Y)}`,
        value: "yes-dont-ask-again-domain"
    }, {
        label: `No, and tell Claude what to do differently ${oA.bold.dim("(esc)")}`,
        value: "no"
    }];

    function X(F) {
        switch (F) {
            case "yes":
                Pn("tool_use_single", A, "accept"), A.onAllow(A.input, []), Q();
                break;
            case "yes-dont-ask-again-domain": {
                Pn("tool_use_single", A, "accept");
                let V = js5(A.input),
                    K = {
                        toolName: A.tool.name,
                        ruleContent: V
                    };
                A.onAllow(A.input, [{
                    type: "addRules",
                    rules: [K],
                    behavior: "allow",
                    destination: "localSettings"
                }]), Q();
                break
            }
            case "no":
                Pn("tool_use_single", A, "reject"), A.onReject(), B(), Q();
                break
        }
    }
    return _P.default.createElement(hJ, {
        title: "Fetch"
    }, _P.default.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, _P.default.createElement($, null, cF.renderToolUseMessage(A.input, {
        theme: Z,
        verbose: G
    })), _P.default.createElement($, {
        dimColor: !0
    }, A.description)), _P.default.createElement(j, {
        flexDirection: "column"
    }, _P.default.createElement(WC, {
        permissionResult: A.permissionResult,
        toolType: "tool"
    }), _P.default.createElement($, null, "Do you want to allow Claude to fetch this content?"), _P.default.createElement(M0, {
        options: W,
        onChange: X,
        onCancel: () => X("no")
    })))
}
var _P;
var Am2 = L(() => {
    hA();
    hWA();
    On();
    CO();
    a30();
    T5();
    J9();
    ih();
    _P = GA(VA(), 1)
});
import {
    relative as Ss5
} from "path";

function Qm2({
    notebook_path: A,
    cell_id: Q,
    new_source: B,
    cell_type: G,
    edit_mode: Z = "replace",
    verbose: I,
    width: Y
}) {
    let J = gWA.useMemo(() => OA().existsSync(A), [A]),
        W = gWA.useMemo(() => {
            if (!J) return null;
            try {
                let D = Tq(A);
                return S7(D)
            } catch (D) {
                return null
            }
        }, [A, J]),
        X = gWA.useMemo(() => {
            if (!W || !Q) return "";
            let D = ZwA(Q);
            if (D !== void 0) {
                if (W.cells[D]) {
                    let C = W.cells[D].source;
                    return Array.isArray(C) ? C.join("") : C
                }
                return ""
            }
            let H = W.cells.find((C) => C.id === Q);
            if (!H) return "";
            return Array.isArray(H.source) ? H.source.join("") : H.source
        }, [W, Q]),
        F = gWA.useMemo(() => {
            if (!W || !W.metadata.language_info) return "python";
            return W.metadata.language_info.name || "python"
        }, [W]),
        V = gWA.useMemo(() => {
            if (!J || Z === "insert" || Z === "delete") return null;
            return Cq({
                filePath: A,
                fileContents: X,
                edits: [{
                    old_string: X,
                    new_string: B,
                    replace_all: !1
                }],
                ignoreWhitespace: !1
            })
        }, [J, A, X, B, Z]),
        K;
    switch (Z) {
        case "insert":
            K = "Insert new cell";
            break;
        case "delete":
            K = "Delete cell";
            break;
        default:
            K = "Replace cell contents"
    }
    return $I.createElement(j, {
        flexDirection: "column"
    }, $I.createElement(j, {
        borderDimColor: !0,
        borderStyle: "round",
        flexDirection: "column",
        paddingX: 1
    }, $I.createElement(j, {
        paddingBottom: 1,
        flexDirection: "column"
    }, $I.createElement($, {
        bold: !0
    }, I ? A : Ss5(H0(), A)), $I.createElement($, {
        dimColor: !0
    }, K, " for cell ", Q, G ? ` (${G})` : "")), Z === "delete" ? $I.createElement(j, {
        flexDirection: "column",
        paddingLeft: 2
    }, $I.createElement(XO, {
        code: X,
        language: F
    })) : Z === "insert" ? $I.createElement(j, {
        flexDirection: "column",
        paddingLeft: 2
    }, $I.createElement(XO, {
        code: B,
        language: G === "markdown" ? "markdown" : F
    })) : V ? fF(V.map((D) => $I.createElement(Z$, {
        key: D.newStart,
        patch: D,
        dim: !1,
        width: Y,
        filePath: A
    })), (D) => $I.createElement($, {
        dimColor: !0,
        key: `ellipsis-${D}`
    }, "...")) : $I.createElement(XO, {
        code: B,
        language: G === "markdown" ? "markdown" : F
    })))
}
var $I, gWA;
var Bm2 = L(() => {
    Zn();
    hA();
    R2();
    iJA();
    fk();
    M9();
    zV();
    o0();
    UoA();
    $I = GA(VA(), 1), gWA = GA(VA(), 1)
});
import {
    basename as _s5
} from "path";

function Gm2(A) {
    let Q = (W) => {
            let X = LP.inputSchema.safeParse(W);
            if (!X.success) return e(Error(`Failed to parse notebook edit input: ${X.error.message}`)), {
                notebook_path: "",
                new_source: "",
                cell_id: ""
            };
            return X.data
        },
        B = Q(A.toolUseConfirm.input),
        {
            notebook_path: G,
            edit_mode: Z,
            cell_type: I
        } = B,
        Y = I === "markdown" ? "markdown" : "python",
        J = Z === "insert" ? "insert this cell into" : Z === "delete" ? "delete this cell from" : "make this edit to";
    return OTA.default.createElement(Tn, {
        toolUseConfirm: A.toolUseConfirm,
        toolUseContext: A.toolUseContext,
        onDone: A.onDone,
        onReject: A.onReject,
        title: "Edit notebook",
        question: OTA.default.createElement($, null, "Do you want to ", J, " ", OTA.default.createElement($, {
            bold: !0
        }, _s5(G)), "?"),
        content: OTA.default.createElement(Qm2, {
            notebook_path: B.notebook_path,
            cell_id: B.cell_id,
            new_source: B.new_source,
            cell_type: B.cell_type,
            edit_mode: B.edit_mode,
            verbose: A.verbose,
            width: A.verbose ? 120 : 80
        }),
        path: G,
        completionType: "tool_use_single",
        languageName: Y,
        parseInput: Q
    })
}
var OTA;
var Zm2 = L(() => {
    hA();
    eJA();
    Bm2();
    BTA();
    u1();
    OTA = GA(VA(), 1)
});
var dJ = "AskUserQuestion",
    Im2 = 12,
    Ym2 = "Asks the user multiple choice questions to gather information, clarify ambiguity, understand preferences, make decisions or offer them choices.",
    Jm2 = `Use this tool when you need to ask the user questions during execution. This allows you to:
1. Gather user preferences or requirements
2. Clarify ambiguous instructions
3. Get decisions on implementation choices as you work
4. Offer choices to the user about what direction to take.

Usage notes:
- Users will always be able to select "Other" to provide custom text input
- Use multiSelect: true to allow multiple answers to be selected for a question
`;
var $JZ, Wm2;
var Xm2 = L(() => {
    $JZ = `Use this tool when you are in plan mode and have finished presenting your plan and are ready to code. This will prompt the user to exit plan mode.
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Handling Ambiguity in Plans
Before using this tool, ensure your plan is clear and unambiguous. If there are multiple valid approaches or unclear requirements:
1. Use the ${dJ} tool to clarify with the user
2. Ask about specific implementation choices (e.g., architectural patterns, which library to use)
3. Clarify any assumptions that could affect the implementation
4. Only proceed with ExitPlanMode after resolving ambiguities

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${dJ} first, then use exit plan mode tool after clarifying the approach.
`, Wm2 = `Use this tool when you are in plan mode and have finished writing your plan to the plan file and are ready for user approval.

## How This Tool Works
- You should have already written your plan to the plan file specified in the plan mode system message
- This tool does NOT take the plan content as a parameter - it will read the plan from the file you wrote
- This tool simply signals that you're done planning and ready for the user to review and approve
- The user will see the contents of your plan file when they review it

## When to Use This Tool
IMPORTANT: Only use this tool when the task requires planning the implementation steps of a task that requires writing code. For research tasks where you're gathering information, searching files, reading files or in general trying to understand the codebase - do NOT use this tool.

## Handling Ambiguity in Plans
Before using this tool, ensure your plan is clear and unambiguous. If there are multiple valid approaches or unclear requirements:
1. Use the ${dJ} tool to clarify with the user
2. Ask about specific implementation choices (e.g., architectural patterns, which library to use)
3. Clarify any assumptions that could affect the implementation
4. Edit your plan file to incorporate user feedback
5. Only proceed with ExitPlanMode after resolving ambiguities and updating the plan file

## Examples

1. Initial task: "Search for and understand the implementation of vim mode in the codebase" - Do not use the exit plan mode tool because you are not planning the implementation steps of a task.
2. Initial task: "Help me implement yank mode for vim" - Use the exit plan mode tool after you have finished planning the implementation steps of the task.
3. Initial task: "Add a new feature to handle user authentication" - If unsure about auth method (OAuth, JWT, etc.), use ${dJ} first, then use exit plan mode tool after clarifying the approach.
`
});
var pD;
var yn = L(() => {
    f5();
    pD = m0.platform === "darwin" ? "⏺" : "●"
});

function y31({
    plan: A,
    themeName: Q
}) {
    return kP.createElement(y0, null, kP.createElement(j, {
        flexDirection: "column"
    }, kP.createElement($, {
        color: "error"
    }, "User rejected Claude's plan:"), kP.createElement(j, {
        borderStyle: "round",
        borderColor: "planMode",
        borderDimColor: !0,
        paddingX: 1,
        overflow: "hidden"
    }, kP.createElement($, {
        dimColor: !0
    }, _D(A, Q)))))
}
var kP;
var qG0 = L(() => {
    hA();
    Hh();
    u8();
    kP = GA(VA(), 1)
});

function Fm2() {
    return null
}

function Vm2() {
    return null
}

function Km2(A, Q, {
    theme: B
}) {
    let {
        plan: G
    } = A, Z = "filePath" in A ? A.filePath : void 0, I = Z ? Q5(Z) : "";
    return gW.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, gW.createElement(j, {
        flexDirection: "row"
    }, gW.createElement($, {
        color: sj("plan")
    }, pD), gW.createElement($, null, " User approved Claude's plan")), gW.createElement(y0, null, gW.createElement(j, {
        flexDirection: "column"
    }, Z && gW.createElement($, {
        dimColor: !0
    }, "Plan saved to: ", I, " · /plan to edit"), gW.createElement($, {
        dimColor: !0
    }, _D(G, B)))))
}

function Dm2({
    plan: A
}, {
    theme: Q
}) {
    let B = A ?? fU() ?? "No plan found";
    return gW.createElement(j, {
        flexDirection: "column"
    }, gW.createElement(y31, {
        plan: B,
        themeName: Q
    }))
}

function Hm2() {
    return null
}
var gW;
var Cm2 = L(() => {
    hA();
    Hh();
    u8();
    yn();
    qG0();
    Bw();
    _E();
    M9();
    gW = GA(VA(), 1)
});
var ks5, ys5, xq;