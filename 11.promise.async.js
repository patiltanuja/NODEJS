//promise is implicit
async function helloAsync1(){
    //resolve("Hello") replacement to this line is 5th line
    return "Hello"
}
async function helloAsync2(){
    return "world";
}


helloAsync1().then((res)=>{
    console.log(res)
});

helloAsync2().then((res)=>{
    console.log(res)
});


/* promise chaning :: order will be maintain their*/
helloAsync1().then((res)=>{
    console.log(res);

    return helloAsync2();
}).then((res)=>{
    console.log(res);
});