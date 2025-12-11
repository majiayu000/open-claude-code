/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_011.js
 * 处理时间: 2025-12-09T03:41:37.386Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 11/34
 * Lines: 135858 - 137350 (1493 lines)
 * Original file: cli.js
 */

                return
            }
            let N = GeQ(w),
                q = sk1(Y),
                R = sk1(J);
            Q.onConnect?.((P) => Q.onError(P), null), Q.onHeaders?.(Z, q, H, YeQ(Z)), Q.onData?.(Buffer.from(N)), Q.onComplete?.(R), ak1(C, B)
        }

        function H() {}
        return !0
    }

    function sh8() {
        let A = this[gh8],
            Q = this[mh8],
            B = this[uh8];
        return function(Z, I) {
            if (A.isMockActive) try {
                JeQ.call(this, Z, I)
            } catch (Y) {
                if (Y instanceof qo) {
                    let J = A[dh8]();
                    if (J === !1) throw new qo(`TextComponent{Y.message}: subsequent request to origin TextComponent{Q} was not allowed (net.connect disabled)`);
                    if (WeQ(J, Q)) B.call(this, Z, I);
                    else throw new qo(`TextComponent{Y.message}: subsequent request to origin TextComponent{Q} was not allowed (net.connect is not enabled for this origin)`)
                } else throw Y
            } else B.call(this, Z, I)
        }
    }

    function WeQ(A, Q) {
        let B = new URL(Q);
        if (A === !0) return !0;
        else if (Array.isArray(A) && A.some((G) => wb(G, B.host))) return !0;
        return !1
    }

    function rh8(A) {
        if (A) {
            let {
                agent: Q,
                ...B
            } = A;
            return B
        }
    }
    XeQ.exports = {
        getResponseData: GeQ,
        getMockDispatch: ZeQ,
        addMockDispatch: nh8,
        deleteMockDispatch: ak1,
        buildKey: IeQ,
        generateKeyValues: sk1,
        matchValue: wb,
        getResponse: ah8,
        getStatusText: YeQ,
        mockDispatch: JeQ,
        buildMockDispatch: sh8,
        checkNetConnect: WeQ,
        buildMockOptions: rh8,
        getHeaderByName: QeQ,
        buildHeadersFromArray: rk1
    }
});
var By1 = moduleWrapper((Ag8, Qy1) => {
    var {
        getResponseData: oh8,
        buildKey: th8,
        addMockDispatch: ok1
    } = EEA(), {
        kDispatches: LpA,
        kDispatchKey: MpA,
        kDefaultHeaders: tk1,
        kDefaultTrailers: getSystemPromptHeader,
        kContentLength: Ay1,
        kMockDispatch: OpA
    } = i5A(), {
        InvalidArgumentError: Q_
    } = U7(), {
        buildURL: eh8
    } = M6();
    class zEA {
        constructor(A) {
            this[OpA] = A
        }
        delay(A) {
            if (typeof A !== "number" || !Number.isInteger(A) || A <= 0) throw new Q_("waitInMs must be a valid integer > 0");
            return this[OpA].delay = A, this
        }
        persist() {
            return this[OpA].persist = !0, this
        }
        times(A) {
            if (typeof A !== "number" || !Number.isInteger(A) || A <= 0) throw new Q_("repeatTimes must be a valid integer > 0");
            return this[OpA].times = A, this
        }
    }
    class FeQ {
        constructor(A, Q) {
            if (typeof A !== "object") throw new Q_("opts must be an object");
            if (typeof A.path > "u") throw new Q_("opts.path must be defined");
            if (typeof A.method > "u") A.method = "GET";
            if (typeof A.path === "string")
                if (A.query) A.path = eh8(A.path, A.query);
                else {
                    let B = new URL(A.path, "data://");
                    A.path = B.pathname + B.search
                } if (typeof A.method === "string") A.method = A.method.toUpperCase();
            this[MpA] = th8(A), this[LpA] = Q, this[tk1] = {}, this[getSystemPromptHeader] = {}, this[Ay1] = !1
        }
        createMockScopeDispatchData({
            statusCode: A,
            data: Q,
            responseOptions: B
        }) {
            let G = oh8(Q),
                Z = this[Ay1] ? {
                    "content-length": G.length
                } : {},
                I = {
                    ...this[tk1],
                    ...Z,
                    ...B.headers
                },
                Y = {
                    ...this[getSystemPromptHeader],
                    ...B.trailers
                };
            return {
                statusCode: A,
                data: Q,
                headers: I,
                trailers: Y
            }
        }
        validateReplyParameters(A) {
            if (typeof A.statusCode > "u") throw new Q_("statusCode must be defined");
            if (typeof A.responseOptions !== "object" || A.responseOptions === null) throw new Q_("responseOptions must be an object")
        }
        reply(A) {
            if (typeof A === "function") {
                let Z = (Y) => {
                        let J = A(Y);
                        if (typeof J !== "object" || J === null) throw new Q_("reply options callback must return an object");
                        let W = {
                            data: "",
                            responseOptions: {},
                            ...J
                        };
                        return this.validateReplyParameters(W), {
                            ...this.createMockScopeDispatchData(W)
                        }
                    },
                    I = ok1(this[LpA], this[MpA], Z);
                return new zEA(I)
            }
            let Q = {
                statusCode: A,
                data: arguments[1] === void 0 ? "" : arguments[1],
                responseOptions: arguments[2] === void 0 ? {} : arguments[2]
            };
            this.validateReplyParameters(Q);
            let B = this.createMockScopeDispatchData(Q),
                G = ok1(this[LpA], this[MpA], B);
            return new zEA(G)
        }
        replyWithError(A) {
            if (typeof A > "u") throw new Q_("error must be defined");
            let Q = ok1(this[LpA], this[MpA], {
                error: A
            });
            return new zEA(Q)
        }
        defaultReplyHeaders(A) {
            if (typeof A > "u") throw new Q_("headers must be defined");
            return this[tk1] = A, this
        }
        defaultReplyTrailers(A) {
            if (typeof A > "u") throw new Q_("trailers must be defined");
            return this[getSystemPromptHeader] = A, this
        }
        replyContentLength() {
            return this[Ay1] = !0, this
        }
    }
    Ag8.MockInterceptor = FeQ;
    Ag8.MockScope = zEA
});
var Zy1 = moduleWrapper((RN7, UeQ) => {
    var {
        promisify: Gg8
    } = nodeRequire("node:util"), Zg8 = ZEA(), {
        buildMockDispatch: Ig8
    } = EEA(), {
        kDispatches: VeQ,
        kMockAgent: KeQ,
        kClose: DeQ,
        kOriginalClose: HeQ,
        kOrigin: CeQ,
        kOriginalDispatch: Yg8,
        kConnected: Gy1
    } = i5A(), {
        MockInterceptor: Jg8
    } = By1(), EeQ = iI(), {
        InvalidArgumentError: Wg8
    } = U7();
    class zeQ extends Zg8 {
        constructor(A, Q) {
            super(A, Q);
            if (!Q || !Q.agent || typeof Q.agent.dispatch !== "function") throw new Wg8("Argument opts.agent must implement Agent");
            this[KeQ] = Q.agent, this[CeQ] = A, this[VeQ] = [], this[Gy1] = 1, this[Yg8] = this.dispatch, this[HeQ] = this.close.bind(this), this.dispatch = Ig8.call(this), this.close = this[DeQ]
        }
        get[EeQ.kConnected]() {
            return this[Gy1]
        }
        intercept(A) {
            return new Jg8(A, this[VeQ])
        }
        async [DeQ]() {
            await Gg8(this[HeQ])(), this[Gy1] = 0, this[KeQ][EeQ.kClients].delete(this[CeQ])
        }
    }
    UeQ.exports = zeQ
});
var Yy1 = moduleWrapper((TN7, ReQ) => {
    var {
        promisify: Xg8
    } = nodeRequire("node:util"), Fg8 = h5A(), {
        buildMockDispatch: Vg8
    } = EEA(), {
        kDispatches: $eQ,
        kMockAgent: weQ,
        kClose: qeQ,
        kOriginalClose: NeQ,
        kOrigin: LeQ,
        kOriginalDispatch: Kg8,
        kConnected: Iy1
    } = i5A(), {
        MockInterceptor: Dg8
    } = By1(), MeQ = iI(), {
        InvalidArgumentError: Hg8
    } = U7();
    class OeQ extends Fg8 {
        constructor(A, Q) {
            super(A, Q);
            if (!Q || !Q.agent || typeof Q.agent.dispatch !== "function") throw new Hg8("Argument opts.agent must implement Agent");
            this[weQ] = Q.agent, this[LeQ] = A, this[$eQ] = [], this[Iy1] = 1, this[Kg8] = this.dispatch, this[NeQ] = this.close.bind(this), this.dispatch = Vg8.call(this), this.close = this[qeQ]
        }
        get[MeQ.kConnected]() {
            return this[Iy1]
        }
        intercept(A) {
            return new Dg8(A, this[$eQ])
        }
        async [qeQ]() {
            await Xg8(this[NeQ])(), this[Iy1] = 0, this[weQ][MeQ.kClients].delete(this[LeQ])
        }
    }
    ReQ.exports = OeQ
});
var PeQ = moduleWrapper((PN7, TeQ) => {
    var Cg8 = {
            pronoun: "it",
            is: "is",
            was: "was",
            this: "this"
        },
        Eg8 = {
            pronoun: "they",
            is: "are",
            was: "were",
            this: "these"
        };
    TeQ.exports = class {
        constructor(Q, B) {
            this.singular = Q, this.plural = B
        }
        pluralize(Q) {
            let B = Q === 1,
                G = B ? Cg8 : Eg8,
                Z = B ? this.singular : this.plural;
            return {
                ...G,
                count: Q,
                noun: Z
            }
        }
    }
});
var SeQ = moduleWrapper((jN7, jeQ) => {
    var {
        Transform: zg8
    } = nodeRequire("node:stream"), {
        Console: Ug8
    } = nodeRequire("node:console"), $g8 = process.versions.icu ? "✅" : "Y ", wg8 = process.versions.icu ? "❌" : "N ";
    jeQ.exports = class {
        constructor({
            disableColors: Q
        } = {}) {
            this.transform = new zg8({
                transform(B, G, Z) {
                    Z(null, B)
                }
            }), this.logger = new Ug8({
                stdout: this.transform,
                inspectOptions: {
                    colors: !Q && !0
                }
            })
        }
        format(Q) {
            let B = Q.map(({
                method: G,
                path: Z,
                data: {
                    statusCode: I
                },
                persist: Y,
                times: J,
                timesInvoked: W,
                origin: X
            }) => ({
                Method: G,
                Origin: X,
                Path: Z,
                "Status code": I,
                Persistent: Y ? $g8 : wg8,
                Invocations: W,
                Remaining: Y ? 1 / 0 : J - W
            }));
            return this.logger.table(B), this.transform.read().toString()
        }
    }
});
var veQ = moduleWrapper((SN7, xeQ) => {
    var {
        kClients: No
    } = iI(), qg8 = g5A(), {
        kAgent: Jy1,
        kMockAgentSet: RpA,
        kMockAgentGet: _eQ,
        kDispatches: Wy1,
        kIsMockActive: TpA,
        kNetConnect: Lo,
        kGetNetConnect: Ng8,
        kOptions: PpA,
        kFactory: jpA
    } = i5A(), Lg8 = Zy1(), Mg8 = Yy1(), {
        matchValue: Og8,
        buildMockOptions: Rg8
    } = EEA(), {
        InvalidArgumentError: keQ,
        UndiciError: Tg8
    } = U7(), Pg8 = fCA(), jg8 = PeQ(), Sg8 = SeQ();
    class yeQ extends Pg8 {
        constructor(A) {
            super(A);
            if (this[Lo] = !0, this[TpA] = !0, A?.agent && typeof A.agent.dispatch !== "function") throw new keQ("Argument opts.agent must implement Agent");
            let Q = A?.agent ? A.agent : new qg8(A);
            this[Jy1] = Q, this[No] = Q[No], this[PpA] = Rg8(A)
        }
        get(A) {
            let Q = this[_eQ](A);
            if (!Q) Q = this[jpA](A), this[RpA](A, Q);
            return Q
        }
        dispatch(A, Q) {
            return this.get(A.origin), this[Jy1].dispatch(A, Q)
        }
        async close() {
            await this[Jy1].close(), this[No].clear()
        }
        deactivate() {
            this[TpA] = !1
        }
        activate() {
            this[TpA] = !0
        }
        enableNetConnect(A) {
            if (typeof A === "string" || typeof A === "function" || A instanceof RegExp)
                if (Array.isArray(this[Lo])) this[Lo].push(A);
                else this[Lo] = [A];
            else if (typeof A > "u") this[Lo] = !0;
            else throw new keQ("Unsupported matcher. Must be one of String|Function|RegExp.")
        }
        disableNetConnect() {
            this[Lo] = !1
        }
        get isMockActive() {
            return this[TpA]
        } [RpA](A, Q) {
            this[No].set(A, Q)
        } [jpA](A) {
            let Q = Object.assign({
                agent: this
            }, this[PpA]);
            return this[PpA] && this[PpA].connections === 1 ? new Lg8(A, Q) : new Mg8(A, Q)
        } [_eQ](A) {
            let Q = this[No].get(A);
            if (Q) return Q;
            if (typeof A !== "string") {
                let B = this[jpA]("http://localhost:9999");
                return this[RpA](A, B), B
            }
            for (let [B, G] of Array.from(this[No]))
                if (G && typeof B !== "string" && Og8(B, A)) {
                    let Z = this[jpA](A);
                    return this[RpA](A, Z), Z[Wy1] = G[Wy1], Z
                }
        } [Ng8]() {
            return this[Lo]
        }
        pendingInterceptors() {
            let A = this[No];
            return Array.from(A.entries()).flatMap(([Q, B]) => B[Wy1].map((G) => ({
                ...G,
                origin: Q
            }))).filter(({
                pending: Q
            }) => Q)
        }
        assertNoPendingInterceptors({
            pendingInterceptorsFormatter: A = new Sg8
        } = {}) {
            let Q = this.pendingInterceptors();
            if (Q.length === 0) return;
            let B = new jg8("interceptor", "interceptors").pluralize(Q.length);
            throw new Tg8(`
TextComponent{B.count} TextComponent{B.noun} TextComponent{B.is} pending:

TextComponent{A.format(Q)}
`.trim())
        }
    }
    xeQ.exports = yeQ
});
var SpA = moduleWrapper((_N7, geQ) => {
    var beQ = Symbol.for("undici.globalDispatcher.1"),
        {
            InvalidArgumentError: _g8
        } = U7(),
        kg8 = g5A();
    if (heQ() === void 0) feQ(new kg8);

    function feQ(A) {
        if (!A || typeof A.dispatch !== "function") throw new _g8("Argument agent must implement Agent");
        Object.defineProperty(globalThis, beQ, {
            value: A,
            writable: !0,
            enumerable: !1,
            configurable: !1
        })
    }

    function heQ() {
        return globalThis[beQ]
    }
    geQ.exports = {
        setGlobalDispatcher: feQ,
        getGlobalDispatcher: heQ
    }
});
var _pA = moduleWrapper((kN7, ueQ) => {
    ueQ.exports = class {
        #A;
        constructor(Q) {
            if (typeof Q !== "object" || Q === null) throw TypeError("handler must be an object");
            this.#A = Q
        }
        onConnect(...Q) {
            return this.#A.onConnect?.(...Q)
        }
        onError(...Q) {
            return this.#A.onError?.(...Q)
        }
        onUpgrade(...Q) {
            return this.#A.onUpgrade?.(...Q)
        }
        onResponseStarted(...Q) {
            return this.#A.onResponseStarted?.(...Q)
        }
        onHeaders(...Q) {
            return this.#A.onHeaders?.(...Q)
        }
        onData(...Q) {
            return this.#A.onData?.(...Q)
        }
        onComplete(...Q) {
            return this.#A.onComplete?.(...Q)
        }
        onBodySent(...Q) {
            return this.#A.onBodySent?.(...Q)
        }
    }
});
var deQ = moduleWrapper((yN7, meQ) => {
    var yg8 = VpA();
    meQ.exports = (A) => {
        let Q = A?.maxRedirections;
        return (B) => {
            return function(Z, I) {
                let {
                    maxRedirections: Y = Q,
                    ...J
                } = Z;
                if (!Y) return B(Z, I);
                let W = new yg8(B, Y, Z, I);
                return B(J, W)
            }
        }
    }
});
var peQ = moduleWrapper((xN7, ceQ) => {
    var xg8 = qpA();
    ceQ.exports = (A) => {
        return (Q) => {
            return function(G, Z) {
                return Q(G, new xg8({
                    ...G,
                    retryOptions: {
                        ...A,
                        ...G.retryOptions
                    }
                }, {
                    handler: Z,
                    dispatch: Q
                }))
            }
        }
    }
});
var neQ = moduleWrapper((vN7, ieQ) => {
    var vg8 = M6(),
        {
            InvalidArgumentError: bg8,
            RequestAbortedError: fg8
        } = U7(),
        hg8 = _pA();
    class leQ extends hg8 {
        #A = 1048576;
        #Q = null;
        #B = !1;
        #Z = !1;
        #G = 0;
        #J = null;
        #I = null;
        constructor({
            maxSize: A
        }, Q) {
            super(Q);
            if (A != null && (!Number.isFinite(A) || A < 1)) throw new bg8("maxSize must be a number greater than 0");
            this.#A = A ?? this.#A, this.#I = Q
        }
        onConnect(A) {
            this.#Q = A, this.#I.onConnect(this.#F.bind(this))
        }
        #F(A) {
            this.#Z = !0, this.#J = A
        }
        onHeaders(A, Q, B, G) {
            let I = vg8.parseHeaders(Q)["content-length"];
            if (I != null && I > this.#A) throw new fg8(`Response size (TextComponent{I}) larger than maxSize (TextComponent{this.#A})`);
            if (this.#Z) return !0;
            return this.#I.onHeaders(A, Q, B, G)
        }
        onError(A) {
            if (this.#B) return;
            A = this.#J ?? A, this.#I.onError(A)
        }
        onData(A) {
            if (this.#G = this.#G + A.length, this.#G >= this.#A)
                if (this.#B = !0, this.#Z) this.#I.onError(this.#J);
                else this.#I.onComplete([]);
            return !0
        }
        onComplete(A) {
            if (this.#B) return;
            if (this.#Z) {
                this.#I.onError(this.reason);
                return
            }
            this.#I.onComplete(A)
        }
    }

    function gg8({
        maxSize: A
    } = {
        maxSize: 1048576
    }) {
        return (Q) => {
            return function(G, Z) {
                let {
                    dumpMaxSize: I = A
                } = G, Y = new leQ({
                    maxSize: I
                }, Z);
                return Q(G, Y)
            }
        }
    }
    ieQ.exports = gg8
});
var teQ = moduleWrapper((bN7, oeQ) => {
    var {
        isIP: ug8
    } = nodeRequire("node:net"), {
        lookup: mg8
    } = nodeRequire("node:dns"), dg8 = _pA(), {
        InvalidArgumentError: n5A,
        InformationalError: cg8
    } = U7(), aeQ = Math.pow(2, 31) - 1;
    class seQ {
        #A = 0;
        #Q = 0;
        #B = new Map;
        dualStack = !0;
        affinity = null;
        lookup = null;
        pick = null;
        constructor(A) {
            this.#A = A.maxTTL, this.#Q = A.maxItems, this.dualStack = A.dualStack, this.affinity = A.affinity, this.lookup = A.lookup ?? this.#Z, this.pick = A.pick ?? this.#G
        }
        get full() {
            return this.#B.size === this.#Q
        }
        runLookup(A, Q, B) {
            let G = this.#B.get(A.hostname);
            if (G == null && this.full) {
                B(null, A.origin);
                return
            }
            let Z = {
                affinity: this.affinity,
                dualStack: this.dualStack,
                lookup: this.lookup,
                pick: this.pick,
                ...Q.dns,
                maxTTL: this.#A,
                maxItems: this.#Q
            };
            if (G == null) this.lookup(A, Z, (I, Y) => {
                if (I || Y == null || Y.length === 0) {
                    B(I ?? new cg8("No DNS entries found"));
                    return
                }
                this.setRecords(A, Y);
                let J = this.#B.get(A.hostname),
                    W = this.pick(A, J, Z.affinity),
                    X;
                if (typeof W.port === "number") X = `:TextComponent{W.port}`;
                else if (A.port !== "") X = `:TextComponent{A.port}`;
                else X = "";
                B(null, `TextComponent{A.protocol}//TextComponent{W.family===6?`[TextComponent{W.address}]`:W.address}TextComponent{X}`)
            });
            else {
                let I = this.pick(A, G, Z.affinity);
                if (I == null) {
                    this.#B.delete(A.hostname), this.runLookup(A, Q, B);
                    return
                }
                let Y;
                if (typeof I.port === "number") Y = `:TextComponent{I.port}`;
                else if (A.port !== "") Y = `:TextComponent{A.port}`;
                else Y = "";
                B(null, `TextComponent{A.protocol}//TextComponent{I.family===6?`[TextComponent{I.address}]`:I.address}TextComponent{Y}`)
            }
        }
        #Z(A, Q, B) {
            mg8(A.hostname, {
                all: !0,
                family: this.dualStack === !1 ? this.affinity : 0,
                order: "ipv4first"
            }, (G, Z) => {
                if (G) return B(G);
                let I = new Map;
                for (let Y of Z) I.set(`TextComponent{Y.address}:TextComponent{Y.family}`, Y);
                B(null, I.values())
            })
        }
        #G(A, Q, B) {
            let G = null,
                {
                    records: Z,
                    offset: I
                } = Q,
                Y;
            if (this.dualStack) {
                if (B == null)
                    if (I == null || I === aeQ) Q.offset = 0, B = 4;
                    else Q.offset++, B = (Q.offset & 1) === 1 ? 6 : 4;
                if (Z[B] != null && Z[B].ips.length > 0) Y = Z[B];
                else Y = Z[B === 4 ? 6 : 4]
            } else Y = Z[B];
            if (Y == null || Y.ips.length === 0) return G;
            if (Y.offset == null || Y.offset === aeQ) Y.offset = 0;
            else Y.offset++;
            let J = Y.offset % Y.ips.length;
            if (G = Y.ips[J] ?? null, G == null) return G;
            if (Date.now() - G.timestamp > G.ttl) return Y.ips.splice(J, 1), this.pick(A, Q, B);
            return G
        }
        setRecords(A, Q) {
            let B = Date.now(),
                G = {
                    records: {
                        4: null,
                        6: null
                    }
                };
            for (let Z of Q) {
                if (Z.timestamp = B, typeof Z.ttl === "number") Z.ttl = Math.min(Z.ttl, this.#A);
                else Z.ttl = this.#A;
                let I = G.records[Z.family] ?? {
                    ips: []
                };
                I.ips.push(Z), G.records[Z.family] = I
            }
            this.#B.set(A.hostname, G)
        }
        getHandler(A, Q) {
            return new reQ(this, A, Q)
        }
    }
    class reQ extends dg8 {
        #A = null;
        #Q = null;
        #B = null;
        #Z = null;
        #G = null;
        constructor(A, {
            origin: Q,
            handler: B,
            dispatch: G
        }, Z) {
            super(B);
            this.#G = Q, this.#Z = B, this.#Q = {
                ...Z
            }, this.#A = A, this.#B = G
        }
        onError(A) {
            switch (A.code) {
                case "ETIMEDOUT":
                case "ECONNREFUSED": {
                    if (this.#A.dualStack) {
                        this.#A.runLookup(this.#G, this.#Q, (Q, B) => {
                            if (Q) return this.#Z.onError(Q);
                            let G = {
                                ...this.#Q,
                                origin: B
                            };
                            this.#B(G, this)
                        });
                        return
                    }
                    this.#Z.onError(A);
                    return
                }
                case "ENOTFOUND":
                    this.#A.deleteRecord(this.#G);
                default:
                    this.#Z.onError(A);
                    break
            }
        }
    }
    oeQ.exports = (A) => {
        if (A?.maxTTL != null && (typeof A?.maxTTL !== "number" || A?.maxTTL < 0)) throw new n5A("Invalid maxTTL. Must be a positive number");
        if (A?.maxItems != null && (typeof A?.maxItems !== "number" || A?.maxItems < 1)) throw new n5A("Invalid maxItems. Must be a positive number and greater than zero");
        if (A?.affinity != null && A?.affinity !== 4 && A?.affinity !== 6) throw new n5A("Invalid affinity. Must be either 4 or 6");
        if (A?.dualStack != null && typeof A?.dualStack !== "boolean") throw new n5A("Invalid dualStack. Must be a boolean");
        if (A?.lookup != null && typeof A?.lookup !== "function") throw new n5A("Invalid lookup. Must be a function");
        if (A?.pick != null && typeof A?.pick !== "function") throw new n5A("Invalid pick. Must be a function");
        let Q = A?.dualStack ?? !0,
            B;
        if (Q) B = A?.affinity ?? null;
        else B = A?.affinity ?? 4;
        let G = {
                maxTTL: A?.maxTTL ?? 1e4,
                lookup: A?.lookup ?? null,
                pick: A?.pick ?? null,
                dualStack: Q,
                affinity: B,
                maxItems: A?.maxItems ?? 1 / 0
            },
            Z = new seQ(G);
        return (I) => {
            return function(J, W) {
                let X = J.origin.constructor === URL ? J.origin : new URL(J.origin);
                if (ug8(X.hostname) !== 0) return I(J, W);
                return Z.runLookup(X, J, (F, V) => {
                    if (F) return W.onError(F);
                    let K = null;
                    K = {
                        ...J,
                        servername: X.hostname,
                        origin: V,
                        headers: {
                            host: X.hostname,
                            ...J.headers
                        }
                    }, I(K, Z.getHandler({
                        origin: X,
                        dispatch: I,
                        handler: W
                    }, J))
                }), !0
            }
        }
    }
});
var Mo = moduleWrapper((fN7, IAB) => {
    var {
        kConstruct: pg8
    } = iI(), {
        kEnumerableProperty: a5A
    } = M6(), {
        iteratorMixin: lg8,
        isValidHeaderName: UEA,
        isValidHeaderValue: AAB
    } = Rw(), {
        webidl: B3
    } = FD(), Xy1 = nodeRequire("node:assert"), kpA = nodeRequire("node:util"), jX = Symbol("headers map"), jw = Symbol("headers map sorted");

    function eeQ(A) {
        return A === 10 || A === 13 || A === 9 || A === 32
    }

    function QAB(A) {
        let Q = 0,
            B = A.length;
        while (B > Q && eeQ(A.charCodeAt(B - 1))) --B;
        while (B > Q && eeQ(A.charCodeAt(Q))) ++Q;
        return Q === 0 && B === A.length ? A : A.substring(Q, B)
    }

    function BAB(A, Q) {
        if (Array.isArray(Q))
            for (let B = 0; B < Q.length; ++B) {
                let G = Q[B];
                if (G.length !== 2) throw B3.errors.exception({
                    header: "Headers constructor",
                    message: `expected name/value pair to be length 2, found TextComponent{G.length}.`
                });
                Fy1(A, G[0], G[1])
            } else if (typeof Q === "object" && Q !== null) {
                let B = Object.keys(Q);
                for (let G = 0; G < B.length; ++G) Fy1(A, B[G], Q[B[G]])
            } else throw B3.errors.conversionFailed({
                prefix: "Headers constructor",
                argument: "Argument 1",
                types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
            })
    }

    function Fy1(A, Q, B) {
        if (B = QAB(B), !UEA(Q)) throw B3.errors.invalidArgument({
            prefix: "Headers.append",
            value: Q,
            type: "header name"
        });
        else if (!AAB(B)) throw B3.errors.invalidArgument({
            prefix: "Headers.append",
            value: B,
            type: "header value"
        });
        if (ZAB(A) === "immutable") throw TypeError("immutable");
        return Vy1(A).append(Q, B, !1)
    }

    function GAB(A, Q) {
        return A[0] < Q[0] ? -1 : 1
    }
    class ypA {
        cookies = null;
        constructor(A) {
            if (A instanceof ypA) this[jX] = new Map(A[jX]), this[jw] = A[jw], this.cookies = A.cookies === null ? null : [...A.cookies];
            else this[jX] = new Map(A), this[jw] = null
        }
        contains(A, Q) {
            return this[jX].has(Q ? A : A.toLowerCase())
        }
        clear() {
            this[jX].clear(), this[jw] = null, this.cookies = null
        }
        append(A, Q, B) {
            this[jw] = null;
            let G = B ? A : A.toLowerCase(),
                Z = this[jX].get(G);
            if (Z) {
                let I = G === "cookie" ? "; " : ", ";
                this[jX].set(G, {
                    name: Z.name,
                    value: `TextComponent{Z.value}TextComponent{I}TextComponent{Q}`
                })
            } else this[jX].set(G, {
                name: A,
                value: Q
            });
            if (G === "set-cookie")(this.cookies ??= []).push(Q)
        }
        set(A, Q, B) {
            this[jw] = null;
            let G = B ? A : A.toLowerCase();
            if (G === "set-cookie") this.cookies = [Q];
            this[jX].set(G, {
                name: A,
                value: Q
            })
        }
        delete(A, Q) {
            if (this[jw] = null, !Q) A = A.toLowerCase();
            if (A === "set-cookie") this.cookies = null;
            this[jX].delete(A)
        }
        get(A, Q) {
            return this[jX].get(Q ? A : A.toLowerCase())?.value ?? null
        }*[Symbol.iterator]() {
            for (let {
                    0: A,
                    1: {
                        value: Q
                    }
                }
                of this[jX]) yield [A, Q]
        }
        get entries() {
            let A = {};
            if (this[jX].size !== 0)
                for (let {
                        name: Q,
                        value: B
                    }
                    of this[jX].values()) A[Q] = B;
            return A
        }
        rawValues() {
            return this[jX].values()
        }
        get entriesList() {
            let A = [];
            if (this[jX].size !== 0)
                for (let {
                        0: Q,
                        1: {
                            name: B,
                            value: G
                        }
                    }
                    of this[jX])
                    if (Q === "set-cookie")
                        for (let Z of this.cookies) A.push([B, Z]);
                    else A.push([B, G]);
            return A
        }
        toSortedArray() {
            let A = this[jX].size,
                Q = Array(A);
            if (A <= 32) {
                if (A === 0) return Q;
                let B = this[jX][Symbol.iterator](),
                    G = B.next().value;
                Q[0] = [G[0], G[1].value], Xy1(G[1].value !== null);
                for (let Z = 1, I = 0, Y = 0, J = 0, W = 0, X, F; Z < A; ++Z) {
                    F = B.next().value, X = Q[Z] = [F[0], F[1].value], Xy1(X[1] !== null), J = 0, Y = Z;
                    while (J < Y)
                        if (W = J + (Y - J >> 1), Q[W][0] <= X[0]) J = W + 1;
                        else Y = W;
                    if (Z !== W) {
                        I = Z;
                        while (I > J) Q[I] = Q[--I];
                        Q[J] = X
                    }
                }
                if (!B.next().done) throw TypeError("Unreachable");
                return Q
            } else {
                let B = 0;
                for (let {
                        0: G,
                        1: {
                            value: Z
                        }
                    }
                    of this[jX]) Q[B++] = [G, Z], Xy1(Z !== null);
                return Q.sort(GAB)
            }
        }
    }
    class PH {
        #A;
        #Q;
        constructor(A = void 0) {
            if (B3.util.markAsUncloneable(this), A === pg8) return;
            if (this.#Q = new ypA, this.#A = "none", A !== void 0) A = B3.converters.HeadersInit(A, "Headers contructor", "init"), BAB(this, A)
        }
        append(A, Q) {
            B3.brandCheck(this, PH), B3.argumentLengthCheck(arguments, 2, "Headers.append");
            let B = "Headers.append";
            return A = B3.converters.ByteString(A, B, "name"), Q = B3.converters.ByteString(Q, B, "value"), Fy1(this, A, Q)
        }
        delete(A) {
            B3.brandCheck(this, PH), B3.argumentLengthCheck(arguments, 1, "Headers.delete");
            let Q = "Headers.delete";
            if (A = B3.converters.ByteString(A, Q, "name"), !UEA(A)) throw B3.errors.invalidArgument({
                prefix: "Headers.delete",
                value: A,
                type: "header name"
            });
            if (this.#A === "immutable") throw TypeError("immutable");
            if (!this.#Q.contains(A, !1)) return;
            this.#Q.delete(A, !1)
        }
        get(A) {
            B3.brandCheck(this, PH), B3.argumentLengthCheck(arguments, 1, "Headers.get");
            let Q = "Headers.get";
            if (A = B3.converters.ByteString(A, Q, "name"), !UEA(A)) throw B3.errors.invalidArgument({
                prefix: Q,
                value: A,
                type: "header name"
            });
            return this.#Q.get(A, !1)
        }
        has(A) {
            B3.brandCheck(this, PH), B3.argumentLengthCheck(arguments, 1, "Headers.has");
            let Q = "Headers.has";
            if (A = B3.converters.ByteString(A, Q, "name"), !UEA(A)) throw B3.errors.invalidArgument({
                prefix: Q,
                value: A,
                type: "header name"
            });
            return this.#Q.contains(A, !1)
        }
        set(A, Q) {
            B3.brandCheck(this, PH), B3.argumentLengthCheck(arguments, 2, "Headers.set");
            let B = "Headers.set";
            if (A = B3.converters.ByteString(A, B, "name"), Q = B3.converters.ByteString(Q, B, "value"), Q = QAB(Q), !UEA(A)) throw B3.errors.invalidArgument({
                prefix: B,
                value: A,
                type: "header name"
            });
            else if (!AAB(Q)) throw B3.errors.invalidArgument({
                prefix: B,
                value: Q,
                type: "header value"
            });
            if (this.#A === "immutable") throw TypeError("immutable");
            this.#Q.set(A, Q, !1)
        }
        getSetCookie() {
            B3.brandCheck(this, PH);
            let A = this.#Q.cookies;
            if (A) return [...A];
            return []
        }
        get[jw]() {
            if (this.#Q[jw]) return this.#Q[jw];
            let A = [],
                Q = this.#Q.toSortedArray(),
                B = this.#Q.cookies;
            if (B === null || B.length === 1) return this.#Q[jw] = Q;
            for (let G = 0; G < Q.length; ++G) {
                let {
                    0: Z,
                    1: I
                } = Q[G];
                if (Z === "set-cookie")
                    for (let Y = 0; Y < B.length; ++Y) A.push([Z, B[Y]]);
                else A.push([Z, I])
            }
            return this.#Q[jw] = A
        } [kpA.inspect.custom](A, Q) {
            return Q.depth ??= A, `Headers TextComponent{kpA.formatWithOptions(Q,this.#Q.entries)}`
        }
        static getHeadersGuard(A) {
            return A.#A
        }
        static setHeadersGuard(A, Q) {
            A.#A = Q
        }
        static getHeadersList(A) {
            return A.#Q
        }
        static setHeadersList(A, Q) {
            A.#Q = Q
        }
    }
    var {
        getHeadersGuard: ZAB,
        setHeadersGuard: ig8,
        getHeadersList: Vy1,
        setHeadersList: ng8
    } = PH;
    Reflect.deleteProperty(PH, "getHeadersGuard");
    Reflect.deleteProperty(PH, "setHeadersGuard");
    Reflect.deleteProperty(PH, "getHeadersList");
    Reflect.deleteProperty(PH, "setHeadersList");
    lg8("Headers", PH, jw, 0, 1);
    Object.defineProperties(PH.prototype, {
        append: a5A,
        delete: a5A,
        get: a5A,
        has: a5A,
        set: a5A,
        getSetCookie: a5A,
        [Symbol.toStringTag]: {
            value: "Headers",
            configurable: !0
        },
        [kpA.inspect.custom]: {
            enumerable: !1
        }
    });
    B3.converters.HeadersInit = function(A, Q, B) {
        if (B3.util.Type(A) === "Object") {
            let G = Reflect.get(A, Symbol.iterator);
            if (!kpA.types.isProxy(A) && G === PH.prototype.entries) try {
                return Vy1(A).entriesList
            } catch {}
            if (typeof G === "function") return B3.converters["sequence<sequence<ByteString>>"](A, Q, B, G.bind(A));
            return B3.converters["record<ByteString, ByteString>"](A, Q, B)
        }
        throw B3.errors.conversionFailed({
            prefix: "Headers constructor",
            argument: "Argument 1",
            types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"]
        })
    };
    IAB.exports = {
        fill: BAB,
        compareHeaderName: GAB,
        Headers: PH,
        HeadersList: ypA,
        getHeadersGuard: ZAB,
        setHeadersGuard: ig8,
        setHeadersList: ng8,
        getHeadersList: Vy1
    }
});
var wEA = moduleWrapper((hN7, CAB) => {
    var {
        Headers: VAB,
        HeadersList: YAB,
        fill: ag8,
        getHeadersGuard: sg8,
        setHeadersGuard: KAB,
        setHeadersList: DAB
    } = Mo(), {
        extractBody: JAB,
        cloneBody: rg8,
        mixinBody: og8,
        hasFinalizationRegistry: tg8,
        streamRegistry: eg8,
        bodyUnusable: Au8
    } = _5A(), Ky1 = M6(), WAB = nodeRequire("node:util"), {
        kEnumerableProperty: Sw
    } = Ky1, {
        isValidReasonPhrase: Qu8,
        isCancelled: Bu8,
        isAborted: Gu8,
        isBlobLike: Zu8,
        serializeJavascriptValueToJSONString: Iu8,
        isErrorLike: Yu8,
        isomorphicEncode: Ju8,
        environmentSettingsObject: Wu8
    } = Rw(), {
        redirectStatusSet: Xu8,
        nullBodyStatus: Fu8
    } = uCA(), {
        kState: qJ,
        kHeaders: qb
    } = id(), {
        webidl: f8
    } = FD(), {
        FormData: Vu8
    } = lCA(), {
        URLSerializer: XAB
    } = tz(), {
        kConstruct: vpA
    } = iI(), Dy1 = nodeRequire("node:assert"), {
        types: Ku8
    } = nodeRequire("node:util"), Du8 = new TextEncoder("utf-8");
    class jH {
        static error() {
            return $EA(bpA(), "immutable")
        }
        static json(A, Q = {}) {
            if (f8.argumentLengthCheck(arguments, 1, "Response.json"), Q !== null) Q = f8.converters.ResponseInit(Q);
            let B = Du8.encode(Iu8(A)),
                G = JAB(B),
                Z = $EA(s5A({}), "response");
            return FAB(Z, Q, {
                body: G[0],
                type: "application/json"
            }), Z
        }
        static redirect(A, Q = 302) {
            f8.argumentLengthCheck(arguments, 1, "Response.redirect"), A = f8.converters.USVString(A), Q = f8.converters["unsigned short"](Q);
            let B;
            try {
                B = new URL(A, Wu8.settingsObject.baseUrl)
            } catch (I) {
                throw TypeError(`Failed to parse URL from TextComponent{A}`, {
                    cause: I
                })
            }
            if (!Xu8.has(Q)) throw RangeError(`Invalid status code TextComponent{Q}`);
            let G = $EA(s5A({}), "immutable");
            G[qJ].status = Q;
            let Z = Ju8(XAB(B));
            return G[qJ].headersList.append("location", Z, !0), G
        }
        constructor(A = null, Q = {}) {
            if (f8.util.markAsUncloneable(this), A === vpA) return;
            if (A !== null) A = f8.converters.BodyInit(A);
            Q = f8.converters.ResponseInit(Q), this[qJ] = s5A({}), this[qb] = new VAB(vpA), KAB(this[qb], "response"), DAB(this[qb], this[qJ].headersList);
            let B = null;
            if (A != null) {
                let [G, Z] = JAB(A);
                B = {
                    body: G,
                    type: Z
                }
            }
            FAB(this, Q, B)
        }
        get type() {
            return f8.brandCheck(this, jH), this[qJ].type
        }
        get url() {
            f8.brandCheck(this, jH);
            let A = this[qJ].urlList,
                Q = A[A.length - 1] ?? null;
            if (Q === null) return "";
            return XAB(Q, !0)
        }
        get redirected() {
            return f8.brandCheck(this, jH), this[qJ].urlList.length > 1
        }
        get status() {
            return f8.brandCheck(this, jH), this[qJ].status
        }
        get ok() {
            return f8.brandCheck(this, jH), this[qJ].status >= 200 && this[qJ].status <= 299
        }
        get statusText() {
            return f8.brandCheck(this, jH), this[qJ].statusText
        }
        get headers() {
            return f8.brandCheck(this, jH), this[qb]
        }
        get body() {
            return f8.brandCheck(this, jH), this[qJ].body ? this[qJ].body.stream : null
        }
        get bodyUsed() {
            return f8.brandCheck(this, jH), !!this[qJ].body && Ky1.isDisturbed(this[qJ].body.stream)
        }
        clone() {
            if (f8.brandCheck(this, jH), Au8(this)) throw f8.errors.exception({
                header: "Response.clone",
                message: "Body has already been consumed."
            });
            let A = Hy1(this[qJ]);
            return $EA(A, sg8(this[qb]))
        } [WAB.inspect.custom](A, Q) {
            if (Q.depth === null) Q.depth = 2;
            Q.colors ??= !0;
            let B = {
                status: this.status,
                statusText: this.statusText,
                headers: this.headers,
                body: this.body,
                bodyUsed: this.bodyUsed,
                ok: this.ok,
                redirected: this.redirected,
                type: this.type,
                url: this.url
            };
            return `Response TextComponent{WAB.formatWithOptions(Q,B)}`
        }
    }
    og8(jH);
    Object.defineProperties(jH.prototype, {
        type: Sw,
        url: Sw,
        status: Sw,
        ok: Sw,
        redirected: Sw,
        statusText: Sw,
        headers: Sw,
        clone: Sw,
        body: Sw,
        bodyUsed: Sw,
        [Symbol.toStringTag]: {
            value: "Response",
            configurable: !0
        }
    });
    Object.defineProperties(jH, {
        json: Sw,
        redirect: Sw,
        error: Sw
    });

    function Hy1(A) {
        if (A.internalResponse) return HAB(Hy1(A.internalResponse), A.type);
        let Q = s5A({
            ...A,
            body: null
        });
        if (A.body != null) Q.body = rg8(Q, A.body);
        return Q
    }

    function s5A(A) {
        return {
            aborted: !1,
            rangeRequested: !1,
            timingAllowPassed: !1,
            requestIncludesCredentials: !1,
            type: "default",
            status: 200,
            timingInfo: null,
            cacheState: "",
            statusText: "",
            ...A,
            headersList: A?.headersList ? new YAB(A?.headersList) : new YAB,
            urlList: A?.urlList ? [...A.urlList] : []
        }
    }

    function bpA(A) {
        let Q = Yu8(A);
        return s5A({
            type: "error",
            status: 0,
            error: Q ? A : Error(A ? String(A) : A),
            aborted: A && A.name === "AbortError"
        })
    }

    function Hu8(A) {
        return A.type === "error" && A.status === 0
    }

    function xpA(A, Q) {
        return Q = {
            internalResponse: A,
            ...Q
        }, new Proxy(A, {
            get(B, G) {
                return G in Q ? Q[G] : B[G]
            },
            set(B, G, Z) {
                return Dy1(!(G in Q)), B[G] = Z, !0
            }
        })
    }

    function HAB(A, Q) {
        if (Q === "basic") return xpA(A, {
            type: "basic",
            headersList: A.headersList
        });
        else if (Q === "cors") return xpA(A, {
            type: "cors",
            headersList: A.headersList
        });
        else if (Q === "opaque") return xpA(A, {
            type: "opaque",
            urlList: Object.freeze([]),
            status: 0,
            statusText: "",
            body: null
        });
        else if (Q === "opaqueredirect") return xpA(A, {
            type: "opaqueredirect",
            status: 0,
            statusText: "",
            headersList: [],
            body: null
        });
        else Dy1(!1)
    }

    function Cu8(A, Q = null) {
        return Dy1(Bu8(A)), Gu8(A) ? bpA(Object.assign(new DOMException("The operation was aborted.", "AbortError"), {
            cause: Q
        })) : bpA(Object.assign(new DOMException("Request was cancelled."), {
            cause: Q
        }))
    }

    function FAB(A, Q, B) {
        if (Q.status !== null && (Q.status < 200 || Q.status > 599)) throw RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
        if ("statusText" in Q && Q.statusText != null) {
            if (!Qu8(String(Q.statusText))) throw TypeError("Invalid statusText")
        }
        if ("status" in Q && Q.status != null) A[qJ].status = Q.status;
        if ("statusText" in Q && Q.statusText != null) A[qJ].statusText = Q.statusText;
        if ("headers" in Q && Q.headers != null) ag8(A[qb], Q.headers);
        if (B) {
            if (Fu8.includes(A.status)) throw f8.errors.exception({
                header: "Response constructor",
                message: `Invalid response status code TextComponent{A.status}`
            });
            if (A[qJ].body = B.body, B.type != null && !A[qJ].headersList.contains("content-type", !0)) A[qJ].headersList.append("content-type", B.type, !0)
        }
    }

    function $EA(A, Q) {
        let B = new jH(vpA);
        if (B[qJ] = A, B[qb] = new VAB(vpA), DAB(B[qb], A.headersList), KAB(B[qb], Q), tg8 && A.body?.stream) eg8.register(B, new WeakRef(A.body.stream));
        return B
    }
    f8.converters.ReadableStream = f8.interfaceConverter(ReadableStream);
    f8.converters.FormData = f8.interfaceConverter(Vu8);
    f8.converters.URLSearchParams = f8.interfaceConverter(URLSearchParams);
    f8.converters.XMLHttpRequestBodyInit = function(A, Q, B) {
        if (typeof A === "string") return f8.converters.USVString(A, Q, B);
        if (Zu8(A)) return f8.converters.Blob(A, Q, B, {
            strict: !1
        });
        if (ArrayBuffer.isView(A) || Ku8.isArrayBuffer(A)) return f8.converters.BufferSource(A, Q, B);
        if (Ky1.isFormDataLike(A)) return f8.converters.FormData(A, Q, B, {
            strict: !1
        });
        if (A instanceof URLSearchParams) return f8.converters.URLSearchParams(A, Q, B);
        return f8.converters.DOMString(A, Q, B)
    };
    f8.converters.BodyInit = function(A, Q, B) {
        if (A instanceof ReadableStream) return f8.converters.ReadableStream(A, Q, B);
        if (A?.[Symbol.asyncIterator]) return A;
        return f8.converters.XMLHttpRequestBodyInit(A, Q, B)
    };
    f8.converters.ResponseInit = f8.dictionaryConverter([{
        key: "status",
        converter: f8.converters["unsigned short"],
        defaultValue: () => 200
    }, {
        key: "statusText",
        converter: f8.converters.ByteString,
        defaultValue: () => ""
    }, {
        key: "headers",
        converter: f8.converters.HeadersInit
    }]);
    CAB.exports = {
        isNetworkError: Hu8,
        makeNetworkError: bpA,
        makeResponse: s5A,
        makeAppropriateNetworkError: Cu8,
        filterResponse: HAB,
        Response: jH,
        cloneResponse: Hy1,
        fromInnerResponse: $EA
    }
});
var qAB = moduleWrapper((gN7, wAB) => {
    var {
        kConnected: EAB,
        kSize: zAB
    } = iI();
    class UAB {
        constructor(A) {
            this.value = A
        }
        deref() {
            return this.value[EAB] === 0 && this.value[zAB] === 0 ? void 0 : this.value
        }
    }
    class $AB {
        constructor(A) {
            this.finalizer = A
        }
        register(A, Q) {
            if (A.on) A.on("disconnect", () => {
                if (A[EAB] === 0 && A[zAB] === 0) this.finalizer(Q)
            })
        }
        unregister(A) {}
    }
    wAB.exports = function() {
        if (process.env.NODE_V8_COVERAGE && process.version.startsWith("v18")) return process._rawDebug("Using compatibility WeakRef and FinalizationRegistry"), {
            WeakRef: UAB,
            FinalizationRegistry: $AB
        };
        return {
            WeakRef,
            FinalizationRegistry
        }
    }
});