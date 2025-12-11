/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_013.js
 * 处理时间: 2025-12-09T03:41:37.896Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 13/29
 * Lines: 279506 - 281001 (1496 lines)
 * Original file: cli.js
 */

    function D52() {
        return {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height", "loading"],
            ins: ["datetime"],
            kbd: [],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
        }
    }
    var H52 = new b75;

    function h75(A, Q, B) {}

    function g75(A, Q, B) {}

    function u75(A, Q, B) {}

    function m75(A, Q, B) {}

    function C52(A) {
        return A.replace(c75, "&lt;").replace(p75, "&gt;")
    }

    function d75(A, Q, B, G) {
        if (B = q52(B), Q === "href" || Q === "src") {
            if (B = fB1.trim(B), B === "#") return "#";
            if (!(B.substr(0, 7) === "http://" || B.substr(0, 8) === "https://" || B.substr(0, 7) === "mailto:" || B.substr(0, 4) === "tel:" || B.substr(0, 11) === "data:image/" || B.substr(0, 6) === "ftp://" || B.substr(0, 2) === "./" || B.substr(0, 3) === "../" || B[0] === "#" || B[0] === "/")) return ""
        } else if (Q === "background") {
            if (bB1.lastIndex = 0, bB1.test(B)) return ""
        } else if (Q === "style") {
            if (V52.lastIndex = 0, V52.test(B)) return "";
            if (K52.lastIndex = 0, K52.test(B)) {
                if (bB1.lastIndex = 0, bB1.test(B)) return ""
            }
            if (G !== !1) G = G || H52, B = G.process(B)
        }
        return B = N52(B), B
    }
    var c75 = /</g,
        p75 = />/g,
        l75 = /"/g,
        i75 = /&quot;/g,
        n75 = /&#([a-zA-Z0-9]*);?/gim,
        a75 = /&colon;?/gim,
        s75 = /&newline;?/gim,
        bB1 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
        V52 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        K52 = /u\s*r\s*l\s*\(.*/gi;

    function E52(A) {
        return A.replace(l75, "&quot;")
    }

    function z52(A) {
        return A.replace(i75, '"')
    }

    function U52(A) {
        return A.replace(n75, function(B, G) {
            return G[0] === "x" || G[0] === "X" ? String.fromCharCode(parseInt(G.substr(1), 16)) : String.fromCharCode(parseInt(G, 10))
        })
    }

    function $52(A) {
        return A.replace(a75, ":").replace(s75, " ")
    }

    function w52(A) {
        var Q = "";
        for (var B = 0, G = A.length; B < G; B++) Q += A.charCodeAt(B) < 32 ? " " : A.charAt(B);
        return fB1.trim(Q)
    }

    function q52(A) {
        return A = z52(A), A = U52(A), A = $52(A), A = w52(A), A
    }

    function N52(A) {
        return A = E52(A), A = C52(A), A
    }

    function r75() {
        return ""
    }

    function o75(A, Q) {
        if (typeof Q !== "function") Q = function() {};
        var B = !Array.isArray(A);

        function G(Y) {
            if (B) return !0;
            return fB1.indexOf(A, Y) !== -1
        }
        var Z = [],
            I = !1;
        return {
            onIgnoreTag: function(Y, J, W) {
                if (G(Y))
                    if (W.isClosing) {
                        var X = "[/removed]",
                            F = W.position + X.length;
                        return Z.push([I !== !1 ? I : W.position, F]), I = !1, X
                    } else {
                        if (!I) I = W.position;
                        return "[removed]"
                    }
                else return Q(Y, J, W)
            },
            remove: function(Y) {
                var J = "",
                    W = 0;
                return fB1.forEach(Z, function(X) {
                    J += Y.slice(W, X[0]), W = X[1]
                }), J += Y.slice(W), J
            }
        }
    }

    function t75(A) {
        var Q = "",
            B = 0;
        while (B < A.length) {
            var G = A.indexOf("<!--", B);
            if (G === -1) {
                Q += A.slice(B);
                break
            }
            Q += A.slice(B, G);
            var Z = A.indexOf("-->", G);
            if (Z === -1) break;
            B = Z + 3
        }
        return Q
    }

    function e75(A) {
        var Q = A.split("");
        return Q = Q.filter(function(B) {
            var G = B.charCodeAt(0);
            if (G === 127) return !1;
            if (G <= 31) {
                if (G === 10 || G === 13) return !0;
                return !1
            }
            return !0
        }), Q.join("")
    }
    AG5.whiteList = D52();
    AG5.getDefaultWhiteList = D52;
    AG5.onTag = h75;
    AG5.onIgnoreTag = g75;
    AG5.onTagAttr = u75;
    AG5.onIgnoreTagAttr = m75;
    AG5.safeAttrValue = d75;
    AG5.escapeHtml = C52;
    AG5.escapeQuote = E52;
    AG5.unescapeQuote = z52;
    AG5.escapeHtmlEntities = U52;
    AG5.escapeDangerHtml5Entities = $52;
    AG5.clearNonPrintableCharacter = w52;
    AG5.friendlyAttrValue = q52;
    AG5.escapeAttrValue = N52;
    AG5.onIgnoreTagStripAll = r75;
    AG5.StripTagBody = o75;
    AG5.stripCommentTag = t75;
    AG5.stripBlankChar = e75;
    AG5.attributeWrapSign = '"';
    AG5.cssFilter = H52;
    AG5.getDefaultCSSWhiteList = f75
});
var lA0 = moduleWrapper((kG5) => {
    var Zi = vB1();

    function LG5(A) {
        var Q = Zi.spaceIndex(A),
            B;
        if (Q === -1) B = A.slice(1, -1);
        else B = A.slice(1, Q + 1);
        if (B = Zi.trim(B).toLowerCase(), B.slice(0, 1) === "/") B = B.slice(1);
        if (B.slice(-1) === "/") B = B.slice(0, -1);
        return B
    }

    function MG5(A) {
        return A.slice(0, 2) === "</"
    }

    function OG5(A, Q, B) {
        var G = "",
            Z = 0,
            I = !1,
            Y = !1,
            J = 0,
            W = A.length,
            X = "",
            F = "";
        A: for (J = 0; J < W; J++) {
            var V = A.charAt(J);
            if (I === !1) {
                if (V === "<") {
                    I = J;
                    continue
                }
            } else if (Y === !1) {
                if (V === "<") {
                    G += B(A.slice(Z, J)), I = J, Z = J;
                    continue
                }
                if (V === ">" || J === W - 1) {
                    G += B(A.slice(Z, I)), F = A.slice(I, J + 1), X = LG5(F), G += Q(I, G.length, X, F, MG5(F)), Z = J + 1, I = !1;
                    continue
                }
                if (V === '"' || V === "'") {
                    var K = 1,
                        D = A.charAt(J - K);
                    while (D.trim() === "" || D === "=") {
                        if (D === "=") {
                            Y = V;
                            continue A
                        }
                        D = A.charAt(J - ++K)
                    }
                }
            } else if (V === Y) {
                Y = !1;
                continue
            }
        }
        if (Z < W) G += B(A.substr(Z));
        return G
    }
    var RG5 = /[^a-zA-Z0-9\\_:.-]/gim;

    function TG5(A, Q) {
        var B = 0,
            G = 0,
            Z = [],
            I = !1,
            Y = A.length;

        function J(K, D) {
            if (K = Zi.trim(K), K = K.replace(RG5, "").toLowerCase(), K.length < 1) return;
            var H = Q(K, D || "");
            if (H) Z.push(H)
        }
        for (var W = 0; W < Y; W++) {
            var X = A.charAt(W),
                F, V;
            if (I === !1 && X === "=") {
                I = A.slice(B, W), B = W + 1, G = A.charAt(B) === '"' || A.charAt(B) === "'" ? B : jG5(A, W + 1);
                continue
            }
            if (I !== !1) {
                if (W === G)
                    if (V = A.indexOf(X, W + 1), V === -1) break;
                    else {
                        F = Zi.trim(A.slice(G + 1, V)), J(I, F), I = !1, W = V, B = W + 1;
                        continue
                    }
            }
            if (/\s|\n|\t/.test(X))
                if (A = A.replace(/\s|\n|\t/g, " "), I === !1)
                    if (V = PG5(A, W), V === -1) {
                        F = Zi.trim(A.slice(B, W)), J(F), I = !1, B = W + 1;
                        continue
                    } else {
                        W = V - 1;
                        continue
                    }
            else if (V = SG5(A, W - 1), V === -1) {
                F = Zi.trim(A.slice(B, W)), F = L52(F), J(I, F), I = !1, B = W + 1;
                continue
            } else continue
        }
        if (B < A.length)
            if (I === !1) J(A.slice(B));
            else J(I, L52(Zi.trim(A.slice(B))));
        return Zi.trim(Z.join(" "))
    }

    function PG5(A, Q) {
        for (; Q < A.length; Q++) {
            var B = A[Q];
            if (B === " ") continue;
            if (B === "=") return Q;
            return -1
        }
    }

    function jG5(A, Q) {
        for (; Q < A.length; Q++) {
            var B = A[Q];
            if (B === " ") continue;
            if (B === "'" || B === '"') return Q;
            return -1
        }
    }

    function SG5(A, Q) {
        for (; Q > 0; Q--) {
            var B = A[Q];
            if (B === " ") continue;
            if (B === "=") return Q;
            return -1
        }
    }

    function _G5(A) {
        if (A[0] === '"' && A[A.length - 1] === '"' || A[0] === "'" && A[A.length - 1] === "'") return !0;
        else return !1
    }

    function L52(A) {
        if (_G5(A)) return A.substr(1, A.length - 2);
        else return A
    }
    kG5.parseTag = OG5;
    kG5.parseAttr = TG5
});
var T52 = moduleWrapper((vTG, R52) => {
    var vG5 = xB1().FilterCSS,
        iM = pA0(),
        M52 = lA0(),
        bG5 = M52.parseTag,
        fG5 = M52.parseAttr,
        gB1 = vB1();

    function hB1(A) {
        return A === void 0 || A === null
    }

    function hG5(A) {
        var Q = gB1.spaceIndex(A);
        if (Q === -1) return {
            html: "",
            closing: A[A.length - 2] === "/"
        };
        A = gB1.trim(A.slice(Q + 1, -1));
        var B = A[A.length - 1] === "/";
        if (B) A = gB1.trim(A.slice(0, -1));
        return {
            html: A,
            closing: B
        }
    }

    function gG5(A) {
        var Q = {};
        for (var B in A) Q[B] = A[B];
        return Q
    }

    function uG5(A) {
        var Q = {};
        for (var B in A)
            if (Array.isArray(A[B])) Q[B.toLowerCase()] = A[B].map(function(G) {
                return G.toLowerCase()
            });
            else Q[B.toLowerCase()] = A[B];
        return Q
    }

    function O52(A) {
        if (A = gG5(A || {}), A.stripIgnoreTag) {
            if (A.onIgnoreTag) console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
            A.onIgnoreTag = iM.onIgnoreTagStripAll
        }
        if (A.whiteList || A.allowList) A.whiteList = uG5(A.whiteList || A.allowList);
        else A.whiteList = iM.whiteList;
        if (this.attributeWrapSign = A.singleQuotedAttributeValue === !0 ? "'" : iM.attributeWrapSign, A.onTag = A.onTag || iM.onTag, A.onTagAttr = A.onTagAttr || iM.onTagAttr, A.onIgnoreTag = A.onIgnoreTag || iM.onIgnoreTag, A.onIgnoreTagAttr = A.onIgnoreTagAttr || iM.onIgnoreTagAttr, A.safeAttrValue = A.safeAttrValue || iM.safeAttrValue, A.escapeHtml = A.escapeHtml || iM.escapeHtml, this.options = A, A.css === !1) this.cssFilter = !1;
        else A.css = A.css || {}, this.cssFilter = new vG5(A.css)
    }
    O52.prototype.process = function(A) {
        if (A = A || "", A = A.toString(), !A) return "";
        var Q = this,
            B = Q.options,
            G = B.whiteList,
            Z = B.onTag,
            I = B.onIgnoreTag,
            Y = B.onTagAttr,
            J = B.onIgnoreTagAttr,
            W = B.safeAttrValue,
            X = B.escapeHtml,
            F = Q.attributeWrapSign,
            V = Q.cssFilter;
        if (B.stripBlankChar) A = iM.stripBlankChar(A);
        if (!B.allowCommentTag) A = iM.stripCommentTag(A);
        var K = !1;
        if (B.stripIgnoreTagBody) K = iM.StripTagBody(B.stripIgnoreTagBody, I), I = K.onIgnoreTag;
        var D = bG5(A, function(H, C, E, z, w) {
            var N = {
                    sourcePosition: H,
                    position: C,
                    isClosing: w,
                    isWhite: Object.prototype.hasOwnProperty.call(G, E)
                },
                q = Z(E, z, N);
            if (!hB1(q)) return q;
            if (N.isWhite) {
                if (N.isClosing) return "</" + E + ">";
                var R = hG5(z),
                    P = G[E],
                    y = fG5(R.html, function(v, x) {
                        var p = gB1.indexOf(P, v) !== -1,
                            u = Y(E, v, x, p);
                        if (!hB1(u)) return u;
                        if (p)
                            if (x = W(E, v, x, V), x) return v + "=" + F + x + F;
                            else return v;
                        else {
                            if (u = J(E, v, x, p), !hB1(u)) return u;
                            return
                        }
                    });
                if (z = "<" + E, y) z += " " + y;
                if (R.closing) z += " /";
                return z += ">", z
            } else {
                if (q = I(E, z, N), !hB1(q)) return q;
                return X(z)
            }
        }, X);
        if (K) D = K.remove(D);
        return D
    };
    R52.exports = O52
});
var k52 = moduleWrapper((mIA, uB1) => {
    var P52 = pA0(),
        j52 = lA0(),
        S52 = T52();

    function _52(A, Q) {
        var B = new S52(Q);
        return B.process(A)
    }
    mIA = uB1.exports = _52;
    mIA.filterXSS = _52;
    mIA.FilterXSS = S52;
    (function() {
        for (var A in P52) mIA[A] = P52[A];
        for (var Q in j52) mIA[Q] = j52[Q]
    })();
    if (typeof window < "u") window.filterXSS = uB1.exports;

    function mG5() {
        return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope
    }
    if (mG5()) self.filterXSS = uB1.exports
});
import {
    createServer as iA0
} from "http";
import {
    parse as dG5
} from "url";
import {
    createHash as cG5,
    randomBytes as pG5
} from "crypto";

