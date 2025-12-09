/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: commands_005.js
 * 处理时间: 2025-12-09T03:41:37.113Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * M8       (  2x) shellEscape(args) - Escape shell args
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: commands
 * File: 5/8
 * Lines: 122375 - 123874 (1500 lines)
 * Original file: cli.js
 */

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
        bL8 = class A {
            static {
                hd(this, "HttpRequest")
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
                if (B.query) B.query = YdQ(B.query);
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

    function YdQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    hd(YdQ, "cloneQuery");
    var fL8 = class {
        static {
            hd(this, "HttpResponse")
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

    function JdQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    hd(JdQ, "isValidHostname")
});
var fdQ = U((Ow7, bdQ) => {
    var {
        defineProperty: GcA,
        getOwnPropertyDescriptor: hL8,
        getOwnPropertyNames: gL8
    } = Object, uL8 = Object.prototype.hasOwnProperty, q5 = (A, Q) => GcA(A, "name", {
        value: Q,
        configurable: !0
    }), mL8 = (A, Q) => {
        for (var B in Q) GcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, dL8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of gL8(Q))
                if (!uL8.call(A, Z) && Z !== B) GcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = hL8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, cL8 = (A) => dL8(GcA({}, "__esModule", {
        value: !0
    }), A), EdQ = {};
    mL8(EdQ, {
        GetRoleCredentialsCommand: () => ydQ,
        GetRoleCredentialsRequestFilterSensitiveLog: () => qdQ,
        GetRoleCredentialsResponseFilterSensitiveLog: () => LdQ,
        InvalidRequestException: () => zdQ,
        ListAccountRolesCommand: () => dj1,
        ListAccountRolesRequestFilterSensitiveLog: () => MdQ,
        ListAccountsCommand: () => cj1,
        ListAccountsRequestFilterSensitiveLog: () => OdQ,
        LogoutCommand: () => xdQ,
        LogoutRequestFilterSensitiveLog: () => RdQ,
        ResourceNotFoundException: () => UdQ,
        RoleCredentialsFilterSensitiveLog: () => NdQ,
        SSO: () => vdQ,
        SSOClient: () => IcA,
        SSOServiceException: () => a6A,
        TooManyRequestsException: () => $dQ,
        UnauthorizedException: () => wdQ,
        __Client: () => D2.Client,
        paginateListAccountRoles: () => CM8,
        paginateListAccounts: () => EM8
    });
    bdQ.exports = cL8(EdQ);
    var FdQ = QCA(),
        pL8 = BCA(),
        lL8 = GCA(),
        VdQ = g6A(),
        iL8 = S8(),
        Jb = nB(),
        nL8 = zX(),
        wCA = E5(),
        KdQ = X6(),
        DdQ = qj1(),
        aL8 = q5((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "awsssoportal"
            })
        }, "resolveClientEndpointParameters"),
        ZcA = {
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
        sL8 = omQ(),
        HdQ = UCA(),
        CdQ = XdQ(),
        D2 = ECA(),
        rL8 = q5((A) => {
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
        oL8 = q5((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        tL8 = q5((A, Q) => {
            let B = Object.assign((0, HdQ.getAwsRegionExtensionConfiguration)(A), (0, D2.getDefaultExtensionConfiguration)(A), (0, CdQ.getHttpHandlerExtensionConfiguration)(A), rL8(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, HdQ.resolveAwsRegionExtensionConfiguration)(B), (0, D2.resolveDefaultRuntimeConfig)(B), (0, CdQ.resolveHttpHandlerRuntimeConfig)(B), oL8(B))
        }, "resolveRuntimeExtensions"),
        IcA = class extends D2.Client {
            static {
                q5(this, "SSOClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, sL8.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = aL8(Q),
                    G = (0, VdQ.resolveUserAgentConfig)(B),
                    Z = (0, KdQ.resolveRetryConfig)(G),
                    I = (0, iL8.resolveRegionConfig)(Z),
                    Y = (0, FdQ.resolveHostHeaderConfig)(I),
                    J = (0, wCA.resolveEndpointConfig)(Y),
                    W = (0, DdQ.resolveHttpAuthSchemeConfig)(J),
                    X = tL8(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, VdQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, KdQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, nL8.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, FdQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, pL8.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, lL8.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, Jb.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: DdQ.defaultSSOHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: q5(async (F) => new Jb.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, Jb.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        YcA = sG(),
        a6A = class A extends D2.ServiceException {
            static {
                q5(this, "SSOServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        zdQ = class A extends a6A {
            static {
                q5(this, "InvalidRequestException")
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
        UdQ = class A extends a6A {
            static {
                q5(this, "ResourceNotFoundException")
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
        $dQ = class A extends a6A {
            static {
                q5(this, "TooManyRequestsException")
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
        wdQ = class A extends a6A {
            static {
                q5(this, "UnauthorizedException")
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
        qdQ = q5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: D2.SENSITIVE_STRING
            }
        }), "GetRoleCredentialsRequestFilterSensitiveLog"),
        NdQ = q5((A) => ({
            ...A,
            ...A.secretAccessKey && {
                secretAccessKey: D2.SENSITIVE_STRING
            },
            ...A.sessionToken && {
                sessionToken: D2.SENSITIVE_STRING
            }
        }), "RoleCredentialsFilterSensitiveLog"),
        LdQ = q5((A) => ({
            ...A,
            ...A.roleCredentials && {
                roleCredentials: NdQ(A.roleCredentials)
            }
        }), "GetRoleCredentialsResponseFilterSensitiveLog"),
        MdQ = q5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: D2.SENSITIVE_STRING
            }
        }), "ListAccountRolesRequestFilterSensitiveLog"),
        OdQ = q5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: D2.SENSITIVE_STRING
            }
        }), "ListAccountsRequestFilterSensitiveLog"),
        RdQ = q5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: D2.SENSITIVE_STRING
            }
        }), "LogoutRequestFilterSensitiveLog"),
        $CA = OV(),
        eL8 = q5(async (A, Q) => {
            let B = (0, Jb.requestBuilder)(A, Q),
                G = (0, D2.map)({}, D2.isSerializableHeaderValue, {
                    [XcA]: A[WcA]
                });
            B.bp("/federation/credentials");
            let Z = (0, D2.map)({
                    [DM8]: [, (0, D2.expectNonNull)(A[KM8], "roleName")],
                    [PdQ]: [, (0, D2.expectNonNull)(A[TdQ], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_GetRoleCredentialsCommand"),
        AM8 = q5(async (A, Q) => {
            let B = (0, Jb.requestBuilder)(A, Q),
                G = (0, D2.map)({}, D2.isSerializableHeaderValue, {
                    [XcA]: A[WcA]
                });
            B.bp("/assignment/roles");
            let Z = (0, D2.map)({
                    [kdQ]: [, A[_dQ]],
                    [SdQ]: [() => A.maxResults !== void 0, () => A[jdQ].toString()],
                    [PdQ]: [, (0, D2.expectNonNull)(A[TdQ], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountRolesCommand"),
        QM8 = q5(async (A, Q) => {
            let B = (0, Jb.requestBuilder)(A, Q),
                G = (0, D2.map)({}, D2.isSerializableHeaderValue, {
                    [XcA]: A[WcA]
                });
            B.bp("/assignment/accounts");
            let Z = (0, D2.map)({
                    [kdQ]: [, A[_dQ]],
                    [SdQ]: [() => A.maxResults !== void 0, () => A[jdQ].toString()]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountsCommand"),
        BM8 = q5(async (A, Q) => {
            let B = (0, Jb.requestBuilder)(A, Q),
                G = (0, D2.map)({}, D2.isSerializableHeaderValue, {
                    [XcA]: A[WcA]
                });
            B.bp("/logout");
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_LogoutCommand"),
        GM8 = q5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return JcA(A, Q);
            let B = (0, D2.map)({
                    $metadata: gd(A)
                }),
                G = (0, D2.expectNonNull)((0, D2.expectObject)(await (0, $CA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, D2.take)(G, {
                    roleCredentials: D2._json
                });
            return Object.assign(B, Z), B
        }, "de_GetRoleCredentialsCommand"),
        ZM8 = q5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return JcA(A, Q);
            let B = (0, D2.map)({
                    $metadata: gd(A)
                }),
                G = (0, D2.expectNonNull)((0, D2.expectObject)(await (0, $CA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, D2.take)(G, {
                    nextToken: D2.expectString,
                    roleList: D2._json
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountRolesCommand"),
        IM8 = q5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return JcA(A, Q);
            let B = (0, D2.map)({
                    $metadata: gd(A)
                }),
                G = (0, D2.expectNonNull)((0, D2.expectObject)(await (0, $CA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, D2.take)(G, {
                    accountList: D2._json,
                    nextToken: D2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountsCommand"),
        YM8 = q5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return JcA(A, Q);
            let B = (0, D2.map)({
                $metadata: gd(A)
            });
            return await (0, D2.collectBody)(A.body, Q), B
        }, "de_LogoutCommand"),
        JcA = q5(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, $CA.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, $CA.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "InvalidRequestException":
                case "com.amazonaws.sso#InvalidRequestException":
                    throw await WM8(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.sso#ResourceNotFoundException":
                    throw await XM8(B, Q);
                case "TooManyRequestsException":
                case "com.amazonaws.sso#TooManyRequestsException":
                    throw await FM8(B, Q);
                case "UnauthorizedException":
                case "com.amazonaws.sso#UnauthorizedException":
                    throw await VM8(B, Q);
                default:
                    let Z = B.body;
                    return JM8({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        JM8 = (0, D2.withBaseException)(a6A),
        WM8 = q5(async (A, Q) => {
            let B = (0, D2.map)({}),
                G = A.body,
                Z = (0, D2.take)(G, {
                    message: D2.expectString
                });
            Object.assign(B, Z);
            let I = new zdQ({
                $metadata: gd(A),
                ...B
            });
            return (0, D2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        XM8 = q5(async (A, Q) => {
            let B = (0, D2.map)({}),
                G = A.body,
                Z = (0, D2.take)(G, {
                    message: D2.expectString
                });
            Object.assign(B, Z);
            let I = new UdQ({
                $metadata: gd(A),
                ...B
            });
            return (0, D2.decorateServiceException)(I, A.body)
        }, "de_ResourceNotFoundExceptionRes"),
        FM8 = q5(async (A, Q) => {
            let B = (0, D2.map)({}),
                G = A.body,
                Z = (0, D2.take)(G, {
                    message: D2.expectString
                });
            Object.assign(B, Z);
            let I = new $dQ({
                $metadata: gd(A),
                ...B
            });
            return (0, D2.decorateServiceException)(I, A.body)
        }, "de_TooManyRequestsExceptionRes"),
        VM8 = q5(async (A, Q) => {
            let B = (0, D2.map)({}),
                G = A.body,
                Z = (0, D2.take)(G, {
                    message: D2.expectString
                });
            Object.assign(B, Z);
            let I = new wdQ({
                $metadata: gd(A),
                ...B
            });
            return (0, D2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedExceptionRes"),
        gd = q5((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        TdQ = "accountId",
        WcA = "accessToken",
        PdQ = "account_id",
        jdQ = "maxResults",
        SdQ = "max_result",
        _dQ = "nextToken",
        kdQ = "next_token",
        KM8 = "roleName",
        DM8 = "role_name",
        XcA = "x-amz-sso_bearer_token",
        ydQ = class extends D2.Command.classBuilder().ep(ZcA).m(function(A, Q, B, G) {
            return [(0, YcA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, wCA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(qdQ, LdQ).ser(eL8).de(GM8).build() {
            static {
                q5(this, "GetRoleCredentialsCommand")
            }
        },
        dj1 = class extends D2.Command.classBuilder().ep(ZcA).m(function(A, Q, B, G) {
            return [(0, YcA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, wCA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(MdQ, void 0).ser(AM8).de(ZM8).build() {
            static {
                q5(this, "ListAccountRolesCommand")
            }
        },
        cj1 = class extends D2.Command.classBuilder().ep(ZcA).m(function(A, Q, B, G) {
            return [(0, YcA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, wCA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(OdQ, void 0).ser(QM8).de(IM8).build() {
            static {
                q5(this, "ListAccountsCommand")
            }
        },
        xdQ = class extends D2.Command.classBuilder().ep(ZcA).m(function(A, Q, B, G) {
            return [(0, YcA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, wCA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(RdQ, void 0).ser(BM8).de(YM8).build() {
            static {
                q5(this, "LogoutCommand")
            }
        },
        HM8 = {
            GetRoleCredentialsCommand: ydQ,
            ListAccountRolesCommand: dj1,
            ListAccountsCommand: cj1,
            LogoutCommand: xdQ
        },
        vdQ = class extends IcA {
            static {
                q5(this, "SSO")
            }
        };
    (0, D2.createAggregatedClient)(HM8, vdQ);
    var CM8 = (0, Jb.createPaginator)(IcA, dj1, "nextToken", "nextToken", "maxResults"),
        EM8 = (0, Jb.createPaginator)(IcA, cj1, "nextToken", "nextToken", "maxResults")
});
var pj1 = U((kw7, idQ) => {
    var {
        defineProperty: FcA,
        getOwnPropertyDescriptor: zM8,
        getOwnPropertyNames: UM8
    } = Object, $M8 = Object.prototype.hasOwnProperty, VcA = (A, Q) => FcA(A, "name", {
        value: Q,
        configurable: !0
    }), wM8 = (A, Q) => {
        for (var B in Q) FcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qM8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of UM8(Q))
                if (!$M8.call(A, Z) && Z !== B) FcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zM8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, NM8 = (A) => qM8(FcA({}, "__esModule", {
        value: !0
    }), A), hdQ = {};
    wM8(hdQ, {
        AlgorithmId: () => ddQ,
        EndpointURLScheme: () => mdQ,
        FieldPosition: () => cdQ,
        HttpApiKeyAuthLocation: () => udQ,
        HttpAuthLocation: () => gdQ,
        IniSectionType: () => pdQ,
        RequestHandlerProtocol: () => ldQ,
        SMITHY_CONTEXT_KEY: () => TM8,
        getDefaultClientConfiguration: () => OM8,
        resolveDefaultRuntimeConfig: () => RM8
    });
    idQ.exports = NM8(hdQ);
    var gdQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(gdQ || {}),
        udQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(udQ || {}),
        mdQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(mdQ || {}),
        ddQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(ddQ || {}),
        LM8 = VcA((A) => {
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
        MM8 = VcA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        OM8 = VcA((A) => {
            return LM8(A)
        }, "getDefaultClientConfiguration"),
        RM8 = VcA((A) => {
            return MM8(A)
        }, "resolveDefaultRuntimeConfig"),
        cdQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(cdQ || {}),
        TM8 = "__smithy_context",
        pdQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(pdQ || {}),
        ldQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(ldQ || {})
});
var UJ = U((yw7, FcQ) => {
    var {
        defineProperty: HcA,
        getOwnPropertyDescriptor: PM8,
        getOwnPropertyNames: jM8
    } = Object, SM8 = Object.prototype.hasOwnProperty, KB = (A, Q) => HcA(A, "name", {
        value: Q,
        configurable: !0
    }), _M8 = (A, Q) => {
        for (var B in Q) HcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, kM8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of jM8(Q))
                if (!SM8.call(A, Z) && Z !== B) HcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = PM8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, yM8 = (A) => kM8(HcA({}, "__esModule", {
        value: !0
    }), A), adQ = {};
    _M8(adQ, {
        Client: () => xM8,
        Command: () => rdQ,
        LazyJsonString: () => Jo,
        NoOpLogger: () => SO8,
        SENSITIVE_STRING: () => bM8,
        ServiceException: () => zO8,
        _json: () => oj1,
        collectBody: () => lj1.collectBody,
        convertMap: () => _O8,
        createAggregatedClient: () => fM8,
        dateToUtcString: () => BcQ,
        decorateServiceException: () => GcQ,
        emitWarningIfUnsupportedVersion: () => qO8,
        expectBoolean: () => gM8,
        expectByte: () => rj1,
        expectFloat32: () => KcA,
        expectInt: () => mM8,
        expectInt32: () => aj1,
        expectLong: () => LCA,
        expectNonNull: () => cM8,
        expectNumber: () => NCA,
        expectObject: () => odQ,
        expectShort: () => sj1,
        expectString: () => pM8,
        expectUnion: () => lM8,
        extendedEncodeURIComponent: () => lj1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => PO8,
        getDefaultClientConfiguration: () => RO8,
        getDefaultExtensionConfiguration: () => IcQ,
        getValueFromTextNode: () => YcQ,
        handleFloat: () => aM8,
        isSerializableHeaderValue: () => jO8,
        limitedParseDouble: () => AS1,
        limitedParseFloat: () => sM8,
        limitedParseFloat32: () => rM8,
        loadConfigsForDefaultMode: () => wO8,
        logger: () => MCA,
        map: () => BS1,
        parseBoolean: () => hM8,
        parseEpochTimestamp: () => WO8,
        parseRfc3339DateTime: () => QO8,
        parseRfc3339DateTimeWithOffset: () => GO8,
        parseRfc7231DateTime: () => JO8,
        quoteHeader: () => WcQ,
        resolveDefaultRuntimeConfig: () => TO8,
        resolvedPath: () => lj1.resolvedPath,
        serializeDateTime: () => fO8,
        serializeFloat: () => bO8,
        splitEvery: () => XcQ,
        splitHeader: () => hO8,
        strictParseByte: () => QcQ,
        strictParseDouble: () => ej1,
        strictParseFloat: () => iM8,
        strictParseFloat32: () => tdQ,
        strictParseInt: () => oM8,
        strictParseInt32: () => tM8,
        strictParseLong: () => AcQ,
        strictParseShort: () => s6A,
        take: () => kO8,
        throwDefaultError: () => ZcQ,
        withBaseException: () => UO8
    });
    FcQ.exports = yM8(adQ);
    var sdQ = PR(),
        xM8 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, sdQ.constructStack)()
            }
            static {
                KB(this, "Client")
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
        lj1 = C5(),
        nj1 = pj1(),
        rdQ = class {
            constructor() {
                this.middlewareStack = (0, sdQ.constructStack)()
            }
            static {
                KB(this, "Command")
            }
            static classBuilder() {
                return new vM8
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
                        [nj1.SMITHY_CONTEXT_KEY]: {
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
        vM8 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                KB(this, "ClassBuilder")
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
            build() {
                let A = this,
                    Q;
                return Q = class extends rdQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this)
                    }
                    static {
                        KB(this, "CommandRef")
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
        bM8 = "***SensitiveInformation***",
        fM8 = KB((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = KB(async function(Y, J, W) {
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
        hM8 = KB((A) => {
            switch (A) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    throw Error(`Unable to parse boolean value "${A}"`)
            }
        }, "parseBoolean"),
        gM8 = KB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "number") {
                if (A === 0 || A === 1) MCA.warn(DcA(`Expected boolean, got ${typeof A}: ${A}`));
                if (A === 0) return !1;
                if (A === 1) return !0
            }
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (Q === "false" || Q === "true") MCA.warn(DcA(`Expected boolean, got ${typeof A}: ${A}`));
                if (Q === "false") return !1;
                if (Q === "true") return !0
            }
            if (typeof A === "boolean") return A;
            throw TypeError(`Expected boolean, got ${typeof A}: ${A}`)
        }, "expectBoolean"),
        NCA = KB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") {
                let Q = parseFloat(A);
                if (!Number.isNaN(Q)) {
                    if (String(Q) !== String(A)) MCA.warn(DcA(`Expected number but observed string: ${A}`));
                    return Q
                }
            }
            if (typeof A === "number") return A;
            throw TypeError(`Expected number, got ${typeof A}: ${A}`)
        }, "expectNumber"),
        uM8 = Math.ceil(340282346638528860000000000000000000000),
        KcA = KB((A) => {
            let Q = NCA(A);
            if (Q !== void 0 && !Number.isNaN(Q) && Q !== 1 / 0 && Q !== -1 / 0) {
                if (Math.abs(Q) > uM8) throw TypeError(`Expected 32-bit float, got ${A}`)
            }
            return Q
        }, "expectFloat32"),
        LCA = KB((A) => {
            if (A === null || A === void 0) return;
            if (Number.isInteger(A) && !Number.isNaN(A)) return A;
            throw TypeError(`Expected integer, got ${typeof A}: ${A}`)
        }, "expectLong"),
        mM8 = LCA,
        aj1 = KB((A) => tj1(A, 32), "expectInt32"),
        sj1 = KB((A) => tj1(A, 16), "expectShort"),
        rj1 = KB((A) => tj1(A, 8), "expectByte"),
        tj1 = KB((A, Q) => {
            let B = LCA(A);
            if (B !== void 0 && dM8(B, Q) !== B) throw TypeError(`Expected ${Q}-bit integer, got ${A}`);
            return B
        }, "expectSizedInt"),
        dM8 = KB((A, Q) => {
            switch (Q) {
                case 32:
                    return Int32Array.of(A)[0];
                case 16:
                    return Int16Array.of(A)[0];
                case 8:
                    return Int8Array.of(A)[0]
            }
        }, "castInt"),
        cM8 = KB((A, Q) => {
            if (A === null || A === void 0) {
                if (Q) throw TypeError(`Expected a non-null value for ${Q}`);
                throw TypeError("Expected a non-null value")
            }
            return A
        }, "expectNonNull"),
        odQ = KB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "object" && !Array.isArray(A)) return A;
            let Q = Array.isArray(A) ? "array" : typeof A;
            throw TypeError(`Expected object, got ${Q}: ${A}`)
        }, "expectObject"),
        pM8 = KB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") return A;
            if (["boolean", "number", "bigint"].includes(typeof A)) return MCA.warn(DcA(`Expected string, got ${typeof A}: ${A}`)), String(A);
            throw TypeError(`Expected string, got ${typeof A}: ${A}`)
        }, "expectString"),
        lM8 = KB((A) => {
            if (A === null || A === void 0) return;
            let Q = odQ(A),
                B = Object.entries(Q).filter(([, G]) => G != null).map(([G]) => G);
            if (B.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
            if (B.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${B} were not null.`);
            return Q
        }, "expectUnion"),
        ej1 = KB((A) => {
            if (typeof A == "string") return NCA(o6A(A));
            return NCA(A)
        }, "strictParseDouble"),
        iM8 = ej1,
        tdQ = KB((A) => {
            if (typeof A == "string") return KcA(o6A(A));
            return KcA(A)
        }, "strictParseFloat32"),
        nM8 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        o6A = KB((A) => {
            let Q = A.match(nM8);
            if (Q === null || Q[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
            return parseFloat(A)
        }, "parseNumber"),
        AS1 = KB((A) => {
            if (typeof A == "string") return edQ(A);
            return NCA(A)
        }, "limitedParseDouble"),
        aM8 = AS1,
        sM8 = AS1,
        rM8 = KB((A) => {
            if (typeof A == "string") return edQ(A);
            return KcA(A)
        }, "limitedParseFloat32"),
        edQ = KB((A) => {
            switch (A) {
                case "NaN":
                    return NaN;
                case "Infinity":
                    return 1 / 0;
                case "-Infinity":
                    return -1 / 0;
                default:
                    throw Error(`Unable to parse float value: ${A}`)
            }
        }, "parseFloatString"),
        AcQ = KB((A) => {
            if (typeof A === "string") return LCA(o6A(A));
            return LCA(A)
        }, "strictParseLong"),
        oM8 = AcQ,
        tM8 = KB((A) => {
            if (typeof A === "string") return aj1(o6A(A));
            return aj1(A)
        }, "strictParseInt32"),
        s6A = KB((A) => {
            if (typeof A === "string") return sj1(o6A(A));
            return sj1(A)
        }, "strictParseShort"),
        QcQ = KB((A) => {
            if (typeof A === "string") return rj1(o6A(A));
            return rj1(A)
        }, "strictParseByte"),
        DcA = KB((A) => {
            return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter((Q) => !Q.includes("stackTraceWarning")).join(`
`)
        }, "stackTraceWarning"),
        MCA = {
            warn: console.warn
        },
        eM8 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        QS1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function BcQ(A) {
        let Q = A.getUTCFullYear(),
            B = A.getUTCMonth(),
            G = A.getUTCDay(),
            Z = A.getUTCDate(),
            I = A.getUTCHours(),
            Y = A.getUTCMinutes(),
            J = A.getUTCSeconds(),
            W = Z < 10 ? `0${Z}` : `${Z}`,
            X = I < 10 ? `0${I}` : `${I}`,
            F = Y < 10 ? `0${Y}` : `${Y}`,
            V = J < 10 ? `0${J}` : `${J}`;
        return `${eM8[G]}, ${W} ${QS1[B]} ${Q} ${X}:${F}:${V} GMT`
    }
    KB(BcQ, "dateToUtcString");
    var AO8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
        QO8 = KB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = AO8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X] = Q, F = s6A(r6A(G)), V = uS(Z, "month", 1, 12), K = uS(I, "day", 1, 31);
            return qCA(F, V, K, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            })
        }, "parseRfc3339DateTime"),
        BO8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
        GO8 = KB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = BO8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X, F] = Q, V = s6A(r6A(G)), K = uS(Z, "month", 1, 12), D = uS(I, "day", 1, 31), H = qCA(V, K, D, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            });
            if (F.toUpperCase() != "Z") H.setTime(H.getTime() - EO8(F));
            return H
        }, "parseRfc3339DateTimeWithOffset"),
        ZO8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        IO8 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        YO8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
        JO8 = KB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
            let Q = ZO8.exec(A);
            if (Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return qCA(s6A(r6A(I)), ij1(Z), uS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                })
            }
            if (Q = IO8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return VO8(qCA(XO8(I), ij1(Z), uS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                }))
            }
            if (Q = YO8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return qCA(s6A(r6A(X)), ij1(G), uS(Z.trimLeft(), "day", 1, 31), {
                    hours: I,
                    minutes: Y,
                    seconds: J,
                    fractionalMilliseconds: W
                })
            }
            throw TypeError("Invalid RFC-7231 date-time value")
        }, "parseRfc7231DateTime"),
        WO8 = KB((A) => {
            if (A === null || A === void 0) return;
            let Q;
            if (typeof A === "number") Q = A;
            else if (typeof A === "string") Q = ej1(A);
            else if (typeof A === "object" && A.tag === 1) Q = A.value;
            else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
            if (Number.isNaN(Q) || Q === 1 / 0 || Q === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(Q * 1000))
        }, "parseEpochTimestamp"),
        qCA = KB((A, Q, B, G) => {
            let Z = Q - 1;
            return DO8(A, Z, B), new Date(Date.UTC(A, Z, B, uS(G.hours, "hour", 0, 23), uS(G.minutes, "minute", 0, 59), uS(G.seconds, "seconds", 0, 60), CO8(G.fractionalMilliseconds)))
        }, "buildDate"),
        XO8 = KB((A) => {
            let Q = new Date().getUTCFullYear(),
                B = Math.floor(Q / 100) * 100 + s6A(r6A(A));
            if (B < Q) return B + 100;
            return B
        }, "parseTwoDigitYear"),
        FO8 = 1576800000000,
        VO8 = KB((A) => {
            if (A.getTime() - new Date().getTime() > FO8) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
            return A
        }, "adjustRfc850Year"),
        ij1 = KB((A) => {
            let Q = QS1.indexOf(A);
            if (Q < 0) throw TypeError(`Invalid month: ${A}`);
            return Q + 1
        }, "parseMonthByShortName"),
        KO8 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        DO8 = KB((A, Q, B) => {
            let G = KO8[Q];
            if (Q === 1 && HO8(A)) G = 29;
            if (B > G) throw TypeError(`Invalid day for ${QS1[Q]} in ${A}: ${B}`)
        }, "validateDayOfMonth"),
        HO8 = KB((A) => {
            return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
        }, "isLeapYear"),
        uS = KB((A, Q, B, G) => {
            let Z = QcQ(r6A(A));
            if (Z < B || Z > G) throw TypeError(`${Q} must be between ${B} and ${G}, inclusive`);
            return Z
        }, "parseDateValue"),
        CO8 = KB((A) => {
            if (A === null || A === void 0) return 0;
            return tdQ("0." + A) * 1000
        }, "parseMilliseconds"),
        EO8 = KB((A) => {
            let Q = A[0],
                B = 1;
            if (Q == "+") B = 1;
            else if (Q == "-") B = -1;
            else throw TypeError(`Offset direction, ${Q}, must be "+" or "-"`);
            let G = Number(A.substring(1, 3)),
                Z = Number(A.substring(4, 6));
            return B * (G * 60 + Z) * 60 * 1000
        }, "parseOffsetToMilliseconds"),
        r6A = KB((A) => {
            let Q = 0;
            while (Q < A.length - 1 && A.charAt(Q) === "0") Q++;
            if (Q === 0) return A;
            return A.slice(Q)
        }, "stripLeadingZeroes"),
        zO8 = class A extends Error {
            static {
                KB(this, "ServiceException")
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
        GcQ = KB((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        ZcQ = KB(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = $O8(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw GcQ(Y, Q)
        }, "throwDefaultError"),
        UO8 = KB((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                ZcQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        $O8 = KB((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        wO8 = KB((A) => {
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
        ndQ = !1,
        qO8 = KB((A) => {
            if (A && !ndQ && parseInt(A.substring(1, A.indexOf("."))) < 16) ndQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        NO8 = KB((A) => {
            let Q = [];
            for (let B in nj1.AlgorithmId) {
                let G = nj1.AlgorithmId[B];
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
        LO8 = KB((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        MO8 = KB((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        OO8 = KB((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        IcQ = KB((A) => {
            return Object.assign(NO8(A), MO8(A))
        }, "getDefaultExtensionConfiguration"),
        RO8 = IcQ,
        TO8 = KB((A) => {
            return Object.assign(LO8(A), OO8(A))
        }, "resolveDefaultRuntimeConfig"),
        PO8 = KB((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        YcQ = KB((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = YcQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        jO8 = KB((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        Jo = KB(function(Q) {
            return Object.assign(new String(Q), {
                deserializeJSON() {
                    return JSON.parse(String(Q))
                },
                toString() {
                    return String(Q)
                },
                toJSON() {
                    return String(Q)
                }
            })
        }, "LazyJsonString");
    Jo.from = (A) => {
        if (A && typeof A === "object" && (A instanceof Jo || ("deserializeJSON" in A))) return A;
        else if (typeof A === "string" || Object.getPrototypeOf(A) === String.prototype) return Jo(String(A));
        return Jo(JSON.stringify(A))
    };
    Jo.fromObject = Jo.from;
    var SO8 = class {
        static {
            KB(this, "NoOpLogger")
        }
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
    };

    function BS1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, yO8(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            JcQ(G, null, I, Y)
        }
        return G
    }
    KB(BS1, "map");
    var _O8 = KB((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        kO8 = KB((A, Q) => {
            let B = {};
            for (let G in Q) JcQ(B, A, Q, G);
            return B
        }, "take"),
        yO8 = KB((A, Q, B) => {
            return BS1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        JcQ = KB((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = xO8, W = vO8, X = G] = Y;
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
        xO8 = KB((A) => A != null, "nonNullish"),
        vO8 = KB((A) => A, "pass");

    function WcQ(A) {
        if (A.includes(",") || A.includes('"')) A = `"${A.replace(/"/g,"\\\"")}"`;
        return A
    }
    KB(WcQ, "quoteHeader");
    var bO8 = KB((A) => {
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
        fO8 = KB((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        oj1 = KB((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(oj1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = oj1(A[B])
                }
                return Q
            }
            return A
        }, "_json");

    function XcQ(A, Q, B) {
        if (B <= 0 || !Number.isInteger(B)) throw Error("Invalid number of delimiters (" + B + ") for splitEvery.");
        let G = A.split(Q);
        if (B === 1) return G;
        let Z = [],
            I = "";
        for (let Y = 0; Y < G.length; Y++) {
            if (I === "") I = G[Y];
            else I += Q + G[Y];
            if ((Y + 1) % B === 0) Z.push(I), I = ""
        }
        if (I !== "") Z.push(I);
        return Z
    }
    KB(XcQ, "splitEvery");
    var hO8 = KB((A) => {
        let Q = A.length,
            B = [],
            G = !1,
            Z = void 0,
            I = 0;
        for (let Y = 0; Y < Q; ++Y) {
            let J = A[Y];
            switch (J) {
                case '"':
                    if (Z !== "\\") G = !G;
                    break;
                case ",":
                    if (!G) B.push(A.slice(I, Y)), I = Y + 1;
                    break;
                default:
            }