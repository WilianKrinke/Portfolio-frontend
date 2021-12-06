const { sendDatasToDB } = require("../utils/sendDatasToDB")

const registerUser = (app) => {
    app.route("/sign-in")
        .post((req, res) =>{
            let control = false
            
            sendDatasToDB(req.body)
            .then(response => {
                control = response
                res.send(control)
            })
            .catch(err => {
                console.log(err)
              res.send(false)         
            })
        })
}

module.exports = registerUser;