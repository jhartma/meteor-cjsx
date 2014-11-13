Package.describe({
  summary: "Write React Components for Meteor in Coffeescript",
  version: "0.0.1",
  name: "jhartma:cjsx",
  git: "https://github.com/jhartma/meteor-csjx.git"
});

Package.registerBuildPlugin({
  name: "compileCJSX",
  use: [
    'jhartma:react'
  ],
  sources: [
    'compile-cjsx.js'
  ],
  npmDependencies: {"coffee-react-transform": "2.0.0", "coffee-script": "1.7.1", "source-map": "0.1.32"}
});
