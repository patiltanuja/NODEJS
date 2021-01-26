//http://localhost:8000/
//http://localhost:8000/login
// http://localhost:8000/home

const http = require("http");

http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case "/":
            res.write(`Saturday ${url}`);
            res.end();
            break;
        case "/login":
            res.write(`Login ${url}`);
            res.end();
            break;
            case "/register":
                res.write(`REgister ${url}`);
                res.end();
                break;
        default:
            break;

    }

    res.write(`Saturday ${url}`);
    res.end();
})
    .listen(4200, () => console.log("Server started"))