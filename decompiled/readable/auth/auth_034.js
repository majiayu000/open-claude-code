/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.917Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 34/61
 * Lines: 143260 - 144759 (1500 lines)
 * Original file: cli.js
 */

        return Q.test(A) || B.test(A)
    }, "Invalid npm package name format"), OlA = _.discriminatedUnion("source", [_.object({
        source: _.literal("url"),
        url: _.string().url().describe("Direct URL to marketplace.json file")
    }), _.object({
        source: _.literal("github"),
        repo: _.string().describe("GitHub repository in owner/repo format"),
        ref: _.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
        path: _.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)")
    }), _.object({
        source: _.literal("git"),
        url: _.string().endsWith(".git").describe("Full git repository URL"),
        ref: _.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.'),
        path: _.string().optional().describe("Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)")
    }), _.object({
        source: _.literal("npm"),
        package: kQB.describe("NPM package containing marketplace.json")
    }), _.object({
        source: _.literal("file"),
        path: _.string().describe("Local file path to marketplace.json")
    }), _.object({
        source: _.literal("directory"),
        path: _.string().describe("Local directory containing .claude-plugin/marketplace.json")
    })]), Gl8 = _.union([Pb.describe("Path to the plugin root, relative to the marketplace directory"), _.object({
        source: _.literal("npm"),
        package: kQB.or(_.string()).describe("Package name (or url, or local path, or anything else that can be passed to `npm` as a package)"),
        version: _.string().optional().describe("Specific version or version range (e.g., ^1.0.0, ~2.1.0)"),
        registry: _.string().url().optional().describe("Custom NPM registry URL (defaults to using system default, likely npmjs.org)")
    }).describe("NPM package as plugin source"), _.object({
        source: _.literal("pip"),
        package: _.string().describe("Python package name as it appears on PyPI"),
        version: _.string().optional().describe("Version specifier (e.g., ==1.0.0, >=2.0.0, <3.0.0)"),
        registry: _.string().url().optional().describe("Custom PyPI registry URL (defaults to using system default, likely pypi.org)")
    }).describe("Python package as plugin source"), _.object({
        source: _.literal("url"),
        url: _.string().endsWith(".git").describe("Full git repository URL (https:// or git@)"),
        ref: _.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.')
    }), _.object({
        source: _.literal("github"),
        repo: _.string().describe("GitHub repository in owner/repo format"),
        ref: _.string().optional().describe('Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.')
    })]), Zl8 = fo.partial().extend({
        name: _.string().min(1, "Plugin name cannot be empty").refine((A) => !A.includes(" "), {
            message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
        }).describe("Unique identifier matching the plugin name"),
        source: Gl8.describe("Where to fetch the plugin from"),
        category: _.string().optional().describe('Category for organizing plugins (e.g., "productivity", "development")'),
        tags: _.array(_.string()).optional().describe("Tags for searchability and discovery"),
        strict: _.boolean().optional().default(!0).describe("Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.")
    }).strict(), C3A = _.object({
        name: _.string().min(1, "Marketplace must have a name").refine((A) => !A.includes(" "), {
            message: 'Marketplace name cannot contain spaces. Use kebab-case (e.g., "my-marketplace")'
        }),
        owner: SQB.describe("Marketplace maintainer or curator information"),
        plugins: _.array(Zl8).describe("Collection of available plugins in this marketplace"),
        metadata: _.object({
            pluginRoot: _.string().optional().describe("Base path for relative plugin sources"),
            version: _.string().optional().describe("Marketplace version"),
            description: _.string().optional().describe("Marketplace description")
        }).optional().describe("Optional marketplace metadata")
    }), bo = _.string().regex(/^[a-z0-9][-a-z0-9._]*@[a-z0-9][-a-z0-9._]*$/i, "Plugin ID must be in format: plugin@marketplace"), $O7 = _.union([bo, _.object({
        id: bo.describe('Plugin identifier (e.g., "formatter@tools")'),
        version: _.string().optional().describe('Version constraint (e.g., "^2.0.0")'),
        required: _.boolean().optional().describe("If true, cannot be disabled"),
        config: _.record(_.unknown()).optional().describe("Plugin-specific configuration")
    })]), Il8 = _.object({
        version: _.string().describe("Currently installed version"),
        installedAt: _.string().describe("ISO 8601 timestamp of installation"),
        lastUpdated: _.string().optional().describe("ISO 8601 timestamp of last update"),
        installPath: _.string().describe("Absolute path to the installed plugin directory"),
        gitCommitSha: _.string().optional().describe("Git commit SHA for git-based plugins (for version tracking)"),
        isLocal: _.boolean().optional().describe("True if plugin is local (in marketplace directory). Local plugins should not be deleted on uninstall.")
    }), QzA = _.object({
        version: _.literal(1).describe("Schema version 1"),
        plugins: _.record(bo, Il8).describe("Map of plugin IDs to their installation metadata")
    }), Yl8 = _.enum(["managed", "user", "project", "local"]), Jl8 = _.object({
        scope: Yl8.describe("Installation scope"),
        projectPath: _.string().optional().describe("Project path (required for project/local scopes)"),
        installPath: _.string().describe("Absolute path to the versioned plugin directory"),
        version: _.string().optional().describe("Currently installed version"),
        installedAt: _.string().optional().describe("ISO 8601 timestamp of installation"),
        lastUpdated: _.string().optional().describe("ISO 8601 timestamp of last update"),
        gitCommitSha: _.string().optional().describe("Git commit SHA for git-based plugins"),
        isLocal: _.boolean().optional().describe("True if plugin is in marketplace directory")
    }), RlA = _.object({
        version: _.literal(2).describe("Schema version 2"),
        plugins: _.record(bo, _.array(Jl8)).describe("Map of plugin IDs to arrays of installation entries")
    }), wO7 = _.union([QzA, RlA]), Wl8 = _.object({
        source: OlA.describe("Where to fetch the marketplace from"),
        installLocation: _.string().describe("Local cache path where marketplace manifest is stored"),
        lastUpdated: _.string().describe("ISO 8601 timestamp of last marketplace refresh")
    }), Wx1 = _.record(_.string(), Wl8)
});

function Xx1(A, Q) {
    let G = A.slice(0, 2).map((Y) => {
            let J = Y.reason || Y.error || "unknown error";
            return Q ? `${Y.name} (${J})` : Y.name
        }).join(Q ? "; " : ", "),
        Z = A.length - 2,
        I = Z > 0 ? ` and ${Z} more` : "";
    return `${G}${I}`
}

function BzA(A) {
    switch (A.source) {
        case "github":
            return A.repo;
        case "url":
            return A.url;
        case "git":
            return A.url;
        case "directory":
            return A.path;
        case "file":
            return A.path;
        default:
            return "Unknown source"
    }
}

function z3A(A, Q) {
    return `${A}@${Q}`
}

