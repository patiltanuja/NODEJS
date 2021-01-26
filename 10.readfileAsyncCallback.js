const fs = require("fs");

function main() {
    const filePath1 = "4.regular.calculator.js"
    fs.readFile(filePath1, { encoding: "utf-8" }, (err, data) => {
        console.log("File1", data);
    
    const filePath2 = "4.regular.calculator.js"
    fs.readFile(filePath2, { encoding: "utf-8" }, (err, data) => {
        console.log("File 2", data);
    
    const filePath3 = "4.regular.calculator.js"
    fs.readFile(filePath3, { encoding: "utf-8" }, (err, data) => {
        console.log("File 3", data);
    });
});
});

}