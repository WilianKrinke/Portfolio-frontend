const CryptoJS = require('crypto-js')

function decryptData(encryptPass){    
    const decypherText = CryptoJS.AES.decrypt(encryptPass, process.env.SECRET3)    
    const originalText = decypherText.toString(CryptoJS.enc.Utf8)    
    return originalText;
}

module.exports = decryptData;