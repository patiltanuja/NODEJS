function impromiseFunction(p1){
    return new Promise((resolve,reject)=>{
        if(p1==1){
            resolve("success");
        }else{
            reject("error");
        }
    });
}
let p = impromiseFunction(1);
p.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});
