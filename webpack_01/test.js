function main(num) {
  
  return result;
}
// console.log(main(2,3,2))

function change(num){
  let r=num.toString('2') //先转成2进制  2=》0010 3=》0011 0101
  console.log('init-',r)
  let replaceStr = r.substr(r.length - 1, 1) == 0 ? 1 : 0; //这是判断结尾是0还是1,
  console.log('replaceStr',replaceStr)
  const reg = /(0|1)$/
  r = r.replace(reg, replaceStr)//这是替换
  let result = parseInt(r,2)//这是在转回10进制
  return result
}
console.log(change(11))