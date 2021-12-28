const getEmailFromUser = require("../actions/forgotPass/getEmailFromUser");
const persistDatas = require("../actions/forgotPass/persistDatas");
const sendEmail = require("../actions/forgotPass/sendEmail");
const tokenToEmail = require("../actions/forgotPass/tokenToEmail");

function forgotPass(app){
    app.route('/forgot-pass')
        .post(async (req, res) => {
            const response = await getEmailFromUser(req.body.userName)
            const token = tokenToEmail(response)

            const objectResponse = await persistDatas(response,token)

            console.log(objectResponse)
            //fazer lógica de enviar email
            
        })
}

module.exports = forgotPass;