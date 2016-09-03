/**
 * @since 2016-09-03 09:35
 * @author vivaxy
 */

import path from 'path';
import fse from 'fs-extra';
import packageJSON from '../package.json';

const files = [
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
];

const resolveBuildPath = (file) => {
    return path.resolve(__dirname, '../build/', path.basename(file));
};

const copyFile = async (file) => {
    const buildPath = resolveBuildPath(file);
    const result = await new Promise((resolve) => {
        fse.copy(file, buildPath, (err) => {
                if (err) throw err;
                resolve();
            }
        );
    });
    console.log(`Copied ${file} to ${buildPath}`);
    return result;
};

const createPackageFile = async () => {
    const data = await new Promise((resolve) => {
        fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
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
        const buildPath = path.resolve(__dirname, '../build/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, (err) => {
            if (err) throw (err);
            console.log(`Created package.json in ${buildPath}`);
            resolve();
        });
    });
};

const main = async () => {
    await Promise.all(files.map((file) => copyFile(file)));
    await createPackageFile();
};

main();
