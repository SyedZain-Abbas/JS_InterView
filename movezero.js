const arr = [1,5,6,40,6,0,4,0,3,6,0,5,87]
//const n = arr.sort((a,b)=>b-a)
//console.log(n)


for(let i = 0; i<arr.length; i++){
   
    if(arr[i] === 0){
      arr.splice(i,1);
      arr.push(0)
     
       // nArr.push(arr[i])  
     /*   let nArr = []
       let x = arr[i]
       nArr.push(x);
       console.log(nArr);*/
    }
    
}

console.log(arr)