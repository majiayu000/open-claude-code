/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_008.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (10次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (4次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 8/61
 * Lines: 70286 - 71785 (1500 lines)
 * Original file: cli.js
 */

            shouldRetry(A, Q, B) {
                return A.getRetryCount() + 1 < B && this.capacity >= this.getCapacityCost(Q.errorType) && this.isRetryableError(Q.errorType)
            }
            getCapacityCost(A) {
                return A === "TRANSIENT" ? aBQ : nBQ
            }
            isRetryableError(A) {
                return A === "THROTTLING" || A === "TRANSIENT"
            }
        },
        oN4 = class {
            constructor(A, Q) {
                this.maxAttemptsProvider = A, this.mode = "adaptive";
                let {
                    rateLimiter: B
                } = Q ?? {};
                this.rateLimiter = B ?? new lBQ, this.standardRetryStrategy = new OU1(A)
            }
            static {
                _R(this, "AdaptiveRetryStrategy")
            }
            async acquireInitialRetryToken(A) {
                return await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(A)
            }
            async refreshRetryTokenForRetry(A, Q) {
                return this.rateLimiter.updateClientSendingRate(Q), this.standardRetryStrategy.refreshRetryTokenForRetry(A, Q)
            }
            recordSuccess(A) {
                this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(A)
            }
        },
        tN4 = class extends OU1 {
            static {
                _R(this, "ConfiguredRetryStrategy")
            }
            constructor(A, Q = $DA) {
                super(typeof A === "function" ? A : async () => A);
                if (typeof Q === "number") this.computeNextBackoffDelay = () => Q;
                else this.computeNextBackoffDelay = Q
            }
            async refreshRetryTokenForRetry(A, Q) {
                let B = await super.refreshRetryTokenForRetry(A, Q);
                return B.getRetryDelay = () => this.computeNextBackoffDelay(B.getRetryCount()), B
            }
        }
});
var I2Q = U((KX7, kU1) => {
    var {
        defineProperty: gfA,
        getOwnPropertyDescriptor: eN4,
        getOwnPropertyNames: AL4
    } = Object, QL4 = Object.prototype.hasOwnProperty, L3 = (A, Q) => gfA(A, "name", {
        value: Q,
        configurable: !0
    }), BL4 = (A, Q) => {
        for (var B in Q) gfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, TU1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of AL4(Q))
                if (!QL4.call(A, Z) && Z !== B) gfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = eN4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, GL4 = (A, Q, B) => (TU1(A, Q, "default"), B && TU1(B, Q, "default")), ZL4 = (A) => TU1(gfA({}, "__esModule", {
        value: !0
    }), A), SU1 = {};
    BL4(SU1, {
        Client: () => IL4,
        Command: () => eBQ,
        NoOpLogger: () => NL4,
        SENSITIVE_STRING: () => JL4,
        ServiceException: () => XL4,
        _json: () => jU1,
        collectBody: () => RU1.collectBody,
        convertMap: () => LL4,
        createAggregatedClient: () => WL4,
        decorateServiceException: () => A2Q,
        emitWarningIfUnsupportedVersion: () => DL4,
        extendedEncodeURIComponent: () => RU1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => wL4,
        getDefaultClientConfiguration: () => UL4,
        getDefaultExtensionConfiguration: () => B2Q,
        getValueFromTextNode: () => G2Q,
        isSerializableHeaderValue: () => qL4,
        loadConfigsForDefaultMode: () => KL4,
        map: () => _U1,
        resolveDefaultRuntimeConfig: () => $L4,
        resolvedPath: () => RU1.resolvedPath,
        serializeDateTime: () => jL4,
        serializeFloat: () => PL4,
        take: () => ML4,
        throwDefaultError: () => Q2Q,
        withBaseException: () => FL4
    });
    kU1.exports = ZL4(SU1);
    var tBQ = PR(),
        IL4 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, tBQ.constructStack)()
            }
            static {
                L3(this, "Client")
            }
            send(A, Q, B) {
                let G = typeof Q !== "function" ? Q : void 0,
                    Z = typeof Q === "function" ? Q : B,
                    I = G === void 0 && this.config.cacheMiddleware === !0,
                    Y;
                if (I) {
                    if (!this.handlers) this.handlers = new WeakMap;
                    let J = this.handlers;
                    if (J.has(A.constructor)) Y = J.get(A.constructor);
                    else Y = A.resolveMiddleware(this.middlewareStack, this.config, G), J.set(A.constructor, Y)
                } else delete this.handlers, Y = A.resolveMiddleware(this.middlewareStack, this.config, G);
                if (Z) Y(A).then((J) => Z(null, J.output), (J) => Z(J)).catch(() => {});
                else return Y(A).then((J) => J.output)
            }
            destroy() {
                this.config?.requestHandler?.destroy?.(), delete this.handlers
            }
        },
        RU1 = C5(),
        PU1 = DU1(),
        eBQ = class {
            constructor() {
                this.middlewareStack = (0, tBQ.constructStack)()
            }
            static {
                L3(this, "Command")
            }
            static classBuilder() {
                return new YL4
            }
            resolveMiddlewareWithContext(A, Q, B, {
                middlewareFn: G,
                clientName: Z,
                commandName: I,
                inputFilterSensitiveLog: Y,
                outputFilterSensitiveLog: J,
                smithyContext: W,
                additionalContext: X,
                CommandCtor: F
            }) {
                for (let C of G.bind(this)(F, A, Q, B)) this.middlewareStack.use(C);
                let V = A.concat(this.middlewareStack),
                    {
                        logger: K
                    } = Q,
                    D = {
                        logger: K,
                        clientName: Z,
                        commandName: I,
                        inputFilterSensitiveLog: Y,
                        outputFilterSensitiveLog: J,
                        [PU1.SMITHY_CONTEXT_KEY]: {
                            commandInstance: this,
                            ...W
                        },
                        ...X
                    },
                    {
                        requestHandler: H
                    } = Q;
                return V.resolve((C) => H.handle(C.request, B || {}), D)
            }
        },
        YL4 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                L3(this, "ClassBuilder")
            }
            init(A) {
                this._init = A
            }
            ep(A) {
                return this._ep = A, this
            }
            m(A) {
                return this._middlewareFn = A, this
            }
            s(A, Q, B = {}) {
                return this._smithyContext = {
                    service: A,
                    operation: Q,
                    ...B
                }, this
            }
            c(A = {}) {
                return this._additionalContext = A, this
            }
            n(A, Q) {
                return this._clientName = A, this._commandName = Q, this
            }
            f(A = (B) => B, Q = (B) => B) {
                return this._inputFilterSensitiveLog = A, this._outputFilterSensitiveLog = Q, this
            }
            ser(A) {
                return this._serializer = A, this
            }
            de(A) {
                return this._deserializer = A, this
            }
            sc(A) {
                return this._operationSchema = A, this._smithyContext.operationSchema = A, this
            }
            build() {
                let A = this,
                    Q;
                return Q = class extends eBQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this), this.schema = A._operationSchema
                    }
                    static {
                        L3(this, "CommandRef")
                    }
                    static getEndpointParameterInstructions() {
                        return A._ep
                    }
                    resolveMiddleware(B, G, Z) {
                        return this.resolveMiddlewareWithContext(B, G, Z, {
                            CommandCtor: Q,
                            middlewareFn: A._middlewareFn,
                            clientName: A._clientName,
                            commandName: A._commandName,
                            inputFilterSensitiveLog: A._inputFilterSensitiveLog,
                            outputFilterSensitiveLog: A._outputFilterSensitiveLog,
                            smithyContext: A._smithyContext,
                            additionalContext: A._additionalContext
                        })
                    }
                }
            }
        },
        JL4 = "***SensitiveInformation***",
        WL4 = L3((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = L3(async function(Y, J, W) {
                        let X = new G(Y);
                        if (typeof J === "function") this.send(X, J);
                        else if (typeof W === "function") {
                            if (typeof J !== "object") throw Error(`Expected http options but got ${typeof J}`);
                            this.send(X, J || {}, W)
                        } else return this.send(X, J)
                    }, "methodImpl"),
                    I = (B[0].toLowerCase() + B.slice(1)).replace(/Command$/, "");
                Q.prototype[I] = Z
            }
        }, "createAggregatedClient"),
        XL4 = class A extends Error {
            static {
                L3(this, "ServiceException")
            }
            constructor(Q) {
                super(Q.message);
                Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = Q.name, this.$fault = Q.$fault, this.$metadata = Q.$metadata
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return A.prototype.isPrototypeOf(B) || Boolean(B.$fault) && Boolean(B.$metadata) && (B.$fault === "client" || B.$fault === "server")
            }
            static[Symbol.hasInstance](Q) {
                if (!Q) return !1;
                let B = Q;
                if (this === A) return A.isInstance(Q);
                if (A.isInstance(Q)) {
                    if (B.name && this.name) return this.prototype.isPrototypeOf(Q) || B.name === this.name;
                    return this.prototype.isPrototypeOf(Q)
                }
                return !1
            }
        },
        A2Q = L3((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        Q2Q = L3(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = VL4(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw A2Q(Y, Q)
        }, "throwDefaultError"),
        FL4 = L3((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                Q2Q({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        VL4 = L3((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        KL4 = L3((A) => {
            switch (A) {
                case "standard":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "in-region":
                    return {
                        retryMode: "standard", connectionTimeout: 1100
                    };
                case "cross-region":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "mobile":
                    return {
                        retryMode: "standard", connectionTimeout: 30000
                    };
                default:
                    return {}
            }
        }, "loadConfigsForDefaultMode"),
        oBQ = !1,
        DL4 = L3((A) => {
            if (A && !oBQ && parseInt(A.substring(1, A.indexOf("."))) < 16) oBQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        HL4 = L3((A) => {
            let Q = [];
            for (let B in PU1.AlgorithmId) {
                let G = PU1.AlgorithmId[B];
                if (A[G] === void 0) continue;
                Q.push({
                    algorithmId: () => G,
                    checksumConstructor: () => A[G]
                })
            }
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        CL4 = L3((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        EL4 = L3((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        zL4 = L3((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        B2Q = L3((A) => {
            return Object.assign(HL4(A), EL4(A))
        }, "getDefaultExtensionConfiguration"),
        UL4 = B2Q,
        $L4 = L3((A) => {
            return Object.assign(CL4(A), zL4(A))
        }, "resolveDefaultRuntimeConfig"),
        wL4 = L3((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        G2Q = L3((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = G2Q(A[B]);
            return A
        }, "getValueFromTextNode"),
        qL4 = L3((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        NL4 = class {
            static {
                L3(this, "NoOpLogger")
            }
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
        };

    function _U1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, OL4(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            Z2Q(G, null, I, Y)
        }
        return G
    }
    L3(_U1, "map");
    var LL4 = L3((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        ML4 = L3((A, Q) => {
            let B = {};
            for (let G in Q) Z2Q(B, A, Q, G);
            return B
        }, "take"),
        OL4 = L3((A, Q, B) => {
            return _U1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        Z2Q = L3((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = RL4, W = TL4, X = G] = Y;
                if (typeof J === "function" && J(Q[X]) || typeof J !== "function" && !!J) A[G] = W(Q[X]);
                return
            }
            let [Z, I] = B[G];
            if (typeof I === "function") {
                let Y, J = Z === void 0 && (Y = I()) != null,
                    W = typeof Z === "function" && !!Z(void 0) || typeof Z !== "function" && !!Z;
                if (J) A[G] = Y;
                else if (W) A[G] = I()
            } else {
                let Y = Z === void 0 && I != null,
                    J = typeof Z === "function" && !!Z(I) || typeof Z !== "function" && !!Z;
                if (Y || J) A[G] = I
            }
        }, "applyInstruction"),
        RL4 = L3((A) => A != null, "nonNullish"),
        TL4 = L3((A) => A, "pass"),
        PL4 = L3((A) => {
            if (A !== A) return "NaN";
            switch (A) {
                case 1 / 0:
                    return "Infinity";
                case -1 / 0:
                    return "-Infinity";
                default:
                    return A
            }
        }, "serializeFloat"),
        jL4 = L3((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        jU1 = L3((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(jU1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = jU1(A[B])
                }
                return Q
            }
            return A
        }, "_json");
    GL4(SU1, c6(), kU1.exports)
});
var W2Q = U((Y2Q) => {
    Object.defineProperty(Y2Q, "__esModule", {
        value: !0
    });
    Y2Q.isStreamingPayload = void 0;
    var SL4 = UA("stream"),
        _L4 = (A) => (A === null || A === void 0 ? void 0 : A.body) instanceof SL4.Readable || typeof ReadableStream < "u" && (A === null || A === void 0 ? void 0 : A.body) instanceof ReadableStream;
    Y2Q.isStreamingPayload = _L4
});
var X6 = U(($X7, L2Q) => {
    var {
        defineProperty: ufA,
        getOwnPropertyDescriptor: kL4,
        getOwnPropertyNames: yL4
    } = Object, xL4 = Object.prototype.hasOwnProperty, UX = (A, Q) => ufA(A, "name", {
        value: Q,
        configurable: !0
    }), vL4 = (A, Q) => {
        for (var B in Q) ufA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, bL4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of yL4(Q))
                if (!xL4.call(A, Z) && Z !== B) ufA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = kL4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, fL4 = (A) => bL4(ufA({}, "__esModule", {
        value: !0
    }), A), F2Q = {};
    vL4(F2Q, {
        AdaptiveRetryStrategy: () => uL4,
        CONFIG_MAX_ATTEMPTS: () => xU1,
        CONFIG_RETRY_MODE: () => z2Q,
        ENV_MAX_ATTEMPTS: () => yU1,
        ENV_RETRY_MODE: () => E2Q,
        NODE_MAX_ATTEMPT_CONFIG_OPTIONS: () => mL4,
        NODE_RETRY_MODE_CONFIG_OPTIONS: () => cL4,
        StandardRetryStrategy: () => C2Q,
        defaultDelayDecider: () => K2Q,
        defaultRetryDecider: () => D2Q,
        getOmitRetryHeadersPlugin: () => pL4,
        getRetryAfterHint: () => N2Q,
        getRetryPlugin: () => rL4,
        omitRetryHeadersMiddleware: () => U2Q,
        omitRetryHeadersMiddlewareOptions: () => $2Q,
        resolveRetryConfig: () => dL4,
        retryMiddleware: () => w2Q,
        retryMiddlewareOptions: () => q2Q
    });
    L2Q.exports = fL4(F2Q);
    var T4A = pQQ(),
        V2Q = UDA(),
        yY = FW(),
        hL4 = UX((A, Q) => {
            let B = A,
                G = Q?.noRetryIncrement ?? yY.NO_RETRY_INCREMENT,
                Z = Q?.retryCost ?? yY.RETRY_COST,
                I = Q?.timeoutRetryCost ?? yY.TIMEOUT_RETRY_COST,
                Y = A,
                J = UX((V) => V.name === "TimeoutError" ? I : Z, "getCapacityAmount"),
                W = UX((V) => J(V) <= Y, "hasRetryTokens");
            return Object.freeze({
                hasRetryTokens: W,
                retrieveRetryTokens: UX((V) => {
                    if (!W(V)) throw Error("No retry token available");
                    let K = J(V);
                    return Y -= K, K
                }, "retrieveRetryTokens"),
                releaseRetryTokens: UX((V) => {
                    Y += V ?? G, Y = Math.min(Y, B)
                }, "releaseRetryTokens")
            })
        }, "getDefaultRetryQuota"),
        K2Q = UX((A, Q) => Math.floor(Math.min(yY.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** Q * A)), "defaultDelayDecider"),
        tm = qU1(),
        D2Q = UX((A) => {
            if (!A) return !1;
            return (0, tm.isRetryableByTrait)(A) || (0, tm.isClockSkewError)(A) || (0, tm.isThrottlingError)(A) || (0, tm.isTransientError)(A)
        }, "defaultRetryDecider"),
        H2Q = UX((A) => {
            if (A instanceof Error) return A;
            if (A instanceof Object) return Object.assign(Error(), A);
            if (typeof A === "string") return Error(A);
            return Error(`AWS SDK error wrapper for ${A}`)
        }, "asSdkError"),
        C2Q = class {
            constructor(A, Q) {
                this.maxAttemptsProvider = A, this.mode = yY.RETRY_MODES.STANDARD, this.retryDecider = Q?.retryDecider ?? D2Q, this.delayDecider = Q?.delayDecider ?? K2Q, this.retryQuota = Q?.retryQuota ?? hL4(yY.INITIAL_RETRY_TOKENS)
            }
            static {
                UX(this, "StandardRetryStrategy")
            }
            shouldRetry(A, Q, B) {
                return Q < B && this.retryDecider(A) && this.retryQuota.hasRetryTokens(A)
            }
            async getMaxAttempts() {
                let A;
                try {
                    A = await this.maxAttemptsProvider()
                } catch (Q) {
                    A = yY.DEFAULT_MAX_ATTEMPTS
                }
                return A
            }
            async retry(A, Q, B) {
                let G, Z = 0,
                    I = 0,
                    Y = await this.getMaxAttempts(),
                    {
                        request: J
                    } = Q;
                if (T4A.HttpRequest.isInstance(J)) J.headers[yY.INVOCATION_ID_HEADER] = (0, V2Q.v4)();
                while (!0) try {
                    if (T4A.HttpRequest.isInstance(J)) J.headers[yY.REQUEST_HEADER] = `attempt=${Z+1}; max=${Y}`;
                    if (B?.beforeRequest) await B.beforeRequest();
                    let {
                        response: W,
                        output: X
                    } = await A(Q);
                    if (B?.afterRequest) B.afterRequest(W);
                    return this.retryQuota.releaseRetryTokens(G), X.$metadata.attempts = Z + 1, X.$metadata.totalRetryDelay = I, {
                        response: W,
                        output: X
                    }
                } catch (W) {
                    let X = H2Q(W);
                    if (Z++, this.shouldRetry(X, Z, Y)) {
                        G = this.retryQuota.retrieveRetryTokens(X);
                        let F = this.delayDecider((0, tm.isThrottlingError)(X) ? yY.THROTTLING_RETRY_DELAY_BASE : yY.DEFAULT_RETRY_DELAY_BASE, Z),
                            V = gL4(X.$response),
                            K = Math.max(V || 0, F);
                        I += K, await new Promise((D) => setTimeout(D, K));
                        continue
                    }
                    if (!X.$metadata) X.$metadata = {};
                    throw X.$metadata.attempts = Z, X.$metadata.totalRetryDelay = I, X
                }
            }
        },
        gL4 = UX((A) => {
            if (!T4A.HttpResponse.isInstance(A)) return;
            let Q = Object.keys(A.headers).find((I) => I.toLowerCase() === "retry-after");
            if (!Q) return;
            let B = A.headers[Q],
                G = Number(B);
            if (!Number.isNaN(G)) return G * 1000;
            return new Date(B).getTime() - Date.now()
        }, "getDelayFromRetryAfterHeader"),
        uL4 = class extends C2Q {
            static {
                UX(this, "AdaptiveRetryStrategy")
            }
            constructor(A, Q) {
                let {
                    rateLimiter: B,
                    ...G
                } = Q ?? {};
                super(A, G);
                this.rateLimiter = B ?? new yY.DefaultRateLimiter, this.mode = yY.RETRY_MODES.ADAPTIVE
            }
            async retry(A, Q) {
                return super.retry(A, Q, {
                    beforeRequest: async () => {
                        return this.rateLimiter.getSendToken()
                    },
                    afterRequest: (B) => {
                        this.rateLimiter.updateClientSendingRate(B)
                    }
                })
            }
        },
        X2Q = K7(),
        yU1 = "AWS_MAX_ATTEMPTS",
        xU1 = "max_attempts",
        mL4 = {
            environmentVariableSelector: (A) => {
                let Q = A[yU1];
                if (!Q) return;
                let B = parseInt(Q);
                if (Number.isNaN(B)) throw Error(`Environment variable ${yU1} mast be a number, got "${Q}"`);
                return B
            },
            configFileSelector: (A) => {
                let Q = A[xU1];
                if (!Q) return;
                let B = parseInt(Q);
                if (Number.isNaN(B)) throw Error(`Shared config file entry ${xU1} mast be a number, got "${Q}"`);
                return B
            },
            default: yY.DEFAULT_MAX_ATTEMPTS
        },
        dL4 = UX((A) => {
            let {
                retryStrategy: Q,
                retryMode: B,
                maxAttempts: G
            } = A, Z = (0, X2Q.normalizeProvider)(G ?? yY.DEFAULT_MAX_ATTEMPTS);
            return Object.assign(A, {
                maxAttempts: Z,
                retryStrategy: async () => {
                    if (Q) return Q;
                    if (await (0, X2Q.normalizeProvider)(B)() === yY.RETRY_MODES.ADAPTIVE) return new yY.AdaptiveRetryStrategy(Z);
                    return new yY.StandardRetryStrategy(Z)
                }
            })
        }, "resolveRetryConfig"),
        E2Q = "AWS_RETRY_MODE",
        z2Q = "retry_mode",
        cL4 = {
            environmentVariableSelector: (A) => A[E2Q],
            configFileSelector: (A) => A[z2Q],
            default: yY.DEFAULT_RETRY_MODE
        },
        U2Q = UX(() => (A) => async (Q) => {
            let {
                request: B
            } = Q;
            if (T4A.HttpRequest.isInstance(B)) delete B.headers[yY.INVOCATION_ID_HEADER], delete B.headers[yY.REQUEST_HEADER];
            return A(Q)
        }, "omitRetryHeadersMiddleware"),
        $2Q = {
            name: "omitRetryHeadersMiddleware",
            tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
            relation: "before",
            toMiddleware: "awsAuthMiddleware",
            override: !0
        },
        pL4 = UX((A) => ({
            applyToStack: (Q) => {
                Q.addRelativeTo(U2Q(), $2Q)
            }
        }), "getOmitRetryHeadersPlugin"),
        lL4 = I2Q(),
        iL4 = W2Q(),
        w2Q = UX((A) => (Q, B) => async (G) => {
            let Z = await A.retryStrategy(),
                I = await A.maxAttempts();
            if (nL4(Z)) {
                Z = Z;
                let Y = await Z.acquireInitialRetryToken(B.partition_id),
                    J = Error(),
                    W = 0,
                    X = 0,
                    {
                        request: F
                    } = G,
                    V = T4A.HttpRequest.isInstance(F);
                if (V) F.headers[yY.INVOCATION_ID_HEADER] = (0, V2Q.v4)();
                while (!0) try {
                    if (V) F.headers[yY.REQUEST_HEADER] = `attempt=${W+1}; max=${I}`;
                    let {
                        response: K,
                        output: D
                    } = await Q(G);
                    return Z.recordSuccess(Y), D.$metadata.attempts = W + 1, D.$metadata.totalRetryDelay = X, {
                        response: K,
                        output: D
                    }
                } catch (K) {
                    let D = aL4(K);
                    if (J = H2Q(K), V && (0, iL4.isStreamingPayload)(F)) throw (B.logger instanceof lL4.NoOpLogger ? console : B.logger)?.warn("An error was encountered in a non-retryable streaming request."), J;
                    try {
                        Y = await Z.refreshRetryTokenForRetry(Y, D)
                    } catch (C) {
                        if (!J.$metadata) J.$metadata = {};
                        throw J.$metadata.attempts = W + 1, J.$metadata.totalRetryDelay = X, J
                    }
                    W = Y.getRetryCount();
                    let H = Y.getRetryDelay();
                    X += H, await new Promise((C) => setTimeout(C, H))
                }
            } else {
                if (Z = Z, Z?.mode) B.userAgent = [...B.userAgent || [],
                    ["cfg/retry-mode", Z.mode]
                ];
                return Z.retry(Q, G)
            }
        }, "retryMiddleware"),
        nL4 = UX((A) => typeof A.acquireInitialRetryToken < "u" && typeof A.refreshRetryTokenForRetry < "u" && typeof A.recordSuccess < "u", "isRetryStrategyV2"),
        aL4 = UX((A) => {
            let Q = {
                    error: A,
                    errorType: sL4(A)
                },
                B = N2Q(A.$response);
            if (B) Q.retryAfterHint = B;
            return Q
        }, "getRetryErrorInfo"),
        sL4 = UX((A) => {
            if ((0, tm.isThrottlingError)(A)) return "THROTTLING";
            if ((0, tm.isTransientError)(A)) return "TRANSIENT";
            if ((0, tm.isServerError)(A)) return "SERVER_ERROR";
            return "CLIENT_ERROR"
        }, "getRetryErrorType"),
        q2Q = {
            name: "retryMiddleware",
            tags: ["RETRY"],
            step: "finalizeRequest",
            priority: "high",
            override: !0
        },
        rL4 = UX((A) => ({
            applyToStack: (Q) => {
                Q.add(w2Q(A), q2Q)
            }
        }), "getRetryPlugin"),
        N2Q = UX((A) => {
            if (!T4A.HttpResponse.isInstance(A)) return;
            let Q = Object.keys(A.headers).find((I) => I.toLowerCase() === "retry-after");
            if (!Q) return;
            let B = A.headers[Q],
                G = Number(B);
            if (!Number.isNaN(G)) return new Date(G * 1000);
            return new Date(B)
        }, "getRetryAfterHint")
});
var bU1 = U((O2Q) => {
    Object.defineProperty(O2Q, "__esModule", {
        value: !0
    });
    O2Q.resolveHttpAuthSchemeConfig = O2Q.resolveStsAuthConfig = O2Q.defaultSTSHttpAuthSchemeProvider = O2Q.defaultSTSHttpAuthSchemeParametersProvider = void 0;
    var oL4 = wV(),
        vU1 = K7(),
        tL4 = wDA(),
        eL4 = async (A, Q, B) => {
            return {
                operation: (0, vU1.getSmithyContext)(Q).operation,
                region: await (0, vU1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    O2Q.defaultSTSHttpAuthSchemeParametersProvider = eL4;

    function AM4(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sts",
                region: A.region
            },
            propertiesExtractor: (Q, B) => ({
                signingProperties: {
                    config: Q,
                    context: B
                }
            })
        }
    }

    function M2Q(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var QM4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "AssumeRoleWithSAML": {
                Q.push(M2Q(A));
                break
            }
            case "AssumeRoleWithWebIdentity": {
                Q.push(M2Q(A));
                break
            }
            default:
                Q.push(AM4(A))
        }
        return Q
    };
    O2Q.defaultSTSHttpAuthSchemeProvider = QM4;
    var BM4 = (A) => Object.assign(A, {
        stsClientCtor: tL4.STSClient
    });
    O2Q.resolveStsAuthConfig = BM4;
    var GM4 = (A) => {
        let Q = O2Q.resolveStsAuthConfig(A),
            B = (0, oL4.resolveAwsSdkSigV4Config)(Q);
        return Object.assign(B, {
            authSchemePreference: (0, vU1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    O2Q.resolveHttpAuthSchemeConfig = GM4
});
var sN = U((P2Q) => {
    Object.defineProperty(P2Q, "__esModule", {
        value: !0
    });
    P2Q.commonParams = P2Q.resolveClientEndpointParameters = void 0;
    var YM4 = (A) => {
        return Object.assign(A, {
            useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
            useFipsEndpoint: A.useFipsEndpoint ?? !1,
            useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
            defaultSigningName: "sts"
        })
    };
    P2Q.resolveClientEndpointParameters = YM4;
    P2Q.commonParams = {
        UseGlobalEndpoint: {
            type: "builtInParams",
            name: "useGlobalEndpoint"
        },
        UseFIPS: {
            type: "builtInParams",
            name: "useFipsEndpoint"
        },
        Endpoint: {
            type: "builtInParams",
            name: "endpoint"
        },
        Region: {
            type: "builtInParams",
            name: "region"
        },
        UseDualStack: {
            type: "builtInParams",
            name: "useDualstackEndpoint"
        }
    }
});
var S2Q = U((MX7, WM4) => {
    WM4.exports = {
        name: "@aws-sdk/client-sts",
        description: "AWS SDK for JavaScript Sts Client for Node.js, Browser and React Native",
        version: "3.840.0",
        scripts: {
            build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline client-sts",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "rimraf ./dist-types tsconfig.types.tsbuildinfo && tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            "extract:docs": "api-extractor run --local",
            "generate:client": "node ../../scripts/generate-clients/single-service --solo sts",
            test: "yarn g:vitest run",
            "test:watch": "yarn g:vitest watch"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: !1,
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.840.0",
            "@aws-sdk/credential-provider-node": "3.840.0",
            "@aws-sdk/middleware-host-header": "3.840.0",
            "@aws-sdk/middleware-logger": "3.840.0",
            "@aws-sdk/middleware-recursion-detection": "3.840.0",
            "@aws-sdk/middleware-user-agent": "3.840.0",
            "@aws-sdk/region-config-resolver": "3.840.0",
            "@aws-sdk/types": "3.840.0",
            "@aws-sdk/util-endpoints": "3.840.0",
            "@aws-sdk/util-user-agent-browser": "3.840.0",
            "@aws-sdk/util-user-agent-node": "3.840.0",
            "@smithy/config-resolver": "^4.1.4",
            "@smithy/core": "^3.6.0",
            "@smithy/fetch-http-handler": "^5.0.4",
            "@smithy/hash-node": "^4.0.4",
            "@smithy/invalid-dependency": "^4.0.4",
            "@smithy/middleware-content-length": "^4.0.4",
            "@smithy/middleware-endpoint": "^4.1.13",
            "@smithy/middleware-retry": "^4.1.14",
            "@smithy/middleware-serde": "^4.0.8",
            "@smithy/middleware-stack": "^4.0.4",
            "@smithy/node-config-provider": "^4.1.3",
            "@smithy/node-http-handler": "^4.0.6",
            "@smithy/protocol-http": "^5.1.2",
            "@smithy/smithy-client": "^4.4.5",
            "@smithy/types": "^4.3.1",
            "@smithy/url-parser": "^4.0.4",
            "@smithy/util-base64": "^4.0.0",
            "@smithy/util-body-length-browser": "^4.0.0",
            "@smithy/util-body-length-node": "^4.0.0",
            "@smithy/util-defaults-mode-browser": "^4.0.21",
            "@smithy/util-defaults-mode-node": "^4.0.21",
            "@smithy/util-endpoints": "^3.0.6",
            "@smithy/util-middleware": "^4.0.4",
            "@smithy/util-retry": "^4.0.6",
            "@smithy/util-utf8": "^4.0.0",
            tslib: "^2.6.2"
        },
        devDependencies: {
            "@tsconfig/node18": "18.2.4",
            "@types/node": "^18.19.69",
            concurrently: "7.0.0",
            "downlevel-dts": "0.10.1",
            rimraf: "3.0.2",
            typescript: "~5.8.3"
        },
        engines: {
            node: ">=18.0.0"
        },
        typesVersions: {
            "<4.0": {
                "dist-types/*": ["dist-types/ts3.4/*"]
            }
        },
        files: ["dist-*/**"],
        author: {
            name: "AWS SDK for JavaScript Team",
            url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        browser: {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
        },
        "react-native": {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
        },
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sts",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "clients/client-sts"
        }
    }
});
var fU1 = U((OX7, h2Q) => {
    var {
        defineProperty: mfA,
        getOwnPropertyDescriptor: XM4,
        getOwnPropertyNames: FM4
    } = Object, VM4 = Object.prototype.hasOwnProperty, KM4 = (A, Q) => mfA(A, "name", {
        value: Q,
        configurable: !0
    }), DM4 = (A, Q) => {
        for (var B in Q) mfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, HM4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of FM4(Q))
                if (!VM4.call(A, Z) && Z !== B) mfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = XM4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, CM4 = (A) => HM4(mfA({}, "__esModule", {
        value: !0
    }), A), _2Q = {};
    DM4(_2Q, {
        ENV_ACCOUNT_ID: () => f2Q,
        ENV_CREDENTIAL_SCOPE: () => b2Q,
        ENV_EXPIRATION: () => v2Q,
        ENV_KEY: () => k2Q,
        ENV_SECRET: () => y2Q,
        ENV_SESSION: () => x2Q,
        fromEnv: () => UM4
    });
    h2Q.exports = CM4(_2Q);
    var EM4 = lN(),
        zM4 = P2(),
        k2Q = "AWS_ACCESS_KEY_ID",
        y2Q = "AWS_SECRET_ACCESS_KEY",
        x2Q = "AWS_SESSION_TOKEN",
        v2Q = "AWS_CREDENTIAL_EXPIRATION",
        b2Q = "AWS_CREDENTIAL_SCOPE",
        f2Q = "AWS_ACCOUNT_ID",
        UM4 = KM4((A) => async () => {
            A?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
            let Q = process.env[k2Q],
                B = process.env[y2Q],
                G = process.env[x2Q],
                Z = process.env[v2Q],
                I = process.env[b2Q],
                Y = process.env[f2Q];
            if (Q && B) {
                let J = {
                    accessKeyId: Q,
                    secretAccessKey: B,
                    ...G && {
                        sessionToken: G
                    },
                    ...Z && {
                        expiration: new Date(Z)
                    },
                    ...I && {
                        credentialScope: I
                    },
                    ...Y && {
                        accountId: Y
                    }
                };
                return (0, EM4.setCredentialFeature)(J, "CREDENTIALS_ENV_VARS", "g"), J
            }
            throw new zM4.CredentialsProviderError("Unable to find environment variable credentials.", {
                logger: A?.logger
            })
        }, "fromEnv")
});
var wF = U((RX7, o2Q) => {
    var {
        defineProperty: pfA,
        getOwnPropertyDescriptor: $M4,
        getOwnPropertyNames: wM4
    } = Object, qM4 = Object.prototype.hasOwnProperty, $X = (A, Q) => pfA(A, "name", {
        value: Q,
        configurable: !0
    }), NM4 = (A, Q) => {
        for (var B in Q) pfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, LM4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of wM4(Q))
                if (!qM4.call(A, Z) && Z !== B) pfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = $M4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, MM4 = (A) => LM4(pfA({}, "__esModule", {
        value: !0
    }), A), d2Q = {};
    NM4(d2Q, {
        DEFAULT_MAX_RETRIES: () => i2Q,
        DEFAULT_TIMEOUT: () => l2Q,
        ENV_CMDS_AUTH_TOKEN: () => uU1,
        ENV_CMDS_FULL_URI: () => dfA,
        ENV_CMDS_RELATIVE_URI: () => cfA,
        Endpoint: () => n2Q,
        fromContainerMetadata: () => PM4,
        fromInstanceMetadata: () => sM4,
        getInstanceMetadataEndpoint: () => s2Q,
        httpRequest: () => P4A,
        providerConfigFromInit: () => mU1
    });
    o2Q.exports = MM4(d2Q);
    var OM4 = UA("url"),
        JS = P2(),
        RM4 = UA("buffer"),
        TM4 = UA("http");

    function P4A(A) {
        return new Promise((Q, B) => {
            let G = (0, TM4.request)({
                method: "GET",
                ...A,
                hostname: A.hostname?.replace(/^\[(.+)\]$/, "$1")
            });
            G.on("error", (Z) => {
                B(Object.assign(new JS.ProviderError("Unable to connect to instance metadata service"), Z)), G.destroy()
            }), G.on("timeout", () => {
                B(new JS.ProviderError("TimeoutError from instance metadata service")), G.destroy()
            }), G.on("response", (Z) => {
                let {
                    statusCode: I = 400
                } = Z;
                if (I < 200 || 300 <= I) B(Object.assign(new JS.ProviderError("Error response received from instance metadata service"), {
                    statusCode: I
                })), G.destroy();
                let Y = [];
                Z.on("data", (J) => {
                    Y.push(J)
                }), Z.on("end", () => {
                    Q(RM4.Buffer.concat(Y)), G.destroy()
                })
            }), G.end()
        })
    }
    $X(P4A, "httpRequest");
    var c2Q = $X((A) => Boolean(A) && typeof A === "object" && typeof A.AccessKeyId === "string" && typeof A.SecretAccessKey === "string" && typeof A.Token === "string" && typeof A.Expiration === "string", "isImdsCredentials"),
        p2Q = $X((A) => ({
            accessKeyId: A.AccessKeyId,
            secretAccessKey: A.SecretAccessKey,
            sessionToken: A.Token,
            expiration: new Date(A.Expiration),
            ...A.AccountId && {
                accountId: A.AccountId
            }
        }), "fromImdsCredentials"),
        l2Q = 1000,
        i2Q = 0,
        mU1 = $X(({
            maxRetries: A = i2Q,
            timeout: Q = l2Q
        }) => ({
            maxRetries: A,
            timeout: Q
        }), "providerConfigFromInit"),
        gU1 = $X((A, Q) => {
            let B = A();
            for (let G = 0; G < Q; G++) B = B.catch(A);
            return B
        }, "retry"),
        dfA = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        cfA = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        uU1 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        PM4 = $X((A = {}) => {
            let {
                timeout: Q,
                maxRetries: B
            } = mU1(A);
            return () => gU1(async () => {
                let G = await yM4({
                        logger: A.logger
                    }),
                    Z = JSON.parse(await jM4(Q, G));
                if (!c2Q(Z)) throw new JS.CredentialsProviderError("Invalid response received from instance metadata service.", {
                    logger: A.logger
                });
                return p2Q(Z)
            }, B)
        }, "fromContainerMetadata"),
        jM4 = $X(async (A, Q) => {
            if (process.env[uU1]) Q.headers = {
                ...Q.headers,
                Authorization: process.env[uU1]
            };
            return (await P4A({
                ...Q,
                timeout: A
            })).toString()
        }, "requestFromEcsImds"),
        SM4 = "169.254.170.2",
        _M4 = {
            localhost: !0,
            "127.0.0.1": !0
        },
        kM4 = {
            "http:": !0,
            "https:": !0
        },
        yM4 = $X(async ({
            logger: A
        }) => {
            if (process.env[cfA]) return {
                hostname: SM4,
                path: process.env[cfA]
            };
            if (process.env[dfA]) {
                let Q = (0, OM4.parse)(process.env[dfA]);
                if (!Q.hostname || !(Q.hostname in _M4)) throw new JS.CredentialsProviderError(`${Q.hostname} is not a valid container metadata service hostname`, {
                    tryNextLink: !1,
                    logger: A
                });
                if (!Q.protocol || !(Q.protocol in kM4)) throw new JS.CredentialsProviderError(`${Q.protocol} is not a valid container metadata service protocol`, {
                    tryNextLink: !1,
                    logger: A
                });
                return {
                    ...Q,
                    port: Q.port ? parseInt(Q.port, 10) : void 0
                }
            }
            throw new JS.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${cfA} or ${dfA} environment variable is set`, {
                tryNextLink: !1,
                logger: A
            })
        }, "getCmdsUri"),
        xM4 = class A extends JS.CredentialsProviderError {
            constructor(Q, B = !0) {
                super(Q, B);
                this.tryNextLink = B, this.name = "InstanceMetadataV1FallbackError", Object.setPrototypeOf(this, A.prototype)
            }
            static {
                $X(this, "InstanceMetadataV1FallbackError")
            }
        },
        dU1 = xI(),
        vM4 = zJ(),
        n2Q = ((A) => {
            return A.IPv4 = "http://169.254.169.254", A.IPv6 = "http://[fd00:ec2::254]", A
        })(n2Q || {}),
        bM4 = "AWS_EC2_METADATA_SERVICE_ENDPOINT",
        fM4 = "ec2_metadata_service_endpoint",
        hM4 = {
            environmentVariableSelector: (A) => A[bM4],
            configFileSelector: (A) => A[fM4],
            default: void 0
        },
        a2Q = ((A) => {
            return A.IPv4 = "IPv4", A.IPv6 = "IPv6", A
        })(a2Q || {}),
        gM4 = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",
        uM4 = "ec2_metadata_service_endpoint_mode",
        mM4 = {
            environmentVariableSelector: (A) => A[gM4],
            configFileSelector: (A) => A[uM4],
            default: "IPv4"
        },
        s2Q = $X(async () => (0, vM4.parseUrl)(await dM4() || await cM4()), "getInstanceMetadataEndpoint"),
        dM4 = $X(async () => (0, dU1.loadConfig)(hM4)(), "getFromEndpointConfig"),
        cM4 = $X(async () => {
            let A = await (0, dU1.loadConfig)(mM4)();
            switch (A) {
                case "IPv4":
                    return "http://169.254.169.254";
                case "IPv6":
                    return "http://[fd00:ec2::254]";
                default:
                    throw Error(`Unsupported endpoint mode: ${A}. Select from ${Object.values(a2Q)}`)
            }
        }, "getFromEndpointModeConfig"),
        pM4 = 300,
        lM4 = 300,
        iM4 = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html",
        g2Q = $X((A, Q) => {
            let B = pM4 + Math.floor(Math.random() * lM4),
                G = new Date(Date.now() + B * 1000);
            Q.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(G)}.
For more information, please visit: ` + iM4);
            let Z = A.originalExpiration ?? A.expiration;
            return {
                ...A,
                ...Z ? {
                    originalExpiration: Z
                } : {},
                expiration: G
            }
        }, "getExtendedInstanceMetadataCredentials"),
        nM4 = $X((A, Q = {}) => {
            let B = Q?.logger || console,
                G;
            return async () => {
                let Z;
                try {
                    if (Z = await A(), Z.expiration && Z.expiration.getTime() < Date.now()) Z = g2Q(Z, B)
                } catch (I) {
                    if (G) B.warn("Credential renew failed: ", I), Z = g2Q(G, B);
                    else throw I
                }
                return G = Z, Z
            }
        }, "staticStabilityProvider"),
        r2Q = "/latest/meta-data/iam/security-credentials/",
        aM4 = "/latest/api/token",
        hU1 = "AWS_EC2_METADATA_V1_DISABLED",
        u2Q = "ec2_metadata_v1_disabled",
        m2Q = "x-aws-ec2-metadata-token",
        sM4 = $X((A = {}) => nM4(rM4(A), {
            logger: A.logger
        }), "fromInstanceMetadata"),
        rM4 = $X((A = {}) => {
            let Q = !1,
                {
                    logger: B,
                    profile: G
                } = A,
                {
                    timeout: Z,
                    maxRetries: I
                } = mU1(A),
                Y = $X(async (J, W) => {
                    if (Q || W.headers?.[m2Q] == null) {
                        let V = !1,
                            K = !1,
                            D = await (0, dU1.loadConfig)({
                                environmentVariableSelector: (H) => {
                                    let C = H[hU1];
                                    if (K = !!C && C !== "false", C === void 0) throw new JS.CredentialsProviderError(`${hU1} not set in env, checking config file next.`, {
                                        logger: A.logger
                                    });
                                    return K
                                },
                                configFileSelector: (H) => {
                                    let C = H[u2Q];
                                    return V = !!C && C !== "false", V
                                },
                                default: !1
                            }, {
                                profile: G
                            })();
                        if (A.ec2MetadataV1Disabled || D) {
                            let H = [];
                            if (A.ec2MetadataV1Disabled) H.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
                            if (V) H.push(`config file profile (${u2Q})`);
                            if (K) H.push(`process environment variable (${hU1})`);
                            throw new xM4(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${H.join(", ")}].`)
                        }
                    }
                    let F = (await gU1(async () => {
                        let V;
                        try {
                            V = await tM4(W)
                        } catch (K) {
                            if (K.statusCode === 401) Q = !1;
                            throw K
                        }
                        return V
                    }, J)).trim();
                    return gU1(async () => {
                        let V;
                        try {
                            V = await eM4(F, W, A)
                        } catch (K) {
                            if (K.statusCode === 401) Q = !1;
                            throw K
                        }
                        return V
                    }, J)
                }, "getCredentials");
            return async () => {
                let J = await s2Q();
                if (Q) return B?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), Y(I, {
                    ...J,
                    timeout: Z
                });
                else {
                    let W;
                    try {
                        W = (await oM4({
                            ...J,
                            timeout: Z
                        })).toString()
                    } catch (X) {
                        if (X?.statusCode === 400) throw Object.assign(X, {
                            message: "EC2 Metadata token request returned error"
                        });
                        else if (X.message === "TimeoutError" || [403, 404, 405].includes(X.statusCode)) Q = !0;
                        return B?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), Y(I, {
                            ...J,
                            timeout: Z
                        })
                    }
                    return Y(I, {
                        ...J,
                        headers: {
                            [m2Q]: W
                        },
                        timeout: Z
                    })
                }
            }
        }, "getInstanceMetadataProvider"),
        oM4 = $X(async (A) => P4A({
            ...A,
            path: aM4,
            method: "PUT",
            headers: {
                "x-aws-ec2-metadata-token-ttl-seconds": "21600"
            }
        }), "getMetadataToken"),
        tM4 = $X(async (A) => (await P4A({
            ...A,
            path: r2Q
        })).toString(), "getProfile"),
        eM4 = $X(async (A, Q, B) => {
            let G = JSON.parse((await P4A({
                ...Q,
                path: r2Q + A
            })).toString());
            if (!c2Q(G)) throw new JS.CredentialsProviderError("Invalid response received from instance metadata service.", {
                logger: B.logger
            });
            return p2Q(G)
        }, "getCredentialsFromProfile")
});
var A9Q = U((t2Q) => {
    Object.defineProperty(t2Q, "__esModule", {
        value: !0
    });
    t2Q.checkUrl = void 0;
    var AO4 = P2(),
        QO4 = "169.254.170.2",
        BO4 = "169.254.170.23",
        GO4 = "[fd00:ec2::23]",
        ZO4 = (A, Q) => {
            if (A.protocol === "https:") return;
            if (A.hostname === QO4 || A.hostname === BO4 || A.hostname === GO4) return;
            if (A.hostname.includes("[")) {
                if (A.hostname === "[::1]" || A.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return
            } else {
                if (A.hostname === "localhost") return;
                let B = A.hostname.split("."),
                    G = (Z) => {
                        let I = parseInt(Z, 10);
                        return 0 <= I && I <= 255
                    };
                if (B[0] === "127" && G(B[1]) && G(B[2]) && G(B[3]) && B.length === 4) return
            }
            throw new AO4.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
                logger: Q
            })
        };
    t2Q.checkUrl = ZO4
});
var B9Q = U((Q9Q) => {
    Object.defineProperty(Q9Q, "__esModule", {
        value: !0
    });
    Q9Q.createGetRequest = WO4;
    Q9Q.getCredentials = XO4;
    var cU1 = P2(),
        IO4 = cC(),
        YO4 = W6(),
        JO4 = cm();