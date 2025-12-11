/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_022.js
 * 处理时间: 2025-12-09T03:41:36.240Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 22/30
 * Lines: 246564 - 248063 (1500 lines)
 * Original file: cli.js
 */

            return this.addSharedMetadataHeaders(Q)
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
                let G = await this.getRequestHeaders();
                if (A.headers = A.headers || {}, G && G["x-goog-user-project"]) A.headers["x-goog-user-project"] = G["x-goog-user-project"];
                if (G && G.Authorization) A.headers.Authorization = G.Authorization;
                B = await this.transporter.request(A)
            } catch (G) {
                let Z = G.response;
                if (Z) {
                    let I = Z.status,
                        Y = Z.config.data instanceof hr6.Readable;
                    if (!Q && (I === 401 || I === 403) && !Y && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0)
                }
                throw G
            }
            return B
        }
        async refreshAccessTokenAsync() {
            let A = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
            if (this.cachedAccessToken = {
                    access_token: A.access_token,
                    expiry_date: new Date().getTime() + A.expires_in * 1000,
                    res: A.res
                }, A.refresh_token !== void 0) this.refreshToken = A.refresh_token;
            return this.cachedAccessToken
        }
        isExpired(A) {
            let Q = new Date().getTime();
            return A.expiry_date ? Q >= A.expiry_date - this.eagerRefreshThresholdMillis : !1
        }
    }
    VsB.ExternalAccountAuthorizedUserClient = FsB
});
var $sB = moduleWrapper((qD) => {
    var Il = qD && qD.__classPrivateFieldGet || function(A, Q, B, G) {
            if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
            if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
        },
        HsB = qD && qD.__classPrivateFieldSet || function(A, Q, B, G, Z) {
            if (G === "m") throw TypeError("Private method is not writable");
            if (G === "a" && !Z) throw TypeError("Private accessor was defined without a setter");
            if (typeof Q === "function" ? A !== Q || !Z : !Q.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return G === "a" ? Z.call(A, B) : Z ? Z.value = B : Q.set(A, B), B
        },
        Yl, NZA, LZA, UsB;
    Object.defineProperty(qD, "__esModule", {
        value: !0
    });
    qD.GoogleAuth = qD.GoogleAuthExceptionMessages = qD.CLOUD_SDK_CLIENT_ID = void 0;
    var dr6 = nodeRequire("child_process"),
        DqA = nodeRequire("fs"),
        VqA = AqA(),
        cr6 = nodeRequire("os"),
        rn1 = nodeRequire("path"),
        pr6 = XZA(),
        lr6 = BqA(),
        ir6 = ri1(),
        nr6 = oi1(),
        ar6 = ti1(),
        wZA = Cn1(),
        CsB = En1(),
        qZA = zn1(),
        sr6 = nn1(),
        KqA = Zl(),
        sn1 = Zk(),
        EsB = DsB(),
        zsB = Bl();
    qD.CLOUD_SDK_CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com";
    qD.GoogleAuthExceptionMessages = {
        API_KEY_WITH_CREDENTIALS: "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
        NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
        NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
        NO_ADC_FOUND: "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
        NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`
    };
    class on1 {
        get isGCE() {
            return this.checkIsGCE
        }
        constructor(A = {}) {
            if (Yl.add(this), this.checkIsGCE = void 0, this.jsonContent = null, this.cachedCredential = null, NZA.set(this, null), this.clientOptions = {}, this._cachedProjectId = A.projectId || null, this.cachedCredential = A.authClient || null, this.keyFilename = A.keyFilename || A.keyFile, this.scopes = A.scopes, this.clientOptions = A.clientOptions || {}, this.jsonContent = A.credentials || null, this.apiKey = A.apiKey || this.clientOptions.apiKey || null, this.apiKey && (this.jsonContent || this.clientOptions.credentials)) throw RangeError(qD.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
            if (A.universeDomain) this.clientOptions.universeDomain = A.universeDomain
        }
        setGapicJWTValues(A) {
            A.defaultServicePath = this.defaultServicePath, A.useJWTAccessWithScope = this.useJWTAccessWithScope, A.defaultScopes = this.defaultScopes
        }
        getProjectId(A) {
            if (A) this.getProjectIdAsync().then((Q) => A(null, Q), A);
            else return this.getProjectIdAsync()
        }
        async getProjectIdOptional() {
            try {
                return await this.getProjectId()
            } catch (A) {
                if (A instanceof Error && A.message === qD.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) return null;
                else throw A
            }
        }
        async findAndCacheProjectId() {
            let A = null;
            if (A || (A = await this.getProductionProjectId()), A || (A = await this.getFileProjectId()), A || (A = await this.getDefaultServiceProjectId()), A || (A = await this.getGCEProjectId()), A || (A = await this.getExternalAccountClientProjectId()), A) return this._cachedProjectId = A, A;
            else throw Error(qD.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND)
        }
        async getProjectIdAsync() {
            if (this._cachedProjectId) return this._cachedProjectId;
            if (!this._findProjectIdPromise) this._findProjectIdPromise = this.findAndCacheProjectId();
            return this._findProjectIdPromise
        }
        async getUniverseDomainFromMetadataServer() {
            var A;
            let Q;
            try {
                Q = await VqA.universe("universe-domain"), Q || (Q = sn1.DEFAULT_UNIVERSE)
            } catch (B) {
                if (B && ((A = B === null || B === void 0 ? void 0 : B.response) === null || A === void 0 ? void 0 : A.status) === 404) Q = sn1.DEFAULT_UNIVERSE;
                else throw B
            }
            return Q
        }
        async getUniverseDomain() {
            let A = (0, zsB.originalOrCamelOptions)(this.clientOptions).get("universe_domain");
            try {
                A !== null && A !== void 0 || (A = (await this.getClient()).universeDomain)
            } catch (Q) {
                A !== null && A !== void 0 || (A = sn1.DEFAULT_UNIVERSE)
            }
            return A
        }
        getAnyScopes() {
            return this.scopes || this.defaultScopes
        }
        getApplicationDefault(A = {}, Q) {
            let B;
            if (typeof A === "function") Q = A;
            else B = A;
            if (Q) this.getApplicationDefaultAsync(B).then((G) => Q(null, G.credential, G.projectId), Q);
            else return this.getApplicationDefaultAsync(B)
        }
        async getApplicationDefaultAsync(A = {}) {
            if (this.cachedCredential) return await Il(this, Yl, "m", LZA).call(this, this.cachedCredential, null);
            let Q;
            if (Q = await this._tryGetApplicationCredentialsFromEnvironmentVariable(A), Q) {
                if (Q instanceof wZA.JWT) Q.scopes = this.scopes;
                else if (Q instanceof KqA.BaseExternalAccountClient) Q.scopes = this.getAnyScopes();
                return await Il(this, Yl, "m", LZA).call(this, Q)
            }
            if (Q = await this._tryGetApplicationCredentialsFromWellKnownFile(A), Q) {
                if (Q instanceof wZA.JWT) Q.scopes = this.scopes;
                else if (Q instanceof KqA.BaseExternalAccountClient) Q.scopes = this.getAnyScopes();
                return await Il(this, Yl, "m", LZA).call(this, Q)
            }
            if (await this._checkIsGCE()) return A.scopes = this.getAnyScopes(), await Il(this, Yl, "m", LZA).call(this, new ir6.Compute(A));
            throw Error(qD.GoogleAuthExceptionMessages.NO_ADC_FOUND)
        }
        async _checkIsGCE() {
            if (this.checkIsGCE === void 0) this.checkIsGCE = VqA.getGCPResidency() || await VqA.isAvailable();
            return this.checkIsGCE
        }
        async _tryGetApplicationCredentialsFromEnvironmentVariable(A) {
            let Q = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
            if (!Q || Q.length === 0) return null;
            try {
                return this._getApplicationCredentialsFromFilePath(Q, A)
            } catch (B) {
                if (B instanceof Error) B.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: TextComponent{B.message}`;
                throw B
            }
        }
        async _tryGetApplicationCredentialsFromWellKnownFile(A) {
            let Q = null;
            if (this._isWindows()) Q = process.env.APPDATA;
            else {
                let G = process.env.HOME;
                if (G) Q = rn1.join(G, ".config")
            }
            if (Q) {
                if (Q = rn1.join(Q, "gcloud", "application_default_credentials.json"), !DqA.existsSync(Q)) Q = null
            }
            if (!Q) return null;
            return await this._getApplicationCredentialsFromFilePath(Q, A)
        }
        async _getApplicationCredentialsFromFilePath(A, Q = {}) {
            if (!A || A.length === 0) throw Error("The file path is invalid.");
            try {
                if (A = DqA.realpathSync(A), !DqA.lstatSync(A).isFile()) throw Error()
            } catch (G) {
                if (G instanceof Error) G.message = `The file at TextComponent{A} does not exist, or it is not a file. TextComponent{G.message}`;
                throw G
            }
            let B = DqA.createReadStream(A);
            return this.fromStream(B, Q)
        }
        fromImpersonatedJSON(A) {
            var Q, B, G, Z;
            if (!A) throw Error("Must pass in a JSON object containing an  impersonated refresh token");
            if (A.type !== qZA.IMPERSONATED_ACCOUNT_TYPE) throw Error(`The incoming JSON object does not have the "TextComponent{qZA.IMPERSONATED_ACCOUNT_TYPE}" type`);
            if (!A.source_credentials) throw Error("The incoming JSON object does not contain a source_credentials field");
            if (!A.service_account_impersonation_url) throw Error("The incoming JSON object does not contain a service_account_impersonation_url field");
            let I = this.fromJSON(A.source_credentials);
            if (((Q = A.service_account_impersonation_url) === null || Q === void 0 ? void 0 : Q.length) > 256) throw RangeError(`Target principal is too long: TextComponent{A.service_account_impersonation_url}`);
            let Y = (G = (B = /(?<target>[^/]+):(generateAccessToken|generateIdToken)TextComponent/.exec(A.service_account_impersonation_url)) === null || B === void 0 ? void 0 : B.groups) === null || G === void 0 ? void 0 : G.target;
            if (!Y) throw RangeError(`Cannot extract target principal from TextComponent{A.service_account_impersonation_url}`);
            let J = (Z = this.getAnyScopes()) !== null && Z !== void 0 ? Z : [];
            return new qZA.Impersonated({
                ...A,
                sourceClient: I,
                targetPrincipal: Y,
                targetScopes: Array.isArray(J) ? J : [J]
            })
        }
        fromJSON(A, Q = {}) {
            let B, G = (0, zsB.originalOrCamelOptions)(Q).get("universe_domain");
            if (A.type === CsB.USER_REFRESH_ACCOUNT_TYPE) B = new CsB.UserRefreshClient(Q), B.fromJSON(A);
            else if (A.type === qZA.IMPERSONATED_ACCOUNT_TYPE) B = this.fromImpersonatedJSON(A);
            else if (A.type === KqA.EXTERNAL_ACCOUNT_TYPE) B = sr6.ExternalAccountClient.fromJSON(A, Q), B.scopes = this.getAnyScopes();
            else if (A.type === EsB.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE) B = new EsB.ExternalAccountAuthorizedUserClient(A, Q);
            else Q.scopes = this.scopes, B = new wZA.JWT(Q), this.setGapicJWTValues(B), B.fromJSON(A);
            if (G) B.universeDomain = G;
            return B
        }
        _cacheClientFromJSON(A, Q) {
            let B = this.fromJSON(A, Q);
            return this.jsonContent = A, this.cachedCredential = B, B
        }
        fromStream(A, Q = {}, B) {
            let G = {};
            if (typeof Q === "function") B = Q;
            else G = Q;
            if (B) this.fromStreamAsync(A, G).then((Z) => B(null, Z), B);
            else return this.fromStreamAsync(A, G)
        }
        fromStreamAsync(A, Q) {
            return new Promise((B, G) => {
                if (!A) throw Error("Must pass in a stream containing the Google auth settings.");
                let Z = [];
                A.setEncoding("utf8").on("error", G).on("data", (I) => Z.push(I)).on("end", () => {
                    try {
                        try {
                            let I = JSON.parse(Z.join("")),
                                Y = this._cacheClientFromJSON(I, Q);
                            return B(Y)
                        } catch (I) {
                            if (!this.keyFilename) throw I;
                            let Y = new wZA.JWT({
                                ...this.clientOptions,
                                keyFile: this.keyFilename
                            });
                            return this.cachedCredential = Y, this.setGapicJWTValues(Y), B(Y)
                        }
                    } catch (I) {
                        return G(I)
                    }
                })
            })
        }
        fromAPIKey(A, Q = {}) {
            return new wZA.JWT({
                ...Q,
                apiKey: A
            })
        }
        _isWindows() {
            let A = cr6.platform();
            if (A && A.length >= 3) {
                if (A.substring(0, 3).toLowerCase() === "win") return !0
            }
            return !1
        }
        async getDefaultServiceProjectId() {
            return new Promise((A) => {
                (0, dr6.exec)("gcloud config config-helper --format json", (Q, B) => {
                    if (!Q && B) try {
                        let G = JSON.parse(B).configuration.properties.core.project;
                        A(G);
                        return
                    } catch (G) {}
                    A(null)
                })
            })
        }
        getProductionProjectId() {
            return process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project
        }
        async getFileProjectId() {
            if (this.cachedCredential) return this.cachedCredential.projectId;
            if (this.keyFilename) {
                let Q = await this.getClient();
                if (Q && Q.projectId) return Q.projectId
            }
            let A = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
            if (A) return A.projectId;
            else return null
        }
        async getExternalAccountClientProjectId() {
            if (!this.jsonContent || this.jsonContent.type !== KqA.EXTERNAL_ACCOUNT_TYPE) return null;
            return await (await this.getClient()).getProjectId()
        }
        async getGCEProjectId() {
            try {
                return await VqA.project("project-id")
            } catch (A) {
                return null
            }
        }
        getCredentials(A) {
            if (A) this.getCredentialsAsync().then((Q) => A(null, Q), A);
            else return this.getCredentialsAsync()
        }
        async getCredentialsAsync() {
            let A = await this.getClient();
            if (A instanceof qZA.Impersonated) return {
                client_email: A.getTargetPrincipal()
            };
            if (A instanceof KqA.BaseExternalAccountClient) {
                let Q = A.getServiceAccountEmail();
                if (Q) return {
                    client_email: Q,
                    universe_domain: A.universeDomain
                }
            }
            if (this.jsonContent) return {
                client_email: this.jsonContent.client_email,
                private_key: this.jsonContent.private_key,
                universe_domain: this.jsonContent.universe_domain
            };
            if (await this._checkIsGCE()) {
                let [Q, B] = await Promise.all([VqA.instance("service-accounts/default/email"), this.getUniverseDomain()]);
                return {
                    client_email: Q,
                    universe_domain: B
                }
            }
            throw Error(qD.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND)
        }
        async getClient() {
            if (this.cachedCredential) return this.cachedCredential;
            HsB(this, NZA, Il(this, NZA, "f") || Il(this, Yl, "m", UsB).call(this), "f");
            try {
                return await Il(this, NZA, "f")
            } finally {
                HsB(this, NZA, null, "f")
            }
        }
        async getIdTokenClient(A) {
            let Q = await this.getClient();
            if (!("fetchIdToken" in Q)) throw Error("Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.");
            return new nr6.IdTokenClient({
                targetAudience: A,
                idTokenProvider: Q
            })
        }
        async getAccessToken() {
            return (await (await this.getClient()).getAccessToken()).token
        }
        async getRequestHeaders(A) {
            return (await this.getClient()).getRequestHeaders(A)
        }
        async authorizeRequest(A) {
            A = A || {};
            let Q = A.url || A.uri,
                G = await (await this.getClient()).getRequestHeaders(Q);
            return A.headers = Object.assign(A.headers || {}, G), A
        }
        async request(A) {
            return (await this.getClient()).request(A)
        }
        getEnv() {
            return (0, ar6.getEnv)()
        }
        async sign(A, Q) {
            let B = await this.getClient(),
                G = await this.getUniverseDomain();
            if (Q = Q || `https://iamcredentials.TextComponent{G}/v1/projects/-/serviceAccounts/`, B instanceof qZA.Impersonated) return (await B.sign(A)).signedBlob;
            let Z = (0, pr6.createCrypto)();
            if (B instanceof wZA.JWT && B.key) return await Z.sign(B.key, A);
            let I = await this.getCredentials();
            if (!I.client_email) throw Error("Cannot sign data without `client_email`.");
            return this.signBlob(Z, I.client_email, A, Q)
        }
        async signBlob(A, Q, B, G) {
            let Z = new URL(G + `TextComponent{Q}:signBlob`);
            return (await this.request({
                method: "POST",
                url: Z.href,
                data: {
                    payload: A.encodeBase64StringUtf8(B)
                },
                retry: !0,
                retryConfig: {
                    httpMethodsToRetry: ["POST"]
                }
            })).data.signedBlob
        }
    }
    qD.GoogleAuth = on1;
    NZA = new WeakMap, Yl = new WeakSet, LZA = async function(Q, B = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
        let G = await this.getProjectIdOptional();
        if (B) Q.quotaProjectId = B;
        return this.cachedCredential = Q, {
            credential: Q,
            projectId: G
        }
    }, UsB = async function() {
        if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
        else if (this.keyFilename) {
            let Q = rn1.resolve(this.keyFilename),
                B = DqA.createReadStream(Q);
            return await this.fromStreamAsync(B, this.clientOptions)
        } else if (this.apiKey) {
            let Q = await this.fromAPIKey(this.apiKey, this.clientOptions);
            Q.scopes = this.scopes;
            let {
                credential: B
            } = await Il(this, Yl, "m", LZA).call(this, Q);
            return B
        } else {
            let {
                credential: Q
            } = await this.getApplicationDefaultAsync(this.clientOptions);
            return Q
        }
    };
    on1.DefaultTransporter = lr6.DefaultTransporter
});
var LsB = moduleWrapper((qsB) => {
    Object.defineProperty(qsB, "__esModule", {
        value: !0
    });
    qsB.IAMAuth = void 0;
    class wsB {
        constructor(A, Q) {
            this.selector = A, this.token = Q, this.selector = A, this.token = Q
        }
        getRequestHeaders() {
            return {
                "x-goog-iam-authority-selector": this.selector,
                "x-goog-iam-authorization-token": this.token
            }
        }
    }
    qsB.IAMAuth = wsB
});
var TsB = moduleWrapper((OsB) => {
    Object.defineProperty(OsB, "__esModule", {
        value: !0
    });
    OsB.DownscopedClient = OsB.EXPIRATION_TIME_OFFSET = OsB.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
    var rr6 = nodeRequire("stream"),
        or6 = Zk(),
        tr6 = wn1(),
        er6 = "urn:ietf:params:oauth:grant-type:token-exchange",
        Ao6 = "urn:ietf:params:oauth:token-type:access_token",
        Qo6 = "urn:ietf:params:oauth:token-type:access_token";
    OsB.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
    OsB.EXPIRATION_TIME_OFFSET = 300000;
    class MsB extends or6.AuthClient {
        constructor(A, Q, B, G) {
            super({
                ...B,
                quotaProjectId: G
            });
            if (this.authClient = A, this.credentialAccessBoundary = Q, Q.accessBoundary.accessBoundaryRules.length === 0) throw Error("At least one access boundary rule needs to be defined.");
            else if (Q.accessBoundary.accessBoundaryRules.length > OsB.MAX_ACCESS_BOUNDARY_RULES_COUNT) throw Error(`The provided access boundary has more than TextComponent{OsB.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`);
            for (let Z of Q.accessBoundary.accessBoundaryRules)
                if (Z.availablePermissions.length === 0) throw Error("At least one permission should be defined in access boundary rules.");
            this.stsCredential = new tr6.StsCredentials(`https://sts.TextComponent{this.universeDomain}/v1/token`), this.cachedDownscopedAccessToken = null
        }
        setCredentials(A) {
            if (!A.expiry_date) throw Error("The access token expiry_date field is missing in the provided credentials.");
            super.setCredentials(A), this.cachedDownscopedAccessToken = A
        }
        async getAccessToken() {
            if (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) await this.refreshAccessTokenAsync();
            return {
                token: this.cachedDownscopedAccessToken.access_token,
                expirationTime: this.cachedDownscopedAccessToken.expiry_date,
                res: this.cachedDownscopedAccessToken.res
            }
        }
        async getRequestHeaders() {
            let Q = {
                Authorization: `Bearer TextComponent{(await this.getAccessToken()).token}`
            };
            return this.addSharedMetadataHeaders(Q)
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
                let G = await this.getRequestHeaders();
                if (A.headers = A.headers || {}, G && G["x-goog-user-project"]) A.headers["x-goog-user-project"] = G["x-goog-user-project"];
                if (G && G.Authorization) A.headers.Authorization = G.Authorization;
                B = await this.transporter.request(A)
            } catch (G) {
                let Z = G.response;
                if (Z) {
                    let I = Z.status,
                        Y = Z.config.data instanceof rr6.Readable;
                    if (!Q && (I === 401 || I === 403) && !Y && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0)
                }
                throw G
            }
            return B
        }
        async refreshAccessTokenAsync() {
            var A;
            let Q = (await this.authClient.getAccessToken()).token,
                B = {
                    grantType: er6,
                    requestedTokenType: Ao6,
                    subjectToken: Q,
                    subjectTokenType: Qo6
                },
                G = await this.stsCredential.exchangeToken(B, void 0, this.credentialAccessBoundary),
                Z = ((A = this.authClient.credentials) === null || A === void 0 ? void 0 : A.expiry_date) || null,
                I = G.expires_in ? new Date().getTime() + G.expires_in * 1000 : Z;
            return this.cachedDownscopedAccessToken = {
                access_token: G.access_token,
                expiry_date: I,
                res: G.res
            }, this.credentials = {}, Object.assign(this.credentials, this.cachedDownscopedAccessToken), delete this.credentials.res, this.emit("tokens", {
                refresh_token: null,
                expiry_date: this.cachedDownscopedAccessToken.expiry_date,
                access_token: this.cachedDownscopedAccessToken.access_token,
                token_type: "Bearer",
                id_token: null
            }), this.cachedDownscopedAccessToken
        }
        isExpired(A) {
            let Q = new Date().getTime();
            return A.expiry_date ? Q >= A.expiry_date - this.eagerRefreshThresholdMillis : !1
        }
    }
    OsB.DownscopedClient = MsB
});
var SsB = moduleWrapper((PsB) => {
    Object.defineProperty(PsB, "__esModule", {
        value: !0
    });
    PsB.PassThroughClient = void 0;
    var Go6 = Zk();
    class en1 extends Go6.AuthClient {
        async request(A) {
            return this.transporter.request(A)
        }
        async getAccessToken() {
            return {}
        }
        async getRequestHeaders() {
            return {}
        }
    }
    PsB.PassThroughClient = en1;
    var Zo6 = new en1;
    Zo6.getAccessToken()
});
var Qa1 = moduleWrapper((ZZ) => {
    Object.defineProperty(ZZ, "__esModule", {
        value: !0
    });
    ZZ.GoogleAuth = ZZ.auth = ZZ.DefaultTransporter = ZZ.PassThroughClient = ZZ.ExecutableError = ZZ.PluggableAuthClient = ZZ.DownscopedClient = ZZ.BaseExternalAccountClient = ZZ.ExternalAccountClient = ZZ.IdentityPoolClient = ZZ.AwsRequestSigner = ZZ.AwsClient = ZZ.UserRefreshClient = ZZ.LoginTicket = ZZ.ClientAuthentication = ZZ.OAuth2Client = ZZ.CodeChallengeMethod = ZZ.Impersonated = ZZ.JWT = ZZ.JWTAccess = ZZ.IdTokenClient = ZZ.IAMAuth = ZZ.GCPEnv = ZZ.Compute = ZZ.DEFAULT_UNIVERSE = ZZ.AuthClient = ZZ.gaxios = ZZ.gcpMetadata = void 0;
    var _sB = $sB();
    Object.defineProperty(ZZ, "GoogleAuth", {
        enumerable: !0,
        get: function() {
            return _sB.GoogleAuth
        }
    });
    ZZ.gcpMetadata = AqA();
    ZZ.gaxios = PT();
    var ksB = Zk();
    Object.defineProperty(ZZ, "AuthClient", {
        enumerable: !0,
        get: function() {
            return ksB.AuthClient
        }
    });
    Object.defineProperty(ZZ, "DEFAULT_UNIVERSE", {
        enumerable: !0,
        get: function() {
            return ksB.DEFAULT_UNIVERSE
        }
    });
    var Io6 = ri1();
    Object.defineProperty(ZZ, "Compute", {
        enumerable: !0,
        get: function() {
            return Io6.Compute
        }
    });
    var Yo6 = ti1();
    Object.defineProperty(ZZ, "GCPEnv", {
        enumerable: !0,
        get: function() {
            return Yo6.GCPEnv
        }
    });
    var Jo6 = LsB();
    Object.defineProperty(ZZ, "IAMAuth", {
        enumerable: !0,
        get: function() {
            return Jo6.IAMAuth
        }
    });
    var Wo6 = oi1();
    Object.defineProperty(ZZ, "IdTokenClient", {
        enumerable: !0,
        get: function() {
            return Wo6.IdTokenClient
        }
    });
    var Xo6 = Dn1();
    Object.defineProperty(ZZ, "JWTAccess", {
        enumerable: !0,
        get: function() {
            return Xo6.JWTAccess
        }
    });
    var Fo6 = Cn1();
    Object.defineProperty(ZZ, "JWT", {
        enumerable: !0,
        get: function() {
            return Fo6.JWT
        }
    });
    var Vo6 = zn1();
    Object.defineProperty(ZZ, "Impersonated", {
        enumerable: !0,
        get: function() {
            return Vo6.Impersonated
        }
    });
    var Aa1 = Pe();
    Object.defineProperty(ZZ, "CodeChallengeMethod", {
        enumerable: !0,
        get: function() {
            return Aa1.CodeChallengeMethod
        }
    });
    Object.defineProperty(ZZ, "OAuth2Client", {
        enumerable: !0,
        get: function() {
            return Aa1.OAuth2Client
        }
    });
    Object.defineProperty(ZZ, "ClientAuthentication", {
        enumerable: !0,
        get: function() {
            return Aa1.ClientAuthentication
        }
    });
    var Ko6 = ni1();
    Object.defineProperty(ZZ, "LoginTicket", {
        enumerable: !0,
        get: function() {
            return Ko6.LoginTicket
        }
    });
    var Do6 = En1();
    Object.defineProperty(ZZ, "UserRefreshClient", {
        enumerable: !0,
        get: function() {
            return Do6.UserRefreshClient
        }
    });
    var Ho6 = vn1();
    Object.defineProperty(ZZ, "AwsClient", {
        enumerable: !0,
        get: function() {
            return Ho6.AwsClient
        }
    });
    var Co6 = kn1();
    Object.defineProperty(ZZ, "AwsRequestSigner", {
        enumerable: !0,
        get: function() {
            return Co6.AwsRequestSigner
        }
    });
    var Eo6 = _n1();
    Object.defineProperty(ZZ, "IdentityPoolClient", {
        enumerable: !0,
        get: function() {
            return Eo6.IdentityPoolClient
        }
    });
    var zo6 = nn1();
    Object.defineProperty(ZZ, "ExternalAccountClient", {
        enumerable: !0,
        get: function() {
            return zo6.ExternalAccountClient
        }
    });
    var Uo6 = Zl();
    Object.defineProperty(ZZ, "BaseExternalAccountClient", {
        enumerable: !0,
        get: function() {
            return Uo6.BaseExternalAccountClient
        }
    });
    var $o6 = TsB();
    Object.defineProperty(ZZ, "DownscopedClient", {
        enumerable: !0,
        get: function() {
            return $o6.DownscopedClient
        }
    });
    var ysB = PA1();
    Object.defineProperty(ZZ, "PluggableAuthClient", {
        enumerable: !0,
        get: function() {
            return ysB.PluggableAuthClient
        }
    });
    Object.defineProperty(ZZ, "ExecutableError", {
        enumerable: !0,
        get: function() {
            return ysB.ExecutableError
        }
    });
    var wo6 = SsB();
    Object.defineProperty(ZZ, "PassThroughClient", {
        enumerable: !0,
        get: function() {
            return wo6.PassThroughClient
        }
    });
    var qo6 = BqA();
    Object.defineProperty(ZZ, "DefaultTransporter", {
        enumerable: !0,
        get: function() {
            return qo6.DefaultTransporter
        }
    });
    var No6 = new _sB.GoogleAuth;
    ZZ.auth = No6
});
var jA1 = (A) => {
    if (typeof globalThis.process < "u") return globalThis.process.env?.[A]?.trim() ?? void 0;
    if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(A)?.trim();
    return
};
var xsB = lazyLoader(() => {
    ZE()
});

