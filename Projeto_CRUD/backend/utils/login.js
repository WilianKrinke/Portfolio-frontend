const comparePass = require("./comparePass");
const getPass = require("./getPass");

async function login (datas){
    console.log(datas)
    const pass = await getPass(datas.userName)
    comparePass(datas.pass,pass)
}

module.exports = login;