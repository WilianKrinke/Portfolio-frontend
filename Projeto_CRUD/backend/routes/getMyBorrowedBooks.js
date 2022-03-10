const getMyBorrowedBooksController = require("../controllers/getMyBorrowedBooks.controller");

function getMyBorrowedBooks(app){
    app.route('/my-borrowed-book-list')
        .get(getMyBorrowedBooksController)
}

module.exports = getMyBorrowedBooks;