const compareToken = require("../actions/verifyTokenToResetPassActions/compareToken");

function verifyTokenResetPass(app){
    app.route('/verify-token')
        .post(async (req, res) => {
            try {
                console.log(req.body) 
                const wasValid = await compareToken(req.body)
                
                if (wasValid) {
                    res.status(200).send({
                        wasValid
                    })
                } else {
                    res.status(400).send('Something wrong, contact the administrator')
                }
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = verifyTokenResetPass;