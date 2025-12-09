/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_001.js
 * 处理时间: 2025-12-09T03:37:23.939Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * _N         (  6x) = toKey() - Convert to key
 * j7         (  5x) = isArray() - Check if array
 * dBA        (  4x) = baseGet() - Base property get
 * bBA        (  4x) = baseIsEqual() - Base equality check
 * Pj         (  4x) = castPath() - Cast to path array
 * uBA        (  3x) = toString() - Convert to string
 * gBA        (  3x) = arrayMap() - Array map
 * jj         (  3x) = baseIteratee() - Base iteratee
 * HV         (  2x) = Symbol - Symbol reference
 * TY         (  1x) = isObject() - Check if object
 * px         (  1x) = isArguments() - Check if arguments
 * SN         (  1x) = keys() - Get object keys
 * xu         (  1x) = isIndex() - Check if valid index
 * server_tool_use (  1x) = SERVER_TOOL_USE type
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 1/61
 * Lines: 1499 - 2998 (1500 lines)
 * Original file: cli.js
 */

var HM9 = 1,
    WC0 = "[object Arguments]",
    XC0 = "[object Array]",
    h_A = "[object Object]",
    CM9, FC0, VC0;
var KC0 = L(() => {
    rFA();
    SW1();
    yH0();
    eH0();
    BVA();
    gC();
    tFA();
    __A();
    CM9 = Object.prototype, FC0 = CM9.hasOwnProperty;
    VC0 = EM9
});

function DC0(A, Q, B, G, Z) {
    if (A === Q) return !0;
    if (A == null || Q == null || !zF(A) && !zF(Q)) return A !== A && Q !== Q;
    return VC0(A, Q, B, G, DC0, Z)
}
var bBA;
var g_A = L(() => {
    KC0();
    Mj();
    bBA = DC0
});

function $M9(A, Q, B, G) {
    var Z = B.length,
        I = Z,
        Y = !G;
    if (A == null) return !I;
    A = Object(A);
    while (Z--) {
        var J = B[Z];
        if (Y && J[2] ? J[1] !== A[J[0]] : !(J[0] in A)) return !1
    }
    while (++Z < I) {
        J = B[Z];
        var W = J[0],
            X = A[W],
            F = J[1];
        if (Y && J[2]) {
            if (X === void 0 && !(W in A)) return !1
        } else {
            var V = new Lj;
            if (G) var K = G(X, F, W, A, Q, V);
            if (!(K === void 0 ? bBA(F, X, zM9 | UM9, G, V) : K)) return !1
        }
    }
    return !0
}
var zM9 = 1,
    UM9 = 2,
    HC0;
var CC0 = L(() => {
    rFA();
    g_A();
    HC0 = $M9
});

function wM9(A) {
    return A === A && !TY(A)
}
var u_A;
var dW1 = L(() => {
    jN();
    u_A = wM9
});

function qM9(A) {
    var Q = SN(A),
        B = Q.length;
    while (B--) {
        var G = Q[B],
            Z = A[G];
        Q[B] = [G, Z, u_A(Z)]
    }
    return Q
}
var EC0;
var zC0 = L(() => {
    dW1();
    Hs();
    EC0 = qM9
});

function NM9(A, Q) {
    return function(B) {
        if (B == null) return !1;
        return B[A] === Q && (Q !== void 0 || (A in Object(B)))
    }
}
var m_A;
var cW1 = L(() => {
    m_A = NM9
});

function LM9(A) {
    var Q = EC0(A);
    if (Q.length == 1 && Q[0][2]) return m_A(Q[0][0], Q[0][1]);
    return function(B) {
        return B === A || HC0(B, A, Q)
    }
}
var UC0;
var $C0 = L(() => {
    CC0();
    zC0();
    cW1();
    UC0 = LM9
});

function OM9(A) {
    return typeof A == "symbol" || zF(A) && i$(A) == MM9
}
var MM9 = "[object Symbol]",
    fBA;
var d_A = L(() => {
    Vs();
    Mj();
    fBA = OM9
});

function PM9(A, Q) {
    if (j7(A)) return !1;
    var B = typeof A;
    if (B == "number" || B == "symbol" || B == "boolean" || A == null || fBA(A)) return !0;
    return TM9.test(A) || !RM9.test(A) || Q != null && A in Object(Q)
}
var RM9, TM9, hBA;
var c_A = L(() => {
    gC();
    d_A();
    RM9 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, TM9 = /^\w*$/;
    hBA = PM9
});

function SM9(A) {
    var Q = t1(A, function(G) {
            if (B.size === jM9) B.clear();
            return G
        }),
        B = Q.cache;
    return Q
}
var jM9 = 500,
    wC0;
var qC0 = L(() => {
    o2();
    wC0 = SM9
});
var _M9, kM9, yM9, NC0;
var LC0 = L(() => {
    qC0();
    _M9 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kM9 = /\\(\\)?/g, yM9 = wC0(function(A) {
        var Q = [];
        if (A.charCodeAt(0) === 46) Q.push("");
        return A.replace(_M9, function(B, G, Z, I) {
            Q.push(Z ? I.replace(kM9, "$1") : G || B)
        }), Q
    }), NC0 = yM9
});

