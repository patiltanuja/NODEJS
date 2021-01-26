const fs = require("fs");

function main() {
    const filePath = "main.js"
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log(err);
        console.log(data);
    });

}
main();