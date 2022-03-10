const removeFavoriteFromDb = require("../actions/favoritesActions/removeFavoriteFromDb");

async function removeFavoritoController(req, res, next) {
    try {
        const response = await removeFavoriteFromDb(req.body)
        res.status(200).send(response);                
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
    }
}

module.exports = removeFavoritoController;