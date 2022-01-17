const { sendDatasToDB } = require("../actions/signUpActions/sendDatasToDB")

const signUpUser = (app) => {
    app.route("/sign-up-user")
        .post(async (req, res) =>{            
            try {
                const response = await sendDatasToDB(req.body)
                res.send(response)                
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = signUpUser;