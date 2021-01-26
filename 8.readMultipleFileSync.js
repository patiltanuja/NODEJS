const fs = require("fs");

function main(){
    //read file 1
    const filePath1="2.promise.summary.js";
    const fsOutput1 = fs.readFileSync(filePath1,{encoding:"utf-8"});
    console.log("file1",fsOutput1)



    const filePath2="2.promise.summary.js";
    const fsOutput2 = fs.readFileSync(filePath2,{encoding:"utf-8"});
console.log("file2",fsOutput2)
}
main();