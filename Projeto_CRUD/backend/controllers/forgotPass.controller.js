const sendEmail = require("../repository/forgetPassRepository/emails/sendEmail")
const getEmailByUserName = require("../repository/forgetPassRepository/getEmailByUserName.repository")
const haveTokenValid = require("../repository/forgetPassRepository/haveTokenValid.repository")
const generateTokenToEmail = require("../services/forgotPassServices/generateTokenToEmail")
const wasTokenRegistered = require("../services/forgotPassServices/wasTokenRegistered")

async function forgotPassController(req, res, next) {
    try {
        const userDatas = await getEmailByUserName(req.body.userName)
        const userHaveTokenValid = await haveTokenValid(userDatas)
        
        if (userHaveTokenValid === false) {
            const token = generateTokenToEmail()    
            const objectResponse = await wasTokenRegistered(userDatas,token)     
            
            const wasSent = await sendEmail(objectResponse)    
            const {email} = userDatas    
            
            res.status(200).send({
                wasSent,
                email
            })                    

        } else {
            const {email} = userDatas 
            res.status(200).send({
                wasSent: null,
                email: email
            })
        }

    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = forgotPassController;