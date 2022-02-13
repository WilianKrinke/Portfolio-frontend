const dateIsPassed = require("../actions/userBlockedActions/dateIsPassed")
const userIsBlocked = require("../actions/userBlockedActions/userIsBlocked")
const checkingLockDay = require("../actions/userBlockedActions/checkingLockDay")

function verifyUserBlock(app){
    app.route('/user-blocked')
        .get(async(req,res) => {
            try {
                const [idUser] = req.idUser               
                checkingLockDay(idUser)
                
                const isblock = await userIsBlocked(idUser)
                
                if (isblock) {
                    const dateIsPassedTest = await dateIsPassed(idUser)

                    if (dateIsPassedTest) {
                        //retirar block e retirar data de bloqueio e retornar isBlock: false
                    } else {
                        res.status(200).send({
                            isBlock: true
                        }) 
                    }
                } else {
                    res.status(200).send({
                        isBlock: false
                    })
                }
                
                
            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }
            

        })
}

module.exports = verifyUserBlock;