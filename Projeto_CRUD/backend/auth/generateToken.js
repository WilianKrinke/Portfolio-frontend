const jwt = require('jsonwebtoken')

function generateToken(userDatasFromDb){

    const idUser = userDatasFromDb.map(item => item.idUser)
    const userName = userDatasFromDb.map(item => item.userName)
    const time = parseInt(process.env.TIME)
    
    const payload = {
        idUser,
        userName,
    }

    const token = jwt.sign(payload,process.env.SECRET,{
        expiresIn: time * 24 //1 hora
    })

    return token;
}

module.exports = generateToken;