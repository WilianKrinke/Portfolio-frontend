const getEmailFromUser = require("../actions/forgotPass/getEmailFromUser");
const sendEmail = require("../actions/forgotPass/sendEmail");
const tokenToEmail = require("../actions/forgotPass/tokenToEmail");

function forgotPass(app){
    app.route('/forgot-pass')
        .post(async (req, res) => {
            const response = await getEmailFromUser(req.body.userName)
            const token = tokenToEmail(response)



            //fazer email com token e idUser para alterar senha
            console.log(response)
            console.log(token)

            const teste = sendEmail(response, token);

        })
}

module.exports = forgotPass;