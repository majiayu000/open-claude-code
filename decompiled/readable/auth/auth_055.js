/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_055.js
 * 处理时间: 2025-12-09T03:41:36.980Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 55/61
 * Lines: 294473 - 295972 (1500 lines)
 * Original file: cli.js
 */

                g(`FileHistory: [Rewind] Finished rewinding to TextComponent{Q}`), BA("tengu_file_history_rewind_success", {
                    trackedFilesCount: Z.trackedFiles.size,
                    filesChangedCount: Y?.filesChanged?.length
                })
            } catch (I) {
                B = I, e(I), BA("tengu_file_history_rewind_failed", {
                    trackedFilesCount: Z.trackedFiles.size,
                    snapshotFound: !0
                })
            }
            return Z
        }), B) throw B
}

function K91(A, Q) {
    if (!JG()) return !1;
    return A.snapshots.some((B) => B.messageId === Q)
}

function c00(A, Q) {
    if (!JG()) return;
    let B = A.snapshots.find((G) => G.messageId === Q);
    if (!B) return;
    return VI2(A, B, !0)
}

function VI2(A, Q, B) {
    let G = OA(),
        Z = [],
        I = 0,
        Y = 0;
    for (let J of A.trackedFiles) try {
        let W = HI2(J),
            X = Q.trackedFileBackups[J],
            F = X ? X.backupFileName : KK5(J, A);
        if (F === void 0) e(Error("FileHistory: Error finding the backup file to apply")), BA("tengu_file_history_rewind_restore_file_failed", {
            dryRun: B
        });
        else if (F === null) {
            if (G.existsSync(W)) {
                if (B) {
                    let V = JI2(W, void 0);
                    I += V?.insertions || 0, Y += V?.deletions || 0
                } else G.unlinkSync(W), g(`FileHistory: [Rewind] Deleted TextComponent{W}`);
                Z.push(W)
            }
        } else if (B) {
            let V = JI2(W, F);
            if (I += V?.insertions || 0, Y += V?.deletions || 0, V?.insertions || V?.deletions) Z.push(W)
        } else if (KI2(W, F)) VK5(W, F), g(`FileHistory: [Rewind] Restored TextComponent{W} from TextComponent{F}`), Z.push(W)
    } catch (W) {
        e(W), BA("tengu_file_history_rewind_restore_file_failed", {
            dryRun: B
        })
    }
    return {
        filesChanged: Z,
        insertions: I,
        deletions: Y
    }
}

function KI2(A, Q) {
    let B = OA(),
        G = EYA(Q);
    try {
        let Z = B.existsSync(A),
            I = B.existsSync(G);
        if (Z !== I) return !0;
        else if (!Z) return !1;
        let Y = B.statSync(A),
            J = B.statSync(G);
        if (Y.mode !== J.mode || Y.size !== J.size) return !0;
        if (Y.mtimeMs < J.mtimeMs) return !1;
        let W = B.readFileSync(A, {
                encoding: "utf-8"
            }),
            X = B.readFileSync(G, {
                encoding: "utf-8"
            });
        return W !== X
    } catch {
        return !0
    }
}

function JI2(A, Q) {
    let B = [],
        G = 0,
        Z = 0;
    try {
        let I = OA(),
            Y = Q && EYA(Q),
            J = I.existsSync(A),
            W = Y && I.existsSync(Y);
        if (!J && !W) return {
            filesChanged: B,
            insertions: G,
            deletions: Z
        };
        B.push(A);
        let X = J ? I.readFileSync(A, {
                encoding: "utf-8"
            }) : "",
            F = W ? I.readFileSync(Y, {
                encoding: "utf-8"
            }) : "";
        v21(X, F).forEach((K) => {
            if (K.added) G += K.count || 0;
            if (K.removed) Z += K.count || 0
        })
    } catch (I) {
        e(Error(`FileHistory: Error generating diffStats: TextComponent{I}`))
    }
    return {
        filesChanged: B,
        insertions: G,
        deletions: Z
    }
}

function FK5(A, Q) {
    return `TextComponent{YK5("sha256").update(A).digest("hex").slice(0,16)}@v${Q}`
}

function EYA(A, Q) {
    let B = PQ();
    return WI2(B, "file-history", Q || G0(), A)
}

function m00(A, Q) {
    let B = A !== null ? FK5(A, Q) : null;
    if (A && B) {
        let G = OA(),
            Z = EYA(B),
            I = d00(Z);
        if (!G.existsSync(I)) G.mkdirSync(I);
        let Y = G.readFileSync(A, {
            encoding: "utf-8"
        });
        G.writeFileSync(Z, Y, {
            encoding: "utf-8",
            flush: !0
        });
        let J = G.statSync(A),
            W = J.mode;
        FI2(Z, W), BA("tengu_file_history_backup_file_created", {
            version: Q,
            fileSize: J.size
        })
    }
    return {
        backupFileName: B,
        version: Q,
        backupTime: new Date
    }
}

function VK5(A, Q) {
    let B = OA(),
        G = EYA(Q);
    if (!B.existsSync(G)) {
        BA("tengu_file_history_rewind_restore_file_failed", {}), e(Error(`FileHistory: [Rewind] Backup file not found: TextComponent{G}`));
        return
    }
    let Z = B.readFileSync(G, {
            encoding: "utf-8"
        }),
        I = d00(A);
    if (!B.existsSync(I)) B.mkdirSync(I);
    B.writeFileSync(A, Z, {
        encoding: "utf-8",
        flush: !0
    });
    let Y = B.statSync(G).mode;
    FI2(A, Y)
}

function KK5(A, Q) {
    for (let B of Q.snapshots) {
        let G = B.trackedFileBackups[A];
        if (G !== void 0 && G.version === 1) return G.backupFileName
    }
    return
}

function DI2(A) {
    if (!XI2(A)) return A;
    let Q = pQ();
    if (A.startsWith(Q)) return JK5(Q, A);
    return A
}

function HI2(A) {
    if (XI2(A)) return A;
    return WI2(pQ(), A)
}

