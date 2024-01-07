import { Node20GitHubActionTypescriptProject } from "dkershner6-projen-github-actions";
import { RunsUsing } from "projen-github-action-typescript";

const MAJOR_VERSION = 2;

const project = new Node20GitHubActionTypescriptProject({
    majorVersion: MAJOR_VERSION,
    defaultReleaseBranch: "main",

    devDeps: [
        "@types/find-package-json",
        "dkershner6-projen-github-actions",
        "projen-github-action-typescript",
    ],
    name: "node-workspace-detector-action",
    description:
        "GitHub Action to automatically detect the parent-most directory that contains a Node or NPM Project, and return the result in outputs.",

    actionMetadata: {
        name: "Node / NPM Workspace Detector Action",
        description:
            "Detect the parent-most directory that contains a Node or NPM Project, and return the result in outputs.",
        outputs: {
            workspace: {
                description: "The parent-most path where a package.json exists",
            },
        },
        runs: {
            using: RunsUsing.NODE_20,
            main: "dist/index.js",
        },
        branding: {
            icon: "search",
            color: "purple",
        },
    },

    deps: ["find-package-json"],

    autoApproveOptions: {
        allowedUsernames: ["dkershner6"],
    },

    sampleCode: false,
    docgen: true,
});

project.synth();
