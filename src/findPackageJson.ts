import { setFailed, info } from "@actions/core";
import finder from "find-package-json";

const findPackageJson = (): string | undefined => {
    const originalPath = process.cwd();
    const resultIterator = finder(originalPath);
    const firstResult = resultIterator.next();
    const resultFilePath = firstResult.filename;

    if (!resultFilePath) {
        setFailed("No package.json found");
        return;
    }

    info(`Found at ${resultFilePath}`);

    return resultFilePath
        .replace(originalPath, ".")
        .replace("package.json", "");
};

export default findPackageJson;
