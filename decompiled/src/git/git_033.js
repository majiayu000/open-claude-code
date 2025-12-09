/**
 * Claude Code Decompiled
 * Category: git
 * File: 33/34
 * Lines: 379825 - 381322 (1498 lines)
 * Original file: cli.js
 */

var sa2 = U((aa2) => {
    var {
        _optionalChain: YXA
    } = l0();
    Object.defineProperty(aa2, "__esModule", {
        value: !0
    });
    var JXA = l0(),
        pI0 = U$(),
        HW3 = dn();
    class zG1 {
        static __initStatic() {
            this.id = "Postgres"
        }
        constructor(A = {}) {
            this.name = zG1.id, this._usePgNative = !!A.usePgNative, this._module = A.module
        }
        loadDependency() {
            return this._module = this._module || JXA.loadModule("pg")
        }
        setupOnce(A, Q) {
            if (HW3.shouldDisableAutoInstrumentation(Q)) {
                pI0.DEBUG_BUILD && JXA.logger.log("Postgres Integration is skipped because of instrumenter configuration.");
                return
            }
            let B = this.loadDependency();
            if (!B) {
                pI0.DEBUG_BUILD && JXA.logger.error("Postgres Integration was unable to require `pg` package.");
                return
            }
            let G = this._usePgNative ? YXA([B, "access", (Z) => Z.native, "optionalAccess", (Z) => Z.Client]) : B.Client;
            if (!G) {
                pI0.DEBUG_BUILD && JXA.logger.error("Postgres Integration was unable to access 'pg-native' bindings.");
                return
            }
            JXA.fill(G.prototype, "query", function(Z) {
                return function(I, Y, J) {
                    let X = Q().getScope().getSpan(),
                        F = {
                            "db.system": "postgresql"
                        };
                    try {
                        if (this.database) F["db.name"] = this.database;
                        if (this.host) F["server.address"] = this.host;
                        if (this.port) F["server.port"] = this.port;
                        if (this.user) F["db.user"] = this.user
                    } catch (D) {}
                    let V = YXA([X, "optionalAccess", (D) => D.startChild, "call", (D) => D({
                        description: typeof I === "string" ? I : I.text,
                        op: "db",
                        origin: "auto.db.postgres",
                        data: F
                    })]);
                    if (typeof J === "function") return Z.call(this, I, Y, function(D, H) {
                        YXA([V, "optionalAccess", (C) => C.end, "call", (C) => C()]), J(D, H)
                    });
                    if (typeof Y === "function") return Z.call(this, I, function(D, H) {
                        YXA([V, "optionalAccess", (C) => C.end, "call", (C) => C()]), Y(D, H)
                    });
                    let K = typeof Y < "u" ? Z.call(this, I, Y) : Z.call(this, I);
                    if (JXA.isThenable(K)) return K.then((D) => {
                        return YXA([V, "optionalAccess", (H) => H.end, "call", (H) => H()]), D
                    });
                    return YXA([V, "optionalAccess", (D) => D.end, "call", (D) => D()]), K
                }
            })
        }
    }
    zG1.__initStatic();
    aa2.Postgres = zG1
});
var oa2 = U((ra2) => {
    var {
        _optionalChain: EW3
    } = l0();
    Object.defineProperty(ra2, "__esModule", {
        value: !0
    });
    var XPA = l0(),
        lI0 = U$(),
        zW3 = dn();
    class UG1 {
        static __initStatic() {
            this.id = "Mysql"
        }
        constructor() {
            this.name = UG1.id
        }
        loadDependency() {
            return this._module = this._module || XPA.loadModule("mysql/lib/Connection.js")
        }
        setupOnce(A, Q) {
            if (zW3.shouldDisableAutoInstrumentation(Q)) {
                lI0.DEBUG_BUILD && XPA.logger.log("Mysql Integration is skipped because of instrumenter configuration.");
                return
            }
            let B = this.loadDependency();
            if (!B) {
                lI0.DEBUG_BUILD && XPA.logger.error("Mysql Integration was unable to require `mysql` package.");
                return
            }
            let G = void 0;
            try {
                B.prototype.connect = new Proxy(B.prototype.connect, {
                    apply(Y, J, W) {
                        if (!G) G = J.config;
                        return Y.apply(J, W)
                    }
                })
            } catch (Y) {
                lI0.DEBUG_BUILD && XPA.logger.error("Mysql Integration was unable to instrument `mysql` config.")
            }

            function Z() {
                if (!G) return {};
                return {
                    "server.address": G.host,
                    "server.port": G.port,
                    "db.user": G.user
                }
            }

            function I(Y) {
                if (!Y) return;
                let J = Z();
                Object.keys(J).forEach((W) => {
                    Y.setAttribute(W, J[W])
                }), Y.end()
            }
            XPA.fill(B, "createQuery", function(Y) {
                return function(J, W, X) {
                    let V = Q().getScope().getSpan(),
                        K = EW3([V, "optionalAccess", (H) => H.startChild, "call", (H) => H({
                            description: typeof J === "string" ? J : J.sql,
                            op: "db",
                            origin: "auto.db.mysql",
                            data: {
                                "db.system": "mysql"
                            }
                        })]);
                    if (typeof X === "function") return Y.call(this, J, W, function(H, C, E) {
                        I(K), X(H, C, E)
                    });
                    if (typeof W === "function") return Y.call(this, J, function(H, C, E) {
                        I(K), W(H, C, E)
                    });
                    let D = Y.call(this, J, W);
                    return D.on("end", () => {
                        I(K)
                    }), D
                }
            })
        }
    }
    UG1.__initStatic();
    ra2.Mysql = UG1
});
var As2 = U((ea2) => {
    var {
        _optionalChain: cn
    } = l0();
    Object.defineProperty(ea2, "__esModule", {
        value: !0
    });
    var FPA = l0(),
        ta2 = U$(),
        $W3 = dn(),
        wW3 = ["aggregate", "bulkWrite", "countDocuments", "createIndex", "createIndexes", "deleteMany", "deleteOne", "distinct", "drop", "dropIndex", "dropIndexes", "estimatedDocumentCount", "find", "findOne", "findOneAndDelete", "findOneAndReplace", "findOneAndUpdate", "indexes", "indexExists", "indexInformation", "initializeOrderedBulkOp", "insertMany", "insertOne", "isCapped", "mapReduce", "options", "parallelCollectionScan", "rename", "replaceOne", "stats", "updateMany", "updateOne"],
        qW3 = {
            bulkWrite: ["operations"],
            countDocuments: ["query"],
            createIndex: ["fieldOrSpec"],
            createIndexes: ["indexSpecs"],
            deleteMany: ["filter"],
            deleteOne: ["filter"],
            distinct: ["key", "query"],
            dropIndex: ["indexName"],
            find: ["query"],
            findOne: ["query"],
            findOneAndDelete: ["filter"],
            findOneAndReplace: ["filter", "replacement"],
            findOneAndUpdate: ["filter", "update"],
            indexExists: ["indexes"],
            insertMany: ["docs"],
            insertOne: ["doc"],
            mapReduce: ["map", "reduce"],
            rename: ["newName"],
            replaceOne: ["filter", "doc"],
            updateMany: ["filter", "update"],
            updateOne: ["filter", "update"]
        };

    function NW3(A) {
        return A && typeof A === "object" && A.once && typeof A.once === "function"
    }
    class $G1 {
        static __initStatic() {
            this.id = "Mongo"
        }
        constructor(A = {}) {
            this.name = $G1.id, this._operations = Array.isArray(A.operations) ? A.operations : wW3, this._describeOperations = "describeOperations" in A ? A.describeOperations : !0, this._useMongoose = !!A.useMongoose
        }
        loadDependency() {
            let A = this._useMongoose ? "mongoose" : "mongodb";
            return this._module = this._module || FPA.loadModule(A)
        }
        setupOnce(A, Q) {
            if ($W3.shouldDisableAutoInstrumentation(Q)) {
                ta2.DEBUG_BUILD && FPA.logger.log("Mongo Integration is skipped because of instrumenter configuration.");
                return
            }
            let B = this.loadDependency();
            if (!B) {
                let G = this._useMongoose ? "mongoose" : "mongodb";
                ta2.DEBUG_BUILD && FPA.logger.error(`Mongo Integration was unable to require \`${G}\` package.`);
                return
            }
            this._instrumentOperations(B.Collection, this._operations, Q)
        }
        _instrumentOperations(A, Q, B) {
            Q.forEach((G) => this._patchOperation(A, G, B))
        }
        _patchOperation(A, Q, B) {
            if (!(Q in A.prototype)) return;
            let G = this._getSpanContextFromOperationArguments.bind(this);
            FPA.fill(A.prototype, Q, function(Z) {
                return function(...I) {
                    let Y = I[I.length - 1],
                        J = B(),
                        W = J.getScope(),
                        X = J.getClient(),
                        F = W.getSpan(),
                        V = cn([X, "optionalAccess", (D) => D.getOptions, "call", (D) => D(), "access", (D) => D.sendDefaultPii]);
                    if (typeof Y !== "function" || Q === "mapReduce" && I.length === 2) {
                        let D = cn([F, "optionalAccess", (C) => C.startChild, "call", (C) => C(G(this, Q, I, V))]),
                            H = Z.call(this, ...I);
                        if (FPA.isThenable(H)) return H.then((C) => {
                            return cn([D, "optionalAccess", (E) => E.end, "call", (E) => E()]), C
                        });
                        else if (NW3(H)) {
                            let C = H;
                            try {
                                C.once("close", () => {
                                    cn([D, "optionalAccess", (E) => E.end, "call", (E) => E()])
                                })
                            } catch (E) {
                                cn([D, "optionalAccess", (z) => z.end, "call", (z) => z()])
                            }
                            return C
                        } else return cn([D, "optionalAccess", (C) => C.end, "call", (C) => C()]), H
                    }
                    let K = cn([F, "optionalAccess", (D) => D.startChild, "call", (D) => D(G(this, Q, I.slice(0, -1)))]);
                    return Z.call(this, ...I.slice(0, -1), function(D, H) {
                        cn([K, "optionalAccess", (C) => C.end, "call", (C) => C()]), Y(D, H)
                    })
                }
            })
        }
        _getSpanContextFromOperationArguments(A, Q, B, G = !1) {
            let Z = {
                    "db.system": "mongodb",
                    "db.name": A.dbName,
                    "db.operation": Q,
                    "db.mongodb.collection": A.collectionName
                },
                I = {
                    op: "db",
                    origin: "auto.db.mongo",
                    description: Q,
                    data: Z
                },
                Y = qW3[Q],
                J = Array.isArray(this._describeOperations) ? this._describeOperations.includes(Q) : this._describeOperations;
            if (!Y || !J || !G) return I;
            try {
                if (Q === "mapReduce") {
                    let [W, X] = B;
                    Z[Y[0]] = typeof W === "string" ? W : W.name || "<anonymous>", Z[Y[1]] = typeof X === "string" ? X : X.name || "<anonymous>"
                } else
                    for (let W = 0; W < Y.length; W++) Z[`db.mongodb.${Y[W]}`] = JSON.stringify(B[W])
            } catch (W) {}
            return I
        }
    }
    $G1.__initStatic();
    ea2.Mongo = $G1
});
var Gs2 = U((Bs2) => {
    Object.defineProperty(Bs2, "__esModule", {
        value: !0
    });
    var iI0 = P4(),
        Qs2 = l0(),
        MW3 = U$(),
        OW3 = dn();

    function RW3(A) {
        return !!A && !!A.$use
    }
    class wG1 {
        static __initStatic() {
            this.id = "Prisma"
        }
        constructor(A = {}) {
            if (this.name = wG1.id, RW3(A.client) && !A.client._sentryInstrumented) {
                Qs2.addNonEnumerableProperty(A.client, "_sentryInstrumented", !0);
                let Q = {};
                try {
                    let B = A.client._engineConfig;
                    if (B) {
                        let {
                            activeProvider: G,
                            clientVersion: Z
                        } = B;
                        if (G) Q["db.system"] = G;
                        if (Z) Q["db.prisma.version"] = Z
                    }
                } catch (B) {}
                A.client.$use((B, G) => {
                    if (OW3.shouldDisableAutoInstrumentation(iI0.getCurrentHub)) return G(B);
                    let {
                        action: Z,
                        model: I
                    } = B;
                    return iI0.startSpan({
                        name: I ? `${I} ${Z}` : Z,
                        onlyIfParent: !0,
                        op: "db.prisma",
                        attributes: {
                            [iI0.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.db.prisma"
                        },
                        data: {
                            ...Q,
                            "db.operation": Z
                        }
                    }, () => G(B))
                })
            } else MW3.DEBUG_BUILD && Qs2.logger.warn("Unsupported Prisma client provided to PrismaIntegration. Provided client:", A.client)
        }
        setupOnce() {}
    }
    wG1.__initStatic();
    Bs2.Prisma = wG1
});
var Ys2 = U((Is2) => {
    var {
        _optionalChain: WXA
    } = l0();
    Object.defineProperty(Is2, "__esModule", {
        value: !0
    });
    var VPA = l0(),
        Zs2 = U$(),
        PW3 = dn();
    class qG1 {
        static __initStatic() {
            this.id = "GraphQL"
        }
        constructor() {
            this.name = qG1.id
        }
        loadDependency() {
            return this._module = this._module || VPA.loadModule("graphql/execution/execute.js")
        }
        setupOnce(A, Q) {
            if (PW3.shouldDisableAutoInstrumentation(Q)) {
                Zs2.DEBUG_BUILD && VPA.logger.log("GraphQL Integration is skipped because of instrumenter configuration.");
                return
            }
            let B = this.loadDependency();
            if (!B) {
                Zs2.DEBUG_BUILD && VPA.logger.error("GraphQL Integration was unable to require graphql/execution package.");
                return
            }
            VPA.fill(B, "execute", function(G) {
                return function(...Z) {
                    let I = Q().getScope(),
                        Y = I.getSpan(),
                        J = WXA([Y, "optionalAccess", (X) => X.startChild, "call", (X) => X({
                            description: "execute",
                            op: "graphql.execute",
                            origin: "auto.graphql.graphql"
                        })]);
                    WXA([I, "optionalAccess", (X) => X.setSpan, "call", (X) => X(J)]);
                    let W = G.call(this, ...Z);
                    if (VPA.isThenable(W)) return W.then((X) => {
                        return WXA([J, "optionalAccess", (F) => F.end, "call", (F) => F()]), WXA([I, "optionalAccess", (F) => F.setSpan, "call", (F) => F(Y)]), X
                    });
                    return WXA([J, "optionalAccess", (X) => X.end, "call", (X) => X()]), WXA([I, "optionalAccess", (X) => X.setSpan, "call", (X) => X(Y)]), W
                }
            })
        }
    }
    qG1.__initStatic();
    Is2.GraphQL = qG1
});
var Xs2 = U((Ws2) => {
    var {
        _optionalChain: nI0
    } = l0();
    Object.defineProperty(Ws2, "__esModule", {
        value: !0
    });
    var zC = l0(),
        NG1 = U$(),
        SW3 = dn();
    class LG1 {
        static __initStatic() {
            this.id = "Apollo"
        }
        constructor(A = {
            useNestjs: !1
        }) {
            this.name = LG1.id, this._useNest = !!A.useNestjs
        }
        loadDependency() {
            if (this._useNest) this._module = this._module || zC.loadModule("@nestjs/graphql");
            else this._module = this._module || zC.loadModule("apollo-server-core");
            return this._module
        }
        setupOnce(A, Q) {
            if (SW3.shouldDisableAutoInstrumentation(Q)) {
                NG1.DEBUG_BUILD && zC.logger.log("Apollo Integration is skipped because of instrumenter configuration.");
                return
            }
            if (this._useNest) {
                let B = this.loadDependency();
                if (!B) {
                    NG1.DEBUG_BUILD && zC.logger.error("Apollo-NestJS Integration was unable to require @nestjs/graphql package.");
                    return
                }
                zC.fill(B.GraphQLFactory.prototype, "mergeWithSchema", function(G) {
                    return function(...Z) {
                        return zC.fill(this.resolversExplorerService, "explore", function(I) {
                            return function() {
                                let Y = zC.arrayify(I.call(this));
                                return Js2(Y, Q)
                            }
                        }), G.call(this, ...Z)
                    }
                })
            } else {
                let B = this.loadDependency();
                if (!B) {
                    NG1.DEBUG_BUILD && zC.logger.error("Apollo Integration was unable to require apollo-server-core package.");
                    return
                }
                zC.fill(B.ApolloServerBase.prototype, "constructSchema", function(G) {
                    return function() {
                        if (!this.config.resolvers) {
                            if (NG1.DEBUG_BUILD) {
                                if (this.config.schema) zC.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.If you are using NestJS with Apollo, please use `Sentry.Integrations.Apollo({ useNestjs: true })` instead."), zC.logger.warn();
                                else if (this.config.modules) zC.logger.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.");
                                zC.logger.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")
                            }
                            return G.call(this)
                        }
                        let Z = zC.arrayify(this.config.resolvers);
                        return this.config.resolvers = Js2(Z, Q), G.call(this)
                    }
                })
            }
        }
    }
    LG1.__initStatic();

    function Js2(A, Q) {
        return A.map((B) => {
            return Object.keys(B).forEach((G) => {
                Object.keys(B[G]).forEach((Z) => {
                    if (typeof B[G][Z] !== "function") return;
                    _W3(B, G, Z, Q)
                })
            }), B
        })
    }

    function _W3(A, Q, B, G) {
        zC.fill(A[Q], B, function(Z) {
            return function(...I) {
                let J = G().getScope().getSpan(),
                    W = nI0([J, "optionalAccess", (F) => F.startChild, "call", (F) => F({
                        description: `${Q}.${B}`,
                        op: "graphql.resolve",
                        origin: "auto.graphql.apollo"
                    })]),
                    X = Z.call(this, ...I);
                if (zC.isThenable(X)) return X.then((F) => {
                    return nI0([W, "optionalAccess", (V) => V.end, "call", (V) => V()]), F
                });
                return nI0([W, "optionalAccess", (F) => F.end, "call", (F) => F()]), X
            }
        })
    }
    Ws2.Apollo = LG1
});
var Vs2 = U((Fs2, pn) => {
    Object.defineProperty(Fs2, "__esModule", {
        value: !0
    });
    var l0A = l0(),
        yW3 = [() => {
            return new(l0A.dynamicRequire(pn, "./apollo")).Apollo
        }, () => {
            return new(l0A.dynamicRequire(pn, "./apollo")).Apollo({
                useNestjs: !0
            })
        }, () => {
            return new(l0A.dynamicRequire(pn, "./graphql")).GraphQL
        }, () => {
            return new(l0A.dynamicRequire(pn, "./mongo")).Mongo
        }, () => {
            return new(l0A.dynamicRequire(pn, "./mongo")).Mongo({
                mongoose: !0
            })
        }, () => {
            return new(l0A.dynamicRequire(pn, "./mysql")).Mysql
        }, () => {
            return new(l0A.dynamicRequire(pn, "./postgres")).Postgres
        }];
    Fs2.lazyLoadedNodePerformanceMonitoringIntegrations = yW3
});
var gq = U((Ks2) => {
    Object.defineProperty(Ks2, "__esModule", {
        value: !0
    });
    var vW3 = l0(),
        bW3 = vW3.GLOBAL_OBJ;
    Ks2.WINDOW = bW3
});
var sI0 = U((Es2) => {
    Object.defineProperty(Es2, "__esModule", {
        value: !0
    });
    var Ds2 = P4(),
        Hs2 = l0(),
        Cs2 = U$(),
        aI0 = gq();

    function hW3() {
        if (aI0.WINDOW.document) aI0.WINDOW.document.addEventListener("visibilitychange", () => {
            let A = Ds2.getActiveTransaction();
            if (aI0.WINDOW.document.hidden && A) {
                let {
                    op: B,
                    status: G
                } = Ds2.spanToJSON(A);
                if (Cs2.DEBUG_BUILD && Hs2.logger.log(`[Tracing] Transaction: cancelled -> since tab moved to the background, op: ${B}`), !G) A.setStatus("cancelled");
                A.setTag("visibilitychange", "document.hidden"), A.end()
            }
        });
        else Cs2.DEBUG_BUILD && Hs2.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
    }
    Es2.registerBackgroundTabDetection = hW3
});
var XXA = U((zs2) => {
    Object.defineProperty(zs2, "__esModule", {
        value: !0
    });
    var uW3 = (A, Q, B) => {
        let G, Z;
        return (I) => {
            if (Q.value >= 0) {
                if (I || B) {
                    if (Z = Q.value - (G || 0), Z || G === void 0) G = Q.value, Q.delta = Z, A(Q)
                }
            }
        }
    };
    zs2.bindReporter = uW3
});
var $s2 = U((Us2) => {
    Object.defineProperty(Us2, "__esModule", {
        value: !0
    });
    var dW3 = () => {
        return `v3-${Date.now()}-${Math.floor(Math.random()*8999999999999)+1000000000000}`
    };
    Us2.generateUniqueID = dW3
});
var DPA = U((ws2) => {
    Object.defineProperty(ws2, "__esModule", {
        value: !0
    });
    var KPA = gq(),
        pW3 = () => {
            let A = KPA.WINDOW.performance.timing,
                Q = KPA.WINDOW.performance.navigation.type,
                B = {
                    entryType: "navigation",
                    startTime: 0,
                    type: Q == 2 ? "back_forward" : Q === 1 ? "reload" : "navigate"
                };
            for (let G in A)
                if (G !== "navigationStart" && G !== "toJSON") B[G] = Math.max(A[G] - A.navigationStart, 0);
            return B
        },
        lW3 = () => {
            if (KPA.WINDOW.__WEB_VITALS_POLYFILL__) return KPA.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || pW3());
            else return KPA.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        };
    ws2.getNavigationEntry = lW3
});
var MG1 = U((qs2) => {
    Object.defineProperty(qs2, "__esModule", {
        value: !0
    });
    var nW3 = DPA(),
        aW3 = () => {
            let A = nW3.getNavigationEntry();
            return A && A.activationStart || 0
        };
    qs2.getActivationStart = aW3
});
var FXA = U((Ls2) => {
    Object.defineProperty(Ls2, "__esModule", {
        value: !0
    });
    var Ns2 = gq(),
        rW3 = $s2(),
        oW3 = MG1(),
        tW3 = DPA(),
        eW3 = (A, Q) => {
            let B = tW3.getNavigationEntry(),
                G = "navigate";
            if (B)
                if (Ns2.WINDOW.document && Ns2.WINDOW.document.prerendering || oW3.getActivationStart() > 0) G = "prerender";
                else G = B.type.replace(/_/g, "-");
            return {
                name: A,
                value: typeof Q > "u" ? -1 : Q,
                rating: "good",
                delta: 0,
                entries: [],
                id: rW3.generateUniqueID(),
                navigationType: G
            }
        };
    Ls2.initMetric = eW3
});
var i0A = U((Ms2) => {
    Object.defineProperty(Ms2, "__esModule", {
        value: !0
    });
    var QX3 = (A, Q, B) => {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(A)) {
                let G = new PerformanceObserver((Z) => {
                    Q(Z.getEntries())
                });
                return G.observe(Object.assign({
                    type: A,
                    buffered: !0
                }, B || {})), G
            }
        } catch (G) {}
        return
    };
    Ms2.observe = QX3
});
var VXA = U((Rs2) => {
    Object.defineProperty(Rs2, "__esModule", {
        value: !0
    });
    var Os2 = gq(),
        GX3 = (A, Q) => {
            let B = (G) => {
                if (G.type === "pagehide" || Os2.WINDOW.document.visibilityState === "hidden") {
                    if (A(G), Q) removeEventListener("visibilitychange", B, !0), removeEventListener("pagehide", B, !0)
                }
            };
            if (Os2.WINDOW.document) addEventListener("visibilitychange", B, !0), addEventListener("pagehide", B, !0)
        };
    Rs2.onHidden = GX3
});
var Ps2 = U((Ts2) => {
    Object.defineProperty(Ts2, "__esModule", {
        value: !0
    });
    var IX3 = XXA(),
        YX3 = FXA(),
        JX3 = i0A(),
        WX3 = VXA(),
        XX3 = (A, Q = {}) => {
            let B = YX3.initMetric("CLS", 0),
                G, Z = 0,
                I = [],
                Y = (W) => {
                    W.forEach((X) => {
                        if (!X.hadRecentInput) {
                            let F = I[0],
                                V = I[I.length - 1];
                            if (Z && I.length !== 0 && X.startTime - V.startTime < 1000 && X.startTime - F.startTime < 5000) Z += X.value, I.push(X);
                            else Z = X.value, I = [X];
                            if (Z > B.value) {
                                if (B.value = Z, B.entries = I, G) G()
                            }
                        }
                    })
                },
                J = JX3.observe("layout-shift", Y);
            if (J) {
                G = IX3.bindReporter(A, B, Q.reportAllChanges);
                let W = () => {
                    Y(J.takeRecords()), G(!0)
                };
                return WX3.onHidden(W), W
            }
            return
        };
    Ts2.onCLS = XX3
});
var TG1 = U((js2) => {
    Object.defineProperty(js2, "__esModule", {
        value: !0
    });
    var OG1 = gq(),
        VX3 = VXA(),
        RG1 = -1,
        KX3 = () => {
            if (OG1.WINDOW.document && OG1.WINDOW.document.visibilityState) RG1 = OG1.WINDOW.document.visibilityState === "hidden" && !OG1.WINDOW.document.prerendering ? 0 : 1 / 0
        },
        DX3 = () => {
            VX3.onHidden(({
                timeStamp: A
            }) => {
                RG1 = A
            }, !0)
        },
        HX3 = () => {
            if (RG1 < 0) KX3(), DX3();
            return {
                get firstHiddenTime() {
                    return RG1
                }
            }
        };
    js2.getVisibilityWatcher = HX3
});
var _s2 = U((Ss2) => {
    Object.defineProperty(Ss2, "__esModule", {
        value: !0
    });
    var EX3 = XXA(),
        zX3 = TG1(),
        UX3 = FXA(),
        $X3 = i0A(),
        wX3 = VXA(),
        qX3 = (A) => {
            let Q = zX3.getVisibilityWatcher(),
                B = UX3.initMetric("FID"),
                G, Z = (J) => {
                    if (J.startTime < Q.firstHiddenTime) B.value = J.processingStart - J.startTime, B.entries.push(J), G(!0)
                },
                I = (J) => {
                    J.forEach(Z)
                },
                Y = $X3.observe("first-input", I);
            if (G = EX3.bindReporter(A, B), Y) wX3.onHidden(() => {
                I(Y.takeRecords()), Y.disconnect()
            }, !0)
        };
    Ss2.onFID = qX3
});
var xs2 = U((ys2) => {
    Object.defineProperty(ys2, "__esModule", {
        value: !0
    });
    var LX3 = i0A(),
        ks2 = 0,
        rI0 = 1 / 0,
        PG1 = 0,
        MX3 = (A) => {
            A.forEach((Q) => {
                if (Q.interactionId) rI0 = Math.min(rI0, Q.interactionId), PG1 = Math.max(PG1, Q.interactionId), ks2 = PG1 ? (PG1 - rI0) / 7 + 1 : 0
            })
        },
        oI0, OX3 = () => {
            return oI0 ? ks2 : performance.interactionCount || 0
        },
        RX3 = () => {
            if ("interactionCount" in performance || oI0) return;
            oI0 = LX3.observe("event", MX3, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            })
        };
    ys2.getInteractionCount = OX3;
    ys2.initInteractionCountPolyfill = RX3
});
var us2 = U((gs2) => {
    Object.defineProperty(gs2, "__esModule", {
        value: !0
    });
    var jX3 = XXA(),
        SX3 = FXA(),
        _X3 = i0A(),
        kX3 = VXA(),
        fs2 = xs2(),
        hs2 = () => {
            return fs2.getInteractionCount()
        },
        vs2 = 10,
        Jg = [],
        tI0 = {},
        bs2 = (A) => {
            let Q = Jg[Jg.length - 1],
                B = tI0[A.interactionId];
            if (B || Jg.length < vs2 || A.duration > Q.latency) {
                if (B) B.entries.push(A), B.latency = Math.max(B.latency, A.duration);
                else {
                    let G = {
                        id: A.interactionId,
                        latency: A.duration,
                        entries: [A]
                    };
                    tI0[G.id] = G, Jg.push(G)
                }
                Jg.sort((G, Z) => Z.latency - G.latency), Jg.splice(vs2).forEach((G) => {
                    delete tI0[G.id]
                })
            }
        },
        yX3 = () => {
            let A = Math.min(Jg.length - 1, Math.floor(hs2() / 50));
            return Jg[A]
        },
        xX3 = (A, Q) => {
            Q = Q || {}, fs2.initInteractionCountPolyfill();
            let B = SX3.initMetric("INP"),
                G, Z = (Y) => {
                    Y.forEach((W) => {
                        if (W.interactionId) bs2(W);
                        if (W.entryType === "first-input") {
                            if (!Jg.some((F) => {
                                    return F.entries.some((V) => {
                                        return W.duration === V.duration && W.startTime === V.startTime
                                    })
                                })) bs2(W)
                        }
                    });
                    let J = yX3();
                    if (J && J.latency !== B.value) B.value = J.latency, B.entries = J.entries, G()
                },
                I = _X3.observe("event", Z, {
                    durationThreshold: Q.durationThreshold || 40
                });
            if (G = jX3.bindReporter(A, B, Q.reportAllChanges), I) I.observe({
                type: "first-input",
                buffered: !0
            }), kX3.onHidden(() => {
                if (Z(I.takeRecords()), B.value < 0 && hs2() > 0) B.value = 0, B.entries = [];
                G(!0)
            })
        };
    gs2.onINP = xX3
});
var cs2 = U((ds2) => {
    Object.defineProperty(ds2, "__esModule", {
        value: !0
    });
    var bX3 = gq(),
        fX3 = XXA(),
        hX3 = MG1(),
        gX3 = TG1(),
        uX3 = FXA(),
        mX3 = i0A(),
        dX3 = VXA(),
        ms2 = {},
        cX3 = (A) => {
            let Q = gX3.getVisibilityWatcher(),
                B = uX3.initMetric("LCP"),
                G, Z = (Y) => {
                    let J = Y[Y.length - 1];
                    if (J) {
                        let W = Math.max(J.startTime - hX3.getActivationStart(), 0);
                        if (W < Q.firstHiddenTime) B.value = W, B.entries = [J], G()
                    }
                },
                I = mX3.observe("largest-contentful-paint", Z);
            if (I) {
                G = fX3.bindReporter(A, B);
                let Y = () => {
                    if (!ms2[B.id]) Z(I.takeRecords()), I.disconnect(), ms2[B.id] = !0, G(!0)
                };
                return ["keydown", "click"].forEach((J) => {
                    if (bX3.WINDOW.document) addEventListener(J, Y, {
                        once: !0,
                        capture: !0
                    })
                }), dX3.onHidden(Y, !0), Y
            }
            return
        };
    ds2.onLCP = cX3
});
var ls2 = U((ps2) => {
    Object.defineProperty(ps2, "__esModule", {
        value: !0
    });
    var eI0 = gq(),
        lX3 = XXA(),
        iX3 = MG1(),
        nX3 = DPA(),
        aX3 = FXA(),
        AY0 = (A) => {
            if (!eI0.WINDOW.document) return;
            if (eI0.WINDOW.document.prerendering) addEventListener("prerenderingchange", () => AY0(A), !0);
            else if (eI0.WINDOW.document.readyState !== "complete") addEventListener("load", () => AY0(A), !0);
            else setTimeout(A, 0)
        },
        sX3 = (A, Q) => {
            Q = Q || {};
            let B = aX3.initMetric("TTFB"),
                G = lX3.bindReporter(A, B, Q.reportAllChanges);
            AY0(() => {
                let Z = nX3.getNavigationEntry();
                if (Z) {
                    if (B.value = Math.max(Z.responseStart - iX3.getActivationStart(), 0), B.value < 0 || B.value > performance.now()) return;
                    B.entries = [Z], G(!0)
                }
            })
        };
    ps2.onTTFB = sX3
});
var DXA = U((Ar2) => {
    Object.defineProperty(Ar2, "__esModule", {
        value: !0
    });
    var is2 = l0(),
        oX3 = U$(),
        tX3 = Ps2(),
        eX3 = _s2(),
        AF3 = us2(),
        QF3 = cs2(),
        BF3 = i0A(),
        GF3 = ls2(),
        HPA = {},
        jG1 = {},
        ns2, as2, ss2, rs2, os2;

    function ZF3(A, Q = !1) {
        return CPA("cls", A, FF3, ns2, Q)
    }

    function IF3(A, Q = !1) {
        return CPA("lcp", A, KF3, ss2, Q)
    }

    function YF3(A) {
        return CPA("ttfb", A, DF3, rs2)
    }

    function JF3(A) {
        return CPA("fid", A, VF3, as2)
    }

    function WF3(A) {
        return CPA("inp", A, HF3, os2)
    }

    function XF3(A, Q) {
        if (ts2(A, Q), !jG1[A]) CF3(A), jG1[A] = !0;
        return es2(A, Q)
    }

    function KXA(A, Q) {
        let B = HPA[A];
        if (!B || !B.length) return;
        for (let G of B) try {
            G(Q)
        } catch (Z) {
            oX3.DEBUG_BUILD && is2.logger.error(`Error while triggering instrumentation handler.
Type: ${A}
Name: ${is2.getFunctionName(G)}
Error:`, Z)
        }
    }

    function FF3() {
        return tX3.onCLS((A) => {
            KXA("cls", {
                metric: A
            }), ns2 = A
        }, {
            reportAllChanges: !0
        })
    }

    function VF3() {
        return eX3.onFID((A) => {
            KXA("fid", {
                metric: A
            }), as2 = A
        })
    }

    function KF3() {
        return QF3.onLCP((A) => {
            KXA("lcp", {
                metric: A
            }), ss2 = A
        })
    }

    function DF3() {
        return GF3.onTTFB((A) => {
            KXA("ttfb", {
                metric: A
            }), rs2 = A
        })
    }

    function HF3() {
        return AF3.onINP((A) => {
            KXA("inp", {
                metric: A
            }), os2 = A
        })
    }

    function CPA(A, Q, B, G, Z = !1) {
        ts2(A, Q);
        let I;
        if (!jG1[A]) I = B(), jG1[A] = !0;
        if (G) Q({
            metric: G
        });
        return es2(A, Q, Z ? I : void 0)
    }

    function CF3(A) {
        let Q = {};
        if (A === "event") Q.durationThreshold = 0;
        BF3.observe(A, (B) => {
            KXA(A, {
                entries: B
            })
        }, Q)
    }

    function ts2(A, Q) {
        HPA[A] = HPA[A] || [], HPA[A].push(Q)
    }

    function es2(A, Q, B) {
        return () => {
            if (B) B();
            let G = HPA[A];
            if (!G) return;
            let Z = G.indexOf(Q);
            if (Z !== -1) G.splice(Z, 1)
        }
    }
    Ar2.addClsInstrumentationHandler = ZF3;
    Ar2.addFidInstrumentationHandler = JF3;
    Ar2.addInpInstrumentationHandler = WF3;
    Ar2.addLcpInstrumentationHandler = IF3;
    Ar2.addPerformanceInstrumentationHandler = XF3;
    Ar2.addTtfbInstrumentationHandler = YF3
});
var Br2 = U((Qr2) => {
    Object.defineProperty(Qr2, "__esModule", {
        value: !0
    });

    function NF3(A) {
        return typeof A === "number" && isFinite(A)
    }

    function LF3(A, {
        startTimestamp: Q,
        ...B
    }) {
        if (Q && A.startTimestamp > Q) A.startTimestamp = Q;
        return A.startChild({
            startTimestamp: Q,
            ...B
        })
    }
    Qr2._startChild = LF3;
    Qr2.isMeasurementValue = NF3
});
var GY0 = U((Jr2) => {
    Object.defineProperty(Jr2, "__esModule", {
        value: !0
    });
    var Wg = P4(),
        VZ = l0(),
        uq = U$(),
        n0A = DXA(),
        Xg = gq(),
        RF3 = TG1(),
        Fg = Br2(),
        TF3 = DPA(),
        PF3 = 2147483647;

    function iF(A) {
        return A / 1000
    }

    function BY0() {
        return Xg.WINDOW && Xg.WINDOW.addEventListener && Xg.WINDOW.performance
    }
    var Gr2 = 0,
        cJ = {},
        my, EPA;

    function jF3() {
        let A = BY0();
        if (A && VZ.browserPerformanceTimeOrigin) {
            if (A.mark) Xg.WINDOW.performance.mark("sentry-tracing-init");
            let Q = vF3(),
                B = yF3(),
                G = xF3(),
                Z = bF3();
            return () => {
                Q(), B(), G(), Z()
            }
        }
        return () => {
            return
        }
    }

    function SF3() {
        n0A.addPerformanceInstrumentationHandler("longtask", ({
            entries: A
        }) => {
            for (let Q of A) {
                let B = Wg.getActiveTransaction();
                if (!B) return;
                let G = iF(VZ.browserPerformanceTimeOrigin + Q.startTime),
                    Z = iF(Q.duration);
                B.startChild({
                    description: "Main UI thread blocked",
                    op: "ui.long-task",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: G,
                    endTimestamp: G + Z
                })
            }
        })
    }

    function _F3() {
        n0A.addPerformanceInstrumentationHandler("event", ({
            entries: A
        }) => {
            for (let Q of A) {
                let B = Wg.getActiveTransaction();
                if (!B) return;
                if (Q.name === "click") {
                    let G = iF(VZ.browserPerformanceTimeOrigin + Q.startTime),
                        Z = iF(Q.duration),
                        I = {
                            description: VZ.htmlTreeAsString(Q.target),
                            op: `ui.interaction.${Q.name}`,
                            origin: "auto.ui.browser.metrics",
                            startTimestamp: G,
                            endTimestamp: G + Z
                        },
                        Y = VZ.getComponentName(Q.target);
                    if (Y) I.attributes = {
                        "ui.component_name": Y
                    };
                    B.startChild(I)
                }
            }
        })
    }

    function kF3(A, Q) {
        if (BY0() && VZ.browserPerformanceTimeOrigin) {
            let G = fF3(A, Q);
            return () => {
                G()
            }
        }
        return () => {
            return
        }
    }

    function yF3() {
        return n0A.addClsInstrumentationHandler(({
            metric: A
        }) => {
            let Q = A.entries[A.entries.length - 1];
            if (!Q) return;
            uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding CLS"), cJ.cls = {
                value: A.value,
                unit: ""
            }, EPA = Q
        }, !0)
    }

    function xF3() {
        return n0A.addLcpInstrumentationHandler(({
            metric: A
        }) => {
            let Q = A.entries[A.entries.length - 1];
            if (!Q) return;
            uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding LCP"), cJ.lcp = {
                value: A.value,
                unit: "millisecond"
            }, my = Q
        }, !0)
    }

    function vF3() {
        return n0A.addFidInstrumentationHandler(({
            metric: A
        }) => {
            let Q = A.entries[A.entries.length - 1];
            if (!Q) return;
            let B = iF(VZ.browserPerformanceTimeOrigin),
                G = iF(Q.startTime);
            uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding FID"), cJ.fid = {
                value: A.value,
                unit: "millisecond"
            }, cJ["mark.fid"] = {
                value: B + G,
                unit: "second"
            }
        })
    }

    function bF3() {
        return n0A.addTtfbInstrumentationHandler(({
            metric: A
        }) => {
            if (!A.entries[A.entries.length - 1]) return;
            uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding TTFB"), cJ.ttfb = {
                value: A.value,
                unit: "millisecond"
            }
        })
    }
    var Zr2 = {
        click: "click",
        pointerdown: "click",
        pointerup: "click",
        mousedown: "click",
        mouseup: "click",
        touchstart: "click",
        touchend: "click",
        mouseover: "hover",
        mouseout: "hover",
        mouseenter: "hover",
        mouseleave: "hover",
        pointerover: "hover",
        pointerout: "hover",
        pointerenter: "hover",
        pointerleave: "hover",
        dragstart: "drag",
        dragend: "drag",
        drag: "drag",
        dragenter: "drag",
        dragleave: "drag",
        dragover: "drag",
        drop: "drag",
        keydown: "press",
        keyup: "press",
        keypress: "press",
        input: "press"
    };

    function fF3(A, Q) {
        return n0A.addInpInstrumentationHandler(({
            metric: B
        }) => {
            if (B.value === void 0) return;
            let G = B.entries.find((N) => N.duration === B.value && Zr2[N.name] !== void 0),
                Z = Wg.getClient();
            if (!G || !Z) return;
            let I = Zr2[G.name],
                Y = Z.getOptions(),
                J = iF(VZ.browserPerformanceTimeOrigin + G.startTime),
                W = iF(B.value),
                X = G.interactionId !== void 0 ? A[G.interactionId] : void 0;
            if (X === void 0) return;
            let {
                routeName: F,
                parentContext: V,
                activeTransaction: K,
                user: D,
                replayId: H
            } = X, C = D !== void 0 ? D.email || D.id || D.ip_address : void 0, E = K !== void 0 ? K.getProfileId() : void 0, z = new Wg.Span({
                startTimestamp: J,
                endTimestamp: J + W,
                op: `ui.interaction.${I}`,
                name: VZ.htmlTreeAsString(G.target),
                attributes: {
                    release: Y.release,
                    environment: Y.environment,
                    transaction: F,
                    ...C !== void 0 && C !== "" ? {
                        user: C
                    } : {},
                    ...E !== void 0 ? {
                        profile_id: E
                    } : {},
                    ...H !== void 0 ? {
                        replay_id: H
                    } : {}
                },
                exclusiveTime: B.value,
                measurements: {
                    inp: {
                        value: B.value,
                        unit: "millisecond"
                    }
                }
            }), w = pF3(V, Y, Q);
            if (!w) return;
            if (Math.random() < w) {
                let N = z ? Wg.createSpanEnvelope([z], Z.getDsn()) : void 0,
                    q = Z && Z.getTransport();
                if (q && N) q.send(N).then(null, (R) => {
                    uq.DEBUG_BUILD && VZ.logger.error("Error while sending interaction:", R)
                });
                return
            }
        })
    }

    function hF3(A) {
        let Q = BY0();
        if (!Q || !Xg.WINDOW.performance.getEntries || !VZ.browserPerformanceTimeOrigin) return;
        uq.DEBUG_BUILD && VZ.logger.log("[Tracing] Adding & adjusting spans using Performance API");
        let B = iF(VZ.browserPerformanceTimeOrigin),
            G = Q.getEntries(),
            {
                op: Z,
                start_timestamp: I
            } = Wg.spanToJSON(A);
        if (G.slice(Gr2).forEach((Y) => {
                let J = iF(Y.startTime),
                    W = iF(Y.duration);
                if (A.op === "navigation" && I && B + J < I) return;
                switch (Y.entryType) {
                    case "navigation": {
                        gF3(A, Y, B);
                        break
                    }
                    case "mark":
                    case "paint":
                    case "measure": {
                        Ir2(A, Y, J, W, B);
                        let X = RF3.getVisibilityWatcher(),
                            F = Y.startTime < X.firstHiddenTime;
                        if (Y.name === "first-paint" && F) uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding FP"), cJ.fp = {
                            value: Y.startTime,
                            unit: "millisecond"
                        };
                        if (Y.name === "first-contentful-paint" && F) uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding FCP"), cJ.fcp = {
                            value: Y.startTime,
                            unit: "millisecond"
                        };
                        break
                    }
                    case "resource": {
                        Yr2(A, Y, Y.name, J, W, B);
                        break
                    }
                }
            }), Gr2 = Math.max(G.length - 1, 0), mF3(A), Z === "pageload") {
            cF3(cJ), ["fcp", "fp", "lcp"].forEach((J) => {
                if (!cJ[J] || !I || B >= I) return;
                let W = cJ[J].value,
                    X = B + iF(W),
                    F = Math.abs((X - I) * 1000),
                    V = F - W;
                uq.DEBUG_BUILD && VZ.logger.log(`[Measurements] Normalized ${J} from ${W} to ${F} (${V})`), cJ[J].value = F
            });
            let Y = cJ["mark.fid"];
            if (Y && cJ.fid) Fg._startChild(A, {
                description: "first input delay",
                endTimestamp: Y.value + iF(cJ.fid.value),
                op: "ui.action",
                origin: "auto.ui.browser.metrics",
                startTimestamp: Y.value
            }), delete cJ["mark.fid"];
            if (!("fcp" in cJ)) delete cJ.cls;
            Object.keys(cJ).forEach((J) => {
                Wg.setMeasurement(J, cJ[J].value, cJ[J].unit)
            }), dF3(A)
        }
        my = void 0, EPA = void 0, cJ = {}
    }

    function Ir2(A, Q, B, G, Z) {
        let I = Z + B,
            Y = I + G;
        return Fg._startChild(A, {
            description: Q.name,
            endTimestamp: Y,
            op: Q.entryType,
            origin: "auto.resource.browser.metrics",
            startTimestamp: I
        }), I
    }

    function gF3(A, Q, B) {
        ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((G) => {
            SG1(A, Q, G, B)
        }), SG1(A, Q, "secureConnection", B, "TLS/SSL", "connectEnd"), SG1(A, Q, "fetch", B, "cache", "domainLookupStart"), SG1(A, Q, "domainLookup", B, "DNS"), uF3(A, Q, B)
    }

    function SG1(A, Q, B, G, Z, I) {
        let Y = I ? Q[I] : Q[`${B}End`],
            J = Q[`${B}Start`];
        if (!J || !Y) return;
        Fg._startChild(A, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: Z || B,
            startTimestamp: G + iF(J),
            endTimestamp: G + iF(Y)
        })
    }

    function uF3(A, Q, B) {
        if (Q.responseEnd) Fg._startChild(A, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: "request",
            startTimestamp: B + iF(Q.requestStart),
            endTimestamp: B + iF(Q.responseEnd)
        }), Fg._startChild(A, {
            op: "browser",
            origin: "auto.browser.browser.metrics",
            description: "response",
            startTimestamp: B + iF(Q.responseStart),
            endTimestamp: B + iF(Q.responseEnd)
        })
    }

    function Yr2(A, Q, B, G, Z, I) {
        if (Q.initiatorType === "xmlhttprequest" || Q.initiatorType === "fetch") return;
        let Y = VZ.parseUrl(B),
            J = {};
        if (QY0(J, Q, "transferSize", "http.response_transfer_size"), QY0(J, Q, "encodedBodySize", "http.response_content_length"), QY0(J, Q, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in Q) J["resource.render_blocking_status"] = Q.renderBlockingStatus;
        if (Y.protocol) J["url.scheme"] = Y.protocol.split(":").pop();
        if (Y.host) J["server.address"] = Y.host;
        J["url.same_origin"] = B.includes(Xg.WINDOW.location.origin);
        let W = I + G,
            X = W + Z;
        Fg._startChild(A, {
            description: B.replace(Xg.WINDOW.location.origin, ""),
            endTimestamp: X,
            op: Q.initiatorType ? `resource.${Q.initiatorType}` : "resource.other",
            origin: "auto.resource.browser.metrics",
            startTimestamp: W,
            data: J
        })
    }

    function mF3(A) {
        let Q = Xg.WINDOW.navigator;
        if (!Q) return;
        let B = Q.connection;
        if (B) {
            if (B.effectiveType) A.setTag("effectiveConnectionType", B.effectiveType);
            if (B.type) A.setTag("connectionType", B.type);
            if (Fg.isMeasurementValue(B.rtt)) cJ["connection.rtt"] = {
                value: B.rtt,
                unit: "millisecond"
            }
        }
        if (Fg.isMeasurementValue(Q.deviceMemory)) A.setTag("deviceMemory", `${Q.deviceMemory} GB`);
        if (Fg.isMeasurementValue(Q.hardwareConcurrency)) A.setTag("hardwareConcurrency", String(Q.hardwareConcurrency))
    }

    function dF3(A) {
        if (my) {
            if (uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding LCP Data"), my.element) A.setTag("lcp.element", VZ.htmlTreeAsString(my.element));
            if (my.id) A.setTag("lcp.id", my.id);
            if (my.url) A.setTag("lcp.url", my.url.trim().slice(0, 200));
            A.setTag("lcp.size", my.size)
        }
        if (EPA && EPA.sources) uq.DEBUG_BUILD && VZ.logger.log("[Measurements] Adding CLS Data"), EPA.sources.forEach((Q, B) => A.setTag(`cls.source.${B+1}`, VZ.htmlTreeAsString(Q.node)))
    }

    function QY0(A, Q, B, G) {
        let Z = Q[B];
        if (Z != null && Z < PF3) A[G] = Z
    }

    function cF3(A) {
        let Q = TF3.getNavigationEntry();
        if (!Q) return;
        let {
            responseStart: B,
            requestStart: G
        } = Q;