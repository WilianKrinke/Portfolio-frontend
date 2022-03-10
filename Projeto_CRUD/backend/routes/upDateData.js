const upDateUserDataController = require("../controllers/upDateUserData.controller");

function upDateData(app){
    app.route('/update-data')
        .post(upDateUserDataController)
}

module.exports = upDateData;