async function GzA(A) {
    let Q = [],
        B = [];
    for (let [G, Z] of Object.entries(A)) {
        let I = null;
        try {
            I = await VD(G)
        } catch (Y) {
            let J = Y instanceof Error ? Y.message : String(Y);
            B.push({
                name: G,
                error: J
            }), e(Y instanceof Error ? Y : Error(`Failed to load marketplace ${G}: ${Y}`))
        }
        Q.push({
            name: G,
            config: Z,
            data: I
        })
    }
    return {
        marketplaces: Q,
        failures: B
    }
}

function TlA(A, Q) {
    if (A.length === 0) return null;
    if (Q > 0) return {
        type: "warning",
        message: A.length === 1 ? `Warning: Failed to load marketplace '${A[0].name}': ${A[0].error}` : `Warning: Failed to load ${A.length} marketplaces: ${Xl8(A)}`
    };
    return {
        type: "error",
        message: `Failed to load all marketplaces. Errors: ${Fl8(A)}`
    }
}

function Xl8(A) {
    return A.map((Q) => Q.name).join(", ")
}

function Fl8(A) {
    return A.map((Q) => `${Q.name}: ${Q.error}`).join("; ")
}

function ZzA() {
    let A = LB("policySettings");
    if (!A?.strictKnownMarketplaces) return null;
    return A.strictKnownMarketplaces
}

function Vl8(A, Q) {
    if (A.source !== Q.source) return !1;
    switch (A.source) {
        case "url":
            return A.url === Q.url;
        case "github":
            return A.repo === Q.repo && (A.ref || void 0) === (Q.ref || void 0) && (A.path || void 0) === (Q.path || void 0);
        case "git":
            return A.url === Q.url && (A.ref || void 0) === (Q.ref || void 0) && (A.path || void 0) === (Q.path || void 0);
        case "npm":
            return A.package === Q.package;
        case "file":
            return A.path === Q.path;
        case "directory":
            return A.path === Q.path;
        default:
            return !1
    }
}

function PlA(A) {
    let Q = ZzA();
    if (Q === null) return !0;
    return Q.some((B) => Vl8(A, B))
}

function IzA(A) {
    switch (A.source) {
        case "github":
            return `github:${A.repo}${A.ref?`@${A.ref}`:""}`;
        case "url":
            return A.url;
        case "git":
            return `git:${A.url}${A.ref?`@${A.ref}`:""}`;
        case "npm":
            return `npm:${A.package}`;
        case "file":
            return `file:${A.path}`;
        case "directory":
            return `dir:${A.path}`;
        default:
            return "unknown source"
    }
}
var YzA = L(() => {
    kH();
    u1();
    RB()
});
import {
    join as sC,
    basename as yQB
} from "path";

function vQB() {
    return sC(PQ(), "plugins", "known_marketplaces.json")
}

function bQB() {
    return sC(PQ(), "plugins", "marketplaces")
}

function fQB() {
    VD.cache?.clear?.()
}
// Async function: TZ
async function TZ() {
    let A = OA(),
        Q = vQB();
    if (!A.existsSync(Q)) return {};
    try {
        let B = A.readFileSync(Q, {
                encoding: "utf-8"
            }),
            G = JSON.parse(B),
            Z = Wx1.safeParse(G);
        if (!Z.success) {
            let I = `Marketplace configuration file is corrupted: ${Z.error.errors.map((Y)=>`${Y.path.join(".")}: ${Y.message}`).join(", ")}`;
            throw g(I, {
                level: "error"
            }), new uz(I, Q, G)
        }
        return Z.data
    } catch (B) {
        if (B instanceof uz) throw B;
        let G = `Failed to load marketplace configuration: ${B instanceof Error?B.message:String(B)}`;
        throw g(G, {
            level: "error"
        }), Error(G)
    }
}

async function WzA(A) {
    let Q = Wx1.safeParse(A),
        B = vQB();
    if (!Q.success) throw new uz(`Invalid marketplace config: ${Q.error.message}`, B, A);
    let G = OA(),
        Z = sC(B, "..");
    G.mkdirSync(Z), G.writeFileSync(B, JSON.stringify(Q.data, null, 2), {
        encoding: "utf-8",
        flush: !0
    })
}

async function Kl8(A, Q) {
    if (Q) {
        let G = await q3("git", ["fetch", "origin", Q], {
            cwd: A,
            timeout: 30000
        });
        if (G.code !== 0) return G;
        let Z = await q3("git", ["checkout", Q], {
            cwd: A,
            timeout: 30000
        });
        if (Z.code !== 0) return Z;
        let I = await q3("git", ["pull", "origin", "HEAD"], {
            cwd: A,
            timeout: 30000
        });
        return xQB(I)
    }
    let B = await q3("git", ["pull", "origin", "HEAD"], {
        cwd: A,
        timeout: 30000
    });
    return xQB(B)
}

function xQB(A) {
    if (A.code !== 0 && A.stderr) {
        if (A.stderr.includes("Permission denied (publickey)") || A.stderr.includes("Could not read from remote repository")) return {
            ...A,
            stderr: `SSH authentication failed while updating marketplace. Please ensure your SSH keys are configured.

Original error: ${A.stderr}`
        };
        if (A.stderr.includes("timed out") || A.stderr.includes("Could not resolve host")) return {
            ...A,
            stderr: `Network error while updating marketplace. Please check your internet connection.

Original error: ${A.stderr}`
        }
    }
    return A
}
// Async function: Dl8
async function Dl8() {
    try {
        let A = await ZQ("ssh", ["-T", "-o", "BatchMode=yes", "-o", "ConnectTimeout=2", "-o", "StrictHostKeyChecking=accept-new", "git@github.com"], {
            timeout: 3000
        });
        return A.code === 1 && (A.stderr?.includes("successfully authenticated") || A.stdout?.includes("successfully authenticated"))
    } catch {
        return !1
    }
}

async function Hl8(A, Q, B) {
    let G = ["-c", "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new", "clone", "--depth", "1"];
    if (B) G.push("--branch", B);
    G.push(A, Q);
    let Z = await ZQ("git", G, {
        timeout: 30000
    });
    if (Z.code !== 0 && Z.stderr) {
        if (Z.stderr.includes("Permission denied (publickey)") || Z.stderr.includes("Could not read from remote repository")) return {
            ...Z,
            stderr: `SSH authentication failed. Please ensure your SSH keys are configured for GitHub, or use an HTTPS URL instead.

Original error: ${Z.stderr}`
        };
        if (Z.stderr.includes("Authentication failed") || Z.stderr.includes("could not read Username")) return {
            ...Z,
            stderr: `HTTPS authentication failed. You may need to configure credentials, or use an SSH URL for GitHub repositories.

Original error: ${Z.stderr}`
        };
        if (Z.stderr.includes("timed out") || Z.stderr.includes("timeout") || Z.stderr.includes("Could not resolve host")) return {
            ...Z,
            stderr: `Network error or timeout while cloning repository. Please check your internet connection and try again.

Original error: ${Z.stderr}`
        }
    }
    return Z
}

