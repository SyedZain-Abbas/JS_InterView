const arr = [1,2,3,4,5,6,7,8,9];

const sum = arr.reduce((acc,next)=>{
    return acc + next;
},0)

console.log(sum);

Array.prototype.MyReduce = function (Callback, inintialValue) {
    if(typeof Callback !== "function") throw new Error ("CallBack is not Function");

    if(this === null) throw new Error ("invalid data")  ;
    
    if(!this.length && !inintialValue){
        throw new Error("Reduce of Empty aaray with no initial value")
    }

    const initValue = inintialValue ? inintialValue : this[0];
    const startIndex = inintialValue ? 0 : 1;
    let accumulator = initValue;
    for(let i = startIndex; i<this.length; i++){
        const val = this[i];
        accumulator = Callback(accumulator,val,i,this);
    }
    return accumulator;
}

let res = arr.MyReduce((acc,next,i,array) => {
    return acc + next;
},0)

console.log(res);