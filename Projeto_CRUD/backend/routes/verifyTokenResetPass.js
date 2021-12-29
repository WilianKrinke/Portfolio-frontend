const compareToken = require("../actions/resetPassActions/compareToken");
const deleteTokenFromDb = require("../actions/resetPassActions/deleteTokenFromDb");

function verifyTokenResetPass(app){
    app.route('/verify-token')
        .post(async (req, res) => {
            try {
                const wasValid = await compareToken(req.body)
                const wasTokenDeleted = false //deleteTokenFromDb(req.body)
                
                if (wasValid) {
                    res.status(200).send({
                        wasValid,
                        wasTokenDeleted
                    })
                } else {
                    res.status(400).send('Something wrong, contact the administrator')
                }
            } catch (error) {
                res.status(400).send('Something wrong, contact the administrator')
            }
        })
}

module.exports = verifyTokenResetPass;