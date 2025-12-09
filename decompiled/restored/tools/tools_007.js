/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: tools_007.js
 * 处理时间: 2025-12-09T03:37:25.560Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * GA         ( 11x) = esmImport(module) - ESM import helper
 * thinking   (  3x) = THINKING content type
 * tool_use   (  2x) = TOOL_USE content type
 * D9         (  1x) = BASH_TOOL = "Bash"
 * g5         (  1x) = READ_TOOL = "Read"
 * S3         (  1x) = getDefaultSonnetModel() - Returns main Claude model name
 * LW         (  1x) = getSmallFastModel() - Returns lightweight/haiku model
 * xz         (  1x) = nativeMethod(obj, name) - Native method lookup
 * j9A        (  1x) = isPlainObject() - Check plain object
 * D_A        (  1x) = getModelProvider(model) - Get provider for model
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 7/25
 * Lines: 263045 - 264541 (1497 lines)
 * Original file: cli.js
 */

function Et1() {
    return !1
}
async function g95(A, Q, B) {
    if (!Et1()) return await B();
    let G = TB2("sha1").update(JSON.stringify(A)).digest("hex").slice(0, 12),
        Z = PB2(process.env.CLAUDE_CODE_TEST_FIXTURES_ROOT ?? H0(), `fixtures/${Q}-${G}.json`);
    if (OA().existsSync(Z)) return JSON.parse(OA().readFileSync(Z, {
        encoding: "utf8"
    }));
    if (m0.isCI) throw Error(`Fixture missing: ${Z}. Re-run npm test locally, then commit the result.`);
    let I = await B();
    if (!OA().existsSync(p01(Z))) OA().mkdirSync(p01(Z));
    return OA().writeFileSync(Z, JSON.stringify(I, null, 2), {
        encoding: "utf8",
        flush: !1
    }), I
}
async function zt1(A, Q) {
    if (!Et1()) return await Q();
    let B = BZ(A.filter((Y) => {
            if (Y.type !== "user") return !0;
            if (Y.isMeta) return !1;
            return !0
        })),
        G = m95(B.map((Y) => Y.message.content), RB2),
        Z = PB2(process.env.CLAUDE_CODE_TEST_FIXTURES_ROOT ?? H0(), `fixtures/${G.map((Y)=>TB2("sha1").update(JSON.stringify(Y)).digest("hex").slice(0,6)).join("-")}.json`);
    if (OA().existsSync(Z)) {
        let Y = JSON.parse(OA().readFileSync(Z, {
            encoding: "utf8"
        }));
        return Y.output.forEach(u95), Y.output.map((J, W) => OB2(J, c95, W))
    }
    if (m0.isCI) throw Error(`Anthropic API fixture missing: ${Z}. Re-run npm test locally, then commit the result. Input messages:
${JSON.stringify(G,null,2)}`);
    let I = await Q();
    if (m0.isCI) return I;
    if (!OA().existsSync(p01(Z))) OA().mkdirSync(p01(Z));
    return OA().writeFileSync(Z, JSON.stringify({
        input: G,
        output: I.map((Y, J) => OB2(Y, RB2, J))
    }, null, 2), {
        encoding: "utf8",
        flush: !1
    }), I
}

function u95(A) {
    if (A.type === "stream_event") return;
    let Q = A.message.model,
        B = A.message.usage,
        G = _sA(Q, B);
    PsA(G, B, Q)
}

function m95(A, Q) {
    return A.map((B) => {
        if (typeof B === "string") return Q(B);
        return B.map((G) => {
            switch (G.type) {
                case "tool_result":
                    if (typeof G.content === "string") return {
                        ...G,
                        content: Q(G.content)
                    };
                    if (Array.isArray(G.content)) return {
                        ...G,
                        content: G.content.map((Z) => {
                            switch (Z.type) {
                                case "text":
                                    return {
                                        ...Z, text: Q(Z.text)
                                    };
                                case "image":
                                    return Z;
                                default:
                                    return
                            }
                        })
                    };
                    return G;
                case "text":
                    return {
                        ...G, text: Q(G.text)
                    };
                case "tool_use":
                    return {
                        ...G, input: l01(G.input, Q)
                    };
                case "image":
                    return G;
                default:
                    return
            }
        })
    })
}

function l01(A, Q) {
    return vo(A, (B, G) => {
        if (Array.isArray(B)) return B.map((Z) => l01(Z, Q));
        if (j9A(B)) return l01(B, Q);
        return Q(B, G, A)
    })
}

function d95(A, Q, B) {
    return {
        uuid: `UUID-${B}`,
        requestId: "REQUEST_ID",
        timestamp: A.timestamp,
        message: {
            ...A.message,
            content: A.message.content.map((G) => {
                switch (G.type) {
                    case "text":
                        return {
                            ...G, text: Q(G.text), citations: G.citations || []
                        };
                    case "tool_use":
                        return {
                            ...G, input: l01(G.input, Q)
                        };
                    default:
                        return G
                }
            }).filter(Boolean)
        },
        type: "assistant"
    }
}

function OB2(A, Q, B) {
    if (A.type === "assistant") return d95(A, Q, B);
    else return A
}

