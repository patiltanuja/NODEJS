function add(n1,n2){
    return new Promise((resolve,reject)=>{
        let total = n1+n2;
        resolve(total);
       // reject("operation failed")
    })
}

async function main(){
    let output = add(10,20);
    console.log("output",output)
}
function main1(){
    add().then((p1)=>{
        console.log("Result",output);
    })
}
main();