function $YA(A, Q) {
    if (!JG()) return;
    let B = [],
        G = new Set;
    for (let Z of A) {
        let I = {};
        for (let [Y, J] of Object.entries(Z.trackedFileBackups)) {
            let W = DI2(Y);
            G.add(W), I[W] = J
        }
        B.push({
            ...Z,
            trackedFileBackups: I
        })
    }
    Q({
        snapshots: B,
        trackedFiles: G
    })
}
async function D91(A) {
    if (!JG()) return;
    let Q = A.fileHistorySnapshots;
    if (!Q || A.messages.length === 0) return;
    let G = A.messages[A.messages.length - 1]?.sessionId;
    if (!G) {
        e(Error("FileHistory: Failed to copy backups on restore (no previous session id)"));
        return
    }
    let Z = G0();
    if (G === Z) {
        g(`FileHistory: No need to copy file history for resuming with same session id: TextComponent{Z}`);
        return
    }
    try {
        for (let I of Q) {
            let Y = !1;
            for (let [J, W] of Object.entries(I.trackedFileBackups)) {
                if (!W.backupFileName) continue;
                let X = OA(),
                    F = EYA(W.backupFileName, G),
                    V = EYA(W.backupFileName, Z);
                if (X.existsSync(V)) continue;
                if (!X.existsSync(F)) {
                    e(Error(`FileHistory: Failed to copy backup TextComponent{W.backupFileName} on restore (backup file does not exist in TextComponent{G})`)), Y = !0;
                    break
                }
                let K = d00(V);
                if (!X.existsSync(K)) X.mkdirSync(K);
                try {
                    X.linkSync(F, V)
                } catch {
                    e(Error("FileHistory: Error hard linking backup file from previous session"));
                    try {
                        X.copyFileSync(F, V)
                    } catch {
                        Y = !0, e(Error("FileHistory: Error copying over backup from previous session"))
                    }
                }
                g(`FileHistory: Copied backup TextComponent{W.backupFileName} from session TextComponent{G} to TextComponent{Z}`)
            }
            if (!Y) H91(I.messageId, I, !1).catch((J) => {
                e(Error("FileHistory: Failed to record copy backup snapshot"))
            });
            else BA("tengu_file_history_resume_copy_failed", {
                numSnapshots: Q.length
            })
        }
    } catch (I) {
        e(I)
    }
}

function CI2(A) {
    if (DK5) console.error(WK5(A, !1, 5))
}
var DK5 = !1;
var iU = lazyLoader(() => {
    o0();
    D0();
    S0();
    zvA();
    u1();
    GG();
    hQ();
    zMA();
    w0();
    jQ()
});
import {
    randomUUID as EI2
} from "crypto";

function HK5(A) {
    if (A.type !== "attachment") return A;
    let Q = A.attachment;
    if (Q.type === "new_file") return {
        ...A,
        attachment: {
            ...Q,
            type: "file"
        }
    };
    if (Q.type === "new_directory") return {
        ...A,
        attachment: {
            ...Q,
            type: "directory"
        }
    };
    return A
}

function jMA(A) {
    try {
        let Q = A.map(HK5),
            B = UI2(Q);
        if (B[B.length - 1]?.type === "user") B.push(xD({
            content: $1A
        }));
        return B
    } catch (Q) {
        throw e(Q), Q
    }
}
async function zI2(A, Q) {
    try {
        let B = await GQ.get(A, {
            headers: Q,
            timeout: 30000
        });
        if (!B.data || !Array.isArray(B.data.log)) throw Error("Invalid response format: missing or invalid log array");
        return B.data
    } catch (B) {
        if (GQ.isAxiosError(B)) {
            let G = B.response ? `HTTP TextComponent{B.response.status}: TextComponent{B.response.statusText}` : B.message;
            throw Error(`Failed to fetch conversation from remote: TextComponent{G}`)
        }
        throw B
    }
}
async function qi(A, Q) {
    try {
        let B = null,
            G = null,
            Z;
        if (A === void 0) B = await wI2(0);
        else if (Q) {
            G = [];
            for (let Y of await ss(Q)) {
                if (Y.type === "assistant" || Y.type === "user") {
                    let J = CK5(Y);
                    if (J) G.push(J)
                }
                Z = Y.session_id
            }
        } else if (typeof A === "string") B = await $I2(A), Z = A;
        else B = A;
        if (!B && !G) return null;
        if (B) {
            if (_21(B), s01(B), D91(B), !Z) Z = B.messages.find((Y) => Y.sessionId)?.sessionId;
            G = B.messages
        }
        G = jMA(G);
        let I = await zq("resume", Z);
        return G.push(...I), {
            messages: G,
            fileHistorySnapshots: B?.fileHistorySnapshots,
            sessionId: Z
        }
    } catch (B) {
        throw e(B), B
    }
}

function CK5(A) {
    if (A.type === "assistant") return {
        type: A.type,
        message: A.message,
        uuid: EI2(),
        timestamp: new Date().toISOString(),
        requestId: void 0
    };
    else if (A.type === "user") return {
        type: A.type,
        message: A.message,
        uuid: EI2(),
        timestamp: new Date().toISOString()
    };
    return
}
var wYA = lazyLoader(() => {
    u1();
    GG();
    nQ();
    Ei();
    _E();
    zV();
    w3();
    q1A();
    iU()
});

