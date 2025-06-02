const arr = [-3,-1,3,-2,5,-5];

function maxSubArr(arr){
    let res = arr[0]
    let maxEnding = arr[0]

    for(let i =1; i<arr.length; i++){
        maxEnding = Math.max(maxEnding + arr[i], arr[i])
        res = Math.max(maxEnding,res)
    }
    return res
}

console.log(maxSubArr(arr));