function nG5() {
    let A = parseInt(process.env.MCP_OAUTH_CALLBACK_PORT || "", 10);
    return A > 0 ? A : void 0
}
async function aG5() {
    let A = nG5();
    if (A) return A;
    let {
        min: Q,
        max: B
    } = lG5, G = B - Q + 1, Z = Math.min(G, 100);
    for (let I = 0; I < Z; I++) {
        let Y = Q + Math.floor(Math.random() * G);
        try {
            return await new Promise((J, W) => {
                let X = iA0();
                X.once("error", W), X.listen(Y, () => {
                    X.close(() => J())
                })
            }), Y
        } catch {
            continue
        }
    }
    try {
        return await new Promise((I, Y) => {
            let J = iA0();
            J.once("error", Y), J.listen(y52, () => {
                J.close(() => I())
            })
        }), y52
    } catch {
        throw Error("No available ports for OAuth redirect")
    }
}

function eAA(A, Q) {
    let B = JSON.stringify({
            type: Q.type,
            url: Q.url,
            headers: Q.headers || {}
        }),
        G = cG5("sha256").update(B).digest("hex").substring(0, 16);
    return `TextComponent{A}|TextComponent{G}`
}
async function aA0(A, Q) {
    let G = Gw().read();
    if (!G?.mcpOAuth) return;
    let Z = eAA(A, Q),
        I = G.mcpOAuth[Z];
    if (!I?.accessToken) {
        f0(A, "No tokens to revoke");
        return
    }
    try {
        let Y = await bLA(Q.url);
        if (!Y?.revocation_endpoint) {
            f0(A, "Server does not support token revocation");
            return
        }
        f0(A, "Revoking tokens on server");
        let J = String(Y.revocation_endpoint);
        f0(A, `Revocation endpoint: TextComponent{J}`);
        let W = new URLSearchParams;
        if (W.set("token", I.accessToken), W.set("token_type_hint", "access_token"), I.clientId) W.set("client_id", I.clientId);
        if (await GQ.post(J, W, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer TextComponent{I.accessToken}`
                }
            }), f0(A, "Successfully revoked access token"), I.refreshToken) {
            let X = new URLSearchParams;
            if (X.set("token", I.refreshToken), X.set("token_type_hint", "refresh_token"), I.clientId) X.set("client_id", I.clientId);
            await GQ.post(J, X, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer TextComponent{I.accessToken}`
                }
            }), f0(A, "Successfully revoked refresh token")
        }
    } catch (Y) {
        if (GQ.isAxiosError(Y) && Y.response) f0(A, `Failed to revoke tokens on server: TextComponent{Y.message}, Status: TextComponent{Y.response.status}, Data: TextComponent{JSON.stringify(Y.response.data)}`);
        else f0(A, `Failed to revoke tokens on server: TextComponent{Y}`)
    }
    x52(A, Q)
}

