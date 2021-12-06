const jwt = require('jsonwebtoken')

function generateToken(userDatasFromDb){

    const idUser = userDatasFromDb.map(item => item.idUser)
    const userName = userDatasFromDb.map(item => item.userName)
    const isAdm = userDatasFromDb.map(item => item.adm)
    const isBlock = userDatasFromDb.map(item => item.isBlock)

    
    const payload = {
        idUser,
        userName,
        isAdm,
        isBlock,
    }

    const token = jwt.sign(payload,process.env.SECRET,{
        expiresIn: 60 * 60
    })

    return token;
}

module.exports = generateToken;