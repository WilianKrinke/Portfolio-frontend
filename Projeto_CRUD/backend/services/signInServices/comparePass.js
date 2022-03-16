const decripPassDb = require("../decryptServices/decripPassDb");
const decryptData = require("../decryptServices/decryptData");

async function comparePass(passEncripted, userDatasFromDb) {   
    const decriptPass = decryptData(passEncripted)
    const test = decripPassDb(decriptPass,userDatasFromDb.pass)
    return test
}

module.exports = comparePass;