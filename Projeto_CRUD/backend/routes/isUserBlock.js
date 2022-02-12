const isUserBlockedVerify = require("../actions/userBlockedActions/isUserBlockedVerify")

function isUserBlock(app){
    app.route('/is-user-blocked')
        .get(async(req,res) => {
            try {
                const [idUser] = req.idUser               
                const {isblock,blocked_days} = await isUserBlockedVerify(idUser)

                if (isblock === false) {
                    res.status(200).send({
                        isBlock: false,
                        blocked_days
                    })
                } else {
                    res.status(200).send({
                        isBlock: true,
                        blocked_days
                    })
                }                
                
            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }
            

        })
}

module.exports = isUserBlock;