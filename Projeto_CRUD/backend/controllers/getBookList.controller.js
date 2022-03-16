const getDataBooks = require("../services/getBookDatasServices/getDataBooks")
const hasborrowBooksFromUser = require("../services/getBookDatasServices/hasborrowBooksFromUser")
const hasFavoriteBooks = require("../services/getBookDatasServices/hasFavoriteBooks")
const isValidWords = require("../validations/isValidWords/isValidWords")

async function getBookListController(req, res, next) {
    try { 
        const idUser = req.idUser
        const userName = req.userName
                                
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
        next(error)
      } 
}

module.exports = getBookListController;