const insertPassIntoDb = require("../actions/resetPassActions/changePass");

function changePass(app){
    app.route('/change-pass')
        .post(async(req, res) => {
            try {
                const wasUpdate = await insertPassIntoDb(req.body)

                if (wasUpdate) {
                    res.status(200).send(wasUpdate)
                } else {
                    res.status(400).send(wasUpdate)
                }
                
            } catch (error) {
                console.log(error)
                res.status(400).send(wasUpdate)
            }
        })
}

module.exports = changePass;