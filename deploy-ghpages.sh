#!/bin/bash
rm -rf build || exit 0;
mkdir build;
npm start -- -p;
cp CNAME build/CNAME;
( cd build
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@masterofpoppets.com"
 git add .
 git commit -m "Deployed to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)