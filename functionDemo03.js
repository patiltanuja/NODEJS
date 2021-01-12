let str = "hello";
let num=90;
let mon =function()
{
    console.log("I am annonymous function");
}

function tuesaday(p1)
{
    console.log(p1);
}
tuesaday(str);
tuesaday(num);
tuesaday(mon);

function tuesaday(p1)
{
    console.log(typeof p1);
    if(typeof p1 == "function")
    {
        p1();
    }
}
tuesaday(25)

