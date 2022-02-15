const knex = require('../../connection/connection')

async function sendDatasToDB(userDatas){ 
    
    
    const datas = {
        userName: userDatas.userName.toLowerCase(),
        email: userDatas.email,
        pass: userDatas.pass
    }    
    
    const response = await knex.insert(datas).into("users")

    if (response[0] != undefined) {
        return true
    } else {
        throw new Error('Server Error - sendDatasToDB')
    }    
}

module.exports = {sendDatasToDB}