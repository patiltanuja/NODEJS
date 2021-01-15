function updateUser(p1){
    //logic
    p1.name="james haraden"
}

let u1={
    id:1,
    name:"james",
    email:"james@nba.ac.in"
};

console.log(u1)

//callling function :: pass by value
updateUser(u1);
console.log(u1)