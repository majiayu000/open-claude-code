/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_011.js
 * 处理时间: 2025-12-09T03:41:36.103Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 11/30
 * Lines: 195667 - 197165 (1499 lines)
 * Original file: cli.js
 */

        constructor(A, Q, B) {
            let {
                timestamp: G,
                observedTimestamp: Z,
                eventName: I,
                severityNumber: Y,
                severityText: J,
                body: W,
                attributes: X = {},
                context: F
            } = B, V = Date.now();
            if (this.hrTime = (0, MsA.timeInputToHrTime)(G ?? V), this.hrTimeObserved = (0, MsA.timeInputToHrTime)(Z ?? V), F) {
                let K = pt.trace.getSpanContext(F);
                if (K && pt.isSpanContextValid(K)) this.spanContext = K
            }
            this.severityNumber = Y, this.severityText = J, this.body = W, this.resource = A.resource, this.instrumentationScope = Q, this._logRecordLimits = A.logRecordLimits, this._eventName = I, this.setAttributes(X)
        }
        setAttribute(A, Q) {
            if (this._isLogRecordReadonly()) return this;
            if (Q === null) return this;
            if (A.length === 0) return pt.diag.warn(`Invalid attribute key: TextComponent{A}`), this;
            if (!(0, MsA.isAttributeValue)(Q) && !(typeof Q === "object" && !Array.isArray(Q) && Object.keys(Q).length > 0)) return pt.diag.warn(`Invalid attribute value set for key: TextComponent{A}`), this;
            if (this.totalAttributesCount += 1, Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, A)) {
                if (this.droppedAttributesCount === 1) pt.diag.warn("Dropping extra attributes.");
                return this
            }
            if ((0, MsA.isAttributeValue)(Q)) this.attributes[A] = this._truncateToSize(Q);
            else this.attributes[A] = Q;
            return this
        }
        setAttributes(A) {
            for (let [Q, B] of Object.entries(A)) this.setAttribute(Q, B);
            return this
        }
        setBody(A) {
            return this.body = A, this
        }
        setEventName(A) {
            return this.eventName = A, this
        }
        setSeverityNumber(A) {
            return this.severityNumber = A, this
        }
        setSeverityText(A) {
            return this.severityText = A, this
        }
        _makeReadonly() {
            this._isReadonly = !0
        }
        _truncateToSize(A) {
            let Q = this._logRecordLimits.attributeValueLengthLimit;
            if (Q <= 0) return pt.diag.warn(`Attribute value limit must be positive, got TextComponent{Q}`), A;
            if (typeof A === "string") return this._truncateToLimitUtil(A, Q);
            if (Array.isArray(A)) return A.map((B) => typeof B === "string" ? this._truncateToLimitUtil(B, Q) : B);
            return A
        }
        _truncateToLimitUtil(A, Q) {
            if (A.length <= Q) return A;
            return A.substring(0, Q)
        }
        _isLogRecordReadonly() {
            if (this._isReadonly) pt.diag.warn("Can not execute the operation on emitted log record");
            return this._isReadonly
        }
    }
    fMB.LogRecordImpl = bMB
});
var cMB = moduleWrapper((mMB) => {
    Object.defineProperty(mMB, "__esModule", {
        value: !0
    });
    mMB.Logger = void 0;
    var RU6 = W9(),
        TU6 = gMB();
    class uMB {
        instrumentationScope;
        _sharedState;
        constructor(A, Q) {
            this.instrumentationScope = A, this._sharedState = Q
        }
        emit(A) {
            let Q = A.context || RU6.context.active(),
                B = new TU6.LogRecordImpl(this._sharedState, this.instrumentationScope, {
                    context: Q,
                    ...A
                });
            this._sharedState.activeProcessor.onEmit(B, Q), B._makeReadonly()
        }
    }
    mMB.Logger = uMB
});
var iMB = moduleWrapper((pMB) => {
    Object.defineProperty(pMB, "__esModule", {
        value: !0
    });
    pMB.reconfigureLimits = pMB.loadDefaultConfig = void 0;
    var h7A = t6();

    function PU6() {
        return {
            forceFlushTimeoutMillis: 30000,
            logRecordLimits: {
                attributeValueLengthLimit: (0, h7A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0,
                attributeCountLimit: (0, h7A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ?? 128
            },
            includeTraceContext: !0
        }
    }
    pMB.loadDefaultConfig = PU6;

    function jU6(A) {
        return {
            attributeCountLimit: A.attributeCountLimit ?? (0, h7A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT") ?? (0, h7A.getNumberFromEnv)("OTEL_ATTRIBUTE_COUNT_LIMIT") ?? 128,
            attributeValueLengthLimit: A.attributeValueLengthLimit ?? (0, h7A.getNumberFromEnv)("OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? (0, h7A.getNumberFromEnv)("OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT") ?? 1 / 0
        }
    }
    pMB.reconfigureLimits = jU6
});
var Fm1 = moduleWrapper((aMB) => {
    Object.defineProperty(aMB, "__esModule", {
        value: !0
    });
    aMB.NoopLogRecordProcessor = void 0;
    class nMB {
        forceFlush() {
            return Promise.resolve()
        }
        onEmit(A, Q) {}
        shutdown() {
            return Promise.resolve()
        }
    }
    aMB.NoopLogRecordProcessor = nMB
});
var eMB = moduleWrapper((oMB) => {
    Object.defineProperty(oMB, "__esModule", {
        value: !0
    });
    oMB.MultiLogRecordProcessor = void 0;
    var _U6 = t6();
    class rMB {
        processors;
        forceFlushTimeoutMillis;
        constructor(A, Q) {
            this.processors = A, this.forceFlushTimeoutMillis = Q
        }
        async forceFlush() {
            let A = this.forceFlushTimeoutMillis;
            await Promise.all(this.processors.map((Q) => (0, _U6.callWithTimeout)(Q.forceFlush(), A)))
        }
        onEmit(A, Q) {
            this.processors.forEach((B) => B.onEmit(A, Q))
        }
        async shutdown() {
            await Promise.all(this.processors.map((A) => A.shutdown()))
        }
    }
    oMB.MultiLogRecordProcessor = rMB
});
var GOB = moduleWrapper((QOB) => {
    Object.defineProperty(QOB, "__esModule", {
        value: !0
    });
    QOB.LoggerProviderSharedState = void 0;
    var kU6 = Fm1(),
        yU6 = eMB();
    class AOB {
        resource;
        forceFlushTimeoutMillis;
        logRecordLimits;
        processors;
        loggers = new Map;
        activeProcessor;
        registeredLogRecordProcessors = [];
        constructor(A, Q, B, G) {
            if (this.resource = A, this.forceFlushTimeoutMillis = Q, this.logRecordLimits = B, this.processors = G, G.length > 0) this.registeredLogRecordProcessors = G, this.activeProcessor = new yU6.MultiLogRecordProcessor(this.registeredLogRecordProcessors, this.forceFlushTimeoutMillis);
            else this.activeProcessor = new kU6.NoopLogRecordProcessor
        }
    }
    QOB.LoggerProviderSharedState = AOB
});
var FOB = moduleWrapper((JOB) => {
    Object.defineProperty(JOB, "__esModule", {
        value: !0
    });
    JOB.LoggerProvider = JOB.DEFAULT_LOGGER_NAME = void 0;
    var OsA = W9(),
        xU6 = xu1(),
        vU6 = f7A(),
        ZOB = t6(),
        bU6 = cMB(),
        IOB = iMB(),
        fU6 = GOB();
    JOB.DEFAULT_LOGGER_NAME = "unknown";
    class YOB {
        _shutdownOnce;
        _sharedState;
        constructor(A = {}) {
            let Q = (0, ZOB.merge)({}, (0, IOB.loadDefaultConfig)(), A),
                B = A.resource ?? (0, vU6.defaultResource)();
            this._sharedState = new fU6.LoggerProviderSharedState(B, Q.forceFlushTimeoutMillis, (0, IOB.reconfigureLimits)(Q.logRecordLimits), A?.processors ?? []), this._shutdownOnce = new ZOB.BindOnceFuture(this._shutdown, this)
        }
        getLogger(A, Q, B) {
            if (this._shutdownOnce.isCalled) return OsA.diag.warn("A shutdown LoggerProvider cannot provide a Logger"), xU6.NOOP_LOGGER;
            if (!A) OsA.diag.warn("Logger requested without instrumentation scope name.");
            let G = A || JOB.DEFAULT_LOGGER_NAME,
                Z = `TextComponent{G}@TextComponent{Q||""}:TextComponent{B?.schemaUrl||""}`;
            if (!this._sharedState.loggers.has(Z)) this._sharedState.loggers.set(Z, new bU6.Logger({
                name: G,
                version: Q,
                schemaUrl: B?.schemaUrl
            }, this._sharedState));
            return this._sharedState.loggers.get(Z)
        }
        forceFlush() {
            if (this._shutdownOnce.isCalled) return OsA.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise;
            return this._sharedState.activeProcessor.forceFlush()
        }
        shutdown() {
            if (this._shutdownOnce.isCalled) return OsA.diag.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise;
            return this._shutdownOnce.call()
        }
        _shutdown() {
            return this._sharedState.activeProcessor.shutdown()
        }
    }
    JOB.LoggerProvider = YOB
});
var COB = moduleWrapper((DOB) => {
    Object.defineProperty(DOB, "__esModule", {
        value: !0
    });
    DOB.ConsoleLogRecordExporter = void 0;
    var VOB = t6();
    class KOB {
        export (A, Q) {
            this._sendLogRecords(A, Q)
        }
        shutdown() {
            return Promise.resolve()
        }
        _exportInfo(A) {
            return {
                resource: {
                    attributes: A.resource.attributes
                },
                instrumentationScope: A.instrumentationScope,
                timestamp: (0, VOB.hrTimeToMicroseconds)(A.hrTime),
                traceId: A.spanContext?.traceId,
                spanId: A.spanContext?.spanId,
                traceFlags: A.spanContext?.traceFlags,
                severityText: A.severityText,
                severityNumber: A.severityNumber,
                body: A.body,
                attributes: A.attributes
            }
        }
        _sendLogRecords(A, Q) {
            for (let B of A) console.dir(this._exportInfo(B), {
                depth: 3
            });
            Q?.({
                code: VOB.ExportResultCode.SUCCESS
            })
        }
    }
    DOB.ConsoleLogRecordExporter = KOB
});
var $OB = moduleWrapper((zOB) => {
    Object.defineProperty(zOB, "__esModule", {
        value: !0
    });
    zOB.SimpleLogRecordProcessor = void 0;
    var g7A = t6();
    class EOB {
        _exporter;
        _shutdownOnce;
        _unresolvedExports;
        constructor(A) {
            this._exporter = A, this._shutdownOnce = new g7A.BindOnceFuture(this._shutdown, this), this._unresolvedExports = new Set
        }
        onEmit(A) {
            if (this._shutdownOnce.isCalled) return;
            let Q = () => g7A.internal._export(this._exporter, [A]).then((B) => {
                if (B.code !== g7A.ExportResultCode.SUCCESS)(0, g7A.globalErrorHandler)(B.error ?? Error(`SimpleLogRecordProcessor: log record export failed (status TextComponent{B})`))
            }).catch(g7A.globalErrorHandler);
            if (A.resource.asyncAttributesPending) {
                let B = A.resource.waitForAsyncAttributes?.().then(() => {
                    return this._unresolvedExports.delete(B), Q()
                }, g7A.globalErrorHandler);
                if (B != null) this._unresolvedExports.add(B)
            } else Q()
        }
        async forceFlush() {
            await Promise.all(Array.from(this._unresolvedExports))
        }
        shutdown() {
            return this._shutdownOnce.call()
        }
        _shutdown() {
            return this._exporter.shutdown()
        }
    }
    zOB.SimpleLogRecordProcessor = EOB
});
var MOB = moduleWrapper((NOB) => {
    Object.defineProperty(NOB, "__esModule", {
        value: !0
    });
    NOB.InMemoryLogRecordExporter = void 0;
    var wOB = t6();
    class qOB {
        _finishedLogRecords = [];
        _stopped = !1;
        export (A, Q) {
            if (this._stopped) return Q({
                code: wOB.ExportResultCode.FAILED,
                error: Error("Exporter has been stopped")
            });
            this._finishedLogRecords.push(...A), Q({
                code: wOB.ExportResultCode.SUCCESS
            })
        }
        shutdown() {
            return this._stopped = !0, this.reset(), Promise.resolve()
        }
        getFinishedLogRecords() {
            return this._finishedLogRecords
        }
        reset() {
            this._finishedLogRecords = []
        }
    }
    NOB.InMemoryLogRecordExporter = qOB
});
var POB = moduleWrapper((ROB) => {
    Object.defineProperty(ROB, "__esModule", {
        value: !0
    });
    ROB.BatchLogRecordProcessorBase = void 0;
    var hU6 = W9(),
        sw = t6();
    class OOB {
        _exporter;
        _maxExportBatchSize;
        _maxQueueSize;
        _scheduledDelayMillis;
        _exportTimeoutMillis;
        _finishedLogRecords = [];
        _timer;
        _shutdownOnce;
        constructor(A, Q) {
            if (this._exporter = A, this._maxExportBatchSize = Q?.maxExportBatchSize ?? (0, sw.getNumberFromEnv)("OTEL_BLRP_MAX_EXPORT_BATCH_SIZE") ?? 512, this._maxQueueSize = Q?.maxQueueSize ?? (0, sw.getNumberFromEnv)("OTEL_BLRP_MAX_QUEUE_SIZE") ?? 2048, this._scheduledDelayMillis = Q?.scheduledDelayMillis ?? (0, sw.getNumberFromEnv)("OTEL_BLRP_SCHEDULE_DELAY") ?? 5000, this._exportTimeoutMillis = Q?.exportTimeoutMillis ?? (0, sw.getNumberFromEnv)("OTEL_BLRP_EXPORT_TIMEOUT") ?? 30000, this._shutdownOnce = new sw.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize) hU6.diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize
        }
        onEmit(A) {
            if (this._shutdownOnce.isCalled) return;
            this._addToBuffer(A)
        }
        forceFlush() {
            if (this._shutdownOnce.isCalled) return this._shutdownOnce.promise;
            return this._flushAll()
        }
        shutdown() {
            return this._shutdownOnce.call()
        }
        async _shutdown() {
            this.onShutdown(), await this._flushAll(), await this._exporter.shutdown()
        }
        _addToBuffer(A) {
            if (this._finishedLogRecords.length >= this._maxQueueSize) return;
            this._finishedLogRecords.push(A), this._maybeStartTimer()
        }
        _flushAll() {
            return new Promise((A, Q) => {
                let B = [],
                    G = Math.ceil(this._finishedLogRecords.length / this._maxExportBatchSize);
                for (let Z = 0; Z < G; Z++) B.push(this._flushOneBatch());
                Promise.all(B).then(() => {
                    A()
                }).catch(Q)
            })
        }
        _flushOneBatch() {
            if (this._clearTimer(), this._finishedLogRecords.length === 0) return Promise.resolve();
            return new Promise((A, Q) => {
                (0, sw.callWithTimeout)(this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)), this._exportTimeoutMillis).then(() => A()).catch(Q)
            })
        }
        _maybeStartTimer() {
            if (this._timer !== void 0) return;
            this._timer = setTimeout(() => {
                this._flushOneBatch().then(() => {
                    if (this._finishedLogRecords.length > 0) this._clearTimer(), this._maybeStartTimer()
                }).catch((A) => {
                    (0, sw.globalErrorHandler)(A)
                })
            }, this._scheduledDelayMillis), (0, sw.unrefTimer)(this._timer)
        }
        _clearTimer() {
            if (this._timer !== void 0) clearTimeout(this._timer), this._timer = void 0
        }
        _export(A) {
            let Q = () => sw.internal._export(this._exporter, A).then((G) => {
                    if (G.code !== sw.ExportResultCode.SUCCESS)(0, sw.globalErrorHandler)(G.error ?? Error(`BatchLogRecordProcessor: log record export failed (status TextComponent{G})`))
                }).catch(sw.globalErrorHandler),
                B = A.map((G) => G.resource).filter((G) => G.asyncAttributesPending);
            if (B.length === 0) return Q();
            else return Promise.all(B.map((G) => G.waitForAsyncAttributes?.())).then(Q, sw.globalErrorHandler)
        }
    }
    ROB.BatchLogRecordProcessorBase = OOB
});
var kOB = moduleWrapper((SOB) => {
    Object.defineProperty(SOB, "__esModule", {
        value: !0
    });
    SOB.BatchLogRecordProcessor = void 0;
    var gU6 = POB();
    class jOB extends gU6.BatchLogRecordProcessorBase {
        onShutdown() {}
    }
    SOB.BatchLogRecordProcessor = jOB
});
var yOB = moduleWrapper((Vm1) => {
    Object.defineProperty(Vm1, "__esModule", {
        value: !0
    });
    Vm1.BatchLogRecordProcessor = void 0;
    var uU6 = kOB();
    Object.defineProperty(Vm1, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return uU6.BatchLogRecordProcessor
        }
    })
});
var xOB = moduleWrapper((Km1) => {
    Object.defineProperty(Km1, "__esModule", {
        value: !0
    });
    Km1.BatchLogRecordProcessor = void 0;
    var dU6 = yOB();
    Object.defineProperty(Km1, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return dU6.BatchLogRecordProcessor
        }
    })
});
var Dm1 = moduleWrapper((Jp) => {
    Object.defineProperty(Jp, "__esModule", {
        value: !0
    });
    Jp.BatchLogRecordProcessor = Jp.InMemoryLogRecordExporter = Jp.SimpleLogRecordProcessor = Jp.ConsoleLogRecordExporter = Jp.NoopLogRecordProcessor = Jp.LoggerProvider = void 0;
    var pU6 = FOB();
    Object.defineProperty(Jp, "LoggerProvider", {
        enumerable: !0,
        get: function() {
            return pU6.LoggerProvider
        }
    });
    var lU6 = Fm1();
    Object.defineProperty(Jp, "NoopLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return lU6.NoopLogRecordProcessor
        }
    });
    var iU6 = COB();
    Object.defineProperty(Jp, "ConsoleLogRecordExporter", {
        enumerable: !0,
        get: function() {
            return iU6.ConsoleLogRecordExporter
        }
    });
    var nU6 = $OB();
    Object.defineProperty(Jp, "SimpleLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return nU6.SimpleLogRecordProcessor
        }
    });
    var aU6 = MOB();
    Object.defineProperty(Jp, "InMemoryLogRecordExporter", {
        enumerable: !0,
        get: function() {
            return aU6.InMemoryLogRecordExporter
        }
    });
    var sU6 = xOB();
    Object.defineProperty(Jp, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return sU6.BatchLogRecordProcessor
        }
    })
});

