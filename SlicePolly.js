const animals =["ant","bison","camel","duck","elephant"];

Array.prototype.mySlice = function (start,end){
    if(start === undefined) {
        start = 0;
    } else if (start < 0){
         const newIdx = this.length + start;
         start = Math.max(newIdx,0);
    } else{
        start = Math.min(start,this.length);
    }

    if(end === undefined){
        end = this.length;
    }else if (end < 0){
        const newIdx = this.length + end;
        end = Math.max(newIdx,0);
    }else{
        end = Math.min(end,this.length);
    }
const result = [];

    for(let i=start;i<end;i++){
        const v = this[i];
        result.push(v);
    }

return result;
}

console.log(animals.mySlice(2,4));
console.log(animals.slice(2,4));