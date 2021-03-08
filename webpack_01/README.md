##配置IgnorePlugin插件，忽略模块中的文件，moment/locale是语言包，很大，可以忽略此文件夹
new webpack.IgnorePlugin(/\.\/locale/,/moment$/)


optimization:{
    minimizer: mode=="production":[ //mode=production 环境下 webpack会默认开启压缩，所以这个配置可以不用手动配置
        new TerserWebpackPlugin({
            parallel:true, //开启多进程并行压缩js,TerserWebpackPlugin支持压缩es6，其他的angulay 不支持
            cache:true
        }),
        new OptimizeCssAssetsWebpackPlugin() //开启压缩css
    ]:[]
}


输出各个模块所消耗的时间

const speedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smv = new speedMeasureWebpackPlugin();

module.exports = smv.warp({
    entry:xxx,
    .....
})


分析各个模块大小的插件
bundle-analyzer-plugin