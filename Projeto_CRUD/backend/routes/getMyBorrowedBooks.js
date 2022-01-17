const getBorrowedBooksActions = require("../actions/getBorrowedBooksActions/getBorrowedBooks");

function getMyBorrowedBooks(app){
    app.route('/my-borrowed-book-list')
        .get(async (req, res) => {            
            try {                
                const userId = req.idUser[0]
                const userName = req.userName[0]
                const response = await getBorrowedBooksActions(userId);

                if (response !== null) {
                    res.status(200).send({
                        idUser: userId,
                        userName: userName,
                        responseObject: response
                    })
                } else {
                    res.status(400).send({
                        idUser: null,
                        userName: null,
                        responseObject: false
                    })
                }
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }
        })
}

module.exports = getMyBorrowedBooks;