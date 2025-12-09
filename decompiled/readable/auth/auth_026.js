/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.909Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 26/61
 * Lines: 117882 - 119375 (1494 lines)
 * Original file: cli.js
 */

    var HhQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(HhQ || {}),
        ChQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(ChQ || {}),
        EhQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(EhQ || {}),
        zhQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(zhQ || {}),
        dz8 = LdA((A) => {
            let Q = [];
            if (A.sha256 !== void 0) Q.push({
                algorithmId: () => "sha256",
                checksumConstructor: () => A.sha256
            });
            if (A.md5 != null) Q.push({
                algorithmId: () => "md5",
                checksumConstructor: () => A.md5
            });
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        cz8 = LdA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        pz8 = LdA((A) => {
            return dz8(A)
        }, "getDefaultClientConfiguration"),
        lz8 = LdA((A) => {
            return cz8(A)
        }, "resolveDefaultRuntimeConfig"),
        UhQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(UhQ || {}),
        iz8 = "__smithy_context",
        $hQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })($hQ || {}),
        whQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(whQ || {})
});
var ZCA = U((x$7, RhQ) => {
    var {
        defineProperty: MdA,
        getOwnPropertyDescriptor: nz8,
        getOwnPropertyNames: az8
    } = Object, sz8 = Object.prototype.hasOwnProperty, bd = (A, Q) => MdA(A, "name", {
        value: Q,
        configurable: !0
    }), rz8 = (A, Q) => {
        for (var B in Q) MdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, oz8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of az8(Q))
                if (!sz8.call(A, Z) && Z !== B) MdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = nz8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, tz8 = (A) => oz8(MdA({}, "__esModule", {
        value: !0
    }), A), NhQ = {};
    rz8(NhQ, {
        Field: () => QU8,
        Fields: () => BU8,
        HttpRequest: () => GU8,
        HttpResponse: () => ZU8,
        IHttpRequest: () => LhQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => ez8,
        isValidHostname: () => OhQ,
        resolveHttpHandlerRuntimeConfig: () => AU8
    });
    RhQ.exports = tz8(NhQ);
    var ez8 = bd((A) => {
            return {
                setHttpHandler(Q) {
                    A.httpHandler = Q
                },
                httpHandler() {
                    return A.httpHandler
                },
                updateHttpClientConfig(Q, B) {
                    A.httpHandler?.updateHttpClientConfig(Q, B)
                },
                httpHandlerConfigs() {
                    return A.httpHandler.httpHandlerConfigs()
                }
            }
        }, "getHttpHandlerExtensionConfiguration"),
        AU8 = bd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        LhQ = lP1(),
        QU8 = class {
            static {
                bd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = LhQ.FieldPosition.HEADER,
                values: B = []
            }) {
                this.name = A, this.kind = Q, this.values = B
            }
            add(A) {
                this.values.push(A)
            }
            set(A) {
                this.values = A
            }
            remove(A) {
                this.values = this.values.filter((Q) => Q !== A)
            }
            toString() {
                return this.values.map((A) => A.includes(",") || A.includes(" ") ? `"${A}"` : A).join(", ")
            }
            get() {
                return this.values
            }
        },
        BU8 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                bd(this, "Fields")
            }
            setField(A) {
                this.entries[A.name.toLowerCase()] = A
            }
            getField(A) {
                return this.entries[A.toLowerCase()]
            }
            removeField(A) {
                delete this.entries[A.toLowerCase()]
            }
            getByType(A) {
                return Object.values(this.entries).filter((Q) => Q.kind === A)
            }
        },
        GU8 = class A {
            static {
                bd(this, "HttpRequest")
            }
            constructor(Q) {
                this.method = Q.method || "GET", this.hostname = Q.hostname || "localhost", this.port = Q.port, this.query = Q.query || {}, this.headers = Q.headers || {}, this.body = Q.body, this.protocol = Q.protocol ? Q.protocol.slice(-1) !== ":" ? `${Q.protocol}:` : Q.protocol : "https:", this.path = Q.path ? Q.path.charAt(0) !== "/" ? `/${Q.path}` : Q.path : "/", this.username = Q.username, this.password = Q.password, this.fragment = Q.fragment
            }
            static clone(Q) {
                let B = new A({
                    ...Q,
                    headers: {
                        ...Q.headers
                    }
                });
                if (B.query) B.query = MhQ(B.query);
                return B
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return "method" in B && "protocol" in B && "hostname" in B && "path" in B && typeof B.query === "object" && typeof B.headers === "object"
            }
            clone() {
                return A.clone(this)
            }
        };

function MhQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    bd(MhQ, "cloneQuery");

var ZU8 = class {
        static {
            bd(this, "HttpResponse")
        }
        constructor(A) {
            this.statusCode = A.statusCode, this.reason = A.reason, this.headers = A.headers || {}, this.body = A.body
        }
        static isInstance(A) {
            if (!A) return !1;
            let Q = A;
            return typeof Q.statusCode === "number" && typeof Q.headers === "object"
        }
    };

function OhQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    bd(OhQ, "isValidHostname")
});
var jhQ = U((h$7, PhQ) => {
    var {
        defineProperty: OdA,
        getOwnPropertyDescriptor: IU8,
        getOwnPropertyNames: YU8
    } = Object, JU8 = Object.prototype.hasOwnProperty, WU8 = (A, Q) => OdA(A, "name", {
        value: Q,
        configurable: !0
    }), XU8 = (A, Q) => {
        for (var B in Q) OdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, FU8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of YU8(Q))
                if (!JU8.call(A, Z) && Z !== B) OdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = IU8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, VU8 = (A) => FU8(OdA({}, "__esModule", {
        value: !0
    }), A), ThQ = {};
    XU8(ThQ, {
        isArrayBuffer: () => KU8
    });
    PhQ.exports = VU8(ThQ);
    var KU8 = WU8((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var yhQ = U((g$7, khQ) => {
    var {
        defineProperty: RdA,
        getOwnPropertyDescriptor: DU8,
        getOwnPropertyNames: HU8
    } = Object, CU8 = Object.prototype.hasOwnProperty, iP1 = (A, Q) => RdA(A, "name", {
        value: Q,
        configurable: !0
    }), EU8 = (A, Q) => {
        for (var B in Q) RdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, zU8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of HU8(Q))
                if (!CU8.call(A, Z) && Z !== B) RdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = DU8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, UU8 = (A) => zU8(RdA({}, "__esModule", {
        value: !0
    }), A), ShQ = {};
    EU8(ShQ, {
        escapeUri: () => _hQ,
        escapeUriPath: () => wU8
    });
    khQ.exports = UU8(ShQ);
    var _hQ = iP1((A) => encodeURIComponent(A).replace(/[!'()*]/g, $U8), "escapeUri"),
        $U8 = iP1((A) => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        wU8 = iP1((A) => A.split("/").map(_hQ).join("/"), "escapeUriPath")
});
var JgQ = U((u$7, YgQ) => {
    var {
        defineProperty: ydA,
        getOwnPropertyDescriptor: qU8,
        getOwnPropertyNames: NU8
    } = Object, LU8 = Object.prototype.hasOwnProperty, YD = (A, Q) => ydA(A, "name", {
        value: Q,
        configurable: !0
    }), MU8 = (A, Q) => {
        for (var B in Q) ydA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, OU8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of NU8(Q))
                if (!LU8.call(A, Z) && Z !== B) ydA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = qU8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, RU8 = (A) => OU8(ydA({}, "__esModule", {
        value: !0
    }), A), hhQ = {};
    MU8(hhQ, {
        ALGORITHM_IDENTIFIER: () => TdA,
        ALGORITHM_IDENTIFIER_V4A: () => SU8,
        ALGORITHM_QUERY_PARAM: () => ghQ,
        ALWAYS_UNSIGNABLE_HEADERS: () => nhQ,
        AMZ_DATE_HEADER: () => Aj1,
        AMZ_DATE_QUERY_PARAM: () => rP1,
        AUTH_HEADER: () => eP1,
        CREDENTIAL_QUERY_PARAM: () => uhQ,
        DATE_HEADER: () => chQ,
        EVENT_ALGORITHM_IDENTIFIER: () => rhQ,
        EXPIRES_QUERY_PARAM: () => dhQ,
        GENERATED_HEADERS: () => phQ,
        HOST_HEADER: () => PU8,
        KEY_TYPE_IDENTIFIER: () => Qj1,
        MAX_CACHE_SIZE: () => thQ,
        MAX_PRESIGNED_TTL: () => ehQ,
        PROXY_HEADER_PATTERN: () => ahQ,
        REGION_SET_PARAM: () => TU8,
        SEC_HEADER_PATTERN: () => shQ,
        SHA256_HEADER: () => kdA,
        SIGNATURE_HEADER: () => lhQ,
        SIGNATURE_QUERY_PARAM: () => oP1,
        SIGNED_HEADERS_QUERY_PARAM: () => mhQ,
        SignatureV4: () => mU8,
        SignatureV4Base: () => IgQ,
        TOKEN_HEADER: () => ihQ,
        TOKEN_QUERY_PARAM: () => tP1,
        UNSIGNABLE_PATTERNS: () => jU8,
        UNSIGNED_PAYLOAD: () => ohQ,
        clearCredentialCache: () => kU8,
        createScope: () => jdA,
        getCanonicalHeaders: () => nP1,
        getCanonicalQuery: () => ZgQ,
        getPayloadHash: () => SdA,
        getSigningKey: () => AgQ,
        hasHeader: () => QgQ,
        moveHeadersToQuery: () => GgQ,
        prepareRequest: () => sP1,
        signatureV4aContainer: () => dU8
    });
    YgQ.exports = RU8(hhQ);
    var xhQ = L2(),
        ghQ = "X-Amz-Algorithm",
        uhQ = "X-Amz-Credential",
        rP1 = "X-Amz-Date",
        mhQ = "X-Amz-SignedHeaders",
        dhQ = "X-Amz-Expires",
        oP1 = "X-Amz-Signature",
        tP1 = "X-Amz-Security-Token",
        TU8 = "X-Amz-Region-Set",
        eP1 = "authorization",
        Aj1 = rP1.toLowerCase(),
        chQ = "date",
        phQ = [eP1, Aj1, chQ],
        lhQ = oP1.toLowerCase(),
        kdA = "x-amz-content-sha256",
        ihQ = tP1.toLowerCase(),
        PU8 = "host",
        nhQ = {
            authorization: !0,
            "cache-control": !0,
            connection: !0,
            expect: !0,
            from: !0,
            "keep-alive": !0,
            "max-forwards": !0,
            pragma: !0,
            referer: !0,
            te: !0,
            trailer: !0,
            "transfer-encoding": !0,
            upgrade: !0,
            "user-agent": !0,
            "x-amzn-trace-id": !0
        },
        ahQ = /^proxy-/,
        shQ = /^sec-/,
        jU8 = [/^proxy-/i, /^sec-/i],
        TdA = "AWS4-HMAC-SHA256",
        SU8 = "AWS4-ECDSA-P256-SHA256",
        rhQ = "AWS4-HMAC-SHA256-PAYLOAD",
        ohQ = "UNSIGNED-PAYLOAD",
        thQ = 50,
        Qj1 = "aws4_request",
        ehQ = 604800,
        fd = mm(),
        _U8 = L2(),
        v6A = {},
        PdA = [],
        jdA = YD((A, Q, B) => `${A}/${Q}/${B}/${Qj1}`, "createScope"),
        AgQ = YD(async (A, Q, B, G, Z) => {
            let I = await vhQ(A, Q.secretAccessKey, Q.accessKeyId),
                Y = `${B}:${G}:${Z}:${(0,fd.toHex)(I)}:${Q.sessionToken}`;
            if (Y in v6A) return v6A[Y];
            PdA.push(Y);
            while (PdA.length > thQ) delete v6A[PdA.shift()];
            let J = `AWS4${Q.secretAccessKey}`;
            for (let W of [B, G, Z, Qj1]) J = await vhQ(A, J, W);
            return v6A[Y] = J
        }, "getSigningKey"),
        kU8 = YD(() => {
            PdA.length = 0, Object.keys(v6A).forEach((A) => {
                delete v6A[A]
            })
        }, "clearCredentialCache"),
        vhQ = YD((A, Q, B) => {
            let G = new A(Q);
            return G.update((0, _U8.toUint8Array)(B)), G.digest()
        }, "hmac"),
        nP1 = YD(({
            headers: A
        }, Q, B) => {
            let G = {};
            for (let Z of Object.keys(A).sort()) {
                if (A[Z] == null) continue;
                let I = Z.toLowerCase();
                if (I in nhQ || Q?.has(I) || ahQ.test(I) || shQ.test(I)) {
                    if (!B || B && !B.has(I)) continue
                }
                G[I] = A[Z].trim().replace(/\s+/g, " ")
            }
            return G
        }, "getCanonicalHeaders"),
        yU8 = jhQ(),
        xU8 = L2(),
        SdA = YD(async ({
            headers: A,
            body: Q
        }, B) => {
            for (let G of Object.keys(A))
                if (G.toLowerCase() === kdA) return A[G];
            if (Q == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
            else if (typeof Q === "string" || ArrayBuffer.isView(Q) || (0, yU8.isArrayBuffer)(Q)) {
                let G = new B;
                return G.update((0, xU8.toUint8Array)(Q)), (0, fd.toHex)(await G.digest())
            }
            return ohQ
        }, "getPayloadHash"),
        bhQ = L2(),
        vU8 = class {
            static {
                YD(this, "HeaderFormatter")
            }
            format(A) {
                let Q = [];
                for (let Z of Object.keys(A)) {
                    let I = (0, bhQ.fromUtf8)(Z);
                    Q.push(Uint8Array.from([I.byteLength]), I, this.formatHeaderValue(A[Z]))
                }
                let B = new Uint8Array(Q.reduce((Z, I) => Z + I.byteLength, 0)),
                    G = 0;
                for (let Z of Q) B.set(Z, G), G += Z.byteLength;
                return B
            }
            formatHeaderValue(A) {
                switch (A.type) {
                    case "boolean":
                        return Uint8Array.from([A.value ? 0 : 1]);
                    case "byte":
                        return Uint8Array.from([2, A.value]);
                    case "short":
                        let Q = new DataView(new ArrayBuffer(3));
                        return Q.setUint8(0, 3), Q.setInt16(1, A.value, !1), new Uint8Array(Q.buffer);
                    case "integer":
                        let B = new DataView(new ArrayBuffer(5));
                        return B.setUint8(0, 4), B.setInt32(1, A.value, !1), new Uint8Array(B.buffer);
                    case "long":
                        let G = new Uint8Array(9);
                        return G[0] = 5, G.set(A.value.bytes, 1), G;
                    case "binary":
                        let Z = new DataView(new ArrayBuffer(3 + A.value.byteLength));
                        Z.setUint8(0, 6), Z.setUint16(1, A.value.byteLength, !1);
                        let I = new Uint8Array(Z.buffer);
                        return I.set(A.value, 3), I;
                    case "string":
                        let Y = (0, bhQ.fromUtf8)(A.value),
                            J = new DataView(new ArrayBuffer(3 + Y.byteLength));
                        J.setUint8(0, 7), J.setUint16(1, Y.byteLength, !1);
                        let W = new Uint8Array(J.buffer);
                        return W.set(Y, 3), W;
                    case "timestamp":
                        let X = new Uint8Array(9);
                        return X[0] = 8, X.set(fU8.fromNumber(A.value.valueOf()).bytes, 1), X;
                    case "uuid":
                        if (!bU8.test(A.value)) throw Error(`Invalid UUID received: ${A.value}`);
                        let F = new Uint8Array(17);
                        return F[0] = 9, F.set((0, fd.fromHex)(A.value.replace(/\-/g, "")), 1), F
                }
            }
        },
        bU8 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        fU8 = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static {
                YD(this, "Int64")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`${Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) aP1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) aP1(Q);
                return parseInt((0, fd.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };

function aP1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    YD(aP1, "negate");
    var QgQ = YD((A, Q) => {
            A = A.toLowerCase();
            for (let B of Object.keys(Q))
                if (A === B.toLowerCase()) return !0;
            return !1
        }, "hasHeader"),
        BgQ = ZCA(),
        GgQ = YD((A, Q = {}) => {
            let {
                headers: B,
                query: G = {}
            } = BgQ.HttpRequest.clone(A);
            for (let Z of Object.keys(B)) {
                let I = Z.toLowerCase();
                if (I.slice(0, 6) === "x-amz-" && !Q.unhoistableHeaders?.has(I) || Q.hoistableHeaders?.has(I)) G[Z] = B[Z], delete B[Z]
            }
            return {
                ...A,
                headers: B,
                query: G
            }
        }, "moveHeadersToQuery"),
        sP1 = YD((A) => {
            A = BgQ.HttpRequest.clone(A);
            for (let Q of Object.keys(A.headers))
                if (phQ.indexOf(Q.toLowerCase()) > -1) delete A.headers[Q];
            return A
        }, "prepareRequest"),
        fhQ = K7(),
        hU8 = L2(),
        _dA = yhQ(),
        ZgQ = YD(({
            query: A = {}
        }) => {
            let Q = [],
                B = {};
            for (let G of Object.keys(A)) {
                if (G.toLowerCase() === lhQ) continue;
                let Z = (0, _dA.escapeUri)(G);
                Q.push(Z);
                let I = A[G];
                if (typeof I === "string") B[Z] = `${Z}=${(0,_dA.escapeUri)(I)}`;
                else if (Array.isArray(I)) B[Z] = I.slice(0).reduce((Y, J) => Y.concat([`${Z}=${(0,_dA.escapeUri)(J)}`]), []).sort().join("&")
            }
            return Q.sort().map((G) => B[G]).filter((G) => G).join("&")
        }, "getCanonicalQuery"),
        gU8 = YD((A) => uU8(A).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
        uU8 = YD((A) => {
            if (typeof A === "number") return new Date(A * 1000);
            if (typeof A === "string") {
                if (Number(A)) return new Date(Number(A) * 1000);
                return new Date(A)
            }
            return A
        }, "toDate"),
        IgQ = class {
            static {
                YD(this, "SignatureV4Base")
            }
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                this.service = G, this.sha256 = Z, this.uriEscapePath = I, this.applyChecksum = typeof A === "boolean" ? A : !0, this.regionProvider = (0, fhQ.normalizeProvider)(B), this.credentialProvider = (0, fhQ.normalizeProvider)(Q)
            }
            createCanonicalRequest(A, Q, B) {
                let G = Object.keys(Q).sort();
                return `${A.method}
${this.getCanonicalPath(A)}
${ZgQ(A)}
${G.map((Z)=>`${Z}:${Q[Z]}`).join(`
`)}

${G.join(";")}
${B}`
            }
            async createStringToSign(A, Q, B, G) {
                let Z = new this.sha256;
                Z.update((0, hU8.toUint8Array)(B));
                let I = await Z.digest();
                return `${G}
${A}
${Q}
${(0,fd.toHex)(I)}`
            }
            getCanonicalPath({
                path: A
            }) {
                if (this.uriEscapePath) {
                    let Q = [];
                    for (let Z of A.split("/")) {
                        if (Z?.length === 0) continue;
                        if (Z === ".") continue;
                        if (Z === "..") Q.pop();
                        else Q.push(Z)
                    }
                    let B = `${A?.startsWith("/")?"/":""}${Q.join("/")}${Q.length>0&&A?.endsWith("/")?"/":""}`;
                    return (0, _dA.escapeUri)(B).replace(/%2F/g, "/")
                }
                return A
            }
            validateResolvedCredentials(A) {
                if (typeof A !== "object" || typeof A.accessKeyId !== "string" || typeof A.secretAccessKey !== "string") throw Error("Resolved credential object is not valid")
            }
            formatDate(A) {
                let Q = gU8(A).replace(/[\-:]/g, "");
                return {
                    longDate: Q,
                    shortDate: Q.slice(0, 8)
                }
            }
            getCanonicalHeaderList(A) {
                return Object.keys(A).sort().join(";")
            }
        },
        mU8 = class extends IgQ {
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                super({
                    applyChecksum: A,
                    credentials: Q,
                    region: B,
                    service: G,
                    sha256: Z,
                    uriEscapePath: I
                });
                this.headerFormatter = new vU8
            }
            static {
                YD(this, "SignatureV4")
            }
            async presign(A, Q = {}) {
                let {
                    signingDate: B = new Date,
                    expiresIn: G = 3600,
                    unsignableHeaders: Z,
                    unhoistableHeaders: I,
                    signableHeaders: Y,
                    hoistableHeaders: J,
                    signingRegion: W,
                    signingService: X
                } = Q, F = await this.credentialProvider();
                this.validateResolvedCredentials(F);
                let V = W ?? await this.regionProvider(),
                    {
                        longDate: K,
                        shortDate: D
                    } = this.formatDate(B);
                if (G > ehQ) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                let H = jdA(D, V, X ?? this.service),
                    C = GgQ(sP1(A), {
                        unhoistableHeaders: I,
                        hoistableHeaders: J
                    });
                if (F.sessionToken) C.query[tP1] = F.sessionToken;
                C.query[ghQ] = TdA, C.query[uhQ] = `${F.accessKeyId}/${H}`, C.query[rP1] = K, C.query[dhQ] = G.toString(10);
                let E = nP1(C, Z, Y);
                return C.query[mhQ] = this.getCanonicalHeaderList(E), C.query[oP1] = await this.getSignature(K, H, this.getSigningKey(F, V, D, X), this.createCanonicalRequest(C, E, await SdA(A, this.sha256))), C
            }
            async sign(A, Q) {
                if (typeof A === "string") return this.signString(A, Q);
                else if (A.headers && A.payload) return this.signEvent(A, Q);
                else if (A.message) return this.signMessage(A, Q);
                else return this.signRequest(A, Q)
            }
            async signEvent({
                headers: A,
                payload: Q
            }, {
                signingDate: B = new Date,
                priorSignature: G,
                signingRegion: Z,
                signingService: I
            }) {
                let Y = Z ?? await this.regionProvider(),
                    {
                        shortDate: J,
                        longDate: W
                    } = this.formatDate(B),
                    X = jdA(J, Y, I ?? this.service),
                    F = await SdA({
                        headers: {},
                        body: Q
                    }, this.sha256),
                    V = new this.sha256;
                V.update(A);
                let K = (0, fd.toHex)(await V.digest()),
                    D = [rhQ, W, X, G, K, F].join(`
`);
                return this.signString(D, {
                    signingDate: B,
                    signingRegion: Y,
                    signingService: I
                })
            }
            async signMessage(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            }) {
                return this.signEvent({
                    headers: this.headerFormatter.format(A.message.headers),
                    payload: A.message.body
                }, {
                    signingDate: Q,
                    signingRegion: B,
                    signingService: G,
                    priorSignature: A.priorSignature
                }).then((I) => {
                    return {
                        message: A.message,
                        signature: I
                    }
                })
            }
            async signString(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            } = {}) {
                let Z = await this.credentialProvider();
                this.validateResolvedCredentials(Z);
                let I = B ?? await this.regionProvider(),
                    {
                        shortDate: Y
                    } = this.formatDate(Q),
                    J = new this.sha256(await this.getSigningKey(Z, I, Y, G));
                return J.update((0, xhQ.toUint8Array)(A)), (0, fd.toHex)(await J.digest())
            }
            async signRequest(A, {
                signingDate: Q = new Date,
                signableHeaders: B,
                unsignableHeaders: G,
                signingRegion: Z,
                signingService: I
            } = {}) {
                let Y = await this.credentialProvider();
                this.validateResolvedCredentials(Y);
                let J = Z ?? await this.regionProvider(),
                    W = sP1(A),
                    {
                        longDate: X,
                        shortDate: F
                    } = this.formatDate(Q),
                    V = jdA(F, J, I ?? this.service);
                if (W.headers[Aj1] = X, Y.sessionToken) W.headers[ihQ] = Y.sessionToken;
                let K = await SdA(W, this.sha256);
                if (!QgQ(kdA, W.headers) && this.applyChecksum) W.headers[kdA] = K;
                let D = nP1(W, G, B),
                    H = await this.getSignature(X, V, this.getSigningKey(Y, J, F, I), this.createCanonicalRequest(W, D, K));
                return W.headers[eP1] = `${TdA} Credential=${Y.accessKeyId}/${V}, SignedHeaders=${this.getCanonicalHeaderList(D)}, Signature=${H}`, W
            }
            async getSignature(A, Q, B, G) {
                let Z = await this.createStringToSign(A, Q, G, TdA),
                    I = new this.sha256(await B);
                return I.update((0, xhQ.toUint8Array)(Z)), (0, fd.toHex)(await I.digest())
            }
            getSigningKey(A, Q, B, G) {
                return AgQ(this.sha256, A, B, Q, G || this.service)
            }
        },
        dU8 = {
            SignatureV4a: null
        }
});
var zgQ = U((p$7, EgQ) => {
    var {
        defineProperty: xdA,
        getOwnPropertyDescriptor: cU8,
        getOwnPropertyNames: pU8
    } = Object, lU8 = Object.prototype.hasOwnProperty, JD = (A, Q) => xdA(A, "name", {
        value: Q,
        configurable: !0
    }), iU8 = (A, Q) => {
        for (var B in Q) xdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, nU8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of pU8(Q))
                if (!lU8.call(A, Z) && Z !== B) xdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = cU8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, aU8 = (A) => nU8(xdA({}, "__esModule", {
        value: !0
    }), A), KgQ = {};
    iU8(KgQ, {
        AWSSDKSigV4Signer: () => tU8,
        AwsSdkSigV4ASigner: () => A$8,
        AwsSdkSigV4Signer: () => Zj1,
        NODE_SIGV4A_CONFIG_OPTIONS: () => G$8,
        resolveAWSSDKSigV4Config: () => I$8,
        resolveAwsSdkSigV4AConfig: () => B$8,
        resolveAwsSdkSigV4Config: () => DgQ,
        validateSigningProperties: () => Gj1
    });
    EgQ.exports = aU8(KgQ);
    var sU8 = ZCA(),
        rU8 = ZCA(),
        WgQ = JD((A) => rU8.HttpResponse.isInstance(A) ? A.headers?.date ?? A.headers?.Date : void 0, "getDateHeader"),
        Bj1 = JD((A) => new Date(Date.now() + A), "getSkewCorrectedDate"),
        oU8 = JD((A, Q) => Math.abs(Bj1(Q).getTime() - A) >= 300000, "isClockSkewed"),
        XgQ = JD((A, Q) => {
            let B = Date.parse(A);
            if (oU8(B, Q)) return B - Date.now();
            return Q
        }, "getUpdatedSystemClockOffset"),
        ICA = JD((A, Q) => {
            if (!Q) throw Error(`Property \`${A}\` is not resolved for AWS SDK SigV4Auth`);
            return Q
        }, "throwSigningPropertyError"),
        Gj1 = JD(async (A) => {
            let Q = ICA("context", A.context),
                B = ICA("config", A.config),
                G = Q.endpointV2?.properties?.authSchemes?.[0],
                I = await ICA("signer", B.signer)(G),
                Y = A?.signingRegion,
                J = A?.signingRegionSet,
                W = A?.signingName;
            return {
                config: B,
                signer: I,
                signingRegion: Y,
                signingRegionSet: J,
                signingName: W
            }
        }, "validateSigningProperties"),
        Zj1 = class {
            static {
                JD(this, "AwsSdkSigV4Signer")
            }
            async sign(A, Q, B) {
                if (!sU8.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let G = await Gj1(B),
                    {
                        config: Z,
                        signer: I
                    } = G,
                    {
                        signingRegion: Y,
                        signingName: J
                    } = G,
                    W = B.context;
                if (W?.authSchemes?.length ?? !1) {
                    let [F, V] = W.authSchemes;
                    if (F?.name === "sigv4a" && V?.name === "sigv4") Y = V?.signingRegion ?? Y, J = V?.signingName ?? J
                }
                return await I.sign(A, {
                    signingDate: Bj1(Z.systemClockOffset),
                    signingRegion: Y,
                    signingService: J
                })
            }
            errorHandler(A) {
                return (Q) => {
                    let B = Q.ServerTime ?? WgQ(Q.$response);
                    if (B) {
                        let G = ICA("config", A.config),
                            Z = G.systemClockOffset;
                        if (G.systemClockOffset = XgQ(B, G.systemClockOffset), G.systemClockOffset !== Z && Q.$metadata) Q.$metadata.clockSkewCorrected = !0
                    }
                    throw Q
                }
            }
            successHandler(A, Q) {
                let B = WgQ(A);
                if (B) {
                    let G = ICA("config", Q.config);
                    G.systemClockOffset = XgQ(B, G.systemClockOffset)
                }
            }
        },
        tU8 = Zj1,
        eU8 = ZCA(),
        A$8 = class extends Zj1 {
            static {
                JD(this, "AwsSdkSigV4ASigner")
            }
            async sign(A, Q, B) {
                if (!eU8.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let {
                    config: G,
                    signer: Z,
                    signingRegion: I,
                    signingRegionSet: Y,
                    signingName: J
                } = await Gj1(B), X = (await G.sigv4aSigningRegionSet?.() ?? Y ?? [I]).join(",");
                return await Z.sign(A, {
                    signingDate: Bj1(G.systemClockOffset),
                    signingRegion: X,
                    signingService: J
                })
            }
        },
        Q$8 = nB(),
        FgQ = P2(),
        B$8 = JD((A) => {
            return A.sigv4aSigningRegionSet = (0, Q$8.normalizeProvider)(A.sigv4aSigningRegionSet), A
        }, "resolveAwsSdkSigV4AConfig"),
        G$8 = {
            environmentVariableSelector(A) {
                if (A.AWS_SIGV4A_SIGNING_REGION_SET) return A.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((Q) => Q.trim());
                throw new FgQ.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
                    tryNextLink: !0
                })
            },
            configFileSelector(A) {
                if (A.sigv4a_signing_region_set) return (A.sigv4a_signing_region_set ?? "").split(",").map((Q) => Q.trim());
                throw new FgQ.ProviderError("sigv4a_signing_region_set not set in profile.", {
                    tryNextLink: !0
                })
            },
            default: void 0
        },
        Z$8 = xS(),
        Zo = nB(),
        VgQ = JgQ(),
        DgQ = JD((A) => {
            let Q = A.credentials,
                B = !!A.credentials,
                G = void 0;
            Object.defineProperty(A, "credentials", {
                set(X) {
                    if (X && X !== Q && X !== G) B = !0;
                    Q = X;
                    let F = HgQ(A, {
                            credentials: Q,
                            credentialDefaultProvider: A.credentialDefaultProvider
                        }),
                        V = CgQ(A, F);
                    if (B && !V.attributed) G = JD(async (K) => V(K).then((D) => (0, Z$8.setCredentialFeature)(D, "CREDENTIALS_CODE", "e")), "resolvedCredentials"), G.memoized = V.memoized, G.configBound = V.configBound, G.attributed = !0;
                    else G = V
                },
                get() {
                    return G
                },
                enumerable: !0,
                configurable: !0
            }), A.credentials = Q;
            let {
                signingEscapePath: Z = !0,
                systemClockOffset: I = A.systemClockOffset || 0,
                sha256: Y
            } = A, J;
            if (A.signer) J = (0, Zo.normalizeProvider)(A.signer);
            else if (A.regionInfoProvider) J = JD(() => (0, Zo.normalizeProvider)(A.region)().then(async (X) => [await A.regionInfoProvider(X, {
                useFipsEndpoint: await A.useFipsEndpoint(),
                useDualstackEndpoint: await A.useDualstackEndpoint()
            }) || {}, X]).then(([X, F]) => {
                let {
                    signingRegion: V,
                    signingService: K
                } = X;
                A.signingRegion = A.signingRegion || V || F, A.signingName = A.signingName || K || A.serviceId;
                let D = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || VgQ.SignatureV4)(D)
            }), "signer");
            else J = JD(async (X) => {
                X = Object.assign({}, {
                    name: "sigv4",
                    signingName: A.signingName || A.defaultSigningName,
                    signingRegion: await (0, Zo.normalizeProvider)(A.region)(),
                    properties: {}
                }, X);
                let {
                    signingRegion: F,
                    signingName: V
                } = X;
                A.signingRegion = A.signingRegion || F, A.signingName = A.signingName || V || A.serviceId;
                let K = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || VgQ.SignatureV4)(K)
            }, "signer");
            return Object.assign(A, {
                systemClockOffset: I,
                signingEscapePath: Z,
                signer: J
            })
        }, "resolveAwsSdkSigV4Config"),
        I$8 = DgQ;

function HgQ(A, {
        credentials: Q,
        credentialDefaultProvider: B
    }) {
        let G;
        if (Q)
            if (!Q?.memoized) G = (0, Zo.memoizeIdentityProvider)(Q, Zo.isIdentityExpired, Zo.doesIdentityRequireRefresh);
            else G = Q;
        else if (B) G = (0, Zo.normalizeProvider)(B(Object.assign({}, A, {
            parentClientConfig: A
        })));
        else G = JD(async () => {
            throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.")
        }, "credentialsProvider");
        return G.memoized = !0, G
    }
    JD(HgQ, "normalizeCredentialProvider");

function CgQ(A, Q) {
        if (Q.configBound) return Q;
        let B = JD(async (G) => Q({
            ...G,
            callerClientConfig: A
        }), "fn");
        return B.memoized = Q.memoized, B.configBound = !0, B
    }
    JD(CgQ, "bindCallerConfig")
});
var hdA = U((n$7, vgQ) => {
    var {
        defineProperty: fdA,
        getOwnPropertyDescriptor: Y$8,
        getOwnPropertyNames: J$8
    } = Object, W$8 = Object.prototype.hasOwnProperty, FB = (A, Q) => fdA(A, "name", {
        value: Q,
        configurable: !0
    }), X$8 = (A, Q) => {
        for (var B in Q) fdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, F$8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of J$8(Q))
                if (!W$8.call(A, Z) && Z !== B) fdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Y$8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, V$8 = (A) => F$8(fdA({}, "__esModule", {
        value: !0
    }), A), $gQ = {};
    X$8($gQ, {
        Client: () => K$8,
        Command: () => qgQ,
        LazyJsonString: () => Io,
        NoOpLogger: () => Ww8,
        SENSITIVE_STRING: () => H$8,
        ServiceException: () => s$8,
        _json: () => Vj1,
        collectBody: () => Ij1.collectBody,
        convertMap: () => Xw8,
        createAggregatedClient: () => C$8,
        dateToUtcString: () => TgQ,
        decorateServiceException: () => PgQ,
        emitWarningIfUnsupportedVersion: () => e$8,
        expectBoolean: () => z$8,
        expectByte: () => Fj1,
        expectFloat32: () => vdA,
        expectInt: () => $$8,
        expectInt32: () => Wj1,
        expectLong: () => WCA,
        expectNonNull: () => q$8,
        expectNumber: () => JCA,
        expectObject: () => NgQ,
        expectShort: () => Xj1,
        expectString: () => N$8,
        expectUnion: () => L$8,
        extendedEncodeURIComponent: () => Ij1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => Yw8,
        getDefaultClientConfiguration: () => Zw8,
        getDefaultExtensionConfiguration: () => SgQ,
        getValueFromTextNode: () => _gQ,
        handleFloat: () => R$8,
        isSerializableHeaderValue: () => Jw8,
        limitedParseDouble: () => Hj1,
        limitedParseFloat: () => T$8,
        limitedParseFloat32: () => P$8,
        loadConfigsForDefaultMode: () => t$8,
        logger: () => XCA,
        map: () => Ej1,
        parseBoolean: () => E$8,
        parseEpochTimestamp: () => u$8,
        parseRfc3339DateTime: () => y$8,
        parseRfc3339DateTimeWithOffset: () => v$8,
        parseRfc7231DateTime: () => g$8,
        quoteHeader: () => ygQ,
        resolveDefaultRuntimeConfig: () => Iw8,
        resolvedPath: () => Ij1.resolvedPath,
        serializeDateTime: () => Cw8,
        serializeFloat: () => Hw8,
        splitEvery: () => xgQ,
        splitHeader: () => Ew8,
        strictParseByte: () => RgQ,
        strictParseDouble: () => Dj1,
        strictParseFloat: () => M$8,
        strictParseFloat32: () => LgQ,
        strictParseInt: () => j$8,
        strictParseInt32: () => S$8,
        strictParseLong: () => OgQ,
        strictParseShort: () => b6A,
        take: () => Fw8,
        throwDefaultError: () => jgQ,
        withBaseException: () => r$8
    });
    vgQ.exports = V$8($gQ);
    var wgQ = PR(),
        K$8 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, wgQ.constructStack)()
            }
            static {
                FB(this, "Client")
            }
            send(A, Q, B) {
                let G = typeof Q !== "function" ? Q : void 0,
                    Z = typeof Q === "function" ? Q : B,
                    I = G === void 0 && this.config.cacheMiddleware === !0,
                    Y;
                if (I) {
                    if (!this.handlers) this.handlers = new WeakMap;
                    let J = this.handlers;
                    if (J.has(A.constructor)) Y = J.get(A.constructor);
                    else Y = A.resolveMiddleware(this.middlewareStack, this.config, G), J.set(A.constructor, Y)
                } else delete this.handlers, Y = A.resolveMiddleware(this.middlewareStack, this.config, G);
                if (Z) Y(A).then((J) => Z(null, J.output), (J) => Z(J)).catch(() => {});
                else return Y(A).then((J) => J.output)
            }
            destroy() {
                this.config?.requestHandler?.destroy?.(), delete this.handlers
            }
        },
        Ij1 = C5(),
        Jj1 = lP1(),
        qgQ = class {
            constructor() {
                this.middlewareStack = (0, wgQ.constructStack)()
            }
            static {
                FB(this, "Command")
            }
            static classBuilder() {
                return new D$8
            }
            resolveMiddlewareWithContext(A, Q, B, {
                middlewareFn: G,
                clientName: Z,
                commandName: I,
                inputFilterSensitiveLog: Y,
                outputFilterSensitiveLog: J,
                smithyContext: W,
                additionalContext: X,
                CommandCtor: F
            }) {
                for (let C of G.bind(this)(F, A, Q, B)) this.middlewareStack.use(C);
                let V = A.concat(this.middlewareStack),
                    {
                        logger: K
                    } = Q,
                    D = {
                        logger: K,
                        clientName: Z,
                        commandName: I,
                        inputFilterSensitiveLog: Y,
                        outputFilterSensitiveLog: J,
                        [Jj1.SMITHY_CONTEXT_KEY]: {
                            commandInstance: this,
                            ...W
                        },
                        ...X
                    },
                    {
                        requestHandler: H
                    } = Q;
                return V.resolve((C) => H.handle(C.request, B || {}), D)
            }
        },
        D$8 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                FB(this, "ClassBuilder")
            }
            init(A) {
                this._init = A
            }
            ep(A) {
                return this._ep = A, this
            }
            m(A) {
                return this._middlewareFn = A, this
            }
            s(A, Q, B = {}) {
                return this._smithyContext = {
                    service: A,
                    operation: Q,
                    ...B
                }, this
            }
            c(A = {}) {
                return this._additionalContext = A, this
            }
            n(A, Q) {
                return this._clientName = A, this._commandName = Q, this
            }
            f(A = (B) => B, Q = (B) => B) {
                return this._inputFilterSensitiveLog = A, this._outputFilterSensitiveLog = Q, this
            }
            ser(A) {
                return this._serializer = A, this
            }
            de(A) {
                return this._deserializer = A, this
            }
            build() {
                let A = this,
                    Q;
                return Q = class extends qgQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this)
                    }
                    static {
                        FB(this, "CommandRef")
                    }
                    static getEndpointParameterInstructions() {
                        return A._ep
                    }
                    resolveMiddleware(B, G, Z) {
                        return this.resolveMiddlewareWithContext(B, G, Z, {
                            CommandCtor: Q,
                            middlewareFn: A._middlewareFn,
                            clientName: A._clientName,
                            commandName: A._commandName,
                            inputFilterSensitiveLog: A._inputFilterSensitiveLog,
                            outputFilterSensitiveLog: A._outputFilterSensitiveLog,
                            smithyContext: A._smithyContext,
                            additionalContext: A._additionalContext
                        })
                    }
                }
            }
        },
        H$8 = "***SensitiveInformation***",
        C$8 = FB((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = FB(async function(Y, J, W) {
                        let X = new G(Y);
                        if (typeof J === "function") this.send(X, J);
                        else if (typeof W === "function") {
                            if (typeof J !== "object") throw Error(`Expected http options but got ${typeof J}`);
                            this.send(X, J || {}, W)
                        } else return this.send(X, J)
                    }, "methodImpl"),
                    I = (B[0].toLowerCase() + B.slice(1)).replace(/Command$/, "");
                Q.prototype[I] = Z
            }
        }, "createAggregatedClient"),
        E$8 = FB((A) => {
            switch (A) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    throw Error(`Unable to parse boolean value "${A}"`)
            }
        }, "parseBoolean"),
        z$8 = FB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "number") {
                if (A === 0 || A === 1) XCA.warn(bdA(`Expected boolean, got ${typeof A}: ${A}`));
                if (A === 0) return !1;
                if (A === 1) return !0
            }
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (Q === "false" || Q === "true") XCA.warn(bdA(`Expected boolean, got ${typeof A}: ${A}`));
                if (Q === "false") return !1;
                if (Q === "true") return !0
            }
            if (typeof A === "boolean") return A;
            throw TypeError(`Expected boolean, got ${typeof A}: ${A}`)
        }, "expectBoolean"),
        JCA = FB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") {
                let Q = parseFloat(A);
                if (!Number.isNaN(Q)) {
                    if (String(Q) !== String(A)) XCA.warn(bdA(`Expected number but observed string: ${A}`));
                    return Q
                }
            }
            if (typeof A === "number") return A;
            throw TypeError(`Expected number, got ${typeof A}: ${A}`)
        }, "expectNumber"),
        U$8 = Math.ceil(340282346638528860000000000000000000000),
        vdA = FB((A) => {
            let Q = JCA(A);
            if (Q !== void 0 && !Number.isNaN(Q) && Q !== 1 / 0 && Q !== -1 / 0) {
                if (Math.abs(Q) > U$8) throw TypeError(`Expected 32-bit float, got ${A}`)
            }
            return Q
        }, "expectFloat32"),
        WCA = FB((A) => {
            if (A === null || A === void 0) return;
            if (Number.isInteger(A) && !Number.isNaN(A)) return A;
            throw TypeError(`Expected integer, got ${typeof A}: ${A}`)
        }, "expectLong"),
        $$8 = WCA,
        Wj1 = FB((A) => Kj1(A, 32), "expectInt32"),
        Xj1 = FB((A) => Kj1(A, 16), "expectShort"),
        Fj1 = FB((A) => Kj1(A, 8), "expectByte"),
        Kj1 = FB((A, Q) => {
            let B = WCA(A);
            if (B !== void 0 && w$8(B, Q) !== B) throw TypeError(`Expected ${Q}-bit integer, got ${A}`);
            return B
        }, "expectSizedInt"),
        w$8 = FB((A, Q) => {
            switch (Q) {
                case 32:
                    return Int32Array.of(A)[0];
                case 16:
                    return Int16Array.of(A)[0];
                case 8:
                    return Int8Array.of(A)[0]
            }
        }, "castInt"),
        q$8 = FB((A, Q) => {
            if (A === null || A === void 0) {
                if (Q) throw TypeError(`Expected a non-null value for ${Q}`);
                throw TypeError("Expected a non-null value")
            }
            return A
        }, "expectNonNull"),
        NgQ = FB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "object" && !Array.isArray(A)) return A;
            let Q = Array.isArray(A) ? "array" : typeof A;
            throw TypeError(`Expected object, got ${Q}: ${A}`)
        }, "expectObject"),
        N$8 = FB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") return A;
            if (["boolean", "number", "bigint"].includes(typeof A)) return XCA.warn(bdA(`Expected string, got ${typeof A}: ${A}`)), String(A);
            throw TypeError(`Expected string, got ${typeof A}: ${A}`)
        }, "expectString"),
        L$8 = FB((A) => {
            if (A === null || A === void 0) return;
            let Q = NgQ(A),
                B = Object.entries(Q).filter(([, G]) => G != null).map(([G]) => G);
            if (B.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
            if (B.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${B} were not null.`);
            return Q
        }, "expectUnion"),
        Dj1 = FB((A) => {
            if (typeof A == "string") return JCA(h6A(A));
            return JCA(A)
        }, "strictParseDouble"),
        M$8 = Dj1,
        LgQ = FB((A) => {
            if (typeof A == "string") return vdA(h6A(A));
            return vdA(A)
        }, "strictParseFloat32"),
        O$8 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        h6A = FB((A) => {
            let Q = A.match(O$8);
            if (Q === null || Q[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
            return parseFloat(A)
        }, "parseNumber"),
        Hj1 = FB((A) => {
            if (typeof A == "string") return MgQ(A);
            return JCA(A)
        }, "limitedParseDouble"),
        R$8 = Hj1,
        T$8 = Hj1,
        P$8 = FB((A) => {
            if (typeof A == "string") return MgQ(A);
            return vdA(A)
        }, "limitedParseFloat32"),
        MgQ = FB((A) => {
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
        }, "parseFloatString"),
        OgQ = FB((A) => {
            if (typeof A === "string") return WCA(h6A(A));
            return WCA(A)
        }, "strictParseLong"),
        j$8 = OgQ,
        S$8 = FB((A) => {
            if (typeof A === "string") return Wj1(h6A(A));
            return Wj1(A)
        }, "strictParseInt32"),
        b6A = FB((A) => {
            if (typeof A === "string") return Xj1(h6A(A));
            return Xj1(A)
        }, "strictParseShort"),
        RgQ = FB((A) => {
            if (typeof A === "string") return Fj1(h6A(A));
            return Fj1(A)
        }, "strictParseByte"),
        bdA = FB((A) => {
            return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter((Q) => !Q.includes("stackTraceWarning")).join(`
`)
        }, "stackTraceWarning"),
        XCA = {
            warn: console.warn
        },
        _$8 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        Cj1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function TgQ(A) {
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
        return `${_$8[G]}, ${W} ${Cj1[B]} ${Q} ${X}:${F}:${V} GMT`
    }
    FB(TgQ, "dateToUtcString");
    var k$8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
        y$8 = FB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = k$8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X] = Q, F = b6A(f6A(G)), V = bS(Z, "month", 1, 12), K = bS(I, "day", 1, 31);