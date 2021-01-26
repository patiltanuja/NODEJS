/* bluebird */
//correct

const fs = require("fs");
const Promise = require("bluebird");

//it will convert callback API into aware API
Promise.promisifyAll(fs);

async function main() {
    const filePath1 =
        "3.RegularCalculator.js"

    let foutput = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
    console.log("file 1", foutput);

    const filePath2 = "2.promise.summary.js"
    let foutput2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
    console.log("file 1", foutput2);

}

main();