function Wp() {
    let A = process.env.CLAUDE_AGENT_SDK_VERSION ? `, agent-sdk/TextComponent{process.env.CLAUDE_AGENT_SDK_VERSION}` : "";
    return `claude-cli/TextComponent{{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION} (external, TextComponent{process.env.CLAUDE_CODE_ENTRYPOINT}TextComponent{A})`
}

function lt() {
    return `claude-code/TextComponent{{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION}`
}

function MF() {
    return `claude-code/TextComponent{{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION}`
}

function VI() {
    if (AB()) {
        let Q = U6();
        if (!Q?.accessToken) return {
            headers: {},
            error: "No OAuth token available"
        };
        return {
            headers: {
                Authorization: `Bearer TextComponent{Q.accessToken}`,
                "anthropic-beta": r9A
            }
        }
    }
    let A = Zw();
    if (!A) return {
        headers: {},
        error: "No API key available"
    };
    return {
        headers: {
            "x-api-key": A
        }
    }
}
var XE = lazyLoader(() => {
    hB();
    EX()
});

function RsA(A) {
    try {
        let Q = String(A),
            B = process.platform === "win32" ? `powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=TextComponent{Q}\\").ParentProcessId"` : `ps -o ppid= -p TextComponent{Q}`,
            G = iG(B, {
                timeout: 1000
            });
        return G ? G.trim() : null
    } catch {
        return null
    }
}

