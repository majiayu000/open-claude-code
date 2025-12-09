/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.136Z
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 43/53
 * Lines: 355916 - 357412 (1497 lines)
 * Original file: cli.js
 */

                if (B) this.username = B[1], this.password = B[3], Q[4] = Q[4].substring(B[0].length);
                if (Q[4].match(cD.portPattern)) {
                    var G = Q[4].lastIndexOf(":");
                    this.host = Q[4].substring(0, G), this.port = Q[4].substring(G + 1)
                } else this.host = Q[4]
            }
            if (Q[5]) this.path = Q[5];
            if (Q[6]) this.query = Q[7];
            if (Q[8]) this.fragment = Q[9]
        }
    }
    cD.pattern = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
    cD.userinfoPattern = /^([^@:]*)(:([^@]*))?@/;
    cD.portPattern = /:\d+$/;
    cD.authorityPattern = /^[^:\/?#]+:\/\//;
    cD.hierarchyPattern = /^[^:\/?#]+:\//;
    cD.percentEncode = function(Q) {
        var B = Q.charCodeAt(0);
        if (B < 256) return "%" + B.toString(16);
        else throw Error("can't percent-encode codepoints > 255 yet")
    };
    cD.prototype = {
        constructor: cD,
        isAbsolute: function() {
            return !!this.scheme
        },
        isAuthorityBased: function() {
            return cD.authorityPattern.test(this.url)
        },
        isHierarchical: function() {
            return cD.hierarchyPattern.test(this.url)
        },
        toString: function() {
            var A = "";
            if (this.scheme !== void 0) A += this.scheme + ":";
            if (this.isAbsolute()) {
                if (A += "//", this.username || this.password) {
                    if (A += this.username || "", this.password) A += ":" + this.password;
                    A += "@"
                }
                if (this.host) A += this.host
            }
            if (this.port !== void 0) A += ":" + this.port;
            if (this.path !== void 0) A += this.path;
            if (this.query !== void 0) A += "?" + this.query;
            if (this.fragment !== void 0) A += "#" + this.fragment;
            return A
        },
        resolve: function(A) {
            var Q = this,
                B = new cD(A),
                G = new cD;
            if (B.scheme !== void 0) G.scheme = B.scheme, G.username = B.username, G.password = B.password, G.host = B.host, G.port = B.port, G.path = I(B.path), G.query = B.query;
            else if (G.scheme = Q.scheme, B.host !== void 0) G.username = B.username, G.password = B.password, G.host = B.host, G.port = B.port, G.path = I(B.path), G.query = B.query;
            else if (G.username = Q.username, G.password = Q.password, G.host = Q.host, G.port = Q.port, !B.path)
                if (G.path = Q.path, B.query !== void 0) G.query = B.query;
                else G.query = Q.query;
            else {
                if (B.path.charAt(0) === "/") G.path = I(B.path);
                else G.path = Z(Q.path, B.path), G.path = I(G.path);
                G.query = B.query
            }
            return G.fragment = B.fragment, G.toString();

function Z(Y, J) {
                if (Q.host !== void 0 && !Q.path) return "/" + J;
                var W = Y.lastIndexOf("/");
                if (W === -1) return J;
                else return Y.substring(0, W + 1) + J
            }

function I(Y) {
                if (!Y) return Y;
                var J = "";
                while (Y.length > 0) {
                    if (Y === "." || Y === "..") {
                        Y = "";
                        break
                    }
                    var W = Y.substring(0, 2),
                        X = Y.substring(0, 3),
                        F = Y.substring(0, 4);
                    if (X === "../") Y = Y.substring(3);
                    else if (W === "./") Y = Y.substring(2);
                    else if (X === "/./") Y = "/" + Y.substring(3);
                    else if (W === "/." && Y.length === 2) Y = "/";
                    else if (F === "/../" || X === "/.." && Y.length === 3) Y = "/" + Y.substring(4), J = J.replace(/\/?[^\/]*$/, "");
                    else {
                        var V = Y.match(/(\/?([^\/]*))/)[0];
                        J += V, Y = Y.substring(V.length)
                    }
                }
                return J
            }
        }
    }
});
var Ig2 = U((aIZ, Zg2) => {
    Zg2.exports = n70;
    var Gg2 = LWA();

function n70(A, Q) {
        Gg2.call(this, A, Q)
    }
    n70.prototype = Object.create(Gg2.prototype, {
        constructor: {
            value: n70
        }
    })
});
var a70 = U((sIZ, Yg2) => {
    Yg2.exports = {
        Event: LWA(),
        UIEvent: e30(),
        MouseEvent: Q70(),
        CustomEvent: Ig2()
    }
});
var Fg2 = U((Wg2) => {
    Object.defineProperty(Wg2, "__esModule", {
        value: !0
    });
    Wg2.hyphenate = Wg2.parse = void 0;

function yn5(A) {
        let Q = [],
            B = 0,
            G = 0,
            Z = 0,
            I = 0,
            Y = 0,
            J = null;
        while (B < A.length) switch (A.charCodeAt(B++)) {
            case 40:
                G++;
                break;
            case 41:
                G--;
                break;
            case 39:
                if (Z === 0) Z = 39;
                else if (Z === 39 && A.charCodeAt(B - 1) !== 92) Z = 0;
                break;
            case 34:
                if (Z === 0) Z = 34;
                else if (Z === 34 && A.charCodeAt(B - 1) !== 92) Z = 0;
                break;
            case 58:
                if (!J && G === 0 && Z === 0) J = Jg2(A.substring(Y, B - 1).trim()), I = B;
                break;
            case 59:
                if (J && I > 0 && G === 0 && Z === 0) {
                    let X = A.substring(I, B - 1).trim();
                    Q.push(J, X), Y = B, I = 0, J = null
                }
                break
        }
        if (J && I) {
            let W = A.slice(I).trim();
            Q.push(J, W)
        }
        return Q
    }
    Wg2.parse = yn5;

function Jg2(A) {
        return A.replace(/[a-z][A-Z]/g, (Q) => {
            return Q.charAt(0) + "-" + Q.charAt(1)
        }).toLowerCase()
    }
    Wg2.hyphenate = Jg2
});
var H31 = U((oIZ, Cg2) => {
    var {
        parse: vn5
    } = Fg2();
    Cg2.exports = function(A) {
        let Q = new Hg2(A);
        return new Proxy(Q, {
            get: function(G, Z) {
                return Z in G ? G[Z] : G.getPropertyValue(Vg2(Z))
            },
            has: function(G, Z) {
                return !0
            },
            set: function(G, Z, I) {
                if (Z in G) G[Z] = I;
                else G.setProperty(Vg2(Z), I ?? void 0);
                return !0
            }
        })
    };

function Vg2(A) {
        return A.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

function Hg2(A) {
        this._element = A
    }
    var Kg2 = "!important";

function Dg2(A) {
        let Q = {
            property: {},
            priority: {}
        };
        if (!A) return Q;
        let B = vn5(A);
        if (B.length < 2) return Q;
        for (let G = 0; G < B.length; G += 2) {
            let Z = B[G],
                I = B[G + 1];
            if (I.endsWith(Kg2)) Q.priority[Z] = "important", I = I.slice(0, -Kg2.length).trim();
            Q.property[Z] = I
        }
        return Q
    }

var _WA = {};
    Hg2.prototype = Object.create(Object.prototype, {
        _parsed: {
            get: function() {
                if (!this._parsedStyles || this.cssText !== this._lastParsedText) {
                    var A = this.cssText;
                    this._parsedStyles = Dg2(A), this._lastParsedText = A, delete this._names
                }
                return this._parsedStyles
            }
        },
        _serialize: {
            value: function() {
                var A = this._parsed,
                    Q = "";
                for (var B in A.property) {
                    if (Q) Q += " ";
                    if (Q += B + ": " + A.property[B], A.priority[B]) Q += " !" + A.priority[B];
                    Q += ";"
                }
                this.cssText = Q, this._lastParsedText = Q, delete this._names
            }
        },
        cssText: {
            get: function() {
                return this._element.getAttribute("style")
            },
            set: function(A) {
                this._element.setAttribute("style", A)
            }
        },
        length: {
            get: function() {
                if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
                return this._names.length
            }
        },
        item: {
            value: function(A) {
                if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
                return this._names[A]
            }
        },
        getPropertyValue: {
            value: function(A) {
                return A = A.toLowerCase(), this._parsed.property[A] || ""
            }
        },
        getPropertyPriority: {
            value: function(A) {
                return A = A.toLowerCase(), this._parsed.priority[A] || ""
            }
        },
        setProperty: {
            value: function(A, Q, B) {
                if (A = A.toLowerCase(), Q === null || Q === void 0) Q = "";
                if (B === null || B === void 0) B = "";
                if (Q !== _WA) Q = "" + Q;
                if (Q = Q.trim(), Q === "") {
                    this.removeProperty(A);
                    return
                }
                if (B !== "" && B !== _WA && !/^important$/i.test(B)) return;
                var G = this._parsed;
                if (Q === _WA) {
                    if (!G.property[A]) return;
                    if (B !== "") G.priority[A] = "important";
                    else delete G.priority[A]
                } else {
                    if (Q.indexOf(";") !== -1) return;
                    var Z = Dg2(A + ":" + Q);
                    if (Object.getOwnPropertyNames(Z.property).length === 0) return;
                    if (Object.getOwnPropertyNames(Z.priority).length !== 0) return;
                    for (var I in Z.property)
                        if (G.property[I] = Z.property[I], B === _WA) continue;
                        else if (B !== "") G.priority[I] = "important";
                    else if (G.priority[I]) delete G.priority[I]
                }
                this._serialize()
            }
        },
        setPropertyValue: {
            value: function(A, Q) {
                return this.setProperty(A, Q, _WA)
            }
        },
        setPropertyPriority: {
            value: function(A, Q) {
                return this.setProperty(A, _WA, Q)
            }
        },
        removeProperty: {
            value: function(A) {
                A = A.toLowerCase();
                var Q = this._parsed;
                if (A in Q.property) delete Q.property[A], delete Q.priority[A], this._serialize()
            }
        }
    })
});
var s70 = U((tIZ, Eg2) => {
    var VK = D31();
    Eg2.exports = UTA;

function UTA() {}
    UTA.prototype = Object.create(Object.prototype, {
        _url: {
            get: function() {
                return new VK(this.href)
            }
        },
        protocol: {
            get: function() {
                var A = this._url;
                if (A && A.scheme) return A.scheme + ":";
                else return ":"
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute()) {
                    if (A = A.replace(/:+$/, ""), A = A.replace(/[^-+\.a-zA-Z0-9]/g, VK.percentEncode), A.length > 0) B.scheme = A, Q = B.toString()
                }
                this.href = Q
            }
        },
        host: {
            get: function() {
                var A = this._url;
                if (A.isAbsolute() && A.isAuthorityBased()) return A.host + (A.port ? ":" + A.port : "");
                else return ""
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute() && B.isAuthorityBased()) {
                    if (A = A.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, VK.percentEncode), A.length > 0) B.host = A, delete B.port, Q = B.toString()
                }
                this.href = Q
            }
        },
        hostname: {
            get: function() {
                var A = this._url;
                if (A.isAbsolute() && A.isAuthorityBased()) return A.host;
                else return ""
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute() && B.isAuthorityBased()) {
                    if (A = A.replace(/^\/+/, ""), A = A.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, VK.percentEncode), A.length > 0) B.host = A, Q = B.toString()
                }
                this.href = Q
            }
        },
        port: {
            get: function() {
                var A = this._url;
                if (A.isAbsolute() && A.isAuthorityBased() && A.port !== void 0) return A.port;
                else return ""
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute() && B.isAuthorityBased()) {
                    if (A = "" + A, A = A.replace(/[^0-9].*$/, ""), A = A.replace(/^0+/, ""), A.length === 0) A = "0";
                    if (parseInt(A, 10) <= 65535) B.port = A, Q = B.toString()
                }
                this.href = Q
            }
        },
        pathname: {
            get: function() {
                var A = this._url;
                if (A.isAbsolute() && A.isHierarchical()) return A.path;
                else return ""
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute() && B.isHierarchical()) {
                    if (A.charAt(0) !== "/") A = "/" + A;
                    A = A.replace(/[^-+\._~!$&'()*,;:=@\/a-zA-Z0-9]/g, VK.percentEncode), B.path = A, Q = B.toString()
                }
                this.href = Q
            }
        },
        search: {
            get: function() {
                var A = this._url;
                if (A.isAbsolute() && A.isHierarchical() && A.query !== void 0) return "?" + A.query;
                else return ""
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute() && B.isHierarchical()) {
                    if (A.charAt(0) === "?") A = A.substring(1);
                    A = A.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, VK.percentEncode), B.query = A, Q = B.toString()
                }
                this.href = Q
            }
        },
        hash: {
            get: function() {
                var A = this._url;
                if (A == null || A.fragment == null || A.fragment === "") return "";
                else return "#" + A.fragment
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (A.charAt(0) === "#") A = A.substring(1);
                A = A.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, VK.percentEncode), B.fragment = A, Q = B.toString(), this.href = Q
            }
        },
        username: {
            get: function() {
                var A = this._url;
                return A.username || ""
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute()) A = A.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\:]/g, VK.percentEncode), B.username = A, Q = B.toString();
                this.href = Q
            }
        },
        password: {
            get: function() {
                var A = this._url;
                return A.password || ""
            },
            set: function(A) {
                var Q = this.href,
                    B = new VK(Q);
                if (B.isAbsolute()) {
                    if (A === "") B.password = null;
                    else A = A.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\]/g, VK.percentEncode), B.password = A;
                    Q = B.toString()
                }
                this.href = Q
            }
        },
        origin: {
            get: function() {
                var A = this._url;
                if (A == null) return "";

var Q = function(B) {
                    var G = [A.scheme, A.host, +A.port || B];
                    return G[0] + "://" + G[1] + (G[2] === B ? "" : ":" + G[2])
                };
                switch (A.scheme) {
                    case "ftp":
                        return Q(21);
                    case "gopher":
                        return Q(70);
                    case "http":
                    case "ws":
                        return Q(80);
                    case "https":
                    case "wss":
                        return Q(443);
                    default:
                        return A.scheme + "://"
                }
            }
        }
    });
    UTA._inherit = function(A) {
        Object.getOwnPropertyNames(UTA.prototype).forEach(function(Q) {
            if (Q === "constructor" || Q === "href") return;
            var B = Object.getOwnPropertyDescriptor(UTA.prototype, Q);
            Object.defineProperty(A, Q, B)
        })
    }
});
var r70 = U((eIZ, $g2) => {
    var zg2 = E70(),
        bn5 = e51().isApiWritable;
    $g2.exports = function(A, Q, B, G) {
        var Z = A.ctor;
        if (Z) {
            var I = A.props || {};
            if (A.attributes)
                for (var Y in A.attributes) {
                    var J = A.attributes[Y];
                    if (typeof J !== "object" || Array.isArray(J)) J = {
                        type: J
                    };
                    if (!J.name) J.name = Y.toLowerCase();
                    I[Y] = zg2.property(J)
                }
            if (I.constructor = {
                    value: Z,
                    writable: bn5
                }, Z.prototype = Object.create((A.superclass || Q).prototype, I), A.events) hn5(Z, A.events);
            B[A.name] = Z
        } else Z = Q;
        return (A.tags || A.tag && [A.tag] || []).forEach(function(W) {
            G[W] = Z
        }), Z
    };

function Ug2(A, Q, B, G) {
        this.body = A, this.document = Q, this.form = B, this.element = G
    }
    Ug2.prototype.build = function() {
        return () => {}
    };

function fn5(A, Q, B, G) {
        var Z = A.ownerDocument || Object.create(null),
            I = A.form || Object.create(null);
        A[Q] = new Ug2(G, Z, I, A).build()
    }

function hn5(A, Q) {
        var B = A.prototype;
        Q.forEach(function(G) {
            Object.defineProperty(B, "on" + G, {
                get: function() {
                    return this._getEventHandler(G)
                },
                set: function(Z) {
                    this._setEventHandler(G, Z)
                }
            }), zg2.registerChangeHandler(A, "on" + G, fn5)
        })
    }
});
var E31 = U((cn5) => {
    var o70 = mD(),
        wg2 = SWA(),
        gn5 = H31(),
        yq = uJ(),
        qg2 = s70(),
        un5 = r70(),
        ah = cn5.elements = {},
        $TA = Object.create(null);
    cn5.createElement = function(A, Q, B) {
        var G = $TA[Q] || dn5;
        return new G(A, Q, B)
    };

function kB(A) {
        return un5(A, A9, ah, $TA)
    }

function mJ(A) {
        return {
            get: function() {
                var Q = this._getattr(A);
                if (Q === null) return "";
                var B = this.doc._resolve(Q);
                return B === null ? Q : B
            },
            set: function(Q) {
                this._setattr(A, Q)
            }
        }
    }

function C31(A) {
        return {
            get: function() {
                var Q = this._getattr(A);
                if (Q === null) return null;
                if (Q.toLowerCase() === "use-credentials") return "use-credentials";
                return "anonymous"
            },
            set: function(Q) {
                if (Q === null || Q === void 0) this.removeAttribute(A);
                else this._setattr(A, Q)
            }
        }
    }

var kWA = {
            type: ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"],
            missing: ""
        },
        mn5 = {
            A: !0,
            LINK: !0,
            BUTTON: !0,
            INPUT: !0,
            SELECT: !0,
            TEXTAREA: !0,
            COMMAND: !0
        },
        jP = function(A, Q, B) {
            A9.call(this, A, Q, B), this._form = null
        },
        A9 = cn5.HTMLElement = kB({
            superclass: wg2,
            name: "HTMLElement",
            ctor: function(Q, B, G) {
                wg2.call(this, Q, B, yq.NAMESPACE.HTML, G)
            },
            props: {
                dangerouslySetInnerHTML: {
                    set: function(A) {
                        this._innerHTML = A
                    }
                },
                innerHTML: {
                    get: function() {
                        return this.serialize()
                    },
                    set: function(A) {
                        var Q = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, this);
                        Q.parse(A === null ? "" : String(A), !0);
                        var B = this instanceof $TA.template ? this.content : this;
                        while (B.hasChildNodes()) B.removeChild(B.firstChild);
                        B.appendChild(Q._asDocumentFragment())
                    }
                },
                style: {
                    get: function() {
                        if (!this._style) this._style = new gn5(this);
                        return this._style
                    },
                    set: function(A) {
                        if (A === null || A === void 0) A = "";
                        this._setattr("style", String(A))
                    }
                },
                blur: {
                    value: function() {}
                },
                focus: {
                    value: function() {}
                },
                forceSpellCheck: {
                    value: function() {}
                },
                click: {
                    value: function() {
                        if (this._click_in_progress) return;
                        this._click_in_progress = !0;
                        try {
                            if (this._pre_click_activation_steps) this._pre_click_activation_steps();
                            var A = this.ownerDocument.createEvent("MouseEvent");
                            A.initMouseEvent("click", !0, !0, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                            var Q = this.dispatchEvent(A);
                            if (Q) {
                                if (this._post_click_activation_steps) this._post_click_activation_steps(A)
                            } else if (this._cancelled_activation_steps) this._cancelled_activation_steps()
                        } finally {
                            this._click_in_progress = !1
                        }
                    }
                },
                submit: {
                    value: yq.nyi
                }
            },
            attributes: {
                title: String,
                lang: String,
                dir: {
                    type: ["ltr", "rtl", "auto"],
                    missing: ""
                },
                draggable: {
                    type: ["true", "false"],
                    treatNullAsEmptyString: !0
                },
                spellcheck: {
                    type: ["true", "false"],
                    missing: ""
                },
                enterKeyHint: {
                    type: ["enter", "done", "go", "next", "previous", "search", "send"],
                    missing: ""
                },
                autoCapitalize: {
                    type: ["off", "on", "none", "sentences", "words", "characters"],
                    missing: ""
                },
                autoFocus: Boolean,
                accessKey: String,
                nonce: String,
                hidden: Boolean,
                translate: {
                    type: ["no", "yes"],
                    missing: ""
                },
                tabIndex: {
                    type: "long",
                    default: function() {
                        if (this.tagName in mn5 || this.contentEditable) return 0;
                        else return -1
                    }
                }
            },
            events: ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"]
        }),
        dn5 = kB({
            name: "HTMLUnknownElement",
            ctor: function(Q, B, G) {
                A9.call(this, Q, B, G)
            }
        }),
        SP = {
            form: {
                get: function() {
                    return this._form
                }
            }
        };
    kB({
        tag: "a",
        name: "HTMLAnchorElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            _post_click_activation_steps: {
                value: function(A) {
                    if (this.href) this.ownerDocument.defaultView.location = this.href
                }
            }
        },
        attributes: {
            href: mJ,
            ping: String,
            download: String,
            target: String,
            rel: String,
            media: String,
            hreflang: String,
            type: String,
            referrerPolicy: kWA,
            coords: String,
            charset: String,
            name: String,
            rev: String,
            shape: String
        }
    });
    qg2._inherit($TA.a.prototype);
    kB({
        tag: "area",
        name: "HTMLAreaElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            alt: String,
            target: String,
            download: String,
            rel: String,
            media: String,
            href: mJ,
            hreflang: String,
            type: String,
            shape: String,
            coords: String,
            ping: String,
            referrerPolicy: kWA,
            noHref: Boolean
        }
    });
    qg2._inherit($TA.area.prototype);
    kB({
        tag: "br",
        name: "HTMLBRElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            clear: String
        }
    });
    kB({
        tag: "base",
        name: "HTMLBaseElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            target: String
        }
    });
    kB({
        tag: "body",
        name: "HTMLBodyElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        events: ["afterprint", "beforeprint", "beforeunload", "blur", "error", "focus", "hashchange", "load", "message", "offline", "online", "pagehide", "pageshow", "popstate", "resize", "scroll", "storage", "unload"],
        attributes: {
            text: {
                type: String,
                treatNullAsEmptyString: !0
            },
            link: {
                type: String,
                treatNullAsEmptyString: !0
            },
            vLink: {
                type: String,
                treatNullAsEmptyString: !0
            },
            aLink: {
                type: String,
                treatNullAsEmptyString: !0
            },
            bgColor: {
                type: String,
                treatNullAsEmptyString: !0
            },
            background: String
        }
    });
    kB({
        tag: "button",
        name: "HTMLButtonElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP,
        attributes: {
            name: String,
            value: String,
            disabled: Boolean,
            autofocus: Boolean,
            type: {
                type: ["submit", "reset", "button", "menu"],
                missing: "submit"
            },
            formTarget: String,
            formAction: mJ,
            formNoValidate: Boolean,
            formMethod: {
                type: ["get", "post", "dialog"],
                invalid: "get",
                missing: ""
            },
            formEnctype: {
                type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
                invalid: "application/x-www-form-urlencoded",
                missing: ""
            }
        }
    });
    kB({
        tag: "dl",
        name: "HTMLDListElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            compact: Boolean
        }
    });
    kB({
        tag: "data",
        name: "HTMLDataElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            value: String
        }
    });
    kB({
        tag: "datalist",
        name: "HTMLDataListElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        }
    });
    kB({
        tag: "details",
        name: "HTMLDetailsElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            open: Boolean
        }
    });
    kB({
        tag: "div",
        name: "HTMLDivElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            align: String
        }
    });
    kB({
        tag: "embed",
        name: "HTMLEmbedElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            src: mJ,
            type: String,
            width: String,
            height: String,
            align: String,
            name: String
        }
    });
    kB({
        tag: "fieldset",
        name: "HTMLFieldSetElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP,
        attributes: {
            disabled: Boolean,
            name: String
        }
    });
    kB({
        tag: "form",
        name: "HTMLFormElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            action: String,
            autocomplete: {
                type: ["on", "off"],
                missing: "on"
            },
            name: String,
            acceptCharset: {
                name: "accept-charset"
            },
            target: String,
            noValidate: Boolean,
            method: {
                type: ["get", "post", "dialog"],
                invalid: "get",
                missing: "get"
            },
            enctype: {
                type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
                invalid: "application/x-www-form-urlencoded",
                missing: "application/x-www-form-urlencoded"
            },
            encoding: {
                name: "enctype",
                type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
                invalid: "application/x-www-form-urlencoded",
                missing: "application/x-www-form-urlencoded"
            }
        }
    });
    kB({
        tag: "hr",
        name: "HTMLHRElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            align: String,
            color: String,
            noShade: Boolean,
            size: String,
            width: String
        }
    });
    kB({
        tag: "head",
        name: "HTMLHeadElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        }
    });
    kB({
        tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
        name: "HTMLHeadingElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            align: String
        }
    });
    kB({
        tag: "html",
        name: "HTMLHtmlElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            xmlns: mJ,
            version: String
        }
    });
    kB({
        tag: "iframe",
        name: "HTMLIFrameElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            src: mJ,
            srcdoc: String,
            name: String,
            width: String,
            height: String,
            seamless: Boolean,
            allow: Boolean,
            allowFullscreen: Boolean,
            allowUserMedia: Boolean,
            allowPaymentRequest: Boolean,
            referrerPolicy: kWA,
            loading: {
                type: ["eager", "lazy"],
                treatNullAsEmptyString: !0
            },
            align: String,
            scrolling: String,
            frameBorder: String,
            longDesc: mJ,
            marginHeight: {
                type: String,
                treatNullAsEmptyString: !0
            },
            marginWidth: {
                type: String,
                treatNullAsEmptyString: !0
            }
        }
    });
    kB({
        tag: "img",
        name: "HTMLImageElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            alt: String,
            src: mJ,
            srcset: String,
            crossOrigin: C31,
            useMap: String,
            isMap: Boolean,
            sizes: String,
            height: {
                type: "unsigned long",
                default: 0
            },
            width: {
                type: "unsigned long",
                default: 0
            },
            referrerPolicy: kWA,
            loading: {
                type: ["eager", "lazy"],
                missing: ""
            },
            name: String,
            lowsrc: mJ,
            align: String,
            hspace: {
                type: "unsigned long",
                default: 0
            },
            vspace: {
                type: "unsigned long",
                default: 0
            },
            longDesc: mJ,
            border: {
                type: String,
                treatNullAsEmptyString: !0
            }
        }
    });
    kB({
        tag: "input",
        name: "HTMLInputElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: {
            form: SP.form,
            _post_click_activation_steps: {
                value: function(A) {
                    if (this.type === "checkbox") this.checked = !this.checked;
                    else if (this.type === "radio") {
                        var Q = this.form.getElementsByName(this.name);
                        for (var B = Q.length - 1; B >= 0; B--) {
                            var G = Q[B];
                            G.checked = G === this
                        }
                    }
                }
            }
        },
        attributes: {
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            accept: String,
            alt: String,
            max: String,
            min: String,
            pattern: String,
            placeholder: String,
            step: String,
            dirName: String,
            defaultValue: {
                name: "value"
            },
            multiple: Boolean,
            required: Boolean,
            readOnly: Boolean,
            checked: Boolean,
            value: String,
            src: mJ,
            defaultChecked: {
                name: "checked",
                type: Boolean
            },
            size: {
                type: "unsigned long",
                default: 20,
                min: 1,
                setmin: 1
            },
            width: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: 0
            },
            height: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: 0
            },
            minLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            maxLength: {
                type: "unsigned long",
                min: 0,
                setmin: 0,
                default: -1
            },
            autocomplete: String,
            type: {
                type: ["text", "hidden", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"],
                missing: "text"
            },
            formTarget: String,
            formNoValidate: Boolean,
            formMethod: {
                type: ["get", "post"],
                invalid: "get",
                missing: ""
            },
            formEnctype: {
                type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
                invalid: "application/x-www-form-urlencoded",
                missing: ""
            },
            inputMode: {
                type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"],
                missing: ""
            },
            align: String,
            useMap: String
        }
    });
    kB({
        tag: "keygen",
        name: "HTMLKeygenElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP,
        attributes: {
            name: String,
            disabled: Boolean,
            autofocus: Boolean,
            challenge: String,
            keytype: {
                type: ["rsa"],
                missing: ""
            }
        }
    });
    kB({
        tag: "li",
        name: "HTMLLIElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            value: {
                type: "long",
                default: 0
            },
            type: String
        }
    });
    kB({
        tag: "label",
        name: "HTMLLabelElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP,
        attributes: {
            htmlFor: {
                name: "for",
                type: String
            }
        }
    });
    kB({
        tag: "legend",
        name: "HTMLLegendElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            align: String
        }
    });
    kB({
        tag: "link",
        name: "HTMLLinkElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            href: mJ,
            rel: String,
            media: String,
            hreflang: String,
            type: String,
            crossOrigin: C31,
            nonce: String,
            integrity: String,
            referrerPolicy: kWA,
            imageSizes: String,
            imageSrcset: String,
            charset: String,
            rev: String,
            target: String
        }
    });
    kB({
        tag: "map",
        name: "HTMLMapElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            name: String
        }
    });
    kB({
        tag: "menu",
        name: "HTMLMenuElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            type: {
                type: ["context", "popup", "toolbar"],
                missing: "toolbar"
            },
            label: String,
            compact: Boolean
        }
    });
    kB({
        tag: "meta",
        name: "HTMLMetaElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            name: String,
            content: String,
            httpEquiv: {
                name: "http-equiv",
                type: String
            },
            scheme: String
        }
    });
    kB({
        tag: "meter",
        name: "HTMLMeterElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP
    });
    kB({
        tags: ["ins", "del"],
        name: "HTMLModElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            cite: mJ,
            dateTime: String
        }
    });
    kB({
        tag: "ol",
        name: "HTMLOListElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            _numitems: {
                get: function() {
                    var A = 0;
                    return this.childNodes.forEach(function(Q) {
                        if (Q.nodeType === o70.ELEMENT_NODE && Q.tagName === "LI") A++
                    }), A
                }
            }
        },
        attributes: {
            type: String,
            reversed: Boolean,
            start: {
                type: "long",
                default: function() {
                    if (this.reversed) return this._numitems;
                    else return 1
                }
            },
            compact: Boolean
        }
    });
    kB({
        tag: "object",
        name: "HTMLObjectElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP,
        attributes: {
            data: mJ,
            type: String,
            name: String,
            useMap: String,
            typeMustMatch: Boolean,
            width: String,
            height: String,
            align: String,
            archive: String,
            code: String,
            declare: Boolean,
            hspace: {
                type: "unsigned long",
                default: 0
            },
            standby: String,
            vspace: {
                type: "unsigned long",
                default: 0
            },
            codeBase: mJ,
            codeType: String,
            border: {
                type: String,
                treatNullAsEmptyString: !0
            }
        }
    });
    kB({
        tag: "optgroup",
        name: "HTMLOptGroupElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            disabled: Boolean,
            label: String
        }
    });
    kB({
        tag: "option",
        name: "HTMLOptionElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        props: {
            form: {
                get: function() {
                    var A = this.parentNode;
                    while (A && A.nodeType === o70.ELEMENT_NODE) {
                        if (A.localName === "select") return A.form;
                        A = A.parentNode
                    }
                }
            },
            value: {
                get: function() {
                    return this._getattr("value") || this.text
                },
                set: function(A) {
                    this._setattr("value", A)
                }
            },
            text: {
                get: function() {
                    return this.textContent.replace(/[ \t\n\f\r]+/g, " ").trim()
                },
                set: function(A) {
                    this.textContent = A
                }
            }
        },
        attributes: {
            disabled: Boolean,
            defaultSelected: {
                name: "selected",
                type: Boolean
            },
            label: String
        }
    });
    kB({
        tag: "output",
        name: "HTMLOutputElement",
        ctor: function(Q, B, G) {
            jP.call(this, Q, B, G)
        },
        props: SP,
        attributes: {
            name: String
        }
    });
    kB({
        tag: "p",
        name: "HTMLParagraphElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            align: String
        }
    });
    kB({
        tag: "param",
        name: "HTMLParamElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },
        attributes: {
            name: String,
            value: String,
            type: String,
            valueType: String
        }
    });
    kB({
        tags: ["pre", "listing", "xmp"],
        name: "HTMLPreElement",
        ctor: function(Q, B, G) {
            A9.call(this, Q, B, G)
        },