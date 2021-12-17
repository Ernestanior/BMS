const { override, fixBabelImports } = require("customize-cra");
const path = require("path");

module.exports = override(
  config => {
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src")
    };
    return config;
  },
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
);
