/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.964Z
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 4/34
 * Lines: 59807 - 61306 (1500 lines)
 * Original file: cli.js
 */

                        q.addEventListener("abort", N, {
                            once: !0
                        }), H = AS(() => q.removeEventListener("abort", N), "removeSignalEventListener")
                    } else B.onabort = N
                }));
                return Promise.race(E).finally(H)
            }
            updateHttpClientConfig(Q, B) {
                this.config = void 0, this.configProvider = this.configProvider.then((G) => {
                    return G[Q] = B, G
                })
            }
            httpHandlerConfigs() {
                return this.config ?? {}
            }
        },
        MX4 = X4A(),
        OX4 = AS(async (A) => {
            if (typeof Blob === "function" && A instanceof Blob || A.constructor?.name === "Blob") {
                if (Blob.prototype.arrayBuffer !== void 0) return new Uint8Array(await A.arrayBuffer());
                return cr0(A)
            }
            return pr0(A)
        }, "streamCollector");

async function cr0(A) {
        let Q = await lr0(A),
            B = (0, MX4.fromBase64)(Q);
        return new Uint8Array(B)
    }
    AS(cr0, "collectBlob");

async function pr0(A) {
        let Q = [],
            B = A.getReader(),
            G = !1,
            Z = 0;
        while (!G) {
            let {
                done: J,
                value: W
            } = await B.read();
            if (W) Q.push(W), Z += W.length;
            G = J
        }
        let I = new Uint8Array(Z),
            Y = 0;
        for (let J of Q) I.set(J, Y), Y += J.length;
        return I
    }
    AS(pr0, "collectStream");

