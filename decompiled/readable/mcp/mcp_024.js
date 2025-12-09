/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.022Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 24/29
 * Lines: 420243 - 421731 (1489 lines)
 * Original file: cli.js
 */

    return F.push(y6.createElement(nD, {
        key: "commands",
        title: "commands"
    }, y6.createElement(TF0, {
        commands: J,
        maxHeight: G,
        title: "Browse default commands:",
        onCancel: Z
    }))), F.push(y6.createElement(nD, {
        key: "custom",
        title: "custom-commands"
    }, y6.createElement(TF0, {
        commands: X,
        maxHeight: G,
        title: "Browse custom commands:",
        emptyMessage: "No custom commands found",
        onCancel: Z
    }))), y6.createElement(j, {
        flexDirection: "column",
        height: G
    }, y6.createElement(J3, {
        dividerColor: "professionalBlue"
    }), y6.createElement(j, {
        paddingX: 1,
        flexDirection: "column"
    }, y6.createElement(Fa, {
        title: `Claude Code v${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION}`,
        color: "professionalBlue",
        defaultTab: "general"
    }, F), y6.createElement(j, {
        marginTop: 1
    }, y6.createElement($, null, "For more help:", " ", y6.createElement(a4, {
        url: "https://docs.claude.com/en/docs/claude-code/overview"
    }))), y6.createElement(j, {
        marginTop: 1
    }, y6.createElement($, {
        dimColor: !0
    }, I.pending ? y6.createElement(y6.Fragment, null, "Press ", I.keyName, " again to exit") : y6.createElement($, {
        italic: !0
    }, "Esc to exit")))))
}
var y6;
var MX9 = L(() => {
    hA();
    eV();
    cjA();
    wX9();
    NX9();
    nE();
    m8();
    c9();
    hA();
    y6 = GA(VA(), 1)
});
var PF0, aS3, OX9;
var RX9 = L(() => {
    MX9();
    PF0 = GA(VA(), 1), aS3 = {
        type: "local-jsx",
        name: "help",
        description: "Show help and available commands",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, {
            options: {
                commands: Q
            }
        }) {
            return PF0.createElement(LX9, {
                commands: Q,
                onClose: A
            })
        },
        userFacingName() {
            return "help"
        }
    }, OX9 = aS3
});

function TX9({
    onComplete: A
}) {
    let Q = DQ(),
        B = Bz.useCallback(async (Z) => {
            let I = Z === "yes",
                Y = L1();
            d0({
                ...Y,
                autoConnectIde: I,
                hasIdeAutoConnectDialogBeenShown: !0
            }), A()
        }, [A]);
    return h1((Z, I) => {
        if (I.escape) A()
    }), Bz.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, Bz.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "ide",
        paddingX: 2,
        paddingY: 1,
        width: "100%"
    }, Bz.default.createElement(j, {
        marginBottom: 1
    }, Bz.default.createElement($, {
        color: "ide"
    }, "Do you wish to enable auto-connect to IDE?")), Bz.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, Bz.default.createElement(M0, {
        options: [{
            label: "Yes",
            value: "yes"
        }, {
            label: "No",
            value: "no"
        }],
        onChange: B,
        defaultValue: "yes",
        onCancel: () => A()
    })), Bz.default.createElement(j, {
        marginTop: 1
    }, Bz.default.createElement($, {
        dimColor: !0
    }, "You can also configure this in /config or with the --ide flag"))), Bz.default.createElement(j, {
        paddingX: 1
    }, Bz.default.createElement($, {
        dimColor: !0
    }, Q.pending ? Bz.default.createElement(Bz.default.Fragment, null, "Press ", Q.keyName, " again to exit") : "Enter to confirm")))
}

function PX9() {
    let A = L1();
    return !_F() && A.autoConnectIde !== !0 && A.hasIdeAutoConnectDialogBeenShown !== !0
}
var Bz;
var jX9 = L(() => {
    hA();
    jQ();
    hA();
    T6();
    c9();
    yJ();
    Bz = GA(VA(), 1)
});
import * as _X9 from "path";

function sS3({
    availableIDEs: A,
    unavailableIDEs: Q,
    selectedIDE: B,
    onClose: G,
    onSelect: Z
}) {
    let I = DQ(),
        [Y, J] = U4.useState(B?.port?.toString() ?? "None"),
        [W, X] = U4.useState(!1),
        F = U4.useCallback((D) => {
            if (D !== "None" && PX9()) X(!0);
            else Z(A.find((H) => H.port === parseInt(D)))
        }, [A, Z]),
        V = A.reduce((D, H) => {
            return D[H.name] = (D[H.name] || 0) + 1, D
        }, {}),
        K = A.map((D) => {
            let C = (V[D.name] || 0) > 1 && D.workspaceFolders.length > 0;
            return {
                label: D.name,
                value: D.port.toString(),
                description: C ? SX9(D.workspaceFolders) : void 0
            }
        }).concat([{
            label: "None",
            value: "None",
            description: void 0
        }]);
    return h1((D, H) => {
        if (H.escape) G()
    }), W ? U4.default.createElement(TX9, {
        onComplete: () => F(Y)
    }) : U4.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, U4.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "ide",
        paddingX: 2,
        paddingY: 1,
        width: "100%"
    }, U4.default.createElement(j, {
        flexDirection: "column"
    }, U4.default.createElement($, {
        color: "ide",
        bold: !0
    }, "Select IDE"), U4.default.createElement($, {
        dimColor: !0
    }, "Connect to an IDE for integrated development features."), A.length === 0 && U4.default.createElement(j, {
        marginTop: 1
    }, U4.default.createElement($, {
        dimColor: !0
    }, bA0() ? `No available IDEs detected. Please install the plugin and restart your IDE:
https://docs.claude.com/s/claude-code-jetbrains` : "No available IDEs detected. Make sure your IDE has the Claude Code extension or plugin installed and is running."))), A.length !== 0 && U4.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        marginTop: 1
    }, U4.default.createElement(M0, {
        defaultValue: Y,
        focusValue: Y,
        options: K,
        onFocus: (D) => J(D),
        onChange: (D) => {
            J(D), F(D)
        },
        onCancel: () => G()
    })), A.length !== 0 && !_F() && U4.default.createElement(j, {
        marginTop: 1
    }, U4.default.createElement($, {
        dimColor: !0
    }, "※ Tip: You can enable auto-connect to IDE in /config or with the --ide flag")), Q.length > 0 && U4.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, U4.default.createElement($, {
        dimColor: !0
    }, "Found ", Q.length, " other running IDE(s). However, their workspace/project directories do not match the current cwd."), U4.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, Q.map((D, H) => U4.default.createElement(j, {
        key: H,
        paddingLeft: 3
    }, U4.default.createElement($, {
        dimColor: !0
    }, "• ", D.name, ": ", SX9(D.workspaceFolders))))))), U4.default.createElement(j, {
        paddingX: 1
    }, U4.default.createElement($, {
        dimColor: !0
    }, I.pending ? U4.default.createElement(U4.default.Fragment, null, "Press ", I.keyName, " again to exit") : U4.default.createElement(U4.default.Fragment, null, A.length !== 0 && "Enter to confirm · ", "Esc to exit"))))
}

