const userAccess = require("../services/userAccessServices/userAccess")

async function userAccessDataController(req, res, next) {
    try {
        const [idUser] =  req.idUser
        const [userName] = req.userName    

        const {email} = await userAccess(idUser)

        const objectResponse = {
            userName,
            email
        }

        res.status(200).send(objectResponse)   
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = userAccessDataController;