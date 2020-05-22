const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Life-in-SJTU/" : "/",
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "蛤交指南",
    themeColor: "#5b145c",
    workboxOptions: {
      skipWaiting: true
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            warnings: false,
            compress: {
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ["console.log"]
            }
          }
        })
      ]
    }
  }
};