function tR(A, Q) {
    if (!A) return;
    try {
        A(Q)
    } catch (B) {
        g(`Progress callback error: ${B instanceof Error?B.message:String(B)}`, {
            level: "warn"
        })
    }
}

async function JzA(A, Q, B, G) {
    let Z = OA();
    if (Z.existsSync(Q)) {
        if (!Z.existsSync(sC(Q, ".git"))) throw Error(`Cache directory exists at ${Q} but is not a git repository. Please remove it manually and try again.`);
        tR(G, "Updating existing marketplace cache…");
        let J = await Kl8(Q, B);
        if (J.code !== 0) {
            g(`Failed to update marketplace cache: ${J.stderr}`, {
                level: "error"
            }), tR(G, "Update failed, cleaning up and re-cloning…");
            try {
                Z.rmSync(Q, {
                    recursive: !0,
                    force: !0
                })
            } catch (W) {
                let X = W instanceof Error ? W.message : String(W);
                throw Error(`Failed to clean up existing marketplace directory. Please manually delete the directory at ${Q} and try again.

Technical details: ${X}`)
            }
        } else return
    }
    let I = B ? ` (ref: ${B})` : "";
    tR(G, `Cloning repository: ${A}${I}`);
    let Y = await Hl8(A, Q, B);
    if (Y.code !== 0) throw Error(`Failed to clone marketplace repository: ${Y.stderr}`);
    tR(G, "Clone complete, validating marketplace…")
}

async function hQB(A, Q, B) {
    let G = OA();
    tR(B, `Downloading marketplace from ${A}`), g(`Downloading marketplace from URL: ${A}`);
    let Z;
    try {
        Z = await GQ.get(A, {
            timeout: 1e4,
            headers: {
                "User-Agent": "Claude-Code-Plugin-Manager"
            }
        })
    } catch (J) {
        if (GQ.isAxiosError(J)) {
            if (J.code === "ECONNREFUSED" || J.code === "ENOTFOUND") throw Error(`Could not connect to ${A}. Please check your internet connection and verify the URL is correct.

Technical details: ${J.message}`);
            if (J.code === "ETIMEDOUT") throw Error(`Request timed out while downloading marketplace from ${A}. The server may be slow or unreachable.

Technical details: ${J.message}`);
            if (J.response) throw Error(`HTTP ${J.response.status} error while downloading marketplace from ${A}. The marketplace file may not exist at this URL.

Technical details: ${J.message}`)
        }
        throw Error(`Failed to download marketplace from ${A}: ${J instanceof Error?J.message:String(J)}`)
    }
    tR(B, "Validating marketplace data");
    let I = C3A.safeParse(Z.data);
    if (!I.success) throw new uz(`Invalid marketplace schema from URL: ${I.error.errors.map((J)=>`${J.path.join(".")}: ${J.message}`).join(", ")}`, A, Z.data);
    tR(B, "Saving marketplace to cache");
    let Y = sC(Q, "..");
    G.mkdirSync(Y), G.writeFileSync(Q, JSON.stringify(I.data, null, 2), {
        encoding: "utf-8",
        flush: !0
    })
}

function Cl8(A) {
    return A.source === "github" ? A.repo.replace("/", "-") : A.source === "npm" ? A.package.replace("@", "").replace("/", "-") : A.source === "file" ? yQB(A.path).replace(".json", "") : A.source === "directory" ? yQB(A.path) : "temp_" + Date.now()
}

function gQB(A, Q) {
    let G = OA().readFileSync(A, {
            encoding: "utf-8"
        }),
        Z = JSON.parse(G),
        I = Q.safeParse(Z);
    if (!I.success) throw new uz(`Invalid schema: ${I.error?.errors.map((Y)=>`${Y.path.join(".")}: ${Y.message}`).join(", ")}`, A, Z);
    return I.data
}

async function Fx1(A, Q) {
    let B = OA(),
        G = bQB();
    B.mkdirSync(G);
    let Z, I, Y = !1,
        J = Cl8(A);
    try {
        switch (A.source) {
            case "url": {
                Z = sC(G, `${J}.json`), Y = !0, await hQB(A.url, Z, Q), I = Z;
                break
            }
            case "github": {
                let V = `git@github.com:${A.repo}.git`,
                    K = `https://github.com/${A.repo}.git`;
                Z = sC(G, J), Y = !0;
                let D = null;
                if (await Dl8()) {
                    tR(Q, `Cloning via SSH: ${V}`);
                    try {
                        await JzA(V, Z, A.ref, Q)
                    } catch (C) {
                        if (D = C instanceof Error ? C : Error(String(C)), e(D), tR(Q, `SSH clone failed, retrying with HTTPS: ${K}`), g(`SSH clone failed for ${A.repo} despite SSH being configured, falling back to HTTPS`, {
                                level: "info"
                            }), B.existsSync(Z)) B.rmSync(Z, {
                            recursive: !0,
                            force: !0
                        });
                        try {
                            await JzA(K, Z, A.ref, Q), D = null
                        } catch (E) {
                            D = E instanceof Error ? E : Error(String(E))
                        }
                    }
                } else {
                    tR(Q, `SSH not configured, cloning via HTTPS: ${K}`), g(`SSH not configured for GitHub, using HTTPS for ${A.repo}`, {
                        level: "info"
                    });
                    try {
                        await JzA(K, Z, A.ref, Q)
                    } catch (C) {
                        D = C instanceof Error ? C : Error(String(C))
                    }
                }
                if (D) throw D;
                I = sC(Z, A.path || ".claude-plugin/marketplace.json");
                break
            }
            case "git": {
                Z = sC(G, J), Y = !0, await JzA(A.url, Z, A.ref, Q), I = sC(Z, A.path || ".claude-plugin/marketplace.json");
                break
            }
            case "npm":
                throw Error("NPM marketplace sources not yet implemented");
            case "file": {
                I = A.path, Z = A.path, Y = !1;
                break
            }
            case "directory": {
                I = sC(A.path, ".claude-plugin", "marketplace.json"), Z = A.path, Y = !1;
                break
            }
            default:
                throw Error("Unsupported marketplace source type")
        }
        if (!B.existsSync(I)) throw Error(`Marketplace file not found at ${I}`);
        let W = gQB(I, C3A),
            X = sC(G, W.name),
            F = A.source === "file" || A.source === "directory";
        if (Z !== X && !F) try {
            if (B.existsSync(X)) {
                try {
                    Q?.("Cleaning up old marketplace cache…")
                } catch (V) {
                    g(`Progress callback error: ${V instanceof Error?V.message:String(V)}`, {
                        level: "warn"
                    })
                }
                B.rmSync(X, {
                    recursive: !0,
                    force: !0
                })
            }
            B.renameSync(Z, X), Z = X, Y = !1
        } catch (V) {
            let K = V instanceof Error ? V.message : String(V);
            throw Error(`Failed to finalize marketplace cache. Please manually delete the directory at ${X} if it exists and try again.

Technical details: ${K}`)
        }
        return {
            marketplace: W,
            cachePath: Z
        }
    } catch (W) {
        if (Y && Z && A.source !== "file" && A.source !== "directory") try {
            if (B.existsSync(Z)) B.rmSync(Z, {
                recursive: !0,
                force: !0
            })
        } catch (X) {
            g(`Warning: Failed to clean up temporary marketplace cache at ${Z}: ${X instanceof Error?X.message:String(X)}`, {
                level: "warn"
            })
        }
        throw W
    }
}

