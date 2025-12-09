/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: prompts_004.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (22次) = lazyLoader(fn) - Lazy module loader
 *   D9       (1次) = BASH_TOOL_NAME = "Bash"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 4/10
 * Lines: 209140 - 210638 (1499 lines)
 * Original file: cli.js
 */

    if (!zoA(I)) return e(Error(`Failed to create directory for bash output: ${I}`)), "";
    try {
        return G.writeFileSync(Y, _O6(B, A, Q), {
            encoding: "utf-8",
            flush: !0
        }), Y
    } catch (J) {
        return e(J instanceof Error ? J : Error(String(J))), ""
    }
}

function yO6(A) {
    let Q = A.slice(-PO6),
        B = BZ(Q);
    return JSON.stringify(B)
}
async function cSB(A, Q, B, G, Z = []) {
    let I = [A, Q].filter(Boolean).join(`
`),
        {
            isImage: Y
        } = d_(Vf(A));
    if (Y) return {
        shouldSummarize: !1,
        reason: "image_data"
    };
    if (I.length < TO6) return {
        shouldSummarize: !1,
        reason: "below_threshold"
    };
    try {
        let J = yO6(Z),
            W = uSB(),
            X = mSB(B, J, I),
            F = Date.now(),
            V = await gX({
                systemPrompt: [W],
                userPrompt: X,
                enablePromptCaching: !0,
                options: {
                    querySource: "bash_output_summarization",
                    hasAppendSystemPrompt: !1,
                    isNonInteractiveSession: !1,
                    agents: [],
                    mcpTools: [],
                    agentIdOrSessionId: G0()
                },
                signal: G.signal
            }),
            K = Date.now() - F,
            D = V.message.content.filter((w) => w.type === "text").map((w) => w.text).join(""),
            H = e2(D, "should_summarize"),
            C = e2(D, "reason"),
            E = e2(D, "summary")?.trim() || "";
        if (!H) return {
            shouldSummarize: !1,
            reason: "parse_error",
            queryDurationMs: K
        };
        if (H === "true" && E) {
            let w = kO6(A, Q, B);
            return {
                shouldSummarize: !0,
                summary: xO6(E, w),
                rawOutputPath: w,
                queryDurationMs: K,
                ...C ? {
                    modelReason: C
                } : {}
            }
        }
        return {
            shouldSummarize: !1,
            reason: "model_decided_user_needs_full_output",
            queryDurationMs: K,
            ...C ? {
                modelReason: C
            } : {}
        }
    } catch (J) {
        return e(J instanceof Error ? J : Error(String(J))), {
            shouldSummarize: !1,
            reason: "summarization_error"
        }
    }
}

function xO6(A, Q) {
    let G = Q ? `

Note: The complete bash output is available at ${Q}. You can use Read or Grep tools to search for specific information not included in this summary.` : "";
    return `[Summarized output]
${A}${G}`
}
var TO6 = 5000,
    PO6 = 10,
    jO6 = "bash-outputs";
var pSB = L(() => {
    kZ();
    yp();
    o0();
    u1();
    nQ();
    GG();
    S0();
    M9()
});

function od1(A) {
    if (!A) return "";
    let Q = Array.isArray(A) ? A.join("") : A,
        {
            truncatedContent: B
        } = d_(Q);
    return B
}

function vO6(A) {
    if (typeof A["image/png"] === "string") return {
        image_data: A["image/png"].replace(/\s/g, ""),
        media_type: "image/png"
    };
    if (typeof A["image/jpeg"] === "string") return {
        image_data: A["image/jpeg"].replace(/\s/g, ""),
        media_type: "image/jpeg"
    };
    return
}

function bO6(A) {
    switch (A.output_type) {
        case "stream":
            return {
                output_type: A.output_type, text: od1(A.text)
            };
        case "execute_result":
        case "display_data":
            return {
                output_type: A.output_type, text: od1(A.data?.["text/plain"]), image: A.data && vO6(A.data)
            };
        case "error":
            return {
                output_type: A.output_type, text: od1(`${A.ename}: ${A.evalue}
${A.traceback.join(`
`)}`)
            }
    }
}

function lSB(A, Q, B, G) {
    let Z = A.id ?? `cell-${Q}`,
        I = {
            cellType: A.cell_type,
            source: Array.isArray(A.source) ? A.source.join("") : A.source,
            execution_count: A.cell_type === "code" ? A.execution_count || void 0 : void 0,
            cell_id: Z
        };
    if (A.cell_type === "code") I.language = B;
    if (A.cell_type === "code" && A.outputs?.length) {
        let Y = A.outputs.map(bO6);
        if (!G && JSON.stringify(Y).length > 1e4) I.outputs = [{
            output_type: "stream",
            text: `Outputs are too large to include. Use ${D9} with: cat <notebook_path> | jq '.cells[${Q}].outputs'`
        }];
        else I.outputs = Y
    }
    return I
}

function fO6(A) {
    let Q = [];
    if (A.cellType !== "code") Q.push(`<cell_type>${A.cellType}</cell_type>`);
    if (A.language !== "python" && A.cellType === "code") Q.push(`<language>${A.language}</language>`);
    return {
        text: `<cell id="${A.cell_id}">${Q.join("")}${A.source}</cell id="${A.cell_id}">`,
        type: "text"
    }
}