function xM9(A, Q) {
    var B = -1,
        G = A == null ? 0 : A.length,
        Z = Array(G);
    while (++B < G) Z[B] = Q(A[B], B, A);
    return Z
}
var gBA;
var p_A = L(() => {
    gBA = xM9
});

function RC0(A) {
    if (typeof A == "string") return A;
    if (j7(A)) return gBA(A, RC0) + "";
    if (fBA(A)) return OC0 ? OC0.call(A) : "";
    var Q = A + "";
    return Q == "0" && 1 / A == -vM9 ? "-0" : Q
}
var vM9 = 1 / 0,
    MC0, OC0, TC0;
var PC0 = L(() => {
    Fs();
    p_A();
    gC();
    d_A();
    MC0 = HV ? HV.prototype : void 0, OC0 = MC0 ? MC0.toString : void 0;
    TC0 = RC0
});

function bM9(A) {
    return A == null ? "" : TC0(A)
}
var uBA;
var l_A = L(() => {
    PC0();
    uBA = bM9
});

function fM9(A, Q) {
    if (j7(A)) return A;
    return hBA(A, Q) ? [A] : NC0(uBA(A))
}
var Pj;
var mBA = L(() => {
    gC();
    c_A();
    LC0();
    l_A();
    Pj = fM9
});

function gM9(A) {
    if (typeof A == "string" || fBA(A)) return A;
    var Q = A + "";
    return Q == "0" && 1 / A == -hM9 ? "-0" : Q
}
var hM9 = 1 / 0,
    _N;
var Es = L(() => {
    d_A();
    _N = gM9
});

function uM9(A, Q) {
    Q = Pj(Q, A);
    var B = 0,
        G = Q.length;
    while (A != null && B < G) A = A[_N(Q[B++])];
    return B && B == G ? A : void 0
}
var dBA;
var i_A = L(() => {
    mBA();
    Es();
    dBA = uM9
});

function mM9(A, Q, B) {
    var G = A == null ? void 0 : dBA(A, Q);
    return G === void 0 ? B : G
}
var jC0;
var SC0 = L(() => {
    i_A();
    jC0 = mM9
});

function dM9(A, Q) {
    return A != null && Q in Object(A)
}
var _C0;
var kC0 = L(() => {
    _C0 = dM9
});

function cM9(A, Q, B) {
    Q = Pj(Q, A);
    var G = -1,
        Z = Q.length,
        I = !1;
    while (++G < Z) {
        var Y = _N(Q[G]);
        if (!(I = A != null && B(A, Y))) break;
        A = A[Y]
    }
    if (I || ++G != Z) return I;
    return Z = A == null ? 0 : A.length, !!Z && _BA(Z) && xu(Y, Z) && (j7(A) || px(A))
}
var yC0;
var xC0 = L(() => {
    mBA();
    oFA();
    gC();
    eFA();
    R_A();
    Es();
    yC0 = cM9
});

function pM9(A, Q) {
    return A != null && yC0(A, Q, _C0)
}
var vC0;
var bC0 = L(() => {
    kC0();
    xC0();
    vC0 = pM9
});

function nM9(A, Q) {
    if (hBA(A) && u_A(Q)) return m_A(_N(A), Q);
    return function(B) {
        var G = jC0(B, A);
        return G === void 0 && G === Q ? vC0(B, A) : bBA(Q, G, lM9 | iM9)
    }
}
var lM9 = 1,
    iM9 = 2,
    fC0;
var hC0 = L(() => {
    g_A();
    SC0();
    bC0();
    c_A();
    dW1();
    cW1();
    Es();
    fC0 = nM9
});

function aM9(A) {
    return A
}
var cBA;
var n_A = L(() => {
    cBA = aM9
});

function sM9(A) {
    return function(Q) {
        return Q == null ? void 0 : Q[A]
    }
}
var gC0;
var uC0 = L(() => {
    gC0 = sM9
});

function rM9(A) {
    return function(Q) {
        return dBA(Q, A)
    }
}
var mC0;
var dC0 = L(() => {
    i_A();
    mC0 = rM9
});

function oM9(A) {
    return hBA(A) ? gC0(_N(A)) : mC0(A)
}
var cC0;
var pC0 = L(() => {
    uC0();
    dC0();
    c_A();
    Es();
    cC0 = oM9
});

function tM9(A) {
    if (typeof A == "function") return A;
    if (A == null) return cBA;
    if (typeof A == "object") return j7(A) ? fC0(A[0], A[1]) : UC0(A);
    return cC0(A)
}
var jj;
var pBA = L(() => {
    $C0();
    hC0();
    n_A();
    gC();
    pC0();
    jj = tM9
});

function eM9(A, Q) {
    var B, G = -1,
        Z = A.length;
    while (++G < Z) {
        var I = Q(A[G]);
        if (I !== void 0) B = B === void 0 ? I : B + I
    }
    return B
}
var lC0;
var iC0 = L(() => {
    lC0 = eM9
});

