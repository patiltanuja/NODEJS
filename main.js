const fs = require("fs");
require("bluebird");
const mymod = require("./12.localModule");
const myfs = require("./13.readfile");
const mycal = require("./14.calculator");
async function main() {
    const filepath = "4.regular.calculator.js"
    const o5 = await myfs.myreadFile(filepath)
    console.log(o5)
}

async function calMain() {
    /* 14.calculator */
    let o = await mycal.add(1, 2)
    console.log("sum", o)

    /*12.LocalModule*/
    let o2 = await mycal.mul(1, 2)
    console.log("mul", o2)
    const o1 =  mymod.enjoy();
    const s =  mymod.sport();
    console.log(o1, s)

    /* 13.readfile :: to avoid call back()*/
    const filepath = "4.regular.calculator.js"
    const o5 = await myfs.myreadFile(filepath)
    console.log(o5)

}
calMain()


