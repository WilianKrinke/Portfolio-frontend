const returnTheBook = require("../actions/returnBookActions/returnTheBook");

const returnBook = (app) => {
    app.route('/return-book')
        .post(async (req,res) => {              
            try {
                const response = await returnTheBook(req.body)

                if (response.isReturnTheBook === true) {
                    res.status(200).send(response)                    
                } else {
                    res.status(400).send(response)  
                }
            } catch (e) {
                const error = new Error(e)
                console.log(error.message)          
                res.status(500).send(error.message)
            }                      
        })
}

module.exports = returnBook;