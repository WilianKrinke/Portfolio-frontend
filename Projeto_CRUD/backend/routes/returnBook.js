const returnTheBook = require("../actions/returnTheBook");

const returnBook = (app) => {
    app.route('/return-book')
        .post((req,res) => {           
            
            returnTheBook(req.body)
            .then(response => {
                res.send(response)
            })
            .catch(error => {
                res.send(error)
            })
                      
        })
}

module.exports = returnBook;