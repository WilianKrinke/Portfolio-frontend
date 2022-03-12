const decryptLendDatas = require("../decryptServices/decryptLendDatas");
const insertLendBookInDb = require("./insertLendBookInDb");

async function lendBookDb(datas){ 
    const bookDatas = decryptLendDatas(datas)                     
    const wasRegister = await insertLendBookInDb(bookDatas)

    if (wasRegister.isRegister === true) {
        const response = {
            isRegister: true,
            message: wasRegister.message
        }        
        return response;

    } else {
        throw new Error('Server Error - lendBookDb')
    }
}

module.exports = lendBookDb;