// String to Nested Object

const inpStr = "a.b.c.d";

function unPack(str) {
    const strArr = str.split(".").reverse();
    let obj = {}
    let init = ""
    strArr.forEach((x) => {
       if(init || Object.keys(obj).length){
        const n = {[x]:init || obj}
        init= ""
        obj = n
       }else{
        init = x
       }
    });

    return obj
}

const result = unPack(inpStr)
console.log(result);