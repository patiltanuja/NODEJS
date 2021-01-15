//Event Loop :: FB PAGE
console.log("1");

/* below method is asychronus because it will get execute after some time */
setTimeout(()=>console.log("2"),0);

Promise.resolve().then(() =>console.log("3"));

console.log("4")