function userPenalty(app) {
    app.route('/apply-user-penalty')
        .post(async(req,res) => {
            console.log('Chegou Requisição')
        })
}

module.exports = userPenalty;