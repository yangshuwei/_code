const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`; // 标签名
// ?:匹配不捕获
const qnameCapture = `((?:${ncname}\\:)?${ncname})`; // </my:xx>
const startTagOpen = new RegExp(`^<${qnameCapture}`); // 标签开头的正则 捕获的内容是标签名
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`); // 匹配标签结尾的 </div>
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // 匹配属性的    aaa="aaa"  a='aaa'   a=aaa
const startTagClose = /^\s*(\/?)>/; // 匹配标签结束的 >    >   <div></div>  <br/>
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;







{/* <div id="app">hello
        <li>{{name}}</li>
    </div> */}
export function parseHTML(html) {
    function createASTElement(tagName,attrs){
        return {
            tag:tagName,
            type:1,
            attrs,
            children:[],
            parent:null
        }
    }
    let root;
    let currentParent;
    let stack = [];
    function start(tagName,attrs){
        let element = createASTElement(tagName,attrs)//
        if(!root){
            root = element;
        }
        currentParent = element;//当前解析的元素保存起来
        stack.push(element); //将生成的ast元素依次放入栈中
        // console.log(stack) //[div,li] 这样做的目的是确保 标签嵌套符合语法，闭合位置正确   例：<div> <span><p></span></p>  </div> 这种是不合理的dom结构
    }
    function end(tagName){
        let element = stack.pop(); //取出li标签
        currentParent = stack[stack.length-1] //div 作为li的父标签
        if(currentParent){
            element.parent= currentParent
            currentParent.children.push(element)
        }
        // console.log(tagName,'--结束标签--')
    }
    function chars(text){
        text = text.trim();
        if(text){
            currentParent.children.push({
                type:3,
                text
            })
        }
        // console.log(text,'--文本标签——')
    }
    function advance(n) { //截取字符串，匹配到的字符串删除掉，剩下的自出穿继续匹配，直到html为空
        html = html.substring(n)
    }
    

    

    while (html) { //只要html不为空字符串就一直解析
        let textEnd = html.indexOf('<');
        if (textEnd == 0) {
            //肯定是标签  不是文本
            //开始解析开始标签
            const startTagMatch = parseStartTag();//开始标签匹配的结果，处理开始
            if(startTagMatch){
                start(startTagMatch.tagName,startTagMatch.attrs)
                continue;
            }
            const endTagMatch = html.match(endTag);
            if(endTagMatch){ //处理结束标签 </div> </li>
                advance(endTagMatch[0].length)
                end(endTagMatch[1])
                continue;
            }
        }
      
        let text;
        if(textEnd>0){ //说明是文本
             text = html.substring(0,textEnd);
        }
        if(text){
            advance(text.length);
            chars(text)
        }
        // break;
    }


    function parseStartTag() { //拿到所有的开始标签  <div> <li> <li>
        const start = html.match(startTagOpen);
        if (start) {
            let match = {
                tagName: start[1],
                attrs: []
            }
            advance(start[0].length) //删除开始标签
            //如果标签直接闭合了 <div>  说明没有属性
            let end, attr;
            //不是结束标签，并且有属性
            while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
                match.attrs.push({ name: attr[1], value: attr[3] || attr[4] || attr[5] })
                advance(attr[0].length);
            }
            if (end) { //删除匹配到的结束标签 ">"
                advance(end[0].length)
                // console.log(match)
                return match;

            }
        }
    }
    return root;
}