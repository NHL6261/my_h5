const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    // webpack 配置进行更细粒度的修改。
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]",
                include: ["./src/icons"],
            });
        // 添加别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@s", resolve("src/styles"));
    },
    lintOnSave: false,
    devServer: {
        open: true,
        proxy: {
            "/apiP": {
                // target: "http://192.168.6.110:5454", //目标主机
                target: "http://localhost:9000", //目标主机
                ws: true, //代理的WebSockets
                changeOrigin: true, //需要虚拟主机站点
                pathRewrite: {
                    "/apiP": "",
                },
            },
        },
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            scss: {
                prependData: `@import "./src/style/scss/main.scss";`,
            },
        },
    },
};