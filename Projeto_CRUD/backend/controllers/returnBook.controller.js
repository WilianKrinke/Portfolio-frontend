const returnTheBook = require("../actions/returnBookActions/returnTheBook")

async function returnBookController(req, res, next) {
    try {
        const response = await returnTheBook(req.body)

        if (response.isReturnTheBook === true) {
            res.status(200).send(response)                    
        } else {
            throw new Error('Server Error - returnBook')
        }
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
    }
}

module.exports = returnBookController;