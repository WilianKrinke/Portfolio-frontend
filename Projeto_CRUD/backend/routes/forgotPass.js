const getEmailFromUser = require("../actions/forgotPass/getEmailFromUser");
const haveTokenValid = require("../actions/forgotPass/haveTokenValid");
const persistDatas = require("../actions/forgotPass/persistDatas");
const sendEmail = require("../actions/forgotPass/sendEmail");
const tokenToEmail = require("../actions/forgotPass/tokenToEmail");

function forgotPass(app){
    app.route('/forgot-pass')
        .post(async (req, res) => {
            try {
                const response = await getEmailFromUser(req.body.userName)
                const userHaveTokenValid = haveTokenValid(response)

                if (userHaveTokenValid === false) {        
                    const token = tokenToEmail(response)    
                    const objectResponse = await persistDatas(response,token)                    
                    const wasSent = sendEmail(objectResponse)
    
                    const {email} = objectResponse
    
                    if (wasSent) {
                        res.status(200).send({
                            wasSent,
                            email
                        })
                    } else {
                        res.status(400).send('Unable to send email for password reset')
                    }
                } else {
                    res.status(400).send('This user already has a call in progress for password change')
                }

            } catch (error) {
                console.log(error)
                res.status(400).send('Unable to send email for password reset')
            }
        })
}

module.exports = forgotPass;