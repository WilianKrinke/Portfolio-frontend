function getMyBorrowedBooks(app){
    app.route('/my-borrowed-book-list')
        .get(async (req, res) => {
            console.log('CHAMOU ROTA MEUS LIVROS EMPRESTADOS')
            res.send(true)
        })
}

module.exports = getMyBorrowedBooks;