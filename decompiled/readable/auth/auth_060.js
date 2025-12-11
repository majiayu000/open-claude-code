/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_060.js
 * 处理时间: 2025-12-09T03:41:37.044Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 60/61
 * Lines: 375327 - 376826 (1500 lines)
 * Original file: cli.js
 */

        try {
            A.exception.values.forEach((Y) => {
                Y.stacktrace.frames.forEach((J) => {
                    if (J.filename) J.debug_id = I[J.filename]
                })
            })
        } catch (Y) {}
    }

    function Pl2(A) {
        let Q = {};
        try {
            A.exception.values.forEach((G) => {
                G.stacktrace.frames.forEach((Z) => {
                    if (Z.debug_id) {
                        if (Z.abs_path) Q[Z.abs_path] = Z.debug_id;
                        else if (Z.filename) Q[Z.filename] = Z.debug_id;
                        delete Z.debug_id
                    }
                })
            })
        } catch (G) {}
        if (Object.keys(Q).length === 0) return;
        A.debug_meta = A.debug_meta || {}, A.debug_meta.images = A.debug_meta.images || [];
        let B = A.debug_meta.images;
        Object.keys(Q).forEach((G) => {
            B.push({
                type: "sourcemap",
                code_file: G,
                debug_id: Q[G]
            })
        })
    }

    function t43(A, Q) {
        if (Q.length > 0) A.sdk = A.sdk || {}, A.sdk.integrations = [...A.sdk.integrations || [], ...Q]
    }

    function e43(A, Q, B) {
        if (!A) return null;
        let G = {
            ...A,
            ...A.breadcrumbs && {
                breadcrumbs: A.breadcrumbs.map((Z) => ({
                    ...Z,
                    ...Z.data && {
                        data: hq.normalize(Z.data, Q, B)
                    }
                }))
            },
            ...A.user && {
                user: hq.normalize(A.user, Q, B)
            },
            ...A.contexts && {
                contexts: hq.normalize(A.contexts, Q, B)
            },
            ...A.extra && {
                extra: hq.normalize(A.extra, Q, B)
            }
        };
        if (A.contexts && A.contexts.trace && G.contexts) {
            if (G.contexts.trace = A.contexts.trace, A.contexts.trace.data) G.contexts.trace.data = hq.normalize(A.contexts.trace.data, Q, B)
        }
        if (A.spans) G.spans = A.spans.map((Z) => {
            let I = s43.spanToJSON(Z).data;
            if (I) Z.data = hq.normalize(I, Q, B);
            return Z
        });
        return G
    }

    function A83(A, Q) {
        if (!Q) return A;
        let B = A ? A.clone() : new tZ0.Scope;
        return B.update(Q), B
    }

    function Q83(A) {
        if (!A) return;
        if (B83(A)) return {
            captureContext: A
        };
        if (Z83(A)) return {
            captureContext: A
        };
        return A
    }

    function B83(A) {
        return A instanceof tZ0.Scope || typeof A === "function"
    }
    var G83 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];

    function Z83(A) {
        return Object.keys(A).some((Q) => G83.includes(Q))
    }
    jl2.applyDebugIds = Tl2;
    jl2.applyDebugMeta = Pl2;
    jl2.parseEventHintOrCaptureContext = Q83;
    jl2.prepareEvent = r43
});
var MO = moduleWrapper((kl2) => {
    Object.defineProperty(kl2, "__esModule", {
        value: !0
    });
    var Gg = l0(),
        X83 = aWA(),
        f71 = AF(),
        mW = fy(),
        eZ0 = sWA(),
        F83 = x71();

    function V83(A, Q) {
        return mW.getCurrentHub().captureException(A, F83.parseEventHintOrCaptureContext(Q))
    }

    function K83(A, Q) {
        let B = typeof Q === "string" ? Q : void 0,
            G = typeof Q !== "string" ? {
                captureContext: Q
            } : void 0;
        return mW.getCurrentHub().captureMessage(A, B, G)
    }

    function D83(A, Q) {
        return mW.getCurrentHub().captureEvent(A, Q)
    }

    function H83(A) {
        mW.getCurrentHub().configureScope(A)
    }

    function C83(A, Q) {
        mW.getCurrentHub().addBreadcrumb(A, Q)
    }

    function E83(A, Q) {
        mW.getCurrentHub().setContext(A, Q)
    }

    function z83(A) {
        mW.getCurrentHub().setExtras(A)
    }

    function U83(A, Q) {
        mW.getCurrentHub().setExtra(A, Q)
    }

    function $83(A) {
        mW.getCurrentHub().setTags(A)
    }

    function w83(A, Q) {
        mW.getCurrentHub().setTag(A, Q)
    }

    function q83(A) {
        mW.getCurrentHub().setUser(A)
    }

    function Sl2(...A) {
        let Q = mW.getCurrentHub();
        if (A.length === 2) {
            let [B, G] = A;
            if (!B) return Q.withScope(G);
            return Q.withScope(() => {
                return Q.getStackTop().scope = B, G(B)
            })
        }
        return Q.withScope(A[0])
    }

    function N83(A) {
        return mW.runWithAsyncContext(() => {
            return A(mW.getIsolationScope())
        })
    }

    function L83(A, Q) {
        return Sl2((B) => {
            return B.setSpan(A), Q(B)
        })
    }

    function M83(A, Q) {
        return mW.getCurrentHub().startTransaction({
            ...A
        }, Q)
    }

    function AI0(A, Q) {
        let B = rTA(),
            G = h0A();
        if (!G) f71.DEBUG_BUILD && Gg.logger.warn("Cannot capture check-in. No client defined.");
        else if (!G.captureCheckIn) f71.DEBUG_BUILD && Gg.logger.warn("Cannot capture check-in. Client does not support sending check-ins.");
        else return G.captureCheckIn(A, Q, B);
        return Gg.uuid4()
    }

    function O83(A, Q, B) {
        let G = AI0({
                monitorSlug: A,
                status: "in_progress"
            }, B),
            Z = Gg.timestampInSeconds();

        function I(J) {
            AI0({
                monitorSlug: A,
                status: J,
                checkInId: G,
                duration: Gg.timestampInSeconds() - Z
            })
        }
        let Y;
        try {
            Y = Q()
        } catch (J) {
            throw I("error"), J
        }
        if (Gg.isThenable(Y)) Promise.resolve(Y).then(() => {
            I("ok")
        }, () => {
            I("error")
        });
        else I("ok");
        return Y
    }
    async function R83(A) {
        let Q = h0A();
        if (Q) return Q.flush(A);
        return f71.DEBUG_BUILD && Gg.logger.warn("Cannot flush events. No client defined."), Promise.resolve(!1)
    }
    async function T83(A) {
        let Q = h0A();
        if (Q) return Q.close(A);
        return f71.DEBUG_BUILD && Gg.logger.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1)
    }

    function P83() {
        return mW.getCurrentHub().lastEventId()
    }

    function h0A() {
        return mW.getCurrentHub().getClient()
    }

    function j83() {
        return !!h0A()
    }

    function rTA() {
        return mW.getCurrentHub().getScope()
    }

    function S83(A) {
        let Q = h0A(),
            B = mW.getIsolationScope(),
            G = rTA(),
            {
                release: Z,
                environment: I = X83.DEFAULT_ENVIRONMENT
            } = Q && Q.getOptions() || {},
            {
                userAgent: Y
            } = Gg.GLOBAL_OBJ.navigator || {},
            J = eZ0.makeSession({
                release: Z,
                environment: I,
                user: G.getUser() || B.getUser(),
                ...Y && {
                    userAgent: Y
                },
                ...A
            }),
            W = B.getSession();
        if (W && W.status === "ok") eZ0.updateSession(W, {
            status: "exited"
        });
        return QI0(), B.setSession(J), G.setSession(J), J
    }

    function QI0() {
        let A = mW.getIsolationScope(),
            Q = rTA(),
            B = Q.getSession() || A.getSession();
        if (B) eZ0.closeSession(B);
        _l2(), A.setSession(), Q.setSession()
    }

    function _l2() {
        let A = mW.getIsolationScope(),
            Q = rTA(),
            B = h0A(),
            G = Q.getSession() || A.getSession();
        if (G && B && B.captureSession) B.captureSession(G)
    }

    function _83(A = !1) {
        if (A) {
            QI0();
            return
        }
        _l2()
    }
    kl2.addBreadcrumb = C83;
    kl2.captureCheckIn = AI0;
    kl2.captureEvent = D83;
    kl2.captureException = V83;
    kl2.captureMessage = K83;
    kl2.captureSession = _83;
    kl2.close = T83;
    kl2.configureScope = H83;
    kl2.endSession = QI0;
    kl2.flush = R83;
    kl2.getClient = h0A;
    kl2.getCurrentScope = rTA;
    kl2.isInitialized = j83;
    kl2.lastEventId = P83;
    kl2.setContext = E83;
    kl2.setExtra = U83;
    kl2.setExtras = z83;
    kl2.setTag = w83;
    kl2.setTags = $83;
    kl2.setUser = q83;
    kl2.startSession = S83;
    kl2.startTransaction = M83;
    kl2.withActiveSpan = L83;
    kl2.withIsolationScope = N83;
    kl2.withMonitor = O83;
    kl2.withScope = Sl2
});
var rWA = moduleWrapper((yl2) => {
    Object.defineProperty(yl2, "__esModule", {
        value: !0
    });

    function Z63(A) {
        return A.transaction
    }
    yl2.getRootSpan = Z63
});
var g0A = moduleWrapper((bl2) => {
    Object.defineProperty(bl2, "__esModule", {
        value: !0
    });
    var Y63 = l0(),
        J63 = aWA(),
        xl2 = MO(),
        W63 = rWA(),
        BI0 = C$();

    function vl2(A, Q, B) {
        let G = Q.getOptions(),
            {
                publicKey: Z
            } = Q.getDsn() || {},
            {
                segment: I
            } = B && B.getUser() || {},
            Y = Y63.dropUndefinedKeys({
                environment: G.environment || J63.DEFAULT_ENVIRONMENT,
                release: G.release,
                user_segment: I,
                public_key: Z,
                trace_id: A
            });
        return Q.emit && Q.emit("createDsc", Y), Y
    }

    function X63(A) {
        let Q = xl2.getClient();
        if (!Q) return {};
        let B = vl2(BI0.spanToJSON(A).trace_id || "", Q, xl2.getCurrentScope()),
            G = W63.getRootSpan(A);
        if (!G) return B;
        let Z = G && G._frozenDynamicSamplingContext;
        if (Z) return Z;
        let {
            sampleRate: I,
            source: Y
        } = G.metadata;
        if (I != null) B.sample_rate = `TextComponent{I}`;
        let J = BI0.spanToJSON(G);
        if (Y && Y !== "url") B.transaction = J.description;
        return B.sampled = String(BI0.spanIsSampled(G)), Q.emit && Q.emit("createDsc", B), B
    }
    bl2.getDynamicSamplingContextFromClient = vl2;
    bl2.getDynamicSamplingContextFromSpan = X63
});
var v71 = moduleWrapper((hl2) => {
    Object.defineProperty(hl2, "__esModule", {
        value: !0
    });
    var oTA = l0(),
        K63 = g0A(),
        D63 = rWA(),
        fl2 = C$();

    function H63(A, Q) {
        let {
            fingerprint: B,
            span: G,
            breadcrumbs: Z,
            sdkProcessingMetadata: I
        } = Q;
        if (E63(A, Q), G) $63(A, G);
        w63(A, B), z63(A, Z), U63(A, I)
    }

    function C63(A, Q) {
        let {
            extra: B,
            tags: G,
            user: Z,
            contexts: I,
            level: Y,
            sdkProcessingMetadata: J,
            breadcrumbs: W,
            fingerprint: X,
            eventProcessors: F,
            attachments: V,
            propagationContext: K,
            transactionName: D,
            span: H
        } = Q;
        if (oWA(A, "extra", B), oWA(A, "tags", G), oWA(A, "user", Z), oWA(A, "contexts", I), oWA(A, "sdkProcessingMetadata", J), Y) A.level = Y;
        if (D) A.transactionName = D;
        if (H) A.span = H;
        if (W.length) A.breadcrumbs = [...A.breadcrumbs, ...W];
        if (X.length) A.fingerprint = [...A.fingerprint, ...X];
        if (F.length) A.eventProcessors = [...A.eventProcessors, ...F];
        if (V.length) A.attachments = [...A.attachments, ...V];
        A.propagationContext = {
            ...A.propagationContext,
            ...K
        }
    }

    function oWA(A, Q, B) {
        if (B && Object.keys(B).length) {
            A[Q] = {
                ...A[Q]
            };
            for (let G in B)
                if (Object.prototype.hasOwnProperty.call(B, G)) A[Q][G] = B[G]
        }
    }

    function E63(A, Q) {
        let {
            extra: B,
            tags: G,
            user: Z,
            contexts: I,
            level: Y,
            transactionName: J
        } = Q, W = oTA.dropUndefinedKeys(B);
        if (W && Object.keys(W).length) A.extra = {
            ...W,
            ...A.extra
        };
        let X = oTA.dropUndefinedKeys(G);
        if (X && Object.keys(X).length) A.tags = {
            ...X,
            ...A.tags
        };
        let F = oTA.dropUndefinedKeys(Z);
        if (F && Object.keys(F).length) A.user = {
            ...F,
            ...A.user
        };
        let V = oTA.dropUndefinedKeys(I);
        if (V && Object.keys(V).length) A.contexts = {
            ...V,
            ...A.contexts
        };
        if (Y) A.level = Y;
        if (J) A.transaction = J
    }

    function z63(A, Q) {
        let B = [...A.breadcrumbs || [], ...Q];
        A.breadcrumbs = B.length ? B : void 0
    }

    function U63(A, Q) {
        A.sdkProcessingMetadata = {
            ...A.sdkProcessingMetadata,
            ...Q
        }
    }

    function $63(A, Q) {
        A.contexts = {
            trace: fl2.spanToTraceContext(Q),
            ...A.contexts
        };
        let B = D63.getRootSpan(Q);
        if (B) {
            A.sdkProcessingMetadata = {
                dynamicSamplingContext: K63.getDynamicSamplingContextFromSpan(Q),
                ...A.sdkProcessingMetadata
            };
            let G = fl2.spanToJSON(B).description;
            if (G) A.tags = {
                transaction: G,
                ...A.tags
            }
        }
    }

    function w63(A, Q) {
        if (A.fingerprint = A.fingerprint ? oTA.arrayify(A.fingerprint) : [], Q) A.fingerprint = A.fingerprint.concat(Q);
        if (A.fingerprint && !A.fingerprint.length) delete A.fingerprint
    }
    hl2.applyScopeDataToEvent = H63;
    hl2.mergeAndOverwriteScopeData = oWA;
    hl2.mergeScopeData = C63
});
var b71 = moduleWrapper((ml2) => {
    Object.defineProperty(ml2, "__esModule", {
        value: !0
    });
    var hy = l0(),
        gl2 = aTA(),
        M63 = sWA(),
        O63 = v71(),
        R63 = 100,
        h71;
    class tWA {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = ul2()
        }
        static clone(A) {
            return A ? A.clone() : new tWA
        }
        clone() {
            let A = new tWA;
            return A._breadcrumbs = [...this._breadcrumbs], A._tags = {
                ...this._tags
            }, A._extra = {
                ...this._extra
            }, A._contexts = {
                ...this._contexts
            }, A._user = this._user, A._level = this._level, A._span = this._span, A._session = this._session, A._transactionName = this._transactionName, A._fingerprint = this._fingerprint, A._eventProcessors = [...this._eventProcessors], A._requestSession = this._requestSession, A._attachments = [...this._attachments], A._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata
            }, A._propagationContext = {
                ...this._propagationContext
            }, A._client = this._client, A
        }
        setClient(A) {
            this._client = A
        }
        getClient() {
            return this._client
        }
        addScopeListener(A) {
            this._scopeListeners.push(A)
        }
        addEventProcessor(A) {
            return this._eventProcessors.push(A), this
        }
        setUser(A) {
            if (this._user = A || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    segment: void 0,
                    username: void 0
                }, this._session) M63.updateSession(this._session, {
                user: A
            });
            return this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(A) {
            return this._requestSession = A, this
        }
        setTags(A) {
            return this._tags = {
                ...this._tags,
                ...A
            }, this._notifyScopeListeners(), this
        }
        setTag(A, Q) {
            return this._tags = {
                ...this._tags,
                [A]: Q
            }, this._notifyScopeListeners(), this
        }
        setExtras(A) {
            return this._extra = {
                ...this._extra,
                ...A
            }, this._notifyScopeListeners(), this
        }
        setExtra(A, Q) {
            return this._extra = {
                ...this._extra,
                [A]: Q
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(A) {
            return this._fingerprint = A, this._notifyScopeListeners(), this
        }
        setLevel(A) {
            return this._level = A, this._notifyScopeListeners(), this
        }
        setTransactionName(A) {
            return this._transactionName = A, this._notifyScopeListeners(), this
        }
        setContext(A, Q) {
            if (Q === null) delete this._contexts[A];
            else this._contexts[A] = Q;
            return this._notifyScopeListeners(), this
        }
        setSpan(A) {
            return this._span = A, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            let A = this._span;
            return A && A.transaction
        }
        setSession(A) {
            if (!A) delete this._session;
            else this._session = A;
            return this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(A) {
            if (!A) return this;
            let Q = typeof A === "function" ? A(this) : A;
            if (Q instanceof tWA) {
                let B = Q.getScopeData();
                if (this._tags = {
                        ...this._tags,
                        ...B.tags
                    }, this._extra = {
                        ...this._extra,
                        ...B.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...B.contexts
                    }, B.user && Object.keys(B.user).length) this._user = B.user;
                if (B.level) this._level = B.level;
                if (B.fingerprint.length) this._fingerprint = B.fingerprint;
                if (Q.getRequestSession()) this._requestSession = Q.getRequestSession();
                if (B.propagationContext) this._propagationContext = B.propagationContext
            } else if (hy.isPlainObject(Q)) {
                let B = A;
                if (this._tags = {
                        ...this._tags,
                        ...B.tags
                    }, this._extra = {
                        ...this._extra,
                        ...B.extra
                    }, this._contexts = {
                        ...this._contexts,
                        ...B.contexts
                    }, B.user) this._user = B.user;
                if (B.level) this._level = B.level;
                if (B.fingerprint) this._fingerprint = B.fingerprint;
                if (B.requestSession) this._requestSession = B.requestSession;
                if (B.propagationContext) this._propagationContext = B.propagationContext
            }
            return this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = ul2(), this
        }
        addBreadcrumb(A, Q) {
            let B = typeof Q === "number" ? Q : R63;
            if (B <= 0) return this;
            let G = {
                    timestamp: hy.dateTimestampInSeconds(),
                    ...A
                },
                Z = this._breadcrumbs;
            return Z.push(G), this._breadcrumbs = Z.length > B ? Z.slice(-B) : Z, this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(A) {
            return this._attachments.push(A), this
        }
        getAttachments() {
            return this.getScopeData().attachments
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        getScopeData() {
            let {
                _breadcrumbs: A,
                _attachments: Q,
                _contexts: B,
                _tags: G,
                _extra: Z,
                _user: I,
                _level: Y,
                _fingerprint: J,
                _eventProcessors: W,
                _propagationContext: X,
                _sdkProcessingMetadata: F,
                _transactionName: V,
                _span: K
            } = this;
            return {
                breadcrumbs: A,
                attachments: Q,
                contexts: B,
                tags: G,
                extra: Z,
                user: I,
                level: Y,
                fingerprint: J || [],
                eventProcessors: W,
                propagationContext: X,
                sdkProcessingMetadata: F,
                transactionName: V,
                span: K
            }
        }
        applyToEvent(A, Q = {}, B = []) {
            O63.applyScopeDataToEvent(A, this.getScopeData());
            let G = [...B, ...gl2.getGlobalEventProcessors(), ...this._eventProcessors];
            return gl2.notifyEventProcessors(G, A, Q)
        }
        setSDKProcessingMetadata(A) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...A
            }, this
        }
        setPropagationContext(A) {
            return this._propagationContext = A, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        captureException(A, Q) {
            let B = Q && Q.event_id ? Q.event_id : hy.uuid4();
            if (!this._client) return hy.logger.warn("No client configured on scope - will not capture exception!"), B;
            let G = Error("Sentry syntheticException");
            return this._client.captureException(A, {
                originalException: A,
                syntheticException: G,
                ...Q,
                event_id: B
            }, this), B
        }
        captureMessage(A, Q, B) {
            let G = B && B.event_id ? B.event_id : hy.uuid4();
            if (!this._client) return hy.logger.warn("No client configured on scope - will not capture message!"), G;
            let Z = Error(A);
            return this._client.captureMessage(A, Q, {
                originalException: A,
                syntheticException: Z,
                ...B,
                event_id: G
            }, this), G
        }
        captureEvent(A, Q) {
            let B = Q && Q.event_id ? Q.event_id : hy.uuid4();
            if (!this._client) return hy.logger.warn("No client configured on scope - will not capture event!"), B;
            return this._client.captureEvent(A, {
                ...Q,
                event_id: B
            }, this), B
        }
        _notifyScopeListeners() {
            if (!this._notifyingListeners) this._notifyingListeners = !0, this._scopeListeners.forEach((A) => {
                A(this)
            }), this._notifyingListeners = !1
        }
    }

    function T63() {
        if (!h71) h71 = new tWA;
        return h71
    }

    function P63(A) {
        h71 = A
    }

    function ul2() {
        return {
            traceId: hy.uuid4(),
            spanId: hy.uuid4().substring(16)
        }
    }
    ml2.Scope = tWA;
    ml2.getGlobalScope = T63;
    ml2.setGlobalScope = P63
});
var g71 = moduleWrapper((dl2) => {
    Object.defineProperty(dl2, "__esModule", {
        value: !0
    });
    var k63 = "7.120.3";
    dl2.SDK_VERSION = k63
});
var fy = moduleWrapper((nl2) => {
    Object.defineProperty(nl2, "__esModule", {
        value: !0
    });
    var sE = l0(),
        x63 = aWA(),
        GI0 = AF(),
        cl2 = b71(),
        ZI0 = sWA(),
        v63 = g71(),
        u71 = parseFloat(v63.SDK_VERSION),
        b63 = 100;
    class eTA {
        constructor(A, Q, B, G = u71) {
            this._version = G;
            let Z;
            if (!Q) Z = new cl2.Scope, Z.setClient(A);
            else Z = Q;
            let I;
            if (!B) I = new cl2.Scope, I.setClient(A);
            else I = B;
            if (this._stack = [{
                    scope: Z
                }], A) this.bindClient(A);
            this._isolationScope = I
        }
        isOlderThan(A) {
            return this._version < A
        }
        bindClient(A) {
            let Q = this.getStackTop();
            if (Q.client = A, Q.scope.setClient(A), A && A.setupIntegrations) A.setupIntegrations()
        }
        pushScope() {
            let A = this.getScope().clone();
            return this.getStack().push({
                client: this.getClient(),
                scope: A
            }), A
        }
        popScope() {
            if (this.getStack().length <= 1) return !1;
            return !!this.getStack().pop()
        }
        withScope(A) {
            let Q = this.pushScope(),
                B;
            try {
                B = A(Q)
            } catch (G) {
                throw this.popScope(), G
            }
            if (sE.isThenable(B)) return B.then((G) => {
                return this.popScope(), G
            }, (G) => {
                throw this.popScope(), G
            });
            return this.popScope(), B
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getIsolationScope() {
            return this._isolationScope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(A, Q) {
            let B = this._lastEventId = Q && Q.event_id ? Q.event_id : sE.uuid4(),
                G = Error("Sentry syntheticException");
            return this.getScope().captureException(A, {
                originalException: A,
                syntheticException: G,
                ...Q,
                event_id: B
            }), B
        }
        captureMessage(A, Q, B) {
            let G = this._lastEventId = B && B.event_id ? B.event_id : sE.uuid4(),
                Z = Error(A);
            return this.getScope().captureMessage(A, Q, {
                originalException: A,
                syntheticException: Z,
                ...B,
                event_id: G
            }), G
        }
        captureEvent(A, Q) {
            let B = Q && Q.event_id ? Q.event_id : sE.uuid4();
            if (!A.type) this._lastEventId = B;
            return this.getScope().captureEvent(A, {
                ...Q,
                event_id: B
            }), B
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(A, Q) {
            let {
                scope: B,
                client: G
            } = this.getStackTop();
            if (!G) return;
            let {
                beforeBreadcrumb: Z = null,
                maxBreadcrumbs: I = b63
            } = G.getOptions && G.getOptions() || {};
            if (I <= 0) return;
            let J = {
                    timestamp: sE.dateTimestampInSeconds(),
                    ...A
                },
                W = Z ? sE.consoleSandbox(() => Z(J, Q)) : J;
            if (W === null) return;
            if (G.emit) G.emit("beforeAddBreadcrumb", W, Q);
            B.addBreadcrumb(W, I)
        }
        setUser(A) {
            this.getScope().setUser(A), this.getIsolationScope().setUser(A)
        }
        setTags(A) {
            this.getScope().setTags(A), this.getIsolationScope().setTags(A)
        }
        setExtras(A) {
            this.getScope().setExtras(A), this.getIsolationScope().setExtras(A)
        }
        setTag(A, Q) {
            this.getScope().setTag(A, Q), this.getIsolationScope().setTag(A, Q)
        }
        setExtra(A, Q) {
            this.getScope().setExtra(A, Q), this.getIsolationScope().setExtra(A, Q)
        }
        setContext(A, Q) {
            this.getScope().setContext(A, Q), this.getIsolationScope().setContext(A, Q)
        }
        configureScope(A) {
            let {
                scope: Q,
                client: B
            } = this.getStackTop();
            if (B) A(Q)
        }
        run(A) {
            let Q = II0(this);
            try {
                A(this)
            } finally {
                II0(Q)
            }
        }
        getIntegration(A) {
            let Q = this.getClient();
            if (!Q) return null;
            try {
                return Q.getIntegration(A)
            } catch (B) {
                return GI0.DEBUG_BUILD && sE.logger.warn(`Cannot retrieve integration TextComponent{A.id} from the current Hub`), null
            }
        }
        startTransaction(A, Q) {
            let B = this._callExtensionMethod("startTransaction", A, Q);
            if (GI0.DEBUG_BUILD && !B)
                if (!this.getClient()) sE.logger.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'");
                else sE.logger.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
            return B
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(A = !1) {
            if (A) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            let Q = this.getStackTop().scope,
                B = Q.getSession();
            if (B) ZI0.closeSession(B);
            this._sendSessionUpdate(), Q.setSession()
        }
        startSession(A) {
            let {
                scope: Q,
                client: B
            } = this.getStackTop(), {
                release: G,
                environment: Z = x63.DEFAULT_ENVIRONMENT
            } = B && B.getOptions() || {}, {
                userAgent: I
            } = sE.GLOBAL_OBJ.navigator || {}, Y = ZI0.makeSession({
                release: G,
                environment: Z,
                user: Q.getUser(),
                ...I && {
                    userAgent: I
                },
                ...A
            }), J = Q.getSession && Q.getSession();
            if (J && J.status === "ok") ZI0.updateSession(J, {
                status: "exited"
            });
            return this.endSession(), Q.setSession(Y), Y
        }
        shouldSendDefaultPii() {
            let A = this.getClient(),
                Q = A && A.getOptions();
            return Boolean(Q && Q.sendDefaultPii)
        }
        _sendSessionUpdate() {
            let {
                scope: A,
                client: Q
            } = this.getStackTop(), B = A.getSession();
            if (B && Q && Q.captureSession) Q.captureSession(B)
        }
        _callExtensionMethod(A, ...Q) {
            let G = u0A().__SENTRY__;
            if (G && G.extensions && typeof G.extensions[A] === "function") return G.extensions[A].apply(this, Q);
            GI0.DEBUG_BUILD && sE.logger.warn(`Extension method TextComponent{A} couldn't be found, doing nothing.`)
        }
    }

    function u0A() {
        return sE.GLOBAL_OBJ.__SENTRY__ = sE.GLOBAL_OBJ.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, sE.GLOBAL_OBJ
    }

    function II0(A) {
        let Q = u0A(),
            B = tTA(Q);
        return m71(Q, A), B
    }

    function pl2() {
        let A = u0A();
        if (A.__SENTRY__ && A.__SENTRY__.acs) {
            let Q = A.__SENTRY__.acs.getCurrentHub();
            if (Q) return Q
        }
        return ll2(A)
    }

    function f63() {
        return pl2().getIsolationScope()
    }

    function ll2(A = u0A()) {
        if (!il2(A) || tTA(A).isOlderThan(u71)) m71(A, new eTA);
        return tTA(A)
    }

    function h63(A, Q = ll2()) {
        if (!il2(A) || tTA(A).isOlderThan(u71)) {
            let B = Q.getClient(),
                G = Q.getScope(),
                Z = Q.getIsolationScope();
            m71(A, new eTA(B, G.clone(), Z.clone()))
        }
    }

    function g63(A) {
        let Q = u0A();
        Q.__SENTRY__ = Q.__SENTRY__ || {}, Q.__SENTRY__.acs = A
    }

    function u63(A, Q = {}) {
        let B = u0A();
        if (B.__SENTRY__ && B.__SENTRY__.acs) return B.__SENTRY__.acs.runWithAsyncContext(A, Q);
        return A()
    }

    function il2(A) {
        return !!(A && A.__SENTRY__ && A.__SENTRY__.hub)
    }

    function tTA(A) {
        return sE.getGlobalSingleton("hub", () => new eTA, A)
    }

    function m71(A, Q) {
        if (!A) return !1;
        let B = A.__SENTRY__ = A.__SENTRY__ || {};
        return B.hub = Q, !0
    }
    nl2.API_VERSION = u71;
    nl2.Hub = eTA;
    nl2.ensureHubOnCarrier = h63;
    nl2.getCurrentHub = pl2;
    nl2.getHubFromCarrier = tTA;
    nl2.getIsolationScope = f63;
    nl2.getMainCarrier = u0A;
    nl2.makeMain = II0;
    nl2.runWithAsyncContext = u63;
    nl2.setAsyncContextStrategy = g63;
    nl2.setHubOnCarrier = m71
});
var d71 = moduleWrapper((sl2) => {
    Object.defineProperty(sl2, "__esModule", {
        value: !0
    });
    var al2 = l0(),
        t63 = fy();

    function e63(A) {
        return (A || t63.getCurrentHub()).getScope().getTransaction()
    }
    var A53 = al2.extractTraceparentData;
    sl2.stripUrlQueryAndFragment = al2.stripUrlQueryAndFragment;
    sl2.extractTraceparentData = A53;
    sl2.getActiveTransaction = e63
});
var c71 = moduleWrapper((ol2) => {
    Object.defineProperty(ol2, "__esModule", {
        value: !0
    });
    var YI0 = l0(),
        Z53 = AF(),
        I53 = d71(),
        rl2 = !1;

    function Y53() {
        if (rl2) return;
        rl2 = !0, YI0.addGlobalErrorInstrumentationHandler(JI0), YI0.addGlobalUnhandledRejectionInstrumentationHandler(JI0)
    }

    function JI0() {
        let A = I53.getActiveTransaction();
        if (A) Z53.DEBUG_BUILD && YI0.logger.log("[Tracing] Transaction: internal_error -> Global error occured"), A.setStatus("internal_error")
    }
    JI0.tag = "sentry_tracingErrorCallback";
    ol2.registerErrorInstrumentation = Y53
});
var eWA = moduleWrapper((tl2) => {
    Object.defineProperty(tl2, "__esModule", {
        value: !0
    });
    tl2.SpanStatus = void 0;
    (function(A) {
        A.Ok = "ok";
        let B = "deadline_exceeded";
        A.DeadlineExceeded = B;
        let G = "unauthenticated";
        A.Unauthenticated = G;
        let Z = "permission_denied";
        A.PermissionDenied = Z;
        let I = "not_found";
        A.NotFound = I;
        let Y = "resource_exhausted";
        A.ResourceExhausted = Y;
        let J = "invalid_argument";
        A.InvalidArgument = J;
        let W = "unimplemented";
        A.Unimplemented = W;
        let X = "unavailable";
        A.Unavailable = X;
        let F = "internal_error";
        A.InternalError = F;
        let V = "unknown_error";
        A.UnknownError = V;
        let K = "cancelled";
        A.Cancelled = K;
        let D = "already_exists";
        A.AlreadyExists = D;
        let H = "failed_precondition";
        A.FailedPrecondition = H;
        let C = "aborted";
        A.Aborted = C;
        let E = "out_of_range";
        A.OutOfRange = E;
        let z = "data_loss";
        A.DataLoss = z
    })(tl2.SpanStatus || (tl2.SpanStatus = {}));

    function XI0(A) {
        if (A < 400 && A >= 100) return "ok";
        if (A >= 400 && A < 500) switch (A) {
            case 401:
                return "unauthenticated";
            case 403:
                return "permission_denied";
            case 404:
                return "not_found";
            case 409:
                return "already_exists";
            case 413:
                return "failed_precondition";
            case 429:
                return "resource_exhausted";
            default:
                return "invalid_argument"
        }
        if (A >= 500 && A < 600) switch (A) {
            case 501:
                return "unimplemented";
            case 503:
                return "unavailable";
            case 504:
                return "deadline_exceeded";
            default:
                return "internal_error"
        }
        return "unknown_error"
    }
    var W53 = XI0;

    function X53(A, Q) {
        A.setTag("http.status_code", String(Q)), A.setData("http.response.status_code", Q);
        let B = XI0(Q);
        if (B !== "unknown_error") A.setStatus(B)
    }
    tl2.getSpanStatusFromHttpCode = XI0;
    tl2.setHttpStatus = X53;
    tl2.spanStatusfromHttpCode = W53
});
var FI0 = moduleWrapper((el2) => {
    Object.defineProperty(el2, "__esModule", {
        value: !0
    });
    var D53 = l0();

    function H53(A, Q, B = () => {}) {
        let G;
        try {
            G = A()
        } catch (Z) {
            throw Q(Z), B(), Z
        }
        return C53(G, Q, B)
    }

    function C53(A, Q, B) {
        if (D53.isThenable(A)) return A.then((G) => {
            return B(), G
        }, (G) => {
            throw Q(G), B(), G
        });
        return B(), A
    }
    el2.handleCallbackErrors = H53
});
var p71 = moduleWrapper((Ai2) => {
    Object.defineProperty(Ai2, "__esModule", {
        value: !0
    });
    var z53 = MO();

    function U53(A) {
        if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) return !1;
        let Q = z53.getClient(),
            B = A || Q && Q.getOptions();
        return !!B && (B.enableTracing || ("tracesSampleRate" in B) || ("tracesSampler" in B))
    }
    Ai2.hasTracingEnabled = U53
});
var a71 = moduleWrapper((Yi2) => {
    Object.defineProperty(Yi2, "__esModule", {
        value: !0
    });
    var APA = l0(),
        w53 = AF(),
        mn = fy(),
        l71 = C$();
    c71();
    eWA();
    var q53 = g0A(),
        AXA = MO(),
        VI0 = FI0(),
        Qi2 = p71();

    function N53(A, Q, B = () => {}, G = () => {}) {
        let Z = mn.getCurrentHub(),
            I = AXA.getCurrentScope(),
            Y = I.getSpan(),
            J = n71(A),
            W = i71(Z, {
                parentSpan: Y,
                spanContext: J,
                forceTransaction: !1,
                scope: I
            });
        return I.setSpan(W), VI0.handleCallbackErrors(() => Q(W), (X) => {
            W && W.setStatus("internal_error"), B(X, W)
        }, () => {
            W && W.end(), I.setSpan(Y), G()
        })
    }

    function Bi2(A, Q) {
        let B = n71(A);
        return mn.runWithAsyncContext(() => {
            return AXA.withScope(A.scope, (G) => {
                let Z = mn.getCurrentHub(),
                    I = G.getSpan(),
                    J = A.onlyIfParent && !I ? void 0 : i71(Z, {
                        parentSpan: I,
                        spanContext: B,
                        forceTransaction: A.forceTransaction,
                        scope: G
                    });
                return VI0.handleCallbackErrors(() => Q(J), () => {
                    if (J) {
                        let {
                            status: W
                        } = l71.spanToJSON(J);
                        if (!W || W === "ok") J.setStatus("internal_error")
                    }
                }, () => J && J.end())
            })
        })
    }
    var L53 = Bi2;

    function M53(A, Q) {
        let B = n71(A);
        return mn.runWithAsyncContext(() => {
            return AXA.withScope(A.scope, (G) => {
                let Z = mn.getCurrentHub(),
                    I = G.getSpan(),
                    J = A.onlyIfParent && !I ? void 0 : i71(Z, {
                        parentSpan: I,
                        spanContext: B,
                        forceTransaction: A.forceTransaction,
                        scope: G
                    });

                function W() {
                    J && J.end()
                }
                return VI0.handleCallbackErrors(() => Q(J, W), () => {
                    if (J && J.isRecording()) {
                        let {
                            status: X
                        } = l71.spanToJSON(J);
                        if (!X || X === "ok") J.setStatus("internal_error")
                    }
                })
            })
        })
    }

    function O53(A) {
        if (!Qi2.hasTracingEnabled()) return;
        let Q = n71(A),
            B = mn.getCurrentHub(),
            G = A.scope ? A.scope.getSpan() : Gi2();
        if (A.onlyIfParent && !G) return;
        let Y = (A.scope || AXA.getCurrentScope()).clone();
        return i71(B, {
            parentSpan: G,
            spanContext: Q,
            forceTransaction: A.forceTransaction,
            scope: Y
        })
    }

    function Gi2() {
        return AXA.getCurrentScope().getSpan()
    }
    var R53 = ({
        sentryTrace: A,
        baggage: Q
    }, B) => {
        let G = AXA.getCurrentScope(),
            {
                traceparentData: Z,
                dynamicSamplingContext: I,
                propagationContext: Y
            } = APA.tracingContextFromHeaders(A, Q);
        if (G.setPropagationContext(Y), w53.DEBUG_BUILD && Z) APA.logger.log(`[Tracing] Continuing trace TextComponent{Z.traceId}.`);
        let J = {
            ...Z,
            metadata: APA.dropUndefinedKeys({
                dynamicSamplingContext: I
            })
        };
        if (!B) return J;
        return mn.runWithAsyncContext(() => {
            return B(J)
        })
    };

    function i71(A, {
        parentSpan: Q,
        spanContext: B,
        forceTransaction: G,
        scope: Z
    }) {
        if (!Qi2.hasTracingEnabled()) return;
        let I = mn.getIsolationScope(),
            Y;
        if (Q && !G) Y = Q.startChild(B);
        else if (Q) {
            let J = q53.getDynamicSamplingContextFromSpan(Q),
                {
                    traceId: W,
                    spanId: X
                } = Q.spanContext(),
                F = l71.spanIsSampled(Q);
            Y = A.startTransaction({
                traceId: W,
                parentSpanId: X,
                parentSampled: F,
                ...B,
                metadata: {
                    dynamicSamplingContext: J,
                    ...B.metadata
                }
            })
        } else {
            let {
                traceId: J,
                dsc: W,
                parentSpanId: X,
                sampled: F
            } = {
                ...I.getPropagationContext(),
                ...Z.getPropagationContext()
            };
            Y = A.startTransaction({
                traceId: J,
                parentSpanId: X,
                parentSampled: F,
                ...B,
                metadata: {
                    dynamicSamplingContext: W,
                    ...B.metadata
                }
            })
        }
        return Z.setSpan(Y), T53(Y, Z, I), Y
    }

    function n71(A) {
        if (A.startTime) {
            let Q = {
                ...A
            };
            return Q.startTimestamp = l71.spanTimeInputToSeconds(A.startTime), delete Q.startTime, Q
        }
        return A
    }
    var Zi2 = "_sentryScope",
        Ii2 = "_sentryIsolationScope";

    function T53(A, Q, B) {
        if (A) APA.addNonEnumerableProperty(A, Ii2, B), APA.addNonEnumerableProperty(A, Zi2, Q)
    }

    function P53(A) {
        return {
            scope: A[Zi2],
            isolationScope: A[Ii2]
        }
    }
    Yi2.continueTrace = R53;
    Yi2.getActiveSpan = Gi2;
    Yi2.getCapturedScopesOnSpan = P53;
    Yi2.startActiveSpan = L53;
    Yi2.startInactiveSpan = O53;
    Yi2.startSpan = Bi2;
    Yi2.startSpanManual = M53;
    Yi2.trace = N53
});
var BPA = moduleWrapper((Wi2) => {
    Object.defineProperty(Wi2, "__esModule", {
        value: !0
    });
    var f53 = l0();
    AF();
    c71();