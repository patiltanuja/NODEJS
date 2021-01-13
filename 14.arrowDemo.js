//1
let sum=(p2)=>{
    let p=p2;
    console.log("Type ",typeof p);
    console.log(p());
}

sum( ()=>{
   console.log("Inner fun");
   return "EDAC";
});
//------------------------------
hello = () => "tanuja";
let h = hello();
console.log(h);

let c = () => 45;
let c1 = () => 23;


console.log(div(2.4,4));
function mul(a,b){
    return a*b;
   
}
function div(a,b){
    return a/b;
}
function add(a,b){
    return a+b;
}
console.log(div(2.4,4));
console.log(mul(3,6));
console.log(add(5.5,6));