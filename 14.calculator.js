async function add(n1=2,n2=1){
    return n1+n2
}

async function sub(n1=2,n2=1){
    return n1-n2;
}
async function mul(n1=2,n2=1){
    return n1*n2;
}


module.exports={
    add:add,
    mul:mul
}