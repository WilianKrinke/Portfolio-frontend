const removeFavoritoController = require("../controllers/removeFavortes.controller");

function removeFavorite(app){
    app.route('/remove-favorite')
        .post(removeFavoritoController)
}

module.exports = removeFavorite;