const login = require("../actions/loginActions/login");

async function userLoginController(req, res, next) {
    try { 
        const response = await login(req.body)
        res.send(response)
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
    }
}

module.exports = userLoginController;