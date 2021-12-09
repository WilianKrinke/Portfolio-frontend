const login = require("../utils/login");

const userLogin = (app) => {
    app.route("/login")
        .post((req, res) => {
            try {                
                login(req.body)
                .then(response => {                
                    res.send(response)
                })
                .catch(err => {
                    console.log(err)
                    res.send(false)
                }) 

            } catch (error) {
                console.log(error)
            }
        })
}

module.exports = userLogin;