// const http = require('http');
import fs from "fs";
import http from "http";
const port = process.env.PORT || 3000;       //defined port
const server = http.createServer((req, res) => {                //this is the method in http module and always have callback i.e (req, res)
    res.statusCode = 200;                                       //for okay
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if (req.url == '/'){                             //static server
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end (data.toString());
    }
    else if (req.url == '/about'){
        res.statusCode = 200;
        res.end ('<h1>Welcome</h1>');
    }
    else if (req.url == '/hello'){
        res.statusCode = 200;
        res.end ('<h1>okay bye</h1>');
    }
    else {
        // res.ayman();
        res.statusCode = 404;
        res.end ('<h1>Page not found!</h1>');
    }
});

server.listen(port, () => {
    console.log (`server is listening on port ${port}`);
});