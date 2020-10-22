
import { generate } from "./generate";
import { parseHTML } from "./parse";







export function compileToFunctions(template) {
    //html 转换成  render函数
    //1.将html 转成成“ast”语法树  可以用ast 树来描述语言本身 html js
    //2.通过这棵树重新生成代码
    //虚拟dom是用对象来描述节点
    let ast = parseHTML(template)
    let code = generate(ast);

    //new Function 将字符串变成函数，并且用with包裹，调用render函数时就可以 定制with取值作用域  this（实例）
    let render = new Function(`with(this){return ${code}}`)
    return render;
}

// var obj ={a:1,b:2}
// with(obj){
//     console.log(a,b) a=1 b=2
// }