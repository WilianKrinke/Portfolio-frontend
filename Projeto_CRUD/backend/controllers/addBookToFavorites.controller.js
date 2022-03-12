const addFavoritesAction = require("../services/insertFavoritesServices/addFavoritesAction");

async function addBookToFavoritesController(req, res, next) {
    try {
        const response = await addFavoritesAction(req.body)
        res.status(200).send(response)
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
    }
}

module.exports = addBookToFavoritesController;