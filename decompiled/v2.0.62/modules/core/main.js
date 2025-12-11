/**
 * Claude Code v2.0.62 - 主入口
 *
 * 原始位置: 行 375001 - 380352
 * 模块: core/main
 */

    B = b2() && (A === "enterprise" || A === "team");
  return Bu2() || B;
}
function uBQ() {
  (Sa5(), Bc1.diag.setLogger(new ak0(), Bc1.DiagLogLevel.ERROR));
  let A = [];
  if (kBQ()) A.push(...ya5());
  if (xa5()) A.push(_a5());
  let B = HB(),
    Q = {
      [bf.ATTR_SERVICE_NAME]: "claude-code",
      [bf.ATTR_SERVICE_VERSION]: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "1.0.119",
      }.VERSION,
    };
  if (B === "wsl") {
    let K = y41();
    if (K) Q["wsl.version"] = K;
  }
  let Z = aE.resourceFromAttributes(Q),
    G = aE.resourceFromAttributes(aE.osDetector.detect().attributes || {}),
    Y = aE.hostDetector.detect(),
    I = Y.attributes?.[bf.SEMRESATTRS_HOST_ARCH]
      ? { [bf.SEMRESATTRS_HOST_ARCH]: Y.attributes[bf.SEMRESATTRS_HOST_ARCH] }
      : {},
    W = aE.resourceFromAttributes(I),
    J = aE.resourceFromAttributes(aE.envDetector.detect().attributes || {}),
    X = Z.merge(G).merge(W).merge(J),
    F = new Qc1.MeterProvider({ resource: X, views: [], readers: A });
  if (kBQ()) {
    let K = ka5();
    if (K.length > 0) {
      let H = new wB1.LoggerProvider({ resource: X });
      for (let D of K)
        H.addLogRecordProcessor(
          new wB1.BatchLogRecordProcessor(D, {
            scheduledDelayMillis: parseInt(process.env.OTEL_LOGS_EXPORT_INTERVAL || ja5.toString()),
          }),
        );
      (ok0.logs.setGlobalLoggerProvider(H), E7A(H));
      let z = ok0.logs.getLogger(
        "com.anthropic.claude_code.events",
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://docs.anthropic.com/s/claude-code",
          VERSION: "1.0.119",
        }.VERSION,
      );
      L7A(z);
    }
  }
  return (
    Fq(async () => {
      let K = parseInt(process.env.CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS || "1000");
      try {
        let H = [F.shutdown()],
          z = q7A();
        if (z) H.push(z.shutdown());
        await Promise.race([
          Promise.all(H),
          new Promise((D, C) => setTimeout(() => C(new Error("OpenTelemetry shutdown timeout")), K)),
        ]);
      } catch (H) {
        if (H instanceof Error && H.message.includes("timeout"))
          d0(`
OpenTelemetry telemetry flush timed out after ${K}ms

To resolve this issue, you can:
1. Increase the timeout by setting CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS env var (e.g., 5000 for 5 seconds)
2. Check if your OpenTelemetry backend is experiencing scalability issues
3. Disable OpenTelemetry by unsetting CLAUDE_CODE_ENABLE_TELEMETRY env var

Current timeout: ${K}ms
`);
        throw H;
      }
    }),
    F.getMeter(
      "com.anthropic.claude_code",
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "1.0.119",
      }.VERSION,
    )
  );
}
var ek0 = !1,
  mBQ = YA(() => {
    try {
      if ((eRB(), CTB(), ga.initialize(), IMA(), !(dZ1() && !kM(!0) && !FF()))) (cBQ(), (ek0 = !0));
      (ATB(), hX2(), cX2(), dUA());
    } catch (A) {
      if (A instanceof Rg) return UTB({ error: A });
      else throw A;
    }
  });
function dBQ() {
  if (ek0) return;
  (cBQ(), (ek0 = !0));
}
function cBQ() {
  let A = uBQ();
  if (A)
    D7A(A, (Q, Z) => {
      let G = A?.createCounter(Q, Z);
      return {
        add(Y, I = {}) {
          let J = { ...Xb1(), ...I };
          G?.add(Y, J);
        },
      };
    });
}
import { join as sBQ } from "path";
import { join as lBQ } from "path";
var pBQ = 2000,
  va5 = `
# Task specification
_What did the user ask to build? Any design decisions or other explanatory context_

# Files and Functions
_What are the important files? In short, what do they contain and why are they relevant?_

# Workflow
_What bash commands are usually run and in what order? How to interpret their output if not obvious?_

# User Corrections / Mistakes
_What did the user correct Assistant about? What did not work and should not be tried again?_

# Codebase and System Documentation
_What are the important system components? How do they work/fit together?_

# Learnings
_What has worked well? What has not? What to avoid? Do not duplicate items from other sections_

# Worklog
_Step by step, what was attempted, done? Very terse summary for each step_
`;
function ba5() {
  return `IMPORTANT: This message and these instructions are NOT part of the actual user conversation. Do NOT include any references to "note-taking", "session notes extraction", or these update instructions in the notes content.

Based on the user conversation above (EXCLUDING this note-taking instruction message as well as system prompt, claude.md entries, or any past session summaries), update the session notes file.

The file {{notesPath}} has already been read for you. Here are its current contents:
<current_notes_content>
{{currentNotes}}
</current_notes_content>

Your ONLY task is to use the MultiEdit tool EXACTLY ONCE to update the notes file, then stop. Do not call any other tools.

CRITICAL RULES FOR EDITING:
- The file must maintain its exact structure with all sections, headers, and italic descriptions intact
-- NEVER modify, delete, or add section headers (## Task specification, ## Worklog, etc.)
-- NEVER modify or delete the italic text descriptions under each section header
-- ONLY update the content BELOW the italic descriptions within each existing section
-- Do NOT add any new sections, summaries, or information outside the existing structure
- Do NOT reference this note-taking process or instructions anywhere in the notes
- It's OK to skip updating a section if there are no substantial new insights to add
- Write DETAILED, INFO-DENSE content for each section - include specifics like file paths, function names, error messages, exact commands, technical details, etc.
- Do not include information that's already in the CLAUDE.md files included in the context
- Keep each section under ~${pBQ} tokens/words - if a section is approaching this limit, condense it by cycling out less important details while preserving the most critical information
- Do not repeat information from past session summaries - only use the current user conversation starting with the first non system-reminder user message.
- Focus on actionable, specific information that would help someone understand or recreate the work discussed in the conversation

Use the MultiEdit tool with file_path: {{notesPath}}

REMEMBER: Use MultiEdit tool once and stop. Do not continue after the edit. Only include insights from the actual user conversation, never from these note-taking instructions.`;
}
async function iBQ() {
  let A = w1(),
    B = lBQ(IQ(), "session-memory", "config", "template.md");
  if (A.existsSync(B))
    try {
      return A.readFileSync(B, { encoding: "utf-8" });
    } catch (Q) {
      U1(Q instanceof Error ? Q : new Error(`Failed to load custom session memory template: ${Q}`), AYA);
    }
  return va5;
}
async function fa5() {
  let A = w1(),
    B = lBQ(IQ(), "session-memory", "config", "prompt.md");
  if (A.existsSync(B))
    try {
      return A.readFileSync(B, { encoding: "utf-8" });
    } catch (Q) {
      U1(Q instanceof Error ? Q : new Error(`Failed to load custom session memory prompt: ${Q}`), eGA);
    }
  return ba5();
}
function ha5(A) {
  let B = {},
    Q = A.split(`
`),
    Z = "",
    G = [];
  for (let Y of Q)
    if (Y.startsWith("# ")) {
      if (Z && G.length > 0) {
        let I = G.join(
          `
`,
        ).trim();
        B[Z] = w3(I);
      }
      ((Z = Y), (G = []));
    } else G.push(Y);
  if (Z && G.length > 0) {
    let Y = G.join(
      `
`,
    ).trim();
    B[Z] = w3(Y);
  }
  return B;
}
function ga5(A) {
  let B = Object.entries(A)
    .filter(([Q, Z]) => Z > pBQ)
    .map(
      ([Q, Z]) =>
        `- The "${Q}" section is currently ~${Z} tokens and growing long. Consider condensing it a bit while keeping all important details.`,
    );
  if (B.length === 0) return "";
  return (
    `

` +
    B.join(`
`)
  );
}
function ua5(A, B) {
  let Q = A;
  for (let [Z, G] of Object.entries(B)) Q = Q.replace(new RegExp(`\\{\\{${Z}\\}\\}`, "g"), G);
  return Q;
}
async function nBQ(A, B) {
  let Q = await fa5(),
    Z = ha5(A),
    G = ga5(Z);
  return ua5(Q, { currentNotes: A, notesPath: B }) + G;
}
var A_0 = sBQ(IQ(), "session-memory"),
  ma5 = 5,
  aBQ;
function da5(A) {
  for (let B = A.length - 1; B >= 0; B--) {
    let Q = A[B];
    if (Q && Q.type === "assistant") {
      let G = Q.message.content;
      if (Array.isArray(G)) return G.some((Y) => Y.type === "tool_use");
    }
  }
  return !1;
}
function ca5(A, B) {
  let Q = 0,
    Z = B === null || B === void 0;
  for (let G of A) {
    if (!Z) {
      if (G.uuid === B) Z = !0;
      continue;
    }
    if (G.type === "assistant") {
      let I = G.message.content;
      if (Array.isArray(I)) Q += I.filter((W) => W.type === "tool_use").length;
    }
  }
  return Q;
}
function la5(A) {
  let B = ca5(A, aBQ);
  if (!da5(A) || B >= ma5) {
    let Z = A[A.length - 1];
    if (Z?.uuid) aBQ = Z.uuid;
    return !0;
  }
  return !1;
}
async function pa5(A) {
  let B = w1();
  if (!B.existsSync(A_0)) B.mkdirSync(A_0);
  let Q = U2(),
    Z = sBQ(A_0, `${Q}.md`);
  if (!B.existsSync(Z)) {
    let I = await iBQ();
    B.writeFileSync(Z, I, { encoding: "utf-8", flush: !1 });
  }
  let G = Q6.call({ file_path: Z }, A),
    Y = "";
  for await (let I of G)
    if (I.type === "result") {
      let W = I.data;
      if (W.type === "text") Y = W.file.content;
    }
  return { memoryPath: Z, currentMemory: Y };
}
var ia5 = {
    agentType: "session-memory",
    whenToUse: "Extract and update session memory",
    tools: [MULTI_EDIT_TOOL_NAME],
    systemPrompt: "",
    model: "sonnet",
    source: "built-in",
  },
  Kh3 = At(async function (A) {
    let { messages: B, systemPrompt: Q, userContext: Z, systemContext: G, toolUseContext: Y, querySource: I } = A;
    if (I !== "repl_main_thread") return;
    if (!la5(B)) return;
    let W = j_1(Y.readFileState),
      J = { ...Y, readFileState: W },
      { memoryPath: X, currentMemory: F } = await pa5(J),
      V = await nBQ(F, X),
      K = async (H, z) => {
        if (H.name === MULTI_EDIT_TOOL_NAME && typeof z === "object" && z !== null && "file_path" in z) {
          let D = z.file_path;
          if (typeof D === "string" && D.includes("session-memory")) return { behavior: "allow", updatedInput: z };
        }
        return {
          behavior: "deny",
          message: `only ${MULTI_EDIT_TOOL_NAME} is allowed`,
          decisionReason: { type: "other", reason: `only ${MULTI_EDIT_TOOL_NAME} is allowed` },
        };
      };
    for await (let H of Wu1({
      agentDefinition: ia5,
      promptMessages: [bA({ content: V })],
      toolUseContext: J,
      canUseTool: K,
      isAsync: !0,
      forkContextMessages: B,
      recordMessagesToSessionStorage: !1,
      querySource: "session_memory",
      override: { systemPrompt: Q, userContext: Z, systemContext: G },
    }));
  });
async function rBQ() {}
import { createRequire as na5 } from "module";
import { fileURLToPath as aa5 } from "url";
import { dirname as sa5, join as ra5 } from "path";
var oa5 = na5(import.meta.url);
function oBQ(A) {
  let B;
  if (typeof Bun !== "undefined" && Bun.embeddedFiles?.length > 0) B = "./ripgrep.node";
  else B = ra5(sa5(aa5(import.meta.url)), "ripgrep.node");
  let { ripgrepMain: Q } = oa5(B);
  return Q(A);
}
var k7 = A1(V1(), 1);
import { ReadStream as xr5 } from "tty";
import { openSync as vr5, existsSync as $_0, readFileSync as br5, writeFileSync as fr5 } from "fs";
var zQQ = A1(HQQ(), 1),
  {
    program: Oh3,
    createCommand: Rh3,
    createArgument: Th3,
    createOption: Ph3,
    CommanderError: jh3,
    InvalidArgumentError: Sh3,
    InvalidOptionArgumentError: yh3,
    Command: DQQ,
    Argument: kh3,
    Option: Fw,
    Help: _h3,
  } = zQQ.default;
var iX = A1(V1(), 1);
var EB1 = A1(V1(), 1);
var rX1 = A1(V1(), 1);
function CQQ({ isFocused: A, isSelected: B, children: Q }) {
  return rX1.default.createElement(
    y,
    { gap: 1, paddingLeft: A ? 0 : 2 },
    A && rX1.default.createElement(M, { color: "suggestion" }, t0.pointer),
    rX1.default.createElement(M, { color: B ? "success" : A ? "suggestion" : void 0 }, Q),
    B && rX1.default.createElement(M, { color: "success" }, t0.tick),
  );
}
var rD = A1(V1(), 1);
import { isDeepStrictEqual as UQQ } from "node:util";
class qB1 extends Map {
  first;
  constructor(A) {
    let B = [],
      Q,
      Z,
      G = 0;
    for (let Y of A) {
      let I = { ...Y, previous: Z, next: void 0, index: G };
      if (Z) Z.next = I;
      ((Q ||= I), B.push([Y.value, I]), G++, (Z = I));
    }
    super(B);
    this.first = Q;
  }
}
var us5 = (A, B) => {
    switch (B.type) {
      case "focus-next-option": {
        if (!A.focusedValue) return A;
        let Q = A.optionMap.get(A.focusedValue);
        if (!Q) return A;
        let Z = Q.next;
        if (!Z) return A;
        if (!(Z.index >= A.visibleToIndex)) return { ...A, focusedValue: Z.value };
        let Y = Math.min(A.optionMap.size, A.visibleToIndex + 1),
          I = Y - A.visibleOptionCount;
        return { ...A, focusedValue: Z.value, visibleFromIndex: I, visibleToIndex: Y };
      }
      case "focus-previous-option": {
        if (!A.focusedValue) return A;
        let Q = A.optionMap.get(A.focusedValue);
        if (!Q) return A;
        let Z = Q.previous;
        if (!Z) return A;
        if (!(Z.index <= A.visibleFromIndex)) return { ...A, focusedValue: Z.value };
        let Y = Math.max(0, A.visibleFromIndex - 1),
          I = Y + A.visibleOptionCount;
        return { ...A, focusedValue: Z.value, visibleFromIndex: Y, visibleToIndex: I };
      }
      case "toggle-focused-option": {
        if (!A.focusedValue) return A;
        if (A.value.includes(A.focusedValue)) {
          let Q = new Set(A.value);
          return (Q.delete(A.focusedValue), { ...A, previousValue: A.value, value: [...Q] });
        }
        return { ...A, previousValue: A.value, value: [...A.value, A.focusedValue] };
      }
      case "reset":
        return B.state;
    }
  },
  $QQ = ({ visibleOptionCount: A, defaultValue: B, options: Q }) => {
    let Z = typeof A === "number" ? Math.min(A, Q.length) : Q.length,
      G = new qB1(Q),
      Y = B ?? [];
    return {
      optionMap: G,
      visibleOptionCount: Z,
      focusedValue: G.first?.value,
      visibleFromIndex: 0,
      visibleToIndex: Z,
      previousValue: Y,
      value: Y,
    };
  },
  wQQ = ({ visibleOptionCount: A = 5, options: B, defaultValue: Q, onChange: Z, onSubmit: G }) => {
    let [Y, I] = rD.useReducer(us5, { visibleOptionCount: A, defaultValue: Q, options: B }, $QQ),
      [W, J] = rD.useState(B);
    if (B !== W && !UQQ(B, W))
      (I({ type: "reset", state: $QQ({ visibleOptionCount: A, defaultValue: Q, options: B }) }), J(B));
    let X = rD.useCallback(() => {
        I({ type: "focus-next-option" });
      }, []),
      F = rD.useCallback(() => {
        I({ type: "focus-previous-option" });
      }, []),
      V = rD.useCallback(() => {
        I({ type: "toggle-focused-option" });
      }, []),
      K = rD.useCallback(() => {
        G?.(Y.value);
      }, [Y.value, G]),
      H = rD.useMemo(() => {
        return B.map((z, D) => ({ ...z, index: D })).slice(Y.visibleFromIndex, Y.visibleToIndex);
      }, [B, Y.visibleFromIndex, Y.visibleToIndex]);
    return (
      rD.useEffect(() => {
        if (!UQQ(Y.previousValue, Y.value)) Z?.(Y.value);
      }, [Y.previousValue, Y.value, B, Z]),
      {
        focusedValue: Y.focusedValue,
        visibleFromIndex: Y.visibleFromIndex,
        visibleToIndex: Y.visibleToIndex,
        value: Y.value,
        visibleOptions: H,
        focusNextOption: X,
        focusPreviousOption: F,
        toggleFocusedOption: V,
        submit: K,
      }
    );
  };
