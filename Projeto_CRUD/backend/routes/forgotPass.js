const forgotPassController = require("../controllers/forgotPass.controller");

function forgotPass(app){
    app.route('/forgot-pass')
        .post(forgotPassController)
}

module.exports = forgotPass;