const {getDataBooks} = require('../utils/getBooks')

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
  
              res.json({
                  responseObject,
                  response
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