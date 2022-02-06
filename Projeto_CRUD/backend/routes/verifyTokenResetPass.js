const compareToken = require("../actions/verifyTokenToResetPassActions/compareToken");

function verifyTokenResetPass(app){
    app.route('/verify-token')
        .post(async (req, res) => {
            try {
                const wasValid = await compareToken(req.body)
                
                if (wasValid) {
                    console.log('Entrou no TRUE')
                    res.status(200).send({
                        wasValid
                    })
                } else {
                    res.status(200).send({
                        wasValid: false
                    })
                }
            } catch (error) {         
                res.status(200).send({
                    wasValid: false
                })
            }
        })
}

module.exports = verifyTokenResetPass;