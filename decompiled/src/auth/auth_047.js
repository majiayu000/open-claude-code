/**
 * Claude Code Decompiled
 * Category: auth
 * File: 47/61
 * Lines: 249564 - 251063 (1500 lines)
 * Original file: cli.js
 */

                if (W === 1) return I.hasError ? Promise.reject(I.error) : Promise.resolve();
                if (I.hasError) throw I.error
            }
            return X()
        }, joB = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", BoB), A("__assign", GoB), A("__rest", ZoB), A("__decorate", IoB), A("__param", YoB), A("__esDecorate", JoB), A("__runInitializers", WoB), A("__propKey", XoB), A("__setFunctionName", FoB), A("__metadata", VoB), A("__awaiter", KoB), A("__generator", DoB), A("__exportStar", HoB), A("__createBinding", sA1), A("__values", aA1), A("__read", ea1), A("__spread", CoB), A("__spreadArrays", EoB), A("__spreadArray", zoB), A("__await", SZA), A("__asyncGenerator", UoB), A("__asyncDelegator", $oB), A("__asyncValues", woB), A("__makeTemplateObject", qoB), A("__importStar", NoB), A("__importDefault", LoB), A("__classPrivateFieldGet", MoB), A("__classPrivateFieldSet", OoB), A("__classPrivateFieldIn", RoB), A("__addDisposableResource", ToB), A("__disposeResources", PoB), A("__rewriteRelativeImportExtension", joB)
    })
});
var _oB, W7G, X7G, F7G, V7G, K7G, D7G, H7G, C7G, E7G, z7G, U7G, $7G, w7G, q7G, N7G, L7G, M7G, O7G, R7G, ke, As1, T7G, koB, P7G, j7G, S7G, _7G, k7G, y7G, x7G, v7G, b7G;
var yoB = L(() => {
    _oB = GA(SoB(), 1), {
        __extends: W7G,
        __assign: X7G,
        __rest: F7G,
        __decorate: V7G,
        __param: K7G,
        __esDecorate: D7G,
        __runInitializers: H7G,
        __propKey: C7G,
        __setFunctionName: E7G,
        __metadata: z7G,
        __awaiter: U7G,
        __generator: $7G,
        __exportStar: w7G,
        __createBinding: q7G,
        __values: N7G,
        __read: L7G,
        __spread: M7G,
        __spreadArrays: O7G,
        __spreadArray: R7G,
        __await: ke,
        __asyncGenerator: As1,
        __asyncDelegator: T7G,
        __asyncValues: koB,
        __makeTemplateObject: P7G,
        __importStar: j7G,
        __importDefault: S7G,
        __classPrivateFieldGet: _7G,
        __classPrivateFieldSet: k7G,
        __classPrivateFieldIn: y7G,
        __addDisposableResource: x7G,
        __disposeResources: v7G,
        __rewriteRelativeImportExtension: b7G
    } = _oB.default
});
import {
    Readable as Qs1
} from "stream";

function xoB() {
    return As1(this, arguments, function*() {
        let Q = this.getReader();
        try {
            while (!0) {
                let {
                    done: B,
                    value: G
                } = yield ke(Q.read());
                if (B) return yield ke(void 0);
                yield yield ke(G)
            }
        } finally {
            Q.releaseLock()
        }
    })
}

function kt6(A) {
    if (!A[Symbol.asyncIterator]) A[Symbol.asyncIterator] = xoB.bind(A);
    if (!A.values) A.values = xoB.bind(A)
}

function voB(A) {
    if (A instanceof ReadableStream) return kt6(A), Qs1.fromWeb(A);
    else return A
}

function yt6(A) {
    if (A instanceof Uint8Array) return Qs1.from(Buffer.from(A));
    else if (nA1(A)) return voB(A.stream());
    else return voB(A)
}
async function boB(A) {
    return function() {
        let Q = A.map((B) => typeof B === "function" ? B() : B).map(yt6);
        return Qs1.from(function() {
            return As1(this, arguments, function*() {
                var B, G, Z, I;
                for (let X of Q) try {
                    for (var Y = !0, J = (G = void 0, koB(X)), W; W = yield ke(J.next()), B = W.done, !B; Y = !0) I = W.value, Y = !1, yield yield ke(I)
                } catch (F) {
                    G = {
                        error: F
                    }
                } finally {
                    try {
                        if (!Y && !B && (Z = J.return)) yield ke(Z.call(J))
                    } finally {
                        if (G) throw G.error
                    }
                }
            })
        }())
    }
}
var foB = L(() => {
    yoB()
});

function xt6() {
    return `----AzSDKFormBoundary${zqA()}`
}

function vt6(A) {
    let Q = "";
    for (let [B, G] of A) Q += `${B}: ${G}\r
`;
    return Q
}

function bt6(A) {
    if (A instanceof Uint8Array) return A.byteLength;
    else if (nA1(A)) return A.size === -1 ? void 0 : A.size;
    else return
}

function ft6(A) {
    let Q = 0;
    for (let B of A) {
        let G = bt6(B);
        if (G === void 0) return;
        else Q += G
    }
    return Q
}
async function ht6(A, Q, B) {
    let G = [Jk(`--${B}`, "utf-8"), ...Q.flatMap((I) => [Jk(`\r
`, "utf-8"), Jk(vt6(I.headers), "utf-8"), Jk(`\r
`, "utf-8"), I.body, Jk(`\r
--${B}`, "utf-8")]), Jk(`--\r
\r
`, "utf-8")],
        Z = ft6(G);
    if (Z) A.headers.set("Content-Length", Z);
    A.body = await boB(G)
}

