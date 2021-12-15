const addFavoritesAction = require("../utils/addFavoritesAction");

function addFavorite(app){
    app.route('/add-favorite')
        .post((req, res) => {
            console.log(req.body)

            addFavoritesAction(req.body)
        })
}

module.exports = addFavorite;