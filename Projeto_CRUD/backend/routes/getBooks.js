const borrowBooksFromUser = require('../actions/getBookDatasActions/borrowBooksFromUser')
const {getDataBooks} = require('../actions/getBookDatasActions/getDataBooks')
const insertFavoriteBooks = require('../actions/getBookDatasActions/insertFavoriteBooks')

const getBooks = (app) => {
    app.route('/books-list')
        .get(async (req, res) => {
          try { 
            const responseObject = {
              idUser: req.idUser[0],
              userName: req.userName[0]
            }

            const datasBooks = await getDataBooks() 
            const booksWithBorrows = await borrowBooksFromUser(datasBooks, responseObject.idUser)
            const responseBooks = await insertFavoriteBooks(booksWithBorrows, responseObject.idUser)

            res.send({
              responseObject,
              responseBooks
            })

          } catch (error) {            
            res.send(error)
          }  
        })
}

module.exports = getBooks;