function mt6(A) {
    if (A.length > gt6) throw Error(`Multipart boundary "${A}" exceeds maximum length of 70 characters`);
    if (Array.from(A).some((Q) => !ut6.has(Q))) throw Error(`Multipart boundary "${A}" contains invalid characters`)
}

function Bs1() {
    return {
        name: oA1,
        async sendRequest(A, Q) {
            var B;
            if (!A.multipartBody) return Q(A);
            if (A.body) throw Error("multipartBody and regular body cannot be set at the same time");
            let G = A.multipartBody.boundary,
                Z = (B = A.headers.get("Content-Type")) !== null && B !== void 0 ? B : "multipart/mixed",
                I = Z.match(/^(multipart\/[^ ;]+)(?:; *boundary=(.+))?$/);
            if (!I) throw Error(`Got multipart request body, but content-type header was not multipart: ${Z}`);
            let [, Y, J] = I;
            if (J && G && J !== G) throw Error(`Multipart boundary was specified as ${J} in the header, but got ${G} in the request body`);
            if (G !== null && G !== void 0 || (G = J), G) mt6(G);
            else G = xt6();
            return A.headers.set("Content-Type", `${Y}; boundary=${G}`), await ht6(A, A.multipartBody.parts, G), A.multipartBody = void 0, Q(A)
        }
    }
}
var oA1 = "multipartPolicy",
    gt6 = 70,
    ut6;
var hoB = L(() => {
    wa1();
    foB();
    ut6 = new Set("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'()+,-./:=?")
});
var _ZA = L(() => {
    EqA();
    zrB();
    $rB();
    Ra1();
    TrB();
    HrB();
    CrB()
});

function MqA() {
    return Na1()
}
var Gs1 = L(() => {
    _ZA()
});
var Sf;
var tA1 = L(() => {
    Se();
    Sf = Jl("core-rest-pipeline")
});
var fT = L(() => {
    grB();
    ha1();
    lrB();
    PrB();
    hoB();
    QoB();
    _rB()
});

function goB(A = {}) {
    return Sa1(Object.assign({
        logger: Sf.info
    }, A))
}
var uoB = L(() => {
    tA1();
    fT()
});

function moB(A = {}) {
    return _a1(A)
}
var doB = L(() => {
    fT()
});
import * as kZA from "node:os";
import * as eA1 from "node:process";

function coB() {
    return "User-Agent"
}
async function poB(A) {
    if (eA1 && eA1.versions) {
        let Q = eA1.versions;
        if (Q.bun) A.set("Bun", Q.bun);
        else if (Q.deno) A.set("Deno", Q.deno);
        else if (Q.node) A.set("Node", Q.node)
    }
    A.set("OS", `(${kZA.arch()}-${kZA.type()}-${kZA.release()})`)
}
var loB = () => {};
var A11 = "1.21.0",
    ioB = 3;

function nt6(A) {
    let Q = [];
    for (let [B, G] of A) {
        let Z = G ? `${B}/${G}` : B;
        Q.push(Z)
    }
    return Q.join(" ")
}

function noB() {
    return coB()
}
async function Q11(A) {
    let Q = new Map;
    Q.set("core-rest-pipeline", A11), await poB(Q);
    let B = nt6(Q);
    return A ? `${A} ${B}` : B
}
var Zs1 = L(() => {
    loB()
});

function soB(A = {}) {
    let Q = Q11(A.userAgentPrefix);
    return {
        name: at6,
        async sendRequest(B, G) {
            if (!B.headers.has(aoB)) B.headers.set(aoB, await Q);
            return G(B)
        }
    }
}
var aoB, at6 = "userAgentPolicy";
var roB = L(() => {
    Zs1();
    aoB = noB()
});
var B11 = L(() => {
    xa1();
    La1();
    la1();
    $qA()
});
var yZA;
var ooB = L(() => {
    yZA = class yZA extends Error {
        constructor(A) {
            super(A);
            this.name = "AbortError"
        }
    }
});
var Is1 = L(() => {
    ooB()
});

function toB(A, Q) {
    let {
        cleanupBeforeAbort: B,
        abortSignal: G,
        abortErrorMsg: Z
    } = Q !== null && Q !== void 0 ? Q : {};
    return new Promise((I, Y) => {
        function J() {
            Y(new yZA(Z !== null && Z !== void 0 ? Z : "The operation was aborted."))
        }

        function W() {
            G === null || G === void 0 || G.removeEventListener("abort", X)
        }

        function X() {
            B === null || B === void 0 || B(), W(), J()
        }
        if (G === null || G === void 0 ? void 0 : G.aborted) return J();
        try {
            A((F) => {
                W(), I(F)
            }, (F) => {
                W(), Y(F)
            })
        } catch (F) {
            Y(F)
        }
        G === null || G === void 0 || G.addEventListener("abort", X)
    })
}
var eoB = L(() => {
    Is1()
});

function Ys1(A, Q) {
    let B, {
        abortSignal: G,
        abortErrorMsg: Z
    } = Q !== null && Q !== void 0 ? Q : {};
    return toB((I) => {
        B = setTimeout(I, A)
    }, {
        cleanupBeforeAbort: () => clearTimeout(B),
        abortSignal: G,
        abortErrorMsg: Z !== null && Z !== void 0 ? Z : ot6
    })
}
var ot6 = "The delay was aborted.";
var AtB = L(() => {
    eoB()
});

