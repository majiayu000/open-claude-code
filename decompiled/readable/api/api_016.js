/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.870Z
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 16/30
 * Lines: 213633 - 215131 (1499 lines)
 * Original file: cli.js
 */

            async presign(Q, B = {}) {
                let {
                    signingDate: G = new Date,
                    expiresIn: Z = 3600,
                    unsignableHeaders: I,
                    unhoistableHeaders: Y,
                    signableHeaders: J,
                    signingRegion: W,
                    signingService: X
                } = B, F = await this.credentialProvider();
                this.validateResolvedCredentials(F);
                let V = W ?? await this.regionProvider(),
                    {
                        longDate: K,
                        shortDate: D
                    } = GtA(G);
                if (Z > xj6) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                let H = ItA(D, V, X ?? this.service),
                    C = wxB(Ap1(Q), {
                        unhoistableHeaders: Y
                    });
                if (F.sessionToken) C.query[VxB] = F.sessionToken;
                C.query[wj6] = rc1, C.query[qj6] = `${F.accessKeyId}/${H}`, C.query[XxB] = K, C.query[Lj6] = Z.toString(10);
                let E = tc1(C, I, J);
                return C.query[Nj6] = JxB(E), C.query[FxB] = await this.getSignature(K, H, this.getSigningKey(F, V, D, X), this.createCanonicalRequest(C, E, await YtA(Q, this.sha256))), C
            }
            async sign(Q, B) {
                if (typeof Q === "string") return this.signString(Q, B);
                else if (Q.headers && Q.payload) return this.signEvent(Q, B);
                else if (Q.message) return this.signMessage(Q, B);
                else return this.signRequest(Q, B)
            }
            async signEvent({
                headers: Q,
                payload: B
            }, {
                signingDate: G = new Date,
                priorSignature: Z,
                signingRegion: I,
                signingService: Y
            }) {
                let J = I ?? await this.regionProvider(),
                    {
                        shortDate: W,
                        longDate: X
                    } = GtA(G),
                    F = ItA(W, J, Y ?? this.service),
                    V = await YtA({
                        headers: {},
                        body: B
                    }, this.sha256),
                    K = new this.sha256;
                K.update(Q);
                let D = (0, mp.toHex)(await K.digest()),
                    H = [_j6, X, F, Z, D, V].join(`
`);
                return this.signString(H, {
                    signingDate: G,
                    signingRegion: J,
                    signingService: Y
                })
            }
            async signMessage(Q, {
                signingDate: B = new Date,
                signingRegion: G,
                signingService: Z
            }) {
                return this.signEvent({
                    headers: this.headerFormatter.format(Q.message.headers),
                    payload: Q.message.body
                }, {
                    signingDate: B,
                    signingRegion: G,
                    signingService: Z,
                    priorSignature: Q.priorSignature
                }).then((Y) => {
                    return {
                        message: Q.message,
                        signature: Y
                    }
                })
            }
            async signString(Q, {
                signingDate: B = new Date,
                signingRegion: G,
                signingService: Z
            } = {}) {
                let I = await this.credentialProvider();
                this.validateResolvedCredentials(I);
                let Y = G ?? await this.regionProvider(),
                    {
                        shortDate: J
                    } = GtA(B),
                    W = new this.sha256(await this.getSigningKey(I, Y, J, Z));
                return W.update((0, sc1.toUint8Array)(Q)), (0, mp.toHex)(await W.digest())
            }
            async signRequest(Q, {
                signingDate: B = new Date,
                signableHeaders: G,
                unsignableHeaders: Z,
                signingRegion: I,
                signingService: Y
            } = {}) {
                let J = await this.credentialProvider();
                this.validateResolvedCredentials(J);
                let W = I ?? await this.regionProvider(),
                    X = Ap1(Q),
                    {
                        longDate: F,
                        shortDate: V
                    } = GtA(B),
                    K = ItA(V, W, Y ?? this.service);
                if (X.headers[DxB] = F, J.sessionToken) X.headers[Tj6] = J.sessionToken;
                let D = await YtA(X, this.sha256);
                if (!dj6(oc1, X.headers) && this.applyChecksum) X.headers[oc1] = D;
                let H = tc1(X, Z, G),
                    C = await this.getSignature(F, K, this.getSigningKey(J, W, V, Y), this.createCanonicalRequest(X, H, D));
                return X.headers[KxB] = `${rc1} Credential=${J.accessKeyId}/${K}, SignedHeaders=${JxB(H)}, Signature=${C}`, X
            }
            createCanonicalRequest(Q, B, G) {
                let Z = Object.keys(B).sort();
                return `${Q.method}
${this.getCanonicalPath(Q)}
${ExB(Q)}
${Z.map((I)=>`${I}:${B[I]}`).join(`
`)}

${Z.join(";")}
${G}`
            }
            async createStringToSign(Q, B, G) {
                let Z = new this.sha256;
                Z.update((0, sc1.toUint8Array)(G));
                let I = await Z.digest();
                return `${rc1}
${Q}
${B}
${(0,mp.toHex)(I)}`
            }
            getCanonicalPath({
                path: Q
            }) {
                if (this.uriEscapePath) {
                    let B = [];
                    for (let I of Q.split("/")) {
                        if ((I == null ? void 0 : I.length) === 0) continue;
                        if (I === ".") continue;
                        if (I === "..") B.pop();
                        else B.push(I)
                    }
                    let G = `${(Q==null?void 0:Q.startsWith("/"))?"/":""}${B.join("/")}${B.length>0&&(Q==null?void 0:Q.endsWith("/"))?"/":""}`;
                    return (0, OwA.escapeUri)(G).replace(/%2F/g, "/")
                }
                return Q
            }
            async getSignature(Q, B, G, Z) {
                let I = await this.createStringToSign(Q, B, Z),
                    Y = new this.sha256(await G);
                return Y.update((0, sc1.toUint8Array)(I)), (0, mp.toHex)(await Y.digest())
            }
            getSigningKey(Q, B, G, Z) {
                return CxB(this.sha256, Q, G, B, Z || this.service)
            }
            validateResolvedCredentials(Q) {
                if (typeof Q !== "object" || typeof Q.accessKeyId !== "string" || typeof Q.secretAccessKey !== "string") throw Error("Resolved credential object is not valid")
            }
        };
    uX(qxB, "SignatureV4");
    var ij6 = qxB,
        GtA = uX((A) => {
            let Q = pj6(A).replace(/[\-:]/g, "");
            return {
                longDate: Q,
                shortDate: Q.slice(0, 8)
            }
        }, "formatDate"),
        JxB = uX((A) => Object.keys(A).sort().join(";"), "getCanonicalHeaderList")
});
import nj6 from "assert";
var MxB, OxB, RxB, TxB, aj6 = () => Promise.resolve().then(() => GA(NO1(), 1)).then(({
        fromNodeProviderChain: A
    }) => A({
        clientConfig: {
            requestHandler: new OxB.FetchHttpHandler({
                requestInit: (Q) => {
                    return {
                        ...Q
                    }
                }
            })
        }
    })).catch((A) => {
        throw Error(`Failed to import '@aws-sdk/credential-providers'.You can provide a custom \`providerChainResolver\` in the client options if your runtime does not have access to '@aws-sdk/credential-providers': \`new AnthropicBedrock({ providerChainResolver })\` Original error: ${A.message}`)
    }),
    PxB = async (A, Q) => {
        nj6(A.method, "Expected request method property to be set");
        let B = await (Q.providerChainResolver ? Q.providerChainResolver() : aj6()),
            G = await sj6(() => {
                if (Q.awsAccessKey) process.env.AWS_ACCESS_KEY_ID = Q.awsAccessKey;
                if (Q.awsSecretKey) process.env.AWS_SECRET_ACCESS_KEY = Q.awsSecretKey;
                if (Q.awsSessionToken) process.env.AWS_SESSION_TOKEN = Q.awsSessionToken
            }, () => B()),
            Z = new TxB.SignatureV4({
                service: "bedrock",
                region: Q.regionName,
                credentials: G,
                sha256: MxB.Sha256
            }),
            I = new URL(Q.url),
            Y = !A.headers ? {} : (Symbol.iterator in A.headers) ? Object.fromEntries(Array.from(A.headers).map((X) => [...X])) : {
                ...A.headers
            };
        delete Y.connection, Y.host = I.hostname;
        let J = new RxB.HttpRequest({
            method: A.method.toUpperCase(),
            protocol: I.protocol,
            path: I.pathname,
            headers: Y,
            body: A.body
        });
        return (await Z.sign(J)).headers
    }, sj6 = async (A, Q) => {
        let B = {
            ...process.env
        };
        try {
            return A(), await Q()
        } finally {
            process.env = B
        }
    };
