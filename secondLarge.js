const arr = [12, 35, 1, 10, 34, 1];

function secLargest(arr){
    let n = arr.length;
    let max = -1;
    let secMax = -1;
    for(let i = 0; i<n; i++){
        if(arr[i]>max){
            secMax = max
            max = arr[i]
        }else if(arr[i] < max && arr[i] > secMax){
            secMax = arr[i]
        }
    }
    return secMax;
}

const res =  secLargest(arr);
console.log(res);