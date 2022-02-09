const getMyFavoritesFromDb = require('../actions/getFavoritesActions/getFavoritesFromDb')

function getMyFavorites(app){
    app.route('/get-favorites').
        get(async (req, res) => {            
            try {
                const [idUser] = req.idUser
                const [userName] = req.userName

                const response = await getMyFavoritesFromDb(idUser)                
                res.status(200).send({userName: userName, responseObject: response})
                
            } catch (error) {                
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = getMyFavorites;