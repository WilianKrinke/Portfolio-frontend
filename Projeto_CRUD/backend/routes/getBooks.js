

const getBooks = (app) => {
    app.route('/books-list/:id?')
        .get((req, res) => {
            res.send('ROTA DE LISTA DE LIVROS')
        })
        .delete((req, res) => {
            res.send('ROTA PARA DELETAR LIVRO')
        })

}

module.exports = getBooks;