async function go(A, Q) {
    if (!PlA(A)) {
        let I = ZzA() || [];
        throw Error(`Marketplace source '${IzA(A)}' is blocked by enterprise policy. ` + (I.length > 0 ? `Allowed sources: ${I.map((Y)=>IzA(Y)).join(", ")}` : "No external marketplaces are allowed."))
    }
    let {
        marketplace: B,
        cachePath: G
    } = await Fx1(A, Q), Z = await TZ();
    if (Z[B.name]) throw Error(`Marketplace '${B.name}' is already installed. Please remove it first using '/plugin marketplace remove ${B.name}' if you want to re-install it.`);
    return Z[B.name] = {
        source: A,
        installLocation: G,
        lastUpdated: new Date().toISOString()
    }, await WzA(Z), g(`Added marketplace source: ${B.name}`), {
        name: B.name
    }
}

async function jlA(A) {
    let Q = await TZ();
    if (!Q[A]) throw Error(`Marketplace '${A}' not found`);
    delete Q[A], await WzA(Q);
    let B = OA(),
        G = bQB(),
        Z = sC(G, A);
    if (B.existsSync(Z)) B.rmSync(Z, {
        recursive: !0,
        force: !0
    });
    let I = sC(G, `${A}.json`);
    if (B.existsSync(I)) B.rmSync(I, {
        force: !0
    });
    let Y = ["userSettings", "projectSettings", "localSettings"];
    for (let J of Y) {
        let W = LB(J);
        if (!W) continue;
        let X = !1,
            F = {};
        if (W.extraKnownMarketplaces?.[A]) {
            let V = {
                ...W.extraKnownMarketplaces
            };
            delete V[A], F.extraKnownMarketplaces = V, X = !0
        }
        if (W.enabledPlugins) {
            let V = `@${A}`,
                K = {
                    ...W.enabledPlugins
                },
                D = !1;
            for (let H in K)
                if (H.endsWith(V)) delete K[H], D = !0;
            if (D) F.enabledPlugins = K, X = !0
        }
        if (X) {
            let V = cB(J, F);
            if (V.error) e(V.error), g(`Failed to clean up marketplace '${A}' from ${J} settings: ${V.error.message}`);
            else g(`Cleaned up marketplace '${A}' from ${J} settings`)
        }
    }
    g(`Removed marketplace source: ${A}`)
}

function uQB(A) {
    let Q = OA();
    try {
        let B = A;
        if (Q.existsSync(A) && Q.statSync(A).isDirectory()) {
            let G = sC(A, ".claude-plugin", "marketplace.json");
            if (Q.existsSync(G)) B = G;
            else throw Error(`Invalid cached directory at ${A}: missing .claude-plugin/marketplace.json`)
        }
        if (!Q.existsSync(B)) throw Error(`Marketplace file not found at ${B}`);
        return gQB(B, C3A)
    } catch (B) {
        if (B instanceof uz) throw B;
        throw B
    }
}

async function Cc(A) {
    let Q = A.split("@");
    if (Q.length !== 2) throw Error(`Invalid plugin ID format '${A}'. Expected format: 'plugin-name@marketplace-name'`);
    let B = Q[0],
        G = Q[1];
    try {
        let I = (await TZ())[G];
        if (!I) return null;
        let J = (await VD(G)).plugins.find((W) => W.name === B);
        if (!J) return null;
        return {
            entry: J,
            marketplaceInstallLocation: I.installLocation
        }
    } catch (Z) {
        return g(`Could not find plugin ${A}: ${Z instanceof Error?Z.message:String(Z)}`, {
            level: "debug"
        }), null
    }
}
// Async function: mQB
async function mQB() {
    let A = await TZ();
    for (let [Q, B] of Object.entries(A)) try {
        await Fx1(B.source), A[Q].lastUpdated = new Date().toISOString()
    } catch (G) {
        g(`Failed to refresh marketplace ${Q}: ${G instanceof Error?G.message:String(G)}`, {
            level: "error"
        })
    }
    await WzA(A)
}

async function SlA(A, Q) {
    let B = await TZ(),
        G = B[A];
    if (!G) throw Error(`Marketplace '${A}' not found. Available marketplaces: ${Object.keys(B).join(", ")}`);
    VD.cache?.delete?.(A);
    try {
        let {
            installLocation: Z,
            source: I
        } = G;
        if (I.source === "github" || I.source === "git") await JzA(I.source === "github" ? `git@github.com:${I.repo}.git` : I.url, Z, I.ref, Q);
        else if (I.source === "url") await hQB(I.url, Z, Q);
        else if (I.source === "file" || I.source === "directory") tR(Q, "Validating local marketplace"), uQB(Z);
        else throw Error("Unsupported marketplace source type for refresh");
        B[A].lastUpdated = new Date().toISOString(), await WzA(B), g(`Successfully refreshed marketplace: ${A}`)
    } catch (Z) {
        let I = Z instanceof Error ? Z.message : String(Z);
        throw g(`Failed to refresh marketplace ${A}: ${I}`, {
            level: "error"
        }), Error(`Failed to refresh marketplace '${A}': ${I}`)
    }
}
var VD;
var kH = L(() => {
    w3();
    o2();
    hQ();
    o0();
    D0();
    u1();
    I6();
    $Z();
    RB();
    ho();
    YzA();
    VD = t1(async (A) => {
        let Q = await TZ(),
            B = Q[A];
        if (!B) throw Error(`Marketplace '${A}' not found in configuration. Available marketplaces: ${Object.keys(Q).join(", ")}`);
        try {
            return uQB(B.installLocation)
        } catch (Z) {
            g(`Cache corrupted or missing for marketplace ${A}, re-fetching from source: ${Z instanceof Error?Z.message:String(Z)}`, {
                level: "warn"
            })
        }
        let {
            marketplace: G
        } = await Fx1(B.source);
        return Q[A].lastUpdated = new Date().toISOString(), await WzA(Q), G
    })
});