function SA1(A) {
    return A != null && typeof A === "object" && !Array.isArray(A)
}
var Ba1 = (A) => (Ba1 = Array.isArray, Ba1(A)),
    Ga1;
var Za1 = lazyLoader(() => {
    xsB();
    Ga1 = Ba1
});

function* To6(A) {
    if (!A) return;
    if (vsB in A) {
        let {
            values: G,
            nulls: Z
        } = A;
        yield* G.entries();
        for (let I of Z) yield [I, null];
        return
    }
    let Q = !1,
        B;
    if (A instanceof Headers) B = A.entries();
    else if (Ga1(A)) B = A;
    else Q = !0, B = Object.entries(A ?? {});
    for (let G of B) {
        let Z = G[0];
        if (typeof Z !== "string") throw TypeError("expected header name to be a string");
        let I = Ga1(G[1]) ? G[1] : [G[1]],
            Y = !1;
        for (let J of I) {
            if (J === void 0) continue;
            if (Q && !Y) Y = !0, yield [Z, null];
            yield [Z, J]
        }
    }
}
var vsB, bsB = (A) => {
    let Q = new Headers,
        B = new Set;
    for (let G of A) {
        let Z = new Set;
        for (let [I, Y] of To6(G)) {
            let J = I.toLowerCase();
            if (!Z.has(J)) Q.delete(I), Z.add(J);
            if (Y === null) Q.delete(I), B.add(J);
            else Q.append(I, Y), B.delete(J)
        }
    }
    return {
        [vsB]: !0,
        values: Q,
        nulls: B
    }
};
var fsB = lazyLoader(() => {
    Za1();
    vsB = Symbol.for("brand.privateNullableHeaders")
});

