//create object using new keyword
function Sport(){
    console.log(this);
} 



let s1=Sport();
let s = new Sport();
console.log("s1", s);
console.log("s", s);


console.log(typeof s1);
console.log(typeof s);