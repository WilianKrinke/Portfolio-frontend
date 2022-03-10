const getEmailFromUser = require("../actions/forgotPass/getEmailFromUser")
const haveTokenValid = require("../actions/forgotPass/haveTokenValid")
const persistDatas = require("../actions/forgotPass/persistDatas")
const sendEmail = require("../actions/forgotPass/sendEmail")
const tokenToEmail = require("../actions/forgotPass/tokenToEmail")

async function forgotPassController(req, res, next) {
    try {
        const response = await getEmailFromUser(req.body.userName)
        const userHaveTokenValid = await haveTokenValid(response)
        
        if (userHaveTokenValid === false) {
            const token = tokenToEmail(response)    
            const objectResponse = await persistDatas(response,token)     
            
            const wasSent = await sendEmail(objectResponse)    
            const {email} = objectResponse    
            
            res.status(200).send({
                wasSent,
                email
            })                    

        } else {
            res.status(200).send({
                wasSent: null,
                email: null
            })
        }

    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
    }
}

module.exports = forgotPassController;