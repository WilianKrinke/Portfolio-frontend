const addFavoritesAction = require("../actions/favoritesActions/addFavoritesAction");

function addFavorite(app){
    app.route('/add-favorite')
        .post(async (req, res) => {            
            try {
                const response = await addFavoritesAction(req.body)
                res.send(response)
            } catch (error) {
                console.log(error)
                res.send(false)
            }
        })
}

module.exports = addFavorite;