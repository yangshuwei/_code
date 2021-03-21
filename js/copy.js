const curryType = require('./util')

function shallowCopy(data) {
  
  if(Array.isArray(data)){
    let newArr = []
    for(let i=0;i<data.length;i++){
      newArr.push(data[i])
    }
    return newArr;
  }else{
    let newObj={}
    for(let key in data){
      newObj[key] = data[key]
    }
    return newObj
  }
  
} 

function deepCopy(source){
  const sourceType = Object.prototype.toString.call(source);
  let result = sourceType === '[object Array]' ? [] : {}
  for(let key in source){
    if (source[key] && typeof source[key] === 'object'){
      result[key] = deepCopy(source[key])
    }else{
      result[key] = source[key]
    }
    
  }
  return result
}




let arr = [1,2,undefined,[{a:1,b:2}]]
let newArr = deepCopy(arr)
console.log('newArr--',newArr)
// console.log(newArr, newArr[3] == arr[3])
let obj = {a:1,b:2,c:{a:1}}
let newObj = deepCopy(obj)
// console.log(newObj)
// console.log(newObj, obj == newObj)