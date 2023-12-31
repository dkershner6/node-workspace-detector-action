import { setFailed, setOutput } from '@actions/core';
import findPackageJson from './findPackageJson';

async function run(): Promise<void> {
    try {
        const result = findPackageJson();

        setOutput('workspace', result);
    } catch (error) {
        setFailed(error.message);
    }
}

run();
