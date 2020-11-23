const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
// let obj = {};
// let arr2 =[]
// let typeArr =[]
// for(let i=0;i<arr.length;i++){
//     let item = arr[i]
//     typeArr.push(typeof item)
//     // console.log(typeArr)
    
//     if(obj[item]==null && (typeof item === typeof obj[item])){
//         arr2.push(item)
//         obj[item] = true;

//     }
// }
// console.log(arr2)

// function un(arr){
//     return Array.from(new Set(arr))
// }
// const res = un(arr)
// console.log(res)
// console.log(Array.from(new Set(arr)))


let newarr = arr.reduce(function(pre,cur){
    return pre.includes(cur)  ? pre :pre.concat(cur)
},[])
console.log(newarr)