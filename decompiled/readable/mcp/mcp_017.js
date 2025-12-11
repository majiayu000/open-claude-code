/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_017.js
 * 处理时间: 2025-12-09T03:41:37.936Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 17/29
 * Lines: 387318 - 388817 (1500 lines)
 * Original file: cli.js
 */

    function YA9(A) {
        let Q = `HTTP Client Error with status code: TextComponent{A.status}`,
            B = {
                message: Q,
                exception: {
                    values: [{
                        type: "Error",
                        value: Q
                    }]
                },
                request: {
                    url: A.url,
                    method: A.method,
                    headers: A.requestHeaders,
                    cookies: A.requestCookies
                },
                contexts: {
                    response: {
                        status_code: A.status,
                        headers: A.responseHeaders,
                        cookies: A.responseCookies,
                        body_size: bU3(A.responseHeaders)
                    }
                }
            };
        return ay.addExceptionMechanism(B, {
            type: "http.client",
            handled: !1
        }), B
    }

    function cU3(A, Q) {
        if (!Q && A instanceof Request) return A;
        if (A instanceof Request && A.bodyUsed) return A;
        return new Request(A, Q)
    }

    function JA9() {
        let A = Hg.getClient();
        return A ? Boolean(A.getOptions().sendDefaultPii) : !1
    }
    WA9.HttpClient = yU3;
    WA9.httpClientIntegration = GA9
});
var CA9 = moduleWrapper((HA9) => {
    Object.defineProperty(HA9, "__esModule", {
        value: !0
    });
    var FA9 = P4(),
        xY0 = l0(),
        yY0 = xY0.GLOBAL_OBJ,
        iU3 = 7,
        VA9 = "ContextLines",
        nU3 = (A = {}) => {
            let Q = A.frameContextLines != null ? A.frameContextLines : iU3;
            return {
                name: VA9,
                setupOnce() {},
                processEvent(B) {
                    return sU3(B, Q)
                }
            }
        },
        KA9 = FA9.defineIntegration(nU3),
        aU3 = FA9.convertIntegrationFnToClass(VA9, KA9);

    function sU3(A, Q) {
        let B = yY0.document,
            G = yY0.location && xY0.stripUrlQueryAndFragment(yY0.location.href);
        if (!B || !G) return A;
        let Z = A.exception && A.exception.values;
        if (!Z || !Z.length) return A;
        let I = B.documentElement.innerHTML;
        if (!I) return A;
        let Y = ["<!DOCTYPE html>", "<html>", ...I.split(`
`), "</html>"];
        return Z.forEach((J) => {
            let W = J.stacktrace;
            if (W && W.frames) W.frames = W.frames.map((X) => DA9(X, Y, G, Q))
        }), A
    }

    function DA9(A, Q, B, G) {
        if (A.filename !== B || !A.lineno || !Q.length) return A;
        return xY0.addContextToFrame(Q, A, G), A
    }
    HA9.ContextLines = aU3;
    HA9.applySourceContextToFrame = DA9;
    HA9.contextLinesIntegration = KA9
});
var RA9 = moduleWrapper((OA9) => {
    Object.defineProperty(OA9, "__esModule", {
        value: !0
    });
    var EA9 = Fe2(),
        zA9 = Ce2(),
        UA9 = Re2(),
        $A9 = _e2(),
        eU3 = ve2(),
        wA9 = me2(),
        qA9 = ne2(),
        NA9 = te2(),
        A$3 = QA9(),
        LA9 = XA9(),
        MA9 = CA9();
    OA9.CaptureConsole = EA9.CaptureConsole;
    OA9.captureConsoleIntegration = EA9.captureConsoleIntegration;
    OA9.Debug = zA9.Debug;
    OA9.debugIntegration = zA9.debugIntegration;
    OA9.Dedupe = UA9.Dedupe;
    OA9.dedupeIntegration = UA9.dedupeIntegration;
    OA9.ExtraErrorData = $A9.ExtraErrorData;
    OA9.extraErrorDataIntegration = $A9.extraErrorDataIntegration;
    OA9.Offline = eU3.Offline;
    OA9.ReportingObserver = wA9.ReportingObserver;
    OA9.reportingObserverIntegration = wA9.reportingObserverIntegration;
    OA9.RewriteFrames = qA9.RewriteFrames;
    OA9.rewriteFramesIntegration = qA9.rewriteFramesIntegration;
    OA9.SessionTiming = NA9.SessionTiming;
    OA9.sessionTimingIntegration = NA9.sessionTimingIntegration;
    OA9.Transaction = A$3.Transaction;
    OA9.HttpClient = LA9.HttpClient;
    OA9.httpClientIntegration = LA9.httpClientIntegration;
    OA9.ContextLines = MA9.ContextLines;
    OA9.contextLinesIntegration = MA9.contextLinesIntegration
});
var YZ1 = moduleWrapper((TA9) => {
    Object.defineProperty(TA9, "__esModule", {
        value: !0
    });
    var q$3 = [
        ["january", "1"],
        ["february", "2"],
        ["march", "3"],
        ["april", "4"],
        ["may", "5"],
        ["june", "6"],
        ["july", "7"],
        ["august", "8"],
        ["september", "9"],
        ["october", "10"],
        ["november", "11"],
        ["december", "12"],
        ["jan", "1"],
        ["feb", "2"],
        ["mar", "3"],
        ["apr", "4"],
        ["may", "5"],
        ["jun", "6"],
        ["jul", "7"],
        ["aug", "8"],
        ["sep", "9"],
        ["oct", "10"],
        ["nov", "11"],
        ["dec", "12"],
        ["sunday", "0"],
        ["monday", "1"],
        ["tuesday", "2"],
        ["wednesday", "3"],
        ["thursday", "4"],
        ["friday", "5"],
        ["saturday", "6"],
        ["sun", "0"],
        ["mon", "1"],
        ["tue", "2"],
        ["wed", "3"],
        ["thu", "4"],
        ["fri", "5"],
        ["sat", "6"]
    ];

    function N$3(A) {
        return q$3.reduce((Q, [B, G]) => Q.replace(new RegExp(B, "gi"), G), A)
    }
    TA9.replaceCronNames = N$3
});
var kA9 = moduleWrapper((_A9) => {
    Object.defineProperty(_A9, "__esModule", {
        value: !0
    });
    var PA9 = P4(),
        jA9 = YZ1(),
        SA9 = "Automatic instrumentation of CronJob only supports crontab string";

    function M$3(A, Q) {
        let B = !1;
        return new Proxy(A, {
            construct(G, Z) {
                let [I, Y, J, W, X, ...F] = Z;
                if (typeof I !== "string") throw Error(SA9);
                if (B) throw Error(`A job named 'TextComponent{Q}' has already been scheduled`);
                B = !0;
                let V = jA9.replaceCronNames(I);

                function K(D, H) {
                    return PA9.withMonitor(Q, () => {
                        return Y(D, H)
                    }, {
                        schedule: {
                            type: "crontab",
                            value: V
                        },
                        timezone: X || void 0
                    })
                }
                return new G(I, K, J, W, X, ...F)
            },
            get(G, Z) {
                if (Z === "from") return (I) => {
                    let {
                        cronTime: Y,
                        onTick: J,
                        timeZone: W
                    } = I;
                    if (typeof Y !== "string") throw Error(SA9);
                    if (B) throw Error(`A job named 'TextComponent{Q}' has already been scheduled`);
                    B = !0;
                    let X = jA9.replaceCronNames(Y);
                    return I.onTick = (F, V) => {
                        return PA9.withMonitor(Q, () => {
                            return J(F, V)
                        }, {
                            schedule: {
                                type: "crontab",
                                value: X
                            },
                            timezone: W || void 0
                        })
                    }, G.from(I)
                };
                else return G[Z]
            }
        })
    }
    _A9.instrumentCron = M$3
});
var vA9 = moduleWrapper((xA9) => {
    var {
        _optionalChain: yA9
    } = l0();
    Object.defineProperty(xA9, "__esModule", {
        value: !0
    });
    var R$3 = P4(),
        T$3 = YZ1();

    function P$3(A) {
        return new Proxy(A, {
            get(Q, B) {
                if (B === "schedule" && Q.schedule) return new Proxy(Q.schedule, {
                    apply(G, Z, I) {
                        let [Y, , J] = I;
                        if (!yA9([J, "optionalAccess", (W) => W.name])) throw Error('Missing "name" for scheduled job. A name is required for Sentry check-in monitoring.');
                        return R$3.withMonitor(J.name, () => {
                            return G.apply(Z, I)
                        }, {
                            schedule: {
                                type: "crontab",
                                value: T$3.replaceCronNames(Y)
                            },
                            timezone: yA9([J, "optionalAccess", (W) => W.timezone])
                        })
                    }
                });
                else return Q[B]
            }
        })
    }
    xA9.instrumentNodeCron = P$3
});
var fA9 = moduleWrapper((bA9) => {
    Object.defineProperty(bA9, "__esModule", {
        value: !0
    });
    var S$3 = P4(),
        _$3 = YZ1();

    function k$3(A) {
        return new Proxy(A, {
            get(Q, B) {
                if (B === "scheduleJob") return new Proxy(Q.scheduleJob, {
                    apply(G, Z, I) {
                        let [Y, J] = I;
                        if (typeof Y !== "string" || typeof J !== "string") throw Error("Automatic instrumentation of 'node-schedule' requires the first parameter of 'scheduleJob' to be a job name string and the second parameter to be a crontab string");
                        let W = Y,
                            X = J;
                        return S$3.withMonitor(W, () => {
                            return G.apply(Z, I)
                        }, {
                            schedule: {
                                type: "crontab",
                                value: _$3.replaceCronNames(X)
                            }
                        })
                    }
                });
                return Q[B]
            }
        })
    }
    bA9.instrumentNodeSchedule = k$3
});
var bY0 = moduleWrapper((dA9) => {
    Object.defineProperty(dA9, "__esModule", {
        value: !0
    });
    var M2 = P4(),
        x$3 = cr2(),
        v$3 = FY0(),
        b$3 = DY0(),
        jPA = RY0(),
        vY0 = l0(),
        f$3 = kt2(),
        hA9 = OY0(),
        h$3 = ut2(),
        g$3 = st2(),
        u$3 = Ze2(),
        m$3 = Ye2(),
        rn = RA9(),
        d$3 = fG1(),
        c$3 = aG1(),
        p$3 = rG1(),
        l$3 = lG1(),
        i$3 = uG1(),
        n$3 = hG1(),
        a$3 = pG1(),
        s$3 = oG1(),
        r$3 = BZ1(),
        gA9 = _Y0(),
        uA9 = eG1(),
        mA9 = mG1(),
        o$3 = SY0(),
        t$3 = kA9(),
        e$3 = vA9(),
        Aw3 = fA9(),
        Qw3 = hA9.createGetModuleFromFilename(),
        Bw3 = {
            ...M2.Integrations,
            ...u$3,
            ...m$3
        },
        Gw3 = {
            instrumentCron: t$3.instrumentCron,
            instrumentNodeCron: e$3.instrumentNodeCron,
            instrumentNodeSchedule: Aw3.instrumentNodeSchedule
        };
    dA9.Hub = M2.Hub;
    dA9.SDK_VERSION = M2.SDK_VERSION;
    dA9.SEMANTIC_ATTRIBUTE_SENTRY_OP = M2.SEMANTIC_ATTRIBUTE_SENTRY_OP;
    dA9.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = M2.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
    dA9.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = M2.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
    dA9.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = M2.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
    dA9.Scope = M2.Scope;
    dA9.addBreadcrumb = M2.addBreadcrumb;
    dA9.addEventProcessor = M2.addEventProcessor;
    dA9.addGlobalEventProcessor = M2.addGlobalEventProcessor;
    dA9.addIntegration = M2.addIntegration;
    dA9.captureCheckIn = M2.captureCheckIn;
    dA9.captureEvent = M2.captureEvent;
    dA9.captureException = M2.captureException;
    dA9.captureMessage = M2.captureMessage;
    dA9.captureSession = M2.captureSession;
    dA9.close = M2.close;
    dA9.configureScope = M2.configureScope;
    dA9.continueTrace = M2.continueTrace;
    dA9.createTransport = M2.createTransport;
    dA9.endSession = M2.endSession;
    dA9.extractTraceparentData = M2.extractTraceparentData;
    dA9.flush = M2.flush;
    dA9.functionToStringIntegration = M2.functionToStringIntegration;
    dA9.getActiveSpan = M2.getActiveSpan;
    dA9.getActiveTransaction = M2.getActiveTransaction;
    dA9.getClient = M2.getClient;
    dA9.getCurrentHub = M2.getCurrentHub;
    dA9.getCurrentScope = M2.getCurrentScope;
    dA9.getGlobalScope = M2.getGlobalScope;
    dA9.getHubFromCarrier = M2.getHubFromCarrier;
    dA9.getIsolationScope = M2.getIsolationScope;
    dA9.getSpanStatusFromHttpCode = M2.getSpanStatusFromHttpCode;
    dA9.inboundFiltersIntegration = M2.inboundFiltersIntegration;
    dA9.isInitialized = M2.isInitialized;
    dA9.lastEventId = M2.lastEventId;
    dA9.linkedErrorsIntegration = M2.linkedErrorsIntegration;
    dA9.makeMain = M2.makeMain;
    dA9.metrics = M2.metrics;
    dA9.parameterize = M2.parameterize;
    dA9.requestDataIntegration = M2.requestDataIntegration;
    dA9.runWithAsyncContext = M2.runWithAsyncContext;
    dA9.setContext = M2.setContext;
    dA9.setCurrentClient = M2.setCurrentClient;
    dA9.setExtra = M2.setExtra;
    dA9.setExtras = M2.setExtras;
    dA9.setHttpStatus = M2.setHttpStatus;
    dA9.setMeasurement = M2.setMeasurement;
    dA9.setTag = M2.setTag;
    dA9.setTags = M2.setTags;
    dA9.setUser = M2.setUser;
    dA9.spanStatusfromHttpCode = M2.spanStatusfromHttpCode;
    dA9.startActiveSpan = M2.startActiveSpan;
    dA9.startInactiveSpan = M2.startInactiveSpan;
    dA9.startSession = M2.startSession;
    dA9.startSpan = M2.startSpan;
    dA9.startSpanManual = M2.startSpanManual;
    dA9.startTransaction = M2.startTransaction;
    dA9.trace = M2.trace;
    dA9.withActiveSpan = M2.withActiveSpan;
    dA9.withIsolationScope = M2.withIsolationScope;
    dA9.withMonitor = M2.withMonitor;
    dA9.withScope = M2.withScope;
    dA9.autoDiscoverNodePerformanceMonitoringIntegrations = x$3.autoDiscoverNodePerformanceMonitoringIntegrations;
    dA9.NodeClient = v$3.NodeClient;
    dA9.makeNodeTransport = b$3.makeNodeTransport;
    dA9.defaultIntegrations = jPA.defaultIntegrations;
    dA9.defaultStackParser = jPA.defaultStackParser;
    dA9.getDefaultIntegrations = jPA.getDefaultIntegrations;
    dA9.getSentryRelease = jPA.getSentryRelease;
    dA9.init = jPA.init;
    dA9.DEFAULT_USER_INCLUDES = vY0.DEFAULT_USER_INCLUDES;
    dA9.addRequestDataToEvent = vY0.addRequestDataToEvent;
    dA9.extractRequestData = vY0.extractRequestData;
    dA9.deepReadDirSync = f$3.deepReadDirSync;
    dA9.createGetModuleFromFilename = hA9.createGetModuleFromFilename;
    dA9.enableAnrDetection = h$3.enableAnrDetection;
    dA9.Handlers = g$3;
    dA9.captureConsoleIntegration = rn.captureConsoleIntegration;
    dA9.debugIntegration = rn.debugIntegration;
    dA9.dedupeIntegration = rn.dedupeIntegration;
    dA9.extraErrorDataIntegration = rn.extraErrorDataIntegration;
    dA9.httpClientIntegration = rn.httpClientIntegration;
    dA9.reportingObserverIntegration = rn.reportingObserverIntegration;
    dA9.rewriteFramesIntegration = rn.rewriteFramesIntegration;
    dA9.sessionTimingIntegration = rn.sessionTimingIntegration;
    dA9.consoleIntegration = d$3.consoleIntegration;
    dA9.onUncaughtExceptionIntegration = c$3.onUncaughtExceptionIntegration;
    dA9.onUnhandledRejectionIntegration = p$3.onUnhandledRejectionIntegration;
    dA9.modulesIntegration = l$3.modulesIntegration;
    dA9.contextLinesIntegration = i$3.contextLinesIntegration;
    dA9.nodeContextIntegration = n$3.nodeContextIntegration;
    dA9.localVariablesIntegration = a$3.localVariablesIntegration;
    dA9.spotlightIntegration = s$3.spotlightIntegration;
    dA9.anrIntegration = r$3.anrIntegration;
    dA9.hapiErrorPlugin = gA9.hapiErrorPlugin;
    dA9.hapiIntegration = gA9.hapiIntegration;
    dA9.Undici = uA9.Undici;
    dA9.nativeNodeFetchintegration = uA9.nativeNodeFetchintegration;
    dA9.Http = mA9.Http;
    dA9.httpIntegration = mA9.httpIntegration;
    dA9.trpcMiddleware = o$3.trpcMiddleware;
    dA9.Integrations = Bw3;
    dA9.cron = Gw3;
    dA9.getModuleFromFilename = Qw3
});
var cA9, pA9, YQA;
var JZ1 = lazyLoader(() => {
    cA9 = esmImport(VA(), 1), pA9 = esmImport(bY0(), 1);
    YQA = class YQA extends cA9.Component {
        constructor(A) {
            super(A);
            this.state = {
                hasError: !1
            }
        }
        static getDerivedStateFromError() {
            return {
                hasError: !0
            }
        }
        componentDidCatch(A) {
            try {
                pA9.captureException(A)
            } catch {}
        }
        render() {
            if (this.state.hasError) return null;
            return this.props.children
        }
    }
});

