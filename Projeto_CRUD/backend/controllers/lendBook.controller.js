const lendBookDb = require("../services/loanBookServices/lendBookDb.services")

async function lendBookController(req, res, next) {
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
        next(error)
    }
}

module.exports = lendBookController;