async function _lA(A, Q, B, G) {
    if (B?.version) return g(`Using manifest version for ${A}: ${B.version}`), B.version;
    if (G) {
        let Z = await El8(G);
        if (Z) {
            let I = Z.substring(0, 12);
            return g(`Using git SHA for ${A}: ${I}`), I
        }
    }
    if (typeof Q === "string") {
        let Z = `local-${Date.now()}`;
        return g(`Using local fallback version for ${A}: ${Z}`), Z
    }
    if (Q.source === "github" || Q.source === "url") return "pending";
    if (Q.source === "npm") {
        let Z = await zl8(Q.package);
        if (Z) return g(`Using npm version for ${A}: ${Z}`), Z;
        return "unknown"
    }
    return "unknown"
}

async function El8(A) {
    try {
        let Q = await q3("git", ["rev-parse", "HEAD"], {
            cwd: A
        });
        if (Q.code === 0 && Q.stdout) return Q.stdout.trim();
        return null
    } catch {
        return null
    }
}

async function zl8(A) {
    try {
        let Q = await q3("npm", ["view", A, "version"]);
        if (Q.code === 0 && Q.stdout) return Q.stdout.trim();
        return null
    } catch {
        return null
    }
}
var dQB = L(() => {
    I6();
    D0()
});
import {
    join as i4,
    resolve as Ul8,
    basename as $l8
} from "path";
import {
    dirname as cQB
} from "path";

function Ec() {
    return i4(PQ(), "plugins", "cache")
}

function klA(A, Q) {
    let B = Ec(),
        [G, Z] = A.split("@"),
        I = (Z || "unknown").replace(/[^a-zA-Z0-9\-_]/g, "-"),
        Y = (G || A).replace(/[^a-zA-Z0-9\-_]/g, "-");
    return i4(B, I, Y, Q)
}

function uo(A, Q) {
    let B = OA();
    if (!B.existsSync(Q)) B.mkdirSync(Q);
    let G = B.readdirSync(A);
    for (let Z of G) {
        let I = i4(A, Z.name),
            Y = i4(Q, Z.name);
        if (Z.isDirectory()) uo(I, Y);
        else if (Z.isFile()) B.copyFileSync(I, Y);
        else if (Z.isSymbolicLink()) {
            let J = B.readlinkSync(I);
            B.symlinkSync(J, Y)
        }
    }
}

async function pQB(A, Q, B, G) {
    let Z = OA(),
        I = klA(Q, B);
    if (Z.existsSync(I)) return g(`Plugin ${Q} version ${B} already cached at ${I}`), I;
    Z.mkdirSync(cQB(I));
    let Y = i4(A, "plugin.json"),
        J = i4(A, ".claude-plugin", "plugin.json");
    if (Z.existsSync(Y) || Z.existsSync(J)) g(`Copying self-contained plugin ${Q} to versioned cache`), uo(A, I);
    else if (G) {
        g(`Copying non-self-contained plugin ${Q} to versioned cache`), Z.mkdirSync(I);
        let F = (K) => {
            let D = i4(A, K),
                H = i4(I, K);
            if (!Z.existsSync(D)) {
                g(`Component path ${K} not found at ${D}`, {
                    level: "warn"
                });
                return
            }
            if (Z.statSync(D).isDirectory()) uo(D, H);
            else Z.mkdirSync(cQB(H)), Z.copyFileSync(D, H)
        };
        if (G.commands)
            if (typeof G.commands === "object" && !Array.isArray(G.commands)) {
                for (let K of Object.values(G.commands))
                    if (K?.source) F(K.source)
            } else {
                let K = Array.isArray(G.commands) ? G.commands : [G.commands];
                for (let D of K)
                    if (typeof D === "string") F(D)
            } if (G.agents) {
            let K = Array.isArray(G.agents) ? G.agents : [G.agents];
            for (let D of K) F(D)
        }
        if (G.skills) {
            let K = Array.isArray(G.skills) ? G.skills : [G.skills];
            for (let D of K) F(D)
        }
        if (G.outputStyles) {
            let K = Array.isArray(G.outputStyles) ? G.outputStyles : [G.outputStyles];
            for (let D of K) F(D)
        }
        let V = ["commands", "agents", "skills", "hooks", "output-styles"];
        for (let K of V) {
            let D = i4(A, K);
            if (Z.existsSync(D)) uo(D, i4(I, K))
        }
    } else g(`Copying plugin ${Q} to versioned cache (fallback to full copy)`), uo(A, I);
    let X = i4(I, ".git");
    if (Z.existsSync(X)) Z.rmSync(X, {
        recursive: !0,
        force: !0
    });
    return g(`Successfully cached plugin ${Q} at ${I}`), I
}

function wl8(A) {
    try {
        let Q = new URL(A);
        if (!["https:", "http:", "file:"].includes(Q.protocol)) {
            if (!/^git@[a-zA-Z0-9.-]+:/.test(A)) throw Error(`Invalid git URL protocol: ${Q.protocol}. Only HTTPS, HTTP, file:// and SSH (git@) URLs are supported.`)
        }
        return A
    } catch {
        if (/^git@[a-zA-Z0-9.-]+:/.test(A)) return A;
        throw Error(`Invalid git URL: ${A}`)
    }
}

async function ql8(A, Q) {
    let B = OA(),
        G = i4(PQ(), "plugins", "npm-cache");
    B.mkdirSync(G);
    let Z = i4(G, "node_modules", A);
    if (!B.existsSync(Z)) {
        g(`Installing npm package ${A} to cache`);
        let Y = await ZQ("npm", ["install", A, "--prefix", G], {
            useCwd: !1
        });
        if (Y.code !== 0) throw Error(`Failed to install npm package: ${Y.stderr}`)
    }
    uo(Z, Q), g(`Copied npm package ${A} from cache to ${Q}`)
}

async function Nl8(A, Q, B) {
    let G = ["clone", "--depth", "1"];
    if (B) G.push("--branch", B);
    G.push(A, Q);
    let Z = await ZQ("git", G);
    if (Z.code !== 0) throw Error(`Failed to clone repository: ${Z.stderr}`)
}

async function nQB(A, Q, B) {
    let G = wl8(A);
    await Nl8(G, Q, B);
    let Z = B ? ` (ref: ${B})` : "";
    g(`Cloned repository from ${G}${Z} to ${Q}`)
}

async function Ll8(A, Q, B) {
    if (!/^[a-zA-Z0-9-_.]+\/[a-zA-Z0-9-_.]+$/.test(A)) throw Error(`Invalid GitHub repository format: ${A}. Expected format: owner/repo`);
    let G = `git@github.com:${A}.git`;
    return nQB(G, Q, B)
}

