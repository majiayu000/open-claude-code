/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.023Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 25/29
 * Lines: 421732 - 423225 (1494 lines)
 * Original file: cli.js
 */

            case "waiting_for_login":
                return F4.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, !X && F4.default.createElement(j, null, F4.default.createElement(e9, null), F4.default.createElement($, null, "Opening browser to sign in with your Claude account…")), X && F4.default.createElement(j, null, F4.default.createElement($, null, KF9), F4.default.createElement(s4, {
                    value: I,
                    onChange: Y,
                    onSubmit: (z) => H(z, B.url),
                    cursorOffset: J,
                    onChangeCursorOffset: W,
                    columns: D
                })));
            case "processing":
                return F4.default.createElement(j, null, F4.default.createElement(e9, null), F4.default.createElement($, null, "Processing authentication…"));
            case "success":
                return F4.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, F4.default.createElement($, {
                    color: "success"
                }, "✓ Authentication token created successfully!"), F4.default.createElement($, {
                    dimColor: !0
                }, "Using token for GitHub Actions setup…"));
            case "error":
                return F4.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, F4.default.createElement($, {
                    color: "error"
                }, "OAuth error: ", B.message), B.toRetry ? F4.default.createElement($, {
                    dimColor: !0
                }, "Press Enter to try again, or any other key to cancel") : F4.default.createElement($, {
                    dimColor: !0
                }, "Press any key to return to API key selection"));
            case "about_to_retry":
                return F4.default.createElement(j, {
                    flexDirection: "column",
                    gap: 1
                }, F4.default.createElement($, {
                    color: "permission"
                }, "Retrying…"));
            default:
                return null
        }
    }
    return F4.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, B.state === "starting" && F4.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1
    }, F4.default.createElement($, {
        bold: !0
    }, "Create Authentication Token"), F4.default.createElement($, {
        dimColor: !0
    }, "Creating a long-lived token for GitHub Actions")), B.state !== "success" && B.state !== "starting" && B.state !== "processing" && F4.default.createElement(j, {
        key: "header",
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1
    }, F4.default.createElement($, {
        bold: !0
    }, "Create Authentication Token"), F4.default.createElement($, {
        dimColor: !0
    }, "Creating a long-lived token for GitHub Actions")), B.state === "waiting_for_login" && X && F4.default.createElement(j, {
        flexDirection: "column",
        key: "urlToCopy",
        gap: 1,
        paddingBottom: 1
    }, F4.default.createElement(j, {
        paddingX: 1
    }, F4.default.createElement($, {
        dimColor: !0
    }, "Browser didn't open? Use the url below to sign in:")), F4.default.createElement(j, {
        width: 1000
    }, F4.default.createElement($, {
        dimColor: !0
    }, B.url))), F4.default.createElement(j, {
        paddingLeft: 1,
        flexDirection: "column",
        gap: 1
    }, E()))
}
var F4, KF9 = "Paste code here if prompted > ";
var HF9 = L(() => {
    hA();
    QY();
    f40();
    hB();
    w0();
    zI();
    u1();
    m8();
    Bh();
    jt();
    F4 = GA(VA(), 1)
});
import {
    execSync as EY1
} from "child_process";

