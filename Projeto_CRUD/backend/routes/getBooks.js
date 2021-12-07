const {getDataBooks} = require('../utils/getBooks')

const getBooks = (app) => {
    app.route('/books-list/:id?')
        .get((req, res) => {
            
          getDataBooks()
          .then(response => {

            const responseObject = {
                idUser: req.idUser[0],
                userName: req.userName[0],
                isAdm: req.isAdm[0],
                isBlock: req.isBlock[0]
            }

            res.json({
                responseObject,
                response
            })
          })
          .catch(err => {
              console.log(err)
              res.send(false)
          })
        })
        .delete((req, res) => {
            res.send('ROTA PARA DELETAR LIVRO')
        })

}

module.exports = getBooks;