function QN3() {
    if (ot() === "sonnet") {
        let {
            hasAccess: Q
        } = Kp();
        if (Q) return {
            alias: "sonnet[1m]",
            name: "Sonnet 1M",
            multiplier: 5
        }
    }
    return null
}

function JQA(A) {
    let Q = QN3();
    if (!Q) return null;
    switch (A) {
        case "warning":
            return `/model TextComponent{Q.alias} for more context`;
        case "tip":
            return `Tip: You have access to TextComponent{Q.name} with TextComponent{Q.multiplier}x more context`;
        default:
            return null
    }
}
var WZ1 = lazyLoader(() => {
    s2();
    vsA()
});

function lA9({
    tokenUsage: A
}) {
    let {
        percentLeft: Q,
        isAboveWarningThreshold: B,
        isAboveErrorThreshold: G
    } = L1A(A), Z = AI2();
    if (!B || Z) return null;
    let I = O1A(),
        Y = JQA("warning");
    return WQA.createElement(j, {
        flexDirection: "row"
    }, I ? WQA.createElement(TextComponent, {
        dimColor: !0
    }, Y ? `Context left until auto-compact: TextComponent{Q}% · TextComponent{Y}` : `Context left until auto-compact: TextComponent{Q}%`) : WQA.createElement(TextComponent, {
        color: G ? "error" : "warning"
    }, Y ? `Context low (TextComponent{Q}% remaining) · TextComponent{Y}` : `Context low (TextComponent{Q}% remaining) · Run /compact to compact & continue`))
}
var WQA;
var iA9 = lazyLoader(() => {
    hA();
    M1A();
    N1A();
    WZ1();
    WQA = esmImport(VA(), 1)
});

