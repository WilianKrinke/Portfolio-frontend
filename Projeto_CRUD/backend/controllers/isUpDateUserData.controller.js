const verifyUpDateData = require("../repository/verfyUpDatesDataRepository/verifyUpDateData")

async function isUpDateUserDataController(req, res, next) {
    try {
        const [idUser] = req.idUser
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
        res.status(500).send(error.message)
    }
}

module.exports = isUpDateUserDataController;