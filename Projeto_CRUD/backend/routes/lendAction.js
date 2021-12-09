

const lendAction = (app) => {
    app.route('/book-lend/:idBook&:bookName&:userId&:userName')
        .get((req,res) => {
            console.log(req.params)

            res.send(true)
        })
}

module.exports = lendAction;