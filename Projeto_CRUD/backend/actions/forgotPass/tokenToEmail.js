var cryptoJS = require("crypto-js");

function tokenToEmail(response){
    const {email} = response;
    const hash = cryptoJS.AES.encrypt(email, process.env.SALT).toString();
    
    const token = hash.split('/').join('a')
    
    return token;    
}

module.exports = tokenToEmail;