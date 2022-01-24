const getDatas = require("../actions/getDatasActions/getDatas")

function getMyDatas(app) {
    app.route('/my-datas')
        .get(async (req, res) => {
            try {
                const [idUser] = req.idUser
                const [userName] = req.userName

                const response = await getDatas(idUser)                
                res.status(200).send({userName, userDatas: response[0]})               

            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = getMyDatas