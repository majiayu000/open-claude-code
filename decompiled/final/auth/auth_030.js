/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_030.js
 * 处理时间: 2025-12-09T03:41:36.671Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  1x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 30/61
 * Lines: 125375 - 126870 (1496 lines)
 * Original file: cli.js
 */

            constructor(Q) {
                super({
                    name: "InvalidRequestException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        opQ = class A extends Lw {
            static {
                L6(this, "InvalidScopeException")
            }
            name = "InvalidScopeException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InvalidScopeException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        tpQ = class A extends Lw {
            static {
                L6(this, "SlowDownException")
            }
            name = "SlowDownException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "SlowDownException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        epQ = class A extends Lw {
            static {
                L6(this, "UnauthorizedClientException")
            }
            name = "UnauthorizedClientException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "UnauthorizedClientException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        AlQ = class A extends Lw {
            static {
                L6(this, "UnsupportedGrantTypeException")
            }
            name = "UnsupportedGrantTypeException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "UnsupportedGrantTypeException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        CS1 = OV(),
        YT8 = nB(),
        Z2 = UJ(),
        JT8 = L6(async (A, Q) => {
            let B = (0, YT8.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/token");
            let Z;
            return Z = JSON.stringify((0, Z2.take)(A, {
                clientId: [],
                clientSecret: [],
                code: [],
                codeVerifier: [],
                deviceCode: [],
                grantType: [],
                redirectUri: [],
                refreshToken: [],
                scope: L6((I) => (0, Z2._json)(I), "scope")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateTokenCommand"),
        WT8 = L6(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return XT8(A, Q);
            let B = (0, Z2.map)({
                    $metadata: bL(A)
                }),
                G = (0, Z2.expectNonNull)((0, Z2.expectObject)(await (0, CS1.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, Z2.take)(G, {
                    accessToken: Z2.expectString,
                    expiresIn: Z2.expectInt32,
                    idToken: Z2.expectString,
                    refreshToken: Z2.expectString,
                    tokenType: Z2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateTokenCommand"),
        XT8 = L6(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, CS1.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, CS1.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "AccessDeniedException":
                case "com.amazonaws.ssooidc#AccessDeniedException":
                    throw await VT8(B, Q);
                case "AuthorizationPendingException":
                case "com.amazonaws.ssooidc#AuthorizationPendingException":
                    throw await KT8(B, Q);
                case "ExpiredTokenException":
                case "com.amazonaws.ssooidc#ExpiredTokenException":
                    throw await DT8(B, Q);
                case "InternalServerException":
                case "com.amazonaws.ssooidc#InternalServerException":
                    throw await HT8(B, Q);
                case "InvalidClientException":
                case "com.amazonaws.ssooidc#InvalidClientException":
                    throw await CT8(B, Q);
                case "InvalidGrantException":
                case "com.amazonaws.ssooidc#InvalidGrantException":
                    throw await ET8(B, Q);
                case "InvalidRequestException":
                case "com.amazonaws.ssooidc#InvalidRequestException":
                    throw await zT8(B, Q);
                case "InvalidScopeException":
                case "com.amazonaws.ssooidc#InvalidScopeException":
                    throw await UT8(B, Q);
                case "SlowDownException":
                case "com.amazonaws.ssooidc#SlowDownException":
                    throw await $T8(B, Q);
                case "UnauthorizedClientException":
                case "com.amazonaws.ssooidc#UnauthorizedClientException":
                    throw await wT8(B, Q);
                case "UnsupportedGrantTypeException":
                case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
                    throw await qT8(B, Q);
                default:
                    let Z = B.body;
                    return FT8({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        FT8 = (0, Z2.withBaseException)(Lw),
        VT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new dpQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_AccessDeniedExceptionRes"),
        KT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new cpQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_AuthorizationPendingExceptionRes"),
        DT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new ipQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_ExpiredTokenExceptionRes"),
        HT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new npQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_InternalServerExceptionRes"),
        CT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new apQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_InvalidClientExceptionRes"),
        ET8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new spQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_InvalidGrantExceptionRes"),
        zT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new rpQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        UT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new opQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_InvalidScopeExceptionRes"),
        $T8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new tpQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_SlowDownExceptionRes"),
        wT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new epQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedClientExceptionRes"),
        qT8 = L6(async (A, Q) => {
            let B = (0, Z2.map)({}),
                G = A.body,
                Z = (0, Z2.take)(G, {
                    error: Z2.expectString,
                    error_description: Z2.expectString
                });
            Object.assign(B, Z);
            let I = new AlQ({
                $metadata: bL(A),
                ...B
            });
            return (0, Z2.decorateServiceException)(I, A.body)
        }, "de_UnsupportedGrantTypeExceptionRes"),
        bL = L6((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        QlQ = class extends mpQ.Command.classBuilder().ep(oR8).m(function(A, Q, B, G) {
            return [(0, ZT8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, GT8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(ppQ, lpQ).ser(JT8).de(WT8).build() {
            static {
                L6(this, "CreateTokenCommand")
            }
        },
        NT8 = {
            CreateTokenCommand: QlQ
        },
        BlQ = class extends upQ {
            static {
                L6(this, "SSOOIDC")
            }
        };
    (0, BT8.createAggregatedClient)(NT8, BlQ)
});
var VlQ = U((Gq7, FlQ) => {
    var {
        create: LT8,
        defineProperty: TCA,
        getOwnPropertyDescriptor: MT8,
        getOwnPropertyNames: OT8,
        getPrototypeOf: RT8
    } = Object, TT8 = Object.prototype.hasOwnProperty, md = (A, Q) => TCA(A, "name", {
        value: Q,
        configurable: !0
    }), PT8 = (A, Q) => {
        for (var B in Q) TCA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, YlQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of OT8(Q))
                if (!TT8.call(A, Z) && Z !== B) TCA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = MT8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, JlQ = (A, Q, B) => (B = A != null ? LT8(RT8(A)) : {}, YlQ(Q || !A || !A.__esModule ? TCA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), jT8 = (A) => YlQ(TCA({}, "__esModule", {
        value: !0
    }), A), WlQ = {};
    PT8(WlQ, {
        fromSso: () => XlQ,
        fromStatic: () => bT8,
        nodeProvider: () => fT8
    });
    FlQ.exports = jT8(WlQ);
    var ST8 = 300000,
        zS1 = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
        _T8 = md(async (A, Q = {}) => {
            let {
                SSOOIDCClient: B
            } = await Promise.resolve().then(() => JlQ(ES1()));
            return new B(Object.assign({}, Q.clientConfig ?? {}, {
                region: A ?? Q.clientConfig?.region,
                logger: Q.clientConfig?.logger ?? Q.parentClientConfig?.logger
            }))
        }, "getSsoOidcClient"),
        kT8 = md(async (A, Q, B = {}) => {
            let {
                CreateTokenCommand: G
            } = await Promise.resolve().then(() => JlQ(ES1()));
            return (await _T8(Q, B)).send(new G({
                clientId: A.clientId,
                clientSecret: A.clientSecret,
                refreshToken: A.refreshToken,
                grantType: "refresh_token"
            }))
        }, "getNewSsoOidcToken"),
        mR = P2(),
        ZlQ = md((A) => {
            if (A.expiration && A.expiration.getTime() < Date.now()) throw new mR.TokenProviderError(`Token is expired. ${zS1}`, !1)
        }, "validateTokenExpiry"),
        Wo = md((A, Q, B = !1) => {
            if (typeof Q > "u") throw new mR.TokenProviderError(`Value not present for '${A}' in SSO Token${B?". Cannot refresh":""}. ${zS1}`, !1)
        }, "validateTokenKey"),
        RCA = NG(),
        yT8 = UA("fs"),
        {
            writeFile: xT8
        } = yT8.promises,
        vT8 = md((A, Q) => {
            let B = (0, RCA.getSSOTokenFilepath)(A),
                G = JSON.stringify(Q, null, 2);
            return xT8(B, G)
        }, "writeSSOTokenToFile"),
        IlQ = new Date(0),
        XlQ = md((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            let B = {
                ...A,
                parentClientConfig: {
                    ...Q,
                    ...A.parentClientConfig
                }
            };
            B.logger?.debug("@aws-sdk/token-providers - fromSso");
            let G = await (0, RCA.parseKnownFiles)(B),
                Z = (0, RCA.getProfileName)({
                    profile: B.profile ?? Q?.profile
                }),
                I = G[Z];
            if (!I) throw new mR.TokenProviderError(`Profile '${Z}' could not be found in shared credentials file.`, !1);
            else if (!I.sso_session) throw new mR.TokenProviderError(`Profile '${Z}' is missing required property 'sso_session'.`);
            let Y = I.sso_session,
                W = (await (0, RCA.loadSsoSessionData)(B))[Y];
            if (!W) throw new mR.TokenProviderError(`Sso session '${Y}' could not be found in shared credentials file.`, !1);
            for (let C of ["sso_start_url", "sso_region"])
                if (!W[C]) throw new mR.TokenProviderError(`Sso session '${Y}' is missing required property '${C}'.`, !1);
            let {
                sso_start_url: X,
                sso_region: F
            } = W, V;
            try {
                V = await (0, RCA.getSSOTokenFromFile)(Y)
            } catch (C) {
                throw new mR.TokenProviderError(`The SSO session token associated with profile=${Z} was not found or is invalid. ${zS1}`, !1)
            }
            Wo("accessToken", V.accessToken), Wo("expiresAt", V.expiresAt);
            let {
                accessToken: K,
                expiresAt: D
            } = V, H = {
                token: K,
                expiration: new Date(D)
            };
            if (H.expiration.getTime() - Date.now() > ST8) return H;
            if (Date.now() - IlQ.getTime() < 30000) return ZlQ(H), H;
            Wo("clientId", V.clientId, !0), Wo("clientSecret", V.clientSecret, !0), Wo("refreshToken", V.refreshToken, !0);
            try {
                IlQ.setTime(Date.now());
                let C = await kT8(V, F, B);
                Wo("accessToken", C.accessToken), Wo("expiresIn", C.expiresIn);
                let E = new Date(Date.now() + C.expiresIn * 1000);
                try {
                    await vT8(Y, {
                        ...V,
                        accessToken: C.accessToken,
                        expiresAt: E.toISOString(),
                        refreshToken: C.refreshToken
                    })
                } catch (z) {}
                return {
                    token: C.accessToken,
                    expiration: E
                }
            } catch (C) {
                return ZlQ(H), H
            }
        }, "fromSso"),
        bT8 = md(({
            token: A,
            logger: Q
        }) => async () => {
            if (Q?.debug("@aws-sdk/token-providers - fromStatic"), !A || !A.token) throw new mR.TokenProviderError("Please pass a valid token to fromStatic", !1);
            return A
        }, "fromStatic"),
        fT8 = md((A = {}) => (0, mR.memoize)((0, mR.chain)(XlQ(A), async () => {
            throw new mR.TokenProviderError("Could not load token from any providers", !1)
        }), (Q) => Q.expiration !== void 0 && Q.expiration.getTime() - Date.now() < 300000, (Q) => Q.expiration !== void 0), "nodeProvider")
});
var $S1 = U((Zq7, wlQ) => {
    var {
        defineProperty: McA,
        getOwnPropertyDescriptor: hT8,
        getOwnPropertyNames: HlQ
    } = Object, gT8 = Object.prototype.hasOwnProperty, OcA = (A, Q) => McA(A, "name", {
        value: Q,
        configurable: !0
    }), uT8 = (A, Q) => function() {
        return A && (Q = (0, A[HlQ(A)[0]])(A = 0)), Q
    }, ClQ = (A, Q) => {
        for (var B in Q) McA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, mT8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of HlQ(Q))
                if (!gT8.call(A, Z) && Z !== B) McA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = hT8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, dT8 = (A) => mT8(McA({}, "__esModule", {
        value: !0
    }), A), ElQ = {};
    ClQ(ElQ, {
        GetRoleCredentialsCommand: () => US1.GetRoleCredentialsCommand,
        SSOClient: () => US1.SSOClient
    });
    var US1, cT8 = uT8({
            "src/loadSso.ts"() {
                US1 = fdQ()
            }
        }),
        zlQ = {};
    ClQ(zlQ, {
        fromSSO: () => lT8,
        isSsoProfile: () => UlQ,
        validateSsoProfile: () => $lQ
    });
    wlQ.exports = dT8(zlQ);
    var UlQ = OcA((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        KlQ = xS(),
        pT8 = VlQ(),
        dR = P2(),
        LcA = NG(),
        PCA = !1,
        DlQ = OcA(async ({
            ssoStartUrl: A,
            ssoSession: Q,
            ssoAccountId: B,
            ssoRegion: G,
            ssoRoleName: Z,
            ssoClient: I,
            clientConfig: Y,
            parentClientConfig: J,
            profile: W,
            logger: X
        }) => {
            let F, V = "To refresh this SSO session run aws sso login with the corresponding profile.";
            if (Q) try {
                let v = await (0, pT8.fromSso)({
                    profile: W
                })();
                F = {
                    accessToken: v.token,
                    expiresAt: new Date(v.expiration).toISOString()
                }
            } catch (v) {
                throw new dR.CredentialsProviderError(v.message, {
                    tryNextLink: PCA,
                    logger: X
                })
            } else try {
                F = await (0, LcA.getSSOTokenFromFile)(A)
            } catch (v) {
                throw new dR.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
                    tryNextLink: PCA,
                    logger: X
                })
            }
            if (new Date(F.expiresAt).getTime() - Date.now() <= 0) throw new dR.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
                tryNextLink: PCA,
                logger: X
            });
            let {
                accessToken: K
            } = F, {
                SSOClient: D,
                GetRoleCredentialsCommand: H
            } = await Promise.resolve().then(() => (cT8(), ElQ)), C = I || new D(Object.assign({}, Y ?? {}, {
                logger: Y?.logger ?? J?.logger,
                region: Y?.region ?? G
            })), E;
            try {
                E = await C.send(new H({
                    accountId: B,
                    roleName: Z,
                    accessToken: K
                }))
            } catch (v) {
                throw new dR.CredentialsProviderError(v, {
                    tryNextLink: PCA,
                    logger: X
                })
            }
            let {
                roleCredentials: {
                    accessKeyId: z,
                    secretAccessKey: w,
                    sessionToken: N,
                    expiration: q,
                    credentialScope: R,
                    accountId: P
                } = {}
            } = E;
            if (!z || !w || !N || !q) throw new dR.CredentialsProviderError("SSO returns an invalid temporary credential.", {
                tryNextLink: PCA,
                logger: X
            });
            let y = {
                accessKeyId: z,
                secretAccessKey: w,
                sessionToken: N,
                expiration: new Date(q),
                ...R && {
                    credentialScope: R
                },
                ...P && {
                    accountId: P
                }
            };
            if (Q)(0, KlQ.setCredentialFeature)(y, "CREDENTIALS_SSO", "s");
            else(0, KlQ.setCredentialFeature)(y, "CREDENTIALS_SSO_LEGACY", "u");
            return y
        }, "resolveSSOCredentials"),
        $lQ = OcA((A, Q) => {
            let {
                sso_start_url: B,
                sso_account_id: G,
                sso_region: Z,
                sso_role_name: I
            } = A;
            if (!B || !G || !Z || !I) throw new dR.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(A).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
                tryNextLink: !1,
                logger: Q
            });
            return A
        }, "validateSsoProfile"),
        lT8 = OcA((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
            let {
                ssoStartUrl: B,
                ssoAccountId: G,
                ssoRegion: Z,
                ssoRoleName: I,
                ssoSession: Y
            } = A, {
                ssoClient: J
            } = A, W = (0, LcA.getProfileName)({
                profile: A.profile ?? Q?.profile
            });
            if (!B && !G && !Z && !I && !Y) {
                let F = (await (0, LcA.parseKnownFiles)(A))[W];
                if (!F) throw new dR.CredentialsProviderError(`Profile ${W} was not found.`, {
                    logger: A.logger
                });
                if (!UlQ(F)) throw new dR.CredentialsProviderError(`Profile ${W} is not configured with SSO credentials.`, {
                    logger: A.logger
                });
                if (F?.sso_session) {
                    let z = (await (0, LcA.loadSsoSessionData)(A))[F.sso_session],
                        w = ` configurations in profile ${W} and sso-session ${F.sso_session}`;
                    if (Z && Z !== z.sso_region) throw new dR.CredentialsProviderError("Conflicting SSO region" + w, {
                        tryNextLink: !1,
                        logger: A.logger
                    });
                    if (B && B !== z.sso_start_url) throw new dR.CredentialsProviderError("Conflicting SSO start_url" + w, {
                        tryNextLink: !1,
                        logger: A.logger
                    });
                    F.sso_region = z.sso_region, F.sso_start_url = z.sso_start_url
                }
                let {
                    sso_start_url: V,
                    sso_account_id: K,
                    sso_region: D,
                    sso_role_name: H,
                    sso_session: C
                } = $lQ(F, A.logger);
                return DlQ({
                    ssoStartUrl: V,
                    ssoSession: C,
                    ssoAccountId: K,
                    ssoRegion: D,
                    ssoRoleName: H,
                    ssoClient: J,
                    clientConfig: A.clientConfig,
                    parentClientConfig: A.parentClientConfig,
                    profile: W
                })
            } else if (!B || !G || !Z || !I) throw new dR.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
                tryNextLink: !1,
                logger: A.logger
            });
            else return DlQ({
                ssoStartUrl: B,
                ssoSession: Y,
                ssoAccountId: G,
                ssoRegion: Z,
                ssoRoleName: I,
                ssoClient: J,
                clientConfig: A.clientConfig,
                parentClientConfig: A.parentClientConfig,
                profile: W
            })
        }, "fromSSO")
});
var qS1 = U((qlQ) => {
    Object.defineProperty(qlQ, "__esModule", {
        value: !0
    });
    qlQ.resolveHttpAuthSchemeConfig = qlQ.resolveStsAuthConfig = qlQ.defaultSTSHttpAuthSchemeProvider = qlQ.defaultSTSHttpAuthSchemeParametersProvider = void 0;
    var iT8 = OV(),
        wS1 = K7(),
        nT8 = jCA(),
        aT8 = async (A, Q, B) => {
            return {
                operation: (0, wS1.getSmithyContext)(Q).operation,
                region: await (0, wS1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    qlQ.defaultSTSHttpAuthSchemeParametersProvider = aT8;

    function sT8(A) {
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

    function rT8(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var oT8 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "AssumeRoleWithWebIdentity": {
                Q.push(rT8(A));
                break
            }
            default:
                Q.push(sT8(A))
        }
        return Q
    };
    qlQ.defaultSTSHttpAuthSchemeProvider = oT8;
    var tT8 = (A) => Object.assign(A, {
        stsClientCtor: nT8.STSClient
    });
    qlQ.resolveStsAuthConfig = tT8;
    var eT8 = (A) => {
        let Q = qlQ.resolveStsAuthConfig(A),
            B = (0, iT8.resolveAwsSdkSigV4Config)(Q);
        return Object.assign(B, {
            authSchemePreference: (0, wS1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    qlQ.resolveHttpAuthSchemeConfig = eT8
});
var SCA = U((MlQ) => {
    Object.defineProperty(MlQ, "__esModule", {
        value: !0
    });
    MlQ.commonParams = MlQ.resolveClientEndpointParameters = void 0;
    var BP8 = (A) => {
        return Object.assign(A, {
            useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
            useFipsEndpoint: A.useFipsEndpoint ?? !1,
            useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
            defaultSigningName: "sts"
        })
    };
    MlQ.resolveClientEndpointParameters = BP8;
    MlQ.commonParams = {
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
var slQ = U((nlQ) => {
    Object.defineProperty(nlQ, "__esModule", {
        value: !0
    });
    nlQ.ruleSet = void 0;
    var flQ = "required",
        b8 = "type",
        A7 = "fn",
        Q7 = "argv",
        cd = "ref",
        RlQ = !1,
        NS1 = !0,
        dd = "booleanEquals",
        WD = "stringEquals",
        hlQ = "sigv4",
        glQ = "sts",
        ulQ = "us-east-1",
        lI = "endpoint",
        TlQ = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        mS = "tree",
        Z5A = "error",
        MS1 = "getAttr",
        PlQ = {
            [flQ]: !1,
            [b8]: "String"
        },
        LS1 = {
            [flQ]: !0,
            default: !1,
            [b8]: "Boolean"
        },
        mlQ = {
            [cd]: "Endpoint"
        },
        jlQ = {
            [A7]: "isSet",
            [Q7]: [{
                [cd]: "Region"
            }]
        },
        XD = {
            [cd]: "Region"
        },
        SlQ = {
            [A7]: "aws.partition",
            [Q7]: [XD],
            assign: "PartitionResult"
        },
        dlQ = {
            [cd]: "UseFIPS"
        },
        clQ = {
            [cd]: "UseDualStack"
        },
        OH = {
            url: "https://sts.amazonaws.com",
            properties: {
                authSchemes: [{
                    name: hlQ,
                    signingName: glQ,
                    signingRegion: ulQ
                }]
            },
            headers: {}
        },
        Mw = {},
        _lQ = {
            conditions: [{
                [A7]: WD,
                [Q7]: [XD, "aws-global"]
            }],
            [lI]: OH,
            [b8]: lI
        },
        plQ = {
            [A7]: dd,
            [Q7]: [dlQ, !0]
        },
        llQ = {
            [A7]: dd,
            [Q7]: [clQ, !0]
        },
        klQ = {
            [A7]: MS1,
            [Q7]: [{
                [cd]: "PartitionResult"
            }, "supportsFIPS"]
        },
        ilQ = {
            [cd]: "PartitionResult"
        },
        ylQ = {
            [A7]: dd,
            [Q7]: [!0, {
                [A7]: MS1,
                [Q7]: [ilQ, "supportsDualStack"]
            }]
        },
        xlQ = [{
            [A7]: "isSet",
            [Q7]: [mlQ]
        }],
        vlQ = [plQ],
        blQ = [llQ],
        ZP8 = {
            version: "1.0",
            parameters: {
                Region: PlQ,
                UseDualStack: LS1,
                UseFIPS: LS1,
                Endpoint: PlQ,
                UseGlobalEndpoint: LS1
            },
            rules: [{
                conditions: [{
                    [A7]: dd,
                    [Q7]: [{
                        [cd]: "UseGlobalEndpoint"
                    }, NS1]
                }, {
                    [A7]: "not",
                    [Q7]: xlQ
                }, jlQ, SlQ, {
                    [A7]: dd,
                    [Q7]: [dlQ, RlQ]
                }, {
                    [A7]: dd,
                    [Q7]: [clQ, RlQ]
                }],
                rules: [{
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "ap-northeast-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "ap-south-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "ap-southeast-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "ap-southeast-2"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, _lQ, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "ca-central-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "eu-central-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "eu-north-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "eu-west-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "eu-west-2"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "eu-west-3"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "sa-east-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, ulQ]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "us-east-2"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "us-west-1"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    conditions: [{
                        [A7]: WD,
                        [Q7]: [XD, "us-west-2"]
                    }],
                    endpoint: OH,
                    [b8]: lI
                }, {
                    endpoint: {
                        url: TlQ,
                        properties: {
                            authSchemes: [{
                                name: hlQ,
                                signingName: glQ,
                                signingRegion: "{Region}"
                            }]
                        },
                        headers: Mw
                    },
                    [b8]: lI
                }],
                [b8]: mS
            }, {
                conditions: xlQ,
                rules: [{
                    conditions: vlQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    [b8]: Z5A
                }, {
                    conditions: blQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    [b8]: Z5A
                }, {
                    endpoint: {
                        url: mlQ,
                        properties: Mw,
                        headers: Mw
                    },
                    [b8]: lI
                }],
                [b8]: mS
            }, {
                conditions: [jlQ],
                rules: [{
                    conditions: [SlQ],
                    rules: [{
                        conditions: [plQ, llQ],
                        rules: [{
                            conditions: [{
                                [A7]: dd,
                                [Q7]: [NS1, klQ]
                            }, ylQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Mw,
                                    headers: Mw
                                },
                                [b8]: lI
                            }],
                            [b8]: mS
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            [b8]: Z5A
                        }],
                        [b8]: mS
                    }, {
                        conditions: vlQ,
                        rules: [{
                            conditions: [{
                                [A7]: dd,
                                [Q7]: [klQ, NS1]
                            }],
                            rules: [{
                                conditions: [{
                                    [A7]: WD,
                                    [Q7]: [{
                                        [A7]: MS1,
                                        [Q7]: [ilQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://sts.{Region}.amazonaws.com",
                                    properties: Mw,
                                    headers: Mw
                                },
                                [b8]: lI
                            }, {
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: Mw,
                                    headers: Mw
                                },
                                [b8]: lI
                            }],
                            [b8]: mS
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            [b8]: Z5A
                        }],
                        [b8]: mS
                    }, {
                        conditions: blQ,
                        rules: [{
                            conditions: [ylQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Mw,
                                    headers: Mw
                                },
                                [b8]: lI
                            }],
                            [b8]: mS
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            [b8]: Z5A
                        }],
                        [b8]: mS
                    }, _lQ, {
                        endpoint: {
                            url: TlQ,
                            properties: Mw,
                            headers: Mw
                        },
                        [b8]: lI
                    }],
                    [b8]: mS
                }],
                [b8]: mS
            }, {
                error: "Invalid Configuration: Missing Region",
                [b8]: Z5A
            }]
        };
    nlQ.ruleSet = ZP8
});
var tlQ = U((rlQ) => {
    Object.defineProperty(rlQ, "__esModule", {
        value: !0
    });
    rlQ.defaultEndpointResolver = void 0;
    var IP8 = y6A(),
        OS1 = II(),
        YP8 = slQ(),
        JP8 = new OS1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
        }),
        WP8 = (A, Q = {}) => {
            return JP8.get(A, () => (0, OS1.resolveEndpoint)(YP8.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    rlQ.defaultEndpointResolver = WP8;
    OS1.customEndpointFunctions.aws = IP8.awsEndpointFunctions
});
var GiQ = U((QiQ) => {
    Object.defineProperty(QiQ, "__esModule", {
        value: !0
    });
    QiQ.getRuntimeConfig = void 0;
    var XP8 = OV(),
        FP8 = nB(),
        VP8 = UJ(),
        KP8 = zJ(),
        elQ = FS1(),
        AiQ = L2(),
        DP8 = qS1(),
        HP8 = tlQ(),
        CP8 = (A) => {
            return {
                apiVersion: "2011-06-15",
                base64Decoder: A?.base64Decoder ?? elQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? elQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? HP8.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? DP8.defaultSTSHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new XP8.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new FP8.NoAuthSigner
                }],
                logger: A?.logger ?? new VP8.NoOpLogger,
                serviceId: A?.serviceId ?? "STS",
                urlParser: A?.urlParser ?? KP8.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? AiQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? AiQ.toUtf8
            }
        };
    QiQ.getRuntimeConfig = CP8
});
var FiQ = U((WiQ) => {
    Object.defineProperty(WiQ, "__esModule", {
        value: !0
    });
    WiQ.getRuntimeConfig = void 0;
    var EP8 = YS1(),
        zP8 = EP8.__importDefault(JS1()),
        ZiQ = OV(),
        IiQ = VCA(),
        RcA = S8(),
        UP8 = nB(),
        $P8 = wX(),
        YiQ = X6(),
        I5A = xI(),
        JiQ = oG(),
        wP8 = qX(),
        qP8 = FW(),
        NP8 = GiQ(),
        LP8 = UJ(),
        MP8 = NX(),
        OP8 = UJ(),
        RP8 = (A) => {
            (0, OP8.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, MP8.resolveDefaultsModeConfig)(A),
                B = () => Q().then(LP8.loadConfigsForDefaultMode),
                G = (0, NP8.getRuntimeConfig)(A);
            (0, ZiQ.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                bodyLengthChecker: A?.bodyLengthChecker ?? wP8.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, IiQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: zP8.default.version
                }),
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (I) => I.getIdentityProvider("aws.auth#sigv4") || (async (Y) => await A.credentialDefaultProvider(Y?.__config || {})()),
                    signer: new ZiQ.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (I) => I.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new UP8.NoAuthSigner
                }],
                maxAttempts: A?.maxAttempts ?? (0, I5A.loadConfig)(YiQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, I5A.loadConfig)(RcA.NODE_REGION_CONFIG_OPTIONS, {
                    ...RcA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: JiQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, I5A.loadConfig)({
                    ...YiQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || qP8.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? $P8.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? JiQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, I5A.loadConfig)(RcA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, I5A.loadConfig)(RcA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, I5A.loadConfig)(IiQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    WiQ.getRuntimeConfig = RP8
});
var DiQ = U((ViQ) => {
    Object.defineProperty(ViQ, "__esModule", {
        value: !0
    });
    ViQ.resolveHttpAuthRuntimeConfig = ViQ.getHttpAuthExtensionConfiguration = void 0;
    var TP8 = (A) => {
        let {
            httpAuthSchemes: Q,
            httpAuthSchemeProvider: B,
            credentials: G
        } = A;
        return {
            setHttpAuthScheme(Z) {
                let I = Q.findIndex((Y) => Y.schemeId === Z.schemeId);
                if (I === -1) Q.push(Z);
                else Q.splice(I, 1, Z)
            },
            httpAuthSchemes() {
                return Q
            },
            setHttpAuthSchemeProvider(Z) {
                B = Z
            },
            httpAuthSchemeProvider() {
                return B
            },
            setCredentials(Z) {
                G = Z
            },
            credentials() {
                return G
            }
        }
    };
    ViQ.getHttpAuthExtensionConfiguration = TP8;
    var PP8 = (A) => {
        return {
            httpAuthSchemes: A.httpAuthSchemes(),
            httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
            credentials: A.credentials()
        }
    };
    ViQ.resolveHttpAuthRuntimeConfig = PP8
});
var wiQ = U((UiQ) => {
    Object.defineProperty(UiQ, "__esModule", {
        value: !0
    });
    UiQ.resolveRuntimeExtensions = void 0;
    var HiQ = UCA(),
        CiQ = qcA(),
        EiQ = UJ(),
        ziQ = DiQ(),
        SP8 = (A, Q) => {
            let B = Object.assign((0, HiQ.getAwsRegionExtensionConfiguration)(A), (0, EiQ.getDefaultExtensionConfiguration)(A), (0, CiQ.getHttpHandlerExtensionConfiguration)(A), (0, ziQ.getHttpAuthExtensionConfiguration)(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, HiQ.resolveAwsRegionExtensionConfiguration)(B), (0, EiQ.resolveDefaultRuntimeConfig)(B), (0, CiQ.resolveHttpHandlerRuntimeConfig)(B), (0, ziQ.resolveHttpAuthRuntimeConfig)(B))
        };
    UiQ.resolveRuntimeExtensions = SP8
});
var jCA = U((TS1) => {
    Object.defineProperty(TS1, "__esModule", {
        value: !0
    });
    TS1.STSClient = TS1.__Client = void 0;
    var qiQ = QCA(),
        _P8 = BCA(),
        kP8 = GCA(),
        NiQ = g6A(),
        yP8 = S8(),
        RS1 = nB(),
        xP8 = zX(),
        vP8 = E5(),
        LiQ = X6(),
        OiQ = UJ();
    Object.defineProperty(TS1, "__Client", {
        enumerable: !0,
        get: function() {
            return OiQ.Client
        }
    });
    var MiQ = qS1(),
        bP8 = SCA(),
        fP8 = FiQ(),
        hP8 = wiQ();
    class RiQ extends OiQ.Client {
        config;
        constructor(...[A]) {
            let Q = (0, fP8.getRuntimeConfig)(A || {});
            super(Q);
            this.initConfig = Q;
            let B = (0, bP8.resolveClientEndpointParameters)(Q),
                G = (0, NiQ.resolveUserAgentConfig)(B),
                Z = (0, LiQ.resolveRetryConfig)(G),
                I = (0, yP8.resolveRegionConfig)(Z),
                Y = (0, qiQ.resolveHostHeaderConfig)(I),
                J = (0, vP8.resolveEndpointConfig)(Y),
                W = (0, MiQ.resolveHttpAuthSchemeConfig)(J),
                X = (0, hP8.resolveRuntimeExtensions)(W, A?.extensions || []);
            this.config = X, this.middlewareStack.use((0, NiQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, LiQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, xP8.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, qiQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, _P8.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, kP8.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, RS1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider: MiQ.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (F) => new RS1.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": F.credentials
                })
            })), this.middlewareStack.use((0, RS1.getHttpSigningPlugin)(this.config))
        }
        destroy() {
            super.destroy()
        }
    }
    TS1.STSClient = RiQ
});
var Z_1 = U((Cq7, G_1) => {
    var {
        defineProperty: TcA,
        getOwnPropertyDescriptor: gP8,
        getOwnPropertyNames: uP8
    } = Object, mP8 = Object.prototype.hasOwnProperty, y2 = (A, Q) => TcA(A, "name", {
        value: Q,
        configurable: !0
    }), dP8 = (A, Q) => {
        for (var B in Q) TcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, rS1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of uP8(Q))
                if (!mP8.call(A, Z) && Z !== B) TcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = gP8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, cP8 = (A, Q, B) => (rS1(A, Q, "default"), B && rS1(B, Q, "default")), pP8 = (A) => rS1(TcA({}, "__esModule", {
        value: !0
    }), A), tS1 = {};
    dP8(tS1, {
        AssumeRoleCommand: () => Q_1,
        AssumeRoleResponseFilterSensitiveLog: () => SiQ,
        AssumeRoleWithWebIdentityCommand: () => B_1,
        AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => fiQ,
        AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => hiQ,
        ClientInputEndpointParameters: () => bj8.ClientInputEndpointParameters,
        CredentialsFilterSensitiveLog: () => eS1,
        ExpiredTokenException: () => _iQ,
        IDPCommunicationErrorException: () => giQ,
        IDPRejectedClaimException: () => viQ,
        InvalidIdentityTokenException: () => biQ,
        MalformedPolicyDocumentException: () => kiQ,
        PackedPolicyTooLargeException: () => yiQ,
        RegionDisabledException: () => xiQ,
        STS: () => riQ,
        STSServiceException: () => Fb,
        decorateDefaultCredentialProvider: () => gj8,
        getDefaultRoleAssumer: () => BnQ,
        getDefaultRoleAssumerWithWebIdentity: () => GnQ
    });
    G_1.exports = pP8(tS1);
    cP8(tS1, jCA(), G_1.exports);
    var lP8 = UJ(),
        iP8 = E5(),
        nP8 = sG(),
        aP8 = UJ(),
        sP8 = SCA(),
        jiQ = UJ(),
        rP8 = UJ(),
        Fb = class A extends rP8.ServiceException {
            static {
                y2(this, "STSServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        eS1 = y2((A) => ({
            ...A,
            ...A.SecretAccessKey && {
                SecretAccessKey: jiQ.SENSITIVE_STRING
            }
        }), "CredentialsFilterSensitiveLog"),
        SiQ = y2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: eS1(A.Credentials)
            }