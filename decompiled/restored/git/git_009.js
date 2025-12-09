/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: git_009.js
 * 处理时间: 2025-12-09T03:37:24.682Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         ( 11x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 9/34
 * Lines: 131369 - 132864 (1496 lines)
 * Original file: cli.js
 */

        let Q = A.protocol;
        return Q === "http:" || Q === "https:"
    }

    function Wx8(A, Q) {
        let B = A;
        if (!B.startsWith("bytes")) return "failure";
        let G = {
            position: 5
        };
        if (Q) Ko((W) => W === "\t" || W === " ", B, G);
        if (B.charCodeAt(G.position) !== 61) return "failure";
        if (G.position++, Q) Ko((W) => W === "\t" || W === " ", B, G);
        let Z = Ko((W) => {
                let X = W.charCodeAt(0);
                return X >= 48 && X <= 57
            }, B, G),
            I = Z.length ? Number(Z) : null;
        if (Q) Ko((W) => W === "\t" || W === " ", B, G);
        if (B.charCodeAt(G.position) !== 45) return "failure";
        if (G.position++, Q) Ko((W) => W === "\t" || W === " ", B, G);
        let Y = Ko((W) => {
                let X = W.charCodeAt(0);
                return X >= 48 && X <= 57
            }, B, G),
            J = Y.length ? Number(Y) : null;
        if (G.position < B.length) return "failure";
        if (J === null && I === null) return "failure";
        if (I > J) return "failure";
        return {
            rangeStartValue: I,
            rangeEndValue: J
        }
    }

    function Xx8(A, Q, B) {
        let G = "bytes ";
        return G += ncA(`${A}`), G += "-", G += ncA(`${Q}`), G += "/", G += ncA(`${B}`), G
    }
    class rsQ extends Cy8 {
        #A;
        constructor(A) {
            super();
            this.#A = A
        }
        _transform(A, Q, B) {
            if (!this._inflateStream) {
                if (A.length === 0) {
                    B();
                    return
                }
                this._inflateStream = (A[0] & 15) === 8 ? hsQ.createInflate(this.#A) : hsQ.createInflateRaw(this.#A), this._inflateStream.on("data", this.push.bind(this)), this._inflateStream.on("end", () => this.push(null)), this._inflateStream.on("error", (G) => this.destroy(G))
            }
            this._inflateStream.write(A, Q, B)
        }
        _final(A) {
            if (this._inflateStream) this._inflateStream.end(), this._inflateStream = null;
            A()
        }
    }

    function Fx8(A) {
        return new rsQ(A)
    }

    function Vx8(A) {
        let Q = null,
            B = null,
            G = null,
            Z = osQ("content-type", A);
        if (Z === null) return "failure";
        for (let I of Z) {
            let Y = qy8(I);
            if (Y === "failure" || Y.essence === "*/*") continue;
            if (G = Y, G.essence !== B) {
                if (Q = null, G.parameters.has("charset")) Q = G.parameters.get("charset");
                B = G.essence
            } else if (!G.parameters.has("charset") && Q !== null) G.parameters.set("charset", Q)
        }
        if (G == null) return "failure";
        return G
    }

    function Kx8(A) {
        let Q = A,
            B = {
                position: 0
            },
            G = [],
            Z = "";
        while (B.position < Q.length) {
            if (Z += Ko((I) => I !== '"' && I !== ",", Q, B), B.position < Q.length)
                if (Q.charCodeAt(B.position) === 34) {
                    if (Z += $y8(Q, B), B.position < Q.length) continue
                } else Do(Q.charCodeAt(B.position) === 44), B.position++;
            Z = wy8(Z, !0, !0, (I) => I === 9 || I === 32), G.push(Z), Z = ""
        }
        return G
    }

    function osQ(A, Q) {
        let B = Q.get(A, !0);
        if (B === null) return null;
        return Kx8(B)
    }
    var Dx8 = new TextDecoder;

    function Hx8(A) {
        if (A.length === 0) return "";
        if (A[0] === 239 && A[1] === 187 && A[2] === 191) A = A.subarray(3);
        return Dx8.decode(A)
    }
    class tsQ {
        get baseUrl() {
            return gsQ()
        }
        get origin() {
            return this.baseUrl?.origin
        }
        policyContainer = lsQ()
    }
    class esQ {
        settingsObject = new tsQ
    }
    var Cx8 = new esQ;
    ArQ.exports = {
        isAborted: oy8,
        isCancelled: ty8,
        isValidEncodedURL: csQ,
        createDeferredPromise: ry8,
        ReadableStreamFrom: My8,
        tryUpgradeRequestToAPotentiallyTrustworthyURL: sy8,
        clampAndCoarsenConnectionTimingInfo: gy8,
        coarsenedSharedCurrentTime: uy8,
        determineRequestsReferrer: cy8,
        makePolicyContainer: lsQ,
        clonePolicyContainer: dy8,
        appendFetchMetadata: fy8,
        appendRequestOriginHeader: hy8,
        TAOCheck: by8,
        corsCheck: vy8,
        crossOriginResourcePolicyCheck: xy8,
        createOpaqueTimingInfo: my8,
        setRequestReferrerPolicyOnRedirect: yy8,
        isValidHTTPToken: usQ,
        requestBadPort: jy8,
        requestCurrentURL: pCA,
        responseURL: dsQ,
        responseLocationURL: Ty8,
        isBlobLike: Ly8,
        isURLPotentiallyTrustworthy: cCA,
        isValidReasonPhrase: _y8,
        sameOrigin: scA,
        normalizeMethod: ey8,
        serializeJavascriptValueToJSONString: Ax8,
        iteratorMixin: Bx8,
        createIterator: nsQ,
        isValidHeaderName: ky8,
        isValidHeaderValue: psQ,
        isErrorLike: Sy8,
        fullyReadBody: Gx8,
        bytesMatch: py8,
        isReadableStreamLike: Zx8,
        readableStreamClose: Ix8,
        isomorphicEncode: ncA,
        urlIsLocal: Jx8,
        urlHasHttpsScheme: a_1,
        urlIsHttpHttpsScheme: ssQ,
        readAllBytes: asQ,
        simpleRangeHeaderValue: Wx8,
        buildContentRange: Xx8,
        parseMetadata: isQ,
        createInflate: Fx8,
        extractMimeType: Vx8,
        getDecodeSplit: osQ,
        utf8DecodeBytes: Hx8,
        environmentSettingsObject: Cx8
    }
});
var id = U((sq7, QrQ) => {
    QrQ.exports = {
        kUrl: Symbol("url"),
        kHeaders: Symbol("headers"),
        kSignal: Symbol("signal"),
        kState: Symbol("state"),
        kDispatcher: Symbol("dispatcher")
    }
});
var s_1 = U((rq7, BrQ) => {
    var {
        Blob: Ex8,
        File: zx8
    } = UA("node:buffer"), {
        kState: Eb
    } = id(), {
        webidl: iS
    } = FD();
    class nS {
        constructor(A, Q, B = {}) {
            let G = Q,
                Z = B.type,
                I = B.lastModified ?? Date.now();
            this[Eb] = {
                blobLike: A,
                name: G,
                type: Z,
                lastModified: I
            }
        }
        stream(...A) {
            return iS.brandCheck(this, nS), this[Eb].blobLike.stream(...A)
        }
        arrayBuffer(...A) {
            return iS.brandCheck(this, nS), this[Eb].blobLike.arrayBuffer(...A)
        }
        slice(...A) {
            return iS.brandCheck(this, nS), this[Eb].blobLike.slice(...A)
        }
        text(...A) {
            return iS.brandCheck(this, nS), this[Eb].blobLike.text(...A)
        }
        get size() {
            return iS.brandCheck(this, nS), this[Eb].blobLike.size
        }
        get type() {
            return iS.brandCheck(this, nS), this[Eb].blobLike.type
        }
        get name() {
            return iS.brandCheck(this, nS), this[Eb].name
        }
        get lastModified() {
            return iS.brandCheck(this, nS), this[Eb].lastModified
        }
        get[Symbol.toStringTag]() {
            return "File"
        }
    }
    iS.converters.Blob = iS.interfaceConverter(Ex8);

    function Ux8(A) {
        return A instanceof zx8 || A && (typeof A.stream === "function" || typeof A.arrayBuffer === "function") && A[Symbol.toStringTag] === "File"
    }
    BrQ.exports = {
        FileLike: nS,
        isFileLike: Ux8
    }
});
var lCA = U((oq7, JrQ) => {
    var {
        isBlobLike: rcA,
        iteratorMixin: $x8
    } = Rw(), {
        kState: nC
    } = id(), {
        kEnumerableProperty: T5A
    } = M6(), {
        FileLike: GrQ,
        isFileLike: wx8
    } = s_1(), {
        webidl: RZ
    } = FD(), {
        File: YrQ
    } = UA("node:buffer"), ZrQ = UA("node:util"), IrQ = globalThis.File ?? YrQ;
    class aS {
        constructor(A) {
            if (RZ.util.markAsUncloneable(this), A !== void 0) throw RZ.errors.conversionFailed({
                prefix: "FormData constructor",
                argument: "Argument 1",
                types: ["undefined"]
            });
            this[nC] = []
        }
        append(A, Q, B = void 0) {
            RZ.brandCheck(this, aS);
            let G = "FormData.append";
            if (RZ.argumentLengthCheck(arguments, 2, G), arguments.length === 3 && !rcA(Q)) throw TypeError("Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'");
            A = RZ.converters.USVString(A, G, "name"), Q = rcA(Q) ? RZ.converters.Blob(Q, G, "value", {
                strict: !1
            }) : RZ.converters.USVString(Q, G, "value"), B = arguments.length === 3 ? RZ.converters.USVString(B, G, "filename") : void 0;
            let Z = r_1(A, Q, B);
            this[nC].push(Z)
        }
        delete(A) {
            RZ.brandCheck(this, aS);
            let Q = "FormData.delete";
            RZ.argumentLengthCheck(arguments, 1, Q), A = RZ.converters.USVString(A, Q, "name"), this[nC] = this[nC].filter((B) => B.name !== A)
        }
        get(A) {
            RZ.brandCheck(this, aS);
            let Q = "FormData.get";
            RZ.argumentLengthCheck(arguments, 1, Q), A = RZ.converters.USVString(A, Q, "name");
            let B = this[nC].findIndex((G) => G.name === A);
            if (B === -1) return null;
            return this[nC][B].value
        }
        getAll(A) {
            RZ.brandCheck(this, aS);
            let Q = "FormData.getAll";
            return RZ.argumentLengthCheck(arguments, 1, Q), A = RZ.converters.USVString(A, Q, "name"), this[nC].filter((B) => B.name === A).map((B) => B.value)
        }
        has(A) {
            RZ.brandCheck(this, aS);
            let Q = "FormData.has";
            return RZ.argumentLengthCheck(arguments, 1, Q), A = RZ.converters.USVString(A, Q, "name"), this[nC].findIndex((B) => B.name === A) !== -1
        }
        set(A, Q, B = void 0) {
            RZ.brandCheck(this, aS);
            let G = "FormData.set";
            if (RZ.argumentLengthCheck(arguments, 2, G), arguments.length === 3 && !rcA(Q)) throw TypeError("Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'");
            A = RZ.converters.USVString(A, G, "name"), Q = rcA(Q) ? RZ.converters.Blob(Q, G, "name", {
                strict: !1
            }) : RZ.converters.USVString(Q, G, "name"), B = arguments.length === 3 ? RZ.converters.USVString(B, G, "name") : void 0;
            let Z = r_1(A, Q, B),
                I = this[nC].findIndex((Y) => Y.name === A);
            if (I !== -1) this[nC] = [...this[nC].slice(0, I), Z, ...this[nC].slice(I + 1).filter((Y) => Y.name !== A)];
            else this[nC].push(Z)
        } [ZrQ.inspect.custom](A, Q) {
            let B = this[nC].reduce((Z, I) => {
                if (Z[I.name])
                    if (Array.isArray(Z[I.name])) Z[I.name].push(I.value);
                    else Z[I.name] = [Z[I.name], I.value];
                else Z[I.name] = I.value;
                return Z
            }, {
                __proto__: null
            });
            Q.depth ??= A, Q.colors ??= !0;
            let G = ZrQ.formatWithOptions(Q, B);
            return `FormData ${G.slice(G.indexOf("]")+2)}`
        }
    }
    $x8("FormData", aS, nC, "name", "value");
    Object.defineProperties(aS.prototype, {
        append: T5A,
        delete: T5A,
        get: T5A,
        getAll: T5A,
        has: T5A,
        set: T5A,
        [Symbol.toStringTag]: {
            value: "FormData",
            configurable: !0
        }
    });

    function r_1(A, Q, B) {
        if (typeof Q === "string");
        else {
            if (!wx8(Q)) Q = Q instanceof Blob ? new IrQ([Q], "blob", {
                type: Q.type
            }) : new GrQ(Q, "blob", {
                type: Q.type
            });
            if (B !== void 0) {
                let G = {
                    type: Q.type,
                    lastModified: Q.lastModified
                };
                Q = Q instanceof YrQ ? new IrQ([Q], B, G) : new GrQ(Q, B, G)
            }
        }
        return {
            name: A,
            value: Q
        }
    }
    JrQ.exports = {
        FormData: aS,
        makeEntry: r_1
    }
});
var DrQ = U((tq7, KrQ) => {
    var {
        isUSVString: WrQ,
        bufferToLowerCasedHeaderName: qx8
    } = M6(), {
        utf8DecodeBytes: Nx8
    } = Rw(), {
        HTTP_TOKEN_CODEPOINTS: Lx8,
        isomorphicDecode: XrQ
    } = tz(), {
        isFileLike: Mx8
    } = s_1(), {
        makeEntry: Ox8
    } = lCA(), ocA = UA("node:assert"), {
        File: Rx8
    } = UA("node:buffer"), Tx8 = globalThis.File ?? Rx8, Px8 = Buffer.from('form-data; name="'), FrQ = Buffer.from("; filename"), jx8 = Buffer.from("--"), Sx8 = Buffer.from(`--\r
`);

    function _x8(A) {
        for (let Q = 0; Q < A.length; ++Q)
            if ((A.charCodeAt(Q) & -128) !== 0) return !1;
        return !0
    }

    function kx8(A) {
        let Q = A.length;
        if (Q < 27 || Q > 70) return !1;
        for (let B = 0; B < Q; ++B) {
            let G = A.charCodeAt(B);
            if (!(G >= 48 && G <= 57 || G >= 65 && G <= 90 || G >= 97 && G <= 122 || G === 39 || G === 45 || G === 95)) return !1
        }
        return !0
    }

    function yx8(A, Q) {
        ocA(Q !== "failure" && Q.essence === "multipart/form-data");
        let B = Q.parameters.get("boundary");
        if (B === void 0) return "failure";
        let G = Buffer.from(`--${B}`, "utf8"),
            Z = [],
            I = {
                position: 0
            };
        while (A[I.position] === 13 && A[I.position + 1] === 10) I.position += 2;
        let Y = A.length;
        while (A[Y - 1] === 10 && A[Y - 2] === 13) Y -= 2;
        if (Y !== A.length) A = A.subarray(0, Y);
        while (!0) {
            if (A.subarray(I.position, I.position + G.length).equals(G)) I.position += G.length;
            else return "failure";
            if (I.position === A.length - 2 && tcA(A, jx8, I) || I.position === A.length - 4 && tcA(A, Sx8, I)) return Z;
            if (A[I.position] !== 13 || A[I.position + 1] !== 10) return "failure";
            I.position += 2;
            let J = xx8(A, I);
            if (J === "failure") return "failure";
            let {
                name: W,
                filename: X,
                contentType: F,
                encoding: V
            } = J;
            I.position += 2;
            let K;
            {
                let H = A.indexOf(G.subarray(2), I.position);
                if (H === -1) return "failure";
                if (K = A.subarray(I.position, H - 4), I.position += K.length, V === "base64") K = Buffer.from(K.toString(), "base64")
            }
            if (A[I.position] !== 13 || A[I.position + 1] !== 10) return "failure";
            else I.position += 2;
            let D;
            if (X !== null) {
                if (F ??= "text/plain", !_x8(F)) F = "";
                D = new Tx8([K], X, {
                    type: F
                })
            } else D = Nx8(Buffer.from(K));
            ocA(WrQ(W)), ocA(typeof D === "string" && WrQ(D) || Mx8(D)), Z.push(Ox8(W, D, X))
        }
    }

    function xx8(A, Q) {
        let B = null,
            G = null,
            Z = null,
            I = null;
        while (!0) {
            if (A[Q.position] === 13 && A[Q.position + 1] === 10) {
                if (B === null) return "failure";
                return {
                    name: B,
                    filename: G,
                    contentType: Z,
                    encoding: I
                }
            }
            let Y = P5A((J) => J !== 10 && J !== 13 && J !== 58, A, Q);
            if (Y = o_1(Y, !0, !0, (J) => J === 9 || J === 32), !Lx8.test(Y.toString())) return "failure";
            if (A[Q.position] !== 58) return "failure";
            switch (Q.position++, P5A((J) => J === 32 || J === 9, A, Q), qx8(Y)) {
                case "content-disposition": {
                    if (B = G = null, !tcA(A, Px8, Q)) return "failure";
                    if (Q.position += 17, B = VrQ(A, Q), B === null) return "failure";
                    if (tcA(A, FrQ, Q)) {
                        let J = Q.position + FrQ.length;
                        if (A[J] === 42) Q.position += 1, J += 1;
                        if (A[J] !== 61 || A[J + 1] !== 34) return "failure";
                        if (Q.position += 12, G = VrQ(A, Q), G === null) return "failure"
                    }
                    break
                }
                case "content-type": {
                    let J = P5A((W) => W !== 10 && W !== 13, A, Q);
                    J = o_1(J, !1, !0, (W) => W === 9 || W === 32), Z = XrQ(J);
                    break
                }
                case "content-transfer-encoding": {
                    let J = P5A((W) => W !== 10 && W !== 13, A, Q);
                    J = o_1(J, !1, !0, (W) => W === 9 || W === 32), I = XrQ(J);
                    break
                }
                default:
                    P5A((J) => J !== 10 && J !== 13, A, Q)
            }
            if (A[Q.position] !== 13 && A[Q.position + 1] !== 10) return "failure";
            else Q.position += 2
        }
    }

    function VrQ(A, Q) {
        ocA(A[Q.position - 1] === 34);
        let B = P5A((G) => G !== 10 && G !== 13 && G !== 34, A, Q);
        if (A[Q.position] !== 34) return null;
        else Q.position++;
        return B = new TextDecoder().decode(B).replace(/%0A/ig, `
`).replace(/%0D/ig, "\r").replace(/%22/g, '"'), B
    }

    function P5A(A, Q, B) {
        let G = B.position;
        while (G < Q.length && A(Q[G])) ++G;
        return Q.subarray(B.position, B.position = G)
    }

    function o_1(A, Q, B, G) {
        let Z = 0,
            I = A.length - 1;
        if (Q)
            while (Z < A.length && G(A[Z])) Z++;
        if (B)
            while (I > 0 && G(A[I])) I--;
        return Z === 0 && I === A.length - 1 ? A : A.subarray(Z, I + 1)
    }

    function tcA(A, Q, B) {
        if (A.length < Q.length) return !1;
        for (let G = 0; G < Q.length; G++)
            if (Q[G] !== A[B.position + G]) return !1;
        return !0
    }
    KrQ.exports = {
        multipartFormDataParser: yx8,
        validateBoundary: kx8
    }
});
var _5A = U((eq7, qrQ) => {
    var iCA = M6(),
        {
            ReadableStreamFrom: vx8,
            isBlobLike: HrQ,
            isReadableStreamLike: bx8,
            readableStreamClose: fx8,
            createDeferredPromise: hx8,
            fullyReadBody: gx8,
            extractMimeType: ux8,
            utf8DecodeBytes: zrQ
        } = Rw(),
        {
            FormData: CrQ
        } = lCA(),
        {
            kState: S5A
        } = id(),
        {
            webidl: mx8
        } = FD(),
        {
            Blob: dx8
        } = UA("node:buffer"),
        t_1 = UA("node:assert"),
        {
            isErrored: UrQ,
            isDisturbed: cx8
        } = UA("node:stream"),
        {
            isArrayBuffer: px8
        } = UA("node:util/types"),
        {
            serializeAMimeType: lx8
        } = tz(),
        {
            multipartFormDataParser: ix8
        } = DrQ(),
        e_1;
    try {
        let A = UA("node:crypto");
        e_1 = (Q) => A.randomInt(0, Q)
    } catch {
        e_1 = (A) => Math.floor(Math.random(A))
    }
    var ecA = new TextEncoder;

    function nx8() {}
    var Ak1 = globalThis.FinalizationRegistry && process.version.indexOf("v18") !== 0,
        Qk1;
    if (Ak1) Qk1 = new FinalizationRegistry((A) => {
        let Q = A.deref();
        if (Q && !Q.locked && !cx8(Q) && !UrQ(Q)) Q.cancel("Response object has been garbage collected").catch(nx8)
    });

    function $rQ(A, Q = !1) {
        let B = null;
        if (A instanceof ReadableStream) B = A;
        else if (HrQ(A)) B = A.stream();
        else B = new ReadableStream({
            async pull(W) {
                let X = typeof Z === "string" ? ecA.encode(Z) : Z;
                if (X.byteLength) W.enqueue(X);
                queueMicrotask(() => fx8(W))
            },
            start() {},
            type: "bytes"
        });
        t_1(bx8(B));
        let G = null,
            Z = null,
            I = null,
            Y = null;
        if (typeof A === "string") Z = A, Y = "text/plain;charset=UTF-8";
        else if (A instanceof URLSearchParams) Z = A.toString(), Y = "application/x-www-form-urlencoded;charset=UTF-8";
        else if (px8(A)) Z = new Uint8Array(A.slice());
        else if (ArrayBuffer.isView(A)) Z = new Uint8Array(A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength));
        else if (iCA.isFormDataLike(A)) {
            let W = `----formdata-undici-0${`${e_1(100000000000)}`.padStart(11,"0")}`,
                X = `--${W}\r
Content-Disposition: form-data`; /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
            let F = (E) => E.replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"),
                V = (E) => E.replace(/\r?\n|\r/g, `\r
`),
                K = [],
                D = new Uint8Array([13, 10]);
            I = 0;
            let H = !1;
            for (let [E, z] of A)
                if (typeof z === "string") {
                    let w = ecA.encode(X + `; name="${F(V(E))}"\r
\r
${V(z)}\r
`);
                    K.push(w), I += w.byteLength
                } else {
                    let w = ecA.encode(`${X}; name="${F(V(E))}"` + (z.name ? `; filename="${F(z.name)}"` : "") + `\r
Content-Type: ${z.type||"application/octet-stream"}\r
\r
`);
                    if (K.push(w, z, D), typeof z.size === "number") I += w.byteLength + z.size + D.byteLength;
                    else H = !0
                } let C = ecA.encode(`--${W}--`);
            if (K.push(C), I += C.byteLength, H) I = null;
            Z = A, G = async function*() {
                for (let E of K)
                    if (E.stream) yield* E.stream();
                    else yield E
            }, Y = `multipart/form-data; boundary=${W}`
        } else if (HrQ(A)) {
            if (Z = A, I = A.size, A.type) Y = A.type
        } else if (typeof A[Symbol.asyncIterator] === "function") {
            if (Q) throw TypeError("keepalive");
            if (iCA.isDisturbed(A) || A.locked) throw TypeError("Response body object should not be disturbed or locked");
            B = A instanceof ReadableStream ? A : vx8(A)
        }
        if (typeof Z === "string" || iCA.isBuffer(Z)) I = Buffer.byteLength(Z);
        if (G != null) {
            let W;
            B = new ReadableStream({
                async start() {
                    W = G(A)[Symbol.asyncIterator]()
                },
                async pull(X) {
                    let {
                        value: F,
                        done: V
                    } = await W.next();
                    if (V) queueMicrotask(() => {
                        X.close(), X.byobRequest?.respond(0)
                    });
                    else if (!UrQ(B)) {
                        let K = new Uint8Array(F);
                        if (K.byteLength) X.enqueue(K)
                    }
                    return X.desiredSize > 0
                },
                async cancel(X) {
                    await W.return()
                },
                type: "bytes"
            })
        }
        return [{
            stream: B,
            source: Z,
            length: I
        }, Y]
    }

    function ax8(A, Q = !1) {
        if (A instanceof ReadableStream) t_1(!iCA.isDisturbed(A), "The body has already been consumed."), t_1(!A.locked, "The stream is locked.");
        return $rQ(A, Q)
    }

    function sx8(A, Q) {
        let [B, G] = Q.stream.tee();
        if (Ak1) Qk1.register(A, new WeakRef(B));
        return Q.stream = B, {
            stream: G,
            length: Q.length,
            source: Q.source
        }
    }

    function rx8(A) {
        if (A.aborted) throw new DOMException("The operation was aborted.", "AbortError")
    }

    function ox8(A) {
        return {
            blob() {
                return j5A(this, (B) => {
                    let G = ErQ(this);
                    if (G === null) G = "";
                    else if (G) G = lx8(G);
                    return new dx8([B], {
                        type: G
                    })
                }, A)
            },
            arrayBuffer() {
                return j5A(this, (B) => {
                    return new Uint8Array(B).buffer
                }, A)
            },
            text() {
                return j5A(this, zrQ, A)
            },
            json() {
                return j5A(this, ex8, A)
            },
            formData() {
                return j5A(this, (B) => {
                    let G = ErQ(this);
                    if (G !== null) switch (G.essence) {
                        case "multipart/form-data": {
                            let Z = ix8(B, G);
                            if (Z === "failure") throw TypeError("Failed to parse body as FormData.");
                            let I = new CrQ;
                            return I[S5A] = Z, I
                        }
                        case "application/x-www-form-urlencoded": {
                            let Z = new URLSearchParams(B.toString()),
                                I = new CrQ;
                            for (let [Y, J] of Z) I.append(Y, J);
                            return I
                        }
                    }
                    throw TypeError('Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".')
                }, A)
            },
            bytes() {
                return j5A(this, (B) => {
                    return new Uint8Array(B)
                }, A)
            }
        }
    }

    function tx8(A) {
        Object.assign(A.prototype, ox8(A))
    }
    async function j5A(A, Q, B) {
        if (mx8.brandCheck(A, B), wrQ(A)) throw TypeError("Body is unusable: Body has already been read");
        rx8(A[S5A]);
        let G = hx8(),
            Z = (Y) => G.reject(Y),
            I = (Y) => {
                try {
                    G.resolve(Q(Y))
                } catch (J) {
                    Z(J)
                }
            };
        if (A[S5A].body == null) return I(Buffer.allocUnsafe(0)), G.promise;
        return await gx8(A[S5A].body, I, Z), G.promise
    }

    function wrQ(A) {
        let Q = A[S5A].body;
        return Q != null && (Q.stream.locked || iCA.isDisturbed(Q.stream))
    }

    function ex8(A) {
        return JSON.parse(zrQ(A))
    }

    function ErQ(A) {
        let Q = A[S5A].headersList,
            B = ux8(Q);
        if (B === "failure") return null;
        return B
    }
    qrQ.exports = {
        extractBody: $rQ,
        safelyExtractBody: ax8,
        cloneBody: sx8,
        mixinBody: tx8,
        streamRegistry: Qk1,
        hasFinalizationRegistry: Ak1,
        bodyUnusable: wrQ
    }
});
var yrQ = U((AN7, krQ) => {
    var Y4 = UA("node:assert"),
        l4 = M6(),
        {
            channels: NrQ
        } = U5A(),
        Bk1 = b_1(),
        {
            RequestContentLengthMismatchError: Ho,
            ResponseContentLengthMismatchError: Av8,
            RequestAbortedError: PrQ,
            HeadersTimeoutError: Qv8,
            HeadersOverflowError: Bv8,
            SocketError: IpA,
            InformationalError: k5A,
            BodyTimeoutError: Gv8,
            HTTPParserError: Zv8,
            ResponseExceededMaxSizeError: Iv8
        } = U7(),
        {
            kUrl: jrQ,
            kReset: ez,
            kClient: Yk1,
            kParser: wJ,
            kBlocking: sCA,
            kRunning: RH,
            kPending: Yv8,
            kSize: LrQ,
            kWriting: ad,
            kQueue: cR,
            kNoRef: nCA,
            kKeepAliveDefaultTimeout: Jv8,
            kHostHeader: Wv8,
            kPendingIdx: Xv8,
            kRunningIdx: gL,
            kError: uL,
            kPipelining: GpA,
            kSocket: y5A,
            kKeepAliveTimeoutValue: YpA,
            kMaxHeadersSize: Gk1,
            kKeepAliveMaxTimeout: Fv8,
            kKeepAliveTimeoutThreshold: Vv8,
            kHeadersTimeout: Kv8,
            kBodyTimeout: Dv8,
            kStrictContentLength: Jk1,
            kMaxRequests: MrQ,
            kCounter: Hv8,
            kMaxResponseSize: Cv8,
            kOnError: Ev8,
            kResume: nd,
            kHTTPContext: SrQ
        } = iI(),
        sS = zsQ(),
        zv8 = Buffer.alloc(0),
        ApA = Buffer[Symbol.species],
        QpA = l4.addListener,
        Uv8 = l4.removeAllListeners,
        Zk1;
    async function $v8() {
        let A = process.env.JEST_WORKER_ID ? d_1() : void 0,
            Q;
        try {
            Q = await WebAssembly.compile(wsQ())
        } catch (B) {
            Q = await WebAssembly.compile(A || d_1())
        }
        return await WebAssembly.instantiate(Q, {
            env: {
                wasm_on_url: (B, G, Z) => {
                    return 0
                },
                wasm_on_status: (B, G, Z) => {
                    Y4(qF.ptr === B);
                    let I = G - oS + rS.byteOffset;
                    return qF.onStatus(new ApA(rS.buffer, I, Z)) || 0
                },
                wasm_on_message_begin: (B) => {
                    return Y4(qF.ptr === B), qF.onMessageBegin() || 0
                },
                wasm_on_header_field: (B, G, Z) => {
                    Y4(qF.ptr === B);
                    let I = G - oS + rS.byteOffset;
                    return qF.onHeaderField(new ApA(rS.buffer, I, Z)) || 0
                },
                wasm_on_header_value: (B, G, Z) => {
                    Y4(qF.ptr === B);
                    let I = G - oS + rS.byteOffset;
                    return qF.onHeaderValue(new ApA(rS.buffer, I, Z)) || 0
                },
                wasm_on_headers_complete: (B, G, Z, I) => {
                    return Y4(qF.ptr === B), qF.onHeadersComplete(G, Boolean(Z), Boolean(I)) || 0
                },
                wasm_on_body: (B, G, Z) => {
                    Y4(qF.ptr === B);
                    let I = G - oS + rS.byteOffset;
                    return qF.onBody(new ApA(rS.buffer, I, Z)) || 0
                },
                wasm_on_message_complete: (B) => {
                    return Y4(qF.ptr === B), qF.onMessageComplete() || 0
                }
            }
        })
    }
    var Ik1 = null,
        Wk1 = $v8();
    Wk1.catch();
    var qF = null,
        rS = null,
        BpA = 0,
        oS = null,
        wv8 = 0,
        aCA = 1,
        x5A = 2 | aCA,
        ZpA = 4 | aCA,
        Xk1 = 8 | wv8;
    class _rQ {
        constructor(A, Q, {
            exports: B
        }) {
            Y4(Number.isFinite(A[Gk1]) && A[Gk1] > 0), this.llhttp = B, this.ptr = this.llhttp.llhttp_alloc(sS.TYPE.RESPONSE), this.client = A, this.socket = Q, this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.statusCode = null, this.statusText = "", this.upgrade = !1, this.headers = [], this.headersSize = 0, this.headersMaxSize = A[Gk1], this.shouldKeepAlive = !1, this.paused = !1, this.resume = this.resume.bind(this), this.bytesRead = 0, this.keepAlive = "", this.contentLength = "", this.connection = "", this.maxResponseSize = A[Cv8]
        }
        setTimeout(A, Q) {
            if (A !== this.timeoutValue || Q & aCA ^ this.timeoutType & aCA) {
                if (this.timeout) Bk1.clearTimeout(this.timeout), this.timeout = null;
                if (A)
                    if (Q & aCA) this.timeout = Bk1.setFastTimeout(OrQ, A, new WeakRef(this));
                    else this.timeout = setTimeout(OrQ, A, new WeakRef(this)), this.timeout.unref();
                this.timeoutValue = A
            } else if (this.timeout) {
                if (this.timeout.refresh) this.timeout.refresh()
            }
            this.timeoutType = Q
        }
        resume() {
            if (this.socket.destroyed || !this.paused) return;
            if (Y4(this.ptr != null), Y4(qF == null), this.llhttp.llhttp_resume(this.ptr), Y4(this.timeoutType === ZpA), this.timeout) {
                if (this.timeout.refresh) this.timeout.refresh()
            }
            this.paused = !1, this.execute(this.socket.read() || zv8), this.readMore()
        }
        readMore() {
            while (!this.paused && this.ptr) {
                let A = this.socket.read();
                if (A === null) break;
                this.execute(A)
            }
        }
        execute(A) {
            Y4(this.ptr != null), Y4(qF == null), Y4(!this.paused);
            let {
                socket: Q,
                llhttp: B
            } = this;
            if (A.length > BpA) {
                if (oS) B.free(oS);
                BpA = Math.ceil(A.length / 4096) * 4096, oS = B.malloc(BpA)
            }
            new Uint8Array(B.memory.buffer, oS, BpA).set(A);
            try {
                let G;
                try {
                    rS = A, qF = this, G = B.llhttp_execute(this.ptr, oS, A.length)
                } catch (I) {
                    throw I
                } finally {
                    qF = null, rS = null
                }
                let Z = B.llhttp_get_error_pos(this.ptr) - oS;
                if (G === sS.ERROR.PAUSED_UPGRADE) this.onUpgrade(A.slice(Z));
                else if (G === sS.ERROR.PAUSED) this.paused = !0, Q.unshift(A.slice(Z));
                else if (G !== sS.ERROR.OK) {
                    let I = B.llhttp_get_error_reason(this.ptr),
                        Y = "";
                    if (I) {
                        let J = new Uint8Array(B.memory.buffer, I).indexOf(0);
                        Y = "Response does not match the HTTP/1.1 protocol (" + Buffer.from(B.memory.buffer, I, J).toString() + ")"
                    }
                    throw new Zv8(Y, sS.ERROR[G], A.slice(Z))
                }
            } catch (G) {
                l4.destroy(Q, G)
            }
        }
        destroy() {
            Y4(this.ptr != null), Y4(qF == null), this.llhttp.llhttp_free(this.ptr), this.ptr = null, this.timeout && Bk1.clearTimeout(this.timeout), this.timeout = null, this.timeoutValue = null, this.timeoutType = null, this.paused = !1
        }
        onStatus(A) {
            this.statusText = A.toString()
        }
        onMessageBegin() {
            let {
                socket: A,
                client: Q
            } = this;
            if (A.destroyed) return -1;
            let B = Q[cR][Q[gL]];
            if (!B) return -1;
            B.onResponseStarted()
        }
        onHeaderField(A) {
            let Q = this.headers.length;
            if ((Q & 1) === 0) this.headers.push(A);
            else this.headers[Q - 1] = Buffer.concat([this.headers[Q - 1], A]);
            this.trackHeader(A.length)
        }
        onHeaderValue(A) {
            let Q = this.headers.length;
            if ((Q & 1) === 1) this.headers.push(A), Q += 1;
            else this.headers[Q - 1] = Buffer.concat([this.headers[Q - 1], A]);
            let B = this.headers[Q - 2];
            if (B.length === 10) {
                let G = l4.bufferToLowerCasedHeaderName(B);
                if (G === "keep-alive") this.keepAlive += A.toString();
                else if (G === "connection") this.connection += A.toString()
            } else if (B.length === 14 && l4.bufferToLowerCasedHeaderName(B) === "content-length") this.contentLength += A.toString();
            this.trackHeader(A.length)
        }
        trackHeader(A) {
            if (this.headersSize += A, this.headersSize >= this.headersMaxSize) l4.destroy(this.socket, new Bv8)
        }
        onUpgrade(A) {
            let {
                upgrade: Q,
                client: B,
                socket: G,
                headers: Z,
                statusCode: I
            } = this;
            Y4(Q), Y4(B[y5A] === G), Y4(!G.destroyed), Y4(!this.paused), Y4((Z.length & 1) === 0);
            let Y = B[cR][B[gL]];
            Y4(Y), Y4(Y.upgrade || Y.method === "CONNECT"), this.statusCode = null, this.statusText = "", this.shouldKeepAlive = null, this.headers = [], this.headersSize = 0, G.unshift(A), G[wJ].destroy(), G[wJ] = null, G[Yk1] = null, G[uL] = null, Uv8(G), B[y5A] = null, B[SrQ] = null, B[cR][B[gL]++] = null, B.emit("disconnect", B[jrQ], [B], new k5A("upgrade"));
            try {
                Y.onUpgrade(I, Z, G)
            } catch (J) {
                l4.destroy(G, J)
            }
            B[nd]()
        }
        onHeadersComplete(A, Q, B) {
            let {
                client: G,
                socket: Z,
                headers: I,
                statusText: Y
            } = this;
            if (Z.destroyed) return -1;
            let J = G[cR][G[gL]];
            if (!J) return -1;
            if (Y4(!this.upgrade), Y4(this.statusCode < 200), A === 100) return l4.destroy(Z, new IpA("bad response", l4.getSocketInfo(Z))), -1;
            if (Q && !J.upgrade) return l4.destroy(Z, new IpA("bad upgrade", l4.getSocketInfo(Z))), -1;
            if (Y4(this.timeoutType === x5A), this.statusCode = A, this.shouldKeepAlive = B || J.method === "HEAD" && !Z[ez] && this.connection.toLowerCase() === "keep-alive", this.statusCode >= 200) {
                let X = J.bodyTimeout != null ? J.bodyTimeout : G[Dv8];
                this.setTimeout(X, ZpA)
            } else if (this.timeout) {
                if (this.timeout.refresh) this.timeout.refresh()
            }
            if (J.method === "CONNECT") return Y4(G[RH] === 1), this.upgrade = !0, 2;
            if (Q) return Y4(G[RH] === 1), this.upgrade = !0, 2;
            if (Y4((this.headers.length & 1) === 0), this.headers = [], this.headersSize = 0, this.shouldKeepAlive && G[GpA]) {
                let X = this.keepAlive ? l4.parseKeepAliveTimeout(this.keepAlive) : null;
                if (X != null) {
                    let F = Math.min(X - G[Vv8], G[Fv8]);
                    if (F <= 0) Z[ez] = !0;
                    else G[YpA] = F
                } else G[YpA] = G[Jv8]
            } else Z[ez] = !0;
            let W = J.onHeaders(A, I, this.resume, Y) === !1;
            if (J.aborted) return -1;
            if (J.method === "HEAD") return 1;
            if (A < 200) return 1;
            if (Z[sCA]) Z[sCA] = !1, G[nd]();
            return W ? sS.ERROR.PAUSED : 0
        }
        onBody(A) {
            let {
                client: Q,
                socket: B,
                statusCode: G,
                maxResponseSize: Z
            } = this;
            if (B.destroyed) return -1;
            let I = Q[cR][Q[gL]];
            if (Y4(I), Y4(this.timeoutType === ZpA), this.timeout) {
                if (this.timeout.refresh) this.timeout.refresh()
            }
            if (Y4(G >= 200), Z > -1 && this.bytesRead + A.length > Z) return l4.destroy(B, new Iv8), -1;
            if (this.bytesRead += A.length, I.onData(A) === !1) return sS.ERROR.PAUSED
        }
        onMessageComplete() {
            let {
                client: A,
                socket: Q,
                statusCode: B,
                upgrade: G,
                headers: Z,
                contentLength: I,
                bytesRead: Y,
                shouldKeepAlive: J
            } = this;
            if (Q.destroyed && (!B || J)) return -1;
            if (G) return;
            Y4(B >= 100), Y4((this.headers.length & 1) === 0);
            let W = A[cR][A[gL]];
            if (Y4(W), this.statusCode = null, this.statusText = "", this.bytesRead = 0, this.contentLength = "", this.keepAlive = "", this.connection = "", this.headers = [], this.headersSize = 0, B < 200) return;
            if (W.method !== "HEAD" && I && Y !== parseInt(I, 10)) return l4.destroy(Q, new Av8), -1;
            if (W.onComplete(Z), A[cR][A[gL]++] = null, Q[ad]) return Y4(A[RH] === 0), l4.destroy(Q, new k5A("reset")), sS.ERROR.PAUSED;
            else if (!J) return l4.destroy(Q, new k5A("reset")), sS.ERROR.PAUSED;
            else if (Q[ez] && A[RH] === 0) return l4.destroy(Q, new k5A("reset")), sS.ERROR.PAUSED;
            else if (A[GpA] == null || A[GpA] === 1) setImmediate(() => A[nd]());
            else A[nd]()
        }
    }

    function OrQ(A) {
        let {
            socket: Q,
            timeoutType: B,
            client: G,
            paused: Z
        } = A.deref();
        if (B === x5A) {
            if (!Q[ad] || Q.writableNeedDrain || G[RH] > 1) Y4(!Z, "cannot be paused while waiting for headers"), l4.destroy(Q, new Qv8)
        } else if (B === ZpA) {
            if (!Z) l4.destroy(Q, new Gv8)
        } else if (B === Xk1) Y4(G[RH] === 0 && G[YpA]), l4.destroy(Q, new k5A("socket idle timeout"))
    }
    async function qv8(A, Q) {
        if (A[y5A] = Q, !Ik1) Ik1 = await Wk1, Wk1 = null;
        Q[nCA] = !1, Q[ad] = !1, Q[ez] = !1, Q[sCA] = !1, Q[wJ] = new _rQ(A, Q, Ik1), QpA(Q, "error", function(G) {
            Y4(G.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
            let Z = this[wJ];
            if (G.code === "ECONNRESET" && Z.statusCode && !Z.shouldKeepAlive) {
                Z.onMessageComplete();
                return
            }
            this[uL] = G, this[Yk1][Ev8](G)
        }), QpA(Q, "readable", function() {
            let G = this[wJ];
            if (G) G.readMore()
        }), QpA(Q, "end", function() {
            let G = this[wJ];
            if (G.statusCode && !G.shouldKeepAlive) {
                G.onMessageComplete();
                return
            }
            l4.destroy(this, new IpA("other side closed", l4.getSocketInfo(this)))
        }), QpA(Q, "close", function() {
            let G = this[Yk1],
                Z = this[wJ];
            if (Z) {
                if (!this[uL] && Z.statusCode && !Z.shouldKeepAlive) Z.onMessageComplete();
                this[wJ].destroy(), this[wJ] = null
            }
            let I = this[uL] || new IpA("closed", l4.getSocketInfo(this));
            if (G[y5A] = null, G[SrQ] = null, G.destroyed) {
                Y4(G[Yv8] === 0);
                let Y = G[cR].splice(G[gL]);
                for (let J = 0; J < Y.length; J++) {
                    let W = Y[J];
                    l4.errorRequest(G, W, I)
                }
            } else if (G[RH] > 0 && I.code !== "UND_ERR_INFO") {
                let Y = G[cR][G[gL]];
                G[cR][G[gL]++] = null, l4.errorRequest(G, Y, I)
            }
            G[Xv8] = G[gL], Y4(G[RH] === 0), G.emit("disconnect", G[jrQ], [G], I), G[nd]()
        });
        let B = !1;
        return Q.on("close", () => {
            B = !0
        }), {
            version: "h1",
            defaultPipelining: 1,
            write(...G) {
                return Mv8(A, ...G)
            },
            resume() {
                Nv8(A)
            },
            destroy(G, Z) {
                if (B) queueMicrotask(Z);
                else Q.destroy(G).on("close", Z)
            },
            get destroyed() {
                return Q.destroyed
            },
            busy(G) {
                if (Q[ad] || Q[ez] || Q[sCA]) return !0;
                if (G) {
                    if (A[RH] > 0 && !G.idempotent) return !0;
                    if (A[RH] > 0 && (G.upgrade || G.method === "CONNECT")) return !0;
                    if (A[RH] > 0 && l4.bodyLength(G.body) !== 0 && (l4.isStream(G.body) || l4.isAsyncIterable(G.body) || l4.isFormDataLike(G.body))) return !0
                }
                return !1
            }
        }
    }

    function Nv8(A) {
        let Q = A[y5A];
        if (Q && !Q.destroyed) {
            if (A[LrQ] === 0) {
                if (!Q[nCA] && Q.unref) Q.unref(), Q[nCA] = !0
            } else if (Q[nCA] && Q.ref) Q.ref(), Q[nCA] = !1;
            if (A[LrQ] === 0) {
                if (Q[wJ].timeoutType !== Xk1) Q[wJ].setTimeout(A[YpA], Xk1)
            } else if (A[RH] > 0 && Q[wJ].statusCode < 200) {
                if (Q[wJ].timeoutType !== x5A) {
                    let B = A[cR][A[gL]],
                        G = B.headersTimeout != null ? B.headersTimeout : A[Kv8];
                    Q[wJ].setTimeout(G, x5A)
                }
            }
        }
    }

    function Lv8(A) {
        return A !== "GET" && A !== "HEAD" && A !== "OPTIONS" && A !== "TRACE" && A !== "CONNECT"
    }

    function Mv8(A, Q) {
        let {
            method: B,
            path: G,
            host: Z,
            upgrade: I,
            blocking: Y,
            reset: J
        } = Q, {
            body: W,
            headers: X,
            contentLength: F
        } = Q, V = B === "PUT" || B === "POST" || B === "PATCH" || B === "QUERY" || B === "PROPFIND" || B === "PROPPATCH";
        if (l4.isFormDataLike(W)) {
            if (!Zk1) Zk1 = _5A().extractBody;
            let [E, z] = Zk1(W);
            if (Q.contentType == null) X.push("content-type", z);
            W = E.stream, F = E.length
        } else if (l4.isBlobLike(W) && Q.contentType == null && W.type) X.push("content-type", W.type);
        if (W && typeof W.read === "function") W.read(0);
        let K = l4.bodyLength(W);
        if (F = K ?? F, F === null) F = Q.contentLength;
        if (F === 0 && !V) F = null;
        if (Lv8(B) && F > 0 && Q.contentLength !== null && Q.contentLength !== F) {
            if (A[Jk1]) return l4.errorRequest(A, Q, new Ho), !1;
            process.emitWarning(new Ho)
        }
        let D = A[y5A],
            H = (E) => {
                if (Q.aborted || Q.completed) return;
                l4.errorRequest(A, Q, E || new PrQ), l4.destroy(W), l4.destroy(D, new k5A("aborted"))
            };
        try {
            Q.onConnect(H)
        } catch (E) {
            l4.errorRequest(A, Q, E)
        }
        if (Q.aborted) return !1;
        if (B === "HEAD") D[ez] = !0;
        if (I || B === "CONNECT") D[ez] = !0;
        if (J != null) D[ez] = J;
        if (A[MrQ] && D[Hv8]++ >= A[MrQ]) D[ez] = !0;
        if (Y) D[sCA] = !0;
        let C = `${B} ${G} HTTP/1.1\r
`;
        if (typeof Z === "string") C += `host: ${Z}\r
`;
        else C += A[Wv8];
        if (I) C += `connection: upgrade\r
upgrade: ${I}\r
`;
        else if (A[GpA] && !D[ez]) C += `connection: keep-alive\r
`;
        else C += `connection: close\r
`;
        if (Array.isArray(X))
            for (let E = 0; E < X.length; E += 2) {
                let z = X[E + 0],
                    w = X[E + 1];
                if (Array.isArray(w))
                    for (let N = 0; N < w.length; N++) C += `${z}: ${w[N]}\r
`;
                else C += `${z}: ${w}\r
`
            }
        if (NrQ.sendHeaders.hasSubscribers) NrQ.sendHeaders.publish({
            request: Q,
            headers: C,
            socket: D
        });
        if (!W || K === 0) RrQ(H, null, A, Q, D, F, C, V);
        else if (l4.isBuffer(W)) RrQ(H, W, A, Q, D, F, C, V);
        else if (l4.isBlobLike(W))
            if (typeof W.stream === "function") TrQ(H, W.stream(), A, Q, D, F, C, V);
            else Rv8(H, W, A, Q, D, F, C, V);
        else if (l4.isStream(W)) Ov8(H, W, A, Q, D, F, C, V);
        else if (l4.isIterable(W)) TrQ(H, W, A, Q, D, F, C, V);
        else Y4(!1);
        return !0
    }

    function Ov8(A, Q, B, G, Z, I, Y, J) {
        Y4(I !== 0 || B[RH] === 0, "stream body cannot be pipelined");
        let W = !1,
            X = new Fk1({
                abort: A,
                socket: Z,
                request: G,
                contentLength: I,
                client: B,
                expectsPayload: J,
                header: Y
            }),
            F = function(H) {
                if (W) return;
                try {
                    if (!X.write(H) && this.pause) this.pause()
                } catch (C) {
                    l4.destroy(this, C)
                }
            },
            V = function() {
                if (W) return;
                if (Q.resume) Q.resume()
            },
            K = function() {
                if (queueMicrotask(() => {
                        Q.removeListener("error", D)
                    }), !W) {
                    let H = new PrQ;
                    queueMicrotask(() => D(H))
                }
            },
            D = function(H) {
                if (W) return;
                if (W = !0, Y4(Z.destroyed || Z[ad] && B[RH] <= 1), Z.off("drain", V).off("error", D), Q.removeListener("data", F).removeListener("end", D).removeListener("close", K), !H) try {
                    X.end()
                } catch (C) {
                    H = C
                }
                if (X.destroy(H), H && (H.code !== "UND_ERR_INFO" || H.message !== "reset")) l4.destroy(Q, H);
                else l4.destroy(Q)
            };
        if (Q.on("data", F).on("end", D).on("error", D).on("close", K), Q.resume) Q.resume();
        if (Z.on("drain", V).on("error", D), Q.errorEmitted ?? Q.errored) setImmediate(() => D(Q.errored));
        else if (Q.endEmitted ?? Q.readableEnded) setImmediate(() => D(null));
        if (Q.closeEmitted ?? Q.closed) setImmediate(K)
    }

    function RrQ(A, Q, B, G, Z, I, Y, J) {
        try {
            if (!Q)
                if (I === 0) Z.write(`${Y}content-length: 0\r
\r
`, "latin1");
                else Y4(I === null, "no body must not have content length"), Z.write(`${Y}\r
`, "latin1");
            else if (l4.isBuffer(Q)) {
                if (Y4(I === Q.byteLength, "buffer body must have content length"), Z.cork(), Z.write(`${Y}content-length: ${I}\r
\r
`, "latin1"), Z.write(Q), Z.uncork(), G.onBodySent(Q), !J && G.reset !== !1) Z[ez] = !0
            }
            G.onRequestSent(), B[nd]()
        } catch (W) {
            A(W)
        }
    }
    async function Rv8(A, Q, B, G, Z, I, Y, J) {
        Y4(I === Q.size, "blob body must have content length");
        try {
            if (I != null && I !== Q.size) throw new Ho;
            let W = Buffer.from(await Q.arrayBuffer());
            if (Z.cork(), Z.write(`${Y}content-length: ${I}\r
\r
`, "latin1"), Z.write(W), Z.uncork(), G.onBodySent(W), G.onRequestSent(), !J && G.reset !== !1) Z[ez] = !0;
            B[nd]()
        } catch (W) {
            A(W)
        }
    }
    async function TrQ(A, Q, B, G, Z, I, Y, J) {
        Y4(I !== 0 || B[RH] === 0, "iterator body cannot be pipelined");
        let W = null;

        function X() {
            if (W) {
                let K = W;
                W = null, K()
            }
        }
        let F = () => new Promise((K, D) => {
            if (Y4(W === null), Z[uL]) D(Z[uL]);
            else W = K
        });
        Z.on("close", X).on("drain", X);
        let V = new Fk1({
            abort: A,
            socket: Z,
            request: G,
            contentLength: I,
            client: B,
            expectsPayload: J,
            header: Y
        });
        try {
            for await (let K of Q) {
                if (Z[uL]) throw Z[uL];
                if (!V.write(K)) await F()
            }
            V.end()
        } catch (K) {
            V.destroy(K)
        } finally {
            Z.off("close", X).off("drain", X)
        }
    }
    class Fk1 {
        constructor({
            abort: A,
            socket: Q,
            request: B,
            contentLength: G,
            client: Z,
            expectsPayload: I,
            header: Y
        }) {
            this.socket = Q, this.request = B, this.contentLength = G, this.client = Z, this.bytesWritten = 0, this.expectsPayload = I, this.header = Y, this.abort = A, Q[ad] = !0
        }
        write(A) {
            let {
                socket: Q,
                request: B,
                contentLength: G,
                client: Z,
                bytesWritten: I,
                expectsPayload: Y,
                header: J
            } = this;
            if (Q[uL]) throw Q[uL];
            if (Q.destroyed) return !1;
            let W = Buffer.byteLength(A);
            if (!W) return !0;
            if (G !== null && I + W > G) {
                if (Z[Jk1]) throw new Ho;
                process.emitWarning(new Ho)
            }
            if (Q.cork(), I === 0) {
                if (!Y && B.reset !== !1) Q[ez] = !0;
                if (G === null) Q.write(`${J}transfer-encoding: chunked\r
`, "latin1");
                else Q.write(`${J}content-length: ${G}\r
\r
`, "latin1")
            }
            if (G === null) Q.write(`\r
${W.toString(16)}\r
`, "latin1");
            this.bytesWritten += W;
            let X = Q.write(A);
            if (Q.uncork(), B.onBodySent(A), !X) {
                if (Q[wJ].timeout && Q[wJ].timeoutType === x5A) {
                    if (Q[wJ].timeout.refresh) Q[wJ].timeout.refresh()
                }
            }
            return X
        }
        end() {
            let {
                socket: A,
                contentLength: Q,
                client: B,
                bytesWritten: G,
                expectsPayload: Z,
                header: I,
                request: Y
            } = this;
            if (Y.onRequestSent(), A[ad] = !1, A[uL]) throw A[uL];
            if (A.destroyed) return;
            if (G === 0)
                if (Z) A.write(`${I}content-length: 0\r
\r
`, "latin1");
                else A.write(`${I}\r
`, "latin1");
            else if (Q === null) A.write(`\r
0\r
\r
`, "latin1");
            if (Q !== null && G !== Q)
                if (B[Jk1]) throw new Ho;
                else process.emitWarning(new Ho);
            if (A[wJ].timeout && A[wJ].timeoutType === x5A) {
                if (A[wJ].timeout.refresh) A[wJ].timeout.refresh()
            }
            B[nd]()
        }