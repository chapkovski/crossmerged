module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/crossmarket/" : "/",
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
};
