const decryptLendDatas = require("./decryptLendDatas");
const insertLendBookInDb = require("./insertLendBookInDb");

async function lendBookDb(datas){
    
    const bookDatas = decryptLendDatas(datas)
                     
    const wasRegister = await insertLendBookInDb(bookDatas)

    const response = {
        isRegister: true,
        message: wasRegister.message
    }

    return response;
}

module.exports = lendBookDb;