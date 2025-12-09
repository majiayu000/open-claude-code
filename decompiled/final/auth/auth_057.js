/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_057.js
 * 处理时间: 2025-12-09T03:41:37.004Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  4x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 57/61
 * Lines: 306465 - 307960 (1496 lines)
 * Original file: cli.js
 */

            this.metadataGenerator = A
        }
        generateMetadata(A) {
            return new Promise((Q, B) => {
                this.metadataGenerator(A, (G, Z) => {
                    if (Z !== void 0) Q(Z);
                    else B(G)
                })
            })
        }
        compose(A) {
            return new n91([this, A])
        }
        _equals(A) {
            if (this === A) return !0;
            if (A instanceof wB0) return this.metadataGenerator === A.metadataGenerator;
            else return !1
        }
    }
    class qB0 extends bYA {
        generateMetadata(A) {
            return Promise.resolve(new $B0.Metadata)
        }
        compose(A) {
            return A
        }
        _equals(A) {
            return A instanceof qB0
        }
    }
});
var LB0 = U((WD2) => {
    Object.defineProperty(WD2, "__esModule", {
        value: !0
    });
    WD2.CIPHER_SUITES = void 0;
    WD2.getDefaultRootsData = O$5;
    var M$5 = UA("fs");
    WD2.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
    var JD2 = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH,
        NB0 = null;

    function O$5() {
        if (JD2) {
            if (NB0 === null) NB0 = M$5.readFileSync(JD2);
            return NB0
        }
        return null
    }
});
var mE = U((VD2) => {
    Object.defineProperty(VD2, "__esModule", {
        value: !0
    });
    VD2.parseUri = P$5;
    VD2.splitHostPort = j$5;
    VD2.combineHostPort = S$5;
    VD2.uriToString = _$5;
    var T$5 = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;

    function P$5(A) {
        let Q = T$5.exec(A);
        if (Q === null) return null;
        return {
            scheme: Q[1],
            authority: Q[2],
            path: Q[3]
        }
    }
    var FD2 = /^\d+$/;

    function j$5(A) {
        if (A.startsWith("[")) {
            let Q = A.indexOf("]");
            if (Q === -1) return null;
            let B = A.substring(1, Q);
            if (B.indexOf(":") === -1) return null;
            if (A.length > Q + 1)
                if (A[Q + 1] === ":") {
                    let G = A.substring(Q + 2);
                    if (FD2.test(G)) return {
                        host: B,
                        port: +G
                    };
                    else return null
                } else return null;
            else return {
                host: B
            }
        } else {
            let Q = A.split(":");
            if (Q.length === 2)
                if (FD2.test(Q[1])) return {
                    host: Q[0],
                    port: +Q[1]
                };
                else return null;
            else return {
                host: A
            }
        }
    }

    function S$5(A) {
        if (A.port === void 0) return A.host;
        else if (A.host.includes(":")) return `[${A.host}]:${A.port}`;
        else return `${A.host}:${A.port}`
    }

    function _$5(A) {
        let Q = "";
        if (A.scheme !== void 0) Q += A.scheme + ":";
        if (A.authority !== void 0) Q += "//" + A.authority + "/";
        return Q += A.path, Q
    }
});
var JP = U((KD2) => {
    Object.defineProperty(KD2, "__esModule", {
        value: !0
    });
    KD2.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = void 0;
    KD2.registerResolver = b$5;
    KD2.registerDefaultScheme = f$5;
    KD2.createResolver = h$5;
    KD2.getDefaultAuthority = g$5;
    KD2.mapUriDefaultScheme = u$5;
    var OB0 = mE();
    KD2.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = "grpc.internal.config_selector";
    var fYA = {},
        MB0 = null;

    function b$5(A, Q) {
        fYA[A] = Q
    }

    function f$5(A) {
        MB0 = A
    }

    function h$5(A, Q, B) {
        if (A.scheme !== void 0 && A.scheme in fYA) return new fYA[A.scheme](A, Q, B);
        else throw Error(`No resolver could be created for target ${(0,OB0.uriToString)(A)}`)
    }

    function g$5(A) {
        if (A.scheme !== void 0 && A.scheme in fYA) return fYA[A.scheme].getDefaultAuthority(A);
        else throw Error(`Invalid target ${(0,OB0.uriToString)(A)}`)
    }

    function u$5(A) {
        if (A.scheme === void 0 || !(A.scheme in fYA))
            if (MB0 !== null) return {
                scheme: MB0,
                authority: void 0,
                path: (0, OB0.uriToString)(A)
            };
            else return null;
        return A
    }
});
var gYA = U((zD2) => {
    Object.defineProperty(zD2, "__esModule", {
        value: !0
    });
    zD2.ChannelCredentials = void 0;
    zD2.createCertificateProviderChannelCredentials = s$5;
    var rMA = UA("tls"),
        o91 = a91(),
        TB0 = LB0(),
        HD2 = mE(),
        i$5 = JP(),
        n$5 = XZ(),
        a$5 = K6();

    function RB0(A, Q) {
        if (A && !(A instanceof Buffer)) throw TypeError(`${Q}, if provided, must be a Buffer.`)
    }
    class hYA {
        compose(A) {
            return new r91(this, A)
        }
        static createSsl(A, Q, B, G) {
            var Z;
            if (RB0(A, "Root certificate"), RB0(Q, "Private key"), RB0(B, "Certificate chain"), Q && !B) throw Error("Private key must be given with accompanying certificate chain");
            if (!Q && B) throw Error("Certificate chain must be given with accompanying private key");
            let I = (0, rMA.createSecureContext)({
                ca: (Z = A !== null && A !== void 0 ? A : (0, TB0.getDefaultRootsData)()) !== null && Z !== void 0 ? Z : void 0,
                key: Q !== null && Q !== void 0 ? Q : void 0,
                cert: B !== null && B !== void 0 ? B : void 0,
                ciphers: TB0.CIPHER_SUITES
            });
            return new s91(I, G !== null && G !== void 0 ? G : {})
        }
        static createFromSecureContext(A, Q) {
            return new s91(A, Q !== null && Q !== void 0 ? Q : {})
        }
        static createInsecure() {
            return new PB0
        }
    }
    zD2.ChannelCredentials = hYA;
    class PB0 extends hYA {
        constructor() {
            super()
        }
        compose(A) {
            throw Error("Cannot compose insecure credentials")
        }
        _isSecure() {
            return !1
        }
        _equals(A) {
            return A instanceof PB0
        }
        _createSecureConnector(A, Q, B) {
            return {
                connect(G) {
                    return Promise.resolve({
                        socket: G,
                        secure: !1
                    })
                },
                waitForReady: () => {
                    return Promise.resolve()
                },
                getCallCredentials: () => {
                    return B !== null && B !== void 0 ? B : o91.CallCredentials.createEmpty()
                },
                destroy() {}
            }
        }
    }

    function CD2(A, Q, B, G) {
        var Z, I;
        let Y = {
                secureContext: A
            },
            J = B;
        if ("grpc.http_connect_target" in G) {
            let V = (0, HD2.parseUri)(G["grpc.http_connect_target"]);
            if (V) J = V
        }
        let W = (0, i$5.getDefaultAuthority)(J),
            X = (0, HD2.splitHostPort)(W),
            F = (Z = X === null || X === void 0 ? void 0 : X.host) !== null && Z !== void 0 ? Z : W;
        if (Y.host = F, Q.checkServerIdentity) Y.checkServerIdentity = Q.checkServerIdentity;
        if (Q.rejectUnauthorized !== void 0) Y.rejectUnauthorized = Q.rejectUnauthorized;
        if (Y.ALPNProtocols = ["h2"], G["grpc.ssl_target_name_override"]) {
            let V = G["grpc.ssl_target_name_override"],
                K = (I = Y.checkServerIdentity) !== null && I !== void 0 ? I : rMA.checkServerIdentity;
            Y.checkServerIdentity = (D, H) => {
                return K(V, H)
            }, Y.servername = V
        } else Y.servername = F;
        if (G["grpc-node.tls_enable_trace"]) Y.enableTrace = !0;
        return Y
    }
    class ED2 {
        constructor(A, Q) {
            this.connectionOptions = A, this.callCredentials = Q
        }
        connect(A) {
            let Q = Object.assign({
                socket: A
            }, this.connectionOptions);
            return new Promise((B, G) => {
                let Z = (0, rMA.connect)(Q, () => {
                    var I;
                    if (((I = this.connectionOptions.rejectUnauthorized) !== null && I !== void 0 ? I : !0) && !Z.authorized) {
                        G(Z.authorizationError);
                        return
                    }
                    B({
                        socket: Z,
                        secure: !0
                    })
                });
                Z.on("error", (I) => {
                    G(I)
                })
            })
        }
        waitForReady() {
            return Promise.resolve()
        }
        getCallCredentials() {
            return this.callCredentials
        }
        destroy() {}
    }
    class s91 extends hYA {
        constructor(A, Q) {
            super();
            this.secureContext = A, this.verifyOptions = Q
        }
        _isSecure() {
            return !0
        }
        _equals(A) {
            if (this === A) return !0;
            if (A instanceof s91) return this.secureContext === A.secureContext && this.verifyOptions.checkServerIdentity === A.verifyOptions.checkServerIdentity;
            else return !1
        }
        _createSecureConnector(A, Q, B) {
            let G = CD2(this.secureContext, this.verifyOptions, A, Q);
            return new ED2(G, B !== null && B !== void 0 ? B : o91.CallCredentials.createEmpty())
        }
    }
    class sMA extends hYA {
        constructor(A, Q, B) {
            super();
            this.caCertificateProvider = A, this.identityCertificateProvider = Q, this.verifyOptions = B, this.refcount = 0, this.latestCaUpdate = void 0, this.latestIdentityUpdate = void 0, this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this), this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this), this.secureContextWatchers = []
        }
        _isSecure() {
            return !0
        }
        _equals(A) {
            var Q, B;
            if (this === A) return !0;
            if (A instanceof sMA) return this.caCertificateProvider === A.caCertificateProvider && this.identityCertificateProvider === A.identityCertificateProvider && ((Q = this.verifyOptions) === null || Q === void 0 ? void 0 : Q.checkServerIdentity) === ((B = A.verifyOptions) === null || B === void 0 ? void 0 : B.checkServerIdentity);
            else return !1
        }
        ref() {
            var A;
            if (this.refcount === 0) this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener), (A = this.identityCertificateProvider) === null || A === void 0 || A.addIdentityCertificateListener(this.identityCertificateUpdateListener);
            this.refcount += 1
        }
        unref() {
            var A;
            if (this.refcount -= 1, this.refcount === 0) this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener), (A = this.identityCertificateProvider) === null || A === void 0 || A.removeIdentityCertificateListener(this.identityCertificateUpdateListener)
        }
        _createSecureConnector(A, Q, B) {
            return this.ref(), new sMA.SecureConnectorImpl(this, A, Q, B !== null && B !== void 0 ? B : o91.CallCredentials.createEmpty())
        }
        maybeUpdateWatchers() {
            if (this.hasReceivedUpdates()) {
                for (let A of this.secureContextWatchers) A(this.getLatestSecureContext());
                this.secureContextWatchers = []
            }
        }
        handleCaCertificateUpdate(A) {
            this.latestCaUpdate = A, this.maybeUpdateWatchers()
        }
        handleIdentityCertitificateUpdate(A) {
            this.latestIdentityUpdate = A, this.maybeUpdateWatchers()
        }
        hasReceivedUpdates() {
            if (this.latestCaUpdate === void 0) return !1;
            if (this.identityCertificateProvider && this.latestIdentityUpdate === void 0) return !1;
            return !0
        }
        getSecureContext() {
            if (this.hasReceivedUpdates()) return Promise.resolve(this.getLatestSecureContext());
            else return new Promise((A) => {
                this.secureContextWatchers.push(A)
            })
        }
        getLatestSecureContext() {
            var A, Q;
            if (!this.latestCaUpdate) return null;
            if (this.identityCertificateProvider !== null && !this.latestIdentityUpdate) return null;
            try {
                return (0, rMA.createSecureContext)({
                    ca: this.latestCaUpdate.caCertificate,
                    key: (A = this.latestIdentityUpdate) === null || A === void 0 ? void 0 : A.privateKey,
                    cert: (Q = this.latestIdentityUpdate) === null || Q === void 0 ? void 0 : Q.certificate,
                    ciphers: TB0.CIPHER_SUITES
                })
            } catch (B) {
                return (0, n$5.log)(a$5.LogVerbosity.ERROR, "Failed to createSecureContext with error " + B.message), null
            }
        }
    }
    sMA.SecureConnectorImpl = class {
        constructor(A, Q, B, G) {
            this.parent = A, this.channelTarget = Q, this.options = B, this.callCredentials = G
        }
        connect(A) {
            return new Promise((Q, B) => {
                let G = this.parent.getLatestSecureContext();
                if (!G) {
                    B(Error("Failed to load credentials"));
                    return
                }
                if (A.closed) B(Error("Socket closed while loading credentials"));
                let Z = CD2(G, this.parent.verifyOptions, this.channelTarget, this.options),
                    I = Object.assign({
                        socket: A
                    }, Z),
                    Y = () => {
                        B(Error("Socket closed"))
                    },
                    J = (X) => {
                        B(X)
                    },
                    W = (0, rMA.connect)(I, () => {
                        var X;
                        if (W.removeListener("close", Y), W.removeListener("error", J), ((X = this.parent.verifyOptions.rejectUnauthorized) !== null && X !== void 0 ? X : !0) && !W.authorized) {
                            B(W.authorizationError);
                            return
                        }
                        Q({
                            socket: W,
                            secure: !0
                        })
                    });
                W.once("close", Y), W.once("error", J)
            })
        }
        async waitForReady() {
            await this.parent.getSecureContext()
        }
        getCallCredentials() {
            return this.callCredentials
        }
        destroy() {
            this.parent.unref()
        }
    };

    function s$5(A, Q, B) {
        return new sMA(A, Q, B !== null && B !== void 0 ? B : {})
    }
    class r91 extends hYA {
        constructor(A, Q) {
            super();
            if (this.channelCredentials = A, this.callCredentials = Q, !A._isSecure()) throw Error("Cannot compose insecure credentials")
        }
        compose(A) {
            let Q = this.callCredentials.compose(A);
            return new r91(this.channelCredentials, Q)
        }
        _isSecure() {
            return !0
        }
        _equals(A) {
            if (this === A) return !0;
            if (A instanceof r91) return this.channelCredentials._equals(A.channelCredentials) && this.callCredentials._equals(A.callCredentials);
            else return !1
        }
        _createSecureConnector(A, Q, B) {
            let G = this.callCredentials.compose(B !== null && B !== void 0 ? B : o91.CallCredentials.createEmpty());
            return this.channelCredentials._createSecureConnector(A, Q, G)
        }
    }
});
var xi = U((wD2) => {
    Object.defineProperty(wD2, "__esModule", {
        value: !0
    });
    wD2.createChildChannelControlHelper = e$5;
    wD2.registerLoadBalancerType = Aw5;
    wD2.registerDefaultLoadBalancerType = Qw5;
    wD2.createLoadBalancer = Bw5;
    wD2.isLoadBalancerNameRegistered = Gw5;
    wD2.parseLoadBalancingConfig = $D2;
    wD2.getDefaultConfig = Zw5;
    wD2.selectLbConfigFromList = Iw5;
    var o$5 = XZ(),
        t$5 = K6();

    function e$5(A, Q) {
        var B, G, Z, I, Y, J, W, X, F, V;
        return {
            createSubchannel: (G = (B = Q.createSubchannel) === null || B === void 0 ? void 0 : B.bind(Q)) !== null && G !== void 0 ? G : A.createSubchannel.bind(A),
            updateState: (I = (Z = Q.updateState) === null || Z === void 0 ? void 0 : Z.bind(Q)) !== null && I !== void 0 ? I : A.updateState.bind(A),
            requestReresolution: (J = (Y = Q.requestReresolution) === null || Y === void 0 ? void 0 : Y.bind(Q)) !== null && J !== void 0 ? J : A.requestReresolution.bind(A),
            addChannelzChild: (X = (W = Q.addChannelzChild) === null || W === void 0 ? void 0 : W.bind(Q)) !== null && X !== void 0 ? X : A.addChannelzChild.bind(A),
            removeChannelzChild: (V = (F = Q.removeChannelzChild) === null || F === void 0 ? void 0 : F.bind(Q)) !== null && V !== void 0 ? V : A.removeChannelzChild.bind(A)
        }
    }
    var yi = {},
        oMA = null;

    function Aw5(A, Q, B) {
        yi[A] = {
            LoadBalancer: Q,
            LoadBalancingConfig: B
        }
    }

    function Qw5(A) {
        oMA = A
    }

    function Bw5(A, Q) {
        let B = A.getLoadBalancerName();
        if (B in yi) return new yi[B].LoadBalancer(Q);
        else return null
    }

    function Gw5(A) {
        return A in yi
    }

    function $D2(A) {
        let Q = Object.keys(A);
        if (Q.length !== 1) throw Error("Provided load balancing config has multiple conflicting entries");
        let B = Q[0];
        if (B in yi) try {
            return yi[B].LoadBalancingConfig.createFromJson(A[B])
        } catch (G) {
            throw Error(`${B}: ${G.message}`)
        } else throw Error(`Unrecognized load balancing config name ${B}`)
    }

    function Zw5() {
        if (!oMA) throw Error("No default load balancer type registered");
        return new yi[oMA].LoadBalancingConfig
    }

    function Iw5(A, Q = !1) {
        for (let B of A) try {
            return $D2(B)
        } catch (G) {
            (0, o$5.log)(t$5.LogVerbosity.DEBUG, "Config parsing failed with error", G.message);
            continue
        }
        if (Q)
            if (oMA) return new yi[oMA].LoadBalancingConfig;
            else return null;
        else return null
    }
});
var jB0 = U((LD2) => {
    Object.defineProperty(LD2, "__esModule", {
        value: !0
    });
    LD2.validateRetryThrottling = qD2;
    LD2.validateServiceConfig = ND2;
    LD2.extractAndSelectServiceConfig = Lw5;
    var Hw5 = UA("os"),
        t91 = K6(),
        e91 = /^\d+(\.\d{1,9})?s$/,
        Cw5 = "node";

    function Ew5(A) {
        if ("service" in A && A.service !== "") {
            if (typeof A.service !== "string") throw Error(`Invalid method config name: invalid service: expected type string, got ${typeof A.service}`);
            if ("method" in A && A.method !== "") {
                if (typeof A.method !== "string") throw Error(`Invalid method config name: invalid method: expected type string, got ${typeof A.service}`);
                return {
                    service: A.service,
                    method: A.method
                }
            } else return {
                service: A.service
            }
        } else {
            if ("method" in A && A.method !== void 0) throw Error("Invalid method config name: method set with empty or unset service");
            return {}
        }
    }

    function zw5(A) {
        if (!("maxAttempts" in A) || !Number.isInteger(A.maxAttempts) || A.maxAttempts < 2) throw Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
        if (!("initialBackoff" in A) || typeof A.initialBackoff !== "string" || !e91.test(A.initialBackoff)) throw Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s");
        if (!("maxBackoff" in A) || typeof A.maxBackoff !== "string" || !e91.test(A.maxBackoff)) throw Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s");
        if (!("backoffMultiplier" in A) || typeof A.backoffMultiplier !== "number" || A.backoffMultiplier <= 0) throw Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
        if (!(("retryableStatusCodes" in A) && Array.isArray(A.retryableStatusCodes))) throw Error("Invalid method config retry policy: retryableStatusCodes is required");
        if (A.retryableStatusCodes.length === 0) throw Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
        for (let Q of A.retryableStatusCodes)
            if (typeof Q === "number") {
                if (!Object.values(t91.Status).includes(Q)) throw Error("Invalid method config retry policy: retryableStatusCodes value not in status code range")
            } else if (typeof Q === "string") {
            if (!Object.values(t91.Status).includes(Q.toUpperCase())) throw Error("Invalid method config retry policy: retryableStatusCodes value not a status code name")
        } else throw Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
        return {
            maxAttempts: A.maxAttempts,
            initialBackoff: A.initialBackoff,
            maxBackoff: A.maxBackoff,
            backoffMultiplier: A.backoffMultiplier,
            retryableStatusCodes: A.retryableStatusCodes
        }
    }

    function Uw5(A) {
        if (!("maxAttempts" in A) || !Number.isInteger(A.maxAttempts) || A.maxAttempts < 2) throw Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
        if ("hedgingDelay" in A && (typeof A.hedgingDelay !== "string" || !e91.test(A.hedgingDelay))) throw Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
        if ("nonFatalStatusCodes" in A && Array.isArray(A.nonFatalStatusCodes))
            for (let B of A.nonFatalStatusCodes)
                if (typeof B === "number") {
                    if (!Object.values(t91.Status).includes(B)) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range")
                } else if (typeof B === "string") {
            if (!Object.values(t91.Status).includes(B.toUpperCase())) throw Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name")
        } else throw Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
        let Q = {
            maxAttempts: A.maxAttempts
        };
        if (A.hedgingDelay) Q.hedgingDelay = A.hedgingDelay;
        if (A.nonFatalStatusCodes) Q.nonFatalStatusCodes = A.nonFatalStatusCodes;
        return Q
    }

    function $w5(A) {
        var Q;
        let B = {
            name: []
        };
        if (!("name" in A) || !Array.isArray(A.name)) throw Error("Invalid method config: invalid name array");
        for (let G of A.name) B.name.push(Ew5(G));
        if ("waitForReady" in A) {
            if (typeof A.waitForReady !== "boolean") throw Error("Invalid method config: invalid waitForReady");
            B.waitForReady = A.waitForReady
        }
        if ("timeout" in A)
            if (typeof A.timeout === "object") {
                if (!("seconds" in A.timeout) || typeof A.timeout.seconds !== "number") throw Error("Invalid method config: invalid timeout.seconds");
                if (!("nanos" in A.timeout) || typeof A.timeout.nanos !== "number") throw Error("Invalid method config: invalid timeout.nanos");
                B.timeout = A.timeout
            } else if (typeof A.timeout === "string" && e91.test(A.timeout)) {
            let G = A.timeout.substring(0, A.timeout.length - 1).split(".");
            B.timeout = {
                seconds: G[0] | 0,
                nanos: ((Q = G[1]) !== null && Q !== void 0 ? Q : 0) | 0
            }
        } else throw Error("Invalid method config: invalid timeout");
        if ("maxRequestBytes" in A) {
            if (typeof A.maxRequestBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
            B.maxRequestBytes = A.maxRequestBytes
        }
        if ("maxResponseBytes" in A) {
            if (typeof A.maxResponseBytes !== "number") throw Error("Invalid method config: invalid maxRequestBytes");
            B.maxResponseBytes = A.maxResponseBytes
        }
        if ("retryPolicy" in A)
            if ("hedgingPolicy" in A) throw Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");
            else B.retryPolicy = zw5(A.retryPolicy);
        else if ("hedgingPolicy" in A) B.hedgingPolicy = Uw5(A.hedgingPolicy);
        return B
    }

    function qD2(A) {
        if (!("maxTokens" in A) || typeof A.maxTokens !== "number" || A.maxTokens <= 0 || A.maxTokens > 1000) throw Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
        if (!("tokenRatio" in A) || typeof A.tokenRatio !== "number" || A.tokenRatio <= 0) throw Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
        return {
            maxTokens: +A.maxTokens.toFixed(3),
            tokenRatio: +A.tokenRatio.toFixed(3)
        }
    }

    function ww5(A) {
        if (!(typeof A === "object" && A !== null)) throw Error(`Invalid loadBalancingConfig: unexpected type ${typeof A}`);
        let Q = Object.keys(A);
        if (Q.length > 1) throw Error(`Invalid loadBalancingConfig: unexpected multiple keys ${Q}`);
        if (Q.length === 0) throw Error("Invalid loadBalancingConfig: load balancing policy name required");
        return {
            [Q[0]]: A[Q[0]]
        }
    }

    function ND2(A) {
        let Q = {
            loadBalancingConfig: [],
            methodConfig: []
        };
        if ("loadBalancingPolicy" in A)
            if (typeof A.loadBalancingPolicy === "string") Q.loadBalancingPolicy = A.loadBalancingPolicy;
            else throw Error("Invalid service config: invalid loadBalancingPolicy");
        if ("loadBalancingConfig" in A)
            if (Array.isArray(A.loadBalancingConfig))
                for (let G of A.loadBalancingConfig) Q.loadBalancingConfig.push(ww5(G));
            else throw Error("Invalid service config: invalid loadBalancingConfig");
        if ("methodConfig" in A) {
            if (Array.isArray(A.methodConfig))
                for (let G of A.methodConfig) Q.methodConfig.push($w5(G))
        }
        if ("retryThrottling" in A) Q.retryThrottling = qD2(A.retryThrottling);
        let B = [];
        for (let G of Q.methodConfig)
            for (let Z of G.name) {
                for (let I of B)
                    if (Z.service === I.service && Z.method === I.method) throw Error(`Invalid service config: duplicate name ${Z.service}/${Z.method}`);
                B.push(Z)
            }
        return Q
    }

    function qw5(A) {
        if (!("serviceConfig" in A)) throw Error("Invalid service config choice: missing service config");
        let Q = {
            serviceConfig: ND2(A.serviceConfig)
        };
        if ("clientLanguage" in A)
            if (Array.isArray(A.clientLanguage)) {
                Q.clientLanguage = [];
                for (let G of A.clientLanguage)
                    if (typeof G === "string") Q.clientLanguage.push(G);
                    else throw Error("Invalid service config choice: invalid clientLanguage")
            } else throw Error("Invalid service config choice: invalid clientLanguage");
        if ("clientHostname" in A)
            if (Array.isArray(A.clientHostname)) {
                Q.clientHostname = [];
                for (let G of A.clientHostname)
                    if (typeof G === "string") Q.clientHostname.push(G);
                    else throw Error("Invalid service config choice: invalid clientHostname")
            } else throw Error("Invalid service config choice: invalid clientHostname");
        if ("percentage" in A)
            if (typeof A.percentage === "number" && 0 <= A.percentage && A.percentage <= 100) Q.percentage = A.percentage;
            else throw Error("Invalid service config choice: invalid percentage");
        let B = ["clientLanguage", "percentage", "clientHostname", "serviceConfig"];
        for (let G in A)
            if (!B.includes(G)) throw Error(`Invalid service config choice: unexpected field ${G}`);
        return Q
    }

    function Nw5(A, Q) {
        if (!Array.isArray(A)) throw Error("Invalid service config list");
        for (let B of A) {
            let G = qw5(B);
            if (typeof G.percentage === "number" && Q > G.percentage) continue;
            if (Array.isArray(G.clientHostname)) {
                let Z = !1;
                for (let I of G.clientHostname)
                    if (I === Hw5.hostname()) Z = !0;
                if (!Z) continue
            }
            if (Array.isArray(G.clientLanguage)) {
                let Z = !1;
                for (let I of G.clientLanguage)
                    if (I === Cw5) Z = !0;
                if (!Z) continue
            }
            return G.serviceConfig
        }
        throw Error("No matching service config found")
    }

    function Lw5(A, Q) {
        for (let B of A)
            if (B.length > 0 && B[0].startsWith("grpc_config=")) {
                let G = B.join("").substring(12),
                    Z = JSON.parse(G);
                return Nw5(Z, Q)
            } return null
    }
});
var dE = U((OD2) => {
    Object.defineProperty(OD2, "__esModule", {
        value: !0
    });
    OD2.ConnectivityState = void 0;
    var MD2;
    (function(A) {
        A[A.IDLE = 0] = "IDLE", A[A.CONNECTING = 1] = "CONNECTING", A[A.READY = 2] = "READY", A[A.TRANSIENT_FAILURE = 3] = "TRANSIENT_FAILURE", A[A.SHUTDOWN = 4] = "SHUTDOWN"
    })(MD2 || (OD2.ConnectivityState = MD2 = {}))
});
var wh = U((jD2) => {
    Object.defineProperty(jD2, "__esModule", {
        value: !0
    });
    jD2.QueuePicker = jD2.UnavailablePicker = jD2.PickResultType = void 0;
    var Tw5 = BK(),
        Pw5 = K6(),
        A41;
    (function(A) {
        A[A.COMPLETE = 0] = "COMPLETE", A[A.QUEUE = 1] = "QUEUE", A[A.TRANSIENT_FAILURE = 2] = "TRANSIENT_FAILURE", A[A.DROP = 3] = "DROP"
    })(A41 || (jD2.PickResultType = A41 = {}));
    class TD2 {
        constructor(A) {
            this.status = Object.assign({
                code: Pw5.Status.UNAVAILABLE,
                details: "No connection established",
                metadata: new Tw5.Metadata
            }, A)
        }
        pick(A) {
            return {
                pickResultType: A41.TRANSIENT_FAILURE,
                subchannel: null,
                status: this.status,
                onCallStarted: null,
                onCallEnded: null
            }
        }
    }
    jD2.UnavailablePicker = TD2;
    class PD2 {
        constructor(A, Q) {
            this.loadBalancer = A, this.childPicker = Q, this.calledExitIdle = !1
        }
        pick(A) {
            if (!this.calledExitIdle) process.nextTick(() => {
                this.loadBalancer.exitIdle()
            }), this.calledExitIdle = !0;
            if (this.childPicker) return this.childPicker.pick(A);
            else return {
                pickResultType: A41.QUEUE,
                subchannel: null,
                status: null,
                onCallStarted: null,
                onCallEnded: null
            }
        }
    }
    jD2.QueuePicker = PD2
});
var uYA = U((_D2) => {
    Object.defineProperty(_D2, "__esModule", {
        value: !0
    });
    _D2.BackoffTimeout = void 0;
    var _w5 = K6(),
        kw5 = XZ(),
        yw5 = "backoff",
        xw5 = 1000,
        vw5 = 1.6,
        bw5 = 120000,
        fw5 = 0.2;

    function hw5(A, Q) {
        return Math.random() * (Q - A) + A
    }
    class Q41 {
        constructor(A, Q) {
            if (this.callback = A, this.initialDelay = xw5, this.multiplier = vw5, this.maxDelay = bw5, this.jitter = fw5, this.running = !1, this.hasRef = !0, this.startTime = new Date, this.endTime = new Date, this.id = Q41.getNextId(), Q) {
                if (Q.initialDelay) this.initialDelay = Q.initialDelay;
                if (Q.multiplier) this.multiplier = Q.multiplier;
                if (Q.jitter) this.jitter = Q.jitter;
                if (Q.maxDelay) this.maxDelay = Q.maxDelay
            }
            this.trace("constructed initialDelay=" + this.initialDelay + " multiplier=" + this.multiplier + " jitter=" + this.jitter + " maxDelay=" + this.maxDelay), this.nextDelay = this.initialDelay, this.timerId = setTimeout(() => {}, 0), clearTimeout(this.timerId)
        }
        static getNextId() {
            return this.nextId++
        }
        trace(A) {
            kw5.trace(_w5.LogVerbosity.DEBUG, yw5, "{" + this.id + "} " + A)
        }
        runTimer(A) {
            var Q, B;
            if (this.trace("runTimer(delay=" + A + ")"), this.endTime = this.startTime, this.endTime.setMilliseconds(this.endTime.getMilliseconds() + A), clearTimeout(this.timerId), this.timerId = setTimeout(() => {
                    this.trace("timer fired"), this.running = !1, this.callback()
                }, A), !this.hasRef)(B = (Q = this.timerId).unref) === null || B === void 0 || B.call(Q)
        }
        runOnce() {
            this.trace("runOnce()"), this.running = !0, this.startTime = new Date, this.runTimer(this.nextDelay);
            let A = Math.min(this.nextDelay * this.multiplier, this.maxDelay),
                Q = A * this.jitter;
            this.nextDelay = A + hw5(-Q, Q)
        }
        stop() {
            this.trace("stop()"), clearTimeout(this.timerId), this.running = !1
        }
        reset() {
            if (this.trace("reset() running=" + this.running), this.nextDelay = this.initialDelay, this.running) {
                let A = new Date,
                    Q = this.startTime;
                if (Q.setMilliseconds(Q.getMilliseconds() + this.nextDelay), clearTimeout(this.timerId), A < Q) this.runTimer(Q.getTime() - A.getTime());
                else this.running = !1
            }
        }
        isRunning() {
            return this.running
        }
        ref() {
            var A, Q;
            this.hasRef = !0, (Q = (A = this.timerId).ref) === null || Q === void 0 || Q.call(A)
        }
        unref() {
            var A, Q;
            this.hasRef = !1, (Q = (A = this.timerId).unref) === null || Q === void 0 || Q.call(A)
        }
        getEndTime() {
            return this.endTime
        }
    }
    _D2.BackoffTimeout = Q41;
    Q41.nextId = 0
});
var B41 = U((xD2) => {
    Object.defineProperty(xD2, "__esModule", {
        value: !0
    });
    xD2.ChildLoadBalancerHandler = void 0;
    var gw5 = xi(),
        uw5 = dE(),
        mw5 = "child_load_balancer_helper";
    class yD2 {
        constructor(A) {
            this.channelControlHelper = A, this.currentChild = null, this.pendingChild = null, this.latestConfig = null, this.ChildPolicyHelper = class {
                constructor(Q) {
                    this.parent = Q, this.child = null
                }
                createSubchannel(Q, B) {
                    return this.parent.channelControlHelper.createSubchannel(Q, B)
                }
                updateState(Q, B, G) {
                    var Z;
                    if (this.calledByPendingChild()) {
                        if (Q === uw5.ConnectivityState.CONNECTING) return;
                        (Z = this.parent.currentChild) === null || Z === void 0 || Z.destroy(), this.parent.currentChild = this.parent.pendingChild, this.parent.pendingChild = null
                    } else if (!this.calledByCurrentChild()) return;
                    this.parent.channelControlHelper.updateState(Q, B, G)
                }
                requestReresolution() {
                    var Q;
                    let B = (Q = this.parent.pendingChild) !== null && Q !== void 0 ? Q : this.parent.currentChild;
                    if (this.child === B) this.parent.channelControlHelper.requestReresolution()
                }
                setChild(Q) {
                    this.child = Q
                }
                addChannelzChild(Q) {
                    this.parent.channelControlHelper.addChannelzChild(Q)
                }
                removeChannelzChild(Q) {
                    this.parent.channelControlHelper.removeChannelzChild(Q)
                }
                calledByPendingChild() {
                    return this.child === this.parent.pendingChild
                }
                calledByCurrentChild() {
                    return this.child === this.parent.currentChild
                }
            }
        }
        configUpdateRequiresNewPolicyInstance(A, Q) {
            return A.getLoadBalancerName() !== Q.getLoadBalancerName()
        }
        updateAddressList(A, Q, B, G) {
            let Z;
            if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, Q)) {
                let I = new this.ChildPolicyHelper(this),
                    Y = (0, gw5.createLoadBalancer)(Q, I);
                if (I.setChild(Y), this.currentChild === null) this.currentChild = Y, Z = this.currentChild;
                else {
                    if (this.pendingChild) this.pendingChild.destroy();
                    this.pendingChild = Y, Z = this.pendingChild
                }
            } else if (this.pendingChild === null) Z = this.currentChild;
            else Z = this.pendingChild;
            return this.latestConfig = Q, Z.updateAddressList(A, Q, B, G)
        }
        exitIdle() {
            if (this.currentChild) {
                if (this.currentChild.exitIdle(), this.pendingChild) this.pendingChild.exitIdle()
            }
        }
        resetBackoff() {
            if (this.currentChild) {
                if (this.currentChild.resetBackoff(), this.pendingChild) this.pendingChild.resetBackoff()
            }
        }
        destroy() {
            if (this.currentChild) this.currentChild.destroy(), this.currentChild = null;
            if (this.pendingChild) this.pendingChild.destroy(), this.pendingChild = null
        }
        getTypeName() {
            return mw5
        }
    }
    xD2.ChildLoadBalancerHandler = yD2
});
var mD2 = U((gD2) => {
    Object.defineProperty(gD2, "__esModule", {
        value: !0
    });
    gD2.ResolvingLoadBalancer = void 0;
    var dw5 = xi(),
        cw5 = jB0(),
        sU = dE(),
        bD2 = JP(),
        tMA = wh(),
        pw5 = uYA(),
        SB0 = K6(),
        lw5 = BK(),
        iw5 = XZ(),
        nw5 = K6(),
        aw5 = mE(),
        sw5 = B41(),
        rw5 = "resolving_load_balancer";

    function fD2(A) {
        iw5.trace(nw5.LogVerbosity.DEBUG, rw5, A)
    }
    var ow5 = ["SERVICE_AND_METHOD", "SERVICE", "EMPTY"];

    function tw5(A, Q, B, G) {
        for (let Z of B.name) switch (G) {
            case "EMPTY":
                if (!Z.service && !Z.method) return !0;
                break;
            case "SERVICE":
                if (Z.service === A && !Z.method) return !0;
                break;
            case "SERVICE_AND_METHOD":
                if (Z.service === A && Z.method === Q) return !0
        }
        return !1
    }

    function ew5(A, Q, B, G) {
        for (let Z of B)
            if (tw5(A, Q, Z, G)) return Z;
        return null
    }

    function Aq5(A) {
        return {
            invoke(Q, B) {
                var G, Z;
                let I = Q.split("/").filter((W) => W.length > 0),
                    Y = (G = I[0]) !== null && G !== void 0 ? G : "",
                    J = (Z = I[1]) !== null && Z !== void 0 ? Z : "";
                if (A && A.methodConfig)
                    for (let W of ow5) {
                        let X = ew5(Y, J, A.methodConfig, W);
                        if (X) return {
                            methodConfig: X,
                            pickInformation: {},
                            status: SB0.Status.OK,
                            dynamicFilterFactories: []
                        }
                    }
                return {
                    methodConfig: {
                        name: []
                    },
                    pickInformation: {},
                    status: SB0.Status.OK,
                    dynamicFilterFactories: []
                }
            },
            unref() {}
        }
    }
    class hD2 {
        constructor(A, Q, B, G, Z) {
            if (this.target = A, this.channelControlHelper = Q, this.channelOptions = B, this.onSuccessfulResolution = G, this.onFailedResolution = Z, this.latestChildState = sU.ConnectivityState.IDLE, this.latestChildPicker = new tMA.QueuePicker(this), this.latestChildErrorMessage = null, this.currentState = sU.ConnectivityState.IDLE, this.previousServiceConfig = null, this.continueResolving = !1, B["grpc.service_config"]) this.defaultServiceConfig = (0, cw5.validateServiceConfig)(JSON.parse(B["grpc.service_config"]));
            else this.defaultServiceConfig = {
                loadBalancingConfig: [],
                methodConfig: []
            };
            this.updateState(sU.ConnectivityState.IDLE, new tMA.QueuePicker(this), null), this.childLoadBalancer = new sw5.ChildLoadBalancerHandler({
                createSubchannel: Q.createSubchannel.bind(Q),
                requestReresolution: () => {
                    if (this.backoffTimeout.isRunning()) fD2("requestReresolution delayed by backoff timer until " + this.backoffTimeout.getEndTime().toISOString()), this.continueResolving = !0;
                    else this.updateResolution()
                },
                updateState: (Y, J, W) => {
                    this.latestChildState = Y, this.latestChildPicker = J, this.latestChildErrorMessage = W, this.updateState(Y, J, W)
                },
                addChannelzChild: Q.addChannelzChild.bind(Q),
                removeChannelzChild: Q.removeChannelzChild.bind(Q)
            }), this.innerResolver = (0, bD2.createResolver)(A, this.handleResolverResult.bind(this), B);
            let I = {
                initialDelay: B["grpc.initial_reconnect_backoff_ms"],
                maxDelay: B["grpc.max_reconnect_backoff_ms"]
            };
            this.backoffTimeout = new pw5.BackoffTimeout(() => {
                if (this.continueResolving) this.updateResolution(), this.continueResolving = !1;
                else this.updateState(this.latestChildState, this.latestChildPicker, this.latestChildErrorMessage)
            }, I), this.backoffTimeout.unref()
        }
        handleResolverResult(A, Q, B, G) {
            var Z, I;
            this.backoffTimeout.stop(), this.backoffTimeout.reset();
            let Y = !0,
                J = null;
            if (B === null) J = this.defaultServiceConfig;
            else if (B.ok) J = B.value;
            else if (this.previousServiceConfig !== null) J = this.previousServiceConfig;
            else Y = !1, this.handleResolutionFailure(B.error);
            if (J !== null) {
                let W = (Z = J === null || J === void 0 ? void 0 : J.loadBalancingConfig) !== null && Z !== void 0 ? Z : [],
                    X = (0, dw5.selectLbConfigFromList)(W, !0);
                if (X === null) Y = !1, this.handleResolutionFailure({
                    code: SB0.Status.UNAVAILABLE,
                    details: "All load balancer options in service config are not compatible",
                    metadata: new lw5.Metadata
                });
                else Y = this.childLoadBalancer.updateAddressList(A, X, Object.assign(Object.assign({}, this.channelOptions), Q), G)
            }
            if (Y) this.onSuccessfulResolution(J, (I = Q[bD2.CHANNEL_ARGS_CONFIG_SELECTOR_KEY]) !== null && I !== void 0 ? I : Aq5(J));
            return Y
        }
        updateResolution() {
            if (this.innerResolver.updateResolution(), this.currentState === sU.ConnectivityState.IDLE) this.updateState(sU.ConnectivityState.CONNECTING, this.latestChildPicker, this.latestChildErrorMessage);
            this.backoffTimeout.runOnce()
        }
        updateState(A, Q, B) {
            if (fD2((0, aw5.uriToString)(this.target) + " " + sU.ConnectivityState[this.currentState] + " -> " + sU.ConnectivityState[A]), A === sU.ConnectivityState.IDLE) Q = new tMA.QueuePicker(this, Q);
            this.currentState = A, this.channelControlHelper.updateState(A, Q, B)
        }
        handleResolutionFailure(A) {
            if (this.latestChildState === sU.ConnectivityState.IDLE) this.updateState(sU.ConnectivityState.TRANSIENT_FAILURE, new tMA.UnavailablePicker(A), A.details), this.onFailedResolution(A)
        }
        exitIdle() {
            if (this.currentState === sU.ConnectivityState.IDLE || this.currentState === sU.ConnectivityState.TRANSIENT_FAILURE)
                if (this.backoffTimeout.isRunning()) this.continueResolving = !0;
                else this.updateResolution();
            this.childLoadBalancer.exitIdle()
        }
        updateAddressList(A, Q) {
            throw Error("updateAddressList not supported on ResolvingLoadBalancer")
        }
        resetBackoff() {
            this.backoffTimeout.reset(), this.childLoadBalancer.resetBackoff()
        }
        destroy() {
            this.childLoadBalancer.destroy(), this.innerResolver.destroy(), this.backoffTimeout.reset(), this.backoffTimeout.stop(), this.latestChildState = sU.ConnectivityState.IDLE, this.latestChildPicker = new tMA.QueuePicker(this), this.currentState = sU.ConnectivityState.IDLE, this.previousServiceConfig = null, this.continueResolving = !1
        }
        getTypeName() {
            return "resolving_load_balancer"
        }
    }
    gD2.ResolvingLoadBalancer = hD2
});
var pD2 = U((dD2) => {
    Object.defineProperty(dD2, "__esModule", {
        value: !0
    });
    dD2.recognizedOptions = void 0;
    dD2.channelOptionsEqual = Qq5;
    dD2.recognizedOptions = {
        "grpc.ssl_target_name_override": !0,
        "grpc.primary_user_agent": !0,
        "grpc.secondary_user_agent": !0,
        "grpc.default_authority": !0,
        "grpc.keepalive_time_ms": !0,
        "grpc.keepalive_timeout_ms": !0,
        "grpc.keepalive_permit_without_calls": !0,
        "grpc.service_config": !0,
        "grpc.max_concurrent_streams": !0,
        "grpc.initial_reconnect_backoff_ms": !0,
        "grpc.max_reconnect_backoff_ms": !0,
        "grpc.use_local_subchannel_pool": !0,
        "grpc.max_send_message_length": !0,
        "grpc.max_receive_message_length": !0,
        "grpc.enable_http_proxy": !0,
        "grpc.enable_channelz": !0,
        "grpc.dns_min_time_between_resolutions_ms": !0,
        "grpc.enable_retries": !0,
        "grpc.per_rpc_retry_buffer_size": !0,
        "grpc.retry_buffer_size": !0,
        "grpc.max_connection_age_ms": !0,
        "grpc.max_connection_age_grace_ms": !0,
        "grpc-node.max_session_memory": !0,
        "grpc.service_config_disable_resolution": !0,
        "grpc.client_idle_timeout_ms": !0,
        "grpc-node.tls_enable_trace": !0,
        "grpc.lb.ring_hash.ring_size_cap": !0,
        "grpc-node.retry_max_attempts_limit": !0,
        "grpc-node.flow_control_window": !0,
        "grpc.server_call_metric_recording": !0
    };

    function Qq5(A, Q) {
        let B = Object.keys(A).sort(),
            G = Object.keys(Q).sort();
        if (B.length !== G.length) return !1;
        for (let Z = 0; Z < B.length; Z += 1) {
            if (B[Z] !== G[Z]) return !1;
            if (A[B[Z]] !== Q[G[Z]]) return !1
        }
        return !0
    }
});
var rU = U((sD2) => {
    Object.defineProperty(sD2, "__esModule", {
        value: !0
    });
    sD2.EndpointMap = void 0;
    sD2.isTcpSubchannelAddress = AOA;
    sD2.subchannelAddressEqual = G41;
    sD2.subchannelAddressToString = iD2;
    sD2.stringToSubchannelAddress = Zq5;
    sD2.endpointEqual = Iq5;
    sD2.endpointToString = Yq5;
    sD2.endpointHasAddress = nD2;
    var lD2 = UA("net");

    function AOA(A) {
        return "port" in A
    }

    function G41(A, Q) {
        if (!A && !Q) return !0;
        if (!A || !Q) return !1;
        if (AOA(A)) return AOA(Q) && A.host === Q.host && A.port === Q.port;
        else return !AOA(Q) && A.path === Q.path
    }

    function iD2(A) {
        if (AOA(A))
            if ((0, lD2.isIPv6)(A.host)) return "[" + A.host + "]:" + A.port;
            else return A.host + ":" + A.port;
        else return A.path
    }
    var Gq5 = 443;

    function Zq5(A, Q) {
        if ((0, lD2.isIP)(A)) return {
            host: A,
            port: Q !== null && Q !== void 0 ? Q : Gq5
        };
        else return {
            path: A
        }
    }

    function Iq5(A, Q) {
        if (A.addresses.length !== Q.addresses.length) return !1;
        for (let B = 0; B < A.addresses.length; B++)
            if (!G41(A.addresses[B], Q.addresses[B])) return !1;
        return !0
    }

    function Yq5(A) {
        return "[" + A.addresses.map(iD2).join(", ") + "]"
    }

    function nD2(A, Q) {
        for (let B of A.addresses)
            if (G41(B, Q)) return !0;
        return !1
    }

    function eMA(A, Q) {
        if (A.addresses.length !== Q.addresses.length) return !1;
        for (let B of A.addresses) {
            let G = !1;
            for (let Z of Q.addresses)
                if (G41(B, Z)) {
                    G = !0;
                    break
                } if (!G) return !1
        }
        return !0
    }
    class aD2 {
        constructor() {
            this.map = new Set
        }
        get size() {
            return this.map.size
        }
        getForSubchannelAddress(A) {
            for (let Q of this.map)
                if (nD2(Q.key, A)) return Q.value;
            return
        }
        deleteMissing(A) {
            let Q = [];
            for (let B of this.map) {
                let G = !1;
                for (let Z of A)
                    if (eMA(Z, B.key)) G = !0;
                if (!G) Q.push(B.value), this.map.delete(B)
            }
            return Q
        }
        get(A) {
            for (let Q of this.map)
                if (eMA(A, Q.key)) return Q.value;
            return
        }
        set(A, Q) {
            for (let B of this.map)
                if (eMA(A, B.key)) {
                    B.value = Q;
                    return
                } this.map.add({
                key: A,
                value: Q
            })
        }
        delete(A) {
            for (let Q of this.map)
                if (eMA(A, Q.key)) {
                    this.map.delete(Q);
                    return
                }
        }
        has(A) {
            for (let Q of this.map)
                if (eMA(A, Q.key)) return !0;
            return !1
        }
        clear() {
            this.map.clear()
        }* keys() {
            for (let A of this.map) yield A.key
        }* values() {
            for (let A of this.map) yield A.value
        }* entries() {
            for (let A of this.map) yield [A.key, A.value]
        }
    }
    sD2.EndpointMap = aD2
});
var IH2 = U((ZH2) => {
    Object.defineProperty(ZH2, "t", {
        value: !0
    });
    class _B0 {
        constructor(A, Q, B = 1) {
            this.i = void 0, this.h = void 0, this.o = void 0, this.u = A, this.l = Q, this.p = B
        }
        I() {
            let A = this,
                Q = A.o.o === A;
            if (Q && A.p === 1) A = A.h;
            else if (A.i) {
                A = A.i;
                while (A.h) A = A.h
            } else {
                if (Q) return A.o;
                let B = A.o;
                while (B.i === A) A = B, B = A.o;
                A = B
            }
            return A
        }
        B() {
            let A = this;
            if (A.h) {
                A = A.h;
                while (A.i) A = A.i;
                return A
            } else {
                let Q = A.o;
                while (Q.h === A) A = Q, Q = A.o;
                if (A.h !== Q) return Q;
                else return A
            }
        }
        _() {
            let A = this.o,
                Q = this.h,
                B = Q.i;
            if (A.o === this) A.o = Q;
            else if (A.i === this) A.i = Q;
            else A.h = Q;
            if (Q.o = A, Q.i = this, this.o = Q, this.h = B, B) B.o = this;
            return Q
        }
        g() {
            let A = this.o,
                Q = this.i,
                B = Q.h;
            if (A.o === this) A.o = Q;
            else if (A.i === this) A.i = Q;
            else A.h = Q;
            if (Q.o = A, Q.h = this, this.o = Q, this.i = B, B) B.o = this;
            return Q
        }
    }
    class oD2 extends _B0 {
        constructor() {
            super(...arguments);
            this.M = 1
        }
        _() {
            let A = super._();
            return this.O(), A.O(), A
        }
        g() {
            let A = super.g();
            return this.O(), A.O(), A
        }
        O() {
            if (this.M = 1, this.i) this.M += this.i.M;
            if (this.h) this.M += this.h.M
        }
    }
    class tD2 {
        constructor(A = 0) {
            this.iteratorType = A
        }
        equals(A) {
            return this.T === A.T
        }
    }
    class eD2 {
        constructor() {
            this.m = 0
        }
        get length() {
            return this.m
        }
        size() {
            return this.m
        }
        empty() {
            return this.m === 0
        }
    }
    class AH2 extends eD2 {}

    function g1A() {
        throw RangeError("Iterator access denied!")
    }
    class QH2 extends AH2 {
        constructor(A = function(B, G) {
            if (B < G) return -1;
            if (B > G) return 1;
            return 0
        }, Q = !1) {
            super();
            this.v = void 0, this.A = A, this.enableIndex = Q, this.N = Q ? oD2 : _B0, this.C = new this.N
        }
        R(A, Q) {
            let B = this.C;
            while (A) {
                let G = this.A(A.u, Q);
                if (G < 0) A = A.h;
                else if (G > 0) B = A, A = A.i;
                else return A
            }
            return B
        }
        K(A, Q) {
            let B = this.C;
            while (A)
                if (this.A(A.u, Q) <= 0) A = A.h;
                else B = A, A = A.i;
            return B
        }
        L(A, Q) {
            let B = this.C;
            while (A) {
                let G = this.A(A.u, Q);
                if (G < 0) B = A, A = A.h;
                else if (G > 0) A = A.i;
                else return A
            }
            return B
        }
        k(A, Q) {
            let B = this.C;
            while (A)
                if (this.A(A.u, Q) < 0) B = A, A = A.h;
                else A = A.i;
            return B
        }
        P(A) {
            while (!0) {
                let Q = A.o;
                if (Q === this.C) return;
                if (A.p === 1) {
                    A.p = 0;
                    return
                }
                if (A === Q.i) {
                    let B = Q.h;
                    if (B.p === 1)
                        if (B.p = 0, Q.p = 1, Q === this.v) this.v = Q._();
                        else Q._();
                    else if (B.h && B.h.p === 1) {
                        if (B.p = Q.p, Q.p = 0, B.h.p = 0, Q === this.v) this.v = Q._();
                        else Q._();
                        return
                    } else if (B.i && B.i.p === 1) B.p = 1, B.i.p = 0, B.g();
                    else B.p = 1, A = Q
                } else {
                    let B = Q.i;
                    if (B.p === 1)
                        if (B.p = 0, Q.p = 1, Q === this.v) this.v = Q.g();
                        else Q.g();
                    else if (B.i && B.i.p === 1) {
                        if (B.p = Q.p, Q.p = 0, B.i.p = 0, Q === this.v) this.v = Q.g();
                        else Q.g();
                        return
                    } else if (B.h && B.h.p === 1) B.p = 1, B.h.p = 0, B._();
                    else B.p = 1, A = Q
                }
            }
        }
        S(A) {
            if (this.m === 1) {
                this.clear();
                return
            }
            let Q = A;
            while (Q.i || Q.h) {
                if (Q.h) {
                    Q = Q.h;
                    while (Q.i) Q = Q.i
                } else Q = Q.i;
                let G = A.u;
                A.u = Q.u, Q.u = G;
                let Z = A.l;
                A.l = Q.l, Q.l = Z, A = Q
            }
            if (this.C.i === Q) this.C.i = Q.o;
            else if (this.C.h === Q) this.C.h = Q.o;
            this.P(Q);
            let B = Q.o;
            if (Q === B.i) B.i = void 0;
            else B.h = void 0;
            if (this.m -= 1, this.v.p = 0, this.enableIndex)
                while (B !== this.C) B.M -= 1, B = B.o
        }