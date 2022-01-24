const removeFavoriteFromDb = require("../actions/favoritesActions/removeFavoriteFromDb");

function removeFavorite(app){
    app.route('/remove-favorite')
        .post(async (req, res) => {
            try {
                const response = await removeFavoriteFromDb(req.body)
                res.status(200).send(response);                
            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = removeFavorite;