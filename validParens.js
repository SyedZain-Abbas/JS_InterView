function balanceParens(x){
    let st = [];
    for(let i=0; i<x.length; i++){
        if(x[i] === '(' || x[i] === '{' || x[i] === '['){
            st.push(x[i])
        }else{
            if(st.length > 0 && (
                (st[st.length - 1] === '(' && x[i] === ')') ||
                (st[st.length - 1] === '{' && x[i] === '}') || 
                (st[st.length - 1] === '[' && x[i] === ']')  
            )){
                st.pop();
            } else {
                return false;
            }
        }
    }
    return st.length === 0;
}
let s = "{([)}";
console.log(balanceParens(s) ? "true" : "false");