var qQQ = ({ isDisabled: A = !1, state: B }) => {
  s0(
    (Q, Z) => {
      if (Z.downArrow) B.focusNextOption();
      if (Z.upArrow) B.focusPreviousOption();
      if (Q === " ") B.toggleFocusedOption();
      if (Z.return) B.submit();
    },
    { isActive: !A },
  );
};
function Gc1({
  isDisabled: A = !1,
  visibleOptionCount: B = 5,
  highlightText: Q,
  options: Z,
  defaultValue: G,
  onChange: Y,
  onSubmit: I,
}) {
  let W = wQQ({ visibleOptionCount: B, options: Z, defaultValue: G, onChange: Y, onSubmit: I });
  return (
    qQQ({ isDisabled: A, state: W }),
    EB1.default.createElement(
      y,
      { flexDirection: "column" },
      W.visibleOptions.map((J) => {
        let X = J.label;
        if (Q && J.label.includes(Q)) {
          let F = J.label.indexOf(Q);
          X = EB1.default.createElement(
            EB1.default.Fragment,
            null,
            J.label.slice(0, F),
            EB1.default.createElement(M, { bold: !0 }, Q),
            J.label.slice(F + Q.length),
          );
        }
        return EB1.default.createElement(
          CQQ,
          { key: J.value, isFocused: !A && W.focusedValue === J.value, isSelected: W.value.includes(J.value) },
          X,
        );
      }),
    )
  );
}
function EQQ({ servers: A, scope: B, onDone: Q }) {
  let Z = Object.keys(A),
    G = iX.useMemo(() => IL(), []),
    Y = Z.filter((F) => G[F] !== void 0);
  function I(F) {
    let V = 0;
    for (let K of F) {
      let H = A[K];
      if (H) {
        let z = K;
        if (G[z] !== void 0) {
          let D = 1;
          while (G[`${K}_${D}`] !== void 0) D++;
          z = `${K}_${D}`;
        }
        (ng(z, H, B), V++);
      }
    }
    X(V);
  }
  let W = Z2();
  s0((F, V) => {
    if (V.escape) {
      X(0);
      return;
    }
  });
  let [J] = sB();
  function X(F) {
    if (F > 0)
      eZ(`
${iB("success", J)(`Successfully imported ${F} MCP server${F !== 1 ? "s" : ""} to ${B} config.`)}
`);
    else
      console.log(`
No servers were imported.`);
    (Q(), Z5());
  }
  return iX.default.createElement(
    iX.default.Fragment,
    null,
    iX.default.createElement(
      y,
      { flexDirection: "column", gap: 1, padding: 1, borderStyle: "round", borderColor: "success" },
      iX.default.createElement(M, { bold: !0, color: "success" }, "Import MCP Servers from Claude Desktop"),
      iX.default.createElement(
        M,
        null,
        "Found ",
        Z.length,
        " MCP server",
        Z.length !== 1 ? "s" : "",
        " in Claude Desktop.",
      ),
      Y.length > 0 &&
        iX.default.createElement(
          M,
          { color: "warning" },
          "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix.",
        ),
      iX.default.createElement(M, null, "Please select the servers you want to import:"),
      iX.default.createElement(Gc1, {
        options: Z.map((F) => ({ label: `${F}${Y.includes(F) ? " (already exists)" : ""}`, value: F })),
        defaultValue: Z.filter((F) => !Y.includes(F)),
        onSubmit: I,
      }),
    ),
    iX.default.createElement(
      y,
      { marginLeft: 3 },
      iX.default.createElement(
        M,
        { dimColor: !0 },
        W.pending
          ? iX.default.createElement(iX.default.Fragment, null, "Press ", W.keyName, " again to exit")
          : iX.default.createElement(iX.default.Fragment, null, "Space to select · Enter to confirm · Esc to cancel"),
      ),
    ),
  );
}
import * as X_0 from "path";
import * as NQQ from "os";
function ms5() {
  let A = HB();
  if (!ye1.includes(A))
    throw new Error(`Unsupported platform: ${A} - Claude Desktop integration only works on macOS and WSL.`);
  if (A === "macos")
    return X_0.join(NQQ.homedir(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
  let B = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, "/") : null;
  if (B) {
    let Z = `/mnt/c${B.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    if (w1().existsSync(Z)) return Z;
  }
  try {
    if (w1().existsSync("/mnt/c/Users")) {
      let Z = w1().readdirSync("/mnt/c/Users");
      for (let G of Z) {
        if (G.name === "Public" || G.name === "Default" || G.name === "Default User" || G.name === "All Users")
          continue;
        let Y = X_0.join("/mnt/c/Users", G.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
        if (w1().existsSync(Y)) return Y;
      }
    }
  } catch (Q) {
    U1(Q instanceof Error ? Q : new Error(String(Q)), ZZA);
  }
  throw new Error(
    "Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.",
  );
}
function LQQ() {
  if (!ye1.includes(HB()))
    throw new Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
  try {
    let A = ms5();
    if (!w1().existsSync(A)) return {};
    let B = w1().readFileSync(A, { encoding: "utf8" }),
      Q = d3(B);
    if (!Q || typeof Q !== "object") return {};
    let Z = Q.mcpServers;
    if (!Z || typeof Z !== "object") return {};
    let G = {};
    for (let [Y, I] of Object.entries(Z)) {
      if (!I || typeof I !== "object") continue;
      let W = w10.safeParse(I);
      if (W.success) G[Y] = W.data;
    }
    return G;
  } catch (A) {
    return (U1(A instanceof Error ? A : new Error(String(A)), GZA), {});
  }
}
import { cwd as ff } from "process";
var q5 = A1(V1(), 1);
import { homedir as SQQ } from "os";
function MQQ(A) {
  if (A === null || A.disableAllHooks) return !1;
  if (A.statusLine) return !0;
  if (!A.hooks) return !1;
  for (let B of Object.values(A.hooks)) if (B.length > 0) return !0;
  return !1;
}
function TQQ() {
  let A = [],
    B = D8("projectSettings");
  if (MQQ(B)) A.push(".claude/settings.json");
  let Q = D8("localSettings");
  if (MQQ(Q)) A.push(".claude/settings.local.json");
  return A;
}
function OQQ(A) {
  return A.some(
    (B) => B.ruleBehavior === "allow" && (B.ruleValue.toolName === BASH_TOOL_NAME || B.ruleValue.toolName.startsWith(BASH_TOOL_NAME + "(")),
  );
}
function PQQ() {
  let A = [],
    B = Sa("projectSettings");
  if (OQQ(B)) A.push(".claude/settings.json");
  let Q = Sa("localSettings");
  if (OQQ(Q)) A.push(".claude/settings.local.json");
  return A;
}
function Yc1(A, B) {
  if (A.length === 0) return "";
  let Q = B === 0 ? void 0 : B;
  if (!Q || A.length <= Q) {
    if (A.length === 1) return A[0];
    if (A.length === 2) return `${A[0]} and ${A[1]}`;
    let Y = A[A.length - 1];
    return `${A.slice(0, -1).join(", ")}, and ${Y}`;
  }
  let Z = A.slice(0, Q),
    G = A.length - Q;
  if (Z.length === 1) return `${Z[0]} and ${G} more`;
  return `${Z.join(", ")}, and ${G} more`;
}
function RQQ(A) {
  return !!A?.otelHeadersHelper;
}
function jQQ() {
  let A = [],
    B = D8("projectSettings");
  if (RQQ(B)) A.push(".claude/settings.json");
  let Q = D8("localSettings");
  if (RQQ(Q)) A.push(".claude/settings.local.json");
  return A;
}
function yQQ({ onDone: A, commands: B }) {
  let { servers: Q } = QG("project"),
    Z = Object.keys(Q).length > 0,
    G = TQQ(),
    Y = G.length > 0,
    I = PQQ(),
    W = jQQ(),
    J = W.length > 0,
    X = [...new Set([...G, ...I, ...W])],
    F =
      B?.filter(
        (P) =>
          P.type === "prompt" &&
          P.source === "projectSettings" &&
          P.allowedTools?.some((_) => _ === BASH_TOOL_NAME || _.startsWith(BASH_TOOL_NAME + "(")),
      ) ?? [],
    V = F.length > 0,
    K = F.map((P) => P.name),
    H = I.length > 0 || V,
    z = kM(Y || H || J),
    C = [
      {
        name: "MCP servers",
        shouldShowWarning: () => Z,
        onChange: () => {
          let P = { enabledMcpjsonServers: Object.keys(Q), enableAllProjectMcpServers: !0 };
          W4("localSettings", P);
        },
      },
      { name: "hooks", shouldShowWarning: () => Y },
      { name: "bash commands", shouldShowWarning: () => H },
      { name: "OpenTelemetry headers helper commands", shouldShowWarning: () => J },
    ].filter((P) => P.shouldShowWarning()),
    w = new Set(C.map((P) => P.name)),
    E = Object.keys(Q);
  function L() {
    let P = ["files"];
    if (w.has("MCP servers")) P.push("MCP servers");
    if (w.has("hooks")) P.push("hooks");
    if (w.has("bash commands")) P.push("bash commands");
    if (w.has("OpenTelemetry headers helper commands")) P.push("OpenTelemetry headers helper commands");
    return Yc1(P);
  }
  q5.default.useEffect(() => {
    let P = SQQ() === AA();
    Y1("tengu_trust_dialog_shown", {
      isHomeDir: P,
      hasMcpServers: Z,
      hasHooks: Y,
      hasBashExecution: H,
      hasOtelHeadersHelper: J,
    });
  }, [Z, Y, H, J]);
  function O(P) {
    let _ = w9();
    if (P === "exit") {
      G5(1);
      return;
    }
    let b = SQQ() === AA();
    if (
      (Y1("tengu_trust_dialog_accept", {
        isHomeDir: b,
        hasMcpServers: Z,
        hasHooks: Y,
        hasBashExecution: H,
        hasOtelHeadersHelper: J,
        enableMcp: !0,
      }),
      !b)
    )
      i8({ ..._, hasTrustDialogAccepted: !0 });
    (C.forEach((S) => {
      if (S.onChange !== void 0) S.onChange();
    }),
      A());
  }
  let R = Z2();
  if (
    (s0((P, _) => {
      if (_.escape) {
        G5(0);
        return;
      }
    }),
    z)
  )
    return (setTimeout(A), null);
  return q5.default.createElement(
    q5.default.Fragment,
    null,
    q5.default.createElement(
      y,
      { flexDirection: "column", gap: 1, padding: 1, borderStyle: "round", borderColor: "warning" },
      q5.default.createElement(M, { bold: !0, color: "warning" }, "Do you trust the files in this folder?"),
      q5.default.createElement(M, { bold: !0 }, w1().cwd()),
      q5.default.createElement(
        y,
        { flexDirection: "column", gap: 1 },
        q5.default.createElement(
          M,
          null,
          "Claude Code may read, write, or execute files contained in this directory. This can pose security risks, so only use",
          " ",
          L(),
          " from trusted sources.",
        ),
        (Z || Y || H || J) &&
          q5.default.createElement(
            y,
            { flexDirection: "column", gap: 1 },
            q5.default.createElement(M, { dimColor: !0 }, "Execution allowed by:"),
            Z &&
              q5.default.createElement(
                y,
                { paddingLeft: 2 },
                q5.default.createElement(
                  M,
                  null,
                  q5.default.createElement(M, { dimColor: !0 }, "• "),
                  q5.default.createElement(M, { bold: !0 }, ".mcp.json"),
                  E.length > 0 && q5.default.createElement(M, { dimColor: !0 }, " ", "(", Yc1(E, 3), ")"),
                ),
              ),
            X.length > 0 &&
              q5.default.createElement(
                y,
                { paddingLeft: 2 },
                q5.default.createElement(
                  M,
                  null,
                  q5.default.createElement(M, { dimColor: !0 }, "• "),
                  q5.default.createElement(M, { bold: !0 }, X.join(", ")),
                ),
              ),
            V &&
              q5.default.createElement(
                y,
                { paddingLeft: 2 },
                q5.default.createElement(
                  M,
                  null,
                  q5.default.createElement(M, { dimColor: !0 }, "• "),
                  q5.default.createElement(M, { bold: !0 }, ".claude/commands"),
                  q5.default.createElement(M, { dimColor: !0 }, " ", "(", Yc1(K, 3), ")"),
                ),
              ),
          ),
        q5.default.createElement(
          M,
          { dimColor: !0 },
          "Learn more (",
          " ",
          q5.default.createElement(
            H5,
            { url: "https://docs.anthropic.com/s/claude-code-security" },
            "https://docs.anthropic.com/s/claude-code-security",
          ),
          " ",
          ")",
        ),
      ),
      q5.default.createElement(xA, {
        options: [
          { label: "Yes, proceed", value: "enable_all" },
          { label: "No, exit", value: "exit" },
        ],
        onChange: (P) => O(P),
        onCancel: () => O("exit"),
      }),
    ),
    q5.default.createElement(
      y,
      { marginLeft: 3 },
      q5.default.createElement(
        M,
        { dimColor: !0 },
        R.pending
          ? q5.default.createElement(q5.default.Fragment, null, "Press ", R.keyName, " again to exit")
          : q5.default.createElement(q5.default.Fragment, null, "Enter to confirm · Esc to exit"),
      ),
    ),
  );
}
var F_0 = A1(V1(), 1);
var oX1 = A1(V1(), 1);
var Ic1 = A1(V1(), 1);
function kQQ({
  context: A,
  commands: B,
  logs: Q,
  initialTools: Z,
  mcpClients: G,
  dynamicMcpConfig: Y,
  appState: I,
  onChangeAppState: W,
  debug: J,
  strictMcpConfig: X = !1,
  appendSystemPrompt: F,
  agentDefinitions: V,
}) {
  let { rows: K } = IB(),
    H = Q.filter((C) => !C.isSidechain);
  Z2();
  function z() {
    process.exit(1);
  }
  async function D(C) {
    let w = Q[C];
    if (!w) return;
    try {
      A.unmount?.();
      let E = await nb(w, Z);
      if (!E) throw new Error("Failed to load conversation");
      (await n7(),
        s6(
          Ic1.default.createElement(
            M7,
            { initialState: I, onChangeAppState: W },
            Ic1.default.createElement(H21, {
              initialPrompt: "",
              debug: J,
              commands: B,
              initialTools: Z,
              initialMessages: E.messages,
              initialCheckpoints: E.log.checkpoints,
              mcpClients: G,
              dynamicMcpConfig: Y,
              strictMcpConfig: X,
              appendSystemPrompt: F,
              agentDefinitions: V,
            }),
          ),
          { exitOnCtrlC: !1 },
        ));
    } catch (E) {
      throw (U1(E, cGA), E);
    }
  }
  return Ic1.default.createElement(GW1, { logs: H, maxHeight: K, onCancel: z, onSelect: D });
}
var _QQ = A1(f$0(), 1);
class V_0 extends RY1 {
  constructor(A, B) {
    var Q;
    super(B);
    ((this._serverInfo = A),
      (this._capabilities =
        (Q = B === null || B === void 0 ? void 0 : B.capabilities) !== null && Q !== void 0 ? Q : {}),
      (this._instructions = B === null || B === void 0 ? void 0 : B.instructions),
      this.setRequestHandler(tU0, (Z) => this._oninitialize(Z)),
      this.setNotificationHandler($x1, () => {
        var Z;
        return (Z = this.oninitialized) === null || Z === void 0 ? void 0 : Z.call(this);
      }));
  }
  registerCapabilities(A) {
    if (this.transport) throw new Error("Cannot register capabilities after connecting to transport");
    this._capabilities = Lx1(this._capabilities, A);
  }
  assertCapabilityForMethod(A) {
    var B, Q, Z;
    switch (A) {
      case "sampling/createMessage":
        if (!((B = this._clientCapabilities) === null || B === void 0 ? void 0 : B.sampling))
          throw new Error(`Client does not support sampling (required for ${A})`);
        break;
      case "elicitation/create":
        if (!((Q = this._clientCapabilities) === null || Q === void 0 ? void 0 : Q.elicitation))
          throw new Error(`Client does not support elicitation (required for ${A})`);
        break;
      case "roots/list":
        if (!((Z = this._clientCapabilities) === null || Z === void 0 ? void 0 : Z.roots))
          throw new Error(`Client does not support listing roots (required for ${A})`);
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(A) {
    switch (A) {
      case "notifications/message":
        if (!this._capabilities.logging) throw new Error(`Server does not support logging (required for ${A})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources)
          throw new Error(`Server does not support notifying about resources (required for ${A})`);
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools)
          throw new Error(`Server does not support notifying of tool list changes (required for ${A})`);
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts)
          throw new Error(`Server does not support notifying of prompt list changes (required for ${A})`);
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(A) {
    switch (A) {
      case "sampling/createMessage":
        if (!this._capabilities.sampling) throw new Error(`Server does not support sampling (required for ${A})`);
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) throw new Error(`Server does not support logging (required for ${A})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) throw new Error(`Server does not support prompts (required for ${A})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) throw new Error(`Server does not support resources (required for ${A})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) throw new Error(`Server does not support tools (required for ${A})`);
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  async _oninitialize(A) {
    let B = A.params.protocolVersion;
    return (
      (this._clientCapabilities = A.params.capabilities),
      (this._clientVersion = A.params.clientInfo),
      {
        protocolVersion: Hx1.includes(B) ? B : API_VERSION_DATE,
        capabilities: this.getCapabilities(),
        serverInfo: this._serverInfo,
        ...(this._instructions && { instructions: this._instructions }),
      }
    );
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, nj);
  }
  async createMessage(A, B) {
    return this.request({ method: "sampling/createMessage", params: A }, J$0, B);
  }
  async elicitInput(A, B) {
    let Q = await this.request({ method: "elicitation/create", params: A }, X$0, B);
    if (Q.action === "accept" && Q.content)
      try {
        let Z = new _QQ.default(),
          G = Z.compile(A.requestedSchema);
        if (!G(Q.content))
          throw new iV(
            pV.InvalidParams,
            `Elicitation response content does not match requested schema: ${Z.errorsText(G.errors)}`,
          );
      } catch (Z) {
        if (Z instanceof iV) throw Z;
        throw new iV(pV.InternalError, `Error validating elicitation response: ${Z}`);
      }
    return Q;
  }
  async listRoots(A, B) {
    return this.request({ method: "roots/list", params: A }, K$0, B);
  }
  async sendLoggingMessage(A) {
    return this.notification({ method: "notifications/message", params: A });
  }
  async sendResourceUpdated(A) {
    return this.notification({ method: "notifications/resources/updated", params: A });
  }
  async sendResourceListChanged() {
    return this.notification({ method: "notifications/resources/list_changed" });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
}
import xQQ from "node:process";
class K_0 {
  constructor(A = xQQ.stdin, B = xQQ.stdout) {
    ((this._stdin = A),
      (this._stdout = B),
      (this._readBuffer = new PY1()),
      (this._started = !1),
      (this._ondata = (Q) => {
        (this._readBuffer.append(Q), this.processReadBuffer());
      }),
      (this._onerror = (Q) => {
        var Z;
        (Z = this.onerror) === null || Z === void 0 || Z.call(this, Q);
      }));
  }
  async start() {
    if (this._started)
      throw new Error(
        "StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.",
      );
    ((this._started = !0), this._stdin.on("data", this._ondata), this._stdin.on("error", this._onerror));
  }
  processReadBuffer() {
    var A, B;
    while (!0)
      try {
        let Q = this._readBuffer.readMessage();
        if (Q === null) break;
        (A = this.onmessage) === null || A === void 0 || A.call(this, Q);
      } catch (Q) {
        (B = this.onerror) === null || B === void 0 || B.call(this, Q);
      }
  }
  async close() {
    var A;
    if (
      (this._stdin.off("data", this._ondata),
      this._stdin.off("error", this._onerror),
      this._stdin.listenerCount("data") === 0)
    )
      this._stdin.pause();
    (this._readBuffer.clear(), (A = this.onclose) === null || A === void 0 || A.call(this));
  }
  send(A) {
    return new Promise((B) => {
      let Q = cx1(A);
      if (this._stdout.write(Q)) B();
      else this._stdout.once("drain", B);
    });
  }
}
var vQQ = [Dh1];
async function bQQ(A, B, Q) {
  let G = mj(100);
  V$(A);
  let Y = new V_0(
    {
      name: "claude/tengu",
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "1.0.119",
      }.VERSION,
    },
    { capabilities: { tools: {} } },
  );
  (Y.setRequestHandler(I$0, async () => {
    let W = GS(),
      J = vE(W, H0().todoFeatureEnabled);
    return {
      tools: await Promise.all(
        J.map(async (X) => ({
          ...X,
          description: await X.prompt({ getToolPermissionContext: async () => W, tools: J }),
          inputSchema: rg(X.inputSchema),
        })),
      ),
    };
  }),
    Y.setRequestHandler(W$0, async ({ params: { name: W, arguments: J } }) => {
      let X = GS(),
        F = vE(X, H0().todoFeatureEnabled),
        V = F.find((K) => K.name === W);
      if (!V) throw new Error(`Tool ${W} not found`);
      try {
        if (!V.isEnabled()) throw new Error(`Tool ${W} is not enabled`);
        let K = uG(),
          H = await V.validateInput?.(J ?? {}, {
            abortController: C4(),
            options: {
              commands: vQQ,
              tools: F,
              mainLoopModel: K,
              maxThinkingTokens: 0,
              mcpClients: [],
              mcpResources: {},
              isNonInteractiveSession: !0,
              debug: B,
              verbose: Q,
            },
            getAppState: async () => a01(),
            setAppState: () => {},
            messages: [],
            setMessages: () => {},
            messageQueueManager: TS(),
            readFileState: G,
            setInProgressToolUseIDs: () => {},
            setResponseLength: () => {},
            updateFileHistoryState: () => {},
            agentId: U2(),
          });
        if (H && !H.result) throw new Error(`Tool ${W} input is invalid: ${H.message}`);
        let z = V.call(
            J ?? {},
            {
              abortController: C4(),
              options: {
                commands: vQQ,
                tools: F,
                mainLoopModel: uG(),
                maxThinkingTokens: 0,
                mcpClients: [],
                mcpResources: {},
                isNonInteractiveSession: !0,
                debug: B,
                verbose: Q,
              },
              getAppState: async () => a01(),
              setAppState: () => {},
              messages: [],
              setMessages: () => {},
              messageQueueManager: TS(),
              readFileState: G,
              setInProgressToolUseIDs: () => {},
              setResponseLength: () => {},
              updateFileHistoryState: () => {},
              agentId: U2(),
            },
            Zq,
            wE({ content: [] }),
          ),
          D = await QO(z);
        if (D.type !== "result") throw new Error(`Tool ${W} did not return a result`);
        return {
          content: Array.isArray(D)
            ? D.map((C) => ({ type: "text", text: "text" in C ? C.text : JSON.stringify(C) }))
            : [{ type: "text", text: typeof D === "string" ? D : JSON.stringify(D.data) }],
        };
      } catch (K) {
        return (
          U1(K instanceof Error ? K : new Error(String(K)), IGA),
          { isError: !0, content: [{ type: "text", text: `Error: ${K instanceof Error ? K.message : String(K)}` }] }
        );
      }
    }));
  async function I() {
    let W = new K_0();
    await Y.connect(W);
  }
  return await I();
}
import { join as NB1 } from "path";
var ds5 = 30;
function gQQ() {
  let Q = ((E2() || {}).cleanupPeriodDays ?? ds5) * 24 * 60 * 60 * 1000;
  return new Date(Date.now() - Q);
}
function cs5(A, B) {
  return { messages: A.messages + B.messages, errors: A.errors + B.errors };
}
function ls5(A) {
  let B = A.split(".")[0].replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
  return new Date(B);
}
function fQQ(A, B, Q) {
  let Z = { messages: 0, errors: 0 };
  try {
    let G = w1().readdirSync(A);
    for (let Y of G)
      try {
        if (ls5(Y.name) < B)
          if ((w1().unlinkSync(NB1(A, Y.name)), Q)) Z.messages++;
          else Z.errors++;
      } catch (I) {
        U1(I, IZA);
      }
  } catch (G) {
    if (G instanceof Error && "code" in G && G.code !== "ENOENT") U1(G, YZA);
  }
  return Z;
}
async function ps5() {
  let A = w1(),
    B = gQQ(),
    Q = kO.errors(),
    Z = kO.baseLogs(),
    G = fQQ(Q, B, !1);
  try {
    if (A.existsSync(Z)) {
      let I = A.readdirSync(Z)
        .filter((W) => W.isDirectory() && W.name.startsWith("mcp-logs-"))
        .map((W) => NB1(Z, W.name));
      for (let W of I) {
        G = cs5(G, fQQ(W, B, !0));
        try {
          if (A.isDirEmptySync(W)) A.rmdirSync(W);
        } catch {}
      }
    }
  } catch (Y) {
    if (Y instanceof Error && "code" in Y && Y.code !== "ENOENT") U1(Y, STYLE_CODE_81);
  }
  return G;
}
function hQQ(A, B, Q, Z) {
  let G = { messages: 0, errors: 0 };
  if (!Z.existsSync(A)) return G;
  let I = Z.readdirSync(A).filter((W) => W.isFile() && W.name.endsWith(Q));
  for (let W of I)
    try {
      let J = NB1(A, W.name);
      if (Z.statSync(J).mtime < B) (Z.unlinkSync(J), G.messages++);
    } catch {
      G.errors++;
    }
  try {
    if (Z.isDirEmptySync(A)) Z.rmdirSync(A);
  } catch {
    G.errors++;
  }
  return G;
}
function is5() {
  let A = gQQ(),
    B = { messages: 0, errors: 0 },
    Q = NJ1(),
    Z = w1();
  try {
    if (!Z.existsSync(Q)) return B;
    let Y = Z.readdirSync(Q)
      .filter((I) => I.isDirectory())
      .map((I) => NB1(Q, I.name));
    for (let I of Y)
      try {
        let W = hQQ(I, A, ".jsonl", Z);
        ((B.messages += W.messages), (B.errors += W.errors));
        let J = NB1(I, "bash-outputs");
        if (Z.existsSync(J))
          try {
            let X = Z.readdirSync(J);
            for (let F of X)
              if (F.isDirectory()) {
                let V = NB1(J, F.name),
                  K = hQQ(V, A, ".txt", Z);
                ((B.messages += K.messages), (B.errors += K.errors));
              }
            if (Z.isDirEmptySync(J)) Z.rmdirSync(J);
          } catch {
            B.errors++;
          }
        try {
          if (Z.isDirEmptySync(I)) Z.rmdirSync(I);
        } catch {}
      } catch {
        B.errors++;
        continue;
      }
  } catch {
    B.errors++;
  }
  return B;
}
function uQQ() {
  setImmediate(() => {
    (ps5(), is5());
  }).unref();
}
import { join as dQQ, basename as ns5 } from "path";
var as5 = `
Summarize this coding conversation in under 50 characters.
Capture the main task, key files, problems addressed, and current status.
`.trim(),
  mQQ = 50000;
function ss5() {
  let A = TU(),
    B = Nb(A);
  if (B <= mQQ) return Math.floor(B * 0.8);
  return B - mQQ;
}
function rs5(A) {
  return OI(A)
    .map((B) => {
      if (B.type === "user") {
        if (typeof B.message.content === "string") return `User: ${B.message.content}`;
        else if (Array.isArray(B.message.content))
          return `User: ${B.message.content
            .filter((Q) => Q.type === "text")
            .map((Q) => (Q.type === "text" ? Q.text : ""))
            .join(
              `
`,
            )
            .trim()}`;
      } else if (B.type === "assistant") {
        let Q = $b(B);
        if (Q) return `Claude: ${$Y1(Q).trim()}`;
      }
      return null;
    })
    .filter((B) => B !== null).join(`

`);
}
async function os5(A) {
  if (!A.length) throw new Error("Can't summarize empty conversation");
  let B = [],
    Q = 0,
    Z = ss5();
  for (let X = A.length - 1; X >= 0; X--) {
    let F = A[X];
    if (!F) continue;
    let V = jX([F]);
    if (Q + V > Z) break;
    (B.unshift(F), (Q += V));
  }
  let G = B.length < A.length;
  F1(
    G
      ? `Summarizing last ${B.length} of ${A.length} messages (~${Q} tokens)`
      : `Summarizing all ${A.length} messages (~${Q} tokens)`,
  );
  let Y = rs5(B),
    W = [
      `Please write a 5-10 word title for the following conversation:

${
  G
    ? `[Last ${B.length} of ${A.length} messages]

`
    : ""
}${Y}
`,
      "Respond with the title for the conversation and nothing else.",
    ];
  return (
    await NI({
      systemPrompt: [as5],
      userPrompt: W.join(`
`),
      enablePromptCaching: !0,
      isNonInteractiveSession: !1,
      promptCategory: "summarize_convo",
    })
  ).message.content
    .filter((X) => X.type === "text")
    .map((X) => X.text)
    .join("");
}
function ts5(A) {
  return dQQ(NJ1(), A.replace(/[^a-zA-Z0-9]/g, "-"));
}
function es5(A) {
  let B = w1();
  try {
    B.statSync(A);
  } catch {
    return [];
  }
  return B.readdirSync(A)
    .filter((Z) => Z.isFile() && Z.name.endsWith(".jsonl"))
    .map((Z) => dQQ(A, Z.name))
    .sort((Z, G) => {
      let Y = B.statSync(Z);
      return B.statSync(G).mtime.getTime() - Y.mtime.getTime();
    });
}
function Ar5(A, B) {
  let Q = [],
    Z = A;
  while (Z) {
    let { isSidechain: G, parentUuid: Y, ...I } = Z;
    (Q.unshift(I), (Z = Z.parentUuid ? B.get(Z.parentUuid) : void 0));
  }
  return Q;
}
function Br5(A) {
  let B = new Set([...A.values()].map((Q) => Q.parentUuid).filter((Q) => Q !== null));
  return [...A.values()].filter((Q) => !B.has(Q.uuid));
}
function Qr5(A) {
  let B = w1();
  try {
    let { buffer: Q } = B.readSync(A, { length: 512 }),
      Z = Q.toString("utf8"),
      G = Z.indexOf(`
`);
    if (G === -1) return JSON.parse(Z.trim()).type === "summary";
    let Y = Z.substring(0, G);
    return JSON.parse(Y).type === "summary";
  } catch {
    return !1;
  }
}
async function cQQ() {
  let A = ts5(AA()),
    B = es5(A);
  for (let Q of B)
    try {
      if (Qr5(Q)) break;
      if (!tV(ns5(Q, ".jsonl"))) continue;
      let { messages: Y, summaries: I } = await lR0(Q),
        W = Br5(Y);
      for (let J of W) {
        if (I.has(J.uuid)) continue;
        let X = Ar5(J, Y);
        if (X.length === 0) continue;
        try {
          let F = await os5(X);
          if (F) await xRB(J.uuid, F);
        } catch (F) {
          U1(F instanceof Error ? F : new Error(String(F)), zYA);
        }
      }
    } catch (Z) {
      U1(Z instanceof Error ? Z : new Error(String(Z)), DYA);
    }
}
import { resolve as U9Q } from "path";
var tX1 = A1(V1(), 1);
var Yz = A1(V1(), 1);
var H_0 = A1(V1(), 1);
function Wc1() {
  return H_0.default.createElement(
    M,
    null,
    "MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the",
    " ",
    H_0.default.createElement(_01, { url: "https://docs.anthropic.com/s/claude-code-mcp" }, "MCP documentation"),
    ".",
  );
}
function lQQ({ serverNames: A, onDone: B }) {
  function Q(G) {
    let Y = E2() || {},
      I = Y.enabledMcpjsonServers || [],
      W = Y.disabledMcpjsonServers || [],
      [J, X] = Dl1(A, (F) => G.includes(F));
    if ((Y1("tengu_mcp_multidialog_choice", { approved: J.length, rejected: X.length }), J.length > 0)) {
      let F = [...new Set([...I, ...J])];
      W4("localSettings", { enabledMcpjsonServers: F });
    }
    if (X.length > 0) {
      let F = [...new Set([...W, ...X])];
      W4("localSettings", { disabledMcpjsonServers: F });
    }
    B();
  }
  let Z = Z2();
  return (
    s0((G, Y) => {
      if (Y.escape) {
        let W = (E2() || {}).disabledMcpjsonServers || [],
          J = [...new Set([...W, ...A])];
        (W4("localSettings", { disabledMcpjsonServers: J }), B());
        return;
      }
    }),
    Yz.default.createElement(
      Yz.default.Fragment,
      null,
      Yz.default.createElement(
        y,
        { flexDirection: "column", gap: 1, padding: 1, borderStyle: "round", borderColor: "warning" },
        Yz.default.createElement(M, { bold: !0, color: "warning" }, A.length, " new MCP servers found in .mcp.json"),
        Yz.default.createElement(M, null, "Select any you wish to enable."),
        Yz.default.createElement(Wc1, null),
        Yz.default.createElement(Gc1, {
          options: A.map((G) => ({ label: G, value: G })),
          defaultValue: A,
          onSubmit: Q,
        }),
      ),
      Yz.default.createElement(
        y,
        { marginLeft: 3 },
        Yz.default.createElement(
          M,
          { dimColor: !0 },
          Z.pending
            ? Yz.default.createElement(Yz.default.Fragment, null, "Press ", Z.keyName, " again to exit")
            : Yz.default.createElement(
                Yz.default.Fragment,
                null,
                "Space to select · Enter to confirm · Esc to reject all",
              ),
        ),
      ),
    )
  );
}
var oD = A1(V1(), 1);
function pQQ({ serverName: A, onDone: B }) {
  function Q(G) {
    switch ((Y1("tengu_mcp_dialog_choice", { choice: G }), G)) {
      case "yes":
      case "yes_all": {
        let I = (E2() || {}).enabledMcpjsonServers || [];
        if (!I.includes(A)) W4("localSettings", { enabledMcpjsonServers: [...I, A] });
        if (G === "yes_all") W4("localSettings", { enableAllProjectMcpServers: !0 });
        B();
        break;
      }
      case "no": {
        let I = (E2() || {}).disabledMcpjsonServers || [];
        if (!I.includes(A)) W4("localSettings", { disabledMcpjsonServers: [...I, A] });
        B();
        break;
      }
    }
  }
  let Z = Z2();
  return (
    s0((G, Y) => {
      if (Y.escape) {
        B();
        return;
      }
    }),
    oD.default.createElement(
      oD.default.Fragment,
      null,
      oD.default.createElement(
        y,
        { flexDirection: "column", gap: 1, padding: 1, borderStyle: "round", borderColor: "warning" },
        oD.default.createElement(M, { bold: !0, color: "warning" }, "New MCP server found in .mcp.json: ", A),
        oD.default.createElement(Wc1, null),
        oD.default.createElement(xA, {
          options: [
            { label: "Use this and all future MCP servers in this project", value: "yes_all" },
            { label: "Use this MCP server", value: "yes" },
            { label: "Continue without using this MCP server", value: "no" },
          ],
          onChange: (G) => Q(G),
          onCancel: () => Q("no"),
        }),
      ),
      oD.default.createElement(
        y,
        { marginLeft: 3 },
        oD.default.createElement(
          M,
          { dimColor: !0 },
          Z.pending
            ? oD.default.createElement(oD.default.Fragment, null, "Press ", Z.keyName, " again to exit")
            : oD.default.createElement(oD.default.Fragment, null, "Enter to confirm · Esc to reject"),
        ),
      ),
    )
  );
}
async function iQQ() {
  let { servers: A } = QG("project"),
    B = Object.keys(A).filter((Q) => JU1(Q) === "pending");
  if (B.length === 0) return;
  await new Promise((Q) => {
    let Z = () => {
      process.stdout.write("\x1B[2J\x1B[3J\x1B[H", () => {
        Q();
      });
    };
    if (B.length === 1 && B[0] !== void 0) {
      let G = s6(
        tX1.default.createElement(
          M7,
          null,
          tX1.default.createElement(pQQ, {
            serverName: B[0],
            onDone: () => {
              (G.unmount?.(), Z());
            },
          }),
        ),
        { exitOnCtrlC: !1 },
      );
    } else {
      let G = s6(
        tX1.default.createElement(
          M7,
          null,
          tX1.default.createElement(lQQ, {
            serverNames: B,
            onDone: () => {
              (G.unmount?.(), Z());
            },
          }),
        ),
        { exitOnCtrlC: !1 },
      );
    }
  });
}
var SJ = A1(V1(), 1);
function nQQ({ onAccept: A }) {
  SJ.default.useEffect(() => {
    Y1("tengu_bypass_permissions_mode_dialog_shown", {});
  }, []);
  function B(Z) {
    let G = H0();
    switch (Z) {
      case "accept": {
        (Y1("tengu_bypass_permissions_mode_dialog_accept", {}), TA({ ...G, bypassPermissionsModeAccepted: !0 }), A());
        break;
      }
      case "decline": {
        G5(1);
        break;
      }
    }
  }
  let Q = Z2();
  return (
    s0((Z, G) => {
      if (G.escape) {
        G5(0);
        return;
      }
    }),
    SJ.default.createElement(
      SJ.default.Fragment,
      null,
      SJ.default.createElement(
        y,
        { flexDirection: "column", gap: 1, padding: 1, borderStyle: "round", borderColor: "error" },
        SJ.default.createElement(
          M,
          { bold: !0, color: "error" },
          "WARNING: Claude Code running in Bypass Permissions mode",
        ),
        SJ.default.createElement(
          y,
          { flexDirection: "column", gap: 1 },
          SJ.default.createElement(
            M,
            null,
            "In Bypass Permissions mode, Claude Code will not ask for your approval before running potentially dangerous commands.",
            SJ.default.createElement(l3, null),
            "This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged.",
          ),
          SJ.default.createElement(
            M,
            null,
            "By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode.",
          ),
          SJ.default.createElement(H5, { url: "https://docs.anthropic.com/s/claude-code-security" }),
        ),
        SJ.default.createElement(xA, {
          options: [
            { label: "No, exit", value: "decline" },
            { label: "Yes, I accept", value: "accept" },
          ],
          onChange: (Z) => B(Z),
          onCancel: () => B("decline"),
        }),
      ),
      SJ.default.createElement(
        y,
        { marginLeft: 3 },
        SJ.default.createElement(
          M,
          { dimColor: !0 },
          Q.pending
            ? SJ.default.createElement(SJ.default.Fragment, null, "Press ", Q.keyName, " again to exit")
            : SJ.default.createElement(SJ.default.Fragment, null, "Enter to confirm · Esc to exit"),
        ),
      ),
    )
  );
}
function bl({ newState: A, oldState: B }) {
  if (B !== null && A.mainLoopModel !== B.mainLoopModel && A.mainLoopModel === null)
    (W4("userSettings", { model: void 0 }), Lg(null));
  if (B !== null && A.mainLoopModel !== B.mainLoopModel && A.mainLoopModel !== null)
    (W4("userSettings", { model: A.mainLoopModel }), Lg(A.mainLoopModel));
  if (A.maxRateLimitFallbackActive !== _n()) H7A(A.maxRateLimitFallbackActive);
  if (B !== null && A.todoFeatureEnabled !== B.todoFeatureEnabled && H0().todoFeatureEnabled !== A.todoFeatureEnabled)
    TA({ ...H0(), todoFeatureEnabled: A.todoFeatureEnabled });
  if (B !== null && A.showExpandedTodos !== B.showExpandedTodos && H0().showExpandedTodos !== A.showExpandedTodos)
    TA({ ...H0(), showExpandedTodos: A.showExpandedTodos });
  if (B !== null && A.todos !== B.todos) for (let Q in A.todos) Sb1(A.todos[Q], Q);
  if (B !== null && A.verbose !== B.verbose && H0().verbose !== A.verbose) TA({ ...H0(), verbose: A.verbose });
}
function aQQ() {
  let A = H0();
  if (!A.apiKeyHelper) return;
  try {
    (W4("userSettings", { apiKeyHelper: A.apiKeyHelper }),
      TA({ ...H0(), apiKeyHelper: void 0 }),
      Y1("tengu_migrate_apikeyhelper_success", {}));
  } catch {
    Y1("tengu_migrate_apikeyhelper_error", {});
  }
}
function sQQ() {
  let A = H0();
  if (!A.env || Object.keys(A.env).length === 0) return;
  try {
    let B = D8("userSettings"),
      Q = B?.env || {},
      Z = { ...A.env, ...Q };
    (W4("userSettings", { ...B, env: Z }),
      TA({ ...H0(), env: {} }),
      Y1("tengu_migrate_globalconfig_env_success", { numEnvVars: Object.keys(A.env).length }));
  } catch {
    Y1("tengu_migrate_globalconfig_env_error", {});
  }
}
function rQQ() {
  let A = H0();
  if (A.autoUpdates !== !1 || A.autoUpdatesProtectedForNative === !0) return;
  try {
    let B = D8("userSettings") || {};
    (W4("userSettings", { ...B, env: { ...B.env, DISABLE_AUTOUPDATER: "1" } }),
      Y1("tengu_migrate_autoupdates_to_settings", {
        was_user_preference: !0,
        already_had_env_var: !!B.env?.DISABLE_AUTOUPDATER,
      }),
      (process.env.DISABLE_AUTOUPDATER = "1"));
    let { autoUpdates: Q, autoUpdatesProtectedForNative: Z, ...G } = A;
    TA(G);
  } catch (B) {
    (U1(new Error(`Failed to migrate auto-updates: ${B}`), zGA),
      Y1("tengu_migrate_autoupdates_error", { has_error: !0 }));
  }
}
var eX1 = A1(V1(), 1);
async function oQQ() {
  if (!((await WW("force_local_installation_migration")) && !xv() && !print && !EQ(!1) && !0 && !Oc())) return;
  (console.log(n1.yellow("⚠️ Migrating Claude CLI to local installation...")),
    console.log("This improves auto-updates and removes dependency on global npm permissions."),
    console.log("Your existing configuration and history will be preserved."));
  try {
    (Y1("tengu_forced_migration_start", { gateControlled: !0 }),
      await new Promise((B) => {
        let { waitUntilExit: Q } = s6(eX1.createElement(M7, null, eX1.createElement(SA1, null)));
        Q().then(() => {
          B();
        });
      }),
      Y1("tengu_forced_migration_success", { gateControlled: !0 }),
      console.log(n1.green("✅ Migration complete!")),
      console.log("Please restart Claude CLI to use the new installation."),
      process.exit(0));
  } catch (B) {
    let Q = B instanceof Error ? B : new Error(String(B));
    (U1(Q, HGA),
      Y1("tengu_forced_migration_failure", { gateControlled: !0 }),
      console.log(n1.red("⚠️ Migration encountered an error, continuing with global installation.")));
  }
}
function tQQ() {
  let A = w9(),
    B = A.enableAllProjectMcpServers !== void 0,
    Q = A.enabledMcpjsonServers && A.enabledMcpjsonServers.length > 0,
    Z = A.disabledMcpjsonServers && A.disabledMcpjsonServers.length > 0;
  if (!B && !Q && !Z) return;
  try {
    let G = D8("localSettings") || {},
      Y = {},
      I = [];
    if (B && G.enableAllProjectMcpServers === void 0)
      ((Y.enableAllProjectMcpServers = A.enableAllProjectMcpServers), I.push("enableAllProjectMcpServers"));
    else if (B) I.push("enableAllProjectMcpServers");
    if (Q && A.enabledMcpjsonServers) {
      let W = G.enabledMcpjsonServers || [];
      ((Y.enabledMcpjsonServers = [...new Set([...W, ...A.enabledMcpjsonServers])]), I.push("enabledMcpjsonServers"));
    }
    if (Z && A.disabledMcpjsonServers) {
      let W = G.disabledMcpjsonServers || [];
      ((Y.disabledMcpjsonServers = [...new Set([...W, ...A.disabledMcpjsonServers])]),
        I.push("disabledMcpjsonServers"));
    }
    if (Object.keys(Y).length > 0) W4("localSettings", Y);
    if (I.length > 0) {
      let W = w9(),
        { enableAllProjectMcpServers: J, enabledMcpjsonServers: X, disabledMcpjsonServers: F, ...V } = W;
      if (
        I.includes("enableAllProjectMcpServers") ||
        I.includes("enabledMcpjsonServers") ||
        I.includes("disabledMcpjsonServers")
      )
        i8(V);
    }
    Y1("tengu_migrate_mcp_approval_fields_success", { migratedCount: I.length });
  } catch {
    Y1("tengu_migrate_mcp_approval_fields_error", {});
  }
}
import { randomUUID as Yr5 } from "crypto";
var Fd3 = pB.object({
    tool_name: pB.string().describe("The name of the tool requesting permission"),
    input: pB.record(pB.unknown()).describe("The input for the tool"),
    tool_use_id: pB.string().optional().describe("The unique tool use request ID"),
  }),
  Zr5 = pB.object({
    behavior: pB.literal("allow"),
    updatedInput: pB.record(pB.unknown()),
    updatedPermissions: pB.array(z$A).optional(),
  }),
  Gr5 = pB.object({ behavior: pB.literal("deny"), message: pB.string(), interrupt: pB.boolean().optional() }),
  Jc1 = pB.union([Zr5, Gr5]);
function AF1(A, B, Q, Z) {
  let G = { type: "permissionPromptTool", permissionPromptToolName: B.name, toolResult: A };
  if (A.behavior === "allow") {
    let Y = A.updatedPermissions;
    if (Y) (Z.setAppState((I) => ({ ...I, toolPermissionContext: pg(I.toolPermissionContext, Y) })), GU1(Y));
    return { ...A, decisionReason: G };
  } else if (A.behavior === "deny" && A.interrupt) Z.abortController.abort("tool-rejection");
  return { ...A, decisionReason: G };
}
class BF1 {
  input;
  structuredInput;
  pendingRequests = new Map();
  inputClosed = !1;
  constructor(A) {
    this.input = A;
    ((this.input = A), (this.structuredInput = this.read()));
  }
  async *read() {
    let A = "";
    for await (let B of this.input) {
      A += B;
      let Q;
      while (
        (Q = A.indexOf(`
`)) !== -1
      ) {
        let Z = A.slice(0, Q);
        A = A.slice(Q + 1);
        let G = this.processLine(Z);
        if (G) yield G;
      }
    }
    if (A) {
      let B = this.processLine(A);
      if (B) yield B;
    }
    this.inputClosed = !0;
    for (let B of this.pendingRequests.values())
      B.reject(new Error("Tool permission stream closed before response received"));
  }
  processLine(A) {
    try {
      let B = JSON.parse(A);
      if (B.type === "control_response") {
        let Q = this.pendingRequests.get(B.response.request_id);
        if (!Q) {
          console.error(`No pending request for ID: ${B.response.request_id}`);
          return;
        }
        if ((this.pendingRequests.delete(B.response.request_id), B.response.subtype === "error")) {
          Q.reject(new Error(B.response.error));
          return;
        }
        let Z = B.response.response;
        if (Q.schema)
          try {
            Q.resolve(Q.schema.parse(Z));
          } catch (G) {
            Q.reject(G);
          }
        else Q.resolve({});
        return;
      }
      if (B.type !== "user" && B.type !== "control_request")
        z_0(`Error: Expected message type 'user' or 'control', got '${B.type}'`);
      if (B.type === "control_request") {
        if (!B.request) z_0("Error: Missing request on control_request");
        return B;
      }
      if (B.message.role !== "user") z_0(`Error: Expected message role 'user', got '${B.message.role}'`);
      return B;
    } catch (B) {
      (console.error(`Error parsing streaming input line: ${A}: ${B}`), process.exit(1));
    }
  }
  write(A) {
    eZ(
      JSON.stringify(A) +
        `
`,
    );
  }
  async sendRequest(A, B, Q) {
    let Z = Yr5(),
      G = { type: "control_request", request_id: Z, request: A };
    if (this.inputClosed) throw new Error("Stream closed");
    if (Q?.aborted) throw new Error("Request aborted");
    this.write(G);
    let Y = () => {
      this.write({ type: "control_cancel_request", request_id: Z });
    };
    if (Q) Q.addEventListener("abort", Y, { once: !0 });
    try {
      return await new Promise((I, W) => {
        this.pendingRequests.set(Z, {
          resolve: (J) => {
            I(J);
          },
          reject: W,
          schema: B,
        });
      });
    } finally {
      if (Q) Q.removeEventListener("abort", Y);
      this.pendingRequests.delete(Z);
    }
  }
  createCanUseTool() {
    return async (A, B, Q, Z, G) => {
      let Y = await Zq(A, B, Q, Z, G);
      if (Y.behavior === "allow" || Y.behavior === "deny") return Y;
      try {
        let I = await this.sendRequest(
          { subtype: "can_use_tool", tool_name: A.name, input: B, permission_suggestions: Y.suggestions },
          Jc1,
          Q.abortController.signal,
        );
        return AF1(I, A, B, Q);
      } catch (I) {
        return AF1({ behavior: "deny", message: `Tool permission request failed: ${I}` }, A, B, Q);
      }
    };
  }
  createHookCallback(A) {
    return {
      type: "callback",
      callback: async (B, Q, Z) => {
        try {
          return await this.sendRequest(
            { subtype: "hook_callback", callback_id: A, input: B, tool_use_id: Q || void 0 },
            a$1,
            Z,
          );
        } catch (G) {
          return (console.error(`Error in hook callback ${A}:`, G), {});
        }
      },
    };
  }
  async sendMcpMessage(A, B) {
    return (
      await this.sendRequest(
        { subtype: "mcp_message", server_name: A, message: B },
        f.object({ mcp_response: f.any() }),
      )
    ).mcp_response;
  }
}
function z_0(A) {
  (console.error(A), process.exit(1));
}
import { URL as Fr5 } from "url";
import { PassThrough as Vr5 } from "stream";
y61();
var Ir5 = 1000,
  eQQ = 3,
  Wr5 = 1000,
  Jr5 = 30000,
  Xr5 = 1e4;
class D_0 {
  ws = null;
  lastSentId = null;
  url;
  state = "idle";
  onData;
  onCloseCallback;
  headers;
  reconnectAttempts = 0;
  reconnectTimer = null;
  pingInterval = null;
  messageBuffer;
  constructor(A, B = {}) {
    ((this.url = A), (this.headers = B), (this.messageBuffer = new f61(Ir5)));
  }
  connect() {
    if (this.state !== "idle" && this.state !== "reconnecting") {
      d0(`WebSocketTransport: Cannot connect, current state is ${this.state}`);
      return;
    }
    ((this.state = "reconnecting"), F1(`WebSocketTransport: Opening ${this.url.href}`));
    let A = { ...this.headers };
    if (this.lastSentId)
      ((A["X-Last-Request-Id"] = this.lastSentId),
        F1(`WebSocketTransport: Adding X-Last-Request-Id header: ${this.lastSentId}`));
    ((this.ws = new zL(this.url.href, { headers: A })),
      this.ws.on("open", () => {
        F1("WebSocketTransport: Connected");
        let B = this.ws.upgradeReq;
        if (B?.headers?.["x-last-request-id"]) {
          let Q = B.headers["x-last-request-id"];
          this.replayBufferedMessages(Q);
        }
        ((this.reconnectAttempts = 0), (this.state = "connected"), this.startPingInterval());
      }),
      this.ws.on("message", (B) => {
        let Q = B.toString();
        if (this.onData) this.onData(Q);
      }),
      this.ws.on("error", (B) => {
        (d0(`WebSocketTransport: Error: ${B.message}`), this.handleConnectionError());
      }),
      this.ws.on("close", (B, Q) => {
        (d0(`WebSocketTransport: Closed: ${B}`), this.handleConnectionError());
      }));
  }
  sendLine(A) {
    if (!this.ws || this.state !== "connected") return (F1("WebSocketTransport: Not connected"), !1);
    try {
      return (this.ws.send(A), !0);
    } catch (B) {
      return (d0(`WebSocketTransport: Failed to send: ${B}`), (this.ws = null), this.handleConnectionError(), !1);
    }
  }
  doDisconnect() {
    if ((this.stopPingInterval(), this.ws)) (this.ws.close(), (this.ws = null));
  }
  handleConnectionError() {
    if (
      (F1(`WebSocketTransport: Disconnected from ${this.url.href}`),
      this.doDisconnect(),
      this.state === "closing" || this.state === "closed")
    )
      return;
    if (this.reconnectAttempts < eQQ) {
      if (this.reconnectTimer) (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
      ((this.state = "reconnecting"), this.reconnectAttempts++);
      let A = Math.min(Wr5 * Math.pow(2, this.reconnectAttempts - 1), Jr5);
      (F1(`WebSocketTransport: Reconnecting in ${A}ms (attempt ${this.reconnectAttempts}/${eQQ})`),
        (this.reconnectTimer = setTimeout(() => {
          ((this.reconnectTimer = null), this.connect());
        }, A)));
    } else if (
      (d0(`WebSocketTransport: Max reconnection attempts reached for ${this.url.href}`),
      (this.state = "closed"),
      this.onCloseCallback)
    )
      this.onCloseCallback();
  }
  close() {
    if (this.reconnectTimer) (clearTimeout(this.reconnectTimer), (this.reconnectTimer = null));
    (this.stopPingInterval(), (this.state = "closing"), this.doDisconnect());
  }
  replayBufferedMessages(A) {
    let B = this.messageBuffer.toArray();
    if (B.length === 0) return;
    let Q = 0;
    if (A) {
      let G = B.findIndex((Y) => "uuid" in Y && Y.uuid === A);
      if (G >= 0) Q = G + 1;
    }
    let Z = B.slice(Q);
    if (Z.length === 0) {
      F1("WebSocketTransport: No new messages to replay");
      return;
    }
    F1(`WebSocketTransport: Replaying ${Z.length} buffered messages`);
    for (let G of Z) {
      let Y =
        JSON.stringify(G) +
        `
`;
      if (!this.sendLine(Y)) {
        this.handleConnectionError();
        break;
      }
    }
  }
  isConnectedStatus() {
    return this.state === "connected";
  }
  setOnData(A) {
    this.onData = A;
  }
  setOnClose(A) {
    this.onCloseCallback = A;
  }
  write(A) {
    if ("uuid" in A && typeof A.uuid === "string") (this.messageBuffer.add(A), (this.lastSentId = A.uuid));
    let B =
      JSON.stringify(A) +
      `
`;
    if (this.state !== "connected") return;
    this.sendLine(B);
  }
  startPingInterval() {
    (this.stopPingInterval(),
      (this.pingInterval = setInterval(() => {
        if (this.state === "connected" && this.ws)
          try {
            this.ws.ping();
          } catch (A) {
            d0(`WebSocketTransport: Ping failed: ${A}`);
          }
      }, Xr5)));
  }
  stopPingInterval() {
    if (this.pingInterval) (clearInterval(this.pingInterval), (this.pingInterval = null));
  }
}
function A9Q(A, B = {}) {
  if (A.protocol === "ws:" || A.protocol === "wss:") return new D_0(A, B);
  else throw new Error(`Unsupported protocol: ${A.protocol}`);
}
class C_0 extends BF1 {
  url;
  transport;
  inputStream;
  constructor(A, B) {
    let Q = new Vr5({ encoding: "utf8" });
    super(Q);
    ((this.inputStream = Q), (this.url = new Fr5(A)));
    let Z = {},
      G = DI1();
    if (G) Z.Authorization = `Bearer ${G}`;
    if (
      ((this.transport = A9Q(this.url, Z)),
      this.transport.setOnData((Y) => {
        this.inputStream.write(Y);
      }),
      this.transport.setOnClose(() => {
        this.inputStream.end();
      }),
      this.transport.connect(),
      Fq(() => this.close()),
      B)
    ) {
      let Y = this.inputStream;
      (async () => {
        for await (let I of B)
          Y.write(
            I +
              `
`,
          );
      })();
    }
  }
  write(A) {
    this.transport.write(A);
  }
  close() {
    (this.transport.close(), this.inputStream.end());
  }
}
class U_0 {
  returned;
  queue = [];
  readResolve;
  readReject;
  isDone = !1;
  hasError;
  started = !1;
  constructor(A) {
    this.returned = A;
  }
  [Symbol.asyncIterator]() {
    if (this.started) throw new Error("Stream can only be iterated once");
    return ((this.started = !0), this);
  }
  next() {
    if (this.queue.length > 0) return Promise.resolve({ done: !1, value: this.queue.shift() });
    if (this.isDone) return Promise.resolve({ done: !0, value: void 0 });
    if (this.hasError) return Promise.reject(this.hasError);
    return new Promise((A, B) => {
      ((this.readResolve = A), (this.readReject = B));
    });
  }
  enqueue(A) {
    if (this.readResolve) {
      let B = this.readResolve;
      ((this.readResolve = void 0), (this.readReject = void 0), B({ done: !1, value: A }));
    } else this.queue.push(A);
  }
  done() {
    if (((this.isDone = !0), this.readResolve)) {
      let A = this.readResolve;
      ((this.readResolve = void 0), (this.readReject = void 0), A({ done: !0, value: void 0 }));
    }
  }
  error(A) {
    if (((this.hasError = A), this.readReject)) {
      let B = this.readReject;
      ((this.readResolve = void 0), (this.readReject = void 0), B(A));
    }
  }
  return() {
    if (((this.isDone = !0), this.returned)) this.returned();
    return Promise.resolve({ done: !0, value: void 0 });
  }
}
import { randomUUID as LB1 } from "node:crypto";
var Kr5 = 10;
function Hr5(A) {
  if (!A) return !1;
  if (A.type === "assistant") {
    let B = gJ(A.message.content);
    return B?.type === "text" || B?.type === "thinking" || B?.type === "redacted_thinking";
  }
  if (A.type === "user") {
    let B = A.message.content;
    if (!Array.isArray(B) || B.length === 0) return !1;
    return B.every((Q) => "type" in Q && Q.type === "tool_result");
  }
  return !1;
}
async function* Q9Q({
  commands: A,
  prompt: B,
  promptUuid: Q,
  cwd: Z,
  tools: G,
  mcpClients: Y,
  verbose: I = !1,
  maxTurns: W,
  canUseTool: J,
  mutableMessages: X = [],
  customSystemPrompt: F,
  appendSystemPrompt: V,
  userSpecifiedModel: K,
  fallbackModel: H,
  getAppState: z,
  setAppState: D,
  messageQueueManager: C,
  abortController: w,
  replayUserMessages: E = !1,
  includePartialMessages: L = !1,
}) {
  V$(Z);
  let O = Date.now(),
    R = [],
    P = async (p1, r1, J0, W0, z1, l1) => {
      let j0 = await J(p1, r1, J0, W0, z1, l1);
      if (j0.behavior !== "allow") {
        let q0 = { tool_name: p1.name, tool_use_id: z1, tool_input: r1 };
        R.push(q0);
      }
      return j0;
    },
    _ = await z(),
    b = K ? VM(K) : uG(),
    [S, d, u] = await Promise.all([
      Ob(G, b, Array.from(_.toolPermissionContext.additionalWorkingDirectories.keys()), Y, _.toolPermissionContext),
      eV(),
      jD(),
    ]),
    o = [...(F ? [F] : S), ...(V ? [V] : [])],
    m = TE(X),
    j = Hq(m),
    r = {
      messages: m,
      setMessages: () => {},
      onChangeAPIKey: () => {},
      options: {
        commands: A,
        debug: !1,
        tools: G,
        verbose: I,
        mainLoopModel: b,
        maxThinkingTokens: j,
        mcpClients: Y,
        mcpResources: {},
        ideInstallationStatus: null,
        isNonInteractiveSession: !0,
        theme: H0().theme,
      },
      getAppState: z,
      setAppState: D,
      messageQueueManager: C,
      abortController: w ?? C4(),
      readFileState: B9Q(m),
      setInProgressToolUseIDs: () => {},
      setResponseLength: () => {},
      updateFileHistoryState: () => {},
      agentId: U2(),
    },
    {
      messages: Q1,
      shouldQuery: J1,
      allowedTools: R1,
      maxThinkingTokens: s1 = j,
      model: Z0,
    } = await F21({
      input: B,
      mode: "prompt",
      setIsLoading: () => {},
      setToolJSX: () => {},
      context: { ...r, messages: m },
      messages: m,
      uuid: Q,
    }),
    _0 = [...m, ...Q1],
    D0 = Q1.filter((p1) => p1.type === "user" && !p1.isMeta && !p1.toolUseResult),
    C1 = E ? D0 : [];
  for (let p1 of Q1)
    if (p1.type === "user")
      X.push({ type: p1.type, message: p1.message, session_id: U2(), parent_tool_use_id: null, uuid: p1.uuid });
  D((p1) => ({
    ...p1,
    toolPermissionContext: {
      ...p1.toolPermissionContext,
      alwaysAllowRules: { ...p1.toolPermissionContext.alwaysAllowRules, command: R1 },
    },
  }));
  let g1 = Z0 ?? b;
  r = {
    messages: _0,
    setMessages: () => {},
    onChangeAPIKey: () => {},
    options: {
      commands: A,
      debug: !1,
      tools: G,
      verbose: I,
      mainLoopModel: g1,
      maxThinkingTokens: s1,
      mcpClients: Y,
      mcpResources: {},
      ideInstallationStatus: null,
      isNonInteractiveSession: !0,
      theme: H0().theme,
    },
    getAppState: z,
    setAppState: D,
    abortController: w || C4(),
    readFileState: B9Q(_0),
    messageQueueManager: r.messageQueueManager,
    setInProgressToolUseIDs: () => {},
    setResponseLength: () => {},
    updateFileHistoryState: () => {},
    agentId: U2(),
  };
  let o1 = E2()?.outputStyle ?? iW;
  if (
    (yield {
      type: "system",
      subtype: "init",
      cwd: Z,
      session_id: U2(),
      tools: G.map((p1) => p1.name),
      mcp_servers: Y.map((p1) => ({ name: p1.name, status: p1.type })),
      model: g1,
      permissionMode: _.toolPermissionContext.mode,
      slash_commands: A.map((p1) => p1.name),
      apiKeySource: xF(!0).source,
      output_style: o1,
      uuid: LB1(),
    },
    !J1)
  ) {
    for (let p1 of D0)
      if (
        p1.type === "user" &&
        typeof p1.message.content === "string" &&
        (p1.message.content.includes("<local-command-stdout>") || p1.message.content.includes("<local-command-stderr>"))
      )
        yield {
          type: "user",
          message: { ...p1.message, content: eI(p1.message.content) },
          session_id: U2(),
          parent_tool_use_id: null,
          uuid: p1.uuid,
        };
    yield {
      type: "result",
      subtype: "success",
      is_error: !1,
      duration_ms: Date.now() - O,
      duration_api_ms: sN(),
      num_turns: _0.length - 1,
      result: "",
      session_id: U2(),
      total_cost_usd: xC(),
      usage: tj,
      modelUsage: {},
      permission_denials: R,
      uuid: LB1(),
    };
    return;
  }
  let K0 = tj,
    U0 = tj,
    B1 = 0,
    I1 = nW1(),
    H1 = !1;
  for await (let p1 of dO({
    messages: _0,
    systemPrompt: o,
    userContext: d,
    systemContext: u,
    canUseTool: P,
    toolUseContext: r,
    fallbackModel: H,
    promptCategory: I1,
  })) {
    if (p1.type === "assistant" || p1.type === "user" || (p1.type === "system" && p1.subtype === "compact_boundary")) {
      if ((_0.push(p1), await wg1(_0), !H1 && C1.length > 0)) {
        H1 = !0;
        for (let r1 of C1)
          if (r1.type === "user")
            yield { type: "user", message: r1.message, session_id: U2(), parent_tool_use_id: null, uuid: r1.uuid };
      }
    }
    switch (p1.type) {
      case "assistant":
      case "progress":
      case "user":
        yield* zr5(p1);
        break;
      case "stream_event":
        if (p1.event.type === "message_start") ((U0 = tj), (U0 = sd(U0, p1.event.message.usage)));
        if (p1.event.type === "message_delta") U0 = sd(U0, p1.event.usage);
        if (p1.event.type === "message_stop") K0 = UJB(K0, U0);
        if (L) yield { type: "stream_event", event: p1.event, session_id: U2(), parent_tool_use_id: null, uuid: LB1() };
        break;
      case "attachment":
        if (E && _b1(p1)) {
          let r1 = p1.attachment;
          if (r1.type === "queued_command")
            yield {
              type: "user",
              message: { role: "user", content: typeof r1.prompt === "string" ? r1.prompt : r1.prompt },
              session_id: U2(),
              parent_tool_use_id: null,
              uuid: r1.source_uuid || p1.uuid,
            };
        }
        break;
      case "stream_request_start":
        break;
      case "system":
        if (p1.subtype === "compact_boundary" && p1.compactMetadata)
          yield {
            type: "system",
            subtype: "compact_boundary",
            session_id: U2(),
            uuid: p1.uuid,
            compact_metadata: { trigger: p1.compactMetadata.trigger, pre_tokens: p1.compactMetadata.preTokens },
          };
        break;
    }
    if (p1.type === "user" && W && ++B1 >= W) {
      yield {
        type: "result",
        subtype: "error_max_turns",
        duration_ms: Date.now() - O,
        duration_api_ms: sN(),
        is_error: !1,
        num_turns: B1,
        session_id: U2(),
        total_cost_usd: xC(),
        usage: K0,
        modelUsage: kn(),
        permission_denials: R,
        uuid: LB1(),
      };
      return;
    }
  }
  let h1 = gJ(_0);
  if (!Hr5(h1)) {
    yield {
      type: "result",
      subtype: "error_during_execution",
      duration_ms: Date.now() - O,
      duration_api_ms: sN(),
      is_error: !1,
      num_turns: B1,
      session_id: U2(),
      total_cost_usd: xC(),
      usage: K0,
      modelUsage: kn(),
      permission_denials: R,
      uuid: LB1(),
    };
    return;
  }
  let x1 = "",
    _1 = !1;
  if (h1.type === "assistant") {
    let p1 = gJ(h1.message.content);
    if (p1?.type === "text") x1 = p1.text;
    _1 = Boolean(h1.isApiErrorMessage);
  }
  yield {
    type: "result",
    subtype: "success",
    is_error: _1,
    duration_ms: Date.now() - O,
    duration_api_ms: sN(),
    num_turns: _0.length - 1,
    result: x1,
    session_id: U2(),
    total_cost_usd: xC(),
    usage: K0,
    modelUsage: kn(),
    permission_denials: R,
    uuid: LB1(),
  };
}
function* zr5(A) {
  switch (A.type) {
    case "assistant":
      for (let B of OI([A]))
        yield { type: "assistant", message: B.message, parent_tool_use_id: null, session_id: U2(), uuid: A.uuid };
      return;
    case "progress":
      if (A.data.type !== "agent_progress") return;
      for (let B of OI([A.data.message]))
        switch (B.type) {
          case "assistant":
            yield {
              type: "assistant",
              message: B.message,
              parent_tool_use_id: A.parentToolUseID,
              session_id: U2(),
              uuid: A.uuid,
            };
            break;
          case "user":
            yield {
              type: "user",
              message: B.message,
              parent_tool_use_id: A.parentToolUseID,
              session_id: U2(),
              uuid: A.uuid,
            };
            break;
        }
      break;
    case "user":
      for (let B of OI([A]))
        yield { type: "user", message: B.message, parent_tool_use_id: null, session_id: U2(), uuid: A.uuid };
      return;
    default:
  }
}
function B9Q(A) {
  let B = mj(Kr5),
    Q = new Map();
  for (let Z of A)
    if (Z.type === "assistant" && Array.isArray(Z.message.content)) {
      for (let G of Z.message.content)
        if (G.type === "tool_use" && G.name === "Read") {
          let Y = G.input;
          if (Y?.file_path && Y?.offset === void 0 && Y?.limit === void 0) Q.set(G.id, Y.file_path);
        }
    }
  for (let Z of A)
    if (Z.type === "user" && Array.isArray(Z.message.content)) {
      for (let G of Z.message.content)
        if (G.type === "tool_result" && G.tool_use_id) {
          let Y = Q.get(G.tool_use_id);
          if (Y && typeof G.content === "string") {
            let J = G.content
              .replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, "")
              .split(
                `
`,
              )
              .map((X) => {
                let F = X.match(/^\s*\d+→(.*)$/);
                return F ? F[1] : X;
              })
              .join(
                `
`,
              )
              .trim();
            if (Z.timestamp) {
              let X = new Date(Z.timestamp).getTime();
              B.set(Y, { content: J, timestamp: X });
            }
          }
        }
    }
  return B;
}
import { cwd as Cr5 } from "process";
import { randomUUID as Dr5 } from "crypto";
function Z9Q(A) {
  try {
    let B = new URL(A);
    return { sessionId: Dr5(), ingressUrl: B.href, isUrl: !0 };
  } catch {
    if (tV(A)) return { sessionId: A, ingressUrl: null, isUrl: !1 };
  }
  return null;
}
async function G9Q(A, B, Q, Z, G, Y, I) {
  if (await CA1()) await ZEB();
  let W = await B(),
    J = await Nr5(I, G, W),
    X = Boolean(tV(I.resume)),
    F = Boolean(I.sdkUrl);
  if (!A && !X && !F) {
    (process.stderr.write(`Error: Input must be provided either through stdin or as a prompt argument when using --print
`),
      G5(1));
    return;
  }
  if (I.outputFormat === "stream-json" && !I.verbose) {
    (process.stderr.write(`Error: When using --print, --output-format=stream-json requires --verbose
`),
      G5(1));
    return;
  }
  let V = [...G, ...W.mcp.tools],
    K = Lr5(A, I),
    H = I.sdkUrl ? "stdio" : I.permissionPromptToolName,
    z = wr5(H, K, W.mcp.tools);
  if (I.permissionPromptToolName) V = V.filter((w) => w.name !== I.permissionPromptToolName);
  let D = [];
  for await (let w of Ur5(K, W.mcp.clients, [...Z, ...W.mcp.commands], V, J, z, Y, B, Q, I)) {
    if (I.outputFormat === "stream-json" && I.verbose) K.write(w);
    if (
      w.type !== "control_response" &&
      w.type !== "control_request" &&
      w.type !== "control_cancel_request" &&
      w.type !== "stream_event"
    )
      D.push(w);
  }
  let C = gJ(D);
  switch (I.outputFormat) {
    case "json":
      if (!C || C.type !== "result") throw new Error("No messages returned");
      if (I.verbose) {
        eZ(
          JSON.stringify(D) +
            `
`,
        );
        break;
      }
      eZ(
        JSON.stringify(C) +
          `
`,
      );
      break;
    case "stream-json":
      break;
    default:
      if (!C || C.type !== "result") throw new Error("No messages returned");
      switch (C.subtype) {
        case "success":
          eZ(
            C.result.endsWith(`
`)
              ? C.result
              : C.result +
                  `
`,
          );
          break;
        case "error_during_execution":
          eZ("Execution error");
          break;
        case "error_max_turns":
          eZ(`Error: Reached max turns (${I.maxTurns})`);
      }
  }
  G5(C?.type === "result" && C?.is_error ? 1 : 0);
}
function Ur5(A, B, Q, Z, G, Y, I, W, J, X) {
  let F = TS(),
    V = !1,
    K = !1,
    H,
    z = new U_0(),
    D = ZUB(G),
    w = SR1().map((b) => {
      return { value: b.value === null ? "default" : b.value, displayName: b.label, description: b.description };
    }),
    E = X.userSpecifiedModel,
    L = !1,
    O = [],
    R = [],
    P = async () => {
      if (((V = !0), !L)) {
        let d = await qGB(I, (u, o) => A.sendMcpMessage(u, o));
        ((O = d.clients), (R = d.tools), (L = !0));
      }
      let b = [...B, ...O],
        S = [...Z, ...R];
      try {
        while (!F.isEmpty()) {
          let d = F.dequeue();
          if (d.mode !== "prompt") throw new Error("only prompt commands are supported in streaming mode");
          let u = d.value;
          H = C4();
          for await (let o of Q9Q({
            commands: Q,
            prompt: u,
            promptUuid: d.uuid,
            cwd: Cr5(),
            tools: S,
            verbose: X.verbose,
            mcpClients: b,
            maxTurns: X.maxTurns,
            canUseTool: Y,
            userSpecifiedModel: E,
            fallbackModel: X.fallbackModel,
            mutableMessages: D,
            customSystemPrompt: X.systemPrompt,
            appendSystemPrompt: X.appendSystemPrompt,
            getAppState: W,
            setAppState: J,
            messageQueueManager: F,
            abortController: H,
            replayUserMessages: X.replayUserMessages,
            includePartialMessages: X.includePartialMessages,
          })) {
            if (!((o.type === "assistant" || o.type === "user") && o.parent_tool_use_id) && o.type !== "stream_event")
              D.push(o);
            z.enqueue(o);
          }
        }
      } catch (d) {
        G5(1);
        return;
      } finally {
        V = !1;
      }
      if (K) z.done();
    },
    _ = function (b) {
      z.enqueue({ type: "control_response", response: { subtype: "success", request_id: b.request_id } });
    };
  return (
    (async () => {
      let b = !1;
      for await (let S of A.structuredInput) {
        if (S.type === "control_request") {
          if (S.request.subtype === "interrupt") {
            if (H) H.abort();
            _(S);
          } else if (S.request.subtype === "initialize") {
            if (S.request.sdkMcpServers && S.request.sdkMcpServers.length > 0)
              for (let d of S.request.sdkMcpServers) I[d] = { type: "sdk", name: d };
            (await qr5(S.request, S.request_id, b, z, Q, w, A), (b = !0));
          } else if (S.request.subtype === "set_permission_mode") {
            let d = S.request;
            (J((u) => ({ ...u, toolPermissionContext: Er5(d, S.request_id, u.toolPermissionContext, z) })), _(S));
          } else if (S.request.subtype === "set_model") {
            let d = S.request.model === "default" ? Nm() : S.request.model;
            ((E = d), Lg(d), _(S));
          }
          continue;
        } else if (S.type === "control_response") continue;
        if (((b = !0), F.enqueue({ mode: "prompt", value: S.message.content, uuid: S.uuid }), !V)) P();
      }
      if (((K = !0), !V)) z.done();
    })(),
    z
  );
}
function $r5(A) {
  let B = async (Q, Z, G, Y, I) => {
    let W = await Zq(Q, Z, G, Y, I);
    if (W.behavior === "allow" || W.behavior === "deny") return W;
    for await (let J of A.call({ tool_name: Q.name, input: Z, tool_use_id: I }, G, B, Y)) {
      if (J.type !== "result") continue;
      if (G.abortController.signal.aborted)
        return {
          behavior: "deny",
          message: "Permission prompt was aborted.",
          decisionReason: { type: "permissionPromptTool", permissionPromptToolName: Q.name, toolResult: J },
        };
      let X = A.mapToolResultToToolResultBlockParam(J.data, "1");
      if (
        !X.content ||
        !Array.isArray(X.content) ||
        !X.content[0] ||
        X.content[0].type !== "text" ||
        typeof X.content[0].text !== "string"
      )
        throw new Error(
          'Permission prompt tool returned an invalid result. Expected a single text block param with type="text" and a string text value.',
        );
      return AF1(Jc1.parse(d3(X.content[0].text)), A, Z, G);
    }
    return W;
  };
  return B;
}
function wr5(A, B, Q) {
  if (A === "stdio") return B.createCanUseTool();
  else if (A) {
    let Z = Q.find((G) => G.name === A);
    if (!Z) {
      let G = `Error: MCP tool ${A} (passed via --permission-prompt-tool) not found. Available MCP tools: ${Q.map((Y) => Y.name).join(", ") || "none"}`;
      throw (
        process.stderr.write(`${G}
`),
        G5(1),
        new Error(G)
      );
    }
    if (!Z.inputJSONSchema) {
      let G = `Error: tool ${A} (passed via --permission-prompt-tool) must be an MCP tool`;
      throw (
        process.stderr.write(`${G}
`),
        G5(1),
        new Error(G)
      );
    }
    return $r5(Z);
  }
  return Zq;
}
async function qr5(A, B, Q, Z, G, Y, I) {
  if (Q) {
    Z.enqueue({
      type: "control_response",
      response: { subtype: "error", error: "Already initialized", request_id: B },
    });
    return;
  }
  let J = E2()?.outputStyle || iW,
    X = await $u();
  if (A.hooks) {
    let F = {};
    for (let [V, K] of Object.entries(A.hooks))
      F[V] = K.map((H) => {
        let z = H.hookCallbackIds.map((D) => {
          return I.createHookCallback(D);
        });
        return { matcher: H.matcher, hooks: z };
      });
    i$1(F);
  }
  Z.enqueue({
    type: "control_response",
    response: {
      subtype: "success",
      request_id: B,
      response: {
        commands: G.map((F) => ({
          name: F.userFacingName(),
          description: F.description,
          argumentHint: F.argumentHint || "",
        })),
        output_style: J,
        available_output_styles: Object.keys(X),
        models: Y,
      },
    },
  });
}
function Er5(A, B, Q, Z) {
  if (!Q.isBypassPermissionsModeAvailable && A.mode === "bypassPermissions")
    return (
      Z.enqueue({
        type: "control_response",
        response: {
          subtype: "error",
          request_id: B,
          error: "Cannot set permission mode to bypassPermissions since it is not available",
        },
      }),
      Q
    );
  return (
    Z.enqueue({
      type: "control_response",
      response: { subtype: "success", request_id: B, response: { mode: A.mode } },
    }),
    { ...Q, mode: A.mode }
  );
}
async function Nr5(A, B, Q) {
  if (A.continue)
    try {
      Y1("tengu_continue_print", {});
      let Z = await nb(void 0, B.concat(Q.mcp.tools));
      if (Z) return Z.messages;
    } catch (Z) {
      return (U1(Z instanceof Error ? Z : new Error(String(Z)), u7A), G5(1), []);
    }
  if (A.teleport)
    try {
      Y1("tengu_teleport_print", {});
      let Z = typeof A.teleport === "string" ? A.teleport : null;
      await Nh1();
      let G = await DW1(Z);
      return (await HW1(TE(G.log), G.branch)).messages;
    } catch (Z) {
      return (U1(Z instanceof Error ? Z : new Error(String(Z)), RT), G5(1), []);
    }
  if (A.resume)
    try {
      Y1("tengu_resume_print", {});
      let Z = Z9Q(typeof A.resume === "string" ? A.resume : "");
      if (!Z) {
        if (
          (process.stderr.write(`Error: --resume requires a valid session ID when used with --print
`),
          process.stderr.write(`Usage: claude -p --resume <session-id>
`),
          typeof A.resume === "string")
        )
          (process.stderr.write(`Session IDs must be in UUID format (e.g., 550e8400-e29b-41d4-a716-446655440000)
`),
            process.stderr.write(`Provided value "${A.resume}" is not a valid UUID
`));
        return (G5(1), []);
      }
      if (Z.isUrl && Z.ingressUrl && process.env.ENABLE_SESSION_PERSISTENCE === "true")
        await yRB(Z.sessionId, Z.ingressUrl);
      let G = await nb(Z.sessionId, B.concat(Q.mcp.tools));
      if (!G)
        if (Z.isUrl) return [];
        else
          return (
            process.stderr.write(`No conversation found with session ID: ${Z.sessionId}
`),
            G5(1),
            []
          );
      else return G.messages;
    } catch (Z) {
      return (
        U1(Z instanceof Error ? Z : new Error(String(Z)), m7A),
        process.stderr.write(`Failed to resume session with --print mode
`),
        G5(1),
        []
      );
    }
  return await S$("startup");
}
function Lr5(A, B) {
  let Q;
  if (typeof A === "string")
    if (A.trim() !== "")
      Q = gC0([
        JSON.stringify({
          type: "user",
          session_id: "",
          message: { role: "user", content: A },
          parent_tool_use_id: null,
        }),
      ]);
    else Q = gC0([]);
  else Q = A;
  return B.sdkUrl ? new C_0(B.sdkUrl, Q) : new BF1(Q);
}
async function Y9Q() {
  (Y1("tengu_update_check", {}),
    console.log(
      `Current version: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION}`,
    ),
    console.log("Checking for updates..."),
    F1("update: Starting update check"),
    F1("update: Running diagnostic"));
  let A = await p11();
  if (
    (F1(`update: Installation type: ${A.installationType}`),
    F1(`update: Config install method: ${A.configInstallMethod}`),
    A.multipleInstallations.length > 1)
  ) {
    (console.log(""), console.log(n1.yellow("Warning: Multiple installations found")));
    for (let W of A.multipleInstallations) {
      let J = A.installationType === W.type ? " (currently running)" : "";
      console.log(`- ${W.type} at ${W.path}${J}`);
    }
  }
  if (A.warnings.length > 0) {
    eZ(`
`);
    for (let W of A.warnings)
      (F1(`update: Warning detected: ${W.issue}`),
        F1(`update: Showing warning: ${W.issue}`),
        eZ(
          n1.yellow(`Warning: ${W.issue}
`),
        ),
        eZ(
          n1.bold(`Fix: ${W.fix}
`),
        ));
  }
  let B = H0();
  if (!B.installMethod) {
    (console.log(""), console.log("Updating configuration to track installation method..."));
    let W = "unknown";
    switch (A.installationType) {
      case "npm-local":
        W = "local";
        break;
      case "native":
        W = "native";
        break;
      case "npm-global":
        W = "global";
        break;
      default:
        W = "unknown";
    }
    (TA({ ...B, installMethod: W }), console.log(`Installation method set to: ${W}`));
  }
  if (A.installationType === "development")
    (console.log(""), console.log(n1.yellow("Warning: Cannot update development build")), await Z5(1));
  if (B.installMethod && A.configInstallMethod !== "not set") {
    let { installationType: W, configInstallMethod: J } = A,
      F =
        {
          "npm-local": "local",
          "npm-global": "global",
          native: "native",
          development: "development",
          unknown: "unknown",
        }[W] || W;
    if (F !== J && J !== "unknown")
      (console.log(""),
        console.log(n1.yellow("Warning: Configuration mismatch")),
        console.log(`Config expects: ${J} installation`),
        console.log(`Currently running: ${W}`),
        console.log(n1.yellow(`Updating the ${W} installation you are currently using`)),
        TA({ ...B, installMethod: F }),
        console.log(`Config updated to reflect current installation method: ${F}`));
  }
  if (A.installationType === "native") {
    F1("update: Detected native installation, using native updater");
    try {
      let W = await CS();
      if (W.lockFailed)
        (console.log(n1.yellow("Another process is currently updating Claude. Please try again in a moment.")),
          await Z5(0));
      if (!W.latestVersion) (console.error("Failed to check for updates"), await Z5(1));
      if (
        W.latestVersion ===
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://docs.anthropic.com/s/claude-code",
          VERSION: "1.0.119",
        }.VERSION
      )
        console.log(
          n1.green(
            `Claude Code is up to date (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION})`,
          ),
        );
      else if (W.wasUpdated)
        console.log(
          n1.green(
            `Successfully updated from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION} to version ${W.latestVersion}`,
          ),
        );
      else
        console.log(
          n1.green(
            `Claude Code is up to date (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION})`,
          ),
        );
      await Z5(0);
    } catch (W) {
      (console.error("Error: Failed to install native update"),
        console.error(String(W)),
        console.error('Try running "claude doctor" for diagnostics'),
        await Z5(1));
    }
  }
  if (B.installMethod !== "native") YW1();
  (F1("update: Checking npm registry for latest version"),
    F1(
      `update: Package URL: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.PACKAGE_URL}`,
    ));
  let Q = `npm view ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.PACKAGE_URL}@latest version`;
  F1(`update: Running: ${Q}`);
  let Z = await D_1();
  if ((F1(`update: Latest version from npm: ${Z || "FAILED"}`), !Z)) {
    if (
      (F1("update: Failed to get latest version from npm registry"),
      console.error(n1.red("Failed to check for updates")),
      console.error("Unable to fetch latest version from npm registry"),
      console.error(""),
      console.error("Possible causes:"),
      console.error("  • Network connectivity issues"),
      console.error("  • npm registry is unreachable"),
      console.error("  • Corporate proxy/firewall blocking npm"),
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "1.0.119",
      }.PACKAGE_URL &&
        !{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://docs.anthropic.com/s/claude-code",
          VERSION: "1.0.119",
        }.PACKAGE_URL.startsWith("@anthropic"))
    )
      console.error("  • Internal/development build not published to npm");
    (console.error(""),
      console.error("Try:"),
      console.error("  • Check your internet connection"),
      console.error("  • Run with --debug flag for more details"));
    let W =
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.anthropic.com/s/claude-code",
        VERSION: "1.0.119",
      }.PACKAGE_URL || "@anthropic-ai/claude-code";
    (console.error(`  • Manually check: npm view ${W} version`),
      console.error("  • Check if you need to login: npm whoami"),
      await Z5(1));
  }
  if (
    Z ===
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "1.0.119",
    }.VERSION
  )
    (console.log(
      n1.green(
        `Claude Code is up to date (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION})`,
      ),
    ),
      await Z5(0));
  (console.log(
    `New version available: ${Z} (current: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION})`,
  ),
    console.log("Installing update..."));
  let G = !1,
    Y = "";
  switch (A.installationType) {
    case "npm-local":
      ((G = !0), (Y = "local"));
      break;
    case "npm-global":
      ((G = !1), (Y = "global"));
      break;
    case "unknown": {
      let W = vv();
      ((G = W),
        (Y = W ? "local" : "global"),
        console.log(n1.yellow("Warning: Could not determine installation type")),
        console.log(`Attempting ${Y} update based on file detection...`));
      break;
    }
    default:
      (console.error(`Error: Cannot update ${A.installationType} installation`), await Z5(1));
  }
  (console.log(`Using ${Y} installation update method...`),
    F1(`update: Update method determined: ${Y}`),
    F1(`update: useLocalUpdate: ${G}`));
  let I;
  if (G) (F1("update: Calling installOrUpdateClaudePackage() for local update"), (I = await Ud()));
  else (F1("update: Calling installGlobalPackage() for global update"), (I = await cG1()));
  switch ((F1(`update: Installation status: ${I}`), I)) {
    case "success":
      console.log(
        n1.green(
          `Successfully updated from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION} to version ${Z}`,
        ),
      );
      break;
    case "no_permissions":
      if ((console.error("Error: Insufficient permissions to install update"), G))
        (console.error("Try manually updating with:"),
          console.error(
            `  cd ~/.claude/local && npm update ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.PACKAGE_URL}`,
          ));
      else
        (console.error("Try running with sudo or fix npm permissions"),
          console.error("Or consider migrating to a local installation with:"),
          console.error("  claude migrate-installer"));
      await Z5(1);
      break;
    case "install_failed":
      if ((console.error("Error: Failed to install update"), G))
        (console.error("Try manually updating with:"),
          console.error(
            `  cd ~/.claude/local && npm update ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.PACKAGE_URL}`,
          ));
      else
        (console.error("Or consider migrating to a local installation with:"),
          console.error("  claude migrate-installer"));
      await Z5(1);
      break;
    case "in_progress":
      (console.error("Error: Another instance is currently performing an update"),
        console.error("Please wait and try again later"),
        await Z5(1));
      break;
  }
  await Z5(0);
}
var q4 = A1(V1(), 1);
import { homedir as Mr5 } from "node:os";
import { join as Or5 } from "node:path";
function Rr5() {
  let A = tA.platform === "win32",
    B = Mr5();
  if (A) return Or5(B, ".local", "bin", "claude.exe").replace(/\//g, "\\");
  return "~/.local/bin/claude";
}
function I9Q({ messages: A }) {
  if (A.length === 0) return null;
  return q4.default.createElement(
    y,
    { flexDirection: "column", gap: 0, marginBottom: 1 },
    q4.default.createElement(y, null, q4.default.createElement(M, { color: "warning" }, t0.warning, " Setup notes:")),
    A.map((B, Q) =>
      q4.default.createElement(y, { key: Q, marginLeft: 2 }, q4.default.createElement(M, { dimColor: !0 }, "• ", B)),
    ),
  );
}
function Tr5({ onDone: A, force: B, target: Q }) {
  let [Z, G] = q4.useState({ type: "checking" });
  return (
    q4.useEffect(() => {
      async function Y() {
        try {
          (F1(`Install: Starting installation process (force=${B}, target=${Q})`),
            G({ type: "installing", version: Q || "stable" }),
            F1(`Install: Calling installLatest(force=true, target=${Q}, forceReinstall=${B})`));
          let W = await CS(!0, Q, B);
          if (
            (F1(
              `Install: installLatest returned version=${W.latestVersion}, wasUpdated=${W.wasUpdated}, lockFailed=${W.lockFailed}`,
            ),
            W.lockFailed)
          )
            throw new Error(
              "Could not install - another process is currently installing Claude. Please try again in a moment.",
            );
          if (!W.latestVersion) d0("Install: Failed to retrieve version information during install");
          if (!W.wasUpdated) F1("Install: Already up to date");
          G({ type: "setting-up" });
          let J = await bO(!0);
          if ((F1(`Install: Setup launcher completed with ${J.length} messages`), J.length > 0))
            J.forEach((z) => F1(`Install: Setup message: ${z.message}`));
          F1("Install: Cleaning up npm installations after successful install");
          let { removed: X, errors: F, warnings: V } = await WW1();
          if (X > 0) F1(`Cleaned up ${X} npm installation(s)`);
          if (F.length > 0) F1(`Cleanup errors: ${F.join(", ")}`);
          let K = IW1();
          if (K.length > 0) F1(`Shell alias cleanup: ${K.map((z) => z.message).join("; ")}`);
          Y1("tengu_claude_install_command", { has_version: W.latestVersion ? 1 : 0, forced: B ? 1 : 0 });
          let H = [...V, ...K.map((z) => z.message)];
          if (J.length > 0)
            (G({ type: "set-up", messages: J.map((z) => z.message) }),
              setTimeout(() => {
                G({
                  type: "success",
                  version: W.latestVersion || "current",
                  setupMessages: [...J.map((z) => z.message), ...H],
                });
              }, 2000));
          else
            (F1("Install: Shell PATH already configured"),
              G({ type: "success", version: W.latestVersion || "current", setupMessages: H.length > 0 ? H : void 0 }));
        } catch (I) {
          (d0(`Install command failed: ${I}`),
            G({ type: "error", message: I instanceof Error ? I.message : String(I) }));
        }
      }
      Y();
    }, [B, Q]),
    q4.useEffect(() => {
      if (Z.type === "success")
        setTimeout(() => {
          A();
        }, 2000);
      else if (Z.type === "error")
        setTimeout(() => {
          A();
        }, 3000);
    }, [Z, A]),
    q4.default.createElement(
      y,
      { flexDirection: "column", marginTop: 1 },
      Z.type === "checking" && q4.default.createElement(M, { color: "claude" }, "Checking installation status..."),
      Z.type === "cleaning-npm" &&
        q4.default.createElement(M, { color: "warning" }, "Cleaning up old npm installations..."),
      Z.type === "installing" &&
        q4.default.createElement(M, { color: "claude" }, "Installing Claude Code native build ", Z.version, "..."),
      Z.type === "setting-up" &&
        q4.default.createElement(M, { color: "claude" }, "Setting up launcher and shell integration..."),
      Z.type === "set-up" && q4.default.createElement(I9Q, { messages: Z.messages }),
      Z.type === "success" &&
        q4.default.createElement(
          y,
          { flexDirection: "column", gap: 1 },
          q4.default.createElement(
            y,
            null,
            q4.default.createElement(M, { color: "success" }, t0.tick, " "),
            q4.default.createElement(M, { color: "success", bold: !0 }, "Claude Code successfully installed!"),
          ),
          q4.default.createElement(
            y,
            { marginLeft: 2, flexDirection: "column", gap: 1 },
            Z.version !== "current" &&
              q4.default.createElement(
                y,
                null,
                q4.default.createElement(M, { dimColor: !0 }, "Version: "),
                q4.default.createElement(M, { color: "claude" }, Z.version),
              ),
            q4.default.createElement(
              y,
              null,
              q4.default.createElement(M, { dimColor: !0 }, "Location: "),
              q4.default.createElement(M, { color: "text" }, Rr5()),
            ),
          ),
          q4.default.createElement(
            y,
            { marginLeft: 2, flexDirection: "column", gap: 1 },
            q4.default.createElement(
              y,
              { marginTop: 1 },
              q4.default.createElement(M, { dimColor: !0 }, "Next: Run "),
              q4.default.createElement(M, { color: "claude", bold: !0 }, "claude --help"),
              q4.default.createElement(M, { dimColor: !0 }, " to get started"),
            ),
          ),
          Z.setupMessages && q4.default.createElement(I9Q, { messages: Z.setupMessages }),
        ),
      Z.type === "error" &&
        q4.default.createElement(
          y,
          { flexDirection: "column", gap: 1 },
          q4.default.createElement(
            y,
            null,
            q4.default.createElement(M, { color: "error" }, t0.cross, " "),
            q4.default.createElement(M, { color: "error" }, "Installation failed"),
          ),
          q4.default.createElement(M, { color: "error" }, Z.message),
          q4.default.createElement(
            y,
            { marginTop: 1 },
            q4.default.createElement(M, { dimColor: !0 }, "Try running with --force to override checks"),
          ),
        ),
    )
  );
}
var W9Q = {
  type: "local-jsx",
  name: "install",
  description: "Install Claude Code native build",
  argumentHint: "[options]",
  async call(A, B, Q) {
    let Z = Q.includes("--force"),
      Y = Q.filter((W) => !W.startsWith("--"))[0],
      { unmount: I } = s6(
        q4.default.createElement(Tr5, {
          onDone: () => {
            (I(), A());
          },
          force: Z,
          target: Y,
        }),
      );
  },
};
var zK = A1(V1(), 1);
var x9 = A1(V1(), 1);
var MB1 = A1(V1(), 1);
var QF1 = A1(V1(), 1);
function J9Q({ isFocused: A, isSelected: B, children: Q }) {
  return QF1.default.createElement(
    y,
    { gap: 1, paddingLeft: A ? 0 : 2 },
    A && QF1.default.createElement(M, { color: "suggestion" }, t0.pointer),
    QF1.default.createElement(M, { color: B ? "success" : A ? "suggestion" : void 0 }, Q),
    B && QF1.default.createElement(M, { color: "success" }, t0.tick),
  );
}
var Vw = A1(V1(), 1);
import { isDeepStrictEqual as Pr5 } from "node:util";
var jr5 = (A, B) => {
    switch (B.type) {
      case "focus-next-option": {
        if (!A.focusedValue) return A;
        let Q = A.optionMap.get(A.focusedValue);
        if (!Q) return A;
        let Z = Q.next;
        if (!Z) return A;
        if (!(Z.index >= A.visibleToIndex)) return { ...A, focusedValue: Z.value };
        let Y = Math.min(A.optionMap.size, A.visibleToIndex + 1),
          I = Y - A.visibleOptionCount;
        return { ...A, focusedValue: Z.value, visibleFromIndex: I, visibleToIndex: Y };
      }
      case "focus-previous-option": {
        if (!A.focusedValue) return A;
        let Q = A.optionMap.get(A.focusedValue);
        if (!Q) return A;
        let Z = Q.previous;
        if (!Z) return A;
        if (!(Z.index <= A.visibleFromIndex)) return { ...A, focusedValue: Z.value };
        let Y = Math.max(0, A.visibleFromIndex - 1),
          I = Y + A.visibleOptionCount;
        return { ...A, focusedValue: Z.value, visibleFromIndex: Y, visibleToIndex: I };
      }
      case "select-focused-option":
        return { ...A, previousValue: A.value, value: A.focusedValue };
      case "reset":
        return B.state;
    }
  },
  X9Q = ({ visibleOptionCount: A, defaultValue: B, options: Q }) => {
    let Z = typeof A === "number" ? Math.min(A, Q.length) : Q.length,
      G = new qB1(Q);
    return {
      optionMap: G,
      visibleOptionCount: Z,
      focusedValue: G.first?.value,
      visibleFromIndex: 0,
      visibleToIndex: Z,
      previousValue: B,
      value: B,
    };
  },
  F9Q = ({ visibleOptionCount: A = 5, options: B, defaultValue: Q, onChange: Z }) => {
    let [G, Y] = Vw.useReducer(jr5, { visibleOptionCount: A, defaultValue: Q, options: B }, X9Q),
      [I, W] = Vw.useState(B);
    if (B !== I && !Pr5(B, I))
      (Y({ type: "reset", state: X9Q({ visibleOptionCount: A, defaultValue: Q, options: B }) }), W(B));
    let J = Vw.useCallback(() => {
        Y({ type: "focus-next-option" });
      }, []),
      X = Vw.useCallback(() => {
        Y({ type: "focus-previous-option" });
      }, []),
      F = Vw.useCallback(() => {
        Y({ type: "select-focused-option" });
      }, []),
      V = Vw.useMemo(() => {
        return B.map((K, H) => ({ ...K, index: H })).slice(G.visibleFromIndex, G.visibleToIndex);
      }, [B, G.visibleFromIndex, G.visibleToIndex]);
    return (
      Vw.useEffect(() => {
        if (G.value && G.previousValue !== G.value) Z?.(G.value);
      }, [G.previousValue, G.value, B, Z]),
      {
        focusedValue: G.focusedValue,
        visibleFromIndex: G.visibleFromIndex,
        visibleToIndex: G.visibleToIndex,
        value: G.value,
        visibleOptions: V,
        focusNextOption: J,
        focusPreviousOption: X,
        selectFocusedOption: F,
      }
    );
  };
var V9Q = ({ isDisabled: A = !1, state: B }) => {
  s0(
    (Q, Z) => {
      if (Z.downArrow) B.focusNextOption();
      if (Z.upArrow) B.focusPreviousOption();
      if (Z.return) B.selectFocusedOption();
    },
    { isActive: !A },
  );
};
function K9Q({
  isDisabled: A = !1,
  visibleOptionCount: B = 5,
  highlightText: Q,
  options: Z,
  defaultValue: G,
  onChange: Y,
}) {
  let I = F9Q({ visibleOptionCount: B, options: Z, defaultValue: G, onChange: Y });
  return (
    V9Q({ isDisabled: A, state: I }),
    MB1.default.createElement(
      y,
      { flexDirection: "column" },
      I.visibleOptions.map((W) => {
        let J = W.label;
        if (Q && W.label.includes(Q)) {
          let X = W.label.indexOf(Q);
          J = MB1.default.createElement(
            MB1.default.Fragment,
            null,
            W.label.slice(0, X),
            MB1.default.createElement(M, { bold: !0 }, Q),
            W.label.slice(X + Q.length),
          );
        }
        return MB1.default.createElement(
          J9Q,
          { key: W.value, isFocused: !A && I.focusedValue === W.value, isSelected: I.value === W.value },
          J,
        );
      }),
    )
  );
}
var UPDATED_STATUS = "Updated",
  Sr5 = "  ";
function z9Q({ onSelect: A, onCancel: B, isEmbedded: Q = !1 }) {
  let { rows: Z } = IB(),
    [G, Y] = x9.useState([]),
    [I, W] = x9.useState(null),
    [J, X] = x9.useState(!0),
    [F, V] = x9.useState(null),
    [K, H] = x9.useState(!1),
    [z, D] = x9.useState(!1),
    C = x9.useCallback(async () => {
      try {
        (X(!0), V(null));
        let b = await RE();
        (W(b), F1(`Current repository: ${b || "not detected"}`));
        let S = Eg(b);
        F1(`Using ${S ? "new Sessions API" : "legacy API"} to fetch sessions`);
        let d = S ? await NCB() : await LCB(),
          u = d;
        if (b)
          ((u = d.filter((m) => {
            if (!m.repo) return !1;
            return `${m.repo.owner.login}/${m.repo.name}` === b;
          })),
            F1(`Filtered ${u.length} sessions for repo ${b} from ${d.length} total`));
        let o = [...u].sort((m, j) => {
          let r = new Date(m.updated_at);
          return new Date(j.updated_at).getTime() - r.getTime();
        });
        Y(o);
      } catch (b) {
        let S = b instanceof Error ? b.message : String(b);
        (F1(`Error loading code sessions: ${S}`), V(yr5(S)));
      } finally {
        (X(!1), H(!1));
      }
    }, []),
    w = () => {
      (H(!0), C());
    };
  s0((b, S) => {
    if (S.escape || (S.ctrl && b === "c")) {
      B();
      return;
    }
    if (S.ctrl && b === "r" && F) {
      w();
      return;
    }
    if (F !== null && S.return) {
      B();
      return;
    }
  });
  let E = x9.useCallback(() => {
    (D(!0), C());
  }, [D, C]);
  if (!z) return x9.default.createElement(Eh1, { onComplete: E });
  if (J)
    return x9.default.createElement(
      y,
      { flexDirection: "column", padding: 1 },
      x9.default.createElement(
        y,
        { flexDirection: "row" },
        x9.default.createElement(u6, null),
        x9.default.createElement(M, { bold: !0 }, "Loading Claude Code sessions…"),
      ),
      x9.default.createElement(M, { dimColor: !0 }, K ? "Retrying…" : "Fetching your Claude Code sessions…"),
    );
  if (F)
    return x9.default.createElement(
      y,
      { flexDirection: "column", padding: 1 },
      x9.default.createElement(M, { bold: !0, color: "error" }, "Error loading Claude Code sessions"),
      kr5(F),
      x9.default.createElement(
        M,
        { dimColor: !0 },
        "Press ",
        x9.default.createElement(M, { bold: !0 }, "Ctrl+R"),
        " to retry · Press ",
        x9.default.createElement(M, { bold: !0 }, "Esc"),
        " ",
        "to cancel",
      ),
    );
  if (G.length === 0)
    return x9.default.createElement(
      y,
      { flexDirection: "column", padding: 1 },
      x9.default.createElement(
        M,
        { bold: !0 },
        "No Claude Code sessions found",
        I && x9.default.createElement(M, null, " for ", I),
      ),
      x9.default.createElement(
        y,
        { marginTop: 1 },
        x9.default.createElement(
          M,
          { dimColor: !0 },
          "Press ",
          x9.default.createElement(M, { bold: !0 }, "Esc"),
          " to cancel",
        ),
      ),
    );
  let L = G.map((b) => ({ ...b, timeString: c$1(new Date(b.updated_at)) })),
    O = Math.max(UPDATED_STATUS.length, ...L.map((b) => b.timeString.length)),
    R = L.map(({ timeString: b, title: S, id: d }) => {
      return { label: `${b.padEnd(O, " ")}  ${S}`, value: d };
    }),
    P = Q ? Math.min(G.length + 7, Z - 6) : Z - 1,
    _ = Q ? Math.min(G.length, 12) : Math.min(G.length, Z - 6);
  return x9.default.createElement(
    y,
    { flexDirection: "column", padding: 1, height: P },
    x9.default.createElement(
      M,
      { bold: !0 },
      "Select a session to resume",
      I && x9.default.createElement(M, { dimColor: !0 }, " (", I, ")"),
      ":",
    ),
    x9.default.createElement(
      y,
      { flexDirection: "column", marginY: 1, flexGrow: 1 },
      x9.default.createElement(
        y,
        { marginLeft: 2 },
        x9.default.createElement(M, { bold: !0 }, UPDATED_STATUS.padEnd(O, " "), Sr5, "Session Title"),
      ),
      x9.default.createElement(K9Q, {
        visibleOptionCount: _,
        options: R,
        onChange: (b) => {
          let S = G.find((d) => d.id === b);
          if (S) A(S);
        },
      }),
    ),
    x9.default.createElement(
      y,
      { flexDirection: "row" },
      x9.default.createElement(M, { dimColor: !0 }, "↑/↓ to select · Enter to confirm · Esc to cancel"),
    ),
  );
}
function yr5(A) {
  let B = A.toLowerCase();
  if (B.includes("fetch") || B.includes("network") || B.includes("timeout")) return "network";
  if (
    B.includes("auth") ||
    B.includes("token") ||
    B.includes("permission") ||
    B.includes("oauth") ||
    B.includes("not authenticated") ||
    B.includes("/login") ||
    B.includes("console account") ||
    B.includes("403")
  )
    return "auth";
  if (B.includes("api") || B.includes("rate limit") || B.includes("500") || B.includes("529")) return "api";
  return "other";
}
function kr5(A) {
  switch (A) {
    case "network":
      return x9.default.createElement(
        y,
        { marginY: 1, flexDirection: "column" },
        x9.default.createElement(M, { dimColor: !0 }, "Check your internet connection"),
      );
    case "auth":
      return x9.default.createElement(
        y,
        { marginY: 1, flexDirection: "column" },
        x9.default.createElement(M, { dimColor: !0 }, "Teleport requires a Claude account"),
        x9.default.createElement(
          M,
          { dimColor: !0 },
          "Run ",
          x9.default.createElement(M, { bold: !0 }, "/login"),
          ' and select "Claude account with subscription"',
        ),
      );
    case "api":
      return x9.default.createElement(
        y,
        { marginY: 1, flexDirection: "column" },
        x9.default.createElement(M, { dimColor: !0 }, "Sorry, Claude encountered an error"),
      );
    case "other":
      return x9.default.createElement(
        y,
        { marginY: 1, flexDirection: "row" },
        x9.default.createElement(M, { dimColor: !0 }, "Sorry, Claude Code encountered an error"),
      );
  }
}
var fl = A1(V1(), 1);
function D9Q(A) {
  let [B, Q] = fl.useState(!1),
    [Z, G] = fl.useState(null),
    [Y, I] = fl.useState(null),
    W = fl.useCallback(
      async (X) => {
        (Q(!0), G(null), I(X), Y1("tengu_teleport_resume_session", { source: A, session_id: X.id }));
        try {
          let F = await zW1(X.id, async (V) => {
            let K = {
              message: V instanceof I3 ? V.message : `Failed to resume session: ${V.message}`,
              formattedMessage: V instanceof I3 ? V.formattedMessage : void 0,
              isOperationError: V instanceof I3,
            };
            (G(K), Q(!1));
          });
          return (Q(!1), F);
        } catch (F) {
          let V = {
            message: F instanceof I3 ? F.message : F instanceof Error ? F.message : String(F),
            formattedMessage: F instanceof I3 ? F.formattedMessage : void 0,
            isOperationError: F instanceof I3,
          };
          return (G(V), Q(!1), null);
        }
      },
      [A],
    ),
    J = fl.useCallback(() => {
      G(null);
    }, []);
  return { resumeSession: W, isResuming: B, error: Z, selectedSession: Y, clearError: J };
}
function _r5({ onComplete: A, onCancel: B, onError: Q, isEmbedded: Z = !1, source: G }) {
  let { resumeSession: Y, isResuming: I, error: W, selectedSession: J } = D9Q(G),
    X = async (V) => {
      let K = await Y(V);
      if (K) A(K);
      else if (W) {
        if (Q) Q(W.message, W.formattedMessage);
      }
    },
    F = () => {
      (Y1("tengu_teleport_cancelled", {}), B());
    };
  if (I && J)
    return zK.default.createElement(
      y,
      { flexDirection: "column", padding: 1 },
      zK.default.createElement(
        y,
        { flexDirection: "row" },
        zK.default.createElement(u6, null),
        zK.default.createElement(M, { bold: !0 }, "Resuming session…"),
      ),
      zK.default.createElement(M, { dimColor: !0 }, 'Loading "', J.title, '"…'),
    );
  if (W && !Q)
    return zK.default.createElement(
      y,
      { flexDirection: "column", padding: 1 },
      zK.default.createElement(M, { bold: !0, color: "error" }, "Failed to resume session"),
      zK.default.createElement(M, { dimColor: !0 }, W.message),
      zK.default.createElement(
        y,
        { marginTop: 1 },
        zK.default.createElement(
          M,
          { dimColor: !0 },
          "Press ",
          zK.default.createElement(M, { bold: !0 }, "Esc"),
          " to cancel",
        ),
      ),
    );
  return zK.default.createElement(z9Q, { onSelect: X, onCancel: F, isEmbedded: Z });
}
async function C9Q() {
  return (
    F1("selectAndResumeTeleportTask: Starting teleport flow..."),
    new Promise((A) => {
      let { unmount: B } = s6(
        zK.default.createElement(
          M7,
          null,
          zK.default.createElement(_r5, {
            onComplete: (Q) => {
              (B(), A(Q));
            },
            onCancel: () => {
              (B(), A(null));
            },
            onError: (Q, Z) => {
              (process.stderr.write(
                Z
                  ? Z +
                      `
