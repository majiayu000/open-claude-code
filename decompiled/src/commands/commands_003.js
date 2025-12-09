/**
 * Claude Code Decompiled
 * Category: commands
 * File: 3/8
 * Lines: 95699 - 97192 (1494 lines)
 * Original file: cli.js
 */

            return B
        }, "se_tagKeyListType"),
        dA8 = _2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = uA8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_tagListType"),
        _UQ = _2((A, Q) => {
            let B = {};
            if (A[wM1] != null) B[wM1] = (0, C7.expectString)(A[wM1]);
            if (A[qM1] != null) B[qM1] = (0, C7.expectString)(A[qM1]);
            return B
        }, "de_AssumedRoleUser"),
        cA8 = _2((A, Q) => {
            let B = {};
            if (A[h8A] != null) B[h8A] = kUQ(A[h8A], Q);
            if (A[f8A] != null) B[f8A] = _UQ(A[f8A], Q);
            if (A[d8A] != null) B[d8A] = (0, C7.strictParseInt32)(A[d8A]);
            if (A[cv] != null) B[cv] = (0, C7.expectString)(A[cv]);
            return B
        }, "de_AssumeRoleResponse"),
        pA8 = _2((A, Q) => {
            let B = {};
            if (A[h8A] != null) B[h8A] = kUQ(A[h8A], Q);
            if (A[kM1] != null) B[kM1] = (0, C7.expectString)(A[kM1]);
            if (A[f8A] != null) B[f8A] = _UQ(A[f8A], Q);
            if (A[d8A] != null) B[d8A] = (0, C7.strictParseInt32)(A[d8A]);
            if (A[SM1] != null) B[SM1] = (0, C7.expectString)(A[SM1]);
            if (A[NM1] != null) B[NM1] = (0, C7.expectString)(A[NM1]);
            if (A[cv] != null) B[cv] = (0, C7.expectString)(A[cv]);
            return B
        }, "de_AssumeRoleWithWebIdentityResponse"),
        kUQ = _2((A, Q) => {
            let B = {};
            if (A[$M1] != null) B[$M1] = (0, C7.expectString)(A[$M1]);
            if (A[_M1] != null) B[_M1] = (0, C7.expectString)(A[_M1]);
            if (A[xM1] != null) B[xM1] = (0, C7.expectString)(A[xM1]);
            if (A[MM1] != null) B[MM1] = (0, C7.expectNonNull)((0, C7.parseRfc3339DateTimeWithOffset)(A[MM1]));
            return B
        }, "de_Credentials"),
        lA8 = _2((A, Q) => {
            let B = {};
            if (A[EW] != null) B[EW] = (0, C7.expectString)(A[EW]);
            return B
        }, "de_ExpiredTokenException"),
        iA8 = _2((A, Q) => {
            let B = {};
            if (A[EW] != null) B[EW] = (0, C7.expectString)(A[EW]);
            return B
        }, "de_IDPCommunicationErrorException"),
        nA8 = _2((A, Q) => {
            let B = {};
            if (A[EW] != null) B[EW] = (0, C7.expectString)(A[EW]);
            return B
        }, "de_IDPRejectedClaimException"),
        aA8 = _2((A, Q) => {
            let B = {};
            if (A[EW] != null) B[EW] = (0, C7.expectString)(A[EW]);
            return B
        }, "de_InvalidIdentityTokenException"),
        sA8 = _2((A, Q) => {
            let B = {};
            if (A[EW] != null) B[EW] = (0, C7.expectString)(A[EW]);
            return B
        }, "de_MalformedPolicyDocumentException"),
        rA8 = _2((A, Q) => {
            let B = {};
            if (A[EW] != null) B[EW] = (0, C7.expectString)(A[EW]);
            return B
        }, "de_PackedPolicyTooLargeException"),
        oA8 = _2((A, Q) => {
            let B = {};
            if (A[EW] != null) B[EW] = (0, C7.expectString)(A[EW]);
            return B
        }, "de_RegionDisabledException"),
        lv = _2((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        tA8 = (0, C7.withBaseException)(pv),
        yUQ = _2(async (A, Q, B, G, Z) => {
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
            return new LA8.HttpRequest(X)
        }, "buildHttpRpcRequest"),
        xUQ = {
            "content-type": "application/x-www-form-urlencoded"
        },
        vUQ = "2011-06-15",
        bUQ = "Action",
        $M1 = "AccessKeyId",
        eA8 = "AssumeRole",
        wM1 = "AssumedRoleId",
        f8A = "AssumedRoleUser",
        A18 = "AssumeRoleWithWebIdentity",
        qM1 = "Arn",
        NM1 = "Audience",
        h8A = "Credentials",
        LM1 = "ContextAssertion",
        g8A = "DurationSeconds",
        MM1 = "Expiration",
        OM1 = "ExternalId",
        RM1 = "Key",
        u8A = "Policy",
        m8A = "PolicyArns",
        TM1 = "ProviderArn",
        PM1 = "ProvidedContexts",
        jM1 = "ProviderId",
        d8A = "PackedPolicySize",
        SM1 = "Provider",
        c8A = "RoleArn",
        p8A = "RoleSessionName",
        _M1 = "SecretAccessKey",
        kM1 = "SubjectFromWebIdentityToken",
        cv = "SourceIdentity",
        yM1 = "SerialNumber",
        xM1 = "SessionToken",
        vM1 = "Tags",
        bM1 = "TokenCode",
        fM1 = "TransitiveTagKeys",
        fUQ = "Version",
        hM1 = "Value",
        gM1 = "WebIdentityToken",
        uM1 = "arn",
        EW = "message",
        hUQ = _2((A) => Object.entries(A).map(([Q, B]) => (0, C7.extendedEncodeURIComponent)(Q) + "=" + (0, C7.extendedEncodeURIComponent)(B)).join("&"), "buildFormUrlencodedString"),
        Q18 = _2((A, Q) => {
            if (Q.Error?.Code !== void 0) return Q.Error.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadQueryErrorCode"),
        iM1 = class extends wA8.Command.classBuilder().ep(qA8.commonParams).m(function(A, Q, B, G) {
            return [(0, $A8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, UA8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, $UQ).ser(MA8).de(RA8).build() {
            static {
                _2(this, "AssumeRoleCommand")
            }
        },
        B18 = E5(),
        G18 = sG(),
        Z18 = R3(),
        I18 = CHA(),
        nM1 = class extends Z18.Command.classBuilder().ep(I18.commonParams).m(function(A, Q, B, G) {
            return [(0, G18.getSerdePlugin)(B, this.serialize, this.deserialize), (0, B18.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(RUQ, TUQ).ser(OA8).de(TA8).build() {
            static {
                _2(this, "AssumeRoleWithWebIdentityCommand")
            }
        },
        Y18 = HHA(),
        J18 = {
            AssumeRoleCommand: iM1,
            AssumeRoleWithWebIdentityCommand: nM1
        },
        gUQ = class extends Y18.STSClient {
            static {
                _2(this, "STS")
            }
        };
    (0, zA8.createAggregatedClient)(J18, gUQ);
    var W18 = CHA(),
        dM1 = DL(),
        zUQ = "us-east-1",
        uUQ = _2((A) => {
            if (typeof A?.Arn === "string") {
                let Q = A.Arn.split(":");
                if (Q.length > 4 && Q[4] !== "") return Q[4]
            }
            return
        }, "getAccountIdFromAssumedRoleUser"),
        mUQ = _2(async (A, Q, B) => {
            let G = typeof A === "function" ? await A() : A,
                Z = typeof Q === "function" ? await Q() : Q;
            return B?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${G} (provider)`, `${Z} (parent client)`, `${zUQ} (STS default)`), G ?? Z ?? zUQ
        }, "resolveRegion"),
        X18 = _2((A, Q) => {
            let B, G;
            return async (Z, I) => {
                if (G = Z, !B) {
                    let {
                        logger: F = A?.parentClientConfig?.logger,
                        region: V,
                        requestHandler: K = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: D
                    } = A, H = await mUQ(V, A?.parentClientConfig?.region, D), C = !dUQ(K);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        credentialDefaultProvider: _2(() => async () => G, "credentialDefaultProvider"),
                        region: H,
                        requestHandler: C ? K : void 0,
                        logger: F
                    })
                }
                let {
                    Credentials: Y,
                    AssumedRoleUser: J
                } = await B.send(new iM1(I));
                if (!Y || !Y.AccessKeyId || !Y.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${I.RoleArn}`);
                let W = uUQ(J),
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
                return (0, dM1.setCredentialFeature)(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X
            }
        }, "getDefaultRoleAssumer"),
        F18 = _2((A, Q) => {
            let B;
            return async (G) => {
                if (!B) {
                    let {
                        logger: W = A?.parentClientConfig?.logger,
                        region: X,
                        requestHandler: F = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: V
                    } = A, K = await mUQ(X, A?.parentClientConfig?.region, V), D = !dUQ(F);
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
                } = await B.send(new nM1(G));
                if (!Z || !Z.AccessKeyId || !Z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${G.RoleArn}`);
                let Y = uUQ(I),
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
                if (Y)(0, dM1.setCredentialFeature)(J, "RESOLVED_ACCOUNT_ID", "T");
                return (0, dM1.setCredentialFeature)(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J
            }
        }, "getDefaultRoleAssumerWithWebIdentity"),
        dUQ = _2((A) => {
            return A?.metadata?.handlerProtocol === "h2"
        }, "isH2"),
        cUQ = HHA(),
        pUQ = _2((A, Q) => {
            if (!Q) return A;
            else return class extends A {
                static {
                    _2(this, "CustomizableSTSClient")
                }
                constructor(G) {
                    super(G);
                    for (let Z of Q) this.middlewareStack.use(Z)
                }
            }
        }, "getCustomizableStsClientCtor"),
        lUQ = _2((A = {}, Q) => X18(A, pUQ(cUQ.STSClient, Q)), "getDefaultRoleAssumer"),
        iUQ = _2((A = {}, Q) => F18(A, pUQ(cUQ.STSClient, Q)), "getDefaultRoleAssumerWithWebIdentity"),
        V18 = _2((A) => (Q) => A({
            roleAssumer: lUQ(Q),
            roleAssumerWithWebIdentity: iUQ(Q),
            ...Q
        }), "decorateDefaultCredentialProvider")
});
var CuA = U((pH7, sUQ) => {
    var {
        defineProperty: HuA,
        getOwnPropertyDescriptor: K18,
        getOwnPropertyNames: D18
    } = Object, H18 = Object.prototype.hasOwnProperty, rM1 = (A, Q) => HuA(A, "name", {
        value: Q,
        configurable: !0
    }), C18 = (A, Q) => {
        for (var B in Q) HuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, E18 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of D18(Q))
                if (!H18.call(A, Z) && Z !== B) HuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = K18(Q, Z)) || G.enumerable
                })
        }
        return A
    }, z18 = (A) => E18(HuA({}, "__esModule", {
        value: !0
    }), A), aUQ = {};
    C18(aUQ, {
        fromProcess: () => L18
    });
    sUQ.exports = z18(aUQ);
    var nUQ = NG(),
        sM1 = P2(),
        U18 = UA("child_process"),
        $18 = UA("util"),
        w18 = DL(),
        q18 = rM1((A, Q, B) => {
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
            return (0, w18.setCredentialFeature)(Z, "CREDENTIALS_PROCESS", "w"), Z
        }, "getValidatedProcessCredentials"),
        N18 = rM1(async (A, Q, B) => {
            let G = Q[A];
            if (Q[A]) {
                let Z = G.credential_process;
                if (Z !== void 0) {
                    let I = (0, $18.promisify)(U18.exec);
                    try {
                        let {
                            stdout: Y
                        } = await I(Z), J;
                        try {
                            J = JSON.parse(Y.trim())
                        } catch {
                            throw Error(`Profile ${A} credential_process returned invalid JSON.`)
                        }
                        return q18(A, J, Q)
                    } catch (Y) {
                        throw new sM1.CredentialsProviderError(Y.message, {
                            logger: B
                        })
                    }
                } else throw new sM1.CredentialsProviderError(`Profile ${A} did not contain credential_process.`, {
                    logger: B
                })
            } else throw new sM1.CredentialsProviderError(`Profile ${A} could not be found in shared credentials file.`, {
                logger: B
            })
        }, "resolveProcessCredentials"),
        L18 = rM1((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
            let B = await (0, nUQ.parseKnownFiles)(A);
            return N18((0, nUQ.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), B, A.logger)
        }, "fromProcess")
});
var tM1 = U((rUQ) => {
    Object.defineProperty(rUQ, "__esModule", {
        value: !0
    });
    rUQ.resolveHttpAuthSchemeConfig = rUQ.defaultSSOHttpAuthSchemeProvider = rUQ.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var M18 = pz(),
        oM1 = K7(),
        O18 = async (A, Q, B) => {
            return {
                operation: (0, oM1.getSmithyContext)(Q).operation,
                region: await (0, oM1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    rUQ.defaultSSOHttpAuthSchemeParametersProvider = O18;

    function R18(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "awsssoportal",
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

    function EuA(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var T18 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "GetRoleCredentials": {
                Q.push(EuA(A));
                break
            }
            case "ListAccountRoles": {
                Q.push(EuA(A));
                break
            }
            case "ListAccounts": {
                Q.push(EuA(A));
                break
            }
            case "Logout": {
                Q.push(EuA(A));
                break
            }
            default:
                Q.push(R18(A))
        }
        return Q
    };
    rUQ.defaultSSOHttpAuthSchemeProvider = T18;
    var P18 = (A) => {
        let Q = (0, M18.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, oM1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    rUQ.resolveHttpAuthSchemeConfig = P18
});
var tUQ = U((iH7, _18) => {
    _18.exports = {
        name: "@aws-sdk/client-sso",
        description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
        version: "3.840.0",
        scripts: {
            build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline client-sso",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            "extract:docs": "api-extractor run --local",
            "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: !1,
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.840.0",
            "@aws-sdk/middleware-host-header": "3.840.0",
            "@aws-sdk/middleware-logger": "3.840.0",
            "@aws-sdk/middleware-recursion-detection": "3.840.0",
            "@aws-sdk/middleware-user-agent": "3.840.0",
            "@aws-sdk/region-config-resolver": "3.840.0",
            "@aws-sdk/types": "3.840.0",
            "@aws-sdk/util-endpoints": "3.840.0",
            "@aws-sdk/util-user-agent-browser": "3.840.0",
            "@aws-sdk/util-user-agent-node": "3.840.0",
            "@smithy/config-resolver": "^4.1.4",
            "@smithy/core": "^3.6.0",
            "@smithy/fetch-http-handler": "^5.0.4",
            "@smithy/hash-node": "^4.0.4",
            "@smithy/invalid-dependency": "^4.0.4",
            "@smithy/middleware-content-length": "^4.0.4",
            "@smithy/middleware-endpoint": "^4.1.13",
            "@smithy/middleware-retry": "^4.1.14",
            "@smithy/middleware-serde": "^4.0.8",
            "@smithy/middleware-stack": "^4.0.4",
            "@smithy/node-config-provider": "^4.1.3",
            "@smithy/node-http-handler": "^4.0.6",
            "@smithy/protocol-http": "^5.1.2",
            "@smithy/smithy-client": "^4.4.5",
            "@smithy/types": "^4.3.1",
            "@smithy/url-parser": "^4.0.4",
            "@smithy/util-base64": "^4.0.0",
            "@smithy/util-body-length-browser": "^4.0.0",
            "@smithy/util-body-length-node": "^4.0.0",
            "@smithy/util-defaults-mode-browser": "^4.0.21",
            "@smithy/util-defaults-mode-node": "^4.0.21",
            "@smithy/util-endpoints": "^3.0.6",
            "@smithy/util-middleware": "^4.0.4",
            "@smithy/util-retry": "^4.0.6",
            "@smithy/util-utf8": "^4.0.0",
            tslib: "^2.6.2"
        },
        devDependencies: {
            "@tsconfig/node18": "18.2.4",
            "@types/node": "^18.19.69",
            concurrently: "7.0.0",
            "downlevel-dts": "0.10.1",
            rimraf: "3.0.2",
            typescript: "~5.8.3"
        },
        engines: {
            node: ">=18.0.0"
        },
        typesVersions: {
            "<4.0": {
                "dist-types/*": ["dist-types/ts3.4/*"]
            }
        },
        files: ["dist-*/**"],
        author: {
            name: "AWS SDK for JavaScript Team",
            url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        browser: {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
        },
        "react-native": {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
        },
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "clients/client-sso"
        }
    }
});
var C$Q = U((D$Q) => {
    Object.defineProperty(D$Q, "__esModule", {
        value: !0
    });
    D$Q.ruleSet = void 0;
    var X$Q = "required",
        CL = "fn",
        EL = "argv",
        n8A = "ref",
        eUQ = !0,
        A$Q = "isSet",
        EHA = "booleanEquals",
        l8A = "error",
        i8A = "endpoint",
        iv = "tree",
        eM1 = "PartitionResult",
        AO1 = "getAttr",
        Q$Q = {
            [X$Q]: !1,
            type: "String"
        },
        B$Q = {
            [X$Q]: !0,
            default: !1,
            type: "Boolean"
        },
        G$Q = {
            [n8A]: "Endpoint"
        },
        F$Q = {
            [CL]: EHA,
            [EL]: [{
                [n8A]: "UseFIPS"
            }, !0]
        },
        V$Q = {
            [CL]: EHA,
            [EL]: [{
                [n8A]: "UseDualStack"
            }, !0]
        },
        HL = {},
        Z$Q = {
            [CL]: AO1,
            [EL]: [{
                [n8A]: eM1
            }, "supportsFIPS"]
        },
        K$Q = {
            [n8A]: eM1
        },
        I$Q = {
            [CL]: EHA,
            [EL]: [!0, {
                [CL]: AO1,
                [EL]: [K$Q, "supportsDualStack"]
            }]
        },
        Y$Q = [F$Q],
        J$Q = [V$Q],
        W$Q = [{
            [n8A]: "Region"
        }],
        k18 = {
            version: "1.0",
            parameters: {
                Region: Q$Q,
                UseDualStack: B$Q,
                UseFIPS: B$Q,
                Endpoint: Q$Q
            },
            rules: [{
                conditions: [{
                    [CL]: A$Q,
                    [EL]: [G$Q]
                }],
                rules: [{
                    conditions: Y$Q,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: l8A
                }, {
                    conditions: J$Q,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: l8A
                }, {
                    endpoint: {
                        url: G$Q,
                        properties: HL,
                        headers: HL
                    },
                    type: i8A
                }],
                type: iv
            }, {
                conditions: [{
                    [CL]: A$Q,
                    [EL]: W$Q
                }],
                rules: [{
                    conditions: [{
                        [CL]: "aws.partition",
                        [EL]: W$Q,
                        assign: eM1
                    }],
                    rules: [{
                        conditions: [F$Q, V$Q],
                        rules: [{
                            conditions: [{
                                [CL]: EHA,
                                [EL]: [eUQ, Z$Q]
                            }, I$Q],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: HL,
                                    headers: HL
                                },
                                type: i8A
                            }],
                            type: iv
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: l8A
                        }],
                        type: iv
                    }, {
                        conditions: Y$Q,
                        rules: [{
                            conditions: [{
                                [CL]: EHA,
                                [EL]: [Z$Q, eUQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [CL]: "stringEquals",
                                    [EL]: [{
                                        [CL]: AO1,
                                        [EL]: [K$Q, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://portal.sso.{Region}.amazonaws.com",
                                    properties: HL,
                                    headers: HL
                                },
                                type: i8A
                            }, {
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: HL,
                                    headers: HL
                                },
                                type: i8A
                            }],
                            type: iv
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: l8A
                        }],
                        type: iv
                    }, {
                        conditions: J$Q,
                        rules: [{
                            conditions: [I$Q],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: HL,
                                    headers: HL
                                },
                                type: i8A
                            }],
                            type: iv
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: l8A
                        }],
                        type: iv
                    }, {
                        endpoint: {
                            url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                            properties: HL,
                            headers: HL
                        },
                        type: i8A
                    }],
                    type: iv
                }],
                type: iv
            }, {
                error: "Invalid Configuration: Missing Region",
                type: l8A
            }]
        };
    D$Q.ruleSet = k18
});
var U$Q = U((E$Q) => {
    Object.defineProperty(E$Q, "__esModule", {
        value: !0
    });
    E$Q.defaultEndpointResolver = void 0;
    var y18 = JHA(),
        QO1 = II(),
        x18 = C$Q(),
        v18 = new QO1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        b18 = (A, Q = {}) => {
            return v18.get(A, () => (0, QO1.resolveEndpoint)(x18.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    E$Q.defaultEndpointResolver = b18;
    QO1.customEndpointFunctions.aws = y18.awsEndpointFunctions
});
var L$Q = U((q$Q) => {
    Object.defineProperty(q$Q, "__esModule", {
        value: !0
    });
    q$Q.getRuntimeConfig = void 0;
    var f18 = pz(),
        h18 = nB(),
        g18 = R3(),
        u18 = zJ(),
        $$Q = gr(),
        w$Q = L2(),
        m18 = tM1(),
        d18 = U$Q(),
        c18 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? $$Q.fromBase64,
                base64Encoder: A?.base64Encoder ?? $$Q.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? d18.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? m18.defaultSSOHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new f18.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new h18.NoAuthSigner
                }],
                logger: A?.logger ?? new g18.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO",
                urlParser: A?.urlParser ?? u18.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? w$Q.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? w$Q.toUtf8
            }
        };
    q$Q.getRuntimeConfig = c18
});
var S$Q = U((P$Q) => {
    Object.defineProperty(P$Q, "__esModule", {
        value: !0
    });
    P$Q.getRuntimeConfig = void 0;
    var p18 = Tr(),
        l18 = p18.__importDefault(tUQ()),
        M$Q = pz(),
        O$Q = WuA(),
        zuA = S8(),
        i18 = wX(),
        R$Q = X6(),
        cr = xI(),
        T$Q = oG(),
        n18 = qX(),
        a18 = FW(),
        s18 = L$Q(),
        r18 = R3(),
        o18 = NX(),
        t18 = R3(),
        e18 = (A) => {
            (0, t18.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, o18.resolveDefaultsModeConfig)(A),
                B = () => Q().then(r18.loadConfigsForDefaultMode),
                G = (0, s18.getRuntimeConfig)(A);
            (0, M$Q.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, cr.loadConfig)(M$Q.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? n18.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, O$Q.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: l18.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, cr.loadConfig)(R$Q.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, cr.loadConfig)(zuA.NODE_REGION_CONFIG_OPTIONS, {
                    ...zuA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: T$Q.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, cr.loadConfig)({
                    ...R$Q.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || a18.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? i18.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? T$Q.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, cr.loadConfig)(zuA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, cr.loadConfig)(zuA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, cr.loadConfig)(O$Q.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    P$Q.getRuntimeConfig = e18
});
var ZwQ = U((oH7, GwQ) => {
    var {
        defineProperty: UuA,
        getOwnPropertyDescriptor: A08,
        getOwnPropertyNames: Q08
    } = Object, B08 = Object.prototype.hasOwnProperty, $5 = (A, Q) => UuA(A, "name", {
        value: Q,
        configurable: !0
    }), G08 = (A, Q) => {
        for (var B in Q) UuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Z08 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Q08(Q))
                if (!B08.call(A, Z) && Z !== B) UuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = A08(Q, Z)) || G.enumerable
                })
        }
        return A
    }, I08 = (A) => Z08(UuA({}, "__esModule", {
        value: !0
    }), A), f$Q = {};
    G08(f$Q, {
        GetRoleCredentialsCommand: () => AwQ,
        GetRoleCredentialsRequestFilterSensitiveLog: () => d$Q,
        GetRoleCredentialsResponseFilterSensitiveLog: () => p$Q,
        InvalidRequestException: () => h$Q,
        ListAccountRolesCommand: () => BO1,
        ListAccountRolesRequestFilterSensitiveLog: () => l$Q,
        ListAccountsCommand: () => GO1,
        ListAccountsRequestFilterSensitiveLog: () => i$Q,
        LogoutCommand: () => QwQ,
        LogoutRequestFilterSensitiveLog: () => n$Q,
        ResourceNotFoundException: () => g$Q,
        RoleCredentialsFilterSensitiveLog: () => c$Q,
        SSO: () => BwQ,
        SSOClient: () => wuA,
        SSOServiceException: () => a8A,
        TooManyRequestsException: () => u$Q,
        UnauthorizedException: () => m$Q,
        __Client: () => W2.Client,
        paginateListAccountRoles: () => _08,
        paginateListAccounts: () => k08
    });
    GwQ.exports = I08(f$Q);
    var _$Q = hgA(),
        Y08 = ugA(),
        J08 = cgA(),
        k$Q = DHA(),
        W08 = S8(),
        av = nB(),
        X08 = zX(),
        UHA = E5(),
        y$Q = X6(),
        x$Q = tM1(),
        F08 = $5((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "awsssoportal"
            })
        }, "resolveClientEndpointParameters"),
        $uA = {
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
        V08 = S$Q(),
        v$Q = VuA(),
        b$Q = Cw(),
        W2 = R3(),
        K08 = $5((A) => {
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
        D08 = $5((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        H08 = $5((A, Q) => {
            let B = Object.assign((0, v$Q.getAwsRegionExtensionConfiguration)(A), (0, W2.getDefaultExtensionConfiguration)(A), (0, b$Q.getHttpHandlerExtensionConfiguration)(A), K08(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, v$Q.resolveAwsRegionExtensionConfiguration)(B), (0, W2.resolveDefaultRuntimeConfig)(B), (0, b$Q.resolveHttpHandlerRuntimeConfig)(B), D08(B))
        }, "resolveRuntimeExtensions"),
        wuA = class extends W2.Client {
            static {
                $5(this, "SSOClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, V08.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = F08(Q),
                    G = (0, k$Q.resolveUserAgentConfig)(B),
                    Z = (0, y$Q.resolveRetryConfig)(G),
                    I = (0, W08.resolveRegionConfig)(Z),
                    Y = (0, _$Q.resolveHostHeaderConfig)(I),
                    J = (0, UHA.resolveEndpointConfig)(Y),
                    W = (0, x$Q.resolveHttpAuthSchemeConfig)(J),
                    X = H08(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, k$Q.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, y$Q.getRetryPlugin)(this.config)), this.middlewareStack.use((0, X08.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, _$Q.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, Y08.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, J08.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, av.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: x$Q.defaultSSOHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: $5(async (F) => new av.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, av.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        quA = sG(),
        a8A = class A extends W2.ServiceException {
            static {
                $5(this, "SSOServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        h$Q = class A extends a8A {
            static {
                $5(this, "InvalidRequestException")
            }
            name = "InvalidRequestException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "InvalidRequestException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        g$Q = class A extends a8A {
            static {
                $5(this, "ResourceNotFoundException")
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
        u$Q = class A extends a8A {
            static {
                $5(this, "TooManyRequestsException")
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
        m$Q = class A extends a8A {
            static {
                $5(this, "UnauthorizedException")
            }
            name = "UnauthorizedException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "UnauthorizedException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        d$Q = $5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: W2.SENSITIVE_STRING
            }
        }), "GetRoleCredentialsRequestFilterSensitiveLog"),
        c$Q = $5((A) => ({
            ...A,
            ...A.secretAccessKey && {
                secretAccessKey: W2.SENSITIVE_STRING
            },
            ...A.sessionToken && {
                sessionToken: W2.SENSITIVE_STRING
            }
        }), "RoleCredentialsFilterSensitiveLog"),
        p$Q = $5((A) => ({
            ...A,
            ...A.roleCredentials && {
                roleCredentials: c$Q(A.roleCredentials)
            }
        }), "GetRoleCredentialsResponseFilterSensitiveLog"),
        l$Q = $5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: W2.SENSITIVE_STRING
            }
        }), "ListAccountRolesRequestFilterSensitiveLog"),
        i$Q = $5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: W2.SENSITIVE_STRING
            }
        }), "ListAccountsRequestFilterSensitiveLog"),
        n$Q = $5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: W2.SENSITIVE_STRING
            }
        }), "LogoutRequestFilterSensitiveLog"),
        zHA = pz(),
        C08 = $5(async (A, Q) => {
            let B = (0, av.requestBuilder)(A, Q),
                G = (0, W2.map)({}, W2.isSerializableHeaderValue, {
                    [MuA]: A[LuA]
                });
            B.bp("/federation/credentials");
            let Z = (0, W2.map)({
                    [j08]: [, (0, W2.expectNonNull)(A[P08], "roleName")],
                    [s$Q]: [, (0, W2.expectNonNull)(A[a$Q], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_GetRoleCredentialsCommand"),
        E08 = $5(async (A, Q) => {
            let B = (0, av.requestBuilder)(A, Q),
                G = (0, W2.map)({}, W2.isSerializableHeaderValue, {
                    [MuA]: A[LuA]
                });
            B.bp("/assignment/roles");
            let Z = (0, W2.map)({
                    [e$Q]: [, A[t$Q]],
                    [o$Q]: [() => A.maxResults !== void 0, () => A[r$Q].toString()],
                    [s$Q]: [, (0, W2.expectNonNull)(A[a$Q], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountRolesCommand"),
        z08 = $5(async (A, Q) => {
            let B = (0, av.requestBuilder)(A, Q),
                G = (0, W2.map)({}, W2.isSerializableHeaderValue, {
                    [MuA]: A[LuA]
                });
            B.bp("/assignment/accounts");
            let Z = (0, W2.map)({
                    [e$Q]: [, A[t$Q]],
                    [o$Q]: [() => A.maxResults !== void 0, () => A[r$Q].toString()]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountsCommand"),
        U08 = $5(async (A, Q) => {
            let B = (0, av.requestBuilder)(A, Q),
                G = (0, W2.map)({}, W2.isSerializableHeaderValue, {
                    [MuA]: A[LuA]
                });
            B.bp("/logout");
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_LogoutCommand"),
        $08 = $5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NuA(A, Q);
            let B = (0, W2.map)({
                    $metadata: wd(A)
                }),
                G = (0, W2.expectNonNull)((0, W2.expectObject)(await (0, zHA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, W2.take)(G, {
                    roleCredentials: W2._json
                });
            return Object.assign(B, Z), B
        }, "de_GetRoleCredentialsCommand"),
        w08 = $5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NuA(A, Q);
            let B = (0, W2.map)({
                    $metadata: wd(A)
                }),
                G = (0, W2.expectNonNull)((0, W2.expectObject)(await (0, zHA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, W2.take)(G, {
                    nextToken: W2.expectString,
                    roleList: W2._json
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountRolesCommand"),
        q08 = $5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NuA(A, Q);
            let B = (0, W2.map)({
                    $metadata: wd(A)
                }),
                G = (0, W2.expectNonNull)((0, W2.expectObject)(await (0, zHA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, W2.take)(G, {
                    accountList: W2._json,
                    nextToken: W2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountsCommand"),
        N08 = $5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NuA(A, Q);
            let B = (0, W2.map)({
                $metadata: wd(A)
            });
            return await (0, W2.collectBody)(A.body, Q), B
        }, "de_LogoutCommand"),
        NuA = $5(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, zHA.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, zHA.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "InvalidRequestException":
                case "com.amazonaws.sso#InvalidRequestException":
                    throw await M08(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.sso#ResourceNotFoundException":
                    throw await O08(B, Q);
                case "TooManyRequestsException":
                case "com.amazonaws.sso#TooManyRequestsException":
                    throw await R08(B, Q);
                case "UnauthorizedException":
                case "com.amazonaws.sso#UnauthorizedException":
                    throw await T08(B, Q);
                default:
                    let Z = B.body;
                    return L08({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        L08 = (0, W2.withBaseException)(a8A),
        M08 = $5(async (A, Q) => {
            let B = (0, W2.map)({}),
                G = A.body,
                Z = (0, W2.take)(G, {
                    message: W2.expectString
                });
            Object.assign(B, Z);
            let I = new h$Q({
                $metadata: wd(A),
                ...B
            });
            return (0, W2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        O08 = $5(async (A, Q) => {
            let B = (0, W2.map)({}),
                G = A.body,
                Z = (0, W2.take)(G, {
                    message: W2.expectString
                });
            Object.assign(B, Z);
            let I = new g$Q({
                $metadata: wd(A),
                ...B
            });
            return (0, W2.decorateServiceException)(I, A.body)
        }, "de_ResourceNotFoundExceptionRes"),
        R08 = $5(async (A, Q) => {
            let B = (0, W2.map)({}),
                G = A.body,
                Z = (0, W2.take)(G, {
                    message: W2.expectString
                });
            Object.assign(B, Z);
            let I = new u$Q({
                $metadata: wd(A),
                ...B
            });
            return (0, W2.decorateServiceException)(I, A.body)
        }, "de_TooManyRequestsExceptionRes"),
        T08 = $5(async (A, Q) => {
            let B = (0, W2.map)({}),
                G = A.body,
                Z = (0, W2.take)(G, {
                    message: W2.expectString
                });
            Object.assign(B, Z);
            let I = new m$Q({
                $metadata: wd(A),
                ...B
            });
            return (0, W2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedExceptionRes"),
        wd = $5((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        a$Q = "accountId",
        LuA = "accessToken",
        s$Q = "account_id",
        r$Q = "maxResults",
        o$Q = "max_result",
        t$Q = "nextToken",
        e$Q = "next_token",
        P08 = "roleName",
        j08 = "role_name",
        MuA = "x-amz-sso_bearer_token",
        AwQ = class extends W2.Command.classBuilder().ep($uA).m(function(A, Q, B, G) {
            return [(0, quA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, UHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(d$Q, p$Q).ser(C08).de($08).build() {
            static {
                $5(this, "GetRoleCredentialsCommand")
            }
        },
        BO1 = class extends W2.Command.classBuilder().ep($uA).m(function(A, Q, B, G) {
            return [(0, quA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, UHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(l$Q, void 0).ser(E08).de(w08).build() {
            static {
                $5(this, "ListAccountRolesCommand")
            }
        },
        GO1 = class extends W2.Command.classBuilder().ep($uA).m(function(A, Q, B, G) {
            return [(0, quA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, UHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(i$Q, void 0).ser(z08).de(q08).build() {
            static {
                $5(this, "ListAccountsCommand")
            }
        },
        QwQ = class extends W2.Command.classBuilder().ep($uA).m(function(A, Q, B, G) {
            return [(0, quA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, UHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(n$Q, void 0).ser(U08).de(N08).build() {
            static {
                $5(this, "LogoutCommand")
            }
        },
        S08 = {
            GetRoleCredentialsCommand: AwQ,
            ListAccountRolesCommand: BO1,
            ListAccountsCommand: GO1,
            LogoutCommand: QwQ
        },
        BwQ = class extends wuA {
            static {
                $5(this, "SSO")
            }
        };
    (0, W2.createAggregatedClient)(S08, BwQ);
    var _08 = (0, av.createPaginator)(wuA, BO1, "nextToken", "nextToken", "maxResults"),
        k08 = (0, av.createPaginator)(wuA, GO1, "nextToken", "nextToken", "maxResults")
});
var IO1 = U((IwQ) => {
    Object.defineProperty(IwQ, "__esModule", {
        value: !0
    });
    IwQ.resolveHttpAuthSchemeConfig = IwQ.defaultSSOOIDCHttpAuthSchemeProvider = IwQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
    var y08 = pz(),
        ZO1 = K7(),
        x08 = async (A, Q, B) => {
            return {
                operation: (0, ZO1.getSmithyContext)(Q).operation,
                region: await (0, ZO1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    IwQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = x08;

    function v08(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sso-oauth",
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

    function b08(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var f08 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "CreateToken": {
                Q.push(b08(A));
                break
            }
            default:
                Q.push(v08(A))
        }
        return Q
    };
    IwQ.defaultSSOOIDCHttpAuthSchemeProvider = f08;
    var h08 = (A) => {
        let Q = (0, y08.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, ZO1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    IwQ.resolveHttpAuthSchemeConfig = h08
});
var LwQ = U((qwQ) => {
    Object.defineProperty(qwQ, "__esModule", {
        value: !0
    });
    qwQ.ruleSet = void 0;
    var zwQ = "required",
        UL = "fn",
        $L = "argv",
        o8A = "ref",
        JwQ = !0,
        WwQ = "isSet",
        $HA = "booleanEquals",
        s8A = "error",
        r8A = "endpoint",
        sv = "tree",
        YO1 = "PartitionResult",
        JO1 = "getAttr",
        XwQ = {
            [zwQ]: !1,
            type: "String"
        },
        FwQ = {
            [zwQ]: !0,
            default: !1,
            type: "Boolean"
        },
        VwQ = {
            [o8A]: "Endpoint"
        },
        UwQ = {
            [UL]: $HA,
            [$L]: [{
                [o8A]: "UseFIPS"
            }, !0]
        },
        $wQ = {
            [UL]: $HA,
            [$L]: [{
                [o8A]: "UseDualStack"
            }, !0]
        },
        zL = {},
        KwQ = {
            [UL]: JO1,
            [$L]: [{
                [o8A]: YO1
            }, "supportsFIPS"]
        },
        wwQ = {
            [o8A]: YO1
        },
        DwQ = {
            [UL]: $HA,
            [$L]: [!0, {
                [UL]: JO1,
                [$L]: [wwQ, "supportsDualStack"]
            }]
        },