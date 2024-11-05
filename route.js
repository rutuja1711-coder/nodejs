const express = require('express').Router()
const route = require('express').Router()

const userModule = require('./module')
const { registerValiadtion, loginValidataion } = require('./validation')
const bcryptjs = require('bcryptjs')
constjwt = require('jsonwebtoken')



// Shcema(resgister data)
route.post('/register', async(req, res) => {
    const { error } = registerValiadtion(req.body)
    if (error) return res.status(404).send(error.details[0].message)

    const emailExist = await userModule.findOne({
        email: req.body.email
    })
    if (emailExist) return res.status(404).send("Email already exists")

    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(req.body.password, salt)
    const newUser = new userModule({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: hashpassword
    })
    try {
        const saveData = await newUser.save()
        res.send(saveData)

    } catch (error) {
        console.log(error)

    }
})

//login
route.post("/login", async(req, res) => {
    const { error } = loginValidataion(req.body)
    if (error) return res.status(404).send(error.details[0].message)



    //email
    const userExist = await userModule.findOne({ email: req.body.email })
    if (!userExist) return res.status(400).send("Invalid email id")

    //password
    const ipass = await bcryptjs.compare(req.body.password, userExist.password)
    if (!ipass) return res.status(400).send("Invalid password")

    const token = jwt.sign({ _id: userExist._id }, process.env.Token_secret)
    res.header('auth-token', token).send(token)
    res.send("Login successfull")
})






















// API for show data
route.get("/showData", async(req, res) => {
    try {
        const showData = await userModule.find()
        res.send(showData)

    } catch (error) {
        console.log(error);

    }

    //Delete data
    route.delete("/delete", async(req, res) => {
        let id = req.query.id
        try {
            const deleteData = await userModule.findByIdAndDelete(id);
            res.send('Delete data succesfully');

        } catch (error) {
            console.log(error);

        }
    })

    //Update data
    route.post("/update", async(req, res) => {
        let _id = req.body._id
        try {
            const updateData = await userModule.findByIdAndUpdate(_id, req.body)
            res.send("Data updated")
        } catch (error) {
            console.log(error);

        }
    })

})
module.exports = route;