function hO6(A) {
    let Q = [];
    if (A.text) Q.push({
        text: `
${A.text}`,
        type: "text"
    });
    if (A.image) Q.push({
        type: "image",
        source: {
            data: A.image.image_data,
            media_type: A.image.media_type,
            type: "base64"
        }
    });
    return Q
}

function gO6(A) {
    let Q = fO6(A),
        B = A.outputs?.flatMap(hO6);
    return [Q, ...B ?? []]
}

function iSB(A, Q) {
    let B = b9(A),
        G = OA().readFileSync(B, {
            encoding: "utf-8"
        }),
        Z = JSON.parse(G),
        I = Z.metadata.language_info?.name ?? "python";
    if (Q) {
        let Y = Z.cells.find((J) => J.id === Q);
        if (!Y) throw Error(`Cell with ID "${Q}" not found in notebook`);
        return [lSB(Y, Z.cells.indexOf(Y), I, !0)]
    }
    return Z.cells.map((Y, J) => lSB(Y, J, I, !1))
}

function nSB(A, Q) {
    let B = A.flatMap(gO6);
    return {
        tool_use_id: Q,
        type: "tool_result",
        content: B.reduce((G, Z) => {
            if (G.length === 0) return [Z];
            let I = G[G.length - 1];
            if (I && I.type === "text" && Z.type === "text") return I.text += `
` + Z.text, G;
            return [...G, Z]
        }, [])
    }
}

function ZwA(A) {
    let Q = A.match(/^cell-(\d+)$/);
    if (Q && Q[1]) {
        let B = parseInt(Q[1], 10);
        return isNaN(B) ? void 0 : B
    }
    return
}
var UoA = L(() => {
    yp();
    jI();
    o0()
});
var td1 = function() {
    let {
        crypto: A
    } = globalThis;
    if (A?.randomUUID) return td1 = A.randomUUID.bind(A), A.randomUUID();
    let Q = new Uint8Array(1),
        B = A ? () => A.getRandomValues(Q)[0] : () => Math.random() * 255 & 255;
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (G) => (+G ^ B() & 15 >> +G / 4).toString(16))
};
var aSB = (A) => new Promise((Q) => setTimeout(Q, A));
var xp = "0.70.0";

function uO6() {
    if (typeof Deno < "u" && Deno.build != null) return "deno";
    if (typeof EdgeRuntime < "u") return "edge";
    if (Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) === "[object process]") return "node";
    return "unknown"
}

function dO6() {
    if (typeof navigator > "u" || !navigator) return null;
    let A = [{
        key: "edge",
        pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "ie",
        pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "ie",
        pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "chrome",
        pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "firefox",
        pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
    }, {
        key: "safari",
        pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
    }];
    for (let {
            key: Q,
            pattern: B
        }
        of A) {
        let G = B.exec(navigator.userAgent);
        if (G) {
            let Z = G[1] || 0,
                I = G[2] || 0,
                Y = G[3] || 0;
            return {
                browser: Q,
                version: `${Z}.${I}.${Y}`
            }
        }
    }
    return null
}
var tSB = () => {
        return typeof window < "u" && typeof window.document < "u" && typeof navigator < "u"
    },
    mO6 = () => {
        let A = uO6();
        if (A === "deno") return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": xp,
            "X-Stainless-OS": rSB(Deno.build.os),
            "X-Stainless-Arch": sSB(Deno.build.arch),
            "X-Stainless-Runtime": "deno",
            "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown"
        };
        if (typeof EdgeRuntime < "u") return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": xp,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": `other:${EdgeRuntime}`,
            "X-Stainless-Runtime": "edge",
            "X-Stainless-Runtime-Version": globalThis.process.version
        };
        if (A === "node") return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": xp,
            "X-Stainless-OS": rSB(globalThis.process.platform ?? "unknown"),
            "X-Stainless-Arch": sSB(globalThis.process.arch ?? "unknown"),
            "X-Stainless-Runtime": "node",
            "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown"
        };
        let Q = dO6();
        if (Q) return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": xp,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": "unknown",
            "X-Stainless-Runtime": `browser:${Q.browser}`,
            "X-Stainless-Runtime-Version": Q.version
        };
        return {
            "X-Stainless-Lang": "js",
            "X-Stainless-Package-Version": xp,
            "X-Stainless-OS": "Unknown",
            "X-Stainless-Arch": "unknown",
            "X-Stainless-Runtime": "unknown",
            "X-Stainless-Runtime-Version": "unknown"
        }
    },
    sSB = (A) => {
        if (A === "x32") return "x32";
        if (A === "x86_64" || A === "x64") return "x64";
        if (A === "arm") return "arm";
        if (A === "aarch64" || A === "arm64") return "arm64";
        if (A) return `other:${A}`;
        return "unknown"
    },
    rSB = (A) => {
        if (A = A.toLowerCase(), A.includes("ios")) return "iOS";
        if (A === "android") return "Android";
        if (A === "darwin") return "MacOS";
        if (A === "win32") return "Windows";
        if (A === "freebsd") return "FreeBSD";
        if (A === "openbsd") return "OpenBSD";
        if (A === "linux") return "Linux";
        if (A) return `Other:${A}`;
        return "Unknown"
    },
    oSB, eSB = () => {
        return oSB ?? (oSB = mO6())
    };
