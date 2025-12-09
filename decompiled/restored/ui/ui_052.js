/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: ui_052.js
 * 处理时间: 2025-12-09T03:37:26.264Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         ( 21x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 52/53
 * Lines: 382823 - 384322 (1500 lines)
 * Original file: cli.js
 */

    Ho2.setNodeAsyncContextStrategy = ND3
});
var fG1 = U(($o2) => {
    Object.defineProperty($o2, "__esModule", {
        value: !0
    });
    var MD3 = UA("util"),
        bG1 = P4(),
        Eo2 = l0(),
        zo2 = "Console",
        OD3 = () => {
            return {
                name: zo2,
                setupOnce() {},
                setup(A) {
                    Eo2.addConsoleInstrumentationHandler(({
                        args: Q,
                        level: B
                    }) => {
                        if (bG1.getClient() !== A) return;
                        bG1.addBreadcrumb({
                            category: "console",
                            level: Eo2.severityLevelFromString(B),
                            message: MD3.format.apply(void 0, Q)
                        }, {
                            input: [...Q],
                            level: B
                        })
                    })
                }
            }
        },
        Uo2 = bG1.defineIntegration(OD3),
        RD3 = bG1.convertIntegrationFnToClass(zo2, Uo2);
    $o2.Console = RD3;
    $o2.consoleIntegration = Uo2
});
var hG1 = U((jo2) => {
    var {
        _optionalChain: t0A
    } = l0();
    Object.defineProperty(jo2, "__esModule", {
        value: !0
    });
    var jD3 = UA("child_process"),
        qo2 = UA("fs"),
        RO = UA("os"),
        SD3 = UA("path"),
        No2 = UA("util"),
        Lo2 = P4(),
        Mo2 = No2.promisify(qo2.readFile),
        Oo2 = No2.promisify(qo2.readdir),
        Ro2 = "Context",
        _D3 = (A = {}) => {
            let Q, B = {
                app: !0,
                os: !0,
                device: !0,
                culture: !0,
                cloudResource: !0,
                ...A
            };
            async function G(I) {
                if (Q === void 0) Q = Z();
                let Y = yD3(await Q);
                return I.contexts = {
                    ...I.contexts,
                    app: {
                        ...Y.app,
                        ...t0A([I, "access", (J) => J.contexts, "optionalAccess", (J) => J.app])
                    },
                    os: {
                        ...Y.os,
                        ...t0A([I, "access", (J) => J.contexts, "optionalAccess", (J) => J.os])
                    },
                    device: {
                        ...Y.device,
                        ...t0A([I, "access", (J) => J.contexts, "optionalAccess", (J) => J.device])
                    },
                    culture: {
                        ...Y.culture,
                        ...t0A([I, "access", (J) => J.contexts, "optionalAccess", (J) => J.culture])
                    },
                    cloud_resource: {
                        ...Y.cloud_resource,
                        ...t0A([I, "access", (J) => J.contexts, "optionalAccess", (J) => J.cloud_resource])
                    }
                }, I
            }
            async function Z() {
                let I = {};
                if (B.os) I.os = await xD3();
                if (B.app) I.app = bD3();
                if (B.device) I.device = Po2(B.device);
                if (B.culture) {
                    let Y = vD3();
                    if (Y) I.culture = Y
                }
                if (B.cloudResource) I.cloud_resource = dD3();
                return I
            }
            return {
                name: Ro2,
                setupOnce() {},
                processEvent(I) {
                    return G(I)
                }
            }
        },
        To2 = Lo2.defineIntegration(_D3),
        kD3 = Lo2.convertIntegrationFnToClass(Ro2, To2);

    function yD3(A) {
        if (t0A([A, "optionalAccess", (Q) => Q.app, "optionalAccess", (Q) => Q.app_memory])) A.app.app_memory = process.memoryUsage().rss;
        if (t0A([A, "optionalAccess", (Q) => Q.device, "optionalAccess", (Q) => Q.free_memory])) A.device.free_memory = RO.freemem();
        return A
    }
    async function xD3() {
        let A = RO.platform();
        switch (A) {
            case "darwin":
                return uD3();
            case "linux":
                return mD3();
            default:
                return {
                    name: fD3[A] || A, version: RO.release()
                }
        }
    }

    function vD3() {
        try {
            if (typeof process.versions.icu !== "string") return;
            let A = new Date(900000000);
            if (new Intl.DateTimeFormat("es", {
                    month: "long"
                }).format(A) === "enero") {
                let B = Intl.DateTimeFormat().resolvedOptions();
                return {
                    locale: B.locale,
                    timezone: B.timeZone
                }
            }
        } catch (A) {}
        return
    }

    function bD3() {
        let A = process.memoryUsage().rss;
        return {
            app_start_time: new Date(Date.now() - process.uptime() * 1000).toISOString(),
            app_memory: A
        }
    }

    function Po2(A) {
        let Q = {},
            B;
        try {
            B = RO.uptime && RO.uptime()
        } catch (G) {}
        if (typeof B === "number") Q.boot_time = new Date(Date.now() - B * 1000).toISOString();
        if (Q.arch = RO.arch(), A === !0 || A.memory) Q.memory_size = RO.totalmem(), Q.free_memory = RO.freemem();
        if (A === !0 || A.cpu) {
            let G = RO.cpus();
            if (G && G.length) {
                let Z = G[0];
                Q.processor_count = G.length, Q.cpu_description = Z.model, Q.processor_frequency = Z.speed
            }
        }
        return Q
    }
    var fD3 = {
            aix: "IBM AIX",
            freebsd: "FreeBSD",
            openbsd: "OpenBSD",
            sunos: "SunOS",
            win32: "Windows"
        },
        hD3 = [{
            name: "fedora-release",
            distros: ["Fedora"]
        }, {
            name: "redhat-release",
            distros: ["Red Hat Linux", "Centos"]
        }, {
            name: "redhat_version",
            distros: ["Red Hat Linux"]
        }, {
            name: "SuSE-release",
            distros: ["SUSE Linux"]
        }, {
            name: "lsb-release",
            distros: ["Ubuntu Linux", "Arch Linux"]
        }, {
            name: "debian_version",
            distros: ["Debian"]
        }, {
            name: "debian_release",
            distros: ["Debian"]
        }, {
            name: "arch-release",
            distros: ["Arch Linux"]
        }, {
            name: "gentoo-release",
            distros: ["Gentoo Linux"]
        }, {
            name: "novell-release",
            distros: ["SUSE Linux"]
        }, {
            name: "alpine-release",
            distros: ["Alpine Linux"]
        }],
        gD3 = {
            alpine: (A) => A,
            arch: (A) => ly(/distrib_release=(.*)/, A),
            centos: (A) => ly(/release ([^ ]+)/, A),
            debian: (A) => A,
            fedora: (A) => ly(/release (..)/, A),
            mint: (A) => ly(/distrib_release=(.*)/, A),
            red: (A) => ly(/release ([^ ]+)/, A),
            suse: (A) => ly(/VERSION = (.*)\n/, A),
            ubuntu: (A) => ly(/distrib_release=(.*)/, A)
        };

    function ly(A, Q) {
        let B = A.exec(Q);
        return B ? B[1] : void 0
    }
    async function uD3() {
        let A = {
            kernel_version: RO.release(),
            name: "Mac OS X",
            version: `10.${Number(RO.release().split(".")[0])-4}`
        };
        try {
            let Q = await new Promise((B, G) => {
                jD3.execFile("/usr/bin/sw_vers", (Z, I) => {
                    if (Z) {
                        G(Z);
                        return
                    }
                    B(I)
                })
            });
            A.name = ly(/^ProductName:\s+(.*)$/m, Q), A.version = ly(/^ProductVersion:\s+(.*)$/m, Q), A.build = ly(/^BuildVersion:\s+(.*)$/m, Q)
        } catch (Q) {}
        return A
    }

    function wo2(A) {
        return A.split(" ")[0].toLowerCase()
    }
    async function mD3() {
        let A = {
            kernel_version: RO.release(),
            name: "Linux"
        };
        try {
            let Q = await Oo2("/etc"),
                B = hD3.find((J) => Q.includes(J.name));
            if (!B) return A;
            let G = SD3.join("/etc", B.name),
                Z = (await Mo2(G, {
                    encoding: "utf-8"
                })).toLowerCase(),
                {
                    distros: I
                } = B;
            A.name = I.find((J) => Z.indexOf(wo2(J)) >= 0) || I[0];
            let Y = wo2(A.name);
            A.version = gD3[Y](Z)
        } catch (Q) {}
        return A
    }

    function dD3() {
        if (process.env.VERCEL) return {
            "cloud.provider": "vercel",
            "cloud.region": process.env.VERCEL_REGION
        };
        else if (process.env.AWS_REGION) return {
            "cloud.provider": "aws",
            "cloud.region": process.env.AWS_REGION,
            "cloud.platform": process.env.AWS_EXECUTION_ENV
        };
        else if (process.env.GCP_PROJECT) return {
            "cloud.provider": "gcp"
        };
        else if (process.env.ALIYUN_REGION_ID) return {
            "cloud.provider": "alibaba_cloud",
            "cloud.region": process.env.ALIYUN_REGION_ID
        };
        else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) return {
            "cloud.provider": "azure",
            "cloud.region": process.env.REGION_NAME
        };
        else if (process.env.IBM_CLOUD_REGION) return {
            "cloud.provider": "ibm_cloud",
            "cloud.region": process.env.IBM_CLOUD_REGION
        };
        else if (process.env.TENCENTCLOUD_REGION) return {
            "cloud.provider": "tencent_cloud",
            "cloud.region": process.env.TENCENTCLOUD_REGION,
            "cloud.account.id": process.env.TENCENTCLOUD_APPID,
            "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE
        };
        else if (process.env.NETLIFY) return {
            "cloud.provider": "netlify"
        };
        else if (process.env.FLY_REGION) return {
            "cloud.provider": "fly.io",
            "cloud.region": process.env.FLY_REGION
        };
        else if (process.env.DYNO) return {
            "cloud.provider": "heroku"
        };
        else return
    }
    jo2.Context = kD3;
    jo2.getDeviceContext = Po2;
    jo2.nodeContextIntegration = To2;
    jo2.readDirAsync = Oo2;
    jo2.readFileAsync = Mo2
});
var uG1 = U((xo2) => {
    var {
        _optionalChain: CY0
    } = l0();
    Object.defineProperty(xo2, "__esModule", {
        value: !0
    });
    var aD3 = UA("fs"),
        So2 = P4(),
        _o2 = l0(),
        gG1 = new _o2.LRUMap(100),
        sD3 = 7,
        ko2 = "ContextLines";

    function rD3(A) {
        return new Promise((Q, B) => {
            aD3.readFile(A, "utf8", (G, Z) => {
                if (G) B(G);
                else Q(Z)
            })
        })
    }
    var oD3 = (A = {}) => {
            let Q = A.frameContextLines !== void 0 ? A.frameContextLines : sD3;
            return {
                name: ko2,
                setupOnce() {},
                processEvent(B) {
                    return eD3(B, Q)
                }
            }
        },
        yo2 = So2.defineIntegration(oD3),
        tD3 = So2.convertIntegrationFnToClass(ko2, yo2);
    async function eD3(A, Q) {
        let B = {},
            G = [];
        if (Q > 0 && CY0([A, "access", (Z) => Z.exception, "optionalAccess", (Z) => Z.values]))
            for (let Z of A.exception.values) {
                if (!CY0([Z, "access", (I) => I.stacktrace, "optionalAccess", (I) => I.frames])) continue;
                for (let I = Z.stacktrace.frames.length - 1; I >= 0; I--) {
                    let Y = Z.stacktrace.frames[I];
                    if (Y.filename && !B[Y.filename] && !gG1.get(Y.filename)) G.push(QH3(Y.filename)), B[Y.filename] = 1
                }
            }
        if (G.length > 0) await Promise.all(G);
        if (Q > 0 && CY0([A, "access", (Z) => Z.exception, "optionalAccess", (Z) => Z.values])) {
            for (let Z of A.exception.values)
                if (Z.stacktrace && Z.stacktrace.frames) await AH3(Z.stacktrace.frames, Q)
        }
        return A
    }

    function AH3(A, Q) {
        for (let B of A)
            if (B.filename && B.context_line === void 0) {
                let G = gG1.get(B.filename);
                if (G) try {
                    _o2.addContextToFrame(G, B, Q)
                } catch (Z) {}
            }
    }
    async function QH3(A) {
        let Q = gG1.get(A);
        if (Q === null) return null;
        if (Q !== void 0) return Q;
        let B = null;
        try {
            B = (await rD3(A)).split(`
`)
        } catch (G) {}
        return gG1.set(A, B), B
    }
    xo2.ContextLines = tD3;
    xo2.contextLinesIntegration = yo2
});
var MPA = U((vo2) => {
    Object.defineProperty(vo2, "__esModule", {
        value: !0
    });
    var ZH3 = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
    vo2.DEBUG_BUILD = ZH3
});
var go2 = U((ho2) => {
    var {
        _optionalChain: iy
    } = l0();
    Object.defineProperty(ho2, "__esModule", {
        value: !0
    });
    var EY0 = UA("url"),
        YH3 = r0A();

    function JH3(A) {
        let {
            protocol: Q,
            hostname: B,
            port: G
        } = fo2(A), Z = A.path ? A.path : "/";
        return `${Q}//${B}${G}${Z}`
    }

    function bo2(A) {
        let {
            protocol: Q,
            hostname: B,
            port: G
        } = fo2(A), Z = A.pathname || "/", I = A.auth ? WH3(A.auth) : "";
        return `${Q}//${I}${B}${G}${Z}`
    }

    function WH3(A) {
        let [Q, B] = A.split(":");
        return `${Q?"[Filtered]":""}:${B?"[Filtered]":""}@`
    }

    function XH3(A, Q, B) {
        if (!A) return A;
        let [G, Z] = A.split(" ");
        if (Q.host && !Q.protocol) Q.protocol = iy([B, "optionalAccess", (I) => I.agent, "optionalAccess", (I) => I.protocol]), Z = bo2(Q);
        if (iy([Z, "optionalAccess", (I) => I.startsWith, "call", (I) => I("///")])) Z = Z.slice(2);
        return `${G} ${Z}`
    }

    function zY0(A) {
        let Q = {
            protocol: A.protocol,
            hostname: typeof A.hostname === "string" && A.hostname.startsWith("[") ? A.hostname.slice(1, -1) : A.hostname,
            hash: A.hash,
            search: A.search,
            pathname: A.pathname,
            path: `${A.pathname||""}${A.search||""}`,
            href: A.href
        };
        if (A.port !== "") Q.port = Number(A.port);
        if (A.username || A.password) Q.auth = `${A.username}:${A.password}`;
        return Q
    }

    function FH3(A, Q) {
        let B, G;
        if (typeof Q[Q.length - 1] === "function") B = Q.pop();
        if (typeof Q[0] === "string") G = zY0(new EY0.URL(Q[0]));
        else if (Q[0] instanceof EY0.URL) G = zY0(Q[0]);
        else {
            G = Q[0];
            try {
                let Z = new EY0.URL(G.path || "", `${G.protocol||"http:"}//${G.hostname}`);
                G = {
                    pathname: Z.pathname,
                    search: Z.search,
                    hash: Z.hash,
                    ...G
                }
            } catch (Z) {}
        }
        if (Q.length === 2) G = {
            ...G,
            ...Q[1]
        };
        if (G.protocol === void 0)
            if (YH3.NODE_VERSION.major > 8) G.protocol = iy([iy([A, "optionalAccess", (Z) => Z.globalAgent]), "optionalAccess", (Z) => Z.protocol]) || iy([G.agent, "optionalAccess", (Z) => Z.protocol]) || iy([G._defaultAgent, "optionalAccess", (Z) => Z.protocol]);
            else G.protocol = iy([G.agent, "optionalAccess", (Z) => Z.protocol]) || iy([G._defaultAgent, "optionalAccess", (Z) => Z.protocol]) || iy([iy([A, "optionalAccess", (Z) => Z.globalAgent]), "optionalAccess", (Z) => Z.protocol]);
        if (B) return [G, B];
        else return [G]
    }

    function fo2(A) {
        let Q = A.protocol || "",
            B = A.hostname || A.host || "",
            G = !A.port || A.port === 80 || A.port === 443 || /^(.*):(\d+)$/.test(B) ? "" : `:${A.port}`;
        return {
            protocol: Q,
            hostname: B,
            port: G
        }
    }
    ho2.cleanSpanDescription = XH3;
    ho2.extractRawUrl = JH3;
    ho2.extractUrl = bo2;
    ho2.normalizeRequestArgs = FH3;
    ho2.urlToOptions = zY0
});
var mG1 = U((co2) => {
    var {
        _optionalChain: CXA
    } = l0();
    Object.defineProperty(co2, "__esModule", {
        value: !0
    });
    var UC = P4(),
        dq = l0(),
        UY0 = MPA(),
        EH3 = r0A(),
        OPA = go2(),
        zH3 = (A = {}) => {
            let {
                breadcrumbs: Q,
                tracing: B,
                shouldCreateSpanForRequest: G
            } = A, Z = {
                breadcrumbs: Q,
                tracing: B === !1 ? !1 : dq.dropUndefinedKeys({
                    enableIfHasTracingEnabled: B === !0 ? void 0 : !0,
                    shouldCreateSpanForRequest: G
                })
            };
            return new e0A(Z)
        },
        UH3 = UC.defineIntegration(zH3);
    class e0A {
        static __initStatic() {
            this.id = "Http"
        }
        __init() {
            this.name = e0A.id
        }
        constructor(A = {}) {
            e0A.prototype.__init.call(this), this._breadcrumbs = typeof A.breadcrumbs > "u" ? !0 : A.breadcrumbs, this._tracing = !A.tracing ? void 0 : A.tracing === !0 ? {} : A.tracing
        }
        setupOnce(A, Q) {
            let B = CXA([Q, "call", (W) => W(), "access", (W) => W.getClient, "call", (W) => W(), "optionalAccess", (W) => W.getOptions, "call", (W) => W()]),
                G = mo2(this._tracing, B);
            if (!this._breadcrumbs && !G) return;
            if (B && B.instrumenter !== "sentry") {
                UY0.DEBUG_BUILD && dq.logger.log("HTTP Integration is skipped because of instrumenter configuration.");
                return
            }
            let Z = do2(G, this._tracing, B),
                I = CXA([B, "optionalAccess", (W) => W.tracePropagationTargets]) || CXA([this, "access", (W) => W._tracing, "optionalAccess", (W) => W.tracePropagationTargets]),
                Y = UA("http"),
                J = uo2(Y, this._breadcrumbs, Z, I);
            if (dq.fill(Y, "get", J), dq.fill(Y, "request", J), EH3.NODE_VERSION.major > 8) {
                let W = UA("https"),
                    X = uo2(W, this._breadcrumbs, Z, I);
                dq.fill(W, "get", X), dq.fill(W, "request", X)
            }
        }
    }
    e0A.__initStatic();

    function uo2(A, Q, B, G) {
        let Z = new dq.LRUMap(100),
            I = new dq.LRUMap(100),
            Y = (X) => {
                if (B === void 0) return !0;
                let F = Z.get(X);
                if (F !== void 0) return F;
                let V = B(X);
                return Z.set(X, V), V
            },
            J = (X) => {
                if (G === void 0) return !0;
                let F = I.get(X);
                if (F !== void 0) return F;
                let V = dq.stringMatchesSomePattern(X, G);
                return I.set(X, V), V
            };

        function W(X, F, V, K) {
            if (!UC.getCurrentHub().getIntegration(e0A)) return;
            UC.addBreadcrumb({
                category: "http",
                data: {
                    status_code: K && K.statusCode,
                    ...F
                },
                type: "http"
            }, {
                event: X,
                request: V,
                response: K
            })
        }
        return function(F) {
            return function(...K) {
                let D = OPA.normalizeRequestArgs(A, K),
                    H = D[0],
                    C = OPA.extractRawUrl(H),
                    E = OPA.extractUrl(H),
                    z = UC.getClient();
                if (UC.isSentryRequestUrl(E, z)) return F.apply(A, D);
                let w = UC.getCurrentScope(),
                    N = UC.getIsolationScope(),
                    q = UC.getActiveSpan(),
                    R = wH3(E, H),
                    P = Y(C) ? CXA([q, "optionalAccess", (y) => y.startChild, "call", (y) => y({
                        op: "http.client",
                        origin: "auto.http.node.http",
                        description: `${R["http.method"]} ${R.url}`,
                        data: R
                    })]) : void 0;
                if (z && J(C)) {
                    let {
                        traceId: y,
                        spanId: v,
                        sampled: x,
                        dsc: p
                    } = {
                        ...N.getPropagationContext(),
                        ...w.getPropagationContext()
                    }, u = P ? UC.spanToTraceHeader(P) : dq.generateSentryTraceHeader(y, v, x), o = dq.dynamicSamplingContextToSentryBaggageHeader(p || (P ? UC.getDynamicSamplingContextFromSpan(P) : UC.getDynamicSamplingContextFromClient(y, z, w)));
                    $H3(H, E, u, o)
                } else UY0.DEBUG_BUILD && dq.logger.log(`[Tracing] Not adding sentry-trace header to outgoing request (${E}) due to mismatching tracePropagationTargets option.`);
                return F.apply(A, D).once("response", function(y) {
                    let v = this;
                    if (Q) W("response", R, v, y);
                    if (P) {
                        if (y.statusCode) UC.setHttpStatus(P, y.statusCode);
                        P.updateName(OPA.cleanSpanDescription(UC.spanToJSON(P).description || "", H, v) || ""), P.end()
                    }
                }).once("error", function() {
                    let y = this;
                    if (Q) W("error", R, y);
                    if (P) UC.setHttpStatus(P, 500), P.updateName(OPA.cleanSpanDescription(UC.spanToJSON(P).description || "", H, y) || ""), P.end()
                })
            }
        }
    }

    function $H3(A, Q, B, G) {
        if ((A.headers || {})["sentry-trace"]) return;
        UY0.DEBUG_BUILD && dq.logger.log(`[Tracing] Adding sentry-trace header ${B} to outgoing request to "${Q}": `), A.headers = {
            ...A.headers,
            "sentry-trace": B,
            ...G && G.length > 0 && {
                baggage: qH3(A, G)
            }
        }
    }

    function wH3(A, Q) {
        let B = Q.method || "GET",
            G = {
                url: A,
                "http.method": B
            };
        if (Q.hash) G["http.fragment"] = Q.hash.substring(1);
        if (Q.search) G["http.query"] = Q.search.substring(1);
        return G
    }

    function qH3(A, Q) {
        if (!A.headers || !A.headers.baggage) return Q;
        else if (!Q) return A.headers.baggage;
        else if (Array.isArray(A.headers.baggage)) return [...A.headers.baggage, Q];
        return [A.headers.baggage, Q]
    }

    function mo2(A, Q) {
        return A === void 0 ? !1 : A.enableIfHasTracingEnabled ? UC.hasTracingEnabled(Q) : !0
    }

    function do2(A, Q, B) {
        return A ? CXA([Q, "optionalAccess", (Z) => Z.shouldCreateSpanForRequest]) || CXA([B, "optionalAccess", (Z) => Z.shouldCreateSpanForRequest]) : () => !1
    }
    co2.Http = e0A;
    co2._getShouldCreateSpanForRequest = do2;
    co2._shouldCreateSpans = mo2;
    co2.httpIntegration = UH3
});
var io2 = U((lo2) => {
    Object.defineProperty(lo2, "__esModule", {
        value: !0
    });

    function RH3(A, Q, B) {
        let G = 0,
            Z = 5,
            I = 0;
        return setInterval(() => {
            if (I === 0) {
                if (G > A) {
                    if (Z *= 2, B(Z), Z > 86400) Z = 86400;
                    I = Z
                }
            } else if (I -= 1, I === 0) Q();
            G = 0
        }, 1000).unref(), () => {
            G += 1
        }
    }

    function $Y0(A) {
        return A !== void 0 && (A.length === 0 || A === "?" || A === "<anonymous>")
    }

    function TH3(A, Q) {
        return A === Q || $Y0(A) && $Y0(Q)
    }

    function po2(A) {
        if (A === void 0) return;
        return A.slice(-10).reduce((Q, B) => `${Q},${B.function},${B.lineno},${B.colno}`, "")
    }

    function PH3(A, Q) {
        if (Q === void 0) return;
        return po2(A(Q, 1))
    }
    lo2.createRateLimiter = RH3;
    lo2.functionNamesMatch = TH3;
    lo2.hashFrames = po2;
    lo2.hashFromStack = PH3;
    lo2.isAnonymous = $Y0
});
var oo2 = U((ro2) => {
    var {
        _optionalChain: pJ
    } = l0();
    Object.defineProperty(ro2, "__esModule", {
        value: !0
    });
    var wY0 = P4(),
        dG1 = l0(),
        xH3 = r0A(),
        cG1 = io2();

    function qY0(A) {
        let Q = [],
            B = !1;

        function G(Y) {
            if (Q = [], B) return;
            B = !0, A(Y)
        }
        Q.push(G);

        function Z(Y) {
            Q.push(Y)
        }

        function I(Y) {
            let J = Q.pop() || G;
            try {
                J(Y)
            } catch (W) {
                G(Y)
            }
        }
        return {
            add: Z,
            next: I
        }
    }
    class no2 {
        constructor() {
            let {
                Session: A
            } = UA("inspector");
            this._session = new A
        }
        configureAndConnect(A, Q) {
            this._session.connect(), this._session.on("Debugger.paused", (B) => {
                A(B, () => {
                    this._session.post("Debugger.resume")
                })
            }), this._session.post("Debugger.enable"), this._session.post("Debugger.setPauseOnExceptions", {
                state: Q ? "all" : "uncaught"
            })
        }
        setPauseOnExceptions(A) {
            this._session.post("Debugger.setPauseOnExceptions", {
                state: A ? "all" : "uncaught"
            })
        }
        getLocalVariables(A, Q) {
            this._getProperties(A, (B) => {
                let {
                    add: G,
                    next: Z
                } = qY0(Q);
                for (let I of B)
                    if (pJ([I, "optionalAccess", (Y) => Y.value, "optionalAccess", (Y) => Y.objectId]) && pJ([I, "optionalAccess", (Y) => Y.value, "access", (Y) => Y.className]) === "Array") {
                        let Y = I.value.objectId;
                        G((J) => this._unrollArray(Y, I.name, J, Z))
                    } else if (pJ([I, "optionalAccess", (Y) => Y.value, "optionalAccess", (Y) => Y.objectId]) && pJ([I, "optionalAccess", (Y) => Y.value, "optionalAccess", (Y) => Y.className]) === "Object") {
                    let Y = I.value.objectId;
                    G((J) => this._unrollObject(Y, I.name, J, Z))
                } else if (pJ([I, "optionalAccess", (Y) => Y.value, "optionalAccess", (Y) => Y.value]) != null || pJ([I, "optionalAccess", (Y) => Y.value, "optionalAccess", (Y) => Y.description]) != null) G((Y) => this._unrollOther(I, Y, Z));
                Z({})
            })
        }
        _getProperties(A, Q) {
            this._session.post("Runtime.getProperties", {
                objectId: A,
                ownProperties: !0
            }, (B, G) => {
                if (B) Q([]);
                else Q(G.result)
            })
        }
        _unrollArray(A, Q, B, G) {
            this._getProperties(A, (Z) => {
                B[Q] = Z.filter((I) => I.name !== "length" && !isNaN(parseInt(I.name, 10))).sort((I, Y) => parseInt(I.name, 10) - parseInt(Y.name, 10)).map((I) => pJ([I, "optionalAccess", (Y) => Y.value, "optionalAccess", (Y) => Y.value])), G(B)
            })
        }
        _unrollObject(A, Q, B, G) {
            this._getProperties(A, (Z) => {
                B[Q] = Z.map((I) => [I.name, pJ([I, "optionalAccess", (Y) => Y.value, "optionalAccess", (Y) => Y.value])]).reduce((I, [Y, J]) => {
                    return I[Y] = J, I
                }, {}), G(B)
            })
        }
        _unrollOther(A, Q, B) {
            if (pJ([A, "optionalAccess", (G) => G.value, "optionalAccess", (G) => G.value]) != null) Q[A.name] = A.value.value;
            else if (pJ([A, "optionalAccess", (G) => G.value, "optionalAccess", (G) => G.description]) != null && pJ([A, "optionalAccess", (G) => G.value, "optionalAccess", (G) => G.type]) !== "function") Q[A.name] = `<${A.value.description}>`;
            B(Q)
        }
    }

    function vH3() {
        try {
            return new no2
        } catch (A) {
            return
        }
    }
    var ao2 = "LocalVariables",
        bH3 = (A = {}, Q = vH3()) => {
            let B = new dG1.LRUMap(20),
                G, Z = !1;

            function I(W, {
                params: {
                    reason: X,
                    data: F,
                    callFrames: V
                }
            }, K) {
                if (X !== "exception" && X !== "promiseRejection") {
                    K();
                    return
                }
                pJ([G, "optionalCall", (E) => E()]);
                let D = cG1.hashFromStack(W, pJ([F, "optionalAccess", (E) => E.description]));
                if (D == null) {
                    K();
                    return
                }
                let {
                    add: H,
                    next: C
                } = qY0((E) => {
                    B.set(D, E), K()
                });
                for (let E = 0; E < Math.min(V.length, 5); E++) {
                    let {
                        scopeChain: z,
                        functionName: w,
                        this: N
                    } = V[E], q = z.find((P) => P.type === "local"), R = N.className === "global" || !N.className ? w : `${N.className}.${w}`;
                    if (pJ([q, "optionalAccess", (P) => P.object, "access", (P) => P.objectId]) === void 0) H((P) => {
                        P[E] = {
                            function: R
                        }, C(P)
                    });
                    else {
                        let P = q.object.objectId;
                        H((y) => pJ([Q, "optionalAccess", (v) => v.getLocalVariables, "call", (v) => v(P, (x) => {
                            y[E] = {
                                function: R,
                                vars: x
                            }, C(y)
                        })]))
                    }
                }
                C([])
            }

            function Y(W) {
                let X = cG1.hashFrames(pJ([W, "optionalAccess", (K) => K.stacktrace, "optionalAccess", (K) => K.frames]));
                if (X === void 0) return;
                let F = B.remove(X);
                if (F === void 0) return;
                let V = (pJ([W, "access", (K) => K.stacktrace, "optionalAccess", (K) => K.frames]) || []).filter((K) => K.function !== "new Promise");
                for (let K = 0; K < V.length; K++) {
                    let D = V.length - K - 1;
                    if (!V[D] || !F[K]) break;
                    if (F[K].vars === void 0 || V[D].in_app === !1 || !cG1.functionNamesMatch(V[D].function, F[K].function)) continue;
                    V[D].vars = F[K].vars
                }
            }

            function J(W) {
                for (let X of pJ([W, "optionalAccess", (F) => F.exception, "optionalAccess", (F) => F.values]) || []) Y(X);
                return W
            }
            return {
                name: ao2,
                setupOnce() {
                    let W = wY0.getClient(),
                        X = pJ([W, "optionalAccess", (F) => F.getOptions, "call", (F) => F()]);
                    if (Q && pJ([X, "optionalAccess", (F) => F.includeLocalVariables])) {
                        if (xH3.NODE_VERSION.major < 18) {
                            dG1.logger.log("The `LocalVariables` integration is only supported on Node >= v18.");
                            return
                        }
                        let V = A.captureAllExceptions !== !1;
                        if (Q.configureAndConnect((K, D) => I(X.stackParser, K, D), V), V) {
                            let K = A.maxExceptionsPerSecond || 50;
                            G = cG1.createRateLimiter(K, () => {
                                dG1.logger.log("Local variables rate-limit lifted."), pJ([Q, "optionalAccess", (D) => D.setPauseOnExceptions, "call", (D) => D(!0)])
                            }, (D) => {
                                dG1.logger.log(`Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${D} seconds.`), pJ([Q, "optionalAccess", (H) => H.setPauseOnExceptions, "call", (H) => H(!1)])
                            })
                        }
                        Z = !0
                    }
                },
                processEvent(W) {
                    if (Z) return J(W);
                    return W
                },
                _getCachedFramesCount() {
                    return B.size
                },
                _getFirstCachedFrame() {
                    return B.values()[0]
                }
            }
        },
        so2 = wY0.defineIntegration(bH3),
        fH3 = wY0.convertIntegrationFnToClass(ao2, so2);
    ro2.LocalVariablesSync = fH3;
    ro2.createCallbackList = qY0;
    ro2.localVariablesSyncIntegration = so2
});
var pG1 = U((eo2) => {
    Object.defineProperty(eo2, "__esModule", {
        value: !0
    });
    var to2 = oo2(),
        mH3 = to2.LocalVariablesSync,
        dH3 = to2.localVariablesSyncIntegration;
    eo2.LocalVariables = mH3;
    eo2.localVariablesIntegration = dH3
});
var lG1 = U((It2) => {
    Object.defineProperty(It2, "__esModule", {
        value: !0
    });
    var At2 = UA("fs"),
        Qt2 = UA("path"),
        Bt2 = P4(),
        NY0, Gt2 = "Modules";

    function lH3() {
        try {
            return UA.cache ? Object.keys(UA.cache) : []
        } catch (A) {
            return []
        }
    }

    function iH3() {
        let A = UA.main && UA.main.paths || [],
            Q = lH3(),
            B = {},
            G = {};
        return Q.forEach((Z) => {
            let I = Z,
                Y = () => {
                    let J = I;
                    if (I = Qt2.dirname(J), !I || J === I || G[J]) return;
                    if (A.indexOf(I) < 0) return Y();
                    let W = Qt2.join(J, "package.json");
                    if (G[J] = !0, !At2.existsSync(W)) return Y();
                    try {
                        let X = JSON.parse(At2.readFileSync(W, "utf8"));
                        B[X.name] = X.version
                    } catch (X) {}
                };
            Y()
        }), B
    }

    function nH3() {
        if (!NY0) NY0 = iH3();
        return NY0
    }
    var aH3 = () => {
            return {
                name: Gt2,
                setupOnce() {},
                processEvent(A) {
                    return A.modules = {
                        ...A.modules,
                        ...nH3()
                    }, A
                }
            }
        },
        Zt2 = Bt2.defineIntegration(aH3),
        sH3 = Bt2.convertIntegrationFnToClass(Gt2, Zt2);
    It2.Modules = sH3;
    It2.modulesIntegration = Zt2
});
var MY0 = U((Yt2) => {
    Object.defineProperty(Yt2, "__esModule", {
        value: !0
    });
    var tH3 = P4(),
        iG1 = l0(),
        LY0 = MPA(),
        eH3 = 2000;

    function AC3(A) {
        iG1.consoleSandbox(() => {
            console.error(A)
        });
        let Q = tH3.getClient();
        if (Q === void 0) LY0.DEBUG_BUILD && iG1.logger.warn("No NodeClient was defined, we are exiting the process now."), global.process.exit(1);
        let B = Q.getOptions(),
            G = B && B.shutdownTimeout && B.shutdownTimeout > 0 && B.shutdownTimeout || eH3;
        Q.close(G).then((Z) => {
            if (!Z) LY0.DEBUG_BUILD && iG1.logger.warn("We reached the timeout for emptying the request buffer, still exiting now!");
            global.process.exit(1)
        }, (Z) => {
            LY0.DEBUG_BUILD && iG1.logger.error(Z)
        })
    }
    Yt2.logAndExitProcess = AC3
});
var aG1 = U((Vt2) => {
    Object.defineProperty(Vt2, "__esModule", {
        value: !0
    });
    var nG1 = P4(),
        BC3 = l0(),
        GC3 = MPA(),
        Jt2 = MY0(),
        Wt2 = "OnUncaughtException",
        ZC3 = (A = {}) => {
            let Q = {
                exitEvenIfOtherHandlersAreRegistered: !0,
                ...A
            };
            return {
                name: Wt2,
                setupOnce() {},
                setup(B) {
                    global.process.on("uncaughtException", Ft2(B, Q))
                }
            }
        },
        Xt2 = nG1.defineIntegration(ZC3),
        IC3 = nG1.convertIntegrationFnToClass(Wt2, Xt2);

    function Ft2(A, Q) {
        let G = !1,
            Z = !1,
            I = !1,
            Y, J = A.getOptions();
        return Object.assign((W) => {
            let X = Jt2.logAndExitProcess;
            if (Q.onFatalError) X = Q.onFatalError;
            else if (J.onFatalError) X = J.onFatalError;
            let V = global.process.listeners("uncaughtException").reduce((D, H) => {
                    if (H.name === "domainUncaughtExceptionClear" || H.tag && H.tag === "sentry_tracingErrorCallback" || H._errorHandler) return D;
                    else return D + 1
                }, 0) === 0,
                K = Q.exitEvenIfOtherHandlersAreRegistered || V;
            if (!G) {
                if (Y = W, G = !0, nG1.getClient() === A) nG1.captureException(W, {
                    originalException: W,
                    captureContext: {
                        level: "fatal"
                    },
                    mechanism: {
                        handled: !1,
                        type: "onuncaughtexception"
                    }
                });
                if (!I && K) I = !0, X(W)
            } else if (K) {
                if (I) GC3.DEBUG_BUILD && BC3.logger.warn("uncaught exception after calling fatal error shutdown callback - this is bad! forcing shutdown"), Jt2.logAndExitProcess(W);
                else if (!Z) Z = !0, setTimeout(() => {
                    if (!I) I = !0, X(Y, W)
                }, 2000)
            }
        }, {
            _errorHandler: !0
        })
    }
    Vt2.OnUncaughtException = IC3;
    Vt2.makeErrorHandler = Ft2;
    Vt2.onUncaughtExceptionIntegration = Xt2
});
var rG1 = U((Et2) => {
    Object.defineProperty(Et2, "__esModule", {
        value: !0
    });
    var sG1 = P4(),
        Kt2 = l0(),
        XC3 = MY0(),
        Dt2 = "OnUnhandledRejection",
        FC3 = (A = {}) => {
            let Q = A.mode || "warn";
            return {
                name: Dt2,
                setupOnce() {},
                setup(B) {
                    global.process.on("unhandledRejection", Ct2(B, {
                        mode: Q
                    }))
                }
            }
        },
        Ht2 = sG1.defineIntegration(FC3),
        VC3 = sG1.convertIntegrationFnToClass(Dt2, Ht2);

    function Ct2(A, Q) {
        return function(G, Z) {
            if (sG1.getClient() !== A) return;
            sG1.captureException(G, {
                originalException: Z,
                captureContext: {
                    extra: {
                        unhandledPromiseRejection: !0
                    }
                },
                mechanism: {
                    handled: !1,
                    type: "onunhandledrejection"
                }
            }), KC3(G, Q)
        }
    }

    function KC3(A, Q) {
        let B = "This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason:";
        if (Q.mode === "warn") Kt2.consoleSandbox(() => {
            console.warn(B), console.error(A && A.stack ? A.stack : A)
        });
        else if (Q.mode === "strict") Kt2.consoleSandbox(() => {
            console.warn(B)
        }), XC3.logAndExitProcess(A)
    }
    Et2.OnUnhandledRejection = VC3;
    Et2.makeUnhandledPromiseHandler = Ct2;
    Et2.onUnhandledRejectionIntegration = Ht2
});
var oG1 = U((qt2) => {
    Object.defineProperty(qt2, "__esModule", {
        value: !0
    });
    var EC3 = UA("http"),
        zC3 = UA("url"),
        zt2 = P4(),
        EXA = l0(),
        Ut2 = "Spotlight",
        UC3 = (A = {}) => {
            let Q = {
                sidecarUrl: A.sidecarUrl || "http://localhost:8969/stream"
            };
            return {
                name: Ut2,
                setupOnce() {},
                setup(B) {
                    if (typeof process === "object" && process.env) EXA.logger.warn("[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?");
                    wC3(B, Q)
                }
            }
        },
        $t2 = zt2.defineIntegration(UC3),
        $C3 = zt2.convertIntegrationFnToClass(Ut2, $t2);

    function wC3(A, Q) {
        let B = qC3(Q.sidecarUrl);
        if (!B) return;
        let G = 0;
        if (typeof A.on !== "function") {
            EXA.logger.warn("[Spotlight] Cannot connect to spotlight due to missing method on SDK client (`client.on`)");
            return
        }
        A.on("beforeEnvelope", (Z) => {
            if (G > 3) {
                EXA.logger.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests");
                return
            }
            let I = EXA.serializeEnvelope(Z),
                J = wt2()({
                    method: "POST",
                    path: B.pathname,
                    hostname: B.hostname,
                    port: B.port,
                    headers: {
                        "Content-Type": "application/x-sentry-envelope"
                    }
                }, (W) => {
                    W.on("data", () => {}), W.on("end", () => {}), W.setEncoding("utf8")
                });
            J.on("error", () => {
                G++, EXA.logger.warn("[Spotlight] Failed to send envelope to Spotlight Sidecar")
            }), J.write(I), J.end()
        })
    }

    function qC3(A) {
        try {
            return new zC3.URL(`${A}`)
        } catch (Q) {
            EXA.logger.warn(`[Spotlight] Invalid sidecar URL: ${A}`);
            return
        }
    }

    function wt2() {
        let {
            request: A
        } = EC3;
        if (NC3(A)) return A.__sentry_original__;
        return A
    }

    function NC3(A) {
        return "__sentry_original__" in A
    }
    qt2.Spotlight = $C3;
    qt2.getNativeHttpRequest = wt2;
    qt2.spotlightIntegration = $t2
});
var eG1 = U((Nt2) => {
    var {
        _optionalChain: tG1
    } = l0();
    Object.defineProperty(Nt2, "__esModule", {
        value: !0
    });
    var QF = P4(),
        AQA = l0(),
        RC3 = r0A();
    Nt2.ChannelName = void 0;
    (function(A) {
        A.RequestCreate = "undici:request:create";
        let B = "undici:request:headers";
        A.RequestEnd = B;
        let G = "undici:request:error";
        A.RequestError = G
    })(Nt2.ChannelName || (Nt2.ChannelName = {}));
    var TC3 = (A) => {
            return new w$(A)
        },
        PC3 = QF.defineIntegration(TC3);
    class w$ {
        static __initStatic() {
            this.id = "Undici"
        }
        __init() {
            this.name = w$.id
        }
        __init2() {
            this._createSpanUrlMap = new AQA.LRUMap(100)
        }
        __init3() {
            this._headersUrlMap = new AQA.LRUMap(100)
        }
        constructor(A = {}) {
            w$.prototype.__init.call(this), w$.prototype.__init2.call(this), w$.prototype.__init3.call(this), w$.prototype.__init4.call(this), w$.prototype.__init5.call(this), w$.prototype.__init6.call(this), this._options = {
                breadcrumbs: A.breadcrumbs === void 0 ? !0 : A.breadcrumbs,
                tracing: A.tracing,
                shouldCreateSpanForRequest: A.shouldCreateSpanForRequest
            }
        }
        setupOnce(A) {
            if (RC3.NODE_VERSION.major < 16) return;
            let Q;
            try {
                Q = UA("diagnostics_channel")
            } catch (B) {}
            if (!Q || !Q.subscribe) return;
            Q.subscribe(Nt2.ChannelName.RequestCreate, this._onRequestCreate), Q.subscribe(Nt2.ChannelName.RequestEnd, this._onRequestEnd), Q.subscribe(Nt2.ChannelName.RequestError, this._onRequestError)
        }
        _shouldCreateSpan(A) {
            if (this._options.tracing === !1 || this._options.tracing === void 0 && !QF.hasTracingEnabled()) return !1;
            if (this._options.shouldCreateSpanForRequest === void 0) return !0;
            let Q = this._createSpanUrlMap.get(A);
            if (Q !== void 0) return Q;
            let B = this._options.shouldCreateSpanForRequest(A);
            return this._createSpanUrlMap.set(A, B), B
        }
        __init4() {
            this._onRequestCreate = (A) => {
                if (!tG1([QF.getClient, "call", (F) => F(), "optionalAccess", (F) => F.getIntegration, "call", (F) => F(w$)])) return;
                let {
                    request: Q
                } = A, B = Q.origin ? Q.origin.toString() + Q.path : Q.path, G = QF.getClient();
                if (!G) return;
                if (QF.isSentryRequestUrl(B, G) || Q.__sentry_span__ !== void 0) return;
                let Z = G.getOptions(),
                    I = QF.getCurrentScope(),
                    Y = QF.getIsolationScope(),
                    J = QF.getActiveSpan(),
                    W = this._shouldCreateSpan(B) ? SC3(J, Q, B) : void 0;
                if (W) Q.__sentry_span__ = W;
                if (((F) => {
                        if (Z.tracePropagationTargets === void 0) return !0;
                        let V = this._headersUrlMap.get(F);
                        if (V !== void 0) return V;
                        let K = AQA.stringMatchesSomePattern(F, Z.tracePropagationTargets);
                        return this._headersUrlMap.set(F, K), K
                    })(B)) {
                    let {
                        traceId: F,
                        spanId: V,
                        sampled: K,
                        dsc: D
                    } = {
                        ...Y.getPropagationContext(),
                        ...I.getPropagationContext()
                    }, H = W ? QF.spanToTraceHeader(W) : AQA.generateSentryTraceHeader(F, V, K), C = AQA.dynamicSamplingContextToSentryBaggageHeader(D || (W ? QF.getDynamicSamplingContextFromSpan(W) : QF.getDynamicSamplingContextFromClient(F, G, I)));
                    jC3(Q, H, C)
                }
            }
        }
        __init5() {
            this._onRequestEnd = (A) => {
                if (!tG1([QF.getClient, "call", (I) => I(), "optionalAccess", (I) => I.getIntegration, "call", (I) => I(w$)])) return;
                let {
                    request: Q,
                    response: B
                } = A, G = Q.origin ? Q.origin.toString() + Q.path : Q.path;
                if (QF.isSentryRequestUrl(G, QF.getClient())) return;
                let Z = Q.__sentry_span__;
                if (Z) QF.setHttpStatus(Z, B.statusCode), Z.end();
                if (this._options.breadcrumbs) QF.addBreadcrumb({
                    category: "http",
                    data: {
                        method: Q.method,
                        status_code: B.statusCode,
                        url: G
                    },
                    type: "http"
                }, {
                    event: "response",
                    request: Q,
                    response: B
                })
            }
        }
        __init6() {
            this._onRequestError = (A) => {
                if (!tG1([QF.getClient, "call", (Z) => Z(), "optionalAccess", (Z) => Z.getIntegration, "call", (Z) => Z(w$)])) return;
                let {
                    request: Q
                } = A, B = Q.origin ? Q.origin.toString() + Q.path : Q.path;
                if (QF.isSentryRequestUrl(B, QF.getClient())) return;
                let G = Q.__sentry_span__;
                if (G) G.setStatus("internal_error"), G.end();
                if (this._options.breadcrumbs) QF.addBreadcrumb({
                    category: "http",
                    data: {
                        method: Q.method,
                        url: B
                    },
                    level: "error",
                    type: "http"
                }, {
                    event: "error",
                    request: Q
                })
            }
        }
    }
    w$.__initStatic();

    function jC3(A, Q, B) {
        let G;
        if (Array.isArray(A.headers)) G = A.headers.some((Z) => Z === "sentry-trace");
        else G = A.headers.split(`\r
`).some((I) => I.startsWith("sentry-trace:"));
        if (G) return;
        if (A.addHeader("sentry-trace", Q), B) A.addHeader("baggage", B)
    }

    function SC3(A, Q, B) {
        let G = AQA.parseUrl(B),
            Z = Q.method || "GET",
            I = {
                "http.method": Z
            };
        if (G.search) I["http.query"] = G.search;
        if (G.hash) I["http.fragment"] = G.hash;
        return tG1([A, "optionalAccess", (Y) => Y.startChild, "call", (Y) => Y({
            op: "http.client",
            origin: "auto.http.node.undici",
            description: `${Z} ${AQA.getSanitizedUrlString(G)}`,
            data: I
        })])
    }
    Nt2.Undici = w$;
    Nt2.nativeNodeFetchintegration = PC3
});
var OY0 = U((Ot2) => {
    Object.defineProperty(Ot2, "__esModule", {
        value: !0
    });
    var Lt2 = UA("path"),
        yC3 = l0();

    function Mt2(A) {
        return A.replace(/^[A-Z]:/, "").replace(/\\/g, "/")
    }

    function xC3(A = process.argv[1] ? yC3.dirname(process.argv[1]) : process.cwd(), Q = Lt2.sep === "\\") {
        let B = Q ? Mt2(A) : A;
        return (G) => {
            if (!G) return;
            let Z = Q ? Mt2(G) : G,
                {
                    dir: I,
                    base: Y,
                    ext: J
                } = Lt2.posix.parse(Z);
            if (J === ".js" || J === ".mjs" || J === ".cjs") Y = Y.slice(0, J.length * -1);
            if (!I) I = ".";
            let W = I.lastIndexOf("/node_modules");
            if (W > -1) return `${I.slice(W+14).replace(/\//g,".")}:${Y}`;
            if (I.startsWith(B)) {
                let X = I.slice(B.length + 1).replace(/\//g, ".");
                if (X) X += ":";
                return X += Y, X
            }
            return Y
        }
    }
    Ot2.createGetModuleFromFilename = xC3
});
var RY0 = U((St2) => {
    var {
        _optionalChain: bC3
    } = l0();
    Object.defineProperty(St2, "__esModule", {
        value: !0
    });
    var TO = P4(),
        QQA = l0(),
        fC3 = Co2(),
        hC3 = FY0(),
        gC3 = fG1(),
        uC3 = hG1(),
        mC3 = uG1(),
        dC3 = mG1(),
        cC3 = pG1(),
        pC3 = lG1(),
        lC3 = aG1(),
        iC3 = rG1(),
        nC3 = oG1(),
        aC3 = eG1(),
        sC3 = OY0(),
        rC3 = DY0(),
        Rt2 = [TO.inboundFiltersIntegration(), TO.functionToStringIntegration(), TO.linkedErrorsIntegration(), TO.requestDataIntegration(), gC3.consoleIntegration(), dC3.httpIntegration(), aC3.nativeNodeFetchintegration(), lC3.onUncaughtExceptionIntegration(), iC3.onUnhandledRejectionIntegration(), mC3.contextLinesIntegration(), cC3.localVariablesIntegration(), uC3.nodeContextIntegration(), pC3.modulesIntegration()];

    function Tt2(A) {
        let Q = TO.getMainCarrier(),
            B = bC3([Q, "access", (G) => G.__SENTRY__, "optionalAccess", (G) => G.integrations]) || [];
        return [...Rt2, ...B]
    }

    function oC3(A = {}) {
        if (fC3.setNodeAsyncContextStrategy(), A.defaultIntegrations === void 0) A.defaultIntegrations = Tt2();
        if (A.dsn === void 0 && process.env.SENTRY_DSN) A.dsn = process.env.SENTRY_DSN;
        let Q = process.env.SENTRY_TRACES_SAMPLE_RATE;
        if (A.tracesSampleRate === void 0 && Q) {
            let G = parseFloat(Q);
            if (isFinite(G)) A.tracesSampleRate = G
        }
        if (A.release === void 0) {
            let G = Pt2();
            if (G !== void 0) A.release = G;
            else A.autoSessionTracking = !1
        }
        if (A.environment === void 0 && process.env.SENTRY_ENVIRONMENT) A.environment = process.env.SENTRY_ENVIRONMENT;