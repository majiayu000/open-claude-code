/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.007Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 7/29
 * Lines: 158220 - 159718 (1499 lines)
 * Original file: cli.js
 */

            D.putBuffer(xiA("\x00\x00\x00\x00", Q)), D.putBuffer(xiA("\x00\x00\x00\x01", Q));
            var H = kX.aes.createEncryptionCipher(D.truncate(8), "CBC");
            H.start(kX.util.createBuffer().fillWithByte(0, 16)), H.update(X.copy()), H.finish();
            var C = H.output;
            C.truncate(16), F = kX.util.encode64(C.bytes(), 64)
        }
        W = Math.floor(F.length / 66) + 1, I += `\r
Private-Lines: ` + W + `\r
`, I += F;
        var E = xiA("putty-private-key-file-mac-key", Q),
            z = kX.util.createBuffer();
        d3A(z, G), d3A(z, Z), d3A(z, B), z.putInt32(Y.length()), z.putBuffer(Y), z.putInt32(X.length()), z.putBuffer(X);
        var w = kX.hmac.create();
        return w.start("sha1", E), w.update(z.bytes()), I += `\r
Private-MAC: ` + w.digest().toHex() + `\r
`, I
    };
    viA.publicKeyToOpenSSH = function(A, Q) {
        var B = "ssh-rsa";
        Q = Q || "";
        var G = kX.util.createBuffer();
        return d3A(G, B), U_(G, A.e), U_(G, A.n), B + " " + kX.util.encode64(G.bytes()) + " " + Q
    };
    viA.privateKeyToOpenSSH = function(A, Q) {
        if (!Q) return kX.pki.privateKeyToPem(A);
        return kX.pki.encryptRsaPrivateKey(A, Q, {
            legacy: !0,
            algorithm: "aes128"
        })
    };
    viA.getPublicKeyFingerprint = function(A, Q) {
        Q = Q || {};
        var B = Q.md || kX.md.md5.create(),
            G = "ssh-rsa",
            Z = kX.util.createBuffer();
        d3A(Z, G), U_(Z, A.e), U_(Z, A.n), B.start(), B.update(Z.getBytes());
        var I = B.digest();
        if (Q.encoding === "hex") {
            var Y = I.toHex();
            if (Q.delimiter) return Y.match(/.{2}/g).join(Q.delimiter);
            return Y
        } else if (Q.encoding === "binary") return I.getBytes();
        else if (Q.encoding) throw Error('Unknown encoding "' + Q.encoding + '".');
        return I
    };

function U_(A, Q) {
        var B = Q.toString(16);
        if (B[0] >= "8") B = "00" + B;
        var G = kX.util.hexToBytes(B);
        A.putInt32(G.length), A.putBytes(G)
    }

function d3A(A, Q) {
        A.putInt32(Q.length), A.putString(Q)
    }

function xiA() {
        var A = kX.md.sha1.create(),
            Q = arguments.length;
        for (var B = 0; B < Q; ++B) A.update(arguments[B]);
        return A.digest()
    }
});
var A6B = U((gT7, e8B) => {
    e8B.exports = n8();
    Rc();
    N8B();
    GT();
    ZiA();
    OzA();
    g8B();
    j3A();
    c8B();
    l8B();
    n8B();
    Cv1();
    CiA();
    io();
    Wv1();
    Uv1();
    r8B();
    wv1();
    Fv1();
    Av1();
    NiA();
    aL();
    Gv1();
    t8B();
    Rv1();
    P3()
});
import {
    execFile as _t8
} from "child_process";
import {
    promisify as yt8
} from "util";
var kt8, dT7;
var pv1 = L(() => {
    kt8 = GA(A6B(), 1), dT7 = yt8(_t8)
});
var lv1 = L(() => {
    pv1()
});
var Q6B, vt8, bt8, ft8, ht8, gt8, ut8, mt8, dt8, ct8, sT7, pt8, rT7;
var B6B = L(() => {
    h2();
    Q6B = Aw({
        command: EQ(),
        args: CJ(EQ()).optional(),
        env: LR(EQ(), EQ()).optional()
    }), vt8 = Aw({
        name: EQ(),
        email: EQ().email().optional(),
        url: EQ().url().optional()
    }), bt8 = Aw({
        type: EQ(),
        url: EQ().url()
    }), ft8 = Q6B.partial(), ht8 = Q6B.extend({
        platform_overrides: LR(EQ(), ft8).optional()
    }), gt8 = Aw({
        type: MR(["python", "node", "binary"]),
        entry_point: EQ(),
        mcp_config: ht8
    }), ut8 = Aw({
        claude_desktop: EQ().optional(),
        platforms: CJ(MR(["darwin", "win32", "linux"])).optional(),
        runtimes: Aw({
            python: EQ().optional(),
            node: EQ().optional()
        }).optional()
    }).passthrough(), mt8 = Aw({
        name: EQ(),
        description: EQ().optional()
    }), dt8 = Aw({
        name: EQ(),
        description: EQ().optional(),
        arguments: CJ(EQ()).optional(),
        text: EQ()
    }), ct8 = Aw({
        type: MR(["string", "number", "boolean", "directory", "file"]),
        title: EQ(),
        description: EQ(),
        required: UV().optional(),
        default: Br([EQ(), uN(), UV(), CJ(EQ())]).optional(),
        multiple: UV().optional(),
        sensitive: UV().optional(),
        min: uN().optional(),
        max: uN().optional()
    }), sT7 = LR(EQ(), Br([EQ(), uN(), UV(), CJ(EQ())])), pt8 = Aw({
        $schema: EQ().optional(),
        dxt_version: EQ().optional().describe("@deprecated Use manifest_version instead"),
        manifest_version: EQ().optional(),
        name: EQ(),
        display_name: EQ().optional(),
        version: EQ(),
        description: EQ(),
        long_description: EQ().optional(),
        author: vt8,
        repository: bt8.optional(),
        homepage: EQ().url().optional(),
        documentation: EQ().url().optional(),
        support: EQ().url().optional(),
        icon: EQ().optional(),
        screenshots: CJ(EQ()).optional(),
        server: gt8,
        tools: CJ(mt8).optional(),
        tools_generated: UV().optional(),
        prompts: CJ(dt8).optional(),
        prompts_generated: UV().optional(),
        keywords: CJ(EQ()).optional(),
        license: EQ().optional(),
        compatibility: ut8.optional(),
        user_config: LR(EQ(), ct8).optional()
    }).refine((A) => !!(A.dxt_version || A.manifest_version), {
        message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
    }), rT7 = Aw({
        status: MR(["signed", "unsigned", "self-signed"]),
        publisher: EQ().optional(),
        issuer: EQ().optional(),
        valid_from: EQ().optional(),
        valid_to: EQ().optional(),
        fingerprint: EQ().optional()
    })
});
var lt8, it8;
var iv1 = L(() => {
    lv1();
    XzA();
    B6B();
    lt8 = GA(g9B(), 1), it8 = GA(d9B(), 1)
});
var G6B = L(() => {
    qx1();
    iv1();
    XzA();
    Vx1()
});