function B_3(A) {
    let [Q] = qI.useState(() => Zw()), [B, G] = qI.useState({
        ...Q_3,
        useExistingKey: !!Q,
        selectedApiKeyOption: Q ? "existing" : ZU() ? "oauth" : "new"
    });
    DQ(), qI.default.useEffect(() => {
        BA("tengu_install_github_app_started", {})
    }, []);
    let Z = qI.useCallback(async () => {
        let P = [];
        try {
            EY1("gh --version", {
                stdio: "ignore"
            })
        } catch {
            P.push({
                title: "GitHub CLI not found",
                message: "GitHub CLI (gh) does not appear to be installed or accessible.",
                instructions: ["Install GitHub CLI from https://cli.github.com/", "macOS: brew install gh", "Windows: winget install --id GitHub.cli", "Linux: See installation instructions at https://github.com/cli/cli#installation"]
            })
        }
        try {
            let x = EY1("gh auth status -a", {
                encoding: "utf8"
            }).match(/Token scopes:.*$/m);
            if (x) {
                let p = x[0],
                    u = [];
                if (!p.includes("repo")) u.push("repo");
                if (!p.includes("workflow")) u.push("workflow");
                if (u.length > 0) {
                    G((o) => ({
                        ...o,
                        step: "error",
                        error: `GitHub CLI is missing required permissions: ${u.join(", ")}.`,
                        errorReason: "Missing required scopes",
                        errorInstructions: [`Your GitHub CLI authentication is missing the "${u.join('" and "')}" scope${u.length>1?"s":""} needed to manage GitHub Actions and secrets.`, "", "To fix this, run:", "  gh auth refresh -h github.com -s repo,workflow", "", "This will add the necessary permissions to manage workflows and secrets."]
                    }));
                    return
                }
            }
        } catch {
            P.push({
                title: "GitHub CLI not authenticated",
                message: "GitHub CLI does not appear to be authenticated.",
                instructions: ["Run: gh auth login", "Follow the prompts to authenticate with GitHub", "Or set up authentication using environment variables or other methods"]
            })
        }
        let y = "";
        try {
            EY1("git rev-parse --is-inside-work-tree", {
                stdio: "ignore"
            });
            let x = EY1("git remote get-url origin", {
                encoding: "utf8"
            }).trim().match(/github\.com[:/]([^/]+\/[^/]+)(\.git)?$/);
            if (x) y = x[1]?.replace(/\.git$/, "") || ""
        } catch {}
        BA("tengu_install_github_app_step_completed", {
            step: "check-gh"
        }), G((v) => ({
            ...v,
            warnings: P,
            currentRepo: y,
            selectedRepoName: y,
            useCurrentRepo: !!y,
            step: P.length > 0 ? "warnings" : "choose-repo"
        }))
    }, []);
    qI.default.useEffect(() => {
        if (B.step === "check-gh") Z()
    }, [B.step, Z]);
    let I = qI.useCallback(async (P, y) => {
        G((v) => ({
            ...v,
            step: "creating",
            currentWorkflowInstallStep: 0
        }));
        try {
            await FF9(B.selectedRepoName, P, y, () => {
                G((v) => ({
                    ...v,
                    currentWorkflowInstallStep: v.currentWorkflowInstallStep + 1
                }))
            }, B.workflowAction === "skip", B.selectedWorkflows, B.authType, {
                useCurrentRepo: B.useCurrentRepo,
                workflowExists: B.workflowExists,
                secretExists: B.secretExists
            }), BA("tengu_install_github_app_step_completed", {
                step: "creating"
            }), G((v) => ({
                ...v,
                step: "success"
            }))
        } catch (v) {
            let x = v instanceof Error ? v.message : "Failed to set up GitHub Actions";
            if (x.includes("workflow file already exists")) BA("tengu_install_github_app_error", {
                reason: "workflow_file_exists"
            }), G((p) => ({
                ...p,
                step: "error",
                error: "A Claude workflow file already exists in this repository.",
                errorReason: "Workflow file conflict",
                errorInstructions: ["The file .github/workflows/claude.yml already exists", "You can either:", "  1. Delete the existing file and run this command again", "  2. Update the existing file manually using the template from:", `     ${Wx}`]
            }));
            else BA("tengu_install_github_app_error", {
                reason: "setup_github_actions_failed"
            }), G((p) => ({
                ...p,
                step: "error",
                error: x,
                errorReason: "GitHub Actions setup failed",
                errorInstructions: []
            }))
        }
    }, [B.selectedRepoName, B.workflowAction, B.selectedWorkflows, B.useCurrentRepo, B.workflowExists, B.secretExists, B.authType]);
    // Async function: Y
async function Y() {
        await gZ("https://github.com/apps/claude")
    }

async function J(P) {
        try {
            let y = await ZQ("gh", ["api", `repos/${P}`, "--jq", ".permissions.admin"]);
            if (y.code === 0) return {
                hasAccess: y.stdout.trim() === "true"
            };
            if (y.stderr.includes("404") || y.stderr.includes("Not Found")) return {
                hasAccess: !1,
                error: "repository_not_found"
            };
            return {
                hasAccess: !1
            }
        } catch {
            return {
                hasAccess: !1
            }
        }
    }

async function W(P) {
        return (await ZQ("gh", ["api", `repos/${P}/contents/.github/workflows/claude.yml`, "--jq", ".sha"])).code === 0
    }
    // Async function: X
async function X() {
        let P = await ZQ("gh", ["secret", "list", "--app", "actions", "--repo", B.selectedRepoName]);
        if (P.code === 0)
            if (P.stdout.split(`
`).some((x) => {
                    return /^ANTHROPIC_API_KEY\s+/.test(x)
                })) G((x) => ({
                ...x,
                secretExists: !0,
                step: "check-existing-secret"
            }));
            else if (Q) G((x) => ({
            ...x,
            apiKeyOrOAuthToken: Q,
            useExistingKey: !0
        })), await I(Q, B.secretName);
        else G((x) => ({
            ...x,
            step: "api-key"
        }));
        else if (Q) G((y) => ({
            ...y,
            apiKeyOrOAuthToken: Q,
            useExistingKey: !0
        })), await I(Q, B.secretName);
        else G((y) => ({
            ...y,
            step: "api-key"
        }))
    }
    let F = async () => {
        if (B.step === "warnings") BA("tengu_install_github_app_step_completed", {
            step: "warnings"
        }), G((P) => ({
            ...P,
            step: "install-app"
        })), setTimeout(() => {
            Y()
        }, 0);
        else if (B.step === "choose-repo") {
            let P = B.useCurrentRepo ? B.currentRepo : B.selectedRepoName;
            if (!P.trim()) return;
            let y = [];
            if (P.includes("github.com")) {
                let p = P.match(/github\.com[:/]([^/]+\/[^/]+)(\.git)?$/);
                if (!p) y.push({
                    title: "Invalid GitHub URL format",
                    message: "The repository URL format appears to be invalid.",
                    instructions: ["Use format: owner/repo or https://github.com/owner/repo", "Example: anthropics/claude-cli"]
                });
                else P = p[1]?.replace(/\.git$/, "") || ""
            }
            if (!P.includes("/")) y.push({
                title: "Repository format warning",
                message: 'Repository should be in format "owner/repo"',
                instructions: ["Use format: owner/repo", "Example: anthropics/claude-cli"]
            });
            let v = await J(P);
            if (v.error === "repository_not_found") y.push({
                title: "Repository not found",
                message: `Repository ${P} was not found or you don't have access.`,
                instructions: [`Check that the repository name is correct: ${P}`, "Ensure you have access to this repository", 'For private repositories, make sure your GitHub token has the "repo" scope', "You can add the repo scope with: gh auth refresh -h github.com -s repo,workflow"]
            });
            else if (!v.hasAccess) y.push({
                title: "Admin permissions required",
                message: `You might need admin permissions on ${P} to set up GitHub Actions.`,
                instructions: ["Repository admins can install GitHub Apps and set secrets", "Ask a repository admin to run this command if setup fails", "Alternatively, you can use the manual setup instructions"]
            });
            let x = await W(P);
            if (y.length > 0) {
                let p = [...B.warnings, ...y];
                G((u) => ({
                    ...u,
                    selectedRepoName: P,
                    workflowExists: x,
                    warnings: p,
                    step: "warnings"
                }))
            } else BA("tengu_install_github_app_step_completed", {
                step: "choose-repo"
            }), G((p) => ({
                ...p,
                selectedRepoName: P,
                workflowExists: x,
                step: "install-app"
            })), setTimeout(() => {
                Y()
            }, 0)
        } else if (B.step === "install-app")
            if (BA("tengu_install_github_app_step_completed", {
                    step: "install-app"
                }), B.workflowExists) G((P) => ({
                ...P,
                step: "check-existing-workflow"
            }));
            else G((P) => ({
                ...P,
                step: "select-workflows"
            }));
        else if (B.step === "check-existing-workflow") return;
        else if (B.step === "select-workflows") return;
        else if (B.step === "check-existing-secret")
            if (BA("tengu_install_github_app_step_completed", {
                    step: "check-existing-secret"
                }), B.useExistingSecret) await I(null, B.secretName);
            else await I(B.apiKeyOrOAuthToken, B.secretName);
        else if (B.step === "api-key") {
            if (B.selectedApiKeyOption === "oauth") return;
            let P = B.selectedApiKeyOption === "existing" ? Q : B.apiKeyOrOAuthToken;
            if (!P) {
                BA("tengu_install_github_app_error", {
                    reason: "api_key_missing"
                }), G((v) => ({
                    ...v,
                    step: "error",
                    error: "API key is required"
                }));
                return
            }
            G((v) => ({
                ...v,
                apiKeyOrOAuthToken: P,
                useExistingKey: B.selectedApiKeyOption === "existing"
            }));
            let y = await ZQ("gh", ["secret", "list", "--app", "actions", "--repo", B.selectedRepoName]);
            if (y.code === 0)
                if (y.stdout.split(`
`).some((p) => {
                        return /^ANTHROPIC_API_KEY\s+/.test(p)
                    })) BA("tengu_install_github_app_step_completed", {
                    step: "api-key"
                }), G((p) => ({
                    ...p,
                    secretExists: !0,
                    step: "check-existing-secret"
                }));
                else BA("tengu_install_github_app_step_completed", {
                    step: "api-key"
                }), await I(P, B.secretName);
            else BA("tengu_install_github_app_step_completed", {
                step: "api-key"
            }), await I(P, B.secretName)
        }
    }, V = (P) => {
        G((y) => ({
            ...y,
            selectedRepoName: P
        }))
    }, K = (P) => {
        G((y) => ({
            ...y,
            apiKeyOrOAuthToken: P
        }))
    }, D = (P) => {
        G((y) => ({
            ...y,
            selectedApiKeyOption: P
        }))
    }, H = qI.useCallback(() => {
        BA("tengu_install_github_app_step_completed", {
            step: "api-key"
        }), G((P) => ({
            ...P,
            step: "oauth-flow"
        }))
    }, []), C = qI.useCallback((P) => {
        BA("tengu_install_github_app_step_completed", {
            step: "oauth-flow"
        }), G((y) => ({
            ...y,
            apiKeyOrOAuthToken: P,
            useExistingKey: !1,
            secretName: "CLAUDE_CODE_OAUTH_TOKEN",
            authType: "oauth_token"
        })), I(P, "CLAUDE_CODE_OAUTH_TOKEN")
    }, [I]), E = qI.useCallback(() => {
        G((P) => ({
            ...P,
            step: "api-key"
        }))
    }, []), z = (P) => {
        if (P && !/^[a-zA-Z0-9_]+$/.test(P)) return;
        G((y) => ({
            ...y,
            secretName: P
        }))
    }, w = (P) => {
        G((y) => ({
            ...y,
            useCurrentRepo: P,
            selectedRepoName: P ? y.currentRepo : ""
        }))
    }, N = (P) => {
        G((y) => ({
            ...y,
            useExistingKey: P
        }))
    }, q = (P) => {
        G((y) => ({
            ...y,
            useExistingSecret: P,
            secretName: P ? "ANTHROPIC_API_KEY" : ""
        }))
    }, R = async (P) => {
        if (P === "exit") {
            A.onDone("Installation cancelled by user");
            return
        }
        if (BA("tengu_install_github_app_step_completed", {
                step: "check-existing-workflow"
            }), G((y) => ({
                ...y,
                workflowAction: P
            })), P === "skip" || P === "update")
            if (Q) await X();
            else G((y) => ({
                ...y,
                step: "api-key"
            }))
    };
    switch (h1(() => {
            if (B.step === "success" || B.step === "error") {
                if (B.step === "success") BA("tengu_install_github_app_completed", {});
                A.onDone(B.step === "success" ? "GitHub Actions setup complete!" : B.error ? `Couldn't install GitHub App: ${B.error}
For manual setup instructions, see: ${Wx}` : `GitHub App installation failed
For manual setup instructions, see: ${Wx}`)
            }
        }), B.step) {
        case "check-gh":
            return qI.default.createElement(fX9, null);
        case "warnings":
            return qI.default.createElement(YF9, {
                warnings: B.warnings,
                onContinue: F
            });
        case "choose-repo":
            return qI.default.createElement(gX9, {
                currentRepo: B.currentRepo,
                useCurrentRepo: B.useCurrentRepo,
                repoUrl: B.selectedRepoName,
                onRepoUrlChange: V,
                onToggleUseCurrentRepo: w,
                onSubmit: F
            });
        case "install-app":
            return qI.default.createElement(iX9, {
                repoUrl: B.selectedRepoName,
                onSubmit: F
            });
        case "check-existing-workflow":
            return qI.default.createElement(ZF9, {
                repoName: B.selectedRepoName,
                onSelectAction: R
            });
        case "check-existing-secret":
            return qI.default.createElement(aX9, {
                useExistingSecret: B.useExistingSecret,
                secretName: B.secretName,
                onToggleUseExistingSecret: q,
                onSecretNameChange: z,
                onSubmit: F
            });
        case "api-key":
            return qI.default.createElement(rX9, {
                existingApiKey: Q,
                useExistingKey: B.useExistingKey,
                apiKeyOrOAuthToken: B.apiKeyOrOAuthToken,
                onApiKeyChange: K,
                onToggleUseExistingKey: N,
                onSubmit: F,
                onCreateOAuthToken: ZU() ? H : void 0,
                selectedOption: B.selectedApiKeyOption,
                onSelectOption: D
            });
        case "creating":
            return qI.default.createElement(tX9, {
                currentWorkflowInstallStep: B.currentWorkflowInstallStep,
                secretExists: B.secretExists,
                useExistingSecret: B.useExistingSecret,
                secretName: B.secretName,
                skipWorkflow: B.workflowAction === "skip",
                selectedWorkflows: B.selectedWorkflows
            });
        case "success":
            return qI.default.createElement(AF9, {
                secretExists: B.secretExists,
                useExistingSecret: B.useExistingSecret,
                secretName: B.secretName,
                skipWorkflow: B.workflowAction === "skip"
            });
        case "error":
            return qI.default.createElement(BF9, {
                error: B.error,
                errorReason: B.errorReason,
                errorInstructions: B.errorInstructions
            });
        case "select-workflows":
            return qI.default.createElement(WF9, {
                defaultSelections: B.selectedWorkflows,
                onSubmit: (P) => {
                    if (BA("tengu_install_github_app_step_completed", {
                            step: "select-workflows"
                        }), G((y) => ({
                            ...y,
                            selectedWorkflows: P
                        })), Q) X();
                    else G((y) => ({
                        ...y,
                        step: "api-key"
                    }))
                }
            });
        case "oauth-flow":
            return qI.default.createElement(DF9, {
                onSuccess: C,
                onCancel: E
            })
    }
}
var qI, Q_3, G_3, CF9;
var EF9 = L(() => {
    hA();
    hB();
    c9();
    I6();
    lM();
    hX9();
    uX9();
    nX9();
    sX9();
    oX9();
    eX9();
    QF9();
    GF9();
    IF9();
    JF9();
    XF9();
    VF9();
    HF9();
    w0();
    qI = GA(VA(), 1), Q_3 = {
        step: "check-gh",
        selectedRepoName: "",
        currentRepo: "",
        useCurrentRepo: !1,
        apiKeyOrOAuthToken: "",
        useExistingKey: !0,
        currentWorkflowInstallStep: 0,
        warnings: [],
        secretExists: !1,
        secretName: "ANTHROPIC_API_KEY",
        useExistingSecret: !0,
        workflowExists: !1,
        selectedWorkflows: ["claude", "claude-review"],
        selectedApiKeyOption: "new",
        authType: "api_key"
    };
    G_3 = {
        type: "local-jsx",
        name: "install-github-app",
        description: "Set up Claude GitHub Actions for a repository",
        isEnabled: () => !process.env.DISABLE_INSTALL_GITHUB_APP_COMMAND && !Y_(),
        isHidden: !1,
        async call(A) {
            return qI.default.createElement(B_3, {
                onDone: A
            })
        },
        userFacingName() {
            return "install-github-app"
        }
    }, CF9 = G_3
});

