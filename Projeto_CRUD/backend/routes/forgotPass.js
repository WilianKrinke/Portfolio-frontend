const getEmailFromUser = require("../actions/forgotPass/getEmailFromUser");

function forgotPass(app){
    app.route('/forgot-pass')
        .post(async (req, res) => {
            getEmailFromUser(req.body.userName)
        })
}

module.exports = forgotPass;