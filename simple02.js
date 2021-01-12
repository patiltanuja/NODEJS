// let num = process.argv[2];
// num = parseInt(num);
// function Pyramid(num){

//     for(let x=0;x<num;x++)
//     {
//         let str="";
//         for(let y=0;y<=x;y++)
//         {
//           str=str+"*";
//         }
//         console.log(str);
//     }
// }
// Pyramid(num);

function Pyramid(num){

    for(let x=0;x<num;x++)
    {
        let str="";
        for(let y=0;y<=x;y++)
        {
          str=str+"*";
        }
        console.log(str);
    }

}
console.log("");
let readline = require('readline-sync');
let num = readline.question("Enter the number for height of pyramid that you want to print?\n");
console.log("");
Pyramid(num);
console.log("");