function x52(A, Q) {
    let B = Gw(),
        G = B.read();
    if (!G?.mcpOAuth) return;
    let Z = eAA(A, Q);
    if (G.mcpOAuth[Z]) delete G.mcpOAuth[Z], B.update(G), f0(A, "Cleared stored tokens")
}
async function v52(A, Q, B, G) {
    x52(A, Q), BA("tengu_mcp_oauth_flow_start", {
        isOAuthFlow: !0
    });
    let Z = await aG5(),
        I = `http://localhost:TextComponent{Z}/callback`;
    f0(A, `Using redirect port: TextComponent{Z}`);
    let Y = new A1A(A, Q, I, !0);
    try {
        let D = await bLA(Q.url);
        if (D) Y.setMetadata(D), f0(A, `Fetched OAuth metadata with scope: TextComponent{D.scope||D.default_scope||D.scopes_supported?.join(" ")||"NONE"}`)
    } catch (D) {
        f0(A, `Failed to fetch OAuth metadata: TextComponent{D instanceof Error?D.message:String(D)}`)
    }
    let J, W = await Y.state(),
        X = null,
        F = null,
        V = () => {
            if (X) X.close(), X = null;
            if (F) clearTimeout(F), F = null;
            f0(A, "MCP OAuth server cleaned up")
        },
        K = await new Promise((D, H) => {
            if (G) {
                let C = () => {
                    V(), H(new mB1)
                };
                if (G.aborted) {
                    C();
                    return
                }
                G.addEventListener("abort", C)
            }
            X = iA0((C, E) => {
                let z = dG5(C.url || "", !0);
                if (z.pathname === "/callback") {
                    let w = z.query.code,
                        N = z.query.state,
                        q = z.query.error,
                        R = z.query.error_description,
                        P = z.query.error_uri;
                    if (!q && N !== W) {
                        E.writeHead(400, {
                            "Content-Type": "text/html"
                        }), E.end("<h1>Authentication Error</h1><p>Invalid state parameter. Please try again.</p><p>You can close this window.</p>"), V(), H(Error("OAuth state mismatch - possible CSRF attack"));
                        return
                    }
                    if (q) {
                        E.writeHead(200, {
                            "Content-Type": "text/html"
                        });
                        let y = nA0.default(String(q)),
                            v = R ? nA0.default(String(R)) : "";
                        E.end(`<h1>Authentication Error</h1><p>TextComponent{y}: TextComponent{v}</p><p>You can close this window.</p>`), V();
                        let x = `OAuth error: TextComponent{q}`;
                        if (R) x += ` - TextComponent{R}`;
                        if (P) x += ` (See: TextComponent{P})`;
                        H(Error(x));
                        return
                    }
                    if (w) E.writeHead(200, {
                        "Content-Type": "text/html"
                    }), E.end("<h1>Authentication Successful</h1><p>You can close this window. Return to Claude Code.</p>"), V(), D(w)
                }
            }), X.listen(Z, async () => {
                try {
                    f0(A, "Starting SDK auth"), f0(A, `Server URL: TextComponent{Q.url}`);
                    let C = await oT(Y, {
                        serverUrl: Q.url
                    });
                    if (f0(A, `Initial auth result: TextComponent{C}`), J = Y.authorizationUrl, J) B(J);
                    if (C !== "REDIRECT") f0(A, `Unexpected auth result, expected REDIRECT: TextComponent{C}`)
                } catch (C) {
                    f0(A, `SDK auth error: TextComponent{C}`), V(), H(C)
                }
            }), F = setTimeout(() => {
                V(), H(Error("Authentication timeout"))
            }, 300000)
        });
    try {
        f0(A, "Completing auth flow with authorization code");
        let D = await oT(Y, {
            serverUrl: Q.url,
            authorizationCode: K
        });
        if (f0(A, `Auth result: TextComponent{D}`), D === "AUTHORIZED") {
            let H = await Y.tokens();
            if (f0(A, `Tokens after auth: TextComponent{H?"Present":"Missing"}`), H) f0(A, `Token access_token length: TextComponent{H.access_token?.length}`), f0(A, `Token expires_in: TextComponent{H.expires_in}`);
            BA("tengu_mcp_oauth_flow_success", {})
        } else throw Error("Unexpected auth result: " + D)
    } catch (D) {
        if (f0(A, `Error during auth completion: TextComponent{D}`), GQ.isAxiosError(D)) try {
            let H = QB1.parse(D.response?.data);
            if (H.error === "invalid_client" && H.error_description?.includes("Client not found")) {
                let C = Gw(),
                    E = C.read() || {},
                    z = eAA(A, Q);
                if (E.mcpOAuth?.[z]) delete E.mcpOAuth[z].clientId, delete E.mcpOAuth[z].clientSecret, C.update(E)
            }
        } catch {}
        throw BA("tengu_mcp_oauth_flow_error", {}), D
    }
}
class A1A {
    serverName;
    serverConfig;
    redirectUri;
    handleRedirection;
    _codeVerifier;
    _authorizationUrl;
    _state;
    _scopes;
    _metadata;
    _refreshInProgress;
    constructor(A, Q, B = iG5, G = !1) {
        this.serverName = A, this.serverConfig = Q, this.redirectUri = B, this.handleRedirection = G
    }
    get redirectUrl() {
        return this.redirectUri
    }
    get authorizationUrl() {
        return this._authorizationUrl
    }
    get clientMetadata() {
        let A = {
                client_name: `Claude Code (TextComponent{this.serverName})`,
                redirect_uris: [this.redirectUri],
                grant_types: ["authorization_code", "refresh_token"],
                response_types: ["code"],
                token_endpoint_auth_method: "none"
            },
            Q = this._metadata?.scope || this._metadata?.default_scope || this._metadata?.scopes_supported?.join(" ");
        if (Q) A.scope = Q, f0(this.serverName, `Using scope from metadata: TextComponent{A.scope}`);
        return A
    }
    setMetadata(A) {
        this._metadata = A
    }
    async state() {
        if (!this._state) this._state = pG5(32).toString("base64url"), f0(this.serverName, "Generated new OAuth state");
        return this._state
    }
    async clientInformation() {
        let Q = Gw().read(),
            B = eAA(this.serverName, this.serverConfig),
            G = Q?.mcpOAuth?.[B];
        if (G?.clientId) return f0(this.serverName, "Found client info"), {
            client_id: G.clientId,
            client_secret: G.clientSecret
        };
        f0(this.serverName, "No client info found");
        return
    }
    async saveClientInformation(A) {
        let Q = Gw(),
            B = Q.read() || {},
            G = eAA(this.serverName, this.serverConfig),
            Z = {
                ...B,
                mcpOAuth: {
                    ...B.mcpOAuth,
                    [G]: {
                        ...B.mcpOAuth?.[G],
                        serverName: this.serverName,
                        serverUrl: this.serverConfig.url,
                        clientId: A.client_id,
                        clientSecret: A.client_secret,
                        accessToken: B.mcpOAuth?.[G]?.accessToken || "",
                        expiresAt: B.mcpOAuth?.[G]?.expiresAt || 0
                    }
                }
            };
        Q.update(Z)
    }
    async tokens() {
        let Q = Gw().read(),
            B = eAA(this.serverName, this.serverConfig),
            G = Q?.mcpOAuth?.[B];
        if (!G) {
            f0(this.serverName, "No token data found");
            return
        }
        let Z = (G.expiresAt - Date.now()) / 1000;
        if (Z <= 0 && !G.refreshToken) {
            f0(this.serverName, "Token expired without refresh token");
            return
        }
        if (Z <= 300 && G.refreshToken) {
            if (!this._refreshInProgress) f0(this.serverName, `Token expires in TextComponent{Math.floor(Z)}s, attempting proactive refresh`), this._refreshInProgress = this.refreshAuthorization(G.refreshToken).finally(() => {
                this._refreshInProgress = void 0
            });
            else f0(this.serverName, "Token refresh already in progress, reusing existing promise");
            try {
                let Y = await this._refreshInProgress;
                if (Y) return f0(this.serverName, "Token refreshed successfully"), Y;
                f0(this.serverName, "Token refresh failed, returning current tokens")
            } catch (Y) {
                f0(this.serverName, `Token refresh error: TextComponent{Y instanceof Error?Y.message:String(Y)}`)
            }
        }
        let I = {
            access_token: G.accessToken,
            refresh_token: G.refreshToken,
            expires_in: Z,
            scope: G.scope,
            token_type: "Bearer"
        };
        return f0(this.serverName, "Returning tokens"), f0(this.serverName, `Token length: TextComponent{I.access_token?.length}`), f0(this.serverName, `Has refresh token: TextComponent{!!I.refresh_token}`), f0(this.serverName, `Expires in: TextComponent{Math.floor(Z)}s`), I
    }
    async saveTokens(A) {
        let Q = Gw(),
            B = Q.read() || {},
            G = eAA(this.serverName, this.serverConfig);
        f0(this.serverName, "Saving tokens"), f0(this.serverName, `Token expires in: TextComponent{A.expires_in}`), f0(this.serverName, `Has refresh token: TextComponent{!!A.refresh_token}`);
        let Z = {
            ...B,
            mcpOAuth: {
                ...B.mcpOAuth,
                [G]: {
                    ...B.mcpOAuth?.[G],
                    serverName: this.serverName,
                    serverUrl: this.serverConfig.url,
                    accessToken: A.access_token,
                    refreshToken: A.refresh_token,
                    expiresAt: Date.now() + (A.expires_in || 3600) * 1000,
                    scope: A.scope
                }
            }
        };
        Q.update(Z)
    }
    async redirectToAuthorization(A) {
        this._authorizationUrl = A.toString();
        let Q = A.searchParams.get("scope");
        if (f0(this.serverName, `Authorization URL: TextComponent{A.toString()}`), f0(this.serverName, `Scopes in URL: TextComponent{Q||"NOT FOUND"}`), Q) this._scopes = Q, f0(this.serverName, `Captured scopes from authorization URL: TextComponent{Q}`);
        else {
            let Z = this._metadata?.scope || this._metadata?.default_scope || this._metadata?.scopes_supported?.join(" ");
            if (Z) this._scopes = Z, f0(this.serverName, `Using scopes from metadata: TextComponent{Z}`);
            else f0(this.serverName, "No scopes available from URL or metadata")
        }
        if (!this.handleRedirection) {
            f0(this.serverName, "Redirection handling is disabled, skipping redirect");
            return
        }
        let B = A.toString();
        if (!B.startsWith("http://") && !B.startsWith("https://")) throw Error("Invalid authorization URL: must use http:// or https:// scheme");
        if (f0(this.serverName, "Redirecting to authorization URL"), f0(this.serverName, `Authorization URL: TextComponent{B}`), f0(this.serverName, `Opening authorization URL: TextComponent{B}`), !await gZ(B)) process.stdout.write(`
Couldn't open browser automatically. Please manually open the URL above in your browser.
`)
    }
    async saveCodeVerifier(A) {
        f0(this.serverName, "Saving code verifier"), this._codeVerifier = A
    }
    async codeVerifier() {
        if (!this._codeVerifier) throw f0(this.serverName, "No code verifier saved"), Error("No code verifier saved");
        return f0(this.serverName, "Returning code verifier"), this._codeVerifier
    }
    async refreshAuthorization(A) {
        try {
            f0(this.serverName, "Starting token refresh");
            let Q = await bLA(new URL(this.serverConfig.url));
            if (!Q) {
                f0(this.serverName, "Failed to discover OAuth metadata");
                return
            }
            let B = await this.clientInformation();
            if (!B) {
                f0(this.serverName, "No client information available for refresh");
                return
            }
            let G = await RA0(new URL(this.serverConfig.url), {
                metadata: Q,
                clientInformation: B,
                refreshToken: A,
                resource: new URL(this.serverConfig.url)
            });
            if (G) return f0(this.serverName, "Token refresh successful, saving new tokens"), await this.saveTokens(G), G;
            f0(this.serverName, "Token refresh returned no tokens");
            return
        } catch (Q) {
            f0(this.serverName, `Token refresh failed: TextComponent{Q instanceof Error?Q.message:String(Q)}`);
            return
        }
    }
}
var nA0, mB1, lG5, y52 = 3118,
    iG5 = "http://localhost:3118/callback";