function RB2(A) {
    if (typeof A !== "string") return A;
    let Q = A.replace(/num_files="\d+"/g, 'num_files="[NUM]"').replace(/duration_ms="\d+"/g, 'duration_ms="[DURATION]"').replace(/cost_usd="\d+"/g, 'cost_usd="[COST]"').replace(/\//g, jB2.sep).replaceAll(PQ(), "[CONFIG_HOME]").replaceAll(H0(), "[CWD]").replace(/Available commands:.+/, "Available commands: [COMMANDS]");
    if (Q.includes("Files modified by user:")) return "Files modified by user: [FILES]";
    return Q
}

function c95(A) {
    if (typeof A !== "string") return A;
    return A.replaceAll("[NUM]", "1").replaceAll("[DURATION]", "100").replaceAll("[CONFIG_HOME]", PQ()).replaceAll("[CWD]", H0())
}
async function* Ut1(A, Q) {
    if (!Et1()) return yield* Q();
    let B = [],
        G = await zt1(A, async () => {
            for await (let Z of Q()) B.push(Z);
            return B
        });
    if (G.length > 0) {
        yield* G;
        return
    }
    yield* B
}
async function SB2(A, Q, B) {
    return (await g95({
        messages: A,
        tools: Q
    }, "token-count", async () => ({
        tokenCount: await B()
    }))).tokenCount
}
var $t1 = L(() => {
    f5();
    R2();
    hQ();
    o0();
    ixA();
    MlA();
    nQ();
    ksA();
    x_()
});

function _B2(A) {
    for (let Q of A)
        if (Q.role === "assistant" && Array.isArray(Q.content)) {
            for (let B of Q.content)
                if (typeof B === "object" && B !== null && "type" in B && (B.type === "thinking" || B.type === "redacted_thinking")) return !0
        } return !1
}
async function kB2(A) {
    if (!A) return 0;
    return FLA([{
        role: "user",
        content: A
    }], [])
}
async function FLA(A, Q) {
    return SB2(A, Q, async () => {
        try {
            let B = S3(),
                G = await Vq({
                    maxRetries: 1,
                    model: B
                }),
                Z = Iw(B),
                I = _B2(A),
                Y = await G.beta.messages.countTokens({
                    model: zp(B),
                    messages: A.length > 0 ? A : [{
                        role: "user",
                        content: "foo"
                    }],
                    tools: Q,
                    ...Z.length > 0 ? {
                        betas: Z
                    } : {},
                    ...I ? {
                        thinking: {
                            type: "enabled",
                            budget_tokens: 1024
                        },
                        max_tokens: 2048
                    } : {}
                });
            if (typeof Y.input_tokens !== "number") return null;
            return Y.input_tokens
        } catch (B) {
            return e(B), null
        }
    })
}

function SG(A) {
    return Math.round(A.length / 4)
}
async function yB2(A, Q) {
    let B = _B2(A),
        G = V0(process.env.CLAUDE_CODE_USE_VERTEX) && D_A(LW()) === "global",
        Z = V0(process.env.CLAUDE_CODE_USE_BEDROCK) && B,
        I = V0(process.env.CLAUDE_CODE_USE_VERTEX) && B,
        Y = G || Z || I ? HU() : o7A(),
        J = await Vq({
            maxRetries: 1,
            model: Y
        }),
        W = A.length > 0 ? A : [{
            role: "user",
            content: "count"
        }],
        X = Iw(Y),
        V = (await J.beta.messages.create({
            model: zp(Y),
            max_tokens: B ? 2048 : 1,
            messages: W,
            tools: Q.length > 0 ? Q : void 0,
            ...X.length > 0 ? {
                betas: X
            } : {},
            metadata: fl(),
            ...i01(),
            ...B ? {
                thinking: {
                    type: "enabled",
                    budget_tokens: 1024
                }
            } : {}
        })).usage,
        K = V.input_tokens,
        D = V.cache_creation_input_tokens || 0,
        H = V.cache_read_input_tokens || 0;
    return K + D + H
}

function xB2(A) {
    if (A.type !== "assistant" || !A.message?.content) return 0;
    let Q = "";
    if (typeof A.message.content === "string") Q = A.message.content;
    else if (Array.isArray(A.message.content)) Q = A.message.content.filter((B) => B.type === "text").map((B) => B.text || "").join(`
`);
    return SG(Q)
}
var gM = L(() => {
    EIA();
    u1();
    s2();
    ej();
    s2();
    kZ();
    hQ();
    $t1()
});

function y0({
    children: A,
    height: Q
}) {
    if (vB2.useContext(bB2)) return A;
    return lT.createElement(p95, null, lT.createElement(j, {
        flexDirection: "row",
        height: Q,
        overflowY: "hidden"
    }, lT.createElement($, null, "  ", "⎿  "), A))
}

function p95({
    children: A
}) {
    return lT.createElement(bB2.Provider, {
        value: !0
    }, A)
}
var lT, vB2, bB2;
var u8 = L(() => {
    hA();
    lT = GA(VA(), 1), vB2 = GA(VA(), 1);
    bB2 = lT.createContext(!1)
});

function Uk() {
    return zk.createElement(zk.Fragment, null, zk.createElement($, {
        color: "error"
    }, "Interrupted "), zk.createElement($, {
        dimColor: !0
    }, "· What should Claude do instead?"))
}
var zk;
var zIA = L(() => {
    hA();
    zk = GA(VA(), 1)
});

function k3() {
    return VLA.createElement(y0, {
        height: 1
    }, VLA.createElement(Uk, null))
}
var VLA;
var lV = L(() => {
    u8();
    zIA();
    VLA = GA(VA(), 1)
});

function YB() {
    let A = fB2.useContext(oUA);
    if (!A) throw Error("useTerminalSize must be used within an Ink App component");
    return A
}
var fB2;
var m8 = L(() => {
    vaA();
    fB2 = GA(VA(), 1)
});

function wt1({
    children: A
}) {
    return UIA.default.createElement(gB2.Provider, {
        value: !0
    }, A)
}

function hl() {
    if (UIA.useContext(gB2)) return null;
    return UIA.default.createElement($, {
        dimColor: !0
    }, hB2)
}

function uB2() {
    return oA.dim(hB2)
}
var UIA, hB2 = "(ctrl+o to expand)",
    gB2;
var $IA = L(() => {
    hA();
    J9();
    UIA = GA(VA(), 1), gB2 = UIA.default.createContext(!1)
});

function Nt1(A) {
    if (V0(process.env.CLAUDE_CODE_DISABLE_TERMINAL_TITLE)) return;
    if (process.platform === "win32") process.title = A ? `✳ ${A}` : A;
    else process.stdout.write(`\x1B]0;${A?`✳ ${A}`:""}\x07`)
}
async function mB2(A) {
    if (A.startsWith("<local-command-stdout>")) return;
    let Q = "{";
    try {
        let B = await gX({
                systemPrompt: ["Analyze if this message indicates a new conversation topic. If it does, extract a 2-3 word title that captures the new topic. Format your response as a JSON object with two fields: 'isNewTopic' (boolean) and 'title' (string, or null if isNewTopic is false). Only include these fields, no other text. ONLY generate the JSON object, no other text (eg. no markdown)."],
                userPrompt: A,
                assistantPrompt: Q,
                signal: new AbortController().signal,
                options: {
                    querySource: "terminal_update_title",
                    agents: [],
                    isNonInteractiveSession: !1,
                    hasAppendSystemPrompt: !1,
                    mcpTools: [],
                    agentIdOrSessionId: G0()
                }
            }),
            G = Q + B.message.content.filter((I) => I.type === "text").map((I) => I.text).join(""),
            Z = S7(G);
        if (Z && typeof Z === "object" && "isNewTopic" in Z && "title" in Z) {
            if (Z.isNewTopic && Z.title) Nt1(Z.title)
        }
    } catch (B) {
        e(B)
    }
}

function SJ() {
    return new Promise((A) => {
        process.stdout.write("\x1B[2J\x1B[3J\x1B[H", () => {
            A()
        })
    })
}

function i95(A, Q) {
    let B = A.split(`
`),
        G = [];
    for (let I of B)
        if (I.length <= Q) G.push(I.trimEnd());
        else
            for (let Y = 0; Y < I.length; Y += Q) G.push(I.slice(Y, Y + Q).trimEnd());
    let Z = G.length - qt1;
    if (Z === 1) return {
        aboveTheFold: G.slice(0, qt1 + 1).join(`
`).trimEnd(),
        remainingLines: 0
    };
    return {
        aboveTheFold: G.slice(0, qt1).join(`
`).trimEnd(),
        remainingLines: Math.max(0, Z)
    }
}

function dB2(A, Q) {
    let B = A.trimEnd();
    if (!B) return "";
    let {
        aboveTheFold: G,
        remainingLines: Z
    } = i95(B, Math.max(Q - l95, 10));
    return [G, Z > 0 ? oA.dim(`… +${Z} lines ${uB2()}`) : ""].filter(Boolean).join(`
`)
}
var qt1 = 3,
    l95 = 9;
var Bh = L(() => {
    kZ();
    zV();
    u1();
    J9();
    $IA();
    hQ();
    S0()
});

function n95(A) {
    try {
        let Q = JSON.parse(A),
            B = JSON.stringify(Q),
            G = A.replace(/\s+/g, ""),
            Z = B.replace(/\s+/g, "");
        if (G !== Z) return A;
        return JSON.stringify(Q, null, 2)
    } catch {
        return A
    }
}

function cB2(A) {
    return A.split(`
`).map(n95).join(`
`)
}

function xU({
    content: A,
    verbose: Q,
    isError: B
}) {
    let {
        columns: G
    } = YB(), Z = pB2.useMemo(() => {
        if (Q) return n01(cB2(A));
        else return n01(dB2(cB2(A), G))
    }, [A, Q, G]);
    return KLA.createElement(y0, null, KLA.createElement($, {
        color: B ? "error" : void 0
    }, Z))
}

function n01(A) {
    return A.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "")
}
var KLA, pB2;
var wIA = L(() => {
    hA();
    u8();
    m8();
    Bh();
    KLA = GA(VA(), 1), pB2 = GA(VA(), 1)
});

