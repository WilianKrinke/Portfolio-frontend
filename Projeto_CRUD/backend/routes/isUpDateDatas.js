const isUpDateUserDataController = require("../controllers/isUpDateUserData.controller");

function isUpDateDatas(app){
    app.route('/is-update')
        .get(isUpDateUserDataController)
}

module.exports = isUpDateDatas;