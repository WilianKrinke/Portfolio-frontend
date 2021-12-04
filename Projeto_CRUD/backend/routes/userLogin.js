const login = require("../utils/login");

const userLogin = (app) => {
    app.route("/login")
        .post((req, res) => {
            let control = false

            login(req.body)
            .then(response => {
                control = response
                res.send(control)
            })
            .catch(err => {
                res.send(control)
            })
        })

}

module.exports = userLogin;