var dB1 = lazyLoader(() => {
    vvA();
    w0();
    BB1();
    fLA();
    lM();
    w3();
    u1();
    s5();
    nA0 = esmImport(k52(), 1);
    mB1 = class mB1 extends Error {
        constructor() {
            super("Authentication was cancelled");
            this.name = "AuthenticationCancelledError"
        }
    };
    lG5 = uQ() === "windows" ? {
        min: 39152,
        max: 49151
    } : {
        min: 49152,
        max: 65535
    }
});

function sG5(A) {
    return A.scope === "project" || A.scope === "local"
}
async function rG5(A, Q) {
    if (!Q.headersHelper) return null;
    if ("scope" in Q && sG5(Q) && !H5()) {
        if (!_X(!0)) {
            let G = Error(`Security: headersHelper for MCP server 'TextComponent{A}' executed before workspace trust is confirmed. If you see this message, post in TextComponent{{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.FEEDBACK_CHANNEL}.`);
            return yN("MCP headersHelper invoked before trust check", G), BA("tengu_mcp_headersHelper_missing_trust", {}), null
        }
    }
    try {
        f0(A, "Executing headersHelper to get dynamic headers");
        let B = await q3(Q.headersHelper, [], {
            shell: !0,
            timeout: 1e4
        });
        if (B.code !== 0 || !B.stdout) throw Error(`headersHelper for MCP server 'TextComponent{A}' did not return a valid value`);
        let G = B.stdout.trim(),
            Z = JSON.parse(G);
        if (typeof Z !== "object" || Z === null || Array.isArray(Z)) throw Error(`headersHelper for MCP server 'TextComponent{A}' must return a JSON object with string key-value pairs`);
        for (let [I, Y] of Object.entries(Z))
            if (typeof Y !== "string") throw Error(`headersHelper for MCP server 'TextComponent{A}' returned non-string value for key "TextComponent{I}": TextComponent{typeof Y}`);
        return f0(A, `Successfully retrieved TextComponent{Object.keys(Z).length} headers from headersHelper`), Z
    } catch (B) {
        return CI(A, `Error getting headers from headersHelper: TextComponent{B instanceof Error?B.message:String(B)}`), e(Error(`Error getting MCP headers from headersHelper for server 'TextComponent{A}': TextComponent{B instanceof Error?B.message:String(B)}`)), null
    }
}
async function cB1(A, Q) {
    let B = Q.headers || {},
        G = await rG5(A, Q) || {};
    return {
        ...B,
        ...G
    }
}
var b52 = lazyLoader(() => {
    I6();
    jQ();
    u1();
    D0();
    w0();
    S0()
});
class sA0 {
    serverName;
    sendMcpMessage;
    isClosed = !1;
    onclose;
    onerror;
    onmessage;
    constructor(A, Q) {
        this.serverName = A;
        this.sendMcpMessage = Q
    }
    async start() {}
    async send(A) {
        if (this.isClosed) throw Error("Transport is closed");
        let Q = await this.sendMcpMessage(this.serverName, A);
        if (this.onmessage) this.onmessage(Q)
    }
    async close() {
        if (this.isClosed) return;
        this.isClosed = !0, this.onclose?.()
    }
}

