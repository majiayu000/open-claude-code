/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.069Z
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 6/25
 * Lines: 164216 - 165715 (1500 lines)
 * Original file: cli.js
 */

    n06 = /^[a-z][a-z0-9+.-]*:/i, Qf1 = Af1
});

function FUA() {}

function $nA(A, Q, B) {
    if (!Q || wnA[A] > wnA[B]) return FUA;
    else return Q[A].bind(Q)
}

function vV(A) {
    let Q = A.logger,
        B = A.logLevel ?? "off";
    if (!Q) return a06;
    let G = WGB.get(Q);
    if (G && G[0] === B) return G[1];
    let Z = {
        error: $nA("error", Q, B),
        warn: $nA("warn", Q, B),
        info: $nA("info", Q, B),
        debug: $nA("debug", Q, B)
    };
    return WGB.set(Q, [B, Z]), Z
}
var wnA, Bf1 = (A, Q, B) => {
        if (!A) return;
        if (YGB(wnA, A)) return A;
        vV(B).warn(`${Q} was set to ${JSON.stringify(A)}, expected one of ${JSON.stringify(Object.keys(wnA))}`);
        return
    },
    a06, WGB, gb = (A) => {
        if (A.options) A.options = {
            ...A.options
        }, delete A.options.headers;
        if (A.headers) A.headers = Object.fromEntries((A.headers instanceof Headers ? [...A.headers] : Object.entries(A.headers)).map(([Q, B]) => [Q, Q.toLowerCase() === "x-api-key" || Q.toLowerCase() === "authorization" || Q.toLowerCase() === "cookie" || Q.toLowerCase() === "set-cookie" ? "***" : B]));
        if ("retryOfRequestLogID" in A) {
            if (A.retryOfRequestLogID) A.retryOf = A.retryOfRequestLogID;
            delete A.retryOfRequestLogID
        }
        return A
    };
