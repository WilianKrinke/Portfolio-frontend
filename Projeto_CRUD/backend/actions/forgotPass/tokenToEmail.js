const jwt = require('jsonwebtoken')

function tokenToEmail(response){

    const {email} = response;
    const time = parseInt(process.env.TIME)
    
    const payload = {
        email
    }

    const token = jwt.sign(payload,process.env.SECRET,{
        expiresIn: time
    })

    return token;
}

module.exports = tokenToEmail;