function So6(A) {
    let Q = new Bq(A);
    return delete Q.batches, Q
}

function _o6(A) {
    let Q = new mH(A);
    return delete Q.messages.batches, Q
}
var hsB, Po6 = "vertex-2023-10-16",
    jo6, _A1;
var Ia1 = lazyLoader(() => {
    Hf();
    NwA();
    Za1();
    fsB();
    Hf();
    hsB = esmImport(Qa1(), 1), jo6 = new Set(["/v1/messages", "/v1/messages?beta=true"]);
    _A1 = class _A1 extends ZG {
        constructor({
            baseURL: A = jA1("ANTHROPIC_VERTEX_BASE_URL"),
            region: Q = jA1("CLOUD_ML_REGION") ?? null,
            projectId: B = jA1("ANTHROPIC_VERTEX_PROJECT_ID") ?? null,
            ...G
        } = {}) {
            if (!Q) throw Error("No region was given. The client should be instantiated with the `region` option or the `CLOUD_ML_REGION` environment variable should be set.");
            super({
                baseURL: A || (Q === "global" ? "https://aiplatform.googleapis.com/v1" : `https://TextComponent{Q}-aiplatform.googleapis.com/v1`),
                ...G
            });
            if (this.messages = So6(this), this.beta = _o6(this), this.region = Q, this.projectId = B, this.accessToken = G.accessToken ?? null, G.authClient && G.googleAuth) throw Error("You cannot provide both `authClient` and `googleAuth`. Please provide only one of them.");
            else if (G.authClient) this._authClientPromise = Promise.resolve(G.authClient);
            else this._auth = G.googleAuth ?? new hsB.GoogleAuth({
                scopes: "https://www.googleapis.com/auth/cloud-platform"
            }), this._authClientPromise = this._auth.getClient()
        }
        validateHeaders() {}
        async prepareOptions(A) {
            let Q = await this._authClientPromise,
                B = await Q.getRequestHeaders(),
                G = Q.projectId ?? B["x-goog-user-project"];
            if (!this.projectId && G) this.projectId = G;
            A.headers = bsB([B, A.headers])
        }
        async buildRequest(A) {
            if (SA1(A.body)) A.body = {
                ...A.body
            };
            if (SA1(A.body)) {
                if (!A.body.anthropic_version) A.body.anthropic_version = Po6
            }
            if (jo6.has(A.path) && A.method === "post") {
                if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
                if (!SA1(A.body)) throw Error("Expected request body to be an object for post /v1/messages");
                let Q = A.body.model;
                A.body.model = void 0;
                let G = A.body.stream ?? !1 ? "streamRawPredict" : "rawPredict";
                A.path = `/projects/TextComponent{this.projectId}/locations/TextComponent{this.region}/publishers/anthropic/models/TextComponent{Q}:TextComponent{G}`
            }
            if (A.path === "/v1/messages/count_tokens" || A.path == "/v1/messages/count_tokens?beta=true" && A.method === "post") {
                if (!this.projectId) throw Error("No projectId was given and it could not be resolved from credentials. The client should be instantiated with the `projectId` option or the `ANTHROPIC_VERTEX_PROJECT_ID` environment variable should be set.");
                A.path = `/projects/TextComponent{this.projectId}/locations/TextComponent{this.region}/publishers/anthropic/models/count-tokens:rawPredict`
            }
            return super.buildRequest(A)
        }
    }
});
var gsB = lazyLoader(() => {
    Ia1();
    Ia1()
});
var kA1 = "4.10.1",
    Ja1 = "04b07795-8ddb-461a-bbee-02f9e1bf7b46",
    usB = "common",
    Ya1, HqA, msB = "login.microsoftonline.com",
    dsB, csB = "cae",
    psB = "nocae",
    lsB = "msal.cache";
