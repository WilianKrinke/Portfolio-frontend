const registerUser = (app) => {
    app.route("/sign-in")
        .post((req, res) =>{
            console.log(req.body)
            res.send(true)
        })
}

module.exports = registerUser;