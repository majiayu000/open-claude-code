/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_013.js
 * 处理时间: 2025-12-09T03:41:39.041Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 13/53
 * Lines: 116393 - 117881 (1489 lines)
 * Original file: cli.js
 */

var QfQ = U((w$7, AfQ) => {
    var {
        defineProperty: FdA,
        getOwnPropertyDescriptor: ME8,
        getOwnPropertyNames: OE8
    } = Object, RE8 = Object.prototype.hasOwnProperty, VdA = (A, Q) => FdA(A, "name", {
        value: Q,
        configurable: !0
    }), TE8 = (A, Q) => {
        for (var B in Q) FdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, PE8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of OE8(Q))
                if (!RE8.call(A, Z) && Z !== B) FdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ME8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, jE8 = (A) => PE8(FdA({}, "__esModule", {
        value: !0
    }), A), ibQ = {};
    TE8(ibQ, {
        AlgorithmId: () => rbQ,
        EndpointURLScheme: () => sbQ,
        FieldPosition: () => obQ,
        HttpApiKeyAuthLocation: () => abQ,
        HttpAuthLocation: () => nbQ,
        IniSectionType: () => tbQ,
        RequestHandlerProtocol: () => ebQ,
        SMITHY_CONTEXT_KEY: () => xE8,
        getDefaultClientConfiguration: () => kE8,
        resolveDefaultRuntimeConfig: () => yE8
    });
    AfQ.exports = jE8(ibQ);
    var nbQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(nbQ || {}),
        abQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(abQ || {}),
        sbQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(sbQ || {}),
        rbQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(rbQ || {}),
        SE8 = VdA((A) => {
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
        _E8 = VdA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        kE8 = VdA((A) => {
            return SE8(A)
        }, "getDefaultClientConfiguration"),
        yE8 = VdA((A) => {
            return _E8(A)
        }, "resolveDefaultRuntimeConfig"),
        obQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(obQ || {}),
        xE8 = "__smithy_context",
        tbQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(tbQ || {}),
        ebQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(ebQ || {})
});
var JfQ = U((q$7, YfQ) => {
    var {
        defineProperty: KdA,
        getOwnPropertyDescriptor: vE8,
        getOwnPropertyNames: bE8
    } = Object, fE8 = Object.prototype.hasOwnProperty, xd = (A, Q) => KdA(A, "name", {
        value: Q,
        configurable: !0
    }), hE8 = (A, Q) => {
        for (var B in Q) KdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, gE8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bE8(Q))
                if (!fE8.call(A, Z) && Z !== B) KdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = vE8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, uE8 = (A) => gE8(KdA({}, "__esModule", {
        value: !0
    }), A), BfQ = {};
    hE8(BfQ, {
        Field: () => cE8,
        Fields: () => pE8,
        HttpRequest: () => lE8,
        HttpResponse: () => iE8,
        IHttpRequest: () => GfQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => mE8,
        isValidHostname: () => IfQ,
        resolveHttpHandlerRuntimeConfig: () => dE8
    });
    YfQ.exports = uE8(BfQ);
    var mE8 = xd((A) => {
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
        dE8 = xd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        GfQ = QfQ(),
        cE8 = class {
            static {
                xd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = GfQ.FieldPosition.HEADER,
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
        pE8 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                xd(this, "Fields")
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
        lE8 = class A {
            static {
                xd(this, "HttpRequest")
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
                if (B.query) B.query = ZfQ(B.query);
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

    function ZfQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    xd(ZfQ, "cloneQuery");
    var iE8 = class {
        static {
            xd(this, "HttpResponse")
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

    function IfQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    xd(IfQ, "isValidHostname")
});
var GCA = U((O$7, VfQ) => {
    var {
        defineProperty: HdA,
        getOwnPropertyDescriptor: nE8,
        getOwnPropertyNames: aE8
    } = Object, sE8 = Object.prototype.hasOwnProperty, DdA = (A, Q) => HdA(A, "name", {
        value: Q,
        configurable: !0
    }), rE8 = (A, Q) => {
        for (var B in Q) HdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, oE8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of aE8(Q))
                if (!sE8.call(A, Z) && Z !== B) HdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = nE8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, tE8 = (A) => oE8(HdA({}, "__esModule", {
        value: !0
    }), A), WfQ = {};
    rE8(WfQ, {
        addRecursionDetectionMiddlewareOptions: () => FfQ,
        getRecursionDetectionPlugin: () => Bz8,
        recursionDetectionMiddleware: () => XfQ
    });
    VfQ.exports = tE8(WfQ);
    var eE8 = JfQ(),
        cP1 = "X-Amzn-Trace-Id",
        Az8 = "AWS_LAMBDA_FUNCTION_NAME",
        Qz8 = "_X_AMZN_TRACE_ID",
        XfQ = DdA((A) => (Q) => async (B) => {
            let {
                request: G
            } = B;
            if (!eE8.HttpRequest.isInstance(G) || A.runtime !== "node") return Q(B);
            let Z = Object.keys(G.headers ?? {}).find((W) => W.toLowerCase() === cP1.toLowerCase()) ?? cP1;
            if (G.headers.hasOwnProperty(Z)) return Q(B);
            let I = process.env[Az8],
                Y = process.env[Qz8],
                J = DdA((W) => typeof W === "string" && W.length > 0, "nonEmptyString");
            if (J(I) && J(Y)) G.headers[cP1] = Y;
            return Q({
                ...B,
                request: G
            })
        }, "recursionDetectionMiddleware"),
        FfQ = {
            step: "build",
            tags: ["RECURSION_DETECTION"],
            name: "recursionDetectionMiddleware",
            override: !0,
            priority: "low"
        },
        Bz8 = DdA((A) => ({
            applyToStack: DdA((Q) => {
                Q.add(XfQ(A), FfQ)
            }, "applyToStack")
        }), "getRecursionDetectionPlugin")
});
var y6A = U((R$7, qfQ) => {
    var {
        defineProperty: CdA,
        getOwnPropertyDescriptor: Gz8,
        getOwnPropertyNames: Zz8
    } = Object, Iz8 = Object.prototype.hasOwnProperty, k6A = (A, Q) => CdA(A, "name", {
        value: Q,
        configurable: !0
    }), Yz8 = (A, Q) => {
        for (var B in Q) CdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Jz8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Zz8(Q))
                if (!Iz8.call(A, Z) && Z !== B) CdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Gz8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Wz8 = (A) => Jz8(CdA({}, "__esModule", {
        value: !0
    }), A), DfQ = {};
    Yz8(DfQ, {
        ConditionObject: () => OZ.ConditionObject,
        DeprecatedObject: () => OZ.DeprecatedObject,
        EndpointError: () => OZ.EndpointError,
        EndpointObject: () => OZ.EndpointObject,
        EndpointObjectHeaders: () => OZ.EndpointObjectHeaders,
        EndpointObjectProperties: () => OZ.EndpointObjectProperties,
        EndpointParams: () => OZ.EndpointParams,
        EndpointResolverOptions: () => OZ.EndpointResolverOptions,
        EndpointRuleObject: () => OZ.EndpointRuleObject,
        ErrorRuleObject: () => OZ.ErrorRuleObject,
        EvaluateOptions: () => OZ.EvaluateOptions,
        Expression: () => OZ.Expression,
        FunctionArgv: () => OZ.FunctionArgv,
        FunctionObject: () => OZ.FunctionObject,
        FunctionReturn: () => OZ.FunctionReturn,
        ParameterObject: () => OZ.ParameterObject,
        ReferenceObject: () => OZ.ReferenceObject,
        ReferenceRecord: () => OZ.ReferenceRecord,
        RuleSetObject: () => OZ.RuleSetObject,
        RuleSetRules: () => OZ.RuleSetRules,
        TreeRuleObject: () => OZ.TreeRuleObject,
        awsEndpointFunctions: () => wfQ,
        getUserAgentPrefix: () => Kz8,
        isIpAddress: () => OZ.isIpAddress,
        partition: () => UfQ,
        resolveEndpoint: () => OZ.resolveEndpoint,
        setPartitionInfo: () => $fQ,
        useDefaultPartitionInfo: () => Vz8
    });
    qfQ.exports = Wz8(DfQ);
    var OZ = II(),
        HfQ = k6A((A, Q = !1) => {
            if (Q) {
                for (let B of A.split("."))
                    if (!HfQ(B)) return !1;
                return !0
            }
            if (!(0, OZ.isValidHostLabel)(A)) return !1;
            if (A.length < 3 || A.length > 63) return !1;
            if (A !== A.toLowerCase()) return !1;
            if ((0, OZ.isIpAddress)(A)) return !1;
            return !0
        }, "isVirtualHostableS3Bucket"),
        KfQ = ":",
        Xz8 = "/",
        Fz8 = k6A((A) => {
            let Q = A.split(KfQ);
            if (Q.length < 6) return null;
            let [B, G, Z, I, Y, ...J] = Q;
            if (B !== "arn" || G === "" || Z === "" || J.join(KfQ) === "") return null;
            let W = J.map((X) => X.split(Xz8)).flat();
            return {
                partition: G,
                service: Z,
                region: I,
                accountId: Y,
                resourceId: W
            }
        }, "parseArn"),
        CfQ = {
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
        EfQ = CfQ,
        zfQ = "",
        UfQ = k6A((A) => {
            let {
                partitions: Q
            } = EfQ;
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
        $fQ = k6A((A, Q = "") => {
            EfQ = A, zfQ = Q
        }, "setPartitionInfo"),
        Vz8 = k6A(() => {
            $fQ(CfQ, "")
        }, "useDefaultPartitionInfo"),
        Kz8 = k6A(() => zfQ, "getUserAgentPrefix"),
        wfQ = {
            isVirtualHostableS3Bucket: HfQ,
            parseArn: Fz8,
            partition: UfQ
        };
    OZ.customEndpointFunctions.aws = wfQ
});
var _fQ = U((T$7, SfQ) => {
    var {
        defineProperty: EdA,
        getOwnPropertyDescriptor: Dz8,
        getOwnPropertyNames: Hz8
    } = Object, Cz8 = Object.prototype.hasOwnProperty, zdA = (A, Q) => EdA(A, "name", {
        value: Q,
        configurable: !0
    }), Ez8 = (A, Q) => {
        for (var B in Q) EdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, zz8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Hz8(Q))
                if (!Cz8.call(A, Z) && Z !== B) EdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Dz8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Uz8 = (A) => zz8(EdA({}, "__esModule", {
        value: !0
    }), A), NfQ = {};
    Ez8(NfQ, {
        AlgorithmId: () => RfQ,
        EndpointURLScheme: () => OfQ,
        FieldPosition: () => TfQ,
        HttpApiKeyAuthLocation: () => MfQ,
        HttpAuthLocation: () => LfQ,
        IniSectionType: () => PfQ,
        RequestHandlerProtocol: () => jfQ,
        SMITHY_CONTEXT_KEY: () => Lz8,
        getDefaultClientConfiguration: () => qz8,
        resolveDefaultRuntimeConfig: () => Nz8
    });
    SfQ.exports = Uz8(NfQ);
    var LfQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(LfQ || {}),
        MfQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(MfQ || {}),
        OfQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(OfQ || {}),
        RfQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(RfQ || {}),
        $z8 = zdA((A) => {
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
        wz8 = zdA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        qz8 = zdA((A) => {
            return $z8(A)
        }, "getDefaultClientConfiguration"),
        Nz8 = zdA((A) => {
            return wz8(A)
        }, "resolveDefaultRuntimeConfig"),
        TfQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(TfQ || {}),
        Lz8 = "__smithy_context",
        PfQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(PfQ || {}),
        jfQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(jfQ || {})
});
var ffQ = U((P$7, bfQ) => {
    var {
        defineProperty: UdA,
        getOwnPropertyDescriptor: Mz8,
        getOwnPropertyNames: Oz8
    } = Object, Rz8 = Object.prototype.hasOwnProperty, vd = (A, Q) => UdA(A, "name", {
        value: Q,
        configurable: !0
    }), Tz8 = (A, Q) => {
        for (var B in Q) UdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Pz8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Oz8(Q))
                if (!Rz8.call(A, Z) && Z !== B) UdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Mz8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, jz8 = (A) => Pz8(UdA({}, "__esModule", {
        value: !0
    }), A), kfQ = {};
    Tz8(kfQ, {
        Field: () => kz8,
        Fields: () => yz8,
        HttpRequest: () => xz8,
        HttpResponse: () => vz8,
        IHttpRequest: () => yfQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => Sz8,
        isValidHostname: () => vfQ,
        resolveHttpHandlerRuntimeConfig: () => _z8
    });
    bfQ.exports = jz8(kfQ);
    var Sz8 = vd((A) => {
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
        _z8 = vd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        yfQ = _fQ(),
        kz8 = class {
            static {
                vd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = yfQ.FieldPosition.HEADER,
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
        yz8 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                vd(this, "Fields")
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
        xz8 = class A {
            static {
                vd(this, "HttpRequest")
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
                if (B.query) B.query = xfQ(B.query);
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

    function xfQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    vd(xfQ, "cloneQuery");
    var vz8 = class {
        static {
            vd(this, "HttpResponse")
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

    function vfQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    vd(vfQ, "isValidHostname")
});
var KhQ = U((k$7, qdA) => {
    var hfQ, gfQ, ufQ, mfQ, dfQ, cfQ, pfQ, lfQ, ifQ, nfQ, afQ, sfQ, rfQ, $dA, pP1, ofQ, tfQ, efQ, x6A, AhQ, QhQ, BhQ, GhQ, ZhQ, IhQ, YhQ, JhQ, WhQ, wdA, XhQ, FhQ, VhQ;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof qdA === "object" && typeof k$7 === "object") A(B(Q, B(k$7)));
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
        hfQ = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, gfQ = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, ufQ = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, mfQ = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, dfQ = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, cfQ = function(I, Y, J, W, X, F) {
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
        }, pfQ = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, lfQ = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, ifQ = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, nfQ = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, afQ = function(I, Y, J, W) {
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
        }, sfQ = function(I, Y) {
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
        }, rfQ = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) wdA(Y, I, J)
        }, wdA = Object.create ? function(I, Y, J, W) {
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
        }, $dA = function(I) {
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
        }, pP1 = function(I, Y) {
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
        }, ofQ = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(pP1(arguments[Y]));
            return I
        }, tfQ = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, efQ = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, x6A = function(I) {
            return this instanceof x6A ? (this.v = I, this) : new x6A(I)
        }, AhQ = function(I, Y, J) {
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
                w.value instanceof x6A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, QhQ = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: x6A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, BhQ = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof $dA === "function" ? $dA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, GhQ = function(I, Y) {
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
        ZhQ = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") wdA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, IhQ = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, YhQ = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, JhQ = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, WhQ = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, XhQ = function(I, Y, J) {
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
        FhQ = function(I) {
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
        }, VhQ = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", hfQ), A("__assign", gfQ), A("__rest", ufQ), A("__decorate", mfQ), A("__param", dfQ), A("__esDecorate", cfQ), A("__runInitializers", pfQ), A("__propKey", lfQ), A("__setFunctionName", ifQ), A("__metadata", nfQ), A("__awaiter", afQ), A("__generator", sfQ), A("__exportStar", rfQ), A("__createBinding", wdA), A("__values", $dA), A("__read", pP1), A("__spread", ofQ), A("__spreadArrays", tfQ), A("__spreadArray", efQ), A("__await", x6A), A("__asyncGenerator", AhQ), A("__asyncDelegator", QhQ), A("__asyncValues", BhQ), A("__makeTemplateObject", GhQ), A("__importStar", ZhQ), A("__importDefault", IhQ), A("__classPrivateFieldGet", YhQ), A("__classPrivateFieldSet", JhQ), A("__classPrivateFieldIn", WhQ), A("__addDisposableResource", XhQ), A("__disposeResources", FhQ), A("__rewriteRelativeImportExtension", VhQ)
    })
});
var lP1 = U((y$7, qhQ) => {
    var {
        defineProperty: NdA,
        getOwnPropertyDescriptor: bz8,
        getOwnPropertyNames: fz8
    } = Object, hz8 = Object.prototype.hasOwnProperty, LdA = (A, Q) => NdA(A, "name", {
        value: Q,
        configurable: !0
    }), gz8 = (A, Q) => {
        for (var B in Q) NdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, uz8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of fz8(Q))
                if (!hz8.call(A, Z) && Z !== B) NdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = bz8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, mz8 = (A) => uz8(NdA({}, "__esModule", {
        value: !0
    }), A), DhQ = {};
    gz8(DhQ, {
        AlgorithmId: () => zhQ,
        EndpointURLScheme: () => EhQ,
        FieldPosition: () => UhQ,
        HttpApiKeyAuthLocation: () => ChQ,
        HttpAuthLocation: () => HhQ,
        IniSectionType: () => $hQ,
        RequestHandlerProtocol: () => whQ,
        SMITHY_CONTEXT_KEY: () => iz8,
        getDefaultClientConfiguration: () => pz8,
        resolveDefaultRuntimeConfig: () => lz8
    });
    qhQ.exports = mz8(DhQ);