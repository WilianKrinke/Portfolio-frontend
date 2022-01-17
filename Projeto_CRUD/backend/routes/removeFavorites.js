const removeFavoriteFromDb = require("../actions/favoritesActions/removeFavoriteFromDb");

function removeFavorite(app){
    app.route('/remove-favorite')
        .post(async (req, res) => {
            try {
                const response = await removeFavoriteFromDb(req.body)
                res.send(response);                
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }

        })
}

module.exports = removeFavorite;