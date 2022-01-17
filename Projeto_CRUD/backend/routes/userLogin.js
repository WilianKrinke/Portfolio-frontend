const login = require("../actions/loginActions/login");

const userLogin = (app) => {
    app.route("/login")
        .post(async (req, res) => {            
            try { 
                const response = await login(req.body)
                res.send(response)
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = userLogin;