/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ui_012.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (19次) = moduleWrapper(fn) - CommonJS module wrapper
 *   GA       (2次) = esmImport(module) - ESM import helper
 *   L        (1次) = lazyLoader(fn) - Lazy module loader
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 12/53
 * Lines: 98691 - 100190 (1500 lines)
 * Original file: cli.js
 */

            else throw new MHA.CredentialsProviderError(`Unsupported credential source in profile ${Q}. Got ${A}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
                logger: B
            })
        }, "resolveCredentialSource"),
        zO1 = RX((A) => (0, Nd.setCredentialFeature)(A, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), "setNamedProvider"),
        dB8 = RX((A, {
            profile: Q = "default",
            logger: B
        } = {}) => {
            return Boolean(A) && typeof A === "object" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof A.external_id) > -1 && ["undefined", "string"].indexOf(typeof A.mfa_serial) > -1 && (cB8(A, {
                profile: Q,
                logger: B
            }) || pB8(A, {
                profile: Q,
                logger: B
            }))
        }, "isAssumeRoleProfile"),
        cB8 = RX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.source_profile === "string" && typeof A.credential_source > "u";
            if (G) B?.debug?.(`    ${Q} isAssumeRoleWithSourceProfile source_profile=${A.source_profile}`);
            return G
        }, "isAssumeRoleWithSourceProfile"),
        pB8 = RX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.credential_source === "string" && typeof A.source_profile > "u";
            if (G) B?.debug?.(`    ${Q} isCredentialSourceProfile credential_source=${A.credential_source}`);
            return G
        }, "isCredentialSourceProfile"),
        lB8 = RX(async (A, Q, B, G = {}) => {
            B.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
            let Z = Q[A],
                {
                    source_profile: I,
                    region: Y
                } = Z;
            if (!B.roleAssumer) {
                let {
                    getDefaultRoleAssumer: W
                } = await Promise.resolve().then(() => qd(DuA()));
                B.roleAssumer = W({
                    ...B.clientConfig,
                    credentialProviderLogger: B.logger,
                    parentClientConfig: {
                        ...B?.parentClientConfig,
                        region: Y ?? B?.parentClientConfig?.region
                    }
                }, B.clientPlugins)
            }
            if (I && I in G) throw new MHA.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${(0,UO1.getProfileName)(B)}. Profiles visited: ` + Object.keys(G).join(", "), {
                logger: B.logger
            });
            B.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${I?`source_profile=[${I}]`:`profile=[${A}]`}`);
            let J = I ? uqQ(I, Q, B, {
                ...G,
                [I]: !0
            }, vqQ(Q[I] ?? {})) : (await mB8(Z.credential_source, A, B.logger)(B))();
            if (vqQ(Z)) return J.then((W) => (0, Nd.setCredentialFeature)(W, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
            else {
                let W = {
                        RoleArn: Z.role_arn,
                        RoleSessionName: Z.role_session_name || `aws-sdk-js-${Date.now()}`,
                        ExternalId: Z.external_id,
                        DurationSeconds: parseInt(Z.duration_seconds || "3600", 10)
                    },
                    {
                        mfa_serial: X
                    } = Z;
                if (X) {
                    if (!B.mfaCodeProvider) throw new MHA.CredentialsProviderError(`Profile ${A} requires multi-factor authentication, but no MFA code callback was provided.`, {
                        logger: B.logger,
                        tryNextLink: !1
                    });
                    W.SerialNumber = X, W.TokenCode = await B.mfaCodeProvider(X)
                }
                let F = await J;
                return B.roleAssumer(F, W).then((V) => (0, Nd.setCredentialFeature)(V, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"))
            }
        }, "resolveAssumeRoleCredentials"),
        vqQ = RX((A) => {
            return !A.role_arn && !!A.credential_source
        }, "isCredentialSourceWithoutRoleArn"),
        iB8 = RX((A) => Boolean(A) && typeof A === "object" && typeof A.credential_process === "string", "isProcessProfile"),
        nB8 = RX(async (A, Q) => Promise.resolve().then(() => qd(CuA())).then(({
            fromProcess: B
        }) => B({
            ...A,
            profile: Q
        })().then((G) => (0, Nd.setCredentialFeature)(G, "CREDENTIALS_PROFILE_PROCESS", "v"))), "resolveProcessCredentials"),
        aB8 = RX(async (A, Q, B = {}) => {
            let {
                fromSSO: G
            } = await Promise.resolve().then(() => qd(SuA()));
            return G({
                profile: A,
                logger: B.logger,
                parentClientConfig: B.parentClientConfig,
                clientConfig: B.clientConfig
            })().then((Z) => {
                if (Q.sso_session) return (0, Nd.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO", "r");
                else return (0, Nd.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO_LEGACY", "t")
            })
        }, "resolveSsoCredentials"),
        sB8 = RX((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        bqQ = RX((A) => Boolean(A) && typeof A === "object" && typeof A.aws_access_key_id === "string" && typeof A.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof A.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof A.aws_account_id) > -1, "isStaticCredsProfile"),
        fqQ = RX(async (A, Q) => {
            Q?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
            let B = {
                accessKeyId: A.aws_access_key_id,
                secretAccessKey: A.aws_secret_access_key,
                sessionToken: A.aws_session_token,
                ...A.aws_credential_scope && {
                    credentialScope: A.aws_credential_scope
                },
                ...A.aws_account_id && {
                    accountId: A.aws_account_id
                }
            };
            return (0, Nd.setCredentialFeature)(B, "CREDENTIALS_PROFILE", "n")
        }, "resolveStaticCredentials"),
        rB8 = RX((A) => Boolean(A) && typeof A === "object" && typeof A.web_identity_token_file === "string" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1, "isWebIdentityProfile"),
        oB8 = RX(async (A, Q) => Promise.resolve().then(() => qd(LHA())).then(({
            fromTokenFile: B
        }) => B({
            webIdentityTokenFile: A.web_identity_token_file,
            roleArn: A.role_arn,
            roleSessionName: A.role_session_name,
            roleAssumerWithWebIdentity: Q.roleAssumerWithWebIdentity,
            logger: Q.logger,
            parentClientConfig: Q.parentClientConfig
        })().then((G) => (0, Nd.setCredentialFeature)(G, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))), "resolveWebIdentityCredentials"),
        uqQ = RX(async (A, Q, B, G = {}, Z = !1) => {
            let I = Q[A];
            if (Object.keys(G).length > 0 && bqQ(I)) return fqQ(I, B);
            if (Z || dB8(I, {
                    profile: A,
                    logger: B.logger
                })) return lB8(A, Q, B, G);
            if (bqQ(I)) return fqQ(I, B);
            if (rB8(I)) return oB8(I, B);
            if (iB8(I)) return nB8(B, A);
            if (sB8(I)) return await aB8(A, I, B);
            throw new MHA.CredentialsProviderError(`Could not resolve credentials using profile: [${A}] in configuration/credentials file(s).`, {
                logger: B.logger
            })
        }, "resolveProfileData"),
        tB8 = RX((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            let B = {
                ...A,
                parentClientConfig: {
                    ...Q,
                    ...A.parentClientConfig
                }
            };
            B.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
            let G = await (0, UO1.parseKnownFiles)(B);
            return uqQ((0, UO1.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), G, B)
        }, "fromIni")
});
var pqQ = U((dqQ) => {
    Object.defineProperty(dqQ, "__esModule", {
        value: !0
    });
    dqQ.fromIni = void 0;
    var eB8 = $O1(),
        A28 = (A = {}) => (0, eB8.fromIni)({
            ...A
        });
    dqQ.fromIni = A28
});
var nqQ = U((lqQ) => {
    Object.defineProperty(lqQ, "__esModule", {
        value: !0
    });
    lqQ.fromInstanceMetadata = void 0;
    var Q28 = DL(),
        B28 = wF(),
        G28 = (A) => {
            return A?.logger?.debug("@smithy/credential-provider-imds", "fromInstanceMetadata"), async () => (0, B28.fromInstanceMetadata)(A)().then((Q) => (0, Q28.setCredentialFeature)(Q, "CREDENTIALS_IMDS", "0"))
        };
    lqQ.fromInstanceMetadata = G28
});
var QNQ = U((qC7, ANQ) => {
    var {
        create: Z28,
        defineProperty: RHA,
        getOwnPropertyDescriptor: I28,
        getOwnPropertyNames: Y28,
        getPrototypeOf: J28
    } = Object, W28 = Object.prototype.hasOwnProperty, kuA = (A, Q) => RHA(A, "name", {
        value: Q,
        configurable: !0
    }), X28 = (A, Q) => {
        for (var B in Q) RHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, rqQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Y28(Q))
                if (!W28.call(A, Z) && Z !== B) RHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = I28(Q, Z)) || G.enumerable
                })
        }
        return A
    }, e8A = (A, Q, B) => (B = A != null ? Z28(J28(A)) : {}, rqQ(Q || !A || !A.__esModule ? RHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), F28 = (A) => rqQ(RHA({}, "__esModule", {
        value: !0
    }), A), oqQ = {};
    X28(oqQ, {
        credentialsTreatedAsExpired: () => eqQ,
        credentialsWillNeedRefresh: () => tqQ,
        defaultProvider: () => D28
    });
    ANQ.exports = F28(oqQ);
    var wO1 = vgA(),
        V28 = NG(),
        ir = P2(),
        aqQ = "AWS_EC2_METADATA_DISABLED",
        K28 = kuA(async (A) => {
            let {
                ENV_CMDS_FULL_URI: Q,
                ENV_CMDS_RELATIVE_URI: B,
                fromContainerMetadata: G,
                fromInstanceMetadata: Z
            } = await Promise.resolve().then(() => e8A(wF()));
            if (process.env[B] || process.env[Q]) {
                A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
                let {
                    fromHttp: I
                } = await Promise.resolve().then(() => e8A(ygA()));
                return (0, ir.chain)(I(A), G(A))
            }
            if (process.env[aqQ] && process.env[aqQ] !== "false") return async () => {
                throw new ir.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
                    logger: A.logger
                })
            };
            return A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), Z(A)
        }, "remoteProvider"),
        sqQ = !1,
        D28 = kuA((A = {}) => (0, ir.memoize)((0, ir.chain)(async () => {
            if (A.profile ?? process.env[V28.ENV_PROFILE]) {
                if (process.env[wO1.ENV_KEY] && process.env[wO1.ENV_SECRET]) {
                    if (!sqQ)(A.logger?.warn && A.logger?.constructor?.name !== "NoOpLogger" ? A.logger.warn : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), sqQ = !0
                }
                throw new ir.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                    logger: A.logger,
                    tryNextLink: !0
                })
            }
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), (0, wO1.fromEnv)(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
            let {
                ssoStartUrl: Q,
                ssoAccountId: B,
                ssoRegion: G,
                ssoRoleName: Z,
                ssoSession: I
            } = A;
            if (!Q && !B && !G && !Z && !I) throw new ir.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
                logger: A.logger
            });
            let {
                fromSSO: Y
            } = await Promise.resolve().then(() => e8A(SuA()));
            return Y(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
            let {
                fromIni: Q
            } = await Promise.resolve().then(() => e8A($O1()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
            let {
                fromProcess: Q
            } = await Promise.resolve().then(() => e8A(CuA()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
            let {
                fromTokenFile: Q
            } = await Promise.resolve().then(() => e8A(LHA()));
            return Q(A)()
        }, async () => {
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await K28(A))()
        }, async () => {
            throw new ir.CredentialsProviderError("Could not load credentials from any providers", {
                tryNextLink: !1,
                logger: A.logger
            })
        }), eqQ, tqQ), "defaultProvider"),
        tqQ = kuA((A) => A?.expiration !== void 0, "credentialsWillNeedRefresh"),
        eqQ = kuA((A) => A?.expiration !== void 0 && A.expiration.getTime() - Date.now() < 300000, "credentialsTreatedAsExpired")
});
var qO1 = U((BNQ) => {
    Object.defineProperty(BNQ, "__esModule", {
        value: !0
    });
    BNQ.fromNodeProviderChain = void 0;
    var H28 = QNQ(),
        C28 = (A = {}) => (0, H28.defaultProvider)({
            ...A
        });
    BNQ.fromNodeProviderChain = C28
});
var YNQ = U((ZNQ) => {
    Object.defineProperty(ZNQ, "__esModule", {
        value: !0
    });
    ZNQ.fromProcess = void 0;
    var E28 = CuA(),
        z28 = (A) => (0, E28.fromProcess)(A);
    ZNQ.fromProcess = z28
});
var XNQ = U((JNQ) => {
    Object.defineProperty(JNQ, "__esModule", {
        value: !0
    });
    JNQ.fromSSO = void 0;
    var U28 = SuA(),
        $28 = (A = {}) => {
            return (0, U28.fromSSO)({
                ...A
            })
        };
    JNQ.fromSSO = $28
});
var VNQ = U((yuA) => {
    Object.defineProperty(yuA, "__esModule", {
        value: !0
    });
    yuA.STSClient = yuA.AssumeRoleCommand = void 0;
    var FNQ = DuA();
    Object.defineProperty(yuA, "AssumeRoleCommand", {
        enumerable: !0,
        get: function() {
            return FNQ.AssumeRoleCommand
        }
    });
    Object.defineProperty(yuA, "STSClient", {
        enumerable: !0,
        get: function() {
            return FNQ.STSClient
        }
    })
});
var HNQ = U((OS) => {
    var q28 = OS && OS.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        N28 = OS && OS.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        L28 = OS && OS.__importStar || function() {
            var A = function(Q) {
                return A = Object.getOwnPropertyNames || function(B) {
                    var G = [];
                    for (var Z in B)
                        if (Object.prototype.hasOwnProperty.call(B, Z)) G[G.length] = Z;
                    return G
                }, A(Q)
            };
            return function(Q) {
                if (Q && Q.__esModule) return Q;
                var B = {};
                if (Q != null) {
                    for (var G = A(Q), Z = 0; Z < G.length; Z++)
                        if (G[Z] !== "default") q28(B, Q, G[Z])
                }
                return N28(B, Q), B
            }
        }();
    Object.defineProperty(OS, "__esModule", {
        value: !0
    });
    OS.fromTemporaryCredentials = void 0;
    var M28 = nB(),
        KNQ = P2(),
        O28 = "us-east-1",
        R28 = (A, Q, B) => {
            let G;
            return async (Z = {}) => {
                let {
                    callerClientConfig: I
                } = Z, Y = A.clientConfig?.profile ?? I?.profile, J = A.logger ?? I?.logger;
                J?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
                let W = {
                    ...A.params,
                    RoleSessionName: A.params.RoleSessionName ?? "aws-sdk-js-" + Date.now()
                };
                if (W?.SerialNumber) {
                    if (!A.mfaCodeProvider) throw new KNQ.CredentialsProviderError("Temporary credential requires multi-factor authentication, but no MFA code callback was provided.", {
                        tryNextLink: !1,
                        logger: J
                    });
                    W.TokenCode = await A.mfaCodeProvider(W?.SerialNumber)
                }
                let {
                    AssumeRoleCommand: X,
                    STSClient: F
                } = await Promise.resolve().then(() => L28(VNQ()));
                if (!G) {
                    let K = typeof Q === "function" ? Q() : void 0,
                        D = [A.masterCredentials, A.clientConfig?.credentials, void I?.credentials, I?.credentialDefaultProvider?.(), K],
                        H = "STS client default credentials";
                    if (D[0]) H = "options.masterCredentials";
                    else if (D[1]) H = "options.clientConfig.credentials";
                    else if (D[2]) throw H = "caller client's credentials", Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");
                    else if (D[3]) H = "caller client's credentialDefaultProvider";
                    else if (D[4]) H = "AWS SDK default credentials";
                    let C = [A.clientConfig?.region, I?.region, await B?.({
                            profile: Y
                        }), O28],
                        E = "default partition's default region";
                    if (C[0]) E = "options.clientConfig.region";
                    else if (C[1]) E = "caller client's region";
                    else if (C[2]) E = "file or env region";
                    let z = [DNQ(A.clientConfig?.requestHandler), DNQ(I?.requestHandler)],
                        w = "STS default requestHandler";
                    if (z[0]) w = "options.clientConfig.requestHandler";
                    else if (z[1]) w = "caller client's requestHandler";
                    J?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${E}=${await(0,M28.normalizeProvider)(xuA(C))()}, ${H}, ${w}.`), G = new F({
                        ...A.clientConfig,
                        credentials: xuA(D),
                        logger: J,
                        profile: Y,
                        region: xuA(C),
                        requestHandler: xuA(z)
                    })
                }
                if (A.clientPlugins)
                    for (let K of A.clientPlugins) G.middlewareStack.use(K);
                let {
                    Credentials: V
                } = await G.send(new X(W));
                if (!V || !V.AccessKeyId || !V.SecretAccessKey) throw new KNQ.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${W.RoleArn}`, {
                    logger: J
                });
                return {
                    accessKeyId: V.AccessKeyId,
                    secretAccessKey: V.SecretAccessKey,
                    sessionToken: V.SessionToken,
                    expiration: V.Expiration,
                    credentialScope: V.CredentialScope
                }
            }
        };
    OS.fromTemporaryCredentials = R28;
    var DNQ = (A) => {
            return A?.metadata?.handlerProtocol === "h2" ? void 0 : A
        },
        xuA = (A) => {
            for (let Q of A)
                if (Q !== void 0) return Q
        }
});
var zNQ = U((CNQ) => {
    Object.defineProperty(CNQ, "__esModule", {
        value: !0
    });
    CNQ.fromTemporaryCredentials = void 0;
    var T28 = S8(),
        P28 = xI(),
        j28 = qO1(),
        S28 = HNQ(),
        _28 = (A) => {
            return (0, S28.fromTemporaryCredentials)(A, j28.fromNodeProviderChain, async ({
                profile: Q = process.env.AWS_PROFILE
            }) => (0, P28.loadConfig)({
                environmentVariableSelector: (B) => B.AWS_REGION,
                configFileSelector: (B) => {
                    return B.region
                },
                default: () => {
                    return
                }
            }, {
                ...T28.NODE_REGION_CONFIG_FILE_OPTIONS,
                profile: Q
            })())
        };
    CNQ.fromTemporaryCredentials = _28
});
var wNQ = U((UNQ) => {
    Object.defineProperty(UNQ, "__esModule", {
        value: !0
    });
    UNQ.fromTokenFile = void 0;
    var k28 = LHA(),
        y28 = (A = {}) => (0, k28.fromTokenFile)({
            ...A
        });
    UNQ.fromTokenFile = y28
});
var LNQ = U((qNQ) => {
    Object.defineProperty(qNQ, "__esModule", {
        value: !0
    });
    qNQ.fromWebToken = void 0;
    var x28 = LHA(),
        v28 = (A) => (0, x28.fromWebToken)({
            ...A
        });
    qNQ.fromWebToken = v28
});
var NO1 = U((qH) => {
    Object.defineProperty(qH, "__esModule", {
        value: !0
    });
    qH.fromHttp = void 0;
    var $w = Tr();
    $w.__exportStar(bGQ(), qH);
    $w.__exportStar(sDQ(), qH);
    $w.__exportStar(tDQ(), qH);
    $w.__exportStar(QHQ(), qH);
    var b28 = ygA();
    Object.defineProperty(qH, "fromHttp", {
        enumerable: !0,
        get: function() {
            return b28.fromHttp
        }
    });
    $w.__exportStar(tHQ(), qH);
    $w.__exportStar(pqQ(), qH);
    $w.__exportStar(nqQ(), qH);
    $w.__exportStar(qO1(), qH);
    $w.__exportStar(YNQ(), qH);
    $w.__exportStar(XNQ(), qH);
    $w.__exportStar(zNQ(), qH);
    $w.__exportStar(wNQ(), qH);
    $w.__exportStar(LNQ(), qH)
});

function ONQ(A) {
    return A?.name === "CredentialsProviderError"
}

function RNQ(A) {
    if (!A || typeof A !== "object") return !1;
    let Q = A;
    if (!Q.Credentials || typeof Q.Credentials !== "object") return !1;
    let B = Q.Credentials;
    return typeof B.AccessKeyId === "string" && typeof B.SecretAccessKey === "string" && typeof B.SessionToken === "string" && B.AccessKeyId.length > 0 && B.SecretAccessKey.length > 0 && B.SessionToken.length > 0
}
async function TNQ() {
    try {
        g("Clearing AWS credential provider cache"), await MNQ.fromIni({
            ignoreCache: !0
        })(), g("AWS credential provider cache refreshed")
    } catch (A) {
        g("Failed to clear AWS credential cache (this is expected if no credentials are configured)")
    }
}
var vuA, MNQ, LO1 = async () => {
    await new vuA.STSClient().send(new vuA.GetCallerIdentityCommand({}))
};
var MO1 = L(() => {
    D0();
    vuA = GA(YGQ(), 1), MNQ = GA(NO1(), 1)
});
var OO1 = U((xC7, bNQ) => {
    var {
        defineProperty: buA,
        getOwnPropertyDescriptor: h28,
        getOwnPropertyNames: g28
    } = Object, u28 = Object.prototype.hasOwnProperty, fuA = (A, Q) => buA(A, "name", {
        value: Q,
        configurable: !0
    }), m28 = (A, Q) => {
        for (var B in Q) buA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, d28 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of g28(Q))
                if (!u28.call(A, Z) && Z !== B) buA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = h28(Q, Z)) || G.enumerable
                })
        }
        return A
    }, c28 = (A) => d28(buA({}, "__esModule", {
        value: !0
    }), A), PNQ = {};
    m28(PNQ, {
        AlgorithmId: () => kNQ,
        EndpointURLScheme: () => _NQ,
        FieldPosition: () => yNQ,
        HttpApiKeyAuthLocation: () => SNQ,
        HttpAuthLocation: () => jNQ,
        IniSectionType: () => xNQ,
        RequestHandlerProtocol: () => vNQ,
        SMITHY_CONTEXT_KEY: () => a28,
        getDefaultClientConfiguration: () => i28,
        resolveDefaultRuntimeConfig: () => n28
    });
    bNQ.exports = c28(PNQ);
    var jNQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(jNQ || {}),
        SNQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(SNQ || {}),
        _NQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(_NQ || {}),
        kNQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(kNQ || {}),
        p28 = fuA((A) => {
            let Q = [];
            if (A.sha256 !== void 0) Q.push({
                algorithmId: () => "sha256",
                checksumConstructor: () => A.sha256
            });
            if (A.md5 != null) Q.push({
                algorithmId: () => "md5",
                checksumConstructor: () => A.md5
            });
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        l28 = fuA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        i28 = fuA((A) => {
            return p28(A)
        }, "getDefaultClientConfiguration"),
        n28 = fuA((A) => {
            return l28(A)
        }, "resolveDefaultRuntimeConfig"),
        yNQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(yNQ || {}),
        a28 = "__smithy_context",
        xNQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(xNQ || {}),
        vNQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(vNQ || {})
});
var lz = U((vC7, mNQ) => {
    var {
        defineProperty: huA,
        getOwnPropertyDescriptor: s28,
        getOwnPropertyNames: r28
    } = Object, o28 = Object.prototype.hasOwnProperty, Ld = (A, Q) => huA(A, "name", {
        value: Q,
        configurable: !0
    }), t28 = (A, Q) => {
        for (var B in Q) huA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, e28 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of r28(Q))
                if (!o28.call(A, Z) && Z !== B) huA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = s28(Q, Z)) || G.enumerable
                })
        }
        return A
    }, A98 = (A) => e28(huA({}, "__esModule", {
        value: !0
    }), A), fNQ = {};
    t28(fNQ, {
        Field: () => G98,
        Fields: () => Z98,
        HttpRequest: () => I98,
        HttpResponse: () => Y98,
        IHttpRequest: () => hNQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => Q98,
        isValidHostname: () => uNQ,
        resolveHttpHandlerRuntimeConfig: () => B98
    });
    mNQ.exports = A98(fNQ);
    var Q98 = Ld((A) => {
            return {
                setHttpHandler(Q) {
                    A.httpHandler = Q
                },
                httpHandler() {
                    return A.httpHandler
                },
                updateHttpClientConfig(Q, B) {
                    A.httpHandler?.updateHttpClientConfig(Q, B)
                },
                httpHandlerConfigs() {
                    return A.httpHandler.httpHandlerConfigs()
                }
            }
        }, "getHttpHandlerExtensionConfiguration"),
        B98 = Ld((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        hNQ = OO1(),
        G98 = class {
            static {
                Ld(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = hNQ.FieldPosition.HEADER,
                values: B = []
            }) {
                this.name = A, this.kind = Q, this.values = B
            }
            add(A) {
                this.values.push(A)
            }
            set(A) {
                this.values = A
            }
            remove(A) {
                this.values = this.values.filter((Q) => Q !== A)
            }
            toString() {
                return this.values.map((A) => A.includes(",") || A.includes(" ") ? `"${A}"` : A).join(", ")
            }
            get() {
                return this.values
            }
        },
        Z98 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                Ld(this, "Fields")
            }
            setField(A) {
                this.entries[A.name.toLowerCase()] = A
            }
            getField(A) {
                return this.entries[A.toLowerCase()]
            }
            removeField(A) {
                delete this.entries[A.toLowerCase()]
            }
            getByType(A) {
                return Object.values(this.entries).filter((Q) => Q.kind === A)
            }
        },
        I98 = class A {
            static {
                Ld(this, "HttpRequest")
            }
            constructor(Q) {
                this.method = Q.method || "GET", this.hostname = Q.hostname || "localhost", this.port = Q.port, this.query = Q.query || {}, this.headers = Q.headers || {}, this.body = Q.body, this.protocol = Q.protocol ? Q.protocol.slice(-1) !== ":" ? `${Q.protocol}:` : Q.protocol : "https:", this.path = Q.path ? Q.path.charAt(0) !== "/" ? `/${Q.path}` : Q.path : "/", this.username = Q.username, this.password = Q.password, this.fragment = Q.fragment
            }
            static clone(Q) {
                let B = new A({
                    ...Q,
                    headers: {
                        ...Q.headers
                    }
                });
                if (B.query) B.query = gNQ(B.query);
                return B
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return "method" in B && "protocol" in B && "hostname" in B && "path" in B && typeof B.query === "object" && typeof B.headers === "object"
            }
            clone() {
                return A.clone(this)
            }
        };

    function gNQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    Ld(gNQ, "cloneQuery");
    var Y98 = class {
        static {
            Ld(this, "HttpResponse")
        }
        constructor(A) {
            this.statusCode = A.statusCode, this.reason = A.reason, this.headers = A.headers || {}, this.body = A.body
        }
        static isInstance(A) {
            if (!A) return !1;
            let Q = A;
            return typeof Q.statusCode === "number" && typeof Q.headers === "object"
        }
    };

    function uNQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    Ld(uNQ, "isValidHostname")
});
var THA = U((gC7, iNQ) => {
    var {
        defineProperty: uuA,
        getOwnPropertyDescriptor: J98,
        getOwnPropertyNames: W98
    } = Object, X98 = Object.prototype.hasOwnProperty, guA = (A, Q) => uuA(A, "name", {
        value: Q,
        configurable: !0
    }), F98 = (A, Q) => {
        for (var B in Q) uuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, V98 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of W98(Q))
                if (!X98.call(A, Z) && Z !== B) uuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = J98(Q, Z)) || G.enumerable
                })
        }
        return A
    }, K98 = (A) => V98(uuA({}, "__esModule", {
        value: !0
    }), A), dNQ = {};
    F98(dNQ, {
        getHostHeaderPlugin: () => H98,
        hostHeaderMiddleware: () => pNQ,
        hostHeaderMiddlewareOptions: () => lNQ,
        resolveHostHeaderConfig: () => cNQ
    });
    iNQ.exports = K98(dNQ);
    var D98 = lz();

    function cNQ(A) {
        return A
    }
    guA(cNQ, "resolveHostHeaderConfig");
    var pNQ = guA((A) => (Q) => async (B) => {
            if (!D98.HttpRequest.isInstance(B.request)) return Q(B);
            let {
                request: G
            } = B, {
                handlerProtocol: Z = ""
            } = A.requestHandler.metadata || {};
            if (Z.indexOf("h2") >= 0 && !G.headers[":authority"]) delete G.headers.host, G.headers[":authority"] = G.hostname + (G.port ? ":" + G.port : "");
            else if (!G.headers.host) {
                let I = G.hostname;
                if (G.port != null) I += `:${G.port}`;
                G.headers.host = I
            }
            return Q(B)
        }, "hostHeaderMiddleware"),
        lNQ = {
            name: "hostHeaderMiddleware",
            step: "build",
            priority: "low",
            tags: ["HOST"],
            override: !0
        },
        H98 = guA((A) => ({
            applyToStack: guA((Q) => {
                Q.add(pNQ(A), lNQ)
            }, "applyToStack")
        }), "getHostHeaderPlugin")
});
var PHA = U((uC7, rNQ) => {
    var {
        defineProperty: muA,
        getOwnPropertyDescriptor: C98,
        getOwnPropertyNames: E98
    } = Object, z98 = Object.prototype.hasOwnProperty, RO1 = (A, Q) => muA(A, "name", {
        value: Q,
        configurable: !0
    }), U98 = (A, Q) => {
        for (var B in Q) muA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, $98 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of E98(Q))
                if (!z98.call(A, Z) && Z !== B) muA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = C98(Q, Z)) || G.enumerable
                })
        }
        return A
    }, w98 = (A) => $98(muA({}, "__esModule", {
        value: !0
    }), A), nNQ = {};
    U98(nNQ, {
        getLoggerPlugin: () => q98,
        loggerMiddleware: () => aNQ,
        loggerMiddlewareOptions: () => sNQ
    });
    rNQ.exports = w98(nNQ);
    var aNQ = RO1(() => (A, Q) => async (B) => {
            try {
                let G = await A(B),
                    {
                        clientName: Z,
                        commandName: I,
                        logger: Y,
                        dynamoDbDocumentClientOptions: J = {}
                    } = Q,
                    {
                        overrideInputFilterSensitiveLog: W,
                        overrideOutputFilterSensitiveLog: X
                    } = J,
                    F = W ?? Q.inputFilterSensitiveLog,
                    V = X ?? Q.outputFilterSensitiveLog,
                    {
                        $metadata: K,
                        ...D
                    } = G.output;
                return Y?.info?.({
                    clientName: Z,
                    commandName: I,
                    input: F(B.input),
                    output: V(D),
                    metadata: K
                }), G
            } catch (G) {
                let {
                    clientName: Z,
                    commandName: I,
                    logger: Y,
                    dynamoDbDocumentClientOptions: J = {}
                } = Q, {
                    overrideInputFilterSensitiveLog: W
                } = J, X = W ?? Q.inputFilterSensitiveLog;
                throw Y?.error?.({
                    clientName: Z,
                    commandName: I,
                    input: X(B.input),
                    error: G,
                    metadata: G.$metadata
                }), G
            }
        }, "loggerMiddleware"),
        sNQ = {
            name: "loggerMiddleware",
            tags: ["LOGGER"],
            step: "initialize",
            override: !0
        },
        q98 = RO1((A) => ({
            applyToStack: RO1((Q) => {
                Q.add(aNQ(), sNQ)
            }, "applyToStack")
        }), "getLoggerPlugin")
});
var jHA = U((mC7, ALQ) => {
    var {
        defineProperty: cuA,
        getOwnPropertyDescriptor: N98,
        getOwnPropertyNames: L98
    } = Object, M98 = Object.prototype.hasOwnProperty, duA = (A, Q) => cuA(A, "name", {
        value: Q,
        configurable: !0
    }), O98 = (A, Q) => {
        for (var B in Q) cuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, R98 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of L98(Q))
                if (!M98.call(A, Z) && Z !== B) cuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = N98(Q, Z)) || G.enumerable
                })
        }
        return A
    }, T98 = (A) => R98(cuA({}, "__esModule", {
        value: !0
    }), A), oNQ = {};
    O98(oNQ, {
        addRecursionDetectionMiddlewareOptions: () => eNQ,
        getRecursionDetectionPlugin: () => _98,
        recursionDetectionMiddleware: () => tNQ
    });
    ALQ.exports = T98(oNQ);
    var P98 = lz(),
        TO1 = "X-Amzn-Trace-Id",
        j98 = "AWS_LAMBDA_FUNCTION_NAME",
        S98 = "_X_AMZN_TRACE_ID",
        tNQ = duA((A) => (Q) => async (B) => {
            let {
                request: G
            } = B;
            if (!P98.HttpRequest.isInstance(G) || A.runtime !== "node") return Q(B);
            let Z = Object.keys(G.headers ?? {}).find((W) => W.toLowerCase() === TO1.toLowerCase()) ?? TO1;
            if (G.headers.hasOwnProperty(Z)) return Q(B);
            let I = process.env[j98],
                Y = process.env[S98],
                J = duA((W) => typeof W === "string" && W.length > 0, "nonEmptyString");
            if (J(I) && J(Y)) G.headers[TO1] = Y;
            return Q({
                ...B,
                request: G
            })
        }, "recursionDetectionMiddleware"),
        eNQ = {
            step: "build",
            tags: ["RECURSION_DETECTION"],
            name: "recursionDetectionMiddleware",
            override: !0,
            priority: "low"
        },
        _98 = duA((A) => ({
            applyToStack: duA((Q) => {
                Q.add(tNQ(A), eNQ)
            }, "applyToStack")
        }), "getRecursionDetectionPlugin")
});
var Q6A = U((dC7, FLQ) => {
    var {
        defineProperty: puA,
        getOwnPropertyDescriptor: k98,
        getOwnPropertyNames: y98
    } = Object, x98 = Object.prototype.hasOwnProperty, A6A = (A, Q) => puA(A, "name", {
        value: Q,
        configurable: !0
    }), v98 = (A, Q) => {
        for (var B in Q) puA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, b98 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of y98(Q))
                if (!x98.call(A, Z) && Z !== B) puA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = k98(Q, Z)) || G.enumerable
                })
        }
        return A
    }, f98 = (A) => b98(puA({}, "__esModule", {
        value: !0
    }), A), BLQ = {};
    v98(BLQ, {
        ConditionObject: () => MZ.ConditionObject,
        DeprecatedObject: () => MZ.DeprecatedObject,
        EndpointError: () => MZ.EndpointError,
        EndpointObject: () => MZ.EndpointObject,
        EndpointObjectHeaders: () => MZ.EndpointObjectHeaders,
        EndpointObjectProperties: () => MZ.EndpointObjectProperties,
        EndpointParams: () => MZ.EndpointParams,
        EndpointResolverOptions: () => MZ.EndpointResolverOptions,
        EndpointRuleObject: () => MZ.EndpointRuleObject,
        ErrorRuleObject: () => MZ.ErrorRuleObject,
        EvaluateOptions: () => MZ.EvaluateOptions,
        Expression: () => MZ.Expression,
        FunctionArgv: () => MZ.FunctionArgv,
        FunctionObject: () => MZ.FunctionObject,
        FunctionReturn: () => MZ.FunctionReturn,
        ParameterObject: () => MZ.ParameterObject,
        ReferenceObject: () => MZ.ReferenceObject,
        ReferenceRecord: () => MZ.ReferenceRecord,
        RuleSetObject: () => MZ.RuleSetObject,
        RuleSetRules: () => MZ.RuleSetRules,
        TreeRuleObject: () => MZ.TreeRuleObject,
        awsEndpointFunctions: () => XLQ,
        getUserAgentPrefix: () => m98,
        isIpAddress: () => MZ.isIpAddress,
        partition: () => JLQ,
        resolveEndpoint: () => MZ.resolveEndpoint,
        setPartitionInfo: () => WLQ,
        useDefaultPartitionInfo: () => u98
    });
    FLQ.exports = f98(BLQ);
    var MZ = II(),
        GLQ = A6A((A, Q = !1) => {
            if (Q) {
                for (let B of A.split("."))
                    if (!GLQ(B)) return !1;
                return !0
            }
            if (!(0, MZ.isValidHostLabel)(A)) return !1;
            if (A.length < 3 || A.length > 63) return !1;
            if (A !== A.toLowerCase()) return !1;
            if ((0, MZ.isIpAddress)(A)) return !1;
            return !0
        }, "isVirtualHostableS3Bucket"),
        QLQ = ":",
        h98 = "/",
        g98 = A6A((A) => {
            let Q = A.split(QLQ);
            if (Q.length < 6) return null;
            let [B, G, Z, I, Y, ...J] = Q;
            if (B !== "arn" || G === "" || Z === "" || J.join(QLQ) === "") return null;
            let W = J.map((X) => X.split(h98)).flat();
            return {
                partition: G,
                service: Z,
                region: I,
                accountId: Y,
                resourceId: W
            }
        }, "parseArn"),
        ZLQ = {
            partitions: [{
                id: "aws",
                outputs: {
                    dnsSuffix: "amazonaws.com",
                    dualStackDnsSuffix: "api.aws",
                    implicitGlobalRegion: "us-east-1",
                    name: "aws",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
                regions: {
                    "af-south-1": {
                        description: "Africa (Cape Town)"
                    },
                    "ap-east-1": {
                        description: "Asia Pacific (Hong Kong)"
                    },
                    "ap-east-2": {
                        description: "Asia Pacific (Taipei)"
                    },
                    "ap-northeast-1": {
                        description: "Asia Pacific (Tokyo)"
                    },
                    "ap-northeast-2": {
                        description: "Asia Pacific (Seoul)"
                    },
                    "ap-northeast-3": {
                        description: "Asia Pacific (Osaka)"
                    },
                    "ap-south-1": {
                        description: "Asia Pacific (Mumbai)"
                    },
                    "ap-south-2": {
                        description: "Asia Pacific (Hyderabad)"
                    },
                    "ap-southeast-1": {
                        description: "Asia Pacific (Singapore)"
                    },
                    "ap-southeast-2": {
                        description: "Asia Pacific (Sydney)"
                    },
                    "ap-southeast-3": {
                        description: "Asia Pacific (Jakarta)"
                    },
                    "ap-southeast-4": {
                        description: "Asia Pacific (Melbourne)"
                    },
                    "ap-southeast-5": {
                        description: "Asia Pacific (Malaysia)"
                    },
                    "ap-southeast-7": {
                        description: "Asia Pacific (Thailand)"
                    },
                    "aws-global": {
                        description: "AWS Standard global region"
                    },
                    "ca-central-1": {
                        description: "Canada (Central)"
                    },
                    "ca-west-1": {
                        description: "Canada West (Calgary)"
                    },
                    "eu-central-1": {
                        description: "Europe (Frankfurt)"
                    },
                    "eu-central-2": {
                        description: "Europe (Zurich)"
                    },
                    "eu-north-1": {
                        description: "Europe (Stockholm)"
                    },
                    "eu-south-1": {
                        description: "Europe (Milan)"
                    },
                    "eu-south-2": {
                        description: "Europe (Spain)"
                    },
                    "eu-west-1": {
                        description: "Europe (Ireland)"
                    },
                    "eu-west-2": {
                        description: "Europe (London)"
                    },
                    "eu-west-3": {
                        description: "Europe (Paris)"
                    },
                    "il-central-1": {
                        description: "Israel (Tel Aviv)"
                    },
                    "me-central-1": {
                        description: "Middle East (UAE)"
                    },
                    "me-south-1": {
                        description: "Middle East (Bahrain)"
                    },
                    "mx-central-1": {
                        description: "Mexico (Central)"
                    },
                    "sa-east-1": {
                        description: "South America (Sao Paulo)"
                    },
                    "us-east-1": {
                        description: "US East (N. Virginia)"
                    },
                    "us-east-2": {
                        description: "US East (Ohio)"
                    },
                    "us-west-1": {
                        description: "US West (N. California)"
                    },
                    "us-west-2": {
                        description: "US West (Oregon)"
                    }
                }
            }, {
                id: "aws-cn",
                outputs: {
                    dnsSuffix: "amazonaws.com.cn",
                    dualStackDnsSuffix: "api.amazonwebservices.com.cn",
                    implicitGlobalRegion: "cn-northwest-1",
                    name: "aws-cn",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^cn\\-\\w+\\-\\d+$",
                regions: {
                    "aws-cn-global": {
                        description: "AWS China global region"
                    },
                    "cn-north-1": {
                        description: "China (Beijing)"
                    },
                    "cn-northwest-1": {
                        description: "China (Ningxia)"
                    }
                }
            }, {
                id: "aws-us-gov",
                outputs: {
                    dnsSuffix: "amazonaws.com",
                    dualStackDnsSuffix: "api.aws",
                    implicitGlobalRegion: "us-gov-west-1",
                    name: "aws-us-gov",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
                regions: {
                    "aws-us-gov-global": {
                        description: "AWS GovCloud (US) global region"
                    },
                    "us-gov-east-1": {
                        description: "AWS GovCloud (US-East)"
                    },
                    "us-gov-west-1": {
                        description: "AWS GovCloud (US-West)"
                    }
                }
            }, {
                id: "aws-iso",
                outputs: {
                    dnsSuffix: "c2s.ic.gov",
                    dualStackDnsSuffix: "c2s.ic.gov",
                    implicitGlobalRegion: "us-iso-east-1",
                    name: "aws-iso",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
                regions: {
                    "aws-iso-global": {
                        description: "AWS ISO (US) global region"
                    },
                    "us-iso-east-1": {
                        description: "US ISO East"
                    },
                    "us-iso-west-1": {
                        description: "US ISO WEST"
                    }
                }
            }, {
                id: "aws-iso-b",
                outputs: {
                    dnsSuffix: "sc2s.sgov.gov",
                    dualStackDnsSuffix: "sc2s.sgov.gov",
                    implicitGlobalRegion: "us-isob-east-1",
                    name: "aws-iso-b",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
                regions: {
                    "aws-iso-b-global": {
                        description: "AWS ISOB (US) global region"
                    },
                    "us-isob-east-1": {
                        description: "US ISOB East (Ohio)"
                    }
                }
            }, {
                id: "aws-iso-e",
                outputs: {
                    dnsSuffix: "cloud.adc-e.uk",
                    dualStackDnsSuffix: "cloud.adc-e.uk",
                    implicitGlobalRegion: "eu-isoe-west-1",
                    name: "aws-iso-e",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
                regions: {
                    "aws-iso-e-global": {
                        description: "AWS ISOE (Europe) global region"
                    },
                    "eu-isoe-west-1": {
                        description: "EU ISOE West"
                    }
                }
            }, {
                id: "aws-iso-f",
                outputs: {
                    dnsSuffix: "csp.hci.ic.gov",
                    dualStackDnsSuffix: "csp.hci.ic.gov",
                    implicitGlobalRegion: "us-isof-south-1",
                    name: "aws-iso-f",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
                regions: {
                    "aws-iso-f-global": {
                        description: "AWS ISOF global region"
                    },
                    "us-isof-east-1": {
                        description: "US ISOF EAST"
                    },
                    "us-isof-south-1": {
                        description: "US ISOF SOUTH"
                    }
                }
            }, {
                id: "aws-eusc",
                outputs: {
                    dnsSuffix: "amazonaws.eu",
                    dualStackDnsSuffix: "amazonaws.eu",
                    implicitGlobalRegion: "eusc-de-east-1",
                    name: "aws-eusc",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
                regions: {
                    "eusc-de-east-1": {
                        description: "EU (Germany)"
                    }
                }
            }],
            version: "1.1"
        },
        ILQ = ZLQ,
        YLQ = "",
        JLQ = A6A((A) => {
            let {
                partitions: Q
            } = ILQ;
            for (let G of Q) {
                let {
                    regions: Z,
                    outputs: I
                } = G;
                for (let [Y, J] of Object.entries(Z))
                    if (Y === A) return {
                        ...I,
                        ...J
                    }
            }
            for (let G of Q) {
                let {
                    regionRegex: Z,
                    outputs: I
                } = G;
                if (new RegExp(Z).test(A)) return {
                    ...I
                }
            }
            let B = Q.find((G) => G.id === "aws");
            if (!B) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
            return {
                ...B.outputs
            }
        }, "partition"),
        WLQ = A6A((A, Q = "") => {
            ILQ = A, YLQ = Q
        }, "setPartitionInfo"),
        u98 = A6A(() => {
            WLQ(ZLQ, "")
        }, "useDefaultPartitionInfo"),
        m98 = A6A(() => YLQ, "getUserAgentPrefix"),
        XLQ = {
            isVirtualHostableS3Bucket: GLQ,
            parseArn: g98,
            partition: JLQ
        };
    MZ.customEndpointFunctions.aws = XLQ
});
var nr = U((cC7, nuA) => {
    var VLQ, KLQ, DLQ, HLQ, CLQ, ELQ, zLQ, ULQ, $LQ, wLQ, qLQ, NLQ, LLQ, luA, PO1, MLQ, OLQ, RLQ, B6A, TLQ, PLQ, jLQ, SLQ, _LQ, kLQ, yLQ, xLQ, vLQ, iuA, bLQ, fLQ, hLQ;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof nuA === "object" && typeof cC7 === "object") A(B(Q, B(cC7)));
        else A(B(Q));

        function B(G, Z) {
            if (G !== Q)
                if (typeof Object.create === "function") Object.defineProperty(G, "__esModule", {
                    value: !0
                });
                else G.__esModule = !0;
            return function(I, Y) {
                return G[I] = Z ? Z(I, Y) : Y
            }
        }
    })(function(A) {
        var Q = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(I, Y) {
            I.__proto__ = Y
        } || function(I, Y) {
            for (var J in Y)
                if (Object.prototype.hasOwnProperty.call(Y, J)) I[J] = Y[J]
        };
        VLQ = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }