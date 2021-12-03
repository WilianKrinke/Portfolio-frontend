const { sendDatasToDB } = require("../utils/sendDatasToDB")

const registerUser = (app) => {
    app.route("/sign-in")
        .post((req, res) =>{
            let control = false
            sendDatasToDB(req.body)
            .then(response => {
                control = true
                res.send(control)
            })
            .catch(err => {
                console.log(err)
                res.send(control)          
            })
        })
}

module.exports = registerUser;