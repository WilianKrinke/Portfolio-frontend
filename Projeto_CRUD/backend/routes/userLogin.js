const login = require("../utils/login");


const userLogin = (app) => {
    app.route("/login")
        .post((req, res) => {
            login(req.body)
        })

}

module.exports = userLogin;