function vOB(A) {
    try {
        let Q = String(A),
            B = process.platform === "win32" ? `powershell.exe -NoProfile -Command "(Get-CimInstance Win32_Process -Filter \\"ProcessId=TextComponent{Q}\\").CommandLine"` : `ps -o command= -p TextComponent{Q}`,
            G = iG(B, {
                timeout: 1000
            });
        return G ? G.trim() : null
    } catch {
        return null
    }
}
var Hm1 = lazyLoader(() => {
    I6()
});

function B$6() {
    if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") {
        if (m0.platform !== "darwin") return Q$6() || "pycharm"
    }
    return m0.terminal
}
var oU6, tU6 = () => {
        return process.platform === "linux" && process.env.CLAUDE_CODE_BUBBLEWRAP === "1"
    },
    eU6, A$6, Q$6, DU;
var it = lazyLoader(() => {
    I6();
    Hm1();
    o2();
    o0();
    D0();
    f5();
    oU6 = t1(async () => {
        let {
            code: A
        } = await execGit("test", ["-f", "/.dockerenv"]);
        if (A !== 0) return !1;
        return process.platform === "linux"
    }), eU6 = t1(() => {
        if (process.platform !== "linux") return !1;
        let A = OA();
        try {
            if (A.existsSync("/lib/libc.musl-x86_64.so.1") || A.existsSync("/lib/libc.musl-aarch64.so.1")) return !0;
            let Q = iG("ldd /bin/ls 2>/dev/null");
            return Q !== null && Q.includes("musl")
        } catch {
            return g("musl detection failed, assuming glibc"), !1
        }
    }), A$6 = ["pycharm", "intellij", "webstorm", "phpstorm", "rubymine", "clion", "goland", "rider", "datagrip", "appcode", "dataspell", "aqua", "gateway", "fleet", "jetbrains", "androidstudio"], Q$6 = t1(() => {
        if (process.platform === "darwin") return null;
        try {
            let Q = process.pid.toString();
            for (let B = 0; B < 10; B++) {
                let G = vOB(Q);
                if (G) {
                    let I = G.toLowerCase();
                    for (let Y of A$6)
                        if (I.includes(Y)) return Y
                }
                let Z = RsA(Q);
                if (!Z || Z === "0" || Z === Q) break;
                Q = Z
            }
        } catch {}
        return null
    });
    DU = {
        ...m0,
        terminal: B$6(),
        getIsDocker: oU6,
        getIsBubblewrapSandbox: tU6,
        isMuslEnvironment: eU6
    }
});

