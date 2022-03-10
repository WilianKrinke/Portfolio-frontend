const verifyUserBlockController = require("../controllers/verifyUserBlock.controller")

function verifyUserBlock(app){
    app.route('/user-blocked')
        .get(verifyUserBlockController)
}

module.exports = verifyUserBlock;