function nv1(A, Q) {
    if (typeof A === "string") {
        let B = A;
        for (let [G, Z] of Object.entries(Q)) {
            let I = new RegExp(`\\$\\{${G}\\}`, "g");
            if (B.match(I))
                if (Array.isArray(Z)) console.warn(`Cannot replace ${G} with array value in string context: "${A}"`, {
                    key: G,
                    replacement: Z
                });
                else B = B.replace(I, Z)
        }
        return B
    } else if (Array.isArray(A)) {
        let B = [];
        for (let G of A)
            if (typeof G === "string" && G.match(/^\$\{user_config\.[^}]+\}$/)) {
                let Z = G.match(/^\$\{([^}]+)\}$/)?.[1];
                if (Z && Q[Z]) {
                    let I = Q[Z];
                    if (Array.isArray(I)) B.push(...I);
                    else B.push(I)
                } else B.push(G)
            } else B.push(nv1(G, Q));
        return B
    } else if (A && typeof A === "object") {
        let B = {};
        for (let [G, Z] of Object.entries(A)) B[G] = nv1(Z, Q);
        return B
    }
    return A
}

async function c3A(A) {
    let {
        manifest: Q,
        extensionPath: B,
        systemDirs: G,
        userConfig: Z,
        pathSeparator: I,
        logger: Y
    } = A, J = Q.server?.mcp_config;
    if (!J) return;
    let W = {
        ...J
    };
    if (J.platform_overrides) {
        if (process.platform in J.platform_overrides) {
            let V = J.platform_overrides[process.platform];
            W.command = V.command || W.command, W.args = V.args || W.args, W.env = V.env || W.env
        }
    }
    if (nt8({
            manifest: Q,
            userConfig: Z
        })) {
        Y?.warn(`Extension ${Q.name} has missing required configuration, skipping MCP config`);
        return
    }
    let X = {
            __dirname: B,
            pathSeparator: I,
            "/": I,
            ...G
        },
        F = {};
    if (Q.user_config) {
        for (let [V, K] of Object.entries(Q.user_config))
            if (K.default !== void 0) F[V] = K.default
    }
    if (Z) Object.assign(F, Z);
    for (let [V, K] of Object.entries(F)) {
        let D = `user_config.${V}`;
        if (Array.isArray(K)) X[D] = K.map(String);
        else if (typeof K === "boolean") X[D] = K ? "true" : "false";
        else X[D] = String(K)
    }
    return W = nv1(W, X), W
}

function Z6B(A) {
    return A === void 0 || A === null || A === ""
}

function nt8({
    manifest: A,
    userConfig: Q
}) {
    if (!A.user_config) return !1;
    let B = Q || {};
    for (let [G, Z] of Object.entries(A.user_config))
        if (Z.required) {
            let I = B[G];
            if (Z6B(I) || Array.isArray(I) && (I.length === 0 || I.some(Z6B))) return !0
        } return !1
}
var I6B = () => {};
var vzA = L(() => {
    Vx1();
    G6B();
    lv1();
    qx1();
    pv1();
    iv1();
    XzA();
    I6B()
});

function Y6B(A) {
    let Q = ylA.safeParse(A);
    if (!Q.success) {
        let B = Q.error.flatten(),
            G = [...Object.entries(B.fieldErrors).map(([Z, I]) => `${Z}: ${I?.join(", ")}`), ...B.formErrors || []].filter(Boolean).join("; ");
        throw Error(`Invalid manifest: ${G}`)
    }
    return Q.data
}

function at8(A) {
    let Q;
    try {
        Q = JSON.parse(A)
    } catch (B) {
        throw Error(`Invalid JSON in manifest.json: ${B instanceof Error?B.message:String(B)}`)
    }
    return Y6B(Q)
}

function biA(A) {
    let Q = new TextDecoder().decode(A);
    return at8(Q)
}
var av1 = L(() => {
    vzA()
});
import * as fiA from "path";

function st8(A) {
    if (M9A(A)) return !1;
    let Q = fiA.normalize(A);
    if (fiA.isAbsolute(Q)) return !1;
    return !0
}