function YFA({
    onPress: A
}) {
    return h1((Q, B) => {
        if (B.return) A();
        else if (B.escape) c8(1)
    }), H2.default.createElement($, null, "Press ", H2.default.createElement($, {
        bold: !0
    }, "Enter"), " to continue or ", H2.default.createElement($, {
        bold: !0
    }, "Esc"), " to exit")
}

function JFA() {
    let [A, Q] = H2.useState("intro"), [B, G] = H2.useState(""), [Z, I] = H2.useState("");
    if (DQ(() => {
            rl("canceled", "user_exit"), c8(1)
        }), H2.useEffect(() => {
            rl("start")
        }, []), H2.useEffect(() => {
            let Y = async () => {
                try {
                    if (!ct1()) G("Local package creation failed"), Q("error"), rl("failure", "environement_setup");
                    switch (await cAA()) {
                        case "success": {
                            Q("success"), rl("success");
                            break
                        }
                        case "in_progress":
                            G("Update already in progress"), Q("error"), rl("failure", "in_progress");
                            break;
                        case "install_failed":
                            G(`Install of ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL} failed`), Q("error"), rl("failure", "other_failure");
                            break
                    }
                } catch (X) {
                    G(String(X)), Q("error"), rl("failure", "unexpected_error")
                }
            }, J = async () => {
                try {
                    let X = await S22();
                    I(X), Q("setup")
                } catch (X) {
                    G(String(X)), Q("error")
                }
            }, W = async () => {
                try {
                    if (await _22()) Q("uninstall-success");
                    else Q("uninstall-failed")
                } catch (X) {
                    G(String(X)), Q("uninstall-failed")
                }
            };
            switch (A) {
                case "installing":
                    Y();
                    break;
                case "setup-alias":
                    J();
                    break;
                case "uninstall":
                    W();
                    break;
                default:
                    break
            }
        }, [A]), A === "intro") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0
    }, "Claude Code Local Installer"), H2.default.createElement(j, {
        flexDirection: "column"
    }, H2.default.createElement($, {
        dimColor: !0
    }, "This will install Claude Code to ~/.claude/local"), H2.default.createElement($, {
        dimColor: !0
    }, "instead of using a global npm installation.")), H2.default.createElement(YFA, {
        onPress: () => Q("installing")
    }));
    if (A === "installing") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0
    }, "Installing Claude Code locally..."), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement(e9, null), H2.default.createElement($, null, " Installing to ", il)));
    if (A === "success") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0,
        color: "success"
    }, "✓ Local installation successful!"), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement($, null, "Next, let's add an alias for `claude`")), H2.default.createElement(YFA, {
        onPress: () => Q("setup-alias")
    }));
    if (A === "setup-alias") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0
    }, "Setting up alias for claude..."), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement(e9, null), H2.default.createElement($, null, " Configuring shell environment")));
    if (A === "setup") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0
    }, "Alias setup complete"), H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, null, Z), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement($, null, "Next, we'll remove the globally installed npm package"))), H2.default.createElement(YFA, {
        onPress: () => Q("uninstall")
    }));
    if (A === "uninstall") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0
    }, "Uninstalling global Claude Code..."), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement(e9, null), H2.default.createElement($, null, " Removing global npm installation")));
    if (A === "uninstall-success") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0,
        color: "success"
    }, "✓ Global installation removed successfully!"), H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, null, "Claude Code is now installed locally."), H2.default.createElement($, null, "Please restart your shell, then run", " ", H2.default.createElement($, {
        color: "claude"
    }, oA.bold("claude")), "."), H2.default.createElement(j, {
        flexDirection: "row",
        marginY: 1
    }, H2.default.createElement(e9, null), H2.default.createElement($, null, " Happy Clauding!"))), H2.default.createElement(YFA, {
        onPress: () => c8(0)
    }));
    if (A === "uninstall-failed") return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0,
        color: "warning"
    }, "! Could not remove global installation"), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement($, null, "The local installation is installed, but we couldn't remove the global npm package automatically.")), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement($, null, "You can remove it manually later with:", `
`, oA.bold(`npm uninstall -g --force ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}`))), H2.default.createElement(YFA, {
        onPress: () => c8(0)
    }));
    return H2.default.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, H2.default.createElement($, {
        bold: !0,
        color: "error"
    }, "✗ Installation failed"), H2.default.createElement(j, {
        marginY: 1
    }, H2.default.createElement($, null, B || "An unexpected error occurred during installation.")), H2.default.createElement(YFA, {
        onPress: () => c8(1)
    }))
}
var H2;
var zY1 = L(() => {
    hA();
    J9();
    zI();
    c9();
    nT();
    _J();
    H2 = GA(VA(), 1)
});
var zF9, Z_3, UF9;
var $F9 = L(() => {
    hA();
    zY1();
    nT();
    zF9 = GA(VA(), 1), Z_3 = {
        type: "local",
        name: "migrate-installer",
        description: "Migrate from global npm installation to local installation",
        isEnabled: () => !process.env.DISABLE_MIGRATE_INSTALLER_COMMAND && !al() && !HJ(),
        isHidden: !1,
        supportsNonInteractive: !1,
        async call() {
            let {
                waitUntilExit: A
            } = await Z3(zF9.default.createElement(JFA, null));
            return await A(), {
                type: "text",
                value: ""
            }
        },
        userFacingName() {
            return "migrate-installer"
        }
    }, UF9 = Z_3
});

