# Claude Code Variable Dictionary

This document maps minified variable names to their likely meanings.

## Tool Names
| Minified | Meaning |
|----------|---------|
| D9 | BASH_TOOL_NAME |
| g5 | READ_TOOL_NAME |
| bX | WRITE_TOOL_NAME |
| R5 | EDIT_TOOL_NAME |
| CD | GLOB_TOOL_NAME |
| uY | GREP_TOOL_NAME |
| s8 | TASK_TOOL_NAME |
| vX | WEB_FETCH_TOOL_NAME |
| O_ | WEB_SEARCH_TOOL_NAME |
| gGB | TODO_WRITE_TOOL_NAME |

## Common Patterns
| Pattern | Meaning |
|---------|---------|
| L(() => {...}) | Lazy-loaded module |
| U((exports, module) => {...}) | CommonJS module wrapper |
| pG(A, Q) | ESM export binding |
| GA(A, Q, B) | ESM import handler |
| xz(A, Q) | Native method lookup |

## Key Variables (from context)
| Variable | Likely Purpose |
|----------|---------------|
| qGB | System prompt base |
| WY9 | Agent system prompt |
| HX | Global object reference |
| HV | Symbol reference |
| Ks | Map implementation |
| _u | Array implementation |

## How to Read the Code

1. Look for string constants near a variable - they often hint at its purpose
2. Check function parameters - the first param is usually the main input
3. Look for `.prototype.` patterns to identify classes
4. Search for familiar API patterns like `/v1/messages`
5. Use grep to find where a variable is defined vs used
