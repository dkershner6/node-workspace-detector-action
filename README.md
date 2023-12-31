# Node / NPM Workspace Detector GitHub Action

GitHub Action to automatically detect the parent-most directory that contains a Node or NPM Project, and return the result in outputs.

Uses [find-package-json](https://www.npmjs.com/package/find-package-json)

## Usage

### Inputs

None

### Outputs

| key | default | description |
|-----|---------|-------------|
| workspace | N/A | The parent-most path where a package.json exists |

### Example Workflow

```yaml
on: pull_request

jobs:
  test-coverage:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Find Node Workspace
        id: node-workspace
        uses: dkershner6/node-workspace-detector-action@v2

      - name: Use NPM Token with organization read access
        uses: dkershner6/use-npm-token-action@v2
        with:
          token: "${{ secrets.NPMJS_READ }}"
          workspace: ${{ steps.node-workspace.outputs.workspace }}
      
```

## Contributing

All contributions are welcome, please open an issue or pull request.

To use this repository:
1. `npm i -g pnpm` (if don't have pnpm installed)
2. `pnpm i`
3. `npx projen` (this will ensure everything is setup correctly, and you can run this command at any time)
4. Good to make your changes!
5. You can run `npx projen build` at any time to build the project.
