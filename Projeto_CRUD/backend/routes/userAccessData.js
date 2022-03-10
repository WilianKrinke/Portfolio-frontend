const userAccessDataController = require("../controllers/userAccessData.controller");

function userAccessData(app){
    app.route('/access-user')
        .get(userAccessDataController)
}

module.exports = userAccessData;