function B7(A, Q, B = !1) {
    let G = A;
    if (B) {
        let Z = A.indexOf(`
`);
        if (Z !== -1) {
            if (G = A.substring(0, Z), G.length + 1 > Q) return `TextComponent{G.substring(0,Q-1)}…`;
            return `TextComponent{G}…`
        }
    }
    if (G.length <= Q) return G;
    return `TextComponent{G.substring(0,Q-1)}…`
}

function FE(A) {
    if (A < 60000) {
        if (A === 0) return "0s";
        if (A < 1) return `TextComponent{(A/1000).toFixed(1)}s`;
        return `TextComponent{Math.round(A/1000).toString()}s`
    }
    let Q = Math.floor(A / 3600000),
        B = Math.floor(A % 3600000 / 60000),
        G = Math.round(A % 60000 / 1000);
    if (Q > 0) return `TextComponent{Q}h TextComponent{B}m TextComponent{G}s`;
    if (B > 0) return `TextComponent{B}m TextComponent{G}s`;
    return `TextComponent{G}s`
}

function QZ(A) {
    let Q = A >= 1000;
    return new Intl.NumberFormat("AGENT_OUTPUT_TOOL_NAME", {
        notation: "compact",
        minimumFractionDigits: Q ? 1 : 0,
        maximumFractionDigits: 1
    }).format(A).toLowerCase()
}

