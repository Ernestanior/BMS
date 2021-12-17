const { override, fixBabelImports } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");
module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#030852", // primary color for all components
      }
    }
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  })
);
