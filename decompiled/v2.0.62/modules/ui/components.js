/**
 * Claude Code v2.0.62 - UI 组件
 *
 * 原始位置: 行 360001 - 375000
 * 模块: ui/components
 */

                K.slice(D, D + F).map((Q1, J1) => {
                  let R1 = D + J1,
                    s1 = R1 === H,
                    Z0 = Q1.uuid === V,
                    _0 = R1 in m,
                    D0 = m[R1],
                    C1 = D0?.filesChanged && D0.filesChanged.length,
                    g1 = I.checkpointing.autocheckpointEnabled && !o && !X;
                  return S0.createElement(
                    y,
                    { key: Q1.uuid, height: X ? 3 : 2, overflow: "hidden", width: "100%", flexDirection: "row" },
                    S0.createElement(
                      y,
                      { width: 3, minWidth: 3 },
                      s1
                        ? S0.createElement(M, { color: "permission", bold: !0 }, t0.pointer, " ")
                        : S0.createElement(M, null, "  "),
                    ),
                    S0.createElement(
                      y,
                      { flexDirection: "column" },
                      S0.createElement(
                        y,
                        { flexShrink: 1, height: 1, overflow: "hidden" },
                        S0.createElement(YNB, {
                          userMessage: Q1,
                          color: s1 ? "suggestion" : void 0,
                          isCurrent: Z0,
                          paddingRight: g1 ? 20 : 10,
                        }),
                      ),
                      X &&
                        _0 &&
                        S0.createElement(
                          y,
                          { height: 1 },
                          D0
                            ? S0.createElement(
                                S0.Fragment,
                                null,
                                S0.createElement(
                                  M,
                                  { dimColor: !s1, color: "inactive" },
                                  C1
                                    ? S0.createElement(
                                        S0.Fragment,
                                        null,
                                        "⎿  ∆ ",
                                        C1,
                                        " file",
                                        C1 !== 1 ? "s" : " ",
                                        " ",
                                        S0.createElement(cO0, { diffStats: D0 }),
                                      )
                                    : S0.createElement(S0.Fragment, null, "⎿  No code changed"),
                                ),
                              )
                            : S0.createElement(M, { dimColor: !0, color: "warning" }, t0.warning, " No code restore"),
                        ),
                    ),
                    g1 &&
                      S0.createElement(
                        y,
                        {
                          flexShrink: 0,
                          paddingLeft: 4,
                          paddingRight: 0,
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        },
                        _0 &&
                          (D0
                            ? S0.createElement(
                                y,
                                { flexDirection: "row" },
                                S0.createElement(
                                  S0.Fragment,
                                  null,
                                  S0.createElement(M, { color: "diffAddedWordDimmed" }, "+", D0.insertions, " "),
                                  S0.createElement(M, { color: "diffRemovedWordDimmed" }, "-", D0.deletions, " "),
                                ),
                              )
                            : S0.createElement(
                                M,
                                { dimColor: !0, color: "warning" },
                                t0.warning,
                                " No code checkpoint",
                              )),
                      ),
                  );
                }),
                I.checkpointing.autocheckpointEnabled &&
                  o &&
                  !X &&
                  S0.createElement(
                    S0.Fragment,
                    null,
                    S0.createElement(
                      y,
                      { justifyContent: "flex-end" },
                      S0.createElement(
                        M,
                        { color: "warning" },
                        t0.warning,
                        " Code checkpointing disabled",
                        " ",
                        S0.createElement(M, { dimColor: !0 }, "· use ", "'/checkpoint fix'"),
                      ),
                    ),
                  ),
              ),
            ),
        ),
        S0.createElement(
          y,
          { marginLeft: 3 },
          S0.createElement(
            M,
            { dimColor: !0 },
            d.pending
              ? S0.createElement(S0.Fragment, null, "Press ", d.keyName, " again to exit")
              : S0.createElement(S0.Fragment, null, "↑/↓ to select · Enter to continue · Esc/Tab to cancel"),
          ),
        ),
      ),
  );
}
function uW5({ diffStatsForRestore: A }) {
  if (A === void 0) return;
  if (!A.filesChanged || !A.filesChanged[0])
    return S0.createElement(
      M,
      { dimColor: !0 },
      "The code will be ",
      S0.createElement(M, { bold: !0 }, "restored"),
      ".",
    );
  let B = INB.basename(A.filesChanged[0]);
  if (A.filesChanged.length === 1)
    return S0.createElement(
      M,
      { dimColor: !0 },
      "The code will be restored in ",
      S0.createElement(M, { bold: !0 }, B),
      " ",
      S0.createElement(cO0, { diffStats: A }),
    );
  return S0.createElement(
    M,
    { dimColor: !0 },
    "The code will be restored in",
    " ",
    S0.createElement(M, { bold: !0 }, A.filesChanged.length, " files"),
    " ",
    S0.createElement(cO0, { diffStats: A }),
  );
}
function cO0({ diffStats: A }) {
  return (
    A &&
    S0.createElement(
      S0.Fragment,
      null,
      S0.createElement(M, { color: "diffAddedWord" }, "+", A.insertions),
      " ",
      S0.createElement(M, { color: "diffRemovedWord" }, "-", A.deletions),
    )
  );
}
function YNB({ userMessage: A, color: B, dimColor: Q, isCurrent: Z, paddingRight: G }) {
  let { columns: Y } = IB();
  if (Z)
    return S0.createElement(
      y,
      { width: "100%" },
      S0.createElement(M, { italic: !0, color: B, dimColor: Q }, "(current)"),
    );
  let I = A.message.content,
    W =
      typeof I === "string" ? I.trim() : I[I.length - 1]?.type === "text" ? I[I.length - 1].text.trim() : "(no prompt)";
  if (VI1(W))
    return S0.createElement(
      y,
      { flexDirection: "row", width: "100%" },
      S0.createElement(M, { italic: !0, color: B, dimColor: Q }, "((empty message))"),
    );
  if (W.includes("<bash-input>")) {
    let J = tQ(W, "bash-input");
    if (J)
      return S0.createElement(
        y,
        { flexDirection: "row", width: "100%" },
        S0.createElement(M, { color: "bashBorder" }, "!"),
        S0.createElement(M, { color: B, dimColor: Q }, " ", J),
      );
  }
  if (W.includes("<command-message>")) {
    let J = tQ(W, "command-message"),
      X = tQ(W, "command-args");
    if (J)
      return S0.createElement(
        y,
        { flexDirection: "row", width: "100%" },
        S0.createElement(M, { color: B, dimColor: Q }, "/", J, " ", X),
      );
  }
  return S0.createElement(
    y,
    { flexDirection: "row", width: "100%" },
    S0.createElement(
      M,
      { color: B, dimColor: Q },
      G
        ? pC(W, Y - G, !0)
        : W.slice(0, 500)
            .split(
              `
`,
            )
            .slice(0, 10).join(`
`),
    ),
  );
}
function mW5(A) {
  if (A.type !== "user") return !1;
  if (Array.isArray(A.message.content) && A.message.content[0]?.type === "tool_result") return !1;
  if (XI1(A)) return !1;
  if (A.isMeta) return !1;
  if (typeof A.message.content === "string") {
    let B = A.message.content;
    if (
      B.indexOf("<local-command-stdout>") !== -1 ||
      B.indexOf("<local-command-stderr>") !== -1 ||
      B.indexOf("<bash-stdout>") !== -1 ||
      B.indexOf("<bash-stderr>") !== -1
    )
      return !1;
  }
  return !0;
}
var JNB = A1(V1(), 1);
var dW5 = f.object({
  method: f.literal("log_event"),
  params: f.object({ eventName: f.string(), eventData: f.object({}).passthrough() }),
});
function XNB(A) {
  JNB.useEffect(() => {
    if (!A.length) return;
    let B = vH(A);
    if (B)
      B.client.setNotificationHandler(dW5, async (Q) => {
        let { eventName: Z, eventData: G } = Q.params;
        Y1(`tengu_ide_${Z}`, G);
      });
  }, [A]);
}
var nO0 = A1(V1(), 1);
var rW1 = A1(V1(), 1);
import { basename as ZJ5 } from "path";
var mD = A1(V1(), 1),
  Eg1 = A1(V1(), 1);
import { relative as cW5 } from "path";
function Ng1({ file_path: A, edits: B, verbose: Q, useBorder: Z = !0 }) {
  let G = Eg1.useMemo(() => (w1().existsSync(A) ? qV(A) : ""), [A]),
    Y = Eg1.useMemo(
      () =>
        B.map((W) => {
          let J = xd(G, W.old_string) || W.old_string;
          return { ...W, old_string: J };
        }),
      [G, B],
    ),
    I = Eg1.useMemo(() => RD({ filePath: A, fileContents: G, edits: Y }), [A, G, Y]);
  return mD.createElement(
    y,
    { flexDirection: "column" },
    mD.createElement(
      y,
      { borderDimColor: !0, borderStyle: Z ? "round" : void 0, flexDirection: "column", paddingX: 1 },
      mD.createElement(y, { paddingBottom: 1 }, mD.createElement(M, { bold: !0 }, Q ? A : cW5(AA(), A))),
      VW(
        I.map((W) => mD.createElement(bH, { key: W.newStart, patch: W, dim: !1 })),
        (W) => mD.createElement(M, { dimColor: !0, key: `ellipsis-${W}` }, "..."),
      ),
    ),
  );
}
var cc = A1(V1(), 1);
var sW1 = A1(V1(), 1);
function rH({ title: A }) {
  return sW1.createElement(y, { flexDirection: "column" }, sW1.createElement(M, { bold: !0, color: "permission" }, A));
}
var FNB = A1(V1(), 1);
function JK(A) {
  Y1("tengu_unary_event", {
    event: A.event,
    completion_type: A.completion_type,
    language_name: A.metadata.language_name,
    message_id: A.metadata.message_id,
    platform: A.metadata.platform,
  });
}
function cO(A, B) {
  FNB.useEffect(() => {
    (Y1("tengu_tool_use_show_permission_request", {
      messageID: A.assistantMessage.message.id,
      toolName: A.tool.name,
      isMcp: A.tool.isMcp ?? !1,
      decisionReasonType: A.permissionResult.decisionReason?.type,
    }),
      Promise.resolve(B.language_name).then((Z) => {
        JK({
          completion_type: B.completion_type,
          event: "response",
          metadata: { language_name: Z, message_id: A.assistantMessage.message.id, platform: tA.platform },
        });
      }));
  }, [A, B]);
}
var Mg1 = A1(V1(), 1);
import { basename as lW5 } from "path";
function VNB({ filePath: A, toolPermissionContext: B, operationType: Q = "write" }) {
  let Z = [{ label: "Yes", option: { type: "accept-once" } }],
    G = BE(A, B),
    Y,
    I = n1.bold.dim(`(${rJ.displayText})`);
  if (G)
    if (Q === "read") Y = "Yes, during this session";
    else Y = `Yes, allow all edits during this session ${I}`;
  else {
    let W = xT(A),
      J = lW5(W) || "this directory";
    if (Q === "read") Y = `Yes, allow reading from ${n1.bold(`${J}/`)} during this session`;
    else Y = `Yes, allow all edits in ${n1.bold(`${J}/`)} during this session ${I}`;
  }
  return (
    Z.push({ label: Y, option: { type: "accept-session" } }),
    Z.push({ label: `No, and tell Claude what to do differently ${n1.bold.dim("(esc)")}`, option: { type: "reject" } }),
    Z
  );
}
var pW5 = A1(V1(), 1);
function lO0(A, B, Q, Z) {
  JK({ completion_type: B, event: A, metadata: { language_name: Q, message_id: Z, platform: tA.platform } });
}
function iW5(A) {
  let { messageId: B, toolUseConfirm: Q, onDone: Z, completionType: G, languageName: Y } = A;
  (lO0("accept", G, Y, B), Z(), Q.onAllow(Q.input, []));
}
function nW5(A) {
  let {
    messageId: B,
    path: Q,
    toolUseConfirm: Z,
    toolPermissionContext: G,
    onDone: Y,
    completionType: I,
    languageName: W,
    operationType: J,
  } = A;
  lO0("accept", I, W, B);
  let X = Q ? Lg1(Q, J, G) : [];
  (Y(), Z.onAllow(Z.input, X));
}
function aW5(A) {
  let { messageId: B, toolUseConfirm: Q, onDone: Z, onReject: G, completionType: Y, languageName: I } = A;
  (lO0("reject", Y, I, B), Z(), G(), Q.onReject());
}
var KNB = { "accept-once": iW5, "accept-session": nW5, reject: aW5 };
function HNB({
  filePath: A,
  completionType: B,
  languageName: Q,
  toolUseConfirm: Z,
  onDone: G,
  onReject: Y,
  parseInput: I,
  operationType: W = "write",
}) {
  let [J] = dB(),
    X = J.toolPermissionContext,
    F = Mg1.useMemo(() => VNB({ filePath: A, toolPermissionContext: X, operationType: W }), [A, X, W]),
    V = Mg1.useCallback(
      (K, H) => {
        let z = KNB[K.type];
        if (!z) return;
        let D = {
            messageId: Z.assistantMessage.message.id,
            path: A,
            toolUseConfirm: Z,
            toolPermissionContext: X,
            onDone: G,
            onReject: Y,
            completionType: B,
            languageName: Q,
            operationType: W,
          },
          C = Z.onAllow;
        ((Z.onAllow = (w, E) => {
          C(H, E);
        }),
          z(D));
      },
      [A, B, Q, Z, X, G, Y, W],
    );
  return (
    s0((K, H) => {
      if (rJ.check(K, H)) {
        let z = F.find((D) => D.option.type === "accept-session");
        if (z) {
          let D = I(Z.input);
          V(z.option, D);
        }
      }
    }),
    { options: F, onChange: V }
  );
}
var PS = A1(V1(), 1);
import { randomUUID as sW5 } from "crypto";
import { basename as rW5 } from "path";
function zNB({ onChange: A, toolUseContext: B, filePath: Q, edits: Z, editMode: G }) {
  let Y = PS.useRef(!1),
    [I, W] = PS.useState(!1),
    J = PS.useMemo(() => sW5().slice(0, 6), []),
    X = PS.useMemo(() => `✻ [Claude Code] ${rW5(Q)} (${J}) ⧉`, [Q, J]),
    F = Dv1(B.options.mcpClients) && H0().diffTool === "auto" && !Q.endsWith(".ipynb"),
    V = Uv1(B.options.mcpClients) ?? "IDE";
  async function K() {
    if (!F) return;
    try {
      Y1("tengu_ext_will_show_diff", {});
      let { oldContent: H, newContent: z } = await tW5(Q, Z, B, X);
      if (Y.current) return;
      Y1("tengu_ext_diff_accepted", {});
      let D = oW5(Q, H, z, G);
      if (D.length === 0) {
        Y1("tengu_ext_diff_rejected", {});
        let C = vH(B.options.mcpClients);
        A({ type: "reject" }, { file_path: Q, edits: Z });
        return;
      }
      A({ type: "accept-once" }, { file_path: Q, edits: D });
    } catch (H) {
      (U1(H, to1), W(!0));
    }
  }
  return (
    PS.useEffect(() => {
      return (
        K(),
        () => {
          Y.current = !0;
        }
      );
    }, []),
    {
      closeTabInIDE() {
        let H = vH(B.options.mcpClients);
        if (!H) return Promise.resolve();
        return DNB(X, B, H);
      },
      showingDiffInIDE: F && !I,
      ideName: V,
      hasError: I,
    }
  );
}
function oW5(A, B, Q, Z) {
  let G = Z === "single",
    Y = G8B({ filePath: A, oldContent: B, newContent: Q, singleHunk: G });
  if (Y.length === 0) return [];
  if (G && Y.length > 1) U1(new Error(`Unexpected number of hunks: ${Y.length}. Expected 1 hunk.`), OYA);
  return X8B(Y);
}
async function tW5(A, B, Q, Z) {
  let G = !1,
    Y = w1(),
    I = i9(A),
    W = Y.existsSync(I) ? qV(I) : "";
  async function J() {
    if (G) return;
    G = !0;
    try {
      await DNB(Z, Q, X);
    } catch (F) {
      U1(F, LYA);
    }
    (process.off("beforeExit", J), Q.abortController.signal.removeEventListener("abort", J));
  }
  (Q.abortController.signal.addEventListener("abort", J), process.on("beforeExit", J));
  let X = vH(Q.options.mcpClients);
  try {
    let { updatedFile: F } = WO({ filePath: I, fileContents: W, edits: B });
    if (!X || X.type !== "connected") throw new Error("IDE client not available");
    let V = I,
      K = X.config.ideRunningInWindows === !0;
    if (HB() === "wsl" && K && process.env.WSL_DISTRO_NAME) V = new D01(process.env.WSL_DISTRO_NAME).toIDEPath(I);
    let H = await sj(
        "openDiff",
        { old_file_path: V, new_file_path: V, new_file_contents: F, tab_name: Z },
        X,
        Q.options.isNonInteractiveSession,
      ),
      z = { type: "result", data: Array.isArray(H) ? H : [H] };
    if (BJ5(z)) return (J(), { oldContent: W, newContent: z.data[1].text });
    else if (eW5(z)) return (J(), { oldContent: W, newContent: F });
    else if (AJ5(z)) return (J(), { oldContent: W, newContent: W });
    throw new Error("Not accepted");
  } catch (F) {
    throw (U1(F, to1), J(), F);
  }
}
async function DNB(A, B, Q) {
  try {
    if (!Q || Q.type !== "connected") throw new Error("IDE client not available");
    await sj("close_tab", { tab_name: A }, Q, B.options.isNonInteractiveSession);
  } catch (Z) {
    U1(Z, MYA);
  }
}
function eW5(A) {
  return (
    A.type === "result" &&
    Array.isArray(A.data) &&
    typeof A.data[0] === "object" &&
    A.data[0] !== null &&
    "type" in A.data[0] &&
    A.data[0].type === "text" &&
    "text" in A.data[0] &&
    A.data[0].text === "TAB_CLOSED"
  );
}
function AJ5(A) {
  return (
    A.type === "result" &&
    Array.isArray(A.data) &&
    typeof A.data[0] === "object" &&
    A.data[0] !== null &&
    "type" in A.data[0] &&
    A.data[0].type === "text" &&
    "text" in A.data[0] &&
    A.data[0].text === "DIFF_REJECTED"
  );
}
function BJ5(A) {
  return (
    A.type === "result" &&
    Array.isArray(A.data) &&
    A.data[0]?.type === "text" &&
    A.data[0].text === "FILE_SAVED" &&
    typeof A.data[1].text === "string"
  );
}
var dX = A1(V1(), 1);
import { basename as QJ5 } from "path";
function CNB({ onChange: A, options: B, input: Q, filePath: Z, ideName: G }) {
  return dX.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "permission",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    },
    dX.createElement(
      y,
      { flexDirection: "column", padding: 1 },
      dX.createElement(M, { bold: !0, color: "permission" }, "Opened changes in ", G, " ⧉"),
      fY1() && dX.createElement(M, { dimColor: !0 }, "Save file to continue…"),
    ),
    dX.createElement(
      y,
      { flexDirection: "column" },
      dX.createElement(
        M,
        null,
        "Do you want to make this edit to",
        " ",
        dX.createElement(M, { bold: !0 }, QJ5(Z)),
        "?",
      ),
      dX.createElement(xA, {
        options: B.map((Y) => ({ label: Y.label, value: Y.label })),
        onChange: (Y) => {
          let I = B.find((W) => W.label === Y);
          if (I) A(I.option, Q);
        },
        onCancel: () => A({ type: "reject" }, Q),
      }),
    ),
  );
}
function lO({
  toolUseConfirm: A,
  toolUseContext: B,
  onDone: Q,
  onReject: Z,
  title: G,
  question: Y = "Do you want to proceed?",
  content: I,
  completionType: W = "tool_use_single",
  languageName: J = "none",
  path: X,
  parseInput: F,
  operationType: V = "write",
  ideDiffSupport: K,
}) {
  cO(A, { completion_type: W, language_name: J });
  let H = HNB({
      filePath: X || "",
      completionType: W,
      languageName: J,
      toolUseConfirm: A,
      onDone: Q,
      onReject: Z,
      parseInput: F,
      operationType: V,
    }),
    z = H.options,
    D = F(A.input),
    C = K ? K.getConfig(D) : null,
    w = C
      ? {
          onChange: (P, _) => {
            let b = K.applyChanges(D, _.edits);
            H.onChange(P, b);
          },
          toolUseContext: B,
          filePath: C.filePath,
          edits: (C.edits || []).map((P) => ({
            old_string: P.old_string,
            new_string: P.new_string,
            replace_all: P.replace_all || !1,
          })),
          editMode: C.editMode || "single",
        }
      : { onChange: () => {}, toolUseContext: B, filePath: "", edits: [], editMode: "single" },
    { closeTabInIDE: E, showingDiffInIDE: L, ideName: O } = zNB(w),
    R = (P) => {
      (P.type, E?.(), H.onChange(P, D));
    };
  if (L && C && X)
    return cc.default.createElement(CNB, { onChange: (P) => R(P), options: z, filePath: X, input: D, ideName: O });
  return cc.default.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "permission",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    },
    cc.default.createElement(rH, { title: G }),
    I,
    cc.default.createElement(
      y,
      { flexDirection: "column" },
      typeof Y === "string" ? cc.default.createElement(M, null, Y) : Y,
      cc.default.createElement(xA, {
        options: z.map((P) => ({ label: P.label, value: P.label })),
        onChange: (P) => {
          let _ = z.find((b) => b.label === P);
          if (_) R(_.option);
        },
        onCancel: () => R({ type: "reject" }),
      }),
    ),
  );
}
function Og1(A, B, Q, Z) {
  return { filePath: A, edits: [{ old_string: B, new_string: Q, replace_all: Z }], editMode: "single" };
}
function UNB(A, B) {
  return { filePath: A, edits: B, editMode: "multiple" };
}
var GJ5 = {
  getConfig: (A) => Og1(A.file_path, A.old_string, A.new_string, A.replace_all),
  applyChanges: (A, B) => {
    let Q = B[0];
    if (Q) return { ...A, old_string: Q.old_string, new_string: Q.new_string, replace_all: Q.replace_all };
    return A;
  },
};
function $NB(A) {
  let B = (W) => {
      return TY.inputSchema.parse(W);
    },
    Q = B(A.toolUseConfirm.input),
    { file_path: Z, old_string: G, new_string: Y, replace_all: I } = Q;
  return rW1.default.createElement(lO, {
    toolUseConfirm: A.toolUseConfirm,
    toolUseContext: A.toolUseContext,
    onDone: A.onDone,
    onReject: A.onReject,
    title: "Edit file",
    question: rW1.default.createElement(
      M,
      null,
      "Do you want to make this edit to",
      " ",
      rW1.default.createElement(M, { bold: !0 }, ZJ5(Z)),
      "?",
    ),
    content: rW1.default.createElement(Ng1, {
      file_path: Z,
      edits: [{ old_string: G, new_string: Y, replace_all: I || !1 }],
      verbose: A.verbose,
    }),
    path: Z,
    completionType: "str_replace_single",
    languageName: Bf(Z),
    parseInput: B,
    ideDiffSupport: GJ5,
  });
}
var cZ = A1(V1(), 1);
function Qf(
  A,
  {
    assistantMessage: {
      message: { id: B },
    },
  },
  Q,
) {
  JK({ completion_type: A, event: Q, metadata: { language_name: "none", message_id: B, platform: tA.platform } });
}
import * as Tg1 from "path";
function YJ5(A) {
  switch (A.length) {
    case 0:
      return "";
    case 1:
      return n1.bold(A[0]);
    case 2:
      return n1.bold(A[0]) + " and " + n1.bold(A[1]);
    default:
      return n1.bold(A.slice(0, -1).join(", ")) + ", and " + n1.bold(A.slice(-1)[0]);
  }
}
function wNB(A) {
  let B = YJ5(A);
  if (B.length > 50) return "similar";
  else return B;
}
function Rg1(A) {
  if (A.length === 0) return "";
  let B = A.map((Q) => {
    let Z = Q.split("/").pop() || Q;
    return n1.bold(Z) + Tg1.sep;
  });
  if (B.length === 1) return B[0];
  if (B.length === 2) return `${B[0]} and ${B[1]}`;
  return `${B[0]}, ${B[1]} and ${A.length - 2} more`;
}
function IJ5(A) {
  let B = A.filter((F) => F.type === "addRules").flatMap((F) => F.rules || []),
    Q = B.filter((F) => F.toolName === "Read"),
    Z = B.filter((F) => F.toolName === "Bash"),
    G = A.filter((F) => F.type === "addDirectories").flatMap((F) => F.directories || []),
    Y = Q.map((F) => F.ruleContent?.replace("/**", "") || "").filter((F) => F),
    I = Z.flatMap((F) => {
      if (!F.ruleContent) return [];
      return aC0(F.ruleContent) ?? F.ruleContent;
    }),
    W = G.length > 0,
    J = Y.length > 0,
    X = I.length > 0;
  if (J && !W && !X) {
    if (Y.length === 1) {
      let F = Y[0],
        V = F.split("/").pop() || F;
      return `Yes, allow reading from ${n1.bold(V)}${Tg1.sep} from this project`;
    }
    return `Yes, allow reading from ${Rg1(Y)} from this project`;
  }
  if (W && !J && !X) {
    if (G.length === 1) {
      let F = G[0],
        V = F.split("/").pop() || F;
      return `Yes, and always allow access to ${n1.bold(V)}${Tg1.sep} from this project`;
    }
    return `Yes, and always allow access to ${Rg1(G)} from this project`;
  }
  if (X && !W && !J) return `Yes, and don't ask again for ${wNB(I)} commands in ${n1.bold(WQ())}`;
  if ((W || J) && !X) {
    let F = [...G, ...Y];
    if (W && J) return `Yes, and always allow access to ${Rg1(F)} from this project`;
  }
  if ((W || J) && X) {
    let F = [...G, ...Y],
      V = Rg1(F),
      K = wNB(I);
    if (F.length === 1 && I.length === 1) return `Yes, and allow access to ${V} and ${K} commands`;
    return `Yes, and allow ${V} access and ${K} commands`;
  }
  return null;
}
function qNB({ suggestions: A = [] }) {
  let B = [{ label: "Yes", value: "yes" }];
  if (A.length > 0) {
    let Q = IJ5(A);
    if (Q) B.push({ label: Q, value: "yes-apply-suggestions" });
  }
  return (B.push({ label: `No, and tell Claude what to do differently ${n1.bold.dim("(esc)")}`, value: "no" }), B);
}
var Y9 = A1(V1(), 1);
function WJ5(A) {
  switch (A) {
    case "cliArg":
      return "CLI argument";
    case "command":
      return "command configuration";
    case "session":
      return "current session";
    case "localSettings":
      return "local settings";
    case "projectSettings":
      return "project settings";
    case "policySettings":
      return "managed settings";
    case "userSettings":
      return "global settings";
    case "flagSettings":
      return "--settings flag";
  }
}
function ENB(A) {
  switch (A.type) {
    case "rule":
      return `${n1.bold(n6(A.rule.ruleValue))} rule from ${WJ5(A.rule.source)}`;
    case "mode":
      return `${lg(A.mode)} mode`;
    case "other":
      return A.reason;
    case "permissionPromptTool":
      return `${n1.bold(A.permissionPromptToolName)} permission prompt tool`;
    case "hook":
      return A.reason ? `${n1.bold(A.hookName)} hook: ${A.reason}` : `${n1.bold(A.hookName)} hook`;
  }
}
function JJ5({ title: A, decisionReason: B }) {
  let [Q] = sB();
  function Z() {
    switch (B.type) {
      case "subcommandResults":
        return Y9.default.createElement(
          y,
          { flexDirection: "column" },
          Array.from(B.reasons.entries()).map(([G, Y]) => {
            let I = Y.behavior === "allow" ? iB("success", Q)(t0.tick) : iB("error", Q)(t0.cross);
            return Y9.default.createElement(
              y,
              { flexDirection: "column", key: G },
              Y9.default.createElement(M, null, I, " ", G),
              Y.decisionReason !== void 0 &&
                Y.decisionReason.type !== "subcommandResults" &&
                Y9.default.createElement(M, null, "  ", "⎿", "  ", ENB(Y.decisionReason)),
              Y.behavior === "ask" &&
                (() => {
                  let W = ka(Y.suggestions);
                  return W.length > 0
                    ? Y9.default.createElement(
                        M,
                        null,
                        "  ",
                        "⎿",
                        "  ",
                        "Suggested rules:",
                        " ",
                        W.map((J) => n1.bold(n6(J))).join(", "),
                      )
                    : null;
                })(),
            );
          }),
        );
      default:
        return Y9.default.createElement(M, null, ENB(B));
    }
  }
  return Y9.default.createElement(y, { flexDirection: "column" }, A && Y9.default.createElement(M, null, A), Z());
}
function XJ5(A) {
  if (!A) return [];
  return A.flatMap((B) => {
    switch (B.type) {
      case "addDirectories":
        return B.directories;
      default:
        return [];
    }
  });
}
function FJ5(A) {
  if (!A) return;
  for (let B = A.length - 1; B >= 0; B--) {
    let Q = A[B];
    if (Q?.type === "setMode") return Q.mode;
  }
  return;
}
function VJ5({ suggestions: A, width: B }) {
  if (!A || A.length === 0)
    return Y9.default.createElement(
      y,
      { flexDirection: "row" },
      Y9.default.createElement(
        y,
        { justifyContent: "flex-end", minWidth: B },
        Y9.default.createElement(M, { dimColor: !0 }, "Suggestions "),
      ),
      Y9.default.createElement(M, null, "None"),
    );
  let Q = ka(A),
    Z = XJ5(A),
    G = FJ5(A);
  if (Q.length === 0 && Z.length === 0 && !G)
    return Y9.default.createElement(
      y,
      { flexDirection: "row" },
      Y9.default.createElement(
        y,
        { justifyContent: "flex-end", minWidth: B },
        Y9.default.createElement(M, { dimColor: !0 }, "Suggestion "),
      ),
      Y9.default.createElement(M, null, "None"),
    );
  return Y9.default.createElement(
    y,
    { flexDirection: "column" },
    Y9.default.createElement(
      y,
      { flexDirection: "row" },
      Y9.default.createElement(
        y,
        { justifyContent: "flex-end", minWidth: B },
        Y9.default.createElement(M, { dimColor: !0 }, "Suggestions "),
      ),
      Y9.default.createElement(M, null, " "),
    ),
    Q.length > 0 &&
      Y9.default.createElement(
        y,
        { flexDirection: "row" },
        Y9.default.createElement(
          y,
          { justifyContent: "flex-end", minWidth: B },
          Y9.default.createElement(M, { dimColor: !0 }, " Rules "),
        ),
        Y9.default.createElement(
          y,
          { flexDirection: "column" },
          Q.map((Y, I) => Y9.default.createElement(M, { key: I }, t0.bullet, " ", n6(Y))),
        ),
      ),
    Z.length > 0 &&
      Y9.default.createElement(
        y,
        { flexDirection: "row" },
        Y9.default.createElement(
          y,
          { justifyContent: "flex-end", minWidth: B },
          Y9.default.createElement(M, { dimColor: !0 }, " Directories "),
        ),
        Y9.default.createElement(
          y,
          { flexDirection: "column" },
          Z.map((Y, I) => Y9.default.createElement(M, { key: I }, t0.bullet, " ", Y)),
        ),
      ),
    G &&
      Y9.default.createElement(
        y,
        { flexDirection: "row" },
        Y9.default.createElement(
          y,
          { justifyContent: "flex-end", minWidth: B },
          Y9.default.createElement(M, { dimColor: !0 }, " Mode "),
        ),
        Y9.default.createElement(M, null, lg(G)),
      ),
  );
}
function NNB({ permissionResult: A }) {
  let B = A.decisionReason,
    Q = "suggestions" in A ? A.suggestions : void 0,
    Z = 10;
  return Y9.default.createElement(
    y,
    { flexDirection: "column" },
    Y9.default.createElement(
      y,
      { flexDirection: "row" },
      Y9.default.createElement(
        y,
        { justifyContent: "flex-end", minWidth: 10 },
        Y9.default.createElement(M, { dimColor: !0 }, "Behavior "),
      ),
      Y9.default.createElement(M, null, A.behavior),
    ),
    A.behavior !== "allow" &&
      Y9.default.createElement(
        y,
        { flexDirection: "row" },
        Y9.default.createElement(
          y,
          { justifyContent: "flex-end", minWidth: 10 },
          Y9.default.createElement(M, { dimColor: !0 }, "Message "),
        ),
        Y9.default.createElement(M, null, A.message),
      ),
    Y9.default.createElement(
      y,
      { flexDirection: "row" },
      Y9.default.createElement(
        y,
        { justifyContent: "flex-end", minWidth: 10 },
        Y9.default.createElement(M, { dimColor: !0 }, "Reason "),
      ),
      B === void 0
        ? Y9.default.createElement(M, null, "undefined")
        : Y9.default.createElement(JJ5, { decisionReason: B }),
    ),
    Y9.default.createElement(VJ5, { suggestions: Q, width: 10 }),
  );
}
var Pg1 = A1(V1(), 1);
function KJ5(A, B) {
  if (!A) return null;
  switch (A.type) {
    case "rule":
      return {
        reasonString: `Permission rule ${n1.bold(n6(A.rule.ruleValue))} requires confirmation for this ${B}.`,
        configString: "/permissions to update rules",
      };
    case "hook": {
      let Q = A.reason
        ? `:
${A.reason}`
        : ".";
      return {
        reasonString: `Hook ${n1.bold(A.hookName)} requires confirmation for this ${B}${Q}`,
        configString: "/hooks to update",
      };
    }
    default:
      return null;
  }
}
function pO({ permissionResult: A, toolType: B }) {
  let Q = KJ5(A?.decisionReason, B);
  if (!Q) return null;
  return Pg1.default.createElement(
    y,
    { marginBottom: 1, flexDirection: "column" },
    Pg1.default.createElement(M, null, Q.reasonString),
    Pg1.default.createElement(M, { dimColor: !0 }, Q.configString),
  );
}
function LNB({ toolUseConfirm: A, onDone: B, onReject: Q }) {
  let [Z] = sB(),
    { command: G, description: Y } = gQ.inputSchema.parse(A.input),
    [I, W] = cZ.useState(!1),
    J = cZ.useMemo(() => ({ completion_type: "tool_use_single", language_name: "none" }), []);
  cO(A, J);
  let X = cZ.useMemo(
    () => qNB({ suggestions: A.permissionResult.behavior === "ask" ? A.permissionResult.suggestions : void 0 }),
    [A],
  );
  s0((V, K) => {
    if (K.ctrl && V === "d") W((H) => !H);
  });
  function F(V) {
    switch (V) {
      case "yes":
        (Qf("tool_use_single", A, "accept"), A.onAllow(A.input, []), B());
        break;
      case "yes-apply-suggestions": {
        Qf("tool_use_single", A, "accept");
        let H = A.permissionResult.behavior === "ask" ? A.permissionResult.suggestions || [] : [];
        (A.onAllow(A.input, H), B());
        break;
      }
      case "no":
        (Qf("tool_use_single", A, "reject"), A.onReject(), Q(), B());
        break;
    }
  }
  return cZ.default.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "permission",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
    },
    cZ.default.createElement(rH, { title: "Bash command" }),
    cZ.default.createElement(
      y,
      { flexDirection: "column", paddingX: 2, paddingY: 1 },
      cZ.default.createElement(
        M,
        null,
        gQ.renderToolUseMessage({ command: G, description: Y }, { theme: Z, verbose: !0 }),
      ),
      cZ.default.createElement(M, { dimColor: !0 }, A.description),
    ),
    I
      ? cZ.default.createElement(
          cZ.default.Fragment,
          null,
          cZ.default.createElement(NNB, { permissionResult: A.permissionResult }),
          A.toolUseContext.options.debug &&
            cZ.default.createElement(
              y,
              { justifyContent: "flex-end", marginTop: 1 },
              cZ.default.createElement(M, { dimColor: !0 }, "Ctrl-D to hide debug info"),
            ),
        )
      : cZ.default.createElement(
          cZ.default.Fragment,
          null,
          cZ.default.createElement(
            y,
            { flexDirection: "column" },
            cZ.default.createElement(pO, { permissionResult: A.permissionResult, toolType: "command" }),
            cZ.default.createElement(M, null, "Do you want to proceed?"),
            cZ.default.createElement(xA, { options: X, onChange: F, onCancel: () => F("no") }),
          ),
          A.toolUseContext.options.debug &&
            cZ.default.createElement(
              y,
              { justifyContent: "flex-end" },
              cZ.default.createElement(M, { dimColor: !0 }, "Ctrl+d to show debug info"),
            ),
        ),
  );
}
var oH = A1(V1(), 1);
function jg1({ toolUseConfirm: A, onDone: B, onReject: Q, verbose: Z }) {
  let [G] = sB(),
    Y = A.tool.userFacingName(A.input),
    I = Y.endsWith(" (MCP)") ? Y.slice(0, -6) : Y,
    W = oH.useMemo(() => ({ completion_type: "tool_use_single", language_name: "none" }), []);
  cO(A, W);
  let J = (V) => {
      switch (V) {
        case "yes":
          (JK({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: { language_name: "none", message_id: A.assistantMessage.message.id, platform: tA.platform },
          }),
            A.onAllow(A.input, []),
            B());
          break;
        case "yes-dont-ask-again": {
          (JK({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: { language_name: "none", message_id: A.assistantMessage.message.id, platform: tA.platform },
          }),
            A.onAllow(A.input, [
              { type: "addRules", rules: [{ toolName: A.tool.name }], behavior: "allow", destination: "localSettings" },
            ]),
            B());
          break;
        }
        case "no":
          (JK({
            completion_type: "tool_use_single",
            event: "reject",
            metadata: { language_name: "none", message_id: A.assistantMessage.message.id, platform: tA.platform },
          }),
            A.onReject(),
            Q(),
            B());
          break;
      }
    },
    X = WQ(),
    F = oH.useMemo(() => {
      return [
        { label: "Yes", value: "yes" },
        { label: `Yes, and don't ask again for ${n1.bold(I)} commands in ${n1.bold(X)}`, value: "yes-dont-ask-again" },
        { label: `No, and tell Claude what to do differently ${n1.bold.dim("(esc)")}`, value: "no" },
      ];
    }, [I, X]);
  return oH.default.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "permission",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    },
    oH.default.createElement(rH, { title: "Tool use" }),
    oH.default.createElement(
      y,
      { flexDirection: "column", paddingX: 2, paddingY: 1 },
      oH.default.createElement(
        M,
        null,
        I,
        "(",
        A.tool.renderToolUseMessage(A.input, { theme: G, verbose: Z }),
        ")",
        Y.endsWith(" (MCP)") ? oH.default.createElement(M, { dimColor: !0 }, " (MCP)") : "",
      ),
      oH.default.createElement(M, { dimColor: !0 }, A.description),
    ),
    oH.default.createElement(
      y,
      { flexDirection: "column" },
      oH.default.createElement(pO, { permissionResult: A.permissionResult, toolType: "tool" }),
      oH.default.createElement(M, null, "Do you want to proceed?"),
      oH.default.createElement(xA, { options: F, onChange: J, onCancel: () => J("no") }),
    ),
  );
}
var pO0 = A1(V1(), 1);
var MNB = 6000;
function ONB() {
  if (H0().messageIdleNotifThresholdMs !== tH.messageIdleNotifThresholdMs) return 0;
  return MNB;
}
function HJ5() {
  return Date.now() - UD1();
}
function zJ5(A) {
  return HJ5() < A;
}
function DJ5(A) {
  return !zJ5(A);
}
var CJ5 = YA(() => process.stdin.on("data", p91));
function RNB(A, B = MNB) {
  (pO0.useEffect(() => {
    (CJ5(), p91());
  }, []),
    pO0.useEffect(() => {
      let Q = !1,
        Z = setInterval(() => {
          if (DJ5(B) && !Q) ((Q = !0), TA1({ message: A }));
        }, B);
      return () => clearTimeout(Z);
    }, [A, B]));
}
var lc = A1(V1(), 1);
import { basename as wJ5 } from "path";
var dD = A1(V1(), 1),
  Sg1 = A1(V1(), 1);
import { extname as UJ5, relative as $J5 } from "path";
function TNB({ file_path: A, content: B, verbose: Q }) {
  let Z = Sg1.useMemo(() => w1().existsSync(A), [A]),
    G = Sg1.useMemo(() => {
      if (!Z) return "";
      let I = mW(A);
      return w1().readFileSync(A, { encoding: I });
    }, [A, Z]),
    Y = Sg1.useMemo(() => {
      if (!Z) return null;
      return RD({ filePath: A, fileContents: G, edits: [{ old_string: G, new_string: B, replace_all: !1 }] });
    }, [Z, A, G, B]);
  return dD.createElement(
    y,
    { borderDimColor: !0, borderStyle: "round", flexDirection: "column", paddingX: 1 },
    dD.createElement(y, { paddingBottom: 1 }, dD.createElement(M, { bold: !0 }, Q ? A : $J5(AA(), A))),
    Y
      ? VW(
          Y.map((I) => dD.createElement(bH, { key: I.newStart, patch: I, dim: !1 })),
          (I) => dD.createElement(M, { dimColor: !0, key: `ellipsis-${I}` }, "..."),
        )
      : dD.createElement(M$, { code: B || "(No content)", language: UJ5(A).slice(1) }),
  );
}
var qJ5 = {
  getConfig: (A) => {
    let Q = w1().existsSync(A.file_path) ? qV(A.file_path) : "";
    return Og1(A.file_path, Q, A.content, !1);
  },
  applyChanges: (A, B) => {
    let Q = B[0];
    if (Q) return { ...A, content: Q.new_string };
    return A;
  },
};
function PNB(A) {
  let B = (W) => {
      return mF.inputSchema.parse(W);
    },
    Q = B(A.toolUseConfirm.input),
    { file_path: Z, content: G } = Q,
    Y = lc.useMemo(() => w1().existsSync(Z), [Z]),
    I = Y ? "overwrite" : "create";
  return lc.default.createElement(lO, {
    toolUseConfirm: A.toolUseConfirm,
    toolUseContext: A.toolUseContext,
    onDone: A.onDone,
    onReject: A.onReject,
    title: Y ? "Overwrite file" : "Create file",
    question: lc.default.createElement(
      M,
      null,
      "Do you want to ",
      I,
      " ",
      lc.default.createElement(M, { bold: !0 }, wJ5(Z)),
      "?",
    ),
    content: lc.default.createElement(TNB, { file_path: Z, content: G, verbose: A.verbose }),
    path: Z,
    completionType: "write_file_single",
    languageName: Bf(Z),
    parseInput: B,
    ideDiffSupport: qJ5,
  });
}
var oW1 = A1(V1(), 1);
function EJ5(A) {
  let B = A.tool;
  if ("getPath" in B && typeof B.getPath === "function")
    try {
      return B.getPath(A.input);
    } catch {
      return null;
    }
  return null;
}
function jNB({ toolUseConfirm: A, onDone: B, onReject: Q, verbose: Z, toolUseContext: G }) {
  let [Y] = sB(),
    I = EJ5(A),
    W = A.tool.userFacingName(A.input),
    J = A.tool.isReadOnly(A.input),
    F = `${J ? "Read" : "Edit"} file`,
    V = (H) => H;
  if (!I)
    return oW1.default.createElement(jg1, { toolUseConfirm: A, toolUseContext: G, onDone: B, onReject: Q, verbose: Z });
  let K = oW1.default.createElement(
    y,
    { flexDirection: "column", paddingX: 2, paddingY: 1 },
    oW1.default.createElement(M, null, W, "(", A.tool.renderToolUseMessage(A.input, { theme: Y, verbose: Z }), ")"),
  );
  return oW1.default.createElement(lO, {
    toolUseConfirm: A,
    toolUseContext: G,
    onDone: B,
    onReject: Q,
    title: F,
    content: K,
    path: I,
    parseInput: V,
    operationType: J ? "read" : "write",
    completionType: "tool_use_single",
    languageName: "none",
  });
}
var c$ = A1(V1(), 1);
function NJ5(A) {
  try {
    let B = LJ.inputSchema.safeParse(A);
    if (!B.success) return `input:${A.toString()}`;
    let { url: Q } = B.data;
    return `domain:${new URL(Q).hostname}`;
  } catch {
    return `input:${A.toString()}`;
  }
}
function SNB({ toolUseConfirm: A, onDone: B, onReject: Q, verbose: Z }) {
  let [G] = sB(),
    { url: Y } = A.input,
    I = new URL(Y).hostname,
    W = c$.useMemo(() => ({ completion_type: "tool_use_single", language_name: "none" }), []);
  cO(A, W);
  let J = [
    { label: "Yes", value: "yes" },
    { label: `Yes, and don't ask again for ${n1.bold(I)}`, value: "yes-dont-ask-again-domain" },
    { label: `No, and tell Claude what to do differently ${n1.bold.dim("(esc)")}`, value: "no" },
  ];
  function X(F) {
    switch (F) {
      case "yes":
        (Qf("tool_use_single", A, "accept"), A.onAllow(A.input, []), B());
        break;
      case "yes-dont-ask-again-domain": {
        Qf("tool_use_single", A, "accept");
        let V = NJ5(A.input),
          K = { toolName: A.tool.name, ruleContent: V };
        (A.onAllow(A.input, [{ type: "addRules", rules: [K], behavior: "allow", destination: "localSettings" }]), B());
        break;
      }
      case "no":
        (Qf("tool_use_single", A, "reject"), A.onReject(), Q(), B());
        break;
    }
  }
  return c$.default.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "permission",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    },
    c$.default.createElement(rH, { title: "Fetch" }),
    c$.default.createElement(
      y,
      { flexDirection: "column", paddingX: 2, paddingY: 1 },
      c$.default.createElement(M, null, LJ.renderToolUseMessage(A.input, { theme: G, verbose: Z })),
      c$.default.createElement(M, { dimColor: !0 }, A.description),
    ),
    c$.default.createElement(
      y,
      { flexDirection: "column" },
      c$.default.createElement(pO, { permissionResult: A.permissionResult, toolType: "tool" }),
      c$.default.createElement(M, null, "Do you want to allow Claude to fetch this content?"),
      c$.default.createElement(xA, { options: J, onChange: X, onCancel: () => X("no") }),
    ),
  );
}
var tW1 = A1(V1(), 1);
import { basename as MJ5 } from "path";
var QZ = A1(V1(), 1),
  G21 = A1(V1(), 1);
import { relative as LJ5 } from "path";
function yNB({
  notebook_path: A,
  cell_id: B,
  new_source: Q,
  cell_type: Z,
  edit_mode: G = "replace",
  verbose: Y,
  width: I,
}) {
  let W = G21.useMemo(() => w1().existsSync(A), [A]),
    J = G21.useMemo(() => {
      if (!W) return null;
      try {
        let H = qV(A);
        return d3(H);
      } catch (H) {
        return null;
      }
    }, [A, W]),
    X = G21.useMemo(() => {
      if (!J || !B) return "";
      let H = lG1(B);
      if (H !== void 0) {
        if (J.cells[H]) {
          let D = J.cells[H].source;
          return Array.isArray(D) ? D.join("") : D;
        }
        return "";
      }
      let z = J.cells.find((D) => D.id === B);
      if (!z) return "";
      return Array.isArray(z.source) ? z.source.join("") : z.source;
    }, [J, B]),
    F = G21.useMemo(() => {
      if (!J || !J.metadata.language_info) return "python";
      return J.metadata.language_info.name || "python";
    }, [J]),
    V = G21.useMemo(() => {
      if (!W || G === "insert" || G === "delete") return null;
      return RD({
        filePath: A,
        fileContents: X,
        edits: [{ old_string: X, new_string: Q, replace_all: !1 }],
        ignoreWhitespace: !1,
      });
    }, [W, A, X, Q, G]),
    K;
  switch (G) {
    case "insert":
      K = "Insert new cell";
      break;
    case "delete":
      K = "Delete cell";
      break;
    default:
      K = "Replace cell contents";
  }
  return QZ.createElement(
    y,
    { flexDirection: "column" },
    QZ.createElement(
      y,
      { borderDimColor: !0, borderStyle: "round", flexDirection: "column", paddingX: 1 },
      QZ.createElement(
        y,
        { paddingBottom: 1, flexDirection: "column" },
        QZ.createElement(M, { bold: !0 }, Y ? A : LJ5(AA(), A)),
        QZ.createElement(M, { dimColor: !0 }, K, " for cell ", B, Z ? ` (${Z})` : ""),
      ),
      G === "delete"
        ? QZ.createElement(
            y,
            { flexDirection: "column", paddingLeft: 2 },
            QZ.createElement(M$, { code: X, language: F }),
          )
        : G === "insert"
          ? QZ.createElement(
              y,
              { flexDirection: "column", paddingLeft: 2 },
              QZ.createElement(M$, { code: Q, language: Z === "markdown" ? "markdown" : F }),
            )
          : V
            ? VW(
                V.map((H) => QZ.createElement(bH, { key: H.newStart, patch: H, dim: !1, width: I })),
                (H) => QZ.createElement(M, { dimColor: !0, key: `ellipsis-${H}` }, "..."),
              )
            : QZ.createElement(M$, { code: Q, language: Z === "markdown" ? "markdown" : F }),
    ),
  );
}
function kNB(A) {
  let B = (J) => {
      let X = mO.inputSchema.safeParse(J);
      if (!X.success)
        return (
          U1(new Error(`Failed to parse notebook edit input: ${X.error.message}`), MGA),
          { notebook_path: "", new_source: "", cell_id: "" }
        );
      return X.data;
    },
    Q = B(A.toolUseConfirm.input),
    { notebook_path: Z, edit_mode: G, cell_type: Y } = Q,
    I = Y === "markdown" ? "markdown" : "python",
    W = G === "insert" ? "insert this cell into" : G === "delete" ? "delete this cell from" : "make this edit to";
  return tW1.default.createElement(lO, {
    toolUseConfirm: A.toolUseConfirm,
    toolUseContext: A.toolUseContext,
    onDone: A.onDone,
    onReject: A.onReject,
    title: "Edit notebook",
    question: tW1.default.createElement(
      M,
      null,
      "Do you want to ",
      W,
      " ",
      tW1.default.createElement(M, { bold: !0 }, MJ5(Z)),
      "?",
    ),
    content: tW1.default.createElement(yNB, {
      notebook_path: Q.notebook_path,
      cell_id: Q.cell_id,
      new_source: Q.new_source,
      cell_type: Q.cell_type,
      edit_mode: Q.edit_mode,
      verbose: A.verbose,
      width: A.verbose ? 120 : 80,
    }),
    path: Z,
    completionType: "tool_use_single",
    languageName: I,
    parseInput: B,
  });
}
var eW1 = A1(V1(), 1);
import { basename as OJ5 } from "path";
var RJ5 = {
  getConfig: (A) => UNB(A.file_path, A.edits),
  applyChanges: (A, B) => {
    return { ...A, edits: B };
  },
};
function _NB(A) {
  let B = (W) => {
      return KE.inputSchema.parse(W);
    },
    Q = B(A.toolUseConfirm.input),
    { file_path: Z, edits: G } = Q,
    Y = G.length,
    I = Y === 1 ? "edit" : `${Y} edits`;
  return eW1.default.createElement(lO, {
    toolUseConfirm: A.toolUseConfirm,
    toolUseContext: A.toolUseContext,
    onDone: A.onDone,
    onReject: A.onReject,
    title: "Edit file",
    question: eW1.default.createElement(
      M,
      null,
      "Do you want to make ",
      I,
      " to",
      " ",
      eW1.default.createElement(M, { bold: !0 }, OJ5(Z)),
      "?",
    ),
    content: eW1.default.createElement(Ng1, {
      file_path: Z,
      edits: G.map((W) => ({ old_string: W.old_string, new_string: W.new_string, replace_all: W.replace_all ?? !1 })),
      verbose: A.verbose,
    }),
    path: Z,
    completionType: "str_replace_multi",
    languageName: Bf(Z),
    parseInput: B,
    ideDiffSupport: RJ5,
  });
}
var kE = A1(V1(), 1);
function xNB({ toolUseConfirm: A, onDone: B, onReject: Q }) {
  let [Z] = sB(),
    [G] = dB();
  function Y(I) {
    if (I === "yes-bypass-permissions")
      (B(), A.onAllow(A.input, [{ type: "setMode", mode: "bypassPermissions", destination: "session" }]));
    else if (I === "yes-accept-edits")
      (B(), A.onAllow(A.input, [{ type: "setMode", mode: "acceptEdits", destination: "session" }]));
    else if (I === "yes-default")
      (B(), A.onAllow(A.input, [{ type: "setMode", mode: "default", destination: "session" }]));
    else (B(), Q(), A.onReject());
  }
  return kE.default.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "planMode",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    },
    kE.default.createElement(rH, { title: "Ready to code?" }),
    kE.default.createElement(
      y,
      { flexDirection: "column", marginTop: 1 },
      kE.default.createElement(M, null, "Here is Claude's plan:"),
      kE.default.createElement(
        y,
        { borderStyle: "round", borderDimColor: !0, marginBottom: 1, paddingX: 1, overflow: "hidden" },
        kE.default.createElement(M, null, PX(A.input.plan, Z)),
      ),
      kE.default.createElement(pO, { permissionResult: A.permissionResult, toolType: "tool" }),
      kE.default.createElement(M, { dimColor: !0 }, "Would you like to proceed?"),
      kE.default.createElement(
        y,
        { marginTop: 1 },
        kE.default.createElement(xA, {
          options: [
            ...(G.toolPermissionContext.isBypassPermissionsModeAvailable
              ? [{ label: "Yes, and bypass permissions", value: "yes-bypass-permissions" }]
              : [{ label: "Yes, and auto-accept edits", value: "yes-accept-edits" }]),
            { label: "Yes, and manually approve edits", value: "yes-default" },
            { label: "No, keep planning", value: "no" },
          ],
          onChange: (I) => Y(I),
          onCancel: () => Y("no"),
        }),
      ),
    ),
  );
}
function jS(A) {
  let B = A.trim();
  if (!B.startsWith("/")) return null;
  let Z = B.slice(1).split(" ");
  if (!Z[0]) return null;
  let G = Z[0],
    Y = !1,
    I = 1;
  if (Z.length > 1 && Z[1] === "(MCP)") ((G = G + " (MCP)"), (Y = !0), (I = 2));
  let W = Z.slice(I).join(" ");
  return { commandName: G, args: W, isMcp: Y };
}
function TJ5(A) {
  return !/[^a-zA-Z0-9:\-_]/.test(A);
}
async function vNB(A, B, Q, Z, G, Y, I, W, J, X) {
  let F = jS(A);
  if (!F)
    return (
      Y1("tengu_input_slash_missing", {}),
      {
        messages: [
          oV(),
          ...Z,
          bA({
            content: hH({ inputString: "Commands are in the form `/command [args]`", precedingInputBlocks: B }),
            autocheckpoint: W,
          }),
        ],
        shouldQuery: !1,
      }
    );
  let { commandName: V, args: K, isMcp: H } = F,
    z = H ? "mcp" : !yg1().has(V) ? "custom" : V;
  if (!AJ1(V, G.options.commands)) {
    let u = w1().existsSync(`/${V}`);
    if (TJ5(V) && !u)
      return (
        Y1("tengu_input_slash_invalid", { input: V }),
        {
          messages: [
            oV(),
            ...Z,
            bA({ content: hH({ inputString: `Unknown slash command: ${V}`, precedingInputBlocks: B }) }),
          ],
          shouldQuery: !1,
        }
      );
    return (
      Y1("tengu_input_prompt", {}),
      T$("user_prompt", { prompt_length: String(A.length), prompt: Fb1(A) }),
      {
        messages: [bA({ content: hH({ inputString: A, precedingInputBlocks: B }), autocheckpoint: W, uuid: J }), ...Z],
        shouldQuery: !0,
      }
    );
  }
  let D = Zf(V, G.options.commands),
    C = D.type === "local-jsx",
    w = D.type === "local";
  if (!0) Y(!0);
  let {
    messages: L,
    shouldQuery: O,
    allowedTools: R,
    skipHistory: P,
    maxThinkingTokens: _,
    model: b,
    command: S,
  } = await PJ5(V, K, I, G, B, Q, W, X);
  if (L.length === 0) {
    let u = { input: z };
    if (S.type === "prompt" && S.pluginInfo) {
      let { pluginManifest: o, repository: m } = S.pluginInfo;
      if (((u.plugin_repository = m), (u.plugin_name = o.name), o.version)) u.plugin_version = o.version;
    }
    return (
      Y1("tengu_input_command", u),
      { messages: [], shouldQuery: !1, skipHistory: P, maxThinkingTokens: _, model: b }
    );
  }
  if (
    L.length === 2 &&
    L[1].type === "user" &&
    typeof L[1].message.content === "string" &&
    L[1].message.content.startsWith("Unknown command:")
  ) {
    if (!(A.startsWith("/var") || A.startsWith("/tmp") || A.startsWith("/private")))
      Y1("tengu_input_slash_invalid", { input: V });
    return { messages: [oV(), ...L], shouldQuery: O, allowedTools: R, maxThinkingTokens: _, model: b };
  }
  let d = { input: z };
  if (S.type === "prompt" && S.pluginInfo) {
    let { pluginManifest: u, repository: o } = S.pluginInfo;
    if (((d.plugin_repository = o), (d.plugin_name = u.name), u.version)) d.plugin_version = u.version;
  }
  return (
    Y1("tengu_input_command", d),
    { messages: O ? L : [oV(), ...L], shouldQuery: O, allowedTools: R, maxThinkingTokens: _, model: b }
  );
}
async function PJ5(A, B, Q, Z, G, Y, I, W) {
  let J = Zf(A, Z.options.commands);
  try {
    switch (J.type) {
      case "local-jsx":
        return new Promise((X) => {
          J.call(
            (F, V) => {
              if ((Q(null), V?.skipMessage)) {
                X({ messages: [], shouldQuery: !1, skipHistory: !0, command: J });
                return;
              }
              X({
                messages: [
                  bA({ content: hH({ inputString: iO0(J, B), precedingInputBlocks: G }), autocheckpoint: I }),
                  F
                    ? bA({ content: `<local-command-stdout>${F}</local-command-stdout>` })
                    : bA({ content: `<local-command-stdout>${PD}</local-command-stdout>` }),
                ],
                shouldQuery: !1,
                command: J,
              });
            },
            Z,
            B,
          ).then((F) => {
            if (Z.options.isNonInteractiveSession) {
              X({ messages: [], shouldQuery: !1, skipHistory: !0, command: J });
              return;
            }
            Q({ jsx: F, shouldHidePromptInput: !0, showSpinner: !1, isLocalJSXCommand: !1 });
          });
        });
      case "local": {
        let X = bA({ content: hH({ inputString: iO0(J, B), precedingInputBlocks: G }), autocheckpoint: I });
        try {
          let F = await J.call(B, Z);
          if (!Z.options.isNonInteractiveSession) process.stdout.write("\x1B[?25l");
          if (F.type === "compact") {
            let { boundaryMarker: V, summaryMessages: K, attachments: H, hookResults: z } = F.compactionResult;
            return {
              messages: [
                V,
                ...K,
                X,
                ...(F.displayText
                  ? [
                      bA({
                        content: `<local-command-stdout>${F.displayText}</local-command-stdout>`,
                        autocheckpoint: I,
                      }),
                    ]
                  : []),
                ...H,
                ...z,
              ],
              shouldQuery: !1,
              command: J,
            };
          }
          return {
            messages: [X, bA({ content: `<local-command-stdout>${F.value}</local-command-stdout>` })],
            shouldQuery: !1,
            command: J,
          };
        } catch (F) {
          return (
            U1(F, vGA),
            {
              messages: [X, bA({ content: `<local-command-stderr>${String(F)}</local-command-stderr>` })],
              shouldQuery: !1,
              command: J,
            }
          );
        }
      }
      case "prompt":
        try {
          return await fNB(J, B, Z, G, Y, I);
        } catch (X) {
          return {
            messages: [
              bA({ content: hH({ inputString: iO0(J, B), precedingInputBlocks: G }), autocheckpoint: I }),
              bA({ content: `<local-command-stderr>${String(X)}</local-command-stderr>` }),
            ],
            shouldQuery: !1,
            command: J,
          };
        }
    }
  } catch (X) {
    if (X instanceof rN)
      return {
        messages: [bA({ content: hH({ inputString: X.message, precedingInputBlocks: G }), autocheckpoint: I })],
        shouldQuery: !1,
        command: J,
      };
    throw X;
  }
}
function iO0(A, B) {
  return `<command-name>/${A.userFacingName()}</command-name>
            <command-message>${A.userFacingName()}</command-message>
            <command-args>${B}</command-args>`;
}
async function bNB(A, B, Q, Z, G = []) {
  if (!AJ1(A, Q)) throw new rN(`Unknown command: ${A}`);
  let Y = Zf(A, Q);
  if (Y.type !== "prompt")
    throw new Error(
      `Unexpected ${Y.type} command. Expected 'prompt' command. Use /${A} directly in the main conversation.`,
    );
  return fNB(Y, B, Z, G);
}
async function fNB(A, B, Q, Z = [], G = [], Y) {
  let I = await A.getPromptForCommand(B, Q),
    W = [
      `<command-message>${A.userFacingName()} is ${A.progressMessage}…</command-message>`,
      `<command-name>/${A.userFacingName()}</command-name>`,
      B ? `<command-args>${B}</command-args>` : null,
    ].filter(Boolean).join(`
`),
    J = ws(A.allowedTools ?? []),
    X = G.length > 0 || Z.length > 0 ? [...G, ...Z, ...I] : I,
    F = Hq([bA({ content: X })]),
    V = await R_1(
      p01(
        I.filter((K) => K.type === "text")
          .map((K) => K.text)
          .join(" "),
        Q,
        null,
        [],
        Q.messages,
        "repl_main_thread",
      ),
    );
  return {
    messages: [
      bA({ content: W, autocheckpoint: Y }),
      bA({ content: X, isMeta: !0 }),
      ...V,
      ...(J.length ? [i01({ type: "command_permissions", allowedTools: J })] : []),
    ],
    shouldQuery: !0,
    allowedTools: J,
    maxThinkingTokens: F > 0 ? F : void 0,
    model: A.useSmallFastModel ? TU() : A.model,
    command: A,
  };
}
async function hNB() {
  return `Execute a slash command within the main conversation
Usage:
- \`command\` (required): The slash command to execute, including any arguments
- Example: \`command: "/review-pr 123"\`
Important Notes:
- Only available slash commands can be executed.
- Some commands may require arguments as shown in the command list above
- If command validation fails, list up to 5 available commands, not all of them.
- Do not use this tool if you are already processing a slash command with the same name as indicated by <command-message>{name_of_command} is running…</command-message>
Available Commands:
${(await pb1()).map((Q) => {
  let Z = `/${Q.userFacingName()}`,
    G = Q.argumentHint ? ` ${Q.argumentHint}` : "",
    Y = Q.whenToUse ? `- ${Q.whenToUse}` : "";
  return `- ${Z}${G}: ${Q.description} ${Y}`.trim();
}).join(`
`)}
`;
}
var BJ1 = A1(V1(), 1);
function gNB() {
  return null;
}
function uNB() {
  return null;
}
function mNB() {
  return null;
}
function dNB() {
  return BJ1.createElement(o8, null);
}
function cNB(A, { verbose: B }) {
  return BJ1.createElement(K5, { result: A, verbose: B });
}
var jJ5 = f.object({
    command: f.string().describe('The slash command to execute with its arguments, e.g., "/review-pr 123"'),
  }),
  V83 = f.object({
    success: f.boolean().describe("Whether the slash command is valid"),
    commandName: f.string().describe("The name of the slash command"),
  }),
  Y21 = {
    name: SLASH_COMMAND_TOOL_NAME,
    inputSchema: jJ5,
    description: async ({ command: A }) => `Execute slash command: ${A}`,
    prompt: async () => hNB(),
    userFacingName: () => "SlashCommand",
    isConcurrencySafe: () => !1,
    isEnabled() {
      return !1;
    },
    isReadOnly: () => !1,
    async checkPermissions({ command: A }, B) {
      let { commandName: Q } = jS(A) || { commandName: "unknown" },
        G = (await B.getAppState()).toolPermissionContext,
        Y = (F) => {
          if (F === A) return !0;
          if (F.endsWith(":*")) {
            let V = F.slice(0, -2);
            return A.startsWith(V);
          }
          return !1;
        },
        I = Qq(G, Y21, "deny");
      for (let [F, V] of I.entries())
        if (Y(F))
          return {
            behavior: "deny",
            message: "Slash command execution blocked by permission rules",
            decisionReason: { type: "rule", rule: V },
          };
      let W = Qq(G, Y21, "allow");
      for (let [F, V] of W.entries())
        if (Y(F)) return { behavior: "allow", updatedInput: { command: A }, decisionReason: { type: "rule", rule: V } };
      let J = [
          {
            type: "addRules",
            rules: [{ toolName: SLASH_COMMAND_TOOL_NAME, ruleContent: A }],
            behavior: "allow",
            destination: "localSettings",
          },
        ],
        X = A.indexOf(" ");
      if (X > 0) {
        let F = A.substring(0, X);
        J.push({
          type: "addRules",
          rules: [{ toolName: SLASH_COMMAND_TOOL_NAME, ruleContent: `${F}:*` }],
          behavior: "allow",
          destination: "localSettings",
        });
      }
      return { behavior: "ask", message: `Execute slash command: /${Q}`, decisionReason: void 0, suggestions: J };
    },
    async *call({ command: A }, B) {
      let Q = jS(A);
      if (!Q) throw new Error(`Invalid slash command format: ${A}`);
      let { commandName: Z, args: G } = Q,
        Y = await I21();
      if (!AJ1(Z, Y)) throw new Error(`Unknown slash command: ${Z}`);
      let I = Zf(Z, Y);
      if (!I) throw new Error(`Could not load slash command: ${Z}`);
      if (I.type !== "prompt") throw new Error(`Slash command ${Z} is not a prompt-based command`);
      let W = await bNB(Z, G, Y, B);
      if (!W.shouldQuery) throw new Error("Command processing failed");
      let J = W.allowedTools || [],
        X = W.model,
        F = W.maxThinkingTokens;
      yield {
        type: "result",
        data: { success: !0, commandName: Z },
        newMessages: W.messages.filter((V) => V.type !== "progress"),
        contextModifier(V) {
          let K = V;
          if (J.length > 0)
            K = {
              ...K,
              async getAppState() {
                let H = await B.getAppState();
                return {
                  ...H,
                  toolPermissionContext: {
                    ...H.toolPermissionContext,
                    alwaysAllowRules: {
                      ...H.toolPermissionContext.alwaysAllowRules,
                      command: [...new Set([...(H.toolPermissionContext.alwaysAllowRules.command || []), ...J])],
                    },
                  },
                };
              },
            };
          if (X) K = { ...K, options: { ...K.options, mainLoopModel: X } };
          if (F !== void 0) K = { ...K, options: { ...K.options, maxThinkingTokens: F } };
          return K;
        },
      };
    },
    mapToolResultToToolResultBlockParam(A, B) {
      return { type: "tool_result", tool_use_id: B, content: `Launching slash command: /${A.commandName}` };
    },
    renderToolResultMessage: gNB,
    renderToolUseMessage: uNB,
    renderToolUseProgressMessage: mNB,
    renderToolUseRejectedMessage: dNB,
    renderToolUseErrorMessage: cNB,
  };
var cD = A1(V1(), 1);
function lNB({ toolUseConfirm: A, onDone: B, onReject: Q, verbose: Z }) {
  let Y = ((K) => {
      let H = Y21.inputSchema.safeParse(K);
      if (!H.success) return (U1(new Error(`Failed to parse slash command tool input: ${H.error.message}`), WYA), "");
      return H.data.command;
    })(A.input),
    W = jS(Y)?.commandName || "unknown",
    J = cD.useMemo(() => ({ completion_type: "tool_use_single", language_name: "none" }), []);
  cO(A, J);
  let X = (K) => {
      switch (K) {
        case "yes":
          (JK({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: { language_name: "none", message_id: A.assistantMessage.message.id, platform: tA.platform },
          }),
            A.onAllow(A.input, []),
            B());
          break;
        case "yes-exact": {
          (JK({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: { language_name: "none", message_id: A.assistantMessage.message.id, platform: tA.platform },
          }),
            A.onAllow(A.input, [
              {
                type: "addRules",
                rules: [{ toolName: SLASH_COMMAND_TOOL_NAME, ruleContent: Y }],
                behavior: "allow",
                destination: "localSettings",
              },
            ]),
            B());
          break;
        }
        case "yes-prefix": {
          JK({
            completion_type: "tool_use_single",
            event: "accept",
            metadata: { language_name: "none", message_id: A.assistantMessage.message.id, platform: tA.platform },
          });
          let H = Y.indexOf(" "),
            z = H > 0 ? Y.substring(0, H) : Y;
          (A.onAllow(A.input, [
            {
              type: "addRules",
              rules: [{ toolName: SLASH_COMMAND_TOOL_NAME, ruleContent: `${z}:*` }],
              behavior: "allow",
              destination: "localSettings",
            },
          ]),
            B());
          break;
        }
        case "no":
          (JK({
            completion_type: "tool_use_single",
            event: "reject",
            metadata: { language_name: "none", message_id: A.assistantMessage.message.id, platform: tA.platform },
          }),
            A.onReject(),
            Q(),
            B());
          break;
      }
    },
    F = WQ(),
    V = cD.useMemo(() => {
      let K = [{ label: "Yes", value: "yes" }],
        H = { label: `Yes, and don't ask again for ${n1.bold(Y)} in ${n1.bold(F)}`, value: "yes-exact" },
        z = Y.indexOf(" "),
        D = [];
      if (z > 0) {
        let w = Y.substring(0, z);
        D.push({
          label: `Yes, and don't ask again for ${n1.bold(w + ":*")} commands in ${n1.bold(F)}`,
          value: "yes-prefix",
        });
      }
      let C = { label: `No, and tell Claude what to do differently ${n1.bold.dim("(esc)")}`, value: "no" };
      return [...K, H, ...D, C];
    }, [Y, F]);
  return cD.default.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "permission",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
      paddingBottom: 1,
    },
    cD.default.createElement(rH, { title: "Tool use" }),
    cD.default.createElement(
      y,
      { flexDirection: "column", paddingX: 2, paddingY: 1 },
      cD.default.createElement(M, null, "SlashCommand(", Y, ")"),
      cD.default.createElement(M, { dimColor: !0 }, "Execute slash command: /", W),
    ),
    cD.default.createElement(
      y,
      { flexDirection: "column" },
      cD.default.createElement(pO, { permissionResult: A.permissionResult, toolType: "tool" }),
      cD.default.createElement(M, null, "Do you want to proceed?"),
      cD.default.createElement(xA, { options: V, onChange: X, onCancel: () => X("no") }),
    ),
  );
}
function SJ5(A) {
  switch (A) {
    case TY:
      return $NB;
    case KE:
      return _NB;
    case mF:
      return PNB;
    case gQ:
      return LNB;
    case LJ:
      return SNB;
    case mO:
      return kNB;
    case CO:
      return xNB;
    case Y21:
      return lNB;
    case yE:
    case RS:
    case Q6:
      return jNB;
    default:
      return jg1;
  }
}
function yJ5(A) {
  let B = A.tool.userFacingName(A.input);
  if (A.tool === CO) return "Claude Code needs your approval for the plan";
  if (!B || B.trim() === "") return "Claude Code needs your attention";
  return `Claude needs your permission to use ${B}`;
}
function pNB({ toolUseConfirm: A, toolUseContext: B, onDone: Q, onReject: Z, verbose: G }) {
  s0((W, J) => {
    if (J.ctrl && W === "c") (Q(), Z(), A.onReject());
  });
  let Y = yJ5(A);
  RNB(Y);
  let I = SJ5(A.tool);
  return nO0.createElement(I, { toolUseContext: B, toolUseConfirm: A, onDone: Q, onReject: Z, verbose: G });
}
var zG = A1(V1(), 1);
var aO0 = A1(V1(), 1);
function iNB(A, B, Q, Z) {
  let [G, Y] = aO0.useState(0),
    [I, W] = aO0.useState(void 0),
    J = (H, z, D, C = !1) => {
      (A(H, z, D), Z?.(C ? 0 : H.length));
    },
    X = (H, z = !1) => {
      if (!H) return;
      let D = rT(H.display),
        C = D === "bash" || D === "memory" || D === "background" ? H.display.slice(1) : H.display;
      J(C, D, H.pastedContents, z);
    };
  function F() {
    let H = kw1();
    if (G >= H.length) return;
    if (G === 0) {
      let z = B.trim() !== "";
      W(z ? { display: B, pastedContents: Q } : void 0);
    }
    (Y(G + 1), X(H[G], !0));
  }
  function V() {
    if (G > 1) (Y(G - 1), X(kw1()[G - 2]));
    else if (G === 1)
      if ((Y(0), I)) X(I);
      else J("", "prompt", {});
    return G <= 0;
  }
  function K() {
    (W(void 0), Y(0));
  }
  return { historyIndex: G, setHistoryIndex: Y, onHistoryUp: F, onHistoryDown: V, resetHistory: K };
}
var _E = A1(V1(), 1);
function SS(A) {
  return !Array.isArray ? ALB(A) === "[object Array]" : Array.isArray(A);
}
var kJ5 = 1 / 0;
function _J5(A) {
  if (typeof A == "string") return A;
  let B = A + "";
  return B == "0" && 1 / A == -kJ5 ? "-0" : B;
}
function xJ5(A) {
  return A == null ? "" : _J5(A);
}
function iO(A) {
  return typeof A === "string";
}
function tNB(A) {
  return typeof A === "number";
}
function vJ5(A) {
  return A === !0 || A === !1 || (bJ5(A) && ALB(A) == "[object Boolean]");
}
function eNB(A) {
  return typeof A === "object";
}
function bJ5(A) {
  return eNB(A) && A !== null;
}
function lD(A) {
  return A !== void 0 && A !== null;
}
function sO0(A) {
  return !A.trim().length;
}
function ALB(A) {
  return A == null ? (A === void 0 ? "[object Undefined]" : "[object Null]") : Object.prototype.toString.call(A);
}
var INCORRECT_INDEX_TYPE = "Incorrect 'index' type",
  hJ5 = (A) => `Invalid value for key ${A}`,
  gJ5 = (A) => `Pattern length exceeds max of ${A}.`,
  uJ5 = (A) => `Missing ${A} property in key`,
  mJ5 = (A) => `Property 'weight' in key '${A}' must be a positive integer`,
  nNB = Object.prototype.hasOwnProperty;
class BLB {
  constructor(A) {
    ((this._keys = []), (this._keyMap = {}));
    let B = 0;
    (A.forEach((Q) => {
      let Z = QLB(Q);
      (this._keys.push(Z), (this._keyMap[Z.id] = Z), (B += Z.weight));
    }),
      this._keys.forEach((Q) => {
        Q.weight /= B;
      }));
  }
  get(A) {
    return this._keyMap[A];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function QLB(A) {
  let B = null,
    Q = null,
    Z = null,
    G = 1,
    Y = null;
  if (iO(A) || SS(A)) ((Z = A), (B = aNB(A)), (Q = rO0(A)));
  else {
    if (!nNB.call(A, "name")) throw new Error(uJ5("name"));
    let I = A.name;
    if (((Z = I), nNB.call(A, "weight"))) {
      if (((G = A.weight), G <= 0)) throw new Error(mJ5(I));
    }
    ((B = aNB(I)), (Q = rO0(I)), (Y = A.getFn));
  }
  return { path: B, id: Q, weight: G, src: Z, getFn: Y };
}
function aNB(A) {
  return SS(A) ? A : A.split(".");
}
function rO0(A) {
  return SS(A) ? A.join(".") : A;
}
function dJ5(A, B) {
  let Q = [],
    Z = !1,
    G = (Y, I, W) => {
      if (!lD(Y)) return;
      if (!I[W]) Q.push(Y);
      else {
        let J = I[W],
          X = Y[J];
        if (!lD(X)) return;
        if (W === I.length - 1 && (iO(X) || tNB(X) || vJ5(X))) Q.push(xJ5(X));
        else if (SS(X)) {
          Z = !0;
          for (let F = 0, V = X.length; F < V; F += 1) G(X[F], I, W + 1);
        } else if (I.length) G(X, I, W + 1);
      }
    };
  return (G(A, iO(B) ? B.split(".") : B, 0), Z ? Q : Q[0]);
}
var cJ5 = { includeMatches: !1, findAllMatches: !1, minMatchCharLength: 1 },
  lJ5 = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (A, B) => (A.score === B.score ? (A.idx < B.idx ? -1 : 1) : A.score < B.score ? -1 : 1),
  },
  pJ5 = { location: 0, threshold: 0.6, distance: 100 },
  iJ5 = { useExtendedSearch: !1, getFn: dJ5, ignoreLocation: !1, ignoreFieldNorm: !1, fieldNormWeight: 1 },
  r9 = { ...lJ5, ...cJ5, ...pJ5, ...iJ5 },
  nJ5 = /[^ ]+/g;
function aJ5(A = 1, B = 3) {
  let Q = new Map(),
    Z = Math.pow(10, B);
  return {
    get(G) {
      let Y = G.match(nJ5).length;
      if (Q.has(Y)) return Q.get(Y);
      let I = 1 / Math.pow(Y, 0.5 * A),
        W = parseFloat(Math.round(I * Z) / Z);
      return (Q.set(Y, W), W);
    },
    clear() {
      Q.clear();
    },
  };
}
class xg1 {
  constructor({ getFn: A = r9.getFn, fieldNormWeight: B = r9.fieldNormWeight } = {}) {
    ((this.norm = aJ5(B, 3)), (this.getFn = A), (this.isCreated = !1), this.setIndexRecords());
  }
  setSources(A = []) {
    this.docs = A;
  }
  setIndexRecords(A = []) {
    this.records = A;
  }
  setKeys(A = []) {
    ((this.keys = A),
      (this._keysMap = {}),
      A.forEach((B, Q) => {
        this._keysMap[B.id] = Q;
      }));
  }
  create() {
    if (this.isCreated || !this.docs.length) return;
    if (((this.isCreated = !0), iO(this.docs[0])))
      this.docs.forEach((A, B) => {
        this._addString(A, B);
      });
    else
      this.docs.forEach((A, B) => {
        this._addObject(A, B);
      });
    this.norm.clear();
  }
  add(A) {
    let B = this.size();
    if (iO(A)) this._addString(A, B);
    else this._addObject(A, B);
  }
  removeAt(A) {
    this.records.splice(A, 1);
    for (let B = A, Q = this.size(); B < Q; B += 1) this.records[B].i -= 1;
  }
  getValueForItemAtKeyId(A, B) {
    return A[this._keysMap[B]];
  }
  size() {
    return this.records.length;
  }
  _addString(A, B) {
    if (!lD(A) || sO0(A)) return;
    let Q = { v: A, i: B, n: this.norm.get(A) };
    this.records.push(Q);
  }
  _addObject(A, B) {
    let Q = { i: B, $: {} };
    (this.keys.forEach((Z, G) => {
      let Y = Z.getFn ? Z.getFn(A) : this.getFn(A, Z.path);
      if (!lD(Y)) return;
      if (SS(Y)) {
        let I = [],
          W = [{ nestedArrIndex: -1, value: Y }];
        while (W.length) {
          let { nestedArrIndex: J, value: X } = W.pop();
          if (!lD(X)) continue;
          if (iO(X) && !sO0(X)) {
            let F = { v: X, i: J, n: this.norm.get(X) };
            I.push(F);
          } else if (SS(X))
            X.forEach((F, V) => {
              W.push({ nestedArrIndex: V, value: F });
            });
        }
        Q.$[G] = I;
      } else if (iO(Y) && !sO0(Y)) {
        let I = { v: Y, n: this.norm.get(Y) };
        Q.$[G] = I;
      }
    }),
      this.records.push(Q));
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function ZLB(A, B, { getFn: Q = r9.getFn, fieldNormWeight: Z = r9.fieldNormWeight } = {}) {
  let G = new xg1({ getFn: Q, fieldNormWeight: Z });
  return (G.setKeys(A.map(QLB)), G.setSources(B), G.create(), G);
}
function sJ5(A, { getFn: B = r9.getFn, fieldNormWeight: Q = r9.fieldNormWeight } = {}) {
  let { keys: Z, records: G } = A,
    Y = new xg1({ getFn: B, fieldNormWeight: Q });
  return (Y.setKeys(Z), Y.setIndexRecords(G), Y);
}
function kg1(
  A,
  {
    errors: B = 0,
    currentLocation: Q = 0,
    expectedLocation: Z = 0,
    distance: G = r9.distance,
    ignoreLocation: Y = r9.ignoreLocation,
  } = {},
) {
  let I = B / A.length;
  if (Y) return I;
  let W = Math.abs(Z - Q);
  if (!G) return W ? 1 : I;
  return I + W / G;
}
function rJ5(A = [], B = r9.minMatchCharLength) {
  let Q = [],
    Z = -1,
    G = -1,
    Y = 0;
  for (let I = A.length; Y < I; Y += 1) {
    let W = A[Y];
    if (W && Z === -1) Z = Y;
    else if (!W && Z !== -1) {
      if (((G = Y - 1), G - Z + 1 >= B)) Q.push([Z, G]);
      Z = -1;
    }
  }
  if (A[Y - 1] && Y - Z >= B) Q.push([Z, Y - 1]);
  return Q;
}
var pc = 32;
function oJ5(
  A,
  B,
  Q,
  {
    location: Z = r9.location,
    distance: G = r9.distance,
    threshold: Y = r9.threshold,
    findAllMatches: I = r9.findAllMatches,
    minMatchCharLength: W = r9.minMatchCharLength,
    includeMatches: J = r9.includeMatches,
    ignoreLocation: X = r9.ignoreLocation,
  } = {},
) {
  if (B.length > pc) throw new Error(gJ5(pc));
  let F = B.length,
    V = A.length,
    K = Math.max(0, Math.min(Z, V)),
    H = Y,
    z = K,
    D = W > 1 || J,
    C = D ? Array(V) : [],
    w;
  while ((w = A.indexOf(B, z)) > -1) {
    let _ = kg1(B, { currentLocation: w, expectedLocation: K, distance: G, ignoreLocation: X });
    if (((H = Math.min(_, H)), (z = w + F), D)) {
      let b = 0;
      while (b < F) ((C[w + b] = 1), (b += 1));
    }
  }
  z = -1;
  let E = [],
    L = 1,
    O = F + V,
    R = 1 << (F - 1);
  for (let _ = 0; _ < F; _ += 1) {
    let b = 0,
      S = O;
    while (b < S) {
      if (kg1(B, { errors: _, currentLocation: K + S, expectedLocation: K, distance: G, ignoreLocation: X }) <= H)
        b = S;
      else O = S;
      S = Math.floor((O - b) / 2 + b);
    }
    O = S;
    let d = Math.max(1, K - S + 1),
      u = I ? V : Math.min(K + S, V) + F,
      o = Array(u + 2);
    o[u + 1] = (1 << _) - 1;
    for (let j = u; j >= d; j -= 1) {
      let r = j - 1,
        Q1 = Q[A.charAt(r)];
      if (D) C[r] = +!!Q1;
      if (((o[j] = ((o[j + 1] << 1) | 1) & Q1), _)) o[j] |= ((E[j + 1] | E[j]) << 1) | 1 | E[j + 1];
      if (o[j] & R) {
        if (
          ((L = kg1(B, { errors: _, currentLocation: r, expectedLocation: K, distance: G, ignoreLocation: X })), L <= H)
        ) {
          if (((H = L), (z = r), z <= K)) break;
          d = Math.max(1, 2 * K - z);
        }
      }
    }
    if (kg1(B, { errors: _ + 1, currentLocation: K, expectedLocation: K, distance: G, ignoreLocation: X }) > H) break;
    E = o;
  }
  let P = { isMatch: z >= 0, score: Math.max(0.001, L) };
  if (D) {
    let _ = rJ5(C, W);
    if (!_.length) P.isMatch = !1;
    else if (J) P.indices = _;
  }
  return P;
}
function tJ5(A) {
  let B = {};
  for (let Q = 0, Z = A.length; Q < Z; Q += 1) {
    let G = A.charAt(Q);
    B[G] = (B[G] || 0) | (1 << (Z - Q - 1));
  }
  return B;
}
class QR0 {
  constructor(
    A,
    {
      location: B = r9.location,
      threshold: Q = r9.threshold,
      distance: Z = r9.distance,
      includeMatches: G = r9.includeMatches,
      findAllMatches: Y = r9.findAllMatches,
      minMatchCharLength: I = r9.minMatchCharLength,
      isCaseSensitive: W = r9.isCaseSensitive,
      ignoreLocation: J = r9.ignoreLocation,
    } = {},
  ) {
    if (
      ((this.options = {
        location: B,
        threshold: Q,
        distance: Z,
        includeMatches: G,
        findAllMatches: Y,
        minMatchCharLength: I,
        isCaseSensitive: W,
        ignoreLocation: J,
      }),
      (this.pattern = W ? A : A.toLowerCase()),
      (this.chunks = []),
      !this.pattern.length)
    )
      return;
    let X = (V, K) => {
        this.chunks.push({ pattern: V, alphabet: tJ5(V), startIndex: K });
      },
      F = this.pattern.length;
    if (F > pc) {
      let V = 0,
        K = F % pc,
        H = F - K;
      while (V < H) (X(this.pattern.substr(V, pc), V), (V += pc));
      if (K) {
        let z = F - pc;
        X(this.pattern.substr(z), z);
      }
    } else X(this.pattern, 0);
  }
  searchIn(A) {
    let { isCaseSensitive: B, includeMatches: Q } = this.options;
    if (!B) A = A.toLowerCase();
    if (this.pattern === A) {
      let H = { isMatch: !0, score: 0 };
      if (Q) H.indices = [[0, A.length - 1]];
      return H;
    }
    let {
        location: Z,
        distance: G,
        threshold: Y,
        findAllMatches: I,
        minMatchCharLength: W,
        ignoreLocation: J,
      } = this.options,
      X = [],
      F = 0,
      V = !1;
    this.chunks.forEach(({ pattern: H, alphabet: z, startIndex: D }) => {
      let {
        isMatch: C,
        score: w,
        indices: E,
      } = oJ5(A, H, z, {
        location: Z + D,
        distance: G,
        threshold: Y,
        findAllMatches: I,
        minMatchCharLength: W,
        includeMatches: Q,
        ignoreLocation: J,
      });
      if (C) V = !0;
      if (((F += w), C && E)) X = [...X, ...E];
    });
    let K = { isMatch: V, score: V ? F / this.chunks.length : 1 };
    if (V && Q) K.indices = X;
    return K;
  }
}
class yS {
  constructor(A) {
    this.pattern = A;
  }
  static isMultiMatch(A) {
    return sNB(A, this.multiRegex);
  }
  static isSingleMatch(A) {
    return sNB(A, this.singleRegex);
  }
  search() {}
}
function sNB(A, B) {
  let Q = A.match(B);
  return Q ? Q[1] : null;
}
class GLB extends yS {
  constructor(A) {
    super(A);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(A) {
    let B = A === this.pattern;
    return { isMatch: B, score: B ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class YLB extends yS {
  constructor(A) {
    super(A);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(A) {
    let Q = A.indexOf(this.pattern) === -1;
    return { isMatch: Q, score: Q ? 0 : 1, indices: [0, A.length - 1] };
  }
}
class ILB extends yS {
  constructor(A) {
    super(A);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(A) {
    let B = A.startsWith(this.pattern);
    return { isMatch: B, score: B ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class WLB extends yS {
  constructor(A) {
    super(A);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(A) {
    let B = !A.startsWith(this.pattern);
    return { isMatch: B, score: B ? 0 : 1, indices: [0, A.length - 1] };
  }
}
class JLB extends yS {
  constructor(A) {
    super(A);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(A) {
    let B = A.endsWith(this.pattern);
    return { isMatch: B, score: B ? 0 : 1, indices: [A.length - this.pattern.length, A.length - 1] };
  }
}
class XLB extends yS {
  constructor(A) {
    super(A);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(A) {
    let B = !A.endsWith(this.pattern);
    return { isMatch: B, score: B ? 0 : 1, indices: [0, A.length - 1] };
  }
}
class ZR0 extends yS {
  constructor(
    A,
    {
      location: B = r9.location,
      threshold: Q = r9.threshold,
      distance: Z = r9.distance,
      includeMatches: G = r9.includeMatches,
      findAllMatches: Y = r9.findAllMatches,
      minMatchCharLength: I = r9.minMatchCharLength,
      isCaseSensitive: W = r9.isCaseSensitive,
      ignoreLocation: J = r9.ignoreLocation,
    } = {},
  ) {
    super(A);
    this._bitapSearch = new QR0(A, {
      location: B,
      threshold: Q,
      distance: Z,
      includeMatches: G,
      findAllMatches: Y,
      minMatchCharLength: I,
      isCaseSensitive: W,
      ignoreLocation: J,
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(A) {
    return this._bitapSearch.searchIn(A);
  }
}
class GR0 extends yS {
  constructor(A) {
    super(A);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(A) {
    let B = 0,
      Q,
      Z = [],
      G = this.pattern.length;
    while ((Q = A.indexOf(this.pattern, B)) > -1) ((B = Q + G), Z.push([Q, B - 1]));
    let Y = !!Z.length;
    return { isMatch: Y, score: Y ? 0 : 1, indices: Z };
  }
}
var oO0 = [GLB, GR0, ILB, WLB, XLB, JLB, YLB, ZR0],
  rNB = oO0.length,
  eJ5 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
  AX5 = "|";
function BX5(A, B = {}) {
  return A.split(AX5).map((Q) => {
    let Z = Q.trim()
        .split(eJ5)
        .filter((Y) => Y && !!Y.trim()),
      G = [];
    for (let Y = 0, I = Z.length; Y < I; Y += 1) {
      let W = Z[Y],
        J = !1,
        X = -1;
      while (!J && ++X < rNB) {
        let F = oO0[X],
          V = F.isMultiMatch(W);
        if (V) (G.push(new F(V, B)), (J = !0));
      }
      if (J) continue;
      X = -1;
      while (++X < rNB) {
        let F = oO0[X],
          V = F.isSingleMatch(W);
        if (V) {
          G.push(new F(V, B));
          break;
        }
      }
    }
    return G;
  });
}
var QX5 = new Set([ZR0.type, GR0.type]);
class FLB {
  constructor(
    A,
    {
      isCaseSensitive: B = r9.isCaseSensitive,
      includeMatches: Q = r9.includeMatches,
      minMatchCharLength: Z = r9.minMatchCharLength,
      ignoreLocation: G = r9.ignoreLocation,
      findAllMatches: Y = r9.findAllMatches,
      location: I = r9.location,
      threshold: W = r9.threshold,
      distance: J = r9.distance,
    } = {},
  ) {
    ((this.query = null),
      (this.options = {
        isCaseSensitive: B,
        includeMatches: Q,
        minMatchCharLength: Z,
        findAllMatches: Y,
        ignoreLocation: G,
        location: I,
        threshold: W,
        distance: J,
      }),
      (this.pattern = B ? A : A.toLowerCase()),
      (this.query = BX5(this.pattern, this.options)));
  }
  static condition(A, B) {
    return B.useExtendedSearch;
  }
  searchIn(A) {
    let B = this.query;
    if (!B) return { isMatch: !1, score: 1 };
    let { includeMatches: Q, isCaseSensitive: Z } = this.options;
    A = Z ? A : A.toLowerCase();
    let G = 0,
      Y = [],
      I = 0;
    for (let W = 0, J = B.length; W < J; W += 1) {
      let X = B[W];
      ((Y.length = 0), (G = 0));
      for (let F = 0, V = X.length; F < V; F += 1) {
        let K = X[F],
          { isMatch: H, indices: z, score: D } = K.search(A);
        if (H) {
          if (((G += 1), (I += D), Q)) {
            let C = K.constructor.type;
            if (QX5.has(C)) Y = [...Y, ...z];
            else Y.push(z);
          }
        } else {
          ((I = 0), (G = 0), (Y.length = 0));
          break;
        }
      }
      if (G) {
        let F = { isMatch: !0, score: I / G };
        if (Q) F.indices = Y;
        return F;
      }
    }
    return { isMatch: !1, score: 1 };
  }
}
var tO0 = [];
function ZX5(...A) {
  tO0.push(...A);
}
function eO0(A, B) {
  for (let Q = 0, Z = tO0.length; Q < Z; Q += 1) {
    let G = tO0[Q];
    if (G.condition(A, B)) return new G(A, B);
  }
  return new QR0(A, B);
}
var _g1 = { AND: "$and", OR: "$or" },
  AR0 = { PATH: "$path", PATTERN: "$val" },
  BR0 = (A) => !!(A[_g1.AND] || A[_g1.OR]),
  GX5 = (A) => !!A[AR0.PATH],
  YX5 = (A) => !SS(A) && eNB(A) && !BR0(A),
  oNB = (A) => ({ [_g1.AND]: Object.keys(A).map((B) => ({ [B]: A[B] })) });
function VLB(A, B, { auto: Q = !0 } = {}) {
  let Z = (G) => {
    let Y = Object.keys(G),
      I = GX5(G);
    if (!I && Y.length > 1 && !BR0(G)) return Z(oNB(G));
    if (YX5(G)) {
      let J = I ? G[AR0.PATH] : Y[0],
        X = I ? G[AR0.PATTERN] : G[J];
      if (!iO(X)) throw new Error(hJ5(J));
      let F = { keyId: rO0(J), pattern: X };
      if (Q) F.searcher = eO0(X, B);
      return F;
    }
    let W = { children: [], operator: Y[0] };
    return (
      Y.forEach((J) => {
        let X = G[J];
        if (SS(X))
          X.forEach((F) => {
            W.children.push(Z(F));
          });
      }),
      W
    );
  };
  if (!BR0(A)) A = oNB(A);
  return Z(A);
}
function IX5(A, { ignoreFieldNorm: B = r9.ignoreFieldNorm }) {
  A.forEach((Q) => {
    let Z = 1;
    (Q.matches.forEach(({ key: G, norm: Y, score: I }) => {
      let W = G ? G.weight : null;
      Z *= Math.pow(I === 0 && W ? Number.EPSILON : I, (W || 1) * (B ? 1 : Y));
    }),
      (Q.score = Z));
  });
}
function WX5(A, B) {
  let Q = A.matches;
  if (((B.matches = []), !lD(Q))) return;
  Q.forEach((Z) => {
    if (!lD(Z.indices) || !Z.indices.length) return;
    let { indices: G, value: Y } = Z,
      I = { indices: G, value: Y };
    if (Z.key) I.key = Z.key.src;
    if (Z.idx > -1) I.refIndex = Z.idx;
    B.matches.push(I);
  });
}
function JX5(A, B) {
  B.score = A.score;
}
function XX5(A, B, { includeMatches: Q = r9.includeMatches, includeScore: Z = r9.includeScore } = {}) {
  let G = [];
  if (Q) G.push(WX5);
  if (Z) G.push(JX5);
  return A.map((Y) => {
    let { idx: I } = Y,
      W = { item: B[I], refIndex: I };
    if (G.length)
      G.forEach((J) => {
        J(Y, W);
      });
    return W;
  });
}
class l$ {
  constructor(A, B = {}, Q) {
    ((this.options = { ...r9, ...B }),
      this.options.useExtendedSearch,
      (this._keyStore = new BLB(this.options.keys)),
      this.setCollection(A, Q));
  }
  setCollection(A, B) {
    if (((this._docs = A), B && !(B instanceof xg1))) throw new Error(INCORRECT_INDEX_TYPE);
    this._myIndex =
      B ||
      ZLB(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight });
  }
  add(A) {
    if (!lD(A)) return;
    (this._docs.push(A), this._myIndex.add(A));
  }
  remove(A = () => !1) {
    let B = [];
    for (let Q = 0, Z = this._docs.length; Q < Z; Q += 1) {
      let G = this._docs[Q];
      if (A(G, Q)) (this.removeAt(Q), (Q -= 1), (Z -= 1), B.push(G));
    }
    return B;
  }
  removeAt(A) {
    (this._docs.splice(A, 1), this._myIndex.removeAt(A));
  }
  getIndex() {
    return this._myIndex;
  }
  search(A, { limit: B = -1 } = {}) {
    let { includeMatches: Q, includeScore: Z, shouldSort: G, sortFn: Y, ignoreFieldNorm: I } = this.options,
      W = iO(A) ? (iO(this._docs[0]) ? this._searchStringList(A) : this._searchObjectList(A)) : this._searchLogical(A);
    if ((IX5(W, { ignoreFieldNorm: I }), G)) W.sort(Y);
    if (tNB(B) && B > -1) W = W.slice(0, B);
    return XX5(W, this._docs, { includeMatches: Q, includeScore: Z });
  }
  _searchStringList(A) {
    let B = eO0(A, this.options),
      { records: Q } = this._myIndex,
      Z = [];
    return (
      Q.forEach(({ v: G, i: Y, n: I }) => {
        if (!lD(G)) return;
        let { isMatch: W, score: J, indices: X } = B.searchIn(G);
        if (W) Z.push({ item: G, idx: Y, matches: [{ score: J, value: G, norm: I, indices: X }] });
      }),
      Z
    );
  }
  _searchLogical(A) {
    let B = VLB(A, this.options),
      Q = (I, W, J) => {
        if (!I.children) {
          let { keyId: F, searcher: V } = I,
            K = this._findMatches({
              key: this._keyStore.get(F),
              value: this._myIndex.getValueForItemAtKeyId(W, F),
              searcher: V,
            });
          if (K && K.length) return [{ idx: J, item: W, matches: K }];
          return [];
        }
        let X = [];
        for (let F = 0, V = I.children.length; F < V; F += 1) {
          let K = I.children[F],
            H = Q(K, W, J);
          if (H.length) X.push(...H);
          else if (I.operator === _g1.AND) return [];
        }
        return X;
      },
      Z = this._myIndex.records,
      G = {},
      Y = [];
    return (
      Z.forEach(({ $: I, i: W }) => {
        if (lD(I)) {
          let J = Q(B, I, W);
          if (J.length) {
            if (!G[W]) ((G[W] = { idx: W, item: I, matches: [] }), Y.push(G[W]));
            J.forEach(({ matches: X }) => {
              G[W].matches.push(...X);
            });
          }
        }
      }),
      Y
    );
  }
  _searchObjectList(A) {
    let B = eO0(A, this.options),
      { keys: Q, records: Z } = this._myIndex,
      G = [];
    return (
      Z.forEach(({ $: Y, i: I }) => {
        if (!lD(Y)) return;
        let W = [];
        if (
          (Q.forEach((J, X) => {
            W.push(...this._findMatches({ key: J, value: Y[X], searcher: B }));
          }),
          W.length)
        )
          G.push({ idx: I, item: Y, matches: W });
      }),
      G
    );
  }
  _findMatches({ key: A, value: B, searcher: Q }) {
    if (!lD(B)) return [];
    let Z = [];
    if (SS(B))
      B.forEach(({ v: G, i: Y, n: I }) => {
        if (!lD(G)) return;
        let { isMatch: W, score: J, indices: X } = Q.searchIn(G);
        if (W) Z.push({ score: J, key: A, value: G, idx: Y, norm: I, indices: X });
      });
    else {
      let { v: G, n: Y } = B,
        { isMatch: I, score: W, indices: J } = Q.searchIn(G);
      if (I) Z.push({ score: W, key: A, value: G, norm: Y, indices: J });
    }
    return Z;
  }
}
l$.version = "7.0.0";
l$.createIndex = ZLB;
l$.parseIndex = sJ5;
l$.config = r9;
l$.parseQuery = VLB;
ZX5(FLB);
var FX5 = /[:_-]/g;
function W21(A) {
  return A.startsWith("/");
}
function VX5(A) {
  if (!W21(A)) return !1;
  if (!A.includes(" ")) return !1;
  if (A.endsWith(" ")) return !1;
  return !0;
}
function KX5(A) {
  return `/${A} `;
}
function KLB(A) {
  let B = A.userFacingName(),
    Q = A.aliases && A.aliases.length > 0 ? ` (${A.aliases.join(", ")})` : "";
  return {
    id: B,
    displayText: `/${B}${Q}`,
    description:
      A.description + (A.type === "prompt" && A.argNames?.length ? ` (arguments: ${A.argNames.join(", ")})` : ""),
    metadata: A,
  };
}
function HLB(A, B) {
  if (!W21(A)) return [];
  if (VX5(A)) return [];
  let Q = A.slice(1).toLowerCase().trim();
  if (Q === "") {
    let W = B.filter((H) => !H.isHidden),
      J = [],
      X = [],
      F = [],
      V = [];
    W.forEach((H) => {
      if (H.type === "prompt" && H.source === "localSettings") J.push(H);
      else if (H.type === "prompt" && H.source === "projectSettings") X.push(H);
      else if (H.type === "prompt" && H.source === "policySettings") F.push(H);
      else V.push(H);
    });
    let K = (H, z) => H.userFacingName().localeCompare(z.userFacingName());
    return (J.sort(K), X.sort(K), F.sort(K), V.sort(K), [...J, ...X, ...F, ...V].map(KLB));
  }
  let Z = B.filter((W) => !W.isHidden).flatMap((W) => {
      let J = W.userFacingName(),
        X = [];
      if (
        (X.push({ nameKey: J, commandName: W.userFacingName(), command: W }),
        J.split(FX5)
          .filter(Boolean)
          .forEach((V) => {
            X.push({ partKey: V, commandName: W.userFacingName(), command: W });
          }),
        W.aliases)
      )
        W.aliases.forEach((V) => {
          X.push({ aliasKey: V, commandName: W.userFacingName(), command: W });
        });
      return (
        W.description.split(" ").forEach((V) => {
          let K = V.toLowerCase().replace(/[^a-z0-9]/g, "");
          if (K) X.push({ descriptionKey: K, commandName: W.userFacingName(), command: W });
        }),
        X
      );
    }),
    Y = new l$(Z, {
      includeScore: !0,
      threshold: 0.3,
      location: 0,
      distance: 100,
      keys: [
        { name: "nameKey", weight: 3 },
        { name: "partKey", weight: 2 },
        { name: "aliasKey", weight: 2 },
        { name: "descriptionKey", weight: 0.5 },
      ],
    }).search(Q),
    I = new Map();
  return (
    Y.forEach((W) => {
      let { commandName: J, command: X } = W.item;
      if (!I.has(J)) I.set(J, X);
    }),
    Array.from(I.entries()).map(([W, J]) => KLB(J))
  );
}
function YR0(A, B, Q, Z, G, Y) {
  let I = typeof A === "string" ? A : A.id,
    W = KX5(I);
  if ((Z(W), G(W.length), B)) {
    let J = typeof A === "string" ? Zf(I, Q) : A.metadata;
    if (J.type !== "prompt" || (J.argNames ?? []).length === 0) Y(W, !0);
  }
}
import { dirname as HX5, basename as zX5, join as DX5, sep as CX5 } from "path";
var UX5 = 500,
  $X5 = 300000,
  zLB = new nw({ max: UX5, ttl: $X5 });
function wX5(A, B) {
  if (!A) return { directory: B || AA(), prefix: "" };
  let Q = i9(A, B);
  if (A.endsWith("/") || A.endsWith(CX5)) return { directory: Q, prefix: "" };
  let Z = HX5(Q),
    G = zX5(A);
  return { directory: Z, prefix: G };
}
function qX5(A) {
  let B = zLB.get(A);
  if (B) return B;
  try {
    let G = w1()
      .readdirSync(A)
      .filter((Y) => Y.isDirectory() && !Y.name.startsWith("."))
      .map((Y) => ({ name: Y.name, path: DX5(A, Y.name), type: "directory" }))
      .slice(0, 100);
    return (zLB.set(A, G), G);
  } catch (Q) {
    return (U1(Q instanceof Error ? Q : new Error(String(Q)), wZA), []);
  }
}
async function DLB(A, B = {}) {
  let { basePath: Q = AA(), maxResults: Z = 10 } = B,
    { directory: G, prefix: Y } = wX5(A, Q),
    I = qX5(G),
    W = Y.toLowerCase();
  return I.filter((X) => X.name.toLowerCase().startsWith(W))
    .slice(0, Z)
    .map((X) => ({ id: X.path, displayText: X.name + "/", description: "directory", type: "directory" }));
}
import * as OJ from "path";
var vg1 = [],
  IR0 = null,
  WR0 = 0,
  EX5 = 60000;
function NX5(A) {
  let B = new Set();
  return (
    A.forEach((Q) => {
      let G = OJ.dirname(Q);
      while (G !== "." && G !== OJ.parse(G).root) (B.add(G), (G = OJ.dirname(G)));
    }),
    [...B].map((Q) => Q + OJ.sep)
  );
}
async function LX5() {
  return (await Promise.all(PPA.map((B) => OL(B)))).flatMap((B) => B.map((Q) => Q.filePath));
}
async function ULB() {
  let A = C4(),
    B = setTimeout(() => {
      A.abort();
    }, 1e4);
  try {
    let [Q, Z] = await Promise.all([
        pk(["--files", "--follow", "--hidden"], ".", A.signal).then((I) => I.map((W) => OJ.relative(WQ(), W))),
        LX5(),
      ]),
      G = [...Q, ...Z];
    return [...NX5(G), ...G];
  } finally {
    clearTimeout(B);
  }
}
function MX5(A, B) {
  let Q = Math.min(A.length, B.length),
    Z = 0;
  while (Z < Q && A[Z] === B[Z]) Z++;
  return A.substring(0, Z);
}
function $LB(A) {
  if (A.length === 0) return "";
  let B = A.map((Z) => Z.displayText),
    Q = B[0];
  for (let Z = 1; Z < B.length; Z++) {
    let G = B[Z];
    if (((Q = MX5(Q, G)), Q === "")) return "";
  }
  return Q;
}
function JR0(A) {
  return { id: `file-${A}`, displayText: A };
}
var bg1 = 15;
function OX5(A, B) {
  if (!B) {
    let I = new Set();
    for (let W of A) {
      let J = W.split(OJ.sep)[0];
      if (J) {
        if ((I.add(J), I.size >= bg1)) break;
      }
    }
    return [...I].sort().map(JR0);
  }
  let Q = A.map((I) => {
      return { path: I, filename: OJ.basename(I), testPenalty: I.includes("test") ? 1 : 0 };
    }),
    Z = B.lastIndexOf(OJ.sep);
  if (Z > 2)
    Q = Q.filter((I) => {
      return I.path.substring(0, Z).startsWith(B.substring(0, Z));
    });
  let Y = new l$(Q, {
    includeScore: !0,
    threshold: 0.5,
    keys: [
      { name: "path", weight: 1 },
      { name: "filename", weight: 2 },
    ],
  }).search(B, { limit: bg1 });
  return (
    (Y = Y.sort((I, W) => {
      if (I.score === void 0 || W.score === void 0) return 0;
      if (Math.abs(I.score - W.score) > 0.05) return I.score - W.score;
      return I.item.testPenalty - W.item.testPenalty;
    })),
    Y.map((I) => I.item.path)
      .slice(0, bg1)
      .map(JR0)
  );
}
function CLB() {
  if (!IR0)
    IR0 = ULB().then((A) => {
      return ((vg1 = A), (WR0 = Date.now()), (IR0 = null), A);
    });
}
async function RX5() {
  let A = w1(),
    B = AA();
  try {
    return A.readdirSync(B).map((Z) => {
      let G = OJ.join(B, Z.name),
        Y = OJ.relative(B, G);
      return Z.isDirectory() ? Y + OJ.sep : Y;
    });
  } catch (Q) {
    return (U1(Q, _ZA), []);
  }
}
async function wLB(A, B = !1) {
  if (!A && !B) return [];
  if (A === "" || A === "." || A === "./") {
    let Q = await RX5();
    return (CLB(), Q.slice(0, bg1).map(JR0));
  }
  try {
    let Q = Date.now(),
      Z = Q - WR0 > EX5;
    if (vg1.length === 0) ((vg1 = await ULB()), (WR0 = Q));
    else if (Z) CLB();
    let G = A,
      Y = "." + OJ.sep;
    if (A.startsWith(Y)) G = A.substring(2);
    if (G.startsWith("~")) G = i9(G);
    return OX5(vg1, G);
  } catch (Q) {
    return (U1(Q, kZA), []);
  }
}
function fg1(A, B, Q, Z, G, Y) {
  let I = typeof A === "string" ? A : A.displayText,
    W = B.substring(0, Z) + I + B.substring(Z + Q.length);
  G(W);
  let J = Z + I.length;
  Y(J);
}
import * as NLB from "path";
function qLB(A) {
  switch (A.type) {
    case "file":
      return { id: `file-${A.path}`, displayText: A.displayText, description: A.description };
    case "mcp_resource":
      return { id: `mcp-resource-${A.server}__${A.uri}`, displayText: A.displayText, description: A.description };
    case "agent":
      return { id: `agent-${A.agentType}`, displayText: A.displayText, description: A.description, color: A.color };
  }
}
var XR0 = 15,
  ELB = 60;
function TX5(A) {
  if (A.length <= ELB) return A;
  return A.substring(0, ELB - 3) + "...";
}
async function PX5(A, B = !1) {
  if (!A && !B) return [];
  try {
    let Z = (await QS()).map((Y) => ({
      type: "agent",
      displayText: `agent-${Y.agentType}`,
      description: `Agent: ${TX5(Y.whenToUse)}`,
      agentType: Y.agentType,
      color: d01(Y.agentType),
    }));
    if (!A) return Z;
    let G = A.toLowerCase();
    return Z.filter((Y) => Y.agentType.toLowerCase().includes(G) || Y.displayText.toLowerCase().includes(G));
  } catch (Q) {
    return (U1(Q, STYLE_CODE_249), []);
  }
}
async function FR0(A, B, Q = !1) {
  if (!A && !Q) return [];
  let [Z, G] = await Promise.all([wLB(A, Q), PX5(A, Q)]),
    Y = Z.map((F) => ({
      type: "file",
      displayText: F.displayText,
      description: F.description,
      path: F.displayText,
      filename: NLB.basename(F.displayText),
    })),
    I = Object.values(B)
      .flat()
      .map((F) => ({
        type: "mcp_resource",
        displayText: `${F.server}:${F.uri}`,
        description: F.name + (F.description ? ` - ${F.description}` : ""),
        server: F.server,
        uri: F.uri,
        name: F.name || F.uri,
      })),
    W = [...Y, ...I, ...G];
  if (W.length === 0) return [];
  if (!A) return W.slice(0, XR0).map(qLB);
  return new l$(W, {
    includeScore: !0,
    threshold: 0.4,
    keys: [
      { name: "displayText", weight: 2 },
      { name: "name", weight: 3 },
      { name: "server", weight: 1 },
      { name: "description", weight: 1 },
      { name: "path", weight: 2 },
      { name: "filename", weight: 2 },
      { name: "agentType", weight: 3 },
    ],
  })
    .search(A, { limit: XR0 })
    .map((F) => F.item)
    .slice(0, XR0)
    .map(qLB);
}
function LLB(A) {
  if (A.isQuoted) return A.token.slice(2).replace(/"$/, "");
  else if (A.token.startsWith("@")) return A.token.substring(1);
  else return A.token;
}
function VR0(A) {
  let { displayText: B, mode: Q, hasAtPrefix: Z, needsQuotes: G, isQuoted: Y, isComplete: I } = A,
    W = I ? " " : "";
  if (Y || G) return Q === "bash" ? `"${B}"${W}` : `@"${B}"${W}`;
  else if (Z) return Q === "bash" ? `${B}${W}` : `@${B}${W}`;
  else return B;
}
function QJ1(A, B, Q = !1) {
  if (!A) return null;
  let Z = A.substring(0, B);
  if (Q) {
    let I = /@"([^"]*)"?$/,
      W = Z.match(I);
    if (W && W.index !== void 0) return { token: W[0], startPos: W.index, isQuoted: !0 };
  }
  let G = Q ? /(@[a-zA-Z0-9_\-./\\()[\]~]*|[a-zA-Z0-9_\-./\\()[\]~]+)$/ : /[a-zA-Z0-9_\-./\\()[\]~]+$/,
    Y = Z.match(G);
  if (!Y || Y.index === void 0) return null;
  return { token: Y[0], startPos: Y.index, isQuoted: !1 };
}
function jX5(A) {
  if (W21(A)) {
    let B = A.indexOf(" ");
    if (B === -1) return { commandName: A.slice(1), args: "" };
    return { commandName: A.slice(1, B), args: A.slice(B + 1) };
  }
  return null;
}
function SX5(A, B) {
  return !A && B.includes(" ") && !B.endsWith(" ");
}
function MLB({
  commands: A,
  onInputChange: B,
  onSubmit: Q,
  setCursorOffset: Z,
  input: G,
  cursorOffset: Y,
  mode: I,
  setSuggestionsState: W,
  suggestionsState: { suggestions: J, selectedSuggestion: X, commandArgumentHint: F },
}) {
  let [V, K] = _E.useState("none"),
    [H, z] = _E.useState(void 0),
    [D] = dB(),
    C = _E.useCallback(() => {
      (W(() => ({ commandArgumentHint: void 0, suggestions: [], selectedSuggestion: -1 })), K("none"), z(void 0));
    }, [W]),
    w = _E.useCallback(
      async (P, _ = !1) => {
        let b = await FR0(P, D.mcp.resources, _);
        if (b.length === 0) {
          C();
          return;
        }
        (W(() => ({ commandArgumentHint: void 0, suggestions: b, selectedSuggestion: b.length > 0 ? 0 : -1 })),
          K(b.length > 0 ? "file" : "none"),
          z(void 0));
      },
      [D.mcp.resources, C, W],
    ),
    E = zs(w, 200),
    L = _E.useCallback(
      async (P, _ = Y) => {
        let b = P.substring(0, _).match(/(^|\s)@([a-zA-Z0-9_\-./\\()[\]~]*|"[^"]*"?)$/),
          S = _ === P.length && _ > 0 && P.length > 0 && P[_ - 1] === " ";
        if (I === "prompt" && W21(P) && _ > 0) {
          let d = jX5(P);
          if (d && d.commandName === "add-dir" && d.args) {
            let { args: u } = d;
            if (u.match(/\s+$/)) {
              C();
              return;
            }
            let o = await DLB(u);
            if (o.length > 0) {
              (W(() => ({ suggestions: o, selectedSuggestion: 0, commandArgumentHint: void 0 })), K("directory"));
              return;
            }
            C();
            return;
          }
        }
        if (I === "prompt" && W21(P) && _ > 0 && !SX5(S, P)) {
          let d = HLB(P, A),
            u = void 0;
          if (P.length > 1) {
            let o = P.endsWith(" ") ? P.slice(1, -1) : P.slice(1),
              m = A.find((j) => j.userFacingName() === o && j.argumentHint);
            if (m?.argumentHint) u = m.argumentHint;
          }
          if (
            (W(() => ({ commandArgumentHint: u, suggestions: d, selectedSuggestion: d.length > 0 ? 0 : -1 })),
            K(d.length > 0 ? "command" : "none"),
            d.length > 0)
          ) {
            let o = Math.max(...d.map((m) => m.displayText.length));
            z(o + 5);
          }
          return;
        }
        if (V === "command") C();
        if (b) {
          let d = QJ1(P, _, !0);
          if (d && d.token.startsWith("@")) {
            let u = LLB(d);
            E(u, !0);
            return;
          }
        }
        if (V === "file") {
          let d = QJ1(P, _, !0);
          if (d) {
            let u = LLB(d);
            E(u, !1);
          } else C();
        }
      },
      [Y, V, A, W, C, E, I],
    );
  _E.useEffect(() => {
    L(G);
  }, [G, L]);
  let O = _E.useCallback(async () => {
      if (J.length > 0) {
        let P = X === -1 ? 0 : X;
        if (V === "command" && P < J.length) {
          let _ = J[P];
          if (_) (YR0(_, !1, A, B, Z, Q), C());
        } else if (V === "directory" && J.length > 0) {
          let _ = J[P];
          if (_) {
            let b = G.indexOf(" "),
              d = G.slice(0, b + 1) + _.id + "/";
            (B(d), Z(d.length), W((u) => ({ ...u, commandArgumentHint: void 0 })), L(d, d.length));
          }
        } else if (V === "file" && J.length > 0) {
          let _ = QJ1(G, Y, !0);
          if (!_) {
            C();
            return;
          }
          let b = $LB(J),
            S = _.token.startsWith("@"),
            d;
          if (_.isQuoted) d = _.token.slice(2).replace(/"$/, "").length;
          else if (S) d = _.token.length - 1;
          else d = _.token.length;
          if (b.length > d) {
            let u = VR0({
              displayText: b,
              mode: I,
              hasAtPrefix: S,
              needsQuotes: !1,
              isQuoted: _.isQuoted,
              isComplete: !1,
            });
            (fg1(u, G, _.token, _.startPos, B, Z), L(G.replace(_.token, u), Y));
          } else if (P < J.length) {
            let u = J[P];
            if (u) {
              let o = u.displayText.includes(" "),
                m = VR0({
                  displayText: u.displayText,
                  mode: I,
                  hasAtPrefix: S,
                  needsQuotes: o,
                  isQuoted: _.isQuoted,
                  isComplete: !0,
                });
              (fg1(m, G, _.token, _.startPos, B, Z), C());
            }
          }
        }
      } else if (G.trim() !== "") {
        let P = QJ1(G, Y, !0);
        if (P) {
          let _ = P.token.startsWith("@"),
            b = _ ? P.token.substring(1) : P.token,
            S = await FR0(b, D.mcp.resources, _);
          if (S.length > 0)
            (W(() => ({ commandArgumentHint: void 0, suggestions: S, selectedSuggestion: 0 })), K("file"), z(void 0));
        }
      }
    }, [J, X, G, V, A, I, B, Z, Q, C, Y, L, D.mcp.resources, W]),
    R = _E.useCallback(() => {
      if (X < 0 || J.length === 0) return;
      if (V === "command" && X < J.length) {
        let P = J[X];
        if (P) (YR0(P, !0, A, B, Z, Q), C());
      } else if (V === "file" && X < J.length) {
        let P = QJ1(G, Y, !0);
        if (P) {
          let _ = J[X];
          if (_) {
            let b = P.token.startsWith("@"),
              S = _.displayText.includes(" "),
              d = VR0({
                displayText: _.displayText,
                mode: I,
                hasAtPrefix: b,
                needsQuotes: S,
                isQuoted: P.isQuoted,
                isComplete: !0,
              });
            (fg1(d, G, P.token, P.startPos, B, Z), C());
          }
        }
      }
    }, [J, X, V, A, G, Y, I, B, Z, Q, C]);
  return (
    s0((P, _) => {
      if (_.tab && !_.shift) {
        O();
        return;
      }
      if (J.length === 0) return;
      if (_.downArrow || (_.ctrl && P === "n")) {
        W((b) => ({ ...b, selectedSuggestion: b.selectedSuggestion >= J.length - 1 ? 0 : b.selectedSuggestion + 1 }));
        return;
      }
      if (_.upArrow || (_.ctrl && P === "p")) {
        W((b) => ({ ...b, selectedSuggestion: b.selectedSuggestion <= 0 ? J.length - 1 : b.selectedSuggestion - 1 }));
        return;
      }
      if (_.return) R();
      if (_.escape) C();
    }),
    { suggestions: J, selectedSuggestion: X, suggestionType: V, maxColumnWidth: H, commandArgumentHint: F }
  );
}
var hg1 = A1(V1(), 1);
var Gf = A1(V1(), 1);
var yX5 = 1e4;
function OLB(A) {
  let [B, Q] = Gf.useState("INSERT"),
    Z = Gf.default.useRef(""),
    G = Gf.default.useRef(null),
    Y = Gf.default.useRef(""),
    I = Gf.default.useRef(""),
    W = Gf.default.useRef(null),
    { onMessage: J } = A,
    X = vw1(A),
    F = (b, S) => {
      return b === S && (b === "d" || b === "c");
    },
    V = (b, S) => {
      switch (b) {
        case "h":
          return S.left();
        case "l":
          return S.right();
        case "j":
          return S.downLogicalLine();
        case "k":
          return S.upLogicalLine();
        case "0":
          return S.startOfLogicalLine();
        case "^":
          return S.firstNonBlankInLogicalLine();
        case "$":
          return S.endOfLogicalLine();
        case "w":
          return S.nextWord();
        case "e":
          return S.endOfWord();
        case "b":
          return S.prevWord();
        case "W":
          return S.nextWORD();
        case "E":
          return S.endOfWORD();
        case "B":
          return S.prevWORD();
        case "gg":
          return S.startOfFirstLine();
        case "G":
          return S.startOfLastLine();
        default:
          return null;
      }
    },
    K = (b, S, d = 1) => {
      if (F(b, Z.current)) return S.startOfLine();
      let u = S;
      for (let o = 0; o < d; o++) {
        if (!u) break;
        u = V(b, u);
      }
      return u;
    },
    H = (b, S, d, u = 1) => {
      let o = X.offset,
        m = b === "change";
      if (F(S, Z.current)) {
        let r = d.startOfLogicalLine();
        if (
          d.text.indexOf(`
`) === -1
        )
          (A.onChange(""), (o = 0));
        else {
          let { line: Q1 } = d.getPosition();
          if (b === "delete") {
            let J1 = d.text.split(`
`),
              R1 = Math.min(u, J1.length - Q1);
            J1.splice(Q1, R1);
            let s1 = J1.join(`
`);
            (A.onChange(s1),
              (o = O5.fromText(s1, A.columns, Q1 < J1.length ? r.offset : Math.max(0, r.offset - 1)).offset));
          } else if (b === "change") {
            let J1 = d.text.split(`
`);
            for (let R1 = 0; R1 < Math.min(u, J1.length - Q1); R1++) J1[Q1 + R1] = "";
            (A.onChange(
              J1.join(`
`),
            ),
              (o = r.offset));
          } else o = r.offset;
        }
        return { newOffset: o, switchToInsert: m };
      }
      let j = K(S, d, u);
      if (!j || d.equals(j)) return { newOffset: o, switchToInsert: m };
      if (b === "move") o = j.offset;
      else {
        let [r, Q1] = d.offset <= j.offset ? [d, j] : [j, d],
          J1 = Q1;
        if (S === "e" && d.offset <= j.offset) J1 = Q1.right();
        else if ((S === "w" || S === "W") && b === "change") J1 = L(d, S, u);
        let R1 = r.modifyText(J1, "");
        if ((A.onChange(R1.text), b === "change")) o = r.offset;
        else o = R1.offset;
      }
      return { newOffset: o, switchToInsert: m };
    },
    z = (b) => {
      if (b !== void 0) X.setOffset(b);
      (Q("INSERT"), A.onModeChange?.("INSERT"), J?.(!0, "-- INSERT MODE --"), setTimeout(() => J?.(!1), 1000));
    },
    D = () => {
      (Q("NORMAL"), A.onModeChange?.("NORMAL"), J?.(!0, "-- NORMAL MODE --"), setTimeout(() => J?.(!1), 1000));
    },
    C = (b) => {
      G.current = b;
    },
    w = (b, S) => {
      if (S === "below") {
        let u = b.endOfLogicalLine().insert(`
`);
        return (A.onChange(u.text), u.offset);
      } else {
        let d = b.startOfLogicalLine(),
          u = d.insert(`
`);
        return (A.onChange(u.text), d.offset);
      }
    },
    E = (b, S) => {
      let d = b.text[b.offset] ?? "";
      return S.test(d);
    },
    L = (b, S, d) => {
      let o = S === "w" ? /\w/ : /\S/;
      if (!E(b, o)) return K(S, b, d) || b;
      let m = b;
      while (E(m, o) && !m.isAtEnd()) m = m.right();
      if (d > 1)
        for (let j = 1; j < d; j++) {
          while (!E(m, o) && !m.isAtEnd()) m = m.right();
          while (E(m, o) && !m.isAtEnd()) m = m.right();
        }
      return m;
    },
    O = (b, S, d, u, o = 1) => {
      let m = b.text,
        j = 0;
      if (d === "forward") {
        for (let r = b.offset + 1; r < m.length; r++)
          if (m[r] === S) {
            if ((j++, j === o)) {
              let Q1 = u ? Math.max(b.offset, r - 1) : r;
              return new O5(b.measuredText, Q1);
            }
          }
      } else
        for (let r = b.offset - 1; r >= 0; r--)
          if (m[r] === S) {
            if ((j++, j === o)) {
              let Q1 = u ? Math.min(b.offset, r + 1) : r;
              return new O5(b.measuredText, Q1);
            }
          }
      return null;
    },
    R = (b) => {
      let S = G.current;
      if (!S) return;
      switch (S.type) {
        case "delete":
          if (S.motion)
            if (S.motion.length === 2 && "fFtT".includes(S.motion[0])) {
              let d = S.motion[0],
                u = S.motion[1],
                o = d === "f" || d === "t" ? "forward" : "backward",
                m = d === "t" || d === "T",
                j = O(b, u, o, m, S.count || 1);
              if (j) {
                let r = b.offset <= j.offset,
                  [Q1, J1] = r ? [b, j] : [j, b],
                  R1 = J1,
                  s1 = Q1;
                if (m) R1 = J1.right();
                else R1 = J1.right();
                let Z0 = s1.modifyText(R1, "");
                (A.onChange(Z0.text), X.setOffset(Z0.offset));
              }
            } else {
              let { newOffset: d } = H("delete", S.motion, b, S.count || 1);
              X.setOffset(d);
            }
          break;
        case "change":
          if (S.motion)
            if (S.motion.length === 2 && "fFtT".includes(S.motion[0])) {
              let d = S.motion[0],
                u = S.motion[1],
                o = d === "f" || d === "t" ? "forward" : "backward",
                m = d === "t" || d === "T",
                j = O(b, u, o, m, S.count || 1);
              if (j) {
                let r = b.offset <= j.offset,
                  [Q1, J1] = r ? [b, j] : [j, b],
                  R1 = J1,
                  s1 = Q1;
                if (m) R1 = J1.right();
                else R1 = J1.right();
                let Z0 = s1.modifyText(R1, "");
                (A.onChange(Z0.text), X.setOffset(s1.offset), z(s1.offset));
              }
            } else {
              let { newOffset: d } = H("change", S.motion, b, S.count || 1);
              (X.setOffset(d), z(d));
            }
          break;
        case "insert":
          if (S.insertedText) {
            let d = b.insert(S.insertedText);
            (A.onChange(d.text), X.setOffset(d.offset));
          }
          break;
        case "x": {
          let d = S.count || 1,
            u = b;
          for (let o = 0; o < d; o++) if (!u.equals(u.del())) u = u.del();
          (A.onChange(u.text), X.setOffset(u.offset));
          break;
        }
        case "o": {
          let d = w(b, "below");
          z(d);
          break;
        }
        case "O": {
          let d = w(b, "above");
          z(d);
          break;
        }
        case "replace":
          break;
        case "r": {
          if (S.replacementChar) {
            let d = S.count || 1,
              u = b;
            for (let o = 0; o < d; o++)
              if (((u = u.modifyText(u.right(), S.replacementChar)), o < d - 1))
                u = O5.fromText(u.text, A.columns, u.offset + 1);
            (A.onChange(u.text), X.setOffset(b.offset));
          }
          break;
        }
      }
    },
    P = (b = !0) => {
      if (!I.current) return 1;
      let S = parseInt(I.current, 10);
      if (isNaN(S)) {
        if (b) I.current = "";
        return 1;
      }
      let d = Math.min(S, yX5);
      if (b) I.current = "";
      return d;
    };
  return {
    ...X,
    onInput: (b, S) => {
      let d = O5.fromText(A.value, A.columns, X.offset);
      if (S.ctrl) {
        X.onInput(b, S);
        return;
      }
      if (S.escape && B === "INSERT") {
        if (Y.current) (C({ type: "insert", insertedText: Y.current }), (Y.current = ""));
        D();
        return;
      }
      if (B === "NORMAL" && W.current) {
        if ((W.current === "change" && b === "c") || (W.current === "delete" && b === "d")) {
          let Q1 = W.current,
            J1 = P(),
            { newOffset: R1 } = H(Q1, b, d, J1);
          if (
            (X.setOffset(R1),
            C({ type: Q1, motion: b, count: J1 }),
            (W.current = null),
            (Z.current = ""),
            Q1 === "change")
          )
            z(R1);
          return;
        }
        if (Z.current && "fFtT".includes(Z.current)) {
          let Q1 = Z.current,
            J1 = P(!1),
            R1 = Q1 === "f" || Q1 === "t" ? "forward" : "backward",
            s1 = Q1 === "t" || Q1 === "T",
            Z0 = O(d, b, R1, s1, J1 || 1);
          if (Z0) {
            let _0 = W.current,
              D0 = d.offset <= Z0.offset,
              [C1, g1] = D0 ? [d, Z0] : [Z0, d],
              v1 = g1,
              o1 = C1;
            if (s1) v1 = g1.right();
            else v1 = g1.right();
            let K0 = o1.modifyText(v1, "");
            A.onChange(K0.text);
            let U0 = _0 === "change" ? o1.offset : K0.offset;
            if ((X.setOffset(U0), C({ type: _0, motion: Q1 + b, count: J1 || 1 }), _0 === "change")) z(U0);
          }
          ((W.current = null), (Z.current = ""), (I.current = ""));
          return;
        }
        if ("fFtT".includes(b)) {
          Z.current = b;
          return;
        }
        if ("0123456789".includes(b)) {
          I.current += b;
          return;
        }
        let m = W.current,
          j = P(),
          { newOffset: r } = H(m, b, d, j);
        if ((X.setOffset(r), C({ type: m, motion: b, count: j }), (W.current = null), (Z.current = ""), m === "change"))
          z(r);
        return;
      }
      let u = (m, j, r) => {
          let { newOffset: Q1 } = H(m, j, d, r || 1);
          if ((X.setOffset(Q1), m !== "move")) C({ type: m, motion: j, count: r });
          if (m === "change") z(Q1);
          Z.current = "";
        },
        o = (m) => {
          ((Y.current = ""), z(m.offset));
        };
      if (B === "NORMAL" && Z.current) {
        let m = Z.current;
        switch (m) {
          case "d":
            if (b === "d") {
              let j = P();
              (u("delete", b, j), (W.current = null));
              return;
            }
            return;
          case "c":
            if (b === "c") {
              let j = P();
              (u("change", b, j), (W.current = null));
              return;
            }
            return;
          case "g":
            if (b === "g") {
              let j = P();
              u("move", "gg", j);
              return;
            }
            break;
          case "r": {
            let j = P(),
              r = d;
            for (let Q1 = 0; Q1 < j; Q1++)
              if (((r = r.modifyText(r.right(), b)), Q1 < j - 1)) r = O5.fromText(r.text, A.columns, r.offset + 1);
            (A.onChange(r.text),
              X.setOffset(d.offset),
              C({ type: "r", replacementChar: b, count: j }),
              (Z.current = ""));
            return;
          }
          case "f":
          case "F":
          case "t":
          case "T": {
            let j = P(),
              J1 = O(d, b, m === "f" || m === "t" ? "forward" : "backward", m === "t" || m === "T", j);
            if (J1) X.setOffset(J1.offset);
            Z.current = "";
            return;
          }
        }
        Z.current = "";
      }
      if (B === "NORMAL") {
        if ("0123456789".includes(b)) {
          if (b === "0" && I.current === "") {
            let { newOffset: m } = H("move", "0", d);
            X.setOffset(m);
            return;
          }
          I.current += b;
          return;
        }
        switch (b) {
          case ".": {
            R(d);
            return;
          }
          case "u": {
            if (A.onUndo) A.onUndo();
            return;
          }
          case "i":
            ((I.current = ""), (Y.current = ""), z());
            return;
          case "I": {
            ((I.current = ""), o(d.startOfLogicalLine()));
            return;
          }
          case "a": {
            ((I.current = ""), o(d.right()));
            return;
          }
          case "A": {
            ((I.current = ""), o(d.endOfLogicalLine()));
            return;
          }
          case "o": {
            I.current = "";
            let m = w(d, "below");
            (C({ type: "o" }), o(new O5(d.measuredText, m)));
            return;
          }
          case "O": {
            I.current = "";
            let m = w(d, "above");
            (C({ type: "O" }), o(new O5(d.measuredText, m)));
            return;
          }
          case "h":
          case "l":
          case "j":
          case "k":
          case "^":
          case "$":
          case "w":
          case "e":
          case "b":
          case "W":
          case "E":
          case "B":
          case "G": {
            let m = P();
            u("move", b, m);
            return;
          }
          case "g": {
            Z.current = "g";
            return;
          }
          case "r": {
            Z.current = "r";
            return;
          }
          case "f":
          case "F":
          case "t":
          case "T": {
            Z.current = b;
            return;
          }
          case "x": {
            let m = P(),
              j = d;
            for (let r = 0; r < m; r++) if (!j.equals(j.del())) j = j.del();
            (A.onChange(j.text), X.setOffset(j.offset), C({ type: "x", count: m }));
            return;
          }
          case "d":
            ((Z.current = "d"), (W.current = "delete"));
            return;
          case "D": {
            let m = P();
            u("delete", "$", m);
            return;
          }
          case "c":
            ((Z.current = "c"), (W.current = "change"));
            return;
          case "C": {
            let m = P();
            u("change", "$", m);
            return;
          }
          case "?": {
            A.onChange("?");
            return;
          }
        }
      }
      if (S.return) {
        X.onInput(b, S);
        return;
      }
      if (B === "INSERT") {
        if (S.backspace || S.delete) {
          if (Y.current.length > 0) Y.current = Y.current.slice(0, -1);
        } else Y.current += b;
        X.onInput(b, S);
      }
    },
    mode: B,
    setMode: Q,
  };
}
function KR0(A) {
  let [B] = sB(),
    Q = OLB({
      value: A.value,
      onChange: A.onChange,
      onSubmit: A.onSubmit,
      onExit: A.onExit,
      onExitMessage: A.onExitMessage,
      onMessage: A.onMessage,
      onHistoryReset: A.onHistoryReset,
      onHistoryUp: A.onHistoryUp,
      onHistoryDown: A.onHistoryDown,
      focus: A.focus,
      mask: A.mask,
      multiline: A.multiline,
      cursorChar: A.showCursor ? " " : "",
      highlightPastedText: A.highlightPastedText,
      invert: n1.inverse,
      themeText: iB("text", B),
      columns: A.columns,
      onImagePaste: A.onImagePaste,
      disableCursorMovementForUpDownKeys: A.disableCursorMovementForUpDownKeys,
      externalOffset: A.cursorOffset,
      onOffsetChange: A.onChangeCursorOffset,
      onModeChange: A.onModeChange,
      isMessageLoading: A.isLoading,
      onUndo: A.onUndo,
    }),
    { mode: Z, setMode: G } = Q;
  return (
    hg1.default.useEffect(() => {
      if (A.initialMode && A.initialMode !== Z) G(A.initialMode);
    }, [A.initialMode, Z, G]),
    hg1.default.createElement(
      y,
      { flexDirection: "column" },
      hg1.default.createElement(gw1, { inputState: Q, terminalFocus: !0, shimmerLevel: A.shimmerLevel, ...A }),
    )
  );
}
function J21() {
  return H0().editorMode === "vim";
}
function RLB() {
  if (q_.isEnabled() && tA.terminal === "Apple_Terminal" && mRA()) return "option + ⏎ for newline";
  if (q_.isEnabled() && uRA()) return "shift + ⏎ for newline";
  return dRA() ? "\\⏎ for newline" : "backslash (\\) + return (⏎) for newline";
}
var lX = A1(V1(), 1);
function TLB(A) {
  switch (A.mode) {
    case "default":
      return "acceptEdits";
    case "acceptEdits":
      return "plan";
    case "plan":
      return A.isBypassPermissionsModeAvailable ? "bypassPermissions" : "default";
    case "bypassPermissions":
      return "default";
  }
}
var cX = A1(V1(), 1),
  ig1 = A1(V1(), 1);
var T8 = A1(V1(), 1);
var T7 = A1(V1(), 1);
var kS = A1(V1(), 1);
var ZZ = A1(V1(), 1);
async function PLB(A, B, Q, Z, G, Y, I, W) {
  (Y1("tengu_input_background", {}), Y(!0));
  let J = { text: `<background-task-input>${A}</background-task-input>`, type: "text" },
    X = bA({ content: hH({ inputString: J.text, precedingInputBlocks: B }), autocheckpoint: I });
  G({
    jsx: ZZ.createElement(
      y,
      { flexDirection: "column" },
      ZZ.createElement(bA1, { addMargin: !0, param: J }),
      ZZ.createElement(NA, null, ZZ.createElement(M, { dimColor: !0 }, "Initializing session…")),
    ),
    shouldHidePromptInput: !1,
  });
  try {
    let F = null;
    if (W && W.length > 0) {
      G({
        jsx: ZZ.createElement(
          y,
          { flexDirection: "column" },
          ZZ.createElement(bA1, { addMargin: !0, param: J }),
          ZZ.createElement(NA, null, ZZ.createElement(M, { dimColor: !0 }, "Summarizing conversation context…")),
        ),
        shouldHidePromptInput: !1,
      });
      try {
        F = await HR0(
          W,
          Z.abortController.signal,
          async () => {
            return (await Z.getAppState()).toolPermissionContext;
          },
          Z.options?.isNonInteractiveSession,
        );
      } catch (C) {
        U1(C instanceof Error ? C : new Error(String(C)), l3A);
      }
    }
    G({
      jsx: ZZ.createElement(
        y,
        { flexDirection: "column" },
        ZZ.createElement(bA1, { addMargin: !0, param: J }),
        ZZ.createElement(NA, null, ZZ.createElement(M, { dimColor: !0 }, "Creating background task…")),
      ),
      shouldHidePromptInput: !1,
    });
    let V = A;
    if (F)
      V = `Task: ${A}

  Prior conversation context (may or may not be relevant to the task above):
  ${F}

  Note: The above summary represents what was being worked on before this background task was initiated. It may not be relevant to the current task.`;
    let K = await QM0(V);
    if (!K) throw new Error("Failed to create remote session. Try again with claude --debug for more details.");
    Z.setAppState((C) => ({
      ...C,
      backgroundTasks: {
        ...C.backgroundTasks,
        [K.id]: {
          id: K.id,
          command: A,
          startTime: Date.now(),
          status: "starting",
          todoList: [],
          title: K.title,
          type: "remote_session",
          deltaSummarySinceLastFlushToAttachment: null,
          log: [],
        },
      },
    }));
    let H = await RE(),
      z = Eg(H) ? "" : "?m=0",
      D = `https://claude.ai/code/${K.id}${z}`;
    return {
      messages: [
        oV(),
        X,
        ...Q,
        bA({
          content: `<background-task-output>This task is now running in the background.
Monitor it with /tasks or at ${D}.

Or, resume it later with: claude --teleport ${K.id}</background-task-output>`,
        }),
      ],
      shouldQuery: !1,
    };
  } catch (F) {
    let V = F instanceof Error ? F.message : String(F);
    return {
      messages: [
        oV(),
        X,
        ...Q,
        bA({
          content: `<bash-stderr>Failed to create background session: ${V}. Try running /login and signing in with a claude.ai account (not Console).</bash-stderr>`,
        }),
      ],
      shouldQuery: !1,
    };
  } finally {
    G(null);
  }
}
async function HR0(A, B, Q, Z) {
  let G = dG(A);
  if (!G.length) return null;
  return $b(
    await ZI1(
      [...G, ...dG([bA({ content: Tb1() })])],
      ["You are a helpful AI assistant tasked with summarizing conversations."],
      0,
      [Q6],
      B,
      {
        getToolPermissionContext: Q,
        model: uG(),
        prependCLISysprompt: !0,
        toolChoice: void 0,
        isNonInteractiveSession: Z,
        maxOutputTokensOverride: xb1,
        promptCategory: "compact",
      },
    ),
  );
}
function jLB({ tasksSelected: A, showHint: B }) {
  let { columns: Q } = IB(),
    Z = kS.useMemo(() => H0().hasSeenTasksHint, []),
    [{ backgroundTasks: G }] = dB();
  kX5();
  let Y = B
      ? T7.createElement(
          T7.Fragment,
          null,
          T7.createElement(M, { dimColor: !0 }, "·"),
          T7.createElement(M, { dimColor: !0 }, A ? "Enter to view shells" : !Z ? "↓ to view" : "? for shortcuts"),
        )
      : null,
    I = Object.values(G).filter((W) => W.status === "running");
  if (I.length === 0) return;
  if (I.length > 1 || Q < 150)
    return T7.createElement(
      T7.Fragment,
      null,
      T7.createElement(
        M,
        { color: "background", inverse: A },
        I.length,
        " background",
        " ",
        I.length === 1 ? "task" : "tasks",
      ),
      Y ? T7.createElement(M, null, " ", Y) : null,
    );
  if (I.length === 1) {
    let W = I[0];
    return T7.createElement(
      T7.Fragment,
      null,
      T7.createElement(M, { color: "background", inverse: A }, T7.createElement(Th1, { task: W })),
      Y ? T7.createElement(M, null, " ", Y) : null,
    );
  }
  return null;
}
function kX5() {
  let [{ backgroundTasks: A }, B] = dB(),
    Q = kS.useMemo(() => Object.values(A).filter((I) => I.type === "remote_session"), [A]),
    [Z, G] = kS.useState([]),
    Y = kS.useCallback(
      async (I) => {
        for await (let {
          response: { log: W },
          session: J,
        } of SLB(I)) {
          let X = W.find((F) => F.type === "result");
          B((F) => ({
            ...F,
            backgroundTasks: {
              ...F.backgroundTasks,
              [J.id]: {
                ...J,
                status: X ? (X.subtype === "success" ? "completed" : "failed") : W.length > 0 ? "running" : "starting",
                log: W,
              },
            },
          }));
        }
      },
      [B],
    );
  kS.useEffect(() => {
    if (Q.every((W) => Z.includes(W.id))) return;
    G(Q.map((W) => W.id));
    let I = Q.filter((W) => !Z.includes(W.id));
    if (!I.length) return;
    Y(I).catch((W) => U1(W, bk));
  }, [Y, Z, Q]);
}
async function* SLB(A) {
  return;
}
function _X5(A) {
  let B = A.findLast(
    (G) => G.type === "assistant" && G.message.content.some((Y) => Y.type === "tool_use" && Y.name === FG.name),
  );
  if (!B) return [];
  let Q = B.message.content.find((G) => G.type === "tool_use" && G.name === FG.name)?.input;
  if (!Q) return [];
  let Z = FG.inputSchema.safeParse(Q);
  if (!Z.success) return [];
  return Z.data.todos;
}
async function xX5(A, B) {
  return null;
}
var yLB = A1(V1(), 1);
function kLB({
  exitMessage: A,
  vimMode: B,
  mode: Q,
  notification: Z,
  toolPermissionContext: G,
  suppressHint: Y,
  tasksSelected: I,
  isPasting: W,
}) {
  if (A.show) return T8.createElement(M, { dimColor: !0, key: "exit-message" }, "Press ", A.key, " again to exit");
  if (W) return T8.createElement(M, { dimColor: !0, key: "pasting-message" }, "Pasting text…");
  if (Z.show && Z.content)
    if ("jsx" in Z.content) return T8.createElement(y, { key: "notification-content", flexGrow: 1 }, Z.content.jsx);
    else
      return T8.createElement(
        M,
        { color: Z.content.color, dimColor: !Z.content.color, key: "notification" },
        Z.content.text,
      );
  let J = J21() && B === "INSERT";
  return T8.createElement(
    y,
    { justifyContent: "flex-start", gap: 1 },
    J ? T8.createElement(M, { dimColor: !0, key: "vim-insert" }, "-- INSERT --") : null,
    T8.createElement(vX5, { mode: Q, toolPermissionContext: G, showHint: !Y && !J, tasksSelected: I }),
  );
}
function vX5({ mode: A, toolPermissionContext: B, showHint: Q, tasksSelected: Z }) {
  let [{ backgroundTasks: G }] = dB(),
    Y = yLB.useMemo(
      () => Object.values(G).filter((X) => X.type === "remote_session" || X.status === "running").length,
      [G],
    );
  if (A === "memory") return T8.createElement(M, { color: "remember" }, "# to memorize");
  if (A === "bash") return T8.createElement(M, { color: "bashBorder" }, "! for bash mode");
  let I = B?.mode,
    W = !I$A(I),
    J = [
      ...(I && W
        ? [
            T8.createElement(
              M,
              { color: eC1(I), key: "mode" },
              W$A(I),
              " ",
              lg(I).toLowerCase(),
              " on",
              T8.createElement(M, { dimColor: !0 }, " (", rJ.displayText, " to cycle)"),
            ),
          ]
        : []),
      ...(Y > 0 ? [T8.createElement(jLB, { key: "tasks", tasksSelected: Z, showHint: Q })] : []),
    ];
  if (J.length)
    return T8.createElement(
      y,
      null,
      VW(J, (X) => T8.createElement(M, { dimColor: !0, key: `separator-${X}` }, " ", "·", " ")),
    );
  if (!Q) return null;
  return T8.createElement(M, { dimColor: !0 }, "? for shortcuts");
}
var SQ = A1(V1(), 1);
var nO = A1(V1(), 1);
var C5 = A1(V1(), 1),
  vLB = A1(E_(), 1),
  ug1 = A1(V1(), 1);
var xLB = A1(V1(), 1),
  X21 = A1(E_(), 1);
function _LB(A) {
  return `${X21.major(A, { loose: !0 })}.${X21.minor(A, { loose: !0 })}.${X21.patch(A, { loose: !0 })}`;
}
function gg1(
  A,
  B = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.anthropic.com/s/claude-code",
    VERSION: "1.0.119",
  }.VERSION,
) {
  let [Q, Z] = xLB.useState(() => _LB(B));
  if (!A) return null;
  let G = _LB(A);
  if (G !== Q) return (Z(G), G);
  return null;
}
function bLB({
  isUpdating: A,
  onChangeIsUpdating: B,
  onAutoUpdaterResult: Q,
  autoUpdaterResult: Z,
  showSuccessMessage: G,
  verbose: Y,
}) {
  let [I, W] = ug1.useState({}),
    J = gg1(Z?.version),
    X = C5.useCallback(async () => {
      if (A) return;
      let F = {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://docs.anthropic.com/s/claude-code",
          VERSION: "1.0.119",
        }.VERSION,
        V = await D_1(),
        K = Ed();
      if ((W({ global: F, latest: V }), !K && F && V && !vLB.gte(F, V, { loose: !0 }))) {
        let H = Date.now();
        B(!0);
        let z = H0();
        if (z.installMethod !== "native") YW1();
        let D = H$();
        if ((F1(`AutoUpdater: Detected installation type: ${D}`), D === "development")) {
          (F1("AutoUpdater: Cannot auto-update development build"), B(!1));
          return;
        }
        let C, w;
        if (D === "npm-local") (F1("AutoUpdater: Using local update method"), (w = "local"), (C = await Ud()));
        else if (D === "npm-global") (F1("AutoUpdater: Using global update method"), (w = "global"), (C = await cG1()));
        else if (D === "native") {
          (F1("AutoUpdater: Unexpected native installation in non-native updater"), B(!1));
          return;
        } else {
          F1("AutoUpdater: Unknown installation type, falling back to config");
          let E = z.installMethod === "local";
          if (((w = E ? "local" : "global"), E)) C = await Ud();
          else C = await cG1();
        }
        if ((B(!1), C === "success"))
          (Lc(),
            Y1("tengu_auto_updater_success", {
              fromVersion: F,
              toVersion: V,
              durationMs: Date.now() - H,
              wasMigrated: w === "local",
              installationType: D,
            }));
        else
          Y1("tengu_auto_updater_fail", {
            fromVersion: F,
            attemptedVersion: V,
            status: C,
            durationMs: Date.now() - H,
            wasMigrated: w === "local",
            installationType: D,
          });
        Q({ version: V, status: C });
      }
    }, [Q]);
  if (
    (ug1.useEffect(() => {
      X();
    }, [X]),
    pW(X, 1800000),
    !Z?.version && (!I.global || !I.latest))
  )
    return null;
  if (!Z?.version && !A) return null;
  return C5.createElement(
    y,
    { flexDirection: "row", gap: 1 },
    Y && C5.createElement(M, { dimColor: !0 }, "globalVersion: ", I.global, " · latestVersion:", " ", I.latest),
    A
      ? C5.createElement(
          C5.Fragment,
          null,
          C5.createElement(
            y,
            null,
            C5.createElement(M, { color: "text", dimColor: !0, wrap: "end" }, "Auto-updating…"),
          ),
        )
      : Z?.status === "success" &&
          G &&
          J &&
          C5.createElement(M, { color: "success" }, "✓ Update installed · Restart to apply"),
    (Z?.status === "install_failed" || Z?.status === "no_permissions") &&
      C5.createElement(
        M,
        { color: "error" },
        "✗ Auto-update failed · Try ",
        C5.createElement(M, { bold: !0 }, "claude doctor"),
        !vv() &&
          C5.createElement(
            C5.Fragment,
            null,
            " ",
            "or ",
            C5.createElement(
              M,
              { bold: !0 },
              "npm i -g ",
              {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.anthropic.com/s/claude-code",
                VERSION: "1.0.119",
              }.PACKAGE_URL,
            ),
          ),
        vv() &&
          C5.createElement(
            C5.Fragment,
            null,
            " ",
            "or",
            " ",
            C5.createElement(
              M,
              { bold: !0 },
              "cd ~/.claude/local && npm update ",
              {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.anthropic.com/s/claude-code",
                VERSION: "1.0.119",
              }.PACKAGE_URL,
            ),
          ),
      ),
  );
}
var $W = A1(V1(), 1),
  mg1 = A1(V1(), 1);
function fLB({
  isUpdating: A,
  onChangeIsUpdating: B,
  onAutoUpdaterResult: Q,
  autoUpdaterResult: Z,
  showSuccessMessage: G,
  verbose: Y,
}) {
  let [I, W] = mg1.useState({}),
    J = gg1(Z?.version),
    X = $W.useRef(!1),
    F = $W.useCallback(async () => {
      if (A || Ed()) return;
      B(!0);
      try {
        let V = await CS(),
          K = {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.anthropic.com/s/claude-code",
            VERSION: "1.0.119",
          }.VERSION;
        if (V.lockFailed) return;
        if ((W({ current: K, latest: V.latestVersion }), V.wasUpdated))
          (Lc(), Y1("tengu_native_auto_updater_success", {}), Q({ version: V.latestVersion, status: "success" }));
      } catch (V) {
        (U1(V instanceof Error ? V : new Error(String(V)), CGA),
          Y1("tengu_native_auto_updater_fail", {}),
          Q({ version: null, status: "install_failed" }));
      } finally {
        B(!1);
      }
    }, [A, B, Q]);
  if (
    (mg1.useEffect(() => {
      if (!X.current) ((X.current = !0), F());
    }),
    pW(F, 1800000),
    !Z?.version && (!I.current || !I.latest))
  )
    return null;
  if (!Z?.version && !A) return null;
  return $W.createElement(
    y,
    { flexDirection: "row", gap: 1 },
    Y && $W.createElement(M, { dimColor: !0 }, "current: ", I.current, " · latest: ", I.latest),
    A
      ? $W.createElement(y, null, $W.createElement(M, { dimColor: !0, wrap: "end" }, "Checking for updates"))
      : Z?.status === "success" &&
          G &&
          J &&
          $W.createElement(M, { color: "success" }, "✓ Update installed · Restart to update"),
    Z?.status === "install_failed" &&
      $W.createElement(
        M,
        { color: "error" },
        "✗ Auto-update failed · Try ",
        $W.createElement(M, { bold: !0 }, "/status"),
      ),
  );
}
var _S = A1(V1(), 1),
  cg1 = A1(V1(), 1);
async function dg1() {
  let A = process.argv.includes("-p") || process.argv.includes("--print");
  if (H$() === "development") return !1;
  if (!(await WW("auto_migrate_to_native"))) return !1;
  if (EQ(!1) || !1 || A || EQ(process.env.DISABLE_AUTO_MIGRATE_TO_NATIVE)) return !1;
  if (H0().installMethod === "native") return !1;
  return !0;
}
async function hLB() {
  Y1("tengu_auto_migrate_to_native_attempt", {});
  try {
    let A = await CS(!0),
      B = [];
    if (A.latestVersion) {
      (Y1("tengu_auto_migrate_to_native_success", {}),
        F1("✅ Upgraded to native installation. Future sessions will use the native version."));
      let { removed: Z, errors: G, warnings: Y } = await WW1(),
        I = [];
      if (G.length > 0)
        G.forEach((X) => {
          I.push({ message: X, userActionRequired: !1, type: "error" });
        });
      if (Y.length > 0)
        Y.forEach((X) => {
          I.push({ message: X, userActionRequired: !1, type: "info" });
        });
      if (Z > 0) I.push({ message: `Cleaned up ${Z} old npm installation(s)`, userActionRequired: !1, type: "info" });
      let W = IW1();
      B = [...(await bO(!0)), ...W, ...I];
    } else
      (Y1("tengu_auto_migrate_to_native_partial", {}),
        F1("⚠️ Native installation setup encountered issues but cleanup completed."),
        (B = await bO(!0)));
    let Q = [];
    if (B.length > 0) {
      let Z = B.filter((G) => G.userActionRequired);
      if (Z.length > 0) {
        let G = ["⚠️  Manual action required after migration to native installer:", ...Z.map((Y) => `• ${Y.message}`)]
          .join(`
`);
        Q.push(G);
      }
      (F1("Migration completed with the following notes:"),
        B.forEach((G) => {
          F1(`  • [${G.type}] ${G.message}`);
        }));
    }
    return { success: !0, version: A.latestVersion, notifications: Q.length > 0 ? Q : void 0 };
  } catch (A) {
    return (
      Y1("tengu_auto_migrate_to_native_failure", { error: A instanceof Error ? A.message : String(A) }),
      U1(A instanceof Error ? A : new Error(String(A)), DGA),
      { success: !1 }
    );
  }
}
function gLB({ onMigrationComplete: A, onChangeIsUpdating: B, onAutoUpdaterResult: Q, verbose: Z }) {
  let [G, Y] = cg1.useState("checking"),
    I = _S.useRef(!1);
  if (
    (cg1.useEffect(() => {
      async function W() {
        if (I.current) return;
        I.current = !0;
        try {
          if (!(await dg1())) {
            Y("idle");
            return;
          }
          if (Z) F1("Starting auto-migration from npm to native installation");
          (Y1("tengu_auto_migrate_to_native_ui_shown", {}), Y("migrating"), B?.(!0));
          let X = await hLB();
          if (X.success)
            (Y("success"),
              Y1("tengu_auto_migrate_to_native_ui_success", {}),
              Q?.({ status: "success", version: X.version, notifications: X.notifications }),
              setTimeout(() => {
                (Y("idle"), B?.(!1), A?.());
              }, 5000));
          else
            (Y("error"),
              Y1("tengu_auto_migrate_to_native_ui_error", {}),
              Q?.({ status: "install_failed", version: null }),
              setTimeout(() => {
                (Y("idle"), B?.(!1));
              }, 1e4));
        } catch (J) {
          (U1(J instanceof Error ? J : new Error(String(J)), LGA),
            Y("error"),
            Q?.({ status: "install_failed", version: null }),
            setTimeout(() => {
              (Y("idle"), B?.(!1));
            }, 1e4));
        }
      }
      W();
    }, [A, B, Q, Z]),
    G === "idle" || G === "checking")
  )
    return null;
  if (G === "migrating") return _S.createElement(M, { dimColor: !0 }, "Migrating to native installation…");
  if (G === "success") return _S.createElement(M, { color: "success" }, t0.tick, " Migrated to native installation");
  if (G === "error") return _S.createElement(M, { color: "error" }, "Migration failed · Run /doctor for details");
  return null;
}
function uLB({
  isUpdating: A,
  onChangeIsUpdating: B,
  onAutoUpdaterResult: Q,
  autoUpdaterResult: Z,
  showSuccessMessage: G,
  verbose: Y,
}) {
  let [I, W] = nO.useState(null),
    [J, X] = nO.useState(null);
  if (
    (nO.useEffect(() => {
      async function V() {
        let K = H$(),
          H = K === "native";
        if ((F1(`AutoUpdaterWrapper: Installation type: ${K}, using native: ${H}`), W(H), !H)) {
          let z = await dg1();
          X(z);
        } else X(!1);
      }
      V();
    }, []),
    I === null || J === null)
  )
    return null;
  if (!I && J)
    return nO.createElement(gLB, {
      onMigrationComplete: () => {
        let K = H$() === "native";
        (W(K), X(!1));
      },
      onChangeIsUpdating: B,
      onAutoUpdaterResult: Q,
      verbose: Y,
    });
  return nO.createElement(I ? fLB : bLB, {
    verbose: Y,
    onAutoUpdaterResult: Q,
    autoUpdaterResult: Z,
    isUpdating: A,
    onChangeIsUpdating: B,
    showSuccessMessage: G,
  });
}
var mLB = A1(V1(), 1);
class zR0 extends mLB.Component {
  constructor(A) {
    super(A);
    this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(A) {
    lg1(A, COLOR_MODE_1);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
var ic = A1(V1(), 1);
function dLB({ tokenUsage: A }) {
  let { percentLeft: B, isAboveWarningThreshold: Q, isAboveErrorThreshold: Z } = ZS(A),
    G = RXB();
  if (!Q || G) return null;
  let Y = Qc();
  return ic.createElement(
    y,
    { flexDirection: "row" },
    Y
      ? ic.createElement(M, { dimColor: !0 }, "Context left until auto-compact: ", B, "%")
      : ic.createElement(
          M,
          { color: Z ? "error" : "warning" },
          "Context low (",
          B,
          "% remaining) · Run /compact to compact & continue",
        ),
  );
}
function cLB(A) {
  return ZS(A).isAboveWarningThreshold;
}
var P7 = A1(V1(), 1),
  Yf = A1(V1(), 1);
import { basename as bX5 } from "path";
var lLB = A1(V1(), 1);
function pg1(A) {
  return lLB.useMemo(() => {
    let B = A?.find((Q) => Q.name === "ide");
    if (!B) return null;
    return B.type === "connected" ? "connected" : "disconnected";
  }, [A]);
}
var pLB = !1;
function iLB({ ideSelection: A, mcpClients: B, ideInstallationStatus: Q }) {
  let Z = pg1(B),
    [G, Y] = Yf.useState(!0),
    [I, W] = Yf.useState(void 0);
  Yf.useEffect(() => {
    if (Z === "connected") {
      let D = setTimeout(() => {
        Y(!1);
      }, 1000);
      return () => clearTimeout(D);
    } else if (Z === "disconnected") Y(!0);
  }, [Z]);
  let [J, X] = Yf.useState(!1),
    F = Q ? E$(Q?.ideType) : !1;
  Yf.useEffect(() => {
    if (Q?.error || F) {
      X(!0);
      let D = setTimeout(() => {
        X(!1);
      }, 5000);
      return () => clearTimeout(D);
    }
  }, [Q?.error, F]);
  let V = Z === "connected" && (A?.filePath || (A?.text && A.lineCount > 0)),
    K = Z === "connected" && !V,
    H = J && !F && !K && !V,
    z = J && F && !K && !V;
  return (
    Yf.useEffect(() => {
      if (!FW() && Z === null && !pLB) {
        let D;
        return (
          hY1(!0).then((C) => {
            if (C.length > 0) {
              let w = C[0]?.name;
              (W(fX5(w)),
                (D = setTimeout(() => {
                  W(void 0);
                }, 3000)),
                (pLB = !0));
            }
          }),
          () => D && clearTimeout(D)
        );
      }
    }, [Z]),
    Z !== null
      ? P7.createElement(
          P7.Fragment,
          null,
          !H &&
            Z === "disconnected" &&
            P7.createElement(M, { color: "error", key: "ide-status" }, t0.circle, " IDE disconnected"),
          K && P7.createElement(M, { color: "ide", key: "ide-status" }, t0.circle, G && " IDE connected"),
          H && P7.createElement(M, { color: "error" }, "IDE extension install failed (see /status for info)"),
          z && P7.createElement(M, { dimColor: !0 }, "IDE plugin not connected (see /status for info)"),
          V && A?.text && A.lineCount > 0
            ? P7.createElement(
                M,
                { color: "ide", key: "selection-indicator" },
                "⧉ ",
                A.lineCount,
                " ",
                A.lineCount === 1 ? "line" : "lines",
                " selected",
              )
            : V && A?.filePath
              ? P7.createElement(M, { color: "ide", key: "selection-indicator" }, "⧉ In ", bX5(A.filePath))
              : null,
        )
      : P7.createElement(
          P7.Fragment,
          null,
          I &&
            !z &&
            P7.createElement(
              M,
              { color: "text", key: "ide-command-hint" },
              t0.circle,
              " /ide for ",
              P7.createElement(M, { color: "ide" }, I),
            ),
          z && P7.createElement(M, { dimColor: !0 }, "IDE plugin not connected (see /status for info)"),
        )
  );
}
function fX5(A) {
  if (A === "Visual Studio Code") return "VS Code";
  return A;
}
import { basename as uX5 } from "path";
var ZJ1 = A1(V1(), 1);
var nLB = A1(V1(), 1);
var hX5 = 2147483648,
  gX5 = 2684354560;
function aLB() {
  let [A, B] = nLB.useState(null);
  function Q() {
    return;
  }
  return (pW(Q, 1e4), A);
}
function sLB() {
  let A = aLB();
  return null;
}
var yI = A1(V1(), 1);
function rLB({ mcpClients: A = [] }) {
  let B = A.filter((Y) => Y.type === "failed" && Y.config.type !== "sse-ide" && Y.config.type !== "ws-ide"),
    Q = A.filter((Y) => Y.type === "needs-auth"),
    Z = B.length > 0 || Q.length > 0,
    G = UA1(Z ? DR0 : 0);
  if (!Z || G) return null;
  return yI.createElement(
    y,
    { gap: 1 },
    B.length > 0 &&
      yI.createElement(
        yI.Fragment,
        null,
        yI.createElement(
          M,
          { color: "error" },
          B.length,
          " MCP",
          " ",
          B.length === 1 ? "server" : "servers",
          " failed",
        ),
        yI.createElement(M, { dimColor: !0 }, "· /mcp for info"),
      ),
    Q.length > 0 &&
      B.length === 0 &&
      yI.createElement(
        yI.Fragment,
        null,
        yI.createElement(
          M,
          { color: "warning" },
          Q.length,
          " MCP",
          " ",
          Q.length === 1 ? "server needs" : "servers need",
          " ",
          "auth",
        ),
        yI.createElement(M, { dimColor: !0 }, "· /mcp for info"),
      ),
  );
}
var tLB = A1(V1(), 1);
var xS = A1(V1(), 1);
function oLB({ level: A, tokens: B, isDetected: Q, isDisabled: Z }) {
  if (Z) {
    let Y = B > 0;
    return xS.createElement(y, null, xS.createElement(M, { dimColor: !0 }, "Thinking off", Y ? " • /t to enable" : ""));
  }
  if (!Q) return null;
  return xS.createElement(
    y,
    null,
    xS.createElement(M, { dimColor: !0 }, "Thinking on · ", A === "high" ? "max" : A, " · /t to disable"),
  );
}
var DR0 = 5000;
function eLB({
  apiKeyStatus: A,
  autoUpdaterResult: B,
  debug: Q,
  isAutoUpdating: Z,
  verbose: G,
  tokenUsage: Y,
  onAutoUpdaterResult: I,
  onChangeIsUpdating: W,
  ideSelection: J,
  ideInstallationStatus: X,
  checkpointingState: F,
  mcpClients: V,
  isInputWrapped: K = !1,
  thinkingDetection: H,
  thinkingDisabled: z,
}) {
  let D = cLB(Y),
    C = pg1(V),
    [{ mainLoopModel: w }] = dB(),
    E = h01(),
    { status: L, unifiedRateLimitFallbackAvailable: O } = E,
    P = !(C === "connected" && (J?.filePath || (J?.text && J.lineCount > 0))) || Z || B?.status !== "success",
    _ = IG0(E),
    b = E.isUsingOverage,
    S = PZ(),
    d = S === "team" || S === "enterprise",
    u = kf1(),
    o = K && !D && !1;
  return (
    tLB.useEffect(() => {
      if (o) Y1("tengu_external_editor_hint_shown", {});
    }, [o]),
    SQ.createElement(
      zR0,
      null,
      SQ.createElement(
        y,
        { flexDirection: "column", alignItems: "flex-end" },
        SQ.createElement(iLB, { ideSelection: J, mcpClients: V, ideInstallationStatus: X }),
        SQ.createElement(rLB, { mcpClients: V }),
        SQ.createElement(mX5, { checkpointingState: F }),
        b && !d && SQ.createElement(y, null, SQ.createElement(M, { dimColor: !0 }, "Extra usage")),
        _ && SQ.createElement(y, null, SQ.createElement(M, { color: "warning" }, _)),
        !_ &&
          O &&
          w === "opus" &&
          L !== "allowed_warning" &&
          SQ.createElement(
            y,
            null,
            SQ.createElement(
              M,
              { color: "warning" },
              "Approaching Opus usage limit · /model to use best available model",
            ),
          ),
        A === "invalid" &&
          SQ.createElement(y, null, SQ.createElement(M, { color: "error" }, "Invalid API key · Run /login")),
        A === "missing" &&
          SQ.createElement(y, null, SQ.createElement(M, { color: "error" }, "Missing API key · Run /login")),
        Q && SQ.createElement(y, null, SQ.createElement(M, { color: "warning" }, "Debug mode")),
        A !== "invalid" &&
          A !== "missing" &&
          G &&
          SQ.createElement(y, null, SQ.createElement(M, { dimColor: !0 }, Y, " tokens")),
        SQ.createElement(dLB, { tokenUsage: Y }),
        P &&
          SQ.createElement(uLB, {
            verbose: G,
            onAutoUpdaterResult: I,
            autoUpdaterResult: B,
            isUpdating: Z,
            onChangeIsUpdating: W,
            showSuccessMessage: !D,
          }),
        o &&
          SQ.createElement(
            y,
            null,
            SQ.createElement(
              M,
              { dimColor: !0 },
              "ctrl-g to edit prompt in",
              " ",
              (() => {
                let m = u.split(" ")[0];
                return m ? uX5(m) : "editor";
              })(),
            ),
          ),
        H &&
          z !== void 0 &&
          SQ.createElement(oLB, { level: H.level, tokens: H.tokens, isDetected: H.isDetected, isDisabled: z }),
        SQ.createElement(sLB, null),
      ),
    )
  );
}
function mX5({ checkpointingState: A }) {
  let B =
      A?.status === "error"
        ? "Checkpointing disabled"
        : A?.status === "initialized" && A?.saveError
          ? "Checkpointing failed"
          : void 0,
    Q = UA1(B ? DR0 : 0);
  return null;
}
var GJ1 = A1(V1(), 1);
var vS = A1(V1(), 1);
function CR0() {
  return E2()?.statusLine !== void 0;
}
function dX5(A, B) {
  let Q = Xt({ permissionMode: A, mainLoopModel: uG(), exceeds200kTokens: B }),
    G = E2()?.outputStyle || iW;
  return {
    ...UL(),
    model: { id: Q, display_name: uP(Q) },
    workspace: { current_dir: AA(), project_dir: WQ() },
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "1.0.119",
    }.VERSION,
    output_style: { name: G },
    cost: {
      total_cost_usd: xC(),
      total_duration_ms: l91(),
      total_api_duration_ms: sN(),
      total_lines_added: Sn(),
      total_lines_removed: yn(),
    },
    exceeds_200k_tokens: B,
  };
}
function AMB({ messages: A }) {
  let B = vS.useRef(),
    [{ toolPermissionContext: Q, statusLineText: Z }, G] = dB(),
    Y = vS.useRef({ messageId: null, exceeds200kTokens: !1, permissionMode: Q.mode }),
    I = vS.useCallback(
      async (F) => {
        B.current?.abort();
        let V = new AbortController();
        B.current = V;
        try {
          let K = Y.current.exceeds200kTokens;
          if (F !== void 0) {
            let D = F.filter((E) => E.type === "assistant"),
              C = D[D.length - 1],
              w = C?.uuid || C?.message?.id || null;
            if (w !== Y.current.messageId) ((K = Qb1(F)), (Y.current.messageId = w), (Y.current.exceeds200kTokens = K));
          }
          let H = dX5(Y.current.permissionMode, K),
            z = await YMA(H, V.signal);
          if (!V.signal.aborted) G((D) => ({ ...D, statusLineText: z }));
        } catch {}
      },
      [G],
    ),
    W = zs(() => I(A), 300);
  if (
    (vS.useEffect(() => {
      let F = A.filter((H) => H.type === "assistant"),
        V = F[F.length - 1],
        K = V?.uuid || V?.message?.id || null;
      if (K !== Y.current.messageId || Q.mode !== Y.current.permissionMode)
        ((Y.current.messageId = K), (Y.current.permissionMode = Q.mode), W());
    }, [A, Q.mode, W]),
    vS.useEffect(() => {
      let V = E2()?.statusLine;
      if (V) Y1("tengu_status_line_mount", { command_length: V.command.length, padding: V.padding });
    }, []),
    vS.useEffect(() => {
      return (
        I(),
        () => {
          B.current?.abort();
        }
      );
    }, []),
    !Z)
  )
    return null;
  let X = E2()?.statusLine?.padding ?? 0;
  return GJ1.createElement(y, { paddingX: X }, GJ1.createElement(M, { dimColor: !0 }, Z));
}
var XK = A1(V1(), 1),
  BMB = A1(V1(), 1);
function cX5({ item: A, maxColumnWidth: B, isSelected: Q }) {
  let Z = IB().columns,
    G = B ?? A.displayText.length + 5,
    Y = Z < 80 || (A.description && G * 2 > Z),
    I = A.color || (Q ? "suggestion" : void 0),
    W = !Q;
  return XK.createElement(
    y,
    { key: A.id, flexDirection: Y ? "column" : "row" },
    XK.createElement(y, { width: Y ? void 0 : G }, XK.createElement(M, { color: I, dimColor: W }, A.displayText)),
    A.description &&
      XK.createElement(
        y,
        { width: Z - (Y ? 4 : G + 4), paddingLeft: Y ? 4 : 0 },
        XK.createElement(M, { color: Q ? "suggestion" : void 0, dimColor: !Q, wrap: "wrap-trim" }, A.description),
      ),
  );
}
function UR0({ suggestions: A, selectedSuggestion: B }) {
  let { rows: Q } = IB(),
    Z = Math.min(10, Math.max(1, Q - 3)),
    G = (X) => {
      return Math.max(...X.map((F) => F.displayText.length)) + 5;
    };
  if (A.length === 0) return null;
  let Y = Math.max(0, Math.min(B - Math.floor(Z / 2), A.length - Z)),
    I = Math.min(Y + Z, A.length),
    W = A.slice(Y, I),
    J = G(W);
  return XK.createElement(
    y,
    { flexDirection: "column" },
    W.map((X) => XK.createElement(cX5, { key: X.id, item: X, maxColumnWidth: J, isSelected: X.id === A[B]?.id })),
  );
}
var fG3 = BMB.memo(UR0);
var yQ = A1(V1(), 1);
function QMB() {
  return yQ.createElement(
    y,
    { paddingX: 2, flexDirection: "row" },
    yQ.createElement(
      y,
      { flexDirection: "column", width: 22 },
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "! for bash mode")),
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "/ for commands")),
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "@ for file paths")),
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "# to memorize")),
      !1,
    ),
    yQ.createElement(
      y,
      { flexDirection: "column", width: 35 },
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "double tap esc to clear input")),
      yQ.createElement(
        y,
        null,
        yQ.createElement(M, { dimColor: !0 }, rJ.displayText.replace("+", " + "), " to auto-accept edits"),
      ),
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "ctrl + o for verbose output")),
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "ctrl + t to show todos")),
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, RLB())),
    ),
    yQ.createElement(
      y,
      { flexDirection: "column" },
      yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "ctrl + _ to undo")),
      VXA && yQ.createElement(y, null, yQ.createElement(M, { dimColor: !0 }, "ctrl + z to suspend")),
      yQ.createElement(
        y,
        null,
        yQ.createElement(M, { dimColor: !0 }, Ku.displayText.replace("+", " + "), " to paste images"),
      ),
    ),
  );
}
function lX5({
  apiKeyStatus: A,
  debug: B,
  exitMessage: Q,
  vimMode: Z,
  mode: G,
  autoUpdaterResult: Y,
  isAutoUpdating: I,
  verbose: W,
  onAutoUpdaterResult: J,
  onChangeIsUpdating: X,
  suggestions: F,
  selectedSuggestion: V,
  notification: K,
  toolPermissionContext: H,
  helpOpen: z,
  suppressHint: D,
  tasksSelected: C,
  ideSelection: w,
  mcpClients: E,
  ideInstallationStatus: L,
  checkpointingState: O,
  isPasting: R = !1,
  isInputWrapped: P = !1,
  messages: _,
  thinkingDetection: b,
  thinkingDisabled: S,
}) {
  let d = ig1.useMemo(() => {
      let o = wb(_);
      return jX(o);
    }, [_]),
    u = D || CR0();
  if (F.length)
    return cX.createElement(
      y,
      { paddingX: 2, paddingY: 0 },
      cX.createElement(UR0, { suggestions: F, selectedSuggestion: V }),
    );
  if (z) return cX.createElement(QMB, null);
  return cX.createElement(
    y,
    { flexDirection: "row", justifyContent: "space-between", paddingX: 2 },
    cX.createElement(
      y,
      { flexDirection: "column" },
      CR0() && G === "prompt" && !Q.show && !R && !(K.show && K.content) && cX.createElement(AMB, { messages: _ }),
      cX.createElement(kLB, {
        exitMessage: Q,
        vimMode: Z,
        mode: G,
        notification: K,
        toolPermissionContext: H,
        suppressHint: u,
        tasksSelected: C,
        isPasting: R,
      }),
    ),
    cX.createElement(eLB, {
      apiKeyStatus: A,
      autoUpdaterResult: Y,
      debug: B,
      isAutoUpdating: I,
      verbose: W,
      tokenUsage: d,
      onAutoUpdaterResult: J,
      onChangeIsUpdating: X,
      ideSelection: w,
      mcpClients: E,
      ideInstallationStatus: L,
      checkpointingState: O,
      isInputWrapped: P,
      thinkingDetection: b,
      thinkingDisabled: S,
    }),
  );
}
var ZMB = ig1.memo(lX5);
var ng1 = A1(V1(), 1);
function $R0({ input: A, progress: B, verbose: Q }) {
  return ng1.default.createElement(
    y,
    { flexDirection: "column", marginTop: 1 },
    ng1.default.createElement(Mh1, { addMargin: !1, param: { text: `<bash-input>${A}</bash-input>`, type: "text" } }),
    B
      ? ng1.default.createElement(Jx1, {
          fullOutput: B.fullOutput,
          output: B.output,
          elapsedTimeSeconds: B.elapsedTimeSeconds,
          totalLines: B.totalLines,
          verbose: Q,
        })
      : gQ.renderToolUseProgressMessage([], { verbose: Q, tools: [], terminalSize: void 0 }),
  );
}
var aO = A1(V1(), 1);
async function GMB(A, B, Q, Z, G, Y, I) {
  (Y1("tengu_input_bash", {}), Y(!0));
  let W = bA({
      content: hH({ inputString: `<bash-input>${A}</bash-input>`, precedingInputBlocks: B }),
      autocheckpoint: I,
    }),
    J;
  G({
    jsx: aO.createElement($R0, { input: A, progress: null, verbose: Z.options.verbose }),
    shouldHidePromptInput: !1,
  });
  try {
    let X = {
        ...Z,
        setToolJSX: (z) => {
          J = z?.jsx;
        },
      },
      F = gQ.call({ command: A }, X),
      V;
    for await (let z of F)
      if (z.type === "progress")
        G({
          jsx: aO.createElement(
            aO.Fragment,
            null,
            aO.createElement($R0, { input: A, progress: z.data, verbose: Z.options.verbose }),
            J,
          ),
          shouldHidePromptInput: !1,
          showSpinner: !1,
        });
      else if (z.type === "result") V = z.data;
    if (!V) throw new Error("No result received from bash command");
    let K = V.stderr,
      H = await Z.getAppState();
    if (X_1(H.toolPermissionContext)) K = J_1(K);
    return {
      messages: [
        oV(),
        W,
        ...Q,
        bA({ content: `<bash-stdout>${V.stdout}</bash-stdout><bash-stderr>${K}</bash-stderr>` }),
      ],
      shouldQuery: !1,
    };
  } catch (X) {
    if (X instanceof oN) {
      if (X.interrupted) return { messages: [oV(), W, bA({ content: REQUEST_INTERRUPTED_MESSAGE }), ...Q], shouldQuery: !1 };
      return {
        messages: [
          oV(),
          W,
          ...Q,
          bA({ content: `<bash-stdout>${X.stdout}</bash-stdout><bash-stderr>${X.stderr}</bash-stderr>` }),
        ],
        shouldQuery: !1,
      };
    }
    return {
      messages: [
        oV(),
        W,
        ...Q,
        bA({ content: `<bash-stderr>Command failed: ${X instanceof Error ? X.message : String(X)}</bash-stderr>` }),
      ],
      shouldQuery: !1,
    };
  } finally {
    G(null);
  }
}
var wR0 = A1(V1(), 1);
import { dirname as YMB } from "path";
function pX5(A) {
  let B = A.trim();
  if (!B) return "";
  if (B.startsWith("- ")) return B;
  if (B.startsWith("-")) return `- ${B.slice(1).trim()}`;
  return `- ${B}`;
}
var IMB = At(async function (A, B, Q) {
  (Y1("tengu_add_memory_start", {}), iX5());
  let Z = DKB(Q);
  if (!w1().existsSync(YMB(Q)))
    try {
      w1().mkdirSync(YMB(Q));
    } catch (G) {
      U1(G instanceof Error ? G : new Error(String(G)), FGA);
    }
  try {
    let G = pX5(A),
      Y = Z.replace(/\n+$/, ""),
      I = Y
        ? `${Y}
${G}`
        : G;
    (w1().writeFileSync(Q, I, { encoding: "utf8", flush: !0 }),
      B.readFileState.set(Q, { content: I, timestamp: w1().statSync(Q).mtimeMs }),
      Y1("tengu_add_memory_success", {}),
      B.addNotification?.({ jsx: wR0.createElement(wKB, { memoryPath: Q }) }, { timeoutMs: 1e4 }));
  } catch (G) {
    throw (
      Y1("tengu_add_memory_failure", {}),
      B.addNotification?.({
        text: "Failed to save memory: " + (G instanceof Error ? G.message : String(G)),
        color: "error",
      }),
      G
    );
  }
});
function iX5() {
  let A = H0(),
    B = (A.memoryUsageCount || 0) + 1;
  TA({ ...A, memoryUsageCount: B });
}
function WMB(A, B, Q, Z, G) {
  Y1("tengu_input_memory", {});
  let Y = bA({ content: hH({ inputString: `<user-memory-input>${A}</user-memory-input>`, precedingInputBlocks: B }) });
  return (IMB(A, Z, G), { messages: [oV(), ...Q, Y], shouldQuery: !1 });
}
function JMB(A) {
  let B = A.toLowerCase();
  return /\b(wtf|wth|ffs|omfg|shit(ty|tiest)?|dumbass|horrible|awful|piss(ed|ing)? off|piece of (shit|crap|junk)|what the (fuck|hell)|fucking? (broken|useless|terrible|awful|horrible)|fuck you|screw (this|you)|so frustrating|this sucks|damn it)\b/.test(
    B,
  );
}
function XMB(A) {
  let B = A.toLowerCase();
  return /\b(keep going|continue|go on)\b/.test(B);
}
function FMB(A, B, Q, Z, G, Y, I) {
  Z(!0);
  let W = {};
  if (typeof A === "string") {
    let F = JMB(A),
      V = XMB(A);
    ((W = { is_negative: F, is_keep_going: V }),
      T$("user_prompt", { prompt_length: String(A.length), prompt: Fb1(A) }));
  }
  if ((Y1("tengu_input_prompt", W), B.length > 0)) {
    let F = bA({
        content: [...B, ...(typeof A === "string" ? [{ type: "text", text: A }] : A)],
        autocheckpoint: G,
        uuid: Y,
        thinkingMetadata: I,
      }),
      V = Hq([F]);
    return { messages: [F, ...Q], shouldQuery: !0, maxThinkingTokens: V > 0 ? V : void 0 };
  }
  let J = bA({ content: A, autocheckpoint: G, uuid: Y, thinkingMetadata: I }),
    X = Hq([J]);
  return { messages: [J, ...Q], shouldQuery: !0, maxThinkingTokens: X > 0 ? X : void 0 };
}
async function F21({
  input: A,
  mode: B,
  setIsLoading: Q,
  setToolJSX: Z,
  context: G,
  pastedContents: Y,
  ideSelection: I,
  memoryPath: W,
  autocheckpoint: J,
  messages: X,
  setUserInputOnProcessing: F,
  uuid: V,
  isAlreadyProcessing: K,
  thinkingMetadata: H,
}) {
  let z = typeof A === "string" ? A : null;
  if (B === "prompt" && z !== null) F?.(z);
  let D = await nX5(A, B, Q, Z, G, Y, I, W, J, X, V, K, H);
  if (!D.shouldQuery) return (F?.(void 0), D);
  let C = [],
    w = [],
    E = !1,
    L,
    O = Lb1(A) || "",
    R = await G.getAppState();
  for await (let P of QMA(O, R.toolPermissionContext.mode)) {
    if (P.blockingErrors && P.blockingErrors.length > 0) C.push(...P.blockingErrors);
    if (P.preventContinuation) {
      if (((E = !0), P.stopReason)) L = P.stopReason;
    }
    if (P.additionalContexts && P.additionalContexts.length > 0) w.push(...P.additionalContexts);
  }
  if (C.length > 0) {
    let P = oLA(C);
    return (
      F?.(void 0),
      {
        messages: [
          X3(
            `${P}

Original prompt: ${A}`,
            "warning",
          ),
        ],
        shouldQuery: !1,
        allowedTools: D.allowedTools,
        skipHistory: D.skipHistory,
        maxThinkingTokens: D.maxThinkingTokens,
      }
    );
  }
  if (E) {
    let P = L ? `Operation stopped by hook: ${L}` : "Operation stopped by hook";
    return (D.messages.push(bA({ content: P })), (D.shouldQuery = !1), F?.(void 0), D);
  }
  if (w.length > 0) {
    let P = w.join(`

`),
      _ = 1e4,
      b;
    if (P.length > 1e4)
      b = `<user-prompt-submit-hook>${P.substring(0, 1e4)}

[output truncated - exceeded 10000 characters]</user-prompt-submit-hook>`;
    else b = `<user-prompt-submit-hook>${P}</user-prompt-submit-hook>`;
    D.messages.push(bA({ content: b, isVisibleInTranscriptOnly: !0 }));
  }
  return (F?.(void 0), D);
}
async function nX5(A, B, Q, Z, G, Y, I, W, J, X, F, V, K) {
  let H = null,
    z = [];
  if (typeof A === "string") H = A;
  else if (A.length > 0) {
    for (let L = 0; L < A.length; L++) {
      let O = A[L];
      if (O.type === "image") A[L] = await LRA(O);
    }
    let E = A[A.length - 1];
    if (E?.type === "text") ((H = E.text), (z = [...A.slice(0, -1)]));
    else z = A;
  }
  if (H === null && B !== "prompt") throw new Error(`Mode: ${B} requires a string input.`);
  let D = Y
      ? Object.values(Y)
          .filter((E) => E.type === "image")
          .map((E) => ({
            type: "image",
            source: { type: "base64", media_type: E.mediaType || "image/png", data: E.content },
          }))
      : [],
    w =
      H !== null && (B !== "prompt" || !H.startsWith("/"))
        ? await R_1(p01(H, G, I ?? null, [], X, "repl_main_thread"))
        : [];
  if (H !== null && B === "bash") return await GMB(H, z, w, G, Z, Q, J);
  if (H !== null && B === "background") return await PLB(H, z, w, G, Z, Q, J, X);
  if (H !== null && B === "memorySelect" && W) return WMB(H, z, w, G, W);
  if (H !== null && H.startsWith("/")) return await vNB(H, z, D, w, G, Q, Z, J, F, V);
  return FMB(A, D, w, Q, J, F, K);
}
var ag1 = A1(V1(), 1);
var AT_MENTIONED = "at_mentioned",
  sX5 = f.object({
    method: f.literal(AT_MENTIONED),
    params: f.object({ filePath: f.string(), lineStart: f.number().optional(), lineEnd: f.number().optional() }),
  });
function VMB(A, B) {
  let Q = ag1.useRef();
  ag1.useEffect(() => {
    let Z = vH(A);
    if (Q.current !== Z) Q.current = Z;
    if (Z)
      Z.client.setNotificationHandler(sX5, (G) => {
        if (Q.current !== Z) return;
        try {
          let Y = G.params,
            I = Y.lineStart !== void 0 ? Y.lineStart + 1 : void 0,
            W = Y.lineEnd !== void 0 ? Y.lineEnd + 1 : void 0;
          B({ filePath: Y.filePath, lineStart: I, lineEnd: W });
        } catch (Y) {
          U1(Y, RYA);
        }
      });
  }, [A, B]);
}
import * as LMB from "path";
var sO = A1(V1(), 1);
function KMB({ maxBufferSize: A, debounceMs: B }) {
  let [Q, Z] = sO.useState([]),
    [G, Y] = sO.useState(-1),
    I = sO.useRef(0),
    W = sO.useRef(null),
    J = sO.useCallback(
      (K, H, z = {}) => {
        let D = Date.now();
        if (W.current) (clearTimeout(W.current), (W.current = null));
        if (D - I.current < B) {
          W.current = setTimeout(() => {
            J(K, H, z);
          }, B);
          return;
        }
        ((I.current = D),
          Z((C) => {
            let w = G >= 0 ? C.slice(0, G + 1) : C,
              E = w[w.length - 1];
            if (E && E.text === K) return w;
            let L = [...w, { text: K, cursorOffset: H, pastedContents: z, timestamp: D }];
            if (L.length > A) return L.slice(-A);
            return L;
          }),
          Y((C) => {
            let w = C >= 0 ? C + 1 : Q.length;
            return Math.min(w, A - 1);
          }));
      },
      [B, A, G, Q.length],
    ),
    X = sO.useCallback(() => {
      if (G < 0 || Q.length === 0) return;
      let K = Math.max(0, G - 1),
        H = Q[K];
      if (H) return (Y(K), H);
      return;
    }, [Q, G]),
    F = sO.useCallback(() => {
      if ((Z([]), Y(-1), (I.current = 0), W.current)) (clearTimeout(W.current), (W.current = null));
    }, [I, W]),
    V = G > 0 && Q.length > 1;
  return { pushToBuffer: J, undo: X, canUndo: V, clearBuffer: F };
}
var sg1 = A1(V1(), 1);
function HMB(A, B) {
  let [Q, Z] = sg1.useState({ level: "none", tokens: 0, isDetected: !1 });
  return (
    sg1.useEffect(() => {
      let G = H20(A);
      if (B) {
        Z({ level: "none", tokens: G.tokens, isDetected: !1 });
        return;
      }
      Z({ level: G.level, tokens: G.tokens, isDetected: G.tokens > 0 });
    }, [A, B]),
    Q
  );
}
import { join as rX5 } from "path";
import { tmpdir as oX5 } from "os";
import { randomUUID as tX5 } from "crypto";
function qR0(A = "claude-prompt", B = ".md") {
  let Q = tX5();
  return rX5(oX5(), `${A}-${Q}${B}`);
}
var YJ1 = A1(V1(), 1);
var eX5 = 1e4,
  zMB = 1000;
function AF5(A, B) {
  if (A.length <= eX5) return { truncatedText: A, placeholderContent: "" };
  let Q = Math.floor(zMB / 2),
    Z = Math.floor(zMB / 2),
    G = A.slice(0, Q),
    Y = A.slice(-Z),
    I = A.slice(Q, -Z),
    W = B51(I),
    X = BF5(B, W);
  return { truncatedText: G + X + Y, placeholderContent: I };
}
function BF5(A, B) {
  return `[...Truncated text #${A} +${B} lines...]`;
}
function DMB(A, B) {
  let Q = Object.keys(B).map(Number),
    Z = Q.length > 0 ? Math.max(...Q) + 1 : 1,
    { truncatedText: G, placeholderContent: Y } = AF5(A, Z);
  if (!Y) return { newInput: A, newPastedContents: B };
  return { newInput: G, newPastedContents: { ...B, [Z]: { id: Z, type: "text", content: Y } } };
}
function CMB({ input: A, pastedContents: B, onInputChange: Q, setCursorOffset: Z, setPastedContents: G }) {
  let [Y, I] = YJ1.useState(!1);
  (YJ1.useEffect(() => {
    if (Y) return;
    if (A.length <= 1e4) return;
    let { newInput: W, newPastedContents: J } = DMB(A, B);
    (Q(W), Z(W.length), G(J), I(!0));
  }, [A, Y, B, Q, G, Z]),
    YJ1.useEffect(() => {
      if (A === "") I(!1);
    }, [A]));
}
var og1 = A1(V1(), 1);
function UMB(A, B = 20) {
  let Q = new Map();
  for (let G of A) Q.set(G, (Q.get(G) || 0) + 1);
  return Array.from(Q.entries())
    .sort((G, Y) => Y[1] - G[1])
    .slice(0, B)
    .map(([G, Y]) => `${Y.toString().padStart(6)} ${G}`).join(`
`);
}
async function QF5(A) {
  if (tA.platform === "win32") return [];
  if (!(await JL())) return [];
  try {
    let B = "",
      { stdout: Q } = await z7("git", ["config", "user.email"], { cwd: AA() }),
      Z = "";
    if (Q.trim()) {
      let { stdout: W } = await z7(
          "git",
          ["log", "-n", "1000", "--pretty=format:", "--name-only", "--diff-filter=M", `--author=${Q.trim()}`],
          { cwd: AA() },
        ),
        J = W.split(
          `
`,
        ).filter((X) => X.trim());
      Z = UMB(J);
    }
    if (
      ((B =
        `Files modified by user:
` + Z),
      Z.split(`
`).length < 10)
    ) {
      let { stdout: W } = await z7("git", ["log", "-n", "1000", "--pretty=format:", "--name-only", "--diff-filter=M"], {
          cwd: AA(),
        }),
        J = W.split(
          `
`,
        ).filter((F) => F.trim()),
        X = UMB(J);
      B +=
        `

Files modified by other users:
` + X;
    }
    let Y = (
      await NI({
        systemPrompt: [
          "You are an expert at analyzing git history. Given a list of files and their modification counts, return exactly five filenames that are frequently modified and represent core application logic (not auto-generated files, dependencies, or configuration). Make sure filenames are diverse, not all in the same folder, and are a mix of user and other users. Return only the filenames' basenames (without the path) separated by newlines with no explanation.",
        ],
        userPrompt: B,
        isNonInteractiveSession: A,
        promptCategory: "frequently_modified",
      })
    ).message.content[0];
    if (!Y || Y.type !== "text") return [];
    let I = Y.text.trim().split(`
`);
    if (I.length < 5) return [];
    return I;
  } catch (B) {
    return (U1(B, STYLE_CODE_97), []);
  }
}
var rg1 = YA(async (A) => {
  let B = w9(),
    Q = Date.now(),
    Z = B.exampleFilesGeneratedAt ?? 0,
    G = 604800000;
  if (Q - Z > 604800000) B.exampleFiles = [];
  if (!B.exampleFiles?.length)
    QF5(A).then((I) => {
      if (I.length) i8({ ...w9(), exampleFiles: I, exampleFilesGeneratedAt: Date.now() });
    });
  let Y = B.exampleFiles?.length ? BT(B.exampleFiles) : "<filepath>";
  return [
    "fix lint errors",
    "fix typecheck errors",
    `how does ${Y} work?`,
    `refactor ${Y}`,
    "how do I log an error?",
    `edit ${Y} to...`,
    `write a test for ${Y}`,
    "create a util logging.py that...",
  ];
});
var ZF5 = 3;
function $MB({ input: A, mode: B, queuedCommands: Q, submitCount: Z }) {
  let [G, Y] = og1.useState("");
  if (
    (og1.useEffect(() => {
      if (Z > 0 || G) return;
      rg1(!1).then((I) => {
        Y(`Try "${BT(I)}"`);
      });
    }, [B, G, Z]),
    B === "memory")
  )
    return 'Add to memory. Try "Always use descriptive variable names"';
  if (Q.length > 0 && (H0().queuedCommandUpHintCount || 0) < ZF5) return "Press up to edit queued messages";
  if (A === "" && Z === 0) return G;
}
var xE = A1(V1(), 1);
function wMB({ mode: A, isLoading: B }) {
  return xE.createElement(
    y,
    { alignItems: "flex-start", alignSelf: "flex-start", flexWrap: "nowrap", justifyContent: "flex-start", width: 2 },
    A === "bash"
      ? xE.createElement(M, { color: "bashBorder", dimColor: B }, "! ")
      : A === "memory" || A === "memorySelect"
        ? xE.createElement(M, { color: "remember", dimColor: B }, "# ")
        : A === "background"
          ? xE.createElement(M, { color: "background", dimColor: B }, "& ")
          : xE.createElement(M, { dimColor: B }, "> "),
  );
}
var IJ1 = A1(V1(), 1);
function qMB({ queuedCommands: A }) {
  let { columns: B } = IB();
  if (A.length === 0) return null;
  return IJ1.createElement(
    y,
    { marginTop: 1, paddingLeft: 2, flexDirection: "column", width: B - 4 },
    IJ1.createElement(
      M,
      { dimColor: !0, wrap: "wrap" },
      A.map((Q) => Q.value).join(`
`),
    ),
  );
}
var p$ = A1(V1(), 1);
function EMB(A, B, Q, Z, G, Y, I) {
  let [W, J] = p$.useState(!1),
    [X, F] = p$.useState(""),
    [V, K] = p$.useState(void 0),
    [H, z] = p$.useState(!1),
    [D, C] = p$.useState(""),
    [w, E] = p$.useState(0),
    [L, O] = p$.useState("prompt"),
    R = p$.useRef(void 0);
  function P() {
    (J(!1), F(""), K(void 0), z(!1), C(""), E(0), O("prompt"), (R.current = void 0));
  }
  function _(S) {
    if (!W) return;
    if (!R.current || X.length === 0) {
      (K(void 0), z(!1), Z(w), Y(L));
      return;
    }
    let d = R.current;
    for (let u = S; u < d.length; u++) {
      let o = d[u];
      if (!o) continue;
      let m = typeof o === "string" ? o : o.display,
        j = m.lastIndexOf(X);
      if (j !== -1) {
        (K(u), z(!1));
        let r = rT(m);
        Y(r);
        let J1 = Hs(m).lastIndexOf(X);
        Z(J1 !== -1 ? J1 : j);
        return;
      }
    }
    z(!0);
  }
  (s0(
    (S, d) => {
      if (W) {
        if (d.ctrl && S === "r") {
          let u = V !== void 0 ? V + 1 : 0;
          _(u);
        } else if (d.escape || d.tab) {
          if (b) {
            let u = typeof b === "string" ? b : b.display,
              o = rT(u),
              m = Hs(u);
            (Q(m), Y(o));
          }
          P();
        } else if ((d.ctrl && S === "c") || (d.backspace && X === "")) (Q(D), Z(w), P());
        else if (d.return) {
          if (X.length === 0) A({ display: D, pastedContents: {} });
          else if (b) {
            let u = typeof b === "string" ? b : b.display,
              o = rT(u),
              m = Hs(u);
            (Y(o), A({ display: m, pastedContents: {} }));
          }
          P();
        }
      } else d.ctrl;
    },
    { isActive: !0 },
  ),
    p$.useEffect(() => {
      _(0);
    }, [X]));
  let b = V !== void 0 ? R.current[V] : void 0;
  return { isSearching: W, historyQuery: X, setHistoryQuery: F, historyMatch: b, historyFailedMatch: H };
}
var nc = A1(V1(), 1);
function GF5({ value: A, onChange: B, historyFailedMatch: Q }) {
  let { columns: Z } = IB(),
    G = Q ? "failing bck-i-search: " : "bck-i-search: ";
  return nc.createElement(
    y,
    { marginLeft: 2 },
    nc.createElement(M, { dimColor: !0 }, G),
    nc.createElement(s4, {
      value: A,
      onChange: B,
      cursorOffset: A.length,
      onChangeCursorOffset: () => {},
      columns: Z - G.length,
      focus: !0,
      showCursor: !1,
      multiline: !1,
    }),
  );
}
var NMB = GF5;
function YF5({
  debug: A,
  ideSelection: B,
  toolPermissionContext: Q,
  setToolPermissionContext: Z,
  apiKeyStatus: G,
  commands: Y,
  isLoading: I,
  onQuery: W,
  verbose: J,
  messages: X,
  setToolJSX: F,
  onAutoUpdaterResult: V,
  autoUpdaterResult: K,
  input: H,
  onInputChange: z,
  mode: D,
  onModeChange: C,
  queuedCommands: w,
  queueManager: E,
  submitCount: L,
  onSubmitCountChange: O,
  setIsLoading: R,
  setUserInputOnProcessing: P,
  setAbortController: _,
  onShowMessageSelector: b,
  notification: S,
  addNotification: d,
  mcpClients: u,
  pastedContents: o,
  setPastedContents: m,
  vimMode: j,
  setVimMode: r,
  ideInstallationStatus: Q1,
  showBashesDialog: J1,
  setShowBashesDialog: R1,
  onExit: s1,
  getToolUseContext: Z0,
  thinkingDisabled: _0,
  setThinkingDisabled: D0,
}) {
  let C1 = SO(),
    [g1, v1] = lX.useState(!1),
    [o1, K0] = lX.useState({ show: !1 }),
    [U0, B1] = lX.useState(H.length),
    [I1, H1] = dB(),
    {
      isSearching: h1,
      historyQuery: x1,
      setHistoryQuery: _1,
      historyMatch: p1,
      historyFailedMatch: r1,
    } = EMB(
      (F0) => {
        let R0 = typeof F0 === "string" ? F0 : F0.display;
        h4(R0);
      },
      H,
      z,
      B1,
      U0,
      C,
      D,
    ),
    J0 = lX.useMemo(() => {
      let F0 = Object.keys(o).map(Number);
      if (F0.length === 0) return 1;
      return Math.max(...F0) + 1;
    }, [o]),
    [W0, z1] = lX.useState(!1),
    [l1, j0] = lX.useState(!1),
    [q0, ZA] = lX.useState(!1),
    IA = HMB(H, _0),
    qA = _0 && IA.tokens > 0,
    { pushToBuffer: SA, undo: dA, canUndo: T2, clearBuffer: W6 } = KMB({ maxBufferSize: 50, debounceMs: 1000 });
  CMB({ input: H, pastedContents: o, onInputChange: z, setCursorOffset: B1, setPastedContents: m });
  let CA = $MB({ input: H, mode: D, queuedCommands: w, submitCount: L }),
    rA = lX.useCallback(
      (F0) => {
        if (F0 === "?") {
          (Y1("tengu_help_toggled", {}), z1((UQ) => !UQ));
          return;
        }
        if ((z1(!1), F0.endsWith("/t") && IA.tokens > 0)) {
          if (F0.endsWith("\\/t")) {
            let u9 = F0.slice(0, -3) + "/t";
            (z(u9), B1(u9.length));
            return;
          }
          let UQ = F0.slice(0, -2);
          (D0(!_0), Y1("tengu_thinking_toggled", { disabled: !_0 }), z(UQ), B1(UQ.length));
          return;
        }
        let R0 = F0.length === H.length + 1,
          XA = U0 === 0,
          N2 = rT(F0);
        if (R0 && XA && N2 !== "prompt") {
          C(N2);
          return;
        }
        let s2 = F0.replaceAll("\t", "    ");
        if (H !== s2) SA(H, U0, o);
        z(s2);
      },
      [z, C, H, U0, SA, o, _0, B1, IA.tokens, D0],
    ),
    {
      resetHistory: V2,
      onHistoryUp: W2,
      onHistoryDown: iA,
    } = iNB(
      (F0, R0, XA) => {
        (rA(F0), C(R0), m(XA));
      },
      H,
      o,
      B1,
    );
  function $B() {
    if (WB.length > 1) return;
    if (w.length > 0) {
      P8();
      return;
    }
    if (l1) j0(!1);
    else W2();
  }
  function TB() {
    if (WB.length > 1) return;
    let F0 = iA(),
      R0 = Object.values(I1.backgroundTasks).filter((XA) => XA.status === "running").length;
    if (F0 && R0 > 0) {
      j0(!0);
      let XA = H0();
      if (!XA.hasSeenTasksHint) TA({ ...XA, hasSeenTasksHint: !0 });
    } else j0(!1);
  }
  let [K4, E5] = lX.useState({ suggestions: [], selectedSuggestion: -1, commandArgumentHint: void 0 }),
    h4 = lX.useCallback(
      async (F0, R0 = !1, XA) => {
        if (F0.trim() === "") return;
        let N2 = K4.suggestions.length > 0 && K4.suggestions.every((C0) => C0.description === "directory");
        if (K4.suggestions.length > 0 && !R0 && !N2) return;
        if (["exit", "quit", ":q", ":q!", ":wq", ":wq!"].includes(F0.trim())) {
          if (Y.find((v0) => v0.name === "exit")) h4("/exit", !0);
          else IF5();
          return;
        }
        let s2 = F0,
          UQ = pRA(F0),
          u9 = 0;
        for (let C0 of UQ) {
          let v0 = o[C0.id];
          if (v0 && v0.type === "text") ((s2 = s2.replace(C0.match, v0.content)), u9++);
        }
        if ((Y1("tengu_paste_text", { pastedTextCount: u9 }), I && !tg1(D, s2, Y))) {
          if (D !== "prompt") return;
          (E.enqueue({ value: s2, mode: "prompt" }), z(""), D0(!1), B1(0), m({}), V2(), W6());
          return;
        }
        if (D === "memory") {
          C("memorySelect");
          return;
        }
        (z(""), D0(!1), B1(0), C("prompt"), m({}), O((C0) => C0 + 1), W6());
        let MQ = await qh1(s2, D, I1.checkpointing, (C0) => {
            H1((v0) => ({ ...v0, checkpointing: C0 }));
          }),
          Z4 = !(I && tg1(D, s2, Y)),
          E4 = C4();
        if (Z4) _(E4);
        let j9 = (() => {
            if (D !== "prompt") return;
            let C0 = hw1(s2);
            return {
              level: IA.level,
              disabled: qA,
              triggers: C0.map((v0) => ({ start: v0.start, end: v0.end, text: s2.slice(v0.start, v0.end) })),
            };
          })(),
          {
            messages: tB,
            shouldQuery: G4,
            allowedTools: y1,
            skipHistory: b1,
            maxThinkingTokens: L0,
            model: g0,
          } = await F21({
            input: s2,
            mode: D,
            setIsLoading: R,
            setToolJSX: F,
            context: Z0(X, [], E4, [], void 0, C1),
            pastedContents: o,
            ideSelection: B,
            memoryPath: XA,
            autocheckpoint: MQ,
            messages: X,
            setUserInputOnProcessing: P,
            isAlreadyProcessing: I && tg1(D, s2, Y),
            thinkingMetadata: j9,
          });
        if ((F(null), tB.length)) W(tB, E4, G4, y1 ?? [], g0 ?? C1, L0);
        else {
          if (!b1) sT({ display: F0, pastedContents: o });
          if ((V2(), !(tg1(D, s2, Y) && I))) _(null);
          return;
        }
        for (let C0 of tB) if (C0.type === "user") (sT({ display: APA(F0, D), pastedContents: o }), V2());
      },
      [
        K4.suggestions,
        I1.checkpointing,
        I,
        D,
        z,
        C,
        m,
        O,
        R,
        W6,
        _,
        F,
        Z0,
        X,
        C1,
        o,
        B,
        Y,
        E,
        P,
        H1,
        V2,
        W,
        qA,
        IA.level,
        D0,
      ],
    ),
    {
      suggestions: WB,
      selectedSuggestion: _4,
      commandArgumentHint: j3,
    } = MLB({
      commands: Y,
      onInputChange: z,
      onSubmit: h4,
      setCursorOffset: B1,
      input: H,
      cursorOffset: U0,
      mode: D,
      setSuggestionsState: E5,
      suggestionsState: K4,
    });
  function G7(F0, R0) {
    (Y1("tengu_paste_image", {}), C("prompt"));
    let XA = { id: J0, type: "image", content: F0, mediaType: R0 || "image/png" };
    (m((N2) => ({ ...N2, [J0]: XA })), m5(lRA(XA.id)));
  }
  function g4(F0) {
    let R0 = eI(F0)
        .replace(
          /\r/g,
          `
`,
        )
        .replaceAll("\t", "    "),
      XA = B51(R0),
      N2 = Math.min(Y7 - 10, 2);
    if (R0.length > Lw1 || XA > N2) {
      let s2 = { id: J0, type: "text", content: R0 };
      (m((UQ) => ({ ...UQ, [J0]: s2 })), m5(Z20(s2.id, XA)));
    } else m5(R0);
  }
  function m5(F0) {
    SA(H, U0, o);
    let R0 = H.slice(0, U0) + F0 + H.slice(U0);
    (z(R0), B1(U0 + F0.length));
  }
  let A3 = pT(
      () => {},
      () => b(),
    ),
    P8 = lX.useCallback(() => {
      let F0 = E.popAllForEditing(H, U0);
      if (!F0) return;
      (z(F0.text), C("prompt"), B1(F0.cursorOffset));
    }, [E, z, C, H, U0]);
  (lX.useEffect(() => {
    if (!I && !E.isEmpty()) {
      let F0 = [],
        R0;
      while ((R0 = E.dequeue())) F0.push(R0.value);
      let XA = F0.join(`
`);
      h4(XA, !1);
    }
  }, [I, E, h4]),
    VMB(u, function (F0) {
      Y1("tengu_ext_at_mentioned", {});
      let R0,
        XA = LMB.relative(AA(), F0.filePath);
      if (F0.lineStart && F0.lineEnd)
        R0 = F0.lineStart === F0.lineEnd ? `@${XA}#L${F0.lineStart} ` : `@${XA}#L${F0.lineStart}-${F0.lineEnd} `;
      else R0 = `@${XA} `;
      let N2 = H[U0 - 1] ?? " ";
      if (!/\s/.test(N2)) R0 = ` ${R0}`;
      m5(R0);
    }),
    s0((F0, R0) => {
      if (R0.ctrl && F0 === "_") {
        if (T2) {
          let XA = dA();
          if (XA) (z(XA.text), B1(XA.cursorOffset), m(XA.pastedContents));
        }
        return;
      }
      if ((R0.ctrl && F0.toLowerCase(), R0.return && l1)) {
        (R1(!0), j0(!1));
        return;
      }
      if (U0 === 0 && (R0.escape || R0.backspace || R0.delete)) (C("prompt"), z1(!1));
      if (W0 && H === "" && (R0.backspace || R0.delete)) z1(!1);
      if (rJ.check(F0, R0)) {
        let XA = TLB(Q);
        if ((Y1("tengu_mode_cycle", { to: XA }), XA === "plan")) {
          let s2 = H0();
          TA({ ...s2, lastPlanModeUse: Date.now() });
        }
        let N2 = HF(Q, { type: "setMode", mode: XA, destination: "session" });
        if ((Z(N2), W0)) z1(!1);
        return;
      }
      if (R0.escape) {
        if (l1) {
          j0(!1);
          return;
        }
        if (w.length > 0) {
          P8();
          return;
        }
        if (X.length > 0 && !H && !I) A3();
      }
      if (R0.return && W0) z1(!1);
    }));
  let { columns: H4, rows: Y7 } = IB(),
    j8 = H4 - 3,
    IZ = lX.useMemo(() => {
      let F0 = H.split(`
`);
      for (let R0 of F0) if (R0.length > j8) return !0;
      return F0.length > 1;
    }, [H, j8]);
  if (J1)
    return zG.createElement(Ph1, {
      onDone: () => {
        R1(!1);
      },
      toolUseContext: Z0(X, [], new AbortController(), [], void 0, C1),
    });
  let X0 = {
      multiline: !0,
      onSubmit: h4,
      onChange: rA,
      value: p1 ? Hs(typeof p1 === "string" ? p1 : p1.display) : H,
      onHistoryUp: $B,
      onHistoryDown: TB,
      onHistoryReset: V2,
      placeholder: CA,
      onExit: s1,
      onExitMessage: (F0, R0) => K0({ show: F0, key: R0 }),
      onMessage: (F0, R0) => {
        if (F0 && R0) d({ text: R0 }, { timeoutMs: 3600000 });
        else d({ text: "" }, { timeoutMs: 0 });
      },
      onImagePaste: G7,
      columns: j8,
      disableCursorMovementForUpDownKeys: WB.length > 0,
      cursorOffset: U0,
      onChangeCursorOffset: B1,
      onPaste: g4,
      onIsPastingChange: ZA,
      focus: D !== "memorySelect" && !h1,
      showCursor: D !== "memorySelect" && !l1,
      argumentHint: j3,
      onUndo: T2
        ? () => {
            let F0 = dA();
            if (F0) (z(F0.text), B1(F0.cursorOffset), m(F0.pastedContents));
          }
        : void 0,
    },
    k1 = () => {
      if (IA.isDetected && !qA) return Cs[IA.level] || "secondaryBorder";
      return (
        { bash: "bashBorder", memory: "remember", memorySelect: "remember", background: "background" }[D] ||
        "promptBorder"
      );
    },
    Y0 = IA.isDetected && !qA ? IA.level : void 0;
  return zG.createElement(
    y,
    { flexDirection: "column" },
    zG.createElement(qMB, { queuedCommands: w }),
    zG.createElement(
      y,
      {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderColor: k1(),
        borderDimColor: D !== "memory",
        borderStyle: "round",
        borderLeft: !1,
        borderRight: !1,
        marginTop: 1,
        width: "100%",
      },
      zG.createElement(wMB, { mode: D, isLoading: I }),
      zG.createElement(
        y,
        null,
        J21()
          ? zG.createElement(KR0, { ...X0, initialMode: j, onModeChange: r, isLoading: I, shimmerLevel: Y0 })
          : zG.createElement(s4, { ...X0, shimmerLevel: Y0 }),
      ),
    ),
    D === "memorySelect" &&
      zG.createElement(xf1, {
        onSelect: (F0) => {
          h4(H, !1, F0);
        },
        onCancel: () => {
          C("memory");
        },
      }),
    h1 && zG.createElement(NMB, { value: x1, onChange: _1, historyFailedMatch: r1 }),
    zG.createElement(ZMB, {
      apiKeyStatus: G,
      debug: A,
      exitMessage: o1,
      vimMode: j,
      mode: D,
      autoUpdaterResult: K,
      isAutoUpdating: g1,
      verbose: J,
      onAutoUpdaterResult: V,
      onChangeIsUpdating: v1,
      suggestions: WB,
      selectedSuggestion: _4,
      notification: S,
      toolPermissionContext: Q,
      helpOpen: W0,
      suppressHint: H.length > 0,
      tasksSelected: l1,
      ideSelection: B,
      mcpClients: u,
      ideInstallationStatus: Q1,
      checkpointingState: I1.checkpointing,
      isPasting: q0,
      isInputWrapped: IZ,
      messages: X,
      thinkingDetection: IA,
      thinkingDisabled: qA,
    }),
  );
}
var MMB = YF5;
function IF5() {
  (vC0(""), G5(0));
}
function tg1(A, B, Q) {
  return !1;
}
var OMB = A1(V1(), 1);
function RMB() {
  OMB.useEffect(() => {
    let A = Math.round(process.uptime() * 1000);
    Y1("tengu_timer", { event: "startup", durationMs: A });
  }, []);
}
var WJ1 = A1(V1(), 1);
function TMB() {
  let [A, B] = WJ1.useState(() => {
      let Y = oJ(!1);
      if (!ED() || b2()) return "valid";
      if (Y) return "loading";
      return "missing";
    }),
    [Q, Z] = WJ1.useState(null),
    G = WJ1.useCallback(async () => {
      if (!ED() || b2()) return;
      let Y = oJ(!1);
      if (!Y) {
        B("missing");
        return;
      }
      try {
        let W = (await DJB(Y, !1)) ? "valid" : "invalid";
        B(W);
        return;
      } catch (I) {
        (Z(I), B("error"));
        return;
      }
    }, []);
  return { status: A, reverify: G, error: Q };
}
function PMB(A) {
  let [B, Q] = dB();
  s0((Z, G) => {
    if (G.ctrl && Z === "t")
      (Y1("tengu_toggle_todos", { is_expanded: B.showExpandedTodos, has_todos: A && A.length > 0 }),
        Q((Y) => ({ ...Y, showExpandedTodos: !Y.showExpandedTodos })));
  });
}
function jMB(A, B, Q, Z, G, Y, I, W, J) {
  s0((X, F) => {
    if (!F.escape) return;
    if (G === "transcript") return;
    if (Y?.aborted) return;
    if (!Y) return;
    if (Q) return;
    if (J21() && W === "INSERT") return;
    if (Z.length > 0) {
      if (I) I();
    }
    (Y1("tengu_cancel", {}), A(() => []), B());
  });
}
var SMB = A1(V1(), 1);
var WF5 = ["Edit", "MultiEdit", "Write", "NotebookEdit"];
function JJ1(A) {
  return WF5.includes(A);
}
function XJ1(A, B, Q, Z) {
  if (!A.toolDecisions) A.toolDecisions = new Map();
  A.toolDecisions.set(B, { source: Z, decision: Q, timestamp: Date.now() });
}
function FJ1(A, B, Q, Z) {
  let G;
  if (A.getPath && B) {
    let Y = A.inputSchema.safeParse(B);
    if (Y.success) {
      let I = A.getPath(Y.data);
      if (I) G = Bf(I);
    }
  }
  return { decision: Q, source: Z, tool_name: A.name, ...(G && { language: G }) };
}
async function VJ1(A, B, Q) {
  await T$("tool_decision", { decision: B, source: Q, tool_name: A });
}
function JF5(A, B) {
  return SMB.useCallback(
    async (Q, Z, G, Y, I, W) => {
      return new Promise((J) => {
        function X() {
          Y1("tengu_tool_use_cancelled", { messageID: Y.message.id, toolName: Q.name });
        }
        function F() {
          (J({ behavior: "ask", message: WI1 }), G.abortController.abort("tool-rejection"));
        }
        if (G.abortController.signal.aborted) {
          (X(), F());
          return;
        }
        return (W !== void 0 ? Promise.resolve(W) : Zq(Q, Z, G, Y, I))
          .then(async (K) => {
            if (K.behavior === "allow") {
              if (
                (Y1("tengu_tool_use_granted_in_config", { messageID: Y.message.id, toolName: Q.name }), JJ1(Q.name))
              ) {
                let D = FJ1(Q, Z, "accept", "config");
                xn()?.add(1, D);
              }
              (XJ1(G, I, "accept", "config"),
                VJ1(Q.name, "accept", "config"),
                J({ ...K, updatedInput: Z, userModified: !1 }));
              return;
            }
            let H = await G.getAppState(),
              z = await Q.description(Z, {
                isNonInteractiveSession: G.options.isNonInteractiveSession,
                toolPermissionContext: H.toolPermissionContext,
                tools: G.options.tools,
              });
            if (G.abortController.signal.aborted) {
              (X(), F());
              return;
            }
            switch (K.behavior) {
              case "deny": {
                if (
                  (Y1("tengu_tool_use_denied_in_config", { messageID: Y.message.id, toolName: Q.name }), JJ1(Q.name))
                ) {
                  let D = FJ1(Q, Z, "reject", "config");
                  xn()?.add(1, D);
                }
                (XJ1(G, I, "reject", "config"), VJ1(Q.name, "reject", "config"), J(K));
                return;
              }
              case "ask": {
                A((D) => [
                  ...D,
                  {
                    assistantMessage: Y,
                    tool: Q,
                    description: z,
                    input: Z,
                    toolUseContext: G,
                    permissionResult: K,
                    onAbort() {
                      if (
                        (X(),
                        Y1("tengu_tool_use_rejected_in_prompt", { messageID: Y.message.id, toolName: Q.name }),
                        JJ1(Q.name))
                      ) {
                        let C = FJ1(Q, Z, "reject", "user_abort");
                        xn()?.add(1, C);
                      }
                      (XJ1(G, I, "reject", "user_abort"), VJ1(Q.name, "reject", "user_abort"), F());
                    },
                    async onAllow(C, w) {
                      GU1(w);
                      let E = await G.getAppState(),
                        L = pg(E.toolPermissionContext, w);
                      B(L);
                      let O = w.some((_) => U10(_.destination));
                      Y1(
                        O ? "tengu_tool_use_granted_in_prompt_permanent" : "tengu_tool_use_granted_in_prompt_temporary",
                        { messageID: Y.message.id, toolName: Q.name },
                      );
                      let R = O ? "user_permanent" : "user_temporary";
                      if (JJ1(Q.name)) {
                        let _ = FJ1(Q, C, "accept", R);
                        xn()?.add(1, _);
                      }
                      (XJ1(G, I, "accept", R), VJ1(Q.name, "accept", R));
                      let P = Q.inputsEquivalent ? !Q.inputsEquivalent(Z, C) : !1;
                      J({ behavior: "allow", updatedInput: C, userModified: P });
                    },
                    onReject() {
                      if (
                        (Y1("tengu_tool_use_rejected_in_prompt", { messageID: Y.message.id, toolName: Q.name }),
                        JJ1(Q.name))
                      ) {
                        let C = FJ1(Q, Z, "reject", "user_reject");
                        xn()?.add(1, C);
                      }
                      (XJ1(G, I, "reject", "user_reject"), VJ1(Q.name, "reject", "user_reject"), F());
                    },
                  },
                ]);
                return;
              }
            }
          })
          .catch((K) => {
            if (K instanceof QH) (X(), F());
            else U1(K, TD1);
          });
      });
    },
    [A, B],
  );
}
var yMB = JF5;
var kMB = A1(V1(), 1);
function _MB(A, B) {
  return kMB.useMemo(() => {
    if (A && B && B.length > 0) return Sh([...A, ...B], "name");
    return A || [];
  }, [A, B]);
}
var xMB = A1(V1(), 1);
function eg1(A, B) {
  return xMB.useMemo(() => {
    return Sh([...A, ...B], "name");
  }, [A, B]);
}
var vMB = A1(V1(), 1);
function ER0(A, B) {
  return vMB.useMemo(() => {
    if (B.length > 0) return Sh([...A, ...B], "name");
    return A;
  }, [A, B]);
}
var Bu1 = A1(V1(), 1);
import { join as XF5, basename as FF5 } from "path";
var PLUGIN_TYPE = "plugin";
async function KF5(A, B, Q, Z) {
  let G = [],
    Y = w1();
  function I(W, J = []) {
    try {
      let X = Y.readdirSync(W);
      for (let F of X) {
        let V = XF5(W, F.name);
        if (F.isDirectory()) I(V, [...J, F.name]);
        else if (F.isFile() && F.name.endsWith(".md")) {
          let K = HF5(V, B, J, Q, Z);
          if (K) G.push(K);
        }
      }
    } catch (X) {
      d0(`Failed to scan commands directory ${W}: ${X}`);
    }
  }
  return (I(A), G);
}
function HF5(A, B, Q, Z, G) {
  let Y = w1();
  try {
    let I = Y.readFileSync(A, { encoding: "utf-8" }),
      { frontmatter: W, content: J } = B_(I),
      X = FF5(A).replace(/\.md$/, ""),
      V = [B, ...Q, X].join(":"),
      K = W.description ?? qs(J, "Plugin command"),
      H = Es(W["allowed-tools"]),
      z = W["argument-hint"],
      D = W.model,
      C = `${K} (${PLUGIN_TYPE}:${Z})`;
    return {
      type: "prompt",
      name: V,
      description: C,
      allowedTools: H,
      argumentHint: z,
      model: D,
      source: "plugin",
      pluginInfo: { pluginManifest: G, repository: Z },
      isEnabled: () => !0,
      isHidden: !1,
      progressMessage: "running",
      userFacingName() {
        return V;
      },
      async getPromptForCommand(w, E) {
        let L = J;
        if (w)
          if (L.includes("$ARGUMENTS")) L = L.replace("$ARGUMENTS", w);
          else
            L =
              L +
              `

ARGUMENTS: ${w}`;
        return (
          (L = await gA1(
            L,
            {
              ...E,
              async getAppState() {
                let O = await E.getAppState();
                return {
                  ...O,
                  toolPermissionContext: {
                    ...O.toolPermissionContext,
                    alwaysAllowRules: { ...O.toolPermissionContext.alwaysAllowRules, command: H },
                  },
                };
              },
            },
            `/${V}`,
          )),
          [{ type: "text", text: L }]
        );
      },
    };
  } catch (I) {
    return (d0(`Failed to load command from ${A}: ${I}`), null);
  }
}
var KJ1 = YA(async () => {
  let { enabled: A, errors: B } = await BS(),
    Q = [];
  if (B.length > 0) F1(`Plugin loading errors: ${B.map((Z) => Z.error).join(", ")}`);
  for (let Z of A) {
    if (!Z.commandsPath) continue;
    try {
      let G = await KF5(Z.commandsPath, Z.name, Z.repository, Z.manifest);
      if ((Q.push(...G), G.length > 0)) F1(`Loaded ${G.length} commands from plugin ${Z.name}`);
    } catch (G) {
      d0(`Failed to load commands from plugin ${Z.name}: ${G}`);
    }
  }
  return (F1(`Total plugin commands loaded: ${Q.length}`), Q);
});
import { spawn as zF5 } from "node:child_process";
function DF5(A, B) {
  return {
    type: "callback",
    callback: async (Q, Z, G) => {
      let Y = A.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, B),
        I = JSON.stringify(Q),
        W = zF5(Y, [], { env: { ...process.env, CLAUDE_PLUGIN_ROOT: B }, shell: !0, signal: G }),
        J = "",
        X = "";
      (W.stdout.on("data", (V) => {
        J += V.toString();
      }),
        W.stderr.on("data", (V) => {
          X += V.toString();
        }),
        W.stdin.write(I),
        W.stdin.end());
      let F = await new Promise((V, K) => {
        (W.on("close", (H) => {
          V(H ?? 1);
        }),
          W.on("error", K));
      });
      try {
        let V = J.trim();
        if (V.startsWith("{")) return JSON.parse(V);
      } catch {}
      if (F === 0) return { continue: !0, suppressOutput: !1 };
      else if (F === 2) return { continue: !1, decision: "block", reason: X || "Hook blocked operation" };
      else return { continue: !0, suppressOutput: !1, systemMessage: `Plugin hook error: ${X}` };
    },
  };
}
function CF5(A) {
  let B = {
    PreToolUse: [],
    PostToolUse: [],
    Notification: [],
    UserPromptSubmit: [],
    SessionStart: [],
    SessionEnd: [],
    Stop: [],
    SubagentStop: [],
    PreCompact: [],
  };
  if (!A.hooksConfig) return B;
  for (let [Q, Z] of Object.entries(A.hooksConfig)) {
    let G = Q;
    if (!B[G]) continue;
    for (let Y of Z) {
      let I = [];
      for (let W of Y.hooks) if (W.type === "command") I.push(DF5(W.command, A.path));
      if (I.length > 0) B[G].push({ matcher: Y.matcher, hooks: I });
    }
  }
  return B;
}
var Au1 = YA(async () => {
  let { enabled: A } = await BS(),
    B = {
      PreToolUse: [],
      PostToolUse: [],
      Notification: [],
      UserPromptSubmit: [],
      SessionStart: [],
      SessionEnd: [],
      Stop: [],
      SubagentStop: [],
      PreCompact: [],
    };
  for (let Z of A) {
    if (!Z.hooksConfig) continue;
    F1(`Loading hooks from plugin: ${Z.name}`);
    let G = CF5(Z);
    for (let Y of Object.keys(G)) B[Y].push(...G[Y]);
  }
  i$1(B);
  let Q = Object.values(B).reduce((Z, G) => Z + G.reduce((Y, I) => Y + I.hooks.length, 0), 0);
  F1(`Registered ${Q} hooks from ${A.length} plugins`);
});
function bMB() {
  let [, A] = dB(),
    B = Bu1.useCallback(async () => {
      try {
        let { enabled: Q, disabled: Z } = await BS(),
          [G, Y] = await Promise.all([KJ1(), l01(), Au1()]);
        (A((I) => ({ ...I, plugins: { enabled: Q, disabled: Z, commands: G, agents: Y } })),
          F1(
            `Loaded plugins - Enabled: ${Q.length}, Disabled: ${Z.length}, Commands: ${G.length}, Agents: ${Y.length}`,
          ));
      } catch (Q) {
        (F1(`Error loading plugins: ${Q}`),
          A((Z) => ({ ...Z, plugins: { enabled: [], disabled: [], commands: [], agents: [] } })));
      }
    }, [A]);
  return (
    Bu1.useEffect(() => {
      if (process.env.ENABLE_PLUGINS) B();
      else A((Q) => ({ ...Q, plugins: { enabled: [], disabled: [], commands: [], agents: [] } }));
    }, [B, A]),
    { refreshPlugins: B }
  );
}
var DQ = A1(V1(), 1),
  If = A1(V1(), 1);
var rO = A1(V1(), 1);
var j2 = A1(V1(), 1);
import { relative as UF5 } from "path";
var $F5 = {
    id: "large-memory-files",
    type: "warning",
    isActive: () => {
      return ed().length > 0;
    },
    render: () => {
      let A = ed();
      return j2.createElement(
        j2.Fragment,
        null,
        A.map((B) => {
          let Q = B.path.startsWith(AA()) ? UF5(AA(), B.path) : B.path;
          return j2.createElement(
            y,
            { key: B.path, flexDirection: "row" },
            j2.createElement(M, { color: "warning" }, t0.warning),
            j2.createElement(
              M,
              { color: "warning" },
              "Large ",
              j2.createElement(M, { bold: !0 }, Q),
              " will impact performance (",
              ZG(B.content.length),
              " chars >",
              " ",
              ZG(ej),
              ")",
              j2.createElement(M, { dimColor: !0 }, " • /memory to edit"),
            ),
          );
        }),
      );
    },
  },
  wF5 = {
    id: "ultra-claude-md",
    type: "warning",
    isActive: () => {
      let A = Ac();
      return A !== null && A.content.length > m01;
    },
    render: () => {
      let A = Ac();
      if (!A) return null;
      let B = A.content.length;
      return j2.createElement(
        y,
        { flexDirection: "row", gap: 1 },
        j2.createElement(M, { color: "warning" }, t0.warning),
        j2.createElement(
          M,
          { color: "warning" },
          "CLAUDE.md entries marked as IMPORTANT exceed",
          " ",
          m01,
          " chars (",
          B,
          " chars)",
          j2.createElement(M, { dimColor: !0 }, " • /memory to edit"),
        ),
      );
    },
  },
  qF5 = {
    id: "claude-ai-external-token",
    type: "warning",
    isActive: () => {
      let A = Mj();
      return b2() && (A.source === "ANTHROPIC_AUTH_TOKEN" || A.source === "apiKeyHelper");
    },
    render: () => {
      let A = Mj();
      return j2.createElement(
        y,
        { flexDirection: "row", marginTop: 1 },
        j2.createElement(M, { color: "warning" }, t0.warning),
        j2.createElement(
          M,
          { color: "warning" },
          "Auth conflict: Using ",
          A.source,
          " instead of Claude account subscription token. Either unset ",
          A.source,
          ", or run `claude /logout`.",
        ),
      );
    },
  },
  EF5 = {
    id: "api-key-conflict",
    type: "warning",
    isActive: () => {
      let { source: A } = xF(!1);
      return !!uZ1() && (A === "ANTHROPIC_API_KEY" || A === "apiKeyHelper");
    },
    render: () => {
      let { source: A } = xF(!1);
      return j2.createElement(
        y,
        { flexDirection: "row", marginTop: 1 },
        j2.createElement(M, { color: "warning" }, t0.warning),
        j2.createElement(
          M,
          { color: "warning" },
          "Auth conflict: Using ",
          A,
          " instead of Anthropic Console key. Either unset ",
          A,
          ", or run `claude /logout`.",
        ),
      );
    },
  },
  NF5 = {
    id: "both-auth-methods",
    type: "warning",
    isActive: () => {
      let { source: A } = xF(!1),
        B = Mj();
      return A !== "none" && B.source !== "none" && !(A === "apiKeyHelper" && B.source === "apiKeyHelper");
    },
    render: () => {
      let { source: A } = xF(!1),
        B = Mj();
      return j2.createElement(
        y,
        { flexDirection: "column", marginTop: 1 },
        j2.createElement(
          y,
          { flexDirection: "row" },
          j2.createElement(M, { color: "warning" }, t0.warning),
          j2.createElement(
            M,
            { color: "warning" },
            "Auth conflict: Both a token (",
            B.source,
            ") and an API key (",
            A,
            ") are set. This may lead to unexpected behavior.",
          ),
        ),
        j2.createElement(
          y,
          { flexDirection: "column", marginLeft: 3 },
          j2.createElement(
            M,
            { color: "warning" },
            "• Trying to use",
            " ",
            B.source === "claude.ai" ? "claude.ai" : B.source,
            "?",
            " ",
            A === "ANTHROPIC_API_KEY"
              ? 'Unset the ANTHROPIC_API_KEY environment variable, or claude /logout then say "No" to the API key approval before login.'
              : A === "apiKeyHelper"
                ? "Unset the apiKeyHelper setting."
                : "claude /logout",
          ),
          j2.createElement(
            M,
            { color: "warning" },
            "• Trying to use ",
            A,
            "?",
            " ",
            B.source === "claude.ai"
              ? "claude /logout to sign out of claude.ai."
              : `Unset the ${B.source} environment variable.`,
          ),
        ),
      );
    },
  },
  LF5 = {
    id: "release-notes",
    type: "info",
    isActive: (A) => {
      let { hasReleaseNotes: B } = zh1(A.config.lastReleaseNotesSeen);
      return B;
    },
    render: (A) => {
      let { releaseNotes: B } = zh1(A.config.lastReleaseNotesSeen);
      return j2.createElement(
        y,
        { flexDirection: "column", marginTop: 1 },
        j2.createElement(M, { dimColor: !0 }, "What's new:"),
        j2.createElement(
          y,
          { flexDirection: "column", marginLeft: 1 },
          B.map((Q, Z) => j2.createElement(M, { key: Z, dimColor: !0 }, "• ", Q)),
        ),
      );
    },
  },
  MF5 = {
    id: "sonnet-1m-welcome",
    type: "info",
    isActive: (A) => A.showSonnet1MNotice === !0,
    render: () => {
      return j2.createElement(
        y,
        { flexDirection: "column", marginTop: 1 },
        j2.createElement(
          M,
          { bold: !0 },
          "You now have access to Sonnet 4 with 1M context (uses more rate limits than Sonnet on long requests) • Update in /model",
        ),
      );
    },
  },
  OF5 = {
    id: "opusplan-welcome",
    type: "info",
    isActive: (A) => A.opusPlanExpDefaultForDisplay !== "" && A.opusPlanExpDefaultForDisplay !== void 0,
    render: () => {
      if (M31() === "active")
        return j2.createElement(
          y,
          { flexDirection: "column", marginTop: 1 },
          j2.createElement(
            M,
            { bold: !0 },
            "Your default model is now Opus Plan Mode (Opus 4.1 in plan mode, else Sonnet 4) • Activate plan mode by pressing",
            " ",
            rJ.displayText,
            " twice • /model to switch",
          ),
        );
      return j2.createElement(
        y,
        { flexDirection: "column", marginTop: 1 },
        j2.createElement(
          M,
          { bold: !0 },
          "Opus Plan Mode (Opus 4.1 in plan mode, else Sonnet 4) is now available in /model • Activate plan mode by pressing",
          " ",
          rJ.displayText,
          " twice",
        ),
      );
    },
  },
  RF5 = {
    id: "large-agent-descriptions",
    type: "warning",
    isActive: (A) => {
      return OI1(A.agentDefinitions) > Wc;
    },
    render: (A) => {
      let B = OI1(A.agentDefinitions);
      return j2.createElement(
        y,
        { flexDirection: "row" },
        j2.createElement(M, { color: "warning" }, t0.warning),
        j2.createElement(
          M,
          { color: "warning" },
          "Large cumulative agent descriptions will impact performance (~",
          ZG(B),
          " tokens >",
          " ",
          ZG(Wc),
          ")",
          j2.createElement(M, { dimColor: !0 }, " • /agents to manage"),
        ),
      );
    },
  },
  TF5 = [$F5, wF5, RF5, qF5, EF5, NF5, LF5, MF5, OF5];
function fMB(A) {
  return TF5.filter((B) => B.isActive(A));
}
function hMB({ agentDefinitions: A } = {}) {
  let B = H0(),
    Q = TZ()?.organizationUuid,
    G = (Q ? B.s1mAccessCache?.[Q] : void 0)?.hasAccessNotAsDefault,
    Y = Q && B.hasShownS1MWelcomeV2?.[Q],
    I = b2() && G && !Y,
    J = Q && B.hasShownOpusPlanWelcome?.[Q] ? "" : M31(),
    X = { config: B, showSonnet1MNotice: I, opusPlanExpDefaultForDisplay: J, agentDefinitions: A },
    F = fMB(X);
  if (
    (rO.useEffect(() => {
      if (!Q) return;
      let V = F.some((H) => H.id === "sonnet-1m-welcome"),
        K = F.some((H) => H.id === "opusplan-welcome");
      if (V) Y1("tengu_sonnet_1m_notice_shown", {});
      if (K) Y1("tengu_opusplan_notice_shown", {});
      if (V || K)
        TA({
          ...B,
          ...(V && { hasShownS1MWelcomeV2: { ...B.hasShownS1MWelcomeV2, [Q]: !0 } }),
          ...(K && { hasShownOpusPlanWelcome: { ...B.hasShownOpusPlanWelcome, [Q]: !0 } }),
        });
    }, [F, B, Q]),
    rO.useEffect(() => {
      if (F.some((K) => K.id === "release-notes"))
        TA({
          ...B,
          lastReleaseNotesSeen: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.anthropic.com/s/claude-code",
            VERSION: "1.0.119",
          }.VERSION,
        });
    }, [B, F]),
    F.length === 0)
  )
    return null;
  return rO.createElement(
    y,
    { flexDirection: "column", paddingLeft: 1 },
    F.map((V) => rO.createElement(rO.Fragment, { key: V.id }, V.render(X))),
  );
}
var i$ = A1(V1(), 1);
async function PF5() {
  if (b2()) return !1;
  let A = await Cq1(!1);
  if (!A) return !1;
  return Boolean(A.account.has_claude_max) || Boolean(A.account.has_claude_pro);
}
function gMB() {
  let [A] = i$.useState(() => {
    let B = H0(),
      Q = B.subscriptionNoticeCount ?? 0,
      Z = B.hasAvailableSubscription;
    if (Q >= 3) return !1;
    return Z ?? !1;
  });
  return (
    i$.useEffect(() => {
      PF5().then((B) => {
        let Q = H0(),
          Z = Q.subscriptionNoticeCount ?? 0;
        if (B) Z += 1;
        if (Q.subscriptionNoticeCount !== Z || Q.hasAvailableSubscription !== B)
          TA({ ...Q, subscriptionNoticeCount: Z, hasAvailableSubscription: B });
      });
    }, [A]),
    A
  );
}
function uMB() {
  return (
    i$.useEffect(() => {
      Y1("tengu_switch_to_subscription_notice_shown", {});
    }, []),
    i$.createElement(
      y,
      { paddingLeft: 1, marginTop: 1, marginBottom: 1 },
      i$.createElement(
        M,
        { color: "suggestion" },
        "You can now use your Claude subscription with Claude Code",
        i$.createElement(M, { color: "text", dimColor: !0 }, " ", "• /login to activate"),
      ),
    )
  );
}
var NR0 = A1(V1(), 1);
function mMB({ message: A, isTranscriptMode: B }) {
  if (!(B && A.timestamp && A.type === "assistant" && A.message.content.some((G) => G.type === "text"))) return null;
  let Z = new Date(A.timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: !0 });
  return NR0.default.createElement(
    y,
    { marginTop: 1, minWidth: Z.length },
    NR0.default.createElement(M, { dimColor: !0 }, Z),
  );
}
var LR0 = A1(V1(), 1);
function dMB({ message: A, isTranscriptMode: B }) {
  if (!(B && A.type === "assistant" && A.message.model && A.message.content.some((Z) => Z.type === "text")))
    return null;
  return LR0.default.createElement(
    y,
    { marginTop: 1, marginLeft: 1, minWidth: A.message.model.length + 8 },
    LR0.default.createElement(M, { dimColor: !0 }, A.message.model),
  );
}
var HJ1 = 10,
  jF5 = ({
    messages: A,
    normalizedMessageHistory: B,
    tools: Q,
    verbose: Z,
    toolJSX: G,
    toolUseConfirmQueue: Y,
    inProgressToolUseIDs: I,
    isMessageSelectorVisible: W,
    conversationId: J,
    screen: X,
    screenToggleId: F,
    streamingToolUses: V,
    showAllInTranscript: K = !1,
    agentDefinitions: H,
  }) => {
    let z = SO(),
      { columns: D } = IB(),
      C = gMB(),
      w = a5B(),
      [E, L] = DQ.useState([]),
      O = F$.getAllowedHosts(),
      R = O !== void 0 ? O.length : null;
    DQ.useEffect(() => {
      bO().then((o) => L(o.map((m) => m.message)));
    }, []);
    let P = If.useMemo(() => [...B, ...OI(A).filter(Eb1)], [A, B]),
      _ = If.useMemo(() => new Set(Object.keys(Nb1(P))), [P]),
      b = If.useMemo(() => vJB(P), [P]),
      S = If.useMemo(
        () =>
          V.filter((o) => {
            if (I.has(o.contentBlock.id)) return !1;
            if (
              P.some(
                (m) =>
                  m.type === "assistant" &&
                  m.message.content[0].type === "tool_use" &&
                  m.message.content[0].id === o.contentBlock.id,
              )
            )
              return !1;
            return !0;
          }),
        [V, I, P],
      ),
      d = If.useMemo(() => S.flatMap((o) => OI([wE({ content: [o.contentBlock] })])), [S]),
      u = If.useCallback(
        (o) => {
          let m = X === "transcript",
            j = m && !K,
            r = o ? P : wb(P),
            Q1 = _JB(
              r.filter((s1) => s1.type !== "progress").filter((s1) => uJB(s1, m)),
              d,
            ),
            J1 = j ? Q1.slice(-HJ1) : Q1,
            R1 = j && Q1.length > HJ1;
          return [
            {
              type: "static",
              jsx: DQ.createElement(
                y,
                { flexDirection: "column", gap: 1, key: `logo-${J}-${F}` },
                DQ.createElement(PA1, { model: z }),
                Rw1() ? DQ.createElement(tA0, null) : DQ.createElement(hMB, { agentDefinitions: H }),
              ),
            },
            ...(C
              ? [
                  {
                    type: "static",
                    jsx: DQ.createElement(y, { key: `max-subscription-${J}-${F}` }, DQ.createElement(uMB, null)),
                  },
                ]
              : []),
            ...(w && !C
              ? [
                  {
                    type: "static",
                    jsx: DQ.createElement(y, { key: `subscription-upsell-${J}-${F}` }, DQ.createElement(s5B, null)),
                  },
                ]
              : []),
            ...(R !== null
              ? [
                  {
                    type: "static",
                    jsx: DQ.createElement(
                      y,
                      { key: `network-restrictions-${J}-${F}`, flexDirection: "row", paddingLeft: 1, marginTop: 1 },
                      DQ.createElement(M, { color: "success" }, t0.bullet, " "),
                      DQ.createElement(
                        M,
                        { color: "success" },
                        `Network restrictions are enabled non-MCP tools ${R > 0 ? ` (${R} hosts)` : ""}`,
                      ),
                    ),
                  },
                ]
              : []),
            ...(E.length > 0
              ? [
                  {
                    type: "static",
                    jsx: DQ.createElement(
                      y,
                      { key: `install-messages-${J}-${F}`, flexDirection: "column", paddingLeft: 1 },
                      E.map((s1, Z0) =>
                        DQ.createElement(
                          y,
                          { key: Z0, flexDirection: "row", marginTop: 1 },
                          DQ.createElement(M, { color: "warning" }, t0.bullet),
                          DQ.createElement(M, { color: "warning" }, " ", s1),
                        ),
                      ),
                    ),
                  },
                ]
              : []),
            ...(R1
              ? [
                  {
                    type: "static",
                    jsx: DQ.createElement(ab, {
                      key: `truncation-indicator-${J}-${F}`,
                      dividerChar: "─",
                      title: `Ctrl+E to show ${n1.bold(P.length - HJ1)} previous messages`,
                      width: D,
                    }),
                  },
                ]
              : []),
            ...(m && K && P.length > HJ1
              ? [
                  {
                    type: "static",
                    jsx: DQ.createElement(ab, {
                      key: `hide-indicator-${J}-${F}`,
                      dividerChar: "─",
                      title: `Ctrl+E to hide ${n1.bold(P.length - HJ1)} previous messages`,
                      width: D,
                    }),
                  },
                ]
              : []),
            ...J1.flatMap((s1) => {
              let Z0 = KI1(s1),
                _0 = fJB(s1, P);
              return {
                type: SF5(s1, J1, new Set(V.map((C1) => C1.contentBlock.id)), _, X) ? "static" : "transient",
                jsx: DQ.createElement(
                  y,
                  {
                    key: `${s1.uuid}-${J}-${F}`,
                    width: D,
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 1,
                  },
                  DQ.createElement(sb, {
                    message: s1,
                    messages: P,
                    addMargin: !0,
                    tools: Q,
                    verbose: o,
                    erroredToolUseIDs: b,
                    inProgressToolUseIDs: I,
                    progressMessagesForMessage: _0,
                    shouldAnimate: (!G || !!G.shouldContinueAnimation) && !Y.length && !W && (!Z0 || I.has(Z0)),
                    shouldShowDot: !0,
                    resolvedToolUseIDs: _,
                  }),
                  DQ.createElement(mMB, { message: s1, isTranscriptMode: m }),
                  DQ.createElement(dMB, { message: s1, isTranscriptMode: m }),
                ),
              };
            }),
            ...(ZJB()
              ? [
                  {
                    type: "static",
                    jsx: DQ.createElement(y, { key: `data-sharing-${J}-${F}` }, DQ.createElement(YJB, null)),
                  },
                ]
              : []),
          ];
        },
        [X, K, P, J, F, z, C, w, E, D, d, Q, b, I, G, Y.length, W, _, V, R, H],
      );
    return DQ.createElement(
      DQ.Fragment,
      null,
      DQ.createElement(
        d$1,
        { key: `static-messages-${J}-${F}`, items: u(Z).filter((o) => o.type === "static") },
        (o) => o.jsx,
      ),
      u(Z)
        .filter((o) => o.type === "transient")
        .map((o) => o.jsx),
    );
  },
  zJ1 = DQ.memo(jF5);
function SF5(A, B, Q, Z, G) {
  if (G === "transcript") return !0;
  switch (A.type) {
    case "attachment":
      return !0;
    case "system":
    case "user":
    case "assistant": {
      let Y = KI1(A);
      if (!Y) return !0;
      if (Q.has(Y)) return !1;
      let I = xJB(A, B);
      return MJB(I, Z);
    }
    case "progress":
      return !1;
  }
}
import { randomUUID as K21 } from "crypto";
function cMB(A, B, Q, Z, G) {
  s0(async (Y, I) => {
    if (I.ctrl && Y === "o")
      (B((W) => (W === "transcript" ? "prompt" : "transcript")), Q((W) => W + 1), Z(!1), await G());
    if (I.ctrl && Y === "e" && A === "transcript") (Z((W) => !W), Q((W) => W + 1), await G());
    if ((I.ctrl && Y === "c" && A === "transcript") || (I.escape && A === "transcript"))
      (B("prompt"), Q((W) => W + 1), Z(!1), await G());
  });
}
var DJ1 = A1(V1(), 1);
var yF5 = f.object({
  method: f.literal("selection_changed"),
  params: f.object({
    selection: f
      .object({
        start: f.object({ line: f.number(), character: f.number() }),
        end: f.object({ line: f.number(), character: f.number() }),
      })
      .nullable()
      .optional(),
    text: f.string().optional(),
    filePath: f.string().optional(),
  }),
});
function lMB(A, B) {
  let Q = DJ1.useRef(!1),
    Z = DJ1.useRef(null);
  DJ1.useEffect(() => {
    let G = vH(A);
    if (Z.current !== G)
      ((Q.current = !1),
        (Z.current = G || null),
        B({ lineCount: 0, lineStart: void 0, text: void 0, filePath: void 0 }));
    if (Q.current || !G) return;
    let Y = (I) => {
      if (I.selection?.start && I.selection?.end) {
        let { start: W, end: J } = I.selection,
          X = J.line - W.line + 1;
        if (J.character === 0) X--;
        let F = { lineCount: X, lineStart: W.line, text: I.text, filePath: I.filePath };
        B(F);
      }
    };
    (G.client.setNotificationHandler(yF5, (I) => {
      if (Z.current !== G) return;
      try {
        let W = I.params;
        if (W.selection && W.selection.start && W.selection.end) Y(W);
        else if (W.text !== void 0) Y({ selection: null, text: W.text, filePath: W.filePath });
      } catch (W) {
        U1(W, TYA);
      }
    }),
      (Q.current = !0));
  }, [A, B]);
}
var Qu1 = A1(V1(), 1);
function kF5() {
  return mz("cache_warming", "config", {
    enabled: !1,
    idleThresholdMs: 240000,
    subsequentWarmupIntervalMs: 300000,
    maxRequests: 1,
  });
}
function pMB(A, B) {
  let Q = Qu1.useRef(null);
  Qu1.useEffect(() => {
    let Z = kF5();
    if (!Z.enabled) return;
    if (A || B === 0) {
      if (Q.current) (Q.current.abort(), (Q.current = null));
      return;
    }
    let G = 0,
      Y = null,
      I = async () => {
        let J = qD1();
        if (!J) {
          F1("Cache warming: No previous API request to replay");
          return;
        }
        if (Q.current) Q.current.abort();
        Q.current = C4();
        try {
          F1(`Cache warming: Sending request ${G + 1}/${Z.maxRequests}`);
          let X = {
              ...J,
              messages: [...J.messages, { role: "user", content: 'Reply with just "OK"' }],
              max_tokens: 10,
            },
            V = (await fF({ maxRetries: 0, model: J.model, isNonInteractiveSession: !1 })).beta.messages.stream(X, {
              signal: Q.current.signal,
            });
          for await (let z of V) if (Q.current?.signal.aborted) break;
          let H = (await V.finalMessage()).usage;
          if (
            (F1("Cache warming: Request completed"),
            Y1("tengu_cache_warming_request", {
              warmup_number: G + 1,
              cache_read_tokens: H.cache_read_input_tokens ?? 0,
              cache_creation_tokens: H.cache_creation_input_tokens ?? 0,
              input_tokens: H.input_tokens,
              output_tokens: H.output_tokens,
            }),
            G++,
            G < Z.maxRequests)
          )
            W(Z.subsequentWarmupIntervalMs);
        } catch (X) {
          if (X instanceof Error) U1(X, STYLE_CODE_270);
        } finally {
          Q.current = null;
        }
      },
      W = (J) => {
        Y = setTimeout(() => {
          I();
        }, J);
      };
    return (
      W(Z.idleThresholdMs),
      () => {
        if (Y) clearTimeout(Y);
        if (Q.current) (Q.current.abort(), (Q.current = null));
      }
    );
  }, [A, B]);
}
var iMB = A1(V1(), 1);
function nMB({
  autoConnectIdeFlag: A,
  ideToInstallExtension: B,
  setDynamicMcpConfig: Q,
  setShowIdeOnboarding: Z,
  setIDEInstallationState: G,
}) {
  iMB.useEffect(() => {
    function Y(I) {
      if (!I) return;
      if (
        !(
          (H0().autoConnectIde || A || FW() || B || EQ(process.env.CLAUDE_CODE_AUTO_CONNECT_IDE)) &&
          !zD1(process.env.CLAUDE_CODE_AUTO_CONNECT_IDE)
        )
      )
        return;
      Q((X) => {
        if (X?.ide) return X;
        return {
          ...X,
          ide: {
            type: I.url.startsWith("ws:") ? "ws-ide" : "sse-ide",
            url: I.url,
            ideName: I.name,
            authToken: I.authToken,
            ideRunningInWindows: I.ideRunningInWindows,
            scope: "dynamic",
          },
        };
      });
    }
    JZB(
      Y,
      B,
      () => Z(!0),
      (I) => G(I),
    );
  }, [A, B, Q, Z, G]);
}
var _F5 = A1(V1(), 1);
var JF3 = A1(V1(), 1);
var MR0 = A1(V1(), 1);
var xF5 = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"];
function vF5() {
  return BT(xF5) ?? "Goodbye!";
}
var bF5 = {
    type: "local-jsx",
    name: "exit",
    aliases: ["quit"],
    description: "Exit the REPL",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A) {
      return (A(vF5()), await Z5(0, "prompt_input_exit"), null);
    },
    userFacingName() {
      return "exit";
    },
  },
  Zu1 = bF5;
var V21 = A1(V1(), 1);
function aMB() {
  let A = V21.useRef();
  if (!A.current) A.current = TS();
  let B = A.current,
    [Q, Z] = V21.useState(() => B.get());
  return (
    V21.useEffect(() => {
      function G() {
        Z(B.get());
      }
      return (G(), B.setUpdateCallback(G), () => B.setUpdateCallback(null));
    }, [B]),
    { queuedCommands: Q, queueManager: B }
  );
}
var wW = A1(V1(), 1);
import { randomUUID as sMB } from "crypto";
var fF5 = {
  minTimeBeforeFeedbackMs: 600000,
  minTimeBetweenFeedbackMs: 1800000,
  minTimeBetweenGlobalFeedbackMs: 3600000,
  minUserTurnsBeforeFeedback: 5,
  minUserTurnsBetweenFeedback: 15,
  hideThanksAfterMs: 3000,
  onForModels: [],
  probability: 1,
};
function rMB(A, B) {
  let Q = A.filter((R) => R.type === "user"),
    [Z, G] = wW.useState("closed"),
    [Y, I] = wW.useState(null),
    W = ob1("tengu_feedback_survey_config", fF5),
    J = wW.useRef(sMB()),
    X = wW.useRef(Date.now()),
    F = wW.useRef(Q.length),
    V = wW.useRef(null),
    K = wW.useMemo(() => {
      return H0()?.feedbackSurveyState;
    }, []),
    H = wW.useMemo(() => {
      return A.filter((P) => P.type === "assistant").slice(-1)[0]?.message?.id || "unknown";
    }, [A]),
    z = wW.useCallback((R) => {
      I(R);
      let P = H0();
      TA({ ...P, feedbackSurveyState: { lastShownTime: R } });
    }, []),
    D = wW.useCallback(() => {
      if (Z !== "closed") return;
      (G("open"),
        z(Date.now()),
        (V.current = Q.length),
        (J.current = sMB()),
        Y1("tengu_feedback_survey_event", {
          event_type: "appeared",
          appearance_id: J.current,
          last_assistant_message_id: H,
        }));
    }, [Z, H, Q.length, z]),
    C = wW.useCallback(() => {
      (G("thanks"), setTimeout(() => G("closed"), W.hideThanksAfterMs));
    }, [W.hideThanksAfterMs]),
    w = uG(),
    E = wW.useMemo(() => {
      if (!W.onForModels || W.onForModels.length === 0) return !1;
      if (W.onForModels.includes("*")) return !0;
      return W.onForModels.includes(w);
    }, [W.onForModels, w]),
    L =
      Z === "closed" &&
      !B &&
      E &&
      (process.env.CLAUDE_FORCE_DISPLAY_SURVEY ||
        (() => {
          if (K?.lastShownTime) {
            if (Date.now() - K.lastShownTime < W.minTimeBetweenGlobalFeedbackMs) return !1;
          }
          if (Y) {
            if (Date.now() - Y < W.minTimeBetweenFeedbackMs) return !1;
            if (V.current && Q.length < V.current + W.minUserTurnsBetweenFeedback) return !1;
          } else {
            if (Date.now() - X.current < W.minTimeBeforeFeedbackMs) return !1;
            if (Q.length < F.current + W.minUserTurnsBeforeFeedback) return !1;
          }
          let R = W.probability ?? 1;
          if (Math.random() > R) return !1;
          return !0;
        })());
  wW.useEffect(() => {
    if (L) D();
  }, [L, D]);
  let O = wW.useCallback(
    (R) => {
      (z(Date.now()),
        C(),
        Y1("tengu_feedback_survey_event", {
          event_type: "responded",
          appearance_id: J.current,
          response: R,
          last_assistant_message_id: H,
        }));
    },
    [H, C, z],
  );
  return { state: Z, handleSelect: O };
}
var CJ1 = A1(V1(), 1);
var RJ = A1(V1(), 1),
  hF5 = ["0", "1", "2", "3"],
  gF5 = { 0: "dismissed", 1: "bad", 2: "fine", 3: "good" },
  OR0 = (A) => hF5.includes(A);
function oMB({ onSelect: A, inputValue: B, setInputValue: Q }) {
  let Z = RJ.useRef(B);
  return (
    RJ.useEffect(() => {
      if (B !== Z.current) {
        let G = B.slice(-1);
        if (OR0(G)) (Q(B.slice(0, -1)), A(gF5[G]));
      }
    }, [B, A, Q]),
    RJ.default.createElement(
      y,
      { flexDirection: "column", marginTop: 1 },
      RJ.default.createElement(
        y,
        null,
        RJ.default.createElement(M, null, n1.red("● ")),
        RJ.default.createElement(M, { bold: !0 }, "How is Claude doing this session? (optional)"),
      ),
      RJ.default.createElement(
        y,
        { marginLeft: 2 },
        RJ.default.createElement(y, { width: 10 }, RJ.default.createElement(M, null, n1.cyan("1"), ": Bad")),
        RJ.default.createElement(y, { width: 10 }, RJ.default.createElement(M, null, n1.cyan("2"), ": Fine")),
        RJ.default.createElement(y, { width: 10 }, RJ.default.createElement(M, null, n1.cyan("3"), ": Good")),
        RJ.default.createElement(y, null, RJ.default.createElement(M, null, n1.cyan("0"), ": Dismiss")),
      ),
    )
  );
}
function tMB({ state: A, handleSelect: B, inputValue: Q, setInputValue: Z }) {
  if (A === "closed") return null;
  if (A === "thanks")
    return CJ1.default.createElement(
      y,
      { marginTop: 1, flexDirection: "column" },
      CJ1.default.createElement(M, { color: "success" }, "✓ Thanks for helping make Claude better!"),
      CJ1.default.createElement(
        M,
        { dimColor: !0 },
        "Use /feedback to leave more detailed comments or /bug to file a bug.",
      ),
    );
  if (Q && !OR0(Q)) return null;
  return CJ1.default.createElement(oMB, { onSelect: B, inputValue: Q, setInputValue: Z });
}
function eMB() {
  return H0().tipsHistory || {};
}
function uF5(A) {
  let B = H0();
  TA({ ...B, tipsHistory: A });
}
function AOB(A) {
  let B = eMB(),
    Q = H0().numStartups;
  ((B[A] = Q), uF5(B));
}
function mF5(A) {
  return eMB()[A] || 0;
}
function Gu1(A) {
  let B = mF5(A);
  if (B === 0) return 1 / 0;
  return H0().numStartups - B;
}
var QOB = A1(vG1(), 1);
var cF5 = [
    {
      id: "ide-hotkey",
      content: `${HB() === "macos" ? "Cmd+Escape" : "Ctrl+Escape"} to launch Claude in your IDE`,
      cooldownSessions: 8,
      async isRelevant() {
        let A = Hw0();
        return A ? zw0(A) : !1;
      },
    },
    {
      id: "new-user-warmup",
      content: "Start with small features or bug fixes, tell Claude to propose a plan, and verify its suggested edits",
      cooldownSessions: 3,
      async isRelevant() {
        return H0().numStartups < 10;
      },
    },
    {
      id: "plan-mode-for-complex-tasks",
      content: `Use Plan Mode to prepare for a complex request before making changes. Press ${rJ.displayText} twice to enable.`,
      cooldownSessions: 5,
      isRelevant: async () => {
        let A = H0();
        return (A.lastPlanModeUse ? (Date.now() - A.lastPlanModeUse) / 86400000 : 1 / 0) > 7;
      },
    },
    {
      id: "git-worktrees",
      content: "Use git worktrees to run multiple Claude sessions in parallel.",
      cooldownSessions: 10,
      isRelevant: async () => {
        try {
          let A = H0();
          return (await A61()) <= 1 && A.numStartups > 50;
        } catch (A) {
          return !1;
        }
      },
    },
    {
      id: "terminal-setup",
      content:
        tA.terminal === "Apple_Terminal"
          ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more"
          : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
      cooldownSessions: 10,
      async isRelevant() {
        let A = H0();
        if (tA.terminal === "Apple_Terminal") return q_.isEnabled() && !A.optionAsMetaKeyInstalled;
        return q_.isEnabled() && !A.shiftEnterKeyBindingInstalled;
      },
    },
    {
      id: "shift-enter",
      content:
        tA.terminal === "Apple_Terminal"
          ? "Press Option+Enter to send a multi-line message"
          : "Press Shift+Enter to send a multi-line message",
      cooldownSessions: 10,
      async isRelevant() {
        let A = H0();
        return Boolean(
          (tA.terminal === "Apple_Terminal" ? A.optionAsMetaKeyInstalled : A.shiftEnterKeyBindingInstalled) &&
          A.numStartups > 3,
        );
      },
    },
    {
      id: "shift-enter",
      content:
        tA.terminal === "Apple_Terminal"
          ? "Run /terminal-setup to enable Option+Enter for new lines"
          : "Run /terminal-setup to enable Shift+Enter for new lines",
      cooldownSessions: 10,
      async isRelevant() {
        if (!Vu()) return !1;
        let A = H0();
        return !(tA.terminal === "Apple_Terminal" ? A.optionAsMetaKeyInstalled : A.shiftEnterKeyBindingInstalled);
      },
    },
    {
      id: "memory-command",
      content: "Use /memory to view and manage Claude memory",
      cooldownSessions: 15,
      async isRelevant() {
        return H0().memoryUsageCount <= 0;
      },
    },
    {
      id: "theme-command",
      content: "Use /theme to change the color theme",
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "status-line",
      content: "Use /statusline to set up a custom status line that will display beneath the input box",
      cooldownSessions: 25,
      isRelevant: async () => E2().statusLine === void 0,
    },
    {
      id: "prompt-queue",
      content: "Hit Enter to queue up additional messages while Claude is working.",
      cooldownSessions: 5,
      async isRelevant() {
        return H0().promptQueueUseCount <= 3;
      },
    },
    {
      id: "enter-to-steer-in-relatime",
      content: "Send messages to Claude while it works to steer Claude in real-time",
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "todo-list",
      content: "Ask Claude to create a todo list when working on complex tasks to track progress and remain on track",
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "vscode-command-install",
      content: `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${tA.terminal === "vscode" ? "code" : tA.terminal}' command in PATH" to enable IDE integration`,
      cooldownSessions: 0,
      async isRelevant() {
        if (!fY1()) return !1;
        if (HB() !== "macos") return !1;
        switch (tA.terminal) {
          case "vscode":
            return !IZB();
          case "cursor":
            return !GZB();
          case "windsurf":
            return !YZB();
          default:
            return !1;
        }
      },
    },
    {
      id: "ide-upsell-external-terminal",
      content: "Connect Claude to your IDE · /ide",
      cooldownSessions: 4,
      async isRelevant() {
        if (FW()) return !1;
        if (zv1().length !== 0) return !1;
        return Cv1().length > 0;
      },
    },
    {
      id: "# for memory",
      content:
        "Want Claude to remember something? Hit # to add preferences, tools, and instructions to Claude's memory",
      cooldownSessions: 10,
      isRelevant: async () => H0().memoryUsageCount <= 10,
    },
    {
      id: "install-github-app",
      content: "Run /install-github-app to tag @claude right from your Github issues and PRs",
      cooldownSessions: 10,
      isRelevant: async () => !H0().githubActionSetupCount,
    },
    {
      id: "permissions",
      content: "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
      cooldownSessions: 10,
      async isRelevant() {
        return H0().numStartups > 10;
      },
    },
    {
      id: "drag-and-drop-images",
      content: "Did you know you can drag and drop image files into your terminal?",
      cooldownSessions: 10,
      isRelevant: async () => !0,
    },
    {
      id: "paste-images-mac",
      content: "Paste images into Claude Code using control+v (not cmd+v!)",
      cooldownSessions: 10,
      isRelevant: async () => HB() === "macos",
    },
    {
      id: "double-esc",
      content: "Press Esc twice to rewind the conversation to a previous point in time",
      cooldownSessions: 10,
      isRelevant: async () => !BOB(),
    },
    {
      id: "double-esc-checkpoint",
      content: "Press Esc twice to rewind the code and/or conversation to a previous point in time",
      cooldownSessions: 10,
      isRelevant: async () => BOB(),
    },
    {
      id: "continue",
      content: "Run claude --continue or claude --resume to resume a conversation",
      cooldownSessions: 10,
      isRelevant: async () => !0,
    },
    {
      id: "custom-commands",
      content:
        "Create custom slash commands by adding .md files to .claude/commands/ in your project or ~/.claude/commands/ for commands that work in any project",
      cooldownSessions: 15,
      async isRelevant() {
        return H0().numStartups > 10;
      },
    },
    {
      id: "shift-tab",
      content: `Hit ${rJ.displayText} to cycle between default mode, auto-accept edit mode, and plan mode`,
      cooldownSessions: 10,
      isRelevant: async () => !0,
    },
    {
      id: "image-paste",
      content: `Use ${Ku.displayText} to paste images from your clipboard`,
      cooldownSessions: 20,
      isRelevant: async () => !0,
    },
    {
      id: "custom-agents",
      content:
        "Use /agents to create context-efficient experts for specific tasks. Eg. Code Reviewer, Software Architect, Data Scientist",
      cooldownSessions: 15,
      async isRelevant() {
        return H0().numStartups > 5;
      },
    },
    {
      id: "opusplan-mode-reminder",
      content: `Your default model setting is Opus Plan Mode. Press ${rJ.displayText} twice to activate Plan Mode and plan with Claude Opus.`,
      cooldownSessions: 2,
      async isRelevant() {
        let A = H0(),
          Q = Jt() === "opusplan",
          Z = A.lastPlanModeUse ? (Date.now() - A.lastPlanModeUse) / 86400000 : 1 / 0;
        return Q && Z > 3;
      },
    },
  ],
  lF5 = [],
  Yu1 = QOB.memoize(async () => {
    let A = [...cF5, ...lF5],
      B = await Promise.all(A.map((Q) => Q.isRelevant()));
    return A.filter((Q, Z) => B[Z]).filter((Q) => Gu1(Q.id) >= Q.cooldownSessions);
  });
function BOB() {
  let A = H0();
  return !1;
}
function pF5(A) {
  if (A.length === 0) return;
  if (A.length === 1) return A[0];
  let B = A.map((Q) => ({ tip: Q, sessions: Gu1(Q.id) }));
  return (B.sort((Q, Z) => Z.sessions - Q.sessions), B[0]?.tip);
}
async function ZOB() {
  if (E2().spinnerTipsEnabled === !1) return;
  let A = await Yu1();
  if (A.length === 0) return;
  return pF5(A);
}
function GOB(A) {
  (AOB(A.id), Y1("tengu_tip_shown", { tipIdLength: A.id, cooldownSessions: A.cooldownSessions }));
}
var YOB = A1(V1(), 1),
  RR0 = YA(async (A, B) => {
    if (A.mode !== "bypassPermissions") return;
    if (!(await C20())) return;
    B((Z) => {
      return { ...Z, toolPermissionContext: U20(Z.toolPermissionContext) };
    });
  });
function IOB() {
  let [A, B] = dB(),
    { toolPermissionContext: Q } = A;
  YOB.useEffect(() => {
    RR0(Q, B);
  }, []);
}
var Iu1 = A1(V1(), 1);
var o7 = A1(V1(), 1);
function WOB({ hostPattern: { host: A, port: B }, onUserResponse: Q }) {
  function Z(Y) {
    switch (Y) {
      case "yes":
        Q({ allow: !0, rememberForSession: !1 });
        break;
      case "yes-session":
        Q({ allow: !0, rememberForSession: !0 });
        break;
      case "no-session":
        Q({ allow: !1, rememberForSession: !0 });
        break;
    }
  }
  let G = [
    { label: "Yes", value: "yes" },
    { label: `Yes, and allow accessing ${A}:${B} for this session`, value: "yes-session" },
    { label: `No, and disable accessing ${A}:${B} for this session`, value: "no-session" },
  ];
  return o7.createElement(
    y,
    {
      flexDirection: "column",
      borderStyle: "round",
      borderColor: "permission",
      marginTop: 1,
      paddingLeft: 1,
      paddingRight: 1,
    },
    o7.createElement(rH, { title: "Network request outside of sandbox" }),
    o7.createElement(
      y,
      { flexDirection: "column", paddingX: 2, paddingY: 1 },
      o7.createElement(y, null, o7.createElement(M, { dimColor: !0 }, "Host:"), o7.createElement(M, null, " ", A)),
      o7.createElement(y, null, o7.createElement(M, { dimColor: !0 }, "Port:"), o7.createElement(M, null, " ", B)),
      o7.createElement(y, { marginTop: 1 }, o7.createElement(M, null, "Do you want to allow this connection?")),
      o7.createElement(
        y,
        null,
        o7.createElement(xA, { options: G, onChange: Z, onCancel: () => Q({ allow: !1, rememberForSession: !1 }) }),
      ),
    ),
  );
}
var TR0 = 100;
function H21({
  commands: A,
  debug: B,
  initialPrompt: Q,
  initialTools: Z,
  initialMessages: G,
  initialCheckpoints: Y,
  mcpClients: I,
  dynamicMcpConfig: W,
  autoConnectIdeFlag: J,
  strictMcpConfig: X = !1,
  agentDefinitions: F,
  appendSystemPrompt: V,
  hasPipedInput: K = !1,
}) {
  let [H, z] = dB(),
    {
      todoFeatureEnabled: D,
      toolPermissionContext: C,
      verbose: w,
      mainLoopModel: E,
      maxRateLimitFallbackActive: L,
      mcp: O,
      plugins: R,
      rateLimitResetsAt: P,
    } = H,
    _ = SO(),
    b = h01(),
    S = S2.useMemo(() => vE(C, D), [C, D]);
  IOB();
  let [d, u] = S2.useState(W),
    o = S2.useCallback(
      (fA) => {
        u(fA);
      },
      [u],
    ),
    [m, j] = S2.useState("prompt"),
    [r, Q1] = S2.useState(1),
    [J1, R1] = S2.useState(!1),
    [s1, Z0] = S2.useState(!1),
    { notification: _0, addNotification: D0 } = BNB(),
    C1 = nb1();
  (S2.useEffect(() => {
    if (C1.length > 0) D0({ text: "Found invalid settings files. They will be ignored. Run /doctor for details." });
  }, [C1, D0]),
    S2.useEffect(() => {
      if (K)
        D0({
          text: "Warning: Piping input to Claude in interactive mode is deprecated. Pass your prompt as an argument instead.",
          color: "warning",
        });
    }, [K, D0]));
  let g1 = _MB(I, O.clients),
    v1 = S2.useMemo(() => {
      return [...S, ...Z];
    }, [S, Z]);
  bMB();
  let o1 = eg1(v1, O.tools),
    K0 = ER0(A, R.commands),
    U0 = ER0(K0, O.commands),
    [B1, I1] = S2.useState(void 0);
  (XNB(O.clients), lMB(O.clients, I1));
  let [H1, h1] = S2.useState("responding"),
    [x1, _1] = S2.useState([]),
    [p1, r1] = S2.useState(null),
    [J0, W0] = S2.useState(!1),
    [z1, l1] = S2.useState(void 0),
    j0 = S2.useRef(null),
    [q0, ZA] = S2.useState(null);
  S2.useEffect(() => {
    if (q0?.notifications)
      q0.notifications.forEach((fA) => {
        D0({ text: fA }, { timeoutMs: 30000 });
      });
  }, [q0, D0]);
  let [IA, qA] = S2.useState(null),
    [SA, dA] = S2.useState([]),
    [T2, W6] = S2.useState([]),
    [CA, rA] = S2.useState(G ?? []),
    [V2, W2] = S2.useState([]),
    [iA, $B] = S2.useState(!1),
    [TB, K4] = S2.useState(""),
    [E5, h4] = S2.useState("prompt"),
    { queuedCommands: WB, queueManager: _4 } = aMB(),
    [j3, G7] = S2.useState({}),
    [g4, m5] = S2.useState(0),
    [A3, P8] = S2.useState(0),
    [YZ, H4] = S2.useState(0),
    [Y7, j8] = S2.useState(null),
    [IZ, X0] = S2.useState(null),
    [k1, Y0] = S2.useState(null),
    [F0, R0] = S2.useState(!1),
    [XA, N2] = S2.useState(!1),
    [s2, UQ] = S2.useState(K21()),
    [u9, MQ] = S2.useState(H0().hasAcknowledgedCostThreshold),
    [Z4, E4] = S2.useState(new Set()),
    [j9, tB] = S2.useState("INSERT"),
    [G4, y1] = S2.useState(!1),
    [b1, L0] = S2.useState(null),
    [g0, C0] = S2.useState(null),
    [v0, HA] = S2.useState(!1),
    e0 = S2.useRef(!1),
    KA = S2.useCallback(() => {
      let fA = K21();
      return ((j0.current = fA), fA);
    }, []),
    BA = S2.useCallback((fA) => {
      let wB = j0.current;
      if (!wB) {
        if (!fA) (W0(!1), (e0.current = !1));
        return !1;
      }
      if (fA && fA !== wB) return !1;
      return ((j0.current = null), (e0.current = !1), W0(!1), !0);
    }, []),
    UA = S2.useCallback(() => {
      ZOB().then((fA) => {
        if ((z((wB) => ({ ...wB, spinnerTip: fA?.content })), fA)) GOB(fA);
      });
    }, [z]),
    t2 = S2.useCallback(
      (fA) => {
        if ((BA(fA), fA)) H4(Date.now());
        (l1(void 0), P8(0), _1([]), j8(null), X0(null), Y0(null), UA());
      },
      [BA, UA],
    ),
    P2 = (!IA || IA.showSpinner === !0) && SA.length === 0 && J0,
    y2 = rMB(CA, J0);
  (nMB({
    autoConnectIdeFlag: J,
    ideToInstallExtension: b1,
    setDynamicMcpConfig: u,
    setShowIdeOnboarding: HA,
    setIDEInstallationState: C0,
  }),
    GNB(Y, H.checkpointing, (fA) => z((wB) => ({ ...wB, checkpointing: fA }))),
    S2.useEffect(() => {}, []),
    S2.useEffect(() => {
      if (P !== b.resetsAt) z((fA) => ({ ...fA, rateLimitResetsAt: b.resetsAt }));
      if ((NJB(L, P, b, (fA) => z((wB) => ({ ...wB, maxRateLimitFallbackActive: fA }))), L && E === null))
        D0({ text: `Claude Opus limit reached, now using ${uP(Px())}` });
    }, [D0, L, E, P, b, z]));
  let [q1, A0] = S2.useState(!1);
  S2.useEffect(() => {
    if (b.isUsingOverage && !q1) {
      let fA = PZ(),
        wB = fA === "team" || fA === "enterprise",
        Y4 = "Now using extra usage",
        wQ = b.resetsAt ? iC(b.resetsAt, !0) : void 0;
      if (b.rateLimitType === "five_hour")
        Y4 = wB
          ? `5-hour limit ${wQ ? `resets ${wQ}` : "reached"} ∙ continuing with extra usage`
          : "5-hour limit reached, now using extra usage";
      else if (b.rateLimitType === "seven_day")
        Y4 = wB
          ? `Weekly limit ${wQ ? `resets ${wQ}` : "reached"} ∙ continuing with extra usage`
          : "Weekly limit reached, now using extra usage";
      else if (b.rateLimitType === "seven_day_opus")
        if (!O31())
          Y4 = wB
            ? `Opus limit ${wQ ? `resets ${wQ}` : "reached"} ∙ continuing with extra usage`
            : "Opus weekly limit reached, now using extra usage";
        else return;
      (D0({ text: Y4 }), A0(!0));
    } else if (!b.isUsingOverage && q1) A0(!1);
  }, [b, q1, D0]);
  let u1 = S2.useCallback((fA) => {
      (W2(fA), n7(), UQ(K21()));
    }, []),
    w0 = S2.useCallback(
      async (fA, wB) => {
        let Y4 = tL0(wB.messages, o1),
          wQ = await S$("resume");
        (Y4.push(...wQ),
          yb1(wB),
          t2(void 0),
          r1(null),
          await n7(),
          UQ(fA),
          vk(fA),
          rA(() => Y4),
          qA(null),
          K4(""),
          W2([]));
      },
      [o1, t2],
    ),
    T0 = U2(),
    M0 = S2.useMemo(() => qb(U2()), []),
    GA = S2.useRef(
      (() => {
        let fA = mj(TR0);
        return (fA.set(M0, { content: JSON.stringify(H.todos[T0] || []), timestamp: 0 }), fA);
      })(),
    ),
    { status: EA, reverify: FA } = TMB();
  function yA() {
    if ((t2(null), SA[0])) (SA[0].onAbort(), dA([]));
    else p1?.abort();
  }
  let lA = S2.useCallback(() => {
    let fA = _4.popAllForEditing(TB, 0);
    if (!fA) return;
    (K4(fA.text), h4("prompt"));
  }, [_4, K4, h4, TB]);
  (jMB(dA, yA, F0 || G4, WB, m, p1?.signal, lA, j9, IA?.isLocalJSXCommand),
    S2.useEffect(() => {
      if (xC() >= 5 && !XA && !u9) {
        if ((Y1("tengu_cost_threshold_reached", {}), Fx1())) N2(!0);
      }
    }, [CA, XA, u9]));
  let D2 = S2.useCallback(async (fA) => {
      return new Promise((wB) => {
        W6((Y4) => [
          ...Y4,
          {
            hostPattern: fA,
            shouldAllowHost: (wQ) => {
              (W6((VQ) => VQ.slice(1)), wB(wQ));
            },
          },
        ]);
      });
    }, []),
    $Q = E2(),
    uQ = S2.useCallback(
      (fA) => {
        z((wB) => ({ ...wB, toolPermissionContext: fA }));
      },
      [z],
    ),
    O9 = yMB(dA, uQ),
    [v9] = sB(),
    R9 = S2.useCallback(
      (fA, wB, Y4, wQ, VQ, PB) => {
        return {
          abortController: Y4,
          options: {
            commands: U0,
            tools: o1,
            debug: B,
            verbose: w,
            mainLoopModel: PB,
            maxThinkingTokens: s1 ? 0 : Hq(wB, VQ),
            mcpClients: g1,
            mcpResources: O.resources,
            ideInstallationStatus: g0,
            isNonInteractiveSession: !1,
            dynamicMcpConfig: d,
            theme: v9,
          },
          messageQueueManager: _4,
          getAppState() {
            return new Promise((_7) => {
              z((J6) => {
                return (
                  _7(J6),
                  {
                    ...J6,
                    toolPermissionContext: {
                      ...J6.toolPermissionContext,
                      alwaysAllowRules: { ...J6.toolPermissionContext.alwaysAllowRules, command: wQ },
                    },
                  }
                );
              });
            });
          },
          setAppState: z,
          messages: fA,
          setMessages: rA,
          setMessageHistory: u1,
          updateFileHistoryState(_7) {
            z((J6) => ({ ...J6, fileHistory: _7(J6.fileHistory) }));
          },
          onChangeAPIKey: FA,
          readFileState: GA.current,
          setToolJSX: qA,
          addNotification: D0,
          onChangeDynamicMcpConfig: o,
          onInstallIDEExtension: L0,
          nestedMemoryAttachmentTriggers: new Set(),
          setResponseLength: P8,
          setStreamMode: h1,
          setSpinnerMessage: j8,
          setSpinnerColor: X0,
          setSpinnerShimmerColor: Y0,
          setInProgressToolUseIDs: E4,
          agentId: T0,
          resume: w0,
        };
      },
      [U0, o1, B, w, g1, O.resources, g0, d, v9, z, u1, FA, D0, o, T0, w0, _4, s1],
    );
  async function m8() {
    FA();
    let fA = RI();
    for (let J6 of fA) GA.current.set(J6.path, { content: J6.content, timestamp: Date.now() });
    if (!Q) return;
    let wB = KA();
    (W0(!0), P8(0), _1([]));
    let Y4 = await qh1(Q, "prompt", H.checkpointing, (J6) => {
        z((N5) => ({ ...N5, checkpointing: J6 }));
      }),
      wQ = r8A();
    r1(wQ);
    let {
      messages: VQ,
      shouldQuery: PB,
      allowedTools: _7,
    } = await F21({
      input: Q,
      mode: "prompt",
      setIsLoading: W0,
      setToolJSX: qA,
      context: R9(CA, CA, wQ, [], void 0, _),
      ideSelection: B1,
      autocheckpoint: Y4,
      messages: CA,
      setUserInputOnProcessing: l1,
    });
    if (VQ.length) {
      for (let mQ of VQ) if (mQ.type === "user") sT(Q);
      if ((rA((mQ) => [...mQ, ...VQ]), !PB)) {
        (t2(wB), r1(null));
        return;
      }
      let [J6, N5, CG] = await Promise.all([
          Ob(o1, _, Array.from(C.additionalWorkingDirectories.keys()), g1, C),
          eV(),
          jD(),
        ]),
        DK = [...J6, ...(V ? [V] : [])],
        CK = R9([...CA, ...VQ], VQ, wQ, [], void 0, _),
        yJ = _7
          ? {
              ...CK,
              async getAppState() {
                return {
                  ...H,
                  toolPermissionContext: {
                    ...H.toolPermissionContext,
                    alwaysAllowRules: { ...H.toolPermissionContext.alwaysAllowRules, command: _7 },
                  },
                };
              },
            }
          : CK,
        AY = nW1();
      for await (let mQ of dO({
        messages: [...CA, ...VQ],
        systemPrompt: DK,
        userContext: N5,
        systemContext: CG,
        canUseTool: O9,
        toolUseContext: yJ,
        promptCategory: AY,
        querySource: "repl_main_thread",
      }))
        HI1(
          mQ,
          (x7) => {
            rA((W7) => [...W7, x7]);
          },
          () => t2(wB),
          (x7) => P8((W7) => W7 + x7.length),
          h1,
          _1,
        );
    } else (sT(Q), t2(wB));
    MQ(H0().hasAcknowledgedCostThreshold || !1);
  }
  async function S3(fA, wB, Y4, wQ, VQ, PB, _7) {
    let J6 = wB.filter((mQ) => mQ.type === "user" || mQ.type === "assistant").pop();
    if (wQ) {
      VE.handleQueryStart(g1);
      let mQ = vH(g1);
      if (mQ) WZB(mQ);
    }
    if ((Fs(), J6?.type === "user" && typeof J6.message.content === "string")) D9B(J6.message.content);
    if (!wQ) {
      (t2(fA), r1(null));
      return;
    }
    let N5 = R9([...CA, ...wB], wB, Y4, VQ, _7, PB),
      [, CG, DK, CK] = await Promise.all([
        RR0(C, z),
        Ob(o1, PB, Array.from(C.additionalWorkingDirectories.keys()), g1, C),
        eV(),
        jD(),
      ]),
      yJ = [...CG, ...(V ? [V] : [])],
      AY = nW1();
    for await (let mQ of dO({
      messages: [...CA, ...wB],
      systemPrompt: yJ,
      userContext: DK,
      systemContext: CK,
      canUseTool: O9,
      toolUseContext: N5,
      promptCategory: AY,
      querySource: "repl_main_thread",
    }))
      HI1(
        mQ,
        (x7) => {
          rA((W7) => [...W7, x7]);
        },
        () => t2(fA),
        (x7) => P8((W7) => W7 + x7.length),
        h1,
        _1,
      );
    if (!iA)
      rA((mQ) => {
        let x7 = jX(mQ);
        if (Nb(PB) === 1e6) return mQ;
        let { percentLeft: UK } = ZS(x7);
        if (UK > 10) return mQ;
        let { hasAccess: $K } = Qt();
        if (!$K) return mQ;
        let e6 = jR1.value,
          NW = `${UK}% context left` + (Qc() ? " until auto-compact" : "") + ` · try /model ${e6}`,
          UG = X3(NW, "suggestion");
        return ($B(!0), [...mQ, UG]);
      });
    t2(fA);
  }
  async function y3(fA, wB, Y4, wQ, VQ, PB) {
    if (e0.current) {
      (Y1("tengu_concurrent_onquery_detected", {}), Y1("tengu_concurrent_onquery_blocked", {}));
      let J6 = {
        type: "system",
        subtype: "informational",
        content: "Previous query still processing. Please try again.",
        timestamp: new Date().toISOString(),
        uuid: K21(),
        level: "warning",
      };
      (rA((N5) => [...N5, J6]), W0(!1));
      return;
    }
    let _7 = KA();
    (W0(!0), rA((J6) => [...J6, ...fA]), P8(0), _1([]), (e0.current = !0), await S3(_7, fA, wB, Y4, wQ, VQ, PB));
  }
  (t5B(),
    ZNB(CA, CA.length === G?.length),
    RMB(),
    S2.useEffect(() => {
      if (WB.length < 1) return;
      let fA = H0();
      TA({ ...fA, promptQueueUseCount: (fA.promptQueueUseCount ?? 0) + 1 });
    }, [WB.length]));
  let hY = !J0 && XA;
  S2.useEffect(() => {
    (RI1.recordUserActivity(), p91());
  }, [TB, g4]);
  let I7 = S2.useRef(new Set());
  (S2.useEffect(() => {
    let fA = new Set(CA.filter((Y4) => zI1(Y4)).map((Y4) => Y4.uuid));
    if (Array.from(fA).some((Y4) => !I7.current.has(Y4))) ((I7.current = fA), n7(), UQ(K21()));
  }, [CA]),
    S2.useEffect(() => {
      if (J0) return;
      if (g4 === 0) return;
      let fA = setTimeout(() => {
        let wB = Date.now() - UD1();
        if (!J0 && SA.length === 0 && !IA && !hY && !F0 && wB >= H0().messageIdleNotifThresholdMs)
          TA1({ message: "Claude is waiting for your input" });
      }, ONB());
      return () => clearTimeout(fA);
    }, [J0, SA.length, IA, hY, F0, CA, g4]),
    pMB(J0, YZ),
    S2.useEffect(() => {
      return (
        m8(),
        () => {
          VE.shutdown();
        }
      );
    }, []));
  let { internal_eventEmitter: k3 } = K_(),
    [DG, U9] = S2.useState(0);
  S2.useEffect(() => {
    let fA = () => {
        process.stdout.write(`
Claude Code has been suspended. Run \`fg\` to bring Claude Code back.
Note: ctrl + z now suspends Claude Code, ctrl + _ undoes input.
`);
      },
      wB = () => {
        U9((Y4) => Y4 + 1);
      };
    return (
      k3?.on("suspend", fA),
      k3?.on("resume", wB),
      () => {
        (k3?.off("suspend", fA), k3?.off("resume", wB));
      }
    );
  }, [k3]);
  let fI = S2.useMemo(() => OI(V2).filter(Eb1), [V2]);
  cMB(m, j, Q1, R1, n7);
  let d8 = H.todos[T0];
  PMB(d8);
  let [hI, gI] = S2.useState(null),
    [uI, d5] = S2.useState(!1);
  if (m === "transcript")
    return D9.createElement(
      D9.Fragment,
      null,
      D9.createElement(zJ1, {
        messages: CA,
        normalizedMessageHistory: fI,
        tools: o1,
        verbose: !0,
        toolJSX: null,
        toolUseConfirmQueue: [],
        inProgressToolUseIDs: Z4,
        isMessageSelectorVisible: !1,
        conversationId: s2,
        toolPermissionContext: C,
        screen: m,
        agentDefinitions: F,
        screenToggleId: r,
        streamingToolUses: x1,
        showAllInTranscript: J1,
      }),
      IA && D9.createElement(y, { flexDirection: "column", width: "100%" }, IA.jsx),
      D9.createElement(
        y,
        {
          alignItems: "center",
          alignSelf: "center",
          borderTopDimColor: !0,
          borderBottom: !1,
          borderLeft: !1,
          borderRight: !1,
          borderStyle: "single",
          marginTop: 1,
          paddingLeft: 2,
          width: "100%",
        },
        D9.createElement(M, { dimColor: !0 }, "Showing detailed transcript · Ctrl+O to toggle"),
      ),
    );
  return D9.createElement(
    Vh1,
    { key: DG, dynamicMcpConfig: d, isStrictMcpConfig: X },
    D9.createElement(zJ1, {
      messages: CA,
      normalizedMessageHistory: fI,
      tools: o1,
      verbose: w,
      toolJSX: IA,
      toolUseConfirmQueue: SA,
      inProgressToolUseIDs: Z4,
      isMessageSelectorVisible: F0,
      conversationId: s2,
      toolPermissionContext: C,
      screen: m,
      screenToggleId: r,
      streamingToolUses: x1,
      showAllInTranscript: J1,
      agentDefinitions: F,
    }),
    z1 && D9.createElement(y, { paddingTop: 1 }, D9.createElement(M, { dimColor: !0 }, "> ", z1)),
    IA && D9.createElement(y, { flexDirection: "column", width: "100%" }, IA.jsx),
    !1,
    D9.createElement(
      y,
      { flexDirection: "column", width: "100%" },
      P2 &&
        D9.createElement(eXB, {
          mode: H1,
          spinnerTip: H.spinnerTip,
          currentResponseLength: A3,
          overrideMessage: Y7,
          verbose: w,
          todos: d8,
          overrideColor: IZ,
          overrideShimmerColor: k1,
          hasActiveTools: Z4.size > 0,
        }),
      !P2 &&
        H.showExpandedTodos &&
        H.todoFeatureEnabled &&
        D9.createElement(
          y,
          { width: "100%", flexDirection: "column" },
          D9.createElement(o01, { todos: d8 || [], isStandalone: !0 }),
        ),
      !F0 &&
        T2[0] &&
        D9.createElement(WOB, {
          hostPattern: T2[0].hostPattern,
          onUserResponse: (fA) => {
            let { allow: wB, rememberForSession: Y4 } = fA,
              wQ = T2[0];
            if (!wQ) return;
            if (Y4)
              if (wB) F$.addAllowedHost(wQ.hostPattern);
              else F$.addDeniedHost(wQ.hostPattern);
            wQ.shouldAllowHost(wB);
          },
        }),
      !IA &&
        SA[0] !== void 0 &&
        !T2[0] &&
        !F0 &&
        D9.createElement(pNB, {
          onDone: () => dA(([fA, ...wB]) => wB),
          onReject: lA,
          toolUseConfirm: SA[0],
          toolUseContext: R9(CA, CA, p1 ?? C4(), [], void 0, _),
          verbose: w,
        }),
      !IA &&
        SA.length === 0 &&
        !F0 &&
        !T2[0] &&
        hY &&
        D9.createElement(ANB, {
          onDone: () => {
            (N2(!1), MQ(!0));
            let fA = H0();
            (TA({ ...fA, hasAcknowledgedCostThreshold: !0 }), Y1("tengu_cost_threshold_acknowledged", {}));
          },
        }),
      !IA &&
        SA.length === 0 &&
        !F0 &&
        !T2[0] &&
        !hY &&
        !hI &&
        !uI &&
        v0 &&
        D9.createElement(a3B, { onDone: () => HA(!1), installationStatus: g0 }),
      hI,
      SA.length === 0 &&
        !IA?.shouldHidePromptInput &&
        !F0 &&
        !T2[0] &&
        !hY &&
        !hI &&
        !v0 &&
        !uI &&
        D9.createElement(
          D9.Fragment,
          null,
          D9.createElement(tMB, { state: y2.state, handleSelect: y2.handleSelect, inputValue: TB, setInputValue: K4 }),
          D9.createElement(MMB, {
            debug: B,
            ideSelection: B1,
            getToolUseContext: R9,
            toolPermissionContext: C,
            setToolPermissionContext: uQ,
            apiKeyStatus: EA,
            commands: U0,
            isLoading: J0,
            onExit: async () => {
              d5(!0);
              let fA = await Zu1.call(() => {});
              gI(fA);
            },
            onQuery: y3,
            verbose: w,
            messages: CA,
            setToolJSX: qA,
            onAutoUpdaterResult: ZA,
            autoUpdaterResult: q0,
            input: TB,
            thinkingDisabled: s1,
            setThinkingDisabled: Z0,
            onInputChange: K4,
            mode: E5,
            onModeChange: h4,
            queuedCommands: WB,
            queueManager: _4,
            submitCount: g4,
            onSubmitCountChange: (fA) => {
              return (I1(void 0), m5(fA));
            },
            setIsLoading: W0,
            setUserInputOnProcessing: l1,
            setAbortController: r1,
            onShowMessageSelector: () => R0((fA) => !fA),
            notification: _0,
            addNotification: D0,
            mcpClients: g1,
            pastedContents: j3,
            setPastedContents: G7,
            vimMode: j9,
            setVimMode: tB,
            ideInstallationStatus: g0,
            showBashesDialog: G4,
            setShowBashesDialog: y1,
          }),
        ),
    ),
    F0 &&
      D9.createElement(WNB, {
        messages: CA,
        onPreRestore: yA,
        onRestoreCode: async (fA, wB) => {
          if (wB) {
            try {
              await GU0((wQ) => {
                z((VQ) => ({ ...VQ, fileHistory: wQ(VQ.fileHistory) }));
              }, fA.uuid);
            } catch (wQ) {
              U1(wQ, dGA);
            }
            return;
          }
          let Y4 = fA.autocheckpoint?.checkpointId;
          if (!Y4) throw new Error("Checkpoint not found");
          try {
            return await HCB(Y4, H.checkpointing, (VQ) => {
              z((PB) => ({ ...PB, checkpointing: VQ }));
            });
          } catch (wQ) {
            throw (U1(wQ, mGA), wQ);
          }
        },
        onRestoreMessage: async (fA) => {
          let wB = CA.indexOf(fA),
            Y4 = CA.slice(0, wB);
          setImmediate(async () => {
            if ((await n7(), rA([...Y4]), UQ(K21()), typeof fA.message.content === "string")) {
              let wQ = fA.message.content,
                VQ = tQ(wQ, "bash-input"),
                PB = tQ(wQ, "command-name");
              if (VQ) (K4(VQ), h4("bash"));
              else if (PB) {
                let _7 = tQ(wQ, "command-args") || "";
                (K4(`${PB} ${_7}`), h4("prompt"));
              } else (K4(wQ), h4("prompt"));
            } else if (
              Array.isArray(fA.message.content) &&
              fA.message.content.length >= 2 &&
              fA.message.content.some((wQ) => wQ.type === "image") &&
              fA.message.content.some((wQ) => wQ.type === "text")
            ) {
              let wQ = fA.message.content.find((PB) => PB.type === "text");
              if (wQ && wQ.type === "text") (K4(wQ.text), h4("prompt"));
              let VQ = fA.message.content.filter((PB) => PB.type === "image");
              if (VQ.length > 0) {
                let PB = {};
                (VQ.forEach((_7, J6) => {
                  if (_7.source.type === "base64")
                    PB[J6 + 1] = {
                      id: J6 + 1,
                      type: "image",
                      content: _7.source.data,
                      mediaType: _7.source.media_type,
                    };
                }),
                  G7(PB));
              }
            }
          });
        },
        onClose: () => R0(!1),
      }),
  );
}
async function* Wu1({
  agentDefinition: A,
  promptMessages: B,
  toolUseContext: Q,
  canUseTool: Z,
  isAsync: G,
  forkContextMessages: Y,
  recordMessagesToSessionStorage: I = !1,
  querySource: W,
  override: J,
}) {
  let X = A.source === "built-in",
    F = yR1(A.model, Q.options.mainLoopModel),
    K = Z21(A.tools, Q.options.tools, A.source).resolvedTools,
    H = dJB(),
    D = [...(Y ? iF5(Y) : []), ...B],
    C = Y !== void 0 ? j_1(Q.readFileState) : mj(TR0),
    [w, E, L] = await Promise.all([Q.getAppState(), J?.userContext ?? eV(), J?.systemContext ?? jD()]),
    O = Array.from(w.toolPermissionContext.additionalWorkingDirectories.keys()),
    R = A.systemPrompt ? [A.systemPrompt] : [yE0],
    P = J?.systemPrompt ? J.systemPrompt : await kE0(R, F, O),
    _ = eEB(A.agentType, X),
    b = [],
    S = J?.abortController ? J.abortController : G ? new AbortController() : Q.abortController,
    d = G ? !0 : (Q.options.isNonInteractiveSession ?? !1),
    u = G ? () => {} : Q.setAppState;
  for await (let o of dO({
    messages: D,
    systemPrompt: P,
    userContext: E,
    systemContext: L,
    canUseTool: Z,
    toolUseContext: {
      abortController: S,
      options: {
        isNonInteractiveSession: d,
        tools: K,
        commands: [],
        debug: Q.options.debug,
        verbose: Q.options.verbose,
        mainLoopModel: F,
        maxThinkingTokens: Hq(D),
        mcpClients: [],
        mcpResources: {},
      },
      getAppState: Q.getAppState,
      setAppState: u,
      messages: D,
      setMessages: () => {},
      readFileState: C,
      nestedMemoryAttachmentTriggers: new Set(),
      messageQueueManager: TS(),
      setInProgressToolUseIDs: () => {},
      setResponseLength: Q.setResponseLength,
      updateFileHistoryState: () => {},
      agentId: H,
    },
    promptCategory: _,
    querySource: W,
  }))
    if (o.type === "assistant" || o.type === "user" || o.type === "progress") (b.push(o), yield o);
  if (I) await JOB([...D, ...b]);
  if (A.callback) A.callback();
}
function iF5(A) {
  let B = new Set();
  for (let Q of A)
    if (Q?.type === "user") {
      let G = Q.message.content;
      if (Array.isArray(G)) {
        for (let Y of G) if (Y.type === "tool_result" && Y.tool_use_id) B.add(Y.tool_use_id);
      }
    }
  return A.filter((Q) => {
    if (Q?.type === "assistant") {
      let G = Q.message.content;
      if (Array.isArray(G)) return !G.some((I) => I.type === "tool_use" && I.id && !B.has(I.id));
    }
    return !0;
  });
}
var A9 = A1(V1(), 1);
var PR0 = 3,
  nF5 = 9,
  aF5 = 7;
function XOB(
  { totalDurationMs: A, totalToolUseCount: B, totalTokens: Q, usage: Z, content: G },
  Y,
  { tools: I, verbose: W, theme: J },
) {
  let F = `Done (${[B === 1 ? "1 tool use" : `${B} tool uses`, ZG(Q) + " tokens", Gu(A)].join(" · ")})`,
    V = wE({ content: F, usage: Z });
  return A9.createElement(
    y,
    { flexDirection: "column" },
    W
      ? Y.map((K) =>
          A9.createElement(
            NA,
            { key: K.uuid },
            A9.createElement(sb, {
              message: K.data.message,
              messages: K.data.normalizedMessages,
              addMargin: !1,
              tools: I,
              verbose: W,
              erroredToolUseIDs: new Set(),
              inProgressToolUseIDs: new Set(),
              resolvedToolUseIDs: new Set(),
              progressMessagesForMessage: Y,
              shouldAnimate: !1,
              shouldShowDot: !1,
            }),
          ),
        )
      : null,
    W &&
      G &&
      G.length > 0 &&
      A9.createElement(
        NA,
        null,
        A9.createElement(
          y,
          { flexDirection: "column" },
          A9.createElement(M, { color: "success", bold: !0 }, "Agent Response:"),
          G.map((K, H) =>
            A9.createElement(y, { key: H, marginTop: H === 0 ? 0 : 1 }, A9.createElement(M, null, PX(K.text, J))),
          ),
        ),
      ),
    A9.createElement(
      NA,
      { height: 1 },
      A9.createElement(sb, {
        message: V,
        messages: OI([V]),
        addMargin: !1,
        tools: I,
        verbose: W,
        erroredToolUseIDs: new Set(),
        inProgressToolUseIDs: new Set(),
        resolvedToolUseIDs: new Set(),
        progressMessagesForMessage: [],
        shouldAnimate: !1,
        shouldShowDot: !1,
      }),
    ),
  );
}
function FOB({ description: A, prompt: B, subagent_type: Q }, { theme: Z, verbose: G }) {
  if (!A || !B) return null;
  if (G)
    return `Task: ${A}${Q ? ` (using ${Q} agent)` : ""}

Prompt: ${PX(B, Z)}`;
  return A;
}
function Ju1(A, { tools: B, verbose: Q, terminalSize: Z, inProgressToolCallCount: G }) {
  if (!A.length) return A9.createElement(NA, { height: 1 }, A9.createElement(M, { dimColor: !0 }, "Initializing…"));
  let Y = (G ?? 1) * nF5 + aF5,
    I = !Q && Z && Z.rows && Z.rows < Y,
    W = () => {
      let K = A.filter((D) => {
          return D.data.message.message.content.some((w) => w.type === "tool_use");
        }).length,
        H = [...A].reverse().find((D) => D.data.message.type === "assistant"),
        z = null;
      if (H?.data.message.type === "assistant") {
        let D = H.data.message.message.usage;
        z = (D.cache_creation_input_tokens ?? 0) + (D.cache_read_input_tokens ?? 0) + D.input_tokens + D.output_tokens;
      }
      return { toolUseCount: K, tokens: z };
    };
  if (I) {
    let { toolUseCount: K, tokens: H } = W();
    return A9.createElement(
      NA,
      { height: 1 },
      A9.createElement(
        M,
        { dimColor: !0 },
        "In progress… · ",
        A9.createElement(M, { bold: !0 }, K),
        " tool",
        " ",
        K === 1 ? "use" : "uses",
        H && ` · ${ZG(H)} tokens`,
        " · (ctrl-o to expand)",
      ),
    );
  }
  let J = A.filter((K) => {
      return K.data.message.message.content.some((z) => z.type === "tool_use");
    }).length,
    X = Q ? A : A.slice(-PR0),
    F = X.filter((K) => {
      return K.data.message.message.content.some((z) => z.type === "tool_use");
    }).length,
    V = J - F;
  if (!Q && A.length > PR0) X = A.slice(-PR0 + 1);
  return A9.createElement(
    NA,
    null,
    A9.createElement(
      y,
      { flexDirection: "column" },
      X.map((K) =>
        A9.createElement(sb, {
          key: K.uuid,
          message: K.data.message,
          messages: K.data.normalizedMessages,
          addMargin: !1,
          tools: B,
          verbose: Q,
          erroredToolUseIDs: new Set(),
          inProgressToolUseIDs: new Set(),
          resolvedToolUseIDs: KE0(A),
          progressMessagesForMessage: A,
          shouldAnimate: !1,
          shouldShowDot: !1,
          style: "condensed",
        }),
      ),
      V > 0 && A9.createElement(M, { dimColor: !0 }, "+", V, " more tool ", V === 1 ? "use" : "uses"),
    ),
  );
}
function VOB(A, { progressMessagesForMessage: B, tools: Q, verbose: Z, columns: G, messages: Y, style: I, theme: W }) {
  return A9.createElement(A9.Fragment, null, Ju1(B, { tools: Q, verbose: Z }), A9.createElement(o8, null));
}
function KOB(A, { progressMessagesForMessage: B, tools: Q, verbose: Z }) {
  return A9.createElement(
    A9.Fragment,
    null,
    Ju1(B, { tools: Q, verbose: Z }),
    A9.createElement(K5, { result: A, verbose: Z }),
  );
}
function HOB(A) {
  if (A?.subagent_type && A.subagent_type !== kb1.agentType) return A.subagent_type;
  return "Task";
}
function zOB(A) {
  if (!A?.subagent_type) return;
  return d01(A.subagent_type);
}
var sF5 = f.object({
    description: f.string().describe("A short (3-5 word) description of the task"),
    prompt: f.string().describe("The task for the agent to perform"),
    subagent_type: f.string().describe("The type of specialized agent to use for this task"),
  }),
  xH3 = f.object({
    content: f.array(f.object({ type: f.literal("text"), text: f.string() })),
    totalToolUseCount: f.number(),
    totalDurationMs: f.number(),
    totalTokens: f.number(),
    usage: f.object({
      input_tokens: f.number(),
      output_tokens: f.number(),
      cache_creation_input_tokens: f.number().nullable(),
      cache_read_input_tokens: f.number().nullable(),
      server_tool_use: f.object({ web_search_requests: f.number() }).nullable(),
      service_tier: f.enum(["standard", "priority", "batch"]).nullable(),
      cache_creation: f
        .object({ ephemeral_1h_input_tokens: f.number(), ephemeral_5m_input_tokens: f.number() })
        .nullable(),
    }),
  });
function rF5(A) {
  let B = 0,
    Q = OI(A);
  for (let Z of Q)
    if (Z.type === "assistant") {
      for (let G of Z.message.content) if (G.type === "tool_use") B++;
    }
  return B;
}
function oF5(A) {
  let B = A.filter((Q) => Q.type === "assistant");
  return gJ(B);
}
var Q21 = {
  async prompt({ tools: A }) {
    return await hEB(A);
  },
  name: TASK_TOOL_NAME,
  async description() {
    return "Launch a new task";
  },
  inputSchema: sF5,
  async *call({ prompt: A, subagent_type: B }, Q, Z, G) {
    let Y = Date.now(),
      I = await QS(),
      W = I.find((w) => w.agentType === B);
    if (!W) throw new Error(`Agent type '${B}' not found. Available agents: ${I.map((w) => w.agentType).join(", ")}`);
    if (W.color) c01(B, W.color);
    let J = W?.source === "built-in",
      X = yR1(W.model, Q.options.mainLoopModel);
    Y1("tengu_agent_tool_selected", {
      agent_type: W.agentType,
      model: X,
      source: W.source,
      color: W.color,
      is_built_in_agent: J,
    });
    let F = [];
    for await (let w of Wu1({
      agentDefinition: W,
      promptMessages: [bA({ content: A })],
      toolUseContext: Q,
      canUseTool: Z,
      isAsync: !1,
      recordMessagesToSessionStorage: !0,
    })) {
      if ((F.push(w), w.type !== "assistant" && w.type !== "user")) continue;
      HI1(
        w,
        () => {},
        () => {},
        (L) => Q.setResponseLength((O) => O + L.length),
        () => {},
        () => {},
      );
      let E = OI(F);
      for (let L of OI([w]))
        for (let O of L.message.content) {
          if (O.type !== "tool_use" && O.type !== "tool_result") continue;
          yield {
            type: "progress",
            toolUseID: `agent_${G.message.id}`,
            data: { message: L, normalizedMessages: E, type: "agent_progress" },
          };
        }
    }
    let V = gJ(F.filter((w) => w.type !== "system" && w.type !== "progress"));
    if (V && XI1(V)) throw new QH();
    let K = oF5(F);
    if (K === void 0) throw new Error("No assistant messages found");
    let H = K.message.content.filter((w) => w.type === "text"),
      z = Bb1(K.message.usage),
      D = rF5(F);
    (Y1("tengu_agent_tool_completed", {
      model: X,
      prompt_char_count: A.length,
      response_char_count: H.length,
      assistant_message_count: F.length,
      total_tool_uses: D,
      duration_ms: Date.now() - Y,
      total_tokens: z,
      is_built_in_agent: J,
    }),
      yield {
        type: "result",
        data: {
          content: H,
          totalDurationMs: Date.now() - Y,
          totalTokens: z,
          totalToolUseCount: D,
          usage: K.message.usage,
        },
      });
  },
  isReadOnly() {
    return !0;
  },
  isConcurrencySafe() {
    return !0;
  },
  isEnabled() {
    return !0;
  },
  userFacingName: HOB,
  userFacingNameBackgroundColor: zOB,
  async checkPermissions(A) {
    return { behavior: "allow", updatedInput: A };
  },
  mapToolResultToToolResultBlockParam(A, B) {
    return { tool_use_id: B, type: "tool_result", content: A.content };
  },
  renderToolResultMessage: XOB,
  renderToolUseMessage: FOB,
  renderToolUseProgressMessage: Ju1,
  renderToolUseRejectedMessage: VOB,
  renderToolUseErrorMessage: KOB,
};
var DOB = `
- Kills a running background bash shell by its ID
- Takes a shell_id parameter identifying the shell to kill
- Returns a success or failure status 
- Use this tool when you need to terminate a long-running shell
- Shell IDs can be found using the /bashes command
`;
var z21 = A1(V1(), 1);
function COB({ shell_id: A }) {
  if (!A) return null;
  return `Kill shell: ${A}`;
}
function UOB() {
  return null;
}
function $OB() {
  return z21.default.createElement(o8, null);
}
function wOB(A, { verbose: B }) {
  return z21.default.createElement(K5, { result: A, verbose: B });
}
function qOB(A) {
  return z21.default.createElement(
    y,
    null,
    z21.default.createElement(M, null, "  ⎿  "),
    z21.default.createElement(M, null, "Shell ", A.shell_id, " killed"),
  );
}
var tF5 = f.strictObject({ shell_id: f.string().describe("The ID of the background shell to kill") }),
  pH3 = f.object({
    message: f.string().describe("Status message about the operation"),
    shell_id: f.string().describe("The ID of the shell that was killed"),
  }),
  Xu1 = {
    name: "KillShell",
    userFacingName: () => "Kill Shell",
    inputSchema: tF5,
    isEnabled() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !1;
    },
    async checkPermissions(A) {
      return { behavior: "allow", updatedInput: A };
    },
    async validateInput({ shell_id: A }, { getAppState: B }) {
      let Z = (await B()).backgroundTasks[A];
      if (!Z) return { result: !1, message: `No shell found with ID: ${A}`, errorCode: 1 };
      if (Z.type !== "shell") return { result: !1, message: `Shell ${A} is not a shell`, errorCode: 2 };
      return { result: !0 };
    },
    async description() {
      return "Kill a background bash shell by ID";
    },
    async prompt() {
      return DOB;
    },
    mapToolResultToToolResultBlockParam(A, B) {
      return { tool_use_id: B, type: "tool_result", content: JSON.stringify(A) };
    },
    renderToolUseMessage: COB,
    renderToolUseProgressMessage: UOB,
    renderToolUseRejectedMessage: $OB,
    renderToolUseErrorMessage: wOB,
    renderToolResultMessage: qOB,
    async *call({ shell_id: A }, { getAppState: B, setAppState: Q }) {
      let G = (await B()).backgroundTasks[A];
      if (!G) throw new Error(`No shell found with ID: ${A}`);
      if (G.type !== "shell") throw new Error(`Shell ${A} is not a shell`);
      if (G.status !== "running")
        throw new Error(`Shell ${A} is not running, so cannot be killed (status: ${G.status})`);
      let Y = P_1(G);
      (Q((I) => ({ ...I, backgroundTasks: { ...I.backgroundTasks, [A]: Y } })),
        yield { type: "result", data: { message: `Successfully killed shell: ${A} (${G.command})`, shell_id: A } });
    },
  };
function EOB() {
  return `
- Retrieves output from a running or completed background bash shell
- Takes a shell_id parameter identifying the shell
- Always returns only new output since the last check
- Returns stdout and stderr output along with shell status
- Supports optional regex filtering to show only lines matching a pattern
- Use this tool when you need to monitor or check the output of a long-running shell
- Shell IDs can be found using the /bashes command
`;
}
function jR0(A) {
  let B = kG1();
  if (A.length <= B)
    return {
      totalLines: A.split(`
`).length,
      truncatedContent: A,
    };
  let Q = A.slice(0, B),
    Z = A.slice(B).split(`
`).length,
    G = `${Q}

... [${Z} lines truncated] ...`;
  return {
    totalLines: A.split(`
`).length,
    truncatedContent: G,
  };
}
var ac = A1(V1(), 1);
function NOB(A, B, Q) {
  let Z = { stdout: A.stdout, stderr: A.stderr, isImage: !1, sandbox: !1, returnCodeInterpretation: A.error || void 0 };
  return ac.createElement(kd, { content: Z, verbose: Q.verbose });
}
function LOB(A) {
  if (A?.filter) return `Reading shell output (filtered: ${A.filter})`;
  return "Reading shell output";
}
function MOB() {
  return null;
}
function OOB() {
  return ac.createElement(o8, null);
}
function ROB(A, { verbose: B }) {
  return ac.createElement(K5, { result: A, verbose: B });
}
function TOB(A, B) {
  if (!B || !A.trim()) return A;
  let Q = new RegExp(B, "i");
  return A.split(
    `
`,
  ).filter((Y) => Q.test(Y)).join(`
`);
}
var Iz3 = f.object({
    shellId: f.string().describe("The ID of the background shell"),
    command: f.string().describe("The command that was run in the shell"),
    status: f.enum(["running", "completed", "failed", "killed"]).describe("The current status of the shell command"),
    exitCode: f.number().nullable().describe("The exit code of the command, if available"),
    stdout: f.string().describe("The standard output of the command"),
    stderr: f.string().describe("The standard error output of the command"),
    stdoutLines: f.number().describe("Total number of lines in original stdout, even if truncated or filtered"),
    stderrLines: f.number().describe("Total number of lines in original stderr, even if truncated or filtered"),
    error: f.string().optional().describe("Error message if the shell command failed"),
    filterPattern: f
      .string()
      .optional()
      .describe("The regex pattern used for filtering (only present when filter is applied)"),
    timestamp: f.string().describe("The current timestamp when the output was retrieved"),
  }),
  eF5 = f.strictObject({
    bash_id: f.string().describe("The ID of the background shell to retrieve output from"),
    filter: f
      .string()
      .optional()
      .describe(
        "Optional regular expression to filter the output lines. Only lines matching this regex will be included in the result. Any lines that do not match will no longer be available to read.",
      ),
  }),
  Fu1 = {
    name: "BashOutput",
    async description() {
      return "Retrieves output from a background bash shell";
    },
    async prompt() {
      return EOB();
    },
    userFacingName() {
      return "BashOutput";
    },
    isEnabled() {
      return !0;
    },
    inputSchema: eF5,
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async checkPermissions(A) {
      return { behavior: "allow", updatedInput: A };
    },
    async validateInput({ bash_id: A, filter: B }, { getAppState: Q }) {
      if (B)
        try {
          new RegExp(B, "i");
        } catch (Y) {
          return {
            result: !1,
            message: `Invalid regex pattern "${B}": ${Y instanceof Error ? Y.message : String(Y)}`,
            errorCode: 1,
          };
        }
      let G = (await Q()).backgroundTasks[A];
      if (!G) return { result: !1, message: `No shell found with ID: ${A}`, errorCode: 2 };
      if (G.type !== "shell") return { result: !1, message: `Shell ${A} is not a shell`, errorCode: 3 };
      return { result: !0 };
    },
    async *call({ bash_id: A, filter: B }, { getAppState: Q }) {
      let Y = (await Q()).backgroundTasks[A];
      if (!Y) throw new Error(`No shell found with ID: ${A}`);
      if (Y.type !== "shell") throw new Error(`Shell ${A} is not a shell`);
      let I = T_1(Y),
        W = TOB(I.stdout, B),
        J = TOB(I.stderr, B),
        { truncatedContent: X } = jR0(hj(W)),
        { truncatedContent: F } = jR0(hj(J)),
        V = I.stdout.split(`
`).length,
        K = I.stderr.split(`
`).length;
      yield {
        type: "result",
        data: {
          shellId: Y.id,
          command: Y.command,
          status: Y.status,
          exitCode: Y.result?.code ?? null,
          stdout: X,
          stderr: F,
          stdoutLines: V,
          stderrLines: K,
          timestamp: new Date().toISOString(),
          ...(B && { filterPattern: B }),
        },
      };
    },
    mapToolResultToToolResultBlockParam(A, B) {
      let Q = [];
      if ((Q.push(`<status>${A.status}</status>`), A.exitCode !== null && A.exitCode !== void 0))
        Q.push(`<exit_code>${A.exitCode}</exit_code>`);
      if (A.stdout.trim())
        Q.push(`<stdout>
${A.stdout.trimEnd()}
</stdout>`);
      if (A.stderr.trim())
        Q.push(`<stderr>
${A.stderr.trim()}
</stderr>`);
      return (
        Q.push(`<timestamp>${A.timestamp}</timestamp>`),
        {
          tool_use_id: B,
          type: "tool_result",
          content: Q.join(`

`),
        }
      );
    },
    renderToolUseProgressMessage: MOB,
    renderToolResultMessage: NOB,
    renderToolUseMessage: LOB,
    renderToolUseRejectedMessage: OOB,
    renderToolUseErrorMessage: ROB,
  };
var oO = A1(V1(), 1);
function AV5(A) {
  let B = 0,
    Q = 0;
  for (let Z of A) if (typeof Z !== "string") (B++, (Q += Z.content.length));
  return { searchCount: B, totalResultCount: Q };
}
function POB({ query: A, allowed_domains: B, blocked_domains: Q }, { verbose: Z }) {
  if (!A) return null;
  let G = "";
  if (A) G += `"${A}"`;
  if (Z) {
    if (B && B.length > 0) G += `, only allowing domains: ${B.join(", ")}`;
    if (Q && Q.length > 0) G += `, blocking domains: ${Q.join(", ")}`;
  }
  return G;
}
function jOB() {
  return oO.default.createElement(o8, null);
}
function SOB(A, { verbose: B }) {
  return oO.default.createElement(K5, { result: A, verbose: B });
}
function yOB(A) {
  if (A.length === 0) return null;
  let B = A[A.length - 1];
  if (!B?.data) return null;
  let Q = B.data;
  switch (Q.type) {
    case "query_update":
      return oO.default.createElement(NA, null, oO.default.createElement(M, { dimColor: !0 }, "Searching: ", Q.query));
    case "search_results_received":
      return oO.default.createElement(
        NA,
        null,
        oO.default.createElement(M, { dimColor: !0 }, "Found ", Q.resultCount, ' results for "', Q.query, '"'),
      );
    default:
      return null;
  }
}
function kOB(A) {
  let { searchCount: B } = AV5(A.results),
    Q = A.durationSeconds >= 1 ? `${Math.round(A.durationSeconds)}s` : `${Math.round(A.durationSeconds * 1000)}ms`;
  return oO.default.createElement(
    y,
    { justifyContent: "space-between", width: "100%" },
    oO.default.createElement(
      NA,
      { height: 1 },
      oO.default.createElement(M, null, "Did ", B, " search", B !== 1 ? "es" : "", " in ", Q),
    ),
  );
}
var BV5 = f.strictObject({
    query: f.string().min(2).describe("The search query to use"),
    allowed_domains: f.array(f.string()).optional().describe("Only include search results from these domains"),
    blocked_domains: f.array(f.string()).optional().describe("Never include search results from these domains"),
  }),
  QV5 = f.object({
    title: f.string().describe("The title of the search result"),
    url: f.string().describe("The URL of the search result"),
  }),
  ZV5 = f.object({
    tool_use_id: f.string().describe("ID of the tool use"),
    content: f.array(QV5).describe("Array of search hits"),
  }),
  Nz3 = f.object({
    query: f.string().describe("The search query that was executed"),
    results: f.array(f.union([ZV5, f.string()])).describe("Search results and/or text commentary from the model"),
    durationSeconds: f.number().describe("Time taken to complete the search operation"),
  }),
  GV5 = (A) => {
    return {
      type: "web_search_20250305",
      name: "web_search",
      allowed_domains: A.allowed_domains,
      blocked_domains: A.blocked_domains,
      max_uses: 8,
    };
  };
function YV5(A, B, Q) {
  let Z = [],
    G = "",
    Y = !0;
  for (let I of A) {
    if (I.type === "server_tool_use") {
      if (Y) {
        if (((Y = !1), G.trim().length > 0)) Z.push(G.trim());
        G = "";
      }
      continue;
    }
    if (I.type === "web_search_tool_result") {
      if (!Array.isArray(I.content)) {
        let J = `Web search error: ${I.content.error_code}`;
        (U1(new Error(J), yYA), Z.push(J));
        continue;
      }
      let W = I.content.map((J) => ({ title: J.title, url: J.url }));
      Z.push({ tool_use_id: I.tool_use_id, content: W });
    }
    if (I.type === "text")
      if (Y) G += I.text;
      else ((Y = !0), (G = I.text));
  }
  if (G.length) Z.push(G.trim());
  return { query: B, results: Z, durationSeconds: Q };
}
var Vu1 = {
  name: WEB_SEARCH_TOOL_NAME,
  async description(A) {
    return `Claude wants to search the web for: ${A.query}`;
  },
  userFacingName() {
    return "Web Search";
  },
  isEnabled() {
    return h7() === "firstParty";
  },
  inputSchema: BV5,
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  async checkPermissions(A) {
    return { behavior: "passthrough", message: "WebSearchTool requires permission." };
  },
  async prompt() {
    return DBB;
  },
  renderToolUseMessage: POB,
  renderToolUseRejectedMessage: jOB,
  renderToolUseErrorMessage: SOB,
  renderToolUseProgressMessage: yOB,
  renderToolResultMessage: kOB,
  async validateInput(A) {
    let { query: B, allowed_domains: Q, blocked_domains: Z } = A;
    if (!B.length) return { result: !1, message: "Error: Missing query", errorCode: 1 };
    if (Q && Z)
      return {
        result: !1,
        message: "Error: Cannot specify both allowed_domains and blocked_domains in the same request",
        errorCode: 2,
      };
    return { result: !0 };
  },
  async *call(A, B) {
    let Q = performance.now(),
      { query: Z } = A,
      G = bA({ content: "Perform a web search for the query: " + Z }),
      Y = GV5(A),
      I = b01(
        [G],
        ["You are an assistant for performing a web search tool use"],
        B.options.maxThinkingTokens,
        [],
        B.abortController.signal,
        {
          getToolPermissionContext: async () => {
            return (await B.getAppState()).toolPermissionContext;
          },
          model: uG(),
          prependCLISysprompt: !0,
          toolChoice: void 0,
          isNonInteractiveSession: B.options.isNonInteractiveSession,
          extraToolSchemas: [Y],
          promptCategory: "web_search_tool",
        },
      ),
      W = [],
      J = null,
      X = "",
      F = 0,
      V = new Map();
    for await (let w of I) {
      if ((W.push(w), w.type === "stream_event" && w.event?.type === "content_block_start")) {
        let E = w.event.content_block;
        if (E && E.type === "server_tool_use") {
          ((J = E.id), (X = ""));
          continue;
        }
      }
      if (J && w.type === "stream_event" && w.event?.type === "content_block_delta") {
        let E = w.event.delta;
        if (E?.type === "input_json_delta" && E.partial_json) {
          X += E.partial_json;
          try {
            let L = X.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
            if (L && L[1]) {
              let O = JSON.parse('"' + L[1] + '"');
              if (!V.has(J) || V.get(J) !== O)
                (V.set(J, O),
                  F++,
                  yield {
                    type: "progress",
                    toolUseID: `search-progress-${F}`,
                    data: { type: "query_update", query: O },
                  });
            }
          } catch {}
        }
      }
      if (w.type === "stream_event" && w.event?.type === "content_block_start") {
        let E = w.event.content_block;
        if (E && E.type === "web_search_tool_result") {
          let L = E.tool_use_id,
            O = V.get(L) || Z,
            R = E.content;
          (F++,
            yield {
              type: "progress",
              toolUseID: L || `search-progress-${F}`,
              data: { type: "search_results_received", resultCount: Array.isArray(R) ? R.length : 0, query: O },
            });
        }
      }
    }
    let H = W.filter((w) => w.type === "assistant").flatMap((w) => w.message.content),
      D = (performance.now() - Q) / 1000;
    yield { type: "result", data: YV5(H, Z, D) };
  },
  mapToolResultToToolResultBlockParam(A, B) {
    let { query: Q, results: Z } = A,
      G = `Web search results for query: "${Q}"

`;
    return (
      Z.forEach((Y) => {
        if (typeof Y === "string")
          G +=
            Y +
            `

`;
        else if (Y.content.length > 0)
          G += `Links: ${JSON.stringify(Y.content)}

`;
        else
          G += `No links found.

`;
      }),
      { tool_use_id: B, type: "tool_result", content: G.trim() }
    );
  },
};
var Oz3 = f.strictObject({});
var mO0 = new Set([CO.name, TASK_TOOL_NAME]),
  dO0 = new Set([...mO0]),
  _OB = (A) => A.filter((B) => !dO0.has(B.name)),
  vE = (A, B) => {
    let Q = [Q21, gQ, yE, RS, CO, Q6, TY, KE, mF, mO, LJ, ...(B ? [FG] : []), Vu1, Fu1, Xu1, ...[], ...[], ...[]],
      Z = xa(A),
      G = Q.filter((I) => {
        return !Z.some((W) => W.ruleValue.toolName === I.name && W.ruleValue.ruleContent === void 0);
      }),
      Y = G.map((I) => I.isEnabled());
    return G.filter((I, W) => Y[W]);
  };
var IV5 = {
    type: "local-jsx",
    name: "hooks",
    description: "Manage hook configurations for tool events",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, B) {
      let Z = (await B.getAppState()).toolPermissionContext,
        G = vE(Z, !1).map((Y) => Y.name);
      return SR0.createElement(OEB, { toolNames: G, onExit: A });
    },
    userFacingName() {
      return "hooks";
    },
  },
  xOB = IV5;
import { relative as WV5 } from "path";
var JV5 = {
    type: "local",
    name: "files",
    description: "List all files currently in context",
    isEnabled: () => !1,
    isHidden: !1,
    supportsNonInteractive: !0,
    async call(A, B) {
      let Q = B.readFileState ? mv(B.readFileState) : [];
      if (Q.length === 0) return { type: "text", value: "No files in context" };
      return {
        type: "text",
        value: `Files in context:
${Q.map((G) => WV5(AA(), G)).join(`
`)}`,
      };
    },
    userFacingName() {
      return "files";
    },
  },
  vOB = JV5;
var uR0 = A1(V1(), 1);
var UB = A1(V1(), 1),
  iD = A1(V1(), 1);
import { join as bS } from "path";
var tO = { FOLDER_NAME: ".claude", AGENTS_DIR: "agents" };
function bOB(A, B, Q, Z, G, Y) {
  let I = B.replace(/\n/g, "\\n"),
    J =
      Q.length === 1 && Q[0] === "*"
        ? ""
        : `
tools: ${Q.join(", ")}`,
    X = Y
      ? `
model: ${Y}`
      : "",
    F = G
      ? `
color: ${G}`
      : "";
  return `---
name: ${A}
description: ${I}${J}${X}${F}
---

${Z}
`;
}
function Ku1(A) {
  switch (A) {
    case "flagSettings":
      throw new Error(`Cannot get directory path for ${A} agents`);
    case "userSettings":
      return bS(IQ(), tO.AGENTS_DIR);
    case "projectSettings":
      return bS(AA(), tO.FOLDER_NAME, tO.AGENTS_DIR);
    case "policySettings":
      return bS(hT(), tO.FOLDER_NAME, tO.AGENTS_DIR);
    case "localSettings":
      return bS(AA(), tO.FOLDER_NAME, tO.AGENTS_DIR);
  }
}
function fOB(A) {
  switch (A) {
    case "projectSettings":
      return bS(".", tO.FOLDER_NAME, tO.AGENTS_DIR);
    default:
      return Ku1(A);
  }
}
function yR0(A) {
  let B = Ku1(A.source);
  return bS(B, `${A.agentType}.md`);
}
function Hu1(A) {
  if (A.source === "built-in") return "Built-in";
  if (A.source === "plugin") throw new Error("Cannot get file path for plugin agents");
  let B = Ku1(A.source),
    Q = A.filename || A.agentType;
  return bS(B, `${Q}.md`);
}
function hOB(A) {
  if (A.source === "built-in") return "Built-in";
  let B = fOB(A.source);
  return bS(B, `${A.agentType}.md`);
}
function gOB(A) {
  if (A.source === "built-in") return "Built-in";
  if (A.source === "plugin") return `Plugin: ${A.plugin || "Unknown"}`;
  let B = fOB(A.source),
    Q = A.filename || A.agentType;
  return bS(B, `${Q}.md`);
}
function XV5(A) {
  let B = Ku1(A),
    Q = w1();
  if (!Q.existsSync(B)) Q.mkdirSync(B);
  return B;
}
async function kR0(A, B, Q, Z, G, Y = !0, I, W) {
  if (A === "built-in") throw new Error("Cannot save built-in agents");
  XV5(A);
  let J = yR0({ source: A, agentType: B }),
    X = w1();
  if (Y && X.existsSync(J)) throw new Error(`Agent file already exists: ${J}`);
  let F = bOB(B, Q, Z, G, I, W);
  X.writeFileSync(J, F, { encoding: "utf-8", flush: !0 });
}
async function uOB(A, B, Q, Z, G, Y) {
  if (A.source === "built-in") throw new Error("Cannot update built-in agents");
  let I = w1(),
    W = Hu1(A),
    J = bOB(A.agentType, B, Q, Z, G, Y);
  I.writeFileSync(W, J, { encoding: "utf-8", flush: !0 });
}
async function mOB(A) {
  if (A.source === "built-in") throw new Error("Cannot delete built-in agents");
  let B = w1(),
    Q = Hu1(A);
  if (B.existsSync(Q)) B.unlinkSync(Q);
}
var eA = A1(V1(), 1);
var bE = A1(V1(), 1);
function Wf({ title: A, titleColor: B = "text", borderColor: Q = "suggestion", children: Z, subtitle: G }) {
  return bE.createElement(
    y,
    { borderStyle: "round", borderColor: Q, flexDirection: "column" },
    bE.createElement(
      y,
      { flexDirection: "column", paddingX: 1 },
      bE.createElement(M, { bold: !0, color: B }, A),
      G && bE.createElement(M, { dimColor: !0 }, G),
    ),
    bE.createElement(y, { paddingX: 1, flexDirection: "column" }, Z),
  );
}
function D21(A) {
  if (A === "all") return "Agents";
  if (A === "built-in") return "Built-in agents";
  if (A === "plugin") return "Plugin agents";
  return oB1(nC1(A));
}
function dOB({ source: A, agents: B, onBack: Q, onSelect: Z, onCreateNew: G, changes: Y }) {
  let [I, W] = eA.useState(null),
    [J, X] = eA.useState(!0),
    F = (E) => {
      return { isOverridden: !!E.overriddenBy, overriddenBy: E.overriddenBy || null };
    },
    V = () => {
      return eA.createElement(
        y,
        null,
        eA.createElement(M, { color: J ? "suggestion" : void 0 }, J ? `${t0.pointer} ` : "  "),
        eA.createElement(M, { color: J ? "suggestion" : void 0 }, "Create new agent"),
      );
    },
    K = (E) => {
      let L = E.source === "built-in",
        O = !L && !J && I?.agentType === E.agentType && I?.source === E.source,
        { isOverridden: R, overriddenBy: P } = F(E),
        _ = L || R,
        b = !L && O ? "suggestion" : void 0,
        S = E.model || ZG0;
      return eA.createElement(
        y,
        { key: `${E.agentType}-${E.source}` },
        eA.createElement(M, { dimColor: _ && !O, color: b }, L ? "" : O ? `${t0.pointer} ` : "  "),
        eA.createElement(M, { dimColor: _ && !O, color: b }, E.agentType),
        S && eA.createElement(M, { dimColor: !0, color: b }, " · ", S === "inherit" ? "inherit" : S),
        P &&
          eA.createElement(M, { dimColor: !O, color: O ? "warning" : void 0 }, " ", t0.warning, " overridden by ", P),
      );
    },
    H = eA.useMemo(() => {
      let E = B.filter((L) => L.source !== "built-in");
      if (A === "all")
        return [
          ...E.filter((L) => L.source === "userSettings"),
          ...E.filter((L) => L.source === "projectSettings"),
          ...E.filter((L) => L.source === "policySettings"),
        ];
      return E;
    }, [B, A]);
  (eA.useEffect(() => {
    if (!I && !J && H.length > 0)
      if (G) X(!0);
      else W(H[0] || null);
  }, [H, I, J, G]),
    s0((E, L) => {
      if (L.escape) {
        Q();
        return;
      }
      if (L.return) {
        if (J && G) G();
        else if (I) Z(I);
        return;
      }
      if (!L.upArrow && !L.downArrow) return;
      let O = !!G,
        R = H.length + (O ? 1 : 0);
      if (R === 0) return;
      let P = 0;
      if (!J && I) {
        let b = H.findIndex((S) => S.agentType === I.agentType && S.source === I.source);
        if (b >= 0) P = O ? b + 1 : b;
      }
      let _ = L.upArrow ? Math.max(0, P - 1) : Math.min(R - 1, P + 1);
      if (O && _ === 0) (X(!0), W(null));
      else {
        let b = O ? _ - 1 : _,
          S = H[b];
        if (S) (X(!1), W(S));
      }
    }));
  let z = (E = "Built-in (always available):") => {
      let L = B.filter((O) => O.source === "built-in");
      return eA.createElement(
        y,
        { flexDirection: "column", marginBottom: 1, paddingLeft: 2 },
        eA.createElement(M, { bold: !0, dimColor: !0 }, E),
        L.map(K),
      );
    },
    D = (E, L) => {
      if (!L.length) return null;
      let O = L[0]?.baseDir;
      return eA.createElement(
        y,
        { flexDirection: "column", marginBottom: 1 },
        eA.createElement(
          y,
          { paddingLeft: 2 },
          eA.createElement(M, { bold: !0, dimColor: !0 }, E),
          O && eA.createElement(M, { dimColor: !0 }, " (", O, ")"),
        ),
        L.map((R) => K(R)),
      );
    },
    C = D21(A);
  if (!B.length || (A !== "built-in" && !B.some((E) => E.source !== "built-in")))
    return eA.createElement(
      Wf,
      { title: C, subtitle: "No agents found" },
      G && eA.createElement(y, { marginY: 1 }, V()),
      eA.createElement(
        M,
        { dimColor: !0 },
        "No agents found. Create specialized subagents that Claude can delegate to.",
      ),
      eA.createElement(
        M,
        { dimColor: !0 },
        "Each subagent has its own context window, custom system prompt, and specific tools.",
      ),
      eA.createElement(
        M,
        { dimColor: !0 },
        "Try creating: Code Reviewer, Code Simplifier, Security Reviewer, Tech Lead, or UX Reviewer.",
      ),
      A !== "built-in" &&
        B.some((E) => E.source === "built-in") &&
        eA.createElement(eA.Fragment, null, eA.createElement(y, { marginTop: 1 }, eA.createElement(ab, null)), z()),
    );
  return eA.createElement(
    Wf,
    { title: C, subtitle: `${B.filter((E) => !E.overriddenBy).length} agents` },
    Y && Y.length > 0 && eA.createElement(y, { marginTop: 1 }, eA.createElement(M, { dimColor: !0 }, Y[Y.length - 1])),
    eA.createElement(
      y,
      { flexDirection: "column", marginTop: 1 },
      G && eA.createElement(y, { marginBottom: 1 }, V()),
      A === "all"
        ? eA.createElement(
            eA.Fragment,
            null,
            D(
              "User agents",
              B.filter((E) => E.source === "userSettings"),
            ),
            D(
              "Project agents",
              B.filter((E) => E.source === "projectSettings"),
            ),
            D(
              "Managed agents",
              B.filter((E) => E.source === "policySettings"),
            ),
            D(
              "Plugin agents",
              B.filter((E) => E.source === "plugin"),
            ),
            (() => {
              let E = B.filter((L) => L.source === "built-in");
              return E.length > 0
                ? eA.createElement(
                    y,
                    { flexDirection: "column", marginBottom: 1, paddingLeft: 2 },
                    eA.createElement(
                      M,
                      { dimColor: !0 },
                      eA.createElement(M, { bold: !0 }, "Built-in agents"),
                      " (always available)",
                    ),
                    E.map(K),
                  )
                : null;
            })(),
          )
        : A === "built-in"
          ? eA.createElement(
              eA.Fragment,
              null,
              eA.createElement(
                M,
                { dimColor: !0, italic: !0 },
                "Built-in agents are provided by default and cannot be modified.",
              ),
              eA.createElement(
                y,
                { marginTop: 1, flexDirection: "column" },
                B.map((E) => K(E)),
              ),
            )
          : eA.createElement(
              eA.Fragment,
              null,
              B.filter((E) => E.source !== "built-in").map((E) => K(E)),
              B.some((E) => E.source === "built-in") &&
                eA.createElement(
                  eA.Fragment,
                  null,
                  eA.createElement(y, { marginTop: 1 }, eA.createElement(ab, null)),
                  z(),
                ),
            ),
    ),
  );
}
var UJ1 = A1(V1(), 1);
var kI = A1(V1(), 1);
var _R0 = kI.createContext(null);
function xR0({
  steps: A,
  initialData: B = {},
  onComplete: Q,
  onCancel: Z,
  children: G,
  title: Y,
  showStepCounter: I = !0,
}) {
  let [W, J] = kI.useState(0),
    [X, F] = kI.useState(B),
    [V, K] = kI.useState(!1),
    [H, z] = kI.useState([]);
  (Z2(),
    kI.useEffect(() => {
      if (V) (z([]), Q(X));
    }, [V, X, Q]));
  let D = kI.useCallback(() => {
      if (W < A.length - 1) {
        if (H.length > 0) z((P) => [...P, W]);
        J((P) => P + 1);
      } else K(!0);
    }, [W, A.length, H]),
    C = kI.useCallback(() => {
      if (H.length > 0) {
        let P = H[H.length - 1];
        if (P !== void 0) (z((_) => _.slice(0, -1)), J(P));
      } else if (W > 0) J((P) => P - 1);
      else if (Z) Z();
    }, [W, H, Z]),
    w = kI.useCallback(
      (P) => {
        if (P >= 0 && P < A.length) (z((_) => [..._, W]), J(P));
      },
      [W, A.length],
    ),
    E = kI.useCallback(() => {
      if ((z([]), Z)) Z();
    }, [Z]),
    L = kI.useCallback((P) => {
      F((_) => ({ ..._, ...P }));
    }, []),
    O = kI.useMemo(
      () => ({
        currentStepIndex: W,
        totalSteps: A.length,
        wizardData: X,
        setWizardData: F,
        updateWizardData: L,
        goNext: D,
        goBack: C,
        goToStep: w,
        cancel: E,
        title: Y,
        showStepCounter: I,
      }),
      [W, A.length, X, L, D, C, w, E, Y, I],
    ),
    R = A[W];
  if (!R || V) return null;
  return kI.default.createElement(_R0.Provider, { value: O }, G || kI.default.createElement(R, null));
}
var cOB = A1(V1(), 1);
function GZ() {
  let A = cOB.useContext(_R0);
  if (!A) throw new Error("useWizard must be used within a WizardProvider");
  return A;
}
var fS = A1(V1(), 1);
var vR0 = A1(V1(), 1);
function bR0({ instructions: A = "Press ↑↓ to navigate · Enter to select · Esc to go back" }) {
  let B = Z2();
  return vR0.default.createElement(
    y,
    { marginLeft: 3 },
    vR0.default.createElement(M, { dimColor: !0 }, B.pending ? `Press ${B.keyName} again to exit` : A),
  );
}
function tG({
  title: A,
  titleColor: B = "text",
  borderColor: Q = "suggestion",
  children: Z,
  subtitle: G,
  footerText: Y,
}) {
  let { currentStepIndex: I, totalSteps: W, title: J, showStepCounter: X } = GZ();
  return fS.default.createElement(
    fS.default.Fragment,
    null,
    fS.default.createElement(
      y,
      { borderStyle: "round", borderColor: Q, flexDirection: "column" },
      fS.default.createElement(
        y,
        { flexDirection: "column", paddingX: 1 },
        fS.default.createElement(M, { bold: !0, color: B }, A || J || "Wizard", X !== !1 && ` (${I + 1}/${W})`),
        G && fS.default.createElement(M, { dimColor: !0 }, G),
      ),
      fS.default.createElement(y, { paddingX: 1, flexDirection: "column" }, Z),
    ),
    fS.default.createElement(bR0, { instructions: Y }),
  );
}
var zu1 = A1(V1(), 1);
function lOB() {
  let { goNext: A, updateWizardData: B, cancel: Q } = GZ();
  return zu1.default.createElement(
    tG,
    { subtitle: "Choose location", footerText: "Press ↑↓ to navigate · Enter to select · Esc to cancel" },
    zu1.default.createElement(
      y,
      { marginTop: 1 },
      zu1.default.createElement(xA, {
        key: "location-select",
        options: [
          { label: "Project (.claude/agents/)", value: "projectSettings" },
          { label: "Personal (~/.claude/agents/)", value: "userSettings" },
        ],
        onChange: (G) => {
          (B({ location: G }), A());
        },
        onCancel: () => Q(),
      }),
    ),
  );
}
var Du1 = A1(V1(), 1);
function pOB() {
  let { goNext: A, goBack: B, updateWizardData: Q, goToStep: Z } = GZ();
  return Du1.default.createElement(
    tG,
    { subtitle: "Creation method", footerText: "Press ↑↓ to navigate · Enter to select · Esc to go back" },
    Du1.default.createElement(
      y,
      { marginTop: 1 },
      Du1.default.createElement(xA, {
        key: "method-select",
        options: [
          { label: "Generate with Claude (recommended)", value: "generate" },
          { label: "Manual configuration", value: "manual" },
        ],
        onChange: (Y) => {
          let I = Y;
          if ((Q({ method: I, wasGenerated: I === "generate" }), I === "generate")) A();
          else Z(3);
        },
        onCancel: () => B(),
      }),
    ),
  );
}
var pX = A1(V1(), 1);
var FV5 = `You are an elite AI agent architect specializing in crafting high-performance agent configurations. Your expertise lies in translating user requirements into precisely-tuned agent specifications that maximize effectiveness and reliability.

**Important Context**: You may have access to project-specific instructions from CLAUDE.md files and other context that may include coding standards, project structure, and custom requirements. Consider this context when creating agents to ensure they align with the project's established patterns and practices.

When a user describes what they want an agent to do, you will:

1. **Extract Core Intent**: Identify the fundamental purpose, key responsibilities, and success criteria for the agent. Look for both explicit requirements and implicit needs. Consider any project-specific context from CLAUDE.md files. For agents that are meant to review code, you should assume that the user is asking to review recently written code and not the whole codebase, unless the user has explicitly instructed you otherwise.

2. **Design Expert Persona**: Create a compelling expert identity that embodies deep domain knowledge relevant to the task. The persona should inspire confidence and guide the agent's decision-making approach.

3. **Architect Comprehensive Instructions**: Develop a system prompt that:
   - Establishes clear behavioral boundaries and operational parameters
   - Provides specific methodologies and best practices for task execution
   - Anticipates edge cases and provides guidance for handling them
   - Incorporates any specific requirements or preferences mentioned by the user
   - Defines output format expectations when relevant
   - Aligns with project-specific coding standards and patterns from CLAUDE.md

4. **Optimize for Performance**: Include:
   - Decision-making frameworks appropriate to the domain
   - Quality control mechanisms and self-verification steps
   - Efficient workflow patterns
   - Clear escalation or fallback strategies

5. **Create Identifier**: Design a concise, descriptive identifier that:
   - Uses lowercase letters, numbers, and hyphens only
   - Is typically 2-4 words joined by hyphens
   - Clearly indicates the agent's primary function
   - Is memorable and easy to type
   - Avoids generic terms like "helper" or "assistant"

6 **Example agent descriptions**:
  - in the 'whenToUse' field of the JSON object, you should include examples of when this agent should be used.
  - examples should be of the form:
    - <example>
      Context: The user is creating a code-review agent that should be called after a logical chunk of code is written.
      user: "Please write a function that checks if a number is prime"
      assistant: "Here is the relevant function: "
      <function call omitted for brevity only for this example>
      <commentary>
      Since the user is greeting, use the ${TASK_TOOL_NAME} tool to launch the greeting-responder agent to respond with a friendly joke. 
      </commentary>
      assistant: "Now let me use the code-reviewer agent to review the code"
    </example>
    - <example>
      Context: User is creating an agent to respond to the word "hello" with a friendly jok.
      user: "Hello"
      assistant: "I'm going to use the ${TASK_TOOL_NAME} tool to launch the greeting-responder agent to respond with a friendly joke"
      <commentary>
      Since the user is greeting, use the greeting-responder agent to respond with a friendly joke. 
      </commentary>
    </example>
  - If the user mentioned or implied that the agent should be used proactively, you should include examples of this.
- NOTE: Ensure that in the examples, you are making the assistant use the Agent tool and not simply respond directly to the task.

Your output must be a valid JSON object with exactly these fields:
{
  "identifier": "A unique, descriptive identifier using lowercase letters, numbers, and hyphens (e.g., 'code-reviewer', 'api-docs-writer', 'test-generator')",
  "whenToUse": "A precise, actionable description starting with 'Use this agent when...' that clearly defines the triggering conditions and use cases. Ensure you include examples as described above.",
  "systemPrompt": "The complete system prompt that will govern the agent's behavior, written in second person ('You are...', 'You will...') and structured for maximum clarity and effectiveness"
}

Key principles for your system prompts:
- Be specific rather than generic - avoid vague instructions
- Include concrete examples when they would clarify behavior
- Balance comprehensiveness with clarity - every instruction should add value
- Ensure the agent has enough context to handle variations of the core task
- Make the agent proactive in seeking clarification when needed
- Build in quality assurance and self-correction mechanisms

Remember: The agents you create should be autonomous experts capable of handling their designated tasks with minimal additional guidance. Your system prompts are their complete operational manual.
`;
async function iOB(A, B, Q, Z) {
  let G =
      Q.length > 0
        ? `

IMPORTANT: The following identifiers already exist and must NOT be used: ${Q.join(", ")}`
        : "",
    Y = `Create an agent configuration based on this request: "${A}".${G}
  Return ONLY the JSON object, no other text.`,
    I = bA({ content: Y }),
    W = await eV(),
    J = AI1([I], W),
    V = (
      await ZI1(dG(J), [FV5], 0, [], Z || C4().signal, {
        getToolPermissionContext: async () => GS(),
        model: B,
        prependCLISysprompt: !0,
        toolChoice: void 0,
        isNonInteractiveSession: !1,
        temperature: 0.3,
        promptCategory: "agent_creation",
      })
    ).message.content
      .filter((H) => H.type === "text")
      .map((H) => H.text).join(`
`),
    K;
  try {
    K = JSON.parse(V.trim());
  } catch {
    let H = V.match(/\{[\s\S]*\}/);
    if (!H) throw new Error("No JSON object found in response");
    K = JSON.parse(H[0]);
  }
  if (!K.identifier || !K.whenToUse || !K.systemPrompt) throw new Error("Invalid agent configuration generated");
  return (
    Y1("tengu_agent_definition_generated", { agent_identifier: K.identifier }),
    { identifier: K.identifier, whenToUse: K.whenToUse, systemPrompt: K.systemPrompt }
  );
}
function nOB() {
  let { updateWizardData: A, goBack: B, goToStep: Q, wizardData: Z } = GZ(),
    [G, Y] = pX.useState(Z.generationPrompt || ""),
    [I, W] = pX.useState(!1),
    [J, X] = pX.useState(null),
    [F, V] = pX.useState(G.length),
    K = SO(),
    H = pX.useRef(null);
  s0((C, w) => {
    if (w.escape) {
      if (I && H.current) (H.current.abort(), (H.current = null), W(!1), X("Generation cancelled"));
      else if (!I)
        (A({
          generationPrompt: "",
          agentType: "",
          systemPrompt: "",
          whenToUse: "",
          generatedAgent: void 0,
          wasGenerated: !1,
        }),
          Y(""),
          X(null),
          B());
    }
  });
  let z = async () => {
      let C = G.trim();
      if (!C) {
        X("Please describe what the agent should do");
        return;
      }
      (X(null), W(!0), A({ generationPrompt: C, isGenerating: !0 }));
      let w = C4();
      H.current = w;
      try {
        let E = await iOB(C, K, [], w.signal);
        (A({
          agentType: E.identifier,
          whenToUse: E.whenToUse,
          systemPrompt: E.systemPrompt,
          generatedAgent: E,
          isGenerating: !1,
          wasGenerated: !0,
        }),
          Q(6));
      } catch (E) {
        if (E instanceof Error && !E.message.includes("No assistant message found"))
          X(E.message || "Failed to generate agent");
        A({ isGenerating: !1 });
      } finally {
        (W(!1), (H.current = null));
      }
    },
    D = "Describe what this agent should do and when it should be used (be comprehensive for best results)";
  if (I)
    return pX.default.createElement(
      tG,
      { subtitle: D, footerText: "Esc to cancel" },
      pX.default.createElement(
        y,
        { marginTop: 1, flexDirection: "row", alignItems: "center" },
        pX.default.createElement(u6, null),
        pX.default.createElement(M, { color: "suggestion" }, " Generating agent from description..."),
      ),
    );
  return pX.default.createElement(
    tG,
    { subtitle: D, footerText: "Press Enter to submit · Esc to go back" },
    pX.default.createElement(
      y,
      { flexDirection: "column", marginTop: 1 },
      J && pX.default.createElement(y, { marginBottom: 1 }, pX.default.createElement(M, { color: "error" }, J)),
      pX.default.createElement(s4, {
        value: G,
        onChange: Y,
        onSubmit: z,
        placeholder: "e.g., Help me write unit tests for my code...",
        columns: 80,
        cursorOffset: F,
        onChangeCursorOffset: V,
        focus: !0,
        showCursor: !0,
      }),
    ),
  );
}
var n$ = A1(V1(), 1);
function fR0(A) {
  if (!A) return "Agent type is required";
  if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/.test(A))
    return "Agent type must start and end with alphanumeric characters and contain only letters, numbers, and hyphens";
  if (A.length < 3) return "Agent type must be at least 3 characters long";
  if (A.length > 50) return "Agent type must be less than 50 characters";
  return null;
}
function aOB(A, B, Q) {
  let Z = [],
    G = [];
  if (!A.agentType) Z.push("Agent type is required");
  else {
    let Y = fR0(A.agentType);
    if (Y) Z.push(Y);
    let I = Q.find((W) => W.agentType === A.agentType && W.source !== A.source);
    if (I) Z.push(`Agent type "${A.agentType}" already exists in ${D21(I.source)}`);
  }
  if (!A.whenToUse) Z.push("Description (description) is required");
  else if (A.whenToUse.length < 10) G.push("Description should be more descriptive (at least 10 characters)");
  else if (A.whenToUse.length > 5000) G.push("Description is very long (over 5000 characters)");
  if (!A.tools || !Array.isArray(A.tools)) Z.push("Tools must be an array");
  else {
    if (A.tools.length === 0) G.push("No tools selected - agent will have very limited capabilities");
    let Y = Z21(A.tools, B, A.source || "userSettings");
    if (Y.invalidTools.length > 0) Z.push(`Invalid tools: ${Y.invalidTools.join(", ")}`);
    if (A.tools.includes("*")) G.push("Agent has access to all tools");
  }
  if (!A.systemPrompt) Z.push("System prompt is required");
  else if (A.systemPrompt.length < 20) Z.push("System prompt is too short (minimum 20 characters)");
  else if (A.systemPrompt.length > 1e4) G.push("System prompt is very long (over 10,000 characters)");
  return { isValid: Z.length === 0, errors: Z, warnings: G };
}
function sOB(A) {
  let { goNext: B, goBack: Q, updateWizardData: Z, wizardData: G } = GZ(),
    [Y, I] = n$.useState(G.agentType || ""),
    [W, J] = n$.useState(null),
    [X, F] = n$.useState(Y.length);
  return (
    s0((K, H) => {
      if (H.escape) Q();
    }),
    n$.default.createElement(
      tG,
      { subtitle: "Agent type (identifier)", footerText: "Type to enter text · Enter to continue · Esc to go back" },
      n$.default.createElement(
        y,
        { flexDirection: "column", marginTop: 1 },
        n$.default.createElement(M, null, "Enter a unique identifier for your agent:"),
        n$.default.createElement(
          y,
          { marginTop: 1 },
          n$.default.createElement(s4, {
            value: Y,
            onChange: I,
            onSubmit: (K) => {
              let H = K.trim(),
                z = fR0(H);
              if (z) {
                J(z);
                return;
              }
              (J(null), Z({ agentType: H }), B());
            },
            placeholder: "e.g., code-reviewer, tech-lead, etc",
            columns: 60,
            cursorOffset: X,
            onChangeCursorOffset: F,
            focus: !0,
            showCursor: !0,
          }),
        ),
        W && n$.default.createElement(y, { marginTop: 1 }, n$.default.createElement(M, { color: "error" }, W)),
      ),
    )
  );
}
var pD = A1(V1(), 1);
function rOB() {
  let { goNext: A, goBack: B, updateWizardData: Q, wizardData: Z } = GZ(),
    [G, Y] = pD.useState(Z.systemPrompt || ""),
    [I, W] = pD.useState(G.length),
    [J, X] = pD.useState(null);
  return (
    s0((V, K) => {
      if (K.escape) B();
    }),
    pD.default.createElement(
      tG,
      { subtitle: "System prompt", footerText: "Type to enter text · Enter to continue · Esc to go back" },
      pD.default.createElement(
        y,
        { flexDirection: "column", marginTop: 1 },
        pD.default.createElement(M, null, "Enter the system prompt for your agent:"),
        pD.default.createElement(M, { dimColor: !0 }, "Be comprehensive for best results"),
        pD.default.createElement(
          y,
          { marginTop: 1 },
          pD.default.createElement(s4, {
            value: G,
            onChange: Y,
            onSubmit: () => {
              let V = G.trim();
              if (!V) {
                X("System prompt is required");
                return;
              }
              (X(null), Q({ systemPrompt: V }), A());
            },
            placeholder: "You are a helpful code reviewer who...",
            columns: 80,
            cursorOffset: I,
            onChangeCursorOffset: W,
            focus: !0,
            showCursor: !0,
          }),
        ),
        J && pD.default.createElement(y, { marginTop: 1 }, pD.default.createElement(M, { color: "error" }, J)),
      ),
    )
  );
}
var a$ = A1(V1(), 1);
function oOB() {
  let { goNext: A, goBack: B, updateWizardData: Q, wizardData: Z } = GZ(),
    [G, Y] = a$.useState(Z.whenToUse || ""),
    [I, W] = a$.useState(G.length),
    [J, X] = a$.useState(null);
  return (
    s0((V, K) => {
      if (K.escape) B();
    }),
    a$.default.createElement(
      tG,
      {
        subtitle: "Description (tell Claude when to use this agent)",
        footerText: "Type to enter text · Enter to continue · Esc to go back",
      },
      a$.default.createElement(
        y,
        { flexDirection: "column", marginTop: 1 },
        a$.default.createElement(M, null, "When should Claude use this agent?"),
        a$.default.createElement(
          y,
          { marginTop: 1 },
          a$.default.createElement(s4, {
            value: G,
            onChange: Y,
            onSubmit: (V) => {
              let K = V.trim();
              if (!K) {
                X("Description is required");
                return;
              }
              (X(null), Q({ whenToUse: K }), A());
            },
            placeholder: "e.g., use this agent after you're done writing code...",
            columns: 80,
            cursorOffset: I,
            onChangeCursorOffset: W,
            focus: !0,
            showCursor: !0,
          }),
        ),
        J && a$.default.createElement(y, { marginTop: 1 }, a$.default.createElement(M, { color: "error" }, J)),
      ),
    )
  );
}
var hR0 = A1(V1(), 1);
var _I = A1(V1(), 1);
var tOB = () => ({
  READ_ONLY: {
    name: "Read-only tools",
    toolNames: new Set([
      yE.name,
      RS.name,
      CO.name,
      Q6.name,
      LJ.name,
      FG.name,
      Vu1.name,
      Xu1.name,
      Fu1.name,
      $01.name,
      w01.name,
    ]),
  },
  EDIT: { name: "Edit tools", toolNames: new Set([TY.name, KE.name, mF.name, mO.name]) },
  EXECUTION: { name: "Execution tools", toolNames: new Set([gQ.name, void 0].filter(Boolean)) },
  MCP: { name: "MCP tools", toolNames: new Set(), isMcp: !0 },
  OTHER: { name: "Other tools", toolNames: new Set() },
});
function VV5(A) {
  let B = new Map();
  return (
    A.forEach((Q) => {
      if (M10(Q)) {
        let Z = ek(Q.name);
        if (Z?.serverName) {
          let G = B.get(Z.serverName) || [];
          (G.push(Q), B.set(Z.serverName, G));
        }
      }
    }),
    Array.from(B.entries())
      .map(([Q, Z]) => ({ serverName: Q, tools: Z }))
      .sort((Q, Z) => Q.serverName.localeCompare(Z.serverName))
  );
}
function Cu1({ tools: A, initialTools: B, onComplete: Q, onCancel: Z }) {
  let G = _I.useMemo(() => _OB(A), [A]),
    Y = B.includes("*") ? G.map((S) => S.name) : B,
    [I, W] = _I.useState(Y),
    [J, X] = _I.useState(0),
    [F, V] = _I.useState(!1),
    K = _I.useMemo(() => {
      let S = new Set(G.map((d) => d.name));
      return I.filter((d) => S.has(d));
    }, [I, G]),
    H = new Set(K),
    z = K.length === G.length && G.length > 0,
    D = (S) => {
      if (!S) return;
      W((d) => (d.includes(S) ? d.filter((u) => u !== S) : [...d, S]));
    },
    C = (S, d) => {
      W((u) => {
        if (d) {
          let o = S.filter((m) => !u.includes(m));
          return [...u, ...o];
        } else return u.filter((o) => !S.includes(o));
      });
    },
    w = () => {
      let S = G.map((o) => o.name),
        u = K.length === S.length && S.every((o) => K.includes(o)) ? ["*"] : K;
      Q(u);
    },
    E = _I.useMemo(() => {
      let S = tOB(),
        d = { readOnly: [], edit: [], execution: [], mcp: [], other: [] };
      return (
        G.forEach((u) => {
          if (M10(u)) d.mcp.push(u);
          else if (S.READ_ONLY.toolNames.has(u.name)) d.readOnly.push(u);
          else if (S.EDIT.toolNames.has(u.name)) d.edit.push(u);
          else if (S.EXECUTION.toolNames.has(u.name)) d.execution.push(u);
          else if (u.name !== TASK_TOOL_NAME) d.other.push(u);
        }),
        d
      );
    }, [G]),
    L = (S) => {
      let u = S.filter((o) => H.has(o.name)).length < S.length;
      return () => {
        let o = S.map((m) => m.name);
        C(o, u);
      };
    },
    O = [];
  (O.push({ id: "continue", label: "Continue", action: w, isContinue: !0 }),
    O.push({
      id: "bucket-all",
      label: `${z ? t0.checkboxOn : t0.checkboxOff} All tools`,
      action: () => {
        let S = G.map((d) => d.name);
        C(S, !z);
      },
    }));
  let R = tOB();
  [
    { id: "bucket-readonly", name: R.READ_ONLY.name, tools: E.readOnly },
    { id: "bucket-edit", name: R.EDIT.name, tools: E.edit },
    { id: "bucket-execution", name: R.EXECUTION.name, tools: E.execution },
    { id: "bucket-mcp", name: R.MCP.name, tools: E.mcp },
    { id: "bucket-other", name: R.OTHER.name, tools: E.other },
  ].forEach(({ id: S, name: d, tools: u }) => {
    if (u.length === 0) return;
    let m = u.filter((j) => H.has(j.name)).length === u.length;
    O.push({ id: S, label: `${m ? t0.checkboxOn : t0.checkboxOff} ${d}`, action: L(u) });
  });
  let _ = O.length;
  O.push({
    id: "toggle-individual",
    label: F ? "Hide advanced options" : "Show advanced options",
    action: () => {
      if ((V(!F), F && J > _)) X(_);
    },
    isToggle: !0,
  });
  let b = _I.useMemo(() => VV5(G), [G]);
  if (F) {
    if (b.length > 0)
      (O.push({ id: "mcp-servers-header", label: "MCP Servers:", action: () => {}, isHeader: !0 }),
        b.forEach(({ serverName: S, tools: d }) => {
          let o = d.filter((m) => H.has(m.name)).length === d.length;
          O.push({
            id: `mcp-server-${S}`,
            label: `${o ? t0.checkboxOn : t0.checkboxOff} ${S} (${d.length} tool${d.length === 1 ? "" : "s"})`,
            action: () => {
              let m = d.map((j) => j.name);
              C(m, !o);
            },
          });
        }),
        O.push({ id: "tools-header", label: "Individual Tools:", action: () => {}, isHeader: !0 }));
    G.forEach((S) => {
      let d = S.name;
      if (S.name.startsWith("mcp__")) {
        let u = ek(S.name);
        d = u ? `${u.toolName} (${u.serverName})` : S.name;
      }
      O.push({
        id: `tool-${S.name}`,
        label: `${H.has(S.name) ? t0.checkboxOn : t0.checkboxOff} ${d}`,
        action: () => D(S.name),
      });
    });
  }
  return (
    s0((S, d) => {
      if (d.return) {
        let u = O[J];
        if (u && !u.isHeader) u.action();
      } else if (d.escape)
        if (Z) Z();
        else Q(B);
      else if (d.upArrow) {
        let u = J - 1;
        while (u > 0 && O[u]?.isHeader) u--;
        X(Math.max(0, u));
      } else if (d.downArrow) {
        let u = J + 1;
        while (u < O.length - 1 && O[u]?.isHeader) u++;
        X(Math.min(O.length - 1, u));
      }
    }),
    _I.default.createElement(
      y,
      { flexDirection: "column", marginTop: 1 },
      _I.default.createElement(
        M,
        { color: J === 0 ? "suggestion" : void 0, bold: J === 0 },
        J === 0 ? `${t0.pointer} ` : "  ",
        "[ Continue ]",
      ),
      _I.default.createElement(M, { dimColor: !0 }, "─".repeat(40)),
      O.slice(1).map((S, d) => {
        let u = d + 1 === J,
          o = S.isToggle,
          m = S.isHeader;
        return _I.default.createElement(
          _I.default.Fragment,
          { key: S.id },
          o && _I.default.createElement(M, { dimColor: !0 }, "─".repeat(40)),
          m && d > 0 && _I.default.createElement(y, { marginTop: 1 }),
          _I.default.createElement(
            M,
            { color: m ? void 0 : u ? "suggestion" : void 0, dimColor: m, bold: o && u },
            m ? "" : u ? `${t0.pointer} ` : "  ",
            o ? `[ ${S.label} ]` : S.label,
          ),
        );
      }),
      _I.default.createElement(
        y,
        { marginTop: 1, flexDirection: "column" },
        _I.default.createElement(
          M,
          { dimColor: !0 },
          z ? "All tools selected" : `${H.size} of ${G.length} tools selected`,
        ),
      ),
    )
  );
}
function eOB({ tools: A }) {
  let { goNext: B, goBack: Q, updateWizardData: Z, wizardData: G } = GZ(),
    Y = (W) => {
      (Z({ selectedTools: W }), B());
    },
    I = G.selectedTools || A.map((W) => W.name);
  return hR0.default.createElement(
    tG,
    { subtitle: "Select tools", footerText: "Press Enter to toggle selection · ↑↓ to navigate · Esc to go back" },
    hR0.default.createElement(Cu1, { tools: A, initialTools: I, onComplete: Y, onCancel: Q }),
  );
}
var gR0 = A1(V1(), 1);
var s$ = A1(V1(), 1);
function Uu1({ initialModel: A, onComplete: B, onCancel: Q }) {
  let Z = s$.useMemo(() => BF2(), []),
    G = s$.useMemo(() => {
      if (A && Z.some((Y) => Y.value === A)) return A;
      return "sonnet";
    }, [A, Z]);
  return s$.createElement(
    y,
    { flexDirection: "column" },
    s$.createElement(
      y,
      { marginBottom: 1 },
      s$.createElement(M, { dimColor: !0 }, "Model determines the agent's reasoning capabilities and speed."),
    ),
    s$.createElement(xA, {
      options: Z,
      defaultValue: G,
      onChange: (Y) => {
        B(Y);
      },
      onCancel: () => (Q ? Q() : B(A)),
    }),
  );
}
function ARB() {
  let { goNext: A, goBack: B, updateWizardData: Q, wizardData: Z } = GZ(),
    G = (Y) => {
      (Q({ selectedModel: Y }), A());
    };
  return gR0.default.createElement(
    tG,
    { subtitle: "Select model", footerText: "Press ↑↓ to navigate · Enter to select · Esc to go back" },
    gR0.default.createElement(Uu1, { initialModel: Z.selectedModel, onComplete: G, onCancel: B }),
  );
}
var wu1 = A1(V1(), 1);
var FK = A1(V1(), 1);
var C21 = ["automatic", ...Eb];
function $u1({ agentName: A, currentColor: B = "automatic", onConfirm: Q }) {
  let [Z, G] = FK.useState(
    Math.max(
      0,
      C21.findIndex((I) => I === B),
    ),
  );
  s0((I, W) => {
    if (W.upArrow) G((J) => (J > 0 ? J - 1 : C21.length - 1));
    else if (W.downArrow) G((J) => (J < C21.length - 1 ? J + 1 : 0));
    else if (W.return) {
      let J = C21[Z];
      Q(J === "automatic" ? void 0 : J);
    }
  });
  let Y = C21[Z];
  return FK.default.createElement(
    y,
    { flexDirection: "column", gap: 1 },
    FK.default.createElement(
      y,
      { flexDirection: "column" },
      C21.map((I, W) => {
        let J = W === Z;
        return FK.default.createElement(
          y,
          { key: I, flexDirection: "row", gap: 1 },
          FK.default.createElement(M, { color: J ? "suggestion" : void 0 }, J ? t0.pointer : " "),
          I === "automatic"
            ? FK.default.createElement(M, { bold: J }, "Automatic color")
            : FK.default.createElement(
                y,
                { gap: 1 },
                FK.default.createElement(M, { backgroundColor: CI1[I], color: "inverseText" }, " "),
                FK.default.createElement(M, { bold: J }, I.charAt(0).toUpperCase() + I.slice(1)),
              ),
        );
      }),
    ),
    FK.default.createElement(
      y,
      { marginTop: 1 },
      FK.default.createElement(M, null, "Preview: "),
      Y === void 0 || Y === "automatic"
        ? FK.default.createElement(M, { inverse: !0, bold: !0 }, " ", A, " ")
        : FK.default.createElement(M, { backgroundColor: CI1[Y], color: "inverseText", bold: !0 }, " ", A, " "),
    ),
  );
}
function BRB() {
  let { goNext: A, goBack: B, updateWizardData: Q, wizardData: Z } = GZ();
  s0((Y, I) => {
    if (I.escape) B();
  });
  let G = (Y) => {
    (Q({
      selectedColor: Y,
      finalAgent: {
        agentType: Z.agentType,
        whenToUse: Z.whenToUse,
        systemPrompt: Z.systemPrompt,
        tools: Z.selectedTools || [],
        ...(Z.selectedModel ? { model: Z.selectedModel } : {}),
        ...(Y ? { color: Y } : {}),
        source: Z.location,
      },
    }),
      A());
  };
  return wu1.default.createElement(
    tG,
    { subtitle: "Choose background color", footerText: "Press ↑↓ to navigate · Enter to select · Esc to go back" },
    wu1.default.createElement(
      y,
      { marginTop: 1 },
      wu1.default.createElement($u1, { agentName: Z.agentType || "agent", currentColor: "automatic", onConfirm: G }),
    ),
  );
}
var sc = A1(V1(), 1);
var U5 = A1(V1(), 1);
function QRB({ tools: A, existingAgents: B, onSave: Q, onSaveAndEdit: Z, error: G }) {
  let { goBack: Y, wizardData: I } = GZ();
  s0((F, V) => {
    if (V.escape) Y();
    else if (F === "s" || V.return) Q();
    else if (F === "e") Z();
  });
  let W = I.finalAgent,
    J = aOB(W, A, B),
    X = (F) => {
      if (!F || F.length === 0) return "None";
      if (F.length === 1) return F[0] || "None";
      if (F.length === 2) return F.join(" and ");
      return `${F.slice(0, -1).join(", ")}, and ${F[F.length - 1]}`;
    };
  return U5.default.createElement(
    tG,
    { subtitle: "Confirm and save", footerText: "Press s/Enter to save · e to edit in your editor · Esc to cancel" },
    U5.default.createElement(
      y,
      { flexDirection: "column", marginTop: 1 },
      U5.default.createElement(M, null, U5.default.createElement(M, { bold: !0 }, "Name"), ": ", W.agentType),
      U5.default.createElement(
        M,
        null,
        U5.default.createElement(M, { bold: !0 }, "Location"),
        ":",
        " ",
        hOB({ source: I.location, agentType: W.agentType }),
      ),
      U5.default.createElement(M, null, U5.default.createElement(M, { bold: !0 }, "Tools"), ": ", X(W.tools)),
      U5.default.createElement(M, null, U5.default.createElement(M, { bold: !0 }, "Model"), ": ", kR1(W.model)),
      U5.default.createElement(
        y,
        { marginTop: 1 },
        U5.default.createElement(
          M,
          null,
          U5.default.createElement(M, { bold: !0 }, "Description"),
          " (tells Claude when to use this agent):",
        ),
      ),
      U5.default.createElement(
        y,
        { marginLeft: 2, marginTop: 1 },
        U5.default.createElement(M, null, W.whenToUse.length > 240 ? W.whenToUse.slice(0, 240) + "…" : W.whenToUse),
      ),
      U5.default.createElement(
        y,
        { marginTop: 1 },
        U5.default.createElement(M, null, U5.default.createElement(M, { bold: !0 }, "System prompt"), ":"),
      ),
      U5.default.createElement(
        y,
        { marginLeft: 2, marginTop: 1 },
        U5.default.createElement(
          M,
          null,
          W.systemPrompt.length > 240 ? W.systemPrompt.slice(0, 240) + "…" : W.systemPrompt,
        ),
      ),
      J.warnings.length > 0 &&
        U5.default.createElement(
          y,
          { marginTop: 1, flexDirection: "column" },
          U5.default.createElement(M, { color: "warning" }, "Warnings:"),
          J.warnings.map((F, V) => U5.default.createElement(M, { key: V, dimColor: !0 }, " ", "• ", F)),
        ),
      J.errors.length > 0 &&
        U5.default.createElement(
          y,
          { marginTop: 1, flexDirection: "column" },
          U5.default.createElement(M, { color: "error" }, "Errors:"),
          J.errors.map((F, V) => U5.default.createElement(M, { key: V, color: "error" }, " ", "• ", F)),
        ),
      G && U5.default.createElement(y, { marginTop: 1 }, U5.default.createElement(M, { color: "error" }, G)),
      U5.default.createElement(
        y,
        { marginTop: 2 },
        U5.default.createElement(
          M,
          { color: "success" },
          "Press ",
          U5.default.createElement(M, { bold: !0 }, "s"),
          " or ",
          U5.default.createElement(M, { bold: !0 }, "Enter"),
          " to save,",
          " ",
          U5.default.createElement(M, { bold: !0 }, "e"),
          " to save and edit",
        ),
      ),
    ),
  );
}
function ZRB({ tools: A, existingAgents: B, onComplete: Q }) {
  let { wizardData: Z } = GZ(),
    [G, Y] = sc.useState(null),
    I = sc.useCallback(async () => {
      if (!Z?.finalAgent) return;
      try {
        (await kR0(
          Z.location,
          Z.finalAgent.agentType,
          Z.finalAgent.whenToUse,
          Z.finalAgent.tools,
          Z.finalAgent.systemPrompt,
          !0,
          Z.finalAgent.color,
          Z.finalAgent.model,
        ),
          Bc(),
          Y1("tengu_agent_created", {
            agent_type: Z.finalAgent.agentType,
            generation_method: Z.wasGenerated ? "generated" : "manual",
            source: Z.location,
            tool_count: Z.finalAgent.tools.length,
            has_custom_model: !!Z.finalAgent.model,
            has_custom_color: !!Z.finalAgent.color,
          }),
          Q(`Created agent: ${n1.bold(Z.finalAgent.agentType)}`));
      } catch (J) {
        Y(J instanceof Error ? J.message : "Failed to save agent");
      }
    }, [Z, Q]),
    W = sc.useCallback(async () => {
      if (!Z?.finalAgent) return;
      try {
        (await kR0(
          Z.location,
          Z.finalAgent.agentType,
          Z.finalAgent.whenToUse,
          Z.finalAgent.tools,
          Z.finalAgent.systemPrompt,
          !0,
          Z.finalAgent.color,
          Z.finalAgent.model,
        ),
          Bc());
        let J = yR0({ source: Z.location, agentType: Z.finalAgent.agentType });
        (await zA1(J),
          Y1("tengu_agent_created", {
            agent_type: Z.finalAgent.agentType,
            generation_method: Z.wasGenerated ? "generated" : "manual",
            source: Z.location,
            tool_count: Z.finalAgent.tools.length,
            has_custom_model: !!Z.finalAgent.model,
            has_custom_color: !!Z.finalAgent.color,
            opened_in_editor: !0,
          }),
          Q(
            `Created agent: ${n1.bold(Z.finalAgent.agentType)} and opened in editor. If you made edits, restart to load the latest version.`,
          ));
      } catch (J) {
        Y(J instanceof Error ? J.message : "Failed to save agent");
      }
    }, [Z, Q]);
  return sc.default.createElement(QRB, { tools: A, existingAgents: B, onSave: I, onSaveAndEdit: W, error: G });
}
function GRB({ tools: A, existingAgents: B, onComplete: Q, onCancel: Z }) {
  return UJ1.default.createElement(xR0, {
    steps: [
      lOB,
      pOB,
      nOB,
      () => UJ1.default.createElement(sOB, { existingAgents: B }),
      rOB,
      oOB,
      () => UJ1.default.createElement(eOB, { tools: A }),
      ARB,
      BRB,
      () => UJ1.default.createElement(ZRB, { tools: A, existingAgents: B, onComplete: Q }),
    ],
    initialData: {},
    onComplete: () => {},
    onCancel: Z,
    title: "Create new agent",
    showStepCounter: !1,
  });
}
var qW = A1(V1(), 1),
  r$ = A1(V1(), 1);
function YRB({ agent: A, tools: B, onSaved: Q, onBack: Z }) {
  let [G, Y] = r$.useState("menu"),
    [I, W] = r$.useState(0),
    [J, X] = r$.useState(null),
    [F, V] = r$.useState(A.color),
    K = r$.useCallback(async () => {
      try {
        let E = Hu1(A);
        (await zA1(E), Q(`Opened ${A.agentType} in editor. If you made edits, restart to load the latest version.`));
      } catch (E) {
        X(E instanceof Error ? E.message : "Failed to open editor");
      }
    }, [A, Q]),
    H = r$.useCallback(
      async (E = {}) => {
        let { tools: L, color: O, model: R } = E,
          P = O ?? F,
          _ = L !== void 0,
          b = R !== void 0,
          S = P !== A.color;
        if (!_ && !b && !S) return !1;
        try {
          if ((await uOB(A, A.whenToUse, L ?? A.tools, A.systemPrompt, P, R ?? A.model), S && P)) c01(A.agentType, P);
          return (Bc(), Q(`Updated agent: ${n1.bold(A.agentType)}`), !0);
        } catch (d) {
          return (X(d instanceof Error ? d.message : "Failed to save agent"), !1);
        }
      },
      [A, F, Q],
    ),
    z = r$.useMemo(
      () => [
        { label: "Open in editor", action: K },
        { label: "Edit tools", action: () => Y("edit-tools") },
        { label: "Edit model", action: () => Y("edit-model") },
        { label: "Edit color", action: () => Y("edit-color") },
      ],
      [K],
    ),
    D = r$.useCallback(() => {
      if ((X(null), G === "menu")) Z();
      else Y("menu");
    }, [G, Z]),
    C = r$.useCallback(
      (E) => {
        if (E.upArrow) W((L) => Math.max(0, L - 1));
        else if (E.downArrow) W((L) => Math.min(z.length - 1, L + 1));
        else if (E.return) {
          let L = z[I];
          if (L) L.action();
        }
      },
      [z, I],
    );
  s0((E, L) => {
    if (L.escape) {
      D();
      return;
    }
    if (G === "menu") C(L);
  });
  let w = () =>
    qW.createElement(
      y,
      { flexDirection: "column" },
      qW.createElement(M, { dimColor: !0 }, "Source: ", D21(A.source)),
      qW.createElement(
        y,
        { marginTop: 1, flexDirection: "column" },
        z.map((E, L) =>
          qW.createElement(
            M,
            { key: E.label, color: L === I ? "suggestion" : void 0 },
            L === I ? `${t0.pointer} ` : "  ",
            E.label,
          ),
        ),
      ),
      J && qW.createElement(y, { marginTop: 1 }, qW.createElement(M, { color: "error" }, J)),
    );
  switch (G) {
    case "menu":
      return w();
    case "edit-tools":
      return qW.createElement(Cu1, {
        tools: B,
        initialTools: A.tools,
        onComplete: async (E) => {
          (Y("menu"), await H({ tools: E }));
        },
      });
    case "edit-color":
      return qW.createElement($u1, {
        agentName: A.agentType,
        currentColor: F || A.color || "automatic",
        onConfirm: async (E) => {
          (V(E), Y("menu"), await H({ color: E }));
        },
      });
    case "edit-model":
      return qW.createElement(Uu1, {
        initialModel: A.model,
        onComplete: async (E) => {
          (Y("menu"), await H({ model: E }));
        },
      });
    default:
      return null;
  }
}
var vQ = A1(V1(), 1);
function IRB({ agent: A, tools: B, onBack: Q }) {
  let [Z] = sB(),
    G = Z21(A.tools, B, A.source),
    Y = gOB(A),
    I = d01(A.agentType);
  s0((J, X) => {
    if (X.escape || X.return) Q();
  });
  function W() {
    if (G.hasWildcard) return vQ.createElement(M, null, "All tools");
    if (A.tools.length === 0) return vQ.createElement(M, null, "None");
    return vQ.createElement(
      vQ.Fragment,
      null,
      G.validTools.length > 0 && vQ.createElement(M, null, G.validTools.join(", ")),
      G.invalidTools.length > 0 &&
        vQ.createElement(M, { color: "warning" }, t0.warning, " Unrecognized:", " ", G.invalidTools.join(", ")),
    );
  }
  return vQ.createElement(
    y,
    { flexDirection: "column", gap: 1 },
    vQ.createElement(M, { dimColor: !0 }, Y),
    vQ.createElement(
      y,
      { flexDirection: "column" },
      vQ.createElement(
        M,
        null,
        vQ.createElement(M, { bold: !0 }, "Description"),
        " (tells Claude when to use this agent):",
      ),
      vQ.createElement(y, { marginLeft: 2 }, vQ.createElement(M, null, A.whenToUse)),
    ),
    vQ.createElement(y, null, vQ.createElement(M, null, vQ.createElement(M, { bold: !0 }, "Tools"), ":", " "), W()),
    vQ.createElement(M, null, vQ.createElement(M, { bold: !0 }, "Model"), ": ", kR1(A.model)),
    I &&
      vQ.createElement(
        y,
        null,
        vQ.createElement(
          M,
          null,
          vQ.createElement(M, { bold: !0 }, "Color"),
          ":",
          " ",
          vQ.createElement(M, { backgroundColor: I, color: "inverseText" }, " ", A.agentType, " "),
        ),
      ),
    vQ.createElement(y, null, vQ.createElement(M, null, vQ.createElement(M, { bold: !0 }, "System prompt"), ":")),
    vQ.createElement(y, { marginLeft: 2, marginRight: 2 }, vQ.createElement(M, null, PX(A.systemPrompt, Z))),
  );
}
var $J1 = A1(V1(), 1);
function U21({ instructions: A = "Press ↑↓ to navigate · Enter to select · Esc to go back" }) {
  let B = Z2();
  return $J1.createElement(
    y,
    { marginLeft: 3 },
    $J1.createElement(M, { dimColor: !0 }, B.pending ? `Press ${B.keyName} again to exit` : A),
  );
}
function WRB({ tools: A, onExit: B, initialAgents: Q, initialAllAgents: Z }) {
  let [G, Y] = iD.useState({ mode: "list-agents", source: "all" }),
    [I, W] = iD.useState(Q),
    [J, X] = iD.useState(Z),
    [F, V] = iD.useState([]),
    [K, H] = iD.useState(0),
    z = Q.length > 0 || Z.length > 0,
    [D] = dB(),
    C = eg1(A, D.mcp.tools);
  (Z2(),
    iD.useEffect(() => {
      if (z && K === 0) return;
      async function O() {
        try {
          let R = await y$();
          (W(R.activeAgents), X(R.allAgents));
        } catch (R) {
          U1(R instanceof Error ? R : new Error("Failed to load agents"), L3A);
        }
      }
      O();
    }, [K, z]));
  let w = iD.useMemo(
    () => ({
      "built-in": J.filter((O) => O.source === "built-in"),
      userSettings: J.filter((O) => O.source === "userSettings"),
      projectSettings: J.filter((O) => O.source === "projectSettings"),
      policySettings: J.filter((O) => O.source === "policySettings"),
      localSettings: J.filter((O) => O.source === "localSettings"),
      flagSettings: J.filter((O) => O.source === "flagSettings"),
      plugin: J.filter((O) => O.source === "plugin"),
      all: J,
    }),
    [J],
  );
  s0((O, R) => {
    if (!R.escape) return;
    let P =
      F.length > 0
        ? `Agent changes:
${F.join(`
`)}`
        : void 0;
    switch (G.mode) {
      case "list-agents":
        B(P);
        break;
      case "create-agent":
        return;
      case "view-agent":
        return;
      default:
        if ("previousMode" in G) Y(G.previousMode);
    }
  });
  let E = iD.useCallback((O) => {
      (V((R) => [...R, O]), H((R) => R + 1), Y({ mode: "list-agents", source: "all" }));
    }, []),
    L = iD.useCallback(async (O) => {
      try {
        (await mOB(O),
          Bc(),
          V((R) => [...R, `Deleted agent: ${n1.bold(O.agentType)}`]),
          H((R) => R + 1),
          Y({ mode: "list-agents", source: "all" }));
      } catch (R) {
        U1(R instanceof Error ? R : new Error("Failed to delete agent"), N3A);
      }
    }, []);
  switch (G.mode) {
    case "list-agents": {
      let O =
          G.source === "all"
            ? [...w["built-in"], ...w.userSettings, ...w.projectSettings, ...w.policySettings, ...w.plugin]
            : w[G.source],
        R = new Map();
      I.forEach((_) => R.set(_.agentType, _));
      let P = O.map((_) => {
        let b = R.get(_.agentType),
          S = b && b.source !== _.source ? b.source : void 0;
        return { ..._, overriddenBy: S };
      });
      return UB.createElement(
        UB.Fragment,
        null,
        UB.createElement(dOB, {
          source: G.source,
          agents: P,
          onBack: () => {
            let _ =
              F.length > 0
                ? `Agent changes:
${F.join(`
`)}`
                : void 0;
            B(_);
          },
          onSelect: (_) => Y({ mode: "agent-menu", agent: _, previousMode: G }),
          onCreateNew: () => Y({ mode: "create-agent" }),
          changes: F,
        }),
        UB.createElement(U21, null),
      );
    }
    case "create-agent":
      return UB.createElement(GRB, {
        tools: C,
        existingAgents: I,
        onComplete: E,
        onCancel: () => Y({ mode: "list-agents", source: "all" }),
      });
    case "agent-menu": {
      let R = J.find((S) => S.agentType === G.agent.agentType && S.source === G.agent.source) || G.agent,
        P = R.source === "built-in",
        _ = [
          { label: "View agent", value: "view" },
          ...(!P
            ? [
                { label: "Edit agent", value: "edit" },
                { label: "Delete agent", value: "delete" },
              ]
            : []),
          { label: "Back", value: "back" },
        ],
        b = (S) => {
          switch (S) {
            case "view":
              Y({ mode: "view-agent", agent: R, previousMode: G.previousMode });
              break;
            case "edit":
              Y({ mode: "edit-agent", agent: R, previousMode: G });
              break;
            case "delete":
              Y({ mode: "delete-confirm", agent: R, previousMode: G });
              break;
            case "back":
              Y(G.previousMode);
              break;
          }
        };
      return UB.createElement(
        UB.Fragment,
        null,
        UB.createElement(
          Wf,
          { title: G.agent.agentType },
          UB.createElement(
            y,
            { flexDirection: "column", marginTop: 1 },
            UB.createElement(xA, { options: _, onChange: b, onCancel: () => Y(G.previousMode) }),
            F.length > 0 &&
              UB.createElement(y, { marginTop: 1 }, UB.createElement(M, { dimColor: !0 }, F[F.length - 1])),
          ),
        ),
        UB.createElement(U21, null),
      );
    }
    case "view-agent": {
      let R = J.find((P) => P.agentType === G.agent.agentType && P.source === G.agent.source) || G.agent;
      return UB.createElement(
        UB.Fragment,
        null,
        UB.createElement(
          Wf,
          { title: R.agentType },
          UB.createElement(IRB, {
            agent: R,
            tools: C,
            allAgents: J,
            onBack: () => Y({ mode: "agent-menu", agent: R, previousMode: G.previousMode }),
          }),
        ),
        UB.createElement(U21, { instructions: "Press Enter or Esc to go back" }),
      );
    }
    case "delete-confirm": {
      let O = [
        { label: "Yes, delete", value: "yes" },
        { label: "No, cancel", value: "no" },
      ];
      return UB.createElement(
        UB.Fragment,
        null,
        UB.createElement(
          Wf,
          { title: "Delete agent", titleColor: "error", borderColor: "error" },
          UB.createElement(
            M,
            null,
            "Are you sure you want to delete the agent",
            " ",
            UB.createElement(M, { bold: !0 }, G.agent.agentType),
            "?",
          ),
          UB.createElement(y, { marginTop: 1 }, UB.createElement(M, { dimColor: !0 }, "Source: ", G.agent.source)),
          UB.createElement(
            y,
            { marginTop: 1 },
            UB.createElement(xA, {
              options: O,
              onChange: (R) => {
                if (R === "yes") L(G.agent);
                else if ("previousMode" in G) Y(G.previousMode);
              },
              onCancel: () => {
                if ("previousMode" in G) Y(G.previousMode);
              },
            }),
          ),
        ),
        UB.createElement(U21, { instructions: "Press ↑↓ to navigate, Enter to select, Esc to cancel" }),
      );
    }
    case "edit-agent": {
      let R = J.find((P) => P.agentType === G.agent.agentType && P.source === G.agent.source) || G.agent;
      return UB.createElement(
        UB.Fragment,
        null,
        UB.createElement(
          Wf,
          { title: `Edit agent: ${R.agentType}` },
          UB.createElement(YRB, {
            agent: R,
            tools: C,
            onSaved: (P) => {
              (E(P), Y(G.previousMode));
            },
            onBack: () => Y(G.previousMode),
          }),
        ),
        UB.createElement(U21, null),
      );
    }
    default:
      return null;
  }
}
var KV5 = {
    type: "local-jsx",
    name: "agents",
    description: "Manage agent configurations",
    isEnabled: () => !0,
    isHidden: !1,
    async call(A, B) {
      let Z = (await B.getAppState()).toolPermissionContext,
        G = vE(Z, !0),
        Y = await y$();
      return uR0.createElement(WRB, {
        tools: G,
        onExit: A,
        initialAgents: Y.activeAgents,
        initialAllAgents: Y.allAgents,
      });
    },
    userFacingName() {
      return "agents";
    },
  },
  JRB = KV5;
var wV5 = A1(V1(), 1);
var $V5 = A1(V1(), 1),
  mR0 = A1(V1(), 1);
var XRB = A1(V1(), 1);
var DV5 = A1(V1(), 1);
var CV5 = A1(V1(), 1);
var VRB = A1(V1(), 1);
var UV5 = A1(V1(), 1);
var KRB = A1(V1(), 1);
var qu1 = A1(V1(), 1);
var qV5 = A1(V1(), 1);
var EV5 = A1(V1(), 1);
import { dirname as wJ1, basename as Eu1, sep as NV5 } from "path";
function dR0(A) {
  return /^skill\.md$/i.test(Eu1(A));
}
function LV5(A) {
  let B = new Map();
  for (let Z of A) {
    let G = wJ1(Z.filePath),
      Y = B.get(G) ?? [];
    (Y.push(Z), B.set(G, Y));
  }
  let Q = [];
  for (let [Z, G] of B) {
    let Y = G.filter((I) => dR0(I.filePath));
    if (Y.length > 0) {
      let I = Y[0];
      if (Y.length > 1) F1(`Multiple skill files found in ${Z}, using ${Eu1(I.filePath)}`);
      Q.push(I);
    } else Q.push(...G);
  }
  return Q;
}
function HRB(A, B) {
  let Q = B.endsWith("/") ? B.slice(0, -1) : B;
  if (A === Q) return "";
  let Z = A.slice(Q.length + 1);
  return Z ? Z.split(NV5).join(":") : "";
}
function MV5(A, B) {
  let Q = wJ1(A),
    Z = wJ1(Q),
    G = Eu1(Q),
    Y = HRB(Z, B);
  return Y ? `${Y}:${G}` : G;
}
function OV5(A, B) {
  let Q = Eu1(A),
    Z = wJ1(A),
    G = Q.replace(/\.md$/, ""),
    Y = HRB(Z, B);
  return Y ? `${Y}:${G}` : G;
}
function RV5(A) {
  return dR0(A.filePath) ? MV5(A.filePath, A.baseDir) : OV5(A.filePath, A.baseDir);
}
var zRB = YA(async () => {
  try {
    let A = await OL("commands");
    return LV5(A)
      .map(({ baseDir: Z, filePath: G, frontmatter: Y, content: I, source: W }) => {
        try {
          let J = Y.description ?? qs(I, "Custom command"),
            X = Es(Y["allowed-tools"]),
            F = Y["argument-hint"],
            V = Y.when_to_use,
            K = Y.version,
            H = Y.model === "inherit" ? void 0 : Y.model,
            z = dR0(G),
            D = z ? wJ1(G) : void 0,
            C = RV5({ baseDir: Z, filePath: G, frontmatter: Y, content: I, source: W }),
            w = `${J} (${nC1(W)})`;
          return {
            type: "prompt",
            name: C,
            description: w,
            allowedTools: X,
            argumentHint: F,
            whenToUse: V,
            version: K,
            model: H,
            isSkill: z,
            isEnabled: () => !0,
            isHidden: !1,
            progressMessage: "running",
            userFacingName() {
              return C;
            },
            source: W,
            async getPromptForCommand(E, L) {
              let O = I;
              if (z && D)
                O = `Base directory for this skill: ${D}

${O}`;
              if (E)
                if (O.includes("$ARGUMENTS")) O = O.replace("$ARGUMENTS", E);
                else
                  O =
                    O +
                    `

ARGUMENTS: ${E}`;
              return (
                (O = await gA1(
                  O,
                  {
                    ...L,
                    async getAppState() {
                      let R = await L.getAppState();
                      return {
                        ...R,
                        toolPermissionContext: {
                          ...R.toolPermissionContext,
                          alwaysAllowRules: { ...R.toolPermissionContext.alwaysAllowRules, command: X },
                        },
                      };
                    },
                  },
                  `/${C}`,
                )),
                [{ type: "text", text: O }]
              );
            },
          };
        } catch (J) {
          return (U1(J instanceof Error ? J : new Error(String(J)), i7A), null);
        }
      })
      .filter((Z) => Z !== null);
  } catch (A) {
    return (U1(A instanceof Error ? A : new Error(String(A)), n7A), []);
  }
});
var qJ1 = A1(V1(), 1);
var t7 = A1(V1(), 1);
import { join as PV5 } from "path";
import { execSync as TV5 } from "child_process";
function DRB(A) {
  let B = HB(),
    Z = {
      macos: ["pbcopy"],
      linux: ["xclip -selection clipboard", "wl-copy"],
      wsl: ["clip.exe"],
      windows: ["clip"],
      unknown: ["xclip -selection clipboard", "wl-copy"],
    }[B];
  for (let G of Z)
    try {
      return (TV5(G, { input: A, encoding: "utf-8" }), !0);
    } catch (Y) {
      U1(new Error(`Failed to execute clipboard command "${G}": ${Y}`), DZA);
      continue;
    }
  return (U1(new Error(`Failed to copy to clipboard on ${B}`), CZA), !1);
}
function CRB() {
  let A = HB();
  return {
    macos: "Failed to copy to clipboard. Make sure the `pbcopy` command is available on your system and try again.",
    windows: "Failed to copy to clipboard. Make sure the `clip` command is available on your system and try again.",
    wsl: "Failed to copy to clipboard. Make sure the `clip.exe` command is available in your WSL environment and try again.",
    linux: "Failed to copy to clipboard. Make sure `xclip` or `wl-copy` is installed on your system and try again.",
    unknown: "Failed to copy to clipboard. Make sure `xclip` or `wl-copy` is installed on your system and try again.",
  }[A];
}
function URB({ content: A, defaultFilename: B, onDone: Q }) {
  let [, Z] = t7.useState(null),
    [G, Y] = t7.useState(B),
    [I, W] = t7.useState(B.length),
    [J, X] = t7.useState(!1),
    F = Z2();
  return (
    s0((z, D) => {
      if (D.escape)
        if (J) (X(!1), Z(null));
        else Q({ success: !1, message: "Export cancelled" });
    }),
    t7.default.createElement(
      y,
      { width: "100%", flexDirection: "column" },
      t7.default.createElement(
        y,
        { borderStyle: "round", borderColor: "permission", flexDirection: "column", padding: 1, width: "100%" },
        t7.default.createElement(
          y,
          null,
          t7.default.createElement(M, { color: "permission", bold: !0 }, "Export Conversation"),
        ),
        !J
          ? t7.default.createElement(
              t7.default.Fragment,
              null,
              t7.default.createElement(
                y,
                { marginTop: 1 },
                t7.default.createElement(M, { dimColor: !0 }, "Select export method:"),
              ),
              t7.default.createElement(
                y,
                { flexDirection: "column", marginTop: 1 },
                t7.default.createElement(xA, {
                  options: [
                    {
                      label: "Copy to clipboard",
                      value: "clipboard",
                      description: "Copy the conversation to your system clipboard",
                    },
                    {
                      label: "Save to file",
                      value: "file",
                      description: "Save the conversation to a file in the current directory",
                    },
                  ],
                  onChange: (z) => {
                    if (z === "clipboard")
                      if (DRB(A)) Q({ success: !0, message: "Conversation copied to clipboard" });
                      else Q({ success: !1, message: CRB() });
                    else if (z === "file") (Z("file"), X(!0));
                  },
                  onCancel: () => Q({ success: !1, message: "Export cancelled" }),
                }),
              ),
            )
          : t7.default.createElement(
              y,
              { flexDirection: "column", marginTop: 1 },
              t7.default.createElement(M, null, "Enter filename:"),
              t7.default.createElement(
                y,
                { flexDirection: "row", gap: 1, marginTop: 1 },
                t7.default.createElement(M, null, ">"),
                t7.default.createElement(s4, {
                  value: G,
                  onChange: Y,
                  onSubmit: () => {
                    let z = G.endsWith(".txt") ? G : G.replace(/\.[^.]+$/, "") + ".txt",
                      D = PV5(AA(), z);
                    try {
                      (w1().writeFileSync(D, A, { encoding: "utf-8", flush: !0 }),
                        Q({ success: !0, message: `Conversation exported to: ${z}` }));
                    } catch (C) {
                      Q({
                        success: !1,
                        message: `Failed to export conversation: ${C instanceof Error ? C.message : "Unknown error"}`,
                      });
                    }
                  },
                  focus: !0,
                  showCursor: !0,
                  columns: process.stdout.columns || 80,
                  cursorOffset: I,
                  onChangeCursorOffset: W,
                }),
              ),
            ),
      ),
      t7.default.createElement(
        y,
        { marginLeft: 2 },
        J
          ? t7.default.createElement(M, { dimColor: !0 }, "Enter to save · Esc to go back")
          : t7.default.createElement(
              t7.default.Fragment,
              null,
              F.pending
                ? t7.default.createElement(M, { dimColor: !0 }, "Press ", F.keyName, " again to exit")
                : t7.default.createElement(M, { dimColor: !0 }, "Esc to cancel"),
            ),
      ),
    )
  );
}
function jV5(A) {
  let B = A.getFullYear(),
    Q = String(A.getMonth() + 1).padStart(2, "0"),
    Z = String(A.getDate()).padStart(2, "0"),
    G = String(A.getHours()).padStart(2, "0"),
    Y = String(A.getMinutes()).padStart(2, "0"),
    I = String(A.getSeconds()).padStart(2, "0");
  return `${B}-${Q}-${Z}-${G}${Y}${I}`;
}
function SV5(A) {
  let B = A.find((G) => G.type === "user");
  if (!B || B.type !== "user") return "";
  let Q = B.message?.content,
    Z = "";
  if (typeof Q === "string") Z = Q.trim();
  else if (Array.isArray(Q)) {
    let G = Q.find((Y) => Y.type === "text");
    if (G && "text" in G) Z = G.text.trim();
  }
  if (
    ((Z =
      Z.split(`
`)[0] || ""),
    Z.length > 50)
  )
    Z = Z.substring(0, 50) + "...";
  return Z;
}
function yV5(A) {
  return A.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
async function kV5(A) {
  let B = A.options.tools || [],
    Z = await Ic(
      qJ1.default.createElement(
        () =>
          qJ1.default.createElement(
            M7,
            null,
            qJ1.default.createElement(zJ1, {
              messages: A.messages,
              normalizedMessageHistory: [],
              tools: B,
              verbose: !1,
              toolJSX: null,
              toolUseConfirmQueue: [],
              inProgressToolUseIDs: new Set(),
              isMessageSelectorVisible: !1,
              conversationId: "export",
              screen: "prompt",
              screenToggleId: 0,
              streamingToolUses: [],
              showAllInTranscript: !0,
            }),
          ),
        null,
      ),
    );
  return eI(Z);
}
var _V5 = {
    type: "local-jsx",
    name: "export",
    description: "Export the current conversation to a file or clipboard",
    isEnabled: () => !0,
    isHidden: !1,
    argumentHint: "[filename]",
    async call(A, B, Q) {
      let Z;
      if (!Q.trim()) {
        let Y = SV5(B.messages),
          I = jV5(new Date());
        if (Y) {
          let W = yV5(Y);
          Z = W ? `${I.substring(0, 10)}-${W}.txt` : `conversation-${I}.txt`;
        } else Z = `conversation-${I}.txt`;
      } else Z = Q.trim();
      let G = await kV5(B);
      return qJ1.default.createElement(URB, {
        content: G,
        defaultFilename: Z,
        onDone: (Y) => {
          A(Y.message);
        },
      });
    },
    userFacingName() {
      return "export";
    },
  },
  $RB = _V5;
var fE = A1(V1(), 1);
var wRB = new Map();
async function qRB(A) {
  let B = A.trim();
  if (!B) return { valid: !1, error: "Model name cannot be empty" };
  let Q = B.toLowerCase();
  if (Yt.includes(Q)) return { valid: !0 };
  if (wRB.has(B)) return { valid: !0 };
  try {
    let Z = NH(B);
    return (
      await (
        await fF({ model: B, isNonInteractiveSession: !1, maxRetries: 0 })
      ).beta.messages.create({
        model: jx(B),
        max_tokens: 1,
        messages: [{ role: "user", content: "Hi" }],
        system: [{ type: "text", text: getSystemPromptHeader() }],
        temperature: 0,
        metadata: gj(),
        ...(Z.length > 0 ? { betas: Z } : {}),
      }),
      wRB.set(B, !0),
      { valid: !0 }
    );
  } catch (Z) {
    return xV5(Z, B);
  }
}
function xV5(A, B) {
  if (A instanceof qu) return { valid: !1, error: `Model '${B}' not found` };
  if (A instanceof n9) {
    if (A instanceof wu) return { valid: !1, error: "Authentication failed. Please check your API credentials." };
    if (A instanceof cz) return { valid: !1, error: "Network error. Please check your internet connection." };
    let Z = A.error;
    if (
      Z &&
      typeof Z === "object" &&
      "type" in Z &&
      Z.type === "not_found_error" &&
      "message" in Z &&
      typeof Z.message === "string" &&
      Z.message.includes("model:")
    )
      return { valid: !1, error: `Model '${B}' not found` };
    return { valid: !1, error: `API error: ${A.message}` };
  }
  return { valid: !1, error: `Unable to validate model: ${A instanceof Error ? A.message : String(A)}` };
}
var Nu1 = ["help", "-h", "--help"],
  Lu1 = [
    "list",
    "show",
    "display",
    "current",
    "view",
    "get",
    "check",
    "describe",
    "print",
    "version",
    "about",
    "status",
    "?",
  ];
function vV5({ onDone: A }) {
  let [{ mainLoopModel: B }, Q] = dB();
  return (
    s0((Z, G) => {
      if (G.escape) {
        Y1("tengu_model_command_menu", { action: "cancel" });
        let Y = B ?? Zt().label;
        A(`Kept model as ${n1.bold(Y)}`);
        return;
      }
    }),
    fE.createElement(db1, {
      initial: B,
      onSelect: (Z) => {
        (Y1("tengu_model_command_menu", { action: Z, from_model: B, to_model: Z }),
          Q((G) => ({ ...G, mainLoopModel: Z })),
          A(`Set model to ${n1.bold(Lm(Z))}`));
      },
    })
  );
}
function bV5({ args: A, onDone: B }) {
  let [Q, Z] = dB(),
    G = A === "default" ? null : A;
  return (
    fE.useEffect(() => {
      async function Y() {
        if (G && hV5(G)) {
          B("Invalid model. Claude Pro users are not currently able to use Opus in Claude Code.");
          return;
        }
        if (!G) {
          I(null);
          return;
        }
        if (fV5(G)) {
          I(G);
          return;
        }
        try {
          let { valid: W, error: J } = await qRB(G);
          if (W) I(G);
          else B(J || `Model '${G}' not found`);
        } catch (W) {
          B(`Failed to validate model: ${W.message}`);
        }
      }
      function I(W) {
        (Z((J) => ({ ...J, mainLoopModel: W })), B(`Set model to ${n1.bold(Lm(W))}`));
      }
      Y();
    }, [G, B, Z]),
    null
  );
}
function fV5(A) {
  return Yt.includes(A.toLowerCase().trim());
}
function hV5(A) {
  return b2() && !kV() && A.toLowerCase().includes("opus");
}
function gV5({ onDone: A }) {
  let [{ mainLoopModel: B }] = dB(),
    Q = B ?? Zt().label;
  return (A(`Current model: ${Q}`), null);
}
var ERB = {
  type: "local-jsx",
  name: "model",
  userFacingName() {
    return "model";
  },
  description: "Set the AI model for Claude Code",
  isEnabled: () => !0,
  isHidden: !1,
  argumentHint: "[model]",
  async call(A, B, Q) {
    if (((Q = Q?.trim() || ""), Lu1.includes(Q)))
      return (Y1("tengu_model_command_inline_help", { args: Q }), fE.createElement(gV5, { onDone: A }));
    if (Nu1.includes(Q)) {
      A("Run /model to open the model selection menu, or /model [modelName] to set the model.");
      return;
    }
    if (Q) return (Y1("tengu_model_command_inline", { args: Q }), fE.createElement(bV5, { args: Q, onDone: A }));
    return fE.createElement(vV5, { onDone: A });
  },
};
var hS = A1(V1(), 1);
function uV5({ onDone: A }) {
  let Q = E2().outputStyle ?? iW;
  return (
    s0((Z, G) => {
      if (G.escape) {
        (Y1("tengu_output_style_command_menu", { action: "cancel" }), A(`Kept output style as ${n1.bold(Q)}`));
        return;
      }
    }),
    hS.createElement(lb1, {
      initialStyle: Q,
      onComplete: (Z) => {
        (Y1("tengu_output_style_command_menu", { action: Z, from_style: Q, to_style: Z }),
          W4("localSettings", { outputStyle: Z }),
          A(`Set output style to ${n1.bold(Z)}`));
      },
      onCancel: () => {
        A(`Kept output style as ${n1.bold(Q)}`);
      },
    })
  );
}
function mV5(A, B) {
  if (A in B) return A;
  let Q = A.toLowerCase();
  for (let Z of Object.keys(B)) if (Z.toLowerCase() === Q) return Z;
  return null;
}
function dV5({ args: A, onDone: B }) {
  return (
    $u().then((Q) => {
      let Z = mV5(A, Q);
      if (!Z) {
        B(`Invalid output style: ${A}`);
        return;
      }
      (W4("localSettings", { outputStyle: Z }), B(`Set output style to ${n1.bold(Z)}`));
    }),
    null
  );
}
function cV5({ onDone: A }) {
  let B = E2();
  return (A(`Current output style: ${B.outputStyle ?? iW}`), null);
}
var NRB = {
  type: "local-jsx",
  name: "output-style",
  userFacingName() {
    return "output-style";
  },
  description: "Set the output style directly or from a selection menu",
  isEnabled: () => !0,
  isHidden: !1,
  argumentHint: "[style]",
  async call(A, B, Q) {
    if (((Q = Q?.trim() || ""), Lu1.includes(Q)))
      return (Y1("tengu_output_style_command_inline_help", { args: Q }), hS.createElement(cV5, { onDone: A }));
    if (Nu1.includes(Q)) {
      A(
        "Run /output-style to open the output style selection menu, or /output-style [styleName] to set the output style.",
      );
      return;
    }
    if (Q) return (Y1("tengu_output_style_command_inline", { args: Q }), hS.createElement(dV5, { args: Q, onDone: A }));
    return hS.createElement(uV5, { onDone: A });
  },
};
var lV5 = {
    type: "prompt",
    description: "Create a custom output style",
    aliases: [],
    isEnabled: () => !0,
    isHidden: !1,
    name: "output-style:new",
    source: "builtin",
    progressMessage: "creating output style",
    allowedTools: [
      TASK_TOOL_NAME,
      `${READ_TOOL_NAME}(~/.claude/output-styles/*.md)`,
      `${WRITE_TOOL_NAME}(~/.claude/output-styles/*.md)`,
      `${EDIT_TOOL_NAME}(~/.claude/output-styles/*.md)`,
    ],
    async getPromptForCommand(A) {
      let B = A.trim() || "Create a new output style based on user preferences";
      return [{ type: "text", text: `Create a ${TASK_TOOL_NAME} with subagent_type "output-style-setup" and the prompt "${B}"` }];
    },
    userFacingName() {
      return "output-style:new";
    },
  },
  LRB = lV5;
var EJ1 = A1(V1(), 1);
var pV5 = {
    type: "local-jsx",
    name: "upgrade",
    description: "Upgrade to Max for higher rate limits and more Opus",
    isEnabled: () => !process.env.DISABLE_UPGRADE_COMMAND && !le(),
    isHidden: !1,
    async call(A, B) {
      try {
        if (b2()) {
          let Z = F3();
          if (Z?.accessToken) {
            let G = await g51(Z.accessToken);
            if (
              G?.organization?.organization_type === "claude_max" &&
              G?.organization?.rate_limit_tier === "default_claude_max_20x"
            )
              return (
                setTimeout(() => {
                  A(
                    "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account.",
                  );
                }, 0),
                null
              );
          }
        }
        return (
          await N$("https://claude.ai/upgrade/max"),
          EJ1.createElement(_L0, {
            startingMessage: "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
            onDone: (Z, G) => {
              (EI1(EJ1.createElement(PA1, { model: G })),
                B.onChangeAPIKey(),
                A(Z ? "Login successful" : "Login interrupted"));
            },
          })
        );
      } catch (Q) {
        (U1(Q, G3A),
          setTimeout(() => {
            A("Failed to open browser. Please visit https://claude.ai/upgrade/max to upgrade.");
          }, 0));
      }
      return null;
    },
    userFacingName() {
      return "upgrade";
    },
  },
  MRB = pV5;
var iV5 = {
    type: "prompt",
    description: "Set up Claude Code's status line UI",
    aliases: [],
    isEnabled: () => !0,
    isHidden: !1,
    name: "statusline",
    progressMessage: "setting up statusLine",
    allowedTools: ["Task", "Read(~/**)", "Edit(~/.claude/settings.json)"],
    source: "builtin",
    disableNonInteractive: !0,
    async getPromptForCommand(A) {
      return [
        {
          type: "text",
          text: `Create a Task with subagent_type "statusline-setup" and the prompt "${A.trim() || "Configure my statusLine from my shell PS1 configuration"}"`,
        },
      ];
    },
    userFacingName() {
      return "statusline";
    },
  },
  ORB = iV5;
var RRB = YA(() => [
    LPA,
    JRB,
    GXB,
    TXB,
    _XB,
    gXB,
    uXB,
    nXB,
    Zu1,
    vOB,
    NKB,
    TKB,
    PKB,
    _DB,
    gDB,
    qKB,
    bDB,
    ERB,
    NRB,
    LRB,
    uDB,
    lDB,
    pDB,
    YCB,
    ORB,
    XUB,
    rJB,
    Dh1,
    VUB,
    q_,
    MRB,
    KUB,
    AEB,
    YEB,
    xOB,
    $RB,
    ...(!le() ? [xKB, VDB()] : []),
    JUB,
    ...[],
  ]),
  yg1 = YA(() => new Set(RRB().map((A) => A.name))),
  I21 = YA(async () => {
    let A = await zRB(),
      B = await KJ1();
    return [...A, ...B, ...RRB()].filter((Q) => Q.isEnabled());
  });
var pb1 = YA(async () => {
  return (await I21()).filter((B) => B.type === "prompt");
});
function AJ1(A, B) {
  return B.some((Q) => Q.userFacingName() === A || Q.aliases?.includes(A));
}
function Zf(A, B) {
  let Q = B.find((Z) => Z.userFacingName() === A || Z.aliases?.includes(A));
  if (!Q)
    throw ReferenceError(
      `Command ${A} not found. Available commands: ${B.map((Z) => {
        let G = Z.userFacingName();
        return Z.aliases ? `${G} (aliases: ${Z.aliases.join(", ")})` : G;
      })
        .sort((Z, G) => Z.localeCompare(G))
        .join(", ")}`,
    );
  return Q;
}
var $21 = AA();
function NJ1() {
  return w21(IQ(), "projects");
}
function r$1() {
  return JM0(U2());
}
function JM0(A) {
  let B = QE($21);
  return w21(B, `${A}.jsonl`);
}
function PRB(A) {
  let B = QE($21),
    Q = w21(B, `${A}.jsonl`),
    Z = w1();
  try {
    return (Z.statSync(Q), !0);
  } catch {
    return !1;
  }
}
function aV5() {
  return "production";
}
function jRB() {
  return "external";
}
function QE(A) {
  return w21(NJ1(), A.replace(/[^a-zA-Z0-9]/g, "-"));
}
var cR0 = null;
function eO() {
  if (!cR0) cR0 = new SRB();
  return cR0;
}
class SRB {
  summaries;
  messages;
  checkpoints;
  didLoad = !1;
  sessionFile = null;
  remoteIngressUrl = null;
  constructor() {
    ((this.summaries = new Map()), (this.messages = new Map()), (this.checkpoints = new Map()));
  }
  async insertMessageChain(A, B = !1) {
    let Q = null,
      Z;
    try {
      Z = await zU1();
    } catch {
      Z = void 0;
    }
    for (let G of A) {
      let Y = zI1(G),
        I = {
          parentUuid: Y ? null : Q,
          logicalParentUuid: Y ? Q : void 0,
          isSidechain: B,
          userType: jRB(),
          cwd: AA(),
          sessionId: U2(),
          version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.anthropic.com/s/claude-code",
            VERSION: "1.0.119",
          }.VERSION,
          gitBranch: Z,
          ...G,
        };
      (this.messages.set(G.uuid, I), await this.appendEntry(I), (Q = G.uuid));
    }
  }
  async insertCheckpoint(A) {
    let B = U2(),
      Q = {
        type: "checkpoint",
        sessionId: B,
        commit: A.commit,
        timestamp: A.timestamp.toISOString(),
        label: A.label,
        id: A.id,
      };
    if (!this.checkpoints.has(B)) this.checkpoints.set(B, []);
    (this.checkpoints.get(B)?.push(Q), await this.appendEntry(Q));
  }
  async appendEntry(A) {
    let B = process.env.TEST_ENABLE_SESSION_PERSISTENCE === "true";
    if ((aV5() === "test" && !B) || E2()?.cleanupPeriodDays === 0) return;
    let Q = w1();
    if (this.sessionFile === null) {
      let G = QE($21);
      try {
        Q.statSync(G);
      } catch {
        Q.mkdirSync(G);
      }
      this.sessionFile = r$1();
      try {
        Q.statSync(this.sessionFile);
      } catch {
        Q.writeFileSync(this.sessionFile, "", { encoding: "utf8", flush: !0 });
      }
    }
    if (this.sessionFile !== null)
      try {
        Q.statSync(this.sessionFile);
      } catch {
        let G = QE($21);
        try {
          Q.statSync(G);
        } catch {
          Q.mkdirSync(G);
        }
        Q.writeFileSync(this.sessionFile, "", { encoding: "utf8", flush: !0 });
      }
    let Z = U2();
    if (A.type === "summary")
      Q.appendFileSync(
        this.sessionFile,
        JSON.stringify(A) +
          `
`,
      );
    else {
      let { messageSet: G, checkpointSet: Y } = await oV5(Z);
      if (A.type === "checkpoint") {
        if (A.id && !Y.has(A.id))
          (Q.appendFileSync(
            this.sessionFile,
            JSON.stringify(A) +
              `
`,
          ),
            Y.add(A.id));
      } else if (!G.has(A.uuid))
        (Q.appendFileSync(
          this.sessionFile,
          JSON.stringify(A) +
            `
`,
        ),
          G.add(A.uuid));
    }
    if (process.env.ENABLE_SESSION_PERSISTENCE === "true" && this.remoteIngressUrl) await this.persistToRemote(Z, A);
  }
  async persistToRemote(A, B) {
    if (!this.remoteIngressUrl) return;
    if (!("uuid" in B) || !("type" in B)) {
      F1("Skipping remote persistence for entry without uuid or type");
      return;
    }
    let Q = 3,
      Z = 500;
    for (let G = 1; G <= Q; G++)
      try {
        if (!(await cJB(A, B, this.remoteIngressUrl))) {
          throw (
            Y1("tengu_session_persistence_failed", { attempt: G }),
            new Error("Non-retryable error during remote persistence")
          );
          return;
        }
        return;
      } catch (Y) {
        if (G === Q) throw (Y1("tengu_session_persistence_failed", { attempt: G }), Y);
        let I = Math.min(Z * Math.pow(2, G - 1), 8000);
        (F1(`Remote persistence attempt ${G}/${Q} failed, retrying in ${I}ms...`),
          await new Promise((W) => setTimeout(W, I)));
      }
  }
  setRemoteIngressUrl(A) {
    ((this.remoteIngressUrl = A), F1(`Remote persistence enabled with URL: ${A}`));
  }
  async getAllTranscripts() {
    await this.loadAllSessions();
    let A = [...this.messages.values()],
      B = new Set(A.map((Q) => Q.parentUuid));
    return A.filter((Q) => !B.has(Q.uuid))
      .map((Q) => this.getTranscript(Q))
      .filter((Q) => Q.length);
  }
  getTranscript(A) {
    return TRB(this.messages, A);
  }
  async getLastLog(A) {
    let { messages: B } = await pR0(A);
    if (B.size === 0) return null;
    let Z = Array.from(B.values()).sort((Y, I) => new Date(I.timestamp).getTime() - new Date(Y.timestamp).getTime())[0];
    if (!Z) return null;
    return TRB(B, Z);
  }
  getAllCheckpoints(A) {
    let B = new Map(),
      Q = A[A.length - 1]?.sessionId;
    if (Q) {
      let Z = this.checkpoints.get(Q)?.values() || [];
      for (let G of Z) {
        let Y = G.id ?? G.commit;
        if (Y) B.set(Y, G);
      }
    }
    return Array.from(B.values());
  }
  loadAllSessions = YA(async () => {
    let A = QE($21),
      B = w1();
    if (this.didLoad) return this;
    try {
      B.statSync(A);
    } catch {
      return this;
    }
    let Z = B.readdirSync(A)
        .filter((Y) => Y.isFile() && Y.name.endsWith(".jsonl"))
        .map((Y) => w21(A, Y.name)),
      G = await Promise.all(
        Z.sort((Y, I) => {
          let W = B.statSync(Y),
            J = B.statSync(I);
          return W.mtime.getTime() - J.mtime.getTime();
        }).map(async (Y) => {
          let I = tV(nV5(Y, ".jsonl"));
          if (!I) return { sessionId: I, sessionMessages: new Set() };
          let W = new Map(),
            J = new Map(),
            X = new Map();
          try {
            await B.stat(Y);
            for (let F of await It1(Y))
              if (F.type === "user" || F.type === "assistant" || F.type === "attachment" || F.type === "system")
                W.set(F.uuid, F);
              else if (F.type === "summary" && F.leafUuid) J.set(F.leafUuid, F.summary);
              else if (F.type === "checkpoint") {
                let V = F.id ?? F.commit;
                if (V) X.set(V, F);
              }
          } catch {}
          return { sessionId: I, sessionMessages: W, summaries: J, checkpoints: X };
        }),
      );
    for (let { sessionId: Y, sessionMessages: I, summaries: W, checkpoints: J } of G) {
      if (!Y) continue;
      for (let [X, F] of I.entries()) this.messages.set(X, F);
      for (let [X, F] of W.entries()) this.summaries.set(X, F);
      this.checkpoints.set(Y, Array.from(J.values()));
    }
    return ((this.didLoad = !0), this);
  });
}
async function wg1(A) {
  let B = bRB(A);
  return (await eO().insertMessageChain(B), B[B.length - 1]?.uuid || null);
}
async function JOB(A) {
  await eO().insertMessageChain(bRB(A), !0);
}
async function oL0(A) {
  await eO().insertCheckpoint(A);
}
async function YXB() {
  let A = eO();
  A.sessionFile = r$1();
}
async function yRB(A, B) {
  (vk(A), eO().setRemoteIngressUrl(B));
  try {
    let Z = (await lJB(A, B)) || [],
      G = w1(),
      Y = QE($21);
    try {
      G.statSync(Y);
    } catch {
      G.mkdirSync(Y);
    }
    let I = JM0(A);
    if (G.existsSync(I)) G.unlinkSync(I);
    let W = new Set(),
      J = [];
    for (let X of Z)
      if ("uuid" in X) {
        if (!W.has(X.uuid)) (W.add(X.uuid), J.push(X));
      } else J.push(X);
    for (let X of J)
      G.appendFileSync(
        I,
        JSON.stringify(X) +
          `
`,
      );
    return (F1(`Hydrated ${J.length} unique entries from ${Z.length} remote entries`), Z.length > 0);
  } catch (Z) {
    return (F1(`Error hydrating session from remote: ${Z}`), !1);
  }
}
function sV5(A) {
  for (let B of A) {
    if (B.type !== "user" || B.isMeta) continue;
    let Q = B.message?.content;
    if (!Q) continue;
    let Z = "";
    if (typeof Q === "string") Z = Q;
    else if (Array.isArray(Q)) Z = Q.find((W) => W.type === "text")?.text || "";
    if (!Z) continue;
    let G = tQ(Z, "command-name");
    if (G) {
      let I = G.replace(/^\//, "");
      if (yg1().has(I)) continue;
      else {
        let W = tQ(Z, "command-args");
        if (!W || W.trim() === "") continue;
      }
    }
    if (Z.match(/^<local-command-stdout>/)) continue;
    let Y = Z.replace(/\n/g, " ").trim();
    if (Y.length > 45) Y = Y.slice(0, 45).trim() + "…";
    return Y;
  }
  return "No prompt";
}
function rV5(A) {
  return A.map((B) => {
    let { isSidechain: Q, parentUuid: Z, ...G } = B;
    return G;
  });
}
function TRB(A, B) {
  let Q = [],
    Z = B;
  while (Z) (Q.unshift(Z), (Z = Z.parentUuid ? A.get(Z.parentUuid) : void 0));
  return Q;
}
function kRB(A, B = 0, Q, Z) {
  let G = A[A.length - 1],
    Y = A[0],
    I = sV5(A),
    W = new Date(Y.timestamp),
    J = new Date(G.timestamp),
    X = Z?.map((F) => ({
      id: F.id ?? "unavailable",
      commit: F.commit,
      timestamp: new Date(F.timestamp),
      label: F.label,
    }));
  return {
    date: G.timestamp,
    messages: rV5(A),
    fullPath: "n/a",
    value: B,
    created: W,
    modified: J,
    firstPrompt: I,
    messageCount: A.length,
    isSidechain: Y.isSidechain,
    leafUuid: G.uuid,
    summary: Q,
    checkpoints: X,
    gitBranch: G.gitBranch,
  };
}
async function _RB() {
  let A = await eO().getAllTranscripts(),
    B = eO().summaries;
  return A.map((Q, Z) => {
    let G = Q[Q.length - 1],
      Y = G ? B.get(G.uuid) : void 0,
      I = G ? eO().getAllCheckpoints(Q) : void 0;
    return kRB(Q, Z, Y, I);
  }).sort((Q, Z) => {
    return Z.modified.getTime() - Q.modified.getTime();
  });
}
async function xRB(A, B) {
  await eO().appendEntry({ type: "summary", summary: B, leafUuid: A });
}
async function lR0(A) {
  let B = new Map(),
    Q = new Map(),
    Z = new Map();
  try {
    let G = await It1(A);
    for (let Y of G)
      if (Y.type === "user" || Y.type === "assistant" || Y.type === "attachment" || Y.type === "system")
        B.set(Y.uuid, Y);
      else if (Y.type === "summary" && Y.leafUuid) Q.set(Y.leafUuid, Y.summary);
      else if (Y.type === "checkpoint") {
        let I = Y.id ?? Y.commit;
        if (I) Z.set(I, Y);
      }
  } catch {}
  return { messages: B, summaries: Q, checkpoints: Z };
}
async function pR0(A) {
  let B = w21(QE(AA()), `${A}.jsonl`);
  return lR0(B);
}
var oV5 = YA(
  async (A) => {
    let { messages: B, checkpoints: Q } = await pR0(A);
    return { messageSet: new Set(B.keys()), checkpointSet: new Set(Q.keys()) };
  },
  (A) => A,
);
async function vRB(A) {
  let B = await eO().getLastLog(A);
  if (B !== null && B !== void 0) {
    let Q = B[B.length - 1],
      { summaries: Z, checkpoints: G } = await pR0(A),
      Y = Q ? Z.get(Q.uuid) : void 0;
    return kRB(B, 0, Y, Array.from(G.values()));
  }
  return null;
}
function bRB(A) {
  return A.filter((B) => {
    if (B.type === "progress") return !1;
    if (B.type === "attachment" && jRB() !== "ant") return !1;
    return !0;
  });
}
var gRB = A1(jC1(), 1);
import { homedir as eV5 } from "os";
var VK = Jf.sep;
function uRB(A, B) {
  if (HB() === "windows") {
    let Q = nk(A),
      Z = nk(B);
    return Jf.relative(Q, Z);
  }
  return Jf.relative(A, B);
}
function D$A(A) {
  if (HB() === "windows") return nk(A);
  return A;
}
function AK5() {
  return rw.map((A) => gT(A)).filter((A) => A !== void 0);
}
function xw0(A) {
  if (A.endsWith("/.claude/settings.json") || A.endsWith("/.claude/settings.local.json")) return !0;
  return AK5().some((B) => B === A);
}
function BK5(A) {
  if (xw0(A)) return !0;
  let B = hRB(WQ(), ".claude/commands"),
    Q = hRB(WQ(), ".claude/agents");
  return Cu(A, B) || Cu(A, Q);
}
function QK5(A) {
  let Q = i9(A).split(tV5),
    Z = Q[Q.length - 1],
    G = [".git", ".vscode", ".idea"];
  for (let I of G) if (Q.includes(I)) return !0;
  if (
    Z &&
    [".gitconfig", ".bashrc", ".bash_profile", ".zshrc", ".zprofile", ".profile", ".ripgreprc", ".mcp.json"].includes(Z)
  )
    return !0;
  return !1;
}
function $s(A) {
  return new Set([WQ(), ...A.additionalWorkingDirectories.keys()]);
}
function BE(A, B) {
  return Array.from($s(B)).some((Q) => Cu(A, Q));
}
function Cu(A, B) {
  let Q = i9(A),
    Z = i9(B),
    G = Q.replace(/^\/private\/var\//, "/var/").replace(/^\/private\/tmp(\/|$)/, "/tmp$1"),
    Y = Z.replace(/^\/private\/var\//, "/var/").replace(/^\/private\/tmp(\/|$)/, "/tmp$1"),
    I = uRB(Y, G);
  if (I === "") return !0;
  if (f41(I)) return !1;
  return !Jf.isAbsolute(I);
}
function ZK5(A) {
  switch (A) {
    case "cliArg":
    case "command":
    case "session":
      return i9(WQ());
    case "userSettings":
    case "policySettings":
    case "projectSettings":
    case "localSettings":
    case "flagSettings":
      return OU1(A);
  }
}
function iR0(A) {
  return Jf.join(VK, A);
}
function GK5({ patternRoot: A, pattern: B, rootPath: Q }) {
  let Z = Jf.join(A, B);
  if (A === Q) return iR0(B);
  else if (Z.startsWith(`${Q}${VK}`)) {
    let G = Z.slice(Q.length);
    return iR0(G);
  } else {
    let G = Jf.relative(Q, A);
    if (!G || G.startsWith(`..${VK}`) || G === "..") return null;
    else {
      let Y = Jf.join(G, B);
      return iR0(Y);
    }
  }
}
function zg1(A, B) {
  let Q = new Set(A.get(null) ?? []);
  for (let [Z, G] of A.entries()) {
    if (Z === null) continue;
    for (let Y of G) {
      let I = GK5({ patternRoot: Z, pattern: Y, rootPath: B });
      if (I) Q.add(I);
    }
  }
  return Array.from(Q);
}
function Dg1(A) {
  let B = dRB(A, "read", "deny"),
    Q = new Map();
  for (let [G, Y] of B.entries()) Q.set(G, Array.from(Y.keys()));
  let Z = w9().ignorePatterns;
  if (Z && Z.length > 0)
    for (let G of Z) {
      let { relativePattern: Y, root: I } = mRB(G, "projectSettings"),
        W = Q.get(I);
      if (W === void 0) ((W = [Y]), Q.set(I, W));
      else W.push(Y);
    }
  return Q;
}
function mRB(A, B) {
  if (A.startsWith(`${VK}${VK}`)) {
    let Z = A.slice(1);
    if (HB() === "windows" && Z.match(/^\/[a-z]\//i)) {
      let G = Z[1]?.toUpperCase() ?? "C",
        Y = Z.slice(2),
        I = `${G}:\\`;
      return { relativePattern: Y.startsWith("/") ? Y.slice(1) : Y, root: I };
    }
    return { relativePattern: Z, root: VK };
  } else if (A.startsWith(`~${VK}`)) return { relativePattern: A.slice(1), root: eV5() };
  else if (A.startsWith(VK)) return { relativePattern: A, root: ZK5(B) };
  let Q = A;
  if (A.startsWith(`.${VK}`)) Q = A.slice(2);
  return { relativePattern: Q, root: null };
}
function dRB(A, B, Q) {
  let Z = (() => {
      switch (B) {
        case "edit":
          return EDIT_TOOL_NAME;
        case "read":
          return READ_TOOL_NAME;
      }
    })(),
    G = j10(A, Z, Q),
    Y = new Map();
  for (let [I, W] of G.entries()) {
    let { relativePattern: J, root: X } = mRB(I, W.source),
      F = Y.get(X);
    if (F === void 0) ((F = new Map()), Y.set(X, F));
    F.set(J, W);
  }
  return Y;
}
function dj(A, B, Q, Z) {
  let G = i9(A);
  if (HB() === "windows" && G.includes("\\")) G = nk(G);
  let Y = dRB(B, Q, Z);
  for (let [I, W] of Y.entries()) {
    let J = Array.from(W.keys()).map((K) => {
        let H = K;
        if (I === VK && K.startsWith(VK)) H = K.slice(1);
        if (H.endsWith("/**")) H = H.slice(0, -3);
        return H;
      }),
      X = gRB.default().add(J),
      F = uRB(I ?? AA(), G ?? AA());
    if (F.startsWith(`..${VK}`)) continue;
    if (!F) continue;
    let V = X.test(F);
    if (V.ignored && V.rule) {
      let K = V.rule.pattern,
        H = K + "/**";
      if (W.has(H)) return W.get(H) ?? null;
      if (I === VK && !K.startsWith(VK)) {
        K = VK + K;
        let z = K + "/**";
        if (W.has(z)) return W.get(z) ?? null;
      }
      return W.get(K) ?? null;
    }
  }
  return null;
}
function a11(A, B, Q) {
  if (typeof A.getPath !== "function")
    return {
      behavior: "ask",
      message: `Claude requested permissions to use ${A.name}, but you haven't granted it yet.`,
    };
  let Z = A.getPath(B),
    G = ud(A, B, Q);
  if (G.behavior === "allow") return G;
  let Y = dj(Z, Q, "read", "deny");
  if (Y)
    return {
      behavior: "deny",
      message: `Permission to read ${Z} has been denied.`,
      decisionReason: { type: "rule", rule: Y },
    };
  let I = dj(Z, Q, "read", "ask");
  if (I)
    return {
      behavior: "ask",
      message: `Claude requested permissions to read from ${Z}, but you haven't granted it yet.`,
      decisionReason: { type: "rule", rule: I },
    };
  if (BE(Z, Q)) return { behavior: "allow", updatedInput: B, decisionReason: { type: "mode", mode: "default" } };
  let W = i9(Z),
    J = fRB(QE(WQ()), "bash-outputs", U2());
  if (W.startsWith(J))
    return {
      behavior: "allow",
      updatedInput: B,
      decisionReason: { type: "other", reason: "Bash output files from current session are allowed for reading" },
    };
  let X = fRB(IQ(), "session-memory");
  if (W.startsWith(X))
    return {
      behavior: "allow",
      updatedInput: B,
      decisionReason: { type: "other", reason: "Session memory files are allowed for reading" },
    };
  let F = dj(Z, Q, "read", "allow");
  if (F) return { behavior: "allow", updatedInput: B, decisionReason: { type: "rule", rule: F } };
  return {
    behavior: "ask",
    message: `Claude requested permissions to read from ${Z}, but you haven't granted it yet.`,
    suggestions: Lg1(Z, "read", Q),
  };
}
function ud(A, B, Q) {
  if (typeof A.getPath !== "function")
    return {
      behavior: "ask",
      message: `Claude requested permissions to use ${A.name}, but you haven't granted it yet.`,
    };
  let Z = A.getPath(B),
    G = dj(Z, Q, "edit", "deny");
  if (G)
    return {
      behavior: "deny",
      message: `Permission to edit ${Z} has been denied.`,
      decisionReason: { type: "rule", rule: G },
    };
  let Y = dj(Z, Q, "edit", "ask");
  if (Y)
    return {
      behavior: "ask",
      message: `Claude requested permissions to write to ${Z}, but you haven't granted it yet.`,
      decisionReason: { type: "rule", rule: Y },
    };
  if (BK5(Z))
    return {
      behavior: "ask",
      message: `Claude requested permissions to write to ${Z}, but you haven't granted it yet.`,
      decisionReason: {
        type: "other",
        reason: "Ask for permission to edit Claude Code settings files or slash commands",
      },
    };
  if (QK5(Z))
    return {
      behavior: "ask",
      message: `Claude requested permissions to edit ${Z} which is a sensitive file.`,
      decisionReason: { type: "other", reason: "Ask for permission to edit potentially sensitive files." },
    };
  if (Q.mode === "acceptEdits" && BE(Z, Q))
    return { behavior: "allow", updatedInput: B, decisionReason: { type: "mode", mode: "acceptEdits" } };
  let I = dj(Z, Q, "edit", "allow");
  if (I) return { behavior: "allow", updatedInput: B, decisionReason: { type: "rule", rule: I } };
  return {
    behavior: "ask",
    message: `Claude requested permissions to write to ${Z}, but you haven't granted it yet.`,
    suggestions: Lg1(Z, "write", Q),
  };
}
function Lg1(A, B, Q) {
  let Z = !BE(A, Q);
  if (B === "read" && Z) {
    let G = xT(A),
      Y = YU1(G);
    return Y ? [Y] : [];
  }
  if (B === "write" || B === "create") {
    let G = [{ type: "setMode", mode: "acceptEdits", destination: "session" }];
    if (Z) {
      let Y = xT(A);
      G.push({ type: "addDirectories", directories: [Y], destination: "session" });
    }
    return G;
  }
  return [{ type: "setMode", mode: "acceptEdits", destination: "session" }];
}
async function fEB(A, B, { limit: Q, offset: Z }, G, Y) {
  let I = zg1(Dg1(Y), B),
    J = (await IC1([A], { cwd: B, nocase: !0, nodir: !0, signal: G, stat: !0, withFileTypes: !0, ignore: I })).sort(
      (F, V) => (F.mtimeMs ?? 0) - (V.mtimeMs ?? 0),
    ),
    X = J.length > Z + Q;
  return { files: J.slice(Z, Z + Q).map((F) => F.fullpath()), truncated: X };
}
function T9B(A, B = 0, Q) {
  let Y = w1().readFileSync(A, { encoding: "utf8" }).split(/\r?\n/),
    I = Q !== void 0 && Y.length - B > Q ? Y.slice(B, B + Q) : Y.slice(B);
  return {
    content: I.join(`
`),
    lineCount: I.length,
    totalLines: Y.length,
  };
}
function Yb(A, B, Q, Z) {
  let G = B;
  if (Z === "CRLF")
    G = B.split(`
`).join(`\r
`);
  WL(A, G, { encoding: Q });
}
var pGB = YA(async () => {
  let A = C4();
  setTimeout(() => {
    A.abort();
  }, 1000);
  let B = await zXA(AA(), A.signal, 15),
    Q = 0;
  for (let Z of B) if (rj(Z) === "CRLF") Q++;
  return Q > 3 ? "CRLF" : "LF";
});
function mW(A) {
  try {
    let Q = w1(),
      { resolvedPath: Z } = cJ(Q, A),
      { buffer: G, bytesRead: Y } = Q.readSync(Z, { length: 4096 });
    if (Y >= 2) {
      if (G[0] === 255 && G[1] === 254) return "utf16le";
    }
    if (Y >= 3 && G[0] === 239 && G[1] === 187 && G[2] === 191) return "utf8";
    return G.slice(0, Y).toString("utf8").length > 0 ? "utf8" : "ascii";
  } catch (Q) {
    return (U1(Q, NZA), "utf8");
  }
}
function rj(A, B = "utf8") {
  try {
    let Q = w1(),
      { resolvedPath: Z } = cJ(Q, A),
      { buffer: G, bytesRead: Y } = Q.readSync(Z, { length: 4096 }),
      I = G.toString(B, 0, Y);
    return WK5(I);
  } catch (Q) {
    return (U1(Q, LZA), "LF");
  }
}
function WK5(A) {
  let B = 0,
    Q = 0;
  for (let Z = 0; Z < A.length; Z++)
    if (
      A[Z] ===
      `
`
    )
      if (Z > 0 && A[Z - 1] === "\r") B++;
      else Q++;
  return B > Q ? "CRLF" : "LF";
}
function Nd(A) {
  let B = sR0(A) ? A : rR0(AA(), A),
    Q = w1(),
    Z = String.fromCharCode(8239),
    G = /^(.+)([ \u202F])(AM|PM)(\.png)$/,
    Y = nR0(B).match(G);
  if (Y) {
    if (Q.existsSync(B)) return B;
    let I = Y[2],
      W = I === " " ? Z : " ",
      J = B.replace(`${I}${Y[3]}${Y[4]}`, `${W}${Y[3]}${Y[4]}`);
    if (Q.existsSync(J)) return J;
  }
  return B;
}
function Z01(A) {
  return A.replace(/^\t+/gm, (B) => "  ".repeat(B.length));
}
function JK5(A) {
  let B = A ? i9(A) : void 0,
    Q = B ? cRB(AA(), B) : void 0;
  return { absolutePath: B, relativePath: Q };
}
function IJ(A) {
  let { relativePath: B } = JK5(A);
  if (B && !B.startsWith("..")) return B;
  let Q = IK5();
  if (A.startsWith(Q + YK5)) return "~" + A.slice(Q.length);
  return A;
}
function O_1(A) {
  let B = w1();
  try {
    let Q = lRB(A),
      Z = nR0(A, aR0(A));
    if (!B.existsSync(Q)) return;
    let I = B.readdirSync(Q).filter((W) => nR0(W.name, aR0(W.name)) === Z && LJ1(Q, W.name) !== A)[0];
    if (I) return I.name;
    return;
  } catch (Q) {
    U1(Q, TZA);
    return;
  }
}
function uv({ content: A, startLine: B }) {
  if (!A) return "";
  return A.split(/\r?\n/).map((Z, G) => {
    let Y = G + B,
      I = String(Y);
    if (I.length >= 6) return `${I}→${Z}`;
    return `${I.padStart(6, " ")}→${Z}`;
  }).join(`
`);
}
function xRA(A) {
  let B = w1();
  if (!B.existsSync(A)) return !0;
  return B.isDirEmptySync(A);
}
function z$(A, B = MJ1()) {
  let Q = w9();
  if (!Q.ignorePatterns || Q.ignorePatterns.length === 0) return !1;
  let Z = sR0(A) ? A : rR0(B, A),
    G = cRB(B, Z);
  if (!G) return !1;
  let Y = Q.ignorePatterns.length > 0 ? pRB.default().add(Q.ignorePatterns) : null;
  if (!Y) return !1;
  try {
    return Y.ignores(G);
  } catch {
    return !1;
  }
}
function qV(A) {
  let B = w1(),
    { resolvedPath: Q, isSymlink: Z } = cJ(B, A);
  if (Z) F1(`Reading through symlink: ${A} -> ${Q}`);
  let G = mW(Q);
  return B.readFileSync(Q, { encoding: G }).replaceAll(
    `\r
`,
    `
`,
  );
}
function oU0(A) {
  let { content: B } = yUA.readFile(A);
  return B;
}
function WL(A, B, Q = { encoding: "utf-8" }) {
  let Z = w1(),
    G = A;
  if (Z.existsSync(A))
    try {
      let I = Z.readlinkSync(A);
      ((G = sR0(I) ? I : rR0(lRB(A), I)), F1(`Writing through symlink: ${A} -> ${G}`));
    } catch (I) {
      G = A;
    }
  let Y = `${G}.tmp.${process.pid}.${Date.now()}`;
  try {
    F1(`Writing to temp file: ${Y}`);
    let I;
    if (Z.existsSync(G)) ((I = Z.statSync(G).mode), F1(`Preserving file permissions: ${I.toString(8)}`));
    if (
      (Z.writeFileSync(Y, B, { encoding: Q.encoding, flush: !0 }),
      F1(`Temp file written successfully, size: ${B.length} bytes`),
      I !== void 0)
    )
      (Z.chmodSync(Y, I), F1("Applied original permissions to temp file"));
    (F1(`Renaming ${Y} to ${G}`), Z.renameSync(Y, G), F1(`File ${G} written atomically`));
  } catch (I) {
    (d0(`Failed to write file atomically: ${I}`), U1(I, xZA), Y1("tengu_atomic_write_error", {}));
    try {
      if (Z.existsSync(Y)) (F1(`Cleaning up temp file: ${Y}`), Z.unlinkSync(Y));
    } catch (W) {
      d0(`Failed to clean up temp file: ${W}`);
    }
    F1(`Falling back to non-atomic write for ${G}`);
    try {
      (Z.writeFileSync(G, B, { encoding: Q.encoding, flush: !0 }),
        F1(`File ${G} written successfully with non-atomic fallback`));
    } catch (W) {
      throw (d0(`Non-atomic write also failed: ${W}`), W);
    }
  }
}
var Mu1 = jt1("claude-cli");
function Ou1(A) {
  return A.replace(/[^a-zA-Z0-9]/g, "-");
}
function dW(A) {
  let B = A / 1024;
  if (B < 1) return `${A} bytes`;
  if (B < 1024) return `${B.toFixed(1).replace(/\.0$/, "")}KB`;
  let Q = B / 1024;
  if (Q < 1024) return `${Q.toFixed(1).replace(/\.0$/, "")}MB`;
  return `${(Q / 1024).toFixed(1).replace(/\.0$/, "")}GB`;
}
var kO = {
  baseLogs: () => LJ1(Mu1.cache, Ou1(w1().cwd())),
  errors: () => LJ1(Mu1.cache, Ou1(w1().cwd()), "errors"),
  messages: () => LJ1(Mu1.cache, Ou1(w1().cwd()), "messages"),
  mcpLogs: (A) => LJ1(Mu1.cache, Ou1(w1().cwd()), `mcp-logs-${A}`),
};
function Bf(A) {
  let B = aR0(A);
  if (!B) return "unknown";
  return iRB.getLanguage(B.slice(1))?.name ?? "unknown";
}
function wQB(A) {
  let B = w1();
  try {
    if (!B.existsSync(A)) B.mkdirSync(A);
    return !0;
  } catch (Q) {
    return (U1(Q instanceof Error ? Q : new Error(String(Q)), RZA), !1);
  }
}
var uS = {
    allowedTools: [],
    history: [],
    mcpContextUris: [],
    mcpServers: {},
    enabledMcpjsonServers: [],
    disabledMcpjsonServers: [],
    hasTrustDialogAccepted: !1,
    ignorePatterns: [],
    projectOnboardingSeenCount: 0,
    hasClaudeMdExternalIncludesApproved: !1,
    hasClaudeMdExternalIncludesWarningShown: !1,
  },
  tH = {
    numStartups: 0,
    installMethod: void 0,
    autoUpdates: void 0,
    theme: "dark",
    preferredNotifChannel: "auto",
    verbose: !1,
    editorMode: "normal",
    autoCompactEnabled: !0,
    hasSeenTasksHint: !1,
    queuedCommandUpHintCount: 0,
    diffTool: "auto",
    customApiKeyResponses: { approved: [], rejected: [] },
    env: {},
    tipsHistory: {},
    memoryUsageCount: 0,
    promptQueueUseCount: 0,
    todoFeatureEnabled: !0,
    showExpandedTodos: !1,
    messageIdleNotifThresholdMs: 60000,
    autoConnectIde: !1,
    autoInstallIdeExtension: !0,
    autocheckpointingEnabled: !0,
    checkpointingShadowRepos: [],
    cachedStatsigGates: {},
  },
  RJ1 = [
    "apiKeyHelper",
    "installMethod",
    "autoUpdates",
    "autoUpdatesProtectedForNative",
    "theme",
    "verbose",
    "preferredNotifChannel",
    "shiftEnterKeyBindingInstalled",
    "editorMode",
    "hasUsedBackslashReturn",
    "autoCompactEnabled",
    "diffTool",
    "env",
    "tipsHistory",
    "todoFeatureEnabled",
    "showExpandedTodos",
    "messageIdleNotifThresholdMs",
    "autoConnectIde",
    "autoInstallIdeExtension",
    "autocheckpointingEnabled",
    "checkpointingShadowRepos",
  ];
function eR0(A) {
  return RJ1.includes(A);
}
var TJ1 = ["allowedTools", "hasTrustDialogAccepted", "hasCompletedProjectOnboarding", "ignorePatterns"];
function kM(A) {
  let B = Xf(lJ(), tH),
    Q = MJ1();
  if (B.projects?.[Q]?.hasTrustDialogAccepted) return !0;
  let G = AA();
  if (A) return B.projects?.[G]?.hasTrustDialogAccepted === !0;
  while (!0) {
    if (B.projects?.[G]?.hasTrustDialogAccepted) return !0;
    let I = nRB(G, "..");
    if (I === G) break;
    G = I;
  }
  return !1;
}
var bM3 = { ...tH, autoUpdates: !1 },
  fM3 = { ...uS };
function AT0(A) {
  return TJ1.includes(A);
}
function q21(A, B) {
  if (B) {
    let Q = H0();
    return A in Q && Array.isArray(Q[A]);
  } else {
    let Q = uS[A];
    return A in uS && Array.isArray(Q);
  }
}
function KK5(A, B) {
  if (q21(A, B)) return !1;
  if (B) {
    let Q = H0();
    return A in Q && typeof Q[A] === "object";
  } else {
    let Q = uS[A];
    return A in uS && typeof Q === "object";
  }
}
function HK5(A, B) {
  let Q = Array.from(new Set(B));
  switch (A) {
    case "allowedTools":
      return Q.length > 0 ? Q : ["git diff:*"];
    case "ignorePatterns":
      return Q.length > 0 ? Q.map((Z) => `Read(${Z})`) : ["Read(secrets.env)"];
  }
}
function zK5(A, B) {
  let Q = HK5(A, B);
  switch (A) {
    case "allowedTools":
      return { permissions: { allow: Q } };
    case "ignorePatterns":
      return { permissions: { deny: Q } };
  }
}
function DK5(A, B) {
  if (A !== "allowedTools" && A !== "ignorePatterns") return;
  console.warn(`Warning: "claude config add ${A}" has been migrated to settings.json and will be removed in a future version.

Instead, add rules to .claude/settings.json:
${JSON.stringify(zK5(A, B), null, 2)}
See https://docs.anthropic.com/en/docs/claude-code/settings for more information on settings.json.
`);
}
function Ru1(A, B, Q, Z = !0) {
  if (!q21(A, Q)) {
    if (Q) console.error(`Error: '${A}' is not a valid array config key in global config`);
    else console.error(`Error: '${A}' is not a valid array config key in project config`);
    if (Z) process.exit(1);
    else return;
  }
  if (Q) {
    let G = H0(),
      Y = A,
      I = G[Y] || [],
      W = new Set(I),
      J = W.size;
    for (let X of B) W.add(X);
    if (W.size > J) {
      let X = Array.from(W).sort();
      TA({ ...G, [Y]: X });
    }
  } else {
    let G = A;
    DK5(G, B);
    let Y = w9(),
      I = Y[G] || [],
      W = new Set(I),
      J = W.size;
    for (let X of B) W.add(X);
    if (W.size > J) {
      let X = Array.from(W).sort();
      i8({ ...Y, [G]: X });
    }
  }
  if (Z) process.exit(0);
}
function rRB(A, B, Q, Z = !0) {
  if (Q) {
    let G = H0();
    if (!(A in G) || !Array.isArray(G[A]))
      if ((console.error(`Error: '${A}' is not a valid array config key in global config`), Z)) process.exit(1);
      else return;
    let Y = A,
      I = G[Y];
    if (!I) I = [];
    let W = new Set(B),
      J = I.filter((X) => !W.has(X));
    if (I.length !== J.length) TA({ ...G, [Y]: J.sort() });
  } else {
    let G = w9(),
      Y = uS[A];
    if (!(A in uS) || !Array.isArray(Y))
      if ((console.error(`Error: '${A}' is not a valid array config key in project config`), Z)) process.exit(1);
      else return;
    let I = A,
      W = G[I];
    if (!W) W = [];
    let J = new Set(B),
      X = W.filter((F) => !J.has(F));
    if (W.length !== X.length) i8({ ...G, [I]: X.sort() });
  }
  if (Z) process.exit(0);
}
function TA(A) {
  try {
    (tRB(lJ(), tH, (B) => ({ ...A, projects: B.projects })), (gS.config = null), (gS.mtime = 0));
  } catch (B) {
    (d0(`Failed to save config with lock: ${B}`),
      oRB(lJ(), { ...A, projects: Xf(lJ(), tH).projects }, tH),
      (gS.config = null),
      (gS.mtime = 0));
  }
}
var gS = { config: null, mtime: 0 };
function oR0(A) {
  if (A.installMethod !== void 0) return A;
  let B = "unknown",
    Q = A.autoUpdates ?? !0;
  switch (A.autoUpdaterStatus) {
    case "migrated":
      B = "local";
      break;
    case "installed":
      B = "native";
      break;
    case "disabled":
      Q = !1;
      break;
    case "enabled":
    case "no_permissions":
    case "not_configured":
      B = "global";
      break;
    case void 0:
      break;
  }
  return { ...A, installMethod: B, autoUpdates: Q };
}
function H0() {
  try {
    let A = w1().existsSync(lJ()) ? w1().statSync(lJ()) : null;
    if (gS.config && A) {
      if (A.mtimeMs <= gS.mtime) return gS.config;
    }
    let B = oR0(Xf(lJ(), tH));
    if (A) gS = { config: B, mtime: A.mtimeMs };
    else gS = { config: B, mtime: Date.now() };
    return oR0(B);
  } catch {
    return oR0(Xf(lJ(), tH));
  }
}
function hf1(A) {
  let B = H0();
  if (B.customApiKeyResponses?.approved?.includes(A)) return "approved";
  if (B.customApiKeyResponses?.rejected?.includes(A)) return "rejected";
  return "new";
}
function oRB(A, B, Q) {
  let Z = aRB(A),
    G = w1();
  if (!G.existsSync(Z)) G.mkdirSync(Z);
  let Y = Object.fromEntries(Object.entries(B).filter(([I, W]) => JSON.stringify(W) !== JSON.stringify(Q[I])));
  WL(A, JSON.stringify(Y, null, 2));
}
function tRB(A, B, Q) {
  let Z = aRB(A),
    G = w1();
  if (!G.existsSync(Z)) G.mkdirSync(Z);
  let Y;
  try {
    let I = `${A}.lock`,
      W = Date.now();
    if (((Y = sRB.lockSync(A, { lockfilePath: I })), Date.now() - W > 100))
      F1("Lock acquisition took longer than expected - another Claude instance may be running");
    let X = Xf(A, B),
      F = Q(X),
      V = Object.fromEntries(Object.entries(F).filter(([K, H]) => JSON.stringify(H) !== JSON.stringify(B[K])));
    if (G.existsSync(A))
      try {
        let K = `${A}.backup`;
        G.copyFileSync(A, K);
      } catch (K) {
        d0(`Failed to backup config: ${K}`);
      }
    WL(A, JSON.stringify(V, null, 2));
  } finally {
    if (Y) Y();
  }
}
var tR0 = !1;
function eRB() {
  if (tR0) return;
  ((tR0 = !0), Xf(lJ(), tH, !0));
}
function Xf(A, B, Q) {
  if (!tR0) throw new Error("Config accessed before allowed.");
  let Z = w1();
  if (!Z.existsSync(A)) {
    let G = `${A}.backup`;
    if (Z.existsSync(G))
      process.stdout.write(`
Claude configuration file not found at: ${A}
A backup file exists at: ${G}
You can manually restore it by running: cp "${G}" "${A}"

`);
    return AQ1(B);
  }
  try {
    let G = Z.readFileSync(A, { encoding: "utf-8" });
    try {
      let Y = JSON.parse(G);
      return { ...AQ1(B), ...Y };
    } catch (Y) {
      let I = Y instanceof Error ? Y.message : String(Y);
      throw new Rg(I, A, B);
    }
  } catch (G) {
    if (G instanceof Rg && Q) throw G;
    if (G instanceof Rg) {
      (d0(`Config file corrupted, resetting to defaults: ${G.message}`),
        U1(G, fk),
        process.stdout.write(`
Claude configuration file at ${A} is corrupted: ${G.message}
`));
      let Y = `${A}.corrupted.${Date.now()}`;
      try {
        (Z.copyFileSync(A, Y), d0(`Corrupted config backed up to: ${Y}`));
      } catch {}
      let I = `${A}.backup`;
      if (
        (process.stdout.write(`
Claude configuration file at ${A} is corrupted
The corrupted file has been backed up to: ${Y}
`),
        Z.existsSync(I))
      )
        process.stdout.write(`A backup file exists at: ${I}
You can manually restore it by running: cp "${I}" "${A}"

`);
      else
        process.stdout.write(`
`);
    }
    return AQ1(B);
  }
}
var MJ1 = YA(() => {
  let A = WQ();
  try {
    return XK5(
      VK5("git rev-parse --show-toplevel", { cwd: A, encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] }).trim(),
    );
  } catch {
    return nRB(A);
  }
});
function w9() {
  let A = MJ1(),
    B = Xf(lJ(), tH);
  if (!B.projects) return uS;
  let Q = B.projects[A] ?? uS;
  if (typeof Q.allowedTools === "string") Q.allowedTools = d3(Q.allowedTools) ?? [];
  return Q;
}
function i8(A) {
  let B = MJ1();
  try {
    tRB(lJ(), tH, (Q) => ({ ...Q, projects: { ...Q.projects, [B]: A } }));
  } catch (Q) {
    d0(`Failed to save config with lock: ${Q}`);
    let Z = Xf(lJ(), tH);
    oRB(lJ(), { ...Z, projects: { ...Z.projects, [B]: A } }, tH);
  }
}
function Ed() {
  let A = H0();
  return !!(
    process.env.DISABLE_AUTOUPDATER ||
    process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC ||
    (A.autoUpdates === !1 && (A.installMethod !== "native" || A.autoUpdatesProtectedForNative !== !0))
  );
}
function Fx1() {
  if (EQ(process.env.DISABLE_COST_WARNINGS)) return !1;
  if (b2()) return !1;
  let B = Mj(),
    Q = oJ(!1) !== null;
  if (!B.hasToken && !Q) return !1;
  let Z = H0(),
    G = Z.oauthAccount?.organizationRole,
    Y = Z.oauthAccount?.workspaceRole;
  if (!G || !Y) return !0;
  return ["admin", "billing"].includes(G) || ["workspace_admin", "workspace_billing"].includes(Y);
}
function x01() {
  let A = H0();
  if (A.userID) return A.userID;
  let B = FK5(32).toString("hex");
  return (TA({ ...A, userID: B }), B);
}
function ATB() {
  let A = H0();
  if (!A.firstStartTime) TA({ ...A, firstStartTime: new Date().toISOString() });
}
function BTB(A, B) {
  if (B) {
    if (!eR0(A))
      (console.error(`Error: '${A}' is not a valid config key. Valid keys are: ${RJ1.join(", ")}`), process.exit(1));
    return H0()[A];
  } else {
    if (!AT0(A))
      (console.error(`Error: '${A}' is not a valid config key. Valid keys are: ${TJ1.join(", ")}`), process.exit(1));
    return w9()[A];
  }
}
function QTB(A, B, Q) {
  if (Q) {
    if (!eR0(A))
      (console.error(`Error: Cannot set '${A}'. Only these keys can be modified: ${RJ1.join(", ")}`), process.exit(1));
    if (KK5(A, Q) && typeof B === "string")
      try {
        let G = JSON.parse(B);
        if (typeof G !== "object" || G === null || Array.isArray(G))
          (console.error("Error: 'env' must be a valid JSON object"), process.exit(1));
        let Y = H0();
        (TA({ ...Y, [A]: G }), process.exit(0));
      } catch (G) {
        (console.error(`Error: Failed to parse JSON for 'env': ${G instanceof Error ? G.message : String(G)}`),
          process.exit(1));
      }
    if (q21(A, Q) && typeof B === "string") {
      console.warn(
        n1.yellow(`Warning: '${A}' is an array type. Automatically using 'config add' instead of 'config set'.`),
      );
      let G = B.split(",")
        .map((Y) => Y.trim())
        .filter((Y) => Y.length > 0);
      Ru1(A, G, Q);
      return;
    }
    let Z = H0();
    TA({ ...Z, [A]: B });
  } else {
    if (!AT0(A))
      (console.error(
        `Error: Cannot set '${A}'. Only these keys can be modified: ${TJ1.join(", ")}. Did you mean --global?`,
      ),
        process.exit(1));
    if (q21(A, Q) && typeof B === "string") {
      console.warn(
        n1.yellow(`Warning: '${A}' is an array type. Automatically using 'config add' instead of 'config set'.`),
      );
      let G = B.split(",")
        .map((Y) => Y.trim())
        .filter((Y) => Y.length > 0);
      Ru1(A, G, Q);
      return;
    }
    let Z = w9();
    i8({ ...Z, [A]: B });
  }
  process.exit(0);
}
function ZTB(A, B) {
  if (B) {
    if (!eR0(A))
      (console.error(`Error: Cannot delete '${A}'. Only these keys can be modified: ${RJ1.join(", ")}`),
        process.exit(1));
    let Q = H0();
    (delete Q[A], TA(Q));
  } else {
    if (!AT0(A))
      (console.error(
        `Error: Cannot delete '${A}'. Only these keys can be modified: ${TJ1.join(", ")}. Did you mean --global?`,
      ),
        process.exit(1));
    let Q = w9();
    (delete Q[A], i8(Q));
  }
}
function GTB(A) {
  if (A) return TV1(H0(), RJ1);
  else return TV1(w9(), TJ1);
}
function td(A) {
  let B = WQ();
  if (A === "ExperimentalUltraClaudeMd") return td("User");
  switch (A) {
    case "User":
      return OJ1(IQ(), "CLAUDE.md");
    case "Local":
      return OJ1(B, "CLAUDE.local.md");
    case "Project":
      return OJ1(B, "CLAUDE.md");
    case "Managed":
      return OJ1(hT(), "CLAUDE.md");
    case "ExperimentalUltraClaudeMd":
      return OJ1(IQ(), "ULTRACLAUDE.md");
  }
}
import { execSync as CK5 } from "child_process";
var qc = YA((A) => {
  let B = x01(),
    Q = H0(),
    Z = "",
    G = 0,
    Y = void 0;
  if (A) {
    if (((Z = PZ() ?? ""), Z !== "" && Q.claudeCodeFirstTokenDate)) {
      let X = new Date(Q.claudeCodeFirstTokenDate).getTime();
      if (!isNaN(X)) G = X;
    }
    Y = Q.hasOpusPlanDefault;
  }
  let I = TZ(),
    W = I?.organizationUuid,
    J = I?.accountUuid;
  return {
    customIDs: { sessionId: U2(), organizationUUID: W, organizationID: W },
    userID: B,
    appVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "1.0.119",
    }.VERSION,
    email: UK5(),
    custom: {
      userType: "external",
      organizationUuid: W,
      accountUuid: J,
      subscriptionType: Z,
      firstTokenTime: G,
      hasOpusPlanDefault: Y,
      ...(process.env.GITHUB_ACTIONS === "true" && {
        githubActor: process.env.GITHUB_ACTOR,
        githubActorId: process.env.GITHUB_ACTOR_ID,
        githubRepository: process.env.GITHUB_REPOSITORY,
        githubRepositoryId: process.env.GITHUB_REPOSITORY_ID,
        githubRepositoryOwner: process.env.GITHUB_REPOSITORY_OWNER,
        githubRepositoryOwnerId: process.env.GITHUB_REPOSITORY_OWNER_ID,
      }),
    },
  };
});
function UK5() {
  return;
}
var SENTRY_DSN = "https://e531a1d9ec1de9064fae9d4affb0b0f4@o1158394.ingest.us.sentry.io/4508259541909504",
  ITB = "client-RRNS7R65EAtReO5XA4xDC3eU6ZdJQi6lLEP6b5j32Me";
function WTB() {
  let A = !(
    process.env.CLAUDE_CODE_USE_BEDROCK ||
    process.env.CLAUDE_CODE_USE_VERTEX ||
    process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC ||
    process.env.DISABLE_ERROR_REPORTING
  );
  AR.init({
    dsn: SENTRY_DSN,
    enabled: A,
    environment: "external",
    release: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "1.0.119",
    }.VERSION,
    defaultIntegrations: !1,
    tracesSampleRate: 1,
    tracePropagationTargets: ["localhost"],
  });
}
function lg1(A, B) {
  try {
    let Q = qc(),
      Z = { platform: tA.platform, terminal: tA.terminal, userType: "external", errorId: B.toString(), ...JTB() };
    (AR.setTags(Z),
      AR.setExtras({
        sessionId: U2(),
        isCI: tA.isCI,
        isTest: !1,
        packageVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://docs.anthropic.com/s/claude-code",
          VERSION: "1.0.119",
        }.VERSION,
      }),
      AR.setUser({ id: Q.userID, email: Q.email }),
      AR.captureException(A));
  } catch {}
}
function wK5(A) {
  return A.toISOString().replace(/[:.]/g, "-");
}
var ZT0 = wK5(new Date());
function qK5() {
  return QT0(kO.errors(), ZT0 + ".txt");
}
var BT0 = !1;
function U1(A, B) {
  if (BT0) return;
  BT0 = !0;
  try {
    if (
      process.env.CLAUDE_CODE_USE_BEDROCK ||
      process.env.CLAUDE_CODE_USE_VERTEX ||
      process.env.DISABLE_ERROR_REPORTING ||
      process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC
    )
      return;
    if (EQ(!1)) console.error(A);
    let Q = A.stack || A.message,
      Z = { error: Q, timestamp: new Date().toISOString() };
    (h7A(Z), EK5(qK5(), { error: Q }));
  } catch {
  } finally {
    BT0 = !1;
  }
  lg1(A, B);
}
function sJB() {
  return f7A();
}
function GT0(A) {
  if (!w1().existsSync(A)) return [];
  try {
    return JSON.parse(w1().readFileSync(A, { encoding: "utf8" }));
  } catch {
    return [];
  }
}
function EK5(A, B) {
  return;
}
async function kA1() {
  let B = (await _RB()).filter((Q) => {
    if (!Q.messages.length) return !1;
    if (Q.firstPrompt?.startsWith("API Error")) return !1;
    if (Q.summary?.startsWith("API Error")) return !1;
    return !0;
  });
  return NK5(B).map((Q, Z) => ({ ...Q, value: Z }));
}
async function $CB(A) {
  return await vRB(A);
}
async function wCB(A) {
  return (await kA1())[A] || null;
}
function NK5(A) {
  return A.sort((B, Q) => {
    let Z = Q.modified.getTime() - B.modified.getTime();
    if (Z !== 0) return Z;
    let G = Q.created.getTime() - B.created.getTime();
    if (G !== 0) return G;
    return B.created.getTime() - Q.created.getTime();
  });
}
function RY(A, B) {
  if ((d0(n1.red(`MCP server "${A}" ${B}`)), (E2() || {}).cleanupPeriodDays === 0)) return;
  try {
    let Z = kO.mcpLogs(A),
      G = B instanceof Error ? B.stack || B.message : String(B),
      Y = new Date().toISOString(),
      I = QT0(Z, ZT0 + ".txt");
    if (!w1().existsSync(Z)) w1().mkdirSync(Z);
    if (!w1().existsSync(I)) w1().writeFileSync(I, "[]", { encoding: "utf8", flush: !1 });
    let W = { error: G, timestamp: Y, sessionId: U2(), cwd: w1().cwd() },
      J = GT0(I);
    (J.push(W), w1().writeFileSync(I, JSON.stringify(J, null, 2), { encoding: "utf8", flush: !1 }));
  } catch {}
}
function DA(A, B) {
  F1(`MCP server "${A}": ${B}`);
  try {
    let Q = kO.mcpLogs(A),
      Z = new Date().toISOString(),
      G = QT0(Q, ZT0 + ".txt");
    if (!w1().existsSync(Q)) w1().mkdirSync(Q);
    if (!w1().existsSync(G)) w1().writeFileSync(G, "[]", { encoding: "utf8", flush: !1 });
    let Y = { debug: B, timestamp: Z, sessionId: U2(), cwd: w1().cwd() },
      I = GT0(G);
    (I.push(Y), w1().writeFileSync(G, JSON.stringify(I, null, 2), { encoding: "utf8", flush: !1 }));
  } catch {}
}
function tq0(A, B) {
  if (!B || B !== "repl_main_thread") return;
  let Q = structuredClone(A);
  b7A(Q);
}
import {
  existsSync as XTB,
  mkdirSync as LK5,
  readdirSync as MK5,
  readFileSync as OK5,
  writeFileSync as RK5,
  unlinkSync as TK5,
} from "fs";
function E21() {
  return PJ1.join(IQ(), "statsig");
}
class YT0 {
  cache = new Map();
  ready = !1;
  constructor() {
    try {
      if (!XTB(E21())) LK5(E21(), { recursive: !0 });
      let A = MK5(E21());
      for (let B of A) {
        let Q = decodeURIComponent(B),
          Z = OK5(PJ1.join(E21(), B), "utf8");
        this.cache.set(Q, Z);
      }
      this.ready = !0;
    } catch (A) {
      (U1(A, VYA), (this.ready = !0));
    }
  }
  isReady() {
    return this.ready;
  }
  isReadyResolver() {
    return this.ready ? Promise.resolve() : null;
  }
  getProviderName() {
    return "FileSystemStorageProvider";
  }
  getItem(A) {
    return this.cache.get(A) ?? null;
  }
  setItem(A, B) {
    this.cache.set(A, B);
    try {
      let Q = encodeURIComponent(A);
      RK5(PJ1.join(E21(), Q), B, "utf8");
    } catch (Q) {
      U1(Q, HYA);
    }
  }
  removeItem(A) {
    this.cache.delete(A);
    let B = encodeURIComponent(A),
      Q = PJ1.join(E21(), B);
    if (!XTB(Q)) return;
    try {
      TK5(Q);
    } catch (Z) {
      U1(Z, KYA);
    }
  }
  getAllKeys() {
    return Array.from(this.cache.keys());
  }
}
var jK5 = 21600000,
  FTB = {},
  rc = null,
  IT0 = !1,
  Pu1 = YA(() => {
    if (oc()) return null;
    let A = qc(!0),
      B = {
        networkConfig: { api: "https://statsig.anthropic.com/v1/" },
        environment: { tier: ["test", "dev"].includes("production") ? "development" : "production" },
        includeCurrentPageUrlWithEvents: !1,
        logLevel: Tu1.LogLevel.None,
        storageProvider: new YT0(),
        customUserCacheKeyFunc: (Z, G) => {
          return PK5("sha1")
            .update(Z)
            .update(G.userID || "")
            .digest("hex")
            .slice(0, 10);
        },
      };
    ((rc = new Tu1.StatsigClient(ITB, A, B)),
      rc.on("error", () => {
        $2.head("https://api.anthropic.com/api/hello").catch(() => {});
      }));
    let Q = rc.initializeAsync().then(() => {
      IT0 = !0;
    });
    return (
      process.on("beforeExit", async () => {
        await rc?.flush();
      }),
      process.on("exit", () => {
        rc?.flush();
      }),
      { client: rc, initialized: Q }
    );
  }),
  Ff = YA(async () => {
    let A = Pu1();
    if (!A) return null;
    return (await A.initialized, A.client);
  });
function vKB() {
  ((rc = null), (IT0 = !1), Pu1.cache?.clear?.(), Ff.cache?.clear?.(), yK5.cache?.clear?.(), WW.cache?.clear?.());
}
function oc() {
  return (
    !!process.env.CLAUDE_CODE_USE_BEDROCK ||
    !!process.env.CLAUDE_CODE_USE_VERTEX ||
    !!process.env.DISABLE_TELEMETRY ||
    !!process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC
  );
}
async function Lc() {
  if (oc()) return;
  try {
    let A = qc(!0),
      B = await Ff();
    if (!B) return;
    await B.updateUserAsync(A);
  } catch (A) {
    U1(A instanceof Error ? A : new Error(`Statsig: Force refresh failed: ${A}`), FYA);
  }
}
function VTB() {
  if (oc()) return;
  let A = setInterval(() => {
    Lc();
  }, jK5);
  process.on("beforeExit", () => {
    clearInterval(A);
  });
}
async function SK5(A, B) {
  if (oc()) return;
  try {
    let Q = B.model ? String(B.model) : uG(),
      Z = NH(Q),
      [G, Y, I] = await Promise.all([Ff(), tA.getPackageManagers(), tA.getRuntimes()]);
    if (!G) return;
    let W = {
        ...B,
        model: Q,
        sessionId: U2(),
        userType: "external",
        ...(Z.length > 0 ? { betas: Z.join(",") } : {}),
        env: JSON.stringify({
          platform: tA.platform,
          nodeVersion: tA.nodeVersion,
          terminal: xH.terminal,
          packageManagers: Y.join(","),
          runtimes: I.join(","),
          isRunningWithBun: tA.isRunningWithBun(),
          isCi: EQ(!1),
          isClaubbit: process.env.CLAUBBIT === "true",
          isGithubAction: process.env.GITHUB_ACTIONS === "true",
          isClaudeCodeAction: process.env.CLAUDE_CODE_ACTION === "1" || process.env.CLAUDE_CODE_ACTION === "true",
          isClaudeAiAuth: b2(),
          version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.anthropic.com/s/claude-code",
            VERSION: "1.0.119",
          }.VERSION,
          ...(process.env.GITHUB_ACTIONS === "true" && {
            githubEventName: process.env.GITHUB_EVENT_NAME,
            githubActionsRunnerEnvironment: process.env.RUNNER_ENVIRONMENT,
            githubActionsRunnerOs: process.env.RUNNER_OS,
            githubActionRef: process.env.GITHUB_ACTION_PATH?.includes("claude-code-action/")
              ? process.env.GITHUB_ACTION_PATH.split("claude-code-action/")[1]
              : void 0,
          }),
          ...(y41() && { wslVersion: y41() }),
        }),
        entrypoint: process.env.CLAUDE_CODE_ENTRYPOINT,
        isInteractive: String(O7A()),
        clientType: T7A(),
        ...void 0,
        sweBenchRunId: process.env.SWE_BENCH_RUN_ID || "",
        sweBenchInstanceId: process.env.SWE_BENCH_INSTANCE_ID || "",
        sweBenchTaskId: process.env.SWE_BENCH_TASK_ID || "",
      },
      J = { eventName: A, metadata: W };
    (G.logEvent(J), await G.flush());
  } catch (Q) {}
}
function Y1(A, B) {
  SK5(A, B);
}
var WW = YA(async (A) => {
    if (oc()) return !1;
    let B = await Ff();
    if (!B) return !1;
    let Q = B.checkGate(A);
    return ((FTB[A] = Q), Q);
  }),
  xDB = (A, B = !1) => {
    let [Q, Z] = jJ1.default.useState(B);
    return (
      jJ1.default.useEffect(() => {
        WW(A).then(Z);
      }, [A]),
      Q
    );
  },
  ob1 = (A, B) => {
    let [Q, Z] = jJ1.default.useState(B);
    return (
      jJ1.default.useEffect(() => {
        wd(A, B).then(Z);
      }, [A, B]),
      Q
    );
  };
function JTB() {
  return { ...FTB };
}
var yK5 = YA(async (A, B) => {
  if (oc()) return B;
  let Q = await Ff();
  if (!Q) return B;
  let Z = Q.getExperiment(A);
  if (Object.keys(Z.value).length === 0) return B;
  return Z.value;
});
async function wd(A, B) {
  if (oc()) return B;
  let Q = await Ff();
  if (!Q) return B;
  let Z = Q.getDynamicConfig(A);
  if (Object.keys(Z.value).length === 0) return B;
  return Z.value;
}
var fO3 = YA(wd);
function mz(A, B, Q) {
  let Z = Pu1();
  if (!Z) return Q;
  let G = Z.client.getExperiment(A);
  if (!G) return Q;
  return G.get(B, Q);
}
function QF2(A, B) {
  let Q = Pu1();
  if (!Q) return B;
  let Z = Q.client.getDynamicConfig(A);
  if (!Z || Object.keys(Z.value).length === 0) return B;
  return Z.value;
}
function Dq(A) {
  return (kK5(A), H0().cachedStatsigGates[A] ?? !1);
}
var kK5 = YA(async (A) => {
  let B = await WW(A),
    Q = H0();
  ((Q.cachedStatsigGates[A] = B), TA(Q));
});
async function TPA(A) {
  if (IT0) return Dq(A);
  return WW(A);
}
var KTB = new Map(),
  _K5 = [/MaxListenersExceededWarning.*AbortSignal/, /MaxListenersExceededWarning.*EventTarget/];
function xK5(A) {
  let B = `${A.name}: ${A.message}`;
  return _K5.some((Q) => Q.test(B));
}
var ju1 = null;
function HTB() {
  let A = process.listeners("warning");
  if (ju1 && A.includes(ju1)) return;
  if (H$() !== "development") process.removeAllListeners("warning");
  ((ju1 = (B) => {
    try {
      let Q = `${B.name}: ${B.message.slice(0, 50)}`,
        Z = KTB.get(Q) || 0;
      KTB.set(Q, Z + 1);
      let G = xK5(B);
      if (
        (Y1("tengu_node_warning", { is_internal: G ? 1 : 0, occurrence_count: Z + 1, classname: B.name, ...!1 }),
        process.env.CLAUDE_DEBUG === "true")
      )
        d0(`${G ? "[Internal Warning]" : "[Warning]"} ${B.toString()}`);
    } catch {}
  }),
    process.on("warning", ju1));
}
function DTB() {}
var zTB = new Set([
  "ANTHROPIC_API_KEY",
  "ANTHROPIC_AUTH_TOKEN",
  "ANTHROPIC_BASE_URL",
  "ANTHROPIC_CUSTOM_HEADERS",
  "ANTHROPIC_DEFAULT_HAIKU_MODEL",
  "ANTHROPIC_DEFAULT_OPUS_MODEL",
  "ANTHROPIC_DEFAULT_SONNET_MODEL",
  "ANTHROPIC_MODEL",
  "ANTHROPIC_SMALL_FAST_MODEL",
  "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION",
  "AWS_BEARER_TOKEN_BEDROCK",
  "BASH_DEFAULT_TIMEOUT_MS",
  "BASH_MAX_TIMEOUT_MS",
  "BASH_MAX_OUTPUT_LENGTH",
  "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR",
  "CLAUDE_CODE_API_KEY_HELPER_TTL_MS",
  "CLAUDE_CODE_ENABLE_TELEMETRY",
  "CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL",
  "CLAUDE_CODE_MAX_OUTPUT_TOKENS",
  "CLAUDE_CODE_USE_BEDROCK",
  "CLAUDE_CODE_USE_VERTEX",
  "CLAUDE_CODE_SKIP_BEDROCK_AUTH",
  "CLAUDE_CODE_SKIP_VERTEX_AUTH",
  "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC",
  "CLAUDE_CODE_DISABLE_TERMINAL_TITLE",
  "CLAUDE_CODE_SUBAGENT_MODEL",
  "DISABLE_AUTOUPDATER",
  "DISABLE_BUG_COMMAND",
  "DISABLE_COST_WARNINGS",
  "DISABLE_ERROR_REPORTING",
  "DISABLE_NON_ESSENTIAL_MODEL_CALLS",
  "DISABLE_TELEMETRY",
  "HTTP_PROXY",
  "HTTPS_PROXY",
  "MAX_THINKING_TOKENS",
  "MCP_TIMEOUT",
  "MCP_TOOL_TIMEOUT",
  "MAX_MCP_OUTPUT_TOKENS",
  "NO_PROXY",
  "OTEL_EXPORTER_OTLP_ENDPOINT",
  "OTEL_EXPORTER_OTLP_HEADERS",
  "OTEL_EXPORTER_OTLP_PROTOCOL",
  "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL",
  "OTEL_EXPORTER_OTLP_LOGS_ENDPOINT",
  "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL",
  "OTEL_EXPORTER_OTLP_METRICS_ENDPOINT",
  "OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY",
  "OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE",
  "OTEL_LOG_USER_PROMPTS",
  "OTEL_LOGS_EXPORTER",
  "OTEL_LOGS_EXPORT_INTERVAL",
  "OTEL_METRICS_INCLUDE_SESSION_ID",
  "OTEL_METRICS_INCLUDE_VERSION",
  "OTEL_METRICS_INCLUDE_ACCOUNT_UUID",
  "OTEL_METRICS_EXPORTER",
  "OTEL_METRIC_EXPORT_INTERVAL",
  "OTEL_RESOURCE_ATTRIBUTES",
  "USE_BUILTIN_RIPGREP",
  "VERTEX_REGION_CLAUDE_3_5_HAIKU",
  "VERTEX_REGION_CLAUDE_3_5_SONNET",
  "VERTEX_REGION_CLAUDE_3_7_SONNET",
  "VERTEX_REGION_CLAUDE_4_0_OPUS",
  "VERTEX_REGION_CLAUDE_4_0_SONNET",
  "VERTEX_REGION_CLAUDE_4_1_OPUS",
]);
function CTB() {
  let A = E2() || {},
    B = H0().env || {},
    Q = A.env || {};
  for (let [Z, G] of Object.entries(B)) if (zTB.has(Z.toUpperCase())) process.env[Z] = G;
  for (let [Z, G] of Object.entries(Q)) if (zTB.has(Z.toUpperCase())) process.env[Z] = G;
  DTB();
}
function WT0() {
  let A = E2() || {};
  (Object.assign(process.env, H0().env), Object.assign(process.env, A.env), DTB());
}
var AV = A1(V1(), 1);
function vK5({ filePath: A, errorDescription: B, onExit: Q, onReset: Z }) {
  s0((I, W) => {
    if (W.escape) Q();
  });
  let G = Z2();
  return AV.default.createElement(
    AV.default.Fragment,
    null,
    AV.default.createElement(
      y,
      { flexDirection: "column", borderColor: "error", borderStyle: "round", padding: 1, width: 70, gap: 1 },
      AV.default.createElement(M, { bold: !0 }, "Configuration Error"),
      AV.default.createElement(
        y,
        { flexDirection: "column", gap: 1 },
        AV.default.createElement(
          M,
          null,
          "The configuration file at ",
          AV.default.createElement(M, { bold: !0 }, A),
          " contains invalid JSON.",
        ),
        AV.default.createElement(M, null, B),
      ),
      AV.default.createElement(
        y,
        { flexDirection: "column" },
        AV.default.createElement(M, { bold: !0 }, "Choose an option:"),
        AV.default.createElement(xA, {
          options: [
            { label: "Exit and fix manually", value: "exit" },
            { label: "Reset with default configuration", value: "reset" },
          ],
          onChange: (I) => {
            if (I === "exit") Q();
            else Z();
          },
          onCancel: Q,
        }),
      ),
    ),
    G.pending
      ? AV.default.createElement(M, { dimColor: !0 }, "Press ", G.keyName, " again to exit")
      : AV.default.createElement(l3, null),
  );
}
var DARK_THEME = "dark";
async function UTB({ error: A }) {
  let B = { exitOnCtrlC: !1, theme: DARK_THEME };
  await new Promise((Q) => {
    let { unmount: Z } = s6(
      AV.default.createElement(
        M7,
        null,
        AV.default.createElement(vK5, {
          filePath: A.filePath,
          errorDescription: A.message,
          onExit: () => {
            (Z(), Q(), process.exit(1));
          },
          onReset: () => {
            (w1().writeFileSync(A.filePath, JSON.stringify(A.defaultConfig, null, 2), { flush: !1, encoding: "utf8" }),
              Z(),
              Q(),
              process.exit(0));
          },
        }),
      ),
      B,
    );
  });
}
var Bc1 = A1(C9(), 1),
  ok0 = A1(XP0(), 1),
  Qc1 = A1(Df(), 1),
  _BQ = A1(XsB(), 1),
  xBQ = A1(sAQ(), 1),
  vBQ = A1(jm1(), 1),
  bBQ = A1(G2Q(), 1),
  tk0 = A1(Df(), 1),
  wB1 = A1(QBQ(), 1),
  fBQ = A1(HBQ(), 1),
  hBQ = A1(wBQ(), 1),
  gBQ = A1(SBQ(), 1),
  aE = A1(Xm1(), 1),
  bf = A1(cS(), 1);
class ak0 {
  error(A, ...B) {
    U1(new Error(A), STYLE_CODE_240);
  }
  warn(A, ...B) {
    U1(new Error(A), CYA);
  }
  info(A, ...B) {
    return;
  }
  debug(A, ...B) {
    return;
  }
  verbose(A, ...B) {
    return;
  }
}
var sk0 = A1(Df(), 1),
  $B1 = A1(e7(), 1);
var Oa5 = 3600000;
async function Ra5() {
  let A = yV(FF());
  if (A.error) throw (F1(`Metrics opt-out check failed: ${A.error}`), new Error(`Auth error: ${A.error}`));
  let B = { "Content-Type": "application/json", "User-Agent": RU(), ...A.headers };
  try {
    let Z = await $2.get("https://api.anthropic.com/api/claude_code/organizations/metrics_enabled", {
      headers: B,
      timeout: 5000,
    });
    return (
      F1(`Metrics opt-out API response: enabled=${Z.data.metrics_logging_enabled}`),
      { enabled: Z.data.metrics_logging_enabled, hasError: !1 }
    );
  } catch (Q) {
    return (
      F1(`Failed to check metrics opt-out status: ${Q instanceof Error ? Q.message : String(Q)}`),
      U1(Q, KGA),
      { enabled: !1, hasError: !0 }
    );
  }
}
var Ta5 = Hq1(Ra5, Oa5);
async function yBQ() {
  try {
    return await Ta5();
  } catch (A) {
    return (F1("Metrics check failed, defaulting to disabled"), { enabled: !1, hasError: !0 });
  }
}
class rk0 {
  endpoint;
  timeout;
  pendingExports = [];
  isShutdown = !1;
  constructor(A = {}) {
    ((this.endpoint = "https://api.anthropic.com/api/claude_code/metrics"), (this.timeout = A.timeout || 5000));
  }
  async export(A, B) {
    if (this.isShutdown) {
      B({ code: $B1.ExportResultCode.FAILED, error: new Error("Exporter has been shutdown") });
      return;
    }
    let Q = this.doExport(A, B);
    (this.pendingExports.push(Q),
      Q.finally(() => {
        let Z = this.pendingExports.indexOf(Q);
        if (Z > -1) this.pendingExports.splice(Z, 1);
      }));
  }
  async doExport(A, B) {
    try {
      if (!(await yBQ()).enabled) {
        (F1("Metrics export disabled by organization setting"), B({ code: $B1.ExportResultCode.SUCCESS }));
        return;
      }
      let Z = this.transformMetricsForInternal(A),
        G = yV(FF());
      if (G.error) {
        (F1(`Metrics export failed: ${G.error}`), B({ code: $B1.ExportResultCode.FAILED, error: new Error(G.error) }));
        return;
      }
      let Y = { "Content-Type": "application/json", "User-Agent": RU(), ...G.headers },
        I = await $2.post(this.endpoint, Z, { timeout: this.timeout, headers: Y });
      (F1("BigQuery metrics exported successfully"),
        F1(`API Response: ${JSON.stringify(I.data, null, 2)}`),
        B({ code: $B1.ExportResultCode.SUCCESS }));
    } catch (Q) {
      (F1(`BigQuery metrics export failed: ${Q instanceof Error ? Q.message : String(Q)}`),
        U1(Q, STYLE_CODE_240),
        B({ code: $B1.ExportResultCode.FAILED, error: Q instanceof Error ? Q : new Error("Unknown export error") }));
    }
  }
  transformMetricsForInternal(A) {
    let B = A.resource.attributes,
      Q = {
        "service.name": B["service.name"] || "claude-code",
        "service.version": B["service.version"] || "unknown",
        "os.type": B["os.type"] || "unknown",
        "os.version": B["os.version"] || "unknown",
        "host.arch": B["host.arch"] || "unknown",
        "aggregation.temporality":
          this.selectAggregationTemporality() === sk0.AggregationTemporality.DELTA ? "delta" : "cumulative",
      };
    if (B["wsl.version"]) Q["wsl.version"] = B["wsl.version"];
    if (b2()) {
      Q["user.customer_type"] = "claude_ai";
      let G = PZ();
      if (G) Q["user.subscription_type"] = G;
    } else Q["user.customer_type"] = "api";
    return {
      resource_attributes: Q,
      metrics: A.scopeMetrics.flatMap((G) =>
        G.metrics.map((Y) => ({
          name: Y.descriptor.name,
          description: Y.descriptor.description,
          unit: Y.descriptor.unit,
          data_points: this.extractDataPoints(Y),
        })),
      ),
    };
  }
  extractDataPoints(A) {
    return (A.dataPoints || [])
      .filter((Q) => typeof Q.value === "number")
      .map((Q) => ({
        attributes: this.convertAttributes(Q.attributes),
        value: Q.value,
        timestamp: this.hrTimeToISOString(Q.endTime || Q.startTime || [Date.now() / 1000, 0]),
      }));
  }
  async shutdown() {
    ((this.isShutdown = !0), await this.forceFlush(), F1("BigQuery metrics exporter shutdown complete"));
  }
  async forceFlush() {
    (await Promise.all(this.pendingExports), F1("BigQuery metrics exporter flush complete"));
  }
  convertAttributes(A) {
    let B = {};
    if (A) {
      for (let [Q, Z] of Object.entries(A)) if (Z !== void 0 && Z !== null) B[Q] = String(Z);
    }
    return B;
  }
  hrTimeToISOString(A) {
    let [B, Q] = A;
    return new Date(B * 1000 + Q / 1e6).toISOString();
  }
  selectAggregationTemporality() {
    return sk0.AggregationTemporality.DELTA;
  }
}
var Pa5 = 60000,
  ja5 = 5000;
function Sa5() {
  if (E2()?.otelHeadersHelper)
    process.env.OTEL_EXPORTER_OTLP_HEADERS = Object.entries(Zu2())
      .map(([B, Q]) => `${B}=${Q}`)
      .join(",");
  if (!process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE)
    process.env.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE = "delta";
}
function ya5() {
  let A = (process.env.OTEL_METRICS_EXPORTER || "").trim().split(",").filter(Boolean),
    B = parseInt(process.env.OTEL_METRIC_EXPORT_INTERVAL || Pa5.toString()),
    Q = [];
  for (let Z of A)
    if (Z === "console") {
      let G = new Qc1.ConsoleMetricExporter(),
        Y = G.export.bind(G);
      ((G.export = (I, W) => {
        if (I.resource && I.resource.attributes)
          (console.log(`
=== Resource Attributes ===`),
            console.log(I.resource.attributes),
            console.log(`===========================
`));
        return Y(I, W);
      }),
        Q.push(G));
    } else if (Z === "otlp") {
      let G =
        process.env.OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      switch (G) {
        case "grpc":
          Q.push(new xBQ.OTLPMetricExporter());
          break;
        case "http/json":
          Q.push(new vBQ.OTLPMetricExporter());
          break;
        case "http/protobuf":
          Q.push(new _BQ.OTLPMetricExporter());
          break;
        default:
          throw new Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${G}`,
          );
      }
    } else if (Z === "prometheus") Q.push(new bBQ.PrometheusExporter());
    else
      throw new Error(
        `Unknown exporter type set in OTEL_EXPORTER_OTLP_METRICS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${Z}`,
      );
  return Q.map((Z) => {
    if ("export" in Z) return new tk0.PeriodicExportingMetricReader({ exporter: Z, exportIntervalMillis: B });
    return Z;
  });
}
function ka5() {
  let A = (process.env.OTEL_LOGS_EXPORTER || "").trim().split(",").filter(Boolean),
    B = [];
  for (let Q of A)
    if (Q === "console") B.push(new wB1.ConsoleLogRecordExporter());
    else if (Q === "otlp") {
      let Z = process.env.OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?.trim() || process.env.OTEL_EXPORTER_OTLP_PROTOCOL?.trim();
      switch (Z) {
        case "grpc":
          B.push(new hBQ.OTLPLogExporter());
          break;
        case "http/json":
          B.push(new gBQ.OTLPLogExporter());
          break;
        case "http/protobuf":
          B.push(new fBQ.OTLPLogExporter());
          break;
        default:
          throw new Error(
            `Unknown protocol set in OTEL_EXPORTER_OTLP_LOGS_PROTOCOL or OTEL_EXPORTER_OTLP_PROTOCOL env var: ${Z}`,
          );
      }
    } else throw new Error(`Unknown exporter type set in OTEL_LOGS_EXPORTER env var: ${Q}`);
  return B;
}
function kBQ() {
  return Boolean(process.env.CLAUDE_CODE_ENABLE_TELEMETRY);
}
function _a5() {
  let A = new rk0();
  return new tk0.PeriodicExportingMetricReader({ exporter: A, exportIntervalMillis: 300000 });
}
function xa5() {
  let A = PZ(),