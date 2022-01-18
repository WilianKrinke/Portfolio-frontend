const borrowBooksFromUser = require('../actions/getBookDatasActions/borrowBooksFromUser')
const getDataBooks = require('../actions/getBookDatasActions/getDataBooks')
const insertFavoriteBooks = require('../actions/getBookDatasActions/insertFavoriteBooks')
const isValidWords = require('../validations/isValidWords/isValidWords')

const getBooks = (app) => {
    app.route('/books-list/:category?')
        .get(async (req, res) => {
          try { 
            const userData = {
              idUser: req.idUser[0],
              userName: req.userName[0]
            }
            
            const isValid = isValidWords([req.params.category])
            if (isValid !== true) {
              throw new Error('Sql Injection')
            }            
            
            const datasBooks = await getDataBooks(req.params.category) 
            const booksWithBorrows = await borrowBooksFromUser(datasBooks, userData.idUser)
            const responseBooks = await insertFavoriteBooks(booksWithBorrows, userData.idUser)

            res.status(200).send({
              idUser: userData.idUser,
              userName: userData.userName,
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