#!/usr/bin/env bash
npm version patch
npm run build
cd build
npm publish --registry="https://registry.npmjs.org/"
cd ..
git push origin master --tag
