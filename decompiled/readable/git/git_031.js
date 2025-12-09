/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.991Z
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 31/34
 * Lines: 373833 - 375326 (1494 lines)
 * Original file: cli.js
 */

    Yp2.getSanitizedUrlString = j13;
    Yp2.parseUrl = R13;
    Yp2.stripUrlQueryAndFragment = T13
});
var Kp2 = U((Vp2) => {
    Object.defineProperty(Vp2, "__esModule", {
        value: !0
    });
    var x13 = Ip2(),
        v13 = xy(),
        Jp2 = qO(),
        b13 = vP(),
        f13 = mTA(),
        h13 = jZ0(),
        g13 = {
            ip: !1,
            request: !0,
            transaction: !0,
            user: !0
        },
        u13 = ["cookies", "data", "headers", "method", "query_string", "url"],
        Wp2 = ["id", "username", "email"];

function m13(A, Q, B) {
        if (!A) return;
        if (!A.metadata.source || A.metadata.source === "url") {
            let [G, Z] = T71(Q, {
                path: !0,
                method: !0
            });
            A.updateName(G), A.setMetadata({
                source: Z
            })
        }
        if (A.setAttribute("url", Q.originalUrl || Q.url), Q.baseUrl) A.setAttribute("baseUrl", Q.baseUrl);
        A.setData("query", Xp2(Q, B))
    }

function T71(A, Q = {}) {
        let B = A.method && A.method.toUpperCase(),
            G = "",
            Z = "url";
        if (Q.customRoute || A.route) G = Q.customRoute || `${A.baseUrl||""}${A.route&&A.route.path}`, Z = "route";
        else if (A.originalUrl || A.url) G = h13.stripUrlQueryAndFragment(A.originalUrl || A.url || "");
        let I = "";
        if (Q.method && B) I += B;
        if (Q.method && Q.path) I += " ";
        if (Q.path && G) I += G;
        return [I, Z]
    }

function d13(A, Q) {
        switch (Q) {
            case "path":
                return T71(A, {
                    path: !0
                })[0];
            case "handler":
                return A.route && A.route.stack && A.route.stack[0] && A.route.stack[0].name || "<anonymous>";
            case "methodPath":
            default: {
                let B = A._reconstructedRoute ? A._reconstructedRoute : void 0;
                return T71(A, {
                    path: !0,
                    method: !0,
                    customRoute: B
                })[0]
            }
        }
    }

function c13(A, Q) {
        let B = {};
        return (Array.isArray(Q) ? Q : Wp2).forEach((Z) => {
            if (A && Z in A) B[Z] = A[Z]
        }), B
    }

function SZ0(A, Q) {
        let {
            include: B = u13,
            deps: G
        } = Q || {}, Z = {}, I = A.headers || {}, Y = A.method, J = I.host || A.hostname || A.host || "<no host>", W = A.protocol === "https" || A.socket && A.socket.encrypted ? "https" : "http", X = A.originalUrl || A.url || "", F = X.startsWith(W) ? X : `${W}://${J}${X}`;
        return B.forEach((V) => {
            switch (V) {
                case "headers": {
                    if (Z.headers = I, !B.includes("cookies")) delete Z.headers.cookie;
                    break
                }
                case "method": {
                    Z.method = Y;
                    break
                }
                case "url": {
                    Z.url = F;
                    break
                }
                case "cookies": {
                    Z.cookies = A.cookies || I.cookie && x13.parseCookie(I.cookie) || {};
                    break
                }
                case "query_string": {
                    Z.query_string = Xp2(A, G);
                    break
                }
                case "data": {
                    if (Y === "GET" || Y === "HEAD") break;
                    if (A.body !== void 0) Z.data = Jp2.isString(A.body) ? A.body : JSON.stringify(f13.normalize(A.body));
                    break
                }
                default:
                    if ({}.hasOwnProperty.call(A, V)) Z[V] = A[V]
            }
        }), Z
    }

function p13(A, Q, B) {
        let G = {
            ...g13,
            ...B && B.include
        };
        if (G.request) {
            let Z = Array.isArray(G.request) ? SZ0(Q, {
                include: G.request,
                deps: B && B.deps
            }) : SZ0(Q, {
                deps: B && B.deps
            });
            A.request = {
                ...A.request,
                ...Z
            }
        }
        if (G.user) {
            let Z = Q.user && Jp2.isPlainObject(Q.user) ? c13(Q.user, G.user) : {};
            if (Object.keys(Z).length) A.user = {
                ...A.user,
                ...Z
            }
        }
        if (G.ip) {
            let Z = Q.ip || Q.socket && Q.socket.remoteAddress;
            if (Z) A.user = {
                ...A.user,
                ip_address: Z
            }
        }
        if (G.transaction && !A.transaction) A.transaction = d13(Q, G.transaction);
        return A
    }

function Xp2(A, Q) {
        let B = A.originalUrl || A.url || "";
        if (!B) return;
        if (B.startsWith("/")) B = `http://dogs.are.great${B}`;
        try {
            return A.query || typeof URL < "u" && new URL(B).search.slice(1) || Q && Q.url && Q.url.parse(B).query || void 0
        } catch (G) {
            return
        }
    }

function Fp2(A) {
        let Q = {};
        try {
            A.forEach((B, G) => {
                if (typeof B === "string") Q[G] = B
            })
        } catch (B) {
            v13.DEBUG_BUILD && b13.logger.warn("Sentry failed extracting headers from a request object. If you see this, please file an issue.")
        }
        return Q
    }

function l13(A) {
        let Q = Fp2(A.headers);
        return {
            method: A.method,
            url: A.url,
            headers: Q
        }
    }
    Vp2.DEFAULT_USER_INCLUDES = Wp2;
    Vp2.addRequestDataToEvent = p13;
    Vp2.addRequestDataToTransaction = m13;
    Vp2.extractPathForTransaction = T71;
    Vp2.extractRequestData = SZ0;
    Vp2.winterCGHeadersToDict = Fp2;
    Vp2.winterCGRequestToRequestData = l13
});
var Ep2 = U((Cp2) => {
    Object.defineProperty(Cp2, "__esModule", {
        value: !0
    });

var Dp2 = ["fatal", "error", "warning", "log", "info", "debug"];

function e13(A) {
        return Hp2(A)
    }

function Hp2(A) {
        return A === "warn" ? "warning" : Dp2.includes(A) ? A : "log"
    }
    Cp2.severityFromString = e13;
    Cp2.severityLevelFromString = Hp2;
    Cp2.validSeverityLevels = Dp2
});
var _Z0 = U((qp2) => {
    Object.defineProperty(qp2, "__esModule", {
        value: !0
    });
    var zp2 = HC(),
        Up2 = 1000;

    function $p2() {
        return Date.now() / Up2
    }

function G03() {
        let {
            performance: A
        } = zp2.GLOBAL_OBJ;
        if (!A || !A.now) return $p2;
        let Q = Date.now() - A.now(),
            B = A.timeOrigin == null ? Q : A.timeOrigin;
        return () => {
            return (B + A.now()) / Up2
        }
    }
    var wp2 = G03(),
        Z03 = wp2;
    qp2._browserPerformanceTimeOriginMode = void 0;
    var I03 = (() => {
        let {
            performance: A
        } = zp2.GLOBAL_OBJ;
        if (!A || !A.now) {
            qp2._browserPerformanceTimeOriginMode = "none";
            return
        }
        let Q = 3600000,
            B = A.now(),
            G = Date.now(),
            Z = A.timeOrigin ? Math.abs(A.timeOrigin + B - G) : Q,
            I = Z < Q,
            Y = A.timing && A.timing.navigationStart,
            W = typeof Y === "number" ? Math.abs(Y + B - G) : Q,
            X = W < Q;
        if (I || X)
            if (Z <= W) return qp2._browserPerformanceTimeOriginMode = "timeOrigin", A.timeOrigin;
            else return qp2._browserPerformanceTimeOriginMode = "navigationStart", Y;
        return qp2._browserPerformanceTimeOriginMode = "dateNow", G
    })();
    qp2.browserPerformanceTimeOrigin = I03;
    qp2.dateTimestampInSeconds = $p2;
    qp2.timestampInSeconds = wp2;
    qp2.timestampWithMs = Z03
});
var yZ0 = U((Op2) => {
    Object.defineProperty(Op2, "__esModule", {
        value: !0
    });
    var F03 = xy(),
        V03 = qO(),
        K03 = vP(),
        D03 = "baggage",
        kZ0 = "sentry-",
        Lp2 = /^sentry-/,
        Mp2 = 8192;

function H03(A) {
        if (!V03.isString(A) && !Array.isArray(A)) return;
        let Q = {};
        if (Array.isArray(A)) Q = A.reduce((G, Z) => {
            let I = Np2(Z);
            for (let Y of Object.keys(I)) G[Y] = I[Y];
            return G
        }, {});
        else {
            if (!A) return;
            Q = Np2(A)
        }
        let B = Object.entries(Q).reduce((G, [Z, I]) => {
            if (Z.match(Lp2)) {
                let Y = Z.slice(kZ0.length);
                G[Y] = I
            }
            return G
        }, {});
        if (Object.keys(B).length > 0) return B;
        else return
    }

function C03(A) {
        if (!A) return;
        let Q = Object.entries(A).reduce((B, [G, Z]) => {
            if (Z) B[`${kZ0}${G}`] = Z;
            return B
        }, {});
        return E03(Q)
    }

function Np2(A) {
        return A.split(",").map((Q) => Q.split("=").map((B) => decodeURIComponent(B.trim()))).reduce((Q, [B, G]) => {
            return Q[B] = G, Q
        }, {})
    }

function E03(A) {
        if (Object.keys(A).length === 0) return;
        return Object.entries(A).reduce((Q, [B, G], Z) => {
            let I = `${encodeURIComponent(B)}=${encodeURIComponent(G)}`,
                Y = Z === 0 ? I : `${Q},${I}`;
            if (Y.length > Mp2) return F03.DEBUG_BUILD && K03.logger.warn(`Not adding key: ${B} with val: ${G} to baggage header due to exceeding baggage size limits.`), Q;
            else return Y
        }, "")
    }
    Op2.BAGGAGE_HEADER_NAME = D03;
    Op2.MAX_BAGGAGE_STRING_LENGTH = Mp2;
    Op2.SENTRY_BAGGAGE_KEY_PREFIX = kZ0;
    Op2.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = Lp2;
    Op2.baggageHeaderToDynamicSamplingContext = H03;
    Op2.dynamicSamplingContextToSentryBaggageHeader = C03
});
var jp2 = U((Pp2) => {
    Object.defineProperty(Pp2, "__esModule", {
        value: !0
    });
    var Rp2 = yZ0(),
        LO = fTA(),
        Tp2 = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

function xZ0(A) {
        if (!A) return;
        let Q = A.match(Tp2);
        if (!Q) return;
        let B;
        if (Q[3] === "1") B = !0;
        else if (Q[3] === "0") B = !1;
        return {
            traceId: Q[1],
            parentSampled: B,
            parentSpanId: Q[2]
        }
    }

function L03(A, Q) {
        let B = xZ0(A),
            G = Rp2.baggageHeaderToDynamicSamplingContext(Q),
            {
                traceId: Z,
                parentSpanId: I,
                parentSampled: Y
            } = B || {};
        if (!B) return {
            traceparentData: B,
            dynamicSamplingContext: void 0,
            propagationContext: {
                traceId: Z || LO.uuid4(),
                spanId: LO.uuid4().substring(16)
            }
        };
        else return {
            traceparentData: B,
            dynamicSamplingContext: G || {},
            propagationContext: {
                traceId: Z || LO.uuid4(),
                parentSpanId: I || LO.uuid4().substring(16),
                spanId: LO.uuid4().substring(16),
                sampled: Y,
                dsc: G || {}
            }
        }
    }

function M03(A, Q) {
        let B = xZ0(A),
            G = Rp2.baggageHeaderToDynamicSamplingContext(Q),
            {
                traceId: Z,
                parentSpanId: I,
                parentSampled: Y
            } = B || {};
        if (!B) return {
            traceId: Z || LO.uuid4(),
            spanId: LO.uuid4().substring(16)
        };
        else return {
            traceId: Z || LO.uuid4(),
            parentSpanId: I || LO.uuid4().substring(16),
            spanId: LO.uuid4().substring(16),
            sampled: Y,
            dsc: G || {}
        }
    }

function O03(A = LO.uuid4(), Q = LO.uuid4().substring(16), B) {
        let G = "";
        if (B !== void 0) G = B ? "-1" : "-0";
        return `${A}-${Q}${G}`
    }
    Pp2.TRACEPARENT_REGEXP = Tp2;
    Pp2.extractTraceparentData = xZ0;
    Pp2.generateSentryTraceHeader = O03;
    Pp2.propagationContextFromHeaders = M03;
    Pp2.tracingContextFromHeaders = L03
});
var bZ0 = U((kp2) => {
    Object.defineProperty(kp2, "__esModule", {
        value: !0
    });
    var _03 = sG0(),
        k03 = mTA(),
        Sp2 = NO();

function y03(A, Q = []) {
        return [A, Q]
    }

function x03(A, Q) {
        let [B, G] = A;
        return [B, [...G, Q]]
    }

function _p2(A, Q) {
        let B = A[1];
        for (let G of B) {
            let Z = G[0].type;
            if (Q(G, Z)) return !0
        }
        return !1
    }

function v03(A, Q) {
        return _p2(A, (B, G) => Q.includes(G))
    }

function vZ0(A, Q) {
        return (Q || new TextEncoder).encode(A)
    }

function b03(A, Q) {
        let [B, G] = A, Z = JSON.stringify(B);

function I(Y) {
            if (typeof Z === "string") Z = typeof Y === "string" ? Z + Y : [vZ0(Z, Q), Y];
            else Z.push(typeof Y === "string" ? vZ0(Y, Q) : Y)
        }
        for (let Y of G) {
            let [J, W] = Y;
            if (I(`
${JSON.stringify(J)}
`), typeof W === "string" || W instanceof Uint8Array) I(W);
            else {
                let X;
                try {
                    X = JSON.stringify(W)
                } catch (F) {
                    X = JSON.stringify(k03.normalize(W))
                }
                I(X)
            }
        }
        return typeof Z === "string" ? Z : f03(Z)
    }

function f03(A) {
        let Q = A.reduce((Z, I) => Z + I.length, 0),
            B = new Uint8Array(Q),
            G = 0;
        for (let Z of A) B.set(Z, G), G += Z.length;
        return B
    }

function h03(A, Q, B) {
        let G = typeof A === "string" ? Q.encode(A) : A;

function Z(W) {
            let X = G.subarray(0, W);
            return G = G.subarray(W + 1), X
        }

function I() {
            let W = G.indexOf(10);
            if (W < 0) W = G.length;
            return JSON.parse(B.decode(Z(W)))
        }
        let Y = I(),
            J = [];
        while (G.length) {
            let W = I(),
                X = typeof W.length === "number" ? W.length : void 0;
            J.push([W, X ? Z(X) : I()])
        }
        return [Y, J]
    }

function g03(A, Q) {
        let B = typeof A.data === "string" ? vZ0(A.data, Q) : A.data;
        return [Sp2.dropUndefinedKeys({
            type: "attachment",
            length: B.length,
            filename: A.filename,
            content_type: A.contentType,
            attachment_type: A.attachmentType
        }), B]
    }

var u03 = {
        session: "session",
        sessions: "session",
        attachment: "attachment",
        transaction: "transaction",
        event: "error",
        client_report: "internal",
        user_report: "default",
        profile: "profile",
        replay_event: "replay",
        replay_recording: "replay",
        check_in: "monitor",
        feedback: "feedback",
        span: "span",
        statsd: "metric_bucket"
    };

function m03(A) {
        return u03[A]
    }

function d03(A) {
        if (!A || !A.sdk) return;
        let {
            name: Q,
            version: B
        } = A.sdk;
        return {
            name: Q,
            version: B
        }
    }

function c03(A, Q, B, G) {
        let Z = A.sdkProcessingMetadata && A.sdkProcessingMetadata.dynamicSamplingContext;
        return {
            event_id: A.event_id,
            sent_at: new Date().toISOString(),
            ...Q && {
                sdk: Q
            },
            ...!!B && G && {
                dsn: _03.dsnToString(G)
            },
            ...Z && {
                trace: Sp2.dropUndefinedKeys({
                    ...Z
                })
            }
        }
    }
    kp2.addItemToEnvelope = x03;
    kp2.createAttachmentEnvelopeItem = g03;
    kp2.createEnvelope = y03;
    kp2.createEventEnvelopeHeaders = c03;
    kp2.envelopeContainsItemType = v03;
    kp2.envelopeItemTypeToDataCategory = m03;
    kp2.forEachEnvelopeItem = _p2;
    kp2.getSdkMetadataForEnvelopeHeader = d03;
    kp2.parseEnvelope = h03;
    kp2.serializeEnvelope = b03
});
var xp2 = U((yp2) => {
    Object.defineProperty(yp2, "__esModule", {
        value: !0
    });
    var AQ3 = bZ0(),
        QQ3 = _Z0();

function BQ3(A, Q, B) {
        let G = [{
            type: "client_report"
        }, {
            timestamp: B || QQ3.dateTimestampInSeconds(),
            discarded_events: A
        }];
        return AQ3.createEnvelope(Q ? {
            dsn: Q
        } : {}, [G])
    }
    yp2.createClientReportEnvelope = BQ3
});
var gp2 = U((hp2) => {
    Object.defineProperty(hp2, "__esModule", {
        value: !0
    });
    var vp2 = 60000;

function bp2(A, Q = Date.now()) {
        let B = parseInt(`${A}`, 10);
        if (!isNaN(B)) return B * 1000;
        let G = Date.parse(`${A}`);
        if (!isNaN(G)) return G - Q;
        return vp2
    }

function fp2(A, Q) {
        return A[Q] || A.all || 0
    }

function ZQ3(A, Q, B = Date.now()) {
        return fp2(A, Q) > B
    }

function IQ3(A, {
        statusCode: Q,
        headers: B
    }, G = Date.now()) {
        let Z = {
                ...A
            },
            I = B && B["x-sentry-rate-limits"],
            Y = B && B["retry-after"];
        if (I)
            for (let J of I.trim().split(",")) {
                let [W, X, , , F] = J.split(":", 5), V = parseInt(W, 10), K = (!isNaN(V) ? V : 60) * 1000;
                if (!X) Z.all = G + K;
                else
                    for (let D of X.split(";"))
                        if (D === "metric_bucket") {
                            if (!F || F.split(";").includes("custom")) Z[D] = G + K
                        } else Z[D] = G + K
            } else if (Y) Z.all = G + bp2(Y, G);
            else if (Q === 429) Z.all = G + 60000;
        return Z
    }
    hp2.DEFAULT_RETRY_AFTER = vp2;
    hp2.disabledUntil = fp2;
    hp2.isRateLimited = ZQ3;
    hp2.parseRetryAfterHeader = bp2;
    hp2.updateRateLimits = IQ3
});
var cp2 = U((dp2) => {
    Object.defineProperty(dp2, "__esModule", {
        value: !0
    });

function up2(A, Q, B) {
        let G = Q.match(/([a-z_]+)\.(.*)/i);
        if (G === null) A[Q] = B;
        else {
            let Z = A[G[1]];
            up2(Z, G[2], B)
        }
    }

function VQ3(A, Q, B = {}) {
        return Array.isArray(Q) ? mp2(A, Q, B) : KQ3(A, Q, B)
    }

function mp2(A, Q, B) {
        let G = Q.find((Z) => Z.name === A.name);
        if (G) {
            for (let [Z, I] of Object.entries(B)) up2(G, Z, I);
            return Q
        }
        return [...Q, A]
    }

function KQ3(A, Q, B) {
        return (Z) => {
            let I = Q(Z);
            if (A.allowExclusionByUser) {
                if (!I.find((J) => J.name === A.name)) return I
            }
            return mp2(A, I, B)
        }
    }
    dp2.addOrUpdateIntegration = VQ3
});
var lp2 = U((pp2) => {
    Object.defineProperty(pp2, "__esModule", {
        value: !0
    });

function HQ3(A) {
        let Q = [],
            B = {};
        return {
            add(G, Z) {
                while (Q.length >= A) {
                    let I = Q.shift();
                    if (I !== void 0) delete B[I]
                }
                if (B[G]) this.delete(G);
                Q.push(G), B[G] = Z
            },
            clear() {
                B = {}, Q = []
            },
            get(G) {
                return B[G]
            },
            size() {
                return Q.length
            },
            delete(G) {
                if (!B[G]) return !1;
                delete B[G];
                for (let Z = 0; Z < Q.length; Z++)
                    if (Q[Z] === G) {
                        Q.splice(Z, 1);
                        break
                    } return !0
            }
        }
    }
    pp2.makeFifoCache = HQ3
});
var sp2 = U((ap2) => {
    Object.defineProperty(ap2, "__esModule", {
        value: !0
    });
    var fZ0 = qO(),
        ip2 = fTA(),
        EQ3 = mTA(),
        zQ3 = NO();

function hZ0(A, Q) {
        return A(Q.stack || "", 1)
    }

function np2(A, Q) {
        let B = {
                type: Q.name || Q.constructor.name,
                value: Q.message
            },
            G = hZ0(A, Q);
        if (G.length) B.stacktrace = {
            frames: G
        };
        return B
    }

function UQ3(A) {
        if ("name" in A && typeof A.name === "string") {
            let Q = `'${A.name}' captured as exception`;
            if ("message" in A && typeof A.message === "string") Q += ` with message '${A.message}'`;
            return Q
        } else if ("message" in A && typeof A.message === "string") return A.message;
        else return `Object captured as exception with keys: ${zQ3.extractExceptionKeysForMessage(A)}`
    }

    function $Q3(A, Q, B, G) {
        let Z = typeof A === "function" ? A().getClient() : A,
            I = B,
            J = G && G.data && G.data.mechanism || {
                handled: !0,
                type: "generic"
            },
            W;
        if (!fZ0.isError(B)) {
            if (fZ0.isPlainObject(B)) {
                let F = Z && Z.getOptions().normalizeDepth;
                W = {
                    ["__serialized__"]: EQ3.normalizeToSize(B, F)
                };
                let V = UQ3(B);
                I = G && G.syntheticException || Error(V), I.message = V
            } else I = G && G.syntheticException || Error(B), I.message = B;
            J.synthetic = !0
        }
        let X = {
            exception: {
                values: [np2(Q, I)]
            }
        };
        if (W) X.extra = W;
        return ip2.addExceptionTypeValue(X, void 0, void 0), ip2.addExceptionMechanism(X, J), {
            ...X,
            event_id: G && G.event_id
        }
    }

function wQ3(A, Q, B = "info", G, Z) {
        let I = {
            event_id: G && G.event_id,
            level: B
        };
        if (Z && G && G.syntheticException) {
            let Y = hZ0(A, G.syntheticException);
            if (Y.length) I.exception = {
                values: [{
                    value: Q,
                    stacktrace: {
                        frames: Y
                    }
                }]
            }
        }
        if (fZ0.isParameterizedString(Q)) {
            let {
                __sentry_template_string__: Y,
                __sentry_template_values__: J
            } = Q;
            return I.logentry = {
                message: Y,
                params: J
            }, I
        }
        return I.message = Q, I
    }
    ap2.eventFromMessage = wQ3;
    ap2.eventFromUnknownInput = $Q3;
    ap2.exceptionFromError = np2;
    ap2.parseStackFrames = hZ0
});
var op2 = U((rp2) => {
    Object.defineProperty(rp2, "__esModule", {
        value: !0
    });
    var OQ3 = NO(),
        RQ3 = V71();

function TQ3(A, Q, B, G) {
        let Z = A(),
            I = !1,
            Y = !0;
        return setInterval(() => {
            let J = Z.getTimeMs();
            if (I === !1 && J > Q + B) {
                if (I = !0, Y) G()
            }
            if (J < Q + B) I = !1
        }, 20), {
            poll: () => {
                Z.reset()
            },
            enabled: (J) => {
                Y = J
            }
        }
    }

function PQ3(A, Q, B) {
        let G = Q ? Q.replace(/^file:\/\//, "") : void 0,
            Z = A.location.columnNumber ? A.location.columnNumber + 1 : void 0,
            I = A.location.lineNumber ? A.location.lineNumber + 1 : void 0;
        return OQ3.dropUndefinedKeys({
            filename: G,
            module: B(G),
            function: A.functionName || "?",
            colno: Z,
            lineno: I,
            in_app: G ? RQ3.filenameIsInApp(G) : void 0
        })
    }
    rp2.callFrameToStackFrame = PQ3;
    rp2.watchdogTimer = TQ3
});
var Al2 = U((ep2) => {
    Object.defineProperty(ep2, "__esModule", {
        value: !0
    });

class tp2 {
        constructor(A) {
            this._maxSize = A, this._cache = new Map
        }
        get size() {
            return this._cache.size
        }
        get(A) {
            let Q = this._cache.get(A);
            if (Q === void 0) return;
            return this._cache.delete(A), this._cache.set(A, Q), Q
        }
        set(A, Q) {
            if (this._cache.size >= this._maxSize) this._cache.delete(this._cache.keys().next().value);
            this._cache.set(A, Q)
        }
        remove(A) {
            let Q = this._cache.get(A);
            if (Q) this._cache.delete(A);
            return Q
        }
        clear() {
            this._cache.clear()
        }
        keys() {
            return Array.from(this._cache.keys())
        }
        values() {
            let A = [];
            return this._cache.forEach((Q) => A.push(Q)), A
        }
    }
    ep2.LRUMap = tp2
});
var gZ0 = U((Ql2) => {
    Object.defineProperty(Ql2, "__esModule", {
        value: !0
    });

function kQ3(A, Q) {
        return A != null ? A : Q()
    }
    Ql2._nullishCoalesce = kQ3
});
var Gl2 = U((Bl2) => {
    Object.defineProperty(Bl2, "__esModule", {
        value: !0
    });
    var xQ3 = gZ0();

async function vQ3(A, Q) {
        return xQ3._nullishCoalesce(A, Q)
    }
    Bl2._asyncNullishCoalesce = vQ3
});
var uZ0 = U((Zl2) => {
    Object.defineProperty(Zl2, "__esModule", {
        value: !0
    });

async function fQ3(A) {
        let Q = void 0,
            B = A[0],
            G = 1;
        while (G < A.length) {
            let Z = A[G],
                I = A[G + 1];
            if (G += 2, (Z === "optionalAccess" || Z === "optionalCall") && B == null) return;
            if (Z === "access" || Z === "optionalAccess") Q = B, B = await I(B);
            else if (Z === "call" || Z === "optionalCall") B = await I((...Y) => B.call(Q, ...Y)), Q = void 0
        }
        return B
    }
    Zl2._asyncOptionalChain = fQ3
});
var Yl2 = U((Il2) => {
    Object.defineProperty(Il2, "__esModule", {
        value: !0
    });
    var gQ3 = uZ0();

async function uQ3(A) {
        let Q = await gQ3._asyncOptionalChain(A);
        return Q == null ? !0 : Q
    }
    Il2._asyncOptionalChainDelete = uQ3
});
var mZ0 = U((Jl2) => {
    Object.defineProperty(Jl2, "__esModule", {
        value: !0
    });

function dQ3(A) {
        let Q = void 0,
            B = A[0],
            G = 1;
        while (G < A.length) {
            let Z = A[G],
                I = A[G + 1];
            if (G += 2, (Z === "optionalAccess" || Z === "optionalCall") && B == null) return;
            if (Z === "access" || Z === "optionalAccess") Q = B, B = I(B);
            else if (Z === "call" || Z === "optionalCall") B = I((...Y) => B.call(Q, ...Y)), Q = void 0
        }
        return B
    }
    Jl2._optionalChain = dQ3
});
var Xl2 = U((Wl2) => {
    Object.defineProperty(Wl2, "__esModule", {
        value: !0
    });
    var pQ3 = mZ0();

function lQ3(A) {
        let Q = pQ3._optionalChain(A);
        return Q == null ? !0 : Q
    }
    Wl2._optionalChainDelete = lQ3
});
var Vl2 = U((Fl2) => {
    Object.defineProperty(Fl2, "__esModule", {
        value: !0
    });

function nQ3(A) {
        return A.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
    }
    Fl2.escapeStringForRegex = nQ3
});
var l0 = U((nZ0) => {
    Object.defineProperty(nZ0, "__esModule", {
        value: !0
    });
    var sQ3 = fd2(),
        P71 = lG0(),
        dZ0 = sG0(),
        rQ3 = rG0(),
        cZ0 = HC(),
        oQ3 = hc2(),
        CC = qO(),
        tQ3 = cc2(),
        j71 = vP(),
        eQ3 = MZ0(),
        gn = fTA(),
        pZ0 = LZ0(),
        S71 = mTA(),
        Bg = NO(),
        b0A = Ap2(),
        AB3 = Gp2(),
        f0A = Kp2(),
        lZ0 = Ep2(),
        cTA = K71(),
        pTA = vTA(),
        un = XZ0(),
        iZ0 = TZ0(),
        lTA = _Z0(),
        iTA = jp2(),
        Kl2 = NZ0(),
        by = bZ0(),
        QB3 = xp2(),
        nTA = gp2(),
        nWA = yZ0(),
        _71 = jZ0(),
        BB3 = cp2(),
        GB3 = lp2(),
        k71 = sp2(),
        Dl2 = op2(),
        ZB3 = Al2(),
        IB3 = Gl2(),
        YB3 = uZ0(),
        JB3 = Yl2(),
        WB3 = gZ0(),
        XB3 = mZ0(),
        FB3 = Xl2(),
        VB3 = QZ0(),
        KB3 = YZ0(),
        Hl2 = wZ0(),
        DB3 = VZ0(),
        HB3 = $Z0(),
        CB3 = HZ0(),
        EB3 = zZ0(),
        zB3 = Ag(),
        UB3 = V71(),
        $B3 = Vl2(),
        wB3 = UZ0();
    nZ0.applyAggregateErrorsToEvent = sQ3.applyAggregateErrorsToEvent;
    nZ0.getComponentName = P71.getComponentName;
    nZ0.getDomElement = P71.getDomElement;
    nZ0.getLocationHref = P71.getLocationHref;
    nZ0.htmlTreeAsString = P71.htmlTreeAsString;
    nZ0.dsnFromString = dZ0.dsnFromString;
    nZ0.dsnToString = dZ0.dsnToString;
    nZ0.makeDsn = dZ0.makeDsn;
    nZ0.SentryError = rQ3.SentryError;
    nZ0.GLOBAL_OBJ = cZ0.GLOBAL_OBJ;
    nZ0.getGlobalObject = cZ0.getGlobalObject;
    nZ0.getGlobalSingleton = cZ0.getGlobalSingleton;
    nZ0.addInstrumentationHandler = oQ3.addInstrumentationHandler;
    nZ0.isDOMError = CC.isDOMError;
    nZ0.isDOMException = CC.isDOMException;
    nZ0.isElement = CC.isElement;
    nZ0.isError = CC.isError;
    nZ0.isErrorEvent = CC.isErrorEvent;
    nZ0.isEvent = CC.isEvent;
    nZ0.isInstanceOf = CC.isInstanceOf;
    nZ0.isNaN = CC.isNaN;
    nZ0.isParameterizedString = CC.isParameterizedString;
    nZ0.isPlainObject = CC.isPlainObject;
    nZ0.isPrimitive = CC.isPrimitive;
    nZ0.isRegExp = CC.isRegExp;
    nZ0.isString = CC.isString;
    nZ0.isSyntheticEvent = CC.isSyntheticEvent;
    nZ0.isThenable = CC.isThenable;
    nZ0.isVueViewModel = CC.isVueViewModel;
    nZ0.isBrowser = tQ3.isBrowser;
    nZ0.CONSOLE_LEVELS = j71.CONSOLE_LEVELS;
    nZ0.consoleSandbox = j71.consoleSandbox;
    nZ0.logger = j71.logger;
    nZ0.originalConsoleMethods = j71.originalConsoleMethods;
    nZ0.memoBuilder = eQ3.memoBuilder;
    nZ0.addContextToFrame = gn.addContextToFrame;
    nZ0.addExceptionMechanism = gn.addExceptionMechanism;
    nZ0.addExceptionTypeValue = gn.addExceptionTypeValue;
    nZ0.arrayify = gn.arrayify;
    nZ0.checkOrSetAlreadyCaught = gn.checkOrSetAlreadyCaught;
    nZ0.getEventDescription = gn.getEventDescription;
    nZ0.parseSemver = gn.parseSemver;
    nZ0.uuid4 = gn.uuid4;
    nZ0.dynamicRequire = pZ0.dynamicRequire;
    nZ0.isNodeEnv = pZ0.isNodeEnv;
    nZ0.loadModule = pZ0.loadModule;
    nZ0.normalize = S71.normalize;
    nZ0.normalizeToSize = S71.normalizeToSize;
    nZ0.normalizeUrlToBase = S71.normalizeUrlToBase;
    nZ0.walk = S71.walk;
    nZ0.addNonEnumerableProperty = Bg.addNonEnumerableProperty;
    nZ0.convertToPlainObject = Bg.convertToPlainObject;
    nZ0.dropUndefinedKeys = Bg.dropUndefinedKeys;
    nZ0.extractExceptionKeysForMessage = Bg.extractExceptionKeysForMessage;
    nZ0.fill = Bg.fill;
    nZ0.getOriginalFunction = Bg.getOriginalFunction;
    nZ0.markFunctionWrapped = Bg.markFunctionWrapped;
    nZ0.objectify = Bg.objectify;
    nZ0.urlEncode = Bg.urlEncode;
    nZ0.basename = b0A.basename;
    nZ0.dirname = b0A.dirname;
    nZ0.isAbsolute = b0A.isAbsolute;
    nZ0.join = b0A.join;
    nZ0.normalizePath = b0A.normalizePath;
    nZ0.relative = b0A.relative;
    nZ0.resolve = b0A.resolve;
    nZ0.makePromiseBuffer = AB3.makePromiseBuffer;
    nZ0.DEFAULT_USER_INCLUDES = f0A.DEFAULT_USER_INCLUDES;
    nZ0.addRequestDataToEvent = f0A.addRequestDataToEvent;
    nZ0.addRequestDataToTransaction = f0A.addRequestDataToTransaction;
    nZ0.extractPathForTransaction = f0A.extractPathForTransaction;
    nZ0.extractRequestData = f0A.extractRequestData;
    nZ0.winterCGHeadersToDict = f0A.winterCGHeadersToDict;
    nZ0.winterCGRequestToRequestData = f0A.winterCGRequestToRequestData;
    nZ0.severityFromString = lZ0.severityFromString;
    nZ0.severityLevelFromString = lZ0.severityLevelFromString;
    nZ0.validSeverityLevels = lZ0.validSeverityLevels;
    nZ0.createStackParser = cTA.createStackParser;
    nZ0.getFunctionName = cTA.getFunctionName;
    nZ0.nodeStackLineParser = cTA.nodeStackLineParser;
    nZ0.stackParserFromStackParserOptions = cTA.stackParserFromStackParserOptions;
    nZ0.stripSentryFramesAndReverse = cTA.stripSentryFramesAndReverse;
    nZ0.isMatchingPattern = pTA.isMatchingPattern;
    nZ0.safeJoin = pTA.safeJoin;
    nZ0.snipLine = pTA.snipLine;
    nZ0.stringMatchesSomePattern = pTA.stringMatchesSomePattern;
    nZ0.truncate = pTA.truncate;
    nZ0.isNativeFetch = un.isNativeFetch;
    nZ0.supportsDOMError = un.supportsDOMError;
    nZ0.supportsDOMException = un.supportsDOMException;
    nZ0.supportsErrorEvent = un.supportsErrorEvent;
    nZ0.supportsFetch = un.supportsFetch;
    nZ0.supportsNativeFetch = un.supportsNativeFetch;
    nZ0.supportsReferrerPolicy = un.supportsReferrerPolicy;
    nZ0.supportsReportingObserver = un.supportsReportingObserver;
    nZ0.SyncPromise = iZ0.SyncPromise;
    nZ0.rejectedSyncPromise = iZ0.rejectedSyncPromise;
    nZ0.resolvedSyncPromise = iZ0.resolvedSyncPromise;
    Object.defineProperty(nZ0, "_browserPerformanceTimeOriginMode", {
        enumerable: !0,
        get: () => lTA._browserPerformanceTimeOriginMode
    });
    nZ0.browserPerformanceTimeOrigin = lTA.browserPerformanceTimeOrigin;
    nZ0.dateTimestampInSeconds = lTA.dateTimestampInSeconds;
    nZ0.timestampInSeconds = lTA.timestampInSeconds;
    nZ0.timestampWithMs = lTA.timestampWithMs;
    nZ0.TRACEPARENT_REGEXP = iTA.TRACEPARENT_REGEXP;
    nZ0.extractTraceparentData = iTA.extractTraceparentData;
    nZ0.generateSentryTraceHeader = iTA.generateSentryTraceHeader;
    nZ0.propagationContextFromHeaders = iTA.propagationContextFromHeaders;
    nZ0.tracingContextFromHeaders = iTA.tracingContextFromHeaders;
    nZ0.getSDKSource = Kl2.getSDKSource;
    nZ0.isBrowserBundle = Kl2.isBrowserBundle;
    nZ0.addItemToEnvelope = by.addItemToEnvelope;
    nZ0.createAttachmentEnvelopeItem = by.createAttachmentEnvelopeItem;
    nZ0.createEnvelope = by.createEnvelope;
    nZ0.createEventEnvelopeHeaders = by.createEventEnvelopeHeaders;
    nZ0.envelopeContainsItemType = by.envelopeContainsItemType;
    nZ0.envelopeItemTypeToDataCategory = by.envelopeItemTypeToDataCategory;
    nZ0.forEachEnvelopeItem = by.forEachEnvelopeItem;
    nZ0.getSdkMetadataForEnvelopeHeader = by.getSdkMetadataForEnvelopeHeader;
    nZ0.parseEnvelope = by.parseEnvelope;
    nZ0.serializeEnvelope = by.serializeEnvelope;
    nZ0.createClientReportEnvelope = QB3.createClientReportEnvelope;
    nZ0.DEFAULT_RETRY_AFTER = nTA.DEFAULT_RETRY_AFTER;
    nZ0.disabledUntil = nTA.disabledUntil;
    nZ0.isRateLimited = nTA.isRateLimited;
    nZ0.parseRetryAfterHeader = nTA.parseRetryAfterHeader;
    nZ0.updateRateLimits = nTA.updateRateLimits;
    nZ0.BAGGAGE_HEADER_NAME = nWA.BAGGAGE_HEADER_NAME;
    nZ0.MAX_BAGGAGE_STRING_LENGTH = nWA.MAX_BAGGAGE_STRING_LENGTH;
    nZ0.SENTRY_BAGGAGE_KEY_PREFIX = nWA.SENTRY_BAGGAGE_KEY_PREFIX;
    nZ0.SENTRY_BAGGAGE_KEY_PREFIX_REGEX = nWA.SENTRY_BAGGAGE_KEY_PREFIX_REGEX;
    nZ0.baggageHeaderToDynamicSamplingContext = nWA.baggageHeaderToDynamicSamplingContext;
    nZ0.dynamicSamplingContextToSentryBaggageHeader = nWA.dynamicSamplingContextToSentryBaggageHeader;
    nZ0.getNumberOfUrlSegments = _71.getNumberOfUrlSegments;
    nZ0.getSanitizedUrlString = _71.getSanitizedUrlString;
    nZ0.parseUrl = _71.parseUrl;
    nZ0.stripUrlQueryAndFragment = _71.stripUrlQueryAndFragment;
    nZ0.addOrUpdateIntegration = BB3.addOrUpdateIntegration;
    nZ0.makeFifoCache = GB3.makeFifoCache;
    nZ0.eventFromMessage = k71.eventFromMessage;
    nZ0.eventFromUnknownInput = k71.eventFromUnknownInput;
    nZ0.exceptionFromError = k71.exceptionFromError;
    nZ0.parseStackFrames = k71.parseStackFrames;
    nZ0.callFrameToStackFrame = Dl2.callFrameToStackFrame;
    nZ0.watchdogTimer = Dl2.watchdogTimer;
    nZ0.LRUMap = ZB3.LRUMap;
    nZ0._asyncNullishCoalesce = IB3._asyncNullishCoalesce;
    nZ0._asyncOptionalChain = YB3._asyncOptionalChain;
    nZ0._asyncOptionalChainDelete = JB3._asyncOptionalChainDelete;
    nZ0._nullishCoalesce = WB3._nullishCoalesce;
    nZ0._optionalChain = XB3._optionalChain;
    nZ0._optionalChainDelete = FB3._optionalChainDelete;
    nZ0.addConsoleInstrumentationHandler = VB3.addConsoleInstrumentationHandler;
    nZ0.addClickKeypressInstrumentationHandler = KB3.addClickKeypressInstrumentationHandler;
    nZ0.SENTRY_XHR_DATA_KEY = Hl2.SENTRY_XHR_DATA_KEY;
    nZ0.addXhrInstrumentationHandler = Hl2.addXhrInstrumentationHandler;
    nZ0.addFetchInstrumentationHandler = DB3.addFetchInstrumentationHandler;
    nZ0.addHistoryInstrumentationHandler = HB3.addHistoryInstrumentationHandler;
    nZ0.addGlobalErrorInstrumentationHandler = CB3.addGlobalErrorInstrumentationHandler;
    nZ0.addGlobalUnhandledRejectionInstrumentationHandler = EB3.addGlobalUnhandledRejectionInstrumentationHandler;
    nZ0.resetInstrumentationHandlers = zB3.resetInstrumentationHandlers;
    nZ0.filenameIsInApp = UB3.filenameIsInApp;
    nZ0.escapeStringForRegex = $B3.escapeStringForRegex;
    nZ0.supportsHistory = wB3.supportsHistory
});
var AF = U((Cl2) => {
    Object.defineProperty(Cl2, "__esModule", {
        value: !0
    });
    var q43 = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
    Cl2.DEBUG_BUILD = q43
});
var aWA = U((El2) => {
    Object.defineProperty(El2, "__esModule", {
        value: !0
    });
    var L43 = "production";
    El2.DEFAULT_ENVIRONMENT = L43
});
var aTA = U((Ul2) => {
    Object.defineProperty(Ul2, "__esModule", {
        value: !0
    });
    var y71 = l0(),
        O43 = AF();

function zl2() {
        return y71.getGlobalSingleton("globalEventProcessors", () => [])
    }

function R43(A) {
        zl2().push(A)
    }

function aZ0(A, Q, B, G = 0) {
        return new y71.SyncPromise((Z, I) => {
            let Y = A[G];
            if (Q === null || typeof Y !== "function") Z(Q);
            else {
                let J = Y({
                    ...Q
                }, B);
                if (O43.DEBUG_BUILD && Y.id && J === null && y71.logger.log(`Event processor "${Y.id}" dropped event`), y71.isThenable(J)) J.then((W) => aZ0(A, W, B, G + 1).then(Z)).then(null, I);
                else aZ0(A, J, B, G + 1).then(Z).then(null, I)
            }
        })
    }
    Ul2.addGlobalEventProcessor = R43;
    Ul2.getGlobalEventProcessors = zl2;
    Ul2.notifyEventProcessors = aZ0
});
var sWA = U(($l2) => {
    Object.defineProperty($l2, "__esModule", {
        value: !0
    });
    var sTA = l0();

function S43(A) {
        let Q = sTA.timestampInSeconds(),
            B = {
                sid: sTA.uuid4(),
                init: !0,
                timestamp: Q,
                started: Q,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => k43(B)
            };
        if (A) sZ0(B, A);
        return B
    }

function sZ0(A, Q = {}) {
        if (Q.user) {
            if (!A.ipAddress && Q.user.ip_address) A.ipAddress = Q.user.ip_address;
            if (!A.did && !Q.did) A.did = Q.user.id || Q.user.email || Q.user.username
        }
        if (A.timestamp = Q.timestamp || sTA.timestampInSeconds(), Q.abnormal_mechanism) A.abnormal_mechanism = Q.abnormal_mechanism;
        if (Q.ignoreDuration) A.ignoreDuration = Q.ignoreDuration;
        if (Q.sid) A.sid = Q.sid.length === 32 ? Q.sid : sTA.uuid4();
        if (Q.init !== void 0) A.init = Q.init;
        if (!A.did && Q.did) A.did = `${Q.did}`;
        if (typeof Q.started === "number") A.started = Q.started;
        if (A.ignoreDuration) A.duration = void 0;
        else if (typeof Q.duration === "number") A.duration = Q.duration;
        else {
            let B = A.timestamp - A.started;
            A.duration = B >= 0 ? B : 0
        }
        if (Q.release) A.release = Q.release;
        if (Q.environment) A.environment = Q.environment;
        if (!A.ipAddress && Q.ipAddress) A.ipAddress = Q.ipAddress;
        if (!A.userAgent && Q.userAgent) A.userAgent = Q.userAgent;
        if (typeof Q.errors === "number") A.errors = Q.errors;
        if (Q.status) A.status = Q.status
    }

function _43(A, Q) {
        let B = {};
        if (Q) B = {
            status: Q
        };
        else if (A.status === "ok") B = {
            status: "exited"
        };
        sZ0(A, B)
    }

function k43(A) {
        return sTA.dropUndefinedKeys({
            sid: `${A.sid}`,
            init: A.init,
            started: new Date(A.started * 1000).toISOString(),
            timestamp: new Date(A.timestamp * 1000).toISOString(),
            status: A.status,
            errors: A.errors,
            did: typeof A.did === "number" || typeof A.did === "string" ? `${A.did}` : void 0,
            duration: A.duration,
            abnormal_mechanism: A.abnormal_mechanism,
            attrs: {
                release: A.release,
                environment: A.environment,
                ip_address: A.ipAddress,
                user_agent: A.userAgent
            }
        })
    }
    $l2.closeSession = _43;
    $l2.makeSession = S43;
    $l2.updateSession = sZ0
});
var C$ = U((Ml2) => {
    Object.defineProperty(Ml2, "__esModule", {
        value: !0
    });
    var rZ0 = l0(),
        b43 = 0,
        ql2 = 1;

function f43(A) {
        let {
            spanId: Q,
            traceId: B
        } = A.spanContext(), {
            data: G,
            op: Z,
            parent_span_id: I,
            status: Y,
            tags: J,
            origin: W
        } = Nl2(A);
        return rZ0.dropUndefinedKeys({
            data: G,
            op: Z,
            parent_span_id: I,
            span_id: Q,
            status: Y,
            tags: J,
            trace_id: B,
            origin: W
        })
    }

function h43(A) {
        let {
            traceId: Q,
            spanId: B
        } = A.spanContext(), G = Ll2(A);
        return rZ0.generateSentryTraceHeader(Q, B, G)
    }

function g43(A) {
        if (typeof A === "number") return wl2(A);
        if (Array.isArray(A)) return A[0] + A[1] / 1e9;
        if (A instanceof Date) return wl2(A.getTime());
        return rZ0.timestampInSeconds()
    }

function wl2(A) {
        return A > 9999999999 ? A / 1000 : A
    }

function Nl2(A) {
        if (u43(A)) return A.getSpanJSON();
        if (typeof A.toJSON === "function") return A.toJSON();
        return {}
    }

function u43(A) {
        return typeof A.getSpanJSON === "function"
    }

function Ll2(A) {
        let {
            traceFlags: Q
        } = A.spanContext();
        return Boolean(Q & ql2)
    }
    Ml2.TRACE_FLAG_NONE = b43;
    Ml2.TRACE_FLAG_SAMPLED = ql2;
    Ml2.spanIsSampled = Ll2;
    Ml2.spanTimeInputToSeconds = g43;
    Ml2.spanToJSON = Nl2;
    Ml2.spanToTraceContext = f43;
    Ml2.spanToTraceHeader = h43
});
var x71 = U((jl2) => {
    Object.defineProperty(jl2, "__esModule", {
        value: !0
    });
    var hq = l0(),
        a43 = aWA(),
        Ol2 = aTA(),
        tZ0 = b71(),
        oZ0 = v71(),
        s43 = C$();

function r43(A, Q, B, G, Z, I) {
        let {
            normalizeDepth: Y = 3,
            normalizeMaxBreadth: J = 1000
        } = A, W = {
            ...Q,
            event_id: Q.event_id || B.event_id || hq.uuid4(),
            timestamp: Q.timestamp || hq.dateTimestampInSeconds()
        }, X = B.integrations || A.integrations.map((E) => E.name);
        if (o43(W, A), t43(W, X), Q.type === void 0) Tl2(W, A.stackParser);
        let F = A83(G, B.captureContext);
        if (B.mechanism) hq.addExceptionMechanism(W, B.mechanism);
        let V = Z && Z.getEventProcessors ? Z.getEventProcessors() : [],
            K = tZ0.getGlobalScope().getScopeData();
        if (I) {
            let E = I.getScopeData();
            oZ0.mergeScopeData(K, E)
        }
        if (F) {
            let E = F.getScopeData();
            oZ0.mergeScopeData(K, E)
        }
        let D = [...B.attachments || [], ...K.attachments];
        if (D.length) B.attachments = D;
        oZ0.applyScopeDataToEvent(W, K);
        let H = [...V, ...Ol2.getGlobalEventProcessors(), ...K.eventProcessors];
        return Ol2.notifyEventProcessors(H, W, B).then((E) => {
            if (E) Pl2(E);
            if (typeof Y === "number" && Y > 0) return e43(E, Y, J);
            return E
        })
    }

function o43(A, Q) {
        let {
            environment: B,
            release: G,
            dist: Z,
            maxValueLength: I = 250
        } = Q;
        if (!("environment" in A)) A.environment = "environment" in Q ? B : a43.DEFAULT_ENVIRONMENT;
        if (A.release === void 0 && G !== void 0) A.release = G;
        if (A.dist === void 0 && Z !== void 0) A.dist = Z;
        if (A.message) A.message = hq.truncate(A.message, I);
        let Y = A.exception && A.exception.values && A.exception.values[0];
        if (Y && Y.value) Y.value = hq.truncate(Y.value, I);
        let J = A.request;
        if (J && J.url) J.url = hq.truncate(J.url, I)
    }
    var Rl2 = new WeakMap;

function Tl2(A, Q) {
        let B = hq.GLOBAL_OBJ._sentryDebugIds;
        if (!B) return;
        let G, Z = Rl2.get(Q);
        if (Z) G = Z;
        else G = new Map, Rl2.set(Q, G);
        let I = Object.keys(B).reduce((Y, J) => {
            let W, X = G.get(J);
            if (X) W = X;
            else W = Q(J), G.set(J, W);
            for (let F = W.length - 1; F >= 0; F--) {
                let V = W[F];
                if (V.filename) {
                    Y[V.filename] = B[J];
                    break
                }
            }
            return Y
        }, {});