async function rS3(A, Q) {
    let B = Q?.ide;
    if (!B || B.type !== "sse-ide" && B.type !== "ws-ide") return null;
    for (let G of A)
        if (G.url === B.url) return G;
    return null
}

function oS3({
    runningIDEs: A,
    onSelectIDE: Q,
    onDone: B
}) {
    let G = DQ(),
        [Z, I] = U4.useState(A[0] ?? ""),
        Y = U4.useCallback((W) => {
            Q(W)
        }, [Q]),
        J = A.map((W) => ({
            label: aH(W),
            value: W
        }));
    return h1((W, X) => {
        if (X.escape) B("IDE selection cancelled", {
            display: "system"
        })
    }), U4.default.createElement(U4.default.Fragment, null, U4.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "ide",
        marginTop: 1,
        paddingX: 2,
        paddingY: 1,
        width: "100%"
    }, U4.default.createElement(j, {
        marginBottom: 1
    }, U4.default.createElement($, {
        color: "ide"
    }, "Select IDE to install extension:")), U4.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, U4.default.createElement(M0, {
        focusValue: Z,
        options: J,
        onFocus: (W) => I(W),
        onChange: (W) => {
            I(W), Y(W)
        },
        onCancel: () => B("IDE selection cancelled", {
            display: "system"
        })
    }))), U4.default.createElement(j, {
        paddingLeft: 3
    }, U4.default.createElement($, {
        dimColor: !0
    }, G.pending ? U4.default.createElement(U4.default.Fragment, null, "Press ", G.keyName, " again to exit") : U4.default.createElement(U4.default.Fragment, null, "Enter to confirm · Esc to cancel"))))
}

function SX9(A, Q = 100) {
    if (A.length === 0) return "";
    let B = H0(),
        G = A.slice(0, 2),
        Z = A.length > 2,
        I = Z ? 3 : 0,
        Y = (G.length - 1) * 2,
        J = Q - Y - I,
        W = Math.floor(J / G.length),
        F = G.map((V) => {
            if (V.startsWith(B + _X9.sep)) V = V.slice(B.length + 1);
            if (V.length <= W) return V;
            return "…" + V.slice(-(W - 1))
        }).join(", ");
    if (Z) F += ", …";
    return F
}
var U4, tS3, kX9;
var yX9 = L(() => {
    hA();
    T6();
    jX9();
    yJ();
    w0();
    c9();
    RjA();
    R2();
    I6();
    J9();
    U4 = GA(VA(), 1);
    tS3 = {
        type: "local-jsx",
        name: "ide",
        description: "Manage IDE integrations and show status",
        isEnabled: () => !0,
        isHidden: !1,
        argumentHint: "[open]",
        async call(A, Q, B) {
            BA("tengu_ext_ide_command", {});
            let {
                options: {
                    dynamicMcpConfig: G
                },
                onChangeDynamicMcpConfig: Z
            } = Q, I = await mLA(!0);
            if (I.length === 0 && Q.onInstallIDEExtension && !_F()) {
                let F = LB1(),
                    V = (K) => {
                        if (Q.onInstallIDEExtension)
                            if (Q.onInstallIDEExtension(K), pM(K)) A(`Installed plugin to ${oA.bold(aH(K))}
Please ${oA.bold("restart your IDE")} completely for it to take effect`);
                            else A(`Installed extension to ${oA.bold(aH(K))}`)
                    };
                if (F.length > 1) return U4.default.createElement(oS3, {
                    runningIDEs: F,
                    onSelectIDE: V,
                    onDone: () => {
                        A("No IDE selected.", {
                            display: "system"
                        })
                    }
                });
                else if (F.length === 1) {
                    let K = F[0];
                    return U4.default.createElement(() => {
                        return U4.useEffect(() => {
                            V(K)
                        }, []), null
                    }, null)
                }
            }
            let Y = I.filter((F) => F.isValid),
                J = I.filter((F) => !F.isValid),
                W = await rS3(Y, G);
            return U4.default.createElement(sS3, {
                availableIDEs: Y,
                unavailableIDEs: J,
                selectedIDE: W,
                onClose: () => A("IDE selection cancelled", {
                    display: "system"
                }),
                onSelect: async (F) => {
                    try {
                        if (!Z) {
                            A("Error connecting to IDE.");
                            return
                        }
                        let V = {
                            ...G || {}
                        };
                        if (W) delete V.ide;
                        if (!F) A(W ? `Disconnected from ${W.name}.` : "No IDE selected.");
                        else {
                            let K = F.url;
                            V.ide = {
                                type: K.startsWith("ws:") ? "ws-ide" : "sse-ide",
                                url: K,
                                ideName: F.name,
                                authToken: F.authToken,
                                ideRunningInWindows: F.ideRunningInWindows,
                                scope: "dynamic"
                            }, A(`Connected to ${F.name}.`)
                        }
                        Z(V)
                    } catch (V) {
                        A("Error connecting to IDE.")
                    }
                }
            })
        },
        userFacingName() {
            return "ide"
        }
    }, kX9 = tS3
});
var eS3, xX9;
var vX9 = L(() => {
    r$A();
    eS3 = {
        type: "prompt",
        name: "init",
        description: "Initialize a new CLAUDE.md file with codebase documentation",
        isEnabled: () => !0,
        isHidden: !1,
        progressMessage: "analyzing your codebase",
        userFacingName() {
            return "init"
        },
        source: "builtin",
        async getPromptForCommand() {
            return FGA(), [{
                type: "text",
                text: `Please analyze this codebase and create a CLAUDE.md file, which will be given to future instances of Claude Code to operate in this repository.

What to add:
1. Commands that will be commonly used, such as how to build, lint, and run tests. Include the necessary commands to develop in this codebase, such as how to run a single test.
2. High-level code architecture and structure so that future instances can be productive more quickly. Focus on the "big picture" architecture that requires reading multiple files to understand.

Usage notes:
- If there's already a CLAUDE.md, suggest improvements to it.
- When you make the initial CLAUDE.md, do not repeat yourself and do not include obvious instructions like "Provide helpful error messages to users", "Write unit tests for all new utilities", "Never include sensitive information (API keys, tokens) in code or commits".
- Avoid listing every component or file structure that can be easily discovered.
- Don't include generic development practices.
- If there are Cursor rules (in .cursor/rules/ or .cursorrules) or Copilot rules (in .github/copilot-instructions.md), make sure to include the important parts.
- If there is a README.md, make sure to include the important parts.
- Do not make up information such as "Common Development Tasks", "Tips for Development", "Support and Documentation" unless this is expressly included in other files that you read.
- Be sure to prefix the file with the following text:

\`\`\`
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
\`\`\``
            }]
        }
    }, xX9 = eS3
});

