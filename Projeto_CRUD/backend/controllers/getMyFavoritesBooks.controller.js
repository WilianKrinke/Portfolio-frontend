const getMyFavoritesFromDb = require('../repository/getMyFavoritesBooksRepository/getFavoritesFromDb')

async function getMyFavoritesBookController(req, res, next) {
    try {
        const idUser = req.idUser
        const userName = req.userName

        const response = await getMyFavoritesFromDb(idUser)                
        res.status(200).send({userName: userName, responseObject: response})
        
    } catch (error) {                
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = getMyFavoritesBookController;