`
                  : `Error: ${Q}
`,
              ),
                B(),
                A(null));
            },
            source: "cliArg",
          }),
        ),
        { exitOnCtrlC: !1 },
      );
    })
  );
}
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
function hr5() {
  let A = Ng(),
    B = process.execArgv.some((Z) => {
      if (A) return /--inspect(-brk)?/.test(Z);
      else return /--inspect(-brk)?|--debug(-brk)?/.test(Z);
    }),
    Q = process.env.NODE_OPTIONS && /--inspect(-brk)?|--debug(-brk)?/.test(process.env.NODE_OPTIONS);
  try {
    return !!global.require("inspector").url() || B || Q;
  } catch {
    return B || Q;
  }
}
if (hr5()) process.exit(1);
function gr5() {
  let A = H0();
  TA({
    ...A,
    hasCompletedOnboarding: !0,
    lastOnboardingVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://docs.anthropic.com/s/claude-code",
      VERSION: "1.0.119",
    }.VERSION,
  });
}
async function ur5(A, B) {
  if (EQ(!1) || process.env.IS_DEMO) return !1;
  let Q = H0(),
    Z = !1;
  if (!Q.theme || !Q.hasCompletedOnboarding)
    ((Z = !0),
      await n7(),
      await new Promise((G) => {
        let { unmount: Y } = s6(
          k7.default.createElement(
            M7,
            { onChangeAppState: bl },
            k7.default.createElement(gKB, {
              onDone: async () => {
                (gr5(), await n7(), Y(), G());
              },
            }),
          ),
          { exitOnCtrlC: !1 },
        );
      }));
  if (await CA1())
    await new Promise((G) => {
      let { unmount: Y } = s6(
        k7.default.createElement(
          M7,
          null,
          k7.default.createElement(Hg1, {
            showIfAlreadyViewed: !1,
            location: Z ? "onboarding" : "policy_update_modal",
            onDone: (I) => {
              if (I === "escape") {
                (Y1("tengu_grove_policy_exited", {}), G5(0));
                return;
              }
              (Y(), G());
            },
          }),
        ),
        { exitOnCtrlC: !1 },
      );
    });
  if (process.env.ANTHROPIC_API_KEY) {
    let G = ND(process.env.ANTHROPIC_API_KEY);
    if (hf1(G) === "new")
      await new Promise((I) => {
        let { unmount: W } = s6(
          k7.default.createElement(
            M7,
            { onChangeAppState: bl },
            k7.default.createElement(bf1, {
              customApiKeyTruncated: G,
              onDone: () => {
                (W(), I());
              },
            }),
          ),
          { exitOnCtrlC: !1 },
        );
      });
  }
  if (A !== "bypassPermissions" && process.env.CLAUBBIT !== "true") {
    if (
      (await new Promise((I) => {
        let { unmount: W } = s6(
          k7.default.createElement(
            M7,
            null,
            k7.default.createElement(yQQ, {
              commands: B,
              onDone: () => {
                (W(), I());
              },
            }),
          ),
          { exitOnCtrlC: !1 },
        );
      }),
      dZ1())
    )
      dBQ();
    jD();
    let { errors: Y } = A_();
    if (Y.length === 0) await iQQ();
    if (await QXB())
      await new Promise((I) => {
        let { unmount: W } = s6(
          k7.default.createElement(
            M7,
            null,
            k7.default.createElement(cb1, {
              onDone: () => {
                (W(), I());
              },
            }),
          ),
          { exitOnCtrlC: !1 },
        );
      });
  }
  if ((WT0(), A === "bypassPermissions" && !H0().bypassPermissionsModeAccepted))
    await new Promise((G) => {
      let { unmount: Y } = s6(
        k7.default.createElement(
          M7,
          null,
          k7.default.createElement(nQQ, {
            onAccept: () => {
              (Y(), G());
            },
          }),
        ),
      );
    });
  return Z;
}
async function $9Q(A, B) {
  try {
    let Q = await E01(A, B);
    if (Q.type === "connected") return "✓ Connected";
    else if (Q.type === "needs-auth") return "⚠ Needs authentication";
    else return "✗ Failed to connect";
  } catch (Q) {
    return "✗ Connection error";
  }
}
function mr5() {
  let A = H0();
  (TA({ ...A, numStartups: (A.numStartups ?? 0) + 1 }), dr5(), C7A()?.add(1));
}
async function dr5() {
  let [A, B] = await Promise.all([JL(), A61()]);
  Y1("tengu_startup_telemetry", { is_git: A, worktree_count: B });
}
function cr5() {
  (aQQ(), sQQ(), rQQ(), oQQ(), tQQ(), K$A());
}
function lr5() {
  if (FF()) {
    jD();
    return;
  }
  if (kM(!0)) jD();
}
async function hf(A, B, Q, Z, G) {
  let Y = process.version.match(/^v(\d+)\./)?.[1];
  if (!Y || parseInt(Y) < 18)
    (console.error(n1.bold.red("Error: Claude Code requires Node.js version 18 or higher.")), process.exit(1));
  if (G) vk(G);
  $A0();
  let I = fRA();
  if (I.status === "restored")
    console.log(
      n1.yellow(
        "Detected an interrupted iTerm2 setup. Your original settings have been restored. You may need to restart iTerm2 for the changes to take effect.",
      ),
    );
  else if (I.status === "failed")
    console.error(
      n1.red(
        `Failed to restore iTerm2 settings. Please manually restore your original settings with: defaults import com.googlecode.iterm2 ${I.backupPath}.`,
      ),
    );
  try {
    let F = await Pw1();
    if (F.status === "restored")
      console.log(
        n1.yellow(
          "Detected an interrupted Terminal.app setup. Your original settings have been restored. You may need to restart Terminal.app for the changes to take effect.",
        ),
      );
    else if (F.status === "failed")
      console.error(
        n1.red(
          `Failed to restore Terminal.app settings. Please manually restore your original settings with: defaults import com.apple.Terminal ${F.backupPath}.`,
        ),
      );
  } catch (F) {
    U1(F instanceof Error ? F : new Error(String(F)), HZA);
  }
  let W = Q ?? !1;
  (V$(A),
    rBQ(),
    SV(),
    uQQ(),
    cQQ(),
    iL0(),
    WTB(),
    I21(),
    Yu1(),
    Au1(),
    rg1(W),
    eV(),
    lr5(),
    Ff(),
    VTB(),
    rg2(),
    fG1().catch((F) => U1(F, KZA)),
    Sb1([], U2()),
    n5B(),
    nX2(),
    qJB().catch((F) => U1(F, XZA)),
    HPA());
  let J = C4();
  if ((setTimeout(() => J.abort(), 3000), OC1(AA(), J.signal, []), B === "bypassPermissions")) {
    if (
      process.platform !== "win32" &&
      typeof process.getuid === "function" &&
      process.getuid() === 0 &&
      !process.env.IS_SANDBOX
    )
      (console.error("--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons"),
        process.exit(1));
  }
  let X = w9();
  if (X.lastCost !== void 0 && X.lastDuration !== void 0)
    (Y1("tengu_exit", {
      last_session_cost: X.lastCost,
      last_session_api_duration: X.lastAPIDuration,
      last_session_tool_duration: X.lastToolDuration,
      last_session_duration: X.lastDuration,
      last_session_lines_added: X.lastLinesAdded,
      last_session_lines_removed: X.lastLinesRemoved,
      last_session_total_input_tokens: X.lastTotalInputTokens,
      last_session_total_output_tokens: X.lastTotalOutputTokens,
      last_session_total_cache_creation_input_tokens: X.lastTotalCacheCreationInputTokens,
      last_session_total_cache_read_input_tokens: X.lastTotalCacheReadInputTokens,
      last_session_id: X.lastSessionId,
    }),
      i8({
        ...X,
        lastCost: void 0,
        lastAPIDuration: void 0,
        lastToolDuration: void 0,
        lastDuration: void 0,
        lastLinesAdded: void 0,
        lastLinesRemoved: void 0,
        lastTotalInputTokens: void 0,
        lastTotalOutputTokens: void 0,
        lastTotalCacheCreationInputTokens: void 0,
        lastTotalCacheReadInputTokens: void 0,
        lastSessionId: void 0,
      }));
}
function pr5(A) {
  try {
    let B = A.trim(),
      Q = B.startsWith("{") && B.endsWith("}"),
      Z;
    if (Q) {
      if (!d3(B))
        (process.stderr.write(
          n1.red(`Error: Invalid JSON provided to --settings
