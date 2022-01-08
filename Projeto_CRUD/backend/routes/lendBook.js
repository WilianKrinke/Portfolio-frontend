const lendBookDb = require("../actions/loanActions/lendBookDb")

const lendBook = (app) => {
    app.route('/book-lend')
        .post(async (req,res) => { 
            try {
                const response = await lendBookDb(req.body)

                if (response.isRegister === true) {
                    res.status(200).send(response)                    
                } else {
                    res.status(400).send(response)
                }

            } catch (error) {
                console.log(error)
                res.status(400).send(error)
            }        
        })
}

module.exports = lendBook;