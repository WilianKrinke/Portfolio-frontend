const decryptLendDatas = require("../decryptServices/decryptLendDatas");
const returnBookToDb = require("./returnBookToDb");

async function returnTheBook(returnBookDatasCripted){
    const returnBookDatas = decryptLendDatas(returnBookDatasCripted);     
    const isReturnTheBook = await returnBookToDb(returnBookDatas) 
    return isReturnTheBook;    
}

module.exports = returnTheBook;