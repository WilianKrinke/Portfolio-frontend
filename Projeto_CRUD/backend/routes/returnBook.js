const returnBookController = require("../controllers/returnBook.controller");

const returnBook = (app) => {
    app.route('/return-book')
        .post(returnBookController)
}

module.exports = returnBook;