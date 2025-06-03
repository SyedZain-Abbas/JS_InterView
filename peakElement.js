function peakElement(arr){
    let n = arr.length;

    for(let i = 0; i<n; i++){
        let left = true;
        let right = true;

        if(i>0 && arr[i]<=arr[i+1])
            left =false
        
        if(i<n-1 && arr[i] <= arr[i+1])
            right = false

        if (right && left) return i
    }
}

let arr = [1, 2, 4, 5, 7, 8, 3];
console.log(peakElement(arr));