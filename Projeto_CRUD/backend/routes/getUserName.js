function getUserName(app){
    app.route('/get-user-name')
        .get(async(req,res) => {
            try {
                res.status(200).send({userName: req.userName[0]})
            } catch (error) {
                res.status(500).send(error.message)
            }
        })
}

module.exports = getUserName;