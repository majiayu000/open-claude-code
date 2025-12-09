/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_011.js
 * 处理时间: 2025-12-09T03:37:24.016Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  1x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 11/61
 * Lines: 76277 - 77775 (1499 lines)
 * Original file: cli.js
 */

                ...G && {
                    accountId: G
                }
            };
            return (0, S_4.setCredentialFeature)(Z, "CREDENTIALS_PROCESS", "w"), Z
        }, "getValidatedProcessCredentials"),
        k_4 = Bw1(async (A, Q, B) => {
            let G = Q[A];
            if (Q[A]) {
                let Z = G.credential_process;
                if (Z !== void 0) {
                    let I = (0, j_4.promisify)(P_4.exec);
                    try {
                        let {
                            stdout: Y
                        } = await I(Z), J;
                        try {
                            J = JSON.parse(Y.trim())
                        } catch {
                            throw Error(`Profile ${A} credential_process returned invalid JSON.`)
                        }
                        return __4(A, J, Q)
                    } catch (Y) {
                        throw new Qw1.CredentialsProviderError(Y.message, {
                            logger: B
                        })
                    }
                } else throw new Qw1.CredentialsProviderError(`Profile ${A} did not contain credential_process.`, {
                    logger: B
                })
            } else throw new Qw1.CredentialsProviderError(`Profile ${A} could not be found in shared credentials file.`, {
                logger: B
            })
        }, "resolveProcessCredentials"),
        y_4 = Bw1((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
            let B = await (0, t5Q.parseKnownFiles)(A);
            return k_4((0, t5Q.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), B, A.logger)
        }, "fromProcess")
});
var Zw1 = U((FS) => {
    var x_4 = FS && FS.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        v_4 = FS && FS.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        b_4 = FS && FS.__importStar || function() {
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
                        if (G[Z] !== "default") x_4(B, Q, G[Z])
                }
                return v_4(B, Q), B
            }
        }();
    Object.defineProperty(FS, "__esModule", {
        value: !0
    });
    FS.fromWebToken = void 0;
    var f_4 = (A) => async (Q) => {
        A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
        let {
            roleArn: B,
            roleSessionName: G,
            webIdentityToken: Z,
            providerId: I,
            policyArns: Y,
            policy: J,
            durationSeconds: W
        } = A, {
            roleAssumerWithWebIdentity: X
        } = A;
        if (!X) {
            let {
                getDefaultRoleAssumerWithWebIdentity: F
            } = await Promise.resolve().then(() => b_4(Aw1()));
            X = F({
                ...A.clientConfig,
                credentialProviderLogger: A.logger,
                parentClientConfig: {
                    ...Q?.callerClientConfig,
                    ...A.parentClientConfig
                }
            }, A.clientPlugins)
        }
        return X({
            RoleArn: B,
            RoleSessionName: G ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: Z,
            ProviderId: I,
            PolicyArns: Y,
            Policy: J,
            DurationSeconds: W
        })
    };
    FS.fromWebToken = f_4
});
var Z3Q = U((B3Q) => {
    Object.defineProperty(B3Q, "__esModule", {
        value: !0
    });
    B3Q.fromTokenFile = void 0;
    var h_4 = lN(),
        g_4 = P2(),
        u_4 = UA("fs"),
        m_4 = Zw1(),
        Q3Q = "AWS_WEB_IDENTITY_TOKEN_FILE",
        d_4 = "AWS_ROLE_ARN",
        c_4 = "AWS_ROLE_SESSION_NAME",
        p_4 = (A = {}) => async () => {
            A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
            let Q = A?.webIdentityTokenFile ?? process.env[Q3Q],
                B = A?.roleArn ?? process.env[d_4],
                G = A?.roleSessionName ?? process.env[c_4];
            if (!Q || !B) throw new g_4.CredentialsProviderError("Web identity configuration not specified", {
                logger: A.logger
            });
            let Z = await (0, m_4.fromWebToken)({
                ...A,
                webIdentityToken: (0, u_4.readFileSync)(Q, {
                    encoding: "ascii"
                }),
                roleArn: B,
                roleSessionName: G
            })();
            if (Q === process.env[Q3Q])(0, h_4.setCredentialFeature)(Z, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
            return Z
        };
    B3Q.fromTokenFile = p_4
});
var Jw1 = U((RF7, DhA) => {
    var {
        defineProperty: I3Q,
        getOwnPropertyDescriptor: l_4,
        getOwnPropertyNames: i_4
    } = Object, n_4 = Object.prototype.hasOwnProperty, Iw1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of i_4(Q))
                if (!n_4.call(A, Z) && Z !== B) I3Q(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = l_4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Y3Q = (A, Q, B) => (Iw1(A, Q, "default"), B && Iw1(B, Q, "default")), a_4 = (A) => Iw1(I3Q({}, "__esModule", {
        value: !0
    }), A), Yw1 = {};
    DhA.exports = a_4(Yw1);
    Y3Q(Yw1, Z3Q(), DhA.exports);
    Y3Q(Yw1, Zw1(), DhA.exports)
});
var H3Q = U((TF7, D3Q) => {
    var {
        create: s_4,
        defineProperty: xDA,
        getOwnPropertyDescriptor: r_4,
        getOwnPropertyNames: o_4,
        getPrototypeOf: t_4
    } = Object, e_4 = Object.prototype.hasOwnProperty, LX = (A, Q) => xDA(A, "name", {
        value: Q,
        configurable: !0
    }), Ak4 = (A, Q) => {
        for (var B in Q) xDA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, F3Q = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of o_4(Q))
                if (!e_4.call(A, Z) && Z !== B) xDA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = r_4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Bd = (A, Q, B) => (B = A != null ? s_4(t_4(A)) : {}, F3Q(Q || !A || !A.__esModule ? xDA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), Qk4 = (A) => F3Q(xDA({}, "__esModule", {
        value: !0
    }), A), V3Q = {};
    Ak4(V3Q, {
        fromIni: () => Dk4
    });
    D3Q.exports = Qk4(V3Q);
    var Xw1 = NG(),
        Gd = lN(),
        yDA = P2(),
        Bk4 = LX((A, Q, B) => {
            let G = {
                EcsContainer: LX(async (Z) => {
                    let {
                        fromHttp: I
                    } = await Promise.resolve().then(() => Bd(lU1())), {
                        fromContainerMetadata: Y
                    } = await Promise.resolve().then(() => Bd(wF()));
                    return B?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => (0, yDA.chain)(I(Z ?? {}), Y(Z))().then(Ww1)
                }, "EcsContainer"),
                Ec2InstanceMetadata: LX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
                    let {
                        fromInstanceMetadata: I
                    } = await Promise.resolve().then(() => Bd(wF()));
                    return async () => I(Z)().then(Ww1)
                }, "Ec2InstanceMetadata"),
                Environment: LX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
                    let {
                        fromEnv: I
                    } = await Promise.resolve().then(() => Bd(fU1()));
                    return async () => I(Z)().then(Ww1)
                }, "Environment")
            };
            if (A in G) return G[A];
            else throw new yDA.CredentialsProviderError(`Unsupported credential source in profile ${Q}. Got ${A}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
                logger: B
            })
        }, "resolveCredentialSource"),
        Ww1 = LX((A) => (0, Gd.setCredentialFeature)(A, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), "setNamedProvider"),
        Gk4 = LX((A, {
            profile: Q = "default",
            logger: B
        } = {}) => {
            return Boolean(A) && typeof A === "object" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof A.external_id) > -1 && ["undefined", "string"].indexOf(typeof A.mfa_serial) > -1 && (Zk4(A, {
                profile: Q,
                logger: B
            }) || Ik4(A, {
                profile: Q,
                logger: B
            }))
        }, "isAssumeRoleProfile"),
        Zk4 = LX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.source_profile === "string" && typeof A.credential_source > "u";
            if (G) B?.debug?.(`    ${Q} isAssumeRoleWithSourceProfile source_profile=${A.source_profile}`);
            return G
        }, "isAssumeRoleWithSourceProfile"),
        Ik4 = LX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.credential_source === "string" && typeof A.source_profile > "u";
            if (G) B?.debug?.(`    ${Q} isCredentialSourceProfile credential_source=${A.credential_source}`);
            return G
        }, "isCredentialSourceProfile"),
        Yk4 = LX(async (A, Q, B, G = {}) => {
            B.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
            let Z = Q[A],
                {
                    source_profile: I,
                    region: Y
                } = Z;
            if (!B.roleAssumer) {
                let {
                    getDefaultRoleAssumer: W
                } = await Promise.resolve().then(() => Bd(Aw1()));
                B.roleAssumer = W({
                    ...B.clientConfig,
                    credentialProviderLogger: B.logger,
                    parentClientConfig: {
                        ...B?.parentClientConfig,
                        region: Y ?? B?.parentClientConfig?.region
                    }
                }, B.clientPlugins)
            }
            if (I && I in G) throw new yDA.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${(0,Xw1.getProfileName)(B)}. Profiles visited: ` + Object.keys(G).join(", "), {
                logger: B.logger
            });
            B.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${I?`source_profile=[${I}]`:`profile=[${A}]`}`);
            let J = I ? K3Q(I, Q, B, {
                ...G,
                [I]: !0
            }, J3Q(Q[I] ?? {})) : (await Bk4(Z.credential_source, A, B.logger)(B))();
            if (J3Q(Z)) return J.then((W) => (0, Gd.setCredentialFeature)(W, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
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
                    if (!B.mfaCodeProvider) throw new yDA.CredentialsProviderError(`Profile ${A} requires multi-factor authentication, but no MFA code callback was provided.`, {
                        logger: B.logger,
                        tryNextLink: !1
                    });
                    W.SerialNumber = X, W.TokenCode = await B.mfaCodeProvider(X)
                }
                let F = await J;
                return B.roleAssumer(F, W).then((V) => (0, Gd.setCredentialFeature)(V, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"))
            }
        }, "resolveAssumeRoleCredentials"),
        J3Q = LX((A) => {
            return !A.role_arn && !!A.credential_source
        }, "isCredentialSourceWithoutRoleArn"),
        Jk4 = LX((A) => Boolean(A) && typeof A === "object" && typeof A.credential_process === "string", "isProcessProfile"),
        Wk4 = LX(async (A, Q) => Promise.resolve().then(() => Bd(Gw1())).then(({
            fromProcess: B
        }) => B({
            ...A,
            profile: Q
        })().then((G) => (0, Gd.setCredentialFeature)(G, "CREDENTIALS_PROFILE_PROCESS", "v"))), "resolveProcessCredentials"),
        Xk4 = LX(async (A, Q, B = {}) => {
            let {
                fromSSO: G
            } = await Promise.resolve().then(() => Bd(H$1()));
            return G({
                profile: A,
                logger: B.logger,
                parentClientConfig: B.parentClientConfig,
                clientConfig: B.clientConfig
            })().then((Z) => {
                if (Q.sso_session) return (0, Gd.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO", "r");
                else return (0, Gd.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO_LEGACY", "t")
            })
        }, "resolveSsoCredentials"),
        Fk4 = LX((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        W3Q = LX((A) => Boolean(A) && typeof A === "object" && typeof A.aws_access_key_id === "string" && typeof A.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof A.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof A.aws_account_id) > -1, "isStaticCredsProfile"),
        X3Q = LX(async (A, Q) => {
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
            return (0, Gd.setCredentialFeature)(B, "CREDENTIALS_PROFILE", "n")
        }, "resolveStaticCredentials"),
        Vk4 = LX((A) => Boolean(A) && typeof A === "object" && typeof A.web_identity_token_file === "string" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1, "isWebIdentityProfile"),
        Kk4 = LX(async (A, Q) => Promise.resolve().then(() => Bd(Jw1())).then(({
            fromTokenFile: B
        }) => B({
            webIdentityTokenFile: A.web_identity_token_file,
            roleArn: A.role_arn,
            roleSessionName: A.role_session_name,
            roleAssumerWithWebIdentity: Q.roleAssumerWithWebIdentity,
            logger: Q.logger,
            parentClientConfig: Q.parentClientConfig
        })().then((G) => (0, Gd.setCredentialFeature)(G, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))), "resolveWebIdentityCredentials"),
        K3Q = LX(async (A, Q, B, G = {}, Z = !1) => {
            let I = Q[A];
            if (Object.keys(G).length > 0 && W3Q(I)) return X3Q(I, B);
            if (Z || Gk4(I, {
                    profile: A,
                    logger: B.logger
                })) return Yk4(A, Q, B, G);
            if (W3Q(I)) return X3Q(I, B);
            if (Vk4(I)) return Kk4(I, B);
            if (Jk4(I)) return Wk4(B, A);
            if (Fk4(I)) return await Xk4(A, I, B);
            throw new yDA.CredentialsProviderError(`Could not resolve credentials using profile: [${A}] in configuration/credentials file(s).`, {
                logger: B.logger
            })
        }, "resolveProfileData"),
        Dk4 = LX((A = {}) => async ({
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
            let G = await (0, Xw1.parseKnownFiles)(B);
            return K3Q((0, Xw1.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), G, B)
        }, "fromIni")
});
var N3Q = U((PF7, q3Q) => {
    var {
        create: Hk4,
        defineProperty: vDA,
        getOwnPropertyDescriptor: Ck4,
        getOwnPropertyNames: Ek4,
        getPrototypeOf: zk4
    } = Object, Uk4 = Object.prototype.hasOwnProperty, HhA = (A, Q) => vDA(A, "name", {
        value: Q,
        configurable: !0
    }), $k4 = (A, Q) => {
        for (var B in Q) vDA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, z3Q = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Ek4(Q))
                if (!Uk4.call(A, Z) && Z !== B) vDA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ck4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, i4A = (A, Q, B) => (B = A != null ? Hk4(zk4(A)) : {}, z3Q(Q || !A || !A.__esModule ? vDA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), wk4 = (A) => z3Q(vDA({}, "__esModule", {
        value: !0
    }), A), U3Q = {};
    $k4(U3Q, {
        credentialsTreatedAsExpired: () => w3Q,
        credentialsWillNeedRefresh: () => $3Q,
        defaultProvider: () => Lk4
    });
    q3Q.exports = wk4(U3Q);
    var Fw1 = fU1(),
        qk4 = NG(),
        Mr = P2(),
        C3Q = "AWS_EC2_METADATA_DISABLED",
        Nk4 = HhA(async (A) => {
            let {
                ENV_CMDS_FULL_URI: Q,
                ENV_CMDS_RELATIVE_URI: B,
                fromContainerMetadata: G,
                fromInstanceMetadata: Z
            } = await Promise.resolve().then(() => i4A(wF()));
            if (process.env[B] || process.env[Q]) {
                A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
                let {
                    fromHttp: I
                } = await Promise.resolve().then(() => i4A(lU1()));
                return (0, Mr.chain)(I(A), G(A))
            }
            if (process.env[C3Q] && process.env[C3Q] !== "false") return async () => {
                throw new Mr.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
                    logger: A.logger
                })
            };
            return A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), Z(A)
        }, "remoteProvider"),
        E3Q = !1,
        Lk4 = HhA((A = {}) => (0, Mr.memoize)((0, Mr.chain)(async () => {
            if (A.profile ?? process.env[qk4.ENV_PROFILE]) {
                if (process.env[Fw1.ENV_KEY] && process.env[Fw1.ENV_SECRET]) {
                    if (!E3Q)(A.logger?.warn && A.logger?.constructor?.name !== "NoOpLogger" ? A.logger.warn : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), E3Q = !0
                }
                throw new Mr.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                    logger: A.logger,
                    tryNextLink: !0
                })
            }
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), (0, Fw1.fromEnv)(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
            let {
                ssoStartUrl: Q,
                ssoAccountId: B,
                ssoRegion: G,
                ssoRoleName: Z,
                ssoSession: I
            } = A;
            if (!Q && !B && !G && !Z && !I) throw new Mr.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
                logger: A.logger
            });
            let {
                fromSSO: Y
            } = await Promise.resolve().then(() => i4A(H$1()));
            return Y(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
            let {
                fromIni: Q
            } = await Promise.resolve().then(() => i4A(H3Q()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
            let {
                fromProcess: Q
            } = await Promise.resolve().then(() => i4A(Gw1()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
            let {
                fromTokenFile: Q
            } = await Promise.resolve().then(() => i4A(Jw1()));
            return Q(A)()
        }, async () => {
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await Nk4(A))()
        }, async () => {
            throw new Mr.CredentialsProviderError("Could not load credentials from any providers", {
                tryNextLink: !1,
                logger: A.logger
            })
        }), w3Q, $3Q), "defaultProvider"),
        $3Q = HhA((A) => A?.expiration !== void 0, "credentialsWillNeedRefresh"),
        w3Q = HhA((A) => A?.expiration !== void 0 && A.expiration.getTime() - Date.now() < 300000, "credentialsTreatedAsExpired")
});
var i3Q = U((p3Q) => {
    Object.defineProperty(p3Q, "__esModule", {
        value: !0
    });
    p3Q.ruleSet = void 0;
    var x3Q = "required",
        k8 = "type",
        i3 = "fn",
        n3 = "argv",
        Id = "ref",
        L3Q = !1,
        Vw1 = !0,
        Zd = "booleanEquals",
        aK = "stringEquals",
        v3Q = "sigv4",
        b3Q = "sts",
        f3Q = "us-east-1",
        bI = "endpoint",
        M3Q = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        VS = "tree",
        n4A = "error",
        Dw1 = "getAttr",
        O3Q = {
            [x3Q]: !1,
            [k8]: "String"
        },
        Kw1 = {
            [x3Q]: !0,
            default: !1,
            [k8]: "Boolean"
        },
        h3Q = {
            [Id]: "Endpoint"
        },
        R3Q = {
            [i3]: "isSet",
            [n3]: [{
                [Id]: "Region"
            }]
        },
        sK = {
            [Id]: "Region"
        },
        T3Q = {
            [i3]: "aws.partition",
            [n3]: [sK],
            assign: "PartitionResult"
        },
        g3Q = {
            [Id]: "UseFIPS"
        },
        u3Q = {
            [Id]: "UseDualStack"
        },
        EH = {
            url: "https://sts.amazonaws.com",
            properties: {
                authSchemes: [{
                    name: v3Q,
                    signingName: b3Q,
                    signingRegion: f3Q
                }]
            },
            headers: {}
        },
        Xw = {},
        P3Q = {
            conditions: [{
                [i3]: aK,
                [n3]: [sK, "aws-global"]
            }],
            [bI]: EH,
            [k8]: bI
        },
        m3Q = {
            [i3]: Zd,
            [n3]: [g3Q, !0]
        },
        d3Q = {
            [i3]: Zd,
            [n3]: [u3Q, !0]
        },
        j3Q = {
            [i3]: Dw1,
            [n3]: [{
                [Id]: "PartitionResult"
            }, "supportsFIPS"]
        },
        c3Q = {
            [Id]: "PartitionResult"
        },
        S3Q = {
            [i3]: Zd,
            [n3]: [!0, {
                [i3]: Dw1,
                [n3]: [c3Q, "supportsDualStack"]
            }]
        },
        _3Q = [{
            [i3]: "isSet",
            [n3]: [h3Q]
        }],
        k3Q = [m3Q],
        y3Q = [d3Q],
        Mk4 = {
            version: "1.0",
            parameters: {
                Region: O3Q,
                UseDualStack: Kw1,
                UseFIPS: Kw1,
                Endpoint: O3Q,
                UseGlobalEndpoint: Kw1
            },
            rules: [{
                conditions: [{
                    [i3]: Zd,
                    [n3]: [{
                        [Id]: "UseGlobalEndpoint"
                    }, Vw1]
                }, {
                    [i3]: "not",
                    [n3]: _3Q
                }, R3Q, T3Q, {
                    [i3]: Zd,
                    [n3]: [g3Q, L3Q]
                }, {
                    [i3]: Zd,
                    [n3]: [u3Q, L3Q]
                }],
                rules: [{
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "ap-northeast-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "ap-south-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "ap-southeast-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "ap-southeast-2"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, P3Q, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "ca-central-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "eu-central-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "eu-north-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "eu-west-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "eu-west-2"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "eu-west-3"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "sa-east-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, f3Q]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "us-east-2"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "us-west-1"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    conditions: [{
                        [i3]: aK,
                        [n3]: [sK, "us-west-2"]
                    }],
                    endpoint: EH,
                    [k8]: bI
                }, {
                    endpoint: {
                        url: M3Q,
                        properties: {
                            authSchemes: [{
                                name: v3Q,
                                signingName: b3Q,
                                signingRegion: "{Region}"
                            }]
                        },
                        headers: Xw
                    },
                    [k8]: bI
                }],
                [k8]: VS
            }, {
                conditions: _3Q,
                rules: [{
                    conditions: k3Q,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    [k8]: n4A
                }, {
                    conditions: y3Q,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    [k8]: n4A
                }, {
                    endpoint: {
                        url: h3Q,
                        properties: Xw,
                        headers: Xw
                    },
                    [k8]: bI
                }],
                [k8]: VS
            }, {
                conditions: [R3Q],
                rules: [{
                    conditions: [T3Q],
                    rules: [{
                        conditions: [m3Q, d3Q],
                        rules: [{
                            conditions: [{
                                [i3]: Zd,
                                [n3]: [Vw1, j3Q]
                            }, S3Q],
                            rules: [{
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Xw,
                                    headers: Xw
                                },
                                [k8]: bI
                            }],
                            [k8]: VS
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            [k8]: n4A
                        }],
                        [k8]: VS
                    }, {
                        conditions: k3Q,
                        rules: [{
                            conditions: [{
                                [i3]: Zd,
                                [n3]: [j3Q, Vw1]
                            }],
                            rules: [{
                                conditions: [{
                                    [i3]: aK,
                                    [n3]: [{
                                        [i3]: Dw1,
                                        [n3]: [c3Q, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://sts.{Region}.amazonaws.com",
                                    properties: Xw,
                                    headers: Xw
                                },
                                [k8]: bI
                            }, {
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: Xw,
                                    headers: Xw
                                },
                                [k8]: bI
                            }],
                            [k8]: VS
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            [k8]: n4A
                        }],
                        [k8]: VS
                    }, {
                        conditions: y3Q,
                        rules: [{
                            conditions: [S3Q],
                            rules: [{
                                endpoint: {
                                    url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Xw,
                                    headers: Xw
                                },
                                [k8]: bI
                            }],
                            [k8]: VS
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            [k8]: n4A
                        }],
                        [k8]: VS
                    }, P3Q, {
                        endpoint: {
                            url: M3Q,
                            properties: Xw,
                            headers: Xw
                        },
                        [k8]: bI
                    }],
                    [k8]: VS
                }],
                [k8]: VS
            }, {
                error: "Invalid Configuration: Missing Region",
                [k8]: n4A
            }]
        };
    p3Q.ruleSet = Mk4
});
var s3Q = U((n3Q) => {
    Object.defineProperty(n3Q, "__esModule", {
        value: !0
    });
    n3Q.defaultEndpointResolver = void 0;
    var Ok4 = U4A(),
        Hw1 = II(),
        Rk4 = i3Q(),
        Tk4 = new Hw1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
        }),
        Pk4 = (A, Q = {}) => {
            return Tk4.get(A, () => (0, Hw1.resolveEndpoint)(Rk4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    n3Q.defaultEndpointResolver = Pk4;
    Hw1.customEndpointFunctions.aws = Ok4.awsEndpointFunctions
});
var A7Q = U((t3Q) => {
    Object.defineProperty(t3Q, "__esModule", {
        value: !0
    });
    t3Q.getRuntimeConfig = void 0;
    var jk4 = wV(),
        Sk4 = nB(),
        _k4 = W6(),
        kk4 = zJ(),
        r3Q = lm(),
        o3Q = L2(),
        yk4 = bU1(),
        xk4 = s3Q(),
        vk4 = (A) => {
            return {
                apiVersion: "2011-06-15",
                base64Decoder: A?.base64Decoder ?? r3Q.fromBase64,
                base64Encoder: A?.base64Encoder ?? r3Q.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? xk4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? yk4.defaultSTSHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new jk4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new Sk4.NoAuthSigner
                }],
                logger: A?.logger ?? new _k4.NoOpLogger,
                serviceId: A?.serviceId ?? "STS",
                urlParser: A?.urlParser ?? kk4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? o3Q.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? o3Q.toUtf8
            }
        };
    t3Q.getRuntimeConfig = vk4
});
var J7Q = U((I7Q) => {
    Object.defineProperty(I7Q, "__esModule", {
        value: !0
    });
    I7Q.getRuntimeConfig = void 0;
    var bk4 = Vr(),
        fk4 = bk4.__importDefault(S2Q()),
        Cw1 = wV(),
        Q7Q = N3Q(),
        B7Q = qDA(),
        ChA = S8(),
        hk4 = nB(),
        gk4 = wX(),
        G7Q = X6(),
        Or = xI(),
        Z7Q = oG(),
        uk4 = qX(),
        mk4 = FW(),
        dk4 = A7Q(),
        ck4 = W6(),
        pk4 = NX(),
        lk4 = W6(),
        ik4 = (A) => {
            (0, lk4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, pk4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(ck4.loadConfigsForDefaultMode),
                G = (0, dk4.getRuntimeConfig)(A);
            (0, Cw1.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, Or.loadConfig)(Cw1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? uk4.calculateBodyLength,
                credentialDefaultProvider: A?.credentialDefaultProvider ?? Q7Q.defaultProvider,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, B7Q.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: fk4.default.version
                }),
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (I) => I.getIdentityProvider("aws.auth#sigv4") || (async (Y) => await (0, Q7Q.defaultProvider)(Y?.__config || {})()),
                    signer: new Cw1.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (I) => I.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new hk4.NoAuthSigner
                }],
                maxAttempts: A?.maxAttempts ?? (0, Or.loadConfig)(G7Q.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, Or.loadConfig)(ChA.NODE_REGION_CONFIG_OPTIONS, {
                    ...ChA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: Z7Q.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, Or.loadConfig)({
                    ...G7Q.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || mk4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? gk4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? Z7Q.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, Or.loadConfig)(ChA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, Or.loadConfig)(ChA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, Or.loadConfig)(B7Q.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    I7Q.getRuntimeConfig = ik4
});
var F7Q = U((W7Q) => {
    Object.defineProperty(W7Q, "__esModule", {
        value: !0
    });
    W7Q.resolveHttpAuthRuntimeConfig = W7Q.getHttpAuthExtensionConfiguration = void 0;
    var nk4 = (A) => {
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
    W7Q.getHttpAuthExtensionConfiguration = nk4;
    var ak4 = (A) => {
        return {
            httpAuthSchemes: A.httpAuthSchemes(),
            httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
            credentials: A.credentials()
        }
    };
    W7Q.resolveHttpAuthRuntimeConfig = ak4
});
var z7Q = U((C7Q) => {
    Object.defineProperty(C7Q, "__esModule", {
        value: !0
    });
    C7Q.resolveRuntimeExtensions = void 0;
    var V7Q = MDA(),
        K7Q = cC(),
        D7Q = W6(),
        H7Q = F7Q(),
        rk4 = (A, Q) => {
            let B = Object.assign((0, V7Q.getAwsRegionExtensionConfiguration)(A), (0, D7Q.getDefaultExtensionConfiguration)(A), (0, K7Q.getHttpHandlerExtensionConfiguration)(A), (0, H7Q.getHttpAuthExtensionConfiguration)(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, V7Q.resolveAwsRegionExtensionConfiguration)(B), (0, D7Q.resolveDefaultRuntimeConfig)(B), (0, K7Q.resolveHttpHandlerRuntimeConfig)(B), (0, H7Q.resolveHttpAuthRuntimeConfig)(B))
        };
    C7Q.resolveRuntimeExtensions = rk4
});
var wDA = U((zw1) => {
    Object.defineProperty(zw1, "__esModule", {
        value: !0
    });
    zw1.STSClient = zw1.__Client = void 0;
    var U7Q = lKA(),
        ok4 = iKA(),
        tk4 = nKA(),
        $7Q = M4A(),
        ek4 = S8(),
        Ew1 = nB(),
        Ay4 = zX(),
        Qy4 = E5(),
        w7Q = X6(),
        N7Q = W6();
    Object.defineProperty(zw1, "__Client", {
        enumerable: !0,
        get: function() {
            return N7Q.Client
        }
    });
    var q7Q = bU1(),
        By4 = sN(),
        Gy4 = J7Q(),
        Zy4 = z7Q();
    class L7Q extends N7Q.Client {
        config;
        constructor(...[A]) {
            let Q = (0, Gy4.getRuntimeConfig)(A || {});
            super(Q);
            this.initConfig = Q;
            let B = (0, By4.resolveClientEndpointParameters)(Q),
                G = (0, $7Q.resolveUserAgentConfig)(B),
                Z = (0, w7Q.resolveRetryConfig)(G),
                I = (0, ek4.resolveRegionConfig)(Z),
                Y = (0, U7Q.resolveHostHeaderConfig)(I),
                J = (0, Qy4.resolveEndpointConfig)(Y),
                W = (0, q7Q.resolveHttpAuthSchemeConfig)(J),
                X = (0, Zy4.resolveRuntimeExtensions)(W, A?.extensions || []);
            this.config = X, this.middlewareStack.use((0, $7Q.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, w7Q.getRetryPlugin)(this.config)), this.middlewareStack.use((0, Ay4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, U7Q.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, ok4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, tk4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, Ew1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider: q7Q.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (F) => new Ew1.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": F.credentials
                })
            })), this.middlewareStack.use((0, Ew1.getHttpSigningPlugin)(this.config))
        }
        destroy() {
            super.destroy()
        }
    }
    zw1.STSClient = L7Q
});
var YGQ = U((fF7, ew1) => {
    var {
        defineProperty: EhA,
        getOwnPropertyDescriptor: Iy4,
        getOwnPropertyNames: Yy4
    } = Object, Jy4 = Object.prototype.hasOwnProperty, WQ = (A, Q) => EhA(A, "name", {
        value: Q,
        configurable: !0
    }), Wy4 = (A, Q) => {
        for (var B in Q) EhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, nw1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Yy4(Q))
                if (!Jy4.call(A, Z) && Z !== B) EhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Iy4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Xy4 = (A, Q, B) => (nw1(A, Q, "default"), B && nw1(B, Q, "default")), Fy4 = (A) => nw1(EhA({}, "__esModule", {
        value: !0
    }), A), sw1 = {};
    Wy4(sw1, {
        AssumeRoleCommand: () => ow1,
        AssumeRoleResponseFilterSensitiveLog: () => v7Q,
        AssumeRoleWithSAMLCommand: () => l7Q,
        AssumeRoleWithSAMLRequestFilterSensitiveLog: () => b7Q,
        AssumeRoleWithSAMLResponseFilterSensitiveLog: () => f7Q,
        AssumeRoleWithWebIdentityCommand: () => tw1,
        AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => h7Q,
        AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => g7Q,
        AssumeRootCommand: () => i7Q,
        AssumeRootResponseFilterSensitiveLog: () => u7Q,
        ClientInputEndpointParameters: () => fx4.ClientInputEndpointParameters,
        CredentialsFilterSensitiveLog: () => Rr,
        DecodeAuthorizationMessageCommand: () => n7Q,
        ExpiredTokenException: () => T7Q,
        GetAccessKeyInfoCommand: () => a7Q,
        GetCallerIdentityCommand: () => s7Q,
        GetFederationTokenCommand: () => r7Q,
        GetFederationTokenResponseFilterSensitiveLog: () => m7Q,
        GetSessionTokenCommand: () => o7Q,
        GetSessionTokenResponseFilterSensitiveLog: () => d7Q,
        IDPCommunicationErrorException: () => y7Q,
        IDPRejectedClaimException: () => _7Q,
        InvalidAuthorizationMessageException: () => x7Q,
        InvalidIdentityTokenException: () => k7Q,
        MalformedPolicyDocumentException: () => P7Q,
        PackedPolicyTooLargeException: () => j7Q,
        RegionDisabledException: () => S7Q,
        STS: () => t7Q,
        STSServiceException: () => KS,
        decorateDefaultCredentialProvider: () => ux4,
        getDefaultRoleAssumer: () => ZGQ,
        getDefaultRoleAssumerWithWebIdentity: () => IGQ
    });
    ew1.exports = Fy4(sw1);
    Xy4(sw1, wDA(), ew1.exports);
    var Mv = E5(),
        Ov = sG(),
        Vy4 = sN(),
        T2 = W6(),
        KS = class A extends T2.ServiceException {
            static {
                WQ(this, "STSServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        T7Q = class A extends KS {
            static {
                WQ(this, "ExpiredTokenException")
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
        P7Q = class A extends KS {
            static {
                WQ(this, "MalformedPolicyDocumentException")
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
        j7Q = class A extends KS {
            static {
                WQ(this, "PackedPolicyTooLargeException")
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
        S7Q = class A extends KS {
            static {
                WQ(this, "RegionDisabledException")
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
        _7Q = class A extends KS {
            static {
                WQ(this, "IDPRejectedClaimException")
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
        k7Q = class A extends KS {
            static {
                WQ(this, "InvalidIdentityTokenException")
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
        y7Q = class A extends KS {
            static {
                WQ(this, "IDPCommunicationErrorException")
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
        x7Q = class A extends KS {
            static {
                WQ(this, "InvalidAuthorizationMessageException")
            }
            name = "InvalidAuthorizationMessageException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "InvalidAuthorizationMessageException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        Rr = WQ((A) => ({
            ...A,
            ...A.SecretAccessKey && {
                SecretAccessKey: T2.SENSITIVE_STRING
            }
        }), "CredentialsFilterSensitiveLog"),
        v7Q = WQ((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: Rr(A.Credentials)
            }
        }), "AssumeRoleResponseFilterSensitiveLog"),
        b7Q = WQ((A) => ({
            ...A,
            ...A.SAMLAssertion && {
                SAMLAssertion: T2.SENSITIVE_STRING
            }
        }), "AssumeRoleWithSAMLRequestFilterSensitiveLog"),
        f7Q = WQ((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: Rr(A.Credentials)
            }
        }), "AssumeRoleWithSAMLResponseFilterSensitiveLog"),
        h7Q = WQ((A) => ({
            ...A,
            ...A.WebIdentityToken && {
                WebIdentityToken: T2.SENSITIVE_STRING
            }
        }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog"),
        g7Q = WQ((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: Rr(A.Credentials)
            }
        }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog"),
        u7Q = WQ((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: Rr(A.Credentials)
            }
        }), "AssumeRootResponseFilterSensitiveLog"),
        m7Q = WQ((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: Rr(A.Credentials)
            }
        }), "GetFederationTokenResponseFilterSensitiveLog"),
        d7Q = WQ((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: Rr(A.Credentials)
            }
        }), "GetSessionTokenResponseFilterSensitiveLog"),
        DS = wV(),
        Ky4 = cC(),
        Dy4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...gy4(A, Q),
                [Sv]: zx4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_AssumeRoleCommand"),
        Hy4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...uy4(A, Q),
                [Sv]: Ux4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_AssumeRoleWithSAMLCommand"),
        Cy4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...my4(A, Q),
                [Sv]: $x4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_AssumeRoleWithWebIdentityCommand"),
        Ey4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...dy4(A, Q),
                [Sv]: wx4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_AssumeRootCommand"),
        zy4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...cy4(A, Q),
                [Sv]: qx4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_DecodeAuthorizationMessageCommand"),
        Uy4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...py4(A, Q),
                [Sv]: Nx4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_GetAccessKeyInfoCommand"),
        $y4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...ly4(A, Q),
                [Sv]: Lx4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_GetCallerIdentityCommand"),
        wy4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...iy4(A, Q),
                [Sv]: Mx4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_GetFederationTokenCommand"),
        qy4 = WQ(async (A, Q) => {
            let B = Pv,
                G;
            return G = kv({
                ...ny4(A, Q),
                [Sv]: Ox4,
                [_v]: jv
            }), Tv(Q, B, "/", void 0, G)
        }, "se_GetSessionTokenCommand"),
        Ny4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = ty4(B.AssumeRoleResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_AssumeRoleCommand"),
        Ly4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = ey4(B.AssumeRoleWithSAMLResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_AssumeRoleWithSAMLCommand"),
        My4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};