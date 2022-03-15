const sendDatasToRepository = require("../services/signUpServices/sendDatasToRepository")
const checkSameUserName = require("../validations/checkSameUserName/checkSameUserName")

async function userSignUpController(req, res, next) {
    try {
        const {userName} = req.body
        const isSameUserName = await checkSameUserName(userName)

        if (isSameUserName) {
            res.status(200).send({
                isSameUserName, 
                wasRegistered: false
            })
        } else {
            sendDatasToRepository(req.body)
            res.status(200).send({
                isSameUserName: false, 
                wasRegistered: true
            })
        }

    } catch (error) {                
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = userSignUpController;