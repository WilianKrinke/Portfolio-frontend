const compareToken = require("../services/verifyTokenToResetPassServices/compareToken")

async function verifyTokenToChangePassController(req, res, next) {
    try {
        const wasValid = await compareToken(req.body)
        
        if (wasValid) {
            res.status(200).send({
                wasValid
            })
        } else {
            res.status(200).send({
                wasValid: false
            })
        }
    } catch (error) {  
        console.log(error.message)       
        res.status(200).send({
            wasValid: false
        })
        next(error)
    }
}

module.exports = verifyTokenToChangePassController;