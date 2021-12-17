const removeFavoriteFromDb = require("../actions/favoritesActions/removeFavoriteFromDb");

function removeFavorite(app){
    app.route('/remove-favorite')
        .post(async (req, res) => {
            try {
                const response = await removeFavoriteFromDb(req.body)
                res.send(response);                
            } catch (error) {
                res.send(error)
            }

        })
}

module.exports = removeFavorite;