/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_033.js
 * 处理时间: 2025-12-09T03:41:36.705Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  9x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 33/61
 * Lines: 137351 - 138846 (1496 lines)
 * Original file: cli.js
 */

var r5A = U((uN7, bAB) => {
    var {
        extractBody: Eu8,
        mixinBody: zu8,
        cloneBody: Uu8,
        bodyUnusable: NAB
    } = _5A(), {
        Headers: _AB,
        fill: $u8,
        HeadersList: upA,
        setHeadersGuard: Ey1,
        getHeadersGuard: wu8,
        setHeadersList: kAB,
        getHeadersList: LAB
    } = Mo(), {
        FinalizationRegistry: qu8
    } = qAB()(), hpA = M6(), MAB = UA("node:util"), {
        isValidHTTPToken: Nu8,
        sameOrigin: OAB,
        environmentSettingsObject: fpA
    } = Rw(), {
        forbiddenMethodsSet: Lu8,
        corsSafeListedMethodsSet: Mu8,
        referrerPolicy: Ou8,
        requestRedirect: Ru8,
        requestMode: Tu8,
        requestCredentials: Pu8,
        requestCache: ju8,
        requestDuplex: Su8
    } = uCA(), {
        kEnumerableProperty: SX,
        normalizedMethodRecordsBase: _u8,
        normalizedMethodRecords: ku8
    } = hpA, {
        kHeaders: _w,
        kSignal: gpA,
        kState: YI,
        kDispatcher: Cy1
    } = id(), {
        webidl: J4
    } = FD(), {
        URLSerializer: yu8
    } = tz(), {
        kConstruct: mpA
    } = iI(), xu8 = UA("node:assert"), {
        getMaxListeners: RAB,
        setMaxListeners: TAB,
        getEventListeners: vu8,
        defaultMaxListeners: PAB
    } = UA("node:events"), bu8 = Symbol("abortController"), yAB = new qu8(({
        signal: A,
        abort: Q
    }) => {
        A.removeEventListener("abort", Q)
    }), dpA = new WeakMap;

    function jAB(A) {
        return Q;

        function Q() {
            let B = A.deref();
            if (B !== void 0) {
                yAB.unregister(Q), this.removeEventListener("abort", Q), B.abort(this.reason);
                let G = dpA.get(B.signal);
                if (G !== void 0) {
                    if (G.size !== 0) {
                        for (let Z of G) {
                            let I = Z.deref();
                            if (I !== void 0) I.abort(this.reason)
                        }
                        G.clear()
                    }
                    dpA.delete(B.signal)
                }
            }
        }
    }
    var SAB = !1;
    class tG {
        constructor(A, Q = {}) {
            if (J4.util.markAsUncloneable(this), A === mpA) return;
            let B = "Request constructor";
            J4.argumentLengthCheck(arguments, 1, B), A = J4.converters.RequestInfo(A, B, "input"), Q = J4.converters.RequestInit(Q, B, "init");
            let G = null,
                Z = null,
                I = fpA.settingsObject.baseUrl,
                Y = null;
            if (typeof A === "string") {
                this[Cy1] = Q.dispatcher;
                let E;
                try {
                    E = new URL(A, I)
                } catch (z) {
                    throw TypeError("Failed to parse URL from " + A, {
                        cause: z
                    })
                }
                if (E.username || E.password) throw TypeError("Request cannot be constructed from a URL that includes credentials: " + A);
                G = cpA({
                    urlList: [E]
                }), Z = "cors"
            } else this[Cy1] = Q.dispatcher || A[Cy1], xu8(A instanceof tG), G = A[YI], Y = A[gpA];
            let J = fpA.settingsObject.origin,
                W = "client";
            if (G.window?.constructor?.name === "EnvironmentSettingsObject" && OAB(G.window, J)) W = G.window;
            if (Q.window != null) throw TypeError(`'window' option '${W}' must be null`);
            if ("window" in Q) W = "no-window";
            G = cpA({
                method: G.method,
                headersList: G.headersList,
                unsafeRequest: G.unsafeRequest,
                client: fpA.settingsObject,
                window: W,
                priority: G.priority,
                origin: G.origin,
                referrer: G.referrer,
                referrerPolicy: G.referrerPolicy,
                mode: G.mode,
                credentials: G.credentials,
                cache: G.cache,
                redirect: G.redirect,
                integrity: G.integrity,
                keepalive: G.keepalive,
                reloadNavigation: G.reloadNavigation,
                historyNavigation: G.historyNavigation,
                urlList: [...G.urlList]
            });
            let X = Object.keys(Q).length !== 0;
            if (X) {
                if (G.mode === "navigate") G.mode = "same-origin";
                G.reloadNavigation = !1, G.historyNavigation = !1, G.origin = "client", G.referrer = "client", G.referrerPolicy = "", G.url = G.urlList[G.urlList.length - 1], G.urlList = [G.url]
            }
            if (Q.referrer !== void 0) {
                let E = Q.referrer;
                if (E === "") G.referrer = "no-referrer";
                else {
                    let z;
                    try {
                        z = new URL(E, I)
                    } catch (w) {
                        throw TypeError(`Referrer "${E}" is not a valid URL.`, {
                            cause: w
                        })
                    }
                    if (z.protocol === "about:" && z.hostname === "client" || J && !OAB(z, fpA.settingsObject.baseUrl)) G.referrer = "client";
                    else G.referrer = z
                }
            }
            if (Q.referrerPolicy !== void 0) G.referrerPolicy = Q.referrerPolicy;
            let F;
            if (Q.mode !== void 0) F = Q.mode;
            else F = Z;
            if (F === "navigate") throw J4.errors.exception({
                header: "Request constructor",
                message: "invalid request mode navigate."
            });
            if (F != null) G.mode = F;
            if (Q.credentials !== void 0) G.credentials = Q.credentials;
            if (Q.cache !== void 0) G.cache = Q.cache;
            if (G.cache === "only-if-cached" && G.mode !== "same-origin") throw TypeError("'only-if-cached' can be set only with 'same-origin' mode");
            if (Q.redirect !== void 0) G.redirect = Q.redirect;
            if (Q.integrity != null) G.integrity = String(Q.integrity);
            if (Q.keepalive !== void 0) G.keepalive = Boolean(Q.keepalive);
            if (Q.method !== void 0) {
                let E = Q.method,
                    z = ku8[E];
                if (z !== void 0) G.method = z;
                else {
                    if (!Nu8(E)) throw TypeError(`'${E}' is not a valid HTTP method.`);
                    let w = E.toUpperCase();
                    if (Lu8.has(w)) throw TypeError(`'${E}' HTTP method is unsupported.`);
                    E = _u8[w] ?? E, G.method = E
                }
                if (!SAB && G.method === "patch") process.emitWarning("Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.", {
                    code: "UNDICI-FETCH-patch"
                }), SAB = !0
            }
            if (Q.signal !== void 0) Y = Q.signal;
            this[YI] = G;
            let V = new AbortController;
            if (this[gpA] = V.signal, Y != null) {
                if (!Y || typeof Y.aborted !== "boolean" || typeof Y.addEventListener !== "function") throw TypeError("Failed to construct 'Request': member signal is not of type AbortSignal.");
                if (Y.aborted) V.abort(Y.reason);
                else {
                    this[bu8] = V;
                    let E = new WeakRef(V),
                        z = jAB(E);
                    try {
                        if (typeof RAB === "function" && RAB(Y) === PAB) TAB(1500, Y);
                        else if (vu8(Y, "abort").length >= PAB) TAB(1500, Y)
                    } catch {}
                    hpA.addAbortListener(Y, z), yAB.register(V, {
                        signal: Y,
                        abort: z
                    }, z)
                }
            }
            if (this[_w] = new _AB(mpA), kAB(this[_w], G.headersList), Ey1(this[_w], "request"), F === "no-cors") {
                if (!Mu8.has(G.method)) throw TypeError(`'${G.method} is unsupported in no-cors mode.`);
                Ey1(this[_w], "request-no-cors")
            }
            if (X) {
                let E = LAB(this[_w]),
                    z = Q.headers !== void 0 ? Q.headers : new upA(E);
                if (E.clear(), z instanceof upA) {
                    for (let {
                            name: w,
                            value: N
                        }
                        of z.rawValues()) E.append(w, N, !1);
                    E.cookies = z.cookies
                } else $u8(this[_w], z)
            }
            let K = A instanceof tG ? A[YI].body : null;
            if ((Q.body != null || K != null) && (G.method === "GET" || G.method === "HEAD")) throw TypeError("Request with GET/HEAD method cannot have body.");
            let D = null;
            if (Q.body != null) {
                let [E, z] = Eu8(Q.body, G.keepalive);
                if (D = E, z && !LAB(this[_w]).contains("content-type", !0)) this[_w].append("content-type", z)
            }
            let H = D ?? K;
            if (H != null && H.source == null) {
                if (D != null && Q.duplex == null) throw TypeError("RequestInit: duplex option is required when sending a body.");
                if (G.mode !== "same-origin" && G.mode !== "cors") throw TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
                G.useCORSPreflightFlag = !0
            }
            let C = H;
            if (D == null && K != null) {
                if (NAB(A)) throw TypeError("Cannot construct a Request with a Request object that has already been used.");
                let E = new TransformStream;
                K.stream.pipeThrough(E), C = {
                    source: K.source,
                    length: K.length,
                    stream: E.readable
                }
            }
            this[YI].body = C
        }
        get method() {
            return J4.brandCheck(this, tG), this[YI].method
        }
        get url() {
            return J4.brandCheck(this, tG), yu8(this[YI].url)
        }
        get headers() {
            return J4.brandCheck(this, tG), this[_w]
        }
        get destination() {
            return J4.brandCheck(this, tG), this[YI].destination
        }
        get referrer() {
            if (J4.brandCheck(this, tG), this[YI].referrer === "no-referrer") return "";
            if (this[YI].referrer === "client") return "about:client";
            return this[YI].referrer.toString()
        }
        get referrerPolicy() {
            return J4.brandCheck(this, tG), this[YI].referrerPolicy
        }
        get mode() {
            return J4.brandCheck(this, tG), this[YI].mode
        }
        get credentials() {
            return this[YI].credentials
        }
        get cache() {
            return J4.brandCheck(this, tG), this[YI].cache
        }
        get redirect() {
            return J4.brandCheck(this, tG), this[YI].redirect
        }
        get integrity() {
            return J4.brandCheck(this, tG), this[YI].integrity
        }
        get keepalive() {
            return J4.brandCheck(this, tG), this[YI].keepalive
        }
        get isReloadNavigation() {
            return J4.brandCheck(this, tG), this[YI].reloadNavigation
        }
        get isHistoryNavigation() {
            return J4.brandCheck(this, tG), this[YI].historyNavigation
        }
        get signal() {
            return J4.brandCheck(this, tG), this[gpA]
        }
        get body() {
            return J4.brandCheck(this, tG), this[YI].body ? this[YI].body.stream : null
        }
        get bodyUsed() {
            return J4.brandCheck(this, tG), !!this[YI].body && hpA.isDisturbed(this[YI].body.stream)
        }
        get duplex() {
            return J4.brandCheck(this, tG), "half"
        }
        clone() {
            if (J4.brandCheck(this, tG), NAB(this)) throw TypeError("unusable");
            let A = xAB(this[YI]),
                Q = new AbortController;
            if (this.signal.aborted) Q.abort(this.signal.reason);
            else {
                let B = dpA.get(this.signal);
                if (B === void 0) B = new Set, dpA.set(this.signal, B);
                let G = new WeakRef(Q);
                B.add(G), hpA.addAbortListener(Q.signal, jAB(G))
            }
            return vAB(A, Q.signal, wu8(this[_w]))
        } [MAB.inspect.custom](A, Q) {
            if (Q.depth === null) Q.depth = 2;
            Q.colors ??= !0;
            let B = {
                method: this.method,
                url: this.url,
                headers: this.headers,
                destination: this.destination,
                referrer: this.referrer,
                referrerPolicy: this.referrerPolicy,
                mode: this.mode,
                credentials: this.credentials,
                cache: this.cache,
                redirect: this.redirect,
                integrity: this.integrity,
                keepalive: this.keepalive,
                isReloadNavigation: this.isReloadNavigation,
                isHistoryNavigation: this.isHistoryNavigation,
                signal: this.signal
            };
            return `Request ${MAB.formatWithOptions(Q,B)}`
        }
    }
    zu8(tG);

    function cpA(A) {
        return {
            method: A.method ?? "GET",
            localURLsOnly: A.localURLsOnly ?? !1,
            unsafeRequest: A.unsafeRequest ?? !1,
            body: A.body ?? null,
            client: A.client ?? null,
            reservedClient: A.reservedClient ?? null,
            replacesClientId: A.replacesClientId ?? "",
            window: A.window ?? "client",
            keepalive: A.keepalive ?? !1,
            serviceWorkers: A.serviceWorkers ?? "all",
            initiator: A.initiator ?? "",
            destination: A.destination ?? "",
            priority: A.priority ?? null,
            origin: A.origin ?? "client",
            policyContainer: A.policyContainer ?? "client",
            referrer: A.referrer ?? "client",
            referrerPolicy: A.referrerPolicy ?? "",
            mode: A.mode ?? "no-cors",
            useCORSPreflightFlag: A.useCORSPreflightFlag ?? !1,
            credentials: A.credentials ?? "same-origin",
            useCredentials: A.useCredentials ?? !1,
            cache: A.cache ?? "default",
            redirect: A.redirect ?? "follow",
            integrity: A.integrity ?? "",
            cryptoGraphicsNonceMetadata: A.cryptoGraphicsNonceMetadata ?? "",
            parserMetadata: A.parserMetadata ?? "",
            reloadNavigation: A.reloadNavigation ?? !1,
            historyNavigation: A.historyNavigation ?? !1,
            userActivation: A.userActivation ?? !1,
            taintedOrigin: A.taintedOrigin ?? !1,
            redirectCount: A.redirectCount ?? 0,
            responseTainting: A.responseTainting ?? "basic",
            preventNoCacheCacheControlHeaderModification: A.preventNoCacheCacheControlHeaderModification ?? !1,
            done: A.done ?? !1,
            timingAllowFailed: A.timingAllowFailed ?? !1,
            urlList: A.urlList,
            url: A.urlList[0],
            headersList: A.headersList ? new upA(A.headersList) : new upA
        }
    }

    function xAB(A) {
        let Q = cpA({
            ...A,
            body: null
        });
        if (A.body != null) Q.body = Uu8(Q, A.body);
        return Q
    }

    function vAB(A, Q, B) {
        let G = new tG(mpA);
        return G[YI] = A, G[gpA] = Q, G[_w] = new _AB(mpA), kAB(G[_w], A.headersList), Ey1(G[_w], B), G
    }
    Object.defineProperties(tG.prototype, {
        method: SX,
        url: SX,
        headers: SX,
        redirect: SX,
        clone: SX,
        signal: SX,
        duplex: SX,
        destination: SX,
        body: SX,
        bodyUsed: SX,
        isHistoryNavigation: SX,
        isReloadNavigation: SX,
        keepalive: SX,
        integrity: SX,
        cache: SX,
        credentials: SX,
        attribute: SX,
        referrerPolicy: SX,
        referrer: SX,
        mode: SX,
        [Symbol.toStringTag]: {
            value: "Request",
            configurable: !0
        }
    });
    J4.converters.Request = J4.interfaceConverter(tG);
    J4.converters.RequestInfo = function(A, Q, B) {
        if (typeof A === "string") return J4.converters.USVString(A, Q, B);
        if (A instanceof tG) return J4.converters.Request(A, Q, B);
        return J4.converters.USVString(A, Q, B)
    };
    J4.converters.AbortSignal = J4.interfaceConverter(AbortSignal);
    J4.converters.RequestInit = J4.dictionaryConverter([{
        key: "method",
        converter: J4.converters.ByteString
    }, {
        key: "headers",
        converter: J4.converters.HeadersInit
    }, {
        key: "body",
        converter: J4.nullableConverter(J4.converters.BodyInit)
    }, {
        key: "referrer",
        converter: J4.converters.USVString
    }, {
        key: "referrerPolicy",
        converter: J4.converters.DOMString,
        allowedValues: Ou8
    }, {
        key: "mode",
        converter: J4.converters.DOMString,
        allowedValues: Tu8
    }, {
        key: "credentials",
        converter: J4.converters.DOMString,
        allowedValues: Pu8
    }, {
        key: "cache",
        converter: J4.converters.DOMString,
        allowedValues: ju8
    }, {
        key: "redirect",
        converter: J4.converters.DOMString,
        allowedValues: Ru8
    }, {
        key: "integrity",
        converter: J4.converters.DOMString
    }, {
        key: "keepalive",
        converter: J4.converters.boolean
    }, {
        key: "signal",
        converter: J4.nullableConverter((A) => J4.converters.AbortSignal(A, "RequestInit", "signal", {
            strict: !1
        }))
    }, {
        key: "window",
        converter: J4.converters.any
    }, {
        key: "duplex",
        converter: J4.converters.DOMString,
        allowedValues: Su8
    }, {
        key: "dispatcher",
        converter: J4.converters.any
    }]);
    bAB.exports = {
        Request: tG,
        makeRequest: cpA,
        fromInnerRequest: vAB,
        cloneRequest: xAB
    }
});
var NEA = U((mN7, oAB) => {
    var {
        makeNetworkError: AG,
        makeAppropriateNetworkError: ppA,
        filterResponse: zy1,
        makeResponse: lpA,
        fromInnerResponse: fu8
    } = wEA(), {
        HeadersList: fAB
    } = Mo(), {
        Request: hu8,
        cloneRequest: gu8
    } = r5A(), Gc = UA("node:zlib"), {
        bytesMatch: uu8,
        makePolicyContainer: mu8,
        clonePolicyContainer: du8,
        requestBadPort: cu8,
        TAOCheck: pu8,
        appendRequestOriginHeader: lu8,
        responseLocationURL: iu8,
        requestCurrentURL: B_,
        setRequestReferrerPolicyOnRedirect: nu8,
        tryUpgradeRequestToAPotentiallyTrustworthyURL: au8,
        createOpaqueTimingInfo: Ny1,
        appendFetchMetadata: su8,
        corsCheck: ru8,
        crossOriginResourcePolicyCheck: ou8,
        determineRequestsReferrer: tu8,
        coarsenedSharedCurrentTime: qEA,
        createDeferredPromise: eu8,
        isBlobLike: Am8,
        sameOrigin: qy1,
        isCancelled: Oo,
        isAborted: hAB,
        isErrorLike: Qm8,
        fullyReadBody: Bm8,
        readableStreamClose: Gm8,
        isomorphicEncode: ipA,
        urlIsLocal: Zm8,
        urlIsHttpHttpsScheme: Ly1,
        urlHasHttpsScheme: Im8,
        clampAndCoarsenConnectionTimingInfo: Ym8,
        simpleRangeHeaderValue: Jm8,
        buildContentRange: Wm8,
        createInflate: Xm8,
        extractMimeType: Fm8
    } = Rw(), {
        kState: dAB,
        kDispatcher: Vm8
    } = id(), Ro = UA("node:assert"), {
        safelyExtractBody: My1,
        extractBody: gAB
    } = _5A(), {
        redirectStatusSet: cAB,
        nullBodyStatus: pAB,
        safeMethodsSet: Km8,
        requestBodyHeader: Dm8,
        subresourceSet: Hm8
    } = uCA(), Cm8 = UA("node:events"), {
        Readable: Em8,
        pipeline: zm8,
        finished: Um8
    } = UA("node:stream"), {
        addAbortListener: $m8,
        isErrored: wm8,
        isReadable: npA,
        bufferToLowerCasedHeaderName: uAB
    } = M6(), {
        dataURLProcessor: qm8,
        serializeAMimeType: Nm8,
        minimizeSupportedMimeType: Lm8
    } = tz(), {
        getGlobalDispatcher: Mm8
    } = SpA(), {
        webidl: Om8
    } = FD(), {
        STATUS_CODES: Rm8
    } = UA("node:http"), Tm8 = ["GET", "HEAD"], Pm8 = typeof __UNDICI_IS_NODE__ < "u" || typeof esbuildDetection < "u" ? "node" : "undici", Uy1;
    class Oy1 extends Cm8 {
        constructor(A) {
            super();
            this.dispatcher = A, this.connection = null, this.dump = !1, this.state = "ongoing"
        }
        terminate(A) {
            if (this.state !== "ongoing") return;
            this.state = "terminated", this.connection?.destroy(A), this.emit("terminated", A)
        }
        abort(A) {
            if (this.state !== "ongoing") return;
            if (this.state = "aborted", !A) A = new DOMException("The operation was aborted.", "AbortError");
            this.serializedAbortReason = A, this.connection?.destroy(A), this.emit("terminated", A)
        }
    }

    function jm8(A) {
        lAB(A, "fetch")
    }

    function Sm8(A, Q = void 0) {
        Om8.argumentLengthCheck(arguments, 1, "globalThis.fetch");
        let B = eu8(),
            G;
        try {
            G = new hu8(A, Q)
        } catch (F) {
            return B.reject(F), B.promise
        }
        let Z = G[dAB];
        if (G.signal.aborted) return $y1(B, Z, null, G.signal.reason), B.promise;
        if (Z.client.globalObject?.constructor?.name === "ServiceWorkerGlobalScope") Z.serviceWorkers = "none";
        let Y = null,
            J = !1,
            W = null;
        return $m8(G.signal, () => {
            J = !0, Ro(W != null), W.abort(G.signal.reason);
            let F = Y?.deref();
            $y1(B, Z, F, G.signal.reason)
        }), W = nAB({
            request: Z,
            processResponseEndOfBody: jm8,
            processResponse: (F) => {
                if (J) return;
                if (F.aborted) {
                    $y1(B, Z, Y, W.serializedAbortReason);
                    return
                }
                if (F.type === "error") {
                    B.reject(TypeError("fetch failed", {
                        cause: F.error
                    }));
                    return
                }
                Y = new WeakRef(fu8(F, "immutable")), B.resolve(Y.deref()), B = null
            },
            dispatcher: G[Vm8]
        }), B.promise
    }

    function lAB(A, Q = "other") {
        if (A.type === "error" && A.aborted) return;
        if (!A.urlList?.length) return;
        let B = A.urlList[0],
            G = A.timingInfo,
            Z = A.cacheState;
        if (!Ly1(B)) return;
        if (G === null) return;
        if (!A.timingAllowPassed) G = Ny1({
            startTime: G.startTime
        }), Z = "";
        G.endTime = qEA(), A.timingInfo = G, iAB(G, B.href, Q, globalThis, Z)
    }
    var iAB = performance.markResourceTiming;

    function $y1(A, Q, B, G) {
        if (A) A.reject(G);
        if (Q.body != null && npA(Q.body?.stream)) Q.body.stream.cancel(G).catch((I) => {
            if (I.code === "ERR_INVALID_STATE") return;
            throw I
        });
        if (B == null) return;
        let Z = B[dAB];
        if (Z.body != null && npA(Z.body?.stream)) Z.body.stream.cancel(G).catch((I) => {
            if (I.code === "ERR_INVALID_STATE") return;
            throw I
        })
    }

    function nAB({
        request: A,
        processRequestBodyChunkLength: Q,
        processRequestEndOfBody: B,
        processResponse: G,
        processResponseEndOfBody: Z,
        processResponseConsumeBody: I,
        useParallelQueue: Y = !1,
        dispatcher: J = Mm8()
    }) {
        Ro(J);
        let W = null,
            X = !1;
        if (A.client != null) W = A.client.globalObject, X = A.client.crossOriginIsolatedCapability;
        let F = qEA(X),
            V = Ny1({
                startTime: F
            }),
            K = {
                controller: new Oy1(J),
                request: A,
                timingInfo: V,
                processRequestBodyChunkLength: Q,
                processRequestEndOfBody: B,
                processResponse: G,
                processResponseConsumeBody: I,
                processResponseEndOfBody: Z,
                taskDestination: W,
                crossOriginIsolatedCapability: X
            };
        if (Ro(!A.body || A.body.stream), A.window === "client") A.window = A.client?.globalObject?.constructor?.name === "Window" ? A.client : "no-window";
        if (A.origin === "client") A.origin = A.client.origin;
        if (A.policyContainer === "client")
            if (A.client != null) A.policyContainer = du8(A.client.policyContainer);
            else A.policyContainer = mu8();
        if (!A.headersList.contains("accept", !0)) A.headersList.append("accept", "*/*", !0);
        if (!A.headersList.contains("accept-language", !0)) A.headersList.append("accept-language", "*", !0);
        if (A.priority === null);
        if (Hm8.has(A.destination));
        return aAB(K).catch((D) => {
            K.controller.terminate(D)
        }), K.controller
    }
    async function aAB(A, Q = !1) {
        let B = A.request,
            G = null;
        if (B.localURLsOnly && !Zm8(B_(B))) G = AG("local URLs only");
        if (au8(B), cu8(B) === "blocked") G = AG("bad port");
        if (B.referrerPolicy === "") B.referrerPolicy = B.policyContainer.referrerPolicy;
        if (B.referrer !== "no-referrer") B.referrer = tu8(B);
        if (G === null) G = await (async () => {
            let I = B_(B);
            if (qy1(I, B.url) && B.responseTainting === "basic" || I.protocol === "data:" || (B.mode === "navigate" || B.mode === "websocket")) return B.responseTainting = "basic", await mAB(A);
            if (B.mode === "same-origin") return AG('request mode cannot be "same-origin"');
            if (B.mode === "no-cors") {
                if (B.redirect !== "follow") return AG('redirect mode cannot be "follow" for "no-cors" request');
                return B.responseTainting = "opaque", await mAB(A)
            }
            if (!Ly1(B_(B))) return AG("URL scheme must be a HTTP(S) scheme");
            return B.responseTainting = "cors", await sAB(A)
        })();
        if (Q) return G;
        if (G.status !== 0 && !G.internalResponse) {
            if (B.responseTainting === "cors");
            if (B.responseTainting === "basic") G = zy1(G, "basic");
            else if (B.responseTainting === "cors") G = zy1(G, "cors");
            else if (B.responseTainting === "opaque") G = zy1(G, "opaque");
            else Ro(!1)
        }
        let Z = G.status === 0 ? G : G.internalResponse;
        if (Z.urlList.length === 0) Z.urlList.push(...B.urlList);
        if (!B.timingAllowFailed) G.timingAllowPassed = !0;
        if (G.type === "opaque" && Z.status === 206 && Z.rangeRequested && !B.headers.contains("range", !0)) G = Z = AG();
        if (G.status !== 0 && (B.method === "HEAD" || B.method === "CONNECT" || pAB.includes(Z.status))) Z.body = null, A.controller.dump = !0;
        if (B.integrity) {
            let I = (J) => wy1(A, AG(J));
            if (B.responseTainting === "opaque" || G.body == null) {
                I(G.error);
                return
            }
            let Y = (J) => {
                if (!uu8(J, B.integrity)) {
                    I("integrity mismatch");
                    return
                }
                G.body = My1(J)[0], wy1(A, G)
            };
            await Bm8(G.body, Y, I)
        } else wy1(A, G)
    }

    function mAB(A) {
        if (Oo(A) && A.request.redirectCount === 0) return Promise.resolve(ppA(A));
        let {
            request: Q
        } = A, {
            protocol: B
        } = B_(Q);
        switch (B) {
            case "about:":
                return Promise.resolve(AG("about scheme is not supported"));
            case "blob:": {
                if (!Uy1) Uy1 = UA("node:buffer").resolveObjectURL;
                let G = B_(Q);
                if (G.search.length !== 0) return Promise.resolve(AG("NetworkError when attempting to fetch resource."));
                let Z = Uy1(G.toString());
                if (Q.method !== "GET" || !Am8(Z)) return Promise.resolve(AG("invalid method"));
                let I = lpA(),
                    Y = Z.size,
                    J = ipA(`${Y}`),
                    W = Z.type;
                if (!Q.headersList.contains("range", !0)) {
                    let X = gAB(Z);
                    I.statusText = "OK", I.body = X[0], I.headersList.set("content-length", J, !0), I.headersList.set("content-type", W, !0)
                } else {
                    I.rangeRequested = !0;
                    let X = Q.headersList.get("range", !0),
                        F = Jm8(X, !0);
                    if (F === "failure") return Promise.resolve(AG("failed to fetch the data URL"));
                    let {
                        rangeStartValue: V,
                        rangeEndValue: K
                    } = F;
                    if (V === null) V = Y - K, K = V + K - 1;
                    else {
                        if (V >= Y) return Promise.resolve(AG("Range start is greater than the blob's size."));
                        if (K === null || K >= Y) K = Y - 1
                    }
                    let D = Z.slice(V, K, W),
                        H = gAB(D);
                    I.body = H[0];
                    let C = ipA(`${D.size}`),
                        E = Wm8(V, K, Y);
                    I.status = 206, I.statusText = "Partial Content", I.headersList.set("content-length", C, !0), I.headersList.set("content-type", W, !0), I.headersList.set("content-range", E, !0)
                }
                return Promise.resolve(I)
            }
            case "data:": {
                let G = B_(Q),
                    Z = qm8(G);
                if (Z === "failure") return Promise.resolve(AG("failed to fetch the data URL"));
                let I = Nm8(Z.mimeType);
                return Promise.resolve(lpA({
                    statusText: "OK",
                    headersList: [
                        ["content-type", {
                            name: "Content-Type",
                            value: I
                        }]
                    ],
                    body: My1(Z.body)[0]
                }))
            }
            case "file:":
                return Promise.resolve(AG("not implemented... yet..."));
            case "http:":
            case "https:":
                return sAB(A).catch((G) => AG(G));
            default:
                return Promise.resolve(AG("unknown scheme"))
        }
    }

    function _m8(A, Q) {
        if (A.request.done = !0, A.processResponseDone != null) queueMicrotask(() => A.processResponseDone(Q))
    }

    function wy1(A, Q) {
        let B = A.timingInfo,
            G = () => {
                let I = Date.now();
                if (A.request.destination === "document") A.controller.fullTimingInfo = B;
                A.controller.reportTimingSteps = () => {
                    if (A.request.url.protocol !== "https:") return;
                    B.endTime = I;
                    let {
                        cacheState: J,
                        bodyInfo: W
                    } = Q;
                    if (!Q.timingAllowPassed) B = Ny1(B), J = "";
                    let X = 0;
                    if (A.request.mode !== "navigator" || !Q.hasCrossOriginRedirects) {
                        X = Q.status;
                        let F = Fm8(Q.headersList);
                        if (F !== "failure") W.contentType = Lm8(F)
                    }
                    if (A.request.initiatorType != null) iAB(B, A.request.url.href, A.request.initiatorType, globalThis, J, W, X)
                };
                let Y = () => {
                    if (A.request.done = !0, A.processResponseEndOfBody != null) queueMicrotask(() => A.processResponseEndOfBody(Q));
                    if (A.request.initiatorType != null) A.controller.reportTimingSteps()
                };
                queueMicrotask(() => Y())
            };
        if (A.processResponse != null) queueMicrotask(() => {
            A.processResponse(Q), A.processResponse = null
        });
        let Z = Q.type === "error" ? Q : Q.internalResponse ?? Q;
        if (Z.body == null) G();
        else Um8(Z.body.stream, () => {
            G()
        })
    }
    async function sAB(A) {
        let Q = A.request,
            B = null,
            G = null,
            Z = A.timingInfo;
        if (Q.serviceWorkers === "all");
        if (B === null) {
            if (Q.redirect === "follow") Q.serviceWorkers = "none";
            if (G = B = await rAB(A), Q.responseTainting === "cors" && ru8(Q, B) === "failure") return AG("cors failure");
            if (pu8(Q, B) === "failure") Q.timingAllowFailed = !0
        }
        if ((Q.responseTainting === "opaque" || B.type === "opaque") && ou8(Q.origin, Q.client, Q.destination, G) === "blocked") return AG("blocked");
        if (cAB.has(G.status)) {
            if (Q.redirect !== "manual") A.controller.connection.destroy(void 0, !1);
            if (Q.redirect === "error") B = AG("unexpected redirect");
            else if (Q.redirect === "manual") B = G;
            else if (Q.redirect === "follow") B = await km8(A, B);
            else Ro(!1)
        }
        return B.timingInfo = Z, B
    }

    function km8(A, Q) {
        let B = A.request,
            G = Q.internalResponse ? Q.internalResponse : Q,
            Z;
        try {
            if (Z = iu8(G, B_(B).hash), Z == null) return Q
        } catch (Y) {
            return Promise.resolve(AG(Y))
        }
        if (!Ly1(Z)) return Promise.resolve(AG("URL scheme must be a HTTP(S) scheme"));
        if (B.redirectCount === 20) return Promise.resolve(AG("redirect count exceeded"));
        if (B.redirectCount += 1, B.mode === "cors" && (Z.username || Z.password) && !qy1(B, Z)) return Promise.resolve(AG('cross origin not allowed for request mode "cors"'));
        if (B.responseTainting === "cors" && (Z.username || Z.password)) return Promise.resolve(AG('URL cannot contain credentials for request mode "cors"'));
        if (G.status !== 303 && B.body != null && B.body.source == null) return Promise.resolve(AG());
        if ([301, 302].includes(G.status) && B.method === "POST" || G.status === 303 && !Tm8.includes(B.method)) {
            B.method = "GET", B.body = null;
            for (let Y of Dm8) B.headersList.delete(Y)
        }
        if (!qy1(B_(B), Z)) B.headersList.delete("authorization", !0), B.headersList.delete("proxy-authorization", !0), B.headersList.delete("cookie", !0), B.headersList.delete("host", !0);
        if (B.body != null) Ro(B.body.source != null), B.body = My1(B.body.source)[0];
        let I = A.timingInfo;
        if (I.redirectEndTime = I.postRedirectStartTime = qEA(A.crossOriginIsolatedCapability), I.redirectStartTime === 0) I.redirectStartTime = I.startTime;
        return B.urlList.push(Z), nu8(B, G), aAB(A, !0)
    }
    async function rAB(A, Q = !1, B = !1) {
        let G = A.request,
            Z = null,
            I = null,
            Y = null,
            J = null,
            W = !1;
        if (G.window === "no-window" && G.redirect === "error") Z = A, I = G;
        else I = gu8(G), Z = {
            ...A
        }, Z.request = I;
        let X = G.credentials === "include" || G.credentials === "same-origin" && G.responseTainting === "basic",
            F = I.body ? I.body.length : null,
            V = null;
        if (I.body == null && ["POST", "PUT"].includes(I.method)) V = "0";
        if (F != null) V = ipA(`${F}`);
        if (V != null) I.headersList.append("content-length", V, !0);
        if (F != null && I.keepalive);
        if (I.referrer instanceof URL) I.headersList.append("referer", ipA(I.referrer.href), !0);
        if (lu8(I), su8(I), !I.headersList.contains("user-agent", !0)) I.headersList.append("user-agent", Pm8);
        if (I.cache === "default" && (I.headersList.contains("if-modified-since", !0) || I.headersList.contains("if-none-match", !0) || I.headersList.contains("if-unmodified-since", !0) || I.headersList.contains("if-match", !0) || I.headersList.contains("if-range", !0))) I.cache = "no-store";
        if (I.cache === "no-cache" && !I.preventNoCacheCacheControlHeaderModification && !I.headersList.contains("cache-control", !0)) I.headersList.append("cache-control", "max-age=0", !0);
        if (I.cache === "no-store" || I.cache === "reload") {
            if (!I.headersList.contains("pragma", !0)) I.headersList.append("pragma", "no-cache", !0);
            if (!I.headersList.contains("cache-control", !0)) I.headersList.append("cache-control", "no-cache", !0)
        }
        if (I.headersList.contains("range", !0)) I.headersList.append("accept-encoding", "identity", !0);
        if (!I.headersList.contains("accept-encoding", !0))
            if (Im8(B_(I))) I.headersList.append("accept-encoding", "br, gzip, deflate", !0);
            else I.headersList.append("accept-encoding", "gzip, deflate", !0);
        if (I.headersList.delete("host", !0), J == null) I.cache = "no-store";
        if (I.cache !== "no-store" && I.cache !== "reload");
        if (Y == null) {
            if (I.cache === "only-if-cached") return AG("only if cached");
            let K = await ym8(Z, X, B);
            if (!Km8.has(I.method) && K.status >= 200 && K.status <= 399);
            if (W && K.status === 304);
            if (Y == null) Y = K
        }
        if (Y.urlList = [...I.urlList], I.headersList.contains("range", !0)) Y.rangeRequested = !0;
        if (Y.requestIncludesCredentials = X, Y.status === 407) {
            if (G.window === "no-window") return AG();
            if (Oo(A)) return ppA(A);
            return AG("proxy authentication required")
        }
        if (Y.status === 421 && !B && (G.body == null || G.body.source != null)) {
            if (Oo(A)) return ppA(A);
            A.controller.connection.destroy(), Y = await rAB(A, Q, !0)
        }
        return Y
    }
    async function ym8(A, Q = !1, B = !1) {
        Ro(!A.controller.connection || A.controller.connection.destroyed), A.controller.connection = {
            abort: null,
            destroyed: !1,
            destroy(H, C = !0) {
                if (!this.destroyed) {
                    if (this.destroyed = !0, C) this.abort?.(H ?? new DOMException("The operation was aborted.", "AbortError"))
                }
            }
        };
        let G = A.request,
            Z = null,
            I = A.timingInfo;
        if (!0) G.cache = "no-store";
        let J = B ? "yes" : "no";
        if (G.mode === "websocket");
        let W = null;
        if (G.body == null && A.processRequestEndOfBody) queueMicrotask(() => A.processRequestEndOfBody());
        else if (G.body != null) {
            let H = async function*(z) {
                if (Oo(A)) return;
                yield z, A.processRequestBodyChunkLength?.(z.byteLength)
            }, C = () => {
                if (Oo(A)) return;
                if (A.processRequestEndOfBody) A.processRequestEndOfBody()
            }, E = (z) => {
                if (Oo(A)) return;
                if (z.name === "AbortError") A.controller.abort();
                else A.controller.terminate(z)
            };
            W = async function*() {
                try {
                    for await (let z of G.body.stream) yield* H(z);
                    C()
                } catch (z) {
                    E(z)
                }
            }()
        }
        try {
            let {
                body: H,
                status: C,
                statusText: E,
                headersList: z,
                socket: w
            } = await D({
                body: W
            });
            if (w) Z = lpA({
                status: C,
                statusText: E,
                headersList: z,
                socket: w
            });
            else {
                let N = H[Symbol.asyncIterator]();
                A.controller.next = () => N.next(), Z = lpA({
                    status: C,
                    statusText: E,
                    headersList: z
                })
            }
        } catch (H) {
            if (H.name === "AbortError") return A.controller.connection.destroy(), ppA(A, H);
            return AG(H)
        }
        let X = async () => {
            await A.controller.resume()
        }, F = (H) => {
            if (!Oo(A)) A.controller.abort(H)
        }, V = new ReadableStream({
            async start(H) {
                A.controller.controller = H
            },
            async pull(H) {
                await X(H)
            },
            async cancel(H) {
                await F(H)
            },
            type: "bytes"
        });
        Z.body = {
            stream: V,
            source: null,
            length: null
        }, A.controller.onAborted = K, A.controller.on("terminated", K), A.controller.resume = async () => {
            while (!0) {
                let H, C;
                try {
                    let {
                        done: z,
                        value: w
                    } = await A.controller.next();
                    if (hAB(A)) break;
                    H = z ? void 0 : w
                } catch (z) {
                    if (A.controller.ended && !I.encodedBodySize) H = void 0;
                    else H = z, C = !0
                }
                if (H === void 0) {
                    Gm8(A.controller.controller), _m8(A, Z);
                    return
                }
                if (I.decodedBodySize += H?.byteLength ?? 0, C) {
                    A.controller.terminate(H);
                    return
                }
                let E = new Uint8Array(H);
                if (E.byteLength) A.controller.controller.enqueue(E);
                if (wm8(V)) {
                    A.controller.terminate();
                    return
                }
                if (A.controller.controller.desiredSize <= 0) return
            }
        };

        function K(H) {
            if (hAB(A)) {
                if (Z.aborted = !0, npA(V)) A.controller.controller.error(A.controller.serializedAbortReason)
            } else if (npA(V)) A.controller.controller.error(TypeError("terminated", {
                cause: Qm8(H) ? H : void 0
            }));
            A.controller.connection.destroy()
        }
        return Z;

        function D({
            body: H
        }) {
            let C = B_(G),
                E = A.controller.dispatcher;
            return new Promise((z, w) => E.dispatch({
                path: C.pathname + C.search,
                origin: C.origin,
                method: G.method,
                body: E.isMockActive ? G.body && (G.body.source || G.body.stream) : H,
                headers: G.headersList.entries,
                maxRedirections: 0,
                upgrade: G.mode === "websocket" ? "websocket" : void 0
            }, {
                body: null,
                abort: null,
                onConnect(N) {
                    let {
                        connection: q
                    } = A.controller;
                    if (I.finalConnectionTimingInfo = Ym8(void 0, I.postRedirectStartTime, A.crossOriginIsolatedCapability), q.destroyed) N(new DOMException("The operation was aborted.", "AbortError"));
                    else A.controller.on("terminated", N), this.abort = q.abort = N;
                    I.finalNetworkRequestStartTime = qEA(A.crossOriginIsolatedCapability)
                },
                onResponseStarted() {
                    I.finalNetworkResponseStartTime = qEA(A.crossOriginIsolatedCapability)
                },
                onHeaders(N, q, R, P) {
                    if (N < 200) return;
                    let y = [],
                        v = "",
                        x = new fAB;
                    for (let k = 0; k < q.length; k += 2) x.append(uAB(q[k]), q[k + 1].toString("latin1"), !0);
                    let p = x.get("content-encoding", !0);
                    if (p) y = p.toLowerCase().split(",").map((k) => k.trim());
                    v = x.get("location", !0), this.body = new Em8({
                        read: R
                    });
                    let u = [],
                        o = v && G.redirect === "follow" && cAB.has(N);
                    if (y.length !== 0 && G.method !== "HEAD" && G.method !== "CONNECT" && !pAB.includes(N) && !o)
                        for (let k = y.length - 1; k >= 0; --k) {
                            let d = y[k];
                            if (d === "x-gzip" || d === "gzip") u.push(Gc.createGunzip({
                                flush: Gc.constants.Z_SYNC_FLUSH,
                                finishFlush: Gc.constants.Z_SYNC_FLUSH
                            }));
                            else if (d === "deflate") u.push(Xm8({
                                flush: Gc.constants.Z_SYNC_FLUSH,
                                finishFlush: Gc.constants.Z_SYNC_FLUSH
                            }));
                            else if (d === "br") u.push(Gc.createBrotliDecompress({
                                flush: Gc.constants.BROTLI_OPERATION_FLUSH,
                                finishFlush: Gc.constants.BROTLI_OPERATION_FLUSH
                            }));
                            else {
                                u.length = 0;
                                break
                            }
                        }
                    let l = this.onError.bind(this);
                    return z({
                        status: N,
                        statusText: P,
                        headersList: x,
                        body: u.length ? zm8(this.body, ...u, (k) => {
                            if (k) this.onError(k)
                        }).on("error", l) : this.body.on("error", l)
                    }), !0
                },
                onData(N) {
                    if (A.controller.dump) return;
                    let q = N;
                    return I.encodedBodySize += q.byteLength, this.body.push(q)
                },
                onComplete() {
                    if (this.abort) A.controller.off("terminated", this.abort);
                    if (A.controller.onAborted) A.controller.off("terminated", A.controller.onAborted);
                    A.controller.ended = !0, this.body.push(null)
                },
                onError(N) {
                    if (this.abort) A.controller.off("terminated", this.abort);
                    this.body?.destroy(N), A.controller.terminate(N), w(N)
                },
                onUpgrade(N, q, R) {
                    if (N !== 101) return;
                    let P = new fAB;
                    for (let y = 0; y < q.length; y += 2) P.append(uAB(q[y]), q[y + 1].toString("latin1"), !0);
                    return z({
                        status: N,
                        statusText: Rm8[N],
                        headersList: P,
                        socket: R
                    }), !0
                }
            }))
        }
    }
    oAB.exports = {
        fetch: Sm8,
        Fetch: Oy1,
        fetching: nAB,
        finalizeAndReportTiming: lAB
    }
});
var Ry1 = U((dN7, tAB) => {
    tAB.exports = {
        kState: Symbol("FileReader state"),
        kResult: Symbol("FileReader result"),
        kError: Symbol("FileReader error"),
        kLastProgressEventFired: Symbol("FileReader last progress event fired timestamp"),
        kEvents: Symbol("FileReader events"),
        kAborted: Symbol("FileReader aborted")
    }
});
var A1B = U((cN7, eAB) => {
    var {
        webidl: kw
    } = FD(), apA = Symbol("ProgressEvent state");
    class LEA extends Event {
        constructor(A, Q = {}) {
            A = kw.converters.DOMString(A, "ProgressEvent constructor", "type"), Q = kw.converters.ProgressEventInit(Q ?? {});
            super(A, Q);
            this[apA] = {
                lengthComputable: Q.lengthComputable,
                loaded: Q.loaded,
                total: Q.total
            }
        }
        get lengthComputable() {
            return kw.brandCheck(this, LEA), this[apA].lengthComputable
        }
        get loaded() {
            return kw.brandCheck(this, LEA), this[apA].loaded
        }
        get total() {
            return kw.brandCheck(this, LEA), this[apA].total
        }
    }
    kw.converters.ProgressEventInit = kw.dictionaryConverter([{
        key: "lengthComputable",
        converter: kw.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "loaded",
        converter: kw.converters["unsigned long long"],
        defaultValue: () => 0
    }, {
        key: "total",
        converter: kw.converters["unsigned long long"],
        defaultValue: () => 0
    }, {
        key: "bubbles",
        converter: kw.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "cancelable",
        converter: kw.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "composed",
        converter: kw.converters.boolean,
        defaultValue: () => !1
    }]);
    eAB.exports = {
        ProgressEvent: LEA
    }
});
var B1B = U((pN7, Q1B) => {
    function xm8(A) {
        if (!A) return "failure";
        switch (A.trim().toLowerCase()) {
            case "unicode-1-1-utf-8":
            case "unicode11utf8":
            case "unicode20utf8":
            case "utf-8":
            case "utf8":
            case "x-unicode20utf8":
                return "UTF-8";
            case "866":
            case "cp866":
            case "csibm866":
            case "ibm866":
                return "IBM866";
            case "csisolatin2":
            case "iso-8859-2":
            case "iso-ir-101":
            case "iso8859-2":
            case "iso88592":
            case "iso_8859-2":
            case "iso_8859-2:1987":
            case "l2":
            case "latin2":
                return "ISO-8859-2";
            case "csisolatin3":
            case "iso-8859-3":
            case "iso-ir-109":
            case "iso8859-3":
            case "iso88593":
            case "iso_8859-3":
            case "iso_8859-3:1988":
            case "l3":
            case "latin3":
                return "ISO-8859-3";
            case "csisolatin4":
            case "iso-8859-4":
            case "iso-ir-110":
            case "iso8859-4":
            case "iso88594":
            case "iso_8859-4":
            case "iso_8859-4:1988":
            case "l4":
            case "latin4":
                return "ISO-8859-4";
            case "csisolatincyrillic":
            case "cyrillic":
            case "iso-8859-5":
            case "iso-ir-144":
            case "iso8859-5":
            case "iso88595":
            case "iso_8859-5":
            case "iso_8859-5:1988":
                return "ISO-8859-5";
            case "arabic":
            case "asmo-708":
            case "csiso88596e":
            case "csiso88596i":
            case "csisolatinarabic":
            case "ecma-114":
            case "iso-8859-6":
            case "iso-8859-6-e":
            case "iso-8859-6-i":
            case "iso-ir-127":
            case "iso8859-6":
            case "iso88596":
            case "iso_8859-6":
            case "iso_8859-6:1987":
                return "ISO-8859-6";
            case "csisolatingreek":
            case "ecma-118":
            case "elot_928":
            case "greek":
            case "greek8":
            case "iso-8859-7":
            case "iso-ir-126":
            case "iso8859-7":
            case "iso88597":
            case "iso_8859-7":
            case "iso_8859-7:1987":
            case "sun_eu_greek":
                return "ISO-8859-7";
            case "csiso88598e":
            case "csisolatinhebrew":
            case "hebrew":
            case "iso-8859-8":
            case "iso-8859-8-e":
            case "iso-ir-138":
            case "iso8859-8":
            case "iso88598":
            case "iso_8859-8":
            case "iso_8859-8:1988":
            case "visual":
                return "ISO-8859-8";
            case "csiso88598i":
            case "iso-8859-8-i":
            case "logical":
                return "ISO-8859-8-I";
            case "csisolatin6":
            case "iso-8859-10":
            case "iso-ir-157":
            case "iso8859-10":
            case "iso885910":
            case "l6":
            case "latin6":
                return "ISO-8859-10";
            case "iso-8859-13":
            case "iso8859-13":
            case "iso885913":
                return "ISO-8859-13";
            case "iso-8859-14":
            case "iso8859-14":
            case "iso885914":
                return "ISO-8859-14";
            case "csisolatin9":
            case "iso-8859-15":
            case "iso8859-15":
            case "iso885915":
            case "iso_8859-15":
            case "l9":
                return "ISO-8859-15";
            case "iso-8859-16":
                return "ISO-8859-16";
            case "cskoi8r":
            case "koi":
            case "koi8":
            case "koi8-r":
            case "koi8_r":
                return "KOI8-R";
            case "koi8-ru":
            case "koi8-u":
                return "KOI8-U";
            case "csmacintosh":
            case "mac":
            case "macintosh":
            case "x-mac-roman":
                return "macintosh";
            case "iso-8859-11":
            case "iso8859-11":
            case "iso885911":
            case "tis-620":
            case "windows-874":
                return "windows-874";
            case "cp1250":
            case "windows-1250":
            case "x-cp1250":
                return "windows-1250";
            case "cp1251":
            case "windows-1251":
            case "x-cp1251":
                return "windows-1251";
            case "ansi_x3.4-1968":
            case "ascii":
            case "cp1252":
            case "cp819":
            case "csisolatin1":
            case "ibm819":
            case "iso-8859-1":
            case "iso-ir-100":
            case "iso8859-1":
            case "iso88591":
            case "iso_8859-1":
            case "iso_8859-1:1987":
            case "l1":
            case "latin1":
            case "us-ascii":
            case "windows-1252":
            case "x-cp1252":
                return "windows-1252";
            case "cp1253":
            case "windows-1253":
            case "x-cp1253":
                return "windows-1253";
            case "cp1254":
            case "csisolatin5":
            case "iso-8859-9":
            case "iso-ir-148":
            case "iso8859-9":
            case "iso88599":
            case "iso_8859-9":
            case "iso_8859-9:1989":
            case "l5":
            case "latin5":
            case "windows-1254":
            case "x-cp1254":
                return "windows-1254";
            case "cp1255":
            case "windows-1255":
            case "x-cp1255":
                return "windows-1255";
            case "cp1256":
            case "windows-1256":
            case "x-cp1256":
                return "windows-1256";
            case "cp1257":
            case "windows-1257":
            case "x-cp1257":
                return "windows-1257";
            case "cp1258":
            case "windows-1258":
            case "x-cp1258":
                return "windows-1258";
            case "x-mac-cyrillic":
            case "x-mac-ukrainian":
                return "x-mac-cyrillic";
            case "chinese":
            case "csgb2312":
            case "csiso58gb231280":
            case "gb2312":
            case "gb_2312":
            case "gb_2312-80":
            case "gbk":
            case "iso-ir-58":
            case "x-gbk":
                return "GBK";
            case "gb18030":
                return "gb18030";
            case "big5":
            case "big5-hkscs":
            case "cn-big5":
            case "csbig5":
            case "x-x-big5":
                return "Big5";
            case "cseucpkdfmtjapanese":
            case "euc-jp":
            case "x-euc-jp":
                return "EUC-JP";
            case "csiso2022jp":
            case "iso-2022-jp":
                return "ISO-2022-JP";
            case "csshiftjis":
            case "ms932":
            case "ms_kanji":
            case "shift-jis":
            case "shift_jis":
            case "sjis":
            case "windows-31j":
            case "x-sjis":
                return "Shift_JIS";
            case "cseuckr":
            case "csksc56011987":
            case "euc-kr":
            case "iso-ir-149":
            case "korean":
            case "ks_c_5601-1987":
            case "ks_c_5601-1989":
            case "ksc5601":
            case "ksc_5601":
            case "windows-949":
                return "EUC-KR";