function fX9() {
    return bX9.default.createElement($, null, "Checking GitHub CLI installation…")
}
var bX9;
var hX9 = L(() => {
    hA();
    bX9 = GA(VA(), 1)
});

function gX9({
    currentRepo: A,
    useCurrentRepo: Q,
    repoUrl: B,
    onRepoUrlChange: G,
    onSubmit: Z,
    onToggleUseCurrentRepo: I
}) {
    let [Y, J] = GF.useState(0), [W, X] = GF.useState(!1), V = YB().columns, K = () => {
        if (!(Q ? A : B)?.trim()) {
            X(!0);
            return
        }
        Z()
    };
    return h1((D, H) => {
        if (H.upArrow) I(!0), X(!1);
        else if (H.downArrow) I(!1), X(!1);
        else if (H.return) K()
    }), GF.default.createElement(GF.default.Fragment, null, GF.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, GF.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, GF.default.createElement($, {
        bold: !0
    }, "Install GitHub App"), GF.default.createElement($, {
        dimColor: !0
    }, "Select GitHub repository")), A && GF.default.createElement(j, {
        marginBottom: 1
    }, GF.default.createElement($, {
        bold: Q,
        color: Q ? "permission" : void 0
    }, Q ? "> " : "  ", "Use current repository: ", A)), GF.default.createElement(j, {
        marginBottom: 1
    }, GF.default.createElement($, {
        bold: !Q || !A,
        color: !Q || !A ? "permission" : void 0
    }, !Q || !A ? "> " : "  ", A ? "Enter a different repository" : "Enter repository")), (!Q || !A) && GF.default.createElement(j, {
        marginLeft: 2,
        marginBottom: 1
    }, GF.default.createElement(s4, {
        value: B,
        onChange: (D) => {
            G(D), X(!1)
        },
        onSubmit: K,
        focus: !0,
        placeholder: "Enter a repo as owner/repo or https://github.com/owner/repo…",
        columns: V,
        cursorOffset: Y,
        onChangeCursorOffset: J,
        showCursor: !0
    }))), W && GF.default.createElement(j, {
        marginLeft: 3,
        marginBottom: 1
    }, GF.default.createElement($, {
        color: "error"
    }, "Please enter a repository name to continue")), GF.default.createElement(j, {
        marginLeft: 3
    }, GF.default.createElement($, {
        dimColor: !0
    }, A ? "↑/↓ to select · " : "", "Enter to continue")))
}
var GF;
var uX9 = L(() => {
    hA();
    QY();
    m8();
    GF = GA(VA(), 1)
});
var mX9 = "Add Claude Code GitHub Workflow",
    Wx = "https://github.com/anthropics/claude-code-action/blob/main/docs/setup.md",
    dX9 = `name: Claude Code

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
  issues:
    types: [opened, assigned]
  pull_request_review:
    types: [submitted]

jobs:
  claude:
    if: |
      (github.event_name == 'issue_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review_comment' && contains(github.event.comment.body, '@claude')) ||
      (github.event_name == 'pull_request_review' && contains(github.event.review.body, '@claude')) ||
      (github.event_name == 'issues' && (contains(github.event.issue.body, '@claude') || contains(github.event.issue.title, '@claude')))
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write
      actions: read # Required for Claude to read CI results on PRs
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code
        id: claude
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}

          # This is an optional setting that allows Claude to read CI results on PRs
          additional_permissions: |
            actions: read

          # Optional: Give a custom prompt to Claude. If this is not specified, Claude will perform the instructions specified in the comment that tagged it.
          # prompt: 'Update the pull request description to include a summary of changes.'

          # Optional: Add claude_args to customize behavior and configuration
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://docs.claude.com/en/docs/claude-code/cli-reference for available options
          # claude_args: '--allowed-tools Bash(gh pr:*)'

`,
    cX9 = `## \uD83E\uDD16 Installing Claude Code GitHub App

This PR adds a GitHub Actions workflow that enables Claude Code integration in our repository.

### What is Claude Code?

[Claude Code](https://claude.com/claude-code) is an AI coding agent that can help with:
- Bug fixes and improvements  
- Documentation updates
- Implementing new features
- Code reviews and suggestions
- Writing tests
- And more!

### How it works

Once this PR is merged, we'll be able to interact with Claude by mentioning @claude in a pull request or issue comment.
Once the workflow is triggered, Claude will analyze the comment and surrounding context, and execute on the request in a GitHub action.

### Important Notes

- **This workflow won't take effect until this PR is merged**
- **@claude mentions won't work until after the merge is complete**
- The workflow runs automatically whenever Claude is mentioned in PR or issue comments
- Claude gets access to the entire PR or issue context including files, diffs, and previous comments

### Security

- Our Anthropic API key is securely stored as a GitHub Actions secret
- Only users with write access to the repository can trigger the workflow
- All Claude runs are stored in the GitHub Actions run history
- Claude's default tools are limited to reading/writing files and interacting with our repo by creating comments, branches, and commits.
- We can add more allowed tools by adding them to the workflow file like:

\`\`\`
allowed_tools: Bash(npm install),Bash(npm run build),Bash(npm run lint),Bash(npm run test)
\`\`\`

There's more information in the [Claude Code action repo](https://github.com/anthropics/claude-code-action).

After merging this PR, let's try mentioning @claude in a comment on any PR to get started!`,
    pX9 = `name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]
    # Optional: Only run on specific file changes
    # paths:
    #   - "src/**/*.ts"
    #   - "src/**/*.tsx"
    #   - "src/**/*.js"
    #   - "src/**/*.jsx"

jobs:
  claude-review:
    # Optional: Filter by PR author
    # if: |
    #   github.event.pull_request.user.login == 'external-contributor' ||
    #   github.event.pull_request.user.login == 'new-developer' ||
    #   github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'

    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code Review
        id: claude-review
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            REPO: \${{ github.repository }}
            PR NUMBER: \${{ github.event.pull_request.number }}

            Please review this pull request and provide feedback on:
            - Code quality and best practices
            - Potential bugs or issues
            - Performance considerations
            - Security concerns
            - Test coverage

            Use the repository's CLAUDE.md for guidance on style and conventions. Be constructive and helpful in your feedback.

            Use \`gh pr comment\` with your Bash tool to leave your review as a comment on the PR.

          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://docs.claude.com/en/docs/claude-code/cli-reference for available options
          claude_args: '--allowed-tools "Bash(gh issue view:*),Bash(gh search:*),Bash(gh issue list:*),Bash(gh pr comment:*),Bash(gh pr diff:*),Bash(gh pr view:*),Bash(gh pr list:*)"'

`,
    lX9 = `name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize, ready_for_review, reopened]
    # Optional: Only run on specific file changes
    # paths:
    #   - "src/**/*.ts"
    #   - "src/**/*.tsx"
    #   - "src/**/*.js"
    #   - "src/**/*.jsx"

jobs:
  claude-review:
    # Optional: Filter by PR author
    # if: |
    #   github.event.pull_request.user.login == 'external-contributor' ||
    #   github.event.pull_request.user.login == 'new-developer' ||
    #   github.event.pull_request.author_association == 'FIRST_TIME_CONTRIBUTOR'

    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read
      issues: read
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 1

      - name: Run Claude Code Review
        id: claude-review
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: \${{ secrets.ANTHROPIC_API_KEY }}
          plugin_marketplaces: 'https://github.com/anthropics/claude-code.git'
          plugins: 'code-review@claude-code-plugins'
          prompt: '/code-review:code-review \${{ github.repository }}/pull/\${{ github.event.pull_request.number }}'
          # See https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md
          # or https://docs.claude.com/en/docs/claude-code/cli-reference for available options

`;

