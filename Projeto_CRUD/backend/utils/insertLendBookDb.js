const decryptLendDatas = require("./decryptLendDatas");

function insertLendBookDb(datas){
    console.log(datas)

    const teste = decryptLendDatas(datas)

    console.log(teste)
}

module.exports = insertLendBookDb;