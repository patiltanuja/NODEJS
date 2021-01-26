async function add(n1,n2){
    return n1+n2;
}
async function mul(n1,n2){
    return n1*n2;
}
async function div(n1,n2){
    return n1/n2;
}
//main function which will use above function
async function main(){
   let output = await add(10,20);
   console.log("add",output);

   let moutput = await mul(100,6);
   console.log("mul",moutput);
}
main();
