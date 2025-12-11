/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_025.js
 * 处理时间: 2025-12-09T03:41:36.276Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 25/30
 * Lines: 324428 - 325927 (1500 lines)
 * Original file: cli.js
 */

    })
});
var dL2 = moduleWrapper((w40) => {
    Object.defineProperty(w40, "__esModule", {
        value: !0
    });
    w40.OTLPTraceExporter = void 0;
    var Wy5 = mL2();
    Object.defineProperty(w40, "OTLPTraceExporter", {
        enumerable: !0,
        get: function() {
            return Wy5.OTLPTraceExporter
        }
    })
});
class q40 {
    error(A, ...Q) {
        e(Error(A))
    }
    warn(A, ...Q) {
        e(Error(A))
    }
    info(A, ...Q) {
        return
    }
    debug(A, ...Q) {
        return
    }
    verbose(A, ...Q) {
        return
    }
}
var cL2 = lazyLoader(() => {
    u1()
});
async function Vy5() {
    let A = VI();
    if (A.error) throw g(`Metrics opt-out check failed: TextComponent{A.error}`), Error(`Auth error: TextComponent{A.error}`);
    let Q = {
        "Content-Type": "application/json",
        "User-Agent": MF(),
        ...A.headers
    };
    try {
        let G = await GQ.get("https://api.anthropic.com/api/claude_code/organizations/metrics_enabled", {
            headers: Q,
            timeout: 5000
        });
        return g(`Metrics opt-out API response: enabled=TextComponent{G.data.metrics_logging_enabled}, vcsLinking=TextComponent{G.data.vcs_account_linking_enabled}`), {
            enabled: G.data.metrics_logging_enabled,
            vcsAccountLinkingEnabled: G.data.vcs_account_linking_enabled,
            hasError: !1
        }
    } catch (B) {
        return g(`Failed to check metrics opt-out status: TextComponent{B instanceof Error?B.message:String(B)}`), e(B), {
            enabled: !1,
            vcsAccountLinkingEnabled: !1,
            hasError: !0
        }
    }
}
async function S81() {
    try {
        return await Ky5()
    } catch (A) {
        return g("Metrics check failed, defaulting to disabled"), {
            enabled: !1,
            vcsAccountLinkingEnabled: !1,
            hasError: !0
        }
    }
}
var Fy5 = 3600000,
    Ky5;
var N40 = lazyLoader(() => {
    w3();
    kvA();
    XE();
    D0();
    u1();
    Ky5 = _vA(Vy5, Fy5)
});
class M40 {
    endpoint;
    timeout;
    pendingExports = [];
    isShutdown = !1;
    constructor(A = {}) {
        this.endpoint = "https://api.anthropic.com/api/claude_code/metrics", this.timeout = A.timeout || 5000
    }
    async export (A, Q) {
        if (this.isShutdown) {
            Q({
                code: EJA.ExportResultCode.FAILED,
                error: Error("Exporter has been shutdown")
            });
            return
        }
        let B = this.doExport(A, Q);
        this.pendingExports.push(B), B.finally(() => {
            let G = this.pendingExports.indexOf(B);
            if (G > -1) this.pendingExports.splice(G, 1)
        })
    }
    async doExport(A, Q) {
        try {
            if (!(await S81()).enabled) {
                g("Metrics export disabled by organization setting"), Q({
                    code: EJA.ExportResultCode.SUCCESS
                });
                return
            }
            let G = this.transformMetricsForInternal(A),
                Z = VI();
            if (Z.error) {
                g(`Metrics export failed: TextComponent{Z.error}`), Q({
                    code: EJA.ExportResultCode.FAILED,
                    error: Error(Z.error)
                });
                return
            }
            let I = {
                    "Content-Type": "application/json",
                    "User-Agent": MF(),
                    ...Z.headers
                },
                Y = await GQ.post(this.endpoint, G, {
                    timeout: this.timeout,
                    headers: I
                });
            g("BigQuery metrics exported successfully"), g(`BigQuery API Response: TextComponent{JSON.stringify(Y.data,null,2)}`), Q({
                code: EJA.ExportResultCode.SUCCESS
            })
        } catch (B) {
            g(`BigQuery metrics export failed: TextComponent{B instanceof Error?B.message:String(B)}`), e(B), Q({
                code: EJA.ExportResultCode.FAILED,
                error: B instanceof Error ? B : Error("Unknown export error")
            })
        }
    }
    transformMetricsForInternal(A) {
        let Q = A.resource.attributes,
            B = {
                "service.name": Q["service.name"] || "claude-code",
                "service.version": Q["service.version"] || "unknown",
                "os.type": Q["os.type"] || "unknown",
                "os.version": Q["os.version"] || "unknown",
                "host.arch": Q["host.arch"] || "unknown",
                "aggregation.temporality": this.selectAggregationTemporality() === L40.AggregationTemporality.DELTA ? "delta" : "cumulative"
            };
        if (Q["wsl.version"]) B["wsl.version"] = Q["wsl.version"];
        if (AB()) {
            B["user.customer_type"] = "claude_ai";
            let Z = x4();
            if (Z) B["user.subscription_type"] = Z
        } else B["user.customer_type"] = "api";
        return {
            resource_attributes: B,
            metrics: A.scopeMetrics.flatMap((Z) => Z.metrics.map((I) => ({
                name: I.descriptor.name,
                description: I.descriptor.description,
                unit: I.descriptor.unit,
                data_points: this.extractDataPoints(I)
            })))
        }
    }
    extractDataPoints(A) {
        return (A.dataPoints || []).filter((B) => typeof B.value === "number").map((B) => ({
            attributes: this.convertAttributes(B.attributes),
            value: B.value,
            timestamp: this.hrTimeToISOString(B.endTime || B.startTime || [Date.now() / 1000, 0])
        }))
    }
    async shutdown() {
        this.isShutdown = !0, await this.forceFlush(), g("BigQuery metrics exporter shutdown complete")
    }
    async forceFlush() {
        await Promise.all(this.pendingExports), g("BigQuery metrics exporter flush complete")
    }
    convertAttributes(A) {
        let Q = {};
        if (A) {
            for (let [B, G] of Object.entries(A))
                if (G !== void 0 && G !== null) Q[B] = String(G)
        }
        return Q
    }
    hrTimeToISOString(A) {
        let [Q, B] = A;
        return new Date(Q * 1000 + B / 1e6).toISOString()
    }
    selectAggregationTemporality() {
        return L40.AggregationTemporality.DELTA
    }
}
var L40, EJA;
var pL2 = lazyLoader(() => {
    w3();
    D0();
    u1();
    XE();
    N40();
    hB();
    L40 = esmImport(Mi(), 1), EJA = esmImport(t6(), 1)
});

