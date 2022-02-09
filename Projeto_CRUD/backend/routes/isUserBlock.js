const isUserBlockedVerify = require("../actions/userBlockedActions/isUserBlocked")

function isUserBlock(app){
    app.route('/is-user-blocked')
        .get(async(req,res) => {
            try {
                const [idUser] = req.idUser               
                const response = await isUserBlockedVerify(idUser)

                if (response === false) {
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

module.exports = isUserBlock;