function jF0({
    servers: A,
    onSelectServer: Q,
    onComplete: B
}) {
    let [G] = $B(), Z = DQ();
    if (A.length === 0) return null;
    let I = tBA(),
        Y = A.some((W) => W.client.type === "failed"),
        J = A.map((W) => {
            let X = "",
                F = "",
                V = "";
            if (W.client.type === "disabled") F = tQ("inactive", G)(V1.radioOff), X = "disabled · Enter to view details", V = `${F} ${X}`;
            else if (W.client.type === "connected") F = tQ("success", G)(V1.tick), X = "connected · Enter to view details", V = `${F} ${X}`;
            else if (W.client.type === "pending") F = tQ("inactive", G)(V1.radioOff), X = "connecting...", V = `${F} ${X}`;
            else if (W.client.type === "needs-auth") F = tQ("warning", G)(V1.triangleUpOutline), X = "needs authentication · Enter to login", V = `${F} ${X}`;
            else if (W.client.type === "failed") F = tQ("error", G)(V1.cross), X = "failed · Enter to view details", V = `${F} ${X}`;
            else F = tQ("error", G)(V1.cross), X = "failed", V = `${F} ${X}`;
            return {
                label: oA.bold(W.name),
                value: W.name,
                description: V,
                dimDescription: !1
            }
        });
    return HY.default.createElement(j, {
        flexDirection: "column"
    }, HY.default.createElement(DY1, null), HY.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round",
        borderDimColor: !0
    }, HY.default.createElement(j, {
        marginBottom: 1
    }, HY.default.createElement($, {
        bold: !0
    }, "Manage MCP servers")), HY.default.createElement(M0, {
        options: J,
        onChange: (W) => {
            let X = A.find((F) => F.name === W);
            if (X) Q(X)
        },
        onCancel: () => B("MCP dialog dismissed", {
            display: "system"
        })
    }), Y && HY.default.createElement(j, {
        marginTop: 1
    }, HY.default.createElement($, {
        dimColor: !0
    }, "※ Tip:", " ", I ? `Error logs will be shown inline. Log files are also saved in
  ${Xx.baseLogs()}` : `Run claude --debug to see logs inline, or view log files in
  ${Xx.baseLogs()}`)), HY.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, HY.default.createElement($, {
        dimColor: !0
    }, "MCP Config locations (by scope):"), ["user", "project", "local"].map((W) => HY.default.createElement(j, {
        key: W,
        flexDirection: "column",
        marginLeft: 1
    }, HY.default.createElement($, {
        dimColor: !0
    }, "• ", Gt(W), ":"), HY.default.createElement(j, {
        marginLeft: 2
    }, HY.default.createElement($, {
        dimColor: !0
    }, "• ", mw(W)))))), HY.default.createElement(j, {
        marginTop: 1,
        marginLeft: 0
    }, HY.default.createElement($, {
        dimColor: !0
    }, "For help configuring MCP servers, see:", " ", HY.default.createElement(a4, {
        url: "https://docs.claude.com/en/docs/claude-code/mcp"
    }, "https://docs.claude.com/en/docs/claude-code/mcp")))), HY.default.createElement(j, {
        marginLeft: 3
    }, HY.default.createElement($, {
        dimColor: !0
    }, Z.pending ? HY.default.createElement(HY.default.Fragment, null, "Press ", Z.keyName, " again to exit") : HY.default.createElement(HY.default.Fragment, null, "Esc to exit"))))
}
var HY;
var SF0 = L(() => {
    hA();
    M9();
    D0();
    T6();
    c9();
    n2();
    J9();
    $F0();
    xX();
    hA();
    HY = GA(VA(), 1)
});

