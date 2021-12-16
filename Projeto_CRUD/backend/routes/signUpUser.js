const { sendDatasToDB } = require("../actions/signUpActions/sendDatasToDB")

const signUpUser = (app) => {
    app.route("/sign-up-user")
        .post(async (req, res) =>{            
            try {
                const response = await sendDatasToDB(req.body)
                res.send(response)                
            } catch (error) {
                console.log(error)
                res.send(false)
            }
        })
}

module.exports = signUpUser;