function AO9(A, Q) {
    return A && A.length ? lC0(A, jj(Q, 2)) : 0
}
var lBA;
var nC0 = L(() => {
    pBA();
    iC0();
    lBA = AO9
});
var a_A, s_A;
var r_A = L(() => {
    a_A = {
        name: "BASH_MAX_OUTPUT_LENGTH",
        default: 30000,
        validate: (A) => {
            if (!A) return {
                effective: 30000,
                status: "valid"
            };
            let G = parseInt(A, 10);
            if (isNaN(G) || G <= 0) return {
                effective: 30000,
                status: "invalid",
                message: `Invalid value "${A}" (using default: 30000)`
            };
            if (G > 150000) return {
                effective: 150000,
                status: "capped",
                message: `Capped from ${G} to 150000`
            };
            return {
                effective: G,
                status: "valid"
            }
        }
    }, s_A = {
        name: "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
        default: 32000,
        validate: (A) => {
            if (!A) return {
                effective: 32000,
                status: "valid"
            };
            let G = parseInt(A, 10);
            if (isNaN(G) || G <= 0) return {
                effective: 32000,
                status: "invalid",
                message: `Invalid value "${A}" (using default: 32000)`
            };
            if (G > 64000) return {
                effective: 64000,
                status: "capped",
                message: `Capped from ${G} to 64000`
            };
            return {
                effective: G,
                status: "valid"
            }
        }
    }
});

function bu(A) {
    if (A.includes("[1m]")) return 1e6;
    return 200000
}
var o_A = 20000;
import {
    cwd as QO9
} from "process";
import {
    realpathSync as BO9
} from "fs";
import {
    randomUUID as aC0
} from "crypto";

function GO9() {
    let A = "";
    if (typeof process < "u" && typeof process.cwd === "function") A = BO9(QO9());
    return {
        originalCwd: A,
        totalCostUSD: 0,
        totalAPIDuration: 0,
        totalAPIDurationWithoutRetries: 0,
        totalToolDuration: 0,
        startTime: Date.now(),
        lastInteractionTime: Date.now(),
        totalLinesAdded: 0,
        totalLinesRemoved: 0,
        hasUnknownModelCost: !1,
        cwd: A,
        modelUsage: {},
        mainLoopModelOverride: void 0,
        initialMainLoopModel: null,
        modelStrings: null,
        isInteractive: !1,
        clientType: "cli",
        sessionIngressToken: void 0,
        oauthTokenFromFd: void 0,
        apiKeyFromFd: void 0,
        flagSettingsPath: void 0,
        allowedSettingSources: ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"],
        meter: null,
        sessionCounter: null,
        locCounter: null,
        prCounter: null,
        commitCounter: null,
        costCounter: null,
        tokenCounter: null,
        codeEditToolDecisionCounter: null,
        activeTimeCounter: null,
        sessionId: aC0(),
        loggerProvider: null,
        eventLogger: null,
        meterProvider: null,
        tracerProvider: null,
        agentColorMap: new Map,
        agentColorIndex: 0,
        envVarValidators: [a_A, s_A],
        lastAPIRequest: null,
        inMemoryErrorLog: [],
        inlinePlugins: [],
        sessionBypassPermissionsMode: !1,
        hasExitedPlanMode: !1,
        initJsonSchema: null,
        registeredHooks: null,
        planSlugCache: new Map
    }
}

function G0() {
    return JQ.sessionId
}

function sC0() {
    return JQ.sessionId = aC0(), JQ.sessionId
}

function FR(A) {
    if (JQ.sessionId = A, process.env.CLAUDE_CODE_SESSION_ID !== void 0) process.env.CLAUDE_CODE_SESSION_ID = A
}

function pQ() {
    return JQ.originalCwd
}

function rC0(A) {
    JQ.originalCwd = A
}

function iBA() {
    return JQ.cwd
}

function oC0(A) {
    JQ.cwd = A
}

function tC0(A, Q) {
    JQ.totalAPIDuration += A, JQ.totalAPIDurationWithoutRetries += Q
}

function eC0(A, Q, B) {
    JQ.totalCostUSD += A;
    let G = JQ.modelUsage[B] ?? {
        inputTokens: 0,
        outputTokens: 0,
        cacheReadInputTokens: 0,
        cacheCreationInputTokens: 0,
        webSearchRequests: 0,
        costUSD: 0,
        contextWindow: 0
    };
    G.inputTokens += Q.input_tokens, G.outputTokens += Q.output_tokens, G.cacheReadInputTokens += Q.cache_read_input_tokens ?? 0, G.cacheCreationInputTokens += Q.cache_creation_input_tokens ?? 0, G.webSearchRequests += Q.server_tool_use?.web_search_requests ?? 0, G.costUSD += A, G.contextWindow = bu(B), JQ.modelUsage[B] = G
}

function yK() {
    return JQ.totalCostUSD
}

function kN() {
    return JQ.totalAPIDuration
}