function qI2({
    isDisabled: A = !1,
    visibleOptionCount: Q = 5,
    options: B,
    defaultValue: G = [],
    onChange: Z,
    onCancel: I,
    onFocus: Y,
    focusValue: J,
    submitButtonText: W,
    onSubmit: X
}) {
    let [F, V] = T1A.useState(G), [K, D] = T1A.useState(!1), [H, C] = T1A.useState(() => {
        let N = new Map;
        return B.forEach((q) => {
            if (q.type === "input" && q.initialValue) N.set(q.value, q.initialValue)
        }), N
    }), E = T1A.useCallback((N) => {
        let q = typeof N === "function" ? N(F) : N;
        V(q), Z?.(q)
    }, [F, Z]), z = qrA({
        visibleOptionCount: Q,
        options: B,
        initialFocusValue: void 0,
        onFocus: Y,
        focusValue: J
    }), w = T1A.useCallback((N, q) => {
        C((P) => {
            let y = new Map(P);
            return y.set(N, q), y
        });
        let R = B.find((P) => P.value === N);
        if (R && R.type === "input") R.onChange(q);
        E((P) => {
            if (q) {
                if (!P.includes(N)) return [...P, N];
                return P
            } else return P.filter((y) => y !== N)
        })
    }, [B, E]);
    return h1((N, q) => {
        let P = B.find((v) => v.value === z.focusedValue)?.type === "input";
        if (P) {
            if (!(q.upArrow || q.downArrow || q.escape || q.tab || q.return || q.ctrl && (N === "n" || N === "p" || q.return))) return
        }
        let y = B[B.length - 1]?.value;
        if (q.tab && !q.shift) {
            if (W && X && z.focusedValue === y && !K) D(!0);
            else if (!K) z.focusNextOption();
            return
        }
        if (q.tab && q.shift) {
            if (W && X && K) D(!1), z.focusOption(y);
            else z.focusPreviousOption();
            return
        }
        if (q.downArrow || q.ctrl && N === "n" || !q.ctrl && !q.shift && N === "j") {
            if (W && X && z.focusedValue === y && !K) D(!0);
            else if (!K) z.focusNextOption();
            return
        }
        if (q.upArrow || q.ctrl && N === "p" || !q.ctrl && !q.shift && N === "k") {
            if (W && X && K) D(!1), z.focusOption(y);
            else z.focusPreviousOption();
            return
        }
        if (q.pageDown) {
            z.focusNextPage();
            return
        }
        if (q.pageUp) {
            z.focusPreviousPage();
            return
        }
        if (q.return || N === " ") {
            if (q.ctrl && q.return && P && X) {
                X();
                return
            }
            if (K && X) {
                X();
                return
            }
            if (z.focusedValue !== void 0) {
                let v = F.includes(z.focusedValue) ? F.filter((x) => x !== z.focusedValue) : [...F, z.focusedValue];
                E(v)
            }
            return
        }
        if (/^[0-9]+TextComponent/.test(N)) {
            let v = parseInt(N) - 1;
            if (v >= 0 && v < B.length) {
                let x = B[v].value,
                    p = F.includes(x) ? F.filter((u) => u !== x) : [...F, x];
                E(p)
            }
            return
        }
        if (q.escape) I()
    }, {
        isActive: !A
    }), {
        ...z,
        selectedValues: F,
        inputValues: H,
        isSubmitFocused: K,
        updateInputValue: w,
        onCancel: I
    }
}
var T1A;
var NI2 = lazyLoader(() => {
    hA();
    Gd1();
    T1A = esmImport(VA(), 1)
});