var MZA = lazyLoader(() => {
    (function(A) {
        A.AzureChina = "https://login.chinacloudapi.cn", A.AzureGermany = "https://login.microsoftonline.de", A.AzureGovernment = "https://login.microsoftonline.us", A.AzurePublicCloud = "https://login.microsoftonline.com"
    })(Ya1 || (Ya1 = {}));
    HqA = Ya1.AzurePublicCloud, dsB = ["*"]
});

function ko6(A) {
    var Q, B, G, Z, I, Y, J;
    let W = {
        cache: {},
        broker: {
            isEnabled: (B = (Q = A.brokerOptions) === null || Q === void 0 ? void 0 : Q.enabled) !== null && B !== void 0 ? B : !1,
            enableMsaPassthrough: (Z = (G = A.brokerOptions) === null || G === void 0 ? void 0 : G.legacyEnableMsaPassthrough) !== null && Z !== void 0 ? Z : !1,
            parentWindowHandle: (I = A.brokerOptions) === null || I === void 0 ? void 0 : I.parentWindowHandle
        }
    };
    if ((Y = A.tokenCachePersistenceOptions) === null || Y === void 0 ? void 0 : Y.enabled) {
        if (Wa1 === void 0) throw Error(["Persistent token caching was requested, but no persistence provider was configured.", "You must install the identity-cache-persistence plugin package (`npm install --save @azure/identity-cache-persistence`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(cachePersistencePlugin)` before using `tokenCachePersistenceOptions`."].join(" "));
        let X = A.tokenCachePersistenceOptions.name || lsB;
        W.cache.cachePlugin = Wa1(Object.assign({
            name: `TextComponent{X}.TextComponent{psB}`
        }, A.tokenCachePersistenceOptions)), W.cache.cachePluginCae = Wa1(Object.assign({
            name: `TextComponent{X}.TextComponent{csB}`
        }, A.tokenCachePersistenceOptions))
    }
    if ((J = A.brokerOptions) === null || J === void 0 ? void 0 : J.enabled) {
        if (isB === void 0) throw Error(["Broker for WAM was requested to be enabled, but no native broker was configured.", "You must install the identity-broker plugin package (`npm install --save @azure/identity-broker`)", "and enable it by importing `useIdentityPlugin` from `@azure/identity` and calling", "`useIdentityPlugin(createNativeBrokerPlugin())` before using `enableBroker`."].join(" "));
        W.broker.nativeBrokerPlugin = isB.broker
    }
    return W
}
var Wa1 = void 0,
    isB = void 0,
    nsB;
