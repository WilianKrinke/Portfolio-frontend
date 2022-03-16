const comparePass = require("./comparePass");
const getPass = require("../../repository/signInRepository/getPass.repository");
const generateToken = require("../../auth/generateToken");

async function login (datas){
    const userDatasFromDb = await getPass(datas.userName)
    const test = await comparePass(datas.pass, userDatasFromDb)

    if (test) {
        const token = generateToken(userDatasFromDb)

        const objectAuth = {
            authenticate: test,
            token: token
        }
        return objectAuth

    } else {
        throw new Error('Incorrect username or password')
    }   
}

module.exports = login;