function xZA(A) {
    if (_e(A)) return A.message;
    else {
        let Q;
        try {
            if (typeof A === "object" && A) Q = JSON.stringify(A);
            else Q = String(A)
        } catch (B) {
            Q = "[unable to stringify input]"
        }
        return `Unknown error ${Q}`
    }
}
var QtB = L(() => {
    B11()
});

function BtB(A, Q) {
    return NqA(A, Q)
}

function G11(A) {
    return _e(A)
}
var Z11, OqA;
var Xl = L(() => {
    B11();
    AtB();
    QtB();
    Z11 = PZA, OqA = PZA
});

function Js1(A) {
    return typeof A[GtB] === "function"
}

function ZtB(A) {
    if (Js1(A)) return A[GtB]();
    else return A
}
var GtB;
var ItB = L(() => {
    GtB = Symbol("rawContent")
});

function YtB() {
    let A = Bs1();
    return {
        name: Ws1,
        sendRequest: async (Q, B) => {
            if (Q.multipartBody) {
                for (let G of Q.multipartBody.parts)
                    if (Js1(G.body)) G.body = ZtB(G.body)
            }
            return A.sendRequest(Q, B)
        }
    }
}
var Ws1;
var JtB = L(() => {
    fT();
    ItB();
    Ws1 = oA1
});

function WtB() {
    return ka1()
}
var XtB = L(() => {
    fT()
});

function FtB(A = {}) {
    return ua1(A)
}
var VtB = L(() => {
    fT()
});

function KtB() {
    return na1()
}
var DtB = L(() => {
    fT()
});

function HtB(A, Q) {
    return ra1(A, Q)
}
var CtB = L(() => {
    fT()
});

function EtB(A = "x-ms-client-request-id") {
    return {
        name: "setClientRequestIdPolicy",
        async sendRequest(Q, B) {
            if (!Q.headers.has(A)) Q.headers.set(A, Q.requestId);
            return B(Q)
        }
    }
}

function ztB(A) {
    return oa1(A)
}
var UtB = L(() => {
    fT()
});

function $tB(A) {
    return ta1(A)
}
var wtB = L(() => {
    fT()
});

function qtB(A = {}) {
    let Q = new RqA(A.parentContext);
    if (A.span) Q = Q.setValue(vZA.span, A.span);
    if (A.namespace) Q = Q.setValue(vZA.namespace, A.namespace);
    return Q
}
class RqA {
    constructor(A) {
        this._contextMap = A instanceof RqA ? new Map(A._contextMap) : new Map
    }
    setValue(A, Q) {
        let B = new RqA(this);
        return B._contextMap.set(A, Q), B
    }
    getValue(A) {
        return this._contextMap.get(A)
    }
    deleteValue(A) {
        let Q = new RqA(this);
        return Q._contextMap.delete(A), Q
    }
}
var vZA;
var Xs1 = L(() => {
    vZA = {
        span: Symbol.for("@azure/core-tracing span"),
        namespace: Symbol.for("@azure/core-tracing namespace")
    }
});
var MtB = U((NtB) => {
    Object.defineProperty(NtB, "__esModule", {
        value: !0
    });
    NtB.state = void 0;
    NtB.state = {
        instrumenterImplementation: void 0
    }
});
var OtB, I11;
var RtB = L(() => {
    OtB = GA(MtB(), 1), I11 = OtB.state
});

function tt6() {
    return {
        end: () => {},
        isRecording: () => !1,
        recordException: () => {},
        setAttribute: () => {},
        setStatus: () => {},
        addEvent: () => {}
    }
}

function et6() {
    return {
        createRequestHeaders: () => {
            return {}
        },
        parseTraceparentHeader: () => {
            return
        },
        startSpan: (A, Q) => {
            return {
                span: tt6(),
                tracingContext: qtB({
                    parentContext: Q.tracingContext
                })
            }
        },
        withContext(A, Q, ...B) {
            return Q(...B)
        }
    }
}

function TqA() {
    if (!I11.instrumenterImplementation) I11.instrumenterImplementation = et6();
    return I11.instrumenterImplementation
}
var TtB = L(() => {
    Xs1();
    RtB()
});

function PqA(A) {
    let {
        namespace: Q,
        packageName: B,
        packageVersion: G
    } = A;

    function Z(X, F, V) {
        var K;
        let D = TqA().startSpan(X, Object.assign(Object.assign({}, V), {
                packageName: B,
                packageVersion: G,
                tracingContext: (K = F === null || F === void 0 ? void 0 : F.tracingOptions) === null || K === void 0 ? void 0 : K.tracingContext
            })),
            H = D.tracingContext,
            C = D.span;
        if (!H.getValue(vZA.namespace)) H = H.setValue(vZA.namespace, Q);
        C.setAttribute("az.namespace", H.getValue(vZA.namespace));
        let E = Object.assign({}, F, {
            tracingOptions: Object.assign(Object.assign({}, F === null || F === void 0 ? void 0 : F.tracingOptions), {
                tracingContext: H
            })
        });
        return {
            span: C,
            updatedOptions: E
        }
    }
    async function I(X, F, V, K) {
        let {
            span: D,
            updatedOptions: H
        } = Z(X, F, K);
        try {
            let C = await Y(H.tracingOptions.tracingContext, () => Promise.resolve(V(H, D)));
            return D.setStatus({
                status: "success"
            }), C
        } catch (C) {
            throw D.setStatus({
                status: "error",
                error: C
            }), C
        } finally {
            D.end()
        }
    }

    function Y(X, F, ...V) {
        return TqA().withContext(X, F, ...V)
    }

    function J(X) {
        return TqA().parseTraceparentHeader(X)
    }

    function W(X) {
        return TqA().createRequestHeaders(X)
    }
    return {
        startSpan: Z,
        withSpan: I,
        withContext: Y,
        parseTraceparentHeader: J,
        createRequestHeaders: W
    }
}
var PtB = L(() => {
    TtB();
    Xs1()
});
var Fs1 = L(() => {
    PtB()
});