var ed1 = () => {};
var A_B = ({
    headers: A,
    body: Q
}) => {
    return {
        bodyHeaders: {
            "content-type": "application/json"
        },
        body: JSON.stringify(Q)
    }
};
async function $oA(A, Q) {
    let {
        response: B,
        requestLogID: G,
        retryOfRequestLogID: Z,
        startTime: I
    } = Q, Y = await (async () => {
        if (Q.options.stream) {
            if (vV(A).debug("response", B.status, B.url, B.headers, B.body), Q.options.__streamClass) return Q.options.__streamClass.fromSSEResponse(B, Q.controller);
            return IE.fromSSEResponse(B, Q.controller)
        }
        if (B.status === 204) return null;
        if (Q.options.__binaryResponse) return B;
        let W = B.headers.get("content-type")?.split(";")[0]?.trim();
        if (W?.includes("application/json") || W?.endsWith("+json")) {
            let V = await B.json();
            return Ac1(V, B)
        }
        return await B.text()
    })();
    return vV(A).debug(`[${G}] response parsed`, gb({
        retryOfRequestLogID: Z,
        url: B.url,
        status: B.status,
        body: Y,
        durationMs: Date.now() - I
    })), Y
}

function Ac1(A, Q) {
    if (!A || typeof A !== "object" || Array.isArray(A)) return A;
    return Object.defineProperty(A, "_request_id", {
        value: Q.headers.get("request-id"),
        enumerable: !1
    })
}
var Qc1 = L(() => {
    Gf1();
    qnA()
});
var IwA, De;
var woA = L(() => {
    fb();
    Qc1();
    De = class De extends Promise {
        constructor(A, Q, B = $oA) {
            super((G) => {
                G(null)
            });
            this.responsePromise = Q, this.parseResponse = B, IwA.set(this, void 0), bB(this, IwA, A, "f")
        }
        _thenUnwrap(A) {
            return new De(N0(this, IwA, "f"), this.responsePromise, async (Q, B) => Ac1(A(await this.parseResponse(Q, B), B), B.response))
        }
        asResponse() {
            return this.responsePromise.then((A) => A.response)
        }
        async withResponse() {
            let [A, Q] = await Promise.all([this.parse(), this.asResponse()]);
            return {
                data: A,
                response: Q,
                request_id: Q.headers.get("request-id")
            }
        }
        parse() {
            if (!this.parsedPromise) this.parsedPromise = this.responsePromise.then((A) => this.parseResponse(N0(this, IwA, "f"), A));
            return this.parsedPromise
        }
        then(A, Q) {
            return this.parse().then(A, Q)
        } catch (A) {
            return this.parse().catch(A)
        } finally(A) {
            return this.parse().finally(A)
        }
    };
    IwA = new WeakMap
});
var qoA, Bc1, NoA, NT, YwA;
var c_ = L(() => {
    fb();
    ZE();
    Qc1();
    woA();
    Vt();
    Bc1 = class Bc1 {
        constructor(A, Q, B, G) {
            qoA.set(this, void 0), bB(this, qoA, A, "f"), this.options = G, this.response = Q, this.body = B
        }
        hasNextPage() {
            if (!this.getPaginatedItems().length) return !1;
            return this.nextPageRequestOptions() != null
        }
        async getNextPage() {
            let A = this.nextPageRequestOptions();
            if (!A) throw new yB("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");
            return await N0(this, qoA, "f").requestAPIList(this.constructor, A)
        }
        async * iterPages() {
            let A = this;
            yield A;
            while (A.hasNextPage()) A = await A.getNextPage(), yield A
        }
        async * [(qoA = new WeakMap, Symbol.asyncIterator)]() {
            for await (let A of this.iterPages()) for (let Q of A.getPaginatedItems()) yield Q
        }
    };
    NoA = class NoA extends De {
        constructor(A, Q, B) {
            super(A, Q, async (G, Z) => new B(G, Z.response, await $oA(G, Z), Z.options))
        }
        async * [Symbol.asyncIterator]() {
            let A = await this;
            for await (let Q of A) yield Q
        }
    };
    NT = class NT extends Bc1 {
        constructor(A, Q, B, G) {
            super(A, Q, B, G);
            this.data = B.data || [], this.has_more = B.has_more || !1, this.first_id = B.first_id || null, this.last_id = B.last_id || null
        }
        getPaginatedItems() {
            return this.data ?? []
        }
        hasNextPage() {
            if (this.has_more === !1) return !1;
            return super.hasNextPage()
        }
        nextPageRequestOptions() {
            if (this.options.query?.before_id) {
                let Q = this.first_id;
                if (!Q) return null;
                return {
                    ...this.options,
                    query: {
                        ...znA(this.options.query),
                        before_id: Q
                    }
                }
            }
            let A = this.last_id;
            if (!A) return null;
            return {
                ...this.options,
                query: {
                    ...znA(this.options.query),
                    after_id: A
                }
            }
        }
    };
    YwA = class YwA extends Bc1 {
        constructor(A, Q, B, G) {
            super(A, Q, B, G);
            this.data = B.data || [], this.has_more = B.has_more || !1, this.next_page = B.next_page || null
        }
        getPaginatedItems() {
            return this.data ?? []
        }
        hasNextPage() {
            if (this.has_more === !1) return !1;
            return super.hasNextPage()
        }
        nextPageRequestOptions() {
            let A = this.next_page;
            if (!A) return null;
            return {
                ...this.options,
                query: {
                    ...znA(this.options.query),
                    page: A
                }
            }
        }
    }
});

function He(A, Q, B) {
    return Zc1(), new File(A, Q ?? "unknown_file", B)
}