function lr0(A) {
        return new Promise((Q, B) => {
            let G = new FileReader;
            G.onloadend = () => {
                if (G.readyState !== 2) return B(Error("Reader aborted too early"));
                let Z = G.result ?? "",
                    I = Z.indexOf(","),
                    Y = I > -1 ? I + 1 : Z.length;
                Q(Z.substring(Y))
            }, G.onabort = () => B(Error("Read aborted")), G.onerror = () => B(G.error), G.readAsDataURL(A)
        })
    }
    AS(lr0, "readToBase64")
});
var mm = U((xY7, er0) => {
    var {
        defineProperty: ObA,
        getOwnPropertyDescriptor: RX4,
        getOwnPropertyNames: TX4
    } = Object, PX4 = Object.prototype.hasOwnProperty, ar0 = (A, Q) => ObA(A, "name", {
        value: Q,
        configurable: !0
    }), jX4 = (A, Q) => {
        for (var B in Q) ObA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, SX4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of TX4(Q))
                if (!PX4.call(A, Z) && Z !== B) ObA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = RX4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, _X4 = (A) => SX4(ObA({}, "__esModule", {
        value: !0
    }), A), sr0 = {};
    jX4(sr0, {
        fromHex: () => or0,
        toHex: () => tr0
    });
    er0.exports = _X4(sr0);

var rr0 = {},
        xE1 = {};
    for (let A = 0; A < 256; A++) {
        let Q = A.toString(16).toLowerCase();
        if (Q.length === 1) Q = `0${Q}`;
        rr0[A] = Q, xE1[Q] = A
    }

function or0(A) {
        if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
        let Q = new Uint8Array(A.length / 2);
        for (let B = 0; B < A.length; B += 2) {
            let G = A.slice(B, B + 2).toLowerCase();
            if (G in xE1) Q[B / 2] = xE1[G];
            else throw Error(`Cannot decode unrecognized sequence ${G} as hexadecimal`)
        }
        return Q
    }
    ar0(or0, "fromHex");

function tr0(A) {
        let Q = "";
        for (let B = 0; B < A.byteLength; B++) Q += rr0[A[B]];
        return Q
    }
    ar0(tr0, "toHex")
});
var Io0 = U((Go0) => {
    Object.defineProperty(Go0, "__esModule", {
        value: !0
    });
    Go0.sdkStreamMixin = void 0;
    var kX4 = nr0(),
        yX4 = X4A(),
        xX4 = mm(),
        vX4 = L2(),
        Ao0 = hm(),
        Qo0 = "The stream has already been transformed.",
        bX4 = (A) => {
            var Q, B;
            if (!Bo0(A) && !(0, Ao0.isReadableStream)(A)) {
                let Y = ((B = (Q = A === null || A === void 0 ? void 0 : A.__proto__) === null || Q === void 0 ? void 0 : Q.constructor) === null || B === void 0 ? void 0 : B.name) || A;
                throw Error(`Unexpected stream implementation, expect Blob or ReadableStream, got ${Y}`)
            }
            let G = !1,
                Z = async () => {
                    if (G) throw Error(Qo0);
                    return G = !0, await (0, kX4.streamCollector)(A)
                }, I = (Y) => {
                    if (typeof Y.stream !== "function") throw Error(`Cannot transform payload Blob to web stream. Please make sure the Blob.stream() is polyfilled.
If you are using React Native, this API is not yet supported, see: https://react-native.canny.io/feature-requests/p/fetch-streaming-body`);
                    return Y.stream()
                };
            return Object.assign(A, {
                transformToByteArray: Z,
                transformToString: async (Y) => {
                    let J = await Z();
                    if (Y === "base64") return (0, yX4.toBase64)(J);
                    else if (Y === "hex") return (0, xX4.toHex)(J);
                    else if (Y === void 0 || Y === "utf8" || Y === "utf-8") return (0, vX4.toUtf8)(J);
                    else if (typeof TextDecoder === "function") return new TextDecoder(Y).decode(J);
                    else throw Error("TextDecoder is not available, please make sure polyfill is provided.")
                },
                transformToWebStream: () => {
                    if (G) throw Error(Qo0);
                    if (G = !0, Bo0(A)) return I(A);
                    else if ((0, Ao0.isReadableStream)(A)) return A;
                    else throw Error(`Cannot transform payload to web stream, got ${A}`)
                }
            })
        };
    Go0.sdkStreamMixin = bX4;
    var Bo0 = (A) => typeof Blob === "function" && A instanceof Blob
});
var Xo0 = U((Jo0) => {
    Object.defineProperty(Jo0, "__esModule", {
        value: !0
    });
    Jo0.sdkStreamMixin = void 0;
    var fX4 = oG(),
        hX4 = kI(),
        vE1 = UA("stream"),
        gX4 = Io0(),
        Yo0 = "The stream has already been transformed.",
        uX4 = (A) => {
            var Q, B;
            if (!(A instanceof vE1.Readable)) try {
                return (0, gX4.sdkStreamMixin)(A)
            } catch (I) {
                let Y = ((B = (Q = A === null || A === void 0 ? void 0 : A.__proto__) === null || Q === void 0 ? void 0 : Q.constructor) === null || B === void 0 ? void 0 : B.name) || A;
                throw Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${Y}`)
            }
            let G = !1,
                Z = async () => {
                    if (G) throw Error(Yo0);
                    return G = !0, await (0, fX4.streamCollector)(A)
                };
            return Object.assign(A, {
                transformToByteArray: Z,
                transformToString: async (I) => {
                    let Y = await Z();
                    if (I === void 0 || Buffer.isEncoding(I)) return (0, hX4.fromArrayBuffer)(Y.buffer, Y.byteOffset, Y.byteLength).toString(I);
                    else return new TextDecoder(I).decode(Y)
                },
                transformToWebStream: () => {
                    if (G) throw Error(Yo0);
                    if (A.readableFlowing !== null) throw Error("The stream has been consumed by other callbacks.");
                    if (typeof vE1.Readable.toWeb !== "function") throw Error("Readable.toWeb() is not supported. Please ensure a polyfill is available.");
                    return G = !0, vE1.Readable.toWeb(A)
                }
            })
        };
    Jo0.sdkStreamMixin = uX4
});
var Vo0 = U((Fo0) => {
    Object.defineProperty(Fo0, "__esModule", {
        value: !0
    });
    Fo0.splitStream = mX4;

async function mX4(A) {
        if (typeof A.stream === "function") A = A.stream();
        return A.tee()
    }
});
var Co0 = U((Ho0) => {
    Object.defineProperty(Ho0, "__esModule", {
        value: !0
    });
    Ho0.splitStream = pX4;
    var Ko0 = UA("stream"),
        cX4 = Vo0(),
        Do0 = hm();

async function pX4(A) {
        if ((0, Do0.isReadableStream)(A) || (0, Do0.isBlob)(A)) return (0, cX4.splitStream)(A);
        let Q = new Ko0.PassThrough,
            B = new Ko0.PassThrough;
        return A.pipe(Q), A.pipe(B), [Q, B]
    }
});
var cm = U((gY7, BS) => {
    var {
        defineProperty: RbA,
        getOwnPropertyDescriptor: iX4,
        getOwnPropertyNames: nX4
    } = Object, aX4 = Object.prototype.hasOwnProperty, hE1 = (A, Q) => RbA(A, "name", {
        value: Q,
        configurable: !0
    }), sX4 = (A, Q) => {
        for (var B in Q) RbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, bE1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of nX4(Q))
                if (!aX4.call(A, Z) && Z !== B) RbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = iX4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, dm = (A, Q, B) => (bE1(A, Q, "default"), B && bE1(B, Q, "default")), rX4 = (A) => bE1(RbA({}, "__esModule", {
        value: !0
    }), A), QS = {};
    sX4(QS, {
        Uint8ArrayBlobAdapter: () => fE1
    });
    BS.exports = rX4(QS);
    var Eo0 = X4A(),
        zo0 = L2();

function Uo0(A, Q = "utf-8") {
        if (Q === "base64") return (0, Eo0.toBase64)(A);
        return (0, zo0.toUtf8)(A)
    }
    hE1(Uo0, "transformToString");

    function $o0(A, Q) {
        if (Q === "base64") return fE1.mutate((0, Eo0.fromBase64)(A));
        return fE1.mutate((0, zo0.fromUtf8)(A))
    }
    hE1($o0, "transformFromString");

var fE1 = class A extends Uint8Array {
        static {
            hE1(this, "Uint8ArrayBlobAdapter")
        }
        static fromString(Q, B = "utf-8") {
            switch (typeof Q) {
                case "string":
                    return $o0(Q, B);
                default:
                    throw Error(`Unsupported conversion from ${typeof Q} to Uint8ArrayBlobAdapter.`)
            }
        }
        static mutate(Q) {
            return Object.setPrototypeOf(Q, A.prototype), Q
        }
        transformToString(Q = "utf-8") {
            return Uo0(this, Q)
        }
    };
    dm(QS, ME1(), BS.exports);
    dm(QS, Fs0(), BS.exports);
    dm(QS, Ns0(), BS.exports);
    dm(QS, Os0(), BS.exports);
    dm(QS, _s0(), BS.exports);
    dm(QS, Xo0(), BS.exports);
    dm(QS, Co0(), BS.exports);
    dm(QS, hm(), BS.exports)
});
var y4 = U((uY7, Oo0) => {
    var {
        defineProperty: uE1,
        getOwnPropertyDescriptor: oX4,
        getOwnPropertyNames: tX4
    } = Object, eX4 = Object.prototype.hasOwnProperty, AF4 = (A, Q) => {
        for (var B in Q) uE1(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, QF4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of tX4(Q))
                if (!eX4.call(A, Z) && Z !== B) uE1(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = oX4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, BF4 = (A) => QF4(uE1({}, "__esModule", {
        value: !0
    }), A), wo0 = {};
    AF4(wo0, {
        ErrorSchema: () => Mo0,
        ListSchema: () => mE1,
        MapSchema: () => dE1,
        NormalizedSchema: () => CF4,
        OperationSchema: () => Lo0,
        SCHEMA: () => JW,
        Schema: () => V4A,
        SimpleSchema: () => cE1,
        StructureSchema: () => TbA,
        TypeRegistry: () => Xr,
        deref: () => sKA,
        deserializerMiddlewareOption: () => qo0,
        error: () => DF4,
        getSchemaSerdePlugin: () => WF4,
        list: () => XF4,
        map: () => FF4,
        op: () => VF4,
        serializerMiddlewareOption: () => No0,
        sim: () => HF4,
        struct: () => KF4
    });
    Oo0.exports = BF4(wo0);
    var sKA = (A) => {
            if (typeof A === "function") return A();
            return A
        },
        GF4 = Wr(),
        ZF4 = K7(),
        IF4 = (A) => (Q, B) => async (G) => {
            let {
                response: Z
            } = await Q(G), {
                operationSchema: I
            } = (0, ZF4.getSmithyContext)(B);
            try {
                let Y = await A.protocol.deserializeResponse(I, {
                    ...A,
                    ...B
                }, Z);
                return {
                    response: Z,
                    output: Y
                }
            } catch (Y) {
                if (Object.defineProperty(Y, "$response", {
                        value: Z
                    }), !("$metadata" in Y)) {
                    try {
                        Y.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`
                    } catch (W) {
                        if (!B.logger || B.logger?.constructor?.name === "NoOpLogger") console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
                        else B.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.")
                    }
                    if (typeof Y.$responseBodyText < "u") {
                        if (Y.$response) Y.$response.body = Y.$responseBodyText
                    }
                    try {
                        if (GF4.HttpResponse.isInstance(Z)) {
                            let {
                                headers: W = {}
                            } = Z, X = Object.entries(W);
                            Y.$metadata = {
                                httpStatusCode: Z.statusCode,
                                requestId: gE1(/^x-[\w-]+-request-?id$/, X),
                                extendedRequestId: gE1(/^x-[\w-]+-id-2$/, X),
                                cfId: gE1(/^x-[\w-]+-cf-id$/, X)
                            }
                        }
                    } catch (W) {}
                }
                throw Y
            }
        }, gE1 = (A, Q) => {
            return (Q.find(([B]) => {
                return B.match(A)
            }) || [void 0, void 0])[1]
        }, YF4 = K7(), JF4 = (A) => (Q, B) => async (G) => {
            let {
                operationSchema: Z
            } = (0, YF4.getSmithyContext)(B), I = B.endpointV2?.url && A.urlParser ? async () => A.urlParser(B.endpointV2.url): A.endpoint, Y = await A.protocol.serializeRequest(Z, G.input, {
                ...A,
                ...B,
                endpoint: I
            });
            return Q({
                ...G,
                request: Y
            })
        }, qo0 = {
            name: "deserializerMiddleware",
            step: "deserialize",
            tags: ["DESERIALIZER"],
            override: !0
        }, No0 = {
            name: "serializerMiddleware",
            step: "serialize",
            tags: ["SERIALIZER"],
            override: !0
        };

