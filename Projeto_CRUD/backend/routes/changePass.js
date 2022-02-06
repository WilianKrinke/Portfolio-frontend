const insertPassIntoDb = require("../actions/resetPassActions/insertPassIntoDb");

function changePass(app){
    app.route('/change-pass')
        .post(async(req, res) => {
            try {
                const wasUpdate = await insertPassIntoDb(req.body)
                
                if (wasUpdate) {
                    res.status(200).send({wasUpdate})
                } else {
                    throw new Error('Server Error - changePass')
                }
                
            } catch (error) {  
                console.log(error.message)     
                res.status(500).send(error.message)
            }
        })
}

module.exports = changePass;