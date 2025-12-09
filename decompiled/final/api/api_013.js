/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_013.js
 * 处理时间: 2025-12-09T03:41:36.124Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       (  8x) esmImport(module) - ESM import
 * M8       (  4x) shellEscape(args) - Escape shell args
 * UA       (  1x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 13/30
 * Lines: 200164 - 201661 (1498 lines)
 * Original file: cli.js
 */

            if (A.experiment_id !== void 0) Q.experiment_id = A.experiment_id;
            if (A.variation_id !== void 0) Q.variation_id = Math.round(A.variation_id);
            if (A.environment !== void 0) Q.environment = A.environment;
            if (A.user_attributes !== void 0) Q.user_attributes = A.user_attributes;
            if (A.experiment_metadata !== void 0) Q.experiment_metadata = A.experiment_metadata;
            if (A.device_id !== void 0) Q.device_id = A.device_id;
            if (A.auth !== void 0) Q.auth = Bf.toJSON(A.auth);
            if (A.session_id !== void 0) Q.session_id = A.session_id;
            return Q
        },
        create(A) {
            return im1.fromPartial(A ?? {})
        },
        fromPartial(A) {
            let Q = Pw6();
            return Q.event_id = A.event_id ?? "", Q.event_timestamp = A.event_timestamp ?? void 0, Q.timestamp = A.timestamp ?? void 0, Q.experiment_id = A.experiment_id ?? "", Q.variation_id = A.variation_id ?? 0, Q.environment = A.environment ?? "", Q.user_attributes = A.user_attributes ?? "", Q.experiment_metadata = A.experiment_metadata ?? "", Q.device_id = A.device_id ?? "", Q.auth = A.auth !== void 0 && A.auth !== null ? Bf.fromPartial(A.auth) : void 0, Q.session_id = A.session_id ?? "", Q
        }
    }
});
import {
    randomUUID as Sw6
} from "crypto";
import {
    existsSync as h$A,
    readFileSync as _w6,
    writeFileSync as kw6,
    unlinkSync as JTB,
    readdirSync as yw6,
    mkdirSync as xw6
} from "fs";
import * as DrA from "path";

