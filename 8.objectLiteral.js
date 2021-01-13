//DRAWBACK:: MISTAKE

const basketball1={
    JereyNo : 33,
    playerName:"james",
    club : "NBA",
    country : "USA"
}

const basketball2={
    JereyNo : 5,
    playerName:"Stefan",
    club : "NBA",
    country : "UK"
}

const basketball3={
    JereyNo : 7,
    playerName:"ronaldo",
    club : "NBA",
    country : "Japan"
}
//dot operator
console.log(basketball3.JereyNo);
//bracket notation
console.log(basketball3["JereyNo"]);
//update

basketball3.JereyNo=55;
console.log("update",basketball3);

//dalete 

delete basketball3.club;
console.log("delete",basketball3);