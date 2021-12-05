const {getDataBooks} = require('../utils/getBooks')

const getBooks = (app) => {
    app.route('/books-list/:id?')
        .get((req, res) => {
          getDataBooks()
          .then(response => {
              res.json(response)
          })
          .catch(err => {
              console.log(err)
              res.json(false)
          })
        })
        .delete((req, res) => {
            res.send('ROTA PARA DELETAR LIVRO')
        })

}

module.exports = getBooks;