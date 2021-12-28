const bcrypt = require('bcryptjs')

function tokenToEmail(response){

    const {email} = response;
    const secret = parseInt(process.env.SECRET_CRYPT)
    const salt =  bcrypt.genSaltSync(secret);

    const token =  bcrypt.hashSync(email, salt);

    return token;
}

module.exports = tokenToEmail;