/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.926Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 44/61
 * Lines: 243569 - 245063 (1495 lines)
 * Original file: cli.js
 */

        files: ["build/src", "!build/src/**/*.map"],
        scripts: {
            test: "c8 mocha build/test",
            clean: "gts clean",
            prepare: "npm run compile",
            lint: "gts check",
            compile: "tsc -p .",
            fix: "gts fix",
            pretest: "npm run compile -- --sourceMap",
            docs: "jsdoc -c .jsdoc.json",
            "samples-setup": "cd samples/ && npm link ../ && npm run setup && cd ../",
            "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
            "system-test": "mocha build/system-test --timeout 60000",
            "presystem-test": "npm run compile -- --sourceMap",
            webpack: "webpack",
            "browser-test": "karma start",
            "docs-test": "linkinator docs",
            "predocs-test": "npm run docs",
            prelint: "cd samples; npm link ../; npm install",
            precompile: "gts clean"
        },
        license: "Apache-2.0"
    }
});
var BqA = U((giB) => {
    Object.defineProperty(giB, "__esModule", {
        value: !0
    });
    giB.DefaultTransporter = void 0;
    var Ya6 = PT(),
        Ja6 = fiB(),
        Wa6 = mi1(),
        hiB = "google-api-nodejs-client";

class QqA {
        constructor() {
            this.instance = new Ya6.Gaxios
        }
        configure(A = {}) {
            if (A.headers = A.headers || {}, typeof window > "u") {
                let Q = A.headers["User-Agent"];
                if (!Q) A.headers["User-Agent"] = QqA.USER_AGENT;
                else if (!Q.includes(`${hiB}/`)) A.headers["User-Agent"] = `${Q} ${QqA.USER_AGENT}`;
                if (!A.headers["x-goog-api-client"]) {
                    let B = process.version.replace(/^v/, "");
                    A.headers["x-goog-api-client"] = `gl-node/${B}`
                }
            }
            return A
        }
        request(A) {
            return A = this.configure(A), (0, Ja6.validate)(A), this.instance.request(A).catch((Q) => {
                throw this.processError(Q)
            })
        }
        get defaults() {
            return this.instance.defaults
        }
        set defaults(A) {
            this.instance.defaults = A
        }
        processError(A) {
            let Q = A.response,
                B = A,
                G = Q ? Q.data : null;
            if (Q && G && G.error && Q.status !== 200)
                if (typeof G.error === "string") B.message = G.error, B.status = Q.status;
                else if (Array.isArray(G.error.errors)) B.message = G.error.errors.map((Z) => Z.message).join(`
`), B.code = G.error.code, B.errors = G.error.errors;
            else B.message = G.error.message, B.code = G.error.code;
            else if (Q && Q.status >= 400) B.message = G, B.status = Q.status;
            return B
        }
    }
    giB.DefaultTransporter = QqA;
    QqA.USER_AGENT = `${hiB}/${Wa6.version}`
});
var Gk = U((di1, diB) => {
    /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
    var VA1 = UA("buffer"),
        Bk = VA1.Buffer;

function miB(A, Q) {
        for (var B in A) Q[B] = A[B]
    }
    if (Bk.from && Bk.alloc && Bk.allocUnsafe && Bk.allocUnsafeSlow) diB.exports = VA1;
    else miB(VA1, di1), di1.Buffer = Te;

function Te(A, Q, B) {
        return Bk(A, Q, B)
    }
    Te.prototype = Object.create(Bk.prototype);
    miB(Bk, Te);
    Te.from = function(A, Q, B) {
        if (typeof A === "number") throw TypeError("Argument must not be a number");
        return Bk(A, Q, B)
    };
    Te.alloc = function(A, Q, B) {
        if (typeof A !== "number") throw TypeError("Argument must be a number");
        var G = Bk(A);
        if (Q !== void 0)
            if (typeof B === "string") G.fill(Q, B);
            else G.fill(Q);
        else G.fill(0);
        return G
    };
    Te.allocUnsafe = function(A) {
        if (typeof A !== "number") throw TypeError("Argument must be a number");
        return Bk(A)
    };
    Te.allocUnsafeSlow = function(A) {
        if (typeof A !== "number") throw TypeError("Argument must be a number");
        return VA1.SlowBuffer(A)
    }
});
var piB = U((n8G, ciB) => {
    function ci1(A) {
        var Q = (A / 8 | 0) + (A % 8 === 0 ? 0 : 1);
        return Q
    }

var Xa6 = {
        ES256: ci1(256),
        ES384: ci1(384),
        ES512: ci1(521)
    };

function Fa6(A) {
        var Q = Xa6[A];
        if (Q) return Q;
        throw Error('Unknown algorithm "' + A + '"')
    }
    ciB.exports = Fa6
});
var CA1 = U((a8G, riB) => {
    var KA1 = Gk().Buffer,
        iiB = piB(),
        DA1 = 128,
        niB = 0,
        Va6 = 32,
        Ka6 = 16,
        Da6 = 2,
        aiB = Ka6 | Va6 | niB << 6,
        HA1 = Da6 | niB << 6;

function Ha6(A) {
        return A.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

function siB(A) {
        if (KA1.isBuffer(A)) return A;
        else if (typeof A === "string") return KA1.from(A, "base64");
        throw TypeError("ECDSA signature must be a Base64 string or a Buffer")
    }

function Ca6(A, Q) {
        A = siB(A);
        var B = iiB(Q),
            G = B + 1,
            Z = A.length,
            I = 0;
        if (A[I++] !== aiB) throw Error('Could not find expected "seq"');
        var Y = A[I++];
        if (Y === (DA1 | 1)) Y = A[I++];
        if (Z - I < Y) throw Error('"seq" specified length of "' + Y + '", only "' + (Z - I) + '" remaining');
        if (A[I++] !== HA1) throw Error('Could not find expected "int" for "r"');
        var J = A[I++];
        if (Z - I - 2 < J) throw Error('"r" specified length of "' + J + '", only "' + (Z - I - 2) + '" available');
        if (G < J) throw Error('"r" specified length of "' + J + '", max of "' + G + '" is acceptable');
        var W = I;
        if (I += J, A[I++] !== HA1) throw Error('Could not find expected "int" for "s"');
        var X = A[I++];
        if (Z - I !== X) throw Error('"s" specified length of "' + X + '", expected "' + (Z - I) + '"');
        if (G < X) throw Error('"s" specified length of "' + X + '", max of "' + G + '" is acceptable');
        var F = I;
        if (I += X, I !== Z) throw Error('Expected to consume entire buffer, but "' + (Z - I) + '" bytes remain');
        var V = B - J,
            K = B - X,
            D = KA1.allocUnsafe(V + J + K + X);
        for (I = 0; I < V; ++I) D[I] = 0;
        A.copy(D, I, W + Math.max(-V, 0), W + J), I = B;
        for (var H = I; I < H + K; ++I) D[I] = 0;
        return A.copy(D, I, F + Math.max(-K, 0), F + X), D = D.toString("base64"), D = Ha6(D), D
    }

function liB(A, Q, B) {
        var G = 0;
        while (Q + G < B && A[Q + G] === 0) ++G;
        var Z = A[Q + G] >= DA1;
        if (Z) --G;
        return G
    }

function Ea6(A, Q) {
        A = siB(A);
        var B = iiB(Q),
            G = A.length;
        if (G !== B * 2) throw TypeError('"' + Q + '" signatures must be "' + B * 2 + '" bytes, saw "' + G + '"');
        var Z = liB(A, 0, B),
            I = liB(A, B, A.length),
            Y = B - Z,
            J = B - I,
            W = 2 + Y + 1 + 1 + J,
            X = W < DA1,
            F = KA1.allocUnsafe((X ? 2 : 3) + W),
            V = 0;
        if (F[V++] = aiB, X) F[V++] = W;
        else F[V++] = DA1 | 1, F[V++] = W & 255;
        if (F[V++] = HA1, F[V++] = Y, Z < 0) F[V++] = 0, V += A.copy(F, V, 0, B);
        else V += A.copy(F, V, Z, B);
        if (F[V++] = HA1, F[V++] = J, I < 0) F[V++] = 0, A.copy(F, V, B);
        else A.copy(F, V, B + I);
        return F
    }
    riB.exports = {
        derToJose: Ca6,
        joseToDer: Ea6
    }
});
var Bl = U((Ql) => {
    var ST = Ql && Ql.__classPrivateFieldGet || function(A, Q, B, G) {
            if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
            if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
        },
        VZA, Lf, pi1, li1;
    Object.defineProperty(Ql, "__esModule", {
        value: !0
    });
    Ql.LRUCache = void 0;
    Ql.snakeToCamel = oiB;
    Ql.originalOrCamelOptions = za6;

function oiB(A) {
        return A.replace(/([_][^_])/g, (Q) => Q.slice(1).toUpperCase())
    }

function za6(A) {
        function Q(B) {
            var G;
            let Z = A || {};
            return (G = Z[B]) !== null && G !== void 0 ? G : Z[oiB(B)]
        }
        return {
            get: Q
        }
    }

class tiB {
        constructor(A) {
            VZA.add(this), Lf.set(this, new Map), this.capacity = A.capacity, this.maxAge = A.maxAge
        }
        set(A, Q) {
            ST(this, VZA, "m", pi1).call(this, A, Q), ST(this, VZA, "m", li1).call(this)
        }
        get(A) {
            let Q = ST(this, Lf, "f").get(A);
            if (!Q) return;
            return ST(this, VZA, "m", pi1).call(this, A, Q.value), ST(this, VZA, "m", li1).call(this), Q.value
        }
    }
    Ql.LRUCache = tiB;
    Lf = new WeakMap, VZA = new WeakSet, pi1 = function(Q, B) {
        ST(this, Lf, "f").delete(Q), ST(this, Lf, "f").set(Q, {
            value: B,
            lastAccessed: Date.now()
        })
    }, li1 = function() {
        let Q = this.maxAge ? Date.now() - this.maxAge : 0,
            B = ST(this, Lf, "f").entries().next();
        while (!B.done && (ST(this, Lf, "f").size > this.capacity || B.value[1].lastAccessed < Q)) ST(this, Lf, "f").delete(B.value[0]), B = ST(this, Lf, "f").entries().next()
    }
});
var Zk = U((BnB) => {
    Object.defineProperty(BnB, "__esModule", {
        value: !0
    });
    BnB.AuthClient = BnB.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = BnB.DEFAULT_UNIVERSE = void 0;
    var Ua6 = UA("events"),
        eiB = PT(),
        AnB = BqA(),
        $a6 = Bl();
    BnB.DEFAULT_UNIVERSE = "googleapis.com";
    BnB.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS = 300000;

class QnB extends Ua6.EventEmitter {
        constructor(A = {}) {
            var Q, B, G, Z, I;
            super();
            this.credentials = {}, this.eagerRefreshThresholdMillis = BnB.DEFAULT_EAGER_REFRESH_THRESHOLD_MILLIS, this.forceRefreshOnFailure = !1, this.universeDomain = BnB.DEFAULT_UNIVERSE;
            let Y = (0, $a6.originalOrCamelOptions)(A);
            if (this.apiKey = A.apiKey, this.projectId = (Q = Y.get("project_id")) !== null && Q !== void 0 ? Q : null, this.quotaProjectId = Y.get("quota_project_id"), this.credentials = (B = Y.get("credentials")) !== null && B !== void 0 ? B : {}, this.universeDomain = (G = Y.get("universe_domain")) !== null && G !== void 0 ? G : BnB.DEFAULT_UNIVERSE, this.transporter = (Z = A.transporter) !== null && Z !== void 0 ? Z : new AnB.DefaultTransporter, A.transporterOptions) this.transporter.defaults = A.transporterOptions;
            if (A.eagerRefreshThresholdMillis) this.eagerRefreshThresholdMillis = A.eagerRefreshThresholdMillis;
            this.forceRefreshOnFailure = (I = A.forceRefreshOnFailure) !== null && I !== void 0 ? I : !1
        }
        get gaxios() {
            if (this.transporter instanceof eiB.Gaxios) return this.transporter;
            else if (this.transporter instanceof AnB.DefaultTransporter) return this.transporter.instance;
            else if ("instance" in this.transporter && this.transporter.instance instanceof eiB.Gaxios) return this.transporter.instance;
            return null
        }
        setCredentials(A) {
            this.credentials = A
        }
        addSharedMetadataHeaders(A) {
            if (!A["x-goog-user-project"] && this.quotaProjectId) A["x-goog-user-project"] = this.quotaProjectId;
            return A
        }
        static get RETRY_CONFIG() {
            return {
                retry: !0,
                retryConfig: {
                    httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
                }
            }
        }
    }
    BnB.AuthClient = QnB
});
var ni1 = U((YnB) => {
    Object.defineProperty(YnB, "__esModule", {
        value: !0
    });
    YnB.LoginTicket = void 0;

class InB {
        constructor(A, Q) {
            this.envelope = A, this.payload = Q
        }
        getEnvelope() {
            return this.envelope
        }
        getPayload() {
            return this.payload
        }
        getUserId() {
            let A = this.getPayload();
            if (A && A.sub) return A.sub;
            return null
        }
        getAttributes() {
            return {
                envelope: this.getEnvelope(),
                payload: this.getPayload()
            }
        }
    }
    YnB.LoginTicket = InB
});
var Pe = U((XnB) => {
    Object.defineProperty(XnB, "__esModule", {
        value: !0
    });
    XnB.OAuth2Client = XnB.ClientAuthentication = XnB.CertificateFormat = XnB.CodeChallengeMethod = void 0;
    var wa6 = PT(),
        ai1 = UA("querystring"),
        qa6 = UA("stream"),
        Na6 = CA1(),
        si1 = XZA(),
        La6 = Zk(),
        Ma6 = ni1(),
        WnB;
    (function(A) {
        A.Plain = "plain", A.S256 = "S256"
    })(WnB || (XnB.CodeChallengeMethod = WnB = {}));
    var Mf;
    (function(A) {
        A.PEM = "PEM", A.JWK = "JWK"
    })(Mf || (XnB.CertificateFormat = Mf = {}));
    var GqA;
    (function(A) {
        A.ClientSecretPost = "ClientSecretPost", A.ClientSecretBasic = "ClientSecretBasic", A.None = "None"
    })(GqA || (XnB.ClientAuthentication = GqA = {}));

class qE extends La6.AuthClient {
        constructor(A, Q, B) {
            let G = A && typeof A === "object" ? A : {
                clientId: A,
                clientSecret: Q,
                redirectUri: B
            };
            super(G);
            this.certificateCache = {}, this.certificateExpiry = null, this.certificateCacheFormat = Mf.PEM, this.refreshTokenPromises = new Map, this._clientId = G.clientId, this._clientSecret = G.clientSecret, this.redirectUri = G.redirectUri, this.endpoints = {
                tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
                oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
                oauth2TokenUrl: "https://oauth2.googleapis.com/token",
                oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
                oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
                oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
                oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
                ...G.endpoints
            }, this.clientAuthentication = G.clientAuthentication || GqA.ClientSecretPost, this.issuers = G.issuers || ["accounts.google.com", "https://accounts.google.com", this.universeDomain]
        }
        generateAuthUrl(A = {}) {
            if (A.code_challenge_method && !A.code_challenge) throw Error("If a code_challenge_method is provided, code_challenge must be included.");
            if (A.response_type = A.response_type || "code", A.client_id = A.client_id || this._clientId, A.redirect_uri = A.redirect_uri || this.redirectUri, Array.isArray(A.scope)) A.scope = A.scope.join(" ");
            return this.endpoints.oauth2AuthBaseUrl.toString() + "?" + ai1.stringify(A)
        }
        generateCodeVerifier() {
            throw Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.")
        }
        async generateCodeVerifierAsync() {
            let A = (0, si1.createCrypto)(),
                B = A.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-"),
                Z = (await A.sha256DigestBase64(B)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
            return {
                codeVerifier: B,
                codeChallenge: Z
            }
        }
        getToken(A, Q) {
            let B = typeof A === "string" ? {
                code: A
            } : A;
            if (Q) this.getTokenAsync(B).then((G) => Q(null, G.tokens, G.res), (G) => Q(G, null, G.response));
            else return this.getTokenAsync(B)
        }
        async getTokenAsync(A) {
            let Q = this.endpoints.oauth2TokenUrl.toString(),
                B = {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                G = {
                    client_id: A.client_id || this._clientId,
                    code_verifier: A.codeVerifier,
                    code: A.code,
                    grant_type: "authorization_code",
                    redirect_uri: A.redirect_uri || this.redirectUri
                };
            if (this.clientAuthentication === GqA.ClientSecretBasic) {
                let Y = Buffer.from(`${this._clientId}:${this._clientSecret}`);
                B.Authorization = `Basic ${Y.toString("base64")}`
            }
            if (this.clientAuthentication === GqA.ClientSecretPost) G.client_secret = this._clientSecret;
            let Z = await this.transporter.request({
                    ...qE.RETRY_CONFIG,
                    method: "POST",
                    url: Q,
                    data: ai1.stringify(G),
                    headers: B
                }),
                I = Z.data;
            if (Z.data && Z.data.expires_in) I.expiry_date = new Date().getTime() + Z.data.expires_in * 1000, delete I.expires_in;
            return this.emit("tokens", I), {
                tokens: I,
                res: Z
            }
        }
        async refreshToken(A) {
            if (!A) return this.refreshTokenNoCache(A);
            if (this.refreshTokenPromises.has(A)) return this.refreshTokenPromises.get(A);
            let Q = this.refreshTokenNoCache(A).then((B) => {
                return this.refreshTokenPromises.delete(A), B
            }, (B) => {
                throw this.refreshTokenPromises.delete(A), B
            });
            return this.refreshTokenPromises.set(A, Q), Q
        }
        async refreshTokenNoCache(A) {
            var Q;
            if (!A) throw Error("No refresh token is set.");
            let B = this.endpoints.oauth2TokenUrl.toString(),
                G = {
                    refresh_token: A,
                    client_id: this._clientId,
                    client_secret: this._clientSecret,
                    grant_type: "refresh_token"
                },
                Z;
            try {
                Z = await this.transporter.request({
                    ...qE.RETRY_CONFIG,
                    method: "POST",
                    url: B,
                    data: ai1.stringify(G),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
            } catch (Y) {
                if (Y instanceof wa6.GaxiosError && Y.message === "invalid_grant" && ((Q = Y.response) === null || Q === void 0 ? void 0 : Q.data) && /ReAuth/i.test(Y.response.data.error_description)) Y.message = JSON.stringify(Y.response.data);
                throw Y
            }
            let I = Z.data;
            if (Z.data && Z.data.expires_in) I.expiry_date = new Date().getTime() + Z.data.expires_in * 1000, delete I.expires_in;
            return this.emit("tokens", I), {
                tokens: I,
                res: Z
            }
        }
        refreshAccessToken(A) {
            if (A) this.refreshAccessTokenAsync().then((Q) => A(null, Q.credentials, Q.res), A);
            else return this.refreshAccessTokenAsync()
        }
        async refreshAccessTokenAsync() {
            let A = await this.refreshToken(this.credentials.refresh_token),
                Q = A.tokens;
            return Q.refresh_token = this.credentials.refresh_token, this.credentials = Q, {
                credentials: this.credentials,
                res: A.res
            }
        }
        getAccessToken(A) {
            if (A) this.getAccessTokenAsync().then((Q) => A(null, Q.token, Q.res), A);
            else return this.getAccessTokenAsync()
        }
        async getAccessTokenAsync() {
            if (!this.credentials.access_token || this.isTokenExpiring()) {
                if (!this.credentials.refresh_token)
                    if (this.refreshHandler) {
                        let B = await this.processAndValidateRefreshHandler();
                        if (B === null || B === void 0 ? void 0 : B.access_token) return this.setCredentials(B), {
                            token: this.credentials.access_token
                        }
                    } else throw Error("No refresh token or refresh handler callback is set.");
                let Q = await this.refreshAccessTokenAsync();
                if (!Q.credentials || Q.credentials && !Q.credentials.access_token) throw Error("Could not refresh access token.");
                return {
                    token: Q.credentials.access_token,
                    res: Q.res
                }
            } else return {
                token: this.credentials.access_token
            }
        }
        async getRequestHeaders(A) {
            return (await this.getRequestMetadataAsync(A)).headers
        }
        async getRequestMetadataAsync(A) {
            let Q = this.credentials;
            if (!Q.access_token && !Q.refresh_token && !this.apiKey && !this.refreshHandler) throw Error("No access, refresh token, API key or refresh handler callback is set.");
            if (Q.access_token && !this.isTokenExpiring()) {
                Q.token_type = Q.token_type || "Bearer";
                let Y = {
                    Authorization: Q.token_type + " " + Q.access_token
                };
                return {
                    headers: this.addSharedMetadataHeaders(Y)
                }
            }
            if (this.refreshHandler) {
                let Y = await this.processAndValidateRefreshHandler();
                if (Y === null || Y === void 0 ? void 0 : Y.access_token) {
                    this.setCredentials(Y);
                    let J = {
                        Authorization: "Bearer " + this.credentials.access_token
                    };
                    return {
                        headers: this.addSharedMetadataHeaders(J)
                    }
                }
            }
            if (this.apiKey) return {
                headers: {
                    "X-Goog-Api-Key": this.apiKey
                }
            };
            let B = null,
                G = null;
            try {
                B = await this.refreshToken(Q.refresh_token), G = B.tokens
            } catch (Y) {
                let J = Y;
                if (J.response && (J.response.status === 403 || J.response.status === 404)) J.message = `Could not refresh access token: ${J.message}`;
                throw J
            }
            let Z = this.credentials;
            Z.token_type = Z.token_type || "Bearer", G.refresh_token = Z.refresh_token, this.credentials = G;
            let I = {
                Authorization: Z.token_type + " " + G.access_token
            };
            return {
                headers: this.addSharedMetadataHeaders(I),
                res: B.res
            }
        }
        static getRevokeTokenUrl(A) {
            return new qE().getRevokeTokenURL(A).toString()
        }
        getRevokeTokenURL(A) {
            let Q = new URL(this.endpoints.oauth2RevokeUrl);
            return Q.searchParams.append("token", A), Q
        }
        revokeToken(A, Q) {
            let B = {
                ...qE.RETRY_CONFIG,
                url: this.getRevokeTokenURL(A).toString(),
                method: "POST"
            };
            if (Q) this.transporter.request(B).then((G) => Q(null, G), Q);
            else return this.transporter.request(B)
        }
        revokeCredentials(A) {
            if (A) this.revokeCredentialsAsync().then((Q) => A(null, Q), A);
            else return this.revokeCredentialsAsync()
        }
        async revokeCredentialsAsync() {
            let A = this.credentials.access_token;
            if (this.credentials = {}, A) return this.revokeToken(A);
            else throw Error("No access token to revoke.")
        }
        request(A, Q) {
            if (Q) this.requestAsync(A).then((B) => Q(null, B), (B) => {
                return Q(B, B.response)
            });
            else return this.requestAsync(A)
        }
        async requestAsync(A, Q = !1) {
            let B;
            try {
                let G = await this.getRequestMetadataAsync(A.url);
                if (A.headers = A.headers || {}, G.headers && G.headers["x-goog-user-project"]) A.headers["x-goog-user-project"] = G.headers["x-goog-user-project"];
                if (G.headers && G.headers.Authorization) A.headers.Authorization = G.headers.Authorization;
                if (this.apiKey) A.headers["X-Goog-Api-Key"] = this.apiKey;
                B = await this.transporter.request(A)
            } catch (G) {
                let Z = G.response;
                if (Z) {
                    let I = Z.status,
                        Y = this.credentials && this.credentials.access_token && this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure),
                        J = this.credentials && this.credentials.access_token && !this.credentials.refresh_token && (!this.credentials.expiry_date || this.forceRefreshOnFailure) && this.refreshHandler,
                        W = Z.config.data instanceof qa6.Readable,
                        X = I === 401 || I === 403;
                    if (!Q && X && !W && Y) return await this.refreshAccessTokenAsync(), this.requestAsync(A, !0);
                    else if (!Q && X && !W && J) {
                        let F = await this.processAndValidateRefreshHandler();
                        if (F === null || F === void 0 ? void 0 : F.access_token) this.setCredentials(F);
                        return this.requestAsync(A, !0)
                    }
                }
                throw G
            }
            return B
        }
        verifyIdToken(A, Q) {
            if (Q && typeof Q !== "function") throw Error("This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.");
            if (Q) this.verifyIdTokenAsync(A).then((B) => Q(null, B), Q);
            else return this.verifyIdTokenAsync(A)
        }
        async verifyIdTokenAsync(A) {
            if (!A.idToken) throw Error("The verifyIdToken method requires an ID Token");
            let Q = await this.getFederatedSignonCertsAsync();
            return await this.verifySignedJwtWithCertsAsync(A.idToken, Q.certs, A.audience, this.issuers, A.maxExpiry)
        }
        async getTokenInfo(A) {
            let {
                data: Q
            } = await this.transporter.request({
                ...qE.RETRY_CONFIG,
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Bearer ${A}`
                },
                url: this.endpoints.tokenInfoUrl.toString()
            }), B = Object.assign({
                expiry_date: new Date().getTime() + Q.expires_in * 1000,
                scopes: Q.scope.split(" ")
            }, Q);
            return delete B.expires_in, delete B.scope, B
        }
        getFederatedSignonCerts(A) {
            if (A) this.getFederatedSignonCertsAsync().then((Q) => A(null, Q.certs, Q.res), A);
            else return this.getFederatedSignonCertsAsync()
        }
        async getFederatedSignonCertsAsync() {
            let A = new Date().getTime(),
                Q = (0, si1.hasBrowserCrypto)() ? Mf.JWK : Mf.PEM;
            if (this.certificateExpiry && A < this.certificateExpiry.getTime() && this.certificateCacheFormat === Q) return {
                certs: this.certificateCache,
                format: Q
            };
            let B, G;
            switch (Q) {
                case Mf.PEM:
                    G = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
                    break;
                case Mf.JWK:
                    G = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
                    break;
                default:
                    throw Error(`Unsupported certificate format ${Q}`)
            }
            try {
                B = await this.transporter.request({
                    ...qE.RETRY_CONFIG,
                    url: G
                })
            } catch (W) {
                if (W instanceof Error) W.message = `Failed to retrieve verification certificates: ${W.message}`;
                throw W
            }
            let Z = B ? B.headers["cache-control"] : void 0,
                I = -1;
            if (Z) {
                let X = new RegExp("max-age=([0-9]*)").exec(Z);
                if (X && X.length === 2) I = Number(X[1]) * 1000
            }
            let Y = {};
            switch (Q) {
                case Mf.PEM:
                    Y = B.data;
                    break;
                case Mf.JWK:
                    for (let W of B.data.keys) Y[W.kid] = W;
                    break;
                default:
                    throw Error(`Unsupported certificate format ${Q}`)
            }
            let J = new Date;
            return this.certificateExpiry = I === -1 ? null : new Date(J.getTime() + I), this.certificateCache = Y, this.certificateCacheFormat = Q, {
                certs: Y,
                format: Q,
                res: B
            }
        }
        getIapPublicKeys(A) {
            if (A) this.getIapPublicKeysAsync().then((Q) => A(null, Q.pubkeys, Q.res), A);
            else return this.getIapPublicKeysAsync()
        }
        async getIapPublicKeysAsync() {
            let A, Q = this.endpoints.oauth2IapPublicKeyUrl.toString();
            try {
                A = await this.transporter.request({
                    ...qE.RETRY_CONFIG,
                    url: Q
                })
            } catch (B) {
                if (B instanceof Error) B.message = `Failed to retrieve verification certificates: ${B.message}`;
                throw B
            }
            return {
                pubkeys: A.data,
                res: A
            }
        }
        verifySignedJwtWithCerts() {
            throw Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.")
        }
        async verifySignedJwtWithCertsAsync(A, Q, B, G, Z) {
            let I = (0, si1.createCrypto)();
            if (!Z) Z = qE.DEFAULT_MAX_TOKEN_LIFETIME_SECS_;
            let Y = A.split(".");
            if (Y.length !== 3) throw Error("Wrong number of segments in token: " + A);
            let J = Y[0] + "." + Y[1],
                W = Y[2],
                X, F;
            try {
                X = JSON.parse(I.decodeBase64StringUtf8(Y[0]))
            } catch (w) {
                if (w instanceof Error) w.message = `Can't parse token envelope: ${Y[0]}': ${w.message}`;
                throw w
            }
            if (!X) throw Error("Can't parse token envelope: " + Y[0]);
            try {
                F = JSON.parse(I.decodeBase64StringUtf8(Y[1]))
            } catch (w) {
                if (w instanceof Error) w.message = `Can't parse token payload '${Y[0]}`;
                throw w
            }
            if (!F) throw Error("Can't parse token payload: " + Y[1]);
            if (!Object.prototype.hasOwnProperty.call(Q, X.kid)) throw Error("No pem found for envelope: " + JSON.stringify(X));
            let V = Q[X.kid];
            if (X.alg === "ES256") W = Na6.joseToDer(W, "ES256").toString("base64");
            if (!await I.verify(V, J, W)) throw Error("Invalid token signature: " + A);
            if (!F.iat) throw Error("No issue time in token: " + JSON.stringify(F));
            if (!F.exp) throw Error("No expiration time in token: " + JSON.stringify(F));
            let D = Number(F.iat);
            if (isNaN(D)) throw Error("iat field using invalid format");
            let H = Number(F.exp);
            if (isNaN(H)) throw Error("exp field using invalid format");
            let C = new Date().getTime() / 1000;
            if (H >= C + Z) throw Error("Expiration time too far in future: " + JSON.stringify(F));
            let E = D - qE.CLOCK_SKEW_SECS_,
                z = H + qE.CLOCK_SKEW_SECS_;
            if (C < E) throw Error("Token used too early, " + C + " < " + E + ": " + JSON.stringify(F));
            if (C > z) throw Error("Token used too late, " + C + " > " + z + ": " + JSON.stringify(F));
            if (G && G.indexOf(F.iss) < 0) throw Error("Invalid issuer, expected one of [" + G + "], but got " + F.iss);
            if (typeof B < "u" && B !== null) {
                let w = F.aud,
                    N = !1;
                if (B.constructor === Array) N = B.indexOf(w) > -1;
                else N = w === B;
                if (!N) throw Error("Wrong recipient, payload audience != requiredAudience")
            }
            return new Ma6.LoginTicket(X, F)
        }
        async processAndValidateRefreshHandler() {
            if (this.refreshHandler) {
                let A = await this.refreshHandler();
                if (!A.access_token) throw Error("No access token is returned by the refreshHandler callback.");
                return A
            }
            return
        }
        isTokenExpiring() {
            let A = this.credentials.expiry_date;
            return A ? A <= new Date().getTime() + this.eagerRefreshThresholdMillis : !1
        }
    }
    XnB.OAuth2Client = qE;
    qE.GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
    qE.CLOCK_SKEW_SECS_ = 300;
    qE.DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400
});
var ri1 = U((DnB) => {
    Object.defineProperty(DnB, "__esModule", {
        value: !0
    });
    DnB.Compute = void 0;
    var Pa6 = PT(),
        VnB = AqA(),
        ja6 = Pe();

class KnB extends ja6.OAuth2Client {
        constructor(A = {}) {
            super(A);
            this.credentials = {
                expiry_date: 1,
                refresh_token: "compute-placeholder"
            }, this.serviceAccountEmail = A.serviceAccountEmail || "default", this.scopes = Array.isArray(A.scopes) ? A.scopes : A.scopes ? [A.scopes] : []
        }
        async refreshTokenNoCache(A) {
            let Q = `service-accounts/${this.serviceAccountEmail}/token`,
                B;
            try {
                let Z = {
                    property: Q
                };
                if (this.scopes.length > 0) Z.params = {
                    scopes: this.scopes.join(",")
                };
                B = await VnB.instance(Z)
            } catch (Z) {
                if (Z instanceof Pa6.GaxiosError) Z.message = `Could not refresh access token: ${Z.message}`, this.wrapError(Z);
                throw Z
            }
            let G = B;
            if (B && B.expires_in) G.expiry_date = new Date().getTime() + B.expires_in * 1000, delete G.expires_in;
            return this.emit("tokens", G), {
                tokens: G,
                res: null
            }
        }
        async fetchIdToken(A) {
            let Q = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${A}`,
                B;
            try {
                let G = {
                    property: Q
                };
                B = await VnB.instance(G)
            } catch (G) {
                if (G instanceof Error) G.message = `Could not fetch ID token: ${G.message}`;
                throw G
            }
            return B
        }
        wrapError(A) {
            let Q = A.response;
            if (Q && Q.status) {
                if (A.status = Q.status, Q.status === 403) A.message = "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " + A.message;
                else if (Q.status === 404) A.message = "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " + A.message
            }
        }
    }
    DnB.Compute = KnB
});
var oi1 = U((EnB) => {
    Object.defineProperty(EnB, "__esModule", {
        value: !0
    });
    EnB.IdTokenClient = void 0;
    var Sa6 = Pe();

class CnB extends Sa6.OAuth2Client {
        constructor(A) {
            super(A);
            this.targetAudience = A.targetAudience, this.idTokenProvider = A.idTokenProvider
        }
        async getRequestMetadataAsync(A) {
            if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
                let B = await this.idTokenProvider.fetchIdToken(this.targetAudience);
                this.credentials = {
                    id_token: B,
                    expiry_date: this.getIdTokenExpiryDate(B)
                }
            }
            return {
                headers: {
                    Authorization: "Bearer " + this.credentials.id_token
                }
            }
        }
        getIdTokenExpiryDate(A) {
            let Q = A.split(".")[1];
            if (Q) return JSON.parse(Buffer.from(Q, "base64").toString("ascii")).exp * 1000
        }
    }
    EnB.IdTokenClient = CnB
});
var ti1 = U(($nB) => {
    Object.defineProperty($nB, "__esModule", {
        value: !0
    });
    $nB.GCPEnv = void 0;
    $nB.clear = _a6;
    $nB.getEnv = ka6;
    var UnB = AqA(),
        Of;
    (function(A) {
        A.APP_ENGINE = "APP_ENGINE", A.KUBERNETES_ENGINE = "KUBERNETES_ENGINE", A.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS", A.COMPUTE_ENGINE = "COMPUTE_ENGINE", A.CLOUD_RUN = "CLOUD_RUN", A.NONE = "NONE"
    })(Of || ($nB.GCPEnv = Of = {}));
    var ZqA;

function _a6() {
        ZqA = void 0
    }
    // Async function: ka6
async function ka6() {
        if (ZqA) return ZqA;
        return ZqA = ya6(), ZqA
    }
    // Async function: ya6
async function ya6() {
        let A = Of.NONE;
        if (xa6()) A = Of.APP_ENGINE;
        else if (va6()) A = Of.CLOUD_FUNCTIONS;
        else if (await ha6())
            if (await fa6()) A = Of.KUBERNETES_ENGINE;
            else if (ba6()) A = Of.CLOUD_RUN;
        else A = Of.COMPUTE_ENGINE;
        else A = Of.NONE;
        return A
    }

function xa6() {
        return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME)
    }

function va6() {
        return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET)
    }

function ba6() {
        return !!process.env.K_CONFIGURATION
    }
    // Async function: fa6
async function fa6() {
        try {
            return await UnB.instance("attributes/cluster-name"), !0
        } catch (A) {
            return !1
        }
    }
    // Async function: ha6
async function ha6() {
        return UnB.isAvailable()
    }
});
var ei1 = U((B6G, qnB) => {
    var EA1 = Gk().Buffer,
        ma6 = UA("stream"),
        da6 = UA("util");

function zA1(A) {
        if (this.buffer = null, this.writable = !0, this.readable = !0, !A) return this.buffer = EA1.alloc(0), this;
        if (typeof A.pipe === "function") return this.buffer = EA1.alloc(0), A.pipe(this), this;
        if (A.length || typeof A === "object") return this.buffer = A, this.writable = !1, process.nextTick(function() {
            this.emit("end", A), this.readable = !1, this.emit("close")
        }.bind(this)), this;
        throw TypeError("Unexpected data type (" + typeof A + ")")
    }
    da6.inherits(zA1, ma6);
    zA1.prototype.write = function(Q) {
        this.buffer = EA1.concat([this.buffer, EA1.from(Q)]), this.emit("data", Q)
    };
    zA1.prototype.end = function(Q) {
        if (Q) this.write(Q);
        this.emit("end", Q), this.emit("close"), this.writable = !1, this.readable = !1
    };
    qnB.exports = zA1
});
var Qn1 = U((G6G, NnB) => {
    var IqA = UA("buffer").Buffer,
        An1 = UA("buffer").SlowBuffer;
    NnB.exports = UA1;

function UA1(A, Q) {
        if (!IqA.isBuffer(A) || !IqA.isBuffer(Q)) return !1;
        if (A.length !== Q.length) return !1;
        var B = 0;
        for (var G = 0; G < A.length; G++) B |= A[G] ^ Q[G];
        return B === 0
    }
    UA1.install = function() {
        IqA.prototype.equal = An1.prototype.equal = function(Q) {
            return UA1(this, Q)
        }
    };
    var ca6 = IqA.prototype.equal,
        pa6 = An1.prototype.equal;
    UA1.restore = function() {
        IqA.prototype.equal = ca6, An1.prototype.equal = pa6
    }
});
var In1 = U((Z6G, _nB) => {
    var DZA = Gk().Buffer,
        SM = UA("crypto"),
        MnB = CA1(),
        LnB = UA("util"),
        la6 = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
        YqA = "secret must be a string or buffer",
        KZA = "key must be a string or a buffer",
        ia6 = "key must be a string, a buffer or an object",
        Gn1 = typeof SM.createPublicKey === "function";
    if (Gn1) KZA += " or a KeyObject", YqA += "or a KeyObject";

function OnB(A) {
        if (DZA.isBuffer(A)) return;
        if (typeof A === "string") return;
        if (!Gn1) throw _T(KZA);
        if (typeof A !== "object") throw _T(KZA);
        if (typeof A.type !== "string") throw _T(KZA);
        if (typeof A.asymmetricKeyType !== "string") throw _T(KZA);
        if (typeof A.export !== "function") throw _T(KZA)
    }

function RnB(A) {
        if (DZA.isBuffer(A)) return;
        if (typeof A === "string") return;
        if (typeof A === "object") return;
        throw _T(ia6)
    }

function na6(A) {
        if (DZA.isBuffer(A)) return;
        if (typeof A === "string") return A;
        if (!Gn1) throw _T(YqA);
        if (typeof A !== "object") throw _T(YqA);
        if (A.type !== "secret") throw _T(YqA);
        if (typeof A.export !== "function") throw _T(YqA)
    }

function Zn1(A) {
        return A.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

function TnB(A) {
        A = A.toString();
        var Q = 4 - A.length % 4;
        if (Q !== 4)
            for (var B = 0; B < Q; ++B) A += "=";
        return A.replace(/\-/g, "+").replace(/_/g, "/")
    }

function _T(A) {
        var Q = [].slice.call(arguments, 1),
            B = LnB.format.bind(LnB, A).apply(null, Q);
        return TypeError(B)
    }

function aa6(A) {
        return DZA.isBuffer(A) || typeof A === "string"
    }

function JqA(A) {
        if (!aa6(A)) A = JSON.stringify(A);
        return A
    }

function PnB(A) {
        return function(B, G) {
            na6(G), B = JqA(B);
            var Z = SM.createHmac("sha" + A, G),
                I = (Z.update(B), Z.digest("base64"));
            return Zn1(I)
        }
    }
    var Bn1, sa6 = "timingSafeEqual" in SM ? function(Q, B) {
        if (Q.byteLength !== B.byteLength) return !1;
        return SM.timingSafeEqual(Q, B)
    } : function(Q, B) {
        if (!Bn1) Bn1 = Qn1();
        return Bn1(Q, B)
    };

function ra6(A) {
        return function(B, G, Z) {
            var I = PnB(A)(B, Z);
            return sa6(DZA.from(G), DZA.from(I))
        }
    }

function jnB(A) {
        return function(B, G) {
            RnB(G), B = JqA(B);
            var Z = SM.createSign("RSA-SHA" + A),
                I = (Z.update(B), Z.sign(G, "base64"));
            return Zn1(I)
        }
    }

function SnB(A) {
        return function(B, G, Z) {
            OnB(Z), B = JqA(B), G = TnB(G);
            var I = SM.createVerify("RSA-SHA" + A);
            return I.update(B), I.verify(Z, G, "base64")
        }
    }

function oa6(A) {
        return function(B, G) {
            RnB(G), B = JqA(B);
            var Z = SM.createSign("RSA-SHA" + A),
                I = (Z.update(B), Z.sign({
                    key: G,
                    padding: SM.constants.RSA_PKCS1_PSS_PADDING,
                    saltLength: SM.constants.RSA_PSS_SALTLEN_DIGEST
                }, "base64"));
            return Zn1(I)
        }
    }

function ta6(A) {
        return function(B, G, Z) {
            OnB(Z), B = JqA(B), G = TnB(G);
            var I = SM.createVerify("RSA-SHA" + A);
            return I.update(B), I.verify({
                key: Z,
                padding: SM.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: SM.constants.RSA_PSS_SALTLEN_DIGEST
            }, G, "base64")
        }
    }

function ea6(A) {
        var Q = jnB(A);
        return function() {
            var G = Q.apply(null, arguments);
            return G = MnB.derToJose(G, "ES" + A), G
        }
    }

function As6(A) {
        var Q = SnB(A);
        return function(G, Z, I) {
            Z = MnB.joseToDer(Z, "ES" + A).toString("base64");
            var Y = Q(G, Z, I);
            return Y
        }
    }

function Qs6() {
        return function() {
            return ""
        }
    }

function Bs6() {
        return function(Q, B) {
            return B === ""
        }
    }
    _nB.exports = function(Q) {
        var B = {
                hs: PnB,
                rs: jnB,
                ps: oa6,
                es: ea6,
                none: Qs6
            },
            G = {
                hs: ra6,
                rs: SnB,
                ps: ta6,
                es: As6,
                none: Bs6
            },
            Z = Q.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
        if (!Z) throw _T(la6, Q);
        var I = (Z[1] || Z[3]).toLowerCase(),
            Y = Z[2];
        return {
            sign: B[I](Y),
            verify: G[I](Y)
        }
    }
});
var Yn1 = U((I6G, knB) => {
    var Gs6 = UA("buffer").Buffer;
    knB.exports = function(Q) {
        if (typeof Q === "string") return Q;
        if (typeof Q === "number" || Gs6.isBuffer(Q)) return Q.toString();
        return JSON.stringify(Q)
    }
});
var hnB = U((Y6G, fnB) => {
    var Zs6 = Gk().Buffer,
        ynB = ei1(),
        Is6 = In1(),
        Ys6 = UA("stream"),
        xnB = Yn1(),
        Jn1 = UA("util");

function vnB(A, Q) {
        return Zs6.from(A, Q).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

function Js6(A, Q, B) {
        B = B || "utf8";
        var G = vnB(xnB(A), "binary"),
            Z = vnB(xnB(Q), B);
        return Jn1.format("%s.%s", G, Z)
    }

function bnB(A) {
        var {
            header: Q,
            payload: B
        } = A, G = A.secret || A.privateKey, Z = A.encoding, I = Is6(Q.alg), Y = Js6(Q, B, Z), J = I.sign(Y, G);
        return Jn1.format("%s.%s", Y, J)
    }

    function $A1(A) {
        var Q = A.secret || A.privateKey || A.key,
            B = new ynB(Q);
        this.readable = !0, this.header = A.header, this.encoding = A.encoding, this.secret = this.privateKey = this.key = B, this.payload = new ynB(A.payload), this.secret.once("close", function() {
            if (!this.payload.writable && this.readable) this.sign()
        }.bind(this)), this.payload.once("close", function() {
            if (!this.secret.writable && this.readable) this.sign()
        }.bind(this))
    }
    Jn1.inherits($A1, Ys6);
    $A1.prototype.sign = function() {
        try {
            var Q = bnB({
                header: this.header,
                payload: this.payload.buffer,
                secret: this.secret.buffer,
                encoding: this.encoding
            });
            return this.emit("done", Q), this.emit("data", Q), this.emit("end"), this.readable = !1, Q
        } catch (B) {
            this.readable = !1, this.emit("error", B), this.emit("close")
        }
    };
    $A1.sign = bnB;
    fnB.exports = $A1
});
var anB = U((J6G, nnB) => {
    var unB = Gk().Buffer,
        gnB = ei1(),
        Ws6 = In1(),
        Xs6 = UA("stream"),
        mnB = Yn1(),
        Fs6 = UA("util"),
        Vs6 = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function Ks6(A) {
        return Object.prototype.toString.call(A) === "[object Object]"
    }

function Ds6(A) {
        if (Ks6(A)) return A;
        try {
            return JSON.parse(A)
        } catch (Q) {
            return
        }
    }

function dnB(A) {
        var Q = A.split(".", 1)[0];
        return Ds6(unB.from(Q, "base64").toString("binary"))
    }

function Hs6(A) {
        return A.split(".", 2).join(".")
    }

function cnB(A) {
        return A.split(".")[2]
    }

function Cs6(A, Q) {
        Q = Q || "utf8";
        var B = A.split(".")[1];
        return unB.from(B, "base64").toString(Q)
    }

function pnB(A) {
        return Vs6.test(A) && !!dnB(A)
    }

function lnB(A, Q, B) {
        if (!Q) {
            var G = Error("Missing algorithm parameter for jws.verify");
            throw G.code = "MISSING_ALGORITHM", G
        }
        A = mnB(A);
        var Z = cnB(A),
            I = Hs6(A),
            Y = Ws6(Q);
        return Y.verify(I, Z, B)
    }

function inB(A, Q) {
        if (Q = Q || {}, A = mnB(A), !pnB(A)) return null;
        var B = dnB(A);
        if (!B) return null;
        var G = Cs6(A);
        if (B.typ === "JWT" || Q.json) G = JSON.parse(G, Q.encoding);
        return {
            header: B,
            payload: G,
            signature: cnB(A)
        }
    }

function HZA(A) {
        A = A || {};
        var Q = A.secret || A.publicKey || A.key,
            B = new gnB(Q);
        this.readable = !0, this.algorithm = A.algorithm, this.encoding = A.encoding, this.secret = this.publicKey = this.key = B, this.signature = new gnB(A.signature), this.secret.once("close", function() {
            if (!this.signature.writable && this.readable) this.verify()
        }.bind(this)), this.signature.once("close", function() {
            if (!this.secret.writable && this.readable) this.verify()
        }.bind(this))
    }
    Fs6.inherits(HZA, Xs6);
    HZA.prototype.verify = function() {
        try {
            var Q = lnB(this.signature.buffer, this.algorithm, this.key.buffer),
                B = inB(this.signature.buffer, this.encoding);
            return this.emit("done", Q, B), this.emit("data", Q), this.emit("end"), this.readable = !1, Q
        } catch (G) {
            this.readable = !1, this.emit("error", G), this.emit("close")
        }
    };
    HZA.decode = inB;
    HZA.isValid = pnB;
    HZA.verify = lnB;
    nnB.exports = HZA
});
var Wn1 = U((zs6) => {
    var snB = hnB(),
        wA1 = anB(),
        Es6 = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
    zs6.ALGORITHMS = Es6;
    zs6.sign = snB.sign;
    zs6.verify = wA1.verify;
    zs6.decode = wA1.decode;
    zs6.isValid = wA1.isValid;
    zs6.createSign = function(Q) {
        return new snB(Q)
    };
    zs6.createVerify = function(Q) {
        return new wA1(Q)
    }
});
var ZaB = U((Gl) => {
    var kT = Gl && Gl.__classPrivateFieldGet || function(A, Q, B, G) {
            if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
            if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
        },
        rnB = Gl && Gl.__classPrivateFieldSet || function(A, Q, B, G, Z) {
            if (G === "m") throw TypeError("Private method is not writable");
            if (G === "a" && !Z) throw TypeError("Private accessor was defined without a setter");
            if (typeof Q === "function" ? A !== Q || !Z : !Q.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return G === "a" ? Z.call(A, B) : Z ? Z.value = B : Q.set(A, B), B
        },
        yT, CZA, Xn1, onB, tnB, Fn1, Vn1, enB;
    Object.defineProperty(Gl, "__esModule", {
        value: !0
    });
    Gl.GoogleToken = void 0;
    var AaB = UA("fs"),
        Os6 = PT(),
        Rs6 = Wn1(),
        Ts6 = UA("path"),
        Ps6 = UA("util"),
        QaB = AaB.readFile ? (0, Ps6.promisify)(AaB.readFile) : async () => {
            throw new EZA("use key rather than keyFile.", "MISSING_CREDENTIALS")
        }, BaB = "https://www.googleapis.com/oauth2/v4/token", js6 = "https://accounts.google.com/o/oauth2/revoke?token=";

class EZA extends Error {
        constructor(A, Q) {
            super(A);
            this.code = Q
        }
    }

class GaB {
        get accessToken() {
            return this.rawToken ? this.rawToken.access_token : void 0
        }
        get idToken() {
            return this.rawToken ? this.rawToken.id_token : void 0
        }
        get tokenType() {
            return this.rawToken ? this.rawToken.token_type : void 0
        }
        get refreshToken() {
            return this.rawToken ? this.rawToken.refresh_token : void 0
        }
        constructor(A) {
            yT.add(this), this.transporter = {
                request: (Q) => (0, Os6.request)(Q)
            }, CZA.set(this, void 0), kT(this, yT, "m", Vn1).call(this, A)
        }
        hasExpired() {
            let A = new Date().getTime();
            if (this.rawToken && this.expiresAt) return A >= this.expiresAt;
            else return !0
        }
        isTokenExpiring() {
            var A;
            let Q = new Date().getTime(),
                B = (A = this.eagerRefreshThresholdMillis) !== null && A !== void 0 ? A : 0;
            if (this.rawToken && this.expiresAt) return this.expiresAt <= Q + B;
            else return !0
        }
        getToken(A, Q = {}) {
            if (typeof A === "object") Q = A, A = void 0;
            if (Q = Object.assign({
                    forceRefresh: !1
                }, Q), A) {
                let B = A;
                kT(this, yT, "m", Xn1).call(this, Q).then((G) => B(null, G), A);
                return
            }
            return kT(this, yT, "m", Xn1).call(this, Q)
        }
        async getCredentials(A) {
            switch (Ts6.extname(A)) {
                case ".json": {
                    let B = await QaB(A, "utf8"),
                        G = JSON.parse(B),
                        Z = G.private_key,
                        I = G.client_email;
                    if (!Z || !I) throw new EZA("private_key and client_email are required.", "MISSING_CREDENTIALS");
                    return {
                        privateKey: Z,
                        clientEmail: I
                    }
                }
                case ".der":
                case ".crt":
                case ".pem":
                    return {
                        privateKey: await QaB(A, "utf8")
                    };
                case ".p12":
                case ".pfx":
                    throw new EZA("*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.", "UNKNOWN_CERTIFICATE_TYPE");
                default:
                    throw new EZA("Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.", "UNKNOWN_CERTIFICATE_TYPE")
            }
        }
        revokeToken(A) {
            if (A) {
                kT(this, yT, "m", Fn1).call(this).then(() => A(), A);
                return
            }
            return kT(this, yT, "m", Fn1).call(this)
        }
    }
    Gl.GoogleToken = GaB;
    CZA = new WeakMap, yT = new WeakSet, Xn1 = async function(Q) {
        if (kT(this, CZA, "f") && !Q.forceRefresh) return kT(this, CZA, "f");
        try {
            return await rnB(this, CZA, kT(this, yT, "m", onB).call(this, Q), "f")
        } finally {
            rnB(this, CZA, void 0, "f")
        }
    }, onB = async function(Q) {
        if (this.isTokenExpiring() === !1 && Q.forceRefresh === !1) return Promise.resolve(this.rawToken);
        if (!this.key && !this.keyFile) throw Error("No key or keyFile set.");
        if (!this.key && this.keyFile) {
            let B = await this.getCredentials(this.keyFile);
            if (this.key = B.privateKey, this.iss = B.clientEmail || this.iss, !B.clientEmail) kT(this, yT, "m", tnB).call(this)
        }
        return kT(this, yT, "m", enB).call(this)
    }, tnB = function() {
        if (!this.iss) throw new EZA("email is required.", "MISSING_CREDENTIALS")
    }, Fn1 = async function() {
        if (!this.accessToken) throw Error("No token to revoke.");
        let Q = js6 + this.accessToken;
        await this.transporter.request({
            url: Q,
            retry: !0
        }), kT(this, yT, "m", Vn1).call(this, {
            email: this.iss,
            sub: this.sub,
            key: this.key,
            keyFile: this.keyFile,
            scope: this.scope,
            additionalClaims: this.additionalClaims
        })
    }, Vn1 = function(Q = {}) {
        if (this.keyFile = Q.keyFile, this.key = Q.key, this.rawToken = void 0, this.iss = Q.email || Q.iss, this.sub = Q.sub, this.additionalClaims = Q.additionalClaims, typeof Q.scope === "object") this.scope = Q.scope.join(" ");
        else this.scope = Q.scope;
        if (this.eagerRefreshThresholdMillis = Q.eagerRefreshThresholdMillis, Q.transporter) this.transporter = Q.transporter
    }, enB = async function() {
        var Q, B;