function p00({
    isDisabled: A = !1,
    visibleOptionCount: Q = 5,
    options: B,
    defaultValue: G = [],
    onCancel: Z,
    onChange: I,
    onFocus: Y,
    focusValue: J,
    submitButtonText: W,
    onSubmit: X
}) {
    let F = qI2({
            isDisabled: A,
            visibleOptionCount: Q,
            options: B,
            defaultValue: G,
            onChange: I,
            onCancel: Z,
            onFocus: Y,
            focusValue: J,
            submitButtonText: W,
            onSubmit: X
        }),
        V = B.length.toString().length;
    return tH.default.createElement(j, {
        flexDirection: "column"
    }, tH.default.createElement(j, {
        flexDirection: "column"
    }, F.visibleOptions.map((K, D) => {
        let H = F.focusedValue === K.value && !F.isSubmitFocused,
            C = F.selectedValues.includes(K.value),
            E = K.index === F.visibleFromIndex,
            z = K.index === F.visibleToIndex - 1,
            w = F.visibleToIndex < B.length,
            N = F.visibleFromIndex > 0,
            q = F.visibleFromIndex + D + 1;
        if (K.type === "input") {
            let R = F.inputValues.get(K.value) || "";
            return tH.default.createElement(j, {
                key: String(K.value),
                gap: 1
            }, tH.default.createElement(qGA, {
                option: K,
                isFocused: H,
                isSelected: !1,
                shouldShowDownArrow: w && z,
                shouldShowUpArrow: N && E,
                maxIndexWidth: V,
                index: q,
                inputValue: R,
                onInputChange: (P) => {
                    F.updateInputValue(K.value, P)
                },
                onSubmit: () => {},
                onExit: () => {
                    Z()
                },
                layout: "compact"
            }, tH.default.createElement(TextComponent, {
                color: C ? "success" : void 0
            }, "[", C ? V1.tick : " ", "]", " ")))
        }
        return tH.default.createElement(j, {
            key: String(K.value),
            gap: 1
        }, tH.default.createElement(wp, {
            isFocused: H,
            isSelected: !1,
            shouldShowDownArrow: w && z,
            shouldShowUpArrow: N && E,
            description: K.description
        }, tH.default.createElement(TextComponent, null, oA.dim(`TextComponent{q}.`.padEnd(V))), tH.default.createElement(TextComponent, {
            color: C ? "success" : void 0
        }, "[", C ? V1.tick : " ", "]"), tH.default.createElement(TextComponent, {
            color: H ? "suggestion" : void 0
        }, K.label)))
    })), W && X && tH.default.createElement(j, {
        marginTop: 0,
        gap: 1
    }, F.isSubmitFocused ? tH.default.createElement(TextComponent, {
        color: "suggestion"
    }, V1.pointer) : tH.default.createElement(TextComponent, null, " "), tH.default.createElement(j, {
        marginLeft: 3
    }, tH.default.createElement(TextComponent, {
        color: F.isSubmitFocused ? "suggestion" : void 0,
        bold: !0
    }, W))))
}
var tH;
var LI2 = lazyLoader(() => {
    J9();
    n2();
    hA();
    pd1();
    $rA();
    NI2();
    tH = esmImport(VA(), 1)
});
var T6 = lazyLoader(() => {
    T5();
    LI2()
});
import * as MI2 from "http";
class l00 {
    localServer;
    port = 0;
    promiseResolver = null;
    promiseRejecter = null;
    expectedState = null;
    pendingResponse = null;
    callbackPath;
    constructor(A = "/callback") {
        this.localServer = MI2.createServer(), this.callbackPath = A
    }
    async start(A) {
        return new Promise((Q, B) => {
            this.localServer.once("error", (G) => {
                B(Error(`Failed to start OAuth callback server: TextComponent{G.message}`))
            }), this.localServer.listen(A ?? 0, "localhost", () => {
                let G = this.localServer.address();
                this.port = G.port, Q(this.port)
            })
        })
    }
    getPort() {
        return this.port
    }
    hasPendingResponse() {
        return this.pendingResponse !== null
    }
    async waitForAuthorization(A, Q) {
        return new Promise((B, G) => {
            this.promiseResolver = B, this.promiseRejecter = G, this.expectedState = A, this.startLocalListener(Q)
        })
    }
    handleSuccessRedirect(A, Q) {
        if (!this.pendingResponse) return;
        if (Q) {
            Q(this.pendingResponse, A), this.pendingResponse = null, BA("tengu_oauth_automatic_redirect", {
                custom_handler: !0
            });
            return
        }
        let B = Xv(A) ? getConfig().CLAUDEAI_SUCCESS_URL : getConfig().CONSOLE_SUCCESS_URL;
        this.pendingResponse.writeHead(302, {
            Location: B
        }), this.pendingResponse.end(), this.pendingResponse = null, BA("tengu_oauth_automatic_redirect", {})
    }
    handleErrorRedirect() {
        if (!this.pendingResponse) return;
        let A = getConfig().CLAUDEAI_SUCCESS_URL;
        this.pendingResponse.writeHead(302, {
            Location: A
        }), this.pendingResponse.end(), this.pendingResponse = null, BA("tengu_oauth_automatic_redirect_error", {})
    }
    startLocalListener(A) {
        this.localServer.on("request", this.handleRedirect.bind(this)), this.localServer.on("error", this.handleError.bind(this)), A()
    }
    handleRedirect(A, Q) {
        let B = new URL(A.url || "", `http://TextComponent{A.headers.host||"localhost"}`);
        if (B.pathname !== this.callbackPath) {
            Q.writeHead(404), Q.end();
            return
        }
        let G = B.searchParams.get("code") ?? void 0,
            Z = B.searchParams.get("state") ?? void 0;
        this.validateAndRespond(G, Z, Q)
    }
    validateAndRespond(A, Q, B) {
        if (!A) {
            B.writeHead(400), B.end("Authorization code not found"), this.reject(Error("No authorization code received"));
            return
        }
        if (Q !== this.expectedState) {
            B.writeHead(400), B.end("Invalid state parameter"), this.reject(Error("Invalid state parameter"));
            return
        }
        this.pendingResponse = B, this.resolve(A)
    }
    handleError(A) {
        e(A), this.close(), this.reject(A)
    }
    resolve(A) {
        if (this.promiseResolver) this.promiseResolver(A), this.promiseResolver = null, this.promiseRejecter = null
    }
    reject(A) {
        if (this.promiseRejecter) this.promiseRejecter(A), this.promiseResolver = null, this.promiseRejecter = null
    }
    close() {
        if (this.pendingResponse) this.handleErrorRedirect();
        if (this.localServer) this.localServer.removeAllListeners(), this.localServer.close()
    }
}
var OI2 = lazyLoader(() => {
    EX();
    u1();
    w0();
    pN()
});
import * as SMA from "crypto";

function i00(A) {
    return A.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}

function RI2() {
    return i00(SMA.randomBytes(32))
}

function TI2(A) {
    let Q = SMA.createHash("sha256");
    return Q.update(A), i00(Q.digest())
}

