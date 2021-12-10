const decryptLendDatas = require("./decryptLendDatas");
const haveLendBook = require("./haveLendBook");
const insertLendBookInDb = require("./insertLendBookInDb");

function lendBookDb(datas){
    
    const bookDatas = decryptLendDatas(datas)
    const itHaveLendThisBook = haveLendBook(bookDatas)

    console.log(itHaveLendThisBook)

    if (itHaveLendThisBook[0] == true) {
        //já emprestou este livro
    } else {
        //não emprestou este livro
        insertLendBookInDb()
    }
}

module.exports = lendBookDb;