function nA9(A) {
    return L1A(A).isAboveWarningThreshold
}
var aA9 = lazyLoader(() => {
    M1A()
});

function wXA(A) {
    return sA9.useMemo(() => {
        let Q = A?.find((B) => B.name === "ide");
        if (!Q) return null;
        return Q.type === "connected" ? "connected" : "disconnected"
    }, [A])
}
var sA9;
var XZ1 = lazyLoader(() => {
    sA9 = esmImport(VA(), 1)
});
import {
    basename as BN3
} from "path";

function rA9({
    ideSelection: A,
    mcpClients: Q
}) {
    let B = wXA(Q),
        G = B === "connected" && (A?.filePath || A?.text && A.lineCount > 0);
    if (B === null || !G || !A) return null;
    if (A.text && A.lineCount > 0) return SPA.createElement(TextComponent, {
        color: "ide",
        key: "selection-indicator"
    }, "⧉ ", A.lineCount, " ", A.lineCount === 1 ? "line" : "lines", " selected");
    if (A.filePath) return SPA.createElement(TextComponent, {
        color: "ide",
        key: "selection-indicator"
    }, "⧉ In ", BN3(A.filePath))
}
var SPA;
var oA9 = lazyLoader(() => {
    hA();
    XZ1();
    SPA = esmImport(VA(), 1)
});

