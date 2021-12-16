const returnTheBook = require("../actions/returnBookActions/returnTheBook");

const returnBook = (app) => {
    app.route('/return-book')
        .post(async (req,res) => {              
            try {
                const response = await returnTheBook(req.body)
                res.send(response)
            } catch (error) {
                console.log(error)
                res.send(false)
            }                      
        })
}

module.exports = returnBook;