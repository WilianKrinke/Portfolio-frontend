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
            } catch (error) {
                console.log(error)
                res.status(400).send(error) 
            }                      
        })
}

module.exports = returnBook;