function jqA(A) {
    return Oa1(A)
}
var bZA;
var Y11 = L(() => {
    _ZA();
    bZA = RU
});

function jtB(A = {}) {
    let Q = Q11(A.userAgentPrefix),
        B = new Yk({
            additionalAllowedQueryParameters: A.additionalAllowedQueryParameters
        }),
        G = Qe6();
    return {
        name: Ae6,
        async sendRequest(Z, I) {
            var Y;
            if (!G) return I(Z);
            let J = await Q,
                W = {
                    "http.url": B.sanitizeUrl(Z.url),
                    "http.method": Z.method,
                    "http.user_agent": J,
                    requestId: Z.requestId
                };
            if (J) W["http.user_agent"] = J;
            let {
                span: X,
                tracingContext: F
            } = (Y = Be6(G, Z, W)) !== null && Y !== void 0 ? Y : {};
            if (!X || !F) return I(Z);
            try {
                let V = await G.withContext(F, I, Z);
                return Ze6(X, V), V
            } catch (V) {
                throw Ge6(X, V), V
            }
        }
    }
}

function Qe6() {
    try {
        return PqA({
            namespace: "",
            packageName: "@azure/core-rest-pipeline",
            packageVersion: A11
        })
    } catch (A) {
        Sf.warning(`Error when creating the TracingClient: ${xZA(A)}`);
        return
    }
}

function Be6(A, Q, B) {
    try {
        let {
            span: G,
            updatedOptions: Z
        } = A.startSpan(`HTTP ${Q.method}`, {
            tracingOptions: Q.tracingOptions
        }, {
            spanKind: "client",
            spanAttributes: B
        });
        if (!G.isRecording()) {
            G.end();
            return
        }
        let I = A.createRequestHeaders(Z.tracingOptions.tracingContext);
        for (let [Y, J] of Object.entries(I)) Q.headers.set(Y, J);
        return {
            span: G,
            tracingContext: Z.tracingOptions.tracingContext
        }
    } catch (G) {
        Sf.warning(`Skipping creating a tracing span due to an error: ${xZA(G)}`);
        return
    }
}

function Ge6(A, Q) {
    try {
        if (A.setStatus({
                status: "error",
                error: G11(Q) ? Q : void 0
            }), jqA(Q) && Q.statusCode) A.setAttribute("http.status_code", Q.statusCode);
        A.end()
    } catch (B) {
        Sf.warning(`Skipping tracing span processing due to an error: ${xZA(B)}`)
    }
}

function Ze6(A, Q) {
    try {
        A.setAttribute("http.status_code", Q.status);
        let B = Q.headers.get("x-ms-request-id");
        if (B) A.setAttribute("serviceRequestId", B);
        if (Q.status >= 400) A.setStatus({
            status: "error"
        });
        A.end()
    } catch (B) {
        Sf.warning(`Skipping tracing span processing due to an error: ${xZA(B)}`)
    }
}
var Ae6 = "tracingPolicy";
var StB = L(() => {
    Fs1();
    Zs1();
    tA1();
    Xl();
    Y11();
    B11()
});

function J11(A) {
    if (A instanceof AbortSignal) return {
        abortSignal: A
    };
    if (A.aborted) return {
        abortSignal: AbortSignal.abort(A.reason)
    };
    let Q = new AbortController,
        B = !0;

    function G() {
        if (B) A.removeEventListener("abort", Z), B = !1
    }

    function Z() {
        Q.abort(A.reason), G()
    }
    return A.addEventListener("abort", Z), {
        abortSignal: Q.signal,
        cleanup: G
    }
}

function _tB() {
    return {
        name: Ie6,
        sendRequest: async (A, Q) => {
            if (!A.abortSignal) return Q(A);
            let {
                abortSignal: B,
                cleanup: G
            } = J11(A.abortSignal);
            A.abortSignal = B;
            try {
                return await Q(A)
            } finally {
                G === null || G === void 0 || G()
            }
        }
    }
}
var Ie6 = "wrapAbortSignalLikePolicy";
var ktB = () => {};

function Vs1(A) {
    var Q;
    let B = MqA();
    if (OqA) {
        if (A.agent) B.addPolicy(ztB(A.agent));
        if (A.tlsOptions) B.addPolicy($tB(A.tlsOptions));
        B.addPolicy(HtB(A.proxyOptions)), B.addPolicy(WtB())
    }
    if (B.addPolicy(_tB()), B.addPolicy(KtB(), {
            beforePolicies: [Ws1]
        }), B.addPolicy(soB(A.userAgentOptions)), B.addPolicy(EtB((Q = A.telemetryOptions) === null || Q === void 0 ? void 0 : Q.clientRequestIdHeaderName)), B.addPolicy(YtB(), {
            afterPhase: "Deserialize"
        }), B.addPolicy(FtB(A.retryOptions), {
            phase: "Retry"
        }), B.addPolicy(jtB(Object.assign(Object.assign({}, A.userAgentOptions), A.loggingOptions)), {
            afterPhase: "Retry"
        }), OqA) B.addPolicy(moB(A.redirectOptions), {
        afterPhase: "Retry"
    });
    return B.addPolicy(goB(A.loggingOptions), {
        afterPhase: "Sign"
    }), B
}
var ytB = L(() => {
    uoB();
    Gs1();
    doB();
    roB();
    JtB();
    XtB();
    VtB();
    DtB();
    Xl();
    CtB();
    UtB();
    wtB();
    StB();
    ktB()
});

