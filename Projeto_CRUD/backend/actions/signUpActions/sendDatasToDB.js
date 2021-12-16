const knex = require('../../connection/connection')

async function sendDatasToDB(userDatas){
        
    const datas = {
        userName: userDatas.userName,
        email: userDatas.email,
        adm: userDatas.isAdm,
        pass: userDatas.pass
    }
    
    try {
        const response = await knex.insert(datas).into("users")
        console.log(response)

        if (response != null || undefined) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
    
}

module.exports = {sendDatasToDB}