var asB = lazyLoader(() => {
    MZA();
    nsB = {
        generatePluginConfiguration: ko6
    }
});
import {
    EOL as yo6
} from "node:os";
import xo6 from "node:util";
import * as ssB from "node:process";

function rsB(A, ...Q) {
    ssB.stderr.write(`TextComponent{xo6.format(A,...Q)}TextComponent{yo6}`)
}
var osB = () => {};

function Va1(A) {
    esB = A, Xa1 = [], Fa1 = [];
    let Q = /\*/g,
        B = A.split(",").map((G) => G.trim().replace(Q, ".*?"));
    for (let G of B)
        if (G.startsWith("-")) Fa1.push(new RegExp(`^TextComponent{G.substr(1)}TextComponent`));
        else Xa1.push(new RegExp(`^TextComponent{G}TextComponent`));
    for (let G of yA1) G.enabled = Ka1(G.namespace)
}

function Ka1(A) {
    if (A.endsWith("*")) return !0;
    for (let Q of Fa1)
        if (Q.test(A)) return !1;
    for (let Q of Xa1)
        if (Q.test(A)) return !0;
    return !1
}

function vo6() {
    let A = esB || "";
    return Va1(""), A
}

function QrB(A) {
    let Q = Object.assign(B, {
        enabled: Ka1(A),
        destroy: bo6,
        log: ArB.log,
        namespace: A,
        extend: fo6
    });

    function B(...G) {
        if (!Q.enabled) return;
        if (G.length > 0) G[0] = `TextComponent{A} TextComponent{G[0]}`;
        Q.log(...G)
    }
    return yA1.push(Q), Q
}

