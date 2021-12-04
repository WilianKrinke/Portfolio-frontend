const comparePass = require("./comparePass");
const getPass = require("./getPass");

async function login (datas){
    const pass = await getPass(datas.userName)
    const isSamePass = comparePass(datas.pass,pass)

    if (isSamePass == true) {
        return true
    } else {
        return false
    }
}

module.exports = login;