var jxB = L(() => {
    MxB = GA(UkB(), 1), OxB = GA(mc1(), 1), RxB = GA(cc1(), 1), TxB = GA(LxB(), 1)
});
var Bp1 = U((rBG, XtA) => {
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var SxB, _xB, kxB, yxB, xxB, vxB, bxB, fxB, hxB, WtA, Qp1, gxB, uxB, vGA, mxB, dxB, cxB, pxB, lxB, ixB, nxB, axB, sxB;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof XtA === "object" && typeof rBG === "object") A(B(Q, B(rBG)));
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
        instanceof Array && function(B, G) {
            B.__proto__ = G
        } || function(B, G) {
            for (var Z in G)
                if (G.hasOwnProperty(Z)) B[Z] = G[Z]
        };
        SxB = function(B, G) {
            Q(B, G);

function Z() {
                this.constructor = B
            }
            B.prototype = G === null ? Object.create(G) : (Z.prototype = G.prototype, new Z)
        }, _xB = Object.assign || function(B) {
            for (var G, Z = 1, I = arguments.length; Z < I; Z++) {
                G = arguments[Z];
                for (var Y in G)
                    if (Object.prototype.hasOwnProperty.call(G, Y)) B[Y] = G[Y]
            }
            return B
        }, kxB = function(B, G) {
            var Z = {};
            for (var I in B)
                if (Object.prototype.hasOwnProperty.call(B, I) && G.indexOf(I) < 0) Z[I] = B[I];
            if (B != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var Y = 0, I = Object.getOwnPropertySymbols(B); Y < I.length; Y++)
                    if (G.indexOf(I[Y]) < 0 && Object.prototype.propertyIsEnumerable.call(B, I[Y])) Z[I[Y]] = B[I[Y]]
            }
            return Z
        }, yxB = function(B, G, Z, I) {
            var Y = arguments.length,
                J = Y < 3 ? G : I === null ? I = Object.getOwnPropertyDescriptor(G, Z) : I,
                W;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") J = Reflect.decorate(B, G, Z, I);
            else
                for (var X = B.length - 1; X >= 0; X--)
                    if (W = B[X]) J = (Y < 3 ? W(J) : Y > 3 ? W(G, Z, J) : W(G, Z)) || J;
            return Y > 3 && J && Object.defineProperty(G, Z, J), J
        }, xxB = function(B, G) {
            return function(Z, I) {
                G(Z, I, B)
            }
        }, vxB = function(B, G) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(B, G)
        }, bxB = function(B, G, Z, I) {
            function Y(J) {
                return J instanceof Z ? J : new Z(function(W) {
                    W(J)
                })
            }
            return new(Z || (Z = Promise))(function(J, W) {
                function X(K) {
                    try {
                        V(I.next(K))
                    } catch (D) {
                        W(D)
                    }
                }

function F(K) {
                    try {
                        V(I.throw(K))
                    } catch (D) {
                        W(D)
                    }
                }

function V(K) {
                    K.done ? J(K.value) : Y(K.value).then(X, F)
                }
                V((I = I.apply(B, G || [])).next())
            })
        }, fxB = function(B, G) {
            var Z = {
                    label: 0,
                    sent: function() {
                        if (J[0] & 1) throw J[1];
                        return J[1]
                    },
                    trys: [],
                    ops: []
                },
                I, Y, J, W;
            return W = {
                next: X(0),
                throw: X(1),
                return: X(2)
            }, typeof Symbol === "function" && (W[Symbol.iterator] = function() {
                return this
            }), W;

function X(V) {
                return function(K) {
                    return F([V, K])
                }
            }

function F(V) {
                if (I) throw TypeError("Generator is already executing.");
                while (Z) try {
                    if (I = 1, Y && (J = V[0] & 2 ? Y.return : V[0] ? Y.throw || ((J = Y.return) && J.call(Y), 0) : Y.next) && !(J = J.call(Y, V[1])).done) return J;
                    if (Y = 0, J) V = [V[0] & 2, J.value];
                    switch (V[0]) {
                        case 0:
                        case 1:
                            J = V;
                            break;
                        case 4:
                            return Z.label++, {
                                value: V[1],
                                done: !1
                            };
                        case 5:
                            Z.label++, Y = V[1], V = [0];
                            continue;
                        case 7:
                            V = Z.ops.pop(), Z.trys.pop();
                            continue;
                        default:
                            if ((J = Z.trys, !(J = J.length > 0 && J[J.length - 1])) && (V[0] === 6 || V[0] === 2)) {
                                Z = 0;
                                continue
                            }
                            if (V[0] === 3 && (!J || V[1] > J[0] && V[1] < J[3])) {
                                Z.label = V[1];
                                break
                            }
                            if (V[0] === 6 && Z.label < J[1]) {
                                Z.label = J[1], J = V;
                                break
                            }
                            if (J && Z.label < J[2]) {
                                Z.label = J[2], Z.ops.push(V);
                                break
                            }
                            if (J[2]) Z.ops.pop();
                            Z.trys.pop();
                            continue
                    }
                    V = G.call(B, Z)
                } catch (K) {
                    V = [6, K], Y = 0
                } finally {
                    I = J = 0
                }
                if (V[0] & 5) throw V[1];
                return {
                    value: V[0] ? V[1] : void 0,
                    done: !0
                }
            }
        }, sxB = function(B, G, Z, I) {
            if (I === void 0) I = Z;
            B[I] = G[Z]
        }, hxB = function(B, G) {
            for (var Z in B)
                if (Z !== "default" && !G.hasOwnProperty(Z)) G[Z] = B[Z]
        }, WtA = function(B) {
            var G = typeof Symbol === "function" && Symbol.iterator,
                Z = G && B[G],
                I = 0;
            if (Z) return Z.call(B);
            if (B && typeof B.length === "number") return {
                next: function() {
                    if (B && I >= B.length) B = void 0;
                    return {
                        value: B && B[I++],
                        done: !B
                    }
                }
            };
            throw TypeError(G ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, Qp1 = function(B, G) {
            var Z = typeof Symbol === "function" && B[Symbol.iterator];
            if (!Z) return B;
            var I = Z.call(B),
                Y, J = [],
                W;
            try {
                while ((G === void 0 || G-- > 0) && !(Y = I.next()).done) J.push(Y.value)
            } catch (X) {
                W = {
                    error: X
                }
            } finally {
                try {
                    if (Y && !Y.done && (Z = I.return)) Z.call(I)
                } finally {
                    if (W) throw W.error
                }
            }
            return J
        }, gxB = function() {
            for (var B = [], G = 0; G < arguments.length; G++) B = B.concat(Qp1(arguments[G]));
            return B
        }, uxB = function() {
            for (var B = 0, G = 0, Z = arguments.length; G < Z; G++) B += arguments[G].length;
            for (var I = Array(B), Y = 0, G = 0; G < Z; G++)
                for (var J = arguments[G], W = 0, X = J.length; W < X; W++, Y++) I[Y] = J[W];
            return I
        }, vGA = function(B) {
            return this instanceof vGA ? (this.v = B, this) : new vGA(B)
        }, mxB = function(B, G, Z) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var I = Z.apply(B, G || []),
                Y, J = [];
            return Y = {}, W("next"), W("throw"), W("return"), Y[Symbol.asyncIterator] = function() {
                return this
            }, Y;

function W(H) {
                if (I[H]) Y[H] = function(C) {
                    return new Promise(function(E, z) {
                        J.push([H, C, E, z]) > 1 || X(H, C)
                    })
                }
            }

function X(H, C) {
                try {
                    F(I[H](C))
                } catch (E) {
                    D(J[0][3], E)
                }
            }

function F(H) {
                H.value instanceof vGA ? Promise.resolve(H.value.v).then(V, K) : D(J[0][2], H)
            }

function V(H) {
                X("next", H)
            }

function K(H) {
                X("throw", H)
            }

function D(H, C) {
                if (H(C), J.shift(), J.length) X(J[0][0], J[0][1])
            }
        }, dxB = function(B) {
            var G, Z;
            return G = {}, I("next"), I("throw", function(Y) {
                throw Y
            }), I("return"), G[Symbol.iterator] = function() {
                return this
            }, G;

function I(Y, J) {
                G[Y] = B[Y] ? function(W) {
                    return (Z = !Z) ? {
                        value: vGA(B[Y](W)),
                        done: Y === "return"
                    } : J ? J(W) : W
                } : J
            }
        }, cxB = function(B) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var G = B[Symbol.asyncIterator],
                Z;
            return G ? G.call(B) : (B = typeof WtA === "function" ? WtA(B) : B[Symbol.iterator](), Z = {}, I("next"), I("throw"), I("return"), Z[Symbol.asyncIterator] = function() {
                return this
            }, Z);

function I(J) {
                Z[J] = B[J] && function(W) {
                    return new Promise(function(X, F) {
                        W = B[J](W), Y(X, F, W.done, W.value)
                    })
                }
            }

function Y(J, W, X, F) {
                Promise.resolve(F).then(function(V) {
                    J({
                        value: V,
                        done: X
                    })
                }, W)
            }
        }, pxB = function(B, G) {
            if (Object.defineProperty) Object.defineProperty(B, "raw", {
                value: G
            });
            else B.raw = G;
            return B
        }, lxB = function(B) {
            if (B && B.__esModule) return B;

var G = {};
            if (B != null) {
                for (var Z in B)
                    if (Object.hasOwnProperty.call(B, Z)) G[Z] = B[Z]
            }
            return G.default = B, G
        }, ixB = function(B) {
            return B && B.__esModule ? B : {
                default: B
            }
        }, nxB = function(B, G) {
            if (!G.has(B)) throw TypeError("attempted to get private field on non-instance");
            return G.get(B)
        }, axB = function(B, G, Z) {
            if (!G.has(B)) throw TypeError("attempted to set private field on non-instance");
            return G.set(B, Z), Z
        }, A("__extends", SxB), A("__assign", _xB), A("__rest", kxB), A("__decorate", yxB), A("__param", xxB), A("__metadata", vxB), A("__awaiter", bxB), A("__generator", fxB), A("__exportStar", hxB), A("__createBinding", sxB), A("__values", WtA), A("__read", Qp1), A("__spread", gxB), A("__spreadArrays", uxB), A("__await", vGA), A("__asyncGenerator", mxB), A("__asyncDelegator", dxB), A("__asyncValues", cxB), A("__makeTemplateObject", pxB), A("__importStar", lxB), A("__importDefault", ixB), A("__classPrivateFieldGet", nxB), A("__classPrivateFieldSet", axB)
    })
});
var txB = U((rxB) => {
    Object.defineProperty(rxB, "__esModule", {
        value: !0
    });
    rxB.convertToBuffer = void 0;
    var rj6 = yc1(),
        oj6 = typeof Buffer < "u" && Buffer.from ? function(A) {
            return Buffer.from(A, "utf8")
        } : rj6.fromUtf8;

function tj6(A) {
        if (A instanceof Uint8Array) return A;
        if (typeof A === "string") return oj6(A);
        if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        return new Uint8Array(A)
    }
    rxB.convertToBuffer = tj6
});
var QvB = U((exB) => {
    Object.defineProperty(exB, "__esModule", {
        value: !0
    });
    exB.isEmptyData = void 0;

function ej6(A) {
        if (typeof A === "string") return A.length === 0;
        return A.byteLength === 0
    }
    exB.isEmptyData = ej6
});
var ZvB = U((BvB) => {
    Object.defineProperty(BvB, "__esModule", {
        value: !0
    });
    BvB.numToUint8 = void 0;

function AS6(A) {
        return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255])
    }
    BvB.numToUint8 = AS6
});
var JvB = U((IvB) => {
    Object.defineProperty(IvB, "__esModule", {
        value: !0
    });
    IvB.uint32ArrayFrom = void 0;

function QS6(A) {
        if (!Uint32Array.from) {
            var Q = new Uint32Array(A.length),
                B = 0;
            while (B < A.length) Q[B] = A[B], B += 1;
            return Q
        }
        return Uint32Array.from(A)
    }
    IvB.uint32ArrayFrom = QS6
});
var Gp1 = U((bGA) => {
    Object.defineProperty(bGA, "__esModule", {
        value: !0
    });
    bGA.uint32ArrayFrom = bGA.numToUint8 = bGA.isEmptyData = bGA.convertToBuffer = void 0;
    var BS6 = txB();
    Object.defineProperty(bGA, "convertToBuffer", {
        enumerable: !0,
        get: function() {
            return BS6.convertToBuffer
        }
    });
    var GS6 = QvB();
    Object.defineProperty(bGA, "isEmptyData", {
        enumerable: !0,
        get: function() {
            return GS6.isEmptyData
        }
    });
    var ZS6 = ZvB();
    Object.defineProperty(bGA, "numToUint8", {
        enumerable: !0,
        get: function() {
            return ZS6.numToUint8
        }
    });
    var IS6 = JvB();
    Object.defineProperty(bGA, "uint32ArrayFrom", {
        enumerable: !0,
        get: function() {
            return IS6.uint32ArrayFrom
        }
    })
});
var KvB = U((FvB) => {
    Object.defineProperty(FvB, "__esModule", {
        value: !0
    });
    FvB.AwsCrc32 = void 0;
    var WvB = Bp1(),
        Zp1 = Gp1(),
        XvB = FtA(),
        JS6 = function() {
            function A() {
                this.crc32 = new XvB.Crc32
            }
            return A.prototype.update = function(Q) {
                if ((0, Zp1.isEmptyData)(Q)) return;
                this.crc32.update((0, Zp1.convertToBuffer)(Q))
            }, A.prototype.digest = function() {
                return WvB.__awaiter(this, void 0, void 0, function() {
                    return WvB.__generator(this, function(Q) {
                        return [2, (0, Zp1.numToUint8)(this.crc32.digest())]
                    })
                })
            }, A.prototype.reset = function() {
                this.crc32 = new XvB.Crc32
            }, A
        }();
    FvB.AwsCrc32 = JS6
});
var FtA = U((Ip1) => {
    Object.defineProperty(Ip1, "__esModule", {
        value: !0
    });
    Ip1.AwsCrc32 = Ip1.Crc32 = Ip1.crc32 = void 0;
    var WS6 = Bp1(),
        XS6 = Gp1();

function FS6(A) {
        return new DvB().update(A).digest()
    }
    Ip1.crc32 = FS6;

var DvB = function() {
        function A() {
            this.checksum = 4294967295
        }
        return A.prototype.update = function(Q) {
            var B, G;
            try {
                for (var Z = WS6.__values(Q), I = Z.next(); !I.done; I = Z.next()) {
                    var Y = I.value;
                    this.checksum = this.checksum >>> 8 ^ KS6[(this.checksum ^ Y) & 255]
                }
            } catch (J) {
                B = {
                    error: J
                }
            } finally {
                try {
                    if (I && !I.done && (G = Z.return)) G.call(Z)
                } finally {
                    if (B) throw B.error
                }
            }
            return this
        }, A.prototype.digest = function() {
            return (this.checksum ^ 4294967295) >>> 0
        }, A
    }();
    Ip1.Crc32 = DvB;

var VS6 = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
        KS6 = (0, XS6.uint32ArrayFrom)(VS6),
        DS6 = KvB();
    Object.defineProperty(Ip1, "AwsCrc32", {
        enumerable: !0,
        get: function() {
            return DS6.AwsCrc32
        }
    })
});
var wvB = U((J2G, $vB) => {
    var {
        defineProperty: VtA,
        getOwnPropertyDescriptor: zS6,
        getOwnPropertyNames: US6
    } = Object, $S6 = Object.prototype.hasOwnProperty, HvB = (A, Q) => VtA(A, "name", {
        value: Q,
        configurable: !0
    }), wS6 = (A, Q) => {
        for (var B in Q) VtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qS6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of US6(Q))
                if (!$S6.call(A, Z) && Z !== B) VtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zS6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, NS6 = (A) => qS6(VtA({}, "__esModule", {
        value: !0
    }), A), CvB = {};
    wS6(CvB, {
        fromHex: () => zvB,
        toHex: () => UvB
    });
    $vB.exports = NS6(CvB);

var EvB = {},
        Yp1 = {};
    for (let A = 0; A < 256; A++) {
        let Q = A.toString(16).toLowerCase();
        if (Q.length === 1) Q = `0${Q}`;
        EvB[A] = Q, Yp1[Q] = A
    }

function zvB(A) {
        if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
        let Q = new Uint8Array(A.length / 2);
        for (let B = 0; B < A.length; B += 2) {
            let G = A.slice(B, B + 2).toLowerCase();
            if (G in Yp1) Q[B / 2] = Yp1[G];
            else throw Error(`Cannot decode unrecognized sequence ${G} as hexadecimal`)
        }
        return Q
    }
    HvB(zvB, "fromHex");

function UvB(A) {
        let Q = "";
        for (let B = 0; B < A.byteLength; B++) Q += EvB[A[B]];
        return Q
    }
    HvB(UvB, "toHex")
});
var xvB = U((W2G, yvB) => {
    var {
        defineProperty: DtA,
        getOwnPropertyDescriptor: LS6,
        getOwnPropertyNames: MS6
    } = Object, OS6 = Object.prototype.hasOwnProperty, Cf = (A, Q) => DtA(A, "name", {
        value: Q,
        configurable: !0
    }), RS6 = (A, Q) => {
        for (var B in Q) DtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, TS6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of MS6(Q))
                if (!OS6.call(A, Z) && Z !== B) DtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = LS6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, PS6 = (A) => TS6(DtA({}, "__esModule", {
        value: !0
    }), A), NvB = {};
    RS6(NvB, {
        EventStreamCodec: () => mS6,
        HeaderMarshaller: () => OvB,
        Int64: () => KtA,
        MessageDecoderStream: () => dS6,
        MessageEncoderStream: () => cS6,
        SmithyMessageDecoderStream: () => pS6,
        SmithyMessageEncoderStream: () => lS6
    });
    yvB.exports = PS6(NvB);
    var jS6 = FtA(),
        ze = wvB(),
        LvB = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`${Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) Jp1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) Jp1(Q);
                return parseInt((0, ze.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };
    Cf(LvB, "Int64");
    var KtA = LvB;

function Jp1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    Cf(Jp1, "negate");

var MvB = class {
        constructor(Q, B) {
            this.toUtf8 = Q, this.fromUtf8 = B
        }
        format(Q) {
            let B = [];
            for (let I of Object.keys(Q)) {
                let Y = this.fromUtf8(I);
                B.push(Uint8Array.from([Y.byteLength]), Y, this.formatHeaderValue(Q[I]))
            }
            let G = new Uint8Array(B.reduce((I, Y) => I + Y.byteLength, 0)),
                Z = 0;
            for (let I of B) G.set(I, Z), Z += I.byteLength;
            return G
        }
        formatHeaderValue(Q) {
            switch (Q.type) {
                case "boolean":
                    return Uint8Array.from([Q.value ? 0 : 1]);
                case "byte":
                    return Uint8Array.from([2, Q.value]);
                case "short":
                    let B = new DataView(new ArrayBuffer(3));
                    return B.setUint8(0, 3), B.setInt16(1, Q.value, !1), new Uint8Array(B.buffer);
                case "integer":
                    let G = new DataView(new ArrayBuffer(5));
                    return G.setUint8(0, 4), G.setInt32(1, Q.value, !1), new Uint8Array(G.buffer);
                case "long":
                    let Z = new Uint8Array(9);
                    return Z[0] = 5, Z.set(Q.value.bytes, 1), Z;
                case "binary":
                    let I = new DataView(new ArrayBuffer(3 + Q.value.byteLength));
                    I.setUint8(0, 6), I.setUint16(1, Q.value.byteLength, !1);
                    let Y = new Uint8Array(I.buffer);
                    return Y.set(Q.value, 3), Y;
                case "string":
                    let J = this.fromUtf8(Q.value),
                        W = new DataView(new ArrayBuffer(3 + J.byteLength));
                    W.setUint8(0, 7), W.setUint16(1, J.byteLength, !1);
                    let X = new Uint8Array(W.buffer);
                    return X.set(J, 3), X;
                case "timestamp":
                    let F = new Uint8Array(9);
                    return F[0] = 8, F.set(KtA.fromNumber(Q.value.valueOf()).bytes, 1), F;
                case "uuid":
                    if (!hS6.test(Q.value)) throw Error(`Invalid UUID received: ${Q.value}`);
                    let V = new Uint8Array(17);
                    return V[0] = 9, V.set((0, ze.fromHex)(Q.value.replace(/\-/g, "")), 1), V
            }
        }
        parse(Q) {
            let B = {},
                G = 0;
            while (G < Q.byteLength) {
                let Z = Q.getUint8(G++),
                    I = this.toUtf8(new Uint8Array(Q.buffer, Q.byteOffset + G, Z));
                switch (G += Z, Q.getUint8(G++)) {
                    case 0:
                        B[I] = {
                            type: qvB,
                            value: !0
                        };
                        break;
                    case 1:
                        B[I] = {
                            type: qvB,
                            value: !1
                        };
                        break;
                    case 2:
                        B[I] = {
                            type: SS6,
                            value: Q.getInt8(G++)
                        };
                        break;
                    case 3:
                        B[I] = {
                            type: _S6,
                            value: Q.getInt16(G, !1)
                        }, G += 2;
                        break;
                    case 4:
                        B[I] = {
                            type: kS6,
                            value: Q.getInt32(G, !1)
                        }, G += 4;
                        break;
                    case 5:
                        B[I] = {
                            type: yS6,
                            value: new KtA(new Uint8Array(Q.buffer, Q.byteOffset + G, 8))
                        }, G += 8;
                        break;
                    case 6:
                        let Y = Q.getUint16(G, !1);
                        G += 2, B[I] = {
                            type: xS6,
                            value: new Uint8Array(Q.buffer, Q.byteOffset + G, Y)
                        }, G += Y;
                        break;
                    case 7:
                        let J = Q.getUint16(G, !1);
                        G += 2, B[I] = {
                            type: vS6,
                            value: this.toUtf8(new Uint8Array(Q.buffer, Q.byteOffset + G, J))
                        }, G += J;
                        break;
                    case 8:
                        B[I] = {
                            type: bS6,
                            value: new Date(new KtA(new Uint8Array(Q.buffer, Q.byteOffset + G, 8)).valueOf())
                        }, G += 8;
                        break;
                    case 9:
                        let W = new Uint8Array(Q.buffer, Q.byteOffset + G, 16);
                        G += 16, B[I] = {
                            type: fS6,
                            value: `${(0,ze.toHex)(W.subarray(0,4))}-${(0,ze.toHex)(W.subarray(4,6))}-${(0,ze.toHex)(W.subarray(6,8))}-${(0,ze.toHex)(W.subarray(8,10))}-${(0,ze.toHex)(W.subarray(10))}`
                        };
                        break;
                    default:
                        throw Error("Unrecognized header type tag")
                }
            }
            return B
        }
    };
    Cf(MvB, "HeaderMarshaller");
    var OvB = MvB,
        qvB = "boolean",
        SS6 = "byte",
        _S6 = "short",
        kS6 = "integer",
        yS6 = "long",
        xS6 = "binary",
        vS6 = "string",
        bS6 = "timestamp",
        fS6 = "uuid",
        hS6 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        gS6 = FtA(),
        RvB = 4,
        dp = RvB * 2,
        Ue = 4,
        uS6 = dp + Ue * 2;

function TvB({
        byteLength: A,
        byteOffset: Q,
        buffer: B
    }) {
        if (A < uS6) throw Error("Provided message too short to accommodate event stream message overhead");
        let G = new DataView(B, Q, A),
            Z = G.getUint32(0, !1);
        if (A !== Z) throw Error("Reported message length does not match received message length");
        let I = G.getUint32(RvB, !1),
            Y = G.getUint32(dp, !1),
            J = G.getUint32(A - Ue, !1),
            W = new gS6.Crc32().update(new Uint8Array(B, Q, dp));
        if (Y !== W.digest()) throw Error(`The prelude checksum specified in the message (${Y}) does not match the calculated CRC32 checksum (${W.digest()})`);
        if (W.update(new Uint8Array(B, Q + dp, A - (dp + Ue))), J !== W.digest()) throw Error(`The message checksum (${W.digest()}) did not match the expected value of ${J}`);
        return {
            headers: new DataView(B, Q + dp + Ue, I),
            body: new Uint8Array(B, Q + dp + Ue + I, Z - I - (dp + Ue + Ue))
        }
    }
    Cf(TvB, "splitMessage");

var PvB = class {
        constructor(Q, B) {
            this.headerMarshaller = new OvB(Q, B), this.messageBuffer = [], this.isEndOfStream = !1
        }
        feed(Q) {
            this.messageBuffer.push(this.decode(Q))
        }
        endOfStream() {
            this.isEndOfStream = !0
        }
        getMessage() {
            let Q = this.messageBuffer.pop(),
                B = this.isEndOfStream;
            return {
                getMessage() {
                    return Q
                },
                isEndOfStream() {
                    return B
                }
            }
        }
        getAvailableMessages() {
            let Q = this.messageBuffer;
            this.messageBuffer = [];
            let B = this.isEndOfStream;
            return {
                getMessages() {
                    return Q
                },
                isEndOfStream() {
                    return B
                }
            }
        }
        encode({
            headers: Q,
            body: B
        }) {
            let G = this.headerMarshaller.format(Q),
                Z = G.byteLength + B.byteLength + 16,
                I = new Uint8Array(Z),
                Y = new DataView(I.buffer, I.byteOffset, I.byteLength),
                J = new jS6.Crc32;
            return Y.setUint32(0, Z, !1), Y.setUint32(4, G.byteLength, !1), Y.setUint32(8, J.update(I.subarray(0, 8)).digest(), !1), I.set(G, 12), I.set(B, G.byteLength + 12), Y.setUint32(Z - 4, J.update(I.subarray(8, Z - 4)).digest(), !1), I
        }
        decode(Q) {
            let {
                headers: B,
                body: G
            } = TvB(Q);
            return {
                headers: this.headerMarshaller.parse(B),
                body: G
            }
        }
        formatHeaders(Q) {
            return this.headerMarshaller.format(Q)
        }
    };
    Cf(PvB, "EventStreamCodec");
    var mS6 = PvB,
        jvB = class {
            constructor(Q) {
                this.options = Q
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let Q of this.options.inputStream) yield this.options.decoder.decode(Q)
            }
        };
    Cf(jvB, "MessageDecoderStream");
    var dS6 = jvB,
        SvB = class {
            constructor(Q) {
                this.options = Q
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let Q of this.options.messageStream) yield this.options.encoder.encode(Q);
                if (this.options.includeEndFrame) yield new Uint8Array(0)
            }
        };
    Cf(SvB, "MessageEncoderStream");
    var cS6 = SvB,
        _vB = class {
            constructor(Q) {
                this.options = Q
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let Q of this.options.messageStream) {
                    let B = await this.options.deserializer(Q);
                    if (B === void 0) continue;
                    yield B
                }
            }
        };
    Cf(_vB, "SmithyMessageDecoderStream");
    var pS6 = _vB,
        kvB = class {
            constructor(Q) {
                this.options = Q
            } [Symbol.asyncIterator]() {
                return this.asyncIterator()
            }
            async * asyncIterator() {
                for await (let Q of this.options.inputStream) yield this.options.serializer(Q)
            }
        };
    Cf(kvB, "SmithyMessageEncoderStream");
    var lS6 = kvB
});
var mvB = U((X2G, uvB) => {
    var {
        defineProperty: HtA,
        getOwnPropertyDescriptor: iS6,
        getOwnPropertyNames: nS6
    } = Object, aS6 = Object.prototype.hasOwnProperty, fGA = (A, Q) => HtA(A, "name", {
        value: Q,
        configurable: !0
    }), sS6 = (A, Q) => {
        for (var B in Q) HtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, rS6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of nS6(Q))
                if (!aS6.call(A, Z) && Z !== B) HtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = iS6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, oS6 = (A) => rS6(HtA({}, "__esModule", {
        value: !0
    }), A), vvB = {};
    sS6(vvB, {
        EventStreamMarshaller: () => gvB,
        eventStreamSerdeProvider: () => tS6
    });
    uvB.exports = oS6(vvB);
    var RwA = xvB();

function bvB(A) {
        let Q = 0,
            B = 0,
            G = null,
            Z = null,
            I = fGA((J) => {
                if (typeof J !== "number") throw Error("Attempted to allocate an event message where size was not a number: " + J);
                Q = J, B = 4, G = new Uint8Array(J), new DataView(G.buffer).setUint32(0, J, !1)
            }, "allocateMessage"),
            Y = fGA(async function*() {
                let J = A[Symbol.asyncIterator]();
                while (!0) {
                    let {
                        value: W,
                        done: X
                    } = await J.next();
                    if (X) {
                        if (!Q) return;
                        else if (Q === B) yield G;
                        else throw Error("Truncated event message received.");
                        return
                    }
                    let F = W.length,
                        V = 0;
                    while (V < F) {
                        if (!G) {
                            let D = F - V;
                            if (!Z) Z = new Uint8Array(4);
                            let H = Math.min(4 - B, D);
                            if (Z.set(W.slice(V, V + H), B), B += H, V += H, B < 4) break;
                            I(new DataView(Z.buffer).getUint32(0, !1)), Z = null
                        }
                        let K = Math.min(Q - B, F - V);
                        if (G.set(W.slice(V, V + K), B), B += K, V += K, Q && Q === B) yield G, G = null, Q = 0, B = 0
                    }
                }
            }, "iterator");
        return {
            [Symbol.asyncIterator]: Y
        }
    }
    fGA(bvB, "getChunkedStream");

function fvB(A, Q) {
        return async function(B) {
            let {
                value: G
            } = B.headers[":message-type"];
            if (G === "error") {
                let Z = Error(B.headers[":error-message"].value || "UnknownError");
                throw Z.name = B.headers[":error-code"].value, Z
            } else if (G === "exception") {
                let Z = B.headers[":exception-type"].value,
                    I = {
                        [Z]: B
                    },
                    Y = await A(I);
                if (Y.$unknown) {
                    let J = Error(Q(B.body));
                    throw J.name = Z, J
                }
                throw Y[Z]
            } else if (G === "event") {
                let Z = {
                        [B.headers[":event-type"].value]: B
                    },
                    I = await A(Z);
                if (I.$unknown) return;
                return I
            } else throw Error(`Unrecognizable event type: ${B.headers[":event-type"].value}`)
        }
    }
    fGA(fvB, "getMessageUnmarshaller");

var hvB = class {
        constructor({
            utf8Encoder: Q,
            utf8Decoder: B
        }) {
            this.eventStreamCodec = new RwA.EventStreamCodec(Q, B), this.utfEncoder = Q
        }
        deserialize(Q, B) {
            let G = bvB(Q);
            return new RwA.SmithyMessageDecoderStream({
                messageStream: new RwA.MessageDecoderStream({
                    inputStream: G,
                    decoder: this.eventStreamCodec
                }),
                deserializer: fvB(B, this.utfEncoder)
            })
        }
        serialize(Q, B) {
            return new RwA.MessageEncoderStream({
                messageStream: new RwA.SmithyMessageEncoderStream({
                    inputStream: Q,
                    serializer: B
                }),
                encoder: this.eventStreamCodec,
                includeEndFrame: !0
            })
        }
    };
    fGA(hvB, "EventStreamMarshaller");
    var gvB = hvB,
        tS6 = fGA((A) => new gvB(A), "eventStreamSerdeProvider")
});
var nvB = U((F2G, ivB) => {
    var {
        defineProperty: CtA,
        getOwnPropertyDescriptor: eS6,
        getOwnPropertyNames: A_6
    } = Object, Q_6 = Object.prototype.hasOwnProperty, Wp1 = (A, Q) => CtA(A, "name", {
        value: Q,
        configurable: !0
    }), B_6 = (A, Q) => {
        for (var B in Q) CtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, G_6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of A_6(Q))
                if (!Q_6.call(A, Z) && Z !== B) CtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = eS6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Z_6 = (A) => G_6(CtA({}, "__esModule", {
        value: !0
    }), A), dvB = {};
    B_6(dvB, {
        EventStreamMarshaller: () => lvB,
        eventStreamSerdeProvider: () => J_6
    });
    ivB.exports = Z_6(dvB);
    var I_6 = mvB(),
        Y_6 = UA("stream");
    async function* cvB(A) {
        let Q = !1,
            B = !1,
            G = [];
        A.on("error", (Z) => {
            if (!Q) Q = !0;
            if (Z) throw Z
        }), A.on("data", (Z) => {
            G.push(Z)
        }), A.on("end", () => {
            Q = !0
        });
        while (!B) {
            let Z = await new Promise((I) => setTimeout(() => I(G.shift()), 0));
            if (Z) yield Z;
            B = Q && G.length === 0
        }
    }
    Wp1(cvB, "readabletoIterable");

var pvB = class {
        constructor({
            utf8Encoder: Q,
            utf8Decoder: B
        }) {
            this.universalMarshaller = new I_6.EventStreamMarshaller({
                utf8Decoder: B,
                utf8Encoder: Q
            })
        }
        deserialize(Q, B) {
            let G = typeof Q[Symbol.asyncIterator] === "function" ? Q : cvB(Q);
            return this.universalMarshaller.deserialize(G, B)
        }
        serialize(Q, B) {
            return Y_6.Readable.from(this.universalMarshaller.serialize(Q, B))
        }
    };
    Wp1(pvB, "EventStreamMarshaller");
    var lvB = pvB,
        J_6 = Wp1((A) => new lvB(A), "eventStreamSerdeProvider")
});
var rvB = U((V2G, svB) => {
    var {
        defineProperty: EtA,
        getOwnPropertyDescriptor: W_6,
        getOwnPropertyNames: X_6
    } = Object, F_6 = Object.prototype.hasOwnProperty, V_6 = (A, Q) => EtA(A, "name", {
        value: Q,
        configurable: !0
    }), K_6 = (A, Q) => {
        for (var B in Q) EtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, D_6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of X_6(Q))
                if (!F_6.call(A, Z) && Z !== B) EtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = W_6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, H_6 = (A) => D_6(EtA({}, "__esModule", {
        value: !0
    }), A), avB = {};
    K_6(avB, {
        isArrayBuffer: () => C_6
    });
    svB.exports = H_6(avB);
    var C_6 = V_6((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var UtA = U((K2G, evB) => {
    var {
        defineProperty: ztA,
        getOwnPropertyDescriptor: E_6,
        getOwnPropertyNames: z_6
    } = Object, U_6 = Object.prototype.hasOwnProperty, ovB = (A, Q) => ztA(A, "name", {
        value: Q,
        configurable: !0
    }), $_6 = (A, Q) => {
        for (var B in Q) ztA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, w_6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of z_6(Q))
                if (!U_6.call(A, Z) && Z !== B) ztA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = E_6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, q_6 = (A) => w_6(ztA({}, "__esModule", {
        value: !0
    }), A), tvB = {};
    $_6(tvB, {
        fromArrayBuffer: () => L_6,
        fromString: () => M_6
    });
    evB.exports = q_6(tvB);
    var N_6 = rvB(),
        Xp1 = UA("buffer"),
        L_6 = ovB((A, Q = 0, B = A.byteLength - Q) => {
            if (!(0, N_6.isArrayBuffer)(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
            return Xp1.Buffer.from(A, Q, B)
        }, "fromArrayBuffer"),
        M_6 = ovB((A, Q) => {
            if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
            return Q ? Xp1.Buffer.from(A, Q) : Xp1.Buffer.from(A)
        }, "fromString")
});
var BbB = U((AbB) => {
    Object.defineProperty(AbB, "__esModule", {
        value: !0
    });
    AbB.fromBase64 = void 0;
    var O_6 = UtA(),
        R_6 = /^[A-Za-z0-9+/]*={0,2}$/,
        T_6 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!R_6.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, O_6.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    AbB.fromBase64 = T_6
});
var JbB = U((H2G, YbB) => {
    var {
        defineProperty: $tA,
        getOwnPropertyDescriptor: P_6,
        getOwnPropertyNames: j_6
    } = Object, S_6 = Object.prototype.hasOwnProperty, Fp1 = (A, Q) => $tA(A, "name", {
        value: Q,
        configurable: !0
    }), __6 = (A, Q) => {
        for (var B in Q) $tA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, k_6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of j_6(Q))
                if (!S_6.call(A, Z) && Z !== B) $tA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = P_6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, y_6 = (A) => k_6($tA({}, "__esModule", {
        value: !0
    }), A), GbB = {};
    __6(GbB, {
        fromUtf8: () => IbB,
        toUint8Array: () => x_6,
        toUtf8: () => v_6
    });
    YbB.exports = y_6(GbB);
    var ZbB = UtA(),
        IbB = Fp1((A) => {
            let Q = (0, ZbB.fromString)(A, "utf8");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength / Uint8Array.BYTES_PER_ELEMENT)
        }, "fromUtf8"),
        x_6 = Fp1((A) => {
            if (typeof A === "string") return IbB(A);
            if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
            return new Uint8Array(A)
        }, "toUint8Array"),
        v_6 = Fp1((A) => {
            if (typeof A === "string") return A;
            if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
            return (0, ZbB.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8")
        }, "toUtf8")
});