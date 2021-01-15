let num =10;

let p = new Promise((resolve,reject)=>{
resolve(10);
});

p.then((res)=>{
    res=res+5;
    console.log(res);
})  //10
console.log( p); //Promise { 10 }