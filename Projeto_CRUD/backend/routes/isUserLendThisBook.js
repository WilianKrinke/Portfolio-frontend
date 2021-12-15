const decryptLendDatas = require("../utils/decryptLendDatas");
const haveLendBook = require("../utils/haveLendBook");

const isUserLendThisBook = (app) => {
    app.route('/is-borrowed')
        .post((req,res) => {           
            
            const datas = decryptLendDatas(req.body)
            haveLendBook(datas)
                .then(response => {                    
                    res.send({
                        isUserLendThisBook: response.findSomeRegister,
                        message: response.message
                    })
                })
                .catch(error => {
                    res.send(error)
                })                     
        })
}

module.exports = isUserLendThisBook;