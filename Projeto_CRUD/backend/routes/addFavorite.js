const addFavoritesAction = require("../utils/addFavoritesAction");

function addFavorite(app){
    app.route('/add-favorite')
        .post((req, res) => {           

            addFavoritesAction(req.body)
            .then(response => {
                res.send(response)
            })
            .catch(err => {
                res.send(err)
            })
        })
}

module.exports = addFavorite;