function JwA(A) {
    return (typeof A === "object" && A !== null && (("name" in A) && A.name && String(A.name) || ("url" in A) && A.url && String(A.url) || ("filename" in A) && A.filename && String(A.filename) || ("path" in A) && A.path && String(A.path)) || "").split(/[\\/]/).pop() || void 0
}

function lO6(A) {
    let Q = typeof A === "function" ? A : A.fetch,
        B = Q_B.get(Q);
    if (B) return B;
    let G = (async () => {
        try {
            let Z = "Response" in Q ? Q.Response : (await Q("data:,")).constructor,
                I = new FormData;
            if (I.toString() === await new Z(I).text()) return !1;
            return !0
        } catch {
            return !0
        }
    })();
    return Q_B.set(Q, G), G
}
var Zc1 = () => {
        if (typeof File > "u") {
            let {
                process: A
            } = globalThis, Q = typeof A?.versions?.node === "string" && parseInt(A.versions.node.split(".")) < 20;
            throw Error("`File` is not defined as a global, which is required for file uploads." + (Q ? " Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`." : ""))
        }
    },
    Ic1 = (A) => A != null && typeof A === "object" && typeof A[Symbol.asyncIterator] === "function",
    OGA = async (A, Q) => {
        return {
            ...A,
            body: await iO6(A.body, Q)
        }
    }, Q_B, iO6 = async (A, Q) => {
        if (!await lO6(Q)) throw TypeError("The provided fetch function does not support file uploads with the current global FormData class.");
        let B = new FormData;
        return await Promise.all(Object.entries(A || {}).map(([G, Z]) => Gc1(B, G, Z))), B
    }, nO6 = (A) => A instanceof Blob && ("name" in A), Gc1 = async (A, Q, B) => {
        if (B === void 0) return;
        if (B == null) throw TypeError(`Received null for "${Q}"; to pass null in FormData, you must use the string 'null'`);
        if (typeof B === "string" || typeof B === "number" || typeof B === "boolean") A.append(Q, String(B));
        else if (B instanceof Response) {
            let G = {},
                Z = B.headers.get("Content-Type");
            if (Z) G = {
                type: Z
            };
            A.append(Q, He([await B.blob()], JwA(B), G))
        } else if (Ic1(B)) A.append(Q, He([await new Response(EnA(B)).blob()], JwA(B)));
        else if (nO6(B)) A.append(Q, He([B], JwA(B), {
            type: B.type
        }));
        else if (Array.isArray(B)) await Promise.all(B.map((G) => Gc1(A, Q + "[]", G)));
        else if (typeof B === "object") await Promise.all(Object.entries(B).map(([G, Z]) => Gc1(A, `${Q}[${G}]`, Z)));
        else throw TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${B} instead`)
    };
var RGA = L(() => {
    Q_B = new WeakMap
});
async function LoA(A, Q, B) {
    if (Zc1(), A = await A, Q || (Q = JwA(A)), aO6(A)) {
        if (A instanceof File && Q == null && B == null) return A;
        return He([await A.arrayBuffer()], Q ?? A.name, {
            type: A.type,
            lastModified: A.lastModified,
            ...B
        })
    }
    if (sO6(A)) {
        let Z = await A.blob();
        return Q || (Q = new URL(A.url).pathname.split(/[\\/]/).pop()), He(await Yc1(Z), Q, B)
    }
    let G = await Yc1(A);
    if (!B?.type) {
        let Z = G.find((I) => typeof I === "object" && ("type" in I) && I.type);
        if (typeof Z === "string") B = {
            ...B,
            type: Z
        }
    }
    return He(G, Q, B)
}
async function Yc1(A) {
    let Q = [];
    if (typeof A === "string" || ArrayBuffer.isView(A) || A instanceof ArrayBuffer) Q.push(A);
    else if (B_B(A)) Q.push(A instanceof Blob ? A : await A.arrayBuffer());
    else if (Ic1(A))
        for await (let B of A) Q.push(...await Yc1(B));
    else {
        let B = A?.constructor?.name;
        throw Error(`Unexpected data type: ${typeof A}${B?`; constructor: ${B}`:""}${rO6(A)}`)
    }
    return Q
}

function rO6(A) {
    if (typeof A !== "object" || A === null) return "";
    return `; props: [${Object.getOwnPropertyNames(A).map((B)=>`"${B}"`).join(", ")}]`
}
var B_B = (A) => A != null && typeof A === "object" && typeof A.size === "number" && typeof A.type === "string" && typeof A.text === "function" && typeof A.slice === "function" && typeof A.arrayBuffer === "function",
    aO6 = (A) => A != null && typeof A === "object" && typeof A.name === "string" && typeof A.lastModified === "number" && B_B(A),
    sO6 = (A) => A != null && typeof A === "object" && typeof A.url === "string" && typeof A.blob === "function";
var G_B = L(() => {
    RGA();
    RGA()
});
var Jc1 = L(() => {
    G_B()
});
var Z_B = () => {};
class cY {
    constructor(A) {
        this._client = A
    }
}

function* tO6(A) {
    if (!A) return;
    if (I_B in A) {
        let {
            values: G,
            nulls: Z
        } = A;
        yield* G.entries();
        for (let I of Z) yield [I, null];
        return
    }
    let Q = !1,
        B;
    if (A instanceof Headers) B = A.entries();
    else if (Qf1(A)) B = A;
    else Q = !0, B = Object.entries(A ?? {});
    for (let G of B) {
        let Z = G[0];
        if (typeof Z !== "string") throw TypeError("expected header name to be a string");
        let I = Qf1(G[1]) ? G[1] : [G[1]],
            Y = !1;
        for (let J of I) {
            if (J === void 0) continue;
            if (Q && !Y) Y = !0, yield [Z, null];
            yield [Z, J]
        }
    }
}
var I_B, r4 = (A) => {
    let Q = new Headers,
        B = new Set;
    for (let G of A) {
        let Z = new Set;
        for (let [I, Y] of tO6(G)) {
            let J = I.toLowerCase();
            if (!Z.has(J)) Q.delete(I), Z.add(J);
            if (Y === null) Q.delete(I), B.add(J);
            else Q.append(I, Y), B.delete(J)
        }
    }
    return {
        [I_B]: !0,
        values: Q,
        nulls: B
    }
};
var wM = L(() => {
    Vt();
    I_B = Symbol.for("brand.privateNullableHeaders")
});

function J_B(A) {
    return A.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent)
}
var Y_B, eO6 = (A = J_B) => function(B, ...G) {
        if (B.length === 1) return B[0];
        let Z = !1,
            I = [],
            Y = B.reduce((F, V, K) => {
                if (/[?#]/.test(V)) Z = !0;
                let D = G[K],
                    H = (Z ? encodeURIComponent : A)("" + D);
                if (K !== G.length && (D == null || typeof D === "object" && D.toString === Object.getPrototypeOf(Object.getPrototypeOf(D.hasOwnProperty ?? Y_B) ?? Y_B)?.toString)) H = D + "", I.push({
                    start: F.length + V.length,
                    length: H.length,
                    error: `Value of type ${Object.prototype.toString.call(D).slice(8,-1)} is not a valid path parameter`
                });
                return F + V + (K === G.length ? "" : H)
            }, ""),
            J = Y.split(/[?#]/, 1)[0],
            W = /(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,
            X;
        while ((X = W.exec(J)) !== null) I.push({
            start: X.index,
            length: X[0].length,
            error: `Value "${X[0]}" can't be safely passed as a path parameter`
        });
        if (I.sort((F, V) => F.start - V.start), I.length > 0) {
            let F = 0,
                V = I.reduce((K, D) => {
                    let H = " ".repeat(D.start - F),
                        C = "^".repeat(D.length);
                    return F = D.start + D.length, K + H + C
                }, "");
            throw new yB(`Path parameters result in path with invalid segments:
${I.map((K)=>K.error).join(`
`)}
${Y}
${V}`)
        }
        return Y
    },
    BY;
