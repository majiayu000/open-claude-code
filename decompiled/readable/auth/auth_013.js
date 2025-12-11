/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_013.js
 * 处理时间: 2025-12-09T03:41:36.478Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 13/61
 * Lines: 79276 - 80775 (1500 lines)
 * Original file: cli.js
 */

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
        Kv4 = class A {
            static {
                Yd(this, "HttpRequest")
            }
            constructor(Q) {
                this.method = Q.method || "GET", this.hostname = Q.hostname || "localhost", this.port = Q.port, this.query = Q.query || {}, this.headers = Q.headers || {}, this.body = Q.body, this.protocol = Q.protocol ? Q.protocol.slice(-1) !== ":" ? `TextComponent{Q.protocol}:` : Q.protocol : "https:", this.path = Q.path ? Q.path.charAt(0) !== "/" ? `/TextComponent{Q.path}` : Q.path : "/", this.username = Q.username, this.password = Q.password, this.fragment = Q.fragment
            }
            static clone(Q) {
                let B = new A({
                    ...Q,
                    headers: {
                        ...Q.headers
                    }
                });
                if (B.query) B.query = aGQ(B.query);
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

    function aGQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    Yd(aGQ, "cloneQuery");
    var Dv4 = class {
        static {
            Yd(this, "HttpResponse")
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

    function sGQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]TextComponent/.test(A)
    }
    Yd(sGQ, "isValidHostname")
});
var bDA = moduleWrapper((QV7, QZQ) => {
    var {
        defineProperty: OhA,
        getOwnPropertyDescriptor: Hv4,
        getOwnPropertyNames: Cv4
    } = Object, Ev4 = Object.prototype.hasOwnProperty, MhA = (A, Q) => OhA(A, "name", {
        value: Q,
        configurable: !0
    }), zv4 = (A, Q) => {
        for (var B in Q) OhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Uv4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Cv4(Q))
                if (!Ev4.call(A, Z) && Z !== B) OhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Hv4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, $v4 = (A) => Uv4(OhA({}, "__esModule", {
        value: !0
    }), A), oGQ = {};
    zv4(oGQ, {
        getHostHeaderPlugin: () => qv4,
        hostHeaderMiddleware: () => eGQ,
        hostHeaderMiddlewareOptions: () => AZQ,
        resolveHostHeaderConfig: () => tGQ
    });
    QZQ.exports = $v4(oGQ);
    var wv4 = cz();

    function tGQ(A) {
        return A
    }
    MhA(tGQ, "resolveHostHeaderConfig");
    var eGQ = MhA((A) => (Q) => async (B) => {
            if (!wv4.HttpRequest.isInstance(B.request)) return Q(B);
            let {
                request: G
            } = B, {
                handlerProtocol: Z = ""
            } = A.requestHandler.metadata || {};
            if (Z.indexOf("h2") >= 0 && !G.headers[":authority"]) delete G.headers.host, G.headers[":authority"] = G.hostname + (G.port ? ":" + G.port : "");
            else if (!G.headers.host) {
                let I = G.hostname;
                if (G.port != null) I += `:TextComponent{G.port}`;
                G.headers.host = I
            }
            return Q(B)
        }, "hostHeaderMiddleware"),
        AZQ = {
            name: "hostHeaderMiddleware",
            step: "build",
            priority: "low",
            tags: ["HOST"],
            override: !0
        },
        qv4 = MhA((A) => ({
            applyToStack: MhA((Q) => {
                Q.add(eGQ(A), AZQ)
            }, "applyToStack")
        }), "getHostHeaderPlugin")
});
var fDA = moduleWrapper((BV7, IZQ) => {
    var {
        defineProperty: RhA,
        getOwnPropertyDescriptor: Nv4,
        getOwnPropertyNames: Lv4
    } = Object, Mv4 = Object.prototype.hasOwnProperty, Gq1 = (A, Q) => RhA(A, "name", {
        value: Q,
        configurable: !0
    }), Ov4 = (A, Q) => {
        for (var B in Q) RhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Rv4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Lv4(Q))
                if (!Mv4.call(A, Z) && Z !== B) RhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Nv4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Tv4 = (A) => Rv4(RhA({}, "__esModule", {
        value: !0
    }), A), BZQ = {};
    Ov4(BZQ, {
        getLoggerPlugin: () => Pv4,
        loggerMiddleware: () => GZQ,
        loggerMiddlewareOptions: () => ZZQ
    });
    IZQ.exports = Tv4(BZQ);
    var GZQ = Gq1(() => (A, Q) => async (B) => {
            try {
                let G = await A(B),
                    {
                        clientName: Z,
                        commandName: I,
                        logger: Y,
                        dynamoDbDocumentClientOptions: J = {}
                    } = Q,
                    {
                        overrideInputFilterSensitiveLog: W,
                        overrideOutputFilterSensitiveLog: X
                    } = J,
                    F = W ?? Q.inputFilterSensitiveLog,
                    V = X ?? Q.outputFilterSensitiveLog,
                    {
                        $metadata: K,
                        ...D
                    } = G.output;
                return Y?.info?.({
                    clientName: Z,
                    commandName: I,
                    input: F(B.input),
                    output: V(D),
                    metadata: K
                }), G
            } catch (G) {
                let {
                    clientName: Z,
                    commandName: I,
                    logger: Y,
                    dynamoDbDocumentClientOptions: J = {}
                } = Q, {
                    overrideInputFilterSensitiveLog: W
                } = J, X = W ?? Q.inputFilterSensitiveLog;
                throw Y?.error?.({
                    clientName: Z,
                    commandName: I,
                    input: X(B.input),
                    error: G,
                    metadata: G.$metadata
                }), G
            }
        }, "loggerMiddleware"),
        ZZQ = {
            name: "loggerMiddleware",
            tags: ["LOGGER"],
            step: "initialize",
            override: !0
        },
        Pv4 = Gq1((A) => ({
            applyToStack: Gq1((Q) => {
                Q.add(GZQ(), ZZQ)
            }, "applyToStack")
        }), "getLoggerPlugin")
});
var hDA = moduleWrapper((GV7, XZQ) => {
    var {
        defineProperty: PhA,
        getOwnPropertyDescriptor: jv4,
        getOwnPropertyNames: Sv4
    } = Object, _v4 = Object.prototype.hasOwnProperty, ThA = (A, Q) => PhA(A, "name", {
        value: Q,
        configurable: !0
    }), kv4 = (A, Q) => {
        for (var B in Q) PhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, yv4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Sv4(Q))
                if (!_v4.call(A, Z) && Z !== B) PhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = jv4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, xv4 = (A) => yv4(PhA({}, "__esModule", {
        value: !0
    }), A), YZQ = {};
    kv4(YZQ, {
        addRecursionDetectionMiddlewareOptions: () => WZQ,
        getRecursionDetectionPlugin: () => hv4,
        recursionDetectionMiddleware: () => JZQ
    });
    XZQ.exports = xv4(YZQ);
    var vv4 = cz(),
        Zq1 = "X-Amzn-Trace-Id",
        bv4 = "AWS_LAMBDA_FUNCTION_NAME",
        fv4 = "_X_AMZN_TRACE_ID",
        JZQ = ThA((A) => (Q) => async (B) => {
            let {
                request: G
            } = B;
            if (!vv4.HttpRequest.isInstance(G) || A.runtime !== "node") return Q(B);
            let Z = Object.keys(G.headers ?? {}).find((W) => W.toLowerCase() === Zq1.toLowerCase()) ?? Zq1;
            if (G.headers.hasOwnProperty(Z)) return Q(B);
            let I = process.env[bv4],
                Y = process.env[fv4],
                J = ThA((W) => typeof W === "string" && W.length > 0, "nonEmptyString");
            if (J(I) && J(Y)) G.headers[Zq1] = Y;
            return Q({
                ...B,
                request: G
            })
        }, "recursionDetectionMiddleware"),
        WZQ = {
            step: "build",
            tags: ["RECURSION_DETECTION"],
            name: "recursionDetectionMiddleware",
            override: !0,
            priority: "low"
        },
        hv4 = ThA((A) => ({
            applyToStack: ThA((Q) => {
                Q.add(JZQ(A), WZQ)
            }, "applyToStack")
        }), "getRecursionDetectionPlugin")
});
var Z8A = moduleWrapper((ZV7, $ZQ) => {
    var {
        defineProperty: jhA,
        getOwnPropertyDescriptor: gv4,
        getOwnPropertyNames: uv4
    } = Object, mv4 = Object.prototype.hasOwnProperty, G8A = (A, Q) => jhA(A, "name", {
        value: Q,
        configurable: !0
    }), dv4 = (A, Q) => {
        for (var B in Q) jhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, cv4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of uv4(Q))
                if (!mv4.call(A, Z) && Z !== B) jhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = gv4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, pv4 = (A) => cv4(jhA({}, "__esModule", {
        value: !0
    }), A), VZQ = {};
    dv4(VZQ, {
        ConditionObject: () => NZ.ConditionObject,
        DeprecatedObject: () => NZ.DeprecatedObject,
        EndpointError: () => NZ.EndpointError,
        EndpointObject: () => NZ.EndpointObject,
        EndpointObjectHeaders: () => NZ.EndpointObjectHeaders,
        EndpointObjectProperties: () => NZ.EndpointObjectProperties,
        EndpointParams: () => NZ.EndpointParams,
        EndpointResolverOptions: () => NZ.EndpointResolverOptions,
        EndpointRuleObject: () => NZ.EndpointRuleObject,
        ErrorRuleObject: () => NZ.ErrorRuleObject,
        EvaluateOptions: () => NZ.EvaluateOptions,
        Expression: () => NZ.Expression,
        FunctionArgv: () => NZ.FunctionArgv,
        FunctionObject: () => NZ.FunctionObject,
        FunctionReturn: () => NZ.FunctionReturn,
        ParameterObject: () => NZ.ParameterObject,
        ReferenceObject: () => NZ.ReferenceObject,
        ReferenceRecord: () => NZ.ReferenceRecord,
        RuleSetObject: () => NZ.RuleSetObject,
        RuleSetRules: () => NZ.RuleSetRules,
        TreeRuleObject: () => NZ.TreeRuleObject,
        awsEndpointFunctions: () => UZQ,
        getUserAgentPrefix: () => av4,
        isIpAddress: () => NZ.isIpAddress,
        partition: () => EZQ,
        resolveEndpoint: () => NZ.resolveEndpoint,
        setPartitionInfo: () => zZQ,
        useDefaultPartitionInfo: () => nv4
    });
    $ZQ.exports = pv4(VZQ);
    var NZ = II(),
        KZQ = G8A((A, Q = !1) => {
            if (Q) {
                for (let B of A.split("."))
                    if (!KZQ(B)) return !1;
                return !0
            }
            if (!(0, NZ.isValidHostLabel)(A)) return !1;
            if (A.length < 3 || A.length > 63) return !1;
            if (A !== A.toLowerCase()) return !1;
            if ((0, NZ.isIpAddress)(A)) return !1;
            return !0
        }, "isVirtualHostableS3Bucket"),
        FZQ = ":",
        lv4 = "/",
        iv4 = G8A((A) => {
            let Q = A.split(FZQ);
            if (Q.length < 6) return null;
            let [B, G, Z, I, Y, ...J] = Q;
            if (B !== "arn" || G === "" || Z === "" || J.join(FZQ) === "") return null;
            let W = J.map((X) => X.split(lv4)).flat();
            return {
                partition: G,
                service: Z,
                region: I,
                accountId: Y,
                resourceId: W
            }
        }, "parseArn"),
        DZQ = {
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
                regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "af-south-1": {
                        description: "Africa (Cape Town)"
                    },
                    "ap-east-1": {
                        description: "Asia Pacific (Hong Kong)"
                    },
                    "ap-east-2": {
                        description: "Asia Pacific (Taipei)"
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
                regionRegex: "^cn\\-\\w+\\-\\d+TextComponent",
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
                regionRegex: "^us\\-gov\\-\\w+\\-\\d+TextComponent",
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
                regionRegex: "^us\\-iso\\-\\w+\\-\\d+TextComponent",
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
                regionRegex: "^us\\-isob\\-\\w+\\-\\d+TextComponent",
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
                regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+TextComponent",
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
                regionRegex: "^us\\-isof\\-\\w+\\-\\d+TextComponent",
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
                regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "eusc-de-east-1": {
                        description: "EU (Germany)"
                    }
                }
            }],
            version: "1.1"
        },
        HZQ = DZQ,
        CZQ = "",
        EZQ = G8A((A) => {
            let {
                partitions: Q
            } = HZQ;
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
        zZQ = G8A((A, Q = "") => {
            HZQ = A, CZQ = Q
        }, "setPartitionInfo"),
        nv4 = G8A(() => {
            zZQ(DZQ, "")
        }, "useDefaultPartitionInfo"),
        av4 = G8A(() => CZQ, "getUserAgentPrefix"),
        UZQ = {
            isVirtualHostableS3Bucket: KZQ,
            parseArn: iv4,
            partition: EZQ
        };
    NZ.customEndpointFunctions.aws = UZQ
});
var Pr = moduleWrapper((IV7, khA) => {
    var wZQ, qZQ, NZQ, LZQ, MZQ, OZQ, RZQ, TZQ, PZQ, jZQ, SZQ, _ZQ, kZQ, ShA, Iq1, yZQ, xZQ, vZQ, I8A, bZQ, fZQ, hZQ, gZQ, uZQ, mZQ, dZQ, cZQ, pZQ, _hA, lZQ, iZQ, nZQ;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof khA === "object" && typeof IV7 === "object") A(B(Q, B(IV7)));
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
        wZQ = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, qZQ = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, NZQ = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, LZQ = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, MZQ = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, OZQ = function(I, Y, J, W, X, F) {
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
        }, RZQ = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, TZQ = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, PZQ = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, jZQ = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, SZQ = function(I, Y, J, W) {
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
        }, _ZQ = function(I, Y) {
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
        }, kZQ = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) _hA(Y, I, J)
        }, _hA = Object.create ? function(I, Y, J, W) {
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
        }, ShA = function(I) {
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
        }, Iq1 = function(I, Y) {
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
        }, yZQ = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(Iq1(arguments[Y]));
            return I
        }, xZQ = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, vZQ = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, I8A = function(I) {
            return this instanceof I8A ? (this.v = I, this) : new I8A(I)
        }, bZQ = function(I, Y, J) {
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
                w.value instanceof I8A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, fZQ = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: I8A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, hZQ = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof ShA === "function" ? ShA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, gZQ = function(I, Y) {
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
        uZQ = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") _hA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, mZQ = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, dZQ = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, cZQ = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, pZQ = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, lZQ = function(I, Y, J) {
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
        iZQ = function(I) {
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
        }, nZQ = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)TextComponent|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", wZQ), A("__assign", qZQ), A("__rest", NZQ), A("__decorate", LZQ), A("__param", MZQ), A("__esDecorate", OZQ), A("__runInitializers", RZQ), A("__propKey", TZQ), A("__setFunctionName", PZQ), A("__metadata", jZQ), A("__awaiter", SZQ), A("__generator", _ZQ), A("__exportStar", kZQ), A("__createBinding", _hA), A("__values", ShA), A("__read", Iq1), A("__spread", yZQ), A("__spreadArrays", xZQ), A("__spreadArray", vZQ), A("__await", I8A), A("__asyncGenerator", bZQ), A("__asyncDelegator", fZQ), A("__asyncValues", hZQ), A("__makeTemplateObject", gZQ), A("__importStar", uZQ), A("__importDefault", mZQ), A("__classPrivateFieldGet", dZQ), A("__classPrivateFieldSet", cZQ), A("__classPrivateFieldIn", pZQ), A("__addDisposableResource", lZQ), A("__disposeResources", iZQ), A("__rewriteRelativeImportExtension", nZQ)
    })
});
var yR = moduleWrapper((YV7, tZQ) => {
    var {
        defineProperty: yhA,
        getOwnPropertyDescriptor: sv4,
        getOwnPropertyNames: rv4
    } = Object, ov4 = Object.prototype.hasOwnProperty, xhA = (A, Q) => yhA(A, "name", {
        value: Q,
        configurable: !0
    }), tv4 = (A, Q) => {
        for (var B in Q) yhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ev4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of rv4(Q))
                if (!ov4.call(A, Z) && Z !== B) yhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = sv4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Ab4 = (A) => ev4(yhA({}, "__esModule", {
        value: !0
    }), A), aZQ = {};
    tv4(aZQ, {
        emitWarningIfUnsupportedVersion: () => Qb4,
        setCredentialFeature: () => sZQ,
        setFeature: () => rZQ,
        setTokenFeature: () => oZQ,
        state: () => Yq1
    });
    tZQ.exports = Ab4(aZQ);
    var Yq1 = {
            warningEmitted: !1
        },
        Qb4 = xhA((A) => {
            if (A && !Yq1.warningEmitted && parseInt(A.substring(1, A.indexOf("."))) < 18) Yq1.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`)
        }, "emitWarningIfUnsupportedVersion");

    function sZQ(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    xhA(sZQ, "setCredentialFeature");

    function rZQ(A, Q, B) {
        if (!A.__aws_sdk_context) A.__aws_sdk_context = {
            features: {}
        };
        else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
        A.__aws_sdk_context.features[Q] = B
    }
    xhA(rZQ, "setFeature");

    function oZQ(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    xhA(oZQ, "setTokenFeature")
});
var QIQ = moduleWrapper((JV7, AIQ) => {
    var {
        defineProperty: vhA,
        getOwnPropertyDescriptor: Bb4,
        getOwnPropertyNames: Gb4
    } = Object, Zb4 = Object.prototype.hasOwnProperty, Ib4 = (A, Q) => vhA(A, "name", {
        value: Q,
        configurable: !0
    }), Yb4 = (A, Q) => {
        for (var B in Q) vhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Jb4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Gb4(Q))
                if (!Zb4.call(A, Z) && Z !== B) vhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Bb4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Wb4 = (A) => Jb4(vhA({}, "__esModule", {
        value: !0
    }), A), eZQ = {};
    Yb4(eZQ, {
        isArrayBuffer: () => Xb4
    });
    AIQ.exports = Wb4(eZQ);
    var Xb4 = Ib4((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var IIQ = moduleWrapper((WV7, ZIQ) => {
    var {
        defineProperty: bhA,
        getOwnPropertyDescriptor: Fb4,
        getOwnPropertyNames: Vb4
    } = Object, Kb4 = Object.prototype.hasOwnProperty, Jq1 = (A, Q) => bhA(A, "name", {
        value: Q,
        configurable: !0
    }), Db4 = (A, Q) => {
        for (var B in Q) bhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Hb4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Vb4(Q))
                if (!Kb4.call(A, Z) && Z !== B) bhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Fb4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Cb4 = (A) => Hb4(bhA({}, "__esModule", {
        value: !0
    }), A), BIQ = {};
    Db4(BIQ, {
        escapeUri: () => GIQ,
        escapeUriPath: () => zb4
    });
    ZIQ.exports = Cb4(BIQ);
    var GIQ = Jq1((A) => encodeURIComponent(A).replace(/[!'()*]/g, Eb4), "escapeUri"),
        Eb4 = Jq1((A) => `%TextComponent{A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        zb4 = Jq1((A) => A.split("/").map(GIQ).join("/"), "escapeUriPath")
});
var yIQ = moduleWrapper((XV7, kIQ) => {
    var {
        defineProperty: chA,
        getOwnPropertyDescriptor: Ub4,
        getOwnPropertyNames: $b4
    } = Object, wb4 = Object.prototype.hasOwnProperty, oK = (A, Q) => chA(A, "name", {
        value: Q,
        configurable: !0
    }), qb4 = (A, Q) => {
        for (var B in Q) chA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Nb4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of $b4(Q))
                if (!wb4.call(A, Z) && Z !== B) chA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ub4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Lb4 = (A) => Nb4(chA({}, "__esModule", {
        value: !0
    }), A), FIQ = {};
    qb4(FIQ, {
        ALGORITHM_IDENTIFIER: () => fhA,
        ALGORITHM_IDENTIFIER_V4A: () => Tb4,
        ALGORITHM_QUERY_PARAM: () => VIQ,
        ALWAYS_UNSIGNABLE_HEADERS: () => $IQ,
        AMZ_DATE_HEADER: () => Cq1,
        AMZ_DATE_QUERY_PARAM: () => Vq1,
        AUTH_HEADER: () => Hq1,
        CREDENTIAL_QUERY_PARAM: () => KIQ,
        DATE_HEADER: () => CIQ,
        EVENT_ALGORITHM_IDENTIFIER: () => NIQ,
        EXPIRES_QUERY_PARAM: () => HIQ,
        GENERATED_HEADERS: () => EIQ,
        HOST_HEADER: () => Ob4,
        KEY_TYPE_IDENTIFIER: () => Eq1,
        MAX_CACHE_SIZE: () => MIQ,
        MAX_PRESIGNED_TTL: () => OIQ,
        PROXY_HEADER_PATTERN: () => wIQ,
        REGION_SET_PARAM: () => Mb4,
        SEC_HEADER_PATTERN: () => qIQ,
        SHA256_HEADER: () => dhA,
        SIGNATURE_HEADER: () => zIQ,
        SIGNATURE_QUERY_PARAM: () => Kq1,
        SIGNED_HEADERS_QUERY_PARAM: () => DIQ,
        SignatureV4: () => hb4,
        SignatureV4Base: () => _IQ,
        TOKEN_HEADER: () => UIQ,
        TOKEN_QUERY_PARAM: () => Dq1,
        UNSIGNABLE_PATTERNS: () => Rb4,
        UNSIGNED_PAYLOAD: () => LIQ,
        clearCredentialCache: () => jb4,
        createScope: () => ghA,
        getCanonicalHeaders: () => Wq1,
        getCanonicalQuery: () => SIQ,
        getPayloadHash: () => uhA,
        getSigningKey: () => RIQ,
        hasHeader: () => TIQ,
        moveHeadersToQuery: () => jIQ,
        prepareRequest: () => Fq1,
        signatureV4aContainer: () => gb4
    });
    kIQ.exports = Lb4(FIQ);
    var YIQ = L2(),
        VIQ = "X-Amz-Algorithm",
        KIQ = "X-Amz-Credential",
        Vq1 = "X-Amz-Date",
        DIQ = "X-Amz-SignedHeaders",
        HIQ = "X-Amz-Expires",
        Kq1 = "X-Amz-Signature",
        Dq1 = "X-Amz-Security-Token",
        Mb4 = "X-Amz-Region-Set",
        Hq1 = "authorization",
        Cq1 = Vq1.toLowerCase(),
        CIQ = "date",
        EIQ = [Hq1, Cq1, CIQ],
        zIQ = Kq1.toLowerCase(),
        dhA = "x-amz-content-sha256",
        UIQ = Dq1.toLowerCase(),
        Ob4 = "host",
        $IQ = {
            authorization: !0,
            "cache-control": !0,
            connection: !0,
            expect: !0,
            from: !0,
            "keep-alive": !0,
            "max-forwards": !0,
            pragma: !0,
            referer: !0,
            te: !0,
            trailer: !0,
            "transfer-encoding": !0,
            upgrade: !0,
            "user-agent": !0,
            "x-amzn-trace-id": !0
        },
        wIQ = /^proxy-/,
        qIQ = /^sec-/,
        Rb4 = [/^proxy-/i, /^sec-/i],
        fhA = "AWS4-HMAC-SHA256",
        Tb4 = "AWS4-ECDSA-P256-SHA256",
        NIQ = "AWS4-HMAC-SHA256-PAYLOAD",
        LIQ = "UNSIGNED-PAYLOAD",
        MIQ = 50,
        Eq1 = "aws4_request",
        OIQ = 604800,
        Jd = mm(),
        Pb4 = L2(),
        Y8A = {},
        hhA = [],
        ghA = oK((A, Q, B) => `TextComponent{A}/TextComponent{Q}/TextComponent{B}/TextComponent{Eq1}`, "createScope"),
        RIQ = oK(async (A, Q, B, G, Z) => {
            let I = await JIQ(A, Q.secretAccessKey, Q.accessKeyId),
                Y = `TextComponent{B}:TextComponent{G}:TextComponent{Z}:TextComponent{(0,Jd.toHex)(I)}:TextComponent{Q.sessionToken}`;
            if (Y in Y8A) return Y8A[Y];
            hhA.push(Y);
            while (hhA.length > MIQ) delete Y8A[hhA.shift()];
            let J = `AWS4${Q.secretAccessKey}`;
            for (let W of [B, G, Z, Eq1]) J = await JIQ(A, J, W);
            return Y8A[Y] = J
        }, "getSigningKey"),
        jb4 = oK(() => {
            hhA.length = 0, Object.keys(Y8A).forEach((A) => {
                delete Y8A[A]
            })
        }, "clearCredentialCache"),
        JIQ = oK((A, Q, B) => {
            let G = new A(Q);
            return G.update((0, Pb4.toUint8Array)(B)), G.digest()
        }, "hmac"),
        Wq1 = oK(({
            headers: A
        }, Q, B) => {
            let G = {};
            for (let Z of Object.keys(A).sort()) {
                if (A[Z] == null) continue;
                let I = Z.toLowerCase();
                if (I in $IQ || Q?.has(I) || wIQ.test(I) || qIQ.test(I)) {
                    if (!B || B && !B.has(I)) continue
                }
                G[I] = A[Z].trim().replace(/\s+/g, " ")
            }
            return G
        }, "getCanonicalHeaders"),
        Sb4 = QIQ(),
        _b4 = L2(),
        uhA = oK(async ({
            headers: A,
            body: Q
        }, B) => {
            for (let G of Object.keys(A))
                if (G.toLowerCase() === dhA) return A[G];
            if (Q == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
            else if (typeof Q === "string" || ArrayBuffer.isView(Q) || (0, Sb4.isArrayBuffer)(Q)) {
                let G = new B;
                return G.update((0, _b4.toUint8Array)(Q)), (0, Jd.toHex)(await G.digest())
            }
            return LIQ
        }, "getPayloadHash"),
        WIQ = L2(),
        kb4 = class {
            static {
                oK(this, "HeaderFormatter")
            }
            format(A) {
                let Q = [];
                for (let Z of Object.keys(A)) {
                    let I = (0, WIQ.fromUtf8)(Z);
                    Q.push(Uint8Array.from([I.byteLength]), I, this.formatHeaderValue(A[Z]))
                }
                let B = new Uint8Array(Q.reduce((Z, I) => Z + I.byteLength, 0)),
                    G = 0;
                for (let Z of Q) B.set(Z, G), G += Z.byteLength;
                return B
            }
            formatHeaderValue(A) {
                switch (A.type) {
                    case "boolean":
                        return Uint8Array.from([A.value ? 0 : 1]);
                    case "byte":
                        return Uint8Array.from([2, A.value]);
                    case "short":
                        let Q = new DataView(new ArrayBuffer(3));
                        return Q.setUint8(0, 3), Q.setInt16(1, A.value, !1), new Uint8Array(Q.buffer);
                    case "integer":
                        let B = new DataView(new ArrayBuffer(5));
                        return B.setUint8(0, 4), B.setInt32(1, A.value, !1), new Uint8Array(B.buffer);
                    case "long":
                        let G = new Uint8Array(9);
                        return G[0] = 5, G.set(A.value.bytes, 1), G;
                    case "binary":
                        let Z = new DataView(new ArrayBuffer(3 + A.value.byteLength));
                        Z.setUint8(0, 6), Z.setUint16(1, A.value.byteLength, !1);
                        let I = new Uint8Array(Z.buffer);
                        return I.set(A.value, 3), I;
                    case "string":
                        let Y = (0, WIQ.fromUtf8)(A.value),
                            J = new DataView(new ArrayBuffer(3 + Y.byteLength));
                        J.setUint8(0, 7), J.setUint16(1, Y.byteLength, !1);