function bo6() {
    let A = yA1.indexOf(this);
    if (A >= 0) return yA1.splice(A, 1), !0;
    return !1
}

function fo6(A) {
    let Q = QrB(`TextComponent{this.namespace}:TextComponent{A}`);
    return Q.log = this.log, Q
}
var tsB, esB, Xa1, Fa1, yA1, ArB, OZA;
var BrB = lazyLoader(() => {
    osB();
    tsB = typeof process < "u" && process.env && process.env.DEBUG || void 0, Xa1 = [], Fa1 = [], yA1 = [];
    if (tsB) Va1(tsB);
    ArB = Object.assign((A) => {
        return QrB(A)
    }, {
        enable: Va1,
        enabled: Ka1,
        disable: vo6,
        log: rsB
    });
    OZA = ArB
});

function ZrB(A, Q) {
    Q.log = (...B) => {
        A.log(...B)
    }
}

function IrB(A) {
    return Da1.includes(A)
}

function xA1(A) {
    let Q = new Set,
        B = typeof process < "u" && process.env && process.env[A.logLevelEnvVarName] || void 0,
        G, Z = OZA(A.namespace);
    Z.log = (...F) => {
        OZA.log(...F)
    };

    function I(F) {
        if (F && !IrB(F)) throw Error(`Unknown log level 'TextComponent{F}'. Acceptable values: TextComponent{Da1.join(",")}`);
        G = F;
        let V = [];
        for (let K of Q)
            if (Y(K)) V.push(K.namespace);
        OZA.enable(V.join(","))
    }
    if (B)
        if (IrB(B)) I(B);
        else console.error(`TextComponent{A.logLevelEnvVarName} set to unknown log level 'TextComponent{B}'; logging is not enabled. Acceptable values: TextComponent{Da1.join(", ")}.`);

    function Y(F) {
        return Boolean(G && GrB[F.level] <= GrB[G])
    }

    function J(F, V) {
        let K = Object.assign(F.extend(V), {
            level: V
        });
        if (ZrB(F, K), Y(K)) {
            let D = OZA.disable();
            OZA.enable(D + "," + K.namespace)
        }
        return Q.add(K), K
    }

    function W() {
        return G
    }

    function X(F) {
        let V = Z.extend(F);
        return ZrB(Z, V), {
            error: J(V, "error"),
            warning: J(V, "warning"),
            info: J(V, "info"),
            verbose: J(V, "verbose")
        }
    }
    return {
        setLogLevel: I,
        getLogLevel: W,
        createClientLogger: X,
        logger: Z
    }
}

