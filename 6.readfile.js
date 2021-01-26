//internal module
const fs = require("fs");

function main(){
    const filePath="package.json"
    const fileOutpput=fs.readFileSync(filePath,{encoding:"utf-8"});
console.log(fileOutpput)
}
main()