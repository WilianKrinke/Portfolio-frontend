const controllerUpdateData = require("../actions/upDateActions/controllerUpdateData");
const decryptData = require("../actions/upDateActions/decryptData");

function upDateData(app){
    app.route('/update-data')
        .post(async(req, res) => {
            console.log(req.body)
            const {encryptedData, option} = req.body
            const data = decryptData(encryptedData)

            const response = controllerUpdateData(data,option)

            
        })
}

module.exports = upDateData;