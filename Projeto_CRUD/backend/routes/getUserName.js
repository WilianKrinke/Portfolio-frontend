const getUserNameController = require("../controllers/getUserName.controller");

function getUserName(app){
    app.route('/get-user-name')
        .get(getUserNameController)
}

module.exports = getUserName;