function $Y1({
    serverToolsCount: A,
    serverPromptsCount: Q,
    serverResourcesCount: B
}) {
    let G = [];
    if (A > 0) G.push("tools");
    if (B > 0) G.push("resources");
    if (Q > 0) G.push("prompts");
    return UY1.default.createElement(j, null, UY1.default.createElement($, {
        bold: !0
    }, "Capabilities: "), UY1.default.createElement($, {
        color: "text"
    }, G.length > 0 ? G.join(" · ") : "none"))
}
var UY1;
var _F0 = L(() => {
    hA();
    UY1 = GA(VA(), 1)
});

function wY1(A, Q) {
    switch (A.client.type) {
        case "connected":
            return {
                message: `Reconnected to ${Q}.`, success: !0
            };
        case "needs-auth":
            return {
                message: `${Q} requires authentication. Use the 'Authenticate' option.`, success: !1
            };
        case "failed":
            return {
                message: `Failed to reconnect to ${Q}.`, success: !1
            };
        default:
            return {
                message: `Unknown result when reconnecting to ${Q}.`, success: !1
            }
    }
}

function qY1(A, Q) {
    let B = A instanceof Error ? A.message : String(A);
    return `Error reconnecting to ${Q}: ${B}`
}

function kF0({
    server: A,
    serverToolsCount: Q,
    onViewTools: B,
    onCancel: G,
    onComplete: Z
}) {
    let [I] = $B(), Y = DQ(), [J] = _Q(), W = OXA(), X = RXA(), [F, V] = j4.useState(!1), K = j4.default.useCallback(async () => {
        let E = A.client.type !== "disabled";
        try {
            await X(A.name), G()
        } catch (z) {
            Z(`Failed to ${E?"disable":"enable"} MCP server '${A.name}': ${z instanceof Error?z.message:String(z)}`)
        }
    }, [A.client.type, A.name, X, G, Z]), D = String(A.name).charAt(0).toUpperCase() + String(A.name).slice(1), H = ciA(J.mcp.commands, A.name).length, C = [];
    if (A.client.type !== "disabled" && Q > 0) C.push({
        label: "View tools",
        value: "tools"
    });
    if (A.client.type !== "disabled") C.push({
        label: "Reconnect",
        value: "reconnectMcpServer"
    });
    if (C.push({
            label: A.client.type !== "disabled" ? "Disable" : "Enable",
            value: "toggle-enabled"
        }), C.length === 0) C.push({
        label: "Back",
        value: "back"
    });
    if (F) return j4.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1
    }, j4.default.createElement($, {
        color: "text"
    }, "Reconnecting to ", j4.default.createElement($, {
        bold: !0
    }, A.name)), j4.default.createElement(j, null, j4.default.createElement(e9, null), j4.default.createElement($, null, " Restarting MCP server process")), j4.default.createElement($, {
        dimColor: !0
    }, "This may take a few moments."));
    return j4.default.createElement(j4.default.Fragment, null, j4.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, j4.default.createElement(j, {
        marginBottom: 1
    }, j4.default.createElement($, {
        bold: !0
    }, D, " MCP Server")), j4.default.createElement(j, {
        flexDirection: "column",
        gap: 0
    }, j4.default.createElement(j, null, j4.default.createElement($, {
        bold: !0
    }, "Status: "), A.client.type === "disabled" ? j4.default.createElement($, null, tQ("inactive", I)(V1.radioOff), " disabled") : A.client.type === "connected" ? j4.default.createElement($, null, tQ("success", I)(V1.tick), " connected") : A.client.type === "pending" ? j4.default.createElement(j4.default.Fragment, null, j4.default.createElement($, {
        dimColor: !0
    }, V1.radioOff), j4.default.createElement($, null, " connecting…")) : j4.default.createElement($, null, tQ("error", I)(V1.cross), " failed")), j4.default.createElement(j, null, j4.default.createElement($, {
        bold: !0
    }, "Command: "), j4.default.createElement($, {
        dimColor: !0
    }, A.config.command)), A.config.args && A.config.args.length > 0 && j4.default.createElement(j, null, j4.default.createElement($, {
        bold: !0
    }, "Args: "), j4.default.createElement($, {
        dimColor: !0
    }, A.config.args.join(" "))), j4.default.createElement(j, null, j4.default.createElement($, {
        bold: !0
    }, "Config location: "), j4.default.createElement($, {
        dimColor: !0
    }, mw(l3A(A.name)?.scope ?? "dynamic"))), A.client.type === "connected" && j4.default.createElement($Y1, {
        serverToolsCount: Q,
        serverPromptsCount: H,
        serverResourcesCount: J.mcp.resources[A.name]?.length || 0
    }), A.client.type === "connected" && Q > 0 && j4.default.createElement(j, null, j4.default.createElement($, {
        bold: !0
    }, "Tools: "), j4.default.createElement($, {
        dimColor: !0
    }, Q, " tools"))), C.length > 0 && j4.default.createElement(j, {
        marginTop: 1
    }, j4.default.createElement(M0, {
        options: C,
        onChange: async (E) => {
            if (E === "tools") B();
            else if (E === "reconnectMcpServer") {
                V(!0);
                try {
                    let z = await W(A.name),
                        {
                            message: w
                        } = wY1(z, A.name);
                    Z?.(w)
                } catch (z) {
                    Z?.(qY1(z, A.name))
                } finally {
                    V(!1)
                }
            } else if (E === "toggle-enabled") await K();
            else if (E === "back") G()
        },
        onCancel: G
    }))), j4.default.createElement(j, {
        marginLeft: 3
    }, j4.default.createElement($, {
        dimColor: !0
    }, Y.pending ? j4.default.createElement(j4.default.Fragment, null, "Press ", Y.keyName, " again to exit") : j4.default.createElement(j4.default.Fragment, null, "Esc to go back"))))
}
var j4;
var yF0 = L(() => {
    hA();
    T6();
    c9();
    n2();
    H9();
    xX();
    GM();
    _F0();
    FQA();
    zI();
    j4 = GA(VA(), 1)
});

