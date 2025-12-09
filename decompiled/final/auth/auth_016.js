/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_016.js
 * 处理时间: 2025-12-09T03:41:36.512Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  3x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 16/61
 * Lines: 86763 - 88261 (1499 lines)
 * Original file: cli.js
 */

                        headers: Kw
                    },
                    [y8]: hI
                }],
                [y8]: zS
            }, {
                conditions: KFQ,
                rules: [{
                    conditions: DFQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    [y8]: $8A
                }, {
                    conditions: HFQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    [y8]: $8A
                }, {
                    endpoint: {
                        url: $FQ,
                        properties: Kw,
                        headers: Kw
                    },
                    [y8]: hI
                }],
                [y8]: zS
            }, {
                conditions: [JFQ],
                rules: [{
                    conditions: [WFQ],
                    rules: [{
                        conditions: [NFQ, LFQ],
                        rules: [{
                            conditions: [{
                                [a3]: Vd,
                                [s3]: [EN1, FFQ]
                            }, VFQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Kw,
                                    headers: Kw
                                },
                                [y8]: hI
                            }],
                            [y8]: zS
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            [y8]: $8A
                        }],
                        [y8]: zS
                    }, {
                        conditions: DFQ,
                        rules: [{
                            conditions: [{
                                [a3]: Vd,
                                [s3]: [FFQ, EN1]
                            }],
                            rules: [{
                                conditions: [{
                                    [a3]: tK,
                                    [s3]: [{
                                        [a3]: UN1,
                                        [s3]: [MFQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://sts.{Region}.amazonaws.com",
                                    properties: Kw,
                                    headers: Kw
                                },
                                [y8]: hI
                            }, {
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: Kw,
                                    headers: Kw
                                },
                                [y8]: hI
                            }],
                            [y8]: zS
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            [y8]: $8A
                        }],
                        [y8]: zS
                    }, {
                        conditions: HFQ,
                        rules: [{
                            conditions: [VFQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Kw,
                                    headers: Kw
                                },
                                [y8]: hI
                            }],
                            [y8]: zS
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            [y8]: $8A
                        }],
                        [y8]: zS
                    }, XFQ, {
                        endpoint: {
                            url: IFQ,
                            properties: Kw,
                            headers: Kw
                        },
                        [y8]: hI
                    }],
                    [y8]: zS
                }],
                [y8]: zS
            }, {
                error: "Invalid Configuration: Missing Region",
                [y8]: $8A
            }]
        };
    OFQ.ruleSet = Dc4
});
var SFQ = U((PFQ) => {
    Object.defineProperty(PFQ, "__esModule", {
        value: !0
    });
    PFQ.defaultEndpointResolver = void 0;
    var Hc4 = Z8A(),
        $N1 = II(),
        Cc4 = TFQ(),
        Ec4 = new $N1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
        }),
        zc4 = (A, Q = {}) => {
            return Ec4.get(A, () => (0, $N1.resolveEndpoint)(Cc4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    PFQ.defaultEndpointResolver = zc4;
    $N1.customEndpointFunctions.aws = Hc4.awsEndpointFunctions
});
var vFQ = U((yFQ) => {
    Object.defineProperty(yFQ, "__esModule", {
        value: !0
    });
    yFQ.getRuntimeConfig = void 0;
    var Uc4 = LV(),
        $c4 = nB(),
        wc4 = p6(),
        qc4 = zJ(),
        _FQ = Wd(),
        kFQ = L2(),
        Nc4 = CN1(),
        Lc4 = SFQ(),
        Mc4 = (A) => {
            return {
                apiVersion: "2011-06-15",
                base64Decoder: A?.base64Decoder ?? _FQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? _FQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? Lc4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? Nc4.defaultSTSHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new Uc4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new $c4.NoAuthSigner
                }],
                logger: A?.logger ?? new wc4.NoOpLogger,
                serviceId: A?.serviceId ?? "STS",
                urlParser: A?.urlParser ?? qc4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? kFQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? kFQ.toUtf8
            }
        };
    yFQ.getRuntimeConfig = Mc4
});
var mFQ = U((gFQ) => {
    Object.defineProperty(gFQ, "__esModule", {
        value: !0
    });
    gFQ.getRuntimeConfig = void 0;
    var Oc4 = Pr(),
        Rc4 = Oc4.__importDefault(ZN1()),
        wN1 = LV(),
        bFQ = pDA(),
        EgA = S8(),
        Tc4 = nB(),
        Pc4 = wX(),
        fFQ = X6(),
        vr = xI(),
        hFQ = oG(),
        jc4 = qX(),
        Sc4 = FW(),
        _c4 = vFQ(),
        kc4 = p6(),
        yc4 = NX(),
        xc4 = p6(),
        vc4 = (A) => {
            (0, xc4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, yc4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(kc4.loadConfigsForDefaultMode),
                G = (0, _c4.getRuntimeConfig)(A);
            (0, wN1.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, vr.loadConfig)(wN1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? jc4.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, bFQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: Rc4.default.version
                }),
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (I) => I.getIdentityProvider("aws.auth#sigv4") || (async (Y) => await A.credentialDefaultProvider(Y?.__config || {})()),
                    signer: new wN1.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (I) => I.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new Tc4.NoAuthSigner
                }],
                maxAttempts: A?.maxAttempts ?? (0, vr.loadConfig)(fFQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, vr.loadConfig)(EgA.NODE_REGION_CONFIG_OPTIONS, {
                    ...EgA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: hFQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, vr.loadConfig)({
                    ...fFQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || Sc4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? Pc4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? hFQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, vr.loadConfig)(EgA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, vr.loadConfig)(EgA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, vr.loadConfig)(bFQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    gFQ.getRuntimeConfig = vc4
});
var pFQ = U((dFQ) => {
    Object.defineProperty(dFQ, "__esModule", {
        value: !0
    });
    dFQ.resolveHttpAuthRuntimeConfig = dFQ.getHttpAuthExtensionConfiguration = void 0;
    var bc4 = (A) => {
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
    dFQ.getHttpAuthExtensionConfiguration = bc4;
    var fc4 = (A) => {
        return {
            httpAuthSchemes: A.httpAuthSchemes(),
            httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
            credentials: A.credentials()
        }
    };
    dFQ.resolveHttpAuthRuntimeConfig = fc4
});
var oFQ = U((sFQ) => {
    Object.defineProperty(sFQ, "__esModule", {
        value: !0
    });
    sFQ.resolveRuntimeExtensions = void 0;
    var lFQ = iDA(),
        iFQ = cz(),
        nFQ = p6(),
        aFQ = pFQ(),
        gc4 = (A, Q) => {
            let B = Object.assign((0, lFQ.getAwsRegionExtensionConfiguration)(A), (0, nFQ.getDefaultExtensionConfiguration)(A), (0, iFQ.getHttpHandlerExtensionConfiguration)(A), (0, aFQ.getHttpAuthExtensionConfiguration)(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, lFQ.resolveAwsRegionExtensionConfiguration)(B), (0, nFQ.resolveDefaultRuntimeConfig)(B), (0, iFQ.resolveHttpHandlerRuntimeConfig)(B), (0, aFQ.resolveHttpAuthRuntimeConfig)(B))
        };
    sFQ.resolveRuntimeExtensions = gc4
});
var eDA = U((NN1) => {
    Object.defineProperty(NN1, "__esModule", {
        value: !0
    });
    NN1.STSClient = NN1.__Client = void 0;
    var tFQ = bDA(),
        uc4 = fDA(),
        mc4 = hDA(),
        eFQ = F8A(),
        dc4 = S8(),
        qN1 = nB(),
        cc4 = zX(),
        pc4 = E5(),
        AVQ = X6(),
        BVQ = p6();
    Object.defineProperty(NN1, "__Client", {
        enumerable: !0,
        get: function() {
            return BVQ.Client
        }
    });
    var QVQ = CN1(),
        lc4 = AHA(),
        ic4 = mFQ(),
        nc4 = oFQ();
    class GVQ extends BVQ.Client {
        config;
        constructor(...[A]) {
            let Q = (0, ic4.getRuntimeConfig)(A || {});
            super(Q);
            this.initConfig = Q;
            let B = (0, lc4.resolveClientEndpointParameters)(Q),
                G = (0, eFQ.resolveUserAgentConfig)(B),
                Z = (0, AVQ.resolveRetryConfig)(G),
                I = (0, dc4.resolveRegionConfig)(Z),
                Y = (0, tFQ.resolveHostHeaderConfig)(I),
                J = (0, pc4.resolveEndpointConfig)(Y),
                W = (0, QVQ.resolveHttpAuthSchemeConfig)(J),
                X = (0, nc4.resolveRuntimeExtensions)(W, A?.extensions || []);
            this.config = X, this.middlewareStack.use((0, eFQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, AVQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, cc4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, tFQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, uc4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, mc4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, qN1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider: QVQ.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (F) => new qN1.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": F.credentials
                })
            })), this.middlewareStack.use((0, qN1.getHttpSigningPlugin)(this.config))
        }
        destroy() {
            super.destroy()
        }
    }
    NN1.STSClient = GVQ
});
var eN1 = U((vK7, tN1) => {
    var {
        defineProperty: zgA,
        getOwnPropertyDescriptor: ac4,
        getOwnPropertyNames: sc4
    } = Object, rc4 = Object.prototype.hasOwnProperty, S2 = (A, Q) => zgA(A, "name", {
        value: Q,
        configurable: !0
    }), oc4 = (A, Q) => {
        for (var B in Q) zgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, lN1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of sc4(Q))
                if (!rc4.call(A, Z) && Z !== B) zgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ac4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, tc4 = (A, Q, B) => (lN1(A, Q, "default"), B && lN1(B, Q, "default")), ec4 = (A) => lN1(zgA({}, "__esModule", {
        value: !0
    }), A), nN1 = {};
    oc4(nN1, {
        AssumeRoleCommand: () => rN1,
        AssumeRoleResponseFilterSensitiveLog: () => JVQ,
        AssumeRoleWithWebIdentityCommand: () => oN1,
        AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => HVQ,
        AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => CVQ,
        ClientInputEndpointParameters: () => lp4.ClientInputEndpointParameters,
        CredentialsFilterSensitiveLog: () => aN1,
        ExpiredTokenException: () => WVQ,
        IDPCommunicationErrorException: () => EVQ,
        IDPRejectedClaimException: () => KVQ,
        InvalidIdentityTokenException: () => DVQ,
        MalformedPolicyDocumentException: () => XVQ,
        PackedPolicyTooLargeException: () => FVQ,
        RegionDisabledException: () => VVQ,
        STS: () => TVQ,
        STSServiceException: () => gv,
        decorateDefaultCredentialProvider: () => ap4,
        getDefaultRoleAssumer: () => yVQ,
        getDefaultRoleAssumerWithWebIdentity: () => xVQ
    });
    tN1.exports = ec4(nN1);
    tc4(nN1, eDA(), tN1.exports);
    var Ap4 = p6(),
        Qp4 = E5(),
        Bp4 = sG(),
        Gp4 = p6(),
        Zp4 = AHA(),
        YVQ = p6(),
        Ip4 = p6(),
        gv = class A extends Ip4.ServiceException {
            static {
                S2(this, "STSServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        aN1 = S2((A) => ({
            ...A,
            ...A.SecretAccessKey && {
                SecretAccessKey: YVQ.SENSITIVE_STRING
            }
        }), "CredentialsFilterSensitiveLog"),
        JVQ = S2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: aN1(A.Credentials)
            }
        }), "AssumeRoleResponseFilterSensitiveLog"),
        WVQ = class A extends gv {
            static {
                S2(this, "ExpiredTokenException")
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
        XVQ = class A extends gv {
            static {
                S2(this, "MalformedPolicyDocumentException")
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
        FVQ = class A extends gv {
            static {
                S2(this, "PackedPolicyTooLargeException")
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
        VVQ = class A extends gv {
            static {
                S2(this, "RegionDisabledException")
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
        KVQ = class A extends gv {
            static {
                S2(this, "IDPRejectedClaimException")
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
        DVQ = class A extends gv {
            static {
                S2(this, "InvalidIdentityTokenException")
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
        HVQ = S2((A) => ({
            ...A,
            ...A.WebIdentityToken && {
                WebIdentityToken: YVQ.SENSITIVE_STRING
            }
        }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog"),
        CVQ = S2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: aN1(A.Credentials)
            }
        }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog"),
        EVQ = class A extends gv {
            static {
                S2(this, "IDPCommunicationErrorException")
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
        sN1 = LV(),
        Yp4 = cz(),
        H7 = p6(),
        Jp4 = S2(async (A, Q) => {
            let B = NVQ,
                G;
            return G = RVQ({
                ...Up4(A, Q),
                [MVQ]: bp4,
                [OVQ]: LVQ
            }), qVQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleCommand"),
        Wp4 = S2(async (A, Q) => {
            let B = NVQ,
                G;
            return G = RVQ({
                ...$p4(A, Q),
                [MVQ]: fp4,
                [OVQ]: LVQ
            }), qVQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleWithWebIdentityCommand"),
        Xp4 = S2(async (A, Q) => {
            if (A.statusCode >= 300) return zVQ(A, Q);
            let B = await (0, sN1.parseXmlBody)(A.body, Q),
                G = {};
            return G = Rp4(B.AssumeRoleResult, Q), {
                $metadata: uv(A),
                ...G
            }
        }, "de_AssumeRoleCommand"),
        Fp4 = S2(async (A, Q) => {
            if (A.statusCode >= 300) return zVQ(A, Q);
            let B = await (0, sN1.parseXmlBody)(A.body, Q),
                G = {};
            return G = Tp4(B.AssumeRoleWithWebIdentityResult, Q), {
                $metadata: uv(A),
                ...G
            }
        }, "de_AssumeRoleWithWebIdentityCommand"),
        zVQ = S2(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, sN1.parseXmlErrorBody)(A.body, Q)
                },
                G = hp4(A, B.body);
            switch (G) {
                case "ExpiredTokenException":
                case "com.amazonaws.sts#ExpiredTokenException":
                    throw await Vp4(B, Q);
                case "MalformedPolicyDocument":
                case "com.amazonaws.sts#MalformedPolicyDocumentException":
                    throw await Cp4(B, Q);
                case "PackedPolicyTooLarge":
                case "com.amazonaws.sts#PackedPolicyTooLargeException":
                    throw await Ep4(B, Q);
                case "RegionDisabledException":
                case "com.amazonaws.sts#RegionDisabledException":
                    throw await zp4(B, Q);
                case "IDPCommunicationError":
                case "com.amazonaws.sts#IDPCommunicationErrorException":
                    throw await Kp4(B, Q);
                case "IDPRejectedClaim":
                case "com.amazonaws.sts#IDPRejectedClaimException":
                    throw await Dp4(B, Q);
                case "InvalidIdentityToken":
                case "com.amazonaws.sts#InvalidIdentityTokenException":
                    throw await Hp4(B, Q);
                default:
                    let Z = B.body;
                    return vp4({
                        output: A,
                        parsedBody: Z.Error,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        Vp4 = S2(async (A, Q) => {
            let B = A.body,
                G = Pp4(B.Error, Q),
                Z = new WVQ({
                    $metadata: uv(A),
                    ...G
                });
            return (0, H7.decorateServiceException)(Z, B)
        }, "de_ExpiredTokenExceptionRes"),
        Kp4 = S2(async (A, Q) => {
            let B = A.body,
                G = jp4(B.Error, Q),
                Z = new EVQ({
                    $metadata: uv(A),
                    ...G
                });
            return (0, H7.decorateServiceException)(Z, B)
        }, "de_IDPCommunicationErrorExceptionRes"),
        Dp4 = S2(async (A, Q) => {
            let B = A.body,
                G = Sp4(B.Error, Q),
                Z = new KVQ({
                    $metadata: uv(A),
                    ...G
                });
            return (0, H7.decorateServiceException)(Z, B)
        }, "de_IDPRejectedClaimExceptionRes"),
        Hp4 = S2(async (A, Q) => {
            let B = A.body,
                G = _p4(B.Error, Q),
                Z = new DVQ({
                    $metadata: uv(A),
                    ...G
                });
            return (0, H7.decorateServiceException)(Z, B)
        }, "de_InvalidIdentityTokenExceptionRes"),
        Cp4 = S2(async (A, Q) => {
            let B = A.body,
                G = kp4(B.Error, Q),
                Z = new XVQ({
                    $metadata: uv(A),
                    ...G
                });
            return (0, H7.decorateServiceException)(Z, B)
        }, "de_MalformedPolicyDocumentExceptionRes"),
        Ep4 = S2(async (A, Q) => {
            let B = A.body,
                G = yp4(B.Error, Q),
                Z = new FVQ({
                    $metadata: uv(A),
                    ...G
                });
            return (0, H7.decorateServiceException)(Z, B)
        }, "de_PackedPolicyTooLargeExceptionRes"),
        zp4 = S2(async (A, Q) => {
            let B = A.body,
                G = xp4(B.Error, Q),
                Z = new VVQ({
                    $metadata: uv(A),
                    ...G
                });
            return (0, H7.decorateServiceException)(Z, B)
        }, "de_RegionDisabledExceptionRes"),
        Up4 = S2((A, Q) => {
            let B = {};
            if (A[R8A] != null) B[R8A] = A[R8A];
            if (A[T8A] != null) B[T8A] = A[T8A];
            if (A[M8A] != null) {
                let G = UVQ(A[M8A], Q);
                if (A[M8A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[L8A] != null) B[L8A] = A[L8A];
            if (A[N8A] != null) B[N8A] = A[N8A];
            if (A[gN1] != null) {
                let G = Op4(A[gN1], Q);
                if (A[gN1]?.length === 0) B.Tags = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `Tags.${Z}`;
                    B[Y] = I
                })
            }
            if (A[mN1] != null) {
                let G = Mp4(A[mN1], Q);
                if (A[mN1]?.length === 0) B.TransitiveTagKeys = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `TransitiveTagKeys.${Z}`;
                    B[Y] = I
                })
            }
            if (A[jN1] != null) B[jN1] = A[jN1];
            if (A[fN1] != null) B[fN1] = A[fN1];
            if (A[uN1] != null) B[uN1] = A[uN1];
            if (A[hv] != null) B[hv] = A[hv];
            if (A[kN1] != null) {
                let G = Np4(A[kN1], Q);
                if (A[kN1]?.length === 0) B.ProvidedContexts = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `ProvidedContexts.${Z}`;
                    B[Y] = I
                })
            }
            return B
        }, "se_AssumeRoleRequest"),
        $p4 = S2((A, Q) => {
            let B = {};
            if (A[R8A] != null) B[R8A] = A[R8A];
            if (A[T8A] != null) B[T8A] = A[T8A];
            if (A[cN1] != null) B[cN1] = A[cN1];
            if (A[yN1] != null) B[yN1] = A[yN1];
            if (A[M8A] != null) {
                let G = UVQ(A[M8A], Q);
                if (A[M8A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[L8A] != null) B[L8A] = A[L8A];
            if (A[N8A] != null) B[N8A] = A[N8A];
            return B
        }, "se_AssumeRoleWithWebIdentityRequest"),
        UVQ = S2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = wp4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_policyDescriptorListType"),
        wp4 = S2((A, Q) => {
            let B = {};
            if (A[pN1] != null) B[pN1] = A[pN1];
            return B
        }, "se_PolicyDescriptorType"),
        qp4 = S2((A, Q) => {
            let B = {};
            if (A[_N1] != null) B[_N1] = A[_N1];
            if (A[TN1] != null) B[TN1] = A[TN1];
            return B
        }, "se_ProvidedContext"),
        Np4 = S2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = qp4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_ProvidedContextsListType"),
        Lp4 = S2((A, Q) => {
            let B = {};
            if (A[SN1] != null) B[SN1] = A[SN1];
            if (A[dN1] != null) B[dN1] = A[dN1];
            return B
        }, "se_Tag"),
        Mp4 = S2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                B[`member.${G}`] = Z, G++
            }
            return B
        }, "se_tagKeyListType"),
        Op4 = S2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = Lp4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_tagListType"),
        $VQ = S2((A, Q) => {
            let B = {};
            if (A[MN1] != null) B[MN1] = (0, H7.expectString)(A[MN1]);
            if (A[ON1] != null) B[ON1] = (0, H7.expectString)(A[ON1]);
            return B
        }, "de_AssumedRoleUser"),
        Rp4 = S2((A, Q) => {
            let B = {};
            if (A[q8A] != null) B[q8A] = wVQ(A[q8A], Q);
            if (A[w8A] != null) B[w8A] = $VQ(A[w8A], Q);
            if (A[O8A] != null) B[O8A] = (0, H7.strictParseInt32)(A[O8A]);
            if (A[hv] != null) B[hv] = (0, H7.expectString)(A[hv]);
            return B
        }, "de_AssumeRoleResponse"),
        Tp4 = S2((A, Q) => {
            let B = {};
            if (A[q8A] != null) B[q8A] = wVQ(A[q8A], Q);
            if (A[bN1] != null) B[bN1] = (0, H7.expectString)(A[bN1]);
            if (A[w8A] != null) B[w8A] = $VQ(A[w8A], Q);
            if (A[O8A] != null) B[O8A] = (0, H7.strictParseInt32)(A[O8A]);
            if (A[xN1] != null) B[xN1] = (0, H7.expectString)(A[xN1]);
            if (A[RN1] != null) B[RN1] = (0, H7.expectString)(A[RN1]);
            if (A[hv] != null) B[hv] = (0, H7.expectString)(A[hv]);
            return B
        }, "de_AssumeRoleWithWebIdentityResponse"),
        wVQ = S2((A, Q) => {
            let B = {};
            if (A[LN1] != null) B[LN1] = (0, H7.expectString)(A[LN1]);
            if (A[vN1] != null) B[vN1] = (0, H7.expectString)(A[vN1]);
            if (A[hN1] != null) B[hN1] = (0, H7.expectString)(A[hN1]);
            if (A[PN1] != null) B[PN1] = (0, H7.expectNonNull)((0, H7.parseRfc3339DateTimeWithOffset)(A[PN1]));
            return B
        }, "de_Credentials"),
        Pp4 = S2((A, Q) => {
            let B = {};
            if (A[DW] != null) B[DW] = (0, H7.expectString)(A[DW]);
            return B
        }, "de_ExpiredTokenException"),
        jp4 = S2((A, Q) => {
            let B = {};
            if (A[DW] != null) B[DW] = (0, H7.expectString)(A[DW]);
            return B
        }, "de_IDPCommunicationErrorException"),
        Sp4 = S2((A, Q) => {
            let B = {};
            if (A[DW] != null) B[DW] = (0, H7.expectString)(A[DW]);
            return B
        }, "de_IDPRejectedClaimException"),
        _p4 = S2((A, Q) => {
            let B = {};
            if (A[DW] != null) B[DW] = (0, H7.expectString)(A[DW]);
            return B
        }, "de_InvalidIdentityTokenException"),
        kp4 = S2((A, Q) => {
            let B = {};
            if (A[DW] != null) B[DW] = (0, H7.expectString)(A[DW]);
            return B
        }, "de_MalformedPolicyDocumentException"),
        yp4 = S2((A, Q) => {
            let B = {};
            if (A[DW] != null) B[DW] = (0, H7.expectString)(A[DW]);
            return B
        }, "de_PackedPolicyTooLargeException"),
        xp4 = S2((A, Q) => {
            let B = {};
            if (A[DW] != null) B[DW] = (0, H7.expectString)(A[DW]);
            return B
        }, "de_RegionDisabledException"),
        uv = S2((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        vp4 = (0, H7.withBaseException)(gv),
        qVQ = S2(async (A, Q, B, G, Z) => {
            let {
                hostname: I,
                protocol: Y = "https",
                port: J,
                path: W
            } = await A.endpoint(), X = {
                protocol: Y,
                hostname: I,
                port: J,
                method: "POST",
                path: W.endsWith("/") ? W.slice(0, -1) + B : W + B,
                headers: Q
            };
            if (G !== void 0) X.hostname = G;
            if (Z !== void 0) X.body = Z;
            return new Yp4.HttpRequest(X)
        }, "buildHttpRpcRequest"),
        NVQ = {
            "content-type": "application/x-www-form-urlencoded"
        },
        LVQ = "2011-06-15",
        MVQ = "Action",
        LN1 = "AccessKeyId",
        bp4 = "AssumeRole",
        MN1 = "AssumedRoleId",
        w8A = "AssumedRoleUser",
        fp4 = "AssumeRoleWithWebIdentity",
        ON1 = "Arn",
        RN1 = "Audience",
        q8A = "Credentials",
        TN1 = "ContextAssertion",
        N8A = "DurationSeconds",
        PN1 = "Expiration",
        jN1 = "ExternalId",
        SN1 = "Key",
        L8A = "Policy",
        M8A = "PolicyArns",
        _N1 = "ProviderArn",
        kN1 = "ProvidedContexts",
        yN1 = "ProviderId",
        O8A = "PackedPolicySize",
        xN1 = "Provider",
        R8A = "RoleArn",
        T8A = "RoleSessionName",
        vN1 = "SecretAccessKey",
        bN1 = "SubjectFromWebIdentityToken",
        hv = "SourceIdentity",
        fN1 = "SerialNumber",
        hN1 = "SessionToken",
        gN1 = "Tags",
        uN1 = "TokenCode",
        mN1 = "TransitiveTagKeys",
        OVQ = "Version",
        dN1 = "Value",
        cN1 = "WebIdentityToken",
        pN1 = "arn",
        DW = "message",
        RVQ = S2((A) => Object.entries(A).map(([Q, B]) => (0, H7.extendedEncodeURIComponent)(Q) + "=" + (0, H7.extendedEncodeURIComponent)(B)).join("&"), "buildFormUrlencodedString"),
        hp4 = S2((A, Q) => {
            if (Q.Error?.Code !== void 0) return Q.Error.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadQueryErrorCode"),
        rN1 = class extends Gp4.Command.classBuilder().ep(Zp4.commonParams).m(function(A, Q, B, G) {
            return [(0, Bp4.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Qp4.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, JVQ).ser(Jp4).de(Xp4).build() {
            static {
                S2(this, "AssumeRoleCommand")
            }
        },
        gp4 = E5(),
        up4 = sG(),
        mp4 = p6(),
        dp4 = AHA(),
        oN1 = class extends mp4.Command.classBuilder().ep(dp4.commonParams).m(function(A, Q, B, G) {
            return [(0, up4.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gp4.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(HVQ, CVQ).ser(Wp4).de(Fp4).build() {
            static {
                S2(this, "AssumeRoleWithWebIdentityCommand")
            }
        },
        cp4 = eDA(),
        pp4 = {
            AssumeRoleCommand: rN1,
            AssumeRoleWithWebIdentityCommand: oN1
        },
        TVQ = class extends cp4.STSClient {
            static {
                S2(this, "STS")
            }
        };
    (0, Ap4.createAggregatedClient)(pp4, TVQ);
    var lp4 = AHA(),
        iN1 = yR(),
        IVQ = "us-east-1",
        PVQ = S2((A) => {
            if (typeof A?.Arn === "string") {
                let Q = A.Arn.split(":");
                if (Q.length > 4 && Q[4] !== "") return Q[4]
            }
            return
        }, "getAccountIdFromAssumedRoleUser"),
        jVQ = S2(async (A, Q, B) => {
            let G = typeof A === "function" ? await A() : A,
                Z = typeof Q === "function" ? await Q() : Q;
            return B?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${G} (provider)`, `${Z} (parent client)`, `${IVQ} (STS default)`), G ?? Z ?? IVQ
        }, "resolveRegion"),
        ip4 = S2((A, Q) => {
            let B, G;
            return async (Z, I) => {
                if (G = Z, !B) {
                    let {
                        logger: F = A?.parentClientConfig?.logger,
                        region: V,
                        requestHandler: K = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: D
                    } = A, H = await jVQ(V, A?.parentClientConfig?.region, D), C = !SVQ(K);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        credentialDefaultProvider: S2(() => async () => G, "credentialDefaultProvider"),
                        region: H,
                        requestHandler: C ? K : void 0,
                        logger: F
                    })
                }
                let {
                    Credentials: Y,
                    AssumedRoleUser: J
                } = await B.send(new rN1(I));
                if (!Y || !Y.AccessKeyId || !Y.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${I.RoleArn}`);
                let W = PVQ(J),
                    X = {
                        accessKeyId: Y.AccessKeyId,
                        secretAccessKey: Y.SecretAccessKey,
                        sessionToken: Y.SessionToken,
                        expiration: Y.Expiration,
                        ...Y.CredentialScope && {
                            credentialScope: Y.CredentialScope
                        },
                        ...W && {
                            accountId: W
                        }
                    };
                return (0, iN1.setCredentialFeature)(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X
            }
        }, "getDefaultRoleAssumer"),
        np4 = S2((A, Q) => {
            let B;
            return async (G) => {
                if (!B) {
                    let {
                        logger: W = A?.parentClientConfig?.logger,
                        region: X,
                        requestHandler: F = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: V
                    } = A, K = await jVQ(X, A?.parentClientConfig?.region, V), D = !SVQ(F);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        region: K,
                        requestHandler: D ? F : void 0,
                        logger: W
                    })
                }
                let {
                    Credentials: Z,
                    AssumedRoleUser: I
                } = await B.send(new oN1(G));
                if (!Z || !Z.AccessKeyId || !Z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${G.RoleArn}`);
                let Y = PVQ(I),
                    J = {
                        accessKeyId: Z.AccessKeyId,
                        secretAccessKey: Z.SecretAccessKey,
                        sessionToken: Z.SessionToken,
                        expiration: Z.Expiration,
                        ...Z.CredentialScope && {
                            credentialScope: Z.CredentialScope
                        },
                        ...Y && {
                            accountId: Y
                        }
                    };
                if (Y)(0, iN1.setCredentialFeature)(J, "RESOLVED_ACCOUNT_ID", "T");
                return (0, iN1.setCredentialFeature)(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J
            }
        }, "getDefaultRoleAssumerWithWebIdentity"),
        SVQ = S2((A) => {
            return A?.metadata?.handlerProtocol === "h2"
        }, "isH2"),
        _VQ = eDA(),
        kVQ = S2((A, Q) => {
            if (!Q) return A;
            else return class extends A {
                static {
                    S2(this, "CustomizableSTSClient")
                }
                constructor(G) {
                    super(G);
                    for (let Z of Q) this.middlewareStack.use(Z)
                }
            }
        }, "getCustomizableStsClientCtor"),
        yVQ = S2((A = {}, Q) => ip4(A, kVQ(_VQ.STSClient, Q)), "getDefaultRoleAssumer"),
        xVQ = S2((A = {}, Q) => np4(A, kVQ(_VQ.STSClient, Q)), "getDefaultRoleAssumerWithWebIdentity"),
        ap4 = S2((A) => (Q) => A({
            roleAssumer: yVQ(Q),
            roleAssumerWithWebIdentity: xVQ(Q),
            ...Q
        }), "decorateDefaultCredentialProvider")
});
var BL1 = U((gK7, fVQ) => {
    var {
        defineProperty: UgA,
        getOwnPropertyDescriptor: sp4,
        getOwnPropertyNames: rp4
    } = Object, op4 = Object.prototype.hasOwnProperty, QL1 = (A, Q) => UgA(A, "name", {
        value: Q,
        configurable: !0
    }), tp4 = (A, Q) => {
        for (var B in Q) UgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ep4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of rp4(Q))
                if (!op4.call(A, Z) && Z !== B) UgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = sp4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Al4 = (A) => ep4(UgA({}, "__esModule", {
        value: !0
    }), A), bVQ = {};
    tp4(bVQ, {
        fromProcess: () => Yl4
    });
    fVQ.exports = Al4(bVQ);
    var vVQ = NG(),
        AL1 = P2(),
        Ql4 = UA("child_process"),
        Bl4 = UA("util"),
        Gl4 = yR(),
        Zl4 = QL1((A, Q, B) => {
            if (Q.Version !== 1) throw Error(`Profile ${A} credential_process did not return Version 1.`);
            if (Q.AccessKeyId === void 0 || Q.SecretAccessKey === void 0) throw Error(`Profile ${A} credential_process returned invalid credentials.`);
            if (Q.Expiration) {
                let I = new Date;
                if (new Date(Q.Expiration) < I) throw Error(`Profile ${A} credential_process returned expired credentials.`)
            }
            let G = Q.AccountId;
            if (!G && B?.[A]?.aws_account_id) G = B[A].aws_account_id;
            let Z = {
                accessKeyId: Q.AccessKeyId,
                secretAccessKey: Q.SecretAccessKey,
                ...Q.SessionToken && {
                    sessionToken: Q.SessionToken
                },
                ...Q.Expiration && {
                    expiration: new Date(Q.Expiration)
                },
                ...Q.CredentialScope && {
                    credentialScope: Q.CredentialScope
                },
                ...G && {
                    accountId: G
                }
            };
            return (0, Gl4.setCredentialFeature)(Z, "CREDENTIALS_PROCESS", "w"), Z
        }, "getValidatedProcessCredentials"),
        Il4 = QL1(async (A, Q, B) => {
            let G = Q[A];
            if (Q[A]) {
                let Z = G.credential_process;
                if (Z !== void 0) {
                    let I = (0, Bl4.promisify)(Ql4.exec);
                    try {
                        let {
                            stdout: Y
                        } = await I(Z), J;
                        try {
                            J = JSON.parse(Y.trim())
                        } catch {
                            throw Error(`Profile ${A} credential_process returned invalid JSON.`)
                        }
                        return Zl4(A, J, Q)
                    } catch (Y) {
                        throw new AL1.CredentialsProviderError(Y.message, {
                            logger: B
                        })
                    }
                } else throw new AL1.CredentialsProviderError(`Profile ${A} did not contain credential_process.`, {
                    logger: B
                })
            } else throw new AL1.CredentialsProviderError(`Profile ${A} could not be found in shared credentials file.`, {
                logger: B
            })
        }, "resolveProcessCredentials"),
        Yl4 = QL1((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
            let B = await (0, vVQ.parseKnownFiles)(A);
            return Il4((0, vVQ.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), B, A.logger)
        }, "fromProcess")
});
var GL1 = U((US) => {
    var Jl4 = US && US.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        Wl4 = US && US.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        Xl4 = US && US.__importStar || function() {
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
                        if (G[Z] !== "default") Jl4(B, Q, G[Z])
                }
                return Wl4(B, Q), B
            }
        }();
    Object.defineProperty(US, "__esModule", {
        value: !0
    });
    US.fromWebToken = void 0;
    var Fl4 = (A) => async (Q) => {
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
            } = await Promise.resolve().then(() => Xl4(eN1()));
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
    US.fromWebToken = Fl4
});
var mVQ = U((gVQ) => {
    Object.defineProperty(gVQ, "__esModule", {
        value: !0
    });
    gVQ.fromTokenFile = void 0;
    var Vl4 = yR(),
        Kl4 = P2(),
        Dl4 = UA("fs"),
        Hl4 = GL1(),
        hVQ = "AWS_WEB_IDENTITY_TOKEN_FILE",
        Cl4 = "AWS_ROLE_ARN",
        El4 = "AWS_ROLE_SESSION_NAME",
        zl4 = (A = {}) => async () => {
            A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
            let Q = A?.webIdentityTokenFile ?? process.env[hVQ],
                B = A?.roleArn ?? process.env[Cl4],
                G = A?.roleSessionName ?? process.env[El4];
            if (!Q || !B) throw new Kl4.CredentialsProviderError("Web identity configuration not specified", {
                logger: A.logger
            });
            let Z = await (0, Hl4.fromWebToken)({
                ...A,
                webIdentityToken: (0, Dl4.readFileSync)(Q, {
                    encoding: "ascii"
                }),
                roleArn: B,
                roleSessionName: G
            })();
            if (Q === process.env[hVQ])(0, Vl4.setCredentialFeature)(Z, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
            return Z
        };
    gVQ.fromTokenFile = zl4
});
var YL1 = U((dK7, $gA) => {
    var {
        defineProperty: dVQ,
        getOwnPropertyDescriptor: Ul4,
        getOwnPropertyNames: $l4
    } = Object, wl4 = Object.prototype.hasOwnProperty, ZL1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of $l4(Q))
                if (!wl4.call(A, Z) && Z !== B) dVQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ul4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, cVQ = (A, Q, B) => (ZL1(A, Q, "default"), B && ZL1(B, Q, "default")), ql4 = (A) => ZL1(dVQ({}, "__esModule", {
        value: !0
    }), A), IL1 = {};
    $gA.exports = ql4(IL1);
    cVQ(IL1, mVQ(), $gA.exports);
    cVQ(IL1, GL1(), $gA.exports)
});
var oVQ = U((cK7, rVQ) => {
    var {
        create: Nl4,
        defineProperty: BHA,
        getOwnPropertyDescriptor: Ll4,
        getOwnPropertyNames: Ml4,
        getPrototypeOf: Ol4
    } = Object, Rl4 = Object.prototype.hasOwnProperty, MX = (A, Q) => BHA(A, "name", {
        value: Q,
        configurable: !0
    }), Tl4 = (A, Q) => {
        for (var B in Q) BHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, nVQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Ml4(Q))
                if (!Rl4.call(A, Z) && Z !== B) BHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ll4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Dd = (A, Q, B) => (B = A != null ? Nl4(Ol4(A)) : {}, nVQ(Q || !A || !A.__esModule ? BHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), Pl4 = (A) => nVQ(BHA({}, "__esModule", {
        value: !0
    }), A), aVQ = {};
    Tl4(aVQ, {
        fromIni: () => ul4
    });
    rVQ.exports = Pl4(aVQ);
    var WL1 = NG(),
        Hd = yR(),
        QHA = P2(),
        jl4 = MX((A, Q, B) => {
            let G = {
                EcsContainer: MX(async (Z) => {
                    let {
                        fromHttp: I
                    } = await Promise.resolve().then(() => Dd(nq1())), {
                        fromContainerMetadata: Y
                    } = await Promise.resolve().then(() => Dd(wF()));
                    return B?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => (0, QHA.chain)(I(Z ?? {}), Y(Z))().then(JL1)
                }, "EcsContainer"),
                Ec2InstanceMetadata: MX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
                    let {
                        fromInstanceMetadata: I
                    } = await Promise.resolve().then(() => Dd(wF()));
                    return async () => I(Z)().then(JL1)
                }, "Ec2InstanceMetadata"),
                Environment: MX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
                    let {
                        fromEnv: I
                    } = await Promise.resolve().then(() => Dd(pq1()));
                    return async () => I(Z)().then(JL1)
                }, "Environment")
            };
            if (A in G) return G[A];
            else throw new QHA.CredentialsProviderError(`Unsupported credential source in profile ${Q}. Got ${A}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
                logger: B
            })
        }, "resolveCredentialSource"),
        JL1 = MX((A) => (0, Hd.setCredentialFeature)(A, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), "setNamedProvider"),
        Sl4 = MX((A, {
            profile: Q = "default",
            logger: B
        } = {}) => {
            return Boolean(A) && typeof A === "object" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof A.external_id) > -1 && ["undefined", "string"].indexOf(typeof A.mfa_serial) > -1 && (_l4(A, {
                profile: Q,
                logger: B
            }) || kl4(A, {
                profile: Q,
                logger: B
            }))
        }, "isAssumeRoleProfile"),
        _l4 = MX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.source_profile === "string" && typeof A.credential_source > "u";
            if (G) B?.debug?.(`    ${Q} isAssumeRoleWithSourceProfile source_profile=${A.source_profile}`);
            return G
        }, "isAssumeRoleWithSourceProfile"),
        kl4 = MX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.credential_source === "string" && typeof A.source_profile > "u";
            if (G) B?.debug?.(`    ${Q} isCredentialSourceProfile credential_source=${A.credential_source}`);
            return G
        }, "isCredentialSourceProfile"),
        yl4 = MX(async (A, Q, B, G = {}) => {
            B.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
            let Z = Q[A],
                {
                    source_profile: I,
                    region: Y
                } = Z;
            if (!B.roleAssumer) {
                let {
                    getDefaultRoleAssumer: W
                } = await Promise.resolve().then(() => Dd(eN1()));
                B.roleAssumer = W({
                    ...B.clientConfig,
                    credentialProviderLogger: B.logger,
                    parentClientConfig: {
                        ...B?.parentClientConfig,
                        region: Y ?? B?.parentClientConfig?.region
                    }
                }, B.clientPlugins)
            }
            if (I && I in G) throw new QHA.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${(0,WL1.getProfileName)(B)}. Profiles visited: ` + Object.keys(G).join(", "), {
                logger: B.logger
            });
            B.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${I?`source_profile=[${I}]`:`profile=[${A}]`}`);
            let J = I ? sVQ(I, Q, B, {
                ...G,
                [I]: !0
            }, pVQ(Q[I] ?? {})) : (await jl4(Z.credential_source, A, B.logger)(B))();
            if (pVQ(Z)) return J.then((W) => (0, Hd.setCredentialFeature)(W, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
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
                    if (!B.mfaCodeProvider) throw new QHA.CredentialsProviderError(`Profile ${A} requires multi-factor authentication, but no MFA code callback was provided.`, {
                        logger: B.logger,
                        tryNextLink: !1
                    });
                    W.SerialNumber = X, W.TokenCode = await B.mfaCodeProvider(X)
                }
                let F = await J;
                return B.roleAssumer(F, W).then((V) => (0, Hd.setCredentialFeature)(V, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"))
            }
        }, "resolveAssumeRoleCredentials"),
        pVQ = MX((A) => {
            return !A.role_arn && !!A.credential_source
        }, "isCredentialSourceWithoutRoleArn"),
        xl4 = MX((A) => Boolean(A) && typeof A === "object" && typeof A.credential_process === "string", "isProcessProfile"),
        vl4 = MX(async (A, Q) => Promise.resolve().then(() => Dd(BL1())).then(({
            fromProcess: B
        }) => B({
            ...A,
            profile: Q
        })().then((G) => (0, Hd.setCredentialFeature)(G, "CREDENTIALS_PROFILE_PROCESS", "v"))), "resolveProcessCredentials"),
        bl4 = MX(async (A, Q, B = {}) => {
            let {
                fromSSO: G
            } = await Promise.resolve().then(() => Dd(DN1()));