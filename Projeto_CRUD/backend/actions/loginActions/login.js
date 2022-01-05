const comparePass = require("./comparePass");
const getPass = require("./getPass");

async function login (datas){
    const userDatasFromDb = await getPass(datas.userName)
    const objectAuth = comparePass(datas.pass, userDatasFromDb)

    if  (objectAuth.authenticate === true) {
        return objectAuth
    } else {
        return objectAuth
    }
}

module.exports = login;