function eA9() {
    let [A, Q] = tA9.useState(null);

    function B() {
        return
    }
    return dY(B, 1e4), A
}
var tA9, GN3 = 2147483648,
    ZN3 = 2684354560;
var A19 = lazyLoader(() => {
    $U();
    tA9 = esmImport(VA(), 1)
});

function Q19() {
    let A = eA9();
    return null
}
var _PA;
var B19 = lazyLoader(() => {
    hA();
    A19();
    M9();
    _PA = esmImport(VA(), 1)
});

function G19() {
    let [A, Q] = qXA.useState(0), B = qXA.useRef(null);
    if (qXA.useEffect(() => {
            if (!lQ.isSandboxingEnabled()) return;
            let G = lQ.getSandboxViolationStore(),
                Z = G.getTotalCount(),
                I = G.subscribe(() => {
                    let Y = G.getTotalCount(),
                        J = Y - Z;
                    if (J > 0) {
                        if (Q(J), Z = Y, B.current) clearTimeout(B.current);
                        B.current = setTimeout(() => {
                            Q(0)
                        }, 5000)
                    }
                });
            return () => {
                if (I(), B.current) clearTimeout(B.current)
            }
        }, []), !lQ.isSandboxingEnabled() || A === 0) return null;
    return kPA.createElement(j, {
        paddingX: 0,
        paddingY: 0
    }, kPA.createElement(TextComponent, {
        color: "inactive"
    }, "⧈ Sandbox blocked ", A, " ", A === 1 ? "operation" : "operations", " · ctrl+o for details · /sandbox to disable"))
}
var kPA, qXA;
var Z19 = lazyLoader(() => {
    hA();
    MJ();
    kPA = esmImport(VA(), 1), qXA = esmImport(VA(), 1)
});

