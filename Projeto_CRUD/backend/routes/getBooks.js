const hasborrowBooksFromUser = require('../actions/getBookDatasActions/hasborrowBooksFromUser')
const getDataBooks = require('../actions/getBookDatasActions/getDataBooks')
const hasFavoriteBooks = require('../actions/getBookDatasActions/hasFavoriteBooks')
const isValidWords = require('../validations/isValidWords/isValidWords')

const getBooks = (app) => {
    app.route('/books-list/:category?')
        .get(async (req, res) => {
          try { 
            const [idUser] = req.idUser
            const [userName] = req.userName
                                    
            const isValid = isValidWords([req.params.category])
            
            if (isValid !== true) {
              throw new Error('Sql Injection')
            }            
            
            const datasBooks = await getDataBooks(req.params.category) 
            const booksWithBorrows = await hasborrowBooksFromUser(datasBooks, idUser)
            const responseBooks = await hasFavoriteBooks(booksWithBorrows, idUser)

            res.status(200).send({
              idUser,
              userName,
              responseBooks,
            })

          } catch (error) {   
            console.log(error.message)      
            res.status(500).send(error.message)
          }  
        })
}

module.exports = getBooks;