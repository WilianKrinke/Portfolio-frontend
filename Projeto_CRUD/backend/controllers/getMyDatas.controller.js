const getDatas = require("../repository/getMyDatasRepository/getDatas")

async function getMyDatasController(req, res, next) {
    try {
        const idUser = req.idUser
        const userName = req.userName

        const response = await getDatas(idUser)                
        res.status(200).send({userName, userDatas: response[0]})               

    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = getMyDatasController;