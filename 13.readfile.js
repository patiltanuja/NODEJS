const fs = require("fs");
const Promise = require("bluebird");

//it will convert callback API into aware API
Promise.promisifyAll(fs);

async function myreadFile(filePath){
    const fileoutput =await fs.readFileAsync(filePath,{encoding : "utf-8"});
    return fileoutput;
}

module.exports={
    myreadFile:myreadFile
}