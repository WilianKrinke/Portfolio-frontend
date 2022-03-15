const insertPassIntoDb = require("../services/resetPassServices/insertPassIntoDb")


async function changePassController(req, res, next) {
    try {
        const wasUpdate = await insertPassIntoDb(req.body)
        
        if (wasUpdate) {
            res.status(200).send({wasUpdate})
        } else {
            throw new Error('Server Error - changePass')
        }
        
    } catch (error) {  
        console.log(error.message)     
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = changePassController;