function GVA() {
    return Date.now() - JQ.startTime
}

function AE0() {
    return JQ.totalToolDuration
}

function pW1(A) {
    JQ.totalToolDuration += A
}

function ZVA() {
    JQ.lastInteractionTime = Date.now()
}

function lW1(A, Q) {
    JQ.totalLinesAdded += A, JQ.totalLinesRemoved += Q
}

function nBA() {
    return JQ.totalLinesAdded
}

function aBA() {
    return JQ.totalLinesRemoved
}

function QE0() {
    return lBA(Object.values(JQ.modelUsage), "inputTokens")
}

function BE0() {
    return lBA(Object.values(JQ.modelUsage), "outputTokens")
}

function GE0() {
    return lBA(Object.values(JQ.modelUsage), "cacheReadInputTokens")
}

function ZE0() {
    return lBA(Object.values(JQ.modelUsage), "cacheCreationInputTokens")
}

function IE0() {
    return lBA(Object.values(JQ.modelUsage), "webSearchRequests")
}

function iW1() {
    JQ.hasUnknownModelCost = !0
}

function YE0() {
    return JQ.hasUnknownModelCost
}

function t_A() {
    return JQ.lastInteractionTime
}

function fu() {
    return JQ.modelUsage
}

function JE0() {
    return JQ.mainLoopModelOverride
}

function e_A() {
    return JQ.initialMainLoopModel
}

function zs(A) {
    JQ.mainLoopModelOverride = A
}

function WE0(A) {
    JQ.initialMainLoopModel = A
}

function nW1() {
    JQ.totalCostUSD = 0, JQ.totalAPIDuration = 0, JQ.totalAPIDurationWithoutRetries = 0, JQ.totalToolDuration = 0, JQ.startTime = Date.now(), JQ.totalLinesAdded = 0, JQ.totalLinesRemoved = 0, JQ.hasUnknownModelCost = !1, JQ.modelUsage = {}
}

function AkA() {
    return JQ.modelStrings
}

function aW1(A) {
    JQ.modelStrings = A
}

function XE0(A, Q) {
    JQ.meter = A, JQ.sessionCounter = Q("claude_code.session.count", {
        description: "Count of CLI sessions started"
    }), JQ.locCounter = Q("claude_code.lines_of_code.count", {
        description: "Count of lines of code modified, with the 'type' attribute indicating whether lines were added or removed"
    }), JQ.prCounter = Q("claude_code.pull_request.count", {
        description: "Number of pull requests created"
    }), JQ.commitCounter = Q("claude_code.commit.count", {
        description: "Number of git commits created"
    }), JQ.costCounter = Q("claude_code.cost.usage", {
        description: "Cost of the Claude Code session",
        unit: "USD"
    }), JQ.tokenCounter = Q("claude_code.token.usage", {
        description: "Number of tokens used",
        unit: "tokens"
    }), JQ.codeEditToolDecisionCounter = Q("claude_code.code_edit_tool.decision", {
        description: "Count of code editing tool permission decisions (accept/reject) for Edit, Write, and NotebookEdit tools"
    }), JQ.activeTimeCounter = Q("claude_code.active_time.total", {
        description: "Total active time in seconds",
        unit: "s"
    })
}

function FE0() {
    return JQ.sessionCounter
}

function sW1() {
    return JQ.locCounter
}

function rW1() {
    return JQ.prCounter
}

function VE0() {
    return JQ.commitCounter
}

function KE0() {
    return JQ.costCounter
}

function IVA() {
    return JQ.tokenCounter
}

function YVA() {
    return JQ.codeEditToolDecisionCounter
}

function oW1() {
    return JQ.activeTimeCounter
}

function tW1() {
    return JQ.loggerProvider
}

function DE0(A) {
    JQ.loggerProvider = A
}

function HE0() {
    return JQ.eventLogger
}

function CE0(A) {
    JQ.eventLogger = A
}

function EE0() {
    return JQ.meterProvider
}

function zE0(A) {
    JQ.meterProvider = A
}

function eW1() {
    return JQ.tracerProvider
}

function UE0(A) {
    JQ.tracerProvider = A
}

function H5() {
    return !JQ.isInteractive
}

function QkA() {
    return JQ.isInteractive
}

function $E0(A) {
    JQ.isInteractive = A
}

function BkA() {
    return JQ.clientType
}

function wE0(A) {
    JQ.clientType = A
}

function AX1() {
    return JQ.agentColorMap
}

function QX1() {
    return JQ.flagSettingsPath
}

function qE0(A) {
    JQ.flagSettingsPath = A
}

function NE0() {
    return JQ.sessionIngressToken
}

function sBA(A) {
    JQ.sessionIngressToken = A
}

function LE0() {
    return JQ.oauthTokenFromFd
}

function rBA(A) {
    JQ.oauthTokenFromFd = A
}

function ME0() {
    return JQ.apiKeyFromFd
}

function oBA(A) {
    JQ.apiKeyFromFd = A
}

function OE0() {
    return JQ.envVarValidators
}

