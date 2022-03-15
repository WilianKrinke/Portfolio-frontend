const bcrypt = require('bcryptjs')

function generateTokenToEmail(){
    const hash = bcrypt.hashSync(process.env.TOKEN_EMAIL, 12);

    const token = hash.split('/').join('a');
    
    return token;    
}

module.exports = generateTokenToEmail;