function iX9({
    repoUrl: A,
    onSubmit: Q
}) {
    return h1((B, G) => {
        if (G.return) Q()
    }), ZF.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, ZF.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, ZF.default.createElement($, {
        bold: !0
    }, "Install the Claude GitHub App")), ZF.default.createElement(j, {
        marginBottom: 1
    }, ZF.default.createElement($, null, "Opening browser to install the Claude GitHub App…")), ZF.default.createElement(j, {
        marginBottom: 1
    }, ZF.default.createElement($, null, "If your browser doesn't open automatically, visit:")), ZF.default.createElement(j, {
        marginBottom: 1
    }, ZF.default.createElement($, {
        underline: !0
    }, "https://github.com/apps/claude")), ZF.default.createElement(j, {
        marginBottom: 1
    }, ZF.default.createElement($, null, "Please install the app for repository: ", ZF.default.createElement($, {
        bold: !0
    }, A))), ZF.default.createElement(j, {
        marginBottom: 1
    }, ZF.default.createElement($, {
        dimColor: !0
    }, "Important: Make sure to grant access to this specific repository")), ZF.default.createElement(j, null, ZF.default.createElement($, {
        bold: !0,
        color: "permission"
    }, "Press Enter once you've installed the app", V1.ellipsis)), ZF.default.createElement(j, {
        marginTop: 1
    }, ZF.default.createElement($, {
        dimColor: !0
    }, "Having trouble? See manual setup instructions at:", " ", ZF.default.createElement($, {
        color: "claude"
    }, Wx))))
}
var ZF;
var nX9 = L(() => {
    hA();
    n2();
    ZF = GA(VA(), 1)
});

