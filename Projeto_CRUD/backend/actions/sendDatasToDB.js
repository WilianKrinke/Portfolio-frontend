const knex = require('../connection/connection')

async function sendDatasToDB(userDatas){
        
    const datas = {
        userName: userDatas.userName,
        email: userDatas.email,
        adm: userDatas.isAdm,
        pass: userDatas.pass
    }

    let control = false
    try {
        await knex.insert(datas).into("users")
        control = true;
    } catch (error) {
        console.log(error)
    }
    return control;    
}

module.exports = {sendDatasToDB}