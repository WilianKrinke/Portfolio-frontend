const compareToken = require("../actions/resetPassActions/compareToken");

function verifyTokenResetPass(app){
    app.route('/verify-token')
        .post(async (req, res) => {
            console.log(req.body)

            compareToken(req.body)
        })
}

module.exports = verifyTokenResetPass;