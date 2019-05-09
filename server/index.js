require("ignore-styles");
require("@babel/register")({
  babelrc: false,
  // ignore: [/\/(clientBuild|node_modules)\//],
  ignore: [/node_modules/],
  presets: [["@babel/preset-env"], "@babel/preset-react"],
  plugins: ["@babel/plugin-syntax-dynamic-import", 
    "dynamic-import-node", 
    ["@babel/plugin-transform-runtime", {
      helpers: false, 
      regenerator: true
    }]
  ]
});
require("./server");