function aX9({
    useExistingSecret: A,
    secretName: Q,
    onToggleUseExistingSecret: B,
    onSecretNameChange: G,
    onSubmit: Z
}) {
    let [I, Y] = DY.useState(0), J = YB(), [W] = $B();
    return h1((X, F) => {
        if (F.upArrow) B(!0);
        else if (F.downArrow) B(!1);
        else if (F.return) Z()
    }), DY.default.createElement(DY.default.Fragment, null, DY.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, DY.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, DY.default.createElement($, {
        bold: !0
    }, "Install GitHub App"), DY.default.createElement($, {
        dimColor: !0
    }, "Setup API key secret")), DY.default.createElement(j, {
        marginBottom: 1
    }, DY.default.createElement($, {
        color: "warning"
    }, "ANTHROPIC_API_KEY already exists in repository secrets!")), DY.default.createElement(j, {
        marginBottom: 1
    }, DY.default.createElement($, null, "Would you like to:")), DY.default.createElement(j, {
        marginBottom: 1
    }, DY.default.createElement($, null, A ? tQ("success", W)("> ") : "  ", "Use the existing API key")), DY.default.createElement(j, {
        marginBottom: 1
    }, DY.default.createElement($, null, !A ? tQ("success", W)("> ") : "  ", "Create a new secret with a different name")), !A && DY.default.createElement(DY.default.Fragment, null, DY.default.createElement(j, {
        marginBottom: 1
    }, DY.default.createElement($, null, "Enter new secret name (alphanumeric with underscores):")), DY.default.createElement(s4, {
        value: Q,
        onChange: G,
        onSubmit: Z,
        focus: !0,
        placeholder: "e.g., CLAUDE_API_KEY",
        columns: J.columns,
        cursorOffset: I,
        onChangeCursorOffset: Y,
        showCursor: !0
    }))), DY.default.createElement(j, {
        marginLeft: 3
    }, DY.default.createElement($, {
        dimColor: !0
    }, "↑/↓ to select · Enter to continue")))
}
var DY;
var sX9 = L(() => {
    hA();
    QY();
    m8();
    DY = GA(VA(), 1)
});

function rX9({
    existingApiKey: A,
    apiKeyOrOAuthToken: Q,
    onApiKeyChange: B,
    onSubmit: G,
    onToggleUseExistingKey: Z,
    onCreateOAuthToken: I,
    selectedOption: Y = A ? "existing" : I ? "oauth" : "new",
    onSelectOption: J
}) {
    let [W, X] = wK.useState(0), F = YB(), [V] = $B();
    return h1((K, D) => {
        if (D.upArrow) {
            if (Y === "new" && I) J?.("oauth");
            else if (Y === "oauth" && A) J?.("existing"), Z(!0)
        } else if (D.downArrow) {
            if (Y === "existing") J?.(I ? "oauth" : "new"), Z(!1);
            else if (Y === "oauth") J?.("new")
        }
        if (D.return)
            if (Y === "oauth" && I) I();
            else G()
    }), wK.default.createElement(wK.default.Fragment, null, wK.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, wK.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, wK.default.createElement($, {
        bold: !0
    }, "Install GitHub App"), wK.default.createElement($, {
        dimColor: !0
    }, "Choose API key")), A && wK.default.createElement(j, {
        marginBottom: 1
    }, wK.default.createElement($, null, Y === "existing" ? tQ("success", V)("> ") : "  ", "Use your existing Claude Code API key")), I && wK.default.createElement(j, {
        marginBottom: 1
    }, wK.default.createElement($, null, Y === "oauth" ? tQ("success", V)("> ") : "  ", "Create a long-lived token with your Claude subscription")), wK.default.createElement(j, {
        marginBottom: 1
    }, wK.default.createElement($, null, Y === "new" ? tQ("success", V)("> ") : "  ", "Enter a new API key")), Y === "new" && wK.default.createElement(s4, {
        value: Q,
        onChange: B,
        onSubmit: G,
        onPaste: B,
        focus: !0,
        placeholder: "sk-ant… (Create a new key at https://console.anthropic.com/settings/keys)",
        mask: "*",
        columns: F.columns,
        cursorOffset: W,
        onChangeCursorOffset: X,
        showCursor: !0
    })), wK.default.createElement(j, {
        marginLeft: 3
    }, wK.default.createElement($, {
        dimColor: !0
    }, "↑/↓ to select · Enter to continue")))
}
var wK;
var oX9 = L(() => {
    hA();
    QY();
    m8();
    wK = GA(VA(), 1)
});

function tX9({
    currentWorkflowInstallStep: A,
    secretExists: Q,
    useExistingSecret: B,
    secretName: G,
    skipWorkflow: Z = !1,
    selectedWorkflows: I
}) {
    let Y = Z ? ["Getting repository information", Q && B ? "Using existing API key secret" : `Setting up ${G} secret`] : ["Getting repository information", "Creating branch", I.length > 1 ? "Creating workflow files" : "Creating workflow file", Q && B ? "Using existing API key secret" : `Setting up ${G} secret`, "Opening pull request page"];
    return xg.default.createElement(xg.default.Fragment, null, xg.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, xg.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, xg.default.createElement($, {
        bold: !0
    }, "Install GitHub App"), xg.default.createElement($, {
        dimColor: !0
    }, "Create GitHub Actions workflow")), Y.map((J, W) => {
        let X = "pending";
        if (W < A) X = "completed";
        else if (W === A) X = "in-progress";
        return xg.default.createElement(j, {
            key: W
        }, xg.default.createElement($, {
            color: X === "completed" ? "success" : X === "in-progress" ? "warning" : void 0
        }, X === "completed" ? "✓ " : "", J, X === "in-progress" ? "…" : ""))
    })))
}
var xg;
var eX9 = L(() => {
    hA();
    xg = GA(VA(), 1)
});