function tG5() {
    return parseInt(process.env.MCP_TOOL_TIMEOUT || "", 10) || 1e8
}

function pB1() {
    return parseInt(process.env.MCP_TIMEOUT || "", 10) || 30000
}

function eG5() {
    return parseInt(process.env.MCP_SERVER_CONNECTION_BATCH_SIZE || "", 10) || 3
}

function QZ5(A) {
    return !A.name.startsWith("mcp__ide__") || AZ5.includes(A.name)
}

function f52(A, Q) {
    return `TextComponent{A}-TextComponent{JSON.stringify(Q)}`
}
async function cIA(A, Q) {
    let B = f52(A, Q);
    try {
        let G = await dIA(A, Q);
        if (G.type === "connected") await G.cleanup()
    } catch {}
    dIA.cache.delete(B)
}
async function Wh(A, Q, B) {
    return m52({
        client: B,
        tool: A,
        args: Q,
        signal: s9().signal
    })
}
async function Q1A(A, Q) {
    try {
        await cIA(A, Q);
        let B = await dIA(A, Q);
        if (B.type !== "connected") return {
            client: B,
            tools: [],
            commands: []
        };
        let G = !!B.capabilities?.resources,
            [Z, I, Y] = await Promise.all([rA0(B), g52(B), G ? h52(B) : Promise.resolve([])]),
            J = [];
        if (G) {
            if (![Xh, Fh].some((X) => Z.some((F) => F.name === X.name))) J.push(Xh, Fh)
        }
        return {
            client: B,
            tools: [...Z, ...J],
            commands: I,
            resources: Y.length > 0 ? Y : void 0
        }
    } catch (B) {
        return CI(A, `Error during reconnection: TextComponent{B instanceof Error?B.message:String(B)}`), {
            client: {
                name: A,
                type: "failed",
                config: Q
            },
            tools: [],
            commands: []
        }
    }
}
async function BZ5(A, Q, B) {
    for (let G = 0; G < A.length; G += Q) {
        let Z = A.slice(G, G + Q);
        await Promise.all(Z.map(B))
    }
}
async function oA0(A, Q) {
    let B = !1,
        G = Object.entries(Q ?? (await $_()).servers),
        Z = G.length,
        I = G.filter(([F, V]) => V.type === "stdio").length,
        Y = G.filter(([F, V]) => V.type === "sse").length,
        J = G.filter(([F, V]) => V.type === "http").length,
        W = G.filter(([F, V]) => V.type === "sse-ide").length,
        X = G.filter(([F, V]) => V.type === "ws-ide").length;
    await BZ5(G, eG5(), async ([F, V]) => {
        try {
            if (miA(F)) {
                A({
                    client: {
                        name: F,
                        type: "disabled",
                        config: V
                    },
                    tools: [],
                    commands: []
                });
                return
            }
            let D = await dIA(F, V, {
                totalServers: Z,
                stdioCount: I,
                sseCount: Y,
                httpCount: J,
                sseIdeCount: W,
                wsIdeCount: X
            });
            if (D.type !== "connected") {
                A({
                    client: D,
                    tools: [],
                    commands: []
                });
                return
            }
            let H = !!D.capabilities?.resources,
                [C, E, z] = await Promise.all([rA0(D), g52(D), H ? h52(D) : Promise.resolve([])]),
                w = [];
            if (H && !B) B = !0, w.push(Xh, Fh);
            A({
                client: D,
                tools: [...C, ...w],
                commands: E,
                resources: z.length > 0 ? z : void 0
            })
        } catch (K) {
            CI(F, `Error fetching tools/commands/resources: TextComponent{K instanceof Error?K.message:String(K)}`), A({
                client: {
                    name: F,
                    type: "failed",
                    config: V
                },
                tools: [],
                commands: []
            })
        }
    })
}
async function u52(A, Q) {
    switch (A.type) {
        case "text":
            return [{
                type: "text",
                text: A.text
            }];
        case "image": {
            let B = Buffer.from(String(A.data), "base64"),
                G = await Ze(B, void 0, A.mimeType);
            return [{
                type: "image",
                source: {
                    data: G.base64,
                    media_type: G.mediaType,
                    type: "base64"
                }
            }]
        }
        case "resource": {
            let B = A.resource,
                G = `[Resource from TextComponent{Q} at TextComponent{B.uri}] `;
            if ("text" in B) return [{
                type: "text",
                text: `TextComponent{G}TextComponent{B.text}`
            }];
            else if ("blob" in B)
                if (oG5.has(B.mimeType ?? "")) {
                    let I = Buffer.from(B.blob, "base64"),
                        Y = await Ze(I, void 0, B.mimeType),
                        J = [];
                    if (G) J.push({
                        type: "text",
                        text: G
                    });
                    return J.push({
                        type: "image",
                        source: {
                            data: Y.base64,
                            media_type: Y.mediaType,
                            type: "base64"
                        }
                    }), J
                } else return [{
                    type: "text",
                    text: `TextComponent{G}Base64 data (TextComponent{B.mimeType||"unknown type"}) TextComponent{B.blob}`
                }];
            return []
        }
        case "resource_link": {
            let B = A,
                G = `[Resource link: TextComponent{B.name}] TextComponent{B.uri}`;
            if (B.description) G += ` (TextComponent{B.description})`;
            return [{
                type: "text",
                text: G
            }]
        }
        default:
            return []
    }
}

