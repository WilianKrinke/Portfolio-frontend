const decryptLendDatas = require("../decryptActions/decryptLendDatas");
const insertLendBookInDb = require("./insertLendBookInDb");

async function lendBookDb(datas){    
    try {
        const bookDatas = decryptLendDatas(datas)                     
        const wasRegister = await insertLendBookInDb(bookDatas)

        if (wasRegister.isRegister === true) {
            const response = {
                isRegister: true,
                message: wasRegister.message
            }        
            return response;

        } else {
            const response = {
                isRegister: false,
                message: wasRegister.message
            }
        
            return response;
        }
    
        
    } catch (error) {
        console.log(error)
        const response = {
                isRegister: false,
                message: error
            }
        
        return response;
    }


}

module.exports = lendBookDb;