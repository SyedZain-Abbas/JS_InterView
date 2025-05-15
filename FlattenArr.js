const arr = [1,2,[3,4,[5,6,[7,8,9,[10]]]]]
console.log(arr.flat(Infinity))

//console.log(arr.flat(100))
console.log(arr.toString().split(",").map(Number))


function flattenArr(x){
    const newArr = [];
    for(let i =0; i<x.length; i++){
        if(Array.isArray(x[i])){
            newArr.push(...flattenArr(x[i]))
        }else{
        newArr.push(x[i])
    }
       
    }
    return newArr;
}
console.log(flattenArr(arr))
