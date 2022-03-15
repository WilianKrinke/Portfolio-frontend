const removeFavoriteFromDb = require("../repository/removeFavoritesRepository/removeFavoriteFromDb");

async function removeFavoriteController(req, res, next) {
    try {
        const response = await removeFavoriteFromDb(req.body)
        res.status(200).send(response);                
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = removeFavoriteController;