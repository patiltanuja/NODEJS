const http = require("http")
//http
//http.createServer();
//http.createServer((req,res)=>{})
//server always run on ports :: 3000/4200/8080
// http.createServer((req,res)=>{}).listen(3000);

http
    .createServer((req, res) => {
        res.write("Saturday!!!");
        res.end();
    })
    .listen(8080);