function Y19({
    apiKeyStatus: A,
    autoUpdaterResult: Q,
    debug: B,
    isAutoUpdating: G,
    verbose: Z,
    messages: I,
    onAutoUpdaterResult: Y,
    onChangeIsUpdating: J,
    ideSelection: W,
    mcpClients: X,
    isInputWrapped: F = !1,
    shouldShowSearchHint: V = !1
}) {
    let K = FZ1.useMemo(() => {
            let v = gk(I);
            return AK(v)
        }, [I]),
        D = nA9(K),
        H = wXA(X),
        [{
            notifications: C
        }] = _Q(),
        E = i21(),
        w = !(H === "connected" && (W?.filePath || W?.text && W.lineCount > 0)) || G || Q?.status !== "success",
        N = E.isUsingOverage,
        q = x4(),
        R = q === "team" || q === "enterprise",
        P = rh(),
        y = F && !D && A !== "invalid" && A !== "missing" && P !== void 0;
    return FZ1.useEffect(() => {
        if (y) BA("tengu_external_editor_hint_shown", {})
    }, [y]), z4.createElement(YQA, null, z4.createElement(j, {
        flexDirection: "column",
        alignItems: "flex-end"
    }, z4.createElement(rA9, {
        ideSelection: W,
        mcpClients: X
    }), C.current && ("jsx" in C.current ? z4.createElement(j, {
        key: C.current.key
    }, C.current.jsx) : z4.createElement(TextComponent, {
        color: C.current.color,
        dimColor: !C.current.color
    }, C.current.text)), N && !R && z4.createElement(j, null, z4.createElement(TextComponent, {
        dimColor: !0
    }, "Now using extra usage")), A === "invalid" && z4.createElement(j, null, z4.createElement(TextComponent, {
        color: "error"
    }, "Invalid API key · Run /login")), A === "missing" && z4.createElement(j, null, z4.createElement(TextComponent, {
        color: "error"
    }, "Missing API key · Run /login")), B && z4.createElement(j, null, z4.createElement(TextComponent, {
        color: "warning"
    }, "Debug mode")), A !== "invalid" && A !== "missing" && Z && z4.createElement(j, null, z4.createElement(TextComponent, {
        dimColor: !0
    }, K, " tokens")), z4.createElement(lA9, {
        tokenUsage: K
    }), w && z4.createElement(Rd2, {
        verbose: Z,
        onAutoUpdaterResult: Y,
        autoUpdaterResult: Q,
        isUpdating: G,
        onChangeIsUpdating: J,
        showSuccessMessage: !D
    }), V ? z4.createElement(j, null, z4.createElement(TextComponent, {
        dimColor: !0
    }, "ctrl-r to search history")) : y && z4.createElement(j, null, z4.createElement(TextComponent, {
        dimColor: !0
    }, "ctrl-g to edit prompt in "), z4.createElement(TextComponent, {
        bold: !0,
        dimColor: !0
    }, aH(P))), z4.createElement(Q19, null), z4.createElement(G19, null)))
}
var z4, FZ1, I19 = 5000;
var fY0 = lazyLoader(() => {
    hA();
    Td2();
    JZ1();
    iA9();
    aA9();
    oA9();
    XZ1();
    H9();
    B19();
    w0();
    vn();
    yJ();
    oM();
    nQ();
    Z19();
    zi();
    hB();
    z4 = esmImport(VA(), 1), FZ1 = esmImport(VA(), 1)
});

function J19(A, Q, B, G) {
    let [Z, I] = NXA.useState(0), [Y, J] = NXA.useState(void 0), [W, X] = NXA.useState(!1), F = NXA.useRef(!1), V = e31(W ? I19 : 0), K = (w, N, q, R = !1) => {
        A(w, N, q), G?.(R ? 0 : w.length)
    }, D = (w, N = !1) => {
        if (!w) return;
        let q = Wf(w.display),
            R = q === "bash" || q === "memory" || q === "background" ? w.display.slice(1) : w.display;
        K(R, q, w.pastedContents, N)
    };

    function H() {
        (async () => {
            let w = [];
            for await (let q of kd1()) w.push(q);
            if (Z >= w.length) return;
            if (Z === 0) {
                let q = Q.trim() !== "";
                J(q ? {
                    display: Q,
                    pastedContents: B
                } : void 0)
            }
            let N = Z + 1;
            if (I(N), D(w[Z], !0), N >= 2 && !F.current) X(!0), F.current = !0
        })()
    }

    function C() {
        return (async () => {
            let w = [];
            for await (let N of kd1()) w.push(N);
            if (Z > 1) I(Z - 1), D(w[Z - 2]);
            else if (Z === 1)
                if (I(0), Y) D(Y);
                else K("", "prompt", {})
        })(), Z <= 0
    }

    function E() {
        J(void 0), I(0), X(!1)
    }

    function z() {
        X(!1), F.current = !0
    }
    return {
        historyIndex: Z,
        setHistoryIndex: I,
        onHistoryUp: H,
        onHistoryDown: C,
        resetHistory: E,
        shouldShowSearchHint: W && !V,
        dismissSearchHint: z
    }
}
var NXA;
var W19 = lazyLoader(() => {
    Pp();
    HGA();
    _G0();
    fY0();
    NXA = esmImport(VA(), 1)
});

function Cg(A) {
    return !Array.isArray ? E19(A) === "[object Array]" : Array.isArray(A)
}

function YN3(A) {
    if (typeof A == "string") return A;
    let Q = A + "";
    return Q == "0" && 1 / A == -IN3 ? "-0" : Q
}

function JN3(A) {
    return A == null ? "" : YN3(A)
}

function sy(A) {
    return typeof A === "string"
}

function H19(A) {
    return typeof A === "number"
}

function WN3(A) {
    return A === !0 || A === !1 || XN3(A) && E19(A) == "[object Boolean]"
}

function C19(A) {
    return typeof A === "object"
}

function XN3(A) {
    return C19(A) && A !== null
}

function cq(A) {
    return A !== void 0 && A !== null
}

function hY0(A) {
    return !A.trim().length
}

