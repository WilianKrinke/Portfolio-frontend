const jwt = require('jsonwebtoken')

function generateToken(userDatasFromDb){
    const idUser = userDatasFromDb.idUser
    const userName = userDatasFromDb.userName
    const time = parseInt(process.env.TIME)
    
    const payload = {
        idUser,
        userName,
    }

    const token = jwt.sign(payload,process.env.SECRET,{
        expiresIn: time
    })

    return token;
}

module.exports = generateToken;