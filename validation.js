const joi = require('joi')


const registerValiadtion = (data) => {
    const schema = joi.object({
        name: joi.string().required().min(2).max(8),
        email: joi.string().required().email(),
        password: joi.string().required().min(5).max(8),
        mobile: joi.number().integer().required().min(1000000000).max(9999999999)
    })
    return schema.validate(data)
}

const loginValidataion = (data) => {
    const schema = joi.object({
        email: joi.string().required().email(),
        password: joi.string().required().min(5).max(8),
    })

    return schema.validate(data)
}
module.exports.registerValiadtion = registerValiadtion;
module.exports.loginValidataion = loginValidataion;