function WF4(A) {
        return {
            applyToStack: (Q) => {
                Q.add(JF4(A), No0), Q.add(IF4(A), qo0), A.protocol.setSerdeContext(A)
            }
        }
    }

var Xr = class A {
            constructor(Q, B = new Map) {
                this.namespace = Q, this.schemas = B
            }
            static {
                this.registries = new Map
            }
            static
            for (Q) {
                if (!A.registries.has(Q)) A.registries.set(Q, new A(Q));
                return A.registries.get(Q)
            }
            register(Q, B) {
                let G = this.normalizeShapeId(Q);
                A.for(this.getNamespace(Q)).schemas.set(G, B)
            }
            getSchema(Q) {
                let B = this.normalizeShapeId(Q);
                if (!this.schemas.has(B)) throw Error(`@smithy/core/schema - schema not found for ${B}`);
                return this.schemas.get(B)
            }
            getBaseException() {
                for (let [Q, B] of this.schemas.entries())
                    if (Q.startsWith("smithy.ts.sdk.synthetic.") && Q.endsWith("ServiceException")) return B;
                return
            }
            find(Q) {
                return [...this.schemas.values()].find(Q)
            }
            destroy() {
                A.registries.delete(this.namespace), this.schemas.clear()
            }
            normalizeShapeId(Q) {
                if (Q.includes("#")) return Q;
                return this.namespace + "#" + Q
            }
            getNamespace(Q) {
                return this.normalizeShapeId(Q).split("#")[0]
            }
        },
        V4A = class {
            constructor(A, Q) {
                this.name = A, this.traits = Q
            }
        },
        mE1 = class extends V4A {
            constructor(A, Q, B) {
                super(A, Q);
                this.name = A, this.traits = Q, this.valueSchema = B
            }
        };

function XF4(A, Q, B = {}, G) {
        let Z = new mE1(A + "#" + Q, B, typeof G === "function" ? G() : G);
        return Xr.for(A).register(Q, Z), Z
    }

var dE1 = class extends V4A {
        constructor(A, Q, B, G) {
            super(A, Q);
            this.name = A, this.traits = Q, this.keySchema = B, this.valueSchema = G
        }
    };

function FF4(A, Q, B = {}, G, Z) {
        let I = new dE1(A + "#" + Q, B, G, typeof Z === "function" ? Z() : Z);
        return Xr.for(A).register(Q, I), I
    }

var Lo0 = class extends V4A {
        constructor(A, Q, B, G) {
            super(A, Q);
            this.name = A, this.traits = Q, this.input = B, this.output = G
        }
    };

function VF4(A, Q, B = {}, G, Z) {
        let I = new Lo0(A + "#" + Q, B, G, Z);
        return Xr.for(A).register(Q, I), I
    }

var TbA = class extends V4A {
        constructor(A, Q, B, G) {
            super(A, Q);
            this.name = A, this.traits = Q, this.memberNames = B, this.memberList = G, this.members = {};
            for (let Z = 0; Z < B.length; ++Z) this.members[B[Z]] = Array.isArray(G[Z]) ? G[Z] : [G[Z], 0]
        }
    };

function KF4(A, Q, B, G, Z) {
        let I = new TbA(A + "#" + Q, B, G, Z);
        return Xr.for(A).register(Q, I), I
    }

var Mo0 = class extends TbA {
        constructor(A, Q, B, G, Z) {
            super(A, Q, B, G);
            this.name = A, this.traits = Q, this.memberNames = B, this.memberList = G, this.ctor = Z
        }
    };

function DF4(A, Q, B = {}, G, Z, I) {
        let Y = new Mo0(A + "#" + Q, B, G, Z, I);
        return Xr.for(A).register(Q, Y), Y
    }

var JW = {
            BLOB: 21,
            STREAMING_BLOB: 42,
            BOOLEAN: 2,
            STRING: 0,
            NUMERIC: 1,
            BIG_INTEGER: 17,
            BIG_DECIMAL: 19,
            DOCUMENT: 15,
            TIMESTAMP_DEFAULT: 4,
            TIMESTAMP_DATE_TIME: 5,
            TIMESTAMP_HTTP_DATE: 6,
            TIMESTAMP_EPOCH_SECONDS: 7,
            LIST_MODIFIER: 64,
            MAP_MODIFIER: 128
        },
        cE1 = class extends V4A {
            constructor(A, Q, B) {
                super(A, B);
                this.name = A, this.schemaRef = Q, this.traits = B
            }
        };

function HF4(A, Q, B, G) {
        let Z = new cE1(A + "#" + Q, B, G);
        return Xr.for(A).register(Q, Z), Z
    }

