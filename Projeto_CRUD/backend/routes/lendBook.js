const lendBookController = require("../controllers/lendBook.controller");

const lendBook = (app) => {
    app.route('/book-lend')
        .post(lendBookController)
}

module.exports = lendBook;