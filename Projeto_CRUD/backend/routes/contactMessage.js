const sendContactEmail = require("../actions/contacMessageAction/sendEmail")

function contactMessage(app){
    app.route('/contact-message')
        .post(async(req, res)=>{
            try {
                const {objectMessage} = req.body
                const [idUser] = req.idUser     
                const [userName] = req.userName
                console.log(objectMessage)
    
                const objectData = {
                    idUser,
                    userName,
                    objectMessage
                }

                const response = sendContactEmail(objectData)
                
            } catch (error) {
                //
            }
        })
}

module.exports = contactMessage