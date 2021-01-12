function sport1()
{
    return "hey,have you done with assignments!!!!"
}

function sport2()
{
    return 80;
}

function sport3()
{
    return function(){
        return "hey,have you done with assignments!!!!"
    };
   
}

let s1 = sport1();
console.log("Sport1", typeof s1);

let s2 = sport2();
console.log("Sport2", typeof s2);

let s3 = sport3();
console.log("Sport3", typeof s3);

if(typeof s3== 'function')
{
    s3();
}