/**
 * @since 2016-09-03 09:35
 * @author vivaxy
 */

import path from 'path';
import fse from 'fs-extra';
import glob from 'glob-promise';
import packageJSON from '../package.json';

const SOURCE_PATH = 'source';
const BUILD_PATH = 'build';
const PROJECT_BASE = path.resolve(__dirname, '..');

const files = [
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
];

const resolveBuildPath = (file) => {
    return path.resolve(PROJECT_BASE, BUILD_PATH, file);
};

const copyPackageFile = async(file) => {
    const buildPath = resolveBuildPath(file);
    const result = await new Promise((resolve) => {
        fse.copy(file, buildPath, (err) => {
                if (err) throw err;
                resolve();
            }
        );
    });
    console.log(`Copied ${file} to ${path.relative(PROJECT_BASE, buildPath)}`);
    return result;
};

const createPackageFile = async() => {
    const data = await new Promise((resolve) => {
        fse.readFile(path.resolve(PROJECT_BASE, 'package.json'), 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            resolve(data);
        });
    });
    const packageData = JSON.parse(data);

    const {
        author,
        version,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
    } = packageData;

    const minimalPackage = {
        name: packageJSON.name,
        author,
        version,
        description,
        main: './index.js',
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
    };

    return new Promise((resolve) => {
        const buildPath = path.resolve(PROJECT_BASE, BUILD_PATH, 'package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, (err) => {
            if (err) throw (err);
            console.log(`Created package.json in ${path.relative(PROJECT_BASE, buildPath)}`);
            resolve();
        });
    });
};

const copyAssetFile = async(file) => {
    const basePath = path.relative(path.resolve(PROJECT_BASE, SOURCE_PATH), file);
    const buildPath = resolveBuildPath(basePath);
    const result = await new Promise((resolve) => {
        fse.copy(file, buildPath, (err) => {
                if (err) throw err;
                resolve();
            }
        );
    });
    console.log(`Copied ${path.relative(PROJECT_BASE, file)} to ${path.relative(PROJECT_BASE, buildPath)}`);
    return result;
};

const copyLessFile = async() => {
    const lessFiles = await glob(`${SOURCE_PATH}/**/*.less`);
    lessFiles.map((lessFile) => {
        const lessFilePath = path.resolve(PROJECT_BASE, lessFile);
        return copyAssetFile(lessFilePath);

        // const distPath = resolveBuildPath(basePath);
        //
        // console.log(distPath);
        // return copyPackageFile()
    });
};

const main = async() => {
    await Promise.all(files.map((file) => copyPackageFile(file)));
    await createPackageFile();
    await copyLessFile();
};

main();
