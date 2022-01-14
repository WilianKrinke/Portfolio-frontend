const { response } = require('express')
const getMyFavoritesFromDb = require('../actions/getFavoritesActions/getFavoritesFromDb')

function getMyFavorites(app){
    app.route('/get-favorites').
        get(async (req, res) => {            
            try {
                const [idUser] = req.idUser
                const [userName] = req.userName

                const response = await getMyFavoritesFromDb(idUser)                
                res.status(200).send({userName: userName, responseObject: response})
                
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)
                return res.status(200).send(null)
            }
        })
}

module.exports = getMyFavorites;