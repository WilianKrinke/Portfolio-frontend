const returnTheBook = require("../actions/returnBookActions/returnTheBook");

const returnBook = (app) => {
    app.route('/return-book')
        .post(async (req,res) => {              
            try {

                console.log(req.body)

                const response = await returnTheBook(req.body)
                res.send(response)
            } catch (error) {
                res.send(error)
            }                      
        })
}

module.exports = returnBook;