// const http = require('http');
import http from "http";
const port = process.env.PORT || 3000;       //defined port
const server = http.createServer((req, res) => {                //this is the method in http module and always have callback i.e (req, res)
    console.log(req)
    res.statusCode = 200;                                       //for okay
    res.setHeader('Content-Type', 'text/html')
    res.end ('<h1>Okay bye</h1>');
});

server.listen(port, () => {
    console.log (`server is listening on port ${port}`);
});