const decryptLendDatas = require("./decryptLendDatas");
const returnBookToDb = require("./returnBookToDb");

function returnTheBook(returnBookDatasCripted){
    const returnBookDatas = decryptLendDatas(returnBookDatasCripted);

    returnBookToDb(returnBookDatas)
}

module.exports = returnTheBook;