var qnA = L(() => {
    Vt();
    wnA = {
        off: 0,
        error: 200,
        warn: 300,
        info: 400,
        debug: 500
    };
    a06 = {
        error: FUA,
        warn: FUA,
        info: FUA,
        debug: FUA
    }, WGB = new WeakMap
});
async function* s06(A, Q) {
    if (!A.body) {
        if (Q.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative") throw new yB("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api");
        throw new yB("Attempted to iterate over a response with no body")
    }
    let B = new XGB,
        G = new dc,
        Z = WUA(A.body);
    for await (let I of r06(Z)) for (let Y of G.decode(I)) {
        let J = B.decode(Y);
        if (J) yield J
    }
    for (let I of G.flush()) {
        let Y = B.decode(I);
        if (Y) yield Y
    }
}
async function* r06(A) {
    let Q = new Uint8Array;
    for await (let B of A) {
        if (B == null) continue;
        let G = B instanceof ArrayBuffer ? new Uint8Array(B) : typeof B === "string" ? XUA(B) : B,
            Z = new Uint8Array(Q.length + G.length);
        Z.set(Q), Z.set(G, Q.length), Q = Z;
        let I;
        while ((I = GGB(Q)) !== -1) yield Q.slice(0, I), Q = Q.slice(I)
    }
    if (Q.length > 0) yield Q
}

class XGB {
    constructor() {
        this.event = null, this.data = [], this.chunks = []
    }
    decode(A) {
        if (A.endsWith("\r")) A = A.substring(0, A.length - 1);
        if (!A) {
            if (!this.event && !this.data.length) return null;
            let Z = {
                event: this.event,
                data: this.data.join(`
`),
                raw: this.chunks
            };
            return this.event = null, this.data = [], this.chunks = [], Z
        }
        if (this.chunks.push(A), A.startsWith(":")) return null;
        let [Q, B, G] = o06(A, ":");
        if (G.startsWith(" ")) G = G.substring(1);
        if (Q === "event") this.event = G;
        else if (Q === "data") this.data.push(G);
        return null
    }
}

function o06(A, Q) {
    let B = A.indexOf(Q);
    if (B !== -1) return [A.substring(0, B), Q, A.substring(B + Q.length)];
    return [A, "", ""]
}
var VUA, IE;
var Gf1 = L(() => {
    fb();
    ZE();
    eb1();
    Vt();
    qnA();
    ZE();
    IE = class IE {
        constructor(A, Q, B) {
            this.iterator = A, VUA.set(this, void 0), this.controller = Q, bB(this, VUA, B, "f")
        }
        static fromSSEResponse(A, Q, B) {
            let G = !1,
                Z = B ? vV(B) : console;
            async function* I() {
                if (G) throw new yB("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
                G = !0;
                let Y = !1;
                try {
                    for await (let J of s06(A, Q)) {
                        if (J.event === "completion") try {
                            yield JSON.parse(J.data)
                        } catch (W) {
                            throw Z.error("Could not parse message into JSON:", J.data), Z.error("From chunk:", J.raw), W
                        }
                        if (J.event === "message_start" || J.event === "message_delta" || J.event === "message_stop" || J.event === "content_block_start" || J.event === "content_block_delta" || J.event === "content_block_stop") try {
                            yield JSON.parse(J.data)
                        } catch (W) {
                            throw Z.error("Could not parse message into JSON:", J.data), Z.error("From chunk:", J.raw), W
                        }
                        if (J.event === "ping") continue;
                        if (J.event === "error") throw new a2(void 0, UnA(J.data) ?? J.data, void 0, A.headers)
                    }
                    Y = !0
                } catch (J) {
                    if (hb(J)) return;
                    throw J
                } finally {
                    if (!Y) Q.abort()
                }
            }
            return new IE(I, Q, B)
        }
        static fromReadableStream(A, Q, B) {
            let G = !1;
            async function* Z() {
                let Y = new dc,
                    J = WUA(A);
                for await (let W of J) for (let X of Y.decode(W)) yield X;
                for (let W of Y.flush()) yield W
            }
            async function* I() {
                if (G) throw new yB("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
                G = !0;
                let Y = !1;
                try {
                    for await (let J of Z()) {
                        if (Y) continue;
                        if (J) yield JSON.parse(J)
                    }
                    Y = !0
                } catch (J) {
                    if (hb(J)) return;
                    throw J
                } finally {
                    if (!Y) Q.abort()
                }
            }
            return new IE(I, Q, B)
        } [(VUA = new WeakMap, Symbol.asyncIterator)]() {
            return this.iterator()
        }
        tee() {
            let A = [],
                Q = [],
                B = this.iterator(),
                G = (Z) => {
                    return {
                        next: () => {
                            if (Z.length === 0) {
                                let I = B.next();
                                A.push(I), Q.push(I)
                            }
                            return Z.shift()
                        }
                    }
                };
            return [new IE(() => G(A), this.controller, N0(this, VUA, "f")), new IE(() => G(Q), this.controller, N0(this, VUA, "f"))]
        }
        toReadableStream() {
            let A = this,
                Q;
            return ob1({
                async start() {
                    Q = A[Symbol.asyncIterator]()
                },
                async pull(B) {
                    try {
                        let {
                            value: G,
                            done: Z
                        } = await Q.next();
                        if (Z) return B.close();
                        let I = XUA(JSON.stringify(G) + `
`);
                        B.enqueue(I)
                    } catch (G) {
                        B.error(G)
                    }
                },
                async cancel() {
                    await Q.return?.()
                }
            })
        }
    }
});
var NnA = L(() => {
    Gf1()
});

function Zf1(A, Q) {
    if (!Q || !("parse" in (Q.output_format ?? {}))) return {
        ...A,
        content: A.content.map((B) => {
            if (B.type === "text") return {
                ...B,
                parsed: null
            };
            return B
        }),
        parsed_output: null
    };
    return If1(A, Q)
}

function If1(A, Q) {
    let B = null,
        G = A.content.map((Z) => {
            if (Z.type === "text") {
                let I = t06(Q, Z.text);
                if (B === null) B = I;
                return {
                    ...Z,
                    parsed: I
                }
            }
            return Z
        });
    return {
        ...A,
        content: G,
        parsed_output: B
    }
}

function t06(A, Q) {
    if (A.output_format?.type !== "json_schema") return null;
    try {
        if ("parse" in A.output_format) return A.output_format.parse(Q);
        return JSON.parse(Q)
    } catch (B) {
        throw new yB(`Failed to parse structured output: ${B}`)
    }
}
var Yf1 = L(() => {
    ZE()
});

function DGB(A) {
    return A.type === "tool_use" || A.type === "server_tool_use" || A.type === "mcp_tool_use"
}

function HGB(A) {}
var YM, cc, A7A, KUA, LnA, DUA, HUA, MnA, CUA, ub, EUA, OnA, RnA, Q7A, TnA, PnA, Jf1, FGB, jnA, Wf1, Xf1, Ff1, VGB, KGB = "__json_buf",
    Kt;
var Vf1 = L(() => {
    fb();
    rb1();
    Ft();
    NnA();
    Yf1();
    Kt = class Kt {
        constructor(A) {
            YM.add(this), this.messages = [], this.receivedMessages = [], cc.set(this, void 0), A7A.set(this, null), this.controller = new AbortController, KUA.set(this, void 0), LnA.set(this, () => {}), DUA.set(this, () => {}), HUA.set(this, void 0), MnA.set(this, () => {}), CUA.set(this, () => {}), ub.set(this, {}), EUA.set(this, !1), OnA.set(this, !1), RnA.set(this, !1), Q7A.set(this, !1), TnA.set(this, void 0), PnA.set(this, void 0), jnA.set(this, (Q) => {
                if (bB(this, OnA, !0, "f"), hb(Q)) Q = new gY;
                if (Q instanceof gY) return bB(this, RnA, !0, "f"), this._emit("abort", Q);
                if (Q instanceof yB) return this._emit("error", Q);
                if (Q instanceof Error) {
                    let B = new yB(Q.message);
                    return B.cause = Q, this._emit("error", B)
                }
                return this._emit("error", new yB(String(Q)))
            }), bB(this, KUA, new Promise((Q, B) => {
                bB(this, LnA, Q, "f"), bB(this, DUA, B, "f")
            }), "f"), bB(this, HUA, new Promise((Q, B) => {
                bB(this, MnA, Q, "f"), bB(this, CUA, B, "f")
            }), "f"), N0(this, KUA, "f").catch(() => {}), N0(this, HUA, "f").catch(() => {}), bB(this, A7A, A, "f")
        }
        get response() {
            return N0(this, TnA, "f")
        }
        get request_id() {
            return N0(this, PnA, "f")
        }
        async withResponse() {
            let A = await N0(this, KUA, "f");
            if (!A) throw Error("Could not resolve a `Response` object");
            return {
                data: this,
                response: A,
                request_id: A.headers.get("request-id")
            }
        }
        static fromReadableStream(A) {
            let Q = new Kt(null);
            return Q._run(() => Q._fromReadableStream(A)), Q
        }
        static createMessage(A, Q, B) {
            let G = new Kt(Q);
            for (let Z of Q.messages) G._addMessageParam(Z);
            return bB(G, A7A, {
                ...Q,
                stream: !0
            }, "f"), G._run(() => G._createMessage(A, {
                ...Q,
                stream: !0
            }, {
                ...B,
                headers: {
                    ...B?.headers,
                    "X-Stainless-Helper-Method": "stream"
                }
            })), G
        }
        _run(A) {
            A().then(() => {
                this._emitFinal(), this._emit("end")
            }, N0(this, jnA, "f"))
        }
        _addMessageParam(A) {
            this.messages.push(A)
        }
        _addMessage(A, Q = !0) {
            if (this.receivedMessages.push(A), Q) this._emit("message", A)
        }
        async _createMessage(A, Q, B) {
            let G = B?.signal,
                Z;
            if (G) {
                if (G.aborted) this.controller.abort();
                Z = this.controller.abort.bind(this.controller), G.addEventListener("abort", Z)
            }
            try {
                N0(this, YM, "m", Wf1).call(this);
                let {
                    response: I,
                    data: Y
                } = await A.create({
                    ...Q,
                    stream: !0
                }, {
                    ...B,
                    signal: this.controller.signal
                }).withResponse();
                this._connected(I);
                for await (let J of Y) N0(this, YM, "m", Xf1).call(this, J);
                if (Y.controller.signal?.aborted) throw new gY;
                N0(this, YM, "m", Ff1).call(this)
            } finally {
                if (G && Z) G.removeEventListener("abort", Z)
            }
        }
        _connected(A) {
            if (this.ended) return;
            bB(this, TnA, A, "f"), bB(this, PnA, A?.headers.get("request-id"), "f"), N0(this, LnA, "f").call(this, A), this._emit("connect")
        }
        get ended() {
            return N0(this, EUA, "f")
        }
        get errored() {
            return N0(this, OnA, "f")
        }
        get aborted() {
            return N0(this, RnA, "f")
        }
        abort() {
            this.controller.abort()
        }
        on(A, Q) {
            return (N0(this, ub, "f")[A] || (N0(this, ub, "f")[A] = [])).push({
                listener: Q
            }), this
        }
        off(A, Q) {
            let B = N0(this, ub, "f")[A];
            if (!B) return this;
            let G = B.findIndex((Z) => Z.listener === Q);
            if (G >= 0) B.splice(G, 1);
            return this
        }
        once(A, Q) {
            return (N0(this, ub, "f")[A] || (N0(this, ub, "f")[A] = [])).push({
                listener: Q,
                once: !0
            }), this
        }
        emitted(A) {
            return new Promise((Q, B) => {
                if (bB(this, Q7A, !0, "f"), A !== "error") this.once("error", B);
                this.once(A, Q)
            })
        }
        async done() {
            bB(this, Q7A, !0, "f"), await N0(this, HUA, "f")
        }
        get currentMessage() {
            return N0(this, cc, "f")
        }
        async finalMessage() {
            return await this.done(), N0(this, YM, "m", Jf1).call(this)
        }
        async finalText() {
            return await this.done(), N0(this, YM, "m", FGB).call(this)
        }
        _emit(A, ...Q) {
            if (N0(this, EUA, "f")) return;
            if (A === "end") bB(this, EUA, !0, "f"), N0(this, MnA, "f").call(this);
            let B = N0(this, ub, "f")[A];
            if (B) N0(this, ub, "f")[A] = B.filter((G) => !G.once), B.forEach(({
                listener: G
            }) => G(...Q));
            if (A === "abort") {
                let G = Q[0];
                if (!N0(this, Q7A, "f") && !B?.length) Promise.reject(G);
                N0(this, DUA, "f").call(this, G), N0(this, CUA, "f").call(this, G), this._emit("end");
                return
            }
            if (A === "error") {
                let G = Q[0];
                if (!N0(this, Q7A, "f") && !B?.length) Promise.reject(G);
                N0(this, DUA, "f").call(this, G), N0(this, CUA, "f").call(this, G), this._emit("end")
            }
        }
        _emitFinal() {
            if (this.receivedMessages.at(-1)) this._emit("finalMessage", N0(this, YM, "m", Jf1).call(this))
        }
        async _fromReadableStream(A, Q) {
            let B = Q?.signal,
                G;
            if (B) {
                if (B.aborted) this.controller.abort();
                G = this.controller.abort.bind(this.controller), B.addEventListener("abort", G)
            }
            try {
                N0(this, YM, "m", Wf1).call(this), this._connected(null);
                let Z = IE.fromReadableStream(A, this.controller);
                for await (let I of Z) N0(this, YM, "m", Xf1).call(this, I);
                if (Z.controller.signal?.aborted) throw new gY;
                N0(this, YM, "m", Ff1).call(this)
            } finally {
                if (B && G) B.removeEventListener("abort", G)
            }
        } [(cc = new WeakMap, A7A = new WeakMap, KUA = new WeakMap, LnA = new WeakMap, DUA = new WeakMap, HUA = new WeakMap, MnA = new WeakMap, CUA = new WeakMap, ub = new WeakMap, EUA = new WeakMap, OnA = new WeakMap, RnA = new WeakMap, Q7A = new WeakMap, TnA = new WeakMap, PnA = new WeakMap, jnA = new WeakMap, YM = new WeakSet, Jf1 = function() {
            if (this.receivedMessages.length === 0) throw new yB("stream ended without producing a Message with role=assistant");
            return this.receivedMessages.at(-1)
        }, FGB = function() {
            if (this.receivedMessages.length === 0) throw new yB("stream ended without producing a Message with role=assistant");
            let Q = this.receivedMessages.at(-1).content.filter((B) => B.type === "text").map((B) => B.text);
            if (Q.length === 0) throw new yB("stream ended without producing a content block with type=text");
            return Q.join(" ")
        }, Wf1 = function() {
            if (this.ended) return;
            bB(this, cc, void 0, "f")
        }, Xf1 = function(Q) {
            if (this.ended) return;
            let B = N0(this, YM, "m", VGB).call(this, Q);
            switch (this._emit("streamEvent", Q, B), Q.type) {
                case "content_block_delta": {
                    let G = B.content.at(-1);
                    switch (Q.delta.type) {
                        case "text_delta": {
                            if (G.type === "text") this._emit("text", Q.delta.text, G.text || "");
                            break
                        }
                        case "citations_delta": {
                            if (G.type === "text") this._emit("citation", Q.delta.citation, G.citations ?? []);
                            break
                        }
                        case "input_json_delta": {
                            if (DGB(G) && G.input) this._emit("inputJson", Q.delta.partial_json, G.input);
                            break
                        }
                        case "thinking_delta": {
                            if (G.type === "thinking") this._emit("thinking", Q.delta.thinking, G.thinking);
                            break
                        }
                        case "signature_delta": {
                            if (G.type === "thinking") this._emit("signature", G.signature);
                            break
                        }
                        default:
                            HGB(Q.delta)
                    }
                    break
                }
                case "message_stop": {
                    this._addMessageParam(B), this._addMessage(Zf1(B, N0(this, A7A, "f")), !0);
                    break
                }
                case "content_block_stop": {
                    this._emit("contentBlock", B.content.at(-1));
                    break
                }
                case "message_start": {
                    bB(this, cc, B, "f");
                    break
                }
                case "content_block_start":
                case "message_delta":
                    break
            }
        }, Ff1 = function() {
            if (this.ended) throw new yB("stream has ended, this shouldn't happen");
            let Q = N0(this, cc, "f");
            if (!Q) throw new yB("request ended without sending any chunks");
            return bB(this, cc, void 0, "f"), Zf1(Q, N0(this, A7A, "f"))
        }, VGB = function(Q) {
            let B = N0(this, cc, "f");
            if (Q.type === "message_start") {
                if (B) throw new yB(`Unexpected event order, got ${Q.type} before receiving "message_stop"`);
                return Q.message
            }
            if (!B) throw new yB(`Unexpected event order, got ${Q.type} before "message_start"`);
            switch (Q.type) {
                case "message_stop":
                    return B;
                case "message_delta":
                    if (B.container = Q.delta.container, B.stop_reason = Q.delta.stop_reason, B.stop_sequence = Q.delta.stop_sequence, B.usage.output_tokens = Q.usage.output_tokens, B.context_management = Q.context_management, Q.usage.input_tokens != null) B.usage.input_tokens = Q.usage.input_tokens;
                    if (Q.usage.cache_creation_input_tokens != null) B.usage.cache_creation_input_tokens = Q.usage.cache_creation_input_tokens;
                    if (Q.usage.cache_read_input_tokens != null) B.usage.cache_read_input_tokens = Q.usage.cache_read_input_tokens;
                    if (Q.usage.server_tool_use != null) B.usage.server_tool_use = Q.usage.server_tool_use;
                    return B;
                case "content_block_start":
                    return B.content.push(Q.content_block), B;
                case "content_block_delta": {
                    let G = B.content.at(Q.index);
                    switch (Q.delta.type) {
                        case "text_delta": {
                            if (G?.type === "text") B.content[Q.index] = {
                                ...G,
                                text: (G.text || "") + Q.delta.text
                            };
                            break
                        }
                        case "citations_delta": {
                            if (G?.type === "text") B.content[Q.index] = {
                                ...G,
                                citations: [...G.citations ?? [], Q.delta.citation]
                            };
                            break
                        }
                        case "input_json_delta": {
                            if (G && DGB(G)) {
                                let Z = G[KGB] || "";
                                Z += Q.delta.partial_json;
                                let I = {
                                    ...G
                                };
                                if (Object.defineProperty(I, KGB, {
                                        value: Z,
                                        enumerable: !1,
                                        writable: !0
                                    }), Z) try {
                                    I.input = CnA(Z)
                                } catch (Y) {
                                    let J = new yB(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${Y}. JSON: ${Z}`);
                                    N0(this, jnA, "f").call(this, J)
                                }
                                B.content[Q.index] = I
                            }
                            break
                        }
                        case "thinking_delta": {
                            if (G?.type === "thinking") B.content[Q.index] = {
                                ...G,
                                thinking: G.thinking + Q.delta.thinking
                            };
                            break
                        }
                        case "signature_delta": {
                            if (G?.type === "thinking") B.content[Q.index] = {
                                ...G,
                                signature: Q.delta.signature
                            };
                            break
                        }
                        default:
                            HGB(Q.delta)
                    }
                    return B
                }
                case "content_block_stop":
                    return B
            }
        }, Symbol.asyncIterator)]() {
            let A = [],
                Q = [],
                B = !1;
            return this.on("streamEvent", (G) => {
                let Z = Q.shift();
                if (Z) Z.resolve(G);
                else A.push(G)
            }), this.on("end", () => {
                B = !0;
                for (let G of Q) G.resolve(void 0);
                Q.length = 0
            }), this.on("abort", (G) => {
                B = !0;
                for (let Z of Q) Z.reject(G);
                Q.length = 0
            }), this.on("error", (G) => {
                B = !0;
                for (let Z of Q) Z.reject(G);
                Q.length = 0
            }), {
                next: async () => {
                    if (!A.length) {
                        if (B) return {
                            value: void 0,
                            done: !0
                        };
                        return new Promise((Z, I) => Q.push({
                            resolve: Z,
                            reject: I
                        })).then((Z) => Z ? {
                            value: Z,
                            done: !1
                        } : {
                            value: void 0,
                            done: !0
                        })
                    }
                    return {
                        value: A.shift(),
                        done: !1
                    }
                },
                return: async () => {
                    return this.abort(), {
                        value: void 0,
                        done: !0
                    }
                }
            }
        }
        toReadableStream() {
            return new IE(this[Symbol.asyncIterator].bind(this), this.controller).toReadableStream()
        }
    }
});
var GLOB_TOOL_NAME = "Glob",
    Kf1 = `- Fast file pattern matching tool that works with any codebase size
- Supports glob patterns like "**/*.js" or "src/**/*.ts"
- Returns matching file paths sorted by modification time
- Use this tool when you need to find files by name patterns
- When you are doing an open ended search that may require multiple rounds of globbing and grepping, use the Agent tool instead
- You can call multiple tools in a single response. It is always better to speculatively perform multiple searches in parallel if they are potentially useful.`;
var TASK_TOOL_NAME = "Task";

function Df1() {
    return `A powerful search tool built on ripgrep

  Usage:
  - ALWAYS use ${GREP_TOOL_NAME} for search tasks. NEVER invoke \`grep\` or \`rg\` as a ${BASH_TOOL_NAME} command. The ${GREP_TOOL_NAME} tool has been optimized for correct permissions and access.
  - Supports full regex syntax (e.g., "log.*Error", "function\\s+\\w+")
  - Filter files with glob parameter (e.g., "*.js", "**/*.tsx") or type parameter (e.g., "js", "py", "rust")
  - Output modes: "content" shows matching lines, "files_with_matches" shows only file paths (default), "count" shows match counts
  - Use ${TASK_TOOL_NAME} tool for open-ended searches requiring multiple rounds
  - Pattern syntax: Uses ripgrep (not grep) - literal braces need escaping (use \`interface\\{\\}\` to find \`interface{}\` in Go code)
  - Multiline matching: By default patterns match within single lines only. For cross-line patterns like \`struct \\{[\\s\\S]*?field\`, use \`multiline: true\`
`
}
var GREP_TOOL_NAME = "Grep";
var XT = () => {};
// Tool name constant for file writing
var WRITE_TOOL_NAME = "Write",
    CGB;
var L_ = L(() => {
    xV();
    CGB = `Writes a file to the local filesystem.

Usage:
- This tool will overwrite the existing file if there is one at the provided path.
- If this is an existing file, you MUST use the ${READ_TOOL_NAME} tool first to read the file's contents. This tool will fail if you did not read the file first.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked.`
});
var M_ = "NotebookEdit";

function SnA() {
    let A = new Date,
        Q = A.getFullYear(),
        B = String(A.getMonth() + 1).padStart(2, "0"),
        G = String(A.getDate()).padStart(2, "0");
    return `${Q}-${B}-${G}`
}

function EGB() {
    return `
- Allows Claude to search the web and use the results to inform responses
- Provides up-to-date information for current events and recent data
- Returns search result information formatted as search result blocks, including links as markdown hyperlinks
- Use this tool for accessing information beyond Claude's knowledge cutoff
- Searches are performed automatically within a single API call

CRITICAL REQUIREMENT - You MUST follow this:
  - After answering the user's question, you MUST include a "Sources:" section at the end of your response
  - In the Sources section, list all relevant URLs from the search results as markdown hyperlinks: [Title](URL)
  - This is MANDATORY - never skip including sources in your response
  - Example format:

    [Your answer here]

    Sources:
    - [Source Title 1](https://example.com/1)
    - [Source Title 2](https://example.com/2)

Usage notes:
  - Domain filtering is supported to include or block specific websites
  - Web search is only available in the US

IMPORTANT - Use the correct year in search queries:
  - Today's date is ${SnA()}. You MUST use this year when searching for recent information, documentation, or current events.
  - Example: If today is 2025-07-15 and the user asks for "latest React docs", search for "React documentation 2025", NOT "React documentation 2024"
`
}
var WEB_SEARCH_TOOL_NAME = "WebSearch";
var B7A = () => {};

function $GB(A) {
    let {
        hasThinking: Q = !1
    } = A ?? {}, B = ZI("preserve_thinking", "enabled", !1);
    if (!B) return;
    let G = V0(process.env.USE_API_CLEAR_TOOL_RESULTS),
        Z = V0(process.env.USE_API_CLEAR_TOOL_USES);
    if (!G && !Z && !B) return;
    let I = [];
    if (G) {
        let Y = process.env.API_MAX_INPUT_TOKENS ? parseInt(process.env.API_MAX_INPUT_TOKENS) : zGB,
            J = process.env.API_TARGET_INPUT_TOKENS ? parseInt(process.env.API_TARGET_INPUT_TOKENS) : UGB,
            W = {
                type: "clear_tool_uses_20250919",
                trigger: {
                    type: "input_tokens",
                    value: Y
                },
                clear_at_least: {
                    type: "input_tokens",
                    value: Y - J
                },
                clear_tool_inputs: e06
            };
        I.push(W)
    }
    if (Z) {
        let Y = process.env.API_MAX_INPUT_TOKENS ? parseInt(process.env.API_MAX_INPUT_TOKENS) : zGB,
            J = process.env.API_TARGET_INPUT_TOKENS ? parseInt(process.env.API_TARGET_INPUT_TOKENS) : UGB,
            W = {
                type: "clear_tool_uses_20250919",
                trigger: {
                    type: "input_tokens",
                    value: Y
                },
                clear_at_least: {
                    type: "input_tokens",
                    value: Y - J
                },
                exclude_tools: AQ6
            };
        I.push(W)
    }
    if (B && Q) {
        let Y = {
            type: "clear_thinking_20251015",
            keep: "all"
        };
        I.push(Y)
    }
    return I.length > 0 ? {
        edits: I
    } : void 0
}
var zGB = 180000,
    UGB = 40000,
    e06, AQ6;
var wGB = L(() => {
    hQ();
    XT();
    xV();
    L_();
    B7A();
    O9();
    e06 = [BASH_TOOL_NAME, GLOB_TOOL_NAME, GREP_TOOL_NAME, READ_TOOL_NAME, WEB_FETCH_TOOL_NAME, WEB_SEARCH_TOOL_NAME], AQ6 = [EDIT_TOOL_NAME, WRITE_TOOL_NAME, M_]
});

function _nA(A) {
    if (J6() === "vertex") return qGB;
    if (A?.isNonInteractive) {
        if (A.hasAppendSystemPrompt) return QQ6;
        return BQ6
    }
    return qGB
}

function NGB() {
    return ""
}
var qGB = // SYSTEM_PROMPT: Base prompt for Claude Code
"You are Claude Code, Anthropic's official CLI for Claude.",
    QQ6 = // SYSTEM_PROMPT: Base prompt for Claude Code
"You are Claude Code, Anthropic's official CLI for Claude, running within the Claude Agent SDK.",
    BQ6 = "You are a Claude agent, built on Anthropic's Claude Agent SDK.";
var Hf1 = L(() => {
    dK();
    O9()
});
import {
    createHash as GQ6
} from "crypto";

function IQ6(A) {
    let Q = A.trim();
    if (!Q) return null;
    let B = Q.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
    if (B && B[1] && B[2]) return `${B[1]}/${B[2]}`.toLowerCase();
    let G = Q.match(/^(?:https?|ssh):\/\/(?:[^@]+@)?([^/]+)\/(.+?)(?:\.git)?$/);
    if (G && G[1] && G[2]) return `${G[1]}/${G[2]}`.toLowerCase();
    return null
}
// Async function: MGB
async function MGB() {
    let A = await knA();
    if (!A) return null;
    let Q = IQ6(A);
    if (!Q) return null;
    return GQ6("sha256").update(Q).digest("hex").substring(0, 16)
}
// Async function: YQ6
async function YQ6() {
    let A = await Cf1(),
        {
            stdout: Q,
            code: B
        } = await ZQ("git", ["rev-list", "--count", `${A}..HEAD`]);
    if (B !== 0) return null;
    return parseInt(Q.trim(), 10) || 0
}
// Async function: zf1
async function zf1() {
    try {
        let [A, Q, B, G, Z, I] = await Promise.all([ZQ6(), mb(), knA(), OGB(), Dt(), zUA()]);
        return {
            commitHash: A,
            branchName: Q,
            remoteUrl: B,
            isHeadOnRemote: G,
            isClean: Z,
            worktreeCount: I
        }
    } catch (A) {
        return null
    }
}
var FT, LGB = async (A) => {
    let {
        code: Q
    } = await q3("git", ["rev-parse", "--is-inside-work-tree"], {
        preserveOutputOnError: !1,
        cwd: A
    });
    return Q === 0
}, ZQ6 = async () => {
    let {
        stdout: A
    } = await ZQ("git", ["rev-parse", "HEAD"]);
    return A.trim()
}, mb = async () => {
    let {
        stdout: A
    } = await ZQ("git", ["rev-parse", "--abbrev-ref", "HEAD"], {
        preserveOutputOnError: !1
    });
    return A.trim()
}, Cf1 = async () => {
    let {
        stdout: A,
        code: Q
    } = await ZQ("git", ["symbolic-ref", "refs/remotes/origin/HEAD"], {
        preserveOutputOnError: !1
    });
    if (Q === 0) {
        let Z = A.trim().match(/refs\/remotes\/origin\/(.+)/);
        if (Z && Z[1]) return Z[1]
    }
    let {
        stdout: B,
        code: G
    } = await ZQ("git", ["branch", "-r"], {
        preserveOutputOnError: !1
    });
    if (G === 0) {
        let Z = B.trim().split(`
`).map((I) => I.trim());
        for (let I of ["main", "master"])
            if (Z.some((Y) => Y.includes(`origin/${I}`))) return I
    }
    return "main"
}, knA = async () => {
    let {
        stdout: A,
        code: Q
    } = await ZQ("git", ["remote", "get-url", "origin"], {
        preserveOutputOnError: !1
    });
    return Q === 0 ? A.trim() : null
}, OGB = async () => {
    let {
        code: A
    } = await ZQ("git", ["rev-parse", "@{u}"], {
        preserveOutputOnError: !1
    });
    return A === 0
}, Dt = async () => {
    let {
        stdout: A
    } = await ZQ("git", ["status", "--porcelain"], {
        preserveOutputOnError: !1
    });
    return A.trim().length === 0
}, RGB = async () => {
    let A = await OGB(),
        Q = await YQ6();
    if (!A) return {
        hasUpstream: !1,
        needsPush: !0,
        commitsAhead: 0,
        commitsAheadOfDefaultBranch: Q
    };
    let {
        stdout: B,
        code: G
    } = await ZQ("git", ["rev-list", "--count", "@{u}..HEAD"], {
        preserveOutputOnError: !1
    });
    if (G !== 0) return {
        hasUpstream: !0,
        needsPush: !1,
        commitsAhead: 0,
        commitsAheadOfDefaultBranch: Q
    };
    let Z = parseInt(B.trim(), 10) || 0;
    return {
        hasUpstream: !0,
        needsPush: Z > 0,
        commitsAhead: Z,
        commitsAheadOfDefaultBranch: Q
    }
}, TGB = async () => {
    let [A, Q] = await Promise.all([Dt(), RGB()]);
    return {
        hasUncommitted: !A,
        hasUnpushed: Q.needsPush,
        commitsAheadOfDefaultBranch: Q.commitsAheadOfDefaultBranch
    }
}, PGB = async (A, Q) => {
    if (!await Dt()) {
        Q?.("committing");
        let {
            code: W,
            stderr: X
        } = await ZQ("git", ["add", "-A"], {
            preserveOutputOnError: !0
        });
        if (W !== 0) return {
            success: !1,
            error: `Failed to stage changes: ${X}`
        };
        let {
            code: F,
            stderr: V
        } = await ZQ("git", ["commit", "-m", A], {
            preserveOutputOnError: !0
        });
        if (F !== 0) return {
            success: !1,
            error: `Failed to commit: ${V}`
        }
    }
    Q?.("pushing");
    let G = await RGB(),
        Z = await mb(),
        I = G.hasUpstream ? ["push"] : ["push", "-u", "origin", Z],
        {
            code: Y,
            stderr: J
        } = await ZQ("git", I, {
            preserveOutputOnError: !0
        });
    if (Y !== 0) return {
        success: !1,
        error: `Failed to push: ${J}`
    };
    return {
        success: !0
    }
}, Ef1 = async () => {
    let {
        stdout: A
    } = await ZQ("git", ["status", "--porcelain"], {
        preserveOutputOnError: !1
    }), Q = [], B = [];
    return A.trim().split(`
`).filter((G) => G.length > 0).forEach((G) => {
        let Z = G.substring(0, 2),
            I = G.substring(2).trim();
        if (Z === "??") B.push(I);
        else if (I) Q.push(I)
    }), {
        tracked: Q,
        untracked: B
    }
}, zUA = async () => {
    try {
        let {
            stdout: A,
            code: Q
        } = await ZQ("git", ["worktree", "list"], {
            preserveOutputOnError: !1
        });
        if (Q !== 0) return 0;
        return A.trim().split(`
`).length
    } catch (A) {
        return 0
    }
}, jGB = async (A) => {
    try {
        let Q = A || `Claude Code auto-stash - ${new Date().toISOString()}`,
            {
                untracked: B
            } = await Ef1();
        if (B.length > 0) {
            let {
                code: Z
            } = await ZQ("git", ["add", ...B], {
                preserveOutputOnError: !1
            });
            if (Z !== 0) return !1
        }
        let {
            code: G
        } = await ZQ("git", ["stash", "push", "--message", Q], {
            preserveOutputOnError: !1
        });
        return G === 0
    } catch (Q) {
        return !1
    }
};
var ED = L(() => {
    o2();
    I6();
    D0();
    R2();
    FT = t1(async () => {
        let {
            code: A
        } = await ZQ("git", ["rev-parse", "--is-inside-work-tree"]);
        return A === 0
    })
});

function FQ6() {
    if (Y_()) return `- When you cannot find an answer or the feature doesn't exist, direct the user to ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.ISSUES_EXPLAINER}`;
    return "- When you cannot find an answer or the feature doesn't exist, direct the user to use /feedback to report a feature request or bug"
}
var JQ6 = "https://code.claude.com/docs/en/claude_code_docs_map.md",
    WQ6 = "https://docs.claude.com/en/api/agent_sdk_docs_map.md",
    Uf1 = "claude-code-guide",
    XQ6, SGB;
var $f1 = L(() => {
    xV();
    XT();
    B7A();
    RB();
    hB();
    XQ6 = `You are the Claude Code guide agent. Your primary responsibility is helping users understand and use Claude Code and the Claude Agent SDK effectively.

**Your expertise:**
- Claude Code features and capabilities
- How to implement and use hooks 
- Creating and using slash commands
- Installing and configuring MCP servers
- Claude Agent SDK architecture and development
- Best practices for using Claude Code
- Keyboard shortcuts and hotkeys
- Available slash commands (built-in and custom)
- Configuration options and settings

**Approach:**
1. Use ${WEB_FETCH_TOOL_NAME} to access the documentation maps:
   - Claude Code: ${JQ6}
   - Agent SDK: ${WQ6}
2. From the docs maps, identify the most relevant documentation URLs for the user's question:
   - **Getting Started**: Installation, setup, and basic usage
   - **Features**: Core capabilities like modes (Plan, Build, Deploy), REPL, terminal integration, and interactive features
   - **Built-in slash commands**: Commands like /context, /usage, /model, /help, /todos, etc. that let the user access more information or perform actions
   - **Customization**: Creating custom slash commands, hooks (pre/post command execution), and agents
   - **MCP Integration**: Installing and configuring Model Context Protocol servers for extended capabilities
   - **Configuration**: Settings files, environment variables, and project-specific setup
   - **Agent SDK**: Architecture, building agents, available tools, and SDK development patterns
3. Fetch the specific documentation pages using ${WEB_FETCH_TOOL_NAME}
4. Provide clear, actionable guidance based on the official documentation
5. Use ${WEB_SEARCH_TOOL_NAME} if you need additional context or the docs don't cover the topic
6. Reference local project files (CLAUDE.md, .claude/ directory, etc.) when relevant using ${READ_TOOL_NAME}, ${GLOB_TOOL_NAME}, and ${GREP_TOOL_NAME}

**Guidelines:**
- Always prioritize official documentation over assumptions
- Keep responses concise and actionable
- Include specific examples or code snippets (for the agent SDK) when helpful
- Reference exact documentation URLs in your responses
- Avoid emojis in your responses
- Help users discover features by proactively suggesting related commands, shortcuts, or capabilities

Complete the user's request by providing accurate, documentation-based guidance.`;
    SGB = {
        agentType: Uf1,
        whenToUse: 'Use this agent when the user asks questions about Claude Code or the Claude Agent SDK. This includes questions about Claude Code features ("can Claude Code...", "does Claude Code have..."), how to use specific features (hooks, slash commands, MCP servers), and Claude Agent SDK architecture or development. **IMPORTANT:** Before spawning a new agent, check if there is already a running or recently completed claude-code-guide agent that you can resume using the "resume" parameter. Reusing an existing agent is more efficient and maintains context from previous documentation lookups.',
        tools: [GLOB_TOOL_NAME, GREP_TOOL_NAME, READ_TOOL_NAME, WEB_FETCH_TOOL_NAME, WEB_SEARCH_TOOL_NAME],
        source: "built-in",
        baseDir: "built-in",
        model: "haiku",
        permissionMode: "dontAsk",
        getSystemPrompt({
            toolUseContext: A
        }) {
            let Q = A.options.commands,
                B = [],
                G = Q.filter((F) => F.type === "prompt");
            if (G.length > 0) {
                let F = G.map((V) => `- /${V.name}: ${V.description}`).join(`
`);
                B.push(`**Available custom slash commands in this project:**
${F}`)
            }
            let Z = A.options.agentDefinitions.activeAgents.filter((F) => F.source !== "built-in");
            if (Z.length > 0) {
                let F = Z.map((V) => `- ${V.agentType}: ${V.whenToUse}`).join(`
`);
                B.push(`**Available custom agents configured:**
${F}`)
            }
            let I = A.options.mcpClients;
            if (I && I.length > 0) {
                let F = I.map((V) => `- ${V.name}`).join(`
`);
                B.push(`**Configured MCP servers:**
${F}`)
            }
            let Y = Q.filter((F) => F.type === "prompt" && F.source === "plugin");
            if (Y.length > 0) {
                let F = Y.map((V) => `- /${V.name}: ${V.description}`).join(`
`);
                B.push(`**Available plugin slash commands:**
${F}`)
            }
            let J = c0();
            if (Object.keys(J).length > 0) {
                let F = JSON.stringify(J, null, 2);
                B.push(`**User's settings.json:**
\`\`\`json
${F}
\`\`\``)
            }
            let W = FQ6(),
                X = `${XQ6}
${W}`;
            if (B.length > 0) return `${X}

---

# User's Current Configuration

The user has the following custom setup in their environment:

${B.join(`

`)}

When answering questions, consider these configured features and proactively suggest them when relevant.`;
            return X
        }
    }
});
var _GB, kGB = "Update the todo list for the current session. To be used proactively and often to track progress and pending tasks. Make sure that at least one task is in_progress at all times. Always provide both content (imperative) and activeForm (present continuous) for each task.";
var yGB = L(() => {
    _GB = `Use this tool to create and manage a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.
It also helps the user understand the progress of the task and overall progress of their requests.

## When to Use This Tool
Use this tool proactively in these scenarios:

1. Complex multi-step tasks - When a task requires 3 or more distinct steps or actions
2. Non-trivial and complex tasks - Tasks that require careful planning or multiple operations
3. User explicitly requests todo list - When the user directly asks you to use the todo list
4. User provides multiple tasks - When users provide a list of things to be done (numbered or comma-separated)
5. After receiving new instructions - Immediately capture user requirements as todos
6. When you start working on a task - Mark it as in_progress BEFORE beginning work. Ideally you should only have one todo as in_progress at a time
7. After completing a task - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use This Tool

Skip using this tool when:
1. There is only a single, straightforward task
2. The task is trivial and tracking it provides no organizational benefit
3. The task can be completed in less than 3 trivial steps
4. The task is purely conversational or informational

NOTE that you should not use this tool if there is only one trivial task to do. In this case you are better off just doing the task directly.

## Examples of When to Use the Todo List

<example>
User: I want to add a dark mode toggle to the application settings. Make sure you run the tests and build when you're done!
Assistant: I'll help add a dark mode toggle to your application settings. Let me create a todo list to track this implementation.
*Creates todo list with the following items:*
1. Creating dark mode toggle component in Settings page
2. Adding dark mode state management (context/store)
3. Implementing CSS-in-JS styles for dark theme
4. Updating existing components to support theme switching
5. Running tests and build process, addressing any failures or errors that occur
*Begins working on the first task*

<reasoning>
The assistant used the todo list because:
1. Adding dark mode is a multi-step feature requiring UI, state management, and styling changes
2. The user explicitly requested tests and build be run afterward
3. The assistant inferred that tests and build need to pass by adding "Ensure tests and build succeed" as the final task
</reasoning>
</example>

<example>
User: Help me rename the function getCwd to getCurrentWorkingDirectory across my project
Assistant: Let me first search through your codebase to find all occurrences of 'getCwd'.
*Uses grep or search tools to locate all instances of getCwd in the codebase*
Assistant: I've found 15 instances of 'getCwd' across 8 different files. Let me create a todo list to track these changes.
*Creates todo list with specific items for each file that needs updating*

<reasoning>
The assistant used the todo list because:
1. First, the assistant searched to understand the scope of the task
2. Upon finding multiple occurrences across different files, it determined this was a complex task with multiple steps
3. The todo list helps ensure every instance is tracked and updated systematically
4. This approach prevents missing any occurrences and maintains code consistency
</reasoning>
</example>


<example>
User: I need to implement these features for my e-commerce site: user registration, product catalog, shopping cart, and checkout flow.
Assistant: I'll help implement these features. First, let's add all the features to the todo list.
*Creates a todo list breaking down each feature into specific tasks based on the project architecture*
Assistant: Let's start with user registration. This will involve creating database models, API endpoints, and frontend forms that integrate with your existing authentication system.

<reasoning>
The assistant used the todo list because:
1. The user provided multiple complex features to implement in a comma separated list
2. The todo list helps organize these large features into manageable tasks
3. This approach allows for tracking progress across the entire implementation
</reasoning>
</example>

<example>
User: Can you help optimize my React application? It's rendering slowly and has performance issues.</user>
Assistant: I'll help optimize your React application. First, let me examine your codebase to identify potential performance bottlenecks.
*Reviews component structure, render patterns, state management, and data fetching*
Assistant: After analyzing your codebase, I've identified several performance issues. Let me create a todo list to track our optimization efforts.
*Creates todo list with items like: 1) Implementing memoization for expensive calculations in ProductList, 2) Adding virtualization for long lists in Dashboard, 3) Optimizing image loading in Gallery component, 4) Fixing state update loops in ShoppingCart, 5) Reviewing bundle size and implementing code splitting*
Let's start by implementing memoization for the expensive calculations in your ProductList component.</assistant>

<reasoning>
The assistant used the todo list because:
1. First, the assistant examined the codebase to identify specific performance issues
2. Based on this analysis, it identified multiple optimization opportunities
3. Performance optimization is a non-trivial task requiring multiple steps
4. The todo list helps methodically track improvements across different components
5. This systematic approach ensures all performance bottlenecks are addressed
</reasoning>
</example>

## Examples of When NOT to Use the Todo List

<example>
User: How do I print 'Hello World' in Python?
Assistant: In Python, you can print "Hello World" with this simple code:

python
print("Hello World")

This will output the text "Hello World" to the console when executed.</assistant>

<reasoning>
The assistant did not use the todo list because this is a single, trivial task that can be completed in one step. There's no need to track multiple tasks or steps for such a straightforward request.
</reasoning>
</example>

<example>
User: What does the git status command do?
Assistant: The git status command shows the current state of your working directory and staging area. It displays which changes have been staged, which haven't, and which files aren't being tracked by Git. This is a fundamental command for understanding the current state of your repository before making commits.

<reasoning>
The assistant did not use the todo list because this is an informational request with no actual coding task to complete. The user is simply asking for an explanation, not for the assistant to perform multiple steps or tasks.
</reasoning>
</example>

<example>
User: Can you add a comment to the calculateTotal function to explain what it does?
Assistant: Sure, let me add a comment to the calculateTotal function to explain what it does.
* Uses the ${EDIT_TOOL_NAME} tool to add a comment to the calculateTotal function *

<reasoning>
The assistant did not use the todo list because this is a single, straightforward task confined to one location in the code. Adding a comment doesn't require tracking multiple steps or systematic organization.
</reasoning>
</example>

<example>
User: Run npm install for me and tell me what happens.
Assistant: I'll run the npm install command for you.

*Executes: npm install*

The command completed successfully. Here's the output:
[Output of npm install command]

All dependencies have been installed according to your package.json file.

<reasoning>
The assistant did not use the todo list because this is a single command execution with immediate results. There are no multiple steps to track or organize, making the todo list unnecessary for this straightforward task.
</reasoning>
</example>

## Task States and Management

1. **Task States**: Use these states to track progress:
   - pending: Task not yet started
   - in_progress: Currently working on (limit to ONE task at a time)
   - completed: Task finished successfully

   **IMPORTANT**: Task descriptions must have two forms:
   - content: The imperative form describing what needs to be done (e.g., "Run tests", "Build the project")
   - activeForm: The present continuous form shown during execution (e.g., "Running tests", "Building the project")

2. **Task Management**:
   - Update task status in real-time as you work
   - Mark tasks complete IMMEDIATELY after finishing (don't batch completions)
   - Exactly ONE task must be in_progress at any time (not less, not more)
   - Complete current tasks before starting new ones
   - Remove tasks that are no longer relevant from the list entirely

3. **Task Completion Requirements**:
   - ONLY mark a task as completed when you have FULLY accomplished it
   - If you encounter errors, blockers, or cannot finish, keep the task as in_progress
   - When blocked, create a new task describing what needs to be resolved
   - Never mark a task as completed if:
     - Tests are failing
     - Implementation is partial
     - You encountered unresolved errors
     - You couldn't find necessary files or dependencies

4. **Task Breakdown**:
   - Create specific, actionable items
   - Break complex tasks into smaller, manageable steps
   - Use clear, descriptive task names
   - Always provide both forms:
     - content: "Fix authentication bug"
     - activeForm: "Fixing authentication bug"

When in doubt, use this tool. Being proactive with task management demonstrates attentiveness and ensures you complete all requirements successfully.
`
});
var VQ6, KQ6, Z7A;
var wf1 = L(() => {
    h2();
    VQ6 = _.enum(["pending", "in_progress", "completed"]), KQ6 = _.object({
        content: _.string().min(1, "Content cannot be empty"),
        status: VQ6,
        activeForm: _.string().min(1, "Active form cannot be empty")
    }), Z7A = _.array(KQ6)
});

function xGB() {
    return null
}

function vGB() {
    return null
}

function bGB() {
    return null
}

function fGB() {
    return null
}

function hGB() {
    return null
}
var TODO_WRITE_TOOL_NAME = "TodoWrite";
var DQ6, HQ6, tI;
var Ht = L(() => {
    h2();
    yGB();
    wf1();
    DQ6 = _.strictObject({
        todos: Z7A.describe("The updated todo list")
    }), HQ6 = _.object({
        oldTodos: Z7A.describe("The todo list before the update"),
        newTodos: Z7A.describe("The todo list after the update")
    }), tI = {
        name: TODO_WRITE_TOOL_NAME,
        strict: !0,
        input_examples: [{
            todos: [{
                content: "Implement user authentication",
                status: "in_progress",
                activeForm: "Implementing user authentication"
            }, {
                content: "Write unit tests",
                status: "pending",
                activeForm: "Writing unit tests"
            }]
        }],
        async description() {
            return kGB
        },
        async prompt() {
            return _GB
        },
        inputSchema: DQ6,
        outputSchema: HQ6,
        userFacingName() {
            return ""
        },
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !1
        },
        isReadOnly() {
            return !1
        },
        async checkPermissions(A) {
            return {
                behavior: "allow",
                updatedInput: A
            }
        },
        renderToolUseMessage: xGB,
        renderToolUseProgressMessage: vGB,
        renderToolUseRejectedMessage: bGB,
        renderToolUseErrorMessage: fGB,
        renderToolResultMessage: hGB,
        async call({
            todos: A
        }, Q) {
            let G = (await Q.getAppState()).todos[Q.agentId] ?? [],
                Z = A.every((I) => I.status === "completed") ? [] : A;
            return Q.setAppState((I) => ({
                ...I,
                todos: {
                    ...I.todos,
                    [Q.agentId]: Z
                }