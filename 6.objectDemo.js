let num = 16;

let str = "december"

// object literals::Reference variable
let basket ={
    collegeName : "SGGSIE &T NANDED",
    tournametName : "ICT",
    playerNo : 11,
};
console.log(typeof basket);
//accessing member:: using dot operator
console.log("No. of players",basket.playerNo);
//access member :: using Bracket Notation
console.log("college Name",basket["collegeName"]);

//update

basket.playerNo=5;
console.log("updated",basket);
/*updated { collegeName: 'SGGSIE &T NANDED', tournametName: 'ICT', playerNo: 5 }*/

//delete
delete basket.collegeName;
console.log("deleted",basket);






/*
DATA MEMBERS in java
class sport{
    String collegeName;
    int players;
}
*/

