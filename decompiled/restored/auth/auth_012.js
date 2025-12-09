/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_012.js
 * 处理时间: 2025-12-09T03:37:24.024Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 12/61
 * Lines: 77776 - 79275 (1500 lines)
 * Original file: cli.js
 */

            return G = Ax4(B.AssumeRoleWithWebIdentityResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_AssumeRoleWithWebIdentityCommand"),
        Oy4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = Qx4(B.AssumeRootResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_AssumeRootCommand"),
        Ry4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = Bx4(B.DecodeAuthorizationMessageResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_DecodeAuthorizationMessageCommand"),
        Ty4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = Ix4(B.GetAccessKeyInfoResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_GetAccessKeyInfoCommand"),
        Py4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = Yx4(B.GetCallerIdentityResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_GetCallerIdentityCommand"),
        jy4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = Jx4(B.GetFederationTokenResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_GetFederationTokenCommand"),
        Sy4 = WQ(async (A, Q) => {
            if (A.statusCode >= 300) return Rv(A, Q);
            let B = await (0, DS.parseXmlBody)(A.body, Q),
                G = {};
            return G = Wx4(B.GetSessionTokenResult, Q), {
                $metadata: rK(A),
                ...G
            }
        }, "de_GetSessionTokenCommand"),
        Rv = WQ(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, DS.parseXmlErrorBody)(A.body, Q)
                },
                G = Rx4(A, B.body);
            switch (G) {
                case "ExpiredTokenException":
                case "com.amazonaws.sts#ExpiredTokenException":
                    throw await _y4(B, Q);
                case "MalformedPolicyDocument":
                case "com.amazonaws.sts#MalformedPolicyDocumentException":
                    throw await by4(B, Q);
                case "PackedPolicyTooLarge":
                case "com.amazonaws.sts#PackedPolicyTooLargeException":
                    throw await fy4(B, Q);
                case "RegionDisabledException":
                case "com.amazonaws.sts#RegionDisabledException":
                    throw await hy4(B, Q);
                case "IDPRejectedClaim":
                case "com.amazonaws.sts#IDPRejectedClaimException":
                    throw await yy4(B, Q);
                case "InvalidIdentityToken":
                case "com.amazonaws.sts#InvalidIdentityTokenException":
                    throw await vy4(B, Q);
                case "IDPCommunicationError":
                case "com.amazonaws.sts#IDPCommunicationErrorException":
                    throw await ky4(B, Q);
                case "InvalidAuthorizationMessageException":
                case "com.amazonaws.sts#InvalidAuthorizationMessageException":
                    throw await xy4(B, Q);
                default:
                    let Z = B.body;
                    return Ex4({
                        output: A,
                        parsedBody: Z.Error,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        _y4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Gx4(B.Error, Q),
                Z = new T7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_ExpiredTokenExceptionRes"),
        ky4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Xx4(B.Error, Q),
                Z = new y7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_IDPCommunicationErrorExceptionRes"),
        yy4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Fx4(B.Error, Q),
                Z = new _7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_IDPRejectedClaimExceptionRes"),
        xy4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Vx4(B.Error, Q),
                Z = new x7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_InvalidAuthorizationMessageExceptionRes"),
        vy4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Kx4(B.Error, Q),
                Z = new k7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_InvalidIdentityTokenExceptionRes"),
        by4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Dx4(B.Error, Q),
                Z = new P7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_MalformedPolicyDocumentExceptionRes"),
        fy4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Hx4(B.Error, Q),
                Z = new j7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_PackedPolicyTooLargeExceptionRes"),
        hy4 = WQ(async (A, Q) => {
            let B = A.body,
                G = Cx4(B.Error, Q),
                Z = new S7Q({
                    $metadata: rK(A),
                    ...G
                });
            return (0, T2.decorateServiceException)(Z, B)
        }, "de_RegionDisabledExceptionRes"),
        gy4 = WQ((A, Q) => {
            let B = {};
            if (A[Lv] != null) B[Lv] = A[Lv];
            if (A[o4A] != null) B[o4A] = A[o4A];
            if (A[ZL] != null) {
                let G = zhA(A[ZL], Q);
                if (A[ZL]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[GL] != null) B[GL] = A[GL];
            if (A[NV] != null) B[NV] = A[NV];
            if (A[e4A] != null) {
                let G = p7Q(A[e4A], Q);
                if (A[e4A]?.length === 0) B.Tags = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `Tags.${Z}`;
                    B[Y] = I
                })
            }
            if (A[dw1] != null) {
                let G = oy4(A[dw1], Q);
                if (A[dw1]?.length === 0) B.TransitiveTagKeys = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `TransitiveTagKeys.${Z}`;
                    B[Y] = I
                })
            }
            if (A[Nw1] != null) B[Nw1] = A[Nw1];
            if (A[t4A] != null) B[t4A] = A[t4A];
            if (A[A8A] != null) B[A8A] = A[A8A];
            if (A[lC] != null) B[lC] = A[lC];
            if (A[kw1] != null) {
                let G = sy4(A[kw1], Q);
                if (A[kw1]?.length === 0) B.ProvidedContexts = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `ProvidedContexts.${Z}`;
                    B[Y] = I
                })
            }
            return B
        }, "se_AssumeRoleRequest"),
        uy4 = WQ((A, Q) => {
            let B = {};
            if (A[Lv] != null) B[Lv] = A[Lv];
            if (A[Sw1] != null) B[Sw1] = A[Sw1];
            if (A[fw1] != null) B[fw1] = A[fw1];
            if (A[ZL] != null) {
                let G = zhA(A[ZL], Q);
                if (A[ZL]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[GL] != null) B[GL] = A[GL];
            if (A[NV] != null) B[NV] = A[NV];
            return B
        }, "se_AssumeRoleWithSAMLRequest"),
        my4 = WQ((A, Q) => {
            let B = {};
            if (A[Lv] != null) B[Lv] = A[Lv];
            if (A[o4A] != null) B[o4A] = A[o4A];
            if (A[lw1] != null) B[lw1] = A[lw1];
            if (A[yw1] != null) B[yw1] = A[yw1];
            if (A[ZL] != null) {
                let G = zhA(A[ZL], Q);
                if (A[ZL]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[GL] != null) B[GL] = A[GL];
            if (A[NV] != null) B[NV] = A[NV];
            return B
        }, "se_AssumeRoleWithWebIdentityRequest"),
        dy4 = WQ((A, Q) => {
            let B = {};
            if (A[mw1] != null) B[mw1] = A[mw1];
            if (A[O7Q] != null) {
                let G = c7Q(A[O7Q], Q);
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `TaskPolicyArn.${Z}`;
                    B[Y] = I
                })
            }
            if (A[NV] != null) B[NV] = A[NV];
            return B
        }, "se_AssumeRootRequest"),
        cy4 = WQ((A, Q) => {
            let B = {};
            if (A[Lw1] != null) B[Lw1] = A[Lw1];
            return B
        }, "se_DecodeAuthorizationMessageRequest"),
        py4 = WQ((A, Q) => {
            let B = {};
            if (A[a4A] != null) B[a4A] = A[a4A];
            return B
        }, "se_GetAccessKeyInfoRequest"),
        ly4 = WQ((A, Q) => {
            return {}
        }, "se_GetCallerIdentityRequest"),
        iy4 = WQ((A, Q) => {
            let B = {};
            if (A[Pw1] != null) B[Pw1] = A[Pw1];
            if (A[GL] != null) B[GL] = A[GL];
            if (A[ZL] != null) {
                let G = zhA(A[ZL], Q);
                if (A[ZL]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[NV] != null) B[NV] = A[NV];
            if (A[e4A] != null) {
                let G = p7Q(A[e4A], Q);
                if (A[e4A]?.length === 0) B.Tags = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `Tags.${Z}`;
                    B[Y] = I
                })
            }
            return B
        }, "se_GetFederationTokenRequest"),
        ny4 = WQ((A, Q) => {
            let B = {};
            if (A[NV] != null) B[NV] = A[NV];
            if (A[t4A] != null) B[t4A] = A[t4A];
            if (A[A8A] != null) B[A8A] = A[A8A];
            return B
        }, "se_GetSessionTokenRequest"),
        zhA = WQ((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = c7Q(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_policyDescriptorListType"),
        c7Q = WQ((A, Q) => {
            let B = {};
            if (A[iw1] != null) B[iw1] = A[iw1];
            return B
        }, "se_PolicyDescriptorType"),
        ay4 = WQ((A, Q) => {
            let B = {};
            if (A[_w1] != null) B[_w1] = A[_w1];
            if (A[$w1] != null) B[$w1] = A[$w1];
            return B
        }, "se_ProvidedContext"),
        sy4 = WQ((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = ay4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_ProvidedContextsListType"),
        ry4 = WQ((A, Q) => {
            let B = {};
            if (A[Tw1] != null) B[Tw1] = A[Tw1];
            if (A[pw1] != null) B[pw1] = A[pw1];
            return B
        }, "se_Tag"),
        oy4 = WQ((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                B[`member.${G}`] = Z, G++
            }
            return B
        }, "se_tagKeyListType"),
        p7Q = WQ((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = ry4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_tagListType"),
        rw1 = WQ((A, Q) => {
            let B = {};
            if (A[Uw1] != null) B[Uw1] = (0, T2.expectString)(A[Uw1]);
            if (A[Nv] != null) B[Nv] = (0, T2.expectString)(A[Nv]);
            return B
        }, "de_AssumedRoleUser"),
        ty4 = WQ((A, Q) => {
            let B = {};
            if (A[qV] != null) B[qV] = Q8A(A[qV], Q);
            if (A[qv] != null) B[qv] = rw1(A[qv], Q);
            if (A[IL] != null) B[IL] = (0, T2.strictParseInt32)(A[IL]);
            if (A[lC] != null) B[lC] = (0, T2.expectString)(A[lC]);
            return B
        }, "de_AssumeRoleResponse"),
        ey4 = WQ((A, Q) => {
            let B = {};
            if (A[qV] != null) B[qV] = Q8A(A[qV], Q);
            if (A[qv] != null) B[qv] = rw1(A[qv], Q);
            if (A[IL] != null) B[IL] = (0, T2.strictParseInt32)(A[IL]);
            if (A[vw1] != null) B[vw1] = (0, T2.expectString)(A[vw1]);
            if (A[gw1] != null) B[gw1] = (0, T2.expectString)(A[gw1]);
            if (A[Rw1] != null) B[Rw1] = (0, T2.expectString)(A[Rw1]);
            if (A[r4A] != null) B[r4A] = (0, T2.expectString)(A[r4A]);
            if (A[jw1] != null) B[jw1] = (0, T2.expectString)(A[jw1]);
            if (A[lC] != null) B[lC] = (0, T2.expectString)(A[lC]);
            return B
        }, "de_AssumeRoleWithSAMLResponse"),
        Ax4 = WQ((A, Q) => {
            let B = {};
            if (A[qV] != null) B[qV] = Q8A(A[qV], Q);
            if (A[hw1] != null) B[hw1] = (0, T2.expectString)(A[hw1]);
            if (A[qv] != null) B[qv] = rw1(A[qv], Q);
            if (A[IL] != null) B[IL] = (0, T2.strictParseInt32)(A[IL]);
            if (A[xw1] != null) B[xw1] = (0, T2.expectString)(A[xw1]);
            if (A[r4A] != null) B[r4A] = (0, T2.expectString)(A[r4A]);
            if (A[lC] != null) B[lC] = (0, T2.expectString)(A[lC]);
            return B
        }, "de_AssumeRoleWithWebIdentityResponse"),
        Qx4 = WQ((A, Q) => {
            let B = {};
            if (A[qV] != null) B[qV] = Q8A(A[qV], Q);
            if (A[lC] != null) B[lC] = (0, T2.expectString)(A[lC]);
            return B
        }, "de_AssumeRootResponse"),
        Q8A = WQ((A, Q) => {
            let B = {};
            if (A[a4A] != null) B[a4A] = (0, T2.expectString)(A[a4A]);
            if (A[bw1] != null) B[bw1] = (0, T2.expectString)(A[bw1]);
            if (A[uw1] != null) B[uw1] = (0, T2.expectString)(A[uw1]);
            if (A[qw1] != null) B[qw1] = (0, T2.expectNonNull)((0, T2.parseRfc3339DateTimeWithOffset)(A[qw1]));
            return B
        }, "de_Credentials"),
        Bx4 = WQ((A, Q) => {
            let B = {};
            if (A[ww1] != null) B[ww1] = (0, T2.expectString)(A[ww1]);
            return B
        }, "de_DecodeAuthorizationMessageResponse"),
        Gx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_ExpiredTokenException"),
        Zx4 = WQ((A, Q) => {
            let B = {};
            if (A[Ow1] != null) B[Ow1] = (0, T2.expectString)(A[Ow1]);
            if (A[Nv] != null) B[Nv] = (0, T2.expectString)(A[Nv]);
            return B
        }, "de_FederatedUser"),
        Ix4 = WQ((A, Q) => {
            let B = {};
            if (A[s4A] != null) B[s4A] = (0, T2.expectString)(A[s4A]);
            return B
        }, "de_GetAccessKeyInfoResponse"),
        Yx4 = WQ((A, Q) => {
            let B = {};
            if (A[cw1] != null) B[cw1] = (0, T2.expectString)(A[cw1]);
            if (A[s4A] != null) B[s4A] = (0, T2.expectString)(A[s4A]);
            if (A[Nv] != null) B[Nv] = (0, T2.expectString)(A[Nv]);
            return B
        }, "de_GetCallerIdentityResponse"),
        Jx4 = WQ((A, Q) => {
            let B = {};
            if (A[qV] != null) B[qV] = Q8A(A[qV], Q);
            if (A[Mw1] != null) B[Mw1] = Zx4(A[Mw1], Q);
            if (A[IL] != null) B[IL] = (0, T2.strictParseInt32)(A[IL]);
            return B
        }, "de_GetFederationTokenResponse"),
        Wx4 = WQ((A, Q) => {
            let B = {};
            if (A[qV] != null) B[qV] = Q8A(A[qV], Q);
            return B
        }, "de_GetSessionTokenResponse"),
        Xx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_IDPCommunicationErrorException"),
        Fx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_IDPRejectedClaimException"),
        Vx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_InvalidAuthorizationMessageException"),
        Kx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_InvalidIdentityTokenException"),
        Dx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_MalformedPolicyDocumentException"),
        Hx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_PackedPolicyTooLargeException"),
        Cx4 = WQ((A, Q) => {
            let B = {};
            if (A[fI] != null) B[fI] = (0, T2.expectString)(A[fI]);
            return B
        }, "de_RegionDisabledException"),
        rK = WQ((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        Ex4 = (0, T2.withBaseException)(KS),
        Tv = WQ(async (A, Q, B, G, Z) => {
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
            return new Ky4.HttpRequest(X)
        }, "buildHttpRpcRequest"),
        Pv = {
            "content-type": "application/x-www-form-urlencoded"
        },
        jv = "2011-06-15",
        Sv = "Action",
        a4A = "AccessKeyId",
        zx4 = "AssumeRole",
        Uw1 = "AssumedRoleId",
        qv = "AssumedRoleUser",
        Ux4 = "AssumeRoleWithSAML",
        $x4 = "AssumeRoleWithWebIdentity",
        wx4 = "AssumeRoot",
        s4A = "Account",
        Nv = "Arn",
        r4A = "Audience",
        qV = "Credentials",
        $w1 = "ContextAssertion",
        qx4 = "DecodeAuthorizationMessage",
        ww1 = "DecodedMessage",
        NV = "DurationSeconds",
        qw1 = "Expiration",
        Nw1 = "ExternalId",
        Lw1 = "EncodedMessage",
        Mw1 = "FederatedUser",
        Ow1 = "FederatedUserId",
        Nx4 = "GetAccessKeyInfo",
        Lx4 = "GetCallerIdentity",
        Mx4 = "GetFederationToken",
        Ox4 = "GetSessionToken",
        Rw1 = "Issuer",
        Tw1 = "Key",
        Pw1 = "Name",
        jw1 = "NameQualifier",
        GL = "Policy",
        ZL = "PolicyArns",
        Sw1 = "PrincipalArn",
        _w1 = "ProviderArn",
        kw1 = "ProvidedContexts",
        yw1 = "ProviderId",
        IL = "PackedPolicySize",
        xw1 = "Provider",
        Lv = "RoleArn",
        o4A = "RoleSessionName",
        vw1 = "Subject",
        bw1 = "SecretAccessKey",
        fw1 = "SAMLAssertion",
        hw1 = "SubjectFromWebIdentityToken",
        lC = "SourceIdentity",
        t4A = "SerialNumber",
        gw1 = "SubjectType",
        uw1 = "SessionToken",
        e4A = "Tags",
        A8A = "TokenCode",
        mw1 = "TargetPrincipal",
        O7Q = "TaskPolicyArn",
        dw1 = "TransitiveTagKeys",
        cw1 = "UserId",
        _v = "Version",
        pw1 = "Value",
        lw1 = "WebIdentityToken",
        iw1 = "arn",
        fI = "message",
        kv = WQ((A) => Object.entries(A).map(([Q, B]) => (0, T2.extendedEncodeURIComponent)(Q) + "=" + (0, T2.extendedEncodeURIComponent)(B)).join("&"), "buildFormUrlencodedString"),
        Rx4 = WQ((A, Q) => {
            if (Q.Error?.Code !== void 0) return Q.Error.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadQueryErrorCode"),
        ow1 = class extends T2.Command.classBuilder().ep(Vy4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, v7Q).ser(Dy4).de(Ny4).build() {
            static {
                WQ(this, "AssumeRoleCommand")
            }
        },
        Tx4 = sN(),
        l7Q = class extends T2.Command.classBuilder().ep(Tx4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithSAML", {}).n("STSClient", "AssumeRoleWithSAMLCommand").f(b7Q, f7Q).ser(Hy4).de(Ly4).build() {
            static {
                WQ(this, "AssumeRoleWithSAMLCommand")
            }
        },
        Px4 = sN(),
        tw1 = class extends T2.Command.classBuilder().ep(Px4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(h7Q, g7Q).ser(Cy4).de(My4).build() {
            static {
                WQ(this, "AssumeRoleWithWebIdentityCommand")
            }
        },
        jx4 = sN(),
        i7Q = class extends T2.Command.classBuilder().ep(jx4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoot", {}).n("STSClient", "AssumeRootCommand").f(void 0, u7Q).ser(Ey4).de(Oy4).build() {
            static {
                WQ(this, "AssumeRootCommand")
            }
        },
        Sx4 = sN(),
        n7Q = class extends T2.Command.classBuilder().ep(Sx4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "DecodeAuthorizationMessage", {}).n("STSClient", "DecodeAuthorizationMessageCommand").f(void 0, void 0).ser(zy4).de(Ry4).build() {
            static {
                WQ(this, "DecodeAuthorizationMessageCommand")
            }
        },
        _x4 = sN(),
        a7Q = class extends T2.Command.classBuilder().ep(_x4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "GetAccessKeyInfo", {}).n("STSClient", "GetAccessKeyInfoCommand").f(void 0, void 0).ser(Uy4).de(Ty4).build() {
            static {
                WQ(this, "GetAccessKeyInfoCommand")
            }
        },
        kx4 = sN(),
        s7Q = class extends T2.Command.classBuilder().ep(kx4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "GetCallerIdentity", {}).n("STSClient", "GetCallerIdentityCommand").f(void 0, void 0).ser($y4).de(Py4).build() {
            static {
                WQ(this, "GetCallerIdentityCommand")
            }
        },
        yx4 = sN(),
        r7Q = class extends T2.Command.classBuilder().ep(yx4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "GetFederationToken", {}).n("STSClient", "GetFederationTokenCommand").f(void 0, m7Q).ser(wy4).de(jy4).build() {
            static {
                WQ(this, "GetFederationTokenCommand")
            }
        },
        xx4 = sN(),
        o7Q = class extends T2.Command.classBuilder().ep(xx4.commonParams).m(function(A, Q, B, G) {
            return [(0, Ov.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Mv.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "GetSessionToken", {}).n("STSClient", "GetSessionTokenCommand").f(void 0, d7Q).ser(qy4).de(Sy4).build() {
            static {
                WQ(this, "GetSessionTokenCommand")
            }
        },
        vx4 = wDA(),
        bx4 = {
            AssumeRoleCommand: ow1,
            AssumeRoleWithSAMLCommand: l7Q,
            AssumeRoleWithWebIdentityCommand: tw1,
            AssumeRootCommand: i7Q,
            DecodeAuthorizationMessageCommand: n7Q,
            GetAccessKeyInfoCommand: a7Q,
            GetCallerIdentityCommand: s7Q,
            GetFederationTokenCommand: r7Q,
            GetSessionTokenCommand: o7Q
        },
        t7Q = class extends vx4.STSClient {
            static {
                WQ(this, "STS")
            }
        };
    (0, T2.createAggregatedClient)(bx4, t7Q);
    var fx4 = sN(),
        aw1 = lN(),
        R7Q = "us-east-1",
        e7Q = WQ((A) => {
            if (typeof A?.Arn === "string") {
                let Q = A.Arn.split(":");
                if (Q.length > 4 && Q[4] !== "") return Q[4]
            }
            return
        }, "getAccountIdFromAssumedRoleUser"),
        AGQ = WQ(async (A, Q, B) => {
            let G = typeof A === "function" ? await A() : A,
                Z = typeof Q === "function" ? await Q() : Q;
            return B?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${G} (provider)`, `${Z} (parent client)`, `${R7Q} (STS default)`), G ?? Z ?? R7Q
        }, "resolveRegion"),
        hx4 = WQ((A, Q) => {
            let B, G;
            return async (Z, I) => {
                if (G = Z, !B) {
                    let {
                        logger: F = A?.parentClientConfig?.logger,
                        region: V,
                        requestHandler: K = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: D
                    } = A, H = await AGQ(V, A?.parentClientConfig?.region, D), C = !QGQ(K);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        credentialDefaultProvider: WQ(() => async () => G, "credentialDefaultProvider"),
                        region: H,
                        requestHandler: C ? K : void 0,
                        logger: F
                    })
                }
                let {
                    Credentials: Y,
                    AssumedRoleUser: J
                } = await B.send(new ow1(I));
                if (!Y || !Y.AccessKeyId || !Y.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${I.RoleArn}`);
                let W = e7Q(J),
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
                return (0, aw1.setCredentialFeature)(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X
            }
        }, "getDefaultRoleAssumer"),
        gx4 = WQ((A, Q) => {
            let B;
            return async (G) => {
                if (!B) {
                    let {
                        logger: W = A?.parentClientConfig?.logger,
                        region: X,
                        requestHandler: F = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: V
                    } = A, K = await AGQ(X, A?.parentClientConfig?.region, V), D = !QGQ(F);
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
                } = await B.send(new tw1(G));
                if (!Z || !Z.AccessKeyId || !Z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${G.RoleArn}`);
                let Y = e7Q(I),
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
                if (Y)(0, aw1.setCredentialFeature)(J, "RESOLVED_ACCOUNT_ID", "T");
                return (0, aw1.setCredentialFeature)(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J
            }
        }, "getDefaultRoleAssumerWithWebIdentity"),
        QGQ = WQ((A) => {
            return A?.metadata?.handlerProtocol === "h2"
        }, "isH2"),
        BGQ = wDA(),
        GGQ = WQ((A, Q) => {
            if (!Q) return A;
            else return class extends A {
                static {
                    WQ(this, "CustomizableSTSClient")
                }
                constructor(G) {
                    super(G);
                    for (let Z of Q) this.middlewareStack.use(Z)
                }
            }
        }, "getCustomizableStsClientCtor"),
        ZGQ = WQ((A = {}, Q) => hx4(A, GGQ(BGQ.STSClient, Q)), "getDefaultRoleAssumer"),
        IGQ = WQ((A = {}, Q) => gx4(A, GGQ(BGQ.STSClient, Q)), "getDefaultRoleAssumerWithWebIdentity"),
        ux4 = WQ((A) => (Q) => A({
            roleAssumer: ZGQ(Q),
            roleAssumerWithWebIdentity: IGQ(Q),
            ...Q
        }), "decorateDefaultCredentialProvider")
});
var Tr = U((aF7, whA) => {
    var JGQ, WGQ, XGQ, FGQ, VGQ, KGQ, DGQ, HGQ, CGQ, EGQ, zGQ, UGQ, $GQ, UhA, Aq1, wGQ, qGQ, NGQ, B8A, LGQ, MGQ, OGQ, RGQ, TGQ, PGQ, jGQ, SGQ, _GQ, $hA, kGQ, yGQ, xGQ;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof whA === "object" && typeof aF7 === "object") A(B(Q, B(aF7)));
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
        JGQ = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, WGQ = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, XGQ = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, FGQ = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, VGQ = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, KGQ = function(I, Y, J, W, X, F) {
            function V(P) {
                if (P !== void 0 && typeof P !== "function") throw TypeError("Function expected");
                return P
            }
            var K = W.kind,
                D = K === "getter" ? "get" : K === "setter" ? "set" : "value",
                H = !Y && I ? W.static ? I : I.prototype : null,
                C = Y || (H ? Object.getOwnPropertyDescriptor(H, W.name) : {}),
                E, z = !1;
            for (var w = J.length - 1; w >= 0; w--) {
                var N = {};
                for (var q in W) N[q] = q === "access" ? {} : W[q];
                for (var q in W.access) N.access[q] = W.access[q];
                N.addInitializer = function(P) {
                    if (z) throw TypeError("Cannot add initializers after decoration has completed");
                    F.push(V(P || null))
                };
                var R = (0, J[w])(K === "accessor" ? {
                    get: C.get,
                    set: C.set
                } : C[D], N);
                if (K === "accessor") {
                    if (R === void 0) continue;
                    if (R === null || typeof R !== "object") throw TypeError("Object expected");
                    if (E = V(R.get)) C.get = E;
                    if (E = V(R.set)) C.set = E;
                    if (E = V(R.init)) X.unshift(E)
                } else if (E = V(R))
                    if (K === "field") X.unshift(E);
                    else C[D] = E
            }
            if (H) Object.defineProperty(H, W.name, C);
            z = !0
        }, DGQ = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, HGQ = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, CGQ = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, EGQ = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, zGQ = function(I, Y, J, W) {
            function X(F) {
                return F instanceof J ? F : new J(function(V) {
                    V(F)
                })
            }
            return new(J || (J = Promise))(function(F, V) {
                function K(C) {
                    try {
                        H(W.next(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function D(C) {
                    try {
                        H(W.throw(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function H(C) {
                    C.done ? F(C.value) : X(C.value).then(K, D)
                }
                H((W = W.apply(I, Y || [])).next())
            })
        }, UGQ = function(I, Y) {
            var J = {
                    label: 0,
                    sent: function() {
                        if (F[0] & 1) throw F[1];
                        return F[1]
                    },
                    trys: [],
                    ops: []
                },
                W, X, F, V = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
            return V.next = K(0), V.throw = K(1), V.return = K(2), typeof Symbol === "function" && (V[Symbol.iterator] = function() {
                return this
            }), V;

            function K(H) {
                return function(C) {
                    return D([H, C])
                }
            }

            function D(H) {
                if (W) throw TypeError("Generator is already executing.");
                while (V && (V = 0, H[0] && (J = 0)), J) try {
                    if (W = 1, X && (F = H[0] & 2 ? X.return : H[0] ? X.throw || ((F = X.return) && F.call(X), 0) : X.next) && !(F = F.call(X, H[1])).done) return F;
                    if (X = 0, F) H = [H[0] & 2, F.value];
                    switch (H[0]) {
                        case 0:
                        case 1:
                            F = H;
                            break;
                        case 4:
                            return J.label++, {
                                value: H[1],
                                done: !1
                            };
                        case 5:
                            J.label++, X = H[1], H = [0];
                            continue;
                        case 7:
                            H = J.ops.pop(), J.trys.pop();
                            continue;
                        default:
                            if ((F = J.trys, !(F = F.length > 0 && F[F.length - 1])) && (H[0] === 6 || H[0] === 2)) {
                                J = 0;
                                continue
                            }
                            if (H[0] === 3 && (!F || H[1] > F[0] && H[1] < F[3])) {
                                J.label = H[1];
                                break
                            }
                            if (H[0] === 6 && J.label < F[1]) {
                                J.label = F[1], F = H;
                                break
                            }
                            if (F && J.label < F[2]) {
                                J.label = F[2], J.ops.push(H);
                                break
                            }
                            if (F[2]) J.ops.pop();
                            J.trys.pop();
                            continue
                    }
                    H = Y.call(I, J)
                } catch (C) {
                    H = [6, C], X = 0
                } finally {
                    W = F = 0
                }
                if (H[0] & 5) throw H[1];
                return {
                    value: H[0] ? H[1] : void 0,
                    done: !0
                }
            }
        }, $GQ = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) $hA(Y, I, J)
        }, $hA = Object.create ? function(I, Y, J, W) {
            if (W === void 0) W = J;
            var X = Object.getOwnPropertyDescriptor(Y, J);
            if (!X || ("get" in X ? !Y.__esModule : X.writable || X.configurable)) X = {
                enumerable: !0,
                get: function() {
                    return Y[J]
                }
            };
            Object.defineProperty(I, W, X)
        } : function(I, Y, J, W) {
            if (W === void 0) W = J;
            I[W] = Y[J]
        }, UhA = function(I) {
            var Y = typeof Symbol === "function" && Symbol.iterator,
                J = Y && I[Y],
                W = 0;
            if (J) return J.call(I);
            if (I && typeof I.length === "number") return {
                next: function() {
                    if (I && W >= I.length) I = void 0;
                    return {
                        value: I && I[W++],
                        done: !I
                    }
                }
            };
            throw TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Aq1 = function(I, Y) {
            var J = typeof Symbol === "function" && I[Symbol.iterator];
            if (!J) return I;
            var W = J.call(I),
                X, F = [],
                V;
            try {
                while ((Y === void 0 || Y-- > 0) && !(X = W.next()).done) F.push(X.value)
            } catch (K) {
                V = {
                    error: K
                }
            } finally {
                try {
                    if (X && !X.done && (J = W.return)) J.call(W)
                } finally {
                    if (V) throw V.error
                }
            }
            return F
        }, wGQ = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(Aq1(arguments[Y]));
            return I
        }, qGQ = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, NGQ = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, B8A = function(I) {
            return this instanceof B8A ? (this.v = I, this) : new B8A(I)
        }, LGQ = function(I, Y, J) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var W = J.apply(I, Y || []),
                X, F = [];
            return X = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), K("next"), K("throw"), K("return", V), X[Symbol.asyncIterator] = function() {
                return this
            }, X;

            function V(w) {
                return function(N) {
                    return Promise.resolve(N).then(w, E)
                }
            }

            function K(w, N) {
                if (W[w]) {
                    if (X[w] = function(q) {
                            return new Promise(function(R, P) {
                                F.push([w, q, R, P]) > 1 || D(w, q)
                            })
                        }, N) X[w] = N(X[w])
                }
            }

            function D(w, N) {
                try {
                    H(W[w](N))
                } catch (q) {
                    z(F[0][3], q)
                }
            }

            function H(w) {
                w.value instanceof B8A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
            }

            function C(w) {
                D("next", w)
            }

            function E(w) {
                D("throw", w)
            }

            function z(w, N) {
                if (w(N), F.shift(), F.length) D(F[0][0], F[0][1])
            }
        }, MGQ = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: B8A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, OGQ = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof UhA === "function" ? UhA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
                return this
            }, J);

            function W(F) {
                J[F] = I[F] && function(V) {
                    return new Promise(function(K, D) {
                        V = I[F](V), X(K, D, V.done, V.value)
                    })
                }
            }

            function X(F, V, K, D) {
                Promise.resolve(D).then(function(H) {
                    F({
                        value: H,
                        done: K
                    })
                }, V)
            }
        }, RGQ = function(I, Y) {
            if (Object.defineProperty) Object.defineProperty(I, "raw", {
                value: Y
            });
            else I.raw = Y;
            return I
        };
        var B = Object.create ? function(I, Y) {
                Object.defineProperty(I, "default", {
                    enumerable: !0,
                    value: Y
                })
            } : function(I, Y) {
                I.default = Y
            },
            G = function(I) {
                return G = Object.getOwnPropertyNames || function(Y) {
                    var J = [];
                    for (var W in Y)
                        if (Object.prototype.hasOwnProperty.call(Y, W)) J[J.length] = W;
                    return J
                }, G(I)
            };
        TGQ = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") $hA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, PGQ = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, jGQ = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, SGQ = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, _GQ = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, kGQ = function(I, Y, J) {
            if (Y !== null && Y !== void 0) {
                if (typeof Y !== "object" && typeof Y !== "function") throw TypeError("Object expected.");
                var W, X;
                if (J) {
                    if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                    W = Y[Symbol.asyncDispose]
                }
                if (W === void 0) {
                    if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                    if (W = Y[Symbol.dispose], J) X = W
                }
                if (typeof W !== "function") throw TypeError("Object not disposable.");
                if (X) W = function() {
                    try {
                        X.call(this)
                    } catch (F) {
                        return Promise.reject(F)
                    }
                };
                I.stack.push({
                    value: Y,
                    dispose: W,
                    async: J
                })
            } else if (J) I.stack.push({
                async: !0
            });
            return Y
        };
        var Z = typeof SuppressedError === "function" ? SuppressedError : function(I, Y, J) {
            var W = Error(J);
            return W.name = "SuppressedError", W.error = I, W.suppressed = Y, W
        };
        yGQ = function(I) {
            function Y(F) {
                I.error = I.hasError ? new Z(F, I.error, "An error was suppressed during disposal.") : F, I.hasError = !0
            }
            var J, W = 0;

            function X() {
                while (J = I.stack.pop()) try {
                    if (!J.async && W === 1) return W = 0, I.stack.push(J), Promise.resolve().then(X);
                    if (J.dispose) {
                        var F = J.dispose.call(J.value);
                        if (J.async) return W |= 2, Promise.resolve(F).then(X, function(V) {
                            return Y(V), X()
                        })
                    } else W |= 1
                } catch (V) {
                    Y(V)
                }
                if (W === 1) return I.hasError ? Promise.reject(I.error) : Promise.resolve();
                if (I.hasError) throw I.error
            }
            return X()
        }, xGQ = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", JGQ), A("__assign", WGQ), A("__rest", XGQ), A("__decorate", FGQ), A("__param", VGQ), A("__esDecorate", KGQ), A("__runInitializers", DGQ), A("__propKey", HGQ), A("__setFunctionName", CGQ), A("__metadata", EGQ), A("__awaiter", zGQ), A("__generator", UGQ), A("__exportStar", $GQ), A("__createBinding", $hA), A("__values", UhA), A("__read", Aq1), A("__spread", wGQ), A("__spreadArrays", qGQ), A("__spreadArray", NGQ), A("__await", B8A), A("__asyncGenerator", LGQ), A("__asyncDelegator", MGQ), A("__asyncValues", OGQ), A("__makeTemplateObject", RGQ), A("__importStar", TGQ), A("__importDefault", PGQ), A("__classPrivateFieldGet", jGQ), A("__classPrivateFieldSet", SGQ), A("__classPrivateFieldIn", _GQ), A("__addDisposableResource", kGQ), A("__disposeResources", yGQ), A("__rewriteRelativeImportExtension", xGQ)
    })
});
var bGQ = U((vGQ) => {
    Object.defineProperty(vGQ, "__esModule", {
        value: !0
    });
    vGQ.propertyProviderChain = vGQ.createCredentialChain = void 0;
    var mx4 = P2(),
        dx4 = (...A) => {
            let Q = -1,
                G = Object.assign(async (Z) => {
                    let I = await vGQ.propertyProviderChain(...A)(Z);
                    if (!I.expiration && Q !== -1) I.expiration = new Date(Date.now() + Q);
                    return I
                }, {
                    expireAfter(Z) {
                        if (Z < 300000) throw Error("@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.");
                        return Q = Z, G
                    }
                });
            return G
        };
    vGQ.createCredentialChain = dx4;
    var cx4 = (...A) => async (Q) => {
        if (A.length === 0) throw new mx4.ProviderError("No providers in chain");
        let B;
        for (let G of A) try {
            return await G(Q)
        } catch (Z) {
            if (B = Z, Z?.tryNextLink) continue;
            throw Z
        }
        throw B
    };
    vGQ.propertyProviderChain = cx4
});
var Bq1 = U((rF7, lGQ) => {
    var {
        defineProperty: qhA,
        getOwnPropertyDescriptor: lx4,
        getOwnPropertyNames: ix4
    } = Object, nx4 = Object.prototype.hasOwnProperty, NhA = (A, Q) => qhA(A, "name", {
        value: Q,
        configurable: !0
    }), ax4 = (A, Q) => {
        for (var B in Q) qhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, sx4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of ix4(Q))
                if (!nx4.call(A, Z) && Z !== B) qhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = lx4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, rx4 = (A) => sx4(qhA({}, "__esModule", {
        value: !0
    }), A), fGQ = {};
    ax4(fGQ, {
        AlgorithmId: () => mGQ,
        EndpointURLScheme: () => uGQ,
        FieldPosition: () => dGQ,
        HttpApiKeyAuthLocation: () => gGQ,
        HttpAuthLocation: () => hGQ,
        IniSectionType: () => cGQ,
        RequestHandlerProtocol: () => pGQ,
        SMITHY_CONTEXT_KEY: () => Qv4,
        getDefaultClientConfiguration: () => ex4,
        resolveDefaultRuntimeConfig: () => Av4
    });
    lGQ.exports = rx4(fGQ);
    var hGQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(hGQ || {}),
        gGQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(gGQ || {}),
        uGQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(uGQ || {}),
        mGQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(mGQ || {}),
        ox4 = NhA((A) => {
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
        tx4 = NhA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        ex4 = NhA((A) => {
            return ox4(A)
        }, "getDefaultClientConfiguration"),
        Av4 = NhA((A) => {
            return tx4(A)
        }, "resolveDefaultRuntimeConfig"),
        dGQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(dGQ || {}),
        Qv4 = "__smithy_context",
        cGQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(cGQ || {}),
        pGQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(pGQ || {})
});
var cz = U((oF7, rGQ) => {
    var {
        defineProperty: LhA,
        getOwnPropertyDescriptor: Bv4,
        getOwnPropertyNames: Gv4
    } = Object, Zv4 = Object.prototype.hasOwnProperty, Yd = (A, Q) => LhA(A, "name", {
        value: Q,
        configurable: !0
    }), Iv4 = (A, Q) => {
        for (var B in Q) LhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Yv4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Gv4(Q))
                if (!Zv4.call(A, Z) && Z !== B) LhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Bv4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Jv4 = (A) => Yv4(LhA({}, "__esModule", {
        value: !0
    }), A), iGQ = {};
    Iv4(iGQ, {
        Field: () => Fv4,
        Fields: () => Vv4,
        HttpRequest: () => Kv4,
        HttpResponse: () => Dv4,
        IHttpRequest: () => nGQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => Wv4,
        isValidHostname: () => sGQ,
        resolveHttpHandlerRuntimeConfig: () => Xv4
    });
    rGQ.exports = Jv4(iGQ);
    var Wv4 = Yd((A) => {
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
        Xv4 = Yd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        nGQ = Bq1(),
        Fv4 = class {
            static {
                Yd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = nGQ.FieldPosition.HEADER,
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
        Vv4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                Yd(this, "Fields")
            }