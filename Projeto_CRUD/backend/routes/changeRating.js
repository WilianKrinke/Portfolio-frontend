const changeRatingBook = require("../actions/ratingActions/changeRatingBook");

function changeRating(app) {
    app.route('/change-rating')
        .post(async (req, res) => {
            try {
                const response = await changeRatingBook(req.body); 
                res.send(response)                
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)
                return error;
            }
        })
}

module.exports = changeRating;