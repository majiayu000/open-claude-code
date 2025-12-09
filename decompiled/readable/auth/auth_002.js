/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.887Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 2/61
 * Lines: 2999 - 4495 (1497 lines)
 * Original file: cli.js
 */

        return G
    },
    kR9, yR9 = (A) => {
        return A.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(B, G, Z) {
            return G.toUpperCase() + Z
        })
    },
    eE0, xR9, Zz0 = (A, Q) => {
        let B = Object.getOwnPropertyDescriptors(A),
            G = {};
        KVA(B, (Z, I) => {
            let Y;
            if ((Y = Q(Z, I, A)) !== !1) G[I] = Y || Z
        }), Object.defineProperties(A, G)
    },
    vR9 = (A) => {
        Zz0(A, (Q, B) => {
            if (n$(A) && ["arguments", "caller", "callee"].indexOf(B) !== -1) return !1;
            let G = A[B];
            if (!n$(G)) return;
            if (Q.enumerable = !1, "writable" in Q) {
                Q.writable = !1;
                return
            }
            if (!Q.set) Q.set = () => {
                throw Error("Can not rewrite read-only method '" + B + "'")
            }
        })
    },
    bR9 = (A, Q) => {
        let B = {},
            G = (Z) => {
                Z.forEach((I) => {
                    B[I] = !0
                })
            };
        return A2A(A) ? G(A) : G(String(A).split(Q)), B
    },
    fR9 = () => {},
    hR9 = (A, Q) => {
        return A != null && Number.isFinite(A = +A) ? A : Q
    },
    uR9 = (A) => {
        let Q = [, , , , , , , , , , ],
            B = (G, Z) => {
                if (DkA(G)) {
                    if (Q.indexOf(G) >= 0) return;
                    if (!("toJSON" in G)) {
                        Q[Z] = G;
                        let I = A2A(G) ? [] : {};
                        return KVA(G, (Y, J) => {
                            let W = B(Y, Z + 1);
                            !VVA(W) && (I[J] = W)
                        }), Q[Z] = void 0, I
                    }
                }
                return G
            };
        return B(A, 0)
    },
    mR9, dR9 = (A) => A && (DkA(A) || n$(A)) && n$(A.then) && n$(A.catch),
    Iz0, cR9, f1;
var lG = L(() => {
    ({
        toString: YR9
    } = Object.prototype), {
        getPrototypeOf: VX1
    } = Object, VkA = ((A) => (Q) => {
        let B = YR9.call(Q);
        return A[B] || (A[B] = B.slice(8, -1).toLowerCase())
    })(Object.create(null)), {
        isArray: A2A
    } = Array, VVA = KkA("undefined");
    Az0 = VR("ArrayBuffer");
    XR9 = KkA("string"), n$ = KkA("function"), Qz0 = KkA("number"), VR9 = VR("Date"), KR9 = VR("File"), DR9 = VR("Blob"), HR9 = VR("FileList"), zR9 = VR("URLSearchParams"), [UR9, $R9, wR9, qR9] = ["ReadableStream", "Request", "Response", "Headers"].map(VR);
    Us = (() => {
        if (typeof globalThis < "u") return globalThis;
        return typeof self < "u" ? self : typeof window < "u" ? window : global
    })();
    jR9 = ((A) => {
        return (Q) => {
            return A && Q instanceof A
        }
    })(typeof Uint8Array < "u" && VX1(Uint8Array)), kR9 = VR("HTMLFormElement"), eE0 = (({
        hasOwnProperty: A
    }) => (Q, B) => A.call(Q, B))(Object.prototype), xR9 = VR("RegExp");
    mR9 = VR("AsyncFunction"), Iz0 = ((A, Q) => {
        if (A) return setImmediate;
        return Q ? ((B, G) => {
            return Us.addEventListener("message", ({
                source: Z,
                data: I
            }) => {
                if (Z === Us && I === B) G.length && G.shift()()
            }, !1), (Z) => {
                G.push(Z), Us.postMessage(B, "*")
            }
        })(`axios@${Math.random()}`, []) : (B) => setTimeout(B)
    })(typeof setImmediate === "function", n$(Us.postMessage)), cR9 = typeof queueMicrotask < "u" ? queueMicrotask.bind(Us) : typeof process < "u" && process.nextTick || Iz0, f1 = {
        isArray: A2A,
        isArrayBuffer: Az0,
        isBuffer: JR9,
        isFormData: ER9,
        isArrayBufferView: WR9,
        isString: XR9,
        isNumber: Qz0,
        isBoolean: FR9,
        isObject: DkA,
        isPlainObject: FkA,
        isReadableStream: UR9,
        isRequest: $R9,
        isResponse: wR9,
        isHeaders: qR9,
        isUndefined: VVA,
        isDate: VR9,
        isFile: KR9,
        isBlob: DR9,
        isRegExp: xR9,
        isFunction: n$,
        isStream: CR9,
        isURLSearchParams: zR9,
        isTypedArray: jR9,
        isFileList: HR9,
        forEach: KVA,
        merge: FX1,
        extend: LR9,
        trim: NR9,
        stripBOM: MR9,
        inherits: OR9,
        toFlatObject: RR9,
        kindOf: VkA,
        kindOfTest: VR,
        endsWith: TR9,
        toArray: PR9,
        forEachEntry: SR9,
        matchAll: _R9,
        isHTMLForm: kR9,
        hasOwnProperty: eE0,
        hasOwnProp: eE0,
        reduceDescriptors: Zz0,
        freezeMethods: vR9,
        toObjectSet: bR9,
        toCamelCase: yR9,
        noop: fR9,
        toFiniteNumber: hR9,
        findKey: Bz0,
        global: Us,
        isContextDefined: Gz0,
        isSpecCompliantForm: gR9,
        toJSONObject: uR9,
        isAsyncFn: mR9,
        isThenable: dR9,
        setImmediate: Iz0,
        asap: cR9
    }
});