var vp = L(() => {
    ZE();
    Y_B = Object.freeze(Object.create(null)), BY = eO6(J_B)
});
var WwA;
var Wc1 = L(() => {
    c_();
    wM();
    RGA();
    vp();
    WwA = class WwA extends cY {
        list(A = {}, Q) {
            let {
                betas: B,
                ...G
            } = A ?? {};
            return this._client.getAPIList("/v1/files", NT, {
                query: G,
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...B ?? [], "files-api-2025-04-14"].toString()
                }, Q?.headers])
            })
        }
        delete(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.delete(BY`/v1/files/${A}`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "files-api-2025-04-14"].toString()
                }, B?.headers])
            })
        }
        download(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.get(BY`/v1/files/${A}/content`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "files-api-2025-04-14"].toString(),
                    Accept: "application/binary"
                }, B?.headers]),
                __binaryResponse: !0
            })
        }
        retrieveMetadata(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.get(BY`/v1/files/${A}`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "files-api-2025-04-14"].toString()
                }, B?.headers])
            })
        }
        upload(A, Q) {
            let {
                betas: B,
                ...G
            } = A;
            return this._client.post("/v1/files", OGA({
                body: G,
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...B ?? [], "files-api-2025-04-14"].toString()
                }, Q?.headers])
            }, this._client))
        }
    }
});
var XwA;
var Xc1 = L(() => {
    c_();
    wM();
    vp();
    XwA = class XwA extends cY {
        retrieve(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.get(BY`/v1/models/${A}?beta=true`, {
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
            return this._client.getAPIList("/v1/models?beta=true", NT, {
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
var MoA;
var Fc1 = L(() => {
    MoA = {
        "claude-opus-4-20250514": 8192,
        "claude-opus-4-0": 8192,
        "claude-4-opus-20250514": 8192,
        "anthropic.claude-opus-4-20250514-v1:0": 8192,
        "claude-opus-4@20250514": 8192,
        "claude-opus-4-1-20250805": 8192,
        "anthropic.claude-opus-4-1-20250805-v1:0": 8192,
        "claude-opus-4-1@20250805": 8192
    }
});

function W_B() {
    let A, Q;
    return {
        promise: new Promise((G, Z) => {
            A = G, Q = Z
        }),
        resolve: A,
        reject: Q
    }
}
async function BR6(A, Q = A.messages.at(-1)) {
    if (!Q || Q.role !== "assistant" || !Q.content || typeof Q.content === "string") return null;
    let B = Q.content.filter((Z) => Z.type === "tool_use");
    if (B.length === 0) return null;
    return {
        role: "user",
        content: await Promise.all(B.map(async (Z) => {
            let I = A.tools.find((Y) => Y.name === Z.name);
            if (!I || !("run" in I)) return {
                type: "tool_result",
                tool_use_id: Z.id,
                content: `Error: Tool '${Z.name}' not found`,
                is_error: !0
            };
            try {
                let Y = Z.input;
                if ("parse" in I && I.parse) Y = I.parse(Y);
                let J = await I.run(Y);
                return {
                    type: "tool_result",
                    tool_use_id: Z.id,
                    content: J
                }
            } catch (Y) {
                return {
                    type: "tool_result",
                    tool_use_id: Z.id,
                    content: `Error: ${Y instanceof Error?Y.message:String(Y)}`,
                    is_error: !0
                }
            }
        }))
    }
}
var OoA, TGA, Ce, wU, FwA, LT, Kf, bp, VwA, Vc1, KwA;
var Kc1 = L(() => {
    fb();
    ZE();
    wM();
    KwA = class KwA {
        constructor(A, Q, B) {
            OoA.add(this), this.client = A, TGA.set(this, !1), Ce.set(this, !1), wU.set(this, void 0), FwA.set(this, void 0), LT.set(this, void 0), Kf.set(this, void 0), bp.set(this, void 0), VwA.set(this, 0), bB(this, wU, {
                params: {
                    ...Q,
                    messages: structuredClone(Q.messages)
                }
            }, "f"), bB(this, FwA, {
                ...B,
                headers: r4([{
                    "x-stainless-helper": "BetaToolRunner"
                }, B?.headers])
            }, "f"), bB(this, bp, W_B(), "f")
        }
        async * [(TGA = new WeakMap, Ce = new WeakMap, wU = new WeakMap, FwA = new WeakMap, LT = new WeakMap, Kf = new WeakMap, bp = new WeakMap, VwA = new WeakMap, OoA = new WeakSet, Symbol.asyncIterator)]() {
            var A;
            if (N0(this, TGA, "f")) throw new yB("Cannot iterate over a consumed stream");
            bB(this, TGA, !0, "f"), bB(this, Ce, !0, "f"), bB(this, Kf, void 0, "f");
            try {
                while (!0) {
                    let Q;
                    try {
                        if (N0(this, wU, "f").params.max_iterations && N0(this, VwA, "f") >= N0(this, wU, "f").params.max_iterations) break;
                        bB(this, Ce, !1, "f"), bB(this, LT, void 0, "f"), bB(this, Kf, void 0, "f"), bB(this, VwA, (A = N0(this, VwA, "f"), A++, A), "f");
                        let {
                            max_iterations: B,
                            ...G
                        } = N0(this, wU, "f").params;
                        if (G.stream) Q = this.client.beta.messages.stream({
                            ...G
                        }, N0(this, FwA, "f")), bB(this, LT, Q.finalMessage(), "f"), N0(this, LT, "f").catch(() => {}), yield Q;
                        else bB(this, LT, this.client.beta.messages.create({
                            ...G,
                            stream: !1
                        }, N0(this, FwA, "f")), "f"), yield N0(this, LT, "f");
                        if (!N0(this, Ce, "f")) {
                            let {
                                role: I,
                                content: Y
                            } = await N0(this, LT, "f");
                            N0(this, wU, "f").params.messages.push({
                                role: I,
                                content: Y
                            })
                        }
                        let Z = await N0(this, OoA, "m", Vc1).call(this, N0(this, wU, "f").params.messages.at(-1));
                        if (Z) N0(this, wU, "f").params.messages.push(Z);
                        if (!Z && !N0(this, Ce, "f")) break
                    } finally {
                        if (Q) Q.abort()
                    }
                }
                if (!N0(this, LT, "f")) throw new yB("ToolRunner concluded without a message from the server");
                N0(this, bp, "f").resolve(await N0(this, LT, "f"))
            } catch (Q) {
                throw bB(this, TGA, !1, "f"), N0(this, bp, "f").promise.catch(() => {}), N0(this, bp, "f").reject(Q), bB(this, bp, W_B(), "f"), Q
            }
        }
        setMessagesParams(A) {
            if (typeof A === "function") N0(this, wU, "f").params = A(N0(this, wU, "f").params);
            else N0(this, wU, "f").params = A;
            bB(this, Ce, !0, "f"), bB(this, Kf, void 0, "f")
        }
        async generateToolResponse() {
            let A = await N0(this, LT, "f") ?? this.params.messages.at(-1);
            if (!A) return null;
            return N0(this, OoA, "m", Vc1).call(this, A)
        }
        done() {
            return N0(this, bp, "f").promise
        }
        async runUntilDone() {
            if (!N0(this, TGA, "f"))
                for await (let A of this);
            return this.done()
        }
        get params() {
            return N0(this, wU, "f").params
        }
        pushMessages(...A) {
            this.setMessagesParams((Q) => ({
                ...Q,
                messages: [...Q.messages, ...A]
            }))
        }
        then(A, Q) {
            return this.runUntilDone().then(A, Q)
        }
    };
    Vc1 = async function(Q) {
        if (N0(this, Kf, "f") !== void 0) return N0(this, Kf, "f");
        return bB(this, Kf, BR6(N0(this, wU, "f").params, Q), "f"), N0(this, Kf, "f")
    }
});
var PGA;
var Dc1 = L(() => {
    ZE();
    eb1();
    PGA = class PGA {
        constructor(A, Q) {
            this.iterator = A, this.controller = Q
        }
        async * decoder() {
            let A = new dc;
            for await (let Q of this.iterator) for (let B of A.decode(Q)) yield JSON.parse(B);
            for (let Q of A.flush()) yield JSON.parse(Q)
        } [Symbol.asyncIterator]() {
            return this.decoder()
        }
        static fromResponse(A, Q) {
            if (!A.body) {
                if (Q.abort(), typeof globalThis.navigator < "u" && globalThis.navigator.product === "ReactNative") throw new yB("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api");
                throw new yB("Attempted to iterate over a response with no body")
            }
            return new PGA(WUA(A.body), Q)
        }
    }
});
var DwA;
var Hc1 = L(() => {
    c_();
    wM();
    Dc1();
    Ft();
    vp();
    DwA = class DwA extends cY {
        create(A, Q) {
            let {
                betas: B,
                ...G
            } = A;
            return this._client.post("/v1/messages/batches?beta=true", {
                body: G,
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...B ?? [], "message-batches-2024-09-24"].toString()
                }, Q?.headers])
            })
        }
        retrieve(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.get(BY`/v1/messages/batches/${A}?beta=true`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "message-batches-2024-09-24"].toString()
                }, B?.headers])
            })
        }
        list(A = {}, Q) {
            let {
                betas: B,
                ...G
            } = A ?? {};
            return this._client.getAPIList("/v1/messages/batches?beta=true", NT, {
                query: G,
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...B ?? [], "message-batches-2024-09-24"].toString()
                }, Q?.headers])
            })
        }
        delete(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.delete(BY`/v1/messages/batches/${A}?beta=true`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "message-batches-2024-09-24"].toString()
                }, B?.headers])
            })
        }
        cancel(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.post(BY`/v1/messages/batches/${A}/cancel?beta=true`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "message-batches-2024-09-24"].toString()
                }, B?.headers])
            })
        }
        async results(A, Q = {}, B) {
            let G = await this.retrieve(A);
            if (!G.results_url) throw new yB(`No batch \`results_url\`; Has it finished processing? ${G.processing_status} - ${G.id}`);
            let {
                betas: Z
            } = Q ?? {};
            return this._client.get(G.results_url, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...Z ?? [], "message-batches-2024-09-24"].toString(),
                    Accept: "application/binary"
                }, B?.headers]),
                stream: !0,
                __binaryResponse: !0
            })._thenUnwrap((I, Y) => PGA.fromResponse(Y.response, Y.controller))
        }
    }
});
var X_B, Ee;
var Cc1 = L(() => {
    Fc1();
    wM();
    Yf1();
    Vf1();
    Kc1();
    Hc1();
    Hc1();
    Kc1();
    X_B = {
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
    Ee = class Ee extends cY {
        constructor() {
            super(...arguments);
            this.batches = new DwA(this._client)
        }
        create(A, Q) {
            let {
                betas: B,
                ...G
            } = A;
            if (G.model in X_B) console.warn(`The model '${G.model}' is deprecated and will reach end-of-life on ${X_B[G.model]}
Please migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`);
            let Z = this._client._options.timeout;
            if (!G.stream && Z == null) {
                let I = MoA[G.model] ?? void 0;
                Z = this._client.calculateNonstreamingTimeout(G.max_tokens, I)
            }
            return this._client.post("/v1/messages?beta=true", {
                body: G,
                timeout: Z ?? 600000,
                ...Q,
                headers: r4([{
                    ...B?.toString() != null ? {
                        "anthropic-beta": B?.toString()
                    } : void 0
                }, Q?.headers]),
                stream: A.stream ?? !1
            })
        }
        parse(A, Q) {
            return Q = {
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...A.betas ?? [], "structured-outputs-2025-09-17"].toString()
                }, Q?.headers])
            }, this.create(A, Q).then((B) => If1(B, A))
        }
        stream(A, Q) {
            return Kt.createMessage(this, A, Q)
        }
        countTokens(A, Q) {
            let {
                betas: B,
                ...G
            } = A;
            return this._client.post("/v1/messages/count_tokens?beta=true", {
                body: G,
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...B ?? [], "token-counting-2024-11-01"].toString()
                }, Q?.headers])
            })
        }
        toolRunner(A, Q) {
            return new KwA(this._client, A, Q)
        }
    };
    Ee.Batches = DwA;
    Ee.BetaToolRunner = KwA
});
var HwA;
var Ec1 = L(() => {
    c_();
    wM();
    RGA();
    vp();
    HwA = class HwA extends cY {
        create(A, Q = {}, B) {
            let {
                betas: G,
                ...Z
            } = Q ?? {};
            return this._client.post(BY`/v1/skills/${A}/versions?beta=true`, OGA({
                body: Z,
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "skills-2025-10-02"].toString()
                }, B?.headers])
            }, this._client))
        }
        retrieve(A, Q, B) {
            let {
                skill_id: G,
                betas: Z
            } = Q;
            return this._client.get(BY`/v1/skills/${G}/versions/${A}?beta=true`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...Z ?? [], "skills-2025-10-02"].toString()
                }, B?.headers])
            })
        }
        list(A, Q = {}, B) {
            let {
                betas: G,
                ...Z
            } = Q ?? {};
            return this._client.getAPIList(BY`/v1/skills/${A}/versions?beta=true`, YwA, {
                query: Z,
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "skills-2025-10-02"].toString()
                }, B?.headers])
            })
        }
        delete(A, Q, B) {
            let {
                skill_id: G,
                betas: Z
            } = Q;
            return this._client.delete(BY`/v1/skills/${G}/versions/${A}?beta=true`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...Z ?? [], "skills-2025-10-02"].toString()
                }, B?.headers])
            })
        }
    }
});
var jGA;
var zc1 = L(() => {
    Ec1();
    Ec1();
    c_();
    wM();
    RGA();
    vp();
    jGA = class jGA extends cY {
        constructor() {
            super(...arguments);
            this.versions = new HwA(this._client)
        }
        create(A = {}, Q) {
            let {
                betas: B,
                ...G
            } = A ?? {};
            return this._client.post("/v1/skills?beta=true", OGA({
                body: G,
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...B ?? [], "skills-2025-10-02"].toString()
                }, Q?.headers])
            }, this._client))
        }
        retrieve(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.get(BY`/v1/skills/${A}?beta=true`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "skills-2025-10-02"].toString()
                }, B?.headers])
            })
        }
        list(A = {}, Q) {
            let {
                betas: B,
                ...G
            } = A ?? {};
            return this._client.getAPIList("/v1/skills?beta=true", YwA, {
                query: G,
                ...Q,
                headers: r4([{
                    "anthropic-beta": [...B ?? [], "skills-2025-10-02"].toString()
                }, Q?.headers])
            })
        }
        delete(A, Q = {}, B) {
            let {
                betas: G
            } = Q ?? {};
            return this._client.delete(BY`/v1/skills/${A}?beta=true`, {
                ...B,
                headers: r4([{
                    "anthropic-beta": [...G ?? [], "skills-2025-10-02"].toString()
                }, B?.headers])
            })
        }
    };
    jGA.Versions = HwA
});
var mH;
var Uc1 = L(() => {
    Wc1();
    Wc1();
    Xc1();
    Xc1();
    Cc1();
    Cc1();
    zc1();
    zc1();
    mH = class mH extends cY {
        constructor() {
            super(...arguments);
            this.models = new XwA(this._client), this.messages = new Ee(this._client), this.files = new WwA(this._client), this.skills = new jGA(this._client)
        }
    };
    mH.Models = XwA;
    mH.Messages = Ee;
    mH.Files = WwA;
    mH.Skills = jGA
});
var fp;
var $c1 = L(() => {
    wM();
    fp = class fp extends cY {
        create(A, Q) {
            let {
                betas: B,
                ...G
            } = A;
            return this._client.post("/v1/complete", {
                body: G,
                timeout: this._client._options.timeout ?? 600000,
                ...Q,
                headers: r4([{
                    ...B?.toString() != null ? {
                        "anthropic-beta": B?.toString()
                    } : void 0
                }, Q?.headers]),
                stream: A.stream ?? !1
            })
        }
    }
});