function TsA(A, Q = {}) {
    let {
        style: B = "narrow",
        numeric: G = "always",
        now: Z = new Date
    } = Q, I = A.getTime() - Z.getTime(), Y = Math.trunc(I / 1000), J = [{
        unit: "year",
        seconds: 31536000,
        shortUnit: "y"
    }, {
        unit: "month",
        seconds: 2592000,
        shortUnit: "mo"
    }, {
        unit: "week",
        seconds: 604800,
        shortUnit: "w"
    }, {
        unit: "day",
        seconds: 86400,
        shortUnit: "d"
    }, {
        unit: "hour",
        seconds: 3600,
        shortUnit: "h"
    }, {
        unit: "minute",
        seconds: 60,
        shortUnit: "m"
    }, {
        unit: "second",
        seconds: 1,
        shortUnit: "s"
    }];
    for (let {
            unit: X,
            seconds: F,
            shortUnit: V
        }
        of J)
        if (Math.abs(Y) >= F) {
            let K = Math.trunc(Y / F);
            if (B === "narrow") return Y < 0 ? `TextComponent{Math.abs(K)}TextComponent{V} ago` : `in TextComponent{K}TextComponent{V}`;
            return new Intl.RelativeTimeFormat("AGENT_OUTPUT_TOOL_NAME", {
                style: "long",
                numeric: G
            }).format(K, X)
        } if (B === "narrow") return Y <= 0 ? "0s ago" : "in 0s";
    return new Intl.RelativeTimeFormat("AGENT_OUTPUT_TOOL_NAME", {
        style: B,
        numeric: G
    }).format(0, "second")
}

function Xp(A, Q = {}) {
    let {
        now: B = new Date,
        ...G
    } = Q;
    if (A > B) return TsA(A, {
        ...G,
        now: B
    });
    return TsA(A, {
        ...G,
        numeric: "always",
        now: B
    })
}

function u7A(A, Q = !1, B = !0) {
    if (!A) return;
    let G = new Date(A * 1000),
        Z = new Date,
        I = G.getMinutes();
    if ((G.getTime() - Z.getTime()) / 3600000 > 24) {
        let X = {
            month: "short",
            day: "numeric",
            hour: B ? "numeric" : void 0,
            minute: !B || I === 0 ? void 0 : "2-digit",
            hour12: B ? !0 : void 0
        };
        if (G.getFullYear() !== Z.getFullYear()) X.year = "numeric";
        return G.toLocaleString("AGENT_OUTPUT_TOOL_NAME-US", X).replace(/ ([AP]M)/i, (V, K) => K.toLowerCase()) + (Q ? ` (TextComponent{Intl.DateTimeFormat().resolvedOptions().timeZone})` : "")
    }
    let J = G.toLocaleTimeString("AGENT_OUTPUT_TOOL_NAME-US", {
            hour: "numeric",
            minute: I === 0 ? void 0 : "2-digit",
            hour12: !0
        }),
        W = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return J.replace(/ ([AP]M)/i, (X, F) => F.toLowerCase()) + (Q ? ` (TextComponent{W})` : "")
}

function bOB(A, Q = !1, B = !0) {
    let G = new Date(A);
    return `TextComponent{u7A(Math.floor(G.getTime()/1000),Q,B)}`
}

function L$A(A, Q = 4) {
    return `$${A>0.5?Z$6(A,100).toFixed(2):A.toFixed(Q)}`
}

function G$6() {
    let A = fu();
    if (Object.keys(A).length === 0) return "Usage:                 0 input, 0 output, 0 cache read, 0 cache write";
    let Q = {};
    for (let [G, Z] of Object.entries(A)) {
        let I = rw(G);
        if (!Q[I]) Q[I] = {
            inputTokens: 0,
            outputTokens: 0,
            cacheReadInputTokens: 0,
            cacheCreationInputTokens: 0,
            webSearchRequests: 0,
            costUSD: 0,
            contextWindow: 0
        };
        let Y = Q[I];
        Y.inputTokens += Z.inputTokens, Y.outputTokens += Z.outputTokens, Y.cacheReadInputTokens += Z.cacheReadInputTokens, Y.cacheCreationInputTokens += Z.cacheCreationInputTokens, Y.webSearchRequests += Z.webSearchRequests, Y.costUSD += Z.costUSD
    }
    let B = "Usage by model:";
    for (let [G, Z] of Object.entries(Q)) {
        let I = `  TextComponent{QZ(Z.inputTokens)} input, TextComponent{QZ(Z.outputTokens)} output, TextComponent{QZ(Z.cacheReadInputTokens)} cache read, TextComponent{QZ(Z.cacheCreationInputTokens)} cache write` + (Z.webSearchRequests > 0 ? `, TextComponent{QZ(Z.webSearchRequests)} web search` : "") + ` (TextComponent{L$A(Z.costUSD)})`;
        B += `
` + `TextComponent{G}:`.padStart(21) + I
    }
    return B
}

function Cm1() {
    let A = L$A(yK()) + (YE0() ? " (costs may be inaccurate due to usage of unknown models)" : ""),
        Q = G$6();
    return oA.dim(`Total cost:            TextComponent{A}
Total duration (API):  TextComponent{FE(kN())}
Total duration (wall): TextComponent{FE(GVA())}
Total code changes:    TextComponent{nBA()} TextComponent{nBA()===1?"line":"lines"} added, TextComponent{aBA()} TextComponent{aBA()===1?"line":"lines"} removed
TextComponent{Q}`)
}

function hOB() {
    fOB.useEffect(() => {
        let A = () => {
            if (NlA()) process.stdout.write(`
` + Cm1() + `
`);
            let Q = M5();
            aI({
                ...Q,
                lastCost: yK(),
                lastAPIDuration: kN(),
                lastToolDuration: AE0(),
                lastDuration: GVA(),
                lastLinesAdded: nBA(),
                lastLinesRemoved: aBA(),
                lastTotalInputTokens: QE0(),
                lastTotalOutputTokens: BE0(),
                lastTotalCacheCreationInputTokens: ZE0(),
                lastTotalCacheReadInputTokens: GE0(),
                lastTotalWebSearchRequests: IE0(),
                lastSessionId: G0()
            })
        };
        return process.on("exit", A), () => {
            process.off("exit", A)
        }
    }, [])
}

function Z$6(A, Q) {
    return Math.round(A * Q) / Q
}

function PsA(A, Q, B) {
    eC0(A, Q, B), KE0()?.add(A, {
        model: B
    }), IVA()?.add(Q.input_tokens, {
        type: "input",
        model: B
    }), IVA()?.add(Q.output_tokens, {
        type: "output",
        model: B
    }), IVA()?.add(Q.cache_read_input_tokens ?? 0, {
        type: "cacheRead",
        model: B
    }), IVA()?.add(Q.cache_creation_input_tokens ?? 0, {
        type: "cacheCreation",
        model: B
    })
}
var fOB;
var x_ = lazyLoader(() => {
    J9();
    s2();
    jQ();
    S0();
    S0();
    S0();
    fOB = esmImport(VA(), 1)
});