function O40(A) {
    let Q = Dy5[A],
        B = process.env[A];
    if (B === void 0) return Q;
    return B === "true"
}

function zJA() {
    let A = Tb(),
        Q = G0(),
        B = {
            "user.id": A
        };
    if (O40("OTEL_METRICS_INCLUDE_SESSION_ID")) B["session.id"] = Q;
    if (O40("OTEL_METRICS_INCLUDE_VERSION")) B["app.version"] = {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION;
    let G = i6();
    if (G) {
        let {
            organizationUuid: Z,
            emailAddress: I,
            accountUuid: Y
        } = G;
        if (Z) B["organization.id"] = Z;
        if (I) B["user.email"] = I;
        if (Y && O40("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) B["user.account_uuid"] = Y
    }
    if (DU.terminal) B["terminal.type"] = DU.terminal;
    return B
}
var Dy5;
var _81 = lazyLoader(() => {
    S0();
    jQ();
    it();
    hB();
    Dy5 = {
        OTEL_METRICS_INCLUDE_SESSION_ID: !0,
        OTEL_METRICS_INCLUDE_VERSION: !1,
        OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0
    }
});
import {
    AsyncLocalStorage as iL2
} from "async_hooks";

function Jy(A) {
    return A.spanContext().spanId || ""
}

function HP() {
    return parseBoolean(process.env.ENABLE_ENHANCED_TELEMETRY_BETA)
}

function Yy() {
    return sX.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0")
}

function nOA(A, Q = {}) {
    return {
        ...zJA(),
        "span.type": A,
        ...Q
    }
}

function nL2(A) {
    if (!HP()) return sX.trace.getActiveSpan() || Yy().startSpan("dummy");
    let Q = Yy(),
        G = parseBoolean(process.env.OTEL_LOG_USER_PROMPTS) ? A : "<REDACTED>";
    lL2++;
    let Z = nOA("interaction", {
            user_prompt: G,
            user_prompt_length: A.length,
            "interaction.sequence": lL2
        }),
        I = Q.startSpan("claude_code.interaction", {
            attributes: Z
        }),
        Y = Jy(I);
    return cE.set(Y, {
        span: I,
        startTime: Date.now(),
        attributes: Z
    }), lOA.enterWith(I), I
}

function k81() {
    if (!HP()) return;
    let A = lOA.getStore();
    if (!A) return;
    let Q = Jy(A),
        B = cE.get(Q);
    if (!B) return;
    if (B.ended) return;
    let G = Date.now() - B.startTime;
    B.span.setAttributes({
        "interaction.duration_ms": G
    }), B.span.end(), B.ended = !0, cE.delete(Q), lOA.exit(() => {})
}

function aL2(A) {
    if (!HP()) return sX.trace.getActiveSpan() || Yy().startSpan("dummy");
    let Q = Yy(),
        B = lOA.getStore(),
        G = nOA("llm_request", {
            model: A,
            "llm_request.context": B ? "interaction" : "standalone"
        }),
        Z = B ? sX.trace.setSpan(sX.context.active(), B) : sX.context.active(),
        I = Q.startSpan("claude_code.llm_request", {
            attributes: G
        }, Z),
        Y = Jy(I);
    return cE.set(Y, {
        span: I,
        startTime: Date.now(),
        attributes: G
    }), I
}

function R40(A) {
    if (!HP()) return;
    let Q;
    for (let [, I] of Array.from(cE.entries()).reverse())
        if (I.attributes["span.type"] === "llm_request") {
            Q = I;
            break
        } if (!Q) return;
    let G = {
        duration_ms: Date.now() - Q.startTime
    };
    if (A) {
        if (A.inputTokens !== void 0) G.input_tokens = A.inputTokens;
        if (A.outputTokens !== void 0) G.output_tokens = A.outputTokens;
        if (A.cacheReadTokens !== void 0) G.cache_read_tokens = A.cacheReadTokens;
        if (A.cacheCreationTokens !== void 0) G.cache_creation_tokens = A.cacheCreationTokens;
        if (A.success !== void 0) G.success = A.success;
        if (A.statusCode !== void 0) G.status_code = A.statusCode;
        if (A.error !== void 0) G.error = A.error;
        if (A.attempt !== void 0) G.attempt = A.attempt;
        if (A.modelResponse !== void 0) {
            let I = Boolean(process.env.OTEL_LOG_MODEL_RESPONSE);
            G.model_response = I ? A.modelResponse : "<REDACTED>"
        }
    }
    Q.span.setAttributes(G), Q.span.end();
    let Z = Jy(Q.span);
    cE.delete(Z)
}

function sL2(A, Q) {
    if (!HP()) return sX.trace.getActiveSpan() || Yy().startSpan("dummy");
    let B = Yy(),
        G = lOA.getStore(),
        Z = nOA("tool", {
            tool_name: A,
            ...Q
        }),
        I = G ? sX.trace.setSpan(sX.context.active(), G) : sX.context.active(),
        Y = B.startSpan("claude_code.tool", {
            attributes: Z
        }, I),
        J = Jy(Y);
    return cE.set(J, {
        span: Y,
        startTime: Date.now(),
        attributes: Z
    }), iOA.enterWith(Y), Y
}

function rL2() {
    if (!HP()) return sX.trace.getActiveSpan() || Yy().startSpan("dummy");
    let A = Yy(),
        Q = iOA.getStore(),
        B = nOA("tool.blocked_on_user"),
        G = Q ? sX.trace.setSpan(sX.context.active(), Q) : sX.context.active(),
        Z = A.startSpan("claude_code.tool.blocked_on_user", {
            attributes: B
        }, G),
        I = Jy(Z);
    return cE.set(I, {
        span: Z,
        startTime: Date.now(),
        attributes: B
    }), Z
}

function T40(A, Q) {
    if (!HP()) return;
    let B;
    for (let [, Y] of Array.from(cE.entries()).reverse())
        if (Y.attributes["span.type"] === "tool.blocked_on_user") {
            B = Y;
            break
        } if (!B) return;
    let Z = {
        duration_ms: Date.now() - B.startTime
    };
    if (A) Z.decision = A;
    if (Q) Z.source = Q;
    B.span.setAttributes(Z), B.span.end();
    let I = Jy(B.span);
    cE.delete(I)
}

function oL2() {
    if (!HP()) return sX.trace.getActiveSpan() || Yy().startSpan("dummy");
    let A = Yy(),
        Q = iOA.getStore(),
        B = nOA("tool.execution"),
        G = Q ? sX.trace.setSpan(sX.context.active(), Q) : sX.context.active(),
        Z = A.startSpan("claude_code.tool.execution", {
            attributes: B
        }, G),
        I = Jy(Z);
    return cE.set(I, {
        span: Z,
        startTime: Date.now(),
        attributes: B
    }), Z
}

function P40(A) {
    if (!HP()) return;
    let Q;
    for (let [, I] of Array.from(cE.entries()).reverse())
        if (I.attributes["span.type"] === "tool.execution") {
            Q = I;
            break
        } if (!Q) return;
    let G = {
        duration_ms: Date.now() - Q.startTime
    };
    if (A) {
        if (A.success !== void 0) G.success = A.success;
        if (A.error !== void 0) G.error = A.error
    }
    Q.span.setAttributes(G), Q.span.end();
    let Z = Jy(Q.span);
    cE.delete(Z)
}

function y81() {
    if (!HP()) return;
    let A;
    for (let [, G] of Array.from(cE.entries()).reverse())
        if (G.attributes["span.type"] === "tool") {
            A = G;
            break
        } if (!A) return;
    let Q = Date.now() - A.startTime;
    A.span.setAttributes({
        duration_ms: Q
    }), A.span.end();
    let B = Jy(A.span);
    cE.delete(B), iOA.exit(() => {})
}

function Cy5(A, Q = Hy5) {
    if (A.length <= Q) return {
        content: A,
        truncated: !1
    };
    return {
        content: A.slice(0, Q) + `

[TRUNCATED - Content exceeds 60KB limit]`,
        truncated: !0
    }
}

function Ey5() {
    return parseBoolean(process.env.OTEL_LOG_TOOL_CONTENT)
}

function tL2(A, Q) {
    if (!HP() || !Ey5()) return;
    let B = iOA.getStore();
    if (!B) return;
    let G = {};
    for (let [Z, I] of Object.entries(Q))
        if (typeof I === "string") {
            let {
                content: Y,
                truncated: J
            } = Cy5(I);
            if (G[Z] = Y, J) G[`TextComponent{Z}_truncated`] = !0, G[`TextComponent{Z}_original_length`] = I.length
        } else G[Z] = I;
    B.addEvent(A, G)
}
var sX, lOA, iOA, cE, lL2 = 0,
    Hy5 = 61440;
var A0A = lazyLoader(() => {
    _81();
    hQ();
    sX = esmImport(W9(), 1), lOA = new iL2, iOA = new iL2, cE = new Map
});

function wy5() {
    if (c0()?.otelHeadersHelper) process.env.OTEL_EXPORTER_OTLP_HEADERS = Object.entries(wQB()).map(([Q, B]) => `TextComponent{Q}=TextComponent{B}`).join(",");
    if (!process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE) process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE = "delta"
}

function qy5() {
    let A = (process.env.OTEL_METRICS_EXPORTER || "").trim().split(",").filter(Boolean),
        Q = parseInt(process.env.OTEL_METRIC_EXPORT_INTERVAL || zy5.toString()),
        B = [];
    for (let G of A)
        if (G === "console") {
            let Z = new x81.ConsoleMetricExporter,
                I = Z.export.bind(Z);
            Z.export = (Y, J) => {
                if (Y.resource && Y.resource.attributes) g(`
=== Resource Attributes ===`), g(JSON.stringify(Y.resource.attributes)), g(`===========================
`);
                return I(Y, J)
            }, B.push(Z)
        } else if (G === "otlp") {
        let Z = process.env.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim(),
            I = y40();
        switch (Z) {
            case "grpc":
                B.push(new AM2.OTLPMetricExporter);
                break;
            case "http/json":
                B.push(new QM2.OTLPMetricExporter(I));
                break;
            case "http/protobuf":
                B.push(new eL2.OTLPMetricExporter(I));
                break;
            default:
                throw Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: TextComponent{Z}`)
        }
    } else if (G === "prometheus") B.push(new BM2.PrometheusExporter);
    else throw Error(`Unknown exporter type set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: TextComponent{G}`);
    return B.map((G) => {
        if ("export" in G) return new k40.PeriodicExportingMetricReader({
            exporter: G,
            exportIntervalMillis: Q
        });
        return G
    })
}

function Ny5() {
    let A = (process.env.OTEL_LOGS_EXPORTER || "").trim().split(",").filter(Boolean),
        Q = [];
    for (let B of A)
        if (B === "console") Q.push(new $JA.ConsoleLogRecordExporter);
        else if (B === "otlp") {
        let G = process.env.OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim(),
            Z = y40();
        switch (G) {
            case "grpc":
                Q.push(new ZM2.OTLPLogExporter);
                break;
            case "http/json":
                Q.push(new IM2.OTLPLogExporter(Z));
                break;
            case "http/protobuf":
                Q.push(new GM2.OTLPLogExporter(Z));
                break;
            default:
                throw Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_LOGS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: TextComponent{G}`)
        }
    } else throw Error(`Unknown exporter type set in OTEL_LOGS_EXPORTER env var: TextComponent{B}`);
    return Q
}

function Ly5() {
    let A = (process.env.OTEL_TRACES_EXPORTER || "").trim().split(",").filter(Boolean),
        Q = [];
    for (let B of A)
        if (B === "console") Q.push(new wJA.ConsoleSpanExporter);
        else if (B === "otlp") {
        let G = process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim(),
            Z = y40();
        switch (G) {
            case "grpc":
                Q.push(new JM2.OTLPTraceExporter);
                break;
            case "http/json":
                Q.push(new WM2.OTLPTraceExporter(Z));
                break;
            case "http/protobuf":
                Q.push(new YM2.OTLPTraceExporter(Z));
                break;
            default:
                throw Error(`Unknown protocol set in OTEL_EXPORTER_OTLP_TRACES_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: TextComponent{G}`)
        }
    } else throw Error(`Unknown exporter type set in OTEL_TRACES_EXPORTER env var: TextComponent{B}`);
    return Q
}

function j40() {
    return parseBoolean(process.env.CLAUDE_CODE_ENABLE_TELEMETRY)
}

function My5() {
    let A = new M40;
    return new k40.PeriodicExportingMetricReader({
        exporter: A,
        exportIntervalMillis: 300000
    })
}

function Oy5() {
    let A = x4(),
        Q = AB() && (A === "enterprise" || A === "team");
    return UQB() || Q
}

function XM2() {
    v4("telemetry_init_start"), wy5(), UJA.diag.setLogger(new q40, UJA.DiagLogLevel.ERROR);
    let A = [];
    if (j40()) A.push(...qy5());
    if (Oy5()) A.push(My5());
    let Q = uQ(),
        B = {
            [ai.ATTR_SERVICE_NAME]: "claude-code",
            [ai.ATTR_SERVICE_VERSION]: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION
        };
    if (Q === "wsl") {
        let K = ps();
        if (K) B["wsl.version"] = K
    }
    let G = CP.resourceFromAttributes(B),
        Z = CP.resourceFromAttributes(CP.osDetector.detect().attributes || {}),
        I = CP.hostDetector.detect(),
        Y = I.attributes?.[ai.SEMRESATTRS_HOST_ARCH] ? {
            [ai.SEMRESATTRS_HOST_ARCH]: I.attributes[ai.SEMRESATTRS_HOST_ARCH]
        } : {},
        J = CP.resourceFromAttributes(Y),
        W = CP.resourceFromAttributes(CP.envDetector.detect().attributes || {}),
        X = G.merge(Z).merge(J).merge(W),
        F = new x81.MeterProvider({
            resource: X,
            views: [],
            readers: A
        });
    if (zE0(F), j40()) {
        let K = Ny5();
        if (K.length > 0) {
            let D = new $JA.LoggerProvider({
                resource: X,
                processors: K.map((C) => new $JA.BatchLogRecordProcessor(C, {
                    scheduledDelayMillis: parseInt(process.env.OTEL_LOGS_EXPORT_INTERVAL || Uy5.toString())
                }))
            });
            S40.logs.setGlobalLoggerProvider(D), DE0(D);
            let H = S40.logs.getLogger("com.anthropic.claude_code.events", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION);
            CE0(H), process.on("beforeExit", async () => {
                await D?.forceFlush()
            }), process.on("exit", () => {
                D?.forceFlush()
            })
        }
    }
    if (j40()) {
        if (parseBoolean(process.env.ENABLE_ENHANCED_TELEMETRY_BETA)) {
            let K = Ly5();
            if (K.length > 0) {
                let D = K.map((C) => new wJA.BatchSpanProcessor(C, {
                        scheduledDelayMillis: parseInt(process.env.OTEL_TRACES_EXPORT_INTERVAL || $y5.toString())
                    })),
                    H = new wJA.BasicTracerProvider({
                        resource: X,
                        spanProcessors: D
                    });
                UJA.trace.setGlobalTracerProvider(H), UE0(H)
            }
        }
    }
    return wG(async () => {
        let K = parseInt(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "2000");
        try {
            k81();
            let D = [F.shutdown()],
                H = tW1();
            if (H) D.push(H.shutdown());
            let C = eW1();
            if (C) D.push(C.shutdown());
            await Promise.race([Promise.all(D), new Promise((E, z) => setTimeout(() => z(Error("OpenTelemetry shutdown timeout")), K))])
        } catch (D) {
            if (D instanceof Error && D.message.includes("timeout")) g(`
OpenTelemetry telemetry flush timed out after TextComponent{K}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: TextComponent{K}ms
`, {
                level: "error"
            });
            throw D
        }
    }), F.getMeter("com.anthropic.claude_code", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION)
}
async function FM2() {
    let A = EE0();
    if (!A) return;
    let Q = parseInt(process.env.CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS || "5000");
    try {
        let B = [A.forceFlush()],
            G = tW1();
        if (G) B.push(G.forceFlush());
        let Z = eW1();
        if (Z) B.push(Z.forceFlush());
        await Promise.race([Promise.all(B), new Promise((I, Y) => setTimeout(() => Y(Error("OpenTelemetry flush timeout")), Q))]), g("Telemetry flushed successfully")
    } catch (B) {
        if (B instanceof Error && B.message.includes("timeout")) g(`Telemetry flush timed out after TextComponent{Q}ms. Some metrics may not be exported.`, {
            level: "warn"
        });
        else g(`Telemetry flush failed: TextComponent{B instanceof Error?B.message:String(B)}`, {
            level: "error"
        })
    }
}

function y40() {
    let A = Fc(),
        Q = oR(),
        B = process.env.OTEL_EXPORTER_OTLP_ENDPOINT;
    if (!A || B && HlA(B)) return Q ? {
        httpAgentOptions: Q
    } : {};
    return {
        httpAgentOptions: (Z) => {
            return Q ? new _40.HttpsProxyAgent(A, {
                cert: Q.cert,
                key: Q.key,
                passphrase: Q.passphrase
            }) : new _40.HttpsProxyAgent(A)
        }
    }
}
var UJA, S40, x81, eL2, AM2, QM2, BM2, k40, $JA, GM2, ZM2, IM2, wJA, YM2, JM2, WM2, CP, ai, _40, zy5 = 60000,
    Uy5 = 5000,
    $y5 = 5000;
var x40 = lazyLoader(() => {
    cL2();
    pL2();
    XH();
    Vc();
    hB();
    S0();
    A0A();
    s5();
    hB();
    RB();
    D0();
    Qe();
    X3A();
    hQ();
    UJA = esmImport(W9(), 1), S40 = esmImport(xu1(), 1), x81 = esmImport(Mi(), 1), eL2 = esmImport(lK2(), 1), AM2 = esmImport(Zq2(), 1), QM2 = esmImport(c91(), 1), BM2 = esmImport(Dq2(), 1), k40 = esmImport(Mi(), 1), $JA = esmImport(Dm1(), 1), GM2 = esmImport(Mq2(), 1), ZM2 = esmImport(Sq2(), 1), IM2 = esmImport(mq2(), 1), wJA = esmImport(HL2(), 1), YM2 = esmImport(OL2(), 1), JM2 = esmImport(_L2(), 1), WM2 = esmImport(dL2(), 1), CP = esmImport(f7A(), 1), ai = esmImport(ut(), 1), _40 = esmImport(vCA(), 1)
});
async function b40({
    clearOnboarding: A = !1
}) {
    await FM2(), EQB(), Gw().delete(), v81();
    let B = L1();
    if (A) {
        if (B.hasCompletedOnboarding = !1, B.subscriptionNoticeCount = 0, B.hasAvailableSubscription = !1, B.customApiKeyResponses?.approved) B.customApiKeyResponses.approved = []
    }
    B.oauthAccount = void 0, d0(B)
}
var v40, v81 = () => {
        U6.cache?.clear?.(), W4A(), KM2(), dRB(), at.cache?.clear?.(), Ni.cache?.clear?.()
    },
    VM2;
var b81 = lazyLoader(() => {
    jQ();
    Bh();
    jt();
    hA();
    hB();
    vvA();
    ej();
    O9();
    eb();
    _J();
    LYA();
    x40();
    BrA();
    v40 = esmImport(VA(), 1);
    VM2 = {
        type: "local-jsx",
        name: "logout",
        description: "Sign out from your Anthropic account",
        isEnabled: () => !process.env.DISABLE_LOGOUT_COMMAND,
        isHidden: !1,
        async call() {
            if (!bH()) await SJ();
            await b40({
                clearOnboarding: !0
            });
            let A = v40.createElement(TextComponent, null, "Successfully logged out from your Anthropic account.");
            return setTimeout(() => {
                c8(0, "logout")
            }, 200), A
        },
        userFacingName() {
            return "logout"
        }
    }
});
class aOA {
    codeVerifier;
    authCodeListener = null;
    port = null;
    manualAuthCodeResolver = null;
    constructor() {
        this.codeVerifier = RI2()
    }
    async startOAuthFlow(A, Q) {
        this.authCodeListener = new l00, this.port = await this.authCodeListener.start();
        let B = TI2(this.codeVerifier),
            G = PI2(),
            Z = {
                codeChallenge: B,
                state: G,
                port: this.port,
                loginWithClaudeAi: Q?.loginWithClaudeAi,
                inferenceOnly: Q?.inferenceOnly,
                orgUUID: Q?.orgUUID
            },
            I = YE1({
                ...Z,
                isManual: !0
            }),
            Y = YE1({
                ...Z,
                isManual: !1
            }),
            J = await this.waitForAuthorizationCode(G, async () => {
                await A(I), await gZ(Y)
            }),
            W = this.authCodeListener?.hasPendingResponse() ?? !1;
        BA("tengu_oauth_auth_code_received", {
            automatic: W
        });
        try {
            let X = await si0(J, G, this.codeVerifier, this.port, !W, Q?.expiresIn);
            await b40({
                clearOnboarding: !1
            });
            let F = await JE1(X.access_token);
            if (X.account) WE1({
                accountUuid: X.account.uuid,
                emailAddress: X.account.email_address,
                organizationUuid: X.organization?.uuid,
                displayName: F.displayName,
                hasExtraUsageEnabled: F.hasExtraUsageEnabled ?? void 0
            });
            if (W) {
                let V = fvA(X.scope);
                this.authCodeListener?.handleSuccessRedirect(V)
            }
            return this.formatTokens(X, F.subscriptionType, F.rateLimitTier)
        } catch (X) {
            if (W) this.authCodeListener?.handleErrorRedirect();
            throw X
        } finally {
            this.authCodeListener?.close()
        }
    }
    async waitForAuthorizationCode(A, Q) {
        return new Promise((B, G) => {
            this.manualAuthCodeResolver = B, this.authCodeListener?.waitForAuthorization(A, Q).then((Z) => {
                this.manualAuthCodeResolver = null, B(Z)
            }).catch((Z) => {
                this.manualAuthCodeResolver = null, G(Z)
            })
        })
    }
    handleManualAuthCodeInput(A) {
        if (this.manualAuthCodeResolver) this.manualAuthCodeResolver(A.authorizationCode), this.manualAuthCodeResolver = null, this.authCodeListener?.close()
    }
    formatTokens(A, Q, B) {
        return {
            accessToken: A.access_token,
            refreshToken: A.refresh_token,
            expiresAt: Date.now() + A.expires_in * 1000,
            scopes: fvA(A.scope),
            subscriptionType: Q,
            rateLimitTier: B
        }
    }
    cleanup() {
        this.authCodeListener?.close(), this.manualAuthCodeResolver = null
    }
}
var f40 = lazyLoader(() => {
    lM();
    OI2();
    jI2();
    pN();
    b81();
    w0()
});

function fF(A, Q) {
    return A.flatMap((B, G) => G ? [Q(G), B] : [B])
}
async function Ry5() {
    try {
        if (parseBoolean(process.env.CLAUDE_CODE_USE_BEDROCK) || parseBoolean(process.env.CLAUDE_CODE_USE_VERTEX) || parseBoolean(process.env.CLAUDE_CODE_USE_FOUNDRY)) return !0;
        return await GQ.get("https://api.anthropic.com/api/hello", {
            timeout: 5000,
            headers: {
                "Cache-Control": "no-cache"
            }
        }), !0
    } catch (A) {
        if (!(A instanceof ew0)) return !0;
        return A.code !== "EHOSTUNREACH"
    }
}

function h40() {
    let [A, Q] = f81.useState(null);
    return f81.useEffect(() => {
        let B = !0;
        if (process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) return;
        let G = async () => {
            if (!B) return;
            let I = await Ry5();
            if (B) Q(I)
        };
        G();
        let Z = setInterval(G, Ty5);
        return () => {
            B = !1, clearInterval(Z)
        }
    }, []), {
        isConnected: A
    }
}
var f81, Ty5 = 30000;
var DM2 = lazyLoader(() => {
    w3();
    hQ();
    f81 = esmImport(VA(), 1)
});
class qJA {
    activeOperations = new Set;
    lastUserActivityTime = 0;
    lastCLIRecordedTime = Date.now();
    isCLIActive = !1;
    USER_ACTIVITY_TIMEOUT_MS = 5000;
    static instance = null;
    static getInstance() {
        if (!qJA.instance) qJA.instance = new qJA;
        return qJA.instance
    }
    recordUserActivity() {
        if (!this.isCLIActive && this.lastUserActivityTime !== 0) {
            let Q = (Date.now() - this.lastUserActivityTime) / 1000;
            if (Q > 0) {
                let B = oW1();
                if (B) {
                    let G = this.USER_ACTIVITY_TIMEOUT_MS / 1000;
                    if (Q < G) B.add(Q, {
                        type: "user"
                    })
                }
            }
        }
        this.lastUserActivityTime = Date.now()
    }
    startCLIActivity(A) {
        if (this.activeOperations.has(A)) this.endCLIActivity(A);
        let Q = this.activeOperations.size === 0;
        if (this.activeOperations.add(A), Q) this.isCLIActive = !0, this.lastCLIRecordedTime = Date.now()
    }
    endCLIActivity(A) {
        if (this.activeOperations.delete(A), this.activeOperations.size === 0) {
            let Q = Date.now(),
                B = (Q - this.lastCLIRecordedTime) / 1000;
            if (B > 0) {
                let G = oW1();
                if (G) G.add(B, {
                    type: "cli"
                })
            }
            this.lastCLIRecordedTime = Q, this.isCLIActive = !1
        }
    }
    async trackOperation(A, Q) {
        this.startCLIActivity(A);
        try {
            return await Q()
        } finally {
            this.endCLIActivity(A)
        }
    }
    getActivityStates() {
        return {
            isUserActive: (Date.now() - this.lastUserActivityTime) / 1000 < this.USER_ACTIVITY_TIMEOUT_MS / 1000,
            isCLIActive: this.isCLIActive,
            activeOperationCount: this.activeOperations.size
        }
    }
}
var sOA;
var g40 = lazyLoader(() => {
    S0();
    sOA = qJA.getInstance()
});

function si({
    todos: A,
    isStandalone: Q = !1
}) {
    if (A.length === 0) return null;
    let B = JK.createElement(JK.Fragment, null, A.map((G, Z) => {
        let I = G.status === "completed" ? V1.checkboxOn : V1.checkboxOff;
        return JK.createElement(j, {
            key: Z
        }, JK.createElement(TextComponent, {
            dimColor: G.status === "completed"
        }, I, " "), JK.createElement(TextComponent, {
            bold: G.status === "in_progress",
            dimColor: G.status === "completed",
            strikethrough: G.status === "completed"
        }, G.content))
    }));
    if (Q) return JK.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        marginLeft: 2
    }, JK.createElement(TextComponent, {
        bold: !0,
        dimColor: !0
    }, "Todos"), B);
    return JK.createElement(j, {
        flexDirection: "column"
    }, B)
}
var JK;
var rOA = lazyLoader(() => {
    hA();
    n2();
    JK = esmImport(VA(), 1)
});