`),
        ),
          process.exit(1));
      ((Z = qR0("claude-settings", ".json")), fr5(Z, B, "utf8"));
    } else {
      let { resolvedPath: G } = cJ(w1(), A);
      if (!$_0(G))
        (process.stderr.write(
          n1.red(`Error: Settings file not found: ${G}
`),
        ),
          process.exit(1));
      Z = G;
    }
    (y7A(Z), F61());
  } catch (B) {
    if (B instanceof Error) U1(B, VZA);
    (process.stderr.write(
      n1.red(`Error processing settings: ${B instanceof Error ? B.message : String(B)}
`),
    ),
      process.exit(1));
  }
}
function ir5(A) {
  if (process.env.CLAUDE_CODE_ENTRYPOINT) return;
  let B = process.argv.slice(2),
    Q = B.indexOf("mcp");
  if (Q !== -1 && B[Q + 1] === "serve") {
    process.env.CLAUDE_CODE_ENTRYPOINT = "mcp";
    return;
  }
  process.env.CLAUDE_CODE_ENTRYPOINT = A ? "sdk-cli" : "cli";
}
async function nr5() {
  if (((process.env.NoDefaultCurrentDirectoryInExePath = "1"), HTB(), process.argv[2] === "--ripgrep")) {
    let J = process.argv.slice(3);
    process.exit(oBQ(J));
  }
  (process.on("exit", () => {
    or5();
  }),
    process.on("SIGINT", () => {
      process.exit(0);
    }));
  let A = process.argv.slice(2),
    B = A.includes("-p") || A.includes("--print"),
    Q = A.some((J) => J.startsWith("--sdk-url")),
    Z = B || Q || !process.stdout.isTTY;
  (M7A(Z), ir5(Z), R7A(!Z));
  let Y = (() => {
    if (process.env.GITHUB_ACTIONS === "true") return "github-action";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-ts") return "sdk-typescript";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-py") return "sdk-python";
    if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-cli") return "sdk-cli";
    return "cli";
  })();
  P7A(Y);
  let I = process.argv.findIndex((J) => J === "--settings");
  if (I !== -1 && I + 1 < process.argv.length) {
    let J = process.argv[I + 1];
    if (J) pr5(J);
  }
  let W = mBQ();
  if (W instanceof Promise) await W;
  ((process.title = "claude"), await rr5());
}
function ar5(A) {
  let B = {
    exitOnCtrlC: A,
    onFlicker: (Q, Z) => {
      Y1("tengu_flicker", { desiredHeight: Q, actualHeight: Z });
    },
  };
  if (!process.stdin.isTTY && !EQ(!1) && !process.argv.includes("mcp")) {
    if ((Y1("tengu_stdin_interactive", {}), process.platform !== "win32"))
      try {
        let Q = vr5("/dev/tty", "r");
        B = { ...B, stdin: new xr5(Q) };
      } catch (Q) {
        U1(Q, zZA);
      }
  }
  return B;
}
async function sr5(A, B) {
  if (!process.stdin.isTTY && !process.argv.includes("mcp")) {
    if (B === "stream-json") return process.stdin;
    process.stdin.setEncoding("utf8");
    let Q = "";
    return (
      process.stdin.on("data", (Z) => {
        Q += Z;
      }),
      await new Promise((Z) => {
        process.stdin.on("end", Z);
      }),
      [A, Q].filter(Boolean).join(`
