const knex = require("../../connection/connection");

async function haveTokenValid(userDatas) {    
    const {idUser} = userDatas    
    const response = await knex('resetpass').select().where('idUser', idUser)
    
    if (response[0] !== undefined) {
        return true
    } else {
        return false
    }
}


module.exports = haveTokenValid;