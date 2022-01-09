const borrowBooksFromUser = require('../actions/getBookDatasActions/borrowBooksFromUser')
const getDataBooks = require('../actions/getBookDatasActions/getDataBooks')
const insertFavoriteBooks = require('../actions/getBookDatasActions/insertFavoriteBooks')

const getBooks = (app) => {
    app.route('/books-list/:category?')
        .get(async (req, res) => {
          try { 
            const responseObject = {
              idUser: req.idUser[0],
              userName: req.userName[0]
            }
            
            const datasBooks = await getDataBooks(req.params.category) 
            const booksWithBorrows = await borrowBooksFromUser(datasBooks, responseObject.idUser)
            const responseBooks = await insertFavoriteBooks(booksWithBorrows, responseObject.idUser)

            res.status(200).send({
              idUser: responseObject.idUser,
              userName: responseObject.userName,
              responseBooks,
            })

          } catch (e) {  
            const error = new Error(e)
            console.log(error.message)          
            res.status(500).send(error.message)
          }  
        })
}

module.exports = getBooks;