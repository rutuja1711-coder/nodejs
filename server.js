const http = require('http')
const uc = require('uppercase')
http.createServer((req, res) => {
    console.log("Server Created");
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.write(uc('Hello World.Good morning'))
    res.end()
}).listen(5000)