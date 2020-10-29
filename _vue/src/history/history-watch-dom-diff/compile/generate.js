// 编写<div id="app" style="fontSize:12px;color:red"> hello {{name}} word {{msg}}<span>hello</span></div>

// 结果:render(){
//    return _c('div',{id:'app',style:{color:'red'}},_v('hello'+_s(name)),_c('span',null,_v('hello')))
//}
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
function genProps(attrs) {
    let str = '';
    for (let i = 0; i < attrs.length; i++) {
       let attr = attrs[i];
        if (attr.name === 'style') {  //style="fontSize:12px;color:red"  需要转换成  style:{color:red,fontSize:12px}
            let obj = {}
            attr.value.split(';').forEach(item => { //item = >fontSize:12px   color:red
                let [key, value] = item.split(':');// [color,red] [fontSze,12px]
                obj[key] = value;
                 ////{color: "red", fontSize: "12px"}
            });
            attr.value = obj;
        }
        str += `${attr.name}:${JSON.stringify(attr.value)},`;
    }
    return `{${str.slice(0, -1)}}`
}
function gen(node) {
    if (node.type == 1) { //如果儿子是标签的话 递归调用generate 继续解析
        return generate(node)
    } else { 
        //儿子是文本  
        let text = node.text; 
        if(!defaultTagRE.test(text)){
            return `_v(${JSON.stringify(text)})` //纯文本   不带{{}}
        }
        //hello {{name}} word {{msg}}
        let lastIndex = defaultTagRE.lastIndex = 0;
        let tokens =[];
        let index,match;
        while(match = defaultTagRE.exec(text)){
            //  console.log(match) //匹配道的结果  遇到{{}} 算一个结果 => hello {{name}}
            // console.log(lastIndex) 初始值为0
            index = match.index; //匹配的长度 hello长度为5
            if(index>lastIndex){
                tokens.push(JSON.stringify(text.slice(lastIndex,index))) //进行截取操作
                
            }
            tokens.push(`_s(${match[1].trim()})`) //把{{name}}中name 以_s(name)  形式存到数组中
            lastIndex = index + match[0].length;
            
         }
         if(lastIndex < text.length){
            tokens.push(JSON.stringify(text.slice(lastIndex)));
        }
        return `_v(${tokens.join('+')})`
    }
}
function genChildren(el) {
    const children = el.children;
    if (children) {
        return children.map(child => {  //将所有转换后的儿子用 ， 拼接起来
            return gen(child)
        }).join(',')
    }

}
export function generate(el) {
    let children = genChildren(el);// 儿子的生成
    let code = `_c('${el.tag}',${el.attrs.length ? `${genProps(el.attrs)}` : 'undefined'
        }${children ? `,${children}` : ''
        })`;
    return code
}