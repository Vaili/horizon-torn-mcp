# horizon-torn-mcp

TypeScript MCP server that exposes Torn API v2 operations as MCP tools.

@author: Galatar [4283617] 

## What This Server Does

- Exposes Torn API v2 endpoints as MCP tools over stdio
- Generates tool definitions from Torn's OpenAPI schema
- Supports local development, local packaging, and npm publishing
- Works with VS Code MCP using either workspace or global registration

## Prerequisites

- Node.js 20+
- npm
- A Torn API key

## Install From Source

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file from `.env.example` and set your Torn API key:

```env
TORN_API_KEY=your_api_key_here
TORN_BASE_URL=https://api.torn.com/v2
TORN_OPENAPI_URL=https://www.torn.com/swagger/openapi.json
TORN_REQUEST_TIMEOUT_MS=30000
```

## Build

Build always regenerates the tool list before compiling.

```bash
npm run build
```

This will:

- Fetch the latest Torn OpenAPI schema
- Regenerate `src/torn/tools/generated.ts`
- Compile the server into `dist/`

## Run Locally

Run the compiled server over stdio:

```bash
npm run start
```

For development, run directly from TypeScript:

```bash
npm run dev
```

## Create A Publishable Package

Create a local npm package artifact:

```bash
npm run artifact
```

This produces a file like:

```text
galatar-torn-mcp-<version>.tgz
```

The published package includes:

- `dist/`
- `README.md`
- `LICENSE`

## Install From npm

If you publish this package, users can install it globally:

```bash
npm install -g @galatar/torn-mcp
```

The package exposes this executable:

```text
horizon-torn-mcp
```

## Register In VS Code MCP

VS Code can register MCP servers either per workspace or globally for all workspaces.

### Option 1: Workspace Registration

Create `.vscode/mcp.json` in your project:

```json
{
   "servers": {
      "horizon-torn-mcp": {
         "type": "stdio",
         "command": "node",
         "args": ["dist/src/index.js"],
         "cwd": "${workspaceFolder}",
         "env": {
            "TORN_API_KEY": "your_api_key_here"
         }
      }
   }
}
```

Use this when the server lives inside the current repository.

### Option 2: Global Registration

Create this file in your VS Code user profile:

```text
C:/Users/<your-user>/AppData/Roaming/Code/User/mcp.json
```

Use an absolute `cwd` because `${workspaceFolder}` is not available globally:

```json
{
   "servers": {
      "horizon-torn-mcp": {
         "type": "stdio",
         "command": "node",
         "args": ["dist/src/index.js"],
         "cwd": "C:/path/to/horizon-torn-mcp",
         "env": {
            "TORN_API_KEY": "your_api_key_here"
         }
      }
   }
}
```

### Option 3: Global Registration From npm Install

If the package is installed globally with npm, VS Code can call the published executable directly:

```json
{
   "servers": {
      "horizon-torn-mcp": {
         "type": "stdio",
         "command": "horizon-torn-mcp",
         "env": {
            "TORN_API_KEY": "your_api_key_here"
         }
      }
   }
}
```

This is the cleanest setup for community users because they do not need to clone the repository.

## Reload VS Code

After adding or changing an MCP definition, reload VS Code so it restarts the server and refreshes the tool list.

Use the Command Palette and run:

```text
Developer: Reload Window
```

## Development Notes

- Regenerate tools when the Torn OpenAPI schema changes: `npm run generate`
- Tool names follow the format `horizon_torn_<operationId>`
- Required path and query parameters are enforced in tool input schemas
- Authentication uses the header `Authorization: ApiKey <TORN_API_KEY>`