async function Ml8(A, Q) {
    let B = OA();
    if (!B.existsSync(A)) throw Error(`Source path does not exist: ${A}`);
    uo(A, Q);
    let G = i4(Q, ".git");
    if (B.existsSync(G)) B.rmSync(G, {
        recursive: !0,
        force: !0
    })
}

function Ol8(A) {
    let Q = Date.now(),
        B = Math.random().toString(36).substring(2, 8),
        G;
    if (typeof A === "string") G = "local";
    else switch (A.source) {
        case "npm":
            G = "npm";
            break;
        case "pip":
            G = "pip";
            break;
        case "github":
            G = "github";
            break;
        case "url":
            G = "git";
            break;
        default:
            G = "unknown"
    }
    return `temp_${G}_${Q}_${B}`
}

async function U3A(A, Q) {
    let B = OA(),
        G = Ec();
    B.mkdirSync(G);
    let Z = Ol8(A),
        I = i4(G, Z),
        Y = !1;
    try {
        if (g(`Caching plugin from source: ${JSON.stringify(A)} to temporary path ${I}`), Y = !0, typeof A === "string") await Ml8(A, I);
        else switch (A.source) {
            case "npm":
                await ql8(A.package, I);
                break;
            case "github":
                await Ll8(A.repo, I, A.ref);
                break;
            case "url":
                await nQB(A.url, I, A.ref);
                break;
            case "pip":
                throw Error("Python package plugins are not yet supported");
            default:
                throw Error("Unsupported plugin source type")
        }
    } catch (K) {
        if (Y && B.existsSync(I)) {
            g(`Cleaning up failed installation at ${I}`);
            try {
                B.rmSync(I, {
                    recursive: !0,
                    force: !0
                })
            } catch (D) {
                g(`Failed to clean up installation: ${D}`, {
                    level: "error"
                })
            }
        }
        throw K
    }
    let J = i4(I, ".claude-plugin", "plugin.json"),
        W = i4(I, "plugin.json"),
        X;
    if (B.existsSync(J)) try {
        let K = B.readFileSync(J, {
                encoding: "utf-8"
            }),
            D = JSON.parse(K),
            H = fo.safeParse(D);
        if (H.success) X = H.data;
        else {
            let C = H.error.errors.map((E) => `${E.path.join(".")}: ${E.message}`).join(", ");
            throw g(`Invalid manifest at ${J}: ${C}`, {
                level: "error"
            }), Error(`Plugin has an invalid manifest file at ${J}. Validation errors: ${C}`)
        }
    } catch (K) {
        if (K instanceof Error && K.message.includes("invalid manifest file")) throw K;
        let D = K instanceof Error ? K.message : String(K);
        throw g(`Failed to parse manifest at ${J}: ${D}`, {
            level: "error"
        }), Error(`Plugin has a corrupt manifest file at ${J}. JSON parse error: ${D}`)
    } else if (B.existsSync(W)) try {
        let K = B.readFileSync(W, {
                encoding: "utf-8"
            }),
            D = JSON.parse(K),
            H = fo.safeParse(D);
        if (H.success) X = H.data;
        else {
            let C = H.error.errors.map((E) => `${E.path.join(".")}: ${E.message}`).join(", ");
            throw g(`Invalid legacy manifest at ${W}: ${C}`, {
                level: "error"
            }), Error(`Plugin has an invalid manifest file at ${W}. Validation errors: ${C}`)
        }
    } catch (K) {
        if (K instanceof Error && K.message.includes("invalid manifest file")) throw K;
        let D = K instanceof Error ? K.message : String(K);
        throw g(`Failed to parse legacy manifest at ${W}: ${D}`, {
            level: "error"
        }), Error(`Plugin has a corrupt manifest file at ${W}. JSON parse error: ${D}`)
    } else X = Q?.manifest || {
        name: Z,
        description: `Plugin cached from ${typeof A==="string"?A:A.source}`
    };
    let F = X.name.replace(/[^a-zA-Z0-9-_]/g, "-"),
        V = i4(G, F);
    if (B.existsSync(V)) g(`Removing old cached version at ${V}`), B.rmSync(V, {
        recursive: !0,
        force: !0
    });
    return B.renameSync(I, V), g(`Successfully cached plugin ${X.name} to ${V}`), {
        path: V,
        manifest: X
    }
}

function aQB(A, Q, B) {
    let G = OA();
    if (!G.existsSync(A)) return {
        name: Q,
        description: `Plugin from ${B}`
    };
    try {
        let Z = G.readFileSync(A, {
                encoding: "utf-8"
            }),
            I = JSON.parse(Z),
            Y = fo.safeParse(I);
        if (Y.success) return Y.data;
        let J = Y.error.errors.map((W) => `${W.path.join(".")}: ${W.message}`).join(", ");
        throw g(`Plugin ${Q} has an invalid manifest file at ${A}. Validation errors: ${J}`, {
            level: "error"
        }), Error(`Plugin ${Q} has an invalid manifest file at ${A}.

Validation errors: ${J}

Please fix the manifest or remove it. The plugin cannot load with an invalid manifest.`)
    } catch (Z) {
        if (Z instanceof Error && Z.message.includes("invalid manifest file")) throw Z;
        let I = Z instanceof Error ? Z.message : String(Z);
        throw g(`Plugin ${Q} has a corrupt manifest file at ${A}. Parse error: ${I}`, {
            level: "error"
        }), Error(`Plugin ${Q} has a corrupt manifest file at ${A}.

JSON parse error: ${I}

Please check the file for syntax errors.`)
    }
}

function lQB(A, Q) {
    let B = OA();
    if (!B.existsSync(A)) throw Error(`Hooks file not found at ${A} for plugin ${Q}. If the manifest declares hooks, the file must exist.`);
    let G = B.readFileSync(A, {
            encoding: "utf-8"
        }),
        Z = JSON.parse(G);
    return _QB.parse(Z).hooks
}

