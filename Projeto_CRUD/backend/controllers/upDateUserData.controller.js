const decryptData = require("../services/decryptServices/decryptData")
const optionsUpdateData = require("../services/upDateServices/optionsUpdateData")

async function upDateUserDataController(req, res, next) {
    try {
        const {encryptedData, option, last_update} = req.body
        const data = decryptData(encryptedData)
        const idUser = req.idUser[0]
        
        const objectDatas = {
            idUser,
            data,
            option,
            last_update
        }   

        const response = await optionsUpdateData(objectDatas)
                       
        if (response === true) {
            res.status(200).send(true)
        } else {
            throw new Error('Server Error - upDateData')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = upDateUserDataController;