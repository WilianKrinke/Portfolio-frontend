const verifyUpDateData = require("../actions/isUpdateActions/verifyUpDateData");

function isUpDateDatas(app){
    app.route('/is-update')
        .get(async(req, res) => {
            try {
                const [idUser] = req.idUser
                const response = await verifyUpDateData(idUser)
                
                if (response === false) {
                    const objectResponse = {
                        isUpDated: false
                    }
                    
                    res.status(200).send(objectResponse)
                } else {
                    const objectResponse = {
                        isUpDated: true
                    }
                    
                    res.status(200).send(objectResponse)
                }

            } catch (error) {
                res.status(500).send(error.message)
            }
        })
}

module.exports = isUpDateDatas;