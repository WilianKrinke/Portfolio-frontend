const userLoginController = require('../controllers/userLogin.controller.js')

const userLogin = (app) => {
    app.route("/login")
        .post(userLoginController)
}

module.exports = userLogin;