function E19(A) {
    return A == null ? A === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(A)
}
class z19 {
    constructor(A) {
        this._keys = [], this._keyMap = {};
        let Q = 0;
        A.forEach((B) => {
            let G = U19(B);
            this._keys.push(G), this._keyMap[G.id] = G, Q += G.weight
        }), this._keys.forEach((B) => {
            B.weight /= Q
        })
    }
    get(A) {
        return this._keyMap[A]
    }
    keys() {
        return this._keys
    }
    toJSON() {
        return JSON.stringify(this._keys)
    }
}

function U19(A) {
    let Q = null,
        B = null,
        G = null,
        Z = 1,
        I = null;
    if (sy(A) || Cg(A)) G = A, Q = F19(A), B = gY0(A);
    else {
        if (!X19.call(A, "name")) throw Error(DN3("name"));
        let Y = A.name;
        if (G = Y, X19.call(A, "weight")) {
            if (Z = A.weight, Z <= 0) throw Error(HN3(Y))
        }
        Q = F19(Y), B = gY0(Y), I = A.getFn
    }
    return {
        path: Q,
        id: B,
        weight: Z,
        src: G,
        getFn: I
    }
}

function F19(A) {
    return Cg(A) ? A : A.split(".")
}

function gY0(A) {
    return Cg(A) ? A.join(".") : A
}

function CN3(A, Q) {
    let B = [],
        G = !1,
        Z = (I, Y, J) => {
            if (!cq(I)) return;
            if (!Y[J]) B.push(I);
            else {
                let W = Y[J],
                    X = I[W];
                if (!cq(X)) return;
                if (J === Y.length - 1 && (sy(X) || H19(X) || WN3(X))) B.push(JN3(X));
                else if (Cg(X)) {
                    G = !0;
                    for (let F = 0, V = X.length; F < V; F += 1) Z(X[F], Y, J + 1)
                } else if (Y.length) Z(X, Y, J + 1)
            }
        };
    return Z(A, sy(Q) ? Q.split(".") : Q, 0), G ? B : B[0]
}

function qN3(A = 1, Q = 3) {
    let B = new Map,
        G = Math.pow(10, Q);
    return {
        get(Z) {
            let I = Z.match(wN3).length;
            if (B.has(I)) return B.get(I);
            let Y = 1 / Math.pow(I, 0.5 * A),
                J = parseFloat(Math.round(Y * G) / G);
            return B.set(I, J), J
        },
        clear() {
            B.clear()
        }
    }
}
class DZ1 {
    constructor({
        getFn: A = A8.getFn,
        fieldNormWeight: Q = A8.fieldNormWeight
    } = {}) {
        this.norm = qN3(Q, 3), this.getFn = A, this.isCreated = !1, this.setIndexRecords()
    }
    setSources(A = []) {
        this.docs = A
    }
    setIndexRecords(A = []) {
        this.records = A
    }
    setKeys(A = []) {
        this.keys = A, this._keysMap = {}, A.forEach((Q, B) => {
            this._keysMap[Q.id] = B
        })
    }
    create() {
        if (this.isCreated || !this.docs.length) return;
        if (this.isCreated = !0, sy(this.docs[0])) this.docs.forEach((A, Q) => {
            this._addString(A, Q)
        });
        else this.docs.forEach((A, Q) => {
            this._addObject(A, Q)
        });
        this.norm.clear()
    }
    add(A) {
        let Q = this.size();
        if (sy(A)) this._addString(A, Q);
        else this._addObject(A, Q)
    }
    removeAt(A) {
        this.records.splice(A, 1);
        for (let Q = A, B = this.size(); Q < B; Q += 1) this.records[Q].i -= 1
    }
    getValueForItemAtKeyId(A, Q) {
        return A[this._keysMap[Q]]
    }
    size() {
        return this.records.length
    }
    _addString(A, Q) {
        if (!cq(A) || hY0(A)) return;
        let B = {
            v: A,
            i: Q,
            n: this.norm.get(A)
        };
        this.records.push(B)
    }
    _addObject(A, Q) {
        let B = {
            i: Q,
            TextComponent: {}
        };
        this.keys.forEach((G, Z) => {
            let I = G.getFn ? G.getFn(A) : this.getFn(A, G.path);
            if (!cq(I)) return;
            if (Cg(I)) {
                let Y = [],
                    J = [{
                        nestedArrIndex: -1,
                        value: I
                    }];
                while (J.length) {
                    let {
                        nestedArrIndex: W,
                        value: X
                    } = J.pop();
                    if (!cq(X)) continue;
                    if (sy(X) && !hY0(X)) {
                        let F = {
                            v: X,
                            i: W,
                            n: this.norm.get(X)
                        };
                        Y.push(F)
                    } else if (Cg(X)) X.forEach((F, V) => {
                        J.push({
                            nestedArrIndex: V,
                            value: F
                        })
                    })
                }
                B.TextComponent[Z] = Y
            } else if (sy(I) && !hY0(I)) {
                let Y = {
                    v: I,
                    n: this.norm.get(I)
                };
                B.TextComponent[Z] = Y
            }
        }), this.records.push(B)
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        }
    }
}

function $19(A, Q, {
    getFn: B = A8.getFn,
    fieldNormWeight: G = A8.fieldNormWeight
} = {}) {
    let Z = new DZ1({
        getFn: B,
        fieldNormWeight: G
    });
    return Z.setKeys(A.map(U19)), Z.setSources(Q), Z.create(), Z
}

function NN3(A, {
    getFn: Q = A8.getFn,
    fieldNormWeight: B = A8.fieldNormWeight
} = {}) {
    let {
        keys: G,
        records: Z
    } = A, I = new DZ1({
        getFn: Q,
        fieldNormWeight: B
    });
    return I.setKeys(G), I.setIndexRecords(Z), I
}

