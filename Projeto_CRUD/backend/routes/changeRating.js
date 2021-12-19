const changeRatingBook = require("../actions/ratingActions/changeRatingBook");

function changeRating(app) {
    app.route('/change-rating/:rating/:idbook')
        .put(async (req, res) => {
            const response = await changeRatingBook(req.params);
            res.send(response)
        })
}

module.exports = changeRating;