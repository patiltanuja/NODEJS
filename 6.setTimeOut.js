console.log("1");

//inbuilt method: : Global method

// 1000 ms = 1second
const task = () => {
    console.log("after 5 second");
};
setTimeout(task, 5000);

//After 2 sec

setTimeout(() => {
    console.log("After 2 second")
}, 2000);

console.log("3")
