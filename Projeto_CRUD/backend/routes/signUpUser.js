const { sendDatasToDB } = require("../actions/signUpActions/sendDatasToDB")

const signUpUser = (app) => {
    app.route("/sign-up-user")
        .post(async (req, res) =>{            
            try {
                const response = await sendDatasToDB(req.body)
                res.status(200).send(response)                
            } catch (error) {                
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = signUpUser;