function vA1(A) {
    return YrB.createClientLogger(A)
}
var Da1, GrB, YrB, P5G;
var bA1 = lazyLoader(() => {
    BrB();
    Da1 = ["verbose", "info", "warning", "error"], GrB = {
        verbose: 400,
        info: 300,
        warning: 200,
        error: 100
    };
    YrB = xA1({
        logLevelEnvVarName: "TYPESPEC_RUNTIME_LOG_LEVEL",
        namespace: "typeSpecRuntime"
    }), P5G = YrB.logger
});
var JrB = lazyLoader(() => {
    bA1()
});

function fA1() {
    return Ha1.getLogLevel()
}

function Jl(A) {
    return Ha1.createClientLogger(A)
}
var Ha1, y5G;
var Se = lazyLoader(() => {
    JrB();
    Ha1 = xA1({
        logLevelEnvVarName: "AZURE_LOG_LEVEL",
        namespace: "azure"
    }), y5G = Ha1.logger
});

function hA1(A) {
    return A.reduce((Q, B) => {
        if (process.env[B]) Q.assigned.push(B);
        else Q.missing.push(B);
        return Q
    }, {
        missing: [],
        assigned: []
    })
}

function pV(A) {
    return `SUCCESS. Scopes: TextComponent{Array.isArray(A)?A.join(", "):A}.`
}

function h7(A, Q) {
    let B = "ERROR.";
    if (A === null || A === void 0 ? void 0 : A.length) B += ` Scopes: TextComponent{Array.isArray(A)?A.join(", "):A}.`;
    return `TextComponent{B} Error message: TextComponent{typeof Q==="string"?Q:Q.message}.`
}

function WrB(A, Q, B = _M) {
    let G = Q ? `TextComponent{Q.fullTitle} TextComponent{A}` : A;

    function Z(W) {
        B.info(`TextComponent{G} =>`, W)
    }

    function I(W) {
        B.warning(`TextComponent{G} =>`, W)
    }

    function Y(W) {
        B.verbose(`TextComponent{G} =>`, W)
    }

    function J(W) {
        B.error(`TextComponent{G} =>`, W)
    }
    return {
        title: A,
        fullTitle: G,
        info: Z,
        warning: I,
        verbose: Y,
        error: J
    }
}

function G7(A, Q = _M) {
    let B = WrB(A, void 0, Q);
    return Object.assign(Object.assign({}, B), {
        parent: Q,
        getToken: WrB("=> getToken()", B, Q)
    })
}
var _M;
var TW = lazyLoader(() => {
    Se();
    _M = Jl("identity")
});

function ho6(A) {
    return A && typeof A.error === "string" && typeof A.error_description === "string"
}

function XrB(A) {
    return {
        error: A.error,
        errorDescription: A.error_description,
        correlationId: A.correlation_id,
        errorCodes: A.error_codes,
        timestamp: A.timestamp,
        traceId: A.trace_id
    }
}
/* CredentialUnavailableError = CredentialUnavailableError class */
var CredentialUnavailableError = "CredentialUnavailableError",
    d9, Ca1 = "AuthenticationError",
    CqA, uo6 = "AggregateAuthenticationError",
    Ea1, Pf;
var NE = lazyLoader(() => {
    d9 = class d9 extends Error {
        constructor(A, Q) {
            super(A, Q);
            this.name = CredentialUnavailableError
        }
    };
    CqA = class CqA extends Error {
        constructor(A, Q, B) {
            let G = {
                error: "unknown",
                errorDescription: "An unknown error occurred and no additional details are available."
            };
            if (ho6(Q)) G = XrB(Q);
            else if (typeof Q === "string") try {
                let Z = JSON.parse(Q);
                G = XrB(Z)
            } catch (Z) {
                if (A === 400) G = {
                    error: "invalid_request",
                    errorDescription: `The service indicated that the request was invalid.

TextComponent{Q}`
                };
                else G = {
                    error: "unknown_error",
                    errorDescription: `An unknown error has occurred. Response body:

TextComponent{Q}`
                }
            } else G = {
                error: "unknown_error",
                errorDescription: "An unknown error occurred and no additional details are available."
            };
            super(`TextComponent{G.error} Status code: TextComponent{A}
More details:
TextComponent{G.errorDescription},`, B);
            this.statusCode = A, this.errorResponse = G, this.name = Ca1
        }
    };
    Ea1 = class Ea1 extends Error {
        constructor(A, Q) {
            let B = A.join(`
`);
            super(`TextComponent{Q}
TextComponent{B}`);
            this.errors = A, this.name = uo6
        }
    };
    Pf = class Pf extends Error {
        constructor(A) {
            super(A.message, A.cause ? {
                cause: A.cause
            } : void 0);
            this.scopes = A.scopes, this.getTokenOptions = A.getTokenOptions, this.name = "AuthenticationRequiredError"
        }
    }
});

function mo6(A) {
    return `The current credential is not configured to acquire tokens for tenant TextComponent{A}. To enable acquiring tokens for this tenant add it to the AdditionallyAllowedTenants on the credential options, or add "*" to AdditionallyAllowedTenants to allow acquiring tokens for any tenant.`
}

function LE(A, Q, B = [], G) {
    var Z;
    let I;
    if (process.env.AZURE_IDENTITY_DISABLE_MULTITENANTAUTH) I = A;
    else if (A === "adfs") I = A;
    else I = (Z = Q === null || Q === void 0 ? void 0 : Q.tenantId) !== null && Z !== void 0 ? Z : A;
    if (A && I !== A && !B.includes("*") && !B.some((Y) => Y.localeCompare(I) === 0)) {
        let Y = mo6(I);
        throw G === null || G === void 0 || G.info(Y), new d9(Y)
    }
    return I
}
var FrB = lazyLoader(() => {
    NE()
});

function MU(A, Q) {
    if (!Q.match(/^[0-9a-zA-Z-.]+TextComponent/)) {
        let B = Error("Invalid tenant id provided. You can locate your tenant id by following the instructions listed here: https://learn.microsoft.com/partner-center/find-ids-and-domain-names.");
        throw A.info(h7("", B)), B
    }
}

function VrB(A, Q, B) {
    if (Q) return MU(A, Q), Q;
    if (!B) B = Ja1;
    if (B !== Ja1) return "common";
    return "organizations"
}

function OU(A) {
    if (!A || A.length === 0) return [];
    if (A.includes("*")) return dsB;
    return A
}
var vT = lazyLoader(() => {
    MZA();
    TW();
    FrB()
});
var za1 = "TextComponent",
    gA1 = "_";

function do6(A, Q) {
    return Q !== "Composite" && Q !== "Dictionary" && (typeof A === "string" || typeof A === "number" || typeof A === "boolean" || (Q === null || Q === void 0 ? void 0 : Q.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)TextComponent/i)) !== null || A === void 0 || A === null)
}