function Q2A(A, Q, B, G, Z) {
    if (Error.call(this), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = Error().stack;
    if (this.message = A, this.name = "AxiosError", Q && (this.code = Q), B && (this.config = B), G && (this.request = G), Z) this.response = Z, this.status = Z.status ? Z.status : null
}
var Yz0, Jz0, NB;
var a$ = L(() => {
    lG();
    f1.inherits(Q2A, Error, {
        toJSON: function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: f1.toJSONObject(this.config),
                code: this.code,
                status: this.status
            }
        }
    });
    Yz0 = Q2A.prototype, Jz0 = {};
    ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((A) => {
        Jz0[A] = {
            value: A
        }
    });
    Object.defineProperties(Q2A, Jz0);
    Object.defineProperty(Yz0, "isAxiosError", {
        value: !0
    });
    Q2A.from = (A, Q, B, G, Z, I) => {
        let Y = Object.create(Yz0);
        return f1.toFlatObject(A, Y, function(W) {
            return W !== Error.prototype
        }, (J) => {
            return J !== "isAxiosError"
        }), Q2A.call(Y, A.message, Q, B, G, Z), Y.cause = A, Y.name = A.name, I && Object.assign(Y, I), Y
    };
    NB = Q2A
});
var Fz0 = U((_p3, Xz0) => {
    var Wz0 = UA("stream").Stream,
        pR9 = UA("util");
    Xz0.exports = KR;

function KR() {
        this.source = null, this.dataSize = 0, this.maxDataSize = 1048576, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = []
    }
    pR9.inherits(KR, Wz0);
    KR.create = function(A, Q) {
        var B = new this;
        Q = Q || {};
        for (var G in Q) B[G] = Q[G];
        B.source = A;
        var Z = A.emit;
        if (A.emit = function() {
                return B._handleEmit(arguments), Z.apply(A, arguments)
            }, A.on("error", function() {}), B.pauseStream) A.pause();
        return B
    };
    Object.defineProperty(KR.prototype, "readable", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.source.readable
        }
    });
    KR.prototype.setEncoding = function() {
        return this.source.setEncoding.apply(this.source, arguments)
    };
    KR.prototype.resume = function() {
        if (!this._released) this.release();
        this.source.resume()
    };
    KR.prototype.pause = function() {
        this.source.pause()
    };
    KR.prototype.release = function() {
        this._released = !0, this._bufferedEvents.forEach(function(A) {
            this.emit.apply(this, A)
        }.bind(this)), this._bufferedEvents = []
    };
    KR.prototype.pipe = function() {
        var A = Wz0.prototype.pipe.apply(this, arguments);
        return this.resume(), A
    };
    KR.prototype._handleEmit = function(A) {
        if (this._released) {
            this.emit.apply(this, A);
            return
        }
        if (A[0] === "data") this.dataSize += A[1].length, this._checkIfMaxDataSizeExceeded();
        this._bufferedEvents.push(A)
    };
    KR.prototype._checkIfMaxDataSizeExceeded = function() {
        if (this._maxDataSizeExceeded) return;
        if (this.dataSize <= this.maxDataSize) return;
        this._maxDataSizeExceeded = !0;
        var A = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
        this.emit("error", Error(A))
    }
});
var Hz0 = U((kp3, Dz0) => {
    var lR9 = UA("util"),
        Kz0 = UA("stream").Stream,
        Vz0 = Fz0();
    Dz0.exports = DJ;

function DJ() {
        this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2097152, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1
    }
    lR9.inherits(DJ, Kz0);
    DJ.create = function(A) {
        var Q = new this;
        A = A || {};
        for (var B in A) Q[B] = A[B];
        return Q
    };
    DJ.isStreamLike = function(A) {
        return typeof A !== "function" && typeof A !== "string" && typeof A !== "boolean" && typeof A !== "number" && !Buffer.isBuffer(A)
    };
    DJ.prototype.append = function(A) {
        var Q = DJ.isStreamLike(A);
        if (Q) {
            if (!(A instanceof Vz0)) {
                var B = Vz0.create(A, {
                    maxDataSize: 1 / 0,
                    pauseStream: this.pauseStreams
                });
                A.on("data", this._checkDataSize.bind(this)), A = B
            }
            if (this._handleErrors(A), this.pauseStreams) A.pause()
        }
        return this._streams.push(A), this
    };
    DJ.prototype.pipe = function(A, Q) {
        return Kz0.prototype.pipe.call(this, A, Q), this.resume(), A
    };
    DJ.prototype._getNext = function() {
        if (this._currentStream = null, this._insideLoop) {
            this._pendingNext = !0;
            return
        }
        this._insideLoop = !0;
        try {
            do this._pendingNext = !1, this._realGetNext(); while (this._pendingNext)
        } finally {
            this._insideLoop = !1
        }
    };
    DJ.prototype._realGetNext = function() {
        var A = this._streams.shift();
        if (typeof A > "u") {
            this.end();
            return
        }
        if (typeof A !== "function") {
            this._pipeNext(A);
            return
        }
        var Q = A;
        Q(function(B) {
            var G = DJ.isStreamLike(B);
            if (G) B.on("data", this._checkDataSize.bind(this)), this._handleErrors(B);
            this._pipeNext(B)
        }.bind(this))
    };
    DJ.prototype._pipeNext = function(A) {
        this._currentStream = A;
        var Q = DJ.isStreamLike(A);
        if (Q) {
            A.on("end", this._getNext.bind(this)), A.pipe(this, {
                end: !1
            });
            return
        }
        var B = A;
        this.write(B), this._getNext()
    };
    DJ.prototype._handleErrors = function(A) {
        var Q = this;
        A.on("error", function(B) {
            Q._emitError(B)
        })
    };
    DJ.prototype.write = function(A) {
        this.emit("data", A)
    };
    DJ.prototype.pause = function() {
        if (!this.pauseStreams) return;
        if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function") this._currentStream.pause();
        this.emit("pause")
    };
    DJ.prototype.resume = function() {
        if (!this._released) this._released = !0, this.writable = !0, this._getNext();
        if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function") this._currentStream.resume();
        this.emit("resume")
    };
    DJ.prototype.end = function() {
        this._reset(), this.emit("end")
    };
    DJ.prototype.destroy = function() {
        this._reset(), this.emit("close")
    };
    DJ.prototype._reset = function() {
        this.writable = !1, this._streams = [], this._currentStream = null
    };
    DJ.prototype._checkDataSize = function() {
        if (this._updateDataSize(), this.dataSize <= this.maxDataSize) return;
        var A = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
        this._emitError(Error(A))
    };
    DJ.prototype._updateDataSize = function() {
        this.dataSize = 0;
        var A = this;
        if (this._streams.forEach(function(Q) {
                if (!Q.dataSize) return;
                A.dataSize += Q.dataSize
            }), this._currentStream && this._currentStream.dataSize) this.dataSize += this._currentStream.dataSize
    };
    DJ.prototype._emitError = function(A) {
        this._reset(), this.emit("error", A)
    }
});
var Cz0 = U((yp3, iR9) => {
    iR9.exports = {
        "application/1d-interleaved-parityfec": {
            source: "iana"
        },
        "application/3gpdash-qoe-report+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/3gpp-ims+xml": {
            source: "iana",
            compressible: !0
        },
        "application/3gpphal+json": {
            source: "iana",
            compressible: !0
        },
        "application/3gpphalforms+json": {
            source: "iana",
            compressible: !0
        },
        "application/a2l": {
            source: "iana"
        },
        "application/ace+cbor": {
            source: "iana"
        },
        "application/activemessage": {
            source: "iana"
        },
        "application/activity+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-costmap+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-costmapfilter+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-directory+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointcost+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointcostparams+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointprop+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-endpointpropparams+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-error+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-networkmap+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-networkmapfilter+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-updatestreamcontrol+json": {
            source: "iana",
            compressible: !0
        },
        "application/alto-updatestreamparams+json": {
            source: "iana",
            compressible: !0
        },
        "application/aml": {
            source: "iana"
        },
        "application/andrew-inset": {
            source: "iana",
            extensions: ["ez"]
        },
        "application/applefile": {
            source: "iana"
        },
        "application/applixware": {
            source: "apache",
            extensions: ["aw"]
        },
        "application/at+jwt": {
            source: "iana"
        },
        "application/atf": {
            source: "iana"
        },
        "application/atfx": {
            source: "iana"
        },
        "application/atom+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["atom"]
        },
        "application/atomcat+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["atomcat"]
        },
        "application/atomdeleted+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["atomdeleted"]
        },
        "application/atomicmail": {
            source: "iana"
        },
        "application/atomsvc+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["atomsvc"]
        },
        "application/atsc-dwd+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["dwd"]
        },
        "application/atsc-dynamic-event-message": {
            source: "iana"
        },
        "application/atsc-held+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["held"]
        },
        "application/atsc-rdt+json": {
            source: "iana",
            compressible: !0
        },
        "application/atsc-rsat+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["rsat"]
        },
        "application/atxml": {
            source: "iana"
        },
        "application/auth-policy+xml": {
            source: "iana",
            compressible: !0
        },
        "application/bacnet-xdd+zip": {
            source: "iana",
            compressible: !1
        },
        "application/batch-smtp": {
            source: "iana"
        },
        "application/bdoc": {
            compressible: !1,
            extensions: ["bdoc"]
        },
        "application/beep+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/calendar+json": {
            source: "iana",
            compressible: !0
        },
        "application/calendar+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xcs"]
        },
        "application/call-completion": {
            source: "iana"
        },
        "application/cals-1840": {
            source: "iana"
        },
        "application/captive+json": {
            source: "iana",
            compressible: !0
        },
        "application/cbor": {
            source: "iana"
        },
        "application/cbor-seq": {
            source: "iana"
        },
        "application/cccex": {
            source: "iana"
        },
        "application/ccmp+xml": {
            source: "iana",
            compressible: !0
        },
        "application/ccxml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["ccxml"]
        },
        "application/cdfx+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["cdfx"]
        },
        "application/cdmi-capability": {
            source: "iana",
            extensions: ["cdmia"]
        },
        "application/cdmi-container": {
            source: "iana",
            extensions: ["cdmic"]
        },
        "application/cdmi-domain": {
            source: "iana",
            extensions: ["cdmid"]
        },
        "application/cdmi-object": {
            source: "iana",
            extensions: ["cdmio"]
        },
        "application/cdmi-queue": {
            source: "iana",
            extensions: ["cdmiq"]
        },
        "application/cdni": {
            source: "iana"
        },
        "application/cea": {
            source: "iana"
        },
        "application/cea-2018+xml": {
            source: "iana",
            compressible: !0
        },
        "application/cellml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/cfw": {
            source: "iana"
        },
        "application/city+json": {
            source: "iana",
            compressible: !0
        },
        "application/clr": {
            source: "iana"
        },
        "application/clue+xml": {
            source: "iana",
            compressible: !0
        },
        "application/clue_info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/cms": {
            source: "iana"
        },
        "application/cnrp+xml": {
            source: "iana",
            compressible: !0
        },
        "application/coap-group+json": {
            source: "iana",
            compressible: !0
        },
        "application/coap-payload": {
            source: "iana"
        },
        "application/commonground": {
            source: "iana"
        },
        "application/conference-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/cose": {
            source: "iana"
        },
        "application/cose-key": {
            source: "iana"
        },
        "application/cose-key-set": {
            source: "iana"
        },
        "application/cpl+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["cpl"]
        },
        "application/csrattrs": {
            source: "iana"
        },
        "application/csta+xml": {
            source: "iana",
            compressible: !0
        },
        "application/cstadata+xml": {
            source: "iana",
            compressible: !0
        },
        "application/csvm+json": {
            source: "iana",
            compressible: !0
        },
        "application/cu-seeme": {
            source: "apache",
            extensions: ["cu"]
        },
        "application/cwt": {
            source: "iana"
        },
        "application/cybercash": {
            source: "iana"
        },
        "application/dart": {
            compressible: !0
        },
        "application/dash+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mpd"]
        },
        "application/dash-patch+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mpp"]
        },
        "application/dashdelta": {
            source: "iana"
        },
        "application/davmount+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["davmount"]
        },
        "application/dca-rft": {
            source: "iana"
        },
        "application/dcd": {
            source: "iana"
        },
        "application/dec-dx": {
            source: "iana"
        },
        "application/dialog-info+xml": {
            source: "iana",
            compressible: !0
        },
        "application/dicom": {
            source: "iana"
        },
        "application/dicom+json": {
            source: "iana",
            compressible: !0
        },
        "application/dicom+xml": {
            source: "iana",
            compressible: !0
        },
        "application/dii": {
            source: "iana"
        },
        "application/dit": {
            source: "iana"
        },
        "application/dns": {
            source: "iana"
        },
        "application/dns+json": {
            source: "iana",
            compressible: !0
        },
        "application/dns-message": {
            source: "iana"
        },
        "application/docbook+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["dbk"]
        },
        "application/dots+cbor": {
            source: "iana"
        },
        "application/dskpp+xml": {
            source: "iana",
            compressible: !0
        },
        "application/dssc+der": {
            source: "iana",
            extensions: ["dssc"]
        },
        "application/dssc+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["xdssc"]
        },
        "application/dvcs": {
            source: "iana"
        },
        "application/ecmascript": {
            source: "iana",
            compressible: !0,
            extensions: ["es", "ecma"]
        },
        "application/edi-consent": {
            source: "iana"
        },
        "application/edi-x12": {
            source: "iana",
            compressible: !1
        },
        "application/edifact": {
            source: "iana",
            compressible: !1
        },
        "application/efi": {
            source: "iana"
        },
        "application/elm+json": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/elm+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emergencycalldata.cap+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/emergencycalldata.comment+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emergencycalldata.control+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emergencycalldata.deviceinfo+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emergencycalldata.ecall.msd": {
            source: "iana"
        },
        "application/emergencycalldata.providerinfo+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emergencycalldata.serviceinfo+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emergencycalldata.subscriberinfo+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emergencycalldata.veds+xml": {
            source: "iana",
            compressible: !0
        },
        "application/emma+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["emma"]
        },
        "application/emotionml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["emotionml"]
        },
        "application/encaprtp": {
            source: "iana"
        },
        "application/epp+xml": {
            source: "iana",
            compressible: !0
        },
        "application/epub+zip": {
            source: "iana",
            compressible: !1,
            extensions: ["epub"]
        },
        "application/eshop": {
            source: "iana"
        },
        "application/exi": {
            source: "iana",
            extensions: ["exi"]
        },
        "application/expect-ct-report+json": {
            source: "iana",
            compressible: !0
        },
        "application/express": {
            source: "iana",
            extensions: ["exp"]
        },
        "application/fastinfoset": {
            source: "iana"
        },
        "application/fastsoap": {
            source: "iana"
        },
        "application/fdt+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["fdt"]
        },
        "application/fhir+json": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/fhir+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/fido.trusted-apps+json": {
            compressible: !0
        },
        "application/fits": {
            source: "iana"
        },
        "application/flexfec": {
            source: "iana"
        },
        "application/font-sfnt": {
            source: "iana"
        },
        "application/font-tdpfr": {
            source: "iana",
            extensions: ["pfr"]
        },
        "application/font-woff": {
            source: "iana",
            compressible: !1
        },
        "application/framework-attributes+xml": {
            source: "iana",
            compressible: !0
        },
        "application/geo+json": {
            source: "iana",
            compressible: !0,
            extensions: ["geojson"]
        },
        "application/geo+json-seq": {
            source: "iana"
        },
        "application/geopackage+sqlite3": {
            source: "iana"
        },
        "application/geoxacml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/gltf-buffer": {
            source: "iana"
        },
        "application/gml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["gml"]
        },
        "application/gpx+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["gpx"]
        },
        "application/gxf": {
            source: "apache",
            extensions: ["gxf"]
        },
        "application/gzip": {
            source: "iana",
            compressible: !1,
            extensions: ["gz"]
        },
        "application/h224": {
            source: "iana"
        },
        "application/held+xml": {
            source: "iana",
            compressible: !0
        },
        "application/hjson": {
            extensions: ["hjson"]
        },
        "application/http": {
            source: "iana"
        },
        "application/hyperstudio": {
            source: "iana",
            extensions: ["stk"]
        },
        "application/ibe-key-request+xml": {
            source: "iana",
            compressible: !0
        },
        "application/ibe-pkg-reply+xml": {
            source: "iana",
            compressible: !0
        },
        "application/ibe-pp-data": {
            source: "iana"
        },
        "application/iges": {
            source: "iana"
        },
        "application/im-iscomposing+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/index": {
            source: "iana"
        },
        "application/index.cmd": {
            source: "iana"
        },
        "application/index.obj": {
            source: "iana"
        },
        "application/index.response": {
            source: "iana"
        },
        "application/index.vnd": {
            source: "iana"
        },
        "application/inkml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["ink", "inkml"]
        },
        "application/iotp": {
            source: "iana"
        },
        "application/ipfix": {
            source: "iana",
            extensions: ["ipfix"]
        },
        "application/ipp": {
            source: "iana"
        },
        "application/isup": {
            source: "iana"
        },
        "application/its+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["its"]
        },
        "application/java-archive": {
            source: "apache",
            compressible: !1,
            extensions: ["jar", "war", "ear"]
        },
        "application/java-serialized-object": {
            source: "apache",
            compressible: !1,
            extensions: ["ser"]
        },
        "application/java-vm": {
            source: "apache",
            compressible: !1,
            extensions: ["class"]
        },
        "application/javascript": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["js", "mjs"]
        },
        "application/jf2feed+json": {
            source: "iana",
            compressible: !0
        },
        "application/jose": {
            source: "iana"
        },
        "application/jose+json": {
            source: "iana",
            compressible: !0
        },
        "application/jrd+json": {
            source: "iana",
            compressible: !0
        },
        "application/jscalendar+json": {
            source: "iana",
            compressible: !0
        },
        "application/json": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["json", "map"]
        },
        "application/json-patch+json": {
            source: "iana",
            compressible: !0
        },
        "application/json-seq": {
            source: "iana"
        },
        "application/json5": {
            extensions: ["json5"]
        },
        "application/jsonml+json": {
            source: "apache",
            compressible: !0,
            extensions: ["jsonml"]
        },
        "application/jwk+json": {
            source: "iana",
            compressible: !0
        },
        "application/jwk-set+json": {
            source: "iana",
            compressible: !0
        },
        "application/jwt": {
            source: "iana"
        },
        "application/kpml-request+xml": {
            source: "iana",
            compressible: !0
        },
        "application/kpml-response+xml": {
            source: "iana",
            compressible: !0
        },
        "application/ld+json": {
            source: "iana",
            compressible: !0,
            extensions: ["jsonld"]
        },
        "application/lgr+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["lgr"]
        },
        "application/link-format": {
            source: "iana"
        },
        "application/load-control+xml": {
            source: "iana",
            compressible: !0
        },
        "application/lost+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["lostxml"]
        },
        "application/lostsync+xml": {
            source: "iana",
            compressible: !0
        },
        "application/lpf+zip": {
            source: "iana",
            compressible: !1
        },
        "application/lxf": {
            source: "iana"
        },
        "application/mac-binhex40": {
            source: "iana",
            extensions: ["hqx"]
        },
        "application/mac-compactpro": {
            source: "apache",
            extensions: ["cpt"]
        },
        "application/macwriteii": {
            source: "iana"
        },
        "application/mads+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mads"]
        },
        "application/manifest+json": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0,
            extensions: ["webmanifest"]
        },
        "application/marc": {
            source: "iana",
            extensions: ["mrc"]
        },
        "application/marcxml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mrcx"]
        },
        "application/mathematica": {
            source: "iana",
            extensions: ["ma", "nb", "mb"]
        },
        "application/mathml+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mathml"]
        },
        "application/mathml-content+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mathml-presentation+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-associated-procedure-description+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-deregister+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-envelope+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-msk+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-msk-response+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-protection-description+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-reception-report+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-register+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-register-response+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-schedule+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbms-user-service-description+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mbox": {
            source: "iana",
            extensions: ["mbox"]
        },
        "application/media-policy-dataset+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mpf"]
        },
        "application/media_control+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mediaservercontrol+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mscml"]
        },
        "application/merge-patch+json": {
            source: "iana",
            compressible: !0
        },
        "application/metalink+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["metalink"]
        },
        "application/metalink4+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["meta4"]
        },
        "application/mets+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mets"]
        },
        "application/mf4": {
            source: "iana"
        },
        "application/mikey": {
            source: "iana"
        },
        "application/mipc": {
            source: "iana"
        },
        "application/missing-blocks+cbor-seq": {
            source: "iana"
        },
        "application/mmt-aei+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["maei"]
        },
        "application/mmt-usd+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["musd"]
        },
        "application/mods+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["mods"]
        },
        "application/moss-keys": {
            source: "iana"
        },
        "application/moss-signature": {
            source: "iana"
        },
        "application/mosskey-data": {
            source: "iana"
        },
        "application/mosskey-request": {
            source: "iana"
        },
        "application/mp21": {
            source: "iana",
            extensions: ["m21", "mp21"]
        },
        "application/mp4": {
            source: "iana",
            extensions: ["mp4s", "m4p"]
        },
        "application/mpeg4-generic": {
            source: "iana"
        },
        "application/mpeg4-iod": {
            source: "iana"
        },
        "application/mpeg4-iod-xmt": {
            source: "iana"
        },
        "application/mrb-consumer+xml": {
            source: "iana",
            compressible: !0
        },
        "application/mrb-publish+xml": {
            source: "iana",
            compressible: !0
        },
        "application/msc-ivr+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/msc-mixer+xml": {
            source: "iana",
            charset: "UTF-8",
            compressible: !0
        },
        "application/msword": {
            source: "iana",
            compressible: !1,
            extensions: ["doc", "dot"]
        },
        "application/mud+json": {
            source: "iana",
            compressible: !0
        },
        "application/multipart-core": {
            source: "iana"
        },
        "application/mxf": {
            source: "iana",
            extensions: ["mxf"]
        },
        "application/n-quads": {
            source: "iana",
            extensions: ["nq"]
        },
        "application/n-triples": {
            source: "iana",
            extensions: ["nt"]
        },
        "application/nasdata": {
            source: "iana"
        },
        "application/news-checkgroups": {
            source: "iana",
            charset: "US-ASCII"
        },
        "application/news-groupinfo": {
            source: "iana",
            charset: "US-ASCII"
        },
        "application/news-transmission": {
            source: "iana"
        },
        "application/nlsml+xml": {
            source: "iana",
            compressible: !0
        },
        "application/node": {
            source: "iana",
            extensions: ["cjs"]
        },
        "application/nss": {
            source: "iana"
        },
        "application/oauth-authz-req+jwt": {
            source: "iana"
        },
        "application/oblivious-dns-message": {
            source: "iana"
        },
        "application/ocsp-request": {
            source: "iana"
        },
        "application/ocsp-response": {
            source: "iana"
        },
        "application/octet-stream": {
            source: "iana",
            compressible: !1,
            extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
        },
        "application/oda": {
            source: "iana",
            extensions: ["oda"]
        },
        "application/odm+xml": {
            source: "iana",
            compressible: !0
        },
        "application/odx": {
            source: "iana"
        },
        "application/oebps-package+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["opf"]
        },
        "application/ogg": {
            source: "iana",
            compressible: !1,
            extensions: ["ogx"]
        },
        "application/omdoc+xml": {
            source: "apache",
            compressible: !0,
            extensions: ["omdoc"]
        },
        "application/onenote": {
            source: "apache",
            extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
        },
        "application/opc-nodeset+xml": {
            source: "iana",
            compressible: !0
        },
        "application/oscore": {
            source: "iana"
        },
        "application/oxps": {
            source: "iana",
            extensions: ["oxps"]
        },
        "application/p21": {
            source: "iana"
        },
        "application/p21+zip": {
            source: "iana",
            compressible: !1
        },
        "application/p2p-overlay+xml": {
            source: "iana",
            compressible: !0,
            extensions: ["relo"]
        },
        "application/parityfec": {
            source: "iana"
        },
        "application/passport": {
            source: "iana"
        },