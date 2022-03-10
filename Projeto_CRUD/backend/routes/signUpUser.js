const userSignUpController = require("../controllers/userSignUp.controller");

const signUpUser = (app) => {
    app.route("/sign-up-user")
        .post(userSignUpController)
}

module.exports = signUpUser;