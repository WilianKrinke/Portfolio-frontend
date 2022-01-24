const getBorrowedBooksActions = require("../actions/getBorrowedBooksActions/getBorrowedBooks");

function getMyBorrowedBooks(app){
    app.route('/my-borrowed-book-list')
        .get(async (req, res) => {            
            try {                
                const [idUser] = req.idUser
                const [userName] = req.userName

                const response = await getBorrowedBooksActions(idUser);
                
                res.status(200).send({
                    idUser: idUser,
                    userName: userName,
                    responseObject: response
                })
                
            } catch (error) {
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = getMyBorrowedBooks;