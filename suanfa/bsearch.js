// 二分查找
let arr = [1,2,3,4,6,7,8,9,10]
//8
function bsearch(A,x){
    let l = 0;
    let r= A.length-1;
    let g;
    while(l<=r){
        g = Math.floor((l+r)/2); //5
        // console.log(g)
        if(A[g] == x) return g
        if(A[g]<x) l= g+1 //猜的值如果比要查找的值小的话继续向右猜，左边的都不要了，下一轮左边界的值要  g+1
        else r = g-1 //猜的值如果比要查找的值大的话继续向左猜，右边的值都不要了
    }
    return -1
}
/**
 *   l  r  g
 *   0  10  5
 *   
 */
console.log(bsearch(arr,6))