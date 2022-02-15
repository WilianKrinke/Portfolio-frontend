const { sendDatasToDB } = require("../actions/signUpActions/sendDatasToDB")
const checkSameUserName = require("../validations/checkSameUserName/checkSameUserName")

const signUpUser = (app) => {
    app.route("/sign-up-user")
        .post(async (req, res) =>{            
            try {
                const {userName} = req.body
                const isSameUserName = await checkSameUserName(userName)

                if (isSameUserName) {
                    res.status(200).send({
                        isSameUserName, 
                        wasRegistered: false
                    })
                } else {
                    sendDatasToDB(req.body)
                    res.status(200).send({
                        isSameUserName: false, 
                        wasRegistered: true
                    })
                }

            } catch (error) {                
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = signUpUser;