const CryptoJS = require('crypto-js')

function decryptData(encryptData){
    const decypherText = CryptoJS.AES.decrypt(encryptData, process.env.SALT2).toString(CryptoJS.enc.Utf8)

    return decypherText;
}

module.exports = decryptData;