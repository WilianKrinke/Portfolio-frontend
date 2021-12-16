const { sendDatasToDB } = require("../actions/sendDatasToDB")

const signUpUser = (app) => {
    app.route("/sign-up-user")
        .post((req, res) =>{            
            try {
                sendDatasToDB(req.body)
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

module.exports = signUpUser;