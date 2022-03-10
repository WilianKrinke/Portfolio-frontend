const addBookToFavoritesController = require("../controllers/addBookToFavorites.controller");

function addFavorite(app){
    app.route('/add-favorite')
        .post(addBookToFavoritesController)     
}

module.exports = addFavorite;