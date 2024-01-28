module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/scss/main.scss";`
      },
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
}