const lendBookDb = require("../actions/lendBookDb")

const lendAction = (app) => {
    app.route('/book-lend')
        .post(async (req,res) => { 
            try {
                const response = await lendBookDb(req.body)
                res.send(response)
            } catch (error) {
                console.log(error)
                res.send(false)
            }        
        })
}

module.exports = lendAction;