function VZ1(A, {
    errors: Q = 0,
    currentLocation: B = 0,
    expectedLocation: G = 0,
    distance: Z = A8.distance,
    ignoreLocation: I = A8.ignoreLocation
} = {}) {
    let Y = Q / A.length;
    if (I) return Y;
    let J = Math.abs(G - B);
    if (!Z) return J ? 1 : Y;
    return Y + J / Z
}

function LN3(A = [], Q = A8.minMatchCharLength) {
    let B = [],
        G = -1,
        Z = -1,
        I = 0;
    for (let Y = A.length; I < Y; I += 1) {
        let J = A[I];
        if (J && G === -1) G = I;
        else if (!J && G !== -1) {
            if (Z = I - 1, Z - G + 1 >= Q) B.push([G, Z]);
            G = -1
        }
    }
    if (A[I - 1] && I - G >= Q) B.push([G, I - 1]);
    return B
}

function MN3(A, Q, B, {
    location: G = A8.location,
    distance: Z = A8.distance,
    threshold: I = A8.threshold,
    findAllMatches: Y = A8.findAllMatches,
    minMatchCharLength: J = A8.minMatchCharLength,
    includeMatches: W = A8.includeMatches,
    ignoreLocation: X = A8.ignoreLocation
} = {}) {
    if (Q.length > XQA) throw Error(KN3(XQA));
    let F = Q.length,
        V = A.length,
        K = Math.max(0, Math.min(G, V)),
        D = I,
        H = K,
        C = J > 1 || W,
        E = C ? Array(V) : [],
        z;
    while ((z = A.indexOf(Q, H)) > -1) {
        let y = VZ1(Q, {
            currentLocation: z,
            expectedLocation: K,
            distance: Z,
            ignoreLocation: X
        });
        if (D = Math.min(y, D), H = z + F, C) {
            let v = 0;
            while (v < F) E[z + v] = 1, v += 1
        }
    }
    H = -1;
    let w = [],
        N = 1,
        q = F + V,
        R = 1 << F - 1;
    for (let y = 0; y < F; y += 1) {
        let v = 0,
            x = q;
        while (v < x) {
            if (VZ1(Q, {
                    errors: y,
                    currentLocation: K + x,
                    expectedLocation: K,
                    distance: Z,
                    ignoreLocation: X
                }) <= D) v = x;
            else q = x;
            x = Math.floor((q - v) / 2 + v)
        }
        q = x;
        let p = Math.max(1, K - x + 1),
            u = Y ? V : Math.min(K + x, V) + F,
            o = Array(u + 2);
        o[u + 1] = (1 << y) - 1;
        for (let k = u; k >= p; k -= 1) {
            let d = k - 1,
                QA = B[A.charAt(d)];
            if (C) E[d] = +!!QA;
            if (o[k] = (o[k + 1] << 1 | 1) & QA, y) o[k] |= (w[k + 1] | w[k]) << 1 | 1 | w[k + 1];
            if (o[k] & R) {
                if (N = VZ1(Q, {
                        errors: y,
                        currentLocation: d,
                        expectedLocation: K,
                        distance: Z,
                        ignoreLocation: X
                    }), N <= D) {
                    if (D = N, H = d, H <= K) break;
                    p = Math.max(1, 2 * K - H)
                }
            }
        }
        if (VZ1(Q, {
                errors: y + 1,
                currentLocation: K,
                expectedLocation: K,
                distance: Z,
                ignoreLocation: X
            }) > D) break;
        w = o
    }
    let P = {
        isMatch: H >= 0,
        score: Math.max(0.001, N)
    };
    if (C) {
        let y = LN3(E, J);
        if (!y.length) P.isMatch = !1;
        else if (W) P.indices = y
    }
    return P
}

function ON3(A) {
    let Q = {};
    for (let B = 0, G = A.length; B < G; B += 1) {
        let Z = A.charAt(B);
        Q[Z] = (Q[Z] || 0) | 1 << G - B - 1
    }
    return Q
}
class lY0 {
    constructor(A, {
        location: Q = A8.location,
        threshold: B = A8.threshold,
        distance: G = A8.distance,
        includeMatches: Z = A8.includeMatches,
        findAllMatches: I = A8.findAllMatches,
        minMatchCharLength: Y = A8.minMatchCharLength,
        isCaseSensitive: J = A8.isCaseSensitive,
        ignoreLocation: W = A8.ignoreLocation
    } = {}) {
        if (this.options = {
                location: Q,
                threshold: B,
                distance: G,
                includeMatches: Z,
                findAllMatches: I,
                minMatchCharLength: Y,
                isCaseSensitive: J,
                ignoreLocation: W
            }, this.pattern = J ? A : A.toLowerCase(), this.chunks = [], !this.pattern.length) return;
        let X = (V, K) => {
                this.chunks.push({
                    pattern: V,
                    alphabet: ON3(V),
                    startIndex: K
                })
            },
            F = this.pattern.length;
        if (F > XQA) {
            let V = 0,
                K = F % XQA,
                D = F - K;
            while (V < D) X(this.pattern.substr(V, XQA), V), V += XQA;
            if (K) {
                let H = F - XQA;
                X(this.pattern.substr(H), H)
            }
        } else X(this.pattern, 0)
    }
    searchIn(A) {
        let {
            isCaseSensitive: Q,
            includeMatches: B
        } = this.options;
        if (!Q) A = A.toLowerCase();
        if (this.pattern === A) {
            let D = {
                isMatch: !0,
                score: 0
            };
            if (B) D.indices = [
                [0, A.length - 1]
            ];
            return D
        }
        let {
            location: G,
            distance: Z,
            threshold: I,
            findAllMatches: Y,
            minMatchCharLength: J,
            ignoreLocation: W
        } = this.options, X = [], F = 0, V = !1;
        this.chunks.forEach(({
            pattern: D,
            alphabet: H,
            startIndex: C
        }) => {
            let {
                isMatch: E,
                score: z,
                indices: w
            } = MN3(A, D, H, {
                location: G + C,
                distance: Z,
                threshold: I,
                findAllMatches: Y,
                minMatchCharLength: J,
                includeMatches: B,
                ignoreLocation: W
            });
            if (E) V = !0;
            if (F += z, E && w) X = [...X, ...w]
        });
        let K = {
            isMatch: V,
            score: V ? F / this.chunks.length : 1
        };
        if (V && B) K.indices = X;
        return K
    }
}
class Eg {
    constructor(A) {
        this.pattern = A
    }
    static isMultiMatch(A) {
        return V19(A, this.multiRegex)
    }
    static isSingleMatch(A) {
        return V19(A, this.singleRegex)
    }
    search() {}
}

