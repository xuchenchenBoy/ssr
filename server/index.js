require("ignore-styles");
require("@babel/register")({
  ignore: [/\/(build|node_modules)\//],
  presets: [["@babel/preset-env", { "corejs": "2", useBuiltIns: 'usage' }], "@babel/preset-react"],
  plugins: ["@babel/plugin-syntax-dynamic-import", "dynamic-import-node", "add-module-exports"]
});
require("./server");

