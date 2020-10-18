import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
export default{
    input:"./src/index.js",
    output:{
        format:'umd',
        name:'Vue',
        file:'dist/umd/vue.js',
        sourcemap:true,
    },
    pugins:[
        babel({
            exclude:'node_modules/**'
        }),
        serve({
            port:3000,
            contentBase:'',
            openPage:"./index.html"
        })
    ]
}