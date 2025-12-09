/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_018.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (13次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (1次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 18/61
 * Lines: 89714 - 91209 (1496 lines)
 * Original file: cli.js
 */

            return (0, b0.decorateServiceException)(Z, B)
        }, "de_TooManyRequestsExceptionRes"),
        dn4 = g0((A, Q) => {
            return (0, b0.take)(A, {
                AccessKeyId: b0.expectString,
                Expiration: g0((B) => (0, b0.expectNonNull)((0, b0.parseEpochTimestamp)((0, b0.expectNumber)(B))), "Expiration"),
                SecretKey: b0.expectString,
                SessionToken: b0.expectString
            })
        }, "de_Credentials"),
        cn4 = g0((A, Q) => {
            return (0, b0.take)(A, {
                Credentials: g0((B) => dn4(B, Q), "Credentials"),
                IdentityId: b0.expectString
            })
        }, "de_GetCredentialsForIdentityResponse"),
        pn4 = g0((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return FDQ(G, Q)
            })
        }, "de_IdentitiesList"),
        FDQ = g0((A, Q) => {
            return (0, b0.take)(A, {
                CreationDate: g0((B) => (0, b0.expectNonNull)((0, b0.parseEpochTimestamp)((0, b0.expectNumber)(B))), "CreationDate"),
                IdentityId: b0.expectString,
                LastModifiedDate: g0((B) => (0, b0.expectNonNull)((0, b0.parseEpochTimestamp)((0, b0.expectNumber)(B))), "LastModifiedDate"),
                Logins: b0._json
            })
        }, "de_IdentityDescription"),
        ln4 = g0((A, Q) => {
            return (0, b0.take)(A, {
                Identities: g0((B) => pn4(B, Q), "Identities"),
                IdentityPoolId: b0.expectString,
                NextToken: b0.expectString
            })
        }, "de_ListIdentitiesResponse"),
        e5 = g0((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        in4 = (0, b0.withBaseException)(Dw),
        fY = g0(async (A, Q, B, G, Z) => {
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
            return new DL1.HttpRequest(X)
        }, "buildHttpRpcRequest");

    function uI(A) {
        return {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": `AWSCognitoIdentityService.${A}`
        }
    }
    g0(uI, "sharedHeaders");
    var VDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").f(void 0, void 0).ser(gi4).de(Wn4).build() {
            static {
                g0(this, "CreateIdentityPoolCommand")
            }
        },
        KDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").f(void 0, void 0).ser(ui4).de(Xn4).build() {
            static {
                g0(this, "DeleteIdentitiesCommand")
            }
        },
        DDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").f(void 0, void 0).ser(mi4).de(Fn4).build() {
            static {
                g0(this, "DeleteIdentityPoolCommand")
            }
        },
        HDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").f(void 0, void 0).ser(di4).de(Vn4).build() {
            static {
                g0(this, "DescribeIdentityCommand")
            }
        },
        CDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").f(void 0, void 0).ser(ci4).de(Kn4).build() {
            static {
                g0(this, "DescribeIdentityPoolCommand")
            }
        },
        EDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(QDQ, GDQ).ser(pi4).de(Dn4).build() {
            static {
                g0(this, "GetCredentialsForIdentityCommand")
            }
        },
        zDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").f(ZDQ, void 0).ser(li4).de(Hn4).build() {
            static {
                g0(this, "GetIdCommand")
            }
        },
        UDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").f(void 0, void 0).ser(ii4).de(Cn4).build() {
            static {
                g0(this, "GetIdentityPoolRolesCommand")
            }
        },
        $DQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").f(IDQ, YDQ).ser(ni4).de(En4).build() {
            static {
                g0(this, "GetOpenIdTokenCommand")
            }
        },
        wDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").f(JDQ, WDQ).ser(ai4).de(zn4).build() {
            static {
                g0(this, "GetOpenIdTokenForDeveloperIdentityCommand")
            }
        },
        qDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(si4).de(Un4).build() {
            static {
                g0(this, "GetPrincipalTagAttributeMapCommand")
            }
        },
        NDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").f(void 0, void 0).ser(ri4).de($n4).build() {
            static {
                g0(this, "ListIdentitiesCommand")
            }
        },
        CL1 = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").f(void 0, void 0).ser(oi4).de(wn4).build() {
            static {
                g0(this, "ListIdentityPoolsCommand")
            }
        },
        LDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").f(void 0, void 0).ser(ti4).de(qn4).build() {
            static {
                g0(this, "ListTagsForResourceCommand")
            }
        },
        MDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").f(void 0, void 0).ser(ei4).de(Nn4).build() {
            static {
                g0(this, "LookupDeveloperIdentityCommand")
            }
        },
        ODQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").f(void 0, void 0).ser(An4).de(Ln4).build() {
            static {
                g0(this, "MergeDeveloperIdentitiesCommand")
            }
        },
        RDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").f(void 0, void 0).ser(Qn4).de(Mn4).build() {
            static {
                g0(this, "SetIdentityPoolRolesCommand")
            }
        },
        TDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(Bn4).de(On4).build() {
            static {
                g0(this, "SetPrincipalTagAttributeMapCommand")
            }
        },
        PDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").f(void 0, void 0).ser(Gn4).de(Rn4).build() {
            static {
                g0(this, "TagResourceCommand")
            }
        },
        jDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").f(void 0, void 0).ser(Zn4).de(Tn4).build() {
            static {
                g0(this, "UnlinkDeveloperIdentityCommand")
            }
        },
        SDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").f(XDQ, void 0).ser(In4).de(Pn4).build() {
            static {
                g0(this, "UnlinkIdentityCommand")
            }
        },
        _DQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").f(void 0, void 0).ser(Yn4).de(jn4).build() {
            static {
                g0(this, "UntagResourceCommand")
            }
        },
        kDQ = class extends b0.Command.classBuilder().ep(xY).m(function(A, Q, B, G) {
            return [(0, vY.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gI.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").f(void 0, void 0).ser(Jn4).de(Sn4).build() {
            static {
                g0(this, "UpdateIdentityPoolCommand")
            }
        },
        nn4 = {
            CreateIdentityPoolCommand: VDQ,
            DeleteIdentitiesCommand: KDQ,
            DeleteIdentityPoolCommand: DDQ,
            DescribeIdentityCommand: HDQ,
            DescribeIdentityPoolCommand: CDQ,
            GetCredentialsForIdentityCommand: EDQ,
            GetIdCommand: zDQ,
            GetIdentityPoolRolesCommand: UDQ,
            GetOpenIdTokenCommand: $DQ,
            GetOpenIdTokenForDeveloperIdentityCommand: wDQ,
            GetPrincipalTagAttributeMapCommand: qDQ,
            ListIdentitiesCommand: NDQ,
            ListIdentityPoolsCommand: CL1,
            ListTagsForResourceCommand: LDQ,
            LookupDeveloperIdentityCommand: MDQ,
            MergeDeveloperIdentitiesCommand: ODQ,
            SetIdentityPoolRolesCommand: RDQ,
            SetPrincipalTagAttributeMapCommand: TDQ,
            TagResourceCommand: PDQ,
            UnlinkDeveloperIdentityCommand: jDQ,
            UnlinkIdentityCommand: SDQ,
            UntagResourceCommand: _DQ,
            UpdateIdentityPoolCommand: kDQ
        },
        yDQ = class extends HL1 {
            static {
                g0(this, "CognitoIdentity")
            }
        };
    (0, b0.createAggregatedClient)(nn4, yDQ);
    var an4 = (0, NgA.createPaginator)(HL1, CL1, "NextToken", "NextToken", "MaxResults")
});
var wL1 = U((qD7, iDQ) => {
    var {
        defineProperty: OgA,
        getOwnPropertyDescriptor: sn4,
        getOwnPropertyNames: bDQ
    } = Object, rn4 = Object.prototype.hasOwnProperty, Hw = (A, Q) => OgA(A, "name", {
        value: Q,
        configurable: !0
    }), on4 = (A, Q) => function() {
        return A && (Q = (0, A[bDQ(A)[0]])(A = 0)), Q
    }, fDQ = (A, Q) => {
        for (var B in Q) OgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, tn4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bDQ(Q))
                if (!rn4.call(A, Z) && Z !== B) OgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = sn4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, en4 = (A) => tn4(OgA({}, "__esModule", {
        value: !0
    }), A), zL1 = {};
    fDQ(zL1, {
        CognitoIdentityClient: () => MgA.CognitoIdentityClient,
        GetCredentialsForIdentityCommand: () => MgA.GetCredentialsForIdentityCommand,
        GetIdCommand: () => MgA.GetIdCommand
    });
    var MgA, hDQ = on4({
            "src/loadCognitoIdentity.ts"() {
                MgA = vDQ()
            }
        }),
        gDQ = {};
    fDQ(gDQ, {
        fromCognitoIdentity: () => $L1,
        fromCognitoIdentityPool: () => pDQ
    });
    iDQ.exports = en4(gDQ);
    var RgA = P2();

    function UL1(A) {
        return Promise.all(Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            if (typeof G === "string") Q.push([B, G]);
            else Q.push(G().then((Z) => [B, Z]));
            return Q
        }, [])).then((Q) => Q.reduce((B, [G, Z]) => {
            return B[G] = Z, B
        }, {}))
    }
    Hw(UL1, "resolveLogins");

    function $L1(A) {
        return async (Q) => {
            A.logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
            let {
                GetCredentialsForIdentityCommand: B,
                CognitoIdentityClient: G
            } = await Promise.resolve().then(() => (hDQ(), zL1)), Z = Hw((X) => A.clientConfig?.[X] ?? A.parentClientConfig?.[X] ?? Q?.callerClientConfig?.[X], "fromConfigs"), {
                Credentials: {
                    AccessKeyId: I = uDQ(A.logger),
                    Expiration: Y,
                    SecretKey: J = dDQ(A.logger),
                    SessionToken: W
                } = mDQ(A.logger)
            } = await (A.client ?? new G(Object.assign({}, A.clientConfig ?? {}, {
                region: Z("region"),
                profile: Z("profile")
            }))).send(new B({
                CustomRoleArn: A.customRoleArn,
                IdentityId: A.identityId,
                Logins: A.logins ? await UL1(A.logins) : void 0
            }));
            return {
                identityId: A.identityId,
                accessKeyId: I,
                secretAccessKey: J,
                sessionToken: W,
                expiration: Y
            }
        }
    }
    Hw($L1, "fromCognitoIdentity");

    function uDQ(A) {
        throw new RgA.CredentialsProviderError("Response from Amazon Cognito contained no access key ID", {
            logger: A
        })
    }
    Hw(uDQ, "throwOnMissingAccessKeyId");

    function mDQ(A) {
        throw new RgA.CredentialsProviderError("Response from Amazon Cognito contained no credentials", {
            logger: A
        })
    }
    Hw(mDQ, "throwOnMissingCredentials");

    function dDQ(A) {
        throw new RgA.CredentialsProviderError("Response from Amazon Cognito contained no secret key", {
            logger: A
        })
    }
    Hw(dDQ, "throwOnMissingSecretKey");
    var EL1 = "IdentityIds",
        Aa4 = class {
            constructor(A = "aws:cognito-identity-ids") {
                this.dbName = A
            }
            static {
                Hw(this, "IndexedDbStorage")
            }
            getItem(A) {
                return this.withObjectStore("readonly", (Q) => {
                    let B = Q.get(A);
                    return new Promise((G) => {
                        B.onerror = () => G(null), B.onsuccess = () => G(B.result ? B.result.value : null)
                    })
                }).catch(() => null)
            }
            removeItem(A) {
                return this.withObjectStore("readwrite", (Q) => {
                    let B = Q.delete(A);
                    return new Promise((G, Z) => {
                        B.onerror = () => Z(B.error), B.onsuccess = () => G()
                    })
                })
            }
            setItem(A, Q) {
                return this.withObjectStore("readwrite", (B) => {
                    let G = B.put({
                        id: A,
                        value: Q
                    });
                    return new Promise((Z, I) => {
                        G.onerror = () => I(G.error), G.onsuccess = () => Z()
                    })
                })
            }
            getDb() {
                let A = self.indexedDB.open(this.dbName, 1);
                return new Promise((Q, B) => {
                    A.onsuccess = () => {
                        Q(A.result)
                    }, A.onerror = () => {
                        B(A.error)
                    }, A.onblocked = () => {
                        B(Error("Unable to access DB"))
                    }, A.onupgradeneeded = () => {
                        let G = A.result;
                        G.onerror = () => {
                            B(Error("Failed to create object store"))
                        }, G.createObjectStore(EL1, {
                            keyPath: "id"
                        })
                    }
                })
            }
            withObjectStore(A, Q) {
                return this.getDb().then((B) => {
                    let G = B.transaction(EL1, A);
                    return G.oncomplete = () => B.close(), new Promise((Z, I) => {
                        G.onerror = () => I(G.error), Z(Q(G.objectStore(EL1)))
                    }).catch((Z) => {
                        throw B.close(), Z
                    })
                })
            }
        },
        Qa4 = class {
            constructor(A = {}) {
                this.store = A
            }
            static {
                Hw(this, "InMemoryStorage")
            }
            getItem(A) {
                if (A in this.store) return this.store[A];
                return null
            }
            removeItem(A) {
                delete this.store[A]
            }
            setItem(A, Q) {
                this.store[A] = Q
            }
        },
        Ba4 = new Qa4;

    function cDQ() {
        if (typeof self === "object" && self.indexedDB) return new Aa4;
        if (typeof window === "object" && window.localStorage) return window.localStorage;
        return Ba4
    }
    Hw(cDQ, "localStorage");

    function pDQ({
        accountId: A,
        cache: Q = cDQ(),
        client: B,
        clientConfig: G,
        customRoleArn: Z,
        identityPoolId: I,
        logins: Y,
        userIdentifier: J = !Y || Object.keys(Y).length === 0 ? "ANONYMOUS" : void 0,
        logger: W,
        parentClientConfig: X
    }) {
        W?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity");
        let F = J ? `aws:cognito-identity-credentials:${I}:${J}` : void 0,
            V = Hw(async (K) => {
                let {
                    GetIdCommand: D,
                    CognitoIdentityClient: H
                } = await Promise.resolve().then(() => (hDQ(), zL1)), C = Hw((w) => G?.[w] ?? X?.[w] ?? K?.callerClientConfig?.[w], "fromConfigs"), E = B ?? new H(Object.assign({}, G ?? {}, {
                    region: C("region"),
                    profile: C("profile")
                })), z = F && await Q.getItem(F);
                if (!z) {
                    let {
                        IdentityId: w = lDQ(W)
                    } = await E.send(new D({
                        AccountId: A,
                        IdentityPoolId: I,
                        Logins: Y ? await UL1(Y) : void 0
                    }));
                    if (z = w, F) Promise.resolve(Q.setItem(F, z)).catch(() => {})
                }
                return V = $L1({
                    client: E,
                    customRoleArn: Z,
                    logins: Y,
                    identityId: z
                }), V(K)
            }, "provider");
        return (K) => V(K).catch(async (D) => {
            if (F) Promise.resolve(Q.removeItem(F)).catch(() => {});
            throw D
        })
    }
    Hw(pDQ, "fromCognitoIdentityPool");

    function lDQ(A) {
        throw new RgA.CredentialsProviderError("Response from Amazon Cognito contained no identity ID", {
            logger: A
        })
    }
    Hw(lDQ, "throwOnMissingId")
});
var sDQ = U((nDQ) => {
    Object.defineProperty(nDQ, "__esModule", {
        value: !0
    });
    nDQ.fromCognitoIdentity = void 0;
    var Ga4 = wL1(),
        Za4 = (A) => (0, Ga4.fromCognitoIdentity)({
            ...A
        });
    nDQ.fromCognitoIdentity = Za4
});
var tDQ = U((rDQ) => {
    Object.defineProperty(rDQ, "__esModule", {
        value: !0
    });
    rDQ.fromCognitoIdentityPool = void 0;
    var Ia4 = wL1(),
        Ya4 = (A) => (0, Ia4.fromCognitoIdentityPool)({
            ...A
        });
    rDQ.fromCognitoIdentityPool = Ya4
});
var QHQ = U((eDQ) => {
    Object.defineProperty(eDQ, "__esModule", {
        value: !0
    });
    eDQ.fromContainerMetadata = void 0;
    var Ja4 = wF(),
        Wa4 = (A) => {
            return A?.logger?.debug("@smithy/credential-provider-imds", "fromContainerMetadata"), (0, Ja4.fromContainerMetadata)(A)
        };
    eDQ.fromContainerMetadata = Wa4
});
var DL = U((TD7, YHQ) => {
    var {
        defineProperty: TgA,
        getOwnPropertyDescriptor: Xa4,
        getOwnPropertyNames: Fa4
    } = Object, Va4 = Object.prototype.hasOwnProperty, PgA = (A, Q) => TgA(A, "name", {
        value: Q,
        configurable: !0
    }), Ka4 = (A, Q) => {
        for (var B in Q) TgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Da4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Fa4(Q))
                if (!Va4.call(A, Z) && Z !== B) TgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Xa4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Ha4 = (A) => Da4(TgA({}, "__esModule", {
        value: !0
    }), A), BHQ = {};
    Ka4(BHQ, {
        emitWarningIfUnsupportedVersion: () => Ca4,
        setCredentialFeature: () => GHQ,
        setFeature: () => ZHQ,
        setTokenFeature: () => IHQ,
        state: () => qL1
    });
    YHQ.exports = Ha4(BHQ);
    var qL1 = {
            warningEmitted: !1
        },
        Ca4 = PgA((A) => {
            if (A && !qL1.warningEmitted && parseInt(A.substring(1, A.indexOf("."))) < 18) qL1.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`)
        }, "emitWarningIfUnsupportedVersion");

    function GHQ(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    PgA(GHQ, "setCredentialFeature");

    function ZHQ(A, Q, B) {
        if (!A.__aws_sdk_context) A.__aws_sdk_context = {
            features: {}
        };
        else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
        A.__aws_sdk_context.features[Q] = B
    }
    PgA(ZHQ, "setFeature");

    function IHQ(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    PgA(IHQ, "setTokenFeature")
});
var XHQ = U((JHQ) => {
    Object.defineProperty(JHQ, "__esModule", {
        value: !0
    });
    JHQ.checkUrl = void 0;
    var Ea4 = P2(),
        za4 = "169.254.170.2",
        Ua4 = "169.254.170.23",
        $a4 = "[fd00:ec2::23]",
        wa4 = (A, Q) => {
            if (A.protocol === "https:") return;
            if (A.hostname === za4 || A.hostname === Ua4 || A.hostname === $a4) return;
            if (A.hostname.includes("[")) {
                if (A.hostname === "[::1]" || A.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return
            } else {
                if (A.hostname === "localhost") return;
                let B = A.hostname.split("."),
                    G = (Z) => {
                        let I = parseInt(Z, 10);
                        return 0 <= I && I <= 255
                    };
                if (B[0] === "127" && G(B[1]) && G(B[2]) && G(B[3]) && B.length === 4) return
            }
            throw new Ea4.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
                logger: Q
            })
        };
    JHQ.checkUrl = wa4
});
var NL1 = U((jD7, UHQ) => {
    var {
        defineProperty: jgA,
        getOwnPropertyDescriptor: qa4,
        getOwnPropertyNames: Na4
    } = Object, La4 = Object.prototype.hasOwnProperty, SgA = (A, Q) => jgA(A, "name", {
        value: Q,
        configurable: !0
    }), Ma4 = (A, Q) => {
        for (var B in Q) jgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Oa4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Na4(Q))
                if (!La4.call(A, Z) && Z !== B) jgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = qa4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Ra4 = (A) => Oa4(jgA({}, "__esModule", {
        value: !0
    }), A), FHQ = {};
    Ma4(FHQ, {
        AlgorithmId: () => HHQ,
        EndpointURLScheme: () => DHQ,
        FieldPosition: () => CHQ,
        HttpApiKeyAuthLocation: () => KHQ,
        HttpAuthLocation: () => VHQ,
        IniSectionType: () => EHQ,
        RequestHandlerProtocol: () => zHQ,
        SMITHY_CONTEXT_KEY: () => _a4,
        getDefaultClientConfiguration: () => ja4,
        resolveDefaultRuntimeConfig: () => Sa4
    });
    UHQ.exports = Ra4(FHQ);
    var VHQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(VHQ || {}),
        KHQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(KHQ || {}),
        DHQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(DHQ || {}),
        HHQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(HHQ || {}),
        Ta4 = SgA((A) => {
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
        Pa4 = SgA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        ja4 = SgA((A) => {
            return Ta4(A)
        }, "getDefaultClientConfiguration"),
        Sa4 = SgA((A) => {
            return Pa4(A)
        }, "resolveDefaultRuntimeConfig"),
        CHQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(CHQ || {}),
        _a4 = "__smithy_context",
        EHQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(EHQ || {}),
        zHQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(zHQ || {})
});
var Cw = U((SD7, LHQ) => {
    var {
        defineProperty: _gA,
        getOwnPropertyDescriptor: ka4,
        getOwnPropertyNames: ya4
    } = Object, xa4 = Object.prototype.hasOwnProperty, Cd = (A, Q) => _gA(A, "name", {
        value: Q,
        configurable: !0
    }), va4 = (A, Q) => {
        for (var B in Q) _gA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ba4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of ya4(Q))
                if (!xa4.call(A, Z) && Z !== B) _gA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ka4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, fa4 = (A) => ba4(_gA({}, "__esModule", {
        value: !0
    }), A), $HQ = {};
    va4($HQ, {
        Field: () => ua4,
        Fields: () => ma4,
        HttpRequest: () => da4,
        HttpResponse: () => ca4,
        IHttpRequest: () => wHQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => ha4,
        isValidHostname: () => NHQ,
        resolveHttpHandlerRuntimeConfig: () => ga4
    });
    LHQ.exports = fa4($HQ);
    var ha4 = Cd((A) => {
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
        ga4 = Cd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        wHQ = NL1(),
        ua4 = class {
            static {
                Cd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = wHQ.FieldPosition.HEADER,
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
        ma4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                Cd(this, "Fields")
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
        da4 = class A {
            static {
                Cd(this, "HttpRequest")
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
                if (B.query) B.query = qHQ(B.query);
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

    function qHQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    Cd(qHQ, "cloneQuery");
    var ca4 = class {
        static {
            Cd(this, "HttpResponse")
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

    function NHQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    Cd(NHQ, "isValidHostname")
});
var R3 = U((xD7, jL1) => {
    var {
        defineProperty: kgA,
        getOwnPropertyDescriptor: pa4,
        getOwnPropertyNames: la4
    } = Object, ia4 = Object.prototype.hasOwnProperty, O3 = (A, Q) => kgA(A, "name", {
        value: Q,
        configurable: !0
    }), na4 = (A, Q) => {
        for (var B in Q) kgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ML1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of la4(Q))
                if (!ia4.call(A, Z) && Z !== B) kgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = pa4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, aa4 = (A, Q, B) => (ML1(A, Q, "default"), B && ML1(B, Q, "default")), sa4 = (A) => ML1(kgA({}, "__esModule", {
        value: !0
    }), A), TL1 = {};
    na4(TL1, {
        Client: () => ra4,
        Command: () => RHQ,
        NoOpLogger: () => Ds4,
        SENSITIVE_STRING: () => ta4,
        ServiceException: () => As4,
        _json: () => RL1,
        collectBody: () => LL1.collectBody,
        convertMap: () => Hs4,
        createAggregatedClient: () => ea4,
        decorateServiceException: () => THQ,
        emitWarningIfUnsupportedVersion: () => Zs4,
        extendedEncodeURIComponent: () => LL1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => Vs4,
        getDefaultClientConfiguration: () => Xs4,
        getDefaultExtensionConfiguration: () => jHQ,
        getValueFromTextNode: () => SHQ,
        isSerializableHeaderValue: () => Ks4,
        loadConfigsForDefaultMode: () => Gs4,
        map: () => PL1,
        resolveDefaultRuntimeConfig: () => Fs4,
        resolvedPath: () => LL1.resolvedPath,
        serializeDateTime: () => ws4,
        serializeFloat: () => $s4,
        take: () => Cs4,
        throwDefaultError: () => PHQ,
        withBaseException: () => Qs4
    });
    jL1.exports = sa4(TL1);
    var OHQ = PR(),
        ra4 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, OHQ.constructStack)()
            }
            static {
                O3(this, "Client")
            }
            send(A, Q, B) {
                let G = typeof Q !== "function" ? Q : void 0,
                    Z = typeof Q === "function" ? Q : B,
                    I = G === void 0 && this.config.cacheMiddleware === !0,
                    Y;
                if (I) {
                    if (!this.handlers) this.handlers = new WeakMap;
                    let J = this.handlers;
                    if (J.has(A.constructor)) Y = J.get(A.constructor);
                    else Y = A.resolveMiddleware(this.middlewareStack, this.config, G), J.set(A.constructor, Y)
                } else delete this.handlers, Y = A.resolveMiddleware(this.middlewareStack, this.config, G);
                if (Z) Y(A).then((J) => Z(null, J.output), (J) => Z(J)).catch(() => {});
                else return Y(A).then((J) => J.output)
            }
            destroy() {
                this.config?.requestHandler?.destroy?.(), delete this.handlers
            }
        },
        LL1 = C5(),
        OL1 = NL1(),
        RHQ = class {
            constructor() {
                this.middlewareStack = (0, OHQ.constructStack)()
            }
            static {
                O3(this, "Command")
            }
            static classBuilder() {
                return new oa4
            }
            resolveMiddlewareWithContext(A, Q, B, {
                middlewareFn: G,
                clientName: Z,
                commandName: I,
                inputFilterSensitiveLog: Y,
                outputFilterSensitiveLog: J,
                smithyContext: W,
                additionalContext: X,
                CommandCtor: F
            }) {
                for (let C of G.bind(this)(F, A, Q, B)) this.middlewareStack.use(C);
                let V = A.concat(this.middlewareStack),
                    {
                        logger: K
                    } = Q,
                    D = {
                        logger: K,
                        clientName: Z,
                        commandName: I,
                        inputFilterSensitiveLog: Y,
                        outputFilterSensitiveLog: J,
                        [OL1.SMITHY_CONTEXT_KEY]: {
                            commandInstance: this,
                            ...W
                        },
                        ...X
                    },
                    {
                        requestHandler: H
                    } = Q;
                return V.resolve((C) => H.handle(C.request, B || {}), D)
            }
        },
        oa4 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                O3(this, "ClassBuilder")
            }
            init(A) {
                this._init = A
            }
            ep(A) {
                return this._ep = A, this
            }
            m(A) {
                return this._middlewareFn = A, this
            }
            s(A, Q, B = {}) {
                return this._smithyContext = {
                    service: A,
                    operation: Q,
                    ...B
                }, this
            }
            c(A = {}) {
                return this._additionalContext = A, this
            }
            n(A, Q) {
                return this._clientName = A, this._commandName = Q, this
            }
            f(A = (B) => B, Q = (B) => B) {
                return this._inputFilterSensitiveLog = A, this._outputFilterSensitiveLog = Q, this
            }
            ser(A) {
                return this._serializer = A, this
            }
            de(A) {
                return this._deserializer = A, this
            }
            sc(A) {
                return this._operationSchema = A, this._smithyContext.operationSchema = A, this
            }
            build() {
                let A = this,
                    Q;
                return Q = class extends RHQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this), this.schema = A._operationSchema
                    }
                    static {
                        O3(this, "CommandRef")
                    }
                    static getEndpointParameterInstructions() {
                        return A._ep
                    }
                    resolveMiddleware(B, G, Z) {
                        return this.resolveMiddlewareWithContext(B, G, Z, {
                            CommandCtor: Q,
                            middlewareFn: A._middlewareFn,
                            clientName: A._clientName,
                            commandName: A._commandName,
                            inputFilterSensitiveLog: A._inputFilterSensitiveLog,
                            outputFilterSensitiveLog: A._outputFilterSensitiveLog,
                            smithyContext: A._smithyContext,
                            additionalContext: A._additionalContext
                        })
                    }
                }
            }
        },
        ta4 = "***SensitiveInformation***",
        ea4 = O3((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = O3(async function(Y, J, W) {
                        let X = new G(Y);
                        if (typeof J === "function") this.send(X, J);
                        else if (typeof W === "function") {
                            if (typeof J !== "object") throw Error(`Expected http options but got ${typeof J}`);
                            this.send(X, J || {}, W)
                        } else return this.send(X, J)
                    }, "methodImpl"),
                    I = (B[0].toLowerCase() + B.slice(1)).replace(/Command$/, "");
                Q.prototype[I] = Z
            }
        }, "createAggregatedClient"),
        As4 = class A extends Error {
            static {
                O3(this, "ServiceException")
            }
            constructor(Q) {
                super(Q.message);
                Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = Q.name, this.$fault = Q.$fault, this.$metadata = Q.$metadata
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return A.prototype.isPrototypeOf(B) || Boolean(B.$fault) && Boolean(B.$metadata) && (B.$fault === "client" || B.$fault === "server")
            }
            static[Symbol.hasInstance](Q) {
                if (!Q) return !1;
                let B = Q;
                if (this === A) return A.isInstance(Q);
                if (A.isInstance(Q)) {
                    if (B.name && this.name) return this.prototype.isPrototypeOf(Q) || B.name === this.name;
                    return this.prototype.isPrototypeOf(Q)
                }
                return !1
            }
        },
        THQ = O3((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        PHQ = O3(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = Bs4(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw THQ(Y, Q)
        }, "throwDefaultError"),
        Qs4 = O3((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                PHQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        Bs4 = O3((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        Gs4 = O3((A) => {
            switch (A) {
                case "standard":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "in-region":
                    return {
                        retryMode: "standard", connectionTimeout: 1100
                    };
                case "cross-region":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "mobile":
                    return {
                        retryMode: "standard", connectionTimeout: 30000
                    };
                default:
                    return {}
            }
        }, "loadConfigsForDefaultMode"),
        MHQ = !1,
        Zs4 = O3((A) => {
            if (A && !MHQ && parseInt(A.substring(1, A.indexOf("."))) < 16) MHQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        Is4 = O3((A) => {
            let Q = [];
            for (let B in OL1.AlgorithmId) {
                let G = OL1.AlgorithmId[B];
                if (A[G] === void 0) continue;
                Q.push({
                    algorithmId: () => G,
                    checksumConstructor: () => A[G]
                })
            }
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        Ys4 = O3((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        Js4 = O3((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        Ws4 = O3((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        jHQ = O3((A) => {
            return Object.assign(Is4(A), Js4(A))
        }, "getDefaultExtensionConfiguration"),
        Xs4 = jHQ,
        Fs4 = O3((A) => {
            return Object.assign(Ys4(A), Ws4(A))
        }, "resolveDefaultRuntimeConfig"),
        Vs4 = O3((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        SHQ = O3((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = SHQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        Ks4 = O3((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        Ds4 = class {
            static {
                O3(this, "NoOpLogger")
            }
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
        };

    function PL1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, Es4(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            _HQ(G, null, I, Y)
        }
        return G
    }
    O3(PL1, "map");
    var Hs4 = O3((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        Cs4 = O3((A, Q) => {
            let B = {};
            for (let G in Q) _HQ(B, A, Q, G);
            return B
        }, "take"),
        Es4 = O3((A, Q, B) => {
            return PL1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        _HQ = O3((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = zs4, W = Us4, X = G] = Y;
                if (typeof J === "function" && J(Q[X]) || typeof J !== "function" && !!J) A[G] = W(Q[X]);
                return
            }
            let [Z, I] = B[G];
            if (typeof I === "function") {
                let Y, J = Z === void 0 && (Y = I()) != null,
                    W = typeof Z === "function" && !!Z(void 0) || typeof Z !== "function" && !!Z;
                if (J) A[G] = Y;
                else if (W) A[G] = I()
            } else {
                let Y = Z === void 0 && I != null,
                    J = typeof Z === "function" && !!Z(I) || typeof Z !== "function" && !!Z;
                if (Y || J) A[G] = I
            }
        }, "applyInstruction"),
        zs4 = O3((A) => A != null, "nonNullish"),
        Us4 = O3((A) => A, "pass"),
        $s4 = O3((A) => {
            if (A !== A) return "NaN";
            switch (A) {
                case 1 / 0:
                    return "Infinity";
                case -1 / 0:
                    return "-Infinity";
                default:
                    return A
            }
        }, "serializeFloat"),
        ws4 = O3((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        RL1 = O3((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(RL1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = RL1(A[B])
                }
                return Q
            }
            return A
        }, "_json");
    aa4(TL1, c6(), jL1.exports)
});
var yHQ = U((kHQ) => {
    Object.defineProperty(kHQ, "__esModule", {
        value: !0
    });
    kHQ.createGetRequest = Ms4;
    kHQ.getCredentials = Os4;
    var SL1 = P2(),
        qs4 = Cw(),
        Ns4 = R3(),
        Ls4 = cm();

    function Ms4(A) {
        return new qs4.HttpRequest({
            protocol: A.protocol,
            hostname: A.hostname,
            port: Number(A.port),
            path: A.pathname,
            query: Array.from(A.searchParams.entries()).reduce((Q, [B, G]) => {
                return Q[B] = G, Q
            }, {}),
            fragment: A.hash
        })
    }
    async function Os4(A, Q) {
        let G = await (0, Ls4.sdkStreamMixin)(A.body).transformToString();
        if (A.statusCode === 200) {
            let Z = JSON.parse(G);
            if (typeof Z.AccessKeyId !== "string" || typeof Z.SecretAccessKey !== "string" || typeof Z.Token !== "string" || typeof Z.Expiration !== "string") throw new SL1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
                logger: Q
            });
            return {
                accessKeyId: Z.AccessKeyId,
                secretAccessKey: Z.SecretAccessKey,
                sessionToken: Z.Token,
                expiration: (0, Ns4.parseRfc3339DateTime)(Z.Expiration)
            }
        }
        if (A.statusCode >= 400 && A.statusCode < 500) {
            let Z = {};
            try {
                Z = JSON.parse(G)
            } catch (I) {}
            throw Object.assign(new SL1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
                logger: Q
            }), {
                Code: Z.Code,
                Message: Z.Message
            })
        }
        throw new SL1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
            logger: Q
        })
    }
});
var bHQ = U((xHQ) => {
    Object.defineProperty(xHQ, "__esModule", {
        value: !0
    });
    xHQ.retryWrapper = void 0;
    var Ps4 = (A, Q, B) => {
        return async () => {
            for (let G = 0; G < Q; ++G) try {
                return await A()
            } catch (Z) {
                await new Promise((I) => setTimeout(I, B))
            }
            return await A()
        }
    };
    xHQ.retryWrapper = Ps4
});
var mHQ = U((gHQ) => {
    Object.defineProperty(gHQ, "__esModule", {
        value: !0
    });
    gHQ.fromHttp = void 0;
    var js4 = Tr(),
        Ss4 = DL(),
        _s4 = oG(),
        fHQ = P2(),
        ks4 = js4.__importDefault(UA("fs/promises")),
        ys4 = XHQ(),
        hHQ = yHQ(),
        xs4 = bHQ(),
        vs4 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        bs4 = "http://169.254.170.2",
        fs4 = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        hs4 = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
        gs4 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        us4 = (A = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
            let Q, B = A.awsContainerCredentialsRelativeUri ?? process.env[vs4],
                G = A.awsContainerCredentialsFullUri ?? process.env[fs4],
                Z = A.awsContainerAuthorizationToken ?? process.env[gs4],
                I = A.awsContainerAuthorizationTokenFile ?? process.env[hs4],
                Y = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console.warn : A.logger.warn;
            if (B && G) Y("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), Y("awsContainerCredentialsFullUri will take precedence.");
            if (Z && I) Y("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), Y("awsContainerAuthorizationToken will take precedence.");
            if (G) Q = G;
            else if (B) Q = `${bs4}${B}`;
            else throw new fHQ.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
                logger: A.logger
            });
            let J = new URL(Q);
            (0, ys4.checkUrl)(J, A.logger);
            let W = new _s4.NodeHttpHandler({
                requestTimeout: A.timeout ?? 1000,
                connectionTimeout: A.timeout ?? 1000
            });
            return (0, xs4.retryWrapper)(async () => {
                let X = (0, hHQ.createGetRequest)(J);
                if (Z) X.headers.Authorization = Z;
                else if (I) X.headers.Authorization = (await ks4.default.readFile(I)).toString();
                try {
                    let F = await W.handle(X);
                    return (0, hHQ.getCredentials)(F.response).then((V) => (0, Ss4.setCredentialFeature)(V, "CREDENTIALS_HTTP", "z"))
                } catch (F) {
                    throw new fHQ.CredentialsProviderError(String(F), {
                        logger: A.logger
                    })
                }
            }, A.maxRetries ?? 3, A.timeout ?? 1000)
        };
    gHQ.fromHttp = us4
});
var ygA = U((_L1) => {
    Object.defineProperty(_L1, "__esModule", {
        value: !0
    });
    _L1.fromHttp = void 0;
    var ms4 = mHQ();
    Object.defineProperty(_L1, "fromHttp", {
        enumerable: !0,
        get: function() {
            return ms4.fromHttp
        }
    })
});