module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Life-in-SJTU/" : "/",
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "蛤交指南",
    themeColor: "#5b145c",
    workboxOptions: {
      skipWaiting: true
    }
  }
};
