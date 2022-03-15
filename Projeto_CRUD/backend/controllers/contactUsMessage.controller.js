const sendContactEmail = require("../repository/sendEmailContactRepository/sendEmail")

async function contactUsMessageController(req, res, next) {
    try {
        const {objectMessage} = req.body
        const [idUser] = req.idUser     
        const [userName] = req.userName

        const objectData = {
            idUser,
            userName,
            objectMessage
        }

        const response = await sendContactEmail(objectData)
        res.status(200).send(response)
        
    } catch (error) {
       console.log(error.message)
       res.status(500).send(error.message)
       next(error)
    }
}

module.exports = contactUsMessageController;