# Node / NPM Workspace Detector GitHub Action

GitHub Action to automatically detect the parent-most directory that contains a Node or NPM Project, and return the result in outputs.

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
        uses: dkershner6/node-workspace-detector-action@v1

      - name: Use NPM Token with organization read access
        uses: dkershner6/use-npm-token-action@v1
        with:
          token: "${{ secrets.NPMJS_READ }}"
          workspace: ${{ steps.node-workspace.outputs.workspace }}
      
```
