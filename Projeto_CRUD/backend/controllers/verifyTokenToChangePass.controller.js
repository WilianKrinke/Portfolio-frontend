const compareToken = require("../actions/verifyTokenToResetPassActions/compareToken")

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
        res.status(200).send({
            wasValid: false
        })
    }
}

module.exports = verifyTokenToChangePassController;