`)
    );
  }
  return A;
}
async function rr5() {
  cr5();
  let A = new DQQ();
  (A.name("claude")
    .description("Claude Code - starts an interactive session by default, use -p/--print for non-interactive output")
    .argument("[prompt]", "Your prompt", String)
    .helpOption("-h, --help", "Display help for command")
    .option(
      "-d, --debug [filter]",
      'Enable debug mode with optional category filtering (e.g., "api,hooks" or "!statsig,!file")',
      (Z) => {
        return !0;
      },
    )
    .addOption(new Fw("-d2e, --debug-to-stderr", "Enable debug mode (to stderr)").argParser(Boolean).hideHelp())
    .option("--verbose", "Override verbose mode setting from config", () => !0)
    .option(
      "-p, --print",
      "Print response and exit (useful for pipes). Note: The workspace trust dialog is skipped when Claude is run with the -p mode. Only use this flag in directories you trust.",
      () => !0,
    )
    .addOption(
      new Fw(
        "--output-format <format>",
        'Output format (only works with --print): "text" (default), "json" (single result), or "stream-json" (realtime streaming)',
      ).choices(["text", "json", "stream-json"]),
    )
    .option(
      "--include-partial-messages",
      "Include partial message chunks as they arrive (only works with --print and --output-format=stream-json)",
      () => !0,
    )
    .addOption(
      new Fw(
        "--input-format <format>",
        'Input format (only works with --print): "text" (default), or "stream-json" (realtime streaming input)',
      ).choices(["text", "stream-json"]),
    )
    .option(
      "--mcp-debug",
      "[DEPRECATED. Use --debug instead] Enable MCP debug mode (shows MCP server errors)",
      () => !0,
    )
    .option(
      "--dangerously-skip-permissions",
      "Bypass all permission checks. Recommended only for sandboxes with no internet access.",
      () => !0,
    )
    .addOption(
      new Fw(
        "--max-turns <turns>",
        "Maximum number of agentic turns in non-interactive mode. This will early exit the conversation after the specified number of turns. (only works with --print)",
      )
        .argParser(Number)
        .hideHelp(),
    )
    .option(
      "--replay-user-messages",
      "Re-emit user messages from stdin back on stdout for acknowledgment (only works with --input-format=stream-json and --output-format=stream-json)",
      () => !0,
    )
    .option(
      "--allowedTools, --allowed-tools <tools...>",
      'Comma or space-separated list of tool names to allow (e.g. "Bash(git:*) Edit")',
    )
    .option(
      "--disallowedTools, --disallowed-tools <tools...>",
      'Comma or space-separated list of tool names to deny (e.g. "Bash(git:*) Edit")',
    )
    .option("--mcp-config <configs...>", "Load MCP servers from JSON files or strings (space-separated)")
    .addOption(
      new Fw("--permission-prompt-tool <tool>", "MCP tool to use for permission prompts (only works with --print)")
        .argParser(String)
        .hideHelp(),
    )
    .addOption(
      new Fw("--system-prompt <prompt>", "System prompt to use for the session  (only works with --print)")
        .argParser(String)
        .hideHelp(),
    )
    .addOption(
      new Fw("--system-prompt-file <file>", "Read system prompt from a file (only works with --print)")
        .argParser(String)
        .hideHelp(),
    )
    .addOption(
      new Fw("--append-system-prompt <prompt>", "Append a system prompt to the default system prompt").argParser(
        String,
      ),
    )
    .addOption(
      new Fw("--permission-mode <mode>", "Permission mode to use for the session").argParser(String).choices(p41),
    )
    .option("-c, --continue", "Continue the most recent conversation", () => !0)
    .option(
      "-r, --resume [sessionId]",
      "Resume a conversation - provide a session ID or interactively select a conversation to resume",
      (Z) => Z || !0,
    )
    .option(
      "--fork-session",
      "When resuming, create a new session ID instead of reusing the original (use with --resume or --continue)",
      () => !0,
    )
    .option(
      "--model <model>",
      "Model for the current session. Provide an alias for the latest model (e.g. 'sonnet' or 'opus') or a model's full name (e.g. 'claude-sonnet-4-20250514').",
    )
    .option(
      "--fallback-model <model>",
      "Enable automatic fallback to specified model when default model is overloaded (only works with --print)",
    )
    .option(
      "--settings <file-or-json>",
      "Path to a settings JSON file or a JSON string to load additional settings from",
    )
    .option("--add-dir <directories...>", "Additional directories to allow tool access to")
    .option("--ide", "Automatically connect to IDE on startup if exactly one valid IDE is available", () => !0)
    .option(
      "--strict-mcp-config",
      "Only use MCP servers from --mcp-config, ignoring all other MCP configurations",
      () => !0,
    )
    .option("--session-id <uuid>", "Use a specific session ID for the conversation (must be a valid UUID)")
    .action(async (Z, G) => {
      if (Z === "code")
        (Y1("tengu_code_prompt_ignored", {}),
          console.warn(n1.yellow("Tip: You can launch Claude Code with just `claude`")),
          (Z = void 0));
      if (Z && typeof Z === "string" && !/\s/.test(Z) && Z.length > 0)
        Y1("tengu_single_word_prompt", { length: Z.length });
      let {
          debug: Y = !1,
          debugToStderr: I = !1,
          dangerouslySkipPermissions: W,
          allowedTools: J = [],
          disallowedTools: X = [],
          mcpConfig: F = [],
          permissionMode: V,
          addDir: K = [],
          fallbackModel: H,
          ide: z = !1,
          sessionId: D,
          includePartialMessages: C,
        } = G,
        w = G.outputFormat,
        E = G.inputFormat,
        L = G.verbose,
        O = G.print;
      if (L10() && (G.strictMcpConfig || G.mcpConfig))
        (process.stderr.write(
          n1.red("You cannot dynamically configure your MCP configuration when an enterprise MCP config is present"),
        ),
          process.exit(1));
      let R = G.strictMcpConfig || !1,
        P = !1,
        _ = void 0;
      if (_) {
        if (!E) E = "stream-json";
        if (!w) w = "stream-json";
        if (!G.verbose) L = !0;
        if (!G.print) O = !0;
      }
      let b = G.teleport ?? null,
        S = G.remote ?? null;
      if (D) {
        if (G.continue || G.resume)
          (process.stderr.write(
            n1.red(`Error: --session-id cannot be used with --continue or --resume.
