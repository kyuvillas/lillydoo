 module.exports = {
    assetsDir: 'assets/',
    publicPath: '/', // Base directory for dev
    css: {
      sourceMap: true,
      loaderOptions: {
        sass: {
          prependData: `@import "@/sass/abstracts/_variables.scss";
          @import "@/sass/abstracts/_mixins.scss";`
        }
      }
    }
  };