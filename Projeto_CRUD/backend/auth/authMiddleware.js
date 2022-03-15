const jwt = require('jsonwebtoken')

const authValidate = async (req, res, next) => {        
    try {
        const {authorization} = req.headers;
        if(!authorization) return res.status(400).send(null)

        const teste = jwt.verify(authorization, process.env.SECRET)
        
        const {idUser, userName} = jwt.verify(authorization, process.env.SECRET)
        
        if (teste) {
            req.idUser = idUser         
            req.userName = userName
            return next()  
        } else { 
            return res.status(500).send(null)
        }
    } catch (error) {
        if (error.message === 'jwt expired') {
            res.status(200).send(false)
            next(error)            
        } else {
            res.status(401).send(null)
        }
       
    }
}

module.exports = authValidate