`),
          ),
            process.exit(1));
        let W0 = tV(D);
        if (!W0)
          (process.stderr.write(
            n1.red(`Error: Invalid session ID. Must be a valid UUID.
`),
          ),
            process.exit(1));
        if (PRB(W0))
          (process.stderr.write(
            n1.red(`Error: Session ID ${W0} is already in use.
`),
          ),
            process.exit(1));
      }
      let d = FF();
      if (H && G.model && H === G.model)
        (process.stderr.write(
          n1.red(`Error: Fallback model cannot be the same as the main model. Please specify a different model for --fallback-model.
`),
        ),
          process.exit(1));
      let u = G.systemPrompt;
      if (G.systemPromptFile) {
        if (G.systemPrompt)
          (process.stderr.write(
            n1.red(`Error: Cannot use both --system-prompt and --system-prompt-file. Please use only one.
`),
          ),
            process.exit(1));
        try {
          let W0 = U9Q(G.systemPromptFile);
          if (!$_0(W0))
            (process.stderr.write(
              n1.red(`Error: System prompt file not found: ${W0}
`),
            ),
              process.exit(1));
          u = br5(W0, "utf8");
        } catch (W0) {
          (process.stderr.write(
            n1.red(`Error reading system prompt file: ${W0 instanceof Error ? W0.message : String(W0)}