function HM2({
    streamMode: A
}) {
    let [Q, B] = oOA.useState(null), [G, Z] = oOA.useState(null);
    if (oOA.useEffect(() => {
            if (A === "thinking" && Q === null) B(Date.now());
            else if (A !== "thinking" && Q !== null) Z(Date.now() - Q), B(null)
        }, [A, Q]), A === "thinking") return EP.createElement(j, {
        marginTop: 1
    }, EP.createElement(TextComponent, {
        dimColor: !0
    }, "∴ Thinking…"));
    if (G !== null) return EP.createElement(j, {
        marginTop: 1
    }, EP.createElement(TextComponent, {
        dimColor: !0
    }, "∴ Thought for ", Math.max(1, Math.round(G / 1000)), "s (", EP.createElement(TextComponent, {
        dimColor: !0,
        bold: !0
    }, "ctrl+o"), " ", "to show thinking)"));
    return null
}
var EP, oOA;
var CM2 = lazyLoader(() => {
    hA();
    EP = esmImport(VA(), 1), oOA = esmImport(VA(), 1)
});

function tOA() {
    if (process.env.TERM === "xterm-ghostty") return ["·", "✢", "✳", "✶", "✻", "*"];
    return process.platform === "darwin" ? ["·", "✢", "✳", "✶", "✻", "✽"] : ["·", "✢", "*", "✶", "✻", "✽"]
}