function xF0({
    server: A,
    serverToolsCount: Q,
    onViewTools: B,
    onCancel: G,
    onComplete: Z
}) {
    let [I] = $B(), Y = DQ(), [J, W] = q2.default.useState(!1), [X, F] = q2.default.useState(null), [V, K] = _Q(), [D, H] = q2.default.useState(null), [C, E] = q2.useState(!1), [z, w] = q2.useState(null);
    h1((u, o) => {
        if (o.escape && J) {
            if (z) z.abort();
            W(!1), H(null), w(null)
        }
    });
    let N = String(A.name).charAt(0).toUpperCase() + String(A.name).slice(1),
        q = ciA(V.mcp.commands, A.name).length,
        R = OXA(),
        P = RXA(),
        y = q2.default.useCallback(async () => {
            let u = A.client.type !== "disabled";
            try {
                await P(A.name), G()
            } catch (o) {
                Z?.(`Failed to ${u?"disable":"enable"} MCP server '${A.name}': ${o instanceof Error?o.message:String(o)}`)
            }
        }, [A.client.type, A.name, P, G, Z]),
        v = q2.default.useCallback(async () => {
            W(!0), F(null);
            let u = new AbortController;
            w(u);
            try {
                if (A.isAuthenticated && A.config) await aA0(A.name, A.config);
                if (A.config) {
                    await v52(A.name, A.config, H, u.signal), BA("tengu_mcp_auth_config_authenticate", {
                        wasAuthenticated: A.isAuthenticated
                    });
                    let o = await R(A.name);
                    if (o.client.type === "connected") {
                        let l = A.isAuthenticated ? `Authentication successful. Reconnected to ${A.name}.` : `Authentication successful. Connected to ${A.name}.`;
                        Z?.(l)
                    } else if (o.client.type === "needs-auth") Z?.("Authentication successful, but server still requires authentication. You may need to manually restart Claude Code.");
                    else f0(A.name, "Reconnection failed after authentication"), Z?.("Authentication successful, but server reconnection failed. You may need to manually restart Claude Code for the changes to take effect.")
                }
            } catch (o) {
                if (o instanceof Error && !(o instanceof mB1)) F(o.message)
            } finally {
                W(!1), w(null)
            }
        }, [A.isAuthenticated, A.config, A.name, Z, R, H]),
        x = async () => {
            if (A.config) await aA0(A.name, A.config), BA("tengu_mcp_auth_config_clear", {}), await cIA(A.name, {
                ...A.config,
                scope: A.scope
            }), K((u) => {
                let o = u.mcp.clients.map((QA) => QA.name === A.name ? {
                        ...QA,
                        type: "failed"
                    } : QA),
                    l = L6B(u.mcp.tools, A.name),
                    k = M6B(u.mcp.commands, A.name),
                    d = O6B(u.mcp.resources, A.name);
                return {
                    ...u,
                    mcp: {
                        clients: o,
                        tools: l,
                        commands: k,
                        resources: d
                    }
                }
            }), Z?.(`Authentication cleared for ${A.name}.`)
        };
    if (J) return q2.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1
    }, q2.default.createElement($, {
        color: "claude"
    }, "Authenticating with ", A.name, "…"), q2.default.createElement(j, null, q2.default.createElement(e9, null), q2.default.createElement($, null, " A browser window will open for authentication")), D && q2.default.createElement(j, {
        flexDirection: "column"
    }, q2.default.createElement($, {
        dimColor: !0
    }, "If your browser doesn't open automatically, copy this URL manually:"), q2.default.createElement(a4, {
        url: D
    })), q2.default.createElement(j, {
        marginLeft: 3
    }, q2.default.createElement($, {
        dimColor: !0
    }, "Return here after authenticating in your browser. Press Esc to go back.")));
    if (C) return q2.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1
    }, q2.default.createElement($, {
        color: "text"
    }, "Reconnecting to ", q2.default.createElement($, {
        bold: !0
    }, A.name), "…"), q2.default.createElement(j, null, q2.default.createElement(e9, null), q2.default.createElement($, null, " Establishing connection to MCP server")), q2.default.createElement($, {
        dimColor: !0
    }, "This may take a few moments."));
    let p = [];
    if (A.client.type === "connected" && Q > 0) p.push({
        label: "View tools",
        value: "tools"
    });
    if (A.isAuthenticated) p.push({
        label: "Re-authenticate",
        value: "reauth"
    }), p.push({
        label: "Clear authentication",
        value: "clear-auth"
    });
    if (!A.isAuthenticated) p.push({
        label: "Authenticate",
        value: "auth"
    });
    if (A.client.type !== "needs-auth" && A.client.type !== "disabled") p.push({
        label: "Reconnect",
        value: "reconnectMcpServer"
    });
    if (p.push({
            label: A.client.type !== "disabled" ? "Disable" : "Enable",
            value: "toggle-enabled"
        }), p.length === 0) p.push({
        label: "Back",
        value: "back"
    });
    return q2.default.createElement(q2.default.Fragment, null, q2.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, q2.default.createElement(j, {
        marginBottom: 1
    }, q2.default.createElement($, {
        bold: !0
    }, N, " MCP Server")), q2.default.createElement(j, {
        flexDirection: "column",
        gap: 0
    }, q2.default.createElement(j, null, q2.default.createElement($, {
        bold: !0
    }, "Status: "), A.client.type === "disabled" ? q2.default.createElement($, null, tQ("inactive", I)(V1.radioOff), " disabled") : A.client.type === "connected" ? q2.default.createElement(q2.default.Fragment, null, q2.default.createElement($, null, tQ("success", I)(V1.tick), " connected"), A.isAuthenticated && q2.default.createElement($, null, "  ", tQ("success", I)(V1.tick), " authenticated")) : A.client.type === "pending" ? q2.default.createElement(q2.default.Fragment, null, q2.default.createElement($, {
        dimColor: !0
    }, V1.radioOff), q2.default.createElement($, null, " connecting…")) : A.client.type === "needs-auth" ? q2.default.createElement($, null, tQ("warning", I)(V1.triangleUpOutline), " needs authentication") : q2.default.createElement($, null, tQ("error", I)(V1.cross), " failed")), q2.default.createElement(j, null, q2.default.createElement($, {
        bold: !0
    }, "URL: "), q2.default.createElement($, {
        dimColor: !0
    }, A.config.url)), q2.default.createElement(j, null, q2.default.createElement($, {
        bold: !0
    }, "Config location: "), q2.default.createElement($, {
        dimColor: !0
    }, mw(l3A(A.name)?.scope ?? "dynamic"))), A.client.type === "connected" && q2.default.createElement($Y1, {
        serverToolsCount: Q,
        serverPromptsCount: q,
        serverResourcesCount: V.mcp.resources[A.name]?.length || 0
    }), A.client.type === "connected" && Q > 0 && q2.default.createElement(j, null, q2.default.createElement($, {
        bold: !0
    }, "Tools: "), q2.default.createElement($, {
        dimColor: !0
    }, Q, " tools"))), X && q2.default.createElement(j, {
        marginTop: 1
    }, q2.default.createElement($, {
        color: "error"
    }, "Error: ", X)), p.length > 0 && q2.default.createElement(j, {
        marginTop: 1
    }, q2.default.createElement(M0, {
        options: p,
        onChange: async (u) => {
            switch (u) {
                case "tools":
                    B();
                    break;
                case "auth":
                case "reauth":
                    await v();
                    break;
                case "clear-auth":
                    await x();
                    break;
                case "reconnectMcpServer":
                    E(!0);
                    try {
                        let o = await R(A.name),
                            {
                                message: l
                            } = wY1(o, A.name);
                        Z?.(l)
                    } catch (o) {
                        Z?.(qY1(o, A.name))
                    } finally {
                        E(!1)
                    }
                    break;
                case "toggle-enabled":
                    await y();
                    break;
                case "back":
                    G();
                    break
            }
        },
        onCancel: G
    }))), q2.default.createElement(j, {
        marginLeft: 3
    }, q2.default.createElement($, {
        dimColor: !0
    }, Y.pending ? q2.default.createElement(q2.default.Fragment, null, "Press ", Y.keyName, " again to exit") : q2.default.createElement(q2.default.Fragment, null, "Esc to go back"))))
}
var q2;
var vF0 = L(() => {
    hA();
    T6();
    w0();
    c9();
    n2();
    dB1();
    zI();
    Tk();
    H9();
    u1();
    xX();
    GM();
    _F0();
    hA();
    FQA();
    q2 = GA(VA(), 1)
});

