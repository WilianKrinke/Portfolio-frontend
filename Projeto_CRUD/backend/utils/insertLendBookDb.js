const decryptLendDatas = require("./decryptLendDatas");

function insertLendBookDb(datas){
    console.log(datas)

    const bookDatas = decryptLendDatas(datas)

    console.log(bookDatas)
}

module.exports = insertLendBookDb;