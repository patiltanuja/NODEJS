//Reusability of modules
const fs = require("fs");
let num=12;
function enjoy(){
    return "Friday it is";
 }
 function sport(){
    return "Sport is good for health";
 }
 
 module.exports={
     enjoy,
     sport
 }
