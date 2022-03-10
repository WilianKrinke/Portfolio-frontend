const getMyDatasController = require("../controllers/getMyDatas.controller")

function getMyDatas(app) {
    app.route('/my-datas')
        .get(getMyDatasController)
}

module.exports = getMyDatas