const addFavoritesAction = require("../actions/favoritesActions/addFavoritesAction");

function addFavorite(app){
    app.route('/add-favorite')
        .post(async (req, res) => {            
            try {
                const response = await addFavoritesAction(req.body)
                res.send(response)
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
        
}

module.exports = addFavorite;