function a01(A) {
    return A.replace(/<sandbox_violations>[\s\S]*?<\/sandbox_violations>/g, "")
}

function A5({
    result: A,
    verbose: Q
}) {
    let B;
    if (typeof A !== "string") B = "Tool execution failed";
    else {
        let Z = e2(A, "tool_use_error") ?? A,
            Y = a01(Z).trim();
        if (!Q && Y.includes("InputValidationError: ")) B = "Invalid tool parameters";
        else if (Y.startsWith("Error: ")) B = Y;
        else B = `Error: ${Y}`
    }
    let G = B.split(`
`).length - Lt1;
    return OD.createElement(y0, null, OD.createElement(j, {
        flexDirection: "column"
    }, OD.createElement($, {
        color: "error"
    }, n01(Q ? B : B.split(`
`).slice(0, Lt1).join(`
`))), !Q && B.split(`
`).length > Lt1 && OD.createElement(j, null, OD.createElement($, {
        dimColor: !0
    }, "… +", G, " ", G === 1 ? "line" : "lines", " ("), OD.createElement($, {
        dimColor: !0,
        bold: !0
    }, "ctrl+o"), OD.createElement($, null, " "), OD.createElement($, {
        dimColor: !0
    }, "to see all)"))))
}
var OD, Lt1 = 10;
var lX = L(() => {
    hA();
    u8();
    nQ();
    wIA();
    OD = GA(VA(), 1)
});
import {
    randomBytes as a95
} from "crypto";

function s95(A) {
    return a95(4).readUInt32BE(0) % A
}

function Mt1(A) {
    return A[s95(A.length)]
}

