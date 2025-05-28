let arr = [ "geeks", "for", "geeks", "a", "portal", "to", "learn", "can", "be", "computer", "science", "zoom", "yup", "fire", "in", "be", "data", "geeks" ];

function frequenEle(arr){
    let freq = 0;
    let res = ""

    for(let i = 0; i<arr.length; i++){
        let count = 0;
        for(let j=i+1; j<arr.length; j++){
            if(JSON.stringify(arr[j]) === JSON.stringify(arr[i])){
                count++
            }
        }

        if(count >= freq){
            freq =count;
            res = arr[i]
        }
    }
  console.log(freq);
  console.log(res);
}

frequenEle(arr)