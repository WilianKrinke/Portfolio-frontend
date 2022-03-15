const addFavoritesService = require("../services/insertFavoritesServices/addFavoritesService");

async function addBookToFavoritesController(req, res, next) {
    try {
        const response = await addFavoritesService(req.body)
        res.status(200).send(response)
    } catch (error) {
        console.log(error.message)         
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = addBookToFavoritesController;