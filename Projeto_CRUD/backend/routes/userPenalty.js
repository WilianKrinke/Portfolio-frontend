const userPenaltyAction = require("../actions/userPenaltyAction/userPenaltyAction")

function userPenalty(app) {
    app.route('/apply-user-penalty')
        .post(async(req,res) => {
            try {
                const [idUser] = req.idUser

                const userWasBlocked = await userPenaltyAction(idUser)
                
                res.status(200).send({userWasBlocked})


            } catch (error) {
                console.log(error)
                res.status(500).send(error.message)
            }
        })
}

module.exports = userPenalty;