function Q0A(A, Q, B) {
    return {
        r: Math.round(A.r + (Q.r - A.r) * B),
        g: Math.round(A.g + (Q.g - A.g) * B),
        b: Math.round(A.b + (Q.b - A.b) * B)
    }
}

function NJA(A) {
    return `rgb(TextComponent{A.r},TextComponent{A.g},TextComponent{A.b})`
}

function m40({
    char: A,
    flashOpacity: Q
}) {
    let Z = Q0A({
        r: 215,
        g: 119,
        b: 87
    }, {
        r: 245,
        g: 149,
        b: 117
    }, Q);
    return u40.createElement(TextComponent, {
        color: NJA(Z)
    }, A)
}
var u40;
var d40 = lazyLoader(() => {
    hA();
    u40 = esmImport(VA(), 1)
});

function c40({
    message: A,
    mode: Q,
    isConnected: B,
    messageColor: G,
    glimmerIndex: Z,
    flashOpacity: I,
    shimmerColor: Y,
    stalledIntensity: J = 0
}) {
    if (!A) return null;
    if (B === !1) return bJ.createElement(TextComponent, {
        color: G
    }, A, " ");
    if (J > 0) {
        let F = Q0A({
                r: 215,
                g: 119,
                b: 87
            }, {
                r: 171,
                g: 43,
                b: 63
            }, J),
            V = NJA(F);
        return bJ.createElement(bJ.Fragment, null, bJ.createElement(TextComponent, {
            color: V
        }, A), bJ.createElement(TextComponent, {
            color: V
        }, " "))
    }
    return bJ.createElement(bJ.Fragment, null, A.split("").map((W, X) => {
        if (Q === "tool-use") return bJ.createElement(m40, {
            key: X,
            char: W,
            flashOpacity: I
        });
        else return bJ.createElement(UGA, {
            key: X,
            char: W,
            index: X,
            glimmerIndex: Z,
            messageColor: G,
            shimmerColor: Y
        })
    }), bJ.createElement(TextComponent, {
        color: G
    }, " "))
}
var bJ;
var EM2 = lazyLoader(() => {
    hA();
    d40();
    JoA();
    bJ = esmImport(VA(), 1)
});

