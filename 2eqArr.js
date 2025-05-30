const a = [3, 5, 2, 5, 2];
const b = [2, 3, 5, 5, 2];

function checkEqual(a,b){
    if (a.length !== b.length) return false;

    a.sort();
    b.sort();
    for(let i=0; i<a.length; i++){
        if(a[i]!==b[i])
            return false;
    }
    return true
}

console.log(checkEqual(a,b) ? "true" : "false");