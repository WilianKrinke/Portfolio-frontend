const verifyUpDateData = require("../repository/verfyUpDatesDataRepository/verifyUpDateData")

async function isUpDateUserDataController(req, res, next) {
    try {
        const idUser = req.idUser
        const response = await verifyUpDateData(idUser)
        
        if (response === false) {
            const objectResponse = {
                isUpDated: false
            }
            
            res.status(200).send(objectResponse)
        } else {
            const objectResponse = {
                isUpDated: true
            }            
            res.status(200).send(objectResponse)
        }

    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = isUpDateUserDataController;