function PI2() {
    return i00(SMA.randomBytes(32))
}
var jI2 = () => {};
async function qYA() {
    try {
        let A = VI();
        if (A.error) return g(`Failed to get auth headers: TextComponent{A.error}`), null;
        return (await GQ.get(`TextComponent{getConfig().BASE_API_URL}/api/oauth/account/settings`, {
            headers: {
                ...A.headers,
                "User-Agent": MF()
            }
        })).data
    } catch (A) {
        return e(A), null
    }
}
async function n00() {
    try {
        let A = VI();
        if (A.error) return;
        await GQ.post(`TextComponent{getConfig().BASE_API_URL}/api/oauth/account/grove_notice_viewed`, {}, {
            headers: {
                ...A.headers,
                "User-Agent": MF()
            }
        })
    } catch (A) {
        e(A)
    }
}
async function C91(A) {
    try {
        let Q = VI();
        if (Q.error) {
            g(`Failed to get auth headers: TextComponent{Q.error}`);
            return
        }
        await GQ.patch(`TextComponent{getConfig().BASE_API_URL}/api/oauth/account/settings`, {
            grove_enabled: A
        }, {
            headers: {
                ...Q.headers,
                "User-Agent": MF()
            }
        })
    } catch (Q) {
        e(Q)
    }
}
async function NYA() {
    if (!UlA()) return !1;
    let A = await Ni();
    return A !== null && A.grove_enabled
}
var Ni;
var LYA = lazyLoader(() => {
    w3();
    XE();
    u1();
    EX();
    D0();
    hB();
    o2();
    Ni = t1(async () => {
        try {
            let A = VI();
            if (A.error) return g(`Failed to get auth headers: TextComponent{A.error}`), null;
            let Q = await GQ.get(`TextComponent{getConfig().BASE_API_URL}/api/claude_code_grove`, {
                    headers: {
                        ...A.headers,
                        "User-Agent": Wp()
                    }
                }),
                {
                    grove_enabled: B,
                    domain_excluded: G,
                    notice_is_grace_period: Z,
                    notice_reminder_frequency: I
                } = Q.data;
            return {
                grove_enabled: B,
                domain_excluded: G ?? !1,
                notice_is_grace_period: Z ?? !0,
                notice_reminder_frequency: I
            }
        } catch (A) {
            return g(`Failed to fetch Grove notice config: TextComponent{A}`), null
        }
    })
});
var E91 = moduleWrapper((SI2) => {
    Object.defineProperty(SI2, "__esModule", {
        value: !0
    });
    SI2.AggregationTemporality = void 0;
    var zK5;
    (function(A) {
        A[A.DELTA = 0] = "DELTA", A[A.CUMULATIVE = 1] = "CUMULATIVE"
    })(zK5 = SI2.AggregationTemporality || (SI2.AggregationTemporality = {}))
});
var Li = moduleWrapper((kI2) => {
    Object.defineProperty(kI2, "__esModule", {
        value: !0
    });
    kI2.DataPointType = kI2.InstrumentType = void 0;
    var UK5;
    (function(A) {
        A.COUNTER = "COUNTER", A.GAUGE = "GAUGE", A.HISTOGRAM = "HISTOGRAM", A.UP_DOWN_COUNTER = "UP_DOWN_COUNTER", A.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER", A.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE", A.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER"
    })(UK5 = kI2.InstrumentType || (kI2.InstrumentType = {}));
    var $K5;
    (function(A) {
        A[A.HISTOGRAM = 0] = "HISTOGRAM", A[A.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", A[A.GAUGE = 2] = "GAUGE", A[A.SUM = 3] = "SUM"
    })($K5 = kI2.DataPointType || (kI2.DataPointType = {}))
});
var GP = moduleWrapper((yI2) => {
    Object.defineProperty(yI2, "__esModule", {
        value: !0
    });
    yI2.equalsCaseInsensitive = yI2.binarySearchUB = yI2.setEquals = yI2.FlatMap = yI2.isPromiseAllSettledRejectionResult = yI2.PromiseAllSettled = yI2.callWithTimeout = yI2.TimeoutError = yI2.instrumentationScopeId = yI2.hashAttributes = yI2.isNotNullish = void 0;

    function wK5(A) {
        return A !== void 0 && A !== null
    }
    yI2.isNotNullish = wK5;

    function qK5(A) {
        let Q = Object.keys(A);
        if (Q.length === 0) return "";
        return Q = Q.sort(), JSON.stringify(Q.map((B) => [B, A[B]]))
    }
    yI2.hashAttributes = qK5;

    function NK5(A) {
        return `TextComponent{A.name}:TextComponent{A.version??""}:TextComponent{A.schemaUrl??""}`
    }
    yI2.instrumentationScopeId = NK5;
    class z91 extends Error {
        constructor(A) {
            super(A);
            Object.setPrototypeOf(this, z91.prototype)
        }
    }
    yI2.TimeoutError = z91;

    function LK5(A, Q) {
        let B, G = new Promise(function(I, Y) {
            B = setTimeout(function() {
                Y(new z91("Operation timed out."))
            }, Q)
        });
        return Promise.race([A, G]).then((Z) => {
            return clearTimeout(B), Z
        }, (Z) => {
            throw clearTimeout(B), Z
        })
    }
    yI2.callWithTimeout = LK5;
    async function MK5(A) {
        return Promise.all(A.map(async (Q) => {
            try {
                return {
                    status: "fulfilled",
                    value: await Q
                }
            } catch (B) {
                return {
                    status: "rejected",
                    reason: B
                }
            }
        }))
    }
    yI2.PromiseAllSettled = MK5;

    function OK5(A) {
        return A.status === "rejected"
    }
    yI2.isPromiseAllSettledRejectionResult = OK5;

    function RK5(A, Q) {
        let B = [];
        return A.forEach((G) => {
            B.push(...Q(G))
        }), B
    }
    yI2.FlatMap = RK5;

    function TK5(A, Q) {
        if (A.size !== Q.size) return !1;
        for (let B of A)
            if (!Q.has(B)) return !1;
        return !0
    }
    yI2.setEquals = TK5;

    function PK5(A, Q) {
        let B = 0,
            G = A.length - 1,
            Z = A.length;
        while (G >= B) {
            let I = B + Math.trunc((G - B) / 2);
            if (A[I] < Q) B = I + 1;
            else Z = I, G = I - 1
        }
        return Z
    }
    yI2.binarySearchUB = PK5;

    function jK5(A, Q) {
        return A.toLowerCase() === Q.toLowerCase()
    }
    yI2.equalsCaseInsensitive = jK5
});
var MYA = moduleWrapper((vI2) => {
    Object.defineProperty(vI2, "__esModule", {
        value: !0
    });
    vI2.AggregatorKind = void 0;
    var uK5;
    (function(A) {
        A[A.DROP = 0] = "DROP", A[A.SUM = 1] = "SUM", A[A.LAST_VALUE = 2] = "LAST_VALUE", A[A.HISTOGRAM = 3] = "HISTOGRAM", A[A.EXPONENTIAL_HISTOGRAM = 4] = "EXPONENTIAL_HISTOGRAM"
    })(uK5 = vI2.AggregatorKind || (vI2.AggregatorKind = {}))
});
var gI2 = moduleWrapper((fI2) => {
    Object.defineProperty(fI2, "__esModule", {
        value: !0
    });
    fI2.DropAggregator = void 0;
    var mK5 = MYA();
    class bI2 {
        kind = mK5.AggregatorKind.DROP;
        createAccumulation() {
            return
        }
        merge(A, Q) {
            return
        }
        diff(A, Q) {
            return
        }
        toMetricData(A, Q, B, G) {
            return
        }
    }
    fI2.DropAggregator = bI2
});
var cI2 = moduleWrapper((mI2) => {
    Object.defineProperty(mI2, "__esModule", {
        value: !0
    });
    mI2.HistogramAggregator = mI2.HistogramAccumulation = void 0;
    var dK5 = MYA(),
        _MA = Li(),
        cK5 = GP();

    function pK5(A) {
        let Q = A.map(() => 0);
        return Q.push(0), {
            buckets: {
                boundaries: A,
                counts: Q
            },
            sum: 0,
            count: 0,
            hasMinMax: !1,
            min: 1 / 0,
            max: -1 / 0
        }
    }
    class kMA {
        startTime;
        _boundaries;
        _recordMinMax;
        _current;
        constructor(A, Q, B = !0, G = pK5(Q)) {
            this.startTime = A, this._boundaries = Q, this._recordMinMax = B, this._current = G
        }
        record(A) {
            if (Number.isNaN(A)) return;
            if (this._current.count += 1, this._current.sum += A, this._recordMinMax) this._current.min = Math.min(A, this._current.min), this._current.max = Math.max(A, this._current.max), this._current.hasMinMax = !0;
            let Q = (0, cK5.binarySearchUB)(this._boundaries, A);
            this._current.buckets.counts[Q] += 1
        }
        setStartTime(A) {
            this.startTime = A
        }
        toPointValue() {
            return this._current
        }
    }
    mI2.HistogramAccumulation = kMA;
    class uI2 {
        _boundaries;
        _recordMinMax;
        kind = dK5.AggregatorKind.HISTOGRAM;
        constructor(A, Q) {
            this._boundaries = A, this._recordMinMax = Q
        }
        createAccumulation(A) {
            return new kMA(A, this._boundaries, this._recordMinMax)
        }
        merge(A, Q) {
            let B = A.toPointValue(),
                G = Q.toPointValue(),
                Z = B.buckets.counts,
                I = G.buckets.counts,
                Y = Array(Z.length);
            for (let X = 0; X < Z.length; X++) Y[X] = Z[X] + I[X];
            let J = 1 / 0,
                W = -1 / 0;
            if (this._recordMinMax) {
                if (B.hasMinMax && G.hasMinMax) J = Math.min(B.min, G.min), W = Math.max(B.max, G.max);
                else if (B.hasMinMax) J = B.min, W = B.max;
                else if (G.hasMinMax) J = G.min, W = G.max
            }
            return new kMA(A.startTime, B.buckets.boundaries, this._recordMinMax, {
                buckets: {
                    boundaries: B.buckets.boundaries,
                    counts: Y
                },
                count: B.count + G.count,
                sum: B.sum + G.sum,
                hasMinMax: this._recordMinMax && (B.hasMinMax || G.hasMinMax),
                min: J,
                max: W
            })
        }
        diff(A, Q) {
            let B = A.toPointValue(),
                G = Q.toPointValue(),
                Z = B.buckets.counts,
                I = G.buckets.counts,
                Y = Array(Z.length);
            for (let J = 0; J < Z.length; J++) Y[J] = I[J] - Z[J];
            return new kMA(Q.startTime, B.buckets.boundaries, this._recordMinMax, {
                buckets: {
                    boundaries: B.buckets.boundaries,
                    counts: Y
                },
                count: G.count - B.count,
                sum: G.sum - B.sum,
                hasMinMax: !1,
                min: 1 / 0,
                max: -1 / 0
            })
        }
        toMetricData(A, Q, B, G) {
            return {
                descriptor: A,
                aggregationTemporality: Q,
                dataPointType: _MA.DataPointType.HISTOGRAM,
                dataPoints: B.map(([Z, I]) => {
                    let Y = I.toPointValue(),
                        J = A.type === _MA.InstrumentType.GAUGE || A.type === _MA.InstrumentType.UP_DOWN_COUNTER || A.type === _MA.InstrumentType.OBSERVABLE_GAUGE || A.type === _MA.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
                    return {
                        attributes: Z,
                        startTime: I.startTime,
                        endTime: G,
                        value: {
                            min: Y.hasMinMax ? Y.min : void 0,
                            max: Y.hasMinMax ? Y.max : void 0,
                            sum: !J ? Y.sum : void 0,
                            buckets: Y.buckets,
                            count: Y.count
                        }
                    }
                })
            }
        }
    }
    mI2.HistogramAggregator = uI2
});
var iI2 = moduleWrapper((pI2) => {
    Object.defineProperty(pI2, "__esModule", {
        value: !0
    });
    pI2.Buckets = void 0;
    class o00 {
        backing;
        indexBase;
        indexStart;
        indexEnd;
        constructor(A = new t00, Q = 0, B = 0, G = 0) {
            this.backing = A, this.indexBase = Q, this.indexStart = B, this.indexEnd = G
        }
        get offset() {
            return this.indexStart
        }
        get length() {
            if (this.backing.length === 0) return 0;
            if (this.indexEnd === this.indexStart && this.at(0) === 0) return 0;
            return this.indexEnd - this.indexStart + 1
        }
        counts() {
            return Array.from({
                length: this.length
            }, (A, Q) => this.at(Q))
        }
        at(A) {
            let Q = this.indexBase - this.indexStart;
            if (A < Q) A += this.backing.length;
            return A -= Q, this.backing.countAt(A)
        }
        incrementBucket(A, Q) {
            this.backing.increment(A, Q)
        }
        decrementBucket(A, Q) {
            this.backing.decrement(A, Q)
        }
        trim() {
            for (let A = 0; A < this.length; A++)
                if (this.at(A) !== 0) {
                    this.indexStart += A;
                    break
                } else if (A === this.length - 1) {
                this.indexStart = this.indexEnd = this.indexBase = 0;
                return
            }
            for (let A = this.length - 1; A >= 0; A--)
                if (this.at(A) !== 0) {
                    this.indexEnd -= this.length - A - 1;
                    break
                } this._rotate()
        }
        downscale(A) {
            this._rotate();
            let Q = 1 + this.indexEnd - this.indexStart,
                B = 1 << A,
                G = 0,
                Z = 0;
            for (let I = this.indexStart; I <= this.indexEnd;) {
                let Y = I % B;
                if (Y < 0) Y += B;
                for (let J = Y; J < B && G < Q; J++) this._relocateBucket(Z, G), G++, I++;
                Z++
            }
            this.indexStart >>= A, this.indexEnd >>= A, this.indexBase = this.indexStart
        }
        clone() {
            return new o00(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd)
        }
        _rotate() {
            let A = this.indexBase - this.indexStart;
            if (A === 0) return;
            else if (A > 0) this.backing.reverse(0, this.backing.length), this.backing.reverse(0, A), this.backing.reverse(A, this.backing.length);
            else this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + A);
            this.indexBase = this.indexStart
        }
        _relocateBucket(A, Q) {
            if (A === Q) return;
            this.incrementBucket(A, this.backing.emptyBucket(Q))
        }
    }
    pI2.Buckets = o00;
    class t00 {
        _counts;
        constructor(A = [0]) {
            this._counts = A
        }
        get length() {
            return this._counts.length
        }
        countAt(A) {
            return this._counts[A]
        }
        growTo(A, Q, B) {
            let G = Array(A).fill(0);
            G.splice(B, this._counts.length - Q, ...this._counts.slice(Q)), G.splice(0, Q, ...this._counts.slice(0, Q)), this._counts = G
        }
        reverse(A, Q) {
            let B = Math.floor((A + Q) / 2) - A;
            for (let G = 0; G < B; G++) {
                let Z = this._counts[A + G];
                this._counts[A + G] = this._counts[Q - G - 1], this._counts[Q - G - 1] = Z
            }
        }
        emptyBucket(A) {
            let Q = this._counts[A];
            return this._counts[A] = 0, Q
        }
        increment(A, Q) {
            this._counts[A] += Q
        }
        decrement(A, Q) {
            if (this._counts[A] >= Q) this._counts[A] -= Q;
            else this._counts[A] = 0
        }
        clone() {
            return new t00([...this._counts])
        }
    }
});
var AQ0 = moduleWrapper((nI2) => {
    Object.defineProperty(nI2, "__esModule", {
        value: !0
    });
    nI2.getSignificand = nI2.getNormalBase2 = nI2.MIN_VALUE = nI2.MAX_NORMAL_EXPONENT = nI2.MIN_NORMAL_EXPONENT = nI2.SIGNIFICAND_WIDTH = void 0;
    nI2.SIGNIFICAND_WIDTH = 52;
    var iK5 = 2146435072,
        nK5 = 1048575,
        e00 = 1023;
    nI2.MIN_NORMAL_EXPONENT = -e00 + 1;
    nI2.MAX_NORMAL_EXPONENT = e00;
    nI2.MIN_VALUE = Math.pow(2, -1022);

    function aK5(A) {
        let Q = new DataView(new ArrayBuffer(8));
        return Q.setFloat64(0, A), ((Q.getUint32(0) & iK5) >> 20) - e00
    }
    nI2.getNormalBase2 = aK5;

    function sK5(A) {
        let Q = new DataView(new ArrayBuffer(8));
        Q.setFloat64(0, A);
        let B = Q.getUint32(0),
            G = Q.getUint32(4);
        return (B & nK5) * Math.pow(2, 32) + G
    }
    nI2.getSignificand = sK5
});
var U91 = moduleWrapper((sI2) => {
    Object.defineProperty(sI2, "__esModule", {
        value: !0
    });
    sI2.nextGreaterSquare = sI2.ldexp = void 0;

    function QD5(A, Q) {
        if (A === 0 || A === Number.POSITIVE_INFINITY || A === Number.NEGATIVE_INFINITY || Number.isNaN(A)) return A;
        return A * Math.pow(2, Q)
    }
    sI2.ldexp = QD5;

    function BD5(A) {
        return A--, A |= A >> 1, A |= A >> 2, A |= A >> 4, A |= A >> 8, A |= A >> 16, A++, A
    }
    sI2.nextGreaterSquare = BD5
});
var $91 = moduleWrapper((tI2) => {
    Object.defineProperty(tI2, "__esModule", {
        value: !0
    });
    tI2.MappingError = void 0;
    class oI2 extends Error {}
    tI2.MappingError = oI2
});
var ZY2 = moduleWrapper((BY2) => {
    Object.defineProperty(BY2, "__esModule", {
        value: !0
    });
    BY2.ExponentMapping = void 0;
    var OYA = AQ0(),
        ZD5 = U91(),
        AY2 = $91();
    class QY2 {
        _shift;
        constructor(A) {
            this._shift = -A
        }
        mapToIndex(A) {
            if (A < OYA.MIN_VALUE) return this._minNormalLowerBoundaryIndex();
            let Q = OYA.getNormalBase2(A),
                B = this._rightShift(OYA.getSignificand(A) - 1, OYA.SIGNIFICAND_WIDTH);
            return Q + B >> this._shift
        }
        lowerBoundary(A) {
            let Q = this._minNormalLowerBoundaryIndex();
            if (A < Q) throw new AY2.MappingError(`underflow: TextComponent{A} is < minimum lower boundary: TextComponent{Q}`);
            let B = this._maxNormalLowerBoundaryIndex();
            if (A > B) throw new AY2.MappingError(`overflow: TextComponent{A} is > maximum lower boundary: TextComponent{B}`);
            return ZD5.ldexp(1, A << this._shift)
        }
        get scale() {
            if (this._shift === 0) return 0;
            return -this._shift
        }
        _minNormalLowerBoundaryIndex() {
            let A = OYA.MIN_NORMAL_EXPONENT >> this._shift;
            if (this._shift < 2) A--;
            return A
        }
        _maxNormalLowerBoundaryIndex() {
            return OYA.MAX_NORMAL_EXPONENT >> this._shift
        }
        _rightShift(A, Q) {
            return Math.floor(A * Math.pow(2, -Q))
        }
    }
    BY2.ExponentMapping = QY2
});
var FY2 = moduleWrapper((WY2) => {
    Object.defineProperty(WY2, "__esModule", {
        value: !0
    });
    WY2.LogarithmMapping = void 0;
    var RYA = AQ0(),
        IY2 = U91(),
        YY2 = $91();
    class JY2 {
        _scale;
        _scaleFactor;
        _inverseFactor;
        constructor(A) {
            this._scale = A, this._scaleFactor = IY2.ldexp(Math.LOG2E, A), this._inverseFactor = IY2.ldexp(Math.LN2, -A)
        }
        mapToIndex(A) {
            if (A <= RYA.MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
            if (RYA.getSignificand(A) === 0) return (RYA.getNormalBase2(A) << this._scale) - 1;
            let Q = Math.floor(Math.log(A) * this._scaleFactor),
                B = this._maxNormalLowerBoundaryIndex();
            if (Q >= B) return B;
            return Q
        }
        lowerBoundary(A) {
            let Q = this._maxNormalLowerBoundaryIndex();
            if (A >= Q) {
                if (A === Q) return 2 * Math.exp((A - (1 << this._scale)) / this._scaleFactor);
                throw new YY2.MappingError(`overflow: TextComponent{A} is > maximum lower boundary: TextComponent{Q}`)
            }
            let B = this._minNormalLowerBoundaryIndex();
            if (A <= B) {
                if (A === B) return RYA.MIN_VALUE;
                else if (A === B - 1) return Math.exp((A + (1 << this._scale)) / this._scaleFactor) / 2;
                throw new YY2.MappingError(`overflow: TextComponent{A} is < minimum lower boundary: TextComponent{B}`)
            }
            return Math.exp(A * this._inverseFactor)
        }
        get scale() {
            return this._scale
        }
        _minNormalLowerBoundaryIndex() {
            return RYA.MIN_NORMAL_EXPONENT << this._scale
        }
        _maxNormalLowerBoundaryIndex() {
            return (RYA.MAX_NORMAL_EXPONENT + 1 << this._scale) - 1
        }
    }
    WY2.LogarithmMapping = JY2
});
var CY2 = moduleWrapper((DY2) => {
    Object.defineProperty(DY2, "__esModule", {
        value: !0
    });
    DY2.getMapping = void 0;
    var ID5 = ZY2(),
        YD5 = FY2(),
        JD5 = $91(),
        VY2 = -10,
        KY2 = 20,
        WD5 = Array.from({
            length: 31
        }, (A, Q) => {
            if (Q > 10) return new YD5.LogarithmMapping(Q - 10);
            return new ID5.ExponentMapping(Q - 10)
        });

    function XD5(A) {
        if (A > KY2 || A < VY2) throw new JD5.MappingError(`expected scale >= TextComponent{VY2} && <= TextComponent{KY2}, got: TextComponent{A}`);
        return WD5[A + 10]
    }
    DY2.getMapping = XD5
});
var qY2 = moduleWrapper(($Y2) => {
    Object.defineProperty($Y2, "__esModule", {
        value: !0
    });
    $Y2.ExponentialHistogramAggregator = $Y2.ExponentialHistogramAccumulation = void 0;
    var FD5 = MYA(),
        yMA = Li(),
        VD5 = W9(),
        EY2 = iI2(),
        zY2 = CY2(),
        KD5 = U91();
    class TYA {
        low;
        high;
        static combine(A, Q) {
            return new TYA(Math.min(A.low, Q.low), Math.max(A.high, Q.high))
        }
        constructor(A, Q) {
            this.low = A, this.high = Q
        }
    }
    var DD5 = 20,
        HD5 = 160,
        QQ0 = 2;
    class w91 {
        startTime;
        _maxSize;
        _recordMinMax;
        _sum;
        _count;
        _zeroCount;
        _min;
        _max;
        _positive;
        _negative;
        _mapping;
        constructor(A, Q = HD5, B = !0, G = 0, Z = 0, I = 0, Y = Number.POSITIVE_INFINITY, J = Number.NEGATIVE_INFINITY, W = new EY2.Buckets, X = new EY2.Buckets, F = (0, zY2.getMapping)(DD5)) {
            if (this.startTime = A, this._maxSize = Q, this._recordMinMax = B, this._sum = G, this._count = Z, this._zeroCount = I, this._min = Y, this._max = J, this._positive = W, this._negative = X, this._mapping = F, this._maxSize < QQ0) VD5.diag.warn(`Exponential Histogram Max Size set to TextComponent{this._maxSize},                 changing to the minimum size of: TextComponent{QQ0}`), this._maxSize = QQ0
        }
        record(A) {
            this.updateByIncrement(A, 1)
        }
        setStartTime(A) {
            this.startTime = A
        }
        toPointValue() {
            return {
                hasMinMax: this._recordMinMax,
                min: this.min,
                max: this.max,
                sum: this.sum,
                positive: {
                    offset: this.positive.offset,
                    bucketCounts: this.positive.counts()
                },
                negative: {
                    offset: this.negative.offset,
                    bucketCounts: this.negative.counts()
                },
                count: this.count,
                scale: this.scale,
                zeroCount: this.zeroCount
            }
        }
        get sum() {
            return this._sum
        }
        get min() {
            return this._min
        }
        get max() {
            return this._max
        }
        get count() {
            return this._count
        }
        get zeroCount() {
            return this._zeroCount
        }
        get scale() {
            if (this._count === this._zeroCount) return 0;
            return this._mapping.scale
        }
        get positive() {
            return this._positive
        }
        get negative() {
            return this._negative
        }
        updateByIncrement(A, Q) {
            if (Number.isNaN(A)) return;
            if (A > this._max) this._max = A;
            if (A < this._min) this._min = A;
            if (this._count += Q, A === 0) {
                this._zeroCount += Q;
                return
            }
            if (this._sum += A * Q, A > 0) this._updateBuckets(this._positive, A, Q);
            else this._updateBuckets(this._negative, -A, Q)
        }
        merge(A) {
            if (this._count === 0) this._min = A.min, this._max = A.max;
            else if (A.count !== 0) {
                if (A.min < this.min) this._min = A.min;