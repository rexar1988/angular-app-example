// @ts-check
const tsEslint = require("typescript-eslint");
const eslintPluginConfigs = require("./eslint/plugin-config");

module.exports = tsEslint.config(
  eslintPluginConfigs.angularConfig,
  eslintPluginConfigs.angularTemplateConfig,
  eslintPluginConfigs.boundaryConfig,
  eslintPluginConfigs.eslintConfig,
  eslintPluginConfigs.importConfig,
  eslintPluginConfigs.jasmineConfig,
  ...eslintPluginConfigs.ngrxConfig,
  eslintPluginConfigs.perfectionistConfig,
  eslintPluginConfigs.stylisticConfig,
  ...eslintPluginConfigs.typescriptConfig,
);