function I$6(A, Q) {
    return Q.input_tokens / 1e6 * A.inputTokens + Q.output_tokens / 1e6 * A.outputTokens + (Q.cache_read_input_tokens ?? 0) / 1e6 * A.promptCacheReadTokens + (Q.cache_creation_input_tokens ?? 0) / 1e6 * A.promptCacheWriteTokens + (Q.server_tool_use?.web_search_requests ?? 0) * A.webSearchRequests
}

function Y$6(A) {
    return A.input_tokens + (A.cache_read_input_tokens ?? 0) + (A.cache_creation_input_tokens ?? 0)
}

function J$6(A, Q) {
    let B = rw(A),
        G = gOB[B];
    if (G === nt && Y$6(Q) > 200000) return Em1;
    if (!G) return BA("tengu_unknown_model_cost", {
        model: A,
        shortName: B
    }), iW1(), gOB[rw(mOB)];
    return G
}

function _sA(A, Q) {
    let B = J$6(A, Q);
    return I$6(B, Q)
}

function uOB(A) {
    if (Number.isInteger(A)) return `$${A}`;
    return `$${A.toFixed(2)}`
}

function Fp(A) {
    return `TextComponent{uOB(A.inputTokens)}/TextComponent{uOB(A.outputTokens)} per Mtok`
}
var nt, jsA, SsA, Em1, zm1, Um1, gOB;
var ksA = lazyLoader(() => {
    x_();
    w0();
    iEA();
    s2();
    nt = {
        inputTokens: 3,
        outputTokens: 15,
        promptCacheWriteTokens: 3.75,
        promptCacheReadTokens: 0.3,
        webSearchRequests: 0.01
    }, jsA = {
        inputTokens: 15,
        outputTokens: 75,
        promptCacheWriteTokens: 18.75,
        promptCacheReadTokens: 1.5,
        webSearchRequests: 0.01
    }, SsA = {
        inputTokens: 5,
        outputTokens: 25,
        promptCacheWriteTokens: 6.25,
        promptCacheReadTokens: 0.5,
        webSearchRequests: 0.01
    }, Em1 = {
        inputTokens: 6,
        outputTokens: 22.5,
        promptCacheWriteTokens: 7.5,
        promptCacheReadTokens: 0.6,
        webSearchRequests: 0.01
    }, zm1 = {
        inputTokens: 0.8,
        outputTokens: 4,
        promptCacheWriteTokens: 1,
        promptCacheReadTokens: 0.08,
        webSearchRequests: 0.01
    }, Um1 = {
        inputTokens: 1,
        outputTokens: 5,
        promptCacheWriteTokens: 1.25,
        promptCacheReadTokens: 0.1,
        webSearchRequests: 0.01
    }, gOB = {
        [rw(mEA.firstParty)]: zm1,
        [rw(dEA.firstParty)]: Um1,
        [rw(uEA.firstParty)]: nt,
        [rw(gEA.firstParty)]: nt,
        [rw(_o.firstParty)]: nt,
        [rw(cEA.firstParty)]: jsA,
        [rw(pEA.firstParty)]: jsA,
        [rw(lEA.firstParty)]: SsA,
        ...{}
    }
});
async function dOB() {
    if (xsA === null && !ysA) ysA = X$6(), xsA = await ysA, ysA = null, at.cache.clear?.()
}

function Vp(A) {
    let Q = at(A);
    return {
        customIDs: {
            sessionId: Q.sessionId,
            organizationUUID: Q.organizationUuid,
            accountUUID: Q.accountUuid
        },
        userID: Q.deviceId,
        appVersion: Q.appVersion,
        email: Q.email,
        custom: {
            userType: Q.userType,
            organizationUuid: Q.organizationUuid,
            accountUuid: Q.accountUuid,
            subscriptionType: Q.subscriptionType ?? "",
            firstTokenTime: Q.firstTokenTime ?? 0,
            ...Q.githubActionsMetadata && {
                githubActor: Q.githubActionsMetadata.actor,
                githubActorId: Q.githubActionsMetadata.actorId,
                githubRepository: Q.githubActionsMetadata.repository,
                githubRepositoryId: Q.githubActionsMetadata.repositoryId,
                githubRepositoryOwner: Q.githubActionsMetadata.repositoryOwner,
                githubRepositoryOwnerId: Q.githubActionsMetadata.repositoryOwnerId
            }
        }
    }
}

function cOB() {
    return at(!0)
}

function W$6() {
    if (xsA !== null) return xsA;
    return
}
async function X$6() {
    return
}
var xsA = null,
    ysA = null,
    at;
var eb = lazyLoader(() => {
    jQ();
    o2();
    S0();
    hB();
    I6();
    at = t1((A) => {
        let Q = Tb(),
            B = L1(),
            G, Z;
        if (A) {
            if (G = x4() ?? void 0, G && B.claudeCodeFirstTokenDate) {
                let W = new Date(B.claudeCodeFirstTokenDate).getTime();
                if (!isNaN(W)) Z = W
            }
        }
        let I = i6(),
            Y = I?.organizationUuid,
            J = I?.accountUuid;
        return {
            deviceId: Q,
            sessionId: G0(),
            email: W$6(),
            appVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION,
            organizationUuid: Y,
            accountUuid: J,
            userType: "external",
            subscriptionType: G,
            firstTokenTime: Z,
            ...process.env.GITHUB_ACTIONS === "true" && {
                githubActionsMetadata: {
                    actor: process.env.GITHUB_ACTOR,
                    actorId: process.env.GITHUB_ACTOR_ID,
                    repository: process.env.GITHUB_REPOSITORY,
                    repositoryId: process.env.GITHUB_REPOSITORY_ID,
                    repositoryOwner: process.env.GITHUB_REPOSITORY_OWNER,
                    repositoryOwnerId: process.env.GITHUB_REPOSITORY_OWNER_ID
                }
            }
        }
    })
});
async function V$6() {
    let A = i6()?.organizationUuid;
    if (!A) throw Error("No organization ID available");
    let Q = VI();
    if (Q.error) throw Error(`Auth error: TextComponent{Q.error}`);
    let B = {
        "Content-Type": "application/json",
        "User-Agent": MF(),
        ...Q.headers
    };
    try {
        let G = `https://api.anthropic.com/api/organization/TextComponent{A}/claude_code_sonnet_1m_access`,
            Z = await GQ.get(G, {
                headers: B,
                timeout: 5000
            });
        return {
            hasAccess: Z.data.has_access,
            hasAccessNotAsDefault: Z.data.has_access_not_as_default,
            hasError: !1
        }
    } catch (G) {
        return e(G), {
            hasAccess: !1,
            hasError: !0
        }
    }
}
async function D$6() {
    try {
        return await K$6()
    } catch (A) {
        return g("Sonnet-1M access check failed, defaulting to no access"), {
            hasAccess: !1,
            hasError: !0
        }
    }
}

