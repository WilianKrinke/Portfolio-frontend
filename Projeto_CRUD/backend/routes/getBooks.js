const borrowBooksFromUser = require('../actions/borrowBooksFromUser')
const {getDataBooks} = require('../actions/getBooks')

const getBooks = (app) => {
    app.route('/books-list')
        .get((req, res) => {
          try {
            
            getDataBooks()
            .then(response => {

              const responseObject = {
                  idUser: req.idUser[0],
                  userName: req.userName[0]
              }

              borrowBooksFromUser(response, responseObject.idUser)
                .then(responseBooks => {

                  res.send({
                    responseObject,
                    responseBooks
                  })

                })
                .catch(errBooks => {
                  console.log(errBooks)
                  res.send(false)
                })             
            })
            .catch(err => {
                console.log(err)
                res.send(false)
            })

          } catch (error) {
            console.log(error)
          }  
        })
}

module.exports = getBooks;