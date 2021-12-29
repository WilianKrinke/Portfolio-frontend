var cryptoJS = require("crypto-js");

function tokenToEmail(response){
    const {email} = response;
    const hash = cryptoJS.AES.encrypt(email, process.env.SALT).toString();    
    const token = hash.replace('/', 'a')
    return token;    
}

module.exports = tokenToEmail;