function AF9({
    secretExists: A,
    useExistingSecret: Q,
    secretName: B,
    skipWorkflow: G = !1
}) {
    return pZ.default.createElement(pZ.default.Fragment, null, pZ.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, pZ.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, pZ.default.createElement($, {
        bold: !0
    }, "Install GitHub App"), pZ.default.createElement($, {
        dimColor: !0
    }, "Success")), !G && pZ.default.createElement($, {
        color: "success"
    }, "✓ GitHub Actions workflow created!"), A && Q && pZ.default.createElement(j, {
        marginTop: 1
    }, pZ.default.createElement($, {
        color: "success"
    }, "✓ Using existing ANTHROPIC_API_KEY secret")), (!A || !Q) && pZ.default.createElement(j, {
        marginTop: 1
    }, pZ.default.createElement($, {
        color: "success"
    }, "✓ API key saved as ", B, " secret")), pZ.default.createElement(j, {
        marginTop: 1
    }, pZ.default.createElement($, null, "Next steps:")), G ? pZ.default.createElement(pZ.default.Fragment, null, pZ.default.createElement($, null, "1. Install the Claude GitHub App if you haven't already"), pZ.default.createElement($, null, "2. Your workflow file was kept unchanged"), pZ.default.createElement($, null, "3. API key is configured and ready to use")) : pZ.default.createElement(pZ.default.Fragment, null, pZ.default.createElement($, null, "1. A pre-filled PR page has been created"), pZ.default.createElement($, null, "2. Install the Claude GitHub App if you haven't already"), pZ.default.createElement($, null, "3. Merge the PR to enable Claude PR assistance"))), pZ.default.createElement(j, {
        marginLeft: 3
    }, pZ.default.createElement($, {
        dimColor: !0
    }, "Press any key to exit")))
}
var pZ;
var QF9 = L(() => {
    hA();
    pZ = GA(VA(), 1)
});

function BF9({
    error: A,
    errorReason: Q,
    errorInstructions: B
}) {
    return aF.default.createElement(aF.default.Fragment, null, aF.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, aF.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, aF.default.createElement($, {
        bold: !0
    }, "Install GitHub App")), aF.default.createElement($, {
        color: "error"
    }, "Error: ", A), Q && aF.default.createElement(j, {
        marginTop: 1
    }, aF.default.createElement($, {
        dimColor: !0
    }, "Reason: ", Q)), B && B.length > 0 && aF.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, aF.default.createElement($, {
        dimColor: !0
    }, "How to fix:"), B.map((G, Z) => aF.default.createElement(j, {
        key: Z,
        marginLeft: 2
    }, aF.default.createElement($, {
        dimColor: !0
    }, "• "), aF.default.createElement($, null, G)))), aF.default.createElement(j, {
        marginTop: 1
    }, aF.default.createElement($, {
        dimColor: !0
    }, "For manual setup instructions, see:", " ", aF.default.createElement($, {
        color: "claude"
    }, Wx)))), aF.default.createElement(j, {
        marginLeft: 3
    }, aF.default.createElement($, {
        dimColor: !0
    }, "Press any key to exit")))
}
var aF;
var GF9 = L(() => {
    hA();
    aF = GA(VA(), 1)
});

function ZF9({
    repoName: A,
    onSelectAction: Q
}) {
    return P$.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, P$.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, P$.default.createElement($, {
        bold: !0
    }, "Existing Workflow Found"), P$.default.createElement($, {
        dimColor: !0
    }, "Repository: ", A)), P$.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, P$.default.createElement($, null, "A Claude workflow file already exists at", " ", P$.default.createElement($, {
        color: "claude"
    }, ".github/workflows/claude.yml")), P$.default.createElement($, {
        dimColor: !0
    }, "What would you like to do?")), P$.default.createElement(j, {
        flexDirection: "column"
    }, P$.default.createElement(M0, {
        options: [{
            label: "Update workflow file with latest version",
            value: "update"
        }, {
            label: "Skip workflow update (configure secrets only)",
            value: "skip"
        }, {
            label: "Exit without making changes",
            value: "exit"
        }],
        onChange: (I) => {
            Q(I)
        },
        onCancel: () => {
            Q("exit")
        }
    })), P$.default.createElement(j, {
        marginTop: 1
    }, P$.default.createElement($, {
        dimColor: !0
    }, "View the latest workflow template at:", " ", P$.default.createElement($, {
        color: "claude"
    }, "https://github.com/anthropics/claude-code-action/blob/main/examples/claude.yml"))))
}
var P$;
var IF9 = L(() => {
    hA();
    T6();
    P$ = GA(VA(), 1)
});

function YF9({
    warnings: A,
    onContinue: Q
}) {
    return h1((B, G) => {
        if (G.return) Q()
    }), aD.default.createElement(aD.default.Fragment, null, aD.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1
    }, aD.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, aD.default.createElement($, {
        bold: !0
    }, V1.warning, " Setup Warnings"), aD.default.createElement($, {
        dimColor: !0
    }, "We found some potential issues, but you can continue anyway")), A.map((B, G) => aD.default.createElement(j, {
        key: G,
        flexDirection: "column",
        marginBottom: 1
    }, aD.default.createElement($, {
        color: "warning",
        bold: !0
    }, B.title), aD.default.createElement($, null, B.message), B.instructions.length > 0 && aD.default.createElement(j, {
        flexDirection: "column",
        marginLeft: 2,
        marginTop: 1
    }, B.instructions.map((Z, I) => aD.default.createElement($, {
        key: I,
        dimColor: !0
    }, "• ", Z))))), aD.default.createElement(j, {
        marginTop: 1
    }, aD.default.createElement($, {
        bold: !0,
        color: "permission"
    }, "Press Enter to continue anyway, or Ctrl+C to exit and fix issues")), aD.default.createElement(j, {
        marginTop: 1
    }, aD.default.createElement($, {
        dimColor: !0
    }, "You can also try the manual setup steps if needed:", " ", aD.default.createElement($, {
        color: "claude"
    }, Wx)))))
}
var aD;
var JF9 = L(() => {
    hA();
    n2();
    aD = GA(VA(), 1)
});

