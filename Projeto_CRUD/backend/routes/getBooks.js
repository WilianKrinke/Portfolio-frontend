const getBookListController = require('../controllers/getBookList.controller')

const getBooks = (app) => {
    app.route('/books-list/:category?')
        .get(getBookListController)
}

module.exports = getBooks;