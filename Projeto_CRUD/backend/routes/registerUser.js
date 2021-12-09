const { sendDatasToDB } = require("../utils/sendDatasToDB")

const registerUser = (app) => {
    app.route("/sign-in")
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

module.exports = registerUser;