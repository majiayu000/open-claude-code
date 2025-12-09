# Claude Code Decompiled Source

Version: 2.0.57
Date: 2025-12-08

## Statistics

- **Total Lines:** 450,258
- **Total Files:** 302
- **Chunk Size:** ~1500 lines

## Directory Structure

| Category | Files | Lines | Description |
|----------|-------|-------|-------------|
| auth | 61 | 91,245 | OAuth and authentication |
| ui | 53 | 79,314 | React/Ink UI components |
| git | 34 | 50,928 | Git operations |
| api | 30 | 44,656 | API clients (Anthropic, Bedrock, Vertex) |
| mcp | 29 | 41,888 | Model Context Protocol implementation |
| tools | 25 | 37,442 | Tool implementations (Read, Write, Bash, etc.) |
| telemetry | 14 | 20,982 | Analytics and telemetry |
| agents | 13 | 19,462 | Agent definitions and logic |
| prompts | 10 | 14,894 | System prompts and messages |
| config | 9 | 13,494 | Configuration management |
| other | 8 | 11,992 | Uncategorized code |
| commands | 8 | 11,976 | Slash commands (/help, /login, etc.) |
| lodash | 5 | 7,489 | Lodash library code |
| crypto | 1 | 1,499 | Cryptographic operations |
| process | 1 | 1,499 | Process/child process management |
| fs | 1 | 1,498 | File system operations |

## How to Navigate

1. Start with `index.js` to see the file index
2. Each category folder contains numbered files
3. Files are ordered by their position in the original code
4. Use grep/search to find specific functionality

## Key Files

- `tools/` - Look here for tool implementations
- `agents/` - Agent system code
- `commands/` - CLI commands
- `api/` - API integration code
- `prompts/` - System prompts and templates

## Note

This code is minified/bundled by esbuild. Variable names are shortened
and the code structure is optimized for size, not readability.
