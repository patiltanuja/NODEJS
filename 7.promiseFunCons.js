let p = new Promise((resolve,reject)=>{});

//Success
p.then(()=>{});
//error
p.catch(()=>{})
//one line
p.then(()=>{}).catch(()=>{});




//Regular function
function hello(){
    //return
}

//
/*
NETWORK
DB call
Asynchronous
*/
function networkcall(){
    //tricky
    //return is not normal
    //return promise
}

let p = new Promise((resolve,reject)=>{
    /*complex logic
    */
   reject();
});
console.log(p);


p.then(()=>{
    console.log("promise resovled")
}).catch(()=>{
    console.log("promise reject")
});