function aB2() {
    let A = Mt1(lB2),
        Q = Mt1(nB2),
        B = Mt1(iB2);
    return `${A}-${Q}-${B}`
}
var lB2, iB2, nB2, ZqG;
var sB2 = L(() => {
    lB2 = ["abundant", "ancient", "bright", "calm", "cheerful", "clever", "cozy", "curious", "dapper", "dazzling", "deep", "delightful", "eager", "elegant", "enchanted", "fancy", "fluffy", "gentle", "gleaming", "golden", "graceful", "happy", "hidden", "humble", "jolly", "joyful", "keen", "kind", "lively", "lovely", "lucky", "luminous", "magical", "majestic", "mellow", "merry", "mighty", "misty", "noble", "peaceful", "playful", "plucky", "polished", "precious", "proud", "quiet", "quirky", "radiant", "rosy", "serene", "shiny", "silly", "sleepy", "smooth", "snazzy", "snug", "snuggly", "soft", "sparkling", "spicy", "splendid", "sprightly", "starry", "steady", "sunny", "swift", "tender", "tidy", "toasty", "tranquil", "twinkly", "valiant", "vast", "velvet", "vivid", "warm", "whimsical", "wild", "wise", "witty", "wondrous", "zany", "zesty", "zippy", "breezy", "bubbly", "buzzing", "cheeky", "cosmic", "cozy", "crispy", "crystalline", "cuddly", "drifting", "dreamy", "effervescent", "ethereal", "fizzy", "flickering", "floating", "floofy", "fluttering", "foamy", "frolicking", "fuzzy", "giggly", "glimmering", "glistening", "glittery", "glowing", "goofy", "groovy", "harmonic", "hazy", "humming", "iridescent", "jaunty", "jazzy", "jiggly", "melodic", "moonlit", "mossy", "nifty", "peppy", "prancy", "purrfect", "purring", "quizzical", "rippling", "rustling", "sassy", "shimmering", "shimmying", "snappy", "snoopy", "squishy", "swirling", "ticklish", "tingly", "twinkling", "velvety", "wiggly", "wobbly", "woolly", "zazzy", "abstract", "adaptive", "agile", "async", "atomic", "binary", "cached", "compiled", "composed", "compressed", "concurrent", "cryptic", "curried", "declarative", "delegated", "distributed", "dynamic", "eager", "elegant", "encapsulated", "enumerated", "eventual", "expressive", "federated", "functional", "generic", "greedy", "hashed", "idempotent", "immutable", "imperative", "indexed", "inherited", "iterative", "lazy", "lexical", "linear", "linked", "logical", "memoized", "modular", "mutable", "nested", "optimized", "parallel", "parsed", "partitioned", "piped", "polymorphic", "pure", "reactive", "recursive", "refactored", "reflective", "replicated", "resilient", "robust", "scalable", "sequential", "serialized", "sharded", "sorted", "staged", "stateful", "stateless", "streamed", "structured", "synchronous", "synthetic", "temporal", "transient", "typed", "unified", "validated", "vectorized", "virtual"], iB2 = ["aurora", "avalanche", "blossom", "breeze", "brook", "bubble", "canyon", "cascade", "cloud", "clover", "comet", "coral", "cosmos", "creek", "crescent", "crystal", "dawn", "dewdrop", "dusk", "eclipse", "ember", "feather", "fern", "firefly", "flame", "flurry", "fog", "forest", "frost", "galaxy", "garden", "glacier", "glade", "grove", "harbor", "horizon", "island", "lagoon", "lake", "leaf", "lightning", "meadow", "meteor", "mist", "moon", "moonbeam", "mountain", "nebula", "nova", "ocean", "orbit", "pebble", "petal", "pine", "planet", "pond", "puddle", "quasar", "rain", "rainbow", "reef", "ripple", "river", "shore", "sky", "snowflake", "spark", "spring", "star", "stardust", "starlight", "storm", "stream", "summit", "sun", "sunbeam", "sunrise", "sunset", "thunder", "tide", "twilight", "valley", "volcano", "waterfall", "wave", "willow", "wind", "alpaca", "axolotl", "badger", "bear", "beaver", "bee", "bird", "bumblebee", "bunny", "butterfly", "capybara", "cat", "chipmunk", "crab", "crane", "deer", "dolphin", "dove", "dragon", "dragonfly", "duck", "duckling", "eagle", "elephant", "falcon", "finch", "flamingo", "fox", "frog", "giraffe", "goose", "hamster", "hare", "hedgehog", "hippo", "hummingbird", "jellyfish", "kitten", "koala", "ladybug", "lark", "lemur", "llama", "lobster", "lynx", "manatee", "meerkat", "moth", "narwhal", "newt", "octopus", "otter", "owl", "panda", "parrot", "peacock", "pelican", "penguin", "phoenix", "piglet", "platypus", "pony", "porcupine", "puffin", "puppy", "quail", "quokka", "rabbit", "raccoon", "raven", "robin", "salamander", "seahorse", "seal", "sloth", "snail", "sparrow", "sphinx", "squid", "squirrel", "starfish", "starling", "swan", "tiger", "toucan", "turtle", "unicorn", "walrus", "whale", "wolf", "wombat", "wren", "yeti", "zebra", "acorn", "anchor", "balloon", "beacon", "biscuit", "blanket", "bonbon", "book", "boot", "button", "cake", "candle", "candy", "castle", "charm", "clock", "cocoa", "compass", "cookie", "crayon", "crown", "cupcake", "donut", "dream", "fairy", "fiddle", "flask", "flute", "fountain", "gadget", "gem", "gizmo", "globe", "goblet", "hammock", "harp", "haven", "hearth", "honey", "jingle", "journal", "kazoo", "kettle", "key", "kite", "lantern", "lemon", "lighthouse", "locket", "lollipop", "mango", "map", "marble", "marshmallow", "melody", "mitten", "mochi", "muffin", "music", "nest", "noodle", "oasis", "origami", "pancake", "parasol", "peach", "pearl", "pebble", "pie", "pillow", "pinwheel", "pixel", "pizza", "plum", "popcorn", "pretzel", "prism", "pudding", "pumpkin", "puzzle", "quiche", "quill", "quilt", "riddle", "rocket", "rose", "scone", "scroll", "shell", "sketch", "snowglobe", "sonnet", "sparkle", "spindle", "sprout", "sundae", "swing", "taco", "teacup", "teapot", "thimble", "toast", "token", "tome", "tower", "treasure", "treehouse", "trinket", "truffle", "tulip", "umbrella", "waffle", "wand", "whisper", "whistle", "widget", "wreath", "zephyr", "abelson", "adleman", "aho", "allen", "babbage", "bachman", "backus", "barto", "bengio", "bentley", "blum", "boole", "brooks", "catmull", "cerf", "cherny", "church", "clarke", "cocke", "codd", "conway", "cook", "corbato", "cray", "curry", "dahl", "diffie", "dijkstra", "dongarra", "eich", "emerson", "engelbart", "feigenbaum", "floyd", "gehret", "goldwasser", "gosling", "graham", "gray", "hamming", "hanrahan", "hartmanis", "hejlsberg", "hellman", "hennessy", "hickey", "hinton", "hoare", "hollerith", "hopcroft", "hopper", "iverson", "kahan", "kahn", "karp", "kay", "kernighan", "knuth", "kurzweil", "lamport", "lampson", "lecun", "lerdorf", "liskov", "lovelace", "matsumoto", "mccarthy", "metcalfe", "micali", "milner", "minsky", "moler", "moore", "naur", "neumann", "newell", "nygaard", "papert", "parnas", "pascal", "patterson", "pearl", "perlis", "pike", "pnueli", "rabin", "reddy", "ritchie", "rivest", "rossum", "russell", "scott", "sedgewick", "shamir", "shannon", "sifakis", "simon", "stallman", "stearns", "steele", "stonebraker", "stroustrup", "sutherland", "sutton", "tarjan", "thacker", "thompson", "torvalds", "turing", "ullman", "valiant", "wadler", "wall", "wigderson", "wilkes", "wilkinson", "wirth", "wozniak", "yao"], nB2 = ["baking", "beaming", "booping", "bouncing", "brewing", "bubbling", "chasing", "churning", "coalescing", "conjuring", "cooking", "crafting", "crunching", "cuddling", "dancing", "dazzling", "discovering", "doodling", "dreaming", "drifting", "enchanting", "exploring", "finding", "floating", "fluttering", "foraging", "forging", "frolicking", "gathering", "giggling", "gliding", "greeting", "growing", "hatching", "herding", "honking", "hopping", "hugging", "humming", "imagining", "inventing", "jingling", "juggling", "jumping", "kindling", "knitting", "launching", "leaping", "mapping", "marinating", "meandering", "mixing", "moseying", "munching", "napping", "nibbling", "noodling", "orbiting", "painting", "percolating", "petting", "plotting", "pondering", "popping", "prancing", "purring", "puzzling", "questing", "riding", "roaming", "rolling", "sauteeing", "scribbling", "seeking", "shimmying", "singing", "skipping", "sleeping", "snacking", "sniffing", "snuggling", "soaring", "sparking", "spinning", "splashing", "sprouting", "squishing", "stargazing", "stirring", "strolling", "swimming", "swinging", "tickling", "tinkering", "toasting", "tumbling", "twirling", "waddling", "wandering", "watching", "weaving", "whistling", "wibbling", "wiggling", "wishing", "wobbling", "wondering", "yawning", "zooming"];
    ZqG = lB2.length * nB2.length * iB2.length
});
import {
    join as DLA
} from "path";

