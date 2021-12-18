function changeRating(app) {
    app.route('/change-rating/:rating')
        .put((req, res) => {
            console.log(req.params.rating)

            
        })
}

module.exports = changeRating;