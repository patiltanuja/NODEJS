//global scope
let str = "Golden day";

for (let i = 0; i < 4; i++) {
    //block scope
    //why this statement work
    let str = "Great day";
    console.log(i, str);
    for (let i = 0; i < 2; i++) {
        let str = "ooo let get redeclare";
        console.log(i, str);
    }
}

