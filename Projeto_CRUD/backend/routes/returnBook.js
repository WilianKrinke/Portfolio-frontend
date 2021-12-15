const returnTheBook = require("../utils/returnTheBook");

const returnBook = (app) => {
    app.route('/return-book')
        .post((req,res) => {           
            console.log(req.body)

            returnTheBook(req.body)
                      
        })
}

module.exports = returnBook;