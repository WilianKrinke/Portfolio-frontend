const {promisify} = require('util')
const jwt = require('jsonwebtoken')

const authValidate = async (req,res,next) => {
        
    const {authorization} = req.headers;
    if(!authorization) return res.send(false)
    
    const token = authorization
    
    try {
        const teste = await promisify(jwt.verify)(token, process.env.SECRET)
        
        if (teste) {
            console.log('positivo')
            return next()  
        } else {
            console.log('negativo')
            return false
        }
    } catch (error) {
        return res.send(false)
    }

}

module.exports = authValidate