`),
          ),
            process.exit(1));
        }
      }
      let o = MPA({ permissionModeCli: V, dangerouslySkipPermissions: W }),
        m = void 0;
      if (F && F.length > 0) {
        let W0 = F.map((j0) => j0.trim()).filter((j0) => j0.length > 0),
          z1 = {},
          l1 = [];
        for (let j0 of W0) {
          let q0 = null,
            ZA = [],
            IA = d3(j0);
          if (IA) {
            let qA = n41({ configObject: IA, filePath: "command line", expandVars: !0, scope: "dynamic" });
            if (qA.config) q0 = qA.config.mcpServers;
            else ZA = qA.errors;
          } else {
            let qA = U9Q(j0),
              SA = a41({ filePath: qA, expandVars: !0, scope: "dynamic" });
            if (SA.config) q0 = SA.config.mcpServers;
            else ZA = SA.errors;
          }
          if (ZA.length > 0) l1.push(...ZA);
          else if (q0) z1 = { ...z1, ...q0 };
        }
        if (l1.length > 0) {
          let j0 = l1.map((q0) => `${q0.path ? q0.path + ": " : ""}${q0.message}`).join(`
`);
          throw new Error(`Invalid MCP configuration:
${j0}`);
        }
        if (Object.keys(z1).length > 0) m = ny(z1, (j0) => ({ ...j0, scope: "dynamic" }));
      }
      let { toolPermissionContext: j, warnings: r } = OPA({
        allowedToolsCli: J,
        disallowedToolsCli: X,
        permissionMode: o,
        addDirs: K,
      });
      (r.forEach((W0) => {
        console.error(W0);
      }),
        uQB());
      let Q1 = R ? {} : IL(),
        J1 = { ...m, ...Q1 },
        R1 = {},
        s1 = {};
      for (let [W0, z1] of Object.entries(J1))
        if (z1.type === "sdk") R1[W0] = z1;
        else s1[W0] = z1;
      if (E && E !== "text" && E !== "stream-json")
        (console.error(`Error: Invalid input format "${E}".`), process.exit(1));
      if (E === "stream-json" && w !== "stream-json")
        (console.error("Error: --input-format=stream-json requires output-format=stream-json."), process.exit(1));
      if (_) {
        if (E !== "stream-json" || w !== "stream-json")
          (console.error("Error: --sdk-url requires both --input-format=stream-json and --output-format=stream-json."),
            process.exit(1));
      }
      if (G.replayUserMessages) {
        if (E !== "stream-json" || w !== "stream-json")
          (console.error(
            "Error: --replay-user-messages requires both --input-format=stream-json and --output-format=stream-json.",
          ),
            process.exit(1));
      }
      if (C) {
        if (!d || w !== "stream-json")
          (jT("Error: --include-partial-messages requires --print and --output-format=stream-json."), process.exit(1));
      }
      let Z0 = await sr5(Z || "", E ?? "text"),
        _0 = !process.stdin.isTTY,
        D0 = vE(j, H0().todoFeatureEnabled),
        C1 = G.model === "default" ? Nm() : G.model,
        g1 = H === "default" ? Nm() : H;
      await hf(ff(), o, O ?? !1, P, D ? tV(D) : void 0);
      let [v1, o1] = await Promise.all([I21(), y$()]);
      if (!d) {
        let W0 = await ur5(o, v1);
        if (W0 && Z?.trim().toLowerCase() === "/login") Z = "";
        if (!W0) Wb1();
      }
      let K0 = Z0 || d ? await _w0(s1) : { clients: [], tools: [], commands: [] };
      if (!Z0 && !d) _w0(s1);
      let { clients: U0, tools: B1, commands: I1 } = K0;
      if (
        (Y1("tengu_init", {
          entrypoint: "claude",
          hasInitialPrompt: Boolean(Z),
          hasStdin: Boolean(Z0),
          verbose: L,
          debug: Y,
          debugToStderr: I,
          print: O,
          outputFormat: w,
          inputFormat: E,
          numAllowedTools: J.length,
          numDisallowedTools: X.length,
          mcpClientCount: Object.keys(IL()).length,
          worktree: P,
          skipWebFetchPreflight: E2().skipWebFetchPreflight,
          todoFeatureEnabled: H0().todoFeatureEnabled,
          ...(process.env.GITHUB_ACTION_INPUTS && { githubActionInputs: process.env.GITHUB_ACTION_INPUTS }),
        }),
        Pb1(null, "initialization"),
        d)
      ) {
        if (w === "stream-json" || w === "json") yIA(!0);
        WT0();
        let W0 = v1.filter(
            (l1) =>
              (l1.type === "prompt" && !l1.disableNonInteractive) || (l1.type === "local" && l1.supportsNonInteractive),
          ),
          z1 = a01();
        if (
          ((z1 = { ...z1, mcp: { ...z1.mcp, clients: U0, commands: I1, tools: B1 }, toolPermissionContext: j }),
          j.mode === "bypassPermissions")
        ) {
          let l1 = await RPA(j);
          if (l1) z1 = { ...z1, toolPermissionContext: l1 };
        }
        G9Q(
          Z0,
          async () => z1,
          (l1) => {
            z1 = l1(z1);
          },
          W0,
          D0,
          R1,
          {
            continue: G.continue,
            resume: G.resume,
            verbose: L,
            outputFormat: w,
            permissionPromptToolName: G.permissionPromptTool,
            allowedTools: J,
            maxTurns: G.maxTurns,
            systemPrompt: u,
            appendSystemPrompt: G.appendSystemPrompt,
            userSpecifiedModel: C1,
            fallbackModel: g1,
            teleport: b,
            sdkUrl: _,
            replayUserMessages: G.replayUserMessages,
            includePartialMessages: C,
          },
        );
        return;
      }
      let H1 = ar5(!1);
      if (
        (Y1("tengu_startup_manual_model_config", {
          cli_flag: G.model,
          env_var: process.env.ANTHROPIC_MODEL,
          settings_file: (E2() || {}).model,
          subscriptionType: PZ(),
        }),
        H0().hasOpusPlanDefault === void 0)
      )
        TA({ ...H0(), hasOpusPlanDefault: D8("userSettings")?.model === "opusplan" });
      let h1 = G.model || process.env.ANTHROPIC_MODEL || E2().model;
      if (b2() && !kV() && h1 !== void 0 && h1.includes("opus"))
        console.error(
          n1.yellow(
            "Claude Pro users are not currently able to use Opus in Claude Code. The current model is now Sonnet.",
          ),
        );
      (Lg(C1), z7A(Wt() || null));
      let x1 = mz("cc_plan_mode_first_session", "start_in_plan_mode", !1),
        _1 = H0(),
        p1 = j;
      if (x1 && _1.numStartups === 0 && j.mode === "default") p1 = { ...j, mode: "plan" };
      let r1 = U2(),
        J0 = {
          backgroundTasks: {},
          verbose: L ?? !1,
          mainLoopModel: $D1(),
          todoFeatureEnabled: H0().todoFeatureEnabled,
          showExpandedTodos: H0().showExpandedTodos ?? !1,
          toolPermissionContext: p1,
          maxRateLimitFallbackActive: !1,
          checkpointing: {
            status: "uninitialized",
            checkpoints: {},
            shadowRepoPath: void 0,
            saveError: void 0,
            saving: !1,
            autocheckpointEnabled: !1,
          },
          mcp: { clients: [], tools: [], commands: [], resources: {} },
          plugins: { enabled: [], disabled: [], commands: [], agents: [] },
          statusLineText: void 0,
          todos: { [r1]: AS(r1) },
          fileHistory: { snapshots: [], trackedFiles: new Set() },
        };
      if ((mr5(), G.continue))
        try {
          Y1("tengu_continue", {});
          let W0 = await nb(void 0, B1);
          if (!W0) (console.error("No conversation found to continue"), process.exit(1));
          if (!G.forkSession) {
            let z1 = tV(W0.log.messages.find((l1) => l1.sessionId)?.sessionId);
            if (z1) vk(z1);
          }
          s6(
            k7.default.createElement(
              M7,
              { initialState: J0, onChangeAppState: bl },
              k7.default.createElement(H21, {
                debug: Y || I,
                initialPrompt: Z0,
                commands: [...v1, ...I1],
                initialTools: B1,
                initialMessages: W0.messages,
                initialCheckpoints: W0.log.checkpoints,
                mcpClients: U0,
                dynamicMcpConfig: m,
                autoConnectIdeFlag: z,
                strictMcpConfig: R,
                appendSystemPrompt: G.appendSystemPrompt,
                agentDefinitions: o1,
              }),
            ),
            H1,
          );
        } catch (W0) {
          (U1(W0 instanceof Error ? W0 : new Error(String(W0)), JZA), process.exit(1));
        }
      else if (G.resume || b || S) {
        let W0 = null,
          z1 = void 0,
          l1 = tV(G.resume);
        if (S) {
          Y1("tengu_remote_create_session", { description_length: String(S.length) });
          let j0 = await jCB(S);
          if (!j0)
            (Y1("tengu_remote_create_session_error", { error: "unable_to_create_session" }),
              process.stderr.write(
                n1.red(`Error: Unable to create remote session