var CF4 = class A {
        constructor(Q, B) {
            this.ref = Q, this.memberName = B;
            let G = [],
                Z = Q,
                I = Q;
            this._isMemberSchema = !1;
            while (Array.isArray(Z)) G.push(Z[1]), Z = Z[0], I = sKA(Z), this._isMemberSchema = !0;
            if (G.length > 0) {
                this.memberTraits = {};
                for (let Y = G.length - 1; Y >= 0; --Y) {
                    let J = G[Y];
                    Object.assign(this.memberTraits, A.translateTraits(J))
                }
            } else this.memberTraits = 0;
            if (I instanceof A) {
                this.name = I.name, this.traits = I.traits, this._isMemberSchema = I._isMemberSchema, this.schema = I.schema, this.memberTraits = Object.assign({}, I.getMemberTraits(), this.getMemberTraits()), this.normalizedTraits = void 0, this.ref = I.ref, this.memberName = B ?? I.memberName;
                return
            }
            if (this.schema = sKA(I), this.schema && typeof this.schema === "object") this.traits = this.schema?.traits ?? {};
            else this.traits = 0;
            if (this.name = (typeof this.schema === "object" ? this.schema?.name : void 0) ?? this.memberName ?? this.getSchemaName(), this._isMemberSchema && !B) throw Error(`@smithy/core/schema - NormalizedSchema member schema ${this.getName(!0)} must initialize with memberName argument.`)
        }
        static of (Q, B) {
            if (Q instanceof A) return Q;
            return new A(Q, B)
        }
        static translateTraits(Q) {
            if (typeof Q === "object") return Q;
            Q = Q | 0;
            let B = {};
            if ((Q & 1) === 1) B.httpLabel = 1;
            if ((Q >> 1 & 1) === 1) B.idempotent = 1;
            if ((Q >> 2 & 1) === 1) B.idempotencyToken = 1;
            if ((Q >> 3 & 1) === 1) B.sensitive = 1;
            if ((Q >> 4 & 1) === 1) B.httpPayload = 1;
            if ((Q >> 5 & 1) === 1) B.httpResponseCode = 1;
            if ((Q >> 6 & 1) === 1) B.httpQueryParams = 1;
            return B
        }
        static memberFrom(Q, B) {
            if (Q instanceof A) return Q.memberName = B, Q._isMemberSchema = !0, Q;
            return new A(Q, B)
        }
        getSchema() {
            if (this.schema instanceof A) return this.schema = this.schema.getSchema();
            if (this.schema instanceof cE1) return sKA(this.schema.schemaRef);
            return sKA(this.schema)
        }
        getName(Q = !1) {
            if (!Q) {
                if (this.name && this.name.includes("#")) return this.name.split("#")[1]
            }
            return this.name || void 0
        }
        getMemberName() {
            if (!this.isMemberSchema()) throw Error(`@smithy/core/schema - cannot get member name on non-member schema: ${this.getName(!0)}`);
            return this.memberName
        }
        isMemberSchema() {
            return this._isMemberSchema
        }
        isUnitSchema() {
            return this.getSchema() === "unit"
        }
        isListSchema() {
            let Q = this.getSchema();
            if (typeof Q === "number") return Q >= JW.LIST_MODIFIER && Q < JW.MAP_MODIFIER;
            return Q instanceof mE1
        }
        isMapSchema() {
            let Q = this.getSchema();
            if (typeof Q === "number") return Q >= JW.MAP_MODIFIER && Q <= 255;
            return Q instanceof dE1
        }
        isDocumentSchema() {
            return this.getSchema() === JW.DOCUMENT
        }
        isStructSchema() {
            let Q = this.getSchema();
            return Q !== null && typeof Q === "object" && "members" in Q || Q instanceof TbA
        }
        isBlobSchema() {
            return this.getSchema() === JW.BLOB || this.getSchema() === JW.STREAMING_BLOB
        }
        isTimestampSchema() {
            let Q = this.getSchema();
            return typeof Q === "number" && Q >= JW.TIMESTAMP_DEFAULT && Q <= JW.TIMESTAMP_EPOCH_SECONDS
        }
        isStringSchema() {
            return this.getSchema() === JW.STRING
        }
        isBooleanSchema() {
            return this.getSchema() === JW.BOOLEAN
        }
        isNumericSchema() {
            return this.getSchema() === JW.NUMERIC
        }
        isBigIntegerSchema() {
            return this.getSchema() === JW.BIG_INTEGER
        }
        isBigDecimalSchema() {
            return this.getSchema() === JW.BIG_DECIMAL
        }
        isStreaming() {
            if (!!this.getMergedTraits().streaming) return !0;
            return this.getSchema() === JW.STREAMING_BLOB
        }
        getMergedTraits() {
            if (this.normalizedTraits) return this.normalizedTraits;
            return this.normalizedTraits = {
                ...this.getOwnTraits(),
                ...this.getMemberTraits()
            }, this.normalizedTraits
        }
        getMemberTraits() {
            return A.translateTraits(this.memberTraits)
        }
        getOwnTraits() {
            return A.translateTraits(this.traits)
        }
        getKeySchema() {
            if (this.isDocumentSchema()) return A.memberFrom([JW.DOCUMENT, 0], "key");
            if (!this.isMapSchema()) throw Error(`@smithy/core/schema - cannot get key schema for non-map schema: ${this.getName(!0)}`);
            let Q = this.getSchema();
            if (typeof Q === "number") return A.memberFrom([63 & Q, 0], "key");
            return A.memberFrom([Q.keySchema, 0], "key")
        }
        getValueSchema() {
            let Q = this.getSchema();
            if (typeof Q === "number") {
                if (this.isMapSchema()) return A.memberFrom([63 & Q, 0], "value");
                else if (this.isListSchema()) return A.memberFrom([63 & Q, 0], "member")
            }
            if (Q && typeof Q === "object") {
                if (this.isStructSchema()) throw Error(`cannot call getValueSchema() with StructureSchema ${this.getName(!0)}`);
                let B = Q;
                if ("valueSchema" in B) {
                    if (this.isMapSchema()) return A.memberFrom([B.valueSchema, 0], "value");
                    else if (this.isListSchema()) return A.memberFrom([B.valueSchema, 0], "member")
                }
            }
            if (this.isDocumentSchema()) return A.memberFrom([JW.DOCUMENT, 0], "value");
            throw Error(`@smithy/core/schema - the schema ${this.getName(!0)} does not have a value member.`)
        }
        getMemberSchema(Q) {
            if (this.isStructSchema()) {
                let B = this.getSchema();
                if (!(Q in B.members)) throw Error(`@smithy/core/schema - the schema ${this.getName(!0)} does not have a member with name=${Q}.`);
                return A.memberFrom(B.members[Q], Q)
            }
            if (this.isDocumentSchema()) return A.memberFrom([JW.DOCUMENT, 0], Q);
            throw Error(`@smithy/core/schema - the schema ${this.getName(!0)} does not have members.`)
        }
        getMemberSchemas() {
            let {
                schema: Q
            } = this, B = Q;
            if (!B || typeof B !== "object") return {};
            if ("members" in B) {
                let G = {};
                for (let Z of B.memberNames) G[Z] = this.getMemberSchema(Z);
                return G
            }
            return {}
        }* structIterator() {
            if (this.isUnitSchema()) return;
            if (!this.isStructSchema()) throw Error("@smithy/core/schema - cannot acquire structIterator on non-struct schema.");
            let Q = this.getSchema();
            for (let B = 0; B < Q.memberNames.length; ++B) yield [Q.memberNames[B], A.memberFrom([Q.memberList[B], 0], Q.memberNames[B])]
        }
        getSchemaName() {
            let Q = this.getSchema();
            if (typeof Q === "number") {
                let B = 63 & Q,
                    G = 192 & Q,
                    Z = Object.entries(JW).find(([, I]) => {
                        return I === B
                    })?.[0] ?? "Unknown";
                switch (G) {
                    case JW.MAP_MODIFIER:
                        return `${Z}Map`;
                    case JW.LIST_MODIFIER:
                        return `${Z}List`;
                    case 0:
                        return Z
                }
            }
            return "Unknown"
        }
    }
});
var c6 = U((aY7, yo0) => {
    var {
        defineProperty: aE1,
        getOwnPropertyDescriptor: EF4,
        getOwnPropertyNames: zF4
    } = Object, UF4 = Object.prototype.hasOwnProperty, $F4 = (A, Q) => {
        for (var B in Q) aE1(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, wF4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of zF4(Q))
                if (!UF4.call(A, Z) && Z !== B) aE1(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = EF4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, qF4 = (A) => wF4(aE1({}, "__esModule", {
        value: !0
    }), A), Ro0 = {};
    $F4(Ro0, {
        LazyJsonString: () => Fr,
        NumericValue: () => ko0,
        copyDocumentWithTransform: () => rKA,
        dateToUtcString: () => gF4,
        expectBoolean: () => MF4,
        expectByte: () => nE1,
        expectFloat32: () => PbA,
        expectInt: () => RF4,
        expectInt32: () => lE1,
        expectLong: () => eKA,
        expectNonNull: () => PF4,
        expectNumber: () => tKA,
        expectObject: () => To0,
        expectShort: () => iE1,
        expectString: () => jF4,
        expectUnion: () => SF4,
        handleFloat: () => yF4,
        limitedParseDouble: () => oE1,
        limitedParseFloat: () => xF4,
        limitedParseFloat32: () => vF4,
        logger: () => ADA,
        nv: () => YV4,
        parseBoolean: () => LF4,
        parseEpochTimestamp: () => aF4,
        parseRfc3339DateTime: () => mF4,
        parseRfc3339DateTimeWithOffset: () => cF4,
        parseRfc7231DateTime: () => nF4,
        quoteHeader: () => GV4,
        splitEvery: () => ZV4,
        splitHeader: () => IV4,
        strictParseByte: () => _o0,
        strictParseDouble: () => rE1,
        strictParseFloat: () => _F4,
        strictParseFloat32: () => Po0,
        strictParseInt: () => bF4,
        strictParseInt32: () => fF4,
        strictParseLong: () => So0,
        strictParseShort: () => K4A
    });
    yo0.exports = qF4(Ro0);
    var NF4 = y4(),
        rKA = (A, Q, B = (G) => G) => {
            let G = NF4.NormalizedSchema.of(Q);
            switch (typeof A) {
                case "undefined":
                case "boolean":
                case "number":
                case "string":
                case "bigint":
                case "symbol":
                    return B(A, G);
                case "function":
                case "object":
                    if (A === null) return B(null, G);
                    if (Array.isArray(A)) {
                        let I = Array(A.length),
                            Y = 0;
                        for (let J of A) I[Y++] = rKA(J, G.getValueSchema(), B);
                        return B(I, G)
                    }
                    if ("byteLength" in A) {
                        let I = new Uint8Array(A.byteLength);
                        return I.set(A, 0), B(I, G)
                    }
                    if (A instanceof Date) return B(A, G);
                    let Z = {};
                    if (G.isMapSchema())
                        for (let I of Object.keys(A)) Z[I] = rKA(A[I], G.getValueSchema(), B);
                    else if (G.isStructSchema())
                        for (let [I, Y] of G.structIterator()) Z[I] = rKA(A[I], Y, B);
                    else if (G.isDocumentSchema())
                        for (let I of Object.keys(A)) Z[I] = rKA(A[I], G.getValueSchema(), B);
                    return B(Z, G);
                default:
                    return B(A, G)
            }
        },
        LF4 = (A) => {
            switch (A) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    throw Error(`Unable to parse boolean value "${A}"`)
            }
        },
        MF4 = (A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "number") {
                if (A === 0 || A === 1) ADA.warn(jbA(`Expected boolean, got ${typeof A}: ${A}`));
                if (A === 0) return !1;
                if (A === 1) return !0
            }
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (Q === "false" || Q === "true") ADA.warn(jbA(`Expected boolean, got ${typeof A}: ${A}`));
                if (Q === "false") return !1;
                if (Q === "true") return !0
            }
            if (typeof A === "boolean") return A;
            throw TypeError(`Expected boolean, got ${typeof A}: ${A}`)
        },
        tKA = (A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") {
                let Q = parseFloat(A);
                if (!Number.isNaN(Q)) {
                    if (String(Q) !== String(A)) ADA.warn(jbA(`Expected number but observed string: ${A}`));
                    return Q
                }
            }
            if (typeof A === "number") return A;
            throw TypeError(`Expected number, got ${typeof A}: ${A}`)
        },
        OF4 = Math.ceil(340282346638528860000000000000000000000),
        PbA = (A) => {
            let Q = tKA(A);
            if (Q !== void 0 && !Number.isNaN(Q) && Q !== 1 / 0 && Q !== -1 / 0) {
                if (Math.abs(Q) > OF4) throw TypeError(`Expected 32-bit float, got ${A}`)
            }
            return Q
        },
        eKA = (A) => {
            if (A === null || A === void 0) return;
            if (Number.isInteger(A) && !Number.isNaN(A)) return A;
            throw TypeError(`Expected integer, got ${typeof A}: ${A}`)
        },
        RF4 = eKA,
        lE1 = (A) => sE1(A, 32),
        iE1 = (A) => sE1(A, 16),
        nE1 = (A) => sE1(A, 8),
        sE1 = (A, Q) => {
            let B = eKA(A);
            if (B !== void 0 && TF4(B, Q) !== B) throw TypeError(`Expected ${Q}-bit integer, got ${A}`);
            return B
        },
        TF4 = (A, Q) => {
            switch (Q) {
                case 32:
                    return Int32Array.of(A)[0];
                case 16:
                    return Int16Array.of(A)[0];
                case 8:
                    return Int8Array.of(A)[0]
            }
        },
        PF4 = (A, Q) => {
            if (A === null || A === void 0) {
                if (Q) throw TypeError(`Expected a non-null value for ${Q}`);
                throw TypeError("Expected a non-null value")
            }
            return A
        },
        To0 = (A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "object" && !Array.isArray(A)) return A;
            let Q = Array.isArray(A) ? "array" : typeof A;
            throw TypeError(`Expected object, got ${Q}: ${A}`)
        },
        jF4 = (A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") return A;
            if (["boolean", "number", "bigint"].includes(typeof A)) return ADA.warn(jbA(`Expected string, got ${typeof A}: ${A}`)), String(A);
            throw TypeError(`Expected string, got ${typeof A}: ${A}`)
        },
        SF4 = (A) => {
            if (A === null || A === void 0) return;
            let Q = To0(A),
                B = Object.entries(Q).filter(([, G]) => G != null).map(([G]) => G);
            if (B.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
            if (B.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${B} were not null.`);
            return Q
        },
        rE1 = (A) => {
            if (typeof A == "string") return tKA(H4A(A));
            return tKA(A)
        },
        _F4 = rE1,
        Po0 = (A) => {
            if (typeof A == "string") return PbA(H4A(A));
            return PbA(A)
        },
        kF4 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        H4A = (A) => {
            let Q = A.match(kF4);
            if (Q === null || Q[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
            return parseFloat(A)
        },
        oE1 = (A) => {
            if (typeof A == "string") return jo0(A);
            return tKA(A)
        },
        yF4 = oE1,
        xF4 = oE1,
        vF4 = (A) => {
            if (typeof A == "string") return jo0(A);
            return PbA(A)
        },
        jo0 = (A) => {
            switch (A) {
                case "NaN":
                    return NaN;
                case "Infinity":
                    return 1 / 0;
                case "-Infinity":
                    return -1 / 0;
                default:
                    throw Error(`Unable to parse float value: ${A}`)
            }
        },
        So0 = (A) => {
            if (typeof A === "string") return eKA(H4A(A));
            return eKA(A)
        },
        bF4 = So0,
        fF4 = (A) => {
            if (typeof A === "string") return lE1(H4A(A));
            return lE1(A)
        },
        K4A = (A) => {
            if (typeof A === "string") return iE1(H4A(A));
            return iE1(A)
        },
        _o0 = (A) => {
            if (typeof A === "string") return nE1(H4A(A));
            return nE1(A)
        },
        jbA = (A) => {
            return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter((Q) => !Q.includes("stackTraceWarning")).join(`
`)
        },
        ADA = {
            warn: console.warn
        },
        hF4 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        tE1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function gF4(A) {
        let Q = A.getUTCFullYear(),
            B = A.getUTCMonth(),
            G = A.getUTCDay(),
            Z = A.getUTCDate(),
            I = A.getUTCHours(),
            Y = A.getUTCMinutes(),
            J = A.getUTCSeconds(),
            W = Z < 10 ? `0${Z}` : `${Z}`,
            X = I < 10 ? `0${I}` : `${I}`,
            F = Y < 10 ? `0${Y}` : `${Y}`,
            V = J < 10 ? `0${J}` : `${J}`;
        return `${hF4[G]}, ${W} ${tE1[B]} ${Q} ${X}:${F}:${V} GMT`
    }
    var uF4 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
        mF4 = (A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = uF4.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X] = Q, F = K4A(D4A(G)), V = GS(Z, "month", 1, 12), K = GS(I, "day", 1, 31);
            return oKA(F, V, K, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            })
        },
        dF4 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
        cF4 = (A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = dF4.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X, F] = Q, V = K4A(D4A(G)), K = GS(Z, "month", 1, 12), D = GS(I, "day", 1, 31), H = oKA(V, K, D, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            });
            if (F.toUpperCase() != "Z") H.setTime(H.getTime() - BV4(F));
            return H
        },
        pF4 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        lF4 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        iF4 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
        nF4 = (A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
            let Q = pF4.exec(A);
            if (Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return oKA(K4A(D4A(I)), pE1(Z), GS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                })
            }
            if (Q = lF4.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return oF4(oKA(sF4(I), pE1(Z), GS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                }))
            }
            if (Q = iF4.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return oKA(K4A(D4A(X)), pE1(G), GS(Z.trimLeft(), "day", 1, 31), {
                    hours: I,
                    minutes: Y,
                    seconds: J,
                    fractionalMilliseconds: W
                })
            }
            throw TypeError("Invalid RFC-7231 date-time value")
        },
        aF4 = (A) => {
            if (A === null || A === void 0) return;
            let Q;
            if (typeof A === "number") Q = A;
            else if (typeof A === "string") Q = rE1(A);
            else if (typeof A === "object" && A.tag === 1) Q = A.value;
            else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
            if (Number.isNaN(Q) || Q === 1 / 0 || Q === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(Q * 1000))
        },
        oKA = (A, Q, B, G) => {
            let Z = Q - 1;
            return eF4(A, Z, B), new Date(Date.UTC(A, Z, B, GS(G.hours, "hour", 0, 23), GS(G.minutes, "minute", 0, 59), GS(G.seconds, "seconds", 0, 60), QV4(G.fractionalMilliseconds)))
        },
        sF4 = (A) => {
            let Q = new Date().getUTCFullYear(),
                B = Math.floor(Q / 100) * 100 + K4A(D4A(A));
            if (B < Q) return B + 100;
            return B
        },
        rF4 = 1576800000000,
        oF4 = (A) => {
            if (A.getTime() - new Date().getTime() > rF4) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
            return A
        },
        pE1 = (A) => {
            let Q = tE1.indexOf(A);
            if (Q < 0) throw TypeError(`Invalid month: ${A}`);
            return Q + 1
        },
        tF4 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        eF4 = (A, Q, B) => {
            let G = tF4[Q];
            if (Q === 1 && AV4(A)) G = 29;
            if (B > G) throw TypeError(`Invalid day for ${tE1[Q]} in ${A}: ${B}`)
        },
        AV4 = (A) => {
            return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
        },
        GS = (A, Q, B, G) => {
            let Z = _o0(D4A(A));
            if (Z < B || Z > G) throw TypeError(`${Q} must be between ${B} and ${G}, inclusive`);
            return Z
        },
        QV4 = (A) => {
            if (A === null || A === void 0) return 0;
            return Po0("0." + A) * 1000
        },
        BV4 = (A) => {
            let Q = A[0],
                B = 1;
            if (Q == "+") B = 1;
            else if (Q == "-") B = -1;
            else throw TypeError(`Offset direction, ${Q}, must be "+" or "-"`);
            let G = Number(A.substring(1, 3)),
                Z = Number(A.substring(4, 6));
            return B * (G * 60 + Z) * 60 * 1000
        },
        D4A = (A) => {
            let Q = 0;
            while (Q < A.length - 1 && A.charAt(Q) === "0") Q++;
            if (Q === 0) return A;
            return A.slice(Q)
        },
        Fr = function(Q) {
            return Object.assign(new String(Q), {
                deserializeJSON() {
                    return JSON.parse(String(Q))
                },
                toString() {
                    return String(Q)
                },
                toJSON() {
                    return String(Q)
                }
            })
        };
    Fr.from = (A) => {
        if (A && typeof A === "object" && (A instanceof Fr || ("deserializeJSON" in A))) return A;
        else if (typeof A === "string" || Object.getPrototypeOf(A) === String.prototype) return Fr(String(A));
        return Fr(JSON.stringify(A))
    };
    Fr.fromObject = Fr.from;

function GV4(A) {
        if (A.includes(",") || A.includes('"')) A = `"${A.replace(/"/g,"\\\"")}"`;
        return A
    }

