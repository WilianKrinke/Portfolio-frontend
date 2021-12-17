const login = require("../actions/loginActions/login");

const userLogin = (app) => {
    app.route("/login")
        .post(async (req, res) => {            
            try { 
                const response = await login(req.body)
                res.send(response)
            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = userLogin;