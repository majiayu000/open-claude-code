/**
 * Claude Code Decompiled
 * Category: api
 * File: 5/30
 * Lines: 107683 - 109022 (1340 lines)
 * Original file: cli.js
 */

                    B[Y] = I
                })
            }
            if (A[AT1] != null) B[AT1] = A[AT1];
            if (A[WT1] != null) B[WT1] = A[WT1];
            if (A[VT1] != null) B[VT1] = A[VT1];
            if (A[Bb] != null) B[Bb] = A[Bb];
            if (A[GT1] != null) {
                let G = EI8(A[GT1], Q);
                if (A[GT1]?.length === 0) B.ProvidedContexts = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `ProvidedContexts.${Z}`;
                    B[Y] = I
                })
            }
            return B
        }, "se_AssumeRoleRequest"),
        DI8 = k2((A, Q) => {
            let B = {};
            if (A[L6A] != null) B[L6A] = A[L6A];
            if (A[M6A] != null) B[M6A] = A[M6A];
            if (A[HT1] != null) B[HT1] = A[HT1];
            if (A[ZT1] != null) B[ZT1] = A[ZT1];
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
            return B
        }, "se_AssumeRoleWithWebIdentityRequest"),
        WSQ = k2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = HI8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_policyDescriptorListType"),
        HI8 = k2((A, Q) => {
            let B = {};
            if (A[CT1] != null) B[CT1] = A[CT1];
            return B
        }, "se_PolicyDescriptorType"),
        CI8 = k2((A, Q) => {
            let B = {};
            if (A[BT1] != null) B[BT1] = A[BT1];
            if (A[tR1] != null) B[tR1] = A[tR1];
            return B
        }, "se_ProvidedContext"),
        EI8 = k2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = CI8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_ProvidedContextsListType"),
        zI8 = k2((A, Q) => {
            let B = {};
            if (A[QT1] != null) B[QT1] = A[QT1];
            if (A[DT1] != null) B[DT1] = A[DT1];
            return B
        }, "se_Tag"),
        UI8 = k2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                B[`member.${G}`] = Z, G++
            }
            return B
        }, "se_tagKeyListType"),
        $I8 = k2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = zI8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_tagListType"),
        XSQ = k2((A, Q) => {
            let B = {};
            if (A[sR1] != null) B[sR1] = (0, E7.expectString)(A[sR1]);
            if (A[rR1] != null) B[rR1] = (0, E7.expectString)(A[rR1]);
            return B
        }, "de_AssumedRoleUser"),
        wI8 = k2((A, Q) => {
            let B = {};
            if (A[U6A] != null) B[U6A] = FSQ(A[U6A], Q);
            if (A[z6A] != null) B[z6A] = XSQ(A[z6A], Q);
            if (A[N6A] != null) B[N6A] = (0, E7.strictParseInt32)(A[N6A]);
            if (A[Bb] != null) B[Bb] = (0, E7.expectString)(A[Bb]);
            return B
        }, "de_AssumeRoleResponse"),
        qI8 = k2((A, Q) => {
            let B = {};
            if (A[U6A] != null) B[U6A] = FSQ(A[U6A], Q);
            if (A[JT1] != null) B[JT1] = (0, E7.expectString)(A[JT1]);
            if (A[z6A] != null) B[z6A] = XSQ(A[z6A], Q);
            if (A[N6A] != null) B[N6A] = (0, E7.strictParseInt32)(A[N6A]);
            if (A[IT1] != null) B[IT1] = (0, E7.expectString)(A[IT1]);
            if (A[oR1] != null) B[oR1] = (0, E7.expectString)(A[oR1]);
            if (A[Bb] != null) B[Bb] = (0, E7.expectString)(A[Bb]);
            return B
        }, "de_AssumeRoleWithWebIdentityResponse"),
        FSQ = k2((A, Q) => {
            let B = {};
            if (A[aR1] != null) B[aR1] = (0, E7.expectString)(A[aR1]);
            if (A[YT1] != null) B[YT1] = (0, E7.expectString)(A[YT1]);
            if (A[XT1] != null) B[XT1] = (0, E7.expectString)(A[XT1]);
            if (A[eR1] != null) B[eR1] = (0, E7.expectNonNull)((0, E7.parseRfc3339DateTimeWithOffset)(A[eR1]));
            return B
        }, "de_Credentials"),
        NI8 = k2((A, Q) => {
            let B = {};
            if (A[UW] != null) B[UW] = (0, E7.expectString)(A[UW]);
            return B
        }, "de_ExpiredTokenException"),
        LI8 = k2((A, Q) => {
            let B = {};
            if (A[UW] != null) B[UW] = (0, E7.expectString)(A[UW]);
            return B
        }, "de_IDPCommunicationErrorException"),
        MI8 = k2((A, Q) => {
            let B = {};
            if (A[UW] != null) B[UW] = (0, E7.expectString)(A[UW]);
            return B
        }, "de_IDPRejectedClaimException"),
        OI8 = k2((A, Q) => {
            let B = {};
            if (A[UW] != null) B[UW] = (0, E7.expectString)(A[UW]);
            return B
        }, "de_InvalidIdentityTokenException"),
        RI8 = k2((A, Q) => {
            let B = {};
            if (A[UW] != null) B[UW] = (0, E7.expectString)(A[UW]);
            return B
        }, "de_MalformedPolicyDocumentException"),
        TI8 = k2((A, Q) => {
            let B = {};
            if (A[UW] != null) B[UW] = (0, E7.expectString)(A[UW]);
            return B
        }, "de_PackedPolicyTooLargeException"),
        PI8 = k2((A, Q) => {
            let B = {};
            if (A[UW] != null) B[UW] = (0, E7.expectString)(A[UW]);
            return B
        }, "de_RegionDisabledException"),
        Zb = k2((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        jI8 = (0, E7.withBaseException)(Gb),
        VSQ = k2(async (A, Q, B, G, Z) => {
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
            return new AI8.HttpRequest(X)
        }, "buildHttpRpcRequest"),
        KSQ = {
            "content-type": "application/x-www-form-urlencoded"
        },
        DSQ = "2011-06-15",
        HSQ = "Action",
        aR1 = "AccessKeyId",
        SI8 = "AssumeRole",
        sR1 = "AssumedRoleId",
        z6A = "AssumedRoleUser",
        _I8 = "AssumeRoleWithWebIdentity",
        rR1 = "Arn",
        oR1 = "Audience",
        U6A = "Credentials",
        tR1 = "ContextAssertion",
        $6A = "DurationSeconds",
        eR1 = "Expiration",
        AT1 = "ExternalId",
        QT1 = "Key",
        w6A = "Policy",
        q6A = "PolicyArns",
        BT1 = "ProviderArn",
        GT1 = "ProvidedContexts",
        ZT1 = "ProviderId",
        N6A = "PackedPolicySize",
        IT1 = "Provider",
        L6A = "RoleArn",
        M6A = "RoleSessionName",
        YT1 = "SecretAccessKey",
        JT1 = "SubjectFromWebIdentityToken",
        Bb = "SourceIdentity",
        WT1 = "SerialNumber",
        XT1 = "SessionToken",
        FT1 = "Tags",
        VT1 = "TokenCode",
        KT1 = "TransitiveTagKeys",
        CSQ = "Version",
        DT1 = "Value",
        HT1 = "WebIdentityToken",
        CT1 = "arn",
        UW = "message",
        ESQ = k2((A) => Object.entries(A).map(([Q, B]) => (0, E7.extendedEncodeURIComponent)(Q) + "=" + (0, E7.extendedEncodeURIComponent)(B)).join("&"), "buildFormUrlencodedString"),
        kI8 = k2((A, Q) => {
            if (Q.Error?.Code !== void 0) return Q.Error.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadQueryErrorCode"),
        qT1 = class extends oZ8.Command.classBuilder().ep(tZ8.commonParams).m(function(A, Q, B, G) {
            return [(0, rZ8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, sZ8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, ojQ).ser(QI8).de(GI8).build() {
            static {
                k2(this, "AssumeRoleCommand")
            }
        },
        yI8 = E5(),
        xI8 = sG(),
        vI8 = l6(),
        bI8 = lHA(),
        NT1 = class extends vI8.Command.classBuilder().ep(bI8.commonParams).m(function(A, Q, B, G) {
            return [(0, xI8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, yI8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(ZSQ, ISQ).ser(BI8).de(ZI8).build() {
            static {
                k2(this, "AssumeRoleWithWebIdentityCommand")
            }
        },
        fI8 = pHA(),
        hI8 = {
            AssumeRoleCommand: qT1,
            AssumeRoleWithWebIdentityCommand: NT1
        },
        zSQ = class extends fI8.STSClient {
            static {
                k2(this, "STS")
            }
        };
    (0, aZ8.createAggregatedClient)(hI8, zSQ);
    var gI8 = lHA(),
        zT1 = bR(),
        sjQ = "us-east-1",
        USQ = k2((A) => {
            if (typeof A?.Arn === "string") {
                let Q = A.Arn.split(":");
                if (Q.length > 4 && Q[4] !== "") return Q[4]
            }
            return
        }, "getAccountIdFromAssumedRoleUser"),
        $SQ = k2(async (A, Q, B) => {
            let G = typeof A === "function" ? await A() : A,
                Z = typeof Q === "function" ? await Q() : Q;
            return B?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${G} (provider)`, `${Z} (parent client)`, `${sjQ} (STS default)`), G ?? Z ?? sjQ
        }, "resolveRegion"),
        uI8 = k2((A, Q) => {
            let B, G;
            return async (Z, I) => {
                if (G = Z, !B) {
                    let {
                        logger: F = A?.parentClientConfig?.logger,
                        region: V,
                        requestHandler: K = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: D
                    } = A, H = await $SQ(V, A?.parentClientConfig?.region, D), C = !wSQ(K);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        credentialDefaultProvider: k2(() => async () => G, "credentialDefaultProvider"),
                        region: H,
                        requestHandler: C ? K : void 0,
                        logger: F
                    })
                }
                let {
                    Credentials: Y,
                    AssumedRoleUser: J
                } = await B.send(new qT1(I));
                if (!Y || !Y.AccessKeyId || !Y.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${I.RoleArn}`);
                let W = USQ(J),
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
                return (0, zT1.setCredentialFeature)(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X
            }
        }, "getDefaultRoleAssumer"),
        mI8 = k2((A, Q) => {
            let B;
            return async (G) => {
                if (!B) {
                    let {
                        logger: W = A?.parentClientConfig?.logger,
                        region: X,
                        requestHandler: F = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: V
                    } = A, K = await $SQ(X, A?.parentClientConfig?.region, V), D = !wSQ(F);
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
                } = await B.send(new NT1(G));
                if (!Z || !Z.AccessKeyId || !Z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${G.RoleArn}`);
                let Y = USQ(I),
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
                if (Y)(0, zT1.setCredentialFeature)(J, "RESOLVED_ACCOUNT_ID", "T");
                return (0, zT1.setCredentialFeature)(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J
            }
        }, "getDefaultRoleAssumerWithWebIdentity"),
        wSQ = k2((A) => {
            return A?.metadata?.handlerProtocol === "h2"
        }, "isH2"),
        qSQ = pHA(),
        NSQ = k2((A, Q) => {
            if (!Q) return A;
            else return class extends A {
                static {
                    k2(this, "CustomizableSTSClient")
                }
                constructor(G) {
                    super(G);
                    for (let Z of Q) this.middlewareStack.use(Z)
                }
            }
        }, "getCustomizableStsClientCtor"),
        LSQ = k2((A = {}, Q) => uI8(A, NSQ(qSQ.STSClient, Q)), "getDefaultRoleAssumer"),
        MSQ = k2((A = {}, Q) => mI8(A, NSQ(qSQ.STSClient, Q)), "getDefaultRoleAssumerWithWebIdentity"),
        dI8 = k2((A) => (Q) => A({
            roleAssumer: LSQ(Q),
            roleAssumerWithWebIdentity: MSQ(Q),
            ...Q
        }), "decorateDefaultCredentialProvider")
});
var TT1 = U((Lz7, TSQ) => {
    var {
        defineProperty: kmA,
        getOwnPropertyDescriptor: cI8,
        getOwnPropertyNames: pI8
    } = Object, lI8 = Object.prototype.hasOwnProperty, RT1 = (A, Q) => kmA(A, "name", {
        value: Q,
        configurable: !0
    }), iI8 = (A, Q) => {
        for (var B in Q) kmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, nI8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of pI8(Q))
                if (!lI8.call(A, Z) && Z !== B) kmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = cI8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, aI8 = (A) => nI8(kmA({}, "__esModule", {
        value: !0
    }), A), RSQ = {};
    iI8(RSQ, {
        fromProcess: () => AY8
    });
    TSQ.exports = aI8(RSQ);
    var OSQ = NG(),
        OT1 = P2(),
        sI8 = UA("child_process"),
        rI8 = UA("util"),
        oI8 = bR(),
        tI8 = RT1((A, Q, B) => {
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
            return (0, oI8.setCredentialFeature)(Z, "CREDENTIALS_PROCESS", "w"), Z
        }, "getValidatedProcessCredentials"),
        eI8 = RT1(async (A, Q, B) => {
            let G = Q[A];
            if (Q[A]) {
                let Z = G.credential_process;
                if (Z !== void 0) {
                    let I = (0, rI8.promisify)(sI8.exec);
                    try {
                        let {
                            stdout: Y
                        } = await I(Z), J;
                        try {
                            J = JSON.parse(Y.trim())
                        } catch {
                            throw Error(`Profile ${A} credential_process returned invalid JSON.`)
                        }
                        return tI8(A, J, Q)
                    } catch (Y) {
                        throw new OT1.CredentialsProviderError(Y.message, {
                            logger: B
                        })
                    }
                } else throw new OT1.CredentialsProviderError(`Profile ${A} did not contain credential_process.`, {
                    logger: B
                })
            } else throw new OT1.CredentialsProviderError(`Profile ${A} could not be found in shared credentials file.`, {
                logger: B
            })
        }, "resolveProcessCredentials"),
        AY8 = RT1((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
            let B = await (0, OSQ.parseKnownFiles)(A);
            return eI8((0, OSQ.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), B, A.logger)
        }, "fromProcess")
});
var PT1 = U((SS) => {
    var QY8 = SS && SS.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        BY8 = SS && SS.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        GY8 = SS && SS.__importStar || function() {
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
                        if (G[Z] !== "default") QY8(B, Q, G[Z])
                }
                return BY8(B, Q), B
            }
        }();
    Object.defineProperty(SS, "__esModule", {
        value: !0
    });
    SS.fromWebToken = void 0;
    var ZY8 = (A) => async (Q) => {
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
            } = await Promise.resolve().then(() => GY8(MT1()));
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
    SS.fromWebToken = ZY8
});
var _SQ = U((jSQ) => {
    Object.defineProperty(jSQ, "__esModule", {
        value: !0
    });
    jSQ.fromTokenFile = void 0;
    var IY8 = bR(),
        YY8 = P2(),
        JY8 = UA("fs"),
        WY8 = PT1(),
        PSQ = "AWS_WEB_IDENTITY_TOKEN_FILE",
        XY8 = "AWS_ROLE_ARN",
        FY8 = "AWS_ROLE_SESSION_NAME",
        VY8 = (A = {}) => async () => {
            A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
            let Q = A?.webIdentityTokenFile ?? process.env[PSQ],
                B = A?.roleArn ?? process.env[XY8],
                G = A?.roleSessionName ?? process.env[FY8];
            if (!Q || !B) throw new YY8.CredentialsProviderError("Web identity configuration not specified", {
                logger: A.logger
            });
            let Z = await (0, WY8.fromWebToken)({
                ...A,
                webIdentityToken: (0, JY8.readFileSync)(Q, {
                    encoding: "ascii"
                }),
                roleArn: B,
                roleSessionName: G
            })();
            if (Q === process.env[PSQ])(0, IY8.setCredentialFeature)(Z, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
            return Z
        };
    jSQ.fromTokenFile = VY8
});
var _T1 = U((Rz7, ymA) => {
    var {
        defineProperty: kSQ,
        getOwnPropertyDescriptor: KY8,
        getOwnPropertyNames: DY8
    } = Object, HY8 = Object.prototype.hasOwnProperty, jT1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of DY8(Q))
                if (!HY8.call(A, Z) && Z !== B) kSQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = KY8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ySQ = (A, Q, B) => (jT1(A, Q, "default"), B && jT1(B, Q, "default")), CY8 = (A) => jT1(kSQ({}, "__esModule", {
        value: !0
    }), A), ST1 = {};
    ymA.exports = CY8(ST1);
    ySQ(ST1, _SQ(), ymA.exports);
    ySQ(ST1, PT1(), ymA.exports)
});
var mSQ = U((Tz7, uSQ) => {
    var {
        create: EY8,
        defineProperty: nHA,
        getOwnPropertyDescriptor: zY8,
        getOwnPropertyNames: UY8,
        getPrototypeOf: $Y8
    } = Object, wY8 = Object.prototype.hasOwnProperty, TX = (A, Q) => nHA(A, "name", {
        value: Q,
        configurable: !0
    }), qY8 = (A, Q) => {
        for (var B in Q) nHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, fSQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of UY8(Q))
                if (!wY8.call(A, Z) && Z !== B) nHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zY8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Sd = (A, Q, B) => (B = A != null ? EY8($Y8(A)) : {}, fSQ(Q || !A || !A.__esModule ? nHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), NY8 = (A) => fSQ(nHA({}, "__esModule", {
        value: !0
    }), A), hSQ = {};
    qY8(hSQ, {
        fromIni: () => xY8
    });
    uSQ.exports = NY8(hSQ);
    var yT1 = NG(),
        _d = bR(),
        iHA = P2(),
        LY8 = TX((A, Q, B) => {
            let G = {
                EcsContainer: TX(async (Z) => {
                    let {
                        fromHttp: I
                    } = await Promise.resolve().then(() => Sd(zR1())), {
                        fromContainerMetadata: Y
                    } = await Promise.resolve().then(() => Sd(wF()));
                    return B?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => (0, iHA.chain)(I(Z ?? {}), Y(Z))().then(kT1)
                }, "EcsContainer"),
                Ec2InstanceMetadata: TX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
                    let {
                        fromInstanceMetadata: I
                    } = await Promise.resolve().then(() => Sd(wF()));
                    return async () => I(Z)().then(kT1)
                }, "Ec2InstanceMetadata"),
                Environment: TX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
                    let {
                        fromEnv: I
                    } = await Promise.resolve().then(() => Sd(HR1()));
                    return async () => I(Z)().then(kT1)
                }, "Environment")
            };
            if (A in G) return G[A];
            else throw new iHA.CredentialsProviderError(`Unsupported credential source in profile ${Q}. Got ${A}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
                logger: B
            })
        }, "resolveCredentialSource"),
        kT1 = TX((A) => (0, _d.setCredentialFeature)(A, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), "setNamedProvider"),
        MY8 = TX((A, {
            profile: Q = "default",
            logger: B
        } = {}) => {
            return Boolean(A) && typeof A === "object" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof A.external_id) > -1 && ["undefined", "string"].indexOf(typeof A.mfa_serial) > -1 && (OY8(A, {
                profile: Q,
                logger: B
            }) || RY8(A, {
                profile: Q,
                logger: B
            }))
        }, "isAssumeRoleProfile"),
        OY8 = TX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.source_profile === "string" && typeof A.credential_source > "u";
            if (G) B?.debug?.(`    ${Q} isAssumeRoleWithSourceProfile source_profile=${A.source_profile}`);
            return G
        }, "isAssumeRoleWithSourceProfile"),
        RY8 = TX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.credential_source === "string" && typeof A.source_profile > "u";
            if (G) B?.debug?.(`    ${Q} isCredentialSourceProfile credential_source=${A.credential_source}`);
            return G
        }, "isCredentialSourceProfile"),
        TY8 = TX(async (A, Q, B, G = {}) => {
            B.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
            let Z = Q[A],
                {
                    source_profile: I,
                    region: Y
                } = Z;
            if (!B.roleAssumer) {
                let {
                    getDefaultRoleAssumer: W
                } = await Promise.resolve().then(() => Sd(MT1()));
                B.roleAssumer = W({
                    ...B.clientConfig,
                    credentialProviderLogger: B.logger,
                    parentClientConfig: {
                        ...B?.parentClientConfig,
                        region: Y ?? B?.parentClientConfig?.region
                    }
                }, B.clientPlugins)
            }
            if (I && I in G) throw new iHA.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${(0,yT1.getProfileName)(B)}. Profiles visited: ` + Object.keys(G).join(", "), {
                logger: B.logger
            });
            B.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${I?`source_profile=[${I}]`:`profile=[${A}]`}`);
            let J = I ? gSQ(I, Q, B, {
                ...G,
                [I]: !0
            }, xSQ(Q[I] ?? {})) : (await LY8(Z.credential_source, A, B.logger)(B))();
            if (xSQ(Z)) return J.then((W) => (0, _d.setCredentialFeature)(W, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
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
                    if (!B.mfaCodeProvider) throw new iHA.CredentialsProviderError(`Profile ${A} requires multi-factor authentication, but no MFA code callback was provided.`, {
                        logger: B.logger,
                        tryNextLink: !1
                    });
                    W.SerialNumber = X, W.TokenCode = await B.mfaCodeProvider(X)
                }
                let F = await J;
                return B.roleAssumer(F, W).then((V) => (0, _d.setCredentialFeature)(V, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"))
            }
        }, "resolveAssumeRoleCredentials"),
        xSQ = TX((A) => {
            return !A.role_arn && !!A.credential_source
        }, "isCredentialSourceWithoutRoleArn"),
        PY8 = TX((A) => Boolean(A) && typeof A === "object" && typeof A.credential_process === "string", "isProcessProfile"),
        jY8 = TX(async (A, Q) => Promise.resolve().then(() => Sd(TT1())).then(({
            fromProcess: B
        }) => B({
            ...A,
            profile: Q
        })().then((G) => (0, _d.setCredentialFeature)(G, "CREDENTIALS_PROFILE_PROCESS", "v"))), "resolveProcessCredentials"),
        SY8 = TX(async (A, Q, B = {}) => {
            let {
                fromSSO: G
            } = await Promise.resolve().then(() => Sd(hR1()));
            return G({
                profile: A,
                logger: B.logger,
                parentClientConfig: B.parentClientConfig,
                clientConfig: B.clientConfig
            })().then((Z) => {
                if (Q.sso_session) return (0, _d.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO", "r");
                else return (0, _d.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO_LEGACY", "t")
            })
        }, "resolveSsoCredentials"),
        _Y8 = TX((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        vSQ = TX((A) => Boolean(A) && typeof A === "object" && typeof A.aws_access_key_id === "string" && typeof A.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof A.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof A.aws_account_id) > -1, "isStaticCredsProfile"),
        bSQ = TX(async (A, Q) => {
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
            return (0, _d.setCredentialFeature)(B, "CREDENTIALS_PROFILE", "n")
        }, "resolveStaticCredentials"),
        kY8 = TX((A) => Boolean(A) && typeof A === "object" && typeof A.web_identity_token_file === "string" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1, "isWebIdentityProfile"),
        yY8 = TX(async (A, Q) => Promise.resolve().then(() => Sd(_T1())).then(({
            fromTokenFile: B
        }) => B({
            webIdentityTokenFile: A.web_identity_token_file,
            roleArn: A.role_arn,
            roleSessionName: A.role_session_name,
            roleAssumerWithWebIdentity: Q.roleAssumerWithWebIdentity,
            logger: Q.logger,
            parentClientConfig: Q.parentClientConfig
        })().then((G) => (0, _d.setCredentialFeature)(G, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))), "resolveWebIdentityCredentials"),
        gSQ = TX(async (A, Q, B, G = {}, Z = !1) => {
            let I = Q[A];
            if (Object.keys(G).length > 0 && vSQ(I)) return bSQ(I, B);
            if (Z || MY8(I, {
                    profile: A,
                    logger: B.logger
                })) return TY8(A, Q, B, G);
            if (vSQ(I)) return bSQ(I, B);
            if (kY8(I)) return yY8(I, B);
            if (PY8(I)) return jY8(B, A);
            if (_Y8(I)) return await SY8(A, I, B);
            throw new iHA.CredentialsProviderError(`Could not resolve credentials using profile: [${A}] in configuration/credentials file(s).`, {
                logger: B.logger
            })
        }, "resolveProfileData"),
        xY8 = TX((A = {}) => async ({
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
            let G = await (0, yT1.parseKnownFiles)(B);
            return gSQ((0, yT1.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), G, B)
        }, "fromIni")
});
var sSQ = U((Pz7, aSQ) => {
    var {
        create: vY8,
        defineProperty: aHA,
        getOwnPropertyDescriptor: bY8,
        getOwnPropertyNames: fY8,
        getPrototypeOf: hY8
    } = Object, gY8 = Object.prototype.hasOwnProperty, xmA = (A, Q) => aHA(A, "name", {
        value: Q,
        configurable: !0
    }), uY8 = (A, Q) => {
        for (var B in Q) aHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pSQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of fY8(Q))
                if (!gY8.call(A, Z) && Z !== B) aHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = bY8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, O6A = (A, Q, B) => (B = A != null ? vY8(hY8(A)) : {}, pSQ(Q || !A || !A.__esModule ? aHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), mY8 = (A) => pSQ(aHA({}, "__esModule", {
        value: !0
    }), A), lSQ = {};
    uY8(lSQ, {
        credentialsTreatedAsExpired: () => nSQ,
        credentialsWillNeedRefresh: () => iSQ,
        defaultProvider: () => pY8
    });
    aSQ.exports = mY8(lSQ);
    var xT1 = HR1(),
        dY8 = NG(),
        Qo = P2(),
        dSQ = "AWS_EC2_METADATA_DISABLED",
        cY8 = xmA(async (A) => {
            let {
                ENV_CMDS_FULL_URI: Q,
                ENV_CMDS_RELATIVE_URI: B,
                fromContainerMetadata: G,
                fromInstanceMetadata: Z
            } = await Promise.resolve().then(() => O6A(wF()));
            if (process.env[B] || process.env[Q]) {
                A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
                let {
                    fromHttp: I
                } = await Promise.resolve().then(() => O6A(zR1()));
                return (0, Qo.chain)(I(A), G(A))
            }
            if (process.env[dSQ] && process.env[dSQ] !== "false") return async () => {
                throw new Qo.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
                    logger: A.logger
                })
            };
            return A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), Z(A)
        }, "remoteProvider"),
        cSQ = !1,
        pY8 = xmA((A = {}) => (0, Qo.memoize)((0, Qo.chain)(async () => {
            if (A.profile ?? process.env[dY8.ENV_PROFILE]) {
                if (process.env[xT1.ENV_KEY] && process.env[xT1.ENV_SECRET]) {
                    if (!cSQ)(A.logger?.warn && A.logger?.constructor?.name !== "NoOpLogger" ? A.logger.warn : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), cSQ = !0
                }
                throw new Qo.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                    logger: A.logger,
                    tryNextLink: !0
                })
            }
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), (0, xT1.fromEnv)(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
            let {
                ssoStartUrl: Q,
                ssoAccountId: B,
                ssoRegion: G,
                ssoRoleName: Z,
                ssoSession: I
            } = A;
            if (!Q && !B && !G && !Z && !I) throw new Qo.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
                logger: A.logger
            });
            let {
                fromSSO: Y
            } = await Promise.resolve().then(() => O6A(hR1()));
            return Y(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
            let {
                fromIni: Q
            } = await Promise.resolve().then(() => O6A(mSQ()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
            let {
                fromProcess: Q
            } = await Promise.resolve().then(() => O6A(TT1()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
            let {
                fromTokenFile: Q
            } = await Promise.resolve().then(() => O6A(_T1()));
            return Q(A)()
        }, async () => {
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await cY8(A))()
        }, async () => {
            throw new Qo.CredentialsProviderError("Could not load credentials from any providers", {
                tryNextLink: !1,
                logger: A.logger
            })
        }), nSQ, iSQ), "defaultProvider"),
        iSQ = xmA((A) => A?.expiration !== void 0, "credentialsWillNeedRefresh"),
        nSQ = xmA((A) => A?.expiration !== void 0 && A.expiration.getTime() - Date.now() < 300000, "credentialsTreatedAsExpired")
});
var V_Q = U((X_Q) => {
    Object.defineProperty(X_Q, "__esModule", {
        value: !0
    });
    X_Q.ruleSet = void 0;
    var Y_Q = "required",
        kS = "fn",
        yS = "argv",
        T6A = "ref",
        rSQ = !0,
        oSQ = "isSet",
        rHA = "booleanEquals",
        R6A = "error",
        sHA = "endpoint",
        iC = "tree",
        vT1 = "PartitionResult",
        tSQ = {
            [Y_Q]: !1,
            type: "String"
        },
        eSQ = {
            [Y_Q]: !0,
            default: !1,
            type: "Boolean"
        },
        A_Q = {
            [T6A]: "Endpoint"
        },
        J_Q = {
            [kS]: rHA,
            [yS]: [{
                [T6A]: "UseFIPS"
            }, !0]
        },
        W_Q = {
            [kS]: rHA,
            [yS]: [{
                [T6A]: "UseDualStack"
            }, !0]
        },
        _S = {},
        Q_Q = {
            [kS]: "getAttr",
            [yS]: [{
                [T6A]: vT1
            }, "supportsFIPS"]
        },
        B_Q = {
            [kS]: rHA,
            [yS]: [!0, {
                [kS]: "getAttr",
                [yS]: [{
                    [T6A]: vT1
                }, "supportsDualStack"]
            }]
        },
        G_Q = [J_Q],
        Z_Q = [W_Q],
        I_Q = [{
            [T6A]: "Region"
        }],
        lY8 = {
            version: "1.0",
            parameters: {
                Region: tSQ,
                UseDualStack: eSQ,
                UseFIPS: eSQ,
                Endpoint: tSQ
            },
            rules: [{
                conditions: [{
                    [kS]: oSQ,
                    [yS]: [A_Q]
                }],
                rules: [{
                    conditions: G_Q,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: R6A
                }, {
                    rules: [{
                        conditions: Z_Q,
                        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                        type: R6A
                    }, {
                        endpoint: {
                            url: A_Q,
                            properties: _S,
                            headers: _S
                        },
                        type: sHA
                    }],
                    type: iC
                }],
                type: iC
            }, {
                rules: [{
                    conditions: [{
                        [kS]: oSQ,
                        [yS]: I_Q
                    }],
                    rules: [{
                        conditions: [{
                            [kS]: "aws.partition",
                            [yS]: I_Q,
                            assign: vT1
                        }],
                        rules: [{
                            conditions: [J_Q, W_Q],
                            rules: [{
                                conditions: [{
                                    [kS]: rHA,
                                    [yS]: [rSQ, Q_Q]
                                }, B_Q],
                                rules: [{
                                    rules: [{
                                        endpoint: {
                                            url: "https://bedrock-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: _S,
                                            headers: _S
                                        },
                                        type: sHA
                                    }],
                                    type: iC
                                }],
                                type: iC
                            }, {
                                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                type: R6A
                            }],
                            type: iC
                        }, {
                            conditions: G_Q,
                            rules: [{
                                conditions: [{
                                    [kS]: rHA,
                                    [yS]: [Q_Q, rSQ]
                                }],
                                rules: [{
                                    rules: [{
                                        endpoint: {
                                            url: "https://bedrock-fips.{Region}.{PartitionResult#dnsSuffix}",
                                            properties: _S,
                                            headers: _S
                                        },
                                        type: sHA
                                    }],
                                    type: iC
                                }],
                                type: iC
                            }, {
                                error: "FIPS is enabled but this partition does not support FIPS",
                                type: R6A
                            }],
                            type: iC
                        }, {
                            conditions: Z_Q,
                            rules: [{
                                conditions: [B_Q],
                                rules: [{
                                    rules: [{
                                        endpoint: {
                                            url: "https://bedrock.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: _S,
                                            headers: _S
                                        },
                                        type: sHA
                                    }],
                                    type: iC
                                }],
                                type: iC
                            }, {
                                error: "DualStack is enabled but this partition does not support DualStack",
                                type: R6A
                            }],
                            type: iC
                        }, {
                            rules: [{
                                endpoint: {
                                    url: "https://bedrock.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: _S,
                                    headers: _S
                                },
                                type: sHA
                            }],
                            type: iC
                        }],
                        type: iC
                    }],
                    type: iC
                }, {
                    error: "Invalid Configuration: Missing Region",
                    type: R6A
                }],
                type: iC
            }]
        };
    X_Q.ruleSet = lY8
});
var H_Q = U((K_Q) => {
    Object.defineProperty(K_Q, "__esModule", {
        value: !0
    });
    K_Q.defaultEndpointResolver = void 0;
    var iY8 = Q6A(),
        bT1 = II(),
        nY8 = V_Q(),
        aY8 = new bT1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        sY8 = (A, Q = {}) => {
            return aY8.get(A, () => (0, bT1.resolveEndpoint)(nY8.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    K_Q.defaultEndpointResolver = sY8;
    bT1.customEndpointFunctions.aws = iY8.awsEndpointFunctions
});
var $_Q = U((z_Q) => {
    Object.defineProperty(z_Q, "__esModule", {
        value: !0
    });
    z_Q.getRuntimeConfig = void 0;
    var rY8 = MV(),
        oY8 = nB(),
        tY8 = l6(),
        eY8 = zJ(),
        C_Q = Od(),
        E_Q = L2(),
        AJ8 = DR1(),
        QJ8 = H_Q(),
        BJ8 = (A) => {
            return {
                apiVersion: "2023-04-20",
                base64Decoder: A?.base64Decoder ?? C_Q.fromBase64,
                base64Encoder: A?.base64Encoder ?? C_Q.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? QJ8.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? AJ8.defaultBedrockHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new rY8.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#httpBearerAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#httpBearerAuth"),
                    signer: new oY8.HttpBearerAuthSigner
                }],
                logger: A?.logger ?? new tY8.NoOpLogger,
                serviceId: A?.serviceId ?? "Bedrock",
                urlParser: A?.urlParser ?? eY8.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? E_Q.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? E_Q.toUtf8
            }
        };
    z_Q.getRuntimeConfig = BJ8
});
var R_Q = U((M_Q) => {
    Object.defineProperty(M_Q, "__esModule", {
        value: !0
    });
    M_Q.getRuntimeConfig = void 0;
    var GJ8 = nr(),
        ZJ8 = GJ8.__importDefault(SOQ()),
        fT1 = MV(),
        IJ8 = sSQ(),
        w_Q = bR1(),
        q_Q = vHA(),
        vmA = S8(),
        YJ8 = nB(),
        JJ8 = wX(),
        N_Q = X6(),
        Bo = xI(),
        L_Q = oG(),
        WJ8 = qX(),
        XJ8 = FW(),
        FJ8 = $_Q(),
        VJ8 = l6(),
        KJ8 = NX(),
        DJ8 = l6(),
        HJ8 = (A) => {
            (0, DJ8.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, KJ8.resolveDefaultsModeConfig)(A),
                B = () => Q().then(VJ8.loadConfigsForDefaultMode),
                G = (0, FJ8.getRuntimeConfig)(A);
            (0, fT1.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger,
                signingName: "bedrock"
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, Bo.loadConfig)(fT1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? WJ8.calculateBodyLength,
                credentialDefaultProvider: A?.credentialDefaultProvider ?? IJ8.defaultProvider,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, q_Q.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: ZJ8.default.version
                }),
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (I) => I.getIdentityProvider("aws.auth#sigv4"),
                    signer: new fT1.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#httpBearerAuth",
                    identityProvider: (I) => I.getIdentityProvider("smithy.api#httpBearerAuth") || (async (Y) => {
                        try {
                            return await (0, w_Q.fromEnvSigningName)({
                                signingName: "bedrock"
                            })()
                        } catch (J) {
                            return await (0, w_Q.nodeProvider)(Y)(Y)
                        }
                    }),
                    signer: new YJ8.HttpBearerAuthSigner
                }],
                maxAttempts: A?.maxAttempts ?? (0, Bo.loadConfig)(N_Q.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, Bo.loadConfig)(vmA.NODE_REGION_CONFIG_OPTIONS, {
                    ...vmA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: L_Q.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, Bo.loadConfig)({
                    ...N_Q.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || XJ8.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? JJ8.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? L_Q.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, Bo.loadConfig)(vmA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, Bo.loadConfig)(vmA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, Bo.loadConfig)(q_Q.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    M_Q.getRuntimeConfig = HJ8
});
var gxQ = U((yz7, hxQ) => {
    var {
        defineProperty: pmA,
        getOwnPropertyDescriptor: CJ8,
        getOwnPropertyNames: EJ8
    } = Object, zJ8 = Object.prototype.hasOwnProperty, AA = (A, Q) => pmA(A, "name", {
        value: Q,
        configurable: !0
    }), UJ8 = (A, Q) => {
        for (var B in Q) pmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, $J8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of EJ8(Q))
                if (!zJ8.call(A, Z) && Z !== B) pmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = CJ8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, wJ8 = (A) => $J8(pmA({}, "__esModule", {
        value: !0
    }), A), o_Q = {};