function RE0(A) {
    JQ.lastAPIRequest = A
}

function GkA() {
    return JQ.lastAPIRequest
}

function TE0() {
    return [...JQ.inMemoryErrorLog]
}

function PE0(A) {
    if (JQ.inMemoryErrorLog.length >= 100) JQ.inMemoryErrorLog.shift();
    JQ.inMemoryErrorLog.push(A)
}

function jE0() {
    return JQ.allowedSettingSources
}

function SE0(A) {
    JQ.allowedSettingSources = A
}

function _E0() {
    return H5() && JQ.clientType !== "claude-vscode"
}

function kE0(A) {
    JQ.inlinePlugins = A
}

function yE0() {
    return JQ.inlinePlugins
}

function xE0(A) {
    JQ.sessionBypassPermissionsMode = A
}

function vE0() {
    return JQ.hasExitedPlanMode
}

function hu(A) {
    JQ.hasExitedPlanMode = A
}

function bE0(A) {
    JQ.initJsonSchema = A
}

function BX1() {
    return JQ.initJsonSchema
}

function ZkA(A) {
    JQ.registeredHooks = A
}

function IkA() {
    return JQ.registeredHooks
}

function JVA() {
    return JQ.planSlugCache
}
var JQ;
var S0 = L(() => {
    nC0();
    r_A();
    JQ = GO9()
});

function fE0({
    writeFn: A,
    flushIntervalMs: Q = 1000,
    maxBufferSize: B = 100,
    immediateMode: G = !1
}) {
    let Z = [],
        I = null;

    function Y() {
        if (I) clearTimeout(I), I = null
    }

    function J() {
        if (Z.length === 0) return;
        A(Z.join("")), Z = [], Y()
    }

    function W() {
        if (!I) I = setTimeout(J, Q)
    }
    return {
        write(X) {
            if (G) {
                A(X);
                return
            }
            if (Z.push(X), W(), Z.length >= B) J()
        },
        flush: J,
        dispose() {
            J()
        }
    }
}

function wG(A) {
    return GX1.add(A), () => GX1.delete(A)
}
async function hE0() {
    await Promise.all(Array.from(GX1).map((A) => A()))
}
var GX1;
var XH = L(() => {
    GX1 = new Set
});
import {
    dirname as ZX1,
    join as gE0
} from "path";

function IO9(A) {
    if (typeof process > "u" || typeof process.versions > "u" || typeof process.versions.node > "u") return !1;
    let Q = ZO9();
    return XH0(A, Q)
}

function mE0(A) {
    uE0 = A
}

function YO9() {
    if (!YkA) YkA = fE0({
        writeFn: (A) => {
            let Q = WVA();
            if (!OA().existsSync(ZX1(Q))) OA().mkdirSync(ZX1(Q));
            OA().appendFileSync(Q, A), JO9()
        },
        flushIntervalMs: 1000,
        maxBufferSize: 100,
        immediateMode: tBA()
    }), wG(async () => YkA?.dispose());
    return YkA
}

function g(A, {
    level: Q
} = {
    level: "debug"
}) {
    if (!IO9(A)) return;
    if (uE0 && A.includes(`
`)) A = JSON.stringify(A);
    let G = `${new Date().toISOString()} [${Q.toUpperCase()}] ${A.trim()}
`;
    if (Sj()) {
        qj(G);
        return
    }
    YO9().write(G)
}

function WVA() {
    return process.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? gE0(PQ(), "debug", `${G0()}.txt`)
}

function yN(A, Q) {
    return
}
var tBA, ZO9, Sj, uE0 = !1,
    YkA = null,
    JO9;