function bF0({
    server: A,
    onSelectTool: Q,
    onBack: B
}) {
    let G = DQ(),
        [Z] = _Q(),
        I = Gz.default.useMemo(() => {
            if (A.client.type !== "connected") return [];
            return mzA(Z.mcp.tools, A.name)
        }, [A, Z.mcp.tools]),
        Y = I.map((J, W) => {
            let X = piA(J.name, A.name),
                F = J.userFacingName ? J.userFacingName({}) : X,
                V = liA(F),
                K = J.isReadOnly?.({}) ?? !1,
                D = J.isDestructive?.({}) ?? !1,
                H = J.isOpenWorld?.({}) ?? !1,
                C = [];
            if (K) C.push("read-only");
            if (D) C.push("destructive");
            if (H) C.push("open-world");
            return {
                label: V,
                value: W.toString(),
                description: C.length > 0 ? C.join(", ") : void 0,
                descriptionColor: D ? "error" : K ? "success" : void 0
            }
        });
    return Gz.default.createElement(j, {
        flexDirection: "column"
    }, Gz.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, Gz.default.createElement(j, {
        marginBottom: 1
    }, Gz.default.createElement($, {
        bold: !0
    }, "Tools for ", A.name), Gz.default.createElement($, {
        dimColor: !0
    }, " (", I.length, " tools)")), I.length === 0 ? Gz.default.createElement($, {
        dimColor: !0
    }, "No tools available") : Gz.default.createElement(M0, {
        options: Y,
        onChange: (J) => {
            let W = parseInt(J),
                X = I[W];
            if (X) Q(X, W)
        },
        onCancel: B
    })), Gz.default.createElement(j, {
        marginLeft: 3
    }, Gz.default.createElement($, {
        dimColor: !0
    }, G.pending ? Gz.default.createElement(Gz.default.Fragment, null, "Press ", G.keyName, " again to exit") : Gz.default.createElement(Gz.default.Fragment, null, "Esc to go back"))))
}
var Gz;
var fF0 = L(() => {
    hA();
    T6();
    xX();
    H9();
    c9();
    Gz = GA(VA(), 1)
});

