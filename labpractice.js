// function demo(a,b){
//      a=a*a;
//      b=b*b;
//     console.log(a,b);
// }
// let num1 = 14
// let num2 = 16;
// console.log(num1,num2);
// demo(num1,num2)
// console.log(num1,num2);

// function demo1(a,b){
//     this.id=id;
//     this.fname=fname;
// }

// let Sport = {
//     sName: "Cricket",
//     cName: "NBA",
//     nMatches: 20,
//     basketball: {
//         pName: "james",
//         email: "james@nba.ac.in",
//     }
// }
// console.log(Sport.sName);
// console.log(Sport);
// console.log(Sport.basketball.pName);

// //call by value
// function demo(a,b){
//      a=a*a;
//      b=b*b;
//     console.log(a,b);
// }
// let num1 = 14
// let num2 = 16;
// console.log(num1,num2);
// demo(num1,num2)
// console.log(num1,num2);


// /*pass by reference*/
// function demo1(a){
//     a.sName="sport basketball";
//     a.pName="James Harden";
// }
// let Game={
//     sName:"basketball",
//     pName:"James",
// }

// console.log(Game);
// demo1(Game);
// console.log(Game);

// //--------setTimeout()
// console.log("4")


// setTimeout(()=>console.log("20"),0)
// setTimeout(()=>console.log("20"),0)
// Promise.resolve().then(()=>console.log("40"))

// //------setTimeout()
// let task=()=>{
//     console.log("after 5 second")

// }
// setTimeout(task,5000);

// let task1=()=>{
//     console.log("after 2 second")
// }
// setTimeout(task1,2000);

// let task2=()=>{
//     console.log("after 2 second")
// }
// setTimeout(task2,2000);

// let basket = new Promise((reject,resolve)=>{
//     var a=[2,"saurabh","kumar"];
//     if(a.length>0){
//         resolve();
//     }
//     else{
//         reject(); 
//     }
//     // console.log("saurabh pagal he")
//     // resolve();
//     // reject();
// });
// console.log(basket);
// basket.then(()=> console.log("resolve")).catch(()=> console.log("reject"))
// basket.catch(()=> console.log("reject"))


// function Dream(p1){
//     return new Promise((resolve,reject)=>{
//         if(p1==1)
//         {
//             console.log("RESOLVE")
//         }
//         else{
//             console.log("Saurabh kumar is select for Amazon")
//         }
//     })
// }
// Dream(2)


// async function hey(){
//     return "saurabh is Inteligent"

// }
// async function bye(){
//     return "saurabh  Harami he!!!!!!!!!1"

// }
// hey().then(()=>{console.log("I m SK live from delhi.")})
// bye().then(()=>{console.log("Chal nikal saurabh")})

// hey().then(()=>{console.log("saurabh is abnormal");
//     return bye().then(()=>{
//         console.log("call by Promise chaining")
//     })
// })

//  await


async function interesting(){
    try{
        throw  new Error("I am custom Exception")
    }
  catch(Error){
      console.log(Error)
  }
}

async function interesting2(){
    console.log("call by Promise chaining")
    return "Nothing 2"
 }


async function output(){
   try{let v1= await interesting()
   console.log(v1);
   let v2 = await interesting2()
   console.log(v2);}
   catch(e){
       throw e;
   }
}
output()

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();