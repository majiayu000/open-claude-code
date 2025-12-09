# Claude Code 模块依赖关系

本文档展示各模块之间的依赖关系和工具使用情况。

## 工具使用统计

| 模块 | 使用的工具 | API调用 |
|------|-----------|---------|
| agents/agents_004.js | WEB_FETCH_TOOL  |  |
| agents/agents_007.js |  | OAuth |
| agents/agents_009.js | TASK_TOOL  |  |
| agents/agents_011.js | ASK_USER_QUESTION_TOOL  |  |
| agents/agents_012.js | EDIT_TOOL  | OAuth |
| agents/agents_013.js |  | OAuth |
| api/api_003.js |  | OAuth |
| api/api_015.js |  | Messages API |
| api/api_021.js |  | Messages API |
| api/api_022.js |  | Messages API, OAuth |
| api/api_025.js |  | OAuth |
| api/api_028.js | READ_TOOL  | OAuth |
| auth/auth_001.js |  | OAuth |
| auth/auth_002.js |  | OAuth |
| auth/auth_009.js |  | OAuth |
| auth/auth_015.js |  | OAuth |
| auth/auth_021.js |  | OAuth |
| auth/auth_029.js |  | OAuth |
| auth/auth_044.js |  | OAuth |
| auth/auth_045.js |  | OAuth |
| auth/auth_048.js |  | OAuth |
| auth/auth_049.js |  | OAuth |
| auth/auth_050.js |  | OAuth |
| auth/auth_051.js |  | OAuth |
| auth/auth_053.js |  | OAuth |
| auth/auth_054.js |  | OAuth |
| auth/auth_055.js |  | OAuth |
| auth/auth_058.js | EDIT_TOOL  |  |
| commands/commands_001.js |  | OAuth |
| commands/commands_002.js |  | OAuth |
| commands/commands_003.js |  | OAuth |
| commands/commands_004.js |  | OAuth |
| git/git_014.js | TASK_TOOL  |  |
| mcp/mcp_005.js |  | OAuth |
| mcp/mcp_011.js |  | OAuth |
| mcp/mcp_013.js |  | OAuth |
| mcp/mcp_018.js | BASH_TOOL , TASK_TOOL  |  |
| mcp/mcp_019.js |  | OAuth |
| mcp/mcp_022.js | ENTER_PLAN_MODE_TOOL , TASK_TOOL , ASK_USER_QUESTION_TOOL , KILL_SHELL_TOOL , BASH_TOOL  |  |
| mcp/mcp_024.js |  | OAuth |
| mcp/mcp_025.js |  | OAuth |
| mcp/mcp_027.js | EDIT_TOOL , READ_TOOL  | OAuth |
| prompts/prompts_003.js | BASH_TOOL , GLOB_TOOL , GREP_TOOL , READ_TOOL , EDIT_TOOL , WRITE_TOOL , TASK_TOOL  |  |
| prompts/prompts_004.js | BASH_TOOL  | Messages API |
| prompts/prompts_006.js |  | Sessions API, OAuth |
| prompts/prompts_007.js |  | Sessions API, OAuth |
| prompts/prompts_008.js | READ_TOOL , GREP_TOOL , BASH_TOOL  |  |
| prompts/prompts_010.js | BASH_TOOL  | OAuth |
| telemetry/telemetry_014.js | EDIT_TOOL , NOTEBOOK_EDIT_TOOL  |  |
| tools/tools_001.js | TASK_TOOL  |  |
| tools/tools_002.js | TASK_TOOL  |  |
| tools/tools_003.js |  | OAuth |
| tools/tools_004.js | BASH_TOOL  |  |
| tools/tools_005.js | WEB_FETCH_TOOL , EDIT_TOOL , READ_TOOL , BASH_TOOL  |  |
| tools/tools_006.js | GLOB_TOOL , TASK_TOOL , GREP_TOOL , BASH_TOOL , WRITE_TOOL , READ_TOOL , NOTEBOOK_EDIT_TOOL , WEB_SEARCH_TOOL , WEB_FETCH_TOOL , EDIT_TOOL , TODO_WRITE_TOOL  |  |
| tools/tools_007.js | READ_TOOL , BASH_TOOL  |  |
| tools/tools_008.js | GREP_TOOL , BASH_TOOL  |  |
| tools/tools_009.js |  | OAuth |
| tools/tools_010.js | READ_TOOL , BASH_TOOL , GREP_TOOL , GLOB_TOOL , WEB_SEARCH_TOOL , WEB_FETCH_TOOL , EDIT_TOOL , WRITE_TOOL  |  |
| tools/tools_011.js | WRITE_TOOL , GREP_TOOL , GLOB_TOOL , TASK_TOOL  |  |
| tools/tools_012.js | SKILL_TOOL  |  |
| tools/tools_013.js | READ_TOOL , EDIT_TOOL , WRITE_TOOL , BASH_TOOL , TASK_TOOL , GLOB_TOOL , GREP_TOOL , NOTEBOOK_EDIT_TOOL  |  |
| tools/tools_016.js | WEB_FETCH_TOOL , ASK_USER_QUESTION_TOOL  |  |
| tools/tools_017.js | ASK_USER_QUESTION_TOOL , ENTER_PLAN_MODE_TOOL , SKILL_TOOL , SLASH_COMMAND_TOOL  |  |
| tools/tools_019.js | TASK_TOOL , KILL_SHELL_TOOL , WEB_SEARCH_TOOL  |  |
| tools/tools_020.js | BASH_TOOL  |  |
| tools/tools_021.js | SKILL_TOOL , TASK_TOOL , BASH_TOOL , ASK_USER_QUESTION_TOOL , WEB_FETCH_TOOL , READ_TOOL , EDIT_TOOL , WRITE_TOOL , GLOB_TOOL , GREP_TOOL  |  |
| tools/tools_022.js | BASH_TOOL  |  |
| tools/tools_025.js | READ_TOOL , WRITE_TOOL  |  |
