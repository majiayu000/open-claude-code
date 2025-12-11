/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_021.js
 * 处理时间: 2025-12-09T03:41:37.507Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 21/34
 * Lines: 239077 - 240576 (1500 lines)
 * Original file: cli.js
 */

    function ipB(A) {
        return A.codePointAt(0)
    }

    function $l6(A) {
        let Q = Nl6(A, ipB("&")),
            B = [];
        for (let G of Q) {
            if (G.length === 0) continue;
            let Z, I, Y = G.indexOf(ipB("="));
            if (Y >= 0) Z = G.slice(0, Y), I = G.slice(Y + 1);
            else Z = G, I = new Uint8Array(0);
            Z = npB(Z, 43, 32), I = npB(I, 43, 32);
            let J = dpB(cpB(Z)),
                W = dpB(cpB(I));
            B.push([J, W])
        }
        return B
    }

    function wl6(A) {
        return $l6(Ul6(A))
    }

    function ql6(A) {
        let Q = "";
        for (let [B, G] of A.entries()) {
            let Z = ppB(G[0], lpB, !0),
                I = ppB(G[1], lpB, !0);
            if (B !== 0) Q += "&";
            Q += `TextComponent{Z}=TextComponent{I}`
        }
        return Q
    }

    function Nl6(A, Q) {
        let B = [],
            G = 0,
            Z = A.indexOf(Q);
        while (Z >= 0) B.push(A.slice(G, Z)), G = Z + 1, Z = A.indexOf(Q, G);
        if (G !== A.length) B.push(A.slice(G));
        return B
    }

    function npB(A, Q, B) {
        let G = A.indexOf(Q);
        while (G >= 0) A[G] = B, G = A.indexOf(Q, G + 1);
        return A
    }
    apB.exports = {
        parseUrlencodedString: wl6,
        serializeUrlencoded: ql6
    }
});
var rpB = moduleWrapper((Ll6) => {
    var spB = deA(),
        reA = peA();
    Ll6.convert = (A, Q, {
        context: B = "The provided value"
    } = {}) => {
        if (typeof Q !== "function") throw new A.TypeError(B + " is not a function");

        function G(...Z) {
            let I = reA.tryWrapperForImpl(this),
                Y;
            for (let J = 0; J < Z.length; J++) Z[J] = reA.tryWrapperForImpl(Z[J]);
            return Y = Reflect.apply(Q, I, Z), Y = spB.any(Y, {
                context: B,
                globals: A
            }), Y
        }
        return G.construct = (...Z) => {
            for (let Y = 0; Y < Z.length; Y++) Z[Y] = reA.tryWrapperForImpl(Z[Y]);
            let I = Reflect.construct(Q, Z);
            return I = spB.any(I, {
                context: B,
                globals: A
            }), I
        }, G[reA.wrapperSymbol] = Q, G.objectReference = Q, G
    }
});
var opB = moduleWrapper((Ol6) => {
    var Vi1 = Fi1();
    Ol6.implementation = class {
        constructor(Q, B, {
            doNotStripQMark: G = !1
        }) {
            let Z = B[0];
            if (this._list = [], this._url = null, !G && typeof Z === "string" && Z[0] === "?") Z = Z.slice(1);
            if (Array.isArray(Z))
                for (let I of Z) {
                    if (I.length !== 2) throw TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.");
                    this._list.push([I[0], I[1]])
                } else if (typeof Z === "object" && Object.getPrototypeOf(Z) === null)
                    for (let I of Object.keys(Z)) {
                        let Y = Z[I];
                        this._list.push([I, Y])
                    } else this._list = Vi1.parseUrlencodedString(Z)
        }
        _updateSteps() {
            if (this._url !== null) {
                let Q = Vi1.serializeUrlencoded(this._list);
                if (Q === "") Q = null;
                this._url._url.query = Q
            }
        }
        get size() {
            return this._list.length
        }
        append(Q, B) {
            this._list.push([Q, B]), this._updateSteps()
        }
        delete(Q, B) {
            let G = 0;
            while (G < this._list.length)
                if (this._list[G][0] === Q && (B === void 0 || this._list[G][1] === B)) this._list.splice(G, 1);
                else G++;
            this._updateSteps()
        }
        get(Q) {
            for (let B of this._list)
                if (B[0] === Q) return B[1];
            return null
        }
        getAll(Q) {
            let B = [];
            for (let G of this._list)
                if (G[0] === Q) B.push(G[1]);
            return B
        }
        has(Q, B) {
            for (let G of this._list)
                if (G[0] === Q && (B === void 0 || G[1] === B)) return !0;
            return !1
        }
        set(Q, B) {
            let G = !1,
                Z = 0;
            while (Z < this._list.length)
                if (this._list[Z][0] === Q)
                    if (G) this._list.splice(Z, 1);
                    else G = !0, this._list[Z][1] = B, Z++;
            else Z++;
            if (!G) this._list.push([Q, B]);
            this._updateSteps()
        }
        sort() {
            this._list.sort((Q, B) => {
                if (Q[0] < B[0]) return -1;
                if (Q[0] > B[0]) return 1;
                return 0
            }), this._updateSteps()
        } [Symbol.iterator]() {
            return this._list[Symbol.iterator]()
        }
        toString() {
            return Vi1.serializeUrlencoded(this._list)
        }
    }
});
var Di1 = moduleWrapper((jl6) => {
    var NU = deA(),
        GZ = peA(),
        Tl6 = rpB(),
        tpB = GZ.newObjectInRealm,
        OW = GZ.implSymbol,
        epB = GZ.ctorRegistrySymbol;
    jl6.is = (A) => {
        return GZ.isObject(A) && GZ.hasOwn(A, OW) && A[OW] instanceof rp.implementation
    };
    jl6.isImpl = (A) => {
        return GZ.isObject(A) && A instanceof rp.implementation
    };
    jl6.convert = (A, Q, {
        context: B = "The provided value"
    } = {}) => {
        if (jl6.is(Q)) return GZ.implForWrapper(Q);
        throw new A.TypeError(`TextComponent{B} is not of type 'URLSearchParams'.`)
    };
    jl6.createDefaultIterator = (A, Q, B) => {
        let Z = A[epB]["URLSearchParams Iterator"],
            I = Object.create(Z);
        return Object.defineProperty(I, GZ.iterInternalSymbol, {
            value: {
                target: Q,
                kind: B,
                index: 0
            },
            configurable: !0
        }), I
    };

    function AlB(A, Q) {
        let B;
        if (Q !== void 0) B = Q.prototype;
        if (!GZ.isObject(B)) B = A[epB].URLSearchParams.prototype;
        return Object.create(B)
    }
    jl6.create = (A, Q, B) => {
        let G = AlB(A);
        return jl6.setup(G, A, Q, B)
    };
    jl6.createImpl = (A, Q, B) => {
        let G = jl6.create(A, Q, B);
        return GZ.implForWrapper(G)
    };
    jl6._internalSetup = (A, Q) => {};
    jl6.setup = (A, Q, B = [], G = {}) => {
        if (G.wrapper = A, jl6._internalSetup(A, Q), Object.defineProperty(A, OW, {
                value: new rp.implementation(Q, B, G),
                configurable: !0
            }), A[OW][GZ.wrapperSymbol] = A, rp.init) rp.init(A[OW]);
        return A
    };
    jl6.new = (A, Q) => {
        let B = AlB(A, Q);
        if (jl6._internalSetup(B, A), Object.defineProperty(B, OW, {
                value: Object.create(rp.implementation.prototype),
                configurable: !0
            }), B[OW][GZ.wrapperSymbol] = B, rp.init) rp.init(B[OW]);
        return B[OW]
    };
    var Pl6 = new Set(["Window", "Worker"]);
    jl6.install = (A, Q) => {
        if (!Q.some((Z) => Pl6.has(Z))) return;
        let B = GZ.initCtorRegistry(A);
        class G {
            constructor() {
                let Z = [];
                {
                    let I = arguments[0];
                    if (I !== void 0)
                        if (GZ.isObject(I))
                            if (I[Symbol.iterator] !== void 0)
                                if (!GZ.isObject(I)) throw new A.TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence is not an iterable object.");
                                else {
                                    let Y = [],
                                        J = I;
                                    for (let W of J) {
                                        if (!GZ.isObject(W)) throw new A.TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element is not an iterable object.");
                                        else {
                                            let X = [],
                                                F = W;
                                            for (let V of F) V = NU.USVString(V, {
                                                context: "Failed to construct 'URLSearchParams': parameter 1 sequence's element's element",
                                                globals: A
                                            }), X.push(V);
                                            W = X
                                        }
                                        Y.push(W)
                                    }
                                    I = Y
                                }
                    else if (!GZ.isObject(I)) throw new A.TypeError("Failed to construct 'URLSearchParams': parameter 1 record is not an object.");
                    else {
                        let Y = Object.create(null);
                        for (let J of Reflect.ownKeys(I)) {
                            let W = Object.getOwnPropertyDescriptor(I, J);
                            if (W && W.enumerable) {
                                let X = J;
                                X = NU.USVString(X, {
                                    context: "Failed to construct 'URLSearchParams': parameter 1 record's key",
                                    globals: A
                                });
                                let F = I[J];
                                F = NU.USVString(F, {
                                    context: "Failed to construct 'URLSearchParams': parameter 1 record's value",
                                    globals: A
                                }), Y[X] = F
                            }
                        }
                        I = Y
                    } else I = NU.USVString(I, {
                        context: "Failed to construct 'URLSearchParams': parameter 1",
                        globals: A
                    });
                    else I = "";
                    Z.push(I)
                }
                return jl6.setup(Object.create(new.target.prototype), A, Z)
            }
            append(Z, I) {
                let Y = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(Y)) throw new A.TypeError("'append' called on an object that is not a valid instance of URLSearchParams.");
                if (arguments.length < 2) throw new A.TypeError(`Failed to execute 'append' on 'URLSearchParams': 2 arguments required, but only TextComponent{arguments.length} present.`);
                let J = [];
                {
                    let W = arguments[0];
                    W = NU.USVString(W, {
                        context: "Failed to execute 'append' on 'URLSearchParams': parameter 1",
                        globals: A
                    }), J.push(W)
                } {
                    let W = arguments[1];
                    W = NU.USVString(W, {
                        context: "Failed to execute 'append' on 'URLSearchParams': parameter 2",
                        globals: A
                    }), J.push(W)
                }
                return GZ.tryWrapperForImpl(Y[OW].append(...J))
            }
            delete(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(I)) throw new A.TypeError("'delete' called on an object that is not a valid instance of URLSearchParams.");
                if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'delete' on 'URLSearchParams': 1 argument required, but only TextComponent{arguments.length} present.`);
                let Y = [];
                {
                    let J = arguments[0];
                    J = NU.USVString(J, {
                        context: "Failed to execute 'delete' on 'URLSearchParams': parameter 1",
                        globals: A
                    }), Y.push(J)
                } {
                    let J = arguments[1];
                    if (J !== void 0) J = NU.USVString(J, {
                        context: "Failed to execute 'delete' on 'URLSearchParams': parameter 2",
                        globals: A
                    });
                    Y.push(J)
                }
                return GZ.tryWrapperForImpl(I[OW].delete(...Y))
            }
            get(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(I)) throw new A.TypeError("'get' called on an object that is not a valid instance of URLSearchParams.");
                if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'get' on 'URLSearchParams': 1 argument required, but only TextComponent{arguments.length} present.`);
                let Y = [];
                {
                    let J = arguments[0];
                    J = NU.USVString(J, {
                        context: "Failed to execute 'get' on 'URLSearchParams': parameter 1",
                        globals: A
                    }), Y.push(J)
                }
                return I[OW].get(...Y)
            }
            getAll(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(I)) throw new A.TypeError("'getAll' called on an object that is not a valid instance of URLSearchParams.");
                if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'getAll' on 'URLSearchParams': 1 argument required, but only TextComponent{arguments.length} present.`);
                let Y = [];
                {
                    let J = arguments[0];
                    J = NU.USVString(J, {
                        context: "Failed to execute 'getAll' on 'URLSearchParams': parameter 1",
                        globals: A
                    }), Y.push(J)
                }
                return GZ.tryWrapperForImpl(I[OW].getAll(...Y))
            }
            has(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(I)) throw new A.TypeError("'has' called on an object that is not a valid instance of URLSearchParams.");
                if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'has' on 'URLSearchParams': 1 argument required, but only TextComponent{arguments.length} present.`);
                let Y = [];
                {
                    let J = arguments[0];
                    J = NU.USVString(J, {
                        context: "Failed to execute 'has' on 'URLSearchParams': parameter 1",
                        globals: A
                    }), Y.push(J)
                } {
                    let J = arguments[1];
                    if (J !== void 0) J = NU.USVString(J, {
                        context: "Failed to execute 'has' on 'URLSearchParams': parameter 2",
                        globals: A
                    });
                    Y.push(J)
                }
                return I[OW].has(...Y)
            }
            set(Z, I) {
                let Y = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(Y)) throw new A.TypeError("'set' called on an object that is not a valid instance of URLSearchParams.");
                if (arguments.length < 2) throw new A.TypeError(`Failed to execute 'set' on 'URLSearchParams': 2 arguments required, but only TextComponent{arguments.length} present.`);
                let J = [];
                {
                    let W = arguments[0];
                    W = NU.USVString(W, {
                        context: "Failed to execute 'set' on 'URLSearchParams': parameter 1",
                        globals: A
                    }), J.push(W)
                } {
                    let W = arguments[1];
                    W = NU.USVString(W, {
                        context: "Failed to execute 'set' on 'URLSearchParams': parameter 2",
                        globals: A
                    }), J.push(W)
                }
                return GZ.tryWrapperForImpl(Y[OW].set(...J))
            }
            sort() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(Z)) throw new A.TypeError("'sort' called on an object that is not a valid instance of URLSearchParams.");
                return GZ.tryWrapperForImpl(Z[OW].sort())
            }
            toString() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(Z)) throw new A.TypeError("'toString' called on an object that is not a valid instance of URLSearchParams.");
                return Z[OW].toString()
            }
            keys() {
                if (!jl6.is(this)) throw new A.TypeError("'keys' called on an object that is not a valid instance of URLSearchParams.");
                return jl6.createDefaultIterator(A, this, "key")
            }
            values() {
                if (!jl6.is(this)) throw new A.TypeError("'values' called on an object that is not a valid instance of URLSearchParams.");
                return jl6.createDefaultIterator(A, this, "value")
            }
            entries() {
                if (!jl6.is(this)) throw new A.TypeError("'entries' called on an object that is not a valid instance of URLSearchParams.");
                return jl6.createDefaultIterator(A, this, "key+value")
            }
            forEach(Z) {
                if (!jl6.is(this)) throw new A.TypeError("'forEach' called on an object that is not a valid instance of URLSearchParams.");
                if (arguments.length < 1) throw new A.TypeError("Failed to execute 'forEach' on 'iterable': 1 argument required, but only 0 present.");
                Z = Tl6.convert(A, Z, {
                    context: "Failed to execute 'forEach' on 'iterable': The callback provided as parameter 1"
                });
                let I = arguments[1],
                    Y = Array.from(this[OW]),
                    J = 0;
                while (J < Y.length) {
                    let [W, X] = Y[J].map(GZ.tryWrapperForImpl);
                    Z.call(I, X, W, this), Y = Array.from(this[OW]), J++
                }
            }
            get size() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!jl6.is(Z)) throw new A.TypeError("'get size' called on an object that is not a valid instance of URLSearchParams.");
                return Z[OW].size
            }
        }
        Object.defineProperties(G.prototype, {
            append: {
                enumerable: !0
            },
            delete: {
                enumerable: !0
            },
            get: {
                enumerable: !0
            },
            getAll: {
                enumerable: !0
            },
            has: {
                enumerable: !0
            },
            set: {
                enumerable: !0
            },
            sort: {
                enumerable: !0
            },
            toString: {
                enumerable: !0
            },
            keys: {
                enumerable: !0
            },
            values: {
                enumerable: !0
            },
            entries: {
                enumerable: !0
            },
            forEach: {
                enumerable: !0
            },
            size: {
                enumerable: !0
            },
            [Symbol.toStringTag]: {
                value: "URLSearchParams",
                configurable: !0
            },
            [Symbol.iterator]: {
                value: G.prototype.entries,
                configurable: !0,
                writable: !0
            }
        }), B.URLSearchParams = G, B["URLSearchParams Iterator"] = Object.create(B["%IteratorPrototype%"], {
            [Symbol.toStringTag]: {
                configurable: !0,
                value: "URLSearchParams Iterator"
            }
        }), GZ.define(B["URLSearchParams Iterator"], {
            next() {
                let Z = this && this[GZ.iterInternalSymbol];
                if (!Z) throw new A.TypeError("next() called on a value that is not a URLSearchParams iterator object");
                let {
                    target: I,
                    kind: Y,
                    index: J
                } = Z, W = Array.from(I[OW]), X = W.length;
                if (J >= X) return tpB(A, {
                    value: void 0,
                    done: !0
                });
                let F = W[J];
                return Z.index = J + 1, tpB(A, GZ.iteratorResult(F.map(GZ.tryWrapperForImpl), Y))
            }
        }), Object.defineProperty(A, "URLSearchParams", {
            configurable: !0,
            writable: !0,
            value: G
        })
    };
    var rp = opB()
});
var ZlB = moduleWrapper((bl6) => {
    var RG = Xi1(),
        GlB = Fi1(),
        vl6 = Di1();
    bl6.implementation = class A {
        constructor(Q, [B, G]) {
            let Z = null;
            if (G !== void 0) {
                if (Z = RG.basicURLParse(G), Z === null) throw TypeError(`Invalid base URL: TextComponent{G}`)
            }
            let I = RG.basicURLParse(B, {
                baseURL: Z
            });
            if (I === null) throw TypeError(`Invalid URL: TextComponent{B}`);
            let Y = I.query !== null ? I.query : "";
            this._url = I, this._query = vl6.createImpl(Q, [Y], {
                doNotStripQMark: !0
            }), this._query._url = this
        }
        static parse(Q, B, G) {
            try {
                return new A(Q, [B, G])
            } catch {
                return null
            }
        }
        static canParse(Q, B) {
            let G = null;
            if (B !== void 0) {
                if (G = RG.basicURLParse(B), G === null) return !1
            }
            if (RG.basicURLParse(Q, {
                    baseURL: G
                }) === null) return !1;
            return !0
        }
        get href() {
            return RG.serializeURL(this._url)
        }
        set href(Q) {
            let B = RG.basicURLParse(Q);
            if (B === null) throw TypeError(`Invalid URL: TextComponent{Q}`);
            this._url = B, this._query._list.splice(0);
            let {
                query: G
            } = B;
            if (G !== null) this._query._list = GlB.parseUrlencodedString(G)
        }
        get origin() {
            return RG.serializeURLOrigin(this._url)
        }
        get protocol() {
            return `TextComponent{this._url.scheme}:`
        }
        set protocol(Q) {
            RG.basicURLParse(`TextComponent{Q}:`, {
                url: this._url,
                stateOverride: "scheme start"
            })
        }
        get username() {
            return this._url.username
        }
        set username(Q) {
            if (RG.cannotHaveAUsernamePasswordPort(this._url)) return;
            RG.setTheUsername(this._url, Q)
        }
        get password() {
            return this._url.password
        }
        set password(Q) {
            if (RG.cannotHaveAUsernamePasswordPort(this._url)) return;
            RG.setThePassword(this._url, Q)
        }
        get host() {
            let Q = this._url;
            if (Q.host === null) return "";
            if (Q.port === null) return RG.serializeHost(Q.host);
            return `TextComponent{RG.serializeHost(Q.host)}:TextComponent{RG.serializeInteger(Q.port)}`
        }
        set host(Q) {
            if (RG.hasAnOpaquePath(this._url)) return;
            RG.basicURLParse(Q, {
                url: this._url,
                stateOverride: "host"
            })
        }
        get hostname() {
            if (this._url.host === null) return "";
            return RG.serializeHost(this._url.host)
        }
        set hostname(Q) {
            if (RG.hasAnOpaquePath(this._url)) return;
            RG.basicURLParse(Q, {
                url: this._url,
                stateOverride: "hostname"
            })
        }
        get port() {
            if (this._url.port === null) return "";
            return RG.serializeInteger(this._url.port)
        }
        set port(Q) {
            if (RG.cannotHaveAUsernamePasswordPort(this._url)) return;
            if (Q === "") this._url.port = null;
            else RG.basicURLParse(Q, {
                url: this._url,
                stateOverride: "port"
            })
        }
        get pathname() {
            return RG.serializePath(this._url)
        }
        set pathname(Q) {
            if (RG.hasAnOpaquePath(this._url)) return;
            this._url.path = [], RG.basicURLParse(Q, {
                url: this._url,
                stateOverride: "path start"
            })
        }
        get search() {
            if (this._url.query === null || this._url.query === "") return "";
            return `?TextComponent{this._url.query}`
        }
        set search(Q) {
            let B = this._url;
            if (Q === "") {
                B.query = null, this._query._list = [];
                return
            }
            let G = Q[0] === "?" ? Q.substring(1) : Q;
            B.query = "", RG.basicURLParse(G, {
                url: B,
                stateOverride: "query"
            }), this._query._list = GlB.parseUrlencodedString(G)
        }
        get searchParams() {
            return this._query
        }
        get hash() {
            if (this._url.fragment === null || this._url.fragment === "") return "";
            return `#TextComponent{this._url.fragment}`
        }
        set hash(Q) {
            if (Q === "") {
                this._url.fragment = null;
                return
            }
            let B = Q[0] === "#" ? Q.substring(1) : Q;
            this._url.fragment = "", RG.basicURLParse(B, {
                url: this._url,
                stateOverride: "fragment"
            })
        }
        toJSON() {
            return this.href
        }
    }
});
var WlB = moduleWrapper((ul6) => {
    var dH = deA(),
        LU = peA(),
        _3 = LU.implSymbol,
        hl6 = LU.ctorRegistrySymbol;
    ul6.is = (A) => {
        return LU.isObject(A) && LU.hasOwn(A, _3) && A[_3] instanceof e_.implementation
    };
    ul6.isImpl = (A) => {
        return LU.isObject(A) && A instanceof e_.implementation
    };
    ul6.convert = (A, Q, {
        context: B = "The provided value"
    } = {}) => {
        if (ul6.is(Q)) return LU.implForWrapper(Q);
        throw new A.TypeError(`TextComponent{B} is not of type 'URL'.`)
    };

    function IlB(A, Q) {
        let B;
        if (Q !== void 0) B = Q.prototype;
        if (!LU.isObject(B)) B = A[hl6].URL.prototype;
        return Object.create(B)
    }
    ul6.create = (A, Q, B) => {
        let G = IlB(A);
        return ul6.setup(G, A, Q, B)
    };
    ul6.createImpl = (A, Q, B) => {
        let G = ul6.create(A, Q, B);
        return LU.implForWrapper(G)
    };
    ul6._internalSetup = (A, Q) => {};
    ul6.setup = (A, Q, B = [], G = {}) => {
        if (G.wrapper = A, ul6._internalSetup(A, Q), Object.defineProperty(A, _3, {
                value: new e_.implementation(Q, B, G),
                configurable: !0
            }), A[_3][LU.wrapperSymbol] = A, e_.init) e_.init(A[_3]);
        return A
    };
    ul6.new = (A, Q) => {
        let B = IlB(A, Q);
        if (ul6._internalSetup(B, A), Object.defineProperty(B, _3, {
                value: Object.create(e_.implementation.prototype),
                configurable: !0
            }), B[_3][LU.wrapperSymbol] = B, e_.init) e_.init(B[_3]);
        return B[_3]
    };
    var gl6 = new Set(["Window", "Worker"]);
    ul6.install = (A, Q) => {
        if (!Q.some((Z) => gl6.has(Z))) return;
        let B = LU.initCtorRegistry(A);
        class G {
            constructor(Z) {
                if (arguments.length < 1) throw new A.TypeError(`Failed to construct 'URL': 1 argument required, but only TextComponent{arguments.length} present.`);
                let I = [];
                {
                    let Y = arguments[0];
                    Y = dH.USVString(Y, {
                        context: "Failed to construct 'URL': parameter 1",
                        globals: A
                    }), I.push(Y)
                } {
                    let Y = arguments[1];
                    if (Y !== void 0) Y = dH.USVString(Y, {
                        context: "Failed to construct 'URL': parameter 2",
                        globals: A
                    });
                    I.push(Y)
                }
                return ul6.setup(Object.create(new.target.prototype), A, I)
            }
            toJSON() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'toJSON' called on an object that is not a valid instance of URL.");
                return Z[_3].toJSON()
            }
            get href() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get href' called on an object that is not a valid instance of URL.");
                return Z[_3].href
            }
            set href(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set href' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'href' property on 'URL': The provided value",
                    globals: A
                }), I[_3].href = Z
            }
            toString() {
                let Z = this;
                if (!ul6.is(Z)) throw new A.TypeError("'toString' called on an object that is not a valid instance of URL.");
                return Z[_3].href
            }
            get origin() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get origin' called on an object that is not a valid instance of URL.");
                return Z[_3].origin
            }
            get protocol() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get protocol' called on an object that is not a valid instance of URL.");
                return Z[_3].protocol
            }
            set protocol(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set protocol' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'protocol' property on 'URL': The provided value",
                    globals: A
                }), I[_3].protocol = Z
            }
            get username() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get username' called on an object that is not a valid instance of URL.");
                return Z[_3].username
            }
            set username(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set username' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'username' property on 'URL': The provided value",
                    globals: A
                }), I[_3].username = Z
            }
            get password() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get password' called on an object that is not a valid instance of URL.");
                return Z[_3].password
            }
            set password(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set password' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'password' property on 'URL': The provided value",
                    globals: A
                }), I[_3].password = Z
            }
            get host() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get host' called on an object that is not a valid instance of URL.");
                return Z[_3].host
            }
            set host(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set host' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'host' property on 'URL': The provided value",
                    globals: A
                }), I[_3].host = Z
            }
            get hostname() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get hostname' called on an object that is not a valid instance of URL.");
                return Z[_3].hostname
            }
            set hostname(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set hostname' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'hostname' property on 'URL': The provided value",
                    globals: A
                }), I[_3].hostname = Z
            }
            get port() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get port' called on an object that is not a valid instance of URL.");
                return Z[_3].port
            }
            set port(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set port' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'port' property on 'URL': The provided value",
                    globals: A
                }), I[_3].port = Z
            }
            get pathname() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get pathname' called on an object that is not a valid instance of URL.");
                return Z[_3].pathname
            }
            set pathname(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set pathname' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'pathname' property on 'URL': The provided value",
                    globals: A
                }), I[_3].pathname = Z
            }
            get search() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get search' called on an object that is not a valid instance of URL.");
                return Z[_3].search
            }
            set search(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set search' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'search' property on 'URL': The provided value",
                    globals: A
                }), I[_3].search = Z
            }
            get searchParams() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get searchParams' called on an object that is not a valid instance of URL.");
                return LU.getSameObject(this, "searchParams", () => {
                    return LU.tryWrapperForImpl(Z[_3].searchParams)
                })
            }
            get hash() {
                let Z = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(Z)) throw new A.TypeError("'get hash' called on an object that is not a valid instance of URL.");
                return Z[_3].hash
            }
            set hash(Z) {
                let I = this !== null && this !== void 0 ? this : A;
                if (!ul6.is(I)) throw new A.TypeError("'set hash' called on an object that is not a valid instance of URL.");
                Z = dH.USVString(Z, {
                    context: "Failed to set the 'hash' property on 'URL': The provided value",
                    globals: A
                }), I[_3].hash = Z
            }
            static parse(Z) {
                if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'parse' on 'URL': 1 argument required, but only TextComponent{arguments.length} present.`);
                let I = [];
                {
                    let Y = arguments[0];
                    Y = dH.USVString(Y, {
                        context: "Failed to execute 'parse' on 'URL': parameter 1",
                        globals: A
                    }), I.push(Y)
                } {
                    let Y = arguments[1];
                    if (Y !== void 0) Y = dH.USVString(Y, {
                        context: "Failed to execute 'parse' on 'URL': parameter 2",
                        globals: A
                    });
                    I.push(Y)
                }
                return LU.tryWrapperForImpl(e_.implementation.parse(A, ...I))
            }
            static canParse(Z) {
                if (arguments.length < 1) throw new A.TypeError(`Failed to execute 'canParse' on 'URL': 1 argument required, but only TextComponent{arguments.length} present.`);
                let I = [];
                {
                    let Y = arguments[0];
                    Y = dH.USVString(Y, {
                        context: "Failed to execute 'canParse' on 'URL': parameter 1",
                        globals: A
                    }), I.push(Y)
                } {
                    let Y = arguments[1];
                    if (Y !== void 0) Y = dH.USVString(Y, {
                        context: "Failed to execute 'canParse' on 'URL': parameter 2",
                        globals: A
                    });
                    I.push(Y)
                }
                return e_.implementation.canParse(...I)
            }
        }
        if (Object.defineProperties(G.prototype, {
                toJSON: {
                    enumerable: !0
                },
                href: {
                    enumerable: !0
                },
                toString: {
                    enumerable: !0
                },
                origin: {
                    enumerable: !0
                },
                protocol: {
                    enumerable: !0
                },
                username: {
                    enumerable: !0
                },
                password: {
                    enumerable: !0
                },
                host: {
                    enumerable: !0
                },
                hostname: {
                    enumerable: !0
                },
                port: {
                    enumerable: !0
                },
                pathname: {
                    enumerable: !0
                },
                search: {
                    enumerable: !0
                },
                searchParams: {
                    enumerable: !0
                },
                hash: {
                    enumerable: !0
                },
                [Symbol.toStringTag]: {
                    value: "URL",
                    configurable: !0
                }
            }), Object.defineProperties(G, {
                parse: {
                    enumerable: !0
                },
                canParse: {
                    enumerable: !0
                }
            }), B.URL = G, Object.defineProperty(A, "URL", {
                configurable: !0,
                writable: !0,
                value: G
            }), Q.includes("Window")) Object.defineProperty(A, "webkitURL", {
            configurable: !0,
            writable: !0,
            value: G
        })
    };
    var e_ = ZlB()
});
var XlB = moduleWrapper((al6) => {
    var il6 = WlB(),
        nl6 = Di1();
    al6.URL = il6;
    al6.URLSearchParams = nl6
});
var VlB = moduleWrapper((el6) => {
    var {
        URL: ol6,
        URLSearchParams: tl6
    } = XlB(), OT = Xi1(), FlB = ieA(), teA = {
        Array,
        Object,
        Promise,
        String,
        TypeError
    };
    ol6.install(teA, ["Window"]);
    tl6.install(teA, ["Window"]);
    el6.URL = teA.URL;
    el6.URLSearchParams = teA.URLSearchParams;
    el6.parseURL = OT.parseURL;
    el6.basicURLParse = OT.basicURLParse;
    el6.serializeURL = OT.serializeURL;
    el6.serializePath = OT.serializePath;
    el6.serializeHost = OT.serializeHost;
    el6.serializeInteger = OT.serializeInteger;
    el6.serializeURLOrigin = OT.serializeURLOrigin;
    el6.setTheUsername = OT.setTheUsername;
    el6.setThePassword = OT.setThePassword;
    el6.cannotHaveAUsernamePasswordPort = OT.cannotHaveAUsernamePasswordPort;
    el6.hasAnOpaquePath = OT.hasAnOpaquePath;
    el6.percentDecodeString = FlB.percentDecodeString;
    el6.percentDecodeBytes = FlB.percentDecodeBytes
});
var Mi1 = moduleWrapper((TT, NlB) => {
    Object.defineProperty(TT, "__esModule", {
        value: !0
    });

    function YZA(A) {
        return A && typeof A === "object" && "default" in A ? A.default : A
    }
    var RT = YZA(nodeRequire("stream")),
        ClB = YZA(nodeRequire("http")),
        AA1 = YZA(nodeRequire("url")),
        ElB = YZA(VlB()),
        Ci6 = YZA(nodeRequire("https")),
        Le = YZA(nodeRequire("zlib")),
        Ei6 = RT.Readable,
        wf = Symbol("buffer"),
        Ci1 = Symbol("type");
    class ZZA {
        constructor() {
            this[Ci1] = "";
            let A = arguments[0],
                Q = arguments[1],
                B = [],
                G = 0;
            if (A) {
                let I = A,
                    Y = Number(I.length);
                for (let J = 0; J < Y; J++) {
                    let W = I[J],
                        X;
                    if (W instanceof Buffer) X = W;
                    else if (ArrayBuffer.isView(W)) X = Buffer.from(W.buffer, W.byteOffset, W.byteLength);
                    else if (W instanceof ArrayBuffer) X = Buffer.from(W);
                    else if (W instanceof ZZA) X = W[wf];
                    else X = Buffer.from(typeof W === "string" ? W : String(W));
                    G += X.length, B.push(X)
                }
            }
            this[wf] = Buffer.concat(B);
            let Z = Q && Q.type !== void 0 && String(Q.type).toLowerCase();
            if (Z && !/[^\u0020-\u007E]/.test(Z)) this[Ci1] = Z
        }
        get size() {
            return this[wf].length
        }
        get type() {
            return this[Ci1]
        }
        text() {
            return Promise.resolve(this[wf].toString())
        }
        arrayBuffer() {
            let A = this[wf],
                Q = A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength);
            return Promise.resolve(Q)
        }
        stream() {
            let A = new Ei6;
            return A._read = function() {}, A.push(this[wf]), A.push(null), A
        }
        toString() {
            return "[object Blob]"
        }
        slice() {
            let A = this.size,
                Q = arguments[0],
                B = arguments[1],
                G, Z;
            if (Q === void 0) G = 0;
            else if (Q < 0) G = Math.max(A + Q, 0);
            else G = Math.min(Q, A);
            if (B === void 0) Z = A;
            else if (B < 0) Z = Math.max(A + B, 0);
            else Z = Math.min(B, A);
            let I = Math.max(Z - G, 0),
                J = this[wf].slice(G, G + I),
                W = new ZZA([], {
                    type: arguments[2]
                });
            return W[wf] = J, W
        }
    }
    Object.defineProperties(ZZA.prototype, {
        size: {
            enumerable: !0
        },
        type: {
            enumerable: !0
        },
        slice: {
            enumerable: !0
        }
    });
    Object.defineProperty(ZZA.prototype, Symbol.toStringTag, {
        value: "Blob",
        writable: !1,
        enumerable: !1,
        configurable: !0
    });

    function wD(A, Q, B) {
        if (Error.call(this, A), this.message = A, this.type = Q, B) this.code = this.errno = B.code;
        Error.captureStackTrace(this, this.constructor)
    }
    wD.prototype = Object.create(Error.prototype);
    wD.prototype.constructor = wD;
    wD.prototype.name = "FetchError";
    var $i1;
    try {
        $i1 = (() => {
            throw new Error("Cannot require module " + "encoding");
        })().convert
    } catch (A) {}
    var Nf = Symbol("Body internals"),
        KlB = RT.PassThrough;

    function dV(A) {
        var Q = this,
            B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            G = B.size;
        let Z = G === void 0 ? 0 : G;
        var I = B.timeout;
        let Y = I === void 0 ? 0 : I;
        if (A == null) A = null;
        else if (zlB(A)) A = Buffer.from(A.toString());
        else if (rwA(A));
        else if (Buffer.isBuffer(A));
        else if (Object.prototype.toString.call(A) === "[object ArrayBuffer]") A = Buffer.from(A);
        else if (ArrayBuffer.isView(A)) A = Buffer.from(A.buffer, A.byteOffset, A.byteLength);
        else if (A instanceof RT);
        else A = Buffer.from(String(A));
        if (this[Nf] = {
                body: A,
                disturbed: !1,
                error: null
            }, this.size = Z, this.timeout = Y, A instanceof RT) A.on("error", function(J) {
            let W = J.name === "AbortError" ? J : new wD(`Invalid response body while trying to fetch TextComponent{Q.url}: TextComponent{J.message}`, "system", J);
            Q[Nf].error = W
        })
    }
    dV.prototype = {
        get body() {
            return this[Nf].body
        },
        get bodyUsed() {
            return this[Nf].disturbed
        },
        arrayBuffer() {
            return BZA.call(this).then(function(A) {
                return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength)
            })
        },
        blob() {
            let A = this.headers && this.headers.get("content-type") || "";
            return BZA.call(this).then(function(Q) {
                return Object.assign(new ZZA([], {
                    type: A.toLowerCase()
                }), {
                    [wf]: Q
                })
            })
        },
        json() {
            var A = this;
            return BZA.call(this).then(function(Q) {
                try {
                    return JSON.parse(Q.toString())
                } catch (B) {
                    return dV.Promise.reject(new wD(`invalid json response body at TextComponent{A.url} reason: TextComponent{B.message}`, "invalid-json"))
                }
            })
        },
        text() {
            return BZA.call(this).then(function(A) {
                return A.toString()
            })
        },
        buffer() {
            return BZA.call(this)
        },
        textConverted() {
            var A = this;
            return BZA.call(this).then(function(Q) {
                return zi6(Q, A.headers)
            })
        }
    };
    Object.defineProperties(dV.prototype, {
        body: {
            enumerable: !0
        },
        bodyUsed: {
            enumerable: !0
        },
        arrayBuffer: {
            enumerable: !0
        },
        blob: {
            enumerable: !0
        },
        json: {
            enumerable: !0
        },
        text: {
            enumerable: !0
        }
    });
    dV.mixIn = function(A) {
        for (let Q of Object.getOwnPropertyNames(dV.prototype))
            if (!(Q in A)) {
                let B = Object.getOwnPropertyDescriptor(dV.prototype, Q);
                Object.defineProperty(A, Q, B)
            }
    };

    function BZA() {
        var A = this;
        if (this[Nf].disturbed) return dV.Promise.reject(TypeError(`body used already for: TextComponent{this.url}`));
        if (this[Nf].disturbed = !0, this[Nf].error) return dV.Promise.reject(this[Nf].error);
        let Q = this.body;
        if (Q === null) return dV.Promise.resolve(Buffer.alloc(0));
        if (rwA(Q)) Q = Q.stream();
        if (Buffer.isBuffer(Q)) return dV.Promise.resolve(Q);
        if (!(Q instanceof RT)) return dV.Promise.resolve(Buffer.alloc(0));
        let B = [],
            G = 0,
            Z = !1;
        return new dV.Promise(function(I, Y) {
            let J;
            if (A.timeout) J = setTimeout(function() {
                Z = !0, Y(new wD(`Response timeout while trying to fetch TextComponent{A.url} (over TextComponent{A.timeout}ms)`, "body-timeout"))
            }, A.timeout);
            Q.on("error", function(W) {
                if (W.name === "AbortError") Z = !0, Y(W);
                else Y(new wD(`Invalid response body while trying to fetch TextComponent{A.url}: TextComponent{W.message}`, "system", W))
            }), Q.on("data", function(W) {
                if (Z || W === null) return;
                if (A.size && G + W.length > A.size) {
                    Z = !0, Y(new wD(`content size at TextComponent{A.url} over limit: TextComponent{A.size}`, "max-size"));
                    return
                }
                G += W.length, B.push(W)
            }), Q.on("end", function() {
                if (Z) return;
                clearTimeout(J);
                try {
                    I(Buffer.concat(B, G))
                } catch (W) {
                    Y(new wD(`Could not create Buffer from response body for TextComponent{A.url}: TextComponent{W.message}`, "system", W))
                }
            })
        })
    }

    function zi6(A, Q) {
        if (typeof $i1 !== "function") throw Error("The package `encoding` must be installed to use the textConverted() function");
        let B = Q.get("content-type"),
            G = "utf-8",
            Z, I;
        if (B) Z = /charset=([^;]*)/i.exec(B);
        if (I = A.slice(0, 1024).toString(), !Z && I) Z = /<meta.+?charset=(['"])(.+?)\1/i.exec(I);
        if (!Z && I) {
            if (Z = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(I), !Z) {
                if (Z = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(I), Z) Z.pop()
            }
            if (Z) Z = /charset=(.*)/i.exec(Z.pop())
        }
        if (!Z && I) Z = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(I);
        if (Z) {
            if (G = Z.pop(), G === "gb2312" || G === "gbk") G = "gb18030"
        }
        return $i1(A, "UTF-8", G).toString()
    }

    function zlB(A) {
        if (typeof A !== "object" || typeof A.append !== "function" || typeof A.delete !== "function" || typeof A.get !== "function" || typeof A.getAll !== "function" || typeof A.has !== "function" || typeof A.set !== "function") return !1;
        return A.constructor.name === "URLSearchParams" || Object.prototype.toString.call(A) === "[object URLSearchParams]" || typeof A.sort === "function"
    }

    function rwA(A) {
        return typeof A === "object" && typeof A.arrayBuffer === "function" && typeof A.type === "string" && typeof A.stream === "function" && typeof A.constructor === "function" && typeof A.constructor.name === "string" && /^(Blob|File)TextComponent/.test(A.constructor.name) && /^(Blob|File)TextComponent/.test(A[Symbol.toStringTag])
    }

    function UlB(A) {
        let Q, B, G = A.body;
        if (A.bodyUsed) throw Error("cannot clone body after it is used");
        if (G instanceof RT && typeof G.getBoundary !== "function") Q = new KlB, B = new KlB, G.pipe(Q), G.pipe(B), A[Nf].body = Q, G = B;
        return G
    }

    function $lB(A) {
        if (A === null) return null;
        else if (typeof A === "string") return "text/plain;charset=UTF-8";
        else if (zlB(A)) return "application/x-www-form-urlencoded;charset=UTF-8";
        else if (rwA(A)) return A.type || null;
        else if (Buffer.isBuffer(A)) return null;
        else if (Object.prototype.toString.call(A) === "[object ArrayBuffer]") return null;
        else if (ArrayBuffer.isView(A)) return null;
        else if (typeof A.getBoundary === "function") return `multipart/form-data;boundary=TextComponent{A.getBoundary()}`;
        else if (A instanceof RT) return null;
        else return "text/plain;charset=UTF-8"
    }

    function wlB(A) {
        let Q = A.body;
        if (Q === null) return 0;
        else if (rwA(Q)) return Q.size;
        else if (Buffer.isBuffer(Q)) return Q.length;
        else if (Q && typeof Q.getLengthSync === "function") {
            if (Q._lengthRetrievers && Q._lengthRetrievers.length == 0 || Q.hasKnownLength && Q.hasKnownLength()) return Q.getLengthSync();
            return null
        } else return null
    }

    function Ui6(A, Q) {
        let B = Q.body;
        if (B === null) A.end();
        else if (rwA(B)) B.stream().pipe(A);
        else if (Buffer.isBuffer(B)) A.write(B), A.end();
        else B.pipe(A)
    }
    dV.Promise = global.Promise;
    var qlB = /[^\^_`a-zA-Z\-0-9!#TextComponent%&'*+.|~]/,
        wi1 = /[^\t\x20-\x7e\x80-\xff]/;

    function awA(A) {
        if (A = `TextComponent{A}`, qlB.test(A) || A === "") throw TypeError(`TextComponent{A} is not a legal HTTP header name`)
    }

    function DlB(A) {
        if (A = `TextComponent{A}`, wi1.test(A)) throw TypeError(`TextComponent{A} is not a legal HTTP header value`)
    }

    function GZA(A, Q) {
        Q = Q.toLowerCase();
        for (let B in A)
            if (B.toLowerCase() === Q) return B;
        return
    }
    var RW = Symbol("map");
    class RM {
        constructor() {
            let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
            if (this[RW] = Object.create(null), A instanceof RM) {
                let Q = A.raw(),
                    B = Object.keys(Q);
                for (let G of B)
                    for (let Z of Q[G]) this.append(G, Z);
                return
            }
            if (A == null);
            else if (typeof A === "object") {
                let Q = A[Symbol.iterator];
                if (Q != null) {
                    if (typeof Q !== "function") throw TypeError("Header pairs must be iterable");
                    let B = [];
                    for (let G of A) {
                        if (typeof G !== "object" || typeof G[Symbol.iterator] !== "function") throw TypeError("Each header pair must be iterable");
                        B.push(Array.from(G))
                    }
                    for (let G of B) {
                        if (G.length !== 2) throw TypeError("Each header pair must be a name/value tuple");
                        this.append(G[0], G[1])
                    }
                } else
                    for (let B of Object.keys(A)) {
                        let G = A[B];
                        this.append(B, G)
                    }
            } else throw TypeError("Provided initializer must be an object")
        }
        get(A) {
            A = `TextComponent{A}`, awA(A);
            let Q = GZA(this[RW], A);
            if (Q === void 0) return null;
            return this[RW][Q].join(", ")
        }
        forEach(A) {
            let Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
                B = qi1(this),
                G = 0;
            while (G < B.length) {
                var Z = B[G];
                let I = Z[0],
                    Y = Z[1];
                A.call(Q, Y, I, this), B = qi1(this), G++
            }
        }
        set(A, Q) {
            A = `TextComponent{A}`, Q = `TextComponent{Q}`, awA(A), DlB(Q);
            let B = GZA(this[RW], A);
            this[RW][B !== void 0 ? B : A] = [Q]
        }
        append(A, Q) {
            A = `TextComponent{A}`, Q = `TextComponent{Q}`, awA(A), DlB(Q);
            let B = GZA(this[RW], A);
            if (B !== void 0) this[RW][B].push(Q);
            else this[RW][A] = [Q]
        }
        has(A) {
            return A = `TextComponent{A}`, awA(A), GZA(this[RW], A) !== void 0
        }
        delete(A) {
            A = `TextComponent{A}`, awA(A);
            let Q = GZA(this[RW], A);
            if (Q !== void 0) delete this[RW][Q]
        }
        raw() {
            return this[RW]
        }
        keys() {
            return Ei1(this, "key")
        }
        values() {
            return Ei1(this, "value")
        } [Symbol.iterator]() {
            return Ei1(this, "key+value")
        }
    }
    RM.prototype.entries = RM.prototype[Symbol.iterator];
    Object.defineProperty(RM.prototype, Symbol.toStringTag, {
        value: "Headers",
        writable: !1,
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperties(RM.prototype, {
        get: {
            enumerable: !0
        },
        forEach: {
            enumerable: !0
        },
        set: {
            enumerable: !0
        },
        append: {
            enumerable: !0
        },
        has: {
            enumerable: !0
        },
        delete: {
            enumerable: !0
        },
        keys: {
            enumerable: !0
        },
        values: {
            enumerable: !0
        },
        entries: {
            enumerable: !0
        }
    });

    function qi1(A) {
        let Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
        return Object.keys(A[RW]).sort().map(Q === "key" ? function(G) {
            return G.toLowerCase()
        } : Q === "value" ? function(G) {
            return A[RW][G].join(", ")
        } : function(G) {
            return [G.toLowerCase(), A[RW][G].join(", ")]
        })
    }