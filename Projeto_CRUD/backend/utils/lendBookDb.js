const decryptLendDatas = require("./decryptLendDatas");
const haveLendBook = require("./haveLendBook");
const insertLendBookInDb = require("./insertLendBookInDb");

async function lendBookDb(datas){        
    const bookDatas = decryptLendDatas(datas) 
    const wasRegister = await insertLendBookInDb(bookDatas)

    console.log(wasRegister)

    const response = {
        isRegister: true,
        message: wasRegister.message
    }

    return response; 
}

module.exports = lendBookDb;