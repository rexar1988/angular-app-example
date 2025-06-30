const config = require('./config.js');

function createLibPatternPaths(libNames = []) {
  return libNames.map(libName => `${config.projectsFolder}/${libName}/*/index.ts`);
}

function createExternalLibPaths(libNames = []) {
  return libNames.flatMap(item => [item, `${item}/*`]);
}

module.exports = {
  createLibPatternPaths,
  createExternalLibPaths,
}