function e7A() {
    return DrA.join(PQ(), "telemetry")
}
class nm1 {
    endpoint;
    timeout;
    maxQueuedEvents;
    maxBatchSize;
    batchDelayMs;
    baseBackoffDelayMs;
    maxBackoffDelayMs;
    pendingExports = [];
    isShutdown = !1;
    backoffRetryTimer = null;
    backoffAttempt = 0;
    isRetrying = !1;
    constructor(A = {}) {
        let Q = process.env.ANTHROPIC_BASE_URL || "https://api.anthropic.com";
        this.endpoint = `${Q}/api/event_logging/batch`, this.timeout = A.timeout || 1e4, this.maxQueuedEvents = A.maxQueuedEvents || 8192, this.maxBatchSize = A.maxBatchSize || 200, this.batchDelayMs = A.batchDelayMs || 100, this.baseBackoffDelayMs = A.baseBackoffDelayMs || 500, this.maxBackoffDelayMs = A.maxBackoffDelayMs || 30000, this.retryPreviousBatches()
    }
    getQueuedEventCount() {
        return this.loadEventsFromCurrentBatch().length
    }
    getCurrentBatchFilePath() {
        return DrA.join(e7A(), `${XTB}${G0()}.${WTB}.json`)
    }
    loadEventsFromFile(A) {
        try {
            if (!h$A(A)) return [];
            let Q = _w6(A, "utf8");
            return JSON.parse(Q)
        } catch {
            return []
        }
    }
    loadEventsFromCurrentBatch() {
        return this.loadEventsFromFile(this.getCurrentBatchFilePath())
    }
    saveEventsToFile(A, Q) {
        try {
            if (Q.length === 0) {
                if (h$A(A)) JTB(A)
            } else {
                if (!h$A(e7A())) xw6(e7A(), {
                    recursive: !0
                });
                kw6(A, JSON.stringify(Q), "utf8")
            }
        } catch (B) {
            e(B)
        }
    }
    deleteFile(A) {
        try {
            if (h$A(A)) JTB(A)
        } catch (Q) {
            e(Q)
        }
    }
    retryPreviousBatches() {
        try {
            if (!h$A(e7A())) return;
            let A = `${XTB}${G0()}.`,
                Q = yw6(e7A()).filter((B) => B.startsWith(A) && B.endsWith(".json")).filter((B) => !B.includes(WTB));
            for (let B of Q) {
                let G = DrA.join(e7A(), B);
                this.retryFileInBackground(G)
            }
        } catch (A) {
            e(A)
        }
    }
    async retryFileInBackground(A) {
        let Q = this.loadEventsFromFile(A);
        if (Q.length === 0) {
            this.deleteFile(A);
            return
        }
        if ((await this.sendEventsInBatches(Q)).length === 0) this.deleteFile(A)
    }
    async export (A, Q) {
        if (this.isShutdown) {
            Q({
                code: Ae.ExportResultCode.FAILED,
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
            let B = A.filter((I) => I.instrumentationScope?.name === "com.anthropic.claude_code.events");
            if (B.length === 0) {
                Q({
                    code: Ae.ExportResultCode.SUCCESS
                });
                return
            }
            let G = this.transformLogsToEvents(B).events;
            if (G.length === 0) {
                Q({
                    code: Ae.ExportResultCode.SUCCESS
                });
                return
            }
            let Z = await this.sendEventsInBatches(G);
            if (Z.length > 0) {
                this.queueFailedEvents(Z), this.scheduleBackoffRetry(), Q({
                    code: Ae.ExportResultCode.FAILED,
                    error: Error(`Failed to export ${Z.length} events`)
                });
                return
            }
            if (this.resetBackoff(), this.getQueuedEventCount() > 0 && !this.isRetrying) this.retryFailedEvents();
            Q({
                code: Ae.ExportResultCode.SUCCESS
            })
        } catch (B) {
            e(B), Q({
                code: Ae.ExportResultCode.FAILED,
                error: B instanceof Error ? B : Error("Unknown export error")
            })
        }
    }
    async sendEventsInBatches(A) {
        let Q = [];
        for (let G = 0; G < A.length; G += this.maxBatchSize) Q.push(A.slice(G, G + this.maxBatchSize));
        let B = [];
        for (let G = 0; G < Q.length; G++) {
            let Z = Q[G];
            try {
                await this.sendBatchWithRetry({
                    events: Z
                })
            } catch {
                B.push(...Z)
            }
            if (G < Q.length - 1 && this.batchDelayMs > 0) await new Promise((I) => setTimeout(I, this.batchDelayMs))
        }
        return B
    }
    queueFailedEvents(A) {
        let Q = this.getCurrentBatchFilePath(),
            G = [...this.loadEventsFromFile(Q), ...A],
            Z = G.slice(-this.maxQueuedEvents);
        G.length - Z.length > 0, this.saveEventsToFile(Q, Z), e(Error(`1P event logging: ${A.length} events failed to export`))
    }
    scheduleBackoffRetry() {
        if (this.backoffRetryTimer || this.isRetrying || this.isShutdown) return;
        let A = this.backoffAttempt + 1,
            Q = Math.min(this.baseBackoffDelayMs * A * A, this.maxBackoffDelayMs);
        this.backoffRetryTimer = setTimeout(() => {
            this.backoffRetryTimer = null, this.retryFailedEvents()
        }, Q)
    }
    async retryFailedEvents() {
        let A = this.getCurrentBatchFilePath();
        while (!this.isShutdown) {
            let Q = this.loadEventsFromFile(A);
            if (Q.length === 0) break;
            this.isRetrying = !0, this.backoffAttempt++, this.deleteFile(A);
            let B = await this.sendEventsInBatches(Q);
            if (this.isRetrying = !1, B.length > 0) {
                this.saveEventsToFile(A, B), this.scheduleBackoffRetry();
                return
            }
            this.resetBackoff()
        }
    }
    resetBackoff() {
        if (this.backoffAttempt = 0, this.backoffRetryTimer) clearTimeout(this.backoffRetryTimer), this.backoffRetryTimer = null
    }
    async sendBatchWithRetry(A) {
        let Q = {
                "Content-Type": "application/json",
                "User-Agent": MF(),
                "x-service-name": "claude-code"
            },
            B = !1;
        if (AB()) {
            let Y = U6();
            if (Y && xm(Y.expiresAt)) B = !0
        }
        let G = VI(),
            Z = !G.error && !B,
            I = Z ? {
                ...Q,
                ...G.headers
            } : Q;
        try {
            let Y = await GQ.post(this.endpoint, A, {
                timeout: this.timeout,
                headers: I
            });
            this.logSuccess(A.events.length, Z, Y.data);
            return
        } catch (Y) {
            if (Z && GQ.isAxiosError(Y) && Y.response?.status === 401) {
                let J = await GQ.post(this.endpoint, A, {
                    timeout: this.timeout,
                    headers: Q
                });
                this.logSuccess(A.events.length, !1, J.data);
                return
            }
            throw Y
        }
    }
    logSuccess(A, Q, B) {}
    hrTimeToDate(A) {
        let [Q, B] = A;
        return new Date(Q * 1000 + B / 1e6)
    }
    transformLogsToEvents(A) {
        let Q = [];
        for (let B of A) {
            let G = B.attributes || {};
            if (G.event_type === "GrowthbookExperimentEvent") {
                let F = this.hrTimeToDate(B.hrTime);
                Q.push({
                    event_type: "GrowthbookExperimentEvent",
                    event_data: im1.toJSON({
                        event_id: G.event_id,
                        event_timestamp: F,
                        timestamp: F,
                        experiment_id: G.experiment_id,
                        variation_id: G.variation_id,
                        environment: G.environment,
                        user_attributes: G.user_attributes,
                        experiment_metadata: G.experiment_metadata,
                        device_id: G.device_id
                    })
                });
                continue
            }
            let Z = G.event_name || B.body || "unknown",
                I = G.core_metadata,
                Y = G.user_metadata,
                J = G.event_metadata || {};
            if (!I) {
                Q.push({
                    event_type: "ClaudeCodeInternalEvent",
                    event_data: KrA.toJSON({
                        event_name: Z,
                        client_timestamp: this.hrTimeToDate(B.hrTime),
                        session_id: G0(),
                        additional_metadata: JSON.stringify({
                            transform_error: "core_metadata attribute is missing"
                        })
                    })
                });
                continue
            }
            let W = QTB(I, Y, J),
                X = {
                    ...W.additional
                };
            Q.push({
                event_type: "ClaudeCodeInternalEvent",
                event_data: KrA.toJSON({
                    event_name: Z,
                    client_timestamp: this.hrTimeToDate(B.hrTime),
                    device_id: G.user_id,
                    email: Y?.email,
                    ...W.core,
                    env: W.env,
                    process: W.process,
                    additional_metadata: Object.keys(X).length > 0 ? JSON.stringify(X) : void 0
                })
            })
        }
        return {
            events: Q
        }
    }
    async shutdown() {
        this.isShutdown = !0, this.resetBackoff(), await this.forceFlush()
    }
    async forceFlush() {
        await Promise.all(this.pendingExports)
    }
}
var Ae, WTB, XTB = "1p_failed_events.";
var FTB = L(() => {
    w3();
    D0();
    u1();
    XE();
    hB();
    pN();
    t7A();
    S0();
    ZTB();
    YTB();
    hQ();
    Ae = GA(t6(), 1), WTB = Sw6()
});
import {
    randomUUID as VTB
} from "crypto";

function bw6() {
    return HTB(vw6, {})
}

function am1(A) {
    let B = bw6()[A];
    if (!B) return null;
    let G = B.sample_rate;
    if (typeof G !== "number" || G < 0 || G > 1) return null;
    if (G >= 1) return null;
    if (G <= 0) return 0;
    return Math.random() < G ? G : 0
}
async function sm1() {
    if (!AGA) return;
    try {
        await AGA.shutdown()
    } catch {}
}

function rm1() {
    if (hX()) return !1;
    return j8("tengu_log_1p_events")
}
async function fw6(A, Q, B = {}) {
    try {
        let G = await Up({
                model: B.model
            }),
            Z = {
                event_name: Q,
                event_id: VTB(),
                core_metadata: G,
                user_metadata: at(!0),
                event_metadata: B
            },
            I = Tb();
        if (I) Z.user_id = I;
        A.emit({
            body: Q,
            attributes: Z
        })
    } catch (G) {}
}

function om1(A, Q = {}) {
    if (!rm1()) return;
    if (!g$A) return;
    fw6(g$A, A, Q)
}

function hw6() {
    return "production"
}

function cRB(A) {
    if (!rm1()) return;
    if (!g$A) return;
    let Q = Tb(),
        B = {
            event_type: "GrowthbookExperimentEvent",
            event_id: VTB(),
            experiment_id: A.experimentId,
            variation_id: A.variationId,
            ...Q && {
                device_id: Q
            },
            ...A.userAttributes && {
                session_id: A.userAttributes.sessionId,
                user_attributes: JSON.stringify(A.userAttributes)
            },
            ...A.experimentMetadata && {
                experiment_metadata: JSON.stringify(A.experimentMetadata)
            },
            environment: hw6()
        };
    g$A.emit({
        body: "growthbook_experiment",
        attributes: B
    })
}

function DTB() {
    if (v4("1p_event_logging_start"), !rm1()) return;
    let Q = G7A("tengu_1p_event_batch_config", {});
    v4("1p_event_after_statsig_config");
    let B = Q.scheduledDelayMillis || parseInt(process.env.OTEL_LOGS_EXPORT_INTERVAL || gw6.toString()),
        G = Q.maxExportBatchSize || uw6,
        Z = Q.maxQueueSize || mw6,
        I = uQ(),
        Y = {
            [CrA.ATTR_SERVICE_NAME]: "claude-code",
            [CrA.ATTR_SERVICE_VERSION]: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION
        };
    if (I === "wsl") {
        let X = ps();
        if (X) Y["wsl.version"] = X
    }
    let J = KTB.resourceFromAttributes(Y),
        W = new nm1({
            maxQueuedEvents: Z,
            maxBatchSize: G
        });
    AGA = new HrA.LoggerProvider({
        resource: J,
        processors: [new HrA.BatchLogRecordProcessor(W, {
            scheduledDelayMillis: B,
            maxExportBatchSize: G,
            maxQueueSize: Z
        })]
    }), g$A = AGA.getLogger("com.anthropic.claude_code.events", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION), wG(async () => {
        await AGA?.forceFlush()
    }), process.on("beforeExit", async () => {
        await AGA?.forceFlush()
    })
}
var HrA, KTB, CrA, vw6 = "tengu_event_sampling_config",
    g$A = null,
    AGA = null,
    gw6 = 5000,
    uw6 = 200,
    mw6 = 8192;
var _$A = L(() => {
    jQ();
    O9();
    St();
    FTB();
    s5();
    XH();
    t7A();
    D0();
    Qe();
    u1();
    eb();
    HrA = GA(Dm1(), 1), KTB = GA(f7A(), 1), CrA = GA(ut(), 1)
});
var wTB = U(($r7, $TB) => {
    var UTB = UA("child_process"),
        CTB = UTB.spawn,
        dw6 = UTB.exec;
    $TB.exports = function(A, Q, B) {
        if (typeof Q === "function" && B === void 0) B = Q, Q = void 0;
        if (A = parseInt(A), Number.isNaN(A))
            if (B) return B(Error("pid must be a number"));
            else throw Error("pid must be a number");
        var G = {},
            Z = {};
        switch (G[A] = [], Z[A] = 1, process.platform) {
            case "win32":
                dw6("taskkill /pid " + A + " /T /F", B);
                break;
            case "darwin":
                tm1(A, G, Z, function(I) {
                    return CTB("pgrep", ["-P", I])
                }, function() {
                    ETB(G, Q, B)
                });
                break;
            default:
                tm1(A, G, Z, function(I) {
                    return CTB("ps", ["-o", "pid", "--no-headers", "--ppid", I])
                }, function() {
                    ETB(G, Q, B)
                });
                break
        }
    };

    function ETB(A, Q, B) {
        var G = {};
        try {
            Object.keys(A).forEach(function(Z) {
                if (A[Z].forEach(function(I) {
                        if (!G[I]) zTB(I, Q), G[I] = 1
                    }), !G[Z]) zTB(Z, Q), G[Z] = 1
            })
        } catch (Z) {
            if (B) return B(Z);
            else throw Z
        }
        if (B) return B()
    }

    function zTB(A, Q) {
        try {
            process.kill(parseInt(A, 10), Q)
        } catch (B) {
            if (B.code !== "ESRCH") throw B
        }
    }

    function tm1(A, Q, B, G, Z) {
        var I = G(A),
            Y = "";
        I.stdout.on("data", function(X) {
            var X = X.toString("ascii");
            Y += X
        });
        var J = function(W) {
            if (delete B[A], W != 0) {
                if (Object.keys(B).length == 0) Z();
                return
            }
            Y.match(/\d+/g).forEach(function(X) {
                X = parseInt(X, 10), Q[A].push(X), Q[X] = [], B[X] = 1, tm1(X, Q, B, G, Z)
            })
        };
        I.on("close", J)
    }
});
class u$A {
    capacity;
    buffer;
    head = 0;
    size = 0;
    constructor(A) {
        this.capacity = A;
        this.buffer = Array(A)
    }
    add(A) {
        if (this.buffer[this.head] = A, this.head = (this.head + 1) % this.capacity, this.size < this.capacity) this.size++
    }
    addAll(A) {
        for (let Q of A) this.add(Q)
    }
    getRecent(A) {
        let Q = [],
            B = this.size < this.capacity ? 0 : this.head,
            G = Math.min(A, this.size);
        for (let Z = 0; Z < G; Z++) {
            let I = (B + this.size - G + Z) % this.capacity;
            Q.push(this.buffer[I])
        }
        return Q
    }
    toArray() {
        if (this.size === 0) return [];
        let A = [],
            Q = this.size < this.capacity ? 0 : this.head;
        for (let B = 0; B < this.size; B++) {
            let G = (Q + B) % this.capacity;
            A.push(this.buffer[G])
        }
        return A
    }
    clear() {
        this.head = 0, this.size = 0
    }
    length() {
        return this.size
    }
}

function em1(A, Q = ",", B = 67108736) {
    let Z = "";
    for (let I of A) {
        let Y = Z ? Q : "",
            J = Y + I;
        if (Z.length + J.length <= B) Z += J;
        else {
            let W = B - Z.length - Y.length - 14;
            if (W > 0) Z += Y + I.slice(0, W) + "...[truncated]";
            else Z += "...[truncated]";
            return Z
        }
    }
    return Z
}
class QGA {
    maxSize;
    content = "";
    isTruncated = !1;
    totalBytesReceived = 0;
    constructor(A = 67108736) {
        this.maxSize = A
    }
    append(A) {
        let Q = typeof A === "string" ? A : A.toString();
        if (this.totalBytesReceived += Q.length, this.isTruncated && this.content.length >= this.maxSize) return;
        if (this.content.length + Q.length > this.maxSize) {
            let B = this.maxSize - this.content.length;
            if (B > 0) this.content += Q.slice(0, B);
            this.isTruncated = !0
        } else this.content += Q
    }
    toString() {
        if (!this.isTruncated) return this.content;
        let A = this.totalBytesReceived - this.maxSize,
            Q = Math.round(A / 1024);
        return this.content + `
... [output truncated - ${Q}KB removed]`
    }
    clear() {
        this.content = "", this.isTruncated = !1, this.totalBytesReceived = 0
    }
    get length() {
        return this.content.length
    }
    get truncated() {
        return this.isTruncated
    }
    get totalBytes() {
        return this.totalBytesReceived
    }
}

function qTB(A, Q) {
    if (A.length <= Q) return A;
    let B = A.length - Q,
        Z = `

... [tool result truncated - ${Math.round(B/1024)}KB removed]`;
    return A.slice(0, Q) + Z
}
import {
    PassThrough as cw6
} from "stream";

function MTB(A) {
    let Q = null,
        B = new QGA;
    A.on("data", (Z) => {
        if (Q) Q.write(Z);
        else B.append(Z)
    });
    let G = () => B.toString();
    return {
        get: G,
        asStream() {
            return Q = new cw6({
                highWaterMark: 10485760
            }), Q.write(G()), B.clear(), Q
        }
    }
}

function ErA(A, Q, B, G, Z = !1) {
    let I = "running",
        Y, J = MTB(A.stdout),
        W = MTB(A.stderr);
    if (G) {
        let E = new u$A(1000),
            z = 0,
            w = (N) => {
                let R = N.toString().split(`
`).filter((y) => y.trim());
                E.addAll(R), z += R.length;
                let P = E.getRecent(5);
                if (P.length > 0) G(em1(P, `
`), em1(E.getRecent(100), `
`), z)
            };
        A.stdout.on("data", w), A.stderr.on("data", w)
    }
    let X = (E) => {
            if (I = "killed", A.pid) OTB.default(A.pid, "SIGKILL")
        },
        F = null,
        V, K, D = (E) => {
            if (I === "running") return Y = E, I = "backgrounded", V(), {
                stdoutStream: J.asStream(),
                stderrStream: W.asStream()
            };
            return null
        },
        H = new Promise((E) => {
            let z = () => X();
            V = () => {
                if (F) clearTimeout(F), F = null;
                Q.removeEventListener("abort", z)
            }, Q.addEventListener("abort", z, {
                once: !0
            }), new Promise((w) => {
                let N = X;
                X = (q) => {
                    N(), w(q || NTB)
                }, F = setTimeout(() => {
                    if (Z && K) K(D);
                    else X(LTB)
                }, B), A.on("close", (q, R) => {
                    w(q !== null && q !== void 0 ? q : R === "SIGTERM" ? 144 : 1)
                }), A.on("error", () => w(1))
            }).then((w) => {
                if (V(), I === "running" || I === "backgrounded") I = "completed";
                let N = {
                    code: w,
                    stdout: J.get(),
                    stderr: W.get(),
                    interrupted: w === NTB,
                    backgroundTaskId: Y
                };
                if (w === LTB) N.stderr = [`Command timed out after ${FE(B)}`, N.stderr].filter(Boolean).join(" ");
                E(N)
            })
        }),
        C = {
            get status() {
                return I
            },
            background: D,
            kill: () => X(),
            result: H
        };
    if (Z) C.onTimeout = (E) => {
        K = E
    };
    return C
}

function RTB(A) {
    return {
        get status() {
            return "killed"
        },
        background: () => null,
        kill: () => {},
        result: Promise.resolve({
            code: 145,
            stdout: "",
            stderr: "Command aborted before execution",
            interrupted: !0,
            backgroundTaskId: A
        })
    }
}
var OTB, NTB = 137,
    LTB = 143;
var Ad1 = L(() => {
    OTB = GA(wTB(), 1)
});

function zrA(A, Q) {
    let B = A.lastIndexOf(" -");
    if (B > 0) {
        let G = A.substring(0, B),
            Z = A.substring(B + 1);
        return `${M8([G])} ${Z} ${M8([Q])}`
    } else return `${M8([A])} ${M8([Q])}`
}
var Qd1 = L(() => {
    KH()
});
import {
    readFileSync as TTB,
    existsSync as PTB,
    mkdirSync as pw6,
    readdirSync as lw6
} from "node:fs";
import {
    join as Bd1
} from "node:path";

function jTB() {
    let A = Bd1(PQ(), "session-env", G0());
    return pw6(A, {
        recursive: !0
    }), A
}

function UrA(A) {
    return Bd1(jTB(), `hook-${A}.sh`)
}

function STB() {
    g("Invalidating session environment cache"), $p = void 0
}

function _TB() {
    if (uQ() === "windows") return g("Session environment not yet supported on Windows"), null;
    if ($p !== void 0) return $p;
    let A = [],
        Q = process.env.CLAUDE_ENV_FILE;
    if (Q && PTB(Q)) try {
        let G = TTB(Q, "utf8").trim();
        if (G) A.push(G), g(`Session environment loaded from CLAUDE_ENV_FILE: ${Q} (${G.length} chars)`)
    } catch (G) {
        g(`Failed to read CLAUDE_ENV_FILE: ${G instanceof Error?G.message:String(G)}`)
    }
    let B = jTB();
    if (PTB(B)) try {
        let Z = lw6(B).filter((I) => I.startsWith("hook-") && I.endsWith(".sh")).sort((I, Y) => {
            let J = parseInt(I.match(/hook-(\d+)\.sh/)?.[1] || "0", 10),
                W = parseInt(Y.match(/hook-(\d+)\.sh/)?.[1] || "0", 10);
            return J - W
        });
        for (let I of Z) {
            let Y = Bd1(B, I),
                J = TTB(Y, "utf8").trim();
            if (J) A.push(J)
        }
        if (Z.length > 0) g(`Session environment loaded from ${Z.length} hook file(s)`)
    } catch (G) {
        g(`Failed to load session environment from hooks: ${G instanceof Error?G.message:String(G)}`)
    }
    if (A.length === 0) return g("No session environment scripts found"), $p = null, $p;
    return $p = A.join(`
`), g(`Session environment script ready (${$p.length} chars total)`), $p
}
var $p = void 0;
var m$A = L(() => {
    D0();
    s5();
    hQ();
    S0()
});

function wp({
    isFocused: A,
    isSelected: Q,
    children: B,
    description: G,
    shouldShowDownArrow: Z,
    shouldShowUpArrow: I
}) {
    return b_.default.createElement(j, {
        flexDirection: "column"
    }, b_.default.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, A ? b_.default.createElement($, {
        color: "suggestion"
    }, V1.pointer) : Z ? b_.default.createElement($, {
        dimColor: !0
    }, V1.arrowDown) : I ? b_.default.createElement($, {
        dimColor: !0
    }, V1.arrowUp) : b_.default.createElement($, null, " "), B, Q && b_.default.createElement($, {
        color: "success"
    }, V1.tick)), G && b_.default.createElement(j, {
        paddingLeft: 5
    }, b_.default.createElement($, {
        color: "inactive"
    }, G)))
}
var b_;
var $rA = L(() => {
    n2();
    hA();
    b_ = GA(VA(), 1)
});
var wrA;
var kTB = L(() => {
    wrA = class wrA extends Map {
        first;
        last;
        constructor(A) {
            let Q = [],
                B, G, Z, I = 0;
            for (let Y of A) {
                let J = {
                    label: Y.label,
                    value: Y.value,
                    description: Y.description,
                    previous: Z,
                    next: void 0,
                    index: I
                };
                if (Z) Z.next = J;
                B ||= J, G = J, Q.push([Y.value, J]), I++, Z = J
            }
            super(Q);
            this.first = B, this.last = G
        }
    }
});
import {
    isDeepStrictEqual as iw6
} from "node:util";

function qrA({
    visibleOptionCount: A = 5,
    options: Q,
    initialFocusValue: B,
    onFocus: G,
    focusValue: Z
}) {
    let [I, Y] = hH.useReducer(nw6, {
        visibleOptionCount: A,
        options: Q,
        initialFocusValue: Z || B
    }, yTB), [J, W] = hH.useState(Q);
    if (Q !== J && !iw6(Q, J)) Y({
        type: "reset",
        state: yTB({
            visibleOptionCount: A,
            options: Q,
            initialFocusValue: Z ?? I.focusedValue ?? B,
            currentViewport: {
                visibleFromIndex: I.visibleFromIndex,
                visibleToIndex: I.visibleToIndex
            }
        })
    }), W(Q);
    let X = hH.useCallback(() => {
            Y({
                type: "focus-next-option"
            })
        }, []),
        F = hH.useCallback(() => {
            Y({
                type: "focus-previous-option"
            })
        }, []),
        V = hH.useCallback(() => {
            Y({
                type: "focus-next-page"
            })
        }, []),
        K = hH.useCallback(() => {
            Y({
                type: "focus-previous-page"
            })
        }, []),
        D = hH.useCallback((E) => {
            if (E !== void 0) Y({
                type: "set-focus",
                value: E
            })
        }, []),
        H = hH.useMemo(() => {
            return Q.map((E, z) => ({
                ...E,
                index: z
            })).slice(I.visibleFromIndex, I.visibleToIndex)
        }, [Q, I.visibleFromIndex, I.visibleToIndex]);
    hH.useEffect(() => {
        if (I.focusedValue !== void 0) G?.(I.focusedValue)
    }, [I.focusedValue, G]), hH.useEffect(() => {
        if (Z !== void 0) Y({
            type: "set-focus",
            value: Z
        })
    }, [Z]);
    let C = hH.useMemo(() => {
        return Q.find((z) => z.value === I.focusedValue)?.type === "input"
    }, [I.focusedValue, Q]);
    return {
        focusedValue: I.focusedValue,
        visibleFromIndex: I.visibleFromIndex,
        visibleToIndex: I.visibleToIndex,
        visibleOptions: H,
        isInInput: C ?? !1,
        focusNextOption: X,
        focusPreviousOption: F,
        focusNextPage: V,
        focusPreviousPage: K,
        focusOption: D,
        options: Q
    }
}
var hH, nw6 = (A, Q) => {
        switch (Q.type) {
            case "focus-next-option": {
                if (A.focusedValue === void 0) return A;
                let B = A.optionMap.get(A.focusedValue);
                if (!B) return A;
                let G = B.next || A.optionMap.first;
                if (!G) return A;
                if (!B.next && G === A.optionMap.first) return {
                    ...A,
                    focusedValue: G.value,
                    visibleFromIndex: 0,
                    visibleToIndex: A.visibleOptionCount
                };
                if (!(G.index >= A.visibleToIndex)) return {
                    ...A,
                    focusedValue: G.value
                };
                let I = Math.min(A.optionMap.size, A.visibleToIndex + 1),
                    Y = I - A.visibleOptionCount;
                return {
                    ...A,
                    focusedValue: G.value,
                    visibleFromIndex: Y,
                    visibleToIndex: I
                }
            }
            case "focus-previous-option": {
                if (A.focusedValue === void 0) return A;
                let B = A.optionMap.get(A.focusedValue);
                if (!B) return A;
                let G = B.previous || A.optionMap.last;
                if (!G) return A;
                if (!B.previous && G === A.optionMap.last) {
                    let J = A.optionMap.size,
                        W = Math.max(0, J - A.visibleOptionCount);
                    return {
                        ...A,
                        focusedValue: G.value,
                        visibleFromIndex: W,
                        visibleToIndex: J
                    }
                }
                if (!(G.index <= A.visibleFromIndex)) return {
                    ...A,
                    focusedValue: G.value
                };
                let I = Math.max(0, A.visibleFromIndex - 1),
                    Y = I + A.visibleOptionCount;
                return {
                    ...A,
                    focusedValue: G.value,
                    visibleFromIndex: I,
                    visibleToIndex: Y
                }
            }
            case "focus-next-page": {
                if (A.focusedValue === void 0) return A;
                let B = A.optionMap.get(A.focusedValue);
                if (!B) return A;
                let G = Math.min(A.optionMap.size - 1, B.index + A.visibleOptionCount),
                    Z = A.optionMap.first;
                while (Z && Z.index < G)
                    if (Z.next) Z = Z.next;
                    else break;
                if (!Z) return A;
                let I = Math.min(A.optionMap.size, Z.index + 1),
                    Y = Math.max(0, I - A.visibleOptionCount);
                return {
                    ...A,
                    focusedValue: Z.value,
                    visibleFromIndex: Y,
                    visibleToIndex: I
                }
            }
            case "focus-previous-page": {
                if (A.focusedValue === void 0) return A;
                let B = A.optionMap.get(A.focusedValue);
                if (!B) return A;
                let G = Math.max(0, B.index - A.visibleOptionCount),
                    Z = A.optionMap.first;
                while (Z && Z.index < G)
                    if (Z.next) Z = Z.next;
                    else break;
                if (!Z) return A;
                let I = Math.max(0, Z.index),
                    Y = Math.min(A.optionMap.size, I + A.visibleOptionCount);
                return {
                    ...A,
                    focusedValue: Z.value,
                    visibleFromIndex: I,
                    visibleToIndex: Y
                }
            }
            case "reset":
                return Q.state;
            case "set-focus": {
                let B = A.optionMap.get(Q.value);
                if (!B) return A;
                if (B.index >= A.visibleFromIndex && B.index < A.visibleToIndex) return {
                    ...A,
                    focusedValue: Q.value
                };
                let G, Z;
                if (B.index < A.visibleFromIndex) G = B.index, Z = Math.min(A.optionMap.size, G + A.visibleOptionCount);
                else Z = Math.min(A.optionMap.size, B.index + 1), G = Math.max(0, Z - A.visibleOptionCount);
                return {
                    ...A,
                    focusedValue: Q.value,
                    visibleFromIndex: G,
                    visibleToIndex: Z
                }
            }
        }
    },
    yTB = ({
        visibleOptionCount: A,
        options: Q,
        initialFocusValue: B,
        currentViewport: G
    }) => {
        let Z = typeof A === "number" ? Math.min(A, Q.length) : Q.length,
            I = new wrA(Q),
            Y = B !== void 0 && I.get(B),
            J = Y ? B : I.first?.value,
            W = 0,
            X = Z;
        if (Y && G) {
            let F = Y.index;
            if (F >= G.visibleFromIndex && F < G.visibleToIndex) W = G.visibleFromIndex, X = Math.min(I.size, G.visibleToIndex);
            else if (F < G.visibleFromIndex) W = F, X = Math.min(I.size, W + Z);
            else X = Math.min(I.size, F + 1), W = Math.max(0, X - Z);
            W = Math.max(0, Math.min(W, I.size - 1)), X = Math.min(I.size, Math.max(Z, X))
        }
        return {
            optionMap: I,
            visibleOptionCount: Z,
            focusedValue: J,
            visibleFromIndex: W,
            visibleToIndex: X
        }
    };
var Gd1 = L(() => {
    kTB();
    hH = GA(VA(), 1)
});

function xTB({
    visibleOptionCount: A = 5,
    options: Q,
    defaultValue: B,
    onChange: G,
    onCancel: Z,
    onFocus: I,
    focusValue: Y
}) {
    let [J, W] = NrA.useState(B), X = qrA({
        visibleOptionCount: A,
        options: Q,
        initialFocusValue: void 0,
        onFocus: I,
        focusValue: Y
    }), F = NrA.useCallback(() => {
        W(X.focusedValue)
    }, [X.focusedValue]);
    return {
        ...X,
        value: J,
        selectFocusedOption: F,
        onChange: G,
        onCancel: Z
    }
}
var NrA;
var vTB = L(() => {
    Gd1();
    NrA = GA(VA(), 1)
});
var bTB = ({
    isDisabled: A = !1,
    disableSelection: Q = !1,
    state: B,
    options: G,
    isMultiSelect: Z = !1
}) => {
    h1((I, Y) => {
        let J = G.find((X) => X.value === B.focusedValue);
        if (J?.type === "input") {
            if (!(Y.upArrow || Y.downArrow || Y.escape || Y.ctrl && (I === "n" || I === "p"))) return
        }
        if (Y.downArrow || Y.ctrl && I === "n" || !Y.ctrl && !Y.shift && I === "j") B.focusNextOption();
        if (Y.upArrow || Y.ctrl && I === "p" || !Y.ctrl && !Y.shift && I === "k") B.focusPreviousOption();
        if (Y.pageDown) B.focusNextPage();
        if (Y.pageUp) B.focusPreviousPage();
        if (Q !== !0) {
            if ((Z ? Y.return || I === " " : Y.return) && B.focusedValue !== void 0) {
                if (J?.disabled !== !0) B.selectFocusedOption?.(), B.onChange?.(B.focusedValue)
            }
            if (Q !== "numeric" && /^[0-9]+$/.test(I)) {
                let F = parseInt(I) - 1;
                if (F >= 0 && F < B.options.length) {
                    let V = B.options[F];
                    if (V.disabled === !0) return;
                    if (V.type === "input") {
                        B.focusOption(V.value);
                        return
                    }
                    B.onChange?.(V.value);
                    return
                }
            }
        }
        if (Y.escape) B.onCancel?.()
    }, {
        isActive: !A
    })
};
var fTB = L(() => {
    hA()
});

function OrA(A, Q = !1) {
    if (A.length > 0) {
        if (Q && Zd1) LrA = A + LrA;
        else LrA = A;
        Zd1 = !0
    }
}

function hTB() {
    return LrA
}

function RrA() {
    Zd1 = !1
}
class q7 {
    measuredText;
    selection;
    offset;
    constructor(A, Q = 0, B = 0) {
        this.measuredText = A;
        this.selection = B;
        this.offset = Math.max(0, Math.min(this.text.length, Q))
    }
    static fromText(A, Q, B = 0, G = 0) {
        return new q7(new gTB(A, Q - 1), B, G)
    }
    render(A, Q, B) {
        let {
            line: G,
            column: Z
        } = this.getPosition();
        return this.measuredText.getWrappedText().map((I, Y, J) => {
            let W = I;
            if (Q && Y === J.length - 1) {
                let C = Math.max(0, I.length - 6);
                W = Q.repeat(C) + I.slice(C)
            }
            if (G !== Y) return W.trimEnd();
            let X = this.measuredText.displayWidthToStringIndex(W, Z),
                F = Array.from(Id1.segment(W)).map(({
                    segment: C,
                    index: E
                }) => ({
                    segment: C,
                    index: E
                })),
                V = "",
                K = A,
                D = "";
            for (let {
                    segment: C,
                    index: E
                }
                of F) {
                let z = E + C.length;
                if (z <= X) V += C;
                else if (E < X && z > X) K = C;
                else if (E === X) K = C;
                else D += C
            }
            let H = A ? B(K) : K;
            return V + H + D.trimEnd()
        }).join(`
`)
    }
    left() {
        if (this.offset === 0) return this;
        let A = this.measuredText.prevOffset(this.offset);
        return new q7(this.measuredText, A)
    }
    right() {
        if (this.offset >= this.text.length) return this;
        let A = this.measuredText.nextOffset(this.offset);
        return new q7(this.measuredText, Math.min(A, this.text.length))
    }
    up() {
        let {
            line: A,
            column: Q
        } = this.getPosition();
        if (A === 0) return this;
        let B = this.measuredText.getWrappedText()[A - 1];
        if (!B) return this;
        let G = SZ(B);
        if (Q > G) {
            let I = this.getOffset({
                line: A - 1,
                column: G
            });
            return new q7(this.measuredText, I, 0)
        }
        let Z = this.getOffset({
            line: A - 1,
            column: Q
        });
        return new q7(this.measuredText, Z, 0)
    }
    down() {
        let {
            line: A,
            column: Q
        } = this.getPosition();
        if (A >= this.measuredText.lineCount - 1) return this;
        let B = this.measuredText.getWrappedText()[A + 1];
        if (!B) return this;
        let G = SZ(B);
        if (Q > G) {
            let I = this.getOffset({
                line: A + 1,
                column: G
            });
            return new q7(this.measuredText, I, 0)
        }
        let Z = this.getOffset({
            line: A + 1,
            column: Q
        });
        return new q7(this.measuredText, Z, 0)
    }
    startOfLine() {
        let {
            line: A
        } = this.getPosition();
        return new q7(this.measuredText, this.getOffset({
            line: A,
            column: 0
        }), 0)
    }
    firstNonBlankInLine() {
        let {
            line: A
        } = this.getPosition(), B = (this.measuredText.getWrappedText()[A] || "").match(/^\s*\S/), G = B?.index ? B.index + B[0].length - 1 : 0, Z = this.getOffset({
            line: A,
            column: G
        });
        return new q7(this.measuredText, Z, 0)
    }
    endOfLine() {
        let {
            line: A
        } = this.getPosition(), Q = this.measuredText.getLineLength(A), B = this.getOffset({
            line: A,
            column: Q
        });
        return new q7(this.measuredText, B, 0)
    }
    findLogicalLineStart(A = this.offset) {
        let Q = this.text.lastIndexOf(`
`, A - 1);
        return Q === -1 ? 0 : Q + 1
    }
    findLogicalLineEnd(A = this.offset) {
        let Q = this.text.indexOf(`
`, A);
        return Q === -1 ? this.text.length : Q
    }
    getLogicalLineBounds() {
        return {
            start: this.findLogicalLineStart(),
            end: this.findLogicalLineEnd()
        }
    }
    createCursorWithColumn(A, Q, B) {
        let G = Q - A,
            Z = Math.min(B, G);
        return new q7(this.measuredText, A + Z, 0)
    }
    endOfLogicalLine() {
        return new q7(this.measuredText, this.findLogicalLineEnd(), 0)
    }
    startOfLogicalLine() {
        return new q7(this.measuredText, this.findLogicalLineStart(), 0)
    }
    firstNonBlankInLogicalLine() {
        let {
            start: A,
            end: Q
        } = this.getLogicalLineBounds(), G = this.text.slice(A, Q).match(/\S/), Z = A + (G?.index ?? 0);
        return new q7(this.measuredText, Z, 0)
    }
    upLogicalLine() {
        let {
            start: A
        } = this.getLogicalLineBounds();
        if (A === 0) return new q7(this.measuredText, 0, 0);
        let Q = this.offset - A,
            B = A - 1,
            G = this.findLogicalLineStart(B);
        return this.createCursorWithColumn(G, B, Q)
    }
    downLogicalLine() {
        let {
            start: A,
            end: Q
        } = this.getLogicalLineBounds();
        if (Q >= this.text.length) return new q7(this.measuredText, this.text.length, 0);
        let B = this.offset - A,
            G = Q + 1,
            Z = this.findLogicalLineEnd(G);
        return this.createCursorWithColumn(G, Z, B)
    }
    nextWord() {
        let A = this;
        while (A.isOverWordChar() && !A.isAtEnd()) A = A.right();
        while (!A.isOverWordChar() && !A.isAtEnd()) A = A.right();
        return A
    }
    endOfWord() {
        let A = this;
        if (A.isOverWordChar() && (!A.right().isOverWordChar() || A.right().isAtEnd())) return A = A.right(), A.endOfWord();
        if (!A.isOverWordChar()) A = A.nextWord();
        while (A.right().isOverWordChar() && !A.isAtEnd()) A = A.right();
        return A
    }
    prevWord() {
        let A = this;
        if (!A.left().isOverWordChar()) A = A.left();
        while (!A.isOverWordChar() && !A.isAtStart()) A = A.left();
        if (A.isOverWordChar())
            while (A.left().isOverWordChar() && !A.isAtStart()) A = A.left();
        return A
    }
    nextWORD() {
        let A = this;
        while (!A.isOverWhitespace() && !A.isAtEnd()) A = A.right();
        while (A.isOverWhitespace() && !A.isAtEnd()) A = A.right();
        return A
    }
    endOfWORD() {
        let A = this;
        if (!A.isOverWhitespace() && (A.right().isOverWhitespace() || A.right().isAtEnd())) return A = A.right(), A.endOfWORD();
        if (A.isOverWhitespace()) A = A.nextWORD();
        while (!A.right().isOverWhitespace() && !A.isAtEnd()) A = A.right();
        return A
    }
    prevWORD() {
        let A = this;
        if (A.left().isOverWhitespace()) A = A.left();
        while (A.isOverWhitespace() && !A.isAtStart()) A = A.left();
        if (!A.isOverWhitespace())
            while (!A.left().isOverWhitespace() && !A.isAtStart()) A = A.left();
        return A
    }
    modifyText(A, Q = "") {
        let B = this.offset,
            G = A.offset,
            Z = this.text.slice(0, B) + Q + this.text.slice(G);
        return q7.fromText(Z, this.columns, B + Q.normalize("NFC").length)
    }
    insert(A) {
        return this.modifyText(this, A)
    }
    del() {
        if (this.isAtEnd()) return this;
        return this.modifyText(this.right())
    }
    backspace() {
        if (this.isAtStart()) return this;
        return this.left().modifyText(this)
    }
    deleteToLineStart() {
        let A = this.startOfLine(),
            Q = this.text.slice(A.offset, this.offset);
        return {
            cursor: A.modifyText(this),
            killed: Q
        }
    }
    deleteToLineEnd() {
        if (this.text[this.offset] === `
`) return {
            cursor: this.modifyText(this.right()),
            killed: `
`
        };
        let A = this.endOfLine(),
            Q = this.text.slice(this.offset, A.offset);