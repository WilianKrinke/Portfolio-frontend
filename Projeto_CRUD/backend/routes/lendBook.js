const lendBookDb = require("../actions/loanActions/lendBookDb")

const lendBook = (app) => {
    app.route('/book-lend')
        .post(async (req,res) => { 
            try {
                const response = await lendBookDb(req.body)

                if (response.isRegister === true) {
                    res.status(200).send(response)                    
                } else {
                    throw new Error('Server Error - lendBook')
                }

            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }        
        })
}

module.exports = lendBook;