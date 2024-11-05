const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const router = require('./route')
app.use("/user", router)
const env = require("dotenv")
env.config()

mongoose.connect(process.env.DB_connection)
    .then(() => {
        console.log("connection created");
    })
    .catch((err) => {
        console.error(err);
    })

app.listen(5000);