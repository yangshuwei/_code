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


如果再低版本浏览器中使用es6语法不被支持时，需要引入polyfill  可以直接在模块中全量引入 "babel-polyfill"  但是这样打包出的文件很大
所以可以借助页面引入 <script src="polyfill.io/v3/polyfill.min.js" /> 按需加载需要的polyfill
polyfill.io 会根据user-agent 中浏览器的信息 返回需要的polyfill



purgecss-webpack-plugin mini-css-extract-plugin  css-loader glob  
提取css为单独文件，并且去除没有用到的css


多页面应用 代码分割

1.入口点分割：
entry: {
        index: "./src/index.js",
        login: "./src/login.js"
}
如果入口 chunks 之间包含重复的模块(lodash)，那些重复模块都会被引入到各个 bundle 中
不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码

2.动态导入和懒加载
    用户当前需要用什么功能就只加载这个功能对应的代码，也就是所谓的按需加载 在给单页应用做按需加载优化时
    一般采用以下原则：
        对网站功能进行划分，每一类一个chunk
        对于首次打开页面需要的功能直接加载，尽快展示给用户,某些依赖大量代码的功能点可以按需加载
        被分割出去的代码需要一个按需加载的时机
    module.exports = "hello"; //hello.js
    document.querySelector('#clickBtn').addEventListener('click',() => {
    import('./hello').then(result => { //index.js
            console.log(result.default);
        });
    });

entry: {
    page1: "./src/page1.js",
    page2: "./src/page2.js",
    page3: "./src/page3.js",
  },
 optimization: {
  splitChunks: {
      chunks: "all", //默认作用于异步chunk，值为all/initial/async
      minSize: 0, //默认值是30kb,代码块的最小尺寸
      minChunks: 1, //被多少模块共享,在分割之前模块的被引用次数
      maxAsyncRequests: 3, //限制异步模块内部的并行最大请求数的，说白了你可以理解为是每个import()它里面的最大并行请求数量
      maxInitialRequests: 5, //限制入口的拆分数量
      name: true, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
      automaticNameDelimiter: "~", //默认webpack将会使用入口名和代码块的名称生成命名,比如 'vendors~main.js'
      cacheGroups: {
        //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
        vendors: {
          chunks: "all",
          test: /node_modules/, //条件
          priority: -10, ///优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中,为了能够让自定义缓存组有更高的优先级(默认0),默认缓存组的priority属性为负值.
        },
        default: {
          chunks: "all",
          minSize: 0, //最小提取字节数
          minChunks: 2, //最少被几个chunk引用
          priority: -20,
          reuseExistingChunk: false
        }
      },
      runtimeChunk:true
    },

开启 Scope Hoisting 作用域提升 
    export default 'hello'

    import str from './hello'
    console.log(str)
打包后：
    "./src/index.js":
(function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
console.log('hello');
 })

 利用缓存 
 Babel在转义js文件过程中消耗性能较高，将babel-loader执行的结果缓存起来，当重新打包构建时会尝试读取缓存，从而提高打包构建速度、降低消耗

    {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: "babel-loader",
      options: {
        cacheDirectory: true
      }
    }]
  },

  cache-loader
    在一些性能开销较大的 loader 之前添加此 loader,以将结果缓存到磁盘里
    存和读取这些缓存文件会有一些时间开销,所以请只对性能开销较大的 loader 使用此 loader
    module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'cache-loader',
          ...loaders
        ],
        include: path.resolve('src')
      }
    ]
  }

  hard-source-webpack-plugin  为模块提供了中间缓存,缓存默认的存放路径是 node_modules/.cache/hard-source。
  首次构建时间并不会有太大的变化，但是从第二次开始，构建时间大约可以减少 80%左右

  plugins:[
      new HardSourceWebpackPlugin()
  ]