function Kp() {
    let A = i6()?.organizationUuid;
    if (!A) return {
        hasAccess: !1,
        wasPartOfDefaultRollout: !1,
        needsRefresh: !1
    };
    let Q = L1(),
        B = (AB() ? Q.s1mAccessCache : Q.s1mNonSubscriberAccessCache)?.[A],
        G = Date.now();
    if (!B) return {
        hasAccess: !1,
        wasPartOfDefaultRollout: !1,
        needsRefresh: !0
    };
    let {
        hasAccess: Z,
        hasAccessNotAsDefault: I,
        timestamp: Y
    } = B, J = G - Y > H$6;
    return {
        hasAccess: Z || (I ?? !1),
        wasPartOfDefaultRollout: Z,
        needsRefresh: J
    }
}
async function pOB() {
    let {
        needsRefresh: A
    } = Kp();
    if (A) C$6()
}
async function C$6() {
    let A = i6()?.organizationUuid;
    if (!A) return;
    if (!AB()) {
        let Q = await bvA();
        if (!Q) return;
        let {
            uuid: B,
            rate_limit_tier: G
        } = Q.organization, Z = L1(), I = {
            ...Z.s1mNonSubscriberAccessCache,
            [B]: {
                hasAccess: G === "auto_prepaid_tier_3" || G === "manual_tier_3",
                timestamp: Date.now()
            }
        };
        d0({
            ...Z,
            s1mNonSubscriberAccessCache: I
        });
        return
    }
    try {
        let {
            hasAccess: Q,
            hasAccessNotAsDefault: B
        } = await D$6(), G = L1(), Z = {
            ...G.s1mAccessCache,
            [A]: {
                hasAccess: Q,
                hasAccessNotAsDefault: B,
                timestamp: Date.now()
            }
        };
        d0({
            ...G,
            s1mAccessCache: Z
        })
    } catch (Q) {
        g("Failed to fetch and cache Sonnet-1M access"), e(Q)
    }
}
var F$6 = 3600000,
    K$6, H$6 = 3600000;
var vsA = lazyLoader(() => {
    w3();
    kvA();
    XE();
    D0();
    u1();
    jQ();
    hB();
    pKA();
    K$6 = _vA(V$6, F$6)
});

function nOB() {
    return iOB
}

function $m1(A) {
    let Q = 2166136261,
        B = A.length;
    for (let G = 0; G < B; G++) Q ^= A.charCodeAt(G), Q += (Q << 1) + (Q << 4) + (Q << 7) + (Q << 8) + (Q << 24);
    return Q >>> 0
}

function M$A(A, Q, B) {
    if (B === 2) return $m1($m1(A + Q) + "") % 1e4 / 1e4;
    if (B === 1) return $m1(Q + A) % 1000 / 1000;
    return null
}

function E$6(A) {
    if (A <= 0) return [];
    return Array(A).fill(1 / A)
}

function bsA(A, Q) {
    return A >= Q[0] && A < Q[1]
}

function aOB(A, Q) {
    let B = M$A("__" + Q[0], A, 1);
    if (B === null) return !1;
    return B >= Q[1] && B < Q[2]
}

function sOB(A, Q) {
    for (let B = 0; B < Q.length; B++)
        if (bsA(A, Q[B])) return B;
    return -1
}

