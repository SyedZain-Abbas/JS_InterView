let a = [1, 1, 2, 2, 2, 4];
let b = [2, 2, 4, 4];

function findUnion(a,b){
    let st = new Set();

    for(let i=0; i<a.length; i++){
        st.add(a[i])
    }
    for(let i=0; i<b.length; i++){
        st.add(b[i])
    }

    let res = Array.from(st);
    res.sort((x,y)=> x-y)
    return res
}

export let res = findUnion(a,b)

console.log(res.join(" "));
