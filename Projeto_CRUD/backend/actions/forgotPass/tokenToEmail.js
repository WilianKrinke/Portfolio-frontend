const crypto = require('crypto')

function tokenToEmail(){
    const token = crypto.randomBytes(20).toString('hex')
    return token;
}

module.exports = tokenToEmail;