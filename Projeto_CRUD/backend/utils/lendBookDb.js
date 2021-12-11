const decryptLendDatas = require("./decryptLendDatas");
const haveLendBook = require("./haveLendBook");
const insertLendBookInDb = require("./insertLendBookInDb");

async function lendBookDb(datas){
    
    const bookDatas = decryptLendDatas(datas)
    const itHaveLendThisBook = await haveLendBook(bookDatas)

    if (itHaveLendThisBook.findSomeRegister == true) {
            const response = {
                isRegister: false,
                message: itHaveLendThisBook.message
            }

            return response;
        } else {                        
        const wasRegister = await insertLendBookInDb(bookDatas)

        const response = {
            isRegister: true,
            message: wasRegister.message
        }

        return response;        
    }
}

module.exports = lendBookDb;