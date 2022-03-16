const getBorrowedBooks = require("../repository/getMyBorrowedBooksRepository/getBorrowedBooks");

async function getMyBorrowedBooksController(req, res, next) {
    try {                
        const idUser = req.idUser
        const userName = req.userName

        const response = await getBorrowedBooks(idUser);
        
        res.status(200).send({
            idUser: idUser,
            userName: userName,
            responseObject: response
        })
        
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = getMyBorrowedBooksController;