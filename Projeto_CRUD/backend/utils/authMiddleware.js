const {promisify} = require('util')
const jwt = require('jsonwebtoken')

const authValidate = async (req,res,next) => {
        
    const {authorization} = req.headers;
    if(!authorization) return res.send(false)
    
    const token = authorization
    
    try {
        const teste = await promisify(jwt.verify)(token, process.env.SECRET)

        console.log(teste)
        
        if (teste) {
            // req.idUser = idUser
            // req.userName = userName
            // req.isAdm = isAdm
            // req.isBlock = isBlock                    
            return next()  
        } else {           
            return res.send(false)
        }
    } catch (error) {
        return res.send(false)
    }

}

module.exports = authValidate