function o95(A) {
    let Q = A ?? G0(),
        B = JVA(),
        G = B.get(Q);
    if (!G) {
        let Z = vU();
        for (let I = 0; I < r95; I++) {
            G = aB2();
            let Y = DLA(Z, `${G}.md`);
            if (!OA().existsSync(Y)) break
        }
        B.set(Q, G)
    }
    return G
}

function t95(A, Q) {
    JVA().set(A, Q)
}

function vU() {
    let A = DLA(PQ(), "plans");
    if (!OA().existsSync(A)) try {
        OA().mkdirSync(A)
    } catch (Q) {
        e(Q instanceof Error ? Q : Error(String(Q)))
    }
    return A
}

function bU(A) {
    let Q = A ?? G0(),
        B = G0(),
        G = o95(B);
    if (Q === B) return DLA(vU(), `${G}.md`);
    return DLA(vU(), `${G}-agent-${Q}.md`)
}

function fU(A) {
    let Q = bU(A);
    if (!OA().existsSync(Q)) return null;
    try {
        return OA().readFileSync(Q, {
            encoding: "utf-8"
        })
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), null
    }
}

function s01(A) {
    let Q = A.messages.find((G) => G.slug)?.slug;
    if (!Q) return !1;
    t95(G0(), Q);
    let B = DLA(vU(), `${Q}.md`);
    return OA().existsSync(B)
}
var r95 = 10;
var _E = L(() => {
    S0();
    o0();
    hQ();
    u1();
    sB2()
});

function rB2({
    file_path: A,
    offset: Q,
    limit: B
}, {
    verbose: G
}) {
    if (!A) return null;
    let Z = Q5(A);
    if (G && (Q || B)) {
        let I = Q ?? 1,
            Y = B ? `lines ${I}-${I+B-1}` : `from line ${I}`;
        return `${Z} · ${Y}`
    }
    return Z
}

function oB2() {
    return null
}

function tB2(A) {
    switch (A.type) {
        case "image": {
            let {
                originalSize: Q
            } = A.file, B = LJ(Q);
            return L7.createElement(y0, {
                height: 1
            }, L7.createElement($, null, "Read image (", B, ")"))
        }
        case "notebook": {
            let {
                cells: Q
            } = A.file;
            if (!Q || Q.length < 1) return L7.createElement($, {
                color: "error"
            }, "No cells found in notebook");
            return L7.createElement(y0, {
                height: 1
            }, L7.createElement($, null, "Read ", L7.createElement($, {
                bold: !0
            }, Q.length), " cells"))
        }
        case "pdf": {
            let {
                originalSize: Q
            } = A.file, B = LJ(Q);
            return L7.createElement(y0, {
                height: 1
            }, L7.createElement($, null, "Read PDF (", B, ")"))
        }
        case "text": {
            let {
                numLines: Q
            } = A.file;
            return L7.createElement(y0, {
                height: 1
            }, L7.createElement($, null, "Read ", L7.createElement($, {
                bold: !0
            }, Q), " ", Q === 1 ? "line" : "lines"))
        }
    }
}

function eB2() {
    return L7.createElement(k3, null)
}