function WF9({
    onSubmit: A,
    defaultSelections: Q
}) {
    let [B, G] = wI.useState(new Set(Q)), [Z, I] = wI.useState(0), [Y, J] = wI.useState(!1), W = [{
        value: "claude",
        label: "@Claude Code",
        description: "Tag @claude in issues and PR comments"
    }, {
        value: "claude-review",
        label: "Claude Code Review",
        description: "Automated code review on new PRs"
    }];
    return h1((X, F) => {
        if (F.upArrow) I((V) => V > 0 ? V - 1 : W.length - 1), J(!1);
        else if (F.downArrow) I((V) => V < W.length - 1 ? V + 1 : 0), J(!1);
        else if (X === " ") {
            let V = W[Z]?.value;
            if (V) G((K) => {
                let D = new Set(K);
                if (D.has(V)) D.delete(V);
                else D.add(V);
                return D
            })
        } else if (F.return)
            if (B.size === 0) J(!0);
            else A(Array.from(B))
    }), wI.default.createElement(wI.default.Fragment, null, wI.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1,
        width: "100%"
    }, wI.default.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, wI.default.createElement($, {
        bold: !0
    }, "Select GitHub workflows to install"), wI.default.createElement($, {
        dimColor: !0
    }, "We'll create a workflow file in your repository for each one you select."), wI.default.createElement(j, {
        marginTop: 1
    }, wI.default.createElement($, {
        dimColor: !0
    }, "More workflow examples (issue triage, CI fixes, etc.) at:", " ", wI.default.createElement(a4, {
        url: "https://github.com/anthropics/claude-code-action/blob/main/examples/"
    }, "https://github.com/anthropics/claude-code-action/blob/main/examples/")))), wI.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, W.map((X, F) => {
        let V = B.has(X.value),
            K = F === Z;
        return wI.default.createElement(j, {
            key: X.value,
            flexDirection: "row",
            marginBottom: F < W.length - 1 ? 1 : 0
        }, wI.default.createElement(j, {
            marginRight: 1,
            minWidth: 2
        }, wI.default.createElement($, {
            bold: K
        }, V ? "✓" : " ")), wI.default.createElement(j, {
            flexDirection: "column"
        }, wI.default.createElement($, {
            bold: K
        }, X.label), wI.default.createElement($, {
            dimColor: !0
        }, X.description)))
    }))), wI.default.createElement(j, {
        marginLeft: 2
    }, wI.default.createElement($, {
        dimColor: !0
    }, "↑↓ Navigate · Space to toggle · Enter to confirm")), Y && wI.default.createElement(j, {
        marginLeft: 1
    }, wI.default.createElement($, {
        color: "error"
    }, "You must select at least one workflow to continue")))
}
var wI;
var XF9 = L(() => {
    hA();
    hA();
    wI = GA(VA(), 1)
});

async function A_3(A, Q, B, G, Z, I, Y) {
    let J = await ZQ("gh", ["api", `repos/${A}/contents/${B}`, "--jq", ".sha"]),
        W = null;
    if (J.code === 0) W = J.stdout.trim();
    let X = G;
    if (Z === "CLAUDE_CODE_OAUTH_TOKEN") X = G.replace(/anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g, "claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}");
    else if (Z !== "ANTHROPIC_API_KEY") X = G.replace(/anthropic_api_key: \$\{\{ secrets\.ANTHROPIC_API_KEY \}\}/g, `anthropic_api_key: \${{ secrets.${Z} }}`);
    let F = Buffer.from(X).toString("base64"),
        V = ["api", "--method", "PUT", `repos/${A}/contents/${B}`, "-f", `message=${W?`"Update ${I}"`:`"${I}"`}`, "-f", `content=${F}`, "-f", `branch=${Q}`];
    if (W) V.push("-f", `sha=${W}`);
    let K = await ZQ("gh", V);
    if (K.code !== 0) {
        if (K.stderr.includes("422") && K.stderr.includes("sha")) throw BA("tengu_setup_github_actions_failed", {
            reason: "failed_to_create_workflow_file",
            exit_code: K.code,
            ...Y
        }), Error(`Failed to create workflow file ${B}: A Claude workflow file already exists in this repository. Please remove it first or update it manually.`);
        BA("tengu_setup_github_actions_failed", {
            reason: "failed_to_create_workflow_file",
            exit_code: K.code,
            ...Y
        });
        let D = `

Need help? Common issues:
` + `• Permission denied → Run: gh auth refresh -h github.com -s repo,workflow
` + `• Not authorized → Ensure you have admin access to the repository
` + "• For manual setup → Visit: https://github.com/anthropics/claude-code-action";
        throw Error(`Failed to create workflow file ${B}: ${K.stderr}${D}`)
    }
}