function sQB(A, Q, B, G, Z = !0) {
    let I = OA(),
        Y = [],
        J = i4(A, ".claude-plugin", "plugin.json"),
        W = aQB(J, G, Q),
        X = {
            name: W.name,
            manifest: W,
            path: A,
            source: Q,
            repository: Q,
            enabled: B
        },
        F = i4(A, "commands");
    if (I.existsSync(F)) X.commandsPath = F;
    if (W.commands) {
        let z = Object.values(W.commands)[0];
        if (typeof W.commands === "object" && !Array.isArray(W.commands) && z && typeof z === "object" && (("source" in z) || ("content" in z))) {
            let w = {},
                N = [];
            for (let [q, R] of Object.entries(W.commands)) {
                if (!R || typeof R !== "object") continue;
                if (R.source) {
                    let P = i4(A, R.source);
                    if (I.existsSync(P)) N.push(P), w[q] = R;
                    else g(`Command ${q} path ${R.source} specified in manifest but not found at ${P} for ${W.name}`, {
                        level: "warn"
                    }), e(Error(`Plugin component file not found: ${P} for ${W.name}`)), Y.push({
                        type: "path-not-found",
                        source: Q,
                        plugin: W.name,
                        path: P,
                        component: "commands"
                    })
                } else if (R.content) w[q] = R
            }
            if (N.length > 0) X.commandsPaths = N;
            if (Object.keys(w).length > 0) X.commandsMetadata = w
        } else {
            let w = Array.isArray(W.commands) ? W.commands : [W.commands],
                N = [];
            for (let q of w) {
                if (typeof q !== "string") {
                    g(`Unexpected command format in manifest for ${W.name}`, {
                        level: "error"
                    });
                    continue
                }
                let R = i4(A, q);
                if (I.existsSync(R)) N.push(R);
                else g(`Command path ${q} specified in manifest but not found at ${R} for ${W.name}`, {
                    level: "warn"
                }), e(Error(`Plugin component file not found: ${R} for ${W.name}`)), Y.push({
                    type: "path-not-found",
                    source: Q,
                    plugin: W.name,
                    path: R,
                    component: "commands"
                })
            }
            if (N.length > 0) X.commandsPaths = N
        }
    }
    let V = i4(A, "agents");
    if (I.existsSync(V)) X.agentsPath = V;
    if (W.agents) {
        let z = Array.isArray(W.agents) ? W.agents : [W.agents],
            w = [];
        for (let N of z) {
            let q = i4(A, N);
            if (I.existsSync(q)) w.push(q);
            else g(`Agent path ${N} specified in manifest but not found at ${q} for ${W.name}`, {
                level: "warn"
            }), e(Error(`Plugin component file not found: ${q} for ${W.name}`)), Y.push({
                type: "path-not-found",
                source: Q,
                plugin: W.name,
                path: q,
                component: "agents"
            })
        }
        if (w.length > 0) X.agentsPaths = w
    }
    let K = i4(A, "skills");
    if (I.existsSync(K)) X.skillsPath = K;
    if (W.skills) {
        let z = Array.isArray(W.skills) ? W.skills : [W.skills],
            w = [];
        for (let N of z) {
            let q = i4(A, N);
            if (I.existsSync(q)) w.push(q);
            else g(`Skill path ${N} specified in manifest but not found at ${q} for ${W.name}`, {
                level: "warn"
            }), e(Error(`Plugin component file not found: ${q} for ${W.name}`)), Y.push({
                type: "path-not-found",
                source: Q,
                plugin: W.name,
                path: q,
                component: "skills"
            })
        }
        if (w.length > 0) X.skillsPaths = w
    }
    let D = i4(A, "output-styles");
    if (I.existsSync(D)) X.outputStylesPath = D;
    if (W.outputStyles) {
        let z = Array.isArray(W.outputStyles) ? W.outputStyles : [W.outputStyles],
            w = [];
        for (let N of z) {
            let q = i4(A, N);
            if (I.existsSync(q)) w.push(q);
            else g(`Output style path ${N} specified in manifest but not found at ${q} for ${W.name}`, {
                level: "warn"
            }), e(Error(`Plugin component file not found: ${q} for ${W.name}`)), Y.push({
                type: "path-not-found",
                source: Q,
                plugin: W.name,
                path: q,
                component: "output-styles"
            })
        }
        if (w.length > 0) X.outputStylesPaths = w
    }
    let H, C = new Set,
        E = i4(A, "hooks", "hooks.json");
    if (I.existsSync(E)) try {
        H = lQB(E, W.name);
        try {
            C.add(I.realpathSync(E))
        } catch {
            C.add(E)
        }
        g(`Loaded hooks from standard location for plugin ${W.name}: ${E}`)
    } catch (z) {
        let w = z instanceof Error ? z.message : String(z);
        g(`Failed to load hooks for ${W.name}: ${w}`, {
            level: "error"
        }), e(z instanceof Error ? z : Error(w)), Y.push({
            type: "hook-load-failed",
            source: Q,
            plugin: W.name,
            hookPath: E,
            reason: w
        })
    }
    if (W.hooks) {
        let z = Array.isArray(W.hooks) ? W.hooks : [W.hooks];
        for (let w of z)
            if (typeof w === "string") {
                let N = i4(A, w);
                if (!I.existsSync(N)) {
                    g(`Hooks file ${w} specified in manifest but not found at ${N} for ${W.name}`, {
                        level: "error"
                    }), e(Error(`Plugin component file not found: ${N} for ${W.name}`)), Y.push({
                        type: "path-not-found",
                        source: Q,
                        plugin: W.name,
                        path: N,
                        component: "hooks"
                    });
                    continue
                }
                let q;
                try {
                    q = I.realpathSync(N)
                } catch {
                    q = N
                }
                if (C.has(q)) {
                    if (g(`Skipping duplicate hooks file for plugin ${W.name}: ${w} (resolves to already-loaded file: ${q})`), Z) {
                        let R = `Duplicate hooks file detected: ${w} resolves to already-loaded file ${q}. The standard hooks/hooks.json is loaded automatically, so manifest.hooks should only reference additional hook files.`;
                        e(Error(R)), Y.push({
                            type: "hook-load-failed",
                            source: Q,
                            plugin: W.name,
                            hookPath: N,
                            reason: R
                        })
                    }
                    continue
                }
                try {
                    let R = lQB(N, W.name);
                    try {
                        H = iQB(H, R), C.add(q), g(`Loaded and merged hooks from manifest for plugin ${W.name}: ${w}`)
                    } catch (P) {
                        let y = P instanceof Error ? P.message : String(P);
                        g(`Failed to merge hooks from ${w} for ${W.name}: ${y}`, {
                            level: "error"
                        }), e(P instanceof Error ? P : Error(y)), Y.push({
                            type: "hook-load-failed",
                            source: Q,
                            plugin: W.name,
                            hookPath: N,
                            reason: `Failed to merge: ${y}`
                        })
                    }
                } catch (R) {
                    let P = R instanceof Error ? R.message : String(R);
                    g(`Failed to load hooks from ${w} for ${W.name}: ${P}`, {
                        level: "error"
                    }), e(R instanceof Error ? R : Error(P)), Y.push({
                        type: "hook-load-failed",
                        source: Q,
                        plugin: W.name,
                        hookPath: N,
                        reason: P
                    })
                }
            } else if (typeof w === "object") H = iQB(H, w)
    }
    if (H) X.hooksConfig = H;
    return {
        plugin: X,
        errors: Y
    }
}