function A22(A, {
    verbose: Q
}) {
    if (!Q && typeof A === "string" && e2(A, "tool_use_error")) return L7.createElement(y0, null, L7.createElement($, {
        color: "error"
    }, "Error reading file"));
    return L7.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function Q22(A) {
    if (A?.file_path?.startsWith(vU())) return "Reading Plan";
    return "Read"
}

function B22(A) {
    if (!A?.file_path) return null;
    return Q5(A.file_path)
}
var L7;
var G22 = L(() => {
    hA();
    lV();
    lX();
    u8();
    M9();
    nQ();
    _E();
    L7 = GA(VA(), 1)
});
import {
    createHash as Z22
} from "crypto";

function e95(A) {
    return Z22("sha256").update(A).digest("hex").slice(0, 16)
}

function A45(A) {
    return Z22("sha256").update(A).digest("hex")
}

function $k(A) {
    let Q = {
        operation: A.operation,
        tool: A.tool,
        filePathHash: e95(A.filePath)
    };
    if (A.content !== void 0 && A.content.length <= Q45) Q.contentHash = A45(A.content);
    if (A.type !== void 0) Q.type = A.type;
    BA("tengu_file_operation", Q)
}
var Q45 = 102400;
var r01 = L(() => {
    w0()
});
import * as Ot1 from "path";
import {
    extname as I22
} from "path";
async function Y22(A, Q, {
    maxSizeBytes: B = HLA,
    maxTokens: G = Tt1
}) {
    if (!o01.has(Q) && A.length > B) throw Error(Rt1(A.length, B));
    let Z = SG(A);
    if (!Z || Z <= G / 4) return;
    let I = await kB2(A);
    if (I && I > G) throw new e01(I, G)
}

function t01(A, Q, B) {
    return {
        type: "image",
        file: {
            base64: A.toString("base64"),
            type: `image/${Q}`,
            originalSize: B
        }
    }
}
async function W45(A, Q) {
    try {
        let G = OA().statSync(A).size,
            Z = OA().readFileBytesSync(A),
            I = I22(A).toLowerCase().slice(1),
            J = `image/${I==="jpg"?"jpeg":I}`,
            W = await UjB(Z, Q, J);
        return {
            type: "image",
            file: {
                base64: W.base64,
                type: W.mediaType,
                originalSize: G
            }
        }
    } catch (B) {
        e(B);
        let G = OA().readFileBytesSync(A);
        try {
            let Z = await Promise.resolve().then(() => GA(grA(), 1)),
                Y = await (Z.default || Z)(G).resize(400, 400, {
                    fit: "inside",
                    withoutEnlargement: !0
                }).jpeg({
                    quality: 20
                }).toBuffer();
            return t01(Y, "jpeg", OA().statSync(A).size)
        } catch (Z) {
            e(Z);
            let I = I22(A).toLowerCase().slice(1);
            return t01(G, I === "jpg" ? "jpeg" : I, OA().statSync(A).size)
        }
    }
}
async function X45(A, Q) {
    try {
        let G = OA().statSync(A).size;
        if (G === 0) throw Error(`Image file is empty: ${A}`);
        let Z = OA().readFileBytesSync(A),
            {
                buffer: I,
                mediaType: Y
            } = await XGA(Z, G, Q);
        return t01(I, Y, G)
    } catch (B) {
        e(B);
        let G = OA().statSync(A).size,
            Z = Q === "jpg" ? "jpeg" : Q;
        return t01(OA().readFileBytesSync(A), Z, G)
    }
}
async function Pt1(A, Q = Tt1, B = A.split(".").pop()?.toLowerCase() || "png") {
    let G = await X45(A, B);
    if (Math.ceil(G.file.base64.length * 0.125) > Q) return await W45(A, Q);
    return G
}
var B45, Tt1 = 25000,
    e01, o01, G45, Z45, I45, Y45, d8, J45 = `

<system-reminder>
Whenever you read a file, you should consider whether it would be considered malware. You CAN and SHOULD provide analysis of malware, what it is doing. But you MUST refuse to improve or augment the code. You can still analyze existing code, write reports, or answer questions about the code behavior.
</system-reminder>
`,
    Rt1 = (A, Q = HLA) => `File content (${LJ(A)}) exceeds maximum allowed size (${LJ(Q)}). Please use offset and limit parameters to read specific portions of the file, or use the GrepTool to search for specific content.`;
var Kq = L(() => {
    h2();
    R2();
    S0();
    Ie();
    M9();
    UoA();
    u1();
    xV();
    _Y();
    ib1();
    nQ();
    gM();
    o0();
    G22();
    r01();
    M9();
    B45 = [];
    e01 = class e01 extends Error {
        tokenCount;
        maxTokens;
        constructor(A, Q) {
            super(`File content (${A} tokens) exceeds maximum allowed tokens (${Q}). Please use offset and limit parameters to read specific portions of the file, or use the GrepTool to search for specific content.`);
            this.tokenCount = A;
            this.maxTokens = Q;
            this.name = "MaxFileReadTokenExceededError"
        }
    };
    o01 = new Set(["png", "jpg", "jpeg", "gif", "webp"]), G45 = new Set(["mp3", "wav", "flac", "ogg", "aac", "m4a", "wma", "aiff", "opus", "mp4", "avi", "mov", "wmv", "flv", "mkv", "webm", "m4v", "mpeg", "mpg", "zip", "rar", "tar", "gz", "bz2", "7z", "xz", "z", "tgz", "iso", "exe", "dll", "so", "dylib", "app", "msi", "deb", "rpm", "bin", "dat", "db", "sqlite", "sqlite3", "mdb", "idx", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "odp", "ttf", "otf", "woff", "woff2", "eot", "psd", "ai", "eps", "sketch", "fig", "xd", "blend", "obj", "3ds", "max", "class", "jar", "war", "pyc", "pyo", "rlib", "swf", "fla"]), Z45 = _.strictObject({
        file_path: _.string().describe("The absolute path to the file to read"),
        offset: _.number().optional().describe("The line number to start reading from. Only provide if the file is too large to read at once"),
        limit: _.number().optional().describe("The number of lines to read. Only provide if the file is too large to read at once.")
    }), I45 = _.enum(["image/jpeg", "image/png", "image/gif", "image/webp"]), Y45 = _.discriminatedUnion("type", [_.object({
        type: _.literal("text"),
        file: _.object({
            filePath: _.string().describe("The path to the file that was read"),
            content: _.string().describe("The content of the file"),
            numLines: _.number().describe("Number of lines in the returned content"),
            startLine: _.number().describe("The starting line number"),
            totalLines: _.number().describe("Total number of lines in the file")
        })
    }), _.object({
        type: _.literal("image"),
        file: _.object({
            base64: _.string().describe("Base64-encoded image data"),
            type: I45.describe("The MIME type of the image"),
            originalSize: _.number().describe("Original file size in bytes")
        })
    }), _.object({
        type: _.literal("notebook"),
        file: _.object({
            filePath: _.string().describe("The path to the notebook file"),
            cells: _.array(_.any()).describe("Array of notebook cells")
        })
    }), _.object({
        type: _.literal("pdf"),
        file: _.object({
            filePath: _.string().describe("The path to the PDF file"),
            base64: _.string().describe("Base64-encoded PDF data"),
            originalSize: _.number().describe("Original file size in bytes")
        })
    })]), d8 = {
        name: g5,
        strict: !0,
        input_examples: [{
            file_path: "/Users/username/project/src/index.ts"
        }, {
            file_path: "/Users/username/project/README.md",
            limit: 100,
            offset: 0
        }],
        async description() {
            return l7B
        },
        async prompt() {
            return i7B
        },
        inputSchema: Z45,
        outputSchema: Y45,
        userFacingName: Q22,
        getToolUseSummary: B22,
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        getPath({
            file_path: A
        }) {
            return A || H0()
        },
        async checkPermissions(A, Q) {
            let B = await Q.getAppState();
            return ul(d8, A, B.toolPermissionContext)
        },
        renderToolUseMessage: rB2,
        renderToolUseProgressMessage: oB2,
        renderToolResultMessage: tB2,
        renderToolUseRejectedMessage: eB2,
        renderToolUseErrorMessage: A22,
        async validateInput({
            file_path: A,
            offset: Q,
            limit: B
        }, G) {
            let Z = OA(),
                I = gl(A),
                Y = await G.getAppState();
            if (TD(I, Y.toolPermissionContext, "read", "deny") !== null) return {
                result: !1,
                message: "File is in a directory that is denied by your permission settings.",
                errorCode: 1
            };
            if (I.startsWith("\\\\") || I.startsWith("//")) return {
                result: !0
            };
            if (!Z.existsSync(I)) {
                let H = AQ1(I),
                    C = "File does not exist.",
                    E = H0(),
                    z = pQ();
                if (E !== z) C += ` Current working directory: ${E}`;
                if (H) C += ` Did you mean ${H}?`;
                return {
                    result: !1,
                    message: C,
                    errorCode: 2
                }
            }
            let X = Ot1.extname(I).toLowerCase();
            if (G45.has(X.slice(1)) && !(t3A() && DnA(X))) return {
                result: !1,
                message: `This tool cannot read binary files. The file appears to be a binary ${X} file. Please use appropriate tools for binary file analysis.`,
                errorCode: 4
            };
            let V = Z.statSync(I).size;
            if (V === 0) {
                if (o01.has(X.slice(1))) return {
                    result: !1,
                    message: "Empty image files cannot be processed.",
                    errorCode: 5
                }
            }
            let K = X === ".ipynb",
                D = t3A() && DnA(X);
            if (!o01.has(X.slice(1)) && !K && !D) {
                if (!QQ1(I) && !Q && !B) return {
                    result: !1,
                    message: Rt1(V),
                    meta: {
                        fileSize: V
                    },
                    errorCode: 6
                }
            }
            return {
                result: !0
            }
        },
        async call({
            file_path: A,
            offset: Q = 1,
            limit: B = void 0
        }, G) {
            let {
                readFileState: Z,
                fileReadingLimits: I
            } = G, Y = HLA, J = I?.maxTokens ?? Tt1, W = Ot1.extname(A).toLowerCase().slice(1), X = gl(A);
            if (W === "ipynb") {
                let C = iSB(X),
                    E = JSON.stringify(C);
                if (E.length > Y) throw Error(`Notebook content (${LJ(E.length)}) exceeds maximum allowed size (${LJ(Y)}). Use ${D9} with jq to read specific portions:
  cat "${A}" | jq '.cells[:20]' # First 20 cells
  cat "${A}" | jq '.cells[100:120]' # Cells 100-120
  cat "${A}" | jq '.cells | length' # Count total cells
  cat "${A}" | jq '.cells[] | select(.cell_type=="code") | .source' # All code sources`);
                await Y22(E, W, {
                    maxSizeBytes: Y,
                    maxTokens: J
                }), Z.set(X, {
                    content: E,
                    timestamp: RD(X),
                    offset: Q,
                    limit: B
                }), G.nestedMemoryAttachmentTriggers?.add(X);
                let z = {
                    type: "notebook",
                    file: {
                        filePath: A,
                        cells: C
                    }
                };
                return $k({
                    operation: "read",
                    tool: "FileReadTool",
                    filePath: X,
                    content: E
                }), {
                    data: z
                }
            }
            if (o01.has(W)) {
                let C = await Pt1(X, J, W);
                return Z.set(X, {
                    content: C.file.base64,
                    timestamp: RD(X),
                    offset: Q,
                    limit: B
                }), G.nestedMemoryAttachmentTriggers?.add(X), $k({
                    operation: "read",
                    tool: "FileReadTool",
                    filePath: X,
                    content: C.file.base64
                }), {
                    data: C
                }
            }
            if (t3A() && DnA(W)) {
                let C = await p7B(X);
                return $k({
                    operation: "read",
                    tool: "FileReadTool",
                    filePath: X,
                    content: C.file.base64
                }), {
                    data: C,
                    newMessages: [j0({
                        content: [{
                            type: "document",
                            source: {
                                type: "base64",
                                media_type: "application/pdf",
                                data: C.file.base64
                            }
                        }],
                        isMeta: !0
                    })]
                }
            }
            let F = Q === 0 ? 0 : Q - 1,
                {
                    content: V,
                    lineCount: K,
                    totalLines: D
                } = J22(X, F, B);
            if (V.length > Y) throw Error(Rt1(V.length, Y));
            await Y22(V, W, {
                maxSizeBytes: Y,
                maxTokens: J
            }), Z.set(X, {
                content: V,
                timestamp: RD(X),
                offset: Q,
                limit: B
            }), G.nestedMemoryAttachmentTriggers?.add(X);
            for (let C of B45) C(X, V);
            let H = {
                type: "text",
                file: {
                    filePath: A,
                    content: V,
                    numLines: K,
                    startLine: Q,
                    totalLines: D
                }
            };
            return $k({
                operation: "read",
                tool: "FileReadTool",
                filePath: X,
                content: V
            }), {
                data: H
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            switch (A.type) {
                case "image":
                    return {
                        tool_use_id: Q, type: "tool_result", content: [{
                            type: "image",
                            source: {
                                type: "base64",
                                data: A.file.base64,
                                media_type: A.file.type
                            }
                        }]
                    };
                case "notebook":
                    return nSB(A.file.cells, Q);
                case "pdf":
                    return {
                        tool_use_id: Q, type: "tool_result", content: `PDF file read: ${A.file.filePath} (${LJ(A.file.originalSize)})`
                    };
                case "text": {
                    let B;
                    if (A.file.content) B = ml(A.file) + J45;
                    else B = A.file.totalLines === 0 ? "<system-reminder>Warning: the file exists but the contents are empty.</system-reminder>" : `<system-reminder>Warning: the file exists but is shorter than the provided offset (${A.file.startLine}). The file has ${A.file.totalLines} lines.</system-reminder>`;
                    return {
                        tool_use_id: Q,
                        type: "tool_result",
                        content: B
                    }
                }
            }
        }
    }
});
import {
    randomUUID as F45
} from "node:crypto";

function jt1(A, Q, B, G) {
    let Z = K45(),
        I = {
            id: Z,
            command: A,
            description: B,
            status: "running",
            startTime: Date.now(),
            shellCommand: Q,
            completionStatusSentInAttachment: !1,
            stdout: "",
            stderr: "",
            unregisterCleanup: wG(Y),
            type: "shell"
        };
    G(Z, () => I);
    async function Y() {
        G(Z, (W) => {
            if (!W) return e(Error("Shell not found. This is a bug")), I;
            if (W.status !== "running") return W;
            return D45(W22(W))
        })
    }
    let J = Q.background(Z);
    if (!J) return G(Z, (W) => ({
        ...W ?? I,
        status: "failed",
        result: {
            code: 1,
            interrupted: !1
        }
    })), Z;
    return J.stdoutStream.on("data", (W) => {
        G(Z, (X) => {
            if (!X) return e(Error("Shell not found. This is a bug")), I;
            return {
                ...X,
                stdout: X.stdout + W.toString()
            }
        })
    }), J.stderrStream.on("data", (W) => {
        G(Z, (X) => {
            if (!X) return e(Error("Shell not found. This is a bug")), I;
            return {
                ...X,
                stderr: X.stderr + W.toString()
            }
        })
    }), Q.result.then((W) => {
        G(Z, (X) => {
            if (!X) return e(Error("Shell not found. This is a bug")), I;
            if (X.status === "killed") return X;
            return V45({
                ...X,
                status: W.code === 0 ? "completed" : "failed",
                result: {
                    code: W.code,
                    interrupted: W.interrupted
                }
            }, W)
        })
    }), Z
}

function V45(A, Q) {
    return {
        ...A,
        status: Q.code === 0 ? "completed" : "failed",
        result: {
            code: Q.code,
            interrupted: Q.interrupted
        }
    }
}

function K45() {
    return F45().replace(/-/g, "").substring(0, 6)
}

function W22(A) {
    try {
        return g(`BackgroundShell ${A.id} kill requested`), A.shellCommand?.kill(), {
            ...A,
            status: "killed"
        }
    } catch (Q) {
        return e(Q instanceof Error ? Q : Error(String(Q))), A
    }
}

function D45(A) {
    if (A.unregisterCleanup?.(), A.cleanupTimeoutId) clearTimeout(A.cleanupTimeoutId);
    return {
        ...A,
        unregisterCleanup: void 0,
        cleanupTimeoutId: void 0,
        shellCommand: null
    }
}

function BQ1(A) {
    return {
        shell: {
            ...A,
            stdout: "",
            stderr: ""
        },
        command: A.command,
        status: A.status,
        exitCode: A.result?.code ?? null,
        stdout: A.stdout.trimEnd(),
        stderr: A.stderr.trimEnd()
    }
}

function St1(A) {
    return !!A.stdout
}

function X22(A) {
    return A.map((Q) => {
        let B = St1(Q);
        return {
            id: Q.id,
            command: Q.command,
            hasNewOutput: B
        }
    })
}

function GQ1(A) {
    if (A.status !== "running") return A;
    let Q = W22(A);
    if (Q.cleanupTimeoutId) clearTimeout(Q.cleanupTimeoutId);
    return Q
}

function F22(A) {
    return A.filter((Q) => Q.status !== "running" && !Q.completionStatusSentInAttachment)
}
var gAA = L(() => {
    u1();
    D0();
    XH()
});

function Gh(A) {
    return new km({
        max: A
    })
}

function V22(A) {
    return Object.fromEntries(A.entries())
}

function dl(A) {
    return Array.from(A.keys())
}

function uAA(A) {
    let Q = Gh(A.max);
    return Q.load(A.dump()), Q
}

function K22(A, Q) {
    let B = uAA(A);
    for (let [G, Z] of Q.entries()) {
        let I = B.get(G);
        if (!I || Z.timestamp > I.timestamp) B.set(G, Z)
    }
    return B
}
var uM = L(() => {
    SvA()
});
var _t1 = 4,
    ZQ1 = 400000,
    wk = 50;

function C45(A, Q = !1) {
    let B = "",
        G = "",
        Z = !1,
        I = !1,
        Y = !1;
    for (let J = 0; J < A.length; J++) {
        let W = A[J];
        if (Y) {
            if (Y = !1, !Z) B += W;
            if (!Z && !I) G += W;
            continue
        }
        if (W === "\\") {
            if (Y = !0, !Z) B += W;
            if (!Z && !I) G += W;
            continue
        }
        if (W === "'" && !I) {
            Z = !Z;
            continue
        }
        if (W === '"' && !Z) {
            if (I = !I, !Q) continue
        }
        if (!Z) B += W;
        if (!Z && !I) G += W
    }
    return {
        withDoubleQuotes: B,
        fullyUnquoted: G
    }
}

function E45(A) {
    return A.replace(/\s+2\s*>&\s*1(?=\s|$)/g, "").replace(/[012]?\s*>\s*\/dev\/null/g, "").replace(/\s*<\s*\/dev\/null/g, "")
}

function z45(A, Q) {
    if (Q.length !== 1) throw Error("hasUnescapedChar only works with single characters");
    let B = 0;
    while (B < A.length) {
        if (A[B] === "\\" && B + 1 < A.length) {
            B += 2;
            continue
        }
        if (A[B] === Q) return !0;
        B++
    }
    return !1
}

function U45(A) {
    if (!A.originalCommand.trim()) return {
        behavior: "allow",
        updatedInput: {
            command: A.originalCommand
        },
        decisionReason: {
            type: "other",
            reason: "Empty command is safe"
        }
    };
    return {
        behavior: "passthrough",
        message: "Command is not empty"
    }
}

function $45(A) {
    let {
        originalCommand: Q
    } = A, B = Q.trim();
    if (/^\s*\t/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.INCOMPLETE_COMMANDS,
        subId: 1
    }), {
        behavior: "ask",
        message: "Command appears to be an incomplete fragment (starts with tab)"
    };
    if (B.startsWith("-")) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.INCOMPLETE_COMMANDS,
        subId: 2
    }), {
        behavior: "ask",
        message: "Command appears to be an incomplete fragment (starts with flags)"
    };
    if (/^\s*(&&|\|\||;|>>?|<)/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.INCOMPLETE_COMMANDS,
        subId: 3
    }), {
        behavior: "ask",
        message: "Command appears to be a continuation line (starts with operator)"
    };
    return {
        behavior: "passthrough",
        message: "Command appears complete"
    }
}

