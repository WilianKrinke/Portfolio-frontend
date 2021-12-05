const comparePass = require("./comparePass");
const getPass = require("./getPass");

async function login (datas){
    const userDatasFromDb = await getPass(datas.userName)
    const arrWithToken = comparePass(datas.pass, userDatasFromDb)

    if (arrWithToken[0] == true) {
        return arrWithToken
    } else {
        return false
    }
}

module.exports = login;