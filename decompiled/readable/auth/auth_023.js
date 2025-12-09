/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.907Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 23/61
 * Lines: 106184 - 107682 (1499 lines)
 * Original file: cli.js
 */

            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedClientExceptionRes"),
        qG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new LPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_UnsupportedGrantTypeExceptionRes"),
        TL = N6((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        MPQ = class extends FPQ.Command.classBuilder().ep(o78).m(function(A, Q, B, G) {
            return [(0, ZG8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, GG8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(DPQ, HPQ).ser(JG8).de(WG8).build() {
            static {
                N6(this, "CreateTokenCommand")
            }
        },
        NG8 = {
            CreateTokenCommand: MPQ
        },
        OPQ = class extends XPQ {
            static {
                N6(this, "SSOOIDC")
            }
        };
    (0, BG8.createAggregatedClient)(NG8, OPQ)
});
var bR1 = U((Jz7, yPQ) => {
    var {
        create: LG8,
        defineProperty: dHA,
        getOwnPropertyDescriptor: MG8,
        getOwnPropertyNames: OG8,
        getPrototypeOf: RG8
    } = Object, TG8 = Object.prototype.hasOwnProperty, Qb = (A, Q) => dHA(A, "name", {
        value: Q,
        configurable: !0
    }), PG8 = (A, Q) => {
        for (var B in Q) dHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, jPQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of OG8(Q))
                if (!TG8.call(A, Z) && Z !== B) dHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = MG8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, SPQ = (A, Q, B) => (B = A != null ? LG8(RG8(A)) : {}, jPQ(Q || !A || !A.__esModule ? dHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), jG8 = (A) => jPQ(dHA({}, "__esModule", {
        value: !0
    }), A), _PQ = {};
    PG8(_PQ, {
        fromEnvSigningName: () => kG8,
        fromSso: () => kPQ,
        fromStatic: () => gG8,
        nodeProvider: () => uG8
    });
    yPQ.exports = jG8(_PQ);
    var SG8 = bR(),
        _G8 = cO1(),
        qw = P2(),
        kG8 = Qb(({
            logger: A,
            signingName: Q
        } = {}) => async () => {
            if (A?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !Q) throw new qw.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
                logger: A
            });
            let B = (0, _G8.getBearerTokenEnvKey)(Q);
            if (!(B in process.env)) throw new qw.TokenProviderError(`Token not present in '${B}' environment variable`, {
                logger: A
            });
            let G = {
                token: process.env[B]
            };
            return (0, SG8.setTokenFeature)(G, "BEARER_SERVICE_ENV_VARS", "3"), G
        }, "fromEnvSigningName"),
        yG8 = 300000,
        vR1 = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
        xG8 = Qb(async (A, Q = {}) => {
            let {
                SSOOIDCClient: B
            } = await Promise.resolve().then(() => SPQ(xR1()));
            return new B(Object.assign({}, Q.clientConfig ?? {}, {
                region: A ?? Q.clientConfig?.region,
                logger: Q.clientConfig?.logger ?? Q.parentClientConfig?.logger
            }))
        }, "getSsoOidcClient"),
        vG8 = Qb(async (A, Q, B = {}) => {
            let {
                CreateTokenCommand: G
            } = await Promise.resolve().then(() => SPQ(xR1()));
            return (await xG8(Q, B)).send(new G({
                clientId: A.clientId,
                clientSecret: A.clientSecret,
                refreshToken: A.refreshToken,
                grantType: "refresh_token"
            }))
        }, "getNewSsoOidcToken"),
        TPQ = Qb((A) => {
            if (A.expiration && A.expiration.getTime() < Date.now()) throw new qw.TokenProviderError(`Token is expired. ${vR1}`, !1)
        }, "validateTokenExpiry"),
        er = Qb((A, Q, B = !1) => {
            if (typeof Q > "u") throw new qw.TokenProviderError(`Value not present for '${A}' in SSO Token${B?". Cannot refresh":""}. ${vR1}`, !1)
        }, "validateTokenKey"),
        mHA = NG(),
        bG8 = UA("fs"),
        {
            writeFile: fG8
        } = bG8.promises,
        hG8 = Qb((A, Q) => {
            let B = (0, mHA.getSSOTokenFilepath)(A),
                G = JSON.stringify(Q, null, 2);
            return fG8(B, G)
        }, "writeSSOTokenToFile"),
        PPQ = new Date(0),
        kPQ = Qb((A = {}) => async ({
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
            let G = await (0, mHA.parseKnownFiles)(B),
                Z = (0, mHA.getProfileName)({
                    profile: B.profile ?? Q?.profile
                }),
                I = G[Z];
            if (!I) throw new qw.TokenProviderError(`Profile '${Z}' could not be found in shared credentials file.`, !1);
            else if (!I.sso_session) throw new qw.TokenProviderError(`Profile '${Z}' is missing required property 'sso_session'.`);
            let Y = I.sso_session,
                W = (await (0, mHA.loadSsoSessionData)(B))[Y];
            if (!W) throw new qw.TokenProviderError(`Sso session '${Y}' could not be found in shared credentials file.`, !1);
            for (let C of ["sso_start_url", "sso_region"])
                if (!W[C]) throw new qw.TokenProviderError(`Sso session '${Y}' is missing required property '${C}'.`, !1);
            let {
                sso_start_url: X,
                sso_region: F
            } = W, V;
            try {
                V = await (0, mHA.getSSOTokenFromFile)(Y)
            } catch (C) {
                throw new qw.TokenProviderError(`The SSO session token associated with profile=${Z} was not found or is invalid. ${vR1}`, !1)
            }
            er("accessToken", V.accessToken), er("expiresAt", V.expiresAt);
            let {
                accessToken: K,
                expiresAt: D
            } = V, H = {
                token: K,
                expiration: new Date(D)
            };
            if (H.expiration.getTime() - Date.now() > yG8) return H;
            if (Date.now() - PPQ.getTime() < 30000) return TPQ(H), H;
            er("clientId", V.clientId, !0), er("clientSecret", V.clientSecret, !0), er("refreshToken", V.refreshToken, !0);
            try {
                PPQ.setTime(Date.now());
                let C = await vG8(V, F, B);
                er("accessToken", C.accessToken), er("expiresIn", C.expiresIn);
                let E = new Date(Date.now() + C.expiresIn * 1000);
                try {
                    await hG8(Y, {
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
                return TPQ(H), H
            }
        }, "fromSso"),
        gG8 = Qb(({
            token: A,
            logger: Q
        }) => async () => {
            if (Q?.debug("@aws-sdk/token-providers - fromStatic"), !A || !A.token) throw new qw.TokenProviderError("Please pass a valid token to fromStatic", !1);
            return A
        }, "fromStatic"),
        uG8 = Qb((A = {}) => (0, qw.memoize)((0, qw.chain)(kPQ(A), async () => {
            throw new qw.TokenProviderError("Could not load token from any providers", !1)
        }), (Q) => Q.expiration !== void 0 && Q.expiration.getTime() - Date.now() < 300000, (Q) => Q.expiration !== void 0), "nodeProvider")
});
var hR1 = U((Wz7, dPQ) => {
    var {
        defineProperty: PmA,
        getOwnPropertyDescriptor: mG8,
        getOwnPropertyNames: bPQ
    } = Object, dG8 = Object.prototype.hasOwnProperty, jmA = (A, Q) => PmA(A, "name", {
        value: Q,
        configurable: !0
    }), cG8 = (A, Q) => function() {
        return A && (Q = (0, A[bPQ(A)[0]])(A = 0)), Q
    }, fPQ = (A, Q) => {
        for (var B in Q) PmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pG8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bPQ(Q))
                if (!dG8.call(A, Z) && Z !== B) PmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = mG8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lG8 = (A) => pG8(PmA({}, "__esModule", {
        value: !0
    }), A), hPQ = {};
    fPQ(hPQ, {
        GetRoleCredentialsCommand: () => fR1.GetRoleCredentialsCommand,
        SSOClient: () => fR1.SSOClient
    });
    var fR1, iG8 = cG8({
            "src/loadSso.ts"() {
                fR1 = $TQ()
            }
        }),
        gPQ = {};
    fPQ(gPQ, {
        fromSSO: () => aG8,
        isSsoProfile: () => uPQ,
        validateSsoProfile: () => mPQ
    });
    dPQ.exports = lG8(gPQ);
    var uPQ = jmA((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        xPQ = bR(),
        nG8 = bR1(),
        fR = P2(),
        TmA = NG(),
        cHA = !1,
        vPQ = jmA(async ({
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
                let v = await (0, nG8.fromSso)({
                    profile: W
                })();
                F = {
                    accessToken: v.token,
                    expiresAt: new Date(v.expiration).toISOString()
                }
            } catch (v) {
                throw new fR.CredentialsProviderError(v.message, {
                    tryNextLink: cHA,
                    logger: X
                })
            } else try {
                F = await (0, TmA.getSSOTokenFromFile)(A)
            } catch (v) {
                throw new fR.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
                    tryNextLink: cHA,
                    logger: X
                })
            }
            if (new Date(F.expiresAt).getTime() - Date.now() <= 0) throw new fR.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
                tryNextLink: cHA,
                logger: X
            });
            let {
                accessToken: K
            } = F, {
                SSOClient: D,
                GetRoleCredentialsCommand: H
            } = await Promise.resolve().then(() => (iG8(), hPQ)), C = I || new D(Object.assign({}, Y ?? {}, {
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
                throw new fR.CredentialsProviderError(v, {
                    tryNextLink: cHA,
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
            if (!z || !w || !N || !q) throw new fR.CredentialsProviderError("SSO returns an invalid temporary credential.", {
                tryNextLink: cHA,
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
            if (Q)(0, xPQ.setCredentialFeature)(y, "CREDENTIALS_SSO", "s");
            else(0, xPQ.setCredentialFeature)(y, "CREDENTIALS_SSO_LEGACY", "u");
            return y
        }, "resolveSSOCredentials"),
        mPQ = jmA((A, Q) => {
            let {
                sso_start_url: B,
                sso_account_id: G,
                sso_region: Z,
                sso_role_name: I
            } = A;
            if (!B || !G || !Z || !I) throw new fR.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(A).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
                tryNextLink: !1,
                logger: Q
            });
            return A
        }, "validateSsoProfile"),
        aG8 = jmA((A = {}) => async ({
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
            } = A, W = (0, TmA.getProfileName)({
                profile: A.profile ?? Q?.profile
            });
            if (!B && !G && !Z && !I && !Y) {
                let F = (await (0, TmA.parseKnownFiles)(A))[W];
                if (!F) throw new fR.CredentialsProviderError(`Profile ${W} was not found.`, {
                    logger: A.logger
                });
                if (!uPQ(F)) throw new fR.CredentialsProviderError(`Profile ${W} is not configured with SSO credentials.`, {
                    logger: A.logger
                });
                if (F?.sso_session) {
                    let z = (await (0, TmA.loadSsoSessionData)(A))[F.sso_session],
                        w = ` configurations in profile ${W} and sso-session ${F.sso_session}`;
                    if (Z && Z !== z.sso_region) throw new fR.CredentialsProviderError("Conflicting SSO region" + w, {
                        tryNextLink: !1,
                        logger: A.logger
                    });
                    if (B && B !== z.sso_start_url) throw new fR.CredentialsProviderError("Conflicting SSO start_url" + w, {
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
                } = mPQ(F, A.logger);
                return vPQ({
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
            } else if (!B || !G || !Z || !I) throw new fR.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
                tryNextLink: !1,
                logger: A.logger
            });
            else return vPQ({
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
var uR1 = U((cPQ) => {
    Object.defineProperty(cPQ, "__esModule", {
        value: !0
    });
    cPQ.resolveHttpAuthSchemeConfig = cPQ.resolveStsAuthConfig = cPQ.defaultSTSHttpAuthSchemeProvider = cPQ.defaultSTSHttpAuthSchemeParametersProvider = void 0;
    var sG8 = MV(),
        gR1 = K7(),
        rG8 = pHA(),
        oG8 = async (A, Q, B) => {
            return {
                operation: (0, gR1.getSmithyContext)(Q).operation,
                region: await (0, gR1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    cPQ.defaultSTSHttpAuthSchemeParametersProvider = oG8;

function tG8(A) {
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

function eG8(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var AZ8 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "AssumeRoleWithWebIdentity": {
                Q.push(eG8(A));
                break
            }
            default:
                Q.push(tG8(A))
        }
        return Q
    };
    cPQ.defaultSTSHttpAuthSchemeProvider = AZ8;
    var QZ8 = (A) => Object.assign(A, {
        stsClientCtor: rG8.STSClient
    });
    cPQ.resolveStsAuthConfig = QZ8;
    var BZ8 = (A) => {
        let Q = cPQ.resolveStsAuthConfig(A),
            B = (0, sG8.resolveAwsSdkSigV4Config)(Q);
        return Object.assign(B, {
            authSchemePreference: (0, gR1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    cPQ.resolveHttpAuthSchemeConfig = BZ8
});
var lHA = U((iPQ) => {
    Object.defineProperty(iPQ, "__esModule", {
        value: !0
    });
    iPQ.commonParams = iPQ.resolveClientEndpointParameters = void 0;
    var IZ8 = (A) => {
        return Object.assign(A, {
            useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
            useFipsEndpoint: A.useFipsEndpoint ?? !1,
            useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
            defaultSigningName: "sts"
        })
    };
    iPQ.resolveClientEndpointParameters = IZ8;
    iPQ.commonParams = {
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
var zjQ = U((CjQ) => {
    Object.defineProperty(CjQ, "__esModule", {
        value: !0
    });
    CjQ.ruleSet = void 0;
    var IjQ = "required",
        v8 = "type",
        t3 = "fn",
        e3 = "argv",
        jd = "ref",
        aPQ = !1,
        mR1 = !0,
        Pd = "booleanEquals",
        ZD = "stringEquals",
        YjQ = "sigv4",
        JjQ = "sts",
        WjQ = "us-east-1",
        dI = "endpoint",
        sPQ = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        jS = "tree",
        E6A = "error",
        cR1 = "getAttr",
        rPQ = {
            [IjQ]: !1,
            [v8]: "String"
        },
        dR1 = {
            [IjQ]: !0,
            default: !1,
            [v8]: "Boolean"
        },
        XjQ = {
            [jd]: "Endpoint"
        },
        oPQ = {
            [t3]: "isSet",
            [e3]: [{
                [jd]: "Region"
            }]
        },
        ID = {
            [jd]: "Region"
        },
        tPQ = {
            [t3]: "aws.partition",
            [e3]: [ID],
            assign: "PartitionResult"
        },
        FjQ = {
            [jd]: "UseFIPS"
        },
        VjQ = {
            [jd]: "UseDualStack"
        },
        NH = {
            url: "https://sts.amazonaws.com",
            properties: {
                authSchemes: [{
                    name: YjQ,
                    signingName: JjQ,
                    signingRegion: WjQ
                }]
            },
            headers: {}
        },
        Nw = {},
        ePQ = {
            conditions: [{
                [t3]: ZD,
                [e3]: [ID, "aws-global"]
            }],
            [dI]: NH,
            [v8]: dI
        },
        KjQ = {
            [t3]: Pd,
            [e3]: [FjQ, !0]
        },
        DjQ = {
            [t3]: Pd,
            [e3]: [VjQ, !0]
        },
        AjQ = {
            [t3]: cR1,
            [e3]: [{
                [jd]: "PartitionResult"
            }, "supportsFIPS"]
        },
        HjQ = {
            [jd]: "PartitionResult"
        },
        QjQ = {
            [t3]: Pd,
            [e3]: [!0, {
                [t3]: cR1,
                [e3]: [HjQ, "supportsDualStack"]
            }]
        },
        BjQ = [{
            [t3]: "isSet",
            [e3]: [XjQ]
        }],
        GjQ = [KjQ],
        ZjQ = [DjQ],
        JZ8 = {
            version: "1.0",
            parameters: {
                Region: rPQ,
                UseDualStack: dR1,
                UseFIPS: dR1,
                Endpoint: rPQ,
                UseGlobalEndpoint: dR1
            },
            rules: [{
                conditions: [{
                    [t3]: Pd,
                    [e3]: [{
                        [jd]: "UseGlobalEndpoint"
                    }, mR1]
                }, {
                    [t3]: "not",
                    [e3]: BjQ
                }, oPQ, tPQ, {
                    [t3]: Pd,
                    [e3]: [FjQ, aPQ]
                }, {
                    [t3]: Pd,
                    [e3]: [VjQ, aPQ]
                }],
                rules: [{
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "ap-northeast-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "ap-south-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "ap-southeast-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "ap-southeast-2"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, ePQ, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "ca-central-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "eu-central-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "eu-north-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "eu-west-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "eu-west-2"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "eu-west-3"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "sa-east-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, WjQ]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "us-east-2"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "us-west-1"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    conditions: [{
                        [t3]: ZD,
                        [e3]: [ID, "us-west-2"]
                    }],
                    endpoint: NH,
                    [v8]: dI
                }, {
                    endpoint: {
                        url: sPQ,
                        properties: {
                            authSchemes: [{
                                name: YjQ,
                                signingName: JjQ,
                                signingRegion: "{Region}"
                            }]
                        },
                        headers: Nw
                    },
                    [v8]: dI
                }],
                [v8]: jS
            }, {
                conditions: BjQ,
                rules: [{
                    conditions: GjQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    [v8]: E6A
                }, {
                    conditions: ZjQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    [v8]: E6A
                }, {
                    endpoint: {
                        url: XjQ,
                        properties: Nw,
                        headers: Nw
                    },
                    [v8]: dI
                }],
                [v8]: jS
            }, {
                conditions: [oPQ],
                rules: [{
                    conditions: [tPQ],
                    rules: [{
                        conditions: [KjQ, DjQ],
                        rules: [{
                            conditions: [{
                                [t3]: Pd,
                                [e3]: [mR1, AjQ]
                            }, QjQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Nw,
                                    headers: Nw
                                },
                                [v8]: dI
                            }],
                            [v8]: jS
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            [v8]: E6A
                        }],
                        [v8]: jS
                    }, {
                        conditions: GjQ,
                        rules: [{
                            conditions: [{
                                [t3]: Pd,
                                [e3]: [AjQ, mR1]
                            }],
                            rules: [{
                                conditions: [{
                                    [t3]: ZD,
                                    [e3]: [{
                                        [t3]: cR1,
                                        [e3]: [HjQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://sts.{Region}.amazonaws.com",
                                    properties: Nw,
                                    headers: Nw
                                },
                                [v8]: dI
                            }, {
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: Nw,
                                    headers: Nw
                                },
                                [v8]: dI
                            }],
                            [v8]: jS
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            [v8]: E6A
                        }],
                        [v8]: jS
                    }, {
                        conditions: ZjQ,
                        rules: [{
                            conditions: [QjQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Nw,
                                    headers: Nw
                                },
                                [v8]: dI
                            }],
                            [v8]: jS
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            [v8]: E6A
                        }],
                        [v8]: jS
                    }, ePQ, {
                        endpoint: {
                            url: sPQ,
                            properties: Nw,
                            headers: Nw
                        },
                        [v8]: dI
                    }],
                    [v8]: jS
                }],
                [v8]: jS
            }, {
                error: "Invalid Configuration: Missing Region",
                [v8]: E6A
            }]
        };
    CjQ.ruleSet = JZ8
});
var wjQ = U((UjQ) => {
    Object.defineProperty(UjQ, "__esModule", {
        value: !0
    });
    UjQ.defaultEndpointResolver = void 0;
    var WZ8 = Q6A(),
        pR1 = II(),
        XZ8 = zjQ(),
        FZ8 = new pR1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
        }),
        VZ8 = (A, Q = {}) => {
            return FZ8.get(A, () => (0, pR1.resolveEndpoint)(XZ8.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    UjQ.defaultEndpointResolver = VZ8;
    pR1.customEndpointFunctions.aws = WZ8.awsEndpointFunctions
});
var OjQ = U((LjQ) => {
    Object.defineProperty(LjQ, "__esModule", {
        value: !0
    });
    LjQ.getRuntimeConfig = void 0;
    var KZ8 = MV(),
        DZ8 = nB(),
        HZ8 = l6(),
        CZ8 = zJ(),
        qjQ = Od(),
        NjQ = L2(),
        EZ8 = uR1(),
        zZ8 = wjQ(),
        UZ8 = (A) => {
            return {
                apiVersion: "2011-06-15",
                base64Decoder: A?.base64Decoder ?? qjQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? qjQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? zZ8.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? EZ8.defaultSTSHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new KZ8.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new DZ8.NoAuthSigner
                }],
                logger: A?.logger ?? new HZ8.NoOpLogger,
                serviceId: A?.serviceId ?? "STS",
                urlParser: A?.urlParser ?? CZ8.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? NjQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? NjQ.toUtf8
            }
        };
    LjQ.getRuntimeConfig = UZ8
});
var _jQ = U((jjQ) => {
    Object.defineProperty(jjQ, "__esModule", {
        value: !0
    });
    jjQ.getRuntimeConfig = void 0;
    var $Z8 = nr(),
        wZ8 = $Z8.__importDefault(PR1()),
        lR1 = MV(),
        RjQ = vHA(),
        SmA = S8(),
        qZ8 = nB(),
        NZ8 = wX(),
        TjQ = X6(),
        Ao = xI(),
        PjQ = oG(),
        LZ8 = qX(),
        MZ8 = FW(),
        OZ8 = OjQ(),
        RZ8 = l6(),
        TZ8 = NX(),
        PZ8 = l6(),
        jZ8 = (A) => {
            (0, PZ8.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, TZ8.resolveDefaultsModeConfig)(A),
                B = () => Q().then(RZ8.loadConfigsForDefaultMode),
                G = (0, OZ8.getRuntimeConfig)(A);
            (0, lR1.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, Ao.loadConfig)(lR1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? LZ8.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, RjQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: wZ8.default.version
                }),
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (I) => I.getIdentityProvider("aws.auth#sigv4") || (async (Y) => await A.credentialDefaultProvider(Y?.__config || {})()),
                    signer: new lR1.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (I) => I.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new qZ8.NoAuthSigner
                }],
                maxAttempts: A?.maxAttempts ?? (0, Ao.loadConfig)(TjQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, Ao.loadConfig)(SmA.NODE_REGION_CONFIG_OPTIONS, {
                    ...SmA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: PjQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, Ao.loadConfig)({
                    ...TjQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || MZ8.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? NZ8.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? PjQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, Ao.loadConfig)(SmA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, Ao.loadConfig)(SmA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, Ao.loadConfig)(RjQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    jjQ.getRuntimeConfig = jZ8
});
var xjQ = U((kjQ) => {
    Object.defineProperty(kjQ, "__esModule", {
        value: !0
    });
    kjQ.resolveHttpAuthRuntimeConfig = kjQ.getHttpAuthExtensionConfiguration = void 0;
    var SZ8 = (A) => {
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
    kjQ.getHttpAuthExtensionConfiguration = SZ8;
    var _Z8 = (A) => {
        return {
            httpAuthSchemes: A.httpAuthSchemes(),
            httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
            credentials: A.credentials()
        }
    };
    kjQ.resolveHttpAuthRuntimeConfig = _Z8
});
var mjQ = U((gjQ) => {
    Object.defineProperty(gjQ, "__esModule", {
        value: !0
    });
    gjQ.resolveRuntimeExtensions = void 0;
    var vjQ = fHA(),
        bjQ = lz(),
        fjQ = l6(),
        hjQ = xjQ(),
        yZ8 = (A, Q) => {
            let B = Object.assign((0, vjQ.getAwsRegionExtensionConfiguration)(A), (0, fjQ.getDefaultExtensionConfiguration)(A), (0, bjQ.getHttpHandlerExtensionConfiguration)(A), (0, hjQ.getHttpAuthExtensionConfiguration)(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, vjQ.resolveAwsRegionExtensionConfiguration)(B), (0, fjQ.resolveDefaultRuntimeConfig)(B), (0, bjQ.resolveHttpHandlerRuntimeConfig)(B), (0, hjQ.resolveHttpAuthRuntimeConfig)(B))
        };
    gjQ.resolveRuntimeExtensions = yZ8
});
var pHA = U((nR1) => {
    Object.defineProperty(nR1, "__esModule", {
        value: !0
    });
    nR1.STSClient = nR1.__Client = void 0;
    var djQ = THA(),
        xZ8 = PHA(),
        vZ8 = jHA(),
        cjQ = J6A(),
        bZ8 = S8(),
        iR1 = nB(),
        fZ8 = zX(),
        hZ8 = E5(),
        pjQ = X6(),
        ijQ = l6();
    Object.defineProperty(nR1, "__Client", {
        enumerable: !0,
        get: function() {
            return ijQ.Client
        }
    });
    var ljQ = uR1(),
        gZ8 = lHA(),
        uZ8 = _jQ(),
        mZ8 = mjQ();

class njQ extends ijQ.Client {
        config;
        constructor(...[A]) {
            let Q = (0, uZ8.getRuntimeConfig)(A || {});
            super(Q);
            this.initConfig = Q;
            let B = (0, gZ8.resolveClientEndpointParameters)(Q),
                G = (0, cjQ.resolveUserAgentConfig)(B),
                Z = (0, pjQ.resolveRetryConfig)(G),
                I = (0, bZ8.resolveRegionConfig)(Z),
                Y = (0, djQ.resolveHostHeaderConfig)(I),
                J = (0, hZ8.resolveEndpointConfig)(Y),
                W = (0, ljQ.resolveHttpAuthSchemeConfig)(J),
                X = (0, mZ8.resolveRuntimeExtensions)(W, A?.extensions || []);
            this.config = X, this.middlewareStack.use((0, cjQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, pjQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, fZ8.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, djQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, xZ8.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, vZ8.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, iR1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider: ljQ.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (F) => new iR1.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": F.credentials
                })
            })), this.middlewareStack.use((0, iR1.getHttpSigningPlugin)(this.config))
        }
        destroy() {
            super.destroy()
        }
    }
    nR1.STSClient = njQ
});
var MT1 = U(($z7, LT1) => {
    var {
        defineProperty: _mA,
        getOwnPropertyDescriptor: dZ8,
        getOwnPropertyNames: cZ8
    } = Object, pZ8 = Object.prototype.hasOwnProperty, k2 = (A, Q) => _mA(A, "name", {
        value: Q,
        configurable: !0
    }), lZ8 = (A, Q) => {
        for (var B in Q) _mA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ET1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of cZ8(Q))
                if (!pZ8.call(A, Z) && Z !== B) _mA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = dZ8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, iZ8 = (A, Q, B) => (ET1(A, Q, "default"), B && ET1(B, Q, "default")), nZ8 = (A) => ET1(_mA({}, "__esModule", {
        value: !0
    }), A), UT1 = {};
    lZ8(UT1, {
        AssumeRoleCommand: () => qT1,
        AssumeRoleResponseFilterSensitiveLog: () => ojQ,
        AssumeRoleWithWebIdentityCommand: () => NT1,
        AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => ZSQ,
        AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => ISQ,
        ClientInputEndpointParameters: () => gI8.ClientInputEndpointParameters,
        CredentialsFilterSensitiveLog: () => $T1,
        ExpiredTokenException: () => tjQ,
        IDPCommunicationErrorException: () => YSQ,
        IDPRejectedClaimException: () => BSQ,
        InvalidIdentityTokenException: () => GSQ,
        MalformedPolicyDocumentException: () => ejQ,
        PackedPolicyTooLargeException: () => ASQ,
        RegionDisabledException: () => QSQ,
        STS: () => zSQ,
        STSServiceException: () => Gb,
        decorateDefaultCredentialProvider: () => dI8,
        getDefaultRoleAssumer: () => LSQ,
        getDefaultRoleAssumerWithWebIdentity: () => MSQ
    });
    LT1.exports = nZ8(UT1);
    iZ8(UT1, pHA(), LT1.exports);
    var aZ8 = l6(),
        sZ8 = E5(),
        rZ8 = sG(),
        oZ8 = l6(),
        tZ8 = lHA(),
        rjQ = l6(),
        eZ8 = l6(),
        Gb = class A extends eZ8.ServiceException {
            static {
                k2(this, "STSServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        $T1 = k2((A) => ({
            ...A,
            ...A.SecretAccessKey && {
                SecretAccessKey: rjQ.SENSITIVE_STRING
            }
        }), "CredentialsFilterSensitiveLog"),
        ojQ = k2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: $T1(A.Credentials)
            }
        }), "AssumeRoleResponseFilterSensitiveLog"),
        tjQ = class A extends Gb {
            static {
                k2(this, "ExpiredTokenException")
            }
            name = "ExpiredTokenException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ExpiredTokenException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        ejQ = class A extends Gb {
            static {
                k2(this, "MalformedPolicyDocumentException")
            }
            name = "MalformedPolicyDocumentException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "MalformedPolicyDocumentException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        ASQ = class A extends Gb {
            static {
                k2(this, "PackedPolicyTooLargeException")
            }
            name = "PackedPolicyTooLargeException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "PackedPolicyTooLargeException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        QSQ = class A extends Gb {
            static {
                k2(this, "RegionDisabledException")
            }
            name = "RegionDisabledException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "RegionDisabledException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        BSQ = class A extends Gb {
            static {
                k2(this, "IDPRejectedClaimException")
            }
            name = "IDPRejectedClaimException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "IDPRejectedClaimException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        GSQ = class A extends Gb {
            static {
                k2(this, "InvalidIdentityTokenException")
            }
            name = "InvalidIdentityTokenException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "InvalidIdentityTokenException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        ZSQ = k2((A) => ({
            ...A,
            ...A.WebIdentityToken && {
                WebIdentityToken: rjQ.SENSITIVE_STRING
            }
        }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog"),
        ISQ = k2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: $T1(A.Credentials)
            }
        }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog"),
        YSQ = class A extends Gb {
            static {
                k2(this, "IDPCommunicationErrorException")
            }
            name = "IDPCommunicationErrorException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "IDPCommunicationErrorException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        wT1 = MV(),
        AI8 = lz(),
        E7 = l6(),
        QI8 = k2(async (A, Q) => {
            let B = KSQ,
                G;
            return G = ESQ({
                ...KI8(A, Q),
                [HSQ]: SI8,
                [CSQ]: DSQ
            }), VSQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleCommand"),
        BI8 = k2(async (A, Q) => {
            let B = KSQ,
                G;
            return G = ESQ({
                ...DI8(A, Q),
                [HSQ]: _I8,
                [CSQ]: DSQ
            }), VSQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleWithWebIdentityCommand"),
        GI8 = k2(async (A, Q) => {
            if (A.statusCode >= 300) return JSQ(A, Q);
            let B = await (0, wT1.parseXmlBody)(A.body, Q),
                G = {};
            return G = wI8(B.AssumeRoleResult, Q), {
                $metadata: Zb(A),
                ...G
            }
        }, "de_AssumeRoleCommand"),
        ZI8 = k2(async (A, Q) => {
            if (A.statusCode >= 300) return JSQ(A, Q);
            let B = await (0, wT1.parseXmlBody)(A.body, Q),
                G = {};
            return G = qI8(B.AssumeRoleWithWebIdentityResult, Q), {
                $metadata: Zb(A),
                ...G
            }
        }, "de_AssumeRoleWithWebIdentityCommand"),
        JSQ = k2(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, wT1.parseXmlErrorBody)(A.body, Q)
                },
                G = kI8(A, B.body);
            switch (G) {
                case "ExpiredTokenException":
                case "com.amazonaws.sts#ExpiredTokenException":
                    throw await II8(B, Q);
                case "MalformedPolicyDocument":
                case "com.amazonaws.sts#MalformedPolicyDocumentException":
                    throw await XI8(B, Q);
                case "PackedPolicyTooLarge":
                case "com.amazonaws.sts#PackedPolicyTooLargeException":
                    throw await FI8(B, Q);
                case "RegionDisabledException":
                case "com.amazonaws.sts#RegionDisabledException":
                    throw await VI8(B, Q);
                case "IDPCommunicationError":
                case "com.amazonaws.sts#IDPCommunicationErrorException":
                    throw await YI8(B, Q);
                case "IDPRejectedClaim":
                case "com.amazonaws.sts#IDPRejectedClaimException":
                    throw await JI8(B, Q);
                case "InvalidIdentityToken":
                case "com.amazonaws.sts#InvalidIdentityTokenException":
                    throw await WI8(B, Q);
                default:
                    let Z = B.body;
                    return jI8({
                        output: A,
                        parsedBody: Z.Error,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        II8 = k2(async (A, Q) => {
            let B = A.body,
                G = NI8(B.Error, Q),
                Z = new tjQ({
                    $metadata: Zb(A),
                    ...G
                });
            return (0, E7.decorateServiceException)(Z, B)
        }, "de_ExpiredTokenExceptionRes"),
        YI8 = k2(async (A, Q) => {
            let B = A.body,
                G = LI8(B.Error, Q),
                Z = new YSQ({
                    $metadata: Zb(A),
                    ...G
                });
            return (0, E7.decorateServiceException)(Z, B)
        }, "de_IDPCommunicationErrorExceptionRes"),
        JI8 = k2(async (A, Q) => {
            let B = A.body,
                G = MI8(B.Error, Q),
                Z = new BSQ({
                    $metadata: Zb(A),
                    ...G
                });
            return (0, E7.decorateServiceException)(Z, B)
        }, "de_IDPRejectedClaimExceptionRes"),
        WI8 = k2(async (A, Q) => {
            let B = A.body,
                G = OI8(B.Error, Q),
                Z = new GSQ({
                    $metadata: Zb(A),
                    ...G
                });
            return (0, E7.decorateServiceException)(Z, B)
        }, "de_InvalidIdentityTokenExceptionRes"),
        XI8 = k2(async (A, Q) => {
            let B = A.body,
                G = RI8(B.Error, Q),
                Z = new ejQ({
                    $metadata: Zb(A),
                    ...G
                });
            return (0, E7.decorateServiceException)(Z, B)
        }, "de_MalformedPolicyDocumentExceptionRes"),
        FI8 = k2(async (A, Q) => {
            let B = A.body,
                G = TI8(B.Error, Q),
                Z = new ASQ({
                    $metadata: Zb(A),
                    ...G
                });
            return (0, E7.decorateServiceException)(Z, B)
        }, "de_PackedPolicyTooLargeExceptionRes"),
        VI8 = k2(async (A, Q) => {
            let B = A.body,
                G = PI8(B.Error, Q),
                Z = new QSQ({
                    $metadata: Zb(A),
                    ...G
                });
            return (0, E7.decorateServiceException)(Z, B)
        }, "de_RegionDisabledExceptionRes"),
        KI8 = k2((A, Q) => {
            let B = {};
            if (A[L6A] != null) B[L6A] = A[L6A];
            if (A[M6A] != null) B[M6A] = A[M6A];
            if (A[q6A] != null) {
                let G = WSQ(A[q6A], Q);
                if (A[q6A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[w6A] != null) B[w6A] = A[w6A];
            if (A[$6A] != null) B[$6A] = A[$6A];
            if (A[FT1] != null) {
                let G = $I8(A[FT1], Q);
                if (A[FT1]?.length === 0) B.Tags = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `Tags.${Z}`;
                    B[Y] = I
                })
            }
            if (A[KT1] != null) {
                let G = UI8(A[KT1], Q);
                if (A[KT1]?.length === 0) B.TransitiveTagKeys = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `TransitiveTagKeys.${Z}`;