function rt8(A, Q) {
    Q.fileCount++;
    let B;
    if (Q.fileCount > vc.MAX_FILE_COUNT) B = `Archive contains too many files: ${Q.fileCount} (max: ${vc.MAX_FILE_COUNT})`;
    if (!st8(A.name)) B = `Unsafe file path detected: "${A.name}". Path traversal or absolute paths are not allowed.`;
    let G = A.originalSize || 0;
    if (G > vc.MAX_FILE_SIZE) B = `File "${A.name}" is too large: ${Math.round(G/1024/1024)}MB (max: ${Math.round(vc.MAX_FILE_SIZE/1024/1024)}MB)`;
    if (Q.totalUncompressedSize += G, Q.totalUncompressedSize > vc.MAX_TOTAL_SIZE) B = `Archive total size is too large: ${Math.round(Q.totalUncompressedSize/1024/1024)}MB (max: ${Math.round(vc.MAX_TOTAL_SIZE/1024/1024)}MB)`;
    let Z = Q.totalUncompressedSize / Q.compressedSize;
    if (Z > vc.MAX_COMPRESSION_RATIO) B = `Suspicious compression ratio detected: ${Z.toFixed(1)}:1 (max: ${vc.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
    return B ? {
        isValid: !1,
        error: B
    } : {
        isValid: !0
    }
}

async function sv1(A) {
    let Q = OA();
    if (!Q.existsSync(A)) throw Error(`Zip file does not exist: ${A}`);
    try {
        let B = Q.readFileBytesSync(A),
            G = B.length;
        return await new Promise((I, Y) => {
            let J = {
                    fileCount: 0,
                    totalUncompressedSize: 0,
                    compressedSize: G,
                    errors: []
                },
                W = DBB(new Uint8Array(B), {
                    filter: (X) => {
                        let F = rt8(X, J);
                        if (!F.isValid) return Y(Error(F.error)), W(), !1;
                        return !0
                    }
                }, (X, F) => {
                    if (X) Y(Error(`Failed to unzip file: ${X.message||String(X)}`));
                    else g(`Zip extraction completed: ${J.fileCount} files, ${Math.round(J.totalUncompressedSize/1024)}KB uncompressed`), I(F)
                })
        })
    } catch (B) {
        let G = B instanceof Error ? B.message : String(B);
        throw Error(`Failed to read or unzip file: ${G}`)
    }
}
var vc;
var rv1 = L(() => {
    HBB();
    D0();
    o0();
    jI();
    vc = {
        MAX_FILE_SIZE: 536870912,
        MAX_TOTAL_SIZE: 1073741824,
        MAX_FILE_COUNT: 1e5,
        MAX_COMPRESSION_RATIO: 50,
        MIN_COMPRESSION_RATIO: 0.5
    }
});
import * as J6B from "os";
import * as Qt from "path";

function bc() {
    let A = uQ(),
        Q = J6B.homedir(),
        B = {
            HOME: Q,
            DESKTOP: Qt.join(Q, "Desktop"),
            DOCUMENTS: Qt.join(Q, "Documents"),
            DOWNLOADS: Qt.join(Q, "Downloads")
        };
    switch (A) {
        case "windows": {
            let G = process.env.USERPROFILE || Q;
            return {
                HOME: Q,
                DESKTOP: Qt.join(G, "Desktop"),
                DOCUMENTS: Qt.join(G, "Documents"),
                DOWNLOADS: Qt.join(G, "Downloads")
            }
        }
        case "linux":
        case "wsl":
            return {
                HOME: Q, DESKTOP: process.env.XDG_DESKTOP_DIR || B.DESKTOP, DOCUMENTS: process.env.XDG_DOCUMENTS_DIR || B.DOCUMENTS, DOWNLOADS: process.env.XDG_DOWNLOAD_DIR || B.DOWNLOADS
            };
        case "macos":
        default: {
            if (A === "unknown") g("Unknown platform detected, using default paths");
            return B
        }
    }
}
var bzA = L(() => {
    s5();
    D0()
});
import {
    createHash as tv1
} from "crypto";
import {
    join as fc,
    dirname as ot8
} from "path";
import {
    writeFileSync as K6B
} from "fs";

function QM(A) {
    return A.endsWith(".mcpb") || A.endsWith(".dxt")
}

function D6B(A) {
    return A.startsWith("http://") || A.startsWith("https://")
}

function tt8(A) {
    return tv1("sha256").update(A).digest("hex").substring(0, 16)
}

function H6B(A) {
    return fc(A, ".mcpb-cache")
}

function C6B(A, Q) {
    let B = tv1("md5").update(Q).digest("hex").substring(0, 8);
    return fc(A, `${B}.metadata.json`)
}

function W6B(A, Q) {
    try {
        let G = c0().pluginConfigs?.[A]?.mcpServers?.[Q];
        if (!G) return null;
        return g(`Loaded user config for ${A}/${Q} from settings`), G
    } catch (B) {
        let G = B instanceof Error ? B : Error(String(B));
        return e(G), g(`Failed to load user config for ${A}/${Q}: ${B}`, {
            level: "error"
        }), null
    }
}

function X6B(A, Q, B) {
    try {
        let G = c0();
        if (!G.pluginConfigs) G.pluginConfigs = {};
        if (!G.pluginConfigs[A]) G.pluginConfigs[A] = {};
        if (!G.pluginConfigs[A].mcpServers) G.pluginConfigs[A].mcpServers = {};
        G.pluginConfigs[A].mcpServers[Q] = B;
        let Z = cB("userSettings", G);
        if (Z.error) throw Z.error;
        g(`Saved user config for ${A}/${Q} to user settings`)
    } catch (G) {
        let Z = G instanceof Error ? G : Error(String(G));
        throw e(Z), Error(`Failed to save user configuration for ${A}/${Q}: ${Z.message}`)
    }
}

function F6B(A, Q) {
    let B = [];
    for (let [G, Z] of Object.entries(Q)) {
        let I = A[G];
        if (Z.required && (I === void 0 || I === "")) {
            B.push(`${Z.title||G} is required but not provided`);
            continue
        }
        if (I === void 0 || I === "") continue;
        if (Z.type === "string") {
            if (Array.isArray(I)) {
                if (!Z.multiple) B.push(`${Z.title||G} must be a string, not an array`);
                else if (!I.every((Y) => typeof Y === "string")) B.push(`${Z.title||G} must be an array of strings`)
            } else if (typeof I !== "string") B.push(`${Z.title||G} must be a string`)
        } else if (Z.type === "number" && typeof I !== "number") B.push(`${Z.title||G} must be a number`);
        else if (Z.type === "boolean" && typeof I !== "boolean") B.push(`${Z.title||G} must be a boolean`);
        else if ((Z.type === "file" || Z.type === "directory") && typeof I !== "string") B.push(`${Z.title||G} must be a path string`);
        if (Z.type === "number" && typeof I === "number") {
            if (Z.min !== void 0 && I < Z.min) B.push(`${Z.title||G} must be at least ${Z.min}`);
            if (Z.max !== void 0 && I > Z.max) B.push(`${Z.title||G} must be at most ${Z.max}`)
        }
    }
    return {
        valid: B.length === 0,
        errors: B
    }
}

async function V6B(A, Q) {
    let B = await c3A({
        manifest: A,
        extensionPath: Q,
        systemDirs: bc(),
        userConfig: {},
        pathSeparator: "/"
    });
    if (!B) {
        let G = Error(`Failed to generate MCP server configuration from manifest "${A.name}"`);
        throw e(G), G
    }
    return B
}

async function E6B(A, Q) {
    let B = OA(),
        G = C6B(A, Q);
    if (!B.existsSync(G)) return null;
    try {
        let Z = B.readFileSync(G, {
            encoding: "utf-8"
        });
        return JSON.parse(Z)
    } catch (Z) {
        let I = Z instanceof Error ? Z : Error(String(Z));
        return e(I), g(`Failed to load MCPB cache metadata: ${Z}`, {
            level: "error"
        }), null
    }
}

async function ov1(A, Q, B) {
    let G = OA(),
        Z = C6B(A, Q);
    G.mkdirSync(A), G.writeFileSync(Z, JSON.stringify(B, null, 2), {
        encoding: "utf-8",
        flush: !1
    })
}

async function et8(A, Q, B) {
    if (g(`Downloading MCPB from ${A}`), B) B(`Downloading ${A}...`);
    try {
        let G = await GQ.get(A, {
                timeout: 120000,
                responseType: "arraybuffer",
                maxRedirects: 5,
                onDownloadProgress: (I) => {
                    if (I.total && B) {
                        let Y = Math.round(I.loaded / I.total * 100);
                        B(`Downloading... ${Y}%`)
                    }
                }
            }),
            Z = new Uint8Array(G.data);
        if (K6B(Q, Buffer.from(Z)), g(`Downloaded ${Z.length} bytes to ${Q}`), B) B("Download complete");
        return Z
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G),
            I = Error(`Failed to download MCPB file from ${A}: ${Z}`);
        throw e(I), I
    }
}

async function Ae8(A, Q, B) {
    let G = OA();
    if (B) B("Extracting files...");
    G.mkdirSync(Q);
    let Z = 0,
        I = Object.keys(A).length;
    for (let [Y, J] of Object.entries(A)) {
        let W = fc(Q, Y),
            X = ot8(W);
        if (X !== Q && !G.existsSync(X)) G.mkdirSync(X);
        if (Y.endsWith(".json") || Y.endsWith(".js") || Y.endsWith(".ts") || Y.endsWith(".txt") || Y.endsWith(".md") || Y.endsWith(".yml") || Y.endsWith(".yaml")) {
            let V = new TextDecoder().decode(J);
            G.writeFileSync(W, V, {
                encoding: "utf-8",
                flush: !1
            })
        } else K6B(W, Buffer.from(J));
        if (Z++, B && Z % 10 === 0) B(`Extracted ${Z}/${I} files`)
    }
    if (g(`Extracted ${Z} files to ${Q}`), B) B(`Extraction complete (${Z} files)`)
}

async function Qe8(A, Q) {
    let B = OA(),
        G = H6B(Q),
        Z = await E6B(G, A);
    if (!Z) return !0;
    if (!B.existsSync(Z.extractedPath)) return g(`MCPB extraction path missing: ${Z.extractedPath}`), !0;
    if (!D6B(A)) {
        let I = fc(Q, A);
        if (!B.existsSync(I)) return g(`MCPB source file missing: ${I}`), !0;
        let Y = B.statSync(I),
            J = new Date(Z.cachedAt).getTime(),
            W = Y.mtimeMs;
        if (W > J) return g(`MCPB file modified: ${new Date(W)} > ${new Date(J)}`), !0
    }
    return !1
}

async function fzA(A, Q, B, G, Z, I) {
    let Y = OA(),
        J = H6B(Q);
    Y.mkdirSync(J), g(`Loading MCPB from source: ${A}`);
    let W = await E6B(J, A);
    if (W && !await Qe8(A, Q)) {
        g(`Using cached MCPB from ${W.extractedPath} (hash: ${W.contentHash})`);
        let w = fc(W.extractedPath, "manifest.json");
        if (!Y.existsSync(w)) {
            let y = Error(`Cached manifest not found: ${w}`);
            throw e(y), y
        }
        let N = Y.readFileSync(w, {
                encoding: "utf-8"
            }),
            q = new TextEncoder().encode(N),
            R = biA(q);
        if (R.user_config && Object.keys(R.user_config).length > 0) {
            let y = R.name,
                v = W6B(B, y),
                x = Z || v || {},
                p = F6B(x, R.user_config);
            if (I || !p.valid) return {
                status: "needs-config",
                manifest: R,
                extractedPath: W.extractedPath,
                contentHash: W.contentHash,
                configSchema: R.user_config,
                existingConfig: v || {},
                validationErrors: p.valid ? [] : p.errors
            };
            if (Z) X6B(B, y, Z);
            let u = await c3A({
                manifest: R,
                extensionPath: W.extractedPath,
                systemDirs: bc(),
                userConfig: x,
                pathSeparator: "/"
            });
            if (!u) {
                let o = Error(`Failed to generate MCP server configuration from manifest "${R.name}"`);
                throw e(o), o
            }
            return {
                manifest: R,
                mcpConfig: u,
                extractedPath: W.extractedPath,
                contentHash: W.contentHash
            }
        }
        let P = await V6B(R, W.extractedPath);
        return {
            manifest: R,
            mcpConfig: P,
            extractedPath: W.extractedPath,
            contentHash: W.contentHash
        }
    }
    let X, F;
    if (D6B(A)) {
        let w = tv1("md5").update(A).digest("hex").substring(0, 8);
        F = fc(J, `${w}.mcpb`), X = await et8(A, F, G)
    } else {
        let w = fc(Q, A);
        if (!Y.existsSync(w)) {
            let N = Error(`MCPB file not found: ${w}`);
            throw e(N), N
        }
        if (G) G(`Loading ${A}...`);
        X = Y.readFileBytesSync(w), F = w
    }
    let V = tt8(X);
    if (g(`MCPB content hash: ${V}`), G) G("Extracting MCPB archive...");
    let K = await sv1(F),
        D = K["manifest.json"];
    if (!D) {
        let w = Error("No manifest.json found in MCPB file");
        throw e(w), w
    }
    let H = biA(D);
    if (g(`MCPB manifest: ${H.name} v${H.version} by ${H.author.name}`), !H.server) {
        let w = Error(`MCPB manifest for "${H.name}" does not define a server configuration`);
        throw e(w), w
    }
    let C = fc(J, V);
    if (await Ae8(K, C, G), H.user_config && Object.keys(H.user_config).length > 0) {
        let w = H.name,
            N = W6B(B, w),
            q = Z || N || {},
            R = F6B(q, H.user_config);
        if (!R.valid) {
            let v = {
                source: A,
                contentHash: V,
                extractedPath: C,
                cachedAt: new Date().toISOString(),
                lastChecked: new Date().toISOString()
            };
            return await ov1(J, A, v), {
                status: "needs-config",
                manifest: H,
                extractedPath: C,
                contentHash: V,
                configSchema: H.user_config,
                existingConfig: N || {},
                validationErrors: R.errors
            }
        }
        if (Z) X6B(B, w, Z);
        if (G) G("Generating MCP server configuration...");
        let P = await c3A({
            manifest: H,
            extensionPath: C,
            systemDirs: bc(),
            userConfig: q,
            pathSeparator: "/"
        });
        if (!P) {
            let v = Error(`Failed to generate MCP server configuration from manifest "${H.name}"`);
            throw e(v), v
        }
        let y = {
            source: A,
            contentHash: V,
            extractedPath: C,
            cachedAt: new Date().toISOString(),
            lastChecked: new Date().toISOString()
        };
        return await ov1(J, A, y), {
            manifest: H,
            mcpConfig: P,
            extractedPath: C,
            contentHash: V
        }
    }
    if (G) G("Generating MCP server configuration...");
    let E = await V6B(H, C),
        z = {
            source: A,
            contentHash: V,
            extractedPath: C,
            cachedAt: new Date().toISOString(),
            lastChecked: new Date().toISOString()
        };
    return await ov1(J, A, z), g(`Successfully loaded MCPB: ${H.name} (extracted to ${C})`), {
        manifest: H,
        mcpConfig: E,
        extractedPath: C,
        contentHash: V
    }
}
var ev1 = L(() => {
    w3();
    vzA();
    av1();
    rv1();
    o0();
    D0();
    u1();
    bzA();
    RB()
});
import {
    join as Be8
} from "path";

async function z6B(A, Q, B) {
    try {
        g(`Loading MCP servers from MCPB: ${Q}`);
        let G = A.repository,
            Z = await fzA(Q, A.path, G, (J) => {
                g(`MCPB [${A.name}]: ${J}`)
            });
        if ("status" in Z && Z.status === "needs-config") return g(`MCPB ${Q} requires user configuration. ` + `User can configure via: /plugin → Manage plugins → ${A.name} → Configure`), null;
        let I = Z,
            Y = I.manifest.name;
        return g(`Loaded MCP server "${Y}" from MCPB (extracted to ${I.extractedPath})`), {
            [Y]: I.mcpConfig
        }
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G);
        g(`Failed to load MCPB ${Q}: ${Z}`, {
            level: "error"
        });
        let I = `${A.name}@${A.repository}`;
        if (Q.startsWith("http") && (Z.includes("download") || Z.includes("network"))) B.push({
            type: "mcpb-download-failed",
            source: I,
            plugin: A.name,
            url: Q,
            reason: Z
        });
        else if (Z.includes("manifest") || Z.includes("user configuration")) B.push({
            type: "mcpb-invalid-manifest",
            source: I,
            plugin: A.name,
            mcpbPath: Q,
            validationError: Z
        });
        else B.push({
            type: "mcpb-extract-failed",
            source: I,
            plugin: A.name,
            mcpbPath: Q,
            reason: Z
        });
        return null
    }
}

async function Ge8(A, Q = []) {
    let B = {},
        G = Ab1(A.path, ".mcp.json");
    if (G) B = {
        ...B,
        ...G
    };
    if (A.manifest.mcpServers) {
        let Z = A.manifest.mcpServers;
        if (typeof Z === "string")
            if (QM(Z)) {
                let I = await z6B(A, Z, Q);
                if (I) B = {
                    ...B,
                    ...I
                }
            } else {
                let I = Ab1(A.path, Z);
                if (I) B = {
                    ...B,
                    ...I
                }
            }
        else if (Array.isArray(Z))
            for (let I of Z)
                if (typeof I === "string")
                    if (QM(I)) {
                        let Y = await z6B(A, I, Q);
                        if (Y) B = {
                            ...B,
                            ...Y
                        }
                    } else {
                        let Y = Ab1(A.path, I);
                        if (Y) B = {
                            ...B,
                            ...Y
                        }
                    }
        else B = {
            ...B,
            ...I
        };
        else B = {
            ...B,
            ...Z
        }
    }
    return Object.keys(B).length > 0 ? B : void 0
}

function Ab1(A, Q) {
    let B = OA(),
        G = Be8(A, Q);
    if (!B.existsSync(G)) return null;
    try {
        let Z = B.readFileSync(G, {
                encoding: "utf-8"
            }),
            I = JSON.parse(Z),
            Y = I.mcpServers || I,
            J = {};
        for (let [W, X] of Object.entries(Y)) {
            let F = Tm.safeParse(X);
            if (F.success) J[W] = F.data;
            else g(`Invalid MCP server config for ${W} in ${G}: ${F.error.message}`, {
                level: "error"
            })
        }
        return J
    } catch (Z) {
        return g(`Failed to load MCP servers from ${G}: ${Z}`, {
            level: "error"
        }), null
    }
}

function Ze8(A, Q) {
    let B = {};
    for (let [G, Z] of Object.entries(A)) {
        let I = `plugin:${Q}:${G}`;
        B[I] = {
            ...Z,
            scope: "dynamic"
        }
    }
    return B
}

function Qb1(A, Q) {
    return A.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, Q)
}

function Ie8(A, Q) {
    return A.replace(/\$\{user_config\.([^}]+)\}/g, (B, G) => {
        let Z = Q[G];
        if (Z === void 0) throw Error(`Missing required user configuration value: ${G}. This should have been validated before variable substitution.`);
        return String(Z)
    })
}

function Ye8(A, Q, B, G) {
    let Z = [],
        I = (Y) => {
            let J = Qb1(Y, Q);
            if (B) J = Ie8(J, B);
            let {
                expanded: W,
                missingVars: X
            } = eEA(J);
            return Z.push(...X), W
        };
    if (A.type === "stdio" || !A.type) {
        let Y = {
            ...A
        };
        if (Y.command) Y.command = I(Y.command);
        if (Y.args) Y.args = Y.args.map((W) => I(W));
        let J = {
            CLAUDE_PLUGIN_ROOT: Q,
            ...Y.env || {}
        };
        for (let [W, X] of Object.entries(J))
            if (W !== "CLAUDE_PLUGIN_ROOT") J[W] = I(X);
        if (Y.env = J, G && Z.length > 0) {
            let W = [...new Set(Z)];
            g(`Missing environment variables in plugin MCP config: ${W.join(", ")}`, {
                level: "warn"
            })
        }
        return Y
    }
    if (G && Z.length > 0) {
        let Y = [...new Set(Z)];
        g(`Missing environment variables in plugin MCP config: ${Y.join(", ")}`, {
            level: "warn"
        })
    }
    return A
}

async function U6B(A, Q = []) {
    if (!A.enabled) return;
    let B = A.mcpServers || await Ge8(A, Q);
    if (!B) return;
    let G = {};
    for (let [Z, I] of Object.entries(B)) G[Z] = Ye8(I, A.path, void 0, Q);
    return Ze8(G, A.name)
}
var Bb1 = L(() => {
    o0();
    D0();
    s9A();
    ev1()
});

function BM(A) {
    switch (A.type) {
        case "generic-error":
            return A.error;
        case "path-not-found":
            return `Path not found: ${A.path} (${A.component})`;
        case "git-auth-failed":
            return `Git authentication failed (${A.authType}): ${A.gitUrl}`;
        case "git-timeout":
            return `Git ${A.operation} timeout: ${A.gitUrl}`;
        case "network-error":
            return `Network error: ${A.url}${A.details?` - ${A.details}`:""}`;
        case "manifest-parse-error":
            return `Manifest parse error: ${A.parseError}`;
        case "manifest-validation-error":
            return `Manifest validation failed: ${A.validationErrors.join(", ")}`;
        case "plugin-not-found":
            return `Plugin ${A.pluginId} not found in marketplace ${A.marketplace}`;
        case "marketplace-not-found":
            return `Marketplace ${A.marketplace} not found`;
        case "marketplace-load-failed":
            return `Marketplace ${A.marketplace} failed to load: ${A.reason}`;
        case "repository-scan-failed":
            return `Repository scan failed: ${A.reason}`;
        case "mcp-config-invalid":
            return `MCP server ${A.serverName} invalid: ${A.validationError}`;
        case "hook-load-failed":
            return `Hook load failed: ${A.reason}`;
        case "component-load-failed":
            return `${A.component} load failed from ${A.path}: ${A.reason}`;
        case "mcpb-download-failed":
            return `Failed to download MCPB from ${A.url}: ${A.reason}`;
        case "mcpb-extract-failed":
            return `Failed to extract MCPB ${A.mcpbPath}: ${A.reason}`;
        case "mcpb-invalid-manifest":
            return `MCPB manifest invalid at ${A.mcpbPath}: ${A.validationError}`;
        case "lsp-config-invalid":
            return `Plugin "${A.plugin}" has invalid LSP server config for "${A.serverName}": ${A.validationError}`;
        case "lsp-server-start-failed":
            return `Plugin "${A.plugin}" failed to start LSP server "${A.serverName}": ${A.reason}`;
        case "lsp-server-crashed":
            if (A.signal) return `Plugin "${A.plugin}" LSP server "${A.serverName}" crashed with signal ${A.signal}`;
            return `Plugin "${A.plugin}" LSP server "${A.serverName}" crashed with exit code ${A.exitCode??"unknown"}`;
        case "lsp-request-timeout":
            return `Plugin "${A.plugin}" LSP server "${A.serverName}" timed out on ${A.method} request after ${A.timeoutMs}ms`;
        case "lsp-request-failed":
            return `Plugin "${A.plugin}" LSP server "${A.serverName}" ${A.method} request failed: ${A.error}`;
        case "marketplace-blocked-by-policy":
            return `Marketplace '${A.marketplace}' is not allowed by enterprise policy`
    }
}
import {
    join as giA,
    dirname as Je8,
    parse as We8
} from "path";

function uiA() {
    return giA(hw(), "managed-mcp.json")
}

function hzA(A, Q) {
    if (!A) return {};
    let B = {};
    for (let [G, Z] of Object.entries(A)) B[G] = {
        ...Z,
        scope: Q
    };
    return B
}

function $6B(A) {
    let Q = giA(H0(), ".mcp.json");
    J_(Q, JSON.stringify(A, null, 2), {
        encoding: "utf8"
    })
}

function w6B(A) {
    if (A.type !== void 0 && A.type !== "stdio") return null;
    let Q = A;
    return [Q.command, ...Q.args]
}

function q6B(A, Q) {
    if (A.length !== Q.length) return !1;
    return A.every((B, G) => B === Q[G])
}

function N6B(A, Q) {
    let B = c0();
    if (!B.deniedMcpServers) return !1;
    for (let G of B.deniedMcpServers)
        if (gzA(G) && G.serverName === A) return !0;
    if (Q) {
        let G = w6B(Q);
        if (G) {
            for (let Z of B.deniedMcpServers)
                if (hiA(Z) && q6B(Z.serverCommand, G)) return !0
        }
    }
    return !1
}

function Gb1(A, Q) {
    if (N6B(A, Q)) return !1;
    let B = c0();
    if (!B.allowedMcpServers) return !0;
    if (B.allowedMcpServers.length === 0) return !1;
    let G = B.allowedMcpServers.some(hiA);
    if (Q) {
        let Z = w6B(Q);
        if (Z)
            if (G) {
                for (let I of B.allowedMcpServers)
                    if (hiA(I) && q6B(I.serverCommand, Z)) return !0;
                return !1
            } else {
                for (let I of B.allowedMcpServers)
                    if (gzA(I) && I.serverName === A) return !0;
                return !1
            }
        else {
            for (let I of B.allowedMcpServers)
                if (gzA(I) && I.serverName === A) return !0;
            return !1
        }
    }
    for (let Z of B.allowedMcpServers)
        if (gzA(Z) && Z.serverName === A) return !0;
    return !1
}

function Xe8(A) {
    let Q = [];

function B(Z) {
        let {
            expanded: I,
            missingVars: Y
        } = eEA(Z);
        return Q.push(...Y), I
    }
    let G;
    switch (A.type) {
        case void 0:
        case "stdio": {
            let Z = A;
            G = {
                ...Z,
                command: B(Z.command),
                args: Z.args.map(B),
                env: Z.env ? vo(Z.env, B) : void 0
            };
            break
        }
        case "sse":
        case "http":
        case "ws": {
            let Z = A;
            G = {
                ...Z,
                url: B(Z.url),
                headers: Z.headers ? vo(Z.headers, B) : void 0
            };
            break
        }
        case "sse-ide":
        case "ws-ide":
            G = A;
            break;
        case "sdk":
            G = A;
            break
    }
    return {
        expanded: G,
        missingVars: [...new Set(Q)]
    }
}

function Bt(A, Q, B) {
    if (A.match(/[^a-zA-Z0-9_-]/)) throw Error(`Invalid name ${A}. Names can only contain letters, numbers, hyphens, and underscores.`);
    let G = Tm.safeParse(Q);
    if (!G.success) {
        let I = G.error.errors.map((Y) => `${Y.path.join(".")}: ${Y.message}`).join(", ");
        throw Error(`Invalid configuration: ${I}`)
    }
    let Z = G.data;
    if (N6B(A, Z)) throw Error(`Cannot add MCP server "${A}": server is explicitly blocked by enterprise policy`);
    if (!Gb1(A, Z)) throw Error(`Cannot add MCP server "${A}": not allowed by enterprise policy`);
    switch (B) {
        case "project": {
            let {
                servers: I
            } = Zb1();
            if (I[A]) throw Error(`MCP server ${A} already exists in .mcp.json`);
            break
        }
        case "user": {
            if (L1().mcpServers?.[A]) throw Error(`MCP server ${A} already exists in user config`);
            break
        }
        case "local": {
            if (M5().mcpServers?.[A]) throw Error(`MCP server ${A} already exists in local config`);
            break
        }
        case "dynamic":
            throw Error("Cannot add MCP server to scope: dynamic");
        case "enterprise":
            throw Error("Cannot add MCP server to scope: enterprise")
    }
    switch (B) {
        case "project": {
            let {
                servers: I
            } = Zb1(), Y = {};
            for (let [W, X] of Object.entries(I)) {
                let {
                    scope: F,
                    ...V
                } = X;
                Y[W] = V
            }
            Y[A] = Z;
            let J = {
                mcpServers: Y
            };
            try {
                $6B(J)
            } catch (W) {
                throw Error(`Failed to write to mcp.json: ${W}`)
            }
            break
        }
        case "user": {
            let I = L1();
            if (!I.mcpServers) I.mcpServers = {};
            I.mcpServers[A] = Z, d0(I);
            break
        }
        case "local": {
            let I = M5();
            if (!I.mcpServers) I.mcpServers = {};
            I.mcpServers[A] = Z, aI(I);
            break
        }
        default:
            throw Error(`Cannot add MCP server to scope: ${B}`)
    }
}

function Ib1(A, Q) {
    switch (Q) {
        case "project": {
            let {
                servers: B
            } = Zb1();
            if (!B[A]) throw Error(`No MCP server found with name: ${A} in .mcp.json`);
            let G = {};
            for (let [I, Y] of Object.entries(B))
                if (I !== A) {
                    let {
                        scope: J,
                        ...W
                    } = Y;
                    G[I] = W
                } let Z = {
                mcpServers: G
            };
            try {
                $6B(Z)
            } catch (I) {
                throw Error(`Failed to remove from .mcp.json: ${I}`)
            }
            break
        }
        case "user": {
            let B = L1();
            if (!B.mcpServers?.[A]) throw Error(`No user-scoped MCP server found with name: ${A}`);
            delete B.mcpServers[A], d0(B);
            break
        }
        case "local": {
            let B = M5();
            if (!B.mcpServers?.[A]) throw Error(`No project-local MCP server found with name: ${A}`);
            delete B.mcpServers[A], aI(B);
            break
        }
        default:
            throw Error(`Cannot remove MCP server from scope: ${Q}`)
    }
}

function Zb1() {
    if (!DH("projectSettings")) return {
        servers: {},
        errors: []
    };
    let A = OA(),
        Q = giA(H0(), ".mcp.json");
    if (!A.existsSync(Q)) return {
        servers: {},
        errors: []
    };
    let {
        config: B,
        errors: G
    } = p3A({
        filePath: Q,
        expandVars: !0,
        scope: "project"
    });
    return {
        servers: B?.mcpServers ? hzA(B.mcpServers, "project") : {},
        errors: G || []
    }
}

function yX(A) {
    let Q = {
        project: "projectSettings",
        user: "userSettings",
        local: "localSettings"
    };
    if (A in Q && !DH(Q[A])) return {
        servers: {},
        errors: []
    };
    switch (A) {
        case "project": {
            let B = OA(),
                G = {},
                Z = [],
                I = [],
                Y = H0();
            while (Y !== We8(Y).root) I.push(Y), Y = Je8(Y);
            for (let J of I.reverse()) {
                let W = giA(J, ".mcp.json");
                if (!B.existsSync(W)) continue;
                let {
                    config: X,
                    errors: F
                } = p3A({
                    filePath: W,
                    expandVars: !0,
                    scope: "project"
                });
                if (X?.mcpServers) Object.assign(G, hzA(X.mcpServers, A));
                if (F.length > 0) Z.push(...F)
            }
            return {
                servers: G,
                errors: Z
            }
        }
        case "user": {
            let B = L1().mcpServers;
            if (!B) return {
                servers: {},
                errors: []
            };
            let {
                config: G,
                errors: Z
            } = uzA({
                configObject: {
                    mcpServers: B
                },
                expandVars: !0,
                scope: "user"
            });
            return {
                servers: hzA(G?.mcpServers, A),
                errors: Z
            }
        }
        case "local": {
            let B = M5().mcpServers;
            if (!B) return {
                servers: {},
                errors: []
            };
            let {
                config: G,
                errors: Z
            } = uzA({
                configObject: {
                    mcpServers: B
                },
                expandVars: !0,
                scope: "local"
            });
            return {
                servers: hzA(G?.mcpServers, A),
                errors: Z
            }
        }
        case "enterprise": {
            let B = uiA();
            if (!OA().existsSync(B)) return {
                servers: {},
                errors: []
            };
            let {
                config: Z,
                errors: I
            } = p3A({
                filePath: B,
                expandVars: !0,
                scope: "enterprise"
            });
            return {
                servers: hzA(Z?.mcpServers, A),
                errors: I
            }
        }
    }
}

function l3A(A) {
    let {
        servers: Q
    } = yX("enterprise"), {
        servers: B
    } = yX("user"), {
        servers: G
    } = yX("project"), {
        servers: Z
    } = yX("local");
    if (Q[A]) return Q[A];
    if (Z[A]) return Z[A];
    if (G[A]) return G[A];
    if (B[A]) return B[A];
    return null
}
async function $_() {
    let {
        servers: A
    } = yX("enterprise");
    if (Yb1()) {
        let V = {};
        for (let [K, D] of Object.entries(A)) {
            if (!Gb1(K, D)) continue;
            V[K] = D
        }
        return BA("tengu_mcp_servers", {
            enterprise: Object.keys(V).length,
            global: 0,
            project: 0,
            user: 0,
            plugin: 0
        }), {
            servers: V,
            errors: []
        }
    }
    let {
        servers: Q
    } = yX("user"), {
        servers: B
    } = yX("project"), {
        servers: G
    } = yX("local"), Z = {}, I = await y7(), Y = [];
    if (I.errors.length > 0)
        for (let V of I.errors)
            if (V.type === "mcp-config-invalid" || V.type === "mcpb-download-failed" || V.type === "mcpb-extract-failed" || V.type === "mcpb-invalid-manifest") {
                let K = `Plugin MCP loading error - ${V.type}: ${BM(V)}`;
                e(Error(K))
            } else {
                let K = V.type;
                g(`Plugin not available for MCP: ${V.source} - error type: ${K}`)
            } for (let V of I.enabled) {
        let K = await U6B(V, Y);
        if (K) Object.assign(Z, K)
    }
    if (Y.length > 0)
        for (let V of Y) {
            let K = `Plugin MCP server error - ${V.type}: ${BM(V)}`;
            e(Error(K))
        }
    let J = {};
    for (let [V, K] of Object.entries(B))
        if (diA(V) === "approved") J[V] = K;
    let W = Object.assign({}, Z, Q, J, G),
        X = {};
    for (let [V, K] of Object.entries(W)) {
        if (!Gb1(V, K)) continue;
        X[V] = K
    }
    let F = {
        enterprise: 0,
        global: 0,
        project: 0,
        user: 0,
        plugin: 0
    };
    for (let V of Object.values(X))
        if (V.scope === "enterprise") F.enterprise++;
        else if (V.scope === "user") F.global++;
    else if (V.scope === "project") F.project++;
    else if (V.scope === "local") F.user++;
    else if (V.scope === "dynamic") F.plugin++;
    return BA("tengu_mcp_servers", F), {
        servers: X,
        errors: Y
    }
}
