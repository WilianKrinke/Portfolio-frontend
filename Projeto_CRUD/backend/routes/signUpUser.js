const { sendDatasToDB } = require("../actions/signUpActions/sendDatasToDB")

const signUpUser = (app) => {
    app.route("/sign-up-user")
        .post(async (req, res) =>{            
            try {
                const response = await sendDatasToDB(req.body)
                res.send(response)                
            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = signUpUser;