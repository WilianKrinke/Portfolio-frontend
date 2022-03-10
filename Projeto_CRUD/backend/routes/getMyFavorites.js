const getMyFavoritesBookController = require('../controllers/getMyFavoritesBooks.controller');

function getMyFavorites(app){
    app.route('/get-favorites')
        .get(getMyFavoritesBookController)
}

module.exports = getMyFavorites;