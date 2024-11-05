var mango = require('mongodb')
const mongoose = require('mongoose')

const mongurl = "mongodb+srv://Rutuja:rutu17112002@cluster0.zlmxc.mongodb.net/web"

mongoose.connect(mongurl)

// default connection 

const db = mongoose.connection;

// bind for error event 

db.on('error', console.error.bind(console, 'mongodb error'))

db.once('open', () => {
    console.log("connection created");

    db.createCollection('mydatabase', (err, result) => {
        if (err) {
            console.error("Error while creating collection");
        } else {
            console.log("Database created");
        }
        mongoose.connection.close()
    })

})