function Ks1() {
    let A = Pa1();
    return {
        async sendRequest(Q) {
            let {
                abortSignal: B,
                cleanup: G
            } = Q.abortSignal ? J11(Q.abortSignal) : {};
            try {
                return Q.abortSignal = B, await A.sendRequest(Q)
            } finally {
                G === null || G === void 0 || G()
            }
        }
    }
}
var xtB = L(() => {
    _ZA()
});

function ye(A) {
    return Ik(A)
}
var vtB = L(() => {
    _ZA()
});

function hT(A) {
    return qa1(A)
}
var btB = L(() => {
    _ZA()
});

function Ds1(A, Q = {
    maxRetries: ioB
}) {
    return LqA(A, Object.assign({
        logger: Ye6
    }, Q))
}
var Ye6;
var ftB = L(() => {
    Se();
    fT();
    Ye6 = Jl("core-rest-pipeline retryPolicy")
});
async function We6(A, Q, B) {
    async function G() {
        if (Date.now() < B) try {
            return await A()
        } catch (I) {
            return null
        } else {
            let I = await A();
            if (I === null) throw Error("Failed to refresh access token.");
            return I
        }
    }
    let Z = await G();
    while (Z === null) await Ys1(Q), Z = await G();
    return Z
}

function htB(A, Q) {
    let B = null,
        G = null,
        Z, I = Object.assign(Object.assign({}, Je6), Q),
        Y = {
            get isRefreshing() {
                return B !== null
            },
            get shouldRefresh() {
                var W;
                if (Y.isRefreshing) return !1;
                if ((G === null || G === void 0 ? void 0 : G.refreshAfterTimestamp) && G.refreshAfterTimestamp < Date.now()) return !0;
                return ((W = G === null || G === void 0 ? void 0 : G.expiresOnTimestamp) !== null && W !== void 0 ? W : 0) - I.refreshWindowInMs < Date.now()
            },
            get mustRefresh() {
                return G === null || G.expiresOnTimestamp - I.forcedRefreshWindowInMs < Date.now()
            }
        };

    function J(W, X) {
        var F;
        if (!Y.isRefreshing) B = We6(() => A.getToken(W, X), I.retryIntervalInMs, (F = G === null || G === void 0 ? void 0 : G.expiresOnTimestamp) !== null && F !== void 0 ? F : Date.now()).then((K) => {
            return B = null, G = K, Z = X.tenantId, G
        }).catch((K) => {
            throw B = null, G = null, Z = void 0, K
        });
        return B
    }
    return async (W, X) => {
        let F = Boolean(X.claims),
            V = Z !== X.tenantId;
        if (F) G = null;
        if (V || F || Y.mustRefresh) return J(W, X);
        if (Y.shouldRefresh) J(W, X);
        return G
    }
}
var Je6;
var gtB = L(() => {
    Xl();
    Je6 = {
        forcedRefreshWindowInMs: 1000,
        retryIntervalInMs: 3000,
        refreshWindowInMs: 120000
    }
});
async function W11(A, Q) {
    try {
        return [await Q(A), void 0]
    } catch (B) {
        if (jqA(B) && B.response) return [B.response, B];
        else throw B
    }
}
async function Xe6(A) {
    let {
        scopes: Q,
        getAccessToken: B,
        request: G
    } = A, Z = {
        abortSignal: G.abortSignal,
        tracingOptions: G.tracingOptions,
        enableCae: !0
    }, I = await B(Q, Z);
    if (I) A.request.headers.set("Authorization", `Bearer ${I.token}`)
}

function utB(A) {
    return A.status === 401 && A.headers.has("WWW-Authenticate")
}
async function mtB(A, Q) {
    var B;
    let {
        scopes: G
    } = A, Z = await A.getAccessToken(G, {
        enableCae: !0,
        claims: Q
    });
    if (!Z) return !1;
    return A.request.headers.set("Authorization", `${(B=Z.tokenType)!==null&&B!==void 0?B:"Bearer"} ${Z.token}`), !0
}

