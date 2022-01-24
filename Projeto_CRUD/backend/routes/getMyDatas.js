const getDatas = require("../actions/getDatasActions/getDatas")

function getMyDatas(app) {
    app.route('/my-datas')
        .get(async (req, res) => {
            try {
                const idUser = req.idUser[0]
                const userName = req.userName[0]

                const response = await getDatas(idUser)

                if (response !== null) {
                    res.status(200).send({userName, userDatas: response[0]})
                } else {
                    res.status(400).send()
                }

            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = getMyDatas