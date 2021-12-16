const lendBookDb = require("../actions/lendBookDb")

const lendAction = (app) => {
    app.route('/book-lend')
        .post((req,res) => {           

            lendBookDb(req.body)
                .then(response => {
                    res.send(response)
                })
                .catch(err => {
                    console.log(err)
                    res.send(err)
                })            
        })
}

module.exports = lendAction;