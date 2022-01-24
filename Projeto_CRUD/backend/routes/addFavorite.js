const addFavoritesAction = require("../actions/favoritesActions/addFavoritesAction");

function addFavorite(app){
    app.route('/add-favorite')
        .post(async (req, res) => {            
            try {
                const response = await addFavoritesAction(req.body)
                res.status(200).send(response)
            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
        
}

module.exports = addFavorite;