function w45(A) {
    if (!kt1.test(A)) return !1;
    let Q = /\$\(cat\s*<<-?\s*(?:'+([A-Za-z_]\w*)'+|\\([A-Za-z_]\w*))/g,
        B, G = [];
    while ((B = Q.exec(A)) !== null) {
        let I = B[1] || B[2];
        if (I) G.push({
            start: B.index,
            delimiter: I
        })
    }
    if (G.length === 0) return !1;
    for (let {
            start: I,
            delimiter: Y
        }
        of G) {
        let J = A.substring(I),
            W = Y.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (!new RegExp(`(?:
|^[^\\n]*
)${W}\\s*\\)`).test(J)) return !1;
        let F = new RegExp(`^\\$\\(cat\\s*<<-?\\s*(?:'+${W}'+|\\\\${W})[^\\n]*\\n(?:[\\s\\S]*?\\n)?${W}\\s*\\)`);
        if (!J.match(F)) return !1
    }
    let Z = A;
    for (let {
            delimiter: I
        }
        of G) {
        let Y = I.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            J = new RegExp(`\\$\\(cat\\s*<<-?\\s*(?:'+${Y}'+|\\\\${Y})[^\\n]*\\n(?:[\\s\\S]*?\\n)?${Y}\\s*\\)`);
        Z = Z.replace(J, "")
    }
    if (/\$\(/.test(Z)) return !1;
    if (/\${/.test(Z)) return !1;
    return !0
}
