// READ FILE
// const fs = require('fs')
// const http = require("http")
// http.createServer((req, res) => {
//     fs.readFile('server.js', (err, data) => {
//         res.writeHead(200, { 'content-type': 'text/plain' })
//         res.write(data)
//         return res.end()
//     })

// }).listen(5000)


// APPEND FILE first method
// const fs = require('fs')
// const http = require("http")
// http.createServer((req, res) => {
//     fs.appendFile('index.html', '<h1>This is append file data</h1>', (err, data) => {
//         if (err) throw err
//         console.log("file updated");
//         return res.end()
//     })


// }).listen(5000)


// second method 
// const fs = require('fs')
// const http = require("http")
// http.createServer((req, res) => {
//     fs.appendFile('inde.html', '<h1>This is append file data</h1>', (err, data) => {
//         if (err) throw err
//         console.log("file updated");
//         return res.end()
//     })


// }).listen(6000)



// DELETE METHOD 
// const fs = require('fs')
// const http = require("http")
// http.createServer((req, res) => {
//     fs.unlink('inde.html', (err) => {
//         if (err) throw err
//         console.log("File deleted");
//         return res.end()
//     })
// }).listen(5000)


// WRITE FILE 
// const fs = require('fs')
// const http = require("http")
// http.createServer((req, res) => {
//     fs.writeFile('mynewfile.txt', "Hello world...!", (err) => {
//         if (err) throw err
//         console.log("file saved")
//     })
// }).listen(5000)


// RENAME FILE 
// const fs = require('fs')
// const http = require("http")
// http.createServer((req, res) => {
//     fs.rename('mynewfile.txt', 'newfile.txt', (err) => {
//         console.log("File rename");
//     })
// }).listen(5000)

// WRITE AND READ FILE 
const fs = require('fs')
const http = require("http")
http.createServer((req, res) => {
    console.log('server created');
    console.log('writing into file');
    fs.writeFile('input.txt', "hello good morning this is read and write method", (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("File written sucessfully");
        console.log("Lets read file");

        fs.readFile('input.txt', (err, data) => {
            if (err) {
                return console.error(err);
            }
            console.log(data.toString());
        })
    })
}).listen(5000)