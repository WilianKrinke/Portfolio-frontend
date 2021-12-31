const bcrypt = require('bcryptjs')

function tokenToEmail(response){
    const {email} = response;
    const hash = bcrypt.hashSync(email, 12);

    const token = hash.split('/').join('a');    
    return token;    
}

module.exports = tokenToEmail;