function V19(A, Q) {
    let B = A.match(Q);
    return B ? B[1] : null
}

function PN3(A, Q = {}) {
    return A.split(TN3).map((B) => {
        let G = B.trim().split(RN3).filter((I) => I && !!I.trim()),
            Z = [];
        for (let I = 0, Y = G.length; I < Y; I += 1) {
            let J = G[I],
                W = !1,
                X = -1;
            while (!W && ++X < K19) {
                let F = uY0[X],
                    V = F.isMultiMatch(J);
                if (V) Z.push(new F(V, Q)), W = !0
            }
            if (W) continue;
            X = -1;
            while (++X < K19) {
                let F = uY0[X],
                    V = F.isSingleMatch(J);
                if (V) {
                    Z.push(new F(V, Q));
                    break
                }
            }
        }
        return Z
    })
}
class R19 {
    constructor(A, {
        isCaseSensitive: Q = A8.isCaseSensitive,
        includeMatches: B = A8.includeMatches,
        minMatchCharLength: G = A8.minMatchCharLength,
        ignoreLocation: Z = A8.ignoreLocation,
        findAllMatches: I = A8.findAllMatches,
        location: Y = A8.location,
        threshold: J = A8.threshold,
        distance: W = A8.distance
    } = {}) {
        this.query = null, this.options = {
            isCaseSensitive: Q,
            includeMatches: B,
            minMatchCharLength: G,
            findAllMatches: I,
            ignoreLocation: Z,
            location: Y,
            threshold: J,
            distance: W
        }, this.pattern = Q ? A : A.toLowerCase(), this.query = PN3(this.pattern, this.options)
    }
    static condition(A, Q) {
        return Q.useExtendedSearch
    }
    searchIn(A) {
        let Q = this.query;
        if (!Q) return {
            isMatch: !1,
            score: 1
        };
        let {
            includeMatches: B,
            isCaseSensitive: G
        } = this.options;
        A = G ? A : A.toLowerCase();
        let Z = 0,
            I = [],
            Y = 0;
        for (let J = 0, W = Q.length; J < W; J += 1) {
            let X = Q[J];
            I.length = 0, Z = 0;
            for (let F = 0, V = X.length; F < V; F += 1) {
                let K = X[F],
                    {
                        isMatch: D,
                        indices: H,
                        score: C
                    } = K.search(A);
                if (D) {
                    if (Z += 1, Y += C, B) {
                        let E = K.constructor.type;
                        if (jN3.has(E)) I = [...I, ...H];
                        else I.push(H)
                    }
                } else {
                    Y = 0, Z = 0, I.length = 0;
                    break
                }
            }
            if (Z) {
                let F = {
                    isMatch: !0,
                    score: Y / Z
                };
                if (B) F.indices = I;
                return F
            }
        }
        return {
            isMatch: !1,
            score: 1
        }
    }
}

function SN3(...A) {
    mY0.push(...A)
}

function dY0(A, Q) {
    for (let B = 0, G = mY0.length; B < G; B += 1) {
        let Z = mY0[B];
        if (Z.condition(A, Q)) return new Z(A, Q)
    }
    return new lY0(A, Q)
}

function T19(A, Q, {
    auto: B = !0
} = {}) {
    let G = (Z) => {
        let I = Object.keys(Z),
            Y = _N3(Z);
        if (!Y && I.length > 1 && !pY0(Z)) return G(D19(Z));
        if (kN3(Z)) {
            let W = Y ? Z[cY0.PATH] : I[0],
                X = Y ? Z[cY0.PATTERN] : Z[W];
            if (!sy(X)) throw Error(VN3(W));
            let F = {
                keyId: gY0(W),
                pattern: X
            };
            if (B) F.searcher = dY0(X, Q);
            return F
        }
        let J = {
            children: [],
            operator: I[0]
        };
        return I.forEach((W) => {
            let X = Z[W];
            if (Cg(X)) X.forEach((F) => {
                J.children.push(G(F))
            })
        }), J
    };
    if (!pY0(A)) A = D19(A);
    return G(A)
}

function yN3(A, {
    ignoreFieldNorm: Q = A8.ignoreFieldNorm
}) {
    A.forEach((B) => {
        let G = 1;
        B.matches.forEach(({
            key: Z,
            norm: I,
            score: Y
        }) => {
            let J = Z ? Z.weight : null;
            G *= Math.pow(Y === 0 && J ? Number.EPSILON : Y, (J || 1) * (Q ? 1 : I))
        }), B.score = G
    })
}

function xN3(A, Q) {
    let B = A.matches;
    if (Q.matches = [], !cq(B)) return;
    B.forEach((G) => {
        if (!cq(G.indices) || !G.indices.length) return;
        let {
            indices: Z,
            value: I
        } = G, Y = {
            indices: Z,
            value: I
        };
        if (G.key) Y.key = G.key.src;
        if (G.idx > -1) Y.refIndex = G.idx;
        Q.matches.push(Y)
    })
}

function vN3(A, Q) {
    Q.score = A.score
}

function bN3(A, Q, {
    includeMatches: B = A8.includeMatches,
    includeScore: G = A8.includeScore
} = {}) {
    let Z = [];
    if (B) Z.push(xN3);