function SqA(A) {
    var Q, B, G;
    let {
        credential: Z,
        scopes: I,
        challengeCallbacks: Y
    } = A, J = A.logger || Sf, W = {
        authorizeRequest: (B = (Q = Y === null || Y === void 0 ? void 0 : Y.authorizeRequest) === null || Q === void 0 ? void 0 : Q.bind(Y)) !== null && B !== void 0 ? B : Xe6,
        authorizeRequestOnChallenge: (G = Y === null || Y === void 0 ? void 0 : Y.authorizeRequestOnChallenge) === null || G === void 0 ? void 0 : G.bind(Y)
    }, X = Z ? htB(Z) : () => Promise.resolve(null);
    return {
        name: ctB,
        async sendRequest(F, V) {
            if (!F.url.toLowerCase().startsWith("https://")) throw Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
            await W.authorizeRequest({
                scopes: Array.isArray(I) ? I : [I],
                request: F,
                getAccessToken: X,
                logger: J
            });
            let K, D, H;
            if ([K, D] = await W11(F, V), utB(K)) {
                let C = dtB(K.headers.get("WWW-Authenticate"));
                if (C) {
                    let E;
                    try {
                        E = atob(C)
                    } catch (z) {
                        return J.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${C}`), K
                    }
                    if (H = await mtB({
                            scopes: Array.isArray(I) ? I : [I],
                            response: K,
                            request: F,
                            getAccessToken: X,
                            logger: J
                        }, E), H)[K, D] = await W11(F, V)
                } else if (W.authorizeRequestOnChallenge) {
                    if (H = await W.authorizeRequestOnChallenge({
                            scopes: Array.isArray(I) ? I : [I],
                            request: F,
                            response: K,
                            getAccessToken: X,
                            logger: J
                        }), H)[K, D] = await W11(F, V);
                    if (utB(K)) {
                        if (C = dtB(K.headers.get("WWW-Authenticate")), C) {
                            let E;
                            try {
                                E = atob(C)
                            } catch (z) {
                                return J.warning(`The WWW-Authenticate header contains "claims" that cannot be parsed. Unable to perform the Continuous Access Evaluation authentication flow. Unparsable claims: ${C}`), K
                            }
                            if (H = await mtB({
                                    scopes: Array.isArray(I) ? I : [I],
                                    response: K,
                                    request: F,
                                    getAccessToken: X,
                                    logger: J
                                }, E), H)[K, D] = await W11(F, V)
                        }
                    }
                }
            }
            if (D) throw D;
            else return K
        }
    }
}

function Fe6(A) {
    let Q = /(\w+)\s+((?:\w+=(?:"[^"]*"|[^,]*),?\s*)+)/g,
        B = /(\w+)="([^"]*)"/g,
        G = [],
        Z;
    while ((Z = Q.exec(A)) !== null) {
        let I = Z[1],
            Y = Z[2],
            J = {},
            W;
        while ((W = B.exec(Y)) !== null) J[W[1]] = W[2];
        G.push({
            scheme: I,
            params: J
        })
    }
    return G
}

function dtB(A) {
    var Q;
    if (!A) return;
    return (Q = Fe6(A).find((G) => G.scheme === "Bearer" && G.params.claims && G.params.error === "insufficient_claims")) === null || Q === void 0 ? void 0 : Q.params.claims
}
var ctB = "bearerTokenAuthenticationPolicy";
var ptB = L(() => {
    gtB();
    tA1();
    Y11()
});
var _f = L(() => {
    Gs1();
    ytB();
    xtB();
    vtB();
    btB();
    Y11();
    ftB();
    ptB()
});
var ntB = U((ltB) => {
    Object.defineProperty(ltB, "__esModule", {
        value: !0
    });
    ltB.state = void 0;
    ltB.state = {
        operationRequestMap: new WeakMap
    }
});
var atB, Hs1;
var stB = L(() => {
    atB = GA(ntB(), 1), Hs1 = atB.state
});

function Fl(A, Q, B) {
    let {
        parameterPath: G,
        mapper: Z
    } = Q, I;
    if (typeof G === "string") G = [G];
    if (Array.isArray(G)) {
        if (G.length > 0)
            if (Z.isConstant) I = Z.defaultValue;
            else {
                let Y = rtB(A, G);
                if (!Y.propertyFound && B) Y = rtB(B, G);
                let J = !1;
                if (!Y.propertyFound) J = Z.required || G[0] === "options" && G.length === 2;
                I = J ? Z.defaultValue : Y.propertyValue
            }
    } else {
        if (Z.required) I = {};
        for (let Y in G) {
            let J = Z.type.modelProperties[Y],
                W = G[Y],
                X = Fl(A, {
                    parameterPath: W,
                    mapper: J
                }, B);
            if (X !== void 0) {
                if (!I) I = {};
                I[Y] = X
            }
        }
    }
    return I
}

function rtB(A, Q) {
    let B = {
            propertyFound: !1
        },
        G = 0;
    for (; G < Q.length; ++G) {
        let Z = Q[G];
        if (A && Z in A) A = A[Z];
        else break
    }
    if (G === Q.length) B.propertyValue = A, B.propertyFound = !0;
    return B
}

function Ve6(A) {
    return otB in A
}

function kf(A) {
    if (Ve6(A)) return kf(A[otB]);
    let Q = Hs1.operationRequestMap.get(A);
    if (!Q) Q = {}, Hs1.operationRequestMap.set(A, Q);
    return Q
}
var otB;
var _qA = L(() => {
    stB();
    otB = Symbol.for("@azure/core-client original request")
});

function ttB(A = {}) {
    var Q, B, G, Z, I, Y, J;
    let W = (B = (Q = A.expectedContentTypes) === null || Q === void 0 ? void 0 : Q.json) !== null && B !== void 0 ? B : Ke6,
        X = (Z = (G = A.expectedContentTypes) === null || G === void 0 ? void 0 : G.xml) !== null && Z !== void 0 ? Z : De6,
        F = A.parseXML,
        V = A.serializerOptions,
        K = {
            xml: {
                rootName: (I = V === null || V === void 0 ? void 0 : V.xml.rootName) !== null && I !== void 0 ? I : "",
                includeRoot: (Y = V === null || V === void 0 ? void 0 : V.xml.includeRoot) !== null && Y !== void 0 ? Y : !1,
                xmlCharKey: (J = V === null || V === void 0 ? void 0 : V.xml.xmlCharKey) !== null && J !== void 0 ? J : gA1
            }
        };
    return {
        name: He6,
        async sendRequest(D, H) {
            let C = await H(D);
            return ze6(W, X, C, K, F)
        }
    }
}

function Ce6(A) {
    let Q, B = A.request,
        G = kf(B),
        Z = G === null || G === void 0 ? void 0 : G.operationSpec;
    if (Z)
        if (!(G === null || G === void 0 ? void 0 : G.operationResponseGetter)) Q = Z.responses[A.status];
        else Q = G === null || G === void 0 ? void 0 : G.operationResponseGetter(Z, A);
    return Q
}

function Ee6(A) {
    let Q = A.request,
        B = kf(Q),
        G = B === null || B === void 0 ? void 0 : B.shouldDeserialize,
        Z;
    if (G === void 0) Z = !0;
    else if (typeof G === "boolean") Z = G;
    else Z = G(A);
    return Z
}
async function ze6(A, Q, B, G, Z) {
    let I = await we6(A, Q, B, G, Z);
    if (!Ee6(I)) return I;
    let Y = kf(I.request),
        J = Y === null || Y === void 0 ? void 0 : Y.operationSpec;
    if (!J || !J.responses) return I;
    let W = Ce6(I),
        {
            error: X,
            shouldReturnResponse: F
        } = $e6(I, J, W, G);
    if (X) throw X;
    else if (F) return I;
    if (W) {
        if (W.bodyMapper) {
            let V = I.parsedBody;
            if (J.isXML && W.bodyMapper.type.name === jf.Sequence) V = typeof V === "object" ? V[W.bodyMapper.xmlElementName] : [];
            try {
                I.parsedBody = J.serializer.deserialize(W.bodyMapper, V, "operationRes.parsedBody", G)
            } catch (K) {
                throw new bZA(`Error ${K} occurred in deserializing the responseBody - ${I.bodyAsText}`, {
                    statusCode: I.status,
                    request: I.request,
                    response: I
                })
            }
        } else if (J.httpMethod === "HEAD") I.parsedBody = B.status >= 200 && B.status < 300;
        if (W.headersMapper) I.parsedHeaders = J.serializer.deserialize(W.headersMapper, I.headers.toJSON(), "operationRes.parsedHeaders", {
            xml: {},
            ignoreUnknownProperties: !0
        })
    }
    return I
}

function Ue6(A) {
    let Q = Object.keys(A.responses);
    return Q.length === 0 || Q.length === 1 && Q[0] === "default"
}

function $e6(A, Q, B, G) {
    var Z, I, Y, J, W;
    let X = 200 <= A.status && A.status < 300;
    if (Ue6(Q) ? X : !!B)
        if (B) {
            if (!B.isError) return {
                error: null,
                shouldReturnResponse: !1
            }
        } else return {
            error: null,
            shouldReturnResponse: !1
        };
    let V = B !== null && B !== void 0 ? B : Q.responses.default,
        K = ((Z = A.request.streamResponseStatusCodes) === null || Z === void 0 ? void 0 : Z.has(A.status)) ? `Unexpected status code: ${A.status}` : A.bodyAsText,
        D = new bZA(K, {
            statusCode: A.status,
            request: A.request,
            response: A
        });
    if (!V && !(((Y = (I = A.parsedBody) === null || I === void 0 ? void 0 : I.error) === null || Y === void 0 ? void 0 : Y.code) && ((W = (J = A.parsedBody) === null || J === void 0 ? void 0 : J.error) === null || W === void 0 ? void 0 : W.message))) throw D;
    let H = V === null || V === void 0 ? void 0 : V.bodyMapper,
        C = V === null || V === void 0 ? void 0 : V.headersMapper;
    try {
        if (A.parsedBody) {
            let E = A.parsedBody,
                z;
            if (H) {
                let N = E;
                if (Q.isXML && H.type.name === jf.Sequence) {
                    N = [];
                    let q = H.xmlElementName;
                    if (typeof E === "object" && q) N = E[q]
                }
                z = Q.serializer.deserialize(H, N, "error.response.parsedBody", G)
            }
            let w = E.error || z || E;
            if (D.code = w.code, w.message) D.message = w.message;
            if (H) D.response.parsedBody = z
        }
        if (A.headers && C) D.response.parsedHeaders = Q.serializer.deserialize(C, A.headers.toJSON(), "operationRes.parsedHeaders")
    } catch (E) {
        D.message = `Error "${E.message}" occurred in deserializing the responseBody - "${A.bodyAsText}" for the default response.`
    }
    return {
        error: D,
        shouldReturnResponse: !1
    }
}
async function we6(A, Q, B, G, Z) {
    var I;
    if (!((I = B.request.streamResponseStatusCodes) === null || I === void 0 ? void 0 : I.has(B.status)) && B.bodyAsText) {
        let Y = B.bodyAsText,
            J = B.headers.get("Content-Type") || "",
            W = !J ? [] : J.split(";").map((X) => X.toLowerCase());
        try {
            if (W.length === 0 || W.some((X) => A.indexOf(X) !== -1)) return B.parsedBody = JSON.parse(Y), B;
            else if (W.some((X) => Q.indexOf(X) !== -1)) {
                if (!Z) throw Error("Parsing XML not supported.");
                let X = await Z(Y, G.xml);
                return B.parsedBody = X, B
            }
        } catch (X) {
            let F = `Error "${X}" occurred while parsing the response body - ${B.bodyAsText}.`,
                V = X.code || bZA.PARSE_ERROR;
            throw new bZA(F, {
                code: V,
                statusCode: B.status,
                request: B.request,
                response: B
            })
        }
    }
    return B
}
var Ke6, De6, He6 = "deserializationPolicy";
var etB = L(() => {
    _f();
    uA1();
    _qA();
    Ke6 = ["application/json", "text/json"], De6 = ["application/xml", "application/atom+xml"]
});

function AeB(A) {
    let Q = new Set;
    for (let B in A.responses) {
        let G = A.responses[B];
        if (G.bodyMapper && G.bodyMapper.type.name === jf.Stream) Q.add(Number(B))
    }
    return Q
}

function Wk(A) {
    let {
        parameterPath: Q,
        mapper: B
    } = A, G;
    if (typeof Q === "string") G = Q;
    else if (Array.isArray(Q)) G = Q.join(".");
    else G = B.serializedName;
    return G
}
var X11 = L(() => {
    uA1()
});

function QeB(A = {}) {
    let Q = A.stringifyXML;
    return {
        name: qe6,
        async sendRequest(B, G) {
            let Z = kf(B),
                I = Z === null || Z === void 0 ? void 0 : Z.operationSpec,
                Y = Z === null || Z === void 0 ? void 0 : Z.operationArguments;
            if (I && Y) Ne6(B, Y, I), Le6(B, Y, I, Q);
            return G(B)
        }
    }
}

function Ne6(A, Q, B) {
    var G, Z;
    if (B.headerParameters)
        for (let Y of B.headerParameters) {
            let J = Fl(Q, Y);
            if (J !== null && J !== void 0 || Y.mapper.required) {
                J = B.serializer.serialize(Y.mapper, J, Wk(Y));
                let W = Y.mapper.headerCollectionPrefix;
                if (W)
                    for (let X of Object.keys(J)) A.headers.set(W + X, J[X]);
                else A.headers.set(Y.mapper.serializedName || Wk(Y), J)
            }
        }
    let I = (Z = (G = Q.options) === null || G === void 0 ? void 0 : G.requestOptions) === null || Z === void 0 ? void 0 : Z.customHeaders;
    if (I)
        for (let Y of Object.keys(I)) A.headers.set(Y, I[Y])
}

function Le6(A, Q, B, G = function() {
    throw Error("XML serialization unsupported!")
}) {
    var Z, I, Y, J, W;
    let X = (Z = Q.options) === null || Z === void 0 ? void 0 : Z.serializerOptions,
        F = {
            xml: {
                rootName: (I = X === null || X === void 0 ? void 0 : X.xml.rootName) !== null && I !== void 0 ? I : "",
                includeRoot: (Y = X === null || X === void 0 ? void 0 : X.xml.includeRoot) !== null && Y !== void 0 ? Y : !1,
                xmlCharKey: (J = X === null || X === void 0 ? void 0 : X.xml.xmlCharKey) !== null && J !== void 0 ? J : gA1
            }
        },
        V = F.xml.xmlCharKey;
    if (B.requestBody && B.requestBody.mapper) {
        A.body = Fl(Q, B.requestBody);
        let K = B.requestBody.mapper,
            {
                required: D,
                serializedName: H,
                xmlName: C,
                xmlElementName: E,
                xmlNamespace: z,
                xmlNamespacePrefix: w,
                nullable: N
            } = K,
            q = K.type.name;
        try {
            if (A.body !== void 0 && A.body !== null || N && A.body === null || D) {
                let R = Wk(B.requestBody);
                A.body = B.serializer.serialize(K, A.body, R, F);
                let P = q === jf.Stream;
                if (B.isXML) {
                    let y = w ? `xmlns:${w}` : "xmlns",
                        v = Me6(z, y, q, A.body, F);
                    if (q === jf.Sequence) A.body = G(Oe6(v, E || C || H, y, z), {
                        rootName: C || H,
                        xmlCharKey: V
                    });
                    else if (!P) A.body = G(v, {
                        rootName: C || H,
                        xmlCharKey: V
                    })
                } else if (q === jf.String && (((W = B.contentType) === null || W === void 0 ? void 0 : W.match("text/plain")) || B.mediaType === "text")) return;
                else if (!P) A.body = JSON.stringify(A.body)
            }
        } catch (R) {
            throw Error(`Error "${R.message}" occurred in serializing the payload - ${JSON.stringify(H,void 0,"  ")}.`)
        }
    } else if (B.formDataParameters && B.formDataParameters.length > 0) {
        A.formData = {};
        for (let K of B.formDataParameters) {
            let D = Fl(Q, K);
            if (D !== void 0 && D !== null) {
                let H = K.mapper.serializedName || Wk(K);
                A.formData[H] = B.serializer.serialize(K.mapper, D, Wk(K), F)
            }
        }
    }
}

function Me6(A, Q, B, G, Z) {
    if (A && !["Composite", "Sequence", "Dictionary"].includes(B)) {
        let I = {};
        return I[Z.xml.xmlCharKey] = G, I[za1] = {
            [Q]: A
        }, I
    }
    return G
}

function Oe6(A, Q, B, G) {
    if (!Array.isArray(A)) A = [A];
    if (!B || !G) return {
        [Q]: A
    };
    let Z = {
        [Q]: A
    };
    return Z[za1] = {
        [B]: G
    }, Z
}
var qe6 = "serializationPolicy";
var BeB = L(() => {
    _qA();
    uA1();
    X11()
});

function GeB(A = {}) {
    let Q = Vs1(A !== null && A !== void 0 ? A : {});
    if (A.credentialOptions) Q.addPolicy(SqA({
        credential: A.credentialOptions.credential,
        scopes: A.credentialOptions.credentialScopes
    }));
    return Q.addPolicy(QeB(A.serializationOptions), {
        phase: "Serialize"
    }), Q.addPolicy(ttB(A.deserializationOptions), {
        phase: "Deserialize"
    }), Q
}
var ZeB = L(() => {
    etB();
    _f();
    BeB()
});

function IeB() {
    if (!Cs1) Cs1 = Ks1();