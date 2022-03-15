const removeFavoriteController = require("../controllers/removeFavorite.controller");

function removeFavorite(app){
    app.route('/remove-favorite')
        .post(removeFavoriteController)
}

module.exports = removeFavorite;