function p40({
    frame: A,
    messageColor: Q,
    stalledIntensity: B = 0,
    isConnected: G
}) {
    let Z = UM2[A % UM2.length];
    if (G === !1) return Lq.createElement(j, {
        flexWrap: "wrap",
        height: 1,
        width: 2
    }, Lq.createElement(TextComponent, {
        color: Q
    }, Z));
    if (B > 0) {
        let J = Q0A({
            r: 215,
            g: 119,
            b: 87
        }, {
            r: 171,
            g: 43,
            b: 63
        }, B);
        return Lq.createElement(j, {
            flexWrap: "wrap",
            height: 1,
            width: 2
        }, Lq.createElement(TextComponent, {
            color: NJA(J)
        }, Z))
    }
    return Lq.createElement(j, {
        flexWrap: "wrap",
        height: 1,
        width: 2
    }, Lq.createElement(TextComponent, {
        color: Q
    }, Z))
}
var Lq, zM2, UM2;
var $M2 = lazyLoader(() => {
    hA();
    Lq = esmImport(VA(), 1), zM2 = tOA(), UM2 = [...zM2, ...[...zM2].reverse()]
});

function l40(A) {
    let [Q, B] = wM2.useState(0);
    return dY(() => {
        if (A === "tool-use") B(() => {
            let G = Date.now() / 1000;
            return (Math.sin(G * Math.PI) + 1) / 2
        });
        else B(0)
    }, 50), Q
}
var wM2;
var qM2 = lazyLoader(() => {
    $U();
    wM2 = esmImport(VA(), 1)
});

