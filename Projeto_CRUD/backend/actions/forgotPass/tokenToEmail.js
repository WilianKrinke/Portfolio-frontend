var cryptoJS = require("crypto-js");

function tokenToEmail(response){
    const {email} = response;
    const token = cryptoJS.AES.encrypt(email, process.env.SALT).toString();    
    return token;
}

module.exports = tokenToEmail;