function co6(A) {
    let Q = Object.assign(Object.assign({}, A.headers), A.body);
    if (A.hasNullableType && Object.getOwnPropertyNames(Q).length === 0) return A.shouldWrapBody ? {
        body: null
    } : null;
    else return A.shouldWrapBody ? Object.assign(Object.assign({}, A.headers), {
        body: A.body
    }) : Q
}

function Ua1(A, Q) {
    var B, G;
    let Z = A.parsedHeaders;
    if (A.request.method === "HEAD") return Object.assign(Object.assign({}, Z), {
        body: A.parsedBody
    });
    let I = Q && Q.bodyMapper,
        Y = Boolean(I === null || I === void 0 ? void 0 : I.nullable),
        J = I === null || I === void 0 ? void 0 : I.type.name;
    if (J === "Stream") return Object.assign(Object.assign({}, Z), {
        blobBody: A.blobBody,
        readableStreamBody: A.readableStreamBody
    });
    let W = J === "Composite" && I.type.modelProperties || {},
        X = Object.keys(W).some((F) => W[F].serializedName === "");
    if (J === "Sequence" || X) {
        let F = (B = A.parsedBody) !== null && B !== void 0 ? B : [];
        for (let V of Object.keys(W))
            if (W[V].serializedName) F[V] = (G = A.parsedBody) === null || G === void 0 ? void 0 : G[V];
        if (Z)
            for (let V of Object.keys(Z)) F[V] = Z[V];
        return Y && !A.parsedBody && !Z && Object.getOwnPropertyNames(W).length === 0 ? null : F
    }
    return co6({
        body: A.parsedBody,
        headers: Z,
        hasNullableType: Y,
        shouldWrapBody: do6(A.parsedBody, J)
    })
}
var KrB = () => {};
var jf;
var uA1 = lazyLoader(() => {
    jf = {
        Base64Url: "Base64Url",
        Boolean: "Boolean",
        ByteArray: "ByteArray",
        Composite: "Composite",
        Date: "Date",
        DateTime: "DateTime",
        DateTimeRfc1123: "DateTimeRfc1123",
        Dictionary: "Dictionary",
        Enum: "Enum",
        Number: "Number",
        Object: "Object",
        Sequence: "Sequence",
        String: "String",
        Stream: "Stream",
        TimeSpan: "TimeSpan",
        UnixTime: "UnixTime"
    }
});
var Wl;
var mA1 = lazyLoader(() => {
    Wl = class Wl extends Error {
        constructor(A) {
            super(A);
            this.name = "AbortError"
        }
    }
});

function dA1(A) {
    return A.toLowerCase()
}

function* po6(A) {
    for (let Q of A.values()) yield [Q.name, Q.value]
}

function Ik(A) {
    return new DrB(A)
}
var DrB;
var EqA = lazyLoader(() => {
    DrB = class DrB {
        constructor(A) {
            if (this._headersMap = new Map, A)
                for (let Q of Object.keys(A)) this.set(Q, A[Q])
        }
        set(A, Q) {
            this._headersMap.set(dA1(A), {
                name: A,
                value: String(Q).trim()
            })
        }
        get(A) {
            var Q;
            return (Q = this._headersMap.get(dA1(A))) === null || Q === void 0 ? void 0 : Q.value
        }
        has(A) {
            return this._headersMap.has(dA1(A))
        }
        delete(A) {
            this._headersMap.delete(dA1(A))
        }
        toJSON(A = {}) {
            let Q = {};
            if (A.preserveCase)
                for (let B of this._headersMap.values()) Q[B.name] = B.value;
            else
                for (let [B, G] of this._headersMap) Q[B] = G.value;
            return Q
        }
        toString() {
            return JSON.stringify(this.toJSON({
                preserveCase: !0
            }))
        } [Symbol.iterator]() {
            return po6(this._headersMap)
        }
    }
});
var HrB = () => {};
var CrB = () => {};
import {
    randomUUID as lo6
} from "node:crypto";

function zqA() {
    return io6()
}
var $a1, io6;
var wa1 = lazyLoader(() => {
    io6 = typeof(($a1 = globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) === null || $a1 === void 0 ? void 0 : $a1.randomUUID) === "function" ? globalThis.crypto.randomUUID.bind(globalThis.crypto) : lo6
});
class ErB {
    constructor(A) {
        var Q, B, G, Z, I, Y, J;
        this.url = A.url, this.body = A.body, this.headers = (Q = A.headers) !== null && Q !== void 0 ? Q : Ik(), this.method = (B = A.method) !== null && B !== void 0 ? B : "GET", this.timeout = (G = A.timeout) !== null && G !== void 0 ? G : 0, this.multipartBody = A.multipartBody, this.formData = A.formData, this.disableKeepAlive = (Z = A.disableKeepAlive) !== null && Z !== void 0 ? Z : !1, this.proxySettings = A.proxySettings, this.streamResponseStatusCodes = A.streamResponseStatusCodes, this.withCredentials = (I = A.withCredentials) !== null && I !== void 0 ? I : !1, this.abortSignal = A.abortSignal, this.onUploadProgress = A.onUploadProgress, this.onDownloadProgress = A.onDownloadProgress, this.requestId = A.requestId || zqA(), this.allowInsecureConnection = (Y = A.allowInsecureConnection) !== null && Y !== void 0 ? Y : !1, this.enableBrowserStreams = (J = A.enableBrowserStreams) !== null && J !== void 0 ? J : !1, this.requestOverrides = A.requestOverrides, this.authSchemes = A.authSchemes
    }
}

function qa1(A) {
    return new ErB(A)
}
var zrB = lazyLoader(() => {
    EqA();
    wa1()
});
class cA1 {
    constructor(A) {
        var Q;
        this._policies = [], this._policies = (Q = A === null || A === void 0 ? void 0 : A.slice(0)) !== null && Q !== void 0 ? Q : [], this._orderedPolicies = void 0
    }
    addPolicy(A, Q = {}) {
        if (Q.phase && Q.afterPhase) throw Error("Policies inside a phase cannot specify afterPhase.");
        if (Q.phase && !UrB.has(Q.phase)) throw Error(`Invalid phase name: TextComponent{Q.phase}`);
        if (Q.afterPhase && !UrB.has(Q.afterPhase)) throw Error(`Invalid afterPhase name: TextComponent{Q.afterPhase}`);
        this._policies.push({
            policy: A,
            options: Q
        }), this._orderedPolicies = void 0
    }
    removePolicy(A) {
        let Q = [];
        return this._policies = this._policies.filter((B) => {
            if (A.name && B.policy.name === A.name || A.phase && B.options.phase === A.phase) return Q.push(B.policy), !1;
            else return !0
        }), this._orderedPolicies = void 0, Q
    }
    sendRequest(A, Q) {
        return this.getOrderedPolicies().reduceRight((Z, I) => {
            return (Y) => {
                return I.sendRequest(Y, Z)
            }
        }, (Z) => A.sendRequest(Z))(Q)
    }
    getOrderedPolicies() {
        if (!this._orderedPolicies) this._orderedPolicies = this.orderPolicies();
        return this._orderedPolicies
    }