`),
              ),
              await Z5(1),
              process.exit(1));
          (Y1("tengu_remote_create_session_success", { session_id: j0.id }),
            process.stdout.write(`Created remote session: ${j0.title}
`),
            process.stdout.write(`View: https://claude.ai/code/${j0.id}?m=0
`),
            process.stdout.write(`Resume with: claude --teleport ${j0.id}
`),
            await Z5(0),
            process.exit(0));
        } else if (b) {
          if (b === !0 || b === "") {
            Y1("tengu_teleport_interactive_mode", {});
            let j0 = await C9Q();
            if (!j0) (await Z5(0), process.exit(0));
            W0 = (await HW1(TE(j0.log), j0.branch)).messages;
          } else if (typeof b === "string") {
            Y1("tengu_teleport_resume_session", { mode: "direct" });
            try {
              await Nh1();
              let j0 = await PCB(b, async (q0) => {
                if (q0 instanceof I3)
                  process.stderr.write(
                    q0.formattedMessage +
                      `
`,
                  );
                else
                  process.stderr.write(`Error: ${q0.message}
`);
              });
              W0 = (await HW1(TE(j0.log), j0.branch)).messages;
            } catch {
              await Z5(1);
            }
          }
        }
        if (l1) {
          let j0 = l1;
          try {
            let q0 = await nb(j0, B1);
            if (!q0) (console.error(`No conversation found with session ID: ${j0}`), process.exit(1));
            if (((W0 = q0.messages), (z1 = q0.log.checkpoints), !G.forkSession)) vk(j0);
          } catch (q0) {
            (U1(q0 instanceof Error ? q0 : new Error(String(q0)), FZA),
              console.error(`Failed to resume session ${j0}`),
              process.exit(1));
          }
        }
        if (Array.isArray(W0))
          s6(
            k7.default.createElement(
              M7,
              { initialState: J0, onChangeAppState: bl },
              k7.default.createElement(H21, {
                debug: Y || I,
                initialPrompt: Z0,
                commands: [...v1, ...I1],
                initialTools: B1,
                initialMessages: W0,
                initialCheckpoints: z1,
                mcpClients: U0,
                dynamicMcpConfig: m,
                autoConnectIdeFlag: z,
                strictMcpConfig: R,
                appendSystemPrompt: G.appendSystemPrompt,
                agentDefinitions: o1,
                hasPipedInput: _0,
              }),
            ),
            H1,
          );
        else {
          let j0 = {},
            q0 = await kA1();
          if (!q0.length) (console.error("No conversations found to resume"), process.exit(1));
          let { unmount: ZA } = s6(
            k7.default.createElement(kQQ, {
              commands: [...v1, ...I1],
              context: j0,
              debug: Y || I,
              logs: q0,
              initialTools: B1,
              mcpClients: U0,
              dynamicMcpConfig: m,
              appState: J0,
              agentDefinitions: o1,
              onChangeAppState: bl,
              strictMcpConfig: R,
              appendSystemPrompt: G.appendSystemPrompt,
            }),
            H1,
          );
          j0.unmount = ZA;
        }
      } else {
        let W0 = await S$("startup");
        s6(
          k7.default.createElement(
            M7,
            { initialState: J0, onChangeAppState: bl },
            k7.default.createElement(H21, {
              debug: Y || I,
              commands: [...v1, ...I1],
              initialPrompt: Z0,
              initialTools: B1,
              initialMessages: W0,
              mcpClients: U0,
              dynamicMcpConfig: m,
              autoConnectIdeFlag: z,
              strictMcpConfig: R,
              appendSystemPrompt: G.appendSystemPrompt,
              agentDefinitions: o1,
              hasPipedInput: _0,
            }),
          ),
          H1,
        );
      }
    })
    .version(
      `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://docs.anthropic.com/s/claude-code", VERSION: "1.0.119" }.VERSION} (Claude Code)`,
      "-v, --version",
      "Output the version number",
    ),
    A.addOption(new Fw("--teleport [session]", "Resume a teleport session, optionally specify session ID").hideHelp()),
    A.addOption(new Fw("--remote <description>", "Create a remote session with the given description").hideHelp()));
  let B = A.command("config")
    .description("Manage configuration (eg. claude config set -g theme dark)")
    .helpOption("-h, --help", "Display help for command");
  (B.command("get <key>")
    .description("Get a config value")
    .option("-g, --global", "Use global config")
    .helpOption("-h, --help", "Display help for command")
    .action(async (Z, { global: G }) => {
      (await hf(ff(), "default", !1, !1, void 0),
        Y1("tengu_config_get", { key: Z, global: G }),
        eZ(
          JSON.stringify(BTB(Z, G ?? !1)) +
            `
`,
        ),
        process.exit(0));
    }),
    B.command("set <key> <value>")
      .description("Set a config value")
      .option("-g, --global", "Use global config")
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z, G, { global: Y }) => {
        (await hf(ff(), "default", !1, !1, void 0),
          Y1("tengu_config_set", { key: Z, global: Y }),
          QTB(Z, G, Y ?? !1),
          eZ(`Set ${Z} to ${G}
`),
          process.exit(0));
      }),
    B.command("remove <key> [values...]")
      .alias("rm")
      .description("Remove a config value or items from a config array")
      .option("-g, --global", "Use global config")
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z, G, { global: Y }) => {
        if ((await hf(ff(), "default", !1, !1, void 0), q21(Z, Y ?? !1) && G && G.length > 0)) {
          let I = G.flatMap((W) => (W.includes(",") ? W.split(",") : W))
            .map((W) => W.trim())
            .filter((W) => W.length > 0);
          if (I.length === 0) (console.error("Error: No valid values provided"), process.exit(1));
          (Y1("tengu_config_remove", { key: Z, global: Y, count: G.length }),
            rRB(Z, I, Y ?? !1, !1),
            console.log(`Removed from ${Z} in ${Y ? "global" : "project"} config: ${I.join(", ")}`));
        } else
          (Y1("tengu_config_delete", { key: Z, global: Y }),
            ZTB(Z, Y ?? !1),
            eZ(
              JSON.stringify(`Removed ${Z}`) +
                `
`,
            ));
        process.exit(0);
      }),
    B.command("list")
      .alias("ls")
      .description("List all config values")
      .option("-g, --global", "Use global config", !1)
      .helpOption("-h, --help", "Display help for command")
      .action(async ({ global: Z }) => {
        (await hf(ff(), "default", !1, !1, void 0),
          Y1("tengu_config_list", { global: Z }),
          eZ(
            JSON.stringify(GTB(Z ?? !1), null, 2) +
              `
`,
          ),
          process.exit(0));
      }),
    B.command("add <key> <values...>")
      .description("Add items to a config array (space or comma separated)")
      .option("-g, --global", "Use global config")
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z, G, { global: Y }) => {
        await hf(ff(), "default", !1, !1, void 0);
        let I = G.flatMap((W) => (W.includes(",") ? W.split(",") : W))
          .map((W) => W.trim())
          .filter((W) => W.length > 0);
        if (I.length === 0) (console.error("Error: No valid values provided"), process.exit(1));
        (Y1("tengu_config_add", { key: Z, global: Y, count: G.length }),
          Ru1(Z, I, Y ?? !1, !1),
          console.log(`Added to ${Z} in ${Y ? "global" : "project"} config: ${I.join(", ")}`),
          process.exit(0));
      }));
  let Q = A.command("mcp")
    .description("Configure and manage MCP servers")
    .helpOption("-h, --help", "Display help for command");
  return (
    Q.command("serve")
      .description("Start the Claude Code MCP server")
      .helpOption("-h, --help", "Display help for command")
      .option("-d, --debug", "Enable debug mode", () => !0)
      .option("--verbose", "Override verbose mode setting from config", () => !0)
      .action(async ({ debug: Z, verbose: G }) => {
        let Y = ff();
        if ((Y1("tengu_mcp_start", {}), !$_0(Y)))
          (console.error(`Error: Directory ${Y} does not exist`), process.exit(1));
        try {
          (await hf(Y, "default", !1, !1, void 0), await bQQ(Y, Z ?? !1, G ?? !1));
        } catch (I) {
          (console.error("Error: Failed to start MCP server:", I), process.exit(1));
        }
      }),
    Q.command("add <name> <commandOrUrl> [args...]")
      .description("Add a server")
      .option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local")
      .option("-t, --transport <transport>", "Transport type (stdio, sse, http)", "stdio")
      .option("-e, --env <env...>", "Set environment variables (e.g. -e KEY=value)")
      .option("-H, --header <header...>", 'Set WebSocket headers (e.g. -H "X-Api-Key: abc123" -H "X-Custom: value")')
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z, G, Y, I) => {
        if (!Z)
          (console.error("Error: Server name is required."),
            console.error("Usage: claude mcp add <name> <command> [args...]"),
            process.exit(1));
        else if (!G)
          (console.error("Error: Command is required when server name is provided."),
            console.error("Usage: claude mcp add <name> <command> [args...]"),
            process.exit(1));
        try {
          let W = r41(I.scope),
            J = N$A(I.transport);
          if ((Y1("tengu_mcp_add", { type: J, scope: W, source: "command", transport: J }), J === "sse")) {
            if (!G) (console.error("Error: URL is required for SSE transport."), process.exit(1));
            let X = I.header ? O10(I.header) : void 0;
            if (
              (ng(Z, { type: "sse", url: G, headers: X }, W),
              process.stdout.write(`Added SSE MCP server ${Z} with URL: ${G} to ${W} config
`),
              X)
            )
              process.stdout.write(`Headers: ${JSON.stringify(X, null, 2)}
`);
          } else if (J === "http") {
            if (!G) (console.error("Error: URL is required for HTTP transport."), process.exit(1));
            let X = I.header ? O10(I.header) : void 0;
            if (
              (ng(Z, { type: "http", url: G, headers: X }, W),
              process.stdout.write(`Added HTTP MCP server ${Z} with URL: ${G} to ${W} config
`),
              X)
            )
              process.stdout.write(`Headers: ${JSON.stringify(X, null, 2)}
`);
          } else {
            let X = o8A(I.env);
            (ng(Z, { type: "stdio", command: G, args: Y || [], env: X }, W),
              process.stdout.write(`Added stdio MCP server ${Z} with command: ${G} ${(Y || []).join(" ")} to ${W} config
`));
          }
          (process.stdout.write(`File modified: ${bz(W)}
`),
            process.exit(0));
        } catch (W) {
          (console.error(W.message), process.exit(1));
        }
      }),
    Q.command("remove <name>")
      .description("Remove an MCP server")
      .option(
        "-s, --scope <scope>",
        "Configuration scope (local, user, or project) - if not specified, removes from whichever scope it exists in",
      )
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z, G) => {
        try {
          if (G.scope) {
            let F = r41(G.scope);
            (Y1("tengu_mcp_delete", { name: Z, scope: F }),
              N10(Z, F),
              process.stdout.write(`Removed MCP server ${Z} from ${F} config
`),
              process.stdout.write(`File modified: ${bz(F)}
`),
              process.exit(0));
          }
          let Y = w9(),
            I = H0(),
            { servers: W } = QG("project"),
            J = !!W[Z],
            X = [];
          if (Y.mcpServers?.[Z]) X.push("local");
          if (J) X.push("project");
          if (I.mcpServers?.[Z]) X.push("user");
          if (X.length === 0)
            (process.stderr.write(`No MCP server found with name: "${Z}"
`),
              process.exit(1));
          else if (X.length === 1) {
            let F = X[0];
            (Y1("tengu_mcp_delete", { name: Z, scope: F }),
              N10(Z, F),
              process.stdout.write(`Removed MCP server "${Z}" from ${F} config
`),
              process.stdout.write(`File modified: ${bz(F)}
`),
              process.exit(0));
          } else
            (process.stderr.write(`MCP server "${Z}" exists in multiple scopes:
`),
              X.forEach((F) => {
                process.stderr.write(`  - ${ag(F)} (${bz(F)})
`);
              }),
              process.stderr.write(`
To remove from a specific scope, use:
`),
              X.forEach((F) => {
                process.stderr.write(`  claude mcp remove "${Z}" -s ${F}
`);
              }),
              process.exit(1));
        } catch (Y) {
          (process.stderr.write(`${Y.message}
`),
            process.exit(1));
        }
      }),
    Q.command("list")
      .description("List configured MCP servers")
      .helpOption("-h, --help", "Display help for command")
      .action(async () => {
        Y1("tengu_mcp_list", {});
        let Z = IL();
        if (Object.keys(Z).length === 0)
          console.log("No MCP servers configured. Use `claude mcp add` to add a server.");
        else {
          console.log(`Checking MCP server health...
`);
          for (let [G, Y] of Object.entries(Z)) {
            let I = await $9Q(G, Y);
            if (Y.type === "sse") console.log(`${G}: ${Y.url} (SSE) - ${I}`);
            else if (Y.type === "http") console.log(`${G}: ${Y.url} (HTTP) - ${I}`);
            else if (!Y.type || Y.type === "stdio") {
              let W = Array.isArray(Y.args) ? Y.args : [];
              console.log(`${G}: ${Y.command} ${W.join(" ")} - ${I}`);
            }
          }
        }
        process.exit(0);
      }),
    Q.command("get <name>")
      .description("Get details about an MCP server")
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z) => {
        Y1("tengu_mcp_get", { name: Z });
        let G = _a(Z);
        if (!G) (console.error(`No MCP server found with name: ${Z}`), process.exit(1));
        (console.log(`${Z}:`), console.log(`  Scope: ${ag(G.scope)}`));
        let Y = await $9Q(Z, G);
        if ((console.log(`  Status: ${Y}`), G.type === "sse")) {
          if ((console.log("  Type: sse"), console.log(`  URL: ${G.url}`), G.headers)) {
            console.log("  Headers:");
            for (let [I, W] of Object.entries(G.headers)) console.log(`    ${I}: ${W}`);
          }
        } else if (G.type === "http") {
          if ((console.log("  Type: http"), console.log(`  URL: ${G.url}`), G.headers)) {
            console.log("  Headers:");
            for (let [I, W] of Object.entries(G.headers)) console.log(`    ${I}: ${W}`);
          }
        } else if (G.type === "stdio") {
          (console.log("  Type: stdio"), console.log(`  Command: ${G.command}`));
          let I = Array.isArray(G.args) ? G.args : [];
          if ((console.log(`  Args: ${I.join(" ")}`), G.env)) {
            console.log("  Environment:");
            for (let [W, J] of Object.entries(G.env)) console.log(`    ${W}=${J}`);
          }
        }
        (console.log(`
To remove this server, run: claude mcp remove "${Z}" -s ${G.scope}`),
          process.exit(0));
      }),
    Q.command("add-json <name> <json>")
      .description("Add an MCP server (stdio or SSE) with a JSON string")
      .option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local")
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z, G, Y) => {
        try {
          let I = r41(Y.scope),
            W = d3(G);
          ng(Z, W, I);
          let J = W && typeof W === "object" && "type" in W ? String(W.type || "stdio") : "stdio";
          (Y1("tengu_mcp_add", { scope: I, source: "json", type: J }),
            console.log(`Added ${J} MCP server ${Z} to ${I} config`),
            process.exit(0));
        } catch (I) {
          (console.error(I.message), process.exit(1));
        }
      }),
    Q.command("add-from-claude-desktop")
      .description("Import MCP servers from Claude Desktop (Mac and WSL only)")
      .option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local")
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z) => {
        try {
          let G = r41(Z.scope),
            Y = HB();
          Y1("tengu_mcp_add", { scope: G, platform: Y, source: "desktop" });
          let I = LQQ();
          if (Object.keys(I).length === 0)
            (console.log("No MCP servers found in Claude Desktop configuration or configuration file does not exist."),
              process.exit(0));
          let { unmount: W } = s6(
            k7.default.createElement(
              M7,
              null,
              k7.default.createElement(EQQ, {
                servers: I,
                scope: G,
                onDone: () => {
                  W();
                },
              }),
            ),
            { exitOnCtrlC: !0 },
          );
        } catch (G) {
          (console.error(G.message), process.exit(1));
        }
      }),
    Q.command("reset-project-choices")
      .description("Reset all approved and rejected project-scoped (.mcp.json) servers within this project")
      .helpOption("-h, --help", "Display help for command")
      .action(async () => {
        Y1("tengu_mcp_reset_mcpjson_choices", {});
        let Z = w9();
        (i8({ ...Z, enabledMcpjsonServers: [], disabledMcpjsonServers: [], enableAllProjectMcpServers: !1 }),
          console.log("All project-scoped (.mcp.json) server approvals and rejections have been reset."),
          console.log("You will be prompted for approval next time you start Claude Code."),
          process.exit(0));
      }),
    A.command("migrate-installer")
      .description("Migrate from global npm installation to local installation")
      .helpOption("-h, --help", "Display help for command")
      .action(async () => {
        if (xv()) (console.log("Already running from local installation. No migration needed."), process.exit(0));
        (Y1("tengu_migrate_installer_command", {}),
          await new Promise((Z) => {
            let { waitUntilExit: G } = s6(k7.default.createElement(M7, null, k7.default.createElement(SA1, null)));
            G().then(() => {
              Z();
            });
          }),
          process.exit(0));
      }),
    A.command("setup-token")
      .description("Set up a long-lived authentication token (requires Claude subscription)")
      .helpOption("-h, --help", "Display help for command")
      .action(async () => {
        if ((Y1("tengu_setup_token_command", {}), await n7(), !ED()))
          (process.stderr.write(
            n1.yellow(`Warning: You already have authentication configured via environment variable or API key helper.
`),
          ),
            process.stderr.write(
              n1.yellow(`The setup-token command will create a new OAuth token which you can use instead.
`),
            ));
        (await new Promise((Z) => {
          let { unmount: G } = s6(
            k7.default.createElement(gb, {
              onDone: () => {
                (G(), Z());
              },
              mode: "setup-token",
              startingMessage:
                "This will guide you through long-lived (1-year) auth token setup for your Claude account. Claude subscription required.",
            }),
          );
        }),
          process.exit(0));
      }),
    A.command("doctor")
      .description("Check the health of your Claude Code auto-updater")
      .helpOption("-h, --help", "Display help for command")
      .action(async () => {
        (Y1("tengu_doctor_command", {}),
          await new Promise((Z) => {
            let { unmount: G } = s6(
              k7.default.createElement(
                M7,
                null,
                k7.default.createElement(
                  Vh1,
                  { dynamicMcpConfig: void 0, isStrictMcpConfig: !1 },
                  k7.default.createElement(sb1, {
                    onDone: () => {
                      (G(), Z());
                    },
                  }),
                ),
              ),
              { exitOnCtrlC: !1 },
            );
          }),
          process.exit(0));
      }),
    A.command("update")
      .description("Check for updates and install if available")
      .helpOption("-h, --help", "Display help for command")
      .action(Y9Q),
    A.command("install [target]")
      .description(
        "Install Claude Code native build. Use [target] to specify version (stable, latest, or specific version)",
      )
      .option("--force", "Force installation even if already installed")
      .helpOption("-h, --help", "Display help for command")
      .action(async (Z, G) => {
        (await hf(ff(), "default", !1, !1, void 0),
          await new Promise((Y) => {
            let I = [];
            if (Z) I.push(Z);
            if (G.force) I.push("--force");
            W9Q.call(
              () => {
                (Y(), process.exit(0));
              },
              {},
              I,
            );
          }));
      }),
    await A.parseAsync(process.argv),
    A
  );
}
function or5() {
  (process.stderr.isTTY ? process.stderr : process.stdout.isTTY ? process.stdout : void 0)?.write(`\x1B[?25h${t00}`);
}
nr5();
export { ur5 as showSetupScreens, hf as setup, gr5 as completeOnboarding };
