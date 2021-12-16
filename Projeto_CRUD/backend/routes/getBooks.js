const borrowBooksFromUser = require('../actions/borrowBooksFromUser')
const {getDataBooks} = require('../actions/getBookDatasActions/getDataBooks')

const getBooks = (app) => {
    app.route('/books-list')
        .get(async (req, res) => {
          try { 
            const responseObject = {
              idUser: req.idUser[0],
              userName: req.userName[0]
            }

            const response = await getDataBooks() 
            const responseBooks = await borrowBooksFromUser(response, responseObject.idUser)

            res.send({
              responseObject,
              responseBooks
            })

          } catch (error) {
            console.log(error)
            res.send(false)
          }  
        })
}

module.exports = getBooks;