function D_B(A) {
    return A.type === "tool_use" || A.type === "server_tool_use"
}

function H_B(A) {}
var qM, hp, CwA, RoA, EwA, zwA, ToA, UwA, Df, $wA, PoA, joA, SGA, SoA, _oA, wc1, F_B, qc1, Nc1, Lc1, Mc1, V_B, K_B = "__json_buf",
    wwA;
var C_B = L(() => {
    fb();
    Ft();
    NnA();
    rb1();
    wwA = class wwA {
        constructor() {
            qM.add(this), this.messages = [], this.receivedMessages = [], hp.set(this, void 0), this.controller = new AbortController, CwA.set(this, void 0), RoA.set(this, () => {}), EwA.set(this, () => {}), zwA.set(this, void 0), ToA.set(this, () => {}), UwA.set(this, () => {}), Df.set(this, {}), $wA.set(this, !1), PoA.set(this, !1), joA.set(this, !1), SGA.set(this, !1), SoA.set(this, void 0), _oA.set(this, void 0), qc1.set(this, (A) => {
                if (bB(this, PoA, !0, "f"), hb(A)) A = new gY;
                if (A instanceof gY) return bB(this, joA, !0, "f"), this._emit("abort", A);
                if (A instanceof yB) return this._emit("error", A);
                if (A instanceof Error) {
                    let Q = new yB(A.message);
                    return Q.cause = A, this._emit("error", Q)
                }
                return this._emit("error", new yB(String(A)))
            }), bB(this, CwA, new Promise((A, Q) => {
                bB(this, RoA, A, "f"), bB(this, EwA, Q, "f")
            }), "f"), bB(this, zwA, new Promise((A, Q) => {
                bB(this, ToA, A, "f"), bB(this, UwA, Q, "f")
            }), "f"), N0(this, CwA, "f").catch(() => {}), N0(this, zwA, "f").catch(() => {})
        }
        get response() {
            return N0(this, SoA, "f")
        }
        get request_id() {
            return N0(this, _oA, "f")
        }
        async withResponse() {
            let A = await N0(this, CwA, "f");
            if (!A) throw Error("Could not resolve a `Response` object");
            return {
                data: this,
                response: A,
                request_id: A.headers.get("request-id")
            }
        }
        static fromReadableStream(A) {
            let Q = new wwA;
            return Q._run(() => Q._fromReadableStream(A)), Q
        }
        static createMessage(A, Q, B) {
            let G = new wwA;
            for (let Z of Q.messages) G._addMessageParam(Z);
            return G._run(() => G._createMessage(A, {
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
            }, N0(this, qc1, "f"))
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
                N0(this, qM, "m", Nc1).call(this);
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
                for await (let J of Y) N0(this, qM, "m", Lc1).call(this, J);
                if (Y.controller.signal?.aborted) throw new gY;