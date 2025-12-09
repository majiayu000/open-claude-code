/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_015.js
 * 处理时间: 2025-12-09T03:41:36.149Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * IE       (  2x) EventSourceIterator class
 * en       (  1x) AGENT_OUTPUT_TOOL = "AgentOutputTool"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 15/30
 * Lines: 210639 - 212138 (1500 lines)
 * Original file: cli.js
 */

                N0(this, qM, "m", Mc1).call(this)
            } finally {
                if (G && Z) G.removeEventListener("abort", Z)
            }
        }
        _connected(A) {
            if (this.ended) return;
            bB(this, SoA, A, "f"), bB(this, _oA, A?.headers.get("request-id"), "f"), N0(this, RoA, "f").call(this, A), this._emit("connect")
        }
        get ended() {
            return N0(this, $wA, "f")
        }
        get errored() {
            return N0(this, PoA, "f")
        }
        get aborted() {
            return N0(this, joA, "f")
        }
        abort() {
            this.controller.abort()
        }
        on(A, Q) {
            return (N0(this, Df, "f")[A] || (N0(this, Df, "f")[A] = [])).push({
                listener: Q
            }), this
        }
        off(A, Q) {
            let B = N0(this, Df, "f")[A];
            if (!B) return this;
            let G = B.findIndex((Z) => Z.listener === Q);
            if (G >= 0) B.splice(G, 1);
            return this
        }
        once(A, Q) {
            return (N0(this, Df, "f")[A] || (N0(this, Df, "f")[A] = [])).push({
                listener: Q,
                once: !0
            }), this
        }
        emitted(A) {
            return new Promise((Q, B) => {
                if (bB(this, SGA, !0, "f"), A !== "error") this.once("error", B);
                this.once(A, Q)
            })
        }
        async done() {
            bB(this, SGA, !0, "f"), await N0(this, zwA, "f")
        }
        get currentMessage() {
            return N0(this, hp, "f")
        }
        async finalMessage() {
            return await this.done(), N0(this, qM, "m", wc1).call(this)
        }
        async finalText() {
            return await this.done(), N0(this, qM, "m", F_B).call(this)
        }
        _emit(A, ...Q) {
            if (N0(this, $wA, "f")) return;
            if (A === "end") bB(this, $wA, !0, "f"), N0(this, ToA, "f").call(this);
            let B = N0(this, Df, "f")[A];
            if (B) N0(this, Df, "f")[A] = B.filter((G) => !G.once), B.forEach(({
                listener: G
            }) => G(...Q));
            if (A === "abort") {
                let G = Q[0];
                if (!N0(this, SGA, "f") && !B?.length) Promise.reject(G);
                N0(this, EwA, "f").call(this, G), N0(this, UwA, "f").call(this, G), this._emit("end");
                return
            }
            if (A === "error") {
                let G = Q[0];
                if (!N0(this, SGA, "f") && !B?.length) Promise.reject(G);
                N0(this, EwA, "f").call(this, G), N0(this, UwA, "f").call(this, G), this._emit("end")
            }
        }
        _emitFinal() {
            if (this.receivedMessages.at(-1)) this._emit("finalMessage", N0(this, qM, "m", wc1).call(this))
        }
        async _fromReadableStream(A, Q) {
            let B = Q?.signal,
                G;
            if (B) {
                if (B.aborted) this.controller.abort();
                G = this.controller.abort.bind(this.controller), B.addEventListener("abort", G)
            }
            try {
                N0(this, qM, "m", Nc1).call(this), this._connected(null);
                let Z = IE.fromReadableStream(A, this.controller);
                for await (let I of Z) N0(this, qM, "m", Lc1).call(this, I);
                if (Z.controller.signal?.aborted) throw new gY;
                N0(this, qM, "m", Mc1).call(this)
            } finally {
                if (B && G) B.removeEventListener("abort", G)
            }
        } [(hp = new WeakMap, CwA = new WeakMap, RoA = new WeakMap, EwA = new WeakMap, zwA = new WeakMap, ToA = new WeakMap, UwA = new WeakMap, Df = new WeakMap, $wA = new WeakMap, PoA = new WeakMap, joA = new WeakMap, SGA = new WeakMap, SoA = new WeakMap, _oA = new WeakMap, qc1 = new WeakMap, qM = new WeakSet, wc1 = function() {
            if (this.receivedMessages.length === 0) throw new yB("stream ended without producing a Message with role=assistant");
            return this.receivedMessages.at(-1)
        }, F_B = function() {
            if (this.receivedMessages.length === 0) throw new yB("stream ended without producing a Message with role=assistant");
            let Q = this.receivedMessages.at(-1).content.filter((B) => B.type === "text").map((B) => B.text);
            if (Q.length === 0) throw new yB("stream ended without producing a content block with type=text");
            return Q.join(" ")
        }, Nc1 = function() {
            if (this.ended) return;
            bB(this, hp, void 0, "f")
        }, Lc1 = function(Q) {
            if (this.ended) return;
            let B = N0(this, qM, "m", V_B).call(this, Q);
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
                            if (D_B(G) && G.input) this._emit("inputJson", Q.delta.partial_json, G.input);
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
                            H_B(Q.delta)
                    }
                    break
                }
                case "message_stop": {
                    this._addMessageParam(B), this._addMessage(B, !0);
                    break
                }
                case "content_block_stop": {
                    this._emit("contentBlock", B.content.at(-1));
                    break
                }
                case "message_start": {
                    bB(this, hp, B, "f");
                    break
                }
                case "content_block_start":
                case "message_delta":
                    break
            }
        }, Mc1 = function() {
            if (this.ended) throw new yB("stream has ended, this shouldn't happen");
            let Q = N0(this, hp, "f");
            if (!Q) throw new yB("request ended without sending any chunks");
            return bB(this, hp, void 0, "f"), Q
        }, V_B = function(Q) {
            let B = N0(this, hp, "f");
            if (Q.type === "message_start") {
                if (B) throw new yB(`Unexpected event order, got ${Q.type} before receiving "message_stop"`);
                return Q.message
            }
            if (!B) throw new yB(`Unexpected event order, got ${Q.type} before "message_start"`);
            switch (Q.type) {
                case "message_stop":
                    return B;
                case "message_delta":
                    if (B.stop_reason = Q.delta.stop_reason, B.stop_sequence = Q.delta.stop_sequence, B.usage.output_tokens = Q.usage.output_tokens, Q.usage.input_tokens != null) B.usage.input_tokens = Q.usage.input_tokens;
                    if (Q.usage.cache_creation_input_tokens != null) B.usage.cache_creation_input_tokens = Q.usage.cache_creation_input_tokens;
                    if (Q.usage.cache_read_input_tokens != null) B.usage.cache_read_input_tokens = Q.usage.cache_read_input_tokens;
                    if (Q.usage.server_tool_use != null) B.usage.server_tool_use = Q.usage.server_tool_use;
                    return B;
                case "content_block_start":
                    return B.content.push({
                        ...Q.content_block
                    }), B;
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
                            if (G && D_B(G)) {
                                let Z = G[K_B] || "";
                                Z += Q.delta.partial_json;
                                let I = {
                                    ...G
                                };
                                if (Object.defineProperty(I, K_B, {
                                        value: Z,
                                        enumerable: !1,
                                        writable: !0
                                    }), Z) I.input = CnA(Z);
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
                            H_B(Q.delta)
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
var qwA;
var Oc1 = L(() => {
    c_();
    wM();
    Dc1();
    Ft();
    vp();
    qwA = class qwA extends cY {
        create(A, Q) {
            return this._client.post("/v1/messages/batches", {
                body: A,
                ...Q
            })
        }
        retrieve(A, Q) {
            return this._client.get(BY`/v1/messages/batches/${A}`, Q)
        }
        list(A = {}, Q) {
            return this._client.getAPIList("/v1/messages/batches", NT, {
                query: A,
                ...Q
            })
        }
        delete(A, Q) {
            return this._client.delete(BY`/v1/messages/batches/${A}`, Q)
        }
        cancel(A, Q) {
            return this._client.post(BY`/v1/messages/batches/${A}/cancel`, Q)
        }
        async results(A, Q) {
            let B = await this.retrieve(A);
            if (!B.results_url) throw new yB(`No batch \`results_url\`; Has it finished processing? ${B.processing_status} - ${B.id}`);
            return this._client.get(B.results_url, {
                ...Q,
                headers: r4([{
                    Accept: "application/binary"
                }, Q?.headers]),
                stream: !0,
                __binaryResponse: !0
            })._thenUnwrap((G, Z) => PGA.fromResponse(Z.response, Z.controller))
        }
    }
});
var Bq, E_B;
var Rc1 = L(() => {
    C_B();
    Oc1();
    Oc1();
    Fc1();
    Bq = class Bq extends cY {
        constructor() {
            super(...arguments);
            this.batches = new qwA(this._client)
        }
        create(A, Q) {
            if (A.model in E_B) console.warn(`The model '${A.model}' is deprecated and will reach end-of-life on ${E_B[A.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
            let B = this._client._options.timeout;
            if (!A.stream && B == null) {
                let G = MoA[A.model] ?? void 0;
                B = this._client.calculateNonstreamingTimeout(A.max_tokens, G)
            }
            return this._client.post("/v1/messages", {
                body: A,
                timeout: B ?? 600000,
                ...Q,
                stream: A.stream ?? !1
            })
        }
        stream(A, Q) {
            return wwA.createMessage(this, A, Q)
        }
        countTokens(A, Q) {
            return this._client.post("/v1/messages/count_tokens", {
                body: A,
                ...Q
            })
        }
    };
    E_B = {
        "claude-1.3": "November 6th, 2024",
        "claude-1.3-100k": "November 6th, 2024",
        "claude-instant-1.1": "November 6th, 2024",
        "claude-instant-1.1-100k": "November 6th, 2024",
        "claude-instant-1.2": "November 6th, 2024",
        "claude-3-sonnet-20240229": "July 21st, 2025",
        "claude-3-opus-20240229": "January 5th, 2026",
        "claude-2.1": "July 21st, 2025",
        "claude-2.0": "July 21st, 2025",
        "claude-3-7-sonnet-latest": "February 19th, 2026",
        "claude-3-7-sonnet-20250219": "February 19th, 2026"
    };
    Bq.Batches = qwA
});
var _GA;
var Tc1 = L(() => {
    c_();
    wM();
    vp();
    _GA = class _GA extends cY {
        retrieve(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.get(BY`/v1/models/${A}`, {
                ...B,
                headers: r4([{
                    ...G?.toString() != null ? {
                        "anthropic-beta": G?.toString()
                    } : void 0
                }, B?.headers])
            })
        }
        list(A = {}, Q) {
            let {
                betas: B,
                ...G
            } = A ?? {};
            return this._client.getAPIList("/v1/models", NT, {
                query: G,
                ...Q,
                headers: r4([{
                    ...B?.toString() != null ? {
                        "anthropic-beta": B?.toString()
                    } : void 0
                }, Q?.headers])
            })
        }
    }
});
var NwA = L(() => {
    Uc1();
    $c1();
    Rc1();
    Tc1();
    Z_B()
});
var LwA = (A) => {
    if (typeof globalThis.process < "u") return globalThis.process.env?.[A]?.trim() ?? void 0;
    if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(A)?.trim();
    return
};
class ZG {
    constructor({
        baseURL: A = LwA("ANTHROPIC_BASE_URL"),
        apiKey: Q = LwA("ANTHROPIC_API_KEY") ?? null,
        authToken: B = LwA("ANTHROPIC_AUTH_TOKEN") ?? null,
        ...G
    } = {}) {
        Pc1.add(this), yoA.set(this, void 0);
        let Z = {
            apiKey: Q,
            authToken: B,
            ...G,
            baseURL: A || "https://api.anthropic.com"
        };
        if (!Z.dangerouslyAllowBrowser && tSB()) throw new yB(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);
        this.baseURL = Z.baseURL, this.timeout = Z.timeout ?? jc1.DEFAULT_TIMEOUT, this.logger = Z.logger ?? console;
        let I = "warn";
        this.logLevel = I, this.logLevel = Bf1(Z.logLevel, "ClientOptions.logLevel", this) ?? Bf1(LwA("ANTHROPIC_LOG"), "process.env['ANTHROPIC_LOG']", this) ?? I, this.fetchOptions = Z.fetchOptions, this.maxRetries = Z.maxRetries ?? 2, this.fetch = Z.fetch ?? t7B(), bB(this, yoA, A_B, "f"), this._options = Z, this.apiKey = typeof Q === "string" ? Q : null, this.authToken = B
    }
    withOptions(A) {
        return new this.constructor({
            ...this._options,
            baseURL: this.baseURL,
            maxRetries: this.maxRetries,
            timeout: this.timeout,
            logger: this.logger,
            logLevel: this.logLevel,
            fetch: this.fetch,
            fetchOptions: this.fetchOptions,
            apiKey: this.apiKey,
            authToken: this.authToken,
            ...A
        })
    }
    defaultQuery() {
        return this._options.defaultQuery
    }
    validateHeaders({
        values: A,
        nulls: Q
    }) {
        if (A.get("x-api-key") || A.get("authorization")) return;
        if (this.apiKey && A.get("x-api-key")) return;
        if (Q.has("x-api-key")) return;
        if (this.authToken && A.get("authorization")) return;
        if (Q.has("authorization")) return;
        throw Error('Could not resolve authentication method. Expected either apiKey or authToken to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted')
    }
    async authHeaders(A) {
        return r4([await this.apiKeyAuth(A), await this.bearerAuth(A)])
    }
    async apiKeyAuth(A) {
        if (this.apiKey == null) return;
        return r4([{
            "X-Api-Key": this.apiKey
        }])
    }
    async bearerAuth(A) {
        if (this.authToken == null) return;
        return r4([{
            Authorization: `Bearer ${this.authToken}`
        }])
    }
    stringifyQuery(A) {
        return Object.entries(A).filter(([Q, B]) => typeof B < "u").map(([Q, B]) => {
            if (typeof B === "string" || typeof B === "number" || typeof B === "boolean") return `${encodeURIComponent(Q)}=${encodeURIComponent(B)}`;
            if (B === null) return `${encodeURIComponent(Q)}=`;
            throw new yB(`Cannot stringify type ${typeof B}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)
        }).join("&")
    }
    getUserAgent() {
        return `${this.constructor.name}/JS ${xp}`
    }
    defaultIdempotencyKey() {
        return `stainless-node-retry-${td1()}`
    }
    makeStatusError(A, Q, B, G) {
        return a2.generate(A, Q, B, G)
    }
    buildURL(A, Q, B) {
        let G = !N0(this, Pc1, "m", z_B).call(this) && B || this.baseURL,
            Z = ZGB(A) ? new URL(A) : new URL(G + (G.endsWith("/") && A.startsWith("/") ? A.slice(1) : A)),
            I = this.defaultQuery();
        if (!IGB(I)) Q = {
            ...I,
            ...Q
        };
        if (typeof Q === "object" && Q && !Array.isArray(Q)) Z.search = this.stringifyQuery(Q);
        return Z.toString()
    }
    _calculateNonstreamingTimeout(A) {
        if (3600 * A / 128000 > 600) throw new yB("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details");
        return 600000
    }
    async prepareOptions(A) {}
    async prepareRequest(A, {
        url: Q,
        options: B
    }) {}
    get(A, Q) {
        return this.methodRequest("get", A, Q)
    }
    post(A, Q) {
        return this.methodRequest("post", A, Q)
    }
    patch(A, Q) {
        return this.methodRequest("patch", A, Q)
    }
    put(A, Q) {
        return this.methodRequest("put", A, Q)
    }
    delete(A, Q) {
        return this.methodRequest("delete", A, Q)
    }
    methodRequest(A, Q, B) {
        return this.request(Promise.resolve(B).then((G) => {
            return {
                method: A,
                path: Q,
                ...G
            }
        }))
    }
    request(A, Q = null) {
        return new De(this, this.makeRequest(A, Q, void 0))
    }
    async makeRequest(A, Q, B) {
        let G = await A,
            Z = G.maxRetries ?? this.maxRetries;
        if (Q == null) Q = Z;
        await this.prepareOptions(G);
        let {
            req: I,
            url: Y,
            timeout: J
        } = await this.buildRequest(G, {
            retryCount: Z - Q
        });
        await this.prepareRequest(I, {
            url: Y,
            options: G
        });
        let W = "log_" + (Math.random() * 16777216 | 0).toString(16).padStart(6, "0"),
            X = B === void 0 ? "" : `, retryOf: ${B}`,
            F = Date.now();
        if (vV(this).debug(`[${W}] sending request`, gb({
                retryOfRequestLogID: B,
                method: G.method,
                url: Y,
                options: G,
                headers: I.headers
            })), G.signal?.aborted) throw new gY;
        let V = new AbortController,
            K = await this.fetchWithTimeout(Y, I, J, V).catch(QUA),
            D = Date.now();
        if (K instanceof globalThis.Error) {
            let E = `retrying, ${Q} attempts remaining`;
            if (G.signal?.aborted) throw new gY;
            let z = hb(K) || /timed? ?out/i.test(String(K) + ("cause" in K ? String(K.cause) : ""));
            if (Q) return vV(this).info(`[${W}] connection ${z?"timed out":"failed"} - ${E}`), vV(this).debug(`[${W}] connection ${z?"timed out":"failed"} (${E})`, gb({
                retryOfRequestLogID: B,
                url: Y,
                durationMs: D - F,
                message: K.message
            })), this.retryRequest(G, Q, B ?? W);
            if (vV(this).info(`[${W}] connection ${z?"timed out":"failed"} - error; no more retries left`), vV(this).debug(`[${W}] connection ${z?"timed out":"failed"} (error; no more retries left)`, gb({
                    retryOfRequestLogID: B,
                    url: Y,
                    durationMs: D - F,
                    message: K.message
                })), z) throw new N_;
            throw new GE({
                cause: K
            })
        }
        let H = [...K.headers.entries()].filter(([E]) => E === "request-id").map(([E, z]) => ", " + E + ": " + JSON.stringify(z)).join(""),
            C = `[${W}${X}${H}] ${I.method} ${Y} ${K.ok?"succeeded":"failed"} with status ${K.status} in ${D-F}ms`;
        if (!K.ok) {
            let E = await this.shouldRetry(K);
            if (Q && E) {
                let P = `retrying, ${Q} attempts remaining`;
                return await e7B(K.body), vV(this).info(`${C} - ${P}`), vV(this).debug(`[${W}] response error (${P})`, gb({
                    retryOfRequestLogID: B,
                    url: K.url,
                    status: K.status,
                    headers: K.headers,
                    durationMs: D - F
                })), this.retryRequest(G, Q, B ?? W, K.headers)
            }
            let z = E ? "error; no more retries left" : "error; not retryable";
            vV(this).info(`${C} - ${z}`);
            let w = await K.text().catch((P) => QUA(P).message),
                N = UnA(w),
                q = N ? void 0 : w;
            throw vV(this).debug(`[${W}] response error (${z})`, gb({
                retryOfRequestLogID: B,
                url: K.url,
                status: K.status,
                headers: K.headers,
                message: q,
                durationMs: Date.now() - F
            })), this.makeStatusError(K.status, N, q, K.headers)
        }
        return vV(this).info(C), vV(this).debug(`[${W}] response start`, gb({
            retryOfRequestLogID: B,
            url: K.url,
            status: K.status,
            headers: K.headers,
            durationMs: D - F
        })), {
            response: K,
            options: G,
            controller: V,
            requestLogID: W,
            retryOfRequestLogID: B,
            startTime: F
        }
    }
    getAPIList(A, Q, B) {
        return this.requestAPIList(Q, {
            method: "get",
            path: A,
            ...B
        })
    }
    requestAPIList(A, Q) {
        let B = this.makeRequest(Q, null, void 0);
        return new NoA(this, B, A)
    }
    async fetchWithTimeout(A, Q, B, G) {
        let {
            signal: Z,
            method: I,
            ...Y
        } = Q || {};
        if (Z) Z.addEventListener("abort", () => G.abort());
        let J = setTimeout(() => G.abort(), B),
            W = globalThis.ReadableStream && Y.body instanceof globalThis.ReadableStream || typeof Y.body === "object" && Y.body !== null && Symbol.asyncIterator in Y.body,
            X = {
                signal: G.signal,
                ...W ? {
                    duplex: "half"
                } : {},
                method: "GET",
                ...Y
            };
        if (I) X.method = I.toUpperCase();
        try {
            return await this.fetch.call(void 0, A, X)
        } finally {
            clearTimeout(J)
        }
    }
    async shouldRetry(A) {
        let Q = A.headers.get("x-should-retry");
        if (Q === "true") return !0;
        if (Q === "false") return !1;
        if (A.status === 408) return !0;
        if (A.status === 409) return !0;
        if (A.status === 429) return !0;
        if (A.status >= 500) return !0;
        return !1
    }
    async retryRequest(A, Q, B, G) {
        let Z, I = G?.get("retry-after-ms");
        if (I) {
            let J = parseFloat(I);
            if (!Number.isNaN(J)) Z = J
        }
        let Y = G?.get("retry-after");
        if (Y && !Z) {
            let J = parseFloat(Y);
            if (!Number.isNaN(J)) Z = J * 1000;
            else Z = Date.parse(Y) - Date.now()
        }
        if (!(Z && 0 <= Z && Z < 60000)) {
            let J = A.maxRetries ?? this.maxRetries;
            Z = this.calculateDefaultRetryTimeoutMillis(Q, J)
        }
        return await aSB(Z), this.makeRequest(A, Q - 1, B)
    }
    calculateDefaultRetryTimeoutMillis(A, Q) {
        let Z = Q - A,
            I = Math.min(0.5 * Math.pow(2, Z), 8),
            Y = 1 - Math.random() * 0.25;
        return I * Y * 1000
    }
    calculateNonstreamingTimeout(A, Q) {
        if (3600000 * A / 128000 > 600000 || Q != null && A > Q) throw new yB("Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details");
        return 600000
    }
    async buildRequest(A, {
        retryCount: Q = 0
    } = {}) {
        let B = {
                ...A
            },
            {
                method: G,
                path: Z,
                query: I,
                defaultBaseURL: Y
            } = B,
            J = this.buildURL(Z, I, Y);
        if ("timeout" in B) JGB("timeout", B.timeout);
        B.timeout = B.timeout ?? this.timeout;
        let {
            bodyHeaders: W,
            body: X
        } = this.buildBody({
            options: B
        }), F = await this.buildHeaders({
            options: A,
            method: G,
            bodyHeaders: W,
            retryCount: Q
        });
        return {
            req: {
                method: G,
                headers: F,
                ...B.signal && {
                    signal: B.signal
                },
                ...globalThis.ReadableStream && X instanceof globalThis.ReadableStream && {
                    duplex: "half"
                },
                ...X && {
                    body: X
                },
                ...this.fetchOptions ?? {},
                ...B.fetchOptions ?? {}
            },
            url: J,
            timeout: B.timeout
        }
    }
    async buildHeaders({
        options: A,
        method: Q,
        bodyHeaders: B,
        retryCount: G
    }) {
        let Z = {};
        if (this.idempotencyHeader && Q !== "get") {
            if (!A.idempotencyKey) A.idempotencyKey = this.defaultIdempotencyKey();
            Z[this.idempotencyHeader] = A.idempotencyKey
        }
        let I = r4([Z, {
            Accept: "application/json",
            "User-Agent": this.getUserAgent(),
            "X-Stainless-Retry-Count": String(G),
            ...A.timeout ? {
                "X-Stainless-Timeout": String(Math.trunc(A.timeout / 1000))
            } : {},
            ...eSB(),
            ...this._options.dangerouslyAllowBrowser ? {
                "anthropic-dangerous-direct-browser-access": "true"
            } : void 0,
            "anthropic-version": "2023-06-01"
        }, await this.authHeaders(A), this._options.defaultHeaders, B, A.headers]);
        return this.validateHeaders(I), I.values
    }
    buildBody({
        options: {
            body: A,
            headers: Q
        }
    }) {
        if (!A) return {
            bodyHeaders: void 0,
            body: void 0
        };
        let B = r4([Q]);
        if (ArrayBuffer.isView(A) || A instanceof ArrayBuffer || A instanceof DataView || typeof A === "string" && B.values.has("content-type") || globalThis.Blob && A instanceof globalThis.Blob || A instanceof FormData || A instanceof URLSearchParams || globalThis.ReadableStream && A instanceof globalThis.ReadableStream) return {
            bodyHeaders: void 0,
            body: A
        };
        else if (typeof A === "object" && ((Symbol.asyncIterator in A) || (Symbol.iterator in A) && ("next" in A) && typeof A.next === "function")) return {
            bodyHeaders: void 0,
            body: EnA(A)
        };
        else return N0(this, yoA, "f").call(this, {
            body: A,
            headers: B
        })
    }
}
var Pc1, jc1, yoA, z_B, U_B = "\\n\\nHuman:",
    $_B = "\\n\\nAssistant:",
    MT;
var Hf = L(() => {
    fb();
    Vt();
    ed1();
    ZE();
    c_();
    Jc1();
    NwA();
    woA();
    $c1();
    Tc1();
    Uc1();
    Rc1();
    ed1();
    wM();
    qnA();
    Vt();
    jc1 = ZG, yoA = new WeakMap, Pc1 = new WeakSet, z_B = function() {
        return this.baseURL !== "https://api.anthropic.com"
    };
    ZG.Anthropic = jc1;
    ZG.HUMAN_PROMPT = U_B;
    ZG.AI_PROMPT = $_B;
    ZG.DEFAULT_TIMEOUT = 600000;
    ZG.AnthropicError = yB;
    ZG.APIError = a2;
    ZG.APIConnectionError = GE;
    ZG.APIConnectionTimeoutError = N_;
    ZG.APIUserAbortError = gY;
    ZG.NotFoundError = Xt;
    ZG.ConflictError = ZUA;
    ZG.RateLimitError = YUA;
    ZG.BadRequestError = BUA;
    ZG.AuthenticationError = Wt;
    ZG.InternalServerError = JUA;
    ZG.PermissionDeniedError = GUA;
    ZG.UnprocessableEntityError = IUA;
    ZG.toFile = LoA;
    MT = class MT extends ZG {
        constructor() {
            super(...arguments);
            this.completions = new fp(this), this.messages = new Bq(this), this.models = new _GA(this), this.beta = new mH(this)
        }
    };
    MT.Completions = fp;
    MT.Messages = Bq;
    MT.Models = _GA;
    MT.Beta = mH
});
var _c1 = U((VBG, voA) => {
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
    var w_B, q_B, N_B, L_B, M_B, O_B, R_B, T_B, P_B, xoA, Sc1, j_B, S_B, kGA, __B, k_B, y_B, x_B, v_B, b_B, f_B, h_B, g_B;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof voA === "object" && typeof VBG === "object") A(B(Q, B(VBG)));
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
        w_B = function(B, G) {
            Q(B, G);

            function Z() {
                this.constructor = B
            }
            B.prototype = G === null ? Object.create(G) : (Z.prototype = G.prototype, new Z)
        }, q_B = Object.assign || function(B) {
            for (var G, Z = 1, I = arguments.length; Z < I; Z++) {
                G = arguments[Z];
                for (var Y in G)
                    if (Object.prototype.hasOwnProperty.call(G, Y)) B[Y] = G[Y]
            }
            return B
        }, N_B = function(B, G) {
            var Z = {};
            for (var I in B)
                if (Object.prototype.hasOwnProperty.call(B, I) && G.indexOf(I) < 0) Z[I] = B[I];
            if (B != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var Y = 0, I = Object.getOwnPropertySymbols(B); Y < I.length; Y++)
                    if (G.indexOf(I[Y]) < 0 && Object.prototype.propertyIsEnumerable.call(B, I[Y])) Z[I[Y]] = B[I[Y]]
            }
            return Z
        }, L_B = function(B, G, Z, I) {
            var Y = arguments.length,
                J = Y < 3 ? G : I === null ? I = Object.getOwnPropertyDescriptor(G, Z) : I,
                W;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") J = Reflect.decorate(B, G, Z, I);
            else
                for (var X = B.length - 1; X >= 0; X--)
                    if (W = B[X]) J = (Y < 3 ? W(J) : Y > 3 ? W(G, Z, J) : W(G, Z)) || J;
            return Y > 3 && J && Object.defineProperty(G, Z, J), J
        }, M_B = function(B, G) {
            return function(Z, I) {
                G(Z, I, B)
            }
        }, O_B = function(B, G) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(B, G)
        }, R_B = function(B, G, Z, I) {
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
        }, T_B = function(B, G) {
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
        }, g_B = function(B, G, Z, I) {
            if (I === void 0) I = Z;
            B[I] = G[Z]
        }, P_B = function(B, G) {
            for (var Z in B)
                if (Z !== "default" && !G.hasOwnProperty(Z)) G[Z] = B[Z]
        }, xoA = function(B) {
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
        }, Sc1 = function(B, G) {
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
        }, j_B = function() {
            for (var B = [], G = 0; G < arguments.length; G++) B = B.concat(Sc1(arguments[G]));
            return B
        }, S_B = function() {
            for (var B = 0, G = 0, Z = arguments.length; G < Z; G++) B += arguments[G].length;
            for (var I = Array(B), Y = 0, G = 0; G < Z; G++)
                for (var J = arguments[G], W = 0, X = J.length; W < X; W++, Y++) I[Y] = J[W];
            return I
        }, kGA = function(B) {
            return this instanceof kGA ? (this.v = B, this) : new kGA(B)
        }, __B = function(B, G, Z) {
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
                H.value instanceof kGA ? Promise.resolve(H.value.v).then(V, K) : D(J[0][2], H)
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
        }, k_B = function(B) {
            var G, Z;
            return G = {}, I("next"), I("throw", function(Y) {
                throw Y
            }), I("return"), G[Symbol.iterator] = function() {
                return this
            }, G;

            function I(Y, J) {
                G[Y] = B[Y] ? function(W) {
                    return (Z = !Z) ? {
                        value: kGA(B[Y](W)),
                        done: Y === "return"
                    } : J ? J(W) : W
                } : J
            }
        }, y_B = function(B) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var G = B[Symbol.asyncIterator],
                Z;
            return G ? G.call(B) : (B = typeof xoA === "function" ? xoA(B) : B[Symbol.iterator](), Z = {}, I("next"), I("throw"), I("return"), Z[Symbol.asyncIterator] = function() {
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
        }, x_B = function(B, G) {
            if (Object.defineProperty) Object.defineProperty(B, "raw", {
                value: G
            });
            else B.raw = G;
            return B
        }, v_B = function(B) {
            if (B && B.__esModule) return B;
            var G = {};
            if (B != null) {
                for (var Z in B)
                    if (Object.hasOwnProperty.call(B, Z)) G[Z] = B[Z]
            }
            return G.default = B, G
        }, b_B = function(B) {
            return B && B.__esModule ? B : {
                default: B
            }
        }, f_B = function(B, G) {
            if (!G.has(B)) throw TypeError("attempted to get private field on non-instance");
            return G.get(B)
        }, h_B = function(B, G, Z) {
            if (!G.has(B)) throw TypeError("attempted to set private field on non-instance");
            return G.set(B, Z), Z
        }, A("__extends", w_B), A("__assign", q_B), A("__rest", N_B), A("__decorate", L_B), A("__param", M_B), A("__metadata", O_B), A("__awaiter", R_B), A("__generator", T_B), A("__exportStar", P_B), A("__createBinding", g_B), A("__values", xoA), A("__read", Sc1), A("__spread", j_B), A("__spreadArrays", S_B), A("__await", kGA), A("__asyncGenerator", __B), A("__asyncDelegator", k_B), A("__asyncValues", y_B), A("__makeTemplateObject", x_B), A("__importStar", v_B), A("__importDefault", b_B), A("__classPrivateFieldGet", f_B), A("__classPrivateFieldSet", h_B)
    })
});
var kc1 = U((u_B) => {
    Object.defineProperty(u_B, "__esModule", {
        value: !0
    });
    u_B.MAX_HASHABLE_LENGTH = u_B.INIT = u_B.KEY = u_B.DIGEST_LENGTH = u_B.BLOCK_SIZE = void 0;
    u_B.BLOCK_SIZE = 64;
    u_B.DIGEST_LENGTH = 32;
    u_B.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    u_B.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    u_B.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1
});
var p_B = U((d_B) => {
    Object.defineProperty(d_B, "__esModule", {
        value: !0
    });
    d_B.RawSha256 = void 0;
    var NM = kc1(),
        KR6 = function() {
            function A() {
                this.state = Int32Array.from(NM.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1
            }
            return A.prototype.update = function(Q) {
                if (this.finished) throw Error("Attempted to update an already finished hash.");
                var B = 0,
                    G = Q.byteLength;
                if (this.bytesHashed += G, this.bytesHashed * 8 > NM.MAX_HASHABLE_LENGTH) throw Error("Cannot hash more than 2^53 - 1 bits");
                while (G > 0)
                    if (this.buffer[this.bufferLength++] = Q[B++], G--, this.bufferLength === NM.BLOCK_SIZE) this.hashBuffer(), this.bufferLength = 0
            }, A.prototype.digest = function() {
                if (!this.finished) {
                    var Q = this.bytesHashed * 8,
                        B = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength),
                        G = this.bufferLength;
                    if (B.setUint8(this.bufferLength++, 128), G % NM.BLOCK_SIZE >= NM.BLOCK_SIZE - 8) {
                        for (var Z = this.bufferLength; Z < NM.BLOCK_SIZE; Z++) B.setUint8(Z, 0);
                        this.hashBuffer(), this.bufferLength = 0
                    }
                    for (var Z = this.bufferLength; Z < NM.BLOCK_SIZE - 8; Z++) B.setUint8(Z, 0);
                    B.setUint32(NM.BLOCK_SIZE - 8, Math.floor(Q / 4294967296), !0), B.setUint32(NM.BLOCK_SIZE - 4, Q), this.hashBuffer(), this.finished = !0
                }
                var I = new Uint8Array(NM.DIGEST_LENGTH);
                for (var Z = 0; Z < 8; Z++) I[Z * 4] = this.state[Z] >>> 24 & 255, I[Z * 4 + 1] = this.state[Z] >>> 16 & 255, I[Z * 4 + 2] = this.state[Z] >>> 8 & 255, I[Z * 4 + 3] = this.state[Z] >>> 0 & 255;
                return I
            }, A.prototype.hashBuffer = function() {
                var Q = this,
                    B = Q.buffer,
                    G = Q.state,
                    Z = G[0],
                    I = G[1],
                    Y = G[2],
                    J = G[3],
                    W = G[4],
                    X = G[5],
                    F = G[6],
                    V = G[7];
                for (var K = 0; K < NM.BLOCK_SIZE; K++) {
                    if (K < 16) this.temp[K] = (B[K * 4] & 255) << 24 | (B[K * 4 + 1] & 255) << 16 | (B[K * 4 + 2] & 255) << 8 | B[K * 4 + 3] & 255;
                    else {
                        var D = this.temp[K - 2],
                            H = (D >>> 17 | D << 15) ^ (D >>> 19 | D << 13) ^ D >>> 10;
                        D = this.temp[K - 15];
                        var C = (D >>> 7 | D << 25) ^ (D >>> 18 | D << 14) ^ D >>> 3;
                        this.temp[K] = (H + this.temp[K - 7] | 0) + (C + this.temp[K - 16] | 0)
                    }
                    var E = (((W >>> 6 | W << 26) ^ (W >>> 11 | W << 21) ^ (W >>> 25 | W << 7)) + (W & X ^ ~W & F) | 0) + (V + (NM.KEY[K] + this.temp[K] | 0) | 0) | 0,
                        z = ((Z >>> 2 | Z << 30) ^ (Z >>> 13 | Z << 19) ^ (Z >>> 22 | Z << 10)) + (Z & I ^ Z & Y ^ I & Y) | 0;
                    V = F, F = X, X = W, W = J + E | 0, J = Y, Y = I, I = Z, Z = E + z | 0
                }
                G[0] += Z, G[1] += I, G[2] += Y, G[3] += J, G[4] += W, G[5] += X, G[6] += F, G[7] += V
            }, A
        }();
    d_B.RawSha256 = KR6
});
var n_B = U((l_B) => {
    Object.defineProperty(l_B, "__esModule", {
        value: !0
    });
    l_B.toUtf8 = l_B.fromUtf8 = void 0;
    var DR6 = (A) => {
        let Q = [];
        for (let B = 0, G = A.length; B < G; B++) {
            let Z = A.charCodeAt(B);
            if (Z < 128) Q.push(Z);
            else if (Z < 2048) Q.push(Z >> 6 | 192, Z & 63 | 128);
            else if (B + 1 < A.length && (Z & 64512) === 55296 && (A.charCodeAt(B + 1) & 64512) === 56320) {
                let I = 65536 + ((Z & 1023) << 10) + (A.charCodeAt(++B) & 1023);
                Q.push(I >> 18 | 240, I >> 12 & 63 | 128, I >> 6 & 63 | 128, I & 63 | 128)
            } else Q.push(Z >> 12 | 224, Z >> 6 & 63 | 128, Z & 63 | 128)
        }
        return Uint8Array.from(Q)
    };
    l_B.fromUtf8 = DR6;
    var HR6 = (A) => {
        let Q = "";
        for (let B = 0, G = A.length; B < G; B++) {
            let Z = A[B];
            if (Z < 128) Q += String.fromCharCode(Z);
            else if (192 <= Z && Z < 224) {
                let I = A[++B];
                Q += String.fromCharCode((Z & 31) << 6 | I & 63)
            } else if (240 <= Z && Z < 365) {
                let Y = "%" + [Z, A[++B], A[++B], A[++B]].map((J) => J.toString(16)).join("%");
                Q += decodeURIComponent(Y)
            } else Q += String.fromCharCode((Z & 15) << 12 | (A[++B] & 63) << 6 | A[++B] & 63)
        }
        return Q
    };
    l_B.toUtf8 = HR6
});
var r_B = U((a_B) => {
    Object.defineProperty(a_B, "__esModule", {
        value: !0
    });
    a_B.toUtf8 = a_B.fromUtf8 = void 0;

    function ER6(A) {
        return new TextEncoder().encode(A)
    }
    a_B.fromUtf8 = ER6;

    function zR6(A) {
        return new TextDecoder("utf-8").decode(A)
    }
    a_B.toUtf8 = zR6
});
var yc1 = U((e_B) => {
    Object.defineProperty(e_B, "__esModule", {
        value: !0
    });
    e_B.toUtf8 = e_B.fromUtf8 = void 0;
    var o_B = n_B(),
        t_B = r_B(),
        $R6 = (A) => typeof TextEncoder === "function" ? (0, t_B.fromUtf8)(A) : (0, o_B.fromUtf8)(A);
    e_B.fromUtf8 = $R6;
    var wR6 = (A) => typeof TextDecoder === "function" ? (0, t_B.toUtf8)(A) : (0, o_B.toUtf8)(A);
    e_B.toUtf8 = wR6
});
var GkB = U((QkB) => {
    Object.defineProperty(QkB, "__esModule", {
        value: !0
    });
    QkB.convertToBuffer = void 0;
    var NR6 = yc1(),
        LR6 = typeof Buffer < "u" && Buffer.from ? function(A) {
            return Buffer.from(A, "utf8")
        } : NR6.fromUtf8;

    function MR6(A) {
        if (A instanceof Uint8Array) return A;
        if (typeof A === "string") return LR6(A);
        if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
        return new Uint8Array(A)
    }
    QkB.convertToBuffer = MR6
});
var YkB = U((ZkB) => {
    Object.defineProperty(ZkB, "__esModule", {
        value: !0
    });
    ZkB.isEmptyData = void 0;

    function OR6(A) {
        if (typeof A === "string") return A.length === 0;
        return A.byteLength === 0
    }
    ZkB.isEmptyData = OR6
});
var XkB = U((JkB) => {
    Object.defineProperty(JkB, "__esModule", {
        value: !0
    });
    JkB.numToUint8 = void 0;

    function RR6(A) {
        return new Uint8Array([(A & 4278190080) >> 24, (A & 16711680) >> 16, (A & 65280) >> 8, A & 255])
    }
    JkB.numToUint8 = RR6
});
var KkB = U((FkB) => {
    Object.defineProperty(FkB, "__esModule", {
        value: !0
    });
    FkB.uint32ArrayFrom = void 0;

    function TR6(A) {
        if (!Uint32Array.from) {
            var Q = new Uint32Array(A.length),
                B = 0;
            while (B < A.length) Q[B] = A[B], B += 1;
            return Q
        }
        return Uint32Array.from(A)
    }
    FkB.uint32ArrayFrom = TR6
});
var DkB = U((yGA) => {
    Object.defineProperty(yGA, "__esModule", {
        value: !0
    });
    yGA.uint32ArrayFrom = yGA.numToUint8 = yGA.isEmptyData = yGA.convertToBuffer = void 0;
    var PR6 = GkB();
    Object.defineProperty(yGA, "convertToBuffer", {
        enumerable: !0,
        get: function() {
            return PR6.convertToBuffer
        }
    });
    var jR6 = YkB();
    Object.defineProperty(yGA, "isEmptyData", {
        enumerable: !0,
        get: function() {
            return jR6.isEmptyData
        }
    });
    var SR6 = XkB();
    Object.defineProperty(yGA, "numToUint8", {
        enumerable: !0,
        get: function() {
            return SR6.numToUint8
        }
    });
    var _R6 = KkB();
    Object.defineProperty(yGA, "uint32ArrayFrom", {
        enumerable: !0,
        get: function() {
            return _R6.uint32ArrayFrom
        }
    })
});
var zkB = U((CkB) => {
    Object.defineProperty(CkB, "__esModule", {
        value: !0
    });
    CkB.Sha256 = void 0;
    var HkB = _c1(),
        foA = kc1(),
        boA = p_B(),
        xc1 = DkB(),
        yR6 = function() {
            function A(Q) {
                this.secret = Q, this.hash = new boA.RawSha256, this.reset()
            }
            return A.prototype.update = function(Q) {
                if ((0, xc1.isEmptyData)(Q) || this.error) return;
                try {
                    this.hash.update((0, xc1.convertToBuffer)(Q))
                } catch (B) {
                    this.error = B
                }
            }, A.prototype.digestSync = function() {
                if (this.error) throw this.error;
                if (this.outer) {
                    if (!this.outer.finished) this.outer.update(this.hash.digest());
                    return this.outer.digest()
                }
                return this.hash.digest()
            }, A.prototype.digest = function() {
                return HkB.__awaiter(this, void 0, void 0, function() {
                    return HkB.__generator(this, function(Q) {
                        return [2, this.digestSync()]
                    })
                })
            }, A.prototype.reset = function() {
                if (this.hash = new boA.RawSha256, this.secret) {
                    this.outer = new boA.RawSha256;
                    var Q = xR6(this.secret),
                        B = new Uint8Array(foA.BLOCK_SIZE);
                    B.set(Q);
                    for (var G = 0; G < foA.BLOCK_SIZE; G++) Q[G] ^= 54, B[G] ^= 92;
                    this.hash.update(Q), this.outer.update(B);
                    for (var G = 0; G < Q.byteLength; G++) Q[G] = 0
                }
            }, A
        }();
    CkB.Sha256 = yR6;