function qm1(A) {
    try {
        let Q = A.replace(/([^\\])\//g, "$1\\/");
        return new RegExp(Q)
    } catch (Q) {
        console.error(Q);
        return
    }
}

function fsA(A, Q) {
    if (!Q.length) return !1;
    let B = !1,
        G = !1;
    for (let Z = 0; Z < Q.length; Z++) {
        let I = $$6(A, Q[Z].type, Q[Z].pattern);
        if (Q[Z].include === !1) {
            if (I) return !1
        } else if (B = !0, I) G = !0
    }
    return G || !B
}

function z$6(A, Q, B) {
    try {
        let G = Q.replace(/[*.+?^TextComponent{}()|[\]\\]/g, "\\TextComponent&").replace(/_____/g, ".*");
        if (B) G = "\\/?" + G.replace(/(^\/|\/TextComponent)/g, "") + "\\/?";
        return new RegExp("^" + G + "TextComponent", "i").test(A)
    } catch (G) {
        return !1
    }
}

function U$6(A, Q) {
    try {
        let B = new URL(Q.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____"),
            G = [
                [A.host, B.host, !1],
                [A.pathname, B.pathname, !0]
            ];
        if (B.hash) G.push([A.hash, B.hash, !1]);
        return B.searchParams.forEach((Z, I) => {
            G.push([A.searchParams.get(I) || "", Z, !1])
        }), !G.some((Z) => !z$6(Z[0], Z[1], Z[2]))
    } catch (B) {
        return !1
    }
}

function $$6(A, Q, B) {
    try {
        let G = new URL(A, "https://_");
        if (Q === "regex") {
            let Z = qm1(B);
            if (!Z) return !1;
            return Z.test(G.href) || Z.test(G.href.substring(G.origin.length))
        } else if (Q === "simple") return U$6(G, B);
        return !1
    } catch (G) {
        return !1
    }
}

function rOB(A, Q, B) {
    if (Q = Q === void 0 ? 1 : Q, Q < 0) Q = 0;
    else if (Q > 1) Q = 1;
    let G = E$6(A);
    if (B = B || G, B.length !== A) B = G;
    let Z = B.reduce((Y, J) => J + Y, 0);
    if (Z < 0.99 || Z > 1.01) B = G;
    let I = 0;
    return B.map((Y) => {
        let J = I;
        return I += Y, [J, J + Q * Y]
    })
}

function oOB(A, Q, B) {
    if (!Q) return null;
    let G = Q.split("?")[1];
    if (!G) return null;
    let Z = G.replace(/#.*/, "").split("&").map((I) => I.split("=", 2)).filter((I) => {
        let [Y] = I;
        return Y === A
    }).map((I) => {
        let [, Y] = I;
        return parseInt(Y)
    });
    if (Z.length > 0 && Z[0] >= 0 && Z[0] < B) return Z[0];
    return null
}

function tOB(A) {
    try {
        return A()
    } catch (Q) {
        return console.error(Q), !1
    }
}
async function st(A, Q, B) {
    if (Q = Q || "", B = B || globalThis.crypto && globalThis.crypto.subtle || iOB.SubtleCrypto, !B) throw Error("No SubtleCrypto implementation found");
    try {
        let G = await B.importKey("raw", wm1(Q), {
                name: "AES-CBC",
                length: 128
            }, !0, ["encrypt", "decrypt"]),
            [Z, I] = A.split("."),
            Y = await B.decrypt({
                name: "AES-CBC",
                iv: wm1(Z)
            }, G, wm1(I));
        return new TextDecoder().decode(Y)
    } catch (G) {
        throw Error("Failed to decrypt")
    }
}

function O$A(A) {
    if (typeof A === "string") return A;
    return JSON.stringify(A)
}

function ow(A) {
    if (typeof A === "number") A = A + "";
    if (!A || typeof A !== "string") A = "0";
    let Q = A.replace(/(^v|\+.*TextComponent)/g, "").split(/[-.]/);
    if (Q.length === 3) Q.push("~");
    return Q.map((B) => B.match(/^[0-9]+TextComponent/) ? B.padStart(5, " ") : B).join("-")
}

function eOB() {
    let A;
    try {
        A = "1.6.1"
    } catch (Q) {
        A = ""
    }
    return A
}

function ARB(A, Q) {
    let B, G;
    try {
        B = new URL(A), G = new URL(Q)
    } catch (Z) {
        return console.error(`Unable to merge query strings: TextComponent{Z}`), Q
    }
    return B.searchParams.forEach((Z, I) => {
        if (G.searchParams.has(I)) return;
        G.searchParams.set(I, Z)
    }), G.toString()
}

function lOB(A) {
    return typeof A === "object" && A !== null
}

function hsA(A) {
    if (A.urlPatterns && A.variations.some((Q) => lOB(Q) && ("urlRedirect" in Q))) return "redirect";
    else if (A.variations.some((Q) => lOB(Q) && (Q.domMutations || ("js" in Q) || ("css" in Q)))) return "visual";
    return "unknown"
}
async function gsA(A, Q) {
    return new Promise((B) => {
        let G = !1,
            Z, I = (Y) => {
                if (G) return;
                G = !0, Z && clearTimeout(Z), B(Y || null)
            };
        if (Q) Z = setTimeout(() => I(), Q);
        A.then((Y) => I(Y)).catch(() => I())
    })
}
var iOB, wm1 = (A) => Uint8Array.from(atob(A), (Q) => Q.charCodeAt(0));
var R$A = lazyLoader(() => {
    iOB = {
        fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : void 0,
        SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : void 0,
        EventSource: globalThis.EventSource
    }
});

function GRB(A) {
    if (Object.assign(fH, A), !fH.backgroundSync) T$6()
}
async function ZRB(A) {
    let {
        instance: Q,
        timeout: B,
        skipCache: G,
        allowStale: Z,
        backgroundSync: I
    } = A;
    if (!I) fH.backgroundSync = !1;
    return L$6({
        instance: Q,
        allowStale: Z,
        timeout: B,
        skipCache: G
    })
}

function w$6(A) {
    let Q = T$A(A),
        B = d7A.get(Q) || new Set;
    B.add(A), d7A.set(Q, B)
}

function IRB(A) {
    d7A.forEach((Q) => Q.delete(A))
}

function q$6() {
    c7A.forEach((A) => {
        if (!A) return;
        A.state = "idle", Om1(A)
    })
}

function N$6() {
    c7A.forEach((A) => {
        if (!A) return;
        if (A.state !== "idle") return;
        Rm1(A)
    })
}
async function BRB() {
    try {
        if (!v_.localStorage) return;
        await v_.localStorage.setItem(fH.cacheKey, JSON.stringify(Array.from(Af.entries())))
    } catch (A) {}
}
async function L$6(A) {
    let {
        instance: Q,
        allowStale: B,
        timeout: G,
        skipCache: Z
    } = A, I = T$A(Q), Y = Lm1(Q), J = new Date, W = new Date(J.getTime() - fH.maxAge + fH.staleTTL);
    await M$6();
    let X = !fH.disableCache && !Z ? Af.get(Y) : void 0;
    if (X && (B || X.staleAt > J) && X.staleAt > W) {
        if (X.sse) p7A.add(I);
        if (X.staleAt < J) Nm1(Q);
        else Mm1(Q);
        return {
            data: X.data,
            success: !0,
            source: "cache"
        }
    } else return await gsA(Nm1(Q), G) || {
        data: null,
        success: !1,
        source: "timeout",
        error: Error("Timeout")
    }
}

function T$A(A) {
    let [Q, B] = A.getApiInfo();
    return `TextComponent{Q}||TextComponent{B}`
}

function Lm1(A) {
    let Q = T$A(A);
    if (!("isRemoteEval" in A) || !A.isRemoteEval()) return Q;
    let B = A.getAttributes(),
        G = A.getCacheKeyAttributes() || Object.keys(A.getAttributes()),
        Z = {};
    G.forEach((J) => {
        Z[J] = B[J]
    });
    let I = A.getForcedVariations(),
        Y = A.getUrl();
    return `TextComponent{Q}||TextComponent{JSON.stringify({ca:Z,fv:I,url:Y})}`
}
async function M$6() {
    if (QRB) return;
    QRB = !0;
    try {
        if (v_.localStorage) {
            let A = await v_.localStorage.getItem(fH.cacheKey);
            if (!fH.disableCache && A) {
                let Q = JSON.parse(A);