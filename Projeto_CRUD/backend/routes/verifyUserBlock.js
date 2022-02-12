const userBlockedVerify = require("../actions/userBlockedActions/userBlockedVerify")
const userBlockedVerifyDay = require("../actions/userBlockedActions/userBlockedVerifyDay")

function verifyUserBlock(app){
    app.route('/is-user-blocked')
        .get(async(req,res) => {
            try {
                const [idUser] = req.idUser               
                userBlockedVerifyDay(idUser)
                
                const isblock = await userBlockedVerify(idUser)

                if (isblock === false) {
                    res.status(200).send({
                        isBlock: false
                    })
                } else {
                    res.status(200).send({
                        isBlock: true
                    })
                }                
                
            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }
            

        })
}

module.exports = verifyUserBlock;