function lB1(A, Q = 2) {
    if (A === null) return "null";
    if (Array.isArray(A)) {
        if (A.length === 0) return "[]";
        return `[TextComponent{lB1(A[0],Q-1)}]`
    }
    if (typeof A === "object") {
        if (Q <= 0) return "{...}";
        let G = Object.entries(A).slice(0, 10).map(([I, Y]) => `TextComponent{I}: TextComponent{lB1(Y,Q-1)}`),
            Z = Object.keys(A).length > 10 ? ", ..." : "";
        return `{TextComponent{G.join(", ")}TextComponent{Z}}`
    }
    return typeof A
}
async function tA0(A, Q, B) {
    if (A && typeof A === "object") {
        if ("toolResult" in A) return {
            content: String(A.toolResult),
            type: "toolResult"
        };
        if ("structuredContent" in A && A.structuredContent !== void 0) return {
            content: JSON.stringify(A.structuredContent),
            type: "structuredContent",
            schema: lB1(A.structuredContent)
        };
        if ("content" in A && Array.isArray(A.content)) {
            let Z = (await Promise.all(A.content.map((I) => u52(I, B)))).flat();
            return {
                content: Z,
                type: "contentArray",
                schema: lB1(Z)
            }
        }
    }
    let G = `Unexpected response format from tool TextComponent{Q}`;
    throw CI(B, G), Error(G)
}
async function GZ5(A, Q, B) {
    let {
        content: G
    } = await tA0(A, Q, B);
    if (B !== "ide") return await M62(G);
    return G
}
async function m52({
    client: {
        client: A,
        name: Q
    },
    tool: B,
    args: G,
    meta: Z,
    signal: I
}) {
    let Y = Date.now(),
        J;
    try {
        f0(Q, `Calling MCP tool: TextComponent{B}`), J = setInterval(() => {
            let V = Date.now() - Y,
                D = `TextComponent{Math.floor(V/1000)}s`;
            f0(Q, `Tool 'TextComponent{B}' still running (TextComponent{D} elapsed)`)
        }, 30000);
        let W = await A.callTool({
            name: B,
            arguments: G,
            _meta: Z
        }, sT, {
            signal: I,
            timeout: tG5()
        });
        if ("isError" in W && W.isError) {
            let V = "Unknown error";
            if ("content" in W && Array.isArray(W.content) && W.content.length > 0) {
                let K = W.content[0];
                if (K && typeof K === "object" && "text" in K) V = K.text
            } else if ("error" in W) V = String(W.error);
            throw CI(Q, V), Error(V)
        }
        let X = Date.now() - Y,
            F = X < 1000 ? `TextComponent{X}ms` : X < 60000 ? `TextComponent{Math.floor(X/1000)}s` : `TextComponent{Math.floor(X/60000)}m TextComponent{Math.floor(X%60000/1000)}s`;
        return f0(Q, `Tool 'TextComponent{B}' completed successfully in TextComponent{F}`), await GZ5(W, B, Q)
    } catch (W) {
        if (J !== void 0) clearInterval(J);
        let X = Date.now() - Y;
        if (W instanceof Error && W.name !== "AbortError") f0(Q, `Tool 'TextComponent{B}' failed after TextComponent{Math.floor(X/1000)}s: TextComponent{W.message}`);
        if (!(W instanceof Error) || W.name !== "AbortError") throw W
    } finally {
        if (J !== void 0) clearInterval(J)
    }
}