function iQB(A, Q) {
    if (!A) return Q;
    let B = {
        ...A
    };
    for (let [G, Z] of Object.entries(Q))
        if (!B[G]) B[G] = Z;
        else B[G] = [...B[G] || [], ...Z];
    return B
}
// Async function: Rl8
async function Rl8() {
    let Q = c0().enabledPlugins || {},
        B = [],
        G = [],
        Z = Object.entries(Q).filter(([Y, J]) => {
            return bo.safeParse(Y).success && J !== void 0
        }),
        I = await TZ();
    for (let [Y, J] of Z) try {
        let [W, X] = Y.split("@"), F = I[X];
        if (F && !PlA(F.source)) {
            let D = ZzA() || [];
            G.push({
                type: "marketplace-blocked-by-policy",
                source: Y,
                plugin: W,
                marketplace: X,
                allowedSources: D.map((H) => IzA(H))
            });
            continue
        }
        let V = await Cc(Y);
        if (!V) {
            G.push({
                type: "plugin-not-found",
                source: Y,
                pluginId: W,
                marketplace: X
            });
            continue
        }
        let K = await Tl8(V.entry, V.marketplaceInstallLocation, Y, J === !0, G);
        if (K) B.push(K)
    } catch (W) {
        let X = W instanceof Error ? W : Error(String(W));
        e(X), G.push({
            type: "generic-error",
            source: Y,
            error: X.message
        })
    }
    return {
        plugins: B,
        errors: G
    }
}

async function Tl8(A, Q, B, G, Z) {
    g(`Loading plugin ${A.name} from source: ${JSON.stringify(A.source)}`);
    let I = OA(),
        Y = [],
        J;
    if (typeof A.source === "string") {
        let K = I.statSync(Q).isDirectory() ? Q : i4(Q, ".."),
            D = i4(K, A.source);
        if (!I.existsSync(D)) {
            let H = Error(`Plugin path not found: ${D}`);
            return g(`Plugin path not found: ${D}`, {
                level: "error"
            }), e(H), Z.push({
                type: "generic-error",
                source: B,
                error: `Plugin directory not found at path: ${D}. Check that the marketplace entry has the correct path.`
            }), null
        }
        if (j8("tengu_enable_versioned_plugins")) try {
            let H = i4(D, ".claude-plugin", "plugin.json"),
                C;
            try {
                C = aQB(H, A.name, A.source)
            } catch {}
            let E = await _lA(B, A.source, C, K);
            J = await pQB(D, B, E, A), g(`Copied local plugin ${A.name} to versioned cache: ${J}`)
        } catch (H) {
            let C = H instanceof Error ? H.message : String(H);
            g(`Failed to copy plugin ${A.name} to versioned cache: ${C}. Using marketplace path.`, {
                level: "warn"
            }), J = D
        } else J = D
    } else if (j8("tengu_enable_versioned_plugins")) try {
        let D = await _lA(B, A.source, void 0, void 0),
            H = klA(B, D);
        if (I.existsSync(H)) g(`Using versioned cached plugin ${A.name} from ${H}`), J = H;
        else {
            let C = await U3A(A.source, {
                    manifest: {
                        name: A.name
                    }
                }),
                E = await _lA(B, A.source, C.manifest, C.path);
            if (J = await pQB(C.path, B, E, A), C.path !== J) I.rmSync(C.path, {
                recursive: !0,
                force: !0
            })
        }
    } catch (D) {
        let H = D instanceof Error ? D.message : String(D);
        return g(`Failed to cache plugin ${A.name}: ${H}`, {
            level: "error"
        }), e(D instanceof Error ? D : Error(H)), Z.push({
            type: "generic-error",
            source: B,
            error: `Failed to download/cache plugin ${A.name}: ${H}`
        }), null
    } else {
        let D = Ec(),
            H = A.name.replace(/[^a-zA-Z0-9-_]/g, "-"),
            C = i4(D, H);
        if (I.existsSync(C)) g(`Using cached plugin ${A.name} from ${C}`), J = C;
        else try {
            J = (await U3A(A.source, {
                manifest: {
                    name: A.name
                }
            })).path
        } catch (E) {
            let z = E instanceof Error ? E.message : String(E);
            return g(`Failed to cache plugin ${A.name}: ${z}`, {
                level: "error"
            }), e(E instanceof Error ? E : Error(z)), Z.push({
                type: "generic-error",
                source: B,
                error: `Failed to download/cache plugin ${A.name}: ${z}`
            }), null
        }
    }
    let W = i4(J, ".claude-plugin", "plugin.json"),
        X = I.existsSync(W),
        {
            plugin: F,
            errors: V
        } = sQB(J, B, G, A.name, A.strict ?? !0);
    if (Y.push(...V), !X) {
        if (F.manifest = {
                ...A,
                id: void 0,
                source: void 0,
                strict: void 0
            }, F.name = F.manifest.name, A.commands) {
            let K = Object.values(A.commands)[0];
            if (typeof A.commands === "object" && !Array.isArray(A.commands) && K && typeof K === "object" && (("source" in K) || ("content" in K))) {
                let D = {},
                    H = [];
                for (let [C, E] of Object.entries(A.commands)) {
                    if (!E || typeof E !== "object" || !E.source) continue;
                    let z = i4(J, E.source);
                    if (I.existsSync(z)) H.push(z), D[C] = E;
                    else g(`Command ${C} path ${E.source} from marketplace entry not found at ${z} for ${A.name}`, {
                        level: "warn"
                    }), e(Error(`Plugin component file not found: ${z} for ${A.name}`)), Y.push({
                        type: "path-not-found",
                        source: B,
                        plugin: A.name,
                        path: z,
                        component: "commands"
                    })
                }
                if (H.length > 0) F.commandsPaths = H, F.commandsMetadata = D
            } else {
                let D = Array.isArray(A.commands) ? A.commands : [A.commands],
                    H = [];
                for (let C of D) {
                    if (typeof C !== "string") {
                        g(`Unexpected command format in marketplace entry for ${A.name}`, {
                            level: "error"
                        });
                        continue
                    }
                    let E = i4(J, C);
                    if (I.existsSync(E)) H.push(E);
                    else g(`Command path ${C} from marketplace entry not found at ${E} for ${A.name}`, {
                        level: "warn"
                    }), e(Error(`Plugin component file not found: ${E} for ${A.name}`)), Y.push({
                        type: "path-not-found",
                        source: B,
                        plugin: A.name,
                        path: E,
                        component: "commands"
                    })
                }
                if (H.length > 0) F.commandsPaths = H
            }
        }
        if (A.agents) {
            let K = Array.isArray(A.agents) ? A.agents : [A.agents],
                D = [];
            for (let H of K) {
                let C = i4(J, H);
                if (I.existsSync(C)) D.push(C);
                else g(`Agent path ${H} from marketplace entry not found at ${C} for ${A.name}`, {
                    level: "warn"
                }), e(Error(`Plugin component file not found: ${C} for ${A.name}`)), Y.push({
                    type: "path-not-found",
                    source: B,
                    plugin: A.name,
                    path: C,
                    component: "agents"
                })
            }