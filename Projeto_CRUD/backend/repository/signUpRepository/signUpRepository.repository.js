const knex = require('../../connection/connection')

async function signUpRepository(datas){
    const response = await knex.insert(datas).into("nodecrud.users")

    if (response[0] != undefined) {
        return true
    } else {
        throw new Error('Server Error - sendDatasToDB')
    }  
}

module.exports = signUpRepository; 