'use strict'
/**
 * vue.config.js
 * vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。
 * 你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。
 */
module.exports = {
  // 部署应用包时的基本 URL baseUrl 从 Vue CLI 3.3 起已弃用。
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist" /*构建时输出目录文件*/,
  assetsDir: "assets" /*放置静态资源的目录*/,
  lintOnSave: false /*是否开启eslint 保存检测语法*/,
  productionSourceMap: false,
  // 开发环境下端口、地址等相关配置
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8001 // 端口
  },
  // 样式配置
  css: {
    loaderOptions: {
      // 这里的选项会传递给 css
      // css: {
      //   data: `@import '@/style/base.css';` // 基本样式
      // },
      // 这里的选项会传递给 less-loader
      sass: {
        prependData: `@import '@/assets/css/general.scss';` // 公共样式
      }
    }
  }
};
