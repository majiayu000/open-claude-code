/**
 * Claude Code Decompiled
 * Category: ui
 * File: 14/53
 * Lines: 126871 - 128368 (1498 lines)
 * Original file: cli.js
 */

        }), "AssumeRoleResponseFilterSensitiveLog"),
        _iQ = class A extends Fb {
            static {
                y2(this, "ExpiredTokenException")
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
        kiQ = class A extends Fb {
            static {
                y2(this, "MalformedPolicyDocumentException")
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
        yiQ = class A extends Fb {
            static {
                y2(this, "PackedPolicyTooLargeException")
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
        xiQ = class A extends Fb {
            static {
                y2(this, "RegionDisabledException")
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
        viQ = class A extends Fb {
            static {
                y2(this, "IDPRejectedClaimException")
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
        biQ = class A extends Fb {
            static {
                y2(this, "InvalidIdentityTokenException")
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
        fiQ = y2((A) => ({
            ...A,
            ...A.WebIdentityToken && {
                WebIdentityToken: jiQ.SENSITIVE_STRING
            }
        }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog"),
        hiQ = y2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: eS1(A.Credentials)
            }
        }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog"),
        giQ = class A extends Fb {
            static {
                y2(this, "IDPCommunicationErrorException")
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
        A_1 = OV(),
        oP8 = qcA(),
        z7 = UJ(),
        tP8 = y2(async (A, Q) => {
            let B = liQ,
                G;
            return G = siQ({
                ...Xj8(A, Q),
                [niQ]: Tj8,
                [aiQ]: iiQ
            }), piQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleCommand"),
        eP8 = y2(async (A, Q) => {
            let B = liQ,
                G;
            return G = siQ({
                ...Fj8(A, Q),
                [niQ]: Pj8,
                [aiQ]: iiQ
            }), piQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleWithWebIdentityCommand"),
        Aj8 = y2(async (A, Q) => {
            if (A.statusCode >= 300) return uiQ(A, Q);
            let B = await (0, A_1.parseXmlBody)(A.body, Q),
                G = {};
            return G = zj8(B.AssumeRoleResult, Q), {
                $metadata: Vb(A),
                ...G
            }
        }, "de_AssumeRoleCommand"),
        Qj8 = y2(async (A, Q) => {
            if (A.statusCode >= 300) return uiQ(A, Q);
            let B = await (0, A_1.parseXmlBody)(A.body, Q),
                G = {};
            return G = Uj8(B.AssumeRoleWithWebIdentityResult, Q), {
                $metadata: Vb(A),
                ...G
            }
        }, "de_AssumeRoleWithWebIdentityCommand"),
        uiQ = y2(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, A_1.parseXmlErrorBody)(A.body, Q)
                },
                G = jj8(A, B.body);
            switch (G) {
                case "ExpiredTokenException":
                case "com.amazonaws.sts#ExpiredTokenException":
                    throw await Bj8(B, Q);
                case "MalformedPolicyDocument":
                case "com.amazonaws.sts#MalformedPolicyDocumentException":
                    throw await Yj8(B, Q);
                case "PackedPolicyTooLarge":
                case "com.amazonaws.sts#PackedPolicyTooLargeException":
                    throw await Jj8(B, Q);
                case "RegionDisabledException":
                case "com.amazonaws.sts#RegionDisabledException":
                    throw await Wj8(B, Q);
                case "IDPCommunicationError":
                case "com.amazonaws.sts#IDPCommunicationErrorException":
                    throw await Gj8(B, Q);
                case "IDPRejectedClaim":
                case "com.amazonaws.sts#IDPRejectedClaimException":
                    throw await Zj8(B, Q);
                case "InvalidIdentityToken":
                case "com.amazonaws.sts#InvalidIdentityTokenException":
                    throw await Ij8(B, Q);
                default:
                    let Z = B.body;
                    return Rj8({
                        output: A,
                        parsedBody: Z.Error,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        Bj8 = y2(async (A, Q) => {
            let B = A.body,
                G = $j8(B.Error, Q),
                Z = new _iQ({
                    $metadata: Vb(A),
                    ...G
                });
            return (0, z7.decorateServiceException)(Z, B)
        }, "de_ExpiredTokenExceptionRes"),
        Gj8 = y2(async (A, Q) => {
            let B = A.body,
                G = wj8(B.Error, Q),
                Z = new giQ({
                    $metadata: Vb(A),
                    ...G
                });
            return (0, z7.decorateServiceException)(Z, B)
        }, "de_IDPCommunicationErrorExceptionRes"),
        Zj8 = y2(async (A, Q) => {
            let B = A.body,
                G = qj8(B.Error, Q),
                Z = new viQ({
                    $metadata: Vb(A),
                    ...G
                });
            return (0, z7.decorateServiceException)(Z, B)
        }, "de_IDPRejectedClaimExceptionRes"),
        Ij8 = y2(async (A, Q) => {
            let B = A.body,
                G = Nj8(B.Error, Q),
                Z = new biQ({
                    $metadata: Vb(A),
                    ...G
                });
            return (0, z7.decorateServiceException)(Z, B)
        }, "de_InvalidIdentityTokenExceptionRes"),
        Yj8 = y2(async (A, Q) => {
            let B = A.body,
                G = Lj8(B.Error, Q),
                Z = new kiQ({
                    $metadata: Vb(A),
                    ...G
                });
            return (0, z7.decorateServiceException)(Z, B)
        }, "de_MalformedPolicyDocumentExceptionRes"),
        Jj8 = y2(async (A, Q) => {
            let B = A.body,
                G = Mj8(B.Error, Q),
                Z = new yiQ({
                    $metadata: Vb(A),
                    ...G
                });
            return (0, z7.decorateServiceException)(Z, B)
        }, "de_PackedPolicyTooLargeExceptionRes"),
        Wj8 = y2(async (A, Q) => {
            let B = A.body,
                G = Oj8(B.Error, Q),
                Z = new xiQ({
                    $metadata: Vb(A),
                    ...G
                });
            return (0, z7.decorateServiceException)(Z, B)
        }, "de_RegionDisabledExceptionRes"),
        Xj8 = y2((A, Q) => {
            let B = {};
            if (A[K5A] != null) B[K5A] = A[K5A];
            if (A[D5A] != null) B[D5A] = A[D5A];
            if (A[F5A] != null) {
                let G = miQ(A[F5A], Q);
                if (A[F5A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[X5A] != null) B[X5A] = A[X5A];
            if (A[W5A] != null) B[W5A] = A[W5A];
            if (A[pS1] != null) {
                let G = Ej8(A[pS1], Q);
                if (A[pS1]?.length === 0) B.Tags = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `Tags.${Z}`;
                    B[Y] = I
                })
            }
            if (A[iS1] != null) {
                let G = Cj8(A[iS1], Q);
                if (A[iS1]?.length === 0) B.TransitiveTagKeys = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `TransitiveTagKeys.${Z}`;
                    B[Y] = I
                })
            }
            if (A[xS1] != null) B[xS1] = A[xS1];
            if (A[dS1] != null) B[dS1] = A[dS1];
            if (A[lS1] != null) B[lS1] = A[lS1];
            if (A[Xb] != null) B[Xb] = A[Xb];
            if (A[fS1] != null) {
                let G = Dj8(A[fS1], Q);
                if (A[fS1]?.length === 0) B.ProvidedContexts = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `ProvidedContexts.${Z}`;
                    B[Y] = I
                })
            }
            return B
        }, "se_AssumeRoleRequest"),
        Fj8 = y2((A, Q) => {
            let B = {};
            if (A[K5A] != null) B[K5A] = A[K5A];
            if (A[D5A] != null) B[D5A] = A[D5A];
            if (A[aS1] != null) B[aS1] = A[aS1];
            if (A[hS1] != null) B[hS1] = A[hS1];
            if (A[F5A] != null) {
                let G = miQ(A[F5A], Q);
                if (A[F5A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[X5A] != null) B[X5A] = A[X5A];
            if (A[W5A] != null) B[W5A] = A[W5A];
            return B
        }, "se_AssumeRoleWithWebIdentityRequest"),
        miQ = y2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = Vj8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_policyDescriptorListType"),
        Vj8 = y2((A, Q) => {
            let B = {};
            if (A[sS1] != null) B[sS1] = A[sS1];
            return B
        }, "se_PolicyDescriptorType"),
        Kj8 = y2((A, Q) => {
            let B = {};
            if (A[bS1] != null) B[bS1] = A[bS1];
            if (A[kS1] != null) B[kS1] = A[kS1];
            return B
        }, "se_ProvidedContext"),
        Dj8 = y2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = Kj8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_ProvidedContextsListType"),
        Hj8 = y2((A, Q) => {
            let B = {};
            if (A[vS1] != null) B[vS1] = A[vS1];
            if (A[nS1] != null) B[nS1] = A[nS1];
            return B
        }, "se_Tag"),
        Cj8 = y2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                B[`member.${G}`] = Z, G++
            }
            return B
        }, "se_tagKeyListType"),
        Ej8 = y2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = Hj8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_tagListType"),
        diQ = y2((A, Q) => {
            let B = {};
            if (A[jS1] != null) B[jS1] = (0, z7.expectString)(A[jS1]);
            if (A[SS1] != null) B[SS1] = (0, z7.expectString)(A[SS1]);
            return B
        }, "de_AssumedRoleUser"),
        zj8 = y2((A, Q) => {
            let B = {};
            if (A[J5A] != null) B[J5A] = ciQ(A[J5A], Q);
            if (A[Y5A] != null) B[Y5A] = diQ(A[Y5A], Q);
            if (A[V5A] != null) B[V5A] = (0, z7.strictParseInt32)(A[V5A]);
            if (A[Xb] != null) B[Xb] = (0, z7.expectString)(A[Xb]);
            return B
        }, "de_AssumeRoleResponse"),
        Uj8 = y2((A, Q) => {
            let B = {};
            if (A[J5A] != null) B[J5A] = ciQ(A[J5A], Q);
            if (A[mS1] != null) B[mS1] = (0, z7.expectString)(A[mS1]);
            if (A[Y5A] != null) B[Y5A] = diQ(A[Y5A], Q);
            if (A[V5A] != null) B[V5A] = (0, z7.strictParseInt32)(A[V5A]);
            if (A[gS1] != null) B[gS1] = (0, z7.expectString)(A[gS1]);
            if (A[_S1] != null) B[_S1] = (0, z7.expectString)(A[_S1]);
            if (A[Xb] != null) B[Xb] = (0, z7.expectString)(A[Xb]);
            return B
        }, "de_AssumeRoleWithWebIdentityResponse"),
        ciQ = y2((A, Q) => {
            let B = {};
            if (A[PS1] != null) B[PS1] = (0, z7.expectString)(A[PS1]);
            if (A[uS1] != null) B[uS1] = (0, z7.expectString)(A[uS1]);
            if (A[cS1] != null) B[cS1] = (0, z7.expectString)(A[cS1]);
            if (A[yS1] != null) B[yS1] = (0, z7.expectNonNull)((0, z7.parseRfc3339DateTimeWithOffset)(A[yS1]));
            return B
        }, "de_Credentials"),
        $j8 = y2((A, Q) => {
            let B = {};
            if (A[$W] != null) B[$W] = (0, z7.expectString)(A[$W]);
            return B
        }, "de_ExpiredTokenException"),
        wj8 = y2((A, Q) => {
            let B = {};
            if (A[$W] != null) B[$W] = (0, z7.expectString)(A[$W]);
            return B
        }, "de_IDPCommunicationErrorException"),
        qj8 = y2((A, Q) => {
            let B = {};
            if (A[$W] != null) B[$W] = (0, z7.expectString)(A[$W]);
            return B
        }, "de_IDPRejectedClaimException"),
        Nj8 = y2((A, Q) => {
            let B = {};
            if (A[$W] != null) B[$W] = (0, z7.expectString)(A[$W]);
            return B
        }, "de_InvalidIdentityTokenException"),
        Lj8 = y2((A, Q) => {
            let B = {};
            if (A[$W] != null) B[$W] = (0, z7.expectString)(A[$W]);
            return B
        }, "de_MalformedPolicyDocumentException"),
        Mj8 = y2((A, Q) => {
            let B = {};
            if (A[$W] != null) B[$W] = (0, z7.expectString)(A[$W]);
            return B
        }, "de_PackedPolicyTooLargeException"),
        Oj8 = y2((A, Q) => {
            let B = {};
            if (A[$W] != null) B[$W] = (0, z7.expectString)(A[$W]);
            return B
        }, "de_RegionDisabledException"),
        Vb = y2((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        Rj8 = (0, z7.withBaseException)(Fb),
        piQ = y2(async (A, Q, B, G, Z) => {
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
            return new oP8.HttpRequest(X)
        }, "buildHttpRpcRequest"),
        liQ = {
            "content-type": "application/x-www-form-urlencoded"
        },
        iiQ = "2011-06-15",
        niQ = "Action",
        PS1 = "AccessKeyId",
        Tj8 = "AssumeRole",
        jS1 = "AssumedRoleId",
        Y5A = "AssumedRoleUser",
        Pj8 = "AssumeRoleWithWebIdentity",
        SS1 = "Arn",
        _S1 = "Audience",
        J5A = "Credentials",
        kS1 = "ContextAssertion",
        W5A = "DurationSeconds",
        yS1 = "Expiration",
        xS1 = "ExternalId",
        vS1 = "Key",
        X5A = "Policy",
        F5A = "PolicyArns",
        bS1 = "ProviderArn",
        fS1 = "ProvidedContexts",
        hS1 = "ProviderId",
        V5A = "PackedPolicySize",
        gS1 = "Provider",
        K5A = "RoleArn",
        D5A = "RoleSessionName",
        uS1 = "SecretAccessKey",
        mS1 = "SubjectFromWebIdentityToken",
        Xb = "SourceIdentity",
        dS1 = "SerialNumber",
        cS1 = "SessionToken",
        pS1 = "Tags",
        lS1 = "TokenCode",
        iS1 = "TransitiveTagKeys",
        aiQ = "Version",
        nS1 = "Value",
        aS1 = "WebIdentityToken",
        sS1 = "arn",
        $W = "message",
        siQ = y2((A) => Object.entries(A).map(([Q, B]) => (0, z7.extendedEncodeURIComponent)(Q) + "=" + (0, z7.extendedEncodeURIComponent)(B)).join("&"), "buildFormUrlencodedString"),
        jj8 = y2((A, Q) => {
            if (Q.Error?.Code !== void 0) return Q.Error.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadQueryErrorCode"),
        Q_1 = class extends aP8.Command.classBuilder().ep(sP8.commonParams).m(function(A, Q, B, G) {
            return [(0, nP8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, iP8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, SiQ).ser(tP8).de(Aj8).build() {
            static {
                y2(this, "AssumeRoleCommand")
            }
        },
        Sj8 = E5(),
        _j8 = sG(),
        kj8 = UJ(),
        yj8 = SCA(),
        B_1 = class extends kj8.Command.classBuilder().ep(yj8.commonParams).m(function(A, Q, B, G) {
            return [(0, _j8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Sj8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(fiQ, hiQ).ser(eP8).de(Qj8).build() {
            static {
                y2(this, "AssumeRoleWithWebIdentityCommand")
            }
        },
        xj8 = jCA(),
        vj8 = {
            AssumeRoleCommand: Q_1,
            AssumeRoleWithWebIdentityCommand: B_1
        },
        riQ = class extends xj8.STSClient {
            static {
                y2(this, "STS")
            }
        };
    (0, lP8.createAggregatedClient)(vj8, riQ);
    var bj8 = SCA(),
        oS1 = xS(),
        PiQ = "us-east-1",
        oiQ = y2((A) => {
            if (typeof A?.Arn === "string") {
                let Q = A.Arn.split(":");
                if (Q.length > 4 && Q[4] !== "") return Q[4]
            }
            return
        }, "getAccountIdFromAssumedRoleUser"),
        tiQ = y2(async (A, Q, B) => {
            let G = typeof A === "function" ? await A() : A,
                Z = typeof Q === "function" ? await Q() : Q;
            return B?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${G} (provider)`, `${Z} (parent client)`, `${PiQ} (STS default)`), G ?? Z ?? PiQ
        }, "resolveRegion"),
        fj8 = y2((A, Q) => {
            let B, G;
            return async (Z, I) => {
                if (G = Z, !B) {
                    let {
                        logger: F = A?.parentClientConfig?.logger,
                        region: V,
                        requestHandler: K = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: D
                    } = A, H = await tiQ(V, A?.parentClientConfig?.region, D), C = !eiQ(K);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        credentialDefaultProvider: y2(() => async () => G, "credentialDefaultProvider"),
                        region: H,
                        requestHandler: C ? K : void 0,
                        logger: F
                    })
                }
                let {
                    Credentials: Y,
                    AssumedRoleUser: J
                } = await B.send(new Q_1(I));
                if (!Y || !Y.AccessKeyId || !Y.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${I.RoleArn}`);
                let W = oiQ(J),
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
                return (0, oS1.setCredentialFeature)(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X
            }
        }, "getDefaultRoleAssumer"),
        hj8 = y2((A, Q) => {
            let B;
            return async (G) => {
                if (!B) {
                    let {
                        logger: W = A?.parentClientConfig?.logger,
                        region: X,
                        requestHandler: F = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: V
                    } = A, K = await tiQ(X, A?.parentClientConfig?.region, V), D = !eiQ(F);
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
                } = await B.send(new B_1(G));
                if (!Z || !Z.AccessKeyId || !Z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${G.RoleArn}`);
                let Y = oiQ(I),
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
                if (Y)(0, oS1.setCredentialFeature)(J, "RESOLVED_ACCOUNT_ID", "T");
                return (0, oS1.setCredentialFeature)(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J
            }
        }, "getDefaultRoleAssumerWithWebIdentity"),
        eiQ = y2((A) => {
            return A?.metadata?.handlerProtocol === "h2"
        }, "isH2"),
        AnQ = jCA(),
        QnQ = y2((A, Q) => {
            if (!Q) return A;
            else return class extends A {
                static {
                    y2(this, "CustomizableSTSClient")
                }
                constructor(G) {
                    super(G);
                    for (let Z of Q) this.middlewareStack.use(Z)
                }
            }
        }, "getCustomizableStsClientCtor"),
        BnQ = y2((A = {}, Q) => fj8(A, QnQ(AnQ.STSClient, Q)), "getDefaultRoleAssumer"),
        GnQ = y2((A = {}, Q) => hj8(A, QnQ(AnQ.STSClient, Q)), "getDefaultRoleAssumerWithWebIdentity"),
        gj8 = y2((A) => (Q) => A({
            roleAssumer: BnQ(Q),
            roleAssumerWithWebIdentity: GnQ(Q),
            ...Q
        }), "decorateDefaultCredentialProvider")
});
var J_1 = U(($q7, YnQ) => {
    var {
        defineProperty: PcA,
        getOwnPropertyDescriptor: uj8,
        getOwnPropertyNames: mj8
    } = Object, dj8 = Object.prototype.hasOwnProperty, Y_1 = (A, Q) => PcA(A, "name", {
        value: Q,
        configurable: !0
    }), cj8 = (A, Q) => {
        for (var B in Q) PcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pj8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of mj8(Q))
                if (!dj8.call(A, Z) && Z !== B) PcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = uj8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lj8 = (A) => pj8(PcA({}, "__esModule", {
        value: !0
    }), A), InQ = {};
    cj8(InQ, {
        fromProcess: () => oj8
    });
    YnQ.exports = lj8(InQ);
    var ZnQ = NG(),
        I_1 = P2(),
        ij8 = UA("child_process"),
        nj8 = UA("util"),
        aj8 = xS(),
        sj8 = Y_1((A, Q, B) => {
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
            return (0, aj8.setCredentialFeature)(Z, "CREDENTIALS_PROCESS", "w"), Z
        }, "getValidatedProcessCredentials"),
        rj8 = Y_1(async (A, Q, B) => {
            let G = Q[A];
            if (Q[A]) {
                let Z = G.credential_process;
                if (Z !== void 0) {
                    let I = (0, nj8.promisify)(ij8.exec);
                    try {
                        let {
                            stdout: Y
                        } = await I(Z), J;
                        try {
                            J = JSON.parse(Y.trim())
                        } catch {
                            throw Error(`Profile ${A} credential_process returned invalid JSON.`)
                        }
                        return sj8(A, J, Q)
                    } catch (Y) {
                        throw new I_1.CredentialsProviderError(Y.message, {
                            logger: B
                        })
                    }
                } else throw new I_1.CredentialsProviderError(`Profile ${A} did not contain credential_process.`, {
                    logger: B
                })
            } else throw new I_1.CredentialsProviderError(`Profile ${A} could not be found in shared credentials file.`, {
                logger: B
            })
        }, "resolveProcessCredentials"),
        oj8 = Y_1((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
            let B = await (0, ZnQ.parseKnownFiles)(A);
            return rj8((0, ZnQ.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), B, A.logger)
        }, "fromProcess")
});
var W_1 = U((dS) => {
    var tj8 = dS && dS.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        ej8 = dS && dS.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        AS8 = dS && dS.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) tj8(Q, A, B)
            }
            return ej8(Q, A), Q
        };
    Object.defineProperty(dS, "__esModule", {
        value: !0
    });
    dS.fromWebToken = void 0;
    var QS8 = (A) => async (Q) => {
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
            } = await Promise.resolve().then(() => AS8(Z_1()));
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
    dS.fromWebToken = QS8
});
var FnQ = U((WnQ) => {
    Object.defineProperty(WnQ, "__esModule", {
        value: !0
    });
    WnQ.fromTokenFile = void 0;
    var BS8 = xS(),
        GS8 = P2(),
        ZS8 = UA("fs"),
        IS8 = W_1(),
        JnQ = "AWS_WEB_IDENTITY_TOKEN_FILE",
        YS8 = "AWS_ROLE_ARN",
        JS8 = "AWS_ROLE_SESSION_NAME",
        WS8 = (A = {}) => async () => {
            A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
            let Q = A?.webIdentityTokenFile ?? process.env[JnQ],
                B = A?.roleArn ?? process.env[YS8],
                G = A?.roleSessionName ?? process.env[JS8];
            if (!Q || !B) throw new GS8.CredentialsProviderError("Web identity configuration not specified", {
                logger: A.logger
            });
            let Z = await (0, IS8.fromWebToken)({
                ...A,
                webIdentityToken: (0, ZS8.readFileSync)(Q, {
                    encoding: "ascii"
                }),
                roleArn: B,
                roleSessionName: G
            })();
            if (Q === process.env[JnQ])(0, BS8.setCredentialFeature)(Z, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
            return Z
        };
    WnQ.fromTokenFile = WS8
});
var V_1 = U((Nq7, jcA) => {
    var {
        defineProperty: VnQ,
        getOwnPropertyDescriptor: XS8,
        getOwnPropertyNames: FS8
    } = Object, VS8 = Object.prototype.hasOwnProperty, X_1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of FS8(Q))
                if (!VS8.call(A, Z) && Z !== B) VnQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = XS8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, KnQ = (A, Q, B) => (X_1(A, Q, "default"), B && X_1(B, Q, "default")), KS8 = (A) => X_1(VnQ({}, "__esModule", {
        value: !0
    }), A), F_1 = {};
    jcA.exports = KS8(F_1);
    KnQ(F_1, FnQ(), jcA.exports);
    KnQ(F_1, W_1(), jcA.exports)
});
var wnQ = U((Lq7, $nQ) => {
    var {
        create: DS8,
        defineProperty: kCA,
        getOwnPropertyDescriptor: HS8,
        getOwnPropertyNames: CS8,
        getPrototypeOf: ES8
    } = Object, zS8 = Object.prototype.hasOwnProperty, PX = (A, Q) => kCA(A, "name", {
        value: Q,
        configurable: !0
    }), US8 = (A, Q) => {
        for (var B in Q) kCA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, EnQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of CS8(Q))
                if (!zS8.call(A, Z) && Z !== B) kCA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = HS8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, pd = (A, Q, B) => (B = A != null ? DS8(ES8(A)) : {}, EnQ(Q || !A || !A.__esModule ? kCA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), $S8 = (A) => EnQ(kCA({}, "__esModule", {
        value: !0
    }), A), znQ = {};
    US8(znQ, {
        fromIni: () => _S8
    });
    $nQ.exports = $S8(znQ);
    var D_1 = NG(),
        ld = xS(),
        _CA = P2(),
        wS8 = PX((A, Q, B) => {
            let G = {
                EcsContainer: PX(async (Z) => {
                    let {
                        fromHttp: I
                    } = await Promise.resolve().then(() => pd(mP1())), {
                        fromContainerMetadata: Y
                    } = await Promise.resolve().then(() => pd(wF()));
                    return B?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => (0, _CA.chain)(I(Z ?? {}), Y(Z))().then(K_1)
                }, "EcsContainer"),
                Ec2InstanceMetadata: PX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
                    let {
                        fromInstanceMetadata: I
                    } = await Promise.resolve().then(() => pd(wF()));
                    return async () => I(Z)().then(K_1)
                }, "Ec2InstanceMetadata"),
                Environment: PX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
                    let {
                        fromEnv: I
                    } = await Promise.resolve().then(() => pd(MP1()));
                    return async () => I(Z)().then(K_1)
                }, "Environment")
            };
            if (A in G) return G[A];
            else throw new _CA.CredentialsProviderError(`Unsupported credential source in profile ${Q}. Got ${A}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
                logger: B
            })
        }, "resolveCredentialSource"),
        K_1 = PX((A) => (0, ld.setCredentialFeature)(A, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"), "setNamedProvider"),
        qS8 = PX((A, {
            profile: Q = "default",
            logger: B
        } = {}) => {
            return Boolean(A) && typeof A === "object" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1 && ["undefined", "string"].indexOf(typeof A.external_id) > -1 && ["undefined", "string"].indexOf(typeof A.mfa_serial) > -1 && (NS8(A, {
                profile: Q,
                logger: B
            }) || LS8(A, {
                profile: Q,
                logger: B
            }))
        }, "isAssumeRoleProfile"),
        NS8 = PX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.source_profile === "string" && typeof A.credential_source > "u";
            if (G) B?.debug?.(`    ${Q} isAssumeRoleWithSourceProfile source_profile=${A.source_profile}`);
            return G
        }, "isAssumeRoleWithSourceProfile"),
        LS8 = PX((A, {
            profile: Q,
            logger: B
        }) => {
            let G = typeof A.credential_source === "string" && typeof A.source_profile > "u";
            if (G) B?.debug?.(`    ${Q} isCredentialSourceProfile credential_source=${A.credential_source}`);
            return G
        }, "isCredentialSourceProfile"),
        MS8 = PX(async (A, Q, B, G = {}) => {
            B.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
            let Z = Q[A],
                {
                    source_profile: I,
                    region: Y
                } = Z;
            if (!B.roleAssumer) {
                let {
                    getDefaultRoleAssumer: W
                } = await Promise.resolve().then(() => pd(Z_1()));
                B.roleAssumer = W({
                    ...B.clientConfig,
                    credentialProviderLogger: B.logger,
                    parentClientConfig: {
                        ...B?.parentClientConfig,
                        region: Y ?? B?.parentClientConfig?.region
                    }
                }, B.clientPlugins)
            }
            if (I && I in G) throw new _CA.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${(0,D_1.getProfileName)(B)}. Profiles visited: ` + Object.keys(G).join(", "), {
                logger: B.logger
            });
            B.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${I?`source_profile=[${I}]`:`profile=[${A}]`}`);
            let J = I ? UnQ(I, Q, B, {
                ...G,
                [I]: !0
            }, DnQ(Q[I] ?? {})) : (await wS8(Z.credential_source, A, B.logger)(B))();
            if (DnQ(Z)) return J.then((W) => (0, ld.setCredentialFeature)(W, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
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
                    if (!B.mfaCodeProvider) throw new _CA.CredentialsProviderError(`Profile ${A} requires multi-factor authentication, but no MFA code callback was provided.`, {
                        logger: B.logger,
                        tryNextLink: !1
                    });
                    W.SerialNumber = X, W.TokenCode = await B.mfaCodeProvider(X)
                }
                let F = await J;
                return B.roleAssumer(F, W).then((V) => (0, ld.setCredentialFeature)(V, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"))
            }
        }, "resolveAssumeRoleCredentials"),
        DnQ = PX((A) => {
            return !A.role_arn && !!A.credential_source
        }, "isCredentialSourceWithoutRoleArn"),
        OS8 = PX((A) => Boolean(A) && typeof A === "object" && typeof A.credential_process === "string", "isProcessProfile"),
        RS8 = PX(async (A, Q) => Promise.resolve().then(() => pd(J_1())).then(({
            fromProcess: B
        }) => B({
            ...A,
            profile: Q
        })().then((G) => (0, ld.setCredentialFeature)(G, "CREDENTIALS_PROFILE_PROCESS", "v"))), "resolveProcessCredentials"),
        TS8 = PX(async (A, Q, B = {}) => {
            let {
                fromSSO: G
            } = await Promise.resolve().then(() => pd($S1()));
            return G({
                profile: A,
                logger: B.logger,
                parentClientConfig: B.parentClientConfig,
                clientConfig: B.clientConfig
            })().then((Z) => {
                if (Q.sso_session) return (0, ld.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO", "r");
                else return (0, ld.setCredentialFeature)(Z, "CREDENTIALS_PROFILE_SSO_LEGACY", "t")
            })
        }, "resolveSsoCredentials"),
        PS8 = PX((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        HnQ = PX((A) => Boolean(A) && typeof A === "object" && typeof A.aws_access_key_id === "string" && typeof A.aws_secret_access_key === "string" && ["undefined", "string"].indexOf(typeof A.aws_session_token) > -1 && ["undefined", "string"].indexOf(typeof A.aws_account_id) > -1, "isStaticCredsProfile"),
        CnQ = PX(async (A, Q) => {
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
            return (0, ld.setCredentialFeature)(B, "CREDENTIALS_PROFILE", "n")
        }, "resolveStaticCredentials"),
        jS8 = PX((A) => Boolean(A) && typeof A === "object" && typeof A.web_identity_token_file === "string" && typeof A.role_arn === "string" && ["undefined", "string"].indexOf(typeof A.role_session_name) > -1, "isWebIdentityProfile"),
        SS8 = PX(async (A, Q) => Promise.resolve().then(() => pd(V_1())).then(({
            fromTokenFile: B
        }) => B({
            webIdentityTokenFile: A.web_identity_token_file,
            roleArn: A.role_arn,
            roleSessionName: A.role_session_name,
            roleAssumerWithWebIdentity: Q.roleAssumerWithWebIdentity,
            logger: Q.logger,
            parentClientConfig: Q.parentClientConfig
        })().then((G) => (0, ld.setCredentialFeature)(G, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"))), "resolveWebIdentityCredentials"),
        UnQ = PX(async (A, Q, B, G = {}, Z = !1) => {
            let I = Q[A];
            if (Object.keys(G).length > 0 && HnQ(I)) return CnQ(I, B);
            if (Z || qS8(I, {
                    profile: A,
                    logger: B.logger
                })) return MS8(A, Q, B, G);
            if (HnQ(I)) return CnQ(I, B);
            if (jS8(I)) return SS8(I, B);
            if (OS8(I)) return RS8(B, A);
            if (PS8(I)) return await TS8(A, I, B);
            throw new _CA.CredentialsProviderError(`Could not resolve credentials using profile: [${A}] in configuration/credentials file(s).`, {
                logger: B.logger
            })
        }, "resolveProfileData"),
        _S8 = PX((A = {}) => async ({
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
            let G = await (0, D_1.parseKnownFiles)(B);
            return UnQ((0, D_1.getProfileName)({
                profile: A.profile ?? Q?.profile
            }), G, B)
        }, "fromIni")
});
var C_1 = U((Mq7, TnQ) => {
    var {
        create: kS8,
        defineProperty: yCA,
        getOwnPropertyDescriptor: yS8,
        getOwnPropertyNames: xS8,
        getPrototypeOf: vS8
    } = Object, bS8 = Object.prototype.hasOwnProperty, ScA = (A, Q) => yCA(A, "name", {
        value: Q,
        configurable: !0
    }), fS8 = (A, Q) => {
        for (var B in Q) yCA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, LnQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of xS8(Q))
                if (!bS8.call(A, Z) && Z !== B) yCA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = yS8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, H5A = (A, Q, B) => (B = A != null ? kS8(vS8(A)) : {}, LnQ(Q || !A || !A.__esModule ? yCA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), hS8 = (A) => LnQ(yCA({}, "__esModule", {
        value: !0
    }), A), MnQ = {};
    fS8(MnQ, {
        credentialsTreatedAsExpired: () => RnQ,
        credentialsWillNeedRefresh: () => OnQ,
        defaultProvider: () => mS8
    });
    TnQ.exports = hS8(MnQ);
    var H_1 = MP1(),
        gS8 = NG(),
        Xo = P2(),
        qnQ = "AWS_EC2_METADATA_DISABLED",
        uS8 = ScA(async (A) => {
            let {
                ENV_CMDS_FULL_URI: Q,
                ENV_CMDS_RELATIVE_URI: B,
                fromContainerMetadata: G,
                fromInstanceMetadata: Z
            } = await Promise.resolve().then(() => H5A(wF()));
            if (process.env[B] || process.env[Q]) {
                A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
                let {
                    fromHttp: I
                } = await Promise.resolve().then(() => H5A(mP1()));
                return (0, Xo.chain)(I(A), G(A))
            }
            if (process.env[qnQ] && process.env[qnQ] !== "false") return async () => {
                throw new Xo.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
                    logger: A.logger
                })
            };
            return A.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), Z(A)
        }, "remoteProvider"),
        NnQ = !1,
        mS8 = ScA((A = {}) => (0, Xo.memoize)((0, Xo.chain)(async () => {
            if (A.profile ?? process.env[gS8.ENV_PROFILE]) {
                if (process.env[H_1.ENV_KEY] && process.env[H_1.ENV_SECRET]) {
                    if (!NnQ)(A.logger?.warn && A.logger?.constructor?.name !== "NoOpLogger" ? A.logger.warn : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`), NnQ = !0
                }
                throw new Xo.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                    logger: A.logger,
                    tryNextLink: !0
                })
            }
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), (0, H_1.fromEnv)(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
            let {
                ssoStartUrl: Q,
                ssoAccountId: B,
                ssoRegion: G,
                ssoRoleName: Z,
                ssoSession: I
            } = A;
            if (!Q && !B && !G && !Z && !I) throw new Xo.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
                logger: A.logger
            });
            let {
                fromSSO: Y
            } = await Promise.resolve().then(() => H5A($S1()));
            return Y(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
            let {
                fromIni: Q
            } = await Promise.resolve().then(() => H5A(wnQ()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
            let {
                fromProcess: Q
            } = await Promise.resolve().then(() => H5A(J_1()));
            return Q(A)()
        }, async () => {
            A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
            let {
                fromTokenFile: Q
            } = await Promise.resolve().then(() => H5A(V_1()));
            return Q(A)()
        }, async () => {
            return A.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"), (await uS8(A))()
        }, async () => {
            throw new Xo.CredentialsProviderError("Could not load credentials from any providers", {
                tryNextLink: !1,
                logger: A.logger
            })
        }), RnQ, OnQ), "defaultProvider"),
        OnQ = ScA((A) => A?.expiration !== void 0, "credentialsWillNeedRefresh"),
        RnQ = ScA((A) => A?.expiration !== void 0 && A.expiration.getTime() - Date.now() < 300000, "credentialsTreatedAsExpired")
});
var SnQ = U((oz) => {
    var dS8 = oz && oz.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        cS8 = oz && oz.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        PnQ = oz && oz.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) dS8(Q, A, B)
            }
            return cS8(Q, A), Q
        };
    Object.defineProperty(oz, "__esModule", {
        value: !0
    });
    oz.req = oz.json = oz.toBuffer = void 0;
    var pS8 = PnQ(UA("http")),
        lS8 = PnQ(UA("https"));
    async function jnQ(A) {
        let Q = 0,
            B = [];
        for await (let G of A) Q += G.length, B.push(G);
        return Buffer.concat(B, Q)
    }
    oz.toBuffer = jnQ;
    async function iS8(A) {
        let B = (await jnQ(A)).toString("utf8");
        try {
            return JSON.parse(B)
        } catch (G) {
            let Z = G;
            throw Z.message += ` (input: ${B})`, Z
        }
    }
    oz.json = iS8;

    function nS8(A, Q = {}) {
        let G = ((typeof A === "string" ? A : A.href).startsWith("https:") ? lS8 : pS8).request(A, Q),
            Z = new Promise((I, Y) => {
                G.once("response", I).once("error", Y).end()
            });
        return G.then = Z.then.bind(Z), G
    }
    oz.req = nS8
});
var E_1 = U((Ow) => {
    var knQ = Ow && Ow.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        aS8 = Ow && Ow.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        ynQ = Ow && Ow.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) knQ(Q, A, B)
            }
            return aS8(Q, A), Q
        },
        sS8 = Ow && Ow.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) knQ(Q, A, B)
        };
    Object.defineProperty(Ow, "__esModule", {
        value: !0
    });
    Ow.Agent = void 0;
    var rS8 = ynQ(UA("net")),
        _nQ = ynQ(UA("http")),
        oS8 = UA("https");
    sS8(SnQ(), Ow);
    var cS = Symbol("AgentBaseInternalState");
    class xnQ extends _nQ.Agent {
        constructor(A) {
            super(A);
            this[cS] = {}
        }
        isSecureEndpoint(A) {
            if (A) {
                if (typeof A.secureEndpoint === "boolean") return A.secureEndpoint;
                if (typeof A.protocol === "string") return A.protocol === "https:"
            }
            let {
                stack: Q
            } = Error();
            if (typeof Q !== "string") return !1;
            return Q.split(`
`).some((B) => B.indexOf("(https.js:") !== -1 || B.indexOf("node:https:") !== -1)
        }
        incrementSockets(A) {
            if (this.maxSockets === 1 / 0 && this.maxTotalSockets === 1 / 0) return null;
            if (!this.sockets[A]) this.sockets[A] = [];
            let Q = new rS8.Socket({
                writable: !1
            });
            return this.sockets[A].push(Q), this.totalSocketCount++, Q
        }
        decrementSockets(A, Q) {
            if (!this.sockets[A] || Q === null) return;
            let B = this.sockets[A],
                G = B.indexOf(Q);
            if (G !== -1) {
                if (B.splice(G, 1), this.totalSocketCount--, B.length === 0) delete this.sockets[A]
            }
        }
        getName(A) {
            if (typeof A.secureEndpoint === "boolean" ? A.secureEndpoint : this.isSecureEndpoint(A)) return oS8.Agent.prototype.getName.call(this, A);
            return super.getName(A)
        }
        createSocket(A, Q, B) {
            let G = {
                    ...Q,
                    secureEndpoint: this.isSecureEndpoint(Q)
                },
                Z = this.getName(G),
                I = this.incrementSockets(Z);
            Promise.resolve().then(() => this.connect(A, G)).then((Y) => {
                if (this.decrementSockets(Z, I), Y instanceof _nQ.Agent) try {
                    return Y.addRequest(A, G)
                } catch (J) {
                    return B(J)
                }
                this[cS].currentSocket = Y, super.createSocket(A, Q, B)
            }, (Y) => {
                this.decrementSockets(Z, I), B(Y)
            })
        }
        createConnection() {
            let A = this[cS].currentSocket;
            if (this[cS].currentSocket = void 0, !A) throw Error("No socket was returned in the `connect()` function");
            return A
        }
        get defaultPort() {
            return this[cS].defaultPort ?? (this.protocol === "https:" ? 443 : 80)
        }
        set defaultPort(A) {
            if (this[cS]) this[cS].defaultPort = A
        }
        get protocol() {
            return this[cS].protocol ?? (this.isSecureEndpoint() ? "https:" : "http:")
        }
        set protocol(A) {
            if (this[cS]) this[cS].protocol = A
        }
    }
    Ow.Agent = xnQ
});
var vnQ = U((C5A) => {
    var tS8 = C5A && C5A.__importDefault || function(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    };
    Object.defineProperty(C5A, "__esModule", {
        value: !0
    });
    C5A.parseProxyResponse = void 0;
    var eS8 = tS8(Os()),
        _cA = (0, eS8.default)("https-proxy-agent:parse-proxy-response");

    function A_8(A) {
        return new Promise((Q, B) => {
            let G = 0,
                Z = [];

            function I() {
                let F = A.read();
                if (F) X(F);
                else A.once("readable", I)
            }

            function Y() {
                A.removeListener("end", J), A.removeListener("error", W), A.removeListener("readable", I)
            }

            function J() {
                Y(), _cA("onend"), B(Error("Proxy connection ended before receiving CONNECT response"))
            }

            function W(F) {
                Y(), _cA("onerror %o", F), B(F)
            }

            function X(F) {
                Z.push(F), G += F.length;
                let V = Buffer.concat(Z, G),
                    K = V.indexOf(`\r
\r
`);
                if (K === -1) {
                    _cA("have not received end of HTTP headers yet..."), I();
                    return
                }
                let D = V.slice(0, K).toString("ascii").split(`\r
`),
                    H = D.shift();
                if (!H) return A.destroy(), B(Error("No header received from proxy CONNECT response"));
                let C = H.split(" "),
                    E = +C[1],
                    z = C.slice(2).join(" "),
                    w = {};
                for (let N of D) {
                    if (!N) continue;
                    let q = N.indexOf(":");
                    if (q === -1) return A.destroy(), B(Error(`Invalid header from proxy CONNECT response: "${N}"`));
                    let R = N.slice(0, q).toLowerCase(),
                        P = N.slice(q + 1).trimStart(),
                        y = w[R];
                    if (typeof y === "string") w[R] = [y, P];
                    else if (Array.isArray(y)) y.push(P);
                    else w[R] = P
                }