var D0 = L(() => {
    o2();
    FH0();
    o0();
    hQ();
    S0();
    XH();
    tBA = t1(() => {
        return V0(process.env.DEBUG) || V0(process.env.DEBUG_SDK) || process.argv.includes("--debug") || process.argv.includes("-d") || Sj() || process.argv.some((A) => A.startsWith("--debug="))
    }), ZO9 = t1(() => {
        let A = process.argv.find((B) => B.startsWith("--debug="));
        if (!A) return null;
        let Q = A.substring(8);
        return WH0(Q)
    }), Sj = t1(() => {
        return process.argv.includes("--debug-to-stderr") || process.argv.includes("-d2e")
    });
    JO9 = t1(() => {
        try {
            let A = WVA(),
                Q = ZX1(A),
                B = gE0(Q, "latest");
            if (!OA().existsSync(Q)) OA().mkdirSync(Q);
            if (OA().existsSync(B)) try {
                OA().unlinkSync(B)
            } catch {}
            OA().symlinkSync(A, B)
        } catch {}
    })
});
var VA = U((LO9) => {
    var XVA = Symbol.for("react.element"),
        WO9 = Symbol.for("react.portal"),
        XO9 = Symbol.for("react.fragment"),
        FO9 = Symbol.for("react.strict_mode"),
        VO9 = Symbol.for("react.profiler"),
        KO9 = Symbol.for("react.provider"),
        DO9 = Symbol.for("react.context"),
        HO9 = Symbol.for("react.forward_ref"),
        CO9 = Symbol.for("react.suspense"),
        EO9 = Symbol.for("react.memo"),
        zO9 = Symbol.for("react.lazy"),
        dE0 = Symbol.iterator;

    function UO9(A) {
        if (A === null || typeof A !== "object") return null;
        return A = dE0 && A[dE0] || A["@@iterator"], typeof A === "function" ? A : null
    }
    var lE0 = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        iE0 = Object.assign,
        nE0 = {};

    function eBA(A, Q, B) {
        this.props = A, this.context = Q, this.refs = nE0, this.updater = B || lE0
    }
    eBA.prototype.isReactComponent = {};
    eBA.prototype.setState = function(A, Q) {
        if (typeof A !== "object" && typeof A !== "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, A, Q, "setState")
    };
    eBA.prototype.forceUpdate = function(A) {
        this.updater.enqueueForceUpdate(this, A, "forceUpdate")
    };

    function aE0() {}
    aE0.prototype = eBA.prototype;

    function YX1(A, Q, B) {
        this.props = A, this.context = Q, this.refs = nE0, this.updater = B || lE0
    }
    var JX1 = YX1.prototype = new aE0;
    JX1.constructor = YX1;
    iE0(JX1, eBA.prototype);
    JX1.isPureReactComponent = !0;
    var cE0 = Array.isArray,
        sE0 = Object.prototype.hasOwnProperty,
        WX1 = {
            current: null
        },
        rE0 = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function oE0(A, Q, B) {
        var G, Z = {},
            I = null,
            Y = null;
        if (Q != null)
            for (G in Q.ref !== void 0 && (Y = Q.ref), Q.key !== void 0 && (I = "" + Q.key), Q) sE0.call(Q, G) && !rE0.hasOwnProperty(G) && (Z[G] = Q[G]);
        var J = arguments.length - 2;
        if (J === 1) Z.children = B;
        else if (1 < J) {
            for (var W = Array(J), X = 0; X < J; X++) W[X] = arguments[X + 2];
            Z.children = W
        }
        if (A && A.defaultProps)
            for (G in J = A.defaultProps, J) Z[G] === void 0 && (Z[G] = J[G]);
        return {
            $$typeof: XVA,
            type: A,
            key: I,
            ref: Y,
            props: Z,
            _owner: WX1.current
        }
    }

    function $O9(A, Q) {
        return {
            $$typeof: XVA,
            type: A.type,
            key: Q,
            ref: A.ref,
            props: A.props,
            _owner: A._owner
        }
    }

    function XX1(A) {
        return typeof A === "object" && A !== null && A.$$typeof === XVA
    }

    function wO9(A) {
        var Q = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + A.replace(/[=:]/g, function(B) {
            return Q[B]
        })
    }
    var pE0 = /\/+/g;

    function IX1(A, Q) {
        return typeof A === "object" && A !== null && A.key != null ? wO9("" + A.key) : Q.toString(36)
    }

    function WkA(A, Q, B, G, Z) {
        var I = typeof A;
        if (I === "undefined" || I === "boolean") A = null;
        var Y = !1;
        if (A === null) Y = !0;
        else switch (I) {
            case "string":
            case "number":
                Y = !0;
                break;
            case "object":
                switch (A.$$typeof) {
                    case XVA:
                    case WO9:
                        Y = !0
                }
        }
        if (Y) return Y = A, Z = Z(Y), A = G === "" ? "." + IX1(Y, 0) : G, cE0(Z) ? (B = "", A != null && (B = A.replace(pE0, "$&/") + "/"), WkA(Z, Q, B, "", function(X) {
            return X
        })) : Z != null && (XX1(Z) && (Z = $O9(Z, B + (!Z.key || Y && Y.key === Z.key ? "" : ("" + Z.key).replace(pE0, "$&/") + "/") + A)), Q.push(Z)), 1;
        if (Y = 0, G = G === "" ? "." : G + ":", cE0(A))
            for (var J = 0; J < A.length; J++) {
                I = A[J];
                var W = G + IX1(I, J);
                Y += WkA(I, Q, B, W, Z)
            } else if (W = UO9(A), typeof W === "function")
                for (A = W.call(A), J = 0; !(I = A.next()).done;) I = I.value, W = G + IX1(I, J++), Y += WkA(I, Q, B, W, Z);
            else if (I === "object") throw Q = String(A), Error("Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead.");
        return Y
    }

    function JkA(A, Q, B) {
        if (A == null) return A;
        var G = [],
            Z = 0;
        return WkA(A, G, "", "", function(I) {
            return Q.call(B, I, Z++)
        }), G
    }

    function qO9(A) {
        if (A._status === -1) {
            var Q = A._result;
            Q = Q(), Q.then(function(B) {
                if (A._status === 0 || A._status === -1) A._status = 1, A._result = B
            }, function(B) {
                if (A._status === 0 || A._status === -1) A._status = 2, A._result = B
            }), A._status === -1 && (A._status = 0, A._result = Q)
        }
        if (A._status === 1) return A._result.default;
        throw A._result
    }
    var uC = {
            current: null
        },
        XkA = {
            transition: null
        },
        NO9 = {
            ReactCurrentDispatcher: uC,
            ReactCurrentBatchConfig: XkA,
            ReactCurrentOwner: WX1
        };

    function tE0() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    LO9.Children = {
        map: JkA,
        forEach: function(A, Q, B) {
            JkA(A, function() {
                Q.apply(this, arguments)
            }, B)
        },
        count: function(A) {
            var Q = 0;
            return JkA(A, function() {
                Q++
            }), Q
        },
        toArray: function(A) {
            return JkA(A, function(Q) {
                return Q
            }) || []
        },
        only: function(A) {
            if (!XX1(A)) throw Error("React.Children.only expected to receive a single React element child.");
            return A
        }
    };
    LO9.Component = eBA;
    LO9.Fragment = XO9;
    LO9.Profiler = VO9;
    LO9.PureComponent = YX1;
    LO9.StrictMode = FO9;
    LO9.Suspense = CO9;
    LO9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = NO9;
    LO9.act = tE0;
    LO9.cloneElement = function(A, Q, B) {
        if (A === null || A === void 0) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
        var G = iE0({}, A.props),
            Z = A.key,
            I = A.ref,
            Y = A._owner;
        if (Q != null) {
            if (Q.ref !== void 0 && (I = Q.ref, Y = WX1.current), Q.key !== void 0 && (Z = "" + Q.key), A.type && A.type.defaultProps) var J = A.type.defaultProps;
            for (W in Q) sE0.call(Q, W) && !rE0.hasOwnProperty(W) && (G[W] = Q[W] === void 0 && J !== void 0 ? J[W] : Q[W])
        }
        var W = arguments.length - 2;
        if (W === 1) G.children = B;
        else if (1 < W) {
            J = Array(W);
            for (var X = 0; X < W; X++) J[X] = arguments[X + 2];
            G.children = J
        }
        return {
            $$typeof: XVA,
            type: A.type,
            key: Z,
            ref: I,
            props: G,
            _owner: Y
        }
    };
    LO9.createContext = function(A) {
        return A = {
            $$typeof: DO9,
            _currentValue: A,
            _currentValue2: A,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, A.Provider = {
            $$typeof: KO9,
            _context: A
        }, A.Consumer = A
    };
    LO9.createElement = oE0;
    LO9.createFactory = function(A) {
        var Q = oE0.bind(null, A);
        return Q.type = A, Q
    };
    LO9.createRef = function() {
        return {
            current: null
        }
    };
    LO9.forwardRef = function(A) {
        return {
            $$typeof: HO9,
            render: A
        }
    };
    LO9.isValidElement = XX1;
    LO9.lazy = function(A) {
        return {
            $$typeof: zO9,
            _payload: {
                _status: -1,
                _result: A
            },
            _init: qO9
        }
    };
    LO9.memo = function(A, Q) {
        return {
            $$typeof: EO9,
            type: A,
            compare: Q === void 0 ? null : Q
        }
    };
    LO9.startTransition = function(A) {
        var Q = XkA.transition;
        XkA.transition = {};
        try {
            A()
        } finally {
            XkA.transition = Q
        }
    };
    LO9.unstable_act = tE0;
    LO9.useCallback = function(A, Q) {
        return uC.current.useCallback(A, Q)
    };
    LO9.useContext = function(A) {
        return uC.current.useContext(A)
    };
    LO9.useDebugValue = function() {};
    LO9.useDeferredValue = function(A) {
        return uC.current.useDeferredValue(A)
    };
    LO9.useEffect = function(A, Q) {
        return uC.current.useEffect(A, Q)
    };
    LO9.useId = function() {
        return uC.current.useId()
    };
    LO9.useImperativeHandle = function(A, Q, B) {
        return uC.current.useImperativeHandle(A, Q, B)
    };
    LO9.useInsertionEffect = function(A, Q) {
        return uC.current.useInsertionEffect(A, Q)
    };
    LO9.useLayoutEffect = function(A, Q) {
        return uC.current.useLayoutEffect(A, Q)
    };
    LO9.useMemo = function(A, Q) {
        return uC.current.useMemo(A, Q)
    };
    LO9.useReducer = function(A, Q, B) {
        return uC.current.useReducer(A, Q, B)
    };
    LO9.useRef = function(A) {
        return uC.current.useRef(A)
    };
    LO9.useState = function(A) {
        return uC.current.useState(A)
    };
    LO9.useSyncExternalStore = function(A, Q, B) {
        return uC.current.useSyncExternalStore(A, Q, B)
    };
    LO9.useTransition = function() {
        return uC.current.useTransition()
    };
    LO9.version = "18.3.1"
});

function FVA(A, Q) {
    return function() {
        return A.apply(Q, arguments)
    }
}

function JR9(A) {
    return A !== null && !VVA(A) && A.constructor !== null && !VVA(A.constructor) && n$(A.constructor.isBuffer) && A.constructor.isBuffer(A)
}

function WR9(A) {
    let Q;
    if (typeof ArrayBuffer < "u" && ArrayBuffer.isView) Q = ArrayBuffer.isView(A);
    else Q = A && A.buffer && Az0(A.buffer);
    return Q
}

function KVA(A, Q, {
    allOwnKeys: B = !1
} = {}) {
    if (A === null || typeof A > "u") return;
    let G, Z;
    if (typeof A !== "object") A = [A];
    if (A2A(A))
        for (G = 0, Z = A.length; G < Z; G++) Q.call(null, A[G], G, A);
    else {
        let I = B ? Object.getOwnPropertyNames(A) : Object.keys(A),
            Y = I.length,
            J;
        for (G = 0; G < Y; G++) J = I[G], Q.call(null, A[J], J, A)
    }
}

function Bz0(A, Q) {
    Q = Q.toLowerCase();
    let B = Object.keys(A),
        G = B.length,
        Z;
    while (G-- > 0)
        if (Z = B[G], Q === Z.toLowerCase()) return Z;
    return null
}

function FX1() {
    let {
        caseless: A
    } = Gz0(this) && this || {}, Q = {}, B = (G, Z) => {
        let I = A && Bz0(Q, Z) || Z;
        if (FkA(Q[I]) && FkA(G)) Q[I] = FX1(Q[I], G);
        else if (FkA(G)) Q[I] = FX1({}, G);
        else if (A2A(G)) Q[I] = G.slice();
        else Q[I] = G
    };
    for (let G = 0, Z = arguments.length; G < Z; G++) arguments[G] && KVA(arguments[G], B);
    return Q
}

function gR9(A) {
    return !!(A && n$(A.append) && A[Symbol.toStringTag] === "FormData" && A[Symbol.iterator])
}
var YR9, VX1, VkA, VR = (A) => {
        return A = A.toLowerCase(), (Q) => VkA(Q) === A
    },
    KkA = (A) => (Q) => typeof Q === A,
    A2A, VVA, Az0, XR9, n$, Qz0, DkA = (A) => A !== null && typeof A === "object",
    FR9 = (A) => A === !0 || A === !1,
    FkA = (A) => {
        if (VkA(A) !== "object") return !1;
        let Q = VX1(A);
        return (Q === null || Q === Object.prototype || Object.getPrototypeOf(Q) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A)
    },
    VR9, KR9, DR9, HR9, CR9 = (A) => DkA(A) && n$(A.pipe),
    ER9 = (A) => {
        let Q;
        return A && (typeof FormData === "function" && A instanceof FormData || n$(A.append) && ((Q = VkA(A)) === "formdata" || Q === "object" && n$(A.toString) && A.toString() === "[object FormData]"))
    },
    zR9, UR9, $R9, wR9, qR9, NR9 = (A) => A.trim ? A.trim() : A.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
    Us, Gz0 = (A) => !VVA(A) && A !== Us,
    LR9 = (A, Q, B, {
        allOwnKeys: G
    } = {}) => {
        return KVA(Q, (Z, I) => {
            if (B && n$(Z)) A[I] = FVA(Z, B);
            else A[I] = Z
        }, {
            allOwnKeys: G
        }), A
    },
    MR9 = (A) => {
        if (A.charCodeAt(0) === 65279) A = A.slice(1);
        return A
    },
    OR9 = (A, Q, B, G) => {
        A.prototype = Object.create(Q.prototype, G), A.prototype.constructor = A, Object.defineProperty(A, "super", {
            value: Q.prototype
        }), B && Object.assign(A.prototype, B)
    },
    RR9 = (A, Q, B, G) => {
        let Z, I, Y, J = {};
        if (Q = Q || {}, A == null) return Q;
        do {
            Z = Object.getOwnPropertyNames(A), I = Z.length;
            while (I-- > 0)
                if (Y = Z[I], (!G || G(Y, A, Q)) && !J[Y]) Q[Y] = A[Y], J[Y] = !0;
            A = B !== !1 && VX1(A)
        } while (A && (!B || B(A, Q)) && A !== Object.prototype);
        return Q
    },
    TR9 = (A, Q, B) => {
        if (A = String(A), B === void 0 || B > A.length) B = A.length;
        B -= Q.length;
        let G = A.indexOf(Q, B);
        return G !== -1 && G === B
    },
    PR9 = (A) => {
        if (!A) return null;
        if (A2A(A)) return A;
        let Q = A.length;
        if (!Qz0(Q)) return null;
        let B = Array(Q);
        while (Q-- > 0) B[Q] = A[Q];
        return B
    },
    jR9, SR9 = (A, Q) => {
        let G = (A && A[Symbol.iterator]).call(A),
            Z;
        while ((Z = G.next()) && !Z.done) {
            let I = Z.value;
            Q.call(A, I[0], I[1])
        }
    },
    _R9 = (A, Q) => {
        let B, G = [];
        while ((B = A.exec(Q)) !== null) G.push(B);