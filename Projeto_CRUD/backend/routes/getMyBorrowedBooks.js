const getBorrowedBooksActions = require("../actions/getBorrowedBooksActions/getBorrowedBooks");

function getMyBorrowedBooks(app){
    app.route('/my-borrowed-book-list')
        .get(async (req, res) => {            
            try {                
                const userId = req.idUser[0]
                const response = await getBorrowedBooksActions();
            } catch (error) {
                
            }


            res.send({
                option: true,
                options: true
            })
        })
}

module.exports = getMyBorrowedBooks;