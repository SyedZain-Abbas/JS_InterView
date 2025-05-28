

function countPair(arr, target){
    const freq = new Map();
    let cnt = 0;

    for(let i=0; i<arr.length; i++){
        if(freq.has(target - arr[i])){
            cnt += freq.get(target - arr[i])

            }

            freq.set(arr[i],(freq.get(arr[i]) || 0)+1)
        }
    return cnt
}

const arr  = [1,1,1,1 ]; 
let target = 2;
console.log(countPair(arr,target))