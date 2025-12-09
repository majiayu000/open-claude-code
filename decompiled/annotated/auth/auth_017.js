/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_017.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (6次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 17/61
 * Lines: 88262 - 89713 (1452 lines)
 * Original file: cli.js
 */

            return G({
                profile: A,
                logger: B.logger,
                parentClientConfig: B.parentClientConfig,
                clientConfig: B.clientConfig
            })().then((Z) => {
                if (Q.sso_session) return (0, Hd.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO", "r");
                else return (0, Hd.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO_LEGACY", "t")
            })
        }, "resolveSsoCredentials"),
        fl4 = MX((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        lVQ = MX((A) => Boolean(A) && typeof A === "object" && typeof A.aws_access_key_id === "string" && typeof A.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof A.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof A.aws_account_id) > -1, "isStaticCredsProfile"),
        iVQ = MX(async (A, Q) => {
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
            return (0, Hd.setCredentialFeature)(B, "CREDENTIALS_PROFILE", "n")
        }, "resolveStaticCredentials"),
        hl4 = MX((A) => Boolean(A) && typeof A === "object" && typeof A.web_identity_token_file === "string" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1, "isWebIdentityProfile"),
        gl4 = MX(async (A, Q) => Promise.resolve().then(() => Dd(YL1())).then(({
            fromTokenFile: B
        }) => B({
            webIdentityTokenFile: A.web_identity_token_file,
            roleArn: A.role_arn,
            roleSessionName: A.role_session_name,
            roleAssumerWithWebIdentity: Q.roleAssumerWithWebIdentity,
            logger: Q.logger,
            parentClientConfig: Q.parentClientConfig
        })().then((G) => (0, Hd.setCredentialFeature)(G, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))), "resolveWebIdentityCredentials"),
        sVQ = MX(async (A, Q, B, G = {}, Z = !1) => {
            let I = Q[A];
            if (Object.keys(G).length > 0 && lVQ(I)) return iVQ(I, B);
            if (Z || Sl4(I, {
                    profile: A,
                    logger: B.logger
                })) return yl4(A, Q, B, G);
            if (lVQ(I)) return iVQ(I, B);
            if (hl4(I)) return gl4(I, B);
            if (xl4(I)) return vl4(B, A);
            if (fl4(I)) return await bl4(A, I, B);
            throw new QHA.CredentialsProviderError(`Could not resolve credentials using profile: [${A}] in configuration/credentials file(s).`, {
                logger: B.logger
            })
        }, "resolveProfileData"),
        ul4 = MX((A = {}) => async ({
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
            let G = await (0, WL1.parseKnownFiles)(B);
            return sVQ((0, WL1.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), G, B)
        }, "fromIni")
});
var IKQ = U((pK7, ZKQ) => {
    var {
        create: ml4,
        defineProperty: GHA,
        getOwnPropertyDescriptor: dl4,
        getOwnPropertyNames: cl4,
        getPrototypeOf: pl4
    } = Object, ll4 = Object.prototype.hasOwnProperty, wgA = (A, Q) => GHA(A, "name", {
        value: Q,
        configurable: !0
    }), il4 = (A, Q) => {
        for (var B in Q) GHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, AKQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of cl4(Q))
                if (!ll4.call(A, Z) && Z !== B) GHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = dl4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, P8A = (A, Q, B) => (B = A != null ? ml4(pl4(A)) : {}, AKQ(Q || !A || !A.__esModule ? GHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), nl4 = (A) => AKQ(GHA({}, "__esModule", {
        value: !0
    }), A), QKQ = {};
    il4(QKQ, {
        credentialsTreatedAsExpired: () => GKQ,
        credentialsWillNeedRefresh: () => BKQ,
        defaultProvider: () => rl4
    });
    ZKQ.exports = nl4(QKQ);
    var XL1 = pq1(),
        al4 = NG(),
        br = P2(),
        tVQ = "AWS_EC2_METADATA_DISABLED",
        sl4 = wgA(async (A) => {
            let {
                ENV_CMDS_FULL_URI: Q,
                ENV_CMDS_RELATIVE_URI: B,
                fromContainerMetadata: G,
                fromInstanceMetadata: Z
            } = await Promise.resolve().then(() => P8A(wF()));
            if (process.env[B] || process.env[Q]) {
                A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
                let {
                    fromHttp: I
                } = await Promise.resolve().then(() => P8A(nq1()));
                return (0, br.chain)(I(A), G(A))
            }
            if (process.env[tVQ] && process.env[tVQ] !== "false") return async () => {
                throw new br.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
                    logger: A.logger
                })
            };
            return A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), Z(A)
        }, "remoteProvider"),
        eVQ = !1,
        rl4 = wgA((A = {}) => (0, br.memoize)((0, br.chain)(async () => {
            if (A.profile ?? process.env[al4.ENV_PROFILE]) {
                if (process.env[XL1.ENV_KEY] && process.env[XL1.ENV_SECRET]) {
                    if (!eVQ)(A.logger?.warn && A.logger?.constructor?.name !== "NoOpLogger" ? A.logger.warn : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), eVQ = !0
                }
                throw new br.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                    logger: A.logger,
                    tryNextLink: !0
                })
            }
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), (0, XL1.fromEnv)(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
            let {
                ssoStartUrl: Q,
                ssoAccountId: B,
                ssoRegion: G,
                ssoRoleName: Z,
                ssoSession: I
            } = A;
            if (!Q && !B && !G && !Z && !I) throw new br.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
                logger: A.logger
            });
            let {
                fromSSO: Y
            } = await Promise.resolve().then(() => P8A(DN1()));
            return Y(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
            let {
                fromIni: Q
            } = await Promise.resolve().then(() => P8A(oVQ()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
            let {
                fromProcess: Q
            } = await Promise.resolve().then(() => P8A(BL1()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
            let {
                fromTokenFile: Q
            } = await Promise.resolve().then(() => P8A(YL1()));
            return Q(A)()
        }, async () => {
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await sl4(A))()
        }, async () => {
            throw new br.CredentialsProviderError("Could not load credentials from any providers", {
                tryNextLink: !1,
                logger: A.logger
            })
        }), GKQ, BKQ), "defaultProvider"),
        BKQ = wgA((A) => A?.expiration !== void 0, "credentialsWillNeedRefresh"),
        GKQ = wgA((A) => A?.expiration !== void 0 && A.expiration.getTime() - Date.now() < 300000, "credentialsTreatedAsExpired")
});
var NKQ = U((wKQ) => {
    Object.defineProperty(wKQ, "__esModule", {
        value: !0
    });
    wKQ.ruleSet = void 0;
    var EKQ = "required",
        UH = "fn",
        $H = "argv",
        S8A = "ref",
        YKQ = !0,
        JKQ = "isSet",
        YHA = "booleanEquals",
        j8A = "error",
        $S = "endpoint",
        mv = "tree",
        FL1 = "PartitionResult",
        VL1 = "getAttr",
        ZHA = "stringEquals",
        WKQ = {
            [EKQ]: !1,
            type: "String"
        },
        XKQ = {
            [EKQ]: !0,
            default: !1,
            type: "Boolean"
        },
        FKQ = {
            [S8A]: "Endpoint"
        },
        zKQ = {
            [UH]: YHA,
            [$H]: [{
                [S8A]: "UseFIPS"
            }, !0]
        },
        UKQ = {
            [UH]: YHA,
            [$H]: [{
                [S8A]: "UseDualStack"
            }, !0]
        },
        OX = {},
        IHA = {
            [S8A]: "Region"
        },
        VKQ = {
            [UH]: VL1,
            [$H]: [{
                [S8A]: FL1
            }, "supportsFIPS"]
        },
        $KQ = {
            [S8A]: FL1
        },
        KKQ = {
            [UH]: YHA,
            [$H]: [!0, {
                [UH]: VL1,
                [$H]: [$KQ, "supportsDualStack"]
            }]
        },
        DKQ = [zKQ],
        HKQ = [UKQ],
        CKQ = [IHA],
        ol4 = {
            version: "1.0",
            parameters: {
                Region: WKQ,
                UseDualStack: XKQ,
                UseFIPS: XKQ,
                Endpoint: WKQ
            },
            rules: [{
                conditions: [{
                    [UH]: JKQ,
                    [$H]: [FKQ]
                }],
                rules: [{
                    conditions: DKQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: j8A
                }, {
                    conditions: HKQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: j8A
                }, {
                    endpoint: {
                        url: FKQ,
                        properties: OX,
                        headers: OX
                    },
                    type: $S
                }],
                type: mv
            }, {
                conditions: [{
                    [UH]: JKQ,
                    [$H]: CKQ
                }],
                rules: [{
                    conditions: [{
                        [UH]: "aws.partition",
                        [$H]: CKQ,
                        assign: FL1
                    }],
                    rules: [{
                        conditions: [zKQ, UKQ],
                        rules: [{
                            conditions: [{
                                [UH]: YHA,
                                [$H]: [YKQ, VKQ]
                            }, KKQ],
                            rules: [{
                                conditions: [{
                                    [UH]: ZHA,
                                    [$H]: [IHA, "us-east-1"]
                                }],
                                endpoint: {
                                    url: "https://cognito-identity-fips.us-east-1.amazonaws.com",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }, {
                                conditions: [{
                                    [UH]: ZHA,
                                    [$H]: [IHA, "us-east-2"]
                                }],
                                endpoint: {
                                    url: "https://cognito-identity-fips.us-east-2.amazonaws.com",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }, {
                                conditions: [{
                                    [UH]: ZHA,
                                    [$H]: [IHA, "us-west-1"]
                                }],
                                endpoint: {
                                    url: "https://cognito-identity-fips.us-west-1.amazonaws.com",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }, {
                                conditions: [{
                                    [UH]: ZHA,
                                    [$H]: [IHA, "us-west-2"]
                                }],
                                endpoint: {
                                    url: "https://cognito-identity-fips.us-west-2.amazonaws.com",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }, {
                                endpoint: {
                                    url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }],
                            type: mv
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: j8A
                        }],
                        type: mv
                    }, {
                        conditions: DKQ,
                        rules: [{
                            conditions: [{
                                [UH]: YHA,
                                [$H]: [VKQ, YKQ]
                            }],
                            rules: [{
                                endpoint: {
                                    url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }],
                            type: mv
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: j8A
                        }],
                        type: mv
                    }, {
                        conditions: HKQ,
                        rules: [{
                            conditions: [KKQ],
                            rules: [{
                                conditions: [{
                                    [UH]: ZHA,
                                    [$H]: ["aws", {
                                        [UH]: VL1,
                                        [$H]: [$KQ, "name"]
                                    }]
                                }],
                                endpoint: {
                                    url: "https://cognito-identity.{Region}.amazonaws.com",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }, {
                                endpoint: {
                                    url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: OX,
                                    headers: OX
                                },
                                type: $S
                            }],
                            type: mv
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: j8A
                        }],
                        type: mv
                    }, {
                        endpoint: {
                            url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}",
                            properties: OX,
                            headers: OX
                        },
                        type: $S
                    }],
                    type: mv
                }],
                type: mv
            }, {
                error: "Invalid Configuration: Missing Region",
                type: j8A
            }]
        };
    wKQ.ruleSet = ol4
});
var OKQ = U((LKQ) => {
    Object.defineProperty(LKQ, "__esModule", {
        value: !0
    });
    LKQ.defaultEndpointResolver = void 0;
    var tl4 = Z8A(),
        KL1 = II(),
        el4 = NKQ(),
        Ai4 = new KL1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        Qi4 = (A, Q = {}) => {
            return Ai4.get(A, () => (0, KL1.resolveEndpoint)(el4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    LKQ.defaultEndpointResolver = Qi4;
    KL1.customEndpointFunctions.aws = tl4.awsEndpointFunctions
});
var SKQ = U((PKQ) => {
    Object.defineProperty(PKQ, "__esModule", {
        value: !0
    });
    PKQ.getRuntimeConfig = void 0;
    var Bi4 = LV(),
        Gi4 = nB(),
        Zi4 = p6(),
        Ii4 = zJ(),
        RKQ = Wd(),
        TKQ = L2(),
        Yi4 = cq1(),
        Ji4 = OKQ(),
        Wi4 = (A) => {
            return {
                apiVersion: "2014-06-30",
                base64Decoder: A?.base64Decoder ?? RKQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? RKQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? Ji4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? Yi4.defaultCognitoIdentityHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new Bi4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new Gi4.NoAuthSigner
                }],
                logger: A?.logger ?? new Zi4.NoOpLogger,
                serviceId: A?.serviceId ?? "Cognito Identity",
                urlParser: A?.urlParser ?? Ii4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? TKQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? TKQ.toUtf8
            }
        };
    PKQ.getRuntimeConfig = Wi4
});
var fKQ = U((vKQ) => {
    Object.defineProperty(vKQ, "__esModule", {
        value: !0
    });
    vKQ.getRuntimeConfig = void 0;
    var Xi4 = Pr(),
        Fi4 = Xi4.__importDefault(gYQ()),
        _KQ = LV(),
        Vi4 = IKQ(),
        kKQ = pDA(),
        qgA = S8(),
        Ki4 = wX(),
        yKQ = X6(),
        fr = xI(),
        xKQ = oG(),
        Di4 = qX(),
        Hi4 = FW(),
        Ci4 = SKQ(),
        Ei4 = p6(),
        zi4 = NX(),
        Ui4 = p6(),
        $i4 = (A) => {
            (0, Ui4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, zi4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(Ei4.loadConfigsForDefaultMode),
                G = (0, Ci4.getRuntimeConfig)(A);
            (0, _KQ.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, fr.loadConfig)(_KQ.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? Di4.calculateBodyLength,
                credentialDefaultProvider: A?.credentialDefaultProvider ?? Vi4.defaultProvider,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, kKQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: Fi4.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, fr.loadConfig)(yKQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, fr.loadConfig)(qgA.NODE_REGION_CONFIG_OPTIONS, {
                    ...qgA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: xKQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, fr.loadConfig)({
                    ...yKQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || Hi4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? Ki4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? xKQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, fr.loadConfig)(qgA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, fr.loadConfig)(qgA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, fr.loadConfig)(kKQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    vKQ.getRuntimeConfig = $i4
});
var vDQ = U((sK7, xDQ) => {
    var {
        defineProperty: LgA,
        getOwnPropertyDescriptor: wi4,
        getOwnPropertyNames: qi4
    } = Object, Ni4 = Object.prototype.hasOwnProperty, g0 = (A, Q) => LgA(A, "name", {
        value: Q,
        configurable: !0
    }), Li4 = (A, Q) => {
        for (var B in Q) LgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Mi4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of qi4(Q))
                if (!Ni4.call(A, Z) && Z !== B) LgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = wi4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Oi4 = (A) => Mi4(LgA({}, "__esModule", {
        value: !0
    }), A), cKQ = {};
    Li4(cKQ, {
        AmbiguousRoleResolutionType: () => vi4,
        CognitoIdentity: () => yDQ,
        CognitoIdentityClient: () => HL1,
        CognitoIdentityServiceException: () => Dw,
        ConcurrentModificationException: () => ADQ,
        CreateIdentityPoolCommand: () => VDQ,
        CredentialsFilterSensitiveLog: () => BDQ,
        DeleteIdentitiesCommand: () => KDQ,
        DeleteIdentityPoolCommand: () => DDQ,
        DescribeIdentityCommand: () => HDQ,
        DescribeIdentityPoolCommand: () => CDQ,
        DeveloperUserAlreadyRegisteredException: () => eKQ,
        ErrorCode: () => bi4,
        ExternalServiceException: () => oKQ,
        GetCredentialsForIdentityCommand: () => EDQ,
        GetCredentialsForIdentityInputFilterSensitiveLog: () => QDQ,
        GetCredentialsForIdentityResponseFilterSensitiveLog: () => GDQ,
        GetIdCommand: () => zDQ,
        GetIdInputFilterSensitiveLog: () => ZDQ,
        GetIdentityPoolRolesCommand: () => UDQ,
        GetOpenIdTokenCommand: () => $DQ,
        GetOpenIdTokenForDeveloperIdentityCommand: () => wDQ,
        GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog: () => JDQ,
        GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog: () => WDQ,
        GetOpenIdTokenInputFilterSensitiveLog: () => IDQ,
        GetOpenIdTokenResponseFilterSensitiveLog: () => YDQ,
        GetPrincipalTagAttributeMapCommand: () => qDQ,
        InternalErrorException: () => pKQ,
        InvalidIdentityPoolConfigurationException: () => tKQ,
        InvalidParameterException: () => lKQ,
        LimitExceededException: () => iKQ,
        ListIdentitiesCommand: () => NDQ,
        ListIdentityPoolsCommand: () => CL1,
        ListTagsForResourceCommand: () => LDQ,
        LookupDeveloperIdentityCommand: () => MDQ,
        MappingRuleMatchType: () => fi4,
        MergeDeveloperIdentitiesCommand: () => ODQ,
        NotAuthorizedException: () => nKQ,
        ResourceConflictException: () => aKQ,
        ResourceNotFoundException: () => rKQ,
        RoleMappingType: () => hi4,
        SetIdentityPoolRolesCommand: () => RDQ,
        SetPrincipalTagAttributeMapCommand: () => TDQ,
        TagResourceCommand: () => PDQ,
        TooManyRequestsException: () => sKQ,
        UnlinkDeveloperIdentityCommand: () => jDQ,
        UnlinkIdentityCommand: () => SDQ,
        UnlinkIdentityInputFilterSensitiveLog: () => XDQ,
        UntagResourceCommand: () => _DQ,
        UpdateIdentityPoolCommand: () => kDQ,
        __Client: () => b0.Client,
        paginateListIdentityPools: () => an4
    });
    xDQ.exports = Oi4(cKQ);
    var hKQ = bDA(),
        Ri4 = fDA(),
        Ti4 = hDA(),
        gKQ = F8A(),
        Pi4 = S8(),
        NgA = nB(),
        ji4 = zX(),
        gI = E5(),
        uKQ = X6(),
        mKQ = cq1(),
        Si4 = g0((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "cognito-identity"
            })
        }, "resolveClientEndpointParameters"),
        xY = {
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
        },
        _i4 = fKQ(),
        dKQ = iDA(),
        DL1 = cz(),
        b0 = p6(),
        ki4 = g0((A) => {
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
        }, "getHttpAuthExtensionConfiguration"),
        yi4 = g0((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        xi4 = g0((A, Q) => {
            let B = Object.assign((0, dKQ.getAwsRegionExtensionConfiguration)(A), (0, b0.getDefaultExtensionConfiguration)(A), (0, DL1.getHttpHandlerExtensionConfiguration)(A), ki4(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, dKQ.resolveAwsRegionExtensionConfiguration)(B), (0, b0.resolveDefaultRuntimeConfig)(B), (0, DL1.resolveHttpHandlerRuntimeConfig)(B), yi4(B))
        }, "resolveRuntimeExtensions"),
        HL1 = class extends b0.Client {
            static {
                g0(this, "CognitoIdentityClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, _i4.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = Si4(Q),
                    G = (0, gKQ.resolveUserAgentConfig)(B),
                    Z = (0, uKQ.resolveRetryConfig)(G),
                    I = (0, Pi4.resolveRegionConfig)(Z),
                    Y = (0, hKQ.resolveHostHeaderConfig)(I),
                    J = (0, gI.resolveEndpointConfig)(Y),
                    W = (0, mKQ.resolveHttpAuthSchemeConfig)(J),
                    X = xi4(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, gKQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, uKQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, ji4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, hKQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, Ri4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, Ti4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, NgA.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: mKQ.defaultCognitoIdentityHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: g0(async (F) => new NgA.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, NgA.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        vY = sG(),
        HW = LV(),
        Dw = class A extends b0.ServiceException {
            static {
                g0(this, "CognitoIdentityServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        vi4 = {
            AUTHENTICATED_ROLE: "AuthenticatedRole",
            DENY: "Deny"
        },
        pKQ = class A extends Dw {
            static {
                g0(this, "InternalErrorException")
            }
            name = "InternalErrorException";
            $fault = "server";
            constructor(Q) {
                super({
                    name: "InternalErrorException",
                    $fault: "server",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        lKQ = class A extends Dw {
            static {
                g0(this, "InvalidParameterException")
            }
            name = "InvalidParameterException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "InvalidParameterException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        iKQ = class A extends Dw {
            static {
                g0(this, "LimitExceededException")
            }
            name = "LimitExceededException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "LimitExceededException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        nKQ = class A extends Dw {
            static {
                g0(this, "NotAuthorizedException")
            }
            name = "NotAuthorizedException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "NotAuthorizedException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        aKQ = class A extends Dw {
            static {
                g0(this, "ResourceConflictException")
            }
            name = "ResourceConflictException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ResourceConflictException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        sKQ = class A extends Dw {
            static {
                g0(this, "TooManyRequestsException")
            }
            name = "TooManyRequestsException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "TooManyRequestsException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        bi4 = {
            ACCESS_DENIED: "AccessDenied",
            INTERNAL_SERVER_ERROR: "InternalServerError"
        },
        rKQ = class A extends Dw {
            static {
                g0(this, "ResourceNotFoundException")
            }
            name = "ResourceNotFoundException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ResourceNotFoundException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        oKQ = class A extends Dw {
            static {
                g0(this, "ExternalServiceException")
            }
            name = "ExternalServiceException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ExternalServiceException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        tKQ = class A extends Dw {
            static {
                g0(this, "InvalidIdentityPoolConfigurationException")
            }
            name = "InvalidIdentityPoolConfigurationException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "InvalidIdentityPoolConfigurationException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        fi4 = {
            CONTAINS: "Contains",
            EQUALS: "Equals",
            NOT_EQUAL: "NotEqual",
            STARTS_WITH: "StartsWith"
        },
        hi4 = {
            RULES: "Rules",
            TOKEN: "Token"
        },
        eKQ = class A extends Dw {
            static {
                g0(this, "DeveloperUserAlreadyRegisteredException")
            }
            name = "DeveloperUserAlreadyRegisteredException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "DeveloperUserAlreadyRegisteredException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        ADQ = class A extends Dw {
            static {
                g0(this, "ConcurrentModificationException")
            }
            name = "ConcurrentModificationException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ConcurrentModificationException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        QDQ = g0((A) => ({
            ...A,
            ...A.Logins && {
                Logins: b0.SENSITIVE_STRING
            }
        }), "GetCredentialsForIdentityInputFilterSensitiveLog"),
        BDQ = g0((A) => ({
            ...A,
            ...A.SecretKey && {
                SecretKey: b0.SENSITIVE_STRING
            }
        }), "CredentialsFilterSensitiveLog"),
        GDQ = g0((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: BDQ(A.Credentials)
            }
        }), "GetCredentialsForIdentityResponseFilterSensitiveLog"),
        ZDQ = g0((A) => ({
            ...A,
            ...A.Logins && {
                Logins: b0.SENSITIVE_STRING
            }
        }), "GetIdInputFilterSensitiveLog"),
        IDQ = g0((A) => ({
            ...A,
            ...A.Logins && {
                Logins: b0.SENSITIVE_STRING
            }
        }), "GetOpenIdTokenInputFilterSensitiveLog"),
        YDQ = g0((A) => ({
            ...A,
            ...A.Token && {
                Token: b0.SENSITIVE_STRING
            }
        }), "GetOpenIdTokenResponseFilterSensitiveLog"),
        JDQ = g0((A) => ({
            ...A,
            ...A.Logins && {
                Logins: b0.SENSITIVE_STRING
            }
        }), "GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog"),
        WDQ = g0((A) => ({
            ...A,
            ...A.Token && {
                Token: b0.SENSITIVE_STRING
            }
        }), "GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog"),
        XDQ = g0((A) => ({
            ...A,
            ...A.Logins && {
                Logins: b0.SENSITIVE_STRING
            }
        }), "UnlinkIdentityInputFilterSensitiveLog"),
        gi4 = g0(async (A, Q) => {
            let B = uI("CreateIdentityPool"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_CreateIdentityPoolCommand"),
        ui4 = g0(async (A, Q) => {
            let B = uI("DeleteIdentities"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_DeleteIdentitiesCommand"),
        mi4 = g0(async (A, Q) => {
            let B = uI("DeleteIdentityPool"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_DeleteIdentityPoolCommand"),
        di4 = g0(async (A, Q) => {
            let B = uI("DescribeIdentity"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_DescribeIdentityCommand"),
        ci4 = g0(async (A, Q) => {
            let B = uI("DescribeIdentityPool"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_DescribeIdentityPoolCommand"),
        pi4 = g0(async (A, Q) => {
            let B = uI("GetCredentialsForIdentity"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_GetCredentialsForIdentityCommand"),
        li4 = g0(async (A, Q) => {
            let B = uI("GetId"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_GetIdCommand"),
        ii4 = g0(async (A, Q) => {
            let B = uI("GetIdentityPoolRoles"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_GetIdentityPoolRolesCommand"),
        ni4 = g0(async (A, Q) => {
            let B = uI("GetOpenIdToken"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_GetOpenIdTokenCommand"),
        ai4 = g0(async (A, Q) => {
            let B = uI("GetOpenIdTokenForDeveloperIdentity"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_GetOpenIdTokenForDeveloperIdentityCommand"),
        si4 = g0(async (A, Q) => {
            let B = uI("GetPrincipalTagAttributeMap"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_GetPrincipalTagAttributeMapCommand"),
        ri4 = g0(async (A, Q) => {
            let B = uI("ListIdentities"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_ListIdentitiesCommand"),
        oi4 = g0(async (A, Q) => {
            let B = uI("ListIdentityPools"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_ListIdentityPoolsCommand"),
        ti4 = g0(async (A, Q) => {
            let B = uI("ListTagsForResource"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_ListTagsForResourceCommand"),
        ei4 = g0(async (A, Q) => {
            let B = uI("LookupDeveloperIdentity"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_LookupDeveloperIdentityCommand"),
        An4 = g0(async (A, Q) => {
            let B = uI("MergeDeveloperIdentities"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_MergeDeveloperIdentitiesCommand"),
        Qn4 = g0(async (A, Q) => {
            let B = uI("SetIdentityPoolRoles"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_SetIdentityPoolRolesCommand"),
        Bn4 = g0(async (A, Q) => {
            let B = uI("SetPrincipalTagAttributeMap"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_SetPrincipalTagAttributeMapCommand"),
        Gn4 = g0(async (A, Q) => {
            let B = uI("TagResource"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_TagResourceCommand"),
        Zn4 = g0(async (A, Q) => {
            let B = uI("UnlinkDeveloperIdentity"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_UnlinkDeveloperIdentityCommand"),
        In4 = g0(async (A, Q) => {
            let B = uI("UnlinkIdentity"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_UnlinkIdentityCommand"),
        Yn4 = g0(async (A, Q) => {
            let B = uI("UntagResource"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_UntagResourceCommand"),
        Jn4 = g0(async (A, Q) => {
            let B = uI("UpdateIdentityPool"),
                G;
            return G = JSON.stringify((0, b0._json)(A)), fY(Q, B, "/", void 0, G)
        }, "se_UpdateIdentityPoolCommand"),
        Wn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_CreateIdentityPoolCommand"),
        Xn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_DeleteIdentitiesCommand"),
        Fn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            return await (0, b0.collectBody)(A.body, Q), {
                $metadata: e5(A)
            }
        }, "de_DeleteIdentityPoolCommand"),
        Vn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = FDQ(B, Q), {
                $metadata: e5(A),
                ...G
            }
        }, "de_DescribeIdentityCommand"),
        Kn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_DescribeIdentityPoolCommand"),
        Dn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = cn4(B, Q), {
                $metadata: e5(A),
                ...G
            }
        }, "de_GetCredentialsForIdentityCommand"),
        Hn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_GetIdCommand"),
        Cn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_GetIdentityPoolRolesCommand"),
        En4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_GetOpenIdTokenCommand"),
        zn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_GetOpenIdTokenForDeveloperIdentityCommand"),
        Un4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_GetPrincipalTagAttributeMapCommand"),
        $n4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = ln4(B, Q), {
                $metadata: e5(A),
                ...G
            }
        }, "de_ListIdentitiesCommand"),
        wn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_ListIdentityPoolsCommand"),
        qn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_ListTagsForResourceCommand"),
        Nn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_LookupDeveloperIdentityCommand"),
        Ln4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_MergeDeveloperIdentitiesCommand"),
        Mn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            return await (0, b0.collectBody)(A.body, Q), {
                $metadata: e5(A)
            }
        }, "de_SetIdentityPoolRolesCommand"),
        On4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_SetPrincipalTagAttributeMapCommand"),
        Rn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_TagResourceCommand"),
        Tn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            return await (0, b0.collectBody)(A.body, Q), {
                $metadata: e5(A)
            }
        }, "de_UnlinkDeveloperIdentityCommand"),
        Pn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            return await (0, b0.collectBody)(A.body, Q), {
                $metadata: e5(A)
            }
        }, "de_UnlinkIdentityCommand"),
        jn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_UntagResourceCommand"),
        Sn4 = g0(async (A, Q) => {
            if (A.statusCode >= 300) return bY(A, Q);
            let B = await (0, HW.parseJsonBody)(A.body, Q),
                G = {};
            return G = (0, b0._json)(B), {
                $metadata: e5(A),
                ...G
            }
        }, "de_UpdateIdentityPoolCommand"),
        bY = g0(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, HW.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, HW.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "InternalErrorException":
                case "com.amazonaws.cognitoidentity#InternalErrorException":
                    throw await xn4(B, Q);
                case "InvalidParameterException":
                case "com.amazonaws.cognitoidentity#InvalidParameterException":
                    throw await bn4(B, Q);
                case "LimitExceededException":
                case "com.amazonaws.cognitoidentity#LimitExceededException":
                    throw await fn4(B, Q);
                case "NotAuthorizedException":
                case "com.amazonaws.cognitoidentity#NotAuthorizedException":
                    throw await hn4(B, Q);
                case "ResourceConflictException":
                case "com.amazonaws.cognitoidentity#ResourceConflictException":
                    throw await gn4(B, Q);
                case "TooManyRequestsException":
                case "com.amazonaws.cognitoidentity#TooManyRequestsException":
                    throw await mn4(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
                    throw await un4(B, Q);
                case "ExternalServiceException":
                case "com.amazonaws.cognitoidentity#ExternalServiceException":
                    throw await yn4(B, Q);
                case "InvalidIdentityPoolConfigurationException":
                case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
                    throw await vn4(B, Q);
                case "DeveloperUserAlreadyRegisteredException":
                case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
                    throw await kn4(B, Q);
                case "ConcurrentModificationException":
                case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
                    throw await _n4(B, Q);
                default:
                    let Z = B.body;
                    return in4({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        _n4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new ADQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_ConcurrentModificationExceptionRes"),
        kn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new eKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_DeveloperUserAlreadyRegisteredExceptionRes"),
        yn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new oKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_ExternalServiceExceptionRes"),
        xn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new pKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_InternalErrorExceptionRes"),
        vn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new tKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_InvalidIdentityPoolConfigurationExceptionRes"),
        bn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new lKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_InvalidParameterExceptionRes"),
        fn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new iKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_LimitExceededExceptionRes"),
        hn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new nKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_NotAuthorizedExceptionRes"),
        gn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new aKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_ResourceConflictExceptionRes"),
        un4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new rKQ({
                    $metadata: e5(A),
                    ...G
                });
            return (0, b0.decorateServiceException)(Z, B)
        }, "de_ResourceNotFoundExceptionRes"),
        mn4 = g0(async (A, Q) => {
            let B = A.body,
                G = (0, b0._json)(B),
                Z = new sKQ({
                    $metadata: e5(A),
                    ...G
                });