function ZV4(A, Q, B) {
        if (B <= 0 || !Number.isInteger(B)) throw Error("Invalid number of delimiters (" + B + ") for splitEvery.");
        let G = A.split(Q);
        if (B === 1) return G;
        let Z = [],
            I = "";
        for (let Y = 0; Y < G.length; Y++) {
            if (I === "") I = G[Y];
            else I += Q + G[Y];
            if ((Y + 1) % B === 0) Z.push(I), I = ""
        }
        if (I !== "") Z.push(I);
        return Z
    }
    var IV4 = (A) => {
            let Q = A.length,
                B = [],
                G = !1,
                Z = void 0,
                I = 0;
            for (let Y = 0; Y < Q; ++Y) {
                let J = A[Y];
                switch (J) {
                    case '"':
                        if (Z !== "\\") G = !G;
                        break;
                    case ",":
                        if (!G) B.push(A.slice(I, Y)), I = Y + 1;
                        break;
                    default:
                }
                Z = J
            }
            return B.push(A.slice(I)), B.map((Y) => {
                Y = Y.trim();
                let J = Y.length;
                if (J < 2) return Y;
                if (Y[0] === '"' && Y[J - 1] === '"') Y = Y.slice(1, J - 1);
                return Y.replace(/\\"/g, '"')
            })
        },
        ko0 = class {
            constructor(A, Q) {
                this.string = A, this.type = Q;
                let B = 0;
                for (let G = 0; G < A.length; ++G) {
                    let Z = A.charCodeAt(G);
                    if (G === 0 && Z === 45) continue;
                    if (Z === 46) {
                        if (B) throw Error("@smithy/core/serde - NumericValue must contain at most one decimal point.");
                        B = 1;
                        continue
                    }
                    if (Z < 48 || Z > 57) throw Error('@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".')
                }
            }
            toString() {
                return this.string
            } [Symbol.hasInstance](A) {
                if (!A || typeof A !== "object") return !1;
                let Q = A;
                if (typeof Q.string === "string" && typeof Q.type === "string" && Q.constructor?.name === "NumericValue") return !0;
                return !1
            }
        };

function YV4(A) {
        return new ko0(String(A), "bigDecimal")
    }
});
var bo0 = U((xo0) => {
    Object.defineProperty(xo0, "__esModule", {
        value: !0
    });
    xo0.fromBase64 = void 0;
    var JV4 = kI(),
        WV4 = /^[A-Za-z0-9+/]*={0,2}$/,
        XV4 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!WV4.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, JV4.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    xo0.fromBase64 = XV4
});
var go0 = U((fo0) => {
    Object.defineProperty(fo0, "__esModule", {
        value: !0
    });
    fo0.toBase64 = void 0;
    var FV4 = kI(),
        VV4 = L2(),
        KV4 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, VV4.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, FV4.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    fo0.toBase64 = KV4
});
var Qz1 = U((tY7, SbA) => {
    var {
        defineProperty: uo0,
        getOwnPropertyDescriptor: DV4,
        getOwnPropertyNames: HV4
    } = Object, CV4 = Object.prototype.hasOwnProperty, eE1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of HV4(Q))
                if (!CV4.call(A, Z) && Z !== B) uo0(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = DV4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, mo0 = (A, Q, B) => (eE1(A, Q, "default"), B && eE1(B, Q, "default")), EV4 = (A) => eE1(uo0({}, "__esModule", {
        value: !0
    }), A), Az1 = {};
    SbA.exports = EV4(Az1);
    mo0(Az1, bo0(), SbA.exports);
    mo0(Az1, go0(), SbA.exports)
});
var C5 = U((eY7, eo0) => {
    var {
        defineProperty: Iz1,
        getOwnPropertyDescriptor: zV4,
        getOwnPropertyNames: UV4
    } = Object, $V4 = Object.prototype.hasOwnProperty, wV4 = (A, Q) => {
        for (var B in Q) Iz1(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qV4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of UV4(Q))
                if (!$V4.call(A, Z) && Z !== B) Iz1(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zV4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, NV4 = (A) => qV4(Iz1({}, "__esModule", {
        value: !0
    }), A), no0 = {};
    wV4(no0, {
        FromStringShapeDeserializer: () => oo0,
        HttpBindingProtocol: () => OV4,
        HttpInterceptingShapeDeserializer: () => kV4,
        HttpInterceptingShapeSerializer: () => xV4,
        RequestBuilder: () => ro0,
        RpcProtocol: () => TV4,
        ToStringShapeSerializer: () => to0,
        collectBody: () => E4A,
        determineTimestampFormat: () => Yz1,
        extendedEncodeURIComponent: () => GDA,
        requestBuilder: () => jV4,
        resolvedPath: () => so0
    });
    eo0.exports = NV4(no0);
    var Bz1 = cm(),
        E4A = async (A = new Uint8Array, Q) => {
            if (A instanceof Uint8Array) return Bz1.Uint8ArrayBlobAdapter.mutate(A);
            if (!A) return Bz1.Uint8ArrayBlobAdapter.mutate(new Uint8Array);
            let B = Q.streamCollector(A);
            return Bz1.Uint8ArrayBlobAdapter.mutate(await B)
        };

function GDA(A) {
        return encodeURIComponent(A).replace(/[!'()*]/g, function(Q) {
            return "%" + Q.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    var QDA = y4(),
        LV4 = Wr(),
        _bA = y4(),
        do0 = c6(),
        co0 = Wr(),
        MV4 = cm(),
        ao0 = class {
            constructor(A) {
                this.options = A
            }
            getRequestType() {
                return co0.HttpRequest
            }
            getResponseType() {
                return co0.HttpResponse
            }
            setSerdeContext(A) {
                if (this.serdeContext = A, this.serializer.setSerdeContext(A), this.deserializer.setSerdeContext(A), this.getPayloadCodec()) this.getPayloadCodec().setSerdeContext(A)
            }
            updateServiceEndpoint(A, Q) {
                if ("url" in Q) {
                    A.protocol = Q.url.protocol, A.hostname = Q.url.hostname, A.port = Q.url.port ? Number(Q.url.port) : void 0, A.path = Q.url.pathname, A.fragment = Q.url.hash || void 0, A.username = Q.url.username || void 0, A.password = Q.url.password || void 0;
                    for (let [B, G] of Q.url.searchParams.entries()) {
                        if (!A.query) A.query = {};
                        A.query[B] = G
                    }
                    return A
                } else return A.protocol = Q.protocol, A.hostname = Q.hostname, A.port = Q.port ? Number(Q.port) : void 0, A.path = Q.path, A.query = {
                    ...Q.query
                }, A
            }
            setHostPrefix(A, Q, B) {
                let G = _bA.NormalizedSchema.of(Q),
                    Z = _bA.NormalizedSchema.of(Q.input);
                if (G.getMergedTraits().endpoint) {
                    let I = G.getMergedTraits().endpoint?.[0];
                    if (typeof I === "string") {
                        let Y = [...Z.structIterator()].filter(([, J]) => J.getMergedTraits().hostLabel);
                        for (let [J] of Y) {
                            let W = B[J];
                            if (typeof W !== "string") throw Error(`@smithy/core/schema - ${J} in input must be a string as hostLabel.`);
                            I = I.replace(`{${J}}`, W)
                        }
                        A.hostname = I + A.hostname
                    }
                }
            }
            deserializeMetadata(A) {
                return {
                    httpStatusCode: A.statusCode,
                    requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
                    extendedRequestId: A.headers["x-amz-id-2"],
                    cfId: A.headers["x-amz-cf-id"]
                }
            }
            async deserializeHttpMessage(A, Q, B, G, Z) {
                let I;
                if (G instanceof Set) I = Z;
                else I = G;
                let Y = this.deserializer,
                    J = _bA.NormalizedSchema.of(A),
                    W = [];
                for (let [X, F] of J.structIterator()) {
                    let V = F.getMemberTraits();
                    if (V.httpPayload) {
                        if (F.isStreaming())
                            if (F.isStructSchema()) {
                                let H = this.serdeContext;
                                if (!H.eventStreamMarshaller) throw Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
                                let C = F.getMemberSchemas();
                                I[X] = H.eventStreamMarshaller.deserialize(B.body, async (E) => {
                                    let z = Object.keys(E).find((w) => {
                                        return w !== "__type"
                                    }) ?? "";
                                    if (z in C) {
                                        let w = C[z];
                                        return {
                                            [z]: await Y.read(w, E[z].body)
                                        }
                                    } else return {
                                        $unknown: E
                                    }
                                })
                            } else I[X] = (0, MV4.sdkStreamMixin)(B.body);
                        else if (B.body) {
                            let D = await E4A(B.body, Q);
                            if (D.byteLength > 0) I[X] = await Y.read(F, D)
                        }
                    } else if (V.httpHeader) {
                        let K = String(V.httpHeader).toLowerCase(),
                            D = B.headers[K];
                        if (D != null)
                            if (F.isListSchema()) {
                                let H = F.getValueSchema(),
                                    C;
                                if (H.isTimestampSchema() && H.getSchema() === _bA.SCHEMA.TIMESTAMP_DEFAULT) C = (0, do0.splitEvery)(D, ",", 2);
                                else C = (0, do0.splitHeader)(D);
                                let E = [];
                                for (let z of C) E.push(await Y.read([H, {
                                    httpHeader: K
                                }], z.trim()));
                                I[X] = E
                            } else I[X] = await Y.read(F, D)
                    } else if (V.httpPrefixHeaders !== void 0) {
                        I[X] = {};
                        for (let [K, D] of Object.entries(B.headers))
                            if (K.startsWith(V.httpPrefixHeaders)) I[X][K.slice(V.httpPrefixHeaders.length)] = await Y.read([F.getValueSchema(), {
                                httpHeader: K
                            }], D)
                    } else if (V.httpResponseCode) I[X] = B.statusCode;
                    else W.push(X)
                }
                return W
            }
        },
        OV4 = class extends ao0 {
            async serializeRequest(A, Q, B) {
                let G = this.serializer,
                    Z = {},
                    I = {},
                    Y = await B.endpoint(),
                    J = QDA.NormalizedSchema.of(A?.input),
                    W = J.getSchema(),
                    X = !1,
                    F, V = new LV4.HttpRequest({
                        protocol: "",
                        hostname: "",
                        port: void 0,
                        path: "",
                        fragment: void 0,
                        query: Z,
                        headers: I,
                        body: void 0
                    });
                if (Y) {
                    this.updateServiceEndpoint(V, Y), this.setHostPrefix(V, A, Q);
                    let D = QDA.NormalizedSchema.translateTraits(A.traits);
                    if (D.http) {
                        V.method = D.http[0];
                        let [H, C] = D.http[1].split("?");
                        if (V.path == "/") V.path = H;
                        else V.path += H;
                        let E = new URLSearchParams(C ?? "");