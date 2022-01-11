const decryptLendDatas = require("../decryptActions/decryptLendDatas");
const returnBookToDb = require("./returnBookToDb");

async function returnTheBook(returnBookDatasCripted){
    const returnBookDatas = decryptLendDatas(returnBookDatasCripted);  
    
    console.log(returnBookDatas)
    
    const isReturnTheBook = await returnBookToDb(returnBookDatas) 
    return isReturnTheBook;    
}

module.exports = returnTheBook;