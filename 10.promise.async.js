function iamalsopromise(){
    //Explicitly
return new Promise((resolve,reject)=>{});
}

//Promise is implicit
async function impromiseFunction(){
    //logic
}

let p =impromiseFunction()
console.log(p)