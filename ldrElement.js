const arr = [ 16, 17, 4, 3, 5, 2 ];

function ldrElement(arr){
    let result = []
    let n = arr.length;
    let rightMost = arr[n-1];
        result.push(rightMost)
    for(let i=n-2; i>=0; i--){
        if(arr[i]>=rightMost){
            rightMost = arr[i]
            result.push(rightMost)
        }
    }
    result.reverse('');
    return result
}

const result = ldrElement(arr)
console.log(result);