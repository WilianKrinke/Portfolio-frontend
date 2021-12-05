const {promisify} = require('util')
const jwt = require('jsonwebtoken')

const authValidate = async (req,res,next) => {
    const {authorization} = req.headers

    if(!authorization) return res.send(false)

    const [, token] = authorization.split(' ')

    try {
        await promisify(jwt.verify)(token, process.env.SECRET)
        return next()
    } catch (error) {
        return res.send(false)
    }

}

module.exports = authValidate