async function FF9(A, Q, B, G, Z = !1, I, Y, J) {
    try {
        BA("tengu_setup_github_actions_started", {
            skip_workflow: Z,
            has_api_key: !!Q,
            using_default_secret_name: B === "ANTHROPIC_API_KEY",
            selected_claude_workflow: I.includes("claude"),
            selected_claude_review_workflow: I.includes("claude-review"),
            ...J
        });
        let W = await ZQ("gh", ["api", `repos/${A}`, "--jq", ".id"]);
        if (W.code !== 0) throw BA("tengu_setup_github_actions_failed", {
            reason: "repo_not_found",
            exit_code: W.code,
            ...J
        }), Error(`Failed to access repository ${A}`);
        let X = await ZQ("gh", ["api", `repos/${A}`, "--jq", ".default_branch"]);
        if (X.code !== 0) throw BA("tengu_setup_github_actions_failed", {
            reason: "failed_to_get_default_branch",
            exit_code: X.code,
            ...J
        }), Error(`Failed to get default branch: ${X.stderr}`);
        let F = X.stdout.trim(),
            V = await ZQ("gh", ["api", `repos/${A}/git/ref/heads/${F}`, "--jq", ".object.sha"]);
        if (V.code !== 0) throw BA("tengu_setup_github_actions_failed", {
            reason: "failed_to_get_branch_sha",
            exit_code: V.code,
            ...J
        }), Error(`Failed to get branch SHA: ${V.stderr}`);
        let K = V.stdout.trim(),
            D = null;
        if (!Z) {
            G(), D = `add-claude-github-actions-${Date.now()}`;
            let H = await ZQ("gh", ["api", "--method", "POST", `repos/${A}/git/refs`, "-f", `ref=refs/heads/${D}`, "-f", `sha=${K}`]);
            if (H.code !== 0) throw BA("tengu_setup_github_actions_failed", {
                reason: "failed_to_create_branch",
                exit_code: H.code,
                ...J
            }), Error(`Failed to create branch: ${H.stderr}`);
            G();
            let C = [];
            if (I.includes("claude")) C.push({
                path: ".github/workflows/claude.yml",
                content: dX9,
                message: "Claude PR Assistant workflow"
            });
            if (I.includes("claude-review")) {
                let E = j8("tengu_gha_plugin_code_review");
                C.push({
                    path: ".github/workflows/claude-code-review.yml",
                    content: E ? lX9 : pX9,
                    message: "Claude Code Review workflow"
                })
            }
            for (let E of C) await A_3(A, D, E.path, E.content, B, E.message, J)
        }
        if (G(), Q) {
            let H = await ZQ("gh", ["secret", "set", B, "--body", Q, "--repo", A]);
            if (H.code !== 0) {
                BA("tengu_setup_github_actions_failed", {
                    reason: "failed_to_set_api_key_secret",
                    exit_code: H.code,
                    ...J
                });
                let C = `

Need help? Common issues:
` + `• Permission denied → Run: gh auth refresh -h github.com -s repo
` + `• Not authorized → Ensure you have admin access to the repository
` + "• For manual setup → Visit: https://github.com/anthropics/claude-code-action";
                throw Error(`Failed to set API key secret: ${H.stderr||"Unknown error"}${C}`)
            }
        }
        if (!Z && D) {
            G();
            let H = `https://github.com/${A}/compare/${F}...${D}?quick_pull=1&title=${encodeURIComponent(mX9)}&body=${encodeURIComponent(cX9)}`;
            await gZ(H)
        }
        BA("tengu_setup_github_actions_completed", {
            skip_workflow: Z,
            has_api_key: !!Q,
            auth_type: Y,
            using_default_secret_name: B === "ANTHROPIC_API_KEY",
            selected_claude_workflow: I.includes("claude"),
            selected_claude_review_workflow: I.includes("claude-review"),
            ...J
        }), d0({
            ...L1(),
            githubActionSetupCount: (L1().githubActionSetupCount ?? 0) + 1
        })
    } catch (W) {
        if (!W || !(W instanceof Error) || !W.message.includes("Failed to")) BA("tengu_setup_github_actions_failed", {
            reason: "unexpected_error",
            ...J
        });
        if (W instanceof Error) e(W);
        throw W
    }
}
var VF9 = L(() => {
    I6();
    lM();
    O9();
    w0();
    u1();
    jQ()
});

function DF9({
    onSuccess: A,
    onCancel: Q
}) {
    let [B, G] = F4.useState({
        state: "starting"
    }), [Z] = F4.useState(() => new aOA), [I, Y] = F4.useState(""), [J, W] = F4.useState(0), [X, F] = F4.useState(!1), V = F4.useRef(new Set), K = YB(), D = Math.max(50, K.columns - KF9.length - 4);
    h1((z, w) => {
        if (B.state === "error")
            if (w.return && B.toRetry) Y(""), W(0), G({
                state: "about_to_retry",
                nextState: B.toRetry
            });
            else Q()
    });

async function H(z, w) {
        try {
            let [N, q] = z.split("#");
            if (!N || !q) {
                G({
                    state: "error",
                    message: "Invalid code. Please make sure the full code was copied",
                    toRetry: {
                        state: "waiting_for_login",
                        url: w
                    }
                });
                return
            }
            BA("tengu_oauth_manual_entry", {}), Z.handleManualAuthCodeInput({
                authorizationCode: N,
                state: q
            })
        } catch (N) {
            e(N instanceof Error ? N : Error(String(N))), G({
                state: "error",
                message: N.message,
                toRetry: {
                    state: "waiting_for_login",
                    url: w
                }
            })
        }
    }
    let C = F4.useCallback(async () => {
        V.current.forEach((z) => clearTimeout(z)), V.current.clear();
        try {
            let z = await Z.startOAuthFlow(async (q) => {
                G({
                    state: "waiting_for_login",
                    url: q
                });
                let R = setTimeout(() => F(!0), 3000);
                V.current.add(R)
            }, {
                loginWithClaudeAi: !0,
                inferenceOnly: !0,
                expiresIn: 31536000
            });
            if (!bH()) await SJ();
            G({
                state: "processing"
            });
            let w = oEA(z);
            if (w.warning) BA("tengu_oauth_storage_warning", {
                warning: w.warning
            });
            let N = setTimeout(() => {
                G({
                    state: "success",
                    token: z.accessToken
                });
                let q = setTimeout(() => {
                    A(z.accessToken)
                }, 1000);
                V.current.add(q)
            }, 100);
            V.current.add(N)
        } catch (z) {
            let w = z.message;
            if (!bH()) await SJ();
            G({
                state: "error",
                message: w,
                toRetry: {
                    state: "starting"
                }
            }), e(z instanceof Error ? z : Error(String(z))), BA("tengu_oauth_error", {
                error: w
            })
        }
    }, [Z, A]);
    F4.useEffect(() => {
        if (B.state === "starting") C()
    }, [B.state, C]), F4.useEffect(() => {
        if (B.state === "about_to_retry") {
            if (!bH()) SJ();
            let z = setTimeout(() => {
                if (B.nextState.state === "waiting_for_login") F(!0);
                else F(!1);
                G(B.nextState)
            }, 500);
            V.current.add(z)
        }
    }, [B]), F4.useEffect(() => {
        let z = V.current;
        return () => {
            Z.cleanup(), z.forEach((w) => clearTimeout(w)), z.clear()
        }
    }, [Z]);

function E() {
        switch (B.state) {
            case "starting":
                return F4.default.createElement(j, null, F4.default.createElement(e9, null), F4.default.createElement($, null, "Starting authentication…"));