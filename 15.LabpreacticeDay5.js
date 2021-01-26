/*File read */
//readFileSync
const fs = require("fs");

// function sunday(){
//     //const path1="package.json";
//     const fileReadOP1 = fs.readFileSync("package.json",{encoding : "utf-8"});
//     console.log(fileReadOP1 );


// }
// sunday();

// //readFile

// function friday(){
//     const path2 ="package.json";
//     fs.readFile(path2,{encoding:"utf-8"},(err,data)=>{
//         console.log(err);
//         console.log(data);
//     });
// }
// friday();


/*write */
//writeFile

// console.log("Going to write into existing file");
// // Open a new file with name input.txt and write Simply Easy Learning! to it.
// fs.writeFile('input.txt', 'Simply Easy Learning!', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Data written successfully!");
//     console.log("Let's read newly written data");
// });

//writeFile

fs.writeFile('redme.txt','Team15',(err)=>{
    console.log("File write operation");
});


//writeFileSync
// fs.writeFileSync('redme.txt', JSON.stringify({x:5}));

// const path1 = "1.promse.summary.js"
// const output = fs.readFileSync(path1, { encoding: "utf-8" }, (err, data) => {
//     console.log(err);
//     console.log(data);

//     // const path2 = "input.txt"
//     // const output1 = fs.readFileSync(path2, { encoding: "utf-8" })
// })

// console.log(output)

/*async*/

const bb = require("bluebired");
bb.promisifyAll(fs);

async function friday(){
    let otp= await fs.readFileSync('redme.txt',{encoding:"utf-8"})
    console.log(otp);
}
friday();