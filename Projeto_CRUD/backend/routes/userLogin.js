const login = require("../utils/login");

const userLogin = (app) => {
    app.route("/login")
        .post((req, res) => {

            console.log(req.body)
        })

}

module.exports = userLogin;