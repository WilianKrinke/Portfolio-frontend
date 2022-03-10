const changeBookRatingController = require("../controllers/changeBookRating.controller");

function changeRating(app) {
    app.route('/change-rating')
        .post(changeBookRatingController)
}

module.exports = changeRating;