function hF0({
    tool: A,
    server: Q,
    onBack: B
}) {
    let G = DQ(),
        [Z, I] = D3.default.useState("");
    h1((K, D) => {
        if (D.escape) B()
    });
    let Y = piA(A.name, Q.name),
        J = A.userFacingName ? A.userFacingName({}) : Y,
        W = liA(J),
        X = A.isReadOnly?.({}) ?? !1,
        F = A.isDestructive?.({}) ?? !1,
        V = A.isOpenWorld?.({}) ?? !1;
    return D3.default.useEffect(() => {
        // Async function: K
async function K() {
            try {
                let D = await A.description({}, {
                    isNonInteractiveSession: !1,
                    toolPermissionContext: {
                        mode: "default",
                        additionalWorkingDirectories: new Map,
                        alwaysAllowRules: {},
                        alwaysDenyRules: {},
                        alwaysAskRules: {},
                        isBypassPermissionsModeAvailable: !1
                    },
                    tools: []
                });
                I(D)
            } catch {
                I("Failed to load description")
            }
        }
        K()
    }, [A]), D3.default.createElement(j, {
        flexDirection: "column"
    }, D3.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, D3.default.createElement(j, {
        marginBottom: 1
    }, D3.default.createElement($, {
        bold: !0
    }, W, D3.default.createElement($, {
        dimColor: !0
    }, " (", Q.name, ")"), X && D3.default.createElement($, {
        color: "success"
    }, " [read-only]"), F && D3.default.createElement($, {
        color: "error"
    }, " [destructive]"), V && D3.default.createElement($, {
        dimColor: !0
    }, " [open-world]"))), D3.default.createElement(j, {
        flexDirection: "column"
    }, D3.default.createElement(j, null, D3.default.createElement($, {
        bold: !0
    }, "Tool name: "), D3.default.createElement($, {
        dimColor: !0
    }, Y)), D3.default.createElement(j, null, D3.default.createElement($, {
        bold: !0
    }, "Full name: "), D3.default.createElement($, {
        dimColor: !0
    }, A.name)), Z && D3.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, D3.default.createElement($, {
        bold: !0
    }, "Description:"), D3.default.createElement($, {
        wrap: "wrap"
    }, Z)), A.inputJSONSchema && A.inputJSONSchema.properties && Object.keys(A.inputJSONSchema.properties).length > 0 && D3.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, D3.default.createElement($, {
        bold: !0
    }, "Parameters:"), D3.default.createElement(j, {
        marginLeft: 2,
        flexDirection: "column"
    }, Object.entries(A.inputJSONSchema.properties).map(([K, D]) => {
        let C = A.inputJSONSchema?.required?.includes(K);
        return D3.default.createElement($, {
            key: K
        }, "• ", K, C && D3.default.createElement($, {
            dimColor: !0
        }, " (required)"), ":", " ", D3.default.createElement($, {
            dimColor: !0
        }, typeof D === "object" && D && "type" in D ? String(D.type) : "unknown"), typeof D === "object" && D && "description" in D && D3.default.createElement($, {
            dimColor: !0
        }, " ", "- ", String(D.description)))
    }))))), D3.default.createElement(j, {
        marginLeft: 3
    }, D3.default.createElement($, {
        dimColor: !0
    }, G.pending ? D3.default.createElement(D3.default.Fragment, null, "Press ", G.keyName, " again to exit") : D3.default.createElement(D3.default.Fragment, null, "Esc to go back"))))
}
var D3;
var gF0 = L(() => {
    hA();
    hA();
    c9();
    xX();
    D3 = GA(VA(), 1)
});

function uF0({
    onComplete: A
}) {
    let [Q] = _Q(), B = Q.mcp.clients, [G, Z] = kO.default.useState({
        type: "list"
    }), [I, Y] = kO.default.useState([]), J = kO.default.useMemo(() => B.filter((W) => W.name !== "ide").sort((W, X) => W.name.localeCompare(X.name)), [B]);