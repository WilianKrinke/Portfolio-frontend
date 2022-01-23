const controllerUpdateData = require("../actions/upDateActions/controllerUpdateData");
const decryptData = require("../actions/upDateActions/decryptData");

function upDateData(app){
    app.route('/update-data')
        .post(async(req, res) => {
            try {
                const {encryptedData, option} = req.body
                const data = decryptData(encryptedData)
    
                const response = controllerUpdateData(data,option)
                console.log(response)
                
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)
                res.status(500).send(error.message)
            }

            
        })
}

module.exports = upDateData;