function add(p1=14,p2=16)
{
    console.log("Add here",p1,p2);
    return p1+p2;
}

let arrow =(p1=14,p2=16) =>
{
    console.log("Add here",p1,p2);
    return p1+p2;
}



function sport(s1,s2)
{
    return s1+s2;
}

let arrowPlay = (s1,s2)=>{
    return s1+s2;
}

let arrowplayIndoor= (s1,s2)=> s1+s2;


//SportEvent



function SportEvent(s1,s2){
    return s1+s2;
}

let arrowBasket = (s1,s2)=>{
    return s1 + s2;
}
//---------------------------------------
//special case
p1 => "let's play basketball"
let ground =(s1) => `play ${s1}`

let ball =ground("playing");
console.log(ball)

//calling 
let bas1 =  arrowPlay("basketball  ","football");
console.log("concat",bas1);

//functon returning function
 ()=> ()=>5;