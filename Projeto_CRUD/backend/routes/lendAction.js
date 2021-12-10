const insertLendBookDb = require("../utils/insertLendBookDb")

const lendAction = (app) => {
    app.route('/book-lend')
        .post((req,res) => {
            

            lendBookDb(req.body)

            res.send(true)
        })
}

module.exports = lendAction;