// duplicate from sorted array

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const removeDuplicate = (arr) => {
    let left = 0;
    for(let i = 1; i<arr.length; i++){
        if(arr[left]  !== arr[i]){
            arr[left+1] = arr[i]
            left++;
        }
    } 

    return left + 1;
}

let count = removeDuplicate(arr)

console.log(arr, count);
console.log(arr.slice(0,count));