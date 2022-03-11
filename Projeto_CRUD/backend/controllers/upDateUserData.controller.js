const controllerUpdateData = require("../actions/upDateActions/controllerUpdateData")
const decryptData = require("../actions/upDateActions/decryptData")

async function upDateUserDataController(res, res, next) {
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

        const response = await controllerUpdateData(objectDatas)
                       
        if (response === true) {
            res.status(200).send(true)
        } else {
            throw new Error('Server Error - upDateData')
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}

module.exports = upDateUserDataController;