function sum(p1,p2){
    console.log("sum",p1,p2);
    p1=p1+1;
    p2=p2+1;
    console.log("sum",p1,p2);
    return p1+p2;
}

//primitive type
let num1=2;
let num2=4;
console.log(num1,num2)
sum(num1,num2);
console.log(num1,num2);//no change