function i40(A, Q = !1) {
    let [B, G] = B0A.useState(0), [Z, I] = B0A.useState(0), Y = B0A.useRef(A);
    B0A.useEffect(() => {
        if (A > Y.current) G(0), I(0), Y.current = A
    }, [A]), dY(() => {
        if (A > 0 && A === Y.current && !Q) G((X) => X + 100);
        else if (A === 0 || Q) G(0)
    }, 100);
    let J = B > 3000 && !Q,
        W = J ? Math.min((B - 3000) / 2000, 1) : 0;
    return dY(() => {
        I((X) => {
            let F = W,
                V = F - X;
            if (Math.abs(V) < 0.01) return F;
            return X + V * 0.1
        })
    }, 50), {
        isStalled: J,
        stalledIntensity: Z
    }
}
var B0A;
var NM2 = lazyLoader(() => {
    $U();
    B0A = esmImport(VA(), 1)
});
var LM2 = lazyLoader(() => {
    d40();
    JoA();
    EM2();
    $M2();
    ud1();
    qM2();
    NM2()
});

function RM2({
    mode: A,
    elapsedTimeMs: Q,
    spinnerTip: B,
    currentResponseLength: G,
    overrideColor: Z,
    overrideShimmerColor: I,
    overrideMessage: Y,
    spinnerSuffix: J,
    verbose: W,
    todos: X,
    hasActiveTools: F = !1
}) {
    let V = _y5(),
        [K, D] = zP.useState(0),
        [H, C] = zP.useState(0),
        [E] = _Q(),
        {
            isConnected: z
        } = h40(),
        {
            columns: w
        } = YB(),
        N = X?.find((SA) => SA.status === "in_progress"),
        q = X?.find((SA) => SA.status === "pending"),
        R = zP.useMemo(() => Zt(V), [V]),
        P = (Y ?? N?.activeForm ?? R) + "…",
        {
            isStalled: y,
            stalledIntensity: v
        } = i40(G, F),
        x = QwA(A, P, z, y),
        p = l40(A),
        u = zP.useRef(G);
    zP.useEffect(() => {
        let SA = "spinner-" + A;
        return sOA.startCLIActivity(SA), () => {
            sOA.endCLIActivity(SA)
        }
    }, [A]), zP.useEffect(() => {
        u.current = G
    }, [G]), dY(() => {
        if (!z) {
            D(4);
            return
        }
        D((SA) => SA + 1)
    }, 120), dY(() => {
        C((SA) => {
            let sA = u.current - SA;
            if (sA <= 0) return SA;
            let NA;
            if (sA < 70) NA = 1;
            else if (sA < 200) NA = Math.max(2, Math.ceil(sA * 0.08));
            else NA = 18;
            return Math.min(SA + NA, u.current)
        })
    }, 10);
    let o = P.length + 2,
        l = 16,
        k = w > o + 20,
        d = X && X.length > 0 && k && w > o + l + 25,
        QA = (W || Q > jy5) && k && w > o + l + (d ? 25 : 0) + 25,
        IA = [...k ? [uB.createElement(j, {
            key: "esc"
        }, uB.createElement(TextComponent, {
            dimColor: !0,
            bold: !0
        }, "esc", " "), uB.createElement(TextComponent, {
            dimColor: !0
        }, "to interrupt"))] : [], ...J ? [uB.createElement(TextComponent, {
            dimColor: !0,
            key: "suffix"
        }, J)] : [], ...d ? [uB.createElement(TextComponent, {
            dimColor: !0,
            key: "todo"
        }, uB.createElement(TextComponent, {
            dimColor: !0,
            bold: !0
        }, "ctrl+t"), " ", "to ", E.showExpandedTodos ? "hide" : "show", " todos")] : [], ...QA ? [uB.createElement(TextComponent, {
            dimColor: !0,
            key: "elapsedTime"
        }, FE(Q)), uB.createElement(j, {
            flexDirection: "row",
            key: "tokens"
        }, uB.createElement(Sy5, {
            mode: A,
            key: "spinnerMode"
        }), uB.createElement(TextComponent, {
            dimColor: !0
        }, QZ(Math.round(H / 4)), " tokens"))] : []];
    if (z === !1) IA.push(uB.createElement(j, {
        key: "offline"
    }, uB.createElement(TextComponent, {
        color: "error",
        bold: !0
    }, "offline")));
    let HA = Z ?? (z === !1 ? "inactive" : "claude"),
        wA = I ?? "claudeShimmer",
        KA = IA.length > 0 ? uB.createElement(uB.Fragment, null, uB.createElement(TextComponent, {
            dimColor: !0
        }, "("), fF(IA, (SA) => uB.createElement(TextComponent, {
            dimColor: !0,
            key: `separator-TextComponent{SA}`
        }, " ", "·", " ")), uB.createElement(TextComponent, {
            dimColor: !0
        }, ")")) : null;
    return uB.createElement(j, {
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-start"
    }, uB.createElement(HM2, {
        streamMode: A
    }), uB.createElement(j, {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 1,
        width: "100%"
    }, uB.createElement(p40, {
        frame: K,
        messageColor: HA,
        stalledIntensity: v,
        isConnected: z
    }), uB.createElement(c40, {
        message: P,
        mode: A,
        isConnected: z,
        messageColor: HA,
        glimmerIndex: x,
        flashOpacity: p,
        shimmerColor: wA,
        stalledIntensity: v
    }), KA), E.showExpandedTodos && X && X.length > 0 ? uB.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, uB.createElement(y0, null, uB.createElement(si, {
        todos: X
    }))) : q || B ? uB.createElement(j, {
        width: "100%"
    }, uB.createElement(y0, null, uB.createElement(TextComponent, {
        dimColor: !0
    }, q ? `Next: TextComponent{q.content}` : `Tip: TextComponent{B}`))) : null)
}

function Sy5({
    mode: A
}) {
    switch (A) {
        case "tool-input":
        case "tool-use":
        case "responding":
        case "thinking":
            return uB.createElement(j, {
                width: 2
            }, uB.createElement(TextComponent, {
                dimColor: !0
            }, V1.arrowDown));
        case "requesting":
            return uB.createElement(j, {
                width: 2
            }, uB.createElement(TextComponent, {
                dimColor: !0
            }, V1.arrowUp))
    }
}

function e9() {
    let [A, Q] = zP.useState(0), {
        isConnected: B
    } = h40();
    return dY(() => {
        Q((Z) => (Z + 1) % OM2.length)
    }, 120), uB.createElement(j, {
        flexWrap: "wrap",
        height: 1,
        width: 2
    }, uB.createElement(TextComponent, {
        color: B === !1 ? "inactive" : "text"
    }, OM2[A]))
}

function _y5() {
    return h81("tengu_spinner_words", Py5).words
}
var uB, zP, MM2, OM2, Py5, jy5 = 30000;
var zI = lazyLoader(() => {
    hA();
    oiA();
    $U();
    n2();
    DM2();
    g40();
    O9();
    u8();
    rOA();
    H9();
    m8();
    CM2();