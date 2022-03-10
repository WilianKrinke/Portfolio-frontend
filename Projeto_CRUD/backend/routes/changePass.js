const changePassController = require("../controllers/changePass.controller");

function changePass(app){
    app.route('/change-pass')
        .post(changePassController)
}

module.exports = changePass;