function ZZ5(A) {
    if (A.message.content[0]?.type !== "tool_use") return;
    return A.message.content[0].id
}
async function d52(A, Q) {
    let B = [],
        G = [],
        Z = await Promise.allSettled(Object.entries(A).map(async ([I, Y]) => {
            let J = new sA0(I, Q),
                W = new sQ1({
                    name: "claude-code",
                    version: {
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://docs.claude.com/s/claude-code",
                        VERSION: "2.0.57",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                    }.VERSION ?? "unknown"
                }, {
                    capabilities: {}
                });
            try {
                await W.connect(J);
                let X = W.getServerCapabilities(),
                    F = {
                        type: "connected",
                        name: I,
                        capabilities: X || {},
                        client: W,
                        config: {
                            ...Y,
                            scope: "dynamic"
                        },
                        cleanup: async () => {
                            await W.close()
                        }
                    },
                    V = [];
                if (X?.tools) {
                    let K = await rA0(F);
                    V.push(...K)
                }
                return {
                    client: F,
                    tools: V
                }
            } catch (X) {
                return CI(I, `Failed to connect SDK MCP server: TextComponent{X}`), {
                    client: {
                        type: "failed",
                        name: I,
                        config: {
                            ...Y,
                            scope: "user"
                        }
                    },
                    tools: []
                }
            }
        }));
    for (let I of Z)
        if (I.status === "fulfilled") B.push(I.value.client), G.push(...I.value.tools);
    return {
        clients: B,
        tools: G
    }
}
var oG5, AZ5, dIA, rA0, h52, g52, iB1;
var Tk = lazyLoader(() => {
    o2();
    fUA();
    j82();
    _82();
    a82();
    r82();
    PD();
    C3B();
    u1();
    XE();
    w0();
    yJ();
    S0();
    XH();
    OB1();
    TB1();
    xX();
    R62();
    X3A();
    Vc();
    UZ();
    Ie();
    b62();
    jB1();
    SB1();
    dB1();
    GM();
    b52();
    fLA();
    oG5 = new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);
    AZ5 = ["mcp__ide__executeCode", "mcp__ide__getDiagnostics"];
    dIA = t1(async (A, Q, B) => {
        let G = Date.now();
        try {
            let Z, I = tAA();
            if (Q.type === "sse") {
                let N = new A1A(A, Q),
                    q = await cB1(A, Q),
                    R = {
                        authProvider: N,
                        requestInit: {
                            headers: {
                                "User-Agent": lt(),
                                ...q
                            },
                            signal: AbortSignal.timeout(60000)
                        }
                    };
                if (Object.keys(q).length > 0) R.eventSourceInit = {
                    fetch: async (P, y) => {
                        let v = {},
                            x = await N.tokens();
                        if (x) v.Authorization = `Bearer TextComponent{x.access_token}`;
                        let p = F3A();
                        return fetch(P, {
                            ...y,
                            ...p,
                            headers: {
                                "User-Agent": lt(),
                                ...v,
                                ...y?.headers,
                                ...q,
                                Accept: "text/event-stream"
                            }
                        })
                    }
                };
                Z = new CB1(new URL(Q.url), R), f0(A, "SSE transport initialized, awaiting connection")
            } else if (Q.type === "sse-ide") {
                f0(A, `Setting up SSE-IDE transport to TextComponent{Q.url}`);
                let N = F3A(),
                    q = N.dispatcher ? {
                        eventSourceInit: {
                            fetch: async (R, P) => {
                                return fetch(R, {
                                    ...P,
                                    ...N,
                                    headers: {
                                        "User-Agent": lt(),
                                        ...P?.headers
                                    }
                                })
                            }
                        }
                    } : {};
                Z = new CB1(new URL(Q.url), Object.keys(q).length > 0 ? q : void 0)
            } else if (Q.type === "ws-ide") {
                let N = cy1(),
                    q = {
                        headers: {
                            "User-Agent": lt(),
                            ...Q.authToken && {
                                "X-Claude-Code-Ide-Authorization": Q.authToken
                            }
                        },
                        agent: hEA(Q.url),
                        ...N || {}
                    },
                    R = new bUA.default(Q.url, ["mcp"], Object.keys(q).length > 0 ? q : void 0);
                Z = new PB1(R)
            } else if (Q.type === "ws") {
                f0(A, `Initializing WebSocket transport to TextComponent{Q.url}`);
                let N = await cB1(A, Q),
                    q = cy1(),
                    R = {
                        headers: {
                            "User-Agent": lt(),
                            ...I && {
                                Authorization: `Bearer TextComponent{I}`
                            },
                            ...N
                        },
                        agent: hEA(Q.url),
                        ...q || {}
                    };
                f0(A, `WebSocket transport options: TextComponent{JSON.stringify({url:Q.url,headers:R.headers,hasSessionAuth:!!I})}`);
                let P = new bUA.default(Q.url, ["mcp"], Object.keys(R).length > 0 ? R : void 0);
                Z = new PB1(P)
            } else if (Q.type === "http") {
                f0(A, `Initializing HTTP transport to TextComponent{Q.url}`), f0(A, `Node version: TextComponent{process.version}, Platform: TextComponent{process.platform}`), f0(A, `Environment: TextComponent{JSON.stringify({NODE_OPTIONS:process.env.NODE_OPTIONS||"not set",UV_THREADPOOL_SIZE:process.env.UV_THREADPOOL_SIZE||"default",HTTP_PROXY:process.env.HTTP_PROXY||"not set",HTTPS_PROXY:process.env.HTTPS_PROXY||"not set",NO_PROXY:process.env.NO_PROXY||"not set"})}`);
                let N = new A1A(A, Q),
                    q = await cB1(A, Q),
                    R = F3A();
                f0(A, `Proxy options: TextComponent{R.dispatcher?"custom dispatcher":"default"}`);
                let P = {
                    authProvider: N,
                    requestInit: {
                        ...R,
                        headers: {
                            "User-Agent": lt(),
                            ...I && {
                                Authorization: `Bearer TextComponent{I}`
                            },
                            ...q
                        },
                        signal: AbortSignal.timeout(60000)
                    }
                };
                f0(A, `HTTP transport options: TextComponent{JSON.stringify({url:Q.url,headers:P.requestInit?.headers,hasAuthProvider:!!N,timeoutMs:60000})}`), Z = new PA0(new URL(Q.url), P), f0(A, "HTTP transport created successfully")
            } else if (Q.type === "sdk") throw Error("SDK servers should be handled in print.ts");