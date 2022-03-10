const verifyTokenToChangePassController = require("../controllers/verifyTokenToChangePass.controller");

function verifyTokenResetPass(app){
    app.route('/verify-token')
        .post(verifyTokenToChangePassController)
}

module.exports = verifyTokenResetPass;