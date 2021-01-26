const express = require("express")

const app = express()
app.get();
//http://localhost:3000/
app.get("/login",(req,res)=>{
    const opt ="Hello world"
    res.send(opt);
});

//http://localhost:3000/
app.get("